/**
 * Master integrations dataset. Single source of truth for the
 * /integrations page (searchable + filterable grid) and the LogosStrip.
 *
 * Categories map to the icons rendered on /integrations.
 * `to` links to a dedicated deep page (only M3, QuickBooks, Sage Intacct today).
 * `badge`: "partner" = official certified integration partner.
 */

export type IntegrationCategory =
  | "pms"
  | "ota"
  | "accounting"
  | "payroll"
  | "guest"
  | "banking"
  | "payments"
  | "workforce";

export type Integration = {
  name: string;
  initials: string;
  category: IntegrationCategory;
  /** Brand-tinted accent (oklch hue 0-360). */
  hue?: number;
  /** Dedicated integration deep-page route. */
  to?: string;
  /** "partner" = official certified partner. */
  badge?: "partner";
  /** Domain used for favicon/logo fetch. */
  domain?: string;
};

export const CATEGORY_LABELS: Record<IntegrationCategory, string> = {
  pms: "Property Management (PMS)",
  ota: "OTAs & Travel Channels",
  accounting: "Accounting",
  payroll: "Payroll & TimeClock",
  guest: "Guest Survey & Reputation",
  banking: "Banking (via Plaid)",
  payments: "Invoice Payments & A/P",
  workforce: "Workforce, Screening & Credit",
};

export const CATEGORY_BLURBS: Record<IntegrationCategory, string> = {
  pms: "Nightly audit, occupancy, ADR, RevPAR, and folio data pulled automatically every morning.",
  ota: "Commissions, chargebacks, and bookings reconciled automatically against your PMS — line by line.",
  accounting: "GL-coded invoices and reconciled journals sync straight into your books.",
  payroll:
    "Hours flow from Innrly TimeClock (Face-ID) into your payroll provider — no double entry.",
  guest: "Guest sentiment scores roll up alongside RevPAR and ADR — no separate dashboard.",
  banking:
    "Bank-feed reconciliation across every property's operating account — securely via Plaid.",
  payments: "Pay vendors with Virtual Cards, ACH, or check — fraud protection and rebate built in.",
  workforce:
    "Feature partnerships bringing background screening, HRIS, and credit data into Innrly.",
};

export const INTEGRATIONS: Integration[] = [
  // ─────────── PMS ───────────
  { name: "Opera (Oracle)", initials: "OP", category: "pms", hue: 25, domain: "oracle.com" },
  {
    name: "Choice Advantage",
    initials: "CA",
    category: "pms",
    hue: 15,
    domain: "choicehotels.com",
  },
  { name: "Marriott FOSSE", initials: "MF", category: "pms", hue: 0, domain: "marriott.com" },
  { name: "Hilton OnQ", initials: "HQ", category: "pms", hue: 230, domain: "hilton.com" },
  { name: "Hilton PEP", initials: "PE", category: "pms", hue: 230, domain: "hilton.com" },
  {
    name: "Best Western WHG",
    initials: "BW",
    category: "pms",
    hue: 220,
    domain: "bestwestern.com",
  },
  {
    name: "Wyndham Wynguest",
    initials: "WY",
    category: "pms",
    hue: 350,
    domain: "wyndhamhotels.com",
  },
  { name: "IHG (HotelKey / HMS)", initials: "IH", category: "pms", hue: 200, domain: "ihg.com" },
  { name: "StayNTouch", initials: "SN", category: "pms", hue: 280, domain: "stayntouch.com" },
  { name: "Cloudbeds", initials: "CB", category: "pms", hue: 195, domain: "cloudbeds.com" },
  { name: "Mews", initials: "MW", category: "pms", hue: 250, domain: "mews.com" },
  { name: "RoomKeyPMS", initials: "RK", category: "pms", hue: 165, domain: "roomkeypms.com" },
  { name: "Visual Matrix", initials: "VM", category: "pms", hue: 145, domain: "visualmatrix.com" },
  { name: "Maestro", initials: "MA", category: "pms", hue: 35, domain: "maestropms.com" },
  { name: "innRoad", initials: "IR", category: "pms", hue: 205, domain: "innroad.com" },
  { name: "HotelKey", initials: "HK", category: "pms", hue: 215, domain: "hotelkeyapp.com" },
  { name: "Jonas Chorum", initials: "JC", category: "pms", hue: 25, domain: "jonaschorum.com" },
  { name: "Stay PMS", initials: "ST", category: "pms", hue: 195, domain: "staypms.com" },

  // ─────────── OTA ───────────
  { name: "Booking.com", initials: "BK", category: "ota", hue: 215, domain: "booking.com" },
  { name: "Expedia", initials: "EX", category: "ota", hue: 45, domain: "expedia.com" },
  { name: "Priceline", initials: "PR", category: "ota", hue: 195, domain: "priceline.com" },
  { name: "CLC Lodging", initials: "CL", category: "ota", hue: 5, domain: "clclodging.com" },

  // ─────────── Accounting ───────────
  {
    name: "M3",
    initials: "M3",
    category: "accounting",
    hue: 215,
    to: "/integrations/m3",
    badge: "partner",
    domain: "m3as.com",
  },
  {
    name: "QuickBooks",
    initials: "QB",
    category: "accounting",
    hue: 145,
    to: "/integrations/quickbooks",
    domain: "quickbooks.intuit.com",
  },
  {
    name: "Sage Intacct",
    initials: "SI",
    category: "accounting",
    hue: 155,
    to: "/integrations/sage-intacct",
    domain: "sage.com",
  },
  { name: "Xero", initials: "XE", category: "accounting", hue: 195, domain: "xero.com" },
  { name: "NetSuite", initials: "NS", category: "accounting", hue: 5, domain: "netsuite.com" },

  // ─────────── Payroll & TimeClock ───────────
  { name: "ADP", initials: "AD", category: "payroll", hue: 5, domain: "adp.com" },
  { name: "Paychex", initials: "PX", category: "payroll", hue: 215, domain: "paychex.com" },
  { name: "Gusto", initials: "GU", category: "payroll", hue: 15, domain: "gusto.com" },
  { name: "Paycom", initials: "PC", category: "payroll", hue: 220, domain: "paycom.com" },
  { name: "Paylocity", initials: "PL", category: "payroll", hue: 145, domain: "paylocity.com" },
  { name: "Heartland", initials: "HL", category: "payroll", hue: 0, domain: "heartland.us" },
  {
    name: "Hotel Effectiveness",
    initials: "HE",
    category: "payroll",
    hue: 215,
    domain: "hoteleffectiveness.com",
  },

  // ─────────── Guest Survey ───────────
  { name: "Medallia", initials: "ME", category: "guest", hue: 350, domain: "medallia.com" },
  { name: "Revinate", initials: "RV", category: "guest", hue: 25, domain: "revinate.com" },
  { name: "GuestRevu", initials: "GR", category: "guest", hue: 195, domain: "guestrevu.com" },
  {
    name: "ReviewPro",
    initials: "RP",
    category: "guest",
    hue: 215,
    domain: "reviewpro.shijigroup.com",
  },
  { name: "Kipsu", initials: "KP", category: "guest", hue: 280, domain: "kipsu.com" },

  // ─────────── Banking ───────────
  {
    name: "Plaid",
    initials: "PD",
    category: "banking",
    hue: 5,
    badge: "partner",
    domain: "plaid.com",
  },
  { name: "Chase", initials: "CH", category: "banking", hue: 215, domain: "chase.com" },
  {
    name: "Bank of America",
    initials: "BA",
    category: "banking",
    hue: 0,
    domain: "bankofamerica.com",
  },
  { name: "Wells Fargo", initials: "WF", category: "banking", hue: 25, domain: "wellsfargo.com" },
  { name: "Truist", initials: "TR", category: "banking", hue: 280, domain: "truist.com" },
  { name: "U.S. Bank", initials: "US", category: "banking", hue: 220, domain: "usbank.com" },
  { name: "PNC", initials: "PN", category: "banking", hue: 25, domain: "pnc.com" },
  { name: "Capital One", initials: "C1", category: "banking", hue: 5, domain: "capitalone.com" },

  // ─────────── Payments & A/P ───────────
  { name: "Innrly Pay", initials: "IP", category: "payments", hue: 195 },
  { name: "Virtual Cards", initials: "VC", category: "payments", hue: 215 },
  { name: "ACH", initials: "AC", category: "payments", hue: 145 },
  {
    name: "Repay",
    initials: "RP",
    category: "payments",
    hue: 195,
    badge: "partner",
    domain: "repay.com",
  },
  { name: "Stripe", initials: "ST", category: "payments", hue: 250, domain: "stripe.com" },

  // ─────────── Workforce / Screening / Credit ───────────
  {
    name: "Shield Screening",
    initials: "SS",
    category: "workforce",
    hue: 215,
    badge: "partner",
    domain: "shieldscreening.com",
  },
  {
    name: "isolved",
    initials: "IS",
    category: "workforce",
    hue: 25,
    badge: "partner",
    domain: "isolvedhcm.com",
  },
  {
    name: "TransUnion",
    initials: "TU",
    category: "workforce",
    hue: 5,
    badge: "partner",
    domain: "transunion.com",
  },
];

export const CATEGORY_ORDER: IntegrationCategory[] = [
  "pms",
  "ota",
  "accounting",
  "payroll",
  "guest",
  "banking",
  "payments",
  "workforce",
];
