import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { characterGroups, findCharacter, tableRows } from "./kana";

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
    const variants = characterGroups.Hentaigana.find((g) => g.id === "hentaigana")?.characters ?? [];
    assert.equal(variants.length, 285);
    assert.equal(new Set(variants.map((c) => c.glyph)).size, 285);
  });
  test("man’yōgana tiene ejemplos fonéticos documentados", () => {
    assert.equal(findCharacter("Man’yōgana", "阿")?.character.reading, "a");
    assert.equal(findCharacter("Man’yōgana", "為")?.character.reading, "wi");
  });
  test("la tabla gojūon coloca や en columna a y を en columna o", () => {
    const g = characterGroups.Hiragana.find((x) => x.id === "basic")!;
    const rows = tableRows("Hiragana", g);
    assert.equal(rows.length, 11);
    assert.equal(rows[7]![0]?.glyph, "や"); assert.equal(rows[7]![1], null);
    assert.equal(rows[9]![4]?.glyph, "を");
    assert.equal(tableRows("Katakana", characterGroups.Katakana[0]!)[0]![0]?.glyph, "ア");
  });
  test("hentaigana ya no está dentro de hiragana", () => {
    assert.equal(characterGroups.Hiragana.some((g) => g.id === "hentaigana"), false);
  });
});
