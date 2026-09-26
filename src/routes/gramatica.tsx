import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/gramatica")({ head: () => ({ meta: [
  { title: "Gramática japonesa — BENKYOU" }, { name: "description", content: "Aprende los fundamentos de la gramática japonesa con ejemplos traducidos al catalán y al español." },
  { property: "og:title", content: "Gramática japonesa — BENKYOU" }, { property: "og:description", content: "Lecciones de gramática japonesa con ejemplos en catalán y español." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: GrammarPage });

const lessons = [
  { number: "01", title: "La partícula は", subtitle: "El tema de la oración", japanese: "私は学生です。", reading: "わたしは がくせいです。", ca: "Soc estudiant.", es: "Soy estudiante.", explanation: "La partícula は (pronunciada wa) señala aquello de lo que hablamos. Se coloca después del tema de la frase; lo que sigue aporta información sobre él." },
  { number: "02", title: "La partícula が", subtitle: "El sujeto y la información nueva", japanese: "猫がいます。", reading: "ねこが います。", ca: "Hi ha un gat.", es: "Hay un gato.", explanation: "La partícula が marca el sujeto de la acción. A menudo presenta información nueva o pone el foco en quién realiza la acción." },
  { number: "03", title: "La partícula を", subtitle: "El objeto directo", japanese: "本を読みます。", reading: "ほんを よみます。", ca: "Llegeixo un llibre.", es: "Leo un libro.", explanation: "La partícula を (pronunciada o) marca el objeto directo: aquello sobre lo que recae la acción del verbo." },
  { number: "04", title: "La partícula に", subtitle: "Destino, tiempo y ubicación", japanese: "学校に行きます。", reading: "がっこうに いきます。", ca: "Vaig a l’escola.", es: "Voy a la escuela.", explanation: "La partícula に puede indicar hacia dónde se dirige alguien, cuándo sucede algo o dónde se encuentra una persona u objeto." },
];

function GrammarPage() {
  const [active, setActive] = useState(0);
  const lesson = lessons[active] ?? lessons[0];
  if (!lesson) return null;
  return <main className="min-h-[75vh] bg-background"><div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-18"><p className="eyebrow">BENKYOU / Aprender</p><h1 className="mt-3 font-display text-6xl text-primary md:text-8xl">Gramática <span className="font-japanese text-4xl text-gold md:text-6xl">文法</span></h1><p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">Una lengua se descubre frase a frase. Empieza por las partículas que dan forma al japonés.</p><div className="mt-11 grid gap-8 lg:grid-cols-[300px_1fr]"><div className="space-y-2" aria-label="Lecciones">{lessons.map((item, index) => <Button key={item.number} variant={active === index ? "default" : "porcelain"} onClick={() => setActive(index)} className="h-auto w-full justify-start whitespace-normal px-4 py-4 text-left"><span className="mr-2 font-display text-xl text-gold">{item.number}</span><span className="flex flex-col items-start"><span>{item.title}</span><span className="text-[11px] font-normal opacity-70">{item.subtitle}</span></span></Button>)}</div><article className="border border-border bg-card p-6 md:p-10"><p className="eyebrow">Lección {lesson.number} · Fundamentos</p><h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">{lesson.title}</h2><p className="mt-2 text-sm text-muted-foreground">{lesson.subtitle}</p><div className="mt-8 border-y border-border bg-secondary/45 px-6 py-8"><p className="font-japanese text-3xl text-primary">{lesson.japanese}</p><p className="mt-2 font-japanese text-sm text-muted-foreground">{lesson.reading}</p><div className="mt-6 space-y-2 text-sm"><p><span className="lang-label">CA</span>{lesson.ca}</p><p><span className="lang-label">ES</span>{lesson.es}</p></div></div><p className="mt-8 max-w-2xl text-sm leading-8 text-foreground">{lesson.explanation}</p></article></div></div></main>;
}