"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[124],{7831:function(t,e,s){s.r(e),s.d(e,{default:function(){return D}});var a=s(3396);function n(t,e,s,n,i,r){const l=(0,a.up)("Header"),d=(0,a.up)("News"),u=(0,a.up)("FooterMain");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l),(0,a.Wm)(d),(0,a.Wm)(u)],64)}var i=s(5254),r=s(7139);const l=t=>((0,a.dD)("data-v-0ec3c340"),t=t(),(0,a.Cn)(),t),d={class:"news_section"},u={class:"table_con"},c=["headers","items"],o=l((()=>(0,a._)("tr",null,[(0,a._)("th",{class:"table_header"},[(0,a._)("span",{class:"num"},"번호"),(0,a._)("span",{class:"table_title"},"제목"),(0,a._)("span",{class:"table_date"},"작성일자")])],-1))),g=[o],m={class:"desserts_align td_num"},_={class:"desserts_align td_title",style:{"justify-content":"left","padding-left":"5%"}},b={class:"desserts_align td_date"},p=l((()=>(0,a._)("div",{class:"page_btn_box"},[(0,a._)("span",{class:"btn_num"},"1")],-1)));function w(t,e,s,n,i,l){const o=(0,a.up)("HeaderTitle"),w=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",d,[(0,a.Wm)(o,{"title-data":i.title,"sub-title-data":i.subTitle,"bg-image":i.bgImage},null,8,["title-data","sub-title-data","bg-image"]),(0,a._)("div",u,[(0,a._)("thead",{headers:i.header,items:i.desserts,style:{display:"flex","justify-content":"center"}},g,8,c),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.desserts,(t=>((0,a.wg)(),(0,a.iD)("tr",{class:"table_desserts",key:t.num},[(0,a.Wm)(w,{to:"/news"+t.num},{default:(0,a.w5)((()=>[(0,a._)("td",m,(0,r.zw)(t.num),1),(0,a._)("td",_,(0,r.zw)(t.title),1),(0,a._)("td",b,(0,r.zw)(t.date),1)])),_:2},1032,["to"])])))),128))])]),p])}var f=s(1433),h={name:"SubNews",components:{HeaderTitle:f.Z},data(){return{title:"회사소식",subTitle:"News",bgImage:[s(4175),s(5172),s(9724)],header:["번호","제목","작성일자"],desserts:[{num:"2",title:"TNT Studio 스튜디오 7월 완공",date:"2023.07.21"},{num:"1",title:"TNT Studio Grand Opening",date:"2023.06.10"}]}}},v=s(89);const y=(0,v.Z)(h,[["render",w],["__scopeId","data-v-0ec3c340"]]);var I=y,k=s(5646),z={name:"SubNewsPage",components:{Header:i.Z,News:I,FooterMain:k.Z}};const T=(0,v.Z)(z,[["render",n]]);var D=T},1433:function(t,e,s){s.d(e,{Z:function(){return g}});var a=s(3396),n=s(7139);const i={class:"text-con"},r={class:"sub-title"},l={class:"main-title"};function d(t,e,s,d,u,c){return(0,a.wg)(),(0,a.iD)("div",{class:"title-text",style:(0,n.j5)({backgroundImage:`url(${u.currentBgImage})`})},[(0,a._)("div",i,[(0,a._)("span",r,(0,n.zw)(s.subTitleData),1),(0,a._)("span",l,(0,n.zw)(s.titleData),1)])],4)}var u={name:"SubTitle",props:{titleData:String,subTitleData:String,bgImage:Array},data(){return{currentBgImage:""}},methods:{handleResize(){const t=window.innerWidth;this.currentBgImage=t>1300?this.bgImage[0]:t>760?this.bgImage[1]:this.bgImage[2]}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},c=s(89);const o=(0,c.Z)(u,[["render",d],["__scopeId","data-v-0c3d4665"]]);var g=o},5172:function(t,e,s){t.exports=s.p+"static/img/notify1300.e60f22ab.svg"},4175:function(t,e,s){t.exports=s.p+"static/img/notify1920.e341bc39.svg"},9724:function(t,e,s){t.exports=s.p+"static/img/notify760.8c640578.svg"}}]);
//# sourceMappingURL=124.1c64c7d7.js.map