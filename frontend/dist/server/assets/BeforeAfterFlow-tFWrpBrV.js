import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, RotateCw } from "lucide-react";
//#region src/components/site/BeforeAfterFlow.tsx
function BeforeAfterFlow({ chaos, after, chaosLabel = "Without Innrly", afterLabel = "With Innrly", motion }) {
	const [playKey, setPlayKey] = useState(0);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative grid items-stretch gap-4 md:grid-cols-[minmax(220px,0.68fr)_44px_minmax(0,1.45fr)]",
		children: [
			motion && /* @__PURE__ */ jsx(CrossPanelMotion, { kind: motion }),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[10px] font-bold uppercase tracking-widest text-destructive/80",
					children: chaosLabel
				}), /* @__PURE__ */ jsx("span", {
					className: "text-[10px] text-muted-foreground",
					children: "Email · Drives · GM's laptop"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "rounded-2xl border border-destructive/30 bg-surface/40 p-4",
				children: chaos
			})] }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-center py-1 md:pt-8",
				children: [/* @__PURE__ */ jsx("div", {
					className: "hidden h-full min-h-72 w-full items-center justify-center md:flex",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative h-full w-px bg-border/50",
						children: [/* @__PURE__ */ jsx("div", { className: "ba-beam-y absolute left-1/2 top-0 h-16 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-accent to-transparent" }), /* @__PURE__ */ jsx("div", {
							className: "absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-background text-accent shadow-elevated",
							children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "relative h-1 w-28 overflow-hidden rounded-full bg-border/40 md:hidden",
					children: /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent ba-beam" })
				})]
			}),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[10px] font-bold uppercase tracking-widest text-accent",
					children: afterLabel
				}), /* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: () => setPlayKey((k) => k + 1),
					className: "inline-flex items-center gap-1 rounded-full border border-border/60 bg-surface/60 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground transition hover:border-accent/60 hover:text-accent",
					"aria-label": "Replay animation",
					children: [/* @__PURE__ */ jsx(RotateCw, { className: "h-3 w-3" }), " Replay"]
				})]
			}), after(playKey)] })
		]
	}, playKey);
}
function CrossPanelMotion({ kind }) {
	if (kind === "guardrails") return /* @__PURE__ */ jsxs("div", {
		className: "pointer-events-none absolute inset-0 z-30 hidden overflow-visible md:block",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "ba-cross-guard absolute left-[8%] top-[26%] rounded-xl border border-destructive/70 bg-background/95 px-4 py-3 shadow-elevated",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs font-bold text-foreground",
						children: "OTA variance · ($3,140)"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-[10px] text-muted-foreground",
						children: "Expedia settle short"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "ba-cross-stamp absolute -right-2 -top-2 rounded-full border border-success/60 bg-background px-2 py-0.5 text-[9px] font-bold text-success",
						children: "✓ Approved"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-cross-guard absolute left-[10%] top-[52%] rounded-xl border border-destructive/70 bg-background/95 px-4 py-3 shadow-elevated",
				style: { animationDelay: "1.4s" },
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs font-bold text-foreground",
						children: "Comp override · $812"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-[10px] text-muted-foreground",
						children: "unapproved discount"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "ba-cross-stamp absolute -right-2 -top-2 rounded-full border border-destructive/60 bg-background px-2 py-0.5 text-[9px] font-bold text-destructive",
						style: { animationDelay: "1.4s" },
						children: "✗ Blocked"
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { className: "ba-cross-trace absolute left-[14%] top-[42%] h-1 w-[44%] rounded-full bg-gradient-to-r from-destructive/0 via-accent to-accent/0" })
		]
	});
	if (kind === "pulse") return /* @__PURE__ */ jsxs("div", {
		className: "pointer-events-none absolute inset-0 z-30 hidden overflow-visible md:block",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "ba-cross-tick absolute left-[10%] top-[28%] rounded-lg border border-accent/60 bg-background/95 px-3 py-2 shadow-elevated",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-bold text-foreground",
					children: "Night audit · DAL12"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-[10px] text-muted-foreground",
					children: "12:04 AM · OK"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-cross-tick absolute left-[10%] top-[44%] rounded-lg border border-accent/60 bg-background/95 px-3 py-2 shadow-elevated",
				style: { animationDelay: "0.9s" },
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-bold text-foreground",
					children: "Rate push · all PMS"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-[10px] text-muted-foreground",
					children: "2:00 AM · synced"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-cross-tick absolute left-[10%] top-[60%] rounded-lg border border-accent/60 bg-background/95 px-3 py-2 shadow-elevated",
				style: { animationDelay: "1.8s" },
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-bold text-foreground",
					children: "GL post · QuickBooks"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-[10px] text-muted-foreground",
					children: "3:30 AM · 142 entries"
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "ba-cross-trace absolute left-[14%] top-[46%] h-1 w-[44%] rounded-full bg-gradient-to-r from-accent/0 via-accent to-accent/0" })
		]
	});
	if (kind === "expenses") return /* @__PURE__ */ jsxs("div", {
		className: "pointer-events-none absolute inset-0 z-30 hidden overflow-visible md:block",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "ba-cross-charge absolute left-[8%] top-[29%] rounded-xl border border-accent/70 bg-background/95 px-4 py-3 shadow-elevated",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-bold text-foreground",
					children: "Home Depot"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-[10px] text-muted-foreground",
					children: "$418.92 · uncoded Amex charge"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-cross-charge absolute left-[10%] top-[48%] rounded-xl border border-destructive/60 bg-background/95 px-4 py-3 shadow-elevated",
				style: { animationDelay: "1.35s" },
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-bold text-foreground",
					children: "Auto-pay receipt"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-[10px] text-muted-foreground",
					children: "waiting for GL code"
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "ba-cross-trace absolute left-[14%] top-[40%] h-1 w-[44%] rounded-full bg-gradient-to-r from-destructive/0 via-accent to-accent/0" })
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "pointer-events-none absolute inset-0 z-30 hidden overflow-visible md:block",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "ba-cross-doc absolute left-[9%] top-[23%] rounded-lg border border-destructive/60 bg-background/95 px-3 py-2 shadow-elevated",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-bold text-foreground",
					children: "NA_FINAL_v3.pdf"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-[10px] text-muted-foreground",
					children: "from email thread"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-cross-doc absolute left-[12%] top-[39%] rounded-lg border border-destructive/60 bg-background/95 px-3 py-2 shadow-elevated",
				style: { animationDelay: "0.8s" },
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-bold text-foreground",
					children: "Trial Balance.pdf"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-[10px] text-muted-foreground",
					children: "from shared drive"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-cross-doc absolute left-[7%] top-[55%] rounded-lg border border-destructive/60 bg-background/95 px-3 py-2 shadow-elevated",
				style: { animationDelay: "1.6s" },
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-bold text-foreground",
					children: "Daily Flash.xlsx"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-[10px] text-muted-foreground",
					children: "from GM laptop"
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "ba-cross-trace absolute left-[14%] top-[43%] h-1 w-[45%] rounded-full bg-gradient-to-r from-destructive/0 via-accent to-accent/0" })
		]
	});
}
//#endregion
export { BeforeAfterFlow as t };
