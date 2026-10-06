// ============= Full file contents =============

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

// Categorías del sistema administrativo (todōfuken), derivadas del sufijo del nombre japonés.
type PrefType = "to" | "do" | "fu" | "ken";
const PREF_TYPE_INFO: Record<PrefType, { ja: string; es: string; ca: string }> = {
  to: { ja: "都", es: "To", ca: "To" },
  do: { ja: "道", es: "Dō", ca: "Dō" },
  fu: { ja: "府", es: "Fu", ca: "Fu" },
  ken: { ja: "県", es: "Ken", ca: "Ken" },
};
const prefectureType = (p: Prefecture): PrefType => {
  const last = p.ja.slice(-1);
  return last === "都" ? "to" : last === "道" ? "do" : last === "府" ? "fu" : "ken";
};

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
    <>
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
      <div>
        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-border pb-5">
          <span className="eyebrow shrink-0">01 / Modo de visualización</span>
          <div className="inline-flex rounded-full border border-border bg-secondary/60 p-1" role="tablist" aria-label="Modo del mapa">
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
        </div>
        <div className="map-plate relative overflow-hidden p-4 md:p-6">
          <svg viewBox="-20 0 890 1080" className="mx-auto w-full" role="img" aria-label={mode === "regiones" ? "Mapa de las ocho regiones de Japón" : "Mapa de las 47 prefecturas de Japón"}>
            <defs>
              <clipPath id="jp-main-clip"><path clipRule="evenodd" d={`M-400,-100 H1300 V1400 H-400 Z ${INSET_SOURCE}`} /></clipPath>
              <clipPath id="jp-inset-clip"><path d={INSET_SOURCE} /></clipPath>
            </defs>
            <g clipPath="url(#jp-main-clip)">{renderLayer(false)}</g>
            <g aria-label="Islas alejadas: Okinawa, islas Ryūkyū y Senkaku, ampliadas para mayor visibilidad">
              <path d="M400,1020 V750 Q400,724 426,724 H844" fill="none" stroke="var(--gold)" strokeOpacity={0.6} strokeWidth={1} strokeDasharray="7 6" strokeLinecap="round" />
              <text x={428} y={757} fill="var(--primary)" fontSize={16} className="font-japanese">沖縄・琉球諸島</text>
              <text x={428} y={779} fill="var(--muted-foreground)" fontSize={12}>Islas alejadas · ampliadas para mayor visibilidad</text>
              <g transform={`translate(428 748) scale(${INSET_SCALE}) translate(268 -936)`}>
                <g clipPath="url(#jp-inset-clip)">{renderLayer(true)}</g>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <aside className="space-y-6">
        <div className="panel-plate-accent bg-background p-8">
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

        {mode === "regiones" && <div className="panel-hero p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light">Las ocho regiones</p>
          <ul className="mt-4">
            {regions.map((r) => (
              <li key={r.id} className="panel-hero-rule flex items-center gap-3 border-b py-2.5 text-sm last:border-b-0 last:pb-0 first:pt-0">
                <span className="size-3.5 shrink-0 rounded-sm" style={{ background: REGION_COLORS[r.id] }} aria-hidden="true" />
                <span className="font-japanese text-base text-gold-light">{r.ja}</span>
                <span className="text-primary-foreground/90">{r.es}</span>
                <span className="ml-auto min-w-0 text-right text-xs text-primary-foreground/55">{r.ca}</span>
              </li>
            ))}
          </ul>
        </div>}

        <div className="panel-tint p-8">
          <p className="eyebrow">Territorios en disputa</p>
          <ul className="mt-5 space-y-3.5">
            {TERRITORIES.map((t) => (
              <li key={t.id}>
                <button type="button" onClick={() => setTerritory(t)} className="flex w-full items-center gap-3 text-left text-sm transition-colors hover:text-primary">
                  <span className="size-2.5 shrink-0 rounded-full border border-dashed border-gold bg-gold/25" aria-hidden="true" />
                  <span className="font-japanese text-base text-primary">{t.ja}</span>
                  <span className="text-foreground">{t.es}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-l-2 border-border pl-4 text-xs italic leading-relaxed text-muted-foreground">Se señalan con círculo dorado discontinuo. Su soberanía es objeto de disputa internacional.</p>
        </div>
      </aside>
    </div>

    {mode === "prefecturas" && (
      <section className="mt-14">
        <div className="panel-tint relative overflow-hidden rounded-sm p-6 sm:p-10 md:p-12">
          <span aria-hidden="true" className="pointer-events-none absolute right-5 top-4 select-none font-japanese text-7xl leading-none text-primary opacity-[0.06] md:right-10 md:top-8 md:text-8xl">都道府県</span>

          <div className="relative">
            <p className="eyebrow">都道府県 · Todōfuken</p>
            <h2 className="section-heading mt-3">Tipos de prefecturas</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              El sistema administrativo japonés (都道府県 / todōfuken) divide el territorio en cuatro categorías,
              cada una con su propio sufijo en el nombre:
            </p>
          </div>

          <div className="relative mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {([
              { type: "to" as PrefType, count: "1 prefectura metropolitana", body: "Corresponde a Tokio.", prefectures: ["Tokio"] },
              { type: "do" as PrefType, count: "1 territorio o circuito", body: "Corresponde a Hokkaidō.", prefectures: ["Hokkaidō"] },
              { type: "fu" as PrefType, count: "2 prefecturas urbanas", body: "Son Osaka y Kioto.", prefectures: ["Osaka", "Kioto"] },
              { type: "ken" as PrefType, count: "43 prefecturas rurales o comunes", body: "El resto del país.", prefectures: [] },
            ]).map((c, i) => {
              const info = PREF_TYPE_INFO[c.type];
              const accent = i === 0 ? "border-l-primary" : i === 1 ? "border-l-gold" : i === 2 ? "border-l-primary/50" : "border-l-border";
              return (
                <div key={c.type} className={`bg-background border border-border border-l-4 p-6 shadow-[0_10px_24px_-18px_color-mix(in_oklab,var(--primary)_30%,transparent)] transition-shadow hover:shadow-[0_16px_30px_-16px_color-mix(in_oklab,var(--primary)_40%,transparent)] ${accent}`}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{`0${i + 1} / 04`}</p>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="font-japanese text-4xl text-primary">{info.ja}</span>
                    <span className="font-display text-lg font-semibold text-foreground">{info.es}</span>
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">{c.count}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                </div>
              );
            })}
          </div>

          <h3 className="mt-14 text-center font-display text-2xl font-semibold text-foreground md:text-3xl">Las 47 prefecturas</h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Toca o pulsa una prefectura para verla resaltada en el mapa. El sufijo indica su categoría.
          </p>
          <div className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {prefectures.map((p, i) => {
              const info = PREF_TYPE_INFO[prefectureType(p)];
              const active = activePrefecture?.id === p.id;
              const isTokyo = p.id === 13;
              const tinted = !isTokyo && i % 2 === 1;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => { setTerritory(null); setSelectedPrefecture(p); }}
                  aria-label={`${p.ja} · ${p.es} (${info.es})`}
                  className={`flex flex-col items-start gap-1 p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isTokyo ? "pref-grid-card pref-card-tokyo" : "pref-grid-card"} ${tinted ? "bg-secondary/40" : isTokyo ? "" : "bg-background"} ${active ? (isTokyo ? "ring-2 ring-gold ring-offset-2" : "ring-2 ring-primary ring-offset-2") : ""}`}
                >
                  <span className={`flex w-full items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] ${isTokyo ? "text-gold-light" : "text-muted-foreground"}`}>
                    <span>{String(i + 1).padStart(2, "0")} / {info.ja}</span>
                    <span className={`size-1 rounded-full ${i % 3 === 0 ? "bg-gold" : "bg-transparent"}`} aria-hidden="true" />
                  </span>
                  <span className={`mt-2 font-japanese text-xl leading-snug ${isTokyo ? "text-primary-foreground" : "text-primary"}`}>{p.ja}</span>
                  <span className={`text-sm font-medium ${isTokyo ? "text-primary-foreground/90" : "text-foreground"}`}>{p.es}</span>
                  <span className={`mt-1 flex items-center gap-1.5 text-xs ${isTokyo ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    <span className={`font-japanese text-sm ${isTokyo ? "text-gold-light" : "text-gold"}`}>{info.ja}</span>
                    <span>{info.es}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    )}
    </>
  );
}
