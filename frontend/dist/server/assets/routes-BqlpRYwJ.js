import { t as cn } from "./utils-C_uf36nf.js";
import { t as Button } from "./button-Dkpg6g2Z.js";
import { t as Route } from "./routes-CMRAdxGK.js";
import { i as SectionHeading, n as Eyebrow, r as Section, t as CtaBand } from "./Section-D2XWIGS_.js";
import { t as ProductOrb } from "./ProductOrb-COgVO5P5.js";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-uwqhymWC.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, ArrowRight, Building2, Check, CheckCircle2, ClipboardCheck, Coffee, CreditCard, FileText, FolderArchive, Moon, Receipt, Smile, Sun } from "lucide-react";
//#region src/components/site/Wordmark.tsx
/**
* Innrly wordmark — inlined SVG so the "innrly" letterforms inherit
* currentColor (dark on light bg, light on dark bg) while the "i" mark
* keeps its blue→cyan brand gradient.
*/
function Wordmark({ className, size = "md" }) {
	const width = size === "sm" ? 92 : size === "lg" ? 150 : 118;
	return /* @__PURE__ */ jsxs("svg", {
		role: "img",
		"aria-label": "Innrly",
		viewBox: "430 355 600 320",
		width,
		height: Math.round(width * .533),
		className: cn("block h-auto max-w-full", className),
		style: { width: `${width}px` },
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: [
			/* @__PURE__ */ jsx("title", { children: "Innrly" }),
			/* @__PURE__ */ jsx("path", {
				d: "M992.597 500H1024.39L955.387 615.5H925.387L946.887 579L921.387 500H951.469L965.887 552L992.597 500Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M901.887 583H874.387L892.387 468H919.887L901.887 583Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M812.387 499.301L839.134 499.301L837.721 523.424L828.387 583L800.387 583L812.387 499.301ZM874.012 524.972C872.123 524.354 870.039 523.934 867.76 523.71C861.777 523.121 856.421 524.131 851.693 526.739C847.021 529.352 843.173 533.098 840.148 537.977C837.186 542.807 833.361 549.743 832.387 555.847L827.524 552.666C828.488 546.13 829.988 539.7 832.023 533.376C834.064 527 836.809 521.285 840.257 516.233C843.761 511.186 848.115 507.301 853.317 504.578C858.577 501.861 864.881 500.863 872.232 501.586C873.029 501.665 873.821 501.797 874.607 501.982C875.398 502.114 876.159 502.269 876.887 502.449L874.012 524.972Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M608.886 583L580.386 583L594.387 500L624.61 500L622.267 517.415L608.886 583ZM683.658 537.422L674.386 583L646.386 583L654.302 538.2C654.969 533.989 654.257 530.67 652.165 528.244C650.083 525.756 646.844 524.164 642.447 523.468C636.998 522.605 632.232 523.437 628.15 525.964C624.129 528.501 620.027 533.252 617.827 539.124L616.527 526.599C618.037 519.474 620.664 513.511 624.408 508.708C628.162 503.843 632.685 500.338 637.976 498.192C643.329 496.057 649.102 495.479 655.295 496.46C661.797 497.49 667.342 499.955 671.93 503.856C676.589 507.704 679.983 512.527 682.112 518.323C684.241 524.12 684.757 530.486 683.658 537.422Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M717.886 583L689.386 583L703.555 499.994L733.386 500L731.267 517.142L717.886 583ZM792.658 537.149L783.386 583L755.386 583L763.302 537.927C763.969 533.716 763.257 530.398 761.165 527.972C759.083 525.483 755.844 523.891 751.447 523.195C745.998 522.332 741.232 523.164 737.15 525.691C733.129 528.229 729.027 532.979 726.827 538.852L725.527 526.326C727.037 519.202 729.663 513.238 733.408 508.435C737.162 503.57 741.684 500.065 746.976 497.92C752.329 495.784 758.102 495.206 764.295 496.187C770.797 497.217 776.342 499.682 780.93 503.583C785.589 507.432 788.983 512.254 791.112 518.051C793.241 523.847 793.756 530.213 792.658 537.149Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ jsx("ellipse", {
				cx: "528.282",
				cy: "409.255",
				rx: "54.08",
				ry: "42.27",
				transform: "rotate(-14 528.282 409.255)",
				fill: "url(#wm_g0)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M467.02 436.397C467.826 442.328 486.752 462.558 501.104 465.429C526.104 470.429 561.233 475.429 557.353 497.44C554.407 514.146 540.533 606.879 532.852 650.44C531.387 661.553 521.913 669.859 510.704 669.859L460.077 669.859C443.356 669.859 430.594 655.121 432.763 638.727L432.733 638.724L467.02 436.397Z",
				fill: "url(#wm_g1)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M467.02 436.397C467.826 442.328 486.752 462.558 501.104 465.429C526.104 470.429 561.233 475.429 557.353 497.44C554.407 514.146 540.533 606.879 532.852 650.44C531.387 661.553 521.913 669.859 510.704 669.859L460.077 669.859C443.356 669.859 430.594 655.121 432.763 638.727L432.733 638.724L467.02 436.397Z",
				fill: "url(#wm_g2)",
				fillOpacity: "0.9"
			}),
			/* @__PURE__ */ jsxs("defs", { children: [
				/* @__PURE__ */ jsxs("linearGradient", {
					id: "wm_g0",
					x1: "514.845",
					y1: "397.912",
					x2: "538.371",
					y2: "460.74",
					gradientUnits: "userSpaceOnUse",
					children: [
						/* @__PURE__ */ jsx("stop", { stopColor: "#2742DB" }),
						/* @__PURE__ */ jsx("stop", {
							offset: "0.575",
							stopColor: "#1481D9"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "1",
							stopColor: "#00C4D6"
						})
					]
				}),
				/* @__PURE__ */ jsxs("linearGradient", {
					id: "wm_g1",
					x1: "480",
					y1: "538",
					x2: "545.064",
					y2: "485.458",
					gradientUnits: "userSpaceOnUse",
					children: [
						/* @__PURE__ */ jsx("stop", { stopColor: "#2742DB" }),
						/* @__PURE__ */ jsx("stop", {
							offset: "0.617",
							stopColor: "#1385D8"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "1",
							stopColor: "#00C4D6"
						})
					]
				}),
				/* @__PURE__ */ jsxs("linearGradient", {
					id: "wm_g2",
					x1: "477",
					y1: "581.5",
					x2: "504.201",
					y2: "665.762",
					gradientUnits: "userSpaceOnUse",
					children: [
						/* @__PURE__ */ jsx("stop", {
							stopColor: "#2742DB",
							stopOpacity: "0.32"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "0.5",
							stopColor: "#1383D8",
							stopOpacity: "0.66"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "1",
							stopColor: "#00C4D6"
						})
					]
				})
			] })
		]
	});
}
//#endregion
//#region src/components/site/HeroNightAudit.tsx
/**
* Hero scene: "Live Night Audit"
* Rows fly in from the left → pulled into a glowing central orb →
* split into two output lanes (✅ Auto-cleared / ⚠️ Flagged for human).
* A live counter at the bottom climbs $0 → $412 and 0 → 11 hrs.
* Pure SVG + CSS animations. No deps.
*/
function HeroNightAudit() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative mx-auto h-full w-full",
		children: [
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes na-fly-in {
          0% { transform: translateX(-35%); opacity: 0; }
          15% { transform: translateX(0); opacity: 1; }
          55% { transform: translateX(0); opacity: 1; }
          70% { transform: translateX(40%) scale(0.6); opacity: 0; }
          100% { transform: translateX(40%) scale(0.6); opacity: 0; }
        }
        @keyframes na-fly-out-ok {
          0%, 55% { transform: translateX(-40%) scale(0.4); opacity: 0; }
          70% { transform: translateX(0) scale(1); opacity: 1; }
          95% { transform: translateX(0) scale(1); opacity: 1; }
          100% { transform: translateX(20%); opacity: 0; }
        }
        @keyframes na-fly-out-flag {
          0%, 60% { transform: translateX(-40%) scale(0.4); opacity: 0; }
          75% { transform: translateX(0) scale(1); opacity: 1; }
          100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes na-orb-pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.06); filter: brightness(1.3); }
        }
        @keyframes na-ring-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes na-aurora-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes na-bloom-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.55; }
          50% { transform: translate(-50%, -50%) scale(1.18); opacity: 0.85; }
        }
        @keyframes na-count-money {
          0% { content: "$0"; }
          25% { content: "$118"; }
          50% { content: "$246"; }
          75% { content: "$340"; }
          100% { content: "$412"; }
        }
        @keyframes na-pulse-ring {
          0% { transform: scale(0.3); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes na-scan {
          0% { transform: translateY(-20px); opacity: 0; }
          10%, 90% { opacity: 0.5; }
          100% { transform: translateY(440px); opacity: 0; }
        }
        @keyframes na-chip-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .na-orb-wrap:hover .na-aurora { animation-duration: 4s !important; }
        .na-orb-wrap:hover .na-bloom { animation-duration: 1.8s !important; }
      ` }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute -inset-10 -z-10 bg-cta opacity-20 blur-3xl lg:-inset-16",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative h-full overflow-hidden bg-transparent",
				children: /* @__PURE__ */ jsxs("div", {
					className: "na-orb-wrap group relative h-full min-h-[640px] lg:min-h-[760px]",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "na-bloom pointer-events-none absolute left-[48%] top-1/2",
							style: {
								width: "clamp(200px, 18vw, 320px)",
								height: "clamp(200px, 18vw, 320px)",
								transform: "translate(-50%, -50%)",
								background: "radial-gradient(circle, oklch(0.78 0.14 195 / 0.55) 0%, oklch(0.62 0.22 260 / 0.35) 30%, oklch(0.55 0.20 300 / 0.18) 55%, transparent 75%)",
								filter: "blur(30px)",
								animation: "na-bloom-pulse 4s ease-in-out infinite",
								transition: "filter 0.6s ease"
							},
							"aria-hidden": true
						}),
						/* @__PURE__ */ jsx("div", {
							className: "na-aurora pointer-events-none absolute left-[48%] top-1/2",
							style: {
								width: "clamp(150px, 13vw, 220px)",
								height: "clamp(150px, 13vw, 220px)",
								transform: "translate(-50%, -50%)",
								borderRadius: "9999px",
								background: "conic-gradient(from 0deg, oklch(0.82 0.16 195), oklch(0.62 0.22 260), oklch(0.65 0.22 310), oklch(0.85 0.16 85), oklch(0.74 0.17 155), oklch(0.82 0.16 195))",
								WebkitMaskImage: "radial-gradient(circle, transparent 56%, black 60%, black 78%, transparent 84%)",
								maskImage: "radial-gradient(circle, transparent 56%, black 60%, black 78%, transparent 84%)",
								animation: "na-aurora-spin 14s linear infinite",
								filter: "blur(2px) saturate(1.1)",
								opacity: .9,
								transition: "filter 0.6s ease"
							},
							"aria-hidden": true
						}),
						/* @__PURE__ */ jsxs("svg", {
							className: "absolute inset-0 h-full w-full opacity-[0.08]",
							"aria-hidden": true,
							children: [/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", {
								id: "na-grid",
								width: "28",
								height: "28",
								patternUnits: "userSpaceOnUse",
								children: /* @__PURE__ */ jsx("path", {
									d: "M 28 0 L 0 0 0 28",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "0.5"
								})
							}) }), /* @__PURE__ */ jsx("rect", {
								width: "100%",
								height: "100%",
								fill: "url(#na-grid)"
							})]
						}),
						/* @__PURE__ */ jsxs("svg", {
							className: "absolute inset-0 h-full w-full",
							viewBox: "0 0 100 100",
							preserveAspectRatio: "none",
							"aria-hidden": true,
							children: [
								/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
									id: "na-beam",
									x1: "0",
									x2: "1",
									children: [
										/* @__PURE__ */ jsx("stop", {
											offset: "0%",
											stopColor: "oklch(0.78 0.14 195)",
											stopOpacity: "0"
										}),
										/* @__PURE__ */ jsx("stop", {
											offset: "50%",
											stopColor: "oklch(0.78 0.14 195)",
											stopOpacity: "0.7"
										}),
										/* @__PURE__ */ jsx("stop", {
											offset: "100%",
											stopColor: "oklch(0.78 0.14 195)",
											stopOpacity: "0"
										})
									]
								}) }),
								[
									11,
									22,
									33,
									44,
									55,
									66,
									77
								].map((y, i) => /* @__PURE__ */ jsx("line", {
									x1: "20",
									y1: y,
									x2: "48",
									y2: "50",
									stroke: "url(#na-beam)",
									strokeWidth: "1.5",
									vectorEffect: "non-scaling-stroke"
								}, `in-${i}`)),
								[
									19,
									30,
									70,
									78
								].map((y, i) => /* @__PURE__ */ jsx("line", {
									x1: "48",
									y1: "50",
									x2: "80",
									y2: y,
									stroke: "url(#na-beam)",
									strokeWidth: "1.5",
									vectorEffect: "non-scaling-stroke"
								}, `out-${i}`))
							]
						}),
						/* @__PURE__ */ jsx(BeamParticles, {}),
						[
							0,
							1.2,
							2.4
						].map((d, i) => /* @__PURE__ */ jsx("div", {
							className: "pointer-events-none absolute left-[48%] top-1/2 rounded-full border",
							style: {
								width: "clamp(120px, 11vw, 180px)",
								height: "clamp(120px, 11vw, 180px)",
								marginLeft: "calc(-1 * clamp(120px, 11vw, 180px) / 2)",
								marginTop: "calc(-1 * clamp(120px, 11vw, 180px) / 2)",
								borderColor: "oklch(0.78 0.14 195 / 0.6)",
								animation: `na-pulse-ring 3.6s ease-out ${d}s infinite`
							},
							"aria-hidden": true
						}, `pulse-${i}`)),
						/* @__PURE__ */ jsx("div", {
							className: "pointer-events-none absolute left-[48%] top-1/2 rounded-full",
							style: {
								width: "clamp(130px, 11.5vw, 190px)",
								height: "clamp(130px, 11.5vw, 190px)",
								transform: "translate(-50%, -50%)",
								background: "oklch(0.16 0.04 250)",
								boxShadow: "0 0 0 1px oklch(0.82 0.16 195 / 0.5), inset 0 0 0 6px oklch(0.18 0.04 250), inset 0 0 0 7px oklch(0.62 0.22 260 / 0.35)"
							},
							"aria-hidden": true
						}),
						/* @__PURE__ */ jsx("div", {
							className: "pointer-events-none absolute inset-x-0 top-0 h-12",
							style: {
								background: "linear-gradient(180deg, transparent 0%, oklch(0.78 0.14 195 / 0.18) 50%, transparent 100%)",
								animation: "na-scan 5s linear infinite"
							}
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "pointer-events-none absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-foreground",
							children: [/* @__PURE__ */ jsx(Wordmark, {
								size: "sm",
								className: "mx-auto"
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-1 text-[10px] text-muted-foreground lg:text-sm",
								children: "Automating"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "absolute bottom-[22%] left-4 top-[8%] flex w-[clamp(11rem,18vw,18rem)] flex-col justify-between lg:left-8",
							children: inputs.map((r, i) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 rounded-lg border border-border/60 bg-surface/90 px-2.5 py-1.5 backdrop-blur lg:gap-3 lg:rounded-xl lg:px-4 lg:py-3",
								style: { animation: `na-fly-in 6s ${i * .85}s ease-out infinite both` },
								children: [
									/* @__PURE__ */ jsx(r.icon, { className: "h-3.5 w-3.5 shrink-0 text-accent lg:h-5 lg:w-5" }),
									/* @__PURE__ */ jsxs("div", {
										className: "min-w-0 leading-tight",
										children: [/* @__PURE__ */ jsx("div", {
											className: "truncate text-[10px] font-semibold text-foreground lg:text-base",
											children: r.label
										}), /* @__PURE__ */ jsx("div", {
											className: "truncate text-[9px] text-muted-foreground lg:text-sm",
											children: r.sub
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "ml-auto text-[10px] font-bold text-foreground lg:text-base",
										children: r.amt
									})
								]
							}, i))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute right-4 top-[14%] w-[clamp(11rem,18vw,18rem)] lg:right-8",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-success lg:mb-4 lg:text-base",
								children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 lg:h-5 lg:w-5" }), " Auto-cleared"]
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-2 lg:space-y-4",
								children: cleared.map((r, i) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 rounded-lg border border-success/30 bg-success/5 px-2.5 py-2 lg:gap-3 lg:rounded-xl lg:px-4 lg:py-4",
									style: { animation: `na-fly-out-ok 6s ${i * 1.5 + .4}s ease-out infinite both` },
									children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 shrink-0 text-success lg:h-5 lg:w-5" }), /* @__PURE__ */ jsxs("div", {
										className: "min-w-0 leading-tight",
										children: [/* @__PURE__ */ jsx("div", {
											className: "truncate text-[10px] font-semibold text-foreground lg:text-base",
											children: r.label
										}), /* @__PURE__ */ jsx("div", {
											className: "truncate text-[9px] text-success lg:text-sm",
											children: "Cleared"
										})]
									})]
								}, i))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute bottom-[17%] right-4 w-[clamp(11rem,18vw,18rem)] lg:right-8",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-destructive lg:mb-4 lg:text-base",
								children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 lg:h-5 lg:w-5" }), " Flagged for human"]
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-2 lg:space-y-4",
								children: flagged.map((r, i) => /* @__PURE__ */ jsx("div", {
									className: "rounded-lg border border-destructive/40 bg-destructive/10 px-2.5 py-2 lg:rounded-xl lg:px-4 lg:py-4",
									style: { animation: `na-fly-out-flag 6s ${i * 1.5 + .8}s ease-out infinite both` },
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 lg:gap-3",
										children: [
											/* @__PURE__ */ jsx(AlertTriangle, { className: "h-3.5 w-3.5 shrink-0 text-destructive lg:h-5 lg:w-5" }),
											/* @__PURE__ */ jsxs("div", {
												className: "min-w-0 leading-tight",
												children: [/* @__PURE__ */ jsx("div", {
													className: "truncate text-[10px] font-semibold text-foreground lg:text-base",
													children: r.label
												}), /* @__PURE__ */ jsx("div", {
													className: "truncate text-[9px] text-muted-foreground lg:text-sm",
													children: r.sub
												})]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "ml-auto text-[10px] font-bold text-accent lg:text-base",
												children: r.amt
											})
										]
									})
								}, i))
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-accent/30 bg-surface/95 px-4 py-2 shadow-lg backdrop-blur lg:bottom-10 lg:px-8 lg:py-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4 text-[11px] font-medium lg:gap-8 lg:text-xl",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground",
											children: "Loss prevented"
										}), /* @__PURE__ */ jsx(CountUp, {
											end: 412,
											prefix: "$"
										})]
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-border",
										children: "|"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground",
											children: "Hours saved"
										}), /* @__PURE__ */ jsx(CountUp, {
											end: 11,
											suffix: " hrs"
										})]
									})
								]
							})
						})
					]
				})
			})
		]
	});
}
var inputs = [
	{
		icon: Building2,
		label: "Opera PMS feed",
		sub: "Folio sync",
		amt: "148"
	},
	{
		icon: Receipt,
		label: "OTA commission",
		sub: "Booking.com",
		amt: "74"
	},
	{
		icon: CreditCard,
		label: "Vendor invoice",
		sub: "Sysco #1284",
		amt: "1,284"
	},
	{
		icon: FileText,
		label: "Folio #4421",
		sub: "Tax variance",
		amt: "92"
	},
	{
		icon: Building2,
		label: "Marriott PMS",
		sub: "Night close",
		amt: "326"
	},
	{
		icon: Receipt,
		label: "Expedia recon",
		sub: "Comm sweep",
		amt: "212"
	},
	{
		icon: CreditCard,
		label: "Amex feed",
		sub: "Card recon",
		amt: "894"
	}
];
var cleared = [{ label: "PMS → GL posted" }, { label: "Vendor inv. matched" }];
var flagged = [{
	label: "Tax mismatch · #4421",
	sub: "Folio variance",
	amt: "$92"
}, {
	label: "Duplicate OTA fee",
	sub: "Booking.com",
	amt: "$74"
}];
function CountUp({ end, prefix = "", suffix = "" }) {
	const steps = 5;
	const id = `cu-${prefix}${end}${suffix}`.replace(/\W/g, "");
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("style", { children: `
        @keyframes ${id} {
          ${Array.from({ length: 6 }, (_, i) => Math.round(end * i / steps)).map((v, i) => `${(i / steps * 100).toFixed(2)}% { content: "${prefix}${v.toLocaleString()}${suffix}"; }`).join("\n")}
        }
        .${id}::after {
          content: "${prefix}0${suffix}";
          animation: ${id} 6s steps(1) infinite;
        }
      ` }), /* @__PURE__ */ jsx("span", { className: `${id} font-bold text-accent` })] });
}
function BeamParticles() {
	const inputs = [
		11,
		22,
		33,
		44,
		55,
		66,
		77
	];
	const outputs = [
		19,
		30,
		70,
		78
	];
	const beams = [...inputs.map((y, i) => ({
		key: `i${i}`,
		x1: 20,
		y1: y,
		x2: 48,
		y2: 50,
		delay: i * .75,
		color: "oklch(0.82 0.16 195)"
	})), ...outputs.map((y, i) => ({
		key: `o${i}`,
		x1: 48,
		y1: 50,
		x2: 80,
		y2: y,
		delay: i * 1 + .5,
		color: i < 2 ? "oklch(0.78 0.18 150)" : "oklch(0.72 0.20 30)"
	}))];
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("style", { children: beams.map((b) => `
        @keyframes na-particle-${b.key} {
          0% { left: ${b.x1}%; top: ${b.y1}%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { left: ${b.x2}%; top: ${b.y2}%; opacity: 0; }
        }
      `).join("\n") }), beams.map((b) => /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute rounded-full",
		style: {
			width: 8,
			height: 8,
			marginLeft: -4,
			marginTop: -4,
			background: b.color,
			boxShadow: `0 0 12px ${b.color}, 0 0 4px ${b.color}`,
			animation: `na-particle-${b.key} 4s ${b.delay}s ease-in-out infinite`
		},
		"aria-hidden": true
	}, b.key))] });
}
//#endregion
//#region src/components/site/NightToMorningScene.tsx
/**
* Hero scene: "Night → Morning"
* Split panel that animates from a dark, busy night-audit scene (left)
* to a bright morning briefing (right) — sky gradient, stars fade, sun rises,
* exceptions resolve into a clean inbox. The "wipe" cycles every 8s.
*/
function NightToMorningScene() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes ntm-wipe {
          0%, 15% { clip-path: inset(0 100% 0 0); }
          45%, 70% { clip-path: inset(0 0 0 0); }
          95%, 100% { clip-path: inset(0 100% 0 0); }
        }
        @keyframes ntm-sun-rise {
          0%, 20% { transform: translateY(80px); opacity: 0; }
          50%, 75% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(80px); opacity: 0; }
        }
        @keyframes ntm-star-twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes ntm-row-resolve {
          0%, 20% { transform: translateX(0); opacity: 1; background-color: oklch(0.65 0.22 25 / 0.1); border-color: oklch(0.65 0.22 25 / 0.4); }
          45% { background-color: oklch(0.74 0.17 155 / 0.1); border-color: oklch(0.74 0.17 155 / 0.4); }
          75% { transform: translateX(0); opacity: 1; }
          90%, 100% { transform: translateX(8px); opacity: 0.7; }
        }
        @keyframes ntm-tick-pop {
          0%, 35% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); opacity: 1; }
          60%, 100% { transform: scale(1); opacity: 1; }
        }
        @keyframes ntm-coffee-steam {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-12px) scale(1.4); opacity: 0; }
        }
        @keyframes ntm-clock-tick {
          0% { content: "02:41 AM"; }
          25% { content: "04:12 AM"; }
          50% { content: "06:30 AM"; }
          75% { content: "07:15 AM"; }
          100% { content: "07:45 AM"; }
        }
        @keyframes ntm-cloud-drift {
          0% { transform: translateX(-40px); }
          100% { transform: translateX(560px); }
        }
        @keyframes ntm-bird-fly {
          0% { transform: translate(-30px, 10px) scale(0.8); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate(560px, -30px) scale(0.6); opacity: 0; }
        }
        @keyframes ntm-sun-rays {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.4; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 0.7; }
        }
        @keyframes ntm-sparkle {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1) rotate(180deg); opacity: 1; }
        }
        @keyframes ntm-moon-glow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.55; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.85; }
        }
        @keyframes ntm-sun-bloom {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.18); opacity: 1; }
        }
        .ntm-wrap:hover .ntm-wipe-layer { animation-duration: 6s !important; }
        .ntm-wrap:hover .ntm-moon-aura { animation-duration: 1.6s !important; }
        .ntm-wrap:hover .ntm-sun-aura { animation-duration: 1.6s !important; }
      ` }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute -inset-8 -z-10 rounded-3xl bg-cta opacity-25 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex gap-1.5",
						children: [
							/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
							/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-chart-4/70" }),
							/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-success/70" })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "ml-3 text-xs font-medium text-muted-foreground",
						children: [
							"Innrly · One overnight cycle ·",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "ntm-clock font-mono text-accent",
								style: {}
							}),
							/* @__PURE__ */ jsx("style", { children: `
              .ntm-clock::after {
                content: "02:41 AM";
                animation: ntm-clock-tick 8s steps(1) infinite;
              }
            ` })
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "ntm-wrap relative h-[440px] overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "absolute inset-0",
							style: { background: "linear-gradient(180deg, oklch(0.15 0.04 260) 0%, oklch(0.22 0.05 250) 100%)" },
							children: [
								stars.map((s, i) => /* @__PURE__ */ jsx("span", {
									className: "absolute rounded-full bg-white",
									style: {
										left: `${s.x}%`,
										top: `${s.y}%`,
										width: s.r,
										height: s.r,
										animation: `ntm-star-twinkle ${2 + i % 3}s ease-in-out ${i * .2}s infinite`
									}
								}, i)),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute right-8 top-8 h-12 w-12",
									children: [/* @__PURE__ */ jsx("span", {
										className: "ntm-moon-aura pointer-events-none absolute left-1/2 top-1/2",
										style: {
											width: 140,
											height: 140,
											transform: "translate(-50%, -50%)",
											background: "radial-gradient(circle, oklch(0.82 0.16 195 / 0.55) 0%, oklch(0.62 0.22 260 / 0.35) 40%, transparent 70%)",
											filter: "blur(14px)",
											animation: "ntm-moon-glow 4s ease-in-out infinite",
											transition: "animation-duration 0.4s ease"
										},
										"aria-hidden": true
									}), /* @__PURE__ */ jsx("div", {
										className: "relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur",
										children: /* @__PURE__ */ jsx(Moon, { className: "h-6 w-6 text-white/80" })
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute left-6 top-16 w-72",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/60",
										children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-destructive" }), " Overnight queue · 14 items"]
									}), /* @__PURE__ */ jsx("div", {
										className: "space-y-1.5",
										children: nightRows.map((r, i) => /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-2.5 py-1.5 backdrop-blur",
											children: [
												/* @__PURE__ */ jsx(FileText, { className: "h-3 w-3 shrink-0 text-destructive" }),
												/* @__PURE__ */ jsx("span", {
													className: "truncate text-[10px] font-medium text-white/90",
													children: r.label
												}),
												/* @__PURE__ */ jsx("span", {
													className: "ml-auto text-[10px] font-bold text-white",
													children: r.amt
												})
											]
										}, i))
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute right-6 top-16 hidden w-60 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur sm:block",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "mb-2 flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("div", {
												className: "text-[9px] font-bold uppercase tracking-wider text-white/70",
												children: "Systems · live"
											}), /* @__PURE__ */ jsxs("span", {
												className: "flex items-center gap-1 text-[9px] font-bold text-emerald-300",
												children: [/* @__PURE__ */ jsxs("span", {
													className: "relative flex h-1.5 w-1.5",
													children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" })]
												}), "SYNCING"]
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "space-y-1.5",
											children: [
												{
													name: "Opera PMS",
													pct: 92
												},
												{
													name: "Booking.com",
													pct: 78
												},
												{
													name: "Expedia",
													pct: 64
												},
												{
													name: "QuickBooks GL",
													pct: 41
												},
												{
													name: "Amex feed",
													pct: 88
												}
											].map((s) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between text-[9px] font-medium text-white/80",
												children: [/* @__PURE__ */ jsx("span", { children: s.name }), /* @__PURE__ */ jsxs("span", {
													className: "font-mono text-white/60",
													children: [s.pct, "%"]
												})]
											}), /* @__PURE__ */ jsx("div", {
												className: "mt-0.5 h-1 overflow-hidden rounded-full bg-white/10",
												children: /* @__PURE__ */ jsx("div", {
													className: "h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300",
													style: { width: `${s.pct}%` }
												})
											})] }, s.name))
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mt-2 border-t border-white/10 pt-2 text-[9px] text-white/50",
											children: "428 transactions processed"
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "absolute bottom-4 left-6 text-[10px] font-medium text-white/50",
									children: "Night audit running… 14 exceptions detected"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "ntm-wipe-layer absolute inset-0",
							style: {
								background: "linear-gradient(180deg, oklch(0.92 0.05 75) 0%, oklch(0.85 0.12 50) 60%, oklch(0.78 0.14 30) 100%)",
								animation: "ntm-wipe 8s ease-in-out infinite"
							},
							children: [
								[
									{
										y: 24,
										delay: 0,
										dur: 22,
										w: 60,
										op: .7
									},
									{
										y: 70,
										delay: 8,
										dur: 28,
										w: 90,
										op: .5
									},
									{
										y: 130,
										delay: 14,
										dur: 32,
										w: 70,
										op: .6
									}
								].map((c, i) => /* @__PURE__ */ jsx("div", {
									className: "absolute rounded-full bg-white",
									style: {
										top: c.y,
										left: 0,
										width: c.w,
										height: c.w * .4,
										opacity: c.op,
										filter: "blur(6px)",
										animation: `ntm-cloud-drift ${c.dur}s linear ${c.delay}s infinite`
									}
								}, `cloud-${i}`)),
								[{
									y: 60,
									delay: 2,
									dur: 9
								}, {
									y: 90,
									delay: 5,
									dur: 11
								}].map((b, i) => /* @__PURE__ */ jsx("svg", {
									className: "absolute",
									style: {
										top: b.y,
										left: 0,
										animation: `ntm-bird-fly ${b.dur}s ease-in-out ${b.delay}s infinite`
									},
									width: "18",
									height: "10",
									viewBox: "0 0 18 10",
									children: /* @__PURE__ */ jsx("path", {
										d: "M 1 5 Q 4 1, 7 5 Q 10 1, 13 5",
										fill: "none",
										stroke: "oklch(0.35 0.05 30)",
										strokeWidth: "1.2",
										strokeLinecap: "round"
									})
								}, `bird-${i}`)),
								/* @__PURE__ */ jsx("div", {
									className: "absolute right-10 top-10",
									style: { animation: "ntm-sun-rise 8s ease-in-out infinite" },
									children: /* @__PURE__ */ jsxs("div", {
										className: "relative",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "ntm-sun-aura pointer-events-none absolute left-1/2 top-1/2",
												style: {
													width: 220,
													height: 220,
													transform: "translate(-50%, -50%)",
													background: "radial-gradient(circle, oklch(0.95 0.16 85 / 0.85) 0%, oklch(0.82 0.18 55 / 0.55) 35%, oklch(0.72 0.20 35 / 0.25) 60%, transparent 80%)",
													filter: "blur(20px)",
													animation: "ntm-sun-bloom 3.6s ease-in-out infinite"
												},
												"aria-hidden": true
											}),
											/* @__PURE__ */ jsx("svg", {
												className: "absolute -inset-6",
												width: "112",
												height: "112",
												viewBox: "0 0 112 112",
												style: {
													animation: "ntm-sun-rays 12s linear infinite",
													transformOrigin: "56px 56px"
												},
												children: Array.from({ length: 12 }).map((_, i) => {
													const angle = i * 30 * Math.PI / 180;
													return /* @__PURE__ */ jsx("line", {
														x1: 56 + Math.cos(angle) * 36,
														y1: 56 + Math.sin(angle) * 36,
														x2: 56 + Math.cos(angle) * 52,
														y2: 56 + Math.sin(angle) * 52,
														stroke: "oklch(0.92 0.15 75)",
														strokeWidth: "2",
														strokeLinecap: "round",
														opacity: "0.85"
													}, i);
												})
											}),
											/* @__PURE__ */ jsx("div", {
												className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-200 to-orange-400 shadow-[0_0_80px_rgba(255,180,80,0.9)]",
												children: /* @__PURE__ */ jsx(Sun, { className: "h-8 w-8 text-white" })
											})
										]
									})
								}),
								[
									{
										x: 340,
										y: 60,
										d: 0
									},
									{
										x: 100,
										y: 50,
										d: .6
									},
									{
										x: 360,
										y: 200,
										d: 1.2
									},
									{
										x: 80,
										y: 240,
										d: 1.8
									}
								].map((s, i) => /* @__PURE__ */ jsx("svg", {
									className: "absolute",
									style: {
										left: s.x,
										top: s.y,
										animation: `ntm-sparkle 2.4s ease-in-out ${s.d}s infinite`
									},
									width: "12",
									height: "12",
									viewBox: "0 0 12 12",
									children: /* @__PURE__ */ jsx("path", {
										d: "M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z",
										fill: "oklch(0.95 0.12 90)"
									})
								}, `sp-${i}`)),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute left-6 top-16 w-80 rounded-xl border border-white/40 bg-white/85 p-4 shadow-2xl backdrop-blur",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "mb-3 flex items-center justify-between",
											children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
												className: "text-[9px] font-bold uppercase tracking-wider text-orange-700",
												children: "Morning briefing"
											}), /* @__PURE__ */ jsx("div", {
												className: "text-sm font-bold text-slate-900",
												children: "Wednesday · 7:45 AM"
											})] }), /* @__PURE__ */ jsxs("div", {
												className: "relative",
												children: [
													/* @__PURE__ */ jsx(Coffee, { className: "h-6 w-6 text-orange-800" }),
													/* @__PURE__ */ jsx("span", {
														className: "absolute -top-2 left-1/2 h-2 w-1 -translate-x-1/2 rounded-full bg-white/70",
														style: { animation: "ntm-coffee-steam 1.4s ease-out infinite" }
													}),
													/* @__PURE__ */ jsx("span", {
														className: "absolute -top-2 left-1/2 h-2 w-1 -translate-x-1/2 rounded-full bg-white/70",
														style: { animation: "ntm-coffee-steam 1.4s ease-out 0.7s infinite" }
													})
												]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "grid grid-cols-3 gap-2",
											children: [
												/* @__PURE__ */ jsx(Stat, {
													label: "Cleared",
													value: "12",
													accent: "text-emerald-700"
												}),
												/* @__PURE__ */ jsx(Stat, {
													label: "To review",
													value: "2",
													accent: "text-orange-700"
												}),
												/* @__PURE__ */ jsx(Stat, {
													label: "Saved",
													value: "$412",
													accent: "text-emerald-700"
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-3 space-y-1.5",
											children: [morningRows.map((r, i) => /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 rounded-md border border-emerald-300 bg-emerald-50 px-2.5 py-1.5",
												children: [/* @__PURE__ */ jsx("span", {
													className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500",
													style: { animation: `ntm-tick-pop 8s ease-out ${i * .15}s infinite` },
													children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-white" })
												}), /* @__PURE__ */ jsx("span", {
													className: "truncate text-[10px] font-medium text-slate-800",
													children: r
												})]
											}, i)), /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 rounded-md border border-orange-300 bg-orange-50 px-2.5 py-1.5",
												children: [
													/* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 shrink-0 text-orange-600" }),
													/* @__PURE__ */ jsxs("span", {
														className: "truncate text-[10px] font-medium text-slate-800",
														children: ["Tax variance · folio #4421 · ", /* @__PURE__ */ jsx("span", {
															className: "font-bold",
															children: "$92"
														})]
													}),
													/* @__PURE__ */ jsx("button", {
														className: "ml-auto rounded bg-slate-900 px-1.5 py-0.5 text-[9px] font-bold text-white",
														children: "Review"
													})
												]
											})]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute right-6 top-16 hidden w-60 rounded-xl border border-white/50 bg-white/90 p-3 shadow-2xl backdrop-blur sm:block",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "mb-2 flex items-center justify-between",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-[9px] font-bold uppercase tracking-wider text-orange-700",
											children: "Today's outlook"
										}), /* @__PURE__ */ jsx("span", {
											className: "rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-emerald-700",
											children: "On pace"
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "rounded-md border border-slate-200 bg-white p-2",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between text-[9px] font-medium text-slate-500",
													children: [/* @__PURE__ */ jsx("span", { children: "Occupancy" }), /* @__PURE__ */ jsx("span", {
														className: "font-bold text-emerald-600",
														children: "+4.2%"
													})]
												}), /* @__PURE__ */ jsxs("div", {
													className: "mt-0.5 flex items-end justify-between",
													children: [/* @__PURE__ */ jsx("div", {
														className: "text-base font-bold text-slate-900",
														children: "87%"
													}), /* @__PURE__ */ jsx("svg", {
														width: "60",
														height: "20",
														viewBox: "0 0 60 20",
														children: /* @__PURE__ */ jsx("polyline", {
															points: "0,15 10,12 20,14 30,8 40,10 50,5 60,3",
															fill: "none",
															stroke: "oklch(0.65 0.18 155)",
															strokeWidth: "1.5"
														})
													})]
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "rounded-md border border-slate-200 bg-white p-2",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between text-[9px] font-medium text-slate-500",
													children: [/* @__PURE__ */ jsx("span", { children: "ADR" }), /* @__PURE__ */ jsx("span", {
														className: "font-bold text-emerald-600",
														children: "+$8"
													})]
												}), /* @__PURE__ */ jsxs("div", {
													className: "mt-0.5 flex items-end justify-between",
													children: [/* @__PURE__ */ jsx("div", {
														className: "text-base font-bold text-slate-900",
														children: "$182"
													}), /* @__PURE__ */ jsx("svg", {
														width: "60",
														height: "20",
														viewBox: "0 0 60 20",
														children: /* @__PURE__ */ jsx("polyline", {
															points: "0,14 10,11 20,13 30,9 40,7 50,8 60,4",
															fill: "none",
															stroke: "oklch(0.65 0.18 155)",
															strokeWidth: "1.5"
														})
													})]
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "rounded-md border border-orange-200 bg-orange-50 p-2",
												children: [/* @__PURE__ */ jsx("div", {
													className: "text-[9px] font-bold uppercase tracking-wider text-orange-700",
													children: "Action for you"
												}), /* @__PURE__ */ jsx("div", {
													className: "mt-0.5 text-[10px] font-medium text-slate-800",
													children: "Approve 2 flagged items before 10 AM"
												})]
											})
										]
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "absolute bottom-4 left-6 text-[10px] font-bold text-orange-900",
									children: "☕ You walked in. It's already done."
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "absolute top-3 left-3 z-10 rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white/80 backdrop-blur",
							children: "Night → Morning"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
					children: "You sleep. Innrly works."
				}), /* @__PURE__ */ jsx("div", {
					className: "text-lg font-bold text-foreground",
					children: "14 → 2 · in one cycle"
				})]
			})
		]
	});
}
var stars = [
	{
		x: 8,
		y: 12,
		r: 2
	},
	{
		x: 22,
		y: 8,
		r: 1
	},
	{
		x: 35,
		y: 18,
		r: 1.5
	},
	{
		x: 48,
		y: 6,
		r: 1
	},
	{
		x: 60,
		y: 14,
		r: 2
	},
	{
		x: 72,
		y: 22,
		r: 1
	},
	{
		x: 88,
		y: 28,
		r: 1.5
	},
	{
		x: 15,
		y: 32,
		r: 1
	},
	{
		x: 42,
		y: 38,
		r: 1
	},
	{
		x: 78,
		y: 42,
		r: 2
	},
	{
		x: 5,
		y: 48,
		r: 1
	},
	{
		x: 92,
		y: 52,
		r: 1.5
	}
];
var nightRows = [
	{
		label: "Unposted room charge",
		amt: "$148"
	},
	{
		label: "Tax mismatch · #4421",
		amt: "$92"
	},
	{
		label: "Duplicate OTA fee",
		amt: "$74"
	},
	{
		label: "Comp room · no approval",
		amt: "$98"
	},
	{
		label: "Vendor inv. unmatched",
		amt: "$1,284"
	}
];
var morningRows = [
	"Room charges posted · 247",
	"OTA commissions reconciled",
	"Vendor invoices matched · 18",
	"GL entries pushed to QuickBooks"
];
function Stat({ label, value, accent }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-md border border-slate-200 bg-white/60 p-2",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-[8px] font-bold uppercase tracking-wider text-slate-500",
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: `text-lg font-bold ${accent}`,
			children: value
		})]
	});
}
//#endregion
//#region src/components/site/AuroraReveal.tsx
/**
* AuroraReveal — one signature scroll moment.
* On first intersection, sweeps an aurora gradient diagonally across the
* children once. Used sparingly on hero headlines to give the site a memorable
* motion beat without turning into a parallax circus.
*/
function AuroraReveal({ children, className, delay = 120 }) {
	const ref = useRef(null);
	const [revealed, setRevealed] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setRevealed(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				window.setTimeout(() => setRevealed(true), delay);
				io.disconnect();
				break;
			}
		}, { threshold: .2 });
		io.observe(el);
		return () => io.disconnect();
	}, [delay]);
	return /* @__PURE__ */ jsxs("span", {
		ref,
		className: cn("aurora-reveal relative inline-block", revealed && "is-revealed", className),
		children: [/* @__PURE__ */ jsx("style", { children: `
        .aurora-reveal::after {
          content: "";
          position: absolute;
          inset: -8% -6%;
          pointer-events: none;
          background: linear-gradient(
            105deg,
            transparent 0%,
            transparent 38%,
            oklch(0.82 0.16 195 / 0.55) 46%,
            oklch(0.62 0.22 260 / 0.65) 50%,
            oklch(0.70 0.20 310 / 0.55) 54%,
            transparent 62%,
            transparent 100%
          );
          background-size: 260% 100%;
          background-position: 120% 0;
          mix-blend-mode: screen;
          filter: blur(14px);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .aurora-reveal.is-revealed::after {
          opacity: 1;
          animation: aurora-reveal-sweep 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes aurora-reveal-sweep {
          0% { background-position: 120% 0; opacity: 0; }
          18% { opacity: 1; }
          82% { opacity: 1; }
          100% { background-position: -40% 0; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora-reveal::after { display: none; }
        }
      ` }), children]
	});
}
//#endregion
//#region src/components/site/LogosStrip.tsx
/**
* "Works with" panel — the three core systems a hotel will never change
* (PMS, Accounting, TimeClock), grouped by brand where relevant, plus a
* secondary row of additive tools Innrly also connects to.
*
* This is a key sales surface: it proves Innrly slots into the operator's
* existing stack without forcing a system swap.
*/
var PMS = [
	{
		brand: "Hilton",
		items: ["OnQ", "PEP"]
	},
	{
		brand: "Marriott",
		items: ["FOSSE", "StayNTouch"]
	},
	{
		brand: "IHG",
		items: ["HotelKey"]
	},
	{
		brand: "Choice",
		items: ["Choice Advantage"]
	},
	{
		brand: "Independent",
		items: [
			"Opera",
			"Visual Matrix",
			"Maestro"
		]
	}
];
var ACCOUNTING = [
	"M3",
	"QuickBooks",
	"Sage Intacct"
];
var TIMECLOCK = [
	{
		name: "Innrly TimeClock",
		native: true
	},
	{ name: "ADP" },
	{ name: "Paychex" }
];
var ADDITIVE = [
	"Plaid",
	"Repay",
	"Medallia",
	"Revinate",
	"Hotel Effectiveness",
	"Kipsu"
];
function Panel({ label, accent, children }) {
	return /* @__PURE__ */ jsxs("div", {
		style: { ["--panel-accent"]: accent },
		className: "relative overflow-hidden rounded-2xl border-2 border-[color:var(--panel-accent)]/65 bg-card/70 p-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--panel-accent)_22%,transparent),0_18px_55px_-28px_var(--panel-accent)] transition-colors hover:border-[color:var(--panel-accent)]/95",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-60 blur-2xl",
				style: { background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` },
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative flex items-center gap-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: "h-2 w-2 rounded-full",
					style: {
						background: accent,
						boxShadow: `0 0 10px ${accent}`
					},
					"aria-hidden": true
				}), /* @__PURE__ */ jsx("span", {
					className: "text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--panel-accent)]",
					children: label
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative mt-4",
				children
			})
		]
	});
}
function LogosStrip({ compact = false } = {}) {
	return /* @__PURE__ */ jsx("section", {
		"aria-labelledby": "logos-heading",
		className: compact ? "bg-transparent" : "border-b border-border/60 bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: `mx-auto max-w-7xl px-4 ${compact ? "py-6" : "py-12"} sm:px-6 lg:px-8`,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsx("h2", {
						id: "logos-heading",
						className: `${compact ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"} font-bold tracking-tight text-foreground`,
						children: "Keep your PMS. Keep your accounting. Keep your time clock."
					}), /* @__PURE__ */ jsx("p", {
						className: `${compact ? "mt-2 text-xs" : "mt-3 text-sm"} text-muted-foreground`,
						children: "Innrly works around the three systems your hotel will never change — across every major brand."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: `${compact ? "mt-5" : "mt-8"} grid gap-4 md:grid-cols-3`,
					children: [
						/* @__PURE__ */ jsx(Panel, {
							label: "PMS",
							accent: "oklch(0.72 0.16 235)",
							children: /* @__PURE__ */ jsx("ul", {
								className: "space-y-2.5",
								children: PMS.map((b) => /* @__PURE__ */ jsxs("li", {
									className: "flex flex-wrap items-baseline gap-x-2",
									children: [b.brand && /* @__PURE__ */ jsx("span", {
										className: "min-w-[78px] text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80",
										children: b.brand
									}), /* @__PURE__ */ jsx("span", {
										className: "text-sm font-semibold text-foreground/90",
										children: b.items.join(" · ")
									})]
								}, b.brand ?? b.items.join("-")))
							})
						}),
						/* @__PURE__ */ jsx(Panel, {
							label: "Accounting",
							accent: "oklch(0.78 0.18 155)",
							children: /* @__PURE__ */ jsx("ul", {
								className: "space-y-2.5",
								children: ACCOUNTING.map((a) => /* @__PURE__ */ jsx("li", {
									className: "text-sm font-semibold text-foreground/90",
									children: a
								}, a))
							})
						}),
						/* @__PURE__ */ jsx(Panel, {
							label: "TimeClock",
							accent: "oklch(0.78 0.18 35)",
							children: /* @__PURE__ */ jsx("ul", {
								className: "space-y-2.5",
								children: TIMECLOCK.map((t) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-2 text-sm font-semibold text-foreground/90",
									children: [t.name, t.native && /* @__PURE__ */ jsx("span", {
										className: "rounded-full border border-[color:var(--panel-accent)]/50 bg-[color:var(--panel-accent)]/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[color:var(--panel-accent)]",
										children: "Innrly's own"
									})]
								}, t.name))
							})
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-5 flex justify-center",
					children: /* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent",
						children: [/* @__PURE__ */ jsx(Check, {
							className: "h-3 w-3",
							"aria-hidden": true
						}), "No system change required"]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: `${compact ? "mt-6" : "mt-10"} relative overflow-hidden rounded-2xl border-2 border-accent/40 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 px-5 py-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent,oklch(0.78_0.16_200))_18%,transparent),0_18px_50px_-30px_color-mix(in_oklab,var(--accent,oklch(0.78_0.16_200))_60%,transparent)]`,
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "pointer-events-none absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl",
							"aria-hidden": true
						}),
						/* @__PURE__ */ jsx("div", {
							className: "pointer-events-none absolute -right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl",
							"aria-hidden": true
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative flex flex-wrap items-center justify-center gap-x-2 gap-y-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mr-2 inline-flex items-center gap-1.5 rounded-full border border-accent/50 bg-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent",
								children: "Plus"
							}), ADDITIVE.map((t, i) => /* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "rounded-lg border border-border/60 bg-background/60 px-3 py-1.5 text-sm font-semibold text-foreground/90 transition-colors hover:border-accent/60 hover:text-foreground",
									children: t
								}), i < ADDITIVE.length - 1 && /* @__PURE__ */ jsx("span", {
									className: "text-accent/40",
									"aria-hidden": true,
									children: "·"
								})]
							}, t))]
						})
					]
				}),
				!compact && /* @__PURE__ */ jsxs("p", {
					className: "mt-6 text-center text-xs text-muted-foreground",
					children: [
						"50+ integrations across PMS, accounting, payroll, banking, guest survey, and A/P.",
						" ",
						/* @__PURE__ */ jsx(Link, {
							to: "/integrations",
							className: "font-semibold text-accent hover:underline",
							children: "See all integrations →"
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region src/components/site/ProofBand.tsx
/**
* ProofBand — high-density proof row that sits directly under the hero.
* Three hard metrics + a logo strip in one editorial band, designed to
* read as "this is real" before the reader ever scrolls.
*
* Distinct from Otelier's airy hero → trust pill pattern. We front-load
* numbers and brand coverage in a single tight rhythm.
*/
var METRICS = [
	{
		value: "20–40",
		unit: "hrs",
		label: "saved per property each month"
	},
	{
		value: "200+",
		unit: "hotels",
		label: "running on Innrly today"
	},
	{
		value: "Recovered",
		unit: "revenue",
		label: "from OTA, vendor, labor & audit exceptions — varies by portfolio"
	}
];
function ProofBand() {
	return /* @__PURE__ */ jsxs("section", {
		"data-glow": "dark",
		className: "relative border-y border-border/60 bg-surface/40",
		"aria-label": "Proof of impact",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid items-center gap-8 lg:grid-cols-3",
				children: METRICS.map((m) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-baseline gap-3 border-l border-border/60 pl-5 first:border-l-0 first:pl-0 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-3xl font-bold leading-none text-gradient sm:text-4xl",
						children: m.value
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-accent",
							children: m.unit
						}), /* @__PURE__ */ jsx("span", {
							className: "text-sm text-muted-foreground",
							children: m.label
						})]
					})]
				}, m.label))
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border/40",
			children: /* @__PURE__ */ jsx(LogosStrip, { compact: true })
		})]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var coreAccent = {
	intelligence: "oklch(0.78 0.18 155)",
	control: "oklch(0.72 0.16 235)",
	shift: "oklch(0.68 0.22 258)"
};
var coreSuites = [
	{
		variant: "intelligence",
		displayVariant: "intelligence",
		name: "Business Intelligence",
		to: "/solutions/business-intelligence",
		body: "Portfolio-wide dashboards, STR benchmarking, and predictive trends — in one view."
	},
	{
		variant: "control",
		displayVariant: "control",
		name: "Financial Control",
		to: "/solutions/financial-control",
		body: "Automated reconciliation, billing assurance, and revenue protection that defends your margins."
	},
	{
		variant: "shift",
		displayVariant: "shift",
		name: "Innrly Shift",
		to: "/solutions/innrly-shift",
		body: "Scheduling, Face-ID TimeClock, housekeeping productivity, and payroll — one mobile-first product for GMs."
	},
	{
		variant: "ops",
		displayVariant: "intelligence",
		name: "Operations Automation",
		to: "/solutions/operations-automation",
		body: "Night audit, OTA commissions, and bank reconciliation — handled without spreadsheets."
	},
	{
		variant: "pay",
		displayVariant: "control",
		name: "Innrly Pay",
		to: "/solutions/innrly-pay",
		body: "Replace paper checks with Virtual Cards & ACH. Faster settlement, fraud protection built in.",
		tag: "Included free"
	},
	{
		variant: "labor",
		displayVariant: "shift",
		name: "Labor & Workforce",
		to: "/solutions/labor-workforce",
		body: "5-minute labor snapshots that surface hidden overtime before it hits payroll.",
		tag: "New"
	}
];
var supportingSuites = [
	{
		icon: FolderArchive,
		name: "Document Vault",
		to: "/solutions/document-vault",
		body: "Calendar-based vault — PMS night-audit packs auto-drop on each day.",
		tone: "doc"
	},
	{
		icon: Receipt,
		name: "Expense Entries",
		to: "/solutions/expense-entries",
		body: "Log card charges + auto-paid invoices, synced straight to QuickBooks.",
		tone: "expense"
	},
	{
		icon: Smile,
		name: "Guest Experience",
		to: "/integrations",
		body: "Sentiment + review scores from Medallia and Revinate, alongside RevPAR.",
		tag: "Via Medallia",
		tone: "guest"
	},
	{
		icon: ClipboardCheck,
		name: "Accountability Pack",
		to: "/services/accountability-pack",
		body: "Done-for-you verification, franchise reporting, Green Engage, CLC.",
		tag: "Add-on",
		tone: "accountability"
	}
];
var outcomes = [
	{
		stat: "200+",
		label: "Hotels on Innrly"
	},
	{
		stat: "17,000+",
		label: "Rooms tracked nightly"
	},
	{
		stat: "1,500+",
		label: "Hotel team members using Innrly"
	},
	{
		stat: "250+",
		label: "Vendor invoices auto-processed per hotel / month"
	},
	{
		stat: "50+",
		label: "PMS, accounting, payroll & TimeClock integrations"
	}
];
var compatTier1 = [
	"Hilton",
	"Marriott",
	"IHG"
];
var compatTier2 = [
	"Wyndham",
	"Choice Hotels",
	"Best Western",
	"Hyatt",
	"Radisson",
	"Sonesta",
	"Red Roof",
	"Motel 6",
	"Extended Stay America",
	"La Quinta",
	"Red Lion"
];
function HomePage() {
	const { testimonials: allTestimonials } = Route.useLoaderData();
	const [showAllProducts, setShowAllProducts] = useState(false);
	const hpAll = allTestimonials.filter((t) => t.page === "homepage" || t.is_homepage);
	const hpTestimonials = hpAll.length > 0 ? hpAll : [{
		quote: "Innrly replaced four spreadsheets and saved my GM two days a week. Reconciliation that used to take a full morning now runs in minutes.",
		name: "James Wilson",
		title: "VP of Operations",
		company: "Pinnacle Hotels Group · 12 hotels"
	}, {
		quote: "OTA commission audits that used to slip through quarterly reviews now surface daily. The dashboard pays for itself before lunch.",
		name: "Elena Rostova",
		title: "Owner",
		company: "Rostova Hospitality · 6 hotels"
	}];
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "relative min-h-[calc(100vh-4rem)] overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 bg-hero opacity-90",
						"aria-hidden": true
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0",
						"aria-hidden": true,
						children: [/* @__PURE__ */ jsx("div", { className: "absolute left-1/4 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" }), /* @__PURE__ */ jsx("div", { className: "absolute right-10 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative h-[calc(100vh-4rem)] min-h-[760px] px-4 py-6 sm:px-6 lg:px-8",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative z-10 mx-auto flex h-full max-w-[60rem] flex-col justify-center pb-28",
							children: [
								/* @__PURE__ */ jsx(Eyebrow, { children: "One platform · Built for hotels" }),
								/* @__PURE__ */ jsxs("h1", {
									className: "mt-5 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl",
									children: [
										"Hotel management software that",
										" ",
										/* @__PURE__ */ jsx(AuroraReveal, { children: /* @__PURE__ */ jsx("span", {
											className: "text-gradient",
											children: "automates the back office."
										}) })
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 max-w-xl text-lg text-muted-foreground",
									children: "Innrly brings every part of your hotel's operation into one intelligent platform — financials, performance, and labor — across your entire portfolio."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ jsx(Button, {
										asChild: true,
										size: "lg",
										className: "bg-cta hover:opacity-90",
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/contact",
											children: ["See it live", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })]
										})
									}), /* @__PURE__ */ jsx(Button, {
										asChild: true,
										size: "lg",
										variant: "outline",
										className: "border-border bg-background/40",
										children: /* @__PURE__ */ jsx(Link, {
											to: "/features",
											children: "Explore features"
										})
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-xs text-muted-foreground",
									children: "90-day free trial · No credit card required"
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative hidden h-[clamp(820px,72vh,820px)] overflow-hidden border-y border-border/40 bg-hero sm:block",
				children: /* @__PURE__ */ jsx(HeroNightAudit, {})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative overflow-hidden border-y border-border/40 bg-hero py-12 sm:hidden",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-md px-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-accent/30 bg-surface/80 p-5 shadow-glow backdrop-blur",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-bold uppercase tracking-widest text-accent",
									children: "Live night audit"
								}), /* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-1.5 text-[10px] font-semibold text-success",
									children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }), "Streaming"]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-4 grid grid-cols-2 gap-3 text-center",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "rounded-xl border border-success/30 bg-success/10 p-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-2xl font-bold text-success",
										children: "12"
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Auto-cleared"
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "rounded-xl border border-destructive/30 bg-destructive/10 p-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-2xl font-bold text-destructive",
										children: "2"
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Flagged"
									})]
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-4 space-y-2",
								children: [
									{
										l: "Opera PMS · folio sync",
										v: "148",
										ok: true
									},
									{
										l: "Booking.com · commission sweep",
										v: "$74",
										ok: true
									},
									{
										l: "Tax mismatch · folio #4421",
										v: "$92",
										ok: false
									}
								].map((r) => /* @__PURE__ */ jsxs("div", {
									className: `flex items-center justify-between rounded-lg border px-3 py-2 text-xs ${r.ok ? "border-success/30 bg-success/5" : "border-destructive/40 bg-destructive/10"}`,
									children: [/* @__PURE__ */ jsx("span", {
										className: "truncate text-foreground",
										children: r.l
									}), /* @__PURE__ */ jsx("span", {
										className: `ml-2 font-bold ${r.ok ? "text-success" : "text-destructive"}`,
										children: r.v
									})]
								}, r.l))
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: "Loss prevented"
								}), /* @__PURE__ */ jsx("span", {
									className: "font-bold text-accent",
									children: "$412 · 11 hrs"
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx(ProofBand, {}),
			/* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "The portfolio we run",
				title: "Trusted across hotels, rooms, and teams.",
				description: "Innrly powers daily operations for hotel owners and management companies across the U.S.",
				align: "center"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 sm:gap-6",
				children: outcomes.map((o) => /* @__PURE__ */ jsxs("div", {
					className: "aurora-card rounded-2xl p-6 text-center",
					children: [/* @__PURE__ */ jsx("div", {
						className: "inline-block pr-1 text-3xl font-bold text-gradient sm:text-4xl leading-tight",
						children: o.stat
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: o.label
					})]
				}, o.label))
			})] }),
			/* @__PURE__ */ jsxs(Section, {
				className: "py-12",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-center text-sm font-medium uppercase tracking-wider text-muted-foreground",
						children: "Every major brand — plus independents and boutiques"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3",
						children: compatTier1.map((l) => /* @__PURE__ */ jsxs("div", {
							className: "relative flex h-16 items-center justify-center overflow-hidden rounded-xl border-2 border-accent/50 bg-accent/5 px-4 text-base font-bold tracking-tight text-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_18%,transparent),0_16px_50px_-28px_color-mix(in_oklab,var(--accent)_70%,transparent)]",
							children: [/* @__PURE__ */ jsx("span", {
								className: "pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/20 blur-2xl",
								"aria-hidden": true
							}), /* @__PURE__ */ jsx("span", {
								className: "relative",
								children: l
							})]
						}, l))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-4 flex flex-wrap items-center justify-center gap-2",
						children: compatTier2.map((l) => /* @__PURE__ */ jsx("div", {
							className: "flex h-10 items-center justify-center rounded-lg border border-border/40 bg-surface/40 px-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground",
							children: l
						}, l))
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-center text-xs text-muted-foreground",
						children: "Innrly runs on top of the PMS, accounting, and payroll systems these brands require — no system swap."
					})
				]
			}),
			/* @__PURE__ */ jsxs(Section, {
				tone: "surface",
				children: [
					/* @__PURE__ */ jsx(SectionHeading, {
						eyebrow: "Product",
						title: "Six core products. Four supporting.",
						description: "The six brains run your back office. The four supporting products extend the system into vault, expense capture, guest signal, and done-for-you service."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: coreSuites.map((s, idx) => {
							const accent = coreAccent[s.displayVariant];
							const hideOnMobile = idx >= 3 && !showAllProducts;
							return /* @__PURE__ */ jsxs(Link, {
								to: s.to,
								style: { ["--core-accent"]: accent },
								className: `group relative ${hideOnMobile ? "hidden sm:flex" : "flex"} flex-col items-center overflow-hidden rounded-2xl border border-[color:var(--core-accent)]/25 bg-card p-6 pt-4 text-center transition-all hover:-translate-y-1 hover:border-[color:var(--core-accent)]/70 hover:shadow-[0_20px_60px_-25px_var(--core-accent)]`,
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "pointer-events-none absolute left-1/2 top-10 -z-0 h-44 w-44 -translate-x-1/2 rounded-full opacity-60 blur-2xl transition-opacity group-hover:opacity-90",
										style: { background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` },
										"aria-hidden": true
									}),
									/* @__PURE__ */ jsx("span", {
										className: "pointer-events-none absolute left-4 top-4 h-2 w-2 rounded-full",
										style: {
											background: accent,
											boxShadow: `0 0 12px ${accent}`
										},
										"aria-hidden": true
									}),
									s.tag && /* @__PURE__ */ jsx("span", {
										className: "absolute right-4 top-4 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
										style: {
											borderColor: `color-mix(in oklab, ${accent} 50%, transparent)`,
											color: accent,
											background: `color-mix(in oklab, ${accent} 14%, transparent)`
										},
										children: s.tag
									}),
									/* @__PURE__ */ jsx("div", {
										className: "relative z-10",
										children: /* @__PURE__ */ jsx(ProductOrb, {
											variant: s.displayVariant,
											size: "md"
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "relative z-10 mt-2 text-lg font-semibold text-foreground",
										children: s.name
									}),
									/* @__PURE__ */ jsx("p", {
										className: "relative z-10 mt-2 text-sm text-muted-foreground",
										children: s.body
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "relative z-10 mt-4 inline-flex items-center gap-1 text-sm font-medium",
										style: { color: accent },
										children: [
											"Explore",
											" ",
											/* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
										]
									})
								]
							}, s.name);
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6 flex justify-center sm:hidden",
						children: /* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => setShowAllProducts((v) => !v),
							className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted",
							"aria-expanded": showAllProducts,
							children: [showAllProducts ? "Show fewer products" : "Show all 10 products", /* @__PURE__ */ jsx(ArrowRight, { className: `h-3.5 w-3.5 transition-transform ${showAllProducts ? "-rotate-90" : "rotate-90"}` })]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: `mt-10 border-t border-border/60 pt-10 ${showAllProducts ? "block" : "hidden sm:block"}`,
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground",
							children: "Supporting products"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: supportingSuites.map((s) => /* @__PURE__ */ jsxs(Link, {
								to: s.to,
								className: `support-suite-card support-suite-card--${s.tone} group relative min-h-52 overflow-hidden rounded-2xl border border-border/70 p-5 transition-all hover:-translate-y-1 hover:border-[color:var(--support-accent)]`,
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "support-suite-rail absolute inset-x-0 top-0 h-1",
										"aria-hidden": true
									}),
									/* @__PURE__ */ jsx("div", {
										className: "pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[color:var(--support-accent)]/20 blur-2xl",
										"aria-hidden": true
									}),
									s.tag && /* @__PURE__ */ jsx("span", {
										className: "absolute right-4 top-4 rounded-full border border-[color:var(--support-accent)]/35 bg-background/35 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[color:var(--support-accent)]",
										children: s.tag
									}),
									/* @__PURE__ */ jsx("div", {
										className: "support-suite-icon flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-105",
										children: /* @__PURE__ */ jsx(s.icon, {
											className: "h-6 w-6",
											"aria-hidden": true
										})
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "mt-5 text-base font-semibold text-foreground",
										children: s.name
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: s.body
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--support-accent)]",
										children: [
											"Support layer",
											" ",
											/* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3 transition-transform group-hover:translate-x-0.5" })
										]
									})
								]
							}, s.name))
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Automation-first",
				title: "Innrly's core is automation.",
				description: "The work your team is doing manually today — Innrly is already doing in the background."
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						name: "Exceptions Dashboard",
						body: "Skip the wall of green checks. See only the transactions that need a human."
					},
					{
						name: "Auto-pulled vendor invoices",
						body: "Innrly pulls invoices directly from vendor portals into A/P for your approval."
					},
					{
						name: "Month-end reconciliation",
						body: "PMS-to-accounting reconciliation packets, automated and ready for close."
					},
					{
						name: "Rate Shop + daily digest",
						body: "Competitor rates and your morning numbers, delivered without a login."
					}
				].map((f) => /* @__PURE__ */ jsxs("div", {
					className: "aurora-card rounded-2xl p-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-base font-semibold text-foreground",
						children: f.name
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: f.body
					})]
				}, f.name))
			})] }),
			/* @__PURE__ */ jsxs(Section, {
				tone: "surface",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "One overnight cycle",
					title: "You sleep. Innrly works.",
					description: "By the time you walk in with your coffee, the night audit is done and exceptions are triaged — the only items left on your desk are the handful of variances that genuinely need a human decision.",
					align: "center"
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-auto mt-12 max-w-4xl",
					children: /* @__PURE__ */ jsx(NightToMorningScene, {})
				})]
			}),
			/* @__PURE__ */ jsxs(Section, {
				tone: "surface",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "From operators",
					title: "What hotel groups say.",
					description: "Anonymized to protect operator portfolios. Logos and attributed quotes available under NDA.",
					align: "center"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-2",
					children: hpTestimonials.map((t, i) => /* @__PURE__ */ jsxs("figure", {
						className: "aurora-card rounded-2xl p-8",
						children: [/* @__PURE__ */ jsxs("blockquote", {
							className: "text-lg leading-relaxed text-foreground",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}), /* @__PURE__ */ jsxs("figcaption", {
							className: "mt-6 flex items-center gap-3 border-t border-border/60 pt-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-cta text-sm font-bold text-primary-foreground",
								"aria-hidden": true,
								children: t.name.charAt(0)
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-sm font-semibold text-foreground",
								children: t.name
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-xs text-muted-foreground",
								children: [t.title, t.company ? t.title ? ` · ${t.company}` : t.company : ""]
							})] })]
						})]
					}, i))
				})]
			}),
			/* @__PURE__ */ jsxs(Section, {
				className: "border-t border-border/40",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "FAQ",
					title: "Frequently Asked Questions",
					description: "Have questions about spelling, integrations, or onboarding? We've got answers.",
					align: "center"
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-auto mt-12 max-w-3xl",
					children: /* @__PURE__ */ jsxs(Accordion, {
						type: "single",
						collapsible: true,
						className: "w-full",
						children: [
							/* @__PURE__ */ jsxs(AccordionItem, {
								value: "spelling",
								className: "border-border/60",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: "text-left text-base font-semibold text-foreground",
									children: "Is the platform name spelled Innrly or Innerly?"
								}), /* @__PURE__ */ jsxs(AccordionContent, {
									className: "text-muted-foreground leading-relaxed",
									children: [
										"The official spelling is ",
										/* @__PURE__ */ jsx("strong", { children: "Innrly" }),
										" (without the \"e\"). While it is sometimes searched for or misspelled as \"Innerly\", the platform is called Innrly. The name represents our core mission: automating hotel or inn operations early in the overnight cycle so you wake up to clean, reconciled numbers."
									]
								})]
							}),
							/* @__PURE__ */ jsxs(AccordionItem, {
								value: "onboarding",
								className: "border-border/60",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: "text-left text-base font-semibold text-foreground",
									children: "How long does onboarding take with Innrly?"
								}), /* @__PURE__ */ jsx(AccordionContent, {
									className: "text-muted-foreground leading-relaxed",
									children: "Onboarding is fully guided by our team and typically takes less than 14 days. We connect to your PMS, accounting systems, and bank feeds for you, ensuring a seamless transition with zero disruption to your daily operations."
								})]
							}),
							/* @__PURE__ */ jsxs(AccordionItem, {
								value: "integrations",
								className: "border-border/60",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: "text-left text-base font-semibold text-foreground",
									children: "Which hotel systems and accounting platforms does Innrly integrate with?"
								}), /* @__PURE__ */ jsx(AccordionContent, {
									className: "text-muted-foreground leading-relaxed",
									children: "Innrly integrates with all major Property Management Systems (PMS) like Marriott, Hilton, IHG, Opera, Cloudbeds, and Mews, as well as leading back-office financial platforms including M3, Sage Intacct, and QuickBooks."
								})]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx(CtaBand, {})
		]
	});
}
//#endregion
export { HomePage as component };
