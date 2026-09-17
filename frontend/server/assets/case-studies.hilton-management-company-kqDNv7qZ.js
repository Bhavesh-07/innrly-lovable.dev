import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, DollarSign, Building2, CheckCircle2, Quote } from "lucide-react";
import { S as Section, C as CtaBand } from "./Section-DP-l4DF_.js";
import { B as Breadcrumbs } from "./Breadcrumbs-CNu7uBt1.js";
import { I as IllustrativeBanner } from "./IllustrativeBanner-Bh3yoxGK.js";
import { B as Button } from "./router-uiSeds_Z.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
const metrics = [{
  icon: Clock,
  stat: "14 → ~6 days",
  label: "Month-end close"
}, {
  icon: DollarSign,
  stat: "1 FTE",
  label: "Reassigned from reformatting to analysis"
}, {
  icon: Building2,
  stat: "28",
  label: "Hotels on one nightly close"
}, {
  icon: CheckCircle2,
  stat: "10 wks",
  label: "Time to live across the portfolio"
}];
function CaseStudyPage() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsx(Breadcrumbs, { items: [{
      name: "Home",
      to: "/"
    }, {
      name: "Case Studies",
      to: "/case-studies"
    }, {
      name: "Hilton Management Co."
    }] }),
    /* @__PURE__ */ jsx(IllustrativeBanner, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-border/60", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent", children: "Case Study · Hilton Management Company" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl", children: "28 hotels, one close — in about a week, not two." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-3xl text-lg text-muted-foreground", children: "A Hilton-focused management company (Hampton, Hilton Garden Inn, Home2, Embassy Suites) consolidates OnQ and OPERA night audits, runs AP through a single approval queue, and ships owner financials inside the first week of every month." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
            "Get the same results ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-border bg-background/40", children: /* @__PURE__ */ jsx(Link, { to: "/integrations/opera", children: "See OPERA integration" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: metrics.map((m) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
      /* @__PURE__ */ jsx(m.icon, { className: "h-6 w-6 text-accent", "aria-hidden": true }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 text-3xl font-bold text-gradient", children: m.stat }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: m.label })
    ] }, m.label)) }) }),
    /* @__PURE__ */ jsx(Section, { className: "!pt-0", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "The problem" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "A 28-property Hilton management company was growing two hotels per quarter, but the corporate accounting team was already at capacity. Month-end took 14 days. Two people did almost nothing except reformat OnQ and OPERA reports for QuickBooks. AP invoices lived in three email inboxes and a shared drive." }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "·" }),
              " OnQ and OPERA outputs reformatted by hand into a corporate template."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "·" }),
              " AP invoices approved over email; no central audit trail."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "·" }),
              " Owner P&Ls sent on the 14th — too late to influence the next month."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "·" }),
              " Each new property added ~30 hours of monthly corporate work."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "The rollout" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Innrly connected to OnQ and OPERA across the portfolio in four weeks. AP automation went live in week six. The 28th property was on the same dashboard set by week ten. No flag exceptions, no IT lift on property." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "The results, 6 months in" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Month-end close runs in roughly 6 business days instead of 14. AP routes through one queue with property and GL-coded approvals. One of the two reformatting roles shifted into an analyst seat focused on labor and OTA trend work. Adding the 29th and 30th hotels added no new corporate headcount." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 aurora-card rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-accent", children: "By the numbers" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 grid gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "14 → ~6 days" }),
                " month-end close"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "1 FTE" }),
                " reassigned from reformatting to analysis"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "28 hotels" }),
                " on one consolidated nightly close"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "No new" }),
                " corporate headcount as portfolio grew"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx(Quote, { className: "h-6 w-6 text-accent", "aria-hidden": true }),
          /* @__PURE__ */ jsx("blockquote", { className: "mt-3 text-foreground", children: '"Growth used to mean hiring controllers. Now it means adding a property to a dashboard. The economics of the management contract changed."' }),
          /* @__PURE__ */ jsx("footer", { className: "mt-4 text-sm text-muted-foreground", children: "[CFO, Hilton-focused management company]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-surface/40 p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: "Portfolio snapshot" }),
          /* @__PURE__ */ jsxs("dl", { className: "mt-3 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Properties" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "28" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Segment" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "Hilton-focused" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Brands" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "Hampton, HGI, Home2, Embassy" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "PMS systems" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "OnQ, OPERA" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Time to live" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "10 weeks" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CtaBand, { title: "Scale your management company without scaling corporate headcount", subtitle: "20-minute walkthrough using a sample of your actual PMS and AP data.", primary: {
      to: "/contact",
      label: "Book a demo"
    }, secondary: {
      to: "/industries/select-service",
      label: "Select-service overview"
    } })
  ] });
}
export {
  CaseStudyPage as component
};
