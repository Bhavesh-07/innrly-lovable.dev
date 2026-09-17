import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button, p as faqs } from "./router-DU7xSoX0.js";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, DollarSign, Users, Building2, Check } from "lucide-react";
import { E as Eyebrow, S as Section, a as SectionHeading, C as CtaBand } from "./Section-YatvVMiA.js";
import { T as Testimonials } from "./Testimonials-CMTZr0Cp.js";
import { B as Breadcrumbs } from "./Breadcrumbs-CNu7uBt1.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-dWhoIN1P.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
import "@radix-ui/react-accordion";
const painPoints = [{
  title: "F&B GL coding that doesn't bury controllers",
  body: "Outlet-by-outlet F&B revenue, covers, and cost of sales flow into Innrly nightly — coded to USALI-aligned accounts without a controller re-keying POS exports."
}, {
  title: "Banquets and groups, reconciled the next morning",
  body: "Banquet event orders, room blocks, and group folio splits reconcile to the PMS and POS automatically — variances surface before month-end, not after."
}, {
  title: "Multi-outlet labor without payroll surprises",
  body: "Housekeeping, F&B, banquets, spa, and front office tracked separately with department-level MPOR and overtime alerts before the pay period closes."
}, {
  title: "Owner reporting auditors actually accept",
  body: "Monthly packages in true USALI 11th-edition format with departmental P&Ls, schedule of operated departments, and supporting reconciliations attached."
}];
const stats = [{
  icon: Clock,
  stat: "20–40 hrs",
  label: "Saved per full-service hotel each month"
}, {
  icon: DollarSign,
  stat: "0.5–2%",
  label: "F&B revenue recovered via reconciliation"
}, {
  icon: Users,
  stat: "USALI 11",
  label: "Aligned chart of accounts out of the box"
}, {
  icon: Building2,
  stat: "200+",
  label: "Hotels including resorts and conference centers"
}];
const checklist = ["OPERA, Infor HMS, Maestro, and StayNTouch night-audit ingestion", "POS integration (Micros Simphony, Toast, Squirrel) for outlet-level F&B", "Banquet event order reconciliation with PMS and catering systems", "USALI 11th-edition departmental P&L and schedules", "Spa, golf, parking, and resort fee revenue tracking", "Multi-outlet labor and overtime alerts by department"];
function FullServicePage() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsx(Breadcrumbs, { items: [{
      name: "Home",
      to: "/"
    }, {
      name: "Industries"
    }, {
      name: "Full-Service"
    }] }),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ jsx(Eyebrow, { children: "Industries · Full-Service & Resorts" }),
          /* @__PURE__ */ jsx("h1", { className: "mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl", children: "Full-service complexity, finally on rails." }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-muted-foreground", children: "Full-service hotels and resorts run more like four businesses stacked in one building — rooms, F&B, banquets, and ancillary. Innrly is the back-office layer that keeps all four reconciled, coded, and owner-ready." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
              "See it on your property ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-border bg-background/40", children: /* @__PURE__ */ jsx(Link, { to: "/solutions/business-intelligence", children: "See the BI layer" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-5", children: [
          /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5 text-accent", "aria-hidden": true }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 text-2xl font-bold text-gradient sm:text-3xl", children: s.stat }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: s.label })
        ] }, s.label)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Why full-service operators choose Innrly", title: "The four places full-service back offices bleed time", description: "And what Innrly does about each of them." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: painPoints.map((p) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-7", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: p.body })
      ] }, p.title)) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: "!pt-0", children: /* @__PURE__ */ jsx("div", { className: "rounded-3xl border border-border bg-surface/40 p-8 sm:p-12", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "What's included" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold text-foreground", children: "Built for hotels where F&B is a real line of business." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Innrly ships with the integrations and chart-of-accounts work full-service controllers usually pay a consulting firm to set up." })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: checklist.map((c) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-foreground", children: [
        /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent", "aria-hidden": true }),
        /* @__PURE__ */ jsx("span", { children: c })
      ] }, c)) })
    ] }) }) }),
    /* @__PURE__ */ jsxs(Section, { className: "!pt-0", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Common questions", title: "Full-service FAQ" }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto mt-8 max-w-3xl", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqs.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `q-${i}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-base font-semibold text-foreground", children: f.q }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: f.a })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(CtaBand, { title: "See Innrly on your full-service property", subtitle: "20-minute walkthrough using a sample of your actual PMS and POS data.", primary: {
      to: "/contact",
      label: "Book a demo"
    }, secondary: {
      to: "/industries/select-service",
      label: "Run select-service too?"
    } })
  ] });
}
export {
  FullServicePage as component
};
