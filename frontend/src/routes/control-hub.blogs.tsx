import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getAdminAuthHeaders, hasPermission } from "@/lib/admin-auth";
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Save, 
  RefreshCw, 
  BookOpen, 
  ArrowLeft, 
  Search, 
  FileText, 
  Eye,
  ShieldAlert,
  UploadCloud,
  Image as ImageIcon,
  X,
  Globe,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";

export const Route = createFileRoute("/control-hub/blogs")({
  component: ControlHubBlogsPage,
  head: () => ({
    meta: [
      { title: "Innrly Control Hub Blog Management" },
      { name: "description", content: "Manage and publish articles on Innrly with SEO controls and image uploads." }
    ]
  })
});

interface BlogPost {
  id?: number;
  slug: string;
  title: string;
  meta_title?: string;
  content: string;
  summary: string;
  meta_description?: string;
  author: string;
  category_id: number | null;
  featured_image: string;
  featured_image_alt?: string;
  status: string; // "draft" or "published"
  in_sitemap?: boolean;
}

interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}

function ControlHubBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const API_BASE = typeof window === "undefined" ? (process.env.BACKEND_URL || "http://127.0.0.1:8005") : "/api";

  useEffect(() => {
    if (hasPermission("blogs")) {
      fetchBlogs();
      fetchCategories();
    }
  }, []);

  if (!hasPermission("blogs")) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-12 text-center text-slate-700 max-w-xl mx-auto my-8 shadow-sm">
        <div className="mx-auto w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-4 shadow-sm">
          <ShieldAlert className="h-6 w-6" />
        </div>
        <h2 className="text-lg font-bold text-slate-900 mb-1">Module Access Restricted</h2>
        <p className="text-xs text-slate-600">
          You do not currently have permission to access the Blog Manager. Please contact your Super Administrator.
        </p>
      </div>
    );
  }

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

  const slugify = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  };

  const handleTitleChange = (title: string) => {
    if (!selectedBlog) return;
    
    if (!selectedBlog.id) {
      setSelectedBlog({
        ...selectedBlog,
        title,
        slug: slugify(title),
        meta_title: selectedBlog.meta_title ? selectedBlog.meta_title : title
      });
    } else {
      setSelectedBlog({
        ...selectedBlog,
        title
      });
    }
  };

  async function handleImageUpload(file: File) {
    if (!selectedBlog) return;
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(`${API_BASE}/admin/blogs/upload-featured-image`, {
        method: "POST",
        headers: getAdminAuthHeaders(),
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setSelectedBlog({
          ...selectedBlog,
          featured_image: data.url,
          featured_image_alt: selectedBlog.featured_image_alt || selectedBlog.title
        });
        toast.success("Featured image uploaded successfully!");
      } else {
        // Fallback to general /upload
        const res2 = await fetch(`${API_BASE}/upload`, {
          method: "POST",
          headers: getAdminAuthHeaders(),
          body: formData,
        });
        if (res2.ok) {
          const data2 = await res2.json();
          setSelectedBlog({
            ...selectedBlog,
            featured_image: data2.url,
            featured_image_alt: selectedBlog.featured_image_alt || selectedBlog.title
          });
          toast.success("Featured image uploaded successfully!");
        } else {
          toast.error("Failed to upload image. Please check file format.");
        }
      }
    } catch (e) {
      toast.error("Network error during image upload.");
    } finally {
      setUploadingImage(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  async function handleSave(e: React.FormEvent) {
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
      const res = await fetch(`${API_BASE}/blog`, {
        method: "POST",
        headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify(selectedBlog),
      });

      if (res.ok) {
        toast.success(
          selectedBlog.id 
            ? "Blog post updated successfully!" 
            : "New blog post created successfully!"
        );
        setSelectedBlog(null);
        fetchBlogs();
      } else {
        const errData = await res.json();
        toast.error(errData.detail || "Failed to save blog post.");
      }
    } catch (e) {
      toast.error("Network error while saving.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number, title: string) {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`${API_BASE}/blog/${id}`, {
        method: "DELETE",
        headers: getAdminAuthHeaders(),
      });

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
      meta_title: "",
      slug: "",
      summary: "",
      meta_description: "",
      content: "",
      category_id: categories.length > 0 ? categories[0].id : null,
      author: "The Innrly Team",
      featured_image: "",
      featured_image_alt: "",
      status: "published",
      in_sitemap: true
    });
  };

  const handleEdit = (blog: BlogPost) => {
    setSelectedBlog({ 
      ...blog,
      meta_title: blog.meta_title || blog.title,
      meta_description: blog.meta_description || blog.summary,
      featured_image_alt: blog.featured_image_alt || "",
      in_sitemap: blog.in_sitemap !== undefined ? Boolean(blog.in_sitemap) : true
    });
  };

  const handleToggleSitemap = async (blog: BlogPost) => {
    if (!blog.id) return;
    const newInSitemap = !(blog.in_sitemap !== false);
    // Optimistic UI update
    setBlogs((prev) =>
      prev.map((b) => (b.id === blog.id ? { ...b, in_sitemap: newInSitemap } : b))
    );
    try {
      const res = await fetch(`${API_BASE}/blog/${blog.id}/quick-update`, {
        method: "POST",
        headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify({ in_sitemap: newInSitemap }),
      });
      if (res.ok) {
        toast.success(newInSitemap ? `Added "${blog.title}" to sitemap.xml` : `Removed "${blog.title}" from sitemap.xml`);
      } else {
        toast.error("Failed to update sitemap inclusion.");
        fetchBlogs();
      }
    } catch {
      toast.error("Network error updating sitemap inclusion.");
      fetchBlogs();
    }
  };

  const handleStatusChange = async (blog: BlogPost, newStatus: string) => {
    if (!blog.id || blog.status === newStatus) return;
    // Optimistic UI update
    setBlogs((prev) =>
      prev.map((b) => (b.id === blog.id ? { ...b, status: newStatus as any } : b))
    );
    try {
      const res = await fetch(`${API_BASE}/blog/${blog.id}/quick-update`, {
        method: "POST",
        headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        toast.success(`"${blog.title}" status changed to ${newStatus}`);
      } else {
        toast.error("Failed to update status.");
        fetchBlogs();
      }
    } catch {
      toast.error("Network error updating status.");
      fetchBlogs();
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto space-y-6">
      {selectedBlog ? (
        /* Form View */
        <form onSubmit={handleSave} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setSelectedBlog(null)}
                className="h-9 w-9 p-0 rounded-xl"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 block">
                  {selectedBlog.id ? "Edit Mode" : "Creation Mode"}
                </span>
                <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-0.5">
                  {selectedBlog.id ? "Edit Blog Post" : "Create New Blog Post"}
                </h1>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setSelectedBlog(null)}
                className="border-slate-200 text-slate-700 bg-white hover:bg-slate-50 h-9 rounded-xl text-xs font-semibold px-4"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={saving}
                className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 font-semibold rounded-xl px-4"
              >
                <Save className="h-3.5 w-3.5" />
                {saving ? "Saving..." : "Save Post"}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Left Column: Content & SEO */}
            <div className="lg:col-span-2 space-y-6">
              {/* Content Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <FileText className="h-4 w-4 text-slate-400" />
                  <h2 className="text-sm font-semibold text-slate-800">Post Content</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-xs font-semibold text-slate-600">
                      Article Title <span className="text-indigo-500">*</span>
                    </Label>
                    <Input
                      id="title"
                      value={selectedBlog.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="e.g. 5 Housekeeping Metrics to Lower Labor Costs"
                      className="mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 font-medium"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="summary" className="text-xs font-semibold text-slate-600">
                      Excerpt / Summary (Listing Preview)
                    </Label>
                    <Textarea
                      id="summary"
                      rows={3}
                      value={selectedBlog.summary || ""}
                      onChange={(e) =>
                        setSelectedBlog({ ...selectedBlog, summary: e.target.value })
                      }
                      placeholder="Provide a brief summary that appears on the blog listing page."
                      className="mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 resize-none text-xs"
                    />
                  </div>

                  <div>
                    <Label className="text-xs font-semibold text-slate-600">
                      Content Body <span className="text-indigo-500">*</span>
                    </Label>
                    <div className="mt-1.5">
                      <Editor
                        tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@6.8.2/tinymce.min.js"
                        value={selectedBlog.content}
                        onEditorChange={(content) => setSelectedBlog({ ...selectedBlog, content })}
                        init={{
                          height: 420,
                          menubar: false,
                          plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                          ],
                          toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | code | help',
                          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO Meta & SERP Preview Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-indigo-600" />
                    <h2 className="text-sm font-semibold text-slate-800">Search Engine Optimization (SEO)</h2>
                  </div>
                  <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Google SERP Preview
                  </span>
                </div>

                {/* Google Search Snippet Simulation */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-1 font-sans">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="w-4 h-4 rounded-full bg-indigo-600 text-white text-[9px] flex items-center justify-center font-bold">i</span>
                    <span>innrly.com</span>
                    <span className="text-slate-300">›</span>
                    <span className="text-slate-600 font-mono">blog</span>
                    <span className="text-slate-300">›</span>
                    <span className="text-slate-600 font-mono truncate max-w-[200px]">{selectedBlog.slug || "post-slug"}</span>
                  </div>
                  <h3 className="text-base font-medium text-blue-700 hover:underline cursor-pointer truncate pt-0.5">
                    {selectedBlog.meta_title || selectedBlog.title || "Your Blog Post Title"} | Innrly
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {selectedBlog.meta_description || selectedBlog.summary || "Add a meta description to see how your article will appear in Google search results..."}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="meta_title" className="text-xs font-semibold text-slate-600">
                        SEO Meta Title
                      </Label>
                      <span className={`text-[10px] font-mono ${(selectedBlog.meta_title || selectedBlog.title || "").length > 60 ? "text-amber-600 font-bold" : "text-slate-400"}`}>
                        {(selectedBlog.meta_title || selectedBlog.title || "").length} / 60 characters
                      </span>
                    </div>
                    <Input
                      id="meta_title"
                      value={selectedBlog.meta_title !== undefined ? selectedBlog.meta_title : selectedBlog.title}
                      onChange={(e) =>
                        setSelectedBlog({ ...selectedBlog, meta_title: e.target.value })
                      }
                      placeholder="Title tag for search engines (defaults to article title)"
                      className="mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 text-xs"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">Recommended: 50–60 characters for best Google display.</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="meta_description" className="text-xs font-semibold text-slate-600">
                        SEO Meta Description
                      </Label>
                      <span className={`text-[10px] font-mono ${(selectedBlog.meta_description || selectedBlog.summary || "").length > 160 ? "text-amber-600 font-bold" : "text-slate-400"}`}>
                        {(selectedBlog.meta_description || selectedBlog.summary || "").length} / 160 characters
                      </span>
                    </div>
                    <Textarea
                      id="meta_description"
                      rows={3}
                      value={selectedBlog.meta_description !== undefined ? selectedBlog.meta_description : (selectedBlog.summary || "")}
                      onChange={(e) =>
                        setSelectedBlog({ ...selectedBlog, meta_description: e.target.value })
                      }
                      placeholder="Concise summary shown under the Google title link."
                      className="mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 text-xs resize-none"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">Recommended: 120–160 characters describing the article value.</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div>
                      <Label htmlFor="in_sitemap" className="text-xs font-semibold text-slate-700 cursor-pointer">
                        Include in XML Sitemap
                      </Label>
                      <p className="text-[11px] text-slate-400">Allow search engine crawlers to discover this post via /sitemap.xml</p>
                    </div>
                    <input
                      id="in_sitemap"
                      type="checkbox"
                      checked={selectedBlog.in_sitemap !== false}
                      onChange={(e) =>
                        setSelectedBlog({ ...selectedBlog, in_sitemap: e.target.checked })
                      }
                      className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Settings & Featured Image */}
            <div className="space-y-6">
              {/* Featured Image & Alt Tag Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <ImageIcon className="h-4 w-4 text-slate-400" />
                  <h2 className="text-sm font-semibold text-slate-800">Featured Image & Alt Tag</h2>
                </div>

                {/* Upload or Preview */}
                <div className="space-y-3">
                  {selectedBlog.featured_image ? (
                    <div className="space-y-2">
                      <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-slate-50 aspect-video flex items-center justify-center group">
                        <img
                          src={selectedBlog.featured_image}
                          alt={selectedBlog.featured_image_alt || selectedBlog.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80";
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => setSelectedBlog({ ...selectedBlog, featured_image: "" })}
                          className="absolute top-2 right-2 bg-rose-600/90 hover:bg-rose-700 text-white p-1 rounded-full shadow transition-opacity"
                          title="Remove Image"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-xs flex-1 gap-1.5 text-white"
                          disabled={uploadingImage}
                        >
                          <UploadCloud className="h-3.5 w-3.5" />
                          {uploadingImage ? "Uploading..." : "Replace Image"}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/20 rounded-xl p-6 text-center cursor-pointer transition-all space-y-2"
                    >
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                        <UploadCloud className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-700">Click to upload featured image</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">PNG, JPG, WebP, SVG up to 10MB</p>
                      </div>
                      {uploadingImage && <p className="text-xs text-indigo-600 font-semibold animate-pulse">Uploading file...</p>}
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(file);
                    }}
                  />

                  {/* Manual URL Input */}
                  <div>
                    <Label htmlFor="featured_image" className="text-[11px] font-semibold text-slate-500">
                      Or Image URL
                    </Label>
                    <Input
                      id="featured_image"
                      value={selectedBlog.featured_image || ""}
                      onChange={(e) =>
                        setSelectedBlog({ ...selectedBlog, featured_image: e.target.value })
                      }
                      placeholder="/uploads/... or https://..."
                      className="mt-1 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 text-xs font-mono"
                    />
                  </div>

                  {/* Image Alt Tag */}
                  <div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="featured_image_alt" className="text-xs font-semibold text-slate-700">
                        Image Alt Tag <span className="text-indigo-500">*</span>
                      </Label>
                      <span className="text-[10px] text-slate-400">SEO & Accessibility</span>
                    </div>
                    <Input
                      id="featured_image_alt"
                      value={selectedBlog.featured_image_alt || ""}
                      onChange={(e) =>
                        setSelectedBlog({ ...selectedBlog, featured_image_alt: e.target.value })
                      }
                      placeholder="e.g. Hotel night auditor using Innrly software"
                      className="mt-1 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 text-xs"
                    />
                    <p className="text-[10px] text-slate-400 mt-1">
                      Helps rank in Google Images and meets accessibility guidelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Metadata Settings Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <BookOpen className="h-4 w-4 text-slate-400" />
                  <h2 className="text-sm font-semibold text-slate-800">Publishing Settings</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="slug" className="text-xs font-semibold text-slate-600">
                      URL Slug <span className="text-indigo-500">*</span>
                    </Label>
                    <Input
                      id="slug"
                      value={selectedBlog.slug}
                      onChange={(e) =>
                        setSelectedBlog({ ...selectedBlog, slug: slugify(e.target.value) })
                      }
                      placeholder="housekeeping-labor-metrics"
                      className="mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 text-xs font-mono"
                      required
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block truncate">
                      /blog/{selectedBlog.slug || "slug"}
                    </span>
                  </div>

                  <div>
                    <Label htmlFor="category" className="text-xs font-semibold text-slate-600">
                      Category
                    </Label>
                    <select
                      id="category"
                      value={selectedBlog.category_id || ""}
                      onChange={(e) =>
                        setSelectedBlog({ ...selectedBlog, category_id: parseInt(e.target.value) || null })
                      }
                      className="w-full mt-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="author" className="text-xs font-semibold text-slate-600">
                      Author Name
                    </Label>
                    <Input
                      id="author"
                      value={selectedBlog.author || ""}
                      onChange={(e) =>
                        setSelectedBlog({ ...selectedBlog, author: e.target.value })
                      }
                      placeholder="e.g. The Innrly Team"
                      className="mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 text-xs"
                    />
                  </div>

                  <div>
                    <Label htmlFor="status" className="text-xs font-semibold text-slate-600">
                      Publish Status
                    </Label>
                    <select
                      id="status"
                      value={selectedBlog.status || "published"}
                      onChange={(e) =>
                        setSelectedBlog({ ...selectedBlog, status: e.target.value })
                      }
                      className="w-full mt-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-semibold"
                    >
                      <option value="published" className="text-emerald-700 font-semibold">Published (Live)</option>
                      <option value="draft" className="text-amber-700 font-semibold">Draft (Hidden)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        /* List View */
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 block">
                Dashboard
              </span>
              <h1 className="text-2xl font-bold text-slate-800 mt-1">Blog Management</h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Manage, edit, create, or delete articles published on the Innrly website with SEO meta and image controls.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={fetchBlogs}
                disabled={loading}
                className="border-slate-200 hover:bg-slate-50 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 rounded-xl"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button
                onClick={handleAddNew}
                className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 font-semibold rounded-xl px-4"
              >
                <Plus className="h-3.5 w-3.5" />
                Add New Post
              </Button>
            </div>
          </div>

          {/* Search bar */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search blog posts by title, category, or URL slug..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 text-sm transition-all"
              />
            </div>
            {searchTerm && (
              <Button
                variant="ghost"
                onClick={() => setSearchTerm("")}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                Clear
              </Button>
            )}
          </div>

          {/* Table Container */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Article</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">SEO & Sitemap</th>
                    <th className="py-3 px-4">Author</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredBlogs.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-400">
                        {loading ? "Loading articles..." : "No articles found."}
                      </td>
                    </tr>
                  ) : (
                    filteredBlogs.map((blog) => (
                      <tr key={blog.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            {blog.featured_image ? (
                              <img
                                src={blog.featured_image}
                                alt={blog.featured_image_alt || blog.title}
                                className="w-10 h-10 object-cover rounded-lg border border-slate-200 shrink-0"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = 'none';
                                }}
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                                <FileText className="h-4 w-4" />
                              </div>
                            )}
                            <div className="min-w-0">
                              <p className="font-semibold text-slate-900 truncate max-w-sm">{blog.title}</p>
                              <p className="text-[10px] text-slate-400 font-mono truncate">/blog/{blog.slug}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-block bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-medium">
                            {(blog as any).category_name || "General"}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => handleToggleSitemap(blog)}
                              title={blog.in_sitemap !== false ? "Click to remove from sitemap.xml" : "Click to include in sitemap.xml"}
                              className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded border transition-all cursor-pointer hover:shadow-xs active:scale-95 ${
                                blog.in_sitemap !== false
                                  ? "text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
                                  : "text-slate-500 bg-slate-100 border-slate-200 hover:bg-slate-200"
                              }`}
                            >
                              {blog.in_sitemap !== false ? (
                                <>
                                  <CheckCircle2 className="h-3 w-3 text-emerald-600" /> Sitemap
                                </>
                              ) : (
                                <>
                                  <span className="text-slate-400 font-bold">✕</span> No Sitemap
                                </>
                              )}
                            </button>
                            {blog.meta_title && (
                              <span className="text-[10px] text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200" title={`Custom Meta Title: ${blog.meta_title}`}>
                                Meta
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-slate-700">{blog.author || "Admin"}</td>
                        <td className="py-3 px-4">
                          <select
                            value={blog.status || "published"}
                            onChange={(e) => handleStatusChange(blog, e.target.value)}
                            className={`text-[10px] font-semibold rounded-full px-2 py-0.5 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-colors ${
                              blog.status === "published"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                                : "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
                            }`}
                            title="Click to change publication status"
                          >
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                          </select>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <a
                              href={`/blog/${blog.slug}`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                              title="View Public Post"
                            >
                              <Eye className="h-4 w-4" />
                            </a>
                            <button
                              onClick={() => handleEdit(blog)}
                              className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => blog.id && handleDelete(blog.id, blog.title)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
