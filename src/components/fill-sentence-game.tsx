import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

type Level = "N5" | "N4" | "N3" | "N2" | "N1";
type Question = { before: string; after: string; answer: string; options: string[]; es: string };

// Small demonstration set; options favour look-alike or homophone words.
const questions: Record<Level, Question[]> = {
  N5: [
    { before: "毎朝、", after: "を飲みます。", answer: "水", options: ["水", "木", "氷", "永"], es: "Cada mañana bebo agua." },
    { before: "", after: "が好きです。", answer: "猫", options: ["猫", "描", "犬", "大"], es: "Me gustan los gatos." },
    { before: "図書館で本を", after: "。", answer: "読みます", options: ["読みます", "書きます", "聞きます", "飲みます"], es: "Leo libros en la biblioteca." },
  ],
  N4: [
    { before: "明日、友達に", after: "予定です。", answer: "会う", options: ["会う", "合う", "逢う", "買う"], es: "Mañana tengo previsto ver a un amigo." },
    { before: "この服はサイズが", after: "。", answer: "合わない", options: ["合わない", "会わない", "言わない", "買わない"], es: "Esta ropa no me queda bien de talla." },
    { before: "部屋が", after: "ので、窓を開けました。", answer: "暑い", options: ["暑い", "熱い", "厚い", "寒い"], es: "Hacía calor en la habitación, así que abrí la ventana." },
  ],
  N3: [
    { before: "この本はとても", after: "です。", answer: "厚い", options: ["厚い", "暑い", "熱い", "篤い"], es: "Este libro es muy grueso." },
    { before: "彼の意見に", after: "します。", answer: "賛成", options: ["賛成", "完成", "構成", "作成"], es: "Estoy de acuerdo con su opinión." },
    { before: "会議の時間を", after: "してください。", answer: "確認", options: ["確認", "確実", "認識", "承認"], es: "Por favor, confirma la hora de la reunión." },
  ],
  N2: [
    { before: "新しい制度が", after: "された。", answer: "導入", options: ["導入", "購入", "記入", "侵入"], es: "Se introdujo un nuevo sistema." },
    { before: "失敗の原因を", after: "する。", answer: "追求", options: ["追求", "追及", "追究", "要求"], es: "Buscar a fondo la causa del fracaso." },
    { before: "環境問題に", after: "を持つ。", answer: "関心", options: ["関心", "感心", "歓心", "寒心"], es: "Interesarse por los problemas ambientales." },
  ],
  N1: [
    { before: "計画は", after: "に進んでいる。", answer: "順調", options: ["順調", "順番", "同調", "純情"], es: "El plan avanza sin problemas." },
    { before: "真理を", after: "する学問。", answer: "追究", options: ["追究", "追及", "追求", "探求"], es: "Una disciplina que investiga la verdad." },
    { before: "両国の関係は", after: "の状態にある。", answer: "膠着", options: ["膠着", "執着", "到着", "密着"], es: "La relación entre ambos países está estancada." },
  ],
};
const levels: Level[] = ["N5", "N4", "N3", "N2", "N1"];

export function FillSentenceGame() {
  const [level, setLevel] = useState<Level>("N5");
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const list = questions[level];
  const q = list[index];
  if (!q) return null;
  const done = picked !== null;

  function choose(option: string) {
    if (done) return;
    setPicked(option);
    if (option === q!.answer) setScore((s) => s + 1);
  }
  function reset(next: Level = level) { setLevel(next); setIndex(0); setPicked(null); setScore(0); }
  function next() { setIndex((i) => (i + 1) % list.length); setPicked(null); }

  return <section className="mt-20 border-t border-border pt-12" aria-labelledby="fill-game-title">
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <div>
        <p className="eyebrow">03 / Lectura</p>
        <h2 id="fill-game-title" className="mt-3 font-display text-4xl text-primary">Completa la frase</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">Elige la palabra que falta. Atención a los homófonos y kanji parecidos.</p>
        <div className="mt-6 flex flex-wrap gap-2" aria-label="Nivel JLPT">
          {levels.map((l) => <Button key={l} size="sm" variant={l === level ? "default" : "porcelain"} aria-pressed={l === level} onClick={() => reset(l)}>{l}</Button>)}
        </div>
        <div className="mt-7 flex items-center justify-between border-y border-border py-4 text-sm"><span>Frase</span><span className="font-semibold text-primary">{index + 1} / {list.length}</span></div>
        <div className="flex items-center justify-between border-b border-border py-4 text-sm"><span>Aciertos</span><span className="font-semibold text-primary">{score}</span></div>
        <Button onClick={() => reset()} variant="porcelain" className="mt-7"><RotateCcw /> Reiniciar</Button>
      </div>
      <div className="border border-border bg-card p-5 sm:p-8">
        <p className="eyebrow">Nivel {level}</p>
        <p className="mt-5 font-japanese text-2xl leading-relaxed text-foreground sm:text-3xl">
          {q.before}<span className={`mx-1 inline-block min-w-20 border-b-2 px-2 text-center ${done ? (picked === q.answer ? "border-gold text-primary" : "border-destructive text-primary") : "border-gold text-transparent"}`}>{done ? q.answer : "＿"}</span>{q.after}
        </p>
        {done && <p className="mt-3 text-sm text-muted-foreground">{q.es}</p>}
        <div className="mt-7 grid grid-cols-2 gap-3">
          {q.options.map((o) => {
            const state = !done ? "border-border bg-background hover:border-gold hover:bg-secondary" : o === q.answer ? "border-gold bg-gold-pale" : o === picked ? "border-destructive bg-destructive/10" : "border-border opacity-60";
            return <Button key={o} variant="ghost" onClick={() => choose(o)} className={`h-auto rounded-sm border py-4 font-japanese text-xl text-primary ${state}`}>{o}</Button>;
          })}
        </div>
        <div role="status" aria-live="polite" className="mt-6 min-h-6 text-sm font-medium text-primary">{done && (picked === q.answer ? "¡Correcto!" : `No es correcto. La respuesta era ${q.answer}.`)}</div>
        {done && <Button onClick={next} variant="gold" className="mt-3">Siguiente frase <ArrowRight /></Button>}
        <p className="mt-7 border-t border-border pt-4 text-[11px] text-muted-foreground">Selección de demostración: 3 frases por nivel.</p>
      </div>
    </div>
  </section>;
}
