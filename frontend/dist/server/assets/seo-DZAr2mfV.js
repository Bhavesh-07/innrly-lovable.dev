//#region src/lib/seo.ts
var defaultSeoData = {
	"/": {
		page_path: "/",
		title: "Innrly — Hotel back-office, BI & labor platform",
		description: "Innrly (sometimes spelled Innerly) automates hotel back-office work, surfaces real-time portfolio insights, and controls labor costs. Save 20–40 hours per property each month.",
		keywords: "hotel management software, back-office automation, hotel BI, labor management",
		og_title: "Innrly — One platform for total hotel control",
		og_description: "Automate financials, streamline operations, and manage performance across your entire hotel portfolio with Innrly (sometimes spelled Innerly).",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/features": {
		page_path: "/features",
		title: "Innrly Features — Automated night audit, OTA assurance & labor tracking",
		description: "Explore Innrly's feature set: dynamic exceptions dashboard, OCR expense capture, mobile-first labor tracking, and daily KPI digests.",
		keywords: "innrly features, night audit automation, ota reconciliation",
		og_title: "Innrly Features — PMS-agnostic back-office automation",
		og_description: "Explore the exceptions dashboard, invoice capture, bank matching, and daily labor tracking.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/pricing": {
		page_path: "/pricing",
		title: "Innrly Pricing — Transparent, flat-rate hotel back-office software",
		description: "Simple, per-property pricing with no setup fees or contract lock-in. 90-day free trial on your real data.",
		keywords: "hotel software pricing, innrly pricing, transparent pricing",
		og_title: "Innrly Pricing — Simple, flat-rate hotel control",
		og_description: "90-day free trial on your real data. No setup fees, no contracts.",
		og_image: "https://www.innrly.com/og/pricing.jpg"
	},
	"/integrations": {
		page_path: "/integrations",
		title: "Hotel Integrations — PMS, Accounting, Payroll & More | Innrly",
		description: "Innrly connects to 50+ hotel systems — Opera, Hilton OnQ, Marriott FOSSE, M3, QuickBooks, Sage Intacct, ADP, Medallia, Plaid and more.",
		keywords: "hotel pms integrations, hotel accounting integrations, opera, onq, fosse, m3",
		og_title: "Innrly Integrations — 50+ Hotel Systems Connected",
		og_description: "PMS, accounting, payroll, banking, guest survey, and invoice payment integrations — all in one back-office platform.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/onboarding": {
		page_path: "/onboarding",
		title: "Get Started with Innrly — Hotel Onboarding",
		description: "Onboard your hotel portfolio to Innrly in minutes. Tell us about your company, users, and properties — we'll handle the rest.",
		keywords: "innrly onboarding, get started, hotel software setup",
		og_title: "Get Started with Innrly",
		og_description: "Onboard your hotel portfolio to Innrly in minutes.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/innrly-pay": {
		page_path: "/solutions/innrly-pay",
		title: "Innrly Pay — Hotel AP Automation & Virtual Cards",
		description: "Built for hotel A/P clerks. Replace paper checks with Virtual Cards and ACH. Invoices captured, approved, paid, and reconciled in one workflow.",
		keywords: "hotel bill pay, virtual cards for hotels, hotel ap automation, ach payments",
		og_title: "Innrly Pay — Hotel AP Automation",
		og_description: "The A/P clerk's full week, done in an afternoon. Virtual Cards + ACH, free with every plan.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/innrly-shift": {
		page_path: "/solutions/innrly-shift",
		title: "Innrly Shift — 5-Minute Labor Snapshot for Hotel GMs",
		description: "Built for GMs who run the whole hotel. 5-minute daily labor snapshot, Face-ID TimeClock, housekeeping productivity, and payroll — one product, not four.",
		keywords: "hotel labor management, face-id timeclock, hotel scheduling, mpor tracking",
		og_title: "Innrly Shift — 5-Minute Labor Snapshot",
		og_description: "Precision payroll powered by real labor data — built for hotel GMs.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/business-intelligence": {
		page_path: "/solutions/business-intelligence",
		title: "Hotel Business Intelligence Software | Innrly",
		description: "The portfolio sits on your screen before coffee. Real-time dashboards, STR benchmarking, and rate-shop intelligence for multi-property hotel owners and VPs of Operations.",
		keywords: "hotel business intelligence, hotel bi software, str benchmarking, portfolio reporting",
		og_title: "Hotel Business Intelligence for Multi-Property Owners | Innrly",
		og_description: "One screen for the whole portfolio. Built for owners and VPs of Operations who refuse to wait for month-end.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/financial-control": {
		page_path: "/solutions/financial-control",
		title: "Hotel Accounting Reconciliation Software | Innrly",
		description: "Work the exceptions, not the entire ledger. Automated OTA, bank, A/R reconciliation built for hotel CFOs and controllers across multi-property portfolios.",
		keywords: "hotel accounting reconciliation, financial control, ota audit, bank matching",
		og_title: "Hotel Accounting Reconciliation for Controllers | Innrly",
		og_description: "An exceptions-first ledger for hotel finance teams — recover the dollars hidden in the noise.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/operations-automation": {
		page_path: "/solutions/operations-automation",
		title: "Hotel Night Audit & Back-Office Automation Software | Innrly",
		description: "Built for night auditors and AGMs. Automate the night audit pack, OTA reconciliation, bank matching, and A/P invoice capture — across every property and PMS.",
		keywords: "hotel night audit automation, back office automation, audit packs, eod automation",
		og_title: "Hotel Night Audit & Back-Office Automation | Innrly",
		og_description: "The night auditor's full pack, generated and filed by sunrise — at every property.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/reconciliation": {
		page_path: "/solutions/reconciliation",
		title: "Hotel Reconciliation Software | Innrly",
		description: "Automated hotel reconciliation software — match PMS, bank, credit card, and OTA deposits daily. Catch variances before they cost you money.",
		keywords: "hotel reconciliation software, credit card batch matching, ota reconciliation",
		og_title: "Hotel Reconciliation Software | Innrly",
		og_description: "Daily PMS-to-bank, credit card, and OTA reconciliation — automated across every property in your portfolio.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/solutions/expense-entries": {
		page_path: "/solutions/expense-entries",
		title: "Expense Entries — Receipts to Your Accounting System | Innrly",
		description: "Record expense tickets, credit card charges, and auto-paid invoices in Innrly — synced straight to your accounting system (QuickBooks, M3, Sage Intacct, and others).",
		keywords: "hotel expense management, receipt capture, gl coding, credit card coding",
		og_title: "Expense Entries — Direct to Your GL",
		og_description: "Capture credit card charges and auto-paid invoices once. Innrly syncs them to your accounting system as expense items.",
		og_image: "https://www.innrly.com/og/expense-entries.jpg"
	},
	"/solutions/document-vault": {
		page_path: "/solutions/document-vault",
		title: "Document Vault — Hotel Document Storage | Innrly",
		description: "Every night-audit pack, vendor invoice, and franchise report auto-dropped onto a daily calendar. Searchable, secure, and always ready for audit.",
		keywords: "hotel document vault, night audit storage, tax document vault, audit archive",
		og_title: "Document Vault — Calendar view of every document",
		og_description: "Daily PMS night-audit files land automatically. Add manual uploads to any day. Built for hotel back-office teams.",
		og_image: "https://www.innrly.com/og/document-vault.jpg"
	},
	"/services/accountability-pack": {
		page_path: "/services/accountability-pack",
		title: "Accountability Pack — Done-for-You Back-Office | Innrly",
		description: "Add Innrly's Accountability Pack to your subscription: data verification, franchise reporting, Green Engage, CLC reconciliation, and manual entry — handled by our team.",
		keywords: "hotel back office services, franchise reporting, clc reconciliation, hotel accounting service",
		og_title: "Innrly Accountability Pack — Services beyond software",
		og_description: "Per-property add-on. Our team verifies, reconciles, and files the back-office work your in-house team doesn't have time for.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/blog": {
		page_path: "/blog",
		title: "Blog — Innrly",
		description: "Hotel operations, finance, and labor insights from the Innrly team.",
		keywords: "hotel blog, hospitality finance insights, hotel operations guide, hotel accounting",
		og_title: "Innrly Blog",
		og_description: "Operator-focused writing on hotel finance, labor, and analytics.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/glossary": {
		page_path: "/glossary",
		title: "Hotel Operations Glossary: ADR, RevPAR, MPOR | Innrly",
		description: "Plain-English definitions of the hotel finance, labor, and operations terms multi-property operators use every day — ADR, RevPAR, GOP, MPOR, OTA, PMS, USALI.",
		keywords: "hotel glossary, adr, revpar, mpor, usali, hotel accounting terms",
		og_title: "Hotel Operations Glossary — Innrly",
		og_description: "Definitions for the hotel terms operators use daily — ADR, RevPAR, MPOR, USALI, and more.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/case-studies": {
		page_path: "/case-studies",
		title: "Hotel Operator Case Studies | Innrly",
		description: "Illustrative scenarios showing the shape of impact multi-property hotel operators see with Innrly — hours saved, revenue protected, faster close.",
		keywords: "hotel case studies, hotel back office results, operator stories",
		og_title: "Innrly Case Studies",
		og_description: "Illustrative scenarios. Directional ranges from typical Innrly engagements — composite, not single-customer audited results.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/roi-calculator": {
		page_path: "/roi-calculator",
		title: "Hotel Back-Office ROI Calculator | Innrly",
		description: "See your portfolio's ROI with Innrly in 30 seconds. Hours saved per property, hidden revenue recovered, and total annual return — based on your numbers.",
		keywords: "hotel software roi calculator, hotel back office savings, labor savings calculator",
		og_title: "Innrly ROI Calculator",
		og_description: "Calculate hours saved and revenue recovered across your hotel portfolio.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare": {
		page_path: "/compare",
		title: "Compare Hotel Back-Office Software | Innrly",
		description: "Compare Innrly against other hotel back-office, accounting, and labor platforms. Pick a vendor below to see the head-to-head.",
		keywords: "compare hotel software, hotel accounting comparison, otelier vs innrly, m3 vs innrly",
		og_title: "Compare hotel back-office software",
		og_description: "Hub of head-to-head Innrly comparisons for multi-property hotel operators.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare/innrly-vs-otelier": {
		page_path: "/compare/innrly-vs-otelier",
		title: "Innrly: alternative to Otelier: How They Compare (2026) | Innrly",
		description: "How Innrly and Otelier compare for multi-property hotel operators — commercial terms, deployment, TimeClock with built-in housekeeping productivity matrix, and integrations.",
		keywords: "otelier alternative, innrly vs otelier, hotel back office software, hotel bi otelier",
		og_title: "Innrly: alternative to Otelier — How They Compare",
		og_description: "Transparent $199/mo pricing, 2–4 week deployment, and Face-ID TimeClock vs Otelier's multi-module suite.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare/innrly-vs-actabl": {
		page_path: "/compare/innrly-vs-actabl",
		title: "Innrly: alternative to Actabl / Hotel Effectiveness: How They Compare (2026) | Innrly",
		description: "How Innrly Shift compares to Actabl's labor suite (PerfectLabor, PerfectTime, Hotel Effectiveness) — pricing, Face-ID TimeClock, keep-your-existing-clock, and integrated back office.",
		keywords: "actabl alternative, hotel effectiveness alternative, innrly vs actabl, hotel labor management",
		og_title: "Innrly: alternative to Actabl — How They Compare",
		og_description: "Innrly Shift at a published $149/mo per property — all-in labor — vs Actabl's per-module quote-based labor suite.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare/innrly-vs-nimble": {
		page_path: "/compare/innrly-vs-nimble",
		title: "Innrly: alternative to Nimble Property: How They Compare (2026) | Innrly",
		description: "Side-by-side comparison of Innrly and Nimble Property for multi-property hotel operators — pricing, deployment, TimeClock, housekeeping productivity, and A/P automation.",
		keywords: "nimble property alternative, innrly vs nimble, hotel accounting software, hotel ap automation",
		og_title: "Innrly: alternative to Nimble Property — How They Compare",
		og_description: "Pricing, deployment speed, labor + housekeeping, and A/P automation compared.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare/innrly-vs-aptech": {
		page_path: "/compare/innrly-vs-aptech",
		title: "Innrly: alternative to Aptech (Profitvue, Execuvue, Targetvue): 2026 Comparison | Innrly",
		description: "How Innrly and Aptech's Profitvue / Execuvue / Targetvue suite compare for multi-property hotel operators — single platform vs multi-module, pricing, deployment, and USALI reporting.",
		keywords: "aptech alternative, profitvue alternative, innrly vs aptech, hotel usali reporting",
		og_title: "Innrly: alternative to Aptech — How They Compare",
		og_description: "One platform vs a multi-module suite. Pricing, deployment, and USALI reporting compared.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/compare/innrly-vs-profitsage": {
		page_path: "/compare/innrly-vs-profitsage",
		title: "Innrly: alternative to ProfitSage: 2026 Comparison | Innrly",
		description: "How Innrly and ProfitSage compare for multi-property hotel operators — BI dashboards, forecasting, and what each platform covers beyond reporting.",
		keywords: "profitsage alternative, innrly vs profitsage, hotel forecasting, hotel bi software",
		og_title: "Innrly: alternative to ProfitSage — How They Compare",
		og_description: "BI overlap plus the back-office layers ProfitSage doesn't cover natively.",
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
	"/integrations/m3": {
		page_path: "/integrations/m3",
		title: "Innrly + M3 — Auto GL-Code & Push Invoices | Innrly",
		description: "Officially certified M3 integration. Innrly auto-populates, GL-codes, and pushes invoices into M3 — eliminating manual A/P data entry for hotel operators.",
		keywords: "innrly m3 integration, m3 accounting sync, hotel gl coding m3",
		og_title: "Innrly + M3 — Certified Invoice Integration",
		og_description: "Auto GL-code and push invoices from Innrly into M3. Officially certified integration.",
		og_image: "https://www.innrly.com/og/integrations-m3.jpg"
	},
	"/integrations/inn-flow": {
		page_path: "/integrations/inn-flow",
		title: "Innrly + Inn-flow — Automate A/P, OTA Recon & Audit Into Inn-flow | Innrly",
		description: "Innrly is the automation layer for Inn-flow customers — auto-coded invoices, OTA reconciliation, night audit, and labor data pushed into your Inn-flow GL. API integration on the roadmap.",
		keywords: "innrly inn-flow, inn-flow integration, hotel accounting automation, inn-flow gl sync",
		og_title: "Innrly + Inn-flow — The Automation Layer for Inn-flow",
		og_description: "Inn-flow stays your GL. Innrly captures, codes, and pushes clean data into it. API integration on the roadmap.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations/quickbooks": {
		page_path: "/integrations/quickbooks",
		title: "Innrly + QuickBooks — Two-Way Sync for Hotels | Innrly",
		description: "Full two-way QuickBooks Online sync. Innrly pushes GL-coded invoices and reads back vendors and accounts — keeping both systems aligned for multi-property hotel operators.",
		keywords: "innrly quickbooks integration, hotel quickbooks sync, two-way qbo sync",
		og_title: "Innrly + QuickBooks — Two-Way Sync",
		og_description: "Bi-directional QuickBooks integration for hotel back-office automation.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations/opera": {
		page_path: "/integrations/opera",
		title: "Innrly + Oracle Opera Integration | Innrly",
		description: "Pull Opera night-audit packs, folios, and manager reports into Innrly. Reconcile, audit, and push to your accounting system — across Opera Cloud and Opera PMS.",
		keywords: "innrly opera integration, oracle opera pms, hotel night audit opera",
		og_title: "Innrly + Oracle Opera",
		og_description: "Hotel back-office automation on top of Oracle Opera.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations/cloudbeds": {
		page_path: "/integrations/cloudbeds",
		title: "Innrly + Cloudbeds Integration | Innrly",
		description: "Connect Cloudbeds to Innrly for automated daily reconciliation, A/P, labor, and BI — across every property in your portfolio.",
		keywords: "innrly cloudbeds, cloudbeds pms integration, hotel back office cloudbeds",
		og_title: "Innrly + Cloudbeds",
		og_description: "Hotel back-office automation on top of Cloudbeds.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations/mews": {
		page_path: "/integrations/mews",
		title: "Innrly + Mews Integration | Innrly",
		description: "Connect Mews to Innrly for automated daily reconciliation, A/P, labor, and BI across your portfolio.",
		keywords: "innrly mews, mews pms integration, hotel accounting mews",
		og_title: "Innrly + Mews",
		og_description: "Hotel back-office automation on top of Mews.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/integrations/sage-intacct": {
		page_path: "/integrations/sage-intacct",
		title: "Innrly + Sage Intacct Integration | Innrly",
		description: "Innrly syncs with Sage Intacct as your accounting system of record. Talk to us about your portfolio's setup and mapping.",
		keywords: "innrly sage intacct, sage intacct hotel accounting, hospitality gl sync",
		og_title: "Innrly + Sage Intacct",
		og_description: "Sync Innrly with Sage Intacct as your accounting system of record.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/industries/select-service": {
		page_path: "/industries/select-service",
		title: "Select-Service Hotels — Innrly",
		description: "Innrly for select-service hotels: automate night audits, consolidate multi-brand reporting, and run lean corporate teams across Hilton, IHG, Marriott, and Choice properties.",
		keywords: "select-service hotel software, hampton inn back office, holiday inn express accounting",
		og_title: "Select-Service Hotels — Innrly",
		og_description: "Multi-brand back-office automation built for select-service operators.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/about": {
		page_path: "/about",
		title: "About Innrly — Operator-built hotel back-office platform",
		description: "Innrly was built by hotelier Vimal Patel and has been running Q Hotels Management's portfolio since 2007 — across Hilton, Marriott, IHG, and Best Western brands.",
		keywords: "about innrly, hotel operator software, vimal patel",
		og_title: "About Innrly — Built by an operator, since 2007",
		og_description: "19 years inside our own hotels before we sold it to yours. Built by Vimal Patel of Q Hotels Management.",
		og_image: "https://www.innrly.com/og/about.jpg"
	},
	"/contact": {
		page_path: "/contact",
		title: "Book an Innrly Demo — PMS-agnostic hotel back-office automation",
		description: "Schedule a 20-minute walkthrough on your own data. See how Innrly can automate your night audit, OTA reconciliation, and labor tracking.",
		keywords: "book innrly demo, hotel software demo, contact innrly",
		og_title: "Book an Innrly Demo — 20 minutes to total control",
		og_description: "Schedule a walkthrough on your own data. See Innrly's PMS-agnostic automation live.",
		og_image: "https://www.innrly.com/og/contact.jpg"
	},
	"/security": {
		page_path: "/security",
		title: "Innrly Security — Bank-grade data protection for hotel operators",
		description: "Read about our data security standards, read-only PMS connections, encryption protocols, and SOC-2 alignment.",
		keywords: "hotel software security, data protection, soc 2 hotel software",
		og_title: "Innrly Security — Bank-grade protection by design",
		og_description: "Read-only PMS connections, daily backup encryption, and enterprise access control.",
		og_image: "https://www.innrly.com/og/security.jpg"
	},
	"/developers": {
		page_path: "/developers",
		title: "Innrly Developer Portal — PMS & Accounting APIs",
		description: "Access API reference, webhook documentation, and integration guides for PMS and accounting sync.",
		keywords: "innrly developer api, hotel software api, webhook integration",
		og_title: "Innrly Developer Portal — Open APIs for hospitality",
		og_description: "Integrate your PMS, accounting GL, and payroll systems via our REST APIs.",
		og_image: "https://www.innrly.com/og/developers.jpg"
	},
	"/legal/privacy": {
		page_path: "/legal/privacy",
		title: "Privacy Policy — Innrly",
		description: "How Innrly collects, uses, and protects your information. GDPR, CCPA/CPRA, and TCPA-aligned privacy practices for hotel operators.",
		keywords: "innrly privacy policy, gdpr, ccpa, data privacy",
		og_title: "Privacy Policy — Innrly",
		og_description: "GDPR, CCPA/CPRA, and TCPA-aligned privacy practices.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/legal/terms": {
		page_path: "/legal/terms",
		title: "Terms of Service & Software License — Innrly",
		description: "Terms of Service and Software License governing access to and use of the Innrly hotel back-office platform.",
		keywords: "terms of service, software license, innrly terms",
		og_title: "Terms of Service & Software License — Innrly",
		og_description: "Terms of Service and Software License governing access to and use of the Innrly hotel back-office platform.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/legal/subscription": {
		page_path: "/legal/subscription",
		title: "Subscription Services Agreement — Innrly",
		description: "Commercial terms for Innrly subscriptions: trial, monthly and annual plans, fees, renewal, suspension, data ownership, and termination.",
		keywords: "subscription agreement, innrly terms, commercial contract",
		og_title: "Subscription Services Agreement — Innrly",
		og_description: "Master commercial terms for hotel operators subscribing to the Innrly platform.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/legal/security": {
		page_path: "/legal/security",
		title: "Security — Innrly",
		description: "How Innrly protects your data: encryption, access controls, audit, and compliance.",
		keywords: "innrly security, encryption, data isolation, access control",
		og_title: "Security — Innrly",
		og_description: "How Innrly protects your data: encryption, access controls, audit, and compliance.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/legal/cookies": {
		page_path: "/legal/cookies",
		title: "Cookie Policy — Innrly",
		description: "How Innrly uses cookies and similar technologies on innrly.com — the categories we set, why we set them, and how you can control them.",
		keywords: "cookie policy, cookie tracking, innrly cookies",
		og_title: "Cookie Policy — Innrly",
		og_description: "Innrly's cookie categories, third-party services, and browser-level controls.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	},
	"/legal/accessibility": {
		page_path: "/legal/accessibility",
		title: "Accessibility Statement — Innrly",
		description: "Innrly's commitment to digital accessibility, our WCAG 2.1 AA target, and how to report accessibility issues.",
		keywords: "accessibility statement, wcag, digital accessibility",
		og_title: "Accessibility Statement — Innrly",
		og_description: "How Innrly approaches accessibility across our hotel back-office platform and marketing site.",
		og_image: "https://www.innrly.com/uploads/innrly-logo.png"
	}
};
var API_BASE = typeof window === "undefined" ? process.env.BACKEND_URL || "http://127.0.0.1:8000" : "/api";
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
export { getMetaTags as i, defaultSeoData as n, fetchSeoData as r, breadcrumbLd as t };
