import { r as Section } from "./Section-D2XWIGS_.js";
import { t as DeepSolutionLayout } from "./DeepSolutionLayout-BG4AihqU.js";
import { t as BeforeAfterFlow } from "./BeforeAfterFlow-tFWrpBrV.js";
import { t as Route } from "./solutions.expense-entries-DAsmBy5p.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, ArrowDownToLine, ArrowRight, BookOpen, Brain, Check, CreditCard, FileSpreadsheet, HelpCircle, Mail, Receipt, Repeat } from "lucide-react";
//#region src/components/site/ExpenseChaos.tsx
/**
* ExpenseChaos — compact chaos: spreadsheet with ??? GL cells, Amex statement, sticky.
*/
function ExpenseChaos() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative space-y-2",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "ba-chaos-in rounded-lg border border-destructive/60 bg-destructive/10 p-2 opacity-0 shadow-elevated",
				style: {
					["--x0"]: "-42px",
					["--y0"]: "18px",
					["--r0"]: "-9deg",
					["--rot"]: "-1.5deg"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5 border-b border-border/40 pb-1",
					children: [
						/* @__PURE__ */ jsx(FileSpreadsheet, { className: "h-3 w-3 text-success" }),
						/* @__PURE__ */ jsx("span", {
							className: "text-[10px] font-semibold text-foreground",
							children: "Expenses_Oct_v4.xlsx"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "ml-auto text-[9px] text-muted-foreground",
							children: "14 rows · 8 uncoded"
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-1 space-y-0.5 text-[9px]",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-[1fr_60px_60px] gap-1 text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("span", { children: "Vendor" }),
								/* @__PURE__ */ jsx("span", { children: "Amount" }),
								/* @__PURE__ */ jsx("span", { children: "GL" })
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-[1fr_60px_60px] gap-1 text-foreground",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "truncate",
									children: "Home Depot"
								}),
								/* @__PURE__ */ jsx("span", { children: "$418.92" }),
								/* @__PURE__ */ jsx("span", {
									className: "rounded bg-destructive/15 px-1 text-center text-destructive",
									children: "???"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-[1fr_60px_60px] gap-1 text-foreground",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "truncate",
									children: "Reliant Energy"
								}),
								/* @__PURE__ */ jsx("span", { children: "$842.10" }),
								/* @__PURE__ */ jsx("span", {
									className: "rounded bg-destructive/15 px-1 text-center text-destructive",
									children: "???"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-[1fr_60px_60px] gap-1 text-foreground",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "truncate",
									children: "Coffee · F&B"
								}),
								/* @__PURE__ */ jsx("span", { children: "$87.40" }),
								/* @__PURE__ */ jsx("span", {
									className: "rounded bg-destructive/15 px-1 text-center text-destructive",
									children: "???"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-2",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "ba-chaos-in flex w-36 shrink-0 items-center gap-1.5 rounded-lg border border-destructive/50 bg-background/60 p-2 opacity-0 shadow-elevated",
						style: {
							["--x0"]: "-26px",
							["--y0"]: "-18px",
							["--r0"]: "8deg",
							["--rot"]: "2deg",
							["--delay"]: "0.22s"
						},
						children: [/* @__PURE__ */ jsx(Receipt, { className: "h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("div", {
								className: "truncate text-[10px] font-semibold text-foreground",
								children: "Amex •••• 2014"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[9px] text-muted-foreground",
								children: "14 charges · not in QB"
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "ba-chaos-in flex-1 rounded-lg border border-destructive/50 bg-destructive/10 p-2 opacity-0",
						style: {
							["--x0"]: "12px",
							["--y0"]: "22px",
							["--r0"]: "5deg",
							["--rot"]: "-1deg",
							["--delay"]: "0.4s"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
								className: "truncate text-[10px] font-semibold text-foreground",
								children: "Auto-pay receipt"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1 line-clamp-1 text-[9px] text-muted-foreground",
							children: "\"Forwarded for your records…\""
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
							children: [/* @__PURE__ */ jsx(HelpCircle, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("span", { children: "GL?" })]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-0.5 text-[9px] font-normal",
							children: "$87 run"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-slide-in mt-2 flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0",
				style: { animationDelay: "0.86s" },
				children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-3 w-3 shrink-0 text-destructive" }), /* @__PURE__ */ jsx("span", {
					className: "text-[10px] font-semibold text-destructive",
					children: "QuickBooks out of sync · 11 days behind"
				})]
			})
		]
	});
}
//#endregion
//#region src/components/site/ExpenseFlow.tsx
/**
* ExpenseFlow — visible charge movement: card charge flies into entry, fields
* auto-fill, then the coded row travels into the ledger and posts to QB.
*/
function ExpenseFlow({ playKey }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute -inset-6 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl",
			"aria-hidden": true
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex gap-1.5",
						children: [
							/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
							/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-chart-4/70" }),
							/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-success/70" })
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "ml-3 text-xs font-medium text-muted-foreground",
						children: "Expense Entries · DAL-12"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "relative flex h-1.5 w-1.5",
							children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-success" })]
						}), "QB SYNCED"]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative grid grid-cols-1 gap-3 p-4 md:grid-cols-5",
				children: [
					/* @__PURE__ */ jsx("svg", {
						className: "pointer-events-none absolute inset-0 z-10 hidden h-full w-full text-accent/70 md:block",
						viewBox: "0 0 760 360",
						preserveAspectRatio: "none",
						"aria-hidden": true,
						children: /* @__PURE__ */ jsx("path", {
							className: "ba-route-dash",
							style: { animationDelay: "2.55s" },
							d: "M170 92 C260 64 332 86 404 132 C470 174 544 174 642 160",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round"
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "ba-fly-expense pointer-events-none absolute left-8 top-20 z-20 hidden items-center gap-2 rounded-xl border border-accent/60 bg-background/95 px-3 py-2 shadow-elevated md:flex",
						style: {
							["--sx"]: "-260px",
							["--sy"]: "-34px",
							animationDelay: "0.12s"
						},
						children: [/* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4 text-accent" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-[10px] font-bold text-foreground",
							children: "Home Depot"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[9px] text-muted-foreground",
							children: "$418.92 · Amex"
						})] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative col-span-2 rounded-xl border border-accent/40 bg-surface/60 p-3",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 border-b border-border/40 pb-2",
								children: [/* @__PURE__ */ jsx(Receipt, { className: "h-3.5 w-3.5 text-accent" }), /* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
									children: "Quick entry"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-2 space-y-2 text-[11px]",
								children: [
									/* @__PURE__ */ jsx(AnimField, {
										label: "Vendor",
										value: "Home Depot",
										delay: "1.65s",
										memory: true
									}),
									/* @__PURE__ */ jsx(AnimField, {
										label: "Amount",
										value: "$418.92",
										delay: "2.05s"
									}),
									/* @__PURE__ */ jsx(AnimField, {
										label: "Date",
										value: "Oct 18",
										delay: "2.25s"
									}),
									/* @__PURE__ */ jsx(AnimField, {
										label: "GL Code",
										value: "5410 · R&M",
										delay: "2.55s",
										memory: true
									}),
									/* @__PURE__ */ jsx(AnimField, {
										label: "Card / Paid by",
										value: "Amex •••• 2014",
										delay: "2.85s"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ba-pop-in mt-3 flex items-center justify-between rounded-lg bg-accent/10 p-2 opacity-0",
								style: { animationDelay: "2.65s" },
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-accent",
									children: "Vendor memory"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-semibold text-foreground",
									children: "2 fields prefilled"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "ba-landing-glow col-span-3 space-y-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border/60 bg-surface/60 p-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 border-b border-border/40 pb-2",
								children: [
									/* @__PURE__ */ jsx(BookOpen, { className: "h-3.5 w-3.5 text-accent" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
										children: "Today's expenses"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "ml-auto text-[9px] font-semibold text-foreground",
										children: "$2,184.27"
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-2 space-y-1",
								children: [
									/* @__PURE__ */ jsx(ExpRow, {
										vendor: "Reliant Energy",
										gl: "6210 · Utilities",
										amount: "$842.10",
										status: "paid"
									}),
									/* @__PURE__ */ jsx(ExpRow, {
										vendor: "Comcast",
										gl: "6230 · Internet",
										amount: "$219.99",
										status: "paid"
									}),
									/* @__PURE__ */ jsx(ExpRow, {
										vendor: "Coffee · F&B run",
										gl: "5120 · F&B",
										amount: "$87.40",
										status: "paid"
									}),
									/* @__PURE__ */ jsx(ExpRow, {
										vendor: "Amazon · supplies",
										gl: "5440 · Supplies",
										amount: "$615.86",
										status: "paid"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "ba-slide-from-left opacity-0",
										style: { animationDelay: "3.35s" },
										children: /* @__PURE__ */ jsx(ExpRow, {
											vendor: "Home Depot",
											gl: "5410 · R&M",
											amount: "$418.92",
											status: "syncing",
											flipDelay: "5.25s",
											highlight: true
										})
									})
								]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "rounded-xl border border-border/60 bg-surface/60 p-3",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-2",
								children: [
									/* @__PURE__ */ jsx(FlowStep, {
										label: "Innrly",
										sub: "Entered",
										delay: "4.15s"
									}),
									/* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3 text-muted-foreground" }),
									/* @__PURE__ */ jsx(FlowStep, {
										label: "GL coded",
										sub: "Vendor memory",
										delay: "4.55s"
									}),
									/* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3 text-muted-foreground" }),
									/* @__PURE__ */ jsx(FlowStep, {
										label: "QuickBooks",
										sub: "Expense posted",
										delay: "4.95s"
									})
								]
							})
						})]
					})
				]
			})]
		})]
	}, playKey);
}
function AnimField({ label, value, delay, memory }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `relative overflow-hidden rounded-lg border p-2 ${memory ? "border-accent/40 bg-accent/5" : "border-border/40 bg-background/40"}`,
		children: [
			memory && /* @__PURE__ */ jsx("div", {
				className: "ba-scan absolute inset-y-0 left-0 w-1/3 bg-accent/15 opacity-0",
				style: { animationDelay: delay }
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[8px] font-bold uppercase tracking-wider text-muted-foreground",
					children: label
				}), memory && /* @__PURE__ */ jsx("span", {
					className: "ba-pop-in text-[8px] font-bold uppercase tracking-wider text-accent opacity-0",
					style: { animationDelay: delay },
					children: "auto"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-0.5 ba-pop-in text-[11px] font-semibold text-foreground opacity-0",
				style: { animationDelay: delay },
				children: value
			})
		]
	});
}
function ExpRow({ vendor, gl, amount, status, flipDelay, highlight }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `flex items-center justify-between rounded px-1.5 py-1 ${highlight ? "bg-accent/5" : ""}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "truncate text-[11px] font-semibold text-foreground",
				children: vendor
			}), /* @__PURE__ */ jsx("div", {
				className: "text-[9px] text-muted-foreground",
				children: gl
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-[11px] font-bold text-foreground",
				children: amount
			}), status === "syncing" && flipDelay ? /* @__PURE__ */ jsxs("span", {
				className: "relative inline-flex",
				children: [/* @__PURE__ */ jsx("span", {
					className: "rounded-full bg-accent/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-accent",
					children: "Syncing"
				}), /* @__PURE__ */ jsx("span", {
					className: "ba-pop-in absolute inset-0 rounded-full bg-success/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-success opacity-0",
					style: { animationDelay: flipDelay },
					children: "QB"
				})]
			}) : /* @__PURE__ */ jsx("span", {
				className: "rounded-full bg-success/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-success",
				children: "QB"
			})]
		})]
	});
}
function FlowStep({ label, sub, delay }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center text-center",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "ba-pop-in flex h-6 w-6 items-center justify-center rounded-full bg-success/15 text-success opacity-0",
				style: { animationDelay: delay },
				children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-1 text-[10px] font-bold text-foreground",
				children: label
			}),
			/* @__PURE__ */ jsx("div", {
				className: "text-[8px] text-muted-foreground",
				children: sub
			})
		]
	});
}
//#endregion
//#region src/routes/solutions.expense-entries.tsx?tsr-split=component
function Page() {
	const { testimonials: allTestimonials } = Route.useLoaderData();
	const t = allTestimonials.find((t) => t.page === "expense-entries");
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background",
		children: [/* @__PURE__ */ jsxs(Section, {
			tone: "surface",
			className: "py-5 sm:py-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-6 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-accent",
					children: "From spreadsheet to synced"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-2 text-2xl font-bold text-foreground sm:text-3xl",
					children: "Watch one charge go from chaos to coded in 6 seconds."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-6xl",
				children: /* @__PURE__ */ jsx(BeforeAfterFlow, {
					chaos: /* @__PURE__ */ jsx(ExpenseChaos, {}),
					after: (playKey) => /* @__PURE__ */ jsx(ExpenseFlow, { playKey }),
					motion: "expenses"
				})
			})]
		}), /* @__PURE__ */ jsx(DeepSolutionLayout, {
			icon: Receipt,
			orbVariant: "expense",
			persona: "For Controllers & Property Accountants",
			eyebrow: "Expense Entries",
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["Record once, ", /* @__PURE__ */ jsx("span", {
				className: "text-gradient",
				children: "sync to your GL."
			})] }),
			description: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Capture expense tickets, credit card charges, and auto-paid invoices directly in Innrly as expense items — they sync to your accounting system (QuickBooks, M3, Sage Intacct, and others) as already-spent transactions, so your ledger stays current without double entry. Find out how this is managed under our broader",
				" ",
				/* @__PURE__ */ jsx(Link, {
					to: "/hotel-back-office-automation",
					className: "text-accent underline font-semibold",
					children: "hotel back-office automation"
				}),
				" ",
				"framework."
			] }),
			bullets: [
				"Log credit card charges as they happen",
				"Record auto-paid invoices (utilities, subscriptions, recurring vendors)",
				"GL-code at entry — Innrly remembers the vendor mapping",
				"One-way sync to your accounting system as expense / already-paid items"
			],
			metrics: [
				{
					stat: "1",
					label: "Place to enter"
				},
				{
					stat: "Auto",
					label: "GL sync"
				},
				{
					stat: "0",
					label: "Duplicate entries"
				},
				{
					stat: "Real-time",
					label: "Spend visibility"
				}
			],
			beforeAfter: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"From ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "\"who paid for that?\""
					}),
					" to a clean GL."
				] }),
				description: "Not every charge is an AP invoice. Credit card swipes and auto-debits used to live in side-spreadsheets. Now they post to the GL the day they happen.",
				withoutTitle: "The side-spreadsheet sprawl",
				without: [
					"Credit card statement reconciled by hand at month-end",
					"Auto-paid utility invoices discovered three weeks after the debit",
					"GL coding done from memory at the close meeting",
					"Same vendor coded three different ways across three properties"
				],
				withTitle: "Posted the day it's spent",
				withItems: [
					"Card swipes logged from the property the same day",
					"Recurring auto-debits captured before they hit the statement",
					"Vendor memory pre-codes the next charge from the same vendor",
					"Portfolio-wide consistency — same vendor, same code, every time"
				]
			},
			workflow: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["How controllers ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "actually use it."
				})] }),
				description: "Four moves that close the credit-card and auto-debit gap.",
				steps: [
					{
						icon: CreditCard,
						title: "On-property — log the card swipe",
						body: "GM or AGM enters the charge from the property in seconds. Vendor, amount, GL code (pre-filled if Innrly recognizes the vendor)."
					},
					{
						icon: Repeat,
						title: "Recurring — auto-debits captured",
						body: "Utilities, SaaS, recurring vendors — set them up once with their cadence and Innrly drops the expense entry the day it's debited."
					},
					{
						icon: Brain,
						title: "Vendor memory does the coding",
						body: "Innrly learns your GL mapping per vendor across the portfolio. The next charge from Sysco is pre-coded before you click."
					},
					{
						icon: ArrowDownToLine,
						title: "Sync — straight to your GL",
						body: "Each entry posts to QuickBooks, M3, Sage Intacct, or whatever you run, as an already-paid transaction. No CSV imports, no manual journal entries."
					}
				],
				artifact: /* @__PURE__ */ jsx(ExpenseFlow, { playKey: 0 })
			},
			replaces: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["What Expense Entries ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "replaces."
				})] }),
				description: "These things go away.",
				items: [
					"Credit card reconciliation spreadsheets",
					"Manual journal entries for auto-paid invoices",
					"\"Who swiped this card?\" email threads",
					"Inconsistent GL coding across properties",
					"Month-end \"what was that charge?\" hunts",
					"CSV imports into QuickBooks",
					"Side-spreadsheets that never tie to the GL"
				]
			},
			quote: {
				text: t?.quote || "We used to discover utility auto-debits two weeks after they hit. Now they post the day they're spent, coded correctly, and the GL is current. Our close dropped from twelve days to four.",
				author: t ? [
					t.name,
					t.title,
					t.company
				].filter(Boolean).join(" · ") : "Controller · 5-property portfolio"
			},
			modules: {
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["The modules behind ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "the entry."
				})] }),
				description: "Each module deep-links into the Features page.",
				items: [
					{
						name: "Card-Swipe Entry",
						body: "On-property logging in under 20 seconds."
					},
					{
						name: "Recurring Auto-Debits",
						body: "Set the cadence, Innrly posts the entry."
					},
					{
						name: "Vendor Memory",
						body: "Pre-codes the next charge from the same vendor."
					},
					{
						name: "GL Sync",
						body: "Posts to QuickBooks, M3, Sage Intacct, and more."
					},
					{
						name: "Property Scoping",
						body: "Every entry tied to a property for per-property P&L."
					},
					{
						name: "Audit Trail",
						body: "Who entered, when, with what receipt."
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
						q: "Which accounting systems sync?",
						a: "QuickBooks Online, QuickBooks Desktop, M3, Sage Intacct, NetSuite, and most major systems. Sync is one-way (Innrly → GL) so your accounting tool stays the source of truth for the ledger."
					},
					{
						q: "What about receipts? Do we attach them?",
						a: "Yes. Snap or upload a receipt at entry — it stays attached to the GL transaction so audit week is a two-click export."
					},
					{
						q: "How is this different from an AP tool?",
						a: "AP tools handle invoices that haven't been paid yet. Expense Entries handles charges that already happened — card swipes, auto-debits, and tickets — and posts them as already-paid transactions."
					},
					{
						q: "Can we approve before sync?",
						a: "Yes. Optional approval workflow per property or above a dollar threshold. Below the threshold, entries sync the same day."
					}
				]
			},
			cta: {
				title: "See your card statement on Innrly",
				subtitle: "A 20-minute demo using one of your properties' credit card and auto-debit history. You'll see the GL-coded version in real time."
			}
		})]
	});
}
//#endregion
export { Page as component };
