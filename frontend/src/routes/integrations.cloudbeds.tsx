import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { IntegrationLayout } from "@/components/site/IntegrationLayout";

const faqs = [
  {
    q: "Does Innrly read directly from Cloudbeds?",
    a: "Yes. Innrly pulls daily reports and folio data from Cloudbeds so your back-office reconciliation and reporting stays current automatically.",
  },
  {
    q: "Do I keep Cloudbeds as the PMS?",
    a: "Yes. Cloudbeds remains your PMS and system of record at the property. Innrly sits behind it — handling reconciliation, A/P, labor, and BI.",
  },
  {
    q: "How does multi-property work?",
    a: "Each Cloudbeds property maps to a portfolio entity in Innrly. Reporting consolidates across the portfolio while drill-downs go back to the individual Cloudbeds tenant.",
  },
];

export const Route = createFileRoute("/integrations/cloudbeds")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/integrations/cloudbeds");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/integrations/cloudbeds"],
        "/integrations/cloudbeds"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/integrations/cloudbeds" }],
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
        { name: "Cloudbeds", url: "/integrations/cloudbeds" },
      ]),
    ],
  }),
});

function Page() {
  return (
    <IntegrationLayout
      partnerName="Cloudbeds"
      eyebrow="Integration · Cloudbeds"
      badge="PMS · Cloud-native"
      title={
        <>
          Innrly + Cloudbeds: <span className="text-gradient">automate the back office</span> behind
          your PMS.
        </>
      }
      intro="Innrly pulls daily Cloudbeds reports and reconciles them against bank, credit card, and OTA statements. Your night-audit pack, A/P workflow, and BI dashboards run themselves."
      direction="push-only"
      directionLabel="Read from Cloudbeds · push to accounting"
      whatItDoes={[
        {
          heading: "Read Cloudbeds daily",
          body: "Daily reports and folio data flow into Innrly automatically — no CSV downloads.",
        },
        {
          heading: "Reconcile across rails",
          body: "Match Cloudbeds revenue against bank deposits, credit card batches, and OTA settlements daily.",
        },
        {
          heading: "Push to accounting",
          body: "Coded entries land in QuickBooks, M3, or Sage Intacct so your GL is always current.",
        },
      ]}
      flow={{
        from: "Cloudbeds",
        via: "Innrly · reconcile, code, route",
        to: "Your accounting system",
      }}
      inScope={[
        "Daily reconciliation and night-audit automation",
        "OTA commission audit",
        "Invoice capture and Bill Pay",
        "Labor scheduling and Face-ID TimeClock",
      ]}
      staysIn={{
        system: "Cloudbeds",
        items: [
          "Reservations and the room ledger",
          "Rate management and channel distribution",
          "Front-desk workflow",
        ],
      }}
      faqs={faqs}
    />
  );
}
