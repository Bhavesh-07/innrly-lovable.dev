import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import { BadgeCheck, Search, X, ArrowRight, Clock } from "lucide-react";
import { S as Section, a as SectionHeading, C as CtaBand } from "./Section-C0oe_XKQ.js";
import "./router-eu0xRd06.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
const CATEGORY_LABELS = {
  pms: "Property Management (PMS)",
  ota: "OTAs & Travel Channels",
  accounting: "Accounting",
  payroll: "Payroll & TimeClock",
  guest: "Guest Survey & Reputation",
  banking: "Banking (via Plaid)",
  payments: "Invoice Payments & A/P",
  workforce: "Workforce, Screening & Credit"
};
const CATEGORY_BLURBS = {
  pms: "Nightly audit, occupancy, ADR, RevPAR, and folio data pulled automatically every morning.",
  ota: "Commissions, chargebacks, and bookings reconciled automatically against your PMS — line by line.",
  accounting: "GL-coded invoices and reconciled journals sync straight into your books.",
  payroll: "Hours flow from Innrly TimeClock (Face-ID) into your payroll provider — no double entry.",
  guest: "Guest sentiment scores roll up alongside RevPAR and ADR — no separate dashboard.",
  banking: "Bank-feed reconciliation across every property's operating account — securely via Plaid.",
  payments: "Pay vendors with Virtual Cards, ACH, or check — fraud protection and rebate built in.",
  workforce: "Feature partnerships bringing background screening, HRIS, and credit data into Innrly."
};
const INTEGRATIONS = [
  // ─────────── PMS ───────────
  { name: "Opera (Oracle)", initials: "OP", category: "pms", hue: 25, domain: "oracle.com" },
  {
    name: "Choice Advantage",
    initials: "CA",
    category: "pms",
    hue: 15,
    domain: "choicehotels.com"
  },
  { name: "Marriott FOSSE", initials: "MF", category: "pms", hue: 0, domain: "marriott.com" },
  { name: "Hilton OnQ", initials: "HQ", category: "pms", hue: 230, domain: "hilton.com" },
  { name: "Hilton PEP", initials: "PE", category: "pms", hue: 230, domain: "hilton.com" },
  {
    name: "Best Western WHG",
    initials: "BW",
    category: "pms",
    hue: 220,
    domain: "bestwestern.com"
  },
  {
    name: "Wyndham Wynguest",
    initials: "WY",
    category: "pms",
    hue: 350,
    domain: "wyndhamhotels.com"
  },
  { name: "IHG (HotelKey / HMS)", initials: "IH", category: "pms", hue: 200, domain: "ihg.com" },
  { name: "StayNTouch", initials: "SN", category: "pms", hue: 280, domain: "stayntouch.com" },
  { name: "Cloudbeds", initials: "CB", category: "pms", hue: 195, domain: "cloudbeds.com" },
  { name: "Mews", initials: "MW", category: "pms", hue: 250, domain: "mews.com" },
  { name: "RoomKeyPMS", initials: "RK", category: "pms", hue: 165, domain: "roomkeypms.com" },
  { name: "Visual Matrix", initials: "VM", category: "pms", hue: 145, domain: "visualmatrix.com" },
  { name: "Maestro", initials: "MA", category: "pms", hue: 35, domain: "maestropms.com" },
  { name: "innRoad", initials: "IR", category: "pms", hue: 205, domain: "innroad.com" },
  { name: "HotelKey", initials: "HK", category: "pms", hue: 215, domain: "hotelkeyapp.com" },
  { name: "Jonas Chorum", initials: "JC", category: "pms", hue: 25, domain: "jonaschorum.com" },
  { name: "Stay PMS", initials: "ST", category: "pms", hue: 195, domain: "staypms.com" },
  // ─────────── OTA ───────────
  { name: "Booking.com", initials: "BK", category: "ota", hue: 215, domain: "booking.com" },
  { name: "Expedia", initials: "EX", category: "ota", hue: 45, domain: "expedia.com" },
  { name: "Priceline", initials: "PR", category: "ota", hue: 195, domain: "priceline.com" },
  { name: "CLC Lodging", initials: "CL", category: "ota", hue: 5, domain: "clclodging.com" },
  // ─────────── Accounting ───────────
  {
    name: "M3",
    initials: "M3",
    category: "accounting",
    hue: 215,
    to: "/integrations/m3",
    badge: "partner",
    domain: "m3as.com"
  },
  {
    name: "QuickBooks",
    initials: "QB",
    category: "accounting",
    hue: 145,
    to: "/integrations/quickbooks",
    domain: "quickbooks.intuit.com"
  },
  {
    name: "Sage Intacct",
    initials: "SI",
    category: "accounting",
    hue: 155,
    to: "/integrations/sage-intacct",
    domain: "sage.com"
  },
  { name: "Xero", initials: "XE", category: "accounting", hue: 195, domain: "xero.com" },
  { name: "NetSuite", initials: "NS", category: "accounting", hue: 5, domain: "netsuite.com" },
  // ─────────── Payroll & TimeClock ───────────
  { name: "ADP", initials: "AD", category: "payroll", hue: 5, domain: "adp.com" },
  { name: "Paychex", initials: "PX", category: "payroll", hue: 215, domain: "paychex.com" },
  { name: "Gusto", initials: "GU", category: "payroll", hue: 15, domain: "gusto.com" },
  { name: "Paycom", initials: "PC", category: "payroll", hue: 220, domain: "paycom.com" },
  { name: "Paylocity", initials: "PL", category: "payroll", hue: 145, domain: "paylocity.com" },
  { name: "Heartland", initials: "HL", category: "payroll", hue: 0, domain: "heartland.us" },
  {
    name: "Hotel Effectiveness",
    initials: "HE",
    category: "payroll",
    hue: 215,
    domain: "hoteleffectiveness.com"
  },
  // ─────────── Guest Survey ───────────
  { name: "Medallia", initials: "ME", category: "guest", hue: 350, domain: "medallia.com" },
  { name: "Revinate", initials: "RV", category: "guest", hue: 25, domain: "revinate.com" },
  { name: "GuestRevu", initials: "GR", category: "guest", hue: 195, domain: "guestrevu.com" },
  {
    name: "ReviewPro",
    initials: "RP",
    category: "guest",
    hue: 215,
    domain: "reviewpro.shijigroup.com"
  },
  { name: "Kipsu", initials: "KP", category: "guest", hue: 280, domain: "kipsu.com" },
  // ─────────── Banking ───────────
  {
    name: "Plaid",
    initials: "PD",
    category: "banking",
    hue: 5,
    badge: "partner",
    domain: "plaid.com"
  },
  { name: "Chase", initials: "CH", category: "banking", hue: 215, domain: "chase.com" },
  {
    name: "Bank of America",
    initials: "BA",
    category: "banking",
    hue: 0,
    domain: "bankofamerica.com"
  },
  { name: "Wells Fargo", initials: "WF", category: "banking", hue: 25, domain: "wellsfargo.com" },
  { name: "Truist", initials: "TR", category: "banking", hue: 280, domain: "truist.com" },
  { name: "U.S. Bank", initials: "US", category: "banking", hue: 220, domain: "usbank.com" },
  { name: "PNC", initials: "PN", category: "banking", hue: 25, domain: "pnc.com" },
  { name: "Capital One", initials: "C1", category: "banking", hue: 5, domain: "capitalone.com" },
  // ─────────── Payments & A/P ───────────
  { name: "Innrly Pay", initials: "IP", category: "payments", hue: 195 },
  { name: "Virtual Cards", initials: "VC", category: "payments", hue: 215 },
  { name: "ACH", initials: "AC", category: "payments", hue: 145 },
  {
    name: "Repay",
    initials: "RP",
    category: "payments",
    hue: 195,
    badge: "partner",
    domain: "repay.com"
  },
  { name: "Stripe", initials: "ST", category: "payments", hue: 250, domain: "stripe.com" },
  // ─────────── Workforce / Screening / Credit ───────────
  {
    name: "Shield Screening",
    initials: "SS",
    category: "workforce",
    hue: 215,
    badge: "partner",
    domain: "shieldscreening.com"
  },
  {
    name: "isolved",
    initials: "IS",
    category: "workforce",
    hue: 25,
    badge: "partner",
    domain: "isolvedhcm.com"
  },
  {
    name: "TransUnion",
    initials: "TU",
    category: "workforce",
    hue: 5,
    badge: "partner",
    domain: "transunion.com"
  }
];
const CATEGORY_ORDER = [
  "pms",
  "ota",
  "accounting",
  "payroll",
  "guest",
  "banking",
  "payments",
  "workforce"
];
function Page() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [integrationsList, setIntegrationsList] = useState(INTEGRATIONS);
  useEffect(() => {
    async function loadDynamicIntegrations() {
      try {
        const res = await fetch("http://127.0.0.1:8000/integrations");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const dynamicList = data.map((item) => ({
              name: item.name,
              initials: item.initials,
              category: item.category,
              hue: item.hue,
              domain: item.domain || void 0,
              badge: item.badge,
              to: item.to_url || void 0,
              image_url: item.image_url || void 0
            }));
            setIntegrationsList(dynamicList);
          }
        }
      } catch (e) {
        console.error("Failed to fetch dynamic integrations list:", e);
      }
    }
    loadDynamicIntegrations();
  }, []);
  const counts = useMemo(() => {
    const map = {
      all: integrationsList.length
    };
    for (const c of CATEGORY_ORDER) map[c] = integrationsList.filter((i) => i.category === c).length;
    return map;
  }, [integrationsList]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return integrationsList.filter((i) => {
      if (filter !== "all" && i.category !== filter) return false;
      if (!q) return true;
      return i.name.toLowerCase().includes(q) || CATEGORY_LABELS[i.category].toLowerCase().includes(q);
    });
  }, [query, filter, integrationsList]);
  const grouped = useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const cat of CATEGORY_ORDER) {
      const items = filtered.filter((i) => i.category === cat);
      if (items.length) map.set(cat, items);
    }
    return map;
  }, [filtered]);
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", "aria-hidden": true, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-1/4 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-10 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Integrations" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-4 text-4xl font-bold text-foreground sm:text-5xl", children: [
          "Every system your hotel ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "already runs" }),
          " — connected."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-muted-foreground", children: [
          "Innrly plugs into ",
          INTEGRATIONS.length,
          "+ PMS, accounting, payroll, banking, guest survey, and payment systems. Your team keeps the tools they know — Innrly automates the work between them."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Stat, { n: `${counts.all}+`, l: "Integrations" }),
          /* @__PURE__ */ jsx(Stat, { n: "8", l: "Categories" }),
          /* @__PURE__ */ jsx(Stat, { n: `${counts.pms}+`, l: "PMS systems" }),
          /* @__PURE__ */ jsx(Stat, { n: "12,000+", l: "Banks via Plaid" }),
          /* @__PURE__ */ jsx(Stat, { n: "6", l: "Official partners" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: "py-10", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border-2 border-accent/40 bg-card/60 p-6 sm:p-8 shadow-[0_18px_55px_-30px_color-mix(in_oklab,var(--accent)_60%,transparent)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(BadgeCheck, { className: "h-5 w-5 text-accent", "aria-hidden": true }),
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Official integration & feature partners" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 max-w-3xl text-base text-foreground", children: [
        "Innrly is an official integration partner with",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Plaid" }),
        ", ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "M3" }),
        ", and ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Repay" }),
        " — plus feature partnerships with",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Shield Screening" }),
        ",",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "isolved" }),
        ", and",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "TransUnion" }),
        " for background checks, HRIS, and credit data."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: INTEGRATIONS.filter((i) => i.badge === "partner").map((i) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent", children: [
        /* @__PURE__ */ jsx(BadgeCheck, { className: "h-3.5 w-3.5", "aria-hidden": true }),
        i.name
      ] }, i.name)) })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { className: "pt-4 pb-2", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-16 z-20 -mx-4 rounded-2xl border border-border/60 bg-background/80 px-4 py-4 backdrop-blur sm:mx-0 sm:px-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground", "aria-hidden": true }),
          /* @__PURE__ */ jsx("input", { type: "search", value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search integrations — Opera, M3, ADP, Plaid…", "aria-label": "Search integrations", className: "h-11 w-full rounded-xl border border-border bg-card/60 pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30" }),
          query && /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQuery(""), "aria-label": "Clear search", className: "absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:bg-surface hover:text-foreground", children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
          /* @__PURE__ */ jsx(FilterChip, { active: filter === "all", onClick: () => setFilter("all"), label: `All · ${counts.all}` }),
          CATEGORY_ORDER.map((c) => /* @__PURE__ */ jsx(FilterChip, { active: filter === c, onClick: () => setFilter(c), label: `${shortLabel(c)} · ${counts[c]}` }, c))
        ] })
      ] }),
      (query || filter !== "all") && /* @__PURE__ */ jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
        "Showing ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: filtered.length }),
        " of",
        " ",
        INTEGRATIONS.length,
        " integrations",
        filter !== "all" && /* @__PURE__ */ jsxs(Fragment, { children: [
          " ",
          "in ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-accent", children: CATEGORY_LABELS[filter] })
        ] }),
        query && /* @__PURE__ */ jsxs(Fragment, { children: [
          " ",
          'matching "',
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: query }),
          '"'
        ] })
      ] })
    ] }) }),
    grouped.size === 0 ? /* @__PURE__ */ jsx(Section, { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-md rounded-2xl border border-border bg-card/40 p-8 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-foreground", children: "No integrations match." }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Don't see your system? We add new connectors regularly." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline", children: [
        "Tell us yours ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": true })
      ] })
    ] }) }) : Array.from(grouped.entries()).map(([cat, items], i) => /* @__PURE__ */ jsxs(Section, { className: i === 0 ? "pt-8" : "pt-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-foreground sm:text-2xl", children: CATEGORY_LABELS[cat] }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: CATEGORY_BLURBS[cat] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: items.length })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6", children: items.map((b) => /* @__PURE__ */ jsx(LogoTile, { brand: b }, b.name)) })
    ] }, cat)),
    /* @__PURE__ */ jsxs(Section, { className: "pt-16", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Deep-dive integrations", title: "Built-in connectors with dedicated workflows.", align: "center" }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: [{
        to: "/integrations/m3",
        name: "M3",
        badge: "Certified",
        body: "Officially certified. Auto GL-code and push invoices into M3."
      }, {
        to: "/integrations/quickbooks",
        name: "QuickBooks",
        badge: "Two-way",
        body: "Full two-way sync — invoices out, accounts in."
      }, {
        to: "/integrations/sage-intacct",
        name: "Sage Intacct",
        badge: "Available",
        body: "Sync GL-coded entries with Sage Intacct."
      }].map((c) => /* @__PURE__ */ jsxs(Link, { to: c.to, className: "group flex flex-col rounded-2xl border-2 border-accent/35 bg-card p-5 transition hover:border-accent/80 hover:shadow-[0_14px_40px_-24px_color-mix(in_oklab,var(--accent)_70%,transparent)]", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex w-fit items-center rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent", children: c.badge }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 text-lg font-semibold text-foreground", children: c.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-1.5 flex-1 text-sm text-muted-foreground", children: c.body }),
        /* @__PURE__ */ jsxs("span", { className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent", children: [
          "See integration",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5", "aria-hidden": true })
        ] })
      ] }, c.to)) })
    ] }),
    /* @__PURE__ */ jsx(CtaBand, { title: "Don't see your system?", subtitle: "We support most major hospitality stacks and add new connectors regularly. Tell us yours.", primary: {
      to: "/contact",
      label: "Talk to us"
    }, secondary: {
      to: "/pricing",
      label: "View pricing"
    } })
  ] });
}
function shortLabel(c) {
  switch (c) {
    case "pms":
      return "PMS";
    case "ota":
      return "OTAs";
    case "accounting":
      return "Accounting";
    case "payroll":
      return "Payroll";
    case "guest":
      return "Guest";
    case "banking":
      return "Banking";
    case "payments":
      return "A/P";
    case "workforce":
      return "Workforce";
  }
}
function FilterChip({
  active,
  onClick,
  label
}) {
  return /* @__PURE__ */ jsx("button", { type: "button", onClick, "aria-pressed": active, className: "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors " + (active ? "border-accent/80 bg-accent/15 text-accent shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_30%,transparent)]" : "border-border bg-card/40 text-muted-foreground hover:border-accent/40 hover:text-foreground"), children: label });
}
function Stat({
  n,
  l
}) {
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-baseline gap-1.5", children: [
    /* @__PURE__ */ jsx("span", { className: "text-base font-bold text-gradient", children: n }),
    /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider", children: l })
  ] });
}
function LogoTile({
  brand
}) {
  const tint = brand.hue !== void 0 ? {
    borderColor: `oklch(0.55 0.12 ${brand.hue} / 0.35)`
  } : void 0;
  const inner = /* @__PURE__ */ jsxs("div", { className: "group relative flex h-28 flex-col items-center justify-center gap-1.5 rounded-xl border-2 bg-white px-3 pt-5 text-center transition-all hover:-translate-y-0.5 hover:shadow-glow", style: tint, children: [
    brand.badge === "partner" && /* @__PURE__ */ jsxs("span", { className: "absolute top-1.5 right-1.5 inline-flex items-center gap-1 rounded-full bg-accent px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm", children: [
      /* @__PURE__ */ jsx(BadgeCheck, { className: "h-2.5 w-2.5", "aria-hidden": true }),
      "Partner"
    ] }),
    brand.to && /* @__PURE__ */ jsxs("span", { className: "absolute top-1.5 left-1.5 inline-flex items-center gap-1 rounded-full bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-600", children: [
      /* @__PURE__ */ jsx(Clock, { className: "h-2.5 w-2.5", "aria-hidden": true }),
      "Deep dive"
    ] }),
    brand.image_url ? /* @__PURE__ */ jsx("img", { src: brand.image_url, alt: `${brand.name} logo`, className: "h-8 w-8 object-contain", onError: (e) => {
      const img = e.currentTarget;
      img.style.display = "none";
      const fallback = img.nextElementSibling;
      if (fallback) fallback.style.display = "block";
    } }) : brand.domain ? /* @__PURE__ */ jsx("img", { src: `https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`, alt: `${brand.name} — ${CATEGORY_LABELS[brand.category].toLowerCase()} that integrates with Innrly`, loading: "lazy", className: "h-8 w-8 object-contain", onError: (e) => {
      const img = e.currentTarget;
      img.style.display = "none";
      const fallback = img.nextElementSibling;
      if (fallback) fallback.style.display = "block";
    } }) : null,
    /* @__PURE__ */ jsx("span", { className: "text-lg font-black tracking-tight text-slate-800", style: {
      display: brand.image_url || brand.domain ? "none" : "block"
    }, children: brand.initials }),
    /* @__PURE__ */ jsx("span", { className: "line-clamp-1 text-[11px] font-medium text-slate-600", children: brand.name })
  ] });
  if (brand.to) {
    return /* @__PURE__ */ jsx(Link, { to: brand.to, "aria-label": `${brand.name} integration`, children: inner });
  }
  return /* @__PURE__ */ jsx("div", { "aria-label": brand.name, children: inner });
}
export {
  Page as component
};
