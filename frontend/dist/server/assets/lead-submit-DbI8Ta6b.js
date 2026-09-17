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
	const isNewsletter = payload.kind === "newsletter";
	try {
		await getRecaptchaToken(payload.source || (isNewsletter ? "newsletter" : "lead_submit"));
	} catch {}
	track(isNewsletter ? "newsletter_signup" : "form_submit", {
		source: payload.source,
		ok: true,
		dropped: true
	});
	return { ok: true };
}
//#endregion
export { submitLead as t };
