"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[531],{2531:function(e,t,s){s.r(t),s.d(t,{default:function(){return E}});var n=s(3396);function a(e,t,s,a,i,o){const l=(0,n.up)("Header"),r=(0,n.up)("News"),c=(0,n.up)("FooterMain");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(l),(0,n.Wm)(r),(0,n.Wm)(c)],64)}var i=s(8090),o=s(7139);const l=e=>((0,n.dD)("data-v-4439f959"),e=e(),(0,n.Cn)(),e),r={class:"news_section"},c={class:"table_con"},d=["headers","items"],u=l((()=>(0,n._)("tr",null,[(0,n._)("th",{class:"table_header"},[(0,n._)("span",{class:"num"},"번호"),(0,n._)("span",{class:"table_title"},"제목"),(0,n._)("span",{class:"table_date"},"작성일자")])],-1))),m=[u],g={style:{display:"grid","justify-content":"center"}},h={class:"desserts_align td_num"},p={class:"desserts_align td_title",style:{"justify-content":"left","padding-left":"5%"}},w={class:"desserts_align td_date"},v=l((()=>(0,n._)("div",{class:"page_btn_box"},[(0,n._)("span",{class:"btn_num"},"1")],-1)));function f(e,t,s,a,i,l){const u=(0,n.up)("HeaderTitle"),f=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("section",r,[(0,n.Wm)(u,{"title-data":i.title,"bg-image":i.bgImage},null,8,["title-data","bg-image"]),(0,n._)("div",c,[(0,n._)("thead",{headers:i.header,items:i.desserts,style:{display:"flex","justify-content":"center"}},m,8,d),(0,n._)("tbody",g,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.desserts,(e=>((0,n.wg)(),(0,n.iD)("tr",{class:"table_desserts",key:e.num},[(0,n.Wm)(f,{to:"/news"+e.num},{default:(0,n.w5)((()=>[(0,n._)("td",h,(0,o.zw)(e.num),1),(0,n._)("td",p,(0,o.zw)(e.title),1),(0,n._)("td",w,(0,o.zw)(e.date),1)])),_:2},1032,["to"])])))),128))])]),v])}var _=s(2509),b={name:"SubNews",components:{HeaderTitle:_.Z},data(){return{title:"회사소식",bgImage:[s(7327),s(3855),s(7551)],header:["번호","제목","작성일자"],desserts:[{num:"1",title:"TNT Studio Grand Opening",date:"2023.06.10"}]}}},k=s(89);const y=(0,k.Z)(b,[["render",f],["__scopeId","data-v-4439f959"]]);var S=y,I=s(6527),L={name:"SubNewsPage",components:{Header:i.Z,News:S,FooterMain:I.Z}};const D=(0,k.Z)(L,[["render",a]]);var E=D},8090:function(e,t,s){s.d(t,{Z:function(){return I}});var n=s(3396),a=s(7139);const i=e=>((0,n.dD)("data-v-bb1a8478"),e=e(),(0,n.Cn)(),e),o={class:"nav"},l={class:"menu-list"},r={class:"logo-con"},c=["src"],d=["src"],u={class:"menu-li"},m={class:"menu-icon"},g=["href"],h=["src"],p=["href"],w=["src"],v=i((()=>(0,n._)("div",{class:"bar_con"},[(0,n._)("span",{class:"bar1 bar"}),(0,n._)("span",{class:"bar2 bar"}),(0,n._)("span",{class:"bar3 bar"})],-1))),f=[v];function _(e,t,s,i,v,_){const b=(0,n.up)("router-link"),k=(0,n.up)("Header"),y=(0,n.up)("Menu");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(k,null,{default:(0,n.w5)((()=>[(0,n._)("nav",o,[(0,n._)("ul",l,[(0,n._)("div",r,[e.isScrolledUp?((0,n.wg)(),(0,n.j4)(b,{key:0,to:"/",class:"logo"},{default:(0,n.w5)((()=>[(0,n._)("img",{src:e.logo[0].mainLogo,alt:"logo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,c)])),_:1})):(0,n.kq)("",!0),e.isScrolledUp?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(b,{key:1,to:"/",class:"logo"},{default:(0,n.w5)((()=>[(0,n._)("img",{src:e.logo[0].scrollLogo,alt:"scrolllogo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,d)])),_:1}))]),(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.menuList,((t,s)=>((0,n.wg)(),(0,n.iD)("li",{key:s,class:"list"},[(0,n.Wm)(b,{to:t.href,class:"list",style:(0,a.j5)(e.linkColorStyle)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.name),1)])),_:2},1032,["to","style"])])))),128))]),(0,n._)("div",m,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.menuIcon,((t,s)=>((0,n.wg)(),(0,n.iD)("li",{key:s},[e.isScrolledUp?((0,n.wg)(),(0,n.iD)("a",{key:0,href:t.href},[(0,n._)("img",{src:e.menuIcon[s].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,h)],8,g)):(0,n.kq)("",!0),e.isScrolledUp?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("a",{key:1,href:t.href},[(0,n._)("img",{src:e.scrollMenuIcon[s].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,w)],8,p))])))),128))]),(0,n._)("div",{class:"ham",ref:"hamElement",onClick:t[0]||(t[0]=(...e)=>_.stopScrolling&&_.stopScrolling(...e))},f,512)])])])),_:1}),e.isMenuState?((0,n.wg)(),(0,n.j4)(y,{key:0})):(0,n.kq)("",!0)],64)}var b=s(3073),k={name:"HeaderMain",components:{Menu:b.Z},data:()=>({isScrolledUp:!1,isMenuState:!1,scrollLock:!1,logo:[{mainLogo:s(3416),scrollLogo:s(7009)}],menuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:s(5555)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:s(9456)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official/",src:s(9511)}],menuList:[{name:"공지사항",href:"/news"},{name:"이벤트",href:"/events"},{name:"스튜디오",href:"/studio"},{name:"문의하기",href:"/ask"}],scrollMenuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:s(2183)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:s(9245)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official",src:s(9427)}]}),mounted(){this.$nextTick((()=>{const e=this.$refs.hamElement;e.addEventListener("click",(function(){this.classList.toggle("active")}))}))},beforeUnmount(){this.removeStopEvent()},methods:{stopScrolling(){this.scrollLock=!this.scrollLock,this.isMenuState=!this.isMenuState,this.scrollLock?(window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1})):this.removeStopEvent()},stopEvent(e){e.preventDefault(),e.stopPropagation()},removeStopEvent(){window.removeEventListener("wheel",this.stopEvent,{passive:!1}),window.removeEventListener("touchmove",this.stopEvent,{passive:!1})}}},y=s(89);const S=(0,y.Z)(k,[["render",_],["__scopeId","data-v-bb1a8478"]]);var I=S},2509:function(e,t,s){s.d(t,{Z:function(){return d}});var n=s(3396),a=s(7139);const i={class:"main-title"};function o(e,t,s,o,l,r){return(0,n.wg)(),(0,n.iD)("div",{class:"title-text",style:(0,a.j5)({backgroundImage:`url(${l.currentBgImage})`})},[(0,n._)("span",i,(0,a.zw)(s.titleData),1)],4)}var l={name:"SubTitle",props:{titleData:String,bgImage:Array},data(){return{currentBgImage:""}},methods:{handleResize(){const e=window.innerWidth;console.log(this.bgImage[0]),console.log(this.bgImage[1]),console.log(this.bgImage[2]),this.currentBgImage=e>1300?this.bgImage[0]:e>760?this.bgImage[1]:this.bgImage[2]}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},r=s(89);const c=(0,r.Z)(l,[["render",o],["__scopeId","data-v-a929c386"]]);var d=c},3855:function(e,t,s){e.exports=s.p+"static/img/banner1300.77396a64.svg"},7327:function(e,t,s){e.exports=s.p+"static/img/banner2560.9731708a.svg"},7551:function(e,t,s){e.exports=s.p+"static/img/banner760.b040980e.svg"}}]);
//# sourceMappingURL=531.446f59e3.js.map