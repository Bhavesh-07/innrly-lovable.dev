//#region src/lib/analytics.ts
var GA_MEASUREMENT_ID = "G-TJZT02L07P";
function track(event, payload = {}) {
	if (typeof window === "undefined") return;
	if (typeof window.gtag === "function") try {
		window.gtag("event", event, payload);
	} catch {}
	const body = {
		event,
		...payload,
		path: window.location.pathname + window.location.search,
		referrer: document.referrer || void 0,
		ts: (/* @__PURE__ */ new Date()).toISOString()
	};
	const url = "/api/telemetry";
	try {
		const blob = new Blob([JSON.stringify(body)], { type: "application/json" });
		if (navigator.sendBeacon?.(url, blob)) return;
		fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
			keepalive: true
		});
	} catch {}
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
