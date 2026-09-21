//#region src/lib/error-capture.ts
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
//#endregion
//#region src/lib/error-page.ts
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
//#endregion
//#region src/server.ts
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./assets/server-B6DD3GN6.js").then((m) => m.default ?? m);
	return serverEntryPromise;
}
function brandedErrorResponse() {
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isCatastrophicSsrErrorBody(body, responseStatus) {
	let payload;
	try {
		payload = JSON.parse(body);
	} catch {
		return false;
	}
	if (!payload || Array.isArray(payload) || typeof payload !== "object") return false;
	const fields = payload;
	const expectedKeys = /* @__PURE__ */ new Set([
		"message",
		"status",
		"unhandled"
	]);
	if (!Object.keys(fields).every((key) => expectedKeys.has(key))) return false;
	return fields.unhandled === true && fields.message === "HTTPError" && (fields.status === void 0 || fields.status === responseStatus);
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isCatastrophicSsrErrorBody(body, response.status)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return brandedErrorResponse();
}
var redirects = {
	"/features.html": "/features",
	"/services": "/features",
	"/services.html": "/features",
	"/pricing.html": "/pricing",
	"/contact.html": "/contact",
	"/blogs": "/blog",
	"/blogs.html": "/blog",
	"/integration": "/integrations",
	"/integration.html": "/integrations",
	"/ninety-day-free-trial": "/onboarding",
	"/ninety-day-free-trial.html": "/onboarding",
	"/privacy-policy": "/legal/privacy",
	"/privacy-policy.html": "/legal/privacy",
	"/terms-of-service": "/legal/terms",
	"/terms-of-service.html": "/legal/terms",
	"/cookie-policy": "/legal/cookies",
	"/cookie-policy.html": "/legal/cookies",
	"/expertlink": "/services/accountability-pack",
	"/expertlink.html": "/services/accountability-pack",
	"/about.html": "/about"
};
var server_default = { async fetch(request, env, ctx) {
	try {
		const url = new URL(request.url);
		const pathname = url.pathname;
		if (pathname.toLowerCase().startsWith("/assets/")) return new Response("410 Gone", {
			status: 410,
			statusText: "Gone"
		});
		const target = redirects[(pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname).toLowerCase()];
		if (target) {
			const targetUrl = new URL(target, request.url);
			targetUrl.search = url.search;
			return new Response(null, {
				status: 301,
				statusText: "Moved Permanently",
				headers: { Location: targetUrl.toString() }
			});
		}
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return brandedErrorResponse();
	}
} };
//#endregion
export { server_default as default, renderErrorPage as t };
