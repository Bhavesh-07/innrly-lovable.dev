import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-BLOnemRm.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/case-studies.boutique-group.tsx
var $$splitComponentImporter = () => import("./case-studies.boutique-group--G9UN9ua.js");
var Route = createFileRoute("/case-studies/boutique-group")({
	loader: async () => {
		return {
			seo: await fetchSeoData("/case-studies/boutique-group"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/case-studies/boutique-group"], "/case-studies/boutique-group")],
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
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
