import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, X, Coffee, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, CtaBand } from "@/components/site/Section";
import { ProductOrb, type OrbVariant } from "@/components/site/ProductOrb";
import { DEFAULT_ACCOUNTING_NOTE } from "@/components/site/SolutionLayout";

export interface DeepSolutionLayoutProps {
  // Hero
  icon: LucideIcon;
  eyebrow: string;
  persona: string;
  title: ReactNode;
  description: ReactNode;
  bullets: string[];
  metrics: { stat: string; label: string }[];
  orbVariant: OrbVariant;

  // Before / After
  beforeAfter: {
    title: ReactNode;
    description: string;
    withoutTitle: string;
    without: string[];
    withTitle: string;
    withItems: string[];
  };

  // Workflow walkthrough
  workflow: {
    title: ReactNode;
    description: string;
    steps: { icon: LucideIcon; title: string; body: string }[];
    artifact: ReactNode;
  };

  // What it replaces
  replaces: {
    title: ReactNode;
    description: string;
    items: string[];
  };

  // Quote
  quote: {
    text: string;
    author: string;
  };

  // Modules in suite
  modules: {
    title: ReactNode;
    description: string;
    items: { name: string; body: string }[];
  };

  // FAQ
  faq: {
    title: ReactNode;
    items: { q: string; a: string }[];
  };

  // CTA
  cta: {
    title: string;
    subtitle: string;
  };

  /** Small line under the hero bullets noting accounting-system breadth. Pass false to hide. */
  accountingNote?: string | false;
}

export function DeepSolutionLayout(props: DeepSolutionLayoutProps) {
  const {
    icon: Icon,
    eyebrow,
    persona,
    title,
    description,
    bullets,
    metrics,
    orbVariant,
    beforeAfter,
    workflow,
    replaces,
    quote,
    modules,
    faq,
    cta,
    accountingNote,
  } = props;
  const noteText = accountingNote === false ? null : (accountingNote ?? DEFAULT_ACCOUNTING_NOTE);

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-6">
            <div className="inline-flex max-w-full items-center gap-3 text-xs font-semibold uppercase tracking-normal text-accent">
              <Icon className="h-3.5 w-3.5" aria-hidden />
              <span className="font-display text-sm font-normal normal-case text-accent">
                {persona}
              </span>
              <span className="h-px w-12 bg-border" aria-hidden />
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {eyebrow}
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{description}</p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {noteText && (
              <p className="mt-5 inline-flex max-w-full items-start gap-2 rounded-full border border-border bg-background/40 px-3.5 py-1.5 text-xs text-muted-foreground">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                <span>{noteText}</span>
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-cta hover:opacity-90">
                <Link to="/contact">
                  See it live <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border bg-background/40"
              >
                <Link to="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="mb-6 flex items-center justify-center lg:justify-end">
              <ProductOrb variant={orbVariant} size="lg" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="aurora-card rounded-2xl p-5">
                  <div className="text-2xl font-bold text-gradient sm:text-3xl">{m.stat}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <Section>
        <SectionHeading
          eyebrow="The day, transformed"
          title={beforeAfter.title}
          description={beforeAfter.description}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-destructive">
              <X className="h-3.5 w-3.5" /> Without Innrly
            </div>
            <h3 className="mt-4 text-xl font-bold text-foreground">{beforeAfter.withoutTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {beforeAfter.without.map((w) => (
                <li key={w} className="flex gap-3">
                  <span className="text-destructive">·</span> {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-accent/40 bg-accent/5 p-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              <Coffee className="h-3.5 w-3.5" /> With Innrly
            </div>
            <h3 className="mt-4 text-xl font-bold text-foreground">{beforeAfter.withTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              {beforeAfter.withItems.map((w) => (
                <li key={w} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* WORKFLOW */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="A day in the life"
          title={workflow.title}
          description={workflow.description}
        />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            {workflow.steps.map((s, i) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-2xl border-2 border-accent/30 bg-card/40 p-5 transition-colors hover:border-accent/60"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Step {i + 1}
                  </div>
                  <h4 className="mt-0.5 text-base font-semibold text-foreground">{s.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-24">{workflow.artifact}</div>
        </div>
      </Section>

      {/* REPLACES */}
      <Section>
        <SectionHeading
          eyebrow="What you stop doing"
          title={replaces.title}
          description={replaces.description}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {replaces.items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border-2 border-destructive/40 bg-card px-4 py-2 text-sm text-muted-foreground"
            >
              <X className="h-3.5 w-3.5 text-destructive" />
              <span className="line-through decoration-destructive/60">{item}</span>
            </span>
          ))}
        </div>
      </Section>

      {/* QUOTE */}
      <Section tone="surface">
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-accent/40 bg-card p-10 text-center shadow-[0_18px_55px_-30px_color-mix(in_oklab,var(--accent)_60%,transparent)] sm:p-14">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Icon className="h-6 w-6" />
          </div>
          <blockquote className="mt-6 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            "{quote.text}"
          </blockquote>
          <div className="mt-6 text-sm text-muted-foreground">{quote.author}</div>
          <div className="mt-6">
            <Button asChild variant="outline" className="border-border">
              <Link to="/case-studies/midwest-portfolio">
                Read a customer story <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* MODULES */}
      <Section>
        <SectionHeading
          eyebrow="What's in this suite"
          title={modules.title}
          description={modules.description}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.items.map((m) => (
            <Link
              key={m.name}
              to="/features"
              className="group rounded-2xl border-2 border-accent/35 bg-card p-5 transition hover:border-accent/80 hover:shadow-[0_14px_40px_-24px_color-mix(in_oklab,var(--accent)_70%,transparent)]"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-foreground">{m.name}</h4>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="surface">
        <SectionHeading eyebrow="The honest questions" title={faq.title} />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {faq.items.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border-2 border-accent/35 bg-card p-6 transition-colors hover:border-accent/65"
            >
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h4 className="text-base font-semibold text-foreground">{f.q}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title={cta.title}
        subtitle={cta.subtitle}
        primary={{ to: "/contact", label: "Book a demo" }}
        secondary={{ to: "/features", label: "Browse all features" }}
      />
    </div>
  );
}
