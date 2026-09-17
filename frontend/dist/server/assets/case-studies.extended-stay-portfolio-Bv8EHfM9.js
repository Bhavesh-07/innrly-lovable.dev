import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-X3geolyH.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/case-studies.extended-stay-portfolio.tsx
var $$splitComponentImporter = () => import("./case-studies.extended-stay-portfolio-7W8mE0Nx.js");
var Route = createFileRoute("/case-studies/extended-stay-portfolio")({
	loader: async () => {
		return {
			seo: await fetchSeoData("/case-studies/extended-stay-portfolio"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/case-studies/extended-stay-portfolio"], "/case-studies/extended-stay-portfolio")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/case-studies/extended-stay-portfolio"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: "Extended-Stay Portfolio Case Study",
				description: "18-property Marriott + Hilton extended-stay operator tightens MPOR and shortens month-end close with Innrly.",
				author: {
					"@type": "Organization",
					name: "Innrly"
				},
				publisher: {
					"@type": "Organization",
					name: "Innrly"
				},
				mainEntityOfPage: "/case-studies/extended-stay-portfolio"
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
				name: "Extended-Stay Portfolio",
				url: "/case-studies/extended-stay-portfolio"
			}
		])]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
