import { t as Button } from "./button-Dkpg6g2Z.js";
import { i as getAdminAuthHeaders, u as hasPermission } from "./admin-auth-5LzGtRF4.js";
import { t as Switch } from "./switch-Cn1w-cIH.js";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, Bell, Check, CheckCircle2, Globe2, Link2, Loader2, Mail, Megaphone, Save, Send, Settings, Share2, ShieldAlert, ShieldCheck } from "lucide-react";
//#region src/routes/control-hub.settings.tsx?tsr-split=component
function ControlHubSettings() {
	const [adminEmail, setAdminEmail] = useState("sales@innrly.com");
	const [alertThreshold, setAlertThreshold] = useState("10");
	const [webhookUrl, setWebhookUrl] = useState("http://127.0.0.1:8000/leads");
	const [smtpHost, setSmtpHost] = useState("smtp.office365.com");
	const [smtpPort, setSmtpPort] = useState("587");
	const [smtpUser, setSmtpUser] = useState("donotreply@innrly.com");
	const [smtpPass, setSmtpPass] = useState("");
	const [emailFrom, setEmailFrom] = useState("donotreply@innrly.com");
	const [enableTrialPopup, setEnableTrialPopup] = useState(true);
	const [loginLink, setLoginLink] = useState("https://app.innrly.com");
	const [facebookUrl, setFacebookUrl] = useState("https://www.facebook.com/Innrlyy/");
	const [instagramUrl, setInstagramUrl] = useState("https://www.instagram.com/innrly/");
	const [linkedinUrl, setLinkedinUrl] = useState("https://www.linkedin.com/company/innrly/");
	const [twitterUrl, setTwitterUrl] = useState("https://x.com/innrly");
	const [youtubeUrl, setYoutubeUrl] = useState("");
	const [isSaved, setIsSaved] = useState(false);
	const [isTestingSmtp, setIsTestingSmtp] = useState(false);
	const [testSmtpResult, setTestSmtpResult] = useState(null);
	useEffect(() => {
		if (typeof window !== "undefined" && hasPermission("settings")) {
			const settingsUrl = "http://127.0.0.1:8000/leads".replace(/\/leads\/?$/, "/settings");
			fetch(settingsUrl).then((res) => res.json()).then((data) => {
				if (data) {
					if (data.innrly_trial_modal_disabled === "true") setEnableTrialPopup(false);
					if (data.innrly_login_link) setLoginLink(data.innrly_login_link);
					if (data.social_facebook !== void 0) setFacebookUrl(data.social_facebook);
					if (data.social_instagram !== void 0) setInstagramUrl(data.social_instagram);
					if (data.social_linkedin !== void 0) setLinkedinUrl(data.social_linkedin);
					if (data.social_twitter !== void 0) setTwitterUrl(data.social_twitter);
					if (data.social_youtube !== void 0) setYoutubeUrl(data.social_youtube);
					if (data.smtp_host) setSmtpHost(data.smtp_host);
					if (data.smtp_port) setSmtpPort(data.smtp_port);
					if (data.smtp_user) setSmtpUser(data.smtp_user);
					if (data.smtp_password) setSmtpPass(data.smtp_password);
					if (data.email_from) setEmailFrom(data.email_from);
					if (data.admin_email) setAdminEmail(data.admin_email);
				}
			}).catch((err) => console.error("Failed to load settings", err));
		}
	}, []);
	if (!hasPermission("settings")) return /* @__PURE__ */ jsxs("div", {
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
				children: "You do not currently have permission to access System Settings. Please contact your Super Administrator."
			})
		]
	});
	const handleTestSmtp = async () => {
		setIsTestingSmtp(true);
		setTestSmtpResult(null);
		try {
			const testUrl = "http://127.0.0.1:8000/leads".replace(/\/leads\/?$/, "/settings/test-smtp");
			const res = await fetch(testUrl, {
				method: "POST",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify({
					host: smtpHost,
					port: parseInt(smtpPort, 10) || 587,
					user: smtpUser,
					password: smtpPass,
					from_email: emailFrom,
					to_email: smtpUser || emailFrom || adminEmail
				})
			});
			const json = await res.json();
			if (res.ok && json.ok) setTestSmtpResult({
				ok: true,
				message: json.message || "Test email sent successfully!"
			});
			else setTestSmtpResult({
				ok: false,
				message: json.detail || "SMTP connection failed."
			});
		} catch (err) {
			setTestSmtpResult({
				ok: false,
				message: err?.message || "Network error while testing SMTP."
			});
		} finally {
			setIsTestingSmtp(false);
		}
	};
	const handleSave = async (e) => {
		e.preventDefault();
		if (typeof window !== "undefined") try {
			const settingsUrl = "http://127.0.0.1:8000/leads".replace(/\/leads\/?$/, "/settings");
			const saveList = [
				{
					key: "innrly_trial_modal_disabled",
					value: enableTrialPopup ? "false" : "true"
				},
				{
					key: "innrly_login_link",
					value: loginLink
				},
				{
					key: "social_facebook",
					value: facebookUrl
				},
				{
					key: "social_instagram",
					value: instagramUrl
				},
				{
					key: "social_linkedin",
					value: linkedinUrl
				},
				{
					key: "social_twitter",
					value: twitterUrl
				},
				{
					key: "social_youtube",
					value: youtubeUrl
				},
				{
					key: "smtp_host",
					value: smtpHost
				},
				{
					key: "smtp_port",
					value: smtpPort
				},
				{
					key: "smtp_user",
					value: smtpUser
				},
				{
					key: "smtp_password",
					value: smtpPass
				},
				{
					key: "email_from",
					value: emailFrom
				},
				{
					key: "admin_email",
					value: adminEmail
				}
			];
			await Promise.all(saveList.map((item) => fetch(settingsUrl, {
				method: "POST",
				headers: getAdminAuthHeaders({ "Content-Type": "application/json" }),
				body: JSON.stringify(item)
			})));
		} catch (err) {
			console.error("Failed to save settings", err);
		}
		setIsSaved(true);
		setTimeout(() => setIsSaved(false), 3e3);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "border-b border-slate-200 pb-5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-indigo-600 animate-spin-slow" }), /* @__PURE__ */ jsx("span", {
						className: "text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600",
						children: "Settings"
					})]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-bold text-slate-800 mt-1",
					children: "System Settings"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xs text-slate-400 mt-0.5",
					children: "Configure platform options, lead dispatching webhooks, and default notifications."
				})
			]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSave,
			className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-2 space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm",
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "text-base font-bold text-slate-800 flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Bell, { className: "h-4 w-4 text-indigo-650" }), "Lead Dispatch Notifications"]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-400",
								children: "Define who gets notified immediately when new leads or onboarding submissions are received."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
									children: "Primary Recipient Email"
								}), /* @__PURE__ */ jsx("input", {
									type: "email",
									value: adminEmail,
									onChange: (e) => setAdminEmail(e.target.value),
									className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors"
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
									children: "Properties Alert Threshold"
								}), /* @__PURE__ */ jsx("input", {
									type: "number",
									value: alertThreshold,
									onChange: (e) => setAlertThreshold(e.target.value),
									className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors"
								})] })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm",
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "text-base font-bold text-slate-800 flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Globe2, { className: "h-4.5 w-4.5 text-indigo-650" }), "Webhook Integrations"]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-400",
								children: "Endpoint URLs used to capture forms from the public landing site."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pt-2",
								children: [/* @__PURE__ */ jsx("label", {
									className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
									children: "Leads Webhook Endpoint"
								}), /* @__PURE__ */ jsx("input", {
									type: "text",
									value: webhookUrl,
									onChange: (e) => setWebhookUrl(e.target.value),
									className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors font-mono"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h2", {
									className: "text-base font-bold text-slate-800 flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Mail, { className: "h-4.5 w-4.5 text-indigo-650" }), "SMTP Configuration"]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-400 mt-0.5",
									children: "Configure the outgoing mail server for transactional lead confirmation and alert emails."
								})] }), /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: handleTestSmtp,
									disabled: isTestingSmtp,
									className: "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200/80 transition-all disabled:opacity-50 cursor-pointer shadow-sm",
									children: isTestingSmtp ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }), /* @__PURE__ */ jsx("span", { children: "Testing..." })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Send, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Test Connection" })] })
								})]
							}),
							testSmtpResult && /* @__PURE__ */ jsxs("div", {
								className: `p-3 rounded-lg border text-xs flex items-start gap-2 ${testSmtpResult.ok ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-rose-50 border-rose-200 text-rose-800"}`,
								children: [testSmtpResult.ok ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-600 shrink-0 mt-0.5" }) : /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-rose-600 shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", {
									className: "flex-1",
									children: testSmtpResult.message
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
										children: "SMTP Host"
									}), /* @__PURE__ */ jsx("input", {
										type: "text",
										value: smtpHost,
										onChange: (e) => setSmtpHost(e.target.value),
										placeholder: "smtp.office365.com",
										className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
										children: "SMTP Port"
									}), /* @__PURE__ */ jsx("input", {
										type: "text",
										value: smtpPort,
										onChange: (e) => setSmtpPort(e.target.value),
										placeholder: "587",
										className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
										children: "Username / Login Email"
									}), /* @__PURE__ */ jsx("input", {
										type: "text",
										value: smtpUser,
										onChange: (e) => setSmtpUser(e.target.value),
										placeholder: "donotreply@innrly.com",
										className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
										children: "Password / App Password"
									}), /* @__PURE__ */ jsx("input", {
										type: "password",
										value: smtpPass,
										onChange: (e) => setSmtpPass(e.target.value),
										placeholder: "••••••••",
										className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors"
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ jsx("label", {
											className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
											children: "From Email Address"
										}), /* @__PURE__ */ jsx("input", {
											type: "email",
											value: emailFrom,
											onChange: (e) => setEmailFrom(e.target.value),
											placeholder: "donotreply@innrly.com",
											className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors"
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm",
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "text-base font-bold text-slate-800 flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Link2, { className: "h-4.5 w-4.5 text-indigo-650" }), "Navigation Settings"]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-400",
								children: "Configure target URLs and navigation links for external portals and applications."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pt-2",
								children: [/* @__PURE__ */ jsx("label", {
									className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
									children: "Portal Login Link URL"
								}), /* @__PURE__ */ jsx("input", {
									type: "url",
									value: loginLink,
									onChange: (e) => setLoginLink(e.target.value),
									placeholder: "https://app.innrly.com",
									className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors font-mono"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm",
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "text-base font-bold text-slate-800 flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Share2, { className: "h-4.5 w-4.5 text-indigo-650" }), "Social Media Channels"]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-400",
								children: "Manage the public social media profile links displayed in the website footer. Leave blank to hide a platform icon."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
										children: "Facebook URL"
									}), /* @__PURE__ */ jsx("input", {
										type: "url",
										value: facebookUrl,
										onChange: (e) => setFacebookUrl(e.target.value),
										placeholder: "https://www.facebook.com/Innrlyy/",
										className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors font-mono"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
										children: "Instagram URL"
									}), /* @__PURE__ */ jsx("input", {
										type: "url",
										value: instagramUrl,
										onChange: (e) => setInstagramUrl(e.target.value),
										placeholder: "https://www.instagram.com/innrly/",
										className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors font-mono"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
										children: "LinkedIn URL"
									}), /* @__PURE__ */ jsx("input", {
										type: "url",
										value: linkedinUrl,
										onChange: (e) => setLinkedinUrl(e.target.value),
										placeholder: "https://www.linkedin.com/company/innrly/",
										className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors font-mono"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
										children: "X / Twitter URL"
									}), /* @__PURE__ */ jsx("input", {
										type: "url",
										value: twitterUrl,
										onChange: (e) => setTwitterUrl(e.target.value),
										placeholder: "https://x.com/innrly",
										className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors font-mono"
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ jsx("label", {
											className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
											children: "YouTube URL (Optional)"
										}), /* @__PURE__ */ jsx("input", {
											type: "url",
											value: youtubeUrl,
											onChange: (e) => setYoutubeUrl(e.target.value),
											placeholder: "https://www.youtube.com/@innrly",
											className: "w-full px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-indigo-500 transition-colors font-mono"
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm",
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "text-base font-bold text-slate-800 flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Megaphone, { className: "h-4.5 w-4.5 text-indigo-650" }), "Marketing & Pop-ups"]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-400",
								children: "Manage promotional pop-ups and marketing modals on the public site."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pt-2 flex items-center justify-between border border-slate-200 rounded-lg p-4 bg-slate-50",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-sm font-semibold text-slate-800",
									children: "Auto-show Trial Pop-up"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-500 mt-0.5",
									children: "When enabled, the 90-day trial offer will automatically appear for new visitors."
								})] }), /* @__PURE__ */ jsx(Switch, {
									checked: enableTrialPopup,
									onCheckedChange: setEnableTrialPopup
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 justify-end pt-2",
						children: [isSaved && /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1 text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full animate-fade-in",
							children: [/* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }), "Settings saved successfully!"]
						}), /* @__PURE__ */ jsxs(Button, {
							type: "submit",
							className: "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center gap-1.5 px-6 shadow-sm py-1.5 h-9",
							children: [/* @__PURE__ */ jsx(Save, { className: "h-3.5 w-3.5" }), "Save Configuration"]
						})]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-6",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-sm",
					children: [/* @__PURE__ */ jsxs("h2", {
						className: "text-sm font-bold text-slate-800 flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-4.5 w-4.5 text-indigo-650" }), "Portal Access"]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-slate-400 leading-relaxed font-medium",
						children: "This administrative console is restricted to internal operations team members. Actions taken are logged to the audit trail."
					})]
				})
			})]
		})]
	});
}
//#endregion
export { ControlHubSettings as component };
