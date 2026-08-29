import { MapPin, Navigation } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeader } from "@/components/sections/Services";

export function Location() {
  const mapQuery = site.location.mapQuery;

  const mapEmbedSrc = getMapEmbedSrc(mapQuery);
  const directionsUrl = getDirectionsUrl(mapQuery);

  return (
    <section id="lokacioni" className="section-padding border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          kicker="Na gjeni"
          title="Lokacioni"
          subtitle="Punishtja jone ndodhet ne Valias, vetem 1km larg Hallacit te Rruga e Re."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            <InfoCard icon={<MapPin className="h-5 w-5" />} label="Adresa">
              <div className="text-lg text-foreground">{site.location.label}</div>
              <div className="text-sm text-muted-foreground">{site.location.details}</div>
            </InfoCard>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              <Navigation className="h-4 w-4" />
              Merr Drejtimet
            </a>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-background lg:col-span-2">
            <iframe
              title="Harta EDAL Duralumin & PVC"
              src={mapEmbedSrc}
              className="h-[420px] w-full grayscale-[35%] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function getMapEmbedSrc(mapQuery: string) {
  if (/^https?:\/\//.test(mapQuery)) {
    if (mapQuery.includes("google.com/maps/embed")) {
      return mapQuery;
    }
    return `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  }

  return `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
}

function getDirectionsUrl(mapQuery: string) {
  return /^https?:\/\//.test(mapQuery)
    ? mapQuery
    : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;
}

function InfoCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border bg-background p-6">
      <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
        <span className="text-primary">{icon}</span>
        {label}
      </div>
      {children}
    </div>
  );
}
