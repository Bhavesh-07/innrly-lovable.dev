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
    q: "Does Innrly support USALI 11th edition out of the box?",
    a: "Yes. The default chart of accounts ships USALI-aligned with departmental P&Ls, schedule of operated departments, and the supporting reconciliations auditors and ownership groups expect. No re-mapping work required at onboarding.",
  },
  {
    q: "How does Innrly handle F&B and banquet reconciliation?",
    a: "POS integrations (Micros Simphony, Toast, Squirrel) push outlet-level F&B revenue and covers into Innrly nightly. Banquet event orders reconcile to the PMS and catering system, and variances surface the next morning instead of at month-end.",
  },
  {
    q: "What about resort fees, spa, golf, and parking revenue?",
    a: "All ancillary revenue streams are first-class — separate departmental P&L lines, separate labor tracking, and separate reconciliation against the source system (spa management, golf POS, parking system).",
  },
  {
    q: "Can Innrly handle a single full-service property, or do I need a portfolio?",
    a: "Single property is fine. A standalone full-service hotel or resort typically saves 20–40 controller hours per month and recovers 0.5–2% of F&B revenue through reconciliation. Portfolio operators add multi-property consolidation on top.",
  },
];

export const Route = createFileRoute("/industries/full-service")({
  loader: async () => {
    const seo = await fetchSeoData("/industries/full-service");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/industries/full-service"],
        "/industries/full-service"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/industries/full-service" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Industries", url: "/industries/full-service" },
        { name: "Full-Service", url: "/industries/full-service" },
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
  component: FullServicePage,
});

const painPoints = [
  {
    title: "F&B GL coding that doesn't bury controllers",
    body: "Outlet-by-outlet F&B revenue, covers, and cost of sales flow into Innrly nightly — coded to USALI-aligned accounts without a controller re-keying POS exports.",
  },
  {
    title: "Banquets and groups, reconciled the next morning",
    body: "Banquet event orders, room blocks, and group folio splits reconcile to the PMS and POS automatically — variances surface before month-end, not after.",
  },
  {
    title: "Multi-outlet labor without payroll surprises",
    body: "Housekeeping, F&B, banquets, spa, and front office tracked separately with department-level MPOR and overtime alerts before the pay period closes.",
  },
  {
    title: "Owner reporting auditors actually accept",
    body: "Monthly packages in true USALI 11th-edition format with departmental P&Ls, schedule of operated departments, and supporting reconciliations attached.",
  },
];

const stats = [
  { icon: Clock, stat: "20–40 hrs", label: "Saved per full-service hotel each month" },
  { icon: DollarSign, stat: "0.5–2%", label: "F&B revenue recovered via reconciliation" },
  { icon: Users, stat: "USALI 11", label: "Aligned chart of accounts out of the box" },
  { icon: Building2, stat: "200+", label: "Hotels including resorts and conference centers" },
];

const checklist = [
  "OPERA, Infor HMS, Maestro, and StayNTouch night-audit ingestion",
  "POS integration (Micros Simphony, Toast, Squirrel) for outlet-level F&B",
  "Banquet event order reconciliation with PMS and catering systems",
  "USALI 11th-edition departmental P&L and schedules",
  "Spa, golf, parking, and resort fee revenue tracking",
  "Multi-outlet labor and overtime alerts by department",
];

function FullServicePage() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const pageSpecific = allTestimonials.filter((t: Testimonial) => t.page === "full-service");
  const globalTestimonials = pageSpecific.length > 0 
    ? pageSpecific 
    : allTestimonials.filter((t: Testimonial) => t.page && t.page.startsWith("testimonials-global"));

  return (
    <div className="bg-background">
      <Breadcrumbs
        items={[{ name: "Home", to: "/" }, { name: "Industries" }, { name: "Full-Service" }]}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-24">
          <div className="lg:col-span-3">
            <Eyebrow>Industries · Full-Service & Resorts</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Full-service complexity, finally on rails.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Full-service hotels and resorts run more like four businesses stacked in one building
              — rooms, F&B, banquets, and ancillary. Innrly is the back-office layer that keeps all
              four reconciled, coded, and owner-ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-cta hover:opacity-90">
                <Link to="/contact">
                  See it on your property <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border bg-background/40"
              >
                <Link to="/solutions/business-intelligence">See the BI layer</Link>
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
          eyebrow="Why full-service operators choose Innrly"
          title="The four places full-service back offices bleed time"
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
                Built for hotels where F&B is a real line of business.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Innrly ships with the integrations and chart-of-accounts work full-service
                controllers usually pay a consulting firm to set up.
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
        <SectionHeading eyebrow="Common questions" title="Full-service FAQ" />
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
        title="See Innrly on your full-service property"
        subtitle="20-minute walkthrough using a sample of your actual PMS and POS data."
        primary={{ to: "/contact", label: "Book a demo" }}
        secondary={{ to: "/industries/select-service", label: "Run select-service too?" }}
      />
    </div>
  );
}
