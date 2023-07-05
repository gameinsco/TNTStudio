"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[738],{9738:function(e,t,s){s.r(t),s.d(t,{default:function(){return ft}});var o=s(3396);function n(e,t,s,n,i,a){const l=(0,o.up)("Header"),c=(0,o.up)("HomeBanner"),r=(0,o.up)("HomeInfo"),d=(0,o.up)("HomeService"),p=(0,o.up)("HomeSlideVod"),u=(0,o.up)("HomeNewsEvents"),m=(0,o.up)("FooterMain");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),(0,o.Wm)(c),(0,o.Wm)(r),(0,o.Wm)(d),(0,o.Wm)(p),(0,o.Wm)(u),(0,o.Wm)(m)],64)}var i=s(7139);const a=e=>((0,o.dD)("data-v-e985d9a4"),e=e(),(0,o.Cn)(),e),l={class:"nav"},c={class:"menu-list"},r={class:"logo-con"},d=["src"],p=["src"],u={class:"menu-li"},m={class:"menu-icon"},b=["href"],w=["src"],v=["href"],g=["src"],h=a((()=>(0,o._)("div",{class:"bar_con"},[(0,o._)("span",{class:"bar1 bar"}),(0,o._)("span",{class:"bar2 bar"}),(0,o._)("span",{class:"bar3 bar"})],-1))),f=[h];function _(e,t,s,n,a,h){const _=(0,o.up)("router-link"),y=(0,o.up)("Header"),x=(0,o.up)("Menu");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o._)("nav",l,[(0,o._)("ul",c,[(0,o._)("div",r,[e.isScrolledUp?((0,o.wg)(),(0,o.j4)(_,{key:0,to:"/",class:"logo"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:e.logo[0].mainLogo,alt:"logo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,d)])),_:1})):(0,o.kq)("",!0),e.isScrolledUp?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(_,{key:1,to:"/",class:"logo"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:e.logo[0].scrollLogo,alt:"scrolllogo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,p)])),_:1}))]),(0,o._)("div",u,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.menuList,((t,s)=>((0,o.wg)(),(0,o.iD)("li",{key:s,class:"list"},[(0,o.Wm)(_,{to:t.href,class:"list",style:(0,i.j5)(e.linkColorStyle)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(t.name),1)])),_:2},1032,["to","style"])])))),128))]),(0,o._)("div",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.menuIcon,((t,s)=>((0,o.wg)(),(0,o.iD)("li",{key:s},[e.isScrolledUp?((0,o.wg)(),(0,o.iD)("a",{key:0,href:t.href},[(0,o._)("img",{src:e.menuIcon[s].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,w)],8,b)):(0,o.kq)("",!0),e.isScrolledUp?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("a",{key:1,href:t.href},[(0,o._)("img",{src:e.scrollMenuIcon[s].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,g)],8,v))])))),128))]),(0,o._)("div",{class:"ham",ref:"hamElement",onClick:t[0]||(t[0]=(...e)=>h.stopScrolling&&h.stopScrolling(...e))},f,512)])])])),_:1}),e.isMenuState?((0,o.wg)(),(0,o.j4)(x,{key:0})):(0,o.kq)("",!0)],64)}var y=s(7331),x={name:"HeaderMain",components:{Menu:y.Z},data:()=>({isScrolledUp:!0,isMenuState:!1,scrollLock:!1,logo:[{mainLogo:s(3416),scrollLogo:s(7009)}],menuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:s(5555)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:s(9456)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official/",src:s(9511)}],menuList:[{name:"회사소개",href:"/intro"},{name:"서비스",href:"/studio"},{name:"프로그램",href:"/program"},{name:"회사소식",href:"/news"},{name:"문의하기",href:"/ask"}],scrollMenuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:s(2183)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:s(9245)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official",src:s(9427)}]}),mounted(){this.$nextTick((()=>{const e=this.$refs.hamElement;e.addEventListener("click",(function(){this.classList.toggle("active")}))}));const e=document.querySelector("Header"),t=document.querySelectorAll(".bar"),s=document.querySelectorAll(".list");window.addEventListener("scroll",(()=>{if(window.scrollY<=0){e.style.backgroundColor="rgba(0,0,0,0)",e.style.borderBottom="0px solid #e6e6e6";for(let e=0;e<s.length;e++)s[e].style.color="white";for(let e=0;e<t.length;e++)t[e].style.backgroundColor="white";this.isScrolledUp=!0,console.log(this.isScrolledUp)}else{e.style.borderBottom="1px solid #e6e6e6",e.style.backgroundColor="rgba(255,255,255,1)";for(let e=0;e<s.length;e++)s[e].style.color="black";for(let e=0;e<t.length;e++)t[e].style.backgroundColor="black";this.isScrolledUp=!1,console.log(this.isScrolledUp)}}))},beforeUnmount(){this.removeStopEvent()},methods:{stopScrolling(){this.scrollLock=!this.scrollLock,this.isMenuState=!this.isMenuState;const e=document.querySelectorAll(".bar");if(this.scrollLock){for(let t=0;t<e.length;t++)e[t].style.backgroundColor="black";window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1})}else{if(window.scrollY<=0)for(let t=0;t<e.length;t++)e[t].style.backgroundColor="white";else for(let t=0;t<e.length;t++)e[t].style.backgroundColor="black";this.removeStopEvent()}},stopEvent(e){e.preventDefault(),e.stopPropagation()},removeStopEvent(){window.removeEventListener("wheel",this.stopEvent,{passive:!1}),window.removeEventListener("touchmove",this.stopEvent,{passive:!1})}}},k=s(89);const T=(0,k.Z)(x,[["render",_],["__scopeId","data-v-e985d9a4"]]);var E=T;const S=e=>((0,o.dD)("data-v-426bbca0"),e=e(),(0,o.Cn)(),e),j={class:"banner-section"},H={class:"carousel"},D={class:"image-container",id:"imgs"},I={controls:!1,muted:"",autoplay:"",playsinline:"",loop:"",class:"banner-img"},C=["src"],L=S((()=>(0,o._)("div",{class:"filter"},null,-1)));function P(e,t,s,n,i,a){return(0,o.wg)(),(0,o.iD)("section",j,[(0,o._)("div",H,[(0,o._)("div",D,[(0,o._)("video",I,[(0,o._)("source",{src:i.mov,type:"video/mp4"},null,8,C)])]),L])])}var z=s(1980),N={name:"HomeBanner",data(){return{mov:s(7310)}},mounted(){let e=z.p8.timeline();e.to(".image-container",{height:"65vh",ease:.5,duration:1.3,delay:4.5})}};const Y=(0,k.Z)(N,[["render",P],["__scopeId","data-v-426bbca0"]]);var U=Y;const Z=e=>((0,o.dD)("data-v-4b7547b0"),e=e(),(0,o.Cn)(),e),A={class:"info-section"},M={class:"info-con"},W={class:"container"},V={class:"content"},q=(0,o.uE)('<span class="company" data-v-4b7547b0>우리의 회사는</span><p class="Title" data-v-4b7547b0>ABOUT US</p><div class="text-con" data-v-4b7547b0><span class="describe" data-v-4b7547b0><div class="desc-text" data-v-4b7547b0> 전문성을 두루 갖추어 시청자의 관점에서 보고 싶을 만한 콘텐츠를 제작하는 <span class="h3" data-v-4b7547b0> 콘텐츠 제작 스튜디오</span> 입니다. </div><br data-v-4b7547b0></span></div>',3),K={class:"btn-box"},B={class:"btn"},O=Z((()=>(0,o._)("span",{class:"btn-text"},"VIEW MORE",-1))),R={class:"desc-image"},F=["src"],J=["src"];function X(e,t,s,n,i,a){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",A,[(0,o._)("div",M,[(0,o._)("div",W,[(0,o._)("div",V,[q,(0,o._)("div",K,[(0,o._)("div",B,[(0,o.Wm)(l,{to:"/intro"},{default:(0,o.w5)((()=>[O])),_:1})])])]),(0,o._)("div",R,[(0,o._)("img",{src:i.infoPhone,alt:"phone",style:{width:"100%",height:"100%"}},null,8,F),(0,o._)("img",{src:i.infoPhoneSecondText,alt:"phone",class:"phone-text2"},null,8,J)])])])])}var Q=s(5073),G={name:"HomeInfo",data(){return{infoPhone:s(2408),infoPhoneFirstText:s(7771),infoPhoneSecondText:s(3511),phoneText_pos:"",phoneText_width:0}},mounted(){const e=window.innerWidth;console.log(e),e>=1300?(this.phoneText_pos="translate3d(-448px, 147px, 10px)",this.phoneText_width=450):e<1300&&e>=1080?(this.phoneText_pos="translate3d(-350px, 115px, 10px)",this.phoneText_width=350):e<1080&&e>=760?(this.phoneText_pos="translate3d(-300px, 98px, 10px)",this.phoneText_width=300):e<760&&e>=640?(this.phoneText_pos="translate3d(-250px, 80px, 10px)",this.phoneText_width=250):(this.phoneText_pos="translate3d(-23px, -10px, 10px)",this.phoneText_width=e-50),z.p8.registerPlugin(Q.i);const t=z.p8.timeline({paused:!0});z.p8.timeline({scrollTrigger:{trigger:".info-section",start:"top-=100px center",end:"+=50%",scrub:!0,onEnter:()=>{t.play()}}}),t.to(".info-con > .container > .content > .company",{duration:1,bottom:0,opacity:1},"start"),t.to(".info-con > .container > .content > .Title",{duration:1,bottom:0,opacity:1},"start+=.3"),t.to(".info-con > .container > .content > .text-con",{duration:1,bottom:0,opacity:1},"start+=.5"),t.to(".btn-box",{duration:1,bottom:0,opacity:1},"start+=.7"),t.to(".desc-image",{duration:1,right:0,opacity:1},"start+=.4"),t.to(".phone-text2",{duration:1,boxShadow:"0px 0px 7px 5px #EEEEF6",width:this.phoneText_width,transform:this.phoneText_pos},"start+=1.2")}};const $=(0,k.Z)(G,[["render",X],["__scopeId","data-v-4b7547b0"]]);var ee=$;const te=e=>((0,o.dD)("data-v-5c95e2b3"),e=e(),(0,o.Cn)(),e),se={class:"service-section"},oe={class:"title-con"},ne=["src"],ie=(0,o.uE)('<p class="company" data-v-5c95e2b3>우리가 제공하는 것은</p><p class="title" data-v-5c95e2b3>Our Service</p><div class="subTitle-con" data-v-5c95e2b3><p class="subTitle" data-v-5c95e2b3>크리에이터에게 보다 즐겁고 성장하기 쉬운 환경을</p><p class="subTitle" data-v-5c95e2b3> 제공하기 위해 저희는 최선을 다해 지원하고 있습니다. </p><p class="subTitle-mobile" data-v-5c95e2b3> 크리에이터에게 보다 즐겁고 성장하기 쉬운 환경을 제공하기 위해 저희는 최선을 다해 지원하고 있습니다. </p></div>',3),ae={class:"container"},le={class:"service-container"},ce={class:"img-con"},re=["src"],de={class:"text-con"},pe={class:"service-title"},ue={class:"subtitle"},me=te((()=>(0,o._)("br",null,null,-1))),be={class:"title"},we={class:"desc-con"},ve={class:"desc"},ge={class:"desc"},he={class:"desc"},fe=te((()=>(0,o._)("div",{class:"container-bg"},null,-1)));function _e(e,t,s,n,a,l){return(0,o.wg)(),(0,o.iD)("section",se,[(0,o._)("div",oe,[(0,o._)("img",{src:a.bgIcon[0].titleIcon,alt:"titleIcon",class:"title-icon"},null,8,ne),ie]),(0,o._)("div",ae,[(0,o._)("div",le,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.service,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:(0,i.C_)(e.class+" card")},[(0,o._)("div",ce,[(0,o._)("img",{src:e.img,alt:"영상제작img"},null,8,re)]),(0,o._)("div",de,[(0,o._)("div",pe,[(0,o._)("span",ue,(0,i.zw)(e.subtitle),1),me,(0,o._)("span",be,(0,i.zw)(e.title),1)]),(0,o._)("div",we,[(0,o._)("p",ve,(0,i.zw)(e.desc),1),(0,o._)("p",ge,(0,i.zw)(e.desc1),1),(0,o._)("p",he,(0,i.zw)(e.desc2),1)])])],2)))),128))]),fe])])}var ye={name:"HomeService",data(){return{bgIcon:[{titleIcon:s(7659),bg1:s(846),bg2:s(3114)}],service:[{class:"video left",img:s(7233),subtitle:"video production",title:"영상 제작",desc:"전문 영상제작팀이",desc1:"업체의 목적에 부합하는",desc2:"맞춤 영상 제작"},{class:"rental right",img:s(2106),subtitle:"space rental ",title:"촬영 공간/장비 대여",desc:"100평 규모의",desc1:"스튜디오와 전문 촬영",desc2:"장비 대여"},{class:"education left",img:s(2106),subtitle:"education",title:"크리에이터 교육",desc:"크리에이터",desc1:"전문 강사진의 교육",desc2:"자격증 발급"},{class:"advertise right",img:s(7233),subtitle:"advertisement",title:"광고 대행",desc:"확실한 타깃의",desc1:"채널을 이용해 브랜드와",desc2:"제품을 효과적으로 마케팅"}]}},mounted(){z.p8.registerPlugin(Q.i);const e=z.p8.timeline({paused:!0}),t=z.p8.timeline({paused:!0}),s=z.p8.timeline({paused:!0}),o=z.p8.timeline({paused:!0}),n=z.p8.timeline({paused:!0});z.p8.timeline({scrollTrigger:{trigger:".service-section",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{e.play()}}}),e.to(".service-section > .title-con > .company",{duration:1.5,bottom:0,opacity:1},"start"),e.to(".service-section > .title-con > .title",{duration:1.5,bottom:0,opacity:1},"start+=.3"),e.to(".service-section > .title-con > .subTitle-con",{duration:1.5,bottom:0,opacity:1},"start+=.5"),t.to(".video",{duration:1,left:0,opacity:1},"start"),s.to(".rental",{duration:1,right:0,opacity:1},"start"),o.to(".education",{duration:1,left:0,opacity:1},"start"),n.to(".advertise",{duration:1,right:0,opacity:1},"start"),z.p8.timeline({scrollTrigger:{trigger:".video",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{t.play()}}}),z.p8.timeline({scrollTrigger:{trigger:".rental",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{s.play()}}}),z.p8.timeline({scrollTrigger:{trigger:".education",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{o.play()}}}),z.p8.timeline({scrollTrigger:{trigger:".advertise",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{n.play()}}})}};const xe=(0,k.Z)(ye,[["render",_e],["__scopeId","data-v-5c95e2b3"]]);var ke=xe;const Te=e=>((0,o.dD)("data-v-0160377a"),e=e(),(0,o.Cn)(),e),Ee={class:"schedule-section"},Se=(0,o.uE)('<div class="title-con" data-v-0160377a><p class="company" data-v-0160377a>우리의 이야기는</p><p class="title" data-v-0160377a>Our Program</p><p class="subtitle" data-v-0160377a>저희는 자체적인 프로그램으로 다양한 영상을</p><p class="subtitle" data-v-0160377a> 지속적으로 꾸준히 업로드하고 콘텐츠를 제작하고 있습니다. </p><p class="subtitle-mobile" data-v-0160377a> 저희는 자체적인 프로그램으로 다양한 영상을 지속적으로 꾸준히 업로드하고 콘텐츠를 제작하고 있습니다. </p></div>',1),je={class:"Schedule-con"},He={class:"swiper",ref:"bannerRef"},De={class:"swiper-wrapper"},Ie=["src"],Ce={class:"TextCon"},Le={class:"company"},Pe={class:"textTitle"},ze={class:"textTitle"},Ne={class:"subTitle"},Ye=Te((()=>(0,o._)("a",{class:"viewMore",href:"https://www.youtube.com/@tikintaka/playlists"},[(0,o._)("strong",null,"바로가기")],-1))),Ue=Te((()=>(0,o._)("div",{class:"swiper-btnBox"},[(0,o._)("div",{class:"swiper-button-prev swiper-btn",style:{color:"black","background-color":"#f5f5f5",position:"relative",width:"100%",height:"100%","border-radius":"10px 0px 0px 10px"}}),(0,o._)("div",{class:"swiper-button-next swiper-btn",style:{color:"black","background-color":"#f5f5f5",position:"relative",width:"100%",height:"100%"}})],-1)));function Ze(e,t,s,n,a,l){return(0,o.wg)(),(0,o.iD)("section",Ee,[Se,(0,o._)("div",je,[(0,o._)("div",He,[(0,o._)("div",De,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.schedule,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"swiper-slide slide-con",key:t},[(0,o._)("iframe",{borderRadius:"5px",src:e.video,allow:"geolocation",frameborder:"0",allowfullscreen:"",class:"banner-img"},null,8,Ie),(0,o._)("div",Ce,[(0,o._)("p",Le,(0,i.zw)(e.name),1),(0,o._)("p",Pe,(0,i.zw)(e.title),1),(0,o._)("p",ze,(0,i.zw)(e.subTitle),1),(0,o._)("p",Ne,(0,i.zw)(e.date),1),Ye])])))),128))]),Ue],512)])])}var Ae=s(4870),Me=s(5800);Me.ZP.use([Me.W_,Me.pt]);var We={name:"HomeSlideVod",data(){return{videoUrl:["https://www.youtube.com/embed/dVyLFjjs3J4?rel=0&enablejsapi=1","https://www.youtube.com/embed/AjBQvuHZ86o?rel=0&enablejsapi=1","https://www.youtube.com/embed/-TZdot4JA7w?rel=0&enablejsapi=1","https://www.youtube.com/embed/E16qlkAKwtY?rel=0&enablejsapi=1","https://www.youtube.com/embed/1gED0_NSmXU?rel=0&enablejsapi=1","https://www.youtube.com/embed/xJAKV0DVlWE?rel=0&enablejsapi=1","https://www.youtube.com/embed/auUgzMmrqP8?rel=0&enablejsapi=1","https://www.youtube.com/embed/wh-DCVr1wOY?rel=0&enablejsapi=1","https://www.youtube.com/embed/NIRhxNNKXdE?rel=0&enablejsapi=1","https://www.youtube.com/embed/Tl_oXL9YQEM?rel=0&enablejsapi=1"],schedule:[{video:"https://www.youtube.com/embed/dVyLFjjs3J4?rel=0&enablejsapi=1",name:"티키앤타카",title:"대한민국 최고의 프로게이머를 찾아보는 시간",date:"2023.06.21",num:0},{video:"https://www.youtube.com/embed/AjBQvuHZ86o?rel=0&enablejsapi=1",name:"티키앤타카",title:"박찬우 임형철이 말하는 인테르 vs 맨시티 우승팀 l [피파의 모든것 9화]",date:"2023. 6. 08",num:1},{video:"https://www.youtube.com/embed/-TZdot4JA7w?rel=0&enablejsapi=1",name:"티키앤타카",title:"한준희가 말하는 아이콘 모먼트 최고의 선수 l [피파의 모든것 8화]",date:"2023. 6. 06",num:2},{video:"https://www.youtube.com/embed/E16qlkAKwtY?rel=0&enablejsapi=1",name:"티키앤타카",title:"한준희가 말하는 아이콘 모먼트 양발선수 l [피파의 모든것 7화]",date:"2023. 6. 04",num:3},{video:"https://www.youtube.com/embed/1gED0_NSmXU?rel=0&enablejsapi=1",name:"티키앤타카",title:"한준희가 말하는 아이콘 모먼트 평가 l [피파의 모든것 6화]",date:"2023. 6. 01",num:4},{video:"https://www.youtube.com/embed/xJAKV0DVlWE?rel=0&enablejsapi=1",name:"티키앤타카",title:"한준희가 말하는 출시되어야하는 아이콘  l [피파의 모든것 5화]",date:"2023. 5. 28",num:5},{video:"https://www.youtube.com/embed/wh-DCVr1wOY?rel=0&enablejsapi=1",name:"티키앤타카",title:"한준희가 말하는 아이콘 재평가 Feat. 한국 선수 양발에 대한 생각 l [피파의 모든것 4화]",date:"2023. 5. 27",num:6},{video:"https://www.youtube.com/embed/NIRhxNNKXdE?rel=0&enablejsapi=1",name:"티키앤타카",title:"5연속 공식경기 1위의 불가능한 도전 l [TOP피파 1화]",date:"2023. 5. 21",num:7},{video:"https://www.youtube.com/embed/Tl_oXL9YQEM?rel=0&enablejsapi=1",name:"티키앤타카",title:"연속 공식경기 1위의 불가능한 도전 l [TOP피파 1화]",date:"2023. 5. 14",num:8}]}},mounted(){z.p8.registerPlugin(Q.i);const e=z.p8.timeline({paused:!0});z.p8.timeline({scrollTrigger:{trigger:".schedule-section",start:"top-=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{e.play()}}}),e.to(".schedule-section > .title-con > .company",{duration:1,bottom:0,opacity:1},"start"),e.to(".schedule-section > .title-con > .title",{duration:1,bottom:0,opacity:1},"start+=.3"),e.to(".schedule-section > .title-con > .subtitle",{duration:1,bottom:0,opacity:1},"start+=.5"),e.to(".schedule-section > .title-con > .subtitle-mobile",{duration:1,bottom:0,opacity:1},"start+=.5"),e.to(".Schedule-con",{duration:1.5,bottom:0,opacity:1},"start+=.7");let t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";let s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s),window.onYouTubeIframeAPIReady=this.onYouTubeIframeAPIReady},setup(){const e=(0,Ae.iH)(null),t=(0,Ae.iH)([]);(0,o.bv)((()=>{if(e.value){const s=new Me.ZP(e.value,{direction:"horizontal",loop:!1,mousewheel:!1,speed:300,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}});s.on("slideChange",(()=>{const e=t.value[s.previousIndex];e&&e.stopVideo&&e.stopVideo()}))}}));const s=()=>{(0,o.Y3)((()=>{const e=document.querySelectorAll(".swiper-slide iframe");for(let s=0;s<e.length;s++)t.value[s]=new YT.Player(e[s])}))};return{bannerRef:e,onYouTubeIframeAPIReady:s,players:t}}};const Ve=(0,k.Z)(We,[["render",Ze],["__scopeId","data-v-0160377a"]]);var qe=Ve;const Ke=e=>((0,o.dD)("data-v-2feb971f"),e=e(),(0,o.Cn)(),e),Be={class:"news-event-section"},Oe={class:"title-con"},Re={class:"bgIcon"},Fe=["src"],Je=Ke((()=>(0,o._)("p",{class:"company"},"우리의 소식은",-1))),Xe=Ke((()=>(0,o._)("p",{class:"title"},"Our News",-1))),Qe=Ke((()=>(0,o._)("p",{class:"subtitle"},"TNT Studio의 소식을 누구보다",-1))),Ge=Ke((()=>(0,o._)("p",{class:"subtitle"},"빨리 접할 수 있도록 최선을 다 합니다",-1))),$e={class:"container"},et={class:"news"},tt=Ke((()=>(0,o._)("hr",{class:"hr-margin"},null,-1))),st={class:"num"},ot={class:"con"},nt={class:"list-title"},it={class:"list-detail"},at={class:"date"},lt={class:"num"},ct={class:"con"},rt={class:"list-title"},dt={class:"list-detail"},pt={class:"date"};function ut(e,t,s,n,a,l){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",Be,[(0,o._)("div",Oe,[(0,o._)("div",Re,[(0,o._)("img",{src:a.bgicon,alt:"icon"},null,8,Fe)]),Je,Xe,Qe,Ge]),(0,o._)("div",$e,[(0,o._)("div",et,[tt,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.news,((e,t)=>((0,o.wg)(),(0,o.j4)(c,{to:"news"+(t+1),key:t,class:"list-con pc"},{default:(0,o.w5)((()=>[(0,o._)("span",st,(0,i.zw)(e.num),1),(0,o._)("div",ot,[(0,o._)("span",nt,(0,i.zw)(e.title),1),(0,o._)("span",it," - "+(0,i.zw)(e.subtitle),1)]),(0,o._)("span",at,(0,i.zw)(e.date),1)])),_:2},1032,["to"])))),128)),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.news_mobile,((e,t)=>((0,o.wg)(),(0,o.j4)(c,{to:"news"+(t+1),key:t,class:"list-con mobile"},{default:(0,o.w5)((()=>[(0,o._)("span",lt,(0,i.zw)(e.num),1),(0,o._)("div",ct,[(0,o._)("span",rt,(0,i.zw)(e.title),1),(0,o._)("span",dt," - "+(0,i.zw)(e.subtitle),1)]),(0,o._)("span",pt,(0,i.zw)(e.date),1)])),_:2},1032,["to"])))),128))])])])}Me.ZP.use([Me.W_,Me.pt]);var mt={name:"HomeNewsEvents",data(){return{bgicon:s(7659),news:[{num:1,title:"TNT Studio Grand Opening",subtitle:"2023년 TNT Studio가 그랜드 오픈을 하였습니다!",date:"2023.06.10"}],news_mobile:[{num:1,title:"TNT Studio Grand Opening",subtitle:"2023년 TNT Studio가 그랜드 오픈을 하였습니다!",date:"2023.06.10"}],img:[{src:s(7190)},{src:s(4274)},{src:s(1466)}]}},methods:{},mounted(){z.p8.registerPlugin(Q.i);const e=z.p8.timeline({paused:!0});e.to(".news-event-section > .title-con > .company",{duration:1,left:0,opacity:1},"start"),e.to(".news-event-section > .title-con > .title",{duration:1,left:0,opacity:1},"start+=.3"),e.to(".news-event-section > .title-con > .subtitle",{duration:1,left:0,opacity:1},"start+=.5"),e.to(".news-event-section > .container > .news > .list-con",{duration:1,right:0,opacity:1},"start+=.7"),z.p8.timeline({scrollTrigger:{trigger:".news-event-section",start:"top-=100px bottom",end:"+=50%",scrub:!0,animation:e,onEnter:()=>{e.play()}}})},setup(){const e=(0,Ae.iH)(null);return(0,o.bv)((()=>{e.value=new Me.ZP(e.value,{direction:"horizontal",loop:!1,mousewheel:!1,speed:300,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}})})),{bannerRef:e}}};const bt=(0,k.Z)(mt,[["render",ut],["__scopeId","data-v-2feb971f"]]);var wt=bt,vt=s(6317),gt={name:"HomeView",components:{Header:E,HomeBanner:U,HomeInfo:ee,HomeService:ke,HomeSlideVod:qe,HomeNewsEvents:wt,FooterMain:vt.Z}};const ht=(0,k.Z)(gt,[["render",n]]);var ft=ht},2408:function(e,t,s){e.exports=s.p+"static/img/infophone.e5cc9790.svg"},3511:function(e,t,s){e.exports=s.p+"static/img/infophone_afterText.a3645ff8.svg"},7771:function(e,t,s){e.exports=s.p+"static/img/infophone_firstText.98f5390f.svg"},4274:function(e,t,s){e.exports=s.p+"static/img/TSL.0dbbea63.svg"},7190:function(e,t,s){e.exports=s.p+"static/img/Top피파.86e95972.svg"},1466:function(e,t,s){e.exports=s.p+"static/img/피파의모든것.9814e645.svg"},7659:function(e,t,s){e.exports=s.p+"static/img/bg_element1.8006df8b.svg"},846:function(e,t,s){e.exports=s.p+"static/img/bg_element2.3088bbe1.svg"},3114:function(e,t,s){e.exports=s.p+"static/img/bg_element3.79abb8c0.svg"},2106:function(e,t,s){e.exports=s.p+"static/img/test1.f5fc69f3.svg"},7233:function(e,t,s){e.exports=s.p+"static/img/test2.1632e7f5.svg"},7310:function(e,t,s){e.exports=s.p+"static/media/1920_2.7cb64338.mp4"}}]);
//# sourceMappingURL=738.0ffc1c02.js.map