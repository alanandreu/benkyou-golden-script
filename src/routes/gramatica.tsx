import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/page-heading";
import { useT } from "@/lib/i18n";

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
  const t = useT();
  const [active, setActive] = useState(0);
  const lesson = lessons[active] ?? lessons[0];
  if (!lesson) return null;
  return <main className="min-h-[75vh] bg-background"><div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-14"><PageHeading area="Aprender" title="Gramática" japanese="文法">Una lengua se descubre frase a frase. Empieza por las partículas que dan forma al japonés.</PageHeading><div className="grid items-start gap-6 lg:grid-cols-[300px_1fr]"><div className="grid grid-cols-2 gap-2 lg:grid-cols-1" aria-label={t("Lecciones")}>{lessons.map((item, index) => <Button key={item.number} variant="choice" aria-pressed={active === index} onClick={() => setActive(index)} className="h-auto w-full justify-start whitespace-normal px-3 py-3 text-left"><span className="mr-2 font-display text-xl text-gold">{item.number}</span><span className="flex flex-col items-start"><span>{t(item.title)}</span><span className="text-xs font-normal opacity-90">{t(item.subtitle)}</span></span></Button>)}</div><article className="border-t-2 border-gold bg-card p-5 md:p-8"><p className="eyebrow">{t("Lección {n} · Fundamentos", { n: lesson.number })}</p><h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">{t(lesson.title)}</h2><p className="mt-2 text-sm text-muted-foreground">{t(lesson.subtitle)}</p><div className="mt-6 border-y border-border bg-secondary/45 px-4 py-6 md:px-6"><p className="font-japanese text-3xl text-primary">{lesson.japanese}</p><p className="mt-2 font-japanese text-sm text-muted-foreground">{lesson.reading}</p><div className="mt-6 space-y-2 text-sm"><p><span className="lang-label">CA</span>{lesson.ca}</p><p><span className="lang-label">ES</span>{lesson.es}</p></div></div><p className="mt-6 max-w-2xl text-base leading-8 text-foreground">{t(lesson.explanation)}</p></article></div></div></main>;
}