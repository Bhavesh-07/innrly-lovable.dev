import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { CompareLayout } from "@/components/site/CompareLayout";

const faqs = [
  {
    q: "How do Innrly and Aptech (Profitvue / Execuvue / Targetvue) compare?",
    a: "Aptech sells a multi-product suite — Profitvue for accounting, Execuvue for BI, Targetvue for budgeting/forecasting — that are licensed and onboarded separately. Innrly is one platform with one login covering BI, A/P, night audit, OTA reconciliation, labor, TimeClock, and payroll on a single data model.",
  },
  {
    q: "Is Aptech's pricing public?",
    a: "No. Aptech is quote-based per module. Innrly publishes pricing at $199/property/month with a 90-day full-access free trial.",
  },
  {
    q: "What about USALI reporting?",
    a: "Both platforms produce USALI-aligned reports. Innrly's USALI 11 owner package is auto-generated from a single chart of accounts mapped per property. Aptech's Profitvue is a dedicated hospitality GL that handles USALI natively but is licensed separately from Execuvue and Targetvue.",
  },
  {
    q: "Which is faster to deploy?",
    a: "Innrly typically takes 2–4 weeks for a multi-property portfolio. Aptech multi-module deployments (Profitvue + Execuvue + Targetvue) commonly run 60–120+ days because each product onboards independently.",
  },
  {
    q: "Does Innrly replace a GL like Profitvue?",
    a: "Innrly is not a hospitality GL. We push approved invoices into QuickBooks, M3, Sage Intacct, or Profitvue and handle the upstream workflow — capture, code, approve, reconcile. Operators who want to keep Profitvue can keep it; we feed it cleaner data.",
  },
];

export const Route = createFileRoute("/compare/innrly-vs-aptech")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/compare/innrly-vs-aptech");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/compare/innrly-vs-aptech"],
        "/compare/innrly-vs-aptech"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/compare/innrly-vs-aptech" }],
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
        { name: "Innrly: alternative to Aptech", url: "/compare/innrly-vs-aptech" },
      ]),
    ],
  }),
});

function Page() {
  return (
    <CompareLayout
      competitorName="Aptech"
      eyebrow="Innrly: alternative to Aptech"
      title={
        <>
          How Innrly and Aptech <span className="text-gradient">compare.</span>
        </>
      }
      intro="Aptech sells Profitvue (hospitality GL), Execuvue (BI), and Targetvue (budgeting) as separately licensed and onboarded products. Innrly is a single platform with one login covering BI, A/P, night audit, OTA reconciliation, labor, and payroll. This page highlights what's actually different."
      summary={[
        {
          heading: "Platform shape",
          body: "Innrly is one product on one data model. Aptech is three separately licensed products (Profitvue + Execuvue + Targetvue) that integrate but are bought, deployed, and supported independently.",
        },
        {
          heading: "Pricing transparency",
          body: "Innrly publishes $199/property/month with a 90-day full-access free trial. Aptech is quote-based per module with no public free trial.",
        },
        {
          heading: "Deployment speed",
          body: "Innrly deployments typically take 2–4 weeks. Multi-module Aptech rollouts (all three products) commonly run 60–120+ days.",
        },
      ]}
      rows={[
        {
          feature: "Single platform / one login across modules",
          innrly: true,
          competitor: false,
          note: "Aptech: 3 separately licensed products",
        },
        { feature: "Published per-property pricing", innrly: "$199/mo", competitor: "Quote-based" },
        { feature: "Free trial", innrly: "90 days, full access", competitor: "Not published" },
        { feature: "Month-to-month contract", innrly: true, competitor: "partial" },
        { feature: "Typical time to live", innrly: "2–4 weeks", competitor: "60–120+ days" },
        {
          feature: "Hospitality GL replacement",
          innrly: false,
          competitor: "Profitvue",
          note: "Innrly pushes to your GL of choice — QuickBooks, M3, Sage Intacct, or Profitvue",
        },
        { feature: "USALI-aligned owner reporting", innrly: true, competitor: true },
        { feature: "Native Face-ID TimeClock", innrly: true, competitor: false },
        {
          feature: "Built-in housekeeping productivity matrix (MPOR, rooms/shift)",
          innrly: true,
          competitor: false,
        },
        { feature: "Labor scheduling + forecast vs actual", innrly: true, competitor: "partial" },
        { feature: "OTA commission reconciliation", innrly: true, competitor: "partial" },
        { feature: "Auto-pull invoices from vendor portals", innrly: true, competitor: false },
        {
          feature: "Budgeting + forecasting",
          innrly: true,
          competitor: "Targetvue (separate license)",
        },
      ]}
      whenToChoose={{
        innrly: [
          "You want one platform, one login, one data model — not three products to license and integrate",
          "You want published pricing and a real 90-day trial",
          "You want Face-ID TimeClock + housekeeping productivity built into the same product as labor",
          "You want a 2–4 week deployment with budgeting, BI, A/P, and labor included from day one",
        ],
        competitor: [
          "You specifically need a hospitality-native general ledger and want to keep Profitvue as your GL",
          "You're already running Execuvue or Targetvue and don't want to consolidate",
        ],
      }}
      faqs={faqs}
    />
  );
}
