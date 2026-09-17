import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-DZAr2mfV.js";
import { t as fetchTestimonials } from "./testimonials-BBjNDjDz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/solutions.expense-entries.tsx
var $$splitComponentImporter = () => import("./solutions.expense-entries-zh4uUcdj.js");
var Route = createFileRoute("/solutions/expense-entries")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return {
			seo: await fetchSeoData("/solutions/expense-entries"),
			testimonials: await fetchTestimonials()
		};
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/solutions/expense-entries"], "/solutions/expense-entries"), {
			property: "og:image:alt",
			content: "The $400 invoice no one coded. We found it."
		}],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/solutions/expense-entries"
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
				name: "Expense Entries",
				url: "/solutions/expense-entries"
			}
		])]
	})
});
//#endregion
export { Route as t };
