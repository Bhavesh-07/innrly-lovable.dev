import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Server, Eye, FileCheck, Users, AlertTriangle, RefreshCw } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Your sensitive information is protected at every stage."
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Our platform is hosted on enterprise-grade cloud infrastructure with multiple layers of security, including firewalls, intrusion detection, and DDoS protection."
  },
  {
    icon: Eye,
    title: "Access Controls",
    description: "Role-based access controls ensure that users only have access to the data and features they need. Multi-factor authentication adds an extra layer of security."
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "We maintain compliance with industry standards including SOC 2, GDPR, and PCI-DSS requirements for handling sensitive hospitality data."
  },
  {
    icon: Users,
    title: "Employee Security",
    description: "All INNRLY employees undergo background checks and security training. Access to customer data is strictly limited and logged."
  },
  {
    icon: RefreshCw,
    title: "Regular Audits",
    description: "We conduct regular security audits, penetration testing, and vulnerability assessments to identify and address potential risks."
  }
];

const securitySections = [
  {
    id: "overview",
    title: "Security Overview",
    content: `At INNRLY, security is not just a feature—it's foundational to everything we do. We understand that hotels trust us with sensitive financial data, guest information, and critical business operations. That's why we've built our platform with security at its core.

Our security program is designed to protect the confidentiality, integrity, and availability of your data while maintaining compliance with industry standards and regulations.`
  },
  {
    id: "data-protection",
    title: "Data Protection",
    content: `We implement multiple layers of protection for your data:

• Encryption in Transit: All data transmitted between your browser and our servers is encrypted using TLS 1.3, the latest and most secure transport protocol.

• Encryption at Rest: Data stored in our databases is encrypted using AES-256, the same standard used by banks and government agencies.

• Key Management: Encryption keys are stored separately from data and rotated regularly following industry best practices.

• Data Isolation: Each customer's data is logically isolated to prevent unauthorized access between accounts.`
  },
  {
    id: "infrastructure",
    title: "Infrastructure Security",
    content: `Our infrastructure is built for resilience and security:

• Cloud Hosting: We use enterprise-grade cloud providers with SOC 2, ISO 27001, and other certifications.

• Network Security: Multiple firewall layers, network segmentation, and intrusion detection systems protect against unauthorized access.

• DDoS Protection: Automatic DDoS mitigation ensures service availability even during attacks.

• Redundancy: Data is replicated across multiple availability zones for high availability and disaster recovery.

• Monitoring: 24/7 security monitoring and alerting helps us detect and respond to threats quickly.`
  },
  {
    id: "access-control",
    title: "Access Control",
    content: `We enforce strict access controls at every level:

• Multi-Factor Authentication: MFA is available for all accounts and required for administrative access.

• Role-Based Access: Granular permissions ensure users only access what they need.

• Session Management: Automatic session timeouts and secure session handling protect against unauthorized access.

• Audit Logging: All access and changes are logged for accountability and forensic analysis.

• Single Sign-On: Enterprise SSO integration allows you to manage access through your existing identity provider.`
  },
  {
    id: "compliance",
    title: "Compliance & Certifications",
    content: `INNRLY maintains compliance with relevant industry standards:

• SOC 2 Type II: Our controls for security, availability, and confidentiality are independently audited.

• GDPR: We comply with the General Data Protection Regulation for handling EU personal data.

• PCI-DSS: Our handling of payment card data follows Payment Card Industry standards.

• CCPA: We support California Consumer Privacy Act requirements.

We provide compliance documentation and can support your audit requirements upon request.`
  },
  {
    id: "incident-response",
    title: "Incident Response",
    content: `We have a comprehensive incident response program:

• Detection: Automated monitoring and alerting systems detect potential security incidents.

• Response Team: Our dedicated security team is on-call to respond to incidents 24/7.

• Communication: We commit to notifying affected customers promptly in the event of a security incident.

• Post-Incident Review: Every incident is followed by a thorough review to prevent recurrence.

• Business Continuity: Tested disaster recovery and business continuity plans ensure rapid recovery.`
  },
  {
    id: "vendor-security",
    title: "Vendor Security",
    content: `We carefully vet and monitor our third-party vendors:

• Due Diligence: All vendors undergo security assessment before engagement.

• Contractual Requirements: Vendors are bound by data protection and security requirements.

• Ongoing Monitoring: We regularly review vendor security posture and compliance.

• Limited Access: Vendors receive only the minimum access necessary to provide their services.`
  },
  {
    id: "responsible-disclosure",
    title: "Responsible Disclosure",
    content: `We welcome security researchers to help us improve:

If you discover a security vulnerability in our platform, please report it to us responsibly. We commit to:

• Acknowledging receipt of your report promptly
• Investigating and addressing valid vulnerabilities
• Keeping you informed of our progress
• Not taking legal action against researchers acting in good faith

Please contact us through our website to report security concerns.`
  }
];

const Security = () => {
  return (
    <>
      <SEO title="Security" description="INNRLY protects your data with enterprise-grade encryption, SOC 2 compliance, and rigorous access controls. Your hotel data is safe with us." canonical="/security" />
      <Navbar />
      <main className="pt-24 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Security at INNRLY
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your data security is our top priority. Learn about the measures we take to protect your business.
            </p>
          </motion.div>

          {/* Security Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
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
                  {securitySections.map((section) => (
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
              {securitySections.map((section) => (
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

export default Security;
