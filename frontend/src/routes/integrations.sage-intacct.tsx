import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, CtaBand } from "@/components/site/Section";

export const Route = createFileRoute("/integrations/sage-intacct")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/integrations/sage-intacct");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/integrations/sage-intacct"],
        "/integrations/sage-intacct"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/integrations/sage-intacct" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Innrly + Sage Intacct",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "/integrations/sage-intacct",
          offers: { "@type": "Offer", priceCurrency: "USD" },
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Integrations", url: "/integrations" },
        { name: "Sage Intacct", url: "/integrations/sage-intacct" },
      ]),
    ],
  }),
});

function Page() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Integration · Sage Intacct
          </p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Innrly + <span className="text-gradient">Sage Intacct</span>.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Innrly works with Sage Intacct as your accounting system of record. Setup and mapping
            vary by portfolio — get in touch and we'll walk through the fit for your stack.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-cta hover:opacity-90">
              <Link to="/contact">Talk to us about Sage Intacct</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/integrations">All integrations</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section className="py-12">
        <SectionHeading
          eyebrow="What you get with Innrly"
          title="Automation in front of your GL."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              h: "Capture & auto-code",
              b: "Invoices land in Innrly via OCR and email-in, then get auto-populated and GL-coded.",
            },
            {
              h: "Reconcile & audit",
              b: "Automated OTA reconciliation and Night Audit+ with variance flags before data hits your GL.",
            },
            {
              h: "Sync to Sage Intacct",
              b: "Clean, approved entries flow into Sage Intacct as your accounting system of record.",
            },
          ].map((s) => (
            <div key={s.h} className="aurora-card rounded-2xl p-6">
              <h3 className="text-base font-semibold text-foreground">{s.h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Tell us about your Sage Intacct setup."
        subtitle="Every portfolio is different. A 20-minute call is the fastest way to see fit."
        primary={{ to: "/contact", label: "Book a walkthrough" }}
        secondary={{ to: "/pricing", label: "View pricing" }}
      />
    </div>
  );
}
