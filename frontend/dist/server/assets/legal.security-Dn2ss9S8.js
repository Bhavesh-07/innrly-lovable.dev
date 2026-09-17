import { r as Section } from "./Section-D2XWIGS_.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/legal.security.tsx?tsr-split=component
function SecurityPage() {
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background",
		children: /* @__PURE__ */ jsxs(Section, {
			className: "max-w-3xl py-16",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl font-bold text-foreground",
					children: "Security at Innrly"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "Hotel financial data deserves enterprise-grade security. Here's how we protect it."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2",
					children: [
						{
							title: "Encryption",
							body: "TLS 1.2+ in transit, AES-256 at rest for every data store."
						},
						{
							title: "Access controls",
							body: "Role-based access, SSO support, audit trail for every change."
						},
						{
							title: "Infrastructure",
							body: "Hosted on tier-1 cloud infrastructure with continuous monitoring."
						},
						{
							title: "Backups",
							body: "Encrypted daily backups with point-in-time recovery."
						},
						{
							title: "Vendor management",
							body: "Every sub-processor reviewed for security and confidentiality."
						},
						{
							title: "Incident response",
							body: "24/7 monitoring with documented incident response playbooks."
						}
					].map((c) => /* @__PURE__ */ jsxs("div", {
						className: "aurora-card rounded-2xl p-6",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-base font-semibold text-foreground",
							children: c.title
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: c.body
						})]
					}, c.title))
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-10 text-sm text-muted-foreground",
					children: [
						"Have a security question or need our security documentation? Email",
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "mailto:security@innrly.com",
							className: "text-accent",
							children: "security@innrly.com"
						}),
						"."
					]
				})
			]
		})
	});
}
//#endregion
export { SecurityPage as component };
