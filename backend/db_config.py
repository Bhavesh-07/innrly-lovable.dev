import os
from pathlib import Path

# Load .env if present
env_file = Path(__file__).parent / ".env"
if env_file.exists():
    with open(env_file, "r", encoding="utf-8") as f:
        for line in f:
            line_s = line.strip()
            if line_s and not line_s.startswith("#") and "=" in line_s:
                k, v = line_s.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())

# MySQL connection configuration
DB_CONFIG = {
    "host": os.environ.get("DB_HOST", "127.0.0.1"),
    "user": os.environ.get("DB_USER", "root"),
    "password": os.environ.get("DB_PASSWORD", ""),
    "database": os.environ.get("DB_NAME", "innrly_leads"),
    "port": int(os.environ.get("DB_PORT", "3307"))
}

