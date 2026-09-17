import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Info } from "lucide-react";
function IllustrativeBanner({ compact = false }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "note",
      "aria-label": "Illustrative scenario disclosure",
      className: "border-b border-border/60 bg-surface/40",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-start gap-3 px-4 py-3 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx(Info, { className: "mt-0.5 h-4 w-4 flex-shrink-0 text-accent", "aria-hidden": true }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs leading-relaxed text-muted-foreground sm:text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Illustrative scenario." }),
          " ",
          compact ? /* @__PURE__ */ jsx(Fragment, { children: "Figures are directional ranges composited from typical Innrly engagements — not audited results from a single named customer. Actual outcomes vary by portfolio size, brand mix, PMS / accounting stack, and starting baseline." }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "The figures below are directional ranges composited from typical Innrly engagements with multi-property operators — they are",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "not audited results from a single named customer" }),
            " ",
            "and are intended to show the shape of impact, not a guarantee. Actual outcomes vary by portfolio size, brand mix, PMS / accounting stack, AP volume, and the operator's starting baseline. Reach out for a walkthrough using a sample of your actual data — we'll size the opportunity for your portfolio before you commit to anything."
          ] })
        ] })
      ] })
    }
  );
}
export {
  IllustrativeBanner as I
};
