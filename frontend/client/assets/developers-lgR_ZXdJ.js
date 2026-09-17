import{c as o,j as e}from"./index-DJazQEBm.js";import{S as a,a as r,C as s}from"./Section-BKOt-sCG.js";const n=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]],i=o("book-text",n);const c=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],d=o("code-xml",c);const l=[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z",key:"1xoxul"}],["path",{d:"M9 8V2",key:"14iosj"}]],p=o("plug",l);const x=[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]],m=o("webhook",x),u=[{icon:d,t:"REST API",b:"Read-and-write access to properties, invoices, GL entries, labor records, and reconciliation results. OAuth 2 authentication."},{icon:m,t:"Webhooks",b:"Real-time events for invoice posted, reconciliation cleared, exception flagged, and payroll exported. Signed payloads, retries built in."},{icon:p,t:"Partner integrations",b:"Pre-built connectors to PMSs, accounting, payroll, and banking. Want to be in the catalog? Talk to us."},{icon:i,t:"Documentation",b:"API reference, webhook signatures, rate limits, and code samples — available to active accounts and partners."}];function b(){return e.jsxs("div",{className:"bg-background",children:[e.jsxs("section",{className:"relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-hero opacity-90","aria-hidden":!0}),e.jsxs("div",{className:"relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8",children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-widest text-accent",children:"Developers"}),e.jsxs("h1",{className:"mt-4 text-4xl font-bold text-foreground sm:text-5xl",children:["Build on the ",e.jsx("span",{className:"text-gradient",children:"hotel back-office"})," platform."]}),e.jsx("p",{className:"mt-4 text-lg text-muted-foreground",children:"Innrly exposes secure REST APIs and webhooks for hotel data — invoices, GL, labor, reservations, and reconciliation. Built for portfolios, accounting partners, and integrators."})]})]}),e.jsxs(a,{children:[e.jsx(r,{eyebrow:"What's available",title:"APIs, webhooks, and partner tooling."}),e.jsx("div",{className:"mt-10 grid gap-6 md:grid-cols-2",children:u.map(t=>e.jsxs("div",{className:"aurora-card rounded-2xl p-6",children:[e.jsx("div",{className:"inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cta",children:e.jsx(t.icon,{className:"h-5 w-5 text-primary-foreground","aria-hidden":!0})}),e.jsx("h3",{className:"mt-4 text-lg font-semibold text-foreground",children:t.t}),e.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:t.b})]},t.t))})]}),e.jsx(a,{className:"py-12",children:e.jsxs("div",{className:"aurora-card rounded-2xl p-8",children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-widest text-accent",children:"Sample · Webhook payload"}),e.jsx("pre",{className:"mt-4 overflow-x-auto rounded-lg border border-border/60 bg-background/50 p-4 text-xs leading-relaxed text-foreground",children:`POST https://your-app.example.com/innrly
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
}`}),e.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"Always verify against the raw request body — JSON-stringifying after parse will break the HMAC. Rotate webhook secrets from the partner dashboard; both old and new secrets verify for 24 hours after rotation."})]})}),e.jsx(s,{title:"Building on Innrly?",subtitle:"API access is provisioned per account and per partner. Tell us what you're building — we'll get you keys and documentation.",primary:{to:"/contact",label:"Request API access"},secondary:{to:"/integrations",label:"Browse integrations"}})]})}export{b as component};
