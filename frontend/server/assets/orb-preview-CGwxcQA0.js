import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as ProductOrb } from "./ProductOrb-BC39IRy6.js";
import { B as Button } from "./router-CCF17sca.js";
import { ArrowLeft } from "lucide-react";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
const variants = [{
  id: "reconciliation",
  name: "Reconciliation",
  description: "Cyan to Indigo to Violet (the brain)"
}, {
  id: "intelligence",
  name: "Business Intelligence",
  description: "Emerald to Teal to Cyan (growth)"
}, {
  id: "pay",
  name: "Innrly Pay",
  description: "Aqua to Blue (money)"
}, {
  id: "vault",
  name: "Document Vault",
  description: "Violet to Deep Blue to Silver (trust)"
}, {
  id: "control",
  name: "Financial Control",
  description: "Sapphire to Steel Blue to Ice"
}, {
  id: "labor",
  name: "Labor & Workforce",
  description: "Peach to Coral to Rose"
}, {
  id: "ops",
  name: "Operations Automation",
  description: "Lime to Chartreuse to Emerald"
}, {
  id: "shift",
  name: "Innrly Shift",
  description: "Royal Indigo to Sapphire"
}, {
  id: "steel",
  name: "Muted Steel",
  description: "Generic fallback"
}, {
  id: "doc",
  name: "Document Vault (slate)",
  description: "Slate blue to ice"
}, {
  id: "expense",
  name: "Expense Entries",
  description: "Muted amber/gold"
}, {
  id: "guest",
  name: "Guest Experience",
  description: "Soft rose/pink"
}, {
  id: "accountability",
  name: "Accountability",
  description: "Muted teal/mint"
}];
function OrbPreviewPage() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 flex items-center justify-between border-b border-border/40 pb-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Design System Preview" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-2 text-4xl font-bold leading-tight", children: "Product Orbs" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Signature visual identity system for core and supporting Innrly solutions." })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-border", children: /* @__PURE__ */ jsxs(Link, { to: "/", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        "Back to Home"
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-12", children: variants.map((v) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/40 bg-surface/30 p-6 md:p-8 backdrop-blur", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 flex flex-col md:flex-row md:items-center md:justify-between border-b border-border/20 pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-foreground capitalize", children: v.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: v.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 md:mt-0 text-xs font-mono text-accent", children: [
          'variant="',
          v.id,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-3 items-center justify-items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsx(ProductOrb, { variant: v.id, size: "sm", label: "12", eyebrow: "Alert" }) }),
          /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-muted-foreground", children: 'size="sm" (96px)' })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-60 items-center justify-center", children: /* @__PURE__ */ jsx(ProductOrb, { variant: v.id, size: "md", label: v.name, sublabel: "Active Status" }) }),
          /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-muted-foreground", children: 'size="md" (200px)' })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-96 items-center justify-center", children: /* @__PURE__ */ jsx(ProductOrb, { variant: v.id, size: "lg", label: v.name, eyebrow: "Signature Upgrade", sublabel: "All systems nominal" }) }),
          /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-muted-foreground", children: 'size="lg" (360px)' })
        ] })
      ] })
    ] }, v.id)) })
  ] }) });
}
export {
  OrbPreviewPage as component
};
