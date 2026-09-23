import mysql.connector
from datetime import datetime

from db_config import DB_CONFIG

def seed():
    conn = mysql.connector.connect(**DB_CONFIG)
    cursor = conn.cursor()
    now = datetime.now()
    
    try:
        # Clear tables
        cursor.execute("SET FOREIGN_KEY_CHECKS = 0")
        cursor.execute("TRUNCATE TABLE onboarding_properties")
        cursor.execute("TRUNCATE TABLE onboarding_users")
        cursor.execute("TRUNCATE TABLE onboarding_companies")
        cursor.execute("TRUNCATE TABLE newsletter_subscribers")
        cursor.execute("TRUNCATE TABLE trial_leads")
        cursor.execute("TRUNCATE TABLE contact_leads")
        cursor.execute("TRUNCATE TABLE seo_settings")
        cursor.execute("TRUNCATE TABLE site_settings")
        cursor.execute("TRUNCATE TABLE integrations")
        cursor.execute("SET FOREIGN_KEY_CHECKS = 1")
        
        # 1. Contact Leads
        print("Seeding contact leads...")
        cursor.execute("""
            INSERT INTO contact_leads (name, email, company, phone, properties, message, submitted_at)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """, ("John Doe", "john.doe@hilton-group.com", "Hilton Management Partners", "+1 (555) 123-4567", "12", 
              "Interested in booking a live demo for our Midwest select-service portfolio.", now))
        
        # 2. Trial Leads
        print("Seeding trial leads...")
        cursor.execute("""
            INSERT INTO trial_leads (name, email, company, role, phone, properties, pms, submitted_at)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, ("Sarah Jenkins", "sarah@apexhotels.co", "Apex Hospitality Group", "VP of Operations", "+1 (555) 987-6543", "6", 
              "Opera / Marriott FOSSE", now))
        
        # 3. Newsletter Subscribers
        print("Seeding newsletter subscribers...")
        cursor.execute("""
            INSERT INTO newsletter_subscribers (email, sub_source, submitted_at)
            VALUES (%s, %s, %s)
        """, ("marketing@inn-operators.com", "footer", now))
        
        # 4. Onboarding Companies
        print("Seeding onboarding data...")
        cursor.execute("""
            INSERT INTO onboarding_companies (
                company_name, authorized_person, email, address, state, city, zip, mobile, work_phone, decision_maker, submitted_at
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, ("Summit Lodging LLC", "Robert Miller", "robert@summitlodging.com", "456 Peak View Way", "Colorado", "Denver", "80202",
              "+1 (303) 555-8899", "+1 (303) 555-8800", "Yes", now))
        
        company_id = cursor.lastrowid
        
        # Onboarding Users
        cursor.execute("""
            INSERT INTO onboarding_users (company_id, name, email, phone)
            VALUES (%s, %s, %s, %s)
        """, (company_id, "Jane Smith", "jane@summitlodging.com", "+1 (303) 555-8822"))
        
        # Onboarding Properties
        cursor.execute("""
            INSERT INTO onboarding_properties (
                company_id, property_name, property_code, address, rooms, brand, pms, pms_other, contact_person, manager_name, manager_email, manager_mobile
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (company_id, "Hampton Inn Denver Downtown", "HAMP-DEN", "123 Broadway, Denver CO 80202", 145, "Hampton by Hilton", "OnQ", None,
              "Robert Miller", "Albert Johnson", "albert.j@summitlodging.com", "+1 (303) 555-1122"))
              
        # 5. SEO Settings
        print("Seeding SEO settings...")
        seo_data = [
            (
                "/",
                "Innrly — Hotel back-office, BI & labor platform",
                "Innrly (sometimes spelled Innerly) automates hotel back-office work, surfaces real-time portfolio insights, and controls labor costs. Save 20–40 hours per property each month.",
                "hotel management software, back-office automation, hotel BI, labor management",
                "Innrly — One platform for total hotel control",
                "Automate financials, streamline operations, and manage performance across your entire hotel portfolio with Innrly (sometimes spelled Innerly).",
                "https://innrly.com/og/home.jpg"
            ),
            (
                "/about",
                "About Innrly — Operator-built hotel back-office platform",
                "Innrly was built by hotelier Vimal Patel and has been running Q Hotels Management's portfolio since 2007 — across Hilton, Marriott, IHG, and Best Western brands.",
                "about innrly, hotel operator software, vimal patel",
                "About Innrly — Built by an operator, since 2007",
                "19 years inside our own hotels before we sold it to yours. Built by Vimal Patel of Q Hotels Management.",
                "https://innrly.com/og/about.jpg"
            ),
            (
                "/pricing",
                "Innrly Pricing — Transparent, flat-rate hotel back-office software",
                "Simple, per-property pricing with no setup fees or contract lock-in. 90-day free trial on your real data.",
                "hotel software pricing, innrly pricing, transparent pricing",
                "Innrly Pricing — Simple, flat-rate hotel control",
                "90-day free trial on your real data. No setup fees, no contracts.",
                "https://innrly.com/og/pricing.jpg"
            ),
            (
                "/contact",
                "Book an Innrly Demo — PMS-agnostic hotel back-office automation",
                "Schedule a 20-minute walkthrough on your own data. See how Innrly can automate your night audit, OTA reconciliation, and labor tracking.",
                "book innrly demo, hotel software demo, contact innrly",
                "Book an Innrly Demo — 20 minutes to total control",
                "Schedule a walkthrough on your own data. See Innrly's PMS-agnostic automation live.",
                "https://innrly.com/og/contact.jpg"
            ),
            (
                "/features",
                "Innrly Features — Automated night audit, OTA assurance & labor tracking",
                "Explore Innrly's feature set: dynamic exceptions dashboard, OCR expense capture, mobile-first labor tracking, and daily KPI digests.",
                "innrly features, night audit automation, ota reconciliation",
                "Innrly Features — PMS-agnostic back-office automation",
                "Explore the exceptions dashboard, invoice capture, bank matching, and daily labor tracking.",
                "https://innrly.com/og/features.jpg"
            ),
            (
                "/security",
                "Innrly Security — Bank-grade data protection for hotel operators",
                "Read about our data security standards, read-only PMS connections, encryption protocols, and SOC-2 alignment.",
                "hotel software security, data protection, soc 2 hotel software",
                "Innrly Security — Bank-grade protection by design",
                "Read-only PMS connections, daily backup encryption, and enterprise access control.",
                "https://innrly.com/og/security.jpg"
            ),
            (
                "/developers",
                "Innrly Developer Portal — PMS & Accounting APIs",
                "Access API reference, webhook documentation, and integration guides for PMS and accounting sync.",
                "innrly developer api, hotel software api, webhook integration",
                "Innrly Developer Portal — Open APIs for hospitality",
                "Integrate your PMS, accounting GL, and payroll systems via our REST APIs.",
                "https://innrly.com/og/developers.jpg"
            )
        ]
        
        cursor.executemany("""
            INSERT INTO seo_settings (page_path, title, description, keywords, og_title, og_description, og_image)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """, seo_data)

        # 6. Site Settings
        print("Seeding site settings...")
        settings_data = [
            ("innrly_trial_modal_disabled", "false"),
            ("innrly_login_link", "https://app.innrly.com")
        ]
        cursor.executemany("""
            INSERT INTO site_settings (setting_key, setting_value)
            VALUES (%s, %s)
        """, settings_data)
        
        # 7. Blog Posts
        print("Skipping deprecated blog_posts seeding to preserve existing blogs table.")
            
        # 8. Integrations
        print("Seeding integrations...")
        integrations_data = [
            # PMS
            ("Opera (Oracle)", "OP", "pms", 25, "oracle.com", None, None, None),
            ("Choice Advantage", "CA", "pms", 15, "choicehotels.com", None, None, None),
            ("Marriott FOSSE", "MF", "pms", 0, "marriott.com", None, None, None),
            ("Hilton OnQ", "HQ", "pms", 230, "hilton.com", None, None, None),
            ("Hilton PEP", "PE", "pms", 230, "hilton.com", None, None, None),
            ("Best Western WHG", "BW", "pms", 220, "bestwestern.com", None, None, None),
            ("Wyndham Wynguest", "WY", "pms", 350, "wyndhamhotels.com", None, None, None),
            ("IHG (HotelKey / HMS)", "IH", "pms", 200, "ihg.com", None, None, None),
            ("StayNTouch", "SN", "pms", 280, "stayntouch.com", None, None, None),
            ("Cloudbeds", "CB", "pms", 195, "cloudbeds.com", None, None, None),
            ("Mews", "MW", "pms", 250, "mews.com", None, None, None),
            ("RoomKeyPMS", "RK", "pms", 165, "roomkeypms.com", None, None, None),
            ("Visual Matrix", "VM", "pms", 145, "visualmatrix.com", None, None, None),
            ("Maestro", "MA", "pms", 35, "maestropms.com", None, None, None),
            ("innRoad", "IR", "pms", 205, "innroad.com", None, None, None),
            ("HotelKey", "HK", "pms", 215, "hotelkeyapp.com", None, None, None),
            ("Jonas Chorum", "JC", "pms", 25, "jonaschorum.com", None, None, None),
            ("Stay PMS", "ST", "pms", 195, "staypms.com", None, None, None),
            
            # OTA
            ("Booking.com", "BK", "ota", 215, "booking.com", None, None, None),
            ("Expedia", "EX", "ota", 45, "expedia.com", None, None, None),
            ("Priceline", "PR", "ota", 195, "priceline.com", None, None, None),
            ("CLC Lodging", "CL", "ota", 5, "clclodging.com", None, None, None),
            
            # Accounting
            ("M3", "M3", "accounting", 215, "m3as.com", None, "partner", "/integrations/m3"),
            ("QuickBooks", "QB", "accounting", 145, "quickbooks.intuit.com", None, None, "/integrations/quickbooks"),
            ("Sage Intacct", "SI", "accounting", 155, "sage.com", None, None, "/integrations/sage-intacct"),
            ("Xero", "XE", "accounting", 195, "xero.com", None, None, None),
            ("NetSuite", "NS", "accounting", 5, "netsuite.com", None, None, None),
            
            # Payroll
            ("ADP", "AD", "payroll", 5, "adp.com", None, None, None),
            ("Paychex", "PX", "payroll", 215, "paychex.com", None, None, None),
            ("Gusto", "GU", "payroll", 15, "gusto.com", None, None, None),
            ("Paycom", "PC", "payroll", 220, "paycom.com", None, None, None),
            ("Paylocity", "PL", "payroll", 145, "paylocity.com", None, None, None),
            ("Heartland", "HL", "payroll", 0, "heartland.us", None, None, None),
            ("Hotel Effectiveness", "HE", "payroll", 215, "hoteleffectiveness.com", None, None, None),
            
            # Guest
            ("Medallia", "ME", "guest", 350, "medallia.com", None, None, None),
            ("Revinate", "RV", "guest", 25, "revinate.com", None, None, None),
            ("GuestRevu", "GR", "guest", 195, "guestrevu.com", None, None, None),
            ("ReviewPro", "RP", "guest", 215, "reviewpro.shijigroup.com", None, None, None),
            ("Kipsu", "KP", "guest", 280, "kipsu.com", None, None, None),
            
            # Banking
            ("Plaid", "PD", "banking", 5, "plaid.com", None, "partner", None),
            ("Chase", "CH", "banking", 215, "chase.com", None, None, None),
            ("Bank of America", "BA", "banking", 0, "bankofamerica.com", None, None, None),
            ("Wells Fargo", "WF", "banking", 25, "wellsfargo.com", None, None, None),
            ("Truist", "TR", "banking", 280, "truist.com", None, None, None),
            ("U.S. Bank", "US", "banking", 220, "usbank.com", None, None, None),
            ("PNC", "PN", "banking", 25, "pnc.com", None, None, None),
            ("Capital One", "C1", "banking", 5, "capitalone.com", None, None, None),
            
            # Payments
            ("Innrly Pay", "IP", "payments", 195, None, None, None, None),
            ("Virtual Cards", "VC", "payments", 215, None, None, None, None),
            ("ACH", "AC", "payments", 145, None, None, None, None),
            ("Repay", "RP", "payments", 195, "repay.com", None, "partner", None),
            ("Stripe", "ST", "payments", 250, "stripe.com", None, None, None),
            
            # Workforce
            ("Shield Screening", "SS", "workforce", 215, "shieldscreening.com", None, "partner", None),
            ("isolved", "IS", "workforce", 25, "isolvedhcm.com", None, "partner", None),
            ("TransUnion", "TU", "workforce", 5, "transunion.com", None, "partner", None),
        ]
        cursor.executemany("""
            INSERT INTO integrations (name, initials, category, hue, domain, image_url, badge, to_url)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, integrations_data)
              
        conn.commit()
        print("Seeding completed successfully!")
    except Exception as e:
        print("Error seeding database:", e)
    finally:
        cursor.close()
        conn.close()

if __name__ == '__main__':
    seed()
