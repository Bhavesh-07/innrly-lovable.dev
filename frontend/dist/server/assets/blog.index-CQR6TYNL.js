import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData } from "./seo-BPKOsp9z.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/blog.index.tsx
var $$splitComponentImporter = () => import("./blog.index-BQ9VLZzi.js");
var Route = createFileRoute("/blog/")({
	loader: async () => {
		let posts = [];
		try {
			const baseUrl = typeof window === "undefined" ? process.env.BACKEND_URL || "http://127.0.0.1:8005" : "/api";
			const res = await fetch(`${baseUrl}/blog`);
			if (res.ok) posts = (await res.json()).filter((p) => p.status === "published");
		} catch (e) {
			console.error("Failed to fetch blogs", e);
		}
		const seo = await fetchSeoData("/blog");
		return {
			posts,
			seo
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/blog"], "/blog")],
		links: [{
			rel: "canonical",
			href: "https://www.innrly.com/blog"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Blog",
				name: "Innrly Blog",
				url: "/blog",
				description: "Operator-focused writing on hotel finance, labor, and analytics.",
				publisher: {
					"@type": "Organization",
					name: "Innrly"
				}
			})
		}]
	})
});
//#endregion
export { Route as t };
