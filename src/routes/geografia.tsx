import { createFileRoute } from "@tanstack/react-router";
import { JapanMap } from "@/components/japan-map";

export const Route = createFileRoute("/geografia")({
  head: () => ({
    meta: [
      { title: "Geografía de Japón — BENKYOU" },
      { name: "description", content: "Mapa político interactivo de Japón: explora las ocho regiones y las 47 prefecturas con sus nombres en japonés, español y catalán." },
      { property: "og:title", content: "Geografía de Japón — BENKYOU" },
      { property: "og:description", content: "Mapa político interactivo de Japón: regiones y prefecturas con nombres en japonés, español y catalán." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: GeografiaPage,
});

function GeografiaPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
      <header className="mb-12 max-w-2xl">
        <p className="eyebrow">地理 · Geografía</p>
        <h1 className="section-heading mt-3">El archipiélago japonés</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          Japón se divide en ocho regiones tradicionales y cuarenta y siete prefecturas. Explora el mapa
          para aprender sus nombres en japonés —una forma edificante de unir lengua y territorio.
        </p>
      </header>
      <JapanMap />
    </main>
  );
}
