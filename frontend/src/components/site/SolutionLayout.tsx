import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, CtaBand } from "@/components/site/Section";
import { ProductOrb, type OrbVariant } from "@/components/site/ProductOrb";
import type { LucideIcon } from "lucide-react";

export interface SolutionLayoutProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  metrics: { stat: string; label: string }[];
  sections: { heading: string; body: string }[];
  /** Optional product orb to anchor the hero. When set, replaces metrics-grid as the right-column visual; metrics move under it. */
  orbVariant?: OrbVariant;
  /** Optional in-product artifact rendered between the sections grid and the CTA band. */
  artifact?: React.ReactNode;
  /** Optional eyebrow label above the artifact. */
  artifactEyebrow?: string;
  /** Optional caption shown beneath the artifact eyebrow. */
  artifactCaption?: string;
  /** Where to render the artifact section. Defaults below the content sections. */
  artifactPlacement?: "beforeHero" | "afterHero" | "afterSections";
  /** Small line under the hero bullets noting accounting-system breadth. Pass false to hide. */
  accountingNote?: string | false;
}

export const DEFAULT_ACCOUNTING_NOTE =
  "Works with QuickBooks Online & Desktop, M3, Sage Intacct, and other major accounting systems.";

export function SolutionLayout(props: SolutionLayoutProps) {
  const {
    eyebrow,
    title,
    description,
    bullets,
    icon: Icon,
    metrics,
    sections,
    orbVariant,
    artifact,
    artifactEyebrow,
    artifactCaption,
    artifactPlacement = "afterSections",
    accountingNote,
  } = props;
  const noteText = accountingNote === false ? null : (accountingNote ?? DEFAULT_ACCOUNTING_NOTE);
  const compactHero = artifactPlacement !== "afterSections";
  const artifactSection = artifact ? (
    <Section tone="surface" className={compactHero ? "py-5 sm:py-6" : ""}>
      {(artifactEyebrow || artifactCaption) && (
        <div className="mb-6 text-center">
          {artifactEyebrow && (
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {artifactEyebrow}
            </p>
          )}
          {artifactCaption && (
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              {artifactCaption}
            </h2>
          )}
        </div>
      )}
      <div className="mx-auto max-w-6xl">{artifact}</div>
    </Section>
  ) : null;

  return (
    <div className="bg-background">
      {artifactPlacement === "beforeHero" && artifactSection}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div
          className={`relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8 ${compactHero ? "py-10 lg:py-12" : "py-20 lg:py-24"}`}
        >
          <div className="lg:col-span-3">
            <div className="inline-flex max-w-full items-center gap-3 text-xs font-semibold uppercase tracking-normal text-accent">
              <Icon className="h-3.5 w-3.5" aria-hidden />
              <span className="font-display text-sm font-normal normal-case text-accent">
                {eyebrow}
              </span>
              <span className="h-px w-12 bg-border" aria-hidden />
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
            <ul className="mt-5 space-y-2.5">
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
            <div className="mt-6 flex flex-wrap gap-3">
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

          <div className="lg:col-span-2">
            {orbVariant && (
              <div className="mb-6 flex items-center justify-center">
                <ProductOrb variant={orbVariant} size="lg" />
              </div>
            )}
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

      {artifactPlacement === "afterHero" && artifactSection}

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          {sections.map((s) => (
            <div key={s.heading} className="aurora-card rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-foreground">{s.heading}</h2>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {artifactPlacement === "afterSections" && artifactSection}

      <CtaBand />
    </div>
  );
}
