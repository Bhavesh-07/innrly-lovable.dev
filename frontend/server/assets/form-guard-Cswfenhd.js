import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { useRef } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { c as cn } from "./router-CBR-JcUy.js";
const Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, { className: cn("grid place-content-center text-current"), children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
function useFormGuard(minMs = 1500) {
  const mountedAt = useRef(Date.now());
  const honeypotRef = useRef(null);
  const check = () => {
    if (honeypotRef.current && honeypotRef.current.value.trim().length > 0) {
      return { ok: false, reason: "honeypot" };
    }
    if (Date.now() - mountedAt.current < minMs) {
      return { ok: false, reason: "timing" };
    }
    return { ok: true };
  };
  return { honeypotRef, check };
}
const honeypotFieldProps = {
  type: "text",
  name: "company_website",
  // generic plausible name bots target
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
export {
  Checkbox as C,
  honeypotFieldProps as h,
  useFormGuard as u
};
