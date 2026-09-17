import { jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, Check, DollarSign } from "lucide-react";
//#region src/components/site/ExceptionsLedger.tsx
/**
* ExceptionsLedger — stylized in-product artifact for Financial Control.
* Shows the "exceptions only" worklist — the opposite of a wall of green checks.
*/
function ExceptionsLedger() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute -inset-8 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsxs("div", {
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
							children: "Exceptions · Controller view · today"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "ml-auto flex items-center gap-1.5 text-[10px] font-medium text-accent",
							children: [/* @__PURE__ */ jsx(DollarSign, { className: "h-3 w-3" }), "$4,287 RECOVERABLE"]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative mb-3 overflow-hidden rounded-xl border border-border/60 bg-surface/60 p-3",
							children: [
								/* @__PURE__ */ jsx("div", { className: "ba-scan pointer-events-none absolute inset-y-0 w-2 bg-gradient-to-b from-transparent via-success/70 to-transparent shadow-[0_0_18px_4px_color-mix(in_oklab,var(--success)_55%,transparent)]" }),
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-4 gap-2",
									children: [
										/* @__PURE__ */ jsx(Stat, {
											label: "Reconciled",
											value: "14,209",
											good: true
										}),
										/* @__PURE__ */ jsx(Stat, {
											label: "Exceptions",
											value: "7",
											warn: true
										}),
										/* @__PURE__ */ jsx(Stat, {
											label: "OTA caught",
											value: "$2.8K"
										}),
										/* @__PURE__ */ jsx(Stat, {
											label: "Bank var.",
											value: "$1.4K"
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-2 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground",
									children: "14,209 transactions scanned · 7 surfaced"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(Row, {
									prop: "DFW-09 · Hilton Garden",
									type: "OTA commission",
									detail: "Booking.com folio #4421 — owed −$148",
									amount: "$148",
									delay: "0.3s"
								}),
								/* @__PURE__ */ jsx(Row, {
									prop: "AUS-03 · Holiday Inn",
									type: "Bank variance",
									detail: "Deposit short vs PMS batch by $312",
									amount: "$312",
									delay: "0.9s"
								}),
								/* @__PURE__ */ jsx(Row, {
									prop: "HOU-07 · Marriott Med",
									type: "Voided folio",
									detail: "Folio #7782 voided post-checkout, no reason code",
									amount: "$589",
									delay: "1.5s"
								}),
								/* @__PURE__ */ jsx(Row, {
									prop: "SAT-02 · Comfort Suites",
									type: "Direct bill",
									detail: "Group ABC under-charged $1,240 vs contract",
									amount: "$1,240",
									delay: "2.1s"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "ba-slide-in mt-3 flex items-center justify-between rounded-lg border border-accent/30 bg-accent/5 px-3 py-2 opacity-0",
							style: { animationDelay: "2.8s" },
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-[11px] text-foreground",
								children: [/* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-success" }), /* @__PURE__ */ jsx("span", { children: "14,202 of 14,209 auto-cleared overnight — work only the 7" })]
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[10px] font-bold text-accent",
								children: "Work the exceptions"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
						children: "Caught in 60 days"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-lg font-bold text-foreground",
						children: "Recoverable"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-[10px] text-muted-foreground",
						children: "varies by portfolio"
					})
				]
			})
		]
	});
}
function Stat({ label, value, good, warn }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
		className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground",
		children: label
	}), /* @__PURE__ */ jsx("div", {
		className: `mt-0.5 text-base font-bold ${warn ? "text-chart-4" : good ? "text-success" : "text-foreground"}`,
		children: value
	})] });
}
function Row({ prop, type, detail, amount, delay }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "ba-slide-from-left flex items-start gap-3 rounded-lg border border-border/60 bg-surface/60 p-2.5 opacity-0",
		style: { animationDelay: delay },
		children: [
			/* @__PURE__ */ jsx(AlertTriangle, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-chart-4" }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[11px] font-bold text-foreground",
						children: prop
					}), /* @__PURE__ */ jsx("span", {
						className: "rounded bg-border/40 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: type
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-0.5 truncate text-[10px] text-muted-foreground",
					children: detail
				})]
			}),
			/* @__PURE__ */ jsx("span", {
				className: "text-[11px] font-bold text-accent",
				children: amount
			})
		]
	});
}
//#endregion
export { ExceptionsLedger as t };
