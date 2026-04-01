import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const privacySections = [
  {
    id: "who-we-are",
    title: "Who We Are",
    content: `INNRLY puts data and efficiency at the heart of hotel operations so hosts can return to hospitality. We automate back-office tasks, help you budget and forecast with more ease and accuracy, and see your property or portfolio performance more clearly. INNRLY is the hospitality software behind every great host. Our website address is: https://innrly.com.`
  },
  {
    id: "comments",
    title: "Comments",
    content: `When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.

An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available at https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.`
  },
  {
    id: "media",
    title: "Media",
    content: `If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.`
  },
  {
    id: "cookies",
    title: "Cookies",
    content: `If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.

If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.

When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.`
  },
  {
    id: "embedded-content",
    title: "Embedded Content from Other Websites",
    content: `Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.

These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.`
  },
  {
    id: "data-sharing",
    title: "Who We Share Your Data With",
    content: `If you request a password reset, your IP address will be included in the reset email.

We may share your data with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users. These parties are obligated to keep your information confidential.`
  },
  {
    id: "data-retention",
    title: "How Long We Retain Your Data",
    content: `If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.

For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.`
  },
  {
    id: "your-rights",
    title: "What Rights You Have Over Your Data",
    content: `If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.`
  },
  {
    id: "data-destination",
    title: "Where Your Data Is Sent",
    content: `Visitor comments may be checked through an automated spam detection service. Your data may be processed on servers located in the United States or other countries where our service providers maintain facilities.`
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy, please contact us through our website or at the contact information provided on our platform.`
  }
];

const PrivacyPolicy = () => {
  return (
    <>
      <SEO title="Privacy Policy" description="INNRLY's privacy policy. Learn how we collect, use, and protect your data." canonical="/privacy-policy" noindex />
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
              Privacy Policy
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
                  {privacySections.map((section) => (
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
              {privacySections.map((section, index) => (
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

export default PrivacyPolicy;
