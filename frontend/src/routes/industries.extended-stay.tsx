import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Check, Clock, DollarSign, Users } from "lucide-react";
import { Section, SectionHeading, CtaBand, Eyebrow } from "@/components/site/Section";
import { Testimonials } from "@/components/site/Testimonials";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";

const faqs = [
  {
    q: "How does Innrly handle multi-month folio revenue recognition?",
    a: "Long stays (30, 60, 90+ days) are recognized by night, not by check-out. Revenue, taxes, and fees post to the period each night belongs to, so a 60-day stay that spans two months splits cleanly across both monthly P&Ls without manual adjustment.",
  },
  {
    q: "Does Innrly's labor model handle weekly housekeeping?",
    a: "Yes. MPOR benchmarks, schedule templates, and variance alerts are tuned to weekly tidies and full cleans rather than daily — the default cadence assumed by most labor tools breaks extended-stay productivity numbers.",
  },
  {
    q: "What about direct-bill corporate accounts?",
    a: "Direct-bill A/R reconciles nightly. Contract rates audit against the folio, project rates flag against negotiated terms, and A/R aging produces a clean monthly statement per corporate account without three separate spreadsheets.",
  },
  {
    q: "Which extended-stay brands does Innrly support?",
    a: "All major brand families — Marriott (Residence Inn, TownePlace, Element), Hilton (Homewood Suites, Home2 Suites), IHG (Staybridge Suites, Candlewood Suites), Choice (WoodSpring, MainStay, Suburban), and Wyndham (Hawthorn Suites). Multi-brand portfolios consolidate into one nightly P&L.",
  },
];

export const Route = createFileRoute("/industries/extended-stay")({
  loader: async () => {
    const seo = await fetchSeoData("/industries/extended-stay");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/industries/extended-stay"],
        "/industries/extended-stay"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/industries/extended-stay" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Industries", url: "/industries/extended-stay" },
        { name: "Extended-Stay", url: "/industries/extended-stay" },
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
  component: ExtendedStayPage,
});

const painPoints = [
  {
    title: "Long folios that don't break revenue",
    body: "30, 60, and 90+ day stays roll across multiple months. Innrly recognizes revenue correctly by night, not by check-out — so monthly P&Ls match the period they belong to.",
  },
  {
    title: "Weekly housekeeping, not daily",
    body: "Labor models are tuned to weekly tidies and full cleans — MPOR benchmarks, schedule templates, and variance alerts assume the right cadence instead of fighting it.",
  },
  {
    title: "Corporate and project-rate reconciliation",
    body: "Direct-bill corporate accounts and project rates reconcile nightly. A/R aging, contract-rate audits, and ledger transfers stop living in three different spreadsheets.",
  },
  {
    title: "One report across Marriott, Hilton, IHG, Choice extended-stay flags",
    body: "Residence Inn, TownePlace, Homewood, Home2, Staybridge, Candlewood, WoodSpring — one nightly P&L for the whole portfolio without merging four brand reports.",
  },
];

const stats = [
  { icon: Clock, stat: "Weekly", label: "Housekeeping cadence built into MPOR" },
  { icon: DollarSign, stat: "$150–300", label: "Weekly recovery per hotel from A/R audits" },
  { icon: Users, stat: "4 brand families", label: "Marriott, Hilton, IHG, Choice extended-stay" },
  { icon: Building2, stat: "Multi-month", label: "Folio revenue recognition by night" },
];

const checklist = [
  "Long-stay folio revenue recognition by night, not by check-out",
  "Weekly housekeeping MPOR benchmarks and schedule templates",
  "Direct-bill corporate account reconciliation and aging",
  "Project rate and contract audits with variance alerts",
  "Multi-brand consolidation across extended-stay flags",
  "Lean-team labor models with overtime and OT trend alerts",
];

function ExtendedStayPage() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const pageSpecific = allTestimonials.filter((t: Testimonial) => t.page === "extended-stay");
  const globalTestimonials = pageSpecific.length > 0 
    ? pageSpecific 
    : allTestimonials.filter((t: Testimonial) => t.page && t.page.startsWith("testimonials-global"));

  return (
    <div className="bg-background">
      <Breadcrumbs
        items={[{ name: "Home", to: "/" }, { name: "Industries" }, { name: "Extended-Stay" }]}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-24">
          <div className="lg:col-span-3">
            <Eyebrow>Industries · Extended-Stay</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Built for the way extended-stay actually runs.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Extended-stay is not just select-service with longer stays. Long folios, weekly
              housekeeping, project-rate corporate accounts, and lean teams change every part of the
              back office. Innrly is tuned for it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-cta hover:opacity-90">
                <Link to="/contact">
                  See it on your portfolio <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border bg-background/40"
              >
                <Link to="/solutions/reconciliation">See reconciliation</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="aurora-card rounded-2xl p-5">
                  <s.icon className="h-5 w-5 text-accent" aria-hidden />
                  <div className="mt-3 text-2xl font-bold text-gradient sm:text-3xl">{s.stat}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Why extended-stay operators choose Innrly"
          title="The four things generic hotel software gets wrong"
          description="And what Innrly does about each of them."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {painPoints.map((p) => (
            <div key={p.title} className="aurora-card rounded-2xl p-7">
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl border border-border bg-surface/40 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>What's included</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold text-foreground">
                Extended-stay specifics, not retrofits.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Out of the box — no "we'll customize that" and no extra modules to license.
              </p>
            </div>
            <ul className="space-y-3">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-3 text-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading eyebrow="Common questions" title="Extended-stay FAQ" />
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

      <Testimonials testimonials={globalTestimonials} />
      <CtaBand
        title="See Innrly on your extended-stay portfolio"
        subtitle="20-minute walkthrough using a sample of your actual PMS and folio data."
        primary={{ to: "/contact", label: "Book a demo" }}
        secondary={{ to: "/industries/select-service", label: "Run select-service too?" }}
      />
    </div>
  );
}
