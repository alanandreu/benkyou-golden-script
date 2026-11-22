import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bookmark, Check, Clock3, FolderOpen, Heart, Plus, Search, Settings2, Trash2, UserRound, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { PageHeading } from "@/components/page-heading";
import { entries } from "@/lib/dictionary";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/usuario")({
  head: () => ({ meta: [
    { title: "Mi espacio — BENKYOU" },
    { name: "description", content: "Organiza tus palabras favoritas, listas y búsquedas recientes en tu espacio personal de BENKYOU." },
    { property: "og:title", content: "Mi espacio — BENKYOU" },
    { property: "og:description", content: "Tu cuaderno personal de japonés: palabras, listas y preferencias." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: UserPage,
});

const sections = [
  { id: "recent", label: "Búsquedas recientes", icon: Clock3 },
  { id: "favorites", label: "Palabras favoritas", icon: Heart },
  { id: "lists", label: "Mis listas", icon: FolderOpen },
  { id: "settings", label: "Configuración", icon: Settings2 },
] as const;
type Section = typeof sections[number]["id"];
type WordList = { id: number; name: string; words: string[] };

function UserPage() {
  const t = useT();
  const [section, setSection] = useState<Section>("recent");
  const [recent, setRecent] = useState(entries.slice(0, 5).map(e => e.id));
  const [favorites, setFavorites] = useState(["sakura", "hikari", "kotoba"]);
  const [lists, setLists] = useState<WordList[]>([{ id: 1, name: "Primeras palabras", words: ["neko", "benkyou", "nihongo"] }, { id: 2, name: "Palabras que me inspiran", words: ["sakura", "hikari"] }]);
  const [activeList, setActiveList] = useState<number | null>(null);
  const [creating, setCreating] = useState(false);
  const [listName, setListName] = useState("");
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("Estudiante");
  const [language, setLanguage] = useState("es");
  const [level, setLevel] = useState("N5");
  const [history, setHistory] = useState(true);
  const [readings, setReadings] = useState(true);
  const [saved, setSaved] = useState(false);
  const selectedList = lists.find(list => list.id === activeList);
  const displayedIds = section === "favorites" ? favorites : selectedList ? selectedList.words : recent;
  const words = entries.filter(entry => displayedIds.includes(entry.id) && [entry.japanese, entry.kana, entry.es, entry.ca, entry.romaji].some(value => value.toLowerCase().includes(filter.toLowerCase())));
  function toggleFavorite(id: string) { setFavorites(current => current.includes(id) ? current.filter(word => word !== id) : [...current, id]); }
  function createList(event: FormEvent) { event.preventDefault(); if (!listName.trim()) return; setLists(current => [...current, { id: Date.now(), name: listName.trim(), words: [] }]); setCreating(false); setListName(""); }
  function changeSection(next: Section) { setSection(next); setFilter(""); setActiveList(null); }
  return <main className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
    <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 text-xs text-muted-foreground"><span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-gold" />{t("Espacio de ejemplo · cambios temporales, sin cuenta real")}</span><Button asChild variant="link" size="sm"><Link to="/acceso">{t("Acceso de usuarios")} <ArrowRight /></Link></Button></div>
    <PageHeading area="Personal" title={t("Mi espacio")} japanese="私の学び">{t("Tu pequeño cuaderno de japonés.")}</PageHeading>
    <div className="grid gap-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-12">
      <aside>
        <div className="mb-6 flex items-center gap-4 border-b border-border pb-6"><span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-gold bg-gold-pale text-primary"><UserRound className="size-6" /></span><div className="min-w-0"><p className="break-words font-display text-2xl font-semibold text-primary">{name}</p><p className="mt-1 text-xs text-muted-foreground">{t("Japonés")} · {level}</p></div></div>
        <nav aria-label={t("Mi espacio")} className="grid grid-cols-2 gap-2 lg:grid-cols-1">{sections.map(({ id, label, icon: Icon }) => <Button key={id} variant="choice" aria-pressed={section === id} onClick={() => changeSection(id)} className="h-auto min-h-12 justify-start whitespace-normal px-3 py-3 text-left text-xs sm:text-sm"><Icon />{t(label)}</Button>)}</nav>
        <div className="mt-6 hidden border-l-2 border-gold pl-4 lg:block"><span className="font-japanese text-3xl text-gold-ink">継続</span><p className="mt-2 font-display text-xl italic text-muted-foreground">{t("Una palabra cada día.")}</p></div>
      </aside>
      <section className="min-w-0">
        <div className="mb-7 grid grid-cols-3 border-y border-border py-5">{[{ label: "Búsquedas", count: recent.length, icon: Search }, { label: "Favoritas", count: favorites.length, icon: Heart }, { label: "Listas", count: lists.length, icon: Bookmark }].map(({ label, count, icon: Icon }) => <div key={label} className="border-r border-border px-3 first:pl-0 last:border-0 sm:px-6"><div className="flex items-center gap-2"><span className="font-display text-3xl text-primary">{count.toString().padStart(2, "0")}</span><Icon className="size-4 text-gold-ink" /></div><p className="mt-1 text-xs text-muted-foreground">{t(label)}</p></div>)}</div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><h2 className="font-display text-3xl text-primary">{selectedList ? t(selectedList.name) : t(sections.find(item => item.id === section)?.label ?? "")}</h2>{section === "recent" && recent.length > 0 && <Button variant="ghost" size="sm" onClick={() => setRecent([])}><Trash2 />{t("Vaciar historial")}</Button>}{section === "lists" && <Button variant="porcelain" size="sm" onClick={() => setCreating(!creating)}>{creating ? <X /> : <Plus />}{creating ? t("Cancelar") : t("Nueva lista")}</Button>}</div>
        {section === "settings" ? <form className="max-w-xl space-y-6" onSubmit={event => { event.preventDefault(); setSaved(true); }} onChange={() => setSaved(false)}>
          <div className="flex items-center gap-4 border-b border-border pb-6"><span className="flex size-16 items-center justify-center rounded-full bg-secondary text-primary"><UserRound className="size-7" /></span><div><p className="text-sm font-semibold">{t("Perfil personal")}</p><p className="mt-1 text-xs text-muted-foreground">{t("Avatar predeterminado")}</p></div></div>
          <div><label htmlFor="profile-name" className="mb-2 block text-sm font-semibold">{t("Nombre visible")}</label><Input id="profile-name" value={name} required onChange={event => setName(event.target.value)} className="h-11 bg-card" /></div>
          <div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="language" className="mb-2 block text-sm font-semibold">{t("Idioma de traducción")}</label><select id="language" className="control-select w-full" value={language} onChange={event => setLanguage(event.target.value)}><option value="es">{t("Español")}</option><option value="ca">{t("Catalán")}</option></select></div><div><label htmlFor="level" className="mb-2 block text-sm font-semibold">{t("Nivel de estudio")}</label><select id="level" className="control-select w-full" value={level} onChange={event => setLevel(event.target.value)}>{["N5", "N4", "N3", "N2", "N1"].map(value => <option key={value}>{value}</option>)}</select></div></div>
          <div className="divide-y divide-border border-y border-border"><div className="flex items-center justify-between gap-5 py-4"><label htmlFor="history" className="text-sm">{t("Guardar búsquedas recientes")}</label><Switch id="history" checked={history} onCheckedChange={setHistory} /></div><div className="flex items-center justify-between gap-5 py-4"><label htmlFor="readings" className="text-sm">{t("Mostrar lecturas de las palabras")}</label><Switch id="readings" checked={readings} onCheckedChange={setReadings} /></div></div>
          <div className="flex flex-wrap items-center gap-4"><Button type="submit"><Check />{t("Guardar cambios")}</Button>{saved && <p role="status" className="text-sm text-gold-ink">{t("Guardado en esta vista de ejemplo.")}</p>}</div>
        </form> : section === "lists" && !selectedList ? <>
          {creating && <form onSubmit={createList} className="mb-6 flex flex-wrap gap-3 border-b border-border pb-6"><Input aria-label={t("Nombre de la nueva lista")} placeholder={t("Nombre de la lista")} required value={listName} onChange={event => setListName(event.target.value)} className="min-w-0 flex-1 bg-card" /><Button type="submit"><Plus />{t("Crear")}</Button></form>}
          <div className="grid gap-4 sm:grid-cols-2">{lists.map(list => <article key={list.id} className="border border-border border-t-2 border-t-gold bg-card p-5"><div className="flex items-center justify-between"><FolderOpen className="size-5 text-gold-ink" /><Button variant="ghost" size="icon" aria-label={`${t("Eliminar lista")} ${t(list.name)}`} title={`${t("Eliminar lista")} ${t(list.name)}`} onClick={() => setLists(current => current.filter(item => item.id !== list.id))}><Trash2 className="text-muted-foreground" /></Button></div><h3 className="mt-5 break-words font-display text-2xl text-primary">{t(list.name)}</h3><p className="mt-2 text-xs text-muted-foreground">{t("{n} palabras", { n: list.words.length })}</p><Button variant="link" className="mt-4 px-0" onClick={() => setActiveList(list.id)}>{t("Abrir lista")} <ArrowRight /></Button></article>)}</div>
          {lists.length === 0 && <p className="py-10 text-sm text-muted-foreground">{t("Todavía no hay listas.")}</p>}
        </> : <>
          {selectedList && <div className="mb-5 flex flex-wrap gap-3"><Button variant="ghost" onClick={() => setActiveList(null)}>{t("Volver a mis listas")}</Button><select aria-label={t("Añadir palabra a la lista")} className="control-select" value="" onChange={event => { const id = event.target.value; setLists(current => current.map(list => list.id === activeList ? { ...list, words: [...list.words, id] } : list)); }}><option value="">{t("Añadir palabra…")}</option>{entries.filter(entry => !selectedList.words.includes(entry.id)).map(entry => <option key={entry.id} value={entry.id}>{entry.japanese} · {entry.es}</option>)}</select></div>}
          <div className="relative mb-4"><Search className="absolute left-3 top-3 size-4 text-muted-foreground" /><Input aria-label={t("Filtrar palabras")} value={filter} onChange={event => setFilter(event.target.value)} placeholder={t("Buscar en tus palabras…")} className="h-10 bg-card pl-10" /></div>
          <div className="divide-y divide-border border-y border-border">{words.map(entry => <article key={entry.id} className="flex items-center gap-3 py-5 sm:gap-5"><div className="min-w-0 flex-1"><div className="flex flex-wrap items-baseline gap-x-4 gap-y-1"><h3 className="font-japanese text-2xl text-primary">{entry.japanese}</h3>{readings && <span className="text-xs text-muted-foreground">{entry.kana} · {entry.romaji}</span>}</div><p className="mt-2 text-sm">{language === "ca" ? entry.ca : entry.es}</p></div><span className="hidden text-xs text-gold-ink sm:inline">{entry.level}</span><Button variant="ghost" size="icon" aria-label={`${t(favorites.includes(entry.id) ? "Quitar de favoritas" : "Añadir a favoritas")}: ${entry.japanese}`} title={t("Palabra favorita")} aria-pressed={favorites.includes(entry.id)} onClick={() => toggleFavorite(entry.id)} className="shrink-0 text-primary"><Heart className={favorites.includes(entry.id) ? "fill-primary" : ""} /></Button>{selectedList && <Button variant="ghost" size="icon" aria-label={`${t("Quitar de la lista")}: ${entry.japanese}`} title={t("Quitar de la lista")} onClick={() => setLists(current => current.map(list => list.id === activeList ? { ...list, words: list.words.filter(id => id !== entry.id) } : list))}><X /></Button>}</article>)}</div>
          {words.length === 0 && <p className="py-10 text-sm text-muted-foreground">{t(filter ? "No hay palabras que coincidan con tu búsqueda." : "Todavía no hay palabras aquí.")}</p>}
          <Button asChild variant="link" className="mt-5 px-0"><Link to="/">{t("Volver al diccionario")} <ArrowRight /></Link></Button>
        </>}
      </section>
    </div>
  </main>;
}