import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { characterGroups, findCharacter } from "./kana";

describe("Catálogos de kana", () => {
  test("ambos silabarios incluyen los 46 kana básicos", () => {
    for (const script of ["Hiragana", "Katakana"] as const) {
      assert.equal(characterGroups[script].find((g) => g.id === "basic")?.characters.length, 46);
    }
  });
  test("incluye wi y we obsoletos en ambos silabarios", () => {
    assert.equal(findCharacter("Hiragana", "ゐ")?.character.reading, "wi");
    assert.equal(findCharacter("Hiragana", "ゑ")?.character.reading, "we");
    assert.equal(findCharacter("Katakana", "ヰ")?.character.reading, "wi");
    assert.equal(findCharacter("Katakana", "ヱ")?.character.reading, "we");
  });
  test("incluye las 285 variantes hentaigana sin duplicados", () => {
    const variants = characterGroups.Hiragana.find((g) => g.id === "hentaigana")?.characters ?? [];
    assert.equal(variants.length, 285);
    assert.equal(new Set(variants.map((c) => c.glyph)).size, 285);
  });
  test("man’yōgana tiene ejemplos fonéticos documentados", () => {
    assert.equal(findCharacter("Man’yōgana", "阿")?.character.reading, "a");
    assert.equal(findCharacter("Man’yōgana", "為")?.character.reading, "wi");
  });
});