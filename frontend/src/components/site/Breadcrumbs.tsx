import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  name: string;
  to?: string;
}

/**
 * Visible breadcrumb trail for deep pages. The matching BreadcrumbList JSON-LD
 * is emitted separately via `breadcrumbLd()` in head().
 */
export function Breadcrumbs({ items, className = "" }: { items: Crumb[]; className?: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`relative z-10 border-b border-border/40 bg-background/60 backdrop-blur ${className}`}
    >
      <ol className="mx-auto flex max-w-5xl flex-wrap items-center gap-1.5 px-4 py-3 text-xs text-muted-foreground sm:px-6 lg:px-8">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="inline-flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 text-muted-foreground/60" aria-hidden />}
              {isLast || !item.to ? (
                <span
                  className="font-medium text-foreground"
                  aria-current={isLast ? "page" : undefined}
                >
                  {i === 0 && <Home className="mr-1 inline h-3 w-3" aria-hidden />}
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="inline-flex items-center transition-colors hover:text-accent"
                >
                  {i === 0 && <Home className="mr-1 h-3 w-3" aria-hidden />}
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
