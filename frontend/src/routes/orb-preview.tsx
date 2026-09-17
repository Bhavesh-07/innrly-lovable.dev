import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductOrb, type OrbVariant } from "@/components/site/ProductOrb";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/orb-preview")({
  component: OrbPreviewPage,
  head: () => ({
    meta: [
      { title: "Product Orb Preview | Innrly" },
      { name: "description", content: "Preview of Innrly signature product identity system orbs." },
    ],
  }),
});

const variants: { id: OrbVariant; name: string; description: string }[] = [
  { id: "reconciliation", name: "Reconciliation", description: "Cyan to Indigo to Violet (the brain)" },
  { id: "intelligence", name: "Business Intelligence", description: "Emerald to Teal to Cyan (growth)" },
  { id: "pay", name: "Innrly Pay", description: "Aqua to Blue (money)" },
  { id: "vault", name: "Document Vault", description: "Violet to Deep Blue to Silver (trust)" },
  { id: "control", name: "Financial Control", description: "Sapphire to Steel Blue to Ice" },
  { id: "labor", name: "Labor & Workforce", description: "Peach to Coral to Rose" },
  { id: "ops", name: "Operations Automation", description: "Lime to Chartreuse to Emerald" },
  { id: "shift", name: "Innrly Shift", description: "Royal Indigo to Sapphire" },
  { id: "steel", name: "Muted Steel", description: "Generic fallback" },
  { id: "doc", name: "Document Vault (slate)", description: "Slate blue to ice" },
  { id: "expense", name: "Expense Entries", description: "Muted amber/gold" },
  { id: "guest", name: "Guest Experience", description: "Soft rose/pink" },
  { id: "accountability", name: "Accountability", description: "Muted teal/mint" },
];

function OrbPreviewPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between border-b border-border/40 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Design System Preview
            </span>
            <h1 className="mt-2 text-4xl font-bold leading-tight">
              Product Orbs
            </h1>
            <p className="mt-2 text-muted-foreground">
              Signature visual identity system for core and supporting Innrly solutions.
            </p>
          </div>
          <Button asChild variant="outline" className="border-border">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="space-y-12">
          {variants.map((v) => (
            <div
              key={v.id}
              className="rounded-2xl border border-border/40 bg-surface/30 p-6 md:p-8 backdrop-blur"
            >
              <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between border-b border-border/20 pb-4">
                <div>
                  <h2 className="text-xl font-semibold text-foreground capitalize">{v.name}</h2>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </div>
                <div className="mt-2 md:mt-0 text-xs font-mono text-accent">
                  variant="{v.id}"
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-center justify-items-center">
                {/* Small size */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-40 items-center justify-center">
                    <ProductOrb variant={v.id} size="sm" label="12" eyebrow="Alert" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">size="sm" (96px)</div>
                </div>

                {/* Medium size */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-60 items-center justify-center">
                    <ProductOrb variant={v.id} size="md" label={v.name} sublabel="Active Status" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">size="md" (200px)</div>
                </div>

                {/* Large size */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-96 items-center justify-center">
                    <ProductOrb variant={v.id} size="lg" label={v.name} eyebrow="Signature Upgrade" sublabel="All systems nominal" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">size="lg" (360px)</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
