import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, LineChart, Settings2, Users, CreditCard, Clock } from "lucide-react";
import { Link } from "react-router-dom";
const products = [{
  icon: BarChart2,
  name: "Business Intelligence Suite",
  tagline: "Analytics & Insights",
  description: "Get a 360-degree view of your portfolio with powerful analytics and customizable dashboards.",
  color: "from-primary to-teal-light",
  href: "/solutions/business-intelligence"
}, {
  icon: LineChart,
  name: "Financial Control Suite",
  tagline: "Revenue Protection",
  description: "Take complete control of your hotel's finances with automated reconciliation, billing assurance, and financial management tools that protect your bottom line.",
  color: "from-accent to-amber-light",
  href: "/solutions/financial-control"
}, {
  icon: Users,
  name: "Labor & Workforce Suite",
  tagline: "Staff Management",
  description: "Optimize scheduling, track labor costs, and manage your workforce efficiently across properties.",
  color: "from-teal-dark to-primary",
  href: "/solutions/labor-workforce"
}, {
  icon: Settings2,
  name: "Operations Automation Suite",
  tagline: "Back Office Automation",
  description: "Automate reconciliation, streamline operations, and prevent losses with intelligent automation.",
  color: "from-primary to-accent",
  href: "/solutions/operations-automation"
}, {
  icon: CreditCard,
  name: "Innrly Pay",
  tagline: "Vendor Payments",
  description: "Replace paper checks with Virtual Cards & ACH — faster settlement, real-time tracking, end-to-end reconciliation, and built-in fraud protection.",
  color: "from-primary to-accent",
  href: "/solutions/innrly-pay",
  badge: "INCLUDED FREE"
}, {
  icon: Clock,
  name: "Innrly Shift",
  tagline: "Labor Cost Management",
  description: "Capture hidden labor costs with 5-min daily snapshots, hospitality-specific metrics, smart scheduling, performance tracking, and TimeClock with Face-ID.",
  color: "from-accent to-teal-dark",
  href: "/solutions/innrly-shift",
  badge: "NEW"
}];
export const ProductsSection = () => {
  return <section id="solutions" className="py-16 bg-secondary/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
        
        {/* Floating orbs */}
        <motion.div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" animate={{
        y: [0, -30, 0],
        x: [0, 20, 0]
      }} transition={{
        duration: 12,
        repeat: Infinity
      }} />
        <motion.div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" animate={{
        y: [0, 40, 0],
        x: [0, -30, 0]
      }} transition={{
        duration: 15,
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
            <motion.div className="w-2 h-2 rounded-full bg-primary" animate={{
            scale: [1, 1.3, 1]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }} />
            Products
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hotel Management Suite to{" "}
            <span className="text-gradient">Power Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built for hospitality, spanning back office automation, 
            business intelligence, and budgeting & forecasting.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => <motion.div key={product.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="group">
              <Link to={product.href} className="block h-full">
                <div className="relative h-full rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  {/* Badge */}
                  {(product as any).badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-destructive/15 text-destructive text-xs font-extrabold tracking-wide">
                      {(product as any).badge}
                    </span>
                  )}
                  {/* Gradient accent bar */}
                  <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${product.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} text-white mb-5`}>
                    <product.icon className="w-6 h-6" />
                  </div>

                  {/* Tagline */}
                  <p className="text-sm font-medium text-primary/80 mb-1">{product.tagline}</p>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{product.name}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.description}</p>

                  {/* Learn more link */}
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>)}
        </div>
      </div>
    </section>;
};