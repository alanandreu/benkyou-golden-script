import { describe, expect, test } from "bun:test";
import { characterGroups, findCharacter } from "./kana";

describe("Catálogos de kana", () => {
  test("ambos silabarios incluyen los 46 kana básicos", () => {
    for (const script of ["Hiragana", "Katakana"] as const) {
      expect(characterGroups[script].find((g) => g.id === "basic")?.characters.length).toBe(46);
    }
  });
  test("incluye wi y we obsoletos en ambos silabarios", () => {
    expect(findCharacter("Hiragana", "ゐ")?.character.reading).toBe("wi");
    expect(findCharacter("Hiragana", "ゑ")?.character.reading).toBe("we");
    expect(findCharacter("Katakana", "ヰ")?.character.reading).toBe("wi");
    expect(findCharacter("Katakana", "ヱ")?.character.reading).toBe("we");
  });
  test("incluye las 285 variantes hentaigana sin duplicados", () => {
    const variants = characterGroups.Hiragana.find((g) => g.id === "hentaigana")?.characters ?? [];
    expect(variants.length).toBe(285);
    expect(new Set(variants.map((c) => c.glyph)).size).toBe(285);
  });
  test("man’yōgana tiene ejemplos fonéticos documentados", () => {
    expect(findCharacter("Man’yōgana", "阿")?.character.reading).toBe("a");
    expect(findCharacter("Man’yōgana", "為")?.character.reading).toBe("wi");
  });
});