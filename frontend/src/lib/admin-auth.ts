const STORAGE_KEY = "innrly_admin_token";
const USERNAME_KEY = "innrly_admin_user";
const NAME_KEY = "innrly_admin_name";
const ROLE_KEY = "innrly_admin_role";
const PERMISSIONS_KEY = "innrly_admin_permissions";

export interface AdminUserData {
  id?: number;
  username: string;
  name?: string;
  email?: string;
  role: "super_admin" | "normal_user";
  permissions: string[];
  status?: "active" | "inactive";
  last_login_at?: string;
  created_at?: string;
}

export const AVAILABLE_MODULES = [
  { key: "contact_inquiries", label: "Contact Inquiries", group: "Marketing & Leads", path: "/control-hub" },
  { key: "free_trials", label: "Free Trials", group: "Marketing & Leads", path: "/control-hub/trials" },
  { key: "onboardings", label: "Onboardings", group: "Marketing & Leads", path: "/control-hub/onboarding" },
  { key: "newsletter_list", label: "Newsletter List", group: "Marketing & Leads", path: "/control-hub/newsletters" },
  { key: "lead_logs", label: "Audit & Recovery Logs", group: "Marketing & Leads", path: "/control-hub/logs" },
  { key: "testimonials", label: "Testimonials", group: "Site Content & Config", path: "/control-hub/testimonials" },
  { key: "blogs", label: "Blog Manager", group: "Site Content & Config", path: "/control-hub/blogs" },
  { key: "seo", label: "SEO Editor", group: "Site Content & Config", path: "/control-hub/seo" },
  { key: "settings", label: "System Settings", group: "Site Content & Config", path: "/control-hub/settings" },
] as const;

/**
 * Safely retrieve the current stored admin session token.
 */
export function getAdminToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY);
}

/**
 * Store authenticated admin credentials and profile in localStorage.
 */
export function setAdminSession(token: string, userData?: Partial<AdminUserData>): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, token);
  if (userData?.username) {
    localStorage.setItem(USERNAME_KEY, userData.username);
  }
  if (userData?.name) {
    localStorage.setItem(NAME_KEY, userData.name);
  }
  if (userData?.role) {
    localStorage.setItem(ROLE_KEY, userData.role);
  }
  if (userData?.permissions) {
    localStorage.setItem(PERMISSIONS_KEY, JSON.stringify(userData.permissions));
  }
}

/**
 * Get the stored admin username.
 */
export function getAdminUser(): string {
  if (typeof window === "undefined") return "Administrator";
  return localStorage.getItem(USERNAME_KEY) || "Administrator";
}

/**
 * Get the stored admin full name.
 */
export function getAdminName(): string {
  if (typeof window === "undefined") return getAdminUser();
  return localStorage.getItem(NAME_KEY) || getAdminUser();
}

/**
 * Get the stored admin role.
 */
export function getAdminRole(): "super_admin" | "normal_user" {
  if (typeof window === "undefined") return "super_admin";
  const role = localStorage.getItem(ROLE_KEY);
  if (role === "super_admin") return "super_admin";
  if (role === "normal_user") return "normal_user";
  
  // Fallback for root admin username or legacy sessions
  const user = (localStorage.getItem(USERNAME_KEY) || "").toLowerCase().trim();
  if (user === "qhotelhub" || user === "admin" || user === "administrator" || !role) {
    return "super_admin";
  }
  return "normal_user";
}

/**
 * Check if the active user is a Super Administrator.
 */
export function isSuperAdmin(): boolean {
  if (typeof window === "undefined") return true;
  const user = (localStorage.getItem(USERNAME_KEY) || "").toLowerCase().trim();
  if (user === "qhotelhub" || user === "admin" || user === "administrator") {
    return true;
  }
  return getAdminRole() === "super_admin";
}

/**
 * Get the stored user's permissions array.
 */
export function getAdminPermissions(): string[] {
  if (typeof window === "undefined") return ["all"];
  if (isSuperAdmin()) return ["all"];
  try {
    const raw = localStorage.getItem(PERMISSIONS_KEY);
    if (!raw) return ["all"]; // default to all if permissions not yet restricted
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : ["all"];
  } catch {
    return ["all"];
  }
}

/**
 * Check if the active user has access to a specific module.
 */
export function hasPermission(moduleKey: string): boolean {
  if (isSuperAdmin()) return true;
  const perms = getAdminPermissions();
  return perms.includes("all") || perms.includes(moduleKey);
}

/**
 * Get the first route allowed for the current logged in user.
 */
export function getFirstAllowedRoute(): string {
  if (isSuperAdmin()) return "/control-hub";
  const perms = getAdminPermissions();
  for (const mod of AVAILABLE_MODULES) {
    if (perms.includes(mod.key)) {
      return mod.path;
    }
  }
  return "/control-hub";
}

/**
 * Clear the current admin session and broadcast logout event.
 */
export function clearAdminSession(): void {
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
export function getAdminAuthHeaders(customHeaders: Record<string, string> = {}): Record<string, string> {
  const token = getAdminToken();
  if (!token) {
    return { ...customHeaders };
  }
  return {
    ...customHeaders,
    Authorization: `Bearer ${token}`,
  };
}

/**
 * Resolve the backend API base URL.
 */
export function getApiBaseUrl(): string {
  const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL as string | undefined;
  if (webhookUrl && webhookUrl.trim() !== "") {
    const trimmed = webhookUrl.replace(/\/leads\/?$/, "").trim();
    if (trimmed !== "") {
      return trimmed;
    }
  }
  return "/api";
}

/**
 * Helper to wrap authenticated fetch with automatic 401 handling.
 */
export async function authFetch(input: RequestInfo | URL, init: RequestInit = {}): Promise<Response> {
  const customHeaders = (init.headers as Record<string, string>) || {};
  const headers = getAdminAuthHeaders(customHeaders);
  const res = await fetch(input, {
    ...init,
    headers,
  });
  if (res.status === 401) {
    clearAdminSession();
  }
  return res;
}

/**
 * Verify whether the active token is valid against the backend.
 */
export async function verifyAdminSession(): Promise<{ ok: boolean; user?: AdminUserData }> {
  const token = getAdminToken();
  if (!token) {
    return { ok: false };
  }
  try {
    const baseUrl = getApiBaseUrl();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    
    const res = await fetch(`${baseUrl}/admin/verify`, {
      signal: controller.signal,
      headers: getAdminAuthHeaders({
        Accept: "application/json",
      }),
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const userData: AdminUserData = {
        id: data.id,
        username: data.username || "Administrator",
        name: data.name || data.username || "Administrator",
        email: data.email,
        role: data.role === "super_admin" ? "super_admin" : "normal_user",
        permissions: Array.isArray(data.permissions) ? data.permissions : [],
      };
      setAdminSession(token, userData);
      return { ok: true, user: userData };
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
export async function adminLogin(
  username: string,
  password: string
): Promise<{ ok: boolean; token?: string; error?: string; user?: AdminUserData }> {
  try {
    const baseUrl = getApiBaseUrl();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(`${baseUrl}/admin/login`, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    clearTimeout(timeoutId);

    const data = await res.json();
    if (res.ok && data.token) {
      const userData: AdminUserData = {
        id: data.id,
        username: data.username || username,
        name: data.name || data.username || username,
        email: data.email,
        role: data.role === "super_admin" ? "super_admin" : "normal_user",
        permissions: Array.isArray(data.permissions) ? data.permissions : [],
      };
      setAdminSession(data.token, userData);
      return { ok: true, token: data.token, user: userData };
    }
    return { ok: false, error: data.detail || "Invalid username or password" };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? (err.name === "AbortError" ? "Authentication request timed out. Please verify backend service." : err.message) : "Failed to connect to authentication server",
    };
  }
}
