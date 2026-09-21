import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-CbzGy5hA.js";
import { t as fetchTestimonials } from "./testimonials-CodjVg-4.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/solutions.innrly-shift.tsx
var $$splitComponentImporter = () => import("./solutions.innrly-shift-857wvDnr.js");
var Route = createFileRoute("/solutions/innrly-shift")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return {
			seo: await fetchSeoData("/solutions/innrly-shift"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/solutions/innrly-shift"], "/solutions/innrly-shift")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/solutions/innrly-shift"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "SoftwareApplication",
				name: "Innrly Shift",
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				url: "/solutions/innrly-shift",
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
				name: "Innrly Shift",
				url: "/solutions/innrly-shift"
			}
		])]
	})
});
//#endregion
export { Route as t };
