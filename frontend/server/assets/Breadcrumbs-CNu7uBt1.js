import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
function Breadcrumbs({ items, className = "" }) {
  return /* @__PURE__ */ jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      className: `relative z-10 border-b border-border/40 bg-background/60 backdrop-blur ${className}`,
      children: /* @__PURE__ */ jsx("ol", { className: "mx-auto flex max-w-5xl flex-wrap items-center gap-1.5 px-4 py-3 text-xs text-muted-foreground sm:px-6 lg:px-8", children: items.map((item, i) => {
        const isLast = i === items.length - 1;
        return /* @__PURE__ */ jsxs("li", { className: "inline-flex items-center gap-1.5", children: [
          i > 0 && /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-muted-foreground/60", "aria-hidden": true }),
          isLast || !item.to ? /* @__PURE__ */ jsxs(
            "span",
            {
              className: "font-medium text-foreground",
              "aria-current": isLast ? "page" : void 0,
              children: [
                i === 0 && /* @__PURE__ */ jsx(Home, { className: "mr-1 inline h-3 w-3", "aria-hidden": true }),
                item.name
              ]
            }
          ) : /* @__PURE__ */ jsxs(
            Link,
            {
              to: item.to,
              className: "inline-flex items-center transition-colors hover:text-accent",
              children: [
                i === 0 && /* @__PURE__ */ jsx(Home, { className: "mr-1 h-3 w-3", "aria-hidden": true }),
                item.name
              ]
            }
          )
        ] }, `${item.name}-${i}`);
      }) })
    }
  );
}
export {
  Breadcrumbs as B
};
