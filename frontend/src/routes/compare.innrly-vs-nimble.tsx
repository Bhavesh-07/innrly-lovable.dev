import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { CompareLayout } from "@/components/site/CompareLayout";

const faqs = [
  {
    q: "Is Nimble Property a direct competitor to Innrly?",
    a: "Yes. Both target multi-property hotel back-office automation — A/P, night audit, BI dashboards, and labor. The differences are commercial terms, deployment speed, and how each platform handles labor + housekeeping productivity.",
  },
  {
    q: "How do the platforms compare on pricing?",
    a: "Innrly publishes pricing at $199/property/month with a 90-day free trial. Nimble Property is quote-based with no published per-property pricing and no public free trial.",
  },
  {
    q: "Which is faster to deploy?",
    a: "Innrly typically takes 2–4 weeks for a multi-property portfolio. Nimble Property deployments are commonly 45–90 days depending on the number of modules and integrations.",
  },
  {
    q: "Do both platforms cover labor and housekeeping?",
    a: "Both cover labor scheduling. Innrly ships a native Face-ID TimeClock plus a Housekeeping productivity matrix (MPOR, rooms-per-shift, variance vs standard) built into the same product as scheduling and payroll. Nimble Property partners for time-clock hardware and does not publish an equivalent built-in housekeeping productivity matrix.",
  },
  {
    q: "What about A/P automation?",
    a: "Both ingest invoices via OCR and route for approval. Innrly's exception ledger surfaces only the transactions that need attention, and supports auto-pull from vendor portals as well as email and paper. Both push approved invoices to common GLs (QuickBooks, M3, Sage Intacct).",
  },
];

export const Route = createFileRoute("/compare/innrly-vs-nimble")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/compare/innrly-vs-nimble");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/compare/innrly-vs-nimble"],
        "/compare/innrly-vs-nimble"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/compare/innrly-vs-nimble" }],
    scripts: [
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
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Compare", url: "/compare" },
        { name: "Innrly: alternative to Nimble", url: "/compare/innrly-vs-nimble" },
      ]),
    ],
  }),
});

function Page() {
  return (
    <CompareLayout
      competitorName="Nimble Property"
      eyebrow="Innrly: alternative to Nimble Property"
      title={
        <>
          How Innrly and Nimble Property <span className="text-gradient">compare.</span>
        </>
      }
      intro="Both platforms target multi-property hotel back-office automation. This page highlights the specific differences in commercial terms, deployment, labor + housekeeping, and A/P automation that matter to operator-buyers."
      summary={[
        {
          heading: "Pricing transparency",
          body: "Innrly publishes $199/property/month with a 90-day full-access free trial. Nimble Property is quote-based with no published per-property pricing and no public free trial.",
        },
        {
          heading: "Labor + housekeeping",
          body: "Innrly's Face-ID TimeClock and Housekeeping productivity matrix (MPOR, rooms-per-shift, variance) are built into the same product as scheduling and payroll. Nimble Property partners for time-clock hardware and does not publish an equivalent built-in housekeeping productivity matrix.",
        },
        {
          heading: "Deployment speed",
          body: "Innrly deployments typically take 2–4 weeks for a multi-property portfolio. Nimble Property deployments commonly run 45–90 days.",
        },
      ]}
      rows={[
        { feature: "Published per-property pricing", innrly: "$199/mo", competitor: "Quote-based" },
        { feature: "Free trial", innrly: "90 days, full access", competitor: "Not published" },
        {
          feature: "Month-to-month contract",
          innrly: true,
          competitor: "partial",
          note: "Nimble: typically annual",
        },
        { feature: "Typical time to live", innrly: "2–4 weeks", competitor: "45–90 days" },
        { feature: "Native Face-ID TimeClock", innrly: true, competitor: false },
        {
          feature: "Built-in housekeeping productivity matrix (MPOR, rooms/shift, variance)",
          innrly: true,
          competitor: false,
        },
        { feature: "Labor scheduling + forecast vs actual", innrly: true, competitor: true },
        { feature: "Auto-pull invoices from vendor portals", innrly: true, competitor: "partial" },
        {
          feature: "Exceptions ledger (only transactions needing attention)",
          innrly: true,
          competitor: "partial",
        },
        { feature: "OTA commission reconciliation", innrly: true, competitor: true },
        { feature: "Night audit automation", innrly: true, competitor: true },
        { feature: "BI dashboards", innrly: true, competitor: true },
        { feature: "QuickBooks / M3 / Sage Intacct sync", innrly: true, competitor: true },
      ]}
      whenToChoose={{
        innrly: [
          "You want published pricing and a real 90-day trial to validate value on your own data first",
          "You want Face-ID TimeClock + housekeeping productivity matrix in the same product as scheduling and payroll",
          "You want a 2–4 week deployment, not a quarter-long implementation",
          "You want one platform with a single data model across BI, A/P, night audit, labor, and payroll",
        ],
        competitor: [
          "You're already deeply embedded in Nimble Property and don't want to migrate",
          "You prefer a hardware-agnostic time-clock partnership over a native Face-ID device",
        ],
      }}
      faqs={faqs}
    />
  );
}
