import { t as Button } from "./button-Dkpg6g2Z.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { i as getAdminAuthHeaders } from "./admin-auth-5LzGtRF4.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, Check, CheckCircle2, Clock, Copy, Database, Download, Eye, Layers, Mail, RefreshCw, RotateCcw, Search, ShieldAlert, X, XCircle } from "lucide-react";
import { toast } from "sonner";
//#region src/routes/control-hub.logs.tsx?tsr-split=component
function ControlHubLogsPage() {
	const [logs, setLogs] = useState([]);
	const [stats, setStats] = useState({
		total: 0,
		success: 0,
		partial: 0,
		failed: 0,
		recovered: 0
	});
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [statusFilter, setStatusFilter] = useState("all");
	const [moduleFilter, setModuleFilter] = useState("all");
	const [autoRefresh, setAutoRefresh] = useState(true);
	const [selectedLog, setSelectedLog] = useState(null);
	const [copiedField, setCopiedField] = useState(null);
	const [recoveringIds, setRecoveringIds] = useState({});
	const [resendingEmailIds, setResendingEmailIds] = useState({});
	const fetchLogs = useCallback(async (isSilent = false) => {
		if (!isSilent) setRefreshing(true);
		try {
			const apiRoot = "/api/leads".replace(/\/leads\/?$/, "");
			const queryParams = new URLSearchParams();
			if (statusFilter !== "all" && statusFilter !== "recovered") queryParams.set("status", statusFilter);
			if (moduleFilter !== "all") queryParams.set("module", moduleFilter);
			if (searchQuery.trim()) queryParams.set("search", searchQuery.trim());
			queryParams.set("limit", "100");
			const res = await fetch(`${apiRoot}/api/leads/logs?${queryParams.toString()}`, { headers: getAdminAuthHeaders({ Accept: "application/json" }) });
			if (!res.ok) throw new Error(`Server returned HTTP ${res.status}`);
			const data = await res.json();
			let fetchedLogs = data.logs || [];
			if (statusFilter === "recovered") fetchedLogs = fetchedLogs.filter((l) => Boolean(l.is_recovered));
			setLogs(fetchedLogs);
			if (data.stats) setStats(data.stats);
		} catch (err) {
			console.error("Failed to load lead audit logs:", err);
			if (!isSilent) toast.error("Failed to load audit logs. Please check server connection.");
		} finally {
			setLoading(false);
			setRefreshing(false);
		}
	}, [
		statusFilter,
		moduleFilter,
		searchQuery
	]);
	useEffect(() => {
		fetchLogs();
	}, [fetchLogs]);
	useEffect(() => {
		if (!autoRefresh) return;
		const interval = setInterval(() => {
			fetchLogs(true);
		}, 12e3);
		return () => clearInterval(interval);
	}, [autoRefresh, fetchLogs]);
	const handleCopy = (text, fieldKey) => {
		navigator.clipboard.writeText(text);
		setCopiedField(fieldKey);
		toast.success("Copied to clipboard!");
		setTimeout(() => setCopiedField(null), 2e3);
	};
	const handleRecoverLead = async (logId) => {
		setRecoveringIds((prev) => ({
			...prev,
			[logId]: true
		}));
		try {
			const apiRoot = "/api/leads".replace(/\/leads\/?$/, "");
			const res = await fetch(`${apiRoot}/api/leads/logs/${logId}/recover`, {
				method: "POST",
				headers: getAdminAuthHeaders({
					"Content-Type": "application/json",
					Accept: "application/json"
				})
			});
			const data = await res.json();
			if (res.ok && data.ok) {
				toast.success(`Data recovered successfully for ${logId}!`);
				await fetchLogs(true);
				if (selectedLog && selectedLog.log_id === logId) setSelectedLog((prev) => prev ? {
					...prev,
					overall_status: "success",
					db_status: "success",
					is_recovered: true,
					db_details: data.details
				} : null);
			} else toast.error(data.detail || "Recovery failed. Please inspect database logs.");
		} catch (err) {
			toast.error(err.message || "Failed to trigger recovery process.");
		} finally {
			setRecoveringIds((prev) => ({
				...prev,
				[logId]: false
			}));
		}
	};
	const handleResendEmail = async (logId) => {
		setResendingEmailIds((prev) => ({
			...prev,
			[logId]: true
		}));
		try {
			const apiRoot = "/api/leads".replace(/\/leads\/?$/, "");
			const res = await fetch(`${apiRoot}/api/leads/logs/${logId}/resend-email`, {
				method: "POST",
				headers: getAdminAuthHeaders({
					"Content-Type": "application/json",
					Accept: "application/json"
				})
			});
			const data = await res.json();
			if (res.ok && data.ok) {
				toast.success(`Confirmation email successfully delivered for ${logId}!`);
				await fetchLogs(true);
				if (selectedLog && selectedLog.log_id === logId) setSelectedLog((prev) => prev ? {
					...prev,
					email_status: "success",
					email_error: null
				} : null);
			} else toast.error(data.detail || "Email resend failed. Check SMTP configuration.");
		} catch (err) {
			toast.error(err.message || "Failed to send email.");
		} finally {
			setResendingEmailIds((prev) => ({
				...prev,
				[logId]: false
			}));
		}
	};
	const handleDownloadLogs = () => {
		const apiRoot = "/api/leads".replace(/\/leads\/?$/, "");
		window.open(`${apiRoot}/api/leads/logs/download`, "_blank");
		toast.success("Downloading .jsonl audit logs...");
	};
	const filteredLogs = useMemo(() => {
		return logs.filter((log) => {
			if (searchQuery.trim()) {
				const q = searchQuery.toLowerCase().trim();
				const matchId = log.log_id.toLowerCase().includes(q);
				const matchName = (log.submitter_name || "").toLowerCase().includes(q);
				const matchEmail = (log.submitter_email || "").toLowerCase().includes(q);
				const matchCompany = (log.company_name || "").toLowerCase().includes(q);
				if (!matchId && !matchName && !matchEmail && !matchCompany) return false;
			}
			if (statusFilter === "recovered") {
				if (!log.is_recovered) return false;
			} else if (statusFilter !== "all") {
				if (log.overall_status !== statusFilter) return false;
			}
			if (moduleFilter !== "all") {
				if (log.source !== moduleFilter) return false;
			}
			return true;
		});
	}, [
		logs,
		searchQuery,
		statusFilter,
		moduleFilter
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6 max-w-7xl mx-auto pb-12",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm",
				children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm",
						children: /* @__PURE__ */ jsx(ShieldAlert, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h1", {
						className: "text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2",
						children: ["Lead Audit, Fail-Safe & Recovery Logs", /* @__PURE__ */ jsx("span", {
							className: "text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200",
							children: "Live"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-slate-500 mt-0.5",
						children: "Every lead is saved to disk before MySQL execution with automated 1-click data and email recovery."
					})] })]
				}) }), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2.5 shrink-0",
					children: [
						/* @__PURE__ */ jsxs("label", {
							className: "flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-xl border border-slate-200 cursor-pointer transition-colors",
							children: [/* @__PURE__ */ jsx("input", {
								type: "checkbox",
								checked: autoRefresh,
								onChange: (e) => setAutoRefresh(e.target.checked),
								className: "rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-3.5 w-3.5"
							}), /* @__PURE__ */ jsx("span", { children: "Auto-refresh (12s)" })]
						}),
						/* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => fetchLogs(),
							disabled: refreshing,
							className: "rounded-xl border-slate-200 text-white hover:bg-slate-50 gap-2 text-xs h-9 font-semibold",
							children: [/* @__PURE__ */ jsx(RefreshCw, { className: `h-3.5 w-3.5 ${refreshing ? "animate-spin text-indigo-400" : ""}` }), /* @__PURE__ */ jsx("span", { children: refreshing ? "Refreshing..." : "Refresh" })]
						}),
						/* @__PURE__ */ jsxs(Button, {
							variant: "default",
							size: "sm",
							onClick: handleDownloadLogs,
							className: "rounded-xl bg-slate-900 hover:bg-slate-800 text-white gap-2 text-xs h-9 font-semibold shadow-sm",
							children: [/* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Download .jsonl" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						onClick: () => setStatusFilter("all"),
						className: `p-5 rounded-2xl border transition-all cursor-pointer ${statusFilter === "all" ? "bg-indigo-50/70 border-indigo-300 ring-2 ring-indigo-500/20 shadow-sm" : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"}`,
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-xs font-bold uppercase tracking-wider text-slate-500",
								children: "Total Submissions"
							}), /* @__PURE__ */ jsx("div", {
								className: "h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600",
								children: /* @__PURE__ */ jsx(Layers, { className: "h-4 w-4" })
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-3 flex items-baseline gap-2",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-3xl font-extrabold text-slate-900",
								children: stats.total
							}), /* @__PURE__ */ jsx("span", {
								className: "text-xs font-medium text-slate-500",
								children: "Logged to disk & DB"
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						onClick: () => setStatusFilter("success"),
						className: `p-5 rounded-2xl border transition-all cursor-pointer ${statusFilter === "success" ? "bg-emerald-50/70 border-emerald-300 ring-2 ring-emerald-500/20 shadow-sm" : "bg-white border-slate-200 hover:border-emerald-200 shadow-sm"}`,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold uppercase tracking-wider text-emerald-700",
									children: "Complete Success"
								}), /* @__PURE__ */ jsx("div", {
									className: "h-8 w-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center",
									children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-3 flex items-baseline gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-3xl font-extrabold text-emerald-700",
									children: stats.success
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800",
									children: stats.total > 0 ? `${Math.round(stats.success / stats.total * 100)}%` : "100%"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-slate-500 mt-1",
								children: "Clean DB rows & email dispatched"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						onClick: () => setStatusFilter("partial"),
						className: `p-5 rounded-2xl border transition-all cursor-pointer ${statusFilter === "partial" ? "bg-amber-50/80 border-amber-300 ring-2 ring-amber-500/20 shadow-sm" : "bg-white border-slate-200 hover:border-amber-200 shadow-sm"}`,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold uppercase tracking-wider text-amber-700",
									children: "Partial Failures"
								}), /* @__PURE__ */ jsx("div", {
									className: `h-8 w-8 rounded-lg flex items-center justify-center ${stats.partial > 0 ? "bg-amber-100 text-amber-700 animate-pulse" : "bg-slate-100 text-slate-500"}`,
									children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-3 flex items-baseline gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: `text-3xl font-extrabold ${stats.partial > 0 ? "text-amber-700" : "text-slate-700"}`,
									children: stats.partial
								}), stats.partial > 0 && /* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold px-2 py-0.5 rounded-md bg-amber-200 text-amber-900 animate-pulse",
									children: "Action Needed"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-slate-500 mt-1",
								children: "Missing child entities or email failed"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						onClick: () => setStatusFilter("failed"),
						className: `p-5 rounded-2xl border transition-all cursor-pointer ${statusFilter === "failed" ? "bg-rose-50/80 border-rose-300 ring-2 ring-rose-500/20 shadow-sm" : "bg-white border-slate-200 hover:border-rose-200 shadow-sm"}`,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold uppercase tracking-wider text-rose-700",
									children: "Total Failures"
								}), /* @__PURE__ */ jsx("div", {
									className: `h-8 w-8 rounded-lg flex items-center justify-center ${stats.failed > 0 ? "bg-rose-100 text-rose-700 animate-pulse" : "bg-slate-100 text-slate-500"}`,
									children: /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-3 flex items-baseline gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: `text-3xl font-extrabold ${stats.failed > 0 ? "text-rose-700" : "text-slate-700"}`,
									children: stats.failed
								}), stats.failed > 0 && /* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold px-2 py-0.5 rounded-md bg-rose-200 text-rose-900 animate-pulse",
									children: "Preserved on Disk"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-slate-500 mt-1",
								children: "DB offline / transaction aborted"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-2 border-b border-slate-100 pb-3",
					children: [
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => setStatusFilter("all"),
							className: `px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${statusFilter === "all" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,
							children: [
								"All Submissions (",
								stats.total,
								")"
							]
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => setStatusFilter("failed"),
							className: `px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${statusFilter === "failed" ? "bg-rose-600 text-white shadow-sm" : "text-rose-700 bg-rose-50 hover:bg-rose-100"}`,
							children: [/* @__PURE__ */ jsx(XCircle, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsxs("span", { children: [
								"Total Failures (",
								stats.failed,
								")"
							] })]
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => setStatusFilter("partial"),
							className: `px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${statusFilter === "partial" ? "bg-amber-600 text-white shadow-sm" : "text-amber-700 bg-amber-50 hover:bg-amber-100"}`,
							children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsxs("span", { children: [
								"Partial Failures (",
								stats.partial,
								")"
							] })]
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => setStatusFilter("success"),
							className: `px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${statusFilter === "success" ? "bg-emerald-600 text-white shadow-sm" : "text-emerald-700 bg-emerald-50 hover:bg-emerald-100"}`,
							children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsxs("span", { children: [
								"Complete Success (",
								stats.success,
								")"
							] })]
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => setStatusFilter("recovered"),
							className: `px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${statusFilter === "recovered" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-700 bg-indigo-50 hover:bg-indigo-100"}`,
							children: [/* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsxs("span", { children: [
								"Recovered Leads (",
								stats.recovered,
								")"
							] })]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative flex-1 max-w-md",
						children: [
							/* @__PURE__ */ jsx(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
							/* @__PURE__ */ jsx(Input, {
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								placeholder: "Search by Log ID, Submitter, Company, Email...",
								className: "pl-9.5 pr-4 py-2 text-xs rounded-xl bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:bg-white transition-all h-9"
							}),
							searchQuery && /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setSearchQuery(""),
								className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",
								children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0",
							children: "Module:"
						}), /* @__PURE__ */ jsxs("select", {
							value: moduleFilter,
							onChange: (e) => setModuleFilter(e.target.value),
							className: "text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white h-9",
							children: [
								/* @__PURE__ */ jsx("option", {
									value: "all",
									children: "All Modules"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "contact",
									children: "Contact Inquiries"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "trial",
									children: "Free Trials"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "onboarding",
									children: "Onboardings"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "newsletter",
									children: "Newsletter Signups"
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm",
				children: loading ? /* @__PURE__ */ jsxs("div", {
					className: "p-12 flex flex-col items-center justify-center gap-3 text-slate-400",
					children: [/* @__PURE__ */ jsx(RefreshCw, { className: "h-7 w-7 animate-spin text-indigo-600" }), /* @__PURE__ */ jsx("p", {
						className: "text-sm font-medium",
						children: "Loading audit and recovery telemetry..."
					})]
				}) : filteredLogs.length === 0 ? /* @__PURE__ */ jsxs("div", {
					className: "p-12 flex flex-col items-center justify-center text-center gap-3 text-slate-500",
					children: [/* @__PURE__ */ jsx("div", {
						className: "h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400",
						children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-sm font-bold text-slate-700",
						children: "No submission logs found"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-slate-400 mt-0.5",
						children: "Try adjusting your search query, status filters, or trigger a test form submission."
					})] })]
				}) : /* @__PURE__ */ jsx("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ jsxs("table", {
						className: "w-full text-left border-collapse text-xs",
						children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
							className: "bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]",
							children: [
								/* @__PURE__ */ jsx("th", {
									className: "py-3 px-4",
									children: "Log ID & Timestamp"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "py-3 px-4",
									children: "Module"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "py-3 px-4",
									children: "Submitter & Company"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "py-3 px-4",
									children: "Status & Health"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "py-3 px-4",
									children: "Diagnostics Breakdown"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "py-3 px-4 text-right",
									children: "Disaster Recovery Actions"
								})
							]
						}) }), /* @__PURE__ */ jsx("tbody", {
							className: "divide-y divide-slate-100 text-slate-700",
							children: filteredLogs.map((log) => {
								const isRecovering = recoveringIds[log.log_id] || false;
								const isResending = resendingEmailIds[log.log_id] || false;
								const needsDbRecovery = log.overall_status === "failed" || log.db_status === "failed" || log.db_status === "partial";
								const needsEmailResend = log.email_status === "failed" || log.overall_status === "partial" && log.email_status !== "success";
								let moduleColor = "bg-slate-100 text-slate-700 border-slate-200";
								if (log.source === "contact") moduleColor = "bg-indigo-50 text-indigo-700 border-indigo-200";
								if (log.source === "trial") moduleColor = "bg-purple-50 text-purple-700 border-purple-200";
								if (log.source === "onboarding") moduleColor = "bg-cyan-50 text-cyan-800 border-cyan-200";
								if (log.source === "newsletter") moduleColor = "bg-emerald-50 text-emerald-800 border-emerald-200";
								const createdDate = log.created_at || log.timestamp;
								const formattedDate = createdDate ? new Date(createdDate).toLocaleString("en-US", {
									month: "short",
									day: "numeric",
									year: "numeric",
									hour: "2-digit",
									minute: "2-digit",
									second: "2-digit"
								}) : "N/A";
								return /* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-slate-50/80 transition-colors group",
									children: [
										/* @__PURE__ */ jsxs("td", {
											className: "py-3.5 px-4 font-mono",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-bold text-slate-900 text-xs",
													children: log.log_id
												}), /* @__PURE__ */ jsx("button", {
													type: "button",
													onClick: () => handleCopy(log.log_id, `log_${log.log_id}`),
													title: "Copy Log ID",
													className: "text-slate-400 hover:text-slate-700 p-0.5 rounded transition-colors",
													children: copiedField === `log_${log.log_id}` ? /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-emerald-600" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" })
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "text-[11px] text-slate-400 font-sans mt-0.5 flex items-center gap-1",
												children: [/* @__PURE__ */ jsx(Clock, { className: "h-3 w-3 text-slate-300" }), /* @__PURE__ */ jsx("span", { children: formattedDate })]
											})]
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-4",
											children: /* @__PURE__ */ jsx("span", {
												className: `inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold border capitalize ${moduleColor}`,
												children: log.source === "newsletter" ? "Newsletter" : log.source
											})
										}),
										/* @__PURE__ */ jsxs("td", {
											className: "py-3.5 px-4",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "font-bold text-slate-900",
													children: log.submitter_name || "N/A"
												}),
												/* @__PURE__ */ jsx("div", {
													className: "text-[11px] text-slate-500",
													children: log.company_name || "No Company"
												}),
												/* @__PURE__ */ jsx("div", {
													className: "text-[11px] text-indigo-600 font-mono mt-0.5",
													children: log.submitter_email || "N/A"
												})
											]
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-4",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col gap-1",
												children: [
													log.overall_status === "success" && /* @__PURE__ */ jsxs("span", {
														className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200/60 w-fit",
														children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-emerald-600" }), "Success"]
													}),
													log.overall_status === "partial" && /* @__PURE__ */ jsxs("span", {
														className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300/80 w-fit",
														children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-amber-700" }), "Partial Execution"]
													}),
													log.overall_status === "failed" && /* @__PURE__ */ jsxs("span", {
														className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300/80 w-fit",
														children: [/* @__PURE__ */ jsx(XCircle, { className: "h-3 w-3 text-rose-600" }), "Total Failed"]
													}),
													Boolean(log.is_recovered) && /* @__PURE__ */ jsxs("span", {
														className: "inline-flex items-center gap-1 text-[10px] font-semibold text-indigo-600",
														children: [/* @__PURE__ */ jsx(RotateCcw, { className: "h-2.5 w-2.5" }), /* @__PURE__ */ jsx("span", { children: "Recovered" })]
													})
												]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-4",
											children: /* @__PURE__ */ jsxs("div", {
												className: "space-y-1 text-[11px]",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-1.5",
													children: [
														/* @__PURE__ */ jsx("span", {
															className: "text-slate-400 font-medium",
															children: "DB:"
														}),
														log.db_status === "success" && /* @__PURE__ */ jsxs("span", {
															className: "text-emerald-700 font-semibold flex items-center gap-0.5",
															children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }), " Saved Cleanly"]
														}),
														log.db_status === "partial" && /* @__PURE__ */ jsxs("span", {
															className: "text-amber-700 font-semibold",
															children: [
																"Incomplete (",
																log.db_details?.users_saved ?? 0,
																"/",
																log.db_details?.users_expected ?? 0,
																" Users, ",
																log.db_details?.props_saved ?? 0,
																"/",
																log.db_details?.props_expected ?? 0,
																" Props)"
															]
														}),
														log.db_status === "failed" && /* @__PURE__ */ jsx("span", {
															className: "text-rose-600 font-semibold",
															children: "Insertion Aborted"
														})
													]
												}), /* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-1.5",
													children: [
														/* @__PURE__ */ jsx("span", {
															className: "text-slate-400 font-medium",
															children: "Email:"
														}),
														log.email_status === "success" && /* @__PURE__ */ jsxs("span", {
															className: "text-emerald-700 font-semibold flex items-center gap-0.5",
															children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }), " Delivered"]
														}),
														log.email_status === "failed" && /* @__PURE__ */ jsxs("span", {
															className: "text-rose-600 font-semibold truncate max-w-[200px]",
															title: log.email_error || "Delivery error",
															children: [
																"Failed (",
																log.email_error || "SMTP Error",
																")"
															]
														}),
														log.email_status === "skipped" && /* @__PURE__ */ jsx("span", {
															className: "text-slate-400",
															children: "Skipped"
														})
													]
												})]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-4 text-right",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-end gap-1.5",
												children: [
													/* @__PURE__ */ jsxs(Button, {
														variant: "outline",
														size: "sm",
														onClick: () => setSelectedLog(log),
														className: "rounded-lg h-7 px-2.5 text-[11px] font-semibold text-white border-slate-200 hover:bg-slate-100 gap-1",
														children: [/* @__PURE__ */ jsx(Eye, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("span", { children: "Inspect" })]
													}),
													needsDbRecovery && /* @__PURE__ */ jsxs(Button, {
														size: "sm",
														onClick: () => handleRecoverLead(log.log_id),
														disabled: isRecovering,
														className: "rounded-lg h-7 px-2.5 text-[11px] font-semibold bg-indigo-600 hover:bg-indigo-500 text-white gap-1 shadow-sm",
														children: [/* @__PURE__ */ jsx(RotateCcw, { className: `h-3 w-3 ${isRecovering ? "animate-spin" : ""}` }), /* @__PURE__ */ jsx("span", { children: isRecovering ? "Recovering..." : "Recover Data" })]
													}),
													needsEmailResend && /* @__PURE__ */ jsxs(Button, {
														size: "sm",
														variant: "outline",
														onClick: () => handleResendEmail(log.log_id),
														disabled: isResending,
														className: "rounded-lg h-7 px-2.5 text-[11px] font-semibold border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 gap-1",
														children: [/* @__PURE__ */ jsx(Mail, { className: `h-3 w-3 ${isResending ? "animate-spin" : ""}` }), /* @__PURE__ */ jsx("span", { children: isResending ? "Sending..." : "Resend Email" })]
													})
												]
											})
										})
									]
								}, log.log_id);
							})
						})]
					})
				})
			}),
			selectedLog && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative w-full max-w-3xl max-h-[90vh] bg-slate-900 text-slate-100 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "p-5 border-b border-white/10 flex items-center justify-between bg-slate-950/60",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "h-9 w-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400",
									children: /* @__PURE__ */ jsx(ShieldAlert, { className: "h-5 w-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("h2", {
										className: "text-sm font-bold text-white font-mono",
										children: selectedLog.log_id
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
										children: selectedLog.source
									})]
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-xs text-slate-400 mt-0.5",
									children: ["Captured at ", new Date(selectedLog.created_at || selectedLog.timestamp || "").toUTCString()]
								})] })]
							}), /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setSelectedLog(null),
								className: "h-8 w-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors",
								children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "p-6 overflow-y-auto space-y-6 flex-1 text-xs",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 block",
									children: "Granular Health & Execution Breakdown"
								}), /* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [
												/* @__PURE__ */ jsxs("span", {
													className: "font-bold text-white flex items-center gap-1.5",
													children: [/* @__PURE__ */ jsx(Database, { className: "h-3.5 w-3.5 text-indigo-400" }), " Database Storage"]
												}),
												selectedLog.db_status === "success" && /* @__PURE__ */ jsxs("span", {
													className: "text-emerald-400 font-bold flex items-center gap-1",
													children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }), " Complete"]
												}),
												selectedLog.db_status === "partial" && /* @__PURE__ */ jsxs("span", {
													className: "text-amber-400 font-bold flex items-center gap-1",
													children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3" }), " Partial"]
												}),
												selectedLog.db_status === "failed" && /* @__PURE__ */ jsxs("span", {
													className: "text-rose-400 font-bold flex items-center gap-1",
													children: [/* @__PURE__ */ jsx(X, { className: "h-3 w-3" }), " Failed"]
												})
											]
										}), selectedLog.db_details && /* @__PURE__ */ jsx("div", {
											className: "text-[11px] text-slate-300 font-mono bg-black/30 p-2.5 rounded-lg overflow-x-auto",
											children: JSON.stringify(selectedLog.db_details, null, 2)
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [
												/* @__PURE__ */ jsxs("span", {
													className: "font-bold text-white flex items-center gap-1.5",
													children: [/* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5 text-indigo-400" }), " Email Notifications"]
												}),
												selectedLog.email_status === "success" && /* @__PURE__ */ jsxs("span", {
													className: "text-emerald-400 font-bold flex items-center gap-1",
													children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }), " Delivered"]
												}),
												selectedLog.email_status === "failed" && /* @__PURE__ */ jsxs("span", {
													className: "text-rose-400 font-bold flex items-center gap-1",
													children: [/* @__PURE__ */ jsx(X, { className: "h-3 w-3" }), " Failed"]
												}),
												selectedLog.email_status === "skipped" && /* @__PURE__ */ jsx("span", {
													className: "text-slate-400 font-medium",
													children: "Skipped"
												})
											]
										}), selectedLog.email_error ? /* @__PURE__ */ jsx("div", {
											className: "text-[11px] text-rose-300 bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-lg",
											children: selectedLog.email_error
										}) : /* @__PURE__ */ jsx("div", {
											className: "text-[11px] text-slate-400",
											children: "Submitter confirmation and sales alerts dispatched via SMTP."
										})]
									})]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[11px] font-bold uppercase tracking-wider text-slate-400",
										children: "Raw Submission Payload (Immutable JSON)"
									}), /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => handleCopy(JSON.stringify(selectedLog.raw_payload, null, 2), "modal_payload"),
										className: "inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-400 hover:text-indigo-300",
										children: copiedField === "modal_payload" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-emerald-400" }), /* @__PURE__ */ jsx("span", { children: "Copied!" })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("span", { children: "Copy JSON" })] })
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "relative rounded-xl bg-slate-950 p-4 border border-white/10 font-mono text-[11px] text-slate-300 overflow-x-auto max-h-72",
									children: /* @__PURE__ */ jsx("pre", { children: JSON.stringify(selectedLog.raw_payload, null, 2) })
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "p-4 border-t border-white/10 bg-slate-950/80 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "text-[11px] text-slate-400",
								children: ["IP: ", /* @__PURE__ */ jsx("span", {
									className: "font-mono text-slate-200",
									children: selectedLog.client_ip || "127.0.0.1"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [
									(selectedLog.overall_status === "failed" || selectedLog.db_status !== "success") && /* @__PURE__ */ jsxs(Button, {
										size: "sm",
										onClick: () => handleRecoverLead(selectedLog.log_id),
										disabled: recoveringIds[selectedLog.log_id],
										className: "rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs gap-1.5",
										children: [/* @__PURE__ */ jsx(RotateCcw, { className: `h-3.5 w-3.5 ${recoveringIds[selectedLog.log_id] ? "animate-spin" : ""}` }), /* @__PURE__ */ jsx("span", { children: "Recover Missing Data" })]
									}),
									(selectedLog.email_status === "failed" || selectedLog.overall_status === "partial") && /* @__PURE__ */ jsxs(Button, {
										size: "sm",
										onClick: () => handleResendEmail(selectedLog.log_id),
										disabled: resendingEmailIds[selectedLog.log_id],
										className: "rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs gap-1.5",
										children: [/* @__PURE__ */ jsx(Mail, { className: `h-3.5 w-3.5 ${resendingEmailIds[selectedLog.log_id] ? "animate-spin" : ""}` }), /* @__PURE__ */ jsx("span", { children: "Resend Confirmation Email" })]
									}),
									/* @__PURE__ */ jsx(Button, {
										variant: "outline",
										size: "sm",
										onClick: () => setSelectedLog(null),
										className: "rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold",
										children: "Close"
									})
								]
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { ControlHubLogsPage as component };
