import { t as cn } from "./utils-C_uf36nf.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/ProductOrb.tsx
/**
* ProductOrb — signature visual identity used across solutions.
* Dark calm center + conic aurora ring + soft bloom. Same animation grammar,
* different palette per product so the four pillars feel like a family.
*/
var palettes = {
	reconciliation: {
		conic: "conic-gradient(from 0deg, oklch(0.82 0.16 195), oklch(0.62 0.22 260), oklch(0.70 0.20 310), oklch(0.82 0.16 195))",
		bloom: "radial-gradient(circle, oklch(0.78 0.14 195 / 0.55) 0%, oklch(0.62 0.22 260 / 0.35) 35%, oklch(0.55 0.20 300 / 0.18) 60%, transparent 78%)",
		ringStroke: "oklch(0.82 0.16 195 / 0.5)"
	},
	intelligence: {
		conic: "conic-gradient(from 0deg, oklch(0.78 0.18 155), oklch(0.74 0.16 175), oklch(0.82 0.16 195), oklch(0.78 0.18 155))",
		bloom: "radial-gradient(circle, oklch(0.78 0.18 155 / 0.55) 0%, oklch(0.74 0.17 175 / 0.35) 35%, oklch(0.82 0.16 195 / 0.18) 60%, transparent 78%)",
		ringStroke: "oklch(0.78 0.18 155 / 0.55)"
	},
	pay: {
		conic: "conic-gradient(from 0deg, oklch(0.88 0.17 188), oklch(0.76 0.18 205), oklch(0.64 0.22 225), oklch(0.72 0.18 198), oklch(0.88 0.17 188))",
		bloom: "radial-gradient(circle, oklch(0.84 0.17 188 / 0.62) 0%, oklch(0.72 0.20 208 / 0.38) 38%, oklch(0.60 0.22 225 / 0.20) 62%, transparent 78%)",
		ringStroke: "oklch(0.82 0.17 198 / 0.66)"
	},
	vault: {
		conic: "conic-gradient(from 0deg, oklch(0.70 0.20 300), oklch(0.55 0.22 275), oklch(0.42 0.15 260), oklch(0.85 0.04 270), oklch(0.70 0.20 300))",
		bloom: "radial-gradient(circle, oklch(0.65 0.22 300 / 0.50) 0%, oklch(0.50 0.20 270 / 0.32) 35%, oklch(0.85 0.04 270 / 0.15) 60%, transparent 78%)",
		ringStroke: "oklch(0.78 0.14 285 / 0.55)"
	},
	control: {
		conic: "conic-gradient(from 0deg, oklch(0.78 0.14 230), oklch(0.55 0.18 250), oklch(0.42 0.12 245), oklch(0.88 0.06 230), oklch(0.78 0.14 230))",
		bloom: "radial-gradient(circle, oklch(0.72 0.16 235 / 0.55) 0%, oklch(0.55 0.18 250 / 0.32) 35%, oklch(0.88 0.06 230 / 0.15) 60%, transparent 78%)",
		ringStroke: "oklch(0.78 0.14 230 / 0.55)"
	},
	labor: {
		conic: "conic-gradient(from 0deg, oklch(0.86 0.14 60), oklch(0.74 0.18 35), oklch(0.68 0.20 15), oklch(0.78 0.16 45), oklch(0.86 0.14 60))",
		bloom: "radial-gradient(circle, oklch(0.82 0.16 50 / 0.55) 0%, oklch(0.70 0.20 25 / 0.32) 35%, oklch(0.78 0.16 45 / 0.15) 60%, transparent 78%)",
		ringStroke: "oklch(0.82 0.16 45 / 0.55)"
	},
	ops: {
		conic: "conic-gradient(from 0deg, oklch(0.88 0.18 130), oklch(0.80 0.20 145), oklch(0.72 0.18 160), oklch(0.85 0.16 120), oklch(0.88 0.18 130))",
		bloom: "radial-gradient(circle, oklch(0.85 0.20 135 / 0.55) 0%, oklch(0.75 0.20 155 / 0.32) 35%, oklch(0.82 0.18 125 / 0.15) 60%, transparent 78%)",
		ringStroke: "oklch(0.85 0.18 135 / 0.55)"
	},
	shift: {
		conic: "conic-gradient(from 0deg, oklch(0.72 0.22 255), oklch(0.58 0.26 268), oklch(0.46 0.24 278), oklch(0.66 0.20 242), oklch(0.72 0.22 255))",
		bloom: "radial-gradient(circle, oklch(0.70 0.22 255 / 0.58) 0%, oklch(0.56 0.25 268 / 0.38) 38%, oklch(0.46 0.24 278 / 0.20) 62%, transparent 78%)",
		ringStroke: "oklch(0.68 0.22 258 / 0.66)"
	},
	steel: {
		conic: "conic-gradient(from 0deg, oklch(0.70 0.04 250), oklch(0.55 0.05 240), oklch(0.45 0.04 230), oklch(0.78 0.03 250), oklch(0.70 0.04 250))",
		bloom: "radial-gradient(circle, oklch(0.65 0.05 245 / 0.40) 0%, oklch(0.50 0.05 240 / 0.22) 35%, oklch(0.78 0.03 250 / 0.10) 60%, transparent 78%)",
		ringStroke: "oklch(0.72 0.05 245 / 0.45)"
	},
	doc: {
		conic: "conic-gradient(from 0deg, oklch(0.78 0.10 220), oklch(0.60 0.12 230), oklch(0.85 0.06 210), oklch(0.78 0.10 220))",
		bloom: "radial-gradient(circle, oklch(0.72 0.12 220 / 0.45) 0%, oklch(0.55 0.12 230 / 0.25) 40%, transparent 75%)",
		ringStroke: "oklch(0.78 0.10 220 / 0.55)"
	},
	expense: {
		conic: "conic-gradient(from 0deg, oklch(0.82 0.12 75), oklch(0.70 0.14 55), oklch(0.85 0.10 90), oklch(0.82 0.12 75))",
		bloom: "radial-gradient(circle, oklch(0.78 0.14 70 / 0.45) 0%, oklch(0.65 0.14 50 / 0.25) 40%, transparent 75%)",
		ringStroke: "oklch(0.80 0.12 70 / 0.55)"
	},
	guest: {
		conic: "conic-gradient(from 0deg, oklch(0.80 0.12 350), oklch(0.70 0.14 10), oklch(0.84 0.10 340), oklch(0.80 0.12 350))",
		bloom: "radial-gradient(circle, oklch(0.76 0.14 350 / 0.45) 0%, oklch(0.65 0.14 5 / 0.25) 40%, transparent 75%)",
		ringStroke: "oklch(0.78 0.13 350 / 0.55)"
	},
	accountability: {
		conic: "conic-gradient(from 0deg, oklch(0.80 0.12 175), oklch(0.68 0.14 165), oklch(0.84 0.10 185), oklch(0.80 0.12 175))",
		bloom: "radial-gradient(circle, oklch(0.76 0.14 175 / 0.45) 0%, oklch(0.62 0.14 165 / 0.25) 40%, transparent 75%)",
		ringStroke: "oklch(0.78 0.13 175 / 0.55)"
	}
};
var sizes = {
	sm: {
		box: 96,
		bloom: 160,
		ring: 90,
		core: 56,
		eyebrow: "text-[8px]",
		label: "text-[10px]",
		sub: "text-[8px]"
	},
	md: {
		box: 200,
		bloom: 240,
		ring: 180,
		core: 120,
		eyebrow: "text-[9px]",
		label: "text-xs",
		sub: "text-[10px]"
	},
	lg: {
		box: 360,
		bloom: 560,
		ring: 320,
		core: 220,
		eyebrow: "text-[10px]",
		label: "text-lg",
		sub: "text-xs"
	}
};
function ProductOrb({ variant, size = "md", label, sublabel, eyebrow, className, noBloom = false, interactive = true }) {
	const p = palettes[variant];
	const s = sizes[size];
	const wrapId = `orb-${variant}-${size}`;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("product-orb relative inline-flex items-center justify-center", interactive && "group", className),
		style: {
			width: s.box,
			height: s.box
		},
		"data-variant": variant,
		children: [
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes ${wrapId}-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes ${wrapId}-bloom {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.9; }
        }
        .${wrapId}:hover .${wrapId}-ring { animation-duration: 5s !important; filter: blur(2px) saturate(1.3) brightness(1.15); }
        .${wrapId}:hover .${wrapId}-bloom { animation-duration: 1.8s !important; }
      ` }),
			/* @__PURE__ */ jsxs("div", {
				className: wrapId,
				style: {
					position: "absolute",
					inset: 0
				},
				children: [
					!noBloom && /* @__PURE__ */ jsx("div", {
						className: `${wrapId}-bloom pointer-events-none absolute left-1/2 top-1/2`,
						style: {
							width: s.bloom,
							height: s.bloom,
							transform: "translate(-50%, -50%)",
							background: p.bloom,
							filter: "blur(28px)",
							animation: `${wrapId}-bloom 4s ease-in-out infinite`,
							transition: "filter 0.5s ease"
						},
						"aria-hidden": true
					}),
					/* @__PURE__ */ jsx("div", {
						className: `${wrapId}-ring pointer-events-none absolute left-1/2 top-1/2 rounded-full`,
						style: {
							width: s.ring,
							height: s.ring,
							transform: "translate(-50%, -50%)",
							background: p.conic,
							WebkitMaskImage: "radial-gradient(circle, transparent 56%, black 60%, black 78%, transparent 84%)",
							maskImage: "radial-gradient(circle, transparent 56%, black 60%, black 78%, transparent 84%)",
							animation: `${wrapId}-spin 16s linear infinite`,
							filter: "blur(1.5px) saturate(1.1)",
							opacity: .95,
							transition: "filter 0.5s ease"
						},
						"aria-hidden": true
					}),
					/* @__PURE__ */ jsx("div", {
						className: "pointer-events-none absolute left-1/2 top-1/2 rounded-full",
						style: {
							width: s.core,
							height: s.core,
							transform: "translate(-50%, -50%)",
							background: "oklch(0.16 0.04 250)",
							boxShadow: `0 0 0 1px ${p.ringStroke}, inset 0 0 0 6px oklch(0.18 0.04 250)`
						},
						"aria-hidden": true
					})
				]
			}),
			(eyebrow || label || sublabel) && /* @__PURE__ */ jsxs("div", {
				className: "pointer-events-none relative z-10 px-2 text-center",
				children: [
					eyebrow && /* @__PURE__ */ jsx("div", {
						className: cn("font-bold uppercase tracking-[0.2em] text-accent", s.eyebrow),
						children: eyebrow
					}),
					label && /* @__PURE__ */ jsx("div", {
						className: cn("font-semibold text-foreground", s.label),
						children: label
					}),
					sublabel && /* @__PURE__ */ jsx("div", {
						className: cn("text-muted-foreground", s.sub),
						children: sublabel
					})
				]
			})
		]
	});
}
//#endregion
export { ProductOrb as t };
