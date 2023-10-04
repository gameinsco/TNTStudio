"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[5350],{5350:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(3396),l=a(7139),s=a(5101),i=a(11),r=a(1888),o=a(1334),d=a(3601);const u={style:{width:"100%",height:"100px"}},c=["onClick"],p={key:0},v=["src"],g={class:"sign-div"},f=["onMousedown","onMousemove","onMouseup","onTouchstart","onTouchmove","onTouchend"];function m(e,t,a,m,h,y){return(0,n.wg)(),(0,n.iD)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.signatures,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"sign-con"},[(0,n._)("span",{class:"sign-confirm",onClick:e=>y.openSignDialog(t),style:{width:"100px",height:"100px",display:"block"}},null,8,c),e.src?((0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("img",{src:e.src,style:(0,l.j5)(y.signStyle)},null,12,v)])):(0,n.kq)("",!0),(0,n._)("div",g,[(0,n.Wm)(d.B,{modelValue:e.dialog,"onUpdate:modelValue":t=>e.dialog=t},{default:(0,n.w5)((()=>[(0,n.Wm)(i._,{width:"550"},{default:(0,n.w5)((()=>[(0,n.Wm)(r.Z,null,{default:(0,n.w5)((()=>[(0,n._)("canvas",{ref_for:!0,ref:`signatureCanvas${t}`,width:"500",height:"300",style:{border:"1px solid black"},onMousedown:e=>y.startDrawing(t),onMousemove:e=>y.draw(t,e),onMouseup:e=>y.stopDrawing(t),onTouchstart:e=>y.startDrawing(t),onTouchmove:e=>y.draw(t,e),onTouchend:e=>y.stopDrawing(t)},null,40,f)])),_:2},1024),(0,n.Wm)(o.h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s.T,{onClick:e=>y.clearCanvas(t)},{default:(0,n.w5)((()=>[(0,n.Uk)("clear")])),_:2},1032,["onClick"]),(0,n.Wm)(s.T,{onClick:e=>y.saveSignature(t)},{default:(0,n.w5)((()=>[(0,n.Uk)("save")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])])])))),128))])}var h={data(){return{signatures:[{dialog:!1,src:null,ctx:null,isDrawing:!1},{dialog:!1,src:null,ctx:null,isDrawing:!1}]}},computed:{signStyle(){return{width:"80px",position:"absolute",height:"50px",transform:"translate3d(65px, -10px, 10px)"}}},methods:{openSignDialog(e){this.signatures[e].dialog=!0,this.$nextTick((()=>{const t=this.$refs[`signatureCanvas${e}`][0];t&&(this.signatures[e].ctx=t.getContext("2d"))}))},startDrawing(e){event.preventDefault(),this.signatures[e].isDrawing=!0,this.signatures[e].ctx.beginPath()},draw(e,t){if(t.preventDefault(),!this.signatures[e].isDrawing)return;const a=this.signatures[e].ctx;a.lineWidth=2,a.lineCap="round",a.strokeStyle="black";const n=this.$refs[`signatureCanvas${e}`][0].getBoundingClientRect();var l=t.clientX-n.left,s=t.clientY-n.top;t.touches&&(l=t.touches[0].clientX-n.left,s=t.touches[0].clientY-n.top),a.lineTo(l,s),a.stroke()},stopDrawing(e){this.signatures[e].isDrawing=!1},clearCanvas(e){this.signatures[e].ctx.clearRect(0,0,this.$refs[`signatureCanvas${e}`][0].width,this.$refs[`signatureCanvas${e}`][0].height)},saveSignature(e){const t=this.$refs[`signatureCanvas${e}`][0].toDataURL("image/png");this.signatures[e].src=t,this.signatures[e].dialog=!1,fetch(t).then((e=>e.blob()))}}},y=a(89);const k=(0,y.Z)(h,[["render",m]]);var b=k},11:function(e,t,a){a.d(t,{_:function(){return $}});var n=a(3396),l=a(1334),s=a(1114);const i=(0,s.J)("v-card-subtitle");var r=a(6572),o=a(652),d=a(836),u=a(9166),c=a(9694),p=a(4960),v=a(3766),g=a(1107),f=a(9888);const m=(0,v.U)({appendAvatar:String,appendIcon:p.lE,prependAvatar:String,prependIcon:p.lE,subtitle:String,title:String,...(0,u.l)(),...(0,c.f)()},"VCardItem"),h=(0,g.ev)()({name:"VCardItem",props:m(),setup(e,t){let{slots:a}=t;return(0,f.L)((()=>{const t=!(!e.prependAvatar&&!e.prependIcon),l=!(!t&&!a.prepend),s=!(!e.appendAvatar&&!e.appendIcon),u=!(!s&&!a.append),c=!(!e.title&&!a.title),p=!(!e.subtitle&&!a.subtitle);return(0,n.Wm)("div",{class:["v-card-item",e.class],style:e.style},[l&&(0,n.Wm)("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?(0,n.Wm)(d.z,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},a.prepend):t&&(0,n.Wm)(o.V,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),(0,n.Wm)("div",{class:"v-card-item__content"},[c&&(0,n.Wm)(r.E,{key:"title"},{default:()=>[a.title?.()??e.title]}),p&&(0,n.Wm)(i,{key:"subtitle"},{default:()=>[a.subtitle?.()??e.subtitle]}),a.default?.()]),u&&(0,n.Wm)("div",{key:"append",class:"v-card-item__append"},[a.append?(0,n.Wm)(d.z,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},a.append):s&&(0,n.Wm)(o.V,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])})),{}}});var y=a(1888),k=a(8694),b=a(2718),w=a(4544),C=a(2465),x=a(6791),W=a(5180),D=a(489),S=a(4231),I=a(6183),V=a(1138),A=a(7041),_=a(5221),B=a(3824);const E=(0,v.U)({appendAvatar:String,appendIcon:p.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:p.lE,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...(0,b.m)(),...(0,u.l)(),...(0,c.f)(),...(0,w.x)(),...(0,C.c)(),...(0,x.fF)(),...(0,W.y)(),...(0,D.F)(),...(0,S.I)(),...(0,I.GN)(),...(0,V.Q)(),...(0,A.x$)(),...(0,_.bk)({variant:"elevated"})},"VCard"),$=(0,g.ev)()({name:"VCard",directives:{Ripple:B.H},props:E(),setup(e,t){let{attrs:a,slots:s}=t;const{themeClasses:i}=(0,A.ER)(e),{borderClasses:r}=(0,b.P)(e),{colorClasses:o,colorStyles:u,variantClasses:p}=(0,_.c1)(e),{densityClasses:v}=(0,c.t)(e),{dimensionStyles:g}=(0,w.$)(e),{elevationClasses:m}=(0,C.Y)(e),{loaderClasses:V}=(0,x.U2)(e),{locationStyles:B}=(0,W.T)(e),{positionClasses:E}=(0,D.K)(e),{roundedClasses:$}=(0,S.b)(e),T=(0,I.nB)(e,a),U=(0,n.Fl)((()=>!1!==e.link&&T.isLink.value)),F=(0,n.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||T.isClickable.value)));return(0,f.L)((()=>{const t=U.value?"a":e.tag,a=!(!s.title&&!e.title),c=!(!s.subtitle&&!e.subtitle),f=a||c,b=!!(s.append||e.appendAvatar||e.appendIcon),w=!!(s.prepend||e.prependAvatar||e.prependIcon),C=!(!s.image&&!e.image),W=f||w||b,D=!(!s.text&&!e.text);return(0,n.wy)((0,n.Wm)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":F.value},i.value,r.value,o.value,v.value,m.value,V.value,E.value,$.value,p.value,e.class],style:[u.value,g.value,B.value,e.style],href:T.href.value,onClick:F.value&&T.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[C&&(0,n.Wm)("div",{key:"image",class:"v-card__image"},[s.image?(0,n.Wm)(d.z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},s.image):(0,n.Wm)(k.f,{key:"image-img",cover:!0,src:e.image},null)]),(0,n.Wm)(x.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:s.loader}),W&&(0,n.Wm)(h,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:s.item,prepend:s.prepend,title:s.title,subtitle:s.subtitle,append:s.append}),D&&(0,n.Wm)(y.Z,{key:"text"},{default:()=>[s.text?.()??e.text]}),s.default?.(),s.actions&&(0,n.Wm)(l.h,null,{default:s.actions}),(0,_.Ux)(F.value,"v-card")]}),[[(0,n.Q2)("ripple"),F.value&&e.ripple]])})),{}}})},1334:function(e,t,a){a.d(t,{h:function(){return o}});var n=a(3396),l=a(9166),s=a(6107),i=a(1107),r=a(9888);const o=(0,i.ev)()({name:"VCardActions",props:(0,l.l)(),setup(e,t){let{slots:a}=t;return(0,s.AF)({VBtn:{variant:"text"}}),(0,r.L)((()=>(0,n.Wm)("div",{class:["v-card-actions",e.class],style:e.style},[a.default?.()]))),{}}})},1888:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(1114);const l=(0,n.J)("v-card-text")},6572:function(e,t,a){a.d(t,{E:function(){return l}});var n=a(1114);const l=(0,n.J)("v-card-title")},3601:function(e,t,a){a.d(t,{B:function(){return h}});var n=a(3396),l=a(2583),s=a(836),i=a(5164),r=a(3185),o=a(8717),d=a(5975),u=a(4870),c=a(3766),p=a(1107),v=a(131),g=a(2385),f=a(9888);const m=(0,c.U)({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...(0,i.B)({origin:"center center",scrollStrategy:"block",transition:{component:l.v},zIndex:2400})},"VDialog"),h=(0,p.ev)()({name:"VDialog",props:m(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const l=(0,o.z)(e,"modelValue"),{scopeId:c}=(0,d.a)(),p=(0,u.iH)();function m(e){const t=e.relatedTarget,a=e.target;if(t!==a&&p.value?.contentEl&&p.value?.globalTop&&![document,p.value.contentEl].includes(a)&&!p.value.contentEl.contains(a)){const e=(0,v.ef)(p.value.contentEl);if(!e.length)return;const a=e[0],n=e[e.length-1];t===a?n.focus():a.focus()}}g.BR&&(0,n.YP)((()=>l.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",m):document.removeEventListener("focusin",m)}),{immediate:!0}),(0,n.YP)(l,(async e=>{await(0,n.Y3)(),e?p.value.contentEl?.focus({preventScroll:!0}):p.value.activatorEl?.focus({preventScroll:!0})}));const h=(0,n.Fl)((()=>(0,n.dG)({"aria-haspopup":"dialog","aria-expanded":String(l.value)},e.activatorProps)));return(0,f.L)((()=>{const[t]=i.y.filterProps(e);return(0,n.Wm)(i.y,(0,n.dG)({ref:p,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},t,{modelValue:l.value,"onUpdate:modelValue":e=>l.value=e,"aria-modal":"true",activatorProps:h.value,role:"dialog"},c),{activator:a.activator,default:function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,n.Wm)(s.z,{root:"VDialog"},{default:()=>[a.default?.(...t)]})}})})),(0,r.F)({},p)}})}}]);
//# sourceMappingURL=5350.9a46981e.js.map