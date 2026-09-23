import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, TrendingDown, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { Section, CtaBand } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IllustrativeBanner } from "@/components/site/IllustrativeBanner";
import { Button } from "@/components/ui/button";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";

export const Route = createFileRoute("/case-studies/boutique-group")({
  loader: async () => {
    const seo = await fetchSeoData("/case-studies/boutique-group");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/case-studies/boutique-group"],
        "/case-studies/boutique-group"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/case-studies/boutique-group" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Independent Boutique Group Case Study",
          description:
            "6-property independent boutique group consolidates 7 PMSes into one Innrly view.",
          author: { "@type": "Organization", name: "Innrly" },
          publisher: { "@type": "Organization", name: "Innrly" },
          mainEntityOfPage: "/case-studies/boutique-group",
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Boutique Group", url: "/case-studies/boutique-group" },
      ]),
    ],
  }),
  component: CaseStudyPage,
});

const metrics = [
  { icon: CheckCircle2, stat: "7 → 1", label: "PMSes consolidated into one view" },
  { icon: Clock, stat: "8 days", label: "Month-end close · down from 18" },
  { icon: DollarSign, stat: "$15K–25K", label: "Net annual savings vs. prior bookkeeping setup" },
  { icon: TrendingDown, stat: "2", label: "Back-office people for 6 properties" },
];

function CaseStudyPage() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "case-studies-boutique-group");
  return (
    <div className="bg-background">
      <Breadcrumbs
        items={[
          { name: "Home", to: "/" },
          { name: "Case Studies", to: "/case-studies" },
          { name: "Boutique Group" },
        ]}
      />
      <IllustrativeBanner />
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            Case Study · Independent Boutique
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Seven PMSes, one consolidated P&L — by a two-person back office.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            A six-property independent boutique group (lifestyle hotels across three states, each
            running whichever PMS the GM inherited) uses Innrly to consolidate everything into one
            P&L — replacing a fractional CFO's manual Excel workbook and an outsourced bookkeeping
            firm.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-cta hover:opacity-90">
              <Link to="/contact">
                Get the same results <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-background/40">
              <Link to="/solutions/business-intelligence">See the BI dashboard</Link>
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
                Six independent hotels acquired over four years, each on a different PMS —
                Cloudbeds, Mews, ThinkReservations, Maestro, SkyTouch, RoomKeyPMS, and one still
                running spreadsheets at the front desk. A fractional CFO rebuilt a consolidated P&L
                in Excel every month. Outsourced bookkeeping was a meaningful monthly line item and
                always a step behind.
              </p>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Seven different PMS exports, normalized by
                  hand into one chart of accounts.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Owner reporting in PDFs assembled from
                  three different formats.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> No real-time view — the CFO learned about
                  issues 30 days late.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Independent brand standards meant no shared
                  back-office infrastructure to lean on.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">The rollout</h2>
              <p className="mt-3 text-muted-foreground">
                Innrly's PMS-agnostic ingest connected all seven systems in five weeks. A single
                USALI-aligned chart of accounts was mapped per property. Owner reporting moved from
                PDFs-by-email to a branded portal. The outsourced bookkeeping firm was replaced by
                one in-house controller plus Innrly. Total elapsed: nine weeks.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">The results, 12 months in</h2>
              <p className="mt-3 text-muted-foreground">
                Month-end close went from 18 days to about 8. The back office runs on two people — a
                controller and a part-time AP clerk — for six hotels. The outsourced bookkeeping
                firm was replaced by Innrly plus the in-house controller hire, for a net annual
                savings in the $15K–25K range depending on the month's AP volume. The CFO sees
                portfolio P&L within a day or two of month-end, in time for the ownership call.
              </p>
              <div className="mt-6 aurora-card rounded-2xl p-6">
                <p className="text-sm uppercase tracking-wider text-accent">By the numbers</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <p className="text-foreground">
                    <span className="font-semibold">7 PMSes</span> consolidated into one
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">18 → ~8 days</span> month-end close
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">$15K–25K/yr</span> net savings vs. prior setup
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">2 people</span> running back office for 6 hotels
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="aurora-card rounded-2xl p-6">
              <Quote className="h-6 w-6 text-accent" aria-hidden />
              <blockquote className="mt-3 text-foreground">
                "{t?.quote || `Every other vendor told us to standardize on one PMS first. Innrly was the only one
                willing to meet us where we actually were.`}"
              </blockquote>
              <footer className="mt-4 text-sm text-muted-foreground">
                {t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "[CFO, independent boutique hotel group]"}
              </footer>
            </div>

            <div className="rounded-2xl border border-border bg-surface/40 p-6">
              <p className="text-sm font-semibold text-foreground">Portfolio snapshot</p>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Properties</dt>
                  <dd className="text-foreground">6</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Segment</dt>
                  <dd className="text-foreground">Independent boutique</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Brands</dt>
                  <dd className="text-foreground">Independent (lifestyle)</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">PMSes</dt>
                  <dd className="text-foreground">7 different</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Time to live</dt>
                  <dd className="text-foreground">9 weeks</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand
        title="Got a mixed-PMS portfolio? That's exactly what we're built for."
        subtitle="20-minute walkthrough — bring your messiest exports."
        primary={{ to: "/contact", label: "Book a demo" }}
        secondary={{ to: "/integrations", label: "See supported PMSes" }}
      />
    </div>
  );
}
