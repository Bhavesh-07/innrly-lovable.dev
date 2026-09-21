import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { NewsletterSignup } from "@/components/site/NewsletterSignup";
import { ArrowRight } from "lucide-react";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  summary: string;
  created_at: string;
  status: string;
}

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    let posts: BlogPost[] = [];
    try {
      const baseUrl = typeof window === "undefined" ? (process.env.BACKEND_URL || "http://127.0.0.1:8005") : "/api";
      const res = await fetch(`${baseUrl}/blog`);
      if (res.ok) {
        const data: BlogPost[] = await res.json();
        posts = data.filter(p => p.status === 'published');
      }
    } catch (e) {
      console.error("Failed to fetch blogs", e);
    }
    const seo = await fetchSeoData("/blog");
    return { posts, seo };
  },
  component: BlogIndex,
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/blog"],
        "/blog"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Innrly Blog",
          url: "/blog",
          description: "Operator-focused writing on hotel finance, labor, and analytics.",
          publisher: { "@type": "Organization", name: "Innrly" },
        }),
      },
    ],
  }),
});

function BlogIndex() {
  const { posts } = Route.useLoaderData();


  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            From the <span className="text-gradient">Innrly team.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Operator-focused writing on hotel finance, labor, and analytics.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading title="Latest posts" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.length === 0 ? (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              No published posts found.
            </div>
          ) : (
            posts.map((p) => (
              <article key={p.id} className="aurora-card rounded-2xl p-6 flex flex-col">
                <time className="text-xs text-muted-foreground" dateTime={p.created_at}>
                  {new Date(p.created_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <h2 className="mt-3 text-lg font-semibold text-foreground">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{p.summary}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent"
                >
                  Read post <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))
          )}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          More posts coming soon. Have a topic you want covered?{" "}
          <Link to="/contact" className="text-accent underline">
            Tell us
          </Link>
          .
        </p>
        <div className="mx-auto mt-16 max-w-2xl">
          <NewsletterSignup source="blog-index" />
        </div>
      </Section>
    </div>
  );
}
