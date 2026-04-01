import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, PlayCircle, Building2, Building, Sparkles, Home, BedDouble, Hotel, UtensilsCrossed, Calculator } from "lucide-react";
import menuBIImg from "@/assets/solutions/menu-business-intelligence.jpg";
import menuFCImg from "@/assets/solutions/menu-financial-control.jpg";
import menuLaborImg from "@/assets/solutions/menu-labor-workforce.jpg";
import menuOpsImg from "@/assets/solutions/menu-operations-automation.jpg";
import menuReconciliationImg from "@/assets/solutions/menu-reconciliation.jpg";
import menuInnrlyPayImg from "@/assets/solutions/menu-innrly-pay.jpg";
import menuTimeclockImg from "@/assets/solutions/menu-timeclock.jpg";
import logo from "@/assets/logos/innrly-logo-dark-text.png";

const solutionsSubMenu = [
{
  name: "Business Intelligence Suite",
  href: "/solutions/business-intelligence",
  description: "Transform raw hotel data into powerful insights with real-time dashboards, customizable reports, and predictive analytics that drive better business outcomes.",
  image: menuBIImg
},
{
  name: "Financial Control Suite",
  href: "/solutions/financial-control",
  description: "Streamline your budgeting process with AI-powered forecasting, automated accounting processes, and collaborative workflows that help discover lost revenue.",
  image: menuFCImg
},
{
  name: "Labor & Workforce Suite",
  href: "/solutions/labor-workforce",
  description: "Optimize scheduling, track labor costs, and manage your workforce efficiently across properties with smart forecasting and compliance monitoring.",
  image: menuLaborImg
},
{
  name: "Operations Automation Suite",
  href: "/solutions/operations-automation",
  description: "Automate daily operations, streamline workflows, and gain real-time visibility into every aspect of your hotel's operational performance.",
  image: menuOpsImg
}];

const quickAccessItems = [
{
  name: "Reconciliations",
  href: "/solutions/reconciliation",
  description: "Automate bank reconciliations, income audit journaling, and OTA booking reconciliation. Match transactions with 100% accuracy and eliminate manual back-office work.",
  image: menuReconciliationImg,
  badge: "POPULAR",
  badgeClass: "bg-gradient-to-r from-amber-400 to-orange-500",
  borderClass: "hover:border-accent"
},
{
  name: "Innrly Pay",
  href: "/solutions/innrly-pay",
  description: "Streamline accounts payable with automatic GL coding, single-click vendor payments, and zero manual entry. Process invoices faster with built-in fraud protection.",
  image: menuInnrlyPayImg,
  badge: "FREE",
  badgeClass: "bg-gradient-to-r from-emerald-400 to-teal-500",
  borderClass: "hover:border-primary"
},
{
  name: "Innrly Shift",
  href: "/solutions/timeclock",
  description: "Hospitality-specific time tracking with facial recognition, mobile clock-in, and built-in MinPOR housekeeping productivity calculations. Included free with your subscription.",
  image: menuTimeclockImg,
  badge: "NEW",
  badgeClass: "bg-gradient-to-r from-rose-400 to-pink-500",
  borderClass: "hover:border-accent"
}];


const industriesSubMenu = [
{ name: "Management Companies", icon: Building },
{ name: "Boutique Hotels", icon: Sparkles },
{ name: "Extended Stay / Corporate Housing", icon: Home },
{ name: "Motels", icon: BedDouble },
{ name: "Serviced Apartments", icon: Hotel },
{ name: "Restaurants", icon: UtensilsCrossed },
{ name: "Automation for CPA Firms", icon: Calculator }];


const navLinks = [
{ name: "Features", href: "/#why" },
{ name: "Solutions", href: "/#solutions", hasSubmenu: true, submenuType: "solutions" },
{ name: "Industries We Serve", href: "/industries", hasSubmenu: true, submenuType: "industries" },
{ name: "Pricing", href: "/#pricing" },
{ name: "Blogs", href: "/blog" },
{ name: "Contact Us", href: "/contact" }];


export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [hoveredSolution, setHoveredSolution] = useState(0);
  const [hoveredQuickAccess, setHoveredQuickAccess] = useState<number | null>(null);

  // Compute active preview item
  const activePreview = hoveredQuickAccess !== null
    ? { name: quickAccessItems[hoveredQuickAccess].name, description: quickAccessItems[hoveredQuickAccess].description, image: quickAccessItems[hoveredQuickAccess].image }
    : { name: solutionsSubMenu[hoveredSolution].name, description: solutionsSubMenu[hoveredSolution].description, image: solutionsSubMenu[hoveredSolution].image };
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on the homepage (which has a dark gradient hero)
  const isHomePage = location.pathname === "/";
  const useTransparentNav = isHomePage && !isScrolled;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.substring(2);
      if (isHomePage) {
        // Already on homepage, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to homepage first, then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      useTransparentNav ?
      "bg-transparent" :
      "bg-background backdrop-blur-xl shadow-lg border-b border-border"}`
      }>
      
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Innrly"
              className={`h-[88px] w-auto object-contain rounded-xl ${useTransparentNav ? '' : ''}`}
              style={useTransparentNav ? { mixBlendMode: 'screen' } : undefined} />
            
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            link.hasSubmenu ?
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => {
                setOpenSubmenu(link.submenuType || null);
                setHoveredSolution(0);
              }}
              onMouseLeave={() => {
                setOpenSubmenu(null);
                setHoveredSolution(0);
                setHoveredQuickAccess(null);
              }}>
              
                  <button
                className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-primary ${
                useTransparentNav ? "text-primary-foreground/90" : "text-foreground"}`
                }>
                
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === link.submenuType ? "rotate-180" : ""}`} />
                  </button>
                  
                  {/* Solutions Submenu */}
                  <AnimatePresence>
                    {openSubmenu === "solutions" && link.submenuType === "solutions" &&
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-x-0 mt-4 z-50"
                  style={{ top: "72px" }}>
                  
                        <div className="mx-auto w-[calc(100vw-48px)] max-w-[1400px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
                        <div className="grid grid-cols-[280px_1fr_340px] min-h-[380px] max-h-[calc(100vh-96px)] overflow-y-auto">
                            {/* Left Column - Menu Items */}
                            <div className="border-r border-border py-6">
                              {solutionsSubMenu.map((item, index) =>
                        <a
                          key={item.name}
                          href={item.href}
                          onMouseEnter={() => { setHoveredSolution(index); setHoveredQuickAccess(null); }}
                          className={`flex items-center justify-between px-8 py-5 text-sm font-medium transition-all ${
                          hoveredSolution === index && hoveredQuickAccess === null ?
                          "text-foreground bg-secondary/50 border-l-2 border-primary" :
                          "text-muted-foreground hover:text-foreground border-l-2 border-transparent"}`
                          }>
                          
                                  {item.name}
                                  <PlayCircle
                            className={`w-4 h-4 transition-opacity ${
                            hoveredSolution === index && hoveredQuickAccess === null ? "opacity-100" : "opacity-0"}`
                            } />
                          
                                </a>
                        )}
                              
                              {/* Divider */}
                              <div className="mx-6 my-4 border-t border-border" />
                              
                              {/* Quick Access Section */}
                              <div className="px-6 mb-2">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Quick Access</span>
                              </div>
                              {quickAccessItems.map((item, index) =>
                        <a
                          key={item.name}
                          href={item.href}
                          onMouseEnter={() => setHoveredQuickAccess(index)}
                          className={`flex items-center justify-between px-8 py-3 text-sm font-medium transition-all border-l-2 ${
                          hoveredQuickAccess === index ?
                          "text-foreground bg-secondary/50 border-primary" :
                          `text-muted-foreground hover:text-foreground hover:bg-secondary/50 border-transparent ${item.borderClass}`}`
                          }>
                          
                                <span className="flex items-center gap-2">
                                  {item.name}
                                  <span className={`px-2 py-0.5 text-xs rounded-full ${item.badgeClass} text-white font-semibold shadow-sm`}>{item.badge}</span>
                                </span>
                                <PlayCircle className={`w-4 h-4 transition-opacity ${hoveredQuickAccess === index ? "opacity-100" : "opacity-0"}`} />
                              </a>
                        )}
                            </div>

                            {/* Middle Column - Description */}
                            <div className="p-10 flex flex-col justify-center">
                              <AnimatePresence mode="wait">
                                <motion.div
                            key={activePreview.name}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.15 }}>
                            
                                  <h3 className="text-2xl font-bold text-foreground mb-4">
                                    {activePreview.name}
                                  </h3>
                                  <p className="text-muted-foreground leading-relaxed text-base">
                                    {activePreview.description}
                                  </p>
                                </motion.div>
                              </AnimatePresence>
                            </div>

                            {/* Right Column - Image */}
                            <div className="bg-secondary/30 p-5">
                              <AnimatePresence mode="wait">
                                <motion.img
                            key={activePreview.name}
                            src={activePreview.image}
                            alt={activePreview.name}
                            className="w-full h-full object-cover rounded-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }} />
                          
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                }
                  </AnimatePresence>

                  {/* Industries Submenu */}
                  <AnimatePresence>
                    {openSubmenu === "industries" && link.submenuType === "industries" &&
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-4 z-50"
                  style={{ top: "24px" }}>
                  
                        <div className="bg-card rounded-xl shadow-2xl border border-border overflow-hidden min-w-[320px]">
                          <div className="py-3">
                            <div className="px-4 py-2 mb-2">
                              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Industries</span>
                            </div>
                            {industriesSubMenu.map((item) =>
                      <a
                        key={item.name}
                        href="/industries"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all">
                        
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <item.icon className="w-4 h-4 text-primary" />
                                </div>
                                {item.name}
                              </a>
                      )}
                          </div>
                        </div>
                      </motion.div>
                }
                  </AnimatePresence>
                </div> :

            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-base font-medium transition-colors hover:text-primary ${
              useTransparentNav ? "text-primary-foreground/90" : "text-foreground"}`
              }>
              
                  {link.name}
                </a>

            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant={useTransparentNav ? "hero-outline" : "ghost"}
              size="sm"
              className={useTransparentNav ? "text-primary-foreground" : ""}>
              
              Login
            </Button>
            <Button variant={useTransparentNav ? "hero" : "default"} size="sm" asChild>
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            
            {isMobileMenuOpen ?
            <X className={useTransparentNav ? "text-primary-foreground" : "text-foreground"} size={24} /> :

            <Menu className={useTransparentNav ? "text-primary-foreground" : "text-foreground"} size={24} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 pb-4 border-t border-border/20">
            
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map((link) =>
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium ${
                useTransparentNav ? "text-primary-foreground" : "text-foreground"}`
                }
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setIsMobileMenuOpen(false);
                }}>
                
                    {link.name}
                  </a>
              )}
                <div className="flex flex-col gap-2 pt-4">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                  <Button variant="default" size="sm">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </nav>
    </motion.header>);

};