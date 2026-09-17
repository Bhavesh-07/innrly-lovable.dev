import { createFileRoute } from "@tanstack/react-router";
import { LeadsDashboardContainer } from "./control-hub.index";

export const Route = createFileRoute("/control-hub/newsletters")({
  component: ControlHubNewslettersPage,
  head: () => ({
    meta: [
      { title: "Innrly Newsletter Subscribers — Control Hub" },
      { name: "description", content: "Manage newsletter signups." }
    ]
  })
});

function ControlHubNewslettersPage() {
  return <LeadsDashboardContainer activeTab="newsletters" />;
}
