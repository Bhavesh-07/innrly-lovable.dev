import { jsxs, jsx } from "react/jsx-runtime";
import { a as faqs } from "./router-eu0xRd06.js";
import { useState, useMemo } from "react";
import { Calculator, Clock, DollarSign, TrendingUp } from "lucide-react";
import { S as Section, a as SectionHeading, C as CtaBand } from "./Section-C0oe_XKQ.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-uvhyb98P.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
import "@radix-ui/react-accordion";
const fmtUSD = (n) => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
}).format(n);
function Page() {
  const [properties, setProperties] = useState(8);
  const [hourlyCost, setHourlyCost] = useState(35);
  const [revenuePerProperty, setRevenuePerProperty] = useState(24e5);
  const {
    hoursSavedYr,
    laborSavingsYr,
    revenueRecoveredYr,
    totalYr,
    innrlyCostYr
  } = useMemo(() => {
    const HOURS_PER_WEEK = 10;
    const REVENUE_RECOVERY_PCT = 25e-4;
    const hoursSavedYr2 = properties * HOURS_PER_WEEK * 52;
    const laborSavingsYr2 = hoursSavedYr2 * hourlyCost;
    const revenueRecoveredYr2 = properties * revenuePerProperty * REVENUE_RECOVERY_PCT;
    const totalYr2 = laborSavingsYr2 + revenueRecoveredYr2;
    const innrlyCostYr2 = properties * 199 * 12;
    return {
      hoursSavedYr: hoursSavedYr2,
      laborSavingsYr: laborSavingsYr2,
      revenueRecoveredYr: revenueRecoveredYr2,
      totalYr: totalYr2,
      innrlyCostYr: innrlyCostYr2
    };
  }, [properties, hourlyCost, revenuePerProperty]);
  const roiX = innrlyCostYr > 0 ? totalYr / innrlyCostYr : 0;
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "ROI calculator" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-4 text-4xl font-bold text-foreground sm:text-5xl", children: [
          "See your ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "return" }),
          " in 30 seconds."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Built from real multi-property operator data — hours saved, revenue recovered, and total annual return on the Innrly subscription." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-[1fr_1.1fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6 sm:p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cta", children: /* @__PURE__ */ jsx(Calculator, { className: "h-5 w-5 text-primary-foreground", "aria-hidden": true }) }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Your portfolio" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-6", children: [
          /* @__PURE__ */ jsx(Field, { label: "Number of properties", value: properties, onChange: setProperties, min: 1, max: 100, step: 1, suffix: "hotels" }),
          /* @__PURE__ */ jsx(Field, { label: "Fully-loaded back-office hourly cost", value: hourlyCost, onChange: setHourlyCost, min: 20, max: 120, step: 1, prefix: "$", suffix: "/ hour" }),
          /* @__PURE__ */ jsx(Field, { label: "Annual revenue per property", value: revenuePerProperty, onChange: setRevenuePerProperty, min: 5e5, max: 2e7, step: 1e5, prefix: "$" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs text-muted-foreground", children: "Calculator assumes 10 hours/week saved per property (operator midpoint) and 25 bps revenue recovery from OTA commission clawback + card chargeback auditing." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(Stat, { icon: Clock, label: "Hours saved annually", value: `${hoursSavedYr.toLocaleString()} hrs`, accent: true }),
        /* @__PURE__ */ jsx(Stat, { icon: DollarSign, label: "Labor savings / year", value: fmtUSD(laborSavingsYr) }),
        /* @__PURE__ */ jsx(Stat, { icon: TrendingUp, label: "Revenue recovered / year", value: fmtUSD(revenueRecoveredYr) }),
        /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl border-2 border-accent/40 p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Total annual return" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-4xl font-bold text-gradient sm:text-5xl", children: fmtUSD(totalYr) }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm text-muted-foreground", children: [
            "Innrly cost:",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "font-semibold text-foreground", children: [
              fmtUSD(innrlyCostYr),
              "/yr"
            ] }),
            " ·",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "font-semibold text-foreground", children: [
              roiX.toFixed(1),
              "× ROI"
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { className: "py-8", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "The math", title: "Where the savings come from." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-6 md:grid-cols-3", children: [{
        t: "Night-audit + reconciliation",
        b: "8–10 hrs/wk per property saved on PMS-to-bank, OTA, and credit card reconciliation."
      }, {
        t: "A/P automation",
        b: "Invoice capture, GL coding, approval, and Virtual Card pay — replaces manual A/P weeks."
      }, {
        t: "OTA commission audit",
        b: "25–50 bps of rooms revenue typically recovered from over-billed OTA commissions."
      }].map((c) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground", children: c.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: c.b })
      ] }, c.t)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-8", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Common questions", title: "ROI calculator FAQ" }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto mt-8 max-w-3xl", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqs.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `q-${i}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-base font-semibold text-foreground", children: f.q }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: f.a })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsx(CtaBand, { title: "Want a tailored ROI on your portfolio?", subtitle: "20-minute walkthrough on your data. No slides, no commitment.", primary: {
      to: "/contact",
      label: "Book a walkthrough"
    }, secondary: {
      to: "/pricing",
      label: "View pricing"
    } })
  ] });
}
function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-foreground", children: label }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-semibold text-accent", children: [
        prefix,
        value.toLocaleString(),
        suffix ? ` ${suffix}` : ""
      ] })
    ] }),
    /* @__PURE__ */ jsx("input", { type: "range", min, max, step, value, onChange: (e) => onChange(Number(e.target.value)), className: "mt-3 w-full accent-accent", "aria-label": label })
  ] });
}
function Stat({
  icon: Icon,
  label,
  value,
  accent = false
}) {
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-4 rounded-2xl border p-5 ${accent ? "border-accent/40 bg-accent/5" : "border-border/60 bg-surface/30"}`, children: [
    /* @__PURE__ */ jsx("div", { className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cta", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-primary-foreground", "aria-hidden": true }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-2xl font-bold text-foreground", children: value })
    ] })
  ] });
}
export {
  Page as component
};
