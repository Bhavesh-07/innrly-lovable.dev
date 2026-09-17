import { jsx, jsxs } from "react/jsx-runtime";
import { FileCheck2, Inbox, Moon, Sun } from "lucide-react";
//#region src/components/site/OpsNightPack.tsx
/**
* OpsNightPack — stylized in-product artifact for the Operations Automation page.
* Shows the overnight timeline: midnight audit → 2 AM recs → 6 AM exception queue.
*/
function OpsNightPack() {
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
							children: "Night Audit+ · 6 properties · 6:04 AM"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "relative flex h-1.5 w-1.5",
								children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-success" })]
							}), "COMPLETE"]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-3 p-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative overflow-hidden rounded-xl border border-border/60 bg-surface/60 p-3",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
									children: "Overnight pipeline · 6 properties"
								}), /* @__PURE__ */ jsx("div", {
									className: "text-[9px] font-mono text-accent",
									children: "9 PM → 6 AM"
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "ba-scan pointer-events-none absolute inset-y-0 w-1.5 bg-gradient-to-b from-transparent via-accent/60 to-transparent shadow-[0_0_18px_4px_color-mix(in_oklab,var(--accent)_55%,transparent)]" }),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-3 grid grid-cols-4 gap-2",
								children: [
									/* @__PURE__ */ jsx(TimelineStep, {
										icon: Moon,
										label: "00:14",
										body: "Audit kicked off",
										delay: "0s"
									}),
									/* @__PURE__ */ jsx(TimelineStep, {
										icon: FileCheck2,
										label: "02:08",
										body: "Recs · OTA · Bank",
										delay: "0.9s"
									}),
									/* @__PURE__ */ jsx(TimelineStep, {
										icon: Inbox,
										label: "04:22",
										body: "Invoices OCR'd",
										delay: "1.8s"
									}),
									/* @__PURE__ */ jsx(TimelineStep, {
										icon: Sun,
										label: "06:00",
										body: "Queue ready",
										delay: "2.7s",
										current: true
									})
								]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-5 gap-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "col-span-2 rounded-xl border border-border/60 bg-surface/60 p-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 border-b border-border/40 pb-2",
								children: [/* @__PURE__ */ jsx(FileCheck2, { className: "h-3.5 w-3.5 text-accent" }), /* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
									children: "Night packs · 6 of 6"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-2 space-y-1.5",
								children: [
									/* @__PURE__ */ jsx(PackRow, {
										prop: "AUS-03",
										status: "filed",
										delay: "0.2s"
									}),
									/* @__PURE__ */ jsx(PackRow, {
										prop: "DAL-12",
										status: "filed",
										delay: "0.5s"
									}),
									/* @__PURE__ */ jsx(PackRow, {
										prop: "HOU-01",
										status: "variance",
										delay: "0.8s"
									}),
									/* @__PURE__ */ jsx(PackRow, {
										prop: "SAT-04",
										status: "filed",
										delay: "1.1s"
									}),
									/* @__PURE__ */ jsx(PackRow, {
										prop: "ATX-09",
										status: "filed",
										delay: "1.4s"
									}),
									/* @__PURE__ */ jsx(PackRow, {
										prop: "FTW-02",
										status: "filed",
										delay: "1.7s"
									})
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "col-span-3 rounded-xl border border-accent/40 bg-surface/60 p-3",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 border-b border-border/40 pb-2",
									children: [
										/* @__PURE__ */ jsx(Inbox, { className: "h-3.5 w-3.5 text-accent" }),
										/* @__PURE__ */ jsx("span", {
											className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
											children: "AGM exception queue · 3 items"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "ml-auto text-[9px] font-semibold text-accent",
											children: "$1,847 at risk"
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-2 space-y-1.5",
									children: [
										/* @__PURE__ */ jsx(ExceptionRow, {
											prop: "HOU-01",
											type: "Cash drawer",
											amount: "-$214",
											tone: "bad",
											delay: "2.2s"
										}),
										/* @__PURE__ */ jsx(ExceptionRow, {
											prop: "DAL-12",
											type: "OTA short-pay",
											amount: "-$1,118",
											tone: "bad",
											delay: "2.6s"
										}),
										/* @__PURE__ */ jsx(ExceptionRow, {
											prop: "AUS-03",
											type: "Comp threshold",
											amount: "$515",
											tone: "warn",
											delay: "3.0s"
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "ba-slide-in mt-2 rounded-md bg-accent/10 p-2 opacity-0",
									style: { animationDelay: "3.4s" },
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-[9px] font-bold uppercase tracking-wider text-accent",
										children: "Filed to vault"
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-0.5 text-[11px] font-semibold text-foreground",
										children: "Oct 18 · 42 docs · 6 properties"
									})]
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
					children: "The 4 AM grind"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-lg font-bold text-foreground",
					children: "Already done"
				})]
			})
		]
	});
}
function TimelineStep({ icon: Icon, label, body, delay, current }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `ba-slide-from-left rounded-lg border p-2 opacity-0 ${current ? "border-accent/60 bg-accent/10" : "border-success/40 bg-success/5"}`,
		style: { animationDelay: delay },
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1.5",
			children: [/* @__PURE__ */ jsx(Icon, { className: `h-3 w-3 ${current ? "text-accent" : "text-success"}` }), /* @__PURE__ */ jsx("span", {
				className: "font-mono text-[10px] font-bold text-foreground",
				children: label
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-1 text-[10px] text-muted-foreground",
			children: body
		})]
	});
}
function PackRow({ prop, status, delay }) {
	const variance = status === "variance";
	return /* @__PURE__ */ jsxs("div", {
		className: "ba-slide-from-left flex items-center justify-between rounded px-1.5 py-0.5 opacity-0",
		style: { animationDelay: delay },
		children: [/* @__PURE__ */ jsx("span", {
			className: "font-mono text-[10px] font-semibold text-foreground",
			children: prop
		}), /* @__PURE__ */ jsx("span", {
			className: `rounded-full px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider ${variance ? "bg-chart-4/15 text-chart-4" : "bg-success/15 text-success"}`,
			children: variance ? "Variance" : "Filed"
		})]
	});
}
function ExceptionRow({ prop, type, amount, tone, delay }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "ba-slide-in flex items-center justify-between rounded border border-border/40 bg-background/40 px-2 py-1.5 opacity-0",
		style: { animationDelay: delay },
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
			className: "font-mono text-[10px] font-bold text-foreground",
			children: prop
		}), /* @__PURE__ */ jsx("div", {
			className: "text-[10px] text-muted-foreground",
			children: type
		})] }), /* @__PURE__ */ jsx("span", {
			className: `text-[12px] font-bold ${tone === "bad" ? "text-destructive" : "text-chart-4"}`,
			children: amount
		})]
	});
}
//#endregion
export { OpsNightPack as t };
