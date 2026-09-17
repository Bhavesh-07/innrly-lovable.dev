import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { AlertTriangle, Clock, Check, LineChart, Sunrise, FileText, Calendar, Mail, BarChart3, Receipt, Wallet, PlugZap, ShieldCheck, Smartphone, Users, ScanLine, Workflow, CreditCard, ArrowRight, BadgeCheck, Lock } from "lucide-react";
import { S as Section, C as CtaBand } from "./Section-DfKao03n.js";
import { B as BIMorningBriefing } from "./BIMorningBriefing-Dzm7rWj2.js";
import { E as ExceptionsLedger } from "./ExceptionsLedger-iGrpzNGg.js";
import { O as OpsNightPack } from "./OpsNightPack-Df-6kine.js";
import "./router-dBewJNnO.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
function DailyLaborSnapshot() {
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -inset-8 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-chart-4/70" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-success/70" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ml-3 text-xs font-medium text-muted-foreground", children: "Innrly Shift · Daily snapshot · 11:42 AM" }),
        /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-success" })
          ] }),
          "LIVE"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-2 rounded-xl border border-border/60 bg-surface/60 p-3", children: [
          /* @__PURE__ */ jsx(Kpi, { label: "Labor %", value: "29.4%", sub: "target 31%", good: true }),
          /* @__PURE__ */ jsx(Kpi, { label: "MPOR", value: "24.6", sub: "std 26", good: true }),
          /* @__PURE__ */ jsx(Kpi, { label: "Hours today", value: "187", sub: "vs fcst 195", good: true }),
          /* @__PURE__ */ jsx(Kpi, { label: "OT risk", value: "2", sub: "of 14 on shift", warn: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 rounded-xl border border-border/60 bg-surface/60 p-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "Housekeeping · 18 rooms attendants" }),
            /* @__PURE__ */ jsx("span", { className: "text-[9px] text-muted-foreground", children: "vs occupancy 82%" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-1.5", children: [
            /* @__PURE__ */ jsx(Attendant, { name: "M. Reyes", rooms: 14, mpor: 23.1, pct: 92, good: true }),
            /* @__PURE__ */ jsx(Attendant, { name: "L. Patel", rooms: 12, mpor: 25.4, pct: 88, good: true }),
            /* @__PURE__ */ jsx(Attendant, { name: "J. Owusu", rooms: 9, mpor: 31.2, pct: 62, warn: true }),
            /* @__PURE__ */ jsx(Attendant, { name: "S. Kim", rooms: 13, mpor: 24, pct: 90, good: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-chart-4/30 bg-chart-4/5 p-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3.5 w-3.5 text-chart-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-chart-4", children: "OT guardrail" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 text-[11px] font-semibold text-foreground", children: "D. Cole · 38.5 / 40 hrs" }),
            /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[10px] text-muted-foreground", children: "Flagged at clock-in · GM notified" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border/60 bg-surface/60 p-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5 text-accent" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "Face-ID clock-ins" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-baseline justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-foreground", children: "14" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-success", children: "100% verified" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-[9px] text-muted-foreground", children: "No buddy-punches today" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground", children: "GM mobile · 5 min" }),
      /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-foreground", children: "Done before lunch" })
    ] })
  ] });
}
function Kpi({
  label,
  value,
  sub,
  good,
  warn
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-border/40 bg-background/40 p-2", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-base font-bold text-foreground", children: value }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `text-[9px] font-medium ${warn ? "text-chart-4" : good ? "text-success" : "text-muted-foreground"}`,
        children: sub
      }
    )
  ] });
}
function Attendant({
  name,
  rooms,
  mpor,
  pct,
  good,
  warn
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx("span", { className: "w-20 text-[10px] font-semibold text-foreground", children: name }),
    /* @__PURE__ */ jsxs("span", { className: "w-12 text-[10px] text-muted-foreground", children: [
      rooms,
      " rms"
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "w-14 text-[10px] text-muted-foreground", children: [
      mpor,
      " mpor"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-hidden rounded-full bg-border/40", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: `h-1.5 rounded-full ${warn ? "bg-chart-4" : "bg-accent"}`,
        style: { width: `${pct}%` }
      }
    ) }),
    good && /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-success" }),
    warn && /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-chart-4" })
  ] });
}
const stages = [{
  icon: BarChart3,
  title: "Business Intelligence",
  blurb: "Portfolio KPIs, forward pace, and rate intel — without a BI team.",
  outcome: {
    stat: "40+ hrs",
    label: "saved per property each month"
  },
  artifact: BIMorningBriefing,
  link: {
    to: "/solutions/business-intelligence",
    label: "See BI in action"
  },
  items: [{
    icon: LineChart,
    name: "Pulse Dashboard",
    body: "Real-time portfolio KPIs across every property — occupancy, ADR, RevPAR, GOP.",
    plan: "Starter"
  }, {
    icon: Sunrise,
    name: "Early Bird",
    body: "Previous-day KPIs delivered each morning and nightly GL entries pushed straight to your accounting system.",
    plan: "Starter"
  }, {
    icon: FileText,
    name: "STR Report integration",
    body: "Auto-import via STR API or upload the weekly file manually. Benchmark against your comp set either way.",
    plan: "Professional"
  }, {
    icon: Calendar,
    name: "Calendar View",
    body: "Forward-looking occupancy, ADR, and RevPAR by property.",
    plan: "Starter"
  }, {
    icon: LineChart,
    name: "Rate Shop",
    body: "Built in-house — no third-party fees. Automated competitor rate monitoring by date and room type.",
    plan: "Professional"
  }, {
    icon: Mail,
    name: "Daily email digest",
    body: "Pacing, variances, exceptions, and rate-shop in your inbox every morning.",
    plan: "Starter"
  }]
}, {
  icon: ShieldCheck,
  title: "Financial Control",
  blurb: "Close faster, catch what humans miss, and keep your GL clean.",
  outcome: {
    stat: "3 days",
    label: "faster month-end close"
  },
  artifact: ExceptionsLedger,
  link: {
    to: "/solutions/financial-control",
    label: "See Financial Control"
  },
  items: [{
    icon: Receipt,
    name: "Exceptions Dashboard",
    body: "Isolates each report and surfaces only the transactions that need attention.",
    plan: "Starter"
  }, {
    icon: FileText,
    name: "Month-end reconciliation",
    body: "Automated PMS-to-accounting reconciliation packets for close.",
    plan: "Starter"
  }, {
    icon: Receipt,
    name: "OTA Reconciliation",
    body: "Catch commission errors, chargebacks, and adjustments line by line.",
    plan: "Professional"
  }, {
    icon: Wallet,
    name: "A/P Automation",
    body: "Invoice capture, OCR, GL-coding, and approval workflows.",
    plan: "Starter"
  }, {
    icon: FileText,
    name: "A/R Aging Report",
    body: "PMS-driven A/R aging by property and guest folio — no spreadsheets, no city-ledger blind spots.",
    plan: "Professional"
  }, {
    icon: PlugZap,
    name: "Chart-of-Accounts mapper",
    body: "Map your CoA once — Innrly handles GL coding across every property.",
    plan: "Starter"
  }]
}, {
  icon: Users,
  title: "Labor & Workforce",
  blurb: "Schedule, clock, and screen your team — tied to demand and revenue.",
  outcome: {
    stat: "2%",
    label: "average labor cost reduction"
  },
  artifact: DailyLaborSnapshot,
  link: {
    to: "/solutions/innrly-shift",
    label: "See Innrly Shift"
  },
  items: [{
    icon: Clock,
    name: "Labor Snapshot",
    body: "5-minute daily labor numbers tied to occupancy, ADR, and RevPAR.",
    plan: "Starter"
  }, {
    icon: Smartphone,
    name: "TimeClock + Face-ID",
    body: "Prevent buddy-punching at every property.",
    plan: "Add-on"
  }, {
    icon: Calendar,
    name: "Scheduler",
    body: "Part of the Labor module — schedule front desk, housekeeping, and F&B by forecasted occupancy.",
    plan: "Add-on"
  }, {
    icon: ShieldCheck,
    name: "Hiring & Screening",
    body: "Background checks, HRIS, and credit data via Shield Screening, isolved, and TransUnion — native to Innrly.",
    plan: "Professional"
  }]
}, {
  icon: Workflow,
  title: "Operations Automation",
  blurb: "Night audit, invoice capture, and bank recon — running while you sleep.",
  outcome: {
    stat: "100%",
    label: "of night audits automated"
  },
  artifact: OpsNightPack,
  link: {
    to: "/solutions/operations-automation",
    label: "See Operations Automation"
  },
  items: [{
    icon: FileText,
    name: "Night Audit+ with calendar",
    body: "Automated EOD with variance flags and calendar access to every night's packet.",
    plan: "Starter"
  }, {
    icon: Mail,
    name: "Email-in invoice capture",
    body: "Forward any invoice to a property mailbox — Innrly OCRs, GL-codes, and routes it for approval.",
    plan: "Starter"
  }, {
    icon: ScanLine,
    name: "Vendor portal auto-pull",
    body: "Grant Innrly credentials for each supported vendor portal and invoices land in A/P automatically.",
    plan: "Professional"
  }, {
    icon: FileText,
    name: "Document Vault",
    body: "PMS files and invoices stored and searchable by property, date, or vendor.",
    plan: "Starter"
  }, {
    icon: Receipt,
    name: "Bank reconciliation",
    body: "Match deposits to PMS automatically via Plaid bank feeds.",
    plan: "Starter"
  }]
}];
const mobileItems = [{
  icon: LineChart,
  name: "Mobile dashboards",
  body: "Pulse, Calendar, and Labor Snapshot on iOS and Android.",
  plan: "Professional"
}, {
  icon: BadgeCheck,
  name: "Approvals on the go",
  body: "Approve invoices and payment runs from anywhere.",
  plan: "Professional"
}, {
  icon: Mail,
  name: "Push alerts",
  body: "Variances, exceptions, and chargebacks pushed in real time.",
  plan: "Professional"
}, {
  icon: Clock,
  name: "Manager TimeClock",
  body: "Approve punches and edits without a desk.",
  plan: "Professional"
}];
const securityItems = [{
  icon: ShieldCheck,
  name: "Plaid-secured bank feeds",
  body: "Innrly is an official Plaid partner — credentials never touch our servers.",
  plan: "Starter"
}, {
  icon: Users,
  name: "Role-based access",
  body: "Property, region, and corporate roles with granular permissions.",
  plan: "Starter"
}, {
  icon: FileText,
  name: "Audit log",
  body: "Every approval, edit, and payment is timestamped and attributable.",
  plan: "Starter"
}, {
  icon: Lock,
  name: "SSO & 2FA",
  body: "Enterprise SSO and two-factor authentication available.",
  plan: "Professional"
}];
const addOns = [{
  icon: CreditCard,
  name: "Innrly Pay",
  tagline: "Virtual Cards + ACH for A/P",
  body: "Pay vendors with Virtual Cards, ACH, or check. Fraud protection and rebate built in. Included free with Professional Annual; available as an add-on on other plans.",
  to: "/solutions/innrly-pay"
}, {
  icon: Clock,
  name: "Innrly Shift",
  tagline: "TimeClock + Face-ID + Scheduling",
  body: "Face-ID time capture, smart scheduling, and labor analytics — built for multi-property hotel staffing.",
  to: "/solutions/innrly-shift"
}];
function Reveal({
  children,
  delay = 0
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
          break;
        }
      }
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -80px 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { ref, style: {
    transition: "opacity 700ms ease-out, transform 700ms ease-out",
    transitionDelay: `${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)"
  }, children });
}
function Stage({
  stage,
  index
}) {
  const Artifact = stage.artifact;
  const reverse = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");
  return /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs(Reveal, { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute -top-8 left-0 select-none font-serif text-[110px] leading-none text-accent/10 sm:-top-12 sm:text-[160px]", style: {
        fontFamily: '"Instrument Serif", serif'
      }, children: num }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cta", children: /* @__PURE__ */ jsx(stage.icon, { className: "h-5 w-5 text-primary-foreground", "aria-hidden": true }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-accent", children: [
              "Stage ",
              num
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "mt-1 text-2xl font-bold text-foreground sm:text-3xl", children: stage.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 max-w-xl text-sm text-muted-foreground", children: stage.blurb })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-accent/30 bg-accent/5 px-4 py-2 text-right", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gradient", children: stage.outcome.stat }),
          /* @__PURE__ */ jsx("div", { className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground", children: stage.outcome.label })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `mt-8 grid gap-8 lg:grid-cols-2 lg:items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:block", children: [
        /* @__PURE__ */ jsx("ul", { className: "divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/40", children: stage.items.map((it) => /* @__PURE__ */ jsxs("li", { className: "group flex items-start gap-3 px-5 py-4 transition-colors hover:bg-accent/5", children: [
          /* @__PURE__ */ jsx(it.icon, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent", "aria-hidden": true }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-foreground", children: it.name }),
              it.plan && /* @__PURE__ */ jsx("span", { className: "inline-flex shrink-0 items-center rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent", children: it.plan })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: it.body })
          ] })
        ] }, it.name)) }),
        /* @__PURE__ */ jsxs(Link, { to: stage.link.to, className: "mt-5 inline-flex items-center gap-1.5 rounded-full border-2 border-accent/50 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/20", children: [
          stage.link.label,
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": true })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-4 shadow-[0_20px_60px_-30px_color-mix(in_oklab,var(--accent)_60%,transparent)] sm:p-6", children: /* @__PURE__ */ jsx(Artifact, {}) }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: stage.items.map((it) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(it.icon, { className: "h-5 w-5 text-accent", "aria-hidden": true }),
            it.plan && /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent", children: it.plan })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 text-base font-semibold text-foreground", children: it.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: it.body })
        ] }, it.name)) }),
        /* @__PURE__ */ jsxs(Link, { to: stage.link.to, className: "mt-5 inline-flex items-center gap-1.5 rounded-full border-2 border-accent/50 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/20", children: [
          stage.link.label,
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": true })
        ] })
      ] })
    ] })
  ] }) });
}
function AlsoIncluded() {
  const cols = [{
    icon: Smartphone,
    title: "Mobile",
    blurb: "Run the back office from your phone.",
    items: mobileItems
  }, {
    icon: Lock,
    title: "Security & Compliance",
    blurb: "Bank-grade rails with role-based access.",
    items: securityItems
  }];
  return /* @__PURE__ */ jsx(Section, { tone: "surface", children: /* @__PURE__ */ jsxs(Reveal, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between gap-4", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-accent", children: "Also included" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-1 text-2xl font-bold text-foreground sm:text-3xl", children: "Table-stakes, table-set." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-6 md:grid-cols-2", children: cols.map((c) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/60 bg-card/40 p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsx(c.icon, { className: "h-4 w-4 text-accent", "aria-hidden": true }),
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-foreground", children: c.title })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: c.blurb }),
      /* @__PURE__ */ jsx("ul", { className: "mt-4 divide-y divide-border/40", children: c.items.map((it) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 py-2.5", children: [
        /* @__PURE__ */ jsx(it.icon, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground", "aria-hidden": true }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground", children: it.name }),
            it.plan && /* @__PURE__ */ jsx("span", { className: "shrink-0 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: it.plan })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: it.body })
        ] })
      ] }, it.name)) })
    ] }, c.title)) })
  ] }) });
}
function FeaturesPage() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold text-foreground sm:text-5xl", children: [
          "Everything you need to ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "run a hotel portfolio." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Four core suites, plus mobile, security, and two add-ons — Innrly Pay and Innrly Shift. Built for hospitality from day one." })
      ] })
    ] }),
    stages.map((s, i) => /* @__PURE__ */ jsx(Stage, { stage: s, index: i }, s.title)),
    /* @__PURE__ */ jsx(AlsoIncluded, {}),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-cta", children: /* @__PURE__ */ jsx(CreditCard, { className: "h-5 w-5 text-primary-foreground", "aria-hidden": true }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground sm:text-3xl", children: "Two add-ons" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Bolt these onto any plan — or get Innrly Pay free with Professional Annual." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-5 md:grid-cols-2", children: addOns.map((a) => /* @__PURE__ */ jsxs(Link, { to: a.to, className: "group flex flex-col rounded-2xl border border-accent/30 bg-card p-6 transition-colors hover:border-accent/60", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(a.icon, { className: "h-6 w-6 text-accent", "aria-hidden": true }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", children: a.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-medium uppercase tracking-wider text-accent", children: a.tagline })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 flex-1 text-sm text-muted-foreground", children: a.body }),
        /* @__PURE__ */ jsxs("span", { className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent", children: [
          "Learn more about ",
          a.name,
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5", "aria-hidden": true })
        ] })
      ] }, a.name)) })
    ] }) }),
    /* @__PURE__ */ jsx(CtaBand, {})
  ] });
}
export {
  FeaturesPage as component
};
