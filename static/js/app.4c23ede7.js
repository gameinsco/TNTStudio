(function(){"use strict";var e={1820:function(e,r,o){var t=o(9242),n=(o(9773),o(5303)),i=o(5470),u=o(9894),c=o(9501),a=o(8727),m=(0,a.Rd)({components:{VOtpInput:n._,VDataTable:i.y_,VDataTableServer:u.t,VDataTableVirtual:c.H}});async function s(){const e=await o.e(461).then(o.t.bind(o,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var p=o(3396);function l(e,r,o,t,n,i){const u=(0,p.up)("router-view");return(0,p.wg)(),(0,p.j4)(u)}var d={name:"App"},f=o(89);const P=(0,f.Z)(d,[["render",l],["__scopeId","data-v-e21f5d86"]]);var h=P,T=o(65);const b=(0,T.MT)({state:{videoIndex:0,shortsVideoIndex:0,shortsShowModal:!1,hostAddressName:"http://티키타카.kr:81",rooms:[{title:"솔로 스튜디오",price:21e3,PriceToHour3:65e3,PriceToHour6:117e3,PriceToHour12:221e3,numPrice:1e4,numMin:1,numMax:5,imageSrc:o(2151),studioNum:1},{title:"듀오 스튜디오",price:23e3,PriceToHour3:7e4,PriceToHour6:126e3,PriceToHour12:238e3,numPrice:1e4,numMin:2,numMax:5,imageSrc:o(2151),studioNum:2},{title:"하이브리드 스튜디오",price:31e3,PriceToHour3:95e3,PriceToHour6:171e3,PriceToHour12:323e3,numPrice:1e4,numMin:2,numMax:7,imageSrc:o(3649),studioNum:3},{title:"워터 스튜디오",price:26e3,PriceToHour3:8e4,PriceToHour6:144e3,PriceToHour12:272e3,numPrice:1e4,numMin:2,numMax:5,imageSrc:o(3578),studioNum:4},{title:"화이트 스튜디오",price:63e3,numPrice:1e4,PriceToHour3:19e4,PriceToHour6:342e3,PriceToHour12:646e3,numMin:4,numMax:15,imageSrc:o(8500),studioNum:5},{title:"그린 스튜디오",price:13e4,PriceToHour3:39e4,PriceToHour6:702e3,PriceToHour12:1326e3,numPrice:1e4,numMin:5,numMax:15,imageSrc:o(4800),studioNum:6}],equipments:{camera:[{name:"SONY FX3",price:1e4,PriceToHour3:3e4,PriceToHour6:54e3,PriceToHour12:102e3,count:1,equipmentNum:1},{name:"SONY A7M IV",price:7e3,PriceToHour3:2e4,PriceToHour6:36e3,PriceToHour12:68e3,count:2,equipmentNum:2},{name:"SONY FE 70-200mm F2.8 GM",price:3e3,PriceToHour3:1e4,PriceToHour6:18e3,PriceToHour12:34e3,count:1,equipmentNum:3},{name:"SONY FE 24-70mm F2.8 GM",price:3e3,PriceToHour3:1e4,PriceToHour6:18e3,PriceToHour12:34e3,count:1,equipmentNum:4},{name:"SONY FE 85mm F1.4 GM",price:3e3,PriceToHour3:1e4,PriceToHour6:18e3,PriceToHour12:34e3,count:1,equipmentNum:5},{name:"탐론 28-200mm F2.8-5.6 Di lll RXD A071 SONY FE마운트",price:3e3,PriceToHour3:1e4,PriceToHour6:18e3,PriceToHour12:34e3,count:2,equipmentNum:6},{name:"SONY NP-FZ100 배터리",price:0,PriceToHour3:0,PriceToHour6:0,PriceToHour12:0,count:3,equipmentNum:7},{name:"SONY FZ100 상시전원 더미 배터리 어댑터",price:0,PriceToHour3:0,PriceToHour6:0,PriceToHour12:0,count:3,equipmentNum:8},{name:"K&f Concept NANO-X Ultra slim MRC UV 렌즈 필터 67mm",price:0,PriceToHour3:0,PriceToHour6:0,PriceToHour12:0,count:2,equipmentNum:9},{name:"K&f Concept NANO-X Ultra slim MRC UV 렌즈 필터 77mm",price:0,PriceToHour3:0,PriceToHour6:0,PriceToHour12:0,count:2,equipmentNum:10},{name:"K&f Concept NANO-X Ultra slim MRC UV 렌즈 필터 82mm",price:0,PriceToHour3:0,PriceToHour6:0,PriceToHour12:0,count:1,equipmentNum:11},{name:"틸타 SONY FX3 케이지 베이직 키트 (TA-T13-A-B)",price:5e3,PriceToHour3:15e3,PriceToHour6:54e3,PriceToHour12:102e3,count:1,equipmentNum:13},{name:"스몰리그 SR1989 삼각대 (헤드포함)",price:0,PriceToHour3:0,PriceToHour6:0,PriceToHour12:0,count:3,equipmentNum:14},{name:"DJI 로닌 RS3 프로 콤보 짐벌",price:7e3,PriceToHour3:2e4,PriceToHour6:36e3,PriceToHour12:68e3,count:1,equipmentNum:15}],monitor:[{name:"ATOMOS 닌자 V 프리뷰모니터 프로 키트",price:1e4,PriceToHour3:3e4,PriceToHour6:54e3,PriceToHour12:102e3,count:1,equipmentNum:12}],MicAudio:[{name:"RODE VIDEO MIC PRO PLUS",price:3e3,PriceToHour3:1e4,PriceToHour6:18e3,PriceToHour12:34e3,count:1,equipmentNum:16},{name:"SONY UWP-D21",price:3e3,PriceToHour3:1e4,PriceToHour6:18e3,PriceToHour12:34e3,count:1,equipmentNum:17},{name:"코미카 4채널 무선마이크 BOOMX-U-QUA (송신기4, 수신기1)",price:3e3,PriceToHour3:1e4,PriceToHour6:18e3,PriceToHour12:34e3,count:1,equipmentNum:18},{name:"베링거 FLOW8",price:1e4,PriceToHour3:3e4,PriceToHour6:54e3,PriceToHour12:102e3,count:1,equipmentNum:19},{name:"Blackmagic Design ATEM Mini Extremem SIO",price:1e4,PriceToHour3:3e4,PriceToHour6:54e3,PriceToHour12:102e3,count:1,equipmentNum:20}],LightSubFilm:[{name:"고프로 히어로11 블랙 올인원 패키지",price:6e3,PriceToHour3:2e4,PriceToHour6:36e3,PriceToHour12:68e3,count:1,equipmentNum:21},{name:"난라이트 파보튜브II 30X LED조명 2키트",price:6e3,PriceToHour3:2e4,PriceToHour6:36e3,PriceToHour12:68e3,count:1,equipmentNum:22},{name:"난라이트 파보튜브II 플로어스탠드",price:3e3,PriceToHour3:1e4,PriceToHour6:18e3,PriceToHour12:34e3,count:2,equipmentNum:23},{name:"난라이트 FS-300B",price:3e3,PriceToHour3:1e4,PriceToHour6:18e3,PriceToHour12:34e3,count:2,equipmentNum:24}]}},mutations:{setShortsVideoNumber(e,r){e.shortsVideoIndex=r},setShortsShowModal(e,r){e.shortsShowModal=r}},actions:{setShortsVideoNumber({commit:e},r){e("setShortsVideoNumber",r)},setShortsShowModal({commit:e},r){e("setShortsShowModal",r)}},getters:{shortsVideoIndex:e=>e.shortsVideoIndex,shortsShowModal:e=>e.shortsShowModal,hostAddressName:e=>e.hostAddressName,rooms:e=>e.rooms,equipments:e=>e.equipments}});var H=b,v=o(2483);const g=[{path:"/",name:"HomePage",component:()=>Promise.all([o.e(409),o.e(727),o.e(236)]).then(o.bind(o,7236))},{path:"/news",name:"NewsPage",component:()=>Promise.all([o.e(852),o.e(826)]).then(o.bind(o,7831))},{path:"/intro",name:"IntroPage",component:()=>Promise.all([o.e(852),o.e(409),o.e(740)]).then(o.bind(o,7011))},{path:"/ask",name:"AskPage",component:()=>Promise.all([o.e(852),o.e(387),o.e(160),o.e(725),o.e(222)]).then(o.bind(o,2222))},{path:"/studio",name:"StudioPage",component:()=>Promise.all([o.e(852),o.e(409),o.e(155)]).then(o.bind(o,4443))},{path:"/reservate",name:"Reservate",component:()=>Promise.all([o.e(852),o.e(725),o.e(211)]).then(o.bind(o,5211))},{path:"/program",name:"ProgramPage",component:()=>Promise.all([o.e(852),o.e(409),o.e(727),o.e(317)]).then(o.bind(o,8475))},{path:"/events1",name:"EventsDetail1",component:()=>Promise.all([o.e(852),o.e(820)]).then(o.bind(o,1e3))},{path:"/TabletReserveForm",name:"TabletReserveForm",component:()=>Promise.all([o.e(387),o.e(160),o.e(313),o.e(369)]).then(o.bind(o,4678))},{path:"/CalendarReservate",name:"CalendarReservate",component:()=>Promise.all([o.e(387),o.e(480)]).then(o.bind(o,1480))},{path:"/reservate1",name:"ReservateDetail",component:()=>Promise.all([o.e(852),o.e(387),o.e(160),o.e(313),o.e(722)]).then(o.bind(o,3922))},{path:"/reservate2",name:"ReservateDetail2",component:()=>Promise.all([o.e(852),o.e(387),o.e(160),o.e(313),o.e(785)]).then(o.bind(o,1224))},{path:"/reservate3",name:"ReservateDetail3",component:()=>Promise.all([o.e(852),o.e(387),o.e(160),o.e(313),o.e(463)]).then(o.bind(o,7205))},{path:"/reservate4",name:"ReservateDetail4",component:()=>Promise.all([o.e(852),o.e(387),o.e(160),o.e(313),o.e(123)]).then(o.bind(o,2862))},{path:"/reservate5",name:"ReservateDetail5",component:()=>Promise.all([o.e(852),o.e(387),o.e(160),o.e(313),o.e(955)]).then(o.bind(o,5977))},{path:"/reservate6",name:"ReservateDetail6",component:()=>Promise.all([o.e(852),o.e(387),o.e(160),o.e(313),o.e(923)]).then(o.bind(o,695))},{path:"/reservateConfirm",name:"ReservateConfirmAdmin",component:()=>Promise.all([o.e(387),o.e(408)]).then(o.bind(o,8408))},{path:"/news1",name:"NewsDetail1",component:()=>Promise.all([o.e(852),o.e(635)]).then(o.bind(o,7472))},{path:"/news2",name:"NewsDetail2",component:()=>Promise.all([o.e(852),o.e(590)]).then(o.bind(o,2401))},{path:"/test",name:"TestPageTrash",component:()=>o.e(642).then(o.bind(o,642))}],N=(0,v.p7)({history:(0,v.PO)(),routes:g,scrollBehavior(){return{top:0}}});var S=N,O=o(2185);s(),(0,t.ri)(h).use(m).use(S).use(H).use(O.ZP).mount("#app")},2151:function(e,r,o){e.exports=o.p+"static/img/studio7.42b1c341.svg"},4800:function(e,r,o){e.exports=o.p+"static/img/그린 스튜디오.4a62cd70.png"},3578:function(e,r,o){e.exports=o.p+"static/img/워터 외부.ed796af0.png"},3649:function(e,r,o){e.exports=o.p+"static/img/하이브리드 스튜디오_1.f6b5f4c7.png"},8500:function(e,r,o){e.exports=o.p+"static/img/화이트 스튜디오.4194c67a.png"}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var i=r[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(r,t,n,i){if(!t){var u=1/0;for(s=0;s<e.length;s++){t=e[s][0],n=e[s][1],i=e[s][2];for(var c=!0,a=0;a<t.length;a++)(!1&i||u>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[a])}))?t.splice(a--,1):(c=!1,i<u&&(u=i));if(c){e.splice(s--,1);var m=n();void 0!==m&&(r=m)}}return r}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,n,i]}}(),function(){o.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(r,{a:r}),r}}(),function(){var e,r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"===typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"===typeof t.then)return t}var i=Object.create(null);o.r(i);var u={};e=e||[null,r({}),r([]),r(r)];for(var c=2&n&&t;"object"==typeof c&&!~e.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((function(e){u[e]=function(){return t[e]}}));return u["default"]=function(){return t},o.d(i,u),i}}(),function(){o.d=function(e,r){for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(r,t){return o.f[t](e,r),r}),[]))}}(),function(){o.u=function(e){return"static/js/"+(461===e?"webfontloader":e)+"."+{123:"19c8fd1a",155:"d214fd60",160:"4012eaa3",211:"8804db76",222:"2151483c",236:"9e75218c",297:"0cedc420",313:"bc1b0550",317:"5832b88d",369:"67753c58",387:"b7761320",408:"52d52227",409:"6dd77ace",461:"1c0c8fff",463:"ff811150",480:"1705851c",590:"ac003ec4",617:"b3797434",635:"342f12d1",642:"e370bca3",722:"ea20e7ad",725:"889eb7aa",727:"8aa8d32e",740:"d41e0ac8",785:"e24e4b59",820:"345c15b1",826:"05a53671",852:"ecca6cfc",923:"7e1ae4ae",955:"4a3cdf13"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"static/css/"+e+"."+{123:"c152b1d9",155:"68b569f6",160:"53806225",211:"538b8d58",222:"5c55ec7c",236:"f94402ff",317:"b809d32c",369:"eec173af",408:"a9135d4e",463:"8e3351a1",480:"3c6ab545",590:"e2dfe80f",635:"0fe5e141",642:"79325677",722:"06fb13eb",725:"a8d64d56",727:"4dda9baa",740:"045a6628",785:"f4a1b455",820:"f785e177",826:"9ef4cb28",923:"56a81503",955:"8fa8ae1c"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={},r="tikitaka:";o.l=function(t,n,i,u){if(e[t])e[t].push(n);else{var c,a;if(void 0!==i)for(var m=document.getElementsByTagName("script"),s=0;s<m.length;s++){var p=m[s];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+i){c=p;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",r+i),c.src=t),e[t]=[n];var l=function(r,o){c.onerror=c.onload=null,clearTimeout(d);var n=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((function(e){return e(o)})),r)return r(o)},d=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,r,o,t,n){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(o){if(i.onerror=i.onload=null,"load"===o.type)t();else{var u=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.href||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=u,a.request=c,i.parentNode&&i.parentNode.removeChild(i),n(a)}};return i.onerror=i.onload=u,i.href=r,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},r=function(e,r){for(var o=document.getElementsByTagName("link"),t=0;t<o.length;t++){var n=o[t],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===r))return n}var u=document.getElementsByTagName("style");for(t=0;t<u.length;t++){n=u[t],i=n.getAttribute("data-href");if(i===e||i===r)return n}},t=function(t){return new Promise((function(n,i){var u=o.miniCssF(t),c=o.p+u;if(r(u,c))return n();e(t,c,null,n,i)}))},n={143:0};o.f.miniCss=function(e,r){var o={123:1,155:1,160:1,211:1,222:1,236:1,317:1,369:1,408:1,463:1,480:1,590:1,635:1,642:1,722:1,725:1,727:1,740:1,785:1,820:1,826:1,923:1,955:1};n[e]?r.push(n[e]):0!==n[e]&&o[e]&&r.push(n[e]=t(e).then((function(){n[e]=0}),(function(r){throw delete n[e],r})))}}}(),function(){var e={143:0};o.f.j=function(r,t){var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(725!=r){var i=new Promise((function(o,t){n=e[r]=[o,t]}));t.push(n[2]=i);var u=o.p+o.u(r),c=new Error,a=function(t){if(o.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;c.message="Loading chunk "+r+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,n[1](c)}};o.l(u,a,"chunk-"+r,r)}else e[r]=0},o.O.j=function(r){return 0===e[r]};var r=function(r,t){var n,i,u=t[0],c=t[1],a=t[2],m=0;if(u.some((function(r){return 0!==e[r]}))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(a)var s=a(o)}for(r&&r(t);m<u.length;m++)i=u[m],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(s)},t=self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(1820)}));t=o.O(t)})();
//# sourceMappingURL=app.4c23ede7.js.map