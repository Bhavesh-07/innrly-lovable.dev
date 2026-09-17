import { t as track } from "./analytics-CQpeycZZ.js";
//#region src/lib/lead-submit.ts
async function submitLead(payload) {
	const url = "/api/leads";
	const isNewsletter = payload.kind === "newsletter";
	try {
		const res = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				...payload,
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
