import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  ShieldCheck,
  Users,
  Workflow,
  CreditCard,
  Clock,
  Calendar,
  FileText,
  Receipt,
  Wallet,
  LineChart,
  Smartphone,
  Sunrise,
  Mail,
  ScanLine,
  BadgeCheck,
  Lock,
  PlugZap,
  ArrowRight,
} from "lucide-react";
import { Section, CtaBand } from "@/components/site/Section";
import { BIMorningBriefing } from "@/components/site/BIMorningBriefing";
import { ExceptionsLedger } from "@/components/site/ExceptionsLedger";
import { DailyLaborSnapshot } from "@/components/site/DailyLaborSnapshot";
import { OpsNightPack } from "@/components/site/OpsNightPack";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

export const Route = createFileRoute("/features")({
  component: FeaturesPage,
  loader: async () => {
    const seo = await fetchSeoData("/features");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(loaderData?.seo || null, defaultSeoData["/features"], "/features"),
      {
        property: "og:image:alt",
        content: "Night audit to morning coffee — already done. Reconciliation, AP, payroll, BI.",
      },
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/features" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Features", item: "/features" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Innrly Features",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Business Intelligence",
              url: "/solutions/business-intelligence",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Financial Control",
              url: "/solutions/financial-control",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Labor & Workforce",
              url: "/solutions/innrly-shift",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Operations Automation",
              url: "/solutions/operations-automation",
            },
            { "@type": "ListItem", position: 5, name: "Innrly Pay", url: "/solutions/innrly-pay" },
            {
              "@type": "ListItem",
              position: 6,
              name: "Innrly Shift",
              url: "/solutions/innrly-shift",
            },
          ],
        }),
      },
    ],
  }),
});

type Plan = "Starter" | "Professional" | "Add-on";

type Item = {
  icon: typeof FileText;
  name: string;
  body: string;
  plan?: Plan;
};

type StageGroup = {
  icon: typeof BarChart3;
  title: string;
  blurb: string;
  outcome: { stat: string; label: string };
  artifact: () => React.ReactElement;
  link: { to: string; label: string };
  items: Item[];
};

const stages: StageGroup[] = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    blurb: "Portfolio KPIs, forward pace, and rate intel — without a BI team.",
    outcome: { stat: "40+ hrs", label: "saved per property each month" },
    artifact: BIMorningBriefing,
    link: { to: "/solutions/business-intelligence", label: "See BI in action" },
    items: [
      {
        icon: LineChart,
        name: "Pulse Dashboard",
        body: "Real-time portfolio KPIs across every property — occupancy, ADR, RevPAR, GOP.",
        plan: "Starter",
      },
      {
        icon: Sunrise,
        name: "Early Bird",
        body: "Previous-day KPIs delivered each morning and nightly GL entries pushed straight to your accounting system.",
        plan: "Starter",
      },
      {
        icon: FileText,
        name: "STR Report integration",
        body: "Auto-import via STR API or upload the weekly file manually. Benchmark against your comp set either way.",
        plan: "Professional",
      },
      {
        icon: Calendar,
        name: "Calendar View",
        body: "Forward-looking occupancy, ADR, and RevPAR by property.",
        plan: "Starter",
      },
      {
        icon: LineChart,
        name: "Rate Shop",
        body: "Built in-house — no third-party fees. Automated competitor rate monitoring by date and room type.",
        plan: "Professional",
      },
      {
        icon: Mail,
        name: "Daily email digest",
        body: "Pacing, variances, exceptions, and rate-shop in your inbox every morning.",
        plan: "Starter",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Financial Control",
    blurb: "Close faster, catch what humans miss, and keep your GL clean.",
    outcome: { stat: "3 days", label: "faster month-end close" },
    artifact: ExceptionsLedger,
    link: { to: "/solutions/financial-control", label: "See Financial Control" },
    items: [
      {
        icon: Receipt,
        name: "Exceptions Dashboard",
        body: "Isolates each report and surfaces only the transactions that need attention.",
        plan: "Starter",
      },
      {
        icon: FileText,
        name: "Month-end reconciliation",
        body: "Automated PMS-to-accounting reconciliation packets for close.",
        plan: "Starter",
      },
      {
        icon: Receipt,
        name: "OTA Reconciliation",
        body: "Catch commission errors, chargebacks, and adjustments line by line.",
        plan: "Professional",
      },
      {
        icon: Wallet,
        name: "A/P Automation",
        body: "Invoice capture, OCR, GL-coding, and approval workflows.",
        plan: "Starter",
      },
      {
        icon: FileText,
        name: "A/R Aging Report",
        body: "PMS-driven A/R aging by property and guest folio — no spreadsheets, no city-ledger blind spots.",
        plan: "Professional",
      },
      {
        icon: PlugZap,
        name: "Chart-of-Accounts mapper",
        body: "Map your CoA once — Innrly handles GL coding across every property.",
        plan: "Starter",
      },
    ],
  },
  {
    icon: Users,
    title: "Labor & Workforce",
    blurb: "Schedule, clock, and screen your team — tied to demand and revenue.",
    outcome: { stat: "2%", label: "average labor cost reduction" },
    artifact: DailyLaborSnapshot,
    link: { to: "/solutions/innrly-shift", label: "See Innrly Shift" },
    items: [
      {
        icon: Clock,
        name: "Labor Snapshot",
        body: "5-minute daily labor numbers tied to occupancy, ADR, and RevPAR.",
        plan: "Starter",
      },
      {
        icon: Smartphone,
        name: "TimeClock + Face-ID",
        body: "Prevent buddy-punching at every property.",
        plan: "Add-on",
      },
      {
        icon: Calendar,
        name: "Scheduler",
        body: "Part of the Labor module — schedule front desk, housekeeping, and F&B by forecasted occupancy.",
        plan: "Add-on",
      },
      {
        icon: ShieldCheck,
        name: "Hiring & Screening",
        body: "Background checks, HRIS, and credit data via Shield Screening, isolved, and TransUnion — native to Innrly.",
        plan: "Professional",
      },
    ],
  },
  {
    icon: Workflow,
    title: "Operations Automation",
    blurb: "Night audit, invoice capture, and bank recon — running while you sleep.",
    outcome: { stat: "100%", label: "of night audits automated" },
    artifact: OpsNightPack,
    link: { to: "/solutions/operations-automation", label: "See Operations Automation" },
    items: [
      {
        icon: FileText,
        name: "Night Audit+ with calendar",
        body: "Automated EOD with variance flags and calendar access to every night's packet.",
        plan: "Starter",
      },
      {
        icon: Mail,
        name: "Email-in invoice capture",
        body: "Forward any invoice to a property mailbox — Innrly OCRs, GL-codes, and routes it for approval.",
        plan: "Starter",
      },
      {
        icon: ScanLine,
        name: "Vendor portal auto-pull",
        body: "Grant Innrly credentials for each supported vendor portal and invoices land in A/P automatically.",
        plan: "Professional",
      },
      {
        icon: FileText,
        name: "Document Vault",
        body: "PMS files and invoices stored and searchable by property, date, or vendor.",
        plan: "Starter",
      },
      {
        icon: Receipt,
        name: "Bank reconciliation",
        body: "Match deposits to PMS automatically via Plaid bank feeds.",
        plan: "Starter",
      },
    ],
  },
];

const mobileItems: Item[] = [
  {
    icon: LineChart,
    name: "Mobile dashboards",
    body: "Pulse, Calendar, and Labor Snapshot on iOS and Android.",
    plan: "Professional",
  },
  {
    icon: BadgeCheck,
    name: "Approvals on the go",
    body: "Approve invoices and payment runs from anywhere.",
    plan: "Professional",
  },
  {
    icon: Mail,
    name: "Push alerts",
    body: "Variances, exceptions, and chargebacks pushed in real time.",
    plan: "Professional",
  },
  {
    icon: Clock,
    name: "Manager TimeClock",
    body: "Approve punches and edits without a desk.",
    plan: "Professional",
  },
];

const securityItems: Item[] = [
  {
    icon: ShieldCheck,
    name: "Plaid-secured bank feeds",
    body: "Innrly is an official Plaid partner — credentials never touch our servers.",
    plan: "Starter",
  },
  {
    icon: Users,
    name: "Role-based access",
    body: "Property, region, and corporate roles with granular permissions.",
    plan: "Starter",
  },
  {
    icon: FileText,
    name: "Audit log",
    body: "Every approval, edit, and payment is timestamped and attributable.",
    plan: "Starter",
  },
  {
    icon: Lock,
    name: "SSO & 2FA",
    body: "Enterprise SSO and two-factor authentication available.",
    plan: "Professional",
  },
];

const addOns = [
  {
    icon: CreditCard,
    name: "Innrly Pay",
    tagline: "Virtual Cards + ACH for A/P",
    body: "Pay vendors with Virtual Cards, ACH, or check. Fraud protection and rebate built in. Included free with Professional Annual; available as an add-on on other plans.",
    to: "/solutions/innrly-pay",
  },
  {
    icon: Clock,
    name: "Innrly Shift",
    tagline: "TimeClock + Face-ID + Scheduling",
    body: "Face-ID time capture, smart scheduling, and labor analytics — built for multi-property hotel staffing.",
    to: "/solutions/innrly-shift",
  },
];

/** Fade-up reveal on scroll. Falls back to visible if IO unsupported. */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 700ms ease-out, transform 700ms ease-out",
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {children}
    </div>
  );
}

function Stage({ stage, index }: { stage: StageGroup; index: number }) {
  const Artifact = stage.artifact;
  const reverse = index % 2 === 1; // alternate sides
  const num = String(index + 1).padStart(2, "0");

  return (
    <Section>
      <Reveal>
        {/* Stage header */}
        <div className="relative">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 left-0 select-none font-serif text-[110px] leading-none text-accent/10 sm:-top-12 sm:text-[160px]"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            {num}
          </span>
          <div className="relative flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cta">
                <stage.icon className="h-5 w-5 text-primary-foreground" aria-hidden />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                  Stage {num}
                </p>
                <h2 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
                  {stage.title}
                </h2>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">{stage.blurb}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-accent/30 bg-accent/5 px-4 py-2 text-right">
              <div className="text-2xl font-bold text-gradient">{stage.outcome.stat}</div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {stage.outcome.label}
              </div>
            </div>
          </div>
        </div>

        {/* Split body */}
        <div
          className={`mt-8 grid gap-8 lg:grid-cols-2 lg:items-start ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Feature list */}
          <div className="hidden lg:block">
            <ul className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/40">
              {stage.items.map((it) => (
                <li
                  key={it.name}
                  className="group flex items-start gap-3 px-5 py-4 transition-colors hover:bg-accent/5"
                >
                  <it.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-foreground">{it.name}</h3>
                      {it.plan && (
                        <span className="inline-flex shrink-0 items-center rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                          {it.plan}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{it.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to={stage.link.to}
              className="mt-5 inline-flex items-center gap-1.5 rounded-full border-2 border-accent/50 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/20"
            >
              {stage.link.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          {/* Artifact */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-4 shadow-[0_20px_60px_-30px_color-mix(in_oklab,var(--accent)_60%,transparent)] sm:p-6">
              <Artifact />
            </div>
          </div>

          {/* Mobile fallback: card grid (kept as-is, only shown <lg) */}
          <div className="lg:hidden">
            <div className="grid gap-4 sm:grid-cols-2">
              {stage.items.map((it) => (
                <div key={it.name} className="aurora-card rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <it.icon className="h-5 w-5 text-accent" aria-hidden />
                    {it.plan && (
                      <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                        {it.plan}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{it.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
                </div>
              ))}
            </div>
            <Link
              to={stage.link.to}
              className="mt-5 inline-flex items-center gap-1.5 rounded-full border-2 border-accent/50 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/20"
            >
              {stage.link.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function AlsoIncluded() {
  const cols: Array<{ icon: typeof Smartphone; title: string; blurb: string; items: Item[] }> = [
    {
      icon: Smartphone,
      title: "Mobile",
      blurb: "Run the back office from your phone.",
      items: mobileItems,
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      blurb: "Bank-grade rails with role-based access.",
      items: securityItems,
    },
  ];
  return (
    <Section tone="surface">
      <Reveal>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
              Also included
            </p>
            <h2 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
              Table-stakes, table-set.
            </h2>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {cols.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border/60 bg-card/40 p-5">
              <div className="flex items-center gap-2.5">
                <c.icon className="h-4 w-4 text-accent" aria-hidden />
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  {c.title}
                </h3>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{c.blurb}</p>
              <ul className="mt-4 divide-y divide-border/40">
                {c.items.map((it) => (
                  <li key={it.name} className="flex items-start gap-3 py-2.5">
                    <it.icon
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground"
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-foreground">{it.name}</span>
                        {it.plan && (
                          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                            {it.plan}
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground">{it.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

function FeaturesPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Everything you need to <span className="text-gradient">run a hotel portfolio.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Four core suites, plus mobile, security, and two add-ons — Innrly Pay and Innrly Shift.
            Built for hospitality from day one.
          </p>
        </div>
      </section>

      {/* STAGES */}
      {stages.map((s, i) => (
        <Stage key={s.title} stage={s} index={i} />
      ))}

      {/* ALSO INCLUDED — Mobile + Security */}
      <AlsoIncluded />

      {/* ADD-ONS */}
      <Section>
        <Reveal>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cta">
              <CreditCard className="h-5 w-5 text-primary-foreground" aria-hidden />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Two add-ons</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Bolt these onto any plan — or get Innrly Pay free with Professional Annual.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {addOns.map((a) => (
              <Link
                key={a.name}
                to={a.to}
                className="group flex flex-col rounded-2xl border border-accent/30 bg-card p-6 transition-colors hover:border-accent/60"
              >
                <div className="flex items-center gap-3">
                  <a.icon className="h-6 w-6 text-accent" aria-hidden />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{a.name}</h3>
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">
                      {a.tagline}
                    </p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm text-muted-foreground">{a.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Learn more about {a.name}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </div>
  );
}
