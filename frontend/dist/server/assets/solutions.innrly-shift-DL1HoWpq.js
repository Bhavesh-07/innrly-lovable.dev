import { r as Section } from "./Section-D2XWIGS_.js";
import { t as DeepSolutionLayout } from "./DeepSolutionLayout-BG4AihqU.js";
import { t as BeforeAfterFlow } from "./BeforeAfterFlow-tFWrpBrV.js";
import { t as Route } from "./solutions.innrly-shift-CWrgR7Cb.js";
import { t as ModuleSpotlightCard } from "./ModuleSpotlightCard-CU_Mm10F.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlarmClock, AlertCircle, AlertTriangle, BarChart3, Check, Clock, Fingerprint, Hash, KeySquare, ShieldCheck, Smartphone, StickyNote, Users } from "lucide-react";
//#region src/components/site/InnrlyShiftSnapshot.tsx
/**
* InnrlyShiftSnapshot — stylized in-product artifact for the Innrly Shift page.
* Shows the GM's 5-minute morning labor view: KPI strip + Face-ID punch log +
* housekeeping MPOR matrix + OT guardrail alert.
*/
function InnrlyShiftSnapshot() {
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
							children: "Innrly Shift · GM view · 8:02 AM"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "relative flex h-1.5 w-1.5",
								children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-success" })]
							}), "LIVE"]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-3 p-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border/60 bg-surface/60 p-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 border-b border-border/40 pb-2",
							children: [
								/* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5 text-accent" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
									children: "5-min snapshot · 110 rooms"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "ml-auto text-[9px] text-muted-foreground",
									children: "refreshed 7:58 AM"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-2 grid grid-cols-4 gap-2",
							children: [
								/* @__PURE__ */ jsx(Kpi, {
									label: "Labor %",
									value: "28.4%",
									delta: "-1.6",
									good: true
								}),
								/* @__PURE__ */ jsx(Kpi, {
									label: "MPOR",
									value: "24.2",
									delta: "+0.4",
									good: true
								}),
								/* @__PURE__ */ jsx(Kpi, {
									label: "Hrs vs fcst",
									value: "-3.5",
									delta: "under",
									good: true
								}),
								/* @__PURE__ */ jsx(Kpi, {
									label: "OT risk",
									value: "2",
									delta: "watch",
									warn: true
								})
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-5 gap-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "col-span-2 rounded-xl border border-border/60 bg-surface/60 p-3",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 border-b border-border/40 pb-2",
									children: [/* @__PURE__ */ jsx(Fingerprint, { className: "h-3.5 w-3.5 text-accent" }), /* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
										children: "Face-ID punches"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-2 space-y-1.5",
									children: [
										/* @__PURE__ */ jsx(Punch$1, {
											name: "M. Garcia",
											role: "HK",
											time: "7:02",
											ok: true
										}),
										/* @__PURE__ */ jsx(Punch$1, {
											name: "J. Tran",
											role: "FD",
											time: "7:00",
											ok: true
										}),
										/* @__PURE__ */ jsx(Punch$1, {
											name: "R. Lee",
											role: "HK",
											time: "7:14",
											warn: true
										}),
										/* @__PURE__ */ jsx(Punch$1, {
											name: "A. Singh",
											role: "MX",
											time: "7:06",
											ok: true
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-2 flex items-center justify-between rounded-md bg-chart-4/10 px-2 py-1",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[9px] font-bold uppercase tracking-wider text-chart-4",
										children: "OT flag"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-semibold text-foreground",
										children: "R. Lee · 38.5 / 40"
									})]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "col-span-3 rounded-xl border border-border/60 bg-surface/60 p-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 border-b border-border/40 pb-2",
								children: [
									/* @__PURE__ */ jsx(Users, { className: "h-3.5 w-3.5 text-accent" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
										children: "Housekeeping · rooms / shift"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "ml-auto text-[9px] text-muted-foreground",
										children: "std 16"
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-2 space-y-1.5",
								children: [
									/* @__PURE__ */ jsx(MporRow, {
										name: "M. Garcia",
										rooms: 18,
										pct: 113
									}),
									/* @__PURE__ */ jsx(MporRow, {
										name: "R. Lee",
										rooms: 17,
										pct: 106
									}),
									/* @__PURE__ */ jsx(MporRow, {
										name: "T. Phan",
										rooms: 14,
										pct: 88,
										warn: true
									}),
									/* @__PURE__ */ jsx(MporRow, {
										name: "L. Ortiz",
										rooms: 16,
										pct: 100
									}),
									/* @__PURE__ */ jsx(MporRow, {
										name: "K. Brown",
										rooms: 19,
										pct: 119,
										best: true
									})
								]
							})]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
					children: "Whole hotel labor"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-lg font-bold text-foreground",
					children: "5 minutes flat"
				})]
			})
		]
	});
}
function Kpi({ label, value, delta, good, warn }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-lg border border-border/40 bg-background/40 p-2",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-0.5 flex items-baseline gap-1",
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-base font-bold text-foreground",
				children: value
			}), /* @__PURE__ */ jsx("span", {
				className: `text-[9px] font-semibold ${warn ? "text-chart-4" : good ? "text-success" : "text-muted-foreground"}`,
				children: delta
			})]
		})]
	});
}
function Punch$1({ name, role, time, ok, warn }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1.5",
			children: [
				/* @__PURE__ */ jsx("span", { className: `h-1.5 w-1.5 rounded-full ${warn ? "bg-chart-4" : "bg-success"}` }),
				/* @__PURE__ */ jsx("span", {
					className: "text-[11px] font-semibold text-foreground",
					children: name
				}),
				/* @__PURE__ */ jsx("span", {
					className: "text-[9px] text-muted-foreground",
					children: role
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1",
			children: [warn && /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-chart-4" }), /* @__PURE__ */ jsx("span", {
				className: "text-[10px] font-mono text-foreground",
				children: time
			})]
		})]
	});
}
function MporRow({ name, rooms, pct, warn, best }) {
	const tone = warn ? "bg-chart-4" : best ? "bg-success" : "bg-accent";
	const pctTone = warn ? "text-chart-4" : best ? "text-success" : "text-foreground";
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-2",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "w-16 truncate text-[10px] font-semibold text-foreground",
				children: name
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex-1 h-2 overflow-hidden rounded-full bg-background/60",
				children: /* @__PURE__ */ jsx("div", {
					className: `h-full ${tone}`,
					style: { width: `${Math.min(pct, 130) / 1.3}%` }
				})
			}),
			/* @__PURE__ */ jsx("span", {
				className: "w-8 text-right text-[10px] font-bold text-foreground",
				children: rooms
			}),
			/* @__PURE__ */ jsxs("span", {
				className: `w-10 text-right text-[10px] font-semibold ${pctTone}`,
				children: [pct, "%"]
			})
		]
	});
}
//#endregion
//#region src/components/site/ShiftChaos.tsx
/**
* ShiftChaos — pre-Innrly Shift labor pain. The real Hotel Effectiveness /
* legacy PIN-pad world: shared 4-digit PINs taped to the wall, buddy-punching,
* and a GM hand-tallying OT on Friday morning.
*/
function ShiftChaos() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative space-y-2",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "ba-chaos-in rounded-xl border border-destructive/60 bg-destructive/10 p-3 opacity-0 shadow-elevated",
				style: {
					["--x0"]: "-32px",
					["--y0"]: "14px",
					["--r0"]: "-6deg",
					["--rot"]: "-1.5deg"
				},
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1.5 border-b border-border/40 pb-1.5",
						children: [
							/* @__PURE__ */ jsx(KeySquare, { className: "h-3 w-3 text-chart-4" }),
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] font-semibold text-foreground",
								children: "Lobby PIN pad · shared"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "ml-auto rounded bg-chart-4/20 px-1 text-[8px] font-bold uppercase tracking-wider text-chart-4",
								children: "No biometrics"
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-2 grid grid-cols-3 gap-1",
						children: [
							"1",
							"2",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9",
							"*",
							"0",
							"#"
						].map((k) => /* @__PURE__ */ jsx("div", {
							className: "flex h-5 items-center justify-center rounded-sm border border-border/40 bg-background/60 text-[10px] font-bold text-foreground",
							children: k
						}, k))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-2 flex items-center gap-1 text-[9px] font-semibold text-muted-foreground",
						children: [/* @__PURE__ */ jsx(Hash, { className: "h-2.5 w-2.5" }), /* @__PURE__ */ jsx("span", { children: "\"Maria is sick — Lin, just punch her 4471 today.\"" })]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-chaos-in ml-auto w-44 rotate-2 rounded-md bg-chart-4/90 p-2 text-[10px] font-semibold text-background opacity-0 shadow-elevated",
				style: {
					["--x0"]: "30px",
					["--y0"]: "-12px",
					["--r0"]: "14deg",
					["--rot"]: "3deg",
					["--delay"]: "0.22s"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ jsx(StickyNote, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("span", { children: "Shared PINs" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-1 space-y-0.5 text-[9px] font-mono font-normal leading-tight",
					children: [
						/* @__PURE__ */ jsx("div", { children: "Maria · 4471" }),
						/* @__PURE__ */ jsx("div", { children: "Carlos · 8820" }),
						/* @__PURE__ */ jsx("div", { children: "Lin · 3309" })
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-chaos-in rounded-lg border border-destructive/50 bg-background/60 p-2 opacity-0 shadow-elevated",
				style: {
					["--x0"]: "-20px",
					["--y0"]: "16px",
					["--r0"]: "-5deg",
					["--rot"]: "1.5deg",
					["--delay"]: "0.4s"
				},
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-1 border-b border-border/40 pb-1",
					children: /* @__PURE__ */ jsx("span", {
						className: "truncate text-[9px] font-semibold text-foreground",
						children: "Friday hand-tally · OT scramble"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-1 grid grid-cols-2 gap-0.5 text-[9px]",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: "HK · Maria"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-foreground",
							children: "38.5"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: "FD · Carlos"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "rounded bg-destructive/20 px-1 font-bold text-destructive",
							children: "42.0 OT"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: "HK · Lin"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-foreground",
							children: "36.0"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "ba-slide-in mt-2 flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0",
				style: { animationDelay: "0.86s" },
				children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-3 w-3 shrink-0 text-destructive" }), /* @__PURE__ */ jsx("span", {
					className: "text-[10px] font-semibold text-destructive",
					children: "OT discovered after payroll closes — too late to act"
				})]
			})
		]
	});
}
//#endregion
//#region src/components/site/FaceIDPunch.tsx
/**
* FaceIDPunch — Face-ID TimeClock punch animation.
* A kiosk frame with a camera viewfinder, a face scan, then a
* "Clocked in · 7:02 AM · M. Garcia" confirmation. A live ticker of
* recent punches scrolls below. The whole loop runs in ~6.8s to match
* the other BeforeAfter animation rhythms.
*
* Purpose: visually answer "Face-ID TimeClock vs Hotel Effectiveness" —
* physical, biometric, sub-second. Not another spreadsheet.
*/
function FaceIDPunch({ playKey = 0 }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute -inset-8 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative overflow-hidden rounded-[28px] border-[6px] border-foreground/80 bg-background shadow-elevated",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between bg-surface/80 px-3 py-1.5 text-[9px] font-semibold text-muted-foreground",
							children: [/* @__PURE__ */ jsx("span", { children: "Lobby kiosk · 7:02 AM" }), /* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-1 text-success",
								children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-2.5 w-2.5" }), " Face-ID"]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative flex aspect-[3/4] items-center justify-center bg-gradient-to-b from-surface/60 to-background p-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36",
								children: [
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-2 border-accent/40 ba-pulse-ring" }),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-2 rounded-full border border-accent/30" }),
									/* @__PURE__ */ jsxs("div", {
										className: "relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-accent/30 to-primary/40 sm:h-28 sm:w-28",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-2xl font-bold text-foreground",
											children: "MG"
										}), /* @__PURE__ */ jsx("div", { className: "ba-scan absolute inset-x-0 h-0.5 bg-accent/90 shadow-[0_0_12px_2px_color-mix(in_oklab,var(--accent)_60%,transparent)]" })]
									}),
									/* @__PURE__ */ jsx(Corners, {})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "ba-pop-in absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-xl border border-success/40 bg-success/10 px-3 py-2 text-foreground",
								children: [/* @__PURE__ */ jsx("span", {
									className: "flex h-6 w-6 items-center justify-center rounded-full bg-success text-background",
									children: /* @__PURE__ */ jsx(Check, {
										className: "h-3.5 w-3.5",
										strokeWidth: 3
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("div", {
										className: "truncate text-[11px] font-bold",
										children: "Clocked in · M. Garcia"
									}), /* @__PURE__ */ jsx("div", {
										className: "truncate text-[9px] font-medium text-muted-foreground",
										children: "HK · 7:02 AM · 0.8s"
									})]
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between border-t border-border/40 bg-surface/60 px-3 py-1.5",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-accent",
								children: [/* @__PURE__ */ jsx(Fingerprint, { className: "h-2.5 w-2.5" }), " Avg punch 0.8s"]
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[9px] font-medium text-muted-foreground",
								children: "No PINs to share"
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-border bg-card p-3 shadow-elevated",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between border-b border-border/40 pb-1.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
								children: "Live punches · this morning"
							}), /* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-1 text-[9px] font-semibold text-success",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "relative flex h-1.5 w-1.5",
									children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-success" })]
								}), "LIVE"]
							})]
						}), /* @__PURE__ */ jsxs("ul", {
							className: "mt-2 space-y-1.5",
							children: [
								/* @__PURE__ */ jsx(Punch, {
									name: "M. Garcia",
									role: "HK",
									time: "7:02",
									delay: "0s"
								}),
								/* @__PURE__ */ jsx(Punch, {
									name: "J. Tran",
									role: "FD",
									time: "7:00",
									delay: "1.2s"
								}),
								/* @__PURE__ */ jsx(Punch, {
									name: "A. Singh",
									role: "MX",
									time: "7:06",
									delay: "2.4s"
								}),
								/* @__PURE__ */ jsx(Punch, {
									name: "R. Lee",
									role: "HK",
									time: "7:14",
									delay: "3.6s",
									ot: true
								})
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "ba-slide-in flex items-center gap-2 rounded-xl border border-chart-4/40 bg-chart-4/10 px-3 py-2",
						style: { animationDelay: "4s" },
						children: [/* @__PURE__ */ jsx("span", {
							className: "flex h-6 w-6 items-center justify-center rounded-full bg-chart-4 text-background text-[10px] font-bold",
							children: "!"
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-[11px] font-bold text-foreground",
								children: "OT flagged at punch"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[9px] text-muted-foreground",
								children: "R. Lee · 38.5 / 40 hrs · send home option offered"
							})]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-2.5 shadow-elevated sm:block",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
					children: "Face → Punch → Done"
				}), /* @__PURE__ */ jsx("div", {
					className: "text-base font-bold text-foreground",
					children: "in 0.8 seconds"
				})]
			})
		]
	}, playKey);
}
function Corners() {
	const base = "absolute h-3 w-3 border-accent";
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("span", { className: `${base} -left-1 -top-1 border-l-2 border-t-2` }),
		/* @__PURE__ */ jsx("span", { className: `${base} -right-1 -top-1 border-r-2 border-t-2` }),
		/* @__PURE__ */ jsx("span", { className: `${base} -left-1 -bottom-1 border-b-2 border-l-2` }),
		/* @__PURE__ */ jsx("span", { className: `${base} -right-1 -bottom-1 border-b-2 border-r-2` })
	] });
}
function Punch({ name, role, time, delay, ot }) {
	return /* @__PURE__ */ jsxs("li", {
		className: "ba-slide-from-left flex items-center justify-between rounded-lg border border-border/40 bg-surface/60 px-2 py-1.5 opacity-0",
		style: { animationDelay: delay },
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: `flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-background ${ot ? "bg-chart-4" : "bg-accent"}`,
					children: ot ? "!" : /* @__PURE__ */ jsx(Check, {
						className: "h-3 w-3",
						strokeWidth: 3
					})
				}),
				/* @__PURE__ */ jsx("span", {
					className: "text-[11px] font-semibold text-foreground",
					children: name
				}),
				/* @__PURE__ */ jsx("span", {
					className: "text-[9px] font-medium text-muted-foreground",
					children: role
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2",
			children: [ot && /* @__PURE__ */ jsx("span", {
				className: "rounded-sm bg-chart-4/20 px-1 text-[8px] font-bold uppercase tracking-wider text-chart-4",
				children: "OT risk"
			}), /* @__PURE__ */ jsx("span", {
				className: "font-mono text-[10px] text-foreground",
				children: time
			})]
		})]
	});
}
//#endregion
//#region src/routes/solutions.innrly-shift.tsx?tsr-split=component
function Page() {
	const { testimonials: allTestimonials } = Route.useLoaderData();
	const t = allTestimonials.find((t) => t.page === "innrly-shift");
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ jsx(ModuleSpotlightCard, {
				moduleKey: "shift",
				moduleName: "Innrly Shift",
				pricing: "included",
				blurb: "Scheduling, Face-ID TimeClock, and labor analytics ship free with every 90-day trial."
			}),
			/* @__PURE__ */ jsxs(Section, {
				tone: "surface",
				className: "py-5 sm:py-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-6 text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-accent",
						children: "Face → Punch → Done · in 0.8 seconds"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-2 text-2xl font-bold text-foreground sm:text-3xl",
						children: "Retire the shared PIN pad. Every punch is the person."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-6xl",
					children: /* @__PURE__ */ jsx(BeforeAfterFlow, {
						chaos: /* @__PURE__ */ jsx(ShiftChaos, {}),
						after: (playKey) => /* @__PURE__ */ jsx(FaceIDPunch, { playKey }),
						chaosLabel: "Shared PIN · buddy-punching",
						afterLabel: "Innrly Face-ID TimeClock",
						motion: "pulse"
					})
				})]
			}),
			/* @__PURE__ */ jsx(Section, {
				className: "py-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-5xl rounded-2xl border border-border/60 bg-card/40 p-6 text-center sm:p-8",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-accent",
							children: "Works with what you already have"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-2 text-xl font-bold text-foreground sm:text-2xl",
							children: "Keep your TimeClock. Keep your PMS. Keep your payroll provider."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: "Innrly Shift runs on your existing time-and-attendance hardware — PIN pads, badge readers, tablet kiosks — and connects to 50+ hotel systems including Opera, OnQ, FOSSE, Cloudbeds, Mews, M3, QuickBooks, Sage Intacct, ADP, and Paychex. Face-ID TimeClock is the upgrade path, not the price of entry."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("span", { children: "Opera" }),
								/* @__PURE__ */ jsx("span", { children: "·" }),
								/* @__PURE__ */ jsx("span", { children: "OnQ" }),
								/* @__PURE__ */ jsx("span", { children: "·" }),
								/* @__PURE__ */ jsx("span", { children: "FOSSE" }),
								/* @__PURE__ */ jsx("span", { children: "·" }),
								/* @__PURE__ */ jsx("span", { children: "Cloudbeds" }),
								/* @__PURE__ */ jsx("span", { children: "·" }),
								/* @__PURE__ */ jsx("span", { children: "Mews" }),
								/* @__PURE__ */ jsx("span", { children: "·" }),
								/* @__PURE__ */ jsx("span", { children: "M3" }),
								/* @__PURE__ */ jsx("span", { children: "·" }),
								/* @__PURE__ */ jsx("span", { children: "QuickBooks" }),
								/* @__PURE__ */ jsx("span", { children: "·" }),
								/* @__PURE__ */ jsx("span", { children: "Sage Intacct" }),
								/* @__PURE__ */ jsx("span", { children: "·" }),
								/* @__PURE__ */ jsx("span", { children: "ADP" }),
								/* @__PURE__ */ jsx("span", { children: "·" }),
								/* @__PURE__ */ jsx("span", { children: "Paychex" })
							]
						}),
						/* @__PURE__ */ jsx("a", {
							href: "/integrations",
							className: "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline",
							children: "See all 50+ integrations →"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(DeepSolutionLayout, {
				icon: Clock,
				orbVariant: "shift",
				persona: "For Hotel General Managers",
				eyebrow: "Innrly Shift · Scheduling, TimeClock, Payroll",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["The whole hotel's labor, ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "in five minutes."
				})] }),
				description: /* @__PURE__ */ jsxs(Fragment, { children: [
					"A GM shouldn't need three tabs and a phone call to know how labor is trending. Innrly Shift bundles scheduling, housekeeping productivity, OT guardrails, and payroll execution into one mobile-first product — and it works with the TimeClock hardware you already own. Learn how this fits into",
					" ",
					/* @__PURE__ */ jsx(Link, {
						to: "/hotel-back-office-automation",
						className: "text-accent underline font-semibold",
						children: "hotel back-office automation"
					}),
					"."
				] }),
				bullets: [
					"Keep your current TimeClock — PIN pad, badge reader, anything — and still get scheduling, MPOR, OT guardrails, and payroll export",
					"One 5-minute daily snapshot, same format every morning",
					"Housekeeping standards auto-adjust to today's occupancy",
					"Face-ID clock-in is the upgrade path — biometric punch when you want it, not when a vendor forces it",
					"$149/mo per property — Shift add-on price, all-in: scheduling, TimeClock, MPOR, payroll export"
				],
				metrics: [
					{
						stat: "$149",
						label: "/mo per property — Shift add-on"
					},
					{
						stat: "Any",
						label: "TimeClock works — Face-ID optional"
					},
					{
						stat: "5min",
						label: "Daily snapshot"
					},
					{
						stat: "MPOR",
						label: "Auto-adjusts to occupancy"
					}
				],
				beforeAfter: {
					title: /* @__PURE__ */ jsxs(Fragment, { children: [
						"From ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gradient",
							children: "four vendors"
						}),
						" to one product."
					] }),
					description: "Most hotel GMs stitch together a scheduler, a TimeClock, a payroll tool, and a spreadsheet. Innrly Shift is one screen instead.",
					withoutTitle: "The Frankenstack",
					without: [
						"Schedule in one tool, clock in another, payroll in a third",
						"Reconcile hours between them by hand every Friday",
						"Discover OT after payroll closes — too late to act",
						"Flat MPOR standards that are wrong half the year"
					],
					withTitle: "One mobile-first product",
					withItems: [
						"Schedule, clock, productivity, and payroll all in one product",
						"Standards auto-adjust to the day's actual occupancy from PMS",
						"OT guardrails flag the employee at clock-in, not after",
						"Approvals from your phone — Sunday at 8 PM if you want"
					]
				},
				workflow: {
					title: /* @__PURE__ */ jsxs(Fragment, { children: ["How GMs ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "actually use it."
					})] }),
					description: "The 5-minute daily labor habit.",
					steps: [
						{
							icon: AlarmClock,
							title: "Morning — open the snapshot",
							body: "Labor %, MPOR, hours vs forecast, OT risk count. The whole hotel's labor on one phone screen, every morning, same format."
						},
						{
							icon: Fingerprint,
							title: "Clock-ins start — Face-ID verifies",
							body: "Each punch is the person. OT-risk staff get flagged the moment they swipe — you can send them home before the hours land."
						},
						{
							icon: BarChart3,
							title: "Mid-day — housekeeping matrix",
							body: "Rooms cleaned per shift, MPOR by attendant, variance vs standard. Coach the outlier today, not at week's end."
						},
						{
							icon: Smartphone,
							title: "Friday — approve from phone",
							body: "Variance cards, not timesheets. Approve, push to payroll, done. Total time: minutes."
						}
					],
					artifact: /* @__PURE__ */ jsx(InnrlyShiftSnapshot, {})
				},
				replaces: {
					title: /* @__PURE__ */ jsxs(Fragment, { children: ["What Innrly Shift ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "replaces."
					})] }),
					description: "These things go away.",
					items: [
						"Standalone scheduling tools",
						"PIN-pad TimeClocks",
						"Separate payroll prep spreadsheets",
						"Weekly OT firefights",
						"Manual hours-vs-forecast tallies",
						"Paper timecards",
						"Flat MPOR standards"
					]
				},
				quote: {
					text: t?.quote || "I used to spend Sunday night on next week's schedule and Friday afternoon fixing payroll. Innrly Shift gave me both nights back. The snapshot is the only labor screen I open all day.",
					author: t ? [
						t.name,
						t.title,
						t.company
					].filter(Boolean).join(" · ") : "GM · 110-room Holiday Inn Express"
				},
				modules: {
					title: /* @__PURE__ */ jsxs(Fragment, { children: ["The modules behind ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "Innrly Shift."
					})] }),
					description: "Each module deep-links into the Features page.",
					items: [
						{
							name: "5-Min Labor Snapshot",
							body: "Same numbers, same format, every day."
						},
						{
							name: "Smart Scheduling",
							body: "Build from PMS forecast in one click."
						},
						{
							name: "Works With Your TimeClock",
							body: "PIN, badge, or kiosk you already own — fully supported."
						},
						{
							name: "Face-ID TimeClock (optional)",
							body: "Biometric punch-in when you want to retire shared PINs."
						},
						{
							name: "Housekeeping Matrix",
							body: "MPOR, rooms-per-shift, variance vs standard."
						},
						{
							name: "OT Guardrails",
							body: "Flag at clock-in, not after the run."
						},
						{
							name: "Staff Mobile App",
							body: "Schedules, shift swap requests, broadcasts, time-off — in the staff's pocket."
						},
						{
							name: "Mobile Approvals",
							body: "Variance cards on your phone."
						}
					]
				},
				faq: {
					title: /* @__PURE__ */ jsxs(Fragment, { children: ["What GMs ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "actually ask us."
					})] }),
					items: [
						{
							q: "Do we have to replace our current TimeClock?",
							a: "No. Innrly Shift works with the time-and-attendance hardware you already own — PIN pads, badge readers, tablet kiosks. You get scheduling, MPOR, OT guardrails, and payroll export regardless. Face-ID is the upgrade path when you're ready to retire shared PINs."
						},
						{
							q: "How does Innrly Shift price against Actabl / Hotel Effectiveness?",
							a: "Innrly Shift is published at $149 per property per month — all-in for scheduling, TimeClock (works with your existing clock or Innrly's Face-ID), housekeeping productivity, OT guardrails, and payroll export. Actabl's labor suite (PerfectLabor, PerfectTime, CoverageFinder, PerfectEngage, PerfectWage) is quote-based and priced per module per property, so a comparable multi-module labor setup typically costs more than a single all-in add-on. Full breakdown on the Innrly: alternative to Actabl page."
						},
						{
							q: "How is Shift different from a standalone scheduler?",
							a: "A standalone scheduler doesn't know your occupancy, doesn't know who clocked in, and doesn't talk to payroll. Shift does all three because it lives inside the same product as your PMS feed."
						},
						{
							q: "Do we have to switch payroll providers?",
							a: "No. Shift exports approved hours to ADP, Paychex, and most payroll providers. Keep your provider — just stop the Friday reconciliation."
						},
						{
							q: "Can a multi-property owner see all GMs at once?",
							a: "Yes. Each GM owns their 5-minute snapshot; the owner gets a roll-up that pairs with Innrly Business Intelligence."
						},
						{
							q: "What's it like for housekeeping staff?",
							a: "They get a mobile app for their schedule, shift swaps, broadcasts, and time-off requests. No badges, no PINs to share. Face-ID at the kiosk is optional."
						}
					]
				},
				cta: {
					title: "See the 5-minute snapshot",
					subtitle: "A 20-minute demo using one of your properties. You'll see Tuesday's OT risk before Friday's payroll."
				}
			})
		]
	});
}
//#endregion
export { Page as component };
