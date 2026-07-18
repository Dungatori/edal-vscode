import { Check } from "lucide-react";
import { SectionHeader } from "@/components/sections/Services";

const points = [
  "Matje falas ne vendin tuaj",
  "Materiale te certifikuara evropiane",
  "Montim profesional nga skuadra jone",
  "Garanci per punimin dhe materialin",
];

export function About() {
  return (
    <section id="rreth-nesh" className="section-padding border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 md:grid-cols-2 md:px-8">
        <div>
          <SectionHeader
            kicker="Rreth nesh"
            title="Punishte lokale, standarde industriale."
          />
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            EDAL eshte nje biznes familjar ne Valias qe prej vitesh ofron punime nga
            duralumini dhe PVC per shtepi, apartamente dhe biznese ne te gjithe zonen
            e Tiranes dhe Kamzes. Cdo projekt matet, prodhohet dhe montohet nga
            skuadra jone — pa nenkontraktore, pa surpriza.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -translate-x-3 translate-y-3 border-2 border-primary" />
          <div className="relative flex h-full flex-col justify-between gap-8 bg-surface p-8 md:p-12">
            <div className="font-display text-7xl leading-none text-primary md:text-9xl">10+</div>
            <div>
              <div className="text-2xl uppercase text-foreground">Vite eksperience</div>
              <p className="mt-3 text-muted-foreground">
                Nga dritarja e pare deri te fasada me e madhe — te njejtat standarde,
                i njejti kujdes. Puna jone flet per ne.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <div className="font-display text-3xl text-foreground">500+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Projekte
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-foreground">100%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Garanci
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
