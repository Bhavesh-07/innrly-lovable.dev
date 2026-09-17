import os

# MySQL connection configuration
DB_CONFIG = {
    "host": os.environ.get("DB_HOST", "127.0.0.1"),
    "user": os.environ.get("DB_USER", "bhavik"),
    "password": os.environ.get("DB_PASSWORD", "33jain33"),
    "database": os.environ.get("DB_NAME", "innrly_leads"),
    "port": int(os.environ.get("DB_PORT", "3306"))
}
