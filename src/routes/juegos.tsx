import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StrokeOrderGame } from "@/components/stroke-order-game";
import { FillSentenceGame } from "@/components/fill-sentence-game";
import { jlptLevels, type JlptLevel } from "@/lib/kanji-strokes";

export const Route = createFileRoute("/juegos")({ head: () => ({ meta: [
  { title: "Minijuegos de japonés — BENKYOU" }, { name: "description", content: "Practica japonés con juegos de memoria y orden de trazos de kanji." },
  { property: "og:title", content: "Minijuegos de japonés — BENKYOU" }, { property: "og:description", content: "Practica japonés con juegos de memoria y orden de trazos de kanji." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: GamesPage });

type LevelFilter = JlptLevel | "Todos";
const levelOptions: LevelFilter[] = ["Todos", ...jlptLevels];

type Pair = { ja: string; es: string; level: JlptLevel };
// Small demonstration set; four pairs per level.
const allPairs: Pair[] = [
  { ja: "猫", es: "gato", level: "N5" },
  { ja: "山", es: "montaña", level: "N5" },
  { ja: "水", es: "agua", level: "N5" },
  { ja: "花", es: "flor", level: "N5" },
  { ja: "趣味", es: "afición", level: "N4" },
  { ja: "大切", es: "importante", level: "N4" },
  { ja: "住所", es: "dirección", level: "N4" },
  { ja: "経験", es: "experiencia", level: "N4" },
  { ja: "環境", es: "entorno", level: "N3" },
  { ja: "影響", es: "influencia", level: "N3" },
  { ja: "改善", es: "mejora", level: "N3" },
  { ja: "増加", es: "aumento", level: "N3" },
  { ja: "妥協", es: "compromiso", level: "N2" },
  { ja: "貢献", es: "contribución", level: "N2" },
  { ja: "傾向", es: "tendencia", level: "N2" },
  { ja: "曖昧", es: "ambiguo", level: "N2" },
  { ja: "顕著", es: "notable", level: "N1" },
  { ja: "慣習", es: "costumbre", level: "N1" },
  { ja: "錯綜", es: "entramado", level: "N1" },
  { ja: "揶揄", es: "burla", level: "N1" },
];

type Card = { key: string; pair: number; label: string };
function buildDeck(pairs: Pair[]): Card[] {
  return pairs
    .flatMap((pair, id) => [{ key: `ja-${id}`, pair: id, label: pair.ja }, { key: `es-${id}`, pair: id, label: pair.es }])
    .sort(() => Math.random() - 0.5);
}
function pickPairs(level: LevelFilter): Pair[] {
  const pool = level === "Todos" ? allPairs : allPairs.filter((pair) => pair.level === level);
  return [...pool].sort(() => Math.random() - 0.5).slice(0, 4);
}

function GamesPage() {
  const [level, setLevel] = useState<LevelFilter>("N5");
  const [pairs, setPairs] = useState<Pair[]>(() => allPairs.slice(0, 4));
  const [deck, setDeck] = useState<Card[]>(() => buildDeck(allPairs.slice(0, 4)));
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  function flip(key: string, pair: number) {
    if (locked || flipped.includes(key) || matched.includes(pair)) return;
    const next = [...flipped, key];
    setFlipped(next);
    if (next.length === 2) {
      setMoves((count) => count + 1);
      const first = deck.find((card) => card.key === next[0]);
      if (first?.pair === pair) { setMatched((current) => [...current, pair]); setFlipped([]); }
      else { setLocked(true); window.setTimeout(() => { setFlipped([]); setLocked(false); }, 850); }
    }
  }

  function startRound(nextLevel: LevelFilter) {
    const nextPairs = pickPairs(nextLevel);
    setLevel(nextLevel);
    setPairs(nextPairs);
    setDeck(buildDeck(nextPairs));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setLocked(false);
  }

  function restart() { startRound(level); }

  return <main className="min-h-[75vh] bg-background">
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-18">
      <p className="eyebrow">BENKYOU / Práctica</p>
      <h1 className="mt-3 font-display text-6xl text-primary md:text-8xl">Minijuegos <span className="font-japanese text-4xl text-gold md:text-6xl">ミニゲーム</span></h1>
      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">Aprender también es jugar. Practica vocabulario y escritura japonesa por nivel JLPT, o mezcla todo con «Todos».</p>
      <div className="mt-11 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="border-t-2 border-gold pt-6">
          <p className="eyebrow">01 / Memoria</p>
          <h2 className="mt-3 font-display text-4xl text-primary">Encuentra la pareja</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">Destapa dos cartas y relaciona cada palabra japonesa con su significado.</p>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Nivel JLPT">
            {levelOptions.map((option) => <Button key={option} size="sm" variant={option === level ? "default" : "porcelain"} aria-pressed={option === level} onClick={() => startRound(option)}>{option}</Button>)}
          </div>
          <div className="mt-7 flex items-center justify-between border-y border-border py-4 text-sm"><span>Movimientos</span><span className="font-semibold text-primary">{moves}</span></div>
          <div className="flex items-center justify-between border-b border-border py-4 text-sm"><span>Parejas</span><span className="font-semibold text-primary">{matched.length} / {pairs.length}</span></div>
          <Button onClick={restart} variant="porcelain" className="mt-7"><RotateCcw /> Reiniciar</Button>
        </aside>
        <div className="border border-border bg-card p-5 sm:p-8">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {deck.map((card) => {
              const revealed = flipped.includes(card.key) || matched.includes(card.pair);
              return <Button key={card.key} onClick={() => flip(card.key, card.pair)} aria-label={revealed ? card.label : "Carta boca abajo"} aria-pressed={revealed} variant="ghost" className={`aspect-[4/5] h-auto w-full rounded-sm border p-1 text-center transition-all duration-200 ${revealed ? "border-gold bg-gold-pale text-primary" : "border-primary bg-primary text-gold-light hover:bg-primary/90 hover:text-gold-light"}`}>
                <span className={revealed ? "font-japanese text-lg sm:text-3xl" : "font-display text-3xl sm:text-5xl"}>{revealed ? card.label : "✦"}</span>
              </Button>;
            })}
          </div>
          {matched.length === pairs.length && <div role="status" className="mt-6 border-t border-border pt-5 font-display text-2xl text-primary">¡Todas las parejas encontradas! <span className="text-sm text-muted-foreground">{moves} movimientos</span></div>}
          <p className="mt-7 border-t border-border pt-4 text-[11px] text-muted-foreground">Selección de demostración: 4 parejas por nivel. Con «Todos» se mezclan palabras de cualquier nivel.</p>
        </div>
      </div>
      <StrokeOrderGame />
      <FillSentenceGame />
    </div>
  </main>;
}
