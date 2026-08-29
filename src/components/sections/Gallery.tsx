import { Link } from "@tanstack/react-router";
import { gallery } from "@/data/gallery";
import { categories } from "@/data/categories";
import { SectionHeader } from "@/components/sections/Services";

export function Gallery() {
  return (
    <section id="galeria" className="section-padding border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          kicker="Punimet tona"
          title="Galeria"
          subtitle="Zgjidh nje kategori per te pare punimet."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const cover = gallery.find((g) => g.category === cat.id);

            return (
              <Link
                key={cat.id}
                to="/galeria/kategoria/$category"
                params={{ category: cat.id }}
                className="group relative block overflow-hidden rounded-lg border border-border bg-background"
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  {cover ? (
                    <img
                      src={cover.image}
                      alt={cat.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/70 to-transparent p-6">
                  <h3 className="text-2xl uppercase text-foreground">{cat.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}