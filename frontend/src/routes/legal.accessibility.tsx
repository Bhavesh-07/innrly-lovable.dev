import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

export const Route = createFileRoute("/legal/accessibility")({
  component: AccessibilityPage,
  loader: async () => {
    const seo = await fetchSeoData("/legal/accessibility");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/legal/accessibility"],
        "/legal/accessibility"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/legal/accessibility" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Accessibility Statement — Innrly",
          url: "/legal/accessibility",
          isPartOf: { "@type": "WebSite", name: "Innrly", url: "/" },
        }),
      },
    ],
  }),
});

function AccessibilityPage() {
  return (
    <div className="bg-background">
      <Section className="max-w-3xl py-16">
        <h1 className="text-4xl font-bold text-foreground">Accessibility Statement</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: June 6, 2026</p>

        <div className="prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground">
          <p>
            Innrly is committed to making our hotel back-office platform and marketing site usable
            by as many people as possible, including hotel team members who rely on assistive
            technology to do their jobs.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Our standard</h2>
          <p>
            We target conformance with the{" "}
            <a
              href="https://www.w3.org/TR/WCAG21/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
            </a>
            . These guidelines explain how to make web content more accessible to people with
            visual, auditory, motor, and cognitive disabilities.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">What we do</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Use semantic HTML, ARIA roles, and labeled controls so screen readers can navigate
              every page.
            </li>
            <li>Maintain color contrast ratios that meet AA on both light and dark surfaces.</li>
            <li>Support full keyboard navigation across menus, forms, dialogs, and tables.</li>
            <li>Provide visible focus indicators on every interactive element.</li>
            <li>Avoid relying on color alone to convey status or errors.</li>
            <li>Review new product surfaces for accessibility before they ship.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground">Known limitations</h2>
          <p>
            Some legacy reports, third-party embeds, and integration partner widgets may not yet
            fully meet WCAG 2.1 AA. We are actively working to remediate these areas.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Report an issue</h2>
          <p>
            If you encounter an accessibility barrier on innrly.com or inside the Innrly platform,
            please tell us. We aim to acknowledge accessibility reports within two business days.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:accessibility@innrly.com" className="underline">
              accessibility@innrly.com
            </a>
            <br />
            Please include the page URL, the issue you encountered, and the assistive technology or
            browser you were using.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Formal complaints</h2>
          <p>
            If you are not satisfied with our response, you may also raise concerns under the
            applicable accessibility law in your jurisdiction (for example, the Americans with
            Disabilities Act in the United States).
          </p>
        </div>
      </Section>
    </div>
  );
}
