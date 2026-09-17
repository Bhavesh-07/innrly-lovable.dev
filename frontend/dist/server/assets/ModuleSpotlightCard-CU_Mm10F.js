import { t as track } from "./analytics-P7BrM78M.js";
import { useEffect, useState } from "react";
import "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { z } from "zod";
import "sonner";
z.object({
	name: z.string().trim().min(1, "Required").max(100),
	email: z.string().trim().email("Enter a valid work email").max(255),
	company: z.string().trim().min(1, "Required").max(150),
	role: z.string().trim().max(100).optional(),
	phone: z.string().trim().min(7, "Enter a valid phone").max(30),
	properties: z.string().trim().min(1, "Required").max(20),
	pms: z.string().trim().max(100).optional()
});
/** Helper for any CTA button to open the trial modal. */
function openTrialModal() {
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("innrly:open-trial"));
}
//#endregion
//#region src/components/site/ModuleSpotlightCard.tsx
/**
* Spotlight card shown on a module's solution page that tells the visitor
* this module is reachable via the 90-day trial. Dismissible per session
* per module so it isn't annoying on repeat visits.
*/
function ModuleSpotlightCard({ moduleKey, moduleName, pricing, blurb }) {
	const storageKey = `innrly_module_spotlight_dismissed:${moduleKey}`;
	const [dismissed, setDismissed] = useState(true);
	useEffect(() => {
		if (typeof window === "undefined") return;
		setDismissed(Boolean(sessionStorage.getItem(storageKey)));
	}, [storageKey]);
	if (dismissed) return null;
	const dismiss = () => {
		if (typeof window !== "undefined") sessionStorage.setItem(storageKey, "1");
		setDismissed(true);
	};
	const badge = pricing === "included" ? {
		label: "Included in 90-day trial",
		tone: "bg-success/15 text-success border-success/30"
	} : {
		label: "Available as add-on",
		tone: "bg-accent/15 text-accent border-accent/30"
	};
	return /* @__PURE__ */ jsx("div", {
		className: "mx-auto mt-6 max-w-6xl px-4 sm:px-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative overflow-hidden rounded-2xl border border-accent/30 bg-card/95 p-5 shadow-elevated sm:p-6",
			children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: dismiss,
				"aria-label": "Dismiss",
				className: "absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
				children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-4 pr-8 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }), " New"]
							}), /* @__PURE__ */ jsx("span", {
								className: `inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${badge.tone}`,
								children: badge.label
							})]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-2 text-base font-semibold text-foreground sm:text-lg",
							children: [
								moduleName,
								" ",
								pricing === "included" ? "ships with your 90-day trial." : "is available as a paid add-on."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: blurb
						})
					]
				}), /* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: () => {
						track("cta_click", {
							cta: "open_trial",
							location: `module_spotlight_${moduleKey}`
						});
						openTrialModal();
					},
					className: "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md bg-cta px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95",
					children: ["Start 90-day trial ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
				})]
			})]
		})
	});
}
//#endregion
export { ModuleSpotlightCard as t };
