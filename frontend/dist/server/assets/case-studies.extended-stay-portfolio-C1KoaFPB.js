import { t as breadcrumbLd } from "./seo-DZAr2mfV.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/case-studies.extended-stay-portfolio.tsx
var $$splitComponentImporter = () => import("./case-studies.extended-stay-portfolio-BOm57cXs.js");
var Route = createFileRoute("/case-studies/extended-stay-portfolio")({
	head: () => ({
		meta: [
			{ title: "Case Study: 18-Hotel Extended-Stay Portfolio Tightens MPOR & Close | Innrly" },
			{
				name: "description",
				content: "How an 18-property extended-stay operator (Marriott + Hilton flags) uses Innrly to manage long-folio revenue, model weekly-clean MPOR correctly, and shorten month-end close."
			},
			{
				property: "og:title",
				content: "Case Study: Extended-Stay Portfolio — Innrly"
			},
			{
				property: "og:description",
				content: "Long-folio revenue, weekly-clean MPOR, and USALI reporting across 18 Marriott and Hilton extended-stay hotels."
			},
			{
				property: "og:url",
				content: "/case-studies/extended-stay-portfolio"
			}
		],
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
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return { testimonials: await fetchTestimonials() };
	}
});
//#endregion
export { Route as t };
