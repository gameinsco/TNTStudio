"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[7630],{48621:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var i=a(73396);function l(e,t,a,l,n,s){const r=(0,i.up)("Header"),u=(0,i.up)("News"),o=(0,i.up)("FooterMain");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r),(0,i.Wm)(u),(0,i.Wm)(o)],64)}var n=a(35254),s=a(87139),r=a(75101),u=a(28157),o=a(62718),d=a(99166),v=a(96107),c=a(69694),p=a(12465),g=a(4960),m=a(61629),f=a(8717),b=a(44870);function _(){const e=(0,b.iH)([]);function t(t,a){e.value[a]=t}return(0,i.Xn)((()=>e.value=[])),{refs:e,updateRef:t}}var h=a(53712),y=a(34231),w=a(99374),L=a(71138),I=a(7041),x=a(55221),k=a(13766),V=a(81107),A=a(131),S=a(89888);const W=(0,k.U)({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:g.lE,default:"$first"},prevIcon:{type:g.lE,default:"$prev"},nextIcon:{type:g.lE,default:"$next"},lastIcon:{type:g.lE,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...(0,o.m)(),...(0,d.l)(),...(0,c.f)(),...(0,p.c)(),...(0,y.I)(),...(0,w.Z)(),...(0,L.Q)({tag:"nav"}),...(0,I.x$)(),...(0,x.bk)({variant:"text"})},"VPagination"),T=(0,V.ev)()({name:"VPagination",props:W(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,t){let{slots:a,emit:l}=t;const n=(0,f.z)(e,"modelValue"),{t:s,n:o}=(0,m.bU)(),{isRtl:d}=(0,m.Vw)(),{themeClasses:c}=(0,I.ER)(e),{width:p}=(0,u.AW)(),g=(0,b.XI)(-1);(0,v.AF)(void 0,{scoped:!0});const{resizeRef:y}=(0,h.y)((e=>{if(!e.length)return;const{target:t,contentRect:a}=e[0],i=t.querySelector(".v-pagination__list > *");if(!i)return;const l=a.width,n=i.offsetWidth+2*parseFloat(getComputedStyle(i).marginRight);g.value=k(l,n)})),w=(0,i.Fl)((()=>parseInt(e.length,10))),L=(0,i.Fl)((()=>parseInt(e.start,10))),x=(0,i.Fl)((()=>e.totalVisible?parseInt(e.totalVisible,10):g.value>=0?g.value:k(p.value,58)));function k(t,a){const i=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((t-a*i)/a).toFixed(2)))}const V=(0,i.Fl)((()=>{if(w.value<=0||isNaN(w.value)||w.value>Number.MAX_SAFE_INTEGER)return[];if(x.value<=1)return[n.value];if(w.value<=x.value)return(0,A.MT)(w.value,L.value);const t=x.value%2===0,a=t?x.value/2:Math.floor(x.value/2),i=t?a:a+1,l=w.value-a;if(i-n.value>=0)return[...(0,A.MT)(Math.max(1,x.value-1),L.value),e.ellipsis,w.value];if(n.value-l>=(t?1:0)){const t=x.value-1,a=w.value-t+L.value;return[L.value,e.ellipsis,...(0,A.MT)(t,a)]}{const t=Math.max(1,x.value-3),a=1===t?n.value:n.value-Math.ceil(t/2)+L.value;return[L.value,e.ellipsis,...(0,A.MT)(t,a),e.ellipsis,w.value]}}));function W(e,t,a){e.preventDefault(),n.value=t,a&&l(a,t)}const{refs:T,updateRef:F}=_();(0,v.AF)({VPaginationBtn:{color:(0,b.Vh)(e,"color"),border:(0,b.Vh)(e,"border"),density:(0,b.Vh)(e,"density"),size:(0,b.Vh)(e,"size"),variant:(0,b.Vh)(e,"variant"),rounded:(0,b.Vh)(e,"rounded"),elevation:(0,b.Vh)(e,"elevation")}});const P=(0,i.Fl)((()=>V.value.map(((t,a)=>{const i=e=>F(e,a);if("string"===typeof t)return{isActive:!1,key:`ellipsis-${a}`,page:t,props:{ref:i,ellipsis:!0,icon:!0,disabled:!0}};{const a=t===n.value;return{isActive:a,key:t,page:o(t),props:{ref:i,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:a?e.activeColor:e.color,ariaCurrent:a,ariaLabel:s(a?e.currentPageAriaLabel:e.pageAriaLabel,t),onClick:e=>W(e,t)}}}})))),D=(0,i.Fl)((()=>{const t=!!e.disabled||n.value<=L.value,a=!!e.disabled||n.value>=L.value+w.value-1;return{first:e.showFirstLastPage?{icon:d.value?e.lastIcon:e.firstIcon,onClick:e=>W(e,L.value,"first"),disabled:t,ariaLabel:s(e.firstAriaLabel),ariaDisabled:t}:void 0,prev:{icon:d.value?e.nextIcon:e.prevIcon,onClick:e=>W(e,n.value-1,"prev"),disabled:t,ariaLabel:s(e.previousAriaLabel),ariaDisabled:t},next:{icon:d.value?e.prevIcon:e.nextIcon,onClick:e=>W(e,n.value+1,"next"),disabled:a,ariaLabel:s(e.nextAriaLabel),ariaDisabled:a},last:e.showFirstLastPage?{icon:d.value?e.firstIcon:e.lastIcon,onClick:e=>W(e,L.value+w.value-1,"last"),disabled:a,ariaLabel:s(e.lastAriaLabel),ariaDisabled:a}:void 0}}));function z(){const e=n.value-L.value;T.value[e]?.$el.focus()}function $(t){t.key===A.ff.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,(0,i.Y3)(z)):t.key===A.ff.right&&!e.disabled&&n.value<L.value+w.value-1&&(n.value=n.value+1,(0,i.Y3)(z))}return(0,S.L)((()=>(0,i.Wm)(e.tag,{ref:y,class:["v-pagination",c.value,e.class],style:e.style,role:"navigation","aria-label":s(e.ariaLabel),onKeydown:$,"data-test":"v-pagination-root"},{default:()=>[(0,i.Wm)("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&(0,i.Wm)("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(D.value.first):(0,i.Wm)(r.T,(0,i.dG)({_as:"VPaginationBtn"},D.value.first),null)]),(0,i.Wm)("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(D.value.prev):(0,i.Wm)(r.T,(0,i.dG)({_as:"VPaginationBtn"},D.value.prev),null)]),P.value.map(((e,t)=>(0,i.Wm)("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(e):(0,i.Wm)(r.T,(0,i.dG)({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})]))),(0,i.Wm)("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(D.value.next):(0,i.Wm)(r.T,(0,i.dG)({_as:"VPaginationBtn"},D.value.next),null)]),e.showFirstLastPage&&(0,i.Wm)("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(D.value.last):(0,i.Wm)(r.T,(0,i.dG)({_as:"VPaginationBtn"},D.value.last),null)])])]}))),{}}}),F=e=>((0,i.dD)("data-v-4f452e9c"),e=e(),(0,i.Cn)(),e),P={class:"news_section"},D={class:"table_con"},z=["headers","items"],$=F((()=>(0,i._)("tr",null,[(0,i._)("th",{class:"table_header"},[(0,i._)("span",{class:"num"},"번호"),(0,i._)("span",{class:"table_title"},"제목"),(0,i._)("span",{class:"table_date"},"작성일자")])],-1))),M=[$],N={class:"desserts_align td_num"},C={class:"desserts_align td_title",style:{"justify-content":"left","padding-left":"3%"}},R={class:"desserts_align td_date"};function B(e,t,a,l,n,r){const u=(0,i.up)("HeaderTitle"),o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("section",P,[(0,i.Wm)(u,{"title-data":n.title,"sub-title-data":n.subTitle,"bg-image":n.bgImage},null,8,["title-data","sub-title-data","bg-image"]),(0,i._)("div",D,[(0,i._)("thead",{headers:n.header,items:r.desserts,style:{display:"flex","justify-content":"center"}},M,8,z),(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.desserts,(e=>((0,i.wg)(),(0,i.iD)("tr",{class:"table_desserts",key:e.num},[(0,i.Wm)(o,{to:"/news"+e.num},{default:(0,i.w5)((()=>[(0,i._)("td",N,(0,s.zw)(e.num),1),(0,i._)("td",C,(0,s.zw)(e.title),1),(0,i._)("td",R,(0,s.zw)(e.date),1)])),_:2},1032,["to"])])))),128))])]),(0,i.Wm)(T,{modelValue:n.page,"onUpdate:modelValue":t[0]||(t[0]=e=>n.page=e),length:4,rounded:"circle",style:{"margin-bottom":"30px"}},null,8,["modelValue"])])}var E=a(51433),Z={name:"SubNews",components:{HeaderTitle:E.Z},data(){return{title:"회사소식",subTitle:"News",bgImage:[a(94175),a(55172),a(99724)],page:1,header:["번호","제목","작성일자"],dessertsData:[{num:"36",title:" 2023년 여성 새로 일하기 센터 기업 협약",date:"2023.11.10"},{num:"35",title:" 2023년 동서대학교 취업박람회",date:"2023.11.08"},{num:"34",title:" 산학협력 체결서_정보영스피치",date:"2023.11.01"},{num:"33",title:" 2023년 기장군 일자리박람회",date:"2023.10.26"},{num:"32",title:" 2023년 연제구 일자리박람회",date:"2023.10.23"},{num:"31",title:" 사상여성인력개발센터 업무 협약",date:"2023.10.20"},{num:"30",title:" 대중문화예술기획업 등록 교육 이수",date:"2023.08.16"},{num:"29",title:" 비디오 생산 증명서 취득",date:"2023.08.08"},{num:"28",title:" (주)게임인스 하계휴가 안내",date:"2023.07.25"},{num:"27",title:" (주)게임인스 TNT Studio의 촬영 스튜디오 사상점 오픈",date:"2023.07.21"},{num:"26",title:" 일 생활균형 일촌기업 사업 참여",date:"2023.06.22"},{num:"25",title:"한국건강가정진흥원 교육 이수",date:"2023.05.30"},{num:"24",title:" 2차 법정의무교육 진행",date:"2023.05.03"},{num:"23",title:" 센텀직업전문학교_업무 협약",date:"2023.04.26"},{num:"22",title:" M아카데미컴퓨터아트학원_산학 컨소시엄 협력",date:"2023.04.12"},{num:"21",title:" 2차 직무능력향상 교육",date:"2023.04.11"},{num:"20",title:" [보도자료] (주)게임인스, 씀씀이가 바른 기업 가입",date:"2023.04.10"},{num:"19",title:"부산디자인진흥원 인력양성사업 협약",date:"2022.04.04"},{num:"18",title:"파란일자리(1유형) 지원 사업 선정 및 협약",date:"2023.03.01"},{num:"17",title:"부산인재개발원 실무인재 양성훈련 협약",date:"2023.02.23"},{num:"16",title:"1차 법정의무교육 진행",date:"2023.02.17"},{num:"15",title:"근로자 휴가지원 사업 참여",date:"2023.02.02"},{num:"14",title:"1차 직무능력향상 교육",date:"2023.01.17"},{num:"13",title:"소상공인IP역량강화 교육 수료",date:"2022.11.24"},{num:"12",title:"일생활 균형 캠페인 참여",date:"2022.11.14"},{num:"11",title:"창업 아카데미 교육 이수",date:"2022.11.11"},{num:"10",title:"2022 신라대학교 취업박람회",date:"2022.11.03"},{num:"9",title:" 청년 일자리 지원 사업 참여",date:"2022.11.02"},{num:"8",title:"(재)부산인재개발원 부산IT교육센터와의 협약 체결",date:"2022.10.27"},{num:"7",title:" 2022 서부산권 채용박람회",date:"2022.10.13"},{num:"6",title:" 한국산업안전보건공단_2022년 사무직 종사자의 안전관리 교육 이수",date:"2022.09.15"},{num:"5",title:" 청년내일채움공제 참여",date:"2022.08.31"},{num:"4",title:" 개인정보보호위원회_(신)개인정보보호법 교육 수료",date:"2022.08.31"},{num:"3",title:" 통신판매업 신고",date:"2022.04.07"},{num:"2",title:" 기업부설연구소 인정",date:"2022.08.31"},{num:"1",title:" 중소기업 인증",date:"2022.08.31"}]}},computed:{desserts(){const e=10*(this.page-1),t=e+10;return this.dessertsData.slice(e,t)}}},H=a(40089);const G=(0,H.Z)(Z,[["render",B],["__scopeId","data-v-4f452e9c"]]);var U=G,Y=a(93205),j={name:"SubNewsPage",components:{Header:n.Z,News:U,FooterMain:Y.Z}};const X=(0,H.Z)(j,[["render",l]]);var K=X},51433:function(e,t,a){a.d(t,{Z:function(){return c}});var i=a(73396),l=a(87139);const n={class:"text-con"},s={class:"sub-title"},r={class:"main-title"};function u(e,t,a,u,o,d){return(0,i.wg)(),(0,i.iD)("div",{class:"title-text",style:(0,l.j5)({backgroundImage:`url(${o.currentBgImage})`})},[(0,i._)("div",n,[(0,i._)("span",s,(0,l.zw)(a.subTitleData),1),(0,i._)("span",r,(0,l.zw)(a.titleData),1)])],4)}var o={name:"SubTitle",props:{titleData:String,subTitleData:String,bgImage:Array},data(){return{currentBgImage:""}},methods:{handleResize(){const e=window.innerWidth;this.currentBgImage=e>1300?this.bgImage[0]:e>760?this.bgImage[1]:this.bgImage[2]}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},d=a(40089);const v=(0,d.Z)(o,[["render",u],["__scopeId","data-v-0c3d4665"]]);var c=v},55172:function(e,t,a){e.exports=a.p+"static/img/notify1300.e60f22ab.svg"},94175:function(e,t,a){e.exports=a.p+"static/img/notify1920.e341bc39.svg"},99724:function(e,t,a){e.exports=a.p+"static/img/notify760.8c640578.svg"}}]);
//# sourceMappingURL=7630.46a3f096.js.map