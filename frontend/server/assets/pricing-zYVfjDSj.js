import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, Lock, Building2, Activity, Gauge, FileText, Receipt, Sunrise, LineChart, BookOpen, BarChart3, Wallet, Users, Star, Calendar, Smartphone, Phone, Mail, CreditCard, Sparkles, Check, ArrowRight } from "lucide-react";
import { t as track, B as Button } from "./router-uiSeds_Z.js";
import { S as Section, a as SectionHeading, C as CtaBand } from "./Section-DP-l4DF_.js";
import { L as LogosStrip } from "./LogosStrip-CjFqkZ97.js";
import { T as Testimonials } from "./Testimonials-CMTZr0Cp.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-D9tnnCMS.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
import "@radix-ui/react-accordion";
const ITEMS = [
  { icon: ShieldCheck, label: "SOC 2 aligned" },
  { icon: Lock, label: "Bank-grade encryption" },
  { icon: Building2, label: "Trusted across hotel portfolios" },
  { icon: Activity, label: "99.9% uptime target" }
];
function TrustBar() {
  return /* @__PURE__ */ jsx("div", { className: "border-y border-border/60 bg-surface/30", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4 sm:gap-6 sm:px-6 lg:px-8", children: ITEMS.map((i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
    /* @__PURE__ */ jsx(i.icon, { className: "h-4 w-4 shrink-0 text-accent", "aria-hidden": true }),
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-muted-foreground sm:text-sm", children: i.label })
  ] }, i.label)) }) });
}
const TILE_COLORS = {
  teal: {
    border: "border-teal-400",
    ring: "ring-teal-400/30",
    glow: "shadow-[0_0_24px_-6px_rgb(45_212_191/0.6)]",
    topBar: "bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400",
    topBarShadow: "shadow-[0_0_14px_rgb(45_212_191/0.8)]",
    iconBg: "bg-gradient-to-br from-teal-400 to-cyan-500 ring-teal-400/40",
    iconShadow: "shadow-[0_0_16px_-2px_rgb(45_212_191/0.7)]",
    dot: "bg-teal-400",
    dotPing: "bg-teal-400",
    dotShadow: "shadow-[0_0_8px_rgb(45_212_191/0.9)]",
    blob: "bg-teal-400/25",
    tagBg: "bg-teal-400/10",
    tagText: "text-teal-300"
  },
  violet: {
    border: "border-violet-400",
    ring: "ring-violet-400/30",
    glow: "shadow-[0_0_24px_-6px_rgb(167_139_250/0.6)]",
    topBar: "bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-400",
    topBarShadow: "shadow-[0_0_14px_rgb(167_139_250/0.8)]",
    iconBg: "bg-gradient-to-br from-violet-400 to-purple-500 ring-violet-400/40",
    iconShadow: "shadow-[0_0_16px_-2px_rgb(167_139_250/0.7)]",
    dot: "bg-violet-400",
    dotPing: "bg-violet-400",
    dotShadow: "shadow-[0_0_8px_rgb(167_139_250/0.9)]",
    blob: "bg-violet-400/25",
    tagBg: "bg-violet-400/10",
    tagText: "text-violet-300"
  },
  emerald: {
    border: "border-emerald-400",
    ring: "ring-emerald-400/30",
    glow: "shadow-[0_0_24px_-6px_rgb(52_211_153/0.6)]",
    topBar: "bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400",
    topBarShadow: "shadow-[0_0_14px_rgb(52_211_153/0.8)]",
    iconBg: "bg-gradient-to-br from-emerald-400 to-green-500 ring-emerald-400/40",
    iconShadow: "shadow-[0_0_16px_-2px_rgb(52_211_153/0.7)]",
    dot: "bg-emerald-400",
    dotPing: "bg-emerald-400",
    dotShadow: "shadow-[0_0_8px_rgb(52_211_153/0.9)]",
    blob: "bg-emerald-400/25",
    tagBg: "bg-emerald-400/10",
    tagText: "text-emerald-300"
  },
  amber: {
    border: "border-amber-400",
    ring: "ring-amber-400/30",
    glow: "shadow-[0_0_24px_-6px_rgb(251_191_36/0.6)]",
    topBar: "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400",
    topBarShadow: "shadow-[0_0_14px_rgb(251_191_36/0.8)]",
    iconBg: "bg-gradient-to-br from-amber-400 to-yellow-500 ring-amber-400/40",
    iconShadow: "shadow-[0_0_16px_-2px_rgb(251_191_36/0.7)]",
    dot: "bg-amber-400",
    dotPing: "bg-amber-400",
    dotShadow: "shadow-[0_0_8px_rgb(251_191_36/0.9)]",
    blob: "bg-amber-400/25",
    tagBg: "bg-amber-400/10",
    tagText: "text-amber-300"
  },
  rose: {
    border: "border-rose-400",
    ring: "ring-rose-400/30",
    glow: "shadow-[0_0_24px_-6px_rgb(251_113_133/0.6)]",
    topBar: "bg-gradient-to-r from-rose-400 via-pink-300 to-rose-400",
    topBarShadow: "shadow-[0_0_14px_rgb(251_113_133/0.8)]",
    iconBg: "bg-gradient-to-br from-rose-400 to-pink-500 ring-rose-400/40",
    iconShadow: "shadow-[0_0_16px_-2px_rgb(251_113_133/0.7)]",
    dot: "bg-rose-400",
    dotPing: "bg-rose-400",
    dotShadow: "shadow-[0_0_8px_rgb(251_113_133/0.9)]",
    blob: "bg-rose-400/25",
    tagBg: "bg-rose-400/10",
    tagText: "text-rose-300"
  }
};
const TILES = [{
  id: "pulse",
  title: "Pulse Dashboard",
  blurb: "Real-time portfolio heartbeat. Daily snapshots, calendar view, KPI rollups across every property.",
  icon: Gauge,
  inPlan: "starter",
  span: "md:col-span-6 md:row-span-2",
  feature: true,
  tags: ["Daily snapshot", "Calendar", "STR Report"],
  color: "teal"
}, {
  id: "audit",
  title: "Night Audit+",
  blurb: "Auto-pulled audits with variance flags before coffee.",
  icon: FileText,
  inPlan: "starter",
  span: "md:col-span-3 md:row-span-1",
  color: "teal"
}, {
  id: "ota",
  title: "OTA Reconciliation",
  blurb: "Matches Expedia, Booking, Airbnb to your ledger.",
  icon: Receipt,
  inPlan: "starter",
  span: "md:col-span-3 md:row-span-1",
  color: "emerald"
}, {
  id: "earlybird",
  title: "Early Bird",
  blurb: "Daily snapshot in your inbox before your first coffee.",
  icon: Sunrise,
  inPlan: "starter",
  span: "md:col-span-3 md:row-span-1",
  color: "violet"
}, {
  id: "str",
  title: "STR Report",
  blurb: "Benchmark occupancy, ADR, and RevPAR against your comp set.",
  icon: LineChart,
  inPlan: "starter",
  span: "md:col-span-3 md:row-span-1",
  color: "violet"
}, {
  id: "reports",
  title: "Reporting Library",
  blurb: "Pre-built reports for owners, GMs, and accounting — export anywhere.",
  icon: BookOpen,
  inPlan: "starter",
  span: "md:col-span-3 md:row-span-1",
  color: "violet"
}, {
  id: "accounting",
  title: "Accounting Integration",
  blurb: "Two-way sync with Sage Intacct, QuickBooks, M3.",
  icon: BarChart3,
  inPlan: "pro",
  span: "md:col-span-3 md:row-span-2",
  feature: true,
  color: "emerald"
}, {
  id: "ap",
  title: "A/P Automation",
  blurb: "Invoice capture, approvals, GL coding — zero paper.",
  icon: Wallet,
  inPlan: "pro",
  span: "md:col-span-3 md:row-span-1",
  color: "emerald"
}, {
  id: "ar",
  title: "A/R Validation",
  blurb: "Catch missed charges, comp errors, and unbilled folios automatically.",
  icon: ShieldCheck,
  inPlan: "pro",
  span: "md:col-span-3 md:row-span-1",
  color: "emerald"
}, {
  id: "labor",
  title: "Labor Snapshot",
  blurb: "Hours, overtime, and labor cost % per property.",
  icon: Users,
  inPlan: "pro",
  span: "md:col-span-3 md:row-span-1",
  color: "rose"
}, {
  id: "guest",
  title: "Happy Guest Scores",
  blurb: "Unified review pulse from every channel.",
  icon: Star,
  inPlan: "starter",
  span: "md:col-span-3 md:row-span-1",
  color: "amber"
}, {
  id: "calendar",
  title: "Calendar View",
  blurb: "Multi-property occupancy at a glance.",
  icon: Calendar,
  inPlan: "starter",
  span: "md:col-span-3 md:row-span-1",
  color: "teal"
}, {
  id: "mobile",
  title: "Mobile App",
  blurb: "iOS + Android. Approve, audit, and respond on the floor.",
  icon: Smartphone,
  inPlan: "pro",
  span: "md:col-span-3 md:row-span-1",
  color: "violet"
}, {
  id: "phone",
  title: "Phone Support",
  blurb: "Talk to a human, not a ticket queue.",
  icon: Phone,
  inPlan: "pro",
  span: "md:col-span-3 md:row-span-1",
  color: "teal"
}, {
  id: "email",
  title: "Email Support",
  blurb: "24/7 dedicated desk on every plan.",
  icon: Mail,
  inPlan: "starter",
  span: "md:col-span-3 md:row-span-1",
  color: "teal"
}];
const ADDONS = [{
  id: "shift",
  name: "Innrly Shift",
  price: "$149",
  unit: "/mo per property",
  body: "Workforce module: TimeClock with Face-ID, employee mobile app, scheduler, housekeeping tools, labor budgets.",
  icon: Users
}, {
  id: "pay",
  name: "Innrly Pay",
  price: "Free",
  unit: "with annual Professional",
  body: "Virtual Cards + ACH replace paper checks. Real-time tracking and end-to-end reconciliation.",
  icon: CreditCard,
  highlight: true
}];
const COMPARE = [["Pulse Dashboard", true, true], ["Early Bird daily snapshot", true, true], ["Calendar View", true, true], ["Night Audit+", true, true], ["OTA Reconciliation", true, true], ["Happy Guest scores", true, true], ["STR Report", true, true], ["Reporting library", true, true], ["Email support", true, true], ["Accounting integration", false, true], ["A/P Automation", false, true], ["A/R Validation", false, true], ["Labor Snapshot", false, true], ["Mobile app", false, true], ["Innrly Pay", false, "Annual only"], ["Phone support", false, true]];
const faqs = [{
  q: "What does the setup fee cover?",
  a: "Onboarding, PMS and accounting connections, chart-of-accounts mapping, and a guided launch with a dedicated implementation specialist."
}, {
  q: "Is there a minimum portfolio size?",
  a: "No — Starter works for a single property. Most operators start with 1–5 hotels and expand from there."
}, {
  q: "Can I cancel anytime?",
  a: "Monthly plans have no annual contract — cancel anytime. Annual plans get a 20% discount (and Innrly Pay included free on Professional) in exchange for a 12-month commitment."
}, {
  q: "Do I need to change my PMS or accounting system?",
  a: "No. Innrly sits on top of your existing stack — you keep your PMS, accounting, payroll, and credentials."
}];
function PricingPage() {
  const [plan, setPlan] = useState("pro");
  const [billing, setBilling] = useState("monthly");
  const [shift, setShift] = useState(false);
  const unlockedCount = TILES.filter((t) => t.inPlan === "starter" || plan === "pro").length;
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-4 pt-20 pb-10 text-center sm:px-6 lg:px-8 lg:pt-24", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl", children: [
          "Build your plan, ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "not a column." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground max-w-2xl mx-auto", children: "Toggle a tier. Watch capabilities light up across your stack. Add modules only when you need them." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { id: "plans", className: "pt-4 pb-8 scroll-mt-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl rounded-2xl border border-border bg-card/60 backdrop-blur p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 flex-1", children: ["starter", "pro"].map((p) => {
        const isActive = plan === p;
        const name = p === "starter" ? "Starter" : "Professional";
        const blurb = p === "starter" ? "Single property or small portfolios." : "Growing portfolios that need automation.";
        const m = p === "starter" ? 199 : 299;
        const y = p === "starter" ? 149 : 249;
        const price = billing === "monthly" ? m : y;
        const yearlyTotal = y * 12;
        const isPopular = p === "pro";
        return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
          setPlan(p);
          track("pricing_plan_toggle", {
            plan: p,
            billing
          });
        }, "aria-pressed": isActive, className: `group relative overflow-hidden rounded-xl border-2 px-4 py-3 text-left transition-all ${isActive ? "border-accent bg-accent/5 shadow-glow" : "border-border/60 bg-surface/40 hover:border-accent/40"}`, children: [
          /* @__PURE__ */ jsx("span", { className: `absolute inset-x-0 top-0 h-[3px] transition-all ${isActive ? "bg-gradient-to-r from-accent via-cta to-accent shadow-[0_0_12px_var(--color-accent)] animate-pulse" : "bg-border/40"}`, "aria-hidden": true }),
          isPopular && !isActive && /* @__PURE__ */ jsx("span", { className: "absolute right-2 top-2 rounded-full bg-accent/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent ring-1 ring-inset ring-accent/30", children: "Most popular" }),
          isActive && /* @__PURE__ */ jsx("span", { className: "absolute right-2 top-2 rounded-full bg-accent px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-primary-foreground shadow", children: isPopular ? "Popular · Active" : "Active" }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: name }),
          /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[11px] text-muted-foreground/90 leading-tight", children: blurb }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxs("span", { className: `text-2xl font-bold tabular-nums ${isActive ? "text-foreground" : "text-foreground/70"}`, children: [
              "$",
              price
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "/mo" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-[10px] font-medium leading-tight", children: billing === "yearly" ? /* @__PURE__ */ jsxs("span", { className: "text-emerald-300", children: [
            "Billed $",
            yearlyTotal.toLocaleString(),
            " once per year · setup waived"
          ] }) : /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "+ $299 one-time setup · cancel anytime" }) })
        ] }, p);
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 lg:flex-col lg:items-end lg:justify-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end gap-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 rounded-full bg-surface/60 p-1 border-[1.5px] border-accent/60", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
              setBilling("monthly");
              track("pricing_billing_toggle", {
                billing: "monthly",
                plan
              });
            }, "aria-pressed": billing === "monthly", className: `min-h-9 rounded-full px-4 text-xs font-bold uppercase tracking-wider transition-all ${billing === "monthly" ? "bg-cta text-primary-foreground shadow-[0_0_14px_var(--color-cta)]" : "text-muted-foreground hover:text-foreground"}`, children: "Monthly" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
              setBilling("yearly");
              track("pricing_billing_toggle", {
                billing: "yearly",
                plan
              });
            }, "aria-pressed": billing === "yearly", className: `min-h-9 rounded-full px-4 text-xs font-bold uppercase tracking-wider transition-all ${billing === "yearly" ? "bg-cta text-primary-foreground shadow-[0_0_14px_var(--color-cta)]" : "text-muted-foreground hover:text-foreground"}`, children: "Yearly" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium tracking-wide text-muted-foreground", children: billing === "yearly" ? /* @__PURE__ */ jsx("span", { className: "text-emerald-300", children: "2 months free · setup waived on annual" }) : /* @__PURE__ */ jsx(Fragment, { children: "Save 25% + setup waived on annual" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-accent" })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-foreground", children: unlockedCount }),
            " of",
            " ",
            TILES.length,
            " lit"
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Section, { className: "pt-2 pb-16", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-12 md:auto-rows-[120px]", children: TILES.map((tile) => {
      const Icon = tile.icon;
      const unlocked = tile.inPlan === "starter" || plan === "pro";
      const isUpgrade = tile.inPlan === "pro";
      const c = TILE_COLORS[tile.color];
      return /* @__PURE__ */ jsxs("div", { className: `group relative overflow-hidden rounded-2xl p-5 transition-all duration-500 ${tile.span} ${unlocked ? `border-2 ${c.border} bg-card ${c.glow} ring-1 ring-inset ${c.ring}` : "border border-dashed border-border/50 bg-card/20 opacity-40 grayscale hover:opacity-80 hover:grayscale-0"}`, children: [
        unlocked && /* @__PURE__ */ jsx("span", { className: `pointer-events-none absolute inset-x-0 top-0 h-[3px] ${c.topBar} ${c.topBarShadow}`, "aria-hidden": true }),
        !unlocked && /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 opacity-30", style: {
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          color: "var(--color-muted-foreground)"
        }, "aria-hidden": true }),
        !unlocked && /* @__PURE__ */ jsxs("div", { className: "absolute right-3 top-3 flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Lock, { className: "h-2.5 w-2.5" }),
          " Pro"
        ] }),
        unlocked && /* @__PURE__ */ jsxs("span", { className: "absolute right-3 top-3 flex h-2 w-2", "aria-hidden": true, children: [
          /* @__PURE__ */ jsx("span", { className: `absolute inline-flex h-full w-full animate-ping rounded-full ${c.dotPing} opacity-75` }),
          /* @__PURE__ */ jsx("span", { className: `relative inline-flex h-2 w-2 rounded-full ${c.dot} ${c.dotShadow}` })
        ] }),
        tile.feature && unlocked && /* @__PURE__ */ jsx("div", { className: `pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full ${c.blob} blur-3xl`, "aria-hidden": true }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex h-full flex-col", children: [
          /* @__PURE__ */ jsx("div", { className: `mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ${unlocked ? `${c.iconBg} text-primary-foreground ${c.iconShadow}` : "bg-muted text-muted-foreground ring-transparent"}`, children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: `font-semibold ${tile.feature ? "text-xl" : "text-base"} text-foreground`, children: tile.title }),
          /* @__PURE__ */ jsx("p", { className: `mt-1 text-sm text-muted-foreground ${tile.feature ? "" : "line-clamp-2"}`, children: tile.blurb }),
          tile.tags && unlocked && /* @__PURE__ */ jsx("div", { className: "mt-auto pt-4 flex flex-wrap gap-1.5", children: tile.tags.map((t) => /* @__PURE__ */ jsx("span", { className: `rounded-full ${c.tagBg} px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${c.tagText}`, children: t }, t)) }),
          isUpgrade && plan === "starter" && /* @__PURE__ */ jsx("button", { onClick: () => setPlan("pro"), className: "absolute inset-0 flex items-center justify-center bg-card/0 hover:bg-card/40 transition-colors opacity-0 hover:opacity-100", "aria-label": `Unlock ${tile.title} with Professional`, children: /* @__PURE__ */ jsx("span", { className: "rounded-full bg-cta px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-glow", children: "Unlock with Pro →" }) })
        ] })
      ] }, tile.id);
    }) }) }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Optional add ons", title: "Plug-ins that ride along with any plan.", description: "Stack these on top of Starter or Professional — they unlock workforce and payments without changing your plan." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-5 md:grid-cols-2", children: ADDONS.map((a) => {
        const Icon = a.icon;
        const isShift = a.id === "shift";
        const isPay = a.id === "pay";
        const payActive = a.highlight && plan === "pro" && billing === "yearly";
        const active = isShift ? shift : payActive;
        const accent = isPay ? {
          border: "border-blue-400",
          borderActive: "border-blue-300",
          glow: "shadow-[0_0_40px_-8px_rgb(59_130_246/0.7)]",
          glowActive: "shadow-[0_0_55px_-6px_rgb(59_130_246/0.9)]",
          topBar: "bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500",
          topShadow: "shadow-[0_0_18px_rgb(59_130_246/0.9)]",
          iconBg: "bg-gradient-to-br from-blue-400 to-blue-600",
          iconRing: "ring-blue-400/50",
          iconShadow: "shadow-[0_0_18px_-2px_rgb(59_130_246/0.8)]",
          pillBg: "bg-blue-400/15",
          pillText: "text-blue-300",
          priceText: "text-blue-300",
          blob: "bg-blue-500/30"
        } : {
          border: "border-orange-400",
          borderActive: "border-orange-300",
          glow: "shadow-[0_0_40px_-8px_rgb(249_115_22/0.7)]",
          glowActive: "shadow-[0_0_55px_-6px_rgb(249_115_22/0.9)]",
          topBar: "bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500",
          topShadow: "shadow-[0_0_18px_rgb(249_115_22/0.9)]",
          iconBg: "bg-gradient-to-br from-orange-400 to-orange-600",
          iconRing: "ring-orange-400/50",
          iconShadow: "shadow-[0_0_18px_-2px_rgb(249_115_22/0.8)]",
          pillBg: "bg-orange-400/15",
          pillText: "text-orange-300",
          priceText: "text-orange-300",
          blob: "bg-orange-500/30"
        };
        return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
          if (!isShift) return;
          setShift((s) => {
            track("pricing_addon_toggle", {
              addon: "shift",
              added: !s,
              plan,
              billing
            });
            return !s;
          });
        }, className: `group relative overflow-hidden rounded-2xl border-2 bg-card p-6 text-left transition-all ${active ? `${accent.borderActive} ${accent.glowActive}` : `${accent.border} ${accent.glow}`} ${!isShift ? "cursor-default" : ""}`, children: [
          /* @__PURE__ */ jsx("span", { className: `pointer-events-none absolute inset-x-0 top-0 h-[3px] ${accent.topBar} ${accent.topShadow}`, "aria-hidden": true }),
          /* @__PURE__ */ jsx("div", { className: `pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full ${accent.blob} blur-3xl`, "aria-hidden": true }),
          /* @__PURE__ */ jsxs("span", { className: `absolute left-4 top-4 inline-flex items-center gap-1 rounded-full ${accent.pillBg} px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.15em] ${accent.pillText} ring-1 ring-inset ring-current/30`, children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-2.5 w-2.5" }),
            "Optional Add On"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative mt-8 flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: `flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${accent.iconBg} text-white ring-2 ${accent.iconRing} ${accent.iconShadow}`, children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-3 flex-wrap", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground", children: a.name }),
                /* @__PURE__ */ jsxs("span", { className: `text-base font-bold ${accent.priceText}`, children: [
                  a.price,
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-normal text-muted-foreground", children: a.unit })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: a.body }),
              isShift && /* @__PURE__ */ jsxs("div", { className: "mt-4 inline-flex items-center gap-2 text-xs font-semibold", children: [
                /* @__PURE__ */ jsx("span", { className: `h-4 w-7 rounded-full p-0.5 transition-colors ${shift ? "bg-orange-400" : "bg-muted"}`, children: /* @__PURE__ */ jsx("span", { className: `block h-3 w-3 rounded-full bg-card transition-transform ${shift ? "translate-x-3" : ""}` }) }),
                /* @__PURE__ */ jsx("span", { className: shift ? "text-orange-300" : "text-muted-foreground", children: shift ? "Added to your plan" : "Tap to add" })
              ] }),
              a.highlight && /* @__PURE__ */ jsxs("div", { className: `mt-4 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-all ${payActive ? "bg-blue-400 text-white shadow-[0_0_12px_rgb(59_130_246/0.8)]" : "bg-blue-400/15 text-blue-300"}`, children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-2.5 w-2.5" }),
                payActive ? "Included — annual Pro active" : "Included with annual Pro"
              ] })
            ] })
          ] })
        ] }, a.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { id: "compare", className: "py-12 scroll-mt-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Side-by-side", title: "Compare plans feature by feature.", description: "Every plan includes onboarding, unlimited users, and a 90-day free trial." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 overflow-x-auto rounded-2xl border border-border bg-card/40", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[640px] text-sm", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border bg-surface/40 text-left", children: [
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-5 py-4 font-semibold text-foreground", children: "Feature" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-5 py-4 text-center font-semibold text-foreground", children: "Starter" }),
          /* @__PURE__ */ jsxs("th", { scope: "col", className: "px-5 py-4 text-center font-semibold text-foreground", children: [
            "Professional",
            /* @__PURE__ */ jsx("span", { className: "ml-2 inline-flex items-center rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent", children: "Popular" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-border/60", children: COMPARE.map(([label, s, p]) => /* @__PURE__ */ jsxs("tr", { className: "odd:bg-surface/20", children: [
          /* @__PURE__ */ jsx("th", { scope: "row", className: "px-5 py-3 text-left font-medium text-foreground", children: label }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-3 text-center", children: s ? /* @__PURE__ */ jsx(Check, { className: "mx-auto h-4 w-4 text-accent", "aria-label": "Included" }) : /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "aria-label": "Not included", children: "—" }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-3 text-center", children: typeof p === "string" ? /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-accent", children: p }) : p ? /* @__PURE__ */ jsx(Check, { className: "mx-auto h-4 w-4 text-accent", "aria-label": "Included" }) : /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "aria-label": "Not included", children: "—" }) })
        ] }, String(label))) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { id: "faq", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Pricing FAQ", title: "Common questions." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 max-w-3xl", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqs.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${i}`, className: "border-border/60", children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-base font-semibold text-foreground", children: f.q }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: f.a })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsx(TrustBar, {}),
    /* @__PURE__ */ jsx(LogosStrip, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(CtaBand, { title: "Need something custom?", subtitle: "Enterprise pricing, white-label, and group rollouts — talk to sales.", primary: {
      to: "/contact",
      label: "Talk to sales"
    }, secondary: {
      to: "/features",
      label: "See all features"
    } }),
    /* @__PURE__ */ jsx("div", { className: "sticky bottom-3 z-40 mx-auto mb-3 max-w-5xl px-3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 rounded-2xl border border-accent/30 bg-card/95 p-3 pl-5 shadow-glow backdrop-blur sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", "aria-hidden": true, children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-accent" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground", children: "90-day free trial" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "No credit card · cancel anytime" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90 whitespace-nowrap", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", onClick: () => track("pricing_cta_click", {
        location: "sticky_bar",
        plan,
        billing
      }), children: [
        "Start 90-day trial ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
      ] }) })
    ] }) })
  ] });
}
export {
  PricingPage as component
};
