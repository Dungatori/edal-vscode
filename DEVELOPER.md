# DEVELOPER.md — EDAL Duralumin & PVC

Guide teknik i plote per zhvilluesin qe do te mirembaje/modifikoje website-in.
Akses total i strukturës — cdo file, cfare ben, ku ta prekesh.

---

## 1. Stack

- **Framework:** TanStack Start v1 (React 19 + Vite 7, SSR + file-based routing)
- **Styling:** Tailwind CSS v4 (config me CSS variables ne `src/styles.css`, jo `tailwind.config.js`)
- **UI primitives:** shadcn/ui (`src/components/ui/*`) — style `new-york`, alias `@/*` → `src/*`
- **Icons:** `lucide-react`
- **State/Data:** TanStack Query (i konfiguruar ne `src/router.tsx`), pa backend aktualisht
- **Deploy target:** Edge (Cloudflare Workers) — por eksportohet edhe si SPA/dist per Netlify
- **Language:** TypeScript strict

---

## 2. Struktura e plote e projektit

```
EDAL/
├── public/
│   ├── favicon.ico
│   ├── robots.txt              → SEO crawlers
│   └── _redirects              → Netlify SPA fallback (/* → /index.html 200)
│
├── src/
│   ├── assets/                 → Imazhet e faqes (import statik)
│   │   ├── logo.png            → Logo ne header/footer
│   │   ├── hero.jpg            → Foto e seksionit Hero
│   │   └── gallery-1..4.jpg    → Foto galerie
│   │
│   ├── components/
│   │   ├── ui/                 → shadcn/ui components (button, card, etj.) — MOS I MODIFIKO
│   │   ├── Header.tsx          → Nav sticky + logo + CTA WhatsApp
│   │   ├── Footer.tsx          → Footer me 3 kolona
│   │   ├── SocialIcons.tsx     → SVG inline: WhatsApp, Instagram, Facebook
│   │   └── sections/           → Seksionet e homepage
│   │       ├── Hero.tsx
│   │       ├── Services.tsx    → Ekspoton edhe `SectionHeader` (perdoret ne seksione te tjera)
│   │       ├── Gallery.tsx     → Filter tabs + grid, useMemo per filtrimin
│   │       ├── About.tsx
│   │       ├── Location.tsx    → Google Maps iframe embed
│   │       └── Contact.tsx     → 3 karta social, pa form email
│   │
│   ├── data/                   → SOURCE OF TRUTH per permbajtjen
│   │   ├── site.ts             → Emri, kontaktet, lokacioni (single object `site`)
│   │   ├── services.ts         → Array `services: Service[]`
│   │   └── gallery.ts          → Array `gallery: GalleryItem[]` + type `GalleryCategory`
│   │
│   ├── routes/                 → File-based routing (TanStack)
│   │   ├── __root.tsx          → Shell (html/head/body), <head> meta, fonts, error boundary
│   │   ├── index.tsx           → Homepage: monton te gjitha seksionet
│   │   └── sitemap[.]xml.ts    → /sitemap.xml (SSR)
│   │   # routeTree.gen.ts eshte AUTO-GENERATED — mos e prek
│   │
│   ├── hooks/use-mobile.tsx    → Detektim breakpoint (perdoret nga shadcn)
│   ├── lib/
│   │   ├── utils.ts            → `cn()` helper (clsx + tailwind-merge)
│   │   ├── error-capture.ts    → Kap gabime SSR per server.ts
│   │   ├── error-page.ts       → HTML fallback per 500
│   │   └── lovable-error-reporting.ts
│   │
│   ├── router.tsx              → createRouter + QueryClient
│   ├── server.ts               → Entry per Cloudflare Worker (SSR)
│   ├── start.ts                → TanStack Start client bootstrap
│   ├── styles.css              → Tailwind v4 + design tokens (oklch)
│   └── routeTree.gen.ts        → AUTO — mos edito
│
├── CUSTOMIZE.md                → Guide jo-teknik per pronarin
├── DEVELOPER.md                → Ky file
├── components.json             → Konfig shadcn
├── vite.config.ts              → Plugins: tanstackStart, viteReact, tailwindcss
├── tsconfig.json               → strict: true, alias @/* → src/*
├── package.json
└── netlify.toml                → Cache headers per dist
```

---

## 3. Design tokens (src/styles.css)

Sistemi eshte "Industrial & i erret". Te gjitha ngjyrat jane **semantic tokens** ne oklch.
Mos perdor kurre `bg-white`, `text-black`, `bg-[#...]` direkt ne komponente — perdor tokens.

Kryesoret (`:root` block):
```css
--background: oklch(0.14 0.01 240)      /* sfond kryesor - blu-gri i erret */
--foreground: oklch(0.96 0 0)           /* tekst kryesor */
--card: oklch(0.18 0.01 240)
--primary: oklch(0.68 0.19 42)          /* portokalli industrial (accent) */
--secondary: oklch(0.24 0.01 240)
--muted / --muted-foreground
--border / --input / --ring
```

Utility custom (te definuara ne styles.css):
- `--gradient-hero`, `--gradient-primary`, `--gradient-dark`
- `--shadow-industrial`, `--shadow-glow`
- Font: `Bebas Neue` (headings, class `font-display`), `Inter` (body)

Per te ndryshuar tone-in, edito vetem variablat — jo utility-t ne komponente.

---

## 4. Content data flow

Cdo permbajtje tekstuale/imazh vjen nga `src/data/*`. Rregull: **komponentet lexojne, nuk mbajne te dhena hardcoded**.

- `site.ts` → import ne Header, Footer, Contact, Location, Hero, About
- `services.ts` → import ne Services.tsx
- `gallery.ts` → import ne Gallery.tsx (dinamikisht ndertohen tabs nga `Set(categories)`)

Nese shton nje field te ri ne `site.ts`, TypeScript do te te tregoje ku duhet perdorur.

---

## 5. Routing (TanStack Start)

- File-based ne `src/routes/`. Emërtimi: `about.tsx` → `/about`, `posts.$id.tsx` → `/posts/:id`.
- **Ndal:** mos krijo `src/pages/` — nuk eshte Next.js.
- Cdo route i ri kerkon `head()` unik (title + description + og:*).
- Nese shton nje route, `routeTree.gen.ts` rigjenerohet automatikisht nga Vite plugin.
- Root layout: `src/routes/__root.tsx` — `<HeadContent />`, `<Scripts />`, error/notFound components.
- Navigimi: `import { Link, useNavigate } from "@tanstack/react-router"` (JO `react-router-dom`).

Aktualisht faqja eshte single-page me anchor scroll (`#services`, `#gallery`, etj.).
Nese do te ndash ne route te vecanta (rekomandohet per SEO):
```
src/routes/
├── index.tsx        → Hero + About (short) + CTA
├── sherbimet.tsx
├── galeria.tsx
├── rreth-nesh.tsx
└── kontakt.tsx
```

---

## 6. Komanda te dobishme

```bash
bun install              # instalim
bun run dev              # dev server (Vite) — port default 8080
bun run build            # build production
bun run typecheck        # ose: bunx tsgo --noEmit
```

Per dist te Netlify: build output shkon ne `dist/`. Aty ka `_redirects` per SPA fallback.

---

## 7. Shtimi i funksionaliteteve te reja

### Nje seksion i ri ne homepage
1. Krijo `src/components/sections/RreziKryesor.tsx` (import `SectionHeader` nga `Services.tsx` per konsistence).
2. Importoje ne `src/routes/index.tsx` dhe vendose brenda `<main>` ne rendin qe deshiron.
3. Nese permban tekst — nxirre ne `src/data/*` (mos hardcode).

### Nje route i ri
```tsx
// src/routes/blog.tsx
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog — EDAL" }, { name: "description", content: "..." }] }),
  component: BlogPage,
});
function BlogPage() { return <div>...</div>; }
```
Restart-o dev server nese `routeTree.gen.ts` nuk update-ohet.

### Backend (form kontakti, orders, admin galeri)
Aktualisht nuk ka backend. Nese te duhet:
- Aktivo **Lovable Cloud** (Supabase i menaxhuar) — user roles, RLS, storage per foto.
- Serverfunctions: `createServerFn` nga `@tanstack/react-start`, ne `src/lib/*.functions.ts`.
- Public API / webhooks: `src/routes/api/public/*`.

### Nje komponent shadcn te ri
```bash
bunx shadcn@latest add dialog
```
Do te shtohet te `src/components/ui/dialog.tsx`.

---

## 8. Gotchas specifike per kete projekt

- **Tailwind v4:** JO `tailwind.config.js`. Cdo tema ne `src/styles.css` `@theme` block.
- **Font remote:** ngarkohet me `<link>` ne `__root.tsx` head — MOS `@import` URL ne `styles.css` (Lightning CSS deshton).
- **Assets:** import statik (`import img from "@/assets/x.jpg"`) — jo string paths, sepse humbet cache-busting.
- **SSR + browser APIs:** `window`, `localStorage` vetem brenda `useEffect`. `typeof window` te `useState` initializer shkakton hydration mismatch.
- **routeTree.gen.ts:** NEVER edit manually.
- **Google Maps embed:** iframe src ndertohet ne `Location.tsx` nga `site.location.mapQuery`.

---

## 9. Deployment

**Netlify (drag & drop):**
1. `bun run build`
2. Ngarko folderin `dist/` ose gjenero `dist.zip`.
3. `_redirects` dhe `netlify.toml` jane brenda dist.

**Cloudflare Workers / Lovable hosting:** `src/server.ts` eshte entry-point i gatshem.

---

## 10. Kontakt / handoff

- Content editor (pronari) perdor `CUSTOMIZE.md` — mos e prish strukturen e `src/data/*` ose ai file behet i pavlefshem.
- Types ne `site.ts` jane `as const` — nese shton fusha opsionale, perditeso interface-t ne komponentet qe i konsumojne.

Sukses! 🚀
