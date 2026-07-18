import { services } from "@/data/services";

export function Services() {
  return (
    <section id="sherbimet" className="section-padding border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          kicker="Cfare bejme"
          title="Sherbimet tona"
          subtitle="Nga matja fillestare deri ne montimin perfundimtar — te gjitha punimet duralumini dhe PVC nen nje kulm."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-surface p-8 transition-colors hover:bg-surface-elevated"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl uppercase text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary">
        <span className="h-px w-8 bg-primary" />
        {kicker}
      </div>
      <h2 className="max-w-3xl text-4xl uppercase md:text-6xl">{title}</h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
