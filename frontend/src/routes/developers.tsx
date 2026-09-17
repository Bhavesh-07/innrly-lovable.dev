import { createFileRoute } from "@tanstack/react-router";
import { Code2, Webhook, Plug, BookText } from "lucide-react";
import { Section, SectionHeading, CtaBand } from "@/components/site/Section";
import { defaultSeoData, fetchSeoData, getMetaTags, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/developers")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/developers");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(loaderData?.seo || null, defaultSeoData["/developers"], "/developers"),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/developers" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Developers", url: "/developers" },
      ]),
    ],
  }),
});

const blocks = [
  {
    icon: Code2,
    t: "REST API",
    b: "Read-and-write access to properties, invoices, GL entries, labor records, and reconciliation results. OAuth 2 authentication.",
  },
  {
    icon: Webhook,
    t: "Webhooks",
    b: "Real-time events for invoice posted, reconciliation cleared, exception flagged, and payroll exported. Signed payloads, retries built in.",
  },
  {
    icon: Plug,
    t: "Partner integrations",
    b: "Pre-built connectors to PMSs, accounting, payroll, and banking. Want to be in the catalog? Talk to us.",
  },
  {
    icon: BookText,
    t: "Documentation",
    b: "API reference, webhook signatures, rate limits, and code samples — available to active accounts and partners.",
  },
];

function Page() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Developers</p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Build on the <span className="text-gradient">hotel back-office</span> platform.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Innrly exposes secure REST APIs and webhooks for hotel data — invoices, GL, labor,
            reservations, and reconciliation. Built for portfolios, accounting partners, and
            integrators.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="What's available" title="APIs, webhooks, and partner tooling." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.t} className="aurora-card rounded-2xl p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cta">
                <b.icon className="h-5 w-5 text-primary-foreground" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <div className="aurora-card rounded-2xl p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Sample · Webhook payload
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-border/60 bg-background/50 p-4 text-xs leading-relaxed text-foreground">
            {`POST https://your-app.example.com/innrly
Content-Type: application/json
X-Innrly-Signature: t=1733191800,v1=ad34f8b1c2e9...

{
  "event": "invoice.posted",
  "id": "evt_01HXYZABC123",
  "created_at": "2026-06-08T14:22:11Z",
  "data": {
    "id": "inv_01HXYZ...",
    "property_id": "prop_chi_riv",
    "vendor": "Sysco",
    "total": 4821.55,
    "gl_account": "5101 - F&B Cost",
    "approved_by": "controller@portfolio.com",
    "posted_to": "quickbooks_online"
  }
}`}
          </pre>

          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent">
            Expected response
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-border/60 bg-background/50 p-4 text-xs leading-relaxed text-foreground">
            {`HTTP/1.1 200 OK
Content-Type: application/json

{ "received": true }`}
          </pre>
          <p className="mt-2 text-xs text-muted-foreground">
            Respond with 2xx within 10 seconds. Non-2xx or timeouts trigger automatic retry with
            exponential backoff for up to 24 hours.
          </p>

          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent">
            Verify the signature
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-border/60 bg-background/50 p-4 text-xs leading-relaxed text-foreground">
            {`import crypto from "crypto";

// Header format: t=<unix-ts>,v1=<hex-hmac>
// Signed payload: "<t>.<raw request body>"  using HMAC-SHA256
export function verifyInnrlySignature(
  header: string,
  rawBody: string,
  secret: string,
  toleranceSec = 300,
): boolean {
  const parts = Object.fromEntries(
    header.split(",").map((p) => p.split("=") as [string, string]),
  );
  const t = Number(parts.t);
  if (!t || Math.abs(Date.now() / 1000 - t) > toleranceSec) return false;

  const expected = crypto
    .createHmac("sha256", secret)
    .update(\`\${t}.\${rawBody}\`)
    .digest("hex");

  const a = Buffer.from(expected, "hex");
  const b = Buffer.from(parts.v1 ?? "", "hex");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}`}
          </pre>
          <p className="mt-2 text-xs text-muted-foreground">
            Always verify against the raw request body — JSON-stringifying after parse will break
            the HMAC. Rotate webhook secrets from the partner dashboard; both old and new secrets
            verify for 24 hours after rotation.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Building on Innrly?"
        subtitle="API access is provisioned per account and per partner. Tell us what you're building — we'll get you keys and documentation."
        primary={{ to: "/contact", label: "Request API access" }}
        secondary={{ to: "/integrations", label: "Browse integrations" }}
      />
    </div>
  );
}
