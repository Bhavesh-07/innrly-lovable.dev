import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Cookie, Settings, BarChart3, Shield, Trash2, Mail } from "lucide-react";

const cookieTypes = [
  {
    icon: Shield,
    name: "Necessary Cookies",
    description: "Essential for the website to function properly. These cookies ensure basic functionalities and security features.",
    examples: ["Session management", "Authentication", "Security tokens", "Load balancing"],
    canDisable: false
  },
  {
    icon: Settings,
    name: "Functionality Cookies",
    description: "Enable personalized features and remember your preferences for a better user experience.",
    examples: ["Language preferences", "Username recognition", "Theme settings", "Customized layouts"],
    canDisable: true
  },
  {
    icon: BarChart3,
    name: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    examples: ["Page visit statistics", "Traffic sources", "User behavior patterns", "Performance metrics"],
    canDisable: true
  },
  {
    icon: Cookie,
    name: "Marketing Cookies",
    description: "Used to track visitors across websites to display relevant advertisements based on your interests.",
    examples: ["Ad personalization", "Campaign tracking", "Retargeting", "Social media integration"],
    canDisable: true
  }
];

const cookieSections = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.

Each cookie is unique to your web browser and contains anonymous information such as:
• A unique identifier
• The website's domain name
• The duration of the cookie
• Various digits and numbers

Cookies help websites remember your preferences, understand how you use the site, and improve your overall experience.`
  },
  {
    id: "how-we-use",
    title: "How We Use Cookies",
    content: `INNRLY uses cookies for several purposes:

• Authentication: To recognize you when you sign in and maintain your session securely.

• Preferences: To remember your settings, language preferences, and customizations.

• Security: To support security features and detect malicious activity.

• Analytics: To understand how visitors use our website so we can improve our services.

• Performance: To ensure our website loads quickly and functions properly.

We do not use cookies to collect personally identifiable information unless you have consented to it.`
  },
  {
    id: "third-party",
    title: "Third-Party Cookies",
    content: `In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and provide other services.

Third-party services we may use include:

• Google Analytics: For website traffic analysis and usage patterns
• Google reCAPTCHA: For security and spam prevention
• Social Media Platforms: For social sharing features
• Advertising Networks: For relevant ad delivery (if applicable)

These third parties have their own privacy policies governing their use of cookies. We encourage you to review their policies for more information.`
  },
  {
    id: "cookie-duration",
    title: "Cookie Duration",
    content: `Cookies can be classified by their lifespan:

Session Cookies
These are temporary cookies that are deleted when you close your browser. They are essential for the website to function during your visit.

Persistent Cookies
These cookies remain on your device for a set period or until you delete them. They help us recognize you on subsequent visits and remember your preferences.

Our persistent cookies typically expire within:
• Authentication cookies: 2 days to 2 weeks (depending on "Remember Me" selection)
• Preference cookies: Up to 1 year
• Analytics cookies: Up to 2 years`
  },
  {
    id: "managing-cookies",
    title: "Managing Your Cookies",
    content: `You have control over how cookies are used on your device. Here are your options:

Browser Settings
Most web browsers allow you to manage cookies through their settings. You can:
• View cookies stored on your device
• Delete individual or all cookies
• Block cookies from specific or all websites
• Set preferences for different types of cookies

Please note that disabling certain cookies may affect the functionality of our website and limit your access to some features.

Opt-Out Tools
For analytics and advertising cookies, you can use these tools:
• Google Analytics Opt-out: tools.google.com/dlpage/gaoptout
• Network Advertising Initiative: optout.networkadvertising.org
• Digital Advertising Alliance: optout.aboutads.info`
  },
  {
    id: "browser-instructions",
    title: "Browser-Specific Instructions",
    content: `Here's how to manage cookies in popular browsers:

Google Chrome
Settings → Privacy and Security → Cookies and other site data

Mozilla Firefox
Settings → Privacy & Security → Cookies and Site Data

Safari
Preferences → Privacy → Manage Website Data

Microsoft Edge
Settings → Cookies and site permissions → Manage and delete cookies and site data

For other browsers, please consult the browser's help documentation or settings menu.`
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons.

When we make changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we use cookies.

Continued use of our website after any changes constitutes acceptance of the updated policy.`
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have any questions about our use of cookies or this Cookie Policy, please contact us:

Email: contact@innrly.com

We're happy to provide more information about how we use cookies and help you manage your preferences.`
  }
];

const CookiePolicy = () => {
  return (
    <>
      <SEO title="Cookie Policy" description="Learn about the cookies INNRLY uses and how to manage your preferences." canonical="/cookie-policy" noindex />
      <Navbar />

      <main className="pt-24 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-12 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <Cookie className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              Learn how INNRLY uses cookies to improve your experience on our website.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>

          {/* Cookie Types Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Types of Cookies We Use
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={cookie.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <cookie.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {cookie.name}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          cookie.canDisable 
                            ? "bg-muted text-muted-foreground" 
                            : "bg-primary/10 text-primary"
                        }`}>
                          {cookie.canDisable ? "Optional" : "Required"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {cookie.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cookie.examples.map((example) => (
                          <span 
                            key={example}
                            className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Detailed Sections */}
          <div className="max-w-4xl mx-auto grid lg:grid-cols-[240px_1fr] gap-12">
            {/* Table of Contents - Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <nav className="sticky top-28">
                <h3 className="font-semibold text-foreground mb-4">Contents</h3>
                <ul className="space-y-2">
                  {cookieSections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-12"
            >
              {cookieSections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CookiePolicy;
