-- Testimonials Table Schema and Production Seed Script for Innrly
-- Populated directly from real customer data in 'innrly testimols.docx'

CREATE TABLE IF NOT EXISTS `innrly_leads`.`testimonials` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `page` VARCHAR(100) NOT NULL DEFAULT 'homepage',
  `quote` TEXT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `company` VARCHAR(255) DEFAULT '',
  `avatar` VARCHAR(500) DEFAULT '',
  `rating` INT DEFAULT 5,
  `is_homepage` TINYINT(1) DEFAULT 0,
  `display_order` INT DEFAULT 0,
  `status` VARCHAR(50) DEFAULT 'active',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Truncate existing records to avoid duplicates
TRUNCATE TABLE `innrly_leads`.`testimonials`;

-- Insert Real Customer Testimonials (from innrly testimols.docx)
INSERT INTO `innrly_leads`.`testimonials` 
  (`page`, `quote`, `name`, `title`, `company`, `avatar`, `rating`, `is_homepage`, `display_order`, `status`) 
VALUES 
  (
    'homepage',
    'Innrly replaced four spreadsheets and saved my GM two days a week. Reconciliation that used to take a full morning now runs in minutes.',
    'VP of Operations',
    'VP of Operations',
    'HMS Hospitality (12 hotels · select-service)',
    '',
    5,
    1,
    1,
    'active'
  ),
  (
    'homepage',
    'OTA commission audits that used to slip through quarterly reviews now surface daily. The dashboard pays for itself before lunch.',
    'Owner',
    'Owner',
    'Exceptional Hospitality (6 hotels · full-service)',
    '',
    5,
    1,
    2,
    'active'
  ),
  (
    'homepage',
    'Innrly replaced three spreadsheets and a part-time analyst. We close the month in two days instead of two weeks.',
    'VP of Finance',
    'VP of Finance',
    'Q Hotels (14 hotels)',
    '',
    5,
    1,
    3,
    'active'
  ),
  (
    'homepage',
    'The labor dashboard paid for the platform within the first quarter alone. Now every GM checks it before finalizing the schedule.',
    'Director of Operations',
    'Director of Operations',
    'Marquee Hospitality (9 hotels)',
    '',
    5,
    1,
    4,
    'active'
  ),
  (
    'homepage',
    'Onboarding took just one week—not an entire quarter. Their team mapped our PMS, payroll, and accounting systems from start to finish, and we barely had to lift a finger.',
    'Owner',
    'Owner',
    'Shiva Hospitality (4 hotels)',
    '',
    5,
    1,
    5,
    'active'
  ),
  (
    'reconciliation',
    'We went from a fourteen-day close to a four-day close in our first quarter on Innrly. The OTA audit alone paid for the platform — we recovered hundreds of dollars in mis-billed commissions in month one.',
    'Corporate Controller',
    'Corporate Controller',
    'HMS Hospitality (9-property portfolio)',
    '',
    5,
    0,
    1,
    'active'
  ),
  (
    'operations-automation',
    'We lost two night auditors because the workload was overwhelming. After implementing Innrly, the job is genuinely a four-hour shift. People actually want the role now, and our AGM starts each morning with a queue instead of a crisis.',
    'Director of Operations',
    'Director of Operations',
    'AJNM Hospitality (6-property select-service group)',
    '',
    5,
    0,
    1,
    'active'
  ),
  (
    'innrly-shift',
    'I used to spend Sunday nights building the schedule for the week ahead and Friday afternoons fixing payroll. With Innrly Shift, I got both back. Now, the Snapshot is the only labor screen I need to open all day.',
    'Latonya',
    'General Manager',
    'Holiday Inn Express (110 rooms)',
    '',
    5,
    0,
    1,
    'active'
  ),
  (
    'innrly-pay',
    'We eliminated hundreds of dollars in annual accounts payable automation costs by switching to Innrly Pay. The transition was seamless, and the platform integrates effortlessly with our back-office systems. It has streamlined our accounts payable process by eliminating envelopes, stamps, and manual mailing, saving both time and money. Innrly Pay has made our AP workflow more efficient, reliable, and cost-effective.',
    'Corporate Controller',
    'Corporate Controller',
    '9-property select-service group',
    '',
    5,
    0,
    1,
    'active'
  ),
  (
    'financial-control',
    'We used to spend the first week of every month closing the books. Now my controller spends the saved time on actual analysis. Innrly didn\'t just speed up reconciliation—it eliminated it.',
    'Heather',
    'CFO',
    '12-property hotel ownership group',
    '',
    5,
    0,
    1,
    'active'
  ),
  (
    'expense-entries',
    'We used to discover utility auto-debits weeks after they cleared. Now they\'re posted the same day, coded correctly, and reflected in the general ledger immediately. As a result, our month-end close dropped from 12 days to just 4.',
    'Nan',
    'Corporate Controller',
    '5-property portfolio',
    '',
    5,
    0,
    1,
    'active'
  ),
  (
    'document-vault',
    'Document Vault has saved me countless hours by eliminating the need for emails requesting reports and backup documentation. End-of-month reconciliation and sales tax preparation have become seamless with Innrly\'s Document Vault. Everything is stored in one place, organized by the correct date, making it easy to find exactly what I need when I need it.',
    'Cindy',
    'Corporate Controller',
    'Gates and Gates (6-property portfolio)',
    '',
    5,
    0,
    1,
    'active'
  ),
  (
    'case-studies.midwest-portfolio',
    'We stopped hiring our way out of back-office work. Innrly paid for itself in the first quarter and we\'re running 12 hotels with the same corporate headcount we had at eight.',
    'VP of Operations',
    'VP of Operations',
    'K&K West Coast (12 hotels)',
    '',
    5,
    0,
    1,
    'active'
  ),
  (
    'case-studies.urban-full-service',
    'The OTA recovery alone paid for Innrly several times over. But what really got my attention was how much faster we were able to close.',
    'Amita',
    'Corporate Controller',
    'Urban Full-Service Portfolio',
    '',
    5,
    0,
    1,
    'active'
  ),
  (
    'case-studies.hilton-management-company',
    'Growing our management portfolio used to mean adding controllers. With Innrly, adding a property is just adding a tenant to the dashboard.',
    'CFO',
    'CFO',
    'Economos Properties (Hilton Management)',
    '',
    5,
    0,
    1,
    'active'
  ),
  (
    'case-studies.extended-stay-portfolio',
    'Every other labor tool assumes a standard daily turnover. Innrly is the only platform that accurately models weekly-clean MPOR and multi-property housekeeping floating.',
    'VP of Operations',
    'VP of Operations',
    'K&K Hotels (Extended-Stay Portfolio)',
    '',
    5,
    0,
    1,
    'active'
  ),
  (
    'select-service',
    'I used to start every Monday on the phone with my controller. Now I open one tab, see all eight hotels, and I\'m done in five minutes. Innrly didn\'t replace a tool — it replaced a meeting.',
    'Rachael',
    'VP of Operations',
    '8-property midwest portfolio',
    '',
    5,
    0,
    1,
    'active'
  );

-- Select all testimonials to verify
SELECT id, page, name, title, company, is_homepage, rating, status FROM `innrly_leads`.`testimonials`;
