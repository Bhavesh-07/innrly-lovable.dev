import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        let content = `User-agent: *\nAllow: /\n\nDisallow: /control-hub\nDisallow: /control-hub/*\nDisallow: /api/admin/*\n\nSitemap: https://www.innrly.com/sitemap.xml\n`;

        try {
          const backendUrl = process.env.BACKEND_URL || "http://127.0.0.1:8000";
          const res = await fetch(`${backendUrl}/api/robots-txt`);
          if (res.ok) {
            const data = await res.json();
            if (data && data.content) {
              content = data.content;
            }
          }
        } catch (e) {
          // Fallback to default
        }

        return new Response(content, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
