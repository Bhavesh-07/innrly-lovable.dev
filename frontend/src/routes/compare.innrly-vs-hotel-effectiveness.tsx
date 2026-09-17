import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { CompareLayout } from "@/components/site/CompareLayout";

const faqs = [
  { q: "Is Innrly a labor tool or a full back-office platform?", a: "Both. Innrly's labor suite — Face-ID TimeClock, scheduling, and a Housekeeping productivity matrix — is built into the same platform as night audit, OTA reconciliation, A/P automation, BI, and payroll export, so labor data lives next to the numbers it affects." },
  { q: "How does Innrly's TimeClock differ from Hotel Effectiveness?", a: "Innrly's TimeClock uses Face-ID punch on a shared tablet, with per-employee enrollment consent, and feeds directly into scheduling variance and MPOR reporting in the same product. Hotel Effectiveness is a dedicated labor platform; operators typically pair it with separate accounting, A/P, and reconciliation tools." },
  { q: "Can I keep Hotel Effectiveness and still use Innrly?", a: "Yes. Innrly is PMS- and payroll-agnostic and can sit alongside an existing labor tool while it automates the rest of the back office. Many operators start with reconciliation and A/P, then consolidate labor later." },
  { q: "How is pricing structured?", a: "Innrly publishes per-property monthly pricing, and the labor suite is part of the platform rather than a separately licensed add-on stack. Hotel Effectiveness pricing is quote-based and typically scales with the modules and properties licensed." },
  { q: "How long does onboarding take?", a: "Most portfolios are live on Innrly in 2–4 weeks, including TimeClock setup and employee enrollment." },
];

export const Route = createFileRoute("/compare/innrly-vs-hotel-effectiveness")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/compare/innrly-vs-hotel-effectiveness");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/compare/innrly-vs-hotel-effectiveness"],
        "/compare/innrly-vs-hotel-effectiveness"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/compare/innrly-vs-hotel-effectiveness" }],
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
      breadcrumbLd([{ name: "Home", url: "/" }, { name: "Compare", url: "/compare" }, { name: "Innrly vs Hotel Effectiveness", url: "/compare/innrly-vs-hotel-effectiveness" }]),
    ],
  }),
});

function Page() {
  return (
    <CompareLayout
      competitorName="Hotel Effectiveness"
      eyebrow="Innrly vs Hotel Effectiveness"
      title={<>How Innrly and Hotel Effectiveness <span className="text-gradient">compare.</span></>}
      intro="Hotel Effectiveness is a dedicated hotel labor platform. Innrly covers the same labor ground — TimeClock, scheduling, productivity — inside a full back-office platform that also runs night audit, OTA reconciliation, A/P, BI, and payroll export. This page focuses on where the two approaches differ."
      summary={[
        { heading: "Scope", body: "Hotel Effectiveness is purpose-built for labor. Innrly includes a comparable labor suite plus the rest of the back office, so labor cost is visible next to revenue, reconciliation, and A/P without exporting between tools." },
        { heading: "TimeClock", body: "Innrly ships a native Face-ID TimeClock on a shared tablet with per-employee enrollment consent, feeding scheduling variance and MPOR reporting in the same product." },
        { heading: "Commercial shape", body: "Innrly publishes per-property monthly pricing with the labor suite included in the platform. Hotel Effectiveness is quote-based and typically licensed per module and property." },
      ]}
      rows={[
        { feature: "Face-ID TimeClock", innrly: true, competitor: "partial", note: "Innrly: native, tablet-based, consent at enrollment" },
        { feature: "Labor scheduling + forecast vs actual", innrly: true, competitor: true },
        { feature: "Housekeeping productivity matrix (MPOR, rooms/shift, variance)", innrly: "Built in", competitor: "partial" },
        { feature: "Night audit automation", innrly: true, competitor: false },
        { feature: "OTA commission reconciliation", innrly: true, competitor: false },
        { feature: "A/P automation + Bill Pay", innrly: true, competitor: false },
        { feature: "Multi-property BI dashboards", innrly: true, competitor: "partial" },
        { feature: "Payroll export (ADP, Paychex, Gusto, Paycom, Paylocity)", innrly: true, competitor: true },
        { feature: "Published per-property pricing", innrly: true, competitor: "Quote-based" },
        { feature: "Month-to-month option", innrly: true, competitor: "Typically annual" },
        { feature: "Typical time to live", innrly: "2–4 weeks", competitor: "Varies by modules licensed" },
      ]}
      whenToChoose={{
        innrly: [
          "You want labor, time clock, and the rest of the back office in one platform with one login",
          "You want a native Face-ID TimeClock feeding MPOR and scheduling variance in the same product",
          "You want published per-property pricing and a month-to-month option",
          "You want to consolidate labor plus reconciliation, A/P, and BI instead of paying for separate tools",
        ],
        competitor: [
          "You only need a dedicated labor tool and already have accounting, A/P, and reconciliation covered elsewhere",
          "Your portfolio is standardized on Actabl products and prefers a single-vendor suite",
        ],
      }}
      faqs={faqs}
    />
  );
}
