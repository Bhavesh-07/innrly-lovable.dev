import { t as faqs } from "./integrations.cloudbeds-DLhc_SHq.js";
import { t as IntegrationLayout } from "./IntegrationLayout-CRnAPpRD.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/integrations.cloudbeds.tsx?tsr-split=component
function Page() {
	return /* @__PURE__ */ jsx(IntegrationLayout, {
		partnerName: "Cloudbeds",
		eyebrow: "Integration · Cloudbeds",
		badge: "PMS · Cloud-native",
		title: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Innrly + Cloudbeds: ",
			/* @__PURE__ */ jsx("span", {
				className: "text-gradient",
				children: "automate the back office"
			}),
			" behind your PMS."
		] }),
		intro: "Innrly pulls daily Cloudbeds reports and reconciles them against bank, credit card, and OTA statements. Your night-audit pack, A/P workflow, and BI dashboards run themselves.",
		direction: "push-only",
		directionLabel: "Read from Cloudbeds · push to accounting",
		whatItDoes: [
			{
				heading: "Read Cloudbeds daily",
				body: "Daily reports and folio data flow into Innrly automatically — no CSV downloads."
			},
			{
				heading: "Reconcile across rails",
				body: "Match Cloudbeds revenue against bank deposits, credit card batches, and OTA settlements daily."
			},
			{
				heading: "Push to accounting",
				body: "Coded entries land in QuickBooks, M3, or Sage Intacct so your GL is always current."
			}
		],
		flow: {
			from: "Cloudbeds",
			via: "Innrly · reconcile, code, route",
			to: "Your accounting system"
		},
		inScope: [
			"Daily reconciliation and night-audit automation",
			"OTA commission audit",
			"Invoice capture and Bill Pay",
			"Labor scheduling and Face-ID TimeClock"
		],
		staysIn: {
			system: "Cloudbeds",
			items: [
				"Reservations and the room ledger",
				"Rate management and channel distribution",
				"Front-desk workflow"
			]
		},
		faqs
	});
}
//#endregion
export { Page as component };
