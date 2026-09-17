import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-X3geolyH.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/solutions.operations-automation.tsx
var $$splitComponentImporter = () => import("./solutions.operations-automation-hot9iadW.js");
var Route = createFileRoute("/solutions/operations-automation")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return {
			seo: await fetchSeoData("/solutions/operations-automation"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/solutions/operations-automation"], "/solutions/operations-automation")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/solutions/operations-automation"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "SoftwareApplication",
				name: "Innrly Operations Automation",
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				url: "/solutions/operations-automation",
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
				name: "Operations Automation",
				url: "/solutions/operations-automation"
			}
		])]
	})
});
//#endregion
export { Route as t };
