import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, TrendingDown, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { Section, CtaBand } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IllustrativeBanner } from "@/components/site/IllustrativeBanner";
import { Button } from "@/components/ui/button";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";

export const Route = createFileRoute("/case-studies/extended-stay-portfolio")({
  loader: async () => {
    const seo = await fetchSeoData("/case-studies/extended-stay-portfolio");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/case-studies/extended-stay-portfolio"],
        "/case-studies/extended-stay-portfolio"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/case-studies/extended-stay-portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Extended-Stay Portfolio Case Study",
          description:
            "18-property Marriott + Hilton extended-stay operator tightens MPOR and shortens month-end close with Innrly.",
          author: { "@type": "Organization", name: "Innrly" },
          publisher: { "@type": "Organization", name: "Innrly" },
          mainEntityOfPage: "/case-studies/extended-stay-portfolio",
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Extended-Stay Portfolio", url: "/case-studies/extended-stay-portfolio" },
      ]),
    ],
  }),
  component: CaseStudyPage,
});

const metrics = [
  { icon: TrendingDown, stat: "8–12%", label: "MPOR reduction across the portfolio" },
  { icon: Clock, stat: "7 days", label: "Month-end close (was 11)" },
  { icon: DollarSign, stat: "$7K–15K", label: "Annual labor savings per hotel" },
  { icon: CheckCircle2, stat: "6 wks", label: "Time to live across 18 hotels" },
];

function CaseStudyPage() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "case-studies-extended-stay");
  return (
    <div className="bg-background">
      <Breadcrumbs
        items={[
          { name: "Home", to: "/" },
          { name: "Case Studies", to: "/case-studies" },
          { name: "Extended-Stay Portfolio" },
        ]}
      />
      <IllustrativeBanner />
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            Case Study · Extended-Stay
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Fewer housekeeping minutes per occupied room — across 18 extended-stay hotels.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            An 18-property extended-stay operator (Residence Inn, TownePlace, Home2, Homewood) uses
            Innrly to normalize long-folio revenue, model weekly-clean MPOR correctly, and deliver
            consolidated USALI owner packages inside the first week of every month.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-cta hover:opacity-90">
              <Link to="/contact">
                Get the same results <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-background/40">
              <Link to="/industries/extended-stay">Extended-stay overview</Link>
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
                Extended-stay economics are different. Long-folio guests skew average length of stay
                past 14 nights, weekly-clean schedules invalidate daily-MPOR benchmarks, and tax
                treatment changes after 30 days. Reporting tools built for transient hotels missed
                all three.
              </p>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Long-stay tax exemption posted manually
                  after day 30, often late.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Daily MPOR benchmarks misleading on
                  weekly-clean schedules — couldn't tell which house attendants were over/under
                  standard.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Owner packages reconciled across two PMSes
                  (FOSSE + OnQ) by hand.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">·</span> Month-end close took 11 days; corporate had
                  room for 5.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">The rollout</h2>
              <p className="mt-3 text-muted-foreground">
                Innrly connected to FOSSE (Marriott extended-stay), OnQ (Hilton), and the shared
                payroll system in three weeks. Weekly-clean MPOR was modeled as a 7-day rolling
                window matched to scheduled clean days. Long-stay tax exemption was automated based
                on day-31 detection in the folio. Full cutover at week six.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">The results, 9 months in</h2>
              <p className="mt-3 text-muted-foreground">
                MPOR dropped roughly 8–12% portfolio-wide — not because attendants got faster, but
                because the schedule finally matched the work (weekly-clean shifts no longer
                measured against daily-clean standards). Long-stay tax posts the day the guest
                qualifies. Month-end close moved from 11 days to about 7. Owner-reporting headcount
                stayed flat while the portfolio grew from 12 to 18 hotels.
              </p>
              <div className="mt-6 aurora-card rounded-2xl p-6">
                <p className="text-sm uppercase tracking-wider text-accent">By the numbers</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <p className="text-foreground">
                    <span className="font-semibold">8–12%</span> MPOR reduction
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">11 → ~7 days</span> month-end close
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">$7K–15K</span> labor savings per hotel / year
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">No new</span> back-office hires as portfolio
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
                "{t?.quote || `Nobody else modeled weekly-clean MPOR correctly. Once Innrly fixed that, the
                housekeeping conversation with my GMs completely changed.`}"
              </blockquote>
              <footer className="mt-4 text-sm text-muted-foreground">
                {t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "[VP of Operations, extended-stay management company]"}
              </footer>
            </div>

            <div className="rounded-2xl border border-border bg-surface/40 p-6">
              <p className="text-sm font-semibold text-foreground">Portfolio snapshot</p>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Properties</dt>
                  <dd className="text-foreground">18</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Segment</dt>
                  <dd className="text-foreground">Extended-stay</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Brands</dt>
                  <dd className="text-foreground">Marriott + Hilton</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">PMS</dt>
                  <dd className="text-foreground">FOSSE / OnQ</dd>
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
        title="Run the same playbook on your extended-stay portfolio"
        subtitle="20-minute walkthrough using a sample of your actual PMS, payroll, and housekeeping data."
        primary={{ to: "/contact", label: "Book a demo" }}
        secondary={{ to: "/industries/extended-stay", label: "Extended-stay overview" }}
      />
    </div>
  );
}
