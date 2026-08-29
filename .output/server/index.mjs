globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-08-29T19:53:51.134Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/vetrata4-iqGJVvL6.jpg": {
		"type": "image/jpeg",
		"etag": "\"8c85-Pf9x9LOVzVoTN5p1n0CTk9/++HE\"",
		"mtime": "2026-08-29T19:53:50.849Z",
		"size": 35973,
		"path": "../public/assets/vetrata4-iqGJVvL6.jpg"
	},
	"/assets/tendad8-DiR-UxpC.jpg": {
		"type": "image/jpeg",
		"etag": "\"13325-z3MDMsbfsZ3g6kLxb9TKOjNNh6c\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 78629,
		"path": "../public/assets/tendad8-DiR-UxpC.jpg"
	},
	"/assets/perde3-BZ0uWZOJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"e6fa-uJdvNPst3rz/MtYCaKeK00+R8rc\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 59130,
		"path": "../public/assets/perde3-BZ0uWZOJ.jpg"
	},
	"/assets/grila3-B7zTQ2zw.jpg": {
		"type": "image/jpeg",
		"etag": "\"1886f-Ie7S5Xj0x/D6waUwTC8Rg9ZIrSI\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 100463,
		"path": "../public/assets/grila3-B7zTQ2zw.jpg"
	},
	"/assets/tendad-BHlJ3xoi.jpg": {
		"type": "image/jpeg",
		"etag": "\"af10-BjNxxPdCL5tx3CcIOlHH754RmRw\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 44816,
		"path": "../public/assets/tendad-BHlJ3xoi.jpg"
	},
	"/assets/slide6-BLNzmJUC.jpg": {
		"type": "image/jpeg",
		"etag": "\"b5cb-2Qj20p0IbdUmusmlqYYPDq3Al6U\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 46539,
		"path": "../public/assets/slide6-BLNzmJUC.jpg"
	},
	"/assets/pvc7-Bop027eO.jpg": {
		"type": "image/jpeg",
		"etag": "\"5edf-Sj3wmcLe/K1gubIK36hGh7wPDkc\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 24287,
		"path": "../public/assets/pvc7-Bop027eO.jpg"
	},
	"/assets/pvc12-CypGqOBJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e912-PqXObmmkbPbgdvlO/ocYqUZ4nVM\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 125202,
		"path": "../public/assets/pvc12-CypGqOBJ.jpg"
	},
	"/assets/auto5-Cq4LaVUQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"17228-I/8kQvZKXB38tQorAWdxkmtC1nE\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 94760,
		"path": "../public/assets/auto5-Cq4LaVUQ.jpg"
	},
	"/assets/vetrata11-CKegIvOy.jpg": {
		"type": "image/jpeg",
		"etag": "\"16e90-pB+3n2xJgkY+0g3n9UUrpk00ggI\"",
		"mtime": "2026-08-29T19:53:50.849Z",
		"size": 93840,
		"path": "../public/assets/vetrata11-CKegIvOy.jpg"
	},
	"/assets/punimexh2-IWxlzoxQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"f7a2-hr0qB9v3sx3lBzfcQnxXperBRKQ\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 63394,
		"path": "../public/assets/punimexh2-IWxlzoxQ.jpg"
	},
	"/assets/tendad1-DT5aWYi0.jpg": {
		"type": "image/jpeg",
		"etag": "\"eefc-0HCuH8mMmho52Gh7dc5P8FG15Hk\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 61180,
		"path": "../public/assets/tendad1-DT5aWYi0.jpg"
	},
	"/assets/galeria._id-B_t7L9KL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b8-bU9T0rkPZFEAEQbQNKdRBHMUFGc\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 1464,
		"path": "../public/assets/galeria._id-B_t7L9KL.js"
	},
	"/assets/grila2-BBjBaj7U.jpg": {
		"type": "image/jpeg",
		"etag": "\"10584-bgQhAkwelOIp2H9RIl7MtE4NHkc\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 66948,
		"path": "../public/assets/grila2-BBjBaj7U.jpg"
	},
	"/assets/kabina21-umJe5QBo.jpg": {
		"type": "image/jpeg",
		"etag": "\"121c5-cWXNU+MlglBcNz83Vgd/95alRR4\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 74181,
		"path": "../public/assets/kabina21-umJe5QBo.jpg"
	},
	"/assets/perde4-BVHLPvwY.jpg": {
		"type": "image/jpeg",
		"etag": "\"1720d-ho2QGuETYkrbUwjorXBTiZ9ScBA\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 94733,
		"path": "../public/assets/perde4-BVHLPvwY.jpg"
	},
	"/assets/pvc14-BFEomFBi.jpg": {
		"type": "image/jpeg",
		"etag": "\"1324f-FUxxMgUy5yzm/mG8/hlOckwn5Dg\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 78415,
		"path": "../public/assets/pvc14-BFEomFBi.jpg"
	},
	"/assets/pvc16-Du7M7C9q.jpg": {
		"type": "image/jpeg",
		"etag": "\"22fd2-texDAwaGcvyp9U4kW9/X95bB+N8\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 143314,
		"path": "../public/assets/pvc16-Du7M7C9q.jpg"
	},
	"/assets/duralumin2-CODvDaoC.jpg": {
		"type": "image/jpeg",
		"etag": "\"f3b1-iMKvE2Aw8s3aXIw6nIonCOrtaL4\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 62385,
		"path": "../public/assets/duralumin2-CODvDaoC.jpg"
	},
	"/assets/gijotin-rCGyshO_.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b059-Cf24CA7y4SAzZypgzY2ZEKDUyMo\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 110681,
		"path": "../public/assets/gijotin-rCGyshO_.jpg"
	},
	"/assets/gijotina6-Crzobqrh.jpg": {
		"type": "image/jpeg",
		"etag": "\"16f95-XjljA2okGyDqhe30p4AJMCunMuI\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 94101,
		"path": "../public/assets/gijotina6-Crzobqrh.jpg"
	},
	"/assets/gijotina8-DzXw_8Oj.jpg": {
		"type": "image/jpeg",
		"etag": "\"170d2-+BoCksBoMljKjAIwxpT18CsAU58\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 94418,
		"path": "../public/assets/gijotina8-DzXw_8Oj.jpg"
	},
	"/assets/streha11-DD2TrRWg.jpg": {
		"type": "image/jpeg",
		"etag": "\"1fe66-Vfz3dOJVrtQ4iCkxawpo6VShpIA\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 130662,
		"path": "../public/assets/streha11-DD2TrRWg.jpg"
	},
	"/assets/grila12-DXQWDKXl.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ffee-pyzHEBXOg+3xLPjLmVZH3H2SMPs\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 196590,
		"path": "../public/assets/grila12-DXQWDKXl.jpg"
	},
	"/assets/perde1-1R3c87Vo.jpg": {
		"type": "image/jpeg",
		"etag": "\"10144-PyskaYxdMOMq2hn3PBBi/LxX3us\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 65860,
		"path": "../public/assets/perde1-1R3c87Vo.jpg"
	},
	"/assets/routes-Ba6ZMToi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59bb-20qxXlg4PmbdFAhosJYmAeVlCIg\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 22971,
		"path": "../public/assets/routes-Ba6ZMToi.js"
	},
	"/assets/grila10-fOSlEiac.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d8b8-r5pJpM9YXEME0ssz0QSg9KmcPfk\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 121016,
		"path": "../public/assets/grila10-fOSlEiac.jpg"
	},
	"/assets/grila5-BDccZQ-m.jpg": {
		"type": "image/jpeg",
		"etag": "\"16a1f-THxjyn5Q+VLuF4T0+QvR9CE8a2I\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 92703,
		"path": "../public/assets/grila5-BDccZQ-m.jpg"
	},
	"/assets/kabina15-CBjVF-N9.jpg": {
		"type": "image/jpeg",
		"etag": "\"8c89-p2QOsO0eVpcmu7N+5h2Z8XRJIu4\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 35977,
		"path": "../public/assets/kabina15-CBjVF-N9.jpg"
	},
	"/assets/gijotina3-czcOD5es.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b758-y6IVPXxTkldXW+FGp7xFYqkh4ME\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 112472,
		"path": "../public/assets/gijotina3-czcOD5es.jpg"
	},
	"/assets/kabina2-BLv_YITW.jpg": {
		"type": "image/jpeg",
		"etag": "\"bdca-2/6jN7c7QtGR2dfeyMsfG4XSr0Y\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 48586,
		"path": "../public/assets/kabina2-BLv_YITW.jpg"
	},
	"/assets/gijotina12-D7j-wmPz.jpg": {
		"type": "image/jpeg",
		"etag": "\"31409-oKFKLuWaOWR8ZtohT++3VeR5xng\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 201737,
		"path": "../public/assets/gijotina12-D7j-wmPz.jpg"
	},
	"/assets/vetrat15-DknArcbu.jpg": {
		"type": "image/jpeg",
		"etag": "\"219f8-eEO4uC4+tYD9CzTV+KW6GyvXFGY\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 137720,
		"path": "../public/assets/vetrat15-DknArcbu.jpg"
	},
	"/assets/pergola9-Cn9wLURa.jpg": {
		"type": "image/jpeg",
		"etag": "\"123c4-Vp+YA421sevy8OAgex4MkombT0s\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 74692,
		"path": "../public/assets/pergola9-Cn9wLURa.jpg"
	},
	"/assets/rrethim5-DeN65dKG.jpg": {
		"type": "image/jpeg",
		"etag": "\"7d1e-UabW8HFQ8+iCeVxAICvwS1cgXvw\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 32030,
		"path": "../public/assets/rrethim5-DeN65dKG.jpg"
	},
	"/assets/grila7-CNrzS-dI.jpg": {
		"type": "image/jpeg",
		"etag": "\"1346a-tC4AwvS9KVUmxVpK0vOS++ynjDQ\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 78954,
		"path": "../public/assets/grila7-CNrzS-dI.jpg"
	},
	"/assets/duralumin-MpbMj2ys.jpg": {
		"type": "image/jpeg",
		"etag": "\"128c6-6Eg2IGzfCD8Iih5nI+OaRD+JPHA\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 75974,
		"path": "../public/assets/duralumin-MpbMj2ys.jpg"
	},
	"/assets/pvc5-Bbz4_mse.jpg": {
		"type": "image/jpeg",
		"etag": "\"b6f5-rjMiP6XKvWezYD3/Q4faol5Q1vI\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 46837,
		"path": "../public/assets/pvc5-Bbz4_mse.jpg"
	},
	"/assets/streha3-kMxnqLu2.jpeg": {
		"type": "image/jpeg",
		"etag": "\"114e0-MlT4/Ipnk/d2ebo5dRsShYnJ0m4\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 70880,
		"path": "../public/assets/streha3-kMxnqLu2.jpeg"
	},
	"/assets/kabina3-C1GXb2Lm.jpg": {
		"type": "image/jpeg",
		"etag": "\"d25a-YjM8D64F0zbDOuVFOw5/1rWq+Hw\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 53850,
		"path": "../public/assets/kabina3-C1GXb2Lm.jpg"
	},
	"/assets/rrethim4-fi5J9nqM.jpg": {
		"type": "image/jpeg",
		"etag": "\"974a-d9x33CrdE//UPActVBeIwq/dooA\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 38730,
		"path": "../public/assets/rrethim4-fi5J9nqM.jpg"
	},
	"/assets/rrethim14-tIKGkYKr.jpg": {
		"type": "image/jpeg",
		"etag": "\"1503e-nqj9X+k0lfC04BfyCxi1HUnOE5Q\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 86078,
		"path": "../public/assets/rrethim14-tIKGkYKr.jpg"
	},
	"/assets/rrethim10-BlCOU0ku.jpg": {
		"type": "image/jpeg",
		"etag": "\"c2d4-Pb1EEREhH8FKq3mKA/bWumxCGWU\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 49876,
		"path": "../public/assets/rrethim10-BlCOU0ku.jpg"
	},
	"/assets/kabina25-DkOWfuXB.jpg": {
		"type": "image/jpeg",
		"etag": "\"2248c-BHuXAdsnOFcnl2zo4B8Xw4KxPI4\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 140428,
		"path": "../public/assets/kabina25-DkOWfuXB.jpg"
	},
	"/assets/gallery-D0UuPbKq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"46f1-4aHebCP4bEJr8fS4817FOYNeES8\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 18161,
		"path": "../public/assets/gallery-D0UuPbKq.js"
	},
	"/assets/grila8-BiumSE1e.jpg": {
		"type": "image/jpeg",
		"etag": "\"18c40-HK7LNWXUbRlyWVcEa0vXylZezXk\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 101440,
		"path": "../public/assets/grila8-BiumSE1e.jpg"
	},
	"/assets/index-CMPg7ZnF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a606-OAQ9Tz9FEaZwPOCyN/sYodV6MNk\"",
		"mtime": "2026-08-29T19:53:50.839Z",
		"size": 304646,
		"path": "../public/assets/index-CMPg7ZnF.js"
	},
	"/assets/tendad2-ChRRJCB1.jpg": {
		"type": "image/jpeg",
		"etag": "\"8403-nGacCn+gNhm/Pva5cX5cIjfxh0g\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 33795,
		"path": "../public/assets/tendad2-ChRRJCB1.jpg"
	},
	"/assets/galeria.kategoria._category-DQuyMrO9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24c-ZflVLsIoUQsTnPD1RlQ67hAM79I\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 588,
		"path": "../public/assets/galeria.kategoria._category-DQuyMrO9.js"
	},
	"/assets/punimexh8-Caqcl6zT.jpg": {
		"type": "image/jpeg",
		"etag": "\"22427-u0PxKtzEAovQUgJaJHM3mFlDpLs\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 140327,
		"path": "../public/assets/punimexh8-Caqcl6zT.jpg"
	},
	"/assets/rrethim1-CgsfJM0x.jpg": {
		"type": "image/jpeg",
		"etag": "\"aba6-Ja7+I/2YTG7UUHrLs762ImoMyaU\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 43942,
		"path": "../public/assets/rrethim1-CgsfJM0x.jpg"
	},
	"/assets/hero-C_s4r-DH.jpg": {
		"type": "image/jpeg",
		"etag": "\"3aad-8g5e01njC4ccrhOlqt9oW022CGM\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 15021,
		"path": "../public/assets/hero-C_s4r-DH.jpg"
	},
	"/assets/pergola13-Dl3QCUMS.jpg": {
		"type": "image/jpeg",
		"etag": "\"af63-ZUMzHBFsjmlfD58NBsbz7xKHUig\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 44899,
		"path": "../public/assets/pergola13-Dl3QCUMS.jpg"
	},
	"/assets/vetrata10-s-NoITrJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"17eff-cmgmT3OIspW/8hlOoG9jBopwLFE\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 98047,
		"path": "../public/assets/vetrata10-s-NoITrJ.jpg"
	},
	"/assets/kabina8-C1vlSJMo.jpg": {
		"type": "image/jpeg",
		"etag": "\"896d-bn9aUEahDJtQWs/bjB5TCKLcAkQ\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 35181,
		"path": "../public/assets/kabina8-C1vlSJMo.jpg"
	},
	"/assets/categories-DU5rfj-7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65e-Lmk9skRYgsAdCGyRwE5BHIKOH1w\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 1630,
		"path": "../public/assets/categories-DU5rfj-7.js"
	},
	"/assets/qepen1-BhMLZSZc.jpg": {
		"type": "image/jpeg",
		"etag": "\"136b0-FjodbewSw64MWSmfNclJhFVXs5A\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 79536,
		"path": "../public/assets/qepen1-BhMLZSZc.jpg"
	},
	"/assets/pergola4-B7Wck1fp.jpg": {
		"type": "image/jpeg",
		"etag": "\"1eb4c-3jqxrDcwzNcX9w7vkb35TCe9QXA\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 125772,
		"path": "../public/assets/pergola4-B7Wck1fp.jpg"
	},
	"/assets/kabina17-J5_h_WWg.jpg": {
		"type": "image/jpeg",
		"etag": "\"bd2f-zJX1Li1gkspnJCwBuGCLxtjHrvc\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 48431,
		"path": "../public/assets/kabina17-J5_h_WWg.jpg"
	},
	"/assets/pvc1-DYrX3AqQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"5f3f-2YSVe0fI9/THwbHGwKEqw8esak4\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 24383,
		"path": "../public/assets/pvc1-DYrX3AqQ.jpg"
	},
	"/assets/rrethim3-D_oUzDzE.jpg": {
		"type": "image/jpeg",
		"etag": "\"b0d4-ybbS+FM8xuLPK7hDfFygW9doZWA\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 45268,
		"path": "../public/assets/rrethim3-D_oUzDzE.jpg"
	},
	"/assets/duralumi3-CpUA5itL.jpg": {
		"type": "image/jpeg",
		"etag": "\"1fe49-GUx3EK1ctvsu9w9ZKgsMtu41S8k\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 130633,
		"path": "../public/assets/duralumi3-CpUA5itL.jpg"
	},
	"/assets/kabina1-BdFjoyEa.jpg": {
		"type": "image/jpeg",
		"etag": "\"12748-UBfK4PBkJ315rpYJoULVWGqHSWs\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 75592,
		"path": "../public/assets/kabina1-BdFjoyEa.jpg"
	},
	"/assets/kabina7-BP5jmM0o.jpg": {
		"type": "image/jpeg",
		"etag": "\"781b-nDivBgbJrDY2OTGZeBEJhuqgcCw\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 30747,
		"path": "../public/assets/kabina7-BP5jmM0o.jpg"
	},
	"/assets/punimexh15-DLSIuVa6.jpg": {
		"type": "image/jpeg",
		"etag": "\"1216d-XXxQrGITX2uNSGZIg5q3uQVFZ9c\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 74093,
		"path": "../public/assets/punimexh15-DLSIuVa6.jpg"
	},
	"/assets/pergola14-BJaYsMwE.jpg": {
		"type": "image/jpeg",
		"etag": "\"13d45-pOZr9knHcr20fGiKanY5PAwMOHY\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 81221,
		"path": "../public/assets/pergola14-BJaYsMwE.jpg"
	},
	"/assets/punimexh6-ah1t4cQi.jpg": {
		"type": "image/jpeg",
		"etag": "\"10961-tl+JvFY1Ehd0UZPzValTl+Vyvw0\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 67937,
		"path": "../public/assets/punimexh6-ah1t4cQi.jpg"
	},
	"/assets/pvc13-Dn8unDAw.jpg": {
		"type": "image/jpeg",
		"etag": "\"2777f-P2uQNBwM8SW+XYjHQxQ/cIAPwJQ\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 161663,
		"path": "../public/assets/pvc13-Dn8unDAw.jpg"
	},
	"/assets/auto-C4vTd18y.jpg": {
		"type": "image/jpeg",
		"etag": "\"7368-xbdBqrxjcVfhS07Xc/BNp24CohI\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 29544,
		"path": "../public/assets/auto-C4vTd18y.jpg"
	},
	"/assets/tendad14-Cvg5JyhX.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b6ad-rh6i3jahmnGyS7xqnBsLKDUlFkE\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 112301,
		"path": "../public/assets/tendad14-Cvg5JyhX.jpg"
	},
	"/assets/punimexh12-M5GdgAhN.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b961-vTfNsKhakIWW7MO4pNStNAk1WQ0\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 112993,
		"path": "../public/assets/punimexh12-M5GdgAhN.jpg"
	},
	"/assets/tendad4-CfUuOW3l.jpg": {
		"type": "image/jpeg",
		"etag": "\"b448-WJsHy9Ig72l9I8EkaHKZN9Qx++k\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 46152,
		"path": "../public/assets/tendad4-CfUuOW3l.jpg"
	},
	"/assets/punimexh9-96Qnzk7U.jpg": {
		"type": "image/jpeg",
		"etag": "\"2582e-FXDuflIwPr4H5PfuAwUEut30sg0\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 153646,
		"path": "../public/assets/punimexh9-96Qnzk7U.jpg"
	},
	"/assets/rrethim6-D3CqqGO7.jpg": {
		"type": "image/jpeg",
		"etag": "\"12138-fVOkHZV+UDX4aoDV34muYulT88k\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 74040,
		"path": "../public/assets/rrethim6-D3CqqGO7.jpg"
	},
	"/assets/auto6-C3LyVkgv.jpg": {
		"type": "image/jpeg",
		"etag": "\"7337-HXXETgb5y6nrl+6+XwLrYmhP5iI\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 29495,
		"path": "../public/assets/auto6-C3LyVkgv.jpg"
	},
	"/assets/pergola11-BLMS6Y8W.jpg": {
		"type": "image/jpeg",
		"etag": "\"26e23-L91ZmzPpC3HCnWf1WbTR6c3TOyU\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 159267,
		"path": "../public/assets/pergola11-BLMS6Y8W.jpg"
	},
	"/assets/slide4-DoQHddDh.jpg": {
		"type": "image/jpeg",
		"etag": "\"2749b-i2urNO7ElXd80WQDc23ypiT6GUc\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 160923,
		"path": "../public/assets/slide4-DoQHddDh.jpg"
	},
	"/assets/slide1-DHQl38aZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"217db-vQy4YAPJGvS6zJsnMa05Pw7N2ms\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 137179,
		"path": "../public/assets/slide1-DHQl38aZ.jpg"
	},
	"/assets/vetrata6-zqahxuvy.jpg": {
		"type": "image/jpeg",
		"etag": "\"e144-vbUtxEUkfKscmYLl/yZ+bnxwxEQ\"",
		"mtime": "2026-08-29T19:53:50.849Z",
		"size": 57668,
		"path": "../public/assets/vetrata6-zqahxuvy.jpg"
	},
	"/assets/pergola1-BCiuFQft.jpg": {
		"type": "image/jpeg",
		"etag": "\"17910-U7JMRvkv6ifwq5DITBYlJjapLYU\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 96528,
		"path": "../public/assets/pergola1-BCiuFQft.jpg"
	},
	"/assets/qepen4-DCUiWQm3.jpg": {
		"type": "image/jpeg",
		"etag": "\"12fe2-l1pfTojiN8pM7dXP3ez0MgasF9w\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 77794,
		"path": "../public/assets/qepen4-DCUiWQm3.jpg"
	},
	"/assets/pergola17-CIoSzwZv.jpg": {
		"type": "image/jpeg",
		"etag": "\"204fe-O2+droCFoNCOBzMjhhKdGZYfjyk\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 132350,
		"path": "../public/assets/pergola17-CIoSzwZv.jpg"
	},
	"/assets/kabina-D16Y4XbA.jpg": {
		"type": "image/jpeg",
		"etag": "\"1046e-xbxYsrCSNrWa9M0mdiZR11F+K+s\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 66670,
		"path": "../public/assets/kabina-D16Y4XbA.jpg"
	},
	"/assets/kabina20-BfVJU8V6.jpg": {
		"type": "image/jpeg",
		"etag": "\"b72b-ZHUPHoRhy71ZELnx6DoMZyc/OKA\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 46891,
		"path": "../public/assets/kabina20-BfVJU8V6.jpg"
	},
	"/assets/punimexh17-DgrcslOg.jpg": {
		"type": "image/jpeg",
		"etag": "\"27807-RYKUxfo3Q3e6xrPP1CTRuwjgeAQ\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 161799,
		"path": "../public/assets/punimexh17-DgrcslOg.jpg"
	},
	"/assets/pvc15-nIfrREP3.jpg": {
		"type": "image/jpeg",
		"etag": "\"12b29-W1U7mnTZsMVVagcmcwIy7L8dEko\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 76585,
		"path": "../public/assets/pvc15-nIfrREP3.jpg"
	},
	"/assets/tendad10-6ozoPwv1.jpg": {
		"type": "image/jpeg",
		"etag": "\"18728-AfjAgA4D5GOIoP+Ffwa9tLiVT+I\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 100136,
		"path": "../public/assets/tendad10-6ozoPwv1.jpg"
	},
	"/assets/streha-M69umCxf.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1e7da-kooI99MuB1sjkpKSHFpJme8snKk\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 124890,
		"path": "../public/assets/streha-M69umCxf.jpeg"
	},
	"/assets/gijotina13-C2d2vAQ9.jpg": {
		"type": "image/jpeg",
		"etag": "\"29eca-wXA4CAMkGrjBtrztpLaotgn6ajA\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 171722,
		"path": "../public/assets/gijotina13-C2d2vAQ9.jpg"
	},
	"/assets/gijotina7-Bsb94Yi_.jpg": {
		"type": "image/jpeg",
		"etag": "\"1adbc-A1VCrcR38/SoEmUYZyW8VtOosyU\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 110012,
		"path": "../public/assets/gijotina7-Bsb94Yi_.jpg"
	},
	"/assets/gijotina10-C8taXbOL.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d1a7-niVlY3VYPQX4gtZ+g3+oU+beNCc\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 119207,
		"path": "../public/assets/gijotina10-C8taXbOL.jpg"
	},
	"/assets/tendad13-Dcur4ZvC.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c356-4x+OzkILkk/MwvQ6aFzYbgngQB0\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 115542,
		"path": "../public/assets/tendad13-Dcur4ZvC.jpg"
	},
	"/assets/grila1-2Wc5F7qA.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b926-7d8E9SL19d51+s+ib1MkCj6GQdY\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 112934,
		"path": "../public/assets/grila1-2Wc5F7qA.jpg"
	},
	"/assets/vetrata12-wdUnsYUT.jpg": {
		"type": "image/jpeg",
		"etag": "\"20df1-WyKKQdEXKga7vDgaQ9Rl5msZx3Q\"",
		"mtime": "2026-08-29T19:53:50.849Z",
		"size": 134641,
		"path": "../public/assets/vetrata12-wdUnsYUT.jpg"
	},
	"/assets/preload-helper-Xi5tXFgJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1839-CBYqikikq1uBY2cx57ZQa6xqyf8\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 6201,
		"path": "../public/assets/preload-helper-Xi5tXFgJ.js"
	},
	"/assets/pergola2-B9aNfsXH.jpg": {
		"type": "image/jpeg",
		"etag": "\"211e9-dLfzrP3WpDF+qO0+mhRmfDlyIkg\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 135657,
		"path": "../public/assets/pergola2-B9aNfsXH.jpg"
	},
	"/assets/gijotina9-9N0qmuW3.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bb28-UjL0oReyiq+NbzqEvwv35F0Moe4\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 113448,
		"path": "../public/assets/gijotina9-9N0qmuW3.jpg"
	},
	"/assets/vetrata13-Dox-d8z2.jpg": {
		"type": "image/jpeg",
		"etag": "\"191be-I2OopAmvtYCpOIC0xlkzkBlLwTA\"",
		"mtime": "2026-08-29T19:53:50.849Z",
		"size": 102846,
		"path": "../public/assets/vetrata13-Dox-d8z2.jpg"
	},
	"/assets/punimexh16-CmhpIFmF.jpg": {
		"type": "image/jpeg",
		"etag": "\"14164-ZDlIT/8WfAbbzHZQ/MQFaQVyQDs\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 82276,
		"path": "../public/assets/punimexh16-CmhpIFmF.jpg"
	},
	"/assets/auto4-BmqEwCzk.jpg": {
		"type": "image/jpeg",
		"etag": "\"8a67-gu8OXMkKNNWrMu9niFiWt+nfIN4\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 35431,
		"path": "../public/assets/auto4-BmqEwCzk.jpg"
	},
	"/assets/pvc9-DpxR-Ibs.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dbb0-bc6Hp8XHcZDxNGiIaDxhzcCwkpc\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 121776,
		"path": "../public/assets/pvc9-DpxR-Ibs.jpg"
	},
	"/assets/tendad12-8E1NJglA.jpg": {
		"type": "image/jpeg",
		"etag": "\"14bf0-KaGCjOScYjLUWk/gw0ka5TVAgFE\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 84976,
		"path": "../public/assets/tendad12-8E1NJglA.jpg"
	},
	"/assets/pvc4-DPTne35Z.jpg": {
		"type": "image/jpeg",
		"etag": "\"19d35-oavfW7Fe1J0/VO2MtvxtNpmNkn8\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 105781,
		"path": "../public/assets/pvc4-DPTne35Z.jpg"
	},
	"/assets/auto3-p9WkcmG1.jpg": {
		"type": "image/jpeg",
		"etag": "\"b52c-6HiluM/mf9Zb7X3dKhzOaE0psAo\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 46380,
		"path": "../public/assets/auto3-p9WkcmG1.jpg"
	},
	"/assets/rrethim-BCeXsYFV.jpg": {
		"type": "image/jpeg",
		"etag": "\"154a8-CPFcy/JYReqmXKD4lsh5W4/X55s\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 87208,
		"path": "../public/assets/rrethim-BCeXsYFV.jpg"
	},
	"/assets/vetrata14-DHQ4zRDh.jpg": {
		"type": "image/jpeg",
		"etag": "\"324c3-FH9NjJQnG+/7If5gf32k31rkDBg\"",
		"mtime": "2026-08-29T19:53:50.849Z",
		"size": 206019,
		"path": "../public/assets/vetrata14-DHQ4zRDh.jpg"
	},
	"/assets/perde-VEh3LQ6u.jpg": {
		"type": "image/jpeg",
		"etag": "\"d81f-ku87iNiA6zPUM3TUmulPkU4Akyk\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 55327,
		"path": "../public/assets/perde-VEh3LQ6u.jpg"
	},
	"/assets/punimexh5-D62TJ7s5.jpg": {
		"type": "image/jpeg",
		"etag": "\"23f6-JfHXN6JwUuz3j0otgiXuQFjgILU\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 9206,
		"path": "../public/assets/punimexh5-D62TJ7s5.jpg"
	},
	"/assets/streha1-CSyn0fnx.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1cc6d-kq2rCORcfjIF55J2BlpJ0O45Uk4\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 117869,
		"path": "../public/assets/streha1-CSyn0fnx.jpeg"
	},
	"/assets/vetrata3-CU3NkBuL.jpg": {
		"type": "image/jpeg",
		"etag": "\"ea23-xujUlZexqwiN7aJStJGDOMOMYKs\"",
		"mtime": "2026-08-29T19:53:50.849Z",
		"size": 59939,
		"path": "../public/assets/vetrata3-CU3NkBuL.jpg"
	},
	"/assets/rrethim13-KgG2PjnQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"170d3-MJ0DfwUv8xnIy6a3tbXm2MzQBD0\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 94419,
		"path": "../public/assets/rrethim13-KgG2PjnQ.jpg"
	},
	"/assets/punimexh10-BLfDEtNp.jpg": {
		"type": "image/jpeg",
		"etag": "\"23cd9-ElDg75/Za8OXHtjLfkuNEEqzI10\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 146649,
		"path": "../public/assets/punimexh10-BLfDEtNp.jpg"
	},
	"/assets/vetrata1-DGcEV-dk.jpg": {
		"type": "image/jpeg",
		"etag": "\"19cdf-kDRN/YuMWQPYUIkA2X16xjqcOO8\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 105695,
		"path": "../public/assets/vetrata1-DGcEV-dk.jpg"
	},
	"/assets/pvc-UoQqA5AK.jpg": {
		"type": "image/jpeg",
		"etag": "\"9cf5-rNSOCAKJhevW4wLXCzbwjoaBrf4\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 40181,
		"path": "../public/assets/pvc-UoQqA5AK.jpg"
	},
	"/assets/rrethim2-DMFirmOx.jpg": {
		"type": "image/jpeg",
		"etag": "\"be76-cqhmI3QEW84sq++x6EBZntimmZE\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 48758,
		"path": "../public/assets/rrethim2-DMFirmOx.jpg"
	},
	"/assets/auto2-6cmmXVTz.jpg": {
		"type": "image/jpeg",
		"etag": "\"7616-MmgFSDFmnMfrl0BAcXQvRzqv+CU\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 30230,
		"path": "../public/assets/auto2-6cmmXVTz.jpg"
	},
	"/assets/tendad7-82wzpOq1.jpg": {
		"type": "image/jpeg",
		"etag": "\"24f99-zl6nhXgOLid1T+CWCuO2Jn0zzFM\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 151449,
		"path": "../public/assets/tendad7-82wzpOq1.jpg"
	},
	"/assets/qepen2-eJ31v1Ci.jpg": {
		"type": "image/jpeg",
		"etag": "\"13f16-jO0kAjrp83H9RhK3u+oHrL6Aw5Y\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 81686,
		"path": "../public/assets/qepen2-eJ31v1Ci.jpg"
	},
	"/assets/punimexh13-DOGKpIPC.jpg": {
		"type": "image/jpeg",
		"etag": "\"19976-+oPJJSIxAC1vM2obQgVjO7sXUwo\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 104822,
		"path": "../public/assets/punimexh13-DOGKpIPC.jpg"
	},
	"/assets/grila4-B0l71R1A.jpg": {
		"type": "image/jpeg",
		"etag": "\"14312-ZghNTjPNEOb6yZjmLtyTP+TxZKI\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 82706,
		"path": "../public/assets/grila4-B0l71R1A.jpg"
	},
	"/assets/pvc6-TVEvIKFg.jpg": {
		"type": "image/jpeg",
		"etag": "\"ddb0-XPYQo918DIB3G0JaYalrK95QiZE\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 56752,
		"path": "../public/assets/pvc6-TVEvIKFg.jpg"
	},
	"/assets/pergola16-DeOzeHr8.jpg": {
		"type": "image/jpeg",
		"etag": "\"19d98-CXv3OuB7fid9QmeEf1dXJW3tJkQ\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 105880,
		"path": "../public/assets/pergola16-DeOzeHr8.jpg"
	},
	"/assets/gijotina11-CfjTIEJZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"318c2-9OtvxXHTKc9NlJOucjnzKck+wVk\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 202946,
		"path": "../public/assets/gijotina11-CfjTIEJZ.jpg"
	},
	"/assets/slide2-D1bfOIqf.jpg": {
		"type": "image/jpeg",
		"etag": "\"21de7-PTqmq5/GbEEcOz7KerSo4hRSqTU\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 138727,
		"path": "../public/assets/slide2-D1bfOIqf.jpg"
	},
	"/assets/tendad3-4bNiu17o.jpg": {
		"type": "image/jpeg",
		"etag": "\"d4e3-KDj9CW2XLAWoZgPesexjyH+RHN4\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 54499,
		"path": "../public/assets/tendad3-4bNiu17o.jpg"
	},
	"/assets/galeria.kategoria._category-DgJkL9g1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6bd-wI3KCEcrFVj/46VaQ1GICPMJeqk\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 1725,
		"path": "../public/assets/galeria.kategoria._category-DgJkL9g1.js"
	},
	"/assets/gijotina1-BagtfO-v.jpg": {
		"type": "image/jpeg",
		"etag": "\"277cd-K1sPKb5SGfPXoKK5Reb0XIsLFfI\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 161741,
		"path": "../public/assets/gijotina1-BagtfO-v.jpg"
	},
	"/assets/tendad5-7pyCmufZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"101bd-w2SOO/SjLvY2QZ6GIIURbvVyqWc\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 65981,
		"path": "../public/assets/tendad5-7pyCmufZ.jpg"
	},
	"/assets/gijotina2-CuoiuZB7.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bce0-Ccu1C0CXLqHHASinsVl691NTvdQ\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 179424,
		"path": "../public/assets/gijotina2-CuoiuZB7.jpg"
	},
	"/assets/pvc11-CigXYh1r.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ded6-F8esEyRdKFxsvruD8IOxwbGjpPg\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 122582,
		"path": "../public/assets/pvc11-CigXYh1r.jpg"
	},
	"/assets/styles-BavJBDxO.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13d6c-vlf2h9ZuYCRKPNfc0/iMBuKc9kQ\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 81260,
		"path": "../public/assets/styles-BavJBDxO.css"
	},
	"/assets/kabina22-A0DzQeYC.jpg": {
		"type": "image/jpeg",
		"etag": "\"189c3-u09o4YkeGDGuVWIfNe/cI2xE8Kw\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 100803,
		"path": "../public/assets/kabina22-A0DzQeYC.jpg"
	},
	"/assets/vetrata7-BRNjMBZK.jpg": {
		"type": "image/jpeg",
		"etag": "\"1040c-8tQ8Uqnj0yXwZQpdc/P7MkUHHH8\"",
		"mtime": "2026-08-29T19:53:50.849Z",
		"size": 66572,
		"path": "../public/assets/vetrata7-BRNjMBZK.jpg"
	},
	"/assets/qepen3-BWh9cAe9.jpg": {
		"type": "image/jpeg",
		"etag": "\"11493-gGt8fY4N4uZBkO447QgvzFLM6Mc\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 70803,
		"path": "../public/assets/qepen3-BWh9cAe9.jpg"
	},
	"/assets/pvc2-CgVseZHB.jpg": {
		"type": "image/jpeg",
		"etag": "\"9822-vJ0ns96hPABhXWM2/nffMVL9x0c\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 38946,
		"path": "../public/assets/pvc2-CgVseZHB.jpg"
	},
	"/assets/gijotina4-_4EepUXn.jpg": {
		"type": "image/jpeg",
		"etag": "\"15571-S04CDS2yo+flDvhavJePCqOE7Jw\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 87409,
		"path": "../public/assets/gijotina4-_4EepUXn.jpg"
	},
	"/assets/streha10-OCREI8YZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ca34-HCZc2CSwYL4RUF0FExFYYXuMGxc\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 117300,
		"path": "../public/assets/streha10-OCREI8YZ.jpg"
	},
	"/assets/punimexh11-DlkMJ8Ug.jpg": {
		"type": "image/jpeg",
		"etag": "\"21fcb-VJBM5QslEkYm6d6EO+CcnpegGH0\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 139211,
		"path": "../public/assets/punimexh11-DlkMJ8Ug.jpg"
	},
	"/assets/tendad11-WHTKRuZ4.jpg": {
		"type": "image/jpeg",
		"etag": "\"17a55-wZoOduSfSmBQWP9sYNiZM6nGscE\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 96853,
		"path": "../public/assets/tendad11-WHTKRuZ4.jpg"
	},
	"/assets/punimexh7-wtw5a4dv.jpg": {
		"type": "image/jpeg",
		"etag": "\"10ada-buEV4HGfVuzBn825od4tUFUh7pM\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 68314,
		"path": "../public/assets/punimexh7-wtw5a4dv.jpg"
	},
	"/assets/rrethim7-Cg6kuBGm.jpg": {
		"type": "image/jpeg",
		"etag": "\"ceca-1N2hpLiqnaOThX6YvAvdXp0E9dA\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 52938,
		"path": "../public/assets/rrethim7-Cg6kuBGm.jpg"
	},
	"/assets/kabina5-CMw8tVC0.jpg": {
		"type": "image/jpeg",
		"etag": "\"a3a9-OCFGuhcAwnkciHzFUtMJflXc5Nw\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 41897,
		"path": "../public/assets/kabina5-CMw8tVC0.jpg"
	},
	"/assets/slide7-BRVXGxul.jpg": {
		"type": "image/jpeg",
		"etag": "\"26654-lJ2Xyi3xXXcH2diMUlMa/I56KNc\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 157268,
		"path": "../public/assets/slide7-BRVXGxul.jpg"
	},
	"/assets/vetrata2-D51Kt3BF.jpg": {
		"type": "image/jpeg",
		"etag": "\"162ec-vr5BtkJpsAyEPsLQR4dR0TAiIQQ\"",
		"mtime": "2026-08-29T19:53:50.849Z",
		"size": 90860,
		"path": "../public/assets/vetrata2-D51Kt3BF.jpg"
	},
	"/assets/rrethim9-CGrJsmFW.jpg": {
		"type": "image/jpeg",
		"etag": "\"e85a-9hZRvoDQo1xvCnOwQkl1BAhicnk\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 59482,
		"path": "../public/assets/rrethim9-CGrJsmFW.jpg"
	},
	"/assets/streha8-C4DOeo-B.jpg": {
		"type": "image/jpeg",
		"etag": "\"233ba-TIz8hDuz1xFG0ZPMAG8JJ7HjQgQ\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 144314,
		"path": "../public/assets/streha8-C4DOeo-B.jpg"
	},
	"/assets/pergola3-C7vzDFMz.jpg": {
		"type": "image/jpeg",
		"etag": "\"2760e-7j+ZgO57nYz9+Jb7InsARyrBvmo\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 161294,
		"path": "../public/assets/pergola3-C7vzDFMz.jpg"
	},
	"/assets/pergola8-CY50qVkg.jpg": {
		"type": "image/jpeg",
		"etag": "\"14a8e-9DU6SutYsopSU0nERTRMcBjys7s\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 84622,
		"path": "../public/assets/pergola8-CY50qVkg.jpg"
	},
	"/assets/streha4-BG_ci3L1.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ecb-9DPuMg/dSfLw+ojLEHiVCtQsKKU\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 7883,
		"path": "../public/assets/streha4-BG_ci3L1.jpg"
	},
	"/assets/pergola-E4KGDqXQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"11ab9-/UEudbIB4lBhLJ+CNcvW7X9NowM\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 72377,
		"path": "../public/assets/pergola-E4KGDqXQ.jpg"
	},
	"/assets/pvc0-Cej4Jg1F.jpg": {
		"type": "image/jpeg",
		"etag": "\"17cca-G0ooqXrlLp9iX+O2gcp2rqsIAGg\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 97482,
		"path": "../public/assets/pvc0-Cej4Jg1F.jpg"
	},
	"/assets/pvc8-HzZWRs98.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c911-R1Ysc8OI1tXR/rGhefVhuBEVVsI\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 117009,
		"path": "../public/assets/pvc8-HzZWRs98.jpg"
	},
	"/assets/tendad6-BZcNA1T7.jpg": {
		"type": "image/jpeg",
		"etag": "\"1046b-hkzt6jgO9lkjxaH6FsUQzDhTqXE\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 66667,
		"path": "../public/assets/tendad6-BZcNA1T7.jpg"
	},
	"/assets/rrethim12-BZu7zLFm.jpg": {
		"type": "image/jpeg",
		"etag": "\"15398-GSeRdJ7uZxmJcI+OAFc1kH09zZM\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 86936,
		"path": "../public/assets/rrethim12-BZu7zLFm.jpg"
	},
	"/assets/pergola18-DeAKYffI.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b280-IIMxQ5TuofeAQLEkaecUnA6COk4\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 111232,
		"path": "../public/assets/pergola18-DeAKYffI.jpg"
	},
	"/assets/grila9-e2haPiPC.jpg": {
		"type": "image/jpeg",
		"etag": "\"1336c-0CVLLOcLoaqlrI6tWlFol+TCHq0\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 78700,
		"path": "../public/assets/grila9-e2haPiPC.jpg"
	},
	"/assets/grila-q5hHYd71.jpg": {
		"type": "image/jpeg",
		"etag": "\"15b22-qWqOoZC3tVVmh2qDluY3JzpJMd4\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 88866,
		"path": "../public/assets/grila-q5hHYd71.jpg"
	},
	"/assets/rrethim11-l3VazyN2.jpg": {
		"type": "image/jpeg",
		"etag": "\"11370-2wdT+FaN7fEFp0gZpNSjzxGZ3rY\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 70512,
		"path": "../public/assets/rrethim11-l3VazyN2.jpg"
	},
	"/assets/pergola6-CulxjsJS.jpg": {
		"type": "image/jpeg",
		"etag": "\"19d98-zaLcQftLBAyMXVSiF2gB7V3UGb4\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 105880,
		"path": "../public/assets/pergola6-CulxjsJS.jpg"
	},
	"/assets/qepen5-Bj4_3_8c.jpg": {
		"type": "image/jpeg",
		"etag": "\"18e97-W7zo2WOlfl35eFUyIIXzH/stmEc\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 102039,
		"path": "../public/assets/qepen5-Bj4_3_8c.jpg"
	},
	"/assets/slide3-BPtcPkBB.jpg": {
		"type": "image/jpeg",
		"etag": "\"f81e-Y+FInVxfLtTUtSL6IphO+BRvUBs\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 63518,
		"path": "../public/assets/slide3-BPtcPkBB.jpg"
	},
	"/assets/vetrata5-CFiMP9Wt.jpg": {
		"type": "image/jpeg",
		"etag": "\"1851-2QLSTNfvj22I0juu2luWXVJMs7M\"",
		"mtime": "2026-08-29T19:53:50.849Z",
		"size": 6225,
		"path": "../public/assets/vetrata5-CFiMP9Wt.jpg"
	},
	"/assets/rrethim8-CaWDauog.jpg": {
		"type": "image/jpeg",
		"etag": "\"c45b-EhbQxzHKrpfeaBG3boVpTXEYQGU\"",
		"mtime": "2026-08-29T19:53:50.846Z",
		"size": 50267,
		"path": "../public/assets/rrethim8-CaWDauog.jpg"
	},
	"/assets/kabina24-DrFy8-Ne.jpg": {
		"type": "image/jpeg",
		"etag": "\"19b82-mv++lZiqvtoJj1Pl+nv/92R94ik\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 105346,
		"path": "../public/assets/kabina24-DrFy8-Ne.jpg"
	},
	"/assets/logo-CKLfQ-lg.png": {
		"type": "image/png",
		"etag": "\"379e-Y08WzQe8V1h6+TNE5hpo7b68ay4\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 14238,
		"path": "../public/assets/logo-CKLfQ-lg.png"
	},
	"/assets/tendad9-Bc1tFl8d.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a88d-3BGHxeucftmsoATZkDKYzvHhr/g\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 108685,
		"path": "../public/assets/tendad9-Bc1tFl8d.jpg"
	},
	"/assets/slide5-a6cR4wGm.jpg": {
		"type": "image/jpeg",
		"etag": "\"22e04-utZqQ/bewgZDP3epqGX4/EjWuWc\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 142852,
		"path": "../public/assets/slide5-a6cR4wGm.jpg"
	},
	"/assets/streha6-lqEZBUIX.jpg": {
		"type": "image/jpeg",
		"etag": "\"113c3-D3/JaDK/Fg0wYOoLzcG6gLdZAr8\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 70595,
		"path": "../public/assets/streha6-lqEZBUIX.jpg"
	},
	"/assets/pvc3-Ce3TK-sm.jpg": {
		"type": "image/jpeg",
		"etag": "\"72ee-ktTSm72E3vStP5ZIwOGqbnpCzE0\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 29422,
		"path": "../public/assets/pvc3-Ce3TK-sm.jpg"
	},
	"/assets/streha2-Blduz5fO.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2254d-NCrqbY2WuHrN679Rlms0/RCx6Pw\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 140621,
		"path": "../public/assets/streha2-Blduz5fO.jpeg"
	},
	"/assets/grila6-bhlEc2Lg.jpg": {
		"type": "image/jpeg",
		"etag": "\"18cfb-lgrUPMox5dRo2iJoRS9Ncs5eYsM\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 101627,
		"path": "../public/assets/grila6-bhlEc2Lg.jpg"
	},
	"/assets/vetrata8-Cvh15-kV.jpg": {
		"type": "image/jpeg",
		"etag": "\"1934d-sjNtld+em4mIRb2UafMSASFgSlM\"",
		"mtime": "2026-08-29T19:53:50.849Z",
		"size": 103245,
		"path": "../public/assets/vetrata8-Cvh15-kV.jpg"
	},
	"/assets/punimexh14-BwIMRMqF.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bfe5-biGUCPN4wuuWG8HoQ0EHQXkoeMM\"",
		"mtime": "2026-08-29T19:53:50.843Z",
		"size": 114661,
		"path": "../public/assets/punimexh14-BwIMRMqF.jpg"
	},
	"/assets/grila11-BwSVbOOE.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c37e-CsJT2RnRdSfSAj2plvmgUUx1Sl4\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 115582,
		"path": "../public/assets/grila11-BwSVbOOE.jpg"
	},
	"/assets/streha12-UAcQrKHk.jpg": {
		"type": "image/jpeg",
		"etag": "\"28006-skPecK+34Cz/+XLOKfN2BypGBWE\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 163846,
		"path": "../public/assets/streha12-UAcQrKHk.jpg"
	},
	"/assets/punimexh4-7fIdaXfA.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d47-4EIWx3fFeYKDq4xKO6uTQF6r2PU\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 7495,
		"path": "../public/assets/punimexh4-7fIdaXfA.jpg"
	},
	"/assets/streha7-DbiXldoY.jpg": {
		"type": "image/jpeg",
		"etag": "\"34754-4zw6sidciqBsxRvgZShEO7nexJM\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 214868,
		"path": "../public/assets/streha7-DbiXldoY.jpg"
	},
	"/assets/link-sDQV9wD2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8967-w+p3kwpgqtwlhyRkTGKilLrKLOI\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 35175,
		"path": "../public/assets/link-sDQV9wD2.js"
	},
	"/assets/gijotina5-xFXthrAa.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bee6-88356OtTD6KCet/X0iQEVjsYMCg\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 114406,
		"path": "../public/assets/gijotina5-xFXthrAa.jpg"
	},
	"/assets/kabina23-BxVKqDSP.jpg": {
		"type": "image/jpeg",
		"etag": "\"11737-iMUNU4K00+9HzwbX5vJezdeZi4E\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 71479,
		"path": "../public/assets/kabina23-BxVKqDSP.jpg"
	},
	"/assets/qepen-CC31v8EE.jpg": {
		"type": "image/jpeg",
		"etag": "\"13cf5-QqqPZQiS9BrF2csZedKodlKytls\"",
		"mtime": "2026-08-29T19:53:50.845Z",
		"size": 81141,
		"path": "../public/assets/qepen-CC31v8EE.jpg"
	},
	"/assets/grila13-B0btrkXG.jpg": {
		"type": "image/jpeg",
		"etag": "\"27dfb-6UUjuPcbB07kSzi8ySMkGMrxAdM\"",
		"mtime": "2026-08-29T19:53:50.841Z",
		"size": 163323,
		"path": "../public/assets/grila13-B0btrkXG.jpg"
	},
	"/assets/streha9-CW6_5Gih.jpg": {
		"type": "image/jpeg",
		"etag": "\"21fbb-PMzZO9hENC0DrlkG+bEZWcmbBL0\"",
		"mtime": "2026-08-29T19:53:50.848Z",
		"size": 139195,
		"path": "../public/assets/streha9-CW6_5Gih.jpg"
	},
	"/assets/pvc10-Bxmqfpg2.jpg": {
		"type": "image/jpeg",
		"etag": "\"264fd-nnnXql3dVvugtqS89ni96GmSXG8\"",
		"mtime": "2026-08-29T19:53:50.844Z",
		"size": 156925,
		"path": "../public/assets/pvc10-Bxmqfpg2.jpg"
	},
	"/assets/perde2-CMVQA8Y9.jpg": {
		"type": "image/jpeg",
		"etag": "\"11c0f-W14QJm7lt3Dd74tEiEv/YNjNfrg\"",
		"mtime": "2026-08-29T19:53:50.842Z",
		"size": 72719,
		"path": "../public/assets/perde2-CMVQA8Y9.jpg"
	},
	"/assets/streha5-sqIk1DIH.jpg": {
		"type": "image/jpeg",
		"etag": "\"190b-M25+cxlsgJrHelTQGKBpS8CsWhI\"",
		"mtime": "2026-08-29T19:53:50.847Z",
		"size": 6411,
		"path": "../public/assets/streha5-sqIk1DIH.jpg"
	},
	"/assets/galeria._id-Bt1cZ7Xv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e1-RLt0iaO4BHD/7nEM5Iw3W4wU0VU\"",
		"mtime": "2026-08-29T19:53:50.840Z",
		"size": 481,
		"path": "../public/assets/galeria._id-Bt1cZ7Xv.js"
	},
	"/assets/vetrata9-Oa48qml2.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a519-LPtHVq+Ui/gzv/FMyVjyxkbNNsk\"",
		"mtime": "2026-08-29T19:53:50.849Z",
		"size": 107801,
		"path": "../public/assets/vetrata9-Oa48qml2.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_isIpMx = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_isIpMx
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
