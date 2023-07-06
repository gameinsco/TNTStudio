"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[0],{8773:function(t,e,a){a.d(e,{Z:function(){return E}});var s=a(3396),n=a(7139);const i=t=>((0,s.dD)("data-v-3ac7408d"),t=t(),(0,s.Cn)(),t),o={class:"nav"},r={class:"menu-list"},l={class:"logo-con"},c=["src"],d=["src"],v={class:"menu-li"},u={class:"menu-icon"},p=["href"],m=["src"],f=["href"],h=["src"],g=i((()=>(0,s._)("div",{class:"bar_con"},[(0,s._)("span",{class:"bar1 bar"}),(0,s._)("span",{class:"bar2 bar"}),(0,s._)("span",{class:"bar3 bar"})],-1))),b=[g];function w(t,e,a,i,g,w){const k=(0,s.up)("router-link"),_=(0,s.up)("Header"),S=(0,s.up)("Menu");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s._)("nav",o,[(0,s._)("ul",r,[(0,s._)("div",l,[t.isScrolledUp?((0,s.wg)(),(0,s.j4)(k,{key:0,to:"/",class:"logo"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:t.logo[0].mainLogo,alt:"logo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,c)])),_:1})):(0,s.kq)("",!0),t.isScrolledUp?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(k,{key:1,to:"/",class:"logo"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:t.logo[0].scrollLogo,alt:"scrolllogo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,d)])),_:1}))]),(0,s._)("div",v,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.menuList,((e,a)=>((0,s.wg)(),(0,s.iD)("li",{key:a,class:"list"},[(0,s.Wm)(k,{to:e.href,class:"list",style:(0,n.j5)(t.linkColorStyle)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(e.name),1)])),_:2},1032,["to","style"])])))),128))]),(0,s._)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.menuIcon,((e,a)=>((0,s.wg)(),(0,s.iD)("li",{key:a},[t.isScrolledUp?((0,s.wg)(),(0,s.iD)("a",{key:0,href:e.href},[(0,s._)("img",{src:t.menuIcon[a].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,m)],8,p)):(0,s.kq)("",!0),t.isScrolledUp?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("a",{key:1,href:e.href},[(0,s._)("img",{src:t.scrollMenuIcon[a].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,h)],8,f))])))),128))]),(0,s._)("div",{class:"ham",ref:"hamElement",onClick:e[0]||(e[0]=(...t)=>w.stopScrolling&&w.stopScrolling(...t))},b,512)])])])),_:1}),t.isMenuState?((0,s.wg)(),(0,s.j4)(S,{key:0})):(0,s.kq)("",!0)],64)}var k=a(7331),_={name:"HeaderMain",components:{Menu:k.Z},data:()=>({isScrolledUp:!1,isMenuState:!1,scrollLock:!1,logo:[{mainLogo:a(3416),scrollLogo:a(7009)}],menuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:a(5555)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:a(9456)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official/",src:a(9511)}],menuList:[{name:"회사소개",href:"/intro"},{name:"서비스",href:"/studio"},{name:"프로그램",href:"/program"},{name:"회사소식",href:"/news"},{name:"문의하기",href:"/ask"}],scrollMenuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:a(2183)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:a(9245)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official",src:a(9427)}]}),mounted(){this.$nextTick((()=>{const t=this.$refs.hamElement;t.addEventListener("click",(function(){this.classList.toggle("active")}))}))},beforeUnmount(){this.removeStopEvent()},methods:{stopScrolling(){this.scrollLock=!this.scrollLock,this.isMenuState=!this.isMenuState,this.scrollLock?(window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1})):this.removeStopEvent()},stopEvent(t){t.preventDefault(),t.stopPropagation()},removeStopEvent(){window.removeEventListener("wheel",this.stopEvent,{passive:!1}),window.removeEventListener("touchmove",this.stopEvent,{passive:!1})}}},S=a(89);const y=(0,S.Z)(_,[["render",w],["__scopeId","data-v-3ac7408d"]]);var E=y},1433:function(t,e,a){a.d(e,{Z:function(){return u}});var s=a(3396),n=a(7139);const i={class:"text-con"},o={class:"sub-title"},r={class:"main-title"};function l(t,e,a,l,c,d){return(0,s.wg)(),(0,s.iD)("div",{class:"title-text",style:(0,n.j5)({backgroundImage:`url(${c.currentBgImage})`})},[(0,s._)("div",i,[(0,s._)("span",o,(0,n.zw)(a.subTitleData),1),(0,s._)("span",r,(0,n.zw)(a.titleData),1)])],4)}var c={name:"SubTitle",props:{titleData:String,subTitleData:String,bgImage:Array},data(){return{currentBgImage:""}},methods:{handleResize(){const t=window.innerWidth;this.currentBgImage=t>1300?this.bgImage[0]:t>760?this.bgImage[1]:this.bgImage[2]}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},d=a(89);const v=(0,d.Z)(c,[["render",l],["__scopeId","data-v-0c3d4665"]]);var u=v},1e3:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var s=a(3396);const n=t=>((0,s.dD)("data-v-3bf508d6"),t=t(),(0,s.Cn)(),t),i={class:"events_section"},o={class:"container"},r={class:"box"},l=(0,s.uE)('<div class="title_con" data-v-3bf508d6><p class="date_text" data-v-3bf508d6><span style="color:black;" data-v-3bf508d6>이벤트 |</span> 작성 일자 : 2023-06-10 </p><span class="title_text" data-v-3bf508d6> [상시 이벤트] 티키앤타카 유튜브 채널 구독 이벤트 안내</span></div><div class="content_con" data-v-3bf508d6><div class="text" data-v-3bf508d6><p data-v-3bf508d6>안녕하세요, 즐거운 콘텐츠를 제작하는 TNT Studio입니다.</p><p data-v-3bf508d6>TNT Studio에서 &#39;티키앤타카&#39; 유튜브 채널을 운영하고 있습니다.</p><br data-v-3bf508d6><p data-v-3bf508d6> ▶ 유튜브 채널 LINK : <a href="https://www.youtube.com/channel/UCHOvr9WQ0EFnaGlJMckKClA" data-v-3bf508d6>https://www.youtube.com/channel/UCHOvr9WQ0EFnaGlJMckKClA</a></p><br data-v-3bf508d6><p data-v-3bf508d6> 지난 4월 20일부터 25일에는 피파온라인 BJ와 프로게이머들과 함께 TikiNTaka Super League Pre-season을 진행하였고, </p><p data-v-3bf508d6>이번에는 저희 유튜브 채널 구독 이벤트를 진행합니다.</p><p data-v-3bf508d6> 또한 매주 피파의 모든 것을 알려주는 기획 콘텐츠 영상도 업로드되고 있습니다. </p><p data-v-3bf508d6>많은 분들의 관심과 구독 부탁 드립니다.</p><br data-v-3bf508d6><p data-v-3bf508d6> ▶ &lt; 티키앤타카 유튜브 채널 구독 이벤트 &gt; 참여를 위한 네이버 폼 LINK : <a href="https://naver.me/5YwdQMX5" data-v-3bf508d6> https://naver.me/5YwdQMX5</a></p><br data-v-3bf508d6><p data-v-3bf508d6>※ 포인트 지급은 이벤트 참여일 기준 다음 영입일에 지급합니다.</p><p data-v-3bf508d6>※ 해당 이벤트는 당사 사정에 따라 변동, 중지될 수 있습니다.</p></div><div class="img_con" data-v-3bf508d6><div class="upper_box" data-v-3bf508d6><p class="sub_imgtext" data-v-3bf508d6></p></div></div></div><hr style="color:rgb(151, 151, 151);" data-v-3bf508d6>',3),c={class:"btn_con"},d=n((()=>(0,s._)("div",{class:"back_btn"},[(0,s._)("span",{class:"btn_text"},"목록으로")],-1)));function v(t,e,a,n,v,u){const p=(0,s.up)("HeaderNav"),m=(0,s.up)("HeaderTitle"),f=(0,s.up)("router-link"),h=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("section",i,[(0,s.Wm)(p),(0,s.Wm)(m,{"title-data":v.title,"bg-image":v.bgImage},null,8,["title-data","bg-image"]),(0,s._)("div",o,[(0,s._)("div",r,[l,(0,s._)("div",c,[(0,s.Wm)(f,{to:"/Events"},{default:(0,s.w5)((()=>[d])),_:1})])])]),(0,s.Wm)(h)])}var u=a(8773),p=a(1433),m=a(6317),f={name:"NewsDetail1",data(){return{title:"이벤트",bgImage:[a(1316),a(9685),a(9652)]}},components:{HeaderNav:u.Z,Footer:m.Z,HeaderTitle:p.Z}},h=a(89);const g=(0,h.Z)(f,[["render",v],["__scopeId","data-v-3bf508d6"]]);var b=g},9685:function(t,e,a){t.exports=a.p+"static/img/event1300.9779e701.svg"},1316:function(t,e,a){t.exports=a.p+"static/img/event1920.3a3f1b18.svg"},9652:function(t,e,a){t.exports=a.p+"static/img/event760.0d693670.svg"}}]);
//# sourceMappingURL=0.f77ea2ef.js.map