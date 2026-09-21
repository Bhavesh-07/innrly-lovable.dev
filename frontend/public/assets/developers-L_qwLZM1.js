import{j as e}from"./index-C36pbbX1.js";import{S as r,a,C as o}from"./Section-C6w627nc.js";import{a5 as s,a6 as n,a7 as i,a8 as c}from"./vendor-lucide-DBTHvd0w.js";import"./vendor-radix-DEasPRVN.js";const d=[{icon:s,t:"REST API",b:"Read-and-write access to properties, invoices, GL entries, labor records, and reconciliation results. OAuth 2 authentication."},{icon:n,t:"Webhooks",b:"Real-time events for invoice posted, reconciliation cleared, exception flagged, and payroll exported. Signed payloads, retries built in."},{icon:i,t:"Partner integrations",b:"Pre-built connectors to PMSs, accounting, payroll, and banking. Want to be in the catalog? Talk to us."},{icon:c,t:"Documentation",b:"API reference, webhook signatures, rate limits, and code samples — available to active accounts and partners."}];function u(){return e.jsxs("div",{className:"bg-background",children:[e.jsxs("section",{className:"relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-hero opacity-90","aria-hidden":!0}),e.jsxs("div",{className:"relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8",children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-widest text-accent",children:"Developers"}),e.jsxs("h1",{className:"mt-4 text-4xl font-bold text-foreground sm:text-5xl",children:["Build on the ",e.jsx("span",{className:"text-gradient",children:"hotel back-office"})," platform."]}),e.jsx("p",{className:"mt-4 text-lg text-muted-foreground",children:"Innrly exposes secure REST APIs and webhooks for hotel data — invoices, GL, labor, reservations, and reconciliation. Built for portfolios, accounting partners, and integrators."})]})]}),e.jsxs(r,{children:[e.jsx(a,{eyebrow:"What's available",title:"APIs, webhooks, and partner tooling."}),e.jsx("div",{className:"mt-10 grid gap-6 md:grid-cols-2",children:d.map(t=>e.jsxs("div",{className:"aurora-card rounded-2xl p-6",children:[e.jsx("div",{className:"inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cta",children:e.jsx(t.icon,{className:"h-5 w-5 text-primary-foreground","aria-hidden":!0})}),e.jsx("h3",{className:"mt-4 text-lg font-semibold text-foreground",children:t.t}),e.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:t.b})]},t.t))})]}),e.jsx(r,{className:"py-12",children:e.jsxs("div",{className:"aurora-card rounded-2xl p-8",children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-widest text-accent",children:"Sample · Webhook payload"}),e.jsx("pre",{className:"mt-4 overflow-x-auto rounded-lg border border-border/60 bg-background/50 p-4 text-xs leading-relaxed text-foreground",children:`POST https://your-app.example.com/innrly
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
}`}),e.jsx("p",{className:"mt-6 text-xs font-semibold uppercase tracking-widest text-accent",children:"Expected response"}),e.jsx("pre",{className:"mt-3 overflow-x-auto rounded-lg border border-border/60 bg-background/50 p-4 text-xs leading-relaxed text-foreground",children:`HTTP/1.1 200 OK
Content-Type: application/json

{ "received": true }`}),e.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Respond with 2xx within 10 seconds. Non-2xx or timeouts trigger automatic retry with exponential backoff for up to 24 hours."}),e.jsx("p",{className:"mt-6 text-xs font-semibold uppercase tracking-widest text-accent",children:"Verify the signature"}),e.jsx("pre",{className:"mt-3 overflow-x-auto rounded-lg border border-border/60 bg-background/50 p-4 text-xs leading-relaxed text-foreground",children:`import crypto from "crypto";

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
}`}),e.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Always verify against the raw request body — JSON-stringifying after parse will break the HMAC. Rotate webhook secrets from the partner dashboard; both old and new secrets verify for 24 hours after rotation."})]})}),e.jsx(o,{title:"Building on Innrly?",subtitle:"API access is provisioned per account and per partner. Tell us what you're building — we'll get you keys and documentation.",primary:{to:"/contact",label:"Request API access"},secondary:{to:"/integrations",label:"Browse integrations"}})]})}export{u as component};
