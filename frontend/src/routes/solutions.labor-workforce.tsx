import { createFileRoute, redirect } from "@tanstack/react-router";

// Item 8 (audit): Labor & Workforce merged into Innrly Shift to remove
// near-duplicate page (same persona, modules, metrics, FAQ). This route
// stays as a permanent redirect to preserve inbound links + SEO.
export const Route = createFileRoute("/solutions/labor-workforce")({
  beforeLoad: () => {
    throw redirect({ to: "/solutions/innrly-shift" });
  },
});
