import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-BLOnemRm.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/case-studies.urban-full-service.tsx
var $$splitComponentImporter = () => import("./case-studies.urban-full-service-Dg92ee2w.js");
var Route = createFileRoute("/case-studies/urban-full-service")({
	loader: async () => {
		return {
			seo: await fetchSeoData("/case-studies/urban-full-service"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/case-studies/urban-full-service"], "/case-studies/urban-full-service")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/case-studies/urban-full-service"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: "Urban Full-Service Operator Case Study",
				description: "Four-property urban full-service operator recovers $7K–15K per quarter in OTA reconciliation with Innrly.",
				author: {
					"@type": "Organization",
					name: "Innrly"
				},
				publisher: {
					"@type": "Organization",
					name: "Innrly"
				},
				mainEntityOfPage: "/case-studies/urban-full-service"
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
				name: "Urban Full-Service",
				url: "/case-studies/urban-full-service"
			}
		])]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
