import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { u as defaultSeoData, v as fetchSeoData, B as Button, L as Label, I as Input } from "./router-eu0xRd06.js";
import { T as Textarea } from "./textarea-CxoXjG8a.js";
import { toast } from "sonner";
import { RefreshCcw, Save, Search, Globe, LayoutTemplate } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
const PAGES = ["/", "/about", "/pricing", "/contact", "/features", "/security", "/developers"];
function AdminSeoPage() {
  const [selectedPage, setSelectedPage] = useState("/");
  const [data, setData] = useState({
    ...defaultSeoData["/"]
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    loadPageData(selectedPage);
  }, [selectedPage]);
  async function loadPageData(path) {
    setLoading(true);
    const serverData = await fetchSeoData(path);
    if (serverData && serverData.title) {
      setData(serverData);
    } else {
      setData({
        ...defaultSeoData[path]
      });
    }
    setLoading(false);
  }
  async function handleSave() {
    setSaving(true);
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("innrly_admin_token") || "" : "";
      const res = await fetch("http://127.0.0.1:8000/seo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      if (res.status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("innrly_admin_token");
          window.location.href = "/control-hub/login";
        }
        return;
      }
      if (res.ok) {
        toast.success(`SEO metadata saved for ${selectedPage}`);
      } else {
        toast.error("Failed to save SEO metadata.");
      }
    } catch (e) {
      toast.error("Network error while saving.");
    }
    setSaving(false);
  }
  function handleReset() {
    setData({
      ...defaultSeoData[selectedPage]
    });
    toast.info("Reset to static defaults. Don't forget to save.");
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-slate-900 tracking-tight", children: "SEO Management" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-500", children: "Manage meta tags, titles, and social previews for public pages." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: handleReset, className: "gap-2 bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900", children: [
          /* @__PURE__ */ jsx(RefreshCcw, { className: "h-4 w-4" }),
          "Reset to Defaults"
        ] }),
        /* @__PURE__ */ jsxs(Button, { onClick: handleSave, disabled: saving || loading, className: "gap-2 bg-indigo-600 hover:bg-indigo-700", children: [
          /* @__PURE__ */ jsx(Save, { className: "h-4 w-4" }),
          saving ? "Saving..." : "Save Changes"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-8 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 lg:col-span-5 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-5", children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block", children: "Target Page" }),
          /* @__PURE__ */ jsx("select", { value: selectedPage, onChange: (e) => setSelectedPage(e.target.value), className: "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500", children: PAGES.map((p) => /* @__PURE__ */ jsx("option", { value: p, children: p === "/" ? "/ (Home)" : p }, p)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-slate-100 pb-3", children: [
            /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-slate-400" }),
            /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold text-slate-800", children: "Search Engine Tags" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "title", className: "text-sm font-medium text-slate-700", children: "Page Title" }),
              /* @__PURE__ */ jsx(Input, { id: "title", value: data.title || "", onChange: (e) => setData({
                ...data,
                title: e.target.value
              }), className: "mt-1.5 bg-slate-50 border-slate-200" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-1 text-[11px] text-slate-400 text-right", children: [
                data.title?.length || 0,
                "/60 chars recommended"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "description", className: "text-sm font-medium text-slate-700", children: "Meta Description" }),
              /* @__PURE__ */ jsx(Textarea, { id: "description", rows: 3, value: data.description || "", onChange: (e) => setData({
                ...data,
                description: e.target.value
              }), className: "mt-1.5 bg-slate-50 border-slate-200 resize-none" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-1 text-[11px] text-slate-400 text-right", children: [
                data.description?.length || 0,
                "/160 chars recommended"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(Label, { htmlFor: "keywords", className: "text-sm font-medium text-slate-700", children: [
                "Keywords ",
                /* @__PURE__ */ jsx("span", { className: "text-slate-400 font-normal", children: "(Comma separated)" })
              ] }),
              /* @__PURE__ */ jsx(Input, { id: "keywords", value: data.keywords || "", onChange: (e) => setData({
                ...data,
                keywords: e.target.value
              }), className: "mt-1.5 bg-slate-50 border-slate-200" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-slate-100 pb-3", children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-slate-400" }),
            /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold text-slate-800", children: "Social Graph (OpenGraph)" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "og_title", className: "text-sm font-medium text-slate-700", children: "OG Title" }),
              /* @__PURE__ */ jsx(Input, { id: "og_title", value: data.og_title || "", onChange: (e) => setData({
                ...data,
                og_title: e.target.value
              }), className: "mt-1.5 bg-slate-50 border-slate-200" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "og_description", className: "text-sm font-medium text-slate-700", children: "OG Description" }),
              /* @__PURE__ */ jsx(Textarea, { id: "og_description", rows: 2, value: data.og_description || "", onChange: (e) => setData({
                ...data,
                og_description: e.target.value
              }), className: "mt-1.5 bg-slate-50 border-slate-200 resize-none" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "og_image", className: "text-sm font-medium text-slate-700", children: "OG Image URL" }),
              /* @__PURE__ */ jsx(Input, { id: "og_image", value: data.og_image || "", onChange: (e) => setData({
                ...data,
                og_image: e.target.value
              }), placeholder: "https://www.innrly.com/og/home.jpg", className: "mt-1.5 bg-slate-50 border-slate-200" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 lg:col-span-7 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-5 py-4 border-b border-slate-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(LayoutTemplate, { className: "h-4 w-4 text-slate-400" }),
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-slate-800", children: "Search Engine Preview" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-6 bg-slate-50/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl bg-white p-4 rounded-lg border border-slate-200 shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-[#202124] mb-1", children: [
              /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center text-xs overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "https://www.innrly.com/favicon.ico", alt: "", className: "w-4 h-4 object-contain" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "block text-sm", children: "Innrly" }),
                /* @__PURE__ */ jsxs("span", { className: "block text-[12px] text-slate-500 mt-0.5", children: [
                  "https://www.innrly.com",
                  selectedPage === "/" ? "" : selectedPage
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-[20px] text-[#1a0dab] hover:underline cursor-pointer font-medium mb-1 truncate", children: data.title || "Page Title" }),
            /* @__PURE__ */ jsx("div", { className: "text-[14px] text-[#4d5156] leading-snug line-clamp-2", children: data.description || "Page description goes here. It provides a brief summary of the page content to entice users to click the link." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-5 py-4 border-b border-slate-100 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-slate-400" }),
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-slate-800", children: "Social Share Preview" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-6 bg-slate-50/50 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[500px] bg-white rounded-xl border border-[#dadce0] overflow-hidden shadow-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full aspect-[1.91/1] bg-slate-200 relative border-b border-[#dadce0]", children: data.og_image ? /* @__PURE__ */ jsx("img", { src: data.og_image, alt: "", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center text-slate-400", children: "No Image Provided" }) }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-[#f2f3f5] min-h-[95px]", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[12px] text-[#606770] uppercase tracking-wider font-semibold mb-1 truncate", children: "INTRLY.COM" }),
              /* @__PURE__ */ jsx("div", { className: "text-[16px] text-[#1d2129] font-bold leading-tight mb-1 line-clamp-2", children: data.og_title || data.title || "Social Preview Title" }),
              /* @__PURE__ */ jsx("div", { className: "text-[14px] text-[#606770] line-clamp-1", children: data.og_description || data.description || "Social description goes here..." })
            ] })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminSeoPage as component
};
