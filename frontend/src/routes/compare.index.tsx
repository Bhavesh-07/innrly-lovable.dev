import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, CtaBand } from "@/components/site/Section";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

const comparisons = [
  {
    to: "/compare/innrly-vs-otelier",
    competitor: "Otelier",
    tagline: "Single platform vs a multi-module suite of acquired products.",
    readTime: "7 min read",
    highlights: ["One login, one data model", "Transparent $199/mo pricing", "2–4 week onboarding"],
    available: true,
  },
  {
    to: "/compare/innrly-vs-hotel-effectiveness",
    competitor: "Hotel Effectiveness",
    tagline: "Face-ID TimeClock, scheduling, and MPOR inside a full back office — vs a dedicated labor platform.",
    readTime: "6 min read",
    highlights: ["Native Face-ID TimeClock", "Labor + back office in one login", "Published per-property pricing"],
    available: true,
  },
  {
    to: "/integrations/m3",
    competitor: "M3",
    tagline: "How Innrly + M3 work together — capture, code, and push invoices into M3.",
    readTime: "5 min read",
    highlights: ["Certified M3 partner", "Push-only invoice sync", "M3 stays your GL"],
    available: true,
  },
  {
    to: "/integrations/inn-flow",
    competitor: "Inn-flow",
    tagline:
      "How Innrly + Inn-flow work together — night audit, OTA reconciliation, and invoice capture pushing clean entries into Inn-flow.",
    readTime: "5 min read",
    highlights: ["Partner integration", "Night audit automation", "Inn-flow stays your GL"],
    available: true,
  },
  {
    to: "/integrations/quickbooks",
    competitor: "QuickBooks",
    tagline:
      "Two-way QuickBooks sync — see how Innrly extends what QuickBooks alone can't do for hotels.",
    readTime: "4 min read",
    highlights: ["Two-way sync", "Hotel-aware GL coding", "OTA reconciliation built in"],
    available: true,
  },
  {
    to: "/compare/innrly-vs-nimble",
    competitor: "Nimble Property",
    tagline:
      "Published pricing, faster deployment, and native housekeeping productivity vs Nimble's quote-based model.",
    readTime: "6 min read",
    highlights: ["$199/mo published pricing", "2–4 week deployment", "Face-ID TimeClock built in"],
    available: true,
  },
  {
    to: "/compare/innrly-vs-aptech",
    competitor: "Aptech",
    tagline:
      "One platform vs Profitvue + Execuvue + Targetvue — three products licensed and onboarded separately.",
    readTime: "7 min read",
    highlights: ["One login, one data model", "No multi-module licensing", "2–4 week deployment"],
    available: true,
  },
  {
    to: "/compare/innrly-vs-profitsage",
    competitor: "ProfitSage",
    tagline:
      "Same BI surface — plus the A/P, audit, OTA, TimeClock, and payroll layers ProfitSage doesn't cover natively.",
    readTime: "6 min read",
    highlights: [
      "BI on the same data model",
      "A/P + audit + labor included",
      "Native TimeClock + MPOR",
    ],
    available: true,
  },
  {
    to: "/compare/innrly-vs-actabl",
    competitor: "Actabl / Hotel Effectiveness",
    tagline:
      "Keep your existing TimeClock, get scheduling + MPOR + payroll export — at a fraction of Actabl's per-module labor pricing.",
    readTime: "7 min read",
    highlights: [
      "Works with your existing clock",
      "Face-ID is the upgrade, not required",
      "$149/mo per property, all-in",
    ],
    available: true,
  },
] as const;

export const Route = createFileRoute("/compare/")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/compare");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/compare"],
        "/compare"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/compare" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Innrly Comparisons",
          description:
            "Side-by-side comparisons positioning Innrly as an alternative to leading hotel back-office platforms.",
          hasPart: comparisons.map((c) => ({
            "@type": "WebPage",
            name: `Innrly: alternative to ${c.competitor}`,
            url: c.to,
          })),
        }),
      },
    ],
  }),
});

function Page() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Comparisons</p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            How Innrly compares where it is truly{" "}
            <span className="text-gradient">head-to-head</span>.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Honest breakdowns of features, pricing, onboarding, and fit for buyers evaluating hotel
            back-office software.
          </p>
        </div>
      </section>

      <Section className="py-12">
        <SectionHeading eyebrow="Head-to-head" title="Comparisons." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {comparisons.map((c) => (
            <a
              key={c.to}
              href={c.to}
              className="group flex flex-col aurora-card rounded-2xl p-6 transition-colors hover:border-accent/60"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {c.readTime}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-foreground">
                Innrly: alternative to {c.competitor}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Read comparison
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </a>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Want a comparison on your own data?"
        subtitle="20-minute walkthrough on your portfolio — no slides, no commitment."
        primary={{ to: "/contact", label: "Book a walkthrough" }}
        secondary={{ to: "/pricing", label: "View pricing" }}
      />
    </div>
  );
}
