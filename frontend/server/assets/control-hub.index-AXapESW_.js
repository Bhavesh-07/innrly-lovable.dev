import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { RefreshCw, Download, Search, ListFilter, Mail, Phone, Building2, Users, MapPin, ChevronUp, ChevronDown } from "lucide-react";
import { B as Button } from "./router-DU7xSoX0.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
function AdminDashboard() {
  return /* @__PURE__ */ jsx(LeadsDashboardContainer, { activeTab: "contacts" });
}
function LeadsDashboardContainer({
  activeTab
}) {
  const [data, setData] = useState({
    contacts: [],
    trials: [],
    newsletters: [],
    onboarding: [],
    onboarding_users: [],
    onboarding_properties: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCompanyId, setExpandedCompanyId] = useState(null);
  useEffect(() => {
    setExpandedCompanyId(null);
  }, [activeTab]);
  const fetchLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const baseUrl = "http://127.0.0.1:8000/leads";
      const fetchUrl = baseUrl.endsWith("/leads") ? baseUrl : `${baseUrl}/leads`;
      const token = typeof window !== "undefined" ? localStorage.getItem("innrly_admin_token") || "" : "";
      const response = await fetch(fetchUrl, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("innrly_admin_token");
          window.location.href = "/admin/login";
        }
        return;
      }
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error("Error fetching leads:", err);
      setError(err.message || "Failed to load lead data from backend.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchLeads();
  }, []);
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return dateString;
    }
  };
  const exportCSV = () => {
    let currentList = [];
    let fileName = `innrly_${activeTab}`;
    if (activeTab === "contacts") currentList = data.contacts;
    else if (activeTab === "trials") currentList = data.trials;
    else if (activeTab === "newsletters") currentList = data.newsletters;
    else if (activeTab === "onboarding") {
      currentList = data.onboarding;
    }
    if (currentList.length === 0) {
      alert("No data available to export in this tab.");
      return;
    }
    const headers = Object.keys(currentList[0]);
    const csvRows = [];
    csvRows.push(headers.join(","));
    for (const row of currentList) {
      const values = headers.map((header) => {
        const val = row[header];
        const escaped = ("" + (val !== null && val !== void 0 ? val : "")).replace(/"/g, '""');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(","));
    }
    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${fileName}_export_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const filterLeads = (list) => {
    if (!searchQuery) return list;
    const q = searchQuery.toLowerCase();
    return list.filter((item) => {
      return Object.values(item).some((val) => {
        if (val === null || val === void 0) return false;
        return String(val).toLowerCase().includes(q);
      });
    });
  };
  const handleDeleteMock = (name) => {
    alert(`Mock Delete action triggered for lead: ${name}`);
  };
  const handleEditMock = (name) => {
    alert(`Mock Edit action triggered for lead: ${name}`);
  };
  const totalLeads = data.contacts.length + data.trials.length + data.onboarding.length + data.newsletters.length;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 block", children: "Dashboard" }),
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-slate-800 mt-1", children: "Lead Capture Center" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: "Overview of pipelines, trials, newsletter updates, and guided onboarding." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: fetchLeads, disabled: loading, className: "border-slate-200 hover:bg-slate-50 text-slate-700 bg-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9", children: [
          /* @__PURE__ */ jsx(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }),
          "Refresh"
        ] }),
        /* @__PURE__ */ jsxs(Button, { onClick: exportCSV, className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 font-semibold", children: [
          /* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5" }),
          "Export CSV"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block", children: "Total Captured" }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-slate-900 block mt-1", children: totalLeads }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-indigo-500 font-semibold block mt-0.5", children: "across all tables" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block", children: "Contacts" }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-slate-900 block mt-1", children: data.contacts.length }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-medium block mt-0.5", children: "Sales inquiries" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block", children: "Free Trials" }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-slate-900 block mt-1", children: data.trials.length }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-medium block mt-0.5", children: "Platform trials" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block", children: "Onboardings" }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-slate-900 block mt-1", children: data.onboarding.length }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-medium block mt-0.5", children: "Wizard completions" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm col-span-2 md:col-span-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block", children: "Newsletter" }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-slate-900 block mt-1", children: data.newsletters.length }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-medium block mt-0.5", children: "Subscribers list" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-center gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative flex-1 w-full", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" }),
        /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search records by name, email, company, PMS, source...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 text-sm transition-all" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 shrink-0 text-xs", children: [
        /* @__PURE__ */ jsx(ListFilter, { className: "h-3.5 w-3.5 text-slate-500" }),
        /* @__PURE__ */ jsx("span", { className: "text-slate-400 font-medium", children: "Filtering by search:" }),
        /* @__PURE__ */ jsx("span", { className: "bg-indigo-50 text-indigo-600 border border-indigo-100 font-bold px-2.5 py-0.5 rounded-full text-[10px]", children: searchQuery ? "Active" : "None" })
      ] })
    ] }),
    error && /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border border-red-200 rounded-xl p-5 text-center my-6", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-red-700 font-bold block", children: "Database Fetch Failed" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-red-500 mt-1", children: error }),
      /* @__PURE__ */ jsx(Button, { onClick: fetchLeads, variant: "outline", className: "mt-4 border-red-200 text-red-700 hover:bg-red-50/80 bg-white", children: "Try Again" })
    ] }),
    loading && !error && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-20 bg-white border border-slate-200 rounded-2xl shadow-sm", children: [
      /* @__PURE__ */ jsx(RefreshCw, { className: "h-7 w-7 text-indigo-600 animate-spin" }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 mt-2 font-medium", children: "Fetching lead submissions..." })
    ] }),
    !loading && !error && /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm", children: [
      activeTab === "contacts" && /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Product Lead" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Email / Phone" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Company" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-center", children: "Properties" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Rating" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-center", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-100 text-xs text-slate-700", children: filterLeads(data.contacts).length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 7, className: "py-12 text-center text-slate-400 font-medium", children: "No contact leads found." }) }) : filterLeads(data.contacts).map((lead) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50/50 transition-colors", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 font-semibold text-slate-900", children: lead.name }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[11px] text-slate-800", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-slate-400" }),
              lead.email
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[10px] text-slate-400 mt-0.5", children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 text-slate-400" }),
              lead.phone
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-slate-800", children: lead.company }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-center font-mono font-semibold text-slate-700", children: lead.properties }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-slate-800", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-0.5 font-semibold text-slate-900", children: "4.5 ★" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsx("span", { className: "bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded text-[10px] font-bold", children: "Active" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-1.5", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => handleEditMock(lead.name), className: "bg-slate-900 hover:bg-slate-800 text-white text-[10px] px-3 py-1 rounded font-bold transition-all shadow-sm", children: "Edit" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleDeleteMock(lead.name), className: "bg-red-500 hover:bg-red-650 text-white text-[10px] px-3 py-1 rounded font-bold transition-all shadow-sm", children: "Delete" })
          ] }) })
        ] }, lead.id)) })
      ] }) }),
      activeTab === "trials" && /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Contact / Role" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Email / Phone" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Company" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-center", children: "Properties" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "PMS System" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Rating" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-center", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-100 text-xs text-slate-700", children: filterLeads(data.trials).length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 8, className: "py-12 text-center text-slate-400 font-medium", children: "No trial leads found." }) }) : filterLeads(data.trials).map((lead) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50/50 transition-colors", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-900", children: lead.name }),
            /* @__PURE__ */ jsx("span", { className: "text-[9px] text-indigo-600 uppercase tracking-wider font-bold mt-0.5", children: lead.role })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[11px] text-slate-800", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-slate-400" }),
              lead.email
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[10px] text-slate-400 mt-0.5", children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 text-slate-400" }),
              lead.phone
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-slate-800", children: lead.company }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-center font-mono font-semibold text-slate-700", children: lead.properties }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-slate-800", children: /* @__PURE__ */ jsx("span", { className: "bg-slate-50 border border-slate-200/50 px-2 py-0.5 rounded text-[10px] font-semibold", children: lead.pms }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-0.5 font-semibold text-slate-900", children: "4.2 ★" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsx("span", { className: "bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-0.5 rounded text-[10px] font-bold", children: "New" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-1.5", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => handleEditMock(lead.name), className: "bg-slate-900 hover:bg-slate-800 text-white text-[10px] px-3 py-1 rounded font-bold transition-all shadow-sm", children: "Edit" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleDeleteMock(lead.name), className: "bg-red-500 hover:bg-red-650 text-white text-[10px] px-3 py-1 rounded font-bold transition-all shadow-sm", children: "Delete" })
          ] }) })
        ] }, lead.id)) })
      ] }) }),
      activeTab === "newsletters" && /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Subscriber Email" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Signup Source Placement" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Subscribed At" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-center", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-100 text-xs text-slate-700", children: filterLeads(data.newsletters).length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 5, className: "py-12 text-center text-slate-400 font-medium", children: "No newsletter subscribers found." }) }) : filterLeads(data.newsletters).map((lead) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50/50 transition-colors", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 font-semibold text-slate-900", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-slate-400" }),
            lead.email
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsx("span", { className: "bg-slate-100 text-slate-500 border border-slate-200/50 px-2 py-0.5 rounded text-[10px] font-mono", children: lead.sub_source || "general" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-slate-400 font-medium", children: formatDate(lead.submitted_at || lead.created_at) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsx("span", { className: "bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded text-[10px] font-bold", children: "Active" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-1.5", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => handleEditMock(lead.email), className: "bg-slate-900 hover:bg-slate-800 text-white text-[10px] px-3 py-1 rounded font-bold transition-all shadow-sm", children: "Edit" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleDeleteMock(lead.email), className: "bg-red-500 hover:bg-red-650 text-white text-[10px] px-3 py-1 rounded font-bold transition-all shadow-sm", children: "Delete" })
          ] }) })
        ] }, lead.id)) })
      ] }) }),
      activeTab === "onboarding" && /* @__PURE__ */ jsxs("div", { className: "p-1", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] text-slate-400 px-5 py-3 bg-slate-50/50 border-b border-slate-200 font-bold uppercase tracking-wider", children: "Click on any company record to expand and view its Users and Properties." }),
        filterLeads(data.onboarding).length === 0 ? /* @__PURE__ */ jsx("div", { className: "py-12 text-center text-slate-400 text-xs font-semibold", children: "No completed onboarding records found." }) : /* @__PURE__ */ jsx("div", { className: "divide-y divide-slate-100", children: filterLeads(data.onboarding).map((comp) => {
          const isExpanded = expandedCompanyId === comp.id;
          const associatedUsers = data.onboarding_users?.filter((u) => u.company_id === comp.id) || [];
          const associatedProps = data.onboarding_properties?.filter((p) => p.company_id === comp.id) || [];
          return /* @__PURE__ */ jsxs("div", { className: "transition-all", children: [
            /* @__PURE__ */ jsxs("div", { onClick: () => setExpandedCompanyId(isExpanded ? null : comp.id), className: `flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 px-6 cursor-pointer hover:bg-slate-50 transition-colors ${isExpanded ? "bg-slate-50 border-l-4 border-indigo-600" : "border-l-4 border-transparent"}`, children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "h-10 w-10 shrink-0 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-indigo-600" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-slate-800 leading-tight", children: comp.company_name }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-1 font-medium", children: [
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-3.5 w-3.5 text-slate-400" }),
                      comp.authorized_person
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: "•" }),
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-slate-400" }),
                      comp.city,
                      ", ",
                      comp.state
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-3 sm:mt-0 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs font-semibold", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxs("span", { className: "text-slate-800 block", children: [
                      associatedProps.length,
                      " Properties"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "text-slate-400 text-[10px] block font-medium", children: [
                      associatedUsers.length,
                      " Users"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "bg-indigo-50 border border-indigo-100 text-indigo-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold", children: comp.decision_maker === "yes" ? "Decision Maker" : "Non-DM" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-1", children: [
                    /* @__PURE__ */ jsx("button", { onClick: (e) => {
                      e.stopPropagation();
                      handleEditMock(comp.company_name);
                    }, className: "bg-slate-900 hover:bg-slate-800 text-white text-[9px] px-2 py-0.5 rounded font-bold transition-all", children: "Edit" }),
                    /* @__PURE__ */ jsx("button", { onClick: (e) => {
                      e.stopPropagation();
                      handleDeleteMock(comp.company_name);
                    }, className: "bg-red-500 hover:bg-red-600 text-white text-[9px] px-2 py-0.5 rounded font-bold transition-all", children: "Delete" })
                  ] }),
                  isExpanded ? /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4 text-indigo-600" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 text-slate-500" })
                ] })
              ] })
            ] }),
            isExpanded && /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border-t border-slate-100 px-6 py-6 space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-slate-200 rounded-xl p-5 shadow-sm", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-[9px] uppercase font-bold tracking-wider text-indigo-600 mb-2", children: "Corporate Office" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-800 leading-tight", children: comp.company_name }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600 mt-1 flex items-start gap-1", children: [
                    /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 mt-0.5 shrink-0 text-slate-400" }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      comp.address,
                      /* @__PURE__ */ jsx("br", {}),
                      comp.city,
                      ", ",
                      comp.state,
                      " ",
                      comp.zip
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-[9px] uppercase font-bold tracking-wider text-indigo-600 mb-2", children: "Primary Contact" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-800", children: comp.authorized_person }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600 mt-1 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5 text-slate-400" }),
                    comp.email
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600 mt-1 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5 text-slate-400" }),
                    "Mobile: ",
                    comp.mobile
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-[9px] uppercase font-bold tracking-wider text-indigo-600 mb-2", children: "Metadata" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600", children: [
                    "Office Phone: ",
                    /* @__PURE__ */ jsx("span", { className: "text-slate-800 font-semibold", children: comp.work_phone || "N/A" })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600 mt-1", children: [
                    "Submission: ",
                    /* @__PURE__ */ jsx("span", { className: "text-slate-800 font-semibold", children: formatDate(comp.submitted_at || comp.created_at) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }),
                  "Authorized Platform Users"
                ] }),
                associatedUsers.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 italic pl-2", children: "No additional team members listed." }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: associatedUsers.map((user) => /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm flex flex-col justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-800 block", children: user.name }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-0.5", children: [
                    /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-slate-600 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-slate-400" }),
                      user.email
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-slate-700 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 text-slate-400" }),
                      user.phone
                    ] })
                  ] })
                ] }, user.id)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }),
                  "Configured Properties (",
                  associatedProps.length,
                  ")"
                ] }),
                associatedProps.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 italic pl-2", children: "No hotels added to the wizard." }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: associatedProps.map((prop) => /* @__PURE__ */ jsx("div", { className: "bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:border-indigo-300 transition-colors", children: /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-extrabold text-slate-800", children: prop.property_name }),
                      /* @__PURE__ */ jsx("span", { className: "bg-indigo-50 border border-indigo-100 text-indigo-700 text-[8px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded ml-2", children: prop.brand })
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-200 text-slate-500 font-bold", children: prop.property_code })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-slate-500 mt-1.5 flex items-start gap-1", children: [
                    /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3 mt-0.5 shrink-0 text-slate-400" }),
                    prop.address
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 border-t border-slate-100 pt-3 mt-3 text-[11px]", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400 block text-[9px] uppercase font-bold tracking-wider", children: "Property Manager" }),
                      /* @__PURE__ */ jsx("span", { className: "text-slate-800 block font-semibold mt-0.5", children: prop.manager_name }),
                      /* @__PURE__ */ jsx("span", { className: "text-slate-500 block", children: prop.manager_email }),
                      /* @__PURE__ */ jsx("span", { className: "text-slate-500 block", children: prop.manager_mobile })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400 block text-[9px] uppercase font-bold tracking-wider", children: "Rooms & Integrations" }),
                      /* @__PURE__ */ jsxs("span", { className: "text-slate-800 block font-semibold mt-0.5", children: [
                        prop.rooms,
                        " Rooms"
                      ] }),
                      /* @__PURE__ */ jsxs("span", { className: "text-indigo-600 block mt-0.5 font-bold", children: [
                        "PMS: ",
                        prop.pms === "Other" ? prop.pms_other || "Other" : prop.pms
                      ] }),
                      /* @__PURE__ */ jsxs("span", { className: "text-slate-500 block", children: [
                        "Contact: ",
                        prop.contact_person
                      ] })
                    ] })
                  ] })
                ] }) }, prop.id)) })
              ] })
            ] })
          ] }, comp.id);
        }) })
      ] })
    ] })
  ] });
}
export {
  LeadsDashboardContainer,
  AdminDashboard as component
};
