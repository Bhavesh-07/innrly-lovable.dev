import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionModuleRow } from "@/components/solutions/SolutionModuleRow";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RefreshCw, Landmark, CreditCard, FileText, AlertTriangle, Calculator, BookOpen, ClipboardCheck, CheckCircle2, ArrowRight } from "lucide-react";
import bankingReconciliationImage from "@/assets/solutions/banking-payment-reconciliation.png";
import guestFolioIssuesImage from "@/assets/solutions/guest-folio-issues-chart.png";
import otaBookingsAnalyticsImage from "@/assets/solutions/ota-bookings-analytics.png";
import incomeAuditJournalingImage from "@/assets/solutions/income-audit-journaling.png";
const features = [{
  title: "Automate Bank Reconciliations",
  icon: Landmark,
  description: "Reconcile cash deposits and credit card transactions effortlessly. Compare and match your internal records to your bank statements with unmatched accuracy.",
  includes: ["Streamline cash deposits reconciliation", "Credit card transaction matching", "Daily automated workflows", "Compare records with bank statements"],
  purpose: "Eliminate manual reconciliation work and ensure every transaction is accounted for accurately.",
  image: bankingReconciliationImage,
  objectFit: "contain" as const
}, {
  title: "Reconcile OTA Bookings Effortlessly",
  icon: CreditCard,
  description: "Easily reconcile and avoid overpaying commissions to OTAs like Booking.com and Expedia. Keep tabs on booking status, cancellations, and room charges.",
  includes: ["OTA commission tracking", "Booking status monitoring", "Cancellation reconciliation", "Room charge verification"],
  purpose: "Stop overpaying OTA commissions and recover revenue that would otherwise be lost.",
  image: otaBookingsAnalyticsImage,
  objectFit: "contain" as const
}, {
  title: "Automate Income Audit Journaling",
  icon: BookOpen,
  description: "Automate the daily transfer of reconciled income directly to your hotel's accounting system, including revenue, taxes, cash, credit card transactions and ledger balances.",
  includes: ["Automated daily income transfer", "Revenue and tax tracking", "Cash transaction journaling", "Ledger balance reconciliation"],
  purpose: "Ensure precise data flows into your accounting system without manual intervention.",
  image: incomeAuditJournalingImage,
  objectFit: "contain" as const
}, {
  title: "Track Guest Folio Issues",
  icon: AlertTriangle,
  description: "Stay on top of guest issues like refunds and card returns within the business summary dashboard, ensuring GMs and property management teams are always informed.",
  includes: ["Cash refund tracking", "Card return monitoring", "Business summary dashboard", "Real-time alerts for issues"],
  purpose: "Never miss critical guest issues that could impact your bottom line.",
  image: guestFolioIssuesImage,
  objectFit: "contain" as const
}];
const recFeatures = [{
  icon: Landmark,
  title: "Bank reconciliations dashboard"
}, {
  icon: CreditCard,
  title: "OTA reconciliations dashboard"
}, {
  icon: FileText,
  title: "Third-party reconciliations"
}, {
  icon: AlertTriangle,
  title: "Guest folio issue tracking"
}, {
  icon: Calculator,
  title: "Tax and variance analytics"
}, {
  icon: BookOpen,
  title: "Income audit journaling"
}, {
  icon: ClipboardCheck,
  title: "Journaling status report"
}, {
  icon: CheckCircle2,
  title: "OTA reconciliation status report"
}];
const stats = [{
  value: "50%",
  label: "Reduced time on admin tasks"
}, {
  value: "30%",
  label: "Less time budgeting & forecasting"
}, {
  value: "$40K+",
  label: "Cost savings per property"
}, {
  value: "98%",
  label: "Auto-match rate"
}];
const ReconciliationPage = () => {
  return <div className="min-h-screen bg-background">
      <SEO title="Reconciliation" description="Automated daily reconciliation for revenue, banking, and night audit across all your hotel properties. Catch discrepancies in real time." canonical="/solutions/reconciliation" />
      <Navbar />
      <SolutionHero title="Reconciliation" subtitle="Back Office Automation" description="Streamline your accounting processes with automated reconciliations. Automate bank reconciliations and income audit journaling. Effortlessly reconcile OTA and third-party bookings. Elevate your back office processes, drive accuracy, and optimize efficiency." icon={<RefreshCw className="w-6 h-6" />} />

      {/* Key Benefits Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Main Features - Staggered Layout */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Reconciliation Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Drive efficiency and unlock revenue with effortless bank and OTA reconciliation workflows.
            </p>
          </motion.div>

          <div className="space-y-16 lg:space-y-24">
            {features.map((feature, index) => <SolutionModuleRow key={index} title={feature.title} description={feature.description} includes={feature.includes} purpose={feature.purpose} icon={feature.icon} image={feature.image} index={index} reversed={index % 2 === 1} objectFit={feature.objectFit} />)}
          </div>
        </div>
      </section>

      {/* Rec Features Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-3 block">
              All-In-One Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Rec Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {recFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.05
            }} whileHover={{
              y: -5
            }} className="group">
                  <div className="bg-card border border-border rounded-2xl p-6 text-center h-full hover:border-primary/40 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-6 left-8 text-primary/20">
                
              </div>
              
              <div className="relative z-10 text-center">
                <p className="text-xl md:text-2xl text-foreground mb-8 italic leading-relaxed">
                  "It helps our accounting department reconcile on a daily basis, each morning, to see if any money is missing, identify chargebacks, and make sure deposits match up."
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">AP</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-foreground">Amish Patel</div>
                    <div className="text-muted-foreground">CEO, JDH Developers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add-on Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Financial Reconciliation to Elevate Your Workflow
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Rec powers up any INNRLY product and makes bank, OTA, and third-party reconciliations easy and scalable for hoteliers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/solutions/financial-control">
                  Back to Financial Suite
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SolutionCTA title="Always Innovating to Keep You Ahead" description="Connect with us to learn more about how to streamline your reconciliation process." />

      <Footer />
    </div>;
};
export default ReconciliationPage;