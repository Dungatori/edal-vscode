import { site } from "@/data/site";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Sherbimet", href: "#sherbimet" },
  { label: "Galeria", href: "#galeria" },
  { label: "Rreth Nesh", href: "#rreth-nesh" },
  { label: "Lokacioni", href: "#lokacioni" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt={site.fullName} className="h-20 w-auto md:h-25" width={816} height={816} />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={site.contacts.whatsapp.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
        >
          Ofertë Falas
        </a>
      </div>
    </header>
  );
}
