import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-X3geolyH.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/solutions.innrly-pay.tsx
var $$splitComponentImporter = () => import("./solutions.innrly-pay-Di2e0Kez.js");
var Route = createFileRoute("/solutions/innrly-pay")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return {
			seo: await fetchSeoData("/solutions/innrly-pay"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/solutions/innrly-pay"], "/solutions/innrly-pay")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/solutions/innrly-pay"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "SoftwareApplication",
				name: "Innrly Pay",
				applicationCategory: "FinanceApplication",
				operatingSystem: "Web",
				url: "/solutions/innrly-pay",
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
				name: "Innrly Pay",
				url: "/solutions/innrly-pay"
			}
		])]
	})
});
//#endregion
export { Route as t };
