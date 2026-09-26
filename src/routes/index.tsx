import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeftRight, ArrowRight, BookOpen, ChevronRight, Grid2X2, Puzzle, Search, Volume2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { entries, featuredEntry, searchEntries, type Entry } from "@/lib/dictionary";
import manuscript from "@/assets/benkyou-manuscript.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "BENKYOU — Diccionario japonés, catalán y español" },
    { name: "description", content: "Consulta palabras en japonés, catalán y español. Explora ejemplos, gramática, kanji, kana y juegos en BENKYOU." },
    { property: "og:title", content: "BENKYOU — Diccionario japonés, catalán y español" },
    { property: "og:description", content: "Un diccionario japonés, catalán y español para aprender con curiosidad." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

type Direction = "ja-es" | "es-ja" | "ja-ca" | "ca-ja";
const directionLabels: Record<Direction, string> = { "ja-es": "Japonés → Español", "es-ja": "Español → Japonés", "ja-ca": "Japonés → Catalán", "ca-ja": "Catalán → Japonés" };

function Index() {
  const [direction, setDirection] = useState<Direction>("ja-es");
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [selected, setSelected] = useState<Entry>(featuredEntry);
  const [speaking, setSpeaking] = useState(false);
  const results = searched ? searchEntries(query) : [];

  function submit(event: FormEvent) {
    event.preventDefault();
    setSearched(Boolean(query.trim()));
    const match = searchEntries(query)[0];
    if (match) setSelected(match);
  }
  function sample(entry: Entry) {
    setQuery(entry.japanese);
    setSelected(entry);
    setSearched(true);
    document.getElementById("resultados")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function speak() {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(selected.japanese);
    utterance.lang = "ja-JP";
    utterance.rate = 0.85;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }
  const isCatalan = direction.includes("ca");
  return (
    <main>
      <section className="atlas-section border-b border-border">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-12 md:px-10 md:pb-20 md:pt-17">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary"><span className="h-px w-7 bg-gold" />El atlas de las palabras <span className="text-gold">/</span> 01</div>
          <div className="atlas-stack relative">
            <div className="atlas-back atlas-back-one" aria-hidden="true" /><div className="atlas-back atlas-back-two" aria-hidden="true" />
            <div className="atlas-front relative isolate overflow-hidden rounded-md bg-primary text-primary-foreground">
              <img src={manuscript} width={1408} height={896} alt="Libro japonés abierto sobre una mesa de escritura con pincel" className="absolute inset-0 h-full w-full object-cover object-center opacity-35" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/30" />
              <div className="relative max-w-3xl px-6 py-10 sm:px-10 md:px-14 md:py-14">
                <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold"><span className="h-px w-8 bg-gold" /> BENKYOU · 辞典</div>
                <h1 className="font-display text-[clamp(2.8rem,6.2vw,5.6rem)] leading-[0.94] font-medium">Cada palabra abre<br /><em className="font-normal text-gold-light">un mundo.</em></h1>
                <p className="mt-6 max-w-md text-sm leading-7 text-primary-foreground/80 md:text-base">Del japonés al catalán y al español. Descubre el significado, la lectura y la historia que hay detrás de cada palabra.</p>
                <form onSubmit={submit} className="mt-8 max-w-[660px]">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light">Dirección</span>
                    <select aria-label="Dirección de traducción" className="cursor-pointer rounded border border-gold/50 bg-primary/70 px-3 py-1.5 text-xs text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-gold" value={direction} onChange={(event) => setDirection(event.target.value as Direction)}>
                      {Object.entries(directionLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                    </select>
                    <Button type="button" size="icon" variant="ghost" className="size-8 text-gold-light hover:bg-primary-foreground/10" title="Invertir dirección" aria-label="Invertir dirección" onClick={() => setDirection(direction === "ja-es" ? "es-ja" : direction === "es-ja" ? "ja-es" : direction === "ja-ca" ? "ca-ja" : "ja-ca")}><ArrowLeftRight /></Button>
                  </div>
                  <div className="flex min-h-15 items-center gap-2 rounded-md border border-gold/35 bg-background p-1.5 shadow-lg shadow-primary/10">
                    <Search className="ml-3 size-5 shrink-0 text-gold" />
                    <input aria-label="Buscar palabra" value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent px-2 text-sm text-foreground outline-none placeholder:text-muted-foreground sm:text-base" placeholder={direction.startsWith("ja") ? "Busca 桜, sakura, ありがとう..." : isCatalan ? "Busca llum, gat, paraula..." : "Busca luz, gato, palabra..."} />
                    <Button type="submit" className="h-11 shrink-0 px-5">Buscar <ArrowRight /></Button>
                  </div>
                </form>
                <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs"><span className="mr-1 text-primary-foreground/65">Explora</span>{entries.slice(0, 3).map((entry) => <Button key={entry.id} onClick={() => sample(entry)} variant="outline" size="sm" className="h-8 border-primary-foreground/30 bg-primary/40 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground">{entry.japanese} <span className="text-gold-light">·</span> {isCatalan ? entry.ca : entry.es}</Button>)}</div>
              </div>
            </div>
          </div>
          <div id="resultados" className="mt-18 scroll-mt-8">
            <div className="section-heading"><span>{searched ? (results.length ? `${results.length} ${results.length === 1 ? "resultado" : "resultados"}` : "Sin resultados") : "Una palabra para empezar"}</span><span className="section-rule" /><span className="font-japanese normal-case tracking-normal">言葉の世界</span></div>
            {searched && results.length === 0 ? <div className="mt-5 border border-border bg-card px-6 py-9 text-sm text-muted-foreground">No encontramos «{query}» en esta selección. Prueba con 桜, sakura, luz, llum o gato.</div> : <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
              <article className="entry-panel animate-rise border border-border bg-card p-6 md:p-9">
                {searched && results.length > 1 && <div className="mb-6 flex flex-wrap gap-2">{results.map((entry) => <Button key={entry.id} onClick={() => setSelected(entry)} variant={selected.id === entry.id ? "default" : "porcelain"} size="sm">{entry.japanese} · {entry.romaji}</Button>)}</div>}
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div><div className="flex items-baseline gap-4"><h2 className="font-japanese text-[clamp(3.5rem,8vw,6rem)] leading-none text-primary">{selected.japanese}</h2><Button onClick={speak} variant="ghost" size="icon" title="Escuchar pronunciación" aria-label="Escuchar pronunciación" className={speaking ? "text-gold" : "text-muted-foreground"}><Volume2 /></Button></div><div className="mt-3 flex flex-wrap items-center gap-3"><span className="font-japanese text-lg text-foreground">{selected.kana}</span><span className="text-gold">/</span><span className="font-display text-xl italic text-muted-foreground">{selected.romaji}</span></div><div className="mt-5 flex flex-wrap gap-2"><span className="entry-tag">{selected.type}</span><span className="entry-tag">JLPT {selected.level}</span><span className="entry-tag">{selected.strokes}</span></div></div>
                  <div className="min-w-[190px] border-l-2 border-gold pl-5"><p className="eyebrow">Traducción</p><div className="mt-3 space-y-3"><div><span className="lang-label">CA</span><span className="text-base font-semibold text-primary">{selected.ca}</span></div><div><span className="lang-label">ES</span><span className="text-base font-semibold text-primary">{selected.es}</span></div></div></div>
                </div>
                <div className="mt-8 border-t border-border pt-6"><p className="eyebrow mb-4">En contexto</p><p className="font-japanese text-xl text-foreground">{selected.example}</p><p className="mt-3 text-sm text-foreground"><span className="lang-label">CA</span>{selected.exampleCa}</p><p className="mt-1 text-sm text-muted-foreground"><span className="lang-label">ES</span>{selected.exampleEs}</p></div>
                <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-6"><Button asChild variant="porcelain" size="sm"><Link to="/caracteres">Explorar caracteres <ChevronRight /></Link></Button><Button asChild variant="ghost" size="sm"><Link to="/gramatica">Ver gramática <ArrowRight /></Link></Button></div>
              </article>
              <aside className="flex flex-col gap-4"><div className="border border-border bg-secondary/70 p-6"><p className="eyebrow">Palabras cercanas</p><div className="mt-4 space-y-1">{entries.filter((entry) => entry.id !== selected.id).slice(0, 4).map((entry) => <Button key={entry.id} onClick={() => sample(entry)} variant="ghost" className="flex h-auto w-full justify-between px-0 py-2 text-left hover:bg-transparent hover:text-primary"><span className="font-japanese text-lg">{entry.japanese}</span><span className="truncate pl-2 text-xs text-muted-foreground">{isCatalan ? entry.ca : entry.es}</span></Button>)}</div></div><div className="border border-gold/30 bg-gold-pale p-6"><span className="font-japanese text-3xl text-primary">学</span><h3 className="mt-2 font-display text-2xl font-semibold text-primary">Aprender es descubrir.</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">Una palabra lleva a una escritura, una regla y una nueva forma de mirar.</p></div></aside>
            </div>}
          </div>
          <div className="mt-16"><div className="section-heading"><span>Continúa explorando</span><span className="section-rule" /><span>02 / 04</span></div><div className="mt-5 grid gap-4 md:grid-cols-3"><ExploreCard to="/gramatica" index="01" title="Gramática" japanese="文法" description="Las estructuras que dan sentido a cada frase." icon={<BookOpen className="size-4" />} /><ExploreCard to="/caracteres" index="02" title="Kanji & Kana" japanese="漢字" description="De los primeros trazos a los caracteres cotidianos." icon={<Grid2X2 className="size-4" />} /><ExploreCard to="/juegos" index="03" title="Minijuegos" japanese="遊び" description="Memoria y práctica para aprender jugando." icon={<Puzzle className="size-4" />} /></div></div>
        </div>
      </section>
    </main>
  );
}

function ExploreCard({ to, index, title, japanese, description, icon }: { to: "/gramatica" | "/caracteres" | "/juegos"; index: string; title: string; japanese: string; description: string; icon: React.ReactNode }) {
  return <Link to={to} className="explore-card group border border-border bg-card p-6"><div className="flex items-start justify-between text-gold"><span className="eyebrow">{index} / BENKYOU</span>{icon}</div><div className="mt-8 font-japanese text-4xl text-primary">{japanese}</div><div className="mt-4 flex items-center justify-between"><h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3><ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" /></div><p className="mt-2 text-xs leading-6 text-muted-foreground">{description}</p></Link>;
}