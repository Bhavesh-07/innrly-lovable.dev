import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "surface" | "dark";
}) {
  const toneCls =
    tone === "surface"
      ? "bg-surface/30 border-y border-border/40"
      : tone === "dark"
        ? "bg-background"
        : "";
  return (
    <div className={toneCls} {...(tone === "dark" ? { "data-glow": "dark" as const } : {})}>
      <section
        id={id}
        className={`mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ${className}`}
      >
        {children}
      </section>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex max-w-full items-center gap-3 text-xs font-semibold uppercase tracking-normal text-accent">
      <span className="font-display text-sm font-normal normal-case text-accent">{children}</span>
      <span className="h-px w-12 bg-border" aria-hidden />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";
  return (
    <div className={a}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}

export function CtaBand({
  title = "Ready to see Innrly with your data?",
  subtitle = "90-day free trial · No credit card required · Full feature access",
  primary = { to: "/contact", label: "Book a demo" },
  secondary = { to: "/pricing", label: "Compare plans" },
}: {
  title?: string;
  subtitle?: string;
  primary?: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-hero p-10 text-center sm:p-16">
        <div className="absolute inset-0 -z-0 opacity-30" aria-hidden>
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="relative">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
          <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-cta hover:opacity-90">
              <Link to={primary.to}>
                {primary.label}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-background/40">
              <Link to={secondary.to}>{secondary.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
