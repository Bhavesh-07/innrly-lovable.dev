import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Wallet, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import businessIntelligenceImage from "@/assets/features/str-analysis-dashboard.jpg";
import dataDrivenStrategiesImage from "@/assets/features/data-driven-strategies.jpg";
import financeDashboardImage from "@/assets/features/finance-dashboard.jpg";
import laborDashboardImage from "@/assets/features/labor-dashboard.jpg";
const features = [{
  id: "business-intelligence",
  icon: BarChart3,
  label: "Business Intelligence",
  title: "Actionable Insights for Smarter Decisions",
  description: "Transform raw hotel data into powerful insights with real-time dashboards, customizable reports, and predictive analytics that drive better business outcomes.",
  benefits: ["Real-time performance dashboards", "Customizable reporting tools", "Predictive analytics & trends", "Cross-property benchmarking"],
  color: "from-primary to-teal-light",
  href: "/solutions/business-intelligence",
  metric: {
    value: "2.4M",
    label: "Data points analyzed"
  },
  image: businessIntelligenceImage
}, {
  id: "finance",
  icon: Wallet,
  label: "Finance",
  title: "Improve Accuracy and Save Countless Hours",
  description: "Reduce headaches, save time and improve financial accuracy with INNRLY's suite of solutions for hotel finance professionals. Automated accounting processes help your teams discover lost revenue.",
  benefits: ["Automated income journaling", "Financial reconciliation", "Signature workflows", "Revenue discovery tools"],
  color: "from-accent to-amber-light",
  href: "/solutions/financial-control",
  metric: {
    value: "$40K",
    label: "Average savings"
  },
  image: financeDashboardImage
}, {
  id: "revenue",
  icon: TrendingUp,
  label: "Revenue Management",
  title: "Data-Driven Strategies at Your Fingertips",
  description: "Centralize revenue data with INNRLY's suite of solutions for revenue management leaders. With the world's most comprehensive data model, purpose-built for hospitality.",
  benefits: ["Comprehensive revenue analytics", "RevPAR optimization tools", "Forecast accuracy improvement", "Rate strategy insights"],
  color: "from-teal-dark to-primary",
  href: "/solutions/operations-automation",
  metric: {
    value: "+18%",
    label: "Revenue increase"
  },
  image: dataDrivenStrategiesImage
}, {
  id: "labor",
  icon: Users,
  label: "Labor",
  title: "Optimize Your Workforce Efficiency",
  description: "Streamline labor management with powerful scheduling, productivity tracking, and cost optimization tools. Ensure the right staff at the right time while controlling labor costs.",
  benefits: ["5-Minute Daily Control", "Real-Time Labor Visibility Across Properties", "Actionable Performance Tracking", "Flexible Time Tracking Integration", "Data-Driven Labor Planning & Reporting"],
  color: "from-primary to-accent",
  href: "/solutions/labor-workforce",
  metric: {
    value: "15%",
    label: "Labor savings"
  },
  image: laborDashboardImage
}];
export const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("business-intelligence");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const activeFeature = features.find(f => f.id === activeTab)!;
  return <section id="features" className="py-16 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" animate={{
        x: [0, 50, 0],
        y: [0, 30, 0]
      }} transition={{
        duration: 15,
        repeat: Infinity
      }} />
        <motion.div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" animate={{
        x: [0, -30, 0],
        y: [0, -50, 0]
      }} transition={{
        duration: 18,
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Optimize</span> Operations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive suite of tools helps hotel operators save time, 
            reduce costs, and increase revenue across their entire portfolio.
          </p>
        </motion.div>

        {/* Tab navigation with interactive effects */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.1
      }} className="flex flex-wrap justify-center gap-2 mb-12">
          {features.map(feature => <motion.button key={feature.id} onClick={() => setActiveTab(feature.id)} onMouseEnter={() => setHoveredTab(feature.id)} onMouseLeave={() => setHoveredTab(null)} className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === feature.id ? "bg-primary text-primary-foreground shadow-lg" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
              <feature.icon className="w-4 h-4" />
              {feature.label}
              
              {/* Active indicator glow */}
              {activeTab === feature.id && <motion.div className="absolute inset-0 rounded-xl bg-primary" layoutId="activeTab" style={{
            zIndex: -1
          }} transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }} />}
              
              {/* Hover glow effect */}
              {hoveredTab === feature.id && activeTab !== feature.id && <motion.div className="absolute inset-0 rounded-xl border border-primary/30" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} exit={{
            opacity: 0
          }} />}
            </motion.button>)}
        </motion.div>

        {/* Feature content */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3
        }} className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="order-2 lg:order-1">
              <motion.h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4" initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.1
            }}>
                {activeFeature.title}
              </motion.h3>

              <ul className="space-y-4 mb-8">
                {activeFeature.benefits.map((benefit, index) => <motion.li key={index} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} className="flex items-center gap-3 group">
                    <motion.div whileHover={{
                  scale: 1.2,
                  rotate: 360
                }} transition={{
                  duration: 0.3
                }}>
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    </motion.div>
                    <span className="text-foreground group-hover:text-primary transition-colors">{benefit}</span>
                  </motion.li>)}
              </ul>

              <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="mt-8">
                <Button asChild variant="default" size="lg" className="group">
                  <Link to={activeFeature.href}>
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Visual content with enhanced effects */}
            <div className="order-1 lg:order-2">
              <motion.div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.3
            }}>
              {/* Feature image - dynamic based on active tab */}
                <img alt={activeFeature.label} className="w-full h-auto object-contain" src={activeFeature.image} />

                {/* Floating badge */}
                
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>;
};