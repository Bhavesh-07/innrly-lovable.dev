import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { j as faqs } from "./router-CCF17sca.js";
import { I as IntegrationLayout } from "./IntegrationLayout-Bw8C8hXP.js";
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
import "./Section-CUtP8UOj.js";
function Page() {
  return /* @__PURE__ */ jsx(IntegrationLayout, { partnerName: "Mews", eyebrow: "Integration · Mews", badge: "PMS · API-first", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Innrly + Mews: ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "close the books" }),
    " on a modern PMS."
  ] }), intro: "Innrly connects to Mews to automate the back office — daily reconciliation, A/P invoice capture, labor management, and BI — across every property running on Mews.", direction: "push-only", directionLabel: "Read from Mews · push to accounting", whatItDoes: [{
    heading: "Real-time data from Mews",
    body: "Folio, revenue, and reservation data flows into Innrly via the Mews integration interface."
  }, {
    heading: "Three-way reconciliation",
    body: "Match Mews revenue against bank, credit card, and OTA statements automatically."
  }, {
    heading: "Coded to your GL",
    body: "Approved entries push into QuickBooks, M3, or Sage Intacct with the correct property and class."
  }], flow: {
    from: "Mews",
    via: "Innrly · reconcile, code, route",
    to: "Your accounting system"
  }, inScope: ["Night-audit automation across Mews properties", "Daily three-way reconciliation", "Invoice capture, GL coding, and Bill Pay", "Labor scheduling and TimeClock"], staysIn: {
    system: "Mews",
    items: ["Reservations and operations", "Front-desk workflow", "Rate plans and channel management"]
  }, faqs });
}
export {
  Page as component
};
