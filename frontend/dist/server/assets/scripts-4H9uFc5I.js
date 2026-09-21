//#region src/lib/scripts.ts
var defaultSiteScripts = {
	ga4_id: "G-TJZT02L07P",
	gtm_id: null,
	header_tags: null,
	footer_tags: null,
	is_active: true
};
var API_BASE = typeof window === "undefined" ? process.env.BACKEND_URL || process.env.VITE_BACKEND_URL || "http://127.0.0.1:8005" : "/api";
async function fetchSiteScripts() {
	try {
		const res = await fetch(`${API_BASE}/settings/scripts`, { signal: AbortSignal.timeout(4e3) });
		if (!res.ok) return defaultSiteScripts;
		const data = await res.json();
		return {
			ga4_id: data.ga4_id ?? defaultSiteScripts.ga4_id,
			gtm_id: data.gtm_id ?? null,
			header_tags: data.header_tags ?? null,
			footer_tags: data.footer_tags ?? null,
			is_active: data.is_active !== void 0 ? Boolean(data.is_active) : true
		};
	} catch {
		return defaultSiteScripts;
	}
}
//#endregion
export { fetchSiteScripts as n, defaultSiteScripts as t };
