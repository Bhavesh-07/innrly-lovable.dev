import { t as Button } from "./button-Dkpg6g2Z.js";
import { r as Section, t as CtaBand } from "./Section-D2XWIGS_.js";
import { t as Route } from "./case-studies.urban-full-service-CSZiYfsV.js";
import { t as Breadcrumbs } from "./Breadcrumbs-C1y857pw.js";
import { t as IllustrativeBanner } from "./IllustrativeBanner-D5LDs72e.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CheckCircle2, Clock, DollarSign, Quote, TrendingDown } from "lucide-react";
//#region src/routes/case-studies.urban-full-service.tsx?tsr-split=component
var metrics = [
	{
		icon: DollarSign,
		stat: "$7K–15K",
		label: "OTA commissions recovered per quarter"
	},
	{
		icon: Clock,
		stat: "6 days",
		label: "Month-end close (was 12)"
	},
	{
		icon: TrendingDown,
		stat: "~1%",
		label: "F&B variance closed via POS-to-PMS reconciliation"
	},
	{
		icon: CheckCircle2,
		stat: "8 wks",
		label: "Time to live across the portfolio"
	}
];
function CaseStudyPage() {
	const { testimonials: allTestimonials } = Route.useLoaderData();
	const t = allTestimonials.find((t) => t.page === "case-studies-urban-full-service");
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
				{ name: "Urban Full-Service" }
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
							children: "Case Study · Urban Full-Service"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl",
							children: "Recover OTA commission every quarter — and close in days, not weeks."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-3xl text-lg text-muted-foreground",
							children: "A four-property urban full-service operator (Marriott and independent flags, full F&B and banquet operations) uses Innrly to reconcile OTA commissions nightly, code F&B revenue from POS, and deliver USALI owner packages within the first week of every month."
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
									to: "/industries/full-service",
									children: "Full-service overview"
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
									children: "Four urban hotels with full F&B operations and active banquet calendars. OTA commission statements arrived monthly, were spot-checked rather than line-matched, and discrepancies typically went unrecovered. F&B revenue was reconciled to POS only at month-end, and outlet-level variance often appeared too late to act on."
								}),
								/* @__PURE__ */ jsxs("ul", {
									className: "mt-5 space-y-3 text-muted-foreground",
									children: [
										/* @__PURE__ */ jsxs("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-accent",
												children: "·"
											}), " Booking.com, Expedia, and Hotels.com statements reconciled by sampling, not line-by-line."]
										}),
										/* @__PURE__ */ jsxs("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-accent",
												children: "·"
											}), " POS-to-PMS F&B variance discovered at month-end, rarely traced."]
										}),
										/* @__PURE__ */ jsxs("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-accent",
												children: "·"
											}), " Banquet event orders matched to revenue manually by the controller."]
										}),
										/* @__PURE__ */ jsxs("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-accent",
												children: "·"
											}), " USALI owner packages took 12 days; ownership wanted them inside a week."]
										})
									]
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl font-bold text-foreground",
								children: "The rollout"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-3 text-muted-foreground",
								children: "Innrly connected to OPERA, Micros Simphony POS, and the banquet system in the first two weeks. OTA channel reconciliation ran in parallel with manual review for one month so the controller could trust the matches. Full cutover at week eight."
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl font-bold text-foreground",
									children: "The results, 6 months in"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-muted-foreground",
									children: "OTA commission discrepancies surface nightly with a recommended dispute. Recovered commission across the four properties typically lands in the $7K–15K range per quarter depending on channel mix and dispute success rate. F&B variance tightened to roughly 1% and lives in a daily dashboard. Month-end close moved from 12 days to about 6."
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
													children: "$7K–15K"
												}), " OTA commissions recovered per quarter"]
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "text-foreground",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-semibold",
													children: "12 → 6 days"
												}), " month-end close"]
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "text-foreground",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-semibold",
													children: "~1%"
												}), " F&B variance, monitored daily"]
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "text-foreground",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-semibold",
													children: "USALI 11"
												}), " owner packages auto-generated"]
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
										t?.quote || `The OTA recovery alone paid for Innrly several times over. The faster close was the
                part ownership actually noticed.`,
										"\""
									]
								}),
								/* @__PURE__ */ jsx("footer", {
									className: "mt-4 text-sm text-muted-foreground",
									children: t ? [
										t.name,
										t.title,
										t.company
									].filter(Boolean).join(" · ") : "[Corporate Controller, urban full-service operator]"
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
											children: "4"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ jsx("dt", {
											className: "text-muted-foreground",
											children: "Segment"
										}), /* @__PURE__ */ jsx("dd", {
											className: "text-foreground",
											children: "Full-service urban"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ jsx("dt", {
											className: "text-muted-foreground",
											children: "Brands"
										}), /* @__PURE__ */ jsx("dd", {
											className: "text-foreground",
											children: "Marriott + independent"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ jsx("dt", {
											className: "text-muted-foreground",
											children: "PMS / POS"
										}), /* @__PURE__ */ jsx("dd", {
											className: "text-foreground",
											children: "OPERA / Simphony"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ jsx("dt", {
											className: "text-muted-foreground",
											children: "Time to live"
										}), /* @__PURE__ */ jsx("dd", {
											className: "text-foreground",
											children: "8 weeks"
										})]
									})
								]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx(CtaBand, {
				title: "Run the same playbook on your full-service portfolio",
				subtitle: "20-minute walkthrough using a sample of your actual OTA, PMS, and POS data.",
				primary: {
					to: "/contact",
					label: "Book a demo"
				},
				secondary: {
					to: "/industries/full-service",
					label: "Full-service overview"
				}
			})
		]
	});
}
//#endregion
export { CaseStudyPage as component };
