import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionModuleRow } from "@/components/solutions/SolutionModuleRow";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { motion } from "framer-motion";
import {
  Settings,
  LayoutDashboard,
  FolderOpen,
  Workflow,
} from "lucide-react";
import automatedOperationalProcessesImage from "@/assets/solutions/automated-operational-processes.png";
import documentDataManagementImage from "@/assets/solutions/document-data-management.png";
import workflowVisibilityImage from "@/assets/solutions/workflow-visibility-control.png";

const modules = [
  {
    title: "Workflow Visibility & Control",
    icon: LayoutDashboard,
    description: "Workflow Visibility & Control gives managers real-time operational oversight, which comes from",
    includes: [
      "Centralized dashboards (Pulse + Portfolio view)",
      "Real-time analytics & KPI tracking",
      "Reconciliation & validation systems",
      "Automated workflows (execution layer)",
      "Alerts & exception management",
      "Task tracking + accountability enforcement"
    ],
    purpose: "Monitor tasks, spot issues instantly, and ensure nothing slips through the cracks.",
    image: workflowVisibilityImage,
    objectFit: "contain" as const
  },
  {
    title: "Document & Data Management",
    icon: FolderOpen,
    description: "Every number is backed by a document, and every document is tracked, validated, and actionable.",
    includes: [
      "Document collection & reminders",
      "Automated capture (AP, bank, reports)",
      "Document-to-transaction linking",
      "OCR-based data extraction",
      "Continuous validation & follow-up"
    ],
    purpose: "Centralize documents, eliminate paper/manual files, and make audits easier.",
    image: documentDataManagementImage,
    objectFit: "contain" as const
  },
  {
    title: "Automated Operational Processes",
    icon: Workflow,
    description: "Modules that replace repetitive manual work with intelligent automation across all operational areas.",
    includes: [
      "Daily Operations Automation",
      "AP & AR Automation",
      "Rule-Based Automation",
      "System Data Synchronization",
      "Scheduled Task Automation"
    ],
    purpose: "Automate daily routine tasks, reduce errors, speed up audits, and ensure compliance across all operations.",
    image: automatedOperationalProcessesImage,
    objectFit: "contain" as const,
    imageScale: 0.95
  }
];

const OperationsAutomationSuite = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Operations Automation Suite" description="Automate workflows, manage documents, and streamline operational processes across your hotel portfolio." canonical="/solutions/operations-automation" />
      <Navbar />
      
      <SolutionHero
        title="Operations Automation Suite"
        subtitle="Streamlined Hotel Operations"
        description="Automate daily operations, streamline workflows, and gain real-time visibility into every aspect of your hotel's operational performance."
        icon={<Settings className="w-6 h-6" />}
      />

      {/* Modules */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Inside Operations Automation Suite
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
                objectFit={module.objectFit}
                imageScale={module.imageScale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SolutionCTA 
        title="Automate Your Operations"
        description="Reduce manual work and improve operational efficiency with intelligent automation."
      />

      <Footer />
    </div>
  );
};

export default OperationsAutomationSuite;
