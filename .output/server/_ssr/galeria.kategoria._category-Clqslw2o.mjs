import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as gallery } from "./gallery-84CsvgH6.mjs";
import { t as Route } from "./galeria.kategoria._category-CDVfT5AV.mjs";
import { t as categories } from "./categories-CMF4BEdx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/galeria.kategoria._category-Clqslw2o.js
var import_jsx_runtime = require_jsx_runtime();
function KategoriaPage() {
	const { category } = Route.useParams();
	const items = gallery.filter((g) => g.category === category);
	const info = categories.find((c) => c.id === category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: "galeria",
					className: "text-sm font-bold uppercase tracking-widest text-primary hover:underline",
					children: "← Kthehu ne galerine kryesore"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 text-4xl uppercase text-foreground",
					children: info?.title ?? category
				}),
				info?.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: info.description
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/galeria/$id",
						params: { id: item.id },
						className: "group relative block overflow-hidden rounded-lg border border-border bg-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: item.title,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg uppercase text-foreground",
								children: item.title
							}), item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground line-clamp-2",
								children: item.description
							}) : null]
						})]
					}, item.id))
				}),
				items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 rounded-lg border border-dashed border-border p-10 text-center text-muted-foreground",
					children: "Asnje produkt ne kete kategori."
				}) : null
			]
		})
	});
}
//#endregion
export { KategoriaPage as component };
