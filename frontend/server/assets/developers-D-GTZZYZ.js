import { jsxs, jsx } from "react/jsx-runtime";
import { Code2, Webhook, Plug, BookText } from "lucide-react";
import { S as Section, a as SectionHeading, C as CtaBand } from "./Section-C0oe_XKQ.js";
import "@tanstack/react-router";
import "./router-eu0xRd06.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
const blocks = [{
  icon: Code2,
  t: "REST API",
  b: "Read-and-write access to properties, invoices, GL entries, labor records, and reconciliation results. OAuth 2 authentication."
}, {
  icon: Webhook,
  t: "Webhooks",
  b: "Real-time events for invoice posted, reconciliation cleared, exception flagged, and payroll exported. Signed payloads, retries built in."
}, {
  icon: Plug,
  t: "Partner integrations",
  b: "Pre-built connectors to PMSs, accounting, payroll, and banking. Want to be in the catalog? Talk to us."
}, {
  icon: BookText,
  t: "Documentation",
  b: "API reference, webhook signatures, rate limits, and code samples — available to active accounts and partners."
}];
function Page() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Developers" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-4 text-4xl font-bold text-foreground sm:text-5xl", children: [
          "Build on the ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "hotel back-office" }),
          " platform."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Innrly exposes secure REST APIs and webhooks for hotel data — invoices, GL, labor, reservations, and reconciliation. Built for portfolios, accounting partners, and integrators." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "What's available", title: "APIs, webhooks, and partner tooling." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-2", children: blocks.map((b) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cta", children: /* @__PURE__ */ jsx(b.icon, { className: "h-5 w-5 text-primary-foreground", "aria-hidden": true }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold text-foreground", children: b.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.b })
      ] }, b.t)) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Sample · Webhook payload" }),
      /* @__PURE__ */ jsx("pre", { className: "mt-4 overflow-x-auto rounded-lg border border-border/60 bg-background/50 p-4 text-xs leading-relaxed text-foreground", children: `POST https://your-app.example.com/innrly
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
}` }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs font-semibold uppercase tracking-widest text-accent", children: "Expected response" }),
      /* @__PURE__ */ jsx("pre", { className: "mt-3 overflow-x-auto rounded-lg border border-border/60 bg-background/50 p-4 text-xs leading-relaxed text-foreground", children: `HTTP/1.1 200 OK
Content-Type: application/json

{ "received": true }` }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Respond with 2xx within 10 seconds. Non-2xx or timeouts trigger automatic retry with exponential backoff for up to 24 hours." }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs font-semibold uppercase tracking-widest text-accent", children: "Verify the signature" }),
      /* @__PURE__ */ jsx("pre", { className: "mt-3 overflow-x-auto rounded-lg border border-border/60 bg-background/50 p-4 text-xs leading-relaxed text-foreground", children: `import crypto from "crypto";

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
}` }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Always verify against the raw request body — JSON-stringifying after parse will break the HMAC. Rotate webhook secrets from the partner dashboard; both old and new secrets verify for 24 hours after rotation." })
    ] }) }),
    /* @__PURE__ */ jsx(CtaBand, { title: "Building on Innrly?", subtitle: "API access is provisioned per account and per partner. Tell us what you're building — we'll get you keys and documentation.", primary: {
      to: "/contact",
      label: "Request API access"
    }, secondary: {
      to: "/integrations",
      label: "Browse integrations"
    } })
  ] });
}
export {
  Page as component
};
