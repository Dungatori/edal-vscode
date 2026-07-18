import { useMemo, useState } from "react";
import { gallery, type GalleryCategory, type GalleryItem } from "@/data/gallery";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SectionHeader } from "@/components/sections/Services";

type Filter = "Te gjitha" | GalleryCategory;

export function Gallery() {
  const categories = useMemo<Filter[]>(() => {
    const set = new Set<GalleryCategory>(gallery.map((g) => g.category));
    return ["Te gjitha", ...Array.from(set)] as Filter[];
  }, []);

  const [active, setActive] = useState<Filter>("Te gjitha");

  const items = active === "Te gjitha" ? gallery : gallery.filter((g) => g.category === active);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="section-padding border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          kicker="Punimet tona"
          title="Galeria"
          subtitle="Nje pjese e projekteve tona te fundit."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-md border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                active === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden rounded-lg border border-border bg-background ${
                i % 5 === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <button
                onClick={() => {
                  setSelected(item);
                  setOpen(true);
                }}
                className={`w-full text-left ${i % 5 === 0 ? "lg:aspect-auto lg:h-full" : ""}`}
              >
                <div className={`aspect-square overflow-hidden ${i % 5 === 0 ? "lg:aspect-auto lg:h-full" : ""}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1200}
                    height={1200}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </button>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/60 to-transparent p-6 opacity-90">
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  {item.category}
                </div>
                <h3 className="mt-1 text-xl uppercase text-foreground">{item.title}</h3>
                {item.description ? (
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </figure>
          ))}
        </div>

        <Dialog open={open} onOpenChange={(v) => setOpen(v)}>
          <DialogContent className="max-w-4xl p-0">
            {selected ? (
              <div className="w-full">
                <img src={selected.image} alt={selected.title} className="w-full h-auto object-contain" />
                <div className="p-6">
                  <DialogTitle>{selected.title}</DialogTitle>
                  {selected.description ? (
                    <DialogDescription>{selected.description}</DialogDescription>
                  ) : null}
                </div>
              </div>
            ) : null}
          </DialogContent>
        </Dialog>

        {items.length === 0 ? (
          <div className="mt-10 rounded-lg border border-dashed border-border p-10 text-center text-muted-foreground">
            Asnje produkt ne kete kategori.
          </div>
        ) : null}
      </div>
    </section>
  );
}
