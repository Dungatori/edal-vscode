import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EDAL Duralumin & PVC — Dyer, Dritare & Fasada ne Valias, Kamez" },
      {
        name: "description",
        content:
          "EDAL Duralumin & PVC — punime duralumini dhe PVC ne Valias, Kamez. Dyer, dritare, fasada, parmakë xhami. Kontaktoni ne WhatsApp per ofertë falas.",
      },
      { property: "og:title", content: "EDAL Duralumin & PVC" },
      {
        property: "og:description",
        content:
          "Punime duralumini dhe PVC me precizion industrial ne Valias, Kamez. Kontaktoni ne WhatsApp per ofertë falas.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
