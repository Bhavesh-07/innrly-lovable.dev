import { t as Wordmark } from "./Wordmark-Ba3HVvRF.js";
import { a as getAdminName, c as getAdminUser, d as isSuperAdmin, f as verifyAdminSession, n as adminLogin, o as getAdminRole, r as clearAdminSession, s as getAdminToken, u as hasPermission } from "./admin-auth-5LzGtRF4.js";
import { useEffect, useState } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, ArrowLeft, BookOpen, Eye, EyeOff, Laptop, Loader2, Lock, LogOut, Mail, MessageSquareQuote, Search, Settings, ShieldAlert, ShieldCheck, User, UserCheck, UserCog, Users } from "lucide-react";
//#region src/routes/control-hub.tsx?tsr-split=component
function ControlHubLayout() {
	const [authState, setAuthState] = useState("checking");
	const [adminUser, setAdminUser] = useState(() => getAdminUser());
	const [adminName, setAdminName] = useState(() => getAdminName());
	const [adminRole, setAdminRole] = useState(() => getAdminRole());
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);
	const [logAlertCount, setLogAlertCount] = useState(0);
	useEffect(() => {
		let isMounted = true;
		async function checkAuth() {
			if (!getAdminToken()) {
				if (isMounted) setAuthState("unauthenticated");
				return;
			}
			const result = await verifyAdminSession();
			if (!isMounted) return;
			if (result.ok && result.user) {
				setAuthState("authenticated");
				setAdminUser(result.user.username);
				setAdminName(result.user.name || result.user.username);
				setAdminRole(result.user.role);
			} else setAuthState("unauthenticated");
		}
		const fallbackTimer = setTimeout(() => {
			if (isMounted) setAuthState((prev) => prev === "checking" ? "unauthenticated" : prev);
		}, 3500);
		checkAuth().finally(() => {
			clearTimeout(fallbackTimer);
		});
		const handleLogoutEvent = () => {
			setAuthState("unauthenticated");
		};
		window.addEventListener("innrly-admin-logout", handleLogoutEvent);
		return () => {
			isMounted = false;
			clearTimeout(fallbackTimer);
			window.removeEventListener("innrly-admin-logout", handleLogoutEvent);
		};
	}, []);
	useEffect(() => {
		if (authState !== "authenticated") return;
		let isMounted = true;
		async function fetchStats() {
			try {
				const apiRoot = "/api/leads".replace(/\/leads\/?$/, "");
				const res = await fetch(`${apiRoot}/api/leads/logs/stats`, { headers: getAdminAuthHeaders({ Accept: "application/json" }) });
				if (res.ok && isMounted) {
					const data = await res.json();
					setLogAlertCount((data.failed || 0) + (data.partial || 0));
				}
			} catch {}
		}
		fetchStats();
		const interval = setInterval(fetchStats, 15e3);
		return () => {
			isMounted = false;
			clearInterval(interval);
		};
	}, [authState]);
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		if (!username.trim() || !password.trim()) {
			setLoginError("Please enter both username and password.");
			return;
		}
		setIsSubmitting(true);
		setLoginError(null);
		const result = await adminLogin(username.trim(), password);
		setIsSubmitting(false);
		if (result.ok && result.user) {
			setAuthState("authenticated");
			setAdminUser(result.user.username);
			setAdminName(result.user.name || result.user.username);
			setAdminRole(result.user.role);
			setPassword("");
		} else setLoginError(result.error || "Authentication failed. Please verify your credentials.");
	};
	const handleLogout = () => {
		clearAdminSession();
		setAuthState("unauthenticated");
		setUsername("");
		setPassword("");
	};
	if (authState === "checking") return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-[#070b14] flex flex-col items-center justify-center text-slate-300 font-sans",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative flex flex-col items-center gap-4",
			children: [/* @__PURE__ */ jsx("div", {
				className: "h-12 w-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center animate-pulse",
				children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-6 w-6 text-indigo-400" })
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm font-medium text-slate-400",
				children: "Verifying administrator credentials..."
			})]
		})
	});
	if (authState === "unauthenticated") return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-[#070b14] text-slate-200 font-sans flex flex-col justify-center items-center px-4 relative overflow-hidden selection:bg-indigo-500 selection:text-white",
		children: [
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-indigo-600/20 via-blue-600/10 to-transparent blur-3xl opacity-60" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-0 right-10 w-[400px] h-[300px] bg-teal-500/10 blur-3xl opacity-40" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative w-full max-w-md z-10",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "text-center mb-8",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "inline-flex items-center justify-center mb-3",
								children: /* @__PURE__ */ jsx(Wordmark, {
									size: "lg",
									className: "text-white"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex items-center justify-center gap-2",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20",
									children: "Control Hub"
								})
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-slate-400 mt-2",
								children: "Sign in to access management and telemetry"
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-8 shadow-2xl shadow-black/50",
						children: /* @__PURE__ */ jsxs("form", {
							onSubmit: handleLoginSubmit,
							className: "space-y-5",
							children: [
								loginError && /* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-300",
									children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 shrink-0 text-rose-400 mt-0.5" }), /* @__PURE__ */ jsx("div", {
										className: "flex-1",
										children: loginError
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ jsx("label", {
										className: "text-xs font-semibold uppercase tracking-wider text-slate-300",
										children: "Username"
									}), /* @__PURE__ */ jsxs("div", {
										className: "relative",
										children: [/* @__PURE__ */ jsx("div", {
											className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400",
											children: /* @__PURE__ */ jsx(User, { className: "h-4 w-4" })
										}), /* @__PURE__ */ jsx("input", {
											type: "text",
											value: username,
											onChange: (e) => setUsername(e.target.value),
											placeholder: "Enter your username",
											required: true,
											autoFocus: true,
											className: "w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ jsx("label", {
										className: "text-xs font-semibold uppercase tracking-wider text-slate-300",
										children: "Password"
									}), /* @__PURE__ */ jsxs("div", {
										className: "relative",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400",
												children: /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4" })
											}),
											/* @__PURE__ */ jsx("input", {
												type: showPassword ? "text" : "password",
												value: password,
												onChange: (e) => setPassword(e.target.value),
												placeholder: "••••••••••••",
												required: true,
												className: "w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-10 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
											}),
											/* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => setShowPassword(!showPassword),
												tabIndex: -1,
												className: "absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-200 transition-colors",
												children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
											})
										]
									})]
								}),
								/* @__PURE__ */ jsx("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all",
									children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), /* @__PURE__ */ jsx("span", { children: "Authenticating..." })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Lock, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Unlock Control Hub" })] })
								})
							]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/",
							className: "inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors",
							children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Return to Innrly.com" })]
						})
					})
				]
			})
		]
	});
	const hasMarketingGroup = hasPermission("contact_inquiries") || hasPermission("free_trials") || hasPermission("onboardings") || hasPermission("newsletter_list");
	const hasConfigGroup = hasPermission("testimonials") || hasPermission("blogs") || hasPermission("seo") || hasPermission("settings");
	const userIsSuper = adminRole === "super_admin" || isSuperAdmin();
	return /* @__PURE__ */ jsxs("div", {
		className: "admin-portal flex min-h-screen h-full w-full flex-1 bg-[#f8f9fa] text-slate-600 font-sans antialiased overflow-hidden",
		children: [/* @__PURE__ */ jsxs("aside", {
			className: "w-64 border-r border-slate-200 bg-white flex flex-col shrink-0",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "h-16 border-b border-slate-100 flex items-center justify-between px-5 shrink-0 bg-white",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/control-hub",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(Wordmark, {
							size: "sm",
							className: "text-slate-900"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[10px] text-indigo-600 px-1.5 py-0.5 bg-indigo-50 rounded-md font-bold border border-indigo-100 uppercase tracking-wider",
							children: "Hub"
						})]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "p-4 border-b border-slate-100 flex items-center gap-3 shrink-0 bg-slate-50/50",
					children: [/* @__PURE__ */ jsx("div", {
						className: "h-10 w-10 rounded-xl overflow-hidden bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-sm shadow-sm",
						children: adminName.charAt(0).toUpperCase()
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-1.5",
							children: /* @__PURE__ */ jsx("span", {
								className: "text-sm font-bold text-slate-800 block leading-tight truncate",
								children: adminName
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1.5 mt-1",
							children: [userIsSuper ? /* @__PURE__ */ jsx("span", {
								className: "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200/60",
								children: "Super Admin"
							}) : /* @__PURE__ */ jsx("span", {
								className: "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200",
								children: "User"
							}), /* @__PURE__ */ jsxs("span", {
								className: "text-[11px] text-emerald-600 flex items-center gap-1 font-medium",
								children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }), "Active"]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "flex-1 p-4 space-y-1.5 overflow-y-auto",
					children: [
						hasMarketingGroup && /* @__PURE__ */ jsxs(Fragment, { children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2",
								children: "Marketing & Leads"
							}),
							hasPermission("contact_inquiries") && /* @__PURE__ */ jsxs(Link, {
								to: "/control-hub",
								activeProps: { className: "bg-indigo-50 text-indigo-600 font-semibold" },
								inactiveProps: { className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" },
								className: "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
								activeOptions: { exact: true },
								children: [/* @__PURE__ */ jsx(Users, { className: "h-4.5 w-4.5" }), "Contact Inquiries"]
							}),
							hasPermission("free_trials") && /* @__PURE__ */ jsxs(Link, {
								to: "/control-hub/trials",
								activeProps: { className: "bg-indigo-50 text-indigo-600 font-semibold" },
								inactiveProps: { className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" },
								className: "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
								children: [/* @__PURE__ */ jsx(Laptop, { className: "h-4.5 w-4.5" }), "Free Trials"]
							}),
							hasPermission("onboardings") && /* @__PURE__ */ jsxs(Link, {
								to: "/control-hub/onboarding",
								activeProps: { className: "bg-indigo-50 text-indigo-600 font-semibold" },
								inactiveProps: { className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" },
								className: "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
								children: [/* @__PURE__ */ jsx(UserCheck, { className: "h-4.5 w-4.5" }), "Onboardings"]
							}),
							hasPermission("newsletter_list") && /* @__PURE__ */ jsxs(Link, {
								to: "/control-hub/newsletters",
								activeProps: { className: "bg-indigo-50 text-indigo-600 font-semibold" },
								inactiveProps: { className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" },
								className: "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
								children: [/* @__PURE__ */ jsx(Mail, { className: "h-4.5 w-4.5" }), "Newsletter List"]
							}),
							(hasPermission("lead_logs") || userIsSuper) && /* @__PURE__ */ jsxs(Link, {
								to: "/control-hub/logs",
								activeProps: { className: "bg-indigo-50 text-indigo-600 font-semibold" },
								inactiveProps: { className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" },
								className: "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx(ShieldAlert, { className: "h-4.5 w-4.5 text-indigo-600" }), /* @__PURE__ */ jsx("span", { children: "Audit & Recovery" })]
								}), logAlertCount > 0 && /* @__PURE__ */ jsx("span", {
									className: "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/15 text-rose-600 border border-rose-200 animate-pulse",
									children: logAlertCount
								})]
							})
						] }),
						hasConfigGroup && /* @__PURE__ */ jsxs(Fragment, { children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-4 mb-2",
								children: "Site Content & Config"
							}),
							hasPermission("testimonials") && /* @__PURE__ */ jsxs(Link, {
								to: "/control-hub/testimonials",
								activeProps: { className: "bg-indigo-50 text-indigo-600 font-semibold" },
								inactiveProps: { className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" },
								className: "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
								children: [/* @__PURE__ */ jsx(MessageSquareQuote, { className: "h-4.5 w-4.5" }), "Testimonials"]
							}),
							hasPermission("blogs") && /* @__PURE__ */ jsxs(Link, {
								to: "/control-hub/blogs",
								activeProps: { className: "bg-indigo-50 text-indigo-600 font-semibold" },
								inactiveProps: { className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" },
								className: "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
								children: [/* @__PURE__ */ jsx(BookOpen, { className: "h-4.5 w-4.5" }), "Blog Manager"]
							}),
							hasPermission("seo") && /* @__PURE__ */ jsxs(Link, {
								to: "/control-hub/seo",
								activeProps: { className: "bg-indigo-50 text-indigo-600 font-semibold" },
								inactiveProps: { className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" },
								className: "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
								children: [/* @__PURE__ */ jsx(Search, { className: "h-4.5 w-4.5" }), "SEO Editor"]
							}),
							hasPermission("settings") && /* @__PURE__ */ jsxs(Link, {
								to: "/control-hub/settings",
								activeProps: { className: "bg-indigo-50 text-indigo-600 font-semibold" },
								inactiveProps: { className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" },
								className: "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
								children: [/* @__PURE__ */ jsx(Settings, { className: "h-4.5 w-4.5" }), "System Settings"]
							})
						] }),
						userIsSuper && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
							className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-4 mb-2",
							children: "Administration"
						}), /* @__PURE__ */ jsxs(Link, {
							to: "/control-hub/users",
							activeProps: { className: "bg-indigo-50 text-indigo-600 font-semibold" },
							inactiveProps: { className: "text-slate-600 hover:text-slate-900 hover:bg-slate-50" },
							className: "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
							children: [/* @__PURE__ */ jsx(UserCog, { className: "h-4.5 w-4.5" }), "User Management"]
						})] }),
						/* @__PURE__ */ jsx("div", {
							className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-6 mb-2",
							children: "Session"
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: handleLogout,
							className: "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 transition-all w-full text-left cursor-pointer",
							children: [/* @__PURE__ */ jsx(LogOut, { className: "h-4.5 w-4.5" }), "Sign Out"]
						})
					]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex-1 flex flex-col min-w-0 overflow-hidden",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 shrink-0 shadow-sm",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-3",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-sm font-semibold text-slate-800",
						children: "Control Hub Dashboard"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/",
						target: "_blank",
						className: "text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors",
						children: "View Public Site ↗"
					}), /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: handleLogout,
						className: "flex items-center gap-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer",
						children: [/* @__PURE__ */ jsx(LogOut, { className: "h-3.5 w-3.5" }), "Sign Out"]
					})]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-y-auto p-8",
				children: /* @__PURE__ */ jsx(Outlet, {})
			})]
		})]
	});
}
//#endregion
export { ControlHubLayout as component };
