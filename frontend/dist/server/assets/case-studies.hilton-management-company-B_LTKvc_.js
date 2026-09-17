import { t as breadcrumbLd } from "./seo-DZAr2mfV.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/case-studies.hilton-management-company.tsx
var $$splitComponentImporter = () => import("./case-studies.hilton-management-company-Bi4tEaKz.js");
var Route = createFileRoute("/case-studies/hilton-management-company")({
	head: () => ({
		meta: [
			{ title: "Case Study: Hilton Management Company Cuts Month-End from 14 to ~6 Days | Innrly" },
			{
				name: "description",
				content: "How a 28-property Hilton-focused management company uses Innrly to consolidate OnQ and OPERA data, automate AP, and shrink month-end close from roughly two weeks to under one."
			},
			{
				property: "og:title",
				content: "Case Study: 28-Property Hilton Management Company — Innrly"
			},
			{
				property: "og:description",
				content: "Multi-brand Hilton operator consolidates 28 hotels into one nightly close and shrinks month-end from 14 days to about 6."
			},
			{
				property: "og:url",
				content: "/case-studies/hilton-management-company"
			}
		],
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
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return { testimonials: await fetchTestimonials() };
	}
});
//#endregion
export { Route as t };
