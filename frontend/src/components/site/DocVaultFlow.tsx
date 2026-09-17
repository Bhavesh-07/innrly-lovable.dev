import { FolderArchive, FileText, Upload, Search } from "lucide-react";

/**
 * DocVaultFlow — animated calendar + packet sidebar. Re-plays when `playKey` changes.
 * 5-col grid: calendar (3) + day packet (2). Calendar cells stay small.
 */
export function DocVaultFlow({ playKey }: { playKey: number }) {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const leadingBlanks = 2;
  const manual = new Set([3, 9, 14, 22, 27]);
  const searchHighlight = new Set([6, 19]);
  const todayTile = 18;
  const manualLandTile = 14;

  return (
    <div key={playKey} className="relative">
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl" aria-hidden />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
        <div className="flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <div className="ml-3 text-xs font-medium text-muted-foreground">
            Document Vault · October · AUS-03
          </div>
          <div className="ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            SYNCED
          </div>
        </div>

        {/* Search bar */}
        <div className="border-b border-border/60 bg-surface/40 px-4 py-2">
          <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-2 py-1">
            <Search className="h-3 w-3 text-muted-foreground" />
            <span className="text-[11px] text-foreground">
              <span className="ba-pop-in inline-block opacity-0" style={{ animationDelay: "3.8s" }}>
                home depot
              </span>
              <span
                className="ml-0.5 inline-block h-3 w-px bg-foreground align-middle opacity-0"
                style={{
                  animation:
                    "ba-pop-in 0.2s ease-out 3.7s forwards, ba-caret 0.7s steps(1) 3.9s infinite",
                }}
              />
            </span>
            <span
              className="ml-auto text-[9px] opacity-0 ba-pop-in"
              style={{ animationDelay: "4.4s" }}
            >
              <span className="rounded-full bg-accent/15 px-1.5 py-0.5 font-bold uppercase tracking-wider text-accent">
                2 matches
              </span>
            </span>
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-3 p-4 md:grid-cols-5">
          <svg
            className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full text-accent/70 md:block"
            viewBox="0 0 760 360"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              className="ba-route-dash"
              style={{ animationDelay: "0.25s" }}
              d="M78 88 C166 40 280 72 370 172"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              className="ba-route-dash"
              style={{ animationDelay: "2.35s" }}
              d="M116 78 C214 16 314 48 332 126"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div
            className="ba-pop-in pointer-events-none absolute left-7 top-7 z-20 hidden rounded-xl border border-accent/50 bg-background/95 px-3 py-2 shadow-elevated opacity-0 md:block"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="flex items-center gap-2">
              <FolderArchive className="h-4 w-4 text-accent" />
              <div>
                <div className="text-[10px] font-bold text-foreground">PMS night audit</div>
                <div className="text-[9px] text-muted-foreground">4 files launching</div>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="col-span-1 rounded-xl border border-border/60 bg-surface/60 p-3 md:col-span-3">
            <div className="flex items-center gap-2 border-b border-border/40 pb-2">
              <FolderArchive className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                One tile per day · 31 nights
              </span>
              <span className="ml-auto text-[9px] text-muted-foreground">100% auto-filed</span>
            </div>

            <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7 gap-1">
              {Array.from({ length: leadingBlanks }).map((_, i) => (
                <div key={`b${i}`} className="aspect-square rounded bg-background/20" />
              ))}
              {days.map((d) => {
                const isToday = d === todayTile;
                const isManualLand = d === manualLandTile;
                const isSearchHit = searchHighlight.has(d);
                const hasManual = manual.has(d);
                return (
                  <div
                    key={d}
                    className={`relative aspect-square rounded border p-0.5 text-[8px] transition-colors ${
                      isToday
                        ? "border-accent bg-accent/15 text-foreground ba-pulse-ring"
                        : "border-border/40 bg-background/40 text-foreground"
                    }`}
                  >
                    <span className="font-semibold">{d}</span>
                    <span className="absolute bottom-0.5 left-0.5 h-1 w-1 rounded-full bg-accent" />
                    {hasManual && (
                      <span className="absolute bottom-0.5 right-0.5 h-1 w-1 rounded-full bg-success" />
                    )}
                    {isToday && (
                      <span
                        className="ba-fly-doc pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0"
                        style={{
                          ["--sx" as never]: "-210px",
                          ["--sy" as never]: "-125px",
                          ["--sr" as never]: "-22deg",
                          animationDelay: "0.28s",
                        }}
                      >
                        <FileText className="h-5 w-5 text-accent" />
                      </span>
                    )}
                    {isToday && (
                      <span
                        className="ba-pop-in absolute -right-1 -top-1 rounded-full bg-accent px-1 text-[7px] font-bold text-accent-foreground opacity-0"
                        style={{ animationDelay: "1.6s" }}
                      >
                        4
                      </span>
                    )}
                    {isManualLand && (
                      <span
                        className="ba-fly-doc pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0"
                        style={{
                          ["--sx" as never]: "-150px",
                          ["--sy" as never]: "-115px",
                          ["--sr" as never]: "16deg",
                          animationDelay: "2.35s",
                        }}
                      >
                        <Upload className="h-5 w-5 text-success" />
                      </span>
                    )}
                    {isSearchHit && (
                      <span
                        className="ba-pop-in pointer-events-none absolute -inset-px rounded border-2 border-chart-4 opacity-0"
                        style={{ animationDelay: "4.4s" }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-3 flex items-center gap-3 text-[9px] text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Auto pack
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-success" /> Manual
              </span>
              <span className="ml-auto text-success">0 lost</span>
            </div>
          </div>

          {/* Packet sidebar — files animate in */}
          <div className="ba-landing-glow col-span-1 rounded-xl border border-accent/40 bg-surface/60 p-3 md:col-span-2">
            <div className="flex items-center gap-2 border-b border-border/40 pb-2">
              <FileText className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Oct 18 · packet
              </span>
            </div>
            <div className="mt-2 space-y-1">
              <AnimRow name="NA Manager Report.pdf" kind="auto" delay="0.4s" />
              <AnimRow name="Trial Balance.pdf" kind="auto" delay="0.7s" />
              <AnimRow name="Daily Flash.xlsx" kind="auto" delay="1.0s" />
              <AnimRow name="Expedia Settlement.pdf" kind="auto" delay="1.3s" />
              <AnimRow name="Ecolab Invoice.pdf" kind="manual" delay="2.8s" />
            </div>
            <div className="mt-3 rounded-lg border-2 border-dashed border-accent/40 bg-accent/5 p-2 text-center">
              <Upload className="mx-auto h-3.5 w-3.5 text-accent" />
              <div className="mt-1 text-[9px] font-semibold text-accent">
                Drop a file on any day
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimRow({ name, kind, delay }: { name: string; kind: "auto" | "manual"; delay: string }) {
  return (
    <div
      className="ba-slide-in flex items-center justify-between rounded px-1.5 py-1 opacity-0"
      style={{ animationDelay: delay }}
    >
      <div className="flex min-w-0 items-center gap-1.5">
        <FileText className="h-3 w-3 shrink-0 text-muted-foreground" />
        <span className="truncate text-[10px] text-foreground">{name}</span>
      </div>
      <span
        className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider ${kind === "manual" ? "bg-success/15 text-success" : "bg-accent/15 text-accent"}`}
      >
        {kind}
      </span>
    </div>
  );
}
