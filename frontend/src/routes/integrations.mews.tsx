import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { IntegrationLayout } from "@/components/site/IntegrationLayout";

const faqs = [
  {
    q: "How does Innrly connect to Mews?",
    a: "Through the Mews integration interface used by certified back-office partners. Setup typically takes 1–2 weeks per portfolio.",
  },
  {
    q: "Is Mews still my system of record?",
    a: "Yes. Mews stays your PMS. Innrly handles the reconciliation, A/P, labor, and BI workflows that sit behind it.",
  },
  {
    q: "Do you support Mews multi-property?",
    a: "Yes. Each Mews enterprise / property maps cleanly into Innrly's portfolio model with consolidated and per-property reporting.",
  },
];

export const Route = createFileRoute("/integrations/mews")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/integrations/mews");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/integrations/mews"],
        "/integrations/mews"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/integrations/mews" }],
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
        { name: "Mews", url: "/integrations/mews" },
      ]),
    ],
  }),
});

function Page() {
  return (
    <IntegrationLayout
      partnerName="Mews"
      eyebrow="Integration · Mews"
      badge="PMS · API-first"
      title={
        <>
          Innrly + Mews: <span className="text-gradient">close the books</span> on a modern PMS.
        </>
      }
      intro="Innrly connects to Mews to automate the back office — daily reconciliation, A/P invoice capture, labor management, and BI — across every property running on Mews."
      direction="push-only"
      directionLabel="Read from Mews · push to accounting"
      whatItDoes={[
        {
          heading: "Real-time data from Mews",
          body: "Folio, revenue, and reservation data flows into Innrly via the Mews integration interface.",
        },
        {
          heading: "Three-way reconciliation",
          body: "Match Mews revenue against bank, credit card, and OTA statements automatically.",
        },
        {
          heading: "Coded to your GL",
          body: "Approved entries push into QuickBooks, M3, or Sage Intacct with the correct property and class.",
        },
      ]}
      flow={{
        from: "Mews",
        via: "Innrly · reconcile, code, route",
        to: "Your accounting system",
      }}
      inScope={[
        "Night-audit automation across Mews properties",
        "Daily three-way reconciliation",
        "Invoice capture, GL coding, and Bill Pay",
        "Labor scheduling and TimeClock",
      ]}
      staysIn={{
        system: "Mews",
        items: [
          "Reservations and operations",
          "Front-desk workflow",
          "Rate plans and channel management",
        ],
      }}
      faqs={faqs}
    />
  );
}
