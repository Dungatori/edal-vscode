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
		"mtime": "2026-08-29T19:36:07.047Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/rrethim9-C2DRQFnp.jpg": {
		"type": "image/jpeg",
		"etag": "\"f280-vu3YZXPzTIjCU51CQBrXvpULC0Y\"",
		"mtime": "2026-08-29T19:36:05.691Z",
		"size": 62080,
		"path": "../public/assets/rrethim9-C2DRQFnp.jpg"
	},
	"/assets/pvc15-BNgiJanx.jpg": {
		"type": "image/jpeg",
		"etag": "\"15a5d-gcJBMuHJuIHRJuHYJLTOAptKlCs\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 88669,
		"path": "../public/assets/pvc15-BNgiJanx.jpg"
	},
	"/assets/perde-B9gG56rt.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ac2f-HrjrS+4nTcnQKH5sqrSijo4GP0U\"",
		"mtime": "2026-08-29T19:36:05.641Z",
		"size": 109615,
		"path": "../public/assets/perde-B9gG56rt.jpg"
	},
	"/assets/streha6-D2BZskfi.jpg": {
		"type": "image/jpeg",
		"etag": "\"48791-e8wbIAOHBbXwkyZE8JQonsWWJ1I\"",
		"mtime": "2026-08-29T19:36:05.729Z",
		"size": 296849,
		"path": "../public/assets/streha6-D2BZskfi.jpg"
	},
	"/assets/grila8-hOhAhf4X.jpg": {
		"type": "image/jpeg",
		"etag": "\"7da33-cWfLLQ26fZhff8O3TXBP/8lFmTQ\"",
		"mtime": "2026-08-29T19:36:05.629Z",
		"size": 514611,
		"path": "../public/assets/grila8-hOhAhf4X.jpg"
	},
	"/assets/vetrata11-xqkGcwHc.jpg": {
		"type": "image/jpeg",
		"etag": "\"29836-5Lagr+xcgZjNlJUjPBKOZseHMLw\"",
		"mtime": "2026-08-29T19:36:05.768Z",
		"size": 170038,
		"path": "../public/assets/vetrata11-xqkGcwHc.jpg"
	},
	"/assets/pvc13-CWm53pQa.jpg": {
		"type": "image/jpeg",
		"etag": "\"31356-qFIxRnu4wqQTH/IUhLLs9w1Wcm8\"",
		"mtime": "2026-08-29T19:36:05.676Z",
		"size": 201558,
		"path": "../public/assets/pvc13-CWm53pQa.jpg"
	},
	"/assets/vetrata9-SFbMSp04.jpg": {
		"type": "image/jpeg",
		"etag": "\"2575c-E2gpFAXU5w5GXRMALI6NlJk38fM\"",
		"mtime": "2026-08-29T19:36:05.782Z",
		"size": 153436,
		"path": "../public/assets/vetrata9-SFbMSp04.jpg"
	},
	"/assets/rrethim14-BEAV3usm.jpg": {
		"type": "image/jpeg",
		"etag": "\"2423b0-ZWIguTqV1YghkogS4xT/FIF1Bc8\"",
		"mtime": "2026-08-29T19:36:05.686Z",
		"size": 2368432,
		"path": "../public/assets/rrethim14-BEAV3usm.jpg"
	},
	"/assets/gijotina1-B_UDvZuq.jpg": {
		"type": "image/jpeg",
		"etag": "\"5f4b4-LJbxgYxD56PIDR5AcTPJqxrn65w\"",
		"mtime": "2026-08-29T19:36:05.604Z",
		"size": 390324,
		"path": "../public/assets/gijotina1-B_UDvZuq.jpg"
	},
	"/assets/streha10-D4rJuQHx.jpg": {
		"type": "image/jpeg",
		"etag": "\"458d5-7fK+uCSfVHJuTBFI+VfMts37y9A\"",
		"mtime": "2026-08-29T19:36:05.720Z",
		"size": 284885,
		"path": "../public/assets/streha10-D4rJuQHx.jpg"
	},
	"/assets/rrethim-D4wnuO8r.png": {
		"type": "image/png",
		"etag": "\"21197d-FS+Tvu6c0owY4Zz9adRoxXm8X1U\"",
		"mtime": "2026-08-29T19:36:05.682Z",
		"size": 2169213,
		"path": "../public/assets/rrethim-D4wnuO8r.png"
	},
	"/assets/streha5-BHmu4oaP.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d10-qODf50UMTHZC8ayF5Reg5L2nbdk\"",
		"mtime": "2026-08-29T19:36:05.729Z",
		"size": 7440,
		"path": "../public/assets/streha5-BHmu4oaP.jpg"
	},
	"/assets/duralumin-CxZArEQB.png": {
		"type": "image/png",
		"etag": "\"1c25b2-dPwuM1LMgrxfE0JZ/+9ET5SsPjc\"",
		"mtime": "2026-08-29T19:36:05.602Z",
		"size": 1844658,
		"path": "../public/assets/duralumin-CxZArEQB.png"
	},
	"/assets/perde3-T5uQWBRL.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d71f-CMjUGv3YlRrMzThsJIJHRWD1O+Q\"",
		"mtime": "2026-08-29T19:36:05.641Z",
		"size": 120607,
		"path": "../public/assets/perde3-T5uQWBRL.jpg"
	},
	"/assets/galeria._id-Bcl9gXxE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e1-k1vsGYRb9aB/eCEW0zgKrQRBlSU\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 481,
		"path": "../public/assets/galeria._id-Bcl9gXxE.js"
	},
	"/assets/streha9-D8PsT_mu.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b88d-NC0bntc8+gyWuf9XI7XMb3cCK90\"",
		"mtime": "2026-08-29T19:36:05.735Z",
		"size": 243853,
		"path": "../public/assets/streha9-D8PsT_mu.jpg"
	},
	"/assets/punimexh8-B9Fc2Yik.jpg": {
		"type": "image/jpeg",
		"etag": "\"2827be-4pYwtDspJtpmiami5Zgkhz7LgTc\"",
		"mtime": "2026-08-29T19:36:05.670Z",
		"size": 2631614,
		"path": "../public/assets/punimexh8-B9Fc2Yik.jpg"
	},
	"/assets/gijotin-BjEuG7xf.png": {
		"type": "image/png",
		"etag": "\"156208-zXj9GSxHhkRe/Wgy9xDhZQUUeNU\"",
		"mtime": "2026-08-29T19:36:05.603Z",
		"size": 1401352,
		"path": "../public/assets/gijotin-BjEuG7xf.png"
	},
	"/assets/kabina22-C_TzvPSC.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fa9b6-tlz3xvRwFA2ir4+L9ZqeNbZAIv0\"",
		"mtime": "2026-08-29T19:36:05.632Z",
		"size": 3123638,
		"path": "../public/assets/kabina22-C_TzvPSC.jpg"
	},
	"/assets/tendad2-S_4V_PEI.jpg": {
		"type": "image/jpeg",
		"etag": "\"90bf-hBe+b6ktaZ4IC3ImfjkuxY/oxAI\"",
		"mtime": "2026-08-29T19:36:05.751Z",
		"size": 37055,
		"path": "../public/assets/tendad2-S_4V_PEI.jpg"
	},
	"/assets/hero-CJExD5T9.jpg": {
		"type": "image/jpeg",
		"etag": "\"da70-vGu2wVigEdSQfCwuw1TVruGYIus\"",
		"mtime": "2026-08-29T19:36:05.630Z",
		"size": 55920,
		"path": "../public/assets/hero-CJExD5T9.jpg"
	},
	"/assets/tendad14-BYrgrTo3.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d7b0e-+nJVUooneXYKbfvB9+DEvgkIc9I\"",
		"mtime": "2026-08-29T19:36:05.750Z",
		"size": 1932046,
		"path": "../public/assets/tendad14-BYrgrTo3.jpg"
	},
	"/assets/vetrata1-CmKrfAST.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e2f0-lQ+lr9320eYBXrz8V8eoGDlzNVk\"",
		"mtime": "2026-08-29T19:36:05.768Z",
		"size": 254704,
		"path": "../public/assets/vetrata1-CmKrfAST.jpg"
	},
	"/assets/tendad11-KOaKX1ni.jpg": {
		"type": "image/jpeg",
		"etag": "\"40cba5-tfIfliRAVjID5gfVf47WZUWq3Ak\"",
		"mtime": "2026-08-29T19:36:05.737Z",
		"size": 4246437,
		"path": "../public/assets/tendad11-KOaKX1ni.jpg"
	},
	"/assets/punimexh12-BusdTY2F.jpg": {
		"type": "image/jpeg",
		"etag": "\"240041-gGtgwNRy2mtB+JdrB224qmpwb3w\"",
		"mtime": "2026-08-29T19:36:05.649Z",
		"size": 2359361,
		"path": "../public/assets/punimexh12-BusdTY2F.jpg"
	},
	"/assets/qepen1-r_XReXv2.jpg": {
		"type": "image/jpeg",
		"etag": "\"3577a-5KJ7Lq59ZuqGZb39qGaWRE52w2E\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 219002,
		"path": "../public/assets/qepen1-r_XReXv2.jpg"
	},
	"/assets/kabina21-DJdhuaZf.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f0c52-oID3DHxn9NY7FDDrztJqy9H4uUY\"",
		"mtime": "2026-08-29T19:36:05.632Z",
		"size": 3083346,
		"path": "../public/assets/kabina21-DJdhuaZf.jpg"
	},
	"/assets/vetrata2-B5FvWM10.jpg": {
		"type": "image/jpeg",
		"etag": "\"34789-ONKeHj7IwU8yjSSaDc9WGZ+KJRM\"",
		"mtime": "2026-08-29T19:36:05.781Z",
		"size": 214921,
		"path": "../public/assets/vetrata2-B5FvWM10.jpg"
	},
	"/assets/auto-ZJQ2bx9j.png": {
		"type": "image/png",
		"etag": "\"49002-/LUl5OuqRPYhiACKcHfhirFCv1g\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 299010,
		"path": "../public/assets/auto-ZJQ2bx9j.png"
	},
	"/assets/pergola16-Cu_ZfYkm.jpg": {
		"type": "image/jpeg",
		"etag": "\"27761-BcJNNShLLY7ou+Bmq4NXtavZYmE\"",
		"mtime": "2026-08-29T19:36:05.643Z",
		"size": 161633,
		"path": "../public/assets/pergola16-Cu_ZfYkm.jpg"
	},
	"/assets/punimexh17-B_J-LM8r.jpg": {
		"type": "image/jpeg",
		"etag": "\"59a370-0oErn55oE2dlu36ufFbO7UecFpI\"",
		"mtime": "2026-08-29T19:36:05.664Z",
		"size": 5874544,
		"path": "../public/assets/punimexh17-B_J-LM8r.jpg"
	},
	"/assets/vetrata7-Cx3C62oO.jpg": {
		"type": "image/jpeg",
		"etag": "\"17fdd-fyPCGe+YDUF6+an++TZUgsIve3M\"",
		"mtime": "2026-08-29T19:36:05.781Z",
		"size": 98269,
		"path": "../public/assets/vetrata7-Cx3C62oO.jpg"
	},
	"/assets/qepen3-CH-2dtX8.jpg": {
		"type": "image/jpeg",
		"etag": "\"18cf3e-ifEdlpeCPWybewtWMA59+ekr5gs\"",
		"mtime": "2026-08-29T19:36:05.678Z",
		"size": 1625918,
		"path": "../public/assets/qepen3-CH-2dtX8.jpg"
	},
	"/assets/rrethim5-DQuqyupM.jpg": {
		"type": "image/jpeg",
		"etag": "\"8049-xRTUdqK9LDK+vAlOW4PxanplNOE\"",
		"mtime": "2026-08-29T19:36:05.691Z",
		"size": 32841,
		"path": "../public/assets/rrethim5-DQuqyupM.jpg"
	},
	"/assets/qepen5-CGde1Uuj.jpg": {
		"type": "image/jpeg",
		"etag": "\"25589d-2P0L4/97auVN4KWOcWNLOd9VhZU\"",
		"mtime": "2026-08-29T19:36:05.679Z",
		"size": 2447517,
		"path": "../public/assets/qepen5-CGde1Uuj.jpg"
	},
	"/assets/punimexh5-Db25SS4F.jpg": {
		"type": "image/jpeg",
		"etag": "\"2a28-r7zA8GwuuXK3JlIUNOXjog5K2gY\"",
		"mtime": "2026-08-29T19:36:05.669Z",
		"size": 10792,
		"path": "../public/assets/punimexh5-Db25SS4F.jpg"
	},
	"/assets/gijotina3-BazCY-C5.jpg": {
		"type": "image/jpeg",
		"etag": "\"63e3e-yAPMSr4qZvpAGl6F/xknGRFBObE\"",
		"mtime": "2026-08-29T19:36:05.616Z",
		"size": 409150,
		"path": "../public/assets/gijotina3-BazCY-C5.jpg"
	},
	"/assets/perde1-EALjzPan.jpg": {
		"type": "image/jpeg",
		"etag": "\"2060e-GnAMEFOfocnQrQrxmtrFtDNNerQ\"",
		"mtime": "2026-08-29T19:36:05.641Z",
		"size": 132622,
		"path": "../public/assets/perde1-EALjzPan.jpg"
	},
	"/assets/gijotina13-xdVdJBa_.jpg": {
		"type": "image/jpeg",
		"etag": "\"5cc431-HXdHc7FMxq6Sw+V4tPox/5qhuN4\"",
		"mtime": "2026-08-29T19:36:05.611Z",
		"size": 6079537,
		"path": "../public/assets/gijotina13-xdVdJBa_.jpg"
	},
	"/assets/tendad8-DJUphrF_.jpg": {
		"type": "image/jpeg",
		"etag": "\"26ff35-ZizBKetHc8kEkDt4z2JM7SZ5X6E\"",
		"mtime": "2026-08-29T19:36:05.753Z",
		"size": 2555701,
		"path": "../public/assets/tendad8-DJUphrF_.jpg"
	},
	"/assets/punimexh11-CfpO4y-A.jpg": {
		"type": "image/jpeg",
		"etag": "\"2a5c67-OloaDGSJf7ntWPkR4Srl08pb96Q\"",
		"mtime": "2026-08-29T19:36:05.645Z",
		"size": 2776167,
		"path": "../public/assets/punimexh11-CfpO4y-A.jpg"
	},
	"/assets/pergola18-CBlKD7lA.jpg": {
		"type": "image/jpeg",
		"etag": "\"209774-YX5+vGWoyvgU+P+s2aQvcFhXk9Y\"",
		"mtime": "2026-08-29T19:36:05.643Z",
		"size": 2135924,
		"path": "../public/assets/pergola18-CBlKD7lA.jpg"
	},
	"/assets/categories-DU5rfj-7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65e-Lmk9skRYgsAdCGyRwE5BHIKOH1w\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 1630,
		"path": "../public/assets/categories-DU5rfj-7.js"
	},
	"/assets/rrethim7-D0ymOWtR.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d086-7s38uQkx07WPGAPsywmGgd4eLS0\"",
		"mtime": "2026-08-29T19:36:05.691Z",
		"size": 118918,
		"path": "../public/assets/rrethim7-D0ymOWtR.jpg"
	},
	"/assets/punimexh14-DvtDSYxu.jpg": {
		"type": "image/jpeg",
		"etag": "\"2286c7-xZZq8ijSPl4hF397aeQLs4gCKxU\"",
		"mtime": "2026-08-29T19:36:05.651Z",
		"size": 2262727,
		"path": "../public/assets/punimexh14-DvtDSYxu.jpg"
	},
	"/assets/vetrata8-Bk92gAgR.jpg": {
		"type": "image/jpeg",
		"etag": "\"23f99-h2U8mA/RVjv9WEJsRZ30fqGpVOs\"",
		"mtime": "2026-08-29T19:36:05.781Z",
		"size": 147353,
		"path": "../public/assets/vetrata8-Bk92gAgR.jpg"
	},
	"/assets/gijotina10-DBCfEtLL.jpg": {
		"type": "image/jpeg",
		"etag": "\"20ee2d-BSGEHoRqlooI/RIcVmxRgslJY7k\"",
		"mtime": "2026-08-29T19:36:05.604Z",
		"size": 2158125,
		"path": "../public/assets/gijotina10-DBCfEtLL.jpg"
	},
	"/assets/gijotina12-BF3H8qkD.jpg": {
		"type": "image/jpeg",
		"etag": "\"60df34-jR/dx/c54YfWFVbUUoLMlu/DBI8\"",
		"mtime": "2026-08-29T19:36:05.609Z",
		"size": 6348596,
		"path": "../public/assets/gijotina12-BF3H8qkD.jpg"
	},
	"/assets/pvc12-BQIOeIcd.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bd24-v3ZkjI+1KhVMNp2W6T/506h4E+8\"",
		"mtime": "2026-08-29T19:36:05.676Z",
		"size": 245028,
		"path": "../public/assets/pvc12-BQIOeIcd.jpg"
	},
	"/assets/pergola-C4l5LmXk.jpg": {
		"type": "image/jpeg",
		"etag": "\"2dfb1-SkurXtavjVhOxQ+JFplgHxM/fg4\"",
		"mtime": "2026-08-29T19:36:05.641Z",
		"size": 188337,
		"path": "../public/assets/pergola-C4l5LmXk.jpg"
	},
	"/assets/rrethim13-CGT1i9AO.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ab7d3-//S36l96YRUpKymhgxlE/k4dCMQ\"",
		"mtime": "2026-08-29T19:36:05.683Z",
		"size": 2799571,
		"path": "../public/assets/rrethim13-CGT1i9AO.jpg"
	},
	"/assets/qepen-BnXsTyxG.jpg": {
		"type": "image/jpeg",
		"etag": "\"3f6cc-E3gdTp6kuqNxtPLg+P/eV4Nws6E\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 259788,
		"path": "../public/assets/qepen-BnXsTyxG.jpg"
	},
	"/assets/pvc16-S9CmXWNl.jpg": {
		"type": "image/jpeg",
		"etag": "\"2863c-9QVO9PJ0VnTwBXXDqDy98NbIx6g\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 165436,
		"path": "../public/assets/pvc16-S9CmXWNl.jpg"
	},
	"/assets/grila5-BINLxuwN.jpg": {
		"type": "image/jpeg",
		"etag": "\"29c65-rD7sw1voNSkNh/efObVbTMkotnw\"",
		"mtime": "2026-08-29T19:36:05.628Z",
		"size": 171109,
		"path": "../public/assets/grila5-BINLxuwN.jpg"
	},
	"/assets/rrethim11-CjxERhLV.jpg": {
		"type": "image/jpeg",
		"etag": "\"14177-8jpfPBwaq7GoDMmJEXXJk3z47js\"",
		"mtime": "2026-08-29T19:36:05.683Z",
		"size": 82295,
		"path": "../public/assets/rrethim11-CjxERhLV.jpg"
	},
	"/assets/punimexh4-D7QILbaV.jpg": {
		"type": "image/jpeg",
		"etag": "\"2280-hwcdsFpRnDwiO+cI9ij78r66tqU\"",
		"mtime": "2026-08-29T19:36:05.669Z",
		"size": 8832,
		"path": "../public/assets/punimexh4-D7QILbaV.jpg"
	},
	"/assets/rrethim3-DB_cuvgZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"19746-PwihQWZtra1EL6I35D1CK1ouubk\"",
		"mtime": "2026-08-29T19:36:05.691Z",
		"size": 104262,
		"path": "../public/assets/rrethim3-DB_cuvgZ.jpg"
	},
	"/assets/gijotina6--3wyTW4N.jpg": {
		"type": "image/jpeg",
		"etag": "\"49d3d-M8SO3pTtKP34E3hO3Q8ya3Z0BY8\"",
		"mtime": "2026-08-29T19:36:05.616Z",
		"size": 302397,
		"path": "../public/assets/gijotina6--3wyTW4N.jpg"
	},
	"/assets/perde2-FC3HwaEG.jpg": {
		"type": "image/jpeg",
		"etag": "\"24501-s+1/Mpvh0S65LL1R1kc/ewii+ZU\"",
		"mtime": "2026-08-29T19:36:05.641Z",
		"size": 148737,
		"path": "../public/assets/perde2-FC3HwaEG.jpg"
	},
	"/assets/pvc11-8OoTscO6.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bf51-+x/04kiMr7bSJWnCHvjYJDyRJI0\"",
		"mtime": "2026-08-29T19:36:05.676Z",
		"size": 245585,
		"path": "../public/assets/pvc11-8OoTscO6.jpg"
	},
	"/assets/slide3-DtYXGv7u.jpg": {
		"type": "image/jpeg",
		"etag": "\"fb2a4-IIuzBTuD2w92fUEyGT5AEkm9RVY\"",
		"mtime": "2026-08-29T19:36:05.702Z",
		"size": 1028772,
		"path": "../public/assets/slide3-DtYXGv7u.jpg"
	},
	"/assets/tendad13-CpM5dHdE.jpg": {
		"type": "image/jpeg",
		"etag": "\"44e628-oP84M7cIyY7RpNI/gWK1wxpNXdw\"",
		"mtime": "2026-08-29T19:36:05.745Z",
		"size": 4515368,
		"path": "../public/assets/tendad13-CpM5dHdE.jpg"
	},
	"/assets/grila6-CsSIA3Z7.jpg": {
		"type": "image/jpeg",
		"etag": "\"2373ee-KCYFknZhuvqel2xy2E+L9Vi1XZs\"",
		"mtime": "2026-08-29T19:36:05.628Z",
		"size": 2323438,
		"path": "../public/assets/grila6-CsSIA3Z7.jpg"
	},
	"/assets/pvc4-DnOgE6Bk.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e90a-dIeA/vDBzeWT1/1mYgEnuhJuruQ\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 125194,
		"path": "../public/assets/pvc4-DnOgE6Bk.jpg"
	},
	"/assets/auto2-BASSjPy-.jpg": {
		"type": "image/jpeg",
		"etag": "\"8b7d-qYUJFKIiVQSYF4hxHMlzaovXOAo\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 35709,
		"path": "../public/assets/auto2-BASSjPy-.jpg"
	},
	"/assets/auto6-BkPaCIuM.jpg": {
		"type": "image/jpeg",
		"etag": "\"12452-yY1IJ3tjSlRvKJAgFpwUCoVfgQk\"",
		"mtime": "2026-08-29T19:36:05.602Z",
		"size": 74834,
		"path": "../public/assets/auto6-BkPaCIuM.jpg"
	},
	"/assets/kabina-CY6OPMiS.png": {
		"type": "image/png",
		"etag": "\"174edb-LaNELku/gBhU7wmqcT6G/yJ349k\"",
		"mtime": "2026-08-29T19:36:05.630Z",
		"size": 1527515,
		"path": "../public/assets/kabina-CY6OPMiS.png"
	},
	"/assets/pvc3-DJzq9np4.jpg": {
		"type": "image/jpeg",
		"etag": "\"8abd-Z4qU3+PCUEnzC6Jy20E9C9tbqBw\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 35517,
		"path": "../public/assets/pvc3-DJzq9np4.jpg"
	},
	"/assets/pvc6-BE7XDaYb.jpg": {
		"type": "image/jpeg",
		"etag": "\"fc44-GlOXeX0qsnAQdL+9n1voN8cVjtM\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 64580,
		"path": "../public/assets/pvc6-BE7XDaYb.jpg"
	},
	"/assets/pvc5-CW5LLP7H.jpg": {
		"type": "image/jpeg",
		"etag": "\"ce9f-BY5JHFcahb8La7KtGgK1jMFzXlI\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 52895,
		"path": "../public/assets/pvc5-CW5LLP7H.jpg"
	},
	"/assets/qepen4-DfaEMgUe.jpg": {
		"type": "image/jpeg",
		"etag": "\"18f4eb-RHEid+xTT4Anhv5swbD+edYHsxg\"",
		"mtime": "2026-08-29T19:36:05.678Z",
		"size": 1635563,
		"path": "../public/assets/qepen4-DfaEMgUe.jpg"
	},
	"/assets/gijotina7-BftnQQFH.jpg": {
		"type": "image/jpeg",
		"etag": "\"55423-XxoaamZkTDILk1qbQVSOIbh8MCM\"",
		"mtime": "2026-08-29T19:36:05.616Z",
		"size": 349219,
		"path": "../public/assets/gijotina7-BftnQQFH.jpg"
	},
	"/assets/kabina15-wutdehfB.jpg": {
		"type": "image/jpeg",
		"etag": "\"11ee9-PQh3uEFUi7DGmIRXMUOXJbhbSeM\"",
		"mtime": "2026-08-29T19:36:05.631Z",
		"size": 73449,
		"path": "../public/assets/kabina15-wutdehfB.jpg"
	},
	"/assets/grila3-RXbiEGpY.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c793-Oqg1Hc6txfDbBSPipADHBfVxwNI\"",
		"mtime": "2026-08-29T19:36:05.628Z",
		"size": 182163,
		"path": "../public/assets/grila3-RXbiEGpY.jpg"
	},
	"/assets/vetrata13-CFQgwZSB.jpg": {
		"type": "image/jpeg",
		"etag": "\"24da2-FXBhmuEyog2ukWvZfXiKYJQSmiQ\"",
		"mtime": "2026-08-29T19:36:05.769Z",
		"size": 150946,
		"path": "../public/assets/vetrata13-CFQgwZSB.jpg"
	},
	"/assets/rrethim4-mYaX8nOH.jpg": {
		"type": "image/jpeg",
		"etag": "\"9ca8-HJLG9FHc6MiVGyg3dVccHOSnZjY\"",
		"mtime": "2026-08-29T19:36:05.691Z",
		"size": 40104,
		"path": "../public/assets/rrethim4-mYaX8nOH.jpg"
	},
	"/assets/pvc7-CRSOzCA6.jpg": {
		"type": "image/jpeg",
		"etag": "\"bb8d-Zh5u5/rzyH+JM/1cj+r9UUUxZ5k\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 48013,
		"path": "../public/assets/pvc7-CRSOzCA6.jpg"
	},
	"/assets/vetrata4-7OUinOLP.jpg": {
		"type": "image/jpeg",
		"etag": "\"a0a6-8q/AWgzHfK6Uf3sRaaGu1aHr4zE\"",
		"mtime": "2026-08-29T19:36:05.781Z",
		"size": 41126,
		"path": "../public/assets/vetrata4-7OUinOLP.jpg"
	},
	"/assets/preload-helper-Xi5tXFgJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1839-CBYqikikq1uBY2cx57ZQa6xqyf8\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 6201,
		"path": "../public/assets/preload-helper-Xi5tXFgJ.js"
	},
	"/assets/gijotina2-DYR4zeo4.jpg": {
		"type": "image/jpeg",
		"etag": "\"4432f-gsx89+Ugu9mo67qNvFkPkI+bzRU\"",
		"mtime": "2026-08-29T19:36:05.615Z",
		"size": 279343,
		"path": "../public/assets/gijotina2-DYR4zeo4.jpg"
	},
	"/assets/vetrata5-ByJ7OwCp.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c09-XN+4uEFNpiwaZxrCuNKErDSbp8o\"",
		"mtime": "2026-08-29T19:36:05.781Z",
		"size": 7177,
		"path": "../public/assets/vetrata5-ByJ7OwCp.jpg"
	},
	"/assets/slide6-BwqZRqA1.jpg": {
		"type": "image/jpeg",
		"etag": "\"edc45-QB/ENJ1aR8/AgsU+Het5tkDXWxY\"",
		"mtime": "2026-08-29T19:36:05.719Z",
		"size": 973893,
		"path": "../public/assets/slide6-BwqZRqA1.jpg"
	},
	"/assets/grila1-dmRB6AZK.jpg": {
		"type": "image/jpeg",
		"etag": "\"43361-8vrNQbhTOMG3hG3EBibS26SOyMw\"",
		"mtime": "2026-08-29T19:36:05.618Z",
		"size": 275297,
		"path": "../public/assets/grila1-dmRB6AZK.jpg"
	},
	"/assets/kabina25-MwLMNpEp.jpg": {
		"type": "image/jpeg",
		"etag": "\"29862e-vAOTHR25RHPhwBYDAGBVal7I+PQ\"",
		"mtime": "2026-08-29T19:36:05.638Z",
		"size": 2721326,
		"path": "../public/assets/kabina25-MwLMNpEp.jpg"
	},
	"/assets/grila11-B-FrzDNw.jpg": {
		"type": "image/jpeg",
		"etag": "\"1fbc0b-xZJnXBjxnwcUifJZ/XMWJEDOHV0\"",
		"mtime": "2026-08-29T19:36:05.619Z",
		"size": 2079755,
		"path": "../public/assets/grila11-B-FrzDNw.jpg"
	},
	"/assets/logo-gmGLsnNY.png": {
		"type": "image/png",
		"etag": "\"2c048-ijvL29nOQmy1gv7wL/mAL4iiHjg\"",
		"mtime": "2026-08-29T19:36:05.641Z",
		"size": 180296,
		"path": "../public/assets/logo-gmGLsnNY.png"
	},
	"/assets/punimexh6-9fNy9Pgm.jpg": {
		"type": "image/jpeg",
		"etag": "\"4a9f9-q7NCQ0xzBlj9XC/37umhcO0mwHQ\"",
		"mtime": "2026-08-29T19:36:05.669Z",
		"size": 305657,
		"path": "../public/assets/punimexh6-9fNy9Pgm.jpg"
	},
	"/assets/grila4-DHHj3rJT.jpg": {
		"type": "image/jpeg",
		"etag": "\"24500-CAtypaAktN3YnrS/DJEa5moV+3Q\"",
		"mtime": "2026-08-29T19:36:05.628Z",
		"size": 148736,
		"path": "../public/assets/grila4-DHHj3rJT.jpg"
	},
	"/assets/pergola2-BdyV5aZ9.jpg": {
		"type": "image/jpeg",
		"etag": "\"52f95-r2hGLnrsMGrmbXmPKxhEOzlF6hg\"",
		"mtime": "2026-08-29T19:36:05.644Z",
		"size": 339861,
		"path": "../public/assets/pergola2-BdyV5aZ9.jpg"
	},
	"/assets/tendad12-B-kZhLos.jpg": {
		"type": "image/jpeg",
		"etag": "\"455cce-uS2tgGJ8+9Pm5zORDYkwlx2Rd+g\"",
		"mtime": "2026-08-29T19:36:05.742Z",
		"size": 4545742,
		"path": "../public/assets/tendad12-B-kZhLos.jpg"
	},
	"/assets/pvc0-U3BjkzYN.png": {
		"type": "image/png",
		"etag": "\"1ebbbc-wsOgplWyGuRZX0VGCL19M22GVI8\"",
		"mtime": "2026-08-29T19:36:05.675Z",
		"size": 2014140,
		"path": "../public/assets/pvc0-U3BjkzYN.png"
	},
	"/assets/vetrata14-D6gTDzk2.jpg": {
		"type": "image/jpeg",
		"etag": "\"7000ee-t1VrL7DtaPLi8cBiC/HVadHQoOQ\"",
		"mtime": "2026-08-29T19:36:05.769Z",
		"size": 7340270,
		"path": "../public/assets/vetrata14-D6gTDzk2.jpg"
	},
	"/assets/auto4-Du_0UetP.jpg": {
		"type": "image/jpeg",
		"etag": "\"13bab-NKj8hlQuhyKRZb26oVqGFrFLeRU\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 80811,
		"path": "../public/assets/auto4-Du_0UetP.jpg"
	},
	"/assets/tendad7-CeM8zGZg.jpg": {
		"type": "image/jpeg",
		"etag": "\"28d9ec-+zptz7XwU3cnaQmUTN1Odlj7G3U\"",
		"mtime": "2026-08-29T19:36:05.751Z",
		"size": 2677228,
		"path": "../public/assets/tendad7-CeM8zGZg.jpg"
	},
	"/assets/pvc-DsBSLRcB.jpg": {
		"type": "image/jpeg",
		"etag": "\"1229b-hWJYRYTaqidVkU2bqYLSj8m3IX8\"",
		"mtime": "2026-08-29T19:36:05.675Z",
		"size": 74395,
		"path": "../public/assets/pvc-DsBSLRcB.jpg"
	},
	"/assets/grila7-CIFo4WUC.jpg": {
		"type": "image/jpeg",
		"etag": "\"678e2-RQOjTgUVFQNLjFMQOCcACbFqsvM\"",
		"mtime": "2026-08-29T19:36:05.629Z",
		"size": 424162,
		"path": "../public/assets/grila7-CIFo4WUC.jpg"
	},
	"/assets/duralumin2-2pzBgWWy.png": {
		"type": "image/png",
		"etag": "\"165b1b-kR6/TQyvuC/EJoebrM0zted30MI\"",
		"mtime": "2026-08-29T19:36:05.603Z",
		"size": 1465115,
		"path": "../public/assets/duralumin2-2pzBgWWy.png"
	},
	"/assets/streha2-B90a31rD.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2beda-p0AIECNXl3Jo6HfBy50WI8L60lQ\"",
		"mtime": "2026-08-29T19:36:05.729Z",
		"size": 179930,
		"path": "../public/assets/streha2-B90a31rD.jpeg"
	},
	"/assets/slide1-C9_cvJq1.jpg": {
		"type": "image/jpeg",
		"etag": "\"37acb9-pl9fpTTnBhwF8ZkgELzyBjNAv34\"",
		"mtime": "2026-08-29T19:36:05.691Z",
		"size": 3648697,
		"path": "../public/assets/slide1-C9_cvJq1.jpg"
	},
	"/assets/grila13-BGPErlLo.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b22b2-j000iqGGwimY9QiPlbBHqT3z1o8\"",
		"mtime": "2026-08-29T19:36:05.625Z",
		"size": 3875506,
		"path": "../public/assets/grila13-BGPErlLo.jpg"
	},
	"/assets/streha12-Don8irwy.jpg": {
		"type": "image/jpeg",
		"etag": "\"28c959-E00csqGNd/fl32T23HSuYrb+yWg\"",
		"mtime": "2026-08-29T19:36:05.725Z",
		"size": 2672985,
		"path": "../public/assets/streha12-Don8irwy.jpg"
	},
	"/assets/kabina24-DNvIT4HH.jpg": {
		"type": "image/jpeg",
		"etag": "\"28fe07-FXZ7j2mJZUNYWXlm8Q5R2LiIawk\"",
		"mtime": "2026-08-29T19:36:05.637Z",
		"size": 2686471,
		"path": "../public/assets/kabina24-DNvIT4HH.jpg"
	},
	"/assets/streha8-BpcppCjv.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ff616-V8PxzGUxxYeTURCHvR2v79+LBuU\"",
		"mtime": "2026-08-29T19:36:05.733Z",
		"size": 3143190,
		"path": "../public/assets/streha8-BpcppCjv.jpg"
	},
	"/assets/slide5-6j2-fbNY.jpg": {
		"type": "image/jpeg",
		"etag": "\"587158-soVsCMRvRNXnl9McWpI4PcwlnPM\"",
		"mtime": "2026-08-29T19:36:05.710Z",
		"size": 5796184,
		"path": "../public/assets/slide5-6j2-fbNY.jpg"
	},
	"/assets/gallery-CWYzuPh6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"46f1-5NC4D2fobhlf5EnDWkzQvRFwNKs\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 18161,
		"path": "../public/assets/gallery-CWYzuPh6.js"
	},
	"/assets/perde4-CFZtcGBb.jpg": {
		"type": "image/jpeg",
		"etag": "\"1da0e-C51rryyEyaszXxDY6qcUw/0Q4Jk\"",
		"mtime": "2026-08-29T19:36:05.641Z",
		"size": 121358,
		"path": "../public/assets/perde4-CFZtcGBb.jpg"
	},
	"/assets/pvc2-f14Ocbsy.jpg": {
		"type": "image/jpeg",
		"etag": "\"b10f-kof91pno5BU4qVQQd3UTYjdO5Yc\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 45327,
		"path": "../public/assets/pvc2-f14Ocbsy.jpg"
	},
	"/assets/punimexh7-mgxrKXT-.jpg": {
		"type": "image/jpeg",
		"etag": "\"14a835-ThX9MEDFnDgAm3jmnGW0cZHZzOg\"",
		"mtime": "2026-08-29T19:36:05.669Z",
		"size": 1353781,
		"path": "../public/assets/punimexh7-mgxrKXT-.jpg"
	},
	"/assets/galeria.kategoria._category-DB8FsJzD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6bd-YplOMj+rJs4HkUWvRkyiVOfBh8g\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 1725,
		"path": "../public/assets/galeria.kategoria._category-DB8FsJzD.js"
	},
	"/assets/streha1-_P1b-B9j.jpeg": {
		"type": "image/jpeg",
		"etag": "\"36518-GR0xwoR9A0LcQ2y8TjRJu45+D+A\"",
		"mtime": "2026-08-29T19:36:05.720Z",
		"size": 222488,
		"path": "../public/assets/streha1-_P1b-B9j.jpeg"
	},
	"/assets/pergola6-DFKdPFk8.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e707-8JhHrqijGDDMgcnckNic+tO6YLo\"",
		"mtime": "2026-08-29T19:36:05.644Z",
		"size": 124679,
		"path": "../public/assets/pergola6-DFKdPFk8.jpg"
	},
	"/assets/vetrata3-5Dabx1h7.jpg": {
		"type": "image/jpeg",
		"etag": "\"f48d-sskaHC90oXn870UNwF2HmWT0WNQ\"",
		"mtime": "2026-08-29T19:36:05.781Z",
		"size": 62605,
		"path": "../public/assets/vetrata3-5Dabx1h7.jpg"
	},
	"/assets/grila10-CsXn7dOD.jpg": {
		"type": "image/jpeg",
		"etag": "\"1efe29-sbAM6DGaU4wVxPQ1UvPGGfSezX4\"",
		"mtime": "2026-08-29T19:36:05.618Z",
		"size": 2031145,
		"path": "../public/assets/grila10-CsXn7dOD.jpg"
	},
	"/assets/slide7-Bskn8U8y.jpg": {
		"type": "image/jpeg",
		"etag": "\"31265-d47ITk+Fq63pw0XU6eAmj67l7kM\"",
		"mtime": "2026-08-29T19:36:05.720Z",
		"size": 201317,
		"path": "../public/assets/slide7-Bskn8U8y.jpg"
	},
	"/assets/pergola8-D33G_6l1.jpg": {
		"type": "image/jpeg",
		"etag": "\"15cce-kxWb7RjJG5B8tTdej8l9cJOZYJs\"",
		"mtime": "2026-08-29T19:36:05.644Z",
		"size": 89294,
		"path": "../public/assets/pergola8-D33G_6l1.jpg"
	},
	"/assets/gijotina4-dC5e2LyI.jpg": {
		"type": "image/jpeg",
		"etag": "\"18993-vDWYRfSkF8IPQBFT8bvOEx39wl8\"",
		"mtime": "2026-08-29T19:36:05.616Z",
		"size": 100755,
		"path": "../public/assets/gijotina4-dC5e2LyI.jpg"
	},
	"/assets/pergola13-BCkjZv00.jpg": {
		"type": "image/jpeg",
		"etag": "\"e588e-WYfxnkUNlm789TwZ7AQdgePC42E\"",
		"mtime": "2026-08-29T19:36:05.642Z",
		"size": 940174,
		"path": "../public/assets/pergola13-BCkjZv00.jpg"
	},
	"/assets/rrethim1-CZ73E8PX.jpg": {
		"type": "image/jpeg",
		"etag": "\"18afa-PRAXMyv6XPcR5BD7FkVxKxLKLPQ\"",
		"mtime": "2026-08-29T19:36:05.683Z",
		"size": 101114,
		"path": "../public/assets/rrethim1-CZ73E8PX.jpg"
	},
	"/assets/tendad10-CX0m7Sed.jpg": {
		"type": "image/jpeg",
		"etag": "\"22e9b4-lBCeMee9zy0Dwn7L2h07DLIUo7M\"",
		"mtime": "2026-08-29T19:36:05.736Z",
		"size": 2288052,
		"path": "../public/assets/tendad10-CX0m7Sed.jpg"
	},
	"/assets/slide2-C0uUA8s_.jpg": {
		"type": "image/jpeg",
		"etag": "\"368e90-GPRk/MZm0aUdndeyB8OCF56eKV4\"",
		"mtime": "2026-08-29T19:36:05.696Z",
		"size": 3575440,
		"path": "../public/assets/slide2-C0uUA8s_.jpg"
	},
	"/assets/styles-BavJBDxO.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13d6c-vlf2h9ZuYCRKPNfc0/iMBuKc9kQ\"",
		"mtime": "2026-08-29T19:36:05.736Z",
		"size": 81260,
		"path": "../public/assets/styles-BavJBDxO.css"
	},
	"/assets/kabina23-0vwaWdfm.jpg": {
		"type": "image/jpeg",
		"etag": "\"2528d7-5gx3jK/B4FCX3eqWY3uPg6p3JyE\"",
		"mtime": "2026-08-29T19:36:05.635Z",
		"size": 2435287,
		"path": "../public/assets/kabina23-0vwaWdfm.jpg"
	},
	"/assets/vetrat15-RSptstlY.jpg": {
		"type": "image/jpeg",
		"etag": "\"446f9a-AFCqLiKCIR9HaPaINoq525qOArw\"",
		"mtime": "2026-08-29T19:36:05.760Z",
		"size": 4485018,
		"path": "../public/assets/vetrat15-RSptstlY.jpg"
	},
	"/assets/pergola9-C0USSNoH.jpg": {
		"type": "image/jpeg",
		"etag": "\"30dff-Q7EFsazVtkshRVwAHp9hwBkK+XI\"",
		"mtime": "2026-08-29T19:36:05.644Z",
		"size": 200191,
		"path": "../public/assets/pergola9-C0USSNoH.jpg"
	},
	"/assets/qepen2-CP91tlsD.jpg": {
		"type": "image/jpeg",
		"etag": "\"73e5a-Sy+inQd3MDPBQ0U3YExZAnPjRuc\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 474714,
		"path": "../public/assets/qepen2-CP91tlsD.jpg"
	},
	"/assets/routes-BQmvMyke.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59bb-qFUX+G1fEAeWP8dRb5DhVlhIHKU\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 22971,
		"path": "../public/assets/routes-BQmvMyke.js"
	},
	"/assets/punimexh16-BwrE4lUz.jpg": {
		"type": "image/jpeg",
		"etag": "\"47ab74-JDNO0BT+BwpsbGgPhQiMMNBLfTg\"",
		"mtime": "2026-08-29T19:36:05.659Z",
		"size": 4696948,
		"path": "../public/assets/punimexh16-BwrE4lUz.jpg"
	},
	"/assets/punimexh15-DGbgIo-S.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b77c0-/78g+bOGNDarNpInebuaF8AiikM\"",
		"mtime": "2026-08-29T19:36:05.655Z",
		"size": 4945856,
		"path": "../public/assets/punimexh15-DGbgIo-S.jpg"
	},
	"/assets/vetrata10-DhaI_ZE6.jpg": {
		"type": "image/jpeg",
		"etag": "\"2cb5a-QwJ1AkIj6G5OsGxNQS9hBjV7S1A\"",
		"mtime": "2026-08-29T19:36:05.768Z",
		"size": 183130,
		"path": "../public/assets/vetrata10-DhaI_ZE6.jpg"
	},
	"/assets/pvc8-DN-UQEgQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"3745f-JQVz8quoHi7xoZEwPz6ZyMPyty4\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 226399,
		"path": "../public/assets/pvc8-DN-UQEgQ.jpg"
	},
	"/assets/pergola4-OoSCjwCR.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b954-r5RWerarx7oKCfb2xB0iJPZkpY8\"",
		"mtime": "2026-08-29T19:36:05.644Z",
		"size": 309588,
		"path": "../public/assets/pergola4-OoSCjwCR.jpg"
	},
	"/assets/kabina17-d7H_3MB8.jpg": {
		"type": "image/jpeg",
		"etag": "\"18eb5-Ladh3uLm8Q3pVYTHFHkctsOyIzI\"",
		"mtime": "2026-08-29T19:36:05.631Z",
		"size": 102069,
		"path": "../public/assets/kabina17-d7H_3MB8.jpg"
	},
	"/assets/gijotina9-CEmiwv0b.jpg": {
		"type": "image/jpeg",
		"etag": "\"20d1c5-1VWJFWTt89BDPwoBqeVmLrwthL8\"",
		"mtime": "2026-08-29T19:36:05.616Z",
		"size": 2150853,
		"path": "../public/assets/gijotina9-CEmiwv0b.jpg"
	},
	"/assets/tendad6-DO_PgVMi.jpg": {
		"type": "image/jpeg",
		"etag": "\"12a48-E3bHToGua20o5x+QV2UMpkTqJp4\"",
		"mtime": "2026-08-29T19:36:05.751Z",
		"size": 76360,
		"path": "../public/assets/tendad6-DO_PgVMi.jpg"
	},
	"/assets/rrethim8-SJe9aFJQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"11779-BkgIu7dppxY6PihuRfVIp4uQ17U\"",
		"mtime": "2026-08-29T19:36:05.691Z",
		"size": 71545,
		"path": "../public/assets/rrethim8-SJe9aFJQ.jpg"
	},
	"/assets/kabina3-BqCZo5TA.jpg": {
		"type": "image/jpeg",
		"etag": "\"d126-Ba3x1Dc+MkZ7POC/C7V2OT2DHf0\"",
		"mtime": "2026-08-29T19:36:05.640Z",
		"size": 53542,
		"path": "../public/assets/kabina3-BqCZo5TA.jpg"
	},
	"/assets/galeria.kategoria._category-C0Uyw02W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24c-n9B9pkCEobo5JNFrykgH1H8dIK8\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 588,
		"path": "../public/assets/galeria.kategoria._category-C0Uyw02W.js"
	},
	"/assets/streha11-DR5HheG2.jpg": {
		"type": "image/jpeg",
		"etag": "\"444273-RFO9Xa+EYIWsQlR98nBahX8g0Wo\"",
		"mtime": "2026-08-29T19:36:05.721Z",
		"size": 4473459,
		"path": "../public/assets/streha11-DR5HheG2.jpg"
	},
	"/assets/gijotina8-Bl5daL_A.jpg": {
		"type": "image/jpeg",
		"etag": "\"49e13-fi2AZhdZUVhnvrFl5NIYYG4qyq0\"",
		"mtime": "2026-08-29T19:36:05.616Z",
		"size": 302611,
		"path": "../public/assets/gijotina8-Bl5daL_A.jpg"
	},
	"/assets/pergola11-DRcdkkiy.jpg": {
		"type": "image/jpeg",
		"etag": "\"29cc60-oa2Uxg10YrcoAdTQrosOToT2p7w\"",
		"mtime": "2026-08-29T19:36:05.641Z",
		"size": 2739296,
		"path": "../public/assets/pergola11-DRcdkkiy.jpg"
	},
	"/assets/pvc9-0jRaSZD7.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b4ec-aaA6KJnezHTmII3oeTc00VAyWNo\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 242924,
		"path": "../public/assets/pvc9-0jRaSZD7.jpg"
	},
	"/assets/pergola14-Dl6AVFR8.jpg": {
		"type": "image/jpeg",
		"etag": "\"2af24-TGlHjzbr1z3tQ8znoLOcIbeXV1M\"",
		"mtime": "2026-08-29T19:36:05.643Z",
		"size": 175908,
		"path": "../public/assets/pergola14-Dl6AVFR8.jpg"
	},
	"/assets/kabina20-BOHqG55a.jpg": {
		"type": "image/jpeg",
		"etag": "\"dc745-9DmwolMDJcrWPqVOduGM8zEakQ0\"",
		"mtime": "2026-08-29T19:36:05.631Z",
		"size": 902981,
		"path": "../public/assets/kabina20-BOHqG55a.jpg"
	},
	"/assets/kabina8-DLMw3Stn.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a8c6-oFZtRTjQ5oxxWsNdcdcpF/MVNp8\"",
		"mtime": "2026-08-29T19:36:05.640Z",
		"size": 501958,
		"path": "../public/assets/kabina8-DLMw3Stn.jpg"
	},
	"/assets/streha4-B8xTmPXQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"23f5-LHX4FLb4tRzPqJh5+MBo4hLi1Hk\"",
		"mtime": "2026-08-29T19:36:05.729Z",
		"size": 9205,
		"path": "../public/assets/streha4-B8xTmPXQ.jpg"
	},
	"/assets/pergola17-D0ubjJcJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"2379e3-wxhOpkks0t+lo8rNoi1VVfN84Pk\"",
		"mtime": "2026-08-29T19:36:05.643Z",
		"size": 2324963,
		"path": "../public/assets/pergola17-D0ubjJcJ.jpg"
	},
	"/assets/tendad1-DTlSBVLt.jpg": {
		"type": "image/jpeg",
		"etag": "\"fcb9-zsucNB8klA3MATfNKh/uvqFp3tY\"",
		"mtime": "2026-08-29T19:36:05.736Z",
		"size": 64697,
		"path": "../public/assets/tendad1-DTlSBVLt.jpg"
	},
	"/assets/index-Bt4Pp_QX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a606-nt9iAPuFDceAdzHkKEtMOAhRcis\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 304646,
		"path": "../public/assets/index-Bt4Pp_QX.js"
	},
	"/assets/grila2-DFC1dac7.jpg": {
		"type": "image/jpeg",
		"etag": "\"22ef4-0HD35A38fVMK9cOVxhHg5esW288\"",
		"mtime": "2026-08-29T19:36:05.627Z",
		"size": 143092,
		"path": "../public/assets/grila2-DFC1dac7.jpg"
	},
	"/assets/grila12-CLuRqJ1O.jpg": {
		"type": "image/jpeg",
		"etag": "\"78101d-0YngwA51KEEiAnYHqLi1xPBoW/I\"",
		"mtime": "2026-08-29T19:36:05.620Z",
		"size": 7868445,
		"path": "../public/assets/grila12-CLuRqJ1O.jpg"
	},
	"/assets/grila9-DnWPDNJ3.jpg": {
		"type": "image/jpeg",
		"etag": "\"24a74d-6+hANipIzfyfeYBWNuCZW/N9LqA\"",
		"mtime": "2026-08-29T19:36:05.629Z",
		"size": 2402125,
		"path": "../public/assets/grila9-DnWPDNJ3.jpg"
	},
	"/assets/pergola1-CF2n6mS-.jpg": {
		"type": "image/jpeg",
		"etag": "\"3f717-lOllgy9dEHUYn1e8gjC2/ph2fU4\"",
		"mtime": "2026-08-29T19:36:05.641Z",
		"size": 259863,
		"path": "../public/assets/pergola1-CF2n6mS-.jpg"
	},
	"/assets/tendad3-COzJWFIn.jpg": {
		"type": "image/jpeg",
		"etag": "\"f65a-PGvosgvjn4WAB49H2YXRFvK0z4c\"",
		"mtime": "2026-08-29T19:36:05.751Z",
		"size": 63066,
		"path": "../public/assets/tendad3-COzJWFIn.jpg"
	},
	"/assets/rrethim10-DHx7Dyhs.jpg": {
		"type": "image/jpeg",
		"etag": "\"cc97-l7EHhKeqLMcpDl4DIIW06lFQdSY\"",
		"mtime": "2026-08-29T19:36:05.683Z",
		"size": 52375,
		"path": "../public/assets/rrethim10-DHx7Dyhs.jpg"
	},
	"/assets/auto3-CqQAXW8V.jpg": {
		"type": "image/jpeg",
		"etag": "\"32d17-g3BkPN54E+LlQPb//wBhRPmWXsM\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 208151,
		"path": "../public/assets/auto3-CqQAXW8V.jpg"
	},
	"/assets/galeria._id-DX3WAoMs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b8-tBR7jo8ryDCPrAU3EvVNl7TkATA\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 1464,
		"path": "../public/assets/galeria._id-DX3WAoMs.js"
	},
	"/assets/pvc1-hwF8bSmu.jpg": {
		"type": "image/jpeg",
		"etag": "\"aaf9-fzpm3CMIOL7USoKqL3FxzOT3lwU\"",
		"mtime": "2026-08-29T19:36:05.676Z",
		"size": 43769,
		"path": "../public/assets/pvc1-hwF8bSmu.jpg"
	},
	"/assets/punimexh13-CxuuVWC8.jpg": {
		"type": "image/jpeg",
		"etag": "\"23ad9f-1u9uWI1vcMh2v+/hWwGd7vtqSUE\"",
		"mtime": "2026-08-29T19:36:05.650Z",
		"size": 2338207,
		"path": "../public/assets/punimexh13-CxuuVWC8.jpg"
	},
	"/assets/kabina5-CFAkc3da.jpg": {
		"type": "image/jpeg",
		"etag": "\"1319f-/WFwRjuZhjezIdvmCaRUnLE4unk\"",
		"mtime": "2026-08-29T19:36:05.640Z",
		"size": 78239,
		"path": "../public/assets/kabina5-CFAkc3da.jpg"
	},
	"/assets/slide4-B_NJA7sa.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c4aac-yDwIdoquyyQZQmLqEjLM8jzNTdw\"",
		"mtime": "2026-08-29T19:36:05.702Z",
		"size": 6048428,
		"path": "../public/assets/slide4-B_NJA7sa.jpg"
	},
	"/assets/rrethim6-CtJ5Mx-T.jpg": {
		"type": "image/jpeg",
		"etag": "\"29ae2-BanbUA4TDsndLXn4LGCUbxtAI50\"",
		"mtime": "2026-08-29T19:36:05.691Z",
		"size": 170722,
		"path": "../public/assets/rrethim6-CtJ5Mx-T.jpg"
	},
	"/assets/kabina7-B05YGAtm.jpg": {
		"type": "image/jpeg",
		"etag": "\"96abc-lQVaSY365RpIX+0YgGxaKwW2Fcw\"",
		"mtime": "2026-08-29T19:36:05.640Z",
		"size": 617148,
		"path": "../public/assets/kabina7-B05YGAtm.jpg"
	},
	"/assets/streha3-9HjLs-hG.jpeg": {
		"type": "image/jpeg",
		"etag": "\"38788-t9hZkD16wCtmJCx60AJ29lTbGe8\"",
		"mtime": "2026-08-29T19:36:05.729Z",
		"size": 231304,
		"path": "../public/assets/streha3-9HjLs-hG.jpeg"
	},
	"/assets/pergola3-CEuz9fFs.jpg": {
		"type": "image/jpeg",
		"etag": "\"6503b-HXCGatbf370On/5YW1wSZ/mG8dw\"",
		"mtime": "2026-08-29T19:36:05.644Z",
		"size": 413755,
		"path": "../public/assets/pergola3-CEuz9fFs.jpg"
	},
	"/assets/punimexh2-CnCSZPMj.jpg": {
		"type": "image/jpeg",
		"etag": "\"10185-30OWIxKY+7yjASYzboasoBE0EvA\"",
		"mtime": "2026-08-29T19:36:05.669Z",
		"size": 65925,
		"path": "../public/assets/punimexh2-CnCSZPMj.jpg"
	},
	"/assets/streha-UtAidleR.jpeg": {
		"type": "image/jpeg",
		"etag": "\"27f41-SVBhQhXRGwgGsqL+ZdyAvMKJaCg\"",
		"mtime": "2026-08-29T19:36:05.720Z",
		"size": 163649,
		"path": "../public/assets/streha-UtAidleR.jpeg"
	},
	"/assets/kabina2-Dl20eLnq.jpg": {
		"type": "image/jpeg",
		"etag": "\"bd8e-cgm2TjrYp9Nr8xEFxCDOAOJUpUs\"",
		"mtime": "2026-08-29T19:36:05.631Z",
		"size": 48526,
		"path": "../public/assets/kabina2-Dl20eLnq.jpg"
	},
	"/assets/duralumi3-DiQwC6Ki.png": {
		"type": "image/png",
		"etag": "\"1a13c3-SVuW6IHW4fZXSP06v/A1KvgSZ+0\"",
		"mtime": "2026-08-29T19:36:05.602Z",
		"size": 1708995,
		"path": "../public/assets/duralumi3-DiQwC6Ki.png"
	},
	"/assets/tendad9-fdsz2npb.jpg": {
		"type": "image/jpeg",
		"etag": "\"327a2f-wNnQ+Uv0wxB48nPqnIHJmvmS8Nk\"",
		"mtime": "2026-08-29T19:36:05.756Z",
		"size": 3308079,
		"path": "../public/assets/tendad9-fdsz2npb.jpg"
	},
	"/assets/punimexh9-5iVP5wst.jpg": {
		"type": "image/jpeg",
		"etag": "\"31d6be-VPtIK8lPPbG9IADCFap2wPp7430\"",
		"mtime": "2026-08-29T19:36:05.670Z",
		"size": 3266238,
		"path": "../public/assets/punimexh9-5iVP5wst.jpg"
	},
	"/assets/tendad4-D2NN7tMy.jpg": {
		"type": "image/jpeg",
		"etag": "\"d141-R5swPP32IpDVmYOgN9iykunGQyM\"",
		"mtime": "2026-08-29T19:36:05.751Z",
		"size": 53569,
		"path": "../public/assets/tendad4-D2NN7tMy.jpg"
	},
	"/assets/tendad-BpG7b2V_.jpg": {
		"type": "image/jpeg",
		"etag": "\"14c0a-3QUYBzUAOswXfv5FPx4J1tTX/CQ\"",
		"mtime": "2026-08-29T19:36:05.736Z",
		"size": 85002,
		"path": "../public/assets/tendad-BpG7b2V_.jpg"
	},
	"/assets/gijotina5-TCrPjr2f.jpg": {
		"type": "image/jpeg",
		"etag": "\"210aa-UqG+mlxRrgtaE8mA9+8WQ0bk4xE\"",
		"mtime": "2026-08-29T19:36:05.616Z",
		"size": 135338,
		"path": "../public/assets/gijotina5-TCrPjr2f.jpg"
	},
	"/assets/gijotina11-DAzLZDwp.jpg": {
		"type": "image/jpeg",
		"etag": "\"66c584-I1ac7Vyi6lsrTR1h/ax5b5xW8Ms\"",
		"mtime": "2026-08-29T19:36:05.606Z",
		"size": 6735236,
		"path": "../public/assets/gijotina11-DAzLZDwp.jpg"
	},
	"/assets/auto5-Bqmm8XQN.jpg": {
		"type": "image/jpeg",
		"etag": "\"32437-2yZH4bMISmY9nWV4eXsBNnrc9DU\"",
		"mtime": "2026-08-29T19:36:05.602Z",
		"size": 205879,
		"path": "../public/assets/auto5-Bqmm8XQN.jpg"
	},
	"/assets/vetrata6-CAuLxngr.jpg": {
		"type": "image/jpeg",
		"etag": "\"e9cb-hWqRSYNslOxD1okYtVFxeuKqa4g\"",
		"mtime": "2026-08-29T19:36:05.781Z",
		"size": 59851,
		"path": "../public/assets/vetrata6-CAuLxngr.jpg"
	},
	"/assets/kabina1-CI1ECCbO.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e49a-SPJzdTn0zMVnC1jQUDA/WGaOCdA\"",
		"mtime": "2026-08-29T19:36:05.631Z",
		"size": 189594,
		"path": "../public/assets/kabina1-CI1ECCbO.jpg"
	},
	"/assets/link-sDQV9wD2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8967-w+p3kwpgqtwlhyRkTGKilLrKLOI\"",
		"mtime": "2026-08-29T19:36:05.601Z",
		"size": 35175,
		"path": "../public/assets/link-sDQV9wD2.js"
	},
	"/assets/vetrata12-D01U18Wt.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e2e7-8kVo7O/iqOH/mNB38NlSg4Gp1xA\"",
		"mtime": "2026-08-29T19:36:05.769Z",
		"size": 189159,
		"path": "../public/assets/vetrata12-D01U18Wt.jpg"
	},
	"/assets/grila-Czq3KyYW.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e88a-pPr8q/KUegefJt7lsxFZN2vx1VY\"",
		"mtime": "2026-08-29T19:36:05.617Z",
		"size": 190602,
		"path": "../public/assets/grila-Czq3KyYW.jpg"
	},
	"/assets/rrethim2-B_LDUyNX.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ca33-H6TUEM6nlVPNVsjY1YcmjHHE5no\"",
		"mtime": "2026-08-29T19:36:05.690Z",
		"size": 117299,
		"path": "../public/assets/rrethim2-B_LDUyNX.jpg"
	},
	"/assets/rrethim12-reOF_nHQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"15d28-19C3yGwY2u4GkByTLKUN78BBVN0\"",
		"mtime": "2026-08-29T19:36:05.683Z",
		"size": 89384,
		"path": "../public/assets/rrethim12-reOF_nHQ.jpg"
	},
	"/assets/streha7-DQ3ZKtxA.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ef9ca-GX83kgTRNWY7AYo7PdhORgMGRyg\"",
		"mtime": "2026-08-29T19:36:05.729Z",
		"size": 3078602,
		"path": "../public/assets/streha7-DQ3ZKtxA.jpg"
	},
	"/assets/punimexh10-Bg94SwR8.jpg": {
		"type": "image/jpeg",
		"etag": "\"325a51-oHur4ZPcsOFzEHMMATtUhKgdhQk\"",
		"mtime": "2026-08-29T19:36:05.644Z",
		"size": 3299921,
		"path": "../public/assets/punimexh10-Bg94SwR8.jpg"
	},
	"/assets/tendad5-AKZ9gpJE.jpg": {
		"type": "image/jpeg",
		"etag": "\"12ae8-L+x0/92QyOoj5qFL2yuROKb4lXY\"",
		"mtime": "2026-08-29T19:36:05.751Z",
		"size": 76520,
		"path": "../public/assets/tendad5-AKZ9gpJE.jpg"
	},
	"/assets/pvc10-D015hgPt.jpg": {
		"type": "image/jpeg",
		"etag": "\"433d9-2CJXiFOgpyf8uXBHifRIWzGy6VA\"",
		"mtime": "2026-08-29T19:36:05.676Z",
		"size": 275417,
		"path": "../public/assets/pvc10-D015hgPt.jpg"
	},
	"/assets/pvc14-3aXl_WS2.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aeda-ZNakmAFkNjeY8ZXYD/bS7IIFF7w\"",
		"mtime": "2026-08-29T19:36:05.677Z",
		"size": 110298,
		"path": "../public/assets/pvc14-3aXl_WS2.jpg"
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
