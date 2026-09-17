import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, Building2, Leaf, FileSpreadsheet, PenLine, Check } from "lucide-react";
import { B as Button } from "./router-uiSeds_Z.js";
import { S as Section, a as SectionHeading, C as CtaBand } from "./Section-DP-l4DF_.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
const services = [{
  icon: ClipboardCheck,
  title: "Data verification",
  body: "Daily checks that PMS, accounting, payroll, and banking feeds reconcile — flagged anomalies sent to your team before close."
}, {
  icon: Building2,
  title: "Franchise reporting",
  body: "Royalty, marketing-fee, and brand-compliance reports prepared and filed on your reporting calendar."
}, {
  icon: Leaf,
  title: "Green Engage submissions",
  body: "Utility, water, and waste data captured monthly and uploaded to IHG Green Engage on schedule."
}, {
  icon: FileSpreadsheet,
  title: "CLC reconciliation",
  body: "CLC Lodging billing reconciled against PMS folios and disputed entries pursued on your behalf."
}, {
  icon: PenLine,
  title: "Manual entries",
  body: "Vendor invoices, journal entries, and one-off adjustments captured by Innrly so your AGM stops doing data entry and starts running the hotel."
}];
function Page() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Add-on service" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-4 text-4xl font-bold text-foreground sm:text-5xl", children: [
          "Beyond software — ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "done-for-you" }),
          " back-office work."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "The Accountability Pack is an optional per-property add-on. Our team handles the data verification, franchise filings, and manual entries your in-house staff doesn't have time for — using the same Innrly platform you already trust." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
            "Contact sales for pricing",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/pricing", children: "View Innrly plans" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "Per-property pricing varies by portfolio mix and service scope." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "What's included", title: "Five services your team stops doing the day you add the pack.", align: "center" }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cta", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5 text-primary-foreground", "aria-hidden": true }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold text-foreground", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.body })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "How it works", title: "A staffed extension of your back office.", align: "center" }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: [{
        n: "1",
        t: "Scope per property",
        b: "Pick the services you want per property — pack scales with portfolio size."
      }, {
        n: "2",
        t: "Onboard with Innrly",
        b: "Our team plugs into your Innrly tenant, PMS, and accounting platform within 14 days."
      }, {
        n: "3",
        t: "Monthly cadence",
        b: "Daily verifications, monthly franchise & Green Engage filings, and a close-of-month report to your CFO."
      }].map((s) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: [
          "Step ",
          s.n
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-2 text-base font-semibold text-foreground", children: s.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.b })
      ] }, s.n)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Who it's for", title: "When the pack pays for itself.", align: "center" }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-2", children: ["Portfolios growing faster than back-office headcount.", "Properties with IHG Green Engage or franchise reporting deadlines slipping.", "Operators with CLC Lodging exposure and recurring billing disputes.", "GMs spending more than two hours a week on manual data entry."].map((i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 aurora-card rounded-xl p-4", children: [
        /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent", "aria-hidden": true }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: i })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsx(CtaBand, { title: "Get per-property pricing for your portfolio.", subtitle: "Tell us your portfolio mix and reporting requirements — we'll quote within one business day.", primary: {
      to: "/contact",
      label: "Contact sales"
    }, secondary: {
      to: "/pricing",
      label: "View Innrly plans"
    } })
  ] });
}
export {
  Page as component
};
