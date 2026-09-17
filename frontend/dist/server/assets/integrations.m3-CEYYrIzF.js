//#region src/routes/integrations.m3.tsx?tsr-shared=1
var faqs = [
	{
		q: "Is this an official M3 integration?",
		a: "Yes. Innrly is an officially certified M3 integration partner. Invoices captured and GL-coded in Innrly push directly into M3 as the system of record."
	},
	{
		q: "Is the integration two-way or push-only?",
		a: "Push-only today. Innrly sends GL-coded invoices into M3; M3 remains the system of record for your general ledger, financials, and reporting."
	},
	{
		q: "What does Innrly actually do for M3 customers?",
		a: "Innrly captures invoices via OCR and email-in, auto-populates header and line data, applies your GL codes, routes for approval, and pushes the completed invoice into M3 — eliminating manual data entry."
	},
	{
		q: "Do I keep M3 for accounting?",
		a: "Yes. M3 stays your accounting system of record. Innrly sits in front as the back-office automation layer: invoice capture, GL coding, OTA reconciliation, night audit, Bill Pay, BI, and labor."
	},
	{
		q: "How long does it take to connect?",
		a: "Most properties are connected and pushing live invoices within 2–4 weeks."
	}
];
//#endregion
export { faqs as t };
