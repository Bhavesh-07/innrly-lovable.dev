import { t as breadcrumbLd } from "./seo-DZAr2mfV.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/case-studies.midwest-portfolio.tsx
var $$splitComponentImporter = () => import("./case-studies.midwest-portfolio-CHhkv09u.js");
var Route = createFileRoute("/case-studies/midwest-portfolio")({
	head: () => ({
		meta: [
			{ title: "Case Study: Midwest Portfolio Saves Hours & Revenue | Innrly" },
			{
				name: "description",
				content: "How a select-service portfolio uses Innrly Pulse to review night-audit packs, catch anomalies, and save 5–15 hours and $200–500 per hotel per week."
			},
			{
				property: "og:title",
				content: "Case Study: Hours saved, revenue protected — Innrly"
			},
			{
				property: "og:description",
				content: "Select-service operator catches night-audit anomalies daily and saves hours per hotel each week with Innrly."
			},
			{
				property: "og:url",
				content: "/case-studies/midwest-portfolio"
			}
		],
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
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return { testimonials: await fetchTestimonials() };
	}
});
//#endregion
export { Route as t };
