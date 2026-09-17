import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, TrendingDown, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { Section, CtaBand } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IllustrativeBanner } from "@/components/site/IllustrativeBanner";
import { Button } from "@/components/ui/button";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";

export const Route = createFileRoute("/case-studies/urban-full-service")({
  loader: async () => {
    const seo = await fetchSeoData("/case-studies/urban-full-service");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/case-studies/urban-full-service"],
        "/case-studies/urban-full-service"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/case-studies/urban-full-service" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Urban Full-Service Operator Case Study",
          description:
            "Four-property urban full-service operator recovers $7K–15K per quarter in OTA reconciliation with Innrly.",
          author: { "@type": "Organization", name: "Innrly" },
          publisher: { "@type": "Organization", name: "Innrly" },
          mainEntityOfPage: "/case-studies/urban-full-service",
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Urban Full-Service", url: "/case-studies/urban-full-service" },
      ]),
    ],
  }),
  component: CaseStudyPage,
});

const metrics = [
  { icon: DollarSign, stat: "$7K–15K", label: "OTA commissions recovered per quarter" },
  { icon: Clock, stat: "6 days", label: "Month-end close (was 12)" },
  { icon: TrendingDown, stat: "~1%", label: "F&B variance closed via POS-to-PMS reconciliation" },
  { icon: CheckCircle2, stat: "8 wks", label: "Time to live across the portfolio" },
];

function CaseStudyPage() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "case-studies-urban-full-service");
  return (
    <div className="bg-background">
      <Breadcrumbs
        items={[
          { name: "Home", to: "/" },
          { name: "Case Studies", to: "/case-studies" },
          { name: "Urban Full-Service" },
        ]}
      />
      <IllustrativeBanner />
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            Case Study · Urban Full-Service
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Recover OTA commission every quarter — and close in days, not weeks.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            A four-property urban full-service operator (Marriott and independent flags, full F&B
            and banquet operations) uses Innrly to reconcile OTA commissions nightly, code F&B
            revenue from POS, and deliver USALI owner packages within the first week of every month.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-cta hover:opacity-90">
              <Link to="/contact">
                Get the same results <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-background/40">
              <Link to="/industries/full-service">Full-service overview</Link>
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
                Four urban hotels with full F&B operations and active banquet calendars. OTA
                commission statements arrived monthly, were spot-checked rather than line-matched,
                and discrepancies typically went unrecovered. F&B revenue was reconciled to POS only
                at month-end, and outlet-level variance often appeared too late to act on.
              </p>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Booking.com, Expedia, and Hotels.com
                  statements reconciled by sampling, not line-by-line.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> POS-to-PMS F&B variance discovered at
                  month-end, rarely traced.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Banquet event orders matched to revenue
                  manually by the controller.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> USALI owner packages took 12 days;
                  ownership wanted them inside a week.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">The rollout</h2>
              <p className="mt-3 text-muted-foreground">
                Innrly connected to OPERA, Micros Simphony POS, and the banquet system in the first
                two weeks. OTA channel reconciliation ran in parallel with manual review for one
                month so the controller could trust the matches. Full cutover at week eight.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">The results, 6 months in</h2>
              <p className="mt-3 text-muted-foreground">
                OTA commission discrepancies surface nightly with a recommended dispute. Recovered
                commission across the four properties typically lands in the $7K–15K range per
                quarter depending on channel mix and dispute success rate. F&B variance tightened to
                roughly 1% and lives in a daily dashboard. Month-end close moved from 12 days to
                about 6.
              </p>
              <div className="mt-6 aurora-card rounded-2xl p-6">
                <p className="text-sm uppercase tracking-wider text-accent">By the numbers</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <p className="text-foreground">
                    <span className="font-semibold">$7K–15K</span> OTA commissions recovered per
                    quarter
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">12 → 6 days</span> month-end close
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">~1%</span> F&B variance, monitored daily
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">USALI 11</span> owner packages auto-generated
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="aurora-card rounded-2xl p-6">
              <Quote className="h-6 w-6 text-accent" aria-hidden />
              <blockquote className="mt-3 text-foreground">
                "{t?.quote || `The OTA recovery alone paid for Innrly several times over. The faster close was the
                part ownership actually noticed.`}"
              </blockquote>
              <footer className="mt-4 text-sm text-muted-foreground">
                {t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "[Corporate Controller, urban full-service operator]"}
              </footer>
            </div>

            <div className="rounded-2xl border border-border bg-surface/40 p-6">
              <p className="text-sm font-semibold text-foreground">Portfolio snapshot</p>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Properties</dt>
                  <dd className="text-foreground">4</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Segment</dt>
                  <dd className="text-foreground">Full-service urban</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Brands</dt>
                  <dd className="text-foreground">Marriott + independent</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">PMS / POS</dt>
                  <dd className="text-foreground">OPERA / Simphony</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Time to live</dt>
                  <dd className="text-foreground">8 weeks</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand
        title="Run the same playbook on your full-service portfolio"
        subtitle="20-minute walkthrough using a sample of your actual OTA, PMS, and POS data."
        primary={{ to: "/contact", label: "Book a demo" }}
        secondary={{ to: "/industries/full-service", label: "Full-service overview" }}
      />
    </div>
  );
}
