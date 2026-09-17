import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, CtaBand } from "@/components/site/Section";

export interface IntegrationLayoutProps {
  partnerName: string;
  eyebrow: string;
  badge?: string;
  title: React.ReactNode;
  intro: string;
  direction: "push-only" | "two-way" | "vague";
  directionLabel: string;
  whatItDoes: { heading: string; body: string }[];
  flow: { from: string; via: string; to: string };
  inScope: string[];
  staysIn: { system: string; items: string[] };
  faqs: { q: string; a: string }[];
}

export function IntegrationLayout({
  partnerName,
  eyebrow,
  badge,
  title,
  intro,
  directionLabel,
  whatItDoes,
  flow,
  inScope,
  staysIn,
  faqs,
}: IntegrationLayoutProps) {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                <Check className="h-3.5 w-3.5" aria-hidden />
                {badge}
              </span>
            )}
            <span className="inline-flex items-center rounded-full border border-border bg-surface/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              {directionLabel}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-cta hover:opacity-90">
              <Link to="/contact">Talk to us about {partnerName}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section className="py-12">
        <SectionHeading eyebrow="How it works" title={`Innrly + ${partnerName} — the data flow.`} />
        <div className="mt-10 grid items-stretch gap-4 md:grid-cols-3">
          {[flow.from, flow.via, flow.to].map((step, i) => (
            <div key={step} className="relative aurora-card rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Step {i + 1}
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">{step}</p>
              {i < 2 && (
                <ArrowRight
                  className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-accent md:block"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <SectionHeading
          eyebrow="What Innrly automates into it"
          title={`What Innrly does for ${partnerName} users.`}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whatItDoes.map((s) => (
            <div key={s.heading} className="aurora-card rounded-2xl p-6">
              <h3 className="text-base font-semibold text-foreground">{s.heading}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <SectionHeading
          eyebrow="Where each platform lives in your stack"
          title="Clear lines, no overlap."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-accent/40 bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">In Innrly</h3>
            <ul className="mt-4 space-y-3">
              {inScope.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aurora-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-foreground">Stays in {staysIn.system}</h3>
            <ul className="mt-4 space-y-3">
              {staysIn.items.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title={`Questions about the ${partnerName} integration.`} />
        <div className="mt-10 max-w-3xl space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="aurora-card rounded-2xl p-6">
              <h3 className="text-base font-semibold text-foreground">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          {partnerName} is a trademark of its respective owner. Integration details reflect Innrly's
          implementation.
        </p>
      </Section>

      <CtaBand
        title={`See Innrly + ${partnerName} on your portfolio.`}
        subtitle="20-minute walkthrough on your own data — no slides, no commitment."
        primary={{ to: "/contact", label: "Book a walkthrough" }}
        secondary={{ to: "/pricing", label: "View pricing" }}
      />
    </div>
  );
}
