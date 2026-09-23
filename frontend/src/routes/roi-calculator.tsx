import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calculator, Clock, DollarSign, TrendingUp } from "lucide-react";
import { Section, SectionHeading, CtaBand } from "@/components/site/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

const faqs = [
  {
    q: "How accurate is this ROI calculator?",
    a: "The defaults are drawn from anonymized data across 200+ hotels on Innrly. Time savings (10 hrs/week per property) is the operator midpoint of a 5–15 hour range. Revenue recovery (25 bps) is the conservative end of OTA commission clawback + card chargeback audit recoveries we actually see in production.",
  },
  {
    q: "Does the calculation include the setup fee?",
    a: "No — it compares ongoing annual subscription cost against ongoing annual savings. A one-time $299 per-property setup fee applies on monthly plans and is waived on annual plans.",
  },
  {
    q: "What if my portfolio has lower revenue per property?",
    a: "Adjust the slider. The labor savings stay constant per property (they depend on hours, not revenue), but the revenue-recovery component scales with each property's top line. For limited-service portfolios under $1.5M ARR per property, the labor savings typically dominate the ROI.",
  },
  {
    q: "How long until the savings start?",
    a: "Most operators see hours saved in week 2 as the night-audit workflow stabilizes. OTA reconciliation typically surfaces the first month's recoveries within 30 days. The full run-rate is usually in place by day 60.",
  },
  {
    q: "Can I get a tailored ROI on my actual data?",
    a: "Yes — book a walkthrough and we'll run the model against a sample of your real PMS, accounting, and OTA statements so the numbers reflect your specific portfolio, not industry averages.",
  },
];

export const Route = createFileRoute("/roi-calculator")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/roi-calculator");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/roi-calculator"],
        "/roi-calculator"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/roi-calculator" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "ROI calculator", url: "/roi-calculator" },
      ]),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

const fmtUSD = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

function Page() {
  const [properties, setProperties] = useState(8);
  const [hourlyCost, setHourlyCost] = useState(35);
  const [revenuePerProperty, setRevenuePerProperty] = useState(2_400_000);

  const { hoursSavedYr, laborSavingsYr, revenueRecoveredYr, totalYr, innrlyCostYr } =
    useMemo(() => {
      const HOURS_PER_WEEK = 10; // conservative midpoint of 5-15
      const REVENUE_RECOVERY_PCT = 0.0025; // 25 bps from OTA commission clawback + card chargeback audit
      const hoursSavedYr = properties * HOURS_PER_WEEK * 52;
      const laborSavingsYr = hoursSavedYr * hourlyCost;
      const revenueRecoveredYr = properties * revenuePerProperty * REVENUE_RECOVERY_PCT;
      const totalYr = laborSavingsYr + revenueRecoveredYr;
      const innrlyCostYr = properties * 199 * 12;
      return { hoursSavedYr, laborSavingsYr, revenueRecoveredYr, totalYr, innrlyCostYr };
    }, [properties, hourlyCost, revenuePerProperty]);

  const roiX = innrlyCostYr > 0 ? totalYr / innrlyCostYr : 0;

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            ROI calculator
          </p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            See your <span className="text-gradient">return</span> in 30 seconds.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Built from real multi-property operator data — hours saved, revenue recovered, and total
            annual return on the Innrly subscription.
          </p>
        </div>
      </section>

      <Section className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="aurora-card rounded-2xl p-6 sm:p-8">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cta">
              <Calculator className="h-5 w-5 text-primary-foreground" aria-hidden />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-foreground">Your portfolio</h2>
            <div className="mt-6 space-y-6">
              <Field
                label="Number of properties"
                value={properties}
                onChange={setProperties}
                min={1}
                max={100}
                step={1}
                suffix="hotels"
              />
              <Field
                label="Fully-loaded back-office hourly cost"
                value={hourlyCost}
                onChange={setHourlyCost}
                min={20}
                max={120}
                step={1}
                prefix="$"
                suffix="/ hour"
              />
              <Field
                label="Annual revenue per property"
                value={revenuePerProperty}
                onChange={setRevenuePerProperty}
                min={500_000}
                max={20_000_000}
                step={100_000}
                prefix="$"
              />
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Calculator assumes 10 hours/week saved per property (operator midpoint) and 25 bps
              revenue recovery from OTA commission clawback + card chargeback auditing.
            </p>
          </div>

          <div className="space-y-4">
            <Stat
              icon={Clock}
              label="Hours saved annually"
              value={`${hoursSavedYr.toLocaleString()} hrs`}
              accent
            />
            <Stat icon={DollarSign} label="Labor savings / year" value={fmtUSD(laborSavingsYr)} />
            <Stat
              icon={TrendingUp}
              label="Revenue recovered / year"
              value={fmtUSD(revenueRecoveredYr)}
            />
            <div className="aurora-card rounded-2xl border-2 border-accent/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Total annual return
              </p>
              <p className="mt-2 text-4xl font-bold text-gradient sm:text-5xl">{fmtUSD(totalYr)}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Innrly cost:{" "}
                <span className="font-semibold text-foreground">{fmtUSD(innrlyCostYr)}/yr</span> ·{" "}
                <span className="font-semibold text-foreground">{roiX.toFixed(1)}× ROI</span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-8">
        <SectionHeading eyebrow="The math" title="Where the savings come from." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Night-audit + reconciliation",
              b: "8–10 hrs/wk per property saved on PMS-to-bank, OTA, and credit card reconciliation.",
            },
            {
              t: "A/P automation",
              b: "Invoice capture, GL coding, approval, and Virtual Card pay — replaces manual A/P weeks.",
            },
            {
              t: "OTA commission audit",
              b: "25–50 bps of rooms revenue typically recovered from over-billed OTA commissions.",
            },
          ].map((c) => (
            <div key={c.t} className="aurora-card rounded-2xl p-6">
              <h3 className="text-base font-semibold text-foreground">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-8">
        <SectionHeading eyebrow="Common questions" title="ROI calculator FAQ" />
        <div className="mx-auto mt-8 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <CtaBand
        title="Want a tailored ROI on your portfolio?"
        subtitle="20-minute walkthrough on your data. No slides, no commitment."
        primary={{ to: "/contact", label: "Book a walkthrough" }}
        secondary={{ to: "/pricing", label: "View pricing" }}
      />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-sm font-semibold text-accent">
          {prefix}
          {value.toLocaleString()}
          {suffix ? ` ${suffix}` : ""}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-accent"
        aria-label={label}
      />
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  accent = false,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border p-5 ${accent ? "border-accent/40 bg-accent/5" : "border-border/60 bg-surface/30"}`}
    >
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cta">
        <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-2xl font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}
