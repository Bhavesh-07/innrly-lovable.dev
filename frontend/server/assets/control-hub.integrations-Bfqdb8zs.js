import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { B as Button, L as Label, I as Input } from "./router-uiSeds_Z.js";
import { toast } from "sonner";
import { ArrowLeft, Save, Database, Upload, BadgeCheck, Clock, Plus, Search, Edit2, Trash2 } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
const CATEGORIES = [{
  value: "pms",
  label: "Property Management (PMS)",
  shortLabel: "PMS"
}, {
  value: "ota",
  label: "OTAs & Travel Channels",
  shortLabel: "OTAs"
}, {
  value: "accounting",
  label: "Accounting",
  shortLabel: "Accounting"
}, {
  value: "payroll",
  label: "Payroll & TimeClock",
  shortLabel: "Payroll"
}, {
  value: "guest",
  label: "Guest Survey & Reputation",
  shortLabel: "Guest"
}, {
  value: "banking",
  label: "Banking (via Plaid)",
  shortLabel: "Banking"
}, {
  value: "payments",
  label: "Invoice Payments & A/P",
  shortLabel: "A/P"
}, {
  value: "workforce",
  label: "Workforce, Screening & Credit",
  shortLabel: "Workforce"
}];
function AdminIntegrationsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const API_BASE = "http://localhost:8000";
  const [uploading, setUploading] = useState(false);
  async function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file.");
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const token = localStorage.getItem("innrly_admin_token") || "";
      const res = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData
      });
      if (res.status === 401) {
        localStorage.removeItem("innrly_admin_token");
        window.location.href = "/control-hub/login";
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setSelectedItem((prev) => prev ? {
          ...prev,
          image_url: data.url
        } : null);
        toast.success("Image uploaded successfully!");
      } else {
        const errData = await res.json().catch(() => ({}));
        toast.error(errData.detail || "Failed to upload image.");
      }
    } catch (err) {
      toast.error("Network error during image upload.");
    } finally {
      setUploading(false);
    }
  }
  useEffect(() => {
    fetchItems();
  }, []);
  async function fetchItems() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/integrations`);
      if (res.ok) {
        const data = await res.json();
        setItems(data);
      } else {
        toast.error("Failed to load integrations.");
      }
    } catch (e) {
      toast.error("Network error while loading integrations.");
    } finally {
      setLoading(false);
    }
  }
  async function handleSave(e) {
    e.preventDefault();
    if (!selectedItem) return;
    if (!selectedItem.name.trim()) {
      toast.error("Name is required.");
      return;
    }
    if (!selectedItem.initials.trim()) {
      toast.error("Initials are required.");
      return;
    }
    if (!selectedItem.category) {
      toast.error("Category is required.");
      return;
    }
    setSaving(true);
    try {
      const token = localStorage.getItem("innrly_admin_token") || "";
      const res = await fetch(`${API_BASE}/integrations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(selectedItem)
      });
      if (res.status === 401) {
        localStorage.removeItem("innrly_admin_token");
        window.location.href = "/control-hub/login";
        return;
      }
      if (res.ok) {
        toast.success(selectedItem.id ? "Integration updated successfully!" : "New integration created successfully!");
        setSelectedItem(null);
        fetchItems();
      } else {
        const errData = await res.json();
        toast.error(errData.detail || "Failed to save integration.");
      }
    } catch (e2) {
      toast.error("Network error while saving.");
    } finally {
      setSaving(false);
    }
  }
  async function handleDelete(id, name) {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;
    try {
      const token = localStorage.getItem("innrly_admin_token") || "";
      const res = await fetch(`${API_BASE}/integrations/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (res.status === 401) {
        localStorage.removeItem("innrly_admin_token");
        window.location.href = "/control-hub/login";
        return;
      }
      if (res.ok) {
        toast.success("Integration deleted successfully!");
        fetchItems();
      } else {
        toast.error("Failed to delete integration.");
      }
    } catch (e) {
      toast.error("Network error while deleting.");
    }
  }
  const handleAddNew = () => {
    setSelectedItem({
      name: "",
      initials: "",
      category: "pms",
      hue: 200,
      domain: "",
      image_url: "",
      badge: "",
      to_url: ""
    });
  };
  const handleEdit = (item) => {
    setSelectedItem({
      ...item
    });
  };
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.domain && item.domain.toLowerCase().includes(searchTerm.toLowerCase()) || item.initials.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  return /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto space-y-6", children: selectedItem ? (
    /* Form View */
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSave, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => setSelectedItem(null), className: "h-9 w-9 p-0 rounded-xl bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900", children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 block", children: selectedItem.id ? "Edit Mode" : "Creation Mode" }),
            /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-slate-800 tracking-tight mt-0.5", children: selectedItem.id ? "Edit Integration" : "Create New Integration" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => setSelectedItem(null), className: "border-slate-200 text-slate-700 bg-white hover:bg-slate-50 h-9 rounded-xl text-xs font-semibold px-4", children: "Cancel" }),
          /* @__PURE__ */ jsxs(Button, { type: "submit", disabled: saving, className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 font-semibold rounded-xl px-4", children: [
            /* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }),
            saving ? "Saving..." : "Save Integration"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-slate-100 pb-3", children: [
            /* @__PURE__ */ jsx(Database, { className: "h-4 w-4 text-slate-400" }),
            /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold text-slate-800", children: "Integration Configuration" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxs(Label, { htmlFor: "name", className: "text-xs font-semibold text-slate-600", children: [
                "System Name ",
                /* @__PURE__ */ jsx("span", { className: "text-indigo-500", children: "*" })
              ] }),
              /* @__PURE__ */ jsx(Input, { id: "name", placeholder: "e.g. Opera (Oracle)", value: selectedItem.name, onChange: (e) => setSelectedItem({
                ...selectedItem,
                name: e.target.value
              }), className: "border-slate-200 rounded-lg text-sm" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxs(Label, { htmlFor: "initials", className: "text-xs font-semibold text-slate-600", children: [
                "Short Initials ",
                /* @__PURE__ */ jsx("span", { className: "text-indigo-500", children: "*" })
              ] }),
              /* @__PURE__ */ jsx(Input, { id: "initials", placeholder: "e.g. OP", maxLength: 6, value: selectedItem.initials, onChange: (e) => setSelectedItem({
                ...selectedItem,
                initials: e.target.value
              }), className: "border-slate-200 rounded-lg text-sm" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxs(Label, { htmlFor: "category", className: "text-xs font-semibold text-slate-600", children: [
                "Integration Category ",
                /* @__PURE__ */ jsx("span", { className: "text-indigo-500", children: "*" })
              ] }),
              /* @__PURE__ */ jsx("select", { id: "category", value: selectedItem.category, onChange: (e) => setSelectedItem({
                ...selectedItem,
                category: e.target.value
              }), className: "w-full h-10 border border-slate-200 rounded-lg bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsx("option", { value: cat.value, children: cat.label }, cat.value)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "domain", className: "text-xs font-semibold text-slate-600", children: "Official Domain (for Favicon lookup)" }),
              /* @__PURE__ */ jsx(Input, { id: "domain", placeholder: "e.g. oracle.com", value: selectedItem.domain || "", onChange: (e) => setSelectedItem({
                ...selectedItem,
                domain: e.target.value
              }), className: "border-slate-200 rounded-lg text-sm" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "image_url", className: "text-xs font-semibold text-slate-600", children: "Custom Image/Icon URL (or Upload)" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx(Input, { id: "image_url", placeholder: "e.g. https://domain.com/logo.png", value: selectedItem.image_url || "", onChange: (e) => setSelectedItem({
                  ...selectedItem,
                  image_url: e.target.value
                }), className: "border-slate-200 rounded-lg text-sm flex-grow" }),
                /* @__PURE__ */ jsx("input", { type: "file", id: "image-upload", accept: "image/*", onChange: handleImageUpload, className: "hidden" }),
                /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", disabled: uploading, onClick: () => document.getElementById("image-upload")?.click(), className: "h-10 rounded-lg text-xs font-semibold px-3 flex items-center gap-1.5 shrink-0 bg-white hover:bg-slate-50 border-slate-200", children: [
                  uploading ? /* @__PURE__ */ jsx("div", { className: "animate-spin h-3.5 w-3.5 border-2 border-indigo-600 border-t-transparent rounded-full" }) : /* @__PURE__ */ jsx(Upload, { className: "h-3.5 w-3.5 text-slate-500" }),
                  uploading ? "..." : "Upload"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "badge", className: "text-xs font-semibold text-slate-600", children: "Badge Text (e.g. partner)" }),
              /* @__PURE__ */ jsx(Input, { id: "badge", placeholder: "e.g. partner", value: selectedItem.badge || "", onChange: (e) => setSelectedItem({
                ...selectedItem,
                badge: e.target.value
              }), className: "border-slate-200 rounded-lg text-sm" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "to_url", className: "text-xs font-semibold text-slate-600", children: "Deep Dive Route URL (optional)" }),
            /* @__PURE__ */ jsx(Input, { id: "to_url", placeholder: "e.g. /integrations/m3", value: selectedItem.to_url || "", onChange: (e) => setSelectedItem({
              ...selectedItem,
              to_url: e.target.value
            }), className: "border-slate-200 rounded-lg text-sm" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 pt-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxs(Label, { htmlFor: "hue", className: "text-xs font-semibold text-slate-600", children: [
                "Accent Theme Hue Color (",
                selectedItem.hue,
                "°)"
              ] }),
              /* @__PURE__ */ jsx("span", { className: "h-3.5 w-8 rounded border border-slate-200 shadow-sm", style: {
                backgroundColor: `oklch(0.55 0.12 ${selectedItem.hue})`
              } })
            ] }),
            /* @__PURE__ */ jsx("input", { id: "hue", type: "range", min: "0", max: "360", value: selectedItem.hue, onChange: (e) => setSelectedItem({
              ...selectedItem,
              hue: parseInt(e.target.value)
            }), className: "w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full border-b border-slate-800 pb-2 mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest", children: "Public Grid Live Preview" }) }),
          /* @__PURE__ */ jsx("div", { className: "w-full max-w-[240px] select-none py-4", children: /* @__PURE__ */ jsxs("div", { className: "group relative flex h-28 flex-col items-center justify-center gap-1.5 rounded-xl border-2 bg-white px-3 pt-5 text-center shadow-md", style: {
            borderColor: `oklch(0.55 0.12 ${selectedItem.hue} / 0.35)`
          }, children: [
            selectedItem.badge === "partner" && /* @__PURE__ */ jsxs("span", { className: "absolute top-1.5 right-1.5 inline-flex items-center gap-1 rounded-full bg-indigo-600 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm", children: [
              /* @__PURE__ */ jsx(BadgeCheck, { className: "h-2.5 w-2.5" }),
              "Partner"
            ] }),
            selectedItem.to_url && /* @__PURE__ */ jsxs("span", { className: "absolute top-1.5 left-1.5 inline-flex items-center gap-1 rounded-full bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-600", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-2.5 w-2.5" }),
              "Deep dive"
            ] }),
            selectedItem.image_url ? /* @__PURE__ */ jsx("img", { src: selectedItem.image_url, alt: "logo", className: "h-8 w-8 object-contain", onError: (e) => {
              e.currentTarget.style.display = "none";
              const fallback = e.currentTarget.nextElementSibling;
              if (fallback) fallback.style.display = "block";
            } }) : selectedItem.domain ? /* @__PURE__ */ jsx("img", { src: `https://www.google.com/s2/favicons?domain=${selectedItem.domain}&sz=128`, alt: "logo", className: "h-8 w-8 object-contain", onError: (e) => {
              e.currentTarget.style.display = "none";
              const fallback = e.currentTarget.nextElementSibling;
              if (fallback) fallback.style.display = "block";
            } }) : null,
            /* @__PURE__ */ jsx("span", { className: "text-lg font-black tracking-tight text-slate-800", style: {
              display: selectedItem.image_url || selectedItem.domain ? "none" : "block"
            }, children: selectedItem.initials || "INT" }),
            /* @__PURE__ */ jsx("span", { className: "line-clamp-1 text-[11px] font-medium text-slate-600", children: selectedItem.name || "Unnamed Integration" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "w-full text-center mt-2 border-t border-slate-800 pt-3", children: /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-slate-400 block uppercase font-bold tracking-wider", children: [
            "Category: ",
            CATEGORIES.find((c) => c.value === selectedItem.category)?.label || selectedItem.category
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-500 text-center mt-2", children: "This card shows exactly how the integration will display in the public catalog, including color accents and favicon lookup." })
        ] }) })
      ] })
    ] })
  ) : (
    /* List View */
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-slate-900 tracking-tight", children: "Integrations Catalog" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-500", children: "Manage property management systems, accounting tools, payroll, guest surveys, banking and other integrations." })
        ] }),
        /* @__PURE__ */ jsxs(Button, { onClick: handleAddNew, className: "bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm text-xs font-semibold px-4 h-9 gap-1.5 self-start sm:self-auto", children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
          "Add Integration"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex items-center", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3.5 h-4 w-4 text-slate-400" }),
          /* @__PURE__ */ jsx(Input, { placeholder: "Search by name, initials or domain...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "border-0 pl-10 pr-4 py-2 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1.5 border-b border-slate-200 pb-3", children: [
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setActiveCategory("all"), className: `px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all cursor-pointer ${activeCategory === "all" ? "bg-indigo-50 border-indigo-200 text-indigo-750 font-bold shadow-sm" : "bg-white border-slate-200 text-slate-650 hover:bg-slate-50 hover:border-slate-350"}`, children: [
            "All (",
            items.length,
            ")"
          ] }),
          CATEGORIES.map((cat) => {
            const count = items.filter((item) => item.category === cat.value).length;
            return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setActiveCategory(cat.value), className: `px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all cursor-pointer ${activeCategory === cat.value ? "bg-indigo-50 border-indigo-200 text-indigo-750 font-bold shadow-sm" : "bg-white border-slate-200 text-slate-650 hover:bg-slate-50 hover:border-slate-350"}`, children: [
              cat.shortLabel,
              " (",
              count,
              ")"
            ] }, cat.value);
          })
        ] })
      ] }),
      loading ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center py-20 text-slate-500 gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "animate-spin h-5 w-5 border-2 border-indigo-600 border-t-transparent rounded-full" }),
        /* @__PURE__ */ jsx("span", { children: "Loading integrations..." })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: [
        filteredItems.map((item) => {
          const tagColor = `oklch(0.55 0.12 ${item.hue})`;
          return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between group relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 inset-x-0 h-1", style: {
              backgroundColor: tagColor
            } }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "h-10 w-10 bg-slate-50 border rounded-lg flex items-center justify-center overflow-hidden shrink-0", children: item.image_url ? /* @__PURE__ */ jsx("img", { src: item.image_url, alt: "icon", className: "h-6 w-6 object-contain" }) : item.domain ? /* @__PURE__ */ jsx("img", { src: `https://www.google.com/s2/favicons?domain=${item.domain}&sz=64`, alt: "icon", className: "h-6 w-6 object-contain" }) : /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-500", children: item.initials }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity", children: [
                /* @__PURE__ */ jsx(Button, { variant: "ghost", onClick: () => handleEdit(item), className: "h-7 w-7 p-0 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-slate-500", children: /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }) }),
                /* @__PURE__ */ jsx(Button, { variant: "ghost", onClick: () => item.id && handleDelete(item.id, item.name), className: "h-7 w-7 p-0 rounded-lg hover:bg-red-50 hover:text-red-600 text-slate-500", children: /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-800 text-sm", children: item.name }),
                item.badge === "partner" && /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-emerald-50 text-[9px] font-bold text-emerald-600 px-1.5 py-0.5 border border-emerald-200", children: "Partner" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2.5 pt-2 border-t border-slate-50 flex items-center justify-between text-[10px] text-slate-400", children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium bg-slate-100 text-slate-650 px-1.5 py-0.5 rounded uppercase", children: CATEGORIES.find((c) => c.value === item.category)?.shortLabel || item.category }),
                /* @__PURE__ */ jsx("span", { children: item.domain || "No domain" })
              ] })
            ] })
          ] }, item.id);
        }),
        filteredItems.length === 0 && /* @__PURE__ */ jsx("div", { className: "col-span-full text-center py-10 bg-slate-50 border border-dashed rounded-xl text-slate-400 text-sm", children: "No integrations found matching your search and category selection." })
      ] })
    ] })
  ) });
}
export {
  AdminIntegrationsPage as component
};
