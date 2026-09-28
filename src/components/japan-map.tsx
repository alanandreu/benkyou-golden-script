import { useMemo, useState } from "react";
import { prefectures, regions, type Prefecture, type RegionId } from "@/lib/japan-geo";

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
  const [selected, setSelected] = useState<Prefecture | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const regionById = useMemo(() => new Map(regions.map((r) => [r.id, r])), []);
  const active = selected ?? (hovered != null ? prefectures.find((p) => p.id === hovered) ?? null : null);

  const fillFor = (p: Prefecture) =>
    mode === "regiones" ? REGION_COLORS[p.region] : PREFECTURE_TONES[(p.id - 1) % PREFECTURE_TONES.length];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
      <div>
        <div className="mb-6 inline-flex rounded-full border border-border bg-secondary/60 p-1" role="tablist" aria-label="Modo del mapa">
          {(["regiones", "prefecturas"] as const).map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              onClick={() => { setMode(m); setSelected(null); }}
              className={`rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${mode === m ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-primary"}`}
            >
              {m === "regiones" ? "Regiones" : "Prefecturas"}
            </button>
          ))}
        </div>
        <div className="entry-panel relative overflow-hidden p-4 md:p-6">
          <svg viewBox="0 0 760 860" className="mx-auto w-full max-w-xl" role="img" aria-label="Mapa político de Japón">
            {prefectures.map((p) => {
              const isActive = active?.id === p.id;
              return (
                <path
                  key={p.id}
                  d={p.path}
                  fill={fillFor(p)}
                  stroke="oklch(0.98 0.01 90)"
                  strokeWidth={isActive ? 2.4 : 1}
                  className="cursor-pointer transition-opacity duration-150"
                  opacity={active == null || isActive ? 1 : 0.55}
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(p)}
                >
                  <title>{`${p.ja} · ${p.es}`}</title>
                </path>
              );
            })}
          </svg>
        </div>
      </div>

      <aside className="space-y-6">
        <div className="entry-panel p-6">
          {active ? (
            <div className="animate-rise">
              <p className="eyebrow">{mode === "regiones" ? "Prefectura" : "Prefectura seleccionada"}</p>
              <p className="mt-3 font-japanese text-4xl text-primary">{active.ja}</p>
              <p className="mt-1 font-display text-2xl font-semibold text-foreground">{active.es}</p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Región</p>
                <p className="mt-1 flex items-baseline gap-2 text-sm">
                  <span className="font-japanese text-lg text-gold">{regionById.get(active.region)?.ja}</span>
                  <span className="font-medium text-foreground">{regionById.get(active.region)?.es}</span>
                </p>
              </div>
            </div>
          ) : (
            <div>
              <p className="eyebrow">Explora el mapa</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Pasa el cursor o toca cualquier zona del mapa para conocer su nombre en japonés y la región a la que pertenece.
              </p>
            </div>
          )}
        </div>

        <div className="entry-panel p-6">
          <p className="eyebrow">Las ocho regiones</p>
          <ul className="mt-4 space-y-2.5">
            {regions.map((r) => (
              <li key={r.id} className="flex items-center gap-3 text-sm">
                <span className="size-3.5 shrink-0 rounded-sm border border-black/10" style={{ background: REGION_COLORS[r.id] }} aria-hidden="true" />
                <span className="font-japanese text-base text-primary">{r.ja}</span>
                <span className="text-foreground">{r.es}</span>
                <span className="ml-auto text-xs text-muted-foreground">{r.ca}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
