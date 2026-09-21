import { t as track } from "./analytics-P7BrM78M.js";
//#region src/lib/lead-submit.ts
var RECAPTCHA_SITE_KEY = "6LcVJrkkAAAAABsSLGi1FDOjAtIyby9UNsBQPUCd";
async function getRecaptchaToken(action = "lead_submit") {
	if (typeof window === "undefined") return null;
	const grecaptcha = window.grecaptcha;
	if (!grecaptcha || typeof grecaptcha.execute !== "function") return null;
	return new Promise((resolve) => {
		try {
			grecaptcha.ready(() => {
				grecaptcha.execute(RECAPTCHA_SITE_KEY, { action }).then((token) => resolve(token)).catch(() => resolve(null));
			});
		} catch {
			resolve(null);
		}
	});
}
async function submitLead(payload) {
	const url = "/api/leads";
	const isNewsletter = payload.kind === "newsletter";
	let recaptchaToken = null;
	try {
		recaptchaToken = await getRecaptchaToken(payload.source || (isNewsletter ? "newsletter" : "lead_submit"));
	} catch {}
	try {
		const res = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				...payload,
				recaptcha_token: recaptchaToken,
				submittedAt: (/* @__PURE__ */ new Date()).toISOString()
			})
		});
		if (!res.ok) {
			track(isNewsletter ? "newsletter_signup" : "form_submit", {
				source: payload.source,
				ok: false,
				status: res.status
			});
			return {
				ok: false,
				error: `HTTP ${res.status}`
			};
		}
		track(isNewsletter ? "newsletter_signup" : "form_submit", {
			source: payload.source,
			ok: true
		});
		return { ok: true };
	} catch (e) {
		const error = e instanceof Error ? e.message : "network error";
		track(isNewsletter ? "newsletter_signup" : "form_submit", {
			source: payload.source,
			ok: false,
			error
		});
		return {
			ok: false,
			error
		};
	}
}
//#endregion
export { submitLead as t };
