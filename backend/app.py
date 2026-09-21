import os
import time
import shutil
import smtplib
import hashlib
import hmac
import secrets
import base64
import json
from pathlib import Path
from collections import defaultdict

# Load .env if present
env_file = Path(__file__).parent / ".env"
if env_file.exists():
    with open(env_file, "r", encoding="utf-8") as f:
        for line in f:
            line_s = line.strip()
            if line_s and not line_s.startswith("#") and "=" in line_s:
                k, v = line_s.split("=", 1)
                os.environ[k.strip()] = v.strip()

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from typing import Optional, List, Union
from fastapi import FastAPI, HTTPException, Request, Response, Depends, File, UploadFile, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr
import mysql.connector
from mysql.connector import Error

app = FastAPI(title="Innrly Lead Capture Backend")

# Ensure uploads directory exists and mount it
os.makedirs("uploads", exist_ok=True)
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Admin Auth Configurations
ADMIN_USERNAME = os.environ.get("ADMIN_USERNAME", "QhotelHub")
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "!nnrly#2@27")
ADMIN_TOKEN = os.environ.get("ADMIN_TOKEN", "innrly-secret-admin-session-token-2026")
JWT_SECRET = os.environ.get("JWT_SECRET", "innrly-jwt-secret-key-2026-secure-auth-v1")

security = HTTPBearer(auto_error=False)

def hash_password(password: str) -> str:
    salt = secrets.token_hex(16)
    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt.encode('utf-8'), 100000)
    return f"pbkdf2_sha256$100000${salt}${key.hex()}"

def verify_password(password: str, stored_hash: str) -> bool:
    try:
        parts = stored_hash.split('$')
        if len(parts) != 4 or parts[0] != 'pbkdf2_sha256':
            return password == stored_hash
        iterations = int(parts[1])
        salt = parts[2]
        key = parts[3]
        new_key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt.encode('utf-8'), iterations)
        return hmac.compare_digest(new_key.hex(), key)
    except Exception:
        return False

def create_access_token(user_id: int, username: str, role: str, permissions: list, name: str = "") -> str:
    payload = {
        "user_id": user_id,
        "username": username,
        "role": role,
        "permissions": permissions,
        "name": name or username,
        "exp": int(time.time()) + (86400 * 7)  # 7 days validity
    }
    payload_bytes = json.dumps(payload, separators=(',', ':')).encode('utf-8')
    payload_b64 = base64.urlsafe_b64encode(payload_bytes).decode('utf-8').rstrip('=')
    sig = hmac.new(JWT_SECRET.encode('utf-8'), payload_b64.encode('utf-8'), hashlib.sha256).digest()
    sig_b64 = base64.urlsafe_b64encode(sig).decode('utf-8').rstrip('=')
    return f"{payload_b64}.{sig_b64}"

def decode_access_token(token: str) -> Optional[dict]:
    # Support static legacy token for backward compatibility
    if token == ADMIN_TOKEN:
        return {
            "user_id": 0,
            "username": ADMIN_USERNAME,
            "name": "Super Administrator",
            "role": "super_admin",
            "permissions": ["all"],
            "exp": int(time.time()) + 86400
        }
    try:
        parts = token.split('.')
        if len(parts) != 2:
            return None
        payload_b64, sig_b64 = parts
        expected_sig = hmac.new(JWT_SECRET.encode('utf-8'), payload_b64.encode('utf-8'), hashlib.sha256).digest()
        sig_padding = '=' * (-len(sig_b64) % 4)
        actual_sig = base64.urlsafe_b64decode(sig_b64 + sig_padding)
        if not hmac.compare_digest(expected_sig, actual_sig):
            return None
        
        payload_padding = '=' * (-len(payload_b64) % 4)
        payload_bytes = base64.urlsafe_b64decode(payload_b64 + payload_padding)
        payload = json.loads(payload_bytes.decode('utf-8'))
        
        if payload.get("exp") and payload["exp"] < time.time():
            return None
        return payload
    except Exception:
        return None

def get_current_user(credentials: Optional[HTTPAuthorizationCredentials] = Depends(security)) -> dict:
    if not credentials or not credentials.credentials:
        raise HTTPException(status_code=401, detail="Authentication required")
    payload = decode_access_token(credentials.credentials)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid or expired admin session token")
    return payload

def verify_token(credentials: Optional[HTTPAuthorizationCredentials] = Depends(security)) -> str:
    user = get_current_user(credentials)
    return user.get("username", "admin")

def require_super_admin(current_user: dict = Depends(get_current_user)) -> dict:
    if current_user.get("role") != "super_admin":
        raise HTTPException(status_code=403, detail="Super Admin privileges required")
    return current_user

def require_permission(module_name: str):
    def dependency(current_user: dict = Depends(get_current_user)) -> dict:
        if current_user.get("role") == "super_admin":
            return current_user
        perms = current_user.get("permissions", [])
        if "all" in perms or module_name in perms:
            return current_user
        raise HTTPException(status_code=403, detail=f"Permission denied for module: {module_name}")
    return dependency

import db_config

def get_db_connection():
    # 1. Try primary DB_CONFIG
    try:
        return mysql.connector.connect(**db_config.DB_CONFIG)
    except Error:
        pass

    # 2. Try alternate local ports (3307 / 3306) with primary credentials
    current_port = db_config.DB_CONFIG.get("port", 3306)
    for p in [3307, 3306]:
        if p != current_port:
            try:
                alt_config = {**db_config.DB_CONFIG, "port": p}
                return mysql.connector.connect(**alt_config)
            except Error:
                pass

    # 3. Try root fallback without password for local WAMP/MySQL development
    for p in [current_port, 3307, 3306]:
        try:
            root_config = {
                "host": db_config.DB_CONFIG.get("host", "127.0.0.1"),
                "user": "root",
                "password": "",
                "database": db_config.DB_CONFIG.get("database", "innrly_leads"),
                "port": p
            }
            return mysql.connector.connect(**root_config)
        except Error:
            pass

    try:
        # Retry primary to throw standard error if all failed
        return mysql.connector.connect(**db_config.DB_CONFIG)
    except Error as e:
        print(f"Error connecting to MySQL with config {db_config.DB_CONFIG}: {e}")
        raise HTTPException(status_code=500, detail=f"Database connection error: {e}")


def init_db():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        # 1. Admin Users Table
        cur.execute("""
            CREATE TABLE IF NOT EXISTS admin_users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                username VARCHAR(100) NOT NULL UNIQUE,
                email VARCHAR(255) NULL,
                password_hash VARCHAR(255) NOT NULL,
                role VARCHAR(50) NOT NULL DEFAULT 'normal_user',
                permissions TEXT NULL,
                status VARCHAR(50) NOT NULL DEFAULT 'active',
                last_login_at DATETIME NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        """)

        # 2. Site Settings Table
        cur.execute("""
            CREATE TABLE IF NOT EXISTS site_settings (
                setting_key VARCHAR(191) PRIMARY KEY,
                setting_value TEXT NOT NULL,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        """)

        # 3. SEO Settings Table
        cur.execute("""
            CREATE TABLE IF NOT EXISTS seo_settings (
                page_path VARCHAR(255) PRIMARY KEY,
                title VARCHAR(255) NULL,
                description TEXT NULL,
                keywords TEXT NULL,
                og_title VARCHAR(255) NULL,
                og_description TEXT NULL,
                og_image VARCHAR(500) NULL,
                in_sitemap TINYINT(1) DEFAULT 1,
                changefreq VARCHAR(50) DEFAULT 'monthly',
                priority VARCHAR(20) DEFAULT '0.8',
                canonical_url VARCHAR(500) NULL,
                robots_meta VARCHAR(100) DEFAULT 'index, follow',
                structured_data MEDIUMTEXT NULL,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        """)

        # Check and seed default root admin user
        cur.execute("SELECT id FROM admin_users WHERE username = %s", (ADMIN_USERNAME,))
        if not cur.fetchone():
            default_hash = hash_password(ADMIN_PASSWORD)
            cur.execute("""
                INSERT INTO admin_users (name, username, email, password_hash, role, permissions, status)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
            """, ("Super Administrator", ADMIN_USERNAME, "admin@innrly.com", default_hash, "super_admin", json.dumps(["all"]), "active"))
            conn.commit()

        conn.commit()
        cur.close()
        conn.close()
        print("[DB Init] All database tables verified & initialized successfully.")
    except Exception as e:
        print(f"[DB Init] Note: DB startup verification: {e}")

@app.on_event("startup")
async def on_startup():
    init_db()

# Rate limiting storage (in-memory)
LEAD_RATE_LIMITS = defaultdict(list)  # client_ip -> list of timestamps

# Lead Disk Logging Setup
LEAD_LOGS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "logs", "leads")
os.makedirs(LEAD_LOGS_DIR, exist_ok=True)

def ensure_lead_logs_dir():
    os.makedirs(LEAD_LOGS_DIR, exist_ok=True)

def get_disk_log_file_path(date_obj=None):
    ensure_lead_logs_dir()
    d = date_obj or datetime.utcnow()
    date_str = d.strftime("%Y-%m-%d")
    return os.path.join(LEAD_LOGS_DIR, f"leads-{date_str}.jsonl")

def append_disk_log(log_entry: dict):
    try:
        ensure_lead_logs_dir()
        date_obj = datetime.utcnow()
        if log_entry.get("timestamp"):
            try:
                date_obj = datetime.fromisoformat(log_entry["timestamp"].replace("Z", ""))
            except Exception:
                pass
        filepath = get_disk_log_file_path(date_obj)
        with open(filepath, "a", encoding="utf-8") as f:
            f.write(json.dumps(log_entry, ensure_ascii=False) + "\n")
    except Exception as e:
        print(f"[LeadLogger] Error writing disk log: {e}")

def update_disk_log(log_id: str, updates: dict):
    try:
        ensure_lead_logs_dir()
        import glob
        for filepath in glob.glob(os.path.join(LEAD_LOGS_DIR, "leads-*.jsonl")):
            modified = False
            lines = []
            with open(filepath, "r", encoding="utf-8") as f:
                for line in f:
                    line_str = line.strip()
                    if not line_str:
                        continue
                    try:
                        entry = json.loads(line_str)
                        if entry.get("log_id") == log_id:
                            entry.update(updates)
                            modified = True
                        lines.append(json.dumps(entry, ensure_ascii=False))
                    except Exception:
                        lines.append(line_str)
            if modified:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write("\n".join(lines) + "\n")
                break
    except Exception as e:
        print(f"[LeadLogger] Error updating disk log for {log_id}: {e}")

def read_all_disk_logs() -> List[dict]:
    ensure_lead_logs_dir()
    import glob
    logs = []
    for filepath in sorted(glob.glob(os.path.join(LEAD_LOGS_DIR, "leads-*.jsonl")), reverse=True):
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                for line in f:
                    line_str = line.strip()
                    if line_str:
                        try:
                            logs.append(json.loads(line_str))
                        except Exception:
                            pass
        except Exception as e:
            print(f"[LeadLogger] Error reading log file {filepath}: {e}")
    logs.sort(key=lambda x: x.get("timestamp", ""), reverse=True)
    return logs

# SMTP Configurations (Dynamically fetched from DB with .env fallback)
def get_smtp_config() -> dict:
    """
    Dynamically loads SMTP configuration from site_settings database table,
    falling back to environment variables.
    """
    config = {
        "host": os.environ.get("SMTP_HOST", "smtp.office365.com"),
        "port": int(os.environ.get("SMTP_PORT", "587")),
        "user": os.environ.get("SMTP_USER", "donotreply@innrly.com"),
        "password": os.environ.get("SMTP_PASSWORD", "Laplace9!"),
        "from_email": os.environ.get("EMAIL_FROM", "donotreply@innrly.com")
    }
    try:
        conn = get_db_connection()
        cur = conn.cursor(dictionary=True)
        cur.execute("""
            CREATE TABLE IF NOT EXISTS site_settings (
                setting_key VARCHAR(191) PRIMARY KEY,
                setting_value TEXT NOT NULL,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        """)
        cur.execute("SELECT setting_key, setting_value FROM site_settings WHERE setting_key IN ('smtp_host', 'smtp_port', 'smtp_user', 'smtp_password', 'email_from')")
        rows = cur.fetchall()
        for r in rows:
            k = r.get("setting_key")
            v = r.get("setting_value")
            if k == "smtp_host" and v:
                config["host"] = v.strip()
            elif k == "smtp_port" and v:
                try:
                    config["port"] = int(v.strip())
                except ValueError:
                    pass
            elif k == "smtp_user" and v:
                config["user"] = v.strip()
            elif k == "smtp_password" and v:
                config["password"] = v
            elif k == "email_from" and v:
                config["from_email"] = v.strip()
        cur.close()
        conn.close()
    except Exception as e:
        print(f"[SMTP Config] Warning: DB lookup failed ({e}), using environment/default config.")
    return config

def send_email_safe(to_email: str, subject: str, html_content: str) -> tuple[bool, Optional[str]]:
    smtp_cfg = get_smtp_config()
    host = smtp_cfg["host"]
    port = smtp_cfg["port"]
    user = smtp_cfg["user"]
    password = smtp_cfg["password"]
    from_email = smtp_cfg["from_email"]
    
    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"] = from_email
        msg["To"] = to_email
        msg.attach(MIMEText(html_content, "html"))
        
        with smtplib.SMTP(host, port, timeout=15) as server:
            if user and password:
                server.ehlo()
                server.starttls()
                server.ehlo()
                server.login(user, password)
            server.sendmail(from_email, [to_email], msg.as_string())
        print(f"Email sent successfully to {to_email} via {host}:{port}")
        return True, None
    except Exception as e:
        err_msg = str(e)
        print(f"Warning: Failed to send email to {to_email}: {err_msg}")
        return False, err_msg

def get_email_template(title: str, content: str) -> str:
    current_year = datetime.utcnow().year
    return f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{title}</title>
    <style>
        body {{
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
        }}
        .container {{
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
        }}
        .header {{
            background-color: #0f172a;
            padding: 32px;
            text-align: center;
        }}
        .content {{
            padding: 40px;
            color: #334155;
            line-height: 1.6;
        }}
        .content h1 {{
            color: #0f172a;
            font-size: 24px;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 16px;
        }}
        .content p {{
            margin-top: 0;
            margin-bottom: 24px;
            font-size: 16px;
        }}
        .details-table {{
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 24px;
        }}
        .details-table th, .details-table td {{
            padding: 12px 16px;
            text-align: left;
            border-bottom: 1px solid #f1f5f9;
            font-size: 14px;
        }}
        .details-table th {{
            background-color: #f8fafc;
            color: #475569;
            font-weight: 600;
            width: 35%;
        }}
        .details-table td {{
            color: #0f172a;
        }}
        .button {{
            display: inline-block;
            background-color: #4f46e5;
            color: #ffffff !important;
            padding: 12px 24px;
            font-weight: 600;
            text-decoration: none;
            border-radius: 8px;
            font-size: 16px;
            text-align: center;
            margin-top: 16px;
        }}
        .footer {{
            background-color: #f8fafc;
            padding: 24px 40px;
            text-align: center;
            font-size: 12px;
            color: #64748b;
            border-top: 1px solid #e2e8f0;
        }}
        .footer a {{
            color: #4f46e5;
            text-decoration: none;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <span style="color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: 0.05em;">Innrly</span>
        </div>
        <div class="content">
            {content}
        </div>
        <div class="footer">
            &copy; {current_year} Innrly LLC. All rights reserved.<br>
            4276 Hwy 51, LaPlace, LA 70068<br>
            If you have any questions, email us at <a href="mailto:support@innrly.com">support@innrly.com</a>.
        </div>
    </div>
</body>
</html>"""


def trigger_lead_emails(payload) -> tuple[bool, Optional[str]]:
    submitter_email = None
    submitter_subject = ""
    submitter_body = ""
    
    kind = getattr(payload, "kind", None) or (payload.get("kind") if isinstance(payload, dict) else None)
    source = getattr(payload, "source", None) or (payload.get("source") if isinstance(payload, dict) else None)
    email = getattr(payload, "email", None) or (payload.get("email") if isinstance(payload, dict) else None)
    work_email = getattr(payload, "work_email", None) or (payload.get("work_email") if isinstance(payload, dict) else None)
    workEmail = getattr(payload, "workEmail", None) or (payload.get("workEmail") if isinstance(payload, dict) else None)
    contactEmail = getattr(payload, "contactEmail", None) or (payload.get("contactEmail") if isinstance(payload, dict) else None)
    subSource = getattr(payload, "subSource", None) or (payload.get("subSource") if isinstance(payload, dict) else None)
    name = getattr(payload, "name", None) or (payload.get("name") if isinstance(payload, dict) else None)
    company = getattr(payload, "company", None) or (payload.get("company") if isinstance(payload, dict) else None)
    phone = getattr(payload, "phone", None) or (payload.get("phone") if isinstance(payload, dict) else None)
    properties = getattr(payload, "properties", None) or (payload.get("properties") if isinstance(payload, dict) else None)
    message = getattr(payload, "message", None) or (payload.get("message") if isinstance(payload, dict) else None)
    role = getattr(payload, "role", None) or (payload.get("role") if isinstance(payload, dict) else None)
    pms = getattr(payload, "pms", None) or (payload.get("pms") if isinstance(payload, dict) else None)
    companyDetails = getattr(payload, "companyDetails", None) or (payload.get("companyDetails") if isinstance(payload, dict) else None)
    propertiesList = getattr(payload, "propertiesList", None) or (payload.get("propertiesList") if isinstance(payload, dict) else None)
    
    lead_email = email or work_email or workEmail or contactEmail
    
    sales_subject = f"[Lead Alert] New {kind or source or 'Lead'} Submission"
    sales_body_rows = []
    
    if kind == "newsletter":
        submitter_email = lead_email
        submitter_subject = "Welcome to the Innrly Newsletter"
        submitter_body = f"""<h1>Welcome to the Innrly Newsletter!</h1>
<p>Thank you for subscribing to the Innrly monthly newsletter. We are excited to share hospitality tech insights, night audit automation tips, and back-office best practices directly to your inbox.</p>
<p>If you didn't sign up for this newsletter, you can safely unsubscribe by clicking below.</p>
<a href="https://www.innrly.com/unsubscribe?email={lead_email}" class="button">Unsubscribe</a>"""
        
        sales_body_rows = [
            f"<tr><th>Source</th><td>Newsletter Subscription</td></tr>",
            f"<tr><th>Email</th><td>{lead_email}</td></tr>",
            f"<tr><th>Sub-Source</th><td>{subSource or 'N/A'}</td></tr>"
        ]
        
    elif source == "contact":
        submitter_email = lead_email
        submitter_subject = "We've Received Your Inquiry"
        submitter_body = f"""<h1>We've Received Your Inquiry</h1>
<p>Hi {name or 'there'},</p>
<p>Thank you for reaching out to Innrly! We have received your message and our hospitality solutions team is already reviewing it. You can expect a response from us within one business day.</p>
<p>Here is a summary of the details you submitted:</p>
<table class="details-table">
    <tr><th>Name</th><td>{name or 'N/A'}</td></tr>
    <tr><th>Email</th><td>{lead_email or 'N/A'}</td></tr>
    <tr><th>Company</th><td>{company or 'N/A'}</td></tr>
    <tr><th>Phone</th><td>{phone or 'N/A'}</td></tr>
    <tr><th>Properties</th><td>{properties or 'N/A'}</td></tr>
    <tr><th>Message</th><td>{message or 'N/A'}</td></tr>
</table>
<p>In the meantime, feel free to explore our solutions or read our buyer's guide.</p>
<a href="https://www.innrly.com/features" class="button">Explore Features</a>"""
        
        sales_body_rows = [
            f"<tr><th>Source</th><td>Contact Form</td></tr>",
            f"<tr><th>Name</th><td>{name or 'N/A'}</td></tr>",
            f"<tr><th>Email</th><td>{lead_email or 'N/A'}</td></tr>",
            f"<tr><th>Company</th><td>{company or 'N/A'}</td></tr>",
            f"<tr><th>Phone</th><td>{phone or 'N/A'}</td></tr>",
            f"<tr><th>Properties</th><td>{properties or 'N/A'}</td></tr>",
            f"<tr><th>Message</th><td>{message or 'N/A'}</td></tr>"
        ]
        
    elif source == "trial":
        submitter_email = lead_email
        submitter_subject = "Your 14-Day Free Trial Request"
        submitter_body = f"""<h1>Your 14-Day Free Trial Request</h1>
<p>Hi {name or 'there'},</p>
<p>Thank you for requesting a 14-day free trial of Innrly! We are setting up your sandbox environment. A member of our onboarding team will contact you shortly to schedule a quick 10-minute setup call and walk you through the platform.</p>
<p>Here are your registration details:</p>
<table class="details-table">
    <tr><th>Name</th><td>{name or 'N/A'}</td></tr>
    <tr><th>Email</th><td>{lead_email or 'N/A'}</td></tr>
    <tr><th>Company</th><td>{company or 'N/A'}</td></tr>
    <tr><th>Role</th><td>{role or 'N/A'}</td></tr>
    <tr><th>Phone</th><td>{phone or 'N/A'}</td></tr>
    <tr><th>Properties</th><td>{properties or 'N/A'}</td></tr>
    <tr><th>PMS</th><td>{pms or 'N/A'}</td></tr>
</table>
<p>We look forward to helping you automate your back office!</p>
<a href="https://www.innrly.com/onboarding" class="button">See Onboarding Guide</a>"""
        
        sales_body_rows = [
            f"<tr><th>Source</th><td>Trial Request</td></tr>",
            f"<tr><th>Name</th><td>{name or 'N/A'}</td></tr>",
            f"<tr><th>Email</th><td>{lead_email or 'N/A'}</td></tr>",
            f"<tr><th>Company</th><td>{company or 'N/A'}</td></tr>",
            f"<tr><th>Role</th><td>{role or 'N/A'}</td></tr>",
            f"<tr><th>Phone</th><td>{phone or 'N/A'}</td></tr>",
            f"<tr><th>Properties</th><td>{properties or 'N/A'}</td></tr>",
            f"<tr><th>PMS</th><td>{pms or 'N/A'}</td></tr>"
        ]
        
    elif source == "onboarding":
        c = companyDetails
        if c:
            c_name = getattr(c, "companyName", None) or (c.get("companyName") if isinstance(c, dict) else None) or "N/A"
            c_auth = getattr(c, "authorizedPerson", None) or (c.get("authorizedPerson") if isinstance(c, dict) else None) or "there"
            c_email = getattr(c, "email", None) or (c.get("email") if isinstance(c, dict) else None)
            c_mobile = getattr(c, "mobile", None) or (c.get("mobile") if isinstance(c, dict) else None) or "N/A"
            c_work = getattr(c, "work", None) or (c.get("work") if isinstance(c, dict) else None) or "N/A"
            c_address = getattr(c, "address", None) or (c.get("address") if isinstance(c, dict) else None) or ""
            c_city = getattr(c, "city", None) or (c.get("city") if isinstance(c, dict) else None) or ""
            c_state = getattr(c, "state", None) or (c.get("state") if isinstance(c, dict) else None) or ""
            c_zip = getattr(c, "zip", None) or (c.get("zip") if isinstance(c, dict) else None) or ""
            
            submitter_email = c_email
            submitter_subject = "Onboarding Application Received"
            properties_count = len(propertiesList) if propertiesList else 0
            submitter_body = f"""<h1>Onboarding Application Received</h1>
<p>Hi {c_auth},</p>
<p>Thank you for submitting your onboarding application for <strong>{c_name}</strong>. We are thrilled to welcome you to the Innrly platform!</p>
<p>Our implementation specialists are reviewing your company and property details to begin setting up your integrations (PMS, M3/QuickBooks, banking, etc.). We will contact you within 24 hours to schedule your kickoff call.</p>
<p>Application details summarized below:</p>
<table class="details-table">
    <tr><th>Company Name</th><td>{c_name}</td></tr>
    <tr><th>Authorized Person</th><td>{c_auth}</td></tr>
    <tr><th>Contact Email</th><td>{c_email or 'N/A'}</td></tr>
    <tr><th>Mobile Phone</th><td>{c_mobile}</td></tr>
    <tr><th>Work Phone</th><td>{c_work}</td></tr>
    <tr><th>Properties to Onboard</th><td>{properties_count}</td></tr>
</table>
<a href="https://www.innrly.com/onboarding" class="button">Onboarding Portal</a>"""
            
            sales_body_rows = [
                f"<tr><th>Source</th><td>Onboarding Application</td></tr>",
                f"<tr><th>Company Name</th><td>{c_name}</td></tr>",
                f"<tr><th>Authorized Person</th><td>{c_auth}</td></tr>",
                f"<tr><th>Email</th><td>{c_email or 'N/A'}</td></tr>",
                f"<tr><th>Address</th><td>{c_address}, {c_city}, {c_state} {c_zip}</td></tr>",
                f"<tr><th>Mobile</th><td>{c_mobile}</td></tr>",
                f"<tr><th>Work Phone</th><td>{c_work}</td></tr>",
                f"<tr><th>Properties Count</th><td>{properties_count}</td></tr>"
            ]

    errors = []
    # Send Submitter Confirmation
    if submitter_email and submitter_subject and submitter_body:
        html_submitter = get_email_template(submitter_subject, submitter_body)
        ok, err = send_email_safe(submitter_email, submitter_subject, html_submitter)
        if not ok:
            errors.append(f"Submitter email failed: {err}")
        
    # Send Sales Notification
    if sales_body_rows:
        rows_str = "\n".join(sales_body_rows)
        sales_content = f"""<h1>New Lead Received ({source or kind})</h1>
<p>A new lead submission was captured. Details are provided below:</p>
<table class="details-table">
    {rows_str}
</table>"""
        html_sales = get_email_template(sales_subject, sales_content)
        ok, err = send_email_safe("sales@innrly.com", sales_subject, html_sales)
        if not ok:
            errors.append(f"Sales alert email failed: {err}")

    if errors:
        return False, "; ".join(errors)
    return True, None

# Innrly Portal Sync Configurations (https://ob.innrly.com)
INNRLY_PORTAL_BASE_URL = os.environ.get("INNRLY_PORTAL_BASE_URL", "https://ob.innrly.com")
INNRLY_PORTAL_EMAIL = os.environ.get("INNRLY_PORTAL_EMAIL", "jdoe@innrly.com")
INNRLY_PORTAL_PASSWORD = os.environ.get("INNRLY_PORTAL_PASSWORD", "InnrlyAdmin#2026")
INNRLY_PORTAL_SYNC_ENABLED = os.environ.get("INNRLY_PORTAL_SYNC_ENABLED", "true").lower() == "true"

def process_portal_onboarding_sync(
    log_id: str,
    company_data: dict,
    properties_data: list,
    users_data: list
) -> dict:
    """
    Synchronizes an onboarding application to https://ob.innrly.com using InnrlyPortalClient.
    Updates the disk log with the sync status.
    """
    if not INNRLY_PORTAL_SYNC_ENABLED:
        msg = "Portal sync is disabled via INNRLY_PORTAL_SYNC_ENABLED=false."
        print(f"[Portal Sync] Skipped for {log_id}: {msg}")
        return {"success": False, "skipped": True, "reason": msg}

    if not INNRLY_PORTAL_EMAIL or not INNRLY_PORTAL_PASSWORD:
        msg = "Portal credentials missing (set INNRLY_PORTAL_EMAIL & INNRLY_PORTAL_PASSWORD in .env)."
        print(f"[Portal Sync] Skipped for {log_id}: {msg}")
        return {"success": False, "skipped": True, "reason": msg}

    try:
        from innrly_portal_sync import InnrlyPortalClient
        client = InnrlyPortalClient(
            base_url=INNRLY_PORTAL_BASE_URL,
            email=INNRLY_PORTAL_EMAIL,
            password=INNRLY_PORTAL_PASSWORD
        )
        report = client.sync_onboarding(
            company_details=company_data,
            properties_list=properties_data,
            users_list=users_data
        )
        
        # Record sync report in disk log
        portal_update = {
            "portal_sync": {
                "synced_at": datetime.utcnow().isoformat(),
                "success": report.get("success", False),
                "client_id": report.get("client_id"),
                "created_hotels": report.get("created_hotels", []),
                "created_users": report.get("created_users", []),
                "updated_users": report.get("updated_users", []),
                "errors": report.get("errors", [])
            }
        }
        update_disk_log(log_id, portal_update)
        try:
            db_conn = get_db_connection()
            db_cur = db_conn.cursor(dictionary=True)
            db_cur.execute("SELECT db_details FROM lead_event_logs WHERE log_id = %s", (log_id,))
            row = db_cur.fetchone()
            if row:
                details = row.get("db_details")
                if isinstance(details, str):
                    try:
                        details = json.loads(details)
                    except Exception:
                        details = {}
                elif not isinstance(details, dict):
                    details = {}
                details["portal_sync"] = portal_update["portal_sync"]
                db_cur.execute("UPDATE lead_event_logs SET db_details = %s WHERE log_id = %s", (json.dumps(details), log_id))
                db_conn.commit()
            db_cur.close()
            db_conn.close()
        except Exception as e:
            print(f"[LeadLogger] Could not update MySQL db_details with portal sync: {e}")
            
        print(f"[Portal Sync] Log ID {log_id} sync completed: success={report.get('success')}")
        return report
    except Exception as e:
        err_str = f"Portal sync error for {log_id}: {e}"
        print(f"[Portal Sync Error] {err_str}")
        err_sync = {"portal_sync": {"success": False, "error": str(e)}}
        update_disk_log(log_id, err_sync)
        try:
            db_conn = get_db_connection()
            db_cur = db_conn.cursor(dictionary=True)
            db_cur.execute("SELECT db_details FROM lead_event_logs WHERE log_id = %s", (log_id,))
            row = db_cur.fetchone()
            if row:
                details = row.get("db_details")
                if isinstance(details, str):
                    try:
                        details = json.loads(details)
                    except Exception:
                        details = {}
                elif not isinstance(details, dict):
                    details = {}
                details["portal_sync"] = err_sync["portal_sync"]
                db_cur.execute("UPDATE lead_event_logs SET db_details = %s WHERE log_id = %s", (json.dumps(details), log_id))
                db_conn.commit()
            db_cur.close()
            db_conn.close()
        except Exception:
            pass
        return {"success": False, "error": str(e)}

# Pydantic schemas for request validation

class LoginRequest(BaseModel):
    username: str
    password: str

class OnboardingUser(BaseModel):
    name: str
    email: str
    phone: str

class OnboardingProperty(BaseModel):
    propertyName: str
    propertyCode: str
    address: str
    rooms: int
    managerName: str
    managerEmail: str
    managerMobile: str
    pms: str
    pmsOther: Optional[str] = None
    brand: str
    contactPerson: str

class CompanyDetails(BaseModel):
    decisionMaker: str
    companyName: str
    authorizedPerson: str
    email: str
    address: str
    state: str
    city: str
    zip: str
    mobile: str
    work: str

class LeadPayload(BaseModel):
    source: str
    name: Optional[str] = None
    email: Optional[str] = None  # Optional since onboarding has its own email
    work_email: Optional[str] = None
    workEmail: Optional[str] = None
    contactEmail: Optional[str] = None
    company: Optional[str] = None
    role: Optional[str] = None
    phone: Optional[str] = None
    properties: Optional[str] = None
    pms: Optional[str] = None
    message: Optional[str] = None
    subSource: Optional[str] = None  # matches frontend 'subSource' camelCase
    kind: Optional[str] = None
    submittedAt: Optional[str] = None
    
    # Anti-spam & reCAPTCHA fields
    recaptcha_token: Optional[str] = None
    bot_field: Optional[str] = None
    honeypot: Optional[str] = None
    website_url: Optional[str] = None
    
    # Structured onboarding fields
    companyDetails: Optional[CompanyDetails] = None
    users: Optional[List[OnboardingUser]] = None
    propertiesList: Optional[List[OnboardingProperty]] = None

class UpdateContactLeadPayload(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    company: Optional[str] = None
    phone: Optional[str] = None
    properties: Optional[str] = None
    message: Optional[str] = None

class UpdateTrialLeadPayload(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    company: Optional[str] = None
    role: Optional[str] = None
    phone: Optional[str] = None
    properties: Optional[str] = None
    pms: Optional[str] = None

class UpdateOnboardingCompanyPayload(BaseModel):
    company_name: Optional[str] = None
    authorized_person: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None
    zip: Optional[str] = None
    mobile: Optional[str] = None
    work_phone: Optional[str] = None
    decision_maker: Optional[str] = None

class SeoSettingsPayload(BaseModel):
    page_path: str
    title: Optional[str] = None
    description: Optional[str] = None
    keywords: Optional[str] = None
    og_title: Optional[str] = None
    og_description: Optional[str] = None
    og_image: Optional[str] = None
    in_sitemap: Optional[bool] = True
    changefreq: Optional[str] = "monthly"
    priority: Optional[Union[str, float]] = "0.8"

class SiteScriptsPayload(BaseModel):
    ga4_id: Optional[str] = None
    gtm_id: Optional[str] = None
    header_tags: Optional[str] = None
    footer_tags: Optional[str] = None
    is_active: bool = True

class SiteSettingPayload(BaseModel):
    key: Optional[str] = "robots_txt"
    value: Optional[str] = None
    content: Optional[str] = None

class BlogPostPayload(BaseModel):
    id: Optional[int] = None
    title: str
    meta_title: Optional[str] = None
    slug: str
    content: str
    summary: Optional[str] = None
    meta_description: Optional[str] = None
    author: Optional[str] = "The Innrly Team"
    category_id: Optional[int] = None
    featured_image: Optional[str] = None
    featured_image_alt: Optional[str] = None
    status: Optional[str] = "published"
    in_sitemap: Optional[bool] = True

class PmsIntegrationPayload(BaseModel):
    id: Optional[int] = None
    name: str
    initials: str
    hue: int
    domain: Optional[str] = None
    image_url: Optional[str] = None
    badge: Optional[str] = None
    to_url: Optional[str] = None

class IntegrationPayload(BaseModel):
    id: Optional[int] = None
    name: str
    initials: str
    category: str
    hue: int
    domain: Optional[str] = None
    image_url: Optional[str] = None
    badge: Optional[str] = None
    to_url: Optional[str] = None

class CreateUserPayload(BaseModel):
    name: str
    username: str
    email: Optional[str] = None
    password: str
    role: str = "normal_user"  # "super_admin" or "normal_user"
    permissions: List[str] = []
    status: str = "active"     # "active" or "inactive"

class UpdateUserPayload(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    password: Optional[str] = None
    role: Optional[str] = None
    permissions: Optional[List[str]] = None
    status: Optional[str] = None


@app.post("/admin/login")
@app.post("/admin/login/")
@app.post("/api/admin/login")
@app.post("/api/admin/login/")
async def admin_login(payload: LoginRequest):
    cleaned_username = payload.username.strip()
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("""
            SELECT id, name, username, email, password_hash, role, permissions, status
            FROM admin_users
            WHERE username = %s
        """, (cleaned_username,))
        user = cursor.fetchone()

        # Fallback check for root admin if DB user not yet found
        if not user and cleaned_username == ADMIN_USERNAME and payload.password == ADMIN_PASSWORD:
            token = create_access_token(1, ADMIN_USERNAME, "super_admin", ["all"], name="Super Administrator")
            return {
                "token": token,
                "ok": True,
                "id": 1,
                "username": ADMIN_USERNAME,
                "name": "Super Administrator",
                "role": "super_admin",
                "permissions": ["all"]
            }

        if not user or not verify_password(payload.password, user["password_hash"]):
            raise HTTPException(status_code=401, detail="Invalid username or password")

        if user["status"] != "active":
            raise HTTPException(status_code=403, detail="This account has been deactivated. Please contact an administrator.")

        # Parse permissions
        raw_perms = user.get("permissions")
        perms = []
        if isinstance(raw_perms, str):
            try:
                perms = json.loads(raw_perms)
            except Exception:
                perms = []
        elif isinstance(raw_perms, list):
            perms = raw_perms

        if user["role"] == "super_admin":
            perms = ["all"]

        # Update last_login_at timestamp
        cursor.execute("UPDATE admin_users SET last_login_at = %s WHERE id = %s", (datetime.utcnow(), user["id"]))
        connection.commit()

        token = create_access_token(
            user["id"],
            user["username"],
            user["role"],
            perms,
            name=user.get("name", user["username"])
        )
        return {
            "token": token,
            "ok": True,
            "id": user["id"],
            "username": user["username"],
            "name": user.get("name", user["username"]),
            "email": user.get("email"),
            "role": user["role"],
            "permissions": perms
        }
    finally:
        cursor.close()
        connection.close()


@app.get("/admin/verify")
@app.get("/admin/verify/")
@app.get("/api/admin/verify")
@app.get("/api/admin/verify/")
async def admin_verify(current_user: dict = Depends(get_current_user)):
    user_id = current_user.get("user_id")
    if user_id and user_id > 0:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        try:
            cursor.execute("SELECT id, name, username, email, role, permissions, status FROM admin_users WHERE id = %s", (user_id,))
            db_user = cursor.fetchone()
            if db_user:
                if db_user["status"] != "active":
                    raise HTTPException(status_code=403, detail="Account is deactivated")
                raw_perms = db_user.get("permissions")
                perms = []
                if isinstance(raw_perms, str):
                    try:
                        perms = json.loads(raw_perms)
                    except Exception:
                        perms = []
                elif isinstance(raw_perms, list):
                    perms = raw_perms
                if db_user["role"] == "super_admin":
                    perms = ["all"]
                return {
                    "ok": True,
                    "id": db_user["id"],
                    "username": db_user["username"],
                    "name": db_user.get("name", db_user["username"]),
                    "email": db_user.get("email"),
                    "role": db_user["role"],
                    "permissions": perms
                }
        finally:
            cursor.close()
            connection.close()

    return {
        "ok": True,
        "username": current_user.get("username", ADMIN_USERNAME),
        "name": current_user.get("name", "Administrator"),
        "role": current_user.get("role", "super_admin"),
        "permissions": current_user.get("permissions", ["all"])
    }


# ==================== USER MANAGEMENT API (SUPER ADMIN ONLY) ====================

@app.get("/admin/users")
@app.get("/admin/users/")
@app.get("/api/admin/users")
@app.get("/api/admin/users/")
@app.get("/users")
@app.get("/users/")
async def list_admin_users(super_admin: dict = Depends(require_super_admin)):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("""
            SELECT id, name, username, email, role, permissions, status, last_login_at, created_at, updated_at
            FROM admin_users
            ORDER BY id ASC
        """)
        users = cursor.fetchall()
        for u in users:
            raw_perms = u.get("permissions")
            if isinstance(raw_perms, str):
                try:
                    u["permissions"] = json.loads(raw_perms)
                except Exception:
                    u["permissions"] = []
            elif not isinstance(raw_perms, list):
                u["permissions"] = []
            if u.get("created_at"):
                u["created_at"] = u["created_at"].isoformat()
            if u.get("updated_at"):
                u["updated_at"] = u["updated_at"].isoformat()
            if u.get("last_login_at"):
                u["last_login_at"] = u["last_login_at"].isoformat()
        return users
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()


@app.post("/admin/users")
@app.post("/admin/users/")
@app.post("/users")
@app.post("/users/")
async def create_admin_user(payload: CreateUserPayload, super_admin: dict = Depends(require_super_admin)):
    cleaned_username = payload.username.strip()
    if not cleaned_username:
        raise HTTPException(status_code=400, detail="Username is required")
    if not payload.name.strip():
        raise HTTPException(status_code=400, detail="Full name is required")
    if not payload.password or len(payload.password) < 6:
        raise HTTPException(status_code=400, detail="Password must be at least 6 characters")

    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        # Check if username already exists
        cursor.execute("SELECT id FROM admin_users WHERE username = %s", (cleaned_username,))
        existing = cursor.fetchone()
        if existing:
            raise HTTPException(status_code=400, detail=f"Username '{cleaned_username}' is already taken")

        pwd_hash = hash_password(payload.password)
        role = "super_admin" if payload.role == "super_admin" else "normal_user"
        perms = ["all"] if role == "super_admin" else payload.permissions
        status = "inactive" if payload.status == "inactive" else "active"

        sql = """
            INSERT INTO admin_users (name, username, email, password_hash, role, permissions, status)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """
        cursor.execute(sql, (
            payload.name.strip(),
            cleaned_username,
            payload.email.strip() if payload.email else None,
            pwd_hash,
            role,
            json.dumps(perms),
            status
        ))
        connection.commit()
        new_id = cursor.lastrowid
        return {
            "ok": True,
            "message": "User created successfully",
            "id": new_id,
            "username": cleaned_username
        }
    except HTTPException:
        raise
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()


@app.put("/admin/users/{user_id}")
@app.put("/admin/users/{user_id}/")
@app.put("/users/{user_id}")
@app.put("/users/{user_id}/")
async def update_admin_user(user_id: int, payload: UpdateUserPayload, super_admin: dict = Depends(require_super_admin)):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT * FROM admin_users WHERE id = %s", (user_id,))
        existing = cursor.fetchone()
        if not existing:
            raise HTTPException(status_code=404, detail="User not found")

        # Safeguard: prevent super admin from disabling or demoting their own current account
        if super_admin.get("user_id") == user_id:
            if payload.status == "inactive":
                raise HTTPException(status_code=400, detail="You cannot deactivate your own account")
            if payload.role == "normal_user":
                raise HTTPException(status_code=400, detail="You cannot revoke Super Admin role from yourself")

        updates = []
        values = []

        if payload.name is not None:
            updates.append("name = %s")
            values.append(payload.name.strip())

        if payload.email is not None:
            updates.append("email = %s")
            values.append(payload.email.strip() if payload.email else None)

        if payload.password and payload.password.strip():
            if len(payload.password.strip()) < 6:
                raise HTTPException(status_code=400, detail="Password must be at least 6 characters")
            updates.append("password_hash = %s")
            values.append(hash_password(payload.password.strip()))

        if payload.role is not None:
            role = "super_admin" if payload.role == "super_admin" else "normal_user"
            updates.append("role = %s")
            values.append(role)

        if payload.permissions is not None:
            perms = ["all"] if (payload.role or existing["role"]) == "super_admin" else payload.permissions
            updates.append("permissions = %s")
            values.append(json.dumps(perms))

        if payload.status is not None:
            status = "inactive" if payload.status == "inactive" else "active"
            updates.append("status = %s")
            values.append(status)

        if not updates:
            return {"ok": True, "message": "No changes requested"}

        values.append(user_id)
        sql = f"UPDATE admin_users SET {', '.join(updates)} WHERE id = %s"
        cursor.execute(sql, tuple(values))
        connection.commit()

        return {"ok": True, "message": "User updated successfully", "id": user_id}
    except HTTPException:
        raise
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()


@app.delete("/admin/users/{user_id}")
@app.delete("/admin/users/{user_id}/")
@app.delete("/users/{user_id}")
@app.delete("/users/{user_id}/")
async def delete_admin_user(user_id: int, super_admin: dict = Depends(require_super_admin)):
    if super_admin.get("user_id") == user_id:
        raise HTTPException(status_code=400, detail="You cannot delete your own account")

    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT id, role FROM admin_users WHERE id = %s", (user_id,))
        existing = cursor.fetchone()
        if not existing:
            raise HTTPException(status_code=404, detail="User not found")

        # Ensure at least one super admin remains
        if existing["role"] == "super_admin":
            cursor.execute("SELECT COUNT(*) as total FROM admin_users WHERE role = 'super_admin' AND status = 'active'")
            count_res = cursor.fetchone()
            if count_res and count_res["total"] <= 1:
                raise HTTPException(status_code=400, detail="Cannot delete the only remaining active Super Admin")

        cursor.execute("DELETE FROM admin_users WHERE id = %s", (user_id,))
        connection.commit()
        return {"ok": True, "message": "User deleted successfully"}
    except HTTPException:
        raise
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.post("/leads")
@app.post("/leads/")
@app.post("/api/leads")
@app.post("/api/leads/")
async def create_lead(payload: LeadPayload, request: Request, background_tasks: BackgroundTasks):
    # Honeypot validation (silent success if bot filled honeypot fields)
    if payload.bot_field or payload.honeypot or payload.website_url:
        print("[Anti-Spam] Bot detected via honeypot field. Silently ignoring.")
        return {"ok": True, "message": "Lead captured successfully"}

    # Rate Limiting (5 submissions per minute per IP)
    client_ip = request.client.host if request.client else "127.0.0.1"
    now = time.time()
    LEAD_RATE_LIMITS[client_ip] = [t for t in LEAD_RATE_LIMITS[client_ip] if now - t < 60]
    if len(LEAD_RATE_LIMITS[client_ip]) >= 5:
        raise HTTPException(status_code=429, detail="Too many lead submission requests. Please try again in a minute.")
    LEAD_RATE_LIMITS[client_ip].append(now)

    # 1. Generate unique Log ID and extract metadata
    log_id = f"LEAD-{datetime.utcnow().strftime('%Y%m%d%H%M%S')}-{secrets.token_hex(3).upper()}"
    submitted_at_dt = datetime.utcnow()
    if payload.submittedAt:
        try:
            iso_str = payload.submittedAt.replace("Z", "")
            submitted_at_dt = datetime.fromisoformat(iso_str)
        except Exception:
            submitted_at_dt = datetime.utcnow()

    # Determine submitter details
    submitter_name = payload.name
    company_name = payload.company
    lead_email = payload.email or payload.work_email or payload.workEmail or payload.contactEmail

    if payload.source == "onboarding" and payload.companyDetails:
        c = payload.companyDetails
        company_name = c.companyName or company_name
        submitter_name = c.authorizedPerson or submitter_name
        lead_email = c.email or lead_email
    elif payload.kind == "newsletter":
        submitter_name = "Subscriber"
        company_name = "Newsletter"
        lead_email = payload.email or lead_email

    lead_email = lead_email or "unknown@innrly.com"
    raw_payload_dict = payload.dict()

    # 2. FAIL-SAFE DISK LOGGING (Write immediately BEFORE attempting DB)
    initial_disk_entry = {
        "log_id": log_id,
        "source": payload.source or payload.kind or "unknown",
        "submitter_name": submitter_name,
        "submitter_email": lead_email,
        "company_name": company_name,
        "overall_status": "failed",
        "db_status": "failed",
        "db_details": {"stage": "pre_db_write"},
        "email_status": "skipped",
        "email_error": None,
        "raw_payload": raw_payload_dict,
        "is_recovered": False,
        "recovered_at": None,
        "timestamp": datetime.utcnow().isoformat(),
        "client_ip": client_ip
    }
    append_disk_log(initial_disk_entry)

    db_status = "failed"
    db_details = {}
    email_status = "skipped"
    email_error = None
    overall_status = "failed"

    # 3. GRANULAR DATABASE EXECUTION
    connection = None
    cursor = None
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)

        if payload.kind == "newsletter":
            # Check for recent duplicate subscription within 24h
            try:
                cursor.execute(
                    "SELECT id FROM newsletter_subscribers WHERE email = %s ORDER BY id DESC LIMIT 1",
                    (lead_email,)
                )
                existing = cursor.fetchone()
                if existing:
                    db_status = "success"
                    db_details = {"newsletter_saved": True, "duplicate": True}
                else:
                    cursor.execute(
                        "INSERT INTO newsletter_subscribers (email, sub_source, submitted_at) VALUES (%s, %s, %s)",
                        (lead_email, payload.subSource, submitted_at_dt)
                    )
                    connection.commit()
                    db_status = "success"
                    db_details = {"newsletter_saved": True, "id": cursor.lastrowid}
            except Exception as n_err:
                db_status = "failed"
                db_details = {"error": str(n_err)}

        elif payload.source == "contact":
            try:
                cursor.execute(
                    """
                    INSERT INTO contact_leads (name, email, company, phone, properties, message, submitted_at)
                    VALUES (%s, %s, %s, %s, %s, %s, %s)
                    """,
                    (payload.name, lead_email, payload.company, payload.phone, payload.properties, payload.message, submitted_at_dt)
                )
                connection.commit()
                db_status = "success"
                db_details = {"contact_saved": True, "id": cursor.lastrowid}
            except Exception as c_err:
                db_status = "failed"
                db_details = {"error": str(c_err)}

        elif payload.source == "trial":
            try:
                cursor.execute(
                    """
                    INSERT INTO trial_leads (name, email, company, role, phone, properties, pms, submitted_at)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                    """,
                    (payload.name, lead_email, payload.company, payload.role, payload.phone, payload.properties, payload.pms, submitted_at_dt)
                )
                connection.commit()
                db_status = "success"
                db_details = {"trial_saved": True, "id": cursor.lastrowid}
            except Exception as t_err:
                db_status = "failed"
                db_details = {"error": str(t_err)}

        elif payload.source == "onboarding":
            if not payload.companyDetails:
                db_status = "failed"
                db_details = {"error": "Missing companyDetails"}
            else:
                c = payload.companyDetails
                company_id = None
                company_saved = False
                company_error = None

                # Step A: Insert company
                try:
                    sql_company = """
                        INSERT INTO onboarding_companies (
                            company_name, authorized_person, email, address, state, city, zip, mobile, work_phone, decision_maker, submitted_at
                        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """
                    cursor.execute(sql_company, (
                        c.companyName, c.authorizedPerson, c.email, c.address, c.state, c.city, c.zip, c.mobile, c.work, c.decisionMaker, submitted_at_dt
                    ))
                    connection.commit()
                    company_id = cursor.lastrowid
                    company_saved = True
                except Exception as comp_err:
                    company_error = str(comp_err)

                if not company_saved:
                    db_status = "failed"
                    db_details = {"company_saved": False, "error": company_error}
                else:
                    # Step B: Insert child users with individual tracking
                    users_expected = len(payload.users or [])
                    users_saved = 0
                    users_errors = []
                    if payload.users:
                        for u in payload.users:
                            try:
                                cursor.execute(
                                    "INSERT INTO onboarding_users (company_id, name, email, phone) VALUES (%s, %s, %s, %s)",
                                    (company_id, u.name, u.email, u.phone)
                                )
                                connection.commit()
                                users_saved += 1
                            except Exception as u_err:
                                users_errors.append(f"User '{u.name}': {u_err}")

                    # Step C: Insert child properties with individual tracking
                    props_expected = len(payload.propertiesList or [])
                    props_saved = 0
                    props_errors = []
                    if payload.propertiesList:
                        for p in payload.propertiesList:
                            try:
                                cursor.execute(
                                    """
                                    INSERT INTO onboarding_properties (
                                        company_id, property_name, property_code, address, rooms, brand, pms, pms_other, contact_person, manager_name, manager_email, manager_mobile
                                    ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                                    """,
                                    (company_id, p.propertyName, p.propertyCode, p.address, p.rooms, p.brand, p.pms, p.pmsOther, p.contactPerson, p.managerName, p.managerEmail, p.managerMobile)
                                )
                                connection.commit()
                                props_saved += 1
                            except Exception as p_err:
                                props_errors.append(f"Property '{p.propertyName}': {p_err}")

                    is_complete = (users_saved == users_expected) and (props_saved == props_expected) and not users_errors and not props_errors
                    db_status = "success" if is_complete else "partial"
                    db_details = {
                        "company_saved": True,
                        "company_id": company_id,
                        "users_saved": users_saved,
                        "users_expected": users_expected,
                        "users_errors": users_errors,
                        "props_saved": props_saved,
                        "props_expected": props_expected,
                        "props_errors": props_errors
                    }
        else:
            db_status = "failed"
            db_details = {"error": "Unknown source"}

    except Exception as db_ex:
        db_status = "failed"
        db_details = {"error": f"Database connection or execution failed: {db_ex}"}
    finally:
        if cursor:
            try:
                cursor.close()
            except Exception:
                pass
        if connection and connection.is_connected():
            try:
                connection.close()
            except Exception:
                pass

    # 4. EMAIL DISPATCH EXECUTION
    if db_status in ("success", "partial"):
        try:
            email_ok, email_err_msg = trigger_lead_emails(payload)
            if email_ok:
                email_status = "success"
                email_error = None
            else:
                email_status = "failed"
                email_error = email_err_msg
        except Exception as mail_ex:
            email_status = "failed"
            email_error = str(mail_ex)
    else:
        email_status = "skipped"
        email_error = "Skipped because database insertion failed"

    # 5. OVERALL STATUS COMPUTATION
    if db_status == "success" and email_status == "success":
        overall_status = "success"
    elif db_status == "failed":
        overall_status = "failed"
    else:
        # Partial DB records OR DB success with Email failure
        overall_status = "partial"

    # 6. PERSIST TO MYSQL LEAD_EVENT_LOGS & UPDATE DISK LOG
    final_log_entry = {
        "log_id": log_id,
        "source": payload.source or payload.kind or "unknown",
        "submitter_name": submitter_name,
        "submitter_email": lead_email,
        "company_name": company_name,
        "overall_status": overall_status,
        "db_status": db_status,
        "db_details": db_details,
        "email_status": email_status,
        "email_error": email_error,
        "raw_payload": raw_payload_dict,
        "is_recovered": False,
        "recovered_at": None,
        "timestamp": datetime.utcnow().isoformat(),
        "client_ip": client_ip
    }
    update_disk_log(log_id, final_log_entry)

    try:
        db_conn = get_db_connection()
        db_cur = db_conn.cursor()
        sql_log = """
            INSERT INTO lead_event_logs (
                log_id, source, submitter_name, submitter_email, company_name,
                overall_status, db_status, db_details, email_status, email_error,
                raw_payload, is_recovered, created_at
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, 0, %s)
            ON DUPLICATE KEY UPDATE
                overall_status = VALUES(overall_status),
                db_status = VALUES(db_status),
                db_details = VALUES(db_details),
                email_status = VALUES(email_status),
                email_error = VALUES(email_error)
        """
        db_cur.execute(sql_log, (
            log_id,
            payload.source or payload.kind or "unknown",
            submitter_name,
            lead_email,
            company_name,
            overall_status,
            db_status,
            json.dumps(db_details),
            email_status,
            email_error,
            json.dumps(raw_payload_dict),
            datetime.utcnow()
        ))
        db_conn.commit()
        db_cur.close()
        db_conn.close()
    except Exception as log_db_err:
        print(f"[LeadLogger] Could not record lead_event_logs in MySQL (disk log remains intact): {log_db_err}")

    # 7. ASYNC PORTAL ONBOARDING SYNCHRONIZATION (https://ob.innrly.com)
    if payload.source == "onboarding" and payload.companyDetails:
        c_dict = payload.companyDetails.dict()
        props_dict = [p.dict() for p in (payload.propertiesList or [])]
        users_dict = [u.dict() for u in (payload.users or [])]
        background_tasks.add_task(
            process_portal_onboarding_sync,
            log_id,
            c_dict,
            props_dict,
            users_dict
        )

    return {
        "ok": True,
        "message": "Lead captured successfully",
        "log_id": log_id,
        "status": overall_status,
        "db_status": db_status,
        "email_status": email_status
    }

# ==================== LEAD AUDIT LOGS & RECOVERY APIS ====================

@app.get("/leads/logs")
@app.get("/leads/logs/")
@app.get("/api/leads/logs")
@app.get("/api/leads/logs/")
@app.get("/admin/leads/logs")
@app.get("/admin/leads/logs/")
async def list_lead_logs(
    status: Optional[str] = "all",
    module: Optional[str] = "all",
    search: Optional[str] = None,
    page: int = 1,
    limit: int = 50,
    current_user: dict = Depends(get_current_user)
):
    logs = []
    total = 0
    stats = {"total": 0, "success": 0, "partial": 0, "failed": 0, "recovered": 0}

    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)

        # 1. Compute aggregate statistics
        cursor.execute("SELECT overall_status, is_recovered, COUNT(*) as cnt FROM lead_event_logs GROUP BY overall_status, is_recovered")
        stat_rows = cursor.fetchall()
        for r in stat_rows:
            cnt = r["cnt"]
            st = r["overall_status"]
            stats["total"] += cnt
            if st in stats:
                stats[st] += cnt
            if r.get("is_recovered"):
                stats["recovered"] += cnt

        # 2. Build filtered query
        query = "SELECT * FROM lead_event_logs WHERE 1=1"
        params = []

        if status and status != "all":
            query += " AND overall_status = %s"
            params.append(status)

        if module and module != "all":
            query += " AND source = %s"
            params.append(module)

        if search and search.strip():
            s = f"%{search.strip()}%"
            query += " AND (log_id LIKE %s OR submitter_name LIKE %s OR submitter_email LIKE %s OR company_name LIKE %s)"
            params.extend([s, s, s, s])

        count_query = f"SELECT COUNT(*) as total FROM ({query}) as sub"
        cursor.execute(count_query, tuple(params))
        total_res = cursor.fetchone()
        total = total_res["total"] if total_res else 0

        # Pagination
        query += " ORDER BY created_at DESC LIMIT %s OFFSET %s"
        offset = max(0, (page - 1) * limit)
        params.extend([limit, offset])
        cursor.execute(query, tuple(params))
        rows = cursor.fetchall()

        for r in rows:
            if r.get("created_at"):
                r["created_at"] = r["created_at"].isoformat()
            if r.get("recovered_at"):
                r["recovered_at"] = r["recovered_at"].isoformat()
            if isinstance(r.get("db_details"), str):
                try:
                    r["db_details"] = json.loads(r["db_details"])
                except Exception:
                    pass
            if isinstance(r.get("raw_payload"), str):
                try:
                    r["raw_payload"] = json.loads(r["raw_payload"])
                except Exception:
                    pass
            if isinstance(r.get("db_details"), dict) and "portal_sync" in r["db_details"]:
                r["portal_sync"] = r["db_details"]["portal_sync"]
            logs.append(r)

        cursor.close()
        connection.close()

    except Exception as e:
        print(f"[LeadLogger] Database query failed, reading directly from disk logs: {e}")
        all_disk = read_all_disk_logs()
        stats = {"total": len(all_disk), "success": 0, "partial": 0, "failed": 0, "recovered": 0}
        for d in all_disk:
            st = d.get("overall_status", "failed")
            if st in stats:
                stats[st] += 1
            if d.get("is_recovered"):
                stats["recovered"] += 1

        filtered = all_disk
        if status and status != "all":
            filtered = [d for d in filtered if d.get("overall_status") == status]
        if module and module != "all":
            filtered = [d for d in filtered if d.get("source") == module]
        if search and search.strip():
            s_low = search.strip().lower()
            filtered = [
                d for d in filtered
                if s_low in (d.get("log_id") or "").lower()
                or s_low in (d.get("submitter_name") or "").lower()
                or s_low in (d.get("submitter_email") or "").lower()
                or s_low in (d.get("company_name") or "").lower()
            ]

        total = len(filtered)
        start_idx = max(0, (page - 1) * limit)
        end_idx = start_idx + limit
        logs = filtered[start_idx:end_idx]

    return {
        "logs": logs,
        "total": total,
        "page": page,
        "limit": limit,
        "stats": stats
    }

@app.get("/leads/logs/stats")
@app.get("/leads/logs/stats/")
@app.get("/api/leads/logs/stats")
@app.get("/api/leads/logs/stats/")
async def get_lead_log_stats():
    stats = {"total": 0, "success": 0, "partial": 0, "failed": 0, "recovered": 0}
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT overall_status, is_recovered, COUNT(*) as cnt FROM lead_event_logs GROUP BY overall_status, is_recovered")
        stat_rows = cursor.fetchall()
        for r in stat_rows:
            cnt = r["cnt"]
            st = r["overall_status"]
            stats["total"] += cnt
            if st in stats:
                stats[st] += cnt
            if r.get("is_recovered"):
                stats["recovered"] += cnt
        cursor.close()
        connection.close()
    except Exception:
        all_disk = read_all_disk_logs()
        stats["total"] = len(all_disk)
        for d in all_disk:
            st = d.get("overall_status", "failed")
            if st in stats:
                stats[st] += 1
            if d.get("is_recovered"):
                stats["recovered"] += 1
    return stats

@app.post("/leads/logs/{log_id}/recover")
@app.post("/leads/logs/{log_id}/recover/")
@app.post("/api/leads/logs/{log_id}/recover")
@app.post("/api/leads/logs/{log_id}/recover/")
async def recover_lead_data(
    log_id: str,
    current_user: dict = Depends(get_current_user)
):
    log_entry = None
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM lead_event_logs WHERE log_id = %s", (log_id,))
        log_entry = cursor.fetchone()
        cursor.close()
        connection.close()
    except Exception as e:
        print(f"DB lookup failed for {log_id}: {e}")

    if not log_entry:
        disk_logs = read_all_disk_logs()
        for d in disk_logs:
            if d.get("log_id") == log_id:
                log_entry = d
                break

    if not log_entry:
        raise HTTPException(status_code=404, detail=f"Log entry '{log_id}' not found")

    raw_payload = log_entry.get("raw_payload")
    if isinstance(raw_payload, str):
        try:
            raw_payload = json.loads(raw_payload)
        except Exception:
            raw_payload = {}
    elif not isinstance(raw_payload, dict):
        raw_payload = {}

    source = log_entry.get("source") or raw_payload.get("source") or "contact"
    kind = raw_payload.get("kind")

    lead_obj = LeadPayload(**raw_payload)
    submitted_at_dt = datetime.utcnow()
    if lead_obj.submittedAt:
        try:
            submitted_at_dt = datetime.fromisoformat(lead_obj.submittedAt.replace("Z", ""))
        except Exception:
            pass

    lead_email = lead_obj.email or lead_obj.work_email or lead_obj.workEmail or lead_obj.contactEmail or (lead_obj.companyDetails.email if lead_obj.companyDetails else None) or "unknown@innrly.com"

    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    db_details = {}

    try:
        if kind == "newsletter":
            cursor.execute("SELECT id FROM newsletter_subscribers WHERE email = %s", (lead_email,))
            existing = cursor.fetchone()
            if not existing:
                cursor.execute(
                    "INSERT INTO newsletter_subscribers (email, sub_source, submitted_at) VALUES (%s, %s, %s)",
                    (lead_email, lead_obj.subSource, submitted_at_dt)
                )
                connection.commit()
            db_details = {"recovered": True, "type": "newsletter"}

        elif source == "contact":
            cursor.execute(
                """
                INSERT INTO contact_leads (name, email, company, phone, properties, message, submitted_at)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
                """,
                (lead_obj.name, lead_email, lead_obj.company, lead_obj.phone, lead_obj.properties, lead_obj.message, submitted_at_dt)
            )
            connection.commit()
            db_details = {"recovered": True, "lead_id": cursor.lastrowid}

        elif source == "trial":
            cursor.execute(
                """
                INSERT INTO trial_leads (name, email, company, role, phone, properties, pms, submitted_at)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                """,
                (lead_obj.name, lead_email, lead_obj.company, lead_obj.role, lead_obj.phone, lead_obj.properties, lead_obj.pms, submitted_at_dt)
            )
            connection.commit()
            db_details = {"recovered": True, "lead_id": cursor.lastrowid}

        elif source == "onboarding":
            c = lead_obj.companyDetails
            if not c:
                raise HTTPException(status_code=400, detail="Missing companyDetails in raw payload")

            company_id = None
            raw_details = log_entry.get("db_details")
            if isinstance(raw_details, str):
                try:
                    raw_details = json.loads(raw_details)
                except Exception:
                    raw_details = {}
            if isinstance(raw_details, dict) and raw_details.get("company_id"):
                company_id = raw_details.get("company_id")

            if not company_id:
                cursor.execute("SELECT id FROM onboarding_companies WHERE email = %s AND company_name = %s ORDER BY id DESC LIMIT 1", (c.email, c.companyName))
                found_comp = cursor.fetchone()
                if found_comp:
                    company_id = found_comp["id"]

            if not company_id:
                cursor.execute("""
                    INSERT INTO onboarding_companies (
                        company_name, authorized_person, email, address, state, city, zip, mobile, work_phone, decision_maker, submitted_at
                    ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (c.companyName, c.authorizedPerson, c.email, c.address, c.state, c.city, c.zip, c.mobile, c.work, c.decisionMaker, submitted_at_dt))
                connection.commit()
                company_id = cursor.lastrowid

            users_saved = 0
            if lead_obj.users:
                for u in lead_obj.users:
                    cursor.execute("SELECT id FROM onboarding_users WHERE company_id = %s AND email = %s", (company_id, u.email))
                    if not cursor.fetchone():
                        cursor.execute("INSERT INTO onboarding_users (company_id, name, email, phone) VALUES (%s, %s, %s, %s)", (company_id, u.name, u.email, u.phone))
                        users_saved += 1
                connection.commit()

            props_saved = 0
            if lead_obj.propertiesList:
                for p in lead_obj.propertiesList:
                    cursor.execute("SELECT id FROM onboarding_properties WHERE company_id = %s AND property_code = %s", (company_id, p.propertyCode))
                    if not cursor.fetchone():
                        cursor.execute("""
                            INSERT INTO onboarding_properties (
                                company_id, property_name, property_code, address, rooms, brand, pms, pms_other, contact_person, manager_name, manager_email, manager_mobile
                            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                        """, (company_id, p.propertyName, p.propertyCode, p.address, p.rooms, p.brand, p.pms, p.pmsOther, p.contactPerson, p.managerName, p.managerEmail, p.managerMobile))
                        props_saved += 1
                connection.commit()

            db_details = {
                "recovered": True,
                "company_id": company_id,
                "users_recovered": users_saved,
                "props_recovered": props_saved
            }

        rec_time = datetime.utcnow()
        cursor.execute("""
            UPDATE lead_event_logs 
            SET overall_status = 'success', db_status = 'success', is_recovered = 1, recovered_at = %s, db_details = %s
            WHERE log_id = %s
        """, (rec_time, json.dumps(db_details), log_id))
        connection.commit()

        update_disk_log(log_id, {
            "overall_status": "success",
            "db_status": "success",
            "is_recovered": True,
            "recovered_at": rec_time.isoformat(),
            "db_details": db_details
        })

        return {
            "ok": True,
            "message": f"Successfully recovered and synchronized data for lead {log_id}",
            "log_id": log_id,
            "details": db_details
        }
    except Exception as e:
        connection.rollback()
        raise HTTPException(status_code=500, detail=f"Recovery failed: {e}")
    finally:
        cursor.close()
        connection.close()

@app.post("/leads/logs/{log_id}/resend-email")
@app.post("/leads/logs/{log_id}/resend-email/")
@app.post("/api/leads/logs/{log_id}/resend-email")
@app.post("/api/leads/logs/{log_id}/resend-email/")
async def resend_lead_email(
    log_id: str,
    current_user: dict = Depends(get_current_user)
):
    log_entry = None
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM lead_event_logs WHERE log_id = %s", (log_id,))
        log_entry = cursor.fetchone()
        cursor.close()
        connection.close()
    except Exception:
        pass

    if not log_entry:
        disk_logs = read_all_disk_logs()
        for d in disk_logs:
            if d.get("log_id") == log_id:
                log_entry = d
                break

    if not log_entry:
        raise HTTPException(status_code=404, detail=f"Log entry '{log_id}' not found")

    raw_payload = log_entry.get("raw_payload")
    if isinstance(raw_payload, str):
        try:
            raw_payload = json.loads(raw_payload)
        except Exception:
            raw_payload = {}

    lead_obj = LeadPayload(**raw_payload)
    ok, err = trigger_lead_emails(lead_obj)

    email_status = "success" if ok else "failed"
    email_error = None if ok else err

    db_status = log_entry.get("db_status", "success")
    overall_status = "success" if (db_status == "success" and ok) else log_entry.get("overall_status")
    if not ok and overall_status == "success":
        overall_status = "partial"

    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("""
            UPDATE lead_event_logs 
            SET email_status = %s, email_error = %s, overall_status = %s
            WHERE log_id = %s
        """, (email_status, email_error, overall_status, log_id))
        connection.commit()
        cursor.close()
        connection.close()
    except Exception as e:
        print(f"Error updating event log email status: {e}")

    update_disk_log(log_id, {
        "email_status": email_status,
        "email_error": email_error,
        "overall_status": overall_status
    })

    if not ok:
        raise HTTPException(status_code=500, detail=f"Email delivery failed: {err}")

    return {"ok": True, "message": "Confirmation and notification emails sent successfully"}

@app.get("/leads/logs/download")
@app.get("/leads/logs/download/")
@app.get("/api/leads/logs/download")
@app.get("/api/leads/logs/download/")
async def download_lead_logs(current_user: dict = Depends(get_current_user)):
    ensure_lead_logs_dir()
    import glob
    all_lines = []
    for filepath in sorted(glob.glob(os.path.join(LEAD_LOGS_DIR, "leads-*.jsonl")), reverse=True):
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read().strip()
                if content:
                    all_lines.append(content)
        except Exception:
            pass
    combined = "\n".join(all_lines)
    return Response(
        content=combined,
        media_type="application/x-jsonlines",
        headers={
            "Content-Disposition": f'attachment; filename="innrly_lead_audit_logs_{datetime.utcnow().strftime("%Y%m%d")}.jsonl"'
        }
    )

@app.post("/leads/logs/{log_id}/sync-portal")
@app.post("/leads/logs/{log_id}/sync-portal/")
@app.post("/api/leads/logs/{log_id}/sync-portal")
@app.post("/api/leads/logs/{log_id}/sync-portal/")
async def sync_lead_to_portal(
    log_id: str,
    current_user: dict = Depends(get_current_user)
):
    """
    Manually triggers or retries synchronization of an onboarding lead to https://ob.innrly.com
    """
    disk_logs = read_all_disk_logs()
    target_entry = None
    for d in disk_logs:
        if d.get("log_id") == log_id:
            target_entry = d
            break

    if not target_entry:
        raise HTTPException(status_code=404, detail=f"Log entry '{log_id}' not found")

    raw = target_entry.get("raw_payload", {})
    if isinstance(raw, str):
        try:
            raw = json.loads(raw)
        except Exception:
            raw = {}

    if raw.get("source") != "onboarding":
        raise HTTPException(status_code=400, detail="Only onboarding leads can be synced to the Innrly Portal.")

    c_dict = raw.get("companyDetails") or {}
    props_dict = raw.get("propertiesList") or []
    users_dict = raw.get("users") or []

    report = process_portal_onboarding_sync(log_id, c_dict, props_dict, users_dict)
    return {
        "ok": report.get("success", False),
        "log_id": log_id,
        "portal_report": report
    }

@app.get("/portal/status")
@app.get("/portal/status/")
@app.get("/api/portal/status")
@app.get("/api/portal/status/")
async def check_portal_status(current_user: dict = Depends(get_current_user)):
    """
    Checks connection status and authentication to https://ob.innrly.com
    """
    from innrly_portal_sync import InnrlyPortalClient
    if not INNRLY_PORTAL_EMAIL or not INNRLY_PORTAL_PASSWORD:
        return {
            "configured": False,
            "base_url": INNRLY_PORTAL_BASE_URL,
            "message": "Portal credentials (INNRLY_PORTAL_EMAIL, INNRLY_PORTAL_PASSWORD) are not set in environment."
        }

    client = InnrlyPortalClient(
        base_url=INNRLY_PORTAL_BASE_URL,
        email=INNRLY_PORTAL_EMAIL,
        password=INNRLY_PORTAL_PASSWORD
    )
    auth_ok = client.login()
    client_count = 0
    if auth_ok:
        try:
            clients = client.get_table("clients")
            client_count = len(clients)
        except Exception:
            pass

    return {
        "configured": True,
        "base_url": INNRLY_PORTAL_BASE_URL,
        "authenticated": auth_ok,
        "existing_clients_count": client_count
    }

@app.get("/portal/logs")
@app.get("/portal/logs/")
@app.get("/api/portal/logs")
@app.get("/api/portal/logs/")
@app.get("/admin/portal/logs")
@app.get("/admin/portal/logs/")
async def get_portal_logs_endpoint(
    lines: int = 200,
    current_user: dict = Depends(get_current_user)
):
    """
    Returns recent Innrly Portal API communication logs.
    """
    from innrly_portal_sync import get_recent_portal_logs
    return {
        "ok": True,
        "logs": get_recent_portal_logs(max_lines=lines)
    }

@app.get("/portal/logs/download")
@app.get("/portal/logs/download/")
@app.get("/api/portal/logs/download")
@app.get("/api/portal/logs/download/")
@app.get("/admin/portal/logs/download")
@app.get("/admin/portal/logs/download/")
async def download_portal_logs(current_user: dict = Depends(get_current_user)):
    """
    Downloads the portal sync log file.
    """
    from fastapi.responses import FileResponse
    portal_log_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "logs", "portal")
    latest_file = os.path.join(portal_log_dir, "portal_sync_latest.log")
    if not os.path.exists(latest_file):
        today_str = time.strftime("%Y-%m-%d")
        latest_file = os.path.join(portal_log_dir, f"portal_sync-{today_str}.log")
    
    if not os.path.exists(latest_file):
        raise HTTPException(status_code=404, detail="No portal logs found on server.")
    
    return FileResponse(
        latest_file,
        media_type="text/plain",
        filename=f"portal_sync_log_{time.strftime('%Y%m%d_%H%M%S')}.txt"
    )

@app.get("/leads")
@app.get("/leads/")
@app.get("/api/leads")
@app.get("/api/leads/")
async def list_leads(current_user: dict = Depends(get_current_user)):
    """Utility endpoint to read stored leads filtered by user permissions"""
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        leads_data = {
            "contacts": [],
            "trials": [],
            "newsletters": [],
            "onboarding": [],
            "onboarding_users": [],
            "onboarding_properties": []
        }

        is_super = current_user.get("role") == "super_admin"
        perms = current_user.get("permissions", [])

        if is_super or "all" in perms or "contact_inquiries" in perms:
            cursor.execute("SELECT * FROM contact_leads ORDER BY created_at DESC")
            leads_data["contacts"] = cursor.fetchall()
            
        if is_super or "all" in perms or "free_trials" in perms:
            cursor.execute("SELECT * FROM trial_leads ORDER BY created_at DESC")
            leads_data["trials"] = cursor.fetchall()
            
        if is_super or "all" in perms or "newsletter_list" in perms:
            cursor.execute("SELECT * FROM newsletter_subscribers ORDER BY created_at DESC")
            leads_data["newsletters"] = cursor.fetchall()
            
        if is_super or "all" in perms or "onboardings" in perms:
            cursor.execute("SELECT * FROM onboarding_companies ORDER BY created_at DESC")
            leads_data["onboarding"] = cursor.fetchall()
            
            cursor.execute("SELECT * FROM onboarding_users")
            leads_data["onboarding_users"] = cursor.fetchall()
            
            cursor.execute("SELECT * FROM onboarding_properties")
            leads_data["onboarding_properties"] = cursor.fetchall()
            
        return leads_data
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve leads: {e}")
    finally:
        cursor.close()
        connection.close()

# ==================== LEAD & ONBOARDING MANAGEMENT APIS ====================

# --- Contact Inquiries ---
@app.put("/leads/contacts/{lead_id}")
@app.put("/leads/contacts/{lead_id}/")
@app.put("/api/leads/contacts/{lead_id}")
@app.put("/api/leads/contacts/{lead_id}/")
async def update_contact_lead(
    lead_id: int, 
    payload: UpdateContactLeadPayload, 
    current_user: dict = Depends(require_permission("contact_inquiries"))
):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT id FROM contact_leads WHERE id = %s", (lead_id,))
        if not cursor.fetchone():
            raise HTTPException(status_code=404, detail="Contact lead not found")
        
        updates = []
        values = []
        for field, value in payload.dict(exclude_unset=True).items():
            if value is not None:
                updates.append(f"{field} = %s")
                values.append(value)
        
        if updates:
            values.append(lead_id)
            sql = f"UPDATE contact_leads SET {', '.join(updates)} WHERE id = %s"
            cursor.execute(sql, tuple(values))
            connection.commit()
            
        return {"ok": True, "message": "Contact lead updated successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.delete("/leads/contacts/{lead_id}")
@app.delete("/leads/contacts/{lead_id}/")
@app.delete("/api/leads/contacts/{lead_id}")
@app.delete("/api/leads/contacts/{lead_id}/")
async def delete_contact_lead(
    lead_id: int, 
    current_user: dict = Depends(require_permission("contact_inquiries"))
):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        cursor.execute("DELETE FROM contact_leads WHERE id = %s", (lead_id,))
        connection.commit()
        return {"ok": True, "message": "Contact lead deleted successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

# --- Free Trials ---
@app.put("/leads/trials/{lead_id}")
@app.put("/leads/trials/{lead_id}/")
@app.put("/api/leads/trials/{lead_id}")
@app.put("/api/leads/trials/{lead_id}/")
async def update_trial_lead(
    lead_id: int, 
    payload: UpdateTrialLeadPayload, 
    current_user: dict = Depends(require_permission("free_trials"))
):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT id FROM trial_leads WHERE id = %s", (lead_id,))
        if not cursor.fetchone():
            raise HTTPException(status_code=404, detail="Trial lead not found")
        
        updates = []
        values = []
        for field, value in payload.dict(exclude_unset=True).items():
            if value is not None:
                updates.append(f"{field} = %s")
                values.append(value)
        
        if updates:
            values.append(lead_id)
            sql = f"UPDATE trial_leads SET {', '.join(updates)} WHERE id = %s"
            cursor.execute(sql, tuple(values))
            connection.commit()
            
        return {"ok": True, "message": "Trial lead updated successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.delete("/leads/trials/{lead_id}")
@app.delete("/leads/trials/{lead_id}/")
@app.delete("/api/leads/trials/{lead_id}")
@app.delete("/api/leads/trials/{lead_id}/")
async def delete_trial_lead(
    lead_id: int, 
    current_user: dict = Depends(require_permission("free_trials"))
):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        cursor.execute("DELETE FROM trial_leads WHERE id = %s", (lead_id,))
        connection.commit()
        return {"ok": True, "message": "Trial lead deleted successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

# --- Onboarding Applications ---
@app.put("/leads/onboarding/{company_id}")
@app.put("/leads/onboarding/{company_id}/")
@app.put("/api/leads/onboarding/{company_id}")
@app.put("/api/leads/onboarding/{company_id}/")
async def update_onboarding_company(
    company_id: int, 
    payload: UpdateOnboardingCompanyPayload, 
    current_user: dict = Depends(require_permission("onboardings"))
):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT id FROM onboarding_companies WHERE id = %s", (company_id,))
        if not cursor.fetchone():
            raise HTTPException(status_code=404, detail="Onboarding company not found")
        
        updates = []
        values = []
        for field, value in payload.dict(exclude_unset=True).items():
            if value is not None:
                updates.append(f"{field} = %s")
                values.append(value)
        
        if updates:
            values.append(company_id)
            sql = f"UPDATE onboarding_companies SET {', '.join(updates)} WHERE id = %s"
            cursor.execute(sql, tuple(values))
            connection.commit()
            
        return {"ok": True, "message": "Onboarding company updated successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.delete("/leads/onboarding/{company_id}")
@app.delete("/leads/onboarding/{company_id}/")
@app.delete("/api/leads/onboarding/{company_id}")
@app.delete("/api/leads/onboarding/{company_id}/")
async def delete_onboarding_company(
    company_id: int, 
    current_user: dict = Depends(require_permission("onboardings"))
):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        cursor.execute("DELETE FROM onboarding_users WHERE company_id = %s", (company_id,))
        cursor.execute("DELETE FROM onboarding_properties WHERE company_id = %s", (company_id,))
        cursor.execute("DELETE FROM onboarding_companies WHERE id = %s", (company_id,))
        connection.commit()
        return {"ok": True, "message": "Onboarding company and associated records deleted successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

# --- Newsletters (Delete) ---
@app.delete("/leads/newsletters/{subscriber_id}")
@app.delete("/leads/newsletters/{subscriber_id}/")
@app.delete("/api/leads/newsletters/{subscriber_id}")
@app.delete("/api/leads/newsletters/{subscriber_id}/")
async def delete_newsletter_subscriber(
    subscriber_id: int, 
    current_user: dict = Depends(require_permission("newsletter_list"))
):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        cursor.execute("DELETE FROM newsletter_subscribers WHERE id = %s", (subscriber_id,))
        connection.commit()
        return {"ok": True, "message": "Newsletter subscriber deleted successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.get("/seo")
@app.get("/seo/")
@app.get("/api/seo")
@app.get("/api/seo/")
async def get_seo(page_path: Optional[str] = None):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        if page_path:
            cursor.execute("SELECT * FROM seo_settings WHERE page_path = %s", (page_path,))
            result = cursor.fetchone()
            return result if result else {}
        else:
            cursor.execute("SELECT * FROM seo_settings")
            results = cursor.fetchall()
            return {row["page_path"]: row for row in results}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.post("/seo")
@app.post("/seo/")
@app.post("/api/seo")
@app.post("/api/seo/")
async def update_seo(payload: SeoSettingsPayload, current_user: dict = Depends(require_permission("seo"))):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT * FROM seo_settings WHERE page_path = %s", (payload.page_path,))
        existing = cursor.fetchone()
        
        priority_str = str(payload.priority) if payload.priority is not None else (str(existing.get("priority", "0.8")) if existing else "0.8")
        in_sitemap_val = 1 if payload.in_sitemap is not False else 0
        changefreq_val = payload.changefreq or (existing.get("changefreq", "monthly") if existing else "monthly")
        title_val = payload.title if payload.title is not None else (existing.get("title", "") if existing else "")
        desc_val = payload.description if payload.description is not None else (existing.get("description", "") if existing else "")
        kw_val = payload.keywords if payload.keywords is not None else (existing.get("keywords", "") if existing else "")
        og_t_val = payload.og_title if payload.og_title is not None else (existing.get("og_title", "") if existing else "")
        og_d_val = payload.og_description if payload.og_description is not None else (existing.get("og_description", "") if existing else "")
        og_i_val = payload.og_image if payload.og_image is not None else (existing.get("og_image", "") if existing else "")

        sql = """
            INSERT INTO seo_settings (page_path, title, description, keywords, og_title, og_description, og_image, in_sitemap, changefreq, priority)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            ON DUPLICATE KEY UPDATE
                title = VALUES(title),
                description = VALUES(description),
                keywords = VALUES(keywords),
                og_title = VALUES(og_title),
                og_description = VALUES(og_description),
                og_image = VALUES(og_image),
                in_sitemap = VALUES(in_sitemap),
                changefreq = VALUES(changefreq),
                priority = VALUES(priority)
        """
        values = (
            payload.page_path, title_val, desc_val, kw_val,
            og_t_val, og_d_val, og_i_val,
            in_sitemap_val,
            changefreq_val,
            priority_str
        )
        cursor.execute(sql, values)
        connection.commit()
        return {"ok": True, "message": "SEO settings saved successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.get("/sitemap-entries")
@app.get("/sitemap-entries/")
@app.get("/api/sitemap-entries")
@app.get("/api/sitemap-entries/")
async def get_sitemap_entries():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        # 1. Fetch custom SEO settings for pages
        cursor.execute("SELECT page_path, in_sitemap, changefreq, priority, updated_at FROM seo_settings")
        seo_rows = cursor.fetchall()
        seo_map = {row["page_path"]: row for row in seo_rows}
        
        # 2. Fetch all published blogs
        cursor.execute("SELECT slug, title, in_sitemap, updated_at, created_at FROM blogs WHERE status = 'published'")
        blogs = cursor.fetchall()
        
        return {
            "seo_map": seo_map,
            "blogs": blogs
        }
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.get("/robots-txt")
@app.get("/robots-txt/")
@app.get("/api/robots-txt")
@app.get("/api/robots-txt/")
async def get_robots_txt():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT setting_value FROM site_settings WHERE setting_key = 'robots_txt'")
        row = cursor.fetchone()
        content = row["setting_value"] if row else "User-agent: *\nAllow: /\n\nSitemap: https://www.innrly.com/sitemap.xml\n"
        return {"content": content}
    except Exception:
        return {"content": "User-agent: *\nAllow: /\n\nSitemap: https://www.innrly.com/sitemap.xml\n"}
    finally:
        cursor.close()
        connection.close()

@app.post("/robots-txt")
@app.post("/robots-txt/")
@app.post("/api/robots-txt")
@app.post("/api/robots-txt/")
async def save_robots_txt(payload: SiteSettingPayload, current_user: dict = Depends(require_permission("seo"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        val = payload.value if payload.value is not None else (payload.content if payload.content is not None else "")
        cursor.execute("""
            INSERT INTO site_settings (setting_key, setting_value)
            VALUES ('robots_txt', %s)
            ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)
        """, (val,))
        connection.commit()
        return {"ok": True, "message": "Robots.txt saved successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.get("/llms-txt")
@app.get("/llms-txt/")
@app.get("/api/llms-txt")
@app.get("/api/llms-txt/")
async def get_llms_txt():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT setting_key, setting_value FROM site_settings WHERE setting_key IN ('llms_txt', 'llms_full_txt')")
        rows = cursor.fetchall()
        data = {r["setting_key"]: r["setting_value"] for r in rows}
        return {
            "llms_txt": data.get("llms_txt", "# Innrly\n\n> Hospitality Management Platform\n"),
            "llms_full_txt": data.get("llms_full_txt", data.get("llms_txt", ""))
        }
    except Exception:
        return {
            "llms_txt": "# Innrly\n\n> Hospitality Management Platform\n",
            "llms_full_txt": "# Innrly Full Documentation\n"
        }
    finally:
        cursor.close()
        connection.close()

@app.post("/llms-txt")
@app.post("/llms-txt/")
@app.post("/api/llms-txt")
@app.post("/api/llms-txt/")
async def save_llms_txt(payload: dict, current_user: dict = Depends(require_permission("seo"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        if "llms_txt" in payload:
            cursor.execute("""
                INSERT INTO site_settings (setting_key, setting_value)
                VALUES ('llms_txt', %s)
                ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)
            """, (payload["llms_txt"],))
        if "llms_full_txt" in payload:
            cursor.execute("""
                INSERT INTO site_settings (setting_key, setting_value)
                VALUES ('llms_full_txt', %s)
                ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)
            """, (payload["llms_full_txt"],))
        connection.commit()
        return {"ok": True, "message": "LLMs documentation saved successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.get("/settings/scripts")
@app.get("/settings/scripts/")
@app.get("/api/settings/scripts")
@app.get("/api/settings/scripts/")
@app.get("/scripts")
@app.get("/scripts/")
async def get_site_scripts():
    connection = None
    cursor = None
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT ga4_id, gtm_id, header_tags, footer_tags, is_active FROM site_scripts WHERE key_name = 'global' LIMIT 1")
        result = cursor.fetchone()
        if result:
            return {
                "ga4_id": result.get("ga4_id") or "G-TJZT02L07P",
                "gtm_id": result.get("gtm_id"),
                "header_tags": result.get("header_tags"),
                "footer_tags": result.get("footer_tags"),
                "is_active": bool(result.get("is_active", 1))
            }
        return {
            "ga4_id": "G-TJZT02L07P",
            "gtm_id": None,
            "header_tags": None,
            "footer_tags": None,
            "is_active": True
        }
    except Exception as e:
        return {
            "ga4_id": "G-TJZT02L07P",
            "gtm_id": None,
            "header_tags": None,
            "footer_tags": None,
            "is_active": True
        }
    finally:
        if cursor:
            try:
                cursor.close()
            except Exception:
                pass
        if connection:
            try:
                connection.close()
            except Exception:
                pass

@app.post("/settings/scripts")
@app.post("/settings/scripts/")
@app.post("/api/settings/scripts")
@app.post("/api/settings/scripts/")
@app.post("/scripts")
@app.post("/scripts/")
async def update_site_scripts(payload: SiteScriptsPayload, current_user: dict = Depends(require_permission("seo"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS site_scripts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                key_name VARCHAR(50) NOT NULL UNIQUE DEFAULT 'global',
                ga4_id VARCHAR(50) DEFAULT 'G-TJZT02L07P',
                gtm_id VARCHAR(50) DEFAULT NULL,
                header_tags MEDIUMTEXT DEFAULT NULL,
                footer_tags MEDIUMTEXT DEFAULT NULL,
                is_active TINYINT(1) DEFAULT 1,
                updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        """)
        
        sql = """
            INSERT INTO site_scripts (key_name, ga4_id, gtm_id, header_tags, footer_tags, is_active)
            VALUES ('global', %s, %s, %s, %s, %s)
            ON DUPLICATE KEY UPDATE
                ga4_id = VALUES(ga4_id),
                gtm_id = VALUES(gtm_id),
                header_tags = VALUES(header_tags),
                footer_tags = VALUES(footer_tags),
                is_active = VALUES(is_active)
        """
        values = (
            payload.ga4_id,
            payload.gtm_id,
            payload.header_tags,
            payload.footer_tags,
            1 if payload.is_active else 0
        )
        cursor.execute(sql, values)
        connection.commit()
        return {"ok": True, "message": "Header and footer tags saved successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

class TestSmtpPayload(BaseModel):
    host: Optional[str] = None
    port: Optional[int] = None
    user: Optional[str] = None
    password: Optional[str] = None
    from_email: Optional[str] = None
    to_email: Optional[str] = None

@app.get("/settings")
@app.get("/settings/")
@app.get("/api/settings")
@app.get("/api/settings/")
async def get_settings():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS site_settings (
                setting_key VARCHAR(191) PRIMARY KEY,
                setting_value TEXT NOT NULL,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        """)
        cursor.execute("SELECT setting_key, setting_value FROM site_settings")
        results = cursor.fetchall()
        settings_dict = {row["setting_key"]: row["setting_value"] for row in results}
        
        # Populate defaults from environment if not yet stored in DB
        defaults = {
            "smtp_host": os.environ.get("SMTP_HOST", "smtp.office365.com"),
            "smtp_port": os.environ.get("SMTP_PORT", "587"),
            "smtp_user": os.environ.get("SMTP_USER", "donotreply@innrly.com"),
            "smtp_password": os.environ.get("SMTP_PASSWORD", "Laplace9!"),
            "email_from": os.environ.get("EMAIL_FROM", "donotreply@innrly.com")
        }
        for k, v in defaults.items():
            if k not in settings_dict and v:
                settings_dict[k] = v
                
        return settings_dict
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.post("/settings")
@app.post("/settings/")
@app.post("/api/settings")
@app.post("/api/settings/")
async def update_setting(payload: SiteSettingPayload, current_user: dict = Depends(require_permission("settings"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS site_settings (
                setting_key VARCHAR(191) PRIMARY KEY,
                setting_value TEXT NOT NULL,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        """)
        sql = """
            INSERT INTO site_settings (setting_key, setting_value)
            VALUES (%s, %s)
            ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)
        """
        cursor.execute(sql, (payload.key, payload.value))
        connection.commit()
        return {"ok": True, "message": "Setting updated successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.post("/settings/test-smtp")
@app.post("/settings/test-smtp/")
@app.post("/api/settings/test-smtp")
@app.post("/api/settings/test-smtp/")
async def test_smtp_connection(payload: TestSmtpPayload, current_user: dict = Depends(require_permission("settings"))):
    smtp_cfg = get_smtp_config()
    host = payload.host or smtp_cfg["host"]
    port = payload.port or smtp_cfg["port"]
    user = payload.user if payload.user is not None else smtp_cfg["user"]
    password = payload.password if payload.password is not None else smtp_cfg["password"]
    from_email = payload.from_email or smtp_cfg["from_email"]
    to_email = payload.to_email or user or from_email or "donotreply@innrly.com"
    
    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = "Innrly Control Hub: SMTP Connection Test"
        msg["From"] = from_email
        msg["To"] = to_email
        msg.attach(MIMEText(f"<h3>Innrly SMTP Test Succeeded</h3><p>Outgoing mail server at <b>{host}:{port}</b> is operational.</p>", "html"))
        
        with smtplib.SMTP(host, port, timeout=15) as server:
            if user and password:
                server.ehlo()
                server.starttls()
                server.ehlo()
                server.login(user, password)
            server.sendmail(from_email, [to_email], msg.as_string())
            
        return {"ok": True, "message": f"SMTP test successful! Test email delivered to {to_email} via {host}:{port}"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"SMTP test failed: {e}")

@app.get("/blog-categories")
@app.get("/blog-categories/")
@app.get("/api/blog-categories")
@app.get("/api/blog-categories/")
async def get_blog_categories():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT * FROM blog_categories ORDER BY name ASC")
        return cursor.fetchall()
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.get("/blog")
@app.get("/blog/")
@app.get("/api/blog")
@app.get("/api/blog/")
async def get_blogs(category: Optional[str] = None):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        if category and category != "All":
            cursor.execute("""
                SELECT b.*, c.name as category_name, c.slug as category_slug 
                FROM blogs b 
                LEFT JOIN blog_categories c ON b.category_id = c.id 
                WHERE c.slug = %s OR c.name = %s
                ORDER BY b.created_at DESC
            """, (category, category))
        else:
            cursor.execute("""
                SELECT b.*, c.name as category_name, c.slug as category_slug 
                FROM blogs b 
                LEFT JOIN blog_categories c ON b.category_id = c.id 
                ORDER BY b.created_at DESC
            """)
        return cursor.fetchall()
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.get("/blog/{slug}")
@app.get("/blog/{slug}/")
@app.get("/api/blog/{slug}")
@app.get("/api/blog/{slug}/")
async def get_blog_by_slug(slug: str):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("""
            SELECT b.*, c.name as category_name, c.slug as category_slug 
            FROM blogs b 
            LEFT JOIN blog_categories c ON b.category_id = c.id 
            WHERE b.slug = %s
        """, (slug,))
        result = cursor.fetchone()
        if not result:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return result
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.post("/blog")
@app.post("/blog/")
@app.post("/api/blog")
@app.post("/api/blog/")
async def create_or_update_blog(payload: BlogPostPayload, current_user: dict = Depends(require_permission("blogs"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        if payload.id:
            # Update existing
            sql = """
                UPDATE blogs 
                SET title = %s, meta_title = %s, slug = %s, content = %s, summary = %s, 
                    meta_description = %s, author = %s, category_id = %s, 
                    featured_image = %s, featured_image_alt = %s, status = %s, in_sitemap = %s
                WHERE id = %s
            """
            values = (
                payload.title, payload.meta_title, payload.slug, payload.content, payload.summary,
                payload.meta_description, payload.author, payload.category_id,
                payload.featured_image, payload.featured_image_alt, payload.status,
                1 if payload.in_sitemap else 0,
                payload.id
            )
            cursor.execute(sql, values)
            connection.commit()
            return {"ok": True, "message": "Blog post updated successfully", "id": payload.id}
        else:
            # Create new
            sql = """
                INSERT INTO blogs (title, meta_title, slug, content, summary, meta_description, author, category_id, featured_image, featured_image_alt, status, in_sitemap)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            values = (
                payload.title, payload.meta_title, payload.slug, payload.content, payload.summary,
                payload.meta_description, payload.author, payload.category_id,
                payload.featured_image, payload.featured_image_alt, payload.status,
                1 if payload.in_sitemap else 0
            )
            cursor.execute(sql, values)
            connection.commit()
            new_id = cursor.lastrowid
            return {"ok": True, "message": "Blog post created successfully", "id": new_id}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.delete("/blog/{id}")
@app.delete("/blog/{id}/")
@app.delete("/api/blog/{id}")
@app.delete("/api/blog/{id}/")
async def delete_blog(id: int, current_user: dict = Depends(require_permission("blogs"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        cursor.execute("DELETE FROM blogs WHERE id = %s", (id,))
        connection.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return {"ok": True, "message": "Blog post deleted successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

class BlogQuickUpdatePayload(BaseModel):
    status: Optional[str] = None
    in_sitemap: Optional[bool] = None

@app.post("/blog/{id}/quick-update")
@app.post("/blog/{id}/quick-update/")
@app.post("/api/blog/{id}/quick-update")
@app.post("/api/blog/{id}/quick-update/")
@app.patch("/blog/{id}/quick-update")
@app.patch("/blog/{id}/quick-update/")
@app.patch("/api/blog/{id}/quick-update")
@app.patch("/api/blog/{id}/quick-update/")
async def quick_update_blog(id: int, payload: BlogQuickUpdatePayload, current_user: dict = Depends(require_permission("blogs"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        updates = []
        values = []
        if payload.status is not None:
            updates.append("status = %s")
            values.append(payload.status)
        if payload.in_sitemap is not None:
            updates.append("in_sitemap = %s")
            values.append(1 if payload.in_sitemap else 0)
        
        if updates:
            values.append(id)
            sql = f"UPDATE blogs SET {', '.join(updates)} WHERE id = %s"
            cursor.execute(sql, tuple(values))
            connection.commit()
            if cursor.rowcount == 0:
                raise HTTPException(status_code=404, detail="Blog post not found")
        return {"ok": True, "message": "Blog updated successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.post("/admin/blogs/upload-featured-image")
@app.post("/admin/blogs/upload-featured-image/")
@app.post("/api/admin/blogs/upload-featured-image")
@app.post("/api/admin/blogs/upload-featured-image/")
async def upload_blog_featured_image(file: UploadFile = File(...), current_user: dict = Depends(require_permission("blogs"))):
    try:
        raw_filename = os.path.basename(file.filename or "blog_image.png")
        ext = os.path.splitext(raw_filename)[1].lower()
        allowed_exts = {".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"}
        if ext not in allowed_exts:
            raise HTTPException(status_code=400, detail="Invalid image file extension")
        
        clean_name = "".join(c for c in raw_filename if c.isalnum() or c in "._-")
        filename = f"blog_{int(time.time())}_{clean_name}"
        filepath = os.path.join("uploads", filename)
        with open(filepath, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        return {"ok": True, "url": f"/uploads/{filename}"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"File upload error: {e}")

@app.post("/upload")
@app.post("/upload/")
async def upload_image(file: UploadFile = File(...), current_user: dict = Depends(get_current_user)):
    raw_filename = os.path.basename(file.filename or "image.png")
    ext = os.path.splitext(raw_filename)[1].lower()
    allowed_exts = {".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"}
    if ext not in allowed_exts:
        raise HTTPException(status_code=400, detail="Invalid image file extension")
    
    # Generate unique safe filename
    timestamp = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
    clean_name = "".join(c for c in raw_filename if c.isalnum() or c in "._-")
    safe_filename = f"{timestamp}_{clean_name}"
    file_path = os.path.join("uploads", safe_filename)
    
    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Could not save file: {str(e)}")
        
    return {"url": f"/uploads/{safe_filename}"}

@app.get("/integrations")
@app.get("/integrations/")
async def get_all_integrations():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT * FROM integrations ORDER BY name ASC")
        return cursor.fetchall()
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.post("/integrations")
@app.post("/integrations/")
async def create_or_update_integration(payload: IntegrationPayload, current_user: dict = Depends(require_permission("settings"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        if payload.id:
            # Update existing
            sql = """
                UPDATE integrations 
                SET name = %s, initials = %s, category = %s, hue = %s, domain = %s, 
                    image_url = %s, badge = %s, to_url = %s
                WHERE id = %s
            """
            values = (
                payload.name, payload.initials, payload.category, payload.hue, payload.domain,
                payload.image_url, payload.badge, payload.to_url, payload.id
            )
            cursor.execute(sql, values)
            connection.commit()
            return {"ok": True, "message": "Integration updated successfully", "id": payload.id}
        else:
            # Create new
            sql = """
                INSERT INTO integrations (name, initials, category, hue, domain, image_url, badge, to_url)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            """
            values = (
                payload.name, payload.initials, payload.category, payload.hue, payload.domain,
                payload.image_url, payload.badge, payload.to_url
            )
            cursor.execute(sql, values)
            connection.commit()
            new_id = cursor.lastrowid
            return {"ok": True, "message": "Integration created successfully", "id": new_id}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.delete("/integrations/{id}")
@app.delete("/integrations/{id}/")
async def delete_integration(id: int, current_user: dict = Depends(require_permission("settings"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        cursor.execute("DELETE FROM integrations WHERE id = %s", (id,))
        connection.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Integration not found")
        return {"ok": True, "message": "Integration deleted successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.get("/pms")
@app.get("/pms/")
async def get_pms_integrations():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT * FROM integrations WHERE category = 'pms' ORDER BY name ASC")
        return cursor.fetchall()
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.post("/pms")
@app.post("/pms/")
async def create_or_update_pms(payload: PmsIntegrationPayload, current_user: dict = Depends(require_permission("settings"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        if payload.id:
            # Update existing
            sql = """
                UPDATE integrations 
                SET name = %s, initials = %s, category = 'pms', hue = %s, domain = %s, 
                    image_url = %s, badge = %s, to_url = %s
                WHERE id = %s
            """
            values = (
                payload.name, payload.initials, payload.hue, payload.domain,
                payload.image_url, payload.badge, payload.to_url, payload.id
            )
            cursor.execute(sql, values)
            connection.commit()
            return {"ok": True, "message": "PMS integration updated successfully", "id": payload.id}
        else:
            # Create new
            sql = """
                INSERT INTO integrations (name, initials, category, hue, domain, image_url, badge, to_url)
                VALUES (%s, %s, 'pms', %s, %s, %s, %s, %s)
            """
            values = (
                payload.name, payload.initials, payload.hue, payload.domain,
                payload.image_url, payload.badge, payload.to_url
            )
            cursor.execute(sql, values)
            connection.commit()
            new_id = cursor.lastrowid
            return {"ok": True, "message": "PMS integration created successfully", "id": new_id}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.delete("/pms/{id}")
@app.delete("/pms/{id}/")
async def delete_pms(id: int, current_user: dict = Depends(require_permission("settings"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        cursor.execute("DELETE FROM integrations WHERE id = %s AND category = 'pms'", (id,))
        connection.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="PMS integration not found")
        return {"ok": True, "message": "PMS integration deleted successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

# ==================== TELEMETRY & HEALTH CHECK APIS ====================

@app.get("/health")
@app.get("/health/")
@app.get("/api/health")
@app.get("/api/health/")
@app.get("/api/public/health")
@app.get("/api/public/health/")
async def health_check():
    return {
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat(),
        "service": "innrly-backend"
    }

class TelemetryEvent(BaseModel):
    event: str
    properties: Optional[dict] = None
    timestamp: Optional[str] = None
    path: Optional[str] = None
    referrer: Optional[str] = None
    ts: Optional[str] = None

@app.post("/telemetry")
@app.post("/telemetry/")
@app.post("/api/telemetry")
@app.post("/api/telemetry/")
@app.post("/events")
@app.post("/events/")
@app.post("/api/events")
@app.post("/api/events/")
async def save_telemetry(payload: TelemetryEvent, request: Request):
    client_ip = request.client.host if request.client else "127.0.0.1"
    event_time = payload.timestamp or payload.ts or datetime.utcnow().isoformat()
    event_path = payload.path or (payload.properties.get("path") if payload.properties else "")
    print(f"[Telemetry] Event '{payload.event}' (path: {event_path}) from IP {client_ip} at {event_time}.")
    return {"ok": True, "message": "Telemetry received"}

# ==================== TESTIMONIALS API ====================

class TestimonialPayload(BaseModel):
    id: Optional[int] = None
    page: Optional[str] = "homepage"
    quote: str
    name: str
    title: str
    company: Optional[str] = ""
    avatar: Optional[str] = ""
    rating: Optional[int] = 5
    is_homepage: Optional[bool] = True
    display_order: Optional[int] = 0
    status: Optional[str] = "active"

@app.get("/testimonials")
@app.get("/testimonials/")
async def get_public_testimonials(page: Optional[str] = None):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        if page and page != "all":
            cursor.execute(
                "SELECT * FROM testimonials WHERE status = 'active' AND (page = %s OR (page = 'homepage' AND %s = 'homepage')) ORDER BY display_order ASC, id DESC",
                (page, page)
            )
        else:
            cursor.execute("SELECT * FROM testimonials WHERE status = 'active' ORDER BY display_order ASC, id DESC")
        return cursor.fetchall()
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.get("/admin/testimonials")
@app.get("/admin/testimonials/")
async def get_admin_testimonials(current_user: dict = Depends(require_permission("testimonials"))):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    try:
        cursor.execute("SELECT * FROM testimonials ORDER BY display_order ASC, id DESC")
        return cursor.fetchall()
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.post("/admin/testimonials")
@app.post("/admin/testimonials/")
@app.post("/testimonials")
@app.post("/testimonials/")
async def create_or_update_testimonial(payload: TestimonialPayload, current_user: dict = Depends(require_permission("testimonials"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        is_hp = 1 if (payload.is_homepage or payload.page == "homepage") else 0
        if payload.id:
            sql = """
                UPDATE testimonials 
                SET page = %s, quote = %s, name = %s, title = %s, company = %s, 
                    avatar = %s, rating = %s, is_homepage = %s, display_order = %s, status = %s
                WHERE id = %s
            """
            values = (
                payload.page or "homepage", payload.quote, payload.name, payload.title,
                payload.company or "", payload.avatar or "", payload.rating or 5,
                is_hp, payload.display_order or 0, payload.status or "active", payload.id
            )
            cursor.execute(sql, values)
            connection.commit()
            return {"ok": True, "message": "Testimonial updated successfully", "id": payload.id}
        else:
            sql = """
                INSERT INTO testimonials (page, quote, name, title, company, avatar, rating, is_homepage, display_order, status)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            values = (
                payload.page or "homepage", payload.quote, payload.name, payload.title,
                payload.company or "", payload.avatar or "", payload.rating or 5,
                is_hp, payload.display_order or 0, payload.status or "active"
            )
            cursor.execute(sql, values)
            connection.commit()
            new_id = cursor.lastrowid
            return {"ok": True, "message": "Testimonial created successfully", "id": new_id}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.put("/admin/testimonials/{id}")
@app.put("/admin/testimonials/{id}/")
async def update_testimonial(id: int, payload: TestimonialPayload, current_user: dict = Depends(require_permission("testimonials"))):
    payload.id = id
    return await create_or_update_testimonial(payload, current_user)

@app.delete("/admin/testimonials/{id}")
@app.delete("/admin/testimonials/{id}/")
@app.delete("/testimonials/{id}")
@app.delete("/testimonials/{id}/")
async def delete_testimonial(id: int, current_user: dict = Depends(require_permission("testimonials"))):
    connection = get_db_connection()
    cursor = connection.cursor()
    try:
        cursor.execute("DELETE FROM testimonials WHERE id = %s", (id,))
        connection.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Testimonial not found")
        return {"ok": True, "message": "Testimonial deleted successfully"}
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        cursor.close()
        connection.close()

@app.post("/admin/testimonials/upload-avatar")
@app.post("/admin/testimonials/upload-avatar/")
async def upload_testimonial_avatar(file: UploadFile = File(...), current_user: dict = Depends(require_permission("testimonials"))):
    try:
        raw_filename = os.path.basename(file.filename or "avatar.png")
        ext = os.path.splitext(raw_filename)[1].lower()
        allowed_exts = {".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"}
        if ext not in allowed_exts:
            raise HTTPException(status_code=400, detail="Invalid image file extension")
        
        clean_name = "".join(c for c in raw_filename if c.isalnum() or c in "._-")
        filename = f"avatar_{int(time.time())}_{clean_name}"
        filepath = os.path.join("uploads", filename)
        with open(filepath, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        return {"ok": True, "url": f"/uploads/{filename}"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"File upload error: {e}")

@app.post("/admin/seo/upload-og-image")
@app.post("/admin/seo/upload-og-image/")
@app.post("/admin/seo/upload-image")
@app.post("/admin/seo/upload-image/")
@app.post("/upload")
@app.post("/upload/")
@app.post("/api/upload")
@app.post("/api/upload/")
async def upload_seo_og_image(file: UploadFile = File(...), current_user: dict = Depends(require_permission("seo"))):
    try:
        raw_filename = os.path.basename(file.filename or "og_image.png")
        ext = os.path.splitext(raw_filename)[1].lower()
        allowed_exts = {".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"}
        if ext not in allowed_exts:
            raise HTTPException(status_code=400, detail="Invalid image file extension. Supported: JPG, PNG, WebP, SVG, GIF.")
        
        clean_name = "".join(c for c in raw_filename if c.isalnum() or c in "._-")
        filename = f"og_{int(time.time())}_{clean_name}"
        filepath = os.path.join("uploads", filename)
        with open(filepath, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        return {"ok": True, "url": f"/uploads/{filename}"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"File upload error: {e}")

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8005))
    uvicorn.run("app:app", host="127.0.0.1", port=port, reload=False)
