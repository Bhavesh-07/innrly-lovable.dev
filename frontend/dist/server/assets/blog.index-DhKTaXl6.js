import { i as SectionHeading, r as Section } from "./Section-D2XWIGS_.js";
import { t as Route } from "./blog.index-BGAm_t3W.js";
import { t as NewsletterSignup } from "./NewsletterSignup-7jhM0VRs.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
//#region src/routes/blog.index.tsx?tsr-split=component
function BlogIndex() {
	const { posts } = Route.useLoaderData();
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background",
		children: [/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 bg-hero opacity-90",
				"aria-hidden": true
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("h1", {
					className: "text-4xl font-bold text-foreground sm:text-5xl",
					children: ["From the ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "Innrly team."
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "Operator-focused writing on hotel finance, labor, and analytics."
				})]
			})]
		}), /* @__PURE__ */ jsxs(Section, { children: [
			/* @__PURE__ */ jsx(SectionHeading, { title: "Latest posts" }),
			/* @__PURE__ */ jsx("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: posts.length === 0 ? /* @__PURE__ */ jsx("div", {
					className: "col-span-full py-12 text-center text-muted-foreground",
					children: "No published posts found."
				}) : posts.map((p) => /* @__PURE__ */ jsxs("article", {
					className: "aurora-card rounded-2xl p-6 flex flex-col",
					children: [
						/* @__PURE__ */ jsx("time", {
							className: "text-xs text-muted-foreground",
							dateTime: p.created_at,
							children: new Date(p.created_at).toLocaleDateString("en-US", {
								month: "long",
								day: "numeric",
								year: "numeric"
							})
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-lg font-semibold text-foreground",
							children: p.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground flex-1",
							children: p.summary
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/blog/$slug",
							params: { slug: p.slug },
							className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent",
							children: ["Read post ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					]
				}, p.id))
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-12 text-center text-sm text-muted-foreground",
				children: [
					"More posts coming soon. Have a topic you want covered?",
					" ",
					/* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "text-accent underline",
						children: "Tell us"
					}),
					"."
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto mt-16 max-w-2xl",
				children: /* @__PURE__ */ jsx(NewsletterSignup, { source: "blog-index" })
			})
		] })]
	});
}
//#endregion
export { BlogIndex as component };
