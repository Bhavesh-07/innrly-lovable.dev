import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";
import {
  ArrowRight,
  BarChart3,
  Check,
  X,
  Mail,
  Calendar,
  LineChart,
  Eye,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, CtaBand } from "@/components/site/Section";
import { ProductOrb } from "@/components/site/ProductOrb";
import { BeforeAfterFlow } from "@/components/site/BeforeAfterFlow";
import { BIChaos } from "@/components/site/BIChaos";
import { BIFlow } from "@/components/site/BIFlow";
import { BIMorningBriefing } from "@/components/site/BIMorningBriefing";

export const Route = createFileRoute("/solutions/business-intelligence")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/solutions/business-intelligence");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/solutions/business-intelligence"],
        "/solutions/business-intelligence"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/solutions/business-intelligence" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Innrly Business Intelligence",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "/solutions/business-intelligence",
          offers: { "@type": "Offer", priceCurrency: "USD" },
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Solutions", url: "/solutions" },
        { name: "Business Intelligence", url: "/solutions/business-intelligence" },
      ]),
    ],
  }),
});

const morningRail = [
  { time: "4:47 AM", label: "Auto-pull complete", body: "Last night's PMS, OTA, comp set" },
  { time: "5:00 AM", label: "Early Bird lands", body: "Digest in your inbox — no login" },
  { time: "5:02 AM", label: "Decided", body: "Variance flagged before coffee" },
  { time: "7:00 AM", label: "Pulse open", body: "Portfolio on one screen" },
  { time: "9:00 AM", label: "Calendar pacing", body: "Soft weekend, two weeks out" },
];

function Page() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "business-intelligence");
  return (
    <div className="bg-background">
      {/* HERO — persona + pain */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-6">
            {/* PERSONA CHIP — accent-bordered, matches Deep pages */}
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-accent/50 bg-accent/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
              <BarChart3 className="h-3.5 w-3.5" aria-hidden />
              <span>For multi-property owners &amp; VPs of Operations</span>
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Hotel Business Intelligence
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Your whole portfolio, <span className="text-gradient">before your first coffee.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              You shouldn't have to wait until the 15th of the month to find out which property ran
              in the red last week. Innrly puts every property on one screen, in real time — across
              every brand and PMS — so you walk into the day already knowing where to look. Discover
              more in our guide to{" "}
              <Link to="/hotel-back-office-automation" className="text-accent underline">
                hotel back-office automation
              </Link>
              .
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Wake up to a 5 AM email digest with last night's numbers",
                "Drill into any property in two clicks — no spreadsheet exports",
                "Benchmark against STR comp set automatically",
                "See what your competitors are charging without logging into a single OTA",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-cta hover:opacity-90">
                <Link to="/contact">
                  See your portfolio on Innrly <ArrowRight className="ml-1.5 h-4 w-4" />
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
              <ProductOrb variant="intelligence" size="lg" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "5 AM", label: "Daily digest in your inbox" },
                { stat: "<5min", label: "Login to decision" },
                { stat: "$3K–7K/mo", label: "Avg variance caught early" },
                { stat: "100%", label: "Brand & PMS neutral" },
              ].map((m) => (
                <div key={m.label} className="aurora-card rounded-2xl p-5">
                  <div className="text-2xl font-bold text-gradient sm:text-3xl">{m.stat}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOP ANIMATION — the single before/after beat */}
      <Section tone="surface" className="py-8 sm:py-10">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            From 4:47 AM scramble to 5:02 AM decided
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Watch the morning briefing assemble itself in 6 seconds.
          </h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <BeforeAfterFlow
            chaos={<BIChaos />}
            after={(playKey) => <BIFlow playKey={playKey} />}
            motion="expenses"
          />
        </div>
      </Section>

      {/* PROOF — moved up, right after the before/after beat */}
      <Section>
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-accent/40 bg-card p-10 text-center shadow-[0_18px_55px_-30px_color-mix(in_oklab,var(--accent)_60%,transparent)] sm:p-14">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Eye className="h-6 w-6" />
          </div>
          <blockquote className="mt-6 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            "{t?.quote || "I used to start every Monday on the phone with my controller. Now I open one tab, see all eight hotels, and I'm done in five minutes. Innrly didn't replace a tool — it replaced a meeting."}"
          </blockquote>
          <div className="mt-6 text-sm text-muted-foreground">
            {t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "VP of Operations · 8-property midwest portfolio"}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline" className="border-border">
              <Link to="/case-studies/midwest-portfolio">
                Read the full story <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* MORNING TIMELINE RAIL — dramatizes "before coffee" */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="The owner's morning"
          title={
            <>
              What happens <span className="text-gradient">before you're awake.</span>
            </>
          }
          description="The portfolio is already decided by the time the coffee finishes brewing."
        />
        <div className="mt-10">
          <div className="relative">
            {/* Horizontal rail */}
            <div
              className="absolute left-0 right-0 top-7 hidden h-px bg-border md:block"
              aria-hidden
            />
            <div className="grid gap-6 md:grid-cols-5">
              {morningRail.map((m, i) => (
                <div key={m.time} className="relative">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/60 bg-background text-[11px] font-bold text-accent shadow-elevated">
                    {m.time.split(" ")[0]}
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {m.time}
                    </div>
                    <div className="mt-0.5 text-sm font-semibold text-foreground">{m.label}</div>
                    <p className="mt-1 text-xs text-muted-foreground">{m.body}</p>
                  </div>
                  {i < morningRail.length - 1 && (
                    <div
                      className="absolute right-[-12px] top-6 hidden text-accent md:block"
                      aria-hidden
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* WORKFLOW WALKTHROUGH with sticky artifact */}
      <Section>
        <SectionHeading
          eyebrow="A day in the life"
          title={
            <>
              How owners <span className="text-gradient">actually use it.</span>
            </>
          }
          description="The four moves that replace the spreadsheet ritual."
        />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            {[
              {
                icon: Mail,
                title: "5 AM — Early Bird arrives",
                body: "Last night's pacing, variances, and exceptions land in your inbox automatically. No login required to read the headline.",
              },
              {
                icon: BarChart3,
                title: "7 AM — Pulse on the screen",
                body: "Open the Pulse dashboard. Occupancy, ADR, RevPAR, MPOR, and labor % for every property — refreshed on a schedule you control.",
              },
              {
                icon: Calendar,
                title: "9 AM — Calendar view for pacing",
                body: "Forward-looking demand side-by-side with last year. Spot the soft weekend two weeks out, not two days.",
              },
              {
                icon: LineChart,
                title: "Anytime — STR + Rate Shop",
                body: "STR Index updates without uploads. Rate Shop tells you what the comp set is selling for, by date and room type.",
              },
            ].map((s, i) => (
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
                  <h3 className="mt-0.5 text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-24">
            <BIMorningBriefing />
          </div>
        </div>
      </Section>

      {/* WHAT IT REPLACES */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="What you stop doing"
          title={
            <>
              What Innrly BI <span className="text-gradient">replaces.</span>
            </>
          }
          description="Not another dashboard layered on top — these things go away."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Weekly KPI spreadsheets",
            "Manual STR uploads",
            "Brand portal logins for occupancy",
            'GM "send me your numbers" emails',
            "OTA tab-hopping for rate checks",
            "Month-end variance surprises",
            "Side-by-side LY comparisons in Excel",
          ].map((item) => (
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

      {/* MODULES IN SUITE */}
      <Section>
        <SectionHeading
          eyebrow="What's in the BI suite"
          title={
            <>
              The modules <span className="text-gradient">behind the dashboard.</span>
            </>
          }
          description="Looking for the full feature list? Each module deep-links into the Features page."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Pulse Dashboard", body: "Portfolio KPIs — occ, ADR, RevPAR, MPOR, labor %." },
            { name: "Early Bird Digest", body: "5 AM email summary across every property." },
            { name: "Calendar View", body: "Forward-looking pacing vs last year." },
            { name: "STR Auto-Import", body: "Index ready every morning, no upload." },
            { name: "Rate Shop", body: "Competitor rate monitoring by date and room type." },
            { name: "Custom Reports", body: "No-SQL report builder, schedule to inbox." },
          ].map((m) => (
            <Link
              key={m.name}
              to="/features"
              className="group rounded-2xl border-2 border-accent/35 bg-card p-5 transition hover:border-accent/80 hover:shadow-[0_14px_40px_-24px_color-mix(in_oklab,var(--accent)_70%,transparent)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-foreground">{m.name}</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* OBJECTION FAQ */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="The honest questions"
          title={
            <>
              What owners <span className="text-gradient">actually ask us.</span>
            </>
          }
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {[
            {
              q: "We already have a BI tool from our brand. Why Innrly?",
              a: "Brand BI shows you one brand. If you run Hilton + Marriott + IHG, you're juggling three tools and three logins. Innrly is brand-neutral — every property in one place, on the same definitions.",
            },
            {
              q: "Will this work with our PMS?",
              a: "Yes. Innrly is PMS-neutral and reads from OnQ, PEP, FOSSE, StayNTouch, HotelKey, Choice Advantage, and the rest. You keep your PMS — that's the whole point.",
            },
            {
              q: "How long until we see our own data?",
              a: "Most portfolios are live in under two weeks. No IT project, no schema mapping homework — Innrly handles the connectors.",
            },
            {
              q: "Who actually logs in day-to-day?",
              a: "Owners and VPs of Operations live in Pulse and Early Bird. GMs use it for their own property's pacing. Controllers pull the reports they used to build by hand.",
            },
          ].map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border-2 border-accent/35 bg-card p-6 transition-colors hover:border-accent/65"
            >
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-base font-semibold text-foreground">{f.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="See your portfolio on Innrly"
        subtitle="A 20-minute demo using your brands and PMS. You'll see your own data shape on the Pulse dashboard."
        primary={{ to: "/contact", label: "Book a demo" }}
        secondary={{ to: "/features", label: "Browse all features" }}
      />
    </div>
  );
}
