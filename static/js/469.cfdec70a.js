"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[469],{6469:function(e,t,s){s.r(t),s.d(t,{default:function(){return L}});var n=s(3396);function a(e,t,s,a,i,o){const l=(0,n.up)("Header"),r=(0,n.up)("News"),c=(0,n.up)("FooterMain");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(l),(0,n.Wm)(r),(0,n.Wm)(c)],64)}var i=s(8773),o=s(7139);const l=e=>((0,n.dD)("data-v-0aa875fa"),e=e(),(0,n.Cn)(),e),r={class:"news_section"},c={class:"table_con"},d=["headers","items"],u=l((()=>(0,n._)("tr",null,[(0,n._)("th",{class:"table_header"},[(0,n._)("span",{class:"num"},"번호"),(0,n._)("span",{class:"table_title"},"제목"),(0,n._)("span",{class:"table_date"},"작성일자")])],-1))),m=[u],g={class:"desserts_align td_num"},h={class:"desserts_align td_title",style:{"justify-content":"left","padding-left":"5%"}},p={class:"desserts_align td_date"},w=l((()=>(0,n._)("div",{class:"page_btn_box"},[(0,n._)("span",{class:"btn_num"},"1")],-1)));function f(e,t,s,a,i,l){const u=(0,n.up)("HeaderTitle"),f=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("section",r,[(0,n.Wm)(u,{"title-data":i.title,"sub-title-data":i.subTitle,"bg-image":i.bgImage},null,8,["title-data","sub-title-data","bg-image"]),(0,n._)("div",c,[(0,n._)("thead",{headers:i.header,items:i.desserts,style:{display:"flex","justify-content":"center"}},m,8,d),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.desserts,(e=>((0,n.wg)(),(0,n.iD)("tr",{class:"table_desserts",key:e.num},[(0,n.Wm)(f,{to:"/news"+e.num},{default:(0,n.w5)((()=>[(0,n._)("td",g,(0,o.zw)(e.num),1),(0,n._)("td",h,(0,o.zw)(e.title),1),(0,n._)("td",p,(0,o.zw)(e.date),1)])),_:2},1032,["to"])])))),128))])]),w])}var v=s(1433),_={name:"SubNews",components:{HeaderTitle:v.Z},data(){return{title:"회사소식",subTitle:"News",bgImage:[s(4175),s(5172),s(9724)],header:["번호","제목","작성일자"],desserts:[{num:"1",title:"TNT Studio Grand Opening",date:"2023.06.10"}]}}},b=s(89);const k=(0,b.Z)(_,[["render",f],["__scopeId","data-v-0aa875fa"]]);var y=k,S=s(5646),D={name:"SubNewsPage",components:{Header:i.Z,News:y,FooterMain:S.Z}};const I=(0,b.Z)(D,[["render",a]]);var L=I},8773:function(e,t,s){s.d(t,{Z:function(){return D}});var n=s(3396),a=s(7139);const i=e=>((0,n.dD)("data-v-3ac7408d"),e=e(),(0,n.Cn)(),e),o={class:"nav"},l={class:"menu-list"},r={class:"logo-con"},c=["src"],d=["src"],u={class:"menu-li"},m={class:"menu-icon"},g=["href"],h=["src"],p=["href"],w=["src"],f=i((()=>(0,n._)("div",{class:"bar_con"},[(0,n._)("span",{class:"bar1 bar"}),(0,n._)("span",{class:"bar2 bar"}),(0,n._)("span",{class:"bar3 bar"})],-1))),v=[f];function _(e,t,s,i,f,_){const b=(0,n.up)("router-link"),k=(0,n.up)("Header"),y=(0,n.up)("Menu");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(k,null,{default:(0,n.w5)((()=>[(0,n._)("nav",o,[(0,n._)("ul",l,[(0,n._)("div",r,[e.isScrolledUp?((0,n.wg)(),(0,n.j4)(b,{key:0,to:"/",class:"logo"},{default:(0,n.w5)((()=>[(0,n._)("img",{src:e.logo[0].mainLogo,alt:"logo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,c)])),_:1})):(0,n.kq)("",!0),e.isScrolledUp?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(b,{key:1,to:"/",class:"logo"},{default:(0,n.w5)((()=>[(0,n._)("img",{src:e.logo[0].scrollLogo,alt:"scrolllogo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,d)])),_:1}))]),(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.menuList,((t,s)=>((0,n.wg)(),(0,n.iD)("li",{key:s,class:"list"},[(0,n.Wm)(b,{to:t.href,class:"list",style:(0,a.j5)(e.linkColorStyle)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.name),1)])),_:2},1032,["to","style"])])))),128))]),(0,n._)("div",m,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.menuIcon,((t,s)=>((0,n.wg)(),(0,n.iD)("li",{key:s},[e.isScrolledUp?((0,n.wg)(),(0,n.iD)("a",{key:0,href:t.href},[(0,n._)("img",{src:e.menuIcon[s].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,h)],8,g)):(0,n.kq)("",!0),e.isScrolledUp?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("a",{key:1,href:t.href},[(0,n._)("img",{src:e.scrollMenuIcon[s].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,w)],8,p))])))),128))]),(0,n._)("div",{class:"ham",ref:"hamElement",onClick:t[0]||(t[0]=(...e)=>_.stopScrolling&&_.stopScrolling(...e))},v,512)])])])),_:1}),e.isMenuState?((0,n.wg)(),(0,n.j4)(y,{key:0})):(0,n.kq)("",!0)],64)}var b=s(7275),k={name:"HeaderMain",components:{Menu:b.Z},data:()=>({isScrolledUp:!1,isMenuState:!1,scrollLock:!1,logo:[{mainLogo:s(3416),scrollLogo:s(7009)}],menuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:s(5555)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:s(9456)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official/",src:s(9511)}],menuList:[{name:"회사소개",href:"/intro"},{name:"서비스",href:"/studio"},{name:"프로그램",href:"/program"},{name:"회사소식",href:"/news"},{name:"문의하기",href:"/ask"}],scrollMenuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:s(2183)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:s(9245)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official",src:s(9427)}]}),mounted(){this.$nextTick((()=>{const e=this.$refs.hamElement;e.addEventListener("click",(function(){this.classList.toggle("active")}))}))},beforeUnmount(){this.removeStopEvent()},methods:{stopScrolling(){this.scrollLock=!this.scrollLock,this.isMenuState=!this.isMenuState,this.scrollLock?(window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1})):this.removeStopEvent()},stopEvent(e){e.preventDefault(),e.stopPropagation()},removeStopEvent(){window.removeEventListener("wheel",this.stopEvent,{passive:!1}),window.removeEventListener("touchmove",this.stopEvent,{passive:!1})}}},y=s(89);const S=(0,y.Z)(k,[["render",_],["__scopeId","data-v-3ac7408d"]]);var D=S},1433:function(e,t,s){s.d(t,{Z:function(){return m}});var n=s(3396),a=s(7139);const i={class:"text-con"},o={class:"sub-title"},l={class:"main-title"};function r(e,t,s,r,c,d){return(0,n.wg)(),(0,n.iD)("div",{class:"title-text",style:(0,a.j5)({backgroundImage:`url(${c.currentBgImage})`})},[(0,n._)("div",i,[(0,n._)("span",o,(0,a.zw)(s.subTitleData),1),(0,n._)("span",l,(0,a.zw)(s.titleData),1)])],4)}var c={name:"SubTitle",props:{titleData:String,subTitleData:String,bgImage:Array},data(){return{currentBgImage:""}},methods:{handleResize(){const e=window.innerWidth;this.currentBgImage=e>1300?this.bgImage[0]:e>760?this.bgImage[1]:this.bgImage[2]}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},d=s(89);const u=(0,d.Z)(c,[["render",r],["__scopeId","data-v-0c3d4665"]]);var m=u},5172:function(e,t,s){e.exports=s.p+"static/img/notify1300.e60f22ab.svg"},4175:function(e,t,s){e.exports=s.p+"static/img/notify1920.e341bc39.svg"},9724:function(e,t,s){e.exports=s.p+"static/img/notify760.8c640578.svg"}}]);
//# sourceMappingURL=469.cfdec70a.js.map