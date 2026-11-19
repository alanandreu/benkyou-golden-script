import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { PageHeading } from "@/components/page-heading";

export const Route = createFileRoute("/tienda")({
  head: () => ({ meta: [
    { title: "Tienda — BENKYOU" },
    { name: "description", content: "La tienda de BENKYOU. Próximamente." },
    { property: "og:title", content: "Tienda — BENKYOU" },
    { property: "og:description", content: "La tienda de BENKYOU. Próximamente." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: StorePage,
});

function StorePage() {
  return <main className="min-h-[75vh] bg-background">
    <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-14">
      <PageHeading area="Tienda" title="Tienda" japanese="ショップ" />
      <div className="flex items-center gap-4 border-y border-border py-8">
        <ShoppingBag className="size-8 shrink-0 text-gold-ink" aria-hidden="true" />
        <p className="font-display text-3xl text-primary">Próximamente</p>
      </div>
    </div>
  </main>;
}