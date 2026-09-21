import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData } from "./seo-BPKOsp9z.js";
import { t as fetchTestimonials } from "./testimonials-CodjVg-4.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/pricing.tsx
var $$splitComponentImporter = () => import("./pricing-DQFeytFJ.js");
var Route = createFileRoute("/pricing")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return {
			seo: await fetchSeoData("/pricing"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/pricing"], "/pricing"), {
			property: "og:image:alt",
			content: "Priced per door, not per seat. No per-user fees. 90-day trial."
		}],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/pricing"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Product",
				name: "Innrly Hotel Management Platform",
				description: "Cloud-based hotel back-office automation and business intelligence.",
				offers: [{
					"@type": "Offer",
					name: "Starter",
					price: "199",
					priceCurrency: "USD"
				}, {
					"@type": "Offer",
					name: "Professional",
					price: "299",
					priceCurrency: "USD"
				}]
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: [
					{
						"@type": "Question",
						name: "What does the setup fee cover?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Onboarding, PMS and accounting connections, chart-of-accounts mapping, and a guided launch with a dedicated implementation specialist."
						}
					},
					{
						"@type": "Question",
						name: "Is there a minimum portfolio size?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "No — Starter works for a single property. Most operators start with 1–5 hotels and expand from there."
						}
					},
					{
						"@type": "Question",
						name: "Can I cancel anytime?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Monthly plans have no annual contract — cancel anytime. Annual plans get a 25% discount (and Innrly Pay included free on Professional) in exchange for a 12-month commitment."
						}
					},
					{
						"@type": "Question",
						name: "Do I need to change my PMS or accounting system?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "No. Innrly sits on top of your existing stack — you keep your PMS, accounting, payroll, and credentials."
						}
					}
				]
			})
		}]
	})
});
//#endregion
export { Route as t };
