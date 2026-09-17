import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { CompareLayout } from "@/components/site/CompareLayout";

const faqs = [
  {
    q: "Do we have to replace our current TimeClock to use Innrly Shift?",
    a: "No. Innrly Shift works with your existing time-and-attendance hardware — PIN pads, badge readers, or whatever your hotel uses today. Face-ID is an option, not a requirement. You still get scheduling, the housekeeping productivity matrix, OT guardrails, and payroll export with the clock you already own. Actabl's PerfectTime and PerfectLabor are typically deployed together as their own stack.",
  },
  {
    q: "How does Innrly's pricing compare to Actabl / Hotel Effectiveness?",
    a: "Innrly Shift is published at $149 per property per month — all-in for scheduling, TimeClock (works with your existing clock or Innrly's Face-ID), housekeeping productivity matrix, OT guardrails, and payroll export. Actabl's labor suite (PerfectLabor, PerfectTime, CoverageFinder, PerfectEngage, PerfectWage) is quote-based, sold in Base / Advanced / Premier tiers, and typically priced per module per property. Most operators we talk to pay multiples of $149 for Actabl labor alone.",
  },
  {
    q: "Is Face-ID TimeClock really different from a PIN pad?",
    a: "Yes. Face-ID verifies the person at the punch — no buddy punching, no shared PINs, no badge swaps. It's biometric, runs on a tablet or kiosk, and is built into the same product as scheduling, housekeeping productivity, and payroll. Actabl's PerfectTime is a strong time-and-attendance product, but it is not biometric face-recognition by default.",
  },
  {
    q: "What about labor inside an integrated back office?",
    a: "Innrly Shift lives inside the same product as A/P automation, OTA reconciliation, night audit, BI, and Bill Pay — one login, one data model. Actabl is a labor-led suite; A/P, accounting, and BI typically come from other vendors in your stack. If your goal is fewer vendors and one source of truth, that's the structural difference.",
  },
  {
    q: "Does Innrly handle multi-property shift coverage?",
    a: "Innrly today is built around the GM-per-property workflow with an owner roll-up via Innrly Business Intelligence. If cross-property shift filling for large clusters is a hard requirement, Actabl's CoverageFinder is purpose-built for that. We're happy to walk through whether your operation actually needs it before you pay for it.",
  },
];

export const Route = createFileRoute("/compare/innrly-vs-actabl")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/compare/innrly-vs-actabl");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/compare/innrly-vs-actabl"],
        "/compare/innrly-vs-actabl"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/compare/innrly-vs-actabl" }],
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
        { name: "Innrly: alternative to Actabl", url: "/compare/innrly-vs-actabl" },
      ]),
    ],
  }),
});

function Page() {
  return (
    <CompareLayout
      competitorName="Actabl"
      eyebrow="Innrly: alternative to Actabl / Hotel Effectiveness"
      title={
        <>
          How Innrly Shift and Actabl <span className="text-gradient">compare.</span>
        </>
      }
      intro="Actabl (parent of Hotel Effectiveness) is the labor incumbent in hotels — PerfectLabor, PerfectTime, CoverageFinder, PerfectEngage, and PerfectWage. Innrly Shift covers the same labor surface and is delivered as part of a single back-office product alongside A/P, OTA reconciliation, BI, and night audit. This page highlights the specific places where the two differ."
      summary={[
        {
          heading: "Keep your existing TimeClock",
          body: "Innrly Shift does NOT require Innrly's Face-ID TimeClock to work. Run scheduling, housekeeping productivity, OT guardrails, and payroll export on whatever clock hardware you already own. Face-ID is an upgrade, not a prerequisite. Actabl typically sells PerfectLabor and PerfectTime together as the labor stack.",
        },
        {
          heading: "Lower, published pricing",
          body: "Innrly Shift is $149 per property per month — all-in for scheduling, TimeClock, MPOR, OT guardrails, and payroll export. Actabl's labor suite is quote-based, tiered (Base / Advanced / Premier), and typically priced per module per property. Operators commonly pay multiples of $149 for Actabl labor alone.",
        },
        {
          heading: "Face-ID is the upgrade path",
          body: "When you do want biometric punch-in, Innrly's Face-ID TimeClock is built into the same product as scheduling, MPOR, and payroll — no separate vendor, no separate login, no buddy punching. Actabl's PerfectTime is a strong PIN/badge time-and-attendance system but is not biometric face-recognition by default.",
        },
        {
          heading: "Labor inside an integrated back office",
          body: "Innrly Shift lives inside one product with A/P automation, OTA reconciliation, BI, Bill Pay, and night audit on a single data model. Actabl is a labor-led suite — A/P, accounting, and BI usually come from other vendors in your stack.",
        },
      ]}
      rows={[
        {
          feature: "Works with your existing TimeClock hardware",
          innrly: true,
          competitor: "partial",
          note: "Innrly: PIN, badge, or Face-ID — your choice",
        },
        {
          feature: "Published per-property pricing",
          innrly: "$149/mo, all-in labor",
          competitor: "Quote-based, per module",
        },
        { feature: "Free trial", innrly: "90 days, full access", competitor: "Not published" },
        {
          feature: "Month-to-month contract",
          innrly: true,
          competitor: "partial",
          note: "Actabl: typically annual",
        },
        {
          feature: "Face-ID (biometric) TimeClock built in",
          innrly: true,
          competitor: false,
          note: "Actabl PerfectTime is PIN/badge time-and-attendance",
        },
        { feature: "Labor scheduling + forecast vs actual", innrly: true, competitor: true },
        {
          feature: "Housekeeping productivity matrix (MPOR, rooms/shift, variance)",
          innrly: "Built into TimeClock",
          competitor: "partial",
        },
        { feature: "OT guardrails at clock-in", innrly: true, competitor: "partial" },
        { feature: "Payroll export to ADP / Paychex / others", innrly: true, competitor: true },
        {
          feature: "Cross-property shift coverage for large clusters",
          innrly: "partial",
          competitor: true,
          note: "Actabl CoverageFinder is purpose-built for this",
        },
        {
          feature: "Wage benchmarking data",
          innrly: false,
          competitor: true,
          note: "Actabl PerfectWage",
        },
        {
          feature: "Same product also runs A/P, OTA recon, BI, night audit",
          innrly: true,
          competitor: false,
        },
        {
          feature: "Typical time to live",
          innrly: "2–4 weeks",
          competitor: "60–90+ days (multi-module)",
        },
      ]}
      whenToChoose={{
        innrly: [
          "You want to keep your current TimeClock and still get scheduling, MPOR, OT guardrails, and payroll export",
          "You want published, predictable pricing — labor included in the back-office price, not billed per module",
          "You want Face-ID biometric punch-in as an option, in the same product as scheduling and payroll",
          "You want labor inside the same product as A/P, OTA reconciliation, BI, and night audit — one login, one data model",
          "You want a real 90-day trial on your own data before you commit",
        ],
        competitor: [
          "Large multi-property clusters where cross-property shift filling (CoverageFinder) is a hard requirement",
          "You specifically need proprietary wage benchmarking data (PerfectWage)",
          "You already run Actabl's full labor stack and don't want to consolidate vendors",
        ],
      }}
      faqs={faqs}
    />
  );
}
