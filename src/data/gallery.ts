// Galeria e produkteve dhe sherbimeve.
// Per te shtuar nje produkt te ri:
//   1. Vendos imazhin ne src/assets/  (p.sh. gallery-5.jpg)
//   2. Importoje me poshte
//   3. Shto nje objekt te ri ne array-in `gallery`.

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export type GalleryCategory = "Duralumini" | "PVC" | "Xham" | "Fasada";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  description?: string;
}

export const gallery: GalleryItem[] = [
  {
    id: "sliding-door-01",
    title: "Dere rrëshqitëse duralumini",
    category: "Duralumini",
    image: gallery1,
    description: "Dere e madhe rrëshqitëse me profil te holle dhe xham dyfish.",
  },
  {
    id: "pvc-window-01",
    title: "Dritare PVC me tre kanata",
    category: "PVC",
    image: gallery2,
    description: "Dritare PVC e bardhe me izolim termik dhe akustik.",
  },
  {
    id: "glass-railing-01",
    title: "Parmak xhami per ballkon",
    category: "Xham",
    image: gallery3,
    description: "Parmak ballkoni me xham te sigurte dhe profile te zeza.",
  },
  {
    id: "storefront-01",
    title: "Vitrine biznesi",
    category: "Fasada",
    image: gallery4,
    description: "Fasade dyqani me profile duralumini te zeza dhe xham te madh.",
  },
];
