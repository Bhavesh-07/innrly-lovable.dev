export type IntegrationCategory = 
  | "All Integrations" 
  | "Accounting" 
  | "Benchmarking" 
  | "Database" 
  | "Customer" 
  | "Labor" 
  | "PMS" 
  | "Reputation";

export interface Integration {
  id: string;
  name: string;
  category: Exclude<IntegrationCategory, "All Integrations">;
  image: string;
  comingSoon?: boolean;
}

export const integrations: Integration[] = [
  {
    id: "choice-advantage",
    name: "Choice Advantage",
    category: "PMS",
    image: "https://innrly.com/media/2022/09/integrations_1.png",
  },
  {
    id: "hotel-effectiveness",
    name: "Hotel Effectiveness",
    category: "Labor",
    image: "https://innrly.com/media/2022/09/integrations_2.png",
  },
  {
    id: "hotel-key",
    name: "Hotel Key",
    category: "PMS",
    image: "https://innrly.com/media/2022/09/integrations_3.png",
  },
  {
    id: "medallia",
    name: "Medallia",
    category: "Reputation",
    image: "https://innrly.com/media/2022/09/integrations_4.png",
  },
  {
    id: "micros",
    name: "Micros",
    category: "PMS",
    image: "https://innrly.com/media/2022/09/integrations_5.png",
  },
  {
    id: "fosse",
    name: "FOSSE",
    category: "PMS",
    image: "https://innrly.com/media/2022/09/integrations_6.png",
  },
  {
    id: "onq",
    name: "OnQ",
    category: "PMS",
    image: "https://innrly.com/media/2022/09/integrations_7.png",
  },
  {
    id: "opera",
    name: "Opera by Oracle",
    category: "PMS",
    image: "https://innrly.com/media/2022/09/integrations_8.png",
  },
  {
    id: "accounting-system",
    name: "Accounting System",
    category: "Accounting",
    image: "https://innrly.com/media/2022/09/integrations_9.png",
  },
  {
    id: "revinate",
    name: "Revinate",
    category: "Reputation",
    image: "https://innrly.com/media/2022/09/integrations_10.png",
  },
  {
    id: "clc-lodging",
    name: "CLC Lodging",
    category: "Customer",
    image: "https://innrly.com/media/2022/09/integrations_17.png",
  },
  {
    id: "sql",
    name: "SQL",
    category: "Database",
    image: "https://innrly.com/media/2022/09/integrations_12.png",
  },
  {
    id: "str",
    name: "STR",
    category: "Benchmarking",
    image: "https://innrly.com/media/2022/09/integrations_13.png",
  },
  {
    id: "visual-matrix",
    name: "Visual Matrix",
    category: "PMS",
    image: "https://innrly.com/media/2022/09/integrations_14.png",
  },
  {
    id: "jonas-chorum",
    name: "Jonas Chorum",
    category: "PMS",
    image: "https://innrly.com/media/2022/09/integrations_15.png",
  },
];

export const categories: IntegrationCategory[] = [
  "All Integrations",
  "Accounting",
  "Benchmarking",
  "Database",
  "Customer",
  "Labor",
  "PMS",
  "Reputation",
];
