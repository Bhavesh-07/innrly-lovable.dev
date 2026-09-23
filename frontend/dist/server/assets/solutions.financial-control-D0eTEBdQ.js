import { r as Section } from "./Section-D2XWIGS_.js";
import { t as DeepSolutionLayout } from "./DeepSolutionLayout-BG4AihqU.js";
import { t as ExceptionsLedger } from "./ExceptionsLedger-ChnIEJKl.js";
import { t as BeforeAfterFlow } from "./BeforeAfterFlow-tFWrpBrV.js";
import { t as Route } from "./solutions.financial-control-CJLGfzUv.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, Banknote, BookOpenCheck, Calendar, FileSpreadsheet, ScanSearch, ShieldCheck, StickyNote } from "lucide-react";
//#region src/components/site/FinancialControlChaos.tsx
/**
* FinancialControlChaos — month-end scramble. Scattered trial balances, late P&L
* sticky, a close calendar full of red overdue boxes.
*/
function FinancialControlChaos() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex h-full flex-col space-y-2",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "ba-chaos-in rounded-lg border border-destructive/60 bg-destructive/10 p-2 opacity-0 shadow-elevated",
				style: {
					["--x0"]: "-36px",
					["--y0"]: "16px",
					["--r0"]: "-7deg",
					["--rot"]: "-1.5deg"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5 border-b border-border/40 pb-1",
					children: [
						/* @__PURE__ */ jsx(Calendar, { className: "h-3 w-3 text-chart-4" }),
						/* @__PURE__ */ jsx("span", {
							className: "text-[10px] font-semibold text-foreground",
							children: "Close Calendar · Day 11"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "ml-auto text-[9px] text-destructive",
							children: "5 overdue"
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-1 grid grid-cols-7 gap-0.5",
					children: Array.from({ length: 14 }).map((_, i) => /* @__PURE__ */ jsx("div", {
						className: `h-3 rounded-sm text-[7px] leading-3 text-center ${i < 4 ? "bg-success/30 text-success" : i < 9 ? "bg-destructive/40 text-destructive" : "bg-muted/30 text-muted-foreground"}`,
						children: i + 1
					}, i))
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "ba-chaos-in flex-1 rounded-lg border border-destructive/50 bg-background/60 p-2 opacity-0 shadow-elevated",
					style: {
						["--x0"]: "-20px",
						["--y0"]: "-14px",
						["--r0"]: "5deg",
						["--rot"]: "1.5deg",
						["--delay"]: "0.22s"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1 border-b border-border/40 pb-1",
						children: [/* @__PURE__ */ jsx(FileSpreadsheet, { className: "h-3 w-3 text-success" }), /* @__PURE__ */ jsx("span", {
							className: "truncate text-[9px] font-semibold text-foreground",
							children: "TB_DAL12_v7_FINAL.xlsx"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-1 grid grid-cols-2 gap-0.5 text-[9px]",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: "Cash"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: "$184,210"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: "A/R"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: "$ 47,883"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: "Variance"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "rounded bg-destructive/20 px-1 font-bold text-destructive",
								children: "($3,140)"
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "ba-chaos-in w-28 shrink-0 rounded-md bg-chart-4/90 p-2 text-[10px] font-semibold text-background opacity-0 shadow-elevated",
					style: {
						["--x0"]: "30px",
						["--y0"]: "-12px",
						["--r0"]: "13deg",
						["--rot"]: "6deg",
						["--delay"]: "0.4s"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ jsx(StickyNote, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("span", { children: "P&L late" })]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-0.5 text-[9px] font-normal",
						children: "AUS-03 still pending"
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-chaos-in mt-auto flex-1 rounded-lg border border-destructive/30 bg-background/40 p-2 opacity-0 shadow-elevated",
				style: {
					["--x0"]: "0px",
					["--y0"]: "18px",
					["--r0"]: "0deg",
					["--rot"]: "0deg",
					["--delay"]: "0.55s"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1 border-b border-border/40 pb-1",
					children: [/* @__PURE__ */ jsx(FileSpreadsheet, { className: "h-3 w-3 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
						className: "text-[9px] font-semibold text-muted-foreground",
						children: "Open tabs · 7 spreadsheets"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-1.5 space-y-1",
					children: [
						{
							name: "Bank_Recon_DAL12.xlsx",
							note: "3 unmatched"
						},
						{
							name: "OTA_Settle_Jun.xlsx",
							note: "Expedia variance"
						},
						{
							name: "GL_Codes_master_v22.xlsx",
							note: "stale"
						},
						{
							name: "AR_Aging_pull.xlsx",
							note: "needs refresh"
						}
					].map((row) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between rounded bg-muted/20 px-1.5 py-0.5 text-[9px]",
						children: [/* @__PURE__ */ jsx("span", {
							className: "truncate text-foreground/80",
							children: row.name
						}), /* @__PURE__ */ jsx("span", {
							className: "ml-2 shrink-0 text-destructive/80",
							children: row.note
						})]
					}, row.name))
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-slide-in flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0",
				style: { animationDelay: "0.86s" },
				children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-3 w-3 shrink-0 text-destructive" }), /* @__PURE__ */ jsx("span", {
					className: "text-[10px] font-semibold text-destructive",
					children: "Close slipping · CFO asking on day 11"
				})]
			})
		]
	});
}
//#endregion
//#region src/routes/solutions.financial-control.tsx?tsr-split=component
function Page() {
	const { testimonials: allTestimonials } = Route.useLoaderData();
	const t = allTestimonials.find((t) => t.page === "financial-control");
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background",
		children: [/* @__PURE__ */ jsxs(Section, {
			tone: "surface",
			className: "py-5 sm:py-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-6 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-accent",
					children: "From day-11 scramble to day-3 close"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-2 text-2xl font-bold text-foreground sm:text-3xl",
					children: "Watch the close calendar light up green in 6 seconds."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-6xl",
				children: /* @__PURE__ */ jsx(BeforeAfterFlow, {
					chaos: /* @__PURE__ */ jsx(FinancialControlChaos, {}),
					after: () => /* @__PURE__ */ jsx(ExceptionsLedger, {}),
					motion: "guardrails"
				})
			})]
		}), /* @__PURE__ */ jsx(DeepSolutionLayout, {
			icon: ShieldCheck,
			orbVariant: "control",
			persona: "For Controllers & CFOs",
			eyebrow: "Hotel Accounting & Reconciliation",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Work the ",
				/* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "exceptions"
				}),
				", not the entire ledger."
			] }),
			description: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Your controller shouldn't tick-and-tie 14,000 transactions to find the seven that matter. Innrly auto-reconciles every line between PMS, bank, and OTAs — then surfaces only what needs a human. Learn how this fits into",
				" ",
				/* @__PURE__ */ jsx(Link, {
					to: "/hotel-back-office-automation",
					className: "text-accent underline font-semibold",
					children: "hotel back-office automation"
				}),
				"."
			] }),
			bullets: [
				"Auto-match every deposit, batch, and OTA settlement to the PMS",
				"Variances flagged within hours, not at month-end close",
				"Audit-ready trail packaged on the 1st of every month",
				"Recover OTA commission clawbacks and undercharged group bills automatically"
			],
			metrics: [
				{
					stat: "Recoverable",
					label: "OTA errors typically surfaced for currently onboarded hotels"
				},
				{
					stat: "Overnight",
					label: "Auto-cleared on first pass"
				},
				{
					stat: "0",
					label: "Manual spreadsheets"
				},
				{
					stat: "24h",
					label: "Variance flag SLA"
				}
			],
			beforeAfter: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"From ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "tick-and-tie"
					}),
					" to \"show me the exceptions.\""
				] }),
				description: "The biggest change controllers feel on Innrly isn't a feature — it's that the busywork is gone before they sit down.",
				withoutTitle: "The month-end marathon",
				without: [
					"Export PMS, bank, OTA reports into seven spreadsheets",
					"Eyeball thousands of matched lines looking for a few breaks",
					"Discover the OTA commission overcharge weeks after it could have been disputed",
					"Stitch together an audit binder by hand on the 5th of the month"
				],
				withTitle: "Exceptions-only ledger",
				withItems: [
					"The vast majority of transactions auto-clear overnight",
					"The 7 that need a human are on one screen with the dollar amount",
					"Chargebacks and undercharged group bills surface inside 24 hours",
					"Month-end pack is generated, not assembled"
				]
			},
			workflow: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["How controllers ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "actually use it."
				})] }),
				description: "Four moves that replace the reconciliation marathon.",
				steps: [
					{
						icon: ScanSearch,
						title: "Overnight — auto-match runs",
						body: "Innrly reads PMS, bank, and OTA feeds and reconciles every transaction against the right counterparty before you log in."
					},
					{
						icon: BookOpenCheck,
						title: "Morning — open the Exceptions worklist",
						body: "Only unmatched, variant, or suspicious transactions appear. Each one shows the dollar amount and the property responsible."
					},
					{
						icon: Banknote,
						title: "Same day — recover the dollars",
						body: "Dispute the OTA commission overcharge, re-bill the group, void the comp — without copying a folio number into another tool."
					},
					{
						icon: FileSpreadsheet,
						title: "Month-end — close in days, not weeks",
						body: "The reconciliation pack — OTA, bank, A/R, credit card — is generated on the 1st with a full audit trail."
					}
				],
				artifact: /* @__PURE__ */ jsx(ExceptionsLedger, {})
			},
			replaces: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["What Innrly Financial Control ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "replaces."
				})] }),
				description: "Not another report on top of the pile — these things go away.",
				items: [
					"Bank rec spreadsheets",
					"OTA commission clawback hunts",
					"Manual folio-to-deposit matching",
					"End-of-month audit binders",
					"A/R aging by hand",
					"Comp & void chase reports",
					"\"Tie out the night audit\" tasks"
				]
			},
			quote: {
				text: t?.quote || "We used to spend the first ten days of every month closing the prior month. Now my controller spends those ten days on actual analysis. Innrly didn't speed up reconciliation — it removed it.",
				author: t ? [
					t.name,
					t.title,
					t.company
				].filter(Boolean).join(" · ") : "CFO · 12-property hotel ownership group"
			},
			modules: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["The modules behind ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "the close."
				})] }),
				description: "Each module deep-links into the Features page.",
				items: [
					{
						name: "Exceptions Dashboard",
						body: "Only the transactions that need a human."
					},
					{
						name: "OTA Reconciliation",
						body: "Match every Booking, Expedia, direct reservation to settled payment."
					},
					{
						name: "Bank Reconciliation",
						body: "Daily deposit matching against PMS — variances inside hours."
					},
					{
						name: "Billing Assurance",
						body: "Validate folios, group bills, and direct bills against contracts."
					},
					{
						name: "Revenue Protection",
						body: "Monitor comps, voids, discounts, rate overrides for anomalies."
					},
					{
						name: "Month-End Packs",
						body: "Audit-ready reconciliation reports generated on the 1st."
					}
				]
			},
			faq: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["What controllers ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "actually ask us."
				})] }),
				items: [
					{
						q: "Does this replace our accounting system?",
						a: "No — Innrly sits between your PMS and your accounting system (QuickBooks, M3, Sage Intacct). Your GL stays where it is; Innrly makes sure what hits it is already reconciled."
					},
					{
						q: "How does it handle multiple PMSes across brands?",
						a: "Innrly is PMS-neutral. OnQ, PEP, FOSSE, StayNTouch, HotelKey, Choice Advantage — the reconciliation logic is the same regardless of source."
					},
					{
						q: "What about the auditor?",
						a: "Every match, exception, and resolution is logged with timestamp and user. The audit pack is one-click export, including the supporting PMS night-audit files via Document Vault."
					},
					{
						q: "How fast do you find the money?",
						a: "Most portfolios surface $5–15K of recoverable OTA and billing errors in the first 60 days — typically more than the annual subscription."
					}
				]
			},
			cta: {
				title: "See your portfolio's exceptions on Innrly",
				subtitle: "A 20-minute demo using your brands and PMS. We'll show you where the recoverable dollars usually hide."
			}
		})]
	});
}
//#endregion
export { Page as component };
