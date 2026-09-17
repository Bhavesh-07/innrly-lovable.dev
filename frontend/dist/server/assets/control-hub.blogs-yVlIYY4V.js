import { t as Button } from "./button-Dkpg6g2Z.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { t as Label } from "./label-DBD1bRRP.js";
import { i as getAdminAuthHeaders, u as hasPermission } from "./admin-auth-BJrXWVgX.js";
import { t as Textarea } from "./textarea-kko37XEX.js";
import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, BookOpen, CheckCircle2, Edit2, Eye, FileText, Globe, Image, Plus, RefreshCw, Save, Search, ShieldAlert, Trash2, UploadCloud, X } from "lucide-react";
import { toast } from "sonner";
import { Editor } from "@tinymce/tinymce-react";
//#region src/routes/control-hub.blogs.tsx?tsr-split=component
function ControlHubBlogsPage() {
	const [blogs, setBlogs] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);
	const [saving, setSaving] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [uploadingImage, setUploadingImage] = useState(false);
	const [selectedBlog, setSelectedBlog] = useState(null);
	const fileInputRef = useRef(null);
	const API_BASE = typeof window === "undefined" ? process.env.BACKEND_URL || "http://127.0.0.1:8000" : "/api";
	useEffect(() => {
		if (hasPermission("blogs")) {
			fetchBlogs();
			fetchCategories();
		}
	}, []);
	if (!hasPermission("blogs")) return /* @__PURE__ */ jsxs("div", {
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
				children: "You do not currently have permission to access the Blog Manager. Please contact your Super Administrator."
			})
		]
	});
	async function fetchCategories() {
		try {
			const res = await fetch(`${API_BASE}/blog-categories`);
			if (res.ok) setCategories(await res.json());
		} catch (e) {
			console.error("Failed to load categories", e);
		}
	}
	async function fetchBlogs() {
		setLoading(true);
		try {
			const res = await fetch(`${API_BASE}/blog`);
			if (res.ok) setBlogs(await res.json());
			else toast.error("Failed to load blog posts.");
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
		if (!selectedBlog.id) setSelectedBlog({
			...selectedBlog,
			title,
			slug: slugify(title),
			meta_title: selectedBlog.meta_title ? selectedBlog.meta_title : title
		});
		else setSelectedBlog({
			...selectedBlog,
			title
		});
	};
	async function handleImageUpload(file) {
		if (!selectedBlog) return;
		setUploadingImage(true);
		try {
			const formData = new FormData();
			formData.append("file", file);
			const res = await fetch(`${API_BASE}/admin/blogs/upload-featured-image`, {
				method: "POST",
				headers: getAdminAuthHeaders(),
				body: formData
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
				const res2 = await fetch(`${API_BASE}/upload`, {
					method: "POST",
					headers: getAdminAuthHeaders(),
					body: formData
				});
				if (res2.ok) {
					const data2 = await res2.json();
					setSelectedBlog({
						...selectedBlog,
						featured_image: data2.url,
						featured_image_alt: selectedBlog.featured_image_alt || selectedBlog.title
					});
					toast.success("Featured image uploaded successfully!");
				} else toast.error("Failed to upload image. Please check file format.");
			}
		} catch (e) {
			toast.error("Network error during image upload.");
		} finally {
			setUploadingImage(false);
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	}
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
			const res = await fetch(`${API_BASE}/blog`, {
				method: "POST",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify(selectedBlog)
			});
			if (res.ok) {
				toast.success(selectedBlog.id ? "Blog post updated successfully!" : "New blog post created successfully!");
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
	async function handleDelete(id, title) {
		if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
		try {
			if ((await fetch(`${API_BASE}/blog/${id}`, {
				method: "DELETE",
				headers: getAdminAuthHeaders()
			})).ok) {
				toast.success("Blog post deleted successfully!");
				fetchBlogs();
			} else toast.error("Failed to delete blog post.");
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
	const handleEdit = (blog) => {
		setSelectedBlog({
			...blog,
			meta_title: blog.meta_title || blog.title,
			meta_description: blog.meta_description || blog.summary,
			featured_image_alt: blog.featured_image_alt || "",
			in_sitemap: blog.in_sitemap !== void 0 ? Boolean(blog.in_sitemap) : true
		});
	};
	const handleToggleSitemap = async (blog) => {
		if (!blog.id) return;
		const newInSitemap = !(blog.in_sitemap !== false);
		setBlogs((prev) => prev.map((b) => b.id === blog.id ? {
			...b,
			in_sitemap: newInSitemap
		} : b));
		try {
			if ((await fetch(`${API_BASE}/blog/${blog.id}/quick-update`, {
				method: "POST",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify({ in_sitemap: newInSitemap })
			})).ok) toast.success(newInSitemap ? `Added "${blog.title}" to sitemap.xml` : `Removed "${blog.title}" from sitemap.xml`);
			else {
				toast.error("Failed to update sitemap inclusion.");
				fetchBlogs();
			}
		} catch {
			toast.error("Network error updating sitemap inclusion.");
			fetchBlogs();
		}
	};
	const handleStatusChange = async (blog, newStatus) => {
		if (!blog.id || blog.status === newStatus) return;
		setBlogs((prev) => prev.map((b) => b.id === blog.id ? {
			...b,
			status: newStatus
		} : b));
		try {
			if ((await fetch(`${API_BASE}/blog/${blog.id}/quick-update`, {
				method: "POST",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify({ status: newStatus })
			})).ok) toast.success(`"${blog.title}" status changed to ${newStatus}`);
			else {
				toast.error("Failed to update status.");
				fetchBlogs();
			}
		} catch {
			toast.error("Network error updating status.");
			fetchBlogs();
		}
	};
	const filteredBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.slug.toLowerCase().includes(searchTerm.toLowerCase()));
	return /* @__PURE__ */ jsx("div", {
		className: "mx-auto space-y-6",
		children: selectedBlog ? /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSave,
			className: "space-y-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						onClick: () => setSelectedBlog(null),
						className: "h-9 w-9 p-0 rounded-xl",
						children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
						className: "text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 block",
						children: selectedBlog.id ? "Edit Mode" : "Creation Mode"
					}), /* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-bold text-slate-800 tracking-tight mt-0.5",
						children: selectedBlog.id ? "Edit Blog Post" : "Create New Blog Post"
					})] })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						onClick: () => setSelectedBlog(null),
						className: "border-slate-200 text-slate-700 bg-white hover:bg-slate-50 h-9 rounded-xl text-xs font-semibold px-4",
						children: "Cancel"
					}), /* @__PURE__ */ jsxs(Button, {
						type: "submit",
						disabled: saving,
						className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 font-semibold rounded-xl px-4",
						children: [/* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }), saving ? "Saving..." : "Save Post"]
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-2 space-y-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 border-b border-slate-100 pb-3",
							children: [/* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-slate-400" }), /* @__PURE__ */ jsx("h2", {
								className: "text-sm font-semibold text-slate-800",
								children: "Post Content"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "title",
									className: "text-xs font-semibold text-slate-600",
									children: ["Article Title ", /* @__PURE__ */ jsx("span", {
										className: "text-indigo-500",
										children: "*"
									})]
								}), /* @__PURE__ */ jsx(Input, {
									id: "title",
									value: selectedBlog.title,
									onChange: (e) => handleTitleChange(e.target.value),
									placeholder: "e.g. 5 Housekeeping Metrics to Lower Labor Costs",
									className: "mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 font-medium",
									required: true
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "summary",
									className: "text-xs font-semibold text-slate-600",
									children: "Excerpt / Summary (Listing Preview)"
								}), /* @__PURE__ */ jsx(Textarea, {
									id: "summary",
									rows: 3,
									value: selectedBlog.summary || "",
									onChange: (e) => setSelectedBlog({
										...selectedBlog,
										summary: e.target.value
									}),
									placeholder: "Provide a brief summary that appears on the blog listing page.",
									className: "mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 resize-none text-xs"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(Label, {
									className: "text-xs font-semibold text-slate-600",
									children: ["Content Body ", /* @__PURE__ */ jsx("span", {
										className: "text-indigo-500",
										children: "*"
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-1.5",
									children: /* @__PURE__ */ jsx(Editor, {
										tinymceScriptSrc: "https://cdn.jsdelivr.net/npm/tinymce@6.8.2/tinymce.min.js",
										value: selectedBlog.content,
										onEditorChange: (content) => setSelectedBlog({
											...selectedBlog,
											content
										}),
										init: {
											height: 420,
											menubar: false,
											plugins: [
												"advlist",
												"autolink",
												"lists",
												"link",
												"image",
												"charmap",
												"preview",
												"anchor",
												"searchreplace",
												"visualblocks",
												"code",
												"fullscreen",
												"insertdatetime",
												"media",
												"table",
												"code",
												"help",
												"wordcount"
											],
											toolbar: "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | code | help",
											content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
										}
									})
								})] })
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between border-b border-slate-100 pb-3",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-indigo-600" }), /* @__PURE__ */ jsx("h2", {
										className: "text-sm font-semibold text-slate-800",
										children: "Search Engine Optimization (SEO)"
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200",
									children: "Google SERP Preview"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-1 font-sans",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-xs text-slate-500",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "w-4 h-4 rounded-full bg-indigo-600 text-white text-[9px] flex items-center justify-center font-bold",
												children: "i"
											}),
											/* @__PURE__ */ jsx("span", { children: "innrly.com" }),
											/* @__PURE__ */ jsx("span", {
												className: "text-slate-300",
												children: "›"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-slate-600 font-mono",
												children: "blog"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-slate-300",
												children: "›"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-slate-600 font-mono truncate max-w-[200px]",
												children: selectedBlog.slug || "post-slug"
											})
										]
									}),
									/* @__PURE__ */ jsxs("h3", {
										className: "text-base font-medium text-blue-700 hover:underline cursor-pointer truncate pt-0.5",
										children: [selectedBlog.meta_title || selectedBlog.title || "Your Blog Post Title", " | Innrly"]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-slate-600 line-clamp-2 leading-relaxed",
										children: selectedBlog.meta_description || selectedBlog.summary || "Add a meta description to see how your article will appear in Google search results..."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-4 pt-2",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx(Label, {
												htmlFor: "meta_title",
												className: "text-xs font-semibold text-slate-600",
												children: "SEO Meta Title"
											}), /* @__PURE__ */ jsxs("span", {
												className: `text-[10px] font-mono ${(selectedBlog.meta_title || selectedBlog.title || "").length > 60 ? "text-amber-600 font-bold" : "text-slate-400"}`,
												children: [(selectedBlog.meta_title || selectedBlog.title || "").length, " / 60 characters"]
											})]
										}),
										/* @__PURE__ */ jsx(Input, {
											id: "meta_title",
											value: selectedBlog.meta_title !== void 0 ? selectedBlog.meta_title : selectedBlog.title,
											onChange: (e) => setSelectedBlog({
												...selectedBlog,
												meta_title: e.target.value
											}),
											placeholder: "Title tag for search engines (defaults to article title)",
											className: "mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 text-xs"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[11px] text-slate-400 mt-1",
											children: "Recommended: 50–60 characters for best Google display."
										})
									] }),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx(Label, {
												htmlFor: "meta_description",
												className: "text-xs font-semibold text-slate-600",
												children: "SEO Meta Description"
											}), /* @__PURE__ */ jsxs("span", {
												className: `text-[10px] font-mono ${(selectedBlog.meta_description || selectedBlog.summary || "").length > 160 ? "text-amber-600 font-bold" : "text-slate-400"}`,
												children: [(selectedBlog.meta_description || selectedBlog.summary || "").length, " / 160 characters"]
											})]
										}),
										/* @__PURE__ */ jsx(Textarea, {
											id: "meta_description",
											rows: 3,
											value: selectedBlog.meta_description !== void 0 ? selectedBlog.meta_description : selectedBlog.summary || "",
											onChange: (e) => setSelectedBlog({
												...selectedBlog,
												meta_description: e.target.value
											}),
											placeholder: "Concise summary shown under the Google title link.",
											className: "mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 text-xs resize-none"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[11px] text-slate-400 mt-1",
											children: "Recommended: 120–160 characters describing the article value."
										})
									] }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between pt-2 border-t border-slate-100",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
											htmlFor: "in_sitemap",
											className: "text-xs font-semibold text-slate-700 cursor-pointer",
											children: "Include in XML Sitemap"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[11px] text-slate-400",
											children: "Allow search engine crawlers to discover this post via /sitemap.xml"
										})] }), /* @__PURE__ */ jsx("input", {
											id: "in_sitemap",
											type: "checkbox",
											checked: selectedBlog.in_sitemap !== false,
											onChange: (e) => setSelectedBlog({
												...selectedBlog,
												in_sitemap: e.target.checked
											}),
											className: "w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer"
										})]
									})
								]
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 border-b border-slate-100 pb-3",
							children: [/* @__PURE__ */ jsx(Image, { className: "h-4 w-4 text-slate-400" }), /* @__PURE__ */ jsx("h2", {
								className: "text-sm font-semibold text-slate-800",
								children: "Featured Image & Alt Tag"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-3",
							children: [
								selectedBlog.featured_image ? /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "relative rounded-lg overflow-hidden border border-slate-200 bg-slate-50 aspect-video flex items-center justify-center group",
										children: [/* @__PURE__ */ jsx("img", {
											src: selectedBlog.featured_image,
											alt: selectedBlog.featured_image_alt || selectedBlog.title,
											className: "w-full h-full object-cover",
											onError: (e) => {
												e.target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80";
											}
										}), /* @__PURE__ */ jsx("button", {
											type: "button",
											onClick: () => setSelectedBlog({
												...selectedBlog,
												featured_image: ""
											}),
											className: "absolute top-2 right-2 bg-rose-600/90 hover:bg-rose-700 text-white p-1 rounded-full shadow transition-opacity",
											title: "Remove Image",
											children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: "flex gap-2",
										children: /* @__PURE__ */ jsxs(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											onClick: () => fileInputRef.current?.click(),
											className: "text-xs flex-1 gap-1.5 text-white",
											disabled: uploadingImage,
											children: [/* @__PURE__ */ jsx(UploadCloud, { className: "h-3.5 w-3.5" }), uploadingImage ? "Uploading..." : "Replace Image"]
										})
									})]
								}) : /* @__PURE__ */ jsxs("div", {
									onClick: () => fileInputRef.current?.click(),
									className: "border-2 border-dashed border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/20 rounded-xl p-6 text-center cursor-pointer transition-all space-y-2",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto",
											children: /* @__PURE__ */ jsx(UploadCloud, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-xs font-semibold text-slate-700",
											children: "Click to upload featured image"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[10px] text-slate-400 mt-0.5",
											children: "PNG, JPG, WebP, SVG up to 10MB"
										})] }),
										uploadingImage && /* @__PURE__ */ jsx("p", {
											className: "text-xs text-indigo-600 font-semibold animate-pulse",
											children: "Uploading file..."
										})
									]
								}),
								/* @__PURE__ */ jsx("input", {
									ref: fileInputRef,
									type: "file",
									accept: "image/*",
									className: "hidden",
									onChange: (e) => {
										const file = e.target.files?.[0];
										if (file) handleImageUpload(file);
									}
								}),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "featured_image",
									className: "text-[11px] font-semibold text-slate-500",
									children: "Or Image URL"
								}), /* @__PURE__ */ jsx(Input, {
									id: "featured_image",
									value: selectedBlog.featured_image || "",
									onChange: (e) => setSelectedBlog({
										...selectedBlog,
										featured_image: e.target.value
									}),
									placeholder: "/uploads/... or https://...",
									className: "mt-1 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 text-xs font-mono"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ jsxs(Label, {
											htmlFor: "featured_image_alt",
											className: "text-xs font-semibold text-slate-700",
											children: ["Image Alt Tag ", /* @__PURE__ */ jsx("span", {
												className: "text-indigo-500",
												children: "*"
											})]
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[10px] text-slate-400",
											children: "SEO & Accessibility"
										})]
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "featured_image_alt",
										value: selectedBlog.featured_image_alt || "",
										onChange: (e) => setSelectedBlog({
											...selectedBlog,
											featured_image_alt: e.target.value
										}),
										placeholder: "e.g. Hotel night auditor using Innrly software",
										className: "mt-1 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 text-xs"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[10px] text-slate-400 mt-1",
										children: "Helps rank in Google Images and meets accessibility guidelines."
									})
								] })
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 border-b border-slate-100 pb-3",
							children: [/* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 text-slate-400" }), /* @__PURE__ */ jsx("h2", {
								className: "text-sm font-semibold text-slate-800",
								children: "Publishing Settings"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsxs(Label, {
										htmlFor: "slug",
										className: "text-xs font-semibold text-slate-600",
										children: ["URL Slug ", /* @__PURE__ */ jsx("span", {
											className: "text-indigo-500",
											children: "*"
										})]
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "slug",
										value: selectedBlog.slug,
										onChange: (e) => setSelectedBlog({
											...selectedBlog,
											slug: slugify(e.target.value)
										}),
										placeholder: "housekeeping-labor-metrics",
										className: "mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 text-xs font-mono",
										required: true
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "text-[10px] text-slate-400 mt-1 block truncate",
										children: ["/blog/", selectedBlog.slug || "slug"]
									})
								] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "category",
									className: "text-xs font-semibold text-slate-600",
									children: "Category"
								}), /* @__PURE__ */ jsxs("select", {
									id: "category",
									value: selectedBlog.category_id || "",
									onChange: (e) => setSelectedBlog({
										...selectedBlog,
										category_id: parseInt(e.target.value) || null
									}),
									className: "w-full mt-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500",
									children: [/* @__PURE__ */ jsx("option", {
										value: "",
										children: "Select Category"
									}), categories.map((cat) => /* @__PURE__ */ jsx("option", {
										value: cat.id,
										children: cat.name
									}, cat.id))]
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "author",
									className: "text-xs font-semibold text-slate-600",
									children: "Author Name"
								}), /* @__PURE__ */ jsx(Input, {
									id: "author",
									value: selectedBlog.author || "",
									onChange: (e) => setSelectedBlog({
										...selectedBlog,
										author: e.target.value
									}),
									placeholder: "e.g. The Innrly Team",
									className: "mt-1.5 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500/20 text-xs"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "status",
									className: "text-xs font-semibold text-slate-600",
									children: "Publish Status"
								}), /* @__PURE__ */ jsxs("select", {
									id: "status",
									value: selectedBlog.status || "published",
									onChange: (e) => setSelectedBlog({
										...selectedBlog,
										status: e.target.value
									}),
									className: "w-full mt-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-semibold",
									children: [/* @__PURE__ */ jsx("option", {
										value: "published",
										className: "text-emerald-700 font-semibold",
										children: "Published (Live)"
									}), /* @__PURE__ */ jsx("option", {
										value: "draft",
										className: "text-amber-700 font-semibold",
										children: "Draft (Hidden)"
									})]
								})] })
							]
						})]
					})]
				})]
			})]
		}) : /* @__PURE__ */ jsxs("div", {
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
							children: "Blog Management"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-slate-400 mt-0.5",
							children: "Manage, edit, create, or delete articles published on the Innrly website with SEO meta and image controls."
						})
					] }), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							onClick: fetchBlogs,
							disabled: loading,
							className: "border-slate-200 hover:bg-slate-50 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 rounded-xl",
							children: [/* @__PURE__ */ jsx(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }), "Refresh"]
						}), /* @__PURE__ */ jsxs(Button, {
							onClick: handleAddNew,
							className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 font-semibold rounded-xl px-4",
							children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), "Add New Post"]
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }), /* @__PURE__ */ jsx("input", {
							type: "text",
							placeholder: "Search blog posts by title, category, or URL slug...",
							value: searchTerm,
							onChange: (e) => setSearchTerm(e.target.value),
							className: "w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 text-sm transition-all"
						})]
					}), searchTerm && /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						onClick: () => setSearchTerm(""),
						className: "text-xs text-slate-500 hover:text-slate-800",
						children: "Clear"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm",
					children: /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-left text-xs text-slate-600",
							children: [/* @__PURE__ */ jsx("thead", {
								className: "bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200",
								children: /* @__PURE__ */ jsxs("tr", { children: [
									/* @__PURE__ */ jsx("th", {
										className: "py-3 px-4",
										children: "Article"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3 px-4",
										children: "Category"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3 px-4",
										children: "SEO & Sitemap"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3 px-4",
										children: "Author"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3 px-4",
										children: "Status"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-3 px-4 text-right",
										children: "Actions"
									})
								] })
							}), /* @__PURE__ */ jsx("tbody", {
								className: "divide-y divide-slate-100",
								children: filteredBlogs.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
									colSpan: 6,
									className: "py-8 text-center text-slate-400",
									children: loading ? "Loading articles..." : "No articles found."
								}) }) : filteredBlogs.map((blog) => /* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-slate-50/60 transition-colors",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-3 px-4",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3",
												children: [blog.featured_image ? /* @__PURE__ */ jsx("img", {
													src: blog.featured_image,
													alt: blog.featured_image_alt || blog.title,
													className: "w-10 h-10 object-cover rounded-lg border border-slate-200 shrink-0",
													onError: (e) => {
														e.target.style.display = "none";
													}
												}) : /* @__PURE__ */ jsx("div", {
													className: "w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0",
													children: /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" })
												}), /* @__PURE__ */ jsxs("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ jsx("p", {
														className: "font-semibold text-slate-900 truncate max-w-sm",
														children: blog.title
													}), /* @__PURE__ */ jsxs("p", {
														className: "text-[10px] text-slate-400 font-mono truncate",
														children: ["/blog/", blog.slug]
													})]
												})]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3 px-4",
											children: /* @__PURE__ */ jsx("span", {
												className: "inline-block bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-medium",
												children: blog.category_name || "General"
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3 px-4",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ jsx("button", {
													type: "button",
													onClick: () => handleToggleSitemap(blog),
													title: blog.in_sitemap !== false ? "Click to remove from sitemap.xml" : "Click to include in sitemap.xml",
													className: `inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded border transition-all cursor-pointer hover:shadow-xs active:scale-95 ${blog.in_sitemap !== false ? "text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100" : "text-slate-500 bg-slate-100 border-slate-200 hover:bg-slate-200"}`,
													children: blog.in_sitemap !== false ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-emerald-600" }), " Sitemap"] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
														className: "text-slate-400 font-bold",
														children: "✕"
													}), " No Sitemap"] })
												}), blog.meta_title && /* @__PURE__ */ jsx("span", {
													className: "text-[10px] text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200",
													title: `Custom Meta Title: ${blog.meta_title}`,
													children: "Meta"
												})]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3 px-4 text-slate-700",
											children: blog.author || "Admin"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3 px-4",
											children: /* @__PURE__ */ jsxs("select", {
												value: blog.status || "published",
												onChange: (e) => handleStatusChange(blog, e.target.value),
												className: `text-[10px] font-semibold rounded-full px-2 py-0.5 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-colors ${blog.status === "published" ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100" : "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"}`,
												title: "Click to change publication status",
												children: [/* @__PURE__ */ jsx("option", {
													value: "published",
													children: "Published"
												}), /* @__PURE__ */ jsx("option", {
													value: "draft",
													children: "Draft"
												})]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3 px-4 text-right",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-end gap-1.5",
												children: [
													/* @__PURE__ */ jsx("a", {
														href: `/blog/${blog.slug}`,
														target: "_blank",
														rel: "noreferrer",
														className: "p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors",
														title: "View Public Post",
														children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
													}),
													/* @__PURE__ */ jsx("button", {
														onClick: () => handleEdit(blog),
														className: "p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors",
														title: "Edit",
														children: /* @__PURE__ */ jsx(Edit2, { className: "h-4 w-4" })
													}),
													/* @__PURE__ */ jsx("button", {
														onClick: () => blog.id && handleDelete(blog.id, blog.title),
														className: "p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors",
														title: "Delete",
														children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
													})
												]
											})
										})
									]
								}, blog.id))
							})]
						})
					})
				})
			]
		})
	});
}
//#endregion
export { ControlHubBlogsPage as component };
