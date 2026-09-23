import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { CompareLayout } from "@/components/site/CompareLayout";

const faqs = [
  {
    q: "Do I need to sign an annual contract with Innrly?",
    a: "No. Innrly is month-to-month with no annual commitment. An annual plan is available and includes onboarding. Otelier is typically sold on annual contracts negotiated per module.",
  },
  {
    q: "Is there an onboarding or implementation fee?",
    a: "Onboarding is included with Innrly's annual plan. On month-to-month, onboarding is quoted separately. Otelier deployments commonly include implementation fees that scale with the number of modules being rolled out.",
  },
  {
    q: "How does the free trial work?",
    a: "Innrly offers a 90-day free trial with full feature access and no credit card required, so you can validate value on your own data before paying anything. Otelier does not publish a free trial.",
  },
  {
    q: "What's different about Innrly's TimeClock?",
    a: "Innrly's Face-ID TimeClock is built into the same platform as labor scheduling and a Housekeeping productivity matrix — minutes per occupied room (MPOR), rooms cleaned per shift, and variance vs standard — so house attendants, supervisors, and GMs see the same numbers. Otelier does not publish an equivalent native Face-ID TimeClock or built-in housekeeping productivity matrix.",
  },
  {
    q: "What about the rest of the back office?",
    a: "Both platforms cover night audit, OTA reconciliation, A/P automation, BI dashboards, Bill Pay, payroll, and rate shopping. The differences worth comparing are commercial terms (contracts, fees, trial), the integrated Face-ID TimeClock with a Housekeeping productivity matrix, and how the platforms are shaped — Innrly on a single codebase, Otelier as a unified brand over previously separate products.",
  },
];

export const Route = createFileRoute("/compare/innrly-vs-otelier")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/compare/innrly-vs-otelier");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/compare/innrly-vs-otelier"],
        "/compare/innrly-vs-otelier"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/compare/innrly-vs-otelier" }],
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
        { name: "Innrly: alternative to Otelier", url: "/compare/innrly-vs-otelier" },
      ]),
    ],
  }),
});

function Page() {
  return (
    <CompareLayout
      competitorName="Otelier"
      eyebrow="Innrly: alternative to Otelier"
      title={
        <>
          How Innrly and Otelier <span className="text-gradient">compare.</span>
        </>
      }
      intro="Both platforms cover the core hotel back-office workflows — night audit, OTA reconciliation, A/P automation, BI, Bill Pay, payroll, and rate shopping. This page highlights the specific places where the two products differ in commercial terms, deployment, and a few feature areas."
      summary={[
        {
          heading: "Commercial terms",
          body: "Innrly is month-to-month with a 90-day full-access free trial. Onboarding is included on annual plans. Otelier is typically sold on annual contracts with per-module implementation fees and no published free trial.",
        },
        {
          heading: "TimeClock + Housekeeping matrix",
          body: "Innrly's Face-ID TimeClock ships with a Housekeeping productivity matrix — MPOR, rooms-per-shift, variance vs standard — in the same product as scheduling and payroll. Otelier does not publish an equivalent native Face-ID TimeClock or built-in housekeeping productivity matrix.",
        },
        {
          heading: "Platform shape",
          body: "Innrly is built on a single codebase with one login and one data model across BI, A/P, Bill Pay, night audit, OTA reconciliation, labor, TimeClock, and payroll. Otelier markets a unified platform that brings together previously separate products (MyDigitalOffice, Datavision); in practice, modules are commonly licensed and onboarded individually.",
        },
      ]}
      rows={[
        {
          feature: "Month-to-month contract",
          innrly: true,
          competitor: false,
          note: "Otelier: typically annual, per module",
        },
        {
          feature: "Onboarding / implementation fee",
          innrly: "Included on annual plan",
          competitor: "Per module",
        },
        { feature: "Free trial", innrly: "90 days, full access", competitor: "Not published" },
        { feature: "Customization available", innrly: true, competitor: "partial" },
        { feature: "Published per-property pricing", innrly: "$199/mo", competitor: "Quote-based" },
        {
          feature: "One login, one data model across modules",
          innrly: true,
          competitor: "partial",
          note: "Otelier unifies previously separate products (MDO, Datavision)",
        },
        { feature: "Face-ID TimeClock", innrly: true, competitor: false },
        {
          feature: "Housekeeping productivity matrix (MPOR, rooms/shift, variance)",
          innrly: "Built into TimeClock",
          competitor: false,
        },
        { feature: "Labor scheduling + forecast vs actual", innrly: true, competitor: "partial" },
        {
          feature: "Exceptions Dashboard (only transactions needing attention)",
          innrly: true,
          competitor: "partial",
        },
        {
          feature: "Auto-pulled vendor invoices from vendor portals",
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
          "You want month-to-month flexibility, with the option of an annual plan that includes onboarding",
          "You want a real 90-day trial to validate value on your own data first",
          "You want Face-ID TimeClock and a Housekeeping productivity matrix in the same product as scheduling and payroll",
          "You prefer one platform with a single data model across BI, A/P, Bill Pay, labor, and payroll",
        ],
        competitor: [
          "You already license MyDigitalOffice or Datavision and don't want to migrate",
          "You prefer a multi-module suite under one parent brand and are comfortable with annual contracts",
        ],
      }}
      faqs={faqs}
    />
  );
}
