import { r as Section } from "./Section-D2XWIGS_.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/legal.accessibility.tsx?tsr-split=component
function AccessibilityPage() {
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background",
		children: /* @__PURE__ */ jsxs(Section, {
			className: "max-w-3xl py-16",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl font-bold text-foreground",
					children: "Accessibility Statement"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Last updated: June 6, 2026"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("p", { children: "Innrly is committed to making our hotel back-office platform and marketing site usable by as many people as possible, including hotel team members who rely on assistive technology to do their jobs." }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "Our standard"
						}),
						/* @__PURE__ */ jsxs("p", { children: [
							"We target conformance with the",
							" ",
							/* @__PURE__ */ jsx("a", {
								href: "https://www.w3.org/TR/WCAG21/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "underline",
								children: "Web Content Accessibility Guidelines (WCAG) 2.1 Level AA"
							}),
							". These guidelines explain how to make web content more accessible to people with visual, auditory, motor, and cognitive disabilities."
						] }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "What we do"
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "list-disc space-y-2 pl-6",
							children: [
								/* @__PURE__ */ jsx("li", { children: "Use semantic HTML, ARIA roles, and labeled controls so screen readers can navigate every page." }),
								/* @__PURE__ */ jsx("li", { children: "Maintain color contrast ratios that meet AA on both light and dark surfaces." }),
								/* @__PURE__ */ jsx("li", { children: "Support full keyboard navigation across menus, forms, dialogs, and tables." }),
								/* @__PURE__ */ jsx("li", { children: "Provide visible focus indicators on every interactive element." }),
								/* @__PURE__ */ jsx("li", { children: "Avoid relying on color alone to convey status or errors." }),
								/* @__PURE__ */ jsx("li", { children: "Review new product surfaces for accessibility before they ship." })
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "Known limitations"
						}),
						/* @__PURE__ */ jsx("p", { children: "Some legacy reports, third-party embeds, and integration partner widgets may not yet fully meet WCAG 2.1 AA. We are actively working to remediate these areas." }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "Report an issue"
						}),
						/* @__PURE__ */ jsx("p", { children: "If you encounter an accessibility barrier on innrly.com or inside the Innrly platform, please tell us. We aim to acknowledge accessibility reports within two business days." }),
						/* @__PURE__ */ jsxs("p", { children: [
							"Email:",
							" ",
							/* @__PURE__ */ jsx("a", {
								href: "mailto:accessibility@innrly.com",
								className: "underline",
								children: "accessibility@innrly.com"
							}),
							/* @__PURE__ */ jsx("br", {}),
							"Please include the page URL, the issue you encountered, and the assistive technology or browser you were using."
						] }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "Formal complaints"
						}),
						/* @__PURE__ */ jsx("p", { children: "If you are not satisfied with our response, you may also raise concerns under the applicable accessibility law in your jurisdiction (for example, the Americans with Disabilities Act in the United States)." })
					]
				})
			]
		})
	});
}
//#endregion
export { AccessibilityPage as component };
