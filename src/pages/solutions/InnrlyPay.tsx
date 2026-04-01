import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { motion } from "framer-motion";
import { CreditCard, Shield, Zap, CheckCircle2, ArrowRight, FileText, ClipboardCheck, RefreshCw, DollarSign, Lock, Upload, ThumbsUp, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import innrlyPayHero from "@/assets/solutions/innrly-pay-hero.png";

const apProcess = [
{ icon: FileText, title: "Invoice Auto-Import", desc: "Invoices are automatically captured and GL-coded using OCR — no repetitive data entry." },
{ icon: ClipboardCheck, title: "Review & Approve", desc: "Streamlined approval workflows. Review, approve, and pay bills with a single click." },
{ icon: RefreshCw, title: "Accounting System Sync", desc: "Once approved, invoices seamlessly sync to your Accounting System. Always up-to-date and reconciled." },
{ icon: DollarSign, title: "Automated Payments", desc: "Virtual Card and ACH disbursements — no batch limits, no transaction limits." }];


const fraudTools = [
"ACH Validation",
"Approval Workflows",
"Custodial Payment Accounts",
"Positive Pay & Secure Storage",
"Controlled Vendor Enrollment"];


const risksAddressed = [
"ACH Fraud",
"Spoofed Invoices",
"Fake Vendors",
"Fraudulent Transactions",
"Check Theft"];


const capabilities = [
"Real-time vendor onboarding at payment due time",
"No payment batch or transaction limits",
"Cuts material, printing & labour cost of checks",
"No implementation or training cost"];


const InnrlyPay = () => {
  return (
    <div className="min-h-screen">
      <SEO title="Innrly Pay — Automated Payment Processing" description="Automate vendor payments, reduce manual check runs, and gain full visibility into payables across your hotel portfolio." canonical="/solutions/innrly-pay" />
      <Navbar />
      <main>
        <SolutionHero
          title="Innrly Pay"
          subtitle="Smart Bill Pay"
          description="Replace paper checks with Virtual Cards & ACH — faster settlement, real-time tracking, and complete control. Once a payment is approved in Innrly, the system automates the entire end-to-end disbursement process."
          icon={<CreditCard className="w-5 h-5" />}
          image={innrlyPayHero}
          imageAlt="Innrly Pay AP Process"
        />

        {/* 3 Key Highlights */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Upload,
                  number: "01",
                  title: "Auto-Import Invoices",
                  subtitle: "No repetitive data-entry.",
                  highlight: "AUTO GL-CODING",
                  gradient: "bg-gradient-to-br from-[hsl(220,85%,50%)] to-[hsl(190,90%,45%)]",
                  glowColor: "shadow-[0_8px_30px_-6px_hsl(220,85%,50%,0.4)]",
                },
                {
                  icon: ThumbsUp,
                  number: "02",
                  title: "Review · Approve · Pay Bills",
                  subtitle: "Streamlined and controlled.",
                  highlight: "SINGLE-CLICK PAY",
                  gradient: "bg-gradient-to-br from-[hsl(250,75%,55%)] to-[hsl(220,85%,50%)]",
                  glowColor: "shadow-[0_8px_30px_-6px_hsl(250,75%,55%,0.4)]",
                },
                {
                  icon: RotateCcw,
                  number: "03",
                  title: "Seamlessly Syncs with Your Accounting System",
                  subtitle: "Always up-to-date and reconciled.",
                  highlight: "ZERO MANUAL ENTRY",
                  gradient: "bg-gradient-to-br from-[hsl(190,90%,45%)] to-[hsl(170,75%,40%)]",
                  glowColor: "shadow-[0_8px_30px_-6px_hsl(190,90%,45%,0.4)]",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className={`relative p-7 rounded-2xl ${item.gradient} ${item.glowColor} overflow-hidden group hover:scale-[1.03] transition-all duration-300 flex flex-col`}
                >
                  <span className="text-7xl font-black text-white/10 absolute top-2 right-4 select-none">
                    {item.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-base text-white/80 mb-4">{item.subtitle}</p>
                  <div className="mt-auto">
                    {item.highlight && (
                      <span className="inline-block text-xs font-bold tracking-widest text-[hsl(48,100%,75%)] bg-[hsl(48,100%,75%,0.15)] backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[hsl(48,100%,75%,0.35)] shadow-[0_0_12px_hsl(48,100%,75%,0.2)]">
                        {item.highlight}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AP Process */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-foreground mb-2">How Innrly Pay Automates Your AP Process</h2>
              <p className="text-muted-foreground mb-8">A streamlined, efficient and visible AP workflow.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {apProcess.map((step, i) =>
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl border border-border/50 bg-card text-center">
                
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-foreground">End-to-End Reconciliation Automation</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Payment status updates are automatically pushed back to the accounting system — eliminating manual intervention. This enables seamless, automated reconciliation with no manual status updates.
              </p>
              <div className="space-y-3">
                {capabilities.map((item) =>
                <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fraud Protection */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Protect Every Payment — At Zero Cost</h2>
              </div>
              <p className="text-muted-foreground mb-8">
                AP teams are high-risk targets due to legacy paper flows. With Innrly + REPAY, every payment is safeguarded using secure financial infrastructure and hotel-grade fraud controls.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Common Risks Addressed</h3>
                  <div className="space-y-2">
                    {risksAddressed.map((risk) =>
                    <div key={risk} className="flex items-start gap-2.5 p-3 rounded-lg bg-[hsl(350,85%,40%)] border border-[hsl(350,80%,50%)]">
                        <span className="text-white mt-0.5 shrink-0 text-sm font-bold">✕</span>
                        <span className="text-base text-white font-medium">{risk}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Built-in Protection Tools</h3>
                  <div className="space-y-2">
                    {fraudTools.map((tool) =>
                    <div key={tool} className="flex items-center gap-2.5 p-3 rounded-lg bg-[hsl(150,65%,35%)] border border-[hsl(150,60%,45%)]">
                        <Lock className="w-4 h-4 text-white shrink-0" />
                        <span className="text-base text-white font-medium">{tool}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Every disbursement is executed from a custodial account, isolating operating funds and drastically reducing financial exposure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-3">Ready to streamline your payments?</h2>
            <p className="text-muted-foreground mb-6">A streamlined, efficient and visible AP workflow — schedule a demo today.</p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Schedule a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default InnrlyPay;