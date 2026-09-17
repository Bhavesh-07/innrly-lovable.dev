import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback, useMemo } from "react";
import { 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  RefreshCw, 
  Download, 
  Search, 
  RotateCcw, 
  Mail, 
  Eye, 
  Copy, 
  Check, 
  X, 
  Layers, 
  Database, 
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { getAdminAuthHeaders } from "@/lib/admin-auth";

export const Route = createFileRoute("/control-hub/logs")({
  component: ControlHubLogsPage,
  head: () => ({
    meta: [
      { title: "Audit & Recovery Logs — Innrly Control Hub" },
      { name: "description", content: "Audit raw lead submissions, monitor fail-safe telemetry, and trigger 1-click disaster recovery." },
      { name: "robots", content: "noindex, nofollow" }
    ]
  })
});

export interface LeadEventLog {
  id?: number;
  log_id: string;
  source: "contact" | "trial" | "onboarding" | "newsletter" | string;
  submitter_name?: string | null;
  submitter_email?: string | null;
  company_name?: string | null;
  overall_status: "success" | "partial" | "failed";
  db_status: "success" | "partial" | "failed";
  db_details?: Record<string, any> | null;
  email_status: "success" | "failed" | "skipped";
  email_error?: string | null;
  raw_payload: Record<string, any>;
  is_recovered?: boolean | number;
  recovered_at?: string | null;
  created_at?: string;
  timestamp?: string;
  client_ip?: string;
}

export interface LogStats {
  total: number;
  success: number;
  partial: number;
  failed: number;
  recovered: number;
}

function ControlHubLogsPage() {
  const [logs, setLogs] = useState<LeadEventLog[]>([]);
  const [stats, setStats] = useState<LogStats>({
    total: 0,
    success: 0,
    partial: 0,
    failed: 0,
    recovered: 0
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "failed" | "partial" | "success" | "recovered">("all");
  const [moduleFilter, setModuleFilter] = useState<string>("all");
  const [autoRefresh, setAutoRefresh] = useState<boolean>(true);

  // Inspection Modal State
  const [selectedLog, setSelectedLog] = useState<LeadEventLog | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Action Loading States (keyed by log_id)
  const [recoveringIds, setRecoveringIds] = useState<Record<string, boolean>>({});
  const [resendingEmailIds, setResendingEmailIds] = useState<Record<string, boolean>>({});

  const fetchLogs = useCallback(async (isSilent = false) => {
    if (!isSilent) setRefreshing(true);
    try {
      const baseUrl = (import.meta as any).env?.VITE_LEAD_WEBHOOK_URL || "/api/leads";
      const apiRoot = baseUrl.replace(/\/leads\/?$/, "");
      
      const queryParams = new URLSearchParams();
      if (statusFilter !== "all" && statusFilter !== "recovered") {
        queryParams.set("status", statusFilter);
      }
      if (moduleFilter !== "all") {
        queryParams.set("module", moduleFilter);
      }
      if (searchQuery.trim()) {
        queryParams.set("search", searchQuery.trim());
      }
      queryParams.set("limit", "100");

      const res = await fetch(`${apiRoot}/api/leads/logs?${queryParams.toString()}`, {
        headers: getAdminAuthHeaders({ Accept: "application/json" })
      });

      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }

      const data = await res.json();
      let fetchedLogs: LeadEventLog[] = data.logs || [];
      
      if (statusFilter === "recovered") {
        fetchedLogs = fetchedLogs.filter((l) => Boolean(l.is_recovered));
      }

      setLogs(fetchedLogs);
      if (data.stats) {
        setStats(data.stats);
      }
    } catch (err: any) {
      console.error("Failed to load lead audit logs:", err);
      if (!isSilent) {
        toast.error("Failed to load audit logs. Please check server connection.");
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [statusFilter, moduleFilter, searchQuery]);

  // Initial fetch and auto-refresh loop
  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      fetchLogs(true);
    }, 12000);
    return () => clearInterval(interval);
  }, [autoRefresh, fetchLogs]);

  // Copy to clipboard helper
  const handleCopy = (text: string, fieldKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedField(null), 2000);
  };

  // 1-Click Recover Data Action
  const handleRecoverLead = async (logId: string) => {
    setRecoveringIds((prev) => ({ ...prev, [logId]: true }));
    try {
      const baseUrl = (import.meta as any).env?.VITE_LEAD_WEBHOOK_URL || "/api/leads";
      const apiRoot = baseUrl.replace(/\/leads\/?$/, "");

      const res = await fetch(`${apiRoot}/api/leads/logs/${logId}/recover`, {
        method: "POST",
        headers: getAdminAuthHeaders({ "Content-Type": "application/json", Accept: "application/json" })
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        toast.success(`Data recovered successfully for ${logId}!`);
        await fetchLogs(true);
        if (selectedLog && selectedLog.log_id === logId) {
          setSelectedLog((prev) => prev ? { ...prev, overall_status: "success", db_status: "success", is_recovered: true, db_details: data.details } : null);
        }
      } else {
        toast.error(data.detail || "Recovery failed. Please inspect database logs.");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to trigger recovery process.");
    } finally {
      setRecoveringIds((prev) => ({ ...prev, [logId]: false }));
    }
  };

  // 1-Click Resend Confirmation Email Action
  const handleResendEmail = async (logId: string) => {
    setResendingEmailIds((prev) => ({ ...prev, [logId]: true }));
    try {
      const baseUrl = (import.meta as any).env?.VITE_LEAD_WEBHOOK_URL || "/api/leads";
      const apiRoot = baseUrl.replace(/\/leads\/?$/, "");

      const res = await fetch(`${apiRoot}/api/leads/logs/${logId}/resend-email`, {
        method: "POST",
        headers: getAdminAuthHeaders({ "Content-Type": "application/json", Accept: "application/json" })
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        toast.success(`Confirmation email successfully delivered for ${logId}!`);
        await fetchLogs(true);
        if (selectedLog && selectedLog.log_id === logId) {
          setSelectedLog((prev) => prev ? { ...prev, email_status: "success", email_error: null } : null);
        }
      } else {
        toast.error(data.detail || "Email resend failed. Check SMTP configuration.");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to send email.");
    } finally {
      setResendingEmailIds((prev) => ({ ...prev, [logId]: false }));
    }
  };

  // Download Audit Log File (.jsonl)
  const handleDownloadLogs = () => {
    const baseUrl = (import.meta as any).env?.VITE_LEAD_WEBHOOK_URL || "/api/leads";
    const apiRoot = baseUrl.replace(/\/leads\/?$/, "");
    window.open(`${apiRoot}/api/leads/logs/download`, "_blank");
    toast.success("Downloading .jsonl audit logs...");
  };

  // Client-side filtering fallback for instant responsiveness
  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchId = log.log_id.toLowerCase().includes(q);
        const matchName = (log.submitter_name || "").toLowerCase().includes(q);
        const matchEmail = (log.submitter_email || "").toLowerCase().includes(q);
        const matchCompany = (log.company_name || "").toLowerCase().includes(q);
        if (!matchId && !matchName && !matchEmail && !matchCompany) return false;
      }
      // Status filter
      if (statusFilter === "recovered") {
        if (!log.is_recovered) return false;
      } else if (statusFilter !== "all") {
        if (log.overall_status !== statusFilter) return false;
      }
      // Module filter
      if (moduleFilter !== "all") {
        if (log.source !== moduleFilter) return false;
      }
      return true;
    });
  }, [logs, searchQuery, statusFilter, moduleFilter]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Header & Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                Lead Audit, Fail-Safe & Recovery Logs
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                  Live
                </span>
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Every lead is saved to disk before MySQL execution with automated 1-click data and email recovery.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <label className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-xl border border-slate-200 cursor-pointer transition-colors">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-3.5 w-3.5"
            />
            <span>Auto-refresh (12s)</span>
          </label>

          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchLogs()}
            disabled={refreshing}
            className="rounded-xl border-slate-200 text-white hover:bg-slate-50 gap-2 text-xs h-9 font-semibold"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? "animate-spin text-indigo-400" : ""}`} />
            <span>{refreshing ? "Refreshing..." : "Refresh"}</span>
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={handleDownloadLogs}
            className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white gap-2 text-xs h-9 font-semibold shadow-sm"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download .jsonl</span>
          </Button>
        </div>
      </div>

      {/* KPI & Status Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Captured */}
        <div 
          onClick={() => setStatusFilter("all")}
          className={`p-5 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === "all"
              ? "bg-indigo-50/70 border-indigo-300 ring-2 ring-indigo-500/20 shadow-sm"
              : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Submissions</span>
            <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
              <Layers className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">{stats.total}</span>
            <span className="text-xs font-medium text-slate-500">Logged to disk & DB</span>
          </div>
        </div>

        {/* Complete Success */}
        <div 
          onClick={() => setStatusFilter("success")}
          className={`p-5 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === "success"
              ? "bg-emerald-50/70 border-emerald-300 ring-2 ring-emerald-500/20 shadow-sm"
              : "bg-white border-slate-200 hover:border-emerald-200 shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Complete Success</span>
            <div className="h-8 w-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-emerald-700">{stats.success}</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
              {stats.total > 0 ? `${Math.round((stats.success / stats.total) * 100)}%` : "100%"}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Clean DB rows & email dispatched</p>
        </div>

        {/* Partial Execution (Action Needed) */}
        <div 
          onClick={() => setStatusFilter("partial")}
          className={`p-5 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === "partial"
              ? "bg-amber-50/80 border-amber-300 ring-2 ring-amber-500/20 shadow-sm"
              : "bg-white border-slate-200 hover:border-amber-200 shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Partial Failures</span>
            <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${stats.partial > 0 ? "bg-amber-100 text-amber-700 animate-pulse" : "bg-slate-100 text-slate-500"}`}>
              <AlertTriangle className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className={`text-3xl font-extrabold ${stats.partial > 0 ? "text-amber-700" : "text-slate-700"}`}>{stats.partial}</span>
            {stats.partial > 0 && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-200 text-amber-900 animate-pulse">
                Action Needed
              </span>
            )}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Missing child entities or email failed</p>
        </div>

        {/* Total Failures (Recovery Needed) */}
        <div 
          onClick={() => setStatusFilter("failed")}
          className={`p-5 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === "failed"
              ? "bg-rose-50/80 border-rose-300 ring-2 ring-rose-500/20 shadow-sm"
              : "bg-white border-slate-200 hover:border-rose-200 shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700">Total Failures</span>
            <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${stats.failed > 0 ? "bg-rose-100 text-rose-700 animate-pulse" : "bg-slate-100 text-slate-500"}`}>
              <XCircle className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className={`text-3xl font-extrabold ${stats.failed > 0 ? "text-rose-700" : "text-slate-700"}`}>{stats.failed}</span>
            {stats.failed > 0 && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-rose-200 text-rose-900 animate-pulse">
                Preserved on Disk
              </span>
            )}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">DB offline / transaction aborted</p>
        </div>
      </div>

      {/* Filter Toolbar & Status Tabs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-4">
        {/* Top Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-3">
          <button
            type="button"
            onClick={() => setStatusFilter("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              statusFilter === "all"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            All Submissions ({stats.total})
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter("failed")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              statusFilter === "failed"
                ? "bg-rose-600 text-white shadow-sm"
                : "text-rose-700 bg-rose-50 hover:bg-rose-100"
            }`}
          >
            <XCircle className="h-3.5 w-3.5" />
            <span>Total Failures ({stats.failed})</span>
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter("partial")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              statusFilter === "partial"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-amber-700 bg-amber-50 hover:bg-amber-100"
            }`}
          >
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>Partial Failures ({stats.partial})</span>
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter("success")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              statusFilter === "success"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-emerald-700 bg-emerald-50 hover:bg-emerald-100"
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Complete Success ({stats.success})</span>
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter("recovered")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              statusFilter === "recovered"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-indigo-700 bg-indigo-50 hover:bg-indigo-100"
            }`}
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Recovered Leads ({stats.recovered})</span>
          </button>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Log ID, Submitter, Company, Email..."
              className="pl-9.5 pr-4 py-2 text-xs rounded-xl bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:bg-white transition-all h-9"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Module Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0">Module:</span>
            <select
              value={moduleFilter}
              onChange={(e) => setModuleFilter(e.target.value)}
              className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white h-9"
            >
              <option value="all">All Modules</option>
              <option value="contact">Contact Inquiries</option>
              <option value="trial">Free Trials</option>
              <option value="onboarding">Onboardings</option>
              <option value="newsletter">Newsletter Signups</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Logs Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-12 flex flex-col items-center justify-center gap-3 text-slate-400">
            <RefreshCw className="h-7 w-7 animate-spin text-indigo-600" />
            <p className="text-sm font-medium">Loading audit and recovery telemetry...</p>
          </div>
        ) : filteredLogs.length === 0 ? (
          <div className="p-12 flex flex-col items-center justify-center text-center gap-3 text-slate-500">
            <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
              <Search className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-700">No submission logs found</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Try adjusting your search query, status filters, or trigger a test form submission.
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Log ID & Timestamp</th>
                  <th className="py-3 px-4">Module</th>
                  <th className="py-3 px-4">Submitter & Company</th>
                  <th className="py-3 px-4">Status & Health</th>
                  <th className="py-3 px-4">Diagnostics Breakdown</th>
                  <th className="py-3 px-4 text-right">Disaster Recovery Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredLogs.map((log) => {
                  const isRecovering = recoveringIds[log.log_id] || false;
                  const isResending = resendingEmailIds[log.log_id] || false;
                  const needsDbRecovery = log.overall_status === "failed" || log.db_status === "failed" || log.db_status === "partial";
                  const needsEmailResend = log.email_status === "failed" || (log.overall_status === "partial" && log.email_status !== "success");

                  // Module badge color
                  let moduleColor = "bg-slate-100 text-slate-700 border-slate-200";
                  if (log.source === "contact") moduleColor = "bg-indigo-50 text-indigo-700 border-indigo-200";
                  if (log.source === "trial") moduleColor = "bg-purple-50 text-purple-700 border-purple-200";
                  if (log.source === "onboarding") moduleColor = "bg-cyan-50 text-cyan-800 border-cyan-200";
                  if (log.source === "newsletter") moduleColor = "bg-emerald-50 text-emerald-800 border-emerald-200";

                  // Date formatting
                  const createdDate = log.created_at || log.timestamp;
                  const formattedDate = createdDate ? new Date(createdDate).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                  }) : "N/A";

                  return (
                    <tr key={log.log_id} className="hover:bg-slate-50/80 transition-colors group">
                      {/* Log ID & Time */}
                      <td className="py-3.5 px-4 font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900 text-xs">{log.log_id}</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(log.log_id, `log_${log.log_id}`)}
                            title="Copy Log ID"
                            className="text-slate-400 hover:text-slate-700 p-0.5 rounded transition-colors"
                          >
                            {copiedField === `log_${log.log_id}` ? (
                              <Check className="h-3 w-3 text-emerald-600" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </button>
                        </div>
                        <div className="text-[11px] text-slate-400 font-sans mt-0.5 flex items-center gap-1">
                          <Clock className="h-3 w-3 text-slate-300" />
                          <span>{formattedDate}</span>
                        </div>
                      </td>

                      {/* Module Badge */}
                      <td className="py-3.5 px-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold border capitalize ${moduleColor}`}>
                          {log.source === "newsletter" ? "Newsletter" : log.source}
                        </span>
                      </td>

                      {/* Submitter & Company */}
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900">{log.submitter_name || "N/A"}</div>
                        <div className="text-[11px] text-slate-500">{log.company_name || "No Company"}</div>
                        <div className="text-[11px] text-indigo-600 font-mono mt-0.5">{log.submitter_email || "N/A"}</div>
                      </td>

                      {/* Status & Health */}
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col gap-1">
                          {/* Overall Status Badge */}
                          {log.overall_status === "success" && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200/60 w-fit">
                              <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                              Success
                            </span>
                          )}
                          {log.overall_status === "partial" && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300/80 w-fit">
                              <AlertTriangle className="h-3 w-3 text-amber-700" />
                              Partial Execution
                            </span>
                          )}
                          {log.overall_status === "failed" && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300/80 w-fit">
                              <XCircle className="h-3 w-3 text-rose-600" />
                              Total Failed
                            </span>
                          )}

                          {/* Recovered tag */}
                          {Boolean(log.is_recovered) && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-indigo-600">
                              <RotateCcw className="h-2.5 w-2.5" />
                              <span>Recovered</span>
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Diagnostics Breakdown */}
                      <td className="py-3.5 px-4">
                        <div className="space-y-1 text-[11px]">
                          {/* DB Status */}
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-400 font-medium">DB:</span>
                            {log.db_status === "success" && (
                              <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                                <Check className="h-3 w-3" /> Saved Cleanly
                              </span>
                            )}
                            {log.db_status === "partial" && (
                              <span className="text-amber-700 font-semibold">
                                Incomplete ({log.db_details?.users_saved ?? 0}/{log.db_details?.users_expected ?? 0} Users, {log.db_details?.props_saved ?? 0}/{log.db_details?.props_expected ?? 0} Props)
                              </span>
                            )}
                            {log.db_status === "failed" && (
                              <span className="text-rose-600 font-semibold">
                                Insertion Aborted
                              </span>
                            )}
                          </div>

                          {/* Email Status */}
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-400 font-medium">Email:</span>
                            {log.email_status === "success" && (
                              <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                                <Check className="h-3 w-3" /> Delivered
                              </span>
                            )}
                            {log.email_status === "failed" && (
                              <span className="text-rose-600 font-semibold truncate max-w-[200px]" title={log.email_error || "Delivery error"}>
                                Failed ({log.email_error || "SMTP Error"})
                              </span>
                            )}
                            {log.email_status === "skipped" && (
                              <span className="text-slate-400">Skipped</span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Inspect Modal Trigger */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedLog(log)}
                            className="rounded-lg h-7 px-2.5 text-[11px] font-semibold text-white border-slate-200 hover:bg-slate-100 gap-1"
                          >
                            <Eye className="h-3 w-3" />
                            <span>Inspect</span>
                          </Button>

                          {/* 1-Click Recovery Button */}
                          {needsDbRecovery && (
                            <Button
                              size="sm"
                              onClick={() => handleRecoverLead(log.log_id)}
                              disabled={isRecovering}
                              className="rounded-lg h-7 px-2.5 text-[11px] font-semibold bg-indigo-600 hover:bg-indigo-500 text-white gap-1 shadow-sm"
                            >
                              <RotateCcw className={`h-3 w-3 ${isRecovering ? "animate-spin" : ""}`} />
                              <span>{isRecovering ? "Recovering..." : "Recover Data"}</span>
                            </Button>
                          )}

                          {/* Resend Email Button */}
                          {needsEmailResend && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleResendEmail(log.log_id)}
                              disabled={isResending}
                              className="rounded-lg h-7 px-2.5 text-[11px] font-semibold border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 gap-1"
                            >
                              <Mail className={`h-3 w-3 ${isResending ? "animate-spin" : ""}`} />
                              <span>{isResending ? "Sending..." : "Resend Email"}</span>
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* INSPECT RAW PAYLOAD & DIAGNOSTICS MODAL */}
      {selectedLog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 text-slate-100 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-950/60">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-bold text-white font-mono">{selectedLog.log_id}</h2>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {selectedLog.source}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Captured at {new Date(selectedLog.created_at || selectedLog.timestamp || "").toUTCString()}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedLog(null)}
                className="h-8 w-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
              
              {/* Entity Breakdown Checklist */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Granular Health & Execution Breakdown
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Database Entity Status */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <Database className="h-3.5 w-3.5 text-indigo-400" /> Database Storage
                      </span>
                      {selectedLog.db_status === "success" && (
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <Check className="h-3 w-3" /> Complete
                        </span>
                      )}
                      {selectedLog.db_status === "partial" && (
                        <span className="text-amber-400 font-bold flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" /> Partial
                        </span>
                      )}
                      {selectedLog.db_status === "failed" && (
                        <span className="text-rose-400 font-bold flex items-center gap-1">
                          <X className="h-3 w-3" /> Failed
                        </span>
                      )}
                    </div>
                    {selectedLog.db_details && (
                      <div className="text-[11px] text-slate-300 font-mono bg-black/30 p-2.5 rounded-lg overflow-x-auto">
                        {JSON.stringify(selectedLog.db_details, null, 2)}
                      </div>
                    )}
                  </div>

                  {/* Email Delivery Status */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-indigo-400" /> Email Notifications
                      </span>
                      {selectedLog.email_status === "success" && (
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <Check className="h-3 w-3" /> Delivered
                        </span>
                      )}
                      {selectedLog.email_status === "failed" && (
                        <span className="text-rose-400 font-bold flex items-center gap-1">
                          <X className="h-3 w-3" /> Failed
                        </span>
                      )}
                      {selectedLog.email_status === "skipped" && (
                        <span className="text-slate-400 font-medium">Skipped</span>
                      )}
                    </div>
                    {selectedLog.email_error ? (
                      <div className="text-[11px] text-rose-300 bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-lg">
                        {selectedLog.email_error}
                      </div>
                    ) : (
                      <div className="text-[11px] text-slate-400">
                        Submitter confirmation and sales alerts dispatched via SMTP.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Raw JSON Payload Viewer */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Raw Submission Payload (Immutable JSON)
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(JSON.stringify(selectedLog.raw_payload, null, 2), "modal_payload")}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    {copiedField === "modal_payload" ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy JSON</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="relative rounded-xl bg-slate-950 p-4 border border-white/10 font-mono text-[11px] text-slate-300 overflow-x-auto max-h-72">
                  <pre>{JSON.stringify(selectedLog.raw_payload, null, 2)}</pre>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 border-t border-white/10 bg-slate-950/80 flex items-center justify-between gap-3">
              <div className="text-[11px] text-slate-400">
                IP: <span className="font-mono text-slate-200">{selectedLog.client_ip || "127.0.0.1"}</span>
              </div>

              <div className="flex items-center gap-2">
                {(selectedLog.overall_status === "failed" || selectedLog.db_status !== "success") && (
                  <Button
                    size="sm"
                    onClick={() => handleRecoverLead(selectedLog.log_id)}
                    disabled={recoveringIds[selectedLog.log_id]}
                    className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs gap-1.5"
                  >
                    <RotateCcw className={`h-3.5 w-3.5 ${recoveringIds[selectedLog.log_id] ? "animate-spin" : ""}`} />
                    <span>Recover Missing Data</span>
                  </Button>
                )}

                {(selectedLog.email_status === "failed" || selectedLog.overall_status === "partial") && (
                  <Button
                    size="sm"
                    onClick={() => handleResendEmail(selectedLog.log_id)}
                    disabled={resendingEmailIds[selectedLog.log_id]}
                    className="rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs gap-1.5"
                  >
                    <Mail className={`h-3.5 w-3.5 ${resendingEmailIds[selectedLog.log_id] ? "animate-spin" : ""}`} />
                    <span>Resend Confirmation Email</span>
                  </Button>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedLog(null)}
                  className="rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
