import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { l as faqs } from "./router-uiSeds_Z.js";
import { I as IntegrationLayout } from "./IntegrationLayout-7cUUNZue.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
import "./Section-DP-l4DF_.js";
function Page() {
  return /* @__PURE__ */ jsx(IntegrationLayout, { partnerName: "Inn-flow", eyebrow: "Integration · Inn-flow", badge: "API integration — on the roadmap", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Innrly + Inn-flow: ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "the automation layer" }),
    " for your Inn-flow GL."
  ] }), intro: "Inn-flow is your hotel accounting system of record. Innrly is the back-office automation layer that captures invoices, auto-codes them, reconciles OTAs, runs night audit, and pushes clean, audit-ready data into Inn-flow — the same way we already integrate with M3, QuickBooks, and Sage Intacct. API integration is on our near-term roadmap; early-access slots are open to Inn-flow customers today.", direction: "push-only", directionLabel: "Push-only · automation → Inn-flow GL", whatItDoes: [{
    heading: "Capture & auto-populate",
    body: "Invoices arrive via OCR and email-in. Innrly extracts header, vendor, line items, and totals — no manual keying into Inn-flow."
  }, {
    heading: "GL-code automatically",
    body: "Innrly applies your Inn-flow chart of accounts and historical coding rules so every invoice lands with the correct GL before approval."
  }, {
    heading: "Push to Inn-flow",
    body: "Approved, GL-coded invoices, OTA reconciliation entries, and night-audit summaries push into Inn-flow as your system of record — clean, audit-ready, ready for close."
  }], flow: {
    from: "Invoice / OTA data / audit arrives in Innrly",
    via: "Auto-populate, GL-code, reconcile, approve",
    to: "Push into Inn-flow as system of record"
  }, inScope: ["Invoice capture and OCR", "Auto GL-coding with your Inn-flow chart of accounts", "A/P approval workflows + Bill Pay", "OTA reconciliation and night-audit summaries", "BI dashboards and 5-minute labor snapshot (Innrly Shift)"], staysIn: {
    system: "Inn-flow",
    items: ["General ledger and financial statements", "AR, payroll, and bank reconciliation", "Month-end close and financial reporting", "Your existing Inn-flow workflows and users"]
  }, faqs });
}
export {
  Page as component
};
