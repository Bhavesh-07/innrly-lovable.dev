import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-BPKOsp9z.js";
import { t as fetchTestimonials } from "./testimonials-CodjVg-4.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/case-studies.index.tsx?tsr-shared=1
var studies = [
	{
		to: "/case-studies/midwest-portfolio",
		portfolio: "Midwest select-service portfolio",
		segment: "12 properties · Hilton, IHG, Choice",
		headline: "5–15 hours saved per hotel per week",
		body: "How a select-service operator catches night-audit anomalies daily and protects $200–500 in revenue per hotel each week.",
		available: true
	},
	{
		to: "/case-studies/urban-full-service",
		portfolio: "Urban full-service operator",
		segment: "4 properties · Marriott + independent",
		headline: "$7K–15K OTA commission recovered per quarter",
		body: "OTA reconciliation runs nightly, F&B variance tightens to roughly 1%, and the month-end close moves from 12 days to about 6.",
		available: true
	},
	{
		to: "/case-studies/hilton-management-company",
		portfolio: "Hilton management company",
		segment: "28 properties · Hampton, HGI, Home2, Embassy",
		headline: "Month-end close in about 6 days, not 14",
		body: "OnQ and OPERA consolidated nightly, AP through one queue, and no new corporate headcount as the portfolio grew.",
		available: true
	},
	{
		to: "/case-studies/extended-stay-portfolio",
		portfolio: "Extended-stay portfolio",
		segment: "18 properties · Marriott + Hilton extended-stay",
		headline: "8–12% MPOR reduction across the portfolio",
		body: "Weekly-clean MPOR modeled correctly, long-stay tax automated, and consolidated USALI packages inside the first week of month-end.",
		available: true
	},
	{
		to: "/case-studies/boutique-group",
		portfolio: "Independent boutique group",
		segment: "6 properties · 7 different PMSes",
		headline: "$15K–25K/yr net savings vs. prior bookkeeping setup",
		body: "Seven PMSes consolidated into one P&L, run by a two-person back office instead of a fractional CFO plus an outside firm.",
		available: true
	}
];
//#endregion
//#region src/routes/case-studies.index.tsx
var $$splitComponentImporter = () => import("./case-studies.index-DNWDzTd7.js");
var Route = createFileRoute("/case-studies/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return {
			seo: await fetchSeoData("/case-studies"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/case-studies"], "/case-studies")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/case-studies"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: "Innrly Case Studies",
				description: "Real multi-property hotel operators using Innrly.",
				hasPart: studies.map((s) => ({
					"@type": "Article",
					name: s.portfolio,
					url: s.to
				}))
			})
		}, breadcrumbLd([{
			name: "Home",
			url: "/"
		}, {
			name: "Case Studies",
			url: "/case-studies"
		}])]
	})
});
//#endregion
export { studies as n, Route as t };
