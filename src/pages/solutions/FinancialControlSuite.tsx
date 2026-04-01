import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionModuleRow } from "@/components/solutions/SolutionModuleRow";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Receipt,
  Landmark,
  FileText,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Zap,
  RefreshCw,
} from "lucide-react";
import receivablesPayablesAutomationImage from "@/assets/solutions/receivables-payables-automation.png";
import revenueBillingAssuranceImage from "@/assets/solutions/revenue-billing-assurance.png";
import reconcileOtaBookingsImage from "@/assets/solutions/reconcile-ota-bookings.jpg";
import bankingPaymentReconciliationImage from "@/assets/solutions/banking-payment-reconciliation.png";
import riskComplianceControlsImage from "@/assets/solutions/risk-compliance-controls.png";

const modules = [
  {
    title: "Revenue & Billing Assurance",
    icon: Receipt,
    description: "Everything that ensures accurate revenue capture and prevents leakage across all booking channels and payment methods.",
    includes: [
      "OTA Reconciliation",
      "VCC Reconciliation",
      "CLC / Direct Billing",
      "Bank Deposit Reconciliation",
      "Daily Revenue Reports"
    ],
    purpose: "Guarantee that every dollar earned is correctly billed, collected, and reported.",
    image: revenueBillingAssuranceImage,
    objectFit: "contain" as const
  },
  {
    title: "Banking & Payment Reconciliation",
    icon: Landmark,
    description: "All modules that match money received vs. money recorded, ensuring complete financial accuracy.",
    includes: [
      "Bank Reconciliation",
      "Credit Card Reconciliation",
      "Bank/CC OCR Import"
    ],
    purpose: "Eliminate variances, missing deposits, and unmatched transactions.",
    image: bankingPaymentReconciliationImage,
    objectFit: "contain" as const
  },
  {
    title: "Receivables & Payables Automation",
    icon: FileText,
    description: "End-to-end automation for money going out and money due to the hotel with streamlined workflows.",
    includes: [
      "A/P + Bill Pay",
      "Standardized AR Hub"
    ],
    purpose: "Streamline vendor payments and automate guest/corporate invoicing + collections.",
    image: receivablesPayablesAutomationImage,
    objectFit: "contain" as const
  },
  {
    title: "Risk & Compliance Controls",
    icon: ShieldAlert,
    description: "Modules that protect the hotel from disputes, penalties, and financial risks with proactive monitoring.",
    includes: [
      "High balance monitoring",
      "Negative adjustment tracking",
      "Bank reconciliation oversight",
      "OTA commission validation"
    ],
    purpose: "Identify, control, and reduce financial risks by flagging anomalies, ensuring accuracy, and maintaining compliance across all transactions.",
    image: riskComplianceControlsImage,
    objectFit: "contain" as const,
    imageScale: 0.99
  }
];

const reconciliationFeatures = [
  "Automate bank reconciliations",
  "Reconcile OTA bookings effortlessly",
  "Automate income audit journaling",
  "Track your tax-exempt transactions in real time"
];

const FinancialControlSuite = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Financial Control Suite" description="Revenue billing assurance, banking reconciliation, receivables automation, and risk compliance controls for hotels." canonical="/solutions/financial-control" />
      <Navbar />
      
      <SolutionHero
        title="Financial Control Suite"
        subtitle="Complete Financial Management"
        description="Take complete control of your hotel's finances with automated reconciliation, billing assurance, and risk management tools that protect your bottom line."
        icon={<Landmark className="w-6 h-6" />}
      />

      {/* Explore Reconciliation - Hero Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-3">
                Back Office Automation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Streamline your accounting processes with automated reconciliations
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Automate bank reconciliations and income audit journaling. Effortlessly reconcile OTA and third-party bookings. Elevate your back office processes, drive accuracy, and optimize efficiency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {reconciliationFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Button size="lg" className="group" asChild>
                  <Link to="/solutions/reconciliation">
                    Explore Reconciliation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

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
              What's Inside Financial Control Suite
            </h2>
          </motion.div>

          <div className="space-y-16 lg:space-y-24">
            {modules.slice(0, 2).map((module, index) => (
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Reconciliation - Mid-page CTA */}
      <section className="py-12 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 mb-6 shadow-lg shadow-primary/25">
                    <RefreshCw className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Stop Overpaying OTA Commissions
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Easily reconcile and avoid overpaying commissions to OTAs like Booking.com and Expedia. Keep tabs on booking status, cancellations, and room charges with ease.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" className="group" asChild>
                      <Link to="/solutions/reconciliation">
                        <Zap className="mr-2 w-4 h-4" />
                        Explore Reconciliation
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link to="/contact">Schedule Demo</Link>
                    </Button>
                  </div>
                </div>

                <motion.div 
                  className="w-full md:w-64 shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">98%</div>
                      <div className="text-xs text-muted-foreground">Auto-matched</div>
                    </div>
                    <div className="bg-accent/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">2hr</div>
                      <div className="text-xs text-muted-foreground">Time Saved/Day</div>
                    </div>
                    <div className="bg-accent/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">$5K+</div>
                      <div className="text-xs text-muted-foreground">Monthly Savings</div>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">Zero</div>
                      <div className="text-xs text-muted-foreground">Manual Entry</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Remaining Modules */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="space-y-16 lg:space-y-24">
            {modules.slice(2).map((module, index) => (
              <SolutionModuleRow
                key={index + 2}
                title={module.title}
                description={module.description}
                includes={module.includes}
                purpose={module.purpose}
                icon={module.icon}
                image={module.image}
                index={index + 2}
                reversed={(index + 2) % 2 === 1}
                objectFit={module.objectFit}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SolutionCTA 
        title="Take Control of Your Hotel Finances"
        description="Eliminate revenue leakage and automate financial processes with our comprehensive suite."
      />

      <Footer />
    </div>
  );
};

export default FinancialControlSuite;
