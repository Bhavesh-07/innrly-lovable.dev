import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Zap, Shield, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { TechGridBackground } from "@/components/effects/TechGridBackground";
import { DataFlowParticles } from "@/components/effects/DataFlowParticles";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to empowering hoteliers with the tools they need to maximize efficiency and profitability.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge solutions that transform hospitality management.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Every feature we build starts with understanding our customers' real-world challenges.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We protect your data with enterprise-grade security while maintaining seamless accessibility.",
  },
];

const stats = [
  { value: "500+", label: "Hotels Managed" },
  { value: "50+", label: "Brand Integrations" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us"
        description="Learn about INNRLY's mission to transform hospitality operations with real-time data integration, automation, and analytics for hotel portfolios."
        canonical="/about"
      />
      <Navbar />
      <section className="relative min-h-[60vh] flex items-center bg-hero overflow-hidden">
        {/* Animated backgrounds */}
        <div className="absolute inset-0 opacity-30">
          <TechGridBackground />
        </div>
        <div className="absolute inset-0 opacity-40">
          <DataFlowParticles />
        </div>
        
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm"
            >
              <motion.div 
                className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Globe className="w-5 h-5" />
              </motion.div>
              <span className="text-white font-semibold tracking-wide uppercase text-sm">About INNRLY</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Transforming Hospitality Through Technology
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-3xl"
            >
              INNRLY is the most comprehensive data platform in the hospitality industry, 
              empowering hotel management companies to run all their properties from one unified platform.
            </motion.p>
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Subtle background effect */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering Hoteliers to Focus on What Matters
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Cloud-based integration and simple customization allow you to focus on taking action 
                and prevent losses before they happen. This level of automation can be leveraged by 
                all financial and technology professionals in the hospitality industry for efficient 
                hotel operation management.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We bring together accounting, labor, payables, and back-end operational data in one 
                place to give you real-time insight into your business performance, regardless of 
                the hotel brand.
              </p>
              <Button asChild variant="default" size="lg" className="group relative overflow-hidden">
                <Link to="/#features">
                  <motion.span
                    className="absolute inset-0 bg-primary-foreground/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center">
                    Explore Our Features
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 1 }}
                    >
                      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                    </motion.div>
                    
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold text-primary mb-2"
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our core values guide every decision we make and every feature we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all hover:shadow-lg relative overflow-hidden group"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-primary/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  <value.icon className="w-6 h-6 relative z-10" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2 relative z-10">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">
                Seamless Integration
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transformation Without Transition
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Transform your hospitality business without changing any of your current systems. 
                Your data and credentials are protected, and your existing setup remains the same — 
                there is nothing to transition. Access key data for your hotel portfolio with a 
                single login and a brand-neutral, user-friendly interface.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="default" size="lg" className="group relative overflow-hidden" asChild>
                  <Link to="/contact">
                    <motion.span
                      className="absolute inset-0 bg-primary-foreground/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10 flex items-center">
                      Schedule a Demo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/#pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Support Section */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-primary/20"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Award className="w-8 h-8 relative z-10" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Supporting All Major Hotel Brands
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                INNRLY integrates seamlessly with all major hotel property management systems, 
                accounting software, labor management tools, and reputation platforms. Whether 
                you operate Marriott, Hilton, IHG, Choice Hotels, Wyndham, or independent properties, 
                we've got you covered.
              </p>
              <Button asChild variant="default" size="lg" className="group relative overflow-hidden">
                <Link to="/">
                  <motion.span
                    className="absolute inset-0 bg-primary-foreground/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center">
                    See All Integrations
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hero relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <TechGridBackground />
        </div>
        
        <motion.div 
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Hotel Operations?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join hundreds of hotel management companies already using INNRLY to streamline 
              operations and maximize profitability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="group relative overflow-hidden">
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="hero-outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
