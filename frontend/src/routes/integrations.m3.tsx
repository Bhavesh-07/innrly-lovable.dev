import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { IntegrationLayout } from "@/components/site/IntegrationLayout";

const faqs = [
  {
    q: "Is this an official M3 integration?",
    a: "Yes. Innrly is an officially certified M3 integration partner. Invoices captured and GL-coded in Innrly push directly into M3 as the system of record.",
  },
  {
    q: "Is the integration two-way or push-only?",
    a: "Push-only today. Innrly sends GL-coded invoices into M3; M3 remains the system of record for your general ledger, financials, and reporting.",
  },
  {
    q: "What does Innrly actually do for M3 customers?",
    a: "Innrly captures invoices via OCR and email-in, auto-populates header and line data, applies your GL codes, routes for approval, and pushes the completed invoice into M3 — eliminating manual data entry.",
  },
  {
    q: "Do I keep M3 for accounting?",
    a: "Yes. M3 stays your accounting system of record. Innrly sits in front as the back-office automation layer: invoice capture, GL coding, OTA reconciliation, night audit, Bill Pay, BI, and labor.",
  },
  {
    q: "How long does it take to connect?",
    a: "Most properties are connected and pushing live invoices within 2–4 weeks.",
  },
];

export const Route = createFileRoute("/integrations/m3")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/integrations/m3");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/integrations/m3"],
        "/integrations/m3"
      ),
      {
        property: "og:image:alt",
        content: "The M3 data you already have — finally working for you.",
      },
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/integrations/m3" }],
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
        { name: "Integrations", url: "/integrations" },
        { name: "M3", url: "/integrations/m3" },
      ]),
    ],
  }),
});

function Page() {
  return (
    <IntegrationLayout
      partnerName="M3"
      eyebrow="Integration · M3"
      badge="Certified M3 integration partner"
      title={
        <>
          Innrly + M3: <span className="text-gradient">auto-coded invoices</span> straight into M3.
        </>
      }
      intro="Innrly is an officially certified M3 integration partner. Capture invoices, auto-populate and GL-code them in Innrly, then push the completed entries into M3 as your accounting system of record."
      direction="push-only"
      directionLabel="Push-only · invoices → M3"
      whatItDoes={[
        {
          heading: "Capture & auto-populate",
          body: "Invoices arrive via OCR and email-in. Innrly extracts header, vendor, line items, and totals — no manual keying.",
        },
        {
          heading: "GL-code automatically",
          body: "Innrly applies your chart of accounts and historical coding rules so every invoice lands with the correct GL before approval.",
        },
        {
          heading: "Push to M3",
          body: "Approved, GL-coded invoices push directly into M3 — clean, audit-ready, and ready for your monthly close.",
        },
      ]}
      flow={{
        from: "Invoice arrives in Innrly (OCR / email-in)",
        via: "Auto-populate, GL-code, approve",
        to: "Push into M3 as system of record",
      }}
      inScope={[
        "Invoice capture and OCR",
        "Auto GL-coding with your chart of accounts",
        "A/P approval workflows",
        "OTA reconciliation, night audit, Bill Pay, BI, labor",
      ]}
      staysIn={{
        system: "M3",
        items: [
          "General ledger and financial statements",
          "Month-end close and financial reporting",
          "Your existing M3 workflows and users",
        ],
      }}
      faqs={faqs}
    />
  );
}
