//#region src/routes/integrations.quickbooks.tsx?tsr-shared=1
var faqs = [
	{
		q: "Is the QuickBooks integration two-way?",
		a: "Yes. Full bi-directional sync. Innrly pushes GL-coded invoices and journal entries into QuickBooks, and reads back vendors, chart of accounts, classes, and posted balances so both systems stay aligned."
	},
	{
		q: "Which versions of QuickBooks are supported?",
		a: "QuickBooks Online is fully supported with the two-way sync. Talk to us if you're on QuickBooks Desktop — we'll walk through the options."
	},
	{
		q: "Do I keep QuickBooks as my accounting system?",
		a: "Yes. QuickBooks stays your system of record. Innrly handles invoice capture, GL coding, OTA reconciliation, night audit, Bill Pay, and BI — then syncs cleanly with QuickBooks."
	},
	{
		q: "What about multi-property?",
		a: "Innrly supports portfolios across multiple QuickBooks files or a single multi-class file. Mapping is handled per property during onboarding."
	}
];
//#endregion
export { faqs as t };
