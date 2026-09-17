import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-BLOnemRm.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/solutions.reconciliation.tsx
var $$splitComponentImporter = () => import("./solutions.reconciliation-UaSJBbnS.js");
var Route = createFileRoute("/solutions/reconciliation")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return {
			seo: await fetchSeoData("/solutions/reconciliation"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/solutions/reconciliation"], "/solutions/reconciliation")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/solutions/reconciliation"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "SoftwareApplication",
				name: "Innrly Reconciliation",
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				url: "/solutions/reconciliation",
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
				name: "Reconciliation",
				url: "/solutions/reconciliation"
			}
		])]
	})
});
//#endregion
export { Route as t };
