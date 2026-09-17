import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, X, Coffee, Building2 } from "lucide-react";
import { B as Button } from "./router-CCF17sca.js";
import { S as Section, a as SectionHeading, C as CtaBand } from "./Section-CUtP8UOj.js";
import { P as ProductOrb } from "./ProductOrb-BC39IRy6.js";
import "clsx";
const DEFAULT_ACCOUNTING_NOTE = "Works with QuickBooks Online & Desktop, M3, Sage Intacct, and other major accounting systems.";
function DeepSolutionLayout(props) {
  const {
    icon: Icon,
    eyebrow,
    persona,
    title,
    description,
    bullets,
    metrics,
    orbVariant,
    beforeAfter,
    workflow,
    replaces,
    quote,
    modules,
    faq,
    cta,
    accountingNote
  } = props;
  const noteText = accountingNote === false ? null : accountingNote ?? DEFAULT_ACCOUNTING_NOTE;
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex max-w-full items-center gap-3 text-xs font-semibold uppercase tracking-normal text-accent", children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5", "aria-hidden": true }),
            /* @__PURE__ */ jsx("span", { className: "font-display text-sm font-normal normal-case text-accent", children: persona }),
            /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-border", "aria-hidden": true })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: eyebrow }),
          /* @__PURE__ */ jsx("h1", { className: "mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl", children: title }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-muted-foreground", children: description }),
          /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent", "aria-hidden": true }),
            /* @__PURE__ */ jsx("span", { children: b })
          ] }, b)) }),
          noteText && /* @__PURE__ */ jsxs("p", { className: "mt-5 inline-flex max-w-full items-start gap-2 rounded-full border border-border bg-background/40 px-3.5 py-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-accent", "aria-hidden": true }),
            /* @__PURE__ */ jsx("span", { children: noteText })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
              "See it live ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsx(
              Button,
              {
                asChild: true,
                size: "lg",
                variant: "outline",
                className: "border-border bg-background/40",
                children: /* @__PURE__ */ jsx(Link, { to: "/pricing", children: "View pricing" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 flex items-center justify-center lg:justify-end", children: /* @__PURE__ */ jsx(ProductOrb, { variant: orbVariant, size: "lg" }) }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: metrics.map((m) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-5", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gradient sm:text-3xl", children: m.stat }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: m.label })
          ] }, m.label)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "The day, transformed",
          title: beforeAfter.title,
          description: beforeAfter.description
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-destructive/30 bg-destructive/5 p-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-destructive", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Without Innrly"
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 text-xl font-bold text-foreground", children: beforeAfter.withoutTitle }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3 text-sm text-muted-foreground", children: beforeAfter.without.map((w) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "·" }),
            " ",
            w
          ] }, w)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border-2 border-accent/40 bg-accent/5 p-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent", children: [
            /* @__PURE__ */ jsx(Coffee, { className: "h-3.5 w-3.5" }),
            " With Innrly"
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 text-xl font-bold text-foreground", children: beforeAfter.withTitle }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3 text-sm text-foreground", children: beforeAfter.withItems.map((w) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }),
            " ",
            w
          ] }, w)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { tone: "surface", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "A day in the life",
          title: workflow.title,
          description: workflow.description
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid items-center gap-10 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-5", children: workflow.steps.map((s, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex gap-4 rounded-2xl border-2 border-accent/30 bg-card/40 p-5 transition-colors hover:border-accent/60",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: [
                  "Step ",
                  i + 1
                ] }),
                /* @__PURE__ */ jsx("h4", { className: "mt-0.5 text-base font-semibold text-foreground", children: s.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.body })
              ] })
            ]
          },
          s.title
        )) }),
        /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-24", children: workflow.artifact })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "What you stop doing",
          title: replaces.title,
          description: replaces.description
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: replaces.items.map((item) => /* @__PURE__ */ jsxs(
        "span",
        {
          className: "inline-flex items-center gap-2 rounded-full border-2 border-destructive/40 bg-card px-4 py-2 text-sm text-muted-foreground",
          children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5 text-destructive" }),
            /* @__PURE__ */ jsx("span", { className: "line-through decoration-destructive/60", children: item })
          ]
        },
        item
      )) })
    ] }),
    /* @__PURE__ */ jsx(Section, { tone: "surface", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl rounded-3xl border-2 border-accent/40 bg-card p-10 text-center shadow-[0_18px_55px_-30px_color-mix(in_oklab,var(--accent)_60%,transparent)] sm:p-14", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxs("blockquote", { className: "mt-6 text-xl font-medium leading-relaxed text-foreground sm:text-2xl", children: [
        '"',
        quote.text,
        '"'
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 text-sm text-muted-foreground", children: quote.author }),
      /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-border", children: /* @__PURE__ */ jsxs(Link, { to: "/case-studies/midwest-portfolio", children: [
        "Read a customer story ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "What's in this suite",
          title: modules.title,
          description: modules.description
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: modules.items.map((m) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/features",
          className: "group rounded-2xl border-2 border-accent/35 bg-card p-5 transition hover:border-accent/80 hover:shadow-[0_14px_40px_-24px_color-mix(in_oklab,var(--accent)_70%,transparent)]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-base font-semibold text-foreground", children: m.name }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-accent" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: m.body })
          ]
        },
        m.name
      )) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { tone: "surface", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "The honest questions", title: faq.title }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-5 lg:grid-cols-2", children: faq.items.map((f) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "rounded-2xl border-2 border-accent/35 bg-card p-6 transition-colors hover:border-accent/65",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Building2, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-base font-semibold text-foreground", children: f.q }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.a })
            ] })
          ] })
        },
        f.q
      )) })
    ] }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: cta.title,
        subtitle: cta.subtitle,
        primary: { to: "/contact", label: "Book a demo" },
        secondary: { to: "/features", label: "Browse all features" }
      }
    )
  ] });
}
export {
  DeepSolutionLayout as D
};
