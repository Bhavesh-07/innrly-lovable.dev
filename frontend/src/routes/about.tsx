import { createFileRoute, Link } from "@tanstack/react-router";
import { User, Quote, Check } from "lucide-react";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import vimalPortrait from "@/assets/team/vimal.jpg";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  loader: async () => {
    const seo = await fetchSeoData("/about");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(loaderData?.seo || null, defaultSeoData["/about"], "/about"),
      {
        property: "og:image:alt",
        content:
          "We ate our own cooking for 16 years — built by Vimal Patel inside Q Hotels Management.",
      },
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Innrly",
          url: "/about",
          description:
            "Innrly was built by hotelier Vimal Patel and has run Q Hotels Management's portfolio since 2007.",
          mainEntity: {
            "@type": "Organization",
            name: "Innrly",
            founder: {
              "@type": "Person",
              name: "Vimal Patel",
              jobTitle: "Founder, Innrly · Q Hotels Management",
            },
            foundingDate: "2007",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "About", item: "/about" },
          ],
        }),
      },
    ],
  }),
});

const RECEIPTS = [
  { value: "19 years", label: "Running in our own hotels" },
  { value: "4 brands", label: "Hilton · Marriott · IHG · Best Western" },
  { value: "Since 2012", label: "Multi-property, multi-brand" },
];

const TIMELINE = [
  {
    year: "2007",
    title: "Built for our own hotels",
    body: "Vimal builds the first internal tool at Q Hotels Management to replace six spreadsheets and a stack of night-audit packets.",
  },
  {
    year: "2012",
    title: "Multi-property, multi-brand",
    body: "Rolled across the full Q Hotels portfolio — Hilton, Marriott, IHG, and Best Western properties running on one back office.",
  },
  {
    year: "2023",
    title: "Released as Innrly",
    body: "After 16 years of operator-only use, the platform was rebranded and opened up to other independent operators and management groups.",
  },
  {
    year: "Today",
    title: "200+ properties live",
    body: "Independent owners and management companies across the US run their back office on Innrly — and Q Hotels still does too.",
  },
];

const TRANSLATOR = [
  "You're not the beta tester. 19 years of edge cases are already handled.",
  "The roadmap is set by an operator — not a PM who's never run a night audit.",
  "If it breaks in your hotel, it broke in ours first. And we already fixed it.",
];

function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
            Operator-built. Operator-run. Since 2007.
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            19 years in our own hotels{" "}
            <span className="text-gradient">before we sold it to yours.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Innrly has been running Q Hotels Management's portfolio — across Hilton, Marriott, IHG,
            and Best Western properties — since 2007. We released it to other operators in 2023.
          </p>
        </div>
      </section>

      {/* Receipts strip */}
      <div className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-3 sm:gap-6 sm:px-6 lg:px-8">
          {RECEIPTS.map((r) => (
            <div key={r.label} className="flex items-baseline gap-3">
              <span className="text-xl font-bold text-accent">{r.value}</span>
              <span className="text-sm text-muted-foreground">{r.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Founder letter */}
      <Section className="py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            A note from the founder
          </h2>

          {/* Compact byline: small portrait + name */}
          <div className="mt-6 flex items-center gap-4">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border bg-gradient-to-br from-surface to-card">
              <img src={vimalPortrait} alt="Vimal Patel" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-foreground">Vimal Patel</div>
              <div className="text-xs text-muted-foreground">
                Founder, Innrly · Q Hotels Management
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              In 2007 I was closing the month at Q Hotels with six spreadsheets, a stack of
              night-audit packets, and a part-time bookkeeper. None of it agreed with the PMS. So I
              built the tool I needed.
            </p>
            <p>
              One place where the night audit, payroll, AP, and the P&amp;L finally talked to each
              other. We've been running our portfolio on it ever since — across Hilton, Marriott,
              IHG, and Best Western properties.
            </p>
            <p>
              Other operators kept asking. In 2023 we rebranded it{" "}
              <span className="font-semibold text-foreground">Innrly</span> and opened it up. Every
              feature still ships through our own hotels first.
            </p>
          </div>

          {/* Pull quote */}
          <figure className="relative mt-10 rounded-2xl border border-accent/30 bg-card/60 p-6 sm:p-8">
            <Quote
              className="absolute -top-3 left-6 h-6 w-6 rounded-full bg-background p-1 text-accent"
              aria-hidden
            />
            <blockquote className="font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
              "Every hotel loses money in the small places no one is watching. I built Innrly to
              watch them — with an owner's mindset, at the scale of a portfolio. Micro discipline,
              macro reach."
            </blockquote>
            <figcaption className="mt-5 border-t border-border/60 pt-4 text-sm">
              <span className="font-semibold text-foreground">Vimal Patel</span>
              <span className="text-muted-foreground">
                {" "}
                — Founder, Innrly · Q Hotels Management
              </span>
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* What this means for you */}
      <Section className="border-t border-border/60 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            What this means for you
          </h2>
          <p className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
            You're buying something that's already survived 19 years of real hotels.
          </p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {TRANSLATOR.map((line) => (
            <li
              key={line}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-5"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <span className="text-sm leading-relaxed text-muted-foreground">{line}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Timeline */}
      <Section className="border-t border-border/60 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            The build
          </h2>
          <p className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            From one hotel's pain to a platform for 200+.
          </p>
        </div>
        <ol className="relative mx-auto mt-12 max-w-3xl space-y-8 border-l border-border/60 pl-8">
          {TIMELINE.map((t) => (
            <li key={t.year} className="relative">
              <span
                className="absolute -left-[37px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background"
                aria-hidden
              />
              <div className="text-[11px] font-bold uppercase tracking-wider text-accent">
                {t.year}
              </div>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{t.title}</h3>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* CTA band */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Run your back office the way an operator would.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            See Innrly with your portfolio. 30-minute demo, no pitch deck — or skip ahead and start
            your 90-day trial.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-cta hover:opacity-90">
              <Link to="/contact">See it on your portfolio</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/onboarding">Start the 90-day trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
