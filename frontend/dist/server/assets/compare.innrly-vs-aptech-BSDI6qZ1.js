import { t as faqs } from "./compare.innrly-vs-aptech-D0QVvAuc.js";
import { t as CompareLayout } from "./CompareLayout-Bl4WDEQB.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/compare.innrly-vs-aptech.tsx?tsr-split=component
function Page() {
	return /* @__PURE__ */ jsx(CompareLayout, {
		competitorName: "Aptech",
		eyebrow: "Innrly: alternative to Aptech",
		title: /* @__PURE__ */ jsxs(Fragment, { children: ["How Innrly and Aptech ", /* @__PURE__ */ jsx("span", {
			className: "text-gradient",
			children: "compare."
		})] }),
		intro: "Aptech sells Profitvue (hospitality GL), Execuvue (BI), and Targetvue (budgeting) as separately licensed and onboarded products. Innrly is a single platform with one login covering BI, A/P, night audit, OTA reconciliation, labor, and payroll. This page highlights what's actually different.",
		summary: [
			{
				heading: "Platform shape",
				body: "Innrly is one product on one data model. Aptech is three separately licensed products (Profitvue + Execuvue + Targetvue) that integrate but are bought, deployed, and supported independently."
			},
			{
				heading: "Pricing transparency",
				body: "Innrly publishes $199/property/month with a 90-day full-access free trial. Aptech is quote-based per module with no public free trial."
			},
			{
				heading: "Deployment speed",
				body: "Innrly deployments typically take 2–4 weeks. Multi-module Aptech rollouts (all three products) commonly run 60–120+ days."
			}
		],
		rows: [
			{
				feature: "Single platform / one login across modules",
				innrly: true,
				competitor: false,
				note: "Aptech: 3 separately licensed products"
			},
			{
				feature: "Published per-property pricing",
				innrly: "$199/mo",
				competitor: "Quote-based"
			},
			{
				feature: "Free trial",
				innrly: "90 days, full access",
				competitor: "Not published"
			},
			{
				feature: "Month-to-month contract",
				innrly: true,
				competitor: "partial"
			},
			{
				feature: "Typical time to live",
				innrly: "2–4 weeks",
				competitor: "60–120+ days"
			},
			{
				feature: "Hospitality GL replacement",
				innrly: false,
				competitor: "Profitvue",
				note: "Innrly pushes to your GL of choice — QuickBooks, M3, Sage Intacct, or Profitvue"
			},
			{
				feature: "USALI-aligned owner reporting",
				innrly: true,
				competitor: true
			},
			{
				feature: "Native Face-ID TimeClock",
				innrly: true,
				competitor: false
			},
			{
				feature: "Built-in housekeeping productivity matrix (MPOR, rooms/shift)",
				innrly: true,
				competitor: false
			},
			{
				feature: "Labor scheduling + forecast vs actual",
				innrly: true,
				competitor: "partial"
			},
			{
				feature: "OTA commission reconciliation",
				innrly: true,
				competitor: "partial"
			},
			{
				feature: "Auto-pull invoices from vendor portals",
				innrly: true,
				competitor: false
			},
			{
				feature: "Budgeting + forecasting",
				innrly: true,
				competitor: "Targetvue (separate license)"
			}
		],
		whenToChoose: {
			innrly: [
				"You want one platform, one login, one data model — not three products to license and integrate",
				"You want published pricing and a real 90-day trial",
				"You want Face-ID TimeClock + housekeeping productivity built into the same product as labor",
				"You want a 2–4 week deployment with budgeting, BI, A/P, and labor included from day one"
			],
			competitor: ["You specifically need a hospitality-native general ledger and want to keep Profitvue as your GL", "You're already running Execuvue or Targetvue and don't want to consolidate"]
		},
		faqs
	});
}
//#endregion
export { Page as component };
