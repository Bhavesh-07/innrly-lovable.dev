import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionModuleRow } from "@/components/solutions/SolutionModuleRow";
import { SolutionBenefits } from "@/components/solutions/SolutionBenefits";
import { SolutionFeatureGrid } from "@/components/solutions/SolutionFeatureGrid";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  FileCheck,
  Brain,
  Building2,
  FileSpreadsheet,
  Activity,
} from "lucide-react";
import businessIntelligenceLayerImage from "@/assets/solutions/business-intelligence-layer.png";
import multiPropertyCommandCenterImage from "@/assets/solutions/multi-property-command-center.png";
import realFinancialIntelligenceImage from "@/assets/solutions/real-financial-intelligence.png";
import reconciliationValidationHubImage from "@/assets/solutions/reconciliation-validation-hub.png";
import reportingAutomationImage from "@/assets/solutions/reporting-automation.png";
import unifiedDataEngineImage from "@/assets/solutions/unified-data-engine.png";


const modules = [
  {
    title: "Unified Data Engine",
    icon: Database,
    description: "Centralize all your hotel data sources into a single, standardized system that ensures data accuracy across every touchpoint.",
    includes: [
      "PMS, POS, GL, payroll/time clocks integration",
      "OTAs and VCC systems connectivity",
      "Banks and credit card data import",
      "Standardized KPI mapping and validation"
    ],
    purpose: "Pulls data from all systems and standardizes every source, ensuring accurate KPIs and cross-system validation.",
    image: unifiedDataEngineImage,
    objectFit: "contain" as const,
    imageScale: 1.10
  },
  {
    title: "Real Financial Intelligence",
    icon: BarChart3,
    description: "Comprehensive financial performance tracking with real-time visibility into revenue, labor costs, and departmental expenses.",
    includes: [
      "Occupancy, ADR, RevPAR tracking",
      "Daily revenue validation & cross-checks",
      "Departmental P&L analysis",
      "Budget vs Actual variance tracking"
    ],
    purpose: "Monitor revenue, labor costs, and expenses in real-time with automated variance explanations.",
    image: realFinancialIntelligenceImage,
    objectFit: "contain" as const
  },
  {
    title: "Reconciliation & Validation Hub",
    icon: FileCheck,
    description: "Automated matching and exception handling that eliminates manual reconciliation work across all revenue streams.",
    includes: [
      "OTA Reconciliation with commission tracking",
      "Virtual Card management and expiry monitoring",
      "Night Audit automation with folio checks",
      "Bank & Credit Card deposit matching"
    ],
    purpose: "Eliminate manual reconciliation work and catch discrepancies before they become losses.",
    image: reconciliationValidationHubImage,
    objectFit: "contain" as const,
    imageScale: 1.08
  },
  {
    title: "Business Intelligence Layer",
    icon: Brain,
    description: "Automation-driven insights and predictive intelligence that convert raw data into clear, actionable decisions.",
    includes: [
      "Automated variance narratives",
      "Exception summaries ranked by impact",
      "Predictive alerts for risk areas",
      "Smart correction suggestions"
    ],
    purpose: "Deliver clear, automated explanations of performance shifts—along with prioritized, actionable recommendations to improve outcomes.",
    image: businessIntelligenceLayerImage,
    objectFit: "contain" as const,
    imageScale: 1.10
  },
  {
    title: "Multi-Property Command Center",
    icon: Building2,
    description: "Portfolio-wide visibility and control that enables owners and managers to monitor all properties from a single dashboard.",
    includes: [
      "Side-by-side property comparisons",
      "Roll-up dashboards for owners & managers",
      "Hotel, department, transaction drilldowns",
      "Performance heatmaps and rankings"
    ],
    purpose: "View every hotel in one screen, benchmark performance, and identify best and worst performing areas.",
    image: multiPropertyCommandCenterImage,
    imagePosition: "center center",
    objectFit: "contain" as const
  },
  {
    title: "Reporting & Automation",
    icon: FileSpreadsheet,
    description: "Scheduled reports and audit-ready exports that streamline month-end processes and reduce manual workload.",
    includes: [
      "Automated morning reports",
      "Daily financial summaries",
      "Audit-ready exports",
      "Role-based access controls"
    ],
    purpose: "Configurable report scheduling with role-based access for owners, GMs, finance teams, and accountants.",
    image: reportingAutomationImage,
    objectFit: "contain" as const,
    imageScale: 1.10
  }
];

const coreBenefits = [
  "Accelerate reconciliation with automated workflows for OTA commissions, bank/credit-card matching, and virtual card usage.",
  "Shrink labor costs through real-time visibility into hours, overtime, MPR (minutes per room), and schedule inefficiencies.",
  "Strengthen cashflow by catching missing deposits, open balances, and payment delays before they become losses.",
  "Reduce audit and month-end workload through standardized data, automated validation, and export-ready financial reports."
];

const financialFeatures = [
  {
    title: "Revenue",
    items: ["Occupancy, ADR, RevPAR", "Daily revenue validation & cross-checks"]
  },
  {
    title: "Labor",
    items: ["Total hours, OT alerts, department-wise spend", "Housekeeping MPR tracking", "Staff productivity & payroll alignment"]
  },
  {
    title: "Expenses & GL",
    items: ["Departmental P&L", "Budget vs Actual", "Variance tracking with explanations"]
  }
];

const BusinessIntelligenceSuite = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Business Intelligence Suite" description="Unified data engine with real-time financial intelligence, reconciliation, and multi-property command center for hotel portfolios." canonical="/solutions/business-intelligence" />
      <Navbar />
      
      <SolutionHero
        title="PULSE Dashboard"
        subtitle="Business Intelligence Suite"
        description="Your hotel's real-time command center for finance, labor and operations. Bring together revenue, labor, payables and operational data into a single view so you can stop reacting to surprises and start running your hotels proactively."
        icon={<Activity className="w-6 h-6" />}
      />


      {/* What's Inside */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Inside Pulse Dashboard
            </h2>
          </motion.div>

          <div className="space-y-16 lg:space-y-24">
            {modules.map((module, index) => (
              <SolutionModuleRow
                key={index}
                title={module.title}
                description={module.description}
                includes={module.includes}
                purpose={module.purpose}
                icon={module.icon}
                image={module.image}
                index={index}
                reversed={index % 2 === 1}
                imagePosition={module.imagePosition}
                objectFit={module.objectFit}
                imageScale={module.imageScale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Time Performance & Real Financial Intelligence */}
      <SolutionFeatureGrid
        title="Time Performance & Real Financial Intelligence"
        description="Track every aspect of your hotel's financial and operational performance"
        features={financialFeatures}
      />

      {/* Core Benefits */}
      <SolutionBenefits benefits={coreBenefits} />

      {/* CTA */}
      <SolutionCTA />

      <Footer />
    </div>
  );
};

export default BusinessIntelligenceSuite;
