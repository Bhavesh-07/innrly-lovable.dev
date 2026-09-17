import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-X3geolyH.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/solutions.document-vault.tsx
var $$splitComponentImporter = () => import("./solutions.document-vault-Dt9zb8ji.js");
var Route = createFileRoute("/solutions/document-vault")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return {
			seo: await fetchSeoData("/solutions/document-vault"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/solutions/document-vault"], "/solutions/document-vault"), {
			property: "og:image:alt",
			content: "Every folio, W-9, and STR report — in one place, on time."
		}],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/solutions/document-vault"
		}],
		scripts: [breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Solutions",
				url: "/solutions"
			},
			{
				name: "Document Vault",
				url: "/solutions/document-vault"
			}
		])]
	})
});
//#endregion
export { Route as t };
