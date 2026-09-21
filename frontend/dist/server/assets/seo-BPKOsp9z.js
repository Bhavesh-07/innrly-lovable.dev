//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/lib/seo.ts
var seo_exports = /* @__PURE__ */ __exportAll({
	breadcrumbLd: () => breadcrumbLd,
	defaultSeoData: () => defaultSeoData,
	fetchSeoData: () => fetchSeoData,
	getMetaTags: () => getMetaTags,
	getSeoForPath: () => getSeoForPath
});
var defaultSeoData = {
	"/404": {
		"title": "404 - Page Not Found | Innrly",
		"description": "The page you are looking for does not exist, has been moved, or is temporarily unavailable.",
		"keywords": "404, not found, hotel management software, innrly",
		"ogTitle": "404 - Page Not Found | Innrly",
		"ogDescription": "The page you are looking for does not exist, has been moved, or is temporarily unavailable.",
		"ogImage": "/uploads/og_1788953918_INNRLYOGImageHomepage.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/404",
		"robots": "noindex, nofollow",
		"inSitemap": false,
		"changefreq": "never",
		"priority": "0.1"
	},
	"/": {
		"title": "Innrly - Hotel Management Software | Back-Office Automation",
		"description": "Streamline hotel operations with Innrly. Automate night audit, financial control, labor, reconciliation and business intelligence across your hotel portfolio.",
		"keywords": "Hotel Management Software, Back-Office Automation, Hotel BI, Labor Management, Hotel Back-Office Automation",
		"ogTitle": "Innrly | Hotel Back-Office Automation Made Simple",
		"ogDescription": "Simplify hotel back-office operations with Innrly. Automate audits, financial controls, labor management, reconciliation and business intelligence.",
		"ogImage": "/uploads/og_1788953918_INNRLYOGImageHomepage.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com",
		"inSitemap": true,
		"changefreq": "weekly",
		"priority": "1.0"
	},
	"/features": {
		"title": "Innrly Features - Automated Night Audit, OTA Assurance & Labor tracking",
		"description": "Explore Innrly hotel management software features for business intelligence, financial control, labor management, night audit, reconciliation and automation.",
		"keywords": "Innrly features, night audit automation, ota reconciliation, Hotel Back-Office Automation, Hotel Financial Control, Hotel Business Intelligence, Hotel Night Audit, Hotel Labor Management, Hotel Management Software Features",
		"ogTitle": "Innrly Hotel Management Software Features",
		"ogDescription": "Discover Innrly features built for hotel owners and operators, including BI, financial control, labor management, night audit, reconciliation and automation.",
		"ogImage": "/uploads/og_1788954510_INNRLYOGImagefeatures.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/features",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.9"
	},
	"/pricing": {
		"title": "Innrly Pricing | Scalable Hotel Management Software",
		"description": "Compare flexible pricing plans for Innrly's hotel back-office software. Find the best solution for single properties or multi-hotel portfolios.",
		"keywords": "Hotel Software Pricing, Innrly Pricing, Hotel Management Software Pricing, Hotel Back-Office Software, Hotel Management System Pricing, Hotel Automation Software",
		"ogTitle": "Innrly Hotel Management Software Pricing & Plans",
		"ogDescription": "Compare Innrly plans for hotel back-office automation, business intelligence, labor management and reconciliation. Start with a 90-day free trial.",
		"ogImage": "/uploads/og_1788954421_INNRLYOGImagePricing.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/pricing",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.9"
	},
	"/contact": {
		"title": "Book an Innrly Demo - Hotel Management Software",
		"description": "Book a live demo of Innrly hotel management software. See how back-office automation, business intelligence and labor management simplify hotel operations.",
		"keywords": "book innrly demo, hotel software demo, contact innrly , PMS-agnostic hotel back-office automation",
		"ogTitle": "Book an Innrly Hotel Management Software Demo",
		"ogDescription": "See Innrly in action with a live 30-minute demo. Explore hotel back-office automation, business intelligence and labor management for your portfolio.",
		"ogImage": "/uploads/og_1789122379_contact.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/contact",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/about": {
		"title": "About Innrly | Operator-Built Hotel Management Software",
		"description": "Learn how Innrly evolved from 19 years of real hotel operations into a powerful back-office platform for hotel owners, operators and management groups.",
		"keywords": "about innrly, hotel operator software, vimal patel, Operator-Built Hotel Management Software, Hotel Back-Office Platform, Hotel Operations Software, Hotel Management Platform, Hotel Software for Operators",
		"ogTitle": "About Innrly | Built by Hotel Operators, for Operators",
		"ogDescription": "Discover the story behind Innrly, built from 19 years of real hotel operations to simplify back-office management for owners and multi-property operators.",
		"ogImage": "/uploads/og_1789122287_about.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/about",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/security": {
		"title": "Hotel Software Security & Data Protection | Innrly",
		"description": "Discover how Innrly protects hotel financial and operational data with enterprise-grade encryption, access controls, audit trails, backups and monitoring.",
		"keywords": "Hotel Software Security, data protection, soc 2 hotel software, Hotel Data Security, Hotel Management Software Security, Hotel Financial Data Security, Hotel Software Compliance, Enterprise Hotel Software Security.",
		"ogTitle": "Innrly | Enterprise-Grade Hotel Data Security",
		"ogDescription": "See how Innrly protects hotel data with encryption, MFA, access controls, audit trails, encrypted backups, continuous monitoring and enterprise security controls.",
		"ogImage": "/uploads/og_1789122415_security.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/security",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/developers": {
		"title": "Hotel Management APIs & Integrations | Developers | Innrly",
		"description": "Build hotel integrations with Innrly APIs and webhooks for invoices, GL, labor, reservations and reconciliation. Connect PMS, accounting, payroll and banking.",
		"keywords": "innrly developer api, hotel software api, webhook integration, Hotel Management APIs, Hotel PMS API, Hotel Accounting API, Hotel REST API, Hotel Webhooks, Hotel Software Integrations, Hotel Developer Platform.",
		"ogTitle": "Innrly Hotel Management APIs & Developer Platform",
		"ogDescription": "Build powerful hotel integrations with Innrly REST APIs, webhooks and partner tools for PMS, accounting, payroll, banking, invoices and reconciliation.",
		"ogImage": "/uploads/og_1789122448_developers.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/developers",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/integrations": {
		"title": "Hotel Integrations — PMS, Accounting, Payroll & More | Innrly",
		"description": "Integrate Innrly with hotel PMS, accounting, payroll, banking and OTA platforms. Streamline data flow, reconciliation and back-office operations.",
		"keywords": "hotel pms integrations, hotel accounting integrations, opera, onq, fosse, m3, Hotel Software Integrations, Hotel PMS Integrations, Hotel Accounting Integrations, Hotel Payroll Integration, Hotel Banking Integration, Hotel API Integrations",
		"ogTitle": "Hotel PMS & Accounting Integrations | Innrly",
		"ogDescription": "Connect your hotel's PMS, accounting, payroll, banking, OTA and guest systems with Innrly. Automate data flow and back-office work without changing your tools.",
		"ogImage": "/uploads/og_1789121573_integrations.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/integrations",
		"inSitemap": true,
		"changefreq": "weekly",
		"priority": "0.9"
	},
	"/onboarding": {
		"title": "Hotel Software Onboarding | Get Started with Innrly",
		"description": "Get your hotel portfolio onboarded to Innrly in minutes. Connect your systems, streamline back-office operations and get live within one business day.",
		"keywords": "innrly onboarding, get started, hotel software setup, Hotel Software Onboarding, Hotel Management Software Onboarding, Hotel Software Setup, Hotel Back-Office Automation, Hotel Operations Software, Hotel Portfolio Management",
		"ogTitle": "Hotel Management Software Onboarding | Innrly",
		"ogDescription": "Onboard your hotel portfolio to Innrly in about 5 minutes and get live within one business day with secure hotel back-office automation.",
		"ogImage": "/uploads/og_1789121600_onboarding.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/onboarding",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/solutions/innrly-pay": {
		"title": "Hotel AP Automation Software | Virtual Cards & ACH | Innrly",
		"description": "Innrly connects to 50+ hotel systems — Opera, Hilton OnQ, Marriott FOSSE, M3, QuickBooks, Sage Intacct, ADP, Medallia, Plaid and more.",
		"keywords": "Hotel AP Automation Software, Hotel Accounts Payable Automation, Hotel AP Software, Invoice Automation, Virtual Card Payments, ACH Payments, Hotel Payment Automation, hotel bill pay, virtual cards for hotels, hotel ap automation, ach payments",
		"ogTitle": "Innrly Pay | Hotel Accounts Payable Automation",
		"ogDescription": "Simplify hotel A/P with automated invoice capture, approvals, Virtual Cards, ACH payments and accounting reconciliation - all in one back-office platform.",
		"ogImage": "/uploads/og_1789121649_innrly-pay.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/solutions/innrly-pay",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/solutions/innrly-shift": {
		"title": "Hotel Labor Management Software | Scheduling & Payroll | Innrly",
		"description": "Simplify hotel labor management with Innrly Shift. Manage scheduling, TimeClock, housekeeping productivity, overtime and payroll from one platform.",
		"keywords": "Hotel Labor Management Software, Hotel Workforce Management, Hotel Employee Scheduling Software, Hotel Time Clock Software, Hotel Payroll Management, Hotel Overtime Management, hotel labor management, face-id timeclock, hotel scheduling, mpor tracking",
		"ogTitle": "Innrly Shift | Hotel Labor Management Made Simple",
		"ogDescription": "Manage hotel labor in one place with Innrly Shift. Track scheduling, TimeClock, housekeeping productivity, overtime risk and payroll from your phone.",
		"ogImage": "/uploads/og_1789121676_innrly-shift.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/solutions/innrly-shift",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/solutions/business-intelligence": {
		"title": "Hotel Business Intelligence Software | Innrly",
		"description": "Manage hotel performance with Innrly Business Intelligence. Track portfolio KPIs, revenue, labor, STR benchmarks and competitor rates in real time.",
		"keywords": "Hotel Business Intelligence Software, Hotel BI Software, Hotel Business Analytics, Hotel Performance Dashboard, Hotel Portfolio Analytics, Hotel Revenue Analytics, STR Benchmarking, hotel business intelligence, hotel bi software, str benchmarking, portfolio reporting",
		"ogTitle": "Innrly | Hotel Business Intelligence Software",
		"ogDescription": "Get real-time visibility across your hotel portfolio with Innrly BI. Monitor revenue, occupancy, labor, STR performance and competitor rates in one place.",
		"ogImage": "/uploads/og_1789121719_business-intelligence.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/solutions/business-intelligence",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/solutions/financial-control": {
		"title": "Hotel Accounting & Reconciliation Software | Innrly",
		"description": "Automate hotel accounting and reconciliation with Innrly. Match PMS, bank and OTA transactions, flag variances and simplify month-end financial close.",
		"keywords": "Hotel Accounting & Reconciliation Software, Hotel Financial Control, Hotel Accounting Software, Hotel Reconciliation Software, Hotel Bank Reconciliation, OTA Reconciliation, Hotel Revenue Protection, hotel accounting reconciliation, financial control, ota audit, bank matching",
		"ogTitle": "Innrly | Hotel Accounting & Financial Control",
		"ogDescription": "Simplify hotel financial control with automated PMS, bank and OTA reconciliation. Surface exceptions, recover lost revenue and close your books faster.",
		"ogImage": "/uploads/og_1789121758_financial-control.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/solutions/financial-control",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/solutions/operations-automation": {
		"title": "Hotel Night Audit & Back - Office Automation Software | Innrly",
		"description": "Automate hotel night audits, OTA and bank reconciliation, invoices and accounting with Innrly. Reduce manual work and manage every property from one platform.",
		"keywords": "Hotel Back-Office Automation Software, Hotel Operations Automation, Hotel Night Audit Software, Hotel Reconciliation Software, Hotel Invoice Automation, Hotel Accounting Automation, Hotel Back-Office Software, hotel night audit automation, back office automation, audit packs, eod automation",
		"ogTitle": "Innrly | Hotel Back-Office Operations Automation",
		"ogDescription": "Automate night audits, OTA and bank reconciliation, invoice processing and accounting across your hotel portfolio with Innrly's unified back-office platform.",
		"ogImage": "/uploads/og_1789121804_operations-automation.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/solutions/operations-automation",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/solutions/reconciliation": {
		"title": "Hotel Reconciliation Software | PMS, Bank & OTA | Innrly",
		"description": "Automate hotel reconciliation across PMS, banks, credit cards and OTAs. Match transactions, flag variances and simplify daily financial close with Innrly.",
		"keywords": "Hotel Reconciliation Software, Hotel PMS Reconciliation, Hotel Bank Reconciliation, OTA Reconciliation, Credit Card Reconciliation, Hotel Financial Reconciliation, Hotel Accounting Automation, hotel reconciliation software, credit card batch matching, ota reconciliation",
		"ogTitle": "Innrly | Hotel Reconciliation Software",
		"ogDescription": "Automate hotel PMS, bank, credit card and OTA reconciliation with Innrly. Match transactions, identify variances and close your books faster every day.",
		"ogImage": "/uploads/og_1789121839_reconciliation.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/solutions/reconciliation",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/solutions/expense-entries": {
		"title": "Expense Entries - Receipts to Your Accounting System | Innrly",
		"description": "Record expense tickets, credit card charges, and auto-paid invoices in Innrly - synced straight to your accounting system (QuickBooks, M3, Sage Intacct, and others).",
		"keywords": "Hotel Expense Management Software, Hotel Expense Automation, Hotel Expense Tracking, Hotel GL Automation, Hotel Accounting Automation, Credit Card Expense Management, Hotel Expense Entries, hotel expense management, receipt capture, gl coding, credit card coding",
		"ogTitle": "Innrly | Hotel Expense Management & GL Automation",
		"ogDescription": "Simplify hotel expense management with automated entries, vendor coding and GL sync. Capture card charges and auto-debits and keep your accounting current.",
		"ogImage": "/uploads/og_1789121868_expense-entries.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/solutions/expense-entries",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/solutions/document-vault": {
		"title": "Hotel Document Management Software | Document Vault | Innrly",
		"description": "Organize hotel documents automatically with Innrly Document Vault. Capture night-audit files, search records, manage retention and simplify audit preparation.",
		"keywords": "Hotel Document Management Software, Hotel Document Management, Hotel Document Storage, Hotel Document Automation, Hotel Audit Document Management, Hotel Records Management, Hotel Document Vault, hotel document vault, night audit storage, tax document vault, audit archive",
		"ogTitle": "Innrly Document Vault | Hotel Document Management",
		"ogDescription": "Automatically organize hotel night-audit packs, invoices and supporting documents by date and property. Search your portfolio and prepare audits faster.",
		"ogImage": "/uploads/og_1789121903_document-vault.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/solutions/document-vault",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/services/accountability-pack": {
		"title": "Hotel Back-Office Services | Accountability Pack | Innrly",
		"description": "Outsource hotel back-office tasks with Innrly's Accountability Pack. Get data verification, franchise reporting, CLC reconciliation and manual entries handled.",
		"keywords": "Hotel Back-Office Services, Hotel Accounting Support, Hotel Back-Office Automation, Hotel Data Verification, Hotel Franchise Reporting, CLC Reconciliation, Hotel Accounting Services, franchise reporting, clc reconciliation",
		"ogTitle": "Innrly Accountability Pack | Hotel Back-Office Support",
		"ogDescription": "Extend your hotel back office with Innrly's team. We handle data verification, franchise reporting, Green Engage, CLC reconciliation and manual entries.",
		"ogImage": "/uploads/og_1789121940_accountability-pack.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/services/accountability-pack",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog": {
		"title": "Hotel Management & Hospitality Insights | Innrly Blog",
		"description": "Explore expert hotel management insights on finance, labor, accounting, analytics and back-office automation for hotel owners and multi-property operators.",
		"keywords": "Hotel Management Insights, Hotel Management Blog, Hospitality Insights, Hotel Accounting, Hotel Finance, Hotel Labor Management, Hotel Back-Office Automation, Hotel Analytics, hotel blog, hospitality finance insights, hotel operations guide",
		"ogTitle": "Innrly Blog | Hotel Management & Hospitality Insights",
		"ogDescription": "Get practical insights on hotel finance, labor, accounting, analytics and back-office automation, written for hotel owners, operators and finance leaders.",
		"ogImage": "/uploads/og_1789121976_blog.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/blog",
		"inSitemap": true,
		"changefreq": "daily",
		"priority": "0.9"
	},
	"/glossary": {
		"title": "Hotel Operations Glossary | Finance & Hospitality Terms | Innrly",
		"description": "Explore the Innrly hotel operations glossary with plain-English definitions for finance, labor, accounting, revenue and hospitality terms used by hotel operators.",
		"keywords": "Hotel Operations Glossary, Hotel Management Glossary, Hospitality Glossary, Hotel Finance Terms, Hotel Accounting Terms, Hotel Operations Terms, Hotel Revenue Terms, hotel glossary, adr, revpar, mpor, usali, hotel accounting terms",
		"ogTitle": "Innrly Hotel Operations Glossary & Hospitality Terms",
		"ogDescription": "Learn essential hotel finance, labor, accounting, revenue and operations terms with Innrly's easy-to-understand glossary for hotel owners and operators.",
		"ogImage": "/uploads/og_1789122004_glossary.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/glossary",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/case-studies": {
		"title": "Hotel Operator Case Studies | Innrly Success Stories",
		"description": "Explore Innrly hotel operator case studies showing how multi-property teams improve back-office efficiency, reconciliation, financial control and hotel operations.",
		"keywords": "Hotel Operator Case Studies, Hotel Management Case Studies, Hotel Software Case Studies, Hotel Back-Office Automation, Hotel Financial Control, Hotel Reconciliation, Hotel Operations, hotel case studies, hotel back office results, operator stories",
		"ogTitle": "Innrly Hotel Operator Case Studies & Success Stories",
		"ogDescription": "See how hotel operators use Innrly to automate back-office work, improve reconciliation, accelerate financial close and protect revenue across portfolios.",
		"ogImage": "/uploads/og_1789122036_case-studies.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/case-studies",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/roi-calculator": {
		"title": "Hotel Back-Office ROI Calculator | Calculate Savings | Innrly",
		"description": "Calculate your hotel back-office ROI with Innrly. Estimate labor savings, revenue recovery and annual returns from automation across your hotel portfolio.",
		"keywords": "Hotel Back-Office ROI Calculator, Hotel ROI Calculator, Hotel Software ROI Calculator, Hotel Automation ROI, Hotel Labor Savings, Hotel Back-Office Savings, Hotel Software ROI, hotel back office savings, labor savings calculator",
		"ogTitle": "Innrly Hotel Back-Office ROI Calculator",
		"ogDescription": "Calculate potential savings from hotel back-office automation. See labor savings, revenue recovery and total annual ROI based on your hotel portfolio.",
		"ogImage": "/uploads/og_1789122075_roi-calculator.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/roi-calculator",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/compare": {
		"title": "Hotel Back-Office Software Comparison | Innrly",
		"description": "Compare hotel back-office software, pricing, features and onboarding. See how Innrly compares with leading hotel technology platforms and alternatives.",
		"keywords": "Hotel Back-Office Software Comparison, Hotel Software Comparison, Hotel Management Software Comparison, Hotel Software Alternatives, Hotel Back-Office Automation, Hotel Accounting Software, Hotel Operations Software, compare hotel software, hotel accounting comparison, otelier vs innrly, m3 vs innrly",
		"ogTitle": "Innrly | Hotel Back-Office Software Comparisons",
		"ogDescription": "Compare Innrly with leading hotel software platforms across features, pricing, integrations, onboarding and fit to find the right solution for your portfolio.",
		"ogImage": "/uploads/og_1789122106_compare.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/compare",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/integrations/m3": {
		"title": "M3 Hotel Accounting Integration | Connect M3 with Innrly",
		"description": "Connect M3 with Innrly to automate hotel accounting, reconciliation and financial workflows. Sync data, reduce manual work and improve back-office control.",
		"keywords": "M3 Hotel Accounting Integration, M3 Integration, Hotel M3 Integration, M3 Accounting Integration, Hotel Accounting Software, Hotel Reconciliation, Hotel Back-Office Automation, innrly m3 integration, m3 accounting sync, hotel gl coding m3",
		"ogTitle": "Innrly M3 Hotel Accounting Integration",
		"ogDescription": "Connect M3 with Innrly for streamlined hotel accounting, reconciliation and back-office automation. Reduce manual work and improve financial visibility.",
		"ogImage": "/uploads/og_1789122138_integrations-m3.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/integrations/m3",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/integrations/quickbooks": {
		"title": "QuickBooks Hotel Accounting Integration | Innrly",
		"description": "Connect QuickBooks with Innrly to automate hotel accounting, expense entries and reconciliation. Sync financial data and reduce manual back-office work.",
		"keywords": "QuickBooks Hotel Accounting Integration, QuickBooks Hotel Integration, QuickBooks Accounting Integration, Hotel Accounting Software, Hotel Expense Automation, Hotel Reconciliation, Hotel Back-Office Automation, innrly quickbooks integration, hotel quickbooks sync, two-way qbo sync",
		"ogTitle": "Innrly QuickBooks Hotel Accounting Integration",
		"ogDescription": "Connect QuickBooks with Innrly to streamline hotel accounting, expense management and reconciliation while reducing manual financial work.",
		"ogImage": "/uploads/og_1789122165_quickbooks.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/integrations/quickbooks",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/industries/select-service": {
		"title": "Hotel Management Software for Select-Service Hotels | Innrly",
		"description": "Streamline select-service hotel operations with Innrly. Automate night audit, accounting, reconciliation, labor and back-office workflows across properties.",
		"keywords": "Hotel Management Software for Select-Service Hotels, Select-Service Hotel Software, Select-Service Hotel Management, Hotel Back-Office Automation, Hotel Accounting Software, Hotel Reconciliation, Hotel Labor Management, hampton inn back office, holiday inn express accounting",
		"ogTitle": "Innrly Hotel Software for Select-Service Hotels",
		"ogDescription": "Simplify select-service hotel operations with Innrly's back-office automation, financial control, labor management, reconciliation and business intelligence.",
		"ogImage": "/uploads/og_1789122198_select-service.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/industries/select-service",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/legal/privacy": {
		"title": "Privacy Policy | Data Protection & Privacy | Innrly",
		"description": "Read Innrly's Privacy Policy to learn how we collect, use, protect and manage personal information and data across our website and services.",
		"keywords": "Innrly Privacy Policy, Privacy Policy, Data Protection, Personal Data, Data Privacy, Innrly Data Privacy, gdpr, ccpa",
		"ogTitle": "Innrly Privacy Policy & Data Protection",
		"ogDescription": "Learn how Innrly collects, uses and protects personal information and how your data is managed when you use our website and services.",
		"ogImage": "/uploads/og_1789122969_legal-privacy.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/legal/privacy",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/legal/terms": {
		"title": "Terms of Service | Terms & Conditions | Innrly",
		"description": "Review Innrly's Terms of Service covering the use of our website, software, services, subscriptions, user responsibilities and applicable conditions.",
		"keywords": "Innrly Terms of Service, Terms of Service, Terms and Conditions, Software Terms, Service Agreement, Innrly Terms, software license, innrly terms",
		"ogTitle": "Innrly Terms of Service & Conditions",
		"ogDescription": "Review the terms and conditions governing your use of Innrly's website, software, services and subscriptions.",
		"ogImage": "/uploads/og_1789123009_legal-terms.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/legal/terms",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/legal/subscription": {
		"title": "Subscription Terms | Plans & Billing | Innrly",
		"description": "Review Innrly's Subscription Terms covering plans, billing, payments, renewals, cancellations, subscription changes and other service conditions.",
		"keywords": "Innrly Subscription Terms, Subscription Terms, SaaS Subscription Terms, Software Billing Terms, Subscription Billing, Innrly Plans, subscription agreement, innrly terms, commercial contract",
		"ogTitle": "Innrly Subscription Terms & Billing",
		"ogDescription": "Learn about Innrly subscription plans, billing, payments, renewals, cancellations and other terms that apply to your subscription.",
		"ogImage": "/uploads/og_1789123047_legal-subscription.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/legal/subscription",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/legal/security": {
		"title": "Security Terms & Policies | Data Security | Innrly",
		"description": "Learn about Innrly's security policies, data protection practices, access controls and safeguards designed to protect customer information and services.",
		"keywords": "Innrly Security Policy, Data Security, SaaS Security, Hotel Data Security, Information Security, Data Protection, Innrly Security, encryption, data isolation, access control",
		"ogTitle": "Innrly Security Policies & Data Protection",
		"ogDescription": "Learn how Innrly approaches data security, access controls and safeguards to help protect customer information and platform services.",
		"ogImage": "/uploads/og_1789123075_legal-security.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/legal/security",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/legal/cookies": {
		"title": "Cookie Policy | Website Cookies & Privacy | Innrly",
		"description": "Learn how Innrly uses cookies and similar technologies, why they are used, how they support our website and how you can manage your preferences.",
		"keywords": "Innrly Cookie Policy, Cookie Policy, Website Cookies, Cookie Preferences, Privacy Cookies, Tracking Technologies, cookie tracking",
		"ogTitle": "Innrly Cookie Policy & Cookie Preferences",
		"ogDescription": "Learn how Innrly uses cookies and similar technologies, including how cookies support website functionality and how you can manage preferences.",
		"ogImage": "/uploads/og_1789123110_legal-cookies.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/legal/cookies",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/legal/accessibility": {
		"title": "Accessibility Statement | Accessible Website | Innrly",
		"description": "Read Innrly's Accessibility Statement and learn about our commitment to making our website, software and digital experiences accessible to all users.",
		"keywords": "Innrly Accessibility Statement, Accessibility Statement, Website Accessibility, Digital Accessibility, Accessible Website, Accessibility Compliance, wcag",
		"ogTitle": "Innrly Accessibility Statement",
		"ogDescription": "Learn about Innrly's commitment to accessibility and our efforts to make our website and digital experiences usable for all users.",
		"ogImage": "/uploads/og_1789122939_legal-accessibility.jpg",
		"ogType": "website",
		"canonical": "https://www.innrly.com/legal/accessibility",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/ota-reconciliation-guide": {
		"title": "OTA Reconciliation: How to Stop Losing Money to Expedia and Booking.com",
		"description": "Most multi-property hotels lose 0.5%-2% of OTA revenue every month to reconciliation variances they never catch. Across a 10-property portfolio doing $25M in OTA revenue, that is $125,000 to $500,000 a year, gone — usually because the dispute wind...",
		"keywords": "",
		"ogTitle": "OTA Reconciliation: How to Stop Losing Money to Expedia and Booking.com",
		"ogDescription": "Most multi-property hotels lose 0.5%-2% of OTA revenue every month to reconciliation variances they never catch. Across a 10-property portfolio doing $25M in OTA revenue, that is $125,000 to $500,000 a year, gone — usually because the dispute wind...",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/ota-reconciliation-guide",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/hotel-night-audit-software-guide": {
		"title": "Hotel Night Audit Software: The 2026 Buyer's Guide",
		"description": "Compare modern night audit automation software for multi-brand hotel portfolios. Eliminate manual spreadsheet entry and push clean journal entries to your accounting GL.",
		"keywords": "",
		"ogTitle": "Hotel Night Audit Software: The 2026 Buyer's Guide",
		"ogDescription": "Compare modern night audit automation software for multi-brand hotel portfolios. Eliminate manual spreadsheet entry and push clean journal entries to your accounting GL.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/hotel-night-audit-software-guide",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/multi-property-hotel-accounting-software": {
		"title": "Multi-Property Hotel Accounting Software: The 2026 Buyer's Guide",
		"description": "Compare M3, Sage Intacct, QuickBooks with Innrly, and legacy hotel accounting suites for multi-property hospitality portfolios.",
		"keywords": "",
		"ogTitle": "Multi-Property Hotel Accounting Software: The 2026 Buyer's Guide",
		"ogDescription": "Compare M3, Sage Intacct, QuickBooks with Innrly, and legacy hotel accounting suites for multi-property hospitality portfolios.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/multi-property-hotel-accounting-software",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/hotel-budgeting-software-2026": {
		"title": "Hotel Budgeting & Forecasting Software for Multi-Property Portfolios (2026)",
		"description": "Why multi-brand hotel operators are moving away from manual Excel models to dynamic, real-time hotel budgeting and forecasting platforms.",
		"keywords": "",
		"ogTitle": "Hotel Budgeting & Forecasting Software for Multi-Property Portfolios (2026)",
		"ogDescription": "Why multi-brand hotel operators are moving away from manual Excel models to dynamic, real-time hotel budgeting and forecasting platforms.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/hotel-budgeting-software-2026",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/select-service-back-office-savings": {
		"title": "Select-Service Hotel Back-Office Savings: How to Cut 40-180 Hours Per Month",
		"description": "Practical strategies for select-service and limited-service hotel management companies to streamline A/P, night audit, and daily reporting.",
		"keywords": "",
		"ogTitle": "Select-Service Hotel Back-Office Savings: How to Cut 40-180 Hours Per Month",
		"ogDescription": "Practical strategies for select-service and limited-service hotel management companies to streamline A/P, night audit, and daily reporting.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/select-service-back-office-savings",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/mpor-explained": {
		"title": "MPOR Explained: The Most Overlooked Hotel KPI — Innrly Blog",
		"description": "Most hotel operators track RevPAR, ADR, occupancy, GOPPAR, and labor cost percentage. Very few track MPOR — Minutes Per Occupied Room — and as a result, most multi-property portfolios overpay for housekeeping by 8%-15%.",
		"keywords": "",
		"ogTitle": "MPOR Explained: The Most Overlooked Hotel KPI — Innrly Blog",
		"ogDescription": "Most hotel operators track RevPAR, ADR, occupancy, GOPPAR, and labor cost percentage. Very few track MPOR — Minutes Per Occupied Room — and as a result, most multi-property portfolios overpay for housekeeping by 8%-15%.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/mpor-explained",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/quickbooks-for-hotels-limits": {
		"title": "QuickBooks for Hotels: When Operators Outgrow It and What to Do",
		"description": "Understand the limits of QuickBooks for multi-entity hotel accounting and how two-way automation bridges the gap before moving to enterprise GLs.",
		"keywords": "",
		"ogTitle": "QuickBooks for Hotels: When Operators Outgrow It and What to Do",
		"ogDescription": "Understand the limits of QuickBooks for multi-entity hotel accounting and how two-way automation bridges the gap before moving to enterprise GLs.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/quickbooks-for-hotels-limits",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/hospitality-accounting-services-vs-software": {
		"title": "Hospitality Accounting Services vs. Automation Software",
		"description": "Should hotel operators outsource their back office to an accounting agency or deploy automation software? A breakdown of costs, control, and turnaround times.",
		"keywords": "",
		"ogTitle": "Hospitality Accounting Services vs. Automation Software",
		"ogDescription": "Should hotel operators outsource their back office to an accounting agency or deploy automation software? A breakdown of costs, control, and turnaround times.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/hospitality-accounting-services-vs-software",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/best-hotel-accounting-software": {
		"title": "Best Hotel Accounting Software (2026 Comparison & Buyer's Guide)",
		"description": "An in-depth review of the best hotel accounting software in 2026, comparing M3, Inn-Flow, Sage Intacct, QuickBooks, Aptech, and Otelier.",
		"keywords": "",
		"ogTitle": "Best Hotel Accounting Software (2026 Comparison & Buyer's Guide)",
		"ogDescription": "An in-depth review of the best hotel accounting software in 2026, comparing M3, Inn-Flow, Sage Intacct, QuickBooks, Aptech, and Otelier.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/best-hotel-accounting-software",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/hotel-back-office-automation": {
		"title": "Hotel Back-Office Automation: The Complete 2026 Guide",
		"description": "If you run more than two hotels, your back office is probably the most expensive cost center nobody talks about. Night auditors keying numbers into spreadsheets. A/P clerks re-typing invoices into M3 or QuickBooks. Revenue managers chasing OTA rec...",
		"keywords": "",
		"ogTitle": "Hotel Back-Office Automation: The Complete 2026 Guide",
		"ogDescription": "If you run more than two hotels, your back office is probably the most expensive cost center nobody talks about. Night auditors keying numbers into spreadsheets. A/P clerks re-typing invoices into M3 or QuickBooks. Revenue managers chasing OTA rec...",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/hotel-back-office-automation",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/night-audit-automation": {
		"title": "Night Audit Automation: Eliminate the 2 AM Excel Marathon",
		"description": "Every night, in every hotel in your portfolio, somebody runs the PMS flash report, opens an Excel template, types in revenue numbers, room counts, ADR, occupancy, and tax buckets, saves the file, and emails it to corporate. Multiply by 30 nights, ...",
		"keywords": "",
		"ogTitle": "Night Audit Automation: Eliminate the 2 AM Excel Marathon",
		"ogDescription": "Every night, in every hotel in your portfolio, somebody runs the PMS flash report, opens an Excel template, types in revenue numbers, room counts, ADR, occupancy, and tax buckets, saves the file, and emails it to corporate. Multiply by 30 nights, ...",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/night-audit-automation",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/multi-property-accounting-software": {
		"title": "Multi-Property Hotel Accounting Software: The 2026 Buyer's Guide",
		"description": "If you are running 5+ hotels, your accounting stack is the most important software decision in the company. Get it wrong and you spend the next three years duct-taping integrations and explaining variances to your lender. Get it right and your clo...",
		"keywords": "",
		"ogTitle": "Multi-Property Hotel Accounting Software: The 2026 Buyer's Guide",
		"ogDescription": "If you are running 5+ hotels, your accounting stack is the most important software decision in the company. Get it wrong and you spend the next three years duct-taping integrations and explaining variances to your lender. Get it right and your clo...",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/multi-property-accounting-software",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/ap-automation-hotels": {
		"title": "A/P Automation for Hotels: Capture, Code, Approve, Pay",
		"description": "For a typical multi-property hotel group, accounts payable is the single highest-volume back-office workflow. A 10-property operator processes 3,000-6,000 invoices a month across utilities, laundry, F&B, OS&E, maintenance, brand fees, OTA commissi...",
		"keywords": "",
		"ogTitle": "A/P Automation for Hotels: Capture, Code, Approve, Pay",
		"ogDescription": "For a typical multi-property hotel group, accounts payable is the single highest-volume back-office workflow. A 10-property operator processes 3,000-6,000 invoices a month across utilities, laundry, F&B, OS&E, maintenance, brand fees, OTA commissi...",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/ap-automation-hotels",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/hotel-labor-cost-percentage": {
		"title": "Hotel Labor Cost Percentage: Benchmarks, Formula, and How to Lower It",
		"description": "Labor is the largest controllable cost in every hotel. For most multi-property operators it is 25%-40% of revenue, and it is the line that swings GOPPAR the most quarter to quarter. This guide gives you the right formula, real benchmarks by segmen...",
		"keywords": "",
		"ogTitle": "Hotel Labor Cost Percentage: Benchmarks, Formula, and How to Lower It",
		"ogDescription": "Labor is the largest controllable cost in every hotel. For most multi-property operators it is 25%-40% of revenue, and it is the line that swings GOPPAR the most quarter to quarter. This guide gives you the right formula, real benchmarks by segmen...",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/hotel-labor-cost-percentage",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/innrly-vs-inn-flow": {
		"title": "Innrly vs Inn-Flow: Honest 2026 Comparison — Innrly Blog",
		"description": "Innrly and Inn-Flow are both back-office automation platforms for multi-property hotel operators. They compete for the same buyer. This is an honest, head-to-head comparison written by Innrly — we'll tell you where Inn-Flow is the better fit and w...",
		"keywords": "",
		"ogTitle": "Innrly vs Inn-Flow: Honest 2026 Comparison — Innrly Blog",
		"ogDescription": "Innrly and Inn-Flow are both back-office automation platforms for multi-property hotel operators. They compete for the same buyer. This is an honest, head-to-head comparison written by Innrly — we'll tell you where Inn-Flow is the better fit and w...",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/innrly-vs-inn-flow",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/pms-vs-back-office-automation": {
		"title": "PMS vs. Back-Office Automation: Why Your Hotel PMS Isn't Enough",
		"description": "Understanding why PMS systems (Opera, Cloudbeds, Mews) are built for front-of-house guest operations, and why multi-property hotel operators need automated back-office GL integrations.",
		"keywords": "",
		"ogTitle": "PMS vs. Back-Office Automation: Why Your Hotel PMS Isn't Enough",
		"ogDescription": "Understanding why PMS systems (Opera, Cloudbeds, Mews) are built for front-of-house guest operations, and why multi-property hotel operators need automated back-office GL integrations.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/pms-vs-back-office-automation",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/hotel-night-audit-checklist": {
		"title": "The 8-Step Hotel Night Audit Checklist (With Automated Workflows)",
		"description": "A complete step-by-step checklist for hotel general managers, night auditors, and controllers to audit and close daily transactions with zero spreadsheet errors.",
		"keywords": "",
		"ogTitle": "The 8-Step Hotel Night Audit Checklist (With Automated Workflows)",
		"ogDescription": "A complete step-by-step checklist for hotel general managers, night auditors, and controllers to audit and close daily transactions with zero spreadsheet errors.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/hotel-night-audit-checklist",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/hotel-ota-commission-reconciliation": {
		"title": "Hotel OTA Commission Reconciliation: Stop Losing 0.5%-2% of Revenue",
		"description": "How multi-property hotel operators automate Expedia and Booking.com OTA commission audits, detect phantom commissions, and recover lost revenue.",
		"keywords": "",
		"ogTitle": "Hotel OTA Commission Reconciliation: Stop Losing 0.5%-2% of Revenue",
		"ogDescription": "How multi-property hotel operators automate Expedia and Booking.com OTA commission audits, detect phantom commissions, and recover lost revenue.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/hotel-ota-commission-reconciliation",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/five-back-office-wins": {
		"title": "5 Back-Office Wins Every Multi-Property Hotel Operator Needs in 2026",
		"description": "Five high-ROI back-office optimizations that immediately reduce overhead and accelerate month-end financial closes for hotel operators.",
		"keywords": "",
		"ogTitle": "5 Back-Office Wins Every Multi-Property Hotel Operator Needs in 2026",
		"ogDescription": "Five high-ROI back-office optimizations that immediately reduce overhead and accelerate month-end financial closes for hotel operators.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/five-back-office-wins",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/labor-cost-blind-spots": {
		"title": "Hotel Labor Cost Blind Spots: Overtime, Scheduling Drift & Time Theft",
		"description": "Identify and eliminate hidden labor cost leaks in your hotel portfolio using biometric Face-ID timekeeping, real-time MPOR tracking, and smart scheduling.",
		"keywords": "",
		"ogTitle": "Hotel Labor Cost Blind Spots: Overtime, Scheduling Drift & Time Theft",
		"ogDescription": "Identify and eliminate hidden labor cost leaks in your hotel portfolio using biometric Face-ID timekeeping, real-time MPOR tracking, and smart scheduling.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/labor-cost-blind-spots",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/ota-commission-audit": {
		"title": "OTA Commission Audit Playbook: How to Reconcile Expedia & Booking.com Statements",
		"description": "A step-by-step playbook for hotel controllers to audit OTA commission invoices against actual PMS folio check-outs and bank deposits.",
		"keywords": "",
		"ogTitle": "OTA Commission Audit Playbook: How to Reconcile Expedia & Booking.com Statements",
		"ogDescription": "A step-by-step playbook for hotel controllers to audit OTA commission invoices against actual PMS folio check-outs and bank deposits.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/ota-commission-audit",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/compare/innrly-vs-otelier": {
		"title": "Innrly: alternative to Otelier: How They Compare (2026) | Innrly",
		"description": "How Innrly and Otelier compare for multi-property hotel operators — commercial terms, deployment, TimeClock with built-in housekeeping productivity matrix, and integrations.",
		"keywords": "",
		"ogTitle": "Innrly: alternative to Otelier: How They Compare (2026) | Innrly",
		"ogDescription": "How Innrly and Otelier compare for multi-property hotel operators — commercial terms, deployment, TimeClock with built-in housekeeping productivity matrix, and integrations.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/compare/innrly-vs-otelier",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/compare/innrly-vs-nimble": {
		"title": "Innrly: alternative to Nimble Property: How They Compare (2026) | Innrly",
		"description": "Side-by-side comparison of Innrly and Nimble Property for multi-property hotel operators — pricing, deployment, TimeClock, housekeeping productivity, and A/P automation.",
		"keywords": "nimble property alternative, innrly vs nimble, hotel accounting software, hotel ap automation",
		"ogTitle": "Innrly: alternative to Nimble Property: How They Compare (2026) | Innrly",
		"ogDescription": "Side-by-side comparison of Innrly and Nimble Property for multi-property hotel operators — pricing, deployment, TimeClock, housekeeping productivity, and A/P automation.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/compare/innrly-vs-nimble",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/compare/innrly-vs-aptech": {
		"title": "Innrly: alternative to Aptech (Profitvue, Execuvue, Targetvue): 2026 Comparison | Innrly",
		"description": "How Innrly and Aptech's Profitvue / Execuvue / Targetvue suite compare for multi-property hotel operators — single platform vs multi-module, pricing, deployment, and USALI reporting.",
		"keywords": "",
		"ogTitle": "Innrly: alternative to Aptech (Profitvue, Execuvue, Targetvue): 2026 Comparison | Innrly",
		"ogDescription": "How Innrly and Aptech's Profitvue / Execuvue / Targetvue suite compare for multi-property hotel operators — single platform vs multi-module, pricing, deployment, and USALI reporting.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/compare/innrly-vs-aptech",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/compare/innrly-vs-profitsage": {
		"title": "Innrly: alternative to ProfitSage: 2026 Comparison | Innrly",
		"description": "How Innrly and ProfitSage compare for multi-property hotel operators — BI dashboards, forecasting, and what each platform covers beyond reporting.",
		"keywords": "",
		"ogTitle": "Innrly: alternative to ProfitSage: 2026 Comparison | Innrly",
		"ogDescription": "How Innrly and ProfitSage compare for multi-property hotel operators — BI dashboards, forecasting, and what each platform covers beyond reporting.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/compare/innrly-vs-profitsage",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/compare/innrly-vs-actabl": {
		"title": "Innrly: alternative to Actabl / Hotel Effectiveness: How They Compare (2026) | Innrly",
		"description": "How Innrly Shift compares to Actabl's labor suite (PerfectLabor, PerfectTime, Hotel Effectiveness) — pricing, Face-ID TimeClock, keep-your-existing-clock, and integrated back office.",
		"keywords": "",
		"ogTitle": "Innrly: alternative to Actabl / Hotel Effectiveness: How They Compare (2026) | Innrly",
		"ogDescription": "How Innrly Shift compares to Actabl's labor suite (PerfectLabor, PerfectTime, Hotel Effectiveness) — pricing, Face-ID TimeClock, keep-your-existing-clock, and integrated back office.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/compare/innrly-vs-actabl",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/integrations/sage-intacct": {
		"title": "Innrly + Sage Intacct Integration | Innrly",
		"description": "Innrly syncs with Sage Intacct as your accounting system of record. Talk to us about your portfolio's setup and mapping.",
		"keywords": "",
		"ogTitle": "Innrly + Sage Intacct Integration | Innrly",
		"ogDescription": "Innrly syncs with Sage Intacct as your accounting system of record. Talk to us about your portfolio's setup and mapping.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/integrations/sage-intacct",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/integrations/inn-flow": {
		"title": "Innrly + Inn-flow — Automate A/P, OTA Recon & Audit Into Inn-flow | Innrly",
		"description": "Innrly is the automation layer for Inn-flow customers — auto-coded invoices, OTA reconciliation, night audit, and labor data pushed into your Inn-flow GL. API integration on the roadmap.",
		"keywords": "",
		"ogTitle": "Innrly + Inn-flow — Automate A/P, OTA Recon & Audit Into Inn-flow | Innrly",
		"ogDescription": "Innrly is the automation layer for Inn-flow customers — auto-coded invoices, OTA reconciliation, night audit, and labor data pushed into your Inn-flow GL. API integration on the roadmap.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/integrations/inn-flow",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/integrations/opera": {
		"title": "Innrly + Oracle Opera Integration | Innrly",
		"description": "Pull Opera night-audit packs, folios, and manager reports into Innrly. Reconcile, audit, and push to your accounting system — across Opera Cloud and Opera PMS.",
		"keywords": "",
		"ogTitle": "Innrly + Oracle Opera Integration | Innrly",
		"ogDescription": "Pull Opera night-audit packs, folios, and manager reports into Innrly. Reconcile, audit, and push to your accounting system — across Opera Cloud and Opera PMS.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/integrations/opera",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/integrations/cloudbeds": {
		"title": "Innrly + Cloudbeds Integration | Innrly",
		"description": "Connect Cloudbeds to Innrly for automated daily reconciliation, A/P, labor, and BI — across every property in your portfolio.",
		"keywords": "",
		"ogTitle": "Innrly + Cloudbeds Integration | Innrly",
		"ogDescription": "Connect Cloudbeds to Innrly for automated daily reconciliation, A/P, labor, and BI — across every property in your portfolio.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/integrations/cloudbeds",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/integrations/mews": {
		"title": "Innrly + Mews Integration | Innrly",
		"description": "Connect Mews to Innrly for automated daily reconciliation, A/P, labor, and BI across your portfolio.",
		"keywords": "",
		"ogTitle": "Innrly + Mews Integration | Innrly",
		"ogDescription": "Connect Mews to Innrly for automated daily reconciliation, A/P, labor, and BI across your portfolio.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/integrations/mews",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/industries/full-service": {
		"title": "Full-Service Hotels — Innrly",
		"description": "Innrly for full-service and resort hotels: F&B GL coding, banquet revenue reconciliation, multi-outlet labor, and USALI-aligned owner reporting — across OPERA, Infor, and Maestro.",
		"keywords": "",
		"ogTitle": "Full-Service Hotels — Innrly",
		"ogDescription": "Innrly for full-service and resort hotels: F&B GL coding, banquet revenue reconciliation, multi-outlet labor, and USALI-aligned owner reporting — across OPERA, Infor, and Maestro.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/industries/full-service",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/industries/extended-stay": {
		"title": "Extended-Stay Hotels — Innrly",
		"description": "Innrly for extended-stay portfolios: long-stay folio handling, weekly housekeeping cycles, low-labor models, and corporate-account reconciliation across Residence Inn, Homewood, WoodSpring, and Candlewood.",
		"keywords": "",
		"ogTitle": "Extended-Stay Hotels — Innrly",
		"ogDescription": "Innrly for extended-stay portfolios: long-stay folio handling, weekly housekeeping cycles, low-labor models, and corporate-account reconciliation across Residence Inn, Homewood, WoodSpring, and Candlewood.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/industries/extended-stay",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/case-studies/midwest-portfolio": {
		"title": "Case Study: Midwest Portfolio Saves Hours & Revenue | Innrly",
		"description": "How a select-service portfolio uses Innrly Pulse to review night-audit packs, catch anomalies, and save 5-15 hours and $200-500 per hotel per week.",
		"keywords": "",
		"ogTitle": "Case Study: Midwest Portfolio Saves Hours & Revenue | Innrly",
		"ogDescription": "How a select-service portfolio uses Innrly Pulse to review night-audit packs, catch anomalies, and save 5-15 hours and $200-500 per hotel per week.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/case-studies/midwest-portfolio",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/case-studies/urban-full-service": {
		"title": "Case Study: Urban Full-Service Recovers OTA Commission Every Quarter | Innrly",
		"description": "How a 4-property urban full-service operator uses Innrly to reconcile OTA commissions, F&B, and banquets — recovering $7K-15K per quarter and closing books in about a week.",
		"keywords": "",
		"ogTitle": "Case Study: Urban Full-Service Recovers OTA Commission Every Quarter | Innrly",
		"ogDescription": "How a 4-property urban full-service operator uses Innrly to reconcile OTA commissions, F&B, and banquets — recovering $7K-15K per quarter and closing books in about a week.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/case-studies/urban-full-service",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/case-studies/hilton-management-company": {
		"title": "Case Study: Hilton Management Company Cuts Month-End from 14 to ~6 Days | Innrly",
		"description": "How a 28-property Hilton-focused management company uses Innrly to consolidate OnQ and OPERA data, automate AP, and shrink month-end close from roughly two weeks to under one.",
		"keywords": "",
		"ogTitle": "Case Study: Hilton Management Company Cuts Month-End from 14 to ~6 Days | Innrly",
		"ogDescription": "How a 28-property Hilton-focused management company uses Innrly to consolidate OnQ and OPERA data, automate AP, and shrink month-end close from roughly two weeks to under one.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/case-studies/hilton-management-company",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/case-studies/extended-stay-portfolio": {
		"title": "Case Study: 18-Hotel Extended-Stay Portfolio Tightens MPOR & Close | Innrly",
		"description": "How an 18-property extended-stay operator (Marriott + Hilton flags) uses Innrly to manage long-folio revenue, model weekly-clean MPOR correctly, and shorten month-end close.",
		"keywords": "",
		"ogTitle": "Case Study: 18-Hotel Extended-Stay Portfolio Tightens MPOR & Close | Innrly",
		"ogDescription": "How an 18-property extended-stay operator (Marriott + Hilton flags) uses Innrly to manage long-folio revenue, model weekly-clean MPOR correctly, and shorten month-end close.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/case-studies/extended-stay-portfolio",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/case-studies/boutique-group": {
		"title": "Case Study: Independent Boutique Group Consolidates 7 PMSes | Innrly",
		"description": "How a 6-property independent boutique group uses Innrly to consolidate 7 different PMSes, run unified P&L reporting, and replace a fractional CFO's manual workbook.",
		"keywords": "",
		"ogTitle": "Case Study: Independent Boutique Group Consolidates 7 PMSes | Innrly",
		"ogDescription": "How a 6-property independent boutique group uses Innrly to consolidate 7 different PMSes, run unified P&L reporting, and replace a fractional CFO's manual workbook.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/case-studies/boutique-group",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/smarter-timeclock-system-innrly": {
		"title": "Why Every Hotel Needs a Smarter TimeClock System - And Why Innrly Has It Built In",
		"description": "Time is money - especially in the hotel business. With rotating shifts, multiple departments, and round-the-clock operations, hospitality is one of the most complex industries when it comes to workforce management.",
		"keywords": "",
		"ogTitle": "Why Every Hotel Needs a Smarter TimeClock System - And Why Innrly Has It Built In",
		"ogDescription": "Time is money - especially in the hotel business. With rotating shifts, multiple departments, and round-the-clock operations, hospitality is one of the most complex industries when it comes to workforce management.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/smarter-timeclock-system-innrly",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/ditching-excel-budgeting-software": {
		"title": "Why Smart Hoteliers Are Ditching Excel for Budgeting Software (And You Should Too!)",
		"description": "For years, Excel has been the backbone of budgeting in the hotel industry. It's familiar, flexible, and seemingly 'good enough.' But the truth is - it's not built for hotels.",
		"keywords": "",
		"ogTitle": "Why Smart Hoteliers Are Ditching Excel for Budgeting Software (And You Should Too!)",
		"ogDescription": "For years, Excel has been the backbone of budgeting in the hotel industry. It's familiar, flexible, and seemingly 'good enough.' But the truth is - it's not built for hotels.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/ditching-excel-budgeting-software",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/backofhouse-robotics-solving-labor-shortages-with-ai-chefs-and-automated-housekeeping": {
		"title": "Back-of-House Robotics: Solving Labor Shortages with AI Chefs and Automated Housekeeping",
		"description": "The U.S. hospitality industry faces a projected 1.2 million job deficit by 2025. Labor shortages have put immense pressure on hotel operations, particularly in back-of-house functions.",
		"keywords": "",
		"ogTitle": "Back-of-House Robotics: Solving Labor Shortages with AI Chefs and Automated Housekeeping",
		"ogDescription": "The U.S. hospitality industry faces a projected 1.2 million job deficit by 2025. Labor shortages have put immense pressure on hotel operations, particularly in back-of-house functions.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/backofhouse-robotics-solving-labor-shortages-with-ai-chefs-and-automated-housekeeping",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/hyperpersonalization-20-leveraging-ai-and-biometric-data-for-bespoke-guest-experiences": {
		"title": "Hyper-Personalization 2.0: Leveraging AI and Biometric Data for Bespoke Guest Experiences",
		"description": "By 2025, AI-driven personalization in the hospitality industry will transcend conventional preferences like room temperature or pillow choices. The next evolution integrates biometric data.",
		"keywords": "",
		"ogTitle": "Hyper-Personalization 2.0: Leveraging AI and Biometric Data for Bespoke Guest Experiences",
		"ogDescription": "By 2025, AI-driven personalization in the hospitality industry will transcend conventional preferences like room temperature or pillow choices. The next evolution integrates biometric data.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/hyperpersonalization-20-leveraging-ai-and-biometric-data-for-bespoke-guest-experiences",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/lean-teams-smart-software-hotel-profits": {
		"title": "Why Lean Teams and Smart Software Are the Secret Sauce to Hotel Profits in the U.S.",
		"description": "The hospitality industry thrives on efficiency, accuracy, and seamless financial operations. However, managing hotel finances can be complex, involving everything from revenue tracking to labor management.",
		"keywords": "",
		"ogTitle": "Why Lean Teams and Smart Software Are the Secret Sauce to Hotel Profits in the U.S.",
		"ogDescription": "The hospitality industry thrives on efficiency, accuracy, and seamless financial operations. However, managing hotel finances can be complex, involving everything from revenue tracking to labor management.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/lean-teams-smart-software-hotel-profits",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/future-hospitality-accounting-software": {
		"title": "The Future of Hospitality Accounting Software — Innrly Blog",
		"description": "The hospitality industry thrives on efficiency, accuracy, and seamless financial operations. However, managing hotel finances can be complex, involving everything from revenue tracking to labor management and compliance.",
		"keywords": "",
		"ogTitle": "The Future of Hospitality Accounting Software — Innrly Blog",
		"ogDescription": "The hospitality industry thrives on efficiency, accuracy, and seamless financial operations. However, managing hotel finances can be complex, involving everything from revenue tracking to labor management and compliance.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/future-hospitality-accounting-software",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/labor-shortages-urban-revitalization": {
		"title": "Navigating Labor Shortages and Urban Revitalization in the U.S. Hospitality Industry",
		"description": "The U.S. hospitality sector is at a pivotal juncture, grappling with persistent labor shortages while witnessing a resurgence in urban markets.",
		"keywords": "",
		"ogTitle": "Navigating Labor Shortages and Urban Revitalization in the U.S. Hospitality Industry",
		"ogDescription": "The U.S. hospitality sector is at a pivotal juncture, grappling with persistent labor shortages while witnessing a resurgence in urban markets.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/labor-shortages-urban-revitalization",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/us-hospitality-2025": {
		"title": "Where is US Hospitality headed in 2025? — Innrly Blog",
		"description": "The U.S. hospitality industry is navigating a dynamic landscape, marked by shifts in demand, economic factors, and evolving guest preferences.",
		"keywords": "",
		"ogTitle": "Where is US Hospitality headed in 2025? — Innrly Blog",
		"ogDescription": "The U.S. hospitality industry is navigating a dynamic landscape, marked by shifts in demand, economic factors, and evolving guest preferences.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/us-hospitality-2025",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/regenerative-tourism-sustainability": {
		"title": "Regenerative Tourism: Moving Beyond Sustainability to Rebuild Local Ecosystems",
		"description": "Sustainability is no longer enough for environmentally conscious travelers. Instead, regenerative tourism-actively restoring the ecosystems impacted by travel-is gaining traction.",
		"keywords": "",
		"ogTitle": "Regenerative Tourism: Moving Beyond Sustainability to Rebuild Local Ecosystems",
		"ogDescription": "Sustainability is no longer enough for environmentally conscious travelers. Instead, regenerative tourism-actively restoring the ecosystems impacted by travel-is gaining traction.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/regenerative-tourism-sustainability",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/blog/hotels-losing-thousands-clc-mistakes": {
		"title": "Hotels Are Losing Thousands to CLC Mistakes-Here's How to Stop It",
		"description": "In the hospitality industry, managing finances with precision is crucial-not just for profitability, but also for maintaining transparency and building trust with business partners.",
		"keywords": "",
		"ogTitle": "Hotels Are Losing Thousands to CLC Mistakes-Here's How to Stop It",
		"ogDescription": "In the hospitality industry, managing finances with precision is crucial-not just for profitability, but also for maintaining transparency and building trust with business partners.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "article",
		"canonical": "https://www.innrly.com/blog/hotels-losing-thousands-clc-mistakes",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/hotel-back-office-automation": {
		"title": "Hotel Back-Office Automation & Night Audit Software | Innrly",
		"description": "Automate your hotel group's night audit, accounts payable capture, OTA reconciliation, and labor tracking. Reclaim 40-180 hours per property each month.",
		"keywords": "",
		"ogTitle": "Hotel Back-Office Automation & Night Audit Software | Innrly",
		"ogDescription": "Automate your hotel group's night audit, accounts payable capture, OTA reconciliation, and labor tracking. Reclaim 40-180 hours per property each month.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/hotel-back-office-automation",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	},
	"/compare/innrly-vs-hotel-effectiveness": {
		"title": "Innrly vs Hotel Effectiveness: Labor & TimeClock Compared (2026) | Innrly",
		"description": "Innrly vs Hotel Effectiveness for hotel labor management — Face-ID TimeClock, scheduling, MPOR, and how an all-in-one back office compares to a dedicated labor platform.",
		"keywords": "hotel effectiveness alternative, innrly vs hotel effectiveness, hotel timeclock, labor management",
		"ogTitle": "Innrly vs Hotel Effectiveness — How They Compare",
		"ogDescription": "Face-ID TimeClock, scheduling, and housekeeping productivity inside a full back-office platform — vs a dedicated labor tool.",
		"ogImage": "https://www.innrly.com/uploads/innrly-logo.png",
		"ogType": "website",
		"canonical": "https://www.innrly.com/compare/innrly-vs-hotel-effectiveness",
		"inSitemap": true,
		"changefreq": "monthly",
		"priority": "0.8"
	}
};
function getSeoForPath(pathname) {
	const normalized = pathname === "" ? "/" : pathname.replace(/\/+$/, "") || "/";
	if (defaultSeoData[normalized]) return defaultSeoData[normalized];
	const matchedKey = Object.keys(defaultSeoData).find((k) => k !== "/" && normalized.startsWith(k));
	if (matchedKey) return defaultSeoData[matchedKey];
	return defaultSeoData["/"];
}
async function fetchSeoData(pathname, origin = "") {
	const normalized = pathname === "" ? "/" : pathname.replace(/\/+$/, "") || "/";
	try {
		const url = `${origin}/api/seo?page_path=${encodeURIComponent(normalized)}`;
		const res = await fetch(url, { headers: { Accept: "application/json" } });
		if (res.ok) {
			const data = await res.json();
			if (data && data.title) return {
				title: data.title,
				description: data.description || "",
				keywords: data.keywords || "",
				ogTitle: data.og_title || data.title,
				ogDescription: data.og_description || data.description || "",
				ogImage: data.og_image || defaultSeoData[normalized]?.ogImage || "https://www.innrly.com/uploads/innrly-logo.png",
				ogType: normalized.startsWith("/blog/") ? "article" : "website",
				canonical: data.canonical_url || `https://www.innrly.com${normalized === "/" ? "" : normalized}`,
				robots: data.robots_meta || "index, follow",
				structuredData: data.structured_data || void 0,
				inSitemap: data.in_sitemap !== void 0 ? Boolean(data.in_sitemap) : true,
				changefreq: data.changefreq || "monthly",
				priority: data.priority || "0.8"
			};
		}
	} catch {}
	return getSeoForPath(normalized);
}
function getMetaTags(dynamicSeo, fallbackSeo, pathname) {
	const def = pathname && defaultSeoData[pathname] ? defaultSeoData[pathname] : void 0;
	const title = dynamicSeo?.title || fallbackSeo?.title || def?.title || "Innrly";
	const description = dynamicSeo?.description || fallbackSeo?.description || def?.description || "";
	const keywords = dynamicSeo?.keywords || fallbackSeo?.keywords || def?.keywords || "";
	const ogTitle = dynamicSeo?.ogTitle || dynamicSeo?.og_title || fallbackSeo?.ogTitle || def?.ogTitle || title;
	const ogDescription = dynamicSeo?.ogDescription || dynamicSeo?.og_description || fallbackSeo?.ogDescription || def?.ogDescription || description;
	const ogImage = dynamicSeo?.ogImage || dynamicSeo?.og_image || fallbackSeo?.ogImage || def?.ogImage || "https://www.innrly.com/uploads/innrly-logo.png";
	const ogType = dynamicSeo?.ogType || fallbackSeo?.ogType || def?.ogType || (pathname && pathname.startsWith("/blog/") ? "article" : "website");
	const canonical = dynamicSeo?.canonical || dynamicSeo?.canonical_url || fallbackSeo?.canonical || def?.canonical || (pathname ? `https://www.innrly.com${pathname === "/" ? "" : pathname}` : void 0);
	const robots = dynamicSeo?.robots || dynamicSeo?.robots_meta || fallbackSeo?.robots || def?.robots || "index, follow";
	const tags = [{ title }, {
		name: "description",
		content: description
	}];
	if (keywords) tags.push({
		name: "keywords",
		content: keywords
	});
	if (robots) tags.push({
		name: "robots",
		content: robots
	});
	if (ogTitle) tags.push({
		property: "og:title",
		content: ogTitle
	});
	if (ogDescription) tags.push({
		property: "og:description",
		content: ogDescription
	});
	if (ogImage) tags.push({
		property: "og:image",
		content: ogImage
	});
	if (ogType) tags.push({
		property: "og:type",
		content: ogType
	});
	if (canonical) tags.push({
		property: "og:url",
		content: canonical
	});
	tags.push({
		property: "og:site_name",
		content: "Innrly"
	});
	tags.push({
		name: "twitter:card",
		content: "summary_large_image"
	});
	if (ogTitle) tags.push({
		name: "twitter:title",
		content: ogTitle
	});
	if (ogDescription) tags.push({
		name: "twitter:description",
		content: ogDescription
	});
	if (ogImage) tags.push({
		name: "twitter:image",
		content: ogImage
	});
	return tags;
}
function breadcrumbLd(items) {
	return {
		type: "application/ld+json",
		children: JSON.stringify({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: items.map((item, idx) => ({
				"@type": "ListItem",
				position: idx + 1,
				name: item.name,
				item: item.url.startsWith("http") ? item.url : `https://www.innrly.com${item.url === "/" ? "" : item.url}`
			}))
		})
	};
}
//#endregion
export { seo_exports as a, getMetaTags as i, defaultSeoData as n, fetchSeoData as r, breadcrumbLd as t };
