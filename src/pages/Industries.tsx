import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Building2, 
  Building, 
  Sparkles, 
  Home, 
  BedDouble, 
  Hotel, 
  UtensilsCrossed, 
  Calculator,
  ArrowRight,
  BarChart3,
  DollarSign,
  Clock,
  FileText,
  Workflow,
  Users,
  CreditCard,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TechGridBackground } from "@/components/effects/TechGridBackground";
import { DataFlowParticles } from "@/components/effects/DataFlowParticles";

interface IndustryModule {
  suite: string;
  module: string;
  href: string;
  icon: React.ElementType;
  description: string;
}

interface Industry {
  id: number;
  title: string;
  icon: React.ElementType;
  image: string;
  modules: IndustryModule[];
  why: string;
}

const industries: Industry[] = [
  {
    id: 1,
    title: "Independent Hotels",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    modules: [
      { 
        suite: "Pulse Dashboard", 
        module: "Daily Business Visibility", 
        href: "/solutions/business-intelligence",
        icon: BarChart3,
        description: "Real-time snapshot of your hotel's performance. Track occupancy, revenue, and key metrics at a glance."
      },
      { 
        suite: "Financial Control", 
        module: "Revenue & Billing Assurance", 
        href: "/solutions/financial-control",
        icon: DollarSign,
        description: "Eliminate revenue leakage with automated billing verification. Ensure every charge is captured accurately."
      },
      { 
        suite: "Labor & Workforce", 
        module: "Time & Attendance Management", 
        href: "/solutions/labor-workforce",
        icon: Clock,
        description: "Streamline staff scheduling and time tracking. Reduce overtime costs and maintain optimal staffing."
      },
    ],
    why: "Independent hotels thrive when every dollar is accounted for and operations run smoothly. INNRLY delivers revenue accuracy, streamlined operations control, and lean labor management—giving you the visibility and confidence to compete with larger brands.",
  },
  {
    id: 2,
    title: "Management Companies",
    icon: Building,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    modules: [
      { 
        suite: "Accounting Control", 
        module: "Revenue & Billing Assurance", 
        href: "/solutions/financial-control",
        icon: TrendingUp,
        description: "Centralize revenue oversight across your entire portfolio with standardized billing practices."
      },
      { 
        suite: "Financial Control", 
        module: "Banking & Payment Reconciliation", 
        href: "/solutions/financial-control",
        icon: CreditCard,
        description: "Automate reconciliation of credit cards, OTA payments, and bank deposits across all properties."
      },
      { 
        suite: "Operations Automation", 
        module: "Workflow Visibility & Control", 
        href: "/solutions/operations-automation",
        icon: Workflow,
        description: "Bird's-eye visibility into operations across your portfolio. Monitor task completion and SLA compliance."
      },
    ],
    why: "Managing multiple properties demands centralized oversight and consistent standards. INNRLY provides consolidated automation, strict revenue validation, and real-time visibility across your entire portfolio—so nothing slips through the cracks.",
  },
  {
    id: 3,
    title: "Boutique Hotels",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    modules: [
      { 
        suite: "Pulse Dashboard", 
        module: "Daily Business Visibility", 
        href: "/solutions/business-intelligence",
        icon: BarChart3,
        description: "Beautiful, intuitive dashboards showing guest satisfaction trends to revenue performance."
      },
      { 
        suite: "Financial Control", 
        module: "Revenue & Billing Assurance", 
        href: "/solutions/financial-control",
        icon: DollarSign,
        description: "Protect every dollar of your premium pricing strategy with automated verification."
      },
      { 
        suite: "Labor & Workforce", 
        module: "Workforce Monitoring & Insights", 
        href: "/solutions/labor-workforce",
        icon: Users,
        description: "Balance personalized service with operational efficiency. Gain insights into labor productivity."
      },
    ],
    why: "Boutique hotels are built on exceptional guest experiences, but profitability matters too. INNRLY helps you maintain that delicate balance with intuitive dashboards, cost control tools, and accurate forecasting—so you can focus on what makes your property unique.",
  },
  {
    id: 4,
    title: "Extended Stay / Corporate Housing",
    icon: Home,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    modules: [
      { 
        suite: "Financial Control", 
        module: "Receivables & Payables Automation", 
        href: "/solutions/financial-control",
        icon: FileText,
        description: "Master corporate billing cycles. Automate invoice generation and track aging receivables."
      },
      { 
        suite: "Financial Control", 
        module: "Revenue & Billing Assurance", 
        href: "/solutions/financial-control",
        icon: DollarSign,
        description: "Handle long-stay billing with confidence. Track weekly/monthly charges and rate compliance."
      },
      { 
        suite: "Operations Automation", 
        module: "Automated Operational Processes", 
        href: "/solutions/operations-automation",
        icon: Workflow,
        description: "Manage unique operational demands of long-term stays from housekeeping to maintenance."
      },
    ],
    why: "Extended stay properties face unique challenges with corporate billing, long-term invoicing, and complex A/R cycles. INNRLY automates these workflows, ensuring accurate billing, timely collections, and complete document trails for every guest.",
  },
  {
    id: 5,
    title: "Motels",
    icon: BedDouble,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
    modules: [
      { 
        suite: "Pulse Dashboard", 
        module: "Daily Business Visibility", 
        href: "/solutions/business-intelligence",
        icon: BarChart3,
        description: "Simple, powerful insights for straightforward operations. See daily revenue and occupancy at a glance."
      },
      { 
        suite: "Financial Control", 
        module: "Banking & Payment Reconciliation", 
        href: "/solutions/financial-control",
        icon: CreditCard,
        description: "Reconcile cash, credit cards, and direct bookings effortlessly with automated matching."
      },
      { 
        suite: "Labor & Workforce", 
        module: "Time & Attendance Management", 
        href: "/solutions/labor-workforce",
        icon: Clock,
        description: "Keep labor costs lean with precise time tracking, overtime alerts, and scheduling tools."
      },
    ],
    why: "Motels need straightforward solutions that deliver results without complexity. INNRLY provides clean daily reconciliations, simple labor controls, and clear visibility into your business—helping you maximize profitability with minimal overhead.",
  },
  {
    id: 6,
    title: "Serviced Apartments",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    modules: [
      { 
        suite: "Financial Control", 
        module: "Receivables & Payables Automation", 
        href: "/solutions/financial-control",
        icon: FileText,
        description: "Streamline complex billing for long-term residents. Automate rent and utility billing."
      },
      { 
        suite: "Operations Automation", 
        module: "Workflow Visibility & Control", 
        href: "/solutions/operations-automation",
        icon: Workflow,
        description: "Coordinate maintenance, housekeeping, and resident services seamlessly."
      },
      { 
        suite: "Pulse Dashboard", 
        module: "Daily Business Visibility", 
        href: "/solutions/business-intelligence",
        icon: BarChart3,
        description: "Monitor occupancy trends, lease expirations, and revenue performance in real-time."
      },
    ],
    why: "Serviced apartments require seamless coordination between billing, maintenance, and resident services. INNRLY streamlines long-term billing cycles, automates operational workflows, and provides real-time occupancy insights to maximize your property performance.",
  },
  {
    id: 7,
    title: "Restaurants",
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    modules: [
      { 
        suite: "Labor & Workforce", 
        module: "Time & Attendance Management", 
        href: "/solutions/labor-workforce",
        icon: Clock,
        description: "Optimize your largest controllable cost. Track hours precisely and manage tip credits."
      },
      { 
        suite: "Operations Automation", 
        module: "Automated Operational Processes", 
        href: "/solutions/operations-automation",
        icon: Workflow,
        description: "Automate daily rhythms from opening checklists to inventory counts to closing procedures."
      },
      { 
        suite: "Financial Control", 
        module: "Banking & Payment Reconciliation", 
        href: "/solutions/financial-control",
        icon: CreditCard,
        description: "Reconcile tips, credit cards, and cash with precision. Daily automated matching."
      },
    ],
    why: "Restaurants operate on thin margins where labor and daily settlements make or break profitability. INNRLY optimizes your workforce costs, automates operational checklists, and ensures precise daily reconciliation of tips, cards, and cash.",
  },
  {
    id: 8,
    title: "Automation for CPA Firms",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    modules: [
      { 
        suite: "Financial Control", 
        module: "Revenue & Billing Assurance", 
        href: "/solutions/financial-control",
        icon: DollarSign,
        description: "Provide clients with institutional-grade revenue verification. Automated auditing catches discrepancies."
      },
      { 
        suite: "Financial Control", 
        module: "Banking & Payment Reconciliation", 
        href: "/solutions/financial-control",
        icon: CreditCard,
        description: "Streamline month-end closes with pre-reconciled bank statements and clear exception reports."
      },
      { 
        suite: "Operations Automation", 
        module: "Document & Data Management", 
        href: "/solutions/operations-automation",
        icon: FileText,
        description: "Access organized, audit-ready documentation anytime with automated collection and filing."
      },
    ],
    why: "CPA firms serving hospitality clients need reliable data and audit-ready documentation. INNRLY delivers automated reconciliations, clear audit trails, and organized financial statements—reducing your review time and improving client outcomes.",
  },
];

const IndustryCard = ({ industry, index }: { industry: Industry; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-8 items-center`}
    >
      {/* Image Section */}
      <motion.div 
        className="w-full lg:w-2/5 relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden group">
          <img 
            src={industry.image} 
            alt={industry.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Animated overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Industry Number Badge with White Strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm px-4 py-4">
            <div className="flex items-center gap-3 mb-2">
              <motion.div 
                className="w-10 h-10 rounded-md bg-primary flex items-center justify-center relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-md bg-primary/50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-primary-foreground font-bold text-base relative z-10">0{industry.id}</span>
              </motion.div>
              <h3 className="text-lg font-bold text-foreground">{industry.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{industry.why}</p>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="w-full lg:w-3/5">
        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {industry.modules.map((module, i) => (
              <CarouselItem key={i} className="pl-4 basis-[85%] sm:basis-[48%] lg:basis-[48%]">
                <Link to={module.href} className="block h-full">
                  <motion.div 
                    className="h-full bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 1 }}
                    >
                      <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -skew-x-12" />
                    </motion.div>
                    
                    <div className="flex items-center gap-4 mb-4 relative z-10">
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-lg bg-primary/20"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0, 0.3],
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                        <module.icon className="w-6 h-6 text-primary relative z-10" />
                      </motion.div>
                      <div className="min-w-0">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider block">{module.suite}</span>
                        <h4 className="text-base font-bold text-foreground leading-tight">{module.module}</h4>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 relative z-10">
                      {module.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mt-4 group-hover:gap-3 transition-all relative z-10">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center gap-3 mt-4">
            <CarouselPrevious className="static translate-y-0 h-9 w-9 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            <CarouselNext className="static translate-y-0 h-9 w-9 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
          </div>
        </Carousel>
      </div>
    </motion.div>
  );
};

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Industries" description="INNRLY serves hotels, resorts, extended-stay properties, and management companies. See how our platform fits your hospitality segment." canonical="/industries" />
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        {/* Animated backgrounds */}
        <div className="absolute inset-0 opacity-20">
          <TechGridBackground />
        </div>
        <div className="absolute inset-0 opacity-30">
          <DataFlowParticles />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        {/* Animated orbs */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Industries We Serve
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Tailored Solutions for Every{" "}
              <span className="text-gradient">Hospitality Segment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how INNRLY powers hospitality businesses across hotels, resorts, 
              management companies, and more with tailored solutions for every segment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Staggered Layout */}
      <section className="py-12 relative">
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-16 md:space-y-20">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <TechGridBackground />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              INNRLY's flexible platform adapts to unique hospitality needs. 
              Contact our team to discuss a tailored solution for your business.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors group relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Contact Our Experts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
