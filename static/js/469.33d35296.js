"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[469],{1859:function(e,t,o){o.r(t),o.d(t,{default:function(){return C}});var r=o(3396),a=o(7139),l=o(6372),s=o(9166),n=o(9694),c=o(1138),d=o(7041),u=o(3766),i=o(1107),g=o(9888),h=o(131);const m=(0,u.U)({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...(0,s.l)(),...(0,n.f)(),...(0,c.Q)(),...(0,d.x$)()},"VTable"),f=(0,i.ev)()({name:"VTable",props:m(),setup(e,t){let{slots:o}=t;const{themeClasses:a}=(0,d.ER)(e),{densityClasses:l}=(0,n.t)(e);return(0,g.L)((()=>(0,r.Wm)(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!o.top,"v-table--has-bottom":!!o.bottom,"v-table--hover":e.hover},a.value,l.value,e.class],style:e.style},{default:()=>[o.top?.(),o.default?(0,r.Wm)("div",{class:"v-table__wrapper",style:{height:(0,h.kb)(e.height)}},[(0,r.Wm)("table",null,[o.default()])]):o.wrapper?.(),o.bottom?.()]}))),{}}}),v=e=>((0,r.dD)("data-v-167a1598"),e=e(),(0,r.Cn)(),e),p=v((()=>(0,r._)("div",{style:{height:"20vh",display:"flex","justify-content":"center","align-items":"center","background-color":"#b9b9b9"}},[(0,r._)("h1",null,"예약 확인")],-1))),_=v((()=>(0,r._)("thead",{style:{"font-family":"'Pretendard'","font-weight":"bold"}},[(0,r._)("tr",null,[(0,r._)("th",{class:"text-center"},"이름"),(0,r._)("th",{class:"text-center"},"스튜디오"),(0,r._)("th",{class:"text-center"},"대여날짜"),(0,r._)("th",{class:"text-center"},"대여시간"),(0,r._)("th",{class:"text-center"},"사용 인원수"),(0,r._)("th",{class:"text-center"},"연락처"),(0,r._)("th",{class:"text-center"},"이메일"),(0,r._)("th",{class:"text-center"},"입금 확인")])],-1))),z={style:{"text-align":"center","font-family":"'Pretendard-Regular'"}};function b(e,t,o,s,n,c){return(0,r.wg)(),(0,r.iD)(r.HY,null,[p,(0,r.Wm)(f,{"fixed-header":"",height:"80vh"},{default:(0,r.w5)((()=>[_,(0,r._)("tbody",z,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.formDataArray,(e=>((0,r.wg)(),(0,r.iD)("tr",{key:e.name},[(0,r._)("td",null,(0,a.zw)(e.userName),1),(0,r._)("td",null,(0,a.zw)(e.studioName),1),(0,r._)("td",null,(0,a.zw)(e.date),1),(0,r._)("td",null,(0,a.zw)(e.startTime)+":00 -"+(0,a.zw)(e.endTime)+":00",1),(0,r._)("td",null,(0,a.zw)(e.peopleNum),1),(0,r._)("td",null,(0,a.zw)(e.phone),1),(0,r._)("td",null,(0,a.zw)(e.email),1),(0,r._)("td",null,[(0,r.Wm)(l.T,{onClick:t=>c.confirmReservation(e.phone,1),class:(0,a.C_)({pressed:1===e.state})},{default:(0,r.w5)((()=>[(0,r.Uk)("확인")])),_:2},1032,["onClick","class"])])])))),128))])])),_:1})],64)}o(7658);var F=o(7387),w=o.n(F),x=o(65),y={computed:{...(0,x.Se)(["hostAddressName"])},data(){return{desserts:[{name:"Frozen Yogurt",calories:159,color:"Frozen Yogurt",dka:159,fsae:"Frozen Yogurt",sad:159,qwe:"Frozen Yogurt"},{name:"Frozen Yogurt",calories:159,color:"Frozen Yogurt",dka:159,fsae:"Frozen Yogurt",sad:159},{name:"Frozen Yogurt",calories:159,color:"Frozen Yogurt",dka:159,fsae:"Frozen Yogurt",sad:159,qwe:"Frozen Yogurt"},{name:"Frozen Yogurt",calories:159,color:"Frozen Yogurt",dka:159,fsae:"Frozen Yogurt",sad:159,qwe:"Frozen Yogurt"},{name:"Frozen Yogurt",calories:159,color:"Frozen Yogurt",dka:159,fsae:"Frozen Yogurt",sad:159}],formDataArray:[]}},mounted(){w().ajax({url:this.hostAddressName+"/studio/reserve/CalendarReservate",method:"GET",type:"get",dataType:"json",success:e=>{console.log(e),this.getForm(e)},error:function(e){alert("전송 실패"),console.log(""),console.log("[Error] : [error] : "+e),console.log("")},complete:function(e,t){console.log(""),console.log("[server] : [complete] : "+t),console.log("")}})},methods:{getForm(e){for(var t=0;t<e.length;t++)this.formDataArray.push(e[t]);console.log(this.formDataArray)},confirmReservation(e,t){w().ajax({url:this.hostAddressName+"/studio/reservateConfirm/"+e+"/"+t,method:"GET",type:"get",dataType:"json",success:e=>{console.log(e)},error:function(e){console.log(""),console.log("[Error] : [error] : "+e),console.log("")},complete:function(e,t){console.log(""),console.log("[server] : [complete] : "+t),console.log("")}})}}},Y=o(89);const k=(0,Y.Z)(y,[["render",b],["__scopeId","data-v-167a1598"]]);var C=k}}]);
//# sourceMappingURL=469.33d35296.js.map