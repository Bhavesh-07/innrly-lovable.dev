import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-CbzGy5hA.js";
import { t as fetchTestimonials } from "./testimonials-CodjVg-4.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/industries.select-service.tsx?tsr-shared=1
var faqs = [
	{
		q: "Which select-service PMSes does Innrly support?",
		a: "OPERA Cloud, OnQ (Hilton), FOSSE (Marriott), choiceADVANTAGE, Visual Matrix, StayNTouch, and Cloudbeds — plus most other major systems. Most multi-brand portfolios run 3–5 PMSes and Innrly consolidates them into a single nightly P&L without forcing a system change."
	},
	{
		q: "Will Innrly work for a single Hampton Inn or Holiday Inn Express?",
		a: "Yes — Starter is built for single properties and small portfolios. The bigger wins compound at 5+ hotels (consolidated reporting, multi-PMS night audit, corporate-team leverage), but single-property select-service operators still save 5–10 hours per week."
	},
	{
		q: "How does Innrly handle brand-required reporting?",
		a: "Brand-mandated reports (Hilton, Marriott, IHG, Choice, Wyndham) stay where they are — Innrly doesn't replace them. It sits on top, normalizes the data, and produces the cross-brand corporate view your flag reports don't give you."
	},
	{
		q: "What's the typical onboarding timeline for a select-service portfolio?",
		a: "2–4 weeks for a 5–15 property portfolio. Week 1: PMS and accounting connections. Week 2: chart of accounts mapping and night-audit dry run. Weeks 3–4: parallel running and corporate report sign-off. No PMS migration required."
	}
];
//#endregion
//#region src/routes/industries.select-service.tsx
var $$splitComponentImporter = () => import("./industries.select-service-DmE1QkwJ.js");
var Route = createFileRoute("/industries/select-service")({
	loader: async () => {
		return {
			seo: await fetchSeoData("/industries/select-service"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/industries/select-service"], "/industries/select-service")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/industries/select-service"
		}],
		scripts: [breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Industries",
				url: "/industries/select-service"
			},
			{
				name: "Select-Service",
				url: "/industries/select-service"
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
