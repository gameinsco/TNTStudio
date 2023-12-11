"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[116],{1433:function(e,t,i){i.d(t,{Z:function(){return p}});var s=i(3396),n=i(7139);const m={class:"text-con"},l={class:"sub-title"},u={class:"main-title"};function o(e,t,i,o,c,a){return(0,s.wg)(),(0,s.iD)("div",{class:"title-text",style:(0,n.j5)({backgroundImage:`url(${c.currentBgImage})`})},[(0,s._)("div",m,[(0,s._)("span",l,(0,n.zw)(i.subTitleData),1),(0,s._)("span",u,(0,n.zw)(i.titleData),1)])],4)}var c={name:"SubTitle",props:{titleData:String,subTitleData:String,bgImage:Array},data(){return{currentBgImage:""}},methods:{handleResize(){const e=window.innerWidth;this.currentBgImage=e>1300?this.bgImage[0]:e>760?this.bgImage[1]:this.bgImage[2]}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},a=i(89);const r=(0,a.Z)(c,[["render",o],["__scopeId","data-v-0c3d4665"]]);var p=r},7205:function(e,t,i){i.r(t),i.d(t,{default:function(){return He}});var s=i(3396),n=i(7139),m=i(5101),l=i(1222),u=i(6824),o=i(8521),c=i(624),a=i(165);const r=e=>((0,s.dD)("data-v-6e144488"),e=e(),(0,s.Cn)(),e),p={class:"news_section"},h={class:"title-con"},d={class:"title"},q={class:"container"},g={class:"img-con"},S=["src"],b=r((()=>(0,s._)("div",{class:"img-info"},null,-1))),E=r((()=>(0,s._)("div",{class:"descript"},[(0,s._)("p",{class:"intro"},"장소 소개"),(0,s._)("p",null,"- 1인 크리에이터가 콘텐츠를 촬영할 수 있는 공간입니다."),(0,s._)("p",null," - 고사양의 PC와 웹캠, 마이크, 스위치 등 최신 1인미디어 방송 장비를 갖추고 있습니다. "),(0,s._)("p",null," - 유튜브, 트위치 등 라이브 스트리밍과 녹화 모두 진행하실 수 있습니다. ")],-1))),T={class:"info-con"},v={class:"info"},f={class:"title-info"},C={class:"title"},_={class:"price"},P=r((()=>(0,s._)("span",{style:{"font-size":"14"}}," / 시간",-1))),k={class:"price"},x={style:{"font-size":"14px"}},w={style:{"text-align":"right",display:"flex","align-items":"flex-end"}},N=r((()=>(0,s._)("hr",null,null,-1))),H={class:"schedule-con"},y=r((()=>(0,s._)("p",{class:"title"},"스케줄",-1))),D={class:"date-picker"},L={key:0,class:"time-con"},z=r((()=>(0,s._)("p",{class:"time-title",style:{"margin-top":"20px"}},"시간",-1))),A=r((()=>(0,s._)("p",{class:"sub-title"},"최소 3시간 이상",-1))),F={key:0,class:"time-box"},I={class:"time-apply",style:{display:"flex","justify-content":"right",margin:"8px 0px"}},V={class:"equipment-con"},M=r((()=>(0,s._)("p",{class:"equipment-title",style:{"margin-top":"20px"}},"장비",-1))),W=r((()=>(0,s._)("p",{class:"sub-title"},"필요하신 장비를 선택해 주세요",-1))),U={key:0},B={class:"sub-title"},R={class:"equipment-option-title"},j={class:"equipment-option-calc"},Z={class:"option-price",style:{}},$=["onClick"],K={class:"option-count"},O=["onClick"],Y=r((()=>(0,s._)("p",{class:"num-title"},"총인원",-1))),G={class:"sub-title"},J={class:"num-box",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Q={class:"",style:{display:"flex",padding:"12px","align-items":"center"}},X={style:{margin:"0px 30px","font-size":"16px"}},ee={key:1,class:"price-con"},te=r((()=>(0,s._)("hr",{style:{"margin-bottom":"20px"}},null,-1))),ie={class:"price-box"},se={class:"price-text"},ne={class:"price-value"},me={class:"price-box"},le={class:"price-text"},ue={class:"price-value"},oe={class:"price-box"},ce=r((()=>(0,s._)("span",{class:"price-text"}," 장비 가격 ",-1))),ae={class:"price-value"},re=r((()=>(0,s._)("hr",{style:{margin:"20px 0px"}},null,-1))),pe={class:"price-box"},he=r((()=>(0,s._)("span",{class:"total-text"},"총 가격",-1))),de={class:"total-value"},qe={class:"btn-box"},ge={class:"btn"},Se=r((()=>(0,s._)("span",{class:"btn-text"},"목록으로",-1)));function be(e,t,i,r,be,Ee){const Te=(0,s.up)("HeaderNav"),ve=(0,s.up)("HeaderTitle"),fe=(0,s.up)("router-link"),Ce=(0,s.up)("Datepicker"),_e=(0,s.up)("DialogReserve"),Pe=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("section",p,[(0,s.Wm)(Te),(0,s.Wm)(ve,{"title-data":be.title,"bg-image":be.bgImage},null,8,["title-data","bg-image"]),(0,s._)("div",h,[(0,s._)("span",d,(0,n.zw)(e.rooms[2].title),1)]),(0,s._)("div",q,[(0,s._)("div",g,[(0,s._)("img",{src:e.rooms[2].imageSrc,class:"img",alt:"studio"},null,8,S),b,E]),(0,s._)("div",T,[(0,s._)("div",v,[(0,s._)("div",f,[(0,s._)("div",null,[(0,s._)("p",C,(0,n.zw)(e.rooms[2].title),1),(0,s._)("p",_,[(0,s.Uk)((0,n.zw)(e.rooms[2].price.toLocaleString())+"원 ",1),P]),(0,s._)("p",k,[(0,s._)("span",x," ( 인원수 : 최소 "+(0,n.zw)(e.rooms[2].numMin)+"인 ~ 최대 "+(0,n.zw)(e.rooms[2].numMax)+"인) ",1)])]),(0,s._)("div",w,[(0,s.Wm)(fe,{to:"/CalendarReservate"},{default:(0,s.w5)((()=>[(0,s.Wm)(m.T,{class:"title btn"},{default:(0,s.w5)((()=>[(0,s.Uk)("스튜디오 예약 현황")])),_:1})])),_:1})])]),N,(0,s._)("div",H,[y,(0,s._)("div",D,[(0,s.Wm)(Ce,{value:be.date,modelValue:be.date,"onUpdate:modelValue":t[0]||(t[0]=e=>be.date=e),onInput:Ee.updateDate,format:"yyyy-MM-dd",placeholder:"날짜를 선택해 주세요","disabled-dates":be.disableDate},null,8,["value","modelValue","onInput","disabled-dates"])]),be.date?((0,s.wg)(),(0,s.iD)("div",L,[z,A,(0,s.Wm)(a.h,{onClick:t[1]||(t[1]=e=>be.timeDialog=!be.timeDialog),variant:"outlined",label:"시간을 선택해 주세요",readonly:"",class:"sub-title time-input",modelValue:be.timeString,"onUpdate:modelValue":t[2]||(t[2]=e=>be.timeString=e)},null,8,["modelValue"]),be.timeDialog?((0,s.wg)(),(0,s.iD)("div",F,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(24,(e=>(0,s.Wm)(m.T,{key:e,class:(0,n.C_)(["time-btn",{"selected-time":Ee.isTimeSelected(e),"block-time":Ee.BlockTimeSet(e)}]),onClick:t=>Ee.setTime(e)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(e<10?"0"+e:e)+":00 ",1)])),_:2},1032,["onClick","class"]))),64)),(0,s._)("div",I,[(0,s.Wm)(m.T,{style:{margin:"0px 4px"},onClick:Ee.confirmSelectedTime},{default:(0,s.w5)((()=>[(0,s.Uk)("확인")])),_:1},8,["onClick"]),(0,s.Wm)(m.T,{style:{margin:"0px 4px"},onClick:Ee.cancelSelectedTime},{default:(0,s.w5)((()=>[(0,s.Uk)("취소")])),_:1},8,["onClick"])])])):(0,s.kq)("",!0)])):(0,s.kq)("",!0),(0,s._)("div",V,[M,W,(0,s.Wm)(u.o,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(be.EquipmentType,((e,t)=>((0,s.wg)(),(0,s.j4)(o.D,{class:"check-box v-col-6",xs:"6",sm:"6",md:"6",lg:"3",xl:"3",xxl:"3",key:t,onClick:i=>Ee.isEquipmentSelected(t,e[1])},{default:(0,s.w5)((()=>[(0,s.Wm)(l.x,{modelValue:e[1],"onUpdate:modelValue":t=>e[1]=t,label:e[0]},null,8,["modelValue","onUpdate:modelValue","label"])])),_:2},1032,["onClick"])))),128))])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(be.Equipments,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"equipment-input",key:t},[be.EquipmentType[t][1]?((0,s.wg)(),(0,s.iD)("div",U,[(0,s._)("p",B,(0,n.zw)(Ee.setEquipmentType(t))+"를 선택해 주세요 ",1),(0,s.Wm)(c.rL,{modelValue:be.Selected[t],"onUpdate:modelValue":[e=>be.Selected[t]=e,e=>Ee.setEquipmentSelected(be.Selected[t],t)],items:e,label:Ee.setEquipmentType(t)+"를 선택해 주세요",variant:"outlined",multiple:""},null,8,["modelValue","onUpdate:modelValue","items","label"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(be.Selected[t],((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"equipment-option-box",key:t},[(0,s._)("span",R,(0,n.zw)(e),1),(0,s._)("div",j,[(0,s._)("span",Z,(0,n.zw)(this.itemPrice(e).toLocaleString())+"원 * "+(0,n.zw)(this.timeHour)+" 시간 ",1),(0,s._)("span",{class:"mdi mdi-minus-circle-outline minus-btn",onClick:t=>Ee.minusBtnEquipment(Ee.EquipmentCountIdx(e))},null,8,$),(0,s._)("div",K,(0,n.zw)(this.SelectedEquipmentCount.equipmentCount[Ee.EquipmentCountIdx(e)]),1),(0,s._)("span",{class:"mdi mdi-plus-circle-outline plus-btn",onClick:t=>Ee.plusBtnEquipment(Ee.EquipmentCountIdx(e))},null,8,O)])])))),128))])):(0,s.kq)("",!0)])))),128))]),Y,(0,s._)("p",G," 인원 초과시 인당 "+(0,n.zw)(this.rooms[2].numPrice.toLocaleString())+"원 추가 비용 발생 ",1),(0,s.Wm)(a.h,{label:"인원수를 입력해 주세요.","persistent-hint":"",variant:"outlined",class:"sub-title people-num",modelValue:be.num,"onUpdate:modelValue":t[3]||(t[3]=e=>be.num=e),readonly:""},null,8,["modelValue"]),(0,s._)("div",J,[(0,s.Uk)(" 총인원 수 "),(0,s._)("div",Q,[(0,s._)("span",{class:"mdi mdi-minus-circle-outline",style:{"font-size":"30px",color:"rgb(90, 90, 90)",cursor:"pointer"},onClick:t[4]||(t[4]=(...e)=>Ee.minusBtn&&Ee.minusBtn(...e))}),(0,s._)("div",X,(0,n.zw)(be.num),1),(0,s._)("span",{class:"mdi mdi-plus-circle-outline",style:{"font-size":"30px",color:"rgb(90, 90, 90)",cursor:"pointer"},onClick:t[5]||(t[5]=(...e)=>Ee.plusBtn&&Ee.plusBtn(...e))})])]),0!=be.timeHour?((0,s.wg)(),(0,s.iD)("div",ee,[te,(0,s._)("div",ie,[(0,s._)("span",se,"스튜디오 "+(0,n.zw)(this.timeHour)+"시간 x "+(0,n.zw)(e.rooms[2].price.toLocaleString())+"원 ",1),(0,s._)("span",ne,(0,n.zw)(this.roomPrice.toLocaleString())+"원 ",1)]),(0,s._)("div",me,[(0,s._)("span",le," 인원수 "+(0,n.zw)(this.num)+"인 x "+(0,n.zw)(e.rooms[2].numPrice.toLocaleString())+"원 ( 최소 "+(0,n.zw)(e.rooms[2].numMin)+"인 ~ 최대 "+(0,n.zw)(e.rooms[2].numMax)+"인) ",1),(0,s._)("span",ue,(0,n.zw)(this.numPrice.toLocaleString())+"원 ",1)]),(0,s._)("div",oe,[ce,(0,s._)("span",ae,(0,n.zw)(this.equipmentPrice.toLocaleString())+"원 ",1)]),re,(0,s._)("div",pe,[he,(0,s._)("span",de,(0,n.zw)(this.totalPrice.toLocaleString())+"원",1)])])):(0,s.kq)("",!0),(0,s.Wm)(_e,{date:be.date,"time-string":be.timeString,num:be.num,"total-price":be.totalPrice,"time-list":be.timeList,camera:be.Selected.camera,monitor:be.Selected.monitor,micAudio:be.Selected.micAudio,lightSubFilm:be.Selected.lightSubFilm,equipmentNum:be.Selected.equipmentNum,roomTitle:e.rooms[2].title,roomNum:e.rooms[2].studioNum,selectedEquipmentCount:be.SelectedEquipmentCount.equipmentCount},null,8,["date","time-string","num","total-price","time-list","camera","monitor","micAudio","lightSubFilm","equipmentNum","roomTitle","roomNum","selectedEquipmentCount"])])])])]),(0,s._)("div",qe,[(0,s._)("div",ge,[(0,s.Wm)(fe,{to:{path:"/ask",query:{category:"스튜디오"}}},{default:(0,s.w5)((()=>[Se])),_:1})])]),(0,s.Wm)(Pe)])}i(7658);var Ee=i(5254),Te=i(1433),ve=i(5646),fe=i(4255),Ce=i(65),_e=i(2536),Pe=i(7387),ke=i.n(Pe),xe={name:"ReservateDetail1",components:{HeaderNav:Ee.Z,Footer:ve.Z,HeaderTitle:Te.Z,DialogReserve:fe.Z,Datepicker:_e.Z},computed:{...(0,Ce.Se)(["rooms","hostAddressName","equipments"])},data(){const e=new Date;return e.setDate(e.getDate()-1),{title:"예약하기",bgImage:[i(4175),i(5172),i(9724)],studioImage:[i(7626)],dialog:!1,disableDate:{to:e,from:null},date:null,timeDialog:!1,timeList:[],timeString:"00:00 - 00:00, 0시간",timeHour:0,selectedStartTime:0,selectedEndTime:0,EquipmentType:{camera:["카메라",!1],monitor:["모니터",!1],micAudio:["마이크&오디오",!1],lightSubFilm:["조명&촬영보조",!1]},Equipments:{camera:[],monitor:[],micAudio:[],lightSubFilm:[]},Selected:{camera:[],monitor:[],micAudio:[],lightSubFilm:[],equipmentNum:[]},SelectedEquipmentCount:{maxEquipmentCount:[],equipmentCount:[],equipmentRemainCount:[]},camera:[],num:0,equipmentPrice:0,numPrice:0,totalPrice:0,roomPrice:0,blockTimeList:[],checkAccount:!1,disableEquipmentName:[],disableEquipmentNum:[]}},mounted(){this.setEquipmentValue(),this.setSelectEquipmentValue()},watch:{Selected(e,t){console.log(e,t)}},methods:{setTime(e){0===this.selectedStartTime?(this.selectedStartTime=e,this.selectedEndTime=e+3):this.selectedEndTime=e,this.selectedEndTime>this.selectedStartTime&&this.selectedEndTime<=this.selectedStartTime+3&&(this.selectedEndTime=this.selectedStartTime+3),this.selectedEndTime<=this.selectedStartTime&&(this.selectedStartTime=0,this.selectedEndTime=0),this.selectedStartTime>=this.blockTimeList[0]-3&&this.selectedStartTime<=this.blockTimeList[this.blockTimeList.length-1]&&(alert("최소 이용 시간 및 이용 중인 시간대를 확인해 주세요."),this.selectedStartTime=0,this.selectedEndTime=0),this.selectedEndTime>=this.blockTimeList[0]&&this.selectedEndTime<=this.blockTimeList[this.blockTimeList.length-1]&&(alert("이용 중인 시간대를 확인해 주세요."),this.selectedStartTime=0,this.selectedEndTime=0),this.selectedStartTime<=this.blockTimeList[0]&&this.selectedEndTime>this.blockTimeList[0]&&(alert("이용 중인 시간대를 확인해 주세요."),this.selectedStartTime=0,this.selectedEndTime=0),this.selectedStartTime>21&&(alert("최소 이용 시간을 확인해 주세요."),this.selectedStartTime=0,this.selectedEndTime=0),this.confirmSelectedTime(!1),console.log("timeList: "+this.timeList),this.resetEquipmentPrice(),this.resetEquipmentData(),this.resetSelectEquipment(),this.getDisableEquipment()},isTimeSelected(e){if(this.timeHour=this.selectedEndTime-this.selectedStartTime,this.timeString=`${this.selectedStartTime}:00 - ${this.selectedEndTime}:00 , ${this.timeHour}시간`,0!==this.selectedStartTime&&0!==this.selectedEndTime)return e>=this.selectedStartTime&&e<=this.selectedEndTime},BlockTimeSet(e){return this.blockTimeList.includes(e)},confirmSelectedTime(e){const t=this.selectedEndTime-this.selectedStartTime;if(0===this.timeList.length)for(let i=0;i<=t;i++){const e=this.selectedStartTime+i,t=(e<10?"0"+e:e)+":00";this.timeList.push(t)}else{this.timeList=[];for(let e=0;e<=t;e++){const t=this.selectedStartTime+e,i=(t<10?"0"+t:t)+":00";this.timeList.push(i)}}e&&(this.timeDialog=!1),console.log("timeList: "+this.timeList),this.PriceCalc()},cancelSelectedTime(){this.timeList=[],this.timeString="00:00 - 00:00, 0시간",this.timeHour=0,this.selectedStartTime=0,this.selectedEndTime=0,this.timeDialog=!1},resetEquipmentData(){for(var e=["camera","monitor","micAudio","lightSubFilm"],t=0;t<e.length;t++)this.Equipments[e[t]]=[];this.setEquipmentValue()},resetEquipmentPrice(){this.Selected.camera=[],this.Selected.micAudio=[],this.Selected.lightSubFilm=[],this.Selected.monitor=[],this.equipmentPrice=0,this.equipmentPrice<=0&&(this.equipmentPrice=0)},setEquipmentValue(){if(this.equipments){for(var e=0;e<this.equipments.camera.length;e++)this.Equipments.camera.push(this.equipments.camera[e].name);for(var t=0;t<this.equipments.monitor.length;t++)this.Equipments.monitor.push(this.equipments.monitor[t].name);for(var i=0;i<this.equipments.MicAudio.length;i++)this.Equipments.micAudio.push(this.equipments.MicAudio[i].name);for(var s=0;s<this.equipments.LightSubFilm.length;s++)this.Equipments.lightSubFilm.push(this.equipments.LightSubFilm[s].name)}},updateDate(e){Array.isArray(e)&&(e=e[0]),this.date=this.date.toISOString().slice(0,10),this.disableEquipmentNum=[],this.cancelSelectedTime(),this.resetEquipmentPrice(),this.resetEquipmentData(),this.resetSelectEquipment(),this.getDisabledate()},setEquipmentType(e){return"camera"===e?"카메라":"monitor"===e?"모니터":"micAudio"===e?"마이크&오디오":"lightSubFilm"===e?"조명&촬영보조":void 0},resetSelectEquipment(){this.SelectedEquipmentCount.equipmentCount=[],this.SelectedEquipmentCount.maxEquipmentCount=[],this.SelectedEquipmentCount.equipmentRemainCount=[],this.setSelectEquipmentValue()},setSelectEquipmentValue(){for(var e=0;e<24;e++)this.SelectedEquipmentCount.equipmentCount.push(1),this.SelectedEquipmentCount.maxEquipmentCount.push(0),this.SelectedEquipmentCount.equipmentRemainCount.push(0)},setEquipmentSelected(e,t){console.log(this.Selected);const i={camera:"camera",monitor:"monitor",micAudio:"MicAudio",lightSubFilm:"LightSubFilm"},s=i[t];let n;this.equipments[s]?(this.equipments[s].forEach((t=>{e.includes(t.name)&&!this.Selected.equipmentNum.includes(t.equipmentNum)?this.Selected.equipmentNum.push(t.equipmentNum):!e.includes(t.name)&&this.Selected.equipmentNum.includes(t.equipmentNum)&&(this.Selected.equipmentNum=this.Selected.equipmentNum.filter((e=>e!==t.equipmentNum)),n=t.equipmentNum)})),this.Selected.equipmentNum=[...new Set(this.Selected.equipmentNum)],this.equipmentCalc(n)):console.warn(`Equipment type "${t}" not found.`)},itemPrice(e){for(var t=["camera","monitor","MicAudio","LightSubFilm"],i=0;i<t.length;i++)for(var s=0;s<this.equipments[t[i]].length;s++)if(e===this.equipments[t[i]][s].name)return this.equipments[t[i]][s].price},plusBtnEquipment(e){var t=this.SelectedEquipmentCount.equipmentCount[e],i=this.SelectedEquipmentCount.maxEquipmentCount[e];t<i?(t+=1,this.equipmentDiscountCalc(e+1,this.timeHour,"plus")):t>=i&&(t=i),0!=this.SelectedEquipmentCount.equipmentRemainCount[e]&&t>=this.SelectedEquipmentCount.equipmentRemainCount[e]&&(t=this.SelectedEquipmentCount.equipmentRemainCount[e]),this.SelectedEquipmentCount.equipmentCount[e]=t,this.PriceCalc()},minusBtnEquipment(e){var t=this.SelectedEquipmentCount.equipmentCount[e];t>1?(t-=1,this.equipmentDiscountCalc(e+1,this.timeHour,"minus")):t=1,this.SelectedEquipmentCount.equipmentCount[e]=t,this.PriceCalc()},equipmentDiscountCalc(e,t,i){const s={camera:[1,2,3,4,5,6,7,8,9,10,11,13,14,15],monitor:[12],MicAudio:[16,17,18,19,20],LightSubFilm:[21,22,23,24]};let n=Object.keys(s).find((t=>s[t].includes(e)));var m=this.equipments[n];if(m)for(var l=0;l<m.length;l++)if(m[l].equipmentNum===e){const e=m[l].PriceToHour3,s=m[l].PriceToHour6,n=m[l].PriceToHour12;var u=m[l].price;"plus"===i&&(t>=3&&t<6?this.equipmentPrice+=e+u*(this.timeHour-3):t>=6&&t<12?this.equipmentPrice+=s+u*(this.timeHour-6):t>=12&&(this.equipmentPrice+=n+u*(this.timeHour-12)),console.log("PlusPrice: "+this.equipmentPrice)),"minus"===i&&(t>=3&&t<6?this.equipmentPrice-=e+u*(this.timeHour-3):t>=6&&t<12?this.equipmentPrice-=s+u*(this.timeHour-6):t>=12&&(this.equipmentPrice-=n+u*(this.timeHour-12)),console.log("minusPrice: "+this.equipmentPrice))}},EquipmentCountIdx(e){for(var t,i,s=["camera","monitor","MicAudio","LightSubFilm"],n=0;n<s.length;n++)for(var m=0;m<this.equipments[s[n]].length;m++)if(e===this.equipments[s[n]][m].name)return i=this.equipments[s[n]][m].count,t=this.equipments[s[n]][m].equipmentNum-1,this.SelectedEquipmentCount.maxEquipmentCount[t]=i,console.log("equipmentCount : "+this.SelectedEquipmentCount.equipmentCount),t},isEquipmentSelected(e,t){t=!t;const i={camera:[1,2,3,4,5,6,7,8,9,10,11,13,14,15],monitor:[12],micAudio:[16,17,18,19,20],lightSubFilm:[21,22,23,24]};if(console.log("type : "+e),!1===t&&(console.log(i[e]),i[e])){"micAudio"===e&&(e="MicAudio"),"lightSubFilm"===e&&(e="LightSubFilm"),console.log(this.SelectedEquipmentCount);for(var s=0;s<this.equipments[e].length;s++)for(var n=0;n<this.Selected.equipmentNum.length;n++)if(this.equipments[e][s].equipmentNum===this.Selected.equipmentNum[n]&&(this.timeHour>=3&&this.timeHour<6?this.equipmentPrice-=this.equipments[e][s].PriceToHour3+this.equipments[e][s].price*(this.timeHour-3):this.timeHour>=6&&this.timeHour<12?this.equipmentPrice-=this.equipments[e][s].PriceToHour6+this.equipments[e][s].price*(this.timeHour-6):this.timeHour>=12&&(this.equipmentPrice-=this.equipments[e][s].PriceToHour12+this.equipments[e][s].price*(this.timeHour-12)),this.SelectedEquipmentCount.equipmentCount[this.Selected.equipmentNum[n]-1]>1)){for(var m=1;m<this.SelectedEquipmentCount.equipmentCount[this.Selected.equipmentNum[n]-1];m++)this.timeHour>=3&&this.timeHour<6?this.equipmentPrice-=this.equipments[e][s].PriceToHour3+this.equipments[e][s].price*(this.timeHour-3):this.timeHour>=6&&this.timeHour<12?this.equipmentPrice-=this.equipments[e][s].PriceToHour6+this.equipments[e][s].price*(this.timeHour-6):this.timeHour>=12&&(this.equipmentPrice-=this.equipments[e][s].PriceToHour12+this.equipments[e][s].price*(this.timeHour-12));this.SelectedEquipmentCount.equipmentCount[this.Selected.equipmentNum[n]-1]=1}"MicAudio"===e&&(e="micAudio"),"LightSubFilm"===e&&(e="lightSubFilm"),this.Selected.equipmentNum=this.Selected.equipmentNum.filter((t=>!i[e].includes(t))),this.disableEquipmentNum=this.disableEquipmentNum.filter((t=>!i[e].includes(t))),this.Selected[e]=[],this.PriceCalc()}},minusBtn(){this.num--,this.num<=0&&(this.num=0),this.PriceCalc()},plusBtn(){this.num++,this.num>=this.rooms[2].numMax&&(this.num=this.rooms[2].numMax),this.PriceCalc()},PriceCalc(){this.numPrice=this.rooms[2].numPrice*(this.num-this.rooms[2].numMin),this.num<=this.rooms[2].numMin&&(this.numPrice=0),this.equipmentPrice<=0&&(this.equipmentPrice=0),this.rooomCalc(),this.totalPrice=this.roomPrice+this.equipmentPrice+this.numPrice},rooomCalc(){const e=this.rooms[2].PriceToHour3,t=this.rooms[2].PriceToHour6,i=this.rooms[2].PriceToHour12;var s=this.rooms[2].price;this.timeHour>=3&&this.timeHour<6?this.roomPrice=e+s*(this.timeHour-3):this.timeHour>=6&&this.timeHour<12?this.roomPrice=t+s*(this.timeHour-6):this.timeHour>=12&&(this.roomPrice=i+s*(this.timeHour-12))},equipmentCalc(e){const t={camera:[1,2,3,4,5,6,7,8,9,10,11,13,14,15],monitor:[12],micAudio:[16,17,18,19,20],lightSubFilm:[21,22,23,24]};var i="";if(this.Selected.equipmentNum.length>0&&!e)for(var s=0;s<=this.Selected.equipmentNum.length-1;s++){let e=this.Selected.equipmentNum[s];console.log("equipment: "+this.Selected.equipmentNum[s]);let n=Object.keys(t).find((i=>t[i].includes(e)));if(n)switch(n){case"micAudio":i="MicAudio";break;case"lightSubFilm":i="LightSubFilm";break;default:i=n}}else{let s=Object.keys(t).find((i=>t[i].includes(e)));if(s)switch(s){case"micAudio":i="MicAudio";break;case"lightSubFilm":i="LightSubFilm";break;default:i=s}}if(this.equipments[i])for(var n=0;n<this.equipments[i].length;n++){let t=this.Selected.equipmentNum[this.Selected.equipmentNum.length-1];this.equipments[i][n].equipmentNum!==t||e?e?this.equipments[i][n].equipmentNum===e&&(this.equipmentDiscountCalc(e,this.timeHour,"minus"),this.PriceCalc(),console.log("취소 가격"+this.equipments[i][n].price)):this.equipments[i][n].equipmentNum===e&&(this.equipmentDiscountCalc(e,this.timeHour,"minus"),this.PriceCalc(),console.log("마지막 항목 취소 가격"+this.equipments[i][n].price)):(this.equipmentDiscountCalc(t,this.timeHour,"plus"),this.PriceCalc(),console.log("장비 "+this.equipments[i][n].price))}console.log("총 가격"+this.equipmentPrice)},dateInsert(e){this.blockTimeList=[];for(var t=0;t<e.length;t++)1==e[t].state&&this.blockTimeList.push(parseInt(e[t].time))},getDisabledate(){ke().ajax({url:this.hostAddressName+"/studio/reserve/"+this.rooms[2].studioNum+"/"+this.date,method:"GET",type:"get",dataType:"json",success:e=>{this.dateInsert(e),console.log(e)},error:function(e){console.log(""),console.log("[serverUploadImage] : [error] : "+e),console.log("")},complete:function(e,t){console.log(""),console.log("[server] : [complete] : "+t),console.log("")}})},getDisableEquipment(){for(var e="",t=0;t<=this.timeList.length-1;t++)e+=this.timeList[t].substring(0,2);console.log(this.timeList),console.log("timeTable:"+e),ke().ajax({url:this.hostAddressName+"/studio/equipment/"+this.date+"/"+e,method:"GET",type:"get",dataType:"json",success:e=>{console.log("[server] : [success] : "+e),this.getDisableState(e)},error:function(e){console.log(""),console.log("[serverUploadImage] : [error] : "+e),console.log("")},complete:function(e,t){console.log(""),console.log("[server] : [complete] : "+t),console.log("")}})},getDisableState(e){var t=["camera","monitor","MicAudio","LightSubFilm"],i=["camera","monitor","micAudio","lightSubFilm"];this.disableEquipmentName=[],this.disableEquipmentNum=[],this.Selected.equipmentNum=[],this.resetEquipmentPrice(),this.resetEquipmentData();for(var s=0;s<e.length;s++){const t=e[s].equipmentNum,i=e[s].equipmentState;this.SelectedEquipmentCount.equipmentRemainCount[t-1]=e[s].remainCount,0===i&&this.disableEquipmentNum.push(t)}this.disableEquipmentNum=[...new Set(this.disableEquipmentNum)],console.log("사용 불가능 장비 번호"+this.disableEquipmentNum);for(var n=0;n<t.length;n++){for(var m=0;m<this.equipments[t[n]].length;m++)for(var l=0;l<this.disableEquipmentNum.length;l++)this.equipments[t[n]][m].equipmentNum===this.disableEquipmentNum[l]&&this.disableEquipmentName.push(this.equipments[t[n]][m].name);this.Equipments[i[n]]=this.Equipments[i[n]].filter((e=>!this.disableEquipmentName.includes(e)))}console.log(this.disableEquipmentName)}}},we=i(89);const Ne=(0,we.Z)(xe,[["render",be],["__scopeId","data-v-6e144488"]]);var He=Ne},5172:function(e,t,i){e.exports=i.p+"static/img/notify1300.e60f22ab.svg"},4175:function(e,t,i){e.exports=i.p+"static/img/notify1920.e341bc39.svg"},9724:function(e,t,i){e.exports=i.p+"static/img/notify760.8c640578.svg"},7626:function(e,t,i){e.exports=i.p+"static/img/studio3.1e95e87f.svg"}}]);
//# sourceMappingURL=116.e2a28a05.js.map