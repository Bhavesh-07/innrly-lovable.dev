import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { 
  Settings, 
  LogOut, 
  Search, 
  Bell, 
  Sun, 
  ChevronDown, 
  Users, 
  Laptop, 
  UserCheck, 
  Mail, 
  BookOpen, 
  MessageSquareQuote,
  Lock,
  User,
  UserCog,
  Eye,
  EyeOff,
  AlertCircle,
  Loader2,
  ShieldCheck,
  ShieldAlert,
  ArrowLeft,
  Sparkles
} from "lucide-react";
import { 
  getAdminToken, 
  getAdminUser, 
  getAdminName,
  getAdminRole,
  isSuperAdmin,
  hasPermission,
  clearAdminSession, 
  adminLogin, 
  verifyAdminSession,
  AVAILABLE_MODULES
} from "@/lib/admin-auth";
import { Wordmark } from "@/components/site/Wordmark";

export const Route = createFileRoute("/control-hub")({
  component: ControlHubLayout,
  head: () => ({
    meta: [
      { title: "Control Hub — Innrly Administration" },
      { name: "robots", content: "noindex, nofollow" }
    ]
  })
});

function ControlHubLayout() {
  const [authState, setAuthState] = useState<"checking" | "authenticated" | "unauthenticated">("checking");
  const [adminUser, setAdminUser] = useState<string>(() => getAdminUser());
  const [adminName, setAdminName] = useState<string>(() => getAdminName());
  const [adminRole, setAdminRole] = useState<"super_admin" | "normal_user">(() => getAdminRole());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [logAlertCount, setLogAlertCount] = useState<number>(0);

  // Check existing session on mount
  useEffect(() => {
    let isMounted = true;

    async function checkAuth() {
      const token = getAdminToken();
      if (!token) {
        if (isMounted) setAuthState("unauthenticated");
        return;
      }

      const result = await verifyAdminSession();
      if (!isMounted) return;

      if (result.ok && result.user) {
        setAuthState("authenticated");
        setAdminUser(result.user.username);
        setAdminName(result.user.name || result.user.username);
        setAdminRole(result.user.role);
      } else {
        setAuthState("unauthenticated");
      }
    }

    const fallbackTimer = setTimeout(() => {
      if (isMounted) {
        setAuthState((prev) => (prev === "checking" ? "unauthenticated" : prev));
      }
    }, 3500);

    checkAuth().finally(() => {
      clearTimeout(fallbackTimer);
    });

    // Listen for logout events broadcasted from expired requests
    const handleLogoutEvent = () => {
      setAuthState("unauthenticated");
    };
    window.addEventListener("innrly-admin-logout", handleLogoutEvent);

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
      window.removeEventListener("innrly-admin-logout", handleLogoutEvent);
    };
  }, []);

  // Poll lead log stats to surface dynamic alert badges
  useEffect(() => {
    if (authState !== "authenticated") return;
    let isMounted = true;

    async function fetchStats() {
      try {
        const baseUrl = (import.meta as any).env?.VITE_LEAD_WEBHOOK_URL || "/api/leads";
        const apiRoot = baseUrl.replace(/\/leads\/?$/, "");
        const res = await fetch(`${apiRoot}/api/leads/logs/stats`, {
          headers: getAdminAuthHeaders({ Accept: "application/json" })
        });
        if (res.ok && isMounted) {
          const data = await res.json();
          const alerts = (data.failed || 0) + (data.partial || 0);
          setLogAlertCount(alerts);
        }
      } catch {
        // silent fallback
      }
    }

    fetchStats();
    const interval = setInterval(fetchStats, 15000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [authState]);

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setLoginError("Please enter both username and password.");
      return;
    }

    setIsSubmitting(true);
    setLoginError(null);

    const result = await adminLogin(username.trim(), password);
    setIsSubmitting(false);

    if (result.ok && result.user) {
      setAuthState("authenticated");
      setAdminUser(result.user.username);
      setAdminName(result.user.name || result.user.username);
      setAdminRole(result.user.role);
      setPassword("");
    } else {
      setLoginError(result.error || "Authentication failed. Please verify your credentials.");
    }
  };

  const handleLogout = () => {
    clearAdminSession();
    setAuthState("unauthenticated");
    setUsername("");
    setPassword("");
  };

  // 1. Initial Session Checking State
  if (authState === "checking") {
    return (
      <div className="min-h-screen bg-[#070b14] flex flex-col items-center justify-center text-slate-300 font-sans">
        <div className="relative flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center animate-pulse">
            <ShieldCheck className="h-6 w-6 text-indigo-400" />
          </div>
          <p className="text-sm font-medium text-slate-400">Verifying administrator credentials...</p>
        </div>
      </div>
    );
  }

  // 2. Unauthenticated Login Gate
  if (authState === "unauthenticated") {
    return (
      <div className="min-h-screen bg-[#070b14] text-slate-200 font-sans flex flex-col justify-center items-center px-4 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-indigo-600/20 via-blue-600/10 to-transparent blur-3xl opacity-60" />
        <div className="pointer-events-none absolute bottom-0 right-10 w-[400px] h-[300px] bg-teal-500/10 blur-3xl opacity-40" />

        <div className="relative w-full max-w-md z-10">
          {/* Top Logo and Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-3">
              <Wordmark size="lg" className="text-white" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                Control Hub
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-2">Sign in to access management and telemetry</p>
          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-8 shadow-2xl shadow-black/50">
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              {loginError && (
                <div className="flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-300">
                  <AlertCircle className="h-5 w-5 shrink-0 text-rose-400 mt-0.5" />
                  <div className="flex-1">{loginError}</div>
                </div>
              )}

              {/* Username field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Username
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                    autoFocus
                    className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-10 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    <span>Unlock Control Hub</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer Back Link */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Return to Innrly.com</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Permission flags for sidebar groups
  const hasMarketingGroup = hasPermission("contact_inquiries") || 
                           hasPermission("free_trials") || 
                           hasPermission("onboardings") || 
                           hasPermission("newsletter_list");

  const hasConfigGroup = hasPermission("testimonials") || 
                         hasPermission("blogs") || 
                         hasPermission("seo") || 
                         hasPermission("settings");

  const userIsSuper = adminRole === "super_admin" || isSuperAdmin();

  // 3. Authenticated Control Hub Layout
  return (
    <div className="admin-portal flex min-h-screen h-full w-full flex-1 bg-[#f8f9fa] text-slate-600 font-sans antialiased overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white flex flex-col shrink-0">
        
        {/* Logo area */}
        <div className="h-16 border-b border-slate-100 flex items-center justify-between px-5 shrink-0 bg-white">
          <Link to="/control-hub" className="flex items-center gap-2">
            <Wordmark size="sm" className="text-slate-900" />
            <span className="text-[10px] text-indigo-600 px-1.5 py-0.5 bg-indigo-50 rounded-md font-bold border border-indigo-100 uppercase tracking-wider">
              Hub
            </span>
          </Link>
        </div>

        {/* User profile avatar box */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3 shrink-0 bg-slate-50/50">
          <div className="h-10 w-10 rounded-xl overflow-hidden bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-sm shadow-sm">
            {adminName.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-slate-800 block leading-tight truncate">{adminName}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              {userIsSuper ? (
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200/60">
                  Super Admin
                </span>
              ) : (
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                  User
                </span>
              )}
              <span className="text-[11px] text-emerald-600 flex items-center gap-1 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {/* MARKETING & LEADS */}
          {hasMarketingGroup && (
            <>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                Marketing & Leads
              </div>
              {hasPermission("contact_inquiries") && (
                <Link
                  to="/control-hub"
                  activeProps={{ className: "bg-indigo-50 text-indigo-600 font-semibold" }}
                  inactiveProps={{ className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" }}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all"
                  activeOptions={{ exact: true }}
                >
                  <Users className="h-4.5 w-4.5" />
                  Contact Inquiries
                </Link>
              )}
              {hasPermission("free_trials") && (
                <Link
                  to="/control-hub/trials"
                  activeProps={{ className: "bg-indigo-50 text-indigo-600 font-semibold" }}
                  inactiveProps={{ className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" }}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all"
                >
                  <Laptop className="h-4.5 w-4.5" />
                  Free Trials
                </Link>
              )}
              {hasPermission("onboardings") && (
                <Link
                  to="/control-hub/onboarding"
                  activeProps={{ className: "bg-indigo-50 text-indigo-600 font-semibold" }}
                  inactiveProps={{ className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" }}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all"
                >
                  <UserCheck className="h-4.5 w-4.5" />
                  Onboardings
                </Link>
              )}
              {hasPermission("newsletter_list") && (
                <Link
                  to="/control-hub/newsletters"
                  activeProps={{ className: "bg-indigo-50 text-indigo-600 font-semibold" }}
                  inactiveProps={{ className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" }}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all"
                >
                  <Mail className="h-4.5 w-4.5" />
                  Newsletter List
                </Link>
              )}
              {(hasPermission("lead_logs") || userIsSuper) && (
                <Link
                  to="/control-hub/logs"
                  activeProps={{ className: "bg-indigo-50 text-indigo-600 font-semibold" }}
                  inactiveProps={{ className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" }}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <ShieldAlert className="h-4.5 w-4.5 text-indigo-600" />
                    <span>Audit & Recovery</span>
                  </div>
                  {logAlertCount > 0 && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/15 text-rose-600 border border-rose-200 animate-pulse">
                      {logAlertCount}
                    </span>
                  )}
                </Link>
              )}
            </>
          )}

          {/* SITE CONTENT & CONFIG */}
          {hasConfigGroup && (
            <>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-4 mb-2">
                Site Content & Config
              </div>
              {hasPermission("testimonials") && (
                <Link
                  to="/control-hub/testimonials"
                  activeProps={{ className: "bg-indigo-50 text-indigo-600 font-semibold" }}
                  inactiveProps={{ className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" }}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all"
                >
                  <MessageSquareQuote className="h-4.5 w-4.5" />
                  Testimonials
                </Link>
              )}
              {hasPermission("blogs") && (
                <Link
                  to="/control-hub/blogs"
                  activeProps={{ className: "bg-indigo-50 text-indigo-600 font-semibold" }}
                  inactiveProps={{ className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" }}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all"
                >
                  <BookOpen className="h-4.5 w-4.5" />
                  Blog Manager
                </Link>
              )}
              {hasPermission("seo") && (
                <Link
                  to="/control-hub/seo"
                  activeProps={{ className: "bg-indigo-50 text-indigo-600 font-semibold" }}
                  inactiveProps={{ className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" }}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all"
                >
                  <Search className="h-4.5 w-4.5" />
                  SEO Editor
                </Link>
              )}
              {hasPermission("settings") && (
                <Link
                  to="/control-hub/settings"
                  activeProps={{ className: "bg-indigo-50 text-indigo-600 font-semibold" }}
                  inactiveProps={{ className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" }}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all"
                >
                  <Settings className="h-4.5 w-4.5" />
                  System Settings
                </Link>
              )}
            </>
          )}

          {/* USER MANAGEMENT (SUPER ADMIN ONLY) */}
          {userIsSuper && (
            <>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-4 mb-2">
                Administration
              </div>
              <Link
                to="/control-hub/users"
                activeProps={{ className: "bg-indigo-50 text-indigo-600 font-semibold" }}
                inactiveProps={{ className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" }}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all"
              >
                <UserCog className="h-4.5 w-4.5" />
                User Management
              </Link>
            </>
          )}

          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-6 mb-2">
            Session
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 transition-all w-full text-left cursor-pointer"
          >
            <LogOut className="h-4.5 w-4.5" />
            Sign Out
          </button>
        </nav>
      </aside>

      {/* Content pane with Header */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-800">Control Hub Dashboard</span>
          </div>

          {/* Right Header Area */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              target="_blank"
              className="text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors"
            >
              View Public Site ↗
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign Out
            </button>
          </div>
        </header>

        {/* Content Box */}
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
