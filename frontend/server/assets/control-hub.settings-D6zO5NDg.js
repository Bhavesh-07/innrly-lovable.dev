import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { Settings, Bell, Globe2, Mail, Link2, Megaphone, Check, Save, ShieldCheck } from "lucide-react";
import { c as cn, B as Button } from "./router-dBewJNnO.js";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
function AdminSettings() {
  const [adminEmail, setAdminEmail] = useState("sales@innrly.com");
  const [alertThreshold, setAlertThreshold] = useState("10");
  const [webhookUrl, setWebhookUrl] = useState("http://127.0.0.1:8000/leads");
  const [smtpHost, setSmtpHost] = useState("smtp.gmail.com");
  const [smtpPort, setSmtpPort] = useState("587");
  const [smtpUser, setSmtpUser] = useState("no-reply@innrly.com");
  const [smtpPass, setSmtpPass] = useState("");
  const [enableTrialPopup, setEnableTrialPopup] = useState(true);
  const [loginLink, setLoginLink] = useState("https://app.innrly.com");
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const baseUrl = "http://127.0.0.1:8000/leads";
      const settingsUrl = baseUrl.replace(/\/leads\/?$/, "/settings");
      fetch(settingsUrl).then((res) => res.json()).then((data) => {
        if (data) {
          if (data.innrly_trial_modal_disabled === "true") {
            setEnableTrialPopup(false);
          }
          if (data.innrly_login_link) {
            setLoginLink(data.innrly_login_link);
          }
        }
      }).catch((err) => console.error("Failed to load settings", err));
    }
  }, []);
  const handleSave = async (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      try {
        const baseUrl = "http://127.0.0.1:8000/leads";
        const settingsUrl = baseUrl.replace(/\/leads\/?$/, "/settings");
        const token = localStorage.getItem("innrly_admin_token") || "";
        const saveSetting = async (key, value) => {
          const res = await fetch(settingsUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
              key,
              value
            })
          });
          if (res.status === 401) {
            localStorage.removeItem("innrly_admin_token");
            window.location.href = "/control-hub/login";
            throw new Error("Unauthorized");
          }
          if (!res.ok) {
            throw new Error(`Failed to save: ${res.statusText}`);
          }
        };
        await Promise.all([saveSetting("innrly_trial_modal_disabled", enableTrialPopup ? "false" : "true"), saveSetting("innrly_login_link", loginLink)]);
      } catch (err) {
        console.error("Failed to save settings", err);
      }
    }
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("header", { className: "border-b border-slate-200 pb-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-indigo-600 animate-spin-slow" }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600", children: "Settings" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-slate-800 mt-1", children: "System Settings" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: "Configure platform options, lead dispatching webhooks, and default notifications." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSave, className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-base font-bold text-slate-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4 text-indigo-650" }),
            "Lead Dispatch Notifications"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Define who gets notified immediately when new leads or onboarding submissions are received." }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1", children: "Primary Recipient Email" }),
              /* @__PURE__ */ jsx("input", { type: "email", value: adminEmail, onChange: (e) => setAdminEmail(e.target.value), className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1", children: "Properties Alert Threshold" }),
              /* @__PURE__ */ jsx("input", { type: "number", value: alertThreshold, onChange: (e) => setAlertThreshold(e.target.value), className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-base font-bold text-slate-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Globe2, { className: "h-4.5 w-4.5 text-indigo-650" }),
            "Webhook Integrations"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Endpoint URLs used to capture forms from the public landing site." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1", children: "Leads Webhook Endpoint" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: webhookUrl, onChange: (e) => setWebhookUrl(e.target.value), className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors font-mono" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-base font-bold text-slate-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4.5 w-4.5 text-indigo-650" }),
            "SMTP Configuration"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Configure the outgoing mail server for transactional emails." }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1", children: "SMTP Host" }),
              /* @__PURE__ */ jsx("input", { type: "text", value: smtpHost, onChange: (e) => setSmtpHost(e.target.value), placeholder: "smtp.example.com", className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1", children: "SMTP Port" }),
              /* @__PURE__ */ jsx("input", { type: "text", value: smtpPort, onChange: (e) => setSmtpPort(e.target.value), placeholder: "587", className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1", children: "Username" }),
              /* @__PURE__ */ jsx("input", { type: "text", value: smtpUser, onChange: (e) => setSmtpUser(e.target.value), placeholder: "email@domain.com", className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1", children: "Password" }),
              /* @__PURE__ */ jsx("input", { type: "password", value: smtpPass, onChange: (e) => setSmtpPass(e.target.value), placeholder: "••••••••", className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-base font-bold text-slate-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Link2, { className: "h-4.5 w-4.5 text-indigo-650" }),
            "Navigation Settings"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Configure target URLs and navigation links for external portals and applications." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1", children: "Portal Login Link URL" }),
            /* @__PURE__ */ jsx("input", { type: "url", value: loginLink, onChange: (e) => setLoginLink(e.target.value), placeholder: "https://app.innrly.com", className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors font-mono" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-base font-bold text-slate-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Megaphone, { className: "h-4.5 w-4.5 text-indigo-650" }),
            "Marketing & Pop-ups"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Manage promotional pop-ups and marketing modals on the public site." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex items-center justify-between border border-slate-200 rounded-lg p-4 bg-slate-50", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-slate-800", children: "Auto-show Trial Pop-up" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 mt-0.5", children: "When enabled, the 90-day trial offer will automatically appear for new visitors." })
            ] }),
            /* @__PURE__ */ jsx(Switch, { checked: enableTrialPopup, onCheckedChange: setEnableTrialPopup })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 justify-end pt-2", children: [
          isSaved && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full animate-fade-in", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            "Settings saved successfully!"
          ] }),
          /* @__PURE__ */ jsxs(Button, { type: "submit", className: "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center gap-1.5 px-6 shadow-sm py-1.5 h-9", children: [
            /* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }),
            "Save Configuration"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-sm", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-sm font-bold text-slate-800 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4.5 w-4.5 text-indigo-650" }),
          "Portal Access"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 leading-relaxed font-medium", children: "This administrative console is restricted to internal operations team members. Actions taken are logged to the audit trail." })
      ] }) })
    ] })
  ] });
}
export {
  AdminSettings as component
};
