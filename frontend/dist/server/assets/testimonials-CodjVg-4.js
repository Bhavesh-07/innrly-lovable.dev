//#region src/lib/testimonials.ts
var API_BASE = typeof window === "undefined" ? process.env.BACKEND_URL || "http://127.0.0.1:8005" : "/api";
var testimonialsCache = {};
var CACHE_TTL_MS = 60 * 1e3;
async function fetchTestimonials(page) {
	const cacheKey = page || "all";
	const cached = testimonialsCache[cacheKey];
	if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) return cached.data;
	try {
		let url = `${API_BASE}/testimonials`;
		if (page) url += `?page=${encodeURIComponent(page)}`;
		const res = await fetch(url, { signal: AbortSignal.timeout(3e3) });
		if (!res.ok) return cached?.data || [];
		const data = await res.json();
		if (Array.isArray(data)) {
			testimonialsCache[cacheKey] = {
				data,
				timestamp: Date.now()
			};
			return data;
		}
		return cached?.data || [];
	} catch (e) {
		return cached?.data || [];
	}
}
//#endregion
export { fetchTestimonials as t };
