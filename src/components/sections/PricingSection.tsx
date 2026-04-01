import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
type Feature = {
  name: string;
  included: boolean;
  yearlyOnly?: boolean;
  monthlyOnly?: boolean;
};
type Plan = {
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  features: Feature[];
  highlighted: boolean;
  cta: string;
  accentFrom: string;
  accentTo: string;
  accentText: string;
  accentBg: string;
};
const plans: Plan[] = [{
  name: "Starter",
  description: "Perfect for small hotel groups getting started",
  monthlyPrice: 199,
  yearlyPrice: 149,
  accentFrom: "from-cyan-400",
  accentTo: "to-blue-500",
  accentText: "text-primary",
  accentBg: "bg-cyan-500/10",
  features: [{
    name: "Setup Fee Waived",
    included: true,
    yearlyOnly: true
  }, {
    name: "Setup Fee Applicable",
    included: true,
    monthlyOnly: true
  }, {
    name: "Pulse Dashboard",
    included: true
  }, {
    name: "Early Bird",
    included: true
  }, {
    name: "Calendar View",
    included: true
  }, {
    name: "Night Audit+",
    included: true
  }, {
    name: "Accounting System Integration",
    included: true
  }, {
    name: "Happy Guest",
    included: true
  }, {
    name: "STR Report",
    included: true
  }, {
    name: "Reporting",
    included: true
  }, {
    name: "Email Support",
    included: true
  }, {
    name: "No Annual Contract",
    included: true
  }],
  highlighted: false,
  cta: "Get Started"
}, {
  name: "Professional",
  description: "For growing portfolios that need more power",
  monthlyPrice: 249,
  yearlyPrice: 199,
  accentFrom: "from-violet-400",
  accentTo: "to-purple-600",
  accentText: "text-violet-500",
  accentBg: "bg-violet-500/10",
  features: [{
    name: "Everything in Starter Plan",
    included: true
  }, {
    name: "OTA Reconciliation",
    included: true
  }, {
    name: "A/P Automation",
    included: true
  }, {
    name: "A/R Validation",
    included: true
  }, {
    name: "Labor Snapshot",
    included: true
  }, {
    name: "Mobile Access",
    included: true
  }, {
    name: "Phone Support",
    included: true
  }],
  highlighted: true,
  cta: "Get Started"
}, {
  name: "Innrly Shift",
  description: "Add-on modules for workforce management",
  monthlyPrice: 149,
  yearlyPrice: 99,
  accentFrom: "from-emerald-400",
  accentTo: "to-teal-500",
  accentText: "text-accent",
  accentBg: "bg-emerald-500/10",
  features: [{
    name: "TimeClock Module",
    included: true
  }, {
    name: "Employee Mobile App",
    included: true
  }, {
    name: "Scheduler",
    included: true
  }, {
    name: "Housekeeping Tools",
    included: true
  }, {
    name: "Labor Plans & Budgets",
    included: true
  }, {
    name: "Employee Management",
    included: true
  }, {
    name: "Reports & Analytics",
    included: true
  }, {
    name: "Daily Labor Check-In",
    included: true
  }],
  highlighted: false,
  cta: "Get Started"
}];
export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  return <section id="pricing" className="py-16 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" animate={{
        y: [0, 50, 0],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 10,
        repeat: Infinity
      }} />
        <motion.div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" animate={{
        y: [0, -40, 0],
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 12,
        repeat: Infinity
      }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <motion.span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4" whileHover={{
          scale: 1.05
        }}>
            <Sparkles className="w-4 h-4" />
            Pricing
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your portfolio. All plans include a 90-day free trial.
          </p>

          {/* Billing toggle */}
          <motion.div className="relative inline-flex items-center rounded-full bg-foreground/50 backdrop-blur-sm p-1 gap-1 border border-border/20" initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }}>
            {/* Animated sliding indicator */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-primary shadow-lg"
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                left: !isYearly ? "4px" : undefined,
                right: isYearly ? "4px" : undefined,
                width: !isYearly ? "calc(40% - 4px)" : "calc(60% - 4px)",
              }}
            />
            <motion.button
              onClick={() => setIsYearly(false)}
              className={`relative z-10 px-6 py-2.5 rounded-full text-lg font-bold transition-colors duration-200 ${!isYearly ? 'text-primary-foreground' : 'text-white/60 hover:text-white/80'}`}
              whileTap={{ scale: 0.95 }}
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setIsYearly(true)}
              className={`relative z-10 px-6 py-2.5 rounded-full text-lg font-bold transition-colors duration-200 flex items-center gap-2 ${isYearly ? 'text-primary-foreground' : 'text-white/60 hover:text-white/80'}`}
              whileTap={{ scale: 0.95 }}
            >
              Yearly
              <span className={`text-base font-extrabold px-2.5 py-0.5 rounded-full transition-colors duration-200 ${isYearly ? 'bg-white/90 text-destructive' : 'bg-foreground text-background'}`}>
                Save 25%
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => <motion.div key={plan.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className={`relative ${plan.highlighted ? "md:-mt-4 md:mb-4" : ""}`}>
              {plan.highlighted && <motion.div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full z-10" initial={{
            opacity: 0,
            y: -10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }}>
                  Most Popular
                </motion.div>}
              
              <motion.div className={`interactive-card card-elevated p-8 h-full relative overflow-hidden rounded-2xl ${plan.highlighted ? "border-2 border-primary shadow-glow" : "border border-border/50"}`} whileHover={{
            y: -8,
            scale: 1.02
          }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                {/* Colored top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${plan.accentFrom} ${plan.accentTo}`} />
                {/* Gradient background glow */}
                <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${plan.accentFrom} ${plan.accentTo}`} />
                <div className={`absolute -bottom-16 -left-16 w-40 h-40 rounded-full blur-3xl opacity-10 bg-gradient-to-tr ${plan.accentFrom} ${plan.accentTo}`} />
                {/* Shimmer effect for highlighted */}
                {plan.highlighted && <motion.div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-primary/10 to-transparent" animate={{
              x: ["-100%", "200%"]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2
            }} />}

                <div className="mb-6 relative">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${plan.accentBg} mb-3`}>
                    <Sparkles className={`w-3.5 h-3.5 ${plan.accentText}`} />
                    <span className={`text-xs font-semibold ${plan.accentText} uppercase tracking-wider`}>{plan.name}</span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${plan.accentFrom} ${plan.accentTo} bg-clip-text text-transparent`}>{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6 relative">
                  <motion.div className="flex items-baseline gap-1" key={isYearly ? 'yearly' : 'monthly'} initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }}>
                    {plan.monthlyPrice ? <>
                        <span className="text-4xl font-extrabold text-foreground">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                        <span className="text-base font-normal text-muted-foreground">
                          /month
                        </span>
                        {isYearly && plan.monthlyPrice && <span className={`ml-2 text-sm font-medium line-through text-muted-foreground/50`}>${plan.monthlyPrice}</span>}
                      </> : "Custom"}
                  </motion.div>
                </div>

                <div className={`h-px w-full bg-gradient-to-r ${plan.accentFrom} ${plan.accentTo} opacity-20 mb-6`} />
                <ul className="space-y-3 mb-8 relative">
                  {plan.features.filter(f => (!f.yearlyOnly || isYearly) && (!f.monthlyOnly || !isYearly)).map((feature, i) => <motion.li key={feature.name} className="flex items-center gap-2 text-sm" initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: i * 0.05
              }}>
                      {feature.included ? <motion.div whileHover={{
                  scale: 1.2,
                  rotate: 360
                }} transition={{
                  duration: 0.3
                }}>
                          <Check className={`w-4 h-4 ${plan.accentText} flex-shrink-0`} />
                        </motion.div> : null}
                      <span className={`${feature.included ? "text-foreground" : "text-muted-foreground"} ${feature.name.startsWith("Everything in") ? "font-bold text-primary" : ""}`}>
                        {feature.name}
                      </span>
                    </motion.li>)}
                </ul>

                <div>
                  <Button variant={plan.highlighted ? "default" : "outline"} size="lg" className={`w-full group relative overflow-hidden ${plan.highlighted ? `bg-gradient-to-r ${plan.accentFrom} ${plan.accentTo} border-0 text-white hover:opacity-90` : ''}`} asChild>
                    <Link to="/contact">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                {/* Live indicator */}
                <motion.div className="absolute top-4 right-4 flex items-center gap-1.5" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              delay: 0.5
            }}>
                  
                </motion.div>
              </motion.div>
            </motion.div>)}
        </div>

        {/* Enterprise CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mt-12">
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <Link to="/contact" className="text-primary hover:underline font-medium">
              Talk to our sales team
            </Link>
          </p>
        </motion.div>
      </div>
    </section>;
};