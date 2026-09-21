import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-CbzGy5hA.js";
import { t as fetchTestimonials } from "./testimonials-CodjVg-4.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/case-studies.midwest-portfolio.tsx
var $$splitComponentImporter = () => import("./case-studies.midwest-portfolio-BQp0cR9k.js");
var Route = createFileRoute("/case-studies/midwest-portfolio")({
	loader: async () => {
		return {
			seo: await fetchSeoData("/case-studies/midwest-portfolio"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/case-studies/midwest-portfolio"], "/case-studies/midwest-portfolio")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/case-studies/midwest-portfolio"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: "Midwest Select-Service Portfolio Case Study",
				description: "How a select-service portfolio saves 5–15 hours and $200–500 per hotel per week with Innrly.",
				author: {
					"@type": "Organization",
					name: "Innrly"
				},
				publisher: {
					"@type": "Organization",
					name: "Innrly"
				},
				mainEntityOfPage: "/case-studies/midwest-portfolio"
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
				name: "Midwest Portfolio",
				url: "/case-studies/midwest-portfolio"
			}
		])]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
