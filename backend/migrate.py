import mysql.connector
from mysql.connector import Error

from db_config import DB_CONFIG

def migrate():
    try:
        conn = mysql.connector.connect(**DB_CONFIG)
        cursor = conn.cursor()
        
        # Drop old table
        print("Dropping old 'leads' table if exists...")
        cursor.execute("DROP TABLE IF EXISTS leads")
        
        # Create contact_leads table
        print("Creating table 'contact_leads'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS contact_leads (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                company VARCHAR(255) NOT NULL,
                phone VARCHAR(50) NOT NULL,
                properties VARCHAR(50),
                message TEXT,
                submitted_at DATETIME,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        # Create trial_leads table
        print("Creating table 'trial_leads'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS trial_leads (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                company VARCHAR(255) NOT NULL,
                role VARCHAR(255),
                phone VARCHAR(50) NOT NULL,
                properties VARCHAR(50) NOT NULL,
                pms VARCHAR(255),
                submitted_at DATETIME,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        # Create newsletter_subscribers table
        print("Creating table 'newsletter_subscribers'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS newsletter_subscribers (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) NOT NULL,
                sub_source VARCHAR(255),
                submitted_at DATETIME,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        # Create onboarding_companies table
        print("Creating table 'onboarding_companies'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS onboarding_companies (
                id INT AUTO_INCREMENT PRIMARY KEY,
                company_name VARCHAR(255) NOT NULL,
                authorized_person VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                address VARCHAR(255) NOT NULL,
                state VARCHAR(100) NOT NULL,
                city VARCHAR(100) NOT NULL,
                zip VARCHAR(20) NOT NULL,
                mobile VARCHAR(50) NOT NULL,
                work_phone VARCHAR(50) NOT NULL,
                decision_maker VARCHAR(10) NOT NULL,
                submitted_at DATETIME,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        # Create onboarding_users table
        print("Creating table 'onboarding_users'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS onboarding_users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                company_id INT NOT NULL,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(50) NOT NULL,
                FOREIGN KEY (company_id) REFERENCES onboarding_companies(id) ON DELETE CASCADE
            )
        """)
        
        # Create onboarding_properties table
        print("Creating table 'onboarding_properties'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS onboarding_properties (
                id INT AUTO_INCREMENT PRIMARY KEY,
                company_id INT NOT NULL,
                property_name VARCHAR(255) NOT NULL,
                property_code VARCHAR(100) NOT NULL,
                address VARCHAR(255) NOT NULL,
                rooms INT NOT NULL,
                brand VARCHAR(100) NOT NULL,
                pms VARCHAR(100) NOT NULL,
                pms_other VARCHAR(100),
                contact_person VARCHAR(255) NOT NULL,
                manager_name VARCHAR(255) NOT NULL,
                manager_email VARCHAR(255) NOT NULL,
                manager_mobile VARCHAR(50) NOT NULL,
                FOREIGN KEY (company_id) REFERENCES onboarding_companies(id) ON DELETE CASCADE
            )
        """)
        
        # Create seo_settings table
        print("Creating table 'seo_settings'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS seo_settings (
                id INT AUTO_INCREMENT PRIMARY KEY,
                page_path VARCHAR(191) NOT NULL UNIQUE,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                keywords TEXT,
                og_title VARCHAR(255),
                og_description TEXT,
                og_image VARCHAR(255),
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        """)
        # Create site_settings table
        print("Creating table 'site_settings'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS site_settings (
                setting_key VARCHAR(191) PRIMARY KEY,
                setting_value TEXT NOT NULL,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        """)
        
        # Drop old blog_posts table if it exists
        print("Dropping old 'blog_posts' table if exists...")
        cursor.execute("DROP TABLE IF EXISTS blog_posts")

        # Create blog_categories table
        print("Creating table 'blog_categories'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS blog_categories (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE,
                slug VARCHAR(255) NOT NULL UNIQUE,
                created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        """)

        # Create blogs table
        print("Creating table 'blogs'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS blogs (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) NOT NULL UNIQUE,
                content LONGTEXT NOT NULL,
                summary TEXT,
                author VARCHAR(100) DEFAULT 'Admin',
                category_id INT DEFAULT NULL,
                featured_image VARCHAR(255) DEFAULT NULL,
                status ENUM('draft','published') DEFAULT 'published',
                created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (category_id) REFERENCES blog_categories(id) ON DELETE SET NULL
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        """)
        
        # Drop old tables if they exist
        print("Dropping old integrations tables...")
        cursor.execute("DROP TABLE IF EXISTS pms_integrations")
        cursor.execute("DROP TABLE IF EXISTS integrations")
        
        # Create integrations table
        print("Creating table 'integrations'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS integrations (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                initials VARCHAR(10) NOT NULL,
                category VARCHAR(50) NOT NULL DEFAULT 'pms',
                hue INT NOT NULL DEFAULT 200,
                domain VARCHAR(255) NULL,
                image_url TEXT NULL,
                badge VARCHAR(50) NULL,
                to_url VARCHAR(255) NULL,
                created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        """)

        # Create testimonials table
        print("Creating table 'testimonials'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS testimonials (
                id INT AUTO_INCREMENT PRIMARY KEY,
                page VARCHAR(100) NOT NULL DEFAULT 'homepage',
                quote TEXT NOT NULL,
                name VARCHAR(255) NOT NULL,
                title VARCHAR(255) NOT NULL,
                company VARCHAR(255) DEFAULT '',
                avatar VARCHAR(500) DEFAULT '',
                rating INT DEFAULT 5,
                is_homepage BOOLEAN DEFAULT TRUE,
                display_order INT DEFAULT 0,
                status VARCHAR(50) DEFAULT 'active',
                created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        """)

        # Add missing columns if testimonials table already existed without them
        try:
            cursor.execute("ALTER TABLE testimonials ADD COLUMN page VARCHAR(100) NOT NULL DEFAULT 'homepage'")
        except Error:
            pass
        try:
            cursor.execute("ALTER TABLE testimonials ADD COLUMN avatar VARCHAR(500) DEFAULT ''")
        except Error:
            pass
        try:
            cursor.execute("ALTER TABLE testimonials ADD COLUMN rating INT DEFAULT 5")
        except Error:
            pass

        # Seed initial testimonials if table is empty
        cursor.execute("SELECT COUNT(*) FROM testimonials")
        count = cursor.fetchone()[0]
        if count == 0:
            print("Seeding initial homepage testimonials...")
            initial_testimonials = [
                (
                    "homepage",
                    "Innrly replaced four spreadsheets and saved my GM two days a week. Reconciliation that used to take a full morning now runs in minutes.",
                    "VP of Operations",
                    "VP of Operations",
                    "HMS Hospitality (12 hotels · select-service)",
                    "",
                    5,
                    True,
                    1,
                    "active"
                ),
                (
                    "homepage",
                    "OTA commission audits that used to slip through quarterly reviews now surface daily. The dashboard pays for itself before lunch.",
                    "Owner",
                    "Owner",
                    "Exceptional Hospitality (6 hotels · full-service)",
                    "",
                    5,
                    True,
                    2,
                    "active"
                ),
                (
                    "homepage",
                    "Innrly replaced three spreadsheets and a part-time analyst. We close the month in two days instead of two weeks.",
                    "VP of Finance",
                    "VP of Finance",
                    "Q Hotels (14 hotels)",
                    "",
                    5,
                    True,
                    3,
                    "active"
                ),
                (
                    "homepage",
                    "The labor dashboard paid for the platform within the first quarter alone. Now every GM checks it before finalizing the schedule.",
                    "Director of Operations",
                    "Director of Operations",
                    "Marquee Hospitality (9 hotels)",
                    "",
                    5,
                    True,
                    4,
                    "active"
                ),
                (
                    "homepage",
                    "Onboarding took just one week—not an entire quarter. Their team mapped our PMS, payroll, and accounting systems from start to finish, and we barely had to lift a finger.",
                    "Owner",
                    "Owner",
                    "Shiva Hospitality (4 hotels)",
                    "",
                    5,
                    True,
                    5,
                    "active"
                ),
                (
                    "reconciliation",
                    "We went from a fourteen-day close to a four-day close in our first quarter on Innrly. The OTA audit alone paid for the platform — we recovered hundreds of dollars in mis-billed commissions in month one.",
                    "Corporate Controller",
                    "Corporate Controller",
                    "HMS Hospitality (9-property portfolio)",
                    "",
                    5,
                    False,
                    1,
                    "active"
                ),
                (
                    "operations-automation",
                    "We lost two night auditors because the workload was overwhelming. After implementing Innrly, the job is genuinely a four-hour shift. People actually want the role now, and our AGM starts each morning with a queue instead of a crisis.",
                    "Director of Operations",
                    "Director of Operations",
                    "AJNM Hospitality (6-property select-service group)",
                    "",
                    5,
                    False,
                    1,
                    "active"
                ),
                (
                    "innrly-shift",
                    "I used to spend Sunday nights building the schedule for the week ahead and Friday afternoons fixing payroll. With Innrly Shift, I got both back. Now, the Snapshot is the only labor screen I need to open all day.",
                    "Latonya",
                    "General Manager",
                    "Holiday Inn Express (110 rooms)",
                    "",
                    5,
                    False,
                    1,
                    "active"
                ),
                (
                    "innrly-pay",
                    "We eliminated hundreds of dollars in annual accounts payable automation costs by switching to Innrly Pay. The transition was seamless, and the platform integrates effortlessly with our back-office systems. It has streamlined our accounts payable process by eliminating envelopes, stamps, and manual mailing, saving both time and money. Innrly Pay has made our AP workflow more efficient, reliable, and cost-effective.",
                    "Corporate Controller",
                    "Corporate Controller",
                    "9-property select-service group",
                    "",
                    5,
                    False,
                    1,
                    "active"
                ),
                (
                    "financial-control",
                    "We used to spend the first week of every month closing the books. Now my controller spends the saved time on actual analysis. Innrly didn't just speed up reconciliation—it eliminated it.",
                    "Heather",
                    "CFO",
                    "12-property hotel ownership group",
                    "",
                    5,
                    False,
                    1,
                    "active"
                ),
                (
                    "expense-entries",
                    "We used to discover utility auto-debits weeks after they cleared. Now they're posted the same day, coded correctly, and reflected in the general ledger immediately. As a result, our month-end close dropped from 12 days to just 4.",
                    "Nan",
                    "Corporate Controller",
                    "5-property portfolio",
                    "",
                    5,
                    False,
                    1,
                    "active"
                ),
                (
                    "document-vault",
                    "Document Vault has saved me countless hours by eliminating the need for emails requesting reports and backup documentation. End-of-month reconciliation and sales tax preparation have become seamless with Innrly's Document Vault. Everything is stored in one place, organized by the correct date, making it easy to find exactly what I need when I need it.",
                    "Cindy",
                    "Corporate Controller",
                    "Gates and Gates (6-property portfolio)",
                    "",
                    5,
                    False,
                    1,
                    "active"
                ),
                (
                    "case-studies.midwest-portfolio",
                    "We stopped hiring our way out of back-office work. Innrly paid for itself in the first quarter and we're running 12 hotels with the same corporate headcount we had at eight.",
                    "VP of Operations",
                    "VP of Operations",
                    "K&K West Coast (12 hotels)",
                    "",
                    5,
                    False,
                    1,
                    "active"
                ),
                (
                    "case-studies.urban-full-service",
                    "The OTA recovery alone paid for Innrly several times over. But what really got my attention was how much faster we were able to close.",
                    "Amita",
                    "Corporate Controller",
                    "Urban Full-Service Portfolio",
                    "",
                    5,
                    False,
                    1,
                    "active"
                ),
                (
                    "case-studies.hilton-management-company",
                    "Growing our management portfolio used to mean adding controllers. With Innrly, adding a property is just adding a tenant to the dashboard.",
                    "CFO",
                    "CFO",
                    "Economos Properties (Hilton Management)",
                    "",
                    5,
                    False,
                    1,
                    "active"
                ),
                (
                    "case-studies.extended-stay-portfolio",
                    "Every other labor tool assumes a standard daily turnover. Innrly is the only platform that accurately models weekly-clean MPOR and multi-property housekeeping floating.",
                    "VP of Operations",
                    "VP of Operations",
                    "K&K Hotels (Extended-Stay Portfolio)",
                    "",
                    5,
                    False,
                    1,
                    "active"
                ),
                (
                    "select-service",
                    "I used to start every Monday on the phone with my controller. Now I open one tab, see all eight hotels, and I'm done in five minutes. Innrly didn't replace a tool — it replaced a meeting.",
                    "Rachael",
                    "VP of Operations",
                    "8-property midwest portfolio",
                    "",
                    5,
                    False,
                    1,
                    "active"
                )
            ]
            cursor.executemany("""
                INSERT INTO testimonials (page, quote, name, title, company, avatar, rating, is_homepage, display_order, status)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """, initial_testimonials)
        
        conn.commit()
        print("Migration completed successfully!")
        
    except Error as e:
        print("Error while migrating:", e)
    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conn' in locals() and conn.is_connected():
            conn.close()

if __name__ == '__main__':
    migrate()
