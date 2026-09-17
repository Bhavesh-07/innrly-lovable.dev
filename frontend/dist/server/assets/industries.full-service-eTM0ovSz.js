import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-BLOnemRm.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/industries.full-service.tsx?tsr-shared=1
var faqs = [
	{
		q: "Does Innrly support USALI 11th edition out of the box?",
		a: "Yes. The default chart of accounts ships USALI-aligned with departmental P&Ls, schedule of operated departments, and the supporting reconciliations auditors and ownership groups expect. No re-mapping work required at onboarding."
	},
	{
		q: "How does Innrly handle F&B and banquet reconciliation?",
		a: "POS integrations (Micros Simphony, Toast, Squirrel) push outlet-level F&B revenue and covers into Innrly nightly. Banquet event orders reconcile to the PMS and catering system, and variances surface the next morning instead of at month-end."
	},
	{
		q: "What about resort fees, spa, golf, and parking revenue?",
		a: "All ancillary revenue streams are first-class — separate departmental P&L lines, separate labor tracking, and separate reconciliation against the source system (spa management, golf POS, parking system)."
	},
	{
		q: "Can Innrly handle a single full-service property, or do I need a portfolio?",
		a: "Single property is fine. A standalone full-service hotel or resort typically saves 20–40 controller hours per month and recovers 0.5–2% of F&B revenue through reconciliation. Portfolio operators add multi-property consolidation on top."
	}
];
//#endregion
//#region src/routes/industries.full-service.tsx
var $$splitComponentImporter = () => import("./industries.full-service-F_3gW9qf.js");
var Route = createFileRoute("/industries/full-service")({
	loader: async () => {
		return {
			seo: await fetchSeoData("/industries/full-service"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/industries/full-service"], "/industries/full-service")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/industries/full-service"
		}],
		scripts: [breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Industries",
				url: "/industries/full-service"
			},
			{
				name: "Full-Service",
				url: "/industries/full-service"
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
