//#region src/lib/admin-auth.ts
var STORAGE_KEY = "innrly_admin_token";
var USERNAME_KEY = "innrly_admin_user";
var NAME_KEY = "innrly_admin_name";
var ROLE_KEY = "innrly_admin_role";
var PERMISSIONS_KEY = "innrly_admin_permissions";
var AVAILABLE_MODULES = [
	{
		key: "contact_inquiries",
		label: "Contact Inquiries",
		group: "Marketing & Leads",
		path: "/control-hub"
	},
	{
		key: "free_trials",
		label: "Free Trials",
		group: "Marketing & Leads",
		path: "/control-hub/trials"
	},
	{
		key: "onboardings",
		label: "Onboardings",
		group: "Marketing & Leads",
		path: "/control-hub/onboarding"
	},
	{
		key: "newsletter_list",
		label: "Newsletter List",
		group: "Marketing & Leads",
		path: "/control-hub/newsletters"
	},
	{
		key: "lead_logs",
		label: "Audit & Recovery Logs",
		group: "Marketing & Leads",
		path: "/control-hub/logs"
	},
	{
		key: "testimonials",
		label: "Testimonials",
		group: "Site Content & Config",
		path: "/control-hub/testimonials"
	},
	{
		key: "blogs",
		label: "Blog Manager",
		group: "Site Content & Config",
		path: "/control-hub/blogs"
	},
	{
		key: "seo",
		label: "SEO Editor",
		group: "Site Content & Config",
		path: "/control-hub/seo"
	},
	{
		key: "settings",
		label: "System Settings",
		group: "Site Content & Config",
		path: "/control-hub/settings"
	}
];
/**
* Safely retrieve the current stored admin session token.
*/
function getAdminToken() {
	if (typeof window === "undefined") return null;
	return localStorage.getItem(STORAGE_KEY);
}
/**
* Store authenticated admin credentials and profile in localStorage.
*/
function setAdminSession(token, userData) {
	if (typeof window === "undefined") return;
	localStorage.setItem(STORAGE_KEY, token);
	if (userData?.username) localStorage.setItem(USERNAME_KEY, userData.username);
	if (userData?.name) localStorage.setItem(NAME_KEY, userData.name);
	if (userData?.role) localStorage.setItem(ROLE_KEY, userData.role);
	if (userData?.permissions) localStorage.setItem(PERMISSIONS_KEY, JSON.stringify(userData.permissions));
}
/**
* Get the stored admin username.
*/
function getAdminUser() {
	if (typeof window === "undefined") return "Administrator";
	return localStorage.getItem(USERNAME_KEY) || "Administrator";
}
/**
* Get the stored admin full name.
*/
function getAdminName() {
	if (typeof window === "undefined") return getAdminUser();
	return localStorage.getItem(NAME_KEY) || getAdminUser();
}
/**
* Get the stored admin role.
*/
function getAdminRole() {
	if (typeof window === "undefined") return "super_admin";
	const role = localStorage.getItem(ROLE_KEY);
	if (role === "super_admin") return "super_admin";
	if (role === "normal_user") return "normal_user";
	const user = (localStorage.getItem(USERNAME_KEY) || "").toLowerCase().trim();
	if (user === "qhotelhub" || user === "admin" || user === "administrator" || !role) return "super_admin";
	return "normal_user";
}
/**
* Check if the active user is a Super Administrator.
*/
function isSuperAdmin() {
	if (typeof window === "undefined") return true;
	const user = (localStorage.getItem(USERNAME_KEY) || "").toLowerCase().trim();
	if (user === "qhotelhub" || user === "admin" || user === "administrator") return true;
	return getAdminRole() === "super_admin";
}
/**
* Get the stored user's permissions array.
*/
function getAdminPermissions() {
	if (typeof window === "undefined") return ["all"];
	if (isSuperAdmin()) return ["all"];
	try {
		const raw = localStorage.getItem(PERMISSIONS_KEY);
		if (!raw) return ["all"];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : ["all"];
	} catch {
		return ["all"];
	}
}
/**
* Check if the active user has access to a specific module.
*/
function hasPermission(moduleKey) {
	if (isSuperAdmin()) return true;
	const perms = getAdminPermissions();
	return perms.includes("all") || perms.includes(moduleKey);
}
/**
* Clear the current admin session and broadcast logout event.
*/
function clearAdminSession() {
	if (typeof window === "undefined") return;
	localStorage.removeItem(STORAGE_KEY);
	localStorage.removeItem(USERNAME_KEY);
	localStorage.removeItem(NAME_KEY);
	localStorage.removeItem(ROLE_KEY);
	localStorage.removeItem(PERMISSIONS_KEY);
	window.dispatchEvent(new Event("innrly-admin-logout"));
}
/**
* Return authorization headers for authenticated backend requests.
*/
function getAdminAuthHeaders(customHeaders = {}) {
	const token = getAdminToken();
	if (!token) return { ...customHeaders };
	return {
		...customHeaders,
		Authorization: `Bearer ${token}`
	};
}
/**
* Resolve the backend API base URL.
*/
function getApiBaseUrl() {
	const webhookUrl = "/api/leads";
	if (webhookUrl.trim() !== "") {
		const trimmed = webhookUrl.replace(/\/leads\/?$/, "").trim();
		if (trimmed !== "") return trimmed;
	}
	return "/api";
}
/**
* Verify whether the active token is valid against the backend.
*/
async function verifyAdminSession() {
	const token = getAdminToken();
	if (!token) return { ok: false };
	try {
		const baseUrl = getApiBaseUrl();
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 4e3);
		const res = await fetch(`${baseUrl}/admin/verify`, {
			signal: controller.signal,
			headers: getAdminAuthHeaders({ Accept: "application/json" })
		});
		clearTimeout(timeoutId);
		if (res.ok) {
			const data = await res.json();
			const userData = {
				id: data.id,
				username: data.username || "Administrator",
				name: data.name || data.username || "Administrator",
				email: data.email,
				role: data.role === "super_admin" ? "super_admin" : "normal_user",
				permissions: Array.isArray(data.permissions) ? data.permissions : []
			};
			setAdminSession(token, userData);
			return {
				ok: true,
				user: userData
			};
		}
		clearAdminSession();
		return { ok: false };
	} catch (err) {
		console.warn("Admin verification network error or timeout:", err);
		clearAdminSession();
		return { ok: false };
	}
}
/**
* Execute an admin login request to the backend.
*/
async function adminLogin(username, password) {
	try {
		const baseUrl = getApiBaseUrl();
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 8e3);
		const res = await fetch(`${baseUrl}/admin/login`, {
			method: "POST",
			signal: controller.signal,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({
				username,
				password
			})
		});
		clearTimeout(timeoutId);
		const data = await res.json();
		if (res.ok && data.token) {
			const userData = {
				id: data.id,
				username: data.username || username,
				name: data.name || data.username || username,
				email: data.email,
				role: data.role === "super_admin" ? "super_admin" : "normal_user",
				permissions: Array.isArray(data.permissions) ? data.permissions : []
			};
			setAdminSession(data.token, userData);
			return {
				ok: true,
				token: data.token,
				user: userData
			};
		}
		return {
			ok: false,
			error: data.detail || "Invalid username or password"
		};
	} catch (err) {
		return {
			ok: false,
			error: err instanceof Error ? err.name === "AbortError" ? "Authentication request timed out. Please verify backend service." : err.message : "Failed to connect to authentication server"
		};
	}
}
//#endregion
export { getAdminName as a, getAdminUser as c, isSuperAdmin as d, verifyAdminSession as f, getAdminAuthHeaders as i, getApiBaseUrl as l, adminLogin as n, getAdminRole as o, clearAdminSession as r, getAdminToken as s, AVAILABLE_MODULES as t, hasPermission as u };
