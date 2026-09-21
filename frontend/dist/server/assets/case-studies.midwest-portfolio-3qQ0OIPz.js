import { t as Button } from "./button-Dkpg6g2Z.js";
import { r as Section, t as CtaBand } from "./Section-D2XWIGS_.js";
import { t as Route } from "./case-studies.midwest-portfolio-BY_LreUD.js";
import { t as Breadcrumbs } from "./Breadcrumbs-C1y857pw.js";
import { t as IllustrativeBanner } from "./IllustrativeBanner-D5LDs72e.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CheckCircle2, Clock, DollarSign, Quote, TrendingDown } from "lucide-react";
//#region src/routes/case-studies.midwest-portfolio.tsx?tsr-split=component
var metrics = [
	{
		icon: Clock,
		stat: "5–15 hrs",
		label: "Saved per hotel each week"
	},
	{
		icon: DollarSign,
		stat: "$200–500",
		label: "Revenue loss prevented per hotel weekly"
	},
	{
		icon: TrendingDown,
		stat: "Daily",
		label: "Night-audit anomaly review"
	},
	{
		icon: CheckCircle2,
		stat: "6 wks",
		label: "Typical time to roll out a portfolio"
	}
];
function CaseStudyPage() {
	const { testimonials: allTestimonials } = Route.useLoaderData();
	const t = allTestimonials.find((t) => t.page === "case-studies-midwest-portfolio");
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [
				{
					name: "Home",
					to: "/"
				},
				{
					name: "Case Studies",
					to: "/case-studies"
				},
				{ name: "Midwest Portfolio" }
			] }),
			/* @__PURE__ */ jsx(IllustrativeBanner, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden border-b border-border/60",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 bg-hero opacity-90",
					"aria-hidden": true
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent",
							children: "Case Study · Select-Service"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl",
							children: "Hours saved, revenue protected — every night, across every property."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-3xl text-lg text-muted-foreground",
							children: "A midwest select-service operator (Hilton, IHG, and Choice brands) uses Innrly Pulse to review night-audit packs and flag transaction anomalies before they accumulate into real losses."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: "lg",
								className: "bg-cta hover:opacity-90",
								children: /* @__PURE__ */ jsxs(Link, {
									to: "/contact",
									children: ["Get the same results ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })]
								})
							}), /* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-border bg-background/40",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/pricing",
									children: "View pricing"
								})
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: metrics.map((m) => /* @__PURE__ */ jsxs("div", {
					className: "aurora-card rounded-2xl p-6",
					children: [
						/* @__PURE__ */ jsx(m.icon, {
							className: "h-6 w-6 text-accent",
							"aria-hidden": true
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 text-3xl font-bold text-gradient",
							children: m.stat
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: m.label
						})
					]
				}, m.label))
			}) }),
			/* @__PURE__ */ jsx(Section, {
				className: "!pt-0",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid gap-12 lg:grid-cols-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-2 space-y-10",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl font-bold text-foreground",
									children: "The problem"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-muted-foreground",
									children: "With 12 properties across three brands and four PMS systems, the corporate team was spending the first 10 days of every month reconciling night-audit reports, OTA commissions, and credit-card batches by hand. Owners didn't see consolidated P&Ls until the 20th — far too late to act on a bad week."
								}),
								/* @__PURE__ */ jsxs("ul", {
									className: "mt-5 space-y-3 text-muted-foreground",
									children: [
										/* @__PURE__ */ jsxs("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-accent",
												children: "·"
											}), " Five Excel templates, one per data source, manually merged each morning."]
										}),
										/* @__PURE__ */ jsxs("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-accent",
												children: "·"
											}), " Two part-time bookkeepers dedicated to reconciliation only."]
										}),
										/* @__PURE__ */ jsxs("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-accent",
												children: "·"
											}), " OTA commission discrepancies discovered weeks after the fact, rarely recovered."]
										}),
										/* @__PURE__ */ jsxs("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-accent",
												children: "·"
											}), " No portfolio-wide labor visibility — overtime caught only after payroll ran."]
										})
									]
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl font-bold text-foreground",
								children: "The rollout"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-3 text-muted-foreground",
								children: "Innrly connected to all four PMS instances and the existing accounting stack in under two weeks. The full 12-property portfolio was live in 6 weeks, with no IT lift required on property. Corporate set up consolidated dashboards once; every property inherited them."
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl font-bold text-foreground",
									children: "The results, 90 days in"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-muted-foreground",
									children: "Daily P&Ls land in inboxes at 7 a.m. Night audits that took 90 minutes now take 20. Owners get a Monday-morning portfolio summary instead of waiting until month-end. The corporate team retired both reconciliation spreadsheets and reassigned one bookkeeper to higher-value AP work."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 aurora-card rounded-2xl p-6",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-sm uppercase tracking-wider text-accent",
										children: "By the numbers"
									}), /* @__PURE__ */ jsxs("div", {
										className: "mt-3 grid gap-3 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ jsxs("p", {
												className: "text-foreground",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-semibold",
													children: "5–15 hours"
												}), " saved per hotel each week"]
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "text-foreground",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-semibold",
													children: "$200–500"
												}), " in revenue loss prevented per hotel weekly"]
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "text-foreground",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-semibold",
													children: "Daily"
												}), " night-audit pack review with anomaly flags"]
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "text-foreground",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-semibold",
													children: "One queue"
												}), " of transactions that actually need attention"]
											})
										]
									})]
								})
							] })
						]
					}), /* @__PURE__ */ jsxs("aside", {
						className: "space-y-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "aurora-card rounded-2xl p-6",
							children: [
								/* @__PURE__ */ jsx(Quote, {
									className: "h-6 w-6 text-accent",
									"aria-hidden": true
								}),
								/* @__PURE__ */ jsxs("blockquote", {
									className: "mt-3 text-foreground",
									children: [
										"\"",
										t?.quote || `We stopped hiring our way out of back-office work. Innrly paid for itself in the
                first quarter and we're running 12 hotels with the same corporate headcount we had
                at eight.`,
										"\""
									]
								}),
								/* @__PURE__ */ jsx("footer", {
									className: "mt-4 text-sm text-muted-foreground",
									children: t ? [
										t.name,
										t.title,
										t.company
									].filter(Boolean).join(" · ") : "[VP of Operations, midwest portfolio]"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "rounded-2xl border border-border bg-surface/40 p-6",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold text-foreground",
								children: "Portfolio snapshot"
							}), /* @__PURE__ */ jsxs("dl", {
								className: "mt-3 space-y-2 text-sm",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ jsx("dt", {
											className: "text-muted-foreground",
											children: "Properties"
										}), /* @__PURE__ */ jsx("dd", {
											className: "text-foreground",
											children: "12"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ jsx("dt", {
											className: "text-muted-foreground",
											children: "Segment"
										}), /* @__PURE__ */ jsx("dd", {
											className: "text-foreground",
											children: "Select-service"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ jsx("dt", {
											className: "text-muted-foreground",
											children: "Brands"
										}), /* @__PURE__ */ jsx("dd", {
											className: "text-foreground",
											children: "Hilton, IHG, Choice"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ jsx("dt", {
											className: "text-muted-foreground",
											children: "PMS systems"
										}), /* @__PURE__ */ jsx("dd", {
											className: "text-foreground",
											children: "4"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ jsx("dt", {
											className: "text-muted-foreground",
											children: "Time to live"
										}), /* @__PURE__ */ jsx("dd", {
											className: "text-foreground",
											children: "6 weeks"
										})]
									})
								]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx(CtaBand, {
				title: "Run the same playbook on your portfolio",
				subtitle: "See what Innrly would surface in your first 30 days — book a 20-minute walkthrough.",
				primary: {
					to: "/contact",
					label: "Book a demo"
				},
				secondary: {
					to: "/industries/select-service",
					label: "Select-service overview"
				}
			})
		]
	});
}
//#endregion
export { CaseStudyPage as component };
