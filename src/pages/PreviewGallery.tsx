import biUnifiedDataEngine from "@/assets/preview/bi-unified-data-engine.jpg";
import biRealFinancialIntelligence from "@/assets/preview/bi-real-financial-intelligence.jpg";
import biReconciliationValidation from "@/assets/preview/bi-reconciliation-validation.jpg";
import biIntelligenceLayer from "@/assets/preview/bi-intelligence-layer.jpg";
import biMultiPropertyCommand from "@/assets/preview/bi-multi-property-command.jpg";
import biReportingAutomation from "@/assets/preview/bi-reporting-automation.jpg";
import fcRevenueBilling from "@/assets/preview/fc-revenue-billing.jpg";
import fcBankingReconciliation from "@/assets/preview/fc-banking-reconciliation.jpg";
import fcReceivablesPayables from "@/assets/preview/fc-receivables-payables.jpg";
import fcRiskCompliance from "@/assets/preview/fc-risk-compliance.jpg";
import laborScheduler from "@/assets/preview/labor-scheduler.jpg";
import laborTimeClock from "@/assets/preview/labor-time-clock.jpg";
import laborEmployeeApp from "@/assets/preview/labor-employee-app.jpg";
import laborPlansBudgets from "@/assets/preview/labor-plans-budgets.jpg";
import laborHousekeeping from "@/assets/preview/labor-housekeeping.jpg";
import laborEmployeeManagement from "@/assets/preview/labor-employee-management.jpg";
import laborReportsAnalytics from "@/assets/preview/labor-reports-analytics.jpg";
import opsWorkflowVisibility from "@/assets/preview/ops-workflow-visibility.jpg";
import opsDocumentManagement from "@/assets/preview/ops-document-management.jpg";
import opsAutomatedProcesses from "@/assets/preview/ops-automated-processes.jpg";

const sections = [
  {
    suite: "Business Intelligence Suite",
    images: [
      { title: "Unified Data Engine", src: biUnifiedDataEngine },
      { title: "Real Financial Intelligence", src: biRealFinancialIntelligence },
      { title: "Reconciliation & Validation Hub", src: biReconciliationValidation },
      { title: "Business Intelligence Layer", src: biIntelligenceLayer },
      { title: "Multi-Property Command Center", src: biMultiPropertyCommand },
      { title: "Reporting & Automation", src: biReportingAutomation },
    ],
  },
  {
    suite: "Financial Control Suite",
    images: [
      { title: "Revenue & Billing Assurance", src: fcRevenueBilling },
      { title: "Banking & Payment Reconciliation", src: fcBankingReconciliation },
      { title: "Receivables & Payables Automation", src: fcReceivablesPayables },
      { title: "Risk & Compliance Controls", src: fcRiskCompliance },
    ],
  },
  {
    suite: "Labor & Workforce Suite",
    images: [
      { title: "Scheduler", src: laborScheduler },
      { title: "Time Clock", src: laborTimeClock },
      { title: "Employee Mobile App", src: laborEmployeeApp },
      { title: "Labor Plans & Budgets", src: laborPlansBudgets },
      { title: "Housekeeping Tools", src: laborHousekeeping },
      { title: "Employee Management", src: laborEmployeeManagement },
      { title: "Reports & Analytics", src: laborReportsAnalytics },
    ],
  },
  {
    suite: "Operations Automation Suite",
    images: [
      { title: "Workflow Visibility & Control", src: opsWorkflowVisibility },
      { title: "Document & Data Management", src: opsDocumentManagement },
      { title: "Automated Operational Processes", src: opsAutomatedProcesses },
    ],
  },
];

const PreviewGallery = () => (
  <div className="min-h-screen bg-background p-8">
    <h1 className="text-3xl font-bold text-foreground mb-8">Preview Image Gallery</h1>
    {sections.map((section) => (
      <div key={section.suite} className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6 border-b border-border pb-2">{section.suite}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.images.map((img) => (
            <div key={img.title} className="rounded-lg overflow-hidden border border-border bg-card">
              <img src={img.src} alt={img.title} className="w-full aspect-[4/3] object-cover" />
              <p className="p-3 text-sm font-medium text-foreground">{img.title}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default PreviewGallery;
