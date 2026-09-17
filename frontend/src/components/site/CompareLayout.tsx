import { Link } from "@tanstack/react-router";
import { Check, X, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, CtaBand } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export type CompareCell = true | false | "partial" | string;

export interface CompareRow {
  feature: string;
  innrly: CompareCell;
  competitor: CompareCell;
  note?: string;
}

export interface CompareLayoutProps {
  competitorName: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  summary: { heading: string; body: string }[];
  rows: CompareRow[];
  whenToChoose: { innrly: string[]; competitor: string[] };
  faqs: { q: string; a: string }[];
}

function Cell({ value }: { value: CompareCell }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-accent" aria-label="Yes" />;
  if (value === false)
    return <X className="mx-auto h-4 w-4 text-muted-foreground/60" aria-label="No" />;
  if (value === "partial")
    return <Minus className="mx-auto h-4 w-4 text-muted-foreground" aria-label="Partial" />;
  return <span className="text-sm text-foreground">{value}</span>;
}

export function CompareLayout({
  competitorName,
  eyebrow,
  title,
  intro,
  summary,
  rows,
  whenToChoose,
  faqs,
}: CompareLayoutProps) {
  return (
    <div className="bg-background">
      <Breadcrumbs
        items={[
          { name: "Home", to: "/" },
          { name: "Compare", to: "/compare" },
          { name: `Innrly: alternative to ${competitorName}` },
        ]}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-cta hover:opacity-90">
              <Link to="/contact">See Innrly on your data</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section className="py-12">
        <SectionHeading
          eyebrow="The short version"
          title={`Innrly: alternative to ${competitorName} — at a glance.`}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {summary.map((s) => (
            <div key={s.heading} className="aurora-card rounded-2xl p-6">
              <h3 className="text-base font-semibold text-foreground">{s.heading}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <SectionHeading
          eyebrow="Difference, line by line"
          title="Two ways to run the same back office."
        />
        <div className="mt-10 space-y-3">
          {rows.map((r) => (
            <div
              key={r.feature}
              className="grid grid-cols-1 overflow-hidden aurora-card rounded-2xl md:grid-cols-[1.1fr_1fr_1fr]"
            >
              <div className="flex flex-col justify-center border-b border-border px-5 py-4 md:border-b-0 md:border-r">
                <p className="text-sm font-semibold text-foreground">{r.feature}</p>
                {r.note && <p className="mt-1 text-xs text-muted-foreground">{r.note}</p>}
              </div>
              <div className="flex items-center gap-3 border-b border-border bg-accent/[0.06] px-5 py-4 md:border-b-0 md:border-r">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                  Innrly
                </span>
                <div className="flex-1 text-sm font-medium text-foreground">
                  <Cell value={r.innrly} />
                </div>
              </div>
              <div className="flex items-center gap-3 bg-muted/20 px-5 py-4">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {competitorName}
                </span>
                <div className="flex-1 text-sm text-muted-foreground">
                  <Cell value={r.competitor} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Based on publicly available information as of 2026. {competitorName} is a trademark of its
          respective owner; comparison is informational and not endorsed by {competitorName}.
        </p>
      </Section>

      <Section className="py-12">
        <SectionHeading eyebrow="Why choose Innrly" title="Reasons operators pick Innrly." />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {whenToChoose.innrly.map((i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-accent/40 bg-card p-5"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <span className="text-sm text-foreground">{i}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title={`Questions about Innrly: alternative to ${competitorName}.`}
        />
        <div className="mt-10 max-w-3xl space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="aurora-card rounded-2xl p-6">
              <h3 className="text-base font-semibold text-foreground">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="See Innrly on your portfolio."
        subtitle="20-minute walkthrough on your own data — no slides, no commitment."
        primary={{ to: "/contact", label: "Book a walkthrough" }}
        secondary={{ to: "/pricing", label: "View pricing" }}
      />
    </div>
  );
}
