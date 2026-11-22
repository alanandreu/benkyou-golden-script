import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import manuscript from "@/assets/benkyou-manuscript.jpg";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/acceso")({
  head: () => ({ meta: [
    { title: "Acceso de usuarios — BENKYOU" },
    { name: "description", content: "Accede a tu espacio personal de BENKYOU: palabras favoritas, listas y búsquedas recientes." },
    { property: "og:title", content: "Acceso de usuarios — BENKYOU" },
    { property: "og:description", content: "Tu espacio personal para seguir aprendiendo japonés." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AccessPage,
});

function AccessPage() {
  const t = useT();
  const [mode, setMode] = useState<"login" | "signup" | "reset">("login");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  function changeMode(next: typeof mode) { setMode(next); setMessage(""); }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Las cuentas reales todavía no están conectadas. No se han enviado ni guardado tus datos.");
  }
  return <main className="pb-16">
    <section className="relative isolate overflow-hidden bg-primary px-5 pb-12 pt-12 text-center text-primary-foreground md:pt-16">
      <img src={manuscript} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15" />
      <p className="text-xs font-semibold text-gold-light">{t("BENKYOU / MI ESPACIO")}</p>
      <h1 className="mt-4 font-display text-5xl md:text-6xl">{t("Cada palabra, un paso más.")}</h1>
      <p className="mt-4 font-japanese text-xl text-gold-light" lang="ja">学びの続きを、ここから。</p>
    </section>
    <div className="mx-auto mt-9 max-w-md px-5">
      <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
        <h2 className="font-display text-3xl text-primary">{t(mode === "reset" ? "Recuperar contraseña" : mode === "signup" ? "Crear una cuenta" : "Bienvenido de nuevo")}</h2>
        <LockKeyhole className="size-5 shrink-0 text-gold-ink" />
      </div>
      {mode !== "reset" && <div className="mt-6 grid grid-cols-2 gap-2" aria-label={t("Tipo de acceso")}>
        <Button variant="choice" aria-pressed={mode === "login"} onClick={() => changeMode("login")}>{t("Iniciar sesión")}</Button>
        <Button variant="choice" aria-pressed={mode === "signup"} onClick={() => changeMode("signup")}>{t("Crear cuenta")}</Button>
      </div>}
      <form onSubmit={submit} className="mt-7 space-y-5">
        {mode === "signup" && <div><label htmlFor="display-name" className="mb-2 block text-sm font-semibold">{t("Nombre")}</label><Input id="display-name" autoComplete="nickname" placeholder={t("Tu nombre")} required className="h-12 bg-card" /></div>}
        <div><label htmlFor="email" className="mb-2 block text-sm font-semibold">{t("Correo electrónico")}</label><div className="relative"><Mail className="absolute left-3 top-4 size-4 text-muted-foreground" /><Input id="email" type="email" autoComplete="email" placeholder={t("tu@correo.com")} required className="h-12 bg-card pl-10" /></div></div>
        {mode !== "reset" && <div><label htmlFor="password" className="mb-2 block text-sm font-semibold">{t("Contraseña")}</label><div className="relative"><Input id="password" type={visible ? "text" : "password"} autoComplete={mode === "signup" ? "new-password" : "current-password"} required className="h-12 bg-card pr-12" /><Button type="button" variant="ghost" size="icon" className="absolute right-1.5 top-1.5" aria-label={t(visible ? "Ocultar contraseña" : "Mostrar contraseña")} title={t(visible ? "Ocultar contraseña" : "Mostrar contraseña")} onClick={() => setVisible(!visible)}>{visible ? <EyeOff /> : <Eye />}</Button></div></div>}
        {mode === "login" && <div className="text-right"><Button type="button" variant="link" className="h-auto px-0 py-0 text-xs" onClick={() => changeMode("reset")}>{t("¿Has olvidado la contraseña?")}</Button></div>}
        <Button type="submit" className="h-12 w-full">{t(mode === "reset" ? "Enviar enlace" : mode === "signup" ? "Crear cuenta" : "Entrar en mi espacio")}<ArrowRight /></Button>
        {message && <p role="status" className="border-l-2 border-gold bg-gold-pale p-4 text-sm leading-6">{t(message)}</p>}
      </form>
      {mode === "reset" && <Button variant="link" className="mt-3 px-0" onClick={() => changeMode("login")}>{t("Volver al inicio de sesión")}</Button>}
      <div className="mt-8 border-t border-border pt-6 text-center"><p className="text-xs text-muted-foreground">{t("Vista previa · cuentas aún no conectadas")}</p><Button asChild variant="porcelain" className="mt-4 w-full"><Link to="/usuario">{t("Explorar el espacio de ejemplo")} <ArrowRight /></Link></Button></div>
    </div>
  </main>;
}