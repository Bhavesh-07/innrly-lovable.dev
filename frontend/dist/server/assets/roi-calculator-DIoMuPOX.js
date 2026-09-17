//#region src/routes/roi-calculator.tsx?tsr-shared=1
var faqs = [
	{
		q: "How accurate is this ROI calculator?",
		a: "The defaults are drawn from anonymized data across 200+ hotels on Innrly. Time savings (10 hrs/week per property) is the operator midpoint of a 5–15 hour range. Revenue recovery (25 bps) is the conservative end of OTA commission clawback + card chargeback audit recoveries we actually see in production."
	},
	{
		q: "Does the calculation include the setup fee?",
		a: "No — it compares ongoing annual subscription cost against ongoing annual savings. A one-time $299 per-property setup fee applies on monthly plans and is waived on annual plans."
	},
	{
		q: "What if my portfolio has lower revenue per property?",
		a: "Adjust the slider. The labor savings stay constant per property (they depend on hours, not revenue), but the revenue-recovery component scales with each property's top line. For limited-service portfolios under $1.5M ARR per property, the labor savings typically dominate the ROI."
	},
	{
		q: "How long until the savings start?",
		a: "Most operators see hours saved in week 2 as the night-audit workflow stabilizes. OTA reconciliation typically surfaces the first month's recoveries within 30 days. The full run-rate is usually in place by day 60."
	},
	{
		q: "Can I get a tailored ROI on my actual data?",
		a: "Yes — book a walkthrough and we'll run the model against a sample of your real PMS, accounting, and OTA statements so the numbers reflect your specific portfolio, not industry averages."
	}
];
//#endregion
export { faqs as t };
