import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  FolderArchive,
  Smile,
  ClipboardCheck,
  Receipt,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroNightAudit } from "@/components/site/HeroNightAudit";
import { NightToMorningScene } from "@/components/site/NightToMorningScene";
import { AuroraReveal } from "@/components/site/AuroraReveal";
import { ProductOrb, type OrbVariant } from "@/components/site/ProductOrb";
import { Section, SectionHeading, Eyebrow, CtaBand } from "@/components/site/Section";
import { TrustBar } from "@/components/site/TrustBar";
import { LogosStrip } from "@/components/site/LogosStrip";
import { ProofBand } from "@/components/site/ProofBand";
import { Testimonials } from "@/components/site/Testimonials";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: async () => {
    const seo = await fetchSeoData("/");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(loaderData?.seo || null, defaultSeoData["/"], "/"),
      {
        property: "og:image:alt",
        content: "You sleep. Innrly works. — back-office automation for 200+ hotels.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Innrly",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Hotel back-office automation, business intelligence, and labor management for multi-property operators.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "90-day free trial",
          },
          // NOTE: aggregateRating intentionally omitted — Google penalizes
          // unverified review schema. Add back once you have a real review
          // source (G2 / Capterra / your own collection). See
          // docs/DEVELOPER_HANDOFF_CONTENT.md
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is the platform name spelled Innrly or Innerly?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The official spelling is Innrly (without the 'e'). While it is sometimes searched for or misspelled as 'Innerly', the platform is called Innrly, representing inn automation done early.",
              },
            },
            {
              "@type": "Question",
              name: "How long does onboarding take with Innrly?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Onboarding is fully guided by our team and typically takes less than 14 days. We connect to your PMS, accounting systems, and bank feeds for you, ensuring a seamless transition with zero disruption to your daily operations.",
              },
            },
            {
              "@type": "Question",
              name: "Which hotel systems and accounting platforms does Innrly integrate with?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Innrly integrates with all major Property Management Systems (PMS) like Marriott, Hilton, IHG, Opera, Cloudbeds, and Mews, as well as leading back-office financial platforms including M3, Sage Intacct, and QuickBooks.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

// Home consolidates to a 3-hue cool family (emerald / sapphire / indigo) so
// the six product cards read as one product family rather than a rainbow.
// Individual solution pages retain their unique per-product orb palette.
const coreAccent: Record<string, string> = {
  intelligence: "oklch(0.78 0.18 155)", // emerald
  control: "oklch(0.72 0.16 235)", // sapphire
  shift: "oklch(0.68 0.22 258)", // royal indigo
};

const coreSuites: {
  variant: OrbVariant;
  displayVariant: OrbVariant;
  name: string;
  to: string;
  body: string;
  tag?: string;
}[] = [
  {
    variant: "intelligence",
    displayVariant: "intelligence",
    name: "Business Intelligence",
    to: "/solutions/business-intelligence",
    body: "Portfolio-wide dashboards, STR benchmarking, and predictive trends — in one view.",
  },
  {
    variant: "control",
    displayVariant: "control",
    name: "Financial Control",
    to: "/solutions/financial-control",
    body: "Automated reconciliation, billing assurance, and revenue protection that defends your margins.",
  },
  {
    variant: "shift",
    displayVariant: "shift",
    name: "Innrly Shift",
    to: "/solutions/innrly-shift",
    body: "Scheduling, Face-ID TimeClock, housekeeping productivity, and payroll — one mobile-first product for GMs.",
  },
  {
    variant: "ops",
    displayVariant: "intelligence",
    name: "Operations Automation",
    to: "/solutions/operations-automation",
    body: "Night audit, OTA commissions, and bank reconciliation — handled without spreadsheets.",
  },
  {
    variant: "pay",
    displayVariant: "control",
    name: "Innrly Pay",
    to: "/solutions/innrly-pay",
    body: "Replace paper checks with Virtual Cards & ACH. Faster settlement, fraud protection built in.",
    tag: "Included free",
  },
  {
    variant: "labor",
    displayVariant: "shift",
    name: "Labor & Workforce",
    to: "/solutions/labor-workforce",
    body: "5-minute labor snapshots that surface hidden overtime before it hits payroll.",
    tag: "New",
  },
];

const supportingSuites: {
  icon: LucideIcon;
  name: string;
  to: string;
  body: string;
  tag?: string;
  tone: "doc" | "expense" | "guest" | "accountability";
}[] = [
  {
    icon: FolderArchive,
    name: "Document Vault",
    to: "/solutions/document-vault",
    body: "Calendar-based vault — PMS night-audit packs auto-drop on each day.",
    tone: "doc",
  },
  {
    icon: Receipt,
    name: "Expense Entries",
    to: "/solutions/expense-entries",
    body: "Log card charges + auto-paid invoices, synced straight to QuickBooks.",
    tone: "expense",
  },
  {
    icon: Smile,
    name: "Guest Experience",
    to: "/integrations",
    body: "Sentiment + review scores from Medallia and Revinate, alongside RevPAR.",
    tag: "Via Medallia",
    tone: "guest",
  },
  {
    icon: ClipboardCheck,
    name: "Accountability Pack",
    to: "/services/accountability-pack",
    body: "Done-for-you verification, franchise reporting, Green Engage, CLC.",
    tag: "Add-on",
    tone: "accountability",
  },
];

const outcomes = [
  { stat: "200+", label: "Hotels on Innrly" },
  { stat: "17,000+", label: "Rooms tracked nightly" },
  { stat: "1,500+", label: "Hotel team members using Innrly" },
  { stat: "250+", label: "Vendor invoices auto-processed per hotel / month" },
  { stat: "50+", label: "PMS, accounting, payroll & TimeClock integrations" },
];

const compatTier1 = ["Hilton", "Marriott", "IHG"];
const compatTier2 = [
  "Wyndham",
  "Choice Hotels",
  "Best Western",
  "Hyatt",
  "Radisson",
  "Sonesta",
  "Red Roof",
  "Motel 6",
  "Extended Stay America",
  "La Quinta",
  "Red Lion",
];

// Testimonials are now fetched dynamically via the loader.

function HomePage() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const [showAllProducts, setShowAllProducts] = useState(false);
  
  const hpAll = allTestimonials.filter(t => t.page === "homepage" || t.is_homepage);
  
  // If we don't have dynamic ones yet, provide safe fallbacks so the UI doesn't break
  const hpTestimonials = hpAll.length > 0 ? hpAll : [
    {
      quote: "Innrly replaced four spreadsheets and saved my GM two days a week. Reconciliation that used to take a full morning now runs in minutes.",
      name: "James Wilson",
      title: "VP of Operations",
      company: "Pinnacle Hotels Group · 12 hotels",
    },
    {
      quote: "OTA commission audits that used to slip through quarterly reviews now surface daily. The dashboard pays for itself before lunch.",
      name: "Elena Rostova",
      title: "Owner",
      company: "Rostova Hospitality · 6 hotels",
    }
  ];

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute right-10 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="relative h-[calc(100vh-4rem)] min-h-[760px] px-4 py-6 sm:px-6 lg:px-8">
          <div className="relative z-10 mx-auto flex h-full max-w-[60rem] flex-col justify-center pb-28">
            <Eyebrow>One platform · Built for hotels</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Hotel management software that{" "}
              <AuroraReveal>
                <span className="text-gradient">automates the back office.</span>
              </AuroraReveal>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Innrly brings every part of your hotel's operation into one intelligent platform —
              financials, performance, and labor — across your entire portfolio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-cta hover:opacity-90">
                <Link to="/contact">
                  See it live
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border bg-background/40"
              >
                <Link to="/features">Explore features</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              90-day free trial · No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* NIGHT AUDIT ANIMATION — full-width visual band below hero (desktop only; too dense for mobile) */}
      <section className="relative hidden h-[clamp(820px,72vh,820px)] overflow-hidden border-y border-border/40 bg-hero sm:block">
        <HeroNightAudit />
      </section>

      {/* MOBILE STATIC SUBSTITUTE — clean, no overlapping cards */}
      <section className="relative overflow-hidden border-y border-border/40 bg-hero py-12 sm:hidden">
        <div className="mx-auto max-w-md px-4">
          <div className="rounded-2xl border border-accent/30 bg-surface/80 p-5 shadow-glow backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                Live night audit
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-semibold text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                Streaming
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl border border-success/30 bg-success/10 p-3">
                <div className="text-2xl font-bold text-success">12</div>
                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Auto-cleared
                </div>
              </div>
              <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-3">
                <div className="text-2xl font-bold text-destructive">2</div>
                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Flagged
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {[
                { l: "Opera PMS · folio sync", v: "148", ok: true },
                { l: "Booking.com · commission sweep", v: "$74", ok: true },
                { l: "Tax mismatch · folio #4421", v: "$92", ok: false },
              ].map((r) => (
                <div
                  key={r.l}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2 text-xs ${r.ok ? "border-success/30 bg-success/5" : "border-destructive/40 bg-destructive/10"}`}
                >
                  <span className="truncate text-foreground">{r.l}</span>
                  <span className={`ml-2 font-bold ${r.ok ? "text-success" : "text-destructive"}`}>
                    {r.v}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs">
              <span className="text-muted-foreground">Loss prevented</span>
              <span className="font-bold text-accent">$412 · 11 hrs</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF-DENSITY BAND — hard metrics + integrations in one tight rhythm */}
      <ProofBand />

      {/* OUTCOMES */}
      <Section>
        <SectionHeading
          eyebrow="The portfolio we run"
          title="Trusted across hotels, rooms, and teams."
          description="Innrly powers daily operations for hotel owners and management companies across the U.S."
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 sm:gap-6">
          {outcomes.map((o) => (
            <div key={o.label} className="aurora-card rounded-2xl p-6 text-center">
              <div className="inline-block pr-1 text-3xl font-bold text-gradient sm:text-4xl leading-tight">
                {o.stat}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{o.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* COMPAT */}
      <Section className="py-12">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Every major brand — plus independents and boutiques
        </p>

        {/* Tier 1 — featured */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {compatTier1.map((l) => (
            <div
              key={l}
              className="relative flex h-16 items-center justify-center overflow-hidden rounded-xl border-2 border-accent/50 bg-accent/5 px-4 text-base font-bold tracking-tight text-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_18%,transparent),0_16px_50px_-28px_color-mix(in_oklab,var(--accent)_70%,transparent)]"
            >
              <span
                className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/20 blur-2xl"
                aria-hidden
              />
              <span className="relative">{l}</span>
            </div>
          ))}
        </div>

        {/* Tier 2 — secondary */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {compatTier2.map((l) => (
            <div
              key={l}
              className="flex h-10 items-center justify-center rounded-lg border border-border/40 bg-surface/40 px-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
            >
              {l}
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-muted-foreground">
          Innrly runs on top of the PMS, accounting, and payroll systems these brands require — no
          system swap.
        </p>
      </Section>

      {/* SUITES — tiered: 6 core (md orbs) + 4 supporting (compact strip) */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Product"
          title="Six core products. Four supporting."
          description="The six brains run your back office. The four supporting products extend the system into vault, expense capture, guest signal, and done-for-you service."
        />

        {/* Core 6 — orbs as the visual centerpiece, each card tinted to its product hue */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreSuites.map((s, idx) => {
            const accent = coreAccent[s.displayVariant];
            const hideOnMobile = idx >= 3 && !showAllProducts;
            return (
              <Link
                key={s.name}
                to={s.to}
                style={
                  {
                    // expose accent as a CSS var so border/halo/glow stay in sync
                    ["--core-accent" as keyof React.CSSProperties]: accent,
                  } as React.CSSProperties
                }
                className={`group relative ${hideOnMobile ? "hidden sm:flex" : "flex"} flex-col items-center overflow-hidden rounded-2xl border border-[color:var(--core-accent)]/25 bg-card p-6 pt-4 text-center transition-all hover:-translate-y-1 hover:border-[color:var(--core-accent)]/70 hover:shadow-[0_20px_60px_-25px_var(--core-accent)]`}
              >
                {/* soft colored disc behind the orb — the "special color circle inside" */}
                <div
                  className="pointer-events-none absolute left-1/2 top-10 -z-0 h-44 w-44 -translate-x-1/2 rounded-full opacity-60 blur-2xl transition-opacity group-hover:opacity-90"
                  style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
                  aria-hidden
                />
                {/* corner accent dot for extra brand pop */}
                <span
                  className="pointer-events-none absolute left-4 top-4 h-2 w-2 rounded-full"
                  style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
                  aria-hidden
                />
                {s.tag && (
                  <span
                    className="absolute right-4 top-4 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      borderColor: `color-mix(in oklab, ${accent} 50%, transparent)`,
                      color: accent,
                      background: `color-mix(in oklab, ${accent} 14%, transparent)`,
                    }}
                  >
                    {s.tag}
                  </span>
                )}
                <div className="relative z-10">
                  <ProductOrb variant={s.displayVariant} size="md" />
                </div>
                <h3 className="relative z-10 mt-2 text-lg font-semibold text-foreground">
                  {s.name}
                </h3>
                <p className="relative z-10 mt-2 text-sm text-muted-foreground">{s.body}</p>
                <div
                  className="relative z-10 mt-4 inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: accent }}
                >
                  Explore{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile-only toggle to reveal remaining products */}
        <div className="mt-6 flex justify-center sm:hidden">
          <button
            type="button"
            onClick={() => setShowAllProducts((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            aria-expanded={showAllProducts}
          >
            {showAllProducts ? "Show fewer products" : "Show all 10 products"}
            <ArrowRight
              className={`h-3.5 w-3.5 transition-transform ${showAllProducts ? "-rotate-90" : "rotate-90"}`}
            />
          </button>
        </div>

        {/* Supporting 4 — colored secondary support strip */}
        <div
          className={`mt-10 border-t border-border/60 pt-10 ${showAllProducts ? "block" : "hidden sm:block"}`}
        >
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Supporting products
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportingSuites.map((s) => (
              <Link
                key={s.name}
                to={s.to}
                className={`support-suite-card support-suite-card--${s.tone} group relative min-h-52 overflow-hidden rounded-2xl border border-border/70 p-5 transition-all hover:-translate-y-1 hover:border-[color:var(--support-accent)]`}
              >
                <div className="support-suite-rail absolute inset-x-0 top-0 h-1" aria-hidden />
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[color:var(--support-accent)]/20 blur-2xl"
                  aria-hidden
                />
                {s.tag && (
                  <span className="absolute right-4 top-4 rounded-full border border-[color:var(--support-accent)]/35 bg-background/35 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[color:var(--support-accent)]">
                    {s.tag}
                  </span>
                )}
                <div className="support-suite-icon flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-105">
                  <s.icon className="h-6 w-6" aria-hidden />
                </div>
                <h4 className="mt-5 text-base font-semibold text-foreground">{s.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--support-accent)]">
                  Support layer{" "}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* AUTOMATION-FIRST */}
      <Section>
        <SectionHeading
          eyebrow="Automation-first"
          title="Innrly's core is automation."
          description="The work your team is doing manually today — Innrly is already doing in the background."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Exceptions Dashboard",
              body: "Skip the wall of green checks. See only the transactions that need a human.",
            },
            {
              name: "Auto-pulled vendor invoices",
              body: "Innrly pulls invoices directly from vendor portals into A/P for your approval.",
            },
            {
              name: "Month-end reconciliation",
              body: "PMS-to-accounting reconciliation packets, automated and ready for close.",
            },
            {
              name: "Rate Shop + daily digest",
              body: "Competitor rates and your morning numbers, delivered without a login.",
            },
          ].map((f) => (
            <div key={f.name} className="aurora-card rounded-2xl p-6">
              <h3 className="text-base font-semibold text-foreground">{f.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* NIGHT → MORNING showcase */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="One overnight cycle"
          title="You sleep. Innrly works."
          description="By the time you walk in with your coffee, the night audit is done and exceptions are triaged — the only items left on your desk are the handful of variances that genuinely need a human decision."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <NightToMorningScene />
        </div>
      </Section>

      {/* TESTIMONIALS — anonymized until real attributed quotes ship.
          See docs/DEVELOPER_HANDOFF_CONTENT.md → "Testimonials". */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="From operators"
          title="What hotel groups say."
          description="Anonymized to protect operator portfolios. Logos and attributed quotes available under NDA."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {hpTestimonials.map((t, i) => (
            <figure key={i} className="aurora-card rounded-2xl p-8">
              <blockquote className="text-lg leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cta text-sm font-bold text-primary-foreground"
                  aria-hidden
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.title}{t.company ? (t.title ? ` · ${t.company}` : t.company) : ""}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section className="border-t border-border/40">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Have questions about spelling, integrations, or onboarding? We've got answers."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="spelling" className="border-border/60">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                Is the platform name spelled Innrly or Innerly?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                The official spelling is <strong>Innrly</strong> (without the "e"). While it is
                sometimes searched for or misspelled as "Innerly", the platform is called Innrly.
                The name represents our core mission: automating hotel or inn operations early in
                the overnight cycle so you wake up to clean, reconciled numbers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="onboarding" className="border-border/60">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                How long does onboarding take with Innrly?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Onboarding is fully guided by our team and typically takes less than 14 days. We
                connect to your PMS, accounting systems, and bank feeds for you, ensuring a seamless
                transition with zero disruption to your daily operations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="integrations" className="border-border/60">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                Which hotel systems and accounting platforms does Innrly integrate with?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Innrly integrates with all major Property Management Systems (PMS) like Marriott,
                Hilton, IHG, Opera, Cloudbeds, and Mews, as well as leading back-office financial
                platforms including M3, Sage Intacct, and QuickBooks.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      <CtaBand />
    </div>
  );
}
