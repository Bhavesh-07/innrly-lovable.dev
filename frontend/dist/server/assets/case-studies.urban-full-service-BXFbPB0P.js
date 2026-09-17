import { t as breadcrumbLd } from "./seo-DZAr2mfV.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/case-studies.urban-full-service.tsx
var $$splitComponentImporter = () => import("./case-studies.urban-full-service-Dq1slJIM.js");
var Route = createFileRoute("/case-studies/urban-full-service")({
	head: () => ({
		meta: [
			{ title: "Case Study: Urban Full-Service Recovers OTA Commission Every Quarter | Innrly" },
			{
				name: "description",
				content: "How a 4-property urban full-service operator uses Innrly to reconcile OTA commissions, F&B, and banquets — recovering $7K–15K per quarter and closing books in about a week."
			},
			{
				property: "og:title",
				content: "Case Study: Urban Full-Service Operator — Innrly"
			},
			{
				property: "og:description",
				content: "OTA reconciliation, F&B GL coding, and USALI owner reporting — $7K–15K recovered per quarter, close in about a week."
			},
			{
				property: "og:url",
				content: "/case-studies/urban-full-service"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/case-studies/urban-full-service"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: "Urban Full-Service Operator Case Study",
				description: "Four-property urban full-service operator recovers $7K–15K per quarter in OTA reconciliation with Innrly.",
				author: {
					"@type": "Organization",
					name: "Innrly"
				},
				publisher: {
					"@type": "Organization",
					name: "Innrly"
				},
				mainEntityOfPage: "/case-studies/urban-full-service"
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
				name: "Urban Full-Service",
				url: "/case-studies/urban-full-service"
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
