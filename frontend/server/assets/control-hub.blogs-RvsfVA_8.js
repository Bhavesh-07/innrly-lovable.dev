import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { B as Button, L as Label, I as Input } from "./router-uiSeds_Z.js";
import { T as Textarea } from "./textarea-C5B3nJdc.js";
import { toast } from "sonner";
import { ArrowLeft, Save, FileText, BookOpen, RefreshCw, Plus, Search, Eye, Edit2, Trash2 } from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const API_BASE = "http://localhost:8000";
  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);
  async function fetchCategories() {
    try {
      const res = await fetch(`${API_BASE}/blog-categories`);
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    } catch (e) {
      console.error("Failed to load categories", e);
    }
  }
  async function fetchBlogs() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/blog`);
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      } else {
        toast.error("Failed to load blog posts.");
      }
    } catch (e) {
      toast.error("Network error while loading blog posts.");
    } finally {
      setLoading(false);
    }
  }
  const slugify = (text) => {
    return text.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  };
  const handleTitleChange = (title) => {
    if (!selectedBlog) return;
    if (!selectedBlog.id) {
      setSelectedBlog({
        ...selectedBlog,
        title,
        slug: slugify(title)
      });
    } else {
      setSelectedBlog({
        ...selectedBlog,
        title
      });
    }
  };
  async function handleSave(e) {
    e.preventDefault();
    if (!selectedBlog) return;
    if (!selectedBlog.title.trim()) {
      toast.error("Title is required.");
      return;
    }
    if (!selectedBlog.slug.trim()) {
      toast.error("Slug is required.");
      return;
    }
    if (!selectedBlog.content.trim()) {
      toast.error("Content body is required.");
      return;
    }
    setSaving(true);
    try {
      const token = localStorage.getItem("innrly_admin_token") || "";
      const res = await fetch(`${API_BASE}/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(selectedBlog)
      });
      if (res.status === 401) {
        localStorage.removeItem("innrly_admin_token");
        window.location.href = "/control-hub/login";
        return;
      }
      if (res.ok) {
        toast.success(selectedBlog.id ? "Blog post updated successfully!" : "New blog post created successfully!");
        setSelectedBlog(null);
        fetchBlogs();
      } else {
        const errData = await res.json();
        toast.error(errData.detail || "Failed to save blog post.");
      }
    } catch (e2) {
      toast.error("Network error while saving.");
    } finally {
      setSaving(false);
    }
  }
  async function handleDelete(id, title) {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    try {
      const token = localStorage.getItem("innrly_admin_token") || "";
      const res = await fetch(`${API_BASE}/blog/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (res.status === 401) {
        localStorage.removeItem("innrly_admin_token");
        window.location.href = "/control-hub/login";
        return;
      }
      if (res.ok) {
        toast.success("Blog post deleted successfully!");
        fetchBlogs();
      } else {
        toast.error("Failed to delete blog post.");
      }
    } catch (e) {
      toast.error("Network error while deleting.");
    }
  }
  const handleAddNew = () => {
    setSelectedBlog({
      title: "",
      slug: "",
      summary: "",
      content: "",
      category_id: categories.length > 0 ? categories[0].id : null,
      author: "Admin",
      featured_image: "",
      status: "published"
    });
  };
  const handleEdit = (blog) => {
    setSelectedBlog({
      ...blog
    });
  };
  const filteredBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.slug.toLowerCase().includes(searchTerm.toLowerCase()));
  return /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto space-y-6", children: selectedBlog ? (
    /* Form View */
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSave, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => setSelectedBlog(null), className: "h-9 w-9 p-0 rounded-xl bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900", children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 block", children: selectedBlog.id ? "Edit Mode" : "Creation Mode" }),
            /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-slate-800 tracking-tight mt-0.5", children: selectedBlog.id ? "Edit Blog Post" : "Create New Blog Post" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => setSelectedBlog(null), className: "border-slate-200 text-slate-700 bg-white hover:bg-slate-50 h-9 rounded-xl text-xs font-semibold px-4", children: "Cancel" }),
          /* @__PURE__ */ jsxs(Button, { type: "submit", disabled: saving, className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 font-semibold rounded-xl px-4", children: [
            /* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }),
            saving ? "Saving..." : "Save Post"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-slate-100 pb-3", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-slate-400" }),
            /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold text-slate-800", children: "Post Content" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(Label, { htmlFor: "title", className: "text-xs font-semibold text-slate-600", children: [
                "Title ",
                /* @__PURE__ */ jsx("span", { className: "text-indigo-500", children: "*" })
              ] }),
              /* @__PURE__ */ jsx(Input, { id: "title", value: selectedBlog.title, onChange: (e) => handleTitleChange(e.target.value), placeholder: "e.g. 5 Housekeeping Metrics to Lower Labor Costs", className: "mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20", required: true })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "summary", className: "text-xs font-semibold text-slate-600", children: "Excerpt / Summary" }),
              /* @__PURE__ */ jsx(Textarea, { id: "summary", rows: 3, value: selectedBlog.summary || "", onChange: (e) => setSelectedBlog({
                ...selectedBlog,
                summary: e.target.value
              }), placeholder: "Provide a brief summary that appears on the blog listing page.", className: "mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 resize-none" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(Label, { className: "text-xs font-semibold text-slate-600", children: [
                "Content Body ",
                /* @__PURE__ */ jsx("span", { className: "text-indigo-500", children: "*" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-1.5", children: /* @__PURE__ */ jsx(Editor, { tinymceScriptSrc: "https://cdn.jsdelivr.net/npm/tinymce@6.8.2/tinymce.min.js", value: selectedBlog.content, onEditorChange: (content) => setSelectedBlog({
                ...selectedBlog,
                content
              }), init: {
                height: 400,
                menubar: false,
                plugins: ["advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "code", "help", "wordcount"],
                toolbar: "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | code | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
              } }) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-slate-100 pb-3", children: [
            /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 text-slate-400" }),
            /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold text-slate-800", children: "Metadata & Tags" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(Label, { htmlFor: "slug", className: "text-xs font-semibold text-slate-600", children: [
                "URL Slug ",
                /* @__PURE__ */ jsx("span", { className: "text-indigo-500", children: "*" })
              ] }),
              /* @__PURE__ */ jsx(Input, { id: "slug", value: selectedBlog.slug, onChange: (e) => setSelectedBlog({
                ...selectedBlog,
                slug: slugify(e.target.value)
              }), placeholder: "housekeeping-labor-metrics", className: "mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20", required: true })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "category", className: "text-xs font-semibold text-slate-600", children: "Category" }),
              /* @__PURE__ */ jsxs("select", { id: "category", value: selectedBlog.category_id || "", onChange: (e) => setSelectedBlog({
                ...selectedBlog,
                category_id: parseInt(e.target.value) || null
              }), className: "w-full mt-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500", children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Select Category" }),
                categories.map((cat) => /* @__PURE__ */ jsx("option", { value: cat.id, children: cat.name }, cat.id))
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "author", className: "text-xs font-semibold text-slate-600", children: "Author" }),
              /* @__PURE__ */ jsx(Input, { id: "author", value: selectedBlog.author || "", onChange: (e) => setSelectedBlog({
                ...selectedBlog,
                author: e.target.value
              }), placeholder: "e.g. Admin", className: "mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "featured_image", className: "text-xs font-semibold text-slate-600", children: "Featured Image URL" }),
              /* @__PURE__ */ jsx(Input, { id: "featured_image", value: selectedBlog.featured_image || "", onChange: (e) => setSelectedBlog({
                ...selectedBlog,
                featured_image: e.target.value
              }), placeholder: "https://...", className: "mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "status", className: "text-xs font-semibold text-slate-600", children: "Status" }),
              /* @__PURE__ */ jsxs("select", { id: "status", value: selectedBlog.status || "published", onChange: (e) => setSelectedBlog({
                ...selectedBlog,
                status: e.target.value
              }), className: "w-full mt-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500", children: [
                /* @__PURE__ */ jsx("option", { value: "published", children: "Published" }),
                /* @__PURE__ */ jsx("option", { value: "draft", children: "Draft" })
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ) : (
    /* List View */
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 block", children: "Dashboard" }),
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-slate-800 mt-1", children: "Blog Management" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: "Manage, edit, create, or delete articles published on the Innrly website." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: fetchBlogs, disabled: loading, className: "border-slate-200 hover:bg-slate-50 text-slate-700 bg-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 rounded-xl", children: [
            /* @__PURE__ */ jsx(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }),
            "Refresh"
          ] }),
          /* @__PURE__ */ jsxs(Button, { onClick: handleAddNew, className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 font-semibold rounded-xl px-4", children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }),
            "Add New Post"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
          /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search blog posts by title, category, or URL slug...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 text-sm transition-all" })
        ] }),
        searchTerm && /* @__PURE__ */ jsx(Button, { variant: "ghost", onClick: () => setSearchTerm(""), className: "text-xs text-slate-500 hover:text-slate-800", children: "Clear" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Title" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Slug" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Category" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-center", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-100 text-xs text-slate-700", children: loading && blogs.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 6, className: "py-12 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx(RefreshCw, { className: "h-6 w-6 text-indigo-600 animate-spin" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500 mt-2 font-medium", children: "Fetching blog posts..." })
        ] }) }) }) : filteredBlogs.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 6, className: "py-12 text-center text-slate-400 font-medium", children: "No blog posts found." }) }) : filteredBlogs.map((blog) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50/50 transition-colors", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 font-semibold text-slate-900 max-w-xs truncate", children: blog.title }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-slate-500 font-mono text-[11px]", children: blog.slug }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsx("span", { className: "bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-0.5 rounded text-[10px] font-bold", children: blog.category_name || "Uncategorized" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-slate-500 font-medium", children: blog.status }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-1.5 justify-center", children: [
            /* @__PURE__ */ jsx("a", { href: `/blog/${blog.slug}`, target: "_blank", rel: "noopener noreferrer", className: "bg-sky-500 hover:bg-sky-600 text-white p-1.5 rounded-lg transition-all shadow-sm flex items-center justify-center", title: "View Post", children: /* @__PURE__ */ jsx(Eye, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleEdit(blog), className: "bg-slate-800 hover:bg-slate-700 text-white p-1.5 rounded-lg transition-all shadow-sm flex items-center justify-center", title: "Edit Post", children: /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleDelete(blog.id, blog.title), className: "bg-red-500 hover:bg-red-650 text-white p-1.5 rounded-lg transition-all shadow-sm flex items-center justify-center", title: "Delete Post", children: /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }) })
          ] }) })
        ] }, blog.id)) })
      ] }) }) })
    ] })
  ) });
}
export {
  AdminBlogsPage as component
};
