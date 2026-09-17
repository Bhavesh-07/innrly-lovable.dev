import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { w as faqs } from "./router-dBewJNnO.js";
import { C as CompareLayout } from "./CompareLayout-D8-49LZs.js";
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
import "./Section-DfKao03n.js";
import "./Breadcrumbs-CNu7uBt1.js";
function Page() {
  return /* @__PURE__ */ jsx(CompareLayout, { competitorName: "ProfitSage", eyebrow: "Innrly: alternative to ProfitSage", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "How Innrly and ProfitSage ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "compare." })
  ] }), intro: "ProfitSage is primarily a hotel BI and forecasting product. Innrly's BI covers the same use cases and runs on the same data model as A/P, night audit, OTA reconciliation, Face-ID TimeClock, and payroll — so a number on a dashboard links straight to the underlying transaction.", summary: [{
    heading: "Scope",
    body: "ProfitSage focuses on BI, forecasting, daily flash reports, and STR overlays. Innrly covers the same BI surface plus A/P automation, night audit, OTA reconciliation, Face-ID TimeClock, housekeeping productivity, and payroll on one platform."
  }, {
    heading: "Pricing transparency",
    body: "Innrly publishes $199/property/month with a 90-day full-access free trial. ProfitSage is quote-based with no published free trial."
  }, {
    heading: "Same-model data",
    body: "In Innrly, a labor variance on the BI dashboard drills directly into the schedule, TimeClock punches, and payroll register — same product, same data. ProfitSage reports on data ingested from other systems."
  }], rows: [{
    feature: "Daily flash reports",
    innrly: true,
    competitor: true
  }, {
    feature: "Forecasting + budget variance",
    innrly: true,
    competitor: true
  }, {
    feature: "STR overlay + benchmarking",
    innrly: true,
    competitor: true
  }, {
    feature: "Published per-property pricing",
    innrly: "$199/mo",
    competitor: "Quote-based"
  }, {
    feature: "Free trial",
    innrly: "90 days, full access",
    competitor: "Not published"
  }, {
    feature: "A/P automation (capture, code, approve)",
    innrly: true,
    competitor: false
  }, {
    feature: "Night audit automation",
    innrly: true,
    competitor: false
  }, {
    feature: "OTA commission reconciliation",
    innrly: true,
    competitor: false
  }, {
    feature: "Native Face-ID TimeClock",
    innrly: true,
    competitor: false
  }, {
    feature: "Housekeeping productivity matrix (MPOR, rooms/shift)",
    innrly: true,
    competitor: false
  }, {
    feature: "Labor scheduling + payroll",
    innrly: true,
    competitor: "partial"
  }, {
    feature: "Auto-pull invoices from vendor portals",
    innrly: true,
    competitor: false
  }, {
    feature: "One login, one data model across BI + back office",
    innrly: true,
    competitor: false
  }], whenToChoose: {
    innrly: ["You want BI plus the back-office layers that produce the BI data — on one platform", "You want published pricing and a real 90-day trial", "You want to consolidate from a BI-only tool plus 2–3 separate point solutions for A/P, audit, and labor", "You want Face-ID TimeClock + housekeeping productivity built in"],
    competitor: ["You only need BI and forecasting, and you already have A/P, audit, OTA, and labor solved by other products", "You're already deep in an Actabl rollout and ProfitSage is part of a larger commercial relationship"]
  }, faqs });
}
export {
  Page as component
};
