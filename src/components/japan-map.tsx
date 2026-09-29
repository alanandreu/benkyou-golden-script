import { useMemo, useState } from "react";
import { prefectures, regions, type Prefecture, type RegionId } from "@/lib/japan-geo";
import { regionPaths } from "@/lib/japan-regions";
import { Button } from "@/components/ui/button";

type Mode = "regiones" | "prefecturas";

// Paleta aúlica: granates, dorados y beiges en armonía con la identidad BENKYOU.
const REGION_COLORS: Record<RegionId, string> = {
  hokkaido: "oklch(0.52 0.09 20)",
  tohoku: "oklch(0.42 0.11 12)",
  kanto: "oklch(0.34 0.12 10)",
  chubu: "oklch(0.62 0.10 75)",
  kansai: "oklch(0.72 0.11 85)",
  chugoku: "oklch(0.55 0.07 40)",
  shikoku: "oklch(0.47 0.10 25)",
  kyushu: "oklch(0.80 0.09 88)",
};

const PREFECTURE_TONES = [
  "oklch(0.34 0.12 10)",
  "oklch(0.42 0.11 14)",
  "oklch(0.50 0.09 20)",
  "oklch(0.60 0.10 60)",
  "oklch(0.70 0.11 82)",
  "oklch(0.78 0.09 88)",
  "oklch(0.56 0.07 38)",
  "oklch(0.86 0.06 85)",
];

export function JapanMap() {
  const [mode, setMode] = useState<Mode>("regiones");
  const [selectedRegion, setSelectedRegion] = useState<RegionId | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<RegionId | null>(null);
  const [selectedPrefecture, setSelectedPrefecture] = useState<Prefecture | null>(null);
  const [hoveredPrefecture, setHoveredPrefecture] = useState<number | null>(null);

  const regionById = useMemo(() => new Map(regions.map((r) => [r.id, r])), []);
  const activeRegionId = selectedRegion ?? hoveredRegion;
  const activeRegion = activeRegionId ? regionById.get(activeRegionId) ?? null : null;
  const activePrefecture = selectedPrefecture ?? (hoveredPrefecture != null ? prefectures.find((p) => p.id === hoveredPrefecture) ?? null : null);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
      <div>
        <div className="mb-6 inline-flex rounded-full border border-border bg-secondary/60 p-1" role="tablist" aria-label="Modo del mapa">
          {(["regiones", "prefecturas"] as const).map((m) => (
            <Button
              key={m}
              role="tab"
              aria-selected={mode === m}
              variant="ghost"
              onClick={() => { setMode(m); setSelectedRegion(null); setHoveredRegion(null); setSelectedPrefecture(null); setHoveredPrefecture(null); }}
              className={`rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${mode === m ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}
            >
              {m === "regiones" ? "Regiones" : "Prefecturas"}
            </Button>
          ))}
        </div>
        <div className="entry-panel relative overflow-hidden p-4 md:p-6">
          <svg viewBox="0 0 870 1160" className="mx-auto w-full max-w-xl" role="img" aria-label={mode === "regiones" ? "Mapa de las ocho regiones de Japón" : "Mapa de las 47 prefecturas de Japón"}>
            {mode === "regiones" ? regions.map((r) => (
              <path
                key={r.id}
                d={regionPaths[r.id]}
                fill={REGION_COLORS[r.id]}
                stroke="var(--background)"
                strokeWidth={activeRegion?.id === r.id ? 2.4 : 1}
                fillRule="evenodd"
                className="cursor-pointer transition-opacity duration-150 focus:outline-none focus-visible:stroke-primary"
                opacity={activeRegion == null || activeRegion.id === r.id ? 1 : 0.55}
                role="button"
                tabIndex={0}
                aria-label={`${r.ja} · ${r.es}`}
                onMouseEnter={() => setHoveredRegion(r.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                onFocus={() => setHoveredRegion(r.id)}
                onBlur={() => setHoveredRegion(null)}
                onClick={() => setSelectedRegion(r.id)}
                onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedRegion(r.id); } }}
              />
            )) : prefectures.map((p) => (
              <path
                key={p.id}
                d={p.path}
                fill={PREFECTURE_TONES[(p.id - 1) % PREFECTURE_TONES.length]}
                stroke="var(--background)"
                strokeWidth={activePrefecture?.id === p.id ? 2.4 : 1}
                className="cursor-pointer transition-opacity duration-150 focus:outline-none focus-visible:stroke-primary"
                opacity={activePrefecture == null || activePrefecture.id === p.id ? 1 : 0.55}
                role="button"
                tabIndex={0}
                aria-label={`${p.ja} · ${p.es}`}
                onMouseEnter={() => setHoveredPrefecture(p.id)}
                onMouseLeave={() => setHoveredPrefecture(null)}
                onFocus={() => setHoveredPrefecture(p.id)}
                onBlur={() => setHoveredPrefecture(null)}
                onClick={() => setSelectedPrefecture(p)}
                onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedPrefecture(p); } }}
              />
            ))}
          </svg>
        </div>
      </div>

      <aside className="space-y-6">
        <div className="entry-panel p-6">
          {mode === "regiones" && activeRegion ? (
            <div className="animate-rise">
              <p className="eyebrow">Región seleccionada</p>
              <p className="mt-3 font-japanese text-4xl text-primary">{activeRegion.ja}</p>
              <p className="mt-1 font-display text-2xl font-semibold text-foreground">{activeRegion.es}</p>
              <p className="mt-2 text-sm text-muted-foreground">Catalán: {activeRegion.ca}</p>
            </div>
          ) : mode === "prefecturas" && activePrefecture ? (
            <div className="animate-rise">
              <p className="eyebrow">Prefectura seleccionada</p>
              <p className="mt-3 font-japanese text-4xl text-primary">{activePrefecture.ja}</p>
              <p className="mt-1 font-display text-2xl font-semibold text-foreground">{activePrefecture.es}</p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Región</p>
                <p className="mt-1 flex items-baseline gap-2 text-sm">
                  <span className="font-japanese text-lg text-gold">{regionById.get(activePrefecture.region)?.ja}</span>
                  <span className="font-medium text-foreground">{regionById.get(activePrefecture.region)?.es}</span>
                </p>
              </div>
            </div>
          ) : (
            <div>
              <p className="eyebrow">Explora el mapa</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {mode === "regiones" ? "Pasa el cursor o toca una región para conocer su nombre en japonés, español y catalán." : "Pasa el cursor o toca una prefectura para conocer su nombre en japonés y la región a la que pertenece."}
              </p>
            </div>
          )}
        </div>

        {mode === "regiones" && <div className="entry-panel p-6">
          <p className="eyebrow">Las ocho regiones</p>
          <ul className="mt-4 space-y-2.5">
            {regions.map((r) => (
              <li key={r.id} className="flex items-center gap-3 text-sm">
                <span className="size-3.5 shrink-0 rounded-sm border border-border" style={{ background: REGION_COLORS[r.id] }} aria-hidden="true" />
                <span className="font-japanese text-base text-primary">{r.ja}</span>
                <span className="text-foreground">{r.es}</span>
                <span className="ml-auto min-w-0 text-right text-xs text-muted-foreground">{r.ca}</span>
              </li>
            ))}
          </ul>
        </div>}
      </aside>
    </div>
  );
}
