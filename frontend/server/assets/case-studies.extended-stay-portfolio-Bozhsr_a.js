import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, TrendingDown, Clock, DollarSign, CheckCircle2, Quote } from "lucide-react";
import { S as Section, C as CtaBand } from "./Section-YatvVMiA.js";
import { B as Breadcrumbs } from "./Breadcrumbs-CNu7uBt1.js";
import { I as IllustrativeBanner } from "./IllustrativeBanner-Bh3yoxGK.js";
import { B as Button } from "./router-DU7xSoX0.js";
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
  icon: TrendingDown,
  stat: "8–12%",
  label: "MPOR reduction across the portfolio"
}, {
  icon: Clock,
  stat: "7 days",
  label: "Month-end close (was 11)"
}, {
  icon: DollarSign,
  stat: "$7K–15K",
  label: "Annual labor savings per hotel"
}, {
  icon: CheckCircle2,
  stat: "6 wks",
  label: "Time to live across 18 hotels"
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
      name: "Extended-Stay Portfolio"
    }] }),
    /* @__PURE__ */ jsx(IllustrativeBanner, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-border/60", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent", children: "Case Study · Extended-Stay" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl", children: "Fewer housekeeping minutes per occupied room — across 18 extended-stay hotels." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-3xl text-lg text-muted-foreground", children: "An 18-property extended-stay operator (Residence Inn, TownePlace, Home2, Homewood) uses Innrly to normalize long-folio revenue, model weekly-clean MPOR correctly, and deliver consolidated USALI owner packages inside the first week of every month." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
            "Get the same results ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-border bg-background/40", children: /* @__PURE__ */ jsx(Link, { to: "/industries/extended-stay", children: "Extended-stay overview" }) })
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
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Extended-stay economics are different. Long-folio guests skew average length of stay past 14 nights, weekly-clean schedules invalidate daily-MPOR benchmarks, and tax treatment changes after 30 days. Reporting tools built for transient hotels missed all three." }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "·" }),
              " Long-stay tax exemption posted manually after day 30, often late."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "·" }),
              " Daily MPOR benchmarks misleading on weekly-clean schedules — couldn't tell which house attendants were over/under standard."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "·" }),
              " Owner packages reconciled across two PMSes (FOSSE + OnQ) by hand."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "·" }),
              " Month-end close took 11 days; corporate had room for 5."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "The rollout" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Innrly connected to FOSSE (Marriott extended-stay), OnQ (Hilton), and the shared payroll system in three weeks. Weekly-clean MPOR was modeled as a 7-day rolling window matched to scheduled clean days. Long-stay tax exemption was automated based on day-31 detection in the folio. Full cutover at week six." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "The results, 9 months in" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "MPOR dropped roughly 8–12% portfolio-wide — not because attendants got faster, but because the schedule finally matched the work (weekly-clean shifts no longer measured against daily-clean standards). Long-stay tax posts the day the guest qualifies. Month-end close moved from 11 days to about 7. Owner-reporting headcount stayed flat while the portfolio grew from 12 to 18 hotels." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 aurora-card rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-accent", children: "By the numbers" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 grid gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "8–12%" }),
                " MPOR reduction"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "11 → ~7 days" }),
                " month-end close"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "$7K–15K" }),
                " labor savings per hotel / year"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-foreground", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "No new" }),
                " back-office hires as portfolio grew"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx(Quote, { className: "h-6 w-6 text-accent", "aria-hidden": true }),
          /* @__PURE__ */ jsx("blockquote", { className: "mt-3 text-foreground", children: '"Nobody else modeled weekly-clean MPOR correctly. Once Innrly fixed that, the housekeeping conversation with my GMs completely changed."' }),
          /* @__PURE__ */ jsx("footer", { className: "mt-4 text-sm text-muted-foreground", children: "[VP of Operations, extended-stay management company]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-surface/40 p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: "Portfolio snapshot" }),
          /* @__PURE__ */ jsxs("dl", { className: "mt-3 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Properties" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "18" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Segment" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "Extended-stay" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Brands" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "Marriott + Hilton" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "PMS" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "FOSSE / OnQ" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Time to live" }),
              /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: "6 weeks" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CtaBand, { title: "Run the same playbook on your extended-stay portfolio", subtitle: "20-minute walkthrough using a sample of your actual PMS, payroll, and housekeeping data.", primary: {
      to: "/contact",
      label: "Book a demo"
    }, secondary: {
      to: "/industries/extended-stay",
      label: "Extended-stay overview"
    } })
  ] });
}
export {
  CaseStudyPage as component
};
