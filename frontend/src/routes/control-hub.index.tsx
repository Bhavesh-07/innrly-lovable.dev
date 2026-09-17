import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  RefreshCw, 
  Download, 
  Search, 
  Building2, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  ListFilter,
  ShieldAlert,
  Edit2,
  Trash2,
  Eye,
  X,
  Save,
  Laptop,
  UserCheck,
  AlertTriangle,
  FileText,
  Calendar,
  Layers,
  Database,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { getAdminAuthHeaders, hasPermission } from "@/lib/admin-auth";

export const Route = createFileRoute("/control-hub/")({
  component: ControlHubDashboard,
  head: () => ({
    meta: [
      { title: "Innrly Control Hub Console" },
      { name: "description", content: "Manage and view captured marketing leads and onboarding requests." }
    ]
  })
});

function ControlHubDashboard() {
  return <LeadsDashboardContainer activeTab="contacts" />;
}

export interface ContactLead {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string;
  properties: string;
  message: string;
  submitted_at: string;
  created_at: string;
}

export interface TrialLead {
  id: number;
  name: string;
  email: string;
  company: string;
  role: string;
  phone: string;
  properties: string;
  pms: string;
  submitted_at: string;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: number;
  email: string;
  sub_source: string;
  submitted_at: string;
  created_at: string;
}

export interface OnboardingCompany {
  id: number;
  company_name: string;
  authorized_person: string;
  email: string;
  address: string;
  state: string;
  city: string;
  zip: string;
  mobile: string;
  work_phone: string;
  decision_maker: string;
  submitted_at: string;
  created_at: string;
}

export interface OnboardingUser {
  id: number;
  company_id: number;
  name: string;
  email: string;
  phone: string;
}

export interface OnboardingProperty {
  id: number;
  company_id: number;
  property_name: string;
  property_code: string;
  address: string;
  rooms: number;
  brand: string;
  pms: string;
  pms_other?: string;
  contact_person: string;
  manager_name: string;
  manager_email: string;
  manager_mobile: string;
}

export interface LeadsData {
  contacts: ContactLead[];
  trials: TrialLead[];
  newsletters: NewsletterSubscriber[];
  onboarding: OnboardingCompany[];
  onboarding_users?: OnboardingUser[];
  onboarding_properties?: OnboardingProperty[];
}

export type TabType = "contacts" | "trials" | "onboarding" | "newsletters";

export function LeadsDashboardContainer({ activeTab }: { activeTab: TabType }) {
  const [data, setData] = useState<LeadsData>({
    contacts: [],
    trials: [],
    newsletters: [],
    onboarding: [],
    onboarding_users: [],
    onboarding_properties: []
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCompanyId, setExpandedCompanyId] = useState<number | null>(null);

  // View Details Modal States
  const [viewingContact, setViewingContact] = useState<ContactLead | null>(null);
  const [viewingTrial, setViewingTrial] = useState<TrialLead | null>(null);
  const [viewingOnboarding, setViewingOnboarding] = useState<OnboardingCompany | null>(null);

  // Edit and Delete Modal States
  const [editingContact, setEditingContact] = useState<ContactLead | null>(null);
  const [editingTrial, setEditingTrial] = useState<TrialLead | null>(null);
  const [editingOnboarding, setEditingOnboarding] = useState<OnboardingCompany | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<{
    type: "contacts" | "trials" | "onboarding" | "newsletters";
    id: number;
    title: string;
  } | null>(null);

  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setExpandedCompanyId(null);
  }, [activeTab]);

  const fetchLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const baseUrl = (import.meta as any).env?.VITE_LEAD_WEBHOOK_URL || "/api/leads";
      const fetchUrl = baseUrl.endsWith("/leads") ? baseUrl : `${baseUrl}/leads`;
      
      const response = await fetch(fetchUrl, {
        headers: getAdminAuthHeaders({
          "Accept": "application/json"
        })
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err: any) {
      console.error("Error fetching leads:", err);
      setError(err.message || "Failed to load lead data from backend.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString("en-US", {
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
    let currentList: any[] = [];
    let fileName = `innrly_${activeTab}`;
    
    if (activeTab === "contacts") currentList = data.contacts;
    else if (activeTab === "trials") currentList = data.trials;
    else if (activeTab === "newsletters") currentList = data.newsletters;
    else if (activeTab === "onboarding") {
      currentList = data.onboarding;
    }

    if (currentList.length === 0) {
      alert("No data available to export in this tab.");
      return;
    }

    const headers = Object.keys(currentList[0]);
    const csvRows = [];
    csvRows.push(headers.join(","));

    for (const row of currentList) {
      const values = headers.map(header => {
        const val = row[header];
        const escaped = ('' + (val !== null && val !== undefined ? val : '')).replace(/"/g, '""');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(","));
    }

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${fileName}_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const filterLeads = <T extends Record<string, any>>(list: T[]): T[] => {
    if (!searchQuery) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(item => {
      return Object.values(item).some(val => {
        if (val === null || val === undefined) return false;
        return String(val).toLowerCase().includes(q);
      });
    });
  };

  // Save Handlers
  const handleSaveContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingContact) return;
    setIsSaving(true);
    try {
      const res = await fetch(`/api/leads/contacts/${editingContact.id}`, {
        method: "PUT",
        headers: getAdminAuthHeaders({
          "Content-Type": "application/json"
        }),
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
    } catch (err: any) {
      toast.error(err.message || "Failed to update contact inquiry");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveTrial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTrial) return;
    setIsSaving(true);
    try {
      const res = await fetch(`/api/leads/trials/${editingTrial.id}`, {
        method: "PUT",
        headers: getAdminAuthHeaders({
          "Content-Type": "application/json"
        }),
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
    } catch (err: any) {
      toast.error(err.message || "Failed to update free trial lead");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveOnboarding = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingOnboarding) return;
    setIsSaving(true);
    try {
      const res = await fetch(`/api/leads/onboarding/${editingOnboarding.id}`, {
        method: "PUT",
        headers: getAdminAuthHeaders({
          "Content-Type": "application/json"
        }),
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
    } catch (err: any) {
      toast.error(err.message || "Failed to update onboarding record");
    } finally {
      setIsSaving(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const endpoint = deleteTarget.type === "contacts" 
        ? `/api/leads/contacts/${deleteTarget.id}`
        : deleteTarget.type === "trials"
        ? `/api/leads/trials/${deleteTarget.id}`
        : deleteTarget.type === "onboarding"
        ? `/api/leads/onboarding/${deleteTarget.id}`
        : `/api/leads/newsletters/${deleteTarget.id}`;

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
    } catch (err: any) {
      toast.error(err.message || "Failed to delete record");
    } finally {
      setIsDeleting(false);
    }
  };

  const tabToPerm: Record<TabType, string> = {
    contacts: "contact_inquiries",
    trials: "free_trials",
    onboarding: "onboardings",
    newsletters: "newsletter_list"
  };

  const requiredPerm = tabToPerm[activeTab];
  if (!hasPermission(requiredPerm)) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-12 text-center text-slate-700 max-w-xl mx-auto my-8 shadow-sm">
        <div className="mx-auto w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-4 shadow-sm">
          <ShieldAlert className="h-6 w-6" />
        </div>
        <h2 className="text-lg font-bold text-slate-900 mb-1">Module Access Restricted</h2>
        <p className="text-xs text-slate-600">
          You do not currently have permission to access this module. Please contact your Super Administrator.
        </p>
      </div>
    );
  }

  const totalLeads = data.contacts.length + data.trials.length + data.onboarding.length + data.newsletters.length;

  return (
    <div className="space-y-6">
      
      {/* Admin Title Area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 block">Dashboard</span>
          <h1 className="text-2xl font-bold text-slate-800 mt-1">Lead Capture Center</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Overview of pipelines, trials, newsletter updates, and guided onboarding.
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            onClick={fetchLeads} 
            disabled={loading}
            className="border-slate-200 hover:bg-slate-50 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button 
            onClick={exportCSV} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 font-semibold"
          >
            <Download className="h-3.5 w-3.5" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Total Captured</span>
          <span className="text-2xl font-bold text-slate-850 block mt-1">{totalLeads}</span>
          <span className="text-[10px] text-indigo-500 font-semibold block mt-0.5">across all tables</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Contacts</span>
          <span className="text-2xl font-bold text-slate-850 block mt-1">{data.contacts.length}</span>
          <span className="text-[10px] text-slate-400 font-medium block mt-0.5">Sales inquiries</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Free Trials</span>
          <span className="text-2xl font-bold text-slate-850 block mt-1">{data.trials.length}</span>
          <span className="text-[10px] text-slate-400 font-medium block mt-0.5">Platform trials</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Onboardings</span>
          <span className="text-2xl font-bold text-slate-850 block mt-1">{data.onboarding.length}</span>
          <span className="text-[10px] text-slate-400 font-medium block mt-0.5">Wizard completions</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm col-span-2 md:col-span-1">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Newsletter</span>
          <span className="text-2xl font-bold text-slate-850 block mt-1">{data.newsletters.length}</span>
          <span className="text-[10px] text-slate-400 font-medium block mt-0.5">Subscribers list</span>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search records by name, email, company, PMS, source..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 text-sm transition-all"
          />
        </div>
        <div className="flex items-center gap-2 shrink-0 text-xs">
          <ListFilter className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-slate-400 font-medium">Filtering by search:</span>
          <span className="bg-indigo-50 text-indigo-600 border border-indigo-100 font-bold px-2.5 py-0.5 rounded-full text-[10px]">
            {searchQuery ? "Active" : "None"}
          </span>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-center my-6">
          <span className="text-sm text-red-700 font-bold block">Database Fetch Failed</span>
          <p className="text-xs text-red-500 mt-1">{error}</p>
          <Button onClick={fetchLeads} variant="outline" className="mt-4 border-red-200 text-red-700 hover:bg-red-50/80 bg-white">
            Try Again
          </Button>
        </div>
      )}

      {/* Loading state */}
      {loading && !error && (
        <div className="flex flex-col items-center justify-center py-20 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <RefreshCw className="h-7 w-7 text-indigo-600 animate-spin" />
          <span className="text-xs text-slate-400 mt-2 font-medium">Fetching lead submissions...</span>
        </div>
      )}

      {/* Leads Table Container */}
      {!loading && !error && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          
          {/* Basic Table (Contacts) */}
          {activeTab === "contacts" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-6">Product Lead</th>
                    <th className="py-3.5 px-6">Email / Phone</th>
                    <th className="py-3.5 px-6">Company</th>
                    <th className="py-3.5 px-6 text-center">Properties</th>
                    <th className="py-3.5 px-6">Message / Note</th>
                    <th className="py-3.5 px-6">Submitted</th>
                    <th className="py-3.5 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                  {filterLeads(data.contacts).length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-slate-400 font-medium">
                        No contact leads found.
                      </td>
                    </tr>
                  ) : (
                    filterLeads(data.contacts).map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3.5 px-6 font-semibold text-slate-900">{lead.name}</td>
                        <td className="py-3.5 px-6">
                          <div className="flex flex-col">
                            <span className="flex items-center gap-1 text-[11px] text-slate-800">
                              <Mail className="h-3 w-3 text-slate-400" />
                              {lead.email}
                            </span>
                            <span className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                              <Phone className="h-3 w-3 text-slate-400" />
                              {lead.phone}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-6 text-slate-800">{lead.company}</td>
                        <td className="py-3.5 px-6 text-center font-mono font-semibold text-slate-700">
                          {lead.properties || "—"}
                        </td>
                        <td className="py-3.5 px-6 text-slate-600 max-w-xs truncate" title={lead.message}>
                          {lead.message || "—"}
                        </td>
                        <td className="py-3.5 px-6 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg font-medium">
                            <Calendar className="h-3.5 w-3.5 text-indigo-500" />
                            {formatDate(lead.submitted_at || lead.created_at)}
                          </span>
                        </td>
                        <td className="py-3.5 px-6 text-center">
                          <div className="inline-flex items-center gap-1.5">
                            <button 
                              onClick={() => setViewingContact(lead)}
                              className="inline-flex items-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/60 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer"
                              title="View Details"
                            >
                              <Eye className="h-3 w-3" />
                              View
                            </button>
                            <button 
                              onClick={() => setEditingContact(lead)}
                              className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all shadow-sm cursor-pointer"
                              title="Edit Contact"
                            >
                              <Edit2 className="h-3 w-3" />
                              Edit
                            </button>
                            <button 
                              onClick={() => setDeleteTarget({ type: "contacts", id: lead.id, title: lead.name })}
                              className="inline-flex items-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-600 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all border border-rose-200/60 cursor-pointer"
                              title="Delete Contact"
                            >
                              <Trash2 className="h-3 w-3" />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Free Trials Table */}
          {activeTab === "trials" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-6">Contact / Role</th>
                    <th className="py-3.5 px-6">Email / Phone</th>
                    <th className="py-3.5 px-6">Company</th>
                    <th className="py-3.5 px-6 text-center">Properties</th>
                    <th className="py-3.5 px-6">PMS System</th>
                    <th className="py-3.5 px-6">Submitted Date</th>
                    <th className="py-3.5 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                  {filterLeads(data.trials).length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-slate-400 font-medium">
                        No trial leads found.
                      </td>
                    </tr>
                  ) : (
                    filterLeads(data.trials).map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3.5 px-6">
                          <div className="flex flex-col">
                            <span className="font-semibold text-slate-900">{lead.name}</span>
                            <span className="text-[9px] text-indigo-600 uppercase tracking-wider font-bold mt-0.5">{lead.role || "User"}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-6">
                          <div className="flex flex-col">
                            <span className="flex items-center gap-1 text-[11px] text-slate-800">
                              <Mail className="h-3 w-3 text-slate-400" />
                              {lead.email}
                            </span>
                            <span className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                              <Phone className="h-3 w-3 text-slate-400" />
                              {lead.phone}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-6 text-slate-800">{lead.company}</td>
                        <td className="py-3.5 px-6 text-center font-mono font-semibold text-slate-700">
                          {lead.properties || "—"}
                        </td>
                        <td className="py-3.5 px-6 text-slate-800">
                          <span className="bg-slate-100 border border-slate-200/60 px-2 py-0.5 rounded text-[10px] font-semibold text-slate-700">
                            {lead.pms || "Not specified"}
                          </span>
                        </td>
                        <td className="py-3.5 px-6 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg font-medium">
                            <Calendar className="h-3.5 w-3.5 text-indigo-500" />
                            {formatDate(lead.submitted_at || lead.created_at)}
                          </span>
                        </td>
                        <td className="py-3.5 px-6 text-center">
                          <div className="inline-flex items-center gap-1.5">
                            <button 
                              onClick={() => setViewingTrial(lead)}
                              className="inline-flex items-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/60 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer"
                              title="View Details"
                            >
                              <Eye className="h-3 w-3" />
                              View
                            </button>
                            <button 
                              onClick={() => setEditingTrial(lead)}
                              className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all shadow-sm cursor-pointer"
                              title="Edit Trial Lead"
                            >
                              <Edit2 className="h-3 w-3" />
                              Edit
                            </button>
                            <button 
                              onClick={() => setDeleteTarget({ type: "trials", id: lead.id, title: lead.name })}
                              className="inline-flex items-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-600 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all border border-rose-200/60 cursor-pointer"
                              title="Delete Trial Lead"
                            >
                              <Trash2 className="h-3 w-3" />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Newsletter Subscribers Table */}
          {activeTab === "newsletters" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-6">Subscriber Email</th>
                    <th className="py-3.5 px-6">Signup Source Placement</th>
                    <th className="py-3.5 px-6">Subscribed At</th>
                    <th className="py-3.5 px-6">Status</th>
                    <th className="py-3.5 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                  {filterLeads(data.newsletters).length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-slate-400 font-medium">
                        No newsletter subscribers found.
                      </td>
                    </tr>
                  ) : (
                    filterLeads(data.newsletters).map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3.5 px-6 font-semibold text-slate-900">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-slate-400" />
                            {lead.email}
                          </div>
                        </td>
                        <td className="py-3.5 px-6">
                          <span className="bg-slate-100 text-slate-500 border border-slate-200/50 px-2 py-0.5 rounded text-[10px] font-mono">
                            {lead.sub_source || "general"}
                          </span>
                        </td>
                        <td className="py-3.5 px-6 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg font-medium">
                            <Calendar className="h-3.5 w-3.5 text-indigo-500" />
                            {formatDate(lead.submitted_at || lead.created_at)}
                          </span>
                        </td>
                        <td className="py-3.5 px-6">
                          <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded text-[10px] font-bold">
                            Active
                          </span>
                        </td>
                        <td className="py-3.5 px-6 text-center">
                          <button 
                            onClick={() => setDeleteTarget({ type: "newsletters", id: lead.id, title: lead.email })}
                            className="inline-flex items-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-600 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all border border-rose-200/60 cursor-pointer"
                            title="Delete Subscriber"
                          >
                            <Trash2 className="h-3 w-3" />
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Onboarding Completed */}
          {activeTab === "onboarding" && (
            <div className="p-1">
              <div className="text-[10px] text-slate-400 px-5 py-3 bg-slate-50/50 border-b border-slate-200 font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Click on any company record to expand and view its Users and Properties, or click <strong>View</strong> for full modal profile.</span>
              </div>
              {filterLeads(data.onboarding).length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs font-semibold">
                  No completed onboarding records found.
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {filterLeads(data.onboarding).map((comp) => {
                    const isExpanded = expandedCompanyId === comp.id;
                    const associatedUsers = data.onboarding_users?.filter(u => u.company_id === comp.id) || [];
                    const associatedProps = data.onboarding_properties?.filter(p => p.company_id === comp.id) || [];

                    return (
                      <div key={comp.id} className="transition-all">
                        {/* Row Header */}
                        <div 
                          onClick={() => setExpandedCompanyId(isExpanded ? null : comp.id)}
                          className={`flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 px-6 cursor-pointer hover:bg-slate-50 transition-colors ${isExpanded ? 'bg-slate-50 border-l-4 border-indigo-600' : 'border-l-4 border-transparent'}`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="h-10 w-10 shrink-0 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                              <Building2 className="h-5 w-5 text-indigo-600" />
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-slate-800 leading-tight">{comp.company_name}</h3>
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-1 font-medium">
                                <span className="flex items-center gap-1 text-slate-600 font-semibold">
                                  <Users className="h-3.5 w-3.5 text-slate-400" />
                                  {comp.authorized_person}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3.5 w-3.5 text-slate-400" />
                                  {comp.city}, {comp.state}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1 text-slate-700 bg-slate-100/90 border border-slate-200/70 px-2 py-0.5 rounded text-[11px] font-medium">
                                  <Calendar className="h-3 w-3 text-indigo-600" />
                                  {formatDate(comp.submitted_at || comp.created_at)}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-3 sm:mt-0 gap-6">
                            <div className="flex items-center gap-4 text-xs font-semibold">
                              <div className="text-right">
                                <span className="text-slate-800 block">{associatedProps.length} Properties</span>
                                <span className="text-slate-400 text-[10px] block font-medium">{associatedUsers.length} Users</span>
                              </div>
                              <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                                {comp.decision_maker === "yes" ? "Decision Maker" : "Non-DM"}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="inline-flex items-center gap-1.5">
                                <button 
                                  onClick={(e) => { e.stopPropagation(); setViewingOnboarding(comp); }}
                                  className="inline-flex items-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/60 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer"
                                  title="View Full Profile"
                                >
                                  <Eye className="h-3 w-3" />
                                  View
                                </button>
                                <button 
                                  onClick={(e) => { e.stopPropagation(); setEditingOnboarding(comp); }}
                                  className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all shadow-sm cursor-pointer"
                                  title="Edit Onboarding Company"
                                >
                                  <Edit2 className="h-3 w-3" />
                                  Edit
                                </button>
                                <button 
                                  onClick={(e) => { e.stopPropagation(); setDeleteTarget({ type: "onboarding", id: comp.id, title: comp.company_name }); }}
                                  className="inline-flex items-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-600 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all border border-rose-200/60 cursor-pointer"
                                  title="Delete Onboarding Record"
                                >
                                  <Trash2 className="h-3 w-3" />
                                  Delete
                                </button>
                              </div>
                              {isExpanded ? (
                                <ChevronUp className="h-4 w-4 text-indigo-600" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-slate-400" />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Expanded details */}
                        {isExpanded && (
                          <div className="bg-slate-50 border-t border-slate-100 px-6 py-6 space-y-6">
                            
                            {/* Company Detail Block */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                              <div>
                                <h4 className="text-[9px] uppercase font-bold tracking-wider text-indigo-600 mb-2">Corporate Office</h4>
                                <p className="text-sm font-bold text-slate-800 leading-tight">{comp.company_name}</p>
                                <p className="text-xs text-slate-600 mt-1 flex items-start gap-1">
                                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-slate-400" />
                                  <span>{comp.address}<br />{comp.city}, {comp.state} {comp.zip}</span>
                                </p>
                              </div>
                              <div>
                                <h4 className="text-[9px] uppercase font-bold tracking-wider text-indigo-600 mb-2">Primary Contact</h4>
                                <p className="text-sm font-bold text-slate-800">{comp.authorized_person}</p>
                                <p className="text-xs text-slate-600 mt-1 flex items-center gap-1.5">
                                  <Mail className="h-3.5 w-3.5 text-slate-400" />
                                  {comp.email}
                                </p>
                                <p className="text-xs text-slate-600 mt-1 flex items-center gap-1.5">
                                  <Phone className="h-3.5 w-3.5 text-slate-400" />
                                  Mobile: {comp.mobile}
                                </p>
                              </div>
                              <div>
                                <h4 className="text-[9px] uppercase font-bold tracking-wider text-indigo-600 mb-2">Metadata</h4>
                                <p className="text-xs text-slate-600">
                                  Office Phone: <span className="text-slate-800 font-semibold">{comp.work_phone || "N/A"}</span>
                                </p>
                                <p className="text-xs text-slate-600 mt-1">
                                  Submission: <span className="text-slate-800 font-semibold">{formatDate(comp.submitted_at || comp.created_at)}</span>
                                </p>
                              </div>
                            </div>

                            {/* Secondary Users Block */}
                            <div>
                              <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                Authorized Platform Users
                              </h4>
                              {associatedUsers.length === 0 ? (
                                <p className="text-xs text-slate-400 italic pl-2">No additional team members listed.</p>
                              ) : (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  {associatedUsers.map(user => (
                                    <div key={user.id} className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm flex flex-col justify-between">
                                      <span className="text-xs font-bold text-slate-800 block">{user.name}</span>
                                      <div className="mt-2 space-y-0.5">
                                        <span className="text-[11px] text-slate-600 flex items-center gap-1">
                                          <Mail className="h-3 w-3 text-slate-400" />
                                          {user.email}
                                        </span>
                                        <span className="text-[11px] text-slate-600 flex items-center gap-1">
                                          <Phone className="h-3 w-3 text-slate-400" />
                                          {user.phone}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Properties Block */}
                            <div>
                              <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                                <Building2 className="h-4 w-4" />
                                Configured Properties ({associatedProps.length})
                              </h4>
                              {associatedProps.length === 0 ? (
                                <p className="text-xs text-slate-400 italic pl-2">No hotels added to the wizard.</p>
                              ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {associatedProps.map(prop => (
                                    <div key={prop.id} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:border-indigo-300 transition-colors">
                                      <div>
                                        <div className="flex items-start justify-between">
                                          <div>
                                            <span className="text-xs font-extrabold text-slate-800">{prop.property_name}</span>
                                            <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-[8px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded ml-2">
                                              {prop.brand}
                                            </span>
                                          </div>
                                          <span className="text-[10px] font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-200 text-slate-500 font-bold">
                                            {prop.property_code}
                                          </span>
                                        </div>
                                        
                                        <p className="text-[11px] text-slate-500 mt-1.5 flex items-start gap-1">
                                          <MapPin className="h-3 w-3 mt-0.5 shrink-0 text-slate-400" />
                                          {prop.address}
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-3 mt-3 text-[11px]">
                                          <div>
                                            <span className="text-slate-400 block text-[9px] uppercase font-bold tracking-wider">Property Manager</span>
                                            <span className="text-slate-800 block font-semibold mt-0.5">{prop.manager_name}</span>
                                            <span className="text-slate-500 block">{prop.manager_email}</span>
                                            <span className="text-slate-500 block">{prop.manager_mobile}</span>
                                          </div>
                                          <div>
                                            <span className="text-slate-400 block text-[9px] uppercase font-bold tracking-wider">Rooms & Integrations</span>
                                            <span className="text-slate-800 block font-semibold mt-0.5">{prop.rooms} Rooms</span>
                                            <span className="text-indigo-600 block mt-0.5 font-bold">
                                              PMS: {prop.pms === "Other" ? (prop.pms_other || "Other") : prop.pms}
                                            </span>
                                            <span className="text-slate-500 block">Contact: {prop.contact_person}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW MODAL: CONTACT INQUIRY */}
      {/* ========================================================================= */}
      {viewingContact && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full">
                      Contact Inquiry Details
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">ID #{viewingContact.id}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mt-0.5">{viewingContact.name}</h3>
                </div>
              </div>
              <button
                onClick={() => setViewingContact(null)}
                className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Company / Hotel</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1 flex items-center gap-1.5">
                    <Building2 className="h-4 w-4 text-indigo-600" />
                    {viewingContact.company}
                  </span>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Properties Count</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1 flex items-center gap-1.5 font-mono">
                    <Layers className="h-4 w-4 text-indigo-600" />
                    {viewingContact.properties || "Not specified"}
                  </span>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Email Address</span>
                  <a 
                    href={`mailto:${viewingContact.email}`} 
                    className="text-sm font-semibold text-indigo-600 hover:underline block mt-1 flex items-center gap-1.5"
                  >
                    <Mail className="h-4 w-4 text-slate-400" />
                    {viewingContact.email}
                  </a>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Phone Number</span>
                  <span className="text-sm font-semibold text-slate-800 block mt-1 flex items-center gap-1.5">
                    <Phone className="h-4 w-4 text-slate-400" />
                    {viewingContact.phone || "None provided"}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block mb-1.5">Inquiry Message / Notes</span>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {viewingContact.message || <span className="italic text-slate-400">No custom message included.</span>}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  Submitted: {formatDate(viewingContact.submitted_at || viewingContact.created_at)}
                </span>
              </div>
            </div>

            <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setViewingContact(null)}
                className="rounded-xl text-xs"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setEditingContact(viewingContact);
                  setViewingContact(null);
                }}
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5"
              >
                <Edit2 className="h-3.5 w-3.5" />
                Edit This Lead
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW MODAL: FREE TRIAL LEAD */}
      {/* ========================================================================= */}
      {viewingTrial && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl">
                  <Laptop className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full">
                      Free Trial Lead Profile
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">ID #{viewingTrial.id}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mt-0.5">{viewingTrial.name}</h3>
                </div>
              </div>
              <button
                onClick={() => setViewingTrial(null)}
                className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Job Role / Title</span>
                  <span className="text-sm font-bold text-indigo-600 block mt-1 flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4 text-indigo-500" />
                    {viewingTrial.role || "User"}
                  </span>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Company / Organization</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1 flex items-center gap-1.5">
                    <Building2 className="h-4 w-4 text-indigo-600" />
                    {viewingTrial.company}
                  </span>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Work Email</span>
                  <a 
                    href={`mailto:${viewingTrial.email}`} 
                    className="text-sm font-semibold text-indigo-600 hover:underline block mt-1 flex items-center gap-1.5"
                  >
                    <Mail className="h-4 w-4 text-slate-400" />
                    {viewingTrial.email}
                  </a>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Phone Number</span>
                  <span className="text-sm font-semibold text-slate-800 block mt-1 flex items-center gap-1.5">
                    <Phone className="h-4 w-4 text-slate-400" />
                    {viewingTrial.phone || "None provided"}
                  </span>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Properties</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1 flex items-center gap-1.5 font-mono">
                    <Layers className="h-4 w-4 text-indigo-600" />
                    {viewingTrial.properties || "1-2"}
                  </span>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">PMS System</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1 flex items-center gap-1.5">
                    <Database className="h-4 w-4 text-indigo-600" />
                    <span className="bg-slate-200/70 text-slate-800 px-2 py-0.5 rounded text-xs">
                      {viewingTrial.pms || "Not specified"}
                    </span>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  Requested Trial On: {formatDate(viewingTrial.submitted_at || viewingTrial.created_at)}
                </span>
              </div>
            </div>

            <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setViewingTrial(null)}
                className="rounded-xl text-xs"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setEditingTrial(viewingTrial);
                  setViewingTrial(null);
                }}
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5"
              >
                <Edit2 className="h-3.5 w-3.5" />
                Edit This Trial
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW MODAL: ONBOARDING APPLICATION */}
      {/* ========================================================================= */}
      {viewingOnboarding && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full">
                      Onboarding Application Profile
                    </span>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {viewingOnboarding.decision_maker === "yes" ? "Decision Maker" : "Non-DM"}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mt-0.5">{viewingOnboarding.company_name}</h3>
                </div>
              </div>
              <button
                onClick={() => setViewingOnboarding(null)}
                className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Corporate Info */}
              <div>
                <h4 className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 mb-3 flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5" />
                  Corporate Details & Authorized Signer
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50/80 border border-slate-100 rounded-2xl p-4">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Authorized Signer</span>
                    <span className="text-xs font-bold text-slate-800 block mt-1">{viewingOnboarding.authorized_person}</span>
                    <a href={`mailto:${viewingOnboarding.email}`} className="text-[11px] text-indigo-600 hover:underline block mt-0.5">
                      {viewingOnboarding.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Phone Numbers</span>
                    <span className="text-xs text-slate-700 block mt-1">Mobile: <strong>{viewingOnboarding.mobile || "N/A"}</strong></span>
                    <span className="text-xs text-slate-700 block">Work: <strong>{viewingOnboarding.work_phone || "N/A"}</strong></span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Headquarters Address</span>
                    <span className="text-xs text-slate-700 block mt-1">{viewingOnboarding.address || "N/A"}</span>
                    <span className="text-xs text-slate-700 block">{viewingOnboarding.city}, {viewingOnboarding.state} {viewingOnboarding.zip}</span>
                  </div>
                </div>
              </div>

              {/* Authorized Users List */}
              {(() => {
                const associatedUsers = data.onboarding_users?.filter(u => u.company_id === viewingOnboarding.id) || [];
                return (
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 mb-3 flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" />
                      Authorized Platform Users ({associatedUsers.length})
                    </h4>
                    {associatedUsers.length === 0 ? (
                      <p className="text-xs text-slate-400 italic bg-slate-50 p-4 rounded-xl">No additional team members listed.</p>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {associatedUsers.map(user => (
                          <div key={user.id} className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-3">
                            <span className="text-xs font-bold text-slate-800 block">{user.name}</span>
                            <span className="text-[11px] text-slate-600 block mt-1 flex items-center gap-1">
                              <Mail className="h-3 w-3 text-slate-400" />
                              {user.email}
                            </span>
                            <span className="text-[11px] text-slate-600 block flex items-center gap-1">
                              <Phone className="h-3 w-3 text-slate-400" />
                              {user.phone}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Configured Properties List */}
              {(() => {
                const associatedProps = data.onboarding_properties?.filter(p => p.company_id === viewingOnboarding.id) || [];
                return (
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 mb-3 flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5" />
                      Configured Hotel Properties ({associatedProps.length})
                    </h4>
                    {associatedProps.length === 0 ? (
                      <p className="text-xs text-slate-400 italic bg-slate-50 p-4 rounded-xl">No hotel properties added in the wizard.</p>
                    ) : (
                      <div className="space-y-3">
                        {associatedProps.map(prop => (
                          <div key={prop.id} className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <span className="text-xs font-extrabold text-slate-900">{prop.property_name}</span>
                                <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-[9px] uppercase font-bold px-2 py-0.5 rounded ml-2">
                                  {prop.brand}
                                </span>
                              </div>
                              <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600 font-bold">
                                {prop.property_code}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-slate-400" />
                              {prop.address}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-3 border-t border-slate-200/60 text-xs">
                              <div>
                                <span className="text-[9px] uppercase font-bold text-slate-400 block">General Manager</span>
                                <span className="font-semibold text-slate-800 block mt-0.5">{prop.manager_name}</span>
                                <span className="text-slate-500 block">{prop.manager_email} • {prop.manager_mobile}</span>
                              </div>
                              <div>
                                <span className="text-[9px] uppercase font-bold text-slate-400 block">Rooms & System</span>
                                <span className="font-semibold text-slate-800 block mt-0.5">{prop.rooms} Rooms</span>
                                <span className="text-indigo-600 font-bold block">
                                  PMS: {prop.pms === "Other" ? (prop.pms_other || "Other") : prop.pms}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  Completed Onboarding On: {formatDate(viewingOnboarding.submitted_at || viewingOnboarding.created_at)}
                </span>
              </div>
            </div>

            <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setViewingOnboarding(null)}
                className="rounded-xl text-xs"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setEditingOnboarding(viewingOnboarding);
                  setViewingOnboarding(null);
                }}
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5"
              >
                <Edit2 className="h-3.5 w-3.5" />
                Edit Company Record
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EDIT MODAL: CONTACT INQUIRY */}
      {/* ========================================================================= */}
      {editingContact && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <span className="p-2 bg-indigo-100 text-indigo-700 rounded-xl">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Edit Contact Inquiry</h3>
                  <p className="text-xs text-slate-500">Update lead contact information and notes.</p>
                </div>
              </div>
              <button
                onClick={() => setEditingContact(null)}
                className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveContact} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Full Name *
                  </Label>
                  <Input
                    id="contact-name"
                    value={editingContact.name}
                    onChange={(e) => setEditingContact({ ...editingContact, name: e.target.value })}
                    className="text-xs rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Email Address *
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={editingContact.email}
                    onChange={(e) => setEditingContact({ ...editingContact, email: e.target.value })}
                    className="text-xs rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contact-phone" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Phone Number
                  </Label>
                  <Input
                    id="contact-phone"
                    value={editingContact.phone || ""}
                    onChange={(e) => setEditingContact({ ...editingContact, phone: e.target.value })}
                    className="text-xs rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-company" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Hotel / Company Name *
                  </Label>
                  <Input
                    id="contact-company"
                    value={editingContact.company}
                    onChange={(e) => setEditingContact({ ...editingContact, company: e.target.value })}
                    className="text-xs rounded-xl"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="contact-properties" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Number of Properties / Portfolio Shape
                  </Label>
                  <Input
                    id="contact-properties"
                    value={editingContact.properties || ""}
                    onChange={(e) => setEditingContact({ ...editingContact, properties: e.target.value })}
                    placeholder="e.g. 3-5 hotels, Select-Service"
                    className="text-xs rounded-xl"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                  Inquiry Message / Notes
                </Label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={editingContact.message || ""}
                  onChange={(e) => setEditingContact({ ...editingContact, message: e.target.value })}
                  placeholder="Customer requirements or background notes..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 leading-relaxed resize-none"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditingContact(null)}
                  className="rounded-xl text-xs"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSaving}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5"
                >
                  {isSaving ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EDIT MODAL: FREE TRIAL LEAD */}
      {/* ========================================================================= */}
      {editingTrial && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <span className="p-2 bg-indigo-100 text-indigo-700 rounded-xl">
                  <Laptop className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Edit Free Trial Lead</h3>
                  <p className="text-xs text-slate-500">Update trial applicant info, properties, and PMS stack.</p>
                </div>
              </div>
              <button
                onClick={() => setEditingTrial(null)}
                className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTrial} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="trial-name" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Full Name *
                  </Label>
                  <Input
                    id="trial-name"
                    value={editingTrial.name}
                    onChange={(e) => setEditingTrial({ ...editingTrial, name: e.target.value })}
                    className="text-xs rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="trial-email" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Work Email *
                  </Label>
                  <Input
                    id="trial-email"
                    type="email"
                    value={editingTrial.email}
                    onChange={(e) => setEditingTrial({ ...editingTrial, email: e.target.value })}
                    className="text-xs rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="trial-company" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Company / Organization *
                  </Label>
                  <Input
                    id="trial-company"
                    value={editingTrial.company}
                    onChange={(e) => setEditingTrial({ ...editingTrial, company: e.target.value })}
                    className="text-xs rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="trial-role" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Job Role / Title
                  </Label>
                  <Input
                    id="trial-role"
                    value={editingTrial.role || ""}
                    onChange={(e) => setEditingTrial({ ...editingTrial, role: e.target.value })}
                    placeholder="e.g. General Manager, CFO"
                    className="text-xs rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="trial-phone" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Phone Number
                  </Label>
                  <Input
                    id="trial-phone"
                    value={editingTrial.phone || ""}
                    onChange={(e) => setEditingTrial({ ...editingTrial, phone: e.target.value })}
                    className="text-xs rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="trial-properties" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Number of Properties
                  </Label>
                  <Input
                    id="trial-properties"
                    value={editingTrial.properties || ""}
                    onChange={(e) => setEditingTrial({ ...editingTrial, properties: e.target.value })}
                    placeholder="e.g. 1-2 properties"
                    className="text-xs rounded-xl"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="trial-pms" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    PMS Integration
                  </Label>
                  <Input
                    id="trial-pms"
                    value={editingTrial.pms || ""}
                    onChange={(e) => setEditingTrial({ ...editingTrial, pms: e.target.value })}
                    placeholder="e.g. OPERA, Cloudbeds, Mews, Inn-Flow"
                    className="text-xs rounded-xl"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditingTrial(null)}
                  className="rounded-xl text-xs"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSaving}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5"
                >
                  {isSaving ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EDIT MODAL: ONBOARDING COMPANY */}
      {/* ========================================================================= */}
      {editingOnboarding && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <span className="p-2 bg-indigo-100 text-indigo-700 rounded-xl">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Edit Onboarding Company</h3>
                  <p className="text-xs text-slate-500">Update corporate address, authorized signer, and contact details.</p>
                </div>
              </div>
              <button
                onClick={() => setEditingOnboarding(null)}
                className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveOnboarding} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="onb-company" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Company Name *
                  </Label>
                  <Input
                    id="onb-company"
                    value={editingOnboarding.company_name}
                    onChange={(e) => setEditingOnboarding({ ...editingOnboarding, company_name: e.target.value })}
                    className="text-xs rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="onb-authorized" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Authorized Signer / Contact *
                  </Label>
                  <Input
                    id="onb-authorized"
                    value={editingOnboarding.authorized_person}
                    onChange={(e) => setEditingOnboarding({ ...editingOnboarding, authorized_person: e.target.value })}
                    className="text-xs rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="onb-email" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Corporate Email *
                  </Label>
                  <Input
                    id="onb-email"
                    type="email"
                    value={editingOnboarding.email}
                    onChange={(e) => setEditingOnboarding({ ...editingOnboarding, email: e.target.value })}
                    className="text-xs rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="onb-decision" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Decision Maker Status
                  </Label>
                  <select
                    id="onb-decision"
                    value={editingOnboarding.decision_maker}
                    onChange={(e) => setEditingOnboarding({ ...editingOnboarding, decision_maker: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs bg-white text-slate-900 focus:outline-none focus:border-indigo-500"
                  >
                    <option value="yes">Yes (Primary Decision Maker)</option>
                    <option value="no">No (Representative / Manager)</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="onb-mobile" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Mobile Phone
                  </Label>
                  <Input
                    id="onb-mobile"
                    value={editingOnboarding.mobile || ""}
                    onChange={(e) => setEditingOnboarding({ ...editingOnboarding, mobile: e.target.value })}
                    className="text-xs rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="onb-work" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Office / Work Phone
                  </Label>
                  <Input
                    id="onb-work"
                    value={editingOnboarding.work_phone || ""}
                    onChange={(e) => setEditingOnboarding({ ...editingOnboarding, work_phone: e.target.value })}
                    className="text-xs rounded-xl"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="onb-address" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Street Address
                  </Label>
                  <Input
                    id="onb-address"
                    value={editingOnboarding.address || ""}
                    onChange={(e) => setEditingOnboarding({ ...editingOnboarding, address: e.target.value })}
                    className="text-xs rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="onb-city" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    City
                  </Label>
                  <Input
                    id="onb-city"
                    value={editingOnboarding.city || ""}
                    onChange={(e) => setEditingOnboarding({ ...editingOnboarding, city: e.target.value })}
                    className="text-xs rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="onb-state" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                      State
                    </Label>
                    <Input
                      id="onb-state"
                      value={editingOnboarding.state || ""}
                      onChange={(e) => setEditingOnboarding({ ...editingOnboarding, state: e.target.value })}
                      className="text-xs rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="onb-zip" className="text-xs font-semibold text-slate-700 mb-1.5 block">
                      Zip
                    </Label>
                    <Input
                      id="onb-zip"
                      value={editingOnboarding.zip || ""}
                      onChange={(e) => setEditingOnboarding({ ...editingOnboarding, zip: e.target.value })}
                      className="text-xs rounded-xl"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditingOnboarding(null)}
                  className="rounded-xl text-xs"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSaving}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5"
                >
                  {isSaving ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DELETE CONFIRMATION MODAL */}
      {/* ========================================================================= */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-md shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3">
              <span className="p-3 bg-rose-100 text-rose-700 rounded-2xl">
                <AlertTriangle className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Confirm Deletion</h3>
                <p className="text-xs text-slate-500">This action cannot be undone.</p>
              </div>
            </div>

            <p className="text-xs text-slate-650 leading-relaxed">
              Are you sure you want to permanently delete record for{" "}
              <strong className="text-slate-900">{deleteTarget.title}</strong>?
            </p>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setDeleteTarget(null)}
                className="rounded-xl text-xs"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5"
              >
                {isDeleting ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Trash2 className="h-3.5 w-3.5" />}
                {isDeleting ? "Deleting..." : "Delete Permanently"}
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
