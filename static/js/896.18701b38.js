"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[896],{1896:function(e,t,o){o.r(t),o.d(t,{default:function(){return Ne}});var a=o(3396);function i(e,t,o,i,s,l){const n=(0,a.up)("Header"),r=(0,a.up)("Program"),d=(0,a.up)("FooterMain");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(n),(0,a.Wm)(r),(0,a.Wm)(d)],64)}var s=o(8773);const l={class:"news_section"};function n(e,t,o,i,s,n){const r=(0,a.up)("HeaderTitle"),d=(0,a.up)("LongVod"),u=(0,a.up)("ShortVod");return(0,a.wg)(),(0,a.iD)("section",l,[(0,a.Wm)(r,{"title-data":s.title,"sub-title-data":s.subTitle,"bg-image":s.bgImage},null,8,["title-data","sub-title-data","bg-image"]),(0,a.Wm)(d),(0,a.Wm)(u)])}var r=o(1433),d=o(7139);const u=e=>((0,a.dD)("data-v-02640a00"),e=e(),(0,a.Cn)(),e),p={class:"HomeLongVod"},c=u((()=>(0,a._)("div",{class:"TextCon"},[(0,a._)("span",{class:"title"}),(0,a._)("a",{class:"viewMore",href:"https://www.youtube.com/@tikintaka"},"VIEW MORE +")],-1))),v=["src"],m={class:"FirstText"},w=u((()=>(0,a._)("p",{class:"title"},"티키앤타카",-1))),h={class:"subTitle"},f={class:"date"},g=["href"],b=u((()=>(0,a._)("strong",null,"바로가기",-1))),y=[b],S={class:"imgCon"},_=["src"],E={class:"SecondText"},C=u((()=>(0,a._)("p",{class:"title"},"티키앤타카",-1))),k={class:"subTitle"},x={class:"SwiperBtn"};function A(e,t,o,i,s,l){const n=(0,a.up)("swiper-slide"),r=(0,a.up)("swiper");return(0,a.wg)(),(0,a.iD)("section",p,[c,(0,a.Wm)(r,{onSwiper:l.setThumbsSwiper,spaceBetween:10,thumbs:{swiper:s.thumbsSwiper2},modules:s.modules,allowTouchMove:!0,class:"FirstSwiper"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.SwiperImages,((e,t)=>((0,a.wg)(),(0,a.j4)(n,{class:(0,d.C_)("FirstCon slide"+t),key:t},{default:(0,a.w5)((()=>[(0,a._)("iframe",{borderRadius:"5px",src:s.videoUrl[e.num],allow:"geolocation",frameborder:"0",allowfullscreen:"",class:"YoutubePlayer"},null,8,v),(0,a._)("div",m,[w,(0,a._)("p",h,(0,d.zw)(e.subTitle),1),(0,a._)("p",f,(0,d.zw)(e.date),1),(0,a._)("a",{class:"GoToChannelBtn",href:e.link},y,8,g)])])),_:2},1032,["class"])))),128))])),_:1},8,["onSwiper","thumbs","modules"]),(0,a.Wm)(r,{onSwiper:l.setThumbsSwiper2,spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,modules:s.modules,pagination:!0,style:{"--swiper-navigation-color":"black","--swiper-pagination-color":"black"},breakpoints:{320:{slidesPerView:2.2,spaceBetween:10},360:{slidesPerView:2.5,spaceBetween:13},400:{slidesPerView:2.8,spaceBetween:14},500:{slidesPerView:3.3,spaceBetween:14},640:{slidesPerView:3.5,spaceBetween:15},760:{slidesPerView:4,spaceBetween:10},1080:{slidesPerView:5,spaceBetween:20}},class:"SecondSwiper"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.SwiperImages,((e,t)=>((0,a.wg)(),(0,a.j4)(n,{key:t,class:(0,d.C_)("SecondCon slide"+t),onClick:e=>l.clickThumbSwiper(t)},{default:(0,a.w5)((()=>[(0,a._)("div",S,[(0,a._)("img",{src:e.img,class:"SecondImg"},null,8,_)]),(0,a._)("div",E,[C,(0,a._)("p",k,(0,d.zw)(e.subTitle),1)])])),_:2},1032,["class","onClick"])))),128))])),_:1},8,["onSwiper","modules"]),(0,a._)("div",x,[(0,a._)("div",{class:"swiper-button-prev",onClick:t[0]||(t[0]=e=>l.prevThumbsSwiper())}),(0,a._)("div",{class:"swiper-button-next",onClick:t[1]||(t[1]=e=>l.nextThumbsSwiper())})])])}var B=o(4870),I=o(5800);o(7658);function P(e){return"object"===typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function T(e,t){const o=["__proto__","constructor","prototype"];Object.keys(t).filter((e=>o.indexOf(e)<0)).forEach((o=>{"undefined"===typeof e[o]?e[o]=t[o]:P(t[o])&&P(e[o])&&Object.keys(t[o]).length>0?t[o].__swiper__?e[o]=t[o]:T(e[o],t[o]):e[o]=t[o]}))}function j(e={}){return e.navigation&&"undefined"===typeof e.navigation.nextEl&&"undefined"===typeof e.navigation.prevEl}function N(e={}){return e.pagination&&"undefined"===typeof e.pagination.el}function O(e={}){return e.scrollbar&&"undefined"===typeof e.scrollbar.el}function M(e=""){const t=e.split(" ").map((e=>e.trim())).filter((e=>!!e)),o=[];return t.forEach((e=>{o.indexOf(e)<0&&o.push(e)})),o.join(" ")}function D(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}const H=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function L(e={},t=!0){const o={on:{}},a={},i={};T(o,I.ZP.defaults),T(o,I.ZP.extendedDefaults),o._emitClasses=!0,o.init=!1;const s={},l=H.map((e=>e.replace(/_/,""))),n=Object.assign({},e);return Object.keys(n).forEach((n=>{"undefined"!==typeof e[n]&&(l.indexOf(n)>=0?P(e[n])?(o[n]={},i[n]={},T(o[n],e[n]),T(i[n],e[n])):(o[n]=e[n],i[n]=e[n]):0===n.search(/on[A-Z]/)&&"function"===typeof e[n]?t?a[`${n[2].toLowerCase()}${n.substr(3)}`]=e[n]:o.on[`${n[2].toLowerCase()}${n.substr(3)}`]=e[n]:s[n]=e[n])})),["navigation","pagination","scrollbar"].forEach((e=>{!0===o[e]&&(o[e]={}),!1===o[e]&&delete o[e]})),{params:o,passedParams:i,rest:s,events:a}}function q({el:e,nextEl:t,prevEl:o,paginationEl:a,scrollbarEl:i,swiper:s},l){j(l)&&t&&o&&(s.params.navigation.nextEl=t,s.originalParams.navigation.nextEl=t,s.params.navigation.prevEl=o,s.originalParams.navigation.prevEl=o),N(l)&&a&&(s.params.pagination.el=a,s.originalParams.pagination.el=a),O(l)&&i&&(s.params.scrollbar.el=i,s.originalParams.scrollbar.el=i),s.init(e)}function U(e,t,o,a,i){const s=[];if(!t)return s;const l=e=>{s.indexOf(e)<0&&s.push(e)};if(o&&a){const e=a.map(i),t=o.map(i);e.join("")!==t.join("")&&l("children"),a.length!==o.length&&l("children")}const n=H.filter((e=>"_"===e[0])).map((e=>e.replace(/_/,"")));return n.forEach((o=>{if(o in e&&o in t)if(P(e[o])&&P(t[o])){const a=Object.keys(e[o]),i=Object.keys(t[o]);a.length!==i.length?l(o):(a.forEach((a=>{e[o][a]!==t[o][a]&&l(o)})),i.forEach((a=>{e[o][a]!==t[o][a]&&l(o)})))}else e[o]!==t[o]&&l(o)})),s}function R(e,t,o){void 0===e&&(e={});const a=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},s=(e,t)=>{Array.isArray(e)&&e.forEach((e=>{const o="symbol"===typeof e.type;"default"===t&&(t="container-end"),o&&e.children?s(e.children,t):!e.type||"SwiperSlide"!==e.type.name&&"AsyncComponentWrapper"!==e.type.name?i[t]&&i[t].push(e):a.push(e)}))};return Object.keys(e).forEach((t=>{if("function"!==typeof e[t])return;const o=e[t]();s(o,t)})),o.value=t.value,t.value=a,{slides:a,slots:i}}function z({swiper:e,slides:t,passedParams:o,changedParams:a,nextEl:i,prevEl:s,scrollbarEl:l,paginationEl:n}){const r=a.filter((e=>"children"!==e&&"direction"!==e&&"wrapperClass"!==e)),{params:d,pagination:u,navigation:p,scrollbar:c,virtual:v,thumbs:m}=e;let w,h,f,g,b,y,S,_;a.includes("thumbs")&&o.thumbs&&o.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(w=!0),a.includes("controller")&&o.controller&&o.controller.control&&d.controller&&!d.controller.control&&(h=!0),a.includes("pagination")&&o.pagination&&(o.pagination.el||n)&&(d.pagination||!1===d.pagination)&&u&&!u.el&&(f=!0),a.includes("scrollbar")&&o.scrollbar&&(o.scrollbar.el||l)&&(d.scrollbar||!1===d.scrollbar)&&c&&!c.el&&(g=!0),a.includes("navigation")&&o.navigation&&(o.navigation.prevEl||s)&&(o.navigation.nextEl||i)&&(d.navigation||!1===d.navigation)&&p&&!p.prevEl&&!p.nextEl&&(b=!0);const E=t=>{e[t]&&(e[t].destroy(),"navigation"===t?(e.isElement&&(e[t].prevEl.remove(),e[t].nextEl.remove()),d[t].prevEl=void 0,d[t].nextEl=void 0,e[t].prevEl=void 0,e[t].nextEl=void 0):(e.isElement&&e[t].el.remove(),d[t].el=void 0,e[t].el=void 0))};if(a.includes("loop")&&e.isElement&&(d.loop&&!o.loop?y=!0:!d.loop&&o.loop?S=!0:_=!0),r.forEach((e=>{if(P(d[e])&&P(o[e]))T(d[e],o[e]),"navigation"!==e&&"pagination"!==e&&"scrollbar"!==e||!("enabled"in o[e])||o[e].enabled||E(e);else{const t=o[e];!0!==t&&!1!==t||"navigation"!==e&&"pagination"!==e&&"scrollbar"!==e?d[e]=o[e]:!1===t&&E(e)}})),r.includes("controller")&&!h&&e.controller&&e.controller.control&&d.controller&&d.controller.control&&(e.controller.control=d.controller.control),a.includes("children")&&t&&v&&d.virtual.enabled&&(v.slides=t,v.update(!0)),a.includes("children")&&t&&d.loop&&(_=!0),w){const e=m.init();e&&m.update(!0)}h&&(e.controller.control=d.controller.control),f&&(!e.isElement||n&&"string"!==typeof n||(n=document.createElement("div"),n.classList.add("swiper-pagination"),e.el.shadowEl.appendChild(n)),n&&(d.pagination.el=n),u.init(),u.render(),u.update()),g&&(!e.isElement||l&&"string"!==typeof l||(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),e.el.shadowEl.appendChild(l)),l&&(d.scrollbar.el=l),c.init(),c.updateSize(),c.setTranslate()),b&&(e.isElement&&(i&&"string"!==typeof i||(i=document.createElement("div"),i.classList.add("swiper-button-next"),e.el.shadowEl.appendChild(i)),s&&"string"!==typeof s||(s=document.createElement("div"),s.classList.add("swiper-button-prev"),e.el.shadowEl.appendChild(s))),i&&(d.navigation.nextEl=i),s&&(d.navigation.prevEl=s),p.init(),p.update()),a.includes("allowSlideNext")&&(e.allowSlideNext=o.allowSlideNext),a.includes("allowSlidePrev")&&(e.allowSlidePrev=o.allowSlidePrev),a.includes("direction")&&e.changeDirection(o.direction,!1),(y||_)&&e.loopDestroy(),(S||_)&&e.loopCreate(),e.update()}function V(e,t,o){if(!o)return null;const i=e=>{let o=e;return e<0?o=t.length+e:o>=t.length&&(o-=t.length),o},s=e.value.isHorizontal()?{[e.value.rtlTranslate?"right":"left"]:`${o.offset}px`}:{top:`${o.offset}px`},{from:l,to:n}=o,r=e.value.params.loop?-t.length:0,d=e.value.params.loop?2*t.length:t.length,u=[];for(let a=r;a<d;a+=1)a>=l&&a<=n&&u.push(t[i(a)]);return u.map((t=>(t.props||(t.props={}),t.props.style||(t.props.style={}),t.props.swiperRef=e,t.props.style=s,(0,a.h)(t.type,{...t.props},t.children))))}const F=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())},Y={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(e,t){let{slots:o,emit:i}=t;const{tag:s,wrapperTag:l}=e,n=(0,B.iH)("swiper"),r=(0,B.iH)(null),d=(0,B.iH)(!1),u=(0,B.iH)(!1),p=(0,B.iH)(null),c=(0,B.iH)(null),v=(0,B.iH)(null),m={value:[]},w={value:[]},h=(0,B.iH)(null),f=(0,B.iH)(null),g=(0,B.iH)(null),b=(0,B.iH)(null),{params:y,passedParams:S}=L(e,!1);R(o,m,w),v.value=S,w.value=m.value;const _=()=>{R(o,m,w),d.value=!0};y.onAny=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];i(e,...o)},Object.assign(y.on,{_beforeBreakpoint:_,_containerClasses(e,t){n.value=t}});const E={...y};if(delete E.wrapperClass,c.value=new I.ZP(E),c.value.virtual&&c.value.params.virtual.enabled){c.value.virtual.slides=m.value;const e={cache:!1,slides:m.value,renderExternal:e=>{r.value=e},renderExternalUpdate:!1};T(c.value.params.virtual,e),T(c.value.originalParams.virtual,e)}function C(e){return y.virtual?V(c,e,r.value):(e.forEach(((e,t)=>{e.props||(e.props={}),e.props.swiperRef=c,e.props.swiperSlideIndex=t})),e)}return(0,a.ic)((()=>{!u.value&&c.value&&(c.value.emitSlidesClasses(),u.value=!0);const{passedParams:t}=L(e,!1),o=U(t,v.value,m.value,w.value,(e=>e.props&&e.props.key));v.value=t,(o.length||d.value)&&c.value&&!c.value.destroyed&&z({swiper:c.value,slides:m.value,passedParams:t,changedParams:o,nextEl:h.value,prevEl:f.value,scrollbarEl:b.value,paginationEl:g.value}),d.value=!1})),(0,a.JJ)("swiper",c),(0,a.YP)(r,(()=>{(0,a.Y3)((()=>{F(c.value)}))})),(0,a.bv)((()=>{p.value&&(q({el:p.value,nextEl:h.value,prevEl:f.value,paginationEl:g.value,scrollbarEl:b.value,swiper:c.value},y),i("swiper",c.value))})),(0,a.Jd)((()=>{c.value&&!c.value.destroyed&&c.value.destroy(!0,!1)})),()=>{const{slides:t,slots:i}=R(o,m,w);return(0,a.h)(s,{ref:p,class:M(n.value)},[i["container-start"],(0,a.h)(l,{class:D(y.wrapperClass)},[i["wrapper-start"],C(t),i["wrapper-end"]]),j(e)&&[(0,a.h)("div",{ref:f,class:"swiper-button-prev"}),(0,a.h)("div",{ref:h,class:"swiper-button-next"})],O(e)&&(0,a.h)("div",{ref:b,class:"swiper-scrollbar"}),N(e)&&(0,a.h)("div",{ref:g,class:"swiper-pagination"}),i["container-end"]])}}},W={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(e,t){let{slots:o}=t,i=!1;const{swiperRef:s}=e,l=(0,B.iH)(null),n=(0,B.iH)("swiper-slide"),r=(0,B.iH)(!1);function d(e,t,o){t===l.value&&(n.value=o)}(0,a.bv)((()=>{s&&s.value&&(s.value.on("_slideClass",d),i=!0)})),(0,a.Xn)((()=>{!i&&s&&s.value&&(s.value.on("_slideClass",d),i=!0)})),(0,a.ic)((()=>{l.value&&s&&s.value&&("undefined"!==typeof e.swiperSlideIndex&&(l.value.swiperSlideIndex=e.swiperSlideIndex),s.value.destroyed&&"swiper-slide"!==n.value&&(n.value="swiper-slide"))})),(0,a.Jd)((()=>{s&&s.value&&s.value.off("_slideClass",d)}));const u=(0,a.Fl)((()=>({isActive:n.value.indexOf("swiper-slide-active")>=0,isVisible:n.value.indexOf("swiper-slide-visible")>=0,isPrev:n.value.indexOf("swiper-slide-prev")>=0,isNext:n.value.indexOf("swiper-slide-next")>=0})));(0,a.JJ)("swiperSlide",u);const p=()=>{r.value=!0};return()=>(0,a.h)(e.tag,{class:M(`${n.value}`),ref:l,"data-swiper-slide-index":"undefined"===typeof e.virtualIndex&&s&&s.value&&s.value.params.loop?e.swiperSlideIndex:e.virtualIndex,onLoadCapture:p},e.zoom?(0,a.h)("div",{class:"swiper-zoom-container","data-swiper-zoom":"number"===typeof e.zoom?e.zoom:void 0},[o.default&&o.default(u.value),e.lazy&&!r.value&&(0,a.h)("div",{class:"swiper-lazy-preloader"})]):[o.default&&o.default(u.value),e.lazy&&!r.value&&(0,a.h)("div",{class:"swiper-lazy-preloader"})])}};var Z={name:"HomeLongVod",components:{Swiper:Y,SwiperSlide:W},data(){return{bgicon:o(7659),players:[],thumbsSwiper:null,thumbsSwiper2:null,SwiperNum:0,modules:[I.Rv,I.W_,I.o3,I.LW],videoUrl:["https://www.youtube.com/embed/TUjJRQY9ID8?rel=0&enablejsapi=1","https://www.youtube.com/embed/x5DLf4QyZ6E?rel=0&enablejsapi=1","https://www.youtube.com/embed/HRk4lVGqJmU?rel=0&enablejsapi=1","https://www.youtube.com/embed/RRi-BcWfPpE?rel=0&enablejsapi=1","https://www.youtube.com/embed/jIqfSoHX9cc?rel=0&enablejsapi=1","https://www.youtube.com/embed/xaYUG6kN3D0?rel=0&enablejsapi=1","https://www.youtube.com/embed/w5xwAalXSwQ?rel=0&enablejsapi=1","https://www.youtube.com/embed/p8VudkQVsEM?rel=0&enablejsapi=1","https://www.youtube.com/embed/ge9XkYY_rMA?rel=0&enablejsapi=1"],SwiperImages:[{img:o(2566),subTitle:"한준희가 직접 맞추는 피파4 아스날 낭만 스쿼드 l [응답하라 낭만피파 3화]",link:"https://www.youtube.com/watch?=TUjJRQY9ID8",date:"2023. 7. 23",num:0},{img:o(2951),subTitle:"장지현이 직접 만든 낭만 첼시 전술 l [응답하라 낭만피파 2화]",link:"https://www.youtube.com/watch?v=x5DLf4QyZ6E",date:"2023. 7. 19",num:1},{img:o(8704),subTitle:"장지현이 직접 맞추는 피파4 첼시 낭만 스쿼드 l [응답하라 낭만피파 1화]",link:"https://www.youtube.com/watch?v=HRk4lVGqJmU",date:"2023. 7. 16",num:2},{img:o(6120),subTitle:"한준희가 말하는 역대 최고의 조합들 l [피파의 모든 것 19화]",link:"https://www.youtube.com/watch?v=RRi-BcWfPpE",date:"2023. 7. 12",num:3},{img:o(4584),subTitle:"한준희가 말하는 최고의 듀오와 트리오 l [피파의 모든 것 18화]",link:"https://www.youtube.com/watch?v=jIqfSoHX9cc",date:"2023. 7. 9",num:4},{img:o(5883),subTitle:"임형철이 말하는 23토츠 공격수 티어리스트 l [피파의 모든 것 17화]",link:"https://www.youtube.com/watch?v=xaYUG6kN3D0",date:"2023. 7. 5",num:5},{img:o(1956),subTitle:"임형철이 말하는 23토츠 티어리스트 (수비수, 미드필더) l [피파의 모든 것 16화]",link:"https://www.youtube.com/watch?v=w5xwAalXSwQ",date:"2023. 7. 2",num:6},{img:o(2405),subTitle:"한준희가 말하는 모먼트 대비 아이콘 티어리스트 l [피파의 모든 것 15화]",link:"https://www.youtube.com/watch?v=p8VudkQVsEM",date:"2023. 6. 27",num:7},{img:o(3279),subTitle:"한준희가 말하는 출시하면 떡상 할 아이콘 더 모먼트 l [피파의 모든 것 14화]",link:"https://www.youtube.com/watch?v=ge9XkYY_rMA",date:"2023. 6. 25",num:8}]}},mounted(){let e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";let t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),console.log(this.players),window.onYouTubeIframeAPIReady=this.onYouTubeIframeAPIReady},methods:{setThumbsSwiper(e){this.thumbsSwiper=e,e.on("slideChange",(()=>{const t=this.players[e.previousIndex];console.log(this.players),t&&t.stopVideo&&t.stopVideo()}))},setThumbsSwiper2(e){this.thumbsSwiper2=e},clickThumbSwiper(e){this.SwiperNum=e,this.thumbsSwiper.slideTo(this.SwiperNum),this.thumbsSwiper2.slideTo(this.SwiperNum)},prevThumbsSwiper(){this.SwiperNum<=0||this.thumbsSwiper2&&this.thumbsSwiper&&(this.SwiperNum-=1,this.thumbsSwiper.slideTo(this.SwiperNum),this.thumbsSwiper2.slideTo(this.SwiperNum))},nextThumbsSwiper(){this.SwiperNum>=this.SwiperImages.length-1||this.thumbsSwiper2&&this.thumbsSwiper&&(this.SwiperNum+=1,this.thumbsSwiper.slideTo(this.SwiperNum),this.thumbsSwiper2.slideTo(this.SwiperNum))},onYouTubeIframeAPIReady(){this.$nextTick((()=>{const e=setInterval((()=>{if(window.YT&&window.YT.Player){clearInterval(e);const t=this.$el.querySelectorAll("iframe");for(let e=0;e<t.length;e++)this.players[e]=new YT.Player(t[e])}}),100)}))}}},X=o(89);const Q=(0,X.Z)(Z,[["render",A],["__scopeId","data-v-02640a00"]]);var J=Q;const G=e=>((0,a.dD)("data-v-e1ce285a"),e=e(),(0,a.Cn)(),e),$={class:"shortvod-section"},K={class:"short-con"},ee={class:"short-title"},te={class:"title"},oe={class:"title-text"},ae=["src"],ie=(0,a.uE)('<span class="sub-title" data-v-e1ce285a><p style="margin:0;" data-v-e1ce285a>중요한 장면만 담은</p><p style="margin:0;" data-v-e1ce285a>저희의 콘텐츠를 놓치지 마세요.</p></span><span class="sub-title-mobile" data-v-e1ce285a><p style="margin:0;" data-v-e1ce285a>짧은 영상으로 콘텐츠를 즐겨보세요.</p></span>',2),se={class:"swiper-container",ref:"swiperRef"},le={class:"swiper-wrapper"},ne=["onClick"],re={class:"img-con",style:{"border-radius":"5px"}},de=["src"],ue=G((()=>(0,a._)("div",{class:"swiper-scrollbar"},null,-1)));function pe(e,t,o,i,s,l){const n=(0,a.up)("ModalPopup");return(0,a.wg)(),(0,a.iD)("section",$,[(0,a._)("div",K,[(0,a._)("div",ee,[(0,a._)("div",null,[(0,a._)("p",te,[(0,a._)("span",oe,[(0,a._)("img",{src:s.shortLogo.src,class:"short-icon",style:{"padding-right":"8px"}},null,8,ae),(0,a.Uk)("쇼츠동영상 ")])]),ie])]),(0,a._)("div",se,[(0,a._)("div",le,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.long,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"vod-content swiper-slide",onClick:e=>l.openModal(t),key:t},[(0,a._)("div",re,[(0,a._)("img",{src:e.src,style:{width:"100%",height:"100%","object-fit":"cover","border-radius":"5px"}},null,8,de)])],8,ne)))),128))]),ue],512)]),(0,a.Wm)(n)])}var ce=o(9242);const ve={class:"modal"},me={class:"modal-content"},we=["src"],he={class:"modal-btn"};function fe(e,t,o,i,s,l){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",ve,[(0,a._)("div",me,[(0,a._)("span",{class:"close",onClick:t[0]||(t[0]=(...e)=>l.closeModal&&l.closeModal(...e))},"×"),e.shortsShowModal?((0,a.wg)(),(0,a.iD)("iframe",{key:0,class:"youtubeVod",width:"100%",height:"100%",style:{"border-radius":"0px 0px 5px 5px"},src:s.videoUrl[this.shortsVideoIndex],frameborder:"0",allowfullscreen:"",autoplay:""},null,8,we)):(0,a.kq)("",!0),(0,a._)("div",he,[(0,a._)("div",{class:"prev-btn",onClick:t[1]||(t[1]=e=>l.modalBtn(this.shortsVideoIndex-1))}),(0,a._)("div",{class:"next-btn",onClick:t[2]||(t[2]=e=>l.modalBtn(this.shortsVideoIndex+1))})])])],512)),[[ce.F8,e.shortsShowModal]])}var ge=o(65),be={name:"ShortsPopupModal",computed:{...(0,ge.Se)(["shortsVideoIndex","shortsShowModal"])},data(){return{videoUrl:["https://www.youtube.com/embed/b7D3C09UyP4?autoplay=1&mute=1","https://www.youtube.com/embed/k2IOXI9j270?autoplay=1&mute=1","https://www.youtube.com/embed/aLm0NkmQUy0?autoplay=1&mute=1","https://www.youtube.com/embed/opAfmk5S3us?autoplay=1&mute=1","https://www.youtube.com/embed/5BaWzofXFuE?autoplay=1&mute=1","https://www.youtube.com/embed/A7IPmKh1bOI?autoplay=1&mute=1","https://www.youtube.com/embed/AkwAI15UNgE?autoplay=1&mute=1","https://www.youtube.com/embed/X70MrarcM48?autoplay=1&mute=1","https://www.youtube.com/embed/Y135I3m4zhI?autoplay=1&mute=1"]}},methods:{...(0,ge.nv)(["setShortsShowModal","setShortsVideoNumber"]),closeModal(){this.setShortsShowModal(!1),document.body.classList.remove("modal-shorts-open")},modalBtn(e){this.setShortsVideoNumber(e);const t=document.querySelector(".prev-btn"),o=document.querySelector(".next-btn");e<=0?t.style.display="none":e>=this.videoUrl.length-1?o.style.display="none":(t.style.display="block",o.style.display="block")}},mounted(){}};const ye=(0,X.Z)(be,[["render",fe],["__scopeId","data-v-22fdf114"]]);var Se=ye,_e=o(1980),Ee=o(5073);I.ZP.use([I.W_,I.pt,I.LW]);var Ce={name:"HomeShortVod",components:{ModalPopup:Se},computed:{...(0,ge.Se)(["shortsVideoIndex","shortsShowModal"])},data(){return{showModal:!1,videoIndex:Number,vodState:!1,scrollLock:!1,shortLogo:{src:o(5684)},long:[{title:"쇼츠영상1",src:"https://i.ytimg.com/vi/YAcfoeHh7bQ/oar2.jpg?sqp=a-oaymwECJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBfHlZPUeUX3EpzZBSqZ_eU2I4C_A",desc:"youtube1",num:0},{title:"쇼츠영상2",src:"https://i.ytimg.com/vi/8Kpb0bdzq_A/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCtDmMM6oj-MvwAm9nDfFOzRV6B2g",desc:"youtube1",num:1},{title:"쇼츠영상3",src:"https://i.ytimg.com/vi/WPx8r7x7XsE/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDDuqeQ0X50GkI1pwCuHnMjO1Undw",desc:"youtube1",num:2},{title:"쇼츠영상4",src:"https://i.ytimg.com/vi/9fFpmmI_27o/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBTNtN2w5_0NOSZ0RsoaSZO4-Dekw",desc:"youtube1",num:3},{title:"쇼츠영상5",src:"https://i.ytimg.com/vi/0xOBt6woqnQ/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAU3z9l7Ch0BTPXCKLIF2atoxO3ig",desc:"youtube1",num:4},{title:"쇼츠영상6",src:"https://i.ytimg.com/vi/eRrHBp5_HCk/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBxopjMCwaKoxCCkcaes9tkzvL9vQ",desc:"youtube1",num:5},{title:"쇼츠영상7",src:"https://i.ytimg.com/vi/yHPNAzimxKk/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLC5ysOlg1QZhdawM9rxI2bvsJUVIA",desc:"youtube1",num:6},{title:"쇼츠영상8",src:"https://i.ytimg.com/vi/51no9Sw0Ik8/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLC1gaKCzG_Y9DHRMEw1v-sZhK7oNg",desc:"youtube1",num:7},{title:"쇼츠영상9",src:"https://i.ytimg.com/vi/UzmtT6wUys0/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLD07V14W_IGywZpoSEMFr-98reWIg",desc:"youtube1",num:8},{title:"쇼츠영상10",src:"https://i.ytimg.com/vi/yr351ZXsqYc/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLD07V14W_IGywZpoSEMFr-98reWIg",desc:"youtube1",num:9}]}},methods:{...(0,ge.nv)(["setShortsShowModal","setShortsVideoNumber"]),openModal(e){this.setShortsVideoNumber(e),this.setShortsShowModal(!0),document.body.classList.add("modal-shorts-open");const t=document.querySelector(".prev-btn"),o=document.querySelector(".next-btn");this.shortsVideoIndex<=0?t.style.display="none":this.shortsVideoIndex>=this.long.length-1?o.style.display="none":(t.style.display="block",o.style.display="block")}},setup(){const e=(0,B.iH)(null);return(0,a.bv)((()=>{e.value=new I.ZP(e.value,{direction:"horizontal",loop:!1,mousewheel:!1,slidesPerView:4,spaceBetween:35,speed:300,autoplay:{delay:3e3,disableOnInteraction:!1},scrollbar:{el:".swiper-scrollbar",hide:!1,draggable:!0},breakpoints:{1080:{slidesPerView:4,spaceBetween:35},760:{slidesPerView:3,spaceBetween:25},640:{slidesPerView:4,spaceBetween:20},320:{slidesPerView:2.5,spaceBetween:10}}}),_e.p8.registerPlugin(Ee.i);const t=_e.p8.timeline({paused:!0});_e.p8.timeline({scrollTrigger:{trigger:".shortvod-section",start:"top+=100px bottom",end:"+=50%",scrub:!0,onEnter:()=>{t.play()}}}),t.to(".title",{duration:.5,left:0,opacity:1},"start"),t.to(".sub-title",{duration:.5,left:0,opacity:1},"start+=.2"),t.to(".sub-title-mobile",{duration:.5,left:0,opacity:1},"start+=.2"),t.to(".swiper-container ",{duration:1,bottom:0,opacity:1},"start+=.4")})),{swiperRef:e}}};const ke=(0,X.Z)(Ce,[["render",pe],["__scopeId","data-v-e1ce285a"]]);var xe=ke,Ae={name:"SubProgram",components:{HeaderTitle:r.Z,LongVod:J,ShortVod:xe},data(){return{title:"프로그램",subTitle:"Program",bgImage:[o(3139),o(3217),o(3806)]}}};const Be=(0,X.Z)(Ae,[["render",n]]);var Ie=Be,Pe=o(5646),Te={name:"SubNewsPage",components:{Header:s.Z,Program:Ie,FooterMain:Pe.Z}};const je=(0,X.Z)(Te,[["render",i]]);var Ne=je},8773:function(e,t,o){o.d(t,{Z:function(){return C}});var a=o(3396),i=o(7139);const s=e=>((0,a.dD)("data-v-3ac7408d"),e=e(),(0,a.Cn)(),e),l={class:"nav"},n={class:"menu-list"},r={class:"logo-con"},d=["src"],u=["src"],p={class:"menu-li"},c={class:"menu-icon"},v=["href"],m=["src"],w=["href"],h=["src"],f=s((()=>(0,a._)("div",{class:"bar_con"},[(0,a._)("span",{class:"bar1 bar"}),(0,a._)("span",{class:"bar2 bar"}),(0,a._)("span",{class:"bar3 bar"})],-1))),g=[f];function b(e,t,o,s,f,b){const y=(0,a.up)("router-link"),S=(0,a.up)("Header"),_=(0,a.up)("Menu");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a._)("nav",l,[(0,a._)("ul",n,[(0,a._)("div",r,[e.isScrolledUp?((0,a.wg)(),(0,a.j4)(y,{key:0,to:"/",class:"logo"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.logo[0].mainLogo,alt:"logo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,d)])),_:1})):(0,a.kq)("",!0),e.isScrolledUp?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(y,{key:1,to:"/",class:"logo"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.logo[0].scrollLogo,alt:"scrolllogo",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,u)])),_:1}))]),(0,a._)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.menuList,((t,o)=>((0,a.wg)(),(0,a.iD)("li",{key:o,class:"list"},[(0,a.Wm)(y,{to:t.href,class:"list",style:(0,i.j5)(e.linkColorStyle)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.name),1)])),_:2},1032,["to","style"])])))),128))]),(0,a._)("div",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.menuIcon,((t,o)=>((0,a.wg)(),(0,a.iD)("li",{key:o},[e.isScrolledUp?((0,a.wg)(),(0,a.iD)("a",{key:0,href:t.href},[(0,a._)("img",{src:e.menuIcon[o].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,m)],8,v)):(0,a.kq)("",!0),e.isScrolledUp?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("a",{key:1,href:t.href},[(0,a._)("img",{src:e.scrollMenuIcon[o].src,alt:"icon",style:{"object-fit":"cover",width:"100%",height:"100%"}},null,8,h)],8,w))])))),128))]),(0,a._)("div",{class:"ham",ref:"hamElement",onClick:t[0]||(t[0]=(...e)=>b.stopScrolling&&b.stopScrolling(...e))},g,512)])])])),_:1}),e.isMenuState?((0,a.wg)(),(0,a.j4)(_,{key:0})):(0,a.kq)("",!0)],64)}var y=o(7275),S={name:"HeaderMain",components:{Menu:y.Z},data:()=>({isScrolledUp:!1,isMenuState:!1,scrollLock:!1,logo:[{mainLogo:o(3416),scrollLogo:o(7009)}],menuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:o(5555)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:o(9456)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official/",src:o(9511)}],menuList:[{name:"회사소개",href:"/intro"},{name:"서비스",href:"/studio"},{name:"프로그램",href:"/program"},{name:"회사소식",href:"/news"},{name:"문의하기",href:"/ask"}],scrollMenuIcon:[{name:"커뮤니티",href:"http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",src:o(2183)},{name:"유튜브",href:"https://www.youtube.com/@tikintaka",src:o(9245)},{name:"SNS",href:"https://www.instagram.com/tikintaka_official",src:o(9427)}]}),mounted(){this.$nextTick((()=>{const e=this.$refs.hamElement;e.addEventListener("click",(function(){this.classList.toggle("active")}))}))},beforeUnmount(){this.removeStopEvent()},methods:{stopScrolling(){this.scrollLock=!this.scrollLock,this.isMenuState=!this.isMenuState,this.scrollLock?(window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1})):this.removeStopEvent()},stopEvent(e){e.preventDefault(),e.stopPropagation()},removeStopEvent(){window.removeEventListener("wheel",this.stopEvent,{passive:!1}),window.removeEventListener("touchmove",this.stopEvent,{passive:!1})}}},_=o(89);const E=(0,_.Z)(S,[["render",b],["__scopeId","data-v-3ac7408d"]]);var C=E},1433:function(e,t,o){o.d(t,{Z:function(){return c}});var a=o(3396),i=o(7139);const s={class:"text-con"},l={class:"sub-title"},n={class:"main-title"};function r(e,t,o,r,d,u){return(0,a.wg)(),(0,a.iD)("div",{class:"title-text",style:(0,i.j5)({backgroundImage:`url(${d.currentBgImage})`})},[(0,a._)("div",s,[(0,a._)("span",l,(0,i.zw)(o.subTitleData),1),(0,a._)("span",n,(0,i.zw)(o.titleData),1)])],4)}var d={name:"SubTitle",props:{titleData:String,subTitleData:String,bgImage:Array},data(){return{currentBgImage:""}},methods:{handleResize(){const e=window.innerWidth;this.currentBgImage=e>1300?this.bgImage[0]:e>760?this.bgImage[1]:this.bgImage[2]}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},u=o(89);const p=(0,u.Z)(d,[["render",r],["__scopeId","data-v-0c3d4665"]]);var c=p},3217:function(e,t,o){e.exports=o.p+"static/img/contact1300.ec5d47f0.svg"},3139:function(e,t,o){e.exports=o.p+"static/img/contact1920.d0df76a8.svg"},3806:function(e,t,o){e.exports=o.p+"static/img/contact760.ddf9b6e1.svg"},5684:function(e,t,o){e.exports=o.p+"static/img/shortYoutube.547ca1d6.svg"},2566:function(e,t,o){e.exports=o.p+"static/img/thumbnail01.258e9091.jpg"},2951:function(e,t,o){e.exports=o.p+"static/img/thumbnail02.8766a96d.webp"},8704:function(e,t,o){e.exports=o.p+"static/img/thumbnail03.c6d54baa.jpg"},6120:function(e,t,o){e.exports=o.p+"static/img/thumbnail04.c4337e69.jpg"},4584:function(e,t,o){e.exports=o.p+"static/img/thumbnail05.5e640b3f.webp"},5883:function(e,t,o){e.exports=o.p+"static/img/thumbnail06.7b7e0f24.jpg"},1956:function(e,t,o){e.exports=o.p+"static/img/thumbnail07.252ef62e.webp"},2405:function(e,t,o){e.exports=o.p+"static/img/thumbnail08.3f7a1452.jpg"},3279:function(e,t,o){e.exports=o.p+"static/img/thumbnail09.9ccd6469.jpg"}}]);
//# sourceMappingURL=896.18701b38.js.map