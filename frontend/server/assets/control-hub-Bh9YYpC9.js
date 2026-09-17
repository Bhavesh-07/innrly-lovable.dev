import { jsx, jsxs } from "react/jsx-runtime";
import { useLocation, Outlet, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Users, Laptop, UserCheck, Mail, Settings, Search, BookOpen, ListTree, Database, LogOut, Bell, ChevronDown } from "lucide-react";
import { W as Wordmark } from "./router-uiSeds_Z.js";
import { toast } from "sonner";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
const MOCK_NOTIFICATIONS = [{
  id: 1,
  text: "New trial requested by David Miller (Midwest Hotels)",
  time: "5 mins ago"
}, {
  id: 2,
  text: "SEO metadata updated for index / about page",
  time: "1 hour ago"
}, {
  id: 3,
  text: "System connection to MySQL is active and stable",
  time: "2 hours ago"
}];
function AdminLayout() {
  const [authorized, setAuthorized] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === "/control-hub/login";
  useEffect(() => {
    if (isLoginPage) {
      setAuthorized(true);
      return;
    }
    const token = localStorage.getItem("innrly_admin_token");
    if (!token) {
      window.location.href = "/control-hub/login";
    } else {
      setAuthorized(true);
    }
  }, [isLoginPage]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleOutsideClick = (e) => {
      const target = e.target;
      if (!target.closest(".relative")) {
        setShowNotifications(false);
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  if (isLoginPage) {
    return /* @__PURE__ */ jsx(Outlet, {});
  }
  if (!authorized) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: `admin-portal flex h-screen font-sans antialiased overflow-hidden transition-colors duration-300 ${"bg-[#f8f9fa] text-slate-700"}`, children: [
    /* @__PURE__ */ jsxs("aside", { className: `w-64 border-r flex flex-col shrink-0 transition-colors duration-300 ${"bg-white border-slate-200"}`, children: [
      /* @__PURE__ */ jsxs("div", { className: `h-16 border-b flex items-center px-6 gap-2 shrink-0 transition-colors duration-300 ${"border-slate-100"}`, children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center text-slate-900 hover:opacity-90 transition-opacity", children: /* @__PURE__ */ jsx(Wordmark, { size: "sm" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-[9px] text-indigo-600 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider", children: "Admin" }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 ml-1 px-1.5 py-0.5 bg-slate-100 rounded-md font-medium", children: "v1.0.0" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `p-6 border-b flex items-center gap-3 shrink-0 transition-colors duration-300 ${"border-slate-100"}`, children: [
        /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200", children: /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100", alt: "Maxine Kennedy", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("span", { className: `text-sm font-bold block leading-tight truncate ${"text-slate-800"}`, children: "Maxine Kennedy" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 block mt-0.5 font-medium", children: "Admin Head" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "flex-1 p-4 space-y-1.5 overflow-y-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2", children: "Navigation" }),
        /* @__PURE__ */ jsxs(Link, { to: "/control-hub", activeProps: {
          className: "bg-slate-100 text-indigo-600 font-semibold"
        }, inactiveProps: {
          className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }, className: "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all", activeOptions: {
          exact: true
        }, children: [
          /* @__PURE__ */ jsx(Users, { className: "h-4.5 w-4.5" }),
          "Basic Leads"
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/control-hub/trials", activeProps: {
          className: "bg-slate-100 text-indigo-600 font-semibold"
        }, inactiveProps: {
          className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }, className: "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all", children: [
          /* @__PURE__ */ jsx(Laptop, { className: "h-4.5 w-4.5" }),
          "Free Trials"
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/control-hub/onboarding", activeProps: {
          className: "bg-slate-100 text-indigo-600 font-semibold"
        }, inactiveProps: {
          className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }, className: "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all", children: [
          /* @__PURE__ */ jsx(UserCheck, { className: "h-4.5 w-4.5" }),
          "Onboardings"
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/control-hub/newsletters", activeProps: {
          className: "bg-slate-100 text-indigo-600 font-semibold"
        }, inactiveProps: {
          className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }, className: "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-4.5 w-4.5" }),
          "Newsletter List"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-4 mb-2", children: "Settings" }),
        /* @__PURE__ */ jsxs(Link, { to: "/control-hub/settings", activeProps: {
          className: "bg-slate-100 text-indigo-600 font-semibold"
        }, inactiveProps: {
          className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }, className: "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all", children: [
          /* @__PURE__ */ jsx(Settings, { className: "h-4.5 w-4.5" }),
          "System Settings"
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/control-hub/seo", activeProps: {
          className: "bg-slate-100 text-indigo-600 font-semibold"
        }, inactiveProps: {
          className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }, className: "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all", children: [
          /* @__PURE__ */ jsx(Search, { className: "h-4.5 w-4.5" }),
          "SEO Editor"
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/control-hub/blogs", activeProps: {
          className: "bg-slate-100 text-indigo-600 font-semibold"
        }, inactiveProps: {
          className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }, className: "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all", children: [
          /* @__PURE__ */ jsx(BookOpen, { className: "h-4.5 w-4.5" }),
          "Blog Manager"
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/control-hub/menus", activeProps: {
          className: "bg-slate-100 text-indigo-600 font-semibold"
        }, inactiveProps: {
          className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }, className: "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all", children: [
          /* @__PURE__ */ jsx(ListTree, { className: "h-4.5 w-4.5" }),
          "Menu Editor"
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/control-hub/integrations", activeProps: {
          className: "bg-slate-100 text-indigo-600 font-semibold"
        }, inactiveProps: {
          className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }, className: "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all", children: [
          /* @__PURE__ */ jsx(Database, { className: "h-4.5 w-4.5" }),
          "Integrations Manager"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-6 mb-2", children: "System" }),
        /* @__PURE__ */ jsxs("button", { onClick: () => {
          localStorage.removeItem("innrly_admin_token");
          window.location.href = "/control-hub/login";
        }, className: `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all w-full text-left cursor-pointer border-none bg-transparent ${"text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`, children: [
          /* @__PURE__ */ jsx(LogOut, { className: "h-4.5 w-4.5" }),
          "Exit Admin"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col min-w-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("header", { className: `h-16 border-b flex items-center justify-between px-8 shrink-0 shadow-sm transition-colors duration-300 ${"bg-white border-slate-200"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-80", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
          /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search for something...", className: `w-full pl-9 pr-4 py-1.5 border rounded-lg text-sm transition-all focus:outline-none ${"bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-500"}` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs("button", { onClick: () => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }, className: `relative p-1.5 rounded-full transition-colors cursor-pointer ${"hover:bg-slate-100 text-slate-500 hover:text-slate-800"}`, children: [
              /* @__PURE__ */ jsx(Bell, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsx("span", { className: "absolute top-1 right-1 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white" })
            ] }),
            showNotifications && /* @__PURE__ */ jsxs("div", { className: `absolute right-0 mt-2 w-80 border rounded-xl shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${"bg-white border-slate-200 text-slate-700"}`, children: [
              /* @__PURE__ */ jsxs("div", { className: `px-4 py-2 border-b flex items-center justify-between ${"border-slate-100"}`, children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold text-xs", children: "Recent Notifications" }),
                /* @__PURE__ */ jsx("span", { onClick: () => {
                  setShowNotifications(false);
                  toast.success("All notifications marked as read.");
                }, className: "text-[10px] text-indigo-600 font-semibold cursor-pointer hover:underline", children: "Mark all read" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: `divide-y max-h-60 overflow-y-auto ${"divide-slate-50"}`, children: MOCK_NOTIFICATIONS.map((notif) => /* @__PURE__ */ jsxs("div", { className: `px-4 py-2.5 transition-colors cursor-pointer ${"hover:bg-slate-50"}`, children: [
                /* @__PURE__ */ jsx("p", { className: `text-xs leading-normal ${"text-slate-700"}`, children: notif.text }),
                /* @__PURE__ */ jsx("span", { className: "text-[9px] text-slate-400 font-medium block mt-1", children: notif.time })
              ] }, notif.id)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs("div", { onClick: () => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }, className: `flex items-center gap-2 pl-2 border-l cursor-pointer group ${"border-slate-200"}`, children: [
              /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=50&h=50", alt: "User Profile", className: "h-8 w-8 rounded-full border border-slate-200 object-cover" }),
              /* @__PURE__ */ jsx("span", { className: `text-xs font-semibold transition-colors ${"text-slate-800 group-hover:text-slate-900"}`, children: "EN" }),
              /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 text-slate-500" })
            ] }),
            showProfileMenu && /* @__PURE__ */ jsxs("div", { className: `absolute right-0 mt-2 w-48 border rounded-xl shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${"bg-white border-slate-200 text-slate-700"}`, children: [
              /* @__PURE__ */ jsxs("div", { className: `px-4 py-2 border-b ${"border-slate-100"}`, children: [
                /* @__PURE__ */ jsx("span", { className: `font-bold text-xs block ${"text-slate-800"}`, children: "Maxine Kennedy" }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 block", children: "Admin Head" })
              ] }),
              /* @__PURE__ */ jsx("button", { onClick: () => {
                setShowProfileMenu(false);
                toast.info("Language selector is configured to English (US)");
              }, className: `w-full text-left px-4 py-2 text-xs transition-colors cursor-pointer ${"hover:bg-slate-50 text-slate-700"}`, children: "Language: English" }),
              /* @__PURE__ */ jsx("button", { onClick: () => {
                setShowProfileMenu(false);
                toast.info("Opening Account Settings...");
              }, className: `w-full text-left px-4 py-2 text-xs transition-colors cursor-pointer ${"hover:bg-slate-50 text-slate-700"}`, children: "Profile Settings" }),
              /* @__PURE__ */ jsx("button", { onClick: () => {
                setShowProfileMenu(false);
                localStorage.removeItem("innrly_admin_token");
                window.location.href = "/control-hub/login";
              }, className: `w-full text-left px-4 py-2 text-xs transition-colors cursor-pointer border-t mt-1 ${"hover:bg-red-50 text-red-550 border-slate-100"}`, children: "Sign Out" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `flex-1 overflow-y-auto p-8 transition-colors duration-350 ${"bg-[#f8f9fa]"}`, children: /* @__PURE__ */ jsx(Outlet, {}) })
    ] })
  ] });
}
export {
  AdminLayout as component
};
