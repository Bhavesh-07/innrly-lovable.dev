import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2 } from "lucide-react";
import { Section, SectionHeading, CtaBand } from "@/components/site/Section";
import { IllustrativeBanner } from "@/components/site/IllustrativeBanner";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";

const studies = [
  {
    to: "/case-studies/midwest-portfolio",
    portfolio: "Midwest select-service portfolio",
    segment: "12 properties · Hilton, IHG, Choice",
    headline: "5–15 hours saved per hotel per week",
    body: "How a select-service operator catches night-audit anomalies daily and protects $200–500 in revenue per hotel each week.",
    available: true,
  },
  {
    to: "/case-studies/urban-full-service",
    portfolio: "Urban full-service operator",
    segment: "4 properties · Marriott + independent",
    headline: "$7K–15K OTA commission recovered per quarter",
    body: "OTA reconciliation runs nightly, F&B variance tightens to roughly 1%, and the month-end close moves from 12 days to about 6.",
    available: true,
  },
  {
    to: "/case-studies/hilton-management-company",
    portfolio: "Hilton management company",
    segment: "28 properties · Hampton, HGI, Home2, Embassy",
    headline: "Month-end close in about 6 days, not 14",
    body: "OnQ and OPERA consolidated nightly, AP through one queue, and no new corporate headcount as the portfolio grew.",
    available: true,
  },
  {
    to: "/case-studies/extended-stay-portfolio",
    portfolio: "Extended-stay portfolio",
    segment: "18 properties · Marriott + Hilton extended-stay",
    headline: "8–12% MPOR reduction across the portfolio",
    body: "Weekly-clean MPOR modeled correctly, long-stay tax automated, and consolidated USALI packages inside the first week of month-end.",
    available: true,
  },
  {
    to: "/case-studies/boutique-group",
    portfolio: "Independent boutique group",
    segment: "6 properties · 7 different PMSes",
    headline: "$15K–25K/yr net savings vs. prior bookkeeping setup",
    body: "Seven PMSes consolidated into one P&L, run by a two-person back office instead of a fractional CFO plus an outside firm.",
    available: true,
  },
] as const;

const coming: { portfolio: string; body: string }[] = [];

export const Route = createFileRoute("/case-studies/")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/case-studies");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/case-studies"],
        "/case-studies"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/case-studies" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Innrly Case Studies",
          description: "Real multi-property hotel operators using Innrly.",
          hasPart: studies.map((s) => ({ "@type": "Article", name: s.portfolio, url: s.to })),
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
      ]),
    ],
  }),
});

function Page() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "case-studies-index");
  return (
    <div className="bg-background">
      <IllustrativeBanner compact />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Case studies
          </p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Illustrative scenarios. <span className="text-gradient">Directional numbers.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Composite scenarios built from typical Innrly engagements with multi-property hotel
            operators. They show the shape of impact — hours back, revenue protected, faster close —
            not audited results from a single named customer. Your numbers will depend on portfolio
            size, brand mix, and starting baseline.
          </p>
        </div>
      </section>

      <Section className="py-12">
        <SectionHeading eyebrow="Published" title="Operator case studies." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group flex flex-col aurora-card rounded-2xl p-6 transition-colors hover:border-accent/60"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cta">
                <Building2 className="h-5 w-5 text-primary-foreground" aria-hidden />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent">
                {s.segment}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-foreground">{s.portfolio}</h2>
              <p className="mt-2 text-sm font-semibold text-foreground">{s.headline}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Read case study
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>

        {coming.length > 0 && (
          <div className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              In progress
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {coming.map((c) => (
                <div
                  key={c.portfolio}
                  className="rounded-2xl border border-dashed border-border/60 p-6"
                >
                  <p className="text-sm font-semibold text-foreground">{c.portfolio}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                  <p className="mt-3 text-xs text-muted-foreground">Publishing soon.</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>

      <CtaBand
        title="Want to be the next case study?"
        subtitle="Tell us your portfolio mix. We'll show you the exact hours and dollars Innrly will give back."
        primary={{ to: "/contact", label: "Book a walkthrough" }}
        secondary={{ to: "/pricing", label: "View pricing" }}
      />
    </div>
  );
}
