import { createFileRoute } from "@tanstack/react-router";
import { LeadsDashboardContainer } from "./control-hub.index";

export const Route = createFileRoute("/control-hub/onboarding")({
  component: ControlHubOnboardingPage,
  head: () => ({
    meta: [
      { title: "Innrly Onboarding Completions — Control Hub" },
      { name: "description", content: "Manage completed customer onboarding details." }
    ]
  })
});

function ControlHubOnboardingPage() {
  return <LeadsDashboardContainer activeTab="onboarding" />;
}
