"""
Innrly Portal Write API Client & Onboarding Synchronizer
Specification Reference: Innrly-Portal-Write-API.pdf (ob.innrly.com)

Features:
- Cookie-based session authentication with auto-login and 401 re-authentication.
- Python hashlib.scrypt password hashing compatible with Node.js crypto defaults.
- Pre-flight email check via GET /api/portal/data?table=users.
- Safe merge updates: preserves existing user credentials & appends hotelAccess for existing users.
- Ordered entity upserts: 1. Client -> 2. Hotels -> 3. Users.
"""

import os
import re
import time
import json
import logging
import hashlib
import secrets
import urllib.request
import urllib.parse
import urllib.error
import http.cookiejar
import ssl
from pathlib import Path
from typing import Dict, List, Optional, Any, Tuple

# Load .env if present
env_file = Path(__file__).parent / ".env"
if env_file.exists():
    with open(env_file, "r", encoding="utf-8") as f:
        for line in f:
            line_s = line.strip()
            if line_s and not line_s.startswith("#") and "=" in line_s:
                k, v = line_s.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())

# Configure structured logging with file persistence
PORTAL_LOGS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "logs", "portal")
os.makedirs(PORTAL_LOGS_DIR, exist_ok=True)

today_str = time.strftime("%Y-%m-%d")
daily_log_path = os.path.join(PORTAL_LOGS_DIR, f"portal_sync-{today_str}.log")
latest_log_path = os.path.join(PORTAL_LOGS_DIR, "portal_sync_latest.log")

logger = logging.getLogger("innrly_portal_sync")
logger.setLevel(logging.INFO)

if not logger.handlers:
    # 1. Console Output
    c_handler = logging.StreamHandler()
    c_formatter = logging.Formatter("[%(asctime)s] [%(levelname)s] [InnrlyPortalSync] %(message)s")
    c_handler.setFormatter(c_formatter)
    logger.addHandler(c_handler)
    
    # 2. Daily Log File (portal_sync-YYYY-MM-DD.log)
    f_handler = logging.FileHandler(daily_log_path, encoding="utf-8")
    f_formatter = logging.Formatter("[%(asctime)s] [%(levelname)s] %(message)s")
    f_handler.setFormatter(f_formatter)
    logger.addHandler(f_handler)

    # 3. Latest Log File (portal_sync_latest.log for quick inspection)
    l_handler = logging.FileHandler(latest_log_path, encoding="utf-8")
    l_handler.setFormatter(f_formatter)
    logger.addHandler(l_handler)


def get_recent_portal_logs(max_lines: int = 200) -> str:
    """
    Reads the most recent lines from the portal sync log file.
    """
    target_file = latest_log_path if os.path.exists(latest_log_path) else daily_log_path
    if not os.path.exists(target_file):
        return "No portal sync log entries recorded yet."
    try:
        with open(target_file, "r", encoding="utf-8", errors="replace") as f:
            lines = f.readlines()
            return "".join(lines[-max_lines:])
    except Exception as e:
        return f"Error reading portal log file: {e}"


def slugify(text: str, default: str = "item") -> str:
    """
    Converts a name/title into a clean, URL-safe slug for use as a primary key.
    """
    if not text:
        return f"{default}-{secrets.token_hex(3)}"
    s = text.strip().lower()
    # Replace non-alphanumeric characters with hyphens
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = s.strip("-")
    if not s:
        return f"{default}-{secrets.token_hex(3)}"
    return s


def generate_node_scrypt_hash(password: str) -> str:
    """
    Generates a password hash in the exact format required by Innrly Portal:
    scrypt$<salt-hex>$<derived-key-hex>
    
    Compatible with Node.js:
    crypto.scryptSync(password, salt, 64) with default N=16384, r=8, p=1
    """
    salt_bytes = secrets.token_bytes(16)
    salt_hex = salt_bytes.hex()
    
    key_bytes = hashlib.scrypt(
        password.encode("utf-8"),
        salt=salt_bytes,
        n=16384,
        r=8,
        p=1,
        maxmem=0,
        dklen=64
    )
    key_hex = key_bytes.hex()
    return f"scrypt${salt_hex}${key_hex}"


def resolve_location_and_timezone(prop: Dict[str, Any], company_details: Dict[str, Any]) -> Tuple[str, str, str]:
    """
    Derives (city, state, timezone) accurately from property and company details.
    """
    raw_addr = (prop.get("address") or company_details.get("address") or "").strip()
    
    city = (prop.get("city") or company_details.get("city") or "").strip()
    state = (prop.get("state") or company_details.get("state") or "").strip()
    
    # If city or state is missing, extract from address
    if (not city or not state) and raw_addr and ("," in raw_addr):
        parts = [p.strip() for p in raw_addr.split(",") if p.strip()]
        if not city:
            if len(parts) >= 3:
                city = parts[-2]
            elif len(parts) == 2:
                city = parts[0]
        if not state:
            if len(parts) >= 2:
                st_part = parts[-1].split()
                if st_part:
                    state = st_part[0]
                    
    # Defaults
    if not city:
        city = "Vadodara" if "GUJARAT" in (raw_addr + state).upper() else "Dallas"
    if not state:
        state = "Gujarat" if "VADODARA" in (raw_addr + city).upper() else "TX"
        
    combined_text = f"{city} {state} {raw_addr}".upper()
    
    # 1. Indian Subcontinent
    indian_keywords = [
        "GUJARAT", "VADODARA", "AHMEDABAD", "SURAT", "RAJKOT", "MAHARASHTRA", 
        "MUMBAI", "PUNE", "DELHI", "KARNATAKA", "BANGALORE", "BENGALURU", 
        "TAMIL NADU", "CHENNAI", "TELANGANA", "HYDERABAD", "RAJASTHAN", 
        "JAIPUR", "GOA", "PUNJAB", "HARYANA", "KOLKATA", "INDIA", "+91"
    ]
    if any(k in combined_text for k in indian_keywords):
        return city, state, "Asia/Kolkata"
        
    # 2. US Pacific
    pacific_keywords = ["CA", "CALIFORNIA", "WA", "WASHINGTON", "OR", "OREGON", "NV", "NEVADA", "SAN JOSE", "SAN FRANCISCO", "LOS ANGELES", "SEATTLE", "PORTLAND", "LAS VEGAS"]
    if any(k in combined_text for k in pacific_keywords):
        return city, state, "America/Los_Angeles"
        
    # 3. US Mountain
    mountain_keywords = ["CO", "COLORADO", "AZ", "ARIZONA", "UT", "UTAH", "NM", "NEW MEXICO", "MT", "MONTANA", "WY", "WYOMING", "DENVER", "PHOENIX", "SALT LAKE"]
    if any(k in combined_text for k in mountain_keywords):
        return city, state, "America/Denver"
        
    # 4. US Eastern
    eastern_keywords = ["NY", "NEW YORK", "FL", "FLORIDA", "GA", "GEORGIA", "NC", "SC", "VA", "VIRGINIA", "PA", "PENNSYLVANIA", "MA", "MASSACHUSETTS", "NJ", "NEW JERSEY", "OH", "OHIO", "MI", "MICHIGAN", "MD", "MARYLAND", "MIAMI", "ATLANTA", "BOSTON", "PHILADELPHIA"]
    if any(k in combined_text for k in eastern_keywords):
        return city, state, "America/New_York"
        
    # 5. Default US Central
    return city, state, "America/Chicago"


class HttpResponse:
    def __init__(self, status_code: int, text: str):
        self.status_code = status_code
        self.text = text

    def json(self) -> Any:
        return json.loads(self.text)


class InnrlyHttpSession:
    """
    Zero-dependency cookie-aware HTTP session using standard library urllib.
    Requires no external pip packages (e.g. requests).
    """
    def __init__(self, timeout: int = 15):
        self.cookie_jar = http.cookiejar.CookieJar()
        self.timeout = timeout
        
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        
        self.opener = urllib.request.build_opener(
            urllib.request.HTTPCookieProcessor(self.cookie_jar),
            urllib.request.HTTPSHandler(context=ctx)
        )
        self.cookies: Dict[str, str] = {}

    def _sync_cookies(self):
        self.cookies = {c.name: c.value for c in self.cookie_jar}

    def post(self, url: str, json: Optional[Any] = None, timeout: Optional[int] = None) -> HttpResponse:
        req_timeout = timeout or self.timeout
        import json as _json
        body_bytes = _json.dumps(json).encode("utf-8") if json is not None else b""
        req = urllib.request.Request(
            url,
            data=body_bytes,
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "Innrly-Onboarding-Sync/1.0"
            },
            method="POST"
        )
        try:
            with self.opener.open(req, timeout=req_timeout) as resp:
                self._sync_cookies()
                content = resp.read().decode("utf-8", errors="replace")
                return HttpResponse(resp.status, content)
        except urllib.error.HTTPError as e:
            self._sync_cookies()
            content = e.read().decode("utf-8", errors="replace")
            return HttpResponse(e.code, content)

    def get(self, url: str, params: Optional[Dict[str, Any]] = None, timeout: Optional[int] = None) -> HttpResponse:
        req_timeout = timeout or self.timeout
        if params:
            qs = urllib.parse.urlencode(params)
            url = f"{url}?{qs}" if "?" not in url else f"{url}&{qs}"
        req = urllib.request.Request(
            url,
            headers={
                "Accept": "application/json",
                "User-Agent": "Innrly-Onboarding-Sync/1.0"
            },
            method="GET"
        )
        try:
            with self.opener.open(req, timeout=req_timeout) as resp:
                self._sync_cookies()
                content = resp.read().decode("utf-8", errors="replace")
                return HttpResponse(resp.status, content)
        except urllib.error.HTTPError as e:
            self._sync_cookies()
            content = e.read().decode("utf-8", errors="replace")
            return HttpResponse(e.code, content)


class InnrlyPortalClient:
    """
    Client for interacting with the internal Innrly Portal API at https://ob.innrly.com
    with comprehensive HTTP request/response file logging.
    """

    def __init__(
        self,
        base_url: Optional[str] = None,
        email: Optional[str] = None,
        password: Optional[str] = None,
        timeout: int = 15
    ):
        self.base_url = (base_url or os.environ.get("INNRLY_PORTAL_BASE_URL", "https://ob.innrly.com")).rstrip("/")
        self.email = email or os.environ.get("INNRLY_PORTAL_EMAIL", "jdoe@innrly.com")
        self.password = password or os.environ.get("INNRLY_PORTAL_PASSWORD", "InnrlyAdmin#2026")
        self.timeout = timeout
        
        self.session = InnrlyHttpSession(timeout=self.timeout)
        self.last_login_time = 0.0

    def login(self) -> bool:
        """
        Authenticates against POST /api/auth/login and stores the innrly_session cookie.
        Logs full request, status, and response details.
        """
        if not self.email or not self.password:
            logger.error("[AUTH] Innrly Portal login credentials missing (INNRLY_PORTAL_EMAIL / INNRLY_PORTAL_PASSWORD).")
            return False

        login_url = f"{self.base_url}/api/auth/login"
        payload = {
            "email": self.email,
            "password": self.password
        }

        logger.info(f"[AUTH] Sending staff login request to {login_url} (Email: {self.email})...")
        start_t = time.time()
        try:
            resp = self.session.post(login_url, json=payload, timeout=self.timeout)
            elapsed_ms = (time.time() - start_t) * 1000
            
            if resp.status_code == 200:
                try:
                    data = resp.json()
                except Exception:
                    data = {"raw": resp.text}

                if data.get("ok"):
                    self.last_login_time = time.time()
                    user_role = data.get("user", {}).get("role", "unknown")
                    user_email = data.get("user", {}).get("email", self.email)
                    logger.info(f"[AUTH] Login successful! HTTP 200 ({elapsed_ms:.1f}ms). Authenticated as {user_email} (Role: {user_role}).")
                    return True
                else:
                    logger.error(f"[AUTH] Login rejected! HTTP 200 ({elapsed_ms:.1f}ms). Response Body: {resp.text}")
                    return False
            else:
                logger.error(f"[AUTH] Login failed! HTTP {resp.status_code} ({elapsed_ms:.1f}ms). Response Body: {resp.text}")
                return False
        except Exception as e:
            elapsed_ms = (time.time() - start_t) * 1000
            logger.error(f"[AUTH] Network/Connection Exception during login ({elapsed_ms:.1f}ms): {e}", exc_info=True)
            return False

    def ensure_authenticated(self) -> bool:
        """
        Ensures a valid session exists. Re-authenticates if session cookie is missing or older than 6 days.
        """
        # 6 days in seconds (max cookie age is 7 days / 604800s)
        if "innrly_session" in self.session.cookies and (time.time() - self.last_login_time < 518400):
            return True
        return self.login()

    def get_table(self, table: str) -> List[Dict[str, Any]]:
        """
        Fetches all rows from GET /api/portal/data?table=<table_name> with logging.
        """
        if not self.ensure_authenticated():
            raise RuntimeError("Authentication to Innrly Portal failed.")

        url = f"{self.base_url}/api/portal/data"
        start_t = time.time()
        try:
            logger.info(f"[GET_TABLE] GET {url}?table={table}")
            resp = self.session.get(url, params={"table": table}, timeout=self.timeout)
            elapsed_ms = (time.time() - start_t) * 1000
            
            # Handle session expiration
            if resp.status_code == 401:
                logger.warning(f"[GET_TABLE] Received HTTP 401 Unauthorized for table '{table}'. Re-authenticating...")
                if self.login():
                    start_t2 = time.time()
                    resp = self.session.get(url, params={"table": table}, timeout=self.timeout)
                    elapsed_ms = (time.time() - start_t2) * 1000
                else:
                    raise RuntimeError("Re-authentication failed after 401.")

            if resp.status_code == 200:
                data = resp.json()
                rows = data.get("rows", [])
                logger.info(f"[GET_TABLE] HTTP 200 ({elapsed_ms:.1f}ms) -> Retrieved {len(rows)} records from table '{table}'.")
                return rows
            else:
                logger.error(f"[GET_TABLE] HTTP {resp.status_code} ({elapsed_ms:.1f}ms) for table '{table}'. Response Body: {resp.text}")
                return []
        except Exception as e:
            elapsed_ms = (time.time() - start_t) * 1000
            logger.error(f"[GET_TABLE] Exception fetching table '{table}' ({elapsed_ms:.1f}ms): {e}", exc_info=True)
            raise

    def write_row(self, table: str, row: Dict[str, Any], op: str = "insert") -> bool:
        """
        Writes a full row to POST /api/portal/data with full request and response trace logging.
        """
        if not self.ensure_authenticated():
            raise RuntimeError("Authentication to Innrly Portal failed.")

        url = f"{self.base_url}/api/portal/data"
        payload = {
            "table": table,
            "op": op,
            "row": row
        }

        # Format sanitized payload for logging (masking password hash)
        log_row = dict(row)
        if "passwordHash" in log_row:
            log_row["passwordHash"] = "[REDACTED_SCRYPT_HASH]"
        
        row_id = row.get("id") or row.get("email") or row.get("label") or "unknown"
        logger.info(f"[WRITE_ROW] POST {url} | Table: '{table}' | Op: '{op}' | ID: '{row_id}'")
        
        start_t = time.time()
        try:
            resp = self.session.post(url, json=payload, timeout=self.timeout)
            elapsed_ms = (time.time() - start_t) * 1000
            
            # Retry once on 401
            if resp.status_code == 401:
                logger.warning(f"[WRITE_ROW] Received HTTP 401 for table '{table}'. Re-authenticating...")
                if self.login():
                    start_t2 = time.time()
                    resp = self.session.post(url, json=payload, timeout=self.timeout)
                    elapsed_ms = (time.time() - start_t2) * 1000
                else:
                    raise RuntimeError("Re-authentication failed after 401.")

            if resp.status_code == 200:
                try:
                    data = resp.json()
                except Exception:
                    data = {"raw": resp.text}

                if data.get("ok"):
                    logger.info(f"[WRITE_ROW] SUCCESS HTTP 200 ({elapsed_ms:.1f}ms) for table '{table}' (ID: '{row_id}'). Response: {json.dumps(data)}")
                    return True
                else:
                    logger.error(f"[WRITE_ROW] REJECTED HTTP 200 ({elapsed_ms:.1f}ms) for table '{table}' (ID: '{row_id}'). Response: {resp.text} | Payload Sent: {json.dumps(log_row)}")
                    return False
            else:
                logger.error(f"[WRITE_ROW] FAILED HTTP {resp.status_code} ({elapsed_ms:.1f}ms) for table '{table}' (ID: '{row_id}'). Response Body: {resp.text} | Payload Sent: {json.dumps(log_row)}")
                return False
        except Exception as e:
            elapsed_ms = (time.time() - start_t) * 1000
            logger.error(f"[WRITE_ROW] Exception writing to table '{table}' (ID: '{row_id}') ({elapsed_ms:.1f}ms): {e} | Payload Sent: {json.dumps(log_row)}", exc_info=True)
            raise

    def find_user_by_email(self, email: str) -> Optional[Dict[str, Any]]:
        """
        Pre-flight check: searches existing users in the portal by email (case-insensitive).
        Returns the full existing user dict if found, else None.
        """
        if not email:
            return None
        target_email = email.strip().lower()
        users = self.get_table("users")
        for u in users:
            if u.get("email", "").strip().lower() == target_email:
                return u
        return None

    def find_client_by_name_or_id(self, client_id: str, company_name: str) -> Optional[Dict[str, Any]]:
        """
        Searches existing clients by ID or company label.
        """
        clients = self.get_table("clients")
        target_label = company_name.strip().lower()
        for c in clients:
            if c.get("id") == client_id or c.get("label", "").strip().lower() == target_label:
                return c
        return None

    def sync_onboarding(
        self,
        company_details: Dict[str, Any],
        properties_list: List[Dict[str, Any]],
        users_list: List[Dict[str, Any]],
        default_user_password: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Executes the verified end-to-end onboarding synchronization:
        1. Create / Upsert Client (Customer)
        2. Create / Upsert Properties (Hotels)
        3. Create / Safely Update Users (with scrypt hash & hotel access)
        
        Returns a detailed execution report.
        """
        report = {
            "success": False,
            "client_id": None,
            "created_hotels": [],
            "created_users": [],
            "updated_users": [],
            "errors": [],
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
        }

        # Step 0: Ensure Portal Authentication
        if not self.ensure_authenticated():
            report["errors"].append("Could not authenticate with Innrly Portal (https://ob.innrly.com).")
            return report

        try:
            # -------------------------------------------------------------
            # STEP 1: CREATE / UPSERT CLIENT
            # -------------------------------------------------------------
            company_name = company_details.get("companyName") or company_details.get("company_name") or "New Client"
            authorized_person = company_details.get("authorizedPerson") or company_details.get("authorized_person") or "Account Owner"
            contact_email = company_details.get("email") or "contact@innrly.com"
            contact_phone = company_details.get("work") or company_details.get("mobile") or company_details.get("phone") or ""
            
            client_id = slugify(company_name, default="client")
            
            # Check if client already exists to preserve custom settings
            existing_client = self.find_client_by_name_or_id(client_id, company_name)
            if existing_client:
                client_id = existing_client.get("id", client_id)
                client_row = existing_client.copy()
                client_row["label"] = company_name
                client_row["contactName"] = authorized_person
                client_row["contactEmail"] = contact_email
                client_row["ownerOperator"] = company_name
                if contact_phone:
                    client_row["ownerPhone"] = contact_phone
                client_row["deletedAt"] = None
                client_row["nonResponsive"] = False
                if not client_row.get("activeModuleIds"):
                    client_row["activeModuleIds"] = ["night-audit"]
                if not client_row.get("notifications"):
                    client_row["notifications"] = {
                        "weeklyStatus": True,
                        "monthlySummary": True,
                        "milestoneAlerts": True
                    }
            else:
                client_row = {
                    "id": client_id,
                    "label": company_name,
                    "contactName": authorized_person,
                    "contactEmail": contact_email,
                    "ownerOperator": company_name,
                    "ownerPhone": contact_phone,
                    "activeModuleIds": ["night-audit"],
                    "notifications": {
                        "weeklyStatus": True,
                        "monthlySummary": True,
                        "milestoneAlerts": True
                    },
                    "escalationContacts": [],
                    "customFields": [],
                    "nonResponsive": False,
                    "deletedAt": None
                }

            logger.info(f"Writing Client '{client_id}' ({company_name}) to portal...")
            if not self.write_row("clients", client_row, op="insert"):
                raise RuntimeError(f"Failed to upsert client '{client_id}' to portal.")
            
            report["client_id"] = client_id

            # -------------------------------------------------------------
            # STEP 2: CREATE / UPSERT PROPERTIES (HOTELS)
            # -------------------------------------------------------------
            hotel_ids = []
            for prop in properties_list:
                prop_name = prop.get("propertyName") or prop.get("property_name") or "Property"
                hotel_id = slugify(f"{client_id}-{prop_name}", default="hotel")
                
                # Derive city, state, timezone, and address
                full_address = prop.get("address") or company_details.get("address") or ""
                city, state, timezone = resolve_location_and_timezone(prop, company_details)

                pms_name = prop.get("pms") or "Stay"
                if pms_name.lower() == "other" and prop.get("pmsOther"):
                    pms_name = prop.get("pmsOther")

                brand_name = prop.get("brand") or "Independent"
                rooms_count = str(prop.get("rooms") or "")
                gm_name = prop.get("managerName") or prop.get("manager_name") or prop.get("contactPerson") or authorized_person
                gm_email = prop.get("managerEmail") or prop.get("manager_email") or contact_email
                gm_phone = prop.get("managerMobile") or prop.get("manager_mobile") or contact_phone

                hotel_row = {
                    "id": hotel_id,
                    "label": prop_name,
                    "clientId": client_id,
                    "brand": brand_name,
                    "city": city,
                    "state": state,
                    "timezone": timezone,
                    "pms": pms_name,
                    "rooms": rooms_count,
                    "address": full_address,
                    "phone": gm_phone,
                    "email": gm_email,
                    "gm": gm_name,
                    "gmEmail": gm_email,
                    "gmPhone": gm_phone,
                    "status": "idle",
                    "activeModuleIds": ["night-audit", "labor", "recon", "bi", "vault"],
                    "contacts": [
                        {
                            "kind": "gm",
                            "name": gm_name,
                            "email": gm_email,
                            "phone": gm_phone
                        }
                    ]
                }

                logger.info(f"Writing Hotel '{hotel_id}' ({prop_name}) for client '{client_id}'...")
                if self.write_row("hotels", hotel_row, op="insert"):
                    hotel_ids.append(hotel_id)
                    report["created_hotels"].append({
                        "id": hotel_id,
                        "name": prop_name,
                        "pms": pms_name
                    })
                else:
                    report["errors"].append(f"Failed to upsert hotel '{hotel_id}'.")

            # Fallback if no properties were provided
            if not hotel_ids:
                default_hotel_id = slugify(f"{client_id}-main-hotel", default="hotel")
                city, state, timezone = resolve_location_and_timezone({}, company_details)
                fallback_hotel = {
                    "id": default_hotel_id,
                    "label": f"{company_name} Main Property",
                    "clientId": client_id,
                    "brand": "Independent",
                    "city": city,
                    "state": state,
                    "timezone": timezone,
                    "pms": "Stay",
                    "rooms": "",
                    "address": company_details.get("address", ""),
                    "phone": contact_phone,
                    "email": contact_email,
                    "gm": authorized_person,
                    "gmEmail": contact_email,
                    "gmPhone": contact_phone,
                    "status": "idle",
                    "activeModuleIds": ["night-audit", "labor", "recon", "bi", "vault"],
                    "contacts": [
                        {
                            "kind": "gm",
                            "name": authorized_person,
                            "email": contact_email,
                            "phone": contact_phone
                        }
                    ]
                }
                if self.write_row("hotels", fallback_hotel, op="insert"):
                    hotel_ids.append(default_hotel_id)
                    report["created_hotels"].append({"id": default_hotel_id, "name": fallback_hotel["label"]})

            # -------------------------------------------------------------
            # STEP 3: CREATE / SAFELY UPDATE USERS
            # -------------------------------------------------------------
            # Ensure authorizedPerson is included if users_list is empty
            target_users = list(users_list) if users_list else []
            if not any(u.get("email", "").lower() == contact_email.lower() for u in target_users):
                target_users.insert(0, {
                    "name": authorized_person,
                    "email": contact_email,
                    "phone": contact_phone,
                    "position": "Owner / Authorized Representative"
                })

            for user_info in target_users:
                u_name = user_info.get("name") or "User"
                u_email = (user_info.get("email") or "").strip().lower()
                u_phone = user_info.get("phone") or contact_phone
                u_position = user_info.get("position") or "General Manager"
                
                if not u_email:
                    report["errors"].append(f"Skipped user '{u_name}': email missing.")
                    continue

                # PRE-FLIGHT EMAIL CHECK
                existing_user = self.find_user_by_email(u_email)
                
                if existing_user:
                    # INSTINCTIVE SAFE MERGE: Preserve credentials, append new hotel access
                    logger.info(f"User email '{u_email}' already exists on portal. Performing safe non-destructive update...")
                    user_id = existing_user["id"]
                    
                    # Merge hotel access without duplicates
                    current_hotels = set(existing_user.get("hotelAccess") or [])
                    current_hotels.update(hotel_ids)
                    
                    updated_user_row = existing_user.copy()
                    updated_user_row["hotelAccess"] = list(current_hotels)
                    
                    # Update client ID if not previously set
                    if not updated_user_row.get("clientId"):
                        updated_user_row["clientId"] = client_id
                        
                    if self.write_row("users", updated_user_row, op="update"):
                        report["updated_users"].append({
                            "id": user_id,
                            "email": u_email,
                            "name": existing_user.get("name", u_name),
                            "action": "merged_hotel_access",
                            "hotelAccess": updated_user_row["hotelAccess"]
                        })
                    else:
                        report["errors"].append(f"Failed to update existing user '{u_email}'.")
                else:
                    # CREATE BRAND NEW USER
                    user_id = slugify(f"user-{u_email.split('@')[0]}", default="user")
                    
                    # Generate temporary initial password & scrypt hash
                    raw_password = default_user_password or f"Innrly@{secrets.token_hex(4)}!"
                    scrypt_hash = generate_node_scrypt_hash(raw_password)

                    new_user_row = {
                        "id": user_id,
                        "name": u_name,
                        "email": u_email,
                        "phone": u_phone,
                        "position": u_position,
                        "clientId": client_id,
                        "roleId": "role-gm",
                        "hotelAccess": hotel_ids,
                        "modulesIOwn": ["night-audit"],
                        "notificationPrefs": {
                            "email": "daily",
                            "sms": False
                        },
                        "status": "active",
                        "active": True,
                        "passwordHash": scrypt_hash
                    }

                    logger.info(f"Creating new Portal User '{user_id}' for '{u_email}'...")
                    if self.write_row("users", new_user_row, op="insert"):
                        report["created_users"].append({
                            "id": user_id,
                            "email": u_email,
                            "name": u_name,
                            "temporary_password": raw_password,
                            "hotelAccess": hotel_ids
                        })
                    else:
                        report["errors"].append(f"Failed to create user '{u_email}'.")

            # Final check
            report["success"] = (
                report["client_id"] is not None and
                len(report["created_hotels"]) > 0 and
                (len(report["created_users"]) > 0 or len(report["updated_users"]) > 0)
            )

        except Exception as e:
            logger.error(f"Error during full onboarding sync: {e}", exc_info=True)
            report["errors"].append(str(e))
            report["success"] = False

        return report


# CLI helper for testing & direct runs
if __name__ == "__main__":
    import argparse
    import sys

    parser = argparse.ArgumentParser(description="Innrly Portal Write API Sync Client")
    parser.add_argument("--test-hash", action="store_true", help="Test Node-compatible scrypt password hashing")
    parser.add_argument("--check-auth", action="store_true", help="Check login connectivity with ob.innrly.com")
    parser.add_argument("--sync-file", type=str, help="Sync onboarding JSON payload file to ob.innrly.com")
    args = parser.parse_args()

    if args.test_hash:
        test_pw = "TheUsersPassword"
        h = generate_node_scrypt_hash(test_pw)
        print(f"Generated Scrypt Hash for '{test_pw}':\n{h}")
        parts = h.split("$")
        assert len(parts) == 3 and parts[0] == "scrypt" and len(parts[1]) == 32 and len(parts[2]) == 128
        print("[PASS] Scrypt hash format matches 'scrypt$<salt-hex>$<derived-key-hex>' exactly!")
        sys.exit(0)

    if args.check_auth:
        client = InnrlyPortalClient()
        success = client.login()
        if success:
            print("[PASS] Successfully authenticated with https://ob.innrly.com!")
            try:
                clients = client.get_table("clients")
                print(f"Read access verified. Found {len(clients)} existing clients.")
            except Exception as ex:
                print(f"Read test returned: {ex}")
        else:
            print("[FAIL] Authentication failed. Check INNRLY_PORTAL_EMAIL and INNRLY_PORTAL_PASSWORD.")
        sys.exit(0 if success else 1)

    if args.sync_file:
        with open(args.sync_file, "r") as f:
            data = json.load(f)
        client = InnrlyPortalClient()
        result = client.sync_onboarding(
            company_details=data.get("companyDetails", {}),
            properties_list=data.get("propertiesList", []),
            users_list=data.get("users", [])
        )
        print("Sync Result:\n", json.dumps(result, indent=2))
        sys.exit(0 if result["success"] else 1)

    parser.print_help()
