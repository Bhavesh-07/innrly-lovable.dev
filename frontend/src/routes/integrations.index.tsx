import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { ArrowRight, BadgeCheck, Clock, Search, X } from "lucide-react";
import { Section, SectionHeading, CtaBand } from "@/components/site/Section";
import {
  INTEGRATIONS,
  CATEGORY_LABELS,
  CATEGORY_BLURBS,
  CATEGORY_ORDER,
  type Integration,
  type IntegrationCategory,
} from "@/data/integrations";

export const Route = createFileRoute("/integrations/")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/integrations");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/integrations"],
        "/integrations"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/integrations" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Innrly",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "/integrations",
          description:
            "Innrly connects to 50+ hotel systems — PMS, accounting, payroll, banking, guest survey, and A/P platforms.",
          offers: { "@type": "Offer", priceCurrency: "USD" },
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Integrations", url: "/integrations" },
      ]),
    ],
  }),
});

type FilterValue = "all" | IntegrationCategory;

function Page() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterValue>("all");

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: INTEGRATIONS.length };
    for (const c of CATEGORY_ORDER) map[c] = INTEGRATIONS.filter((i) => i.category === c).length;
    return map;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return INTEGRATIONS.filter((i) => {
      if (filter !== "all" && i.category !== filter) return false;
      if (!q) return true;
      return (
        i.name.toLowerCase().includes(q) || CATEGORY_LABELS[i.category].toLowerCase().includes(q)
      );
    });
  }, [query, filter]);

  const grouped = useMemo(() => {
    const map = new Map<IntegrationCategory, Integration[]>();
    for (const cat of CATEGORY_ORDER) {
      const items = filtered.filter((i) => i.category === cat);
      if (items.length) map.set(cat, items);
    }
    return map;
  }, [filtered]);

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute right-10 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Integrations
          </p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Every system your hotel <span className="text-gradient">already runs</span> — connected.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Innrly plugs into {INTEGRATIONS.length}+ PMS, accounting, payroll, banking, guest
            survey, and payment systems. Your team keeps the tools they know — Innrly automates the
            work between them.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <Stat n={`${counts.all}+`} l="Integrations" />
            <Stat n="8" l="Categories" />
            <Stat n={`${counts.pms}+`} l="PMS systems" />
            <Stat n="12,000+" l="Banks via Plaid" />
            <Stat n="6" l="Official partners" />
          </div>
        </div>
      </section>

      {/* OFFICIAL PARTNERSHIPS BAND */}
      <Section className="py-10">
        <div className="rounded-2xl border-2 border-accent/40 bg-card/60 p-6 sm:p-8 shadow-[0_18px_55px_-30px_color-mix(in_oklab,var(--accent)_60%,transparent)]">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-accent" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Official integration & feature partners
            </p>
          </div>
          <p className="mt-3 max-w-3xl text-base text-foreground">
            Innrly is an official integration partner with{" "}
            <span className="font-semibold">Plaid</span>, <span className="font-semibold">M3</span>,
            and <span className="font-semibold">Repay</span> — plus feature partnerships with{" "}
            <span className="font-semibold">Shield Screening</span>,{" "}
            <span className="font-semibold">isolved</span>, and{" "}
            <span className="font-semibold">TransUnion</span> for background checks, HRIS, and
            credit data.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {INTEGRATIONS.filter((i) => i.badge === "partner").map((i) => (
              <span
                key={i.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
              >
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
                {i.name}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* SEARCH + FILTER */}
      <Section className="pt-4 pb-2">
        <div className="sticky top-16 z-20 -mx-4 rounded-2xl border border-border/60 bg-background/80 px-4 py-4 backdrop-blur sm:mx-0 sm:px-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search integrations — Opera, M3, ADP, Plaid…"
                aria-label="Search integrations"
                className="h-11 w-full rounded-xl border border-border bg-card/60 pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:bg-surface hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            {/* Category chips */}
            <div className="flex flex-wrap gap-1.5">
              <FilterChip
                active={filter === "all"}
                onClick={() => setFilter("all")}
                label={`All · ${counts.all}`}
              />
              {CATEGORY_ORDER.map((c) => (
                <FilterChip
                  key={c}
                  active={filter === c}
                  onClick={() => setFilter(c)}
                  label={`${shortLabel(c)} · ${counts[c]}`}
                />
              ))}
            </div>
          </div>
          {(query || filter !== "all") && (
            <p className="mt-3 text-xs text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> of{" "}
              {INTEGRATIONS.length} integrations
              {filter !== "all" && (
                <>
                  {" "}
                  in <span className="font-semibold text-accent">{CATEGORY_LABELS[filter]}</span>
                </>
              )}
              {query && (
                <>
                  {" "}
                  matching "<span className="font-semibold text-foreground">{query}</span>"
                </>
              )}
            </p>
          )}
        </div>
      </Section>

      {/* GROUPED RESULTS */}
      {grouped.size === 0 ? (
        <Section className="py-16">
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card/40 p-8 text-center">
            <p className="text-base font-semibold text-foreground">No integrations match.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Don't see your system? We add new connectors regularly.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
            >
              Tell us yours <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Section>
      ) : (
        Array.from(grouped.entries()).map(([cat, items], i) => (
          <Section key={cat} className={i === 0 ? "pt-8" : "pt-10"}>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                  {CATEGORY_LABELS[cat]}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{CATEGORY_BLURBS[cat]}</p>
              </div>
              <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {items.length}
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
              {items.map((b) => (
                <LogoTile key={b.name} brand={b} />
              ))}
            </div>
          </Section>
        ))
      )}

      {/* FEATURED DEEP-DIVE CARDS */}
      <Section className="pt-16">
        <SectionHeading
          eyebrow="Deep-dive integrations"
          title="Built-in connectors with dedicated workflows."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              to: "/integrations/m3",
              name: "M3",
              badge: "Certified",
              body: "Officially certified. Auto GL-code and push invoices into M3.",
            },
            {
              to: "/integrations/quickbooks",
              name: "QuickBooks",
              badge: "Two-way",
              body: "Full two-way sync — invoices out, accounts in.",
            },
            {
              to: "/integrations/sage-intacct",
              name: "Sage Intacct",
              badge: "Available",
              body: "Sync GL-coded entries with Sage Intacct.",
            },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex flex-col rounded-2xl border-2 border-accent/35 bg-card p-5 transition hover:border-accent/80 hover:shadow-[0_14px_40px_-24px_color-mix(in_oklab,var(--accent)_70%,transparent)]"
            >
              <span className="inline-flex w-fit items-center rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent">
                {c.badge}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{c.name}</h3>
              <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{c.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                See integration
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Don't see your system?"
        subtitle="We support most major hospitality stacks and add new connectors regularly. Tell us yours."
        primary={{ to: "/contact", label: "Talk to us" }}
        secondary={{ to: "/pricing", label: "View pricing" }}
      />
    </div>
  );
}

function shortLabel(c: IntegrationCategory): string {
  switch (c) {
    case "pms":
      return "PMS";
    case "ota":
      return "OTAs";
    case "accounting":
      return "Accounting";
    case "payroll":
      return "Payroll";
    case "guest":
      return "Guest";
    case "banking":
      return "Banking";
    case "payments":
      return "A/P";
    case "workforce":
      return "Workforce";
  }
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors " +
        (active
          ? "border-accent/80 bg-accent/15 text-accent shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_30%,transparent)]"
          : "border-border bg-card/40 text-muted-foreground hover:border-accent/40 hover:text-foreground")
      }
    >
      {label}
    </button>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span className="text-base font-bold text-gradient">{n}</span>
      <span className="text-xs uppercase tracking-wider">{l}</span>
    </span>
  );
}

function LogoTile({ brand }: { brand: Integration }) {
  const tint =
    brand.hue !== undefined
      ? {
          borderColor: `oklch(0.55 0.12 ${brand.hue} / 0.35)`,
        }
      : undefined;

  const inner = (
    <div
      className="group relative flex h-28 flex-col items-center justify-center gap-1.5 rounded-xl border-2 bg-white px-3 pt-5 text-center transition-all hover:-translate-y-0.5 hover:shadow-glow"
      style={tint}
    >
      {brand.badge === "partner" && (
        <span className="absolute top-1.5 right-1.5 inline-flex items-center gap-1 rounded-full bg-accent px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
          <BadgeCheck className="h-2.5 w-2.5" aria-hidden />
          Partner
        </span>
      )}
      {brand.to && (
        <span className="absolute top-1.5 left-1.5 inline-flex items-center gap-1 rounded-full bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-600">
          <Clock className="h-2.5 w-2.5" aria-hidden />
          Deep dive
        </span>
      )}
      {brand.domain ? (
        <img
          src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`}
          alt={`${brand.name} — ${CATEGORY_LABELS[brand.category].toLowerCase()} that integrates with Innrly`}
          loading="lazy"
          className="h-8 w-8 object-contain"
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = "none";
            const fallback = img.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "block";
          }}
        />
      ) : null}
      <span
        className="text-lg font-black tracking-tight text-slate-800"
        style={{ display: brand.domain ? "none" : "block" }}
      >
        {brand.initials}
      </span>
      <span className="line-clamp-1 text-[11px] font-medium text-slate-600">{brand.name}</span>
    </div>
  );

  if (brand.to) {
    return (
      <Link to={brand.to} aria-label={`${brand.name} integration`}>
        {inner}
      </Link>
    );
  }
  return <div aria-label={brand.name}>{inner}</div>;
}
