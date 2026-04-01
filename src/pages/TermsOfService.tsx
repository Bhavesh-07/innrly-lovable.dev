import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const termsSections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing and using INNRLY's website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.

These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.`
  },
  {
    id: "services",
    title: "Description of Services",
    content: `INNRLY provides a comprehensive hospitality management platform that includes:

• Business Intelligence and Analytics
• Financial Control and Budgeting Tools
• Labor and Workforce Management
• Operations Automation
• Reconciliation Services
• Reporting and Dashboard Solutions

We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.`
  },
  {
    id: "account",
    title: "Account Registration and Security",
    content: `To access certain features of our services, you may be required to create an account. You agree to:

• Provide accurate, current, and complete information during registration
• Maintain and promptly update your account information
• Keep your password secure and confidential
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized use of your account

We reserve the right to suspend or terminate accounts that violate these terms.`
  },
  {
    id: "user-conduct",
    title: "User Conduct",
    content: `You agree not to use our services to:

• Violate any applicable laws or regulations
• Infringe upon the rights of others
• Transmit harmful, offensive, or illegal content
• Attempt to gain unauthorized access to our systems
• Interfere with the proper functioning of our services
• Collect or store personal data about other users without consent
• Use automated systems to access our services without permission`
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    content: `All content, features, and functionality of INNRLY's services, including but not limited to text, graphics, logos, icons, images, audio clips, software, and data compilations, are the exclusive property of INNRLY or its licensors and are protected by copyright, trademark, and other intellectual property laws.

You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our content without prior written consent.`
  },
  {
    id: "data-usage",
    title: "Data Usage and Privacy",
    content: `Your use of our services is also governed by our Privacy Policy. By using INNRLY, you consent to the collection and use of your information as described in our Privacy Policy.

You retain ownership of any data you submit to our platform. You grant INNRLY a limited license to use this data solely for the purpose of providing our services to you.`
  },
  {
    id: "payment",
    title: "Payment Terms",
    content: `If you subscribe to paid services:

• You agree to pay all fees associated with your selected plan
• Fees are billed in advance on a monthly or annual basis
• All payments are non-refundable unless otherwise specified
• We reserve the right to modify pricing with 30 days notice
• Failure to pay may result in suspension or termination of services

You are responsible for providing accurate billing information and keeping it current.`
  },
  {
    id: "warranties",
    title: "Disclaimers and Warranties",
    content: `INNRLY's services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.

We do not warrant that our services will be uninterrupted, timely, secure, or error-free. We do not guarantee the accuracy or completeness of any information provided through our services.`
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by law, INNRLY shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or related to your use of our services.

Our total liability for any claims arising from these terms or your use of our services shall not exceed the amount you paid to us in the twelve months preceding the claim.`
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: `You agree to indemnify and hold harmless INNRLY, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or related to your use of our services, violation of these terms, or infringement of any rights of another party.`
  },
  {
    id: "termination",
    title: "Termination",
    content: `We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms of Service.

Upon termination, your right to use our services will immediately cease. All provisions of these terms that should reasonably survive termination shall continue in effect.`
  },
  {
    id: "changes",
    title: "Changes to Terms",
    content: `We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new terms on this page and updating the "Last updated" date.

Your continued use of our services after any changes constitutes acceptance of the new terms. We encourage you to review these terms periodically.`
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.

Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration in accordance with applicable arbitration rules.`
  },
  {
    id: "contact",
    title: "Contact Information",
    content: `If you have any questions about these Terms of Service, please contact us through our website or at the contact information provided on our platform.`
  }
];

const TermsOfService = () => {
  return (
    <>
      <SEO title="Terms of Service" description="INNRLY's terms of service governing use of our hotel management platform." canonical="/terms-of-service" noindex />
      <Navbar />

      <main className="pt-24 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-[240px_1fr] gap-12">
            {/* Table of Contents - Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:block"
            >
              <nav className="sticky top-28">
                <h3 className="font-semibold text-foreground mb-4">Contents</h3>
                <ul className="space-y-2">
                  {termsSections.map((section) => (
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-12"
            >
              {termsSections.map((section) => (
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

export default TermsOfService;
