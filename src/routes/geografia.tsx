import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/page-heading";
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
    <main className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-14">
      <PageHeading area="Territorio" title="Geografía" japanese="地理">Japón se divide en ocho regiones tradicionales y cuarenta y siete prefecturas.</PageHeading>
      <JapanMap />
    </main>
  );
}
