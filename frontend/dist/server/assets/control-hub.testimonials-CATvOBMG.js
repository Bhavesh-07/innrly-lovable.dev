import { t as Button } from "./button-Dkpg6g2Z.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { t as Label } from "./label-DBD1bRRP.js";
import { i as getAdminAuthHeaders, u as hasPermission } from "./admin-auth-BJrXWVgX.js";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, Edit2, MessageSquareQuote, Plus, Quote, RefreshCw, Save, Search, ShieldAlert, Star, Trash2, Upload, XCircle } from "lucide-react";
import { toast } from "sonner";
//#region src/routes/control-hub.testimonials.tsx?tsr-split=component
var PAGE_OPTIONS = [
	{
		value: "homepage",
		label: "Homepage Testimonials"
	},
	{
		value: "testimonials-global",
		label: "Global Testimonial 1 (Mina Patel)"
	},
	{
		value: "testimonials-global-2",
		label: "Global Testimonial 2 (Regional Manager)"
	},
	{
		value: "testimonials-global-3",
		label: "Global Testimonial 3 (Aviraj Patel)"
	},
	{
		value: "pricing",
		label: "Pricing Page"
	},
	{
		value: "extended-stay",
		label: "Extended Stay Industry"
	},
	{
		value: "full-service",
		label: "Full Service Industry"
	},
	{
		value: "select-service",
		label: "Select Service Industry"
	},
	{
		value: "about",
		label: "About Page"
	},
	{
		value: "reconciliation",
		label: "Reconciliation Solution"
	},
	{
		value: "operations-automation",
		label: "Operations Automation"
	},
	{
		value: "innrly-shift",
		label: "Innrly Shift"
	},
	{
		value: "innrly-pay",
		label: "Innrly Pay"
	},
	{
		value: "financial-control",
		label: "Financial Control"
	},
	{
		value: "expense-entries",
		label: "Expense Entries"
	},
	{
		value: "document-vault",
		label: "Document Vault"
	},
	{
		value: "business-intelligence",
		label: "Business Intelligence"
	},
	{
		value: "case-studies-midwest-portfolio",
		label: "Case Study: Midwest Portfolio"
	},
	{
		value: "case-studies-urban-full-service",
		label: "Case Study: Urban Full-Service"
	},
	{
		value: "case-studies-boutique-group",
		label: "Case Study: Boutique Group"
	},
	{
		value: "case-studies-hilton",
		label: "Case Study: Hilton Management"
	},
	{
		value: "case-studies-extended-stay",
		label: "Case Study: Extended Stay"
	},
	{
		value: "general",
		label: "General / Other Pages"
	}
];
function ControlHubTestimonialsPage() {
	const [testimonials, setTestimonials] = useState([]);
	const [loading, setLoading] = useState(false);
	const [saving, setSaving] = useState(false);
	const [uploadingAvatar, setUploadingAvatar] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedPageFilter, setSelectedPageFilter] = useState("all");
	const [selectedStatusFilter, setSelectedStatusFilter] = useState("all");
	const [editingItem, setEditingItem] = useState(null);
	const [deleteConfirmId, setDeleteConfirmId] = useState(null);
	const API_BASE = typeof window === "undefined" ? process.env.BACKEND_URL || "http://127.0.0.1:8000" : "/api";
	useEffect(() => {
		if (hasPermission("testimonials")) fetchTestimonials();
	}, []);
	if (!hasPermission("testimonials")) return /* @__PURE__ */ jsxs("div", {
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
				children: "You do not currently have permission to access the Testimonials Manager. Please contact your Super Administrator."
			})
		]
	});
	async function fetchTestimonials() {
		setLoading(true);
		try {
			const res = await fetch(`${API_BASE}/admin/testimonials`, { headers: getAdminAuthHeaders({ "Accept": "application/json" }) });
			if (res.ok) setTestimonials(await res.json());
			else {
				const publicRes = await fetch(`${API_BASE}/testimonials`);
				if (publicRes.ok) setTestimonials(await publicRes.json());
				else toast.error("Failed to load testimonials.");
			}
		} catch (e) {
			toast.error("Network error while loading testimonials.");
		} finally {
			setLoading(false);
		}
	}
	async function handleAvatarUpload(e) {
		const file = e.target.files?.[0];
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			toast.error("Please select a valid image file.");
			return;
		}
		setUploadingAvatar(true);
		const formData = new FormData();
		formData.append("file", file);
		try {
			const res = await fetch(`${API_BASE}/admin/testimonials/upload-avatar`, {
				method: "POST",
				headers: getAdminAuthHeaders(),
				body: formData
			});
			if (res.ok) {
				const data = await res.json();
				const avatarUrl = data.url.startsWith("http") ? data.url : `${API_BASE}${data.url}`;
				setEditingItem((prev) => prev ? {
					...prev,
					avatar: avatarUrl
				} : null);
				toast.success("Avatar uploaded successfully!");
			} else {
				const err = await res.json().catch(() => ({}));
				toast.error(err.detail || "Failed to upload avatar image.");
			}
		} catch (e) {
			toast.error("Network error uploading avatar.");
		} finally {
			setUploadingAvatar(false);
		}
	}
	async function handleSave(e) {
		e.preventDefault();
		if (!editingItem) return;
		if (!editingItem.name.trim()) {
			toast.error("Author name is required.");
			return;
		}
		if (!editingItem.title.trim()) {
			toast.error("Author title/role is required.");
			return;
		}
		if (!editingItem.quote.trim()) {
			toast.error("Quote content is required.");
			return;
		}
		setSaving(true);
		try {
			const isHp = editingItem.page === "homepage" || editingItem.is_homepage;
			const payload = {
				...editingItem,
				is_homepage: isHp
			};
			const res = await fetch(`${API_BASE}/admin/testimonials`, {
				method: "POST",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify(payload)
			});
			if (res.ok) {
				toast.success(editingItem.id ? "Testimonial updated successfully!" : "Testimonial created successfully!");
				setEditingItem(null);
				fetchTestimonials();
			} else {
				const err = await res.json().catch(() => ({}));
				toast.error(err.detail || "Failed to save testimonial.");
			}
		} catch (e) {
			toast.error("Network error while saving testimonial.");
		} finally {
			setSaving(false);
		}
	}
	async function handleDelete() {
		if (!deleteConfirmId) return;
		try {
			if ((await fetch(`${API_BASE}/admin/testimonials/${deleteConfirmId}`, {
				method: "DELETE",
				headers: getAdminAuthHeaders()
			})).ok) {
				toast.success("Testimonial deleted.");
				setTestimonials((prev) => prev.filter((item) => item.id !== deleteConfirmId));
			} else toast.error("Failed to delete testimonial.");
		} catch (e) {
			toast.error("Network error deleting testimonial.");
		} finally {
			setDeleteConfirmId(null);
		}
	}
	async function toggleStatus(item) {
		const nextStatus = item.status === "active" ? "inactive" : "active";
		try {
			const updated = {
				...item,
				status: nextStatus
			};
			if ((await fetch(`${API_BASE}/admin/testimonials`, {
				method: "POST",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify(updated)
			})).ok) {
				setTestimonials((prev) => prev.map((t) => t.id === item.id ? {
					...t,
					status: nextStatus
				} : t));
				toast.success(`Testimonial marked as ${nextStatus}`);
			}
		} catch (e) {
			toast.error("Failed to toggle status.");
		}
	}
	const filteredTestimonials = testimonials.filter((item) => {
		const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.company && item.company.toLowerCase().includes(searchQuery.toLowerCase()) || item.quote.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesPage = selectedPageFilter === "all" || item.page === selectedPageFilter;
		const matchesStatus = selectedStatusFilter === "all" || item.status === selectedStatusFilter;
		return matchesSearch && matchesPage && matchesStatus;
	});
	const totalCount = testimonials.length;
	const activeCount = testimonials.filter((t) => t.status === "active").length;
	const inactiveCount = testimonials.filter((t) => t.status === "inactive").length;
	const homepageCount = testimonials.filter((t) => t.page === "homepage" || t.is_homepage).length;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 block",
						children: "Content Management"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-2xl font-bold text-slate-800 mt-1 flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(MessageSquareQuote, { className: "h-6 w-6 text-indigo-600" }), "Testimonials Manager"]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs text-slate-400 mt-0.5",
						children: "Manage customer feedback, executive quotes, star ratings, and page-specific placement."
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						onClick: fetchTestimonials,
						disabled: loading,
						className: "border-slate-200 hover:bg-slate-50 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9",
						children: [/* @__PURE__ */ jsx(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }), "Refresh"]
					}), /* @__PURE__ */ jsxs(Button, {
						onClick: () => setEditingItem({
							page: selectedPageFilter === "all" ? "homepage" : selectedPageFilter,
							quote: "",
							name: "",
							title: "",
							company: "",
							avatar: "",
							rating: 5,
							is_homepage: true,
							display_order: testimonials.length + 1,
							status: "active"
						}),
						className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 font-semibold",
						children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), "Add Testimonial"]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ jsxs("button", {
						onClick: () => setSelectedStatusFilter("all"),
						className: `text-left bg-white border rounded-xl p-4 shadow-sm transition-all cursor-pointer hover:shadow-md ${selectedStatusFilter === "all" ? "ring-2 ring-slate-800 border-transparent bg-slate-50/50" : "border-slate-200"}`,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block",
									children: "Total Testimonials"
								}), /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-slate-400" })]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-2xl font-bold text-slate-800 block mt-1",
								children: totalCount
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-indigo-600 font-semibold block mt-0.5",
								children: "Click to view all"
							})
						]
					}),
					/* @__PURE__ */ jsxs("button", {
						onClick: () => setSelectedStatusFilter("active"),
						className: `text-left bg-white border rounded-xl p-4 shadow-sm transition-all cursor-pointer hover:shadow-md ${selectedStatusFilter === "active" ? "ring-2 ring-emerald-500 border-transparent bg-emerald-50/30" : "border-slate-200"}`,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] text-emerald-600 font-bold uppercase tracking-wider block",
									children: "Active Published"
								}), /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse" })]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-2xl font-bold text-emerald-600 block mt-1",
								children: activeCount
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400 font-medium block mt-0.5",
								children: "Live on website"
							})
						]
					}),
					/* @__PURE__ */ jsxs("button", {
						onClick: () => setSelectedStatusFilter("inactive"),
						className: `text-left bg-white border rounded-xl p-4 shadow-sm transition-all cursor-pointer hover:shadow-md ${selectedStatusFilter === "inactive" ? "ring-2 ring-amber-500 border-transparent bg-amber-50/30" : "border-slate-200"}`,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] text-amber-600 font-bold uppercase tracking-wider block",
									children: "Inactive / Hidden"
								}), /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-amber-500" })]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-2xl font-bold text-amber-600 block mt-1",
								children: inactiveCount
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400 font-medium block mt-0.5",
								children: "Not approved / Drafts"
							})
						]
					}),
					/* @__PURE__ */ jsxs("button", {
						onClick: () => {
							setSelectedPageFilter("homepage");
							setSelectedStatusFilter("all");
						},
						className: `text-left bg-white border rounded-xl p-4 shadow-sm transition-all cursor-pointer hover:shadow-md ${selectedPageFilter === "homepage" ? "ring-2 ring-indigo-500 border-transparent bg-indigo-50/30" : "border-slate-200"}`,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] text-indigo-600 font-bold uppercase tracking-wider block",
									children: "Homepage Placement"
								}), /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-indigo-500" })]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-2xl font-bold text-indigo-600 block mt-1",
								children: homepageCount
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[10px] text-slate-400 font-medium block mt-0.5",
								children: "Primary social proof"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-3 w-full lg:w-auto",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200/80 shadow-2xs",
						children: [
							/* @__PURE__ */ jsxs("button", {
								onClick: () => setSelectedStatusFilter("all"),
								className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${selectedStatusFilter === "all" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"}`,
								children: ["All Status", /* @__PURE__ */ jsx("span", {
									className: "text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 font-bold",
									children: testimonials.length
								})]
							}),
							/* @__PURE__ */ jsxs("button", {
								onClick: () => setSelectedStatusFilter("active"),
								className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${selectedStatusFilter === "active" ? "bg-emerald-600 text-white shadow-sm" : "text-emerald-700 hover:bg-emerald-50/60"}`,
								children: [
									/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }),
									"Active",
									/* @__PURE__ */ jsx("span", {
										className: `text-[10px] px-1.5 py-0.2 rounded-full font-bold ${selectedStatusFilter === "active" ? "bg-emerald-700 text-white" : "bg-emerald-100 text-emerald-800"}`,
										children: activeCount
									})
								]
							}),
							/* @__PURE__ */ jsxs("button", {
								onClick: () => setSelectedStatusFilter("inactive"),
								className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${selectedStatusFilter === "inactive" ? "bg-amber-600 text-white shadow-sm" : "text-amber-700 hover:bg-amber-50/60"}`,
								children: [
									/* @__PURE__ */ jsx(XCircle, { className: "h-3 w-3" }),
									"Inactive",
									/* @__PURE__ */ jsx("span", {
										className: `text-[10px] px-1.5 py-0.2 rounded-full font-bold ${selectedStatusFilter === "inactive" ? "bg-amber-700 text-white" : "bg-amber-100 text-amber-800"}`,
										children: inactiveCount
									})
								]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex items-center gap-2",
						children: /* @__PURE__ */ jsxs("select", {
							value: selectedPageFilter,
							onChange: (e) => setSelectedPageFilter(e.target.value),
							className: "bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all cursor-pointer shadow-2xs",
							children: [/* @__PURE__ */ jsxs("option", {
								value: "all",
								children: [
									"🌐 All Pages (",
									testimonials.length,
									")"
								]
							}), PAGE_OPTIONS.map((p) => {
								const count = testimonials.filter((t) => t.page === p.value).length;
								return /* @__PURE__ */ jsxs("option", {
									value: p.value,
									children: [
										p.label,
										" (",
										count,
										")"
									]
								}, p.value);
							})]
						})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative w-full lg:w-72",
					children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }), /* @__PURE__ */ jsx("input", {
						type: "text",
						placeholder: "Search author, company, quote...",
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						className: "w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 text-xs transition-all shadow-2xs"
					})]
				})]
			}),
			loading && /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center justify-center py-20 bg-white border border-slate-200 rounded-2xl shadow-sm",
				children: [/* @__PURE__ */ jsx(RefreshCw, { className: "h-7 w-7 text-indigo-600 animate-spin" }), /* @__PURE__ */ jsx("span", {
					className: "text-xs text-slate-400 mt-2 font-medium",
					children: "Loading testimonials..."
				})]
			}),
			!loading && filteredTestimonials.length === 0 && /* @__PURE__ */ jsxs("div", {
				className: "bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm",
				children: [
					/* @__PURE__ */ jsx(Quote, { className: "h-10 w-10 text-slate-300 mx-auto mb-3" }),
					/* @__PURE__ */ jsx("h3", {
						className: "text-slate-800 font-bold text-base",
						children: "No testimonials found"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-slate-500 text-xs mt-1",
						children: searchQuery ? "Try tweaking your search query." : "Click below to add your first testimonial."
					}),
					/* @__PURE__ */ jsxs(Button, {
						onClick: () => setEditingItem({
							page: selectedPageFilter === "all" ? "homepage" : selectedPageFilter,
							quote: "",
							name: "",
							title: "",
							company: "",
							avatar: "",
							rating: 5,
							is_homepage: true,
							display_order: testimonials.length + 1,
							status: "active"
						}),
						className: "mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold",
						children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5 mr-1" }), "Add Testimonial"]
					})
				]
			}),
			!loading && filteredTestimonials.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: filteredTestimonials.map((item) => {
					const initial = item.name ? item.name.charAt(0).toUpperCase() : "?";
					return /* @__PURE__ */ jsxs("div", {
						className: `bg-white border rounded-2xl p-5 shadow-sm flex flex-col justify-between transition-all hover:shadow-md ${item.status === "active" ? "border-slate-200" : "border-amber-200 bg-amber-50/20"}`,
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-2 mb-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: `text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${item.page === "homepage" ? "bg-indigo-50 text-indigo-700 border border-indigo-100" : "bg-slate-100 text-slate-700"}`,
									children: item.page
								}), item.display_order ? /* @__PURE__ */ jsxs("span", {
									className: "text-[10px] text-slate-400 font-medium bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100",
									children: ["Order: #", item.display_order]
								}) : null]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex text-amber-400",
									children: Array.from({ length: item.rating || 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 fill-current" }, i))
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => toggleStatus(item),
									className: `text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 cursor-pointer transition-colors ${item.status === "active" ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100" : "bg-amber-100 text-amber-800 hover:bg-amber-200"}`,
									title: "Click to toggle status",
									children: item.status === "active" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-emerald-600" }), "Active"] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(XCircle, { className: "h-3 w-3 text-amber-600" }), "Inactive"] })
								})]
							})]
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-slate-700 text-sm italic leading-relaxed mb-4",
							children: [
								"\"",
								item.quote,
								"\""
							]
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "pt-3 border-t border-slate-100 flex items-center justify-between",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [item.avatar ? /* @__PURE__ */ jsx("img", {
									src: item.avatar,
									alt: item.name,
									className: "h-9 w-9 rounded-full object-cover border border-slate-200 shadow-xs"
								}) : /* @__PURE__ */ jsx("div", {
									className: "h-9 w-9 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-xs",
									children: initial
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "text-xs font-bold text-slate-900",
									children: item.name
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-[11px] text-slate-500 font-medium",
									children: [
										item.title,
										" ",
										item.company ? `· ${item.company}` : ""
									]
								})] })]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ jsx("button", {
									onClick: () => setEditingItem(item),
									className: "p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer",
									title: "Edit",
									children: /* @__PURE__ */ jsx(Edit2, { className: "h-4 w-4" })
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => item.id && setDeleteConfirmId(item.id),
									className: "p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer",
									title: "Delete",
									children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
								})]
							})]
						})]
					}, item.id);
				})
			}),
			editingItem && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "p-2 bg-indigo-100 text-indigo-700 rounded-xl",
								children: /* @__PURE__ */ jsx(Quote, { className: "h-5 w-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-bold text-slate-900 text-base",
								children: editingItem.id ? "Edit Testimonial" : "Create New Testimonial"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-500",
								children: "Configure quote text, author info, ratings, and target page display."
							})] })]
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => setEditingItem(null),
							className: "text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer",
							children: "✕"
						})]
					}), /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSave,
						className: "p-6 space-y-4 max-h-[75vh] overflow-y-auto",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "page",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Target Page Section"
									}), /* @__PURE__ */ jsx("select", {
										id: "page",
										value: editingItem.page,
										onChange: (e) => setEditingItem({
											...editingItem,
											page: e.target.value
										}),
										className: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs bg-white text-slate-900 focus:outline-none focus:border-indigo-500",
										children: PAGE_OPTIONS.map((p) => /* @__PURE__ */ jsx("option", {
											value: p.value,
											children: p.label
										}, p.value))
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "name",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Author Full Name *"
									}), /* @__PURE__ */ jsx(Input, {
										id: "name",
										placeholder: "e.g. Kate-Key or Mrs. Aman Dhillon",
										value: editingItem.name,
										onChange: (e) => setEditingItem({
											...editingItem,
											name: e.target.value
										}),
										className: "text-xs rounded-xl",
										required: true
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "title",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Role / Title *"
									}), /* @__PURE__ */ jsx(Input, {
										id: "title",
										placeholder: "e.g. VP of Operations or Managing Director",
										value: editingItem.title,
										onChange: (e) => setEditingItem({
											...editingItem,
											title: e.target.value
										}),
										className: "text-xs rounded-xl",
										required: true
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "company",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Company / Portfolio Details (Optional)"
									}), /* @__PURE__ */ jsx(Input, {
										id: "company",
										placeholder: "e.g. Horizon Group · 9 hotels",
										value: editingItem.company || "",
										onChange: (e) => setEditingItem({
											...editingItem,
											company: e.target.value
										}),
										className: "text-xs rounded-xl"
									})] })
								]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "quote",
								className: "text-xs font-semibold text-slate-700 mb-1.5 block",
								children: "Testimonial Quote Content *"
							}), /* @__PURE__ */ jsx("textarea", {
								id: "quote",
								rows: 4,
								placeholder: "Enter customer feedback or executive quote...",
								value: editingItem.quote,
								onChange: (e) => setEditingItem({
									...editingItem,
									quote: e.target.value
								}),
								className: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 leading-relaxed resize-none",
								required: true
							})] }),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "rating",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Rating (Stars)"
									}), /* @__PURE__ */ jsxs("select", {
										id: "rating",
										value: editingItem.rating || 5,
										onChange: (e) => setEditingItem({
											...editingItem,
											rating: parseInt(e.target.value)
										}),
										className: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs bg-white text-slate-900 focus:outline-none focus:border-indigo-500",
										children: [
											/* @__PURE__ */ jsx("option", {
												value: 5,
												children: "5 Stars ⭐⭐⭐⭐⭐"
											}),
											/* @__PURE__ */ jsx("option", {
												value: 4,
												children: "4 Stars ⭐⭐⭐⭐"
											}),
											/* @__PURE__ */ jsx("option", {
												value: 3,
												children: "3 Stars ⭐⭐⭐"
											})
										]
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "display_order",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Display Order #"
									}), /* @__PURE__ */ jsx(Input, {
										id: "display_order",
										type: "number",
										value: editingItem.display_order || 0,
										onChange: (e) => setEditingItem({
											...editingItem,
											display_order: parseInt(e.target.value) || 0
										}),
										className: "text-xs rounded-xl"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "status",
										className: "text-xs font-semibold text-slate-700 mb-1.5 block",
										children: "Publication Status"
									}), /* @__PURE__ */ jsxs("select", {
										id: "status",
										value: editingItem.status || "active",
										onChange: (e) => setEditingItem({
											...editingItem,
											status: e.target.value
										}),
										className: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs bg-white text-slate-900 focus:outline-none focus:border-indigo-500",
										children: [/* @__PURE__ */ jsx("option", {
											value: "active",
											children: "Active (Published)"
										}), /* @__PURE__ */ jsx("option", {
											value: "inactive",
											children: "Inactive (Draft)"
										})]
									})] })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pt-2 border-t border-slate-100",
								children: [/* @__PURE__ */ jsx(Label, {
									className: "text-xs font-semibold text-slate-700 mb-1.5 block",
									children: "Author Avatar Image"
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-4",
									children: [editingItem.avatar ? /* @__PURE__ */ jsx("img", {
										src: editingItem.avatar,
										alt: "Avatar Preview",
										className: "h-12 w-12 rounded-full object-cover border border-slate-200 shadow-xs shrink-0"
									}) : /* @__PURE__ */ jsx("div", {
										className: "h-12 w-12 rounded-full bg-slate-100 border border-slate-200 text-slate-500 font-bold text-base flex items-center justify-center shrink-0",
										children: editingItem.name ? editingItem.name.charAt(0).toUpperCase() : "?"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1 space-y-2",
										children: [/* @__PURE__ */ jsx(Input, {
											placeholder: "Image URL or upload custom file...",
											value: editingItem.avatar || "",
											onChange: (e) => setEditingItem({
												...editingItem,
												avatar: e.target.value
											}),
											className: "text-xs rounded-xl"
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsxs("label", {
												className: "text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg cursor-pointer transition-colors inline-flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ jsx(Upload, { className: "h-3.5 w-3.5" }),
													uploadingAvatar ? "Uploading..." : "Upload Avatar File",
													/* @__PURE__ */ jsx("input", {
														type: "file",
														accept: "image/*",
														onChange: handleAvatarUpload,
														className: "hidden",
														disabled: uploadingAvatar
													})
												]
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[11px] text-slate-400",
												children: "Supported: JPG, PNG, WEBP"
											})]
										})]
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-end gap-3 pt-6 border-t border-slate-100",
								children: [/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setEditingItem(null),
									className: "text-xs rounded-xl px-4 py-2 cursor-pointer",
									children: "Cancel"
								}), /* @__PURE__ */ jsxs(Button, {
									type: "submit",
									disabled: saving,
									className: "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl px-5 py-2 flex items-center gap-2 cursor-pointer",
									children: [/* @__PURE__ */ jsx(Save, { className: "h-4 w-4" }), saving ? "Saving..." : "Save Testimonial"]
								})]
							})
						]
					})]
				})
			}),
			deleteConfirmId && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-150",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200 rounded-3xl p-6 max-w-md w-full shadow-2xl text-center space-y-4",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "h-12 w-12 bg-rose-100 text-rose-600 rounded-2xl mx-auto flex items-center justify-center",
							children: /* @__PURE__ */ jsx(Trash2, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-base font-bold text-slate-900",
							children: "Delete Testimonial?"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-slate-500 mt-1",
							children: "Are you sure you want to delete this testimonial? This action cannot be undone."
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-center gap-3 pt-2",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setDeleteConfirmId(null),
								className: "text-xs rounded-xl px-4 py-2 cursor-pointer",
								children: "Cancel"
							}), /* @__PURE__ */ jsx(Button, {
								onClick: handleDelete,
								className: "bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-xl px-4 py-2 cursor-pointer",
								children: "Delete"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { ControlHubTestimonialsPage as component };
