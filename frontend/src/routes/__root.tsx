import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyMobileCta } from "@/components/site/StickyMobileCta";
import { DesktopScrollCta } from "@/components/site/DesktopScrollCta";
import { DevLeadBanner } from "@/components/site/DevLeadBanner";
import { DevAnalyticsBanner } from "@/components/site/DevAnalyticsBanner";
import { AnalyticsProvider } from "@/components/site/AnalyticsProvider";
import { Toaster } from "@/components/ui/sonner";
import { CookieConsent } from "@/components/site/CookieConsent";
import { TrialModal } from "@/components/site/TrialModal";
import { CursorGlow } from "@/components/site/CursorGlow";
import { fetchSiteScripts, defaultSiteScripts, type SiteScriptsSettings } from "@/lib/scripts";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary blur-3xl" />
        <div className="absolute left-1/3 bottom-1/4 h-64 w-64 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="relative max-w-lg text-center">
        <p className="text-[10rem] font-black leading-none tracking-tight text-gradient sm:text-[12rem]">
          404
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-foreground">
          This room isn't on the floor plan.
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist, has been moved, or never checked in.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-cta px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Back to home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-cta px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://www.innrly.com";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  loader: async () => {
    const siteScripts = await fetchSiteScripts();
    return { siteScripts };
  },
  head: ({ loaderData }) => {
    const scripts = loaderData?.siteScripts || defaultSiteScripts;
    const isActive = scripts.is_active !== false;
    const ga4Id = scripts.ga4_id;
    const gtmId = scripts.gtm_id;

    const dynamicScripts: any[] = [];

    // Google Tag Manager head snippet
    if (isActive && gtmId) {
      dynamicScripts.push({
        children: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `,
      });
    }

    // Google Analytics 4 snippet
    if (isActive && ga4Id) {
      dynamicScripts.push(
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`,
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga4Id}', {
              send_page_view: false
            });
          `,
        }
      );
    }

    // Google reCAPTCHA v3
    dynamicScripts.push({
      src: "https://www.google.com/recaptcha/api.js?render=6LcVJrkkAAAAABsSLGi1FDOjAtIyby9UNsBQPUCd&ver=3.0",
      async: true,
    });

    // Structured Data Organization & WebSite Schemas
    dynamicScripts.push(
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Innrly",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.svg`,
          description:
            "Hotel management software for back-office automation, business intelligence, and labor management.",
          sameAs: ["https://www.linkedin.com/company/innrly", "https://x.com/innrly"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Innrly",
          url: SITE_URL,
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${SITE_URL}/glossary?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        }),
      }
    );

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Innrly — Hotel management software" },
        {
          name: "description",
          content:
            "Innrly is one platform for hotel back-office automation, business intelligence, and labor management. Save 20–40 hours a month per property.",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Innrly" },
        { property: "og:image", content: `${SITE_URL}/og/home.jpg` },
        { property: "og:image:width", content: "1216" },
        { property: "og:image:height", content: "640" },
        { property: "og:image:alt", content: "Innrly — back-office automation for hotels." },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${SITE_URL}/og/home.jpg` },
        { name: "theme-color", content: "#0f1d2e" },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "preload",
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
        },
      ],
      scripts: dynamicScripts,
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function CustomScriptsInjector({
  headerTags,
  footerTags,
  isActive,
}: {
  headerTags?: string | null;
  footerTags?: string | null;
  isActive: boolean;
}) {
  useEffect(() => {
    if (!isActive) return;

    const injectHtml = (htmlStr: string, target: HTMLElement, idPrefix: string) => {
      document.querySelectorAll(`[data-injected-by="${idPrefix}"]`).forEach((el) => el.remove());
      if (!htmlStr || !htmlStr.trim()) return;

      const container = document.createElement("div");
      container.innerHTML = htmlStr;

      Array.from(container.childNodes).forEach((node) => {
        if (node.nodeName === "SCRIPT") {
          const script = document.createElement("script");
          const origScript = node as HTMLScriptElement;
          Array.from(origScript.attributes).forEach((attr) => {
            script.setAttribute(attr.name, attr.value);
          });
          script.setAttribute("data-injected-by", idPrefix);
          script.textContent = origScript.textContent;
          target.appendChild(script);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node.cloneNode(true) as HTMLElement;
          el.setAttribute("data-injected-by", idPrefix);
          target.appendChild(el);
        }
      });
    };

    if (headerTags) {
      injectHtml(headerTags, document.head, "innrly-head-tags");
    }
    if (footerTags) {
      injectHtml(footerTags, document.body, "innrly-footer-tags");
    }

    return () => {
      document.querySelectorAll('[data-injected-by^="innrly-"]').forEach((el) => el.remove());
    };
  }, [headerTags, footerTags, isActive]);

  return null;
}

function RootShell({ children }: { children: React.ReactNode }) {
  const loaderData = Route.useLoaderData();
  const scripts = loaderData?.siteScripts;
  const isActive = scripts?.is_active !== false;

  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {isActive && scripts?.gtm_id && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${scripts.gtm_id}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const loaderData = Route.useLoaderData();
  const scripts = loaderData?.siteScripts;
  const isActive = scripts?.is_active !== false;

  const routerState = useRouterState();
  const isAdminRoute = 
    routerState.location.pathname.startsWith("/control-hub") || 
    routerState.location.pathname.startsWith("/admin");

  useEffect(() => {
    if (isAdminRoute) {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#f8f9fa";
    } else {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "";
    }
  }, [isAdminRoute]);

  if (isAdminRoute) {
    return (
      <QueryClientProvider client={queryClient}>
        <CustomScriptsInjector
          headerTags={scripts?.header_tags}
          footerTags={scripts?.footer_tags}
          isActive={isActive}
        />
        <div className="min-h-screen h-full w-full bg-[#f8f9fa] flex flex-col">
          <Outlet />
        </div>
        <Toaster />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <CustomScriptsInjector
        headerTags={scripts?.header_tags}
        footerTags={scripts?.footer_tags}
        isActive={isActive}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cta focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <div className="flex min-h-dvh flex-col pb-20 sm:pb-0">
        <DevLeadBanner />
        <DevAnalyticsBanner />
        <Header />
        <main id="main" className="cursor-glow-zone flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <AnalyticsProvider />
      <StickyMobileCta />
      <DesktopScrollCta />
      <CookieConsent />
      <TrialModal />
      <CursorGlow />
      <Toaster />
    </QueryClientProvider>
  );
}
