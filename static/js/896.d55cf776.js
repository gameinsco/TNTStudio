"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[896],{2896:function(e,t,o){o.r(t),o.d(t,{default:function(){return Ne}});var a=o(3396);function i(e,t,o,i,l,s){const n=(0,a.up)("Header"),r=(0,a.up)("Program"),d=(0,a.up)("FooterMain");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(n),(0,a.Wm)(r),(0,a.Wm)(d)],64)}var l=o(8723);const s={class:"news_section"};function n(e,t,o,i,l,n){const r=(0,a.up)("HeaderTitle"),d=(0,a.up)("LongVod"),u=(0,a.up)("ShortVod");return(0,a.wg)(),(0,a.iD)("section",s,[(0,a.Wm)(r,{"title-data":l.title,"sub-title-data":l.subTitle,"bg-image":l.bgImage},null,8,["title-data","sub-title-data","bg-image"]),(0,a.Wm)(d),(0,a.Wm)(u)])}var r=o(1433),d=o(7139);const u=e=>((0,a.dD)("data-v-54112053"),e=e(),(0,a.Cn)(),e),p={class:"HomeLongVod"},c=u((()=>(0,a._)("div",{class:"TextCon"},[(0,a._)("span",{class:"title"}),(0,a._)("a",{class:"viewMore",href:"https://www.youtube.com/@tikintaka"},"VIEW MORE +")],-1))),v=["src"],m={class:"FirstText"},w=u((()=>(0,a._)("p",{class:"title"},"티키앤타카",-1))),h={class:"subTitle"},f={class:"date"},g=["href"],b=u((()=>(0,a._)("strong",null,"바로가기",-1))),y=[b],S={class:"imgCon"},_=["src"],E={class:"SecondText"},C=u((()=>(0,a._)("p",{class:"title"},"티키앤타카",-1))),k={class:"subTitle"},x={class:"SwiperBtn"};function A(e,t,o,i,l,s){const n=(0,a.up)("swiper-slide"),r=(0,a.up)("swiper");return(0,a.wg)(),(0,a.iD)("section",p,[c,(0,a.Wm)(r,{onSwiper:s.setThumbsSwiper,spaceBetween:10,thumbs:{swiper:l.thumbsSwiper2},modules:l.modules,allowTouchMove:!0,class:"FirstSwiper"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.SwiperImages,((e,t)=>((0,a.wg)(),(0,a.j4)(n,{class:(0,d.C_)("FirstCon slide"+t),key:t},{default:(0,a.w5)((()=>[(0,a._)("iframe",{borderRadius:"5px",src:l.videoUrl[e.num],allow:"geolocation",frameborder:"0",allowfullscreen:"",class:"YoutubePlayer"},null,8,v),(0,a._)("div",m,[w,(0,a._)("p",h,(0,d.zw)(e.subTitle),1),(0,a._)("p",f,(0,d.zw)(e.date),1),(0,a._)("a",{class:"GoToChannelBtn",href:e.link},y,8,g)])])),_:2},1032,["class"])))),128))])),_:1},8,["onSwiper","thumbs","modules"]),(0,a.Wm)(r,{onSwiper:s.setThumbsSwiper2,spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,modules:l.modules,pagination:!0,style:{"--swiper-navigation-color":"black","--swiper-pagination-color":"black"},breakpoints:{320:{slidesPerView:2.2,spaceBetween:10},360:{slidesPerView:2.5,spaceBetween:13},400:{slidesPerView:2.8,spaceBetween:14},500:{slidesPerView:3.3,spaceBetween:14},640:{slidesPerView:3.5,spaceBetween:15},760:{slidesPerView:4,spaceBetween:10},1080:{slidesPerView:5,spaceBetween:20}},class:"SecondSwiper"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.SwiperImages,((e,t)=>((0,a.wg)(),(0,a.j4)(n,{key:t,class:(0,d.C_)("SecondCon slide"+t),onClick:e=>s.clickThumbSwiper(t)},{default:(0,a.w5)((()=>[(0,a._)("div",S,[(0,a._)("img",{src:e.img,class:"SecondImg"},null,8,_)]),(0,a._)("div",E,[C,(0,a._)("p",k,(0,d.zw)(e.subTitle),1)])])),_:2},1032,["class","onClick"])))),128))])),_:1},8,["onSwiper","modules"]),(0,a._)("div",x,[(0,a._)("div",{class:"swiper-button-prev",onClick:t[0]||(t[0]=e=>s.prevThumbsSwiper())}),(0,a._)("div",{class:"swiper-button-next",onClick:t[1]||(t[1]=e=>s.nextThumbsSwiper())})])])}var B=o(4870),I=o(5800);o(7658);function P(e){return"object"===typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function T(e,t){const o=["__proto__","constructor","prototype"];Object.keys(t).filter((e=>o.indexOf(e)<0)).forEach((o=>{"undefined"===typeof e[o]?e[o]=t[o]:P(t[o])&&P(e[o])&&Object.keys(t[o]).length>0?t[o].__swiper__?e[o]=t[o]:T(e[o],t[o]):e[o]=t[o]}))}function j(e={}){return e.navigation&&"undefined"===typeof e.navigation.nextEl&&"undefined"===typeof e.navigation.prevEl}function N(e={}){return e.pagination&&"undefined"===typeof e.pagination.el}function O(e={}){return e.scrollbar&&"undefined"===typeof e.scrollbar.el}function M(e=""){const t=e.split(" ").map((e=>e.trim())).filter((e=>!!e)),o=[];return t.forEach((e=>{o.indexOf(e)<0&&o.push(e)})),o.join(" ")}function D(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}const L=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function z(e={},t=!0){const o={on:{}},a={},i={};T(o,I.ZP.defaults),T(o,I.ZP.extendedDefaults),o._emitClasses=!0,o.init=!1;const l={},s=L.map((e=>e.replace(/_/,""))),n=Object.assign({},e);return Object.keys(n).forEach((n=>{"undefined"!==typeof e[n]&&(s.indexOf(n)>=0?P(e[n])?(o[n]={},i[n]={},T(o[n],e[n]),T(i[n],e[n])):(o[n]=e[n],i[n]=e[n]):0===n.search(/on[A-Z]/)&&"function"===typeof e[n]?t?a[`${n[2].toLowerCase()}${n.substr(3)}`]=e[n]:o.on[`${n[2].toLowerCase()}${n.substr(3)}`]=e[n]:l[n]=e[n])})),["navigation","pagination","scrollbar"].forEach((e=>{!0===o[e]&&(o[e]={}),!1===o[e]&&delete o[e]})),{params:o,passedParams:i,rest:l,events:a}}function H({el:e,nextEl:t,prevEl:o,paginationEl:a,scrollbarEl:i,swiper:l},s){j(s)&&t&&o&&(l.params.navigation.nextEl=t,l.originalParams.navigation.nextEl=t,l.params.navigation.prevEl=o,l.originalParams.navigation.prevEl=o),N(s)&&a&&(l.params.pagination.el=a,l.originalParams.pagination.el=a),O(s)&&i&&(l.params.scrollbar.el=i,l.originalParams.scrollbar.el=i),l.init(e)}function U(e,t,o,a,i){const l=[];if(!t)return l;const s=e=>{l.indexOf(e)<0&&l.push(e)};if(o&&a){const e=a.map(i),t=o.map(i);e.join("")!==t.join("")&&s("children"),a.length!==o.length&&s("children")}const n=L.filter((e=>"_"===e[0])).map((e=>e.replace(/_/,"")));return n.forEach((o=>{if(o in e&&o in t)if(P(e[o])&&P(t[o])){const a=Object.keys(e[o]),i=Object.keys(t[o]);a.length!==i.length?s(o):(a.forEach((a=>{e[o][a]!==t[o][a]&&s(o)})),i.forEach((a=>{e[o][a]!==t[o][a]&&s(o)})))}else e[o]!==t[o]&&s(o)})),l}function V(e,t,o){void 0===e&&(e={});const a=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},l=(e,t)=>{Array.isArray(e)&&e.forEach((e=>{const o="symbol"===typeof e.type;"default"===t&&(t="container-end"),o&&e.children?l(e.children,t):!e.type||"SwiperSlide"!==e.type.name&&"AsyncComponentWrapper"!==e.type.name?i[t]&&i[t].push(e):a.push(e)}))};return Object.keys(e).forEach((t=>{if("function"!==typeof e[t])return;const o=e[t]();l(o,t)})),o.value=t.value,t.value=a,{slides:a,slots:i}}function q({swiper:e,slides:t,passedParams:o,changedParams:a,nextEl:i,prevEl:l,scrollbarEl:s,paginationEl:n}){const r=a.filter((e=>"children"!==e&&"direction"!==e&&"wrapperClass"!==e)),{params:d,pagination:u,navigation:p,scrollbar:c,virtual:v,thumbs:m}=e;let w,h,f,g,b,y,S,_;a.includes("thumbs")&&o.thumbs&&o.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(w=!0),a.includes("controller")&&o.controller&&o.controller.control&&d.controller&&!d.controller.control&&(h=!0),a.includes("pagination")&&o.pagination&&(o.pagination.el||n)&&(d.pagination||!1===d.pagination)&&u&&!u.el&&(f=!0),a.includes("scrollbar")&&o.scrollbar&&(o.scrollbar.el||s)&&(d.scrollbar||!1===d.scrollbar)&&c&&!c.el&&(g=!0),a.includes("navigation")&&o.navigation&&(o.navigation.prevEl||l)&&(o.navigation.nextEl||i)&&(d.navigation||!1===d.navigation)&&p&&!p.prevEl&&!p.nextEl&&(b=!0);const E=t=>{e[t]&&(e[t].destroy(),"navigation"===t?(e.isElement&&(e[t].prevEl.remove(),e[t].nextEl.remove()),d[t].prevEl=void 0,d[t].nextEl=void 0,e[t].prevEl=void 0,e[t].nextEl=void 0):(e.isElement&&e[t].el.remove(),d[t].el=void 0,e[t].el=void 0))};if(a.includes("loop")&&e.isElement&&(d.loop&&!o.loop?y=!0:!d.loop&&o.loop?S=!0:_=!0),r.forEach((e=>{if(P(d[e])&&P(o[e]))T(d[e],o[e]),"navigation"!==e&&"pagination"!==e&&"scrollbar"!==e||!("enabled"in o[e])||o[e].enabled||E(e);else{const t=o[e];!0!==t&&!1!==t||"navigation"!==e&&"pagination"!==e&&"scrollbar"!==e?d[e]=o[e]:!1===t&&E(e)}})),r.includes("controller")&&!h&&e.controller&&e.controller.control&&d.controller&&d.controller.control&&(e.controller.control=d.controller.control),a.includes("children")&&t&&v&&d.virtual.enabled&&(v.slides=t,v.update(!0)),a.includes("children")&&t&&d.loop&&(_=!0),w){const e=m.init();e&&m.update(!0)}h&&(e.controller.control=d.controller.control),f&&(!e.isElement||n&&"string"!==typeof n||(n=document.createElement("div"),n.classList.add("swiper-pagination"),e.el.shadowEl.appendChild(n)),n&&(d.pagination.el=n),u.init(),u.render(),u.update()),g&&(!e.isElement||s&&"string"!==typeof s||(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),e.el.shadowEl.appendChild(s)),s&&(d.scrollbar.el=s),c.init(),c.updateSize(),c.setTranslate()),b&&(e.isElement&&(i&&"string"!==typeof i||(i=document.createElement("div"),i.classList.add("swiper-button-next"),e.el.shadowEl.appendChild(i)),l&&"string"!==typeof l||(l=document.createElement("div"),l.classList.add("swiper-button-prev"),e.el.shadowEl.appendChild(l))),i&&(d.navigation.nextEl=i),l&&(d.navigation.prevEl=l),p.init(),p.update()),a.includes("allowSlideNext")&&(e.allowSlideNext=o.allowSlideNext),a.includes("allowSlidePrev")&&(e.allowSlidePrev=o.allowSlidePrev),a.includes("direction")&&e.changeDirection(o.direction,!1),(y||_)&&e.loopDestroy(),(S||_)&&e.loopCreate(),e.update()}function R(e,t,o){if(!o)return null;const i=e=>{let o=e;return e<0?o=t.length+e:o>=t.length&&(o-=t.length),o},l=e.value.isHorizontal()?{[e.value.rtlTranslate?"right":"left"]:`${o.offset}px`}:{top:`${o.offset}px`},{from:s,to:n}=o,r=e.value.params.loop?-t.length:0,d=e.value.params.loop?2*t.length:t.length,u=[];for(let a=r;a<d;a+=1)a>=s&&a<=n&&u.push(t[i(a)]);return u.map((t=>(t.props||(t.props={}),t.props.style||(t.props.style={}),t.props.swiperRef=e,t.props.style=l,(0,a.h)(t.type,{...t.props},t.children))))}const F=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())},Y={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(e,t){let{slots:o,emit:i}=t;const{tag:l,wrapperTag:s}=e,n=(0,B.iH)("swiper"),r=(0,B.iH)(null),d=(0,B.iH)(!1),u=(0,B.iH)(!1),p=(0,B.iH)(null),c=(0,B.iH)(null),v=(0,B.iH)(null),m={value:[]},w={value:[]},h=(0,B.iH)(null),f=(0,B.iH)(null),g=(0,B.iH)(null),b=(0,B.iH)(null),{params:y,passedParams:S}=z(e,!1);V(o,m,w),v.value=S,w.value=m.value;const _=()=>{V(o,m,w),d.value=!0};y.onAny=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];i(e,...o)},Object.assign(y.on,{_beforeBreakpoint:_,_containerClasses(e,t){n.value=t}});const E={...y};if(delete E.wrapperClass,c.value=new I.ZP(E),c.value.virtual&&c.value.params.virtual.enabled){c.value.virtual.slides=m.value;const e={cache:!1,slides:m.value,renderExternal:e=>{r.value=e},renderExternalUpdate:!1};T(c.value.params.virtual,e),T(c.value.originalParams.virtual,e)}function C(e){return y.virtual?R(c,e,r.value):(e.forEach(((e,t)=>{e.props||(e.props={}),e.props.swiperRef=c,e.props.swiperSlideIndex=t})),e)}return(0,a.ic)((()=>{!u.value&&c.value&&(c.value.emitSlidesClasses(),u.value=!0);const{passedParams:t}=z(e,!1),o=U(t,v.value,m.value,w.value,(e=>e.props&&e.props.key));v.value=t,(o.length||d.value)&&c.value&&!c.value.destroyed&&q({swiper:c.value,slides:m.value,passedParams:t,changedParams:o,nextEl:h.value,prevEl:f.value,scrollbarEl:b.value,paginationEl:g.value}),d.value=!1})),(0,a.JJ)("swiper",c),(0,a.YP)(r,(()=>{(0,a.Y3)((()=>{F(c.value)}))})),(0,a.bv)((()=>{p.value&&(H({el:p.value,nextEl:h.value,prevEl:f.value,paginationEl:g.value,scrollbarEl:b.value,swiper:c.value},y),i("swiper",c.value))})),(0,a.Jd)((()=>{c.value&&!c.value.destroyed&&c.value.destroy(!0,!1)})),()=>{const{slides:t,slots:i}=V(o,m,w);return(0,a.h)(l,{ref:p,class:M(n.value)},[i["container-start"],(0,a.h)(s,{class:D(y.wrapperClass)},[i["wrapper-start"],C(t),i["wrapper-end"]]),j(e)&&[(0,a.h)("div",{ref:f,class:"swiper-button-prev"}),(0,a.h)("div",{ref:h,class:"swiper-button-next"})],O(e)&&(0,a.h)("div",{ref:b,class:"swiper-scrollbar"}),N(e)&&(0,a.h)("div",{ref:g,class:"swiper-pagination"}),i["container-end"]])}}},Z={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(e,t){let{slots:o}=t,i=!1;const{swiperRef:l}=e,s=(0,B.iH)(null),n=(0,B.iH)("swiper-slide"),r=(0,B.iH)(!1);function d(e,t,o){t===s.value&&(n.value=o)}(0,a.bv)((()=>{l&&l.value&&(l.value.on("_slideClass",d),i=!0)})),(0,a.Xn)((()=>{!i&&l&&l.value&&(l.value.on("_slideClass",d),i=!0)})),(0,a.ic)((()=>{s.value&&l&&l.value&&("undefined"!==typeof e.swiperSlideIndex&&(s.value.swiperSlideIndex=e.swiperSlideIndex),l.value.destroyed&&"swiper-slide"!==n.value&&(n.value="swiper-slide"))})),(0,a.Jd)((()=>{l&&l.value&&l.value.off("_slideClass",d)}));const u=(0,a.Fl)((()=>({isActive:n.value.indexOf("swiper-slide-active")>=0,isVisible:n.value.indexOf("swiper-slide-visible")>=0,isPrev:n.value.indexOf("swiper-slide-prev")>=0,isNext:n.value.indexOf("swiper-slide-next")>=0})));(0,a.JJ)("swiperSlide",u);const p=()=>{r.value=!0};return()=>(0,a.h)(e.tag,{class:M(`${n.value}`),ref:s,"data-swiper-slide-index":"undefined"===typeof e.virtualIndex&&l&&l.value&&l.value.params.loop?e.swiperSlideIndex:e.virtualIndex,onLoadCapture:p},e.zoom?(0,a.h)("div",{class:"swiper-zoom-container","data-swiper-zoom":"number"===typeof e.zoom?e.zoom:void 0},[o.default&&o.default(u.value),e.lazy&&!r.value&&(0,a.h)("div",{class:"swiper-lazy-preloader"})]):[o.default&&o.default(u.value),e.lazy&&!r.value&&(0,a.h)("div",{class:"swiper-lazy-preloader"})])}};var W={name:"HomeLongVod",components:{Swiper:Y,SwiperSlide:Z},data(){return{bgicon:o(7659),players:[],thumbsSwiper:null,thumbsSwiper2:null,SwiperNum:0,modules:[I.Rv,I.W_,I.o3,I.LW],videoUrl:["https://www.youtube.com/embed/dVyLFjjs3J4?rel=0&enablejsapi=1","https://www.youtube.com/embed/AjBQvuHZ86o?rel=0&enablejsapi=1","https://www.youtube.com/embed/-TZdot4JA7w?rel=0&enablejsapi=1","https://www.youtube.com/embed/E16qlkAKwtY?rel=0&enablejsapi=1","https://www.youtube.com/embed/1gED0_NSmXU?rel=0&enablejsapi=1","https://www.youtube.com/embed/xJAKV0DVlWE?rel=0&enablejsapi=1","https://www.youtube.com/embed/auUgzMmrqP8?rel=0&enablejsapi=1","https://www.youtube.com/embed/wh-DCVr1wOY?rel=0&enablejsapi=1","https://www.youtube.com/embed/NIRhxNNKXdE?rel=0&enablejsapi=1","https://www.youtube.com/embed/Tl_oXL9YQEM?rel=0&enablejsapi=1"],SwiperImages:[{img:o(2336),subTitle:"박찬우 임형철이 말하는 인테르 vs 맨시티 22챔스 떡상 선수 l [피파의 모든것 10화]",link:"https://www.youtube.com/watch?v=dVyLFjjs3J4",date:"2023. 6. 10",num:0},{img:o(3279),subTitle:"박찬우 임형철이 말하는 인테르 vs 맨시티 우승팀 l [피파의 모든것 9화]",link:"https://www.youtube.com/watch?v=AjBQvuHZ86o",date:"2023. 6. 08",num:1},{img:o(7945),subTitle:"한준희가 말하는 아이콘 모먼트 최고의 선수 l [피파의 모든것 8화]",link:"https://www.youtube.com/watch?v=-TZdot4JA7w",date:"2023. 6. 06",num:2},{img:o(1956),subTitle:"한준희가 말하는 아이콘 모먼트 양발선수 l [피파의 모든것 7화]",link:"https://www.youtube.com/watch?v=E16qlkAKwtY",date:"2023. 6. 04",num:3},{img:o(5883),subTitle:"한준희가 말하는 아이콘 모먼트 평가 l [피파의 모든것 6화]",link:"https://www.youtube.com/watch?v=1gED0_NSmXU",date:"2023. 6. 01",num:4},{img:o(4584),subTitle:"한준희가 말하는 출시되어야하는 아이콘  l [피파의 모든것 5화]",link:"https://www.youtube.com/watch?v=xJAKV0DVlWE",date:"2023. 5. 28",num:5},{img:o(6238),subTitle:"한준희가 말하는 아이콘 재평가 Feat. 한국 선수 양발에 대한 생각 l [피파의 모든것 4화]",link:"https://www.youtube.com/watch?v=auUgzMmrqP8",date:"2023. 5. 27",num:6},{img:o(951),subTitle:"한준희, 스카우터와 말하는 아이콘 재평가 떡상해야 할 선수들 l [피파의 모든것 3화]",link:"https://www.youtube.com/watch?v=wh-DCVr1wOY",date:"2023. 5. 21",num:7},{img:o(4049),subTitle:"5연속 공식경기 1위의 불가능한 도전 l [TOP피파 1화]",link:"https://www.youtube.com/watch?v=NIRhxNNKXdE",date:"2023. 5. 14",num:8},{img:o(8759),subTitle:"극강의 가성비! 1,000억 대한민국 활용법 l TSL 우승자 박찬화 득점모음",link:"https://www.youtube.com/watch?v=Tl_oXL9YQEM",date:"2023. 5. 11",num:9}]}},mounted(){let e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";let t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),console.log(this.players),window.onYouTubeIframeAPIReady=this.onYouTubeIframeAPIReady},methods:{setThumbsSwiper(e){this.thumbsSwiper=e,e.on("slideChange",(()=>{const t=this.players[e.previousIndex];console.log(this.players),t&&t.stopVideo&&t.stopVideo()}))},setThumbsSwiper2(e){this.thumbsSwiper2=e},clickThumbSwiper(e){this.SwiperNum=e,this.thumbsSwiper.slideTo(this.SwiperNum),this.thumbsSwiper2.slideTo(this.SwiperNum)},prevThumbsSwiper(){this.SwiperNum<=0||this.thumbsSwiper2&&this.thumbsSwiper&&(this.SwiperNum-=1,this.thumbsSwiper.slideTo(this.SwiperNum),this.thumbsSwiper2.slideTo(this.SwiperNum))},nextThumbsSwiper(){this.SwiperNum>=this.SwiperImages.length-1||this.thumbsSwiper2&&this.thumbsSwiper&&(this.SwiperNum+=1,this.thumbsSwiper.slideTo(this.SwiperNum),this.thumbsSwiper2.slideTo(this.SwiperNum))},onYouTubeIframeAPIReady(){this.$nextTick((()=>{const e=setInterval((()=>{if(window.YT&&window.YT.Player){clearInterval(e);const t=this.$el.querySelectorAll("iframe");for(let e=0;e<t.length;e++)this.players[e]=new YT.Player(t[e])}}),100)}))}}},X=o(89);const J=(0,X.Z)(W,[["render",A],["__scopeId","data-v-54112053"]]);var Q=J;const K=e=>((0,a.dD)("data-v-4d5df2f0"),e=e(),(0,a.Cn)(),e),$={class:"shortvod-section"},G={class:"short-con"},ee={class:"short-title"},te={class:"title"},oe={class:"title-text"},ae=["src"],ie=(0,a.uE)('<span class="sub-title" data-v-4d5df2f0><p style="margin:0;" data-v-4d5df2f0>짧은 쇼츠 영상으로</p><p style="margin:0;" data-v-4d5df2f0>중요한 장면을 놓치지 마세요.</p></span><span class="sub-title-mobile" data-v-4d5df2f0><p style="margin:0;" data-v-4d5df2f0>쇼츠 영상으로 티키앤타카와 만나보세요.</p></span>',2),le={class:"swiper-container",ref:"swiperRef"},se={class:"swiper-wrapper"},ne=["onClick"],re={class:"img-con",style:{"border-radius":"5px"}},de=["src"],ue=K((()=>(0,a._)("div",{class:"swiper-scrollbar"},null,-1)));function pe(e,t,o,i,l,s){const n=(0,a.up)("ModalPopup");return(0,a.wg)(),(0,a.iD)("section",$,[(0,a._)("div",G,[(0,a._)("div",ee,[(0,a._)("div",null,[(0,a._)("p",te,[(0,a._)("span",oe,[(0,a._)("img",{src:l.shortLogo.src,class:"short-icon",style:{"padding-right":"8px"}},null,8,ae),(0,a.Uk)("쇼츠동영상 ")])]),ie])]),(0,a._)("div",le,[(0,a._)("div",se,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.long,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"vod-content swiper-slide",onClick:e=>s.openModal(t),key:t},[(0,a._)("div",re,[(0,a._)("img",{src:e.src,style:{width:"100%",height:"100%","object-fit":"cover","border-radius":"5px"}},null,8,de)])],8,ne)))),128))]),ue],512)]),(0,a.Wm)(n)])}var ce=o(9242);const ve={class:"modal"},me={class:"modal-content"},we=["src"],he={class:"modal-btn"};function fe(e,t,o,i,l,s){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",ve,[(0,a._)("div",me,[(0,a._)("span",{class:"close",onClick:t[0]||(t[0]=(...e)=>s.closeModal&&s.closeModal(...e))},"×"),e.shortsShowModal?((0,a.wg)(),(0,a.iD)("iframe",{key:0,class:"youtubeVod",width:"100%",height:"100%",style:{"border-radius":"0px 0px 5px 5px"},src:l.videoUrl[this.shortsVideoIndex],frameborder:"0",allowfullscreen:"",autoplay:""},null,8,we)):(0,a.kq)("",!0),(0,a._)("div",he,[(0,a._)("div",{class:"prev-btn",onClick:t[1]||(t[1]=e=>s.modalBtn(this.shortsVideoIndex-1))}),(0,a._)("div",{class:"next-btn",onClick:t[2]||(t[2]=e=>s.modalBtn(this.shortsVideoIndex+1))})])])],512)),[[ce.F8,e.shortsShowModal]])}var ge=o(65),be={name:"ShortsPopupModal",computed:{...(0,ge.Se)(["shortsVideoIndex","shortsShowModal"])},data(){return{videoUrl:["https://www.youtube.com/embed/b7D3C09UyP4?autoplay=1&mute=1","https://www.youtube.com/embed/k2IOXI9j270?autoplay=1&mute=1","https://www.youtube.com/embed/aLm0NkmQUy0?autoplay=1&mute=1","https://www.youtube.com/embed/opAfmk5S3us?autoplay=1&mute=1","https://www.youtube.com/embed/5BaWzofXFuE?autoplay=1&mute=1","https://www.youtube.com/embed/A7IPmKh1bOI?autoplay=1&mute=1","https://www.youtube.com/embed/AkwAI15UNgE?autoplay=1&mute=1","https://www.youtube.com/embed/X70MrarcM48?autoplay=1&mute=1","https://www.youtube.com/embed/Y135I3m4zhI?autoplay=1&mute=1"]}},methods:{...(0,ge.nv)(["setShortsShowModal","setShortsVideoNumber"]),closeModal(){this.setShortsShowModal(!1),document.body.classList.remove("modal-shorts-open")},modalBtn(e){this.setShortsVideoNumber(e);const t=document.querySelector(".prev-btn"),o=document.querySelector(".next-btn");e<=0?t.style.display="none":e>=this.videoUrl.length-1?o.style.display="none":(t.style.display="block",o.style.display="block")}},mounted(){}};const ye=(0,X.Z)(be,[["render",fe],["__scopeId","data-v-22fdf114"]]);var Se=ye,_e=o(1980),Ee=o(5073);I.ZP.use([I.W_,I.pt,I.LW]);var Ce={name:"HomeShortVod",components:{ModalPopup:Se},computed:{...(0,ge.Se)(["shortsVideoIndex","shortsShowModal"])},data(){return{showModal:!1,videoIndex:Number,vodState:!1,scrollLock:!1,shortLogo:{src:o(5684)},long:[{title:"쇼츠영상1",src:"https://i.ytimg.com/vi/b7D3C09UyP4/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBfHlZPUeUX3EpzZBSqZ_eU2I4C_A",desc:"youtube1",num:0},{title:"쇼츠영상2",src:"https://i.ytimg.com/vi/k2IOXI9j270/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCtDmMM6oj-MvwAm9nDfFOzRV6B2g",desc:"youtube1",num:1},{title:"쇼츠영상3",src:"https://i.ytimg.com/vi/aLm0NkmQUy0/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDDuqeQ0X50GkI1pwCuHnMjO1Undw",desc:"youtube1",num:2},{title:"쇼츠영상4",src:"https://i.ytimg.com/vi/opAfmk5S3us/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBTNtN2w5_0NOSZ0RsoaSZO4-Dekw",desc:"youtube1",num:3},{title:"쇼츠영상5",src:"https://i.ytimg.com/vi/5BaWzofXFuE/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAU3z9l7Ch0BTPXCKLIF2atoxO3ig",desc:"youtube1",num:4},{title:"쇼츠영상6",src:"https://i.ytimg.com/vi/A7IPmKh1bOI/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBxopjMCwaKoxCCkcaes9tkzvL9vQ",desc:"youtube1",num:5},{title:"쇼츠영상7",src:"https://i.ytimg.com/vi/AkwAI15UNgE/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLC5ysOlg1QZhdawM9rxI2bvsJUVIA",desc:"youtube1",num:6},{title:"쇼츠영상8",src:"https://i.ytimg.com/vi/X70MrarcM48/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLC1gaKCzG_Y9DHRMEw1v-sZhK7oNg",desc:"youtube1",num:7},{title:"쇼츠영상9",src:"https://i.ytimg.com/vi/Y135I3m4zhI/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLD07V14W_IGywZpoSEMFr-98reWIg",desc:"youtube1",num:8}]}},methods:{...(0,ge.nv)(["setShortsShowModal","setShortsVideoNumber"]),openModal(e){this.setShortsVideoNumber(e),this.setShortsShowModal(!0),document.body.classList.add("modal-shorts-open");const t=document.querySelector(".prev-btn"),o=document.querySelector(".next-btn");this.shortsVideoIndex<=0?t.style.display="none":this.shortsVideoIndex>=this.long.length-1?o.style.display="none":(t.style.display="block",o.style.display="block")}},setup(){const e=(0,B.iH)(null);return(0,a.bv)((()=>{e.value=new I.ZP(e.value,{direction:"horizontal",loop:!1,mousewheel:!1,slidesPerView:4,spaceBetween:35,speed:300,autoplay:{delay:3e3,disableOnInteraction:!1},scrollbar:{el:".swiper-scrollbar",hide:!1,draggable:!0},breakpoints:{1080:{slidesPerView:4,spaceBetween:35},760:{slidesPerView:3,spaceBetween:25},640:{slidesPerView:4,spaceBetween:20},320:{slidesPerView:2.5,spaceBetween:10}}}),_e.p8.registerPlugin(Ee.i);const t=_e.p8.timeline({paused:!0});_e.p8.timeline({scrollTrigger:{trigger:".shortvod-section",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{t.play()}}}),t.to(".title",{duration:.5,left:0,opacity:1},"start"),t.to(".sub-title",{duration:.5,left:0,opacity:1},"start+=.2"),t.to(".sub-title-mobile",{duration:.5,left:0,opacity:1},"start+=.2"),t.to(".swiper-container ",{duration:1,bottom:0,opacity:1},"start+=.4")})),{swiperRef:e}}};const ke=(0,X.Z)(Ce,[["render",pe],["__scopeId","data-v-4d5df2f0"]]);var xe=ke,Ae={name:"SubProgram",components:{HeaderTitle:r.Z,LongVod:Q,ShortVod:xe},data(){return{title:"프로그램",subTitle:"Program",bgImage:[o(3139),o(3217),o(3806)]}}};const Be=(0,X.Z)(Ae,[["render",n]]);var Ie=Be,Pe=o(6317),Te={name:"SubNewsPage",components:{Header:l.Z,Program:Ie,FooterMain:Pe.Z}};const je=(0,X.Z)(Te,[["render",i]]);var Ne=je},8723:function(e,t,o){o.d(t,{Z:function(){return C}});var a=o(3396),i=o(7139);const l=e=>((0,a.dD)("data-v-080a519b"),e=e(),(0,a.Cn)(),e),s={class:"nav"},n={class:"menu-list"},r={class:"logo-con"},d=["src"],u=["src"],p={class:"menu-li"},c={class:"menu-icon"},v=["href"],m=["src"],w=["href"],h=["src"],f=l((()=>(0,a._)("div",{class:"bar_con"},[(0,a._)("span",{class:"bar1 bar"}),(0,a._)("span",{class:"bar2 bar"}),(0,a._)("span",{class:"bar3 bar"})],-1))),g=[f];function b(e,t,o,l,f,b){const y=(0,a.up)("router-link"),S=(0,a.up)("Header"),_=(0,a.up)("Menu");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a._)("nav",s,[(0,a._)("ul",n,[(0,a._)("div",r,[e.isScrolledUp?((0,a.wg)(),(0,a.j4)(y,{key:0,to:"/",class:"logo"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.logo[0].mainLogo,alt:"logo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,d)])),_:1})):(0,a.kq)("",!0),e.isScrolledUp?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(y,{key:1,to:"/",class:"logo"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.logo[0].scrollLogo,alt:"scrolllogo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,u)])),_:1}))]),(0,a._)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.menuList,((t,o)=>((0,a.wg)(),(0,a.iD)("li",{key:o,class:"list"},[(0,a.Wm)(y,{to:t.href,class:"list",style:(0,i.j5)(e.linkColorStyle)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.name),1)])),_:2},1032,["to","style"])])))),128))]),(0,a._)("div",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.menuIcon,((t,o)=>((0,a.wg)(),(0,a.iD)("li",{key:o},[e.isScrolledUp?((0,a.wg)(),(0,a.iD)("a",{key:0,href:t.href},[(0,a._)("img",{src:e.menuIcon[o].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,m)],8,v)):(0,a.kq)("",!0),e.isScrolledUp?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("a",{key:1,href:t.href},[(0,a._)("img",{src:e.scrollMenuIcon[o].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,h)],8,w))])))),128))]),(0,a._)("div",{class:"ham",ref:"hamElement",onClick:t[0]||(t[0]=(...e)=>b.stopScrolling&&b.stopScrolling(...e))},g,512)])])])),_:1}),e.isMenuState?((0,a.wg)(),(0,a.j4)(_,{key:0})):(0,a.kq)("",!0)],64)}var y=o(7331),S={name:"HeaderMain",components:{Menu:y.Z},data:()=>({isScrolledUp:!1,isMenuState:!1,scrollLock:!1,logo:[{mainLogo:o(3416),scrollLogo:o(7009)}],menuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:o(5555)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:o(9456)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official/",src:o(9511)}],menuList:[{name:"회사소개",href:"/intro"},{name:"서비스",href:"/studio"},{name:"프로그램",href:"/program"},{name:"회사소식",href:"/news"},{name:"문의하기",href:"/ask"}],scrollMenuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:o(2183)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:o(9245)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official",src:o(9427)}]}),mounted(){this.$nextTick((()=>{const e=this.$refs.hamElement;e.addEventListener("click",(function(){this.classList.toggle("active")}))}))},beforeUnmount(){this.removeStopEvent()},methods:{stopScrolling(){this.scrollLock=!this.scrollLock,this.isMenuState=!this.isMenuState,this.scrollLock?(window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1})):this.removeStopEvent()},stopEvent(e){e.preventDefault(),e.stopPropagation()},removeStopEvent(){window.removeEventListener("wheel",this.stopEvent,{passive:!1}),window.removeEventListener("touchmove",this.stopEvent,{passive:!1})}}},_=o(89);const E=(0,_.Z)(S,[["render",b],["__scopeId","data-v-080a519b"]]);var C=E},1433:function(e,t,o){o.d(t,{Z:function(){return c}});var a=o(3396),i=o(7139);const l={class:"text-con"},s={class:"sub-title"},n={class:"main-title"};function r(e,t,o,r,d,u){return(0,a.wg)(),(0,a.iD)("div",{class:"title-text",style:(0,i.j5)({backgroundImage:`url(${d.currentBgImage})`})},[(0,a._)("div",l,[(0,a._)("span",s,(0,i.zw)(o.subTitleData),1),(0,a._)("span",n,(0,i.zw)(o.titleData),1)])],4)}var d={name:"SubTitle",props:{titleData:String,subTitleData:String,bgImage:Array},data(){return{currentBgImage:""}},methods:{handleResize(){const e=window.innerWidth;this.currentBgImage=e>1300?this.bgImage[0]:e>760?this.bgImage[1]:this.bgImage[2]}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},u=o(89);const p=(0,u.Z)(d,[["render",r],["__scopeId","data-v-0c3d4665"]]);var c=p},3217:function(e,t,o){e.exports=o.p+"static/img/contact1300.ec5d47f0.svg"},3139:function(e,t,o){e.exports=o.p+"static/img/contact1920.d0df76a8.svg"},3806:function(e,t,o){e.exports=o.p+"static/img/contact760.ddf9b6e1.svg"},5684:function(e,t,o){e.exports=o.p+"static/img/shortYoutube.547ca1d6.svg"},7659:function(e,t,o){e.exports=o.p+"static/img/bg_element1.8006df8b.svg"},8759:function(e,t,o){e.exports=o.p+"static/img/thumbnail01.894f2c49.webp"},4049:function(e,t,o){e.exports=o.p+"static/img/thumbnail02.5d416a70.jpg"},951:function(e,t,o){e.exports=o.p+"static/img/thumbnail03.686adc3f.webp"},6238:function(e,t,o){e.exports=o.p+"static/img/thumbnail04.f4701bab.webp"},4584:function(e,t,o){e.exports=o.p+"static/img/thumbnail05.1c9ae625.webp"},5883:function(e,t,o){e.exports=o.p+"static/img/thumbnail06.2549d34e.jpg"},1956:function(e,t,o){e.exports=o.p+"static/img/thumbnail07.1ea6dc6f.webp"},7945:function(e,t,o){e.exports=o.p+"static/img/thumbnail08.7d46efe6.webp"},3279:function(e,t,o){e.exports=o.p+"static/img/thumbnail09.0e422fc2.jpg"},2336:function(e,t,o){e.exports=o.p+"static/img/thumbnail10.7a824331.webp"}}]);
//# sourceMappingURL=896.d55cf776.js.map