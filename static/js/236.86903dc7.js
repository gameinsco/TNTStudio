"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[236],{7236:function(t,e,o){o.r(e),o.d(e,{default:function(){return ue}});var s=o(3396);function i(t,e,o,i,n,a){const l=(0,s.up)("Header"),c=(0,s.up)("HomeBanner"),r=(0,s.up)("HomeInfo"),d=(0,s.up)("HomeService"),p=(0,s.up)("HomeSlideVod"),u=(0,s.up)("HomeNewsEvents"),m=(0,s.up)("FooterMain");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l),(0,s.Wm)(c),(0,s.Wm)(r),(0,s.Wm)(d),(0,s.Wm)(p),(0,s.Wm)(u),(0,s.Wm)(m)],64)}var n=o(7139);const a=t=>((0,s.dD)("data-v-126edb41"),t=t(),(0,s.Cn)(),t),l={class:"nav"},c={class:"menu-list"},r={class:"logo-con"},d=["src"],p=["src"],u={class:"menu-li"},m={class:"menu-icon"},v=["href"],g=["src"],w=["href"],b=["src"],f=a((()=>(0,s._)("div",{class:"bar_con"},[(0,s._)("span",{class:"bar1 bar"}),(0,s._)("span",{class:"bar2 bar"}),(0,s._)("span",{class:"bar3 bar"})],-1))),h=[f];function _(t,e,o,i,a,f){const _=(0,s.up)("router-link"),x=(0,s.up)("Header"),y=(0,s.up)("Menu");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(x,null,{default:(0,s.w5)((()=>[(0,s._)("nav",l,[(0,s._)("ul",c,[(0,s._)("div",r,[t.isScrolledUp?((0,s.wg)(),(0,s.j4)(_,{key:0,to:"/",class:"logo"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:t.logo[0].mainLogo,alt:"logo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,d)])),_:1})):(0,s.kq)("",!0),t.isScrolledUp?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(_,{key:1,to:"/",class:"logo"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:t.logo[0].scrollLogo,alt:"scrolllogo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,p)])),_:1}))]),(0,s._)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.menuList,((e,o)=>((0,s.wg)(),(0,s.iD)("li",{key:o,class:"list"},[(0,s.Wm)(_,{to:e.href,class:"list",style:(0,n.j5)(t.linkColorStyle)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(e.name),1)])),_:2},1032,["to","style"])])))),128))]),(0,s._)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.menuIcon,((e,o)=>((0,s.wg)(),(0,s.iD)("li",{key:o},[t.isScrolledUp?((0,s.wg)(),(0,s.iD)("a",{key:0,href:e.href},[(0,s._)("img",{src:t.menuIcon[o].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,g)],8,v)):(0,s.kq)("",!0),t.isScrolledUp?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("a",{key:1,href:e.href},[(0,s._)("img",{src:t.scrollMenuIcon[o].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,b)],8,w))])))),128))]),(0,s._)("div",{class:"ham",ref:"hamElement",onClick:e[0]||(e[0]=(...t)=>f.stopScrolling&&f.stopScrolling(...t))},h,512)])])])),_:1}),t.isMenuState?((0,s.wg)(),(0,s.j4)(y,{key:0})):(0,s.kq)("",!0)],64)}var x=o(5427),y={name:"HeaderMain",components:{Menu:x.Z},data:()=>({isScrolledUp:!0,isMenuState:!1,scrollLock:!1,logo:[{mainLogo:o(3416),scrollLogo:o(7009)}],menuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:o(5555)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:o(9456)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official/",src:o(9511)}],menuList:[{name:"회사소개",href:"/intro"},{name:"서비스",href:"/studio"},{name:"프로그램",href:"/program"},{name:"회사소식",href:"/news"},{name:"문의/예약",href:"/ask"}],scrollMenuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:o(2183)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:o(9245)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official",src:o(9427)}]}),mounted(){this.$nextTick((()=>{const t=this.$refs.hamElement;t.addEventListener("click",(function(){this.classList.toggle("active")}))}));const t=document.querySelector("Header"),e=document.querySelectorAll(".bar"),o=document.querySelectorAll(".list");window.addEventListener("scroll",(()=>{if(window.scrollY<=0){t.style.backgroundColor="rgba(0,0,0,0)",t.style.borderBottom="0px solid #e6e6e6";for(let t=0;t<o.length;t++)o[t].style.color="white";for(let t=0;t<e.length;t++)e[t].style.backgroundColor="white";this.isScrolledUp=!0,console.log(this.isScrolledUp)}else{t.style.borderBottom="1px solid #e6e6e6",t.style.backgroundColor="rgba(255,255,255,1)";for(let t=0;t<o.length;t++)o[t].style.color="black";for(let t=0;t<e.length;t++)e[t].style.backgroundColor="black";this.isScrolledUp=!1,console.log(this.isScrolledUp)}}))},beforeUnmount(){this.removeStopEvent()},methods:{stopScrolling(){this.scrollLock=!this.scrollLock,this.isMenuState=!this.isMenuState;const t=document.querySelectorAll(".bar");if(this.scrollLock){for(let e=0;e<t.length;e++)t[e].style.backgroundColor="black";window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1})}else{if(window.scrollY<=0)for(let e=0;e<t.length;e++)t[e].style.backgroundColor="white";else for(let e=0;e<t.length;e++)t[e].style.backgroundColor="black";this.removeStopEvent()}},stopEvent(t){t.preventDefault(),t.stopPropagation()},removeStopEvent(){window.removeEventListener("wheel",this.stopEvent,{passive:!1}),window.removeEventListener("touchmove",this.stopEvent,{passive:!1})}}},k=o(89);const T=(0,k.Z)(y,[["render",_],["__scopeId","data-v-126edb41"]]);var S=T;const E=t=>((0,s.dD)("data-v-426bbca0"),t=t(),(0,s.Cn)(),t),D={class:"banner-section"},H={class:"carousel"},I={class:"image-container",id:"imgs"},L={controls:!1,muted:"",autoplay:"",playsinline:"",loop:"",class:"banner-img"},j=["src"],z=E((()=>(0,s._)("div",{class:"filter"},null,-1)));function C(t,e,o,i,n,a){return(0,s.wg)(),(0,s.iD)("section",D,[(0,s._)("div",H,[(0,s._)("div",I,[(0,s._)("video",L,[(0,s._)("source",{src:n.mov,type:"video/mp4"},null,8,j)])]),z])])}var Y=o(1980),N={name:"HomeBanner",data(){return{mov:o(7310)}},mounted(){let t=Y.p8.timeline();t.to(".image-container",{height:"65vh",ease:.5,duration:1.3,delay:4.5})}};const P=(0,k.Z)(N,[["render",C],["__scopeId","data-v-426bbca0"]]);var W=P;const Z=t=>((0,s.dD)("data-v-5614547e"),t=t(),(0,s.Cn)(),t),U={class:"info-section"},q={class:"info-con"},M={class:"container"},R={class:"content"},A=(0,s.uE)('<span class="company" data-v-5614547e>TNT Studio는</span><p class="Title" data-v-5614547e>Our Studio</p><div class="text-con" data-v-5614547e><span class="describe" data-v-5614547e><div class="desc-text" data-v-5614547e> 전문성을 두루 갖추어 시청자의 관점에서 보고 싶을 만한 콘텐츠를 제작하는 <span class="h3" data-v-5614547e> 콘텐츠 제작 스튜디오</span> 입니다. </div><br data-v-5614547e></span></div>',3),B={class:"btn-box"},O={class:"btn"},K=Z((()=>(0,s._)("span",{class:"btn-text"},"VIEW MORE",-1))),V={class:"desc-image"},F=["src"],G=["src"];function Q(t,e,o,i,n,a){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",U,[(0,s._)("div",q,[(0,s._)("div",M,[(0,s._)("div",R,[A,(0,s._)("div",B,[(0,s._)("div",O,[(0,s.Wm)(l,{to:"/intro"},{default:(0,s.w5)((()=>[K])),_:1})])])]),(0,s._)("div",V,[(0,s._)("img",{src:n.infoPhone,alt:"phone",style:{width:"100%",height:"100%"}},null,8,F),(0,s._)("img",{src:n.infoPhoneSecondText,alt:"phone",class:"phone-text2"},null,8,G)])])])])}var J=o(5073),X={name:"HomeInfo",data(){return{infoPhone:o(2408),infoPhoneFirstText:o(7771),infoPhoneSecondText:o(3511),phoneText_pos:"",phoneText_width:0}},mounted(){const t=window.innerWidth;console.log(t),t>=1300?(this.phoneText_pos="translate3d(-448px, 147px, 10px)",this.phoneText_width=450):t<1300&&t>=1080?(this.phoneText_pos="translate3d(-350px, 115px, 10px)",this.phoneText_width=350):t<1080&&t>=760?(this.phoneText_pos="translate3d(-300px, 98px, 10px)",this.phoneText_width=300):t<760&&t>=640?(this.phoneText_pos="translate3d(-250px, 80px, 10px)",this.phoneText_width=250):(this.phoneText_pos="translate3d(-23px, -10px, 10px)",this.phoneText_width=t-50),Y.p8.registerPlugin(J.i);const e=Y.p8.timeline({paused:!0});Y.p8.timeline({scrollTrigger:{trigger:".info-section",start:"top-=100px center",end:"+=50%",scrub:!0,onEnter:()=>{e.play()}}}),e.to(".info-con > .container > .content > .company",{duration:1,bottom:0,opacity:1},"start"),e.to(".info-con > .container > .content > .Title",{duration:1,bottom:0,opacity:1},"start+=.3"),e.to(".info-con > .container > .content > .text-con",{duration:1,bottom:0,opacity:1},"start+=.5"),e.to(".btn-box",{duration:1,bottom:0,opacity:1},"start+=.7"),e.to(".desc-image",{duration:1,right:0,opacity:1},"start+=.4"),e.to(".phone-text2",{duration:1,boxShadow:"0px 0px 7px 5px #EEEEF6",width:this.phoneText_width,transform:this.phoneText_pos},"start+=1.2")}};const $=(0,k.Z)(X,[["render",Q],["__scopeId","data-v-5614547e"]]);var tt=$;const et=t=>((0,s.dD)("data-v-182af276"),t=t(),(0,s.Cn)(),t),ot={class:"service-section"},st=(0,s.uE)('<div class="title-con" data-v-182af276><p class="company" data-v-182af276>우리가 제공하는 것은</p><p class="title" data-v-182af276>Our Service</p><div class="subTitle-con" data-v-182af276><p class="subTitle" data-v-182af276>크리에이터에게 보다 즐겁고 성장하기 쉬운 환경을</p><p class="subTitle" data-v-182af276>제공하기 위한 아래의 서비스 입니다.</p><p class="subTitle-mobile" data-v-182af276> 크리에이터에게 보다 즐겁고 성장하기 쉬운 환경을 제공하기 위한 아래의 서비스 입니다. </p></div></div>',1),it={class:"container"},nt={class:"service-container"},at={class:"img-con"},lt=["src"],ct={class:"text-con"},rt={class:"service-title"},dt={class:"subtitle"},pt=et((()=>(0,s._)("br",null,null,-1))),ut={class:"title"},mt={class:"desc-con"},vt={class:"desc"},gt={class:"desc"},wt={class:"desc"},bt=et((()=>(0,s._)("div",{class:"container-bg"},null,-1)));function ft(t,e,o,i,a,l){return(0,s.wg)(),(0,s.iD)("section",ot,[st,(0,s._)("div",it,[(0,s._)("div",nt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.service,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:(0,n.C_)(t.class+" card")},[(0,s._)("div",at,[(0,s._)("img",{src:t.img,alt:"영상제작img"},null,8,lt)]),(0,s._)("div",ct,[(0,s._)("div",rt,[(0,s._)("span",dt,(0,n.zw)(t.subtitle),1),pt,(0,s._)("span",ut,(0,n.zw)(t.title),1)]),(0,s._)("div",mt,[(0,s._)("p",vt,(0,n.zw)(t.desc),1),(0,s._)("p",gt,(0,n.zw)(t.desc1),1),(0,s._)("p",wt,(0,n.zw)(t.desc2),1)])])],2)))),128))]),bt])])}var ht={name:"HomeService",data(){return{bgIcon:[{titleIcon:o(7659),bg1:o(846),bg2:o(3114)}],service:[{class:"video left",img:o(7233),subtitle:"video production",title:"영상 제작",desc:"전문 영상제작팀이",desc1:"업체의 목적에 부합하는",desc2:"맞춤 영상 제작"},{class:"rental right",img:o(2106),subtitle:"space rental ",title:"촬영 공간/장비 대여",desc:"100평 규모의 스튜디오와",desc1:"전문 촬영 장비",desc2:"대여"},{class:"education left",img:o(2106),subtitle:"education",title:"크리에이터 교육",desc:"크리에이터 전문",desc1:"강사진의 교육",desc2:"자격증 발급"},{class:"advertise right",img:o(7233),subtitle:"advertisement",title:"광고 대행",desc:"확실한 타깃의 채널을 이용해",desc1:"브랜드와 제품을",desc2:"효과적으로 마케팅"}]}},mounted(){Y.p8.registerPlugin(J.i);const t=Y.p8.timeline({paused:!0}),e=Y.p8.timeline({paused:!0}),o=Y.p8.timeline({paused:!0}),s=Y.p8.timeline({paused:!0}),i=Y.p8.timeline({paused:!0});Y.p8.timeline({scrollTrigger:{trigger:".service-section",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{t.play()}}}),t.to(".service-section > .title-con > .company",{duration:1.5,bottom:0,opacity:1},"start"),t.to(".service-section > .title-con > .title",{duration:1.5,bottom:0,opacity:1},"start+=.3"),t.to(".service-section > .title-con > .subTitle-con",{duration:1.5,bottom:0,opacity:1},"start+=.5"),e.to(".video",{duration:1,left:0,opacity:1},"start"),o.to(".rental",{duration:1,right:0,opacity:1},"start"),s.to(".education",{duration:1,left:0,opacity:1},"start"),i.to(".advertise",{duration:1,right:0,opacity:1},"start"),Y.p8.timeline({scrollTrigger:{trigger:".video",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{e.play()}}}),Y.p8.timeline({scrollTrigger:{trigger:".rental",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{o.play()}}}),Y.p8.timeline({scrollTrigger:{trigger:".education",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{s.play()}}}),Y.p8.timeline({scrollTrigger:{trigger:".advertise",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{i.play()}}})}};const _t=(0,k.Z)(ht,[["render",ft],["__scopeId","data-v-182af276"]]);var xt=_t;const yt=t=>((0,s.dD)("data-v-16abd672"),t=t(),(0,s.Cn)(),t),kt={class:"schedule-section"},Tt=(0,s.uE)('<div class="title-con" data-v-16abd672><p class="company" data-v-16abd672>우리의 콘텐츠는</p><p class="title" data-v-16abd672>Our Content</p><p class="subtitle" data-v-16abd672>다양한 콘텐츠를 제작하고 있습니다.</p><p class="subtitle" data-v-16abd672>&quot;피파에 실축을 더하다&quot;</p><p class="subtitle-mobile" data-v-16abd672> 다양한 콘텐츠를 제작하고 있습니다<br data-v-16abd672> &quot;피파에 실축을 더하다&quot; </p></div>',1),St={class:"Schedule-con"},Et={class:"swiper",ref:"bannerRef"},Dt={class:"swiper-wrapper"},Ht=["src"],It={class:"TextCon"},Lt={class:"company"},jt={class:"textTitle"},zt={class:"textTitle"},Ct={class:"subTitle"},Yt=yt((()=>(0,s._)("a",{class:"viewMore",href:"https://www.youtube.com/@tikintaka/playlists"},[(0,s._)("strong",null,"바로가기")],-1))),Nt=yt((()=>(0,s._)("div",{class:"swiper-btnBox"},[(0,s._)("div",{class:"swiper-button-prev swiper-btn",style:{color:"black","background-color":"#f5f5f5",position:"relative",width:"100%",height:"100%","border-radius":"10px 0px 0px 10px"}}),(0,s._)("div",{class:"swiper-button-next swiper-btn",style:{color:"black","background-color":"#f5f5f5",position:"relative",width:"100%",height:"100%"}})],-1)));function Pt(t,e,o,i,a,l){return(0,s.wg)(),(0,s.iD)("section",kt,[Tt,(0,s._)("div",St,[(0,s._)("div",Et,[(0,s._)("div",Dt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.schedule,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"swiper-slide slide-con",key:e},[(0,s._)("iframe",{borderRadius:"5px",src:t.video,allow:"geolocation",frameborder:"0",allowfullscreen:"",class:"banner-img"},null,8,Ht),(0,s._)("div",It,[(0,s._)("p",Lt,(0,n.zw)(t.name),1),(0,s._)("p",jt,(0,n.zw)(t.title),1),(0,s._)("p",zt,(0,n.zw)(t.subTitle),1),(0,s._)("p",Ct,(0,n.zw)(t.date),1),Yt])])))),128))]),Nt],512)])])}var Wt=o(4870),Zt=o(5800);Zt.ZP.use([Zt.W_,Zt.pt]);var Ut={name:"HomeSlideVod",data(){return{schedule:[{video:"https://www.youtube.com/embed/ysTO1NYpnAc?rel=0&enablejsapi=1",name:"티키앤타카",title:"임형철-정성민-신보석이 말하는 뉴택틱 전술 활용법 l [피파의 모든 것 20화]",date:"2023. 7. 30"},{video:"https://www.youtube.com/embed/yzs0nAEZ1-M?rel=0&enablejsapi=1",name:"티키앤타카",title:"한준희가 직접 만든 낭만 아스날 전술 l [응답하라 낭만피파 4화]",date:"2023. 7. 26"},{video:"https://www.youtube.com/embed/TUjJRQY9ID8?rel=0&enablejsapi=1",name:"티키앤타카",title:"한준희가 직접 맞추는 피파4 아스날 낭만 스쿼드 l [응답하라 낭만피파 3화]",date:"2023. 7. 23"},{video:"https://www.youtube.com/embed/x5DLf4QyZ6E?rel=0&enablejsapi=1",name:"티키앤타카",title:"장지현이 직접 만든 낭만 첼시 전술 l [응답하라 낭만피파 2화]",date:"2023. 7. 19"},{video:"https://www.youtube.com/embed/HRk4lVGqJmU?rel=0&enablejsapi=1",name:"티키앤타카",title:"장지현이 직접 맞추는 피파4 첼시 낭만 스쿼드 l [응답하라 낭만피파 1화]",date:"2023. 7. 16"},{video:"https://www.youtube.com/embed/RRi-BcWfPpE?rel=0&enablejsapi=1",name:"티키앤타카",title:"한준희가 말하는 역대 최고의 조합들 l [피파의 모든 것 19화]",date:"2023. 7. 12"},{video:"https://www.youtube.com/embed/jIqfSoHX9cc?rel=0&enablejsapi=1",name:"티키앤타카",title:"한준희가 말하는 최고의 듀오와 트리오 l [피파의 모든 것 18화]",date:"2023. 7. 9"},{video:"https://www.youtube.com/embed/xaYUG6kN3D0?rel=0&enablejsapi=1",name:"티키앤타카",title:"임형철이 말하는 23토츠 공격수 티어리스트 l [피파의 모든 것 17화]",date:"2023. 7. 5"},{video:"https://www.youtube.com/embed/w5xwAalXSwQ?rel=0&enablejsapi=1",name:"티키앤타카",title:"임형철이 말하는 23토츠 티어리스트 (수비수, 미드필더) l [피파의 모든 것 16화]",date:"2023. 7. 2"}]}},mounted(){Y.p8.registerPlugin(J.i);const t=Y.p8.timeline({paused:!0});Y.p8.timeline({scrollTrigger:{trigger:".schedule-section",start:"top-=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{t.play()}}}),t.to(".schedule-section > .title-con > .company",{duration:1,bottom:0,opacity:1},"start"),t.to(".schedule-section > .title-con > .title",{duration:1,bottom:0,opacity:1},"start+=.3"),t.to(".schedule-section > .title-con > .subtitle",{duration:1,bottom:0,opacity:1},"start+=.5"),t.to(".schedule-section > .title-con > .subtitle-mobile",{duration:1,bottom:0,opacity:1},"start+=.5"),t.to(".Schedule-con",{duration:1.5,bottom:0,opacity:1},"start+=.7");let e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";let o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o),window.onYouTubeIframeAPIReady=this.onYouTubeIframeAPIReady},setup(){const t=(0,Wt.iH)(null),e=(0,Wt.iH)([]);(0,s.bv)((()=>{if(t.value){const o=new Zt.ZP(t.value,{direction:"horizontal",loop:!1,mousewheel:!1,speed:300,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}});o.on("slideChange",(()=>{const t=e.value[o.previousIndex];t&&t.stopVideo&&t.stopVideo()}))}}));const o=()=>{(0,s.Y3)((()=>{const t=document.querySelectorAll(".swiper-slide iframe");for(let o=0;o<t.length;o++)e.value[o]=new YT.Player(t[o])}))};return{bannerRef:t,onYouTubeIframeAPIReady:o,players:e}}};const qt=(0,k.Z)(Ut,[["render",Pt],["__scopeId","data-v-16abd672"]]);var Mt=qt;const Rt=t=>((0,s.dD)("data-v-c6fa7c9a"),t=t(),(0,s.Cn)(),t),At={class:"news-event-section"},Bt=Rt((()=>(0,s._)("div",{class:"title-con"},[(0,s._)("p",{class:"company"},"우리의 소식은"),(0,s._)("p",{class:"title"},"Our News")],-1))),Ot={class:"container"},Kt={class:"news"},Vt=Rt((()=>(0,s._)("hr",{class:"hr-margin"},null,-1))),Ft={class:"fix-contain"},Gt={class:"num"},Qt={class:"con"},Jt={class:"list-title"},Xt={class:"list-detail"},$t={class:"date"},te={class:"num"},ee={class:"con"},oe={class:"list-title"},se={class:"list-detail"},ie={class:"date"};function ne(t,e,o,i,a,l){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",At,[Bt,(0,s._)("div",Ot,[(0,s._)("div",Kt,[Vt,(0,s._)("div",Ft,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.news,((t,e)=>((0,s.wg)(),(0,s.j4)(c,{to:"news"+t.num,key:e,class:"list-con pc"},{default:(0,s.w5)((()=>[(0,s._)("span",Gt,(0,n.zw)(t.num),1),(0,s._)("div",Qt,[(0,s._)("span",Jt,(0,n.zw)(t.title),1),(0,s._)("span",Xt," - "+(0,n.zw)(t.subtitle),1)]),(0,s._)("span",$t,(0,n.zw)(t.date),1)])),_:2},1032,["to"])))),128))]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.news_mobile,((t,e)=>((0,s.wg)(),(0,s.j4)(c,{to:"news"+(e+1),key:e,class:"list-con mobile"},{default:(0,s.w5)((()=>[(0,s._)("span",te,(0,n.zw)(t.num),1),(0,s._)("div",ee,[(0,s._)("span",oe,(0,n.zw)(t.title),1),(0,s._)("span",se," - "+(0,n.zw)(t.subtitle),1)]),(0,s._)("span",ie,(0,n.zw)(t.date),1)])),_:2},1032,["to"])))),128))])])])}Zt.ZP.use([Zt.W_,Zt.pt]);var ae={name:"HomeNewsEvents",data(){return{bgicon:o(7659),news:[{num:1,title:"TNT Studio Grand Opening",subtitle:"2023년 TNT Studio가 그랜드 오픈을 하였습니다!",date:"2023.06.10"},{num:2,title:"TNT Studio 스튜디오 7월 완공",subtitle:"2023년 7월 완공되는 TNT Studio 스튜디오는 부산/경남 거점 촬영 스튜디오로 ",date:"2023.07.21"},{num:1,title:"TNT Studio Grand Opening",subtitle:"2023년 TNT Studio가 그랜드 오픈을 하였습니다!",date:"2023.06.10"}],news_mobile:[{num:1,title:"TNT Studio Grand Opening",subtitle:"2023년 TNT Studio가 그랜드 오픈을 하였습니다!",date:"2023.06.10"}],img:[{src:o(7190)},{src:o(4274)},{src:o(1466)}]}},methods:{},mounted(){Y.p8.registerPlugin(J.i);const t=Y.p8.timeline({paused:!0});t.to(".news-event-section > .title-con > .company",{duration:1,left:0,opacity:1},"start"),t.to(".news-event-section > .title-con > .title",{duration:1,left:0,opacity:1},"start+=.3"),t.to(".news-event-section > .title-con > .subtitle",{duration:1,left:0,opacity:1},"start+=.5"),t.to(".news-event-section > .container > .news > .fix-contain",{duration:1,right:0,opacity:1},"start+=.7"),Y.p8.timeline({scrollTrigger:{trigger:".news-event-section",start:"top-=140px bottom",end:"+=50%",scrub:!0,animation:t,onEnter:()=>{t.play()}}});const e=Y.p8.timeline({scrollTrigger:{trigger:".fix-contain",animation:t,onEnter:()=>{t.play()}},repeat:-1});e.to(".news-event-section > .container > .news > .fix-contain > .list-con",{duration:1.5,bottom:"70px"},"start+=1"),e.to(".news-event-section > .container > .news > .fix-contain > .list-con",{duration:1.5,bottom:"144px"},"start+=3.5")},setup(){const t=(0,Wt.iH)(null);return(0,s.bv)((()=>{t.value=new Zt.ZP(t.value,{direction:"horizontal",loop:!1,mousewheel:!1,speed:300,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}})})),{bannerRef:t}}};const le=(0,k.Z)(ae,[["render",ne],["__scopeId","data-v-c6fa7c9a"]]);var ce=le,re=o(5646),de={name:"HomeView",components:{Header:S,HomeBanner:W,HomeInfo:tt,HomeService:xt,HomeSlideVod:Mt,HomeNewsEvents:ce,FooterMain:re.Z}};const pe=(0,k.Z)(de,[["render",i]]);var ue=pe},5646:function(t,e,o){o.d(e,{Z:function(){return H}});var s=o(3396),i=o(7139);const n=t=>((0,s.dD)("data-v-4c368ce4"),t=t(),(0,s.Cn)(),t),a={class:"footer-section"},l={class:"footer-con"},c={class:"logo-con"},r=["src"],d={class:"contact-con"},p=n((()=>(0,s._)("div",{class:"location contact"},[(0,s._)("div",{class:"text-con"},[(0,s._)("p",{class:"text-title"},"Location"),(0,s._)("p",null,"부산광역시 사상구 백양대로684 4F")])],-1))),u={class:"email contact"},m={class:"text-con"},v=n((()=>(0,s._)("p",{class:"text-title"},"Email",-1))),g={class:"tel contact"},w={class:"text-con"},b=n((()=>(0,s._)("p",{class:"text-title"},"Tel",-1))),f={class:"icon-con"},h=["href"],_=["src"],x={class:"copyright-con"},y={class:"copyright"},k=["src"];function T(t,e,o,n,T,S){const E=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",a,[(0,s._)("div",l,[(0,s._)("div",c,[(0,s.Wm)(E,{to:"/"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:T.logo,alt:"logo",class:"logo"},null,8,r)])),_:1})]),(0,s._)("div",d,[p,(0,s._)("div",u,[(0,s._)("div",m,[v,(0,s._)("p",null,(0,i.zw)(T.text.email),1)])]),(0,s._)("div",g,[(0,s._)("div",w,[b,(0,s._)("p",null,(0,i.zw)(T.text.tel),1)])])]),(0,s._)("div",null,[(0,s._)("div",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(T.icon,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"icon-div",key:e},[(0,s._)("a",{href:t.href},[(0,s._)("img",{src:t.src,alt:"logo",class:"icon"},null,8,_)],8,h)])))),128))]),(0,s._)("div",x,[(0,s._)("div",y,[(0,s._)("img",{src:T.copyright},null,8,k),(0,s.Uk)(" 2023 TNT STUDIO All right reserved ")])])])])])}var S={data(){return{logo:o(6640),copyright:o(9908),text:{location:"부산광역시 사상구 백양대로684 5F",email:"gameinscokr@naver.com",tel:"051-301-5908"},icon:[{src:o(2811),href:"http://www.xn--ef5bu9n7vbido5j.com/"},{src:o(2265),href:"https://blog.naver.com/gameinscokr"},{src:o(1746),href:"https://www.youtube.com/@tikintaka"},{src:o(6367),href:"https://www.tiktok.com/@tikintaka"},{src:o(2300),href:"https://www.instagram.com/tikintaka_official/"}]}}},E=o(89);const D=(0,E.Z)(S,[["render",T],["__scopeId","data-v-4c368ce4"]]);var H=D},5427:function(t,e,o){o.d(e,{Z:function(){return w}});var s=o(3396),i=o(7139),n=o(9457),a=o(2127);const l=t=>((0,s.dD)("data-v-f34eaa6a"),t=t(),(0,s.Cn)(),t),c={class:"menu_section"},r={class:"menu-box"},d={class:"menu_con"},p=l((()=>(0,s._)("div",{style:{width:"100%","justify-content":"center","align-items":"center",display:"flex"}},null,-1)));function u(t,e,o,l,u,m){const v=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",c,[(0,s._)("div",r,[(0,s._)("div",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.menus,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"list_con"},[(0,s.Wm)(n.l,{value:e},{default:(0,s.w5)((()=>[(0,s.Wm)(a.V,{class:"menu-list"},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{to:t.value},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.title),1)])),_:2},1032,["to"])])),_:2},1024)])),_:2},1032,["value"])])))),128))]),p])])}var m={name:"MenuBar",components:{},data(){return{menus:[{title:"회사소개",value:"/intro"},{title:"서비스",value:"/studio"},{title:"프로그램",value:"/program"},{title:"회사소식",value:"/news"},{title:"문의/예약",value:"/ask"}],icon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:o(2183)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:o(9245)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official",src:o(9427)}]}}},v=o(89);const g=(0,v.Z)(m,[["render",u],["__scopeId","data-v-f34eaa6a"]]);var w=g},2300:function(t,e,o){t.exports=o.p+"static/img/Instalogo.09d254fd.svg"},2811:function(t,e,o){t.exports=o.p+"static/img/TKlogo.ea40915f.svg"},6367:function(t,e,o){t.exports=o.p+"static/img/TicToklogo.4688f6a0.svg"},1746:function(t,e,o){t.exports=o.p+"static/img/Youtubelogo.6f8479f0.svg"},9908:function(t,e,o){t.exports=o.p+"static/img/copyright.b6e91a96.svg"},2265:function(t,e,o){t.exports=o.p+"static/img/naverlogo.ccb5b0e4.svg"},6640:function(t,e,o){t.exports=o.p+"static/img/scrollLogo.f4f06b9b.svg"},9511:function(t,e,o){t.exports=o.p+"static/img/instaLogo.6a4302a2.svg"},3416:function(t,e,o){t.exports=o.p+"static/img/logo.0e7e25cd.svg"},9427:function(t,e,o){t.exports=o.p+"static/img/scrollInstaLogo.3748518a.svg"},2183:function(t,e,o){t.exports=o.p+"static/img/scrollTkLogo.d8412227.svg"},9245:function(t,e,o){t.exports=o.p+"static/img/scrollYoutubeLogo.578e2b61.svg"},5555:function(t,e,o){t.exports=o.p+"static/img/tkLogo.132e5321.svg"},9456:function(t,e,o){t.exports=o.p+"static/img/youtubeLogo.3b6aeb01.svg"},2408:function(t,e,o){t.exports=o.p+"static/img/infophone.e5cc9790.svg"},3511:function(t,e,o){t.exports=o.p+"static/img/infophone_afterText.c4e225dd.svg"},7771:function(t,e,o){t.exports=o.p+"static/img/infophone_firstText.98f5390f.svg"},4274:function(t,e,o){t.exports=o.p+"static/img/TSL.0dbbea63.svg"},7190:function(t,e,o){t.exports=o.p+"static/img/Top피파.86e95972.svg"},1466:function(t,e,o){t.exports=o.p+"static/img/피파의모든것.9814e645.svg"},846:function(t,e,o){t.exports=o.p+"static/img/bg_element2.3088bbe1.svg"},3114:function(t,e,o){t.exports=o.p+"static/img/bg_element3.79abb8c0.svg"},2106:function(t,e,o){t.exports=o.p+"static/img/test1.f5fc69f3.svg"},7233:function(t,e,o){t.exports=o.p+"static/img/test2.1632e7f5.svg"},7310:function(t,e,o){t.exports=o.p+"static/media/1920_2.7cb64338.mp4"}}]);
//# sourceMappingURL=236.86903dc7.js.map