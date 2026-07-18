// Konfigurimi kryesor i faqes — ndrysho ketu per te perditesuar kontaktet.

export const site = {
  name: "EDAL",
  fullName: "EDAL Duralumin & PVC",
  tagline: "Duralumin & PVC me precizion industrial",
  description:
    "EDAL ofron dyer, dritare dhe struktura nga duralumini dhe PVC — punim i personalizuar, montim profesional, garanci per punen.",
  location: {
    label: "Valias, Shqiperi",
    details: "1km larg Hallaci",
    // Query per Google Maps embed: mund te jete adrese, koordinata, ose link Google Maps
    mapQuery: "41.397117, 19.745018",
  },
  contacts: {
    whatsapp: {
      number: "+355682632552",
      // Numri per lidhjen wa.me pa '+'
      link: "https://wa.me/355682632552",
      display: "+355 68 263 2552",
    },
    instagram: {
      handle: "@ed.al.punime.duralumini.pvc",
      link: "https://instagram.com/ed.al.punime.duralumini.pvc",
    },
    facebook: {
      handle: "ED AL Punime Duralumin-pvc",
      link: "https://facebook.com/search/top?q=ED%20AL%20Punime%20Duralumin-pvc",
    },
  },
} as const;
