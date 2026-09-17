import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-X3geolyH.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/case-studies.hilton-management-company.tsx
var $$splitComponentImporter = () => import("./case-studies.hilton-management-company-B-UP_-z3.js");
var Route = createFileRoute("/case-studies/hilton-management-company")({
	loader: async () => {
		return {
			seo: await fetchSeoData("/case-studies/hilton-management-company"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/case-studies/hilton-management-company"], "/case-studies/hilton-management-company")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/case-studies/hilton-management-company"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: "Hilton Management Company Case Study",
				description: "28-property Hilton management company closes books in ~6 days using Innrly.",
				author: {
					"@type": "Organization",
					name: "Innrly"
				},
				publisher: {
					"@type": "Organization",
					name: "Innrly"
				},
				mainEntityOfPage: "/case-studies/hilton-management-company"
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Case Studies",
				url: "/case-studies"
			},
			{
				name: "Hilton Management Company",
				url: "/case-studies/hilton-management-company"
			}
		])]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
