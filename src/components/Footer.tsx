import { site } from "@/data/site";
import { WhatsappIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="text-2xl font-display uppercase tracking-widest text-foreground">
            {site.name}
          </div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            {site.description}
          </p>
        </div>

        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
            Lokacioni
          </div>
          <p className="text-sm text-foreground">{site.location.label}</p>
          <p className="text-sm text-muted-foreground">{site.location.details}</p>
        </div>

        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
            Na ndiqni
          </div>
          <div className="flex items-center gap-3">
            <SocialBtn href={site.contacts.whatsapp.link} label="WhatsApp">
              <WhatsappIcon className="h-5 w-5" />
            </SocialBtn>
            <SocialBtn href={site.contacts.instagram.link} label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </SocialBtn>
            <SocialBtn href={site.contacts.facebook.link} label="Facebook">
              <FacebookIcon className="h-5 w-5" />
            </SocialBtn>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {year} {site.fullName}. Te gjitha te drejtat te rezervuara.
      </div>
    </footer>
  );
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface-elevated text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </a>
  );
}
