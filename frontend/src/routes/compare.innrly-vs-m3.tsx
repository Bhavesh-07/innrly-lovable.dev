import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/compare/innrly-vs-m3")({
  beforeLoad: () => {
    throw redirect({ to: "/integrations/m3", statusCode: 301 });
  },
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: { Location: "/integrations/m3" },
        }),
    },
  },
});
