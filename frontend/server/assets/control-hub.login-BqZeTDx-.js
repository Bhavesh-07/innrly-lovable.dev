import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { W as Wordmark } from "./router-DU7xSoX0.js";
import { AlertCircle, User, Lock, RefreshCw } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("innrly_admin_token");
      if (token) {
        window.location.href = "/control-hub";
      }
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const baseUrl = "http://127.0.0.1:8000/leads";
      const loginUrl = baseUrl.replace(/\/leads\/?$/, "/admin/login");
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.detail || "Invalid username or password");
      }
      const data = await response.json();
      if (data && data.token) {
        localStorage.setItem("innrly_admin_token", data.token);
        window.location.href = "/control-hub";
      } else {
        throw new Error("No token returned from server");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.message || "Failed to log in. Please check backend connection.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-screen items-center justify-center bg-white px-4 py-12 font-sans overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 h-[30rem] w-[30rem] -translate-y-1/2 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[8rem] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 h-[30rem] w-[30rem] translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-600/10 blur-[8rem] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md bg-slate-900 border border-slate-800/80 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block p-3 rounded-2xl bg-slate-950/80 border border-slate-800 mb-4", children: /* @__PURE__ */ jsx(Wordmark, { size: "lg", className: "mx-auto" }) }),
        /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-white tracking-normal font-sans", children: "Administrative Console" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-200 mt-1 font-medium", children: "Please authenticate to manage leads and settings." })
      ] }),
      error && /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-start gap-3 bg-red-950/40 border border-red-900/60 text-red-200 rounded-xl p-4 text-xs animate-shake", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 shrink-0 text-red-400 mt-0.5" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold block text-red-200", children: "Authentication Failed" }),
          /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-red-100 leading-relaxed", children: error })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold text-slate-200 uppercase tracking-wider block ml-1", children: "Username" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(User, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
            /* @__PURE__ */ jsx("input", { type: "text", required: true, disabled: loading, value: username, onChange: (e) => setUsername(e.target.value), placeholder: "Enter admin username", className: "w-full pl-11 pr-4 py-3 bg-slate-950/60 border border-slate-800 focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/30 rounded-xl text-sm text-slate-100 placeholder:text-slate-400 outline-none transition-all disabled:opacity-50" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold text-slate-200 uppercase tracking-wider block ml-1", children: "Password" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(Lock, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
            /* @__PURE__ */ jsx("input", { type: "password", required: true, disabled: loading, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Enter password", className: "w-full pl-11 pr-4 py-3 bg-slate-950/60 border border-slate-800 focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/30 rounded-xl text-sm text-slate-100 placeholder:text-slate-400 outline-none transition-all disabled:opacity-50" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: loading, className: "w-full mt-2 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:opacity-95 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-500/40 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(79,70,229,0.3)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer", children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4 animate-spin" }),
          /* @__PURE__ */ jsx("span", { children: "Authenticating..." })
        ] }) : /* @__PURE__ */ jsx("span", { children: "Sign In to Dashboard" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-8 pt-6 border-t border-slate-900/60", children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-xs text-slate-350 hover:text-white transition-colors font-semibold", children: "← Back to main site" }) })
    ] })
  ] });
}
export {
  AdminLoginPage as component
};
