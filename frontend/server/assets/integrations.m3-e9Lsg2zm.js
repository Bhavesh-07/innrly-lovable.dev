import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { k as faqs } from "./router-eu0xRd06.js";
import { I as IntegrationLayout } from "./IntegrationLayout-BWyYa58D.js";
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
import "./Section-C0oe_XKQ.js";
function Page() {
  return /* @__PURE__ */ jsx(IntegrationLayout, { partnerName: "M3", eyebrow: "Integration · M3", badge: "Certified M3 integration partner", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Innrly + M3: ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "auto-coded invoices" }),
    " straight into M3."
  ] }), intro: "Innrly is an officially certified M3 integration partner. Capture invoices, auto-populate and GL-code them in Innrly, then push the completed entries into M3 as your accounting system of record.", direction: "push-only", directionLabel: "Push-only · invoices → M3", whatItDoes: [{
    heading: "Capture & auto-populate",
    body: "Invoices arrive via OCR and email-in. Innrly extracts header, vendor, line items, and totals — no manual keying."
  }, {
    heading: "GL-code automatically",
    body: "Innrly applies your chart of accounts and historical coding rules so every invoice lands with the correct GL before approval."
  }, {
    heading: "Push to M3",
    body: "Approved, GL-coded invoices push directly into M3 — clean, audit-ready, and ready for your monthly close."
  }], flow: {
    from: "Invoice arrives in Innrly (OCR / email-in)",
    via: "Auto-populate, GL-code, approve",
    to: "Push into M3 as system of record"
  }, inScope: ["Invoice capture and OCR", "Auto GL-coding with your chart of accounts", "A/P approval workflows", "OTA reconciliation, night audit, Bill Pay, BI, labor"], staysIn: {
    system: "M3",
    items: ["General ledger and financial statements", "Month-end close and financial reporting", "Your existing M3 workflows and users"]
  }, faqs });
}
export {
  Page as component
};
