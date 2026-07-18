import heroImg from "@/assets/hero.jpg";
import { site } from "@/data/site";
import { ArrowRight } from "lucide-react";
import { WhatsappIcon } from "@/components/SocialIcons";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover opacity-45"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>

      {/* Accent stripe */}
      <div className="pointer-events-none absolute right-0 top-24 hidden h-40 w-2 bg-primary md:block" />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 md:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-primary/30 bg-surface/60 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Punime cilesore ne Valias, Kamez
          </div>

          <h1 className="text-5xl uppercase leading-[0.95] md:text-7xl lg:text-8xl">
            Duralumin & <span className="text-gradient">PVC</span>
            <br />
            i punuar me{" "}
            <span className="relative inline-block">
              precizion
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-primary" />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
            Dyer, dritare, fasada dhe struktura xhami — matje, prodhim dhe montim
            profesional, direkt nga punishtja jone.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={site.contacts.whatsapp.link}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              <WhatsappIcon className="h-5 w-5" />
              Merr Ofertën në WhatsApp
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/70 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              Shiko Galerinë <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-border/60 pt-8">
            <Stat value="10+" label="vjet eksperience" />
            <Stat value="500+" label="projekte te perfunduara" />
            <Stat value="100%" label="garanci punimi" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary md:text-4xl">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}
