import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-BLOnemRm.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/solutions.financial-control.tsx
var $$splitComponentImporter = () => import("./solutions.financial-control-CZY8Ih0N.js");
var Route = createFileRoute("/solutions/financial-control")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return {
			seo: await fetchSeoData("/solutions/financial-control"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/solutions/financial-control"], "/solutions/financial-control")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/solutions/financial-control"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "SoftwareApplication",
				name: "Innrly Financial Control",
				applicationCategory: "FinanceApplication",
				operatingSystem: "Web",
				url: "/solutions/financial-control",
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
				name: "Financial Control",
				url: "/solutions/financial-control"
			}
		])]
	})
});
//#endregion
export { Route as t };
