//#region src/lib/analytics.ts
var GA_MEASUREMENT_ID = "G-TJZT02L07P";
function track(event, payload = {}) {
	if (typeof window === "undefined") return;
	if (typeof window.gtag === "function") try {
		window.gtag("event", event, payload);
	} catch {}
	({ ...payload }), window.location.pathname + window.location.search, document.referrer, (/* @__PURE__ */ new Date()).toISOString();
}
function trackPageView(path) {
	if (typeof window !== "undefined" && typeof window.gtag === "function") try {
		window.gtag("config", GA_MEASUREMENT_ID, {
			page_path: path,
			page_location: window.location.href,
			page_title: document.title
		});
		window.gtag("event", "page_view", {
			page_path: path,
			page_location: window.location.href,
			page_title: document.title
		});
	} catch {}
	track("page_view", { path });
}
//#endregion
export { trackPageView as n, track as t };
