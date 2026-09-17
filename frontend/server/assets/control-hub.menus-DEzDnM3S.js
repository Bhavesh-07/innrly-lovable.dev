import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { B as Button } from "./router-dBewJNnO.js";
import { toast } from "sonner";
import { Save, Plus, ChevronDown, ChevronRight, Eye, EyeOff, Edit2, Trash2, GripVertical } from "lucide-react";
import { useSensors, useSensor, PointerSensor, KeyboardSensor, DndContext, closestCenter } from "@dnd-kit/core";
import { sortableKeyboardCoordinates, SortableContext, verticalListSortingStrategy, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
const defaultPrimaryNav = [{
  id: "nav-1",
  to: "/features",
  label: "Features",
  enabled: true
}, {
  id: "nav-2",
  to: "/solutions/business-intelligence",
  label: "Solutions",
  enabled: true
}, {
  id: "nav-3",
  to: "/pricing",
  label: "Pricing",
  enabled: true
}, {
  id: "nav-4",
  to: "/contact",
  label: "Contact",
  enabled: true
}];
const defaultResources = [{
  id: "res-1",
  to: "/integrations",
  label: "Integrations",
  desc: "50+ PMS, accounting, payroll & banking systems.",
  enabled: true
}, {
  id: "res-2",
  to: "/case-studies",
  label: "Case studies",
  desc: "Real portfolios, real hours saved.",
  enabled: true
}, {
  id: "res-3",
  to: "/blog",
  label: "Blog",
  desc: "Operator playbooks and product updates.",
  enabled: true
}, {
  id: "res-4",
  to: "/glossary",
  label: "Glossary",
  desc: "Hotel back-office terms, plainly defined.",
  enabled: true
}, {
  id: "res-5",
  to: "/roi-calculator",
  label: "ROI calculator",
  desc: "See your savings in 30 seconds.",
  enabled: true
}, {
  id: "res-6",
  to: "/security",
  label: "Security & trust",
  desc: "Encryption, access control, compliance.",
  enabled: true
}];
const defaultFooterCols = [{
  id: "col-1",
  title: "Product",
  enabled: true,
  links: [{
    id: "col-1-l1",
    to: "/features",
    label: "Features",
    enabled: true
  }, {
    id: "col-1-l2",
    to: "/pricing",
    label: "Pricing",
    enabled: true
  }, {
    id: "col-1-l3",
    to: "/integrations",
    label: "Integrations",
    enabled: true
  }, {
    id: "col-1-l4",
    to: "/onboarding",
    label: "Get started",
    enabled: true
  }, {
    id: "col-1-l5",
    to: "/solutions/innrly-pay",
    label: "Innrly Pay",
    enabled: true
  }, {
    id: "col-1-l6",
    to: "/solutions/innrly-shift",
    label: "Innrly Shift",
    enabled: true
  }]
}, {
  id: "col-2",
  title: "Solutions",
  enabled: true,
  links: [{
    id: "col-2-l1",
    to: "/solutions/business-intelligence",
    label: "Business Intelligence",
    enabled: true
  }, {
    id: "col-2-l2",
    to: "/solutions/financial-control",
    label: "Financial Control",
    enabled: true
  }, {
    id: "col-2-l3",
    to: "/solutions/innrly-shift",
    label: "Innrly Shift",
    enabled: true
  }, {
    id: "col-2-l4",
    to: "/solutions/operations-automation",
    label: "Operations Automation",
    enabled: true
  }, {
    id: "col-2-l5",
    to: "/solutions/reconciliation",
    label: "Reconciliation",
    enabled: true
  }, {
    id: "col-2-l6",
    to: "/solutions/expense-entries",
    label: "Expense Entries",
    enabled: true
  }, {
    id: "col-2-l7",
    to: "/solutions/document-vault",
    label: "Document Vault",
    enabled: true
  }, {
    id: "col-2-l8",
    to: "/services/accountability-pack",
    label: "Accountability Pack",
    enabled: true
  }]
}, {
  id: "col-3",
  title: "Resources",
  enabled: true,
  links: [{
    id: "col-3-l1",
    to: "/blog",
    label: "Blog",
    enabled: true
  }, {
    id: "col-3-l2",
    to: "/glossary",
    label: "Glossary",
    enabled: true
  }, {
    id: "col-3-l3",
    to: "/case-studies",
    label: "Case studies",
    enabled: true
  }, {
    id: "col-3-l4",
    to: "/roi-calculator",
    label: "ROI calculator",
    enabled: true
  }, {
    id: "col-3-l5",
    to: "/compare",
    label: "Compare",
    enabled: true
  }, {
    id: "col-3-l6",
    to: "/integrations/m3",
    label: "Innrly + M3",
    enabled: true
  }, {
    id: "col-3-l7",
    to: "/integrations/quickbooks",
    label: "Innrly + QuickBooks",
    enabled: true
  }, {
    id: "col-3-l8",
    to: "/industries/select-service",
    label: "Select-Service Hotels",
    enabled: true
  }]
}, {
  id: "col-4",
  title: "Company",
  enabled: true,
  links: [{
    id: "col-4-l1",
    to: "/about",
    label: "About",
    enabled: true
  }, {
    id: "col-4-l2",
    to: "/contact",
    label: "Contact",
    enabled: true
  }, {
    id: "col-4-l3",
    to: "/security",
    label: "Security & trust",
    enabled: true
  }, {
    id: "col-4-l4",
    to: "/developers",
    label: "Developers",
    enabled: true
  }]
}, {
  id: "col-5",
  title: "Legal",
  enabled: true,
  links: [{
    id: "col-5-l1",
    to: "/legal/privacy",
    label: "Privacy",
    enabled: true
  }, {
    id: "col-5-l2",
    to: "/legal/terms",
    label: "Terms",
    enabled: true
  }, {
    id: "col-5-l3",
    to: "/legal/subscription",
    label: "Subscription Agreement",
    enabled: true
  }, {
    id: "col-5-l4",
    to: "/legal/security",
    label: "Security",
    enabled: true
  }, {
    id: "col-5-l5",
    to: "/legal/cookies",
    label: "Cookies",
    enabled: true
  }, {
    id: "col-5-l6",
    to: "/legal/accessibility",
    label: "Accessibility",
    enabled: true
  }]
}];
function SortableMenuItem({
  item,
  onEdit,
  onDelete,
  onToggle,
  hasDesc = false
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: item.id
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    opacity: isDragging ? 0.5 : 1
  };
  return /* @__PURE__ */ jsxs("div", { ref: setNodeRef, style, className: `flex items-center justify-between p-3 mb-2 rounded-lg border ${item.enabled ? "bg-white border-slate-200" : "bg-slate-50 border-slate-200 opacity-70"}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx("div", { ...attributes, ...listeners, className: "cursor-grab text-slate-400 hover:text-slate-600 focus:outline-none", children: /* @__PURE__ */ jsx(GripVertical, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: `font-medium ${item.enabled ? "text-slate-900" : "text-slate-500"} truncate`, children: item.label || item.title }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 truncate", children: item.to })
        ] }),
        hasDesc && item.desc && /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 truncate mt-0.5", children: item.desc })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 shrink-0 ml-4", children: [
      /* @__PURE__ */ jsx("button", { onClick: onToggle, className: "p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100", title: item.enabled ? "Disable" : "Enable", children: item.enabled ? /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("button", { onClick: onEdit, className: "p-1.5 text-slate-400 hover:text-blue-600 rounded-md hover:bg-blue-50", title: "Edit", children: /* @__PURE__ */ jsx(Edit2, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("button", { onClick: onDelete, className: "p-1.5 text-slate-400 hover:text-red-600 rounded-md hover:bg-red-50", title: "Delete", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
    ] })
  ] });
}
function AdminMenusPage() {
  const [activeTab, setActiveTab] = useState("header");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [headerData, setHeaderData] = useState({
    primaryNav: defaultPrimaryNav,
    resources: defaultResources
  });
  const [footerData, setFooterData] = useState(defaultFooterCols);
  const [expandedColumnId, setExpandedColumnId] = useState(null);
  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates
  }));
  useEffect(() => {
    loadSettings();
  }, []);
  async function loadSettings() {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/settings");
      if (res.ok) {
        const data = await res.json();
        if (data.header_menu) {
          setHeaderData(JSON.parse(data.header_menu));
        }
        if (data.footer_menu) {
          setFooterData(JSON.parse(data.footer_menu));
        }
      }
    } catch (e) {
      console.error("Failed to load settings", e);
    }
    setLoading(false);
  }
  async function handleSave() {
    setSaving(true);
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("innrly_admin_token") || "" : "";
      const payload1 = {
        key: "header_menu",
        value: JSON.stringify(headerData)
      };
      const payload2 = {
        key: "footer_menu",
        value: JSON.stringify(footerData)
      };
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };
      const p1 = fetch("http://127.0.0.1:8000/settings", {
        method: "POST",
        headers,
        body: JSON.stringify(payload1)
      });
      const p2 = fetch("http://127.0.0.1:8000/settings", {
        method: "POST",
        headers,
        body: JSON.stringify(payload2)
      });
      const [r1, r2] = await Promise.all([p1, p2]);
      if (r1.status === 401 || r2.status === 401) {
        localStorage.removeItem("innrly_admin_token");
        window.location.href = "/control-hub/login";
        return;
      }
      if (r1.ok && r2.ok) {
        toast.success("Menus saved successfully");
      } else {
        toast.error("Failed to save some menus");
      }
    } catch (e) {
      toast.error("Network error while saving");
    }
    setSaving(false);
  }
  const handleDragEndHeaderPrimary = (event) => {
    const {
      active,
      over
    } = event;
    if (over && active.id !== over.id) {
      setHeaderData((prev) => {
        const oldIndex = prev.primaryNav.findIndex((i) => i.id === active.id);
        const newIndex = prev.primaryNav.findIndex((i) => i.id === over.id);
        return {
          ...prev,
          primaryNav: arrayMove(prev.primaryNav, oldIndex, newIndex)
        };
      });
    }
  };
  const handleDragEndHeaderResource = (event) => {
    const {
      active,
      over
    } = event;
    if (over && active.id !== over.id) {
      setHeaderData((prev) => {
        const oldIndex = prev.resources.findIndex((i) => i.id === active.id);
        const newIndex = prev.resources.findIndex((i) => i.id === over.id);
        return {
          ...prev,
          resources: arrayMove(prev.resources, oldIndex, newIndex)
        };
      });
    }
  };
  const addPrimaryNav = () => {
    const newItem = {
      id: crypto.randomUUID(),
      to: "/",
      label: "New Link",
      enabled: true
    };
    setHeaderData((prev) => ({
      ...prev,
      primaryNav: [...prev.primaryNav, newItem]
    }));
  };
  const addResource = () => {
    const newItem = {
      id: crypto.randomUUID(),
      to: "/",
      label: "New Resource",
      desc: "Resource description",
      enabled: true
    };
    setHeaderData((prev) => ({
      ...prev,
      resources: [...prev.resources, newItem]
    }));
  };
  const handleDragEndFooterColumns = (event) => {
    const {
      active,
      over
    } = event;
    if (over && active.id !== over.id) {
      setFooterData((prev) => {
        const oldIndex = prev.findIndex((i) => i.id === active.id);
        const newIndex = prev.findIndex((i) => i.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };
  const handleDragEndFooterLinks = (colId, event) => {
    const {
      active,
      over
    } = event;
    if (over && active.id !== over.id) {
      setFooterData((prev) => prev.map((col) => {
        if (col.id === colId) {
          const oldIndex = col.links.findIndex((i) => i.id === active.id);
          const newIndex = col.links.findIndex((i) => i.id === over.id);
          return {
            ...col,
            links: arrayMove(col.links, oldIndex, newIndex)
          };
        }
        return col;
      }));
    }
  };
  const addFooterColumn = () => {
    const newCol = {
      id: crypto.randomUUID(),
      title: "New Column",
      enabled: true,
      links: []
    };
    setFooterData((prev) => [...prev, newCol]);
  };
  const addFooterLink = (colId) => {
    const newLink = {
      id: crypto.randomUUID(),
      to: "/",
      label: "New Link",
      enabled: true
    };
    setFooterData((prev) => prev.map((col) => {
      if (col.id === colId) {
        return {
          ...col,
          links: [...col.links, newLink]
        };
      }
      return col;
    }));
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "p-8 text-center text-slate-500", children: "Loading menus..." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-slate-900 tracking-tight", children: "Menu Editor" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-500", children: "Drag and drop to reorder menu items, edit links, or toggle visibility." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxs(Button, { onClick: handleSave, disabled: saving, className: "gap-2 bg-indigo-600 hover:bg-indigo-700", children: [
        /* @__PURE__ */ jsx(Save, { className: "h-4 w-4" }),
        saving ? "Saving..." : "Save Menus"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex space-x-1 bg-slate-100 p-1 rounded-xl w-fit", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("header"), className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "header" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`, children: "Header Menu" }),
      /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("footer"), className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "footer" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`, children: "Footer Menu" })
    ] }),
    activeTab === "header" && /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white border rounded-2xl shadow-sm p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-slate-900", children: "Primary Navigation" }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: addPrimaryNav, className: "gap-2 bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900", children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
            " Add Link"
          ] })
        ] }),
        /* @__PURE__ */ jsx(DndContext, { sensors, collisionDetection: closestCenter, onDragEnd: handleDragEndHeaderPrimary, children: /* @__PURE__ */ jsx(SortableContext, { items: headerData.primaryNav, strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          headerData.primaryNav.map((item, idx) => /* @__PURE__ */ jsx(SortableMenuItem, { item, onToggle: () => {
            const newArr = [...headerData.primaryNav];
            newArr[idx].enabled = !newArr[idx].enabled;
            setHeaderData({
              ...headerData,
              primaryNav: newArr
            });
          }, onDelete: () => {
            const newArr = headerData.primaryNav.filter((i) => i.id !== item.id);
            setHeaderData({
              ...headerData,
              primaryNav: newArr
            });
          }, onEdit: () => {
            const newLabel = prompt("Enter label:", item.label);
            const newTo = prompt("Enter URL:", item.to);
            if (newLabel !== null && newTo !== null) {
              const newArr = [...headerData.primaryNav];
              newArr[idx].label = newLabel;
              newArr[idx].to = newTo;
              setHeaderData({
                ...headerData,
                primaryNav: newArr
              });
            }
          } }, item.id)),
          headerData.primaryNav.length === 0 && /* @__PURE__ */ jsx("div", { className: "p-4 text-center text-slate-500 border border-dashed rounded-lg", children: "No primary links" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border rounded-2xl shadow-sm p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-slate-900", children: "Resources Dropdown" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Items displayed in the Resources dropdown menu." })
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: addResource, className: "gap-2 bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900", children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
            " Add Resource"
          ] })
        ] }),
        /* @__PURE__ */ jsx(DndContext, { sensors, collisionDetection: closestCenter, onDragEnd: handleDragEndHeaderResource, children: /* @__PURE__ */ jsx(SortableContext, { items: headerData.resources, strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          headerData.resources.map((item, idx) => /* @__PURE__ */ jsx(SortableMenuItem, { item, hasDesc: true, onToggle: () => {
            const newArr = [...headerData.resources];
            newArr[idx].enabled = !newArr[idx].enabled;
            setHeaderData({
              ...headerData,
              resources: newArr
            });
          }, onDelete: () => {
            const newArr = headerData.resources.filter((i) => i.id !== item.id);
            setHeaderData({
              ...headerData,
              resources: newArr
            });
          }, onEdit: () => {
            const newLabel = prompt("Enter label:", item.label);
            const newDesc = prompt("Enter description:", item.desc);
            const newTo = prompt("Enter URL:", item.to);
            if (newLabel !== null && newTo !== null && newDesc !== null) {
              const newArr = [...headerData.resources];
              newArr[idx].label = newLabel;
              newArr[idx].desc = newDesc;
              newArr[idx].to = newTo;
              setHeaderData({
                ...headerData,
                resources: newArr
              });
            }
          } }, item.id)),
          headerData.resources.length === 0 && /* @__PURE__ */ jsx("div", { className: "p-4 text-center text-slate-500 border border-dashed rounded-lg", children: "No resources" })
        ] }) }) })
      ] })
    ] }),
    activeTab === "footer" && /* @__PURE__ */ jsxs("div", { className: "bg-white border rounded-2xl shadow-sm p-6 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-slate-900", children: "Footer Columns" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Reorder columns or click into a column to manage its links." })
        ] }),
        /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: addFooterColumn, className: "gap-2 bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900", children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
          " Add Column"
        ] })
      ] }),
      /* @__PURE__ */ jsx(DndContext, { sensors, collisionDetection: closestCenter, onDragEnd: handleDragEndFooterColumns, children: /* @__PURE__ */ jsx(SortableContext, { items: footerData, strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: footerData.map((col, colIdx) => /* @__PURE__ */ jsxs("div", { className: "border rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border-b p-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => setExpandedColumnId(expandedColumnId === col.id ? null : col.id), className: "p-1 hover:bg-slate-200 rounded", children: expandedColumnId === col.id ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-slate-500" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-slate-500" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-800", children: col.title }),
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-slate-400 bg-white px-2 py-0.5 rounded border", children: [
              col.links.length,
              " links"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => {
              const newArr = [...footerData];
              newArr[colIdx].enabled = !newArr[colIdx].enabled;
              setFooterData(newArr);
            }, className: "p-1.5 text-slate-400 hover:text-slate-600 rounded-md", title: col.enabled ? "Disable Column" : "Enable Column", children: col.enabled ? /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("button", { onClick: () => {
              const newTitle = prompt("Enter column title:", col.title);
              if (newTitle) {
                const newArr = [...footerData];
                newArr[colIdx].title = newTitle;
                setFooterData(newArr);
              }
            }, className: "p-1.5 text-slate-400 hover:text-blue-600 rounded-md", children: /* @__PURE__ */ jsx(Edit2, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("button", { onClick: () => {
              if (confirm("Delete this column and all its links?")) {
                setFooterData(footerData.filter((c) => c.id !== col.id));
              }
            }, className: "p-1.5 text-slate-400 hover:text-red-600 rounded-md", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
          ] })
        ] }),
        expandedColumnId === col.id && /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white", children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-end mb-3", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: () => addFooterLink(col.id), className: "h-8 text-xs gap-1 bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900", children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
            " Add Link"
          ] }) }),
          /* @__PURE__ */ jsx(DndContext, { sensors, collisionDetection: closestCenter, onDragEnd: (e) => handleDragEndFooterLinks(col.id, e), children: /* @__PURE__ */ jsx(SortableContext, { items: col.links, strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            col.links.map((link, linkIdx) => /* @__PURE__ */ jsx(SortableMenuItem, { item: link, onToggle: () => {
              const newArr = [...footerData];
              newArr[colIdx].links[linkIdx].enabled = !newArr[colIdx].links[linkIdx].enabled;
              setFooterData(newArr);
            }, onDelete: () => {
              const newArr = [...footerData];
              newArr[colIdx].links = newArr[colIdx].links.filter((l) => l.id !== link.id);
              setFooterData(newArr);
            }, onEdit: () => {
              const newLabel = prompt("Enter label:", link.label);
              const newTo = prompt("Enter URL:", link.to);
              if (newLabel !== null && newTo !== null) {
                const newArr = [...footerData];
                newArr[colIdx].links[linkIdx].label = newLabel;
                newArr[colIdx].links[linkIdx].to = newTo;
                setFooterData(newArr);
              }
            } }, link.id)),
            col.links.length === 0 && /* @__PURE__ */ jsx("div", { className: "p-3 text-center text-sm text-slate-500 border border-dashed rounded-lg", children: "No links in this column" })
          ] }) }) })
        ] })
      ] }, col.id)) }) }) })
    ] })
  ] });
}
export {
  AdminMenusPage as component
};
