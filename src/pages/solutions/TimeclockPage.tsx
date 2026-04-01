import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { motion } from "framer-motion";
import { ScanFace, Smartphone, Bell, ArrowRight, Clock, DollarSign, Users, BarChart2, CalendarDays, LogIn, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import timeclockHero from "@/assets/solutions/timeclock-hero.jpg";
import mobileAppImg from "@/assets/solutions/timeclock-mobile-app-white.png";
import integrationImg from "@/assets/solutions/timeclock-integration-options.png";
import integrationChoiceImg from "@/assets/solutions/timeclock-integration-choice.jpg";
import timeclockCtaImg from "@/assets/solutions/timeclock-cta.jpg";

const features = [
  { icon: ScanFace, title: "Face Recognition Clock-ins", desc: "No PINs. No cards. No buddy punching. Staff can clock in securely with facial recognition, even from shared devices." },
  { icon: Smartphone, title: "Mobile & Tablet Ready", desc: "Front desk, housekeeping, kitchen — your staff can clock in on devices already in use. No expensive new hardware needed." },
  { icon: BarChart2, title: "MinPOR Calculation", desc: "Track and analyze time spent per room — so you know if your housekeeping is working at optimal efficiency." },
  { icon: Bell, title: "Overtime Alerts", desc: "Get notified before labor costs go over budget. Take action in real-time — not after payroll is done." },
  { icon: Users, title: "Third-Party Payroll Integration", desc: "Timesheets automatically sync with any third-party payroll system. Accurate salaries, fewer disputes, zero manual entry." },
  { icon: DollarSign, title: "No Extra Charges", desc: "Most platforms charge extra for time-tracking tools. With Innrly, TimeClock is included in your subscription — no add-ons, no hidden fees." },
];

const savings = [
  { stat: "22%", label: "Labor cost savings from eliminating time theft" },
  { stat: "6–10 hrs", label: "Saved per manager per month" },
  { stat: "$0", label: "Additional software cost — it's built into Innrly" },
];

const problems = [
  "Employees clock in early or late without visibility",
  "Hours get misreported across departments",
  "Payroll becomes prone to error and overpayment",
  "Manual tracking drains manager productivity",
];

const TimeclockPage = () => {
  return (
    <div className="min-h-screen">
      <SEO title="Innrly Shift — Face Recognition Time Clock" description="Eliminate buddy punching with face recognition clock-ins. Track overtime, sync payroll, and cut labor costs — included free with INNRLY." canonical="/solutions/timeclock" />
      <Navbar />
      <main>
        <SolutionHero
          title="Innrly TimeClock"
          subtitle="Included Free"
          description="Time is money — especially in the hotel business. With rotating shifts, multiple departments, and round-the-clock operations, hospitality is one of the most complex industries for workforce management."
          icon={<Clock className="w-5 h-5" />}
          image={timeclockHero}
          imageAlt="Innrly TimeClock Integration Options"
        />

        {/* Integration Options */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col sm:flex-row items-center gap-0">
              <div className="flex-1 p-6 rounded-2xl bg-card border border-border/50 shadow-lg text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">Bring Your Own</h3>
                <p className="text-base text-muted-foreground">Integrate any third-party timeclock system you're already using.</p>
              </div>
              <div className="shrink-0 w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-black z-10 -my-4 sm:my-0 sm:-mx-4 shadow-lg border-4 border-background">
                OR
              </div>
              <div className="flex-1 p-6 rounded-2xl bg-accent/10 border border-accent/20 shadow-lg text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">Use Innrly TimeClock</h3>
                <p className="text-base text-muted-foreground">Built-in, free, and ready to go with face recognition & payroll sync.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-foreground mb-3">The Problem: Time Tracking Isn't Just a Back-Office Task</h2>
              <p className="text-muted-foreground mb-6">
                Many hotel owners view time tracking as a basic admin need. But in reality, it's deeply tied to your labor cost, staff productivity, and even guest experience. Without a smart, accurate system:
              </p>
              <div className="space-y-3">
                {problems.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                    <span className="text-red-600 mt-0.5 shrink-0 text-base font-bold">✕</span>
                    <span className="text-red-900 text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-foreground mb-2">A TimeClock Built for Hotels</h2>
              <p className="text-muted-foreground mb-8">What hotels need isn't just a digital punch tool — they need a TimeClock designed for the way hotels operate.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 rounded-xl border border-border/50 bg-card"
                >
                  <f.icon className="w-6 h-6 text-accent mb-3" />
                  <h3 className="text-base font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-foreground mb-8">Time Tracking That Pays for Itself</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {savings.map((s) => (
                  <div key={s.stat} className="text-center p-6 rounded-xl border border-border/50 bg-card">
                    <p className="text-3xl font-bold text-accent mb-2">{s.stat}</p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Member Mobile App */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Team Member Mobile App</h2>
                </div>
                <p className="text-muted-foreground mb-6 text-lg">
                  Empower your staff with a dedicated mobile app that puts time management in their hands.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: LogIn, text: "Log hours directly from their phone — clock in and clock out with ease" },
                    { icon: CalendarDays, text: "Apply for leave, view schedules, and check upcoming shifts" },
                    { icon: Users, text: "View personal attendance history and pay period summaries" },
                    { icon: Bell, text: "Receive shift reminders and overtime notifications" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                    >
                      <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center relative"
              >
                <img
                  src={mobileAppImg}
                  alt="Innrly Employee TimeClock App with Face Recognition"
                  className="max-h-[625px] w-auto drop-shadow-2xl bg-white rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integration Flexibility */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Plug className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Your Clock, Your Choice</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  Innrly TimeClock is completely optional. Already have a timeclock system you love? No problem — integrate it seamlessly with Innrly. Or use our built-in TimeClock at no extra cost.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden border border-border/50 shadow-xl"
              >
                <img src={integrationChoiceImg} alt="Multiple timeclock integration options for hotels" className="w-full h-auto" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden border border-border/50 shadow-xl"
              >
                <img src={timeclockCtaImg} alt="Hotel manager using workforce analytics dashboard" className="w-full h-auto" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-3">Get control, visibility, and automation — at no extra cost.</h2>
                <p className="text-muted-foreground mb-6">Whether you're managing a boutique hotel or a multi-property portfolio, having a reliable time-tracking system is no longer optional — it's essential.</p>
                <Button size="lg" variant="accent" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TimeclockPage;
