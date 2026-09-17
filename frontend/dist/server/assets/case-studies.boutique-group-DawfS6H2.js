import { t as breadcrumbLd } from "./seo-DZAr2mfV.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/case-studies.boutique-group.tsx
var $$splitComponentImporter = () => import("./case-studies.boutique-group-B9keErlA.js");
var Route = createFileRoute("/case-studies/boutique-group")({
	head: () => ({
		meta: [
			{ title: "Case Study: Independent Boutique Group Consolidates 7 PMSes | Innrly" },
			{
				name: "description",
				content: "How a 6-property independent boutique group uses Innrly to consolidate 7 different PMSes, run unified P&L reporting, and replace a fractional CFO's manual workbook."
			},
			{
				property: "og:title",
				content: "Case Study: Independent Boutique Group — Innrly"
			},
			{
				property: "og:description",
				content: "Seven PMSes, one consolidated P&L. How a boutique group runs lifestyle hotels with a 2-person back office."
			},
			{
				property: "og:url",
				content: "/case-studies/boutique-group"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/case-studies/boutique-group"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: "Independent Boutique Group Case Study",
				description: "6-property independent boutique group consolidates 7 PMSes into one Innrly view.",
				author: {
					"@type": "Organization",
					name: "Innrly"
				},
				publisher: {
					"@type": "Organization",
					name: "Innrly"
				},
				mainEntityOfPage: "/case-studies/boutique-group"
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
				name: "Boutique Group",
				url: "/case-studies/boutique-group"
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
