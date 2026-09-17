import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { h as faqs } from "./router-uiSeds_Z.js";
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
  return /* @__PURE__ */ jsx(IntegrationLayout, { partnerName: "QuickBooks", eyebrow: "Integration · QuickBooks", badge: "Two-way sync", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Innrly + QuickBooks: ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "full two-way sync" }),
    "."
  ] }), intro: "Innrly syncs bi-directionally with QuickBooks Online. Push GL-coded invoices and journal entries out, read vendors and chart of accounts back — both systems stay aligned, automatically.", direction: "two-way", directionLabel: "Two-way sync · invoices out, vendors & accounts in", whatItDoes: [{
    heading: "Push invoices out",
    body: "GL-coded, approved invoices flow from Innrly into QuickBooks with vendor, class, and account mapping intact."
  }, {
    heading: "Read accounts in",
    body: "Innrly pulls your QuickBooks chart of accounts, vendors, and classes so coding stays accurate without duplicate maintenance."
  }, {
    heading: "Stay aligned",
    body: "Posted balances and reconciled data flow back so Innrly's dashboards always match QuickBooks."
  }], flow: {
    from: "Capture in Innrly · CoA in QuickBooks",
    via: "Auto-code, approve, sync",
    to: "Invoices in QuickBooks · BI in Innrly"
  }, inScope: ["Invoice capture, OCR, auto GL-coding", "OTA reconciliation, night audit, Bill Pay", "Labor management and BI dashboards", "Two-way sync with QuickBooks Online"], staysIn: {
    system: "QuickBooks",
    items: ["General ledger and chart of accounts", "Bank feeds and reconciliations", "Tax reporting and financial statements"]
  }, faqs });
}
export {
  Page as component
};
