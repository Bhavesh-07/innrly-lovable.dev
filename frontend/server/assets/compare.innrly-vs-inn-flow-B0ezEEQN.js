import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { A as faqs } from "./router-CBR-JcUy.js";
import { C as CompareLayout } from "./CompareLayout-BVxrdXX0.js";
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
import "./Section-Df9Ktkng.js";
import "./Breadcrumbs-CNu7uBt1.js";
function Page() {
  return /* @__PURE__ */ jsx(CompareLayout, { competitorName: "Inn-flow", eyebrow: "Innrly: alternative to Inn-flow", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "How Innrly and Inn-flow ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "compare." })
  ] }), intro: "Inn-flow is a full hotel general ledger and accounting system. Innrly is a back-office automation, night audit, and labor layer that sits in front of the GL. This page covers how the features overlap and how Innrly feeds clean data into your system of record.", summary: [{
    heading: "Integration, Not Replacement",
    body: "You keep Inn-flow as your general ledger of record. Innrly sits in front as the automated capture layer — night audit, OTA reconciliation, and invoice OCR — pushing clean, GL-coded data in."
  }, {
    heading: "TimeClock & Productivity",
    body: "Innrly includes a native Face-ID TimeClock with a Housekeeping productivity matrix (MPOR, rooms-per-shift, variance vs standard) built into labor scheduling. Inn-flow focuses on accounting and labor schedules."
  }, {
    heading: "Commercial Flexibility",
    body: "Innrly is month-to-month with a 90-day free trial on your real data, and onboarding is included in the annual plan. Inn-flow is quote-based under annual contracts."
  }], rows: [{
    feature: "Month-to-month contracts",
    innrly: true,
    competitor: false,
    note: "Inn-flow: typically annual"
  }, {
    feature: "Free trial",
    innrly: "90 days, full access",
    competitor: "Not published"
  }, {
    feature: "Onboarding included",
    innrly: "Yes, on annual plan",
    competitor: "Quote-based"
  }, {
    feature: "Full General Ledger (GL)",
    innrly: false,
    competitor: true,
    note: "Innrly integrates and pushes to Inn-flow GL"
  }, {
    feature: "Daily night audit automation",
    innrly: true,
    competitor: "partial"
  }, {
    feature: "OTA commission reconciliation",
    innrly: true,
    competitor: "partial"
  }, {
    feature: "Native Face-ID TimeClock",
    innrly: true,
    competitor: false
  }, {
    feature: "Housekeeping productivity (MPOR, variance)",
    innrly: true,
    competitor: false
  }, {
    feature: "Auto-pull invoices from vendor portals",
    innrly: true,
    competitor: false
  }, {
    feature: "One login, one data model across modules",
    innrly: true,
    competitor: "partial"
  }], whenToChoose: {
    innrly: ["You want month-to-month contracts and a 90-day free trial to test on your own data first", "You want advanced Face-ID TimeClock + housekeeping productivity metrics directly connected to scheduling", "You want to automate the manual data entry (OCR, Night Audit, OTA) before it hits your accounting system"],
    competitor: ["You need a full hotel accounting system of record and General Ledger (GL) from scratch", "You want a single-vendor solution for hotel accounting and do not mind manual coding/reconciliation tasks"]
  }, faqs });
}
export {
  Page as component
};
