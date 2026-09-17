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
	getMetaTags: () => getMetaTags
});
var defaultSeoData = {
	"/": {
		page_path: "/",
		title: "Innrly - Hotel Management Software | Back-Office Automation",
		description: "Streamline hotel operations with Innrly. Automate night audit, financial control, labor, reconciliation and business intelligence across your hotel portfolio.",
		keywords: "Hotel Management Software, Back-Office Automation, Hotel BI, Labor Management, Hotel Back-Office Automation",
		og_title: "Innrly | Hotel Back-Office Automation Made Simple",
		og_description: "Simplify hotel back-office operations with Innrly. Automate audits, financial controls, labor management, reconciliation and business intelligence.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/about": {
		page_path: "/about",
		title: "About Innrly | Operator-Built Hotel Management Software",
		description: "Learn how Innrly evolved from 19 years of real hotel operations into a powerful back-office platform for hotel owners, operators and management groups.",
		keywords: "about innrly, hotel operator software, vimal patel, Operator-Built Hotel Management Software, Hotel Back-Office Platform, Hotel Operations Software, Hotel Management Platform, Hotel Software for Operators",
		og_title: "About Innrly | Built by Hotel Operators, for Operators",
		og_description: "Discover the story behind Innrly, built from 19 years of real hotel operations to simplify back-office management for owners and multi-property operators.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog": {
		page_path: "/blog",
		title: "Hotel Management & Hospitality Insights | Innrly Blog",
		description: "Explore expert hotel management insights on finance, labor, accounting, analytics and back-office automation for hotel owners and multi-property operators.",
		keywords: "Hotel Management Insights, Hotel Management Blog, Hospitality Insights, Hotel Accounting, Hotel Finance, Hotel Labor Management, Hotel Back-Office Automation, Hotel Analytics, hotel blog, hospitality finance insights, hotel operations guide",
		og_title: "Innrly Blog | Hotel Management & Hospitality Insights",
		og_description: "Get practical insights on hotel finance, labor, accounting, analytics and back-office automation, written for hotel owners, operators and finance leaders.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/ap-automation-hotels": {
		page_path: "/blog/ap-automation-hotels",
		title: "A/P Automation for Hotels: Capture, Code, Approve, Pay",
		description: "For a typical multi-property hotel group, accounts payable is the single highest-volume back-office workflow. A 10-property operator processes 3,000-6,000 invoices a month across utilities, laundry, F&B, OS&E, maintenance, brand fees, OTA commissi...",
		og_title: "A/P Automation for Hotels: Capture, Code, Approve, Pay",
		og_description: "For a typical multi-property hotel group, accounts payable is the single highest-volume back-office workflow. A 10-property operator processes 3,000-6,000 invoices a month across utilities, laundry, F&B, OS&E, maintenance, brand fees, OTA commissi...",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/backofhouse-robotics-solving-labor-shortages-with-ai-chefs-and-automated-housekeeping": {
		page_path: "/blog/backofhouse-robotics-solving-labor-shortages-with-ai-chefs-and-automated-housekeeping",
		title: "Back-of-House Robotics: Solving Labor Shortages with AI Chefs and Automated Housekeeping",
		description: "The U.S. hospitality industry faces a projected 1.2 million job deficit by 2025. Labor shortages have put immense pressure on hotel operations, particularly in back-of-house functions.",
		og_title: "Back-of-House Robotics: Solving Labor Shortages with AI Chefs and Automated Housekeeping",
		og_description: "The U.S. hospitality industry faces a projected 1.2 million job deficit by 2025. Labor shortages have put immense pressure on hotel operations, particularly in back-of-house functions.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/best-hotel-accounting-software": {
		page_path: "/blog/best-hotel-accounting-software",
		title: "Best Hotel Accounting Software (2026 Comparison & Buyer's Guide)",
		description: "An in-depth review of the best hotel accounting software in 2026, comparing M3, Inn-Flow, Sage Intacct, QuickBooks, Aptech, and Otelier.",
		og_title: "Best Hotel Accounting Software (2026 Comparison & Buyer's Guide)",
		og_description: "An in-depth review of the best hotel accounting software in 2026, comparing M3, Inn-Flow, Sage Intacct, QuickBooks, Aptech, and Otelier.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/ditching-excel-budgeting-software": {
		page_path: "/blog/ditching-excel-budgeting-software",
		title: "Why Smart Hoteliers Are Ditching Excel for Budgeting Software (And You Should Too!)",
		description: "For years, Excel has been the backbone of budgeting in the hotel industry. It's familiar, flexible, and seemingly 'good enough.' But the truth is - it's not built for hotels.",
		og_title: "Why Smart Hoteliers Are Ditching Excel for Budgeting Software (And You Should Too!)",
		og_description: "For years, Excel has been the backbone of budgeting in the hotel industry. It's familiar, flexible, and seemingly 'good enough.' But the truth is - it's not built for hotels.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/five-back-office-wins": {
		page_path: "/blog/five-back-office-wins",
		title: "5 Back-Office Wins Every Multi-Property Hotel Operator Needs in 2026",
		description: "Five high-ROI back-office optimizations that immediately reduce overhead and accelerate month-end financial closes for hotel operators.",
		og_title: "5 Back-Office Wins Every Multi-Property Hotel Operator Needs in 2026",
		og_description: "Five high-ROI back-office optimizations that immediately reduce overhead and accelerate month-end financial closes for hotel operators.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/future-hospitality-accounting-software": {
		page_path: "/blog/future-hospitality-accounting-software",
		title: "The Future of Hospitality Accounting Software — Innrly Blog",
		description: "The hospitality industry thrives on efficiency, accuracy, and seamless financial operations. However, managing hotel finances can be complex, involving everything from revenue tracking to labor management and compliance.",
		og_title: "The Future of Hospitality Accounting Software — Innrly Blog",
		og_description: "The hospitality industry thrives on efficiency, accuracy, and seamless financial operations. However, managing hotel finances can be complex, involving everything from revenue tracking to labor management and compliance.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/hospitality-accounting-services-vs-software": {
		page_path: "/blog/hospitality-accounting-services-vs-software",
		title: "Hospitality Accounting Services vs. Automation Software",
		description: "Should hotel operators outsource their back office to an accounting agency or deploy automation software? A breakdown of costs, control, and turnaround times.",
		og_title: "Hospitality Accounting Services vs. Automation Software",
		og_description: "Should hotel operators outsource their back office to an accounting agency or deploy automation software? A breakdown of costs, control, and turnaround times.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/hotel-back-office-automation": {
		page_path: "/blog/hotel-back-office-automation",
		title: "Hotel Back-Office Automation: The Complete 2026 Guide",
		description: "If you run more than two hotels, your back office is probably the most expensive cost center nobody talks about. Night auditors keying numbers into spreadsheets. A/P clerks re-typing invoices into M3 or QuickBooks. Revenue managers chasing OTA rec...",
		og_title: "Hotel Back-Office Automation: The Complete 2026 Guide",
		og_description: "If you run more than two hotels, your back office is probably the most expensive cost center nobody talks about. Night auditors keying numbers into spreadsheets. A/P clerks re-typing invoices into M3 or QuickBooks. Revenue managers chasing OTA rec...",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/hotel-budgeting-software-2026": {
		page_path: "/blog/hotel-budgeting-software-2026",
		title: "Hotel Budgeting & Forecasting Software for Multi-Property Portfolios (2026)",
		description: "Why multi-brand hotel operators are moving away from manual Excel models to dynamic, real-time hotel budgeting and forecasting platforms.",
		og_title: "Hotel Budgeting & Forecasting Software for Multi-Property Portfolios (2026)",
		og_description: "Why multi-brand hotel operators are moving away from manual Excel models to dynamic, real-time hotel budgeting and forecasting platforms.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/hotel-labor-cost-percentage": {
		page_path: "/blog/hotel-labor-cost-percentage",
		title: "Hotel Labor Cost Percentage: Benchmarks, Formula, and How to Lower It",
		description: "Labor is the largest controllable cost in every hotel. For most multi-property operators it is 25%-40% of revenue, and it is the line that swings GOPPAR the most quarter to quarter. This guide gives you the right formula, real benchmarks by segmen...",
		og_title: "Hotel Labor Cost Percentage: Benchmarks, Formula, and How to Lower It",
		og_description: "Labor is the largest controllable cost in every hotel. For most multi-property operators it is 25%-40% of revenue, and it is the line that swings GOPPAR the most quarter to quarter. This guide gives you the right formula, real benchmarks by segmen...",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/hotel-night-audit-checklist": {
		page_path: "/blog/hotel-night-audit-checklist",
		title: "The 8-Step Hotel Night Audit Checklist (With Automated Workflows)",
		description: "A complete step-by-step checklist for hotel general managers, night auditors, and controllers to audit and close daily transactions with zero spreadsheet errors.",
		og_title: "The 8-Step Hotel Night Audit Checklist (With Automated Workflows)",
		og_description: "A complete step-by-step checklist for hotel general managers, night auditors, and controllers to audit and close daily transactions with zero spreadsheet errors.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/hotel-night-audit-software-guide": {
		page_path: "/blog/hotel-night-audit-software-guide",
		title: "Hotel Night Audit Software: The 2026 Buyer's Guide",
		description: "Compare modern night audit automation software for multi-brand hotel portfolios. Eliminate manual spreadsheet entry and push clean journal entries to your accounting GL.",
		og_title: "Hotel Night Audit Software: The 2026 Buyer's Guide",
		og_description: "Compare modern night audit automation software for multi-brand hotel portfolios. Eliminate manual spreadsheet entry and push clean journal entries to your accounting GL.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/hotel-ota-commission-reconciliation": {
		page_path: "/blog/hotel-ota-commission-reconciliation",
		title: "Hotel OTA Commission Reconciliation: Stop Losing 0.5%-2% of Revenue",
		description: "How multi-property hotel operators automate Expedia and Booking.com OTA commission audits, detect phantom commissions, and recover lost revenue.",
		og_title: "Hotel OTA Commission Reconciliation: Stop Losing 0.5%-2% of Revenue",
		og_description: "How multi-property hotel operators automate Expedia and Booking.com OTA commission audits, detect phantom commissions, and recover lost revenue.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/hotels-losing-thousands-clc-mistakes": {
		page_path: "/blog/hotels-losing-thousands-clc-mistakes",
		title: "Hotels Are Losing Thousands to CLC Mistakes-Here's How to Stop It",
		description: "In the hospitality industry, managing finances with precision is crucial-not just for profitability, but also for maintaining transparency and building trust with business partners.",
		og_title: "Hotels Are Losing Thousands to CLC Mistakes-Here's How to Stop It",
		og_description: "In the hospitality industry, managing finances with precision is crucial-not just for profitability, but also for maintaining transparency and building trust with business partners.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/hyperpersonalization-20-leveraging-ai-and-biometric-data-for-bespoke-guest-experiences": {
		page_path: "/blog/hyperpersonalization-20-leveraging-ai-and-biometric-data-for-bespoke-guest-experiences",
		title: "Hyper-Personalization 2.0: Leveraging AI and Biometric Data for Bespoke Guest Experiences",
		description: "By 2025, AI-driven personalization in the hospitality industry will transcend conventional preferences like room temperature or pillow choices. The next evolution integrates biometric data.",
		og_title: "Hyper-Personalization 2.0: Leveraging AI and Biometric Data for Bespoke Guest Experiences",
		og_description: "By 2025, AI-driven personalization in the hospitality industry will transcend conventional preferences like room temperature or pillow choices. The next evolution integrates biometric data.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/innrly-vs-inn-flow": {
		page_path: "/blog/innrly-vs-inn-flow",
		title: "Innrly vs Inn-Flow: Honest 2026 Comparison — Innrly Blog",
		description: "Innrly and Inn-Flow are both back-office automation platforms for multi-property hotel operators. They compete for the same buyer. This is an honest, head-to-head comparison written by Innrly — we'll tell you where Inn-Flow is the better fit and w...",
		og_title: "Innrly vs Inn-Flow: Honest 2026 Comparison — Innrly Blog",
		og_description: "Innrly and Inn-Flow are both back-office automation platforms for multi-property hotel operators. They compete for the same buyer. This is an honest, head-to-head comparison written by Innrly — we'll tell you where Inn-Flow is the better fit and w...",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/labor-cost-blind-spots": {
		page_path: "/blog/labor-cost-blind-spots",
		title: "Hotel Labor Cost Blind Spots: Overtime, Scheduling Drift & Time Theft",
		description: "Identify and eliminate hidden labor cost leaks in your hotel portfolio using biometric Face-ID timekeeping, real-time MPOR tracking, and smart scheduling.",
		og_title: "Hotel Labor Cost Blind Spots: Overtime, Scheduling Drift & Time Theft",
		og_description: "Identify and eliminate hidden labor cost leaks in your hotel portfolio using biometric Face-ID timekeeping, real-time MPOR tracking, and smart scheduling.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/labor-shortages-urban-revitalization": {
		page_path: "/blog/labor-shortages-urban-revitalization",
		title: "Navigating Labor Shortages and Urban Revitalization in the U.S. Hospitality Industry",
		description: "The U.S. hospitality sector is at a pivotal juncture, grappling with persistent labor shortages while witnessing a resurgence in urban markets.",
		og_title: "Navigating Labor Shortages and Urban Revitalization in the U.S. Hospitality Industry",
		og_description: "The U.S. hospitality sector is at a pivotal juncture, grappling with persistent labor shortages while witnessing a resurgence in urban markets.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/lean-teams-smart-software-hotel-profits": {
		page_path: "/blog/lean-teams-smart-software-hotel-profits",
		title: "Why Lean Teams and Smart Software Are the Secret Sauce to Hotel Profits in the U.S.",
		description: "The hospitality industry thrives on efficiency, accuracy, and seamless financial operations. However, managing hotel finances can be complex, involving everything from revenue tracking to labor management.",
		og_title: "Why Lean Teams and Smart Software Are the Secret Sauce to Hotel Profits in the U.S.",
		og_description: "The hospitality industry thrives on efficiency, accuracy, and seamless financial operations. However, managing hotel finances can be complex, involving everything from revenue tracking to labor management.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/mpor-explained": {
		page_path: "/blog/mpor-explained",
		title: "MPOR Explained: The Most Overlooked Hotel KPI — Innrly Blog",
		description: "Most hotel operators track RevPAR, ADR, occupancy, GOPPAR, and labor cost percentage. Very few track MPOR — Minutes Per Occupied Room — and as a result, most multi-property portfolios overpay for housekeeping by 8%-15%.",
		og_title: "MPOR Explained: The Most Overlooked Hotel KPI — Innrly Blog",
		og_description: "Most hotel operators track RevPAR, ADR, occupancy, GOPPAR, and labor cost percentage. Very few track MPOR — Minutes Per Occupied Room — and as a result, most multi-property portfolios overpay for housekeeping by 8%-15%.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/multi-property-accounting-software": {
		page_path: "/blog/multi-property-accounting-software",
		title: "Multi-Property Hotel Accounting Software: The 2026 Buyer's Guide",
		description: "If you are running 5+ hotels, your accounting stack is the most important software decision in the company. Get it wrong and you spend the next three years duct-taping integrations and explaining variances to your lender. Get it right and your clo...",
		og_title: "Multi-Property Hotel Accounting Software: The 2026 Buyer's Guide",
		og_description: "If you are running 5+ hotels, your accounting stack is the most important software decision in the company. Get it wrong and you spend the next three years duct-taping integrations and explaining variances to your lender. Get it right and your clo...",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/multi-property-hotel-accounting-software": {
		page_path: "/blog/multi-property-hotel-accounting-software",
		title: "Multi-Property Hotel Accounting Software: The 2026 Buyer's Guide",
		description: "Compare M3, Sage Intacct, QuickBooks with Innrly, and legacy hotel accounting suites for multi-property hospitality portfolios.",
		og_title: "Multi-Property Hotel Accounting Software: The 2026 Buyer's Guide",
		og_description: "Compare M3, Sage Intacct, QuickBooks with Innrly, and legacy hotel accounting suites for multi-property hospitality portfolios.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/night-audit-automation": {
		page_path: "/blog/night-audit-automation",
		title: "Night Audit Automation: Eliminate the 2 AM Excel Marathon",
		description: "Every night, in every hotel in your portfolio, somebody runs the PMS flash report, opens an Excel template, types in revenue numbers, room counts, ADR, occupancy, and tax buckets, saves the file, and emails it to corporate. Multiply by 30 nights, ...",
		og_title: "Night Audit Automation: Eliminate the 2 AM Excel Marathon",
		og_description: "Every night, in every hotel in your portfolio, somebody runs the PMS flash report, opens an Excel template, types in revenue numbers, room counts, ADR, occupancy, and tax buckets, saves the file, and emails it to corporate. Multiply by 30 nights, ...",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/ota-commission-audit": {
		page_path: "/blog/ota-commission-audit",
		title: "OTA Commission Audit Playbook: How to Reconcile Expedia & Booking.com Statements",
		description: "A step-by-step playbook for hotel controllers to audit OTA commission invoices against actual PMS folio check-outs and bank deposits.",
		og_title: "OTA Commission Audit Playbook: How to Reconcile Expedia & Booking.com Statements",
		og_description: "A step-by-step playbook for hotel controllers to audit OTA commission invoices against actual PMS folio check-outs and bank deposits.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/ota-reconciliation-guide": {
		page_path: "/blog/ota-reconciliation-guide",
		title: "OTA Reconciliation: How to Stop Losing Money to Expedia and Booking.com",
		description: "Most multi-property hotels lose 0.5%-2% of OTA revenue every month to reconciliation variances they never catch. Across a 10-property portfolio doing $25M in OTA revenue, that is $125,000 to $500,000 a year, gone — usually because the dispute wind...",
		og_title: "OTA Reconciliation: How to Stop Losing Money to Expedia and Booking.com",
		og_description: "Most multi-property hotels lose 0.5%-2% of OTA revenue every month to reconciliation variances they never catch. Across a 10-property portfolio doing $25M in OTA revenue, that is $125,000 to $500,000 a year, gone — usually because the dispute wind...",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/pms-vs-back-office-automation": {
		page_path: "/blog/pms-vs-back-office-automation",
		title: "PMS vs. Back-Office Automation: Why Your Hotel PMS Isn't Enough",
		description: "Understanding why PMS systems (Opera, Cloudbeds, Mews) are built for front-of-house guest operations, and why multi-property hotel operators need automated back-office GL integrations.",
		og_title: "PMS vs. Back-Office Automation: Why Your Hotel PMS Isn't Enough",
		og_description: "Understanding why PMS systems (Opera, Cloudbeds, Mews) are built for front-of-house guest operations, and why multi-property hotel operators need automated back-office GL integrations.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/quickbooks-for-hotels-limits": {
		page_path: "/blog/quickbooks-for-hotels-limits",
		title: "QuickBooks for Hotels: When Operators Outgrow It and What to Do",
		description: "Understand the limits of QuickBooks for multi-entity hotel accounting and how two-way automation bridges the gap before moving to enterprise GLs.",
		og_title: "QuickBooks for Hotels: When Operators Outgrow It and What to Do",
		og_description: "Understand the limits of QuickBooks for multi-entity hotel accounting and how two-way automation bridges the gap before moving to enterprise GLs.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/regenerative-tourism-sustainability": {
		page_path: "/blog/regenerative-tourism-sustainability",
		title: "Regenerative Tourism: Moving Beyond Sustainability to Rebuild Local Ecosystems",
		description: "Sustainability is no longer enough for environmentally conscious travelers. Instead, regenerative tourism-actively restoring the ecosystems impacted by travel-is gaining traction.",
		og_title: "Regenerative Tourism: Moving Beyond Sustainability to Rebuild Local Ecosystems",
		og_description: "Sustainability is no longer enough for environmentally conscious travelers. Instead, regenerative tourism-actively restoring the ecosystems impacted by travel-is gaining traction.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/select-service-back-office-savings": {
		page_path: "/blog/select-service-back-office-savings",
		title: "Select-Service Hotel Back-Office Savings: How to Cut 40-180 Hours Per Month",
		description: "Practical strategies for select-service and limited-service hotel management companies to streamline A/P, night audit, and daily reporting.",
		og_title: "Select-Service Hotel Back-Office Savings: How to Cut 40-180 Hours Per Month",
		og_description: "Practical strategies for select-service and limited-service hotel management companies to streamline A/P, night audit, and daily reporting.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/smarter-timeclock-system-innrly": {
		page_path: "/blog/smarter-timeclock-system-innrly",
		title: "Why Every Hotel Needs a Smarter TimeClock System - And Why Innrly Has It Built In",
		description: "Time is money - especially in the hotel business. With rotating shifts, multiple departments, and round-the-clock operations, hospitality is one of the most complex industries when it comes to workforce management.",
		og_title: "Why Every Hotel Needs a Smarter TimeClock System - And Why Innrly Has It Built In",
		og_description: "Time is money - especially in the hotel business. With rotating shifts, multiple departments, and round-the-clock operations, hospitality is one of the most complex industries when it comes to workforce management.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog/us-hospitality-2025": {
		page_path: "/blog/us-hospitality-2025",
		title: "Where is US Hospitality headed in 2025? — Innrly Blog",
		description: "The U.S. hospitality industry is navigating a dynamic landscape, marked by shifts in demand, economic factors, and evolving guest preferences.",
		og_title: "Where is US Hospitality headed in 2025? — Innrly Blog",
		og_description: "The U.S. hospitality industry is navigating a dynamic landscape, marked by shifts in demand, economic factors, and evolving guest preferences.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/case-studies": {
		page_path: "/case-studies",
		title: "Hotel Operator Case Studies | Innrly Success Stories",
		description: "Explore Innrly hotel operator case studies showing how multi-property teams improve back-office efficiency, reconciliation, financial control and hotel operations.",
		keywords: "Hotel Operator Case Studies, Hotel Management Case Studies, Hotel Software Case Studies, Hotel Back-Office Automation, Hotel Financial Control, Hotel Reconciliation, Hotel Operations, hotel case studies, hotel back office results, operator stories",
		og_title: "Innrly Hotel Operator Case Studies & Success Stories",
		og_description: "See how hotel operators use Innrly to automate back-office work, improve reconciliation, accelerate financial close and protect revenue across portfolios.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/case-studies/boutique-group": {
		page_path: "/case-studies/boutique-group",
		title: "Case Study: Independent Boutique Group Consolidates 7 PMSes | Innrly",
		description: "How a 6-property independent boutique group uses Innrly to consolidate 7 different PMSes, run unified P&L reporting, and replace a fractional CFO's manual workbook.",
		og_title: "Case Study: Independent Boutique Group Consolidates 7 PMSes | Innrly",
		og_description: "How a 6-property independent boutique group uses Innrly to consolidate 7 different PMSes, run unified P&L reporting, and replace a fractional CFO's manual workbook.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/case-studies/extended-stay-portfolio": {
		page_path: "/case-studies/extended-stay-portfolio",
		title: "Case Study: 18-Hotel Extended-Stay Portfolio Tightens MPOR & Close | Innrly",
		description: "How an 18-property extended-stay operator (Marriott + Hilton flags) uses Innrly to manage long-folio revenue, model weekly-clean MPOR correctly, and shorten month-end close.",
		og_title: "Case Study: 18-Hotel Extended-Stay Portfolio Tightens MPOR & Close | Innrly",
		og_description: "How an 18-property extended-stay operator (Marriott + Hilton flags) uses Innrly to manage long-folio revenue, model weekly-clean MPOR correctly, and shorten month-end close.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/case-studies/hilton-management-company": {
		page_path: "/case-studies/hilton-management-company",
		title: "Case Study: Hilton Management Company Cuts Month-End from 14 to ~6 Days | Innrly",
		description: "How a 28-property Hilton-focused management company uses Innrly to consolidate OnQ and OPERA data, automate AP, and shrink month-end close from roughly two weeks to under one.",
		og_title: "Case Study: Hilton Management Company Cuts Month-End from 14 to ~6 Days | Innrly",
		og_description: "How a 28-property Hilton-focused management company uses Innrly to consolidate OnQ and OPERA data, automate AP, and shrink month-end close from roughly two weeks to under one.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/case-studies/midwest-portfolio": {
		page_path: "/case-studies/midwest-portfolio",
		title: "Case Study: Midwest Portfolio Saves Hours & Revenue | Innrly",
		description: "How a select-service portfolio uses Innrly Pulse to review night-audit packs, catch anomalies, and save 5-15 hours and $200-500 per hotel per week.",
		og_title: "Case Study: Midwest Portfolio Saves Hours & Revenue | Innrly",
		og_description: "How a select-service portfolio uses Innrly Pulse to review night-audit packs, catch anomalies, and save 5-15 hours and $200-500 per hotel per week.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/case-studies/urban-full-service": {
		page_path: "/case-studies/urban-full-service",
		title: "Case Study: Urban Full-Service Recovers OTA Commission Every Quarter | Innrly",
		description: "How a 4-property urban full-service operator uses Innrly to reconcile OTA commissions, F&B, and banquets — recovering $7K-15K per quarter and closing books in about a week.",
		og_title: "Case Study: Urban Full-Service Recovers OTA Commission Every Quarter | Innrly",
		og_description: "How a 4-property urban full-service operator uses Innrly to reconcile OTA commissions, F&B, and banquets — recovering $7K-15K per quarter and closing books in about a week.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare": {
		page_path: "/compare",
		title: "Hotel Back-Office Software Comparison | Innrly",
		description: "Compare hotel back-office software, pricing, features and onboarding. See how Innrly compares with leading hotel technology platforms and alternatives.",
		keywords: "Hotel Back-Office Software Comparison, Hotel Software Comparison, Hotel Management Software Comparison, Hotel Software Alternatives, Hotel Back-Office Automation, Hotel Accounting Software, Hotel Operations Software, compare hotel software, hotel accounting comparison, otelier vs innrly, m3 vs innrly",
		og_title: "Innrly | Hotel Back-Office Software Comparisons",
		og_description: "Compare Innrly with leading hotel software platforms across features, pricing, integrations, onboarding and fit to find the right solution for your portfolio.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare/innrly-vs-actabl": {
		page_path: "/compare/innrly-vs-actabl",
		title: "Innrly: alternative to Actabl / Hotel Effectiveness: How They Compare (2026) | Innrly",
		description: "How Innrly Shift compares to Actabl's labor suite (PerfectLabor, PerfectTime, Hotel Effectiveness) — pricing, Face-ID TimeClock, keep-your-existing-clock, and integrated back office.",
		og_title: "Innrly: alternative to Actabl / Hotel Effectiveness: How They Compare (2026) | Innrly",
		og_description: "How Innrly Shift compares to Actabl's labor suite (PerfectLabor, PerfectTime, Hotel Effectiveness) — pricing, Face-ID TimeClock, keep-your-existing-clock, and integrated back office.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare/innrly-vs-aptech": {
		page_path: "/compare/innrly-vs-aptech",
		title: "Innrly: alternative to Aptech (Profitvue, Execuvue, Targetvue): 2026 Comparison | Innrly",
		description: "How Innrly and Aptech's Profitvue / Execuvue / Targetvue suite compare for multi-property hotel operators — single platform vs multi-module, pricing, deployment, and USALI reporting.",
		og_title: "Innrly: alternative to Aptech (Profitvue, Execuvue, Targetvue): 2026 Comparison | Innrly",
		og_description: "How Innrly and Aptech's Profitvue / Execuvue / Targetvue suite compare for multi-property hotel operators — single platform vs multi-module, pricing, deployment, and USALI reporting.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare/innrly-vs-hotel-effectiveness": {
		page_path: "/compare/innrly-vs-hotel-effectiveness",
		title: "Innrly vs Hotel Effectiveness: Labor & TimeClock Compared (2026) | Innrly",
		description: "Innrly vs Hotel Effectiveness for hotel labor management — Face-ID TimeClock, scheduling, MPOR, and how an all-in-one back office compares to a dedicated labor platform.",
		keywords: "hotel effectiveness alternative, innrly vs hotel effectiveness, hotel timeclock, labor management",
		og_title: "Innrly vs Hotel Effectiveness — How They Compare",
		og_description: "Face-ID TimeClock, scheduling, and housekeeping productivity inside a full back-office platform — vs a dedicated labor tool.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare/innrly-vs-nimble": {
		page_path: "/compare/innrly-vs-nimble",
		title: "Innrly: alternative to Nimble Property: How They Compare (2026) | Innrly",
		description: "Side-by-side comparison of Innrly and Nimble Property for multi-property hotel operators — pricing, deployment, TimeClock, housekeeping productivity, and A/P automation.",
		og_title: "Innrly: alternative to Nimble Property: How They Compare (2026) | Innrly",
		og_description: "Side-by-side comparison of Innrly and Nimble Property for multi-property hotel operators — pricing, deployment, TimeClock, housekeeping productivity, and A/P automation.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare/innrly-vs-otelier": {
		page_path: "/compare/innrly-vs-otelier",
		title: "Innrly: alternative to Otelier: How They Compare (2026) | Innrly",
		description: "How Innrly and Otelier compare for multi-property hotel operators — commercial terms, deployment, TimeClock with built-in housekeeping productivity matrix, and integrations.",
		og_title: "Innrly: alternative to Otelier: How They Compare (2026) | Innrly",
		og_description: "How Innrly and Otelier compare for multi-property hotel operators — commercial terms, deployment, TimeClock with built-in housekeeping productivity matrix, and integrations.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare/innrly-vs-profitsage": {
		page_path: "/compare/innrly-vs-profitsage",
		title: "Innrly: alternative to ProfitSage: 2026 Comparison | Innrly",
		description: "How Innrly and ProfitSage compare for multi-property hotel operators — BI dashboards, forecasting, and what each platform covers beyond reporting.",
		og_title: "Innrly: alternative to ProfitSage: 2026 Comparison | Innrly",
		og_description: "How Innrly and ProfitSage compare for multi-property hotel operators — BI dashboards, forecasting, and what each platform covers beyond reporting.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/contact": {
		page_path: "/contact",
		title: "Book an Innrly Demo - Hotel Management Software",
		description: "Book a live demo of Innrly hotel management software. See how back-office automation, business intelligence and labor management simplify hotel operations.",
		keywords: "book innrly demo, hotel software demo, contact innrly , PMS-agnostic hotel back-office automation",
		og_title: "Book an Innrly Hotel Management Software Demo",
		og_description: "See Innrly in action with a live 30-minute demo. Explore hotel back-office automation, business intelligence and labor management for your portfolio.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/developers": {
		page_path: "/developers",
		title: "Hotel Management APIs & Integrations | Developers | Innrly",
		description: "Build hotel integrations with Innrly APIs and webhooks for invoices, GL, labor, reservations and reconciliation. Connect PMS, accounting, payroll and banking.",
		keywords: "innrly developer api, hotel software api, webhook integration, Hotel Management APIs, Hotel PMS API, Hotel Accounting API, Hotel REST API, Hotel Webhooks, Hotel Software Integrations, Hotel Developer Platform.",
		og_title: "Innrly Hotel Management APIs & Developer Platform",
		og_description: "Build powerful hotel integrations with Innrly REST APIs, webhooks and partner tools for PMS, accounting, payroll, banking, invoices and reconciliation.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/features": {
		page_path: "/features",
		title: "Innrly Features - Automated Night Audit, OTA Assurance & Labor tracking",
		description: "Explore Innrly hotel management software features for business intelligence, financial control, labor management, night audit, reconciliation and automation.",
		keywords: "Innrly features, night audit automation, ota reconciliation, Hotel Back-Office Automation, Hotel Financial Control, Hotel Business Intelligence, Hotel Night Audit, Hotel Labor Management, Hotel Management Software Features",
		og_title: "Innrly Hotel Management Software Features",
		og_description: "Discover Innrly features built for hotel owners and operators, including BI, financial control, labor management, night audit, reconciliation and automation.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/glossary": {
		page_path: "/glossary",
		title: "Hotel Operations Glossary | Finance & Hospitality Terms | Innrly",
		description: "Explore the Innrly hotel operations glossary with plain-English definitions for finance, labor, accounting, revenue and hospitality terms used by hotel operators.",
		keywords: "Hotel Operations Glossary, Hotel Management Glossary, Hospitality Glossary, Hotel Finance Terms, Hotel Accounting Terms, Hotel Operations Terms, Hotel Revenue Terms, hotel glossary, adr, revpar, mpor, usali, hotel accounting terms",
		og_title: "Innrly Hotel Operations Glossary & Hospitality Terms",
		og_description: "Learn essential hotel finance, labor, accounting, revenue and operations terms with Innrly's easy-to-understand glossary for hotel owners and operators.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/hotel-back-office-automation": {
		page_path: "/hotel-back-office-automation",
		title: "Hotel Back-Office Automation & Night Audit Software | Innrly",
		description: "Automate your hotel group's night audit, accounts payable capture, OTA reconciliation, and labor tracking. Reclaim 40-180 hours per property each month.",
		og_title: "Hotel Back-Office Automation & Night Audit Software | Innrly",
		og_description: "Automate your hotel group's night audit, accounts payable capture, OTA reconciliation, and labor tracking. Reclaim 40-180 hours per property each month.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/industries/extended-stay": {
		page_path: "/industries/extended-stay",
		title: "Extended-Stay Hotels — Innrly",
		description: "Innrly for extended-stay portfolios: long-stay folio handling, weekly housekeeping cycles, low-labor models, and corporate-account reconciliation across Residence Inn, Homewood, WoodSpring, and Candlewood.",
		og_title: "Extended-Stay Hotels — Innrly",
		og_description: "Innrly for extended-stay portfolios: long-stay folio handling, weekly housekeeping cycles, low-labor models, and corporate-account reconciliation across Residence Inn, Homewood, WoodSpring, and Candlewood.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/industries/full-service": {
		page_path: "/industries/full-service",
		title: "Full-Service Hotels — Innrly",
		description: "Innrly for full-service and resort hotels: F&B GL coding, banquet revenue reconciliation, multi-outlet labor, and USALI-aligned owner reporting — across OPERA, Infor, and Maestro.",
		og_title: "Full-Service Hotels — Innrly",
		og_description: "Innrly for full-service and resort hotels: F&B GL coding, banquet revenue reconciliation, multi-outlet labor, and USALI-aligned owner reporting — across OPERA, Infor, and Maestro.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/industries/select-service": {
		page_path: "/industries/select-service",
		title: "Hotel Management Software for Select-Service Hotels | Innrly",
		description: "Streamline select-service hotel operations with Innrly. Automate night audit, accounting, reconciliation, labor and back-office workflows across properties.",
		keywords: "Hotel Management Software for Select-Service Hotels, Select-Service Hotel Software, Select-Service Hotel Management, Hotel Back-Office Automation, Hotel Accounting Software, Hotel Reconciliation, Hotel Labor Management, hampton inn back office, holiday inn express accounting",
		og_title: "Innrly Hotel Software for Select-Service Hotels",
		og_description: "Simplify select-service hotel operations with Innrly's back-office automation, financial control, labor management, reconciliation and business intelligence.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations": {
		page_path: "/integrations",
		title: "Hotel Integrations — PMS, Accounting, Payroll & More | Innrly",
		description: "Integrate Innrly with hotel PMS, accounting, payroll, banking and OTA platforms. Streamline data flow, reconciliation and back-office operations.",
		keywords: "hotel pms integrations, hotel accounting integrations, opera, onq, fosse, m3, Hotel Software Integrations, Hotel PMS Integrations, Hotel Accounting Integrations, Hotel Payroll Integration, Hotel Banking Integration, Hotel API Integrations",
		og_title: "Hotel PMS & Accounting Integrations | Innrly",
		og_description: "Connect your hotel's PMS, accounting, payroll, banking, OTA and guest systems with Innrly. Automate data flow and back-office work without changing your tools.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations/cloudbeds": {
		page_path: "/integrations/cloudbeds",
		title: "Innrly + Cloudbeds Integration | Innrly",
		description: "Connect Cloudbeds to Innrly for automated daily reconciliation, A/P, labor, and BI — across every property in your portfolio.",
		og_title: "Innrly + Cloudbeds Integration | Innrly",
		og_description: "Connect Cloudbeds to Innrly for automated daily reconciliation, A/P, labor, and BI — across every property in your portfolio.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations/inn-flow": {
		page_path: "/integrations/inn-flow",
		title: "Innrly + Inn-flow — Automate A/P, OTA Recon & Audit Into Inn-flow | Innrly",
		description: "Innrly is the automation layer for Inn-flow customers — auto-coded invoices, OTA reconciliation, night audit, and labor data pushed into your Inn-flow GL. API integration on the roadmap.",
		og_title: "Innrly + Inn-flow — Automate A/P, OTA Recon & Audit Into Inn-flow | Innrly",
		og_description: "Innrly is the automation layer for Inn-flow customers — auto-coded invoices, OTA reconciliation, night audit, and labor data pushed into your Inn-flow GL. API integration on the roadmap.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations/m3": {
		page_path: "/integrations/m3",
		title: "M3 Hotel Accounting Integration | Connect M3 with Innrly",
		description: "Connect M3 with Innrly to automate hotel accounting, reconciliation and financial workflows. Sync data, reduce manual work and improve back-office control.",
		keywords: "M3 Hotel Accounting Integration, M3 Integration, Hotel M3 Integration, M3 Accounting Integration, Hotel Accounting Software, Hotel Reconciliation, Hotel Back-Office Automation, innrly m3 integration, m3 accounting sync, hotel gl coding m3",
		og_title: "Innrly M3 Hotel Accounting Integration",
		og_description: "Connect M3 with Innrly for streamlined hotel accounting, reconciliation and back-office automation. Reduce manual work and improve financial visibility.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations/mews": {
		page_path: "/integrations/mews",
		title: "Innrly + Mews Integration | Innrly",
		description: "Connect Mews to Innrly for automated daily reconciliation, A/P, labor, and BI across your portfolio.",
		og_title: "Innrly + Mews Integration | Innrly",
		og_description: "Connect Mews to Innrly for automated daily reconciliation, A/P, labor, and BI across your portfolio.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations/opera": {
		page_path: "/integrations/opera",
		title: "Innrly + Oracle Opera Integration | Innrly",
		description: "Pull Opera night-audit packs, folios, and manager reports into Innrly. Reconcile, audit, and push to your accounting system — across Opera Cloud and Opera PMS.",
		og_title: "Innrly + Oracle Opera Integration | Innrly",
		og_description: "Pull Opera night-audit packs, folios, and manager reports into Innrly. Reconcile, audit, and push to your accounting system — across Opera Cloud and Opera PMS.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations/quickbooks": {
		page_path: "/integrations/quickbooks",
		title: "QuickBooks Hotel Accounting Integration | Innrly",
		description: "Connect QuickBooks with Innrly to automate hotel accounting, expense entries and reconciliation. Sync financial data and reduce manual back-office work.",
		keywords: "QuickBooks Hotel Accounting Integration, QuickBooks Hotel Integration, QuickBooks Accounting Integration, Hotel Accounting Software, Hotel Expense Automation, Hotel Reconciliation, Hotel Back-Office Automation, innrly quickbooks integration, hotel quickbooks sync, two-way qbo sync",
		og_title: "Innrly QuickBooks Hotel Accounting Integration",
		og_description: "Connect QuickBooks with Innrly to streamline hotel accounting, expense management and reconciliation while reducing manual financial work.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations/sage-intacct": {
		page_path: "/integrations/sage-intacct",
		title: "Innrly + Sage Intacct Integration | Innrly",
		description: "Innrly syncs with Sage Intacct as your accounting system of record. Talk to us about your portfolio's setup and mapping.",
		og_title: "Innrly + Sage Intacct Integration | Innrly",
		og_description: "Innrly syncs with Sage Intacct as your accounting system of record. Talk to us about your portfolio's setup and mapping.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/legal/accessibility": {
		page_path: "/legal/accessibility",
		title: "Accessibility Statement | Accessible Website | Innrly",
		description: "Read Innrly's Accessibility Statement and learn about our commitment to making our website, software and digital experiences accessible to all users.",
		keywords: "Innrly Accessibility Statement, Accessibility Statement, Website Accessibility, Digital Accessibility, Accessible Website, Accessibility Compliance, wcag",
		og_title: "Innrly Accessibility Statement",
		og_description: "Learn about Innrly's commitment to accessibility and our efforts to make our website and digital experiences usable for all users.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/legal/cookies": {
		page_path: "/legal/cookies",
		title: "Cookie Policy | Website Cookies & Privacy | Innrly",
		description: "Learn how Innrly uses cookies and similar technologies, why they are used, how they support our website and how you can manage your preferences.",
		keywords: "Innrly Cookie Policy, Cookie Policy, Website Cookies, Cookie Preferences, Privacy Cookies, Tracking Technologies, cookie tracking",
		og_title: "Innrly Cookie Policy & Cookie Preferences",
		og_description: "Learn how Innrly uses cookies and similar technologies, including how cookies support website functionality and how you can manage preferences.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/legal/privacy": {
		page_path: "/legal/privacy",
		title: "Privacy Policy | Data Protection & Privacy | Innrly",
		description: "Read Innrly's Privacy Policy to learn how we collect, use, protect and manage personal information and data across our website and services.",
		keywords: "Innrly Privacy Policy, Privacy Policy, Data Protection, Personal Data, Data Privacy, Innrly Data Privacy, gdpr, ccpa",
		og_title: "Innrly Privacy Policy & Data Protection",
		og_description: "Learn how Innrly collects, uses and protects personal information and how your data is managed when you use our website and services.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/legal/security": {
		page_path: "/legal/security",
		title: "Security Terms & Policies | Data Security | Innrly",
		description: "Learn about Innrly's security policies, data protection practices, access controls and safeguards designed to protect customer information and services.",
		keywords: "Innrly Security Policy, Data Security, SaaS Security, Hotel Data Security, Information Security, Data Protection, Innrly Security, encryption, data isolation, access control",
		og_title: "Innrly Security Policies & Data Protection",
		og_description: "Learn how Innrly approaches data security, access controls and safeguards to help protect customer information and platform services.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/legal/subscription": {
		page_path: "/legal/subscription",
		title: "Subscription Terms | Plans & Billing | Innrly",
		description: "Review Innrly's Subscription Terms covering plans, billing, payments, renewals, cancellations, subscription changes and other service conditions.",
		keywords: "Innrly Subscription Terms, Subscription Terms, SaaS Subscription Terms, Software Billing Terms, Subscription Billing, Innrly Plans, subscription agreement, innrly terms, commercial contract",
		og_title: "Innrly Subscription Terms & Billing",
		og_description: "Learn about Innrly subscription plans, billing, payments, renewals, cancellations and other terms that apply to your subscription.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/legal/terms": {
		page_path: "/legal/terms",
		title: "Terms of Service | Terms & Conditions | Innrly",
		description: "Review Innrly's Terms of Service covering the use of our website, software, services, subscriptions, user responsibilities and applicable conditions.",
		keywords: "Innrly Terms of Service, Terms of Service, Terms and Conditions, Software Terms, Service Agreement, Innrly Terms, software license, innrly terms",
		og_title: "Innrly Terms of Service & Conditions",
		og_description: "Review the terms and conditions governing your use of Innrly's website, software, services and subscriptions.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/onboarding": {
		page_path: "/onboarding",
		title: "Hotel Software Onboarding | Get Started with Innrly",
		description: "Get your hotel portfolio onboarded to Innrly in minutes. Connect your systems, streamline back-office operations and get live within one business day.",
		keywords: "innrly onboarding, get started, hotel software setup, Hotel Software Onboarding, Hotel Management Software Onboarding, Hotel Software Setup, Hotel Back-Office Automation, Hotel Operations Software, Hotel Portfolio Management",
		og_title: "Hotel Management Software Onboarding | Innrly",
		og_description: "Onboard your hotel portfolio to Innrly in about 5 minutes and get live within one business day with secure hotel back-office automation.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/pricing": {
		page_path: "/pricing",
		title: "Innrly Pricing | Scalable Hotel Management Software",
		description: "Compare flexible pricing plans for Innrly's hotel back-office software. Find the best solution for single properties or multi-hotel portfolios.",
		keywords: "Hotel Software Pricing, Innrly Pricing, Hotel Management Software Pricing, Hotel Back-Office Software, Hotel Management System Pricing, Hotel Automation Software",
		og_title: "Innrly Hotel Management Software Pricing & Plans",
		og_description: "Compare Innrly plans for hotel back-office automation, business intelligence, labor management and reconciliation. Start with a 90-day free trial.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/roi-calculator": {
		page_path: "/roi-calculator",
		title: "Hotel Back-Office ROI Calculator | Calculate Savings | Innrly",
		description: "Calculate your hotel back-office ROI with Innrly. Estimate labor savings, revenue recovery and annual returns from automation across your hotel portfolio.",
		keywords: "Hotel Back-Office ROI Calculator, Hotel ROI Calculator, Hotel Software ROI Calculator, Hotel Automation ROI, Hotel Labor Savings, Hotel Back-Office Savings, Hotel Software ROI, hotel back office savings, labor savings calculator",
		og_title: "Innrly Hotel Back-Office ROI Calculator",
		og_description: "Calculate potential savings from hotel back-office automation. See labor savings, revenue recovery and total annual ROI based on your hotel portfolio.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/security": {
		page_path: "/security",
		title: "Hotel Software Security & Data Protection | Innrly",
		description: "Discover how Innrly protects hotel financial and operational data with enterprise-grade encryption, access controls, audit trails, backups and monitoring.",
		keywords: "Hotel Software Security, data protection, soc 2 hotel software, Hotel Data Security, Hotel Management Software Security, Hotel Financial Data Security, Hotel Software Compliance, Enterprise Hotel Software Security.",
		og_title: "Innrly | Enterprise-Grade Hotel Data Security",
		og_description: "See how Innrly protects hotel data with encryption, MFA, access controls, audit trails, encrypted backups, continuous monitoring and enterprise security controls.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/services/accountability-pack": {
		page_path: "/services/accountability-pack",
		title: "Hotel Back-Office Services | Accountability Pack | Innrly",
		description: "Outsource hotel back-office tasks with Innrly's Accountability Pack. Get data verification, franchise reporting, CLC reconciliation and manual entries handled.",
		keywords: "Hotel Back-Office Services, Hotel Accounting Support, Hotel Back-Office Automation, Hotel Data Verification, Hotel Franchise Reporting, CLC Reconciliation, Hotel Accounting Services, franchise reporting, clc reconciliation",
		og_title: "Innrly Accountability Pack | Hotel Back-Office Support",
		og_description: "Extend your hotel back office with Innrly's team. We handle data verification, franchise reporting, Green Engage, CLC reconciliation and manual entries.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/business-intelligence": {
		page_path: "/solutions/business-intelligence",
		title: "Hotel Business Intelligence Software | Innrly",
		description: "Manage hotel performance with Innrly Business Intelligence. Track portfolio KPIs, revenue, labor, STR benchmarks and competitor rates in real time.",
		keywords: "Hotel Business Intelligence Software, Hotel BI Software, Hotel Business Analytics, Hotel Performance Dashboard, Hotel Portfolio Analytics, Hotel Revenue Analytics, STR Benchmarking, hotel business intelligence, hotel bi software, str benchmarking, portfolio reporting",
		og_title: "Innrly | Hotel Business Intelligence Software",
		og_description: "Get real-time visibility across your hotel portfolio with Innrly BI. Monitor revenue, occupancy, labor, STR performance and competitor rates in one place.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/document-vault": {
		page_path: "/solutions/document-vault",
		title: "Hotel Document Management Software | Document Vault | Innrly",
		description: "Organize hotel documents automatically with Innrly Document Vault. Capture night-audit files, search records, manage retention and simplify audit preparation.",
		keywords: "Hotel Document Management Software, Hotel Document Management, Hotel Document Storage, Hotel Document Automation, Hotel Audit Document Management, Hotel Records Management, Hotel Document Vault, hotel document vault, night audit storage, tax document vault, audit archive",
		og_title: "Innrly Document Vault | Hotel Document Management",
		og_description: "Automatically organize hotel night-audit packs, invoices and supporting documents by date and property. Search your portfolio and prepare audits faster.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/expense-entries": {
		page_path: "/solutions/expense-entries",
		title: "Expense Entries - Receipts to Your Accounting System | Innrly",
		description: "Record expense tickets, credit card charges, and auto-paid invoices in Innrly - synced straight to your accounting system (QuickBooks, M3, Sage Intacct, and others).",
		keywords: "Hotel Expense Management Software, Hotel Expense Automation, Hotel Expense Tracking, Hotel GL Automation, Hotel Accounting Automation, Credit Card Expense Management, Hotel Expense Entries, hotel expense management, receipt capture, gl coding, credit card coding",
		og_title: "Innrly | Hotel Expense Management & GL Automation",
		og_description: "Simplify hotel expense management with automated entries, vendor coding and GL sync. Capture card charges and auto-debits and keep your accounting current.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/financial-control": {
		page_path: "/solutions/financial-control",
		title: "Hotel Accounting & Reconciliation Software | Innrly",
		description: "Automate hotel accounting and reconciliation with Innrly. Match PMS, bank and OTA transactions, flag variances and simplify month-end financial close.",
		keywords: "Hotel Accounting & Reconciliation Software, Hotel Financial Control, Hotel Accounting Software, Hotel Reconciliation Software, Hotel Bank Reconciliation, OTA Reconciliation, Hotel Revenue Protection, hotel accounting reconciliation, financial control, ota audit, bank matching",
		og_title: "Innrly | Hotel Accounting & Financial Control",
		og_description: "Simplify hotel financial control with automated PMS, bank and OTA reconciliation. Surface exceptions, recover lost revenue and close your books faster.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/innrly-pay": {
		page_path: "/solutions/innrly-pay",
		title: "Hotel AP Automation Software | Virtual Cards & ACH | Innrly",
		description: "Innrly connects to 50+ hotel systems — Opera, Hilton OnQ, Marriott FOSSE, M3, QuickBooks, Sage Intacct, ADP, Medallia, Plaid and more.",
		keywords: "Hotel AP Automation Software, Hotel Accounts Payable Automation, Hotel AP Software, Invoice Automation, Virtual Card Payments, ACH Payments, Hotel Payment Automation, hotel bill pay, virtual cards for hotels, hotel ap automation, ach payments",
		og_title: "Innrly Pay | Hotel Accounts Payable Automation",
		og_description: "Simplify hotel A/P with automated invoice capture, approvals, Virtual Cards, ACH payments and accounting reconciliation - all in one back-office platform.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/innrly-shift": {
		page_path: "/solutions/innrly-shift",
		title: "Hotel Labor Management Software | Scheduling & Payroll | Innrly",
		description: "Simplify hotel labor management with Innrly Shift. Manage scheduling, TimeClock, housekeeping productivity, overtime and payroll from one platform.",
		keywords: "Hotel Labor Management Software, Hotel Workforce Management, Hotel Employee Scheduling Software, Hotel Time Clock Software, Hotel Payroll Management, Hotel Overtime Management, hotel labor management, face-id timeclock, hotel scheduling, mpor tracking",
		og_title: "Innrly Shift | Hotel Labor Management Made Simple",
		og_description: "Manage hotel labor in one place with Innrly Shift. Track scheduling, TimeClock, housekeeping productivity, overtime risk and payroll from your phone.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/operations-automation": {
		page_path: "/solutions/operations-automation",
		title: "Hotel Night Audit & Back - Office Automation Software | Innrly",
		description: "Automate hotel night audits, OTA and bank reconciliation, invoices and accounting with Innrly. Reduce manual work and manage every property from one platform.",
		keywords: "Hotel Back-Office Automation Software, Hotel Operations Automation, Hotel Night Audit Software, Hotel Reconciliation Software, Hotel Invoice Automation, Hotel Accounting Automation, Hotel Back-Office Software, hotel night audit automation, back office automation, audit packs, eod automation",
		og_title: "Innrly | Hotel Back-Office Operations Automation",
		og_description: "Automate night audits, OTA and bank reconciliation, invoice processing and accounting across your hotel portfolio with Innrly's unified back-office platform.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/reconciliation": {
		page_path: "/solutions/reconciliation",
		title: "Hotel Reconciliation Software | PMS, Bank & OTA | Innrly",
		description: "Automate hotel reconciliation across PMS, banks, credit cards and OTAs. Match transactions, flag variances and simplify daily financial close with Innrly.",
		keywords: "Hotel Reconciliation Software, Hotel PMS Reconciliation, Hotel Bank Reconciliation, OTA Reconciliation, Credit Card Reconciliation, Hotel Financial Reconciliation, Hotel Accounting Automation, hotel reconciliation software, credit card batch matching, ota reconciliation",
		og_title: "Innrly | Hotel Reconciliation Software",
		og_description: "Automate hotel PMS, bank, credit card and OTA reconciliation with Innrly. Match transactions, identify variances and close your books faster every day.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	}
};
async function fetchSeoData(path) {
	try {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 1500);
		const res = await fetch(`${API_BASE}/seo?page_path=${encodeURIComponent(path)}`, { signal: controller.signal });
		clearTimeout(timeoutId);
		if (!res.ok) return null;
		const data = await res.json();
		if (data && data.title) return data;
		return null;
	} catch (e) {
		return null;
	}
}
function getMetaTags(dynamicSeo, fallbackSeo, canonicalPath) {
	const seo = dynamicSeo && dynamicSeo.title ? dynamicSeo : fallbackSeo;
	const meta = [{ title: seo.title }];
	if (seo.description) meta.push({
		name: "description",
		content: seo.description
	});
	if (seo.keywords) meta.push({
		name: "keywords",
		content: seo.keywords
	});
	if (seo.og_title) meta.push({
		property: "og:title",
		content: seo.og_title
	});
	if (seo.og_description) meta.push({
		property: "og:description",
		content: seo.og_description
	});
	if (seo.og_image) {
		const rawImg = seo.og_image;
		const ogImgUrl = rawImg.startsWith("http") ? rawImg : `https://www.innrly.com${rawImg.startsWith("/") ? "" : "/"}${rawImg}`;
		meta.push({
			property: "og:image",
			content: ogImgUrl
		});
		meta.push({
			name: "twitter:image",
			content: ogImgUrl
		});
	}
	meta.push({
		property: "og:url",
		content: `https://www.innrly.com${canonicalPath === "/" ? "" : canonicalPath}`
	});
	return meta;
}
function breadcrumbLd(crumbs) {
	return {
		type: "application/ld+json",
		children: JSON.stringify({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: crumbs.map((c, i) => ({
				"@type": "ListItem",
				position: i + 1,
				name: c.name,
				item: c.url
			}))
		})
	};
}
//#endregion
export { seo_exports as a, getMetaTags as i, defaultSeoData as n, fetchSeoData as r, breadcrumbLd as t };
