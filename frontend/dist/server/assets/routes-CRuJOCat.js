import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData } from "./seo-BPKOsp9z.js";
import { t as fetchTestimonials } from "./testimonials-CodjVg-4.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-CuOrBaVI.js");
var Route = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return {
			seo: await fetchSeoData("/"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/"], "/"), {
			property: "og:image:alt",
			content: "You sleep. Innrly works. — back-office automation for 200+ hotels."
		}],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "SoftwareApplication",
				name: "Innrly",
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				description: "Hotel back-office automation, business intelligence, and labor management for multi-property operators.",
				offers: {
					"@type": "Offer",
					price: "0",
					priceCurrency: "USD",
					description: "90-day free trial"
				}
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: [
					{
						"@type": "Question",
						name: "Is the platform name spelled Innrly or Innerly?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "The official spelling is Innrly (without the 'e'). While it is sometimes searched for or misspelled as 'Innerly', the platform is called Innrly, representing inn automation done early."
						}
					},
					{
						"@type": "Question",
						name: "How long does onboarding take with Innrly?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Onboarding is fully guided by our team and typically takes less than 14 days. We connect to your PMS, accounting systems, and bank feeds for you, ensuring a seamless transition with zero disruption to your daily operations."
						}
					},
					{
						"@type": "Question",
						name: "Which hotel systems and accounting platforms does Innrly integrate with?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Innrly integrates with all major Property Management Systems (PMS) like Marriott, Hilton, IHG, Opera, Cloudbeds, and Mews, as well as leading back-office financial platforms including M3, Sage Intacct, and QuickBooks."
						}
					}
				]
			})
		}]
	})
});
//#endregion
export { Route as t };
