import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as gallery } from "./gallery-DK8QAyj8.mjs";
import { t as categories } from "./categories-CMF4BEdx.mjs";
import { a as Layers, c as Building2, i as MapPin, l as ArrowRight, n as Shield, o as DoorOpen, r as Navigation, s as Check, t as Wrench, u as AppWindow } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DklMS8Y7.js
var import_jsx_runtime = require_jsx_runtime();
var site = {
	name: "EDAL",
	fullName: "EDAL Duralumin & PVC",
	tagline: "Duralumin & PVC me precizion industrial",
	description: "EDAL ofron dyer, dritare dhe struktura nga duralumini dhe PVC — punim i personalizuar, montim profesional, garanci per punen.",
	location: {
		label: "Valias, Shqiperi",
		details: "1km larg Hallaci",
		mapQuery: "41.397117, 19.745018"
	},
	contacts: {
		whatsapp: {
			number: "+355682632552",
			link: "https://wa.me/355682632552",
			display: "+355 68 263 2552"
		},
		instagram: {
			handle: "@ed.al.punime.duralumini.pvc",
			link: "https://instagram.com/ed.al.punime.duralumini.pvc"
		},
		facebook: {
			handle: "ED AL Punime Duralumin-pvc",
			link: "https://facebook.com/search/top?q=ED%20AL%20Punime%20Duralumin-pvc"
		}
	}
};
var logo_default = "/assets/logo-CKLfQ-lg.png";
var navItems = [
	{
		label: "Sherbimet",
		href: "#sherbimet"
	},
	{
		label: "Galeria",
		href: "#galeria"
	},
	{
		label: "Rreth Nesh",
		href: "#rreth-nesh"
	},
	{
		label: "Lokacioni",
		href: "#lokacioni"
	},
	{
		label: "Kontakt",
		href: "#kontakt"
	}
];
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: site.fullName,
						className: "h-20 w-auto md:h-25",
						width: 816,
						height: 816
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: site.contacts.whatsapp.link,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105",
					children: "Ofertë Falas"
				})
			]
		})
	});
}
function WhatsappIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
	});
}
function InstagramIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2",
				y: "2",
				width: "20",
				height: "20",
				rx: "5",
				ry: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "17.5",
				y1: "6.5",
				x2: "17.51",
				y2: "6.5"
			})
		]
	});
}
function FacebookIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" })
	});
}
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-2xl font-display uppercase tracking-widest text-foreground",
					children: site.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xs text-sm text-muted-foreground",
					children: site.description
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 text-xs font-bold uppercase tracking-widest text-primary",
						children: "Lokacioni"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-foreground",
						children: site.location.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: site.location.details
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-xs font-bold uppercase tracking-widest text-primary",
					children: "Na ndiqni"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialBtn, {
							href: site.contacts.whatsapp.link,
							label: "WhatsApp",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappIcon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialBtn, {
							href: site.contacts.instagram.link,
							label: "Instagram",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramIcon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialBtn, {
							href: site.contacts.facebook.link,
							label: "Facebook",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacebookIcon, { className: "h-5 w-5" })
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border/60 py-5 text-center text-xs text-muted-foreground",
			children: [
				"© ",
				year,
				" ",
				site.fullName,
				". Te gjitha te drejtat te rezervuara."
			]
		})]
	});
}
function SocialBtn({ href, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": label,
		className: "inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface-elevated text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground",
		children
	});
}
var hero_default = "/assets/hero-C_s4r-DH.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_default,
					alt: "",
					className: "h-full w-full object-cover opacity-45",
					width: 1920,
					height: 1200
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-0 top-24 hidden h-40 w-2 bg-primary md:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 inline-flex items-center gap-2 border border-primary/30 bg-surface/60 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }), "Punime cilesore ne Valias, Kamez"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-5xl uppercase leading-[0.95] md:text-7xl lg:text-8xl",
							children: [
								"Duralumin & ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "PVC"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"i punuar me",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative inline-block",
									children: ["precizion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-2 left-0 h-1 w-full bg-primary" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-lg text-muted-foreground md:text-xl",
							children: "Dyer, dritare, fasada dhe struktura xhami — matje, prodhim dhe montim profesional, direkt nga punishtja jone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.contacts.whatsapp.link,
								target: "_blank",
								rel: "noreferrer",
								className: "group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappIcon, { className: "h-5 w-5" }), "Merr Ofertën në WhatsApp"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#galeria",
								className: "inline-flex items-center gap-2 rounded-md border border-border bg-surface/70 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary",
								children: ["Shiko Galerinë ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-border/60 pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									value: "10+",
									label: "vjet eksperience"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									value: "500+",
									label: "projekte te perfunduara"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									value: "100%",
									label: "garanci punimi"
								})
							]
						})
					]
				})
			})
		]
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-display text-3xl text-primary md:text-4xl",
		children: value
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs uppercase tracking-widest text-muted-foreground",
		children: label
	})] });
}
var services = [
	{
		title: "Dyer Duralumini",
		description: "Dyer hyrjeje, dyer te brendshme dhe dyer industriale nga duralumini — te forta, te sigurta, me izolim optimal.",
		icon: DoorOpen
	},
	{
		title: "Dritare PVC",
		description: "Dritare PVC me xham dyfish, izolim termik dhe akustik te larte. Modele te ndryshme sipas ambientit.",
		icon: AppWindow
	},
	{
		title: "Fasada & Vitrina",
		description: "Fasada nga duralumini per biznese, vitrina dyqanesh dhe struktura xhami me profil te holle.",
		icon: Building2
	},
	{
		title: "Rrethim Xhami",
		description: "Parmakë ballkoni me xham, ndarje ambientesh dhe kabina dushi me profile duralumini.",
		icon: Layers
	},
	{
		title: "Grila & Siguri",
		description: "Grila metalike, dyer sigurie dhe struktura mbrojtese te punuara sipas madhesise se ambientit.",
		icon: Shield
	},
	{
		title: "Riparim & Mirembajtje",
		description: "Sherbim per riparimin e dyerve, dritareve dhe strukturave ekzistuese duralumini ose PVC.",
		icon: Wrench
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sherbimet",
		className: "section-padding border-t border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				kicker: "Cfare bejme",
				title: "Sherbimet tona",
				subtitle: "Nga matja fillestare deri ne montimin perfundimtar — te gjitha punimet duralumini dhe PVC nen nje kulm."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3",
				children: services.map((service) => {
					const Icon = service.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative bg-surface p-8 transition-colors hover:bg-surface-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-5 inline-flex h-14 w-14 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-7 w-7",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl uppercase text-foreground",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: service.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" })
						]
					}, service.title);
				})
			})]
		})
	});
}
function SectionHeader({ kicker, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }), kicker]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "max-w-3xl text-4xl uppercase md:text-6xl",
				children: title
			}),
			subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-base text-muted-foreground md:text-lg",
				children: subtitle
			}) : null
		]
	});
}
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "galeria",
		className: "section-padding border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				kicker: "Punimet tona",
				title: "Galeria",
				subtitle: "Zgjidh nje kategori per te pare punimet."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: categories.map((cat) => {
					const cover = gallery.find((g) => g.category === cat.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/galeria/kategoria/$category",
						params: { category: cat.id },
						className: "group relative block overflow-hidden rounded-lg border border-border bg-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square overflow-hidden bg-secondary",
							children: cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cover.image,
								alt: cat.title,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							}) : null
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/70 to-transparent p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl uppercase text-foreground",
								children: cat.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: cat.description
							})]
						})]
					}, cat.id);
				})
			})]
		})
	});
}
var points = [
	"Matje falas ne vendin tuaj",
	"Materiale te certifikuara evropiane",
	"Montim profesional nga skuadra jone",
	"Garanci per punimin dhe materialin"
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "rreth-nesh",
		className: "section-padding border-t border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-4 md:grid-cols-2 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					kicker: "Rreth nesh",
					title: "Punishte lokale, standarde industriale."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base text-muted-foreground md:text-lg",
					children: "EDAL eshte nje biznes familjar ne Valias qe prej vitesh ofron punime nga duralumini dhe PVC per shtepi, apartamente dhe biznese ne te gjithe e zonen e Tiranes dhe Shqiperise. Cdo projekt matet, prodhohet dhe montohet nga skuadra jone."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "h-4 w-4",
								strokeWidth: 3
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: p
						})]
					}, p))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -translate-x-3 translate-y-3 border-2 border-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full flex-col justify-between gap-8 bg-surface p-8 md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-7xl leading-none text-primary md:text-9xl",
							children: "10+"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl uppercase text-foreground",
							children: "Vite eksperience"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Nga dritarja e pare deri te fasada me e madhe — te njejtat standarde, i njejti kujdes. Puna jone flet per ne."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-6 border-t border-border pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl text-foreground",
								children: "500+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Projekte"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl text-foreground",
								children: "100%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Garanci"
							})] })]
						})
					]
				})]
			})]
		})
	});
}
function Location() {
	const mapQuery = site.location.mapQuery;
	const mapEmbedSrc = getMapEmbedSrc(mapQuery);
	const directionsUrl = getDirectionsUrl(mapQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "lokacioni",
		className: "section-padding border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				kicker: "Na gjeni",
				title: "Lokacioni",
				subtitle: "Punishtja jone ndodhet ne Valias, vetem 1km larg Hallacit te Rruga e Re."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 lg:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" }),
						label: "Adresa",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-lg text-foreground",
							children: site.location.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: site.location.details
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: directionsUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-4 w-4" }), "Merr Drejtimet"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-lg border border-border bg-background lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Harta EDAL Duralumin & PVC",
						src: mapEmbedSrc,
						className: "h-[420px] w-full grayscale-[35%] contrast-125",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						allowFullScreen: true
					})
				})]
			})]
		})
	});
}
function getMapEmbedSrc(mapQuery) {
	if (/^https?:\/\//.test(mapQuery)) {
		if (mapQuery.includes("google.com/maps/embed")) return mapQuery;
		return `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
	}
	return `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
}
function getDirectionsUrl(mapQuery) {
	return /^https?:\/\//.test(mapQuery) ? mapQuery : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;
}
function InfoCard({ icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-background p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: icon
			}), label]
		}), children]
	});
}
var channels = [
	{
		key: "whatsapp",
		label: "WhatsApp",
		handle: site.contacts.whatsapp.display,
		href: site.contacts.whatsapp.link,
		cta: "Na shkruaj tani",
		Icon: WhatsappIcon
	},
	{
		key: "instagram",
		label: "Instagram",
		handle: site.contacts.instagram.handle,
		href: site.contacts.instagram.link,
		cta: "Na ndiq",
		Icon: InstagramIcon
	},
	{
		key: "facebook",
		label: "Facebook",
		handle: site.contacts.facebook.handle,
		href: site.contacts.facebook.link,
		cta: "Shiko faqen",
		Icon: FacebookIcon
	}
];
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "kontakt",
		className: "section-padding relative overflow-hidden border-t border-border bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-2 diagonal-stripes opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 text-center md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }),
						"Na kontaktoni",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mx-auto mt-4 max-w-3xl text-4xl uppercase md:text-6xl",
					children: [
						"Gati per ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "projektin"
						}),
						" tuaj?"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg",
					children: "Zgjidh menyren me te lehte per te na kontaktuar. Pergjigjemi shpejt cdo dite te javes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3",
					children: channels.map(({ key, label, handle, href, cta, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href,
						target: "_blank",
						rel: "noreferrer",
						className: "group relative flex flex-col items-center gap-4 rounded-lg border border-border bg-surface p-8 text-left transition-all hover:-translate-y-1 hover:border-primary hover:bg-surface-elevated hover:shadow-[var(--shadow-glow)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-bold uppercase tracking-widest text-muted-foreground",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-lg text-foreground",
									children: handle
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto text-xs font-bold uppercase tracking-widest text-primary",
								children: [cta, " →"]
							})
						]
					}, key))
				})
			]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Location, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
