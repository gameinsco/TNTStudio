"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[427],{2222:function(e,t,a){a.d(t,{Z:function(){return F}});var l=a(3396),n=a(7139);const i=e=>((0,l.dD)("data-v-5ebcdb5a"),e=e(),(0,l.Cn)(),e),s={class:"footer-section"},o={class:"footer-con"},c={class:"logo-con"},r=["src"],u={class:"contact-con"},v=i((()=>(0,l._)("div",{class:"location contact"},[(0,l._)("div",{class:"text-con"},[(0,l._)("p",{class:"text-title"},"Location"),(0,l._)("p",null,"부산광역시 사상구 백양대로684 4F")])],-1))),p={class:"email contact"},d={class:"text-con"},g=i((()=>(0,l._)("p",{class:"text-title"},"Email",-1))),m={class:"tel contact"},f={class:"text-con"},y=i((()=>(0,l._)("p",{class:"text-title"},"Tel",-1))),b={class:"icon-con"},k=["href"],_=["src"],h={class:"copyright-con"},w={class:"copyright"},x=["src"];function S(e,t,a,i,S,A){const I=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("section",s,[(0,l._)("div",o,[(0,l._)("div",c,[(0,l.Wm)(I,{to:"/"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:S.logo,alt:"logo",class:"logo"},null,8,r)])),_:1})]),(0,l._)("div",u,[v,(0,l._)("div",p,[(0,l._)("div",d,[g,(0,l._)("p",null,(0,n.zw)(S.text.email),1)])]),(0,l._)("div",m,[(0,l._)("div",f,[y,(0,l._)("p",null,(0,n.zw)(S.text.tel),1)])])]),(0,l._)("div",null,[(0,l._)("div",b,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(S.icon,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"icon-div",key:t},[(0,l._)("a",{href:e.href},[(0,l._)("img",{src:e.src,alt:"logo",class:"icon"},null,8,_)],8,k)])))),128))]),(0,l._)("div",h,[(0,l._)("div",w,[(0,l._)("img",{src:S.copyright},null,8,x),(0,l.Uk)(" 2023 TNT STUDIO All right reserved ")])])])])])}var A={data(){return{logo:a(6640),copyright:a(9908),text:{location:"부산광역시 사상구 백양대로684 5F",email:"gameinscokr@naver.com",tel:"051-301-5908"},icon:[{src:a(2811),href:"http://www.xn--ef5bu9n7vbido5j.com/"},{src:a(2265),href:"https://blog.naver.com/gameinscokr"},{src:a(1746),href:"https://www.youtube.com/@tikintaka"},{src:a(6367),href:"https://blog.naver.com/bourjois13"},{src:a(2300),href:"https://www.instagram.com/tikintaka_official/"}]}}},I=a(89);const C=(0,I.Z)(A,[["render",S],["__scopeId","data-v-5ebcdb5a"]]);var F=C},7275:function(e,t,a){a.d(t,{Z:function(){return E}});var l=a(3396),n=a(7139),i=a(652),s=a(836),o=a(3289),c=a(1114);const r=(0,c.J)("v-list-item-subtitle"),u=(0,c.J)("v-list-item-title");var v=a(3824),p=a(5221),d=a(4960),g=a(2718),m=a(9694),f=a(4544),y=a(2465),b=a(4231),k=a(6183),_=a(1138),h=a(7041);Symbol.for("vuetify:depth");const w=Symbol.for("vuetify:list");function x(){return(0,l.f3)(w,null)}a(7658);var S=a(3766),A=a(7514),I=a(4870);const C=Symbol.for("vuetify:nested"),F={id:(0,I.iH)(),root:{register:()=>null,unregister:()=>null,parents:(0,I.iH)(new Map),children:(0,I.iH)(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:(0,I.iH)(new Set),selected:(0,I.iH)(new Map),selectedValues:(0,I.iH)([])}},W=((0,S.U)({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),(e,t)=>{const a=(0,l.f3)(C,F),n=Symbol((0,A.sq)()),i=(0,l.Fl)((()=>e.value??n)),s={...a,id:i,open:(e,t)=>a.root.open(i.value,e,t),openOnSelect:(e,t)=>a.root.openOnSelect(i.value,e,t),isOpen:(0,l.Fl)((()=>a.root.opened.value.has(i.value))),parent:(0,l.Fl)((()=>a.root.parents.value.get(i.value))),select:(e,t)=>a.root.select(i.value,e,t),isSelected:(0,l.Fl)((()=>"on"===a.root.selected.value.get((0,I.IU)(i.value)))),isIndeterminate:(0,l.Fl)((()=>"indeterminate"===a.root.selected.value.get(i.value))),isLeaf:(0,l.Fl)((()=>!a.root.children.value.get(i.value))),isGroupActivator:a.isGroupActivator};return!a.isGroupActivator&&a.root.register(i.value,a.id.value,t),(0,l.Jd)((()=>{!a.isGroupActivator&&a.root.unregister(i.value)})),t&&(0,l.JJ)(C,s),s});var L=a(320),B=a(131),D=a(9888);const H=(0,L.ev)()({name:"VListItem",directives:{Ripple:v.H},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:d.lE,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:d.lE,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:B.as,onClickOnce:B.as,...(0,g.m)(),...(0,m.f)(),...(0,f.x)(),...(0,y.c)(),...(0,b.I)(),...(0,k.GN)(),...(0,_.Q)(),...(0,h.x$)(),...(0,p.bk)({variant:"text"})},emits:{click:e=>!0},setup(e,t){let{attrs:a,slots:n,emit:c}=t;const v=(0,k.nB)(e,a),d=(0,l.Fl)((()=>e.value??v.href.value)),{select:_,isSelected:w,isIndeterminate:S,isGroupActivator:A,root:I,parent:C,openOnSelect:F}=W(d,!1),L=x(),B=(0,l.Fl)((()=>!1!==e.active&&(e.active||v.isActive?.value||w.value))),H=(0,l.Fl)((()=>!1!==e.link&&v.isLink.value)),V=(0,l.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||v.isClickable.value||null!=e.value&&!!L))),O=(0,l.Fl)((()=>e.rounded||e.nav)),T=(0,l.Fl)((()=>({color:B.value?e.activeColor??e.color:e.color,variant:e.variant})));(0,l.YP)((()=>v.isActive?.value),(e=>{e&&null!=C.value&&I.open(C.value,!0),e&&F(e)}),{immediate:!0});const{themeClasses:G}=(0,h.ER)(e),{borderClasses:J}=(0,g.P)(e),{colorClasses:U,colorStyles:Y,variantClasses:j}=(0,p.c1)(T),{densityClasses:z}=(0,m.t)(e),{dimensionStyles:E}=(0,f.$)(e),{elevationClasses:N}=(0,y.Y)(e),{roundedClasses:K}=(0,b.b)(O),M=(0,l.Fl)((()=>e.lines?`v-list-item--${e.lines}-line`:void 0)),P=(0,l.Fl)((()=>({isActive:B.value,select:_,isSelected:w.value,isIndeterminate:S.value})));function Z(t){c("click",t),!A&&V.value&&(v.navigate?.(t),null!=e.value&&_(!w.value,t))}function $(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Z(e))}return(0,D.L)((()=>{const t=H.value?"a":e.tag,a=!L||w.value||B.value,c=n.title||e.title,d=n.subtitle||e.subtitle,g=!!(n.append||e.appendAvatar||e.appendIcon),m=!!(n.prepend||e.prependAvatar||e.prependIcon);return L?.updateHasPrepend(m),(0,l.wy)((0,l.Wm)(t,{class:["v-list-item",{"v-list-item--active":B.value,"v-list-item--disabled":e.disabled,"v-list-item--link":V.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!m&&L?.hasPrepend.value,[`${e.activeClass}`]:e.activeClass&&B.value},G.value,J.value,a?U.value:void 0,z.value,N.value,M.value,K.value,j.value],style:[a?Y.value:void 0,E.value],href:v.href.value,tabindex:V.value?0:void 0,onClick:Z,onKeydown:V.value&&!H.value&&$},{default:()=>[(0,p.Ux)(V.value||B.value,"v-list-item"),m&&(0,l.Wm)("div",{key:"prepend",class:"v-list-item__prepend"},[e.prependAvatar&&(0,l.Wm)(i.V,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&(0,l.Wm)(o.t,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null),n.prepend&&(0,l.Wm)(s.z,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[n.prepend(P.value)]})]),(0,l.Wm)("div",{class:"v-list-item__content","data-no-activator":""},[c&&(0,l.Wm)(u,{key:"title"},{default:()=>[n.title?.({title:e.title})??e.title]}),d&&(0,l.Wm)(r,{key:"subtitle"},{default:()=>[n.subtitle?.({subtitle:e.subtitle})??e.subtitle]}),n.default?.(P.value)]),g&&(0,l.Wm)("div",{key:"append",class:"v-list-item__append"},[n.append&&(0,l.Wm)(s.z,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[n.append(P.value)]}),e.appendIcon&&(0,l.Wm)(o.t,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&(0,l.Wm)(i.V,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])]}),[[(0,l.Q2)("ripple"),V.value&&e.ripple]])})),{}}}),V=e=>((0,l.dD)("data-v-53b8dd26"),e=e(),(0,l.Cn)(),e),O={class:"menu_section"},T={class:"menu-box"},G={class:"menu_con"},J=V((()=>(0,l._)("div",{style:{width:"100%","justify-content":"center","align-items":"center",display:"flex"}},null,-1)));function U(e,t,a,i,s,o){const c=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("section",O,[(0,l._)("div",T,[(0,l._)("div",G,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.menus,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"list_con"},[(0,l.Wm)(H,{value:t},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"menu-list"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{to:e.value},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.title),1)])),_:2},1032,["to"])])),_:2},1024)])),_:2},1032,["value"])])))),128))]),J])])}var Y={name:"MenuBar",components:{},data(){return{menus:[{title:"회사소개",value:"/intro"},{title:"서비스",value:"/studio"},{title:"프로그램",value:"/program"},{title:"회사소식",value:"/news"},{title:"문의하기",value:"/ask"}],icon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:a(2183)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:a(9245)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official",src:a(9427)}]}}},j=a(89);const z=(0,j.Z)(Y,[["render",U],["__scopeId","data-v-53b8dd26"]]);var E=z},2300:function(e,t,a){e.exports=a.p+"static/img/Instalogo.09d254fd.svg"},2811:function(e,t,a){e.exports=a.p+"static/img/TKlogo.ea40915f.svg"},6367:function(e,t,a){e.exports=a.p+"static/img/TicToklogo.4688f6a0.svg"},1746:function(e,t,a){e.exports=a.p+"static/img/Youtubelogo.6f8479f0.svg"},9908:function(e,t,a){e.exports=a.p+"static/img/copyright.b6e91a96.svg"},2265:function(e,t,a){e.exports=a.p+"static/img/naverlogo.ccb5b0e4.svg"},6640:function(e,t,a){e.exports=a.p+"static/img/scrollLogo.f4f06b9b.svg"},9511:function(e,t,a){e.exports=a.p+"static/img/instaLogo.6a4302a2.svg"},3416:function(e,t,a){e.exports=a.p+"static/img/logo.0e7e25cd.svg"},9427:function(e,t,a){e.exports=a.p+"static/img/scrollInstaLogo.3748518a.svg"},7009:function(e,t,a){e.exports=a.p+"static/img/scrollLogo.f4f06b9b.svg"},2183:function(e,t,a){e.exports=a.p+"static/img/scrollTkLogo.d8412227.svg"},9245:function(e,t,a){e.exports=a.p+"static/img/scrollYoutubeLogo.578e2b61.svg"},5555:function(e,t,a){e.exports=a.p+"static/img/tkLogo.132e5321.svg"},9456:function(e,t,a){e.exports=a.p+"static/img/youtubeLogo.3b6aeb01.svg"},1114:function(e,t,a){a.d(t,{J:function(){return s}});var l=a(7139),n=a(3396),i=a(320);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return(0,i.ev)()({name:a??(0,l.kC)((0,l._A)(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(t,a){let{slots:l}=a;return()=>(0,n.h)(t.tag,{class:e},l.default?.())}})}}}]);
//# sourceMappingURL=427.db8df2ed.js.map