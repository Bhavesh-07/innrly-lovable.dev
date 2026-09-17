import { t as Button } from "./button-Dkpg6g2Z.js";
import { i as SectionHeading, n as Eyebrow, r as Section, t as CtaBand } from "./Section-D2XWIGS_.js";
import { n as faqs, t as Route } from "./industries.select-service-bQ6s2pOY.js";
import { t as Breadcrumbs } from "./Breadcrumbs-C1y857pw.js";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-uwqhymWC.js";
import { t as Testimonials } from "./Testimonials-CnxLa5M2.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Building2, Check, Clock, DollarSign, Users } from "lucide-react";
//#region src/routes/industries.select-service.tsx?tsr-split=component
var painPoints = [
	{
		title: "Four PMSes, one report",
		body: "OPERA, OnQ, FOSSE, choiceADVANTAGE — Innrly pulls them into one nightly P&L so corporate stops merging spreadsheets at 6 a.m."
	},
	{
		title: "Brand standards without brand silos",
		body: "Keep flag-required workflows on property while corporate sees portfolio-wide labor, RevPAR, and flow-through in a single view."
	},
	{
		title: "GMs out of the spreadsheet",
		body: "Daily flash, OTA reconciliation, and labor variance arrive in their inbox by 7 a.m. — no Excel pivot tables required."
	},
	{
		title: "Owner-ready financials",
		body: "Monthly packages render with the brand mix, ADR/Occ/RevPAR splits, and STR-style comp set context owners expect."
	}
];
var stats = [
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
		icon: Users,
		stat: "200+",
		label: "Hotels running on Innrly"
	},
	{
		icon: Building2,
		stat: "17,000+",
		label: "Rooms tracked nightly"
	}
];
var checklist = [
	"Night-audit consolidation across OPERA, OnQ, FOSSE, choiceADVANTAGE, Visual Matrix",
	"Brand.com + OTA channel reconciliation (Expedia, Booking, Hotels.com)",
	"Franchise fee, royalty, and program-fee tracking",
	"Labor and overtime alerts before payroll runs",
	"Owner P&L packages with multi-property roll-up",
	"AP automation routed by property and GL code"
];
function SelectServicePage() {
	const { testimonials: allTestimonials } = Route.useLoaderData();
	const pageSpecific = allTestimonials.filter((t) => t.page === "select-service");
	const selectServiceTestimonials = pageSpecific.length > 0 ? pageSpecific : allTestimonials.filter((t) => t.page && t.page.startsWith("testimonials-global"));
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [
				{
					name: "Home",
					to: "/"
				},
				{ name: "Industries" },
				{ name: "Select-Service" }
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
							/* @__PURE__ */ jsx(Eyebrow, { children: "Industries · Select-Service" }),
							/* @__PURE__ */ jsx("h1", {
								className: "mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl",
								children: "Built for the way select-service portfolios actually run."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 text-lg text-muted-foreground",
								children: "You're managing 5, 15, or 50 hotels across multiple flags with a corporate team smaller than most single full-service properties. Innrly is the back-office layer that lets that math work."
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
										to: "/case-studies/midwest-portfolio",
										children: "Read the 12-hotel case study"
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
				eyebrow: "Why select-service operators choose Innrly",
				title: "The four things that break at 10+ properties",
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
								children: "Everything a select-service back office needs, out of the box."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-muted-foreground",
								children: "No add-ons hunting. No \"that's a custom build.\" The features below ship the day you sign."
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
					title: "Select-service FAQ"
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
			/* @__PURE__ */ jsx(Testimonials, { testimonials: selectServiceTestimonials }),
			/* @__PURE__ */ jsx(CtaBand, {
				title: "See Innrly with your own select-service portfolio",
				subtitle: "20-minute walkthrough using a sample of your actual PMS data.",
				primary: {
					to: "/contact",
					label: "Book a demo"
				},
				secondary: {
					to: "/case-studies/midwest-portfolio",
					label: "Read the case study"
				}
			})
		]
	});
}
//#endregion
export { SelectServicePage as component };
