//#region src/lib/testimonials.ts
var API_BASE = typeof window === "undefined" ? process.env.BACKEND_URL || "http://127.0.0.1:8000" : "/api";
async function fetchTestimonials(page) {
	try {
		let url = `${API_BASE}/testimonials`;
		if (page) url += `?page=${encodeURIComponent(page)}`;
		const res = await fetch(url);
		if (!res.ok) return [];
		return await res.json();
	} catch (e) {
		console.error("Failed to fetch testimonials", e);
		return [];
	}
}
//#endregion
export { fetchTestimonials as t };
