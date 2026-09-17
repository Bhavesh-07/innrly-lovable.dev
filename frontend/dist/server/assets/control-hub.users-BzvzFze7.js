import { t as Button } from "./button-Dkpg6g2Z.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { t as Label } from "./label-DBD1bRRP.js";
import { c as getAdminUser, d as isSuperAdmin, i as getAdminAuthHeaders, l as getApiBaseUrl, t as AVAILABLE_MODULES } from "./admin-auth-5LzGtRF4.js";
import { t as Switch } from "./switch-Cn1w-cIH.js";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, Check, Edit2, Eye, EyeOff, Layers, Mail, Plus, RefreshCw, Search, ShieldAlert, ShieldCheck, Sparkles, Trash2, User, UserCheck, UserX, Users, X } from "lucide-react";
import { toast } from "sonner";
//#region src/routes/control-hub.users.tsx?tsr-split=component
var INITIAL_FORM_STATE = {
	name: "",
	username: "",
	email: "",
	password: "",
	role: "normal_user",
	permissions: ["contact_inquiries", "free_trials"],
	status: "active"
};
function ControlHubUsersPage() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [roleFilter, setRoleFilter] = useState("all");
	const [statusFilter, setStatusFilter] = useState("all");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);
	const [formData, setFormData] = useState(INITIAL_FORM_STATE);
	const [showPassword, setShowPassword] = useState(false);
	const [deleteConfirmUser, setDeleteConfirmUser] = useState(null);
	const currentUser = getAdminUser();
	const superAdminAllowed = isSuperAdmin();
	useEffect(() => {
		if (superAdminAllowed) fetchUsers();
	}, [superAdminAllowed]);
	async function fetchUsers() {
		setLoading(true);
		try {
			const baseUrl = getApiBaseUrl();
			const res = await fetch(`${baseUrl}/admin/users`, { headers: getAdminAuthHeaders({ Accept: "application/json" }) });
			if (res.ok) setUsers(await res.json());
			else toast.error("Failed to load user directory.");
		} catch (err) {
			console.error(err);
			toast.error("Network error while loading users.");
		} finally {
			setLoading(false);
		}
	}
	const handleOpenCreateModal = () => {
		setIsEditMode(false);
		setFormData({
			...INITIAL_FORM_STATE,
			password: generateRandomPassword()
		});
		setShowPassword(true);
		setIsModalOpen(true);
	};
	const handleOpenEditModal = (user) => {
		setIsEditMode(true);
		setFormData({
			id: user.id,
			name: user.name || "",
			username: user.username,
			email: user.email || "",
			password: "",
			role: user.role,
			permissions: user.role === "super_admin" ? ["all"] : user.permissions || [],
			status: user.status || "active"
		});
		setShowPassword(false);
		setIsModalOpen(true);
	};
	const generateRandomPassword = () => {
		const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";
		let pwd = "";
		for (let i = 0; i < 10; i++) pwd += chars.charAt(Math.floor(Math.random() * 62));
		return pwd;
	};
	const handleTogglePermission = (key) => {
		if (formData.role === "super_admin") return;
		setFormData((prev) => {
			const updated = prev.permissions.includes(key) ? prev.permissions.filter((p) => p !== key) : [...prev.permissions, key];
			return {
				...prev,
				permissions: updated
			};
		});
	};
	const handleSelectAllPermissions = () => {
		if (formData.role === "super_admin") return;
		setFormData((prev) => ({
			...prev,
			permissions: AVAILABLE_MODULES.map((m) => m.key)
		}));
	};
	const handleClearAllPermissions = () => {
		if (formData.role === "super_admin") return;
		setFormData((prev) => ({
			...prev,
			permissions: []
		}));
	};
	const handleSaveUser = async (e) => {
		e.preventDefault();
		if (!formData.name.trim() || !formData.username.trim()) {
			toast.error("Name and Username are required.");
			return;
		}
		if (!isEditMode && (!formData.password || formData.password.length < 6)) {
			toast.error("Password must be at least 6 characters long.");
			return;
		}
		if (formData.role === "normal_user" && formData.permissions.length === 0) {
			toast.error("Please grant access to at least one module for this user.");
			return;
		}
		setSaving(true);
		const baseUrl = getApiBaseUrl();
		try {
			if (isEditMode && formData.id) {
				const updatePayload = {
					name: formData.name.trim(),
					email: formData.email.trim() || null,
					role: formData.role,
					permissions: formData.role === "super_admin" ? ["all"] : formData.permissions,
					status: formData.status
				};
				if (formData.password.trim()) updatePayload.password = formData.password.trim();
				const res = await fetch(`${baseUrl}/admin/users/${formData.id}`, {
					method: "PUT",
					headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
					body: JSON.stringify(updatePayload)
				});
				const data = await res.json();
				if (res.ok) {
					toast.success("User updated successfully!");
					setIsModalOpen(false);
					fetchUsers();
				} else toast.error(data.detail || "Failed to update user.");
			} else {
				const createPayload = {
					name: formData.name.trim(),
					username: formData.username.trim(),
					email: formData.email.trim() || null,
					password: formData.password.trim(),
					role: formData.role,
					permissions: formData.role === "super_admin" ? ["all"] : formData.permissions,
					status: formData.status
				};
				const res = await fetch(`${baseUrl}/admin/users`, {
					method: "POST",
					headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
					body: JSON.stringify(createPayload)
				});
				const data = await res.json();
				if (res.ok) {
					toast.success(`User '${formData.username}' created successfully!`);
					setIsModalOpen(false);
					fetchUsers();
				} else toast.error(data.detail || "Failed to create user.");
			}
		} catch (err) {
			console.error(err);
			toast.error("An error occurred while saving the user.");
		} finally {
			setSaving(false);
		}
	};
	const handleToggleStatus = async (user) => {
		if (user.username === currentUser) {
			toast.error("You cannot change the status of your own active account.");
			return;
		}
		const newStatus = user.status === "active" ? "inactive" : "active";
		const baseUrl = getApiBaseUrl();
		try {
			const res = await fetch(`${baseUrl}/admin/users/${user.id}`, {
				method: "PUT",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify({ status: newStatus })
			});
			if (res.ok) {
				toast.success(`User ${user.username} is now ${newStatus}.`);
				fetchUsers();
			} else {
				const data = await res.json();
				toast.error(data.detail || "Failed to toggle status.");
			}
		} catch (err) {
			toast.error("Network error while updating user status.");
		}
	};
	const handleDeleteUser = async () => {
		if (!deleteConfirmUser || !deleteConfirmUser.id) return;
		const baseUrl = getApiBaseUrl();
		try {
			const res = await fetch(`${baseUrl}/admin/users/${deleteConfirmUser.id}`, {
				method: "DELETE",
				headers: getAdminAuthHeaders()
			});
			if (res.ok) {
				toast.success(`User '${deleteConfirmUser.username}' deleted.`);
				setDeleteConfirmUser(null);
				fetchUsers();
			} else {
				const data = await res.json();
				toast.error(data.detail || "Failed to delete user.");
			}
		} catch (err) {
			toast.error("Network error while deleting user.");
		}
	};
	if (!superAdminAllowed) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-rose-200 bg-rose-50/50 p-12 text-center text-slate-700 max-w-2xl mx-auto my-12 shadow-sm",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto w-12 h-12 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 mb-4 shadow-sm",
				children: /* @__PURE__ */ jsx(ShieldAlert, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-xl font-bold text-slate-900 mb-2",
				children: "Access Denied"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-sm text-slate-600 mb-6",
				children: "The User Management module is strictly reserved for Super Administrators. Your current role does not have permission to manage platform accounts."
			})
		]
	});
	const filteredUsers = users.filter((u) => {
		const matchesSearch = u.name && u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.username.toLowerCase().includes(searchQuery.toLowerCase()) || u.email && u.email.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesRole = roleFilter === "all" ? true : u.role === roleFilter;
		const matchesStatus = statusFilter === "all" ? true : (u.status || "active") === statusFilter;
		return matchesSearch && matchesRole && matchesStatus;
	});
	const totalUsers = users.length;
	const activeUsers = users.filter((u) => u.status === "active").length;
	const superAdmins = users.filter((u) => u.role === "super_admin").length;
	const normalUsers = users.filter((u) => u.role === "normal_user").length;
	const marketingModules = AVAILABLE_MODULES.filter((m) => m.group === "Marketing & Leads");
	const configModules = AVAILABLE_MODULES.filter((m) => m.group === "Site Content & Config");
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-8 max-w-7xl mx-auto",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2.5 mb-1",
					children: [/* @__PURE__ */ jsx("div", {
						className: "h-7 w-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-sm",
						children: /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" })
					}), /* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-bold tracking-tight text-slate-900",
						children: "User Management"
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-slate-500",
					children: "Create administrators, manage normal user credentials, and assign granular module permissions."
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						size: "sm",
						onClick: fetchUsers,
						disabled: loading,
						className: "flex items-center gap-2 text-white border-slate-200 hover:bg-slate-50",
						children: [/* @__PURE__ */ jsx(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }), /* @__PURE__ */ jsx("span", { children: "Refresh" })]
					}), /* @__PURE__ */ jsxs(Button, {
						onClick: handleOpenCreateModal,
						className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Add New User" })]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-slate-400",
							children: "Total Accounts"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-2xl font-extrabold text-slate-900 mt-1",
							children: totalUsers
						})] }), /* @__PURE__ */ jsx("div", {
							className: "h-11 w-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100",
							children: /* @__PURE__ */ jsx(Users, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-slate-400",
							children: "Active Users"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-2xl font-extrabold text-emerald-600 mt-1",
							children: activeUsers
						})] }), /* @__PURE__ */ jsx("div", {
							className: "h-11 w-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100",
							children: /* @__PURE__ */ jsx(UserCheck, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-slate-400",
							children: "Super Admins"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-2xl font-extrabold text-indigo-700 mt-1",
							children: superAdmins
						})] }), /* @__PURE__ */ jsx("div", {
							className: "h-11 w-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100",
							children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-slate-400",
							children: "Standard Users"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-2xl font-extrabold text-slate-700 mt-1",
							children: normalUsers
						})] }), /* @__PURE__ */ jsx("div", {
							className: "h-11 w-11 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-200",
							children: /* @__PURE__ */ jsx(Layers, { className: "h-5 w-5" })
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative w-full md:w-80",
					children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }), /* @__PURE__ */ jsx(Input, {
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						placeholder: "Search by name, username, email...",
						className: "pl-10 text-sm border-slate-200 focus-visible:ring-indigo-500"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-3 w-full md:w-auto",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1.5 text-xs text-slate-500",
						children: [/* @__PURE__ */ jsx("span", { children: "Role:" }), /* @__PURE__ */ jsxs("select", {
							value: roleFilter,
							onChange: (e) => setRoleFilter(e.target.value),
							className: "rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 focus:border-indigo-500 focus:outline-none",
							children: [
								/* @__PURE__ */ jsx("option", {
									value: "all",
									children: "All Roles"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "super_admin",
									children: "Super Admins"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "normal_user",
									children: "Users"
								})
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1.5 text-xs text-slate-500",
						children: [/* @__PURE__ */ jsx("span", { children: "Status:" }), /* @__PURE__ */ jsxs("select", {
							value: statusFilter,
							onChange: (e) => setStatusFilter(e.target.value),
							className: "rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 focus:border-indigo-500 focus:outline-none",
							children: [
								/* @__PURE__ */ jsx("option", {
									value: "all",
									children: "All Status"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "active",
									children: "Active Only"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "inactive",
									children: "Inactive Only"
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden",
				children: loading ? /* @__PURE__ */ jsxs("div", {
					className: "p-12 text-center text-slate-400",
					children: [/* @__PURE__ */ jsx(RefreshCw, { className: "h-6 w-6 animate-spin mx-auto mb-2 text-indigo-600" }), /* @__PURE__ */ jsx("p", {
						className: "text-sm font-medium",
						children: "Loading user accounts..."
					})]
				}) : filteredUsers.length === 0 ? /* @__PURE__ */ jsxs("div", {
					className: "p-12 text-center text-slate-400",
					children: [
						/* @__PURE__ */ jsx(UserX, { className: "h-8 w-8 mx-auto mb-2 text-slate-300" }),
						/* @__PURE__ */ jsx("p", {
							className: "text-base font-semibold text-slate-700",
							children: "No users found"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm mt-1",
							children: "Try adjusting your search criteria or add a new user."
						})
					]
				}) : /* @__PURE__ */ jsx("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ jsxs("table", {
						className: "w-full text-left text-sm text-slate-600",
						children: [/* @__PURE__ */ jsx("thead", {
							className: "bg-slate-50/75 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200",
							children: /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4",
									children: "User"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4",
									children: "Email"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4",
									children: "Role"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4",
									children: "Module Permissions"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4",
									children: "Status"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4",
									children: "Last Login"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4 text-right",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ jsx("tbody", {
							className: "divide-y divide-slate-100",
							children: filteredUsers.map((user) => {
								const isCurrent = user.username === currentUser;
								const isSuper = user.role === "super_admin";
								const perms = Array.isArray(user.permissions) ? user.permissions : [];
								return /* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-slate-50/50 transition-colors",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "px-6 py-4 whitespace-nowrap",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ jsx("div", {
													className: `h-9 w-9 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm ${isSuper ? "bg-indigo-100 text-indigo-700 border border-indigo-200" : "bg-slate-100 text-slate-700 border border-slate-200"}`,
													children: (user.name || user.username).charAt(0).toUpperCase()
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
													className: "font-semibold text-slate-900 flex items-center gap-1.5",
													children: [/* @__PURE__ */ jsx("span", { children: user.name || user.username }), isCurrent && /* @__PURE__ */ jsx("span", {
														className: "text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-medium border border-emerald-200",
														children: "You"
													})]
												}), /* @__PURE__ */ jsxs("div", {
													className: "text-xs text-slate-400 font-mono",
													children: ["@", user.username]
												})] })]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "px-6 py-4 whitespace-nowrap text-xs text-slate-600",
											children: user.email ? /* @__PURE__ */ jsxs("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5 text-slate-400" }), user.email]
											}) : /* @__PURE__ */ jsx("span", {
												className: "text-slate-400 italic",
												children: "None"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "px-6 py-4 whitespace-nowrap",
											children: isSuper ? /* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200",
												children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5" }), "Super Admin"]
											}) : /* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200",
												children: [/* @__PURE__ */ jsx(User, { className: "h-3.5 w-3.5 text-slate-500" }), "User"]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "px-6 py-4",
											children: isSuper ? /* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200",
												children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }), "All Modules (Full Access)"]
											}) : perms.length === 0 ? /* @__PURE__ */ jsx("span", {
												className: "text-xs text-rose-500 font-medium",
												children: "No permissions"
											}) : /* @__PURE__ */ jsxs("div", {
												className: "flex flex-wrap gap-1 max-w-xs",
												children: [perms.slice(0, 3).map((pkey) => {
													return /* @__PURE__ */ jsx("span", {
														className: "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200",
														children: AVAILABLE_MODULES.find((m) => m.key === pkey)?.label || pkey
													}, pkey);
												}), perms.length > 3 && /* @__PURE__ */ jsxs("span", {
													className: "inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-500 border border-slate-200",
													children: [
														"+",
														perms.length - 3,
														" more"
													]
												})]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "px-6 py-4 whitespace-nowrap",
											children: /* @__PURE__ */ jsxs("button", {
												type: "button",
												onClick: () => handleToggleStatus(user),
												disabled: isCurrent,
												className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${user.status === "active" ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100" : "bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100"} ${isCurrent ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`,
												title: isCurrent ? "Cannot deactivate yourself" : "Click to toggle status",
												children: [/* @__PURE__ */ jsx("span", { className: `h-1.5 w-1.5 rounded-full ${user.status === "active" ? "bg-emerald-500" : "bg-rose-500"}` }), user.status === "active" ? "Active" : "Inactive"]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "px-6 py-4 whitespace-nowrap text-xs text-slate-500",
											children: user.last_login_at ? new Date(user.last_login_at).toLocaleString(void 0, {
												dateStyle: "short",
												timeStyle: "short"
											}) : /* @__PURE__ */ jsx("span", {
												className: "text-slate-400 italic",
												children: "Never"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "px-6 py-4 whitespace-nowrap text-right text-xs",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-end gap-1.5",
												children: [/* @__PURE__ */ jsx("button", {
													type: "button",
													onClick: () => handleOpenEditModal(user),
													className: "p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer",
													title: "Edit User & Permissions",
													children: /* @__PURE__ */ jsx(Edit2, { className: "h-4 w-4" })
												}), /* @__PURE__ */ jsx("button", {
													type: "button",
													onClick: () => setDeleteConfirmUser(user),
													disabled: isCurrent,
													className: `p-1.5 rounded-lg transition-colors ${isCurrent ? "text-slate-300 cursor-not-allowed" : "text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"}`,
													title: isCurrent ? "Cannot delete own account" : "Delete User",
													children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
												})]
											})
										})
									]
								}, user.id || user.username);
							})
						})]
					})
				})
			}),
			isModalOpen && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "h-8 w-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100",
								children: isEditMode ? /* @__PURE__ */ jsx(Edit2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "text-lg font-bold text-slate-900",
								children: isEditMode ? "Edit Administrator / User" : "Add New Administrator / User"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-500",
								children: isEditMode ? "Update account credentials and module access" : "Configure login credentials and select permitted modules"
							})] })]
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setIsModalOpen(false),
							className: "text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors",
							children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
						})]
					}), /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSaveUser,
						className: "flex-1 overflow-y-auto p-6 space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ jsx(Label, {
											className: "text-xs font-semibold text-slate-700",
											children: "Full Name *"
										}), /* @__PURE__ */ jsx(Input, {
											value: formData.name,
											onChange: (e) => setFormData({
												...formData,
												name: e.target.value
											}),
											placeholder: "e.g. Rachel Adams",
											required: true,
											className: "text-sm"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-1.5",
										children: [
											/* @__PURE__ */ jsx(Label, {
												className: "text-xs font-semibold text-slate-700",
												children: "Username *"
											}),
											/* @__PURE__ */ jsx(Input, {
												value: formData.username,
												onChange: (e) => setFormData({
													...formData,
													username: e.target.value
												}),
												placeholder: "e.g. rachel.adams",
												disabled: isEditMode,
												required: true,
												className: "text-sm font-mono"
											}),
											isEditMode && /* @__PURE__ */ jsx("span", {
												className: "text-[10px] text-slate-400",
												children: "Username cannot be altered"
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ jsx(Label, {
											className: "text-xs font-semibold text-slate-700",
											children: "Email Address"
										}), /* @__PURE__ */ jsx(Input, {
											type: "email",
											value: formData.email,
											onChange: (e) => setFormData({
												...formData,
												email: e.target.value
											}),
											placeholder: "e.g. rachel@innrly.com",
											className: "text-sm"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx(Label, {
												className: "text-xs font-semibold text-slate-700",
												children: isEditMode ? "Password (leave blank to keep)" : "Password *"
											}), !isEditMode && /* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => setFormData({
													...formData,
													password: generateRandomPassword()
												}),
												className: "text-[11px] font-semibold text-indigo-600 hover:text-indigo-700",
												children: "Generate Random"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "relative",
											children: [/* @__PURE__ */ jsx(Input, {
												type: showPassword ? "text" : "password",
												value: formData.password,
												onChange: (e) => setFormData({
													...formData,
													password: e.target.value
												}),
												placeholder: isEditMode ? "••••••••••••" : "Min 6 characters",
												required: !isEditMode,
												className: "text-sm pr-10 font-mono"
											}), /* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => setShowPassword(!showPassword),
												tabIndex: -1,
												className: "absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600",
												children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
											})]
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										className: "text-xs font-semibold text-slate-700",
										children: "Account Role"
									}), /* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-2 gap-2",
										children: [/* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => setFormData({
												...formData,
												role: "normal_user"
											}),
											className: `p-3 rounded-xl border text-left transition-all cursor-pointer ${formData.role === "normal_user" ? "border-indigo-600 bg-indigo-50/50 text-indigo-900 ring-1 ring-indigo-600/20" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`,
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-1.5 font-semibold text-xs mb-0.5",
												children: [/* @__PURE__ */ jsx(User, { className: "h-3.5 w-3.5 text-indigo-600" }), /* @__PURE__ */ jsx("span", { children: "User" })]
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[10px] text-slate-500 leading-tight",
												children: "Custom module access"
											})]
										}), /* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => setFormData({
												...formData,
												role: "super_admin",
												permissions: ["all"]
											}),
											className: `p-3 rounded-xl border text-left transition-all cursor-pointer ${formData.role === "super_admin" ? "border-indigo-600 bg-indigo-50/50 text-indigo-900 ring-1 ring-indigo-600/20" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`,
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-1.5 font-semibold text-xs mb-0.5",
												children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-indigo-600" }), /* @__PURE__ */ jsx("span", { children: "Super Admin" })]
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[10px] text-slate-500 leading-tight",
												children: "Full access to all modules"
											})]
										})]
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2 flex flex-col justify-between",
									children: [/* @__PURE__ */ jsx(Label, {
										className: "text-xs font-semibold text-slate-700",
										children: "Account Status"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx("span", { className: `h-2.5 w-2.5 rounded-full ${formData.status === "active" ? "bg-emerald-500" : "bg-slate-300"}` }), /* @__PURE__ */ jsx("span", {
												className: "text-xs font-medium text-slate-800",
												children: formData.status === "active" ? "Active Account" : "Inactive (Locked)"
											})]
										}), /* @__PURE__ */ jsx(Switch, {
											checked: formData.status === "active",
											onCheckedChange: (checked) => setFormData({
												...formData,
												status: checked ? "active" : "inactive"
											})
										})]
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between border-b border-slate-100 pb-2",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "text-xs font-bold uppercase tracking-wider text-slate-800",
										children: "Module Access Permissions"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-xs text-slate-500",
										children: formData.role === "super_admin" ? "Super Administrators automatically have unrestricted access to all modules." : "Select which sections of the Control Hub this user can view and manage."
									})] }), formData.role !== "super_admin" && /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-xs",
										children: [
											/* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: handleSelectAllPermissions,
												className: "text-indigo-600 hover:text-indigo-800 font-semibold",
												children: "Select All"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-slate-300",
												children: "|"
											}),
											/* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: handleClearAllPermissions,
												className: "text-slate-500 hover:text-slate-700 font-semibold",
												children: "Clear All"
											})
										]
									})]
								}), formData.role === "super_admin" ? /* @__PURE__ */ jsxs("div", {
									className: "p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex items-center gap-3 text-indigo-900",
									children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5 text-indigo-600 shrink-0" }), /* @__PURE__ */ jsx("p", {
										className: "text-xs",
										children: "Super Administrator has full permission to all 8 modules and exclusive access to User Management."
									})]
								}) : /* @__PURE__ */ jsxs("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2",
										children: "Marketing & Leads"
									}), /* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
										children: marketingModules.map((mod) => {
											const isChecked = formData.permissions.includes(mod.key);
											return /* @__PURE__ */ jsxs("label", {
												onClick: () => handleTogglePermission(mod.key),
												className: `flex items-center gap-3 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${isChecked ? "border-indigo-500 bg-indigo-50/40 text-indigo-950 font-semibold shadow-xs" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`,
												children: [/* @__PURE__ */ jsx("div", {
													className: `h-4 w-4 rounded flex items-center justify-center border transition-colors ${isChecked ? "bg-indigo-600 border-indigo-600 text-white" : "border-slate-300 bg-white"}`,
													children: isChecked && /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" })
												}), /* @__PURE__ */ jsx("span", {
													className: "flex-1",
													children: mod.label
												})]
											}, mod.key);
										})
									})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2",
										children: "Site Content & Config"
									}), /* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
										children: configModules.map((mod) => {
											const isChecked = formData.permissions.includes(mod.key);
											return /* @__PURE__ */ jsxs("label", {
												onClick: () => handleTogglePermission(mod.key),
												className: `flex items-center gap-3 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${isChecked ? "border-indigo-500 bg-indigo-50/40 text-indigo-950 font-semibold shadow-xs" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`,
												children: [/* @__PURE__ */ jsx("div", {
													className: `h-4 w-4 rounded flex items-center justify-center border transition-colors ${isChecked ? "bg-indigo-600 border-indigo-600 text-white" : "border-slate-300 bg-white"}`,
													children: isChecked && /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" })
												}), /* @__PURE__ */ jsx("span", {
													className: "flex-1",
													children: mod.label
												})]
											}, mod.key);
										})
									})] })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-end gap-3 pt-4 border-t border-slate-100",
								children: [/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setIsModalOpen(false),
									disabled: saving,
									className: "border-slate-200 text-slate-600 hover:text-slate-900",
									children: "Cancel"
								}), /* @__PURE__ */ jsx(Button, {
									type: "submit",
									disabled: saving,
									className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-2",
									children: saving ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4 animate-spin" }), /* @__PURE__ */ jsx("span", { children: "Saving..." })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: isEditMode ? "Save Changes" : "Create User" })] })
								})]
							})
						]
					})]
				})
			}),
			deleteConfirmUser && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md p-6 space-y-4",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-2",
							children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-bold text-slate-900",
							children: "Delete User Account"
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-sm text-slate-500 mt-1",
							children: [
								"Are you sure you want to permanently delete user ",
								/* @__PURE__ */ jsxs("strong", {
									className: "text-slate-900",
									children: ["@", deleteConfirmUser.username]
								}),
								" (",
								deleteConfirmUser.name,
								")? This action cannot be undone."
							]
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-end gap-3 pt-4 border-t border-slate-100",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setDeleteConfirmUser(null),
								className: "border-slate-200 text-slate-600",
								children: "Cancel"
							}), /* @__PURE__ */ jsx(Button, {
								onClick: handleDeleteUser,
								className: "bg-rose-600 hover:bg-rose-700 text-white",
								children: "Yes, Delete User"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { ControlHubUsersPage as component };
