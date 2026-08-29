import { createFileRoute, Link } from "@tanstack/react-router";
import { gallery } from "@/data/gallery";
import { categories } from "@/data/categories";

export const Route = createFileRoute("/galeria/kategoria/$category")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.category} — EDAL` },
      { name: "description", content: `Projektet tona ne kategorine ${params.category}.` },
    ],
  }),
  component: KategoriaPage,
});

function KategoriaPage() {
  const { category } = Route.useParams();
  const items = gallery.filter((g) => g.category === category);
  const info = categories.find((c) => c.id === category);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Link to="/" hash="galeria" className="text-sm font-bold uppercase tracking-widest text-primary hover:underline">
          ← Kthehu ne galerine kryesore
        </Link>

        <h1 className="mt-6 text-4xl uppercase text-foreground">{info?.title ?? category}</h1>
        {info?.description ? (
          <p className="mt-2 text-muted-foreground">{info.description}</p>
        ) : null}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              to="/galeria/$id"
              params={{ id: item.id }}
              className="group relative block overflow-hidden rounded-lg border border-border bg-background"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg uppercase text-foreground">{item.title}</h3>
                {item.description ? (
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                ) : null}
              </div>
            </Link>
          ))}
        </div>

        {items.length === 0 ? (
          <div className="mt-10 rounded-lg border border-dashed border-border p-10 text-center text-muted-foreground">
            Asnje produkt ne kete kategori.
          </div>
        ) : null}
      </div>
    </section>
  );
}