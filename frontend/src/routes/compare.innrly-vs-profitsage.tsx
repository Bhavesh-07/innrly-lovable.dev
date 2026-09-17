import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { CompareLayout } from "@/components/site/CompareLayout";

const faqs = [
  {
    q: "Is ProfitSage a direct Innrly competitor?",
    a: "ProfitSage is primarily a hotel BI and data-warehousing product — daily flash reports, STR feeds, forecasting, and labor analytics. Innrly is a broader back-office platform that includes BI plus A/P automation, night audit, OTA reconciliation, Face-ID TimeClock, and payroll. Buyers shopping ProfitSage for BI alone should know Innrly covers the same BI surface and several layers beyond it.",
  },
  {
    q: "How do they compare on pricing?",
    a: "Innrly publishes pricing at $199/property/month with a 90-day full-access free trial. ProfitSage is quote-based with no published free trial.",
  },
  {
    q: "What about BI dashboards specifically?",
    a: "Both produce daily flash reports, forecasts, STR overlays, and segment performance. Innrly's BI runs on the same data model as A/P, night audit, and labor — so a labor variance on the dashboard links directly to the underlying scheduling, TimeClock punches, and payroll registers without exporting between systems.",
  },
  {
    q: "Does Innrly replace ProfitSage?",
    a: "If you bought ProfitSage as a standalone BI layer over your PMS, Innrly's BI module covers the same use cases and you get A/P, night audit, OTA reconciliation, TimeClock, and payroll on the same platform. If you bought ProfitSage as part of a larger Actabl rollout, the right comparison is broader — talk to us and we'll be honest about fit.",
  },
  {
    q: "What about A/P, night audit, and labor — not in ProfitSage's core?",
    a: "Right. ProfitSage focuses on BI and forecasting. A/P automation, night audit, OTA reconciliation, Face-ID TimeClock, housekeeping productivity matrix, and payroll are all native in Innrly on the same data model — no separate purchase required.",
  },
];

export const Route = createFileRoute("/compare/innrly-vs-profitsage")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/compare/innrly-vs-profitsage");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/compare/innrly-vs-profitsage"],
        "/compare/innrly-vs-profitsage"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/compare/innrly-vs-profitsage" }],
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
        { name: "Innrly: alternative to ProfitSage", url: "/compare/innrly-vs-profitsage" },
      ]),
    ],
  }),
});

function Page() {
  return (
    <CompareLayout
      competitorName="ProfitSage"
      eyebrow="Innrly: alternative to ProfitSage"
      title={
        <>
          How Innrly and ProfitSage <span className="text-gradient">compare.</span>
        </>
      }
      intro="ProfitSage is primarily a hotel BI and forecasting product. Innrly's BI covers the same use cases and runs on the same data model as A/P, night audit, OTA reconciliation, Face-ID TimeClock, and payroll — so a number on a dashboard links straight to the underlying transaction."
      summary={[
        {
          heading: "Scope",
          body: "ProfitSage focuses on BI, forecasting, daily flash reports, and STR overlays. Innrly covers the same BI surface plus A/P automation, night audit, OTA reconciliation, Face-ID TimeClock, housekeeping productivity, and payroll on one platform.",
        },
        {
          heading: "Pricing transparency",
          body: "Innrly publishes $199/property/month with a 90-day full-access free trial. ProfitSage is quote-based with no published free trial.",
        },
        {
          heading: "Same-model data",
          body: "In Innrly, a labor variance on the BI dashboard drills directly into the schedule, TimeClock punches, and payroll register — same product, same data. ProfitSage reports on data ingested from other systems.",
        },
      ]}
      rows={[
        { feature: "Daily flash reports", innrly: true, competitor: true },
        { feature: "Forecasting + budget variance", innrly: true, competitor: true },
        { feature: "STR overlay + benchmarking", innrly: true, competitor: true },
        { feature: "Published per-property pricing", innrly: "$199/mo", competitor: "Quote-based" },
        { feature: "Free trial", innrly: "90 days, full access", competitor: "Not published" },
        { feature: "A/P automation (capture, code, approve)", innrly: true, competitor: false },
        { feature: "Night audit automation", innrly: true, competitor: false },
        { feature: "OTA commission reconciliation", innrly: true, competitor: false },
        { feature: "Native Face-ID TimeClock", innrly: true, competitor: false },
        {
          feature: "Housekeeping productivity matrix (MPOR, rooms/shift)",
          innrly: true,
          competitor: false,
        },
        { feature: "Labor scheduling + payroll", innrly: true, competitor: "partial" },
        { feature: "Auto-pull invoices from vendor portals", innrly: true, competitor: false },
        {
          feature: "One login, one data model across BI + back office",
          innrly: true,
          competitor: false,
        },
      ]}
      whenToChoose={{
        innrly: [
          "You want BI plus the back-office layers that produce the BI data — on one platform",
          "You want published pricing and a real 90-day trial",
          "You want to consolidate from a BI-only tool plus 2–3 separate point solutions for A/P, audit, and labor",
          "You want Face-ID TimeClock + housekeeping productivity built in",
        ],
        competitor: [
          "You only need BI and forecasting, and you already have A/P, audit, OTA, and labor solved by other products",
          "You're already deep in an Actabl rollout and ProfitSage is part of a larger commercial relationship",
        ],
      }}
      faqs={faqs}
    />
  );
}
