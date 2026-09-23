# Udhëzues Personalizimi — EDAL Duralumin & PVC

Ky skedar shpjegon **çdo gjë që mund të ndryshosh vetë** në faqe, pa prekur kodin kryesor.
Të gjitha ndryshimet bëhen në 3 skedarë brenda `src/data/`:

```
src/data/
├── site.ts        → Kontaktet, emri, lokacioni
├── services.ts    → Lista e shërbimeve
└── gallery.ts     → Galeria e produkteve/punimeve
```

Pas çdo ndryshimi, faqja rifreskohet automatikisht në preview.
---

## 1) Kontaktet dhe informacioni bazë

**Skedari:** `src/data/site.ts`

### Ndrysho numrin e WhatsApp
```ts
whatsapp: {
  number: "+355682632552",          // ← numri i plotë me kod shteti
  link: "https://wa.me/355682632552", // ← i njëjti numër PA '+' dhe pa hapësira
  display: "+355 68 263 2552",       // ← si shfaqet në faqe
},
```
> ⚠️ Nëse ndryshon numrin, ndryshoje në **të treja** rreshtat.

### Ndrysho Instagram
```ts
instagram: {
  handle: "@ed.al.punime.duralumini.pvc",
  link: "https://instagram.com/ed.al.punime.duralumini.pvc",
},
```

### Ndrysho Facebook
```ts
facebook: {
  handle: "ED AL Punime Duralumin-pvc",
  link: "https://facebook.com/faqja-jote",
},
```

### Ndrysho lokacionin dhe hartën
```ts
location: {
  label: "Valias, Shqiperi",           // ← titulli i madh
  details: "Rruga e Re, 500m larg Hallaci",         // ← përshkrimi poshtë
  mapQuery: "Valias, Kamez, Albania",  // ← çfarë kërkon Google Maps
},
```
> 💡 Për një pikë më të saktë në hartë, vendos koordinatat te `mapQuery`:
> `mapQuery: "41.397070,19.745011"` (gjeji nga Google Maps → klik i djathtë → kopjo koordinatat).

### Ndrysho emrin ose përshkrimin
```ts
name: "EDAL",
fullName: "EDAL Duralumin & PVC",
tagline: "Duralumin & PVC me precizion industrial",
description: "EDAL ofron dyer, dritare dhe struktura...",
```

---

## 2) Shërbimet

**Skedari:** `src/data/services.ts`

Çdo shërbim është një objekt me `title`, `description` dhe `icon`.

### Shto një shërbim të ri
```ts
{
  title: "Titulli i sherbimit",
  description: "Nje pershkrim i shkurter (1-2 fjali).",
  icon: Wrench, // ← ikonë nga lucide-react
},
```
Ikonat në dispozicion: shiko https://lucide.dev/icons — kopjo emrin (p.sh. `Hammer`)
dhe shtoje te import-i lart në skedar:
```ts
import { DoorOpen, AppWindow, Hammer } from "lucide-react";
```

### Hiq një shërbim
Fshij të gjithë objektin `{ ... },` përfshirë presjen në fund.

---

## 3) Galeria e produkteve

**Skedari:** `src/data/gallery.ts`

### Shto një produkt të ri (3 hapa)

**Hapi 1** — Vendos imazhin te `src/assets/` (p.sh. `gallery-5.jpg`).
Formatet: `.jpg`, `.png`, `.webp`. Madhësia e rekomanduar: **1200×900 px**.

**Hapi 2** — Importoje lart në skedar:
```ts
import gallery5 from "@/assets/gallery-5.jpg";
```

**Hapi 3** — Shto objektin te lista `gallery`:
```ts
{
  id: "dritare-pvc-02",              // ← unik, pa hapësira
  title: "Dritare PVC me hark",
  category: "PVC",                    // ← Duralumini | PVC | Xham | Fasada
  image: gallery5,
  description: "Pershkrim opsional i punes.",
},
```

### Kategoritë e disponueshme
`"Duralumini"`, `"PVC"`, `"Xham"`, `"Fasada"`

Për të shtuar një kategori të re, ndrysho këtë rresht në krye të skedarit:
```ts
export type GalleryCategory = "Duralumini" | "PVC" | "Xham" | "Fasada" | "KategoriaJote";
```

### Hiq një produkt
Fshij objektin `{ ... },` që i përket dhe (opsionale) import-in e imazhit.

---

## 4) Logo dhe imazhi kryesor (hero)

- **Logo:** zëvendëso skedarin `src/assets/logo.png` me tëndin (mbaj të njëjtin emër).
- **Foto Hero:** zëvendëso `src/assets/hero.jpg` (madhësia e rekomanduar: **1920×1080 px**).

Ruaji me **të njëjtin emër** që të mos duhet të prekësh kodin.

---

## 5) Ngjyrat (opsionale, kërkon pak CSS)

**Skedari:** `src/styles.css`

Ngjyra kryesore portokalli:
```css
--primary: oklch(0.68 0.19 42);
```
Për ta ndryshuar, përdor një konvertues online (p.sh. oklch.com) ose kërkoji AI-t:
_"ndryshoji ngjyren primare ne #ff0000"_.

---

## Pyetje të shpeshta

**Si e testoj para se ta publikoj?**
Preview-i majtas rifreskohet automatikisht sa herë ruan një skedar.

**Ka gabim dhe faqja nuk hapet?**
Zakonisht është një presje (`,`) ose kllapë e harruar. Kopjo mesazhin e gabimit
dhe dërgoje te AI do ta rregullojë menjëherë.
