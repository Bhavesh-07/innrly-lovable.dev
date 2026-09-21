import { r as Section } from "./Section-D2XWIGS_.js";
import { t as DeepSolutionLayout } from "./DeepSolutionLayout-BG4AihqU.js";
import { t as BeforeAfterFlow } from "./BeforeAfterFlow-tFWrpBrV.js";
import { t as Route } from "./solutions.operations-automation-iHzvcqGF.js";
import { t as OpsNightPack } from "./OpsNightPack-D2kx6AAw.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, FileCheck2, FileText, Inbox, Mail, Moon, StickyNote, Sun, Workflow } from "lucide-react";
//#region src/components/site/OpsChaos.tsx
/**
* OpsChaos — 11 PM night auditor scramble. Sticky-note checklist, late corporate
* emails, fax / OTA folders, missing audit pack.
*/
function OpsChaos() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative space-y-2",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "ba-chaos-in rounded-lg border border-destructive/60 bg-destructive/10 p-2 opacity-0 shadow-elevated",
				style: {
					["--x0"]: "-32px",
					["--y0"]: "14px",
					["--r0"]: "-6deg",
					["--rot"]: "-1deg"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5 border-b border-border/40 pb-1",
					children: [
						/* @__PURE__ */ jsx(Moon, { className: "h-3 w-3 text-chart-4" }),
						/* @__PURE__ */ jsx("span", {
							className: "text-[10px] font-semibold text-foreground",
							children: "Night Audit Checklist · 11:42 PM"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "ml-auto text-[9px] text-muted-foreground",
							children: "4 of 11 done"
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-1 space-y-0.5 text-[9px]",
					children: [
						{
							t: "PMS EOD run",
							d: true
						},
						{
							t: "Print pack + email corporate",
							d: false
						},
						{
							t: "Re-key OTA settlements to XLS",
							d: false
						},
						{
							t: "Match bank deposits",
							d: false
						},
						{
							t: "Pull vendor invoices · 3 portals",
							d: false
						}
					].map((row) => /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-[14px_1fr_60px] gap-1 text-foreground",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: row.d ? "text-success" : "text-destructive",
								children: row.d ? "✓" : "○"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: row.t
							}),
							/* @__PURE__ */ jsx("span", {
								className: `rounded px-1 text-center ${row.d ? "bg-success/15 text-success" : "bg-destructive/20 text-destructive"}`,
								children: row.d ? "done" : "todo"
							})
						]
					}, row.t))
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-2",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "ba-chaos-in flex-1 rounded-lg border border-destructive/50 bg-destructive/10 p-2 opacity-0",
						style: {
							["--x0"]: "-20px",
							["--y0"]: "-14px",
							["--r0"]: "5deg",
							["--rot"]: "1.5deg",
							["--delay"]: "0.22s"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-primary" }), /* @__PURE__ */ jsx("span", {
								className: "truncate text-[10px] font-semibold text-foreground",
								children: "Corp · 11:08 PM"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-1 text-[10px] text-foreground",
							children: [
								"\"",
								/* @__PURE__ */ jsx("span", {
									className: "font-semibold text-accent",
									children: "resend"
								}),
								" last night's pack — DAL-12 missing\""
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "ba-chaos-in w-32 shrink-0 rounded-lg border border-destructive/50 bg-background/60 p-2 opacity-0 shadow-elevated",
						style: {
							["--x0"]: "24px",
							["--y0"]: "18px",
							["--r0"]: "-9deg",
							["--rot"]: "-2.5deg",
							["--delay"]: "0.4s"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1 border-b border-border/40 pb-1",
							children: [/* @__PURE__ */ jsx(FileText, { className: "h-3 w-3 text-success" }), /* @__PURE__ */ jsx("span", {
								className: "truncate text-[9px] font-semibold text-foreground",
								children: "Booking_Sept.csv"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1 text-[9px] text-muted-foreground",
							children: "re-key 142 rows"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "ba-chaos-in w-20 shrink-0 rounded-md bg-chart-4/90 p-2 text-[10px] font-semibold text-background opacity-0 shadow-elevated",
						style: {
							["--x0"]: "30px",
							["--y0"]: "-12px",
							["--r0"]: "14deg",
							["--rot"]: "6deg",
							["--delay"]: "0.58s"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ jsx(StickyNote, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("span", { children: "AGM" })]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-0.5 text-[9px] font-normal",
							children: "redo by 6 AM"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-slide-in mt-2 flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0",
				style: { animationDelay: "0.86s" },
				children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-3 w-3 shrink-0 text-destructive" }), /* @__PURE__ */ jsx("span", {
					className: "text-[10px] font-semibold text-destructive",
					children: "Sunrise in 6 hours · 7 items still open"
				})]
			})
		]
	});
}
//#endregion
//#region src/routes/solutions.operations-automation.tsx?tsr-split=component
function Page() {
	const { testimonials: allTestimonials } = Route.useLoaderData();
	const t = allTestimonials.find((t) => t.page === "operations-automation");
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background",
		children: [/* @__PURE__ */ jsxs(Section, {
			tone: "surface",
			className: "py-5 sm:py-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-6 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-accent",
					children: "From 11 PM checklist to 6 AM queue"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-2 text-2xl font-bold text-foreground sm:text-3xl",
					children: "Watch the night audit pack assemble itself before sunrise."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-6xl",
				children: /* @__PURE__ */ jsx(BeforeAfterFlow, {
					chaos: /* @__PURE__ */ jsx(OpsChaos, {}),
					after: () => /* @__PURE__ */ jsx(OpsNightPack, {}),
					motion: "pulse"
				})
			})]
		}), /* @__PURE__ */ jsx(DeepSolutionLayout, {
			icon: Workflow,
			orbVariant: "ops",
			persona: "For Night Auditors & AGMs",
			eyebrow: "Hotel Back-Office Automation",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Night audit, ",
				/* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "done before"
				}),
				" sunrise."
			] }),
			description: /* @__PURE__ */ jsxs(Fragment, { children: [
				"The night audit, OTA reconciliation, bank matching, and A/P queue shouldn't be four separate jobs at four separate hotels. Innrly runs them in one flow — variances flagged, packets filed by date, accounting in sync before the morning shift walks in. Read about the power of unified",
				" ",
				/* @__PURE__ */ jsx(Link, {
					to: "/hotel-back-office-automation",
					className: "text-accent underline font-semibold",
					children: "hotel back-office automation"
				}),
				"."
			] }),
			bullets: [
				"Night Audit+ runs automatically with variance flags surfaced by 6 AM",
				"OTA, bank, and credit-card reconciliation in the same pass",
				"Vendor invoices auto-pulled from portals and pre-coded",
				"Every report filed against a calendar — pull any night in two clicks"
			],
			metrics: [
				{
					stat: "20–40",
					label: "Hrs saved / property / month"
				},
				{
					stat: "0",
					label: "Spreadsheets required"
				},
				{
					stat: "100%",
					label: "Audit trail coverage"
				},
				{
					stat: "Real-time",
					label: "Accounting sync"
				}
			],
			beforeAfter: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"From ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "four jobs at four hotels"
					}),
					" to one queue."
				] }),
				description: "The night auditor's day shouldn't begin with re-keying.",
				withoutTitle: "The 4 AM grind",
				without: [
					"Run the PMS audit, print, email the pack to corporate",
					"Re-key OTA settlements into a separate spreadsheet",
					"Chase vendor invoices in three inboxes and a fax",
					"Hope the GM signs off before the AGM has to redo it"
				],
				withTitle: "The automated pack",
				withItems: [
					"Audit pack generated, filed to the calendar, emailed automatically",
					"OTA, bank, card recs run in the same pass with variance flags",
					"Vendor invoices pulled from portals overnight, OCR'd and GL-coded",
					"AGM gets one queue of exceptions — not a stack of paper"
				]
			},
			workflow: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["How ops teams ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "actually use it."
				})] }),
				description: "Four moves between midnight and morning.",
				steps: [
					{
						icon: Moon,
						title: "Midnight — Night Audit+ kicks off",
						body: "Innrly runs the EOD across every property in the portfolio, applies variance rules, and packages the pack with supporting reports."
					},
					{
						icon: FileCheck2,
						title: "2 AM — recs and invoices process",
						body: "OTA, bank, credit-card reconciliation runs. Vendor invoices are pulled from portals, OCR'd, GL-coded, routed for approval."
					},
					{
						icon: Sun,
						title: "6 AM — exceptions queue ready",
						body: "The AGM opens one screen with the night's variances, missing deposits, and invoices that need a human."
					},
					{
						icon: Inbox,
						title: "Always — files in the Document Vault",
						body: "Every PMS pack, vendor invoice, and supporting doc is stored against the calendar date — pull any night, any property, in two clicks."
					}
				],
				artifact: /* @__PURE__ */ jsx(OpsNightPack, {})
			},
			replaces: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["What Innrly Operations Automation ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "replaces."
				})] }),
				description: "These things go away.",
				items: [
					"Manual night audit emails to corporate",
					"OTA reconciliation spreadsheets",
					"Vendor portal logins for invoice pulls",
					"Folder-by-folder file storage",
					"Re-keying batch totals into accounting",
					"\"Resend me the audit pack\" requests",
					"Paper invoice routing"
				]
			},
			quote: {
				text: t?.quote || "We had two night auditors quit because of the workload. After Innrly, the role is genuinely a 4-hour shift — they actually want it now. And the AGM walks in to a queue, not a panic.",
				author: t ? [
					t.name,
					t.title,
					t.company
				].filter(Boolean).join(" · ") : "Director of Operations · 6-property select-service group"
			},
			modules: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["The modules behind ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "the automation."
				})] }),
				description: "Each module deep-links into the Features page.",
				items: [
					{
						name: "Night Audit+",
						body: "Automated EOD with variance flags by sunrise."
					},
					{
						name: "OTA Reconciliation",
						body: "Match Booking, Expedia, direct to settled payments."
					},
					{
						name: "Bank & Card Rec",
						body: "Match every deposit, batch, chargeback to PMS."
					},
					{
						name: "Invoice Auto-Pull",
						body: "Innrly pulls vendor invoices from portals overnight."
					},
					{
						name: "OCR + GL Coding",
						body: "Email or scanned invoices captured and pre-coded."
					},
					{
						name: "Document Vault",
						body: "Calendar-based filing — any night, any property."
					}
				]
			},
			faq: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["What ops leaders ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "actually ask us."
				})] }),
				items: [
					{
						q: "Does this replace our night auditor?",
						a: "No — it removes the busywork so the night auditor can actually audit. The role becomes shorter, calmer, and far easier to staff."
					},
					{
						q: "Will it work with every PMS in our portfolio?",
						a: "Yes. OnQ, PEP, FOSSE, StayNTouch, HotelKey, Choice Advantage and others — Innrly normalizes the pack across all of them so corporate sees one format."
					},
					{
						q: "How does the OTA recovery actually work?",
						a: "Innrly matches every reservation back to its settled payment from Booking, Expedia, etc. When the OTA settles short, you get a worked queue with the dispute amount pre-calculated."
					},
					{
						q: "What happens to our existing audit files?",
						a: "We backfill the Document Vault during onboarding so you have a continuous calendar — old packets, new packets, all in one place."
					}
				]
			},
			cta: {
				title: "See the night, automated",
				subtitle: "A 20-minute demo using one of your properties. You'll see the audit pack, the exceptions queue, and the Document Vault filed by date."
			}
		})]
	});
}
//#endregion
export { Page as component };
