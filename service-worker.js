if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return f[e]||(c=new Promise(async c=>{if("document"in self){const f=document.createElement("script");f.src=e,document.head.appendChild(f),f.onload=c}else importScripts(e),c()})),c.then(()=>{if(!f[e])throw new Error(`Module ${e} didn’t register its module`);return f[e]})},c=(c,f)=>{Promise.all(c.map(e)).then(e=>f(1===e.length?e[0]:e))},f={require:Promise.resolve(c)};self.define=(c,i,n)=>{f[c]||(f[c]=Promise.resolve().then(()=>{let f={};const s={uri:location.origin+c.slice(1)};return Promise.all(i.map(c=>{switch(c){case"exports":return f;case"module":return s;default:return e(c)}})).then(e=>{const c=n(...e);return f.default||(f.default=c),f})}))}}define("./service-worker.js",["./workbox-56b7c574"],(function(e){"use strict";e.setCacheNameDetails({prefix:"light"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"IMG_20190903_151239_512.jpg",revision:"bf2b4441dc4d8460f74fd9167791ade3"},{url:"css/2.a912fdfc.css",revision:"741de46da9fa9f5223d6333c5a64e127"},{url:"css/3.71a41b85.css",revision:"6499302386f2c8d8e2d8acaac62ca7f3"},{url:"css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.a5fef91a.css",revision:"1834992e037062013bbed0c19a89c9b4"},{url:"favicon.ico",revision:"8b9eb314ff597f6f7c7bf8c7a5f717ec"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.2d36eb59.woff",revision:"463cfa6bda38af7123b1770d4982ad3c"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.492281ee.woff2",revision:"8ff0ce021911cf276edc22fb8ca59ec7"},{url:"fonts/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.3d9ca1ec.woff",revision:"4c3f3f661353de314af575e99e24ad39"},{url:"fonts/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.f2c95b09.woff2",revision:"536ec55608c308ec1ee92cf845a1245d"},{url:"icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"icons/favicon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"icons/favicon-32x32.png",revision:"64aa9e88dd6545f64226c1e2230f66cc"},{url:"icons/favicon-96x96.png",revision:"d22664397060743b24e8956a5a3fcdec"},{url:"icons/icon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/icon-192x192.png",revision:"a1b423855a450ae7adbd9d2a782e0dfb"},{url:"icons/icon-256x256.png",revision:"9f33ebc999e51d0dc2975fc573d53a0b"},{url:"icons/icon-384x384.png",revision:"a126be0d50ed682c3129e0b8b31f680a"},{url:"icons/icon-512x512.png",revision:"02abd24e7c8638e848d96a6bf78d2c27"},{url:"icons/ms-icon-144x144.png",revision:"f256ec55be616f32ae486ab7571eb936"},{url:"icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"index.html",revision:"e2670f995fe5cc54726c2a1d2194b285"},{url:"item13.jpg",revision:"03195fecf6756abbd21bedb4d86e1f13"},{url:"js/2.22220f05.js",revision:"e5a102090933812645f3c6cc4bc350ac"},{url:"js/3.fe00bb15.js",revision:"b230904b4e881c011df02c75d9848dbd"},{url:"js/4.5c9a8988.js",revision:"26a66b7c99b1f1216a1762a93be2d2fc"},{url:"js/5.1e29d458.js",revision:"6ef7965952a158dace1e53a7ae6041d4"},{url:"js/app.f88f6269.js",revision:"1409935d8fc4039b92bee4d2725f720f"},{url:"js/vendor.e845dcff.js",revision:"b0558f9d1345d52a25c65456bc2de3d6"},{url:"logo.png",revision:"c0eddf3c30e9ba5e2ddbe9d2654da13d"},{url:"manifest.json",revision:"4fe5d1b986e8bce77cbed47d532d5a21"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
