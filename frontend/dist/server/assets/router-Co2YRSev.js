import { i as getMetaTags, n as defaultSeoData, r as fetchSeoData, t as breadcrumbLd } from "./seo-HRkpAnC6.js";
import { t as Button } from "./button-Dkpg6g2Z.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { t as Label } from "./label-DBD1bRRP.js";
import { n as trackPageView, t as track } from "./analytics-P7BrM78M.js";
import { t as submitLead } from "./lead-submit-CtDFaqP-.js";
import { t as Wordmark } from "./Wordmark-Ba3HVvRF.js";
import { n as fetchSiteScripts, t as defaultSiteScripts } from "./scripts-4H9uFc5I.js";
import { t as Route$50 } from "./routes-CVUzV2pm.js";
import { t as terms } from "./glossary-DiPGO34Z.js";
import { t as Route$51 } from "./pricing-CBl7tOQj.js";
import { t as faqs$1 } from "./roi-calculator-DIoMuPOX.js";
import { t as faqs$2 } from "./security-CQ0Ukxey.js";
import { t as Route$52 } from "./blog.index-BVZCxIdi.js";
import { t as Route$53 } from "./blog._slug-B0o-XjZs.js";
import { t as Route$54 } from "./case-studies.index-CEF7gnUk.js";
import { t as Route$55 } from "./case-studies.boutique-group-ClYUqwtH.js";
import { t as Route$56 } from "./case-studies.extended-stay-portfolio-E5Da_7Mv.js";
import { t as Route$57 } from "./case-studies.hilton-management-company-CVnqyUb5.js";
import { t as Route$58 } from "./case-studies.midwest-portfolio-D0d7rK6N.js";
import { t as Route$59 } from "./case-studies.urban-full-service-Ce4j6K1Q.js";
import { t as comparisons } from "./compare.index-C2cVhmYR.js";
import { t as faqs$3 } from "./compare.innrly-vs-actabl-CnBKAidq.js";
import { t as faqs$4 } from "./compare.innrly-vs-aptech-D0QVvAuc.js";
import { t as faqs$5 } from "./compare.innrly-vs-hotel-effectiveness-SruBlAPW.js";
import { t as faqs$6 } from "./compare.innrly-vs-nimble-Di92EaL-.js";
import { t as faqs$7 } from "./compare.innrly-vs-otelier-DmKynTaL.js";
import { t as faqs$8 } from "./compare.innrly-vs-profitsage-8CuAZhlA.js";
import { n as Route$60 } from "./control-hub.index-LTTd0Neq.js";
import { t as Route$61 } from "./industries.extended-stay-T7d2sX43.js";
import { t as Route$62 } from "./industries.full-service-D7oc4xIp.js";
import { t as Route$63 } from "./industries.select-service-DZMazgIG.js";
import { t as faqs$9 } from "./integrations.cloudbeds-DLhc_SHq.js";
import { t as faqs$10 } from "./integrations.inn-flow-zpQAjcso.js";
import { t as faqs$11 } from "./integrations.m3-CEYYrIzF.js";
import { t as faqs$12 } from "./integrations.mews-D63SJpnf.js";
import { t as faqs$13 } from "./integrations.opera-B6uL2STH.js";
import { t as faqs$14 } from "./integrations.quickbooks-Cz_PrNX_.js";
import { t as Route$64 } from "./solutions.business-intelligence-B5lFX7WU.js";
import { t as Route$65 } from "./solutions.document-vault-DK3-DxTm.js";
import { t as Route$66 } from "./solutions.expense-entries-D6d6ovYE.js";
import { t as Route$67 } from "./solutions.financial-control-CJLGfzUv.js";
import { t as Route$68 } from "./solutions.innrly-pay-BCmdZL9o.js";
import { t as Route$69 } from "./solutions.innrly-shift-D-QpzWt-.js";
import { t as Route$70 } from "./solutions.operations-automation-CEzWhTfL.js";
import { t as Route$71 } from "./solutions.reconciliation-DrBNuy9n.js";
import { useEffect, useRef, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, redirect, useLocation, useRouter, useRouterState } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Clock, CreditCard, Loader2, Mail, Menu, Sparkles, X } from "lucide-react";
import { z } from "zod";
import { Toaster, toast } from "sonner";
//#region src/styles.css?url
var styles_default = "/assets/styles-CtUlK1yc.css";
//#endregion
//#region src/components/site/TrialModal.tsx
var SESSION_KEY = "innrly_trial_modal_seen";
var schema = z.object({
	name: z.string().trim().min(1, "Required").max(100),
	email: z.string().trim().email("Enter a valid work email").max(255),
	company: z.string().trim().min(1, "Required").max(150),
	role: z.string().trim().max(100).optional(),
	phone: z.string().trim().min(7, "Enter a valid phone").max(30),
	properties: z.string().trim().min(1, "Required").max(20),
	pms: z.string().trim().max(100).optional()
});
var benefits = [
	"Full platform access — BI, A/P automation, night audit, labor",
	"Connect your PMS, accounting, and payroll in days",
	"Dedicated onboarding specialist for your portfolio",
	"No credit card. No contract. Cancel anytime."
];
function TrialModal() {
	const [open, setOpen] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [done, setDone] = useState(false);
	const [showMore, setShowMore] = useState(false);
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (sessionStorage.getItem(SESSION_KEY)) return;
		fetch("/api/settings").then((res) => res.json()).then((data) => {
			if (data && data.innrly_trial_modal_disabled === "true") return;
			setTimeout(() => {
				setOpen(true);
				sessionStorage.setItem(SESSION_KEY, "1");
			}, 600);
		}).catch((err) => {
			setTimeout(() => {
				setOpen(true);
				sessionStorage.setItem(SESSION_KEY, "1");
			}, 600);
		});
	}, []);
	useEffect(() => {
		const handler = () => setOpen(true);
		window.addEventListener("innrly:open-trial", handler);
		return () => window.removeEventListener("innrly:open-trial", handler);
	}, []);
	useEffect(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [open]);
	useEffect(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	if (!open) return null;
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const raw = Object.fromEntries(fd.entries());
		const parsed = schema.safeParse(raw);
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
			return;
		}
		setSubmitting(true);
		const res = await submitLead({
			...parsed.data,
			source: "trial"
		});
		setSubmitting(false);
		if (!res.ok) {
			toast.error(res.error ?? "Could not submit — please try again");
			return;
		}
		setDone(true);
	}
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-3 backdrop-blur-md animate-in fade-in duration-200 sm:p-6",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "trial-modal-title",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative grid w-full max-w-5xl max-h-[92dvh] grid-cols-1 overflow-y-auto overscroll-contain rounded-2xl border border-border bg-card shadow-elevated animate-in zoom-in-95 fade-in slide-in-from-bottom-4 duration-300 md:grid-cols-2 md:max-h-[90dvh]",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setOpen(false),
					"aria-label": "Close",
					className: "absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
					children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative hidden overflow-hidden bg-hero p-8 md:flex md:flex-col md:justify-between md:p-10",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "absolute inset-0 opacity-60",
							"aria-hidden": true,
							children: [/* @__PURE__ */ jsx("div", { className: "absolute left-10 top-10 h-64 w-64 rounded-full bg-primary/30 blur-3xl" }), /* @__PURE__ */ jsx("div", { className: "absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent",
									children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }), " Limited launch offer"]
								}),
								/* @__PURE__ */ jsxs("h2", {
									id: "trial-modal-title",
									className: "mt-5 text-3xl font-bold leading-tight text-foreground",
									children: ["Try Innrly free for ", /* @__PURE__ */ jsx("span", {
										className: "text-gradient",
										children: "90 days."
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: "Full platform. Every property. Zero risk. See what your back office looks like when the spreadsheets are gone."
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "mt-6 space-y-3",
									children: benefits.map((b) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-start gap-2.5 text-sm text-foreground/90",
										children: [/* @__PURE__ */ jsx("span", {
											className: "mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-cta",
											children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-primary-foreground" })
										}), b]
									}, b))
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] font-bold uppercase tracking-widest text-accent",
										children: "New in Innrly"
									}), /* @__PURE__ */ jsxs("div", {
										className: "mt-2 grid gap-2",
										children: [/* @__PURE__ */ jsxs(Link, {
											to: "/solutions/innrly-shift",
											target: "_blank",
											rel: "noopener",
											className: "group flex items-center gap-3 rounded-lg border border-border/40 bg-surface/40 p-3 transition-colors hover:border-accent/40 hover:bg-surface/60",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "inline-flex h-8 w-8 flex-none items-center justify-center rounded-md bg-accent/15 text-accent",
													children: /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" })
												}),
												/* @__PURE__ */ jsxs("span", {
													className: "min-w-0 flex-1",
													children: [/* @__PURE__ */ jsxs("span", {
														className: "flex items-center gap-1.5",
														children: [/* @__PURE__ */ jsx("span", {
															className: "text-sm font-semibold text-foreground",
															children: "Innrly Shift"
														}), /* @__PURE__ */ jsx("span", {
															className: "rounded-full bg-accent/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent",
															children: "Add-on"
														})]
													}), /* @__PURE__ */ jsx("span", {
														className: "block truncate text-[11px] text-muted-foreground",
														children: "Face-ID labor in 5 minutes"
													})]
												}),
												/* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" })
											]
										}), /* @__PURE__ */ jsxs(Link, {
											to: "/solutions/innrly-pay",
											target: "_blank",
											rel: "noopener",
											className: "group flex items-center gap-3 rounded-lg border border-border/40 bg-surface/40 p-3 transition-colors hover:border-accent/40 hover:bg-surface/60",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "inline-flex h-8 w-8 flex-none items-center justify-center rounded-md bg-accent/15 text-accent",
													children: /* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4" })
												}),
												/* @__PURE__ */ jsxs("span", {
													className: "min-w-0 flex-1",
													children: [/* @__PURE__ */ jsxs("span", {
														className: "flex items-center gap-1.5",
														children: [/* @__PURE__ */ jsx("span", {
															className: "text-sm font-semibold text-foreground",
															children: "Innrly Pay"
														}), /* @__PURE__ */ jsx("span", {
															className: "rounded-full bg-success/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-success",
															children: "Included"
														})]
													}), /* @__PURE__ */ jsx("span", {
														className: "block truncate text-[11px] text-muted-foreground",
														children: "Virtual Cards + ACH, no bank logins"
													})]
												}),
												/* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" })
											]
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative mt-6 rounded-xl border border-border/40 bg-surface/40 p-4",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: "Trusted across"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-lg font-bold text-foreground",
								children: "200+ hotels · 17,000+ rooms · 3,000+ employees"
							})]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-col bg-card p-6 sm:p-10",
					children: done ? /* @__PURE__ */ jsxs("div", {
						className: "flex flex-1 flex-col items-center justify-center text-center",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex h-14 w-14 items-center justify-center rounded-full bg-cta",
								children: /* @__PURE__ */ jsx(Check, { className: "h-7 w-7 text-primary-foreground" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-5 text-xl font-semibold text-foreground",
								children: "You're in. Welcome to Innrly."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 max-w-sm text-sm text-muted-foreground",
								children: "Our team will reach out within one business day to schedule your onboarding and activate your 90-day trial."
							}),
							/* @__PURE__ */ jsx(Button, {
								className: "mt-6 bg-cta hover:opacity-90",
								onClick: () => setOpen(false),
								children: "Close"
							})
						]
					}) : /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "md:hidden",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent",
									children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }), " 90-day free trial"]
								}),
								/* @__PURE__ */ jsxs("h2", {
									className: "mt-3 text-2xl font-bold text-foreground",
									children: ["Try Innrly free for ", /* @__PURE__ */ jsx("span", {
										className: "text-gradient",
										children: "90 days."
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-4 grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ jsxs(Link, {
										to: "/solutions/innrly-shift",
										target: "_blank",
										rel: "noopener",
										onClick: () => setOpen(false),
										className: "flex items-start gap-2 rounded-lg border border-border/60 bg-surface/50 p-2.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-accent/15 text-accent",
											children: /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" })
										}), /* @__PURE__ */ jsxs("span", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("span", {
												className: "block text-[12px] font-semibold text-foreground",
												children: "Innrly Shift"
											}), /* @__PURE__ */ jsx("span", {
												className: "mt-0.5 inline-block rounded-full bg-accent/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent",
												children: "Add-on"
											})]
										})]
									}), /* @__PURE__ */ jsxs(Link, {
										to: "/solutions/innrly-pay",
										target: "_blank",
										rel: "noopener",
										onClick: () => setOpen(false),
										className: "flex items-start gap-2 rounded-lg border border-border/60 bg-surface/50 p-2.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-accent/15 text-accent",
											children: /* @__PURE__ */ jsx(CreditCard, { className: "h-3.5 w-3.5" })
										}), /* @__PURE__ */ jsxs("span", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("span", {
												className: "block text-[12px] font-semibold text-foreground",
												children: "Innrly Pay"
											}), /* @__PURE__ */ jsx("span", {
												className: "mt-0.5 inline-block rounded-full bg-success/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-success",
												children: "Included"
											})]
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "hidden text-xl font-semibold text-foreground md:block",
							children: "Start your 90-day trial"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Tell us about your portfolio — we'll set you up with full access."
						}),
						/* @__PURE__ */ jsxs("form", {
							onSubmit,
							className: "mt-5 grid gap-3.5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ jsx(Field, {
									label: "Full name",
									name: "name",
									placeholder: "Jane Patel"
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Work email",
									name: "email",
									type: "email",
									placeholder: "jane@hotelco.com"
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Company",
									name: "company",
									placeholder: "Hotel Co."
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Phone",
									name: "phone",
									type: "tel",
									placeholder: "(555) 123-4567"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "sm:col-span-2",
									children: /* @__PURE__ */ jsx(Field, {
										label: "# of properties",
										name: "properties",
										type: "number",
										placeholder: "12",
										min: "1"
									})
								}),
								showMore ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Field, {
									label: "Your role",
									name: "role",
									placeholder: "VP of Operations"
								}), /* @__PURE__ */ jsx(Field, {
									label: "Current PMS (optional)",
									name: "pms",
									placeholder: "Opera, Choice Advantage, etc."
								})] }) : /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setShowMore(true),
									className: "text-left text-xs font-semibold text-accent hover:underline sm:col-span-2",
									children: "+ Add role & current PMS (optional)"
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "submit",
									size: "lg",
									disabled: submitting,
									className: "mt-2 bg-cta hover:opacity-90 sm:col-span-2",
									children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader2, { className: "mr-1.5 h-4 w-4 animate-spin" }), " Submitting…"] }) : "Start my 90-day free trial"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col items-center gap-2 sm:col-span-2",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-xs text-muted-foreground",
										children: "No credit card required. We'll never share your information."
									}), /* @__PURE__ */ jsx(Link, {
										to: "/features",
										onClick: () => setOpen(false),
										className: "text-xs font-semibold text-accent hover:underline",
										children: "Not ready? Watch the 2-min product tour →"
									})]
								})
							]
						})
					] })
				})
			]
		})
	});
}
function Field({ label, name, type = "text", placeholder, min }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: name,
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx(Input, {
			id: name,
			name,
			type,
			placeholder,
			min
		})]
	});
}
/** Helper for any CTA button to open the trial modal. */
function openTrialModal() {
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("innrly:open-trial"));
}
//#endregion
//#region src/components/site/Header.tsx
var primaryNav = [
	{
		to: "/features",
		label: "Features"
	},
	{
		to: "/solutions/business-intelligence",
		label: "Solutions"
	},
	{
		to: "/pricing",
		label: "Pricing"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var resources = [
	{
		to: "/integrations",
		label: "Integrations",
		desc: "50+ PMS, accounting, payroll & banking systems."
	},
	{
		to: "/case-studies",
		label: "Case studies",
		desc: "Real portfolios, real hours saved."
	},
	{
		to: "/blog",
		label: "Blog",
		desc: "Operator playbooks and product updates."
	},
	{
		to: "/glossary",
		label: "Glossary",
		desc: "Hotel back-office terms, plainly defined."
	},
	{
		to: "/roi-calculator",
		label: "ROI calculator",
		desc: "See your savings in 30 seconds."
	},
	{
		to: "/security",
		label: "Security & trust",
		desc: "Encryption, access control, compliance."
	}
];
function Header() {
	const [open, setOpen] = useState(false);
	const [resourcesOpen, setResourcesOpen] = useState(false);
	const resourcesRef = useRef(null);
	const closeTimer = useRef(null);
	const [loginLink, setLoginLink] = useState("https://app.innrly.com");
	useEffect(() => {
		if (typeof window !== "undefined") fetch("/api/settings").then((res) => res.json()).then((data) => {
			if (data && data.innrly_login_link) setLoginLink(data.innrly_login_link);
		}).catch((err) => console.error("Failed to load settings in Header", err));
	}, []);
	useEffect(() => {
		if (!resourcesOpen) return;
		const onClick = (e) => {
			if (!resourcesRef.current?.contains(e.target)) setResourcesOpen(false);
		};
		const onKey = (e) => {
			if (e.key === "Escape") setResourcesOpen(false);
		};
		document.addEventListener("mousedown", onClick);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onClick);
			document.removeEventListener("keydown", onKey);
		};
	}, [resourcesOpen]);
	const handleEnter = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setResourcesOpen(true);
	};
	const handleLeave = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		closeTimer.current = setTimeout(() => setResourcesOpen(false), 150);
	};
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "flex items-center",
					"aria-label": "Innrly home",
					children: /* @__PURE__ */ jsx(Wordmark, { size: "md" })
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden items-center gap-7 md:flex",
					"aria-label": "Primary",
					children: [primaryNav.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						activeProps: { className: "text-foreground" },
						children: item.label
					}, item.to)), /* @__PURE__ */ jsxs("div", {
						ref: resourcesRef,
						className: "relative",
						onMouseEnter: handleEnter,
						onMouseLeave: handleLeave,
						children: [/* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => setResourcesOpen((v) => !v),
							"aria-haspopup": "menu",
							"aria-expanded": resourcesOpen,
							className: "inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
							children: ["Resources", /* @__PURE__ */ jsx(ChevronDown, {
								className: `h-3.5 w-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`,
								"aria-hidden": true
							})]
						}), resourcesOpen && /* @__PURE__ */ jsx("div", {
							role: "menu",
							className: "absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-2xl border-2 border-accent/30 bg-card/95 p-2 shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--accent)_45%,transparent)] backdrop-blur-xl",
							children: resources.map((r) => /* @__PURE__ */ jsxs(Link, {
								to: r.to,
								role: "menuitem",
								onClick: () => setResourcesOpen(false),
								className: "group flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-accent/10",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-sm font-semibold text-foreground group-hover:text-accent",
									children: r.label
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs text-muted-foreground",
									children: r.desc
								})]
							}, r.to))
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden items-center gap-2 md:flex",
					children: [
						/* @__PURE__ */ jsx(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							children: /* @__PURE__ */ jsx("a", {
								href: loginLink,
								rel: "noreferrer",
								children: "Login"
							})
						}),
						/* @__PURE__ */ jsx(Button, {
							size: "sm",
							onClick: openTrialModal,
							className: "bg-cta hover:opacity-90",
							children: "Start free trial"
						}),
						/* @__PURE__ */ jsx(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								children: "See it live"
							})
						})
					]
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					className: "inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground md:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t border-border/60 bg-background md:hidden",
			children: /* @__PURE__ */ jsxs("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3",
				"aria-label": "Mobile",
				children: [
					primaryNav.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
						children: item.label
					}, item.to)),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-2 border-t border-border/60 pt-2",
						children: [/* @__PURE__ */ jsx("p", {
							className: "px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Resources"
						}), resources.map((r) => /* @__PURE__ */ jsx(Link, {
							to: r.to,
							onClick: () => setOpen(false),
							className: "block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
							children: r.label
						}, r.to))]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-2 flex flex-col gap-2 border-t border-border/60 pt-3",
						children: [
							/* @__PURE__ */ jsx(Button, {
								asChild: true,
								variant: "ghost",
								children: /* @__PURE__ */ jsx("a", {
									href: loginLink,
									rel: "noreferrer",
									children: "Login"
								})
							}),
							/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => {
									setOpen(false);
									openTrialModal();
								},
								children: "Start 90-day free trial"
							}),
							/* @__PURE__ */ jsx(Button, {
								asChild: true,
								className: "bg-cta",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									onClick: () => setOpen(false),
									children: "See it live"
								})
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
var columns = [
	{
		title: "Product",
		links: [
			{
				to: "/features",
				label: "Features"
			},
			{
				to: "/pricing",
				label: "Pricing"
			},
			{
				to: "/integrations",
				label: "Integrations"
			},
			{
				to: "/onboarding",
				label: "Get started"
			},
			{
				to: "/solutions/innrly-pay",
				label: "Innrly Pay"
			},
			{
				to: "/solutions/innrly-shift",
				label: "Innrly Shift"
			}
		]
	},
	{
		title: "Solutions",
		links: [
			{
				to: "/solutions/business-intelligence",
				label: "Business Intelligence"
			},
			{
				to: "/solutions/financial-control",
				label: "Financial Control"
			},
			{
				to: "/solutions/innrly-shift",
				label: "Innrly Shift"
			},
			{
				to: "/solutions/operations-automation",
				label: "Operations Automation"
			},
			{
				to: "/solutions/reconciliation",
				label: "Reconciliation"
			},
			{
				to: "/solutions/expense-entries",
				label: "Expense Entries"
			},
			{
				to: "/solutions/document-vault",
				label: "Document Vault"
			},
			{
				to: "/services/accountability-pack",
				label: "Accountability Pack"
			}
		]
	},
	{
		title: "Resources",
		links: [
			{
				to: "/blog",
				label: "Blog"
			},
			{
				to: "/glossary",
				label: "Glossary"
			},
			{
				to: "/case-studies",
				label: "Case studies"
			},
			{
				to: "/roi-calculator",
				label: "ROI calculator"
			},
			{
				to: "/compare",
				label: "Compare"
			},
			{
				to: "/integrations/m3",
				label: "Innrly + M3"
			},
			{
				to: "/integrations/quickbooks",
				label: "Innrly + QuickBooks"
			},
			{
				to: "/industries/select-service",
				label: "Select-Service Hotels"
			}
		]
	},
	{
		title: "Company",
		links: [
			{
				to: "/about",
				label: "About"
			},
			{
				to: "/contact",
				label: "Contact"
			},
			{
				to: "/security",
				label: "Security & trust"
			},
			{
				to: "/developers",
				label: "Developers"
			}
		]
	},
	{
		title: "Legal",
		links: [
			{
				to: "/legal/privacy",
				label: "Privacy"
			},
			{
				to: "/legal/terms",
				label: "Terms"
			},
			{
				to: "/legal/subscription",
				label: "Subscription Agreement"
			},
			{
				to: "/legal/security",
				label: "Security"
			},
			{
				to: "/legal/cookies",
				label: "Cookies"
			},
			{
				to: "/legal/accessibility",
				label: "Accessibility"
			}
		]
	}
];
function Footer() {
	const [socials, setSocials] = useState({
		facebook: "https://www.facebook.com/Innrlyy/",
		instagram: "https://www.instagram.com/innrly/",
		linkedin: "https://www.linkedin.com/company/innrly/",
		twitter: "https://x.com/innrly",
		youtube: ""
	});
	useEffect(() => {
		if (typeof window !== "undefined") fetch("/api/settings").then((res) => res.json()).then((data) => {
			if (data) setSocials({
				facebook: data.social_facebook !== void 0 ? data.social_facebook : "https://www.facebook.com/Innrlyy/",
				instagram: data.social_instagram !== void 0 ? data.social_instagram : "https://www.instagram.com/innrly/",
				linkedin: data.social_linkedin !== void 0 ? data.social_linkedin : "https://www.linkedin.com/company/innrly/",
				twitter: data.social_twitter !== void 0 ? data.social_twitter : "https://x.com/innrly",
				youtube: data.social_youtube || ""
			});
		}).catch(() => {});
	}, []);
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border/60 bg-surface/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 xl:grid-cols-[minmax(13rem,1.25fr)_repeat(5,minmax(0,1fr))] xl:gap-x-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "col-span-2 min-w-0 md:col-span-1",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/",
								className: "flex items-center",
								"aria-label": "Innrly home",
								children: /* @__PURE__ */ jsx(Wordmark, { size: "md" })
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: "One platform for hotel back-office automation, business intelligence, and labor management."
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "mailto:contact@innrly.com",
								className: "mt-4 inline-flex max-w-full items-start gap-2 text-sm font-medium text-accent hover:underline",
								children: [/* @__PURE__ */ jsx(Mail, {
									className: "h-4 w-4 shrink-0",
									"aria-hidden": true
								}), /* @__PURE__ */ jsx("span", {
									className: "min-w-0 break-all",
									children: "contact@innrly.com"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex items-center gap-3",
								children: [
									socials.facebook && /* @__PURE__ */ jsx("a", {
										href: socials.facebook,
										target: "_blank",
										rel: "noopener noreferrer",
										title: "Facebook",
										"aria-label": "Innrly on Facebook",
										className: "flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-foreground/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-foreground/10 hover:text-foreground",
										children: /* @__PURE__ */ jsx("svg", {
											className: "h-4 w-4",
											fill: "none",
											height: "24",
											stroke: "currentColor",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: "2",
											viewBox: "0 0 24 24",
											width: "24",
											children: /* @__PURE__ */ jsx("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" })
										})
									}),
									socials.instagram && /* @__PURE__ */ jsx("a", {
										href: socials.instagram,
										target: "_blank",
										rel: "noopener noreferrer",
										title: "Instagram",
										"aria-label": "Innrly on Instagram",
										className: "flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-foreground/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-foreground/10 hover:text-foreground",
										children: /* @__PURE__ */ jsxs("svg", {
											className: "h-4 w-4",
											fill: "none",
											height: "24",
											stroke: "currentColor",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: "2",
											viewBox: "0 0 24 24",
											width: "24",
											children: [
												/* @__PURE__ */ jsx("rect", {
													height: "20",
													rx: "5",
													ry: "5",
													width: "20",
													x: "2",
													y: "2"
												}),
												/* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
												/* @__PURE__ */ jsx("line", {
													x1: "17.5",
													x2: "17.51",
													y1: "6.5",
													y2: "6.5"
												})
											]
										})
									}),
									socials.linkedin && /* @__PURE__ */ jsx("a", {
										href: socials.linkedin,
										target: "_blank",
										rel: "noopener noreferrer",
										title: "LinkedIn",
										"aria-label": "Innrly on LinkedIn",
										className: "flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-foreground/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-foreground/10 hover:text-foreground",
										children: /* @__PURE__ */ jsxs("svg", {
											className: "h-4 w-4",
											fill: "none",
											height: "24",
											stroke: "currentColor",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: "2",
											viewBox: "0 0 24 24",
											width: "24",
											children: [
												/* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
												/* @__PURE__ */ jsx("rect", {
													height: "12",
													width: "4",
													x: "2",
													y: "9"
												}),
												/* @__PURE__ */ jsx("circle", {
													cx: "4",
													cy: "4",
													r: "2"
												})
											]
										})
									}),
									socials.twitter && /* @__PURE__ */ jsx("a", {
										href: socials.twitter,
										target: "_blank",
										rel: "noopener noreferrer",
										title: "X (Twitter)",
										"aria-label": "Innrly on X",
										className: "flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-foreground/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-foreground/10 hover:text-foreground",
										children: /* @__PURE__ */ jsx("svg", {
											className: "h-4 w-4",
											fill: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
										})
									}),
									socials.youtube && /* @__PURE__ */ jsx("a", {
										href: socials.youtube,
										target: "_blank",
										rel: "noopener noreferrer",
										title: "YouTube",
										"aria-label": "Innrly on YouTube",
										className: "flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-foreground/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-foreground/10 hover:text-foreground",
										children: /* @__PURE__ */ jsx("svg", {
											className: "h-4 w-4",
											fill: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ jsx("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
										})
									})
								]
							})
						]
					}), columns.map((col) => /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-semibold text-foreground",
							children: col.title
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-4 space-y-3",
							children: col.links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: l.to,
								className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
								children: l.label
							}) }, l.to))
						})]
					}, col.title))]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-12 border-t border-border/60 pt-8",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Innrly mobile apps"
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-3 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "https://apps.apple.com/app/innrly",
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "Download Innrly on the App Store",
							className: "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/60",
							children: [/* @__PURE__ */ jsx("svg", {
								className: "h-5 w-5",
								viewBox: "0 0 24 24",
								fill: "currentColor",
								"aria-hidden": true,
								children: /* @__PURE__ */ jsx("path", { d: "M17.05 12.5a4.27 4.27 0 0 1 2.04-3.59 4.38 4.38 0 0 0-3.45-1.87c-1.45-.15-2.85.86-3.6.86-.76 0-1.9-.84-3.13-.82a4.6 4.6 0 0 0-3.87 2.36c-1.66 2.88-.42 7.13 1.19 9.46.79 1.14 1.72 2.42 2.94 2.38 1.18-.05 1.63-.76 3.06-.76 1.42 0 1.83.76 3.08.74 1.27-.02 2.08-1.16 2.86-2.31a10.2 10.2 0 0 0 1.3-2.66 4.13 4.13 0 0 1-2.42-3.79zM14.78 5.6a4.2 4.2 0 0 0 .96-3.02 4.27 4.27 0 0 0-2.77 1.43 3.99 3.99 0 0 0-.99 2.91 3.53 3.53 0 0 0 2.8-1.32z" })
							}), /* @__PURE__ */ jsxs("span", {
								className: "flex flex-col leading-tight",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-normal text-muted-foreground",
									children: "Download on the"
								}), /* @__PURE__ */ jsx("span", { children: "App Store" })]
							})]
						}), /* @__PURE__ */ jsxs("a", {
							href: "https://play.google.com/store/apps/details?id=com.innrly",
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "Get Innrly on Google Play",
							className: "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/60",
							children: [/* @__PURE__ */ jsx("svg", {
								className: "h-5 w-5",
								viewBox: "0 0 24 24",
								fill: "currentColor",
								"aria-hidden": true,
								children: /* @__PURE__ */ jsx("path", { d: "M3.6 2.1c-.3.3-.5.7-.5 1.2v17.4c0 .5.2.9.5 1.2l9.3-9.9L3.6 2.1zm10.4 11l2.8 2.9-9.5 5.4 6.7-8.3zm0-2.2L7.3 2.6l9.5 5.4-2.8 2.9zm6.8 1.1c0 .5-.3 1-.8 1.3l-2.5 1.4-3-3.2 3-3.2 2.5 1.4c.5.3.8.8.8 1.3z" })
							}), /* @__PURE__ */ jsxs("span", {
								className: "flex flex-col leading-tight",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-normal text-muted-foreground",
									children: "Get it on"
								}), /* @__PURE__ */ jsx("span", { children: "Google Play" })]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ jsxs("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Innrly. All rights reserved."
						]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground",
						children: "Built for hotel owners and operators."
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/site/StickyMobileCta.tsx
/**
* Mobile-only sticky CTA bar. Hidden on form pages where it would be redundant.
* Opens the 90-day trial modal directly so it's always one tap away.
*/
function StickyMobileCta() {
	const { pathname } = useLocation();
	if (pathname.startsWith("/contact") || pathname.startsWith("/onboarding") || pathname.startsWith("/legal")) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md sm:hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ jsx("div", {
					className: "truncate text-sm font-semibold text-foreground",
					children: "Try Innrly free for 90 days"
				}), /* @__PURE__ */ jsx("div", {
					className: "truncate text-[11px] text-muted-foreground",
					children: "Full platform · No credit card"
				})]
			}), /* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: () => {
					track("cta_click", {
						cta: "open_trial",
						location: "sticky_mobile_cta"
					});
					openTrialModal();
				},
				className: "inline-flex shrink-0 items-center gap-1 rounded-md bg-cta px-3.5 py-2 text-sm font-semibold text-primary-foreground",
				children: ["Start trial ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
			})]
		})
	});
}
//#endregion
//#region src/components/site/DesktopScrollCta.tsx
/**
* Desktop-only scroll-triggered CTA card. Appears bottom-right after the user
* scrolls past 50% of a long page (blog post / compare). Dismissible per route.
*/
var ALLOW_PREFIXES = ["/blog/", "/compare/innrly-vs-"];
var STORAGE_PREFIX = "innrly_desktop_cta_dismissed:";
function DesktopScrollCta() {
	const { pathname } = useLocation();
	const [visible, setVisible] = useState(false);
	const [dismissed, setDismissed] = useState(false);
	const isAllowed = ALLOW_PREFIXES.some((p) => pathname.startsWith(p));
	useEffect(() => {
		setVisible(false);
		setDismissed(false);
		if (typeof window === "undefined" || !isAllowed) return;
		const key = STORAGE_PREFIX + pathname;
		if (sessionStorage.getItem(key)) {
			setDismissed(true);
			return;
		}
		const onScroll = () => {
			const doc = document.documentElement;
			const max = doc.scrollHeight - doc.clientHeight;
			if (max <= 0) return;
			if (window.scrollY / max > .5) setVisible(true);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, [pathname, isAllowed]);
	if (!isAllowed || dismissed || !visible) return null;
	const dismiss = () => {
		if (typeof window !== "undefined") sessionStorage.setItem(STORAGE_PREFIX + pathname, "1");
		setDismissed(true);
	};
	return /* @__PURE__ */ jsx("div", {
		className: "fixed bottom-6 right-6 z-40 hidden w-80 animate-in fade-in slide-in-from-bottom-4 duration-500 sm:block",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-2xl border border-accent/30 bg-card/95 p-5 shadow-glow backdrop-blur",
			children: [
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: dismiss,
					"aria-label": "Dismiss",
					className: "absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
					children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-accent",
					children: "See it on your portfolio"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm font-semibold text-foreground",
					children: "Book a 20-minute walkthrough"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "We'll show Innrly running against a portfolio your size — PMS, accounting, and labor wired up."
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: "/contact",
					onClick: () => track("cta_click", {
						cta: "book_demo",
						location: "desktop_scroll_cta"
					}),
					className: "mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-cta px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95",
					children: ["Book a demo ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
				})
			]
		})
	});
}
//#endregion
//#region src/components/site/DevLeadBanner.tsx
/**
* Loud, visible banner that appears at the top of the site whenever the
* lead-capture backend URL is not configured. Visible in dev AND preview/
* staging builds so the developer can't miss it. Hidden in production
* builds (NODE_ENV === "production") even if unset — that's a config bug
* we don't want shown to real visitors, but we want it screaming during
* handoff.
*
* See docs/DEVELOPER_HANDOFF_LEADS.md
*/
function DevLeadBanner() {
	const [dismissed, setDismissed] = useState(false);
	return null;
}
//#endregion
//#region src/components/site/DevAnalyticsBanner.tsx
/**
* Visible warning shown in dev/preview when VITE_ANALYTICS_ENDPOINT is unset.
* Hidden in production builds. See docs/DEVELOPER_HANDOFF_ANALYTICS.md
*/
function DevAnalyticsBanner() {
	const [dismissed, setDismissed] = useState(false);
	return null;
}
//#endregion
//#region src/components/site/AnalyticsProvider.tsx
/**
* Mounts site-wide analytics listeners:
*   • route-change page_view
*   • 50% / 90% scroll_depth (once per page)
*   • outbound link clicks (delegated)
*
* See src/lib/analytics.ts and docs/DEVELOPER_HANDOFF_ANALYTICS.md
*/
function AnalyticsProvider() {
	const { pathname, search } = useLocation();
	const lastPath = useRef("");
	useEffect(() => {
		const full = pathname + (search ? `?${new URLSearchParams(search).toString()}` : "");
		if (lastPath.current === full) return;
		lastPath.current = full;
		trackPageView(pathname);
	}, [pathname, search]);
	useEffect(() => {
		if (typeof window === "undefined") return;
		const hit = {
			50: false,
			90: false
		};
		const onScroll = () => {
			const doc = document.documentElement;
			const max = doc.scrollHeight - doc.clientHeight;
			if (max <= 0) return;
			const pct = window.scrollY / max * 100;
			if (!hit[50] && pct >= 50) {
				hit[50] = true;
				track("scroll_depth", { depth: 50 });
			}
			if (!hit[90] && pct >= 90) {
				hit[90] = true;
				track("scroll_depth", { depth: 90 });
			}
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [pathname]);
	useEffect(() => {
		if (typeof window === "undefined") return;
		const onClick = (e) => {
			const target = e.target?.closest?.("a");
			if (!target) return;
			const href = target.getAttribute("href");
			if (!href || href.startsWith("#") || href.startsWith("/")) return;
			try {
				const u = new URL(href, window.location.origin);
				if (u.origin !== window.location.origin) track("outbound_click", {
					href: u.href,
					host: u.host
				});
			} catch {}
		};
		document.addEventListener("click", onClick, { capture: true });
		return () => document.removeEventListener("click", onClick, { capture: true });
	}, []);
	return null;
}
//#endregion
//#region src/components/ui/sonner.tsx
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ jsx(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
//#endregion
//#region src/components/site/CookieConsent.tsx
var STORAGE_KEY = "innrly_cookie_consent_v1";
/**
* Lightweight EU/UK-friendly cookie consent banner.
*
* Stores a single choice in localStorage. Until the user makes a choice,
* downstream analytics scripts should check `window.__cookieConsent === "accepted"`
* before firing. The banner re-appears only if the stored value is missing.
*/
function CookieConsent() {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) window.__cookieConsent = stored;
			else setVisible(true);
		} catch {
			setVisible(true);
		}
	}, []);
	function decide(choice) {
		try {
			localStorage.setItem(STORAGE_KEY, choice);
			window.__cookieConsent = choice;
		} catch {}
		track("cookie_consent", { choice });
		setVisible(false);
	}
	if (!visible) return null;
	return /* @__PURE__ */ jsx("div", {
		role: "dialog",
		"aria-live": "polite",
		"aria-label": "Cookie consent",
		className: "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-2xl sm:border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ jsxs("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"We use cookies to improve your experience and measure site performance. See our",
					" ",
					/* @__PURE__ */ jsx(Link, {
						to: "/legal/cookies",
						className: "text-accent underline",
						children: "cookie policy"
					}),
					"."
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 gap-2",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: "border-border bg-background/40",
					onClick: () => decide("rejected"),
					children: "Reject"
				}), /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "bg-cta hover:opacity-90",
					onClick: () => decide("accepted"),
					children: "Accept"
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/site/CursorGlow.tsx
/**
* CursorGlow — soft cyan/indigo radial gradient that follows the cursor
* across designated dark zones. Adds "alive" feel without animation noise.
*
* Usage:
*   <CursorGlow /> mounted once in __root.
*   Mark dark sections with className="cursor-glow-zone" (or any element)
*   and the glow will appear inside them when the cursor enters.
*/
function CursorGlow() {
	const ref = useRef(null);
	useEffect(() => {
		if (typeof window === "undefined") return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const touch = window.matchMedia("(hover: none)").matches;
		if (reduce || touch) return;
		const el = ref.current;
		if (!el) return;
		let rafId = null;
		let pendingX = 0;
		let pendingY = 0;
		let inZone = false;
		const apply = () => {
			rafId = null;
			el.style.setProperty("--cx", `${pendingX}px`);
			el.style.setProperty("--cy", `${pendingY}px`);
		};
		const onMove = (e) => {
			pendingX = e.clientX;
			pendingY = e.clientY;
			const insideZone = !!document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-glow=\"dark\"], .cursor-glow-zone");
			if (insideZone !== inZone) {
				inZone = insideZone;
				el.style.opacity = inZone ? "1" : "0";
			}
			if (rafId == null) rafId = requestAnimationFrame(apply);
		};
		const onLeave = () => {
			inZone = false;
			el.style.opacity = "0";
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		document.addEventListener("mouseleave", onLeave);
		return () => {
			window.removeEventListener("mousemove", onMove);
			document.removeEventListener("mouseleave", onLeave);
			if (rafId != null) cancelAnimationFrame(rafId);
		};
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref,
		"aria-hidden": true,
		className: "pointer-events-none fixed z-[5] transition-opacity duration-300",
		style: {
			left: 0,
			top: 0,
			width: 620,
			height: 620,
			opacity: 0,
			transform: "translate3d(calc(var(--cx, -9999px) - 50%), calc(var(--cy, -9999px) - 50%), 0)",
			background: "radial-gradient(circle, oklch(0.78 0.16 195 / 0.32) 0%, oklch(0.62 0.22 260 / 0.18) 38%, transparent 72%)",
			filter: "blur(28px)",
			mixBlendMode: "screen"
		}
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "pointer-events-none absolute inset-0 opacity-40",
			"aria-hidden": true,
			children: [/* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary blur-3xl" }), /* @__PURE__ */ jsx("div", { className: "absolute left-1/3 bottom-1/4 h-64 w-64 rounded-full bg-accent blur-3xl" })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative max-w-lg text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[10rem] font-black leading-none tracking-tight text-gradient sm:text-[12rem]",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-2 text-2xl font-semibold text-foreground",
					children: "This room isn't on the floor plan."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist, has been moved, or never checked in."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-cta px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
						children: "Back to home"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "inline-flex items-center justify-center rounded-md border border-border bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted",
						children: "Contact us"
					})]
				})
			]
		})]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-cta px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var SITE_URL = "https://innrly.com";
var Route$49 = createRootRouteWithContext()({
	loader: async () => {
		return { siteScripts: await fetchSiteScripts() };
	},
	head: ({ loaderData }) => {
		const scripts = loaderData?.siteScripts || defaultSiteScripts;
		const isActive = scripts.is_active !== false;
		const ga4Id = scripts.ga4_id;
		const gtmId = scripts.gtm_id;
		const dynamicScripts = [];
		if (isActive && gtmId) dynamicScripts.push({ children: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        ` });
		if (isActive && ga4Id) dynamicScripts.push({
			src: `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`,
			async: true
		}, { children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga4Id}', {
              send_page_view: false
            });
          ` });
		dynamicScripts.push({
			src: "https://www.google.com/recaptcha/api.js?render=6LcVJrkkAAAAABsSLGi1FDOjAtIyby9UNsBQPUCd&ver=3.0",
			async: true
		});
		dynamicScripts.push({
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Innrly",
				url: SITE_URL,
				logo: `${SITE_URL}/favicon.svg`,
				description: "Hotel management software for back-office automation, business intelligence, and labor management.",
				sameAs: ["https://www.linkedin.com/company/innrly", "https://x.com/innrly"]
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: "Innrly",
				url: SITE_URL,
				potentialAction: {
					"@type": "SearchAction",
					target: {
						"@type": "EntryPoint",
						urlTemplate: `${SITE_URL}/glossary?q={search_term_string}`
					},
					"query-input": "required name=search_term_string"
				}
			})
		});
		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{ title: "Innrly — Hotel management software" },
				{
					name: "description",
					content: "Innrly is one platform for hotel back-office automation, business intelligence, and labor management. Save 20–40 hours a month per property."
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: "Innrly"
				},
				{
					property: "og:image",
					content: `${SITE_URL}/og/home.jpg`
				},
				{
					property: "og:image:width",
					content: "1216"
				},
				{
					property: "og:image:height",
					content: "640"
				},
				{
					property: "og:image:alt",
					content: "Innrly — back-office automation for hotels."
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:image",
					content: `${SITE_URL}/og/home.jpg`
				},
				{
					name: "theme-color",
					content: "#0f1d2e"
				}
			],
			links: [
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "icon",
					type: "image/svg+xml",
					href: "/favicon.svg"
				},
				{
					rel: "apple-touch-icon",
					href: "/favicon.svg"
				},
				{
					rel: "manifest",
					href: "/site.webmanifest"
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "anonymous"
				},
				{
					rel: "preload",
					as: "style",
					href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
				}
			],
			scripts: dynamicScripts
		};
	},
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function CustomScriptsInjector({ headerTags, footerTags, isActive }) {
	useEffect(() => {
		if (!isActive) return;
		const injectHtml = (htmlStr, target, idPrefix) => {
			document.querySelectorAll(`[data-injected-by="${idPrefix}"]`).forEach((el) => el.remove());
			if (!htmlStr || !htmlStr.trim()) return;
			const container = document.createElement("div");
			container.innerHTML = htmlStr;
			Array.from(container.childNodes).forEach((node) => {
				if (node.nodeName === "SCRIPT") {
					const script = document.createElement("script");
					const origScript = node;
					Array.from(origScript.attributes).forEach((attr) => {
						script.setAttribute(attr.name, attr.value);
					});
					script.setAttribute("data-injected-by", idPrefix);
					script.textContent = origScript.textContent;
					target.appendChild(script);
				} else if (node.nodeType === Node.ELEMENT_NODE) {
					const el = node.cloneNode(true);
					el.setAttribute("data-injected-by", idPrefix);
					target.appendChild(el);
				}
			});
		};
		if (headerTags) injectHtml(headerTags, document.head, "innrly-head-tags");
		if (footerTags) injectHtml(footerTags, document.body, "innrly-footer-tags");
		return () => {
			document.querySelectorAll("[data-injected-by^=\"innrly-\"]").forEach((el) => el.remove());
		};
	}, [
		headerTags,
		footerTags,
		isActive
	]);
	return null;
}
function RootShell({ children }) {
	const scripts = Route$49.useLoaderData()?.siteScripts;
	const isActive = scripts?.is_active !== false;
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [
			isActive && scripts?.gtm_id && /* @__PURE__ */ jsx("noscript", { children: /* @__PURE__ */ jsx("iframe", {
				src: `https://www.googletagmanager.com/ns.html?id=${scripts.gtm_id}`,
				height: "0",
				width: "0",
				style: {
					display: "none",
					visibility: "hidden"
				}
			}) }),
			children,
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$49.useRouteContext();
	const scripts = Route$49.useLoaderData()?.siteScripts;
	const isActive = scripts?.is_active !== false;
	const routerState = useRouterState();
	const isAdminRoute = routerState.location.pathname.startsWith("/control-hub") || routerState.location.pathname.startsWith("/admin");
	useEffect(() => {
		if (isAdminRoute) {
			document.documentElement.classList.remove("dark");
			document.body.style.backgroundColor = "#f8f9fa";
		} else {
			document.documentElement.classList.add("dark");
			document.body.style.backgroundColor = "";
		}
	}, [isAdminRoute]);
	if (isAdminRoute) return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ jsx(CustomScriptsInjector, {
				headerTags: scripts?.header_tags,
				footerTags: scripts?.footer_tags,
				isActive
			}),
			/* @__PURE__ */ jsx("div", {
				className: "min-h-screen h-full w-full bg-[#f8f9fa] flex flex-col",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(Toaster$1, {})
		]
	});
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ jsx(CustomScriptsInjector, {
				headerTags: scripts?.header_tags,
				footerTags: scripts?.footer_tags,
				isActive
			}),
			/* @__PURE__ */ jsx("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cta focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex min-h-dvh flex-col pb-20 sm:pb-0",
				children: [
					/* @__PURE__ */ jsx(DevLeadBanner, {}),
					/* @__PURE__ */ jsx(DevAnalyticsBanner, {}),
					/* @__PURE__ */ jsx(Header, {}),
					/* @__PURE__ */ jsx("main", {
						id: "main",
						className: "cursor-glow-zone flex-1",
						children: /* @__PURE__ */ jsx(Outlet, {})
					}),
					/* @__PURE__ */ jsx(Footer, {})
				]
			}),
			/* @__PURE__ */ jsx(AnalyticsProvider, {}),
			/* @__PURE__ */ jsx(StickyMobileCta, {}),
			/* @__PURE__ */ jsx(DesktopScrollCta, {}),
			/* @__PURE__ */ jsx(CookieConsent, {}),
			/* @__PURE__ */ jsx(TrialModal, {}),
			/* @__PURE__ */ jsx(CursorGlow, {}),
			/* @__PURE__ */ jsx(Toaster$1, {})
		]
	});
}
//#endregion
//#region src/routes/404.tsx
var Route$48 = createFileRoute("/404")({
	component: NotFoundPage,
	loader: async () => {
		return { seo: await fetchSeoData("/404") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/404"], "/404")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/404"
		}]
	})
});
function NotFoundPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-4 py-20",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "pointer-events-none absolute inset-0 opacity-40",
			"aria-hidden": true,
			children: [/* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary blur-3xl" }), /* @__PURE__ */ jsx("div", { className: "absolute left-1/3 bottom-1/4 h-64 w-64 rounded-full bg-accent blur-3xl" })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative max-w-lg text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[10rem] font-black leading-none tracking-tight text-gradient sm:text-[12rem]",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-2 text-2xl font-semibold text-foreground",
					children: "This room isn't on the floor plan."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist, has been moved, or never checked in."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-cta px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
						children: "Back to home"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "inline-flex items-center justify-center rounded-md border border-border bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted",
						children: "Contact us"
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$40 = () => import("./about-DNQMJb-T.js");
var Route$47 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$40, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/about") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/about"], "/about"), {
			property: "og:image:alt",
			content: "We ate our own cooking for 16 years — built by Vimal Patel inside Q Hotels Management."
		}],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/about"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "AboutPage",
				name: "About Innrly",
				url: "/about",
				description: "Innrly was built by hotelier Vimal Patel and has run Q Hotels Management's portfolio since 2007.",
				mainEntity: {
					"@type": "Organization",
					name: "Innrly",
					founder: {
						"@type": "Person",
						name: "Vimal Patel",
						jobTitle: "Founder, Innrly · Q Hotels Management"
					},
					foundingDate: "2007"
				}
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: "/"
				}, {
					"@type": "ListItem",
					position: 2,
					name: "About",
					item: "/about"
				}]
			})
		}]
	})
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$39 = () => import("./contact-BMbXSeQD.js");
var Route$46 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$39, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/contact") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/contact"], "/contact"), {
			property: "og:image:alt",
			content: "Talk to an operator, not an SDR. 30-minute demo on your portfolio."
		}],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ContactPage",
				name: "Contact Innrly",
				url: "/contact",
				mainEntity: {
					"@type": "Organization",
					name: "Innrly",
					contactPoint: {
						"@type": "ContactPoint",
						contactType: "sales",
						email: "sales@innrly.com",
						availableLanguage: ["English"],
						areaServed: "US"
					}
				}
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: "/"
				}, {
					"@type": "ListItem",
					position: 2,
					name: "Contact",
					item: "/contact"
				}]
			})
		}]
	})
});
//#endregion
//#region src/routes/control-hub.tsx
var $$splitComponentImporter$38 = () => import("./control-hub-CEGtjnXz.js");
var Route$45 = createFileRoute("/control-hub")({
	component: lazyRouteComponent($$splitComponentImporter$38, "component"),
	head: () => ({ meta: [{ title: "Control Hub — Innrly Administration" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] })
});
//#endregion
//#region src/routes/developers.tsx
var $$splitComponentImporter$37 = () => import("./developers-DKf6SegF.js");
var Route$44 = createFileRoute("/developers")({
	component: lazyRouteComponent($$splitComponentImporter$37, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/developers") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/developers"], "/developers")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/developers"
		}],
		scripts: [breadcrumbLd([{
			name: "Home",
			url: "/"
		}, {
			name: "Developers",
			url: "/developers"
		}])]
	})
});
//#endregion
//#region src/routes/features.tsx
var $$splitComponentImporter$36 = () => import("./features-hxKN_Mkv.js");
var Route$43 = createFileRoute("/features")({
	component: lazyRouteComponent($$splitComponentImporter$36, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/features") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/features"], "/features"), {
			property: "og:image:alt",
			content: "Night audit to morning coffee — already done. Reconciliation, AP, payroll, BI."
		}],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/features"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: "/"
				}, {
					"@type": "ListItem",
					position: 2,
					name: "Features",
					item: "/features"
				}]
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ItemList",
				name: "Innrly Features",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Business Intelligence",
						url: "/solutions/business-intelligence"
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Financial Control",
						url: "/solutions/financial-control"
					},
					{
						"@type": "ListItem",
						position: 3,
						name: "Labor & Workforce",
						url: "/solutions/innrly-shift"
					},
					{
						"@type": "ListItem",
						position: 4,
						name: "Operations Automation",
						url: "/solutions/operations-automation"
					},
					{
						"@type": "ListItem",
						position: 5,
						name: "Innrly Pay",
						url: "/solutions/innrly-pay"
					},
					{
						"@type": "ListItem",
						position: 6,
						name: "Innrly Shift",
						url: "/solutions/innrly-shift"
					}
				]
			})
		}]
	})
});
/** Fade-up reveal on scroll. Falls back to visible if IO unsupported. */
//#endregion
//#region src/routes/glossary.tsx
var $$splitComponentImporter$35 = () => import("./glossary-wnKVs6b4.js");
var Route$42 = createFileRoute("/glossary")({
	component: lazyRouteComponent($$splitComponentImporter$35, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/glossary") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/glossary"], "/glossary")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/glossary"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "DefinedTermSet",
				name: "Hotel Operations Glossary",
				hasDefinedTerm: terms.map((t) => ({
					"@type": "DefinedTerm",
					name: t.term,
					description: `${t.full}. ${t.def}`
				}))
			})
		}]
	})
});
//#endregion
//#region src/routes/hotel-back-office-automation.tsx
var faqs = [
	{
		q: "Will this require us to replace our PMS or General Ledger?",
		a: "No. Innrly is PMS-neutral and GL-neutral. It sits in the middle, connecting PMS systems (Opera, Hilton OnQ, FOSSE) with General Ledgers (QuickBooks, M3, Sage Intacct). You keep your systems of record, while Innrly automates the manual entries and reconciliation between them."
	},
	{
		q: "How much time do properties actually save?",
		a: "Depending on the brand and size, properties save between 40 and 180 hours per month. The biggest savings come from automated night audit packet filing, automated A/P invoice extraction/GL coding, and daily deposit reconciliation."
	},
	{
		q: "What is an Exceptions-First workflow?",
		a: "Instead of having your controller check all 10,000 daily transactions, Innrly's engine matches and clears the correct ones overnight. Only the variances (mismatched credit card batches, missed deposits, or wrong invoice totals) land on the exceptions dashboard for human triage."
	},
	{
		q: "How does it handle compliance for biometric Face-ID?",
		a: "Innrly provides standard biometric disclosures and releases for workers during enrollment on tablets, helping you comply with local regulations (such as BIPA in Illinois) by keeping consent tracking built directly into the flow."
	}
];
var Route$41 = createFileRoute("/hotel-back-office-automation")({
	loader: async () => {
		return { seo: await fetchSeoData("/hotel-back-office-automation") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/hotel-back-office-automation"], "/hotel-back-office-automation")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/hotel-back-office-automation"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([{
			name: "Home",
			url: "/"
		}, {
			name: "Hotel Back-Office Automation",
			url: "/hotel-back-office-automation"
		}])]
	})
});
//#endregion
//#region src/routes/llms-full[.]txt.ts
var Route$40 = createFileRoute("/llms-full.txt")({ server: { handlers: { GET: async () => {
	let content = `# Innrly Full Documentation\n\n> Comprehensive AI Search Knowledge Base.\n`;
	try {
		const backendUrl = process.env.BACKEND_URL || "http://127.0.0.1:8005";
		const res = await fetch(`${backendUrl}/api/llms-txt`);
		if (res.ok) {
			const data = await res.json();
			if (data && data.llms_full_txt) content = data.llms_full_txt;
		}
	} catch (e) {}
	return new Response(content, { headers: {
		"Content-Type": "text/plain; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/llms[.]txt.ts
var Route$39 = createFileRoute("/llms.txt")({ server: { handlers: { GET: async () => {
	let content = `# Innrly\n\n> Hotel management software for back-office automation, business intelligence, and labor management.\n`;
	try {
		const backendUrl = process.env.BACKEND_URL || "http://127.0.0.1:8005";
		const res = await fetch(`${backendUrl}/api/llms-txt`);
		if (res.ok) {
			const data = await res.json();
			if (data && data.llms_txt) content = data.llms_txt;
		}
	} catch (e) {}
	return new Response(content, { headers: {
		"Content-Type": "text/plain; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/onboarding.tsx
var $$splitComponentImporter$34 = () => import("./onboarding-xMeHSICN.js");
var Route$38 = createFileRoute("/onboarding")({
	component: lazyRouteComponent($$splitComponentImporter$34, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/onboarding") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/onboarding"], "/onboarding")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/onboarding"
		}]
	})
});
var phoneRe = /^[\d\s()+\-.]{7,20}$/;
z.object({
	decisionMaker: z.enum(["yes", "no"], { required_error: "Required" }),
	companyName: z.string().trim().min(1, "Company name required").max(150),
	authorizedPerson: z.string().trim().min(1, "Authorized person required").max(150),
	email: z.string().trim().email("Valid email required").max(255),
	address: z.string().trim().min(1, "Address required").max(255),
	state: z.string().trim().min(1, "State required").max(80),
	city: z.string().trim().min(1, "City required").max(80),
	zip: z.string().trim().regex(/^[A-Za-z0-9\s-]{3,10}$/, "Valid ZIP required"),
	mobile: z.string().trim().regex(phoneRe, "Valid mobile required"),
	work: z.string().trim().regex(phoneRe, "Valid work phone required")
});
z.object({
	name: z.string().trim().min(1, "Name required").max(150),
	email: z.string().trim().email("Valid email required").max(255),
	phone: z.string().trim().regex(phoneRe, "Valid phone required")
});
z.object({
	propertyName: z.string().trim().min(1, "Property name required").max(150),
	propertyCode: z.string().trim().min(1, "Property code required").max(50),
	address: z.string().trim().min(1, "Address required").max(255),
	rooms: z.coerce.number().int().min(1, "Required").max(1e4),
	managerName: z.string().trim().min(1, "Required").max(150),
	managerEmail: z.string().trim().email("Valid email required").max(255),
	managerMobile: z.string().trim().regex(phoneRe, "Valid mobile required"),
	pms: z.enum([
		"Opera",
		"SYNXIS",
		"Choice Advantage",
		"Other"
	], { required_error: "Select a PMS" }),
	pmsOther: z.string().trim().max(80).optional(),
	brand: z.string().min(1, "Select a brand"),
	contactPerson: z.string().trim().min(1, "Required").max(150)
}).refine((v) => v.pms !== "Other" || v.pmsOther && v.pmsOther.length > 0, {
	message: "Specify PMS",
	path: ["pmsOther"]
});
//#endregion
//#region src/routes/orb-preview.tsx
var $$splitComponentImporter$33 = () => import("./orb-preview-BckPh2FX.js");
var Route$37 = createFileRoute("/orb-preview")({
	component: lazyRouteComponent($$splitComponentImporter$33, "component"),
	head: () => ({ meta: [{ title: "Product Orb Preview | Innrly" }, {
		name: "description",
		content: "Preview of Innrly signature product identity system orbs."
	}] })
});
//#endregion
//#region src/routes/robots[.]txt.ts
var Route$36 = createFileRoute("/robots.txt")({ server: { handlers: { GET: async ({ request }) => {
	let content = `User-agent: *\nAllow: /\n\nDisallow: /control-hub\nDisallow: /control-hub/*\nDisallow: /api/admin/*\n\nSitemap: https://innrly.com/sitemap.xml\n`;
	try {
		const backendUrl = process.env.BACKEND_URL || "http://127.0.0.1:8005";
		const res = await fetch(`${backendUrl}/api/robots-txt`);
		if (res.ok) {
			const data = await res.json();
			if (data && data.content) content = data.content;
		}
	} catch (e) {}
	return new Response(content, { headers: {
		"Content-Type": "text/plain; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/roi-calculator.tsx
var $$splitComponentImporter$32 = () => import("./roi-calculator-dYULy3w3.js");
var Route$35 = createFileRoute("/roi-calculator")({
	component: lazyRouteComponent($$splitComponentImporter$32, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/roi-calculator") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/roi-calculator"], "/roi-calculator")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/roi-calculator"
		}],
		scripts: [breadcrumbLd([{
			name: "Home",
			url: "/"
		}, {
			name: "ROI calculator",
			url: "/roi-calculator"
		}]), {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$1.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	})
});
//#endregion
//#region src/routes/security.tsx
var $$splitComponentImporter$31 = () => import("./security-D-Fe-uyr.js");
var Route$34 = createFileRoute("/security")({
	component: lazyRouteComponent($$splitComponentImporter$31, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/security") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/security"], "/security")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/security"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$2.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([{
			name: "Home",
			url: "/"
		}, {
			name: "Security",
			url: "/security"
		}])]
	})
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var Route$33 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const base = (process.env.SITE_URL || "https://innrly.com").replace(/\/+$/, "");
	const legalDate = "2026-06-06";
	const defaultEntries = [
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/features",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/pricing",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/onboarding",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/security",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/developers",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/roi-calculator",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/case-studies",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/blog",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/compare",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/compare/innrly-vs-otelier",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/compare/innrly-vs-nimble",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/compare/innrly-vs-aptech",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/compare/innrly-vs-profitsage",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/compare/innrly-vs-actabl",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/compare/innrly-vs-hotel-effectiveness",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/solutions/document-vault",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/solutions/expense-entries",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/solutions/business-intelligence",
			changefreq: "monthly",
			priority: "0.85"
		},
		{
			path: "/solutions/financial-control",
			changefreq: "monthly",
			priority: "0.85"
		},
		{
			path: "/solutions/operations-automation",
			changefreq: "monthly",
			priority: "0.85"
		},
		{
			path: "/solutions/innrly-pay",
			changefreq: "monthly",
			priority: "0.85"
		},
		{
			path: "/solutions/innrly-shift",
			changefreq: "monthly",
			priority: "0.85"
		},
		{
			path: "/solutions/reconciliation",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/solutions/labor-workforce",
			changefreq: "monthly",
			priority: "0.85"
		},
		{
			path: "/services/accountability-pack",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/integrations",
			changefreq: "monthly",
			priority: "0.85"
		},
		{
			path: "/integrations/m3",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/integrations/quickbooks",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/integrations/sage-intacct",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/integrations/inn-flow",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/integrations/opera",
			changefreq: "monthly",
			priority: "0.85"
		},
		{
			path: "/integrations/cloudbeds",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/integrations/mews",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/industries/select-service",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/industries/full-service",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/industries/extended-stay",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/case-studies/midwest-portfolio",
			changefreq: "yearly",
			priority: "0.75"
		},
		{
			path: "/case-studies/urban-full-service",
			changefreq: "yearly",
			priority: "0.75"
		},
		{
			path: "/case-studies/hilton-management-company",
			changefreq: "yearly",
			priority: "0.75"
		},
		{
			path: "/case-studies/extended-stay-portfolio",
			changefreq: "yearly",
			priority: "0.75"
		},
		{
			path: "/case-studies/boutique-group",
			changefreq: "yearly",
			priority: "0.75"
		},
		{
			path: "/glossary",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/legal/privacy",
			changefreq: "yearly",
			priority: "0.3",
			lastmod: legalDate
		},
		{
			path: "/legal/terms",
			changefreq: "yearly",
			priority: "0.3",
			lastmod: legalDate
		},
		{
			path: "/legal/subscription",
			changefreq: "yearly",
			priority: "0.4",
			lastmod: legalDate
		},
		{
			path: "/legal/security",
			changefreq: "yearly",
			priority: "0.4",
			lastmod: legalDate
		},
		{
			path: "/legal/cookies",
			changefreq: "yearly",
			priority: "0.3",
			lastmod: legalDate
		},
		{
			path: "/legal/accessibility",
			changefreq: "yearly",
			priority: "0.3",
			lastmod: legalDate
		}
	];
	let finalEntries = [];
	try {
		const backendUrl = process.env.BACKEND_URL || "http://127.0.0.1:8005";
		const res = await fetch(`${backendUrl}/api/sitemap-entries`);
		if (res.ok) {
			const data = await res.json();
			const seoMap = data.seo_map || {};
			const blogs = data.blogs || [];
			defaultEntries.forEach((entry) => {
				const dbRow = seoMap[entry.path];
				if (dbRow && (dbRow.in_sitemap === 0 || dbRow.in_sitemap === false)) return;
				finalEntries.push({
					path: entry.path,
					changefreq: dbRow && dbRow.changefreq || entry.changefreq,
					priority: dbRow && dbRow.priority || entry.priority,
					lastmod: entry.lastmod
				});
			});
			blogs.forEach((b) => {
				if (b.in_sitemap === 0 || b.in_sitemap === false) return;
				const lastmod = b.updated_at ? String(b.updated_at).slice(0, 10) : b.created_at ? String(b.created_at).slice(0, 10) : void 0;
				finalEntries.push({
					path: `/blog/${b.slug}`,
					changefreq: "monthly",
					priority: "0.8",
					lastmod
				});
			});
		} else finalEntries = defaultEntries;
	} catch (e) {
		finalEntries = defaultEntries;
	}
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...finalEntries.map((e) => [
			`  <url>`,
			`    <loc>${base}${e.path}</loc>`,
			e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/compare.index.tsx
var $$splitComponentImporter$30 = () => import("./compare.index-DeFs-F0I.js");
var Route$32 = createFileRoute("/compare/")({
	component: lazyRouteComponent($$splitComponentImporter$30, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/compare") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/compare"], "/compare")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/compare"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: "Innrly Comparisons",
				description: "Side-by-side comparisons positioning Innrly as an alternative to leading hotel back-office platforms.",
				hasPart: comparisons.map((c) => ({
					"@type": "WebPage",
					name: `Innrly: alternative to ${c.competitor}`,
					url: c.to
				}))
			})
		}]
	})
});
//#endregion
//#region src/routes/compare.innrly-vs-actabl.tsx
var $$splitComponentImporter$29 = () => import("./compare.innrly-vs-actabl-BdmTUhbs.js");
var Route$31 = createFileRoute("/compare/innrly-vs-actabl")({
	component: lazyRouteComponent($$splitComponentImporter$29, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/compare/innrly-vs-actabl") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/compare/innrly-vs-actabl"], "/compare/innrly-vs-actabl")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/compare/innrly-vs-actabl"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$3.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Compare",
				url: "/compare"
			},
			{
				name: "Innrly: alternative to Actabl",
				url: "/compare/innrly-vs-actabl"
			}
		])]
	})
});
//#endregion
//#region src/routes/compare.innrly-vs-aptech.tsx
var $$splitComponentImporter$28 = () => import("./compare.innrly-vs-aptech-BSDI6qZ1.js");
var Route$30 = createFileRoute("/compare/innrly-vs-aptech")({
	component: lazyRouteComponent($$splitComponentImporter$28, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/compare/innrly-vs-aptech") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/compare/innrly-vs-aptech"], "/compare/innrly-vs-aptech")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/compare/innrly-vs-aptech"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$4.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Compare",
				url: "/compare"
			},
			{
				name: "Innrly: alternative to Aptech",
				url: "/compare/innrly-vs-aptech"
			}
		])]
	})
});
//#endregion
//#region src/routes/compare.innrly-vs-hotel-effectiveness.tsx
var $$splitComponentImporter$27 = () => import("./compare.innrly-vs-hotel-effectiveness-B09lD7I-.js");
var Route$29 = createFileRoute("/compare/innrly-vs-hotel-effectiveness")({
	component: lazyRouteComponent($$splitComponentImporter$27, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/compare/innrly-vs-hotel-effectiveness") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/compare/innrly-vs-hotel-effectiveness"], "/compare/innrly-vs-hotel-effectiveness")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/compare/innrly-vs-hotel-effectiveness"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$5.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Compare",
				url: "/compare"
			},
			{
				name: "Innrly vs Hotel Effectiveness",
				url: "/compare/innrly-vs-hotel-effectiveness"
			}
		])]
	})
});
//#endregion
//#region src/routes/compare.innrly-vs-m3.tsx
var Route$28 = createFileRoute("/compare/innrly-vs-m3")({
	beforeLoad: () => {
		throw redirect({
			to: "/integrations/m3",
			statusCode: 301
		});
	},
	server: { handlers: { GET: async () => new Response(null, {
		status: 301,
		headers: { Location: "/integrations/m3" }
	}) } }
});
//#endregion
//#region src/routes/compare.innrly-vs-nimble.tsx
var $$splitComponentImporter$26 = () => import("./compare.innrly-vs-nimble-NrgHTHZ1.js");
var Route$27 = createFileRoute("/compare/innrly-vs-nimble")({
	component: lazyRouteComponent($$splitComponentImporter$26, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/compare/innrly-vs-nimble") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/compare/innrly-vs-nimble"], "/compare/innrly-vs-nimble")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/compare/innrly-vs-nimble"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$6.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Compare",
				url: "/compare"
			},
			{
				name: "Innrly: alternative to Nimble",
				url: "/compare/innrly-vs-nimble"
			}
		])]
	})
});
//#endregion
//#region src/routes/compare.innrly-vs-otelier.tsx
var $$splitComponentImporter$25 = () => import("./compare.innrly-vs-otelier-BavejpFW.js");
var Route$26 = createFileRoute("/compare/innrly-vs-otelier")({
	component: lazyRouteComponent($$splitComponentImporter$25, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/compare/innrly-vs-otelier") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/compare/innrly-vs-otelier"], "/compare/innrly-vs-otelier")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/compare/innrly-vs-otelier"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$7.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Compare",
				url: "/compare"
			},
			{
				name: "Innrly: alternative to Otelier",
				url: "/compare/innrly-vs-otelier"
			}
		])]
	})
});
//#endregion
//#region src/routes/compare.innrly-vs-profitsage.tsx
var $$splitComponentImporter$24 = () => import("./compare.innrly-vs-profitsage-w1aanrmg.js");
var Route$25 = createFileRoute("/compare/innrly-vs-profitsage")({
	component: lazyRouteComponent($$splitComponentImporter$24, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/compare/innrly-vs-profitsage") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/compare/innrly-vs-profitsage"], "/compare/innrly-vs-profitsage")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/compare/innrly-vs-profitsage"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$8.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Compare",
				url: "/compare"
			},
			{
				name: "Innrly: alternative to ProfitSage",
				url: "/compare/innrly-vs-profitsage"
			}
		])]
	})
});
//#endregion
//#region src/routes/control-hub.blogs.tsx
var $$splitComponentImporter$23 = () => import("./control-hub.blogs-DR0SME3o.js");
var Route$24 = createFileRoute("/control-hub/blogs")({
	component: lazyRouteComponent($$splitComponentImporter$23, "component"),
	head: () => ({ meta: [{ title: "Innrly Control Hub Blog Management" }, {
		name: "description",
		content: "Manage and publish articles on Innrly with SEO controls and image uploads."
	}] })
});
//#endregion
//#region src/routes/control-hub.logs.tsx
var $$splitComponentImporter$22 = () => import("./control-hub.logs-Db-lkJV_.js");
var Route$23 = createFileRoute("/control-hub/logs")({
	component: lazyRouteComponent($$splitComponentImporter$22, "component"),
	head: () => ({ meta: [
		{ title: "Audit & Recovery Logs — Innrly Control Hub" },
		{
			name: "description",
			content: "Audit raw lead submissions, monitor fail-safe telemetry, and trigger 1-click disaster recovery."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] })
});
//#endregion
//#region src/routes/control-hub.newsletters.tsx
var $$splitComponentImporter$21 = () => import("./control-hub.newsletters-CkUjyVGj.js");
var Route$22 = createFileRoute("/control-hub/newsletters")({
	component: lazyRouteComponent($$splitComponentImporter$21, "component"),
	head: () => ({ meta: [{ title: "Innrly Newsletter Subscribers — Control Hub" }, {
		name: "description",
		content: "Manage newsletter signups."
	}] })
});
//#endregion
//#region src/routes/control-hub.onboarding.tsx
var $$splitComponentImporter$20 = () => import("./control-hub.onboarding-DflCm4i4.js");
var Route$21 = createFileRoute("/control-hub/onboarding")({
	component: lazyRouteComponent($$splitComponentImporter$20, "component"),
	head: () => ({ meta: [{ title: "Innrly Onboarding Completions — Control Hub" }, {
		name: "description",
		content: "Manage completed customer onboarding details."
	}] })
});
//#endregion
//#region src/routes/control-hub.seo.tsx
var $$splitComponentImporter$19 = () => import("./control-hub.seo-CBlwh8FJ.js");
var Route$20 = createFileRoute("/control-hub/seo")({
	component: lazyRouteComponent($$splitComponentImporter$19, "component"),
	head: () => ({ meta: [{ title: "Innrly Control Hub SEO & Tag Management" }, {
		name: "description",
		content: "Manage meta tags, sitemap.xml, robots.txt, llms.txt, and site scripts."
	}] })
});
//#endregion
//#region src/routes/control-hub.settings.tsx
var $$splitComponentImporter$18 = () => import("./control-hub.settings-CKpQwbJT.js");
var Route$19 = createFileRoute("/control-hub/settings")({
	component: lazyRouteComponent($$splitComponentImporter$18, "component"),
	head: () => ({ meta: [{ title: "Innrly Control Hub Settings" }, {
		name: "description",
		content: "Configure platform settings, notification channels, and webhooks."
	}] })
});
//#endregion
//#region src/routes/control-hub.testimonials.tsx
var $$splitComponentImporter$17 = () => import("./control-hub.testimonials-BlXHUYYj.js");
var Route$18 = createFileRoute("/control-hub/testimonials")({
	component: lazyRouteComponent($$splitComponentImporter$17, "component"),
	head: () => ({ meta: [{ title: "Testimonials Manager — Innrly Control Hub" }, {
		name: "description",
		content: "Manage customer reviews, hotelier quotes, and page-specific testimonials."
	}] })
});
//#endregion
//#region src/routes/control-hub.trials.tsx
var $$splitComponentImporter$16 = () => import("./control-hub.trials-zAMXV0ux.js");
var Route$17 = createFileRoute("/control-hub/trials")({
	component: lazyRouteComponent($$splitComponentImporter$16, "component"),
	head: () => ({ meta: [{ title: "Innrly Free Trials — Control Hub" }, {
		name: "description",
		content: "Manage free trial applications."
	}] })
});
//#endregion
//#region src/routes/control-hub.users.tsx
var $$splitComponentImporter$15 = () => import("./control-hub.users-BzvzFze7.js");
var Route$16 = createFileRoute("/control-hub/users")({
	component: lazyRouteComponent($$splitComponentImporter$15, "component"),
	head: () => ({ meta: [{ title: "User Management — Innrly Control Hub" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] })
});
//#endregion
//#region src/routes/integrations.index.tsx
var $$splitComponentImporter$14 = () => import("./integrations.index-CLqScI3E.js");
var Route$15 = createFileRoute("/integrations/")({
	component: lazyRouteComponent($$splitComponentImporter$14, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/integrations") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/integrations"], "/integrations")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/integrations"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "SoftwareApplication",
				name: "Innrly",
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				url: "/integrations",
				description: "Innrly connects to 50+ hotel systems — PMS, accounting, payroll, banking, guest survey, and A/P platforms.",
				offers: {
					"@type": "Offer",
					priceCurrency: "USD"
				}
			})
		}, breadcrumbLd([{
			name: "Home",
			url: "/"
		}, {
			name: "Integrations",
			url: "/integrations"
		}])]
	})
});
//#endregion
//#region src/routes/integrations.cloudbeds.tsx
var $$splitComponentImporter$13 = () => import("./integrations.cloudbeds-DBbjX5J9.js");
var Route$14 = createFileRoute("/integrations/cloudbeds")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/integrations/cloudbeds") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/integrations/cloudbeds"], "/integrations/cloudbeds")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/integrations/cloudbeds"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$9.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Integrations",
				url: "/integrations"
			},
			{
				name: "Cloudbeds",
				url: "/integrations/cloudbeds"
			}
		])]
	})
});
//#endregion
//#region src/routes/integrations.inn-flow.tsx
var $$splitComponentImporter$12 = () => import("./integrations.inn-flow-qESRFlpn.js");
var Route$13 = createFileRoute("/integrations/inn-flow")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/integrations/inn-flow") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/integrations/inn-flow"], "/integrations/inn-flow")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/integrations/inn-flow"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$10.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Integrations",
				url: "/integrations"
			},
			{
				name: "Inn-flow",
				url: "/integrations/inn-flow"
			}
		])]
	})
});
//#endregion
//#region src/routes/integrations.m3.tsx
var $$splitComponentImporter$11 = () => import("./integrations.m3-B9WaMyBW.js");
var Route$12 = createFileRoute("/integrations/m3")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/integrations/m3") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/integrations/m3"], "/integrations/m3"), {
			property: "og:image:alt",
			content: "The M3 data you already have — finally working for you."
		}],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/integrations/m3"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$11.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Integrations",
				url: "/integrations"
			},
			{
				name: "M3",
				url: "/integrations/m3"
			}
		])]
	})
});
//#endregion
//#region src/routes/integrations.mews.tsx
var $$splitComponentImporter$10 = () => import("./integrations.mews-Dw_fzVbm.js");
var Route$11 = createFileRoute("/integrations/mews")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/integrations/mews") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/integrations/mews"], "/integrations/mews")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/integrations/mews"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$12.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Integrations",
				url: "/integrations"
			},
			{
				name: "Mews",
				url: "/integrations/mews"
			}
		])]
	})
});
//#endregion
//#region src/routes/integrations.opera.tsx
var $$splitComponentImporter$9 = () => import("./integrations.opera-CHRkWqzW.js");
var Route$10 = createFileRoute("/integrations/opera")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/integrations/opera") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/integrations/opera"], "/integrations/opera")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/integrations/opera"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$13.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Integrations",
				url: "/integrations"
			},
			{
				name: "Opera",
				url: "/integrations/opera"
			}
		])]
	})
});
//#endregion
//#region src/routes/integrations.quickbooks.tsx
var $$splitComponentImporter$8 = () => import("./integrations.quickbooks-f1uvQ92y.js");
var Route$9 = createFileRoute("/integrations/quickbooks")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/integrations/quickbooks") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/integrations/quickbooks"], "/integrations/quickbooks")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/integrations/quickbooks"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$14.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Integrations",
				url: "/integrations"
			},
			{
				name: "QuickBooks",
				url: "/integrations/quickbooks"
			}
		])]
	})
});
//#endregion
//#region src/routes/integrations.sage-intacct.tsx
var $$splitComponentImporter$7 = () => import("./integrations.sage-intacct-Cg1kxNxr.js");
var Route$8 = createFileRoute("/integrations/sage-intacct")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/integrations/sage-intacct") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/integrations/sage-intacct"], "/integrations/sage-intacct")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/integrations/sage-intacct"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "SoftwareApplication",
				name: "Innrly + Sage Intacct",
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				url: "/integrations/sage-intacct",
				offers: {
					"@type": "Offer",
					priceCurrency: "USD"
				}
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Integrations",
				url: "/integrations"
			},
			{
				name: "Sage Intacct",
				url: "/integrations/sage-intacct"
			}
		])]
	})
});
//#endregion
//#region src/routes/legal.accessibility.tsx
var $$splitComponentImporter$6 = () => import("./legal.accessibility-D7F7_9MC.js");
var Route$7 = createFileRoute("/legal/accessibility")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/legal/accessibility") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/legal/accessibility"], "/legal/accessibility")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/legal/accessibility"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "Accessibility Statement — Innrly",
				url: "/legal/accessibility",
				isPartOf: {
					"@type": "WebSite",
					name: "Innrly",
					url: "/"
				}
			})
		}]
	})
});
//#endregion
//#region src/routes/legal.cookies.tsx
var $$splitComponentImporter$5 = () => import("./legal.cookies-COdr-YCS.js");
var Route$6 = createFileRoute("/legal/cookies")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/legal/cookies") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/legal/cookies"], "/legal/cookies")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/legal/cookies"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "Cookie Policy — Innrly",
				url: "/legal/cookies",
				isPartOf: {
					"@type": "WebSite",
					name: "Innrly",
					url: "/"
				}
			})
		}]
	})
});
//#endregion
//#region src/routes/legal.privacy.tsx
var $$splitComponentImporter$4 = () => import("./legal.privacy-CHfVmrb0.js");
var Route$5 = createFileRoute("/legal/privacy")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/legal/privacy") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/legal/privacy"], "/legal/privacy")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/legal/privacy"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "Privacy Policy — Innrly",
				url: "/legal/privacy",
				isPartOf: {
					"@type": "WebSite",
					name: "Innrly",
					url: "/"
				}
			})
		}]
	})
});
//#endregion
//#region src/routes/legal.security.tsx
var $$splitComponentImporter$3 = () => import("./legal.security-Dn2ss9S8.js");
var Route$4 = createFileRoute("/legal/security")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/legal/security") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/legal/security"], "/legal/security")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/legal/security"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "Security — Innrly",
				url: "/legal/security",
				isPartOf: {
					"@type": "WebSite",
					name: "Innrly",
					url: "/"
				}
			})
		}]
	})
});
//#endregion
//#region src/routes/legal.subscription.tsx
var $$splitComponentImporter$2 = () => import("./legal.subscription-C25VwpX9.js");
var Route$3 = createFileRoute("/legal/subscription")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/legal/subscription") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/legal/subscription"], "/legal/subscription")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/legal/subscription"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "Subscription Services Agreement — Innrly",
				url: "/legal/subscription",
				isPartOf: {
					"@type": "WebSite",
					name: "Innrly",
					url: "/"
				}
			})
		}]
	})
});
//#endregion
//#region src/routes/legal.terms.tsx
var $$splitComponentImporter$1 = () => import("./legal.terms-BNOhZplN.js");
var Route$2 = createFileRoute("/legal/terms")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/legal/terms") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/legal/terms"], "/legal/terms")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/legal/terms"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "Terms of Service & Software License — Innrly",
				url: "/legal/terms",
				isPartOf: {
					"@type": "WebSite",
					name: "Innrly",
					url: "/"
				}
			})
		}]
	})
});
//#endregion
//#region src/routes/services.accountability-pack.tsx
var $$splitComponentImporter = () => import("./services.accountability-pack-D7goAUcU.js");
var Route$1 = createFileRoute("/services/accountability-pack")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return { seo: await fetchSeoData("/services/accountability-pack") };
	},
	head: ({ loaderData }) => ({
		meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/services/accountability-pack"], "/services/accountability-pack")],
		links: [{
			rel: "canonical",
			href: "https://innrly.com/services/accountability-pack"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Service",
				name: "Innrly Accountability Pack",
				serviceType: "Hotel back-office data verification and reporting",
				provider: {
					"@type": "Organization",
					name: "Innrly"
				},
				areaServed: "US",
				offers: {
					"@type": "Offer",
					priceSpecification: {
						"@type": "PriceSpecification",
						priceCurrency: "USD",
						description: "Per-property pricing — contact sales"
					}
				}
			})
		}, breadcrumbLd([
			{
				name: "Home",
				url: "/"
			},
			{
				name: "Services",
				url: "/services"
			},
			{
				name: "Accountability Pack",
				url: "/services/accountability-pack"
			}
		])]
	})
});
//#endregion
//#region src/routes/solutions.labor-workforce.tsx
var Route = createFileRoute("/solutions/labor-workforce")({ beforeLoad: () => {
	throw redirect({ to: "/solutions/innrly-shift" });
} });
//#endregion
//#region src/routeTree.gen.ts
var IndexRoute = Route$50.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$49
});
var R404Route = Route$48.update({
	id: "/404",
	path: "/404",
	getParentRoute: () => Route$49
});
var AboutRoute = Route$47.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$49
});
var ContactRoute = Route$46.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$49
});
var ControlHubRoute = Route$45.update({
	id: "/control-hub",
	path: "/control-hub",
	getParentRoute: () => Route$49
});
var DevelopersRoute = Route$44.update({
	id: "/developers",
	path: "/developers",
	getParentRoute: () => Route$49
});
var FeaturesRoute = Route$43.update({
	id: "/features",
	path: "/features",
	getParentRoute: () => Route$49
});
var GlossaryRoute = Route$42.update({
	id: "/glossary",
	path: "/glossary",
	getParentRoute: () => Route$49
});
var HotelBackOfficeAutomationRoute = Route$41.update({
	id: "/hotel-back-office-automation",
	path: "/hotel-back-office-automation",
	getParentRoute: () => Route$49
});
var LlmsFullDottxtRoute = Route$40.update({
	id: "/llms-full.txt",
	path: "/llms-full.txt",
	getParentRoute: () => Route$49
});
var LlmsDottxtRoute = Route$39.update({
	id: "/llms.txt",
	path: "/llms.txt",
	getParentRoute: () => Route$49
});
var OnboardingRoute = Route$38.update({
	id: "/onboarding",
	path: "/onboarding",
	getParentRoute: () => Route$49
});
var OrbPreviewRoute = Route$37.update({
	id: "/orb-preview",
	path: "/orb-preview",
	getParentRoute: () => Route$49
});
var PricingRoute = Route$51.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$49
});
var RobotsDottxtRoute = Route$36.update({
	id: "/robots.txt",
	path: "/robots.txt",
	getParentRoute: () => Route$49
});
var RoiCalculatorRoute = Route$35.update({
	id: "/roi-calculator",
	path: "/roi-calculator",
	getParentRoute: () => Route$49
});
var SecurityRoute = Route$34.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => Route$49
});
var SitemapDotxmlRoute = Route$33.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$49
});
var BlogIndexRoute = Route$52.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$49
});
var BlogSlugRoute = Route$53.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$49
});
var CaseStudiesIndexRoute = Route$54.update({
	id: "/case-studies/",
	path: "/case-studies/",
	getParentRoute: () => Route$49
});
var CaseStudiesBoutiqueGroupRoute = Route$55.update({
	id: "/case-studies/boutique-group",
	path: "/case-studies/boutique-group",
	getParentRoute: () => Route$49
});
var CaseStudiesExtendedStayPortfolioRoute = Route$56.update({
	id: "/case-studies/extended-stay-portfolio",
	path: "/case-studies/extended-stay-portfolio",
	getParentRoute: () => Route$49
});
var CaseStudiesHiltonManagementCompanyRoute = Route$57.update({
	id: "/case-studies/hilton-management-company",
	path: "/case-studies/hilton-management-company",
	getParentRoute: () => Route$49
});
var CaseStudiesMidwestPortfolioRoute = Route$58.update({
	id: "/case-studies/midwest-portfolio",
	path: "/case-studies/midwest-portfolio",
	getParentRoute: () => Route$49
});
var CaseStudiesUrbanFullServiceRoute = Route$59.update({
	id: "/case-studies/urban-full-service",
	path: "/case-studies/urban-full-service",
	getParentRoute: () => Route$49
});
var CompareIndexRoute = Route$32.update({
	id: "/compare/",
	path: "/compare/",
	getParentRoute: () => Route$49
});
var CompareInnrlyVsActablRoute = Route$31.update({
	id: "/compare/innrly-vs-actabl",
	path: "/compare/innrly-vs-actabl",
	getParentRoute: () => Route$49
});
var CompareInnrlyVsAptechRoute = Route$30.update({
	id: "/compare/innrly-vs-aptech",
	path: "/compare/innrly-vs-aptech",
	getParentRoute: () => Route$49
});
var CompareInnrlyVsHotelEffectivenessRoute = Route$29.update({
	id: "/compare/innrly-vs-hotel-effectiveness",
	path: "/compare/innrly-vs-hotel-effectiveness",
	getParentRoute: () => Route$49
});
var CompareInnrlyVsM3Route = Route$28.update({
	id: "/compare/innrly-vs-m3",
	path: "/compare/innrly-vs-m3",
	getParentRoute: () => Route$49
});
var CompareInnrlyVsNimbleRoute = Route$27.update({
	id: "/compare/innrly-vs-nimble",
	path: "/compare/innrly-vs-nimble",
	getParentRoute: () => Route$49
});
var CompareInnrlyVsOtelierRoute = Route$26.update({
	id: "/compare/innrly-vs-otelier",
	path: "/compare/innrly-vs-otelier",
	getParentRoute: () => Route$49
});
var CompareInnrlyVsProfitsageRoute = Route$25.update({
	id: "/compare/innrly-vs-profitsage",
	path: "/compare/innrly-vs-profitsage",
	getParentRoute: () => Route$49
});
var ControlHubIndexRoute = Route$60.update({
	id: "/",
	path: "/",
	getParentRoute: () => ControlHubRoute
});
var ControlHubBlogsRoute = Route$24.update({
	id: "/blogs",
	path: "/blogs",
	getParentRoute: () => ControlHubRoute
});
var ControlHubLogsRoute = Route$23.update({
	id: "/logs",
	path: "/logs",
	getParentRoute: () => ControlHubRoute
});
var ControlHubNewslettersRoute = Route$22.update({
	id: "/newsletters",
	path: "/newsletters",
	getParentRoute: () => ControlHubRoute
});
var ControlHubOnboardingRoute = Route$21.update({
	id: "/onboarding",
	path: "/onboarding",
	getParentRoute: () => ControlHubRoute
});
var ControlHubSeoRoute = Route$20.update({
	id: "/seo",
	path: "/seo",
	getParentRoute: () => ControlHubRoute
});
var ControlHubSettingsRoute = Route$19.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => ControlHubRoute
});
var ControlHubTestimonialsRoute = Route$18.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => ControlHubRoute
});
var ControlHubTrialsRoute = Route$17.update({
	id: "/trials",
	path: "/trials",
	getParentRoute: () => ControlHubRoute
});
var ControlHubUsersRoute = Route$16.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => ControlHubRoute
});
var IndustriesExtendedStayRoute = Route$61.update({
	id: "/industries/extended-stay",
	path: "/industries/extended-stay",
	getParentRoute: () => Route$49
});
var IndustriesFullServiceRoute = Route$62.update({
	id: "/industries/full-service",
	path: "/industries/full-service",
	getParentRoute: () => Route$49
});
var IndustriesSelectServiceRoute = Route$63.update({
	id: "/industries/select-service",
	path: "/industries/select-service",
	getParentRoute: () => Route$49
});
var IntegrationsIndexRoute = Route$15.update({
	id: "/integrations/",
	path: "/integrations/",
	getParentRoute: () => Route$49
});
var IntegrationsCloudbedsRoute = Route$14.update({
	id: "/integrations/cloudbeds",
	path: "/integrations/cloudbeds",
	getParentRoute: () => Route$49
});
var IntegrationsInnFlowRoute = Route$13.update({
	id: "/integrations/inn-flow",
	path: "/integrations/inn-flow",
	getParentRoute: () => Route$49
});
var IntegrationsM3Route = Route$12.update({
	id: "/integrations/m3",
	path: "/integrations/m3",
	getParentRoute: () => Route$49
});
var IntegrationsMewsRoute = Route$11.update({
	id: "/integrations/mews",
	path: "/integrations/mews",
	getParentRoute: () => Route$49
});
var IntegrationsOperaRoute = Route$10.update({
	id: "/integrations/opera",
	path: "/integrations/opera",
	getParentRoute: () => Route$49
});
var IntegrationsQuickbooksRoute = Route$9.update({
	id: "/integrations/quickbooks",
	path: "/integrations/quickbooks",
	getParentRoute: () => Route$49
});
var IntegrationsSageIntacctRoute = Route$8.update({
	id: "/integrations/sage-intacct",
	path: "/integrations/sage-intacct",
	getParentRoute: () => Route$49
});
var LegalAccessibilityRoute = Route$7.update({
	id: "/legal/accessibility",
	path: "/legal/accessibility",
	getParentRoute: () => Route$49
});
var LegalCookiesRoute = Route$6.update({
	id: "/legal/cookies",
	path: "/legal/cookies",
	getParentRoute: () => Route$49
});
var LegalPrivacyRoute = Route$5.update({
	id: "/legal/privacy",
	path: "/legal/privacy",
	getParentRoute: () => Route$49
});
var LegalSecurityRoute = Route$4.update({
	id: "/legal/security",
	path: "/legal/security",
	getParentRoute: () => Route$49
});
var LegalSubscriptionRoute = Route$3.update({
	id: "/legal/subscription",
	path: "/legal/subscription",
	getParentRoute: () => Route$49
});
var LegalTermsRoute = Route$2.update({
	id: "/legal/terms",
	path: "/legal/terms",
	getParentRoute: () => Route$49
});
var ServicesAccountabilityPackRoute = Route$1.update({
	id: "/services/accountability-pack",
	path: "/services/accountability-pack",
	getParentRoute: () => Route$49
});
var SolutionsBusinessIntelligenceRoute = Route$64.update({
	id: "/solutions/business-intelligence",
	path: "/solutions/business-intelligence",
	getParentRoute: () => Route$49
});
var SolutionsDocumentVaultRoute = Route$65.update({
	id: "/solutions/document-vault",
	path: "/solutions/document-vault",
	getParentRoute: () => Route$49
});
var SolutionsExpenseEntriesRoute = Route$66.update({
	id: "/solutions/expense-entries",
	path: "/solutions/expense-entries",
	getParentRoute: () => Route$49
});
var SolutionsFinancialControlRoute = Route$67.update({
	id: "/solutions/financial-control",
	path: "/solutions/financial-control",
	getParentRoute: () => Route$49
});
var SolutionsInnrlyPayRoute = Route$68.update({
	id: "/solutions/innrly-pay",
	path: "/solutions/innrly-pay",
	getParentRoute: () => Route$49
});
var SolutionsInnrlyShiftRoute = Route$69.update({
	id: "/solutions/innrly-shift",
	path: "/solutions/innrly-shift",
	getParentRoute: () => Route$49
});
var SolutionsLaborWorkforceRoute = Route.update({
	id: "/solutions/labor-workforce",
	path: "/solutions/labor-workforce",
	getParentRoute: () => Route$49
});
var SolutionsOperationsAutomationRoute = Route$70.update({
	id: "/solutions/operations-automation",
	path: "/solutions/operations-automation",
	getParentRoute: () => Route$49
});
var SolutionsReconciliationRoute = Route$71.update({
	id: "/solutions/reconciliation",
	path: "/solutions/reconciliation",
	getParentRoute: () => Route$49
});
var ControlHubRouteChildren = {
	ControlHubBlogsRoute,
	ControlHubLogsRoute,
	ControlHubNewslettersRoute,
	ControlHubOnboardingRoute,
	ControlHubSeoRoute,
	ControlHubSettingsRoute,
	ControlHubTestimonialsRoute,
	ControlHubTrialsRoute,
	ControlHubUsersRoute,
	ControlHubIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	R404Route,
	AboutRoute,
	ContactRoute,
	ControlHubRoute: ControlHubRoute._addFileChildren(ControlHubRouteChildren),
	DevelopersRoute,
	FeaturesRoute,
	GlossaryRoute,
	HotelBackOfficeAutomationRoute,
	LlmsFullDottxtRoute,
	LlmsDottxtRoute,
	OnboardingRoute,
	OrbPreviewRoute,
	PricingRoute,
	RobotsDottxtRoute,
	RoiCalculatorRoute,
	SecurityRoute,
	SitemapDotxmlRoute,
	BlogSlugRoute,
	CaseStudiesBoutiqueGroupRoute,
	CaseStudiesExtendedStayPortfolioRoute,
	CaseStudiesHiltonManagementCompanyRoute,
	CaseStudiesMidwestPortfolioRoute,
	CaseStudiesUrbanFullServiceRoute,
	CompareInnrlyVsActablRoute,
	CompareInnrlyVsAptechRoute,
	CompareInnrlyVsHotelEffectivenessRoute,
	CompareInnrlyVsM3Route,
	CompareInnrlyVsNimbleRoute,
	CompareInnrlyVsOtelierRoute,
	CompareInnrlyVsProfitsageRoute,
	IndustriesExtendedStayRoute,
	IndustriesFullServiceRoute,
	IndustriesSelectServiceRoute,
	IntegrationsCloudbedsRoute,
	IntegrationsInnFlowRoute,
	IntegrationsM3Route,
	IntegrationsMewsRoute,
	IntegrationsOperaRoute,
	IntegrationsQuickbooksRoute,
	IntegrationsSageIntacctRoute,
	LegalAccessibilityRoute,
	LegalCookiesRoute,
	LegalPrivacyRoute,
	LegalSecurityRoute,
	LegalSubscriptionRoute,
	LegalTermsRoute,
	ServicesAccountabilityPackRoute,
	SolutionsBusinessIntelligenceRoute,
	SolutionsDocumentVaultRoute,
	SolutionsExpenseEntriesRoute,
	SolutionsFinancialControlRoute,
	SolutionsInnrlyPayRoute,
	SolutionsInnrlyShiftRoute,
	SolutionsLaborWorkforceRoute,
	SolutionsOperationsAutomationRoute,
	SolutionsReconciliationRoute,
	BlogIndexRoute,
	CaseStudiesIndexRoute,
	CompareIndexRoute,
	IntegrationsIndexRoute
};
var routeTree = Route$49._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
