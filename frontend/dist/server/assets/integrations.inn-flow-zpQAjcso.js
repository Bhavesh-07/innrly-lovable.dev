//#region src/routes/integrations.inn-flow.tsx?tsr-shared=1
var faqs = [
	{
		q: "Is Innrly a competitor to Inn-flow?",
		a: "No. Inn-flow is a full hotel accounting system — general ledger, AP, AR, payroll, bank reconciliation, financial statements. Innrly is the back-office automation and data layer that sits in front of an accounting system. The right comparison is 'Innrly + Inn-flow' — not 'Innrly: alternative to Inn-flow'. Innrly does for Inn-flow what it already does for M3, QuickBooks, and Sage Intacct: capture invoices, auto-code them, reconcile OTAs, run night audit, and push clean data into the GL."
	},
	{
		q: "Is the Innrly + Inn-flow integration available today?",
		a: "An API-based push integration is on our roadmap. If you're an Inn-flow customer interested in early access, talk to us — we're prioritizing the integration based on customer demand."
	},
	{
		q: "Will the integration be two-way or push-only?",
		a: "Push-only at launch, mirroring how Innrly integrates with M3 and Sage Intacct: Innrly captures and codes the source documents, then pushes the completed entries into Inn-flow. Inn-flow remains the system of record for your general ledger and financials."
	},
	{
		q: "Do I keep Inn-flow for accounting?",
		a: "Yes. Inn-flow stays your accounting system of record. Innrly sits in front as the automation layer — invoice capture and GL coding, OTA reconciliation, night audit, Bill Pay, BI dashboards, and labor — feeding clean, audit-ready data into Inn-flow."
	},
	{
		q: "What does an Inn-flow customer actually gain from adding Innrly?",
		a: "Time. Innrly eliminates the manual A/P keying, the OTA reconciliation spreadsheets, the morning-after audit chase, and the patchwork of manual labor reports. Your Inn-flow GL gets audit-ready data sooner, and your GMs get a 5-minute daily snapshot they don't have today."
	},
	{
		q: "How is this different from Innrly + M3 or Innrly + QuickBooks?",
		a: "Same pattern. Innrly is a back-office automation layer that pushes into whatever accounting system you run. M3, QuickBooks, Sage Intacct, and Inn-flow are all valid systems of record — Innrly's job is to feed them, not replace them."
	}
];
//#endregion
export { faqs as t };
