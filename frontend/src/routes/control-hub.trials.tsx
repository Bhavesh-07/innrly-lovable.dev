import { createFileRoute } from "@tanstack/react-router";
import { LeadsDashboardContainer } from "./control-hub.index";

export const Route = createFileRoute("/control-hub/trials")({
  component: ControlHubTrialsPage,
  head: () => ({
    meta: [
      { title: "Innrly Free Trials — Control Hub" },
      { name: "description", content: "Manage free trial applications." }
    ]
  })
});

function ControlHubTrialsPage() {
  return <LeadsDashboardContainer activeTab="trials" />;
}
