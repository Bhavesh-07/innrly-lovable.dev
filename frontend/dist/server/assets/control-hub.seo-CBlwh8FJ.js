import { n as defaultSeoData, r as fetchSeoData } from "./seo-HRkpAnC6.js";
import { t as Button } from "./button-Dkpg6g2Z.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { t as Label } from "./label-DBD1bRRP.js";
import { n as fetchSiteScripts, t as defaultSiteScripts } from "./scripts-4H9uFc5I.js";
import { i as getAdminAuthHeaders, u as hasPermission } from "./admin-auth-5LzGtRF4.js";
import { t as Textarea } from "./textarea-kko37XEX.js";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Bot, CheckCircle2, CheckSquare, Code2, Cpu, ExternalLink, FileCode, Globe, HelpCircle, Layers, LayoutTemplate, RefreshCcw, Save, Search, ShieldAlert, Square, Trash2, UploadCloud, X } from "lucide-react";
import { toast } from "sonner";
//#region src/routes/control-hub.seo.tsx?tsr-split=component
var PAGE_GROUPS = [
	{
		category: "Product & Core",
		pages: [
			{
				path: "/",
				label: "/ (Home)",
				defaultPriority: "1.0",
				defaultFreq: "weekly"
			},
			{
				path: "/features",
				label: "/features (Features)",
				defaultPriority: "0.9",
				defaultFreq: "monthly"
			},
			{
				path: "/pricing",
				label: "/pricing (Pricing)",
				defaultPriority: "0.9",
				defaultFreq: "monthly"
			},
			{
				path: "/integrations",
				label: "/integrations (Integrations Directory)",
				defaultPriority: "0.9",
				defaultFreq: "weekly"
			},
			{
				path: "/onboarding",
				label: "/onboarding (Get Started / Onboarding)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/hotel-back-office-automation",
				label: "/hotel-back-office-automation (Hotel Back-Office Automation)",
				defaultPriority: "0.9",
				defaultFreq: "monthly"
			},
			{
				path: "/solutions/innrly-pay",
				label: "/solutions/innrly-pay (Innrly Pay)",
				defaultPriority: "0.9",
				defaultFreq: "monthly"
			},
			{
				path: "/solutions/innrly-shift",
				label: "/solutions/innrly-shift (Innrly Shift)",
				defaultPriority: "0.9",
				defaultFreq: "monthly"
			}
		]
	},
	{
		category: "Solutions",
		pages: [
			{
				path: "/solutions/business-intelligence",
				label: "/solutions/business-intelligence (Business Intelligence)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/solutions/financial-control",
				label: "/solutions/financial-control (Financial Control)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/solutions/operations-automation",
				label: "/solutions/operations-automation (Operations Automation)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/solutions/reconciliation",
				label: "/solutions/reconciliation (Reconciliation)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/solutions/expense-entries",
				label: "/solutions/expense-entries (Expense Entries)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/solutions/document-vault",
				label: "/solutions/document-vault (Document Vault)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/services/accountability-pack",
				label: "/services/accountability-pack (Accountability Pack)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			}
		]
	},
	{
		category: "Comparisons",
		pages: [
			{
				path: "/compare",
				label: "/compare (Compare Hub)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/compare/innrly-vs-otelier",
				label: "/compare/innrly-vs-otelier (Innrly vs Otelier)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/compare/innrly-vs-hotel-effectiveness",
				label: "/compare/innrly-vs-hotel-effectiveness (Innrly vs Hotel Effectiveness)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/compare/innrly-vs-nimble",
				label: "/compare/innrly-vs-nimble (Innrly vs Nimble Property)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/compare/innrly-vs-aptech",
				label: "/compare/innrly-vs-aptech (Innrly vs Aptech)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/compare/innrly-vs-profitsage",
				label: "/compare/innrly-vs-profitsage (Innrly vs ProfitSage)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/compare/innrly-vs-actabl",
				label: "/compare/innrly-vs-actabl (Innrly vs Actabl)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			}
		]
	},
	{
		category: "Integrations & PMS",
		pages: [
			{
				path: "/integrations/m3",
				label: "/integrations/m3 (Innrly + M3)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/integrations/inn-flow",
				label: "/integrations/inn-flow (Innrly + Inn-flow)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/integrations/quickbooks",
				label: "/integrations/quickbooks (Innrly + QuickBooks)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/integrations/opera",
				label: "/integrations/opera (Oracle Opera)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/integrations/cloudbeds",
				label: "/integrations/cloudbeds (Cloudbeds)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/integrations/mews",
				label: "/integrations/mews (Mews PMS)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/integrations/sage-intacct",
				label: "/integrations/sage-intacct (Sage Intacct)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			}
		]
	},
	{
		category: "Industries",
		pages: [
			{
				path: "/industries/select-service",
				label: "/industries/select-service (Select-Service Hotels)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/industries/full-service",
				label: "/industries/full-service (Full-Service Hotels)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/industries/extended-stay",
				label: "/industries/extended-stay (Extended-Stay Hotels)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			}
		]
	},
	{
		category: "Case Studies",
		pages: [
			{
				path: "/case-studies",
				label: "/case-studies (Case Studies Hub)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/case-studies/midwest-portfolio",
				label: "/case-studies/midwest-portfolio (Midwest Portfolio)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/case-studies/urban-full-service",
				label: "/case-studies/urban-full-service (Urban Full-Service)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/case-studies/hilton-management-company",
				label: "/case-studies/hilton-management-company (Hilton Management)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/case-studies/extended-stay-portfolio",
				label: "/case-studies/extended-stay-portfolio (Extended-Stay Portfolio)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/case-studies/boutique-group",
				label: "/case-studies/boutique-group (Independent Boutique Group)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			}
		]
	},
	{
		category: "Resources & Tools",
		pages: [
			{
				path: "/blog",
				label: "/blog (Blog Index)",
				defaultPriority: "0.9",
				defaultFreq: "daily"
			},
			{
				path: "/glossary",
				label: "/glossary (Glossary)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/roi-calculator",
				label: "/roi-calculator (ROI Calculator)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			}
		]
	},
	{
		category: "Blog Articles",
		pages: [
			{
				path: "/blog/ota-reconciliation-guide",
				label: "/blog/ota-reconciliation-guide (OTA Reconciliation Guide)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/hotel-night-audit-software-guide",
				label: "/blog/hotel-night-audit-software-guide (Night Audit Software Guide)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/multi-property-hotel-accounting-software",
				label: "/blog/multi-property-hotel-accounting-software (Multi-Property Accounting Guide)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/hotel-budgeting-software-2026",
				label: "/blog/hotel-budgeting-software-2026 (Hotel Budgeting Software)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/select-service-back-office-savings",
				label: "/blog/select-service-back-office-savings (Select-Service Savings)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/mpor-explained",
				label: "/blog/mpor-explained (MPOR Explained)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/quickbooks-for-hotels-limits",
				label: "/blog/quickbooks-for-hotels-limits (QuickBooks Limits)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/hospitality-accounting-services-vs-software",
				label: "/blog/hospitality-accounting-services-vs-software (Services vs Software)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/best-hotel-accounting-software",
				label: "/blog/best-hotel-accounting-software (Best Accounting Software)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/hotel-back-office-automation",
				label: "/blog/hotel-back-office-automation (Back-Office Automation)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/night-audit-automation",
				label: "/blog/night-audit-automation (Night Audit Automation)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/multi-property-accounting-software",
				label: "/blog/multi-property-accounting-software (Multi-Property Accounting 2)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/ap-automation-hotels",
				label: "/blog/ap-automation-hotels (AP Automation Hotels)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/hotel-labor-cost-percentage",
				label: "/blog/hotel-labor-cost-percentage (Labor Cost Percentage)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/innrly-vs-inn-flow",
				label: "/blog/innrly-vs-inn-flow (Innrly vs Inn-Flow)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/pms-vs-back-office-automation",
				label: "/blog/pms-vs-back-office-automation (PMS vs Back-Office)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/hotel-night-audit-checklist",
				label: "/blog/hotel-night-audit-checklist (Night Audit Checklist)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/hotel-ota-commission-reconciliation",
				label: "/blog/hotel-ota-commission-reconciliation (OTA Commission Reconciliation)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/five-back-office-wins",
				label: "/blog/five-back-office-wins (Five Back-Office Wins)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/labor-cost-blind-spots",
				label: "/blog/labor-cost-blind-spots (Labor Cost Blind Spots)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/ota-commission-audit",
				label: "/blog/ota-commission-audit (OTA Commission Audit)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/smarter-timeclock-system-innrly",
				label: "/blog/smarter-timeclock-system-innrly (Smarter TimeClock System)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/ditching-excel-budgeting-software",
				label: "/blog/ditching-excel-budgeting-software (Ditching Excel for Budgeting)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/backofhouse-robotics-solving-labor-shortages-with-ai-chefs-and-automated-housekeeping",
				label: "/blog/backofhouse-robotics (Back-of-House Robotics)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/hyperpersonalization-20-leveraging-ai-and-biometric-data-for-bespoke-guest-experiences",
				label: "/blog/hyperpersonalization-20 (Hyper-Personalization 2.0)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/lean-teams-smart-software-hotel-profits",
				label: "/blog/lean-teams-smart-software-hotel-profits (Lean Teams & Smart Software)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/future-hospitality-accounting-software",
				label: "/blog/future-hospitality-accounting-software (Future Hospitality Accounting)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/labor-shortages-urban-revitalization",
				label: "/blog/labor-shortages-urban-revitalization (Labor Shortages & Urban Revitalization)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/us-hospitality-2025",
				label: "/blog/us-hospitality-2025 (Where is US Hospitality Headed)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/regenerative-tourism-sustainability",
				label: "/blog/regenerative-tourism-sustainability (Regenerative Tourism)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/blog/hotels-losing-thousands-clc-mistakes",
				label: "/blog/hotels-losing-thousands-clc-mistakes (Hotels Losing to CLC Mistakes)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			}
		]
	},
	{
		category: "Company",
		pages: [
			{
				path: "/about",
				label: "/about (About Us)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/contact",
				label: "/contact (Contact & Demo)",
				defaultPriority: "0.8",
				defaultFreq: "monthly"
			},
			{
				path: "/security",
				label: "/security (Security & Trust)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			},
			{
				path: "/developers",
				label: "/developers (Developers Portal)",
				defaultPriority: "0.7",
				defaultFreq: "monthly"
			}
		]
	},
	{
		category: "Legal",
		pages: [
			{
				path: "/legal/privacy",
				label: "/legal/privacy (Privacy Policy)",
				defaultPriority: "0.4",
				defaultFreq: "yearly"
			},
			{
				path: "/legal/terms",
				label: "/legal/terms (Terms of Service)",
				defaultPriority: "0.4",
				defaultFreq: "yearly"
			},
			{
				path: "/legal/subscription",
				label: "/legal/subscription (Subscription Agreement)",
				defaultPriority: "0.4",
				defaultFreq: "yearly"
			},
			{
				path: "/legal/security",
				label: "/legal/security (Security Policy)",
				defaultPriority: "0.4",
				defaultFreq: "yearly"
			},
			{
				path: "/legal/cookies",
				label: "/legal/cookies (Cookie Policy)",
				defaultPriority: "0.4",
				defaultFreq: "yearly"
			},
			{
				path: "/legal/accessibility",
				label: "/legal/accessibility (Accessibility Statement)",
				defaultPriority: "0.4",
				defaultFreq: "yearly"
			}
		]
	},
	{
		category: "System & Error Pages",
		pages: [{
			path: "/404",
			label: "/404 (404 Page Not Found)",
			defaultPriority: "0.1",
			defaultFreq: "never",
			defaultInSitemap: false
		}]
	}
];
var PAGES = PAGE_GROUPS.flatMap((g) => g.pages.map((p) => p.path));
var DEFAULT_ROBOTS_TXT = `User-agent: *
Allow: /

# Exclude internal admin and control hub
Disallow: /control-hub
Disallow: /control-hub/*
Disallow: /api/admin/*

Sitemap: https://innrly.com/sitemap.xml
`;
function ControlHubSeoPage() {
	const [activeTab, setActiveTab] = useState("pages");
	const [selectedPage, setSelectedPage] = useState("/");
	const [data, setData] = useState(() => {
		const init = defaultSeoData["/"] || { title: "" };
		return {
			page_path: "/",
			title: init.title || "",
			description: init.description || "",
			keywords: init.keywords || "",
			og_title: init.og_title || init.ogTitle || init.title || "",
			og_description: init.og_description || init.ogDescription || init.description || "",
			og_image: init.og_image || init.ogImage || "",
			canonical_url: init.canonical_url || init.canonical || "",
			robots_meta: init.robots_meta || init.robots || "index, follow",
			structured_data: init.structured_data || init.structuredData || "",
			in_sitemap: init.inSitemap !== void 0 ? init.inSitemap : true,
			priority: init.priority || "1.0",
			changefreq: init.changefreq || "daily"
		};
	});
	const [loading, setLoading] = useState(false);
	const [saving, setSaving] = useState(false);
	const [uploadingOgImage, setUploadingOgImage] = useState(false);
	const fileInputRef = useRef(null);
	const [sitemapItems, setSitemapItems] = useState([]);
	const [sitemapLoading, setSitemapLoading] = useState(false);
	const [sitemapSaving, setSitemapSaving] = useState(false);
	const [sitemapSearch, setSitemapSearch] = useState("");
	const [robotsTxt, setRobotsTxt] = useState(DEFAULT_ROBOTS_TXT);
	const [robotsLoading, setRobotsLoading] = useState(false);
	const [robotsSaving, setRobotsSaving] = useState(false);
	const [llmsTab, setLlmsTab] = useState("standard");
	const [llmsTxt, setLlmsTxt] = useState("");
	const [llmsFullTxt, setLlmsFullTxt] = useState("");
	const [llmsLoading, setLlmsLoading] = useState(false);
	const [llmsSaving, setLlmsSaving] = useState(false);
	const [scriptsData, setScriptsData] = useState({ ...defaultSiteScripts });
	const [scriptsLoading, setScriptsLoading] = useState(false);
	const [scriptsSaving, setScriptsSaving] = useState(false);
	const API_BASE = typeof window === "undefined" ? process.env.BACKEND_URL || "http://127.0.0.1:8005" : "/api";
	useEffect(() => {
		if (hasPermission("seo")) {
			loadPageData(selectedPage);
			loadScriptsData();
			loadSitemapData();
			loadRobotsData();
			loadLlmsData();
		}
	}, [selectedPage]);
	if (!hasPermission("seo")) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-amber-200 bg-amber-50/50 p-12 text-center text-slate-700 max-w-xl mx-auto my-8 shadow-sm",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-4 shadow-sm",
				children: /* @__PURE__ */ jsx(ShieldAlert, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-lg font-bold text-slate-900 mb-1",
				children: "Module Access Restricted"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-xs text-slate-600",
				children: "You do not currently have permission to access the SEO Editor. Please contact your Super Administrator."
			})
		]
	});
	async function loadPageData(path) {
		setLoading(true);
		const serverData = await fetchSeoData(path);
		if (serverData && serverData.title) setData({
			page_path: path,
			title: serverData.title || "",
			description: serverData.description || "",
			keywords: serverData.keywords || "",
			og_title: serverData.og_title || serverData.ogTitle || serverData.title || "",
			og_description: serverData.og_description || serverData.ogDescription || serverData.description || "",
			og_image: serverData.og_image || serverData.ogImage || defaultSeoData[path]?.og_image || defaultSeoData[path]?.ogImage || "",
			canonical_url: serverData.canonical_url || serverData.canonical || "",
			robots_meta: serverData.robots_meta || serverData.robots || "index, follow",
			structured_data: serverData.structured_data || serverData.structuredData || "",
			in_sitemap: serverData.in_sitemap !== void 0 ? Boolean(serverData.in_sitemap) : serverData.inSitemap !== void 0 ? Boolean(serverData.inSitemap) : true,
			priority: serverData.priority || "0.8",
			changefreq: serverData.changefreq || "monthly"
		});
		else {
			const fallback = defaultSeoData[path] ? { ...defaultSeoData[path] } : { title: "" };
			setData({
				page_path: path,
				title: fallback.title || "",
				description: fallback.description || "",
				keywords: fallback.keywords || "",
				og_title: fallback.og_title || fallback.ogTitle || fallback.title || "",
				og_description: fallback.og_description || fallback.ogDescription || fallback.description || "",
				og_image: fallback.og_image || fallback.ogImage || "",
				canonical_url: fallback.canonical_url || fallback.canonical || "",
				robots_meta: fallback.robots_meta || fallback.robots || "index, follow",
				structured_data: fallback.structured_data || fallback.structuredData || "",
				in_sitemap: fallback.inSitemap !== void 0 ? Boolean(fallback.inSitemap) : true,
				priority: fallback.priority || "0.8",
				changefreq: fallback.changefreq || "monthly"
			});
		}
		setLoading(false);
	}
	async function loadScriptsData() {
		setScriptsLoading(true);
		setScriptsData(await fetchSiteScripts());
		setScriptsLoading(false);
	}
	async function loadSitemapData() {
		setSitemapLoading(true);
		try {
			const res = await fetch(`${API_BASE}/sitemap-entries`);
			if (res.ok) {
				const json = await res.json();
				const seoMap = json.seo_map || {};
				const blogs = json.blogs || [];
				const staticList = [];
				PAGE_GROUPS.forEach((group) => {
					group.pages.forEach((p) => {
						const saved = seoMap[p.path];
						const defaultInSitemap = p.defaultInSitemap !== void 0 ? p.defaultInSitemap : true;
						staticList.push({
							path: p.path,
							label: p.label,
							category: group.category,
							in_sitemap: saved ? Boolean(saved.in_sitemap) : defaultInSitemap,
							priority: saved && saved.priority || p.defaultPriority || "0.8",
							changefreq: saved && saved.changefreq || p.defaultFreq || "monthly",
							isBlog: false
						});
					});
				});
				blogs.forEach((b) => {
					staticList.push({
						path: `/blog/${b.slug}`,
						label: `/blog/${b.slug} (${b.title})`,
						category: "Blog Posts",
						in_sitemap: b.in_sitemap !== void 0 ? Boolean(b.in_sitemap) : true,
						priority: "0.7",
						changefreq: "monthly",
						isBlog: true
					});
				});
				setSitemapItems(staticList);
			}
		} catch (e) {
			console.error("Failed to load sitemap entries", e);
		} finally {
			setSitemapLoading(false);
		}
	}
	async function loadRobotsData() {
		setRobotsLoading(true);
		try {
			const res = await fetch(`${API_BASE}/robots-txt`);
			if (res.ok) {
				const json = await res.json();
				if (json.content) setRobotsTxt(json.content);
			}
		} catch (e) {
			console.error("Failed to load robots.txt", e);
		} finally {
			setRobotsLoading(false);
		}
	}
	async function loadLlmsData() {
		setLlmsLoading(true);
		try {
			const res = await fetch(`${API_BASE}/llms-txt`);
			if (res.ok) {
				const json = await res.json();
				setLlmsTxt(json.llms_txt || "");
				setLlmsFullTxt(json.llms_full_txt || "");
			}
		} catch (e) {
			console.error("Failed to load llms.txt", e);
		} finally {
			setLlmsLoading(false);
		}
	}
	async function handleOgImageUpload(file) {
		setUploadingOgImage(true);
		try {
			const formData = new FormData();
			formData.append("file", file);
			const res = await fetch(`${API_BASE}/admin/seo/upload-og-image`, {
				method: "POST",
				headers: getAdminAuthHeaders(),
				body: formData
			});
			if (res.ok) {
				const resData = await res.json();
				setData((prev) => ({
					...prev,
					og_image: resData.url
				}));
				toast.success("Social banner image uploaded successfully!");
			} else {
				const resFallback = await fetch(`${API_BASE}/upload`, {
					method: "POST",
					headers: getAdminAuthHeaders(),
					body: formData
				});
				if (resFallback.ok) {
					const resData2 = await resFallback.json();
					setData((prev) => ({
						...prev,
						og_image: resData2.url
					}));
					toast.success("Social banner image uploaded successfully!");
				} else toast.error("Failed to upload image. Supported: JPG, PNG, WebP, SVG.");
			}
		} catch (e) {
			toast.error("Network error during image upload.");
		} finally {
			setUploadingOgImage(false);
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	}
	async function handleSavePageSeo() {
		setSaving(true);
		try {
			if ((await fetch(`${API_BASE}/seo`, {
				method: "POST",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify(data)
			})).ok) {
				toast.success(`SEO metadata saved for ${selectedPage}`);
				loadSitemapData();
			} else toast.error("Failed to save SEO metadata.");
		} catch {
			toast.error("Network error while saving.");
		}
		setSaving(false);
	}
	function handleResetPageSeo() {
		setData({
			...defaultSeoData[selectedPage] ? defaultSeoData[selectedPage] : {
				page_path: selectedPage,
				title: ""
			},
			in_sitemap: true,
			priority: "0.8",
			changefreq: "monthly"
		});
		toast.info("Reset to static defaults. Don't forget to save.");
	}
	async function handleSaveSitemapBulk() {
		setSitemapSaving(true);
		try {
			let successCount = 0;
			for (const item of sitemapItems) if (!item.isBlog) {
				if ((await fetch(`${API_BASE}/seo`, {
					method: "POST",
					headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
					body: JSON.stringify({
						page_path: item.path,
						title: defaultSeoData[item.path]?.title || item.label,
						in_sitemap: item.in_sitemap,
						priority: item.priority,
						changefreq: item.changefreq
					})
				})).ok) successCount++;
			}
			toast.success(`Sitemap configuration saved (${successCount} pages updated).`);
		} catch (e) {
			toast.error("Error saving sitemap settings.");
		} finally {
			setSitemapSaving(false);
		}
	}
	async function handleSaveRobots() {
		setRobotsSaving(true);
		try {
			if ((await fetch(`${API_BASE}/robots-txt`, {
				method: "POST",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify({
					key: "robots_txt",
					value: robotsTxt
				})
			})).ok) toast.success("robots.txt updated and live!");
			else toast.error("Failed to save robots.txt");
		} catch {
			toast.error("Network error while saving robots.txt");
		} finally {
			setRobotsSaving(false);
		}
	}
	async function handleSaveLlms() {
		setLlmsSaving(true);
		try {
			if ((await fetch(`${API_BASE}/llms-txt`, {
				method: "POST",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify({
					llms_txt: llmsTxt,
					llms_full_txt: llmsFullTxt
				})
			})).ok) toast.success("AI search documents (llms.txt) updated successfully!");
			else toast.error("Failed to save llms.txt");
		} catch {
			toast.error("Network error while saving llms.txt");
		} finally {
			setLlmsSaving(false);
		}
	}
	async function handleSaveScripts() {
		setScriptsSaving(true);
		try {
			if ((await fetch(`${API_BASE}/settings/scripts`, {
				method: "POST",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify(scriptsData)
			})).ok) toast.success("Header and Footer tags saved successfully.");
			else toast.error("Failed to save tags and scripts.");
		} catch {
			toast.error("Network error while saving scripts.");
		}
		setScriptsSaving(false);
	}
	const filteredSitemapItems = sitemapItems.filter((i) => i.path.toLowerCase().includes(sitemapSearch.toLowerCase()) || i.label.toLowerCase().includes(sitemapSearch.toLowerCase()) || i.category.toLowerCase().includes(sitemapSearch.toLowerCase()));
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-7xl mx-auto space-y-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-slate-200 pb-5",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-bold text-slate-900 tracking-tight",
					children: "SEO & Search Engine Hub"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1 text-xs text-slate-500",
					children: "Control page metadata, sitemap.xml inclusion, robots.txt, AI search engine (llms.txt) files, and global scripts."
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center bg-slate-100 p-1 rounded-xl border border-slate-200 gap-1",
					children: [
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setActiveTab("pages"),
							className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeTab === "pages" ? "bg-white text-indigo-600 shadow-sm font-bold" : "text-slate-600 hover:text-slate-900"}`,
							children: [/* @__PURE__ */ jsx(Layers, { className: "h-3.5 w-3.5" }), "Meta Tags"]
						}),
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setActiveTab("sitemap"),
							className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeTab === "sitemap" ? "bg-white text-indigo-600 shadow-sm font-bold" : "text-slate-600 hover:text-slate-900"}`,
							children: [/* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5" }), "sitemap.xml"]
						}),
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setActiveTab("robots"),
							className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeTab === "robots" ? "bg-white text-indigo-600 shadow-sm font-bold" : "text-slate-600 hover:text-slate-900"}`,
							children: [/* @__PURE__ */ jsx(Bot, { className: "h-3.5 w-3.5" }), "robots.txt"]
						}),
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setActiveTab("llms"),
							className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeTab === "llms" ? "bg-white text-indigo-600 shadow-sm font-bold" : "text-slate-600 hover:text-slate-900"}`,
							children: [/* @__PURE__ */ jsx(Cpu, { className: "h-3.5 w-3.5" }), "llms.txt (AI Search)"]
						}),
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setActiveTab("scripts"),
							className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeTab === "scripts" ? "bg-white text-indigo-600 shadow-sm font-bold" : "text-slate-600 hover:text-slate-900"}`,
							children: [/* @__PURE__ */ jsx(Code2, { className: "h-3.5 w-3.5" }), "Site Scripts"]
						})
					]
				})]
			}),
			activeTab === "pages" && /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 text-xs text-slate-500 font-medium",
						children: [/* @__PURE__ */ jsx("span", { children: "Editing metadata for:" }), /* @__PURE__ */ jsx("span", {
							className: "bg-slate-100 px-2 py-0.5 rounded text-indigo-600 font-mono font-semibold",
							children: selectedPage
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							onClick: handleResetPageSeo,
							className: "gap-2 text-xs text-white",
							children: [/* @__PURE__ */ jsx(RefreshCcw, { className: "h-3.5 w-3.5" }), "Reset Defaults"]
						}), /* @__PURE__ */ jsxs(Button, {
							onClick: handleSavePageSeo,
							disabled: saving || loading,
							className: "gap-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-semibold",
							children: [/* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }), saving ? "Saving..." : "Save Page SEO"]
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-12 gap-8 items-start",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "col-span-12 lg:col-span-5 space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-5",
								children: [/* @__PURE__ */ jsxs(Label, {
									className: "text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block",
									children: [
										"Target Page (",
										PAGES.length,
										" Core Pages)"
									]
								}), /* @__PURE__ */ jsx("select", {
									value: selectedPage,
									onChange: (e) => setSelectedPage(e.target.value),
									className: "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium text-slate-800",
									children: PAGE_GROUPS.map((group) => /* @__PURE__ */ jsx("optgroup", {
										label: group.category,
										children: group.pages.map((p) => /* @__PURE__ */ jsx("option", {
											value: p.path,
											children: p.label
										}, p.path))
									}, group.category))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 border-b border-slate-100 pb-3",
										children: [/* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-slate-400" }), /* @__PURE__ */ jsx("h3", {
											className: "text-xs font-bold uppercase tracking-wider text-slate-700",
											children: "Search Meta Tags"
										})]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ jsxs(Label, {
											htmlFor: "title",
											className: "text-xs font-semibold text-slate-600",
											children: ["Page Title ", /* @__PURE__ */ jsx("span", {
												className: "text-indigo-500",
												children: "*"
											})]
										}), /* @__PURE__ */ jsxs("span", {
											className: `text-[10px] font-mono ${(data.title || "").length > 60 ? "text-amber-600 font-bold" : "text-slate-400"}`,
											children: [(data.title || "").length, " / 60"]
										})]
									}), /* @__PURE__ */ jsx(Input, {
										id: "title",
										value: data.title,
										onChange: (e) => setData({
											...data,
											title: e.target.value
										}),
										placeholder: "Page Title",
										className: "mt-1 bg-slate-50 border-slate-200 text-xs focus-visible:ring-indigo-500/20 font-medium"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ jsx(Label, {
											htmlFor: "description",
											className: "text-xs font-semibold text-slate-600",
											children: "Meta Description"
										}), /* @__PURE__ */ jsxs("span", {
											className: `text-[10px] font-mono ${(data.description || "").length > 160 ? "text-amber-600 font-bold" : "text-slate-400"}`,
											children: [(data.description || "").length, " / 160"]
										})]
									}), /* @__PURE__ */ jsx(Textarea, {
										id: "description",
										rows: 3,
										value: data.description || "",
										onChange: (e) => setData({
											...data,
											description: e.target.value
										}),
										placeholder: "Brief description for search snippet.",
										className: "mt-1 bg-slate-50 border-slate-200 text-xs focus-visible:ring-indigo-500/20 resize-none"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "keywords",
										className: "text-xs font-semibold text-slate-600",
										children: "Meta Keywords (comma separated)"
									}), /* @__PURE__ */ jsx(Input, {
										id: "keywords",
										value: data.keywords || "",
										onChange: (e) => setData({
											...data,
											keywords: e.target.value
										}),
										placeholder: "hotel software, back office, reconciliation",
										className: "mt-1 bg-slate-50 border-slate-200 text-xs focus-visible:ring-indigo-500/20"
									})] })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 border-b border-slate-100 pb-3",
										children: [/* @__PURE__ */ jsx(LayoutTemplate, { className: "h-4 w-4 text-slate-400" }), /* @__PURE__ */ jsx("h3", {
											className: "text-xs font-bold uppercase tracking-wider text-slate-700",
											children: "OpenGraph & Social Share"
										})]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "og_title",
										className: "text-xs font-semibold text-slate-600",
										children: "Social Title (og:title)"
									}), /* @__PURE__ */ jsx(Input, {
										id: "og_title",
										value: data.og_title || "",
										onChange: (e) => setData({
											...data,
											og_title: e.target.value
										}),
										placeholder: "Defaults to Page Title if empty",
										className: "mt-1 bg-slate-50 border-slate-200 text-xs focus-visible:ring-indigo-500/20"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "og_description",
										className: "text-xs font-semibold text-slate-600",
										children: "Social Description (og:description)"
									}), /* @__PURE__ */ jsx(Textarea, {
										id: "og_description",
										rows: 2,
										value: data.og_description || "",
										onChange: (e) => setData({
											...data,
											og_description: e.target.value
										}),
										placeholder: "Defaults to Meta Description if empty",
										className: "mt-1 bg-slate-50 border-slate-200 text-xs focus-visible:ring-indigo-500/20 resize-none"
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "og_image_upload",
													className: "text-xs font-semibold text-slate-600",
													children: "Social Banner Image (og:image)"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[10px] font-medium text-slate-400",
													children: "1200 × 630 px"
												})]
											}),
											data.og_image ? /* @__PURE__ */ jsxs("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "relative rounded-lg overflow-hidden border border-slate-200 bg-slate-50 aspect-[1.91/1] flex items-center justify-center group shadow-sm",
													children: [/* @__PURE__ */ jsx("img", {
														src: data.og_image,
														alt: "Social banner",
														className: "w-full h-full object-cover",
														onError: (e) => {
															e.target.src = "/uploads/innrly-logo.png";
														}
													}), /* @__PURE__ */ jsx("button", {
														type: "button",
														onClick: () => setData({
															...data,
															og_image: ""
														}),
														className: "absolute top-2 right-2 bg-rose-600/90 hover:bg-rose-700 text-white p-1.5 rounded-full shadow-md transition-all hover:scale-105",
														title: "Remove Image",
														children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
													})]
												}), /* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ jsxs(Button, {
														type: "button",
														variant: "outline",
														size: "sm",
														onClick: () => fileInputRef.current?.click(),
														className: "text-xs flex-1 gap-1.5 h-8 font-medium border-slate-200 hover:bg-slate-50 text-slate-700",
														disabled: uploadingOgImage,
														children: [/* @__PURE__ */ jsx(UploadCloud, { className: "h-3.5 w-3.5 text-indigo-600" }), uploadingOgImage ? "Uploading..." : "Replace Image"]
													}), /* @__PURE__ */ jsxs(Button, {
														type: "button",
														variant: "ghost",
														size: "sm",
														onClick: () => setData({
															...data,
															og_image: ""
														}),
														className: "text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 h-8 px-2.5 gap-1",
														children: [/* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }), "Remove"]
													})]
												})]
											}) : /* @__PURE__ */ jsxs("div", {
												onClick: () => fileInputRef.current?.click(),
												onDragOver: (e) => {
													e.preventDefault();
													e.stopPropagation();
												},
												onDrop: (e) => {
													e.preventDefault();
													e.stopPropagation();
													const file = e.dataTransfer.files?.[0];
													if (file) handleOgImageUpload(file);
												},
												className: "border-2 border-dashed border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/20 rounded-xl p-5 text-center cursor-pointer transition-all space-y-2 bg-slate-50/50",
												children: [
													/* @__PURE__ */ jsx("div", {
														className: "w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-100 shadow-sm",
														children: /* @__PURE__ */ jsx(UploadCloud, { className: "h-5 w-5" })
													}),
													/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
														className: "text-xs font-semibold text-slate-700",
														children: "Click or drag to upload social banner"
													}), /* @__PURE__ */ jsx("p", {
														className: "text-[10px] text-slate-400 mt-0.5",
														children: "PNG, JPG, WebP, SVG up to 10MB (1200 × 630 recommended)"
													})] }),
													uploadingOgImage && /* @__PURE__ */ jsx("p", {
														className: "text-xs text-indigo-600 font-semibold animate-pulse",
														children: "Uploading file..."
													})
												]
											}),
											/* @__PURE__ */ jsx("input", {
												ref: fileInputRef,
												type: "file",
												accept: "image/*",
												className: "hidden",
												onChange: (e) => {
													const file = e.target.files?.[0];
													if (file) handleOgImageUpload(file);
												}
											})
										]
									})
								]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "col-span-12 lg:col-span-7 space-y-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between border-b border-slate-100 pb-3",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-indigo-600" }), /* @__PURE__ */ jsx("h3", {
										className: "text-sm font-semibold text-slate-800",
										children: "Google Search Result Preview"
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-medium text-slate-400",
									children: "Desktop & Mobile"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "bg-slate-50 border border-slate-200 rounded-xl p-4 font-sans space-y-1",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-xs text-slate-500",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "w-4 h-4 rounded-full bg-indigo-600 text-white text-[9px] flex items-center justify-center font-bold",
												children: "i"
											}),
											/* @__PURE__ */ jsx("span", { children: "innrly.com" }),
											/* @__PURE__ */ jsx("span", {
												className: "text-slate-300",
												children: "›"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-slate-600 font-mono",
												children: selectedPage === "/" ? "" : selectedPage.replace(/^\//, "")
											})
										]
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "text-base font-medium text-blue-700 hover:underline cursor-pointer truncate",
										children: data.title || "Page Title"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-slate-600 line-clamp-2 leading-relaxed",
										children: data.description || "Enter a meta description to see how this page appears on Google search results."
									})
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between border-b border-slate-100 pb-3",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(LayoutTemplate, { className: "h-4 w-4 text-indigo-600" }), /* @__PURE__ */ jsx("h3", {
										className: "text-sm font-semibold text-slate-800",
										children: "Social Card Preview (LinkedIn / Twitter / Slack)"
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-medium text-slate-400",
									children: "1200 × 630 Card"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-sm",
								children: [/* @__PURE__ */ jsx("div", {
									className: "aspect-[1.91/1] bg-slate-200 relative overflow-hidden flex items-center justify-center",
									children: data.og_image ? /* @__PURE__ */ jsx("img", {
										src: data.og_image,
										alt: "Social preview banner",
										className: "w-full h-full object-cover",
										onError: (e) => {
											e.target.src = "/uploads/innrly-logo.png";
										}
									}) : /* @__PURE__ */ jsxs("div", {
										className: "text-slate-400 text-xs flex items-center gap-2 font-medium",
										children: [/* @__PURE__ */ jsx(LayoutTemplate, { className: "h-5 w-5" }), " Default Innrly Banner"]
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-4 bg-white border-t border-slate-100 space-y-1",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "text-[10px] uppercase font-semibold text-slate-400 tracking-wider",
											children: "innrly.com"
										}),
										/* @__PURE__ */ jsx("h4", {
											className: "text-sm font-bold text-slate-900 line-clamp-1",
											children: data.og_title || data.title || "Page Title"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-slate-500 line-clamp-2",
											children: data.og_description || data.description || "Innrly Hospitality Management Platform"
										})
									]
								})]
							})]
						})]
					})]
				})]
			}),
			activeTab === "sitemap" && /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-lg font-bold text-slate-900",
							children: "Sitemap.xml Inclusion & Priority Controls"
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-xs text-slate-500",
							children: [
								"Choose which pages and blog posts are indexed in ",
								/* @__PURE__ */ jsx("code", {
									className: "bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-mono",
									children: "/sitemap.xml"
								}),
								"."
							]
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "/sitemap.xml",
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg",
								children: [/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" }), "View Live sitemap.xml"]
							}), /* @__PURE__ */ jsxs(Button, {
								onClick: handleSaveSitemapBulk,
								disabled: sitemapSaving || sitemapLoading,
								className: "gap-1.5 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-semibold",
								children: [/* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }), sitemapSaving ? "Saving..." : "Save All Sitemap Settings"]
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative flex-1 max-w-md",
							children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }), /* @__PURE__ */ jsx("input", {
								type: "text",
								placeholder: "Search sitemap URLs...",
								value: sitemapSearch,
								onChange: (e) => setSitemapSearch(e.target.value),
								className: "w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-indigo-500"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => {
									setSitemapItems(sitemapItems.map((i) => ({
										...i,
										in_sitemap: true
									})));
									toast.info("All pages set to Included in Sitemap.");
								},
								className: "text-xs text-white gap-1",
								children: [/* @__PURE__ */ jsx(CheckSquare, { className: "h-3.5 w-3.5" }), " Include All"]
							}), /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => {
									setSitemapItems(sitemapItems.map((i) => ({
										...i,
										in_sitemap: false
									})));
									toast.info("All pages excluded from Sitemap.");
								},
								className: "text-xs text-white gap-1",
								children: [/* @__PURE__ */ jsx(Square, { className: "h-3.5 w-3.5" }), " Exclude All"]
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm",
						children: /* @__PURE__ */ jsx("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ jsxs("table", {
								className: "w-full text-left text-xs text-slate-600",
								children: [/* @__PURE__ */ jsx("thead", {
									className: "bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200",
									children: /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("th", {
											className: "py-3 px-4",
											children: "Page / URL"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "py-3 px-4",
											children: "Category"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "py-3 px-4 text-center",
											children: "In Sitemap"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "py-3 px-4",
											children: "Priority"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "py-3 px-4",
											children: "Change Frequency"
										})
									] })
								}), /* @__PURE__ */ jsx("tbody", {
									className: "divide-y divide-slate-100",
									children: filteredSitemapItems.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
										colSpan: 5,
										className: "py-8 text-center text-slate-400",
										children: sitemapLoading ? "Loading sitemap items..." : "No items found."
									}) }) : filteredSitemapItems.map((item, idx) => /* @__PURE__ */ jsxs("tr", {
										className: `hover:bg-slate-50/60 transition-colors ${!item.in_sitemap ? "bg-slate-50/40 text-slate-400" : ""}`,
										children: [
											/* @__PURE__ */ jsxs("td", {
												className: "py-3 px-4",
												children: [/* @__PURE__ */ jsx("div", {
													className: "font-medium text-slate-900 font-mono text-xs truncate max-w-md",
													children: item.path
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[10px] text-slate-400 truncate block",
													children: item.label
												})]
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-3 px-4",
												children: /* @__PURE__ */ jsx("span", {
													className: "inline-block bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-medium",
													children: item.category
												})
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-3 px-4 text-center",
												children: /* @__PURE__ */ jsx("input", {
													type: "checkbox",
													checked: item.in_sitemap,
													onChange: (e) => {
														const updated = [...sitemapItems];
														const target = updated.find((x) => x.path === item.path);
														if (target) target.in_sitemap = e.target.checked;
														setSitemapItems(updated);
													},
													className: "w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer"
												})
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-3 px-4",
												children: /* @__PURE__ */ jsxs("select", {
													value: item.priority,
													disabled: !item.in_sitemap || item.isBlog,
													onChange: (e) => {
														const updated = [...sitemapItems];
														const target = updated.find((x) => x.path === item.path);
														if (target) target.priority = e.target.value;
														setSitemapItems(updated);
													},
													className: "bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs font-mono disabled:opacity-50",
													children: [
														/* @__PURE__ */ jsx("option", {
															value: "1.0",
															children: "1.0"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "0.9",
															children: "0.9"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "0.8",
															children: "0.8"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "0.7",
															children: "0.7"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "0.6",
															children: "0.6"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "0.5",
															children: "0.5"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "0.3",
															children: "0.3"
														})
													]
												})
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-3 px-4",
												children: /* @__PURE__ */ jsxs("select", {
													value: item.changefreq,
													disabled: !item.in_sitemap || item.isBlog,
													onChange: (e) => {
														const updated = [...sitemapItems];
														const target = updated.find((x) => x.path === item.path);
														if (target) target.changefreq = e.target.value;
														setSitemapItems(updated);
													},
													className: "bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs font-mono disabled:opacity-50",
													children: [
														/* @__PURE__ */ jsx("option", {
															value: "always",
															children: "always"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "hourly",
															children: "hourly"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "daily",
															children: "daily"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "weekly",
															children: "weekly"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "monthly",
															children: "monthly"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "yearly",
															children: "yearly"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "never",
															children: "never"
														})
													]
												})
											})
										]
									}, item.path))
								})]
							})
						})
					})
				]
			}),
			activeTab === "robots" && /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-lg font-bold text-slate-900",
						children: "Editable robots.txt Directives"
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-xs text-slate-500",
						children: [
							"Configure search crawler rules served dynamically at ",
							/* @__PURE__ */ jsx("code", {
								className: "bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-mono",
								children: "https://innrly.com/robots.txt"
							}),
							"."
						]
					})] }), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "/robots.txt",
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg",
							children: [/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" }), "View Live robots.txt"]
						}), /* @__PURE__ */ jsxs(Button, {
							onClick: handleSaveRobots,
							disabled: robotsSaving || robotsLoading,
							className: "gap-1.5 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-semibold",
							children: [/* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }), robotsSaving ? "Saving..." : "Save & Publish robots.txt"]
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-2 space-y-4 bg-white border border-slate-200 rounded-xl p-6 shadow-sm",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between border-b border-slate-100 pb-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(FileCode, { className: "h-4 w-4 text-slate-500" }), /* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold uppercase tracking-wider text-slate-700",
									children: "robots.txt editor"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "flex gap-2",
								children: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => {
										setRobotsTxt(DEFAULT_ROBOTS_TXT);
										toast.info("Reset to production standard template.");
									},
									className: "text-xs text-white",
									children: "Reset Template"
								})
							})]
						}), /* @__PURE__ */ jsx(Textarea, {
							rows: 16,
							value: robotsTxt,
							onChange: (e) => setRobotsTxt(e.target.value),
							placeholder: "User-agent: *...",
							className: "font-mono text-xs bg-slate-900 text-emerald-400 p-4 rounded-lg focus-visible:ring-indigo-500/20 leading-relaxed resize-y"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-4 bg-white border border-slate-200 rounded-xl p-6 shadow-sm",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 border-b border-slate-100 pb-3",
							children: [/* @__PURE__ */ jsx(HelpCircle, { className: "h-4 w-4 text-indigo-600" }), /* @__PURE__ */ jsx("h3", {
								className: "text-xs font-bold uppercase tracking-wider text-slate-700",
								children: "Robots.txt Best Practices"
							})]
						}), /* @__PURE__ */ jsxs("ul", {
							className: "text-xs text-slate-600 space-y-2 leading-relaxed",
							children: [
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: "User-agent: *" }), " applies rules to Googlebot, Bingbot, Applebot, and general web indexers."] })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: "Disallow: /control-hub" }), " blocks search engines from crawling the administration dashboard."] })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("span", { children: [
										"Always include the ",
										/* @__PURE__ */ jsx("strong", { children: "Sitemap:" }),
										" directive pointing to your full sitemap XML URL."
									] })]
								})
							]
						})]
					})]
				})]
			}),
			activeTab === "llms" && /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-lg font-bold text-slate-900",
							children: "AI Search Engine Documentation (llms.txt)"
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-xs text-slate-500",
							children: [
								"Curated markdown documentation served to AI search crawlers (Perplexity, ChatGPT, Claude, Gemini) at ",
								/* @__PURE__ */ jsx("code", {
									className: "bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-mono",
									children: "/llms.txt"
								}),
								" and ",
								/* @__PURE__ */ jsx("code", {
									className: "bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-mono",
									children: "/llms-full.txt"
								}),
								"."
							]
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsxs("a", {
								href: llmsTab === "standard" ? "/llms.txt" : "/llms-full.txt",
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg",
								children: [
									/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
									"View Live ",
									llmsTab === "standard" ? "/llms.txt" : "/llms-full.txt"
								]
							}), /* @__PURE__ */ jsxs(Button, {
								onClick: handleSaveLlms,
								disabled: llmsSaving || llmsLoading,
								className: "gap-1.5 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-semibold",
								children: [/* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }), llmsSaving ? "Saving..." : "Save LLM Directives"]
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("button", {
							onClick: () => setLlmsTab("standard"),
							className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${llmsTab === "standard" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`,
							children: "llms.txt (Concise Index)"
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => setLlmsTab("full"),
							className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${llmsTab === "full" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`,
							children: "llms-full.txt (Comprehensive Knowledge Base)"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between border-b border-slate-100 pb-3",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "text-xs font-bold uppercase tracking-wider text-slate-700",
								children: ["Editing: ", llmsTab === "standard" ? "/llms.txt" : "/llms-full.txt"]
							}), /* @__PURE__ */ jsxs("span", {
								className: "text-[10px] font-mono text-slate-400",
								children: [(llmsTab === "standard" ? llmsTxt : llmsFullTxt).length, " characters"]
							})]
						}), /* @__PURE__ */ jsx(Textarea, {
							rows: 18,
							value: llmsTab === "standard" ? llmsTxt : llmsFullTxt,
							onChange: (e) => {
								if (llmsTab === "standard") setLlmsTxt(e.target.value);
								else setLlmsFullTxt(e.target.value);
							},
							placeholder: "# Innrly Documentation...",
							className: "font-mono text-xs bg-slate-50 border-slate-200 p-4 rounded-lg focus-visible:ring-indigo-500/20 leading-relaxed resize-y"
						})]
					})
				]
			}),
			activeTab === "scripts" && /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-lg font-bold text-slate-900",
						children: "Tracking Scripts & HTML Injections"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-slate-500",
						children: "Inject Google Analytics 4, Google Tag Manager, or custom scripts into <head> and <body>."
					})] }), /* @__PURE__ */ jsxs(Button, {
						onClick: handleSaveScripts,
						disabled: scriptsSaving || scriptsLoading,
						className: "gap-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-semibold",
						children: [/* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }), scriptsSaving ? "Saving..." : "Save Scripts"]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 border-b border-slate-100 pb-3",
								children: [/* @__PURE__ */ jsx(Code2, { className: "h-4 w-4 text-indigo-600" }), /* @__PURE__ */ jsx("h3", {
									className: "text-xs font-bold uppercase tracking-wider text-slate-700",
									children: "Analytics Providers"
								})]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "ga4_id",
								className: "text-xs font-semibold text-slate-600",
								children: "Google Analytics 4 Measurement ID"
							}), /* @__PURE__ */ jsx(Input, {
								id: "ga4_id",
								value: scriptsData.ga4_id || "",
								onChange: (e) => setScriptsData({
									...scriptsData,
									ga4_id: e.target.value
								}),
								placeholder: "G-TJZT02L07P",
								className: "mt-1 bg-slate-50 border-slate-200 text-xs font-mono focus-visible:ring-indigo-500/20"
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "gtm_id",
								className: "text-xs font-semibold text-slate-600",
								children: "Google Tag Manager Container ID (Optional)"
							}), /* @__PURE__ */ jsx(Input, {
								id: "gtm_id",
								value: scriptsData.gtm_id || "",
								onChange: (e) => setScriptsData({
									...scriptsData,
									gtm_id: e.target.value
								}),
								placeholder: "GTM-XXXXXX",
								className: "mt-1 bg-slate-50 border-slate-200 text-xs font-mono focus-visible:ring-indigo-500/20"
							})] }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between pt-2 border-t border-slate-100",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "is_active",
									className: "text-xs font-semibold text-slate-700 cursor-pointer",
									children: "Enable Script Injections"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-slate-400",
									children: "Master switch for all custom scripts across the site"
								})] }), /* @__PURE__ */ jsx("input", {
									id: "is_active",
									type: "checkbox",
									checked: scriptsData.is_active,
									onChange: (e) => setScriptsData({
										...scriptsData,
										is_active: e.target.checked
									}),
									className: "w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer"
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 border-b border-slate-100 pb-3",
								children: [/* @__PURE__ */ jsx(FileCode, { className: "h-4 w-4 text-slate-500" }), /* @__PURE__ */ jsx("h3", {
									className: "text-xs font-bold uppercase tracking-wider text-slate-700",
									children: "Custom HTML Injections"
								})]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "header_tags",
								className: "text-xs font-semibold text-slate-600",
								children: "Header HTML Tags (<head>)"
							}), /* @__PURE__ */ jsx(Textarea, {
								id: "header_tags",
								rows: 4,
								value: scriptsData.header_tags || "",
								onChange: (e) => setScriptsData({
									...scriptsData,
									header_tags: e.target.value
								}),
								placeholder: "<meta name='...'> or <script>...<\/script>",
								className: "mt-1 font-mono text-xs bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 resize-none"
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "footer_tags",
								className: "text-xs font-semibold text-slate-600",
								children: "Footer HTML Tags (Before </body>)"
							}), /* @__PURE__ */ jsx(Textarea, {
								id: "footer_tags",
								rows: 4,
								value: scriptsData.footer_tags || "",
								onChange: (e) => setScriptsData({
									...scriptsData,
									footer_tags: e.target.value
								}),
								placeholder: "<script>...<\/script>",
								className: "mt-1 font-mono text-xs bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 resize-none"
							})] })
						]
					})]
				})]
			})
		]
	});
}
//#endregion
export { ControlHubSeoPage as component };
