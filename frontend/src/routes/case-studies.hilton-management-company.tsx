import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Clock, DollarSign, CheckCircle2, Building2 } from "lucide-react";
import { Section, CtaBand } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IllustrativeBanner } from "@/components/site/IllustrativeBanner";
import { Button } from "@/components/ui/button";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";

export const Route = createFileRoute("/case-studies/hilton-management-company")({
  loader: async () => {
    const seo = await fetchSeoData("/case-studies/hilton-management-company");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/case-studies/hilton-management-company"],
        "/case-studies/hilton-management-company"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/case-studies/hilton-management-company" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Hilton Management Company Case Study",
          description:
            "28-property Hilton management company closes books in ~6 days using Innrly.",
          author: { "@type": "Organization", name: "Innrly" },
          publisher: { "@type": "Organization", name: "Innrly" },
          mainEntityOfPage: "/case-studies/hilton-management-company",
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Hilton Management Company", url: "/case-studies/hilton-management-company" },
      ]),
    ],
  }),
  component: CaseStudyPage,
});

const metrics = [
  { icon: Clock, stat: "14 → ~6 days", label: "Month-end close" },
  { icon: DollarSign, stat: "1 FTE", label: "Reassigned from reformatting to analysis" },
  { icon: Building2, stat: "28", label: "Hotels on one nightly close" },
  { icon: CheckCircle2, stat: "10 wks", label: "Time to live across the portfolio" },
];

function CaseStudyPage() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "case-studies-hilton");
  return (
    <div className="bg-background">
      <Breadcrumbs
        items={[
          { name: "Home", to: "/" },
          { name: "Case Studies", to: "/case-studies" },
          { name: "Hilton Management Co." },
        ]}
      />
      <IllustrativeBanner />
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            Case Study · Hilton Management Company
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            28 hotels, one close — in about a week, not two.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            A Hilton-focused management company (Hampton, Hilton Garden Inn, Home2, Embassy Suites)
            consolidates OnQ and OPERA night audits, runs AP through a single approval queue, and
            ships owner financials inside the first week of every month.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-cta hover:opacity-90">
              <Link to="/contact">
                Get the same results <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-background/40">
              <Link to="/integrations/opera">See OPERA integration</Link>
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
                A 28-property Hilton management company was growing two hotels per quarter, but the
                corporate accounting team was already at capacity. Month-end took 14 days. Two
                people did almost nothing except reformat OnQ and OPERA reports for QuickBooks. AP
                invoices lived in three email inboxes and a shared drive.
              </p>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">·</span> OnQ and OPERA outputs reformatted by hand
                  into a corporate template.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> AP invoices approved over email; no central
                  audit trail.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Owner P&Ls sent on the 14th — too late to
                  influence the next month.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Each new property added ~30 hours of
                  monthly corporate work.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">The rollout</h2>
              <p className="mt-3 text-muted-foreground">
                Innrly connected to OnQ and OPERA across the portfolio in four weeks. AP automation
                went live in week six. The 28th property was on the same dashboard set by week ten.
                No flag exceptions, no IT lift on property.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">The results, 6 months in</h2>
              <p className="mt-3 text-muted-foreground">
                Month-end close runs in roughly 6 business days instead of 14. AP routes through one
                queue with property and GL-coded approvals. One of the two reformatting roles
                shifted into an analyst seat focused on labor and OTA trend work. Adding the 29th
                and 30th hotels added no new corporate headcount.
              </p>
              <div className="mt-6 aurora-card rounded-2xl p-6">
                <p className="text-sm uppercase tracking-wider text-accent">By the numbers</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <p className="text-foreground">
                    <span className="font-semibold">14 → ~6 days</span> month-end close
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">1 FTE</span> reassigned from reformatting to
                    analysis
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">28 hotels</span> on one consolidated nightly
                    close
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">No new</span> corporate headcount as portfolio
                    grew
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="aurora-card rounded-2xl p-6">
              <Quote className="h-6 w-6 text-accent" aria-hidden />
              <blockquote className="mt-3 text-foreground">
                "{t?.quote || `Growth used to mean hiring controllers. Now it means adding a property to a
                dashboard. The economics of the management contract changed.`}"
              </blockquote>
              <footer className="mt-4 text-sm text-muted-foreground">
                {t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "[CFO, Hilton-focused management company]"}
              </footer>
            </div>

            <div className="rounded-2xl border border-border bg-surface/40 p-6">
              <p className="text-sm font-semibold text-foreground">Portfolio snapshot</p>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Properties</dt>
                  <dd className="text-foreground">28</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Segment</dt>
                  <dd className="text-foreground">Hilton-focused</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Brands</dt>
                  <dd className="text-foreground">Hampton, HGI, Home2, Embassy</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">PMS systems</dt>
                  <dd className="text-foreground">OnQ, OPERA</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Time to live</dt>
                  <dd className="text-foreground">10 weeks</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand
        title="Scale your management company without scaling corporate headcount"
        subtitle="20-minute walkthrough using a sample of your actual PMS and AP data."
        primary={{ to: "/contact", label: "Book a demo" }}
        secondary={{ to: "/industries/select-service", label: "Select-service overview" }}
      />
    </div>
  );
}
