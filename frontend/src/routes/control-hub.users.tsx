import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Search, 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  UserCheck, 
  UserX, 
  Key, 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  User, 
  Users, 
  RefreshCw, 
  Check, 
  Shield, 
  Layers, 
  Settings2,
  AlertTriangle,
  X,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { 
  getAdminAuthHeaders, 
  getApiBaseUrl, 
  isSuperAdmin, 
  getAdminUser,
  AVAILABLE_MODULES, 
  type AdminUserData 
} from "@/lib/admin-auth";

export const Route = createFileRoute("/control-hub/users")({
  component: ControlHubUsersPage,
  head: () => ({
    meta: [
      { title: "User Management — Innrly Control Hub" },
      { name: "robots", content: "noindex, nofollow" }
    ]
  })
});

interface UserFormState {
  id?: number;
  name: string;
  username: string;
  email: string;
  password: string;
  role: "super_admin" | "normal_user";
  permissions: string[];
  status: "active" | "inactive";
}

const INITIAL_FORM_STATE: UserFormState = {
  name: "",
  username: "",
  email: "",
  password: "",
  role: "normal_user",
  permissions: ["contact_inquiries", "free_trials"],
  status: "active",
};

function ControlHubUsersPage() {
  const [users, setUsers] = useState<AdminUserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState<UserFormState>(INITIAL_FORM_STATE);
  const [showPassword, setShowPassword] = useState(false);
  const [deleteConfirmUser, setDeleteConfirmUser] = useState<AdminUserData | null>(null);

  const currentUser = getAdminUser();
  const superAdminAllowed = isSuperAdmin();

  useEffect(() => {
    if (superAdminAllowed) {
      fetchUsers();
    }
  }, [superAdminAllowed]);

  async function fetchUsers() {
    setLoading(true);
    try {
      const baseUrl = getApiBaseUrl();
      const res = await fetch(`${baseUrl}/admin/users`, {
        headers: getAdminAuthHeaders({ Accept: "application/json" }),
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      } else {
        toast.error("Failed to load user directory.");
      }
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
      password: generateRandomPassword(),
    });
    setShowPassword(true);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (user: AdminUserData) => {
    setIsEditMode(true);
    setFormData({
      id: user.id,
      name: user.name || "",
      username: user.username,
      email: user.email || "",
      password: "", // Leave blank if not changing
      role: user.role,
      permissions: user.role === "super_admin" ? ["all"] : (user.permissions || []),
      status: user.status || "active",
    });
    setShowPassword(false);
    setIsModalOpen(true);
  };

  const generateRandomPassword = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";
    let pwd = "";
    for (let i = 0; i < 10; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pwd;
  };

  const handleTogglePermission = (key: string) => {
    if (formData.role === "super_admin") return;
    setFormData((prev) => {
      const exists = prev.permissions.includes(key);
      const updated = exists
        ? prev.permissions.filter((p) => p !== key)
        : [...prev.permissions, key];
      return { ...prev, permissions: updated };
    });
  };

  const handleSelectAllPermissions = () => {
    if (formData.role === "super_admin") return;
    setFormData((prev) => ({
      ...prev,
      permissions: AVAILABLE_MODULES.map((m) => m.key),
    }));
  };

  const handleClearAllPermissions = () => {
    if (formData.role === "super_admin") return;
    setFormData((prev) => ({
      ...prev,
      permissions: [],
    }));
  };

  const handleSaveUser = async (e: React.FormEvent) => {
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
        const updatePayload: Record<string, any> = {
          name: formData.name.trim(),
          email: formData.email.trim() || null,
          role: formData.role,
          permissions: formData.role === "super_admin" ? ["all"] : formData.permissions,
          status: formData.status,
        };
        if (formData.password.trim()) {
          updatePayload.password = formData.password.trim();
        }

        const res = await fetch(`${baseUrl}/admin/users/${formData.id}`, {
          method: "PUT",
          headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
          body: JSON.stringify(updatePayload),
        });

        const data = await res.json();
        if (res.ok) {
          toast.success("User updated successfully!");
          setIsModalOpen(false);
          fetchUsers();
        } else {
          toast.error(data.detail || "Failed to update user.");
        }
      } else {
        const createPayload = {
          name: formData.name.trim(),
          username: formData.username.trim(),
          email: formData.email.trim() || null,
          password: formData.password.trim(),
          role: formData.role,
          permissions: formData.role === "super_admin" ? ["all"] : formData.permissions,
          status: formData.status,
        };

        const res = await fetch(`${baseUrl}/admin/users`, {
          method: "POST",
          headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
          body: JSON.stringify(createPayload),
        });

        const data = await res.json();
        if (res.ok) {
          toast.success(`User '${formData.username}' created successfully!`);
          setIsModalOpen(false);
          fetchUsers();
        } else {
          toast.error(data.detail || "Failed to create user.");
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while saving the user.");
    } finally {
      setSaving(false);
    }
  };

  const handleToggleStatus = async (user: AdminUserData) => {
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
        body: JSON.stringify({ status: newStatus }),
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
        headers: getAdminAuthHeaders(),
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

  // Guard: If not super admin, show access denied
  if (!superAdminAllowed) {
    return (
      <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-12 text-center text-slate-700 max-w-2xl mx-auto my-12 shadow-sm">
        <div className="mx-auto w-12 h-12 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 mb-4 shadow-sm">
          <ShieldAlert className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Access Denied</h2>
        <p className="text-sm text-slate-600 mb-6">
          The User Management module is strictly reserved for Super Administrators. Your current role does not have permission to manage platform accounts.
        </p>
      </div>
    );
  }

  // Filtered list
  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      (u.name && u.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      u.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (u.email && u.email.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesRole =
      roleFilter === "all" ? true : u.role === roleFilter;

    const matchesStatus =
      statusFilter === "all" ? true : (u.status || "active") === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === "active").length;
  const superAdmins = users.filter((u) => u.role === "super_admin").length;
  const normalUsers = users.filter((u) => u.role === "normal_user").length;

  const marketingModules = AVAILABLE_MODULES.filter((m) => m.group === "Marketing & Leads");
  const configModules = AVAILABLE_MODULES.filter((m) => m.group === "Site Content & Config");

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="h-7 w-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-sm">
              <Users className="h-4 w-4" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">User Management</h1>
          </div>
          <p className="text-sm text-slate-500">
            Create administrators, manage normal user credentials, and assign granular module permissions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchUsers}
            disabled={loading}
            className="flex items-center gap-2 text-white border-slate-200 hover:bg-slate-50"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </Button>

          <Button
            onClick={handleOpenCreateModal}
            className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add New User</span>
          </Button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Accounts</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1">{totalUsers}</p>
          </div>
          <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
            <Users className="h-5 w-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Users</p>
            <p className="text-2xl font-extrabold text-emerald-600 mt-1">{activeUsers}</p>
          </div>
          <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <UserCheck className="h-5 w-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Super Admins</p>
            <p className="text-2xl font-extrabold text-indigo-700 mt-1">{superAdmins}</p>
          </div>
          <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100">
            <ShieldCheck className="h-5 w-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Standard Users</p>
            <p className="text-2xl font-extrabold text-slate-700 mt-1">{normalUsers}</p>
          </div>
          <div className="h-11 w-11 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-200">
            <Layers className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, username, email..."
            className="pl-10 text-sm border-slate-200 focus-visible:ring-indigo-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Role Filter */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span>Role:</span>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 focus:border-indigo-500 focus:outline-none"
            >
              <option value="all">All Roles</option>
              <option value="super_admin">Super Admins</option>
              <option value="normal_user">Users</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span>Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 focus:border-indigo-500 focus:outline-none"
            >
              <option value="all">All Status</option>
              <option value="active">Active Only</option>
              <option value="inactive">Inactive Only</option>
            </select>
          </div>
        </div>
      </div>

      {/* User Directory Table */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-400">
            <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2 text-indigo-600" />
            <p className="text-sm font-medium">Loading user accounts...</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="p-12 text-center text-slate-400">
            <UserX className="h-8 w-8 mx-auto mb-2 text-slate-300" />
            <p className="text-base font-semibold text-slate-700">No users found</p>
            <p className="text-sm mt-1">Try adjusting your search criteria or add a new user.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50/75 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Module Permissions</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Last Login</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredUsers.map((user) => {
                  const isCurrent = user.username === currentUser;
                  const isSuper = user.role === "super_admin";
                  const perms = Array.isArray(user.permissions) ? user.permissions : [];

                  return (
                    <tr key={user.id || user.username} className="hover:bg-slate-50/50 transition-colors">
                      {/* Name & Avatar */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className={`h-9 w-9 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm ${
                            isSuper ? "bg-indigo-100 text-indigo-700 border border-indigo-200" : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}>
                            {(user.name || user.username).charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                              <span>{user.name || user.username}</span>
                              {isCurrent && (
                                <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-medium border border-emerald-200">
                                  You
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-slate-400 font-mono">@{user.username}</div>
                          </div>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-600">
                        {user.email ? (
                          <span className="flex items-center gap-1.5">
                            <Mail className="h-3.5 w-3.5 text-slate-400" />
                            {user.email}
                          </span>
                        ) : (
                          <span className="text-slate-400 italic">None</span>
                        )}
                      </td>

                      {/* Role Badge */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        {isSuper ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            Super Admin
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                            <User className="h-3.5 w-3.5 text-slate-500" />
                            User
                          </span>
                        )}
                      </td>

                      {/* Permitted Modules */}
                      <td className="px-6 py-4">
                        {isSuper ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <Sparkles className="h-3 w-3" />
                            All Modules (Full Access)
                          </span>
                        ) : perms.length === 0 ? (
                          <span className="text-xs text-rose-500 font-medium">No permissions</span>
                        ) : (
                          <div className="flex flex-wrap gap-1 max-w-xs">
                            {perms.slice(0, 3).map((pkey) => {
                              const mod = AVAILABLE_MODULES.find((m) => m.key === pkey);
                              return (
                                <span
                                  key={pkey}
                                  className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                                >
                                  {mod?.label || pkey}
                                </span>
                              );
                            })}
                            {perms.length > 3 && (
                              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-500 border border-slate-200">
                                +{perms.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(user)}
                          disabled={isCurrent}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                            user.status === "active"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                              : "bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100"
                          } ${isCurrent ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
                          title={isCurrent ? "Cannot deactivate yourself" : "Click to toggle status"}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${user.status === "active" ? "bg-emerald-500" : "bg-rose-500"}`} />
                          {user.status === "active" ? "Active" : "Inactive"}
                        </button>
                      </td>

                      {/* Last Login */}
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500">
                        {user.last_login_at ? (
                          new Date(user.last_login_at).toLocaleString(undefined, {
                            dateStyle: "short",
                            timeStyle: "short"
                          })
                        ) : (
                          <span className="text-slate-400 italic">Never</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-xs">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(user)}
                            className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                            title="Edit User & Permissions"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>

                          <button
                            type="button"
                            onClick={() => setDeleteConfirmUser(user)}
                            disabled={isCurrent}
                            className={`p-1.5 rounded-lg transition-colors ${
                              isCurrent
                                ? "text-slate-300 cursor-not-allowed"
                                : "text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                            }`}
                            title={isCurrent ? "Cannot delete own account" : "Delete User"}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
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

      {/* CREATE / EDIT USER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                  {isEditMode ? <Edit2 className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {isEditMode ? "Edit Administrator / User" : "Add New Administrator / User"}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {isEditMode ? "Update account credentials and module access" : "Configure login credentials and select permitted modules"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleSaveUser} className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Basic Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-slate-700">Full Name *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rachel Adams"
                    required
                    className="text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-slate-700">Username *</Label>
                  <Input
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    placeholder="e.g. rachel.adams"
                    disabled={isEditMode}
                    required
                    className="text-sm font-mono"
                  />
                  {isEditMode && <span className="text-[10px] text-slate-400">Username cannot be altered</span>}
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-slate-700">Email Address</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rachel@innrly.com"
                    className="text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs font-semibold text-slate-700">
                      {isEditMode ? "Password (leave blank to keep)" : "Password *"}
                    </Label>
                    {!isEditMode && (
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, password: generateRandomPassword() })}
                        className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-700"
                      >
                        Generate Random
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder={isEditMode ? "••••••••••••" : "Min 6 characters"}
                      required={!isEditMode}
                      className="text-sm pr-10 font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex={-1}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Role & Status Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                {/* Role Selection */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-slate-700">Account Role</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, role: "normal_user" })}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        formData.role === "normal_user"
                          ? "border-indigo-600 bg-indigo-50/50 text-indigo-900 ring-1 ring-indigo-600/20"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-semibold text-xs mb-0.5">
                        <User className="h-3.5 w-3.5 text-indigo-600" />
                        <span>User</span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight">Custom module access</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, role: "super_admin", permissions: ["all"] })}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        formData.role === "super_admin"
                          ? "border-indigo-600 bg-indigo-50/50 text-indigo-900 ring-1 ring-indigo-600/20"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-semibold text-xs mb-0.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-indigo-600" />
                        <span>Super Admin</span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight">Full access to all modules</p>
                    </button>
                  </div>
                </div>

                {/* Status Toggle */}
                <div className="space-y-2 flex flex-col justify-between">
                  <Label className="text-xs font-semibold text-slate-700">Account Status</Label>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${formData.status === "active" ? "bg-emerald-500" : "bg-slate-300"}`} />
                      <span className="text-xs font-medium text-slate-800">
                        {formData.status === "active" ? "Active Account" : "Inactive (Locked)"}
                      </span>
                    </div>
                    <Switch
                      checked={formData.status === "active"}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, status: checked ? "active" : "inactive" })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Module Permissions Matrix */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Module Access Permissions
                    </h3>
                    <p className="text-xs text-slate-500">
                      {formData.role === "super_admin"
                        ? "Super Administrators automatically have unrestricted access to all modules."
                        : "Select which sections of the Control Hub this user can view and manage."}
                    </p>
                  </div>

                  {formData.role !== "super_admin" && (
                    <div className="flex items-center gap-2 text-xs">
                      <button
                        type="button"
                        onClick={handleSelectAllPermissions}
                        className="text-indigo-600 hover:text-indigo-800 font-semibold"
                      >
                        Select All
                      </button>
                      <span className="text-slate-300">|</span>
                      <button
                        type="button"
                        onClick={handleClearAllPermissions}
                        className="text-slate-500 hover:text-slate-700 font-semibold"
                      >
                        Clear All
                      </button>
                    </div>
                  )}
                </div>

                {formData.role === "super_admin" ? (
                  <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex items-center gap-3 text-indigo-900">
                    <ShieldCheck className="h-5 w-5 text-indigo-600 shrink-0" />
                    <p className="text-xs">
                      Super Administrator has full permission to all 8 modules and exclusive access to User Management.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Category 1: Marketing & Leads */}
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Marketing & Leads
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {marketingModules.map((mod) => {
                          const isChecked = formData.permissions.includes(mod.key);
                          return (
                            <label
                              key={mod.key}
                              onClick={() => handleTogglePermission(mod.key)}
                              className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                                isChecked
                                  ? "border-indigo-500 bg-indigo-50/40 text-indigo-950 font-semibold shadow-xs"
                                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                              }`}
                            >
                              <div className={`h-4 w-4 rounded flex items-center justify-center border transition-colors ${
                                isChecked ? "bg-indigo-600 border-indigo-600 text-white" : "border-slate-300 bg-white"
                              }`}>
                                {isChecked && <Check className="h-3 w-3" />}
                              </div>
                              <span className="flex-1">{mod.label}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Category 2: Site Content & Config */}
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Site Content & Config
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {configModules.map((mod) => {
                          const isChecked = formData.permissions.includes(mod.key);
                          return (
                            <label
                              key={mod.key}
                              onClick={() => handleTogglePermission(mod.key)}
                              className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                                isChecked
                                  ? "border-indigo-500 bg-indigo-50/40 text-indigo-950 font-semibold shadow-xs"
                                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                              }`}
                            >
                              <div className={`h-4 w-4 rounded flex items-center justify-center border transition-colors ${
                                isChecked ? "bg-indigo-600 border-indigo-600 text-white" : "border-slate-300 bg-white"
                              }`}>
                                {isChecked && <Check className="h-3 w-3" />}
                              </div>
                              <span className="flex-1">{mod.label}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  disabled={saving}
                  className="border-slate-200 text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={saving}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-2"
                >
                  {saving ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4" />
                      <span>{isEditMode ? "Save Changes" : "Create User"}</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION DIALOG */}
      {deleteConfirmUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md p-6 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-2">
              <AlertTriangle className="h-6 w-6" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">Delete User Account</h3>
              <p className="text-sm text-slate-500 mt-1">
                Are you sure you want to permanently delete user <strong className="text-slate-900">@{deleteConfirmUser.username}</strong> ({deleteConfirmUser.name})? This action cannot be undone.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <Button
                variant="outline"
                onClick={() => setDeleteConfirmUser(null)}
                className="border-slate-200 text-slate-600"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDeleteUser}
                className="bg-rose-600 hover:bg-rose-700 text-white"
              >
                Yes, Delete User
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
