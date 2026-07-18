import { site } from "@/data/site";
import { WhatsappIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

const channels = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    handle: site.contacts.whatsapp.display,
    href: site.contacts.whatsapp.link,
    cta: "Na shkruaj tani",
    Icon: WhatsappIcon,
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: site.contacts.instagram.handle,
    href: site.contacts.instagram.link,
    cta: "Na ndiq",
    Icon: InstagramIcon,
  },
  {
    key: "facebook",
    label: "Facebook",
    handle: site.contacts.facebook.handle,
    href: site.contacts.facebook.link,
    cta: "Shiko faqen",
    Icon: FacebookIcon,
  },
];

export function Contact() {
  return (
    <section id="kontakt" className="section-padding relative overflow-hidden border-t border-border bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-2 diagonal-stripes opacity-20" />

      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary">
          <span className="h-px w-8 bg-primary" />
          Na kontaktoni
          <span className="h-px w-8 bg-primary" />
        </div>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl uppercase md:text-6xl">
          Gati per <span className="text-gradient">projektin</span> tuaj?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
          Zgjidh menyren me te lehte per te na kontaktuar. Pergjigjemi shpejt cdo dite te javes.
        </p>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
          {channels.map(({ key, label, handle, href, cta, Icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col items-center gap-4 rounded-lg border border-border bg-surface p-8 text-left transition-all hover:-translate-y-1 hover:border-primary hover:bg-surface-elevated hover:shadow-[var(--shadow-glow)]"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-8 w-8" />
              </span>
              <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {label}
                </div>
                <div className="mt-1 text-lg text-foreground">{handle}</div>
              </div>
              <div className="mt-auto text-xs font-bold uppercase tracking-widest text-primary">
                {cta} →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
