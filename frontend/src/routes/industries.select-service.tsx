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
    q: "Which select-service PMSes does Innrly support?",
    a: "OPERA Cloud, OnQ (Hilton), FOSSE (Marriott), choiceADVANTAGE, Visual Matrix, StayNTouch, and Cloudbeds — plus most other major systems. Most multi-brand portfolios run 3–5 PMSes and Innrly consolidates them into a single nightly P&L without forcing a system change.",
  },
  {
    q: "Will Innrly work for a single Hampton Inn or Holiday Inn Express?",
    a: "Yes — Starter is built for single properties and small portfolios. The bigger wins compound at 5+ hotels (consolidated reporting, multi-PMS night audit, corporate-team leverage), but single-property select-service operators still save 5–10 hours per week.",
  },
  {
    q: "How does Innrly handle brand-required reporting?",
    a: "Brand-mandated reports (Hilton, Marriott, IHG, Choice, Wyndham) stay where they are — Innrly doesn't replace them. It sits on top, normalizes the data, and produces the cross-brand corporate view your flag reports don't give you.",
  },
  {
    q: "What's the typical onboarding timeline for a select-service portfolio?",
    a: "2–4 weeks for a 5–15 property portfolio. Week 1: PMS and accounting connections. Week 2: chart of accounts mapping and night-audit dry run. Weeks 3–4: parallel running and corporate report sign-off. No PMS migration required.",
  },
];

export const Route = createFileRoute("/industries/select-service")({
  loader: async () => {
    const seo = await fetchSeoData("/industries/select-service");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/industries/select-service"],
        "/industries/select-service"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/industries/select-service" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Industries", url: "/industries/select-service" },
        { name: "Select-Service", url: "/industries/select-service" },
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
  component: SelectServicePage,
});

const painPoints = [
  {
    title: "Four PMSes, one report",
    body: "OPERA, OnQ, FOSSE, choiceADVANTAGE — Innrly pulls them into one nightly P&L so corporate stops merging spreadsheets at 6 a.m.",
  },
  {
    title: "Brand standards without brand silos",
    body: "Keep flag-required workflows on property while corporate sees portfolio-wide labor, RevPAR, and flow-through in a single view.",
  },
  {
    title: "GMs out of the spreadsheet",
    body: "Daily flash, OTA reconciliation, and labor variance arrive in their inbox by 7 a.m. — no Excel pivot tables required.",
  },
  {
    title: "Owner-ready financials",
    body: "Monthly packages render with the brand mix, ADR/Occ/RevPAR splits, and STR-style comp set context owners expect.",
  },
];

const stats = [
  { icon: Clock, stat: "5–15 hrs", label: "Saved per hotel each week" },
  { icon: DollarSign, stat: "$200–500", label: "Revenue loss prevented per hotel weekly" },
  { icon: Users, stat: "200+", label: "Hotels running on Innrly" },
  { icon: Building2, stat: "17,000+", label: "Rooms tracked nightly" },
];

const checklist = [
  "Night-audit consolidation across OPERA, OnQ, FOSSE, choiceADVANTAGE, Visual Matrix",
  "Brand.com + OTA channel reconciliation (Expedia, Booking, Hotels.com)",
  "Franchise fee, royalty, and program-fee tracking",
  "Labor and overtime alerts before payroll runs",
  "Owner P&L packages with multi-property roll-up",
  "AP automation routed by property and GL code",
];

function SelectServicePage() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const pageSpecific = allTestimonials.filter((t: Testimonial) => t.page === "select-service");
  const selectServiceTestimonials = pageSpecific.length > 0
    ? pageSpecific
    : allTestimonials.filter((t: Testimonial) => t.page && t.page.startsWith("testimonials-global"));

  return (
    <div className="bg-background">
      <Breadcrumbs
        items={[{ name: "Home", to: "/" }, { name: "Industries" }, { name: "Select-Service" }]}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-24">
          <div className="lg:col-span-3">
            <Eyebrow>Industries · Select-Service</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Built for the way select-service portfolios actually run.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              You're managing 5, 15, or 50 hotels across multiple flags with a corporate team
              smaller than most single full-service properties. Innrly is the back-office layer that
              lets that math work.
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
                <Link to="/case-studies/midwest-portfolio">Read the 12-hotel case study</Link>
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
          eyebrow="Why select-service operators choose Innrly"
          title="The four things that break at 10+ properties"
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
                Everything a select-service back office needs, out of the box.
              </h2>
              <p className="mt-4 text-muted-foreground">
                No add-ons hunting. No "that's a custom build." The features below ship the day you
                sign.
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
        <SectionHeading eyebrow="Common questions" title="Select-service FAQ" />
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

      <Testimonials testimonials={selectServiceTestimonials} />
      <CtaBand
        title="See Innrly with your own select-service portfolio"
        subtitle="20-minute walkthrough using a sample of your actual PMS data."
        primary={{ to: "/contact", label: "Book a demo" }}
        secondary={{ to: "/case-studies/midwest-portfolio", label: "Read the case study" }}
      />
    </div>
  );
}
