import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-X3geolyH.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/industries.extended-stay.tsx?tsr-shared=1
var faqs = [
	{
		q: "How does Innrly handle multi-month folio revenue recognition?",
		a: "Long stays (30, 60, 90+ days) are recognized by night, not by check-out. Revenue, taxes, and fees post to the period each night belongs to, so a 60-day stay that spans two months splits cleanly across both monthly P&Ls without manual adjustment."
	},
	{
		q: "Does Innrly's labor model handle weekly housekeeping?",
		a: "Yes. MPOR benchmarks, schedule templates, and variance alerts are tuned to weekly tidies and full cleans rather than daily — the default cadence assumed by most labor tools breaks extended-stay productivity numbers."
	},
	{
		q: "What about direct-bill corporate accounts?",
		a: "Direct-bill A/R reconciles nightly. Contract rates audit against the folio, project rates flag against negotiated terms, and A/R aging produces a clean monthly statement per corporate account without three separate spreadsheets."
	},
	{
		q: "Which extended-stay brands does Innrly support?",
		a: "All major brand families — Marriott (Residence Inn, TownePlace, Element), Hilton (Homewood Suites, Home2 Suites), IHG (Staybridge Suites, Candlewood Suites), Choice (WoodSpring, MainStay, Suburban), and Wyndham (Hawthorn Suites). Multi-brand portfolios consolidate into one nightly P&L."
	}
];
//#endregion
//#region src/routes/industries.extended-stay.tsx
var $$splitComponentImporter = () => import("./industries.extended-stay-CeRGa9sc.js");
var Route = createFileRoute("/industries/extended-stay")({
	loader: async () => {
		return {
			seo: await fetchSeoData("/industries/extended-stay"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/industries/extended-stay"], "/industries/extended-stay")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/industries/extended-stay"
		}],
		scripts: [breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Industries",
				url: "/industries/extended-stay"
			},
			{
				name: "Extended-Stay",
				url: "/industries/extended-stay"
			}
		]), {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { faqs as n, Route as t };
