import { jsxs, jsx } from "react/jsx-runtime";
import { d as terms } from "./router-DU7xSoX0.js";
import { S as Section, a as SectionHeading } from "./Section-YatvVMiA.js";
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
function GlossaryPage() {
  const groups = terms.reduce((acc, t) => {
    const letter = t.term.charAt(0).toUpperCase();
    (acc[letter] ||= []).push(t);
    return acc;
  }, {});
  const letters = Object.keys(groups).sort();
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold text-foreground sm:text-5xl", children: [
          "Hotel operations ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "glossary." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Plain-English definitions for the finance, labor, and operations terms multi-property operators use every day." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-10 -mx-4 mb-8 flex flex-wrap justify-center gap-1 border-y border-border/60 bg-background/85 px-4 py-3 backdrop-blur-xl sm:-mx-6 lg:-mx-8", children: alphabet.map((l) => {
        const has = groups[l];
        return has ? /* @__PURE__ */ jsx("a", { href: `#letter-${l}`, className: "inline-flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold text-foreground transition-colors hover:bg-accent/15 hover:text-accent", children: l }, l) : /* @__PURE__ */ jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold text-muted-foreground/40", children: l }, l);
      }) }),
      /* @__PURE__ */ jsx(SectionHeading, { title: "The terms that matter" }),
      letters.map((letter) => /* @__PURE__ */ jsxs("div", { id: `letter-${letter}`, className: "mt-10 scroll-mt-32", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-sm font-bold uppercase tracking-widest text-accent", children: letter }),
        /* @__PURE__ */ jsx("dl", { className: "grid gap-6 sm:grid-cols-2", children: groups[letter].map((t) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxs("dt", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-foreground", children: t.term }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: t.full })
          ] }),
          /* @__PURE__ */ jsx("dd", { className: "mt-3 text-sm text-muted-foreground", children: t.def })
        ] }, t.term)) })
      ] }, letter))
    ] })
  ] });
}
export {
  GlossaryPage as component
};
