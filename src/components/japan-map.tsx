import { useMemo, useState } from "react";
import { prefectures, regions, type Prefecture, type RegionId } from "@/lib/japan-geo";
import { regionPaths } from "@/lib/japan-regions";
import { Button } from "@/components/ui/button";

type Mode = "regiones" | "prefecturas";

// Okinawa, Ryūkyū y Senkaku se recortan del mapa principal y se muestran ampliadas en el espacio libre, señaladas como islas alejadas.
const INSET_SOURCE = "M-268,936 H70 V1182 H-268 Z";
const INSET_SCALE = 1.05;

// Territorios cuya soberanía está en disputa: se señalan aparte, sin integrarlos en regiones ni prefecturas.
interface Territory { id: string; ja: string; es: string; ca: string; x: number; y: number; r: number; note: string }
const TERRITORIES: Territory[] = [
  { id: "kuriles", ja: "北方領土", es: "Islas Kuriles del Sur", ca: "Illes Kurils del Sud", x: 775, y: 95, r: 34, note: "Administradas por Rusia; Japón las reclama como parte de Hokkaidō." },
  { id: "liancourt", ja: "竹島", es: "Rocas de Liancourt", ca: "Roques de Liancourt", x: 124, y: 499, r: 12, note: "Administradas por Corea del Sur (Dokdo); Japón las reclama como parte de Shimane." },
  { id: "senkaku", ja: "尖閣諸島", es: "Islas Senkaku", ca: "Illes Senkaku", x: -238, y: 1080, r: 14, note: "Administradas por Japón (Okinawa); China y Taiwán las reclaman (Diaoyu / Tiaoyutai)." },
];

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
  const [territory, setTerritory] = useState<Territory | null>(null);

  const regionById = useMemo(() => new Map(regions.map((r) => [r.id, r])), []);
  const activeRegionId = selectedRegion ?? hoveredRegion;
  const activeRegion = activeRegionId ? regionById.get(activeRegionId) ?? null : null;
  const activePrefecture = selectedPrefecture ?? (hoveredPrefecture != null ? prefectures.find((p) => p.id === hoveredPrefecture) ?? null : null);

  const renderLayer = (inset: boolean) => (
    <>
      {inset && mode === "regiones" && prefectures.filter((p) => p.region === "kyushu").map((p) => (
        <path
          key={`inset-ky-${p.id}`}
          d={p.path}
          fill={REGION_COLORS.kyushu}
          opacity={activeRegion == null || activeRegion.id === "kyushu" ? 1 : 0.55}
          className="cursor-pointer transition-opacity duration-150"
          onMouseEnter={() => setHoveredRegion("kyushu")}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => { setTerritory(null); setSelectedRegion("kyushu"); }}
        />
      ))}
            {mode === "regiones" ? regions.map((r) => (
              <path
                key={`${inset}-${r.id}`}
                d={regionPaths[r.id]}
                fill={REGION_COLORS[r.id]}
                stroke="var(--background)"
                strokeWidth={(activeRegion?.id === r.id ? 2.4 : 1) / (inset ? INSET_SCALE : 1)}
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
                onClick={() => { setTerritory(null); setSelectedRegion(r.id); }}
                onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedRegion(r.id); } }}
              />
            )) : prefectures.map((p) => (
              <path
                key={`${inset}-${p.id}`}
                d={p.path}
                fill={PREFECTURE_TONES[(p.id - 1) % PREFECTURE_TONES.length]}
                stroke="var(--background)"
                strokeWidth={(activePrefecture?.id === p.id ? 2.4 : 1) / (inset ? INSET_SCALE : 1)}
                className="cursor-pointer transition-opacity duration-150 focus:outline-none focus-visible:stroke-primary"
                opacity={activePrefecture == null || activePrefecture.id === p.id ? 1 : 0.55}
                role="button"
                tabIndex={0}
                aria-label={`${p.ja} · ${p.es}`}
                onMouseEnter={() => setHoveredPrefecture(p.id)}
                onMouseLeave={() => setHoveredPrefecture(null)}
                onFocus={() => setHoveredPrefecture(p.id)}
                onBlur={() => setHoveredPrefecture(null)}
                onClick={() => { setTerritory(null); setSelectedPrefecture(p); }}
                onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedPrefecture(p); } }}
              />
            ))}
            {TERRITORIES.map((t) => (
              <g
                key={`${inset}-${t.id}`}
                role="button"
                tabIndex={0}
                aria-label={`${t.ja} · ${t.es} (territorio en disputa)`}
                className="cursor-pointer focus:outline-none"
                onClick={() => setTerritory(t)}
                onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setTerritory(t); } }}
              >
                <circle cx={t.x} cy={t.y} r={t.r} fill="var(--gold)" fillOpacity={territory?.id === t.id ? 0.35 : 0.15} stroke="var(--gold)" strokeWidth={2} strokeDasharray="5 4" />
                <circle cx={t.x} cy={t.y} r={3.5} fill="var(--primary)" />
              </g>
            ))}
    </>
  );

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
              onClick={() => { setMode(m); setSelectedRegion(null); setHoveredRegion(null); setSelectedPrefecture(null); setHoveredPrefecture(null); setTerritory(null); }}
              className={`rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${mode === m ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}
            >
              {m === "regiones" ? "Regiones" : "Prefecturas"}
            </Button>
          ))}
        </div>
        <div className="entry-panel relative overflow-hidden p-4 md:p-6">
          <svg viewBox="-20 0 890 1162" className="mx-auto w-full max-w-xl" role="img" aria-label={mode === "regiones" ? "Mapa de las ocho regiones de Japón" : "Mapa de las 47 prefecturas de Japón"}>
            <defs>
              <clipPath id="jp-main-clip"><path clipRule="evenodd" d={`M-400,-100 H1300 V1400 H-400 Z ${INSET_SOURCE}`} /></clipPath>
              <clipPath id="jp-inset-clip"><path d={INSET_SOURCE} /></clipPath>
            </defs>
            <g clipPath="url(#jp-main-clip)">{renderLayer(false)}</g>
            <g aria-label="Islas alejadas: Okinawa, islas Ryūkyū y Senkaku, ampliadas para mayor visibilidad">
              <line x1={402} y1={890} x2={448} y2={906} stroke="var(--gold)" strokeWidth={1} strokeDasharray="2 6" strokeLinecap="round" opacity={0.8} />
              <rect x={4} y={874} width={404} height={284} rx={28} fill="var(--secondary)" fillOpacity={0.3} stroke="var(--gold)" strokeOpacity={0.6} strokeWidth={1} strokeDasharray="7 6" />
              <text x={30} y={904} fill="var(--primary)" fontSize={12} letterSpacing={2} className="font-japanese">沖縄・琉球諸島</text>
              <text x={30} y={919} fill="var(--muted-foreground)" fontSize={9} letterSpacing={0.5}>Islas alejadas · ampliadas para mayor visibilidad</text>
              <g transform={`translate(30 892) scale(${INSET_SCALE}) translate(268 -936)`}>
                <g clipPath="url(#jp-inset-clip)">{renderLayer(true)}</g>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <aside className="space-y-6">
        <div className="entry-panel p-6">
          {territory ? (
            <div className="animate-rise">
              <p className="eyebrow">Territorio en disputa</p>
              <p className="mt-3 font-japanese text-4xl text-primary">{territory.ja}</p>
              <p className="mt-1 font-display text-2xl font-semibold text-foreground">{territory.es}</p>
              <p className="mt-2 text-sm text-muted-foreground">Catalán: {territory.ca}</p>
              <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">{territory.note}</p>
            </div>
          ) : mode === "regiones" && activeRegion ? (
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

        <div className="entry-panel p-6">
          <p className="eyebrow">Territorios en disputa</p>
          <ul className="mt-4 space-y-2.5">
            {TERRITORIES.map((t) => (
              <li key={t.id}>
                <button type="button" onClick={() => setTerritory(t)} className="flex w-full items-center gap-3 text-left text-sm hover:text-primary">
                  <span className="size-3.5 shrink-0 rounded-full border border-dashed border-gold bg-gold/20" aria-hidden="true" />
                  <span className="font-japanese text-base text-primary">{t.ja}</span>
                  <span className="text-foreground">{t.es}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Se señalan con círculo dorado discontinuo. Su soberanía es objeto de disputa internacional.</p>
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
