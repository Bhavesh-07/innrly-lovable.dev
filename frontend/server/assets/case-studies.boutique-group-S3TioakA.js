import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, DollarSign, TrendingDown, Quote } from "lucide-react";
import { S as Section, C as CtaBand } from "./Section-CUtP8UOj.js";
import { B as Breadcrumbs } from "./Breadcrumbs-CNu7uBt1.js";
import { I as IllustrativeBanner } from "./IllustrativeBanner-Bh3yoxGK.js";
import { B as Button } from "./router-CCF17sca.js";
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
  icon: CheckCircle2,
  stat: "7 → 1",
  label: "PMSes consolidated into one view"
}, {
  icon: Clock,
  stat: "8 days",
  label: "Month-end close · down from 18"
}, {
  icon: DollarSign,
  stat: "$15K–25K",
  label: "Net annual savings vs. prior bookkeeping setup"
}, {
  icon: TrendingDown,
  stat: "2",
  label: "Back-office people for 6 properties"
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
      name: "Boutique Group"
    }] }),
    /* @__PURE__ */ jsx(IllustrativeBanner, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-border/60", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent", children: "Case Study · Independent Boutique" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl", children: "Seven PMSes, one consolidated P&L — by a two-person back office." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-3xl text-lg text-muted-foreground", children: "A six-property independent boutique group (lifestyle hotels across three states, each running whichever PMS the GM inherited) uses Innrly to consolidate everything into one P&L — replacing a fractional CFO's manual Excel workbook and an outsourced bookkeeping firm." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
            "Get the same results ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-border bg-background/40", children: /* @__PURE__ */ jsx(Link, { to: "/solutions/business-intelligence", children: "See the BI dashboard" }) })
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
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Six independent hotels acquired over four years, each on a different PMS — Cloudbeds, Mews, ThinkReservations, Maestro, SkyTouch, RoomKeyPMS, and one still running spreadsheets at the front desk. A fractional CFO rebuilt a consolidated P&L in Excel every month. Outsourced bookkeeping was a meaningful monthly line item and always a step behind." }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "·" }),
              " Seven different PMS exports, normalized by hand into one chart of accounts."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "·" }),
              " Owner reporting in PDFs assembled from three different formats."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "·" }),
              " No real-time view — the CFO learned about issues 30 days late."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "·" }),
              " Independent brand standards meant no shared back-office infrastructure to lean on."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "The rollout" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Innrly's PMS-agnostic ingest connected all seven systems in five weeks. A single USALI-aligned chart of accounts was mapped per property. Owner reporting moved from PDFs-by-email to a branded portal. The outsourced bookkeeping firm was replaced by one in-house controller plus Innrly. Total elapsed: nine weeks." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "The results, 12 months in" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Month-end close went from 18 days to about 8. The back office runs on two people — a controller and a part-time AP clerk — for six hotels. The outsourced bookkeeping firm was replaced by Innrly plus the in-house controller hire, for a net annual savings in the $15K–25K range depending on the month's AP volume. The CFO sees portfolio P&L within a day or two of month-end, in time for the ownership call." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 aurora-card rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-accent", children: "By the numbers" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 grid gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "7 PMSes" }),
                " consolidated into one"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "18 → ~8 days" }),
                " month-end close"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "$15K–25K/yr" }),
                " net savings vs. prior setup"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "2 people" }),
                " running back office for 6 hotels"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx(Quote, { className: "h-6 w-6 text-accent", "aria-hidden": true }),
          /* @__PURE__ */ jsx("blockquote", { className: "mt-3 text-foreground", children: '"Every other vendor told us to standardize on one PMS first. Innrly was the only one willing to meet us where we actually were."' }),
          /* @__PURE__ */ jsx("footer", { className: "mt-4 text-sm text-muted-foreground", children: "[CFO, independent boutique hotel group]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-surface/40 p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: "Portfolio snapshot" }),
          /* @__PURE__ */ jsxs("dl", { className: "mt-3 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Properties" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "6" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Segment" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "Independent boutique" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Brands" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "Independent (lifestyle)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "PMSes" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "7 different" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Time to live" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "9 weeks" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CtaBand, { title: "Got a mixed-PMS portfolio? That's exactly what we're built for.", subtitle: "20-minute walkthrough — bring your messiest exports.", primary: {
      to: "/contact",
      label: "Book a demo"
    }, secondary: {
      to: "/integrations",
      label: "See supported PMSes"
    } })
  ] });
}
export {
  CaseStudyPage as component
};
