import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionModuleRow } from "@/components/solutions/SolutionModuleRow";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Clock, CalendarDays, Clipboard, Sparkles, UsersRound, BarChart3, ArrowRight, CheckCircle2, Timer, Zap, Smartphone } from "lucide-react";
import housekeepingToolsImage from "@/assets/solutions/housekeeping-tools.png";
import laborPlansBudgetsImage from "@/assets/solutions/labor-plans-budgets.png";
import schedulerImage from "@/assets/solutions/scheduler.png";
import reportsAnalyticsImage from "@/assets/solutions/reports-analytics.png";
import timeClockImage from "@/assets/solutions/innrly-shift-dashboard.png";
import employeeManagementImage from "@/assets/solutions/employee-management.png";
const modules: Array<{title: string;icon: any;description: string;includes: string[];purpose: string;image: string;objectFit: "cover" | "contain";imageScale?: number;imagePosition?: string;flipAnimation?: boolean;learnMoreLink?: string;showNewBadge?: boolean;}> = [{
  title: "Scheduler",
  icon: CalendarDays,
  description: "Forecast-driven scheduling that aligns staffing with demand. Set deadlines, track completion, and ensure every shift is covered.",
  includes: ["Enter Forecast (Rooms, ADR, F&B)", "Schedule Employees by Position", "Time Off Requests & Approvals", "Import Forecast from PMS", "Schedule Readiness Tracking"],
  purpose: "Ensure optimal staffing levels based on forecasted demand while reducing overtime and labor costs.",
  image: schedulerImage,
  objectFit: "contain" as const,
  imageScale: 1.10
}, {
  title: "Innrly Shift",
  icon: Clock,
  description: "Time is money — especially in the hotel business. Innrly TimeClock uses face recognition for secure, buddy-punch-proof clock-ins on devices your staff already use. No expensive hardware needed.",
  includes: ["Face Recognition Clock-ins", "Mobile & Tablet Ready", "Metrics like MinPOR, MPR, Labor Hours, OT Risks, Hours per Room and more.", "Real-Time Overtime Alerts", "Third-Party Payroll Auto-Sync", "Included Free — No Add-on Fees"],
  purpose: "Eliminate time theft, reduce labor costs by up to 22%, and save managers 6–10 hours per month — all included in your Innrly subscription at no extra cost.",
  image: timeClockImage,
  objectFit: "contain" as const,
  imageScale: 0.92,
  learnMoreLink: "/solutions/timeclock",
  showNewBadge: true
}, {
  title: "Labor Plans & Budgets",
  icon: Clipboard,
  description: "Define labor standards by position, set budgets, and track performance against your targets.",
  includes: ["Labor Standards Editor", "Annual Budget Conversion", "Extra Plan Hours", "Department-Level Budgeting", "Budget vs Actual Tracking"],
  purpose: "Control labor costs by setting clear standards and monitoring performance against budget.",
  image: laborPlansBudgetsImage,
  objectFit: "contain" as const,
  imageScale: 1.17
}, {
  title: "Housekeeping Tools",
  icon: Sparkles,
  description: "Track room attendant productivity, monitor cleans by type, and optimize housekeeping operations.",
  includes: ["Housekeeping Gameday Dashboard", "Checkout/Stayover/DND Tracking", "Minutes per Room (MPR) Standards", "Room Attendant Leaderboard"],
  purpose: "Maximize housekeeping efficiency with real-time productivity tracking and performance benchmarks.",
  image: housekeepingToolsImage,
  objectFit: "cover" as const,
  imagePosition: "center 75%"
}, {
  title: "Employee Management",
  icon: UsersRound,
  description: "Centralized employee database with department and position tracking across all your properties.",
  includes: ["Employee Explorer & Search", "Multi-Property Access", "Position & Department Tracking", "Contractor Management", "Employee Self-Service Portal"],
  purpose: "Maintain a single source of data of all employee data across your portfolio.",
  image: employeeManagementImage,
  objectFit: "contain" as const,
  imageScale: 1.10
}, {
  title: "Reports & Analytics",
  icon: BarChart3,
  description: "Over 100+ pre-built reports covering every aspect of labor management, from daily check-ins to long-term trends.",
  includes: ["Labor Summary & CPOR Reports", "Overtime Analysis & Trends", "Housekeeping Productivity", "Win-Loss Analysis", "Time & Attendance Reports"],
  purpose: "Make data-driven decisions with comprehensive labor analytics and actionable insights.",
  image: reportsAnalyticsImage,
  objectFit: "contain" as const,
  imageScale: 1.05
}];
const dailyCheckInFeatures = ["Catch overtime risks early", "Identify missing punches", "Review your MPOR variances", "Track labor costs daily"];
const LaborWorkforceSuite = () => {
  return <div className="min-h-screen bg-background">
      <SEO title="Labor & Workforce Suite" description="Smart scheduling, time tracking with face recognition, labor budgets, housekeeping tools, and workforce analytics for hotels." canonical="/solutions/labor-workforce" />
      <Navbar />
      <SolutionHero title="Labor & Workforce Suite" subtitle="Smart Workforce Management" description="Optimize scheduling, track labor costs, and manage your workforce efficiently across properties with smart forecasting and compliance monitoring." icon={<Users className="w-6 h-6" />} />

      {/* 5-Minute Daily Check-In Hero Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div className="flex-1" initial={{
            opacity: 0,
            x: -40
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-3">QUICK DAILY LABOR CHECK-IN</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Start Every Day in Control
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                The fastest way to review yesterday's labor performance and catch issues before they become problems. Select your property, pick a date, and get instant insights in under 5 minutes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {dailyCheckInFeatures.map((feature, index) => <motion.div key={index} className="flex items-center gap-2" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.2 + index * 0.1
              }}>
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>)}
              </div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5
            }}>
                <Button size="lg" className="group">
                  See How It Works
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div className="flex-1 w-full max-w-lg" initial={{
            opacity: 0,
            x: 40,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            x: 0,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop" alt="Daily Check-In Dashboard" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules */}
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
              What's Inside Labor & Workforce Suite
            </h2>
          </motion.div>

          <div className="space-y-16 lg:space-y-24">
            {modules.slice(0, 3).map((module, index) => <SolutionModuleRow key={index} title={module.title} description={module.description} includes={module.includes} purpose={module.purpose} icon={module.icon} image={module.image} index={index} reversed={index % 2 === 1} objectFit={module.objectFit} imageScale={module.imageScale} imagePosition={module.imagePosition} flipAnimation={module.flipAnimation} learnMoreLink={module.learnMoreLink} showNewBadge={module.showNewBadge} />)}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 mb-6 shadow-lg shadow-primary/25">
                    <Timer className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Cut Labor Costs by 10-15%
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our clients typically see a 3-5% reduction in labor costs within the first 90 days. Stop overstaffing, eliminate ghost hours, and optimize every shift.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" className="group">
                      <Zap className="mr-2 w-4 h-4" />
                      Calculate Your Savings
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link to="/contact">Schedule Demo</Link>
                    </Button>
                  </div>
                </div>

                <motion.div className="w-full md:w-64 shrink-0" initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.3
              }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">5min</div>
                      <div className="text-xs text-muted-foreground">Daily Check-In</div>
                    </div>
                    <div className="bg-accent/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">100+</div>
                      <div className="text-xs text-muted-foreground">Reports</div>
                    </div>
                    <div className="bg-accent/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1 whitespace-nowrap">3-15%</div>
                      <div className="text-xs text-muted-foreground">Cost Savings</div>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">Real</div>
                      <div className="text-xs text-muted-foreground">Time Sync</div>
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
            {modules.slice(3).map((module, index) => <SolutionModuleRow key={index + 3} title={module.title} description={module.description} includes={module.includes} purpose={module.purpose} icon={module.icon} image={module.image} index={index + 3} reversed={(index + 3) % 2 === 1} objectFit={module.objectFit} imageScale={module.imageScale} imagePosition={module.imagePosition} flipAnimation={module.flipAnimation} learnMoreLink={module.learnMoreLink} showNewBadge={module.showNewBadge} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SolutionCTA title="Optimize Your Workforce Today" description="Reduce labor costs, improve scheduling, and gain complete visibility into your workforce performance." />

      <Footer />
    </div>;
};
export default LaborWorkforceSuite;