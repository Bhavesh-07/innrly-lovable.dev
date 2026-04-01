import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Headphones, BookOpen, LogIn, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
const solutions = [{
  id: "business-intelligence",
  label: "Business Intelligence Suite"
}, {
  id: "financial-control",
  label: "Financial Control Suite"
}, {
  id: "labor",
  label: "Labor Suite"
}, {
  id: "operations-automation",
  label: "Operations Automation Suite"
}, {
  id: "timeclock",
  label: "TimeClock"
}, {
  id: "innrly-pay",
  label: "Innrly Pay"
}];
const hotelCounts = [{
  value: "1",
  label: "1 property"
}, {
  value: "2-5",
  label: "2-5 properties"
}, {
  value: "6-10",
  label: "6-10 properties"
}, {
  value: "11-25",
  label: "11-25 properties"
}, {
  value: "26-50",
  label: "26-50 properties"
}, {
  value: "51-100",
  label: "51-100 properties"
}, {
  value: "100+",
  label: "100+ properties"
}];
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    numberOfHotels: "",
    message: ""
  });
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      phone: "",
      numberOfHotels: "",
      message: ""
    });
    setSelectedSolutions([]);
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSolutionToggle = (solutionId: string) => {
    setSelectedSolutions(prev => prev.includes(solutionId) ? prev.filter(id => id !== solutionId) : [...prev, solutionId]);
  };
  const handleSelectAll = () => {
    if (selectedSolutions.length === solutions.length) {
      setSelectedSolutions([]);
    } else {
      setSelectedSolutions(solutions.map(s => s.id));
    }
  };
  return <div className="min-h-screen bg-background">
      <SEO title="Contact Us" description="Get in touch with INNRLY. Schedule a demo, request support, or learn how our hotel management platform can streamline your operations." canonical="/contact" />
      <Navbar />
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center max-w-3xl mx-auto">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              INNRLY is a global company, serving hospitality professionals worldwide. 
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form - Takes 3 columns */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-2">We'd love to hear from you. Please fill in the form below</h2>
                <p className="text-muted-foreground mb-6">
                  We want to hear from you. Please complete the form below for general inquiries.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Work Email *
                      </label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company / Organization *
                      </label>
                      <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Hotel Group" required />
                    </div>
                    <div>
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-foreground mb-2">
                        Job Title
                      </label>
                      <Input id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="General Manager" />
                    </div>
                  </div>

                  {/* Number of Hotels */}
                  <div>
                    <label htmlFor="numberOfHotels" className="block text-sm font-medium text-foreground mb-2">
                      Number of Properties
                    </label>
                    <Select value={formData.numberOfHotels} onValueChange={value => setFormData(prev => ({
                    ...prev,
                    numberOfHotels: value
                  }))}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select number of properties" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border border-border z-50">
                        {hotelCounts.map(count => <SelectItem key={count.value} value={count.value}>
                            {count.label}
                          </SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Solutions Interest */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Which solutions are you interested in?
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {solutions.map(solution => <div key={solution.id} className={`flex items-center gap-3 p-3 rounded-lg border transition-colors cursor-pointer ${selectedSolutions.includes(solution.id) ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`} onClick={() => handleSolutionToggle(solution.id)}>
                          <Checkbox id={solution.id} checked={selectedSolutions.includes(solution.id)} onCheckedChange={() => handleSolutionToggle(solution.id)} />
                          <label htmlFor={solution.id} className="text-sm font-medium text-foreground cursor-pointer flex-1">
                            {solution.label}
                          </label>
                        </div>)}
                      <div className={`flex items-center gap-3 p-3 rounded-lg border transition-colors cursor-pointer sm:col-span-2 ${selectedSolutions.length === solutions.length ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`} onClick={handleSelectAll}>
                        <Checkbox id="all-above" checked={selectedSolutions.length === solutions.length} onCheckedChange={handleSelectAll} />
                        <label htmlFor="all-above" className="text-sm font-medium text-foreground cursor-pointer flex-1">
                          All of the Above
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message / Question *
                    </label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your needs..." rows={5} required />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar - Takes 2 columns */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="lg:col-span-2 space-y-8">
              {/* Request a Demo Card */}
              

              {/* Contact Information */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a href="mailto:contact@innrly.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        contact@innrly.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <a href="tel:+18333110777" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        (833) 311-0777
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Office</p>
                      <p className="text-sm text-muted-foreground">
                        La Place, Louisiana
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Resources */}
              

              {/* Press Inquiries */}
              
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;