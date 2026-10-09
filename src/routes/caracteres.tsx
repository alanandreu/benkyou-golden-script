import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { characterGroups, findCharacter, type Script } from "@/lib/kana";

const scripts: Script[] = ["Hiragana", "Katakana", "Kanji", "Man’yōgana"];
export const Route = createFileRoute("/caracteres")({
  validateSearch: (search: Record<string, unknown>): { script?: Script } => ({
    script: scripts.includes(search["script"] as Script) ? search["script"] as Script : "Hiragana",
  }),
  head: () => ({ meta: [
    { title: "Hiragana, katakana y man’yōgana — BENKYOU" },
    { name: "description", content: "Silabarios japoneses con kana básicos, variantes sonoras, formas obsoletas, hentaigana y una selección histórica de man’yōgana." },
    { property: "og:title", content: "Hiragana, katakana y man’yōgana — BENKYOU" },
    { property: "og:description", content: "Explora los kana modernos e históricos y los primeros kanji en BENKYOU." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: CharactersPage,
});

function CharactersPage() {
  const { script } = Route.useSearch();
  return <CharacterCatalog key={script} script={script ?? "Hiragana"} />;
}

function CharacterCatalog({ script }: { script: Script }) {
  const [selected, setSelected] = useState<string>();
  const [category, setCategory] = useState("all");
  const result = findCharacter(script, selected);
  if (!result) return null;
  const { character, group: selectedGroup } = result;
  const groups = characterGroups[script];
  const visibleGroups = category === "all" ? groups : groups.filter((g) => g.id === category);
  const count = groups.reduce((sum, g) => sum + g.characters.length, 0);
  const historical = ["archaic", "hentaigana", "examples"].includes(selectedGroup.id);

  return <main className="min-h-[75vh] bg-background">
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-10 md:py-14">
      <p className="eyebrow">BENKYOU / Escritura</p>
      <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3">
        <h1 className="min-w-0 font-display text-5xl text-primary sm:text-6xl md:text-7xl">Kanji & Kana</h1>
        <span className="shrink-0 font-japanese text-3xl text-gold md:text-5xl">文字</span>
      </div>
      <nav className="mt-7 grid grid-cols-2 gap-2 border-b border-border pb-5 sm:flex" aria-label="Sistemas de escritura">
        {scripts.map((name) => <Button key={name} asChild variant={script === name ? "default" : "porcelain"} className="min-w-0 sm:min-w-28">
          <Link to="/caracteres" search={{ script: name }} aria-current={script === name ? "page" : undefined}>{name}</Link>
        </Button>)}
      </nav>

      <div className="mt-5 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
        <aside aria-label="Ficha de carácter" className="sticky top-0 z-10 order-first border-b-2 border-gold bg-background py-3 lg:order-last lg:top-5 lg:border-b-0 lg:border-t-2 lg:py-6">
          <div className="grid grid-cols-[104px_minmax(0,1fr)] gap-4 sm:grid-cols-[128px_minmax(0,1fr)] lg:grid-cols-1">
            <div className="grid aspect-square place-items-center border border-border bg-secondary/40 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:50%_50%] font-japanese text-5xl text-primary sm:text-6xl lg:aspect-square lg:text-8xl" lang="ja">{character.glyph}</div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase text-gold">{historical ? "Ficha histórica" : "Ficha de carácter"} / {script}</p>
              <h2 className="mt-1 break-words font-display text-3xl text-primary lg:mt-4 lg:text-4xl">{character.reading.replaceAll("-", " ")}</h2>
              <p className="mt-1 text-[11px] text-muted-foreground lg:mt-2">{selectedGroup.title}</p>
              {character.strokes !== undefined && <p className="mt-2 text-xs text-muted-foreground">{character.strokes} {character.strokes === 1 ? "trazo" : "trazos"}</p>}
              <p className="mt-3 hidden text-xs leading-6 text-muted-foreground lg:block">{character.note ?? (script === "Kanji" ? "Significado orientativo; cada kanji puede tener varias lecturas según la palabra." : character.glyph === "を" || character.glyph === "ヲ" ? "Romanizado wo; en japonés moderno se pronuncia normalmente o. を se conserva como partícula." : "Lectura de referencia del silabario japonés.")}</p>
            </div>
          </div>
          {character.note && <p className="mt-2 line-clamp-3 text-[11px] leading-5 text-muted-foreground lg:hidden">{character.note}</p>}
        </aside>

        <div className="min-w-0">
          <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <div className="min-w-0"><h2 className="font-display text-3xl text-primary">{script}</h2><p className="mt-1 text-xs text-muted-foreground">{count} {script === "Man’yōgana" ? "ejemplos seleccionados" : "formas y combinaciones"}</p></div>
            <select aria-label="Categoría de caracteres" value={category} onChange={(e) => { const id = e.target.value; setCategory(id); if (id !== "all") setSelected(groups.find((g) => g.id === id)?.characters[0]?.glyph); }} className="h-10 w-36 min-w-0 rounded-sm border border-border bg-card px-2 text-xs text-primary sm:w-52">
              <option value="all">Todas las categorías</option>
              {groups.map((g) => <option key={g.id} value={g.id}>{g.title}</option>)}
            </select>
          </div>
          {visibleGroups.map((group) => <section key={group.id} className="mb-8" aria-labelledby={`group-${group.id}`}>
            <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border pb-2">
              <h3 id={`group-${group.id}`} className="min-w-0 text-sm font-semibold text-primary">{group.title}</h3><span className="shrink-0 text-xs text-gold">{group.characters.length}</span>
            </div>
            {group.description && <p className="mb-4 max-w-2xl text-xs leading-6 text-muted-foreground">{group.description}</p>}
            <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-7 sm:gap-2">
              {group.characters.map((item) => <Button key={item.glyph} variant="ghost" onClick={() => setSelected(item.glyph)} aria-label={`${item.glyph}, ${item.reading}`} aria-pressed={character.glyph === item.glyph} className={`h-[66px] min-w-0 w-full flex-col gap-1 rounded-sm border px-1 py-2 sm:h-[78px] ${character.glyph === item.glyph ? "border-gold bg-gold-pale text-primary" : "border-border bg-card text-foreground hover:border-gold hover:bg-secondary"}`}>
                <span className={`font-japanese ${Array.from(item.glyph).length > 1 ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"}`} lang="ja">{item.glyph}</span>
                <span className="w-full truncate text-[10px] leading-4 text-muted-foreground">{item.reading.replaceAll("-", " ")}</span>
              </Button>)}
            </div>
          </section>)}
          {script !== "Kanji" && <div className="border-t border-border pt-5 text-xs leading-6 text-muted-foreground">
            <p>{script === "Man’yōgana" ? "Fuente de los valores fonéticos: " : "Inventario histórico y formas suplementarias: "}<a className="text-primary underline underline-offset-4" href={script === "Man’yōgana" ? "https://www.sljfaq.org/afaq/manyougana-table.html" : "https://www.unicode.org/charts/PDF/U1B000.pdf"} target="_blank" rel="noreferrer">{script === "Man’yōgana" ? "sci.lang.japan · Tabla de man’yōgana" : "Unicode · Kana Supplement"}</a>.</p>
            {script !== "Man’yōgana" && <p>Se distinguen signos, formas pequeñas y combinaciones de los kana básicos. Los préstamos admiten más combinaciones; no todas tienen el mismo uso o antigüedad.</p>}
          </div>}
        </div>
      </div>
    </div>
  </main>;
}
