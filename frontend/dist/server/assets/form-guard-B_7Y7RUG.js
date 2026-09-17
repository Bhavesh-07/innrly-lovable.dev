import { t as cn } from "./utils-C_uf36nf.js";
import * as React from "react";
import { useRef } from "react";
import { jsx } from "react/jsx-runtime";
import { Check } from "lucide-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
//#region src/components/ui/checkbox.tsx
var Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(CheckboxPrimitive.Root, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
//#endregion
//#region src/lib/form-guard.ts
/**
* Anti-bot guards for forms.
* - Honeypot: a hidden field bots tend to fill in.
* - Timing trap: humans take more than ~1.5s to fill a form.
*/
function useFormGuard(minMs = 1500) {
	const mountedAt = useRef(Date.now());
	const honeypotRef = useRef(null);
	const check = () => {
		if (honeypotRef.current && honeypotRef.current.value.trim().length > 0) return {
			ok: false,
			reason: "honeypot"
		};
		if (Date.now() - mountedAt.current < minMs) return {
			ok: false,
			reason: "timing"
		};
		return { ok: true };
	};
	return {
		honeypotRef,
		check
	};
}
/** Hidden honeypot field. Visually hidden + aria-hidden + autocomplete off. */
var honeypotFieldProps = {
	type: "text",
	name: "company_website",
	tabIndex: -1,
	autoComplete: "off",
	"aria-hidden": true,
	style: {
		position: "absolute",
		left: "-9999px",
		width: "1px",
		height: "1px",
		opacity: 0,
		pointerEvents: "none"
	}
};
//#endregion
export { useFormGuard as n, Checkbox as r, honeypotFieldProps as t };
