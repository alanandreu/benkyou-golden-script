import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jlptLevels, strokeKanji, type JlptLevel, type StrokeKanji } from "@/lib/kanji-strokes";

type LevelFilter = JlptLevel | "Todos";
const levelOptions: LevelFilter[] = ["Todos", ...jlptLevels];

function orderFor(count: number) {
  // A stable initial order keeps the server and browser render in sync.
  return Array.from({ length: count }, (_, index) => index).sort((a, b) => ((a * 7 + 3) % count) - ((b * 7 + 3) % count));
}

function shuffled(count: number) {
  const order = Array.from({ length: count }, (_, index) => index);
  for (let index = order.length - 1; index > 0; index--) {
    const swap = Math.floor(Math.random() * (index + 1));
    [order[index], order[swap]] = [order[swap] ?? index, order[index] ?? swap];
  }
  return order;
}

function StrokePicture({ kanji, active, completed = 0, className = "" }: { kanji: StrokeKanji; active?: number; completed?: number; className?: string }) {
  return <svg viewBox="0 0 109 109" className={className} role="img" aria-label={active === undefined ? `${kanji.glyph}: ${completed} de ${kanji.strokes.length} trazos colocados` : `Trazo ${active + 1} de ${kanji.glyph}`}>
    <g fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      {kanji.strokes.map((path, index) => <path key={index} d={path} className={index === active || index < completed ? "stroke-primary" : "stroke-primary/15"} />)}
    </g>
  </svg>;
}

export function StrokeOrderGame() {
  const [level, setLevel] = useState<LevelFilter>("Todos");
  const [kanjiIndex, setKanjiIndex] = useState(0);
  const [order, setOrder] = useState(() => orderFor(strokeKanji[0]?.strokes.length ?? 0));
  const [progress, setProgress] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [feedback, setFeedback] = useState("");
  const pool = level === "Todos" ? strokeKanji : strokeKanji.filter((item) => item.level === level);
  const kanji = pool[kanjiIndex];
  const strokeCount = kanji?.strokes.length ?? 0;
  const complete = strokeCount > 0 && progress === strokeCount;

  function selectStroke(index: number) {
    if (complete || index < progress) return;
    if (index === progress) {
      setProgress(index + 1);
      setFeedback(index + 1 === strokeCount ? "¡Kanji completado!" : "¡Correcto! Continúa con el siguiente trazo.");
    } else {
      setMistakes((count) => count + 1);
      setFeedback("Todavía no. Fíjate en la forma y prueba otra carta.");
    }
  }

  function changeKanji(next: number) {
    const target = pool[next];
    if (!target) return;
    setKanjiIndex(next);
    setOrder(shuffled(target.strokes.length));
    setProgress(0);
    setMistakes(0);
    setFeedback("");
  }

  function changeLevel(next: LevelFilter) {
    const nextPool = next === "Todos" ? strokeKanji : strokeKanji.filter((item) => item.level === next);
    setLevel(next);
    setKanjiIndex(0);
    setOrder(nextPool[0] ? shuffled(nextPool[0].strokes.length) : []);
    setProgress(0);
    setMistakes(0);
    setFeedback("");
  }

  function restart() {
    setOrder(shuffled(strokeCount));
    setProgress(0);
    setMistakes(0);
    setFeedback("");
  }

  return <section className="study-section" aria-labelledby="stroke-game-title">
    <div className="grid items-start gap-6 lg:grid-cols-[280px_1fr]">
      <div>
        <p className="eyebrow">02 / Escritura</p>
        <h2 id="stroke-game-title" className="mt-3 font-display text-4xl text-primary">Orden de trazos</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">Elige las cartas en el orden en que se escribe el kanji.</p>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Nivel JLPT">
          {levelOptions.map((option) => <Button key={option} size="sm" variant="choice" aria-pressed={option === level} onClick={() => changeLevel(option)}>{option}</Button>)}
        </div>
        {pool.length > 0 && <div className="mt-4 flex flex-wrap gap-2" aria-label="Elige un kanji">
          {pool.map((item, index) => <Button key={item.glyph} variant={index === kanjiIndex ? "default" : "porcelain"} size="icon" aria-label={`Practicar ${item.glyph}, ${item.meaning}`} aria-pressed={index === kanjiIndex} onClick={() => changeKanji(index)} className="font-japanese text-lg">{item.glyph}</Button>)}
        </div>}
        <div className="mt-4 flex items-center justify-between border-y border-border py-3 text-sm"><span>Trazos</span><span className="font-semibold text-primary">{progress} / {strokeCount}</span></div>
        <div className="flex items-center justify-between border-b border-border py-3 text-sm"><span>Intentos fallidos</span><span className="font-semibold text-primary">{mistakes}</span></div>
        <Button onClick={restart} variant="porcelain" className="mt-4" disabled={!kanji}><RotateCcw /> Reiniciar</Button>
      </div>
      <div className="practice-plate">
        {kanji ? <>
          <div className="grid gap-7 md:grid-cols-[minmax(160px,230px)_1fr] md:gap-9">
            <div>
              <div className="relative aspect-square w-full max-w-[230px] border border-border bg-secondary/40 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:50%_50%] p-4">
                <StrokePicture kanji={kanji} completed={progress} className="h-full w-full" />
              </div>
              <p className="mt-3 font-japanese text-lg text-primary">{kanji.glyph} <span className="ml-2 font-sans text-xs text-muted-foreground">{kanji.meaning} · {kanji.level}</span></p>
            </div>
            <div className="min-w-0">
              <p className="eyebrow">Selecciona el siguiente trazo</p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                {order.map((index) => <Button key={index} variant="ghost" onClick={() => selectStroke(index)} disabled={index < progress || complete} aria-label={`Carta de trazo ${order.indexOf(index) + 1}${index < progress ? ", colocada" : ""}`} className={`aspect-square h-auto w-full rounded-sm border p-2 transition-colors [&_svg]:!size-full disabled:opacity-50 ${index < progress ? "border-gold bg-gold-pale" : "border-border bg-background hover:border-gold hover:bg-secondary"}`}>
                  <StrokePicture kanji={kanji} active={index} className="h-full w-full max-w-[120px]" />
                </Button>)}
              </div>
            </div>
          </div>
          <div role="status" aria-live="polite" className="mt-6 min-h-6 text-sm font-medium text-primary">{feedback}</div>
          {complete && <Button onClick={() => changeKanji((kanjiIndex + 1) % pool.length)} variant="gold" className="mt-3">Siguiente kanji <ArrowRight /></Button>}
        </> : <p className="py-16 text-center text-sm text-muted-foreground">Aún no hay kanji de este nivel en la selección de demostración. Prueba con «Todos».</p>}
        <p className="mt-7 border-t border-border pt-4 text-xs leading-6 text-muted-foreground">Trazos: <a href="https://kanjivg.tagaini.net/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-primary">KanjiVG</a> · CC BY-SA 3.0</p>
      </div>
    </div>
  </section>;
}
