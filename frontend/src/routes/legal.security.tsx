import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

export const Route = createFileRoute("/legal/security")({
  component: SecurityPage,
  loader: async () => {
    const seo = await fetchSeoData("/legal/security");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/legal/security"],
        "/legal/security"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/legal/security" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Security — Innrly",
          url: "/legal/security",
          isPartOf: { "@type": "WebSite", name: "Innrly", url: "/" },
        }),
      },
    ],
  }),
});

function SecurityPage() {
  return (
    <div className="bg-background">
      <Section className="max-w-3xl py-16">
        <h1 className="text-4xl font-bold text-foreground">Security at Innrly</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Hotel financial data deserves enterprise-grade security. Here's how we protect it.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Encryption",
              body: "TLS 1.2+ in transit, AES-256 at rest for every data store.",
            },
            {
              title: "Access controls",
              body: "Role-based access, SSO support, audit trail for every change.",
            },
            {
              title: "Infrastructure",
              body: "Hosted on tier-1 cloud infrastructure with continuous monitoring.",
            },
            { title: "Backups", body: "Encrypted daily backups with point-in-time recovery." },
            {
              title: "Vendor management",
              body: "Every sub-processor reviewed for security and confidentiality.",
            },
            {
              title: "Incident response",
              body: "24/7 monitoring with documented incident response playbooks.",
            },
          ].map((c) => (
            <div key={c.title} className="aurora-card rounded-2xl p-6">
              <h2 className="text-base font-semibold text-foreground">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Have a security question or need our security documentation? Email{" "}
          <a href="mailto:security@innrly.com" className="text-accent">
            security@innrly.com
          </a>
          .
        </p>
      </Section>
    </div>
  );
}
