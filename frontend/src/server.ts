import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

const redirects: Record<string, string> = {
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
  "/about.html": "/about",
};

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname;

      // Intercept legacy assets and return 410 Gone
      if (pathname.toLowerCase().startsWith("/assets/")) {
        return new Response("410 Gone", {
          status: 410,
          statusText: "Gone",
        });
      }

      // Check redirects (ignoring trailing slash and case)
      const normalizedPath =
        pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

      const target = redirects[normalizedPath.toLowerCase()];
      if (target) {
        const targetUrl = new URL(target, request.url);
        targetUrl.search = url.search;
        return new Response(null, {
          status: 301,
          statusText: "Moved Permanently",
          headers: {
            Location: targetUrl.toString(),
          },
        });
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
