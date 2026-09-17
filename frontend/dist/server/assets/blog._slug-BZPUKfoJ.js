import { t as Route } from "./blog._slug-DIk3szP2.js";
import { r as Section } from "./Section-D2XWIGS_.js";
import { t as Breadcrumbs } from "./Breadcrumbs-C1y857pw.js";
import { t as NewsletterSignup } from "./NewsletterSignup-7jhM0VRs.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/blog.$slug.tsx?tsr-split=component
function readingTime(body, htmlContent) {
	if (body && body.length > 0) {
		const words = body.join(" ").split(/\s+/).length;
		return Math.max(1, Math.round(words / 220));
	}
	if (htmlContent) {
		const words = htmlContent.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
		return Math.max(1, Math.round(words / 220));
	}
	return 3;
}
var DEFAULT_RELATED = [
	{
		to: "/solutions/reconciliation",
		label: "Reconciliation engine",
		kind: "Solution"
	},
	{
		to: "/case-studies/midwest-portfolio",
		label: "12-hotel select-service case study",
		kind: "Case study"
	},
	{
		to: "/roi-calculator",
		label: "Calculate your portfolio ROI",
		kind: "Guide"
	}
];
var RELATED_BY_SLUG = {
	"best-hotel-accounting-software": [
		{
			to: "/integrations/m3",
			label: "Innrly + M3 integration",
			kind: "Solution"
		},
		{
			to: "/integrations/inn-flow",
			label: "Innrly + Inn-Flow integration",
			kind: "Solution"
		},
		{
			to: "/blog/quickbooks-for-hotels-limits",
			label: "When operators outgrow QuickBooks",
			kind: "Guide"
		}
	],
	"hotel-back-office-automation": [
		{
			to: "/solutions/reconciliation",
			label: "How the reconciliation engine works",
			kind: "Solution"
		},
		{
			to: "/industries/select-service",
			label: "Select-service back office",
			kind: "Industry"
		},
		{
			to: "/case-studies/midwest-portfolio",
			label: "12-hotel rollout case study",
			kind: "Case study"
		}
	],
	"night-audit-automation": [
		{
			to: "/solutions/operations-automation",
			label: "Operations automation overview",
			kind: "Solution"
		},
		{
			to: "/blog/hotel-night-audit-checklist",
			label: "The 8-step night audit checklist",
			kind: "Guide"
		},
		{
			to: "/industries/select-service",
			label: "Select-service multi-brand audit",
			kind: "Industry"
		}
	],
	"multi-property-accounting-software": [
		{
			to: "/integrations/m3",
			label: "Innrly + M3 integration",
			kind: "Solution"
		},
		{
			to: "/integrations/sage-intacct",
			label: "Innrly + Sage Intacct",
			kind: "Solution"
		},
		{
			to: "/blog/quickbooks-for-hotels-limits",
			label: "When operators outgrow QuickBooks",
			kind: "Guide"
		}
	],
	"ap-automation-hotels": [
		{
			to: "/solutions/expense-entries",
			label: "A/P automation product",
			kind: "Solution"
		},
		{
			to: "/solutions/innrly-pay",
			label: "Innrly Pay (Virtual Card + ACH)",
			kind: "Solution"
		},
		{
			to: "/case-studies/hilton-management-company",
			label: "28-hotel A/P consolidation",
			kind: "Case study"
		}
	],
	"hotel-labor-cost-percentage": [
		{
			to: "/solutions/labor-workforce",
			label: "Labor & workforce module",
			kind: "Solution"
		},
		{
			to: "/blog/mpor-explained",
			label: "MPOR explained",
			kind: "Guide"
		},
		{
			to: "/solutions/innrly-shift",
			label: "Innrly Shift TimeClock",
			kind: "Solution"
		}
	],
	"innrly-vs-inn-flow": [
		{
			to: "/compare/innrly-vs-otelier",
			label: "Innrly: alternative to Otelier",
			kind: "Compare"
		},
		{
			to: "/pricing",
			label: "Innrly pricing",
			kind: "Guide"
		},
		{
			to: "/case-studies/midwest-portfolio",
			label: "12-hotel case study",
			kind: "Case study"
		}
	],
	"hotel-night-audit-checklist": [
		{
			to: "/solutions/operations-automation",
			label: "Operations automation",
			kind: "Solution"
		},
		{
			to: "/industries/select-service",
			label: "Select-service portfolios",
			kind: "Industry"
		},
		{
			to: "/blog/night-audit-automation",
			label: "Automating the audit",
			kind: "Guide"
		}
	],
	"hotel-ota-commission-reconciliation": [
		{
			to: "/solutions/reconciliation",
			label: "Reconciliation engine",
			kind: "Solution"
		},
		{
			to: "/blog/ota-reconciliation-guide",
			label: "OTA reconciliation deep-dive",
			kind: "Guide"
		},
		{
			to: "/roi-calculator",
			label: "Calculate recovered OTA revenue",
			kind: "Guide"
		}
	],
	"pms-vs-back-office-automation": [
		{
			to: "/integrations/opera",
			label: "Innrly + Opera",
			kind: "Solution"
		},
		{
			to: "/integrations/cloudbeds",
			label: "Innrly + Cloudbeds",
			kind: "Solution"
		},
		{
			to: "/integrations/mews",
			label: "Innrly + Mews",
			kind: "Solution"
		}
	],
	"hotel-budgeting-software-2026": [
		{
			to: "/solutions/business-intelligence",
			label: "Business Intelligence product",
			kind: "Solution"
		},
		{
			to: "/solutions/financial-control",
			label: "Financial Control suite",
			kind: "Solution"
		},
		{
			to: "/blog/multi-property-accounting-software",
			label: "Multi-property accounting guide",
			kind: "Guide"
		}
	],
	"select-service-back-office-savings": [
		{
			to: "/industries/select-service",
			label: "Select-service industry page",
			kind: "Industry"
		},
		{
			to: "/case-studies/midwest-portfolio",
			label: "12-hotel case study",
			kind: "Case study"
		},
		{
			to: "/roi-calculator",
			label: "Run the ROI on your portfolio",
			kind: "Guide"
		}
	],
	"mpor-explained": [
		{
			to: "/solutions/innrly-shift",
			label: "Innrly Shift workforce module",
			kind: "Solution"
		},
		{
			to: "/solutions/labor-workforce",
			label: "Labor & workforce overview",
			kind: "Solution"
		},
		{
			to: "/blog/hotel-labor-cost-percentage",
			label: "Hotel labor cost percentage",
			kind: "Guide"
		}
	],
	"quickbooks-for-hotels-limits": [
		{
			to: "/integrations/quickbooks",
			label: "Innrly + QuickBooks integration",
			kind: "Solution"
		},
		{
			to: "/integrations/sage-intacct",
			label: "Step up to Sage Intacct",
			kind: "Solution"
		},
		{
			to: "/blog/multi-property-accounting-software",
			label: "Multi-property accounting buyer's guide",
			kind: "Guide"
		}
	],
	"hospitality-accounting-services-vs-software": [
		{
			to: "/services/accountability-pack",
			label: "Innrly Accountability Pack",
			kind: "Solution"
		},
		{
			to: "/pricing",
			label: "Innrly pricing",
			kind: "Guide"
		},
		{
			to: "/roi-calculator",
			label: "ROI calculator",
			kind: "Guide"
		}
	],
	"ota-reconciliation-guide": [
		{
			to: "/solutions/reconciliation",
			label: "Reconciliation engine",
			kind: "Solution"
		},
		{
			to: "/blog/hotel-ota-commission-reconciliation",
			label: "OTA commission recovery",
			kind: "Guide"
		},
		{
			to: "/case-studies/urban-full-service",
			label: "Urban full-service case study",
			kind: "Case study"
		}
	],
	"hotel-night-audit-software-guide": [
		{
			to: "/solutions/operations-automation",
			label: "Operations automation product",
			kind: "Solution"
		},
		{
			to: "/blog/hotel-night-audit-checklist",
			label: "Night audit checklist",
			kind: "Guide"
		},
		{
			to: "/integrations/opera",
			label: "Innrly + Opera",
			kind: "Solution"
		}
	],
	"multi-property-hotel-accounting-software": [
		{
			to: "/solutions/financial-control",
			label: "Financial Control suite",
			kind: "Solution"
		},
		{
			to: "/integrations/m3",
			label: "Innrly + M3",
			kind: "Solution"
		},
		{
			to: "/case-studies/hilton-management-company",
			label: "28-property Hilton case study",
			kind: "Case study"
		}
	],
	"five-back-office-wins": [
		{
			to: "/solutions/operations-automation",
			label: "Operations automation",
			kind: "Solution"
		},
		{
			to: "/solutions/financial-control",
			label: "Financial Control",
			kind: "Solution"
		},
		{
			to: "/case-studies/midwest-portfolio",
			label: "12-hotel case study",
			kind: "Case study"
		}
	],
	"labor-cost-blind-spots": [
		{
			to: "/solutions/labor-workforce",
			label: "Labor & workforce module",
			kind: "Solution"
		},
		{
			to: "/blog/mpor-explained",
			label: "MPOR explained",
			kind: "Guide"
		},
		{
			to: "/solutions/innrly-shift",
			label: "Innrly Shift",
			kind: "Solution"
		}
	],
	"ota-commission-audit": [
		{
			to: "/solutions/reconciliation",
			label: "Reconciliation engine",
			kind: "Solution"
		},
		{
			to: "/blog/hotel-ota-commission-reconciliation",
			label: "OTA commission recovery playbook",
			kind: "Guide"
		},
		{
			to: "/roi-calculator",
			label: "Run the ROI",
			kind: "Guide"
		}
	]
};
function BlogPost() {
	const { post, slug } = Route.useLoaderData();
	const minutes = readingTime(post.body, post.contentHtml);
	const related = RELATED_BY_SLUG[slug] ?? DEFAULT_RELATED;
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background",
		children: [/* @__PURE__ */ jsx(Breadcrumbs, { items: [
			{
				name: "Home",
				to: "/"
			},
			{
				name: "Blog",
				to: "/blog"
			},
			{ name: post.title }
		] }), /* @__PURE__ */ jsxs(Section, {
			className: "max-w-3xl py-16",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/blog",
					className: "text-sm text-accent hover:underline inline-flex items-center gap-1",
					children: "← Back to blog"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-6 text-4xl font-bold text-foreground sm:text-5xl leading-tight",
					children: post.title
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: post.author || "The Innrly Team"
						}),
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							children: "·"
						}),
						/* @__PURE__ */ jsx("time", {
							dateTime: post.date,
							children: new Date(post.date).toLocaleDateString("en-US", {
								month: "long",
								day: "numeric",
								year: "numeric"
							})
						}),
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							children: "·"
						}),
						/* @__PURE__ */ jsxs("span", { children: [minutes, " min read"] }),
						post.categoryName && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							children: "·"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20",
							children: post.categoryName
						})] })
					]
				}),
				post.featuredImage && /* @__PURE__ */ jsx("div", {
					className: "mt-8 rounded-2xl overflow-hidden border border-border",
					children: /* @__PURE__ */ jsx("img", {
						src: post.featuredImage,
						alt: post.featuredImageAlt || post.title,
						className: "w-full h-auto max-h-[420px] object-cover"
					})
				}),
				post.contentHtml ? /* @__PURE__ */ jsx("div", {
					className: "mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:pt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed [&_a]:text-accent [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mt-2 [&_strong]:text-foreground [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_img]:rounded-xl [&_img]:my-6",
					dangerouslySetInnerHTML: { __html: post.contentHtml }
				}) : /* @__PURE__ */ jsx("div", {
					className: "mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground",
					children: post.body?.map((p, i) => {
						const linkMatch = p.match(/^\[(.*?)\]\((.*?)\)$/);
						if (linkMatch) return /* @__PURE__ */ jsx("div", {
							className: "py-3",
							children: /* @__PURE__ */ jsx(Link, {
								to: linkMatch[2],
								className: "inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow hover:opacity-90 transition-all",
								children: linkMatch[1]
							})
						}, i);
						if (p.length < 60 && !p.endsWith(".") && !p.endsWith(":") && !p.includes(" — ") && !p.startsWith("1.") && !p.startsWith("2.") && !p.startsWith("3.") && !p.startsWith("4.") && !p.startsWith("5.") && !p.startsWith("6.")) return /* @__PURE__ */ jsx("h2", {
							className: "pt-6 text-2xl font-bold text-foreground sm:text-3xl",
							children: p
						}, i);
						return /* @__PURE__ */ jsx("p", { children: p }, i);
					})
				}),
				/* @__PURE__ */ jsxs("aside", {
					className: "mt-16 rounded-2xl border border-border bg-surface/40 p-6 sm:p-8",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-accent",
							children: "Keep reading"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-2 text-xl font-semibold text-foreground",
							children: "Related reading"
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-5 space-y-3",
							children: related.map((r) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
								href: r.to,
								className: "group flex items-baseline justify-between gap-4 rounded-lg border border-border/40 bg-background/40 px-4 py-3 transition-colors hover:border-accent/60",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground group-hover:text-accent",
									children: r.label
								}), /* @__PURE__ */ jsx("span", {
									className: "shrink-0 text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
									children: r.kind
								})]
							}) }, r.to))
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10",
					children: /* @__PURE__ */ jsx(NewsletterSignup, { source: `blog-post:${slug}` })
				})
			]
		})]
	});
}
//#endregion
export { BlogPost as component };
