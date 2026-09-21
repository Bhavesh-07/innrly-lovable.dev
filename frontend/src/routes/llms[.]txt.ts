import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        let content = `# Innrly\n\n> Hotel management software for back-office automation, business intelligence, and labor management.\n`;

        try {
          const backendUrl = process.env.BACKEND_URL || "http://127.0.0.1:8005";
          const res = await fetch(`${backendUrl}/api/llms-txt`);
          if (res.ok) {
            const data = await res.json();
            if (data && data.llms_txt) {
              content = data.llms_txt;
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
