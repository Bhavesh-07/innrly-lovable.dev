import { jsxs, jsx } from "react/jsx-runtime";
import { g as studies } from "./router-uiSeds_Z.js";
import { Link } from "@tanstack/react-router";
import { Building2, ArrowRight } from "lucide-react";
import { S as Section, a as SectionHeading, C as CtaBand } from "./Section-DP-l4DF_.js";
import { I as IllustrativeBanner } from "./IllustrativeBanner-Bh3yoxGK.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
const coming = [];
function Page() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsx(IllustrativeBanner, { compact: true }),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Case studies" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-4 text-4xl font-bold text-foreground sm:text-5xl", children: [
          "Illustrative scenarios. ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Directional numbers." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Composite scenarios built from typical Innrly engagements with multi-property hotel operators. They show the shape of impact — hours back, revenue protected, faster close — not audited results from a single named customer. Your numbers will depend on portfolio size, brand mix, and starting baseline." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Published", title: "Operator case studies." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: studies.map((s) => /* @__PURE__ */ jsxs(Link, { to: s.to, className: "group flex flex-col aurora-card rounded-2xl p-6 transition-colors hover:border-accent/60", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cta", children: /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-primary-foreground", "aria-hidden": true }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs font-semibold uppercase tracking-widest text-accent", children: s.segment }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 text-xl font-semibold text-foreground", children: s.portfolio }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-semibold text-foreground", children: s.headline }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.body }),
        /* @__PURE__ */ jsxs("span", { className: "mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent", children: [
          "Read case study",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5", "aria-hidden": true })
        ] })
      ] }, s.to)) }),
      coming.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "In progress" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 grid gap-4 md:grid-cols-2", children: coming.map((c) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-dashed border-border/60 p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: c.portfolio }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: c.body }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "Publishing soon." })
        ] }, c.portfolio)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(CtaBand, { title: "Want to be the next case study?", subtitle: "Tell us your portfolio mix. We'll show you the exact hours and dollars Innrly will give back.", primary: {
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
