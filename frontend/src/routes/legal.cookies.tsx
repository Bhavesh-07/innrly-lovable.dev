import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

export const Route = createFileRoute("/legal/cookies")({
  component: CookiesPage,
  loader: async () => {
    const seo = await fetchSeoData("/legal/cookies");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/legal/cookies"],
        "/legal/cookies"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/legal/cookies" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Cookie Policy — Innrly",
          url: "/legal/cookies",
          isPartOf: { "@type": "WebSite", name: "Innrly", url: "/" },
        }),
      },
    ],
  }),
});

function CookiesPage() {
  return (
    <div className="bg-background">
      <Section className="max-w-3xl py-16">
        <h1 className="text-4xl font-bold text-foreground">Cookie Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: June 6, 2026</p>

        <div className="prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground">
          <p>
            This Cookie Policy explains how Innrly (&ldquo;Innrly,&rdquo; &ldquo;we,&rdquo; or
            &ldquo;us&rdquo;) uses cookies and similar tracking technologies on{" "}
            <a href="/" className="underline">
              innrly.com
            </a>{" "}
            and within the Innrly hotel back-office platform (the &ldquo;Service&rdquo;). It should
            be read together with our{" "}
            <a href="/legal/privacy" className="underline">
              Privacy Policy
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-foreground">What is a cookie?</h2>
          <p>
            A cookie is a small text file stored on your device when you visit a website. Similar
            technologies include local storage, session storage, pixels, and SDKs. We refer to all
            of these as &ldquo;cookies&rdquo; in this policy.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Why we use cookies</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Keep you signed in and remember your account context across pages.</li>
            <li>Remember preferences such as theme, region, and consent choices.</li>
            <li>Measure traffic, page performance, and how features are used.</li>
            <li>Detect fraud, abuse, and security issues.</li>
            <li>Support marketing measurement on innrly.com (not inside the Service).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground">Cookie categories</h2>

          <h3 className="text-xl font-semibold text-foreground">1. Strictly necessary</h3>
          <p>
            Required for the site and Service to function — for example, authentication, session
            continuity, security tokens, load balancing, and remembering your cookie-consent choice.
            These cannot be turned off through the consent banner.
          </p>

          <h3 className="text-xl font-semibold text-foreground">2. Performance &amp; analytics</h3>
          <p>
            Help us understand how visitors use innrly.com and which features are most valuable
            inside the Service. We use <strong>Google Analytics 4 (GA4)</strong>, which sets cookies
            such as <em>_ga</em> and <em>_ga_&lt;container-id&gt;</em> to distinguish unique
            visitors and measure sessions. Data is aggregated and used to improve the product. IP
            addresses are truncated by GA4 before storage.
          </p>

          <h3 className="text-xl font-semibold text-foreground">3. Functional &amp; preference</h3>
          <p>
            Remember choices you make (for example, dismissed dialogs, last-viewed property,
            preferred date range) so the Service feels consistent across visits. Disabling these
            will not break the site but the experience will reset on each visit.
          </p>

          <h3 className="text-xl font-semibold text-foreground">4. Marketing</h3>
          <p>
            Used on innrly.com only (not inside the authenticated Service) to measure the
            effectiveness of our marketing campaigns and to show relevant content on third-party
            platforms such as LinkedIn or Google. We do not sell personal information.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Cookies we currently set</h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-card/60 text-foreground">
                <tr>
                  <th className="px-3 py-2 font-semibold">Cookie / key</th>
                  <th className="px-3 py-2 font-semibold">Category</th>
                  <th className="px-3 py-2 font-semibold">Provider</th>
                  <th className="px-3 py-2 font-semibold">Purpose</th>
                  <th className="px-3 py-2 font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-3 py-2">
                    <code>innrly_cookie_consent_v1</code>
                  </td>
                  <td className="px-3 py-2">Strictly necessary</td>
                  <td className="px-3 py-2">Innrly (first-party)</td>
                  <td className="px-3 py-2">Stores your cookie banner choice.</td>
                  <td className="px-3 py-2">12 months</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">
                    <code>_ga</code>
                  </td>
                  <td className="px-3 py-2">Performance &amp; analytics</td>
                  <td className="px-3 py-2">Google Analytics 4</td>
                  <td className="px-3 py-2">Distinguishes unique visitors.</td>
                  <td className="px-3 py-2">2 years</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">
                    <code>_ga_&lt;container-id&gt;</code>
                  </td>
                  <td className="px-3 py-2">Performance &amp; analytics</td>
                  <td className="px-3 py-2">Google Analytics 4</td>
                  <td className="px-3 py-2">Persists session state for GA4.</td>
                  <td className="px-3 py-2">2 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm italic text-muted-foreground">
            If we add new analytics, marketing, or embedded-media providers (for example LinkedIn
            Insight, Meta Pixel, Hotjar, or YouTube embeds), this table will be updated and the
            consent banner re-prompted where required.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Third parties</h2>
          <p>
            Some cookies are set by third-party providers we use to operate the site and Service.
            Categories of third parties include analytics, error monitoring, customer support chat,
            marketing measurement, and embedded media. Each provider has its own privacy policy
            governing how it processes your data.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">How to control cookies</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Use the cookie banner on innrly.com to accept or reject non-essential categories. You
              can change your choice at any time by clearing
              <em> innrly_cookie_consent_v1</em> from your browser storage and reloading the page.
            </li>
            <li>
              Most browsers let you block or delete cookies through their settings:{" "}
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Chrome
              </a>
              ,{" "}
              <a
                href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Firefox
              </a>
              ,{" "}
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Safari
              </a>
              ,{" "}
              <a
                href="https://support.microsoft.com/microsoft-edge"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Edge
              </a>
              .
            </li>
            <li>
              Opt out of cross-site advertising measurement through industry tools such as{" "}
              <a
                href="https://www.youronlinechoices.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Your Online Choices
              </a>{" "}
              (EU) or the{" "}
              <a
                href="https://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                DAA opt-out
              </a>{" "}
              (US).
            </li>
            <li>
              Blocking strictly necessary cookies will prevent you from signing in or using core
              parts of the Service.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground">Do Not Track</h2>
          <p>
            Some browsers send a &ldquo;Do Not Track&rdquo; signal. There is no industry standard
            for how sites must respond. Innrly honors the choices you make through our cookie banner
            regardless of any DNT header.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Changes to this policy</h2>
          <p>
            We may update this Cookie Policy as our use of cookies evolves. Material changes will be
            announced on innrly.com or, for the authenticated Service, by in-app notice.
          </p>

          <p className="text-xs italic text-muted-foreground">
            Questions about cookies or this policy?{" "}
            <a href="mailto:privacy@innrly.com" className="underline">
              privacy@innrly.com
            </a>
            .
          </p>
        </div>
      </Section>
    </div>
  );
}
