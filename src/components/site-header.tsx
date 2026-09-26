import { Link } from "@tanstack/react-router";
import { BookOpen, Grid2X2, Menu, Puzzle, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/" as const, label: "Diccionario", icon: Search },
  { to: "/gramatica" as const, label: "Gramática", icon: BookOpen },
  { to: "/caracteres" as const, label: "Kanji · Kana", icon: Grid2X2 },
  { to: "/juegos" as const, label: "Minijuegos", icon: Puzzle },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20 border-b border-border bg-background/95">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)} aria-label="BENKYOU, ir al diccionario">
          <span className="brand-seal" aria-hidden="true">勉</span>
          <span className="flex flex-col leading-none"><span className="font-display text-[22px] font-semibold tracking-[0.15em] text-primary">BENKYOU</span><span className="mt-1.5 text-[9px] uppercase tracking-[0.27em] text-muted-foreground">辞典 · diccionari · diccionario</span></span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {links.map(({ to, label }) => <Link key={to} to={to} activeProps={{ className: "nav-link nav-link-active" }} className="nav-link">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 text-[11px] text-muted-foreground md:flex"><span className="font-japanese text-base text-primary">日本語</span><span className="text-gold">✦</span><span>CA / ES</span></div>
        <Button size="icon" variant="ghost" className="lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-3 lg:hidden" aria-label="Navegación móvil">{links.map(({ to, label, icon: Icon }) => <Link key={to} to={to} onClick={() => setOpen(false)} activeProps={{ className: "mobile-nav-link mobile-nav-active" }} className="mobile-nav-link"><Icon className="size-4" />{label}</Link>)}</nav>}
    </header>
  );
}

export function SiteFooter() {
  return <footer className="border-t border-border bg-secondary/45"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-xs text-muted-foreground md:px-10"><span className="font-display text-xl tracking-[0.13em] text-primary">BENKYOU</span><span>Un espacio para encontrarse con el japonés.</span><span className="font-japanese text-base text-gold">学ぶことを楽しもう</span></div></footer>;
}