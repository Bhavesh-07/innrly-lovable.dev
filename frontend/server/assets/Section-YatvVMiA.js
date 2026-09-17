import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { B as Button } from "./router-DU7xSoX0.js";
function Section({
  children,
  className = "",
  id,
  tone = "default"
}) {
  const toneCls = tone === "surface" ? "bg-surface/30 border-y border-border/40" : tone === "dark" ? "bg-background" : "";
  return /* @__PURE__ */ jsx("div", { className: toneCls, ...tone === "dark" ? { "data-glow": "dark" } : {}, children: /* @__PURE__ */ jsx(
    "section",
    {
      id,
      className: `mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ${className}`,
      children
    }
  ) });
}
function Eyebrow({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "inline-flex max-w-full items-center gap-3 text-xs font-semibold uppercase tracking-normal text-accent", children: [
    /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-normal normal-case text-accent", children }),
    /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-border", "aria-hidden": true })
  ] });
}
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}) {
  const a = align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";
  return /* @__PURE__ */ jsxs("div", { className: a, children: [
    eyebrow && /* @__PURE__ */ jsx(Eyebrow, { children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl", children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: description })
  ] });
}
function CtaBand({
  title = "Ready to see Innrly with your data?",
  subtitle = "90-day free trial · No credit card required · Full feature access",
  primary = { to: "/contact", label: "Book a demo" },
  secondary = { to: "/pricing", label: "Compare plans" }
}) {
  return /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-hero p-10 text-center sm:p-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-0 opacity-30", "aria-hidden": true, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-base text-muted-foreground", children: subtitle }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsxs(Link, { to: primary.to, children: [
          primary.label,
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-border bg-background/40", children: /* @__PURE__ */ jsx(Link, { to: secondary.to, children: secondary.label }) })
      ] })
    ] })
  ] }) });
}
export {
  CtaBand as C,
  Eyebrow as E,
  Section as S,
  SectionHeading as a
};
