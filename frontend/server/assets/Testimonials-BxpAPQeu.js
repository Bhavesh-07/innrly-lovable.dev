import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { g as getApiBase } from "./router-CBR-JcUy.js";
const DEFAULT_TESTIMONIALS = [
  {
    quote: "Innrly replaced three spreadsheets and a part-time analyst. We close the month in two days instead of two weeks.",
    name: "Sarah Jenkins",
    title: "VP of Finance, Coastal Hospitality · 14 hotels",
    company: "Coastal Hospitality · 14 hotels",
    rating: 5
  },
  {
    quote: "The labor dashboard alone paid for the platform in the first quarter. Every GM checks it before they cut the schedule.",
    name: "Marcus Rodriguez",
    title: "Director of Operations, Horizon Group · 9 hotels",
    company: "Horizon Group · 9 hotels",
    rating: 5
  },
  {
    quote: "Onboarding took a week, not a quarter. Their team mapped our PMS, payroll, and accounting without us lifting a finger.",
    name: "David Chen",
    title: "Owner, Elevate Boutique Hotels · 4 hotels",
    company: "Elevate Boutique Hotels · 4 hotels",
    rating: 5
  }
];
const DEFAULT_SELECT_SERVICE_TESTIMONIALS = [
  {
    quote: "I used to start every Monday on the phone with my controller. Now I open one tab, see all eight hotels, and I'm done in five minutes. Innrly didn't replace a tool — it replaced a meeting.",
    name: "Rachael",
    title: "VP of Operations",
    company: "8-property midwest portfolio",
    rating: 5
  },
  {
    quote: "I used to spend Sunday night on next week's schedule and Friday afternoon fixing payroll. Innrly Shift gave me both nights back. The snapshot is the only labor screen I open all day.",
    name: "Amy",
    title: "GM",
    company: "110-room Holiday Inn Express",
    rating: 5
  }
];
function Testimonials({ page } = {}) {
  let currentPage = page;
  if (!currentPage && typeof window !== "undefined") {
    const path = window.location.pathname;
    if (path.includes("select-service")) currentPage = "select-service";
    else if (path.includes("full-service")) currentPage = "full-service";
    else if (path.includes("extended-stay")) currentPage = "extended-stay";
    else if (path.includes("pricing")) currentPage = "pricing";
  }
  const initial = currentPage === "select-service" ? DEFAULT_SELECT_SERVICE_TESTIMONIALS : DEFAULT_TESTIMONIALS;
  const [list, setList] = useState(initial);
  useEffect(() => {
    const fetchUrl = currentPage ? `${getApiBase()}/testimonials?page=${currentPage}` : `${getApiBase()}/testimonials`;
    fetch(fetchUrl).then((res) => res.json()).then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setList(data);
      }
    }).catch((err) => console.error("Failed to load testimonials:", err));
  }, [page]);
  return /* @__PURE__ */ jsx(
    "section",
    {
      "aria-labelledby": "testimonials-heading",
      className: "border-b border-border/60 bg-surface/30",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              id: "testimonials-heading",
              className: "text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
              children: "Operators who trust Innrly with the back office"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-base text-muted-foreground", children: "Finance leaders, owners, and GMs using Innrly across 200+ properties." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: list.length === 2 ? "mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto" : "mt-12 grid gap-6 md:grid-cols-3", children: list.map((t, idx) => /* @__PURE__ */ jsxs(
          "figure",
          {
            className: "flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-background p-6 shadow-sm",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 text-accent", "aria-label": "Rating stars", children: Array.from({ length: t.rating || 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current", "aria-hidden": true }, i)) }),
                /* @__PURE__ */ jsxs("blockquote", { className: "mt-4 text-base leading-relaxed text-foreground italic", children: [
                  "“",
                  t.quote,
                  "”"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("figcaption", { className: "mt-6 border-t border-border/60 pt-4 flex items-center gap-3", children: [
                t.avatar ? /* @__PURE__ */ jsx("img", { src: t.avatar, alt: t.name, className: "h-9 w-9 rounded-full object-cover border border-border" }) : /* @__PURE__ */ jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-cta text-xs font-bold text-primary-foreground shrink-0", children: t.name ? t.name.charAt(0).toUpperCase() : "?" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-foreground", children: t.name }),
                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
                    t.title,
                    " ",
                    t.company && !t.title.includes(t.company) ? `· ${t.company}` : ""
                  ] })
                ] })
              ] })
            ]
          },
          t.id || t.name || idx
        )) })
      ] })
    }
  );
}
export {
  Testimonials as T
};
