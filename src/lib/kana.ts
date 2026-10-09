import { hentaigana } from "./hentaigana";

export type Character = { glyph: string; reading: string; note?: string; strokes?: number };
export type CharacterGroup = { id: string; title: string; description?: string; characters: Character[] };
export type Script = "Hiragana" | "Katakana" | "Kanji" | "Man’yōgana";

function parse(data: string, note?: string): Character[] {
  return data.split(" ").filter(Boolean).map((pair) => {
    const [glyph = "", reading = ""] = pair.split(":");
    return { glyph, reading, note };
  });
}
function katakana(characters: Character[]): Character[] {
  return characters.map((item) => ({ ...item, glyph: Array.from(item.glyph).map((c) => {
    const code = c.codePointAt(0);
    return code !== undefined && code >= 0x3041 && code <= 0x3096 ? String.fromCodePoint(code + 0x60) : c;
  }).join("") }));
}
const basic = parse("あ:a い:i う:u え:e お:o か:ka き:ki く:ku け:ke こ:ko さ:sa し:shi す:su せ:se そ:so た:ta ち:chi つ:tsu て:te と:to な:na に:ni ぬ:nu ね:ne の:no は:ha ひ:hi ふ:fu へ:he ほ:ho ま:ma み:mi む:mu め:me も:mo や:ya ゆ:yu よ:yo ら:ra り:ri る:ru れ:re ろ:ro わ:wa を:wo ん:n");
const voiced = parse("が:ga ぎ:gi ぐ:gu げ:ge ご:go ざ:za じ:ji ず:zu ぜ:ze ぞ:zo だ:da ぢ:ji づ:zu で:de ど:do ば:ba び:bi ぶ:bu べ:be ぼ:bo ぱ:pa ぴ:pi ぷ:pu ぺ:pe ぽ:po ゔ:vu");
const small = parse("ぁ:a ぃ:i ぅ:u ぇ:e ぉ:o っ:tsu ゃ:ya ゅ:yu ょ:yo ゎ:wa ゕ:ka ゖ:ke", "Forma pequeña. Su función depende de la combinación; っ indica una consonante geminada.");
const contracted = parse("きゃ:kya きゅ:kyu きょ:kyo しゃ:sha しゅ:shu しょ:sho ちゃ:cha ちゅ:chu ちょ:cho にゃ:nya にゅ:nyu にょ:nyo ひゃ:hya ひゅ:hyu ひょ:hyo みゃ:mya みゅ:myu みょ:myo りゃ:rya りゅ:ryu りょ:ryo ぎゃ:gya ぎゅ:gyu ぎょ:gyo じゃ:ja じゅ:ju じょ:jo ぢゃ:ja ぢゅ:ju ぢょ:jo びゃ:bya びゅ:byu びょ:byo ぴゃ:pya ぴゅ:pyu ぴょ:pyo", "Yōon: combinación de dos kana para una sola mora.");
const archaicH = parse("ゐ:wi ゑ:we 𛀁:ye 𛄟:wu", "Forma histórica o arcaica. ゐ y ゑ se leen hoy i y e; wu es una reconstrucción gráfica, no un kana corriente del japonés antiguo.");
const archaicK = parse("ヰ:wi ヱ:we 𛀀:e 𛄠:yi 𛄡:ye 𛄢:wu ヷ:va ヸ:vi ヹ:ve ヺ:vo", "Forma histórica o poco usada. Yi, ye y wu incluyen formas propuestas para completar tablas antiguas; no todas fueron de uso cotidiano.");
const extensions = parse("イェ:ye ウィ:wi ウェ:we ウォ:wo ヴァ:va ヴィ:vi ヴェ:ve ヴォ:vo ヴュ:vyu シェ:she ジェ:je チェ:che ティ:ti ディ:di テュ:tyu デュ:dyu トゥ:tu ドゥ:du ツァ:tsa ツィ:tsi ツェ:tse ツォ:tso ファ:fa フィ:fi フェ:fe フォ:fo フュ:fyu クァ:kwa クィ:kwi クェ:kwe クォ:kwo グァ:gwa", "Combinación habitual para transcribir sonidos de préstamos. Las combinaciones posibles no constituyen una lista cerrada.");

export const characterGroups: Record<Script, CharacterGroup[]> = {
  Hiragana: [
    { id: "basic", title: "Gojūon · básicos", characters: basic },
    { id: "voiced", title: "Dakuten y handakuten", characters: voiced },
    { id: "contracted", title: "Yōon · sonidos contraídos", characters: contracted },
    { id: "small", title: "Kana pequeños", characters: small },
    { id: "archaic", title: "Kana obsoletos y arcaicos", characters: archaicH },
    { id: "special", title: "Formas y signos especiales", characters: parse("𛄲:ko 𛅐:wi 𛅑:we 𛅒:wo ゝ:repetición ゞ:repetición-sonora ゟ:yori ゛:dakuten ゜:handakuten ー:vocal-larga", "Forma pequeña especial, ligadura o signo ortográfico; no es un kana básico independiente.") },
    { id: "hentaigana", title: "Hentaigana · variantes históricas", description: "285 variantes cursivas codificadas en Unicode. No son 285 sonidos distintos; varias formas representan la misma lectura.", characters: hentaigana },
  ],
  Katakana: [
    { id: "basic", title: "Gojūon · básicos", characters: katakana(basic) },
    { id: "voiced", title: "Dakuten y handakuten", characters: katakana(voiced) },
    { id: "contracted", title: "Yōon · sonidos contraídos", characters: katakana(contracted) },
    { id: "extensions", title: "Sonidos de préstamos", characters: extensions },
    { id: "small", title: "Kana pequeños", characters: katakana(small) },
    { id: "archaic", title: "Kana obsoletos y arcaicos", characters: archaicK },
    { id: "ainu", title: "Extensiones para el ainu", description: "Kana pequeños usados para consonantes finales en la escritura del ainu.", characters: parse("ㇰ:k ㇱ:sh ㇲ:s ㇳ:t ㇴ:n ㇵ:h ㇶ:h ㇷ:h ㇸ:h ㇹ:h ㇺ:m ㇻ:r ㇼ:r ㇽ:r ㇾ:r ㇿ:r ㇷ゚:p", "Extensión del katakana para el ainu. Las formas de h y r se eligen según la vocal precedente.") },
    { id: "special", title: "Formas y signos especiales", characters: parse("𛅕:ko 𛅤:wi 𛅥:we 𛅦:wo 𛅧:n ヽ:repetición ヾ:repetición-sonora ヿ:koto ー:vocal-larga ゠:doble-guion ・:separador ゛:dakuten ゜:handakuten", "Forma pequeña especial, ligadura o signo ortográfico; no es un kana básico independiente.") },
  ],
  Kanji: [{ id: "basic", title: "Primeros kanji", characters: [
    { glyph: "日", reading: "sol · día", strokes: 4 }, { glyph: "本", reading: "origen · libro", strokes: 5 }, { glyph: "人", reading: "persona", strokes: 2 }, { glyph: "山", reading: "montaña", strokes: 3 }, { glyph: "川", reading: "río", strokes: 3 }, { glyph: "木", reading: "árbol", strokes: 4 }, { glyph: "水", reading: "agua", strokes: 4 }, { glyph: "火", reading: "fuego", strokes: 4 }, { glyph: "月", reading: "luna · mes", strokes: 4 }, { glyph: "花", reading: "flor", strokes: 7 },
  ] }],
  "Man’yōgana": [{ id: "examples", title: "Man’yōgana · selección histórica", description: "Kanji empleados por su sonido, no por su significado. Esta selección no es exhaustiva: el japonés antiguo distinguía también sílabas kō/otsu que aquí no se desglosan. La serie h tenía una pronunciación histórica distinta de la actual.", characters: parse("阿:a 伊:i 宇:u 衣:e 於:o 加:ka 幾:ki 久:ku 祁:ke 己:ko 左:sa 之:shi 寸:su 世:se 曾:so 多:ta 知:chi 都:tsu 天:te 止:to 奈:na 仁:ni 奴:nu 禰:ne 乃:no 八:ha 比:hi 不:fu 弊:he 保:ho 末:ma 美:mi 武:mu 女:me 毛:mo 也:ya 由:yu 江:ye 与:yo 良:ra 利:ri 留:ru 礼:re 呂:ro 和:wa 為:wi 恵:we 乎:wo", "Valor fonético ilustrativo en man’yōgana, con romanización orientativa moderna; no es la lectura única de este kanji ni una equivalencia exacta de pronunciación antigua.") }],
};

export function findCharacter(script: Script, glyph?: string) {
  for (const group of characterGroups[script]) {
    const character = group.characters.find((item) => item.glyph === glyph);
    if (character) return { character, group };
  }
  const group = characterGroups[script][0];
  const character = group?.characters[0];
  return group && character ? { character, group } : undefined;
}