import sys
import os
import mysql.connector

try:
    from db_config import DB_CONFIG
    print("Successfully imported DB_CONFIG from db_config.py:")
    print(f"  - host: {DB_CONFIG.get('host')}")
    print(f"  - user: {DB_CONFIG.get('user')}")
    print(f"  - database: {DB_CONFIG.get('database')}")
    print(f"  - port: {DB_CONFIG.get('port')}")
    pwd = DB_CONFIG.get('password', '')
    print(f"  - password provided: {'Yes (length ' + str(len(pwd)) + ')' if pwd else 'No'}")
except Exception as e:
    print(f"Error importing DB_CONFIG: {e}")
    sys.exit(1)

print("\n--- Attempting Connection ---")
try:
    print(f"Connecting to {DB_CONFIG.get('host')} as {DB_CONFIG.get('user')}...")
    conn = mysql.connector.connect(**DB_CONFIG)
    print("✅ Connection successful!")
    conn.close()
except mysql.connector.Error as err:
    print(f"❌ Connection failed: {err}")
    
    # Try alternative connections if it failed
    print("\n--- Diagnostics ---")
    if DB_CONFIG.get('host') == 'localhost' or DB_CONFIG.get('host') == '127.0.0.1':
        alt_host = '127.0.0.1' if DB_CONFIG.get('host') == 'localhost' else 'localhost'
        print(f"Trying alternative host '{alt_host}'...")
        try:
            alt_config = DB_CONFIG.copy()
            alt_config['host'] = alt_host
            conn = mysql.connector.connect(**alt_config)
            print(f"✅ Connection successful using host '{alt_host}'!")
            print(f"TIP: Change 'host' in DB_CONFIG to '{alt_host}' in app.py")
            conn.close()
        except mysql.connector.Error as alt_err:
            print(f"❌ Connection with '{alt_host}' also failed: {alt_err}")
            
    print("\nTo test if your MySQL root account actually requires a password, open Command Prompt and run:")
    print("mysql -u root -p")
    print("If it prompts for a password and you don't have one, press Enter. If that fails, a password is required.")
