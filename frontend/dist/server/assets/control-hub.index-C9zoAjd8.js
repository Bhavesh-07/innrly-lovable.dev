import { t as Button } from "./button-Dkpg6g2Z.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { t as Label } from "./label-DBD1bRRP.js";
import { i as getAdminAuthHeaders, u as hasPermission } from "./admin-auth-BJrXWVgX.js";
import { useEffect, useState } from "react";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, Briefcase, Building2, Calendar, ChevronDown, ChevronUp, Database, Download, Edit2, Eye, Laptop, Layers, ListFilter, Mail, MapPin, Phone, RefreshCw, Save, Search, ShieldAlert, Trash2, Users, X } from "lucide-react";
import { toast } from "sonner";
//#region src/routes/control-hub.index.tsx
var $$splitComponentImporter = () => import("./control-hub.index-B4pBp5cg.js");
var Route = createFileRoute("/control-hub/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Innrly Control Hub Console" }, {
		name: "description",
		content: "Manage and view captured marketing leads and onboarding requests."
	}] })
});
function LeadsDashboardContainer({ activeTab }) {
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
	const [viewingContact, setViewingContact] = useState(null);
	const [viewingTrial, setViewingTrial] = useState(null);
	const [viewingOnboarding, setViewingOnboarding] = useState(null);
	const [editingContact, setEditingContact] = useState(null);
	const [editingTrial, setEditingTrial] = useState(null);
	const [editingOnboarding, setEditingOnboarding] = useState(null);
	const [deleteTarget, setDeleteTarget] = useState(null);
	const [isSaving, setIsSaving] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	useEffect(() => {
		setExpandedCompanyId(null);
	}, [activeTab]);
	const fetchLeads = async () => {
		setLoading(true);
		setError(null);
		try {
			const baseUrl = "/api/leads";
			const fetchUrl = baseUrl.endsWith("/leads") ? baseUrl : `${baseUrl}/leads`;
			const response = await fetch(fetchUrl, { headers: getAdminAuthHeaders({ "Accept": "application/json" }) });
			if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
			setData(await response.json());
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
			return new Date(dateString).toLocaleDateString("en-US", {
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
		else if (activeTab === "onboarding") currentList = data.onboarding;
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
				return `"${("" + (val !== null && val !== void 0 ? val : "")).replace(/"/g, "\"\"")}"`;
			});
			csvRows.push(values.join(","));
		}
		const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
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
	const handleSaveContact = async (e) => {
		e.preventDefault();
		if (!editingContact) return;
		setIsSaving(true);
		try {
			const res = await fetch(`/api/leads/contacts/${editingContact.id}`, {
				method: "PUT",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify({
					name: editingContact.name,
					email: editingContact.email,
					company: editingContact.company,
					phone: editingContact.phone,
					properties: editingContact.properties,
					message: editingContact.message
				})
			});
			if (!res.ok) {
				const err = await res.json().catch(() => ({}));
				throw new Error(err.detail || "Failed to update contact inquiry");
			}
			toast.success("Contact inquiry updated successfully");
			setEditingContact(null);
			fetchLeads();
		} catch (err) {
			toast.error(err.message || "Failed to update contact inquiry");
		} finally {
			setIsSaving(false);
		}
	};
	const handleSaveTrial = async (e) => {
		e.preventDefault();
		if (!editingTrial) return;
		setIsSaving(true);
		try {
			const res = await fetch(`/api/leads/trials/${editingTrial.id}`, {
				method: "PUT",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify({
					name: editingTrial.name,
					email: editingTrial.email,
					company: editingTrial.company,
					role: editingTrial.role,
					phone: editingTrial.phone,
					properties: editingTrial.properties,
					pms: editingTrial.pms
				})
			});
			if (!res.ok) {
				const err = await res.json().catch(() => ({}));
				throw new Error(err.detail || "Failed to update free trial lead");
			}
			toast.success("Free trial lead updated successfully");
			setEditingTrial(null);
			fetchLeads();
		} catch (err) {
			toast.error(err.message || "Failed to update free trial lead");
		} finally {
			setIsSaving(false);
		}
	};
	const handleSaveOnboarding = async (e) => {
		e.preventDefault();
		if (!editingOnboarding) return;
		setIsSaving(true);
		try {
			const res = await fetch(`/api/leads/onboarding/${editingOnboarding.id}`, {
				method: "PUT",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify({
					company_name: editingOnboarding.company_name,
					authorized_person: editingOnboarding.authorized_person,
					email: editingOnboarding.email,
					address: editingOnboarding.address,
					city: editingOnboarding.city,
					state: editingOnboarding.state,
					zip: editingOnboarding.zip,
					mobile: editingOnboarding.mobile,
					work_phone: editingOnboarding.work_phone,
					decision_maker: editingOnboarding.decision_maker
				})
			});
			if (!res.ok) {
				const err = await res.json().catch(() => ({}));
				throw new Error(err.detail || "Failed to update onboarding record");
			}
			toast.success("Onboarding company updated successfully");
			setEditingOnboarding(null);
			fetchLeads();
		} catch (err) {
			toast.error(err.message || "Failed to update onboarding record");
		} finally {
			setIsSaving(false);
		}
	};
	const handleConfirmDelete = async () => {
		if (!deleteTarget) return;
		setIsDeleting(true);
		try {
			const endpoint = deleteTarget.type === "contacts" ? `/api/leads/contacts/${deleteTarget.id}` : deleteTarget.type === "trials" ? `/api/leads/trials/${deleteTarget.id}` : deleteTarget.type === "onboarding" ? `/api/leads/onboarding/${deleteTarget.id}` : `/api/leads/newsletters/${deleteTarget.id}`;
			const res = await fetch(endpoint, {
				method: "DELETE",
				headers: getAdminAuthHeaders()
			});
			if (!res.ok) {
				const err = await res.json().catch(() => ({}));
				throw new Error(err.detail || "Failed to delete record");
			}
			toast.success("Record deleted successfully");
			setDeleteTarget(null);
			fetchLeads();
		} catch (err) {
			toast.error(err.message || "Failed to delete record");
		} finally {
			setIsDeleting(false);
		}
	};
	const requiredPerm = {
		contacts: "contact_inquiries",
		trials: "free_trials",
		onboarding: "onboardings",
		newsletters: "newsletter_list"
	}[activeTab];
	if (!hasPermission(requiredPerm)) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-amber-200 bg-amber-50/50 p-12 text-center text-slate-700 max-w-xl mx-auto my-8 shadow-sm",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-4 shadow-sm",
				children: /* @__PURE__ */ jsx(ShieldAlert, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-lg font-bold text-slate-900 mb-1",
				children: "Module Access Restricted"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-xs text-slate-600",
				children: "You do not currently have permission to access this module. Please contact your Super Administrator."
			})
		]
	});
	const totalLeads = data.contacts.length + data.trials.length + data.onboarding.length + data.newsletters.length;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 block",
						children: "Dashboard"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-bold text-slate-800 mt-1",
						children: "Lead Capture Center"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs text-slate-400 mt-0.5",
						children: "Overview of pipelines, trials, newsletter updates, and guided onboarding."
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						onClick: fetchLeads,
						disabled: loading,
						className: "border-slate-200 hover:bg-slate-50 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9",
						children: [/* @__PURE__ */ jsx(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }), "Refresh"]
					}), /* @__PURE__ */ jsxs(Button, {
						onClick: exportCSV,
						className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 font-semibold",
						children: [/* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5" }), "Export CSV"]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 md:grid-cols-5 gap-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block",
								children: "Total Captured"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-2xl font-bold text-slate-850 block mt-1",
								children: totalLeads
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-indigo-500 font-semibold block mt-0.5",
								children: "across all tables"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block",
								children: "Contacts"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-2xl font-bold text-slate-850 block mt-1",
								children: data.contacts.length
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400 font-medium block mt-0.5",
								children: "Sales inquiries"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block",
								children: "Free Trials"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-2xl font-bold text-slate-850 block mt-1",
								children: data.trials.length
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400 font-medium block mt-0.5",
								children: "Platform trials"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block",
								children: "Onboardings"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-2xl font-bold text-slate-850 block mt-1",
								children: data.onboarding.length
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400 font-medium block mt-0.5",
								children: "Wizard completions"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm col-span-2 md:col-span-1",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block",
								children: "Newsletter"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-2xl font-bold text-slate-850 block mt-1",
								children: data.newsletters.length
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400 font-medium block mt-0.5",
								children: "Subscribers list"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-center gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative flex-1 w-full",
					children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }), /* @__PURE__ */ jsx("input", {
						type: "text",
						placeholder: "Search records by name, email, company, PMS, source...",
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						className: "w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 text-sm transition-all"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 shrink-0 text-xs",
					children: [
						/* @__PURE__ */ jsx(ListFilter, { className: "h-3.5 w-3.5 text-slate-400" }),
						/* @__PURE__ */ jsx("span", {
							className: "text-slate-400 font-medium",
							children: "Filtering by search:"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "bg-indigo-50 text-indigo-600 border border-indigo-100 font-bold px-2.5 py-0.5 rounded-full text-[10px]",
							children: searchQuery ? "Active" : "None"
						})
					]
				})]
			}),
			error && /* @__PURE__ */ jsxs("div", {
				className: "bg-red-50 border border-red-200 rounded-xl p-5 text-center my-6",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-sm text-red-700 font-bold block",
						children: "Database Fetch Failed"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs text-red-500 mt-1",
						children: error
					}),
					/* @__PURE__ */ jsx(Button, {
						onClick: fetchLeads,
						variant: "outline",
						className: "mt-4 border-red-200 text-red-700 hover:bg-red-50/80 bg-white",
						children: "Try Again"
					})
				]
			}),
			loading && !error && /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center justify-center py-20 bg-white border border-slate-200 rounded-2xl shadow-sm",
				children: [/* @__PURE__ */ jsx(RefreshCw, { className: "h-7 w-7 text-indigo-600 animate-spin" }), /* @__PURE__ */ jsx("span", {
					className: "text-xs text-slate-400 mt-2 font-medium",
					children: "Fetching lead submissions..."
				})]
			}),
			!loading && !error && /* @__PURE__ */ jsxs("div", {
				className: "bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm",
				children: [
					activeTab === "contacts" && /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-left border-collapse",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider",
								children: [
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Product Lead"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Email / Phone"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Company"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6 text-center",
										children: "Properties"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Message / Note"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Submitted"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6 text-center",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ jsx("tbody", {
								className: "divide-y divide-slate-100 text-xs text-slate-700",
								children: filterLeads(data.contacts).length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
									colSpan: 7,
									className: "py-12 text-center text-slate-400 font-medium",
									children: "No contact leads found."
								}) }) : filterLeads(data.contacts).map((lead) => /* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-slate-50/50 transition-colors",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 font-semibold text-slate-900",
											children: lead.name
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col",
												children: [/* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1 text-[11px] text-slate-800",
													children: [/* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-slate-400" }), lead.email]
												}), /* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1 text-[10px] text-slate-400 mt-0.5",
													children: [/* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 text-slate-400" }), lead.phone]
												})]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 text-slate-800",
											children: lead.company
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 text-center font-mono font-semibold text-slate-700",
											children: lead.properties || "—"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 text-slate-600 max-w-xs truncate",
											title: lead.message,
											children: lead.message || "—"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 whitespace-nowrap",
											children: /* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg font-medium",
												children: [/* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5 text-indigo-500" }), formatDate(lead.submitted_at || lead.created_at)]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 text-center",
											children: /* @__PURE__ */ jsxs("div", {
												className: "inline-flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ jsxs("button", {
														onClick: () => setViewingContact(lead),
														className: "inline-flex items-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/60 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer",
														title: "View Details",
														children: [/* @__PURE__ */ jsx(Eye, { className: "h-3 w-3" }), "View"]
													}),
													/* @__PURE__ */ jsxs("button", {
														onClick: () => setEditingContact(lead),
														className: "inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all shadow-sm cursor-pointer",
														title: "Edit Contact",
														children: [/* @__PURE__ */ jsx(Edit2, { className: "h-3 w-3" }), "Edit"]
													}),
													/* @__PURE__ */ jsxs("button", {
														onClick: () => setDeleteTarget({
															type: "contacts",
															id: lead.id,
															title: lead.name
														}),
														className: "inline-flex items-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-600 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all border border-rose-200/60 cursor-pointer",
														title: "Delete Contact",
														children: [/* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }), "Delete"]
													})
												]
											})
										})
									]
								}, lead.id))
							})]
						})
					}),
					activeTab === "trials" && /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-left border-collapse",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider",
								children: [
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Contact / Role"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Email / Phone"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Company"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6 text-center",
										children: "Properties"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "PMS System"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Submitted Date"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6 text-center",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ jsx("tbody", {
								className: "divide-y divide-slate-100 text-xs text-slate-700",
								children: filterLeads(data.trials).length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
									colSpan: 7,
									className: "py-12 text-center text-slate-400 font-medium",
									children: "No trial leads found."
								}) }) : filterLeads(data.trials).map((lead) => /* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-slate-50/50 transition-colors",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-semibold text-slate-900",
													children: lead.name
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[9px] text-indigo-600 uppercase tracking-wider font-bold mt-0.5",
													children: lead.role || "User"
												})]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col",
												children: [/* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1 text-[11px] text-slate-800",
													children: [/* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-slate-400" }), lead.email]
												}), /* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1 text-[10px] text-slate-400 mt-0.5",
													children: [/* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 text-slate-400" }), lead.phone]
												})]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 text-slate-800",
											children: lead.company
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 text-center font-mono font-semibold text-slate-700",
											children: lead.properties || "—"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 text-slate-800",
											children: /* @__PURE__ */ jsx("span", {
												className: "bg-slate-100 border border-slate-200/60 px-2 py-0.5 rounded text-[10px] font-semibold text-slate-700",
												children: lead.pms || "Not specified"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 whitespace-nowrap",
											children: /* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg font-medium",
												children: [/* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5 text-indigo-500" }), formatDate(lead.submitted_at || lead.created_at)]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 text-center",
											children: /* @__PURE__ */ jsxs("div", {
												className: "inline-flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ jsxs("button", {
														onClick: () => setViewingTrial(lead),
														className: "inline-flex items-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/60 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer",
														title: "View Details",
														children: [/* @__PURE__ */ jsx(Eye, { className: "h-3 w-3" }), "View"]
													}),
													/* @__PURE__ */ jsxs("button", {
														onClick: () => setEditingTrial(lead),
														className: "inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all shadow-sm cursor-pointer",
														title: "Edit Trial Lead",
														children: [/* @__PURE__ */ jsx(Edit2, { className: "h-3 w-3" }), "Edit"]
													}),
													/* @__PURE__ */ jsxs("button", {
														onClick: () => setDeleteTarget({
															type: "trials",
															id: lead.id,
															title: lead.name
														}),
														className: "inline-flex items-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-600 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all border border-rose-200/60 cursor-pointer",
														title: "Delete Trial Lead",
														children: [/* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }), "Delete"]
													})
												]
											})
										})
									]
								}, lead.id))
							})]
						})
					}),
					activeTab === "newsletters" && /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-left border-collapse",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider",
								children: [
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Subscriber Email"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Signup Source Placement"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Subscribed At"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6",
										children: "Status"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3.5 px-6 text-center",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ jsx("tbody", {
								className: "divide-y divide-slate-100 text-xs text-slate-700",
								children: filterLeads(data.newsletters).length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
									colSpan: 5,
									className: "py-12 text-center text-slate-400 font-medium",
									children: "No newsletter subscribers found."
								}) }) : filterLeads(data.newsletters).map((lead) => /* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-slate-50/50 transition-colors",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 font-semibold text-slate-900",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-slate-400" }), lead.email]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6",
											children: /* @__PURE__ */ jsx("span", {
												className: "bg-slate-100 text-slate-500 border border-slate-200/50 px-2 py-0.5 rounded text-[10px] font-mono",
												children: lead.sub_source || "general"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 whitespace-nowrap",
											children: /* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg font-medium",
												children: [/* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5 text-indigo-500" }), formatDate(lead.submitted_at || lead.created_at)]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6",
											children: /* @__PURE__ */ jsx("span", {
												className: "bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded text-[10px] font-bold",
												children: "Active"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3.5 px-6 text-center",
											children: /* @__PURE__ */ jsxs("button", {
												onClick: () => setDeleteTarget({
													type: "newsletters",
													id: lead.id,
													title: lead.email
												}),
												className: "inline-flex items-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-600 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all border border-rose-200/60 cursor-pointer",
												title: "Delete Subscriber",
												children: [/* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }), "Delete"]
											})
										})
									]
								}, lead.id))
							})]
						})
					}),
					activeTab === "onboarding" && /* @__PURE__ */ jsxs("div", {
						className: "p-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-[10px] text-slate-400 px-5 py-3 bg-slate-50/50 border-b border-slate-200 font-bold uppercase tracking-wider flex items-center justify-between",
							children: /* @__PURE__ */ jsxs("span", { children: [
								"Click on any company record to expand and view its Users and Properties, or click ",
								/* @__PURE__ */ jsx("strong", { children: "View" }),
								" for full modal profile."
							] })
						}), filterLeads(data.onboarding).length === 0 ? /* @__PURE__ */ jsx("div", {
							className: "py-12 text-center text-slate-400 text-xs font-semibold",
							children: "No completed onboarding records found."
						}) : /* @__PURE__ */ jsx("div", {
							className: "divide-y divide-slate-100",
							children: filterLeads(data.onboarding).map((comp) => {
								const isExpanded = expandedCompanyId === comp.id;
								const associatedUsers = data.onboarding_users?.filter((u) => u.company_id === comp.id) || [];
								const associatedProps = data.onboarding_properties?.filter((p) => p.company_id === comp.id) || [];
								return /* @__PURE__ */ jsxs("div", {
									className: "transition-all",
									children: [/* @__PURE__ */ jsxs("div", {
										onClick: () => setExpandedCompanyId(isExpanded ? null : comp.id),
										className: `flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 px-6 cursor-pointer hover:bg-slate-50 transition-colors ${isExpanded ? "bg-slate-50 border-l-4 border-indigo-600" : "border-l-4 border-transparent"}`,
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex flex-col sm:flex-row sm:items-center gap-4",
											children: [/* @__PURE__ */ jsx("div", {
												className: "h-10 w-10 shrink-0 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center",
												children: /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-indigo-600" })
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
												className: "text-sm font-bold text-slate-800 leading-tight",
												children: comp.company_name
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-1 font-medium",
												children: [
													/* @__PURE__ */ jsxs("span", {
														className: "flex items-center gap-1 text-slate-600 font-semibold",
														children: [/* @__PURE__ */ jsx(Users, { className: "h-3.5 w-3.5 text-slate-400" }), comp.authorized_person]
													}),
													/* @__PURE__ */ jsx("span", { children: "•" }),
													/* @__PURE__ */ jsxs("span", {
														className: "flex items-center gap-1",
														children: [
															/* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-slate-400" }),
															comp.city,
															", ",
															comp.state
														]
													}),
													/* @__PURE__ */ jsx("span", { children: "•" }),
													/* @__PURE__ */ jsxs("span", {
														className: "flex items-center gap-1 text-slate-700 bg-slate-100/90 border border-slate-200/70 px-2 py-0.5 rounded text-[11px] font-medium",
														children: [/* @__PURE__ */ jsx(Calendar, { className: "h-3 w-3 text-indigo-600" }), formatDate(comp.submitted_at || comp.created_at)]
													})
												]
											})] })]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between mt-3 sm:mt-0 gap-6",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-4 text-xs font-semibold",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "text-right",
													children: [/* @__PURE__ */ jsxs("span", {
														className: "text-slate-800 block",
														children: [associatedProps.length, " Properties"]
													}), /* @__PURE__ */ jsxs("span", {
														className: "text-slate-400 text-[10px] block font-medium",
														children: [associatedUsers.length, " Users"]
													})]
												}), /* @__PURE__ */ jsx("span", {
													className: "bg-indigo-50 border border-indigo-100 text-indigo-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold",
													children: comp.decision_maker === "yes" ? "Decision Maker" : "Non-DM"
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "inline-flex items-center gap-1.5",
													children: [
														/* @__PURE__ */ jsxs("button", {
															onClick: (e) => {
																e.stopPropagation();
																setViewingOnboarding(comp);
															},
															className: "inline-flex items-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/60 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer",
															title: "View Full Profile",
															children: [/* @__PURE__ */ jsx(Eye, { className: "h-3 w-3" }), "View"]
														}),
														/* @__PURE__ */ jsxs("button", {
															onClick: (e) => {
																e.stopPropagation();
																setEditingOnboarding(comp);
															},
															className: "inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all shadow-sm cursor-pointer",
															title: "Edit Onboarding Company",
															children: [/* @__PURE__ */ jsx(Edit2, { className: "h-3 w-3" }), "Edit"]
														}),
														/* @__PURE__ */ jsxs("button", {
															onClick: (e) => {
																e.stopPropagation();
																setDeleteTarget({
																	type: "onboarding",
																	id: comp.id,
																	title: comp.company_name
																});
															},
															className: "inline-flex items-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-600 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all border border-rose-200/60 cursor-pointer",
															title: "Delete Onboarding Record",
															children: [/* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }), "Delete"]
														})
													]
												}), isExpanded ? /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4 text-indigo-600" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 text-slate-400" })]
											})]
										})]
									}), isExpanded && /* @__PURE__ */ jsxs("div", {
										className: "bg-slate-50 border-t border-slate-100 px-6 py-6 space-y-6",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-slate-200 rounded-xl p-5 shadow-sm",
												children: [
													/* @__PURE__ */ jsxs("div", { children: [
														/* @__PURE__ */ jsx("h4", {
															className: "text-[9px] uppercase font-bold tracking-wider text-indigo-600 mb-2",
															children: "Corporate Office"
														}),
														/* @__PURE__ */ jsx("p", {
															className: "text-sm font-bold text-slate-800 leading-tight",
															children: comp.company_name
														}),
														/* @__PURE__ */ jsxs("p", {
															className: "text-xs text-slate-600 mt-1 flex items-start gap-1",
															children: [/* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 mt-0.5 shrink-0 text-slate-400" }), /* @__PURE__ */ jsxs("span", { children: [
																comp.address,
																/* @__PURE__ */ jsx("br", {}),
																comp.city,
																", ",
																comp.state,
																" ",
																comp.zip
															] })]
														})
													] }),
													/* @__PURE__ */ jsxs("div", { children: [
														/* @__PURE__ */ jsx("h4", {
															className: "text-[9px] uppercase font-bold tracking-wider text-indigo-600 mb-2",
															children: "Primary Contact"
														}),
														/* @__PURE__ */ jsx("p", {
															className: "text-sm font-bold text-slate-800",
															children: comp.authorized_person
														}),
														/* @__PURE__ */ jsxs("p", {
															className: "text-xs text-slate-600 mt-1 flex items-center gap-1.5",
															children: [/* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5 text-slate-400" }), comp.email]
														}),
														/* @__PURE__ */ jsxs("p", {
															className: "text-xs text-slate-600 mt-1 flex items-center gap-1.5",
															children: [
																/* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5 text-slate-400" }),
																"Mobile: ",
																comp.mobile
															]
														})
													] }),
													/* @__PURE__ */ jsxs("div", { children: [
														/* @__PURE__ */ jsx("h4", {
															className: "text-[9px] uppercase font-bold tracking-wider text-indigo-600 mb-2",
															children: "Metadata"
														}),
														/* @__PURE__ */ jsxs("p", {
															className: "text-xs text-slate-600",
															children: ["Office Phone: ", /* @__PURE__ */ jsx("span", {
																className: "text-slate-800 font-semibold",
																children: comp.work_phone || "N/A"
															})]
														}),
														/* @__PURE__ */ jsxs("p", {
															className: "text-xs text-slate-600 mt-1",
															children: ["Submission: ", /* @__PURE__ */ jsx("span", {
																className: "text-slate-800 font-semibold",
																children: formatDate(comp.submitted_at || comp.created_at)
															})]
														})
													] })
												]
											}),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h4", {
												className: "text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }), "Authorized Platform Users"]
											}), associatedUsers.length === 0 ? /* @__PURE__ */ jsx("p", {
												className: "text-xs text-slate-400 italic pl-2",
												children: "No additional team members listed."
											}) : /* @__PURE__ */ jsx("div", {
												className: "grid grid-cols-1 md:grid-cols-3 gap-4",
												children: associatedUsers.map((user) => /* @__PURE__ */ jsxs("div", {
													className: "bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm flex flex-col justify-between",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-xs font-bold text-slate-800 block",
														children: user.name
													}), /* @__PURE__ */ jsxs("div", {
														className: "mt-2 space-y-0.5",
														children: [/* @__PURE__ */ jsxs("span", {
															className: "text-[11px] text-slate-600 flex items-center gap-1",
															children: [/* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-slate-400" }), user.email]
														}), /* @__PURE__ */ jsxs("span", {
															className: "text-[11px] text-slate-600 flex items-center gap-1",
															children: [/* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 text-slate-400" }), user.phone]
														})]
													})]
												}, user.id))
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h4", {
												className: "text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-2",
												children: [
													/* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }),
													"Configured Properties (",
													associatedProps.length,
													")"
												]
											}), associatedProps.length === 0 ? /* @__PURE__ */ jsx("p", {
												className: "text-xs text-slate-400 italic pl-2",
												children: "No hotels added to the wizard."
											}) : /* @__PURE__ */ jsx("div", {
												className: "grid grid-cols-1 md:grid-cols-2 gap-4",
												children: associatedProps.map((prop) => /* @__PURE__ */ jsx("div", {
													className: "bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:border-indigo-300 transition-colors",
													children: /* @__PURE__ */ jsxs("div", { children: [
														/* @__PURE__ */ jsxs("div", {
															className: "flex items-start justify-between",
															children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
																className: "text-xs font-extrabold text-slate-800",
																children: prop.property_name
															}), /* @__PURE__ */ jsx("span", {
																className: "bg-indigo-50 border border-indigo-100 text-indigo-700 text-[8px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded ml-2",
																children: prop.brand
															})] }), /* @__PURE__ */ jsx("span", {
																className: "text-[10px] font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-200 text-slate-500 font-bold",
																children: prop.property_code
															})]
														}),
														/* @__PURE__ */ jsxs("p", {
															className: "text-[11px] text-slate-500 mt-1.5 flex items-start gap-1",
															children: [/* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3 mt-0.5 shrink-0 text-slate-400" }), prop.address]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "grid grid-cols-2 gap-4 border-t border-slate-100 pt-3 mt-3 text-[11px]",
															children: [/* @__PURE__ */ jsxs("div", { children: [
																/* @__PURE__ */ jsx("span", {
																	className: "text-slate-400 block text-[9px] uppercase font-bold tracking-wider",
																	children: "Property Manager"
																}),
																/* @__PURE__ */ jsx("span", {
																	className: "text-slate-800 block font-semibold mt-0.5",
																	children: prop.manager_name
																}),
																/* @__PURE__ */ jsx("span", {
																	className: "text-slate-500 block",
																	children: prop.manager_email
																}),
																/* @__PURE__ */ jsx("span", {
																	className: "text-slate-500 block",
																	children: prop.manager_mobile
																})
															] }), /* @__PURE__ */ jsxs("div", { children: [
																/* @__PURE__ */ jsx("span", {
																	className: "text-slate-400 block text-[9px] uppercase font-bold tracking-wider",
																	children: "Rooms & Integrations"
																}),
																/* @__PURE__ */ jsxs("span", {
																	className: "text-slate-800 block font-semibold mt-0.5",
																	children: [prop.rooms, " Rooms"]
																}),
																/* @__PURE__ */ jsxs("span", {
																	className: "text-indigo-600 block mt-0.5 font-bold",
																	children: ["PMS: ", prop.pms === "Other" ? prop.pms_other || "Other" : prop.pms]
																}),
																/* @__PURE__ */ jsxs("span", {
																	className: "text-slate-500 block",
																	children: ["Contact: ", prop.contact_person]
																})
															] })]
														})
													] })
												}, prop.id))
											})] })
										]
									})]
								}, comp.id);
							})
						})]
					})
				]
			}),
			viewingContact && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl",
									children: /* @__PURE__ */ jsx(Users, { className: "h-5 w-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full",
										children: "Contact Inquiry Details"
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-[11px] text-slate-400 font-mono",
										children: ["ID #", viewingContact.id]
									})]
								}), /* @__PURE__ */ jsx("h3", {
									className: "font-bold text-slate-900 text-lg mt-0.5",
									children: viewingContact.name
								})] })]
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => setViewingContact(null),
								className: "text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer",
								children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "p-6 space-y-5 max-h-[75vh] overflow-y-auto",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "bg-slate-50/80 border border-slate-100 rounded-2xl p-4",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
												children: "Company / Hotel"
											}), /* @__PURE__ */ jsxs("span", {
												className: "text-sm font-bold text-slate-800 block mt-1 flex items-center gap-1.5",
												children: [/* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 text-indigo-600" }), viewingContact.company]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "bg-slate-50/80 border border-slate-100 rounded-2xl p-4",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
												children: "Properties Count"
											}), /* @__PURE__ */ jsxs("span", {
												className: "text-sm font-bold text-slate-800 block mt-1 flex items-center gap-1.5 font-mono",
												children: [/* @__PURE__ */ jsx(Layers, { className: "h-4 w-4 text-indigo-600" }), viewingContact.properties || "Not specified"]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "bg-slate-50/80 border border-slate-100 rounded-2xl p-4",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
												children: "Email Address"
											}), /* @__PURE__ */ jsxs("a", {
												href: `mailto:${viewingContact.email}`,
												className: "text-sm font-semibold text-indigo-600 hover:underline block mt-1 flex items-center gap-1.5",
												children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-slate-400" }), viewingContact.email]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "bg-slate-50/80 border border-slate-100 rounded-2xl p-4",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
												children: "Phone Number"
											}), /* @__PURE__ */ jsxs("span", {
												className: "text-sm font-semibold text-slate-800 block mt-1 flex items-center gap-1.5",
												children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-slate-400" }), viewingContact.phone || "None provided"]
											})]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block mb-1.5",
									children: "Inquiry Message / Notes"
								}), /* @__PURE__ */ jsx("div", {
									className: "bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs text-slate-700 leading-relaxed whitespace-pre-wrap",
									children: viewingContact.message || /* @__PURE__ */ jsx("span", {
										className: "italic text-slate-400",
										children: "No custom message included."
									})
								})] }),
								/* @__PURE__ */ jsx("div", {
									className: "flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100",
									children: /* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
											"Submitted: ",
											formatDate(viewingContact.submitted_at || viewingContact.created_at)
										]
									})
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-end gap-3",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setViewingContact(null),
								className: "rounded-xl text-xs",
								children: "Close"
							}), /* @__PURE__ */ jsxs(Button, {
								onClick: () => {
									setEditingContact(viewingContact);
									setViewingContact(null);
								},
								className: "bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }), "Edit This Lead"]
							})]
						})
					]
				})
			}),
			viewingTrial && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl",
									children: /* @__PURE__ */ jsx(Laptop, { className: "h-5 w-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full",
										children: "Free Trial Lead Profile"
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-[11px] text-slate-400 font-mono",
										children: ["ID #", viewingTrial.id]
									})]
								}), /* @__PURE__ */ jsx("h3", {
									className: "font-bold text-slate-900 text-lg mt-0.5",
									children: viewingTrial.name
								})] })]
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => setViewingTrial(null),
								className: "text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer",
								children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "p-6 space-y-5 max-h-[75vh] overflow-y-auto",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "bg-slate-50/80 border border-slate-100 rounded-2xl p-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
											children: "Job Role / Title"
										}), /* @__PURE__ */ jsxs("span", {
											className: "text-sm font-bold text-indigo-600 block mt-1 flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4 text-indigo-500" }), viewingTrial.role || "User"]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "bg-slate-50/80 border border-slate-100 rounded-2xl p-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
											children: "Company / Organization"
										}), /* @__PURE__ */ jsxs("span", {
											className: "text-sm font-bold text-slate-800 block mt-1 flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 text-indigo-600" }), viewingTrial.company]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "bg-slate-50/80 border border-slate-100 rounded-2xl p-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
											children: "Work Email"
										}), /* @__PURE__ */ jsxs("a", {
											href: `mailto:${viewingTrial.email}`,
											className: "text-sm font-semibold text-indigo-600 hover:underline block mt-1 flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-slate-400" }), viewingTrial.email]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "bg-slate-50/80 border border-slate-100 rounded-2xl p-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
											children: "Phone Number"
										}), /* @__PURE__ */ jsxs("span", {
											className: "text-sm font-semibold text-slate-800 block mt-1 flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-slate-400" }), viewingTrial.phone || "None provided"]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "bg-slate-50/80 border border-slate-100 rounded-2xl p-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
											children: "Properties"
										}), /* @__PURE__ */ jsxs("span", {
											className: "text-sm font-bold text-slate-800 block mt-1 flex items-center gap-1.5 font-mono",
											children: [/* @__PURE__ */ jsx(Layers, { className: "h-4 w-4 text-indigo-600" }), viewingTrial.properties || "1-2"]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "bg-slate-50/80 border border-slate-100 rounded-2xl p-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
											children: "PMS System"
										}), /* @__PURE__ */ jsxs("span", {
											className: "text-sm font-bold text-slate-800 block mt-1 flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(Database, { className: "h-4 w-4 text-indigo-600" }), /* @__PURE__ */ jsx("span", {
												className: "bg-slate-200/70 text-slate-800 px-2 py-0.5 rounded text-xs",
												children: viewingTrial.pms || "Not specified"
											})]
										})]
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100",
								children: /* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
										"Requested Trial On: ",
										formatDate(viewingTrial.submitted_at || viewingTrial.created_at)
									]
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-end gap-3",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setViewingTrial(null),
								className: "rounded-xl text-xs",
								children: "Close"
							}), /* @__PURE__ */ jsxs(Button, {
								onClick: () => {
									setEditingTrial(viewingTrial);
									setViewingTrial(null);
								},
								className: "bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }), "Edit This Trial"]
							})]
						})
					]
				})
			}),
			viewingOnboarding && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200 rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl",
									children: /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full",
										children: "Onboarding Application Profile"
									}), /* @__PURE__ */ jsx("span", {
										className: "bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold px-2 py-0.5 rounded-full",
										children: viewingOnboarding.decision_maker === "yes" ? "Decision Maker" : "Non-DM"
									})]
								}), /* @__PURE__ */ jsx("h3", {
									className: "font-bold text-slate-900 text-lg mt-0.5",
									children: viewingOnboarding.company_name
								})] })]
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => setViewingOnboarding(null),
								className: "text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer",
								children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "p-6 space-y-6 max-h-[75vh] overflow-y-auto",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h4", {
									className: "text-[10px] uppercase font-bold tracking-wider text-indigo-600 mb-3 flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx(Building2, { className: "h-3.5 w-3.5" }), "Corporate Details & Authorized Signer"]
								}), /* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50/80 border border-slate-100 rounded-2xl p-4",
									children: [
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
												children: "Authorized Signer"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-xs font-bold text-slate-800 block mt-1",
												children: viewingOnboarding.authorized_person
											}),
											/* @__PURE__ */ jsx("a", {
												href: `mailto:${viewingOnboarding.email}`,
												className: "text-[11px] text-indigo-600 hover:underline block mt-0.5",
												children: viewingOnboarding.email
											})
										] }),
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
												children: "Phone Numbers"
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "text-xs text-slate-700 block mt-1",
												children: ["Mobile: ", /* @__PURE__ */ jsx("strong", { children: viewingOnboarding.mobile || "N/A" })]
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "text-xs text-slate-700 block",
												children: ["Work: ", /* @__PURE__ */ jsx("strong", { children: viewingOnboarding.work_phone || "N/A" })]
											})
										] }),
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-[10px] text-slate-400 uppercase font-bold tracking-wider block",
												children: "Headquarters Address"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-xs text-slate-700 block mt-1",
												children: viewingOnboarding.address || "N/A"
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "text-xs text-slate-700 block",
												children: [
													viewingOnboarding.city,
													", ",
													viewingOnboarding.state,
													" ",
													viewingOnboarding.zip
												]
											})
										] })
									]
								})] }),
								(() => {
									const associatedUsers = data.onboarding_users?.filter((u) => u.company_id === viewingOnboarding.id) || [];
									return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h4", {
										className: "text-[10px] uppercase font-bold tracking-wider text-indigo-600 mb-3 flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ jsx(Users, { className: "h-3.5 w-3.5" }),
											"Authorized Platform Users (",
											associatedUsers.length,
											")"
										]
									}), associatedUsers.length === 0 ? /* @__PURE__ */ jsx("p", {
										className: "text-xs text-slate-400 italic bg-slate-50 p-4 rounded-xl",
										children: "No additional team members listed."
									}) : /* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",
										children: associatedUsers.map((user) => /* @__PURE__ */ jsxs("div", {
											className: "bg-slate-50/80 border border-slate-200/70 rounded-xl p-3",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "text-xs font-bold text-slate-800 block",
													children: user.name
												}),
												/* @__PURE__ */ jsxs("span", {
													className: "text-[11px] text-slate-600 block mt-1 flex items-center gap-1",
													children: [/* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-slate-400" }), user.email]
												}),
												/* @__PURE__ */ jsxs("span", {
													className: "text-[11px] text-slate-600 block flex items-center gap-1",
													children: [/* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 text-slate-400" }), user.phone]
												})
											]
										}, user.id))
									})] });
								})(),
								(() => {
									const associatedProps = data.onboarding_properties?.filter((p) => p.company_id === viewingOnboarding.id) || [];
									return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h4", {
										className: "text-[10px] uppercase font-bold tracking-wider text-indigo-600 mb-3 flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ jsx(Layers, { className: "h-3.5 w-3.5" }),
											"Configured Hotel Properties (",
											associatedProps.length,
											")"
										]
									}), associatedProps.length === 0 ? /* @__PURE__ */ jsx("p", {
										className: "text-xs text-slate-400 italic bg-slate-50 p-4 rounded-xl",
										children: "No hotel properties added in the wizard."
									}) : /* @__PURE__ */ jsx("div", {
										className: "space-y-3",
										children: associatedProps.map((prop) => /* @__PURE__ */ jsxs("div", {
											className: "bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-start justify-between",
													children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
														className: "text-xs font-extrabold text-slate-900",
														children: prop.property_name
													}), /* @__PURE__ */ jsx("span", {
														className: "bg-indigo-50 border border-indigo-100 text-indigo-700 text-[9px] uppercase font-bold px-2 py-0.5 rounded ml-2",
														children: prop.brand
													})] }), /* @__PURE__ */ jsx("span", {
														className: "text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600 font-bold",
														children: prop.property_code
													})]
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "text-xs text-slate-500 mt-1 flex items-center gap-1",
													children: [/* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3 text-slate-400" }), prop.address]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-3 border-t border-slate-200/60 text-xs",
													children: [/* @__PURE__ */ jsxs("div", { children: [
														/* @__PURE__ */ jsx("span", {
															className: "text-[9px] uppercase font-bold text-slate-400 block",
															children: "General Manager"
														}),
														/* @__PURE__ */ jsx("span", {
															className: "font-semibold text-slate-800 block mt-0.5",
															children: prop.manager_name
														}),
														/* @__PURE__ */ jsxs("span", {
															className: "text-slate-500 block",
															children: [
																prop.manager_email,
																" • ",
																prop.manager_mobile
															]
														})
													] }), /* @__PURE__ */ jsxs("div", { children: [
														/* @__PURE__ */ jsx("span", {
															className: "text-[9px] uppercase font-bold text-slate-400 block",
															children: "Rooms & System"
														}),
														/* @__PURE__ */ jsxs("span", {
															className: "font-semibold text-slate-800 block mt-0.5",
															children: [prop.rooms, " Rooms"]
														}),
														/* @__PURE__ */ jsxs("span", {
															className: "text-indigo-600 font-bold block",
															children: ["PMS: ", prop.pms === "Other" ? prop.pms_other || "Other" : prop.pms]
														})
													] })]
												})
											]
										}, prop.id))
									})] });
								})(),
								/* @__PURE__ */ jsx("div", {
									className: "flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100",
									children: /* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
											"Completed Onboarding On: ",
											formatDate(viewingOnboarding.submitted_at || viewingOnboarding.created_at)
										]
									})
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-end gap-3",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setViewingOnboarding(null),
								className: "rounded-xl text-xs",
								children: "Close"
							}), /* @__PURE__ */ jsxs(Button, {
								onClick: () => {
									setEditingOnboarding(viewingOnboarding);
									setViewingOnboarding(null);
								},
								className: "bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }), "Edit Company Record"]
							})]
						})
					]
				})
			}),
			editingContact && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "p-2 bg-indigo-100 text-indigo-700 rounded-xl",
								children: /* @__PURE__ */ jsx(Users, { className: "h-5 w-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-bold text-slate-900 text-base",
								children: "Edit Contact Inquiry"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-500",
								children: "Update lead contact information and notes."
							})] })]
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => setEditingContact(null),
							className: "text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer",
							children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
						})]
					}), /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSaveContact,
						className: "p-6 space-y-4 max-h-[75vh] overflow-y-auto",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "contact-name",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Full Name *"
									}), /* @__PURE__ */ jsx(Input, {
										id: "contact-name",
										value: editingContact.name,
										onChange: (e) => setEditingContact({
											...editingContact,
											name: e.target.value
										}),
										className: "text-xs rounded-xl",
										required: true
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "contact-email",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Email Address *"
									}), /* @__PURE__ */ jsx(Input, {
										id: "contact-email",
										type: "email",
										value: editingContact.email,
										onChange: (e) => setEditingContact({
											...editingContact,
											email: e.target.value
										}),
										className: "text-xs rounded-xl",
										required: true
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "contact-phone",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Phone Number"
									}), /* @__PURE__ */ jsx(Input, {
										id: "contact-phone",
										value: editingContact.phone || "",
										onChange: (e) => setEditingContact({
											...editingContact,
											phone: e.target.value
										}),
										className: "text-xs rounded-xl"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "contact-company",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Hotel / Company Name *"
									}), /* @__PURE__ */ jsx(Input, {
										id: "contact-company",
										value: editingContact.company,
										onChange: (e) => setEditingContact({
											...editingContact,
											company: e.target.value
										}),
										className: "text-xs rounded-xl",
										required: true
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ jsx(Label, {
											htmlFor: "contact-properties",
											className: "text-xs font-semibold text-slate-700 mb-1.5 block",
											children: "Number of Properties / Portfolio Shape"
										}), /* @__PURE__ */ jsx(Input, {
											id: "contact-properties",
											value: editingContact.properties || "",
											onChange: (e) => setEditingContact({
												...editingContact,
												properties: e.target.value
											}),
											placeholder: "e.g. 3-5 hotels, Select-Service",
											className: "text-xs rounded-xl"
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "contact-message",
								className: "text-xs font-semibold text-slate-700 mb-1.5 block",
								children: "Inquiry Message / Notes"
							}), /* @__PURE__ */ jsx("textarea", {
								id: "contact-message",
								rows: 4,
								value: editingContact.message || "",
								onChange: (e) => setEditingContact({
									...editingContact,
									message: e.target.value
								}),
								placeholder: "Customer requirements or background notes...",
								className: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 leading-relaxed resize-none"
							})] }),
							/* @__PURE__ */ jsxs("div", {
								className: "pt-4 border-t border-slate-100 flex items-center justify-end gap-3",
								children: [/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setEditingContact(null),
									className: "rounded-xl text-xs",
									children: "Cancel"
								}), /* @__PURE__ */ jsxs(Button, {
									type: "submit",
									disabled: isSaving,
									className: "bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5",
									children: [isSaving ? /* @__PURE__ */ jsx(RefreshCw, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }), isSaving ? "Saving..." : "Save Changes"]
								})]
							})
						]
					})]
				})
			}),
			editingTrial && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "p-2 bg-indigo-100 text-indigo-700 rounded-xl",
								children: /* @__PURE__ */ jsx(Laptop, { className: "h-5 w-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-bold text-slate-900 text-base",
								children: "Edit Free Trial Lead"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-500",
								children: "Update trial applicant info, properties, and PMS stack."
							})] })]
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => setEditingTrial(null),
							className: "text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer",
							children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
						})]
					}), /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSaveTrial,
						className: "p-6 space-y-4 max-h-[75vh] overflow-y-auto",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "trial-name",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Full Name *"
								}), /* @__PURE__ */ jsx(Input, {
									id: "trial-name",
									value: editingTrial.name,
									onChange: (e) => setEditingTrial({
										...editingTrial,
										name: e.target.value
									}),
									className: "text-xs rounded-xl",
									required: true
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "trial-email",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Work Email *"
								}), /* @__PURE__ */ jsx(Input, {
									id: "trial-email",
									type: "email",
									value: editingTrial.email,
									onChange: (e) => setEditingTrial({
										...editingTrial,
										email: e.target.value
									}),
									className: "text-xs rounded-xl",
									required: true
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "trial-company",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Company / Organization *"
								}), /* @__PURE__ */ jsx(Input, {
									id: "trial-company",
									value: editingTrial.company,
									onChange: (e) => setEditingTrial({
										...editingTrial,
										company: e.target.value
									}),
									className: "text-xs rounded-xl",
									required: true
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "trial-role",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Job Role / Title"
								}), /* @__PURE__ */ jsx(Input, {
									id: "trial-role",
									value: editingTrial.role || "",
									onChange: (e) => setEditingTrial({
										...editingTrial,
										role: e.target.value
									}),
									placeholder: "e.g. General Manager, CFO",
									className: "text-xs rounded-xl"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "trial-phone",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Phone Number"
								}), /* @__PURE__ */ jsx(Input, {
									id: "trial-phone",
									value: editingTrial.phone || "",
									onChange: (e) => setEditingTrial({
										...editingTrial,
										phone: e.target.value
									}),
									className: "text-xs rounded-xl"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "trial-properties",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Number of Properties"
								}), /* @__PURE__ */ jsx(Input, {
									id: "trial-properties",
									value: editingTrial.properties || "",
									onChange: (e) => setEditingTrial({
										...editingTrial,
										properties: e.target.value
									}),
									placeholder: "e.g. 1-2 properties",
									className: "text-xs rounded-xl"
								})] }),
								/* @__PURE__ */ jsxs("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "trial-pms",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "PMS Integration"
									}), /* @__PURE__ */ jsx(Input, {
										id: "trial-pms",
										value: editingTrial.pms || "",
										onChange: (e) => setEditingTrial({
											...editingTrial,
											pms: e.target.value
										}),
										placeholder: "e.g. OPERA, Cloudbeds, Mews, Inn-Flow",
										className: "text-xs rounded-xl"
									})]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "pt-4 border-t border-slate-100 flex items-center justify-end gap-3",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setEditingTrial(null),
								className: "rounded-xl text-xs",
								children: "Cancel"
							}), /* @__PURE__ */ jsxs(Button, {
								type: "submit",
								disabled: isSaving,
								className: "bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5",
								children: [isSaving ? /* @__PURE__ */ jsx(RefreshCw, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }), isSaving ? "Saving..." : "Save Changes"]
							})]
						})]
					})]
				})
			}),
			editingOnboarding && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "p-2 bg-indigo-100 text-indigo-700 rounded-xl",
								children: /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-bold text-slate-900 text-base",
								children: "Edit Onboarding Company"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-500",
								children: "Update corporate address, authorized signer, and contact details."
							})] })]
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => setEditingOnboarding(null),
							className: "text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer",
							children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
						})]
					}), /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSaveOnboarding,
						className: "p-6 space-y-4 max-h-[75vh] overflow-y-auto",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "onb-company",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Company Name *"
								}), /* @__PURE__ */ jsx(Input, {
									id: "onb-company",
									value: editingOnboarding.company_name,
									onChange: (e) => setEditingOnboarding({
										...editingOnboarding,
										company_name: e.target.value
									}),
									className: "text-xs rounded-xl",
									required: true
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "onb-authorized",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Authorized Signer / Contact *"
								}), /* @__PURE__ */ jsx(Input, {
									id: "onb-authorized",
									value: editingOnboarding.authorized_person,
									onChange: (e) => setEditingOnboarding({
										...editingOnboarding,
										authorized_person: e.target.value
									}),
									className: "text-xs rounded-xl",
									required: true
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "onb-email",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Corporate Email *"
								}), /* @__PURE__ */ jsx(Input, {
									id: "onb-email",
									type: "email",
									value: editingOnboarding.email,
									onChange: (e) => setEditingOnboarding({
										...editingOnboarding,
										email: e.target.value
									}),
									className: "text-xs rounded-xl",
									required: true
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "onb-decision",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Decision Maker Status"
								}), /* @__PURE__ */ jsxs("select", {
									id: "onb-decision",
									value: editingOnboarding.decision_maker,
									onChange: (e) => setEditingOnboarding({
										...editingOnboarding,
										decision_maker: e.target.value
									}),
									className: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs bg-white text-slate-900 focus:outline-none focus:border-indigo-500",
									children: [/* @__PURE__ */ jsx("option", {
										value: "yes",
										children: "Yes (Primary Decision Maker)"
									}), /* @__PURE__ */ jsx("option", {
										value: "no",
										children: "No (Representative / Manager)"
									})]
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "onb-mobile",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Mobile Phone"
								}), /* @__PURE__ */ jsx(Input, {
									id: "onb-mobile",
									value: editingOnboarding.mobile || "",
									onChange: (e) => setEditingOnboarding({
										...editingOnboarding,
										mobile: e.target.value
									}),
									className: "text-xs rounded-xl"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "onb-work",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Office / Work Phone"
								}), /* @__PURE__ */ jsx(Input, {
									id: "onb-work",
									value: editingOnboarding.work_phone || "",
									onChange: (e) => setEditingOnboarding({
										...editingOnboarding,
										work_phone: e.target.value
									}),
									className: "text-xs rounded-xl"
								})] }),
								/* @__PURE__ */ jsxs("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "onb-address",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Street Address"
									}), /* @__PURE__ */ jsx(Input, {
										id: "onb-address",
										value: editingOnboarding.address || "",
										onChange: (e) => setEditingOnboarding({
											...editingOnboarding,
											address: e.target.value
										}),
										className: "text-xs rounded-xl"
									})]
								}),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "onb-city",
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "City"
								}), /* @__PURE__ */ jsx(Input, {
									id: "onb-city",
									value: editingOnboarding.city || "",
									onChange: (e) => setEditingOnboarding({
										...editingOnboarding,
										city: e.target.value
									}),
									className: "text-xs rounded-xl"
								})] }),
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "onb-state",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "State"
									}), /* @__PURE__ */ jsx(Input, {
										id: "onb-state",
										value: editingOnboarding.state || "",
										onChange: (e) => setEditingOnboarding({
											...editingOnboarding,
											state: e.target.value
										}),
										className: "text-xs rounded-xl"
									})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "onb-zip",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Zip"
									}), /* @__PURE__ */ jsx(Input, {
										id: "onb-zip",
										value: editingOnboarding.zip || "",
										onChange: (e) => setEditingOnboarding({
											...editingOnboarding,
											zip: e.target.value
										}),
										className: "text-xs rounded-xl"
									})] })]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "pt-4 border-t border-slate-100 flex items-center justify-end gap-3",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setEditingOnboarding(null),
								className: "rounded-xl text-xs",
								children: "Cancel"
							}), /* @__PURE__ */ jsxs(Button, {
								type: "submit",
								disabled: isSaving,
								className: "bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5",
								children: [isSaving ? /* @__PURE__ */ jsx(RefreshCw, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }), isSaving ? "Saving..." : "Save Changes"]
							})]
						})]
					})]
				})
			}),
			deleteTarget && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200 rounded-3xl w-full max-w-md shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "p-3 bg-rose-100 text-rose-700 rounded-2xl",
								children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-bold text-slate-900 text-base",
								children: "Confirm Deletion"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-500",
								children: "This action cannot be undone."
							})] })]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-xs text-slate-650 leading-relaxed",
							children: [
								"Are you sure you want to permanently delete record for",
								" ",
								/* @__PURE__ */ jsx("strong", {
									className: "text-slate-900",
									children: deleteTarget.title
								}),
								"?"
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "pt-3 border-t border-slate-100 flex items-center justify-end gap-3",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setDeleteTarget(null),
								className: "rounded-xl text-xs",
								children: "Cancel"
							}), /* @__PURE__ */ jsxs(Button, {
								type: "button",
								onClick: handleConfirmDelete,
								disabled: isDeleting,
								className: "bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5",
								children: [isDeleting ? /* @__PURE__ */ jsx(RefreshCw, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }), isDeleting ? "Deleting..." : "Delete Permanently"]
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Route as n, LeadsDashboardContainer as t };
