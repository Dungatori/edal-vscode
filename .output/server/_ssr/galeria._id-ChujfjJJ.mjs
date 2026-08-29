import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./galeria._id-Cec7S5_l.mjs";
import { t as gallery } from "./gallery-DK8QAyj8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/galeria._id-ChujfjJJ.js
var import_jsx_runtime = require_jsx_runtime();
function GaleriaItemPage() {
	const { id } = Route.useParams();
	const item = gallery.find((g) => g.id === id);
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 md:px-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Produkti nuk u gjet."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				hash: "galeria",
				className: "mt-4 inline-block text-primary underline",
				children: "← Kthehu ne galerine kryesore"
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/galeria/kategoria/$category",
				params: { category: item.category },
				className: "text-sm font-bold uppercase tracking-widest text-primary hover:underline",
				children: ["← Kthehu tek ", item.category]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 overflow-hidden rounded-lg border border-border bg-background",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.title,
					className: "w-full h-auto object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold uppercase tracking-widest text-primary",
							children: item.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 text-3xl uppercase text-foreground",
							children: item.title
						}),
						item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: item.description
						}) : null
					]
				})]
			})]
		})
	});
}
//#endregion
export { GaleriaItemPage as component };
