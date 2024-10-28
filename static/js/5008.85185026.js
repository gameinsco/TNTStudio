"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[5008],{85008:function(t,e,o){o.r(e),o.d(e,{default:function(){return ve}});var s=o(73396);function i(t,e,o,i,n,a){const l=(0,s.up)("Header"),c=(0,s.up)("HomeBanner"),r=(0,s.up)("HomeInfo"),d=(0,s.up)("HomeService"),p=(0,s.up)("HomeSlideVod"),u=(0,s.up)("HomeNewsEvents"),m=(0,s.up)("FooterMain");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l),(0,s.Wm)(c),(0,s.Wm)(r),(0,s.Wm)(d),(0,s.Wm)(p),(0,s.Wm)(u),(0,s.Wm)(m)],64)}var n=o(87139);const a=t=>((0,s.dD)("data-v-4eb7362b"),t=t(),(0,s.Cn)(),t),l={class:"nav"},c={class:"menu-list"},r={class:"logo-con"},d=["src"],p=["src"],u={class:"menu-li"},m={class:"menu-icon"},v=["href"],g=["src"],b=["href"],w=["src"],f=a((()=>(0,s._)("div",{class:"bar_con"},[(0,s._)("span",{class:"bar1 bar"}),(0,s._)("span",{class:"bar2 bar"}),(0,s._)("span",{class:"bar3 bar"})],-1))),h=[f];function _(t,e,o,i,a,f){const _=(0,s.up)("router-link"),x=(0,s.up)("Header"),y=(0,s.up)("Menu");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(x,null,{default:(0,s.w5)((()=>[(0,s._)("nav",l,[(0,s._)("ul",c,[(0,s._)("div",r,[t.isScrolledUp?((0,s.wg)(),(0,s.j4)(_,{key:0,to:"/",class:"logo"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:t.logo[0].mainLogo,alt:"logo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,d)])),_:1})):(0,s.kq)("",!0),t.isScrolledUp?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(_,{key:1,to:"/",class:"logo"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:t.logo[0].scrollLogo,alt:"scrolllogo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,p)])),_:1}))]),(0,s._)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.menuList,((e,o)=>((0,s.wg)(),(0,s.iD)("li",{key:o,class:"list"},[(0,s.Wm)(_,{to:e.href,class:"list",style:(0,n.j5)(t.linkColorStyle)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(e.name),1)])),_:2},1032,["to","style"])])))),128))]),(0,s._)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.menuIcon,((e,o)=>((0,s.wg)(),(0,s.iD)("li",{key:o},[t.isScrolledUp?((0,s.wg)(),(0,s.iD)("a",{key:0,href:e.href},[(0,s._)("img",{src:t.menuIcon[o].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,g)],8,v)):(0,s.kq)("",!0),t.isScrolledUp?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("a",{key:1,href:e.href},[(0,s._)("img",{src:t.scrollMenuIcon[o].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,w)],8,b))])))),128))]),(0,s._)("div",{class:"ham",ref:"hamElement",onClick:e[0]||(e[0]=(...t)=>f.stopScrolling&&f.stopScrolling(...t))},h,512)])])])),_:1}),t.isMenuState?((0,s.wg)(),(0,s.j4)(y,{key:0})):(0,s.kq)("",!0)],64)}var x=o(25427),y={name:"HeaderMain",components:{Menu:x.Z},data:()=>({isScrolledUp:!0,isMenuState:!1,scrollLock:!1,logo:[{mainLogo:o(13416),scrollLogo:o(17009)}],menuIcon:[{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:o(79456)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official/",src:o(89511)}],menuList:[{name:"회사소개",href:"/intro"},{name:"서비스",href:"/studio"},{name:"프로그램",href:"/program"},{name:"회사소식",href:"/news"},{name:"문의/예약",href:"/ask"}],scrollMenuIcon:[{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:o(69245)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official",src:o(79427)}]}),mounted(){this.$nextTick((()=>{const t=this.$refs.hamElement;t.addEventListener("click",(function(){this.classList.toggle("active")}))}));const t=document.querySelector("Header"),e=document.querySelectorAll(".bar"),o=document.querySelectorAll(".list");window.addEventListener("scroll",(()=>{if(window.scrollY<=0){t.style.backgroundColor="rgba(0,0,0,0)",t.style.borderBottom="0px solid #e6e6e6";for(let t=0;t<o.length;t++)o[t].style.color="white";for(let t=0;t<e.length;t++)e[t].style.backgroundColor="white";this.isScrolledUp=!0,console.log(this.isScrolledUp)}else{t.style.borderBottom="1px solid #e6e6e6",t.style.backgroundColor="rgba(255,255,255,1)";for(let t=0;t<o.length;t++)o[t].style.color="black";for(let t=0;t<e.length;t++)e[t].style.backgroundColor="black";this.isScrolledUp=!1,console.log(this.isScrolledUp)}}))},beforeUnmount(){this.removeStopEvent()},methods:{stopScrolling(){this.scrollLock=!this.scrollLock,this.isMenuState=!this.isMenuState;const t=document.querySelectorAll(".bar");if(this.scrollLock){for(let e=0;e<t.length;e++)t[e].style.backgroundColor="black";window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1})}else{if(window.scrollY<=0)for(let e=0;e<t.length;e++)t[e].style.backgroundColor="white";else for(let e=0;e<t.length;e++)t[e].style.backgroundColor="black";this.removeStopEvent()}},stopEvent(t){t.preventDefault(),t.stopPropagation()},removeStopEvent(){window.removeEventListener("wheel",this.stopEvent,{passive:!1}),window.removeEventListener("touchmove",this.stopEvent,{passive:!1})}}},k=o(40089);const T=(0,k.Z)(y,[["render",_],["__scopeId","data-v-4eb7362b"]]);var S=T;const E=t=>((0,s.dD)("data-v-426bbca0"),t=t(),(0,s.Cn)(),t),D={class:"banner-section"},H={class:"carousel"},L={class:"image-container",id:"imgs"},I={controls:!1,muted:"",autoplay:"",playsinline:"",loop:"",class:"banner-img"},C=["src"],z=E((()=>(0,s._)("div",{class:"filter"},null,-1)));function j(t,e,o,i,n,a){return(0,s.wg)(),(0,s.iD)("section",D,[(0,s._)("div",H,[(0,s._)("div",L,[(0,s._)("video",I,[(0,s._)("source",{src:n.mov,type:"video/mp4"},null,8,C)])]),z])])}var Y=o(1980),P={name:"HomeBanner",data(){return{mov:o(67310)}},mounted(){let t=Y.p8.timeline();t.to(".image-container",{height:"65vh",ease:.5,duration:1.3,delay:4.5})}};const Z=(0,k.Z)(P,[["render",j],["__scopeId","data-v-426bbca0"]]);var N=Z;const W=t=>((0,s.dD)("data-v-5614547e"),t=t(),(0,s.Cn)(),t),q={class:"info-section"},U={class:"info-con"},M={class:"container"},F={class:"content"},B=(0,s.uE)('<span class="company" data-v-5614547e>TNT Studio는</span><p class="Title" data-v-5614547e>Our Studio</p><div class="text-con" data-v-5614547e><span class="describe" data-v-5614547e><div class="desc-text" data-v-5614547e> 전문성을 두루 갖추어 시청자의 관점에서 보고 싶을 만한 콘텐츠를 제작하는 <span class="h3" data-v-5614547e> 콘텐츠 제작 스튜디오</span> 입니다. </div><br data-v-5614547e></span></div>',3),A={class:"btn-box"},O={class:"btn"},R=W((()=>(0,s._)("span",{class:"btn-text"},"VIEW MORE",-1))),V={class:"desc-image"},K=["src"],G=["src"];function X(t,e,o,i,n,a){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",q,[(0,s._)("div",U,[(0,s._)("div",M,[(0,s._)("div",F,[B,(0,s._)("div",A,[(0,s._)("div",O,[(0,s.Wm)(l,{to:"/intro"},{default:(0,s.w5)((()=>[R])),_:1})])])]),(0,s._)("div",V,[(0,s._)("img",{src:n.infoPhone,alt:"phone",style:{width:"100%",height:"100%"}},null,8,K),(0,s._)("img",{src:n.infoPhoneSecondText,alt:"phone",class:"phone-text2"},null,8,G)])])])])}var $=o(15073),Q={name:"HomeInfo",data(){return{infoPhone:o(82408),infoPhoneFirstText:o(77771),infoPhoneSecondText:o(53511),phoneText_pos:"",phoneText_width:0}},mounted(){const t=window.innerWidth;console.log(t),t>=1300?(this.phoneText_pos="translate3d(-448px, 147px, 10px)",this.phoneText_width=450):t<1300&&t>=1080?(this.phoneText_pos="translate3d(-350px, 115px, 10px)",this.phoneText_width=350):t<1080&&t>=760?(this.phoneText_pos="translate3d(-300px, 98px, 10px)",this.phoneText_width=300):t<760&&t>=640?(this.phoneText_pos="translate3d(-250px, 80px, 10px)",this.phoneText_width=250):(this.phoneText_pos="translate3d(-23px, -10px, 10px)",this.phoneText_width=t-50),Y.p8.registerPlugin($.i);const e=Y.p8.timeline({paused:!0});Y.p8.timeline({scrollTrigger:{trigger:".info-section",start:"top-=100px center",end:"+=50%",scrub:!0,onEnter:()=>{e.play()}}}),e.to(".info-con > .container > .content > .company",{duration:1,bottom:0,opacity:1},"start"),e.to(".info-con > .container > .content > .Title",{duration:1,bottom:0,opacity:1},"start+=.3"),e.to(".info-con > .container > .content > .text-con",{duration:1,bottom:0,opacity:1},"start+=.5"),e.to(".btn-box",{duration:1,bottom:0,opacity:1},"start+=.7"),e.to(".desc-image",{duration:1,right:0,opacity:1},"start+=.4"),e.to(".phone-text2",{duration:1,boxShadow:"0px 0px 7px 5px #EEEEF6",width:this.phoneText_width,transform:this.phoneText_pos},"start+=1.2")}};const J=(0,k.Z)(Q,[["render",X],["__scopeId","data-v-5614547e"]]);var tt=J;const et=t=>((0,s.dD)("data-v-7a5fae5d"),t=t(),(0,s.Cn)(),t),ot={class:"service-section"},st=(0,s.uE)('<div class="title-con" data-v-7a5fae5d><p class="company" data-v-7a5fae5d>우리가 제공하는 것은</p><p class="title" data-v-7a5fae5d>Our Service</p><div class="subTitle-con" data-v-7a5fae5d><p class="subTitle" data-v-7a5fae5d>크리에이터에게 보다 즐겁고 성장하기 쉬운 환경을</p><p class="subTitle" data-v-7a5fae5d>제공하기 위한 아래의 서비스 입니다.</p><p class="subTitle-mobile" data-v-7a5fae5d> 크리에이터에게 보다 즐겁고 성장하기 쉬운 환경을 제공하기 위한 아래의 서비스 입니다. </p></div></div>',1),it={class:"container"},nt={class:"service-container"},at={class:"img-con"},lt=["src"],ct={class:"text-con"},rt={class:"service-title"},dt={class:"subtitle"},pt=et((()=>(0,s._)("br",null,null,-1))),ut={class:"title"},mt={class:"desc-con"},vt={class:"desc"},gt={class:"desc"},bt={class:"desc"},wt=et((()=>(0,s._)("div",{class:"container-bg"},null,-1)));function ft(t,e,o,i,a,l){return(0,s.wg)(),(0,s.iD)("section",ot,[st,(0,s._)("div",it,[(0,s._)("div",nt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.service,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:(0,n.C_)(t.class+" card")},[(0,s._)("div",at,[(0,s._)("img",{src:t.img,alt:"영상제작img"},null,8,lt)]),(0,s._)("div",ct,[(0,s._)("div",rt,[(0,s._)("span",dt,(0,n.zw)(t.subtitle),1),pt,(0,s._)("span",ut,(0,n.zw)(t.title),1)]),(0,s._)("div",mt,[(0,s._)("p",vt,(0,n.zw)(t.desc),1),(0,s._)("p",gt,(0,n.zw)(t.desc1),1),(0,s._)("p",bt,(0,n.zw)(t.desc2),1)])])],2)))),128))]),wt])])}var ht={name:"HomeService",data(){return{bgIcon:[{titleIcon:o(97659),bg1:o(60846),bg2:o(43114)}],service:[{class:"video left",img:o(83061),subtitle:"video production",title:"영상 제작",desc:"전문 영상제작팀이",desc1:"업체의 목적에 부합하는",desc2:"맞춤 영상 제작"},{class:"rental right",img:o(25140),subtitle:"space rental ",title:"촬영 공간/장비 대여",desc:"100평 규모의 스튜디오와",desc1:"전문 촬영 장비",desc2:"대여"},{class:"education left",img:o(86863),subtitle:"education",title:"크리에이터 교육",desc:"크리에이터 전문",desc1:"강사진의 교육",desc2:"자격증 발급"},{class:"advertise right",img:o(29504),subtitle:"advertisement",title:"광고 대행",desc:"확실한 타깃의 채널을 이용해",desc1:"브랜드와 제품을",desc2:"효과적으로 마케팅"}]}},mounted(){Y.p8.registerPlugin($.i);const t=Y.p8.timeline({paused:!0}),e=Y.p8.timeline({paused:!0}),o=Y.p8.timeline({paused:!0}),s=Y.p8.timeline({paused:!0}),i=Y.p8.timeline({paused:!0});Y.p8.timeline({scrollTrigger:{trigger:".service-section",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{t.play()}}}),t.to(".service-section > .title-con > .company",{duration:1.5,bottom:0,opacity:1},"start"),t.to(".service-section > .title-con > .title",{duration:1.5,bottom:0,opacity:1},"start+=.3"),t.to(".service-section > .title-con > .subTitle-con",{duration:1.5,bottom:0,opacity:1},"start+=.5"),e.to(".video",{duration:1,left:0,opacity:1},"start"),o.to(".rental",{duration:1,right:0,opacity:1},"start"),s.to(".education",{duration:1,left:0,opacity:1},"start"),i.to(".advertise",{duration:1,right:0,opacity:1},"start"),Y.p8.timeline({scrollTrigger:{trigger:".video",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{e.play()}}}),Y.p8.timeline({scrollTrigger:{trigger:".rental",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{o.play()}}}),Y.p8.timeline({scrollTrigger:{trigger:".education",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{s.play()}}}),Y.p8.timeline({scrollTrigger:{trigger:".advertise",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{i.play()}}})}};const _t=(0,k.Z)(ht,[["render",ft],["__scopeId","data-v-7a5fae5d"]]);var xt=_t;const yt=t=>((0,s.dD)("data-v-4960bd39"),t=t(),(0,s.Cn)(),t),kt={class:"schedule-section"},Tt=(0,s.uE)('<div class="title-con" data-v-4960bd39><p class="company" data-v-4960bd39>우리의 콘텐츠는</p><p class="title" data-v-4960bd39>Our Content</p><p class="subtitle" data-v-4960bd39>다양한 콘텐츠를 제작하고 있습니다.</p><p class="subtitle" data-v-4960bd39>&quot;피파에 실축을 더하다&quot;</p><p class="subtitle-mobile" data-v-4960bd39> 다양한 콘텐츠를 제작하고 있습니다<br data-v-4960bd39> &quot;피파에 실축을 더하다&quot; </p></div>',1),St={class:"Schedule-con"},Et={class:"swiper",ref:"bannerRef"},Dt={class:"swiper-wrapper"},Ht=["src"],Lt={class:"TextCon"},It={class:"company"},Ct={class:"textTitle"},zt={class:"textTitle"},jt={class:"subTitle"},Yt=yt((()=>(0,s._)("a",{class:"viewMore",href:"https://www.youtube.com/@tikintaka/playlists"},[(0,s._)("strong",null,"바로가기")],-1))),Pt=yt((()=>(0,s._)("div",{class:"swiper-btnBox"},[(0,s._)("div",{class:"swiper-button-prev swiper-btn",style:{color:"black","background-color":"#f5f5f5",position:"relative",width:"100%",height:"100%","border-radius":"10px 0px 0px 10px"}}),(0,s._)("div",{class:"swiper-button-next swiper-btn",style:{color:"black","background-color":"#f5f5f5",position:"relative",width:"100%",height:"100%"}})],-1)));function Zt(t,e,o,i,a,l){return(0,s.wg)(),(0,s.iD)("section",kt,[Tt,(0,s._)("div",St,[(0,s._)("div",Et,[(0,s._)("div",Dt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.schedule,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"swiper-slide slide-con",key:e},[(0,s._)("iframe",{borderRadius:"5px",src:t.video,allow:"geolocation",frameborder:"0",allowfullscreen:"",class:"banner-img"},null,8,Ht),(0,s._)("div",Lt,[(0,s._)("p",It,(0,n.zw)(t.name),1),(0,s._)("p",Ct,(0,n.zw)(t.title),1),(0,s._)("p",zt,(0,n.zw)(t.subTitle),1),(0,s._)("p",jt,(0,n.zw)(t.date),1),Yt])])))),128))]),Pt],512)])])}var Nt=o(44870),Wt=o(15800);Wt.ZP.use([Wt.W_,Wt.pt]);var qt={name:"HomeSlideVod",data(){return{schedule:[{video:"https://www.youtube.com/embed/n_Gsmn4NdwQ?rel=0&enablejsapi=1",name:"티키앤타카",title:"임형철이 직접 만든 낭만 리버풀 전술 l [응답하라 낭만피파 15화]",date:"2023. 11. 12"},{video:"https://www.youtube.com/embed/1SNZse_XAdY?rel=0&enablejsapi=1",name:"티키앤타카",title:"최강자들의 엘클라시코, 곽준혁 vs 박지민 | 티키앤타카 FC온라인 연승전 2ROUND",date:"2023. 11. 02"},{video:"https://www.youtube.com/embed/TjUGsMw-Vkg?rel=0&enablejsapi=1",name:"티키앤타카",title:"임형철이 직접 맞추는 FC온라인 리버풀 낭만 스쿼드 l [응답하라 낭만피파 13화]",date:"2023. 10. 29"},{video:"https://www.youtube.com/embed/P0Pb59xswv0?rel=0&enablejsapi=1",name:"티키앤타카",title:"[다시보기] 한준희x곽준혁x신보석 아이콘 모먼트 최종 출시 D-1 능력치 예상하기",date:"2023. 10. 26"},{video:"https://www.youtube.com/embed/xtBq0LXuozc?rel=0&enablejsapi=1",name:"티키앤타카",title:"한준희가 직접 만든 낭만 레알 마드리드 전술 l [응답하라 낭만피파 12화]",date:"2023. 10. 22"},{video:"https://www.youtube.com/embed/08ndLoXvBZo?rel=0&enablejsapi=1",name:"티키앤타카",title:"한준희가 직접 맞추는 FC온라인 레알 마드리드 낭만 스쿼드 l [응답하라 낭만피파 11화]",date:"2023. 10. 15"},{video:"https://www.youtube.com/embed/Tby95ITG3O0?rel=0&enablejsapi=1",name:"티키앤타카",title:"송영주가 직접 만든 낭만 바르셀로나 전술 l [응답하라 낭만피파 10화]",date:"2023. 9. 23"},{video:"https://www.youtube.com/embed/FODUbZegNug?rel=0&enablejsapi=1",name:"티키앤타카",title:"송영주가 직접 맞추는 피파4 바르셀로나 낭만 스쿼드 l [응답하라 낭만피파 9화]",date:"2023. 9. 17"},{video:"https://www.youtube.com/embed/AOwqgHtoqF4?rel=0&enablejsapi=1",name:"티키앤타카",title:"장지현이 말하는 CC시즌 주목 해야 할 선수 l [피파의 모든 것 27화]",date:"2023. 9. 8"}]}},mounted(){Y.p8.registerPlugin($.i);const t=Y.p8.timeline({paused:!0});Y.p8.timeline({scrollTrigger:{trigger:".schedule-section",start:"top-=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{t.play()}}}),t.to(".schedule-section > .title-con > .company",{duration:1,bottom:0,opacity:1},"start"),t.to(".schedule-section > .title-con > .title",{duration:1,bottom:0,opacity:1},"start+=.3"),t.to(".schedule-section > .title-con > .subtitle",{duration:1,bottom:0,opacity:1},"start+=.5"),t.to(".schedule-section > .title-con > .subtitle-mobile",{duration:1,bottom:0,opacity:1},"start+=.5"),t.to(".Schedule-con",{duration:1.5,bottom:0,opacity:1},"start+=.7");let e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";let o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o),window.onYouTubeIframeAPIReady=this.onYouTubeIframeAPIReady},setup(){const t=(0,Nt.iH)(null),e=(0,Nt.iH)([]);(0,s.bv)((()=>{if(t.value){const o=new Wt.ZP(t.value,{direction:"horizontal",loop:!1,mousewheel:!1,speed:300,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}});o.on("slideChange",(()=>{const t=e.value[o.previousIndex];t&&t.stopVideo&&t.stopVideo()}))}}));const o=()=>{(0,s.Y3)((()=>{const t=document.querySelectorAll(".swiper-slide iframe");for(let o=0;o<t.length;o++)e.value[o]=new YT.Player(t[o])}))};return{bannerRef:t,onYouTubeIframeAPIReady:o,players:e}}};const Ut=(0,k.Z)(qt,[["render",Zt],["__scopeId","data-v-4960bd39"]]);var Mt=Ut;const Ft=t=>((0,s.dD)("data-v-ea02bab0"),t=t(),(0,s.Cn)(),t),Bt={class:"news-event-section"},At=Ft((()=>(0,s._)("div",{class:"title-con"},[(0,s._)("p",{class:"company"},"우리의 소식은"),(0,s._)("p",{class:"title"},"Our News")],-1))),Ot={class:"container"},Rt={class:"news"},Vt=Ft((()=>(0,s._)("hr",{class:"hr-margin"},null,-1))),Kt={class:"fix-contain"},Gt={class:"num"},Xt={class:"con"},$t={class:"list-title"},Qt={class:"list-detail"},Jt={class:"date"},te={class:"fix-contain"},ee={class:"num"},oe={class:"con"},se={class:"list-title"},ie={class:"list-detail"},ne={class:"date"};function ae(t,e,o,i,a,l){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",Bt,[At,(0,s._)("div",Ot,[(0,s._)("div",Rt,[Vt,(0,s._)("div",Kt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.news,((t,e)=>((0,s.wg)(),(0,s.j4)(c,{to:"news"+t.num,key:e,class:"list-con pc"},{default:(0,s.w5)((()=>[(0,s._)("span",Gt,(0,n.zw)(t.num),1),(0,s._)("div",Xt,[(0,s._)("span",$t,(0,n.zw)(t.title),1),(0,s._)("span",Qt," - "+(0,n.zw)(t.subtitle),1)]),(0,s._)("span",Jt,(0,n.zw)(t.date),1)])),_:2},1032,["to"])))),128))]),(0,s._)("div",te,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.news_mobile,((t,e)=>((0,s.wg)(),(0,s.j4)(c,{to:"news"+(e+1),key:e,class:"list-con mobile"},{default:(0,s.w5)((()=>[(0,s._)("span",ee,(0,n.zw)(t.num),1),(0,s._)("div",oe,[(0,s._)("span",se,(0,n.zw)(t.title),1),(0,s._)("span",ie," - "+(0,n.zw)(t.subtitle),1)]),(0,s._)("span",ne,(0,n.zw)(t.date),1)])),_:2},1032,["to"])))),128))])])])])}var le=o(20065);Wt.ZP.use([Wt.W_,Wt.pt]);var ce={name:"HomeNewsEvents",computed:{...(0,le.Se)(["getHomeNewsData"]),news(){return this.getHomeNewsData.map((t=>({num:t.num,title:t.title,subtitle:t.title,date:t.date})))},mobile_data(){return this.getHomeNewsData.map((t=>({num:t.num,title:t.title,subtitle:t.title,date:t.date})))},news_mobile(){return{...this.mobile_data}}},data(){return{bgicon:o(97659),img:[{src:o(87190)},{src:o(84274)},{src:o(21466)}]}},methods:{},mounted(){Y.p8.registerPlugin($.i);const t=Y.p8.timeline({paused:!0});t.to(".news-event-section > .title-con > .company",{duration:1,left:0,opacity:1},"start"),t.to(".news-event-section > .title-con > .title",{duration:1,left:0,opacity:1},"start+=.3"),t.to(".news-event-section > .title-con > .subtitle",{duration:1,left:0,opacity:1},"start+=.5"),t.to(".news-event-section > .container > .news > .fix-contain",{duration:1,right:0,opacity:1},"start+=.7"),Y.p8.timeline({scrollTrigger:{trigger:".news-event-section",start:"top-=140px bottom",end:"+=50%",scrub:!0,animation:t,onEnter:()=>{t.play()}}});const e=Y.p8.timeline({scrollTrigger:{trigger:".fix-contain",animation:t,onEnter:()=>{t.play()}},repeat:-1,repeatDelay:0});for(var o=0;o<=this.news.length;o++){if(o===this.news.length-1)return;var s=72*(o+1),i=62*(o+1);const t=1.5;var n=1.5;e.to(".news-event-section > .container > .news > .fix-contain > .pc",{duration:t,bottom:s+"px",delay:n}),e.to(".news-event-section > .container > .news > .fix-contain > .mobile",{duration:t,bottom:i+"px",delay:n})}},setup(){const t=(0,Nt.iH)(null);return(0,s.bv)((()=>{t.value=new Wt.ZP(t.value,{direction:"horizontal",loop:!1,mousewheel:!1,speed:300,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}})})),{bannerRef:t}}};const re=(0,k.Z)(ce,[["render",ae],["__scopeId","data-v-ea02bab0"]]);var de=re,pe=o(26348),ue={name:"HomeView",components:{Header:S,HomeBanner:N,HomeInfo:tt,HomeService:xt,HomeSlideVod:Mt,HomeNewsEvents:de,FooterMain:pe.Z}};const me=(0,k.Z)(ue,[["render",i]]);var ve=me},26348:function(t,e,o){o.d(e,{Z:function(){return j}});var s=o(73396),i=o(87139);const n=t=>((0,s.dD)("data-v-abd1bcb2"),t=t(),(0,s.Cn)(),t),a={class:"icon-contain"},l={class:"icon-box"},c={class:"icon-con"},r=["href"],d=["src"],p={class:"footer-section"},u={class:"footer-con"},m={class:"logo-con"},v=["src"],g={class:"contact-con"},b=n((()=>(0,s._)("div",{class:"location contact"},[(0,s._)("div",{class:"text-con"},[(0,s._)("p",{class:"text-title"},"Location"),(0,s._)("p",null,"부산광역시 사상구 백양대로684 4F")])],-1))),w={class:"email contact"},f={class:"text-con"},h=n((()=>(0,s._)("p",{class:"text-title"},"Email",-1))),_={class:"tel contact"},x={class:"text-con"},y=n((()=>(0,s._)("p",{class:"text-title"},"Tel",-1))),k={class:"info-con"},T={class:"certificate-con"},S=["src"],E={class:"copyright-con"},D={class:"copyright"},H=["src"];function L(t,e,o,n,L,I){const C=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",a,[(0,s._)("div",l,[(0,s._)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(L.icon,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"icon-div",key:e},[(0,s._)("a",{href:t.href},[(0,s._)("img",{src:t.src,alt:"logo",class:"icon"},null,8,d)],8,r)])))),128))])])]),(0,s._)("section",p,[(0,s._)("div",u,[(0,s._)("div",m,[(0,s.Wm)(C,{to:"/"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:L.logo,alt:"logo",class:"logo"},null,8,v)])),_:1})]),(0,s._)("div",g,[b,(0,s._)("div",w,[(0,s._)("div",f,[h,(0,s._)("p",null,(0,i.zw)(L.text.email),1)])]),(0,s._)("div",_,[(0,s._)("div",x,[y,(0,s._)("p",null,(0,i.zw)(L.text.tel),1)])])]),(0,s._)("div",k,[(0,s._)("div",T,[(0,s._)("img",{src:L.certificateLogo,class:"certificateLogo"},null,8,S)]),(0,s._)("div",E,[(0,s._)("div",D,[(0,s._)("img",{src:L.copyright},null,8,H),(0,s.Uk)(" 2023 TNT STUDIO All right reserved ")])])])])])],64)}var I={data(){return{logo:o(96640),certificateLogo:o(43973),copyright:o(69908),text:{location:"부산광역시 사상구 백양대로684 5F",email:"gameinscokr@naver.com",tel:"051-301-5908"},icon:[{src:o(2265),href:"https://blog.naver.com/gameinscokr"},{src:o(41746),href:"https://www.youtube.com/@tikintaka"},{src:o(46367),href:"https://www.tiktok.com/@tikintaka"},{src:o(32300),href:"https://www.instagram.com/tikintaka_official/"}]}}},C=o(40089);const z=(0,C.Z)(I,[["render",L],["__scopeId","data-v-abd1bcb2"]]);var j=z},25427:function(t,e,o){o.d(e,{Z:function(){return b}});var s=o(73396),i=o(87139),n=o(89457),a=o(52127);const l=t=>((0,s.dD)("data-v-f34eaa6a"),t=t(),(0,s.Cn)(),t),c={class:"menu_section"},r={class:"menu-box"},d={class:"menu_con"},p=l((()=>(0,s._)("div",{style:{width:"100%","justify-content":"center","align-items":"center",display:"flex"}},null,-1)));function u(t,e,o,l,u,m){const v=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",c,[(0,s._)("div",r,[(0,s._)("div",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.menus,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"list_con"},[(0,s.Wm)(n.l,{value:e},{default:(0,s.w5)((()=>[(0,s.Wm)(a.V,{class:"menu-list"},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{to:t.value},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.title),1)])),_:2},1032,["to"])])),_:2},1024)])),_:2},1032,["value"])])))),128))]),p])])}var m={name:"MenuBar",components:{},data(){return{menus:[{title:"회사소개",value:"/intro"},{title:"서비스",value:"/studio"},{title:"프로그램",value:"/program"},{title:"회사소식",value:"/news"},{title:"문의/예약",value:"/ask"}],icon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:o(52183)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:o(69245)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official",src:o(79427)}]}}},v=o(40089);const g=(0,v.Z)(m,[["render",u],["__scopeId","data-v-f34eaa6a"]]);var b=g},32300:function(t,e,o){t.exports=o.p+"static/img/Instalogo.09d254fd.svg"},46367:function(t,e,o){t.exports=o.p+"static/img/TicToklogo.4688f6a0.svg"},41746:function(t,e,o){t.exports=o.p+"static/img/Youtubelogo.6f8479f0.svg"},43973:function(t,e,o){t.exports=o.p+"static/img/bestFriendlyLogo.5d26fe2d.svg"},69908:function(t,e,o){t.exports=o.p+"static/img/copyright.b6e91a96.svg"},2265:function(t,e,o){t.exports=o.p+"static/img/naverlogo.ccb5b0e4.svg"},96640:function(t,e,o){t.exports=o.p+"static/img/scrollLogo.f4f06b9b.svg"},89511:function(t,e,o){t.exports=o.p+"static/img/instaLogo.6a4302a2.svg"},13416:function(t,e,o){t.exports=o.p+"static/img/logo.0e7e25cd.svg"},79427:function(t,e,o){t.exports=o.p+"static/img/scrollInstaLogo.3748518a.svg"},17009:function(t,e,o){t.exports=o.p+"static/img/scrollLogo.f4f06b9b.svg"},52183:function(t,e,o){t.exports=o.p+"static/img/scrollTkLogo.d8412227.svg"},69245:function(t,e,o){t.exports=o.p+"static/img/scrollYoutubeLogo.578e2b61.svg"},79456:function(t,e,o){t.exports=o.p+"static/img/youtubeLogo.3b6aeb01.svg"},82408:function(t,e,o){t.exports=o.p+"static/img/infophone.e5cc9790.svg"},53511:function(t,e,o){t.exports=o.p+"static/img/infophone_afterText.c4e225dd.svg"},77771:function(t,e,o){t.exports=o.p+"static/img/infophone_firstText.98f5390f.svg"},84274:function(t,e,o){t.exports=o.p+"static/img/TSL.0dbbea63.svg"},87190:function(t,e,o){t.exports=o.p+"static/img/Top피파.86e95972.svg"},21466:function(t,e,o){t.exports=o.p+"static/img/피파의모든것.9814e645.svg"},29504:function(t,e,o){t.exports=o.p+"static/img/advertise.0a6bd16d.svg"},97659:function(t,e,o){t.exports=o.p+"static/img/bg_element1.8006df8b.svg"},60846:function(t,e,o){t.exports=o.p+"static/img/bg_element2.3088bbe1.svg"},43114:function(t,e,o){t.exports=o.p+"static/img/bg_element3.79abb8c0.svg"},86863:function(t,e,o){t.exports=o.p+"static/img/education.11441daa.svg"},25140:function(t,e,o){t.exports=o.p+"static/img/lental.a1c44f16.svg"},83061:function(t,e,o){t.exports=o.p+"static/img/makeFilm.8a03b41c.svg"},67310:function(t,e,o){t.exports=o.p+"static/media/1920_2.7cb64338.mp4"}}]);
//# sourceMappingURL=5008.85185026.js.map