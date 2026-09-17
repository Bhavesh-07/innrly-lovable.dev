import { jsxs, jsx } from "react/jsx-runtime";
import { f as faqs } from "./router-DU7xSoX0.js";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, KeyRound, FileSearch, Database, ServerCog, BellRing, Users } from "lucide-react";
import { S as Section, a as SectionHeading, C as CtaBand } from "./Section-YatvVMiA.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
const pillars = [{
  icon: Lock,
  t: "Encryption everywhere",
  b: "TLS 1.2+ in transit. AES-256 at rest on every data store, backup, and replica."
}, {
  icon: KeyRound,
  t: "Identity & access",
  b: "SSO (SAML/OIDC), enforced MFA, scoped roles per property and per module."
}, {
  icon: FileSearch,
  t: "Full audit trail",
  b: "Every login, change, and export is recorded with actor, time, and source IP — exportable for SOC 1 / SOX review."
}, {
  icon: Database,
  t: "Encrypted backups",
  b: "Encrypted daily backups with point-in-time recovery across geographically separate regions."
}, {
  icon: ServerCog,
  t: "Tier-1 infrastructure",
  b: "Hosted on a top-tier cloud provider with isolated tenants, network segmentation, and DDoS protection."
}, {
  icon: BellRing,
  t: "24/7 monitoring",
  b: "Continuous logging, anomaly detection, and a documented incident response plan with defined SLAs."
}, {
  icon: Users,
  t: "Vendor management",
  b: "Every sub-processor reviewed for security, confidentiality, and data residency before going live."
}, {
  icon: ShieldCheck,
  t: "Responsible disclosure",
  b: "Coordinated disclosure program. Report vulnerabilities to security@innrly.com — we respond within one business day."
}];
function Page() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0 opacity-30", "aria-hidden": true, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cta", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-7 w-7 text-primary-foreground", "aria-hidden": true }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs font-semibold uppercase tracking-widest text-accent", children: "Security & trust" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-3 text-4xl font-bold text-foreground sm:text-5xl", children: [
          "Hotel financial data deserves ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "enterprise-grade" }),
          " ",
          "security."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "How Innrly protects every invoice, folio, payroll record, and bank deposit — across every property in your portfolio." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Eight pillars", title: "How we protect your data." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: pillars.map((p) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cta", children: /* @__PURE__ */ jsx(p.icon, { className: "h-5 w-5 text-primary-foreground", "aria-hidden": true }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-base font-semibold text-foreground", children: p.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.b })
      ] }, p.t)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "FAQ", title: "What security teams ask us." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 md:grid-cols-2", children: faqs.map((f) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: f.q }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.a })
      ] }, f.q)) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-10 text-center text-sm text-muted-foreground", children: [
        "Have a security question or need our documentation? Email",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:security@innrly.com", className: "text-accent hover:underline", children: "security@innrly.com" }),
        " ",
        "or read our",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/legal/security", className: "text-accent hover:underline", children: "security overview" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx(CtaBand, { title: "Need our security pack?", subtitle: "SOC 2 mapping, sub-processor list, and DPA template — available under NDA.", primary: {
      to: "/contact",
      label: "Request documentation"
    }, secondary: {
      to: "/legal/security",
      label: "Read security overview"
    } })
  ] });
}
export {
  Page as component
};
