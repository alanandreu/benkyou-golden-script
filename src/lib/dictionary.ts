export type Entry = {
  id: string;
  japanese: string;
  kana: string;
  romaji: string;
  ca: string;
  es: string;
  type: string;
  level: string;
  strokes: string;
  example: string;
  exampleCa: string;
  exampleEs: string;
};

export const entries: Entry[] = [
  { id: "sakura", japanese: "桜", kana: "さくら", romaji: "sakura", ca: "flor de cirerer", es: "flor de cerezo", type: "Sustantivo", level: "N2", strokes: "10 trazos", example: "春に桜が咲きます。", exampleCa: "A la primavera floreixen els cirerers.", exampleEs: "En primavera florecen los cerezos." },
  { id: "benkyou", japanese: "勉強", kana: "べんきょう", romaji: "benkyō", ca: "estudi; estudiar", es: "estudio; estudiar", type: "Sustantivo · verbo する", level: "N5", strokes: "10 + 8 trazos", example: "毎日日本語を勉強します。", exampleCa: "Estudio japonès cada dia.", exampleEs: "Estudio japonés todos los días." },
  { id: "neko", japanese: "猫", kana: "ねこ", romaji: "neko", ca: "gat", es: "gato", type: "Sustantivo", level: "N5", strokes: "11 trazos", example: "猫が窓のそばにいます。", exampleCa: "El gat és al costat de la finestra.", exampleEs: "El gato está junto a la ventana." },
  { id: "hikari", japanese: "光", kana: "ひかり", romaji: "hikari", ca: "llum", es: "luz", type: "Sustantivo", level: "N4", strokes: "6 trazos", example: "朝の光がきれいです。", exampleCa: "La llum del matí és bonica.", exampleEs: "La luz de la mañana es bonita." },
  { id: "akari", japanese: "明かり", kana: "あかり", romaji: "akari", ca: "llum; claror", es: "luz; claridad", type: "Sustantivo", level: "N3", strokes: "8 trazos", example: "部屋の明かりを消しました。", exampleCa: "He apagat el llum de l’habitació.", exampleEs: "Apagué la luz de la habitación." },
  { id: "kotoba", japanese: "言葉", kana: "ことば", romaji: "kotoba", ca: "paraula", es: "palabra", type: "Sustantivo", level: "N4", strokes: "7 + 12 trazos", example: "新しい言葉を覚えました。", exampleCa: "He après una paraula nova.", exampleEs: "Aprendí una palabra nueva." },
  { id: "nihongo", japanese: "日本語", kana: "にほんご", romaji: "nihongo", ca: "japonès; llengua japonesa", es: "japonés; lengua japonesa", type: "Sustantivo", level: "N5", strokes: "4 + 5 + 14 trazos", example: "日本語を話します。", exampleCa: "Parlo japonès.", exampleEs: "Hablo japonés." },
  { id: "arigatou", japanese: "ありがとう", kana: "ありがとう", romaji: "arigatō", ca: "gràcies", es: "gracias", type: "Expresión", level: "N5", strokes: "Hiragana", example: "ありがとう、助かりました。", exampleCa: "Gràcies, m’has ajudat molt.", exampleEs: "Gracias, me has ayudado mucho." },
];

export function searchEntries(query: string) {
  const term = query.trim().toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (!term) return [];
  return entries.filter((entry) => [entry.japanese, entry.kana, entry.romaji, entry.ca, entry.es].some((part) => part.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(term)));
}