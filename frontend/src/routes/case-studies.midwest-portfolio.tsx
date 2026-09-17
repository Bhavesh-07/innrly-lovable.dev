import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, TrendingDown, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading, CtaBand } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IllustrativeBanner } from "@/components/site/IllustrativeBanner";
import { Button } from "@/components/ui/button";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";

export const Route = createFileRoute("/case-studies/midwest-portfolio")({
  loader: async () => {
    const seo = await fetchSeoData("/case-studies/midwest-portfolio");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/case-studies/midwest-portfolio"],
        "/case-studies/midwest-portfolio"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/case-studies/midwest-portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Midwest Select-Service Portfolio Case Study",
          description:
            "How a select-service portfolio saves 5–15 hours and $200–500 per hotel per week with Innrly.",
          author: { "@type": "Organization", name: "Innrly" },
          publisher: { "@type": "Organization", name: "Innrly" },
          mainEntityOfPage: "/case-studies/midwest-portfolio",
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Midwest Portfolio", url: "/case-studies/midwest-portfolio" },
      ]),
    ],
  }),
  component: CaseStudyPage,
});

const metrics = [
  { icon: Clock, stat: "5–15 hrs", label: "Saved per hotel each week" },
  { icon: DollarSign, stat: "$200–500", label: "Revenue loss prevented per hotel weekly" },
  { icon: TrendingDown, stat: "Daily", label: "Night-audit anomaly review" },
  { icon: CheckCircle2, stat: "6 wks", label: "Typical time to roll out a portfolio" },
];

function CaseStudyPage() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "case-studies-midwest-portfolio");
  return (
    <div className="bg-background">
      <Breadcrumbs
        items={[
          { name: "Home", to: "/" },
          { name: "Case Studies", to: "/case-studies" },
          { name: "Midwest Portfolio" },
        ]}
      />
      <IllustrativeBanner />
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            Case Study · Select-Service
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Hours saved, revenue protected — every night, across every property.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            A midwest select-service operator (Hilton, IHG, and Choice brands) uses Innrly Pulse to
            review night-audit packs and flag transaction anomalies before they accumulate into real
            losses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-cta hover:opacity-90">
              <Link to="/contact">
                Get the same results <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-background/40">
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="aurora-card rounded-2xl p-6">
              <m.icon className="h-6 w-6 text-accent" aria-hidden />
              <div className="mt-4 text-3xl font-bold text-gradient">{m.stat}</div>
              <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground">The problem</h2>
              <p className="mt-3 text-muted-foreground">
                With 12 properties across three brands and four PMS systems, the corporate team was
                spending the first 10 days of every month reconciling night-audit reports, OTA
                commissions, and credit-card batches by hand. Owners didn't see consolidated P&Ls
                until the 20th — far too late to act on a bad week.
              </p>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Five Excel templates, one per data source,
                  manually merged each morning.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Two part-time bookkeepers dedicated to
                  reconciliation only.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> OTA commission discrepancies discovered
                  weeks after the fact, rarely recovered.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> No portfolio-wide labor visibility —
                  overtime caught only after payroll ran.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">The rollout</h2>
              <p className="mt-3 text-muted-foreground">
                Innrly connected to all four PMS instances and the existing accounting stack in
                under two weeks. The full 12-property portfolio was live in 6 weeks, with no IT lift
                required on property. Corporate set up consolidated dashboards once; every property
                inherited them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">The results, 90 days in</h2>
              <p className="mt-3 text-muted-foreground">
                Daily P&Ls land in inboxes at 7 a.m. Night audits that took 90 minutes now take 20.
                Owners get a Monday-morning portfolio summary instead of waiting until month-end.
                The corporate team retired both reconciliation spreadsheets and reassigned one
                bookkeeper to higher-value AP work.
              </p>
              <div className="mt-6 aurora-card rounded-2xl p-6">
                <p className="text-sm uppercase tracking-wider text-accent">By the numbers</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <p className="text-foreground">
                    <span className="font-semibold">5–15 hours</span> saved per hotel each week
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">$200–500</span> in revenue loss prevented per
                    hotel weekly
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">Daily</span> night-audit pack review with
                    anomaly flags
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">One queue</span> of transactions that actually
                    need attention
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="aurora-card rounded-2xl p-6">
              <Quote className="h-6 w-6 text-accent" aria-hidden />
              <blockquote className="mt-3 text-foreground">
                "{t?.quote || `We stopped hiring our way out of back-office work. Innrly paid for itself in the
                first quarter and we're running 12 hotels with the same corporate headcount we had
                at eight.`}"
              </blockquote>
              <footer className="mt-4 text-sm text-muted-foreground">
                {t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "[VP of Operations, midwest portfolio]"}
              </footer>
            </div>

            <div className="rounded-2xl border border-border bg-surface/40 p-6">
              <p className="text-sm font-semibold text-foreground">Portfolio snapshot</p>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Properties</dt>
                  <dd className="text-foreground">12</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Segment</dt>
                  <dd className="text-foreground">Select-service</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Brands</dt>
                  <dd className="text-foreground">Hilton, IHG, Choice</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">PMS systems</dt>
                  <dd className="text-foreground">4</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Time to live</dt>
                  <dd className="text-foreground">6 weeks</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand
        title="Run the same playbook on your portfolio"
        subtitle="See what Innrly would surface in your first 30 days — book a 20-minute walkthrough."
        primary={{ to: "/contact", label: "Book a demo" }}
        secondary={{ to: "/industries/select-service", label: "Select-service overview" }}
      />
    </div>
  );
}
