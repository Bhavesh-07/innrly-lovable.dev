import { r as Section } from "./Section-D2XWIGS_.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/legal.cookies.tsx?tsr-split=component
function CookiesPage() {
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background",
		children: /* @__PURE__ */ jsxs(Section, {
			className: "max-w-3xl py-16",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl font-bold text-foreground",
					children: "Cookie Policy"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Last updated: June 6, 2026"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground",
					children: [
						/* @__PURE__ */ jsxs("p", { children: [
							"This Cookie Policy explains how Innrly (“Innrly,” “we,” or “us”) uses cookies and similar tracking technologies on",
							" ",
							/* @__PURE__ */ jsx("a", {
								href: "/",
								className: "underline",
								children: "innrly.com"
							}),
							" ",
							"and within the Innrly hotel back-office platform (the “Service”). It should be read together with our",
							" ",
							/* @__PURE__ */ jsx("a", {
								href: "/legal/privacy",
								className: "underline",
								children: "Privacy Policy"
							}),
							"."
						] }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "What is a cookie?"
						}),
						/* @__PURE__ */ jsx("p", { children: "A cookie is a small text file stored on your device when you visit a website. Similar technologies include local storage, session storage, pixels, and SDKs. We refer to all of these as “cookies” in this policy." }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "Why we use cookies"
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "list-disc space-y-2 pl-6",
							children: [
								/* @__PURE__ */ jsx("li", { children: "Keep you signed in and remember your account context across pages." }),
								/* @__PURE__ */ jsx("li", { children: "Remember preferences such as theme, region, and consent choices." }),
								/* @__PURE__ */ jsx("li", { children: "Measure traffic, page performance, and how features are used." }),
								/* @__PURE__ */ jsx("li", { children: "Detect fraud, abuse, and security issues." }),
								/* @__PURE__ */ jsx("li", { children: "Support marketing measurement on innrly.com (not inside the Service)." })
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "Cookie categories"
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-xl font-semibold text-foreground",
							children: "1. Strictly necessary"
						}),
						/* @__PURE__ */ jsx("p", { children: "Required for the site and Service to function — for example, authentication, session continuity, security tokens, load balancing, and remembering your cookie-consent choice. These cannot be turned off through the consent banner." }),
						/* @__PURE__ */ jsx("h3", {
							className: "text-xl font-semibold text-foreground",
							children: "2. Performance & analytics"
						}),
						/* @__PURE__ */ jsxs("p", { children: [
							"Help us understand how visitors use innrly.com and which features are most valuable inside the Service. We use ",
							/* @__PURE__ */ jsx("strong", { children: "Google Analytics 4 (GA4)" }),
							", which sets cookies such as ",
							/* @__PURE__ */ jsx("em", { children: "_ga" }),
							" and ",
							/* @__PURE__ */ jsx("em", { children: "_ga_<container-id>" }),
							" to distinguish unique visitors and measure sessions. Data is aggregated and used to improve the product. IP addresses are truncated by GA4 before storage."
						] }),
						/* @__PURE__ */ jsx("h3", {
							className: "text-xl font-semibold text-foreground",
							children: "3. Functional & preference"
						}),
						/* @__PURE__ */ jsx("p", { children: "Remember choices you make (for example, dismissed dialogs, last-viewed property, preferred date range) so the Service feels consistent across visits. Disabling these will not break the site but the experience will reset on each visit." }),
						/* @__PURE__ */ jsx("h3", {
							className: "text-xl font-semibold text-foreground",
							children: "4. Marketing"
						}),
						/* @__PURE__ */ jsx("p", { children: "Used on innrly.com only (not inside the authenticated Service) to measure the effectiveness of our marketing campaigns and to show relevant content on third-party platforms such as LinkedIn or Google. We do not sell personal information." }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "Cookies we currently set"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "overflow-x-auto rounded-2xl border border-border",
							children: /* @__PURE__ */ jsxs("table", {
								className: "w-full text-left text-sm",
								children: [/* @__PURE__ */ jsx("thead", {
									className: "bg-card/60 text-foreground",
									children: /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("th", {
											className: "px-3 py-2 font-semibold",
											children: "Cookie / key"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "px-3 py-2 font-semibold",
											children: "Category"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "px-3 py-2 font-semibold",
											children: "Provider"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "px-3 py-2 font-semibold",
											children: "Purpose"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "px-3 py-2 font-semibold",
											children: "Duration"
										})
									] })
								}), /* @__PURE__ */ jsxs("tbody", {
									className: "divide-y divide-border",
									children: [
										/* @__PURE__ */ jsxs("tr", { children: [
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: /* @__PURE__ */ jsx("code", { children: "innrly_cookie_consent_v1" })
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: "Strictly necessary"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: "Innrly (first-party)"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: "Stores your cookie banner choice."
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: "12 months"
											})
										] }),
										/* @__PURE__ */ jsxs("tr", { children: [
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: /* @__PURE__ */ jsx("code", { children: "_ga" })
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: "Performance & analytics"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: "Google Analytics 4"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: "Distinguishes unique visitors."
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: "2 years"
											})
										] }),
										/* @__PURE__ */ jsxs("tr", { children: [
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: /* @__PURE__ */ jsx("code", { children: "_ga_<container-id>" })
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: "Performance & analytics"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: "Google Analytics 4"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: "Persists session state for GA4."
											}),
											/* @__PURE__ */ jsx("td", {
												className: "px-3 py-2",
												children: "2 years"
											})
										] })
									]
								})]
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm italic text-muted-foreground",
							children: "If we add new analytics, marketing, or embedded-media providers (for example LinkedIn Insight, Meta Pixel, Hotjar, or YouTube embeds), this table will be updated and the consent banner re-prompted where required."
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "Third parties"
						}),
						/* @__PURE__ */ jsx("p", { children: "Some cookies are set by third-party providers we use to operate the site and Service. Categories of third parties include analytics, error monitoring, customer support chat, marketing measurement, and embedded media. Each provider has its own privacy policy governing how it processes your data." }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "How to control cookies"
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "list-disc space-y-2 pl-6",
							children: [
								/* @__PURE__ */ jsxs("li", { children: [
									"Use the cookie banner on innrly.com to accept or reject non-essential categories. You can change your choice at any time by clearing",
									/* @__PURE__ */ jsx("em", { children: " innrly_cookie_consent_v1" }),
									" from your browser storage and reloading the page."
								] }),
								/* @__PURE__ */ jsxs("li", { children: [
									"Most browsers let you block or delete cookies through their settings:",
									" ",
									/* @__PURE__ */ jsx("a", {
										href: "https://support.google.com/chrome/answer/95647",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "underline",
										children: "Chrome"
									}),
									",",
									" ",
									/* @__PURE__ */ jsx("a", {
										href: "https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "underline",
										children: "Firefox"
									}),
									",",
									" ",
									/* @__PURE__ */ jsx("a", {
										href: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "underline",
										children: "Safari"
									}),
									",",
									" ",
									/* @__PURE__ */ jsx("a", {
										href: "https://support.microsoft.com/microsoft-edge",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "underline",
										children: "Edge"
									}),
									"."
								] }),
								/* @__PURE__ */ jsxs("li", { children: [
									"Opt out of cross-site advertising measurement through industry tools such as",
									" ",
									/* @__PURE__ */ jsx("a", {
										href: "https://www.youronlinechoices.com/",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "underline",
										children: "Your Online Choices"
									}),
									" ",
									"(EU) or the",
									" ",
									/* @__PURE__ */ jsx("a", {
										href: "https://optout.aboutads.info/",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "underline",
										children: "DAA opt-out"
									}),
									" ",
									"(US)."
								] }),
								/* @__PURE__ */ jsx("li", { children: "Blocking strictly necessary cookies will prevent you from signing in or using core parts of the Service." })
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "Do Not Track"
						}),
						/* @__PURE__ */ jsx("p", { children: "Some browsers send a “Do Not Track” signal. There is no industry standard for how sites must respond. Innrly honors the choices you make through our cookie banner regardless of any DNT header." }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold text-foreground",
							children: "Changes to this policy"
						}),
						/* @__PURE__ */ jsx("p", { children: "We may update this Cookie Policy as our use of cookies evolves. Material changes will be announced on innrly.com or, for the authenticated Service, by in-app notice." }),
						/* @__PURE__ */ jsxs("p", {
							className: "text-xs italic text-muted-foreground",
							children: [
								"Questions about cookies or this policy?",
								" ",
								/* @__PURE__ */ jsx("a", {
									href: "mailto:privacy@innrly.com",
									className: "underline",
									children: "privacy@innrly.com"
								}),
								"."
							]
						})
					]
				})
			]
		})
	});
}
//#endregion
export { CookiesPage as component };
