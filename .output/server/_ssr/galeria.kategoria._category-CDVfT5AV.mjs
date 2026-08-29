import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/galeria.kategoria._category-CDVfT5AV.js
var $$splitComponentImporter = () => import("./galeria.kategoria._category-Clqslw2o.mjs");
var Route = createFileRoute("/galeria/kategoria/$category")({
	head: ({ params }) => ({ meta: [{ title: `${params.category} — EDAL` }, {
		name: "description",
		content: `Projektet tona ne kategorine ${params.category}.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
