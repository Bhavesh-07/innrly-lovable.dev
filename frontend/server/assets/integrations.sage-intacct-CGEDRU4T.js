import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { B as Button } from "./router-uiSeds_Z.js";
import { S as Section, a as SectionHeading, C as CtaBand } from "./Section-DP-l4DF_.js";
import "@tanstack/react-query";
import "react";
import "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
function Page() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Integration · Sage Intacct" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-4 text-4xl font-bold text-foreground sm:text-5xl", children: [
          "Innrly + ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Sage Intacct" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Innrly works with Sage Intacct as your accounting system of record. Setup and mapping vary by portfolio — get in touch and we'll walk through the fit for your stack." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Talk to us about Sage Intacct" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/integrations", children: "All integrations" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "What you get with Innrly", title: "Automation in front of your GL." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: [{
        h: "Capture & auto-code",
        b: "Invoices land in Innrly via OCR and email-in, then get auto-populated and GL-coded."
      }, {
        h: "Reconcile & audit",
        b: "Automated OTA reconciliation and Night Audit+ with variance flags before data hits your GL."
      }, {
        h: "Sync to Sage Intacct",
        b: "Clean, approved entries flow into Sage Intacct as your accounting system of record."
      }].map((s) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground", children: s.h }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.b })
      ] }, s.h)) })
    ] }),
    /* @__PURE__ */ jsx(CtaBand, { title: "Tell us about your Sage Intacct setup.", subtitle: "Every portfolio is different. A 20-minute call is the fastest way to see fit.", primary: {
      to: "/contact",
      label: "Book a walkthrough"
    }, secondary: {
      to: "/pricing",
      label: "View pricing"
    } })
  ] });
}
export {
  Page as component
};
