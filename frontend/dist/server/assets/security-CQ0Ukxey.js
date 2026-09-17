//#region src/routes/security.tsx?tsr-shared=1
var faqs = [
	{
		q: "Where is data hosted?",
		a: "Innrly runs on a tier-1 US cloud provider with multi-region replication and isolated tenant storage. Data residency can be discussed for enterprise portfolios."
	},
	{
		q: "What compliance frameworks do you map to?",
		a: "Our controls are aligned with SOC 2 and PCI-DSS principles. We share our security documentation under NDA — email security@innrly.com."
	},
	{
		q: "How do you handle PII?",
		a: "Guest PII stays within the PMS unless explicitly required. Innrly minimizes the PII surface and never sells or shares your data with third parties."
	},
	{
		q: "Can I get a custom DPA or BAA?",
		a: "Yes. We sign standard data processing agreements and accommodate enterprise legal review on request."
	}
];
//#endregion
export { faqs as t };
