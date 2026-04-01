import { SEO } from "@/components/SEO";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { integrations, categories, IntegrationCategory } from "@/data/integrationsData";
import { Link } from "react-router-dom";
import { ArrowRight, Puzzle } from "lucide-react";

const Integrations = () => {
  const [activeCategory, setActiveCategory] = useState<IntegrationCategory>("All Integrations");

  const filteredIntegrations = activeCategory === "All Integrations"
    ? integrations
    : integrations.filter((integration) => integration.category === activeCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      PMS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      Accounting: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      Benchmarking: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      Database: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      Customer: "bg-pink-500/10 text-pink-400 border-pink-500/20",
      Labor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      Reputation: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    };
    return colors[category] || "bg-muted text-muted-foreground border-border";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Integrations" description="INNRLY integrates with leading PMS, accounting, payroll, and operations systems. Connect your existing hotel tech stack seamlessly." canonical="/integrations" />
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Puzzle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Seamless Connectivity</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Powerful <span className="text-primary">Integrations</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              This powerful, easy-to-use business intelligence solution helps you understand portfolio performance and make informed decisions. INNRLY works with major apps, programs, and tools to pull what matters most to your business into one system.
            </p>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              <span className="font-semibold text-foreground">Integrations are fully customizable</span> so you can isolate the information that is most important to your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-y border-border bg-card/50 sticky top-16 z-40 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "hover:bg-primary/10 hover:border-primary/30"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                  <div className="w-20 h-20 rounded-xl bg-background flex items-center justify-center mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={integration.image}
                      alt={integration.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {integration.name}
                  </h3>
                  
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(integration.category)}`}>
                    {integration.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "15+", label: "Active Integrations" },
              { number: "7", label: "Categories" },
              { number: "100%", label: "Customizable" },
              { number: "24/7", label: "Sync Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-card/50 rounded-2xl border border-border">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need a Custom Integration?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't see your preferred tool? Our team can help you build custom integrations tailored to your specific needs.
            </p>
            <Link to="/about">
              <Button size="lg" className="group">
                Talk to Our Experts
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integrations;
