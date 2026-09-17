import { t as Button } from "./button-Dkpg6g2Z.js";
import { i as SectionHeading, n as Eyebrow, r as Section, t as CtaBand } from "./Section-D2XWIGS_.js";
import { n as faqs, t as Route } from "./industries.extended-stay-D0D6T1np.js";
import { t as Breadcrumbs } from "./Breadcrumbs-C1y857pw.js";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-uwqhymWC.js";
import { t as Testimonials } from "./Testimonials-CnxLa5M2.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Building2, Check, Clock, DollarSign, Users } from "lucide-react";
//#region src/routes/industries.extended-stay.tsx?tsr-split=component
var painPoints = [
	{
		title: "Long folios that don't break revenue",
		body: "30, 60, and 90+ day stays roll across multiple months. Innrly recognizes revenue correctly by night, not by check-out — so monthly P&Ls match the period they belong to."
	},
	{
		title: "Weekly housekeeping, not daily",
		body: "Labor models are tuned to weekly tidies and full cleans — MPOR benchmarks, schedule templates, and variance alerts assume the right cadence instead of fighting it."
	},
	{
		title: "Corporate and project-rate reconciliation",
		body: "Direct-bill corporate accounts and project rates reconcile nightly. A/R aging, contract-rate audits, and ledger transfers stop living in three different spreadsheets."
	},
	{
		title: "One report across Marriott, Hilton, IHG, Choice extended-stay flags",
		body: "Residence Inn, TownePlace, Homewood, Home2, Staybridge, Candlewood, WoodSpring — one nightly P&L for the whole portfolio without merging four brand reports."
	}
];
var stats = [
	{
		icon: Clock,
		stat: "Weekly",
		label: "Housekeeping cadence built into MPOR"
	},
	{
		icon: DollarSign,
		stat: "$150–300",
		label: "Weekly recovery per hotel from A/R audits"
	},
	{
		icon: Users,
		stat: "4 brand families",
		label: "Marriott, Hilton, IHG, Choice extended-stay"
	},
	{
		icon: Building2,
		stat: "Multi-month",
		label: "Folio revenue recognition by night"
	}
];
var checklist = [
	"Long-stay folio revenue recognition by night, not by check-out",
	"Weekly housekeeping MPOR benchmarks and schedule templates",
	"Direct-bill corporate account reconciliation and aging",
	"Project rate and contract audits with variance alerts",
	"Multi-brand consolidation across extended-stay flags",
	"Lean-team labor models with overtime and OT trend alerts"
];
function ExtendedStayPage() {
	const { testimonials: allTestimonials } = Route.useLoaderData();
	const pageSpecific = allTestimonials.filter((t) => t.page === "extended-stay");
	const globalTestimonials = pageSpecific.length > 0 ? pageSpecific : allTestimonials.filter((t) => t.page && t.page.startsWith("testimonials-global"));
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [
				{
					name: "Home",
					to: "/"
				},
				{ name: "Industries" },
				{ name: "Extended-Stay" }
			] }),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 bg-hero opacity-90",
					"aria-hidden": true
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-24",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-3",
						children: [
							/* @__PURE__ */ jsx(Eyebrow, { children: "Industries · Extended-Stay" }),
							/* @__PURE__ */ jsx("h1", {
								className: "mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl",
								children: "Built for the way extended-stay actually runs."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 text-lg text-muted-foreground",
								children: "Extended-stay is not just select-service with longer stays. Long folios, weekly housekeeping, project-rate corporate accounts, and lean teams change every part of the back office. Innrly is tuned for it."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ jsx(Button, {
									asChild: true,
									size: "lg",
									className: "bg-cta hover:opacity-90",
									children: /* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										children: ["See it on your portfolio ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })]
									})
								}), /* @__PURE__ */ jsx(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "border-border bg-background/40",
									children: /* @__PURE__ */ jsx(Link, {
										to: "/solutions/reconciliation",
										children: "See reconciliation"
									})
								})]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-2",
						children: /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-4",
							children: stats.map((s) => /* @__PURE__ */ jsxs("div", {
								className: "aurora-card rounded-2xl p-5",
								children: [
									/* @__PURE__ */ jsx(s.icon, {
										className: "h-5 w-5 text-accent",
										"aria-hidden": true
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-3 text-2xl font-bold text-gradient sm:text-3xl",
										children: s.stat
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: s.label
									})
								]
							}, s.label))
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Why extended-stay operators choose Innrly",
				title: "The four things generic hotel software gets wrong",
				description: "And what Innrly does about each of them."
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2",
				children: painPoints.map((p) => /* @__PURE__ */ jsxs("div", {
					className: "aurora-card rounded-2xl p-7",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-lg font-semibold text-foreground",
						children: p.title
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-muted-foreground",
						children: p.body
					})]
				}, p.title))
			})] }),
			/* @__PURE__ */ jsx(Section, {
				className: "!pt-0",
				children: /* @__PURE__ */ jsx("div", {
					className: "rounded-3xl border border-border bg-surface/40 p-8 sm:p-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-10 lg:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx(Eyebrow, { children: "What's included" }),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-4 text-3xl font-bold text-foreground",
								children: "Extended-stay specifics, not retrofits."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-muted-foreground",
								children: "Out of the box — no \"we'll customize that\" and no extra modules to license."
							})
						] }), /* @__PURE__ */ jsx("ul", {
							className: "space-y-3",
							children: checklist.map((c) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3 text-foreground",
								children: [/* @__PURE__ */ jsx(Check, {
									className: "mt-0.5 h-5 w-5 shrink-0 text-accent",
									"aria-hidden": true
								}), /* @__PURE__ */ jsx("span", { children: c })]
							}, c))
						})]
					})
				})
			}),
			/* @__PURE__ */ jsxs(Section, {
				className: "!pt-0",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Common questions",
					title: "Extended-stay FAQ"
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-auto mt-8 max-w-3xl",
					children: /* @__PURE__ */ jsx(Accordion, {
						type: "single",
						collapsible: true,
						className: "w-full",
						children: faqs.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, {
							value: `q-${i}`,
							children: [/* @__PURE__ */ jsx(AccordionTrigger, {
								className: "text-left text-base font-semibold text-foreground",
								children: f.q
							}), /* @__PURE__ */ jsx(AccordionContent, {
								className: "text-muted-foreground",
								children: f.a
							})]
						}, i))
					})
				})]
			}),
			/* @__PURE__ */ jsx(Testimonials, { testimonials: globalTestimonials }),
			/* @__PURE__ */ jsx(CtaBand, {
				title: "See Innrly on your extended-stay portfolio",
				subtitle: "20-minute walkthrough using a sample of your actual PMS and folio data.",
				primary: {
					to: "/contact",
					label: "Book a demo"
				},
				secondary: {
					to: "/industries/select-service",
					label: "Run select-service too?"
				}
			})
		]
	});
}
//#endregion
export { ExtendedStayPage as component };
