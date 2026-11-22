import { Link } from "@tanstack/react-router";
import { Check, Languages, BookOpen, Grid2X2, Map, Menu, Puzzle, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useState } from "react";
import { useI18n, type Lang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const languages = [
  { code: "es", label: "Castellano", short: "ES" },
  { code: "ca", label: "Català", short: "CA" },
  { code: "en", label: "English", short: "EN" },
  { code: "ja", label: "日本語", short: "日" },
] as const;

function LanguageMenu() {
  const { lang, setLang } = useI18n();
  const current = languages.find((l) => l.code === lang)!;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1.5 px-2.5" aria-label={current.label}>
          <Languages /><span className="text-xs font-semibold tracking-wider">{current.short}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel className="text-xs text-muted-foreground">Idioma · Idioma · Language · 言語</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((l) => (
          <DropdownMenuItem key={l.code} onSelect={() => setLang(l.code as Lang)} className="justify-between">
            <span className={l.code === "ja" ? "font-japanese" : undefined}>{l.label}</span>
            {l.code === lang && <Check className="size-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const links = [
  { to: "/" as const, label: "Diccionario", icon: Search },
  { to: "/gramatica" as const, label: "Gramática", icon: BookOpen },
  { to: "/caracteres" as const, label: "Kanji · Kana", icon: Grid2X2 },
  { to: "/juegos" as const, label: "Minijuegos", icon: Puzzle },
  { to: "/geografia" as const, label: "Geografía", icon: Map },
  { to: "/tienda" as const, label: "Tienda", icon: ShoppingBag },
];

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20 border-b border-border bg-background/95">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)} aria-label={t("BENKYOU, ir al diccionario")}>
          <span className="brand-seal" aria-hidden="true">勉</span>
          <span className="flex flex-col leading-none"><span className="font-display text-[22px] font-semibold tracking-[0.15em] text-primary">BENKYOU</span><span className="mt-1.5 text-[9px] uppercase tracking-[0.27em] text-muted-foreground">辞典 · diccionari · diccionario</span></span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label={t("Navegación principal")}>
          {links.map(({ to, label }) => <Link key={to} to={to} activeProps={{ className: "nav-link nav-link-active" }} className="nav-link">{t(label)}</Link>)}
        </nav>
        <div className="flex shrink-0 items-center gap-1"><LanguageMenu /><Button asChild variant="porcelain" className="px-3"><Link to="/acceso" onClick={() => setOpen(false)} aria-label={t("Acceso de usuarios")}><UserRound /><span className="hidden sm:inline">{t("Acceder")}</span></Link></Button><Button size="icon" variant="ghost" className="lg:hidden" aria-label={open ? t("Cerrar menú") : t("Abrir menú")} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-3 lg:hidden" aria-label={t("Navegación móvil")}><div className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-x-4">{links.map(({ to, label, icon: Icon }) => <Link key={to} to={to} onClick={() => setOpen(false)} activeProps={{ className: "mobile-nav-link mobile-nav-active" }} className="mobile-nav-link"><Icon className="size-4 shrink-0" />{t(label)}</Link>)}</div><Link to="/acceso" onClick={() => setOpen(false)} className="mobile-nav-link border-t border-border"><UserRound className="size-4" />{t("Acceso de usuarios")}</Link></nav>}
    </header>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  return <footer className="border-t border-border bg-secondary/45"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-xs text-muted-foreground md:px-10"><span className="font-display text-xl tracking-[0.13em] text-primary">BENKYOU</span><span>{t("Un espacio para encontrarse con el japonés.")}</span><span className="font-japanese text-base text-gold">学ぶことを楽しもう</span></div></footer>;
}