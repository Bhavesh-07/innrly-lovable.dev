import { createFileRoute, Link } from "@tanstack/react-router";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

export const Route = createFileRoute("/404")({
  component: NotFoundPage,
  loader: async () => {
    const seo = await fetchSeoData("/404");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(loaderData?.seo || null, defaultSeoData["/404"], "/404"),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/404" }],
  }),
});

export function NotFoundPage() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-4 py-20">
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
