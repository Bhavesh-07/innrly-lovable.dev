//#region src/routes/hotel-back-office-automation.tsx?tsr-shared=1
var faqs = [
	{
		q: "Will this require us to replace our PMS or General Ledger?",
		a: "No. Innrly is PMS-neutral and GL-neutral. It sits in the middle, connecting PMS systems (Opera, Hilton OnQ, FOSSE) with General Ledgers (QuickBooks, M3, Sage Intacct). You keep your systems of record, while Innrly automates the manual entries and reconciliation between them."
	},
	{
		q: "How much time do properties actually save?",
		a: "Depending on the brand and size, properties save between 40 and 180 hours per month. The biggest savings come from automated night audit packet filing, automated A/P invoice extraction/GL coding, and daily deposit reconciliation."
	},
	{
		q: "What is an Exceptions-First workflow?",
		a: "Instead of having your controller check all 10,000 daily transactions, Innrly's engine matches and clears the correct ones overnight. Only the variances (mismatched credit card batches, missed deposits, or wrong invoice totals) land on the exceptions dashboard for human triage."
	},
	{
		q: "How does it handle compliance for biometric Face-ID?",
		a: "Innrly provides standard biometric disclosures and releases for workers during enrollment on tablets, helping you comply with local regulations (such as BIPA in Illinois) by keeping consent tracking built directly into the flow."
	}
];
//#endregion
export { faqs as t };
