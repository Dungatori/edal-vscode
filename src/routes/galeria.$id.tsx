import { createFileRoute, Link } from "@tanstack/react-router";
import { gallery } from "@/data/gallery";

export const Route = createFileRoute("/galeria/$id")({
  head: () => ({
    meta: [
      { title: "Produkti — EDAL" },
      { name: "description", content: "Detaje produkti nga galeria EDAL." },
    ],
  }),
  component: GaleriaItemPage,
});

function GaleriaItemPage() {
  const { id } = Route.useParams();
  const item = gallery.find((g) => g.id === id);

  if (!item) {
    return (
      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <p className="text-muted-foreground">Produkti nuk u gjet.</p>
          <Link to="/" hash="galeria" className="mt-4 inline-block text-primary underline">
            ← Kthehu ne galerine kryesore
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <Link
          to="/galeria/kategoria/$category"
          params={{ category: item.category }}
          className="text-sm font-bold uppercase tracking-widest text-primary hover:underline"
        >
          ← Kthehu tek {item.category}
        </Link>

        <div className="mt-8 overflow-hidden rounded-lg border border-border bg-background">
          <img src={item.image} alt={item.title} className="w-full h-auto object-contain" />
          <div className="p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">
              {item.category}
            </div>
            <h1 className="mt-2 text-3xl uppercase text-foreground">{item.title}</h1>
            {item.description ? (
              <p className="mt-3 text-muted-foreground">{item.description}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
