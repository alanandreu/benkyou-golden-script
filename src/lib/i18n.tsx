import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "es" | "ca" | "en" | "ja";
export type Translation = { ca: string; en: string; ja: string };
export type TranslationTable = Record<string, Translation>;

export const languages = [
  { code: "es", label: "Castellano", short: "ES" },
  { code: "ca", label: "Català", short: "CA" },
  { code: "en", label: "English", short: "EN" },
  { code: "ja", label: "日本語", short: "日" },
] as const;

// Every module in src/lib/i18n/ exports `default` a table keyed by the Spanish source text.
const modules = import.meta.glob<{ default: TranslationTable }>("./i18n/*.ts", { eager: true });
export const translations: TranslationTable = Object.assign({}, ...Object.values(modules).map((m) => m.default));

export function translate(lang: Lang, es: string, vars?: Record<string, string | number>) {
  let out = lang === "es" ? es : translations[es]?.[lang] ?? es;
  if (vars) for (const [k, v] of Object.entries(vars)) out = out.split(`{${k}}`).join(String(v));
  return out;
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (es: string, vars?: Record<string, string | number>) => string };
const I18nContext = createContext<Ctx>({ lang: "es", setLang: () => {}, t: (es, vars) => translate("es", es, vars) });
const STORAGE_KEY = "benkyou-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && languages.some((l) => l.code === saved)) setLangState(saved);
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = useCallback((l: Lang) => { setLangState(l); localStorage.setItem(STORAGE_KEY, l); }, []);
  const t = useCallback((es: string, vars?: Record<string, string | number>) => translate(lang, es, vars), [lang]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
export const useT = () => useContext(I18nContext).t;
