(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[2222],{47045:function(e,t,l){var a=l(56339),o=l(3070);e.exports=function(e,t,l){return l.get&&a(l.get,t,{getter:!0}),l.set&&a(l.set,t,{setter:!0}),o.f(e,t,l)}},62062:function(e,t,l){"use strict";var a=l(19781),o=l(1702),n=l(47045),s=URLSearchParams.prototype,i=o(s.forEach);a&&!("size"in s)&&n(s,"size",{get:function(){var e=0;return i(this,(function(){e++})),e},configurable:!0,enumerable:!0})},12222:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return he}});var a=l(73396);function o(e,t,l,o,n,s){const i=(0,a.up)("Header"),r=(0,a.up)("Ask"),u=(0,a.up)("FooterMain");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a.Wm)(r),(0,a.Wm)(u)],64)}var n=l(9301),s=l(87139),i=l(75101),r=l(16119),u=l(80011),c=l(16572),d=l(41222),m=l(87103),p=l(52816),f=l(37173),v=l(49114),g=l(84870),h=l(53185),w=l(61629),b=l(8717),y=l(44870),x=l(13766),_=l(131),k=l(81107),W=l(89888);const V=(0,x.U)({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},...(0,v.c)({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>(0,_.FT)(e).every((e=>null!=e&&"object"===typeof e))},...(0,f.hy)({clearable:!0})},"VFileInput"),F=(0,k.ev)()({name:"VFileInput",inheritAttrs:!1,props:V(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:l,emit:o,slots:n}=t;const{t:s}=(0,w.bU)(),i=(0,b.z)(e,"modelValue"),{isFocused:r,focus:u,blur:c}=(0,g.K)(e),d=(0,a.Fl)((()=>"boolean"!==typeof e.showSize?e.showSize:void 0)),x=(0,a.Fl)((()=>(i.value??[]).reduce(((e,t)=>{let{size:l=0}=t;return e+l}),0))),k=(0,a.Fl)((()=>(0,_.XE)(x.value,d.value))),V=(0,a.Fl)((()=>(i.value??[]).map((t=>{const{name:l="",size:a=0}=t;return e.showSize?`${l} (${(0,_.XE)(a,d.value)})`:l})))),F=(0,a.Fl)((()=>{const t=i.value?.length??0;return e.showSize?s(e.counterSizeString,t,k.value):s(e.counterString,t)})),C=(0,y.iH)(),S=(0,y.iH)(),D=(0,y.iH)(),I=(0,a.Fl)((()=>r.value||e.active)),z=(0,a.Fl)((()=>["plain","underlined"].includes(e.variant)));function U(){D.value!==document.activeElement&&D.value?.focus(),r.value||u()}function R(e){L(e)}function E(e){o("mousedown:control",e)}function L(e){D.value?.click(),o("click:control",e)}function H(t){t.stopPropagation(),U(),(0,a.Y3)((()=>{i.value=[],(0,_.dr)(e["onClick:clear"],t)}))}return(0,a.YP)(i,(e=>{const t=!Array.isArray(e)||!e.length;t&&D.value&&(D.value.value="")})),(0,W.L)((()=>{const t=!(!n.counter&&!e.counter),o=!(!t&&!n.details),[s,u]=(0,_.An)(l),[{modelValue:d,...g}]=v.q.filterProps(e),[h]=(0,f.g8)(e);return(0,a.Wm)(v.q,(0,a.dG)({ref:C,modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,class:["v-file-input",{"v-text-field--plain-underlined":z.value},e.class],style:e.style,"onClick:prepend":R},s,g,{centerAffix:!z.value,focused:r.value}),{...n,default:t=>{let{id:l,isDisabled:o,isDirty:s,isReadonly:d,isValid:p}=t;return(0,a.Wm)(f.hF,(0,a.dG)({ref:S,"prepend-icon":e.prependIcon,onMousedown:E,onClick:L,"onClick:clear":H,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},h,{id:l.value,active:I.value||s.value,dirty:s.value,disabled:o.value,focused:r.value,error:!1===p.value}),{...n,default:t=>{let{props:{class:l,...s}}=t;return(0,a.Wm)(a.HY,null,[(0,a.Wm)("input",(0,a.dG)({ref:D,type:"file",readonly:d.value,disabled:o.value,multiple:e.multiple,name:e.name,onClick:e=>{e.stopPropagation(),d.value&&e.preventDefault(),U()},onChange:e=>{if(!e.target)return;const t=e.target;i.value=[...t.files??[]]},onFocus:U,onBlur:c},s,u),null),(0,a.Wm)("div",{class:l},[!!i.value?.length&&(n.selection?n.selection({fileNames:V.value,totalBytes:x.value,totalBytesReadable:k.value}):e.chips?V.value.map((t=>(0,a.Wm)(m.v,{key:t,size:"small",color:e.color},{default:()=>[t]}))):V.value.join(", "))])])}})},details:o?e=>(0,a.Wm)(a.HY,null,[n.details?.(e),t&&(0,a.Wm)(a.HY,null,[(0,a.Wm)("span",null,null),(0,a.Wm)(p._,{active:!!i.value?.length,value:F.value},n.counter)])]):void 0})})),(0,h.F)({},C,S,D)}});var C=l(99166),S=l(4357);const D=(0,x.U)({...(0,C.l)(),...(0,S.vC)()},"VForm"),I=(0,k.ev)()({name:"VForm",props:D(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:l,emit:o}=t;const n=(0,S.Np)(e),s=(0,y.iH)();function i(e){e.preventDefault(),n.reset()}function r(e){const t=e,l=n.validate();t.then=l.then.bind(l),t.catch=l.catch.bind(l),t.finally=l.finally.bind(l),o("submit",t),t.defaultPrevented||l.then((e=>{let{valid:t}=e;t&&s.value?.submit()})),t.preventDefault()}return(0,W.L)((()=>(0,a.Wm)("form",{ref:s,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:i,onSubmit:r},[l.default?.(n)]))),(0,h.F)(n,s)}});var z=l(16824),U=(l(98099),l(71138));const R=(0,x.U)({fluid:{type:Boolean,default:!1},...(0,C.l)(),...(0,U.Q)()},"VContainer"),E=(0,k.ev)()({name:"VContainer",props:R(),setup(e,t){let{slots:l}=t;const{rtlClasses:o}=(0,w.Vw)();return(0,W.L)((()=>(0,a.Wm)(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},o.value,e.class],style:e.style},l))),{}}});var L=l(68521),H=l(53289),P=l(11970),N=l(7041);const T=Symbol.for("vuetify:v-item-group"),Y=(0,x.U)({...(0,C.l)(),...(0,P.k4)({selectedClass:"v-item--selected"}),...(0,U.Q)(),...(0,N.x$)()},"VItemGroup"),B=(0,k.ev)()({name:"VItemGroup",props:Y(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const{themeClasses:o}=(0,N.ER)(e),{isSelected:n,select:s,next:i,prev:r,selected:u}=(0,P._v)(e,T);return()=>(0,a.Wm)(e.tag,{class:["v-item-group",o.value,e.class],style:e.style},{default:()=>[l.default?.({isSelected:n,select:s,next:i,prev:r,selected:u.value})]})}}),q=(0,k.ev)()({name:"VItem",props:(0,P.YQ)(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:l}=t;const{isSelected:a,select:o,toggle:n,selectedClass:s,value:i,disabled:r}=(0,P.Yt)(e,T);return()=>l.default?.({isSelected:a.value,selectedClass:s.value,select:o,toggle:n,value:i.value,disabled:r.value})}});var A=l(165),G=l(49242),Z=(l(348),l(57052));const M=(0,x.U)({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...(0,v.c)(),...(0,f.hy)()},"VTextarea"),j=(0,k.ev)()({name:"VTextarea",directives:{Intersect:Z.Z},inheritAttrs:!1,props:M(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:l,emit:o,slots:n}=t;const s=(0,b.z)(e,"modelValue"),{isFocused:i,focus:r,blur:u}=(0,g.K)(e),c=(0,a.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(s.value):(s.value||"").toString().length)),d=(0,a.Fl)((()=>l.maxlength?l.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function m(t,l){e.autofocus&&t&&l[0].target?.focus?.()}const w=(0,y.iH)(),x=(0,y.iH)(),k=(0,y.XI)(""),V=(0,y.iH)(),F=(0,a.Fl)((()=>e.persistentPlaceholder||i.value||e.active));function C(){V.value!==document.activeElement&&V.value?.focus(),i.value||r()}function S(e){C(),o("click:control",e)}function D(e){o("mousedown:control",e)}function I(t){t.stopPropagation(),C(),(0,a.Y3)((()=>{s.value="",(0,_.dr)(e["onClick:clear"],t)}))}function z(t){const l=t.target;if(s.value=l.value,e.modelModifiers?.trim){const e=[l.selectionStart,l.selectionEnd];(0,a.Y3)((()=>{l.selectionStart=e[0],l.selectionEnd=e[1]}))}}const U=(0,y.iH)(),R=(0,y.iH)(+e.rows),E=(0,a.Fl)((()=>["plain","underlined"].includes(e.variant)));function L(){e.autoGrow&&(0,a.Y3)((()=>{if(!U.value||!x.value)return;const t=getComputedStyle(U.value),l=getComputedStyle(x.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),o=U.value.scrollHeight,n=parseFloat(t.lineHeight),s=Math.max(parseFloat(e.rows)*n+a,parseFloat(l.getPropertyValue("--v-input-control-height"))),i=parseFloat(e.maxRows)*n+a||1/0,r=(0,_.uZ)(o??0,s,i);R.value=Math.floor((r-a)/n),k.value=(0,_.kb)(r)}))}let H;return(0,a.m0)((()=>{e.autoGrow||(R.value=+e.rows)})),(0,a.bv)(L),(0,a.YP)(s,L),(0,a.YP)((()=>e.rows),L),(0,a.YP)((()=>e.maxRows),L),(0,a.YP)((()=>e.density),L),(0,a.YP)(U,(e=>{e?(H=new ResizeObserver(L),H.observe(U.value)):H?.disconnect()})),(0,a.Jd)((()=>{H?.disconnect()})),(0,W.L)((()=>{const t=!!(n.counter||e.counter||e.counterValue),o=!(!t&&!n.details),[r,g]=(0,_.An)(l),[{modelValue:h,...b}]=v.q.filterProps(e),[y]=(0,f.g8)(e);return(0,a.Wm)(v.q,(0,a.dG)({ref:w,modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":E.value},e.class],style:e.style},r,b,{centerAffix:1===R.value&&!E.value,focused:i.value}),{...n,default:t=>{let{isDisabled:l,isDirty:o,isReadonly:r,isValid:c}=t;return(0,a.Wm)(f.hF,(0,a.dG)({ref:x,style:{"--v-textarea-control-height":k.value},onClick:S,onMousedown:D,"onClick:clear":I,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},y,{active:F.value||o.value,centerAffix:1===R.value&&!E.value,dirty:o.value||e.dirty,disabled:l.value,focused:i.value,error:!1===c.value}),{...n,default:t=>{let{props:{class:o,...n}}=t;return(0,a.Wm)(a.HY,null,[e.prefix&&(0,a.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),(0,a.wy)((0,a.Wm)("textarea",(0,a.dG)({ref:V,class:o,value:s.value,onInput:z,autofocus:e.autofocus,readonly:r.value,disabled:l.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:u},n,g),null),[[(0,a.Q2)("intersect"),{handler:m},null,{once:!0}]]),e.autoGrow&&(0,a.wy)((0,a.Wm)("textarea",{class:[o,"v-textarea__sizer"],"onUpdate:modelValue":e=>s.value=e,ref:U,readonly:!0,"aria-hidden":"true"},null),[[G.nr,s.value]]),e.suffix&&(0,a.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:o?l=>(0,a.Wm)(a.HY,null,[n.details?.(l),t&&(0,a.Wm)(a.HY,null,[(0,a.Wm)("span",null,null),(0,a.Wm)(p._,{active:e.persistentCounter||i.value,value:c.value,max:d.value},n.counter)])]):void 0})})),(0,h.F)({},w,x,V)}}),$=e=>((0,a.dD)("data-v-072d0585"),e=e(),(0,a.Cn)(),e),K={class:"contact_section"},O=$((()=>(0,a._)("div",{class:"title_con"},[(0,a._)("div",{class:"title"},[(0,a._)("p",null,"티키앤타카 스튜디오에게"),(0,a._)("p",null,"궁금한이야기를 전달하세요.")]),(0,a._)("div",{class:"sub_title"},[(0,a._)("span",null,"필요한 모든 것, 언제든지 연락주세요.")])],-1))),X={class:"flex-grow-1 text-center"},Q={class:"info_form"},J={key:0},ee=$((()=>(0,a._)("div",{class:"content",style:{"margin-bottom":"12px"}},[(0,a._)("span",null,"기본정보")],-1))),te=$((()=>(0,a._)("div",{class:"content"},[(0,a._)("span",null,"내용")],-1))),le={class:"input_form"},ae={key:1,class:"loading"},oe=["src"];function ne(e,t,l,o,n,m){const p=(0,a.up)("SubTitle"),f=(0,a.up)("Reservate");return(0,a.wg)(),(0,a.iD)("section",K,[(0,a.Wm)(p,{"title-data":e.title,"sub-title-data":e.subTitle,"bg-image":e.bgImage},null,8,["title-data","sub-title-data","bg-image"]),O,(0,a.Wm)(z.o,{class:"toggle"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{style:{"margin-bottom":"16px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{"selected-class":"my-color"},{default:(0,a.w5)((()=>[(0,a.Wm)(z.o,{style:{"justify-content":"center"}},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.categoryList,((e,t)=>((0,a.wg)(),(0,a.j4)(L.D,{key:t,cols:"3"},{default:(0,a.w5)((()=>[(0,a.Wm)(q,null,{default:(0,a.w5)((({selectedClass:l,toggle:o})=>[(0,a.Wm)(i.T,{class:(0,s.C_)(["d-flex align-center",l," btn"]),rounded:"xl",onClick:e=>m.toggleBtn(t,o)},{default:(0,a.w5)((()=>[(0,a._)("div",X,(0,s.zw)(e.list),1)])),_:2},1032,["class","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1}),"스튜디오"===this.form.category?((0,a.wg)(),(0,a.j4)(f,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(I,{class:"gform",ref:"form"},{default:(0,a.w5)((()=>[(0,a._)("div",Q,["스튜디오"!=this.form.category?((0,a.wg)(),(0,a.iD)("div",J,[ee,(0,a.Wm)(z.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(L.D,{md:"4",sm:"6",style:{"padding-bottom":"3px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(A.h,{modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.name=t),label:"이름",name:"name",placeholder:"이름을 입력해주세요.",hint:"ex) 홍길동",variant:"outlined",rules:[e=>!!e||"이름을 입력해주세요."],required:""},null,8,["modelValue","rules"])])),_:1}),(0,a.Wm)(L.D,{md:"3",sm:"4",class:"business_check",style:{"padding-bottom":"3px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(r.fF,{modelValue:e.form.sex,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.sex=t),value:e.form.sex,name:"business",id:"business",variant:"outlined",required:"",rules:[e=>!!e||"버튼을 선택해 주세요"],divided:"",width:"100%"},{default:(0,a.w5)((()=>[(0,a.Wm)(i.T,{value:"개인",width:"50%"},{default:(0,a.w5)((()=>[(0,a.Uk)("개인")])),_:1}),(0,a.Wm)(i.T,{value:"법인",width:"50%"},{default:(0,a.w5)((()=>[(0,a.Uk)("법인")])),_:1})])),_:1},8,["modelValue","value","rules"])])),_:1}),(0,a.Wm)(L.D,{md:"4",sm:"12",cols:"12",style:{"padding-bottom":"3px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(A.h,{modelValue:e.form.born,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.born=t),label:"생년월일",placeholder:"yymmdd",hint:"ex) 991223",variant:"outlined",name:"born",rules:[e=>!!e||"생년월일를 입력해주세요.",e=>e&&e.length>5||"생년월일을 확인해주세요."],onInput:t[3]||(t[3]=t=>e.form.born=e.form.born.replace(/[^0-9]/g,"").slice(0,6)),required:""},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,a.Wm)(z.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(L.D,{md:"7",ms:"7",cols:"12",style:{"padding-top":"3px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(A.h,{modelValue:e.form.email,"onUpdate:modelValue":t[4]||(t[4]=t=>e.form.email=t),name:"email",label:"이메일",required:"",rules:[e=>!!e||"이메일을 입력해주세요.",e=>e&&e.length<=35||"이메일은 35자 이하여야 합니다.",e=>/.+@.+\..+/.test(e)||"유효한 이메일 주소를 입력해주세요."],placeholder:"example@example.com",hint:"ex) example@example.com",variant:"outlined",type:"email",class:"text-field"},null,8,["modelValue","rules"])])),_:1}),(0,a.Wm)(L.D,{md:"5",ms:"5",cols:"12",style:{"padding-top":"3px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(A.h,{modelValue:e.form.phone,"onUpdate:modelValue":t[5]||(t[5]=t=>e.form.phone=t),placeholder:"01012345678",hint:"ex) 01012345678",label:"연락처",name:"phone",variant:"outlined",required:"",rules:[e=>!!e||"연락처를 입력해주세요.",e=>e&&e.length>10||"연락처를 확인해주세요."],onInput:t[6]||(t[6]=t=>e.form.phone=e.form.phone.replace(/[^0-9]/g,"").slice(0,11)),class:"text-field"},null,8,["modelValue","rules"])])),_:1})])),_:1}),te,(0,a._)("div",le,[(0,a.Wm)(z.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(L.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(A.h,{variant:"underlined",modelValue:e.form.title,"onUpdate:modelValue":t[7]||(t[7]=t=>e.form.title=t),label:"제목",name:"title",hint:"문의하실 제목을 입력해주세요",required:""},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(z.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(L.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(j,{modelValue:e.form.content,"onUpdate:modelValue":t[8]||(t[8]=t=>e.form.content=t),name:"content",variant:"outlined",label:"문의 내용",placeholder:"문의사항에 대한 자세한 내용을 적어주세요"},null,8,["modelValue"])])),_:1})])),_:1}),(0,a._)("div",null,[(0,a.Wm)(F,{type:"file",accept:"*",multiple:!0,label:"첨부파일을 업로드 해주세요(10M 이하 파일 권장)",onChange:m.handleFileChange,name:"file",variant:"underlined"},null,8,["onChange"]),(0,a.Wm)(z.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(L.D,{cols:"12"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.uploadedFiles,((e,t)=>((0,a.wg)(),(0,a.j4)(u._,{key:t,class:"mb-3",style:{height:"5vh"}},{default:(0,a.w5)((()=>[(0,a.Wm)(c.E,{style:{"font-size":"14px"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.name)+" ",1),(0,a.Wm)(i.T,{style:{width:"4%",height:"4%","font-size":"1rem","box-shadow":"0px 0px 0px 0px",color:"#616161"},icon:"",small:"",onClick:e=>m.deleteFile(t)},{default:(0,a.w5)((()=>[(0,a.Wm)(H.t,null,{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-close")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})]),(0,a.Wm)(d.x,{modelValue:e.privacyCheck,"onUpdate:modelValue":t[9]||(t[9]=t=>e.privacyCheck=t),label:"개인정보 수집 및 이용약관에 동의합니다.(필수)"},null,8,["modelValue"]),(0,a.Wm)(i.T,{class:"d-flex my-color submitBtn",style:{margin:"auto",width:"240px",height:"60px"},value:"Submit",onClick:m.submit},{default:(0,a.w5)((()=>[(0,a.Uk)("문의하기")])),_:1},8,["onClick"])])])):(0,a.kq)("",!0)])])),_:1},512),e.isSpinner?((0,a.wg)(),(0,a.iD)("div",ae,[(0,a._)("img",{src:e.loadingImg,loof:"infinite"},null,8,oe)])):(0,a.kq)("",!0)])}l(57658),l(62062);var se=l(51433),ie=l(25619),re=l(77387),ue=l.n(re),ce={components:{SubTitle:se.Z,Reservate:ie.Z},data:()=>({title:"문의하기",subTitle:"Contact",bgImage:[l(73139),l(3217),l(93806)],loadingImg:l(60168),form:{category:null,sex:null,name:"",born:"",email:"",phone:"",title:"",content:"",rule_check:"",files:[],fileName:[],fileExtension:[],filedata:[]},uploadedFiles:[],categoryList:[{list:"스튜디오"},{list:"제작/영상"},{list:"협찬"},{list:"기타"}],valid:!1,privacyCheck:!1,submitState:!1,isSpinner:!1}),mounted(){const e=document.querySelector(".submitBtn");e.addEventListener("click",(function(e){e.preventDefault()})),this.form.category="스튜디오",this.$route.query.category&&(this.form.category=this.$route.query.category)},methods:{toggleBtn(e,t){t(e),this.togglebtn(e)},handleFileChange(e){const t=e.target.files;for(let l=0;l<t.length;l++){this.form.files[l]=t[l];const e=t[l],a=new FileReader;a.onload=t=>{const l=t.target.result;var a=l.split(",")[1];const o=l.split(",")[0],n=o.split(":")[1].replace(";base64",""),s=e.name;this.form.filedata.push(a),this.form.fileExtension.push(n),this.form.fileName.push(s),this.uploadedFiles.push({name:e.name})},a.readAsDataURL(e)}console.log("filedata",this.form.filedata),console.log("fileExtension",this.form.fileExtension),console.log("fileName",this.form.fileName)},handleFileUpload(){for(let e=0;e<this.form.files.length;e++){const t=this.form.files[e],l=new FileReader;l.onload=l=>{const a=l.target.result;var o=a.split(",")[1];this.form.filedata[e]=o;const n=a.split(",")[0];this.form.fileExtension[e]=n.split(":")[1].replace(";base64",""),this.form.fileName[e]=t.name};const a={name:t.name,url:URL.createObjectURL(t)};l.readAsDataURL(t),this.uploadedFiles.push(a)}this.preview(),console.log(this.form.filedata),console.log(this.form.fileName),console.log(this.form.fileExtension)},deleteFile(e){console.log("길이 : ",this.uploadedFiles.length),console.log("index : ",e),this.form.files.splice(e,1),this.form.filedata.splice(e,1),this.form.fileExtension.splice(e,1),this.form.fileName.splice(e,1),this.uploadedFiles.splice(e,1),console.log(this.form.files),console.log(this.form.filedata),console.log(this.form.fileExtension),console.log(this.form.fileName),console.log(this.uploadedFiles)},sendformdata(){const e=new FormData,t=this.form.filedata.length;var l=this.form.content.replace(/\n/g,"<br>");e.append("category",this.form.category),e.append("name",this.form.name),e.append("born",this.form.born),e.append("business",this.form.sex),e.append("email",this.form.email),e.append("phone",this.form.phone),e.append("title",this.form.title),e.append("content",l);for(var a=0;a<t;a++)e.append("file"+[a],this.form.filedata[a]);e.append("fileName",this.form.fileName),e.append("fileExtension",this.form.fileExtension),e.append("fileCount",t),console.log([...e]),ue().ajax({url:"https://script.google.com/macros/s/AKfycbw4OTaGRWe7VzZRjcgFMTgN2REXXLFZYjg_vDDlzdz1-ndkaKkKuOENMhefBxPH4IxH/exec",data:e,type:"POST",async:!0,enctype:"multipart/form-data",processData:!1,contentType:!1,success:function(e){console.log(""),console.log("[serverUploadImage] : [response] : "+e),console.log(""),this.submitState=!1},error:function(e){console.log(""),console.log("[serverUploadImage] : [error] : "+e),console.log("")},complete:function(e,t){console.log(""),console.log("[serverUploadImage] : [complete] : "+t),console.log(""),alert("문의하신 내용을 성공적으로 전송하였습니다."),this.isSpinner=!1,this.submitState=!1,location.reload()}})},async submit(){this.valid=await this.$refs.form.validate(),this.valid.valid?null!=this.form.category?this.privacyCheck?this.submitState||(this.submitState=!0,this.isSpinner=!0,console.log("valid",this.valid.valid),this.sendformdata(),alert("문의하기 전송완료 알람창이 뜰때까지 잠시만 기다려 주세요\n(파일의 용량이 클수록 시간이 오래걸립니다)"),this.stopScrolling()):alert("개인정보 수집 동의를 체크해주세요."):alert("카테고리를 선택해주세요."):alert("기본정보를 입력해주세요.")},stopScrolling(){window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1})},stopEvent(e){e.preventDefault(),e.stopPropagation()},togglebtn(e){console.log(this.categoryList[e].list),"제작/영상"===this.categoryList[e].list?this.form.category="제작/영상":"협찬"===this.categoryList[e].list?this.form.category="협찬":"기타"===this.categoryList[e].list?this.form.category="기타":"스튜디오"===this.categoryList[e].list&&(this.form.category="스튜디오"),console.log(this.form.category),this.selectedClass=".my-color"},resetForm(){this.form=[{category:null,sex:null,name:"",born:"",email:"",phone:"",rule_check:!1,images:[],imagePreviews:[]}]},mounted(){}}},de=l(40089);const me=(0,de.Z)(ce,[["render",ne],["__scopeId","data-v-072d0585"]]);var pe=me,fe=l(26348),ve={name:"SubNewsPage",components:{Header:n.Z,Ask:pe,FooterMain:fe.Z}};const ge=(0,de.Z)(ve,[["render",o]]);var he=ge},51433:function(e,t,l){"use strict";l.d(t,{Z:function(){return m}});var a=l(73396),o=l(87139);const n={class:"text-con"},s={class:"sub-title"},i={class:"main-title"};function r(e,t,l,r,u,c){return(0,a.wg)(),(0,a.iD)("div",{class:"title-text",style:(0,o.j5)({backgroundImage:`url(${u.currentBgImage})`})},[(0,a._)("div",n,[(0,a._)("span",s,(0,o.zw)(l.subTitleData),1),(0,a._)("span",i,(0,o.zw)(l.titleData),1)])],4)}var u={name:"SubTitle",props:{titleData:String,subTitleData:String,bgImage:Array},data(){return{currentBgImage:""}},methods:{handleResize(){const e=window.innerWidth;this.currentBgImage=e>1300?this.bgImage[0]:e>760?this.bgImage[1]:this.bgImage[2]}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},c=l(40089);const d=(0,c.Z)(u,[["render",r],["__scopeId","data-v-0c3d4665"]]);var m=d},25619:function(e,t,l){"use strict";l.d(t,{Z:function(){return C}});var a=l(73396),o=l(87139);const n=e=>((0,a.dD)("data-v-e9d5ac66"),e=e(),(0,a.Cn)(),e),s={class:"Reservate-section"},i=n((()=>(0,a._)("div",{class:"Text-con"},[(0,a._)("p",{class:"Title"},"스튜디오 예약 하기"),(0,a._)("p",{class:"subTitle"},"동의서 및 신청서를 다운받아 작성해 주세요")],-1))),r={class:"download-box"},u=["href","download"],c={class:"reservate-con"},d={class:"hover-text"},m={class:"card-image"},p=["src"],f=n((()=>(0,a._)("div",{class:"card-subText"},[(0,a._)("span",{class:"creator-subscribe"}," 촬영 또는 라이브 방송을 하기 위한 룸")],-1))),v={class:"card-titleText"},g={class:"creator-name"},h={class:"creator-name"};function w(e,t,l,n,w,b){const y=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",s,[i,(0,a._)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.file,(e=>((0,a.wg)(),(0,a.iD)("a",{class:"download-link",key:e,href:e.URL,download:e.name},(0,o.zw)(e.name),9,u)))),128))]),(0,a._)("div",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.rooms,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)("card"+t),key:t},[(0,a.Wm)(y,{to:"/reservate"+e.studioNum,style:{"text-decoration":"none"}},{default:(0,a.w5)((()=>[(0,a._)("div",{class:(0,o.C_)("hover-filter"+t)},[(0,a._)("span",d," [ "+(0,o.zw)(e.numMin)+"인 ] "+(0,o.zw)(e.title),1)],2),(0,a._)("div",m,[(0,a._)("img",{class:(0,o.C_)("image"+t),src:e.imageSrc},null,10,p)]),f,(0,a._)("div",v,[(0,a._)("span",g,"["+(0,o.zw)(e.numMin)+"인] "+(0,o.zw)(e.title),1),(0,a._)("span",h,(0,o.zw)(e.Price),1)])])),_:2},1032,["to"])],2)))),128))])])}var b=l.p+"3b16057c99d9abe670933d0ad90ef233.hwpx",y=l.p+"639148862671f4dc91d2776ee5acb05b.hwpx",x=l.p+"b2888912e459405bfa3144b47cd79d94.hwpx",_=l.p+"d283bce16994ef7660c9fe4b2ab227aa.hwpx",k=l(20065),W={name:"ReservatePage",computed:{...(0,k.Se)(["rooms"])},data(){return{bgImage:[l(81316),l(79685),l(9652)],file:[{URL:b,name:"스튜디오 대관 신청서.hwpx"},{URL:y,name:"장비 대여 관리 대장.hwp"},{URL:x,name:"개인정보 수집 동의서.hwpx"},{URL:_,name:"데이터 보관 활용 동의서.hwpx"}]}},mounted(){console.log(this.rooms)}},V=l(40089);const F=(0,V.Z)(W,[["render",w],["__scopeId","data-v-e9d5ac66"]]);var C=F},3217:function(e,t,l){"use strict";e.exports=l.p+"static/img/contact1300.ec5d47f0.svg"},73139:function(e,t,l){"use strict";e.exports=l.p+"static/img/contact1920.d0df76a8.svg"},93806:function(e,t,l){"use strict";e.exports=l.p+"static/img/contact760.ddf9b6e1.svg"},79685:function(e,t,l){"use strict";e.exports=l.p+"static/img/event1300.9779e701.svg"},81316:function(e,t,l){"use strict";e.exports=l.p+"static/img/event1920.3a3f1b18.svg"},9652:function(e,t,l){"use strict";e.exports=l.p+"static/img/event760.0d693670.svg"},60168:function(e,t,l){"use strict";e.exports=l.p+"static/img/loading.5e018e5a.svg"}}]);
//# sourceMappingURL=2222.c5098158.js.map