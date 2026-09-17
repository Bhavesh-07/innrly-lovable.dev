import mysql.connector
from db_config import DB_CONFIG

try:
    conn = mysql.connector.connect(**DB_CONFIG)
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT id, title, slug, summary, created_at FROM blogs")
    blogs = cursor.fetchall()
    print("Database blogs count:", len(blogs))
    for b in blogs:
        print(f"ID: {b['id']} | Title: {b['title']} | Slug: {b['slug']} | Date: {b['created_at']}")
    cursor.close()
    conn.close()
except Exception as e:
    print("Error querying database:", e)
