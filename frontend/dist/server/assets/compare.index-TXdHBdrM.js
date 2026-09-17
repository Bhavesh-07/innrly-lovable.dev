import { t as comparisons } from "./compare.index-C2cVhmYR.js";
import { i as SectionHeading, r as Section, t as CtaBand } from "./Section-D2XWIGS_.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
//#region src/routes/compare.index.tsx?tsr-split=component
function Page() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 bg-hero opacity-90",
					"aria-hidden": true
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-accent",
							children: "Comparisons"
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-4 text-4xl font-bold text-foreground sm:text-5xl",
							children: [
								"How Innrly compares where it is truly",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-gradient",
									children: "head-to-head"
								}),
								"."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-lg text-muted-foreground",
							children: "Honest breakdowns of features, pricing, onboarding, and fit for buyers evaluating hotel back-office software."
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs(Section, {
				className: "py-12",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Head-to-head",
					title: "Comparisons."
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: comparisons.map((c) => /* @__PURE__ */ jsxs("a", {
						href: c.to,
						className: "group flex flex-col aurora-card rounded-2xl p-6 transition-colors hover:border-accent/60",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold uppercase tracking-widest text-accent",
								children: c.readTime
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "mt-3 text-xl font-semibold text-foreground",
								children: ["Innrly: alternative to ", c.competitor]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: c.tagline
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-4 space-y-2 text-sm text-foreground",
								children: c.highlights.map((h) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent",
										"aria-hidden": true
									}), /* @__PURE__ */ jsx("span", { children: h })]
								}, h))
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent",
								children: ["Read comparison", /* @__PURE__ */ jsx(ArrowRight, {
									className: "h-4 w-4 transition-transform group-hover:translate-x-0.5",
									"aria-hidden": true
								})]
							})
						]
					}, c.to))
				})]
			}),
			/* @__PURE__ */ jsx(CtaBand, {
				title: "Want a comparison on your own data?",
				subtitle: "20-minute walkthrough on your portfolio — no slides, no commitment.",
				primary: {
					to: "/contact",
					label: "Book a walkthrough"
				},
				secondary: {
					to: "/pricing",
					label: "View pricing"
				}
			})
		]
	});
}
//#endregion
export { Page as component };
