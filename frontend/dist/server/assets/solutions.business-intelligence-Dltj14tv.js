import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-BLOnemRm.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/solutions.business-intelligence.tsx
var $$splitComponentImporter = () => import("./solutions.business-intelligence-Dcac6PWs.js");
var Route = createFileRoute("/solutions/business-intelligence")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return {
			seo: await fetchSeoData("/solutions/business-intelligence"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/solutions/business-intelligence"], "/solutions/business-intelligence")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/solutions/business-intelligence"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "SoftwareApplication",
				name: "Innrly Business Intelligence",
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				url: "/solutions/business-intelligence",
				offers: {
					"@type": "Offer",
					priceCurrency: "USD"
				}
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Solutions",
				url: "/solutions"
			},
			{
				name: "Business Intelligence",
				url: "/solutions/business-intelligence"
			}
		])]
	})
});
//#endregion
export { Route as t };
