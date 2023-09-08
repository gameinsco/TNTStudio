"use strict";(self["webpackChunktikitaka"]=self["webpackChunktikitaka"]||[]).push([[558],{1433:function(e,t,i){i.d(t,{Z:function(){return d}});var s=i(3396),l=i(7139);const m={class:"text-con"},n={class:"sub-title"},o={class:"main-title"};function a(e,t,i,a,c,u){return(0,s.wg)(),(0,s.iD)("div",{class:"title-text",style:(0,l.j5)({backgroundImage:`url(${c.currentBgImage})`})},[(0,s._)("div",m,[(0,s._)("span",n,(0,l.zw)(i.subTitleData),1),(0,s._)("span",o,(0,l.zw)(i.titleData),1)])],4)}var c={name:"SubTitle",props:{titleData:String,subTitleData:String,bgImage:Array},data(){return{currentBgImage:""}},methods:{handleResize(){const e=window.innerWidth;this.currentBgImage=e>1300?this.bgImage[0]:e>760?this.bgImage[1]:this.bgImage[2]}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},u=i(89);const r=(0,u.Z)(c,[["render",a],["__scopeId","data-v-0c3d4665"]]);var d=r},5305:function(e,t,i){i.r(t),i.d(t,{default:function(){return ke}});var s=i(3396),l=i(7139),m=i(6372),n=i(1222),o=i(6824),a=i(8521),c=i(2269),u=i(165);const r=e=>((0,s.dD)("data-v-76b2e5a2"),e=e(),(0,s.Cn)(),e),d={class:"news_section"},h={class:"title-con"},p={class:"title"},g={class:"container"},q={class:"img-con"},S=["src"],b=r((()=>(0,s._)("div",{class:"img-info"},null,-1))),T=r((()=>(0,s._)("div",{class:"descript"},[(0,s._)("p",{class:"intro"},"장소 소개"),(0,s._)("p",null,"- 1인 크리에이터가 콘텐츠를 촬영할 수 있는 공간입니다."),(0,s._)("p",null," - 고사양의 PC와 웹캠, 마이크, 스위치 등 최신 1인미디어 방송 장비를 갖추고 있습니다. "),(0,s._)("p",null," - 유튜브, 트위치 등 라이브 스트리밍과 녹화 모두 진행하실 수 있습니다. ")],-1))),f={class:"info-con"},v={class:"info"},E={class:"title-info"},_={class:"title"},k={class:"price"},N=r((()=>(0,s._)("span",{style:{"font-size":"14"}}," / 시간",-1))),y={class:"price"},w={style:{"font-size":"14px"}},x={style:{"text-align":"right",display:"flex","align-items":"flex-end"}},L=r((()=>(0,s._)("hr",null,null,-1))),D={class:"schedule-con"},P=r((()=>(0,s._)("p",{class:"title"},"스케줄",-1))),A={class:"date-picker"},z={key:0,class:"time-con"},F=r((()=>(0,s._)("p",{class:"time-title",style:{"margin-top":"20px"}},"시간",-1))),C=r((()=>(0,s._)("p",{class:"sub-title"},"최소 3시간 이상",-1))),I={key:0,class:"time-box"},V={class:"time-apply",style:{display:"flex","justify-content":"right",margin:"8px 0px"}},H={class:"equipment-con"},M=r((()=>(0,s._)("p",{class:"equipment-title",style:{"margin-top":"20px"}},"장비",-1))),W=r((()=>(0,s._)("p",{class:"sub-title"},"필요하신 장비를 선택해 주세요",-1))),U={key:0},B={class:"sub-title"},j=r((()=>(0,s._)("p",{class:"num-title"},"총인원",-1))),R={class:"sub-title"},Z={class:"num-box",style:{display:"flex","justify-content":"space-between","align-items":"center"}},$={class:"",style:{display:"flex",padding:"12px","align-items":"center"}},K={style:{margin:"0px 30px","font-size":"16px"}},O={key:1,class:"price-con"},Y=r((()=>(0,s._)("hr",{style:{"margin-bottom":"20px"}},null,-1))),G={class:"price-box"},J={class:"price-text"},Q={class:"price-value"},X={class:"price-box"},ee={class:"price-text"},te={class:"price-value"},ie={class:"price-box"},se=r((()=>(0,s._)("span",{class:"price-text"}," 장비 가격 ",-1))),le={class:"price-value"},me=r((()=>(0,s._)("hr",{style:{margin:"20px 0px"}},null,-1))),ne={class:"price-box"},oe=r((()=>(0,s._)("span",{class:"total-text"},"총 가격",-1))),ae={class:"total-value"},ce={class:"btn-box"},ue={class:"btn"},re=r((()=>(0,s._)("span",{class:"btn-text"},"목록으로",-1)));function de(e,t,i,r,de,he){const pe=(0,s.up)("HeaderNav"),ge=(0,s.up)("HeaderTitle"),qe=(0,s.up)("router-link"),Se=(0,s.up)("Datepicker"),be=(0,s.up)("DialogReserve"),Te=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("section",d,[(0,s.Wm)(pe),(0,s.Wm)(ge,{"title-data":de.title,"bg-image":de.bgImage},null,8,["title-data","bg-image"]),(0,s._)("div",h,[(0,s._)("span",p,(0,l.zw)(e.rooms[1].title),1)]),(0,s._)("div",g,[(0,s._)("div",q,[(0,s._)("img",{src:e.rooms[1].imageSrc,class:"img",alt:"studio"},null,8,S),b,T]),(0,s._)("div",f,[(0,s._)("div",v,[(0,s._)("div",E,[(0,s._)("div",null,[(0,s._)("p",_,(0,l.zw)(e.rooms[1].title),1),(0,s._)("p",k,[(0,s.Uk)((0,l.zw)(e.rooms[1].price.toLocaleString())+"원 ",1),N]),(0,s._)("p",y,[(0,s._)("span",w," ( 인원수 : 최소 "+(0,l.zw)(e.rooms[1].numMin)+"인 ~ 최대 "+(0,l.zw)(e.rooms[1].numMax)+"인) ",1)])]),(0,s._)("div",x,[(0,s.Wm)(qe,{to:"/CalendarReservate"},{default:(0,s.w5)((()=>[(0,s.Wm)(m.T,{class:"title btn"},{default:(0,s.w5)((()=>[(0,s.Uk)("티키앤타카 예약 현황")])),_:1})])),_:1})])]),L,(0,s._)("div",D,[P,(0,s._)("div",A,[(0,s.Wm)(Se,{value:de.date,modelValue:de.date,"onUpdate:modelValue":t[0]||(t[0]=e=>de.date=e),onInput:he.updateDate,format:"yyyy-MM-dd",placeholder:"날짜를 선택해 주세요","disabled-dates":de.disableDate},null,8,["value","modelValue","onInput","disabled-dates"])]),de.date?((0,s.wg)(),(0,s.iD)("div",z,[F,C,(0,s.Wm)(u.h,{onClick:t[1]||(t[1]=e=>de.timeDialog=!de.timeDialog),variant:"outlined",label:"시간을 선택해 주세요",readonly:"",class:"sub-title time-input",modelValue:de.timeString,"onUpdate:modelValue":t[2]||(t[2]=e=>de.timeString=e)},null,8,["modelValue"]),de.timeDialog?((0,s.wg)(),(0,s.iD)("div",I,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(24,(e=>(0,s.Wm)(m.T,{key:e,class:(0,l.C_)(["time-btn",{"selected-time":he.isTimeSelected(e),"block-time":he.BlockTimeSet(e)}]),onClick:t=>he.setTime(e)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e<10?"0"+e:e)+":00 ",1)])),_:2},1032,["onClick","class"]))),64)),(0,s._)("div",V,[(0,s.Wm)(m.T,{style:{margin:"0px 4px"},onClick:he.confirmSelectedTime},{default:(0,s.w5)((()=>[(0,s.Uk)("확인")])),_:1},8,["onClick"]),(0,s.Wm)(m.T,{style:{margin:"0px 4px"},onClick:he.cancelSelectedTime},{default:(0,s.w5)((()=>[(0,s.Uk)("취소")])),_:1},8,["onClick"])])])):(0,s.kq)("",!0)])):(0,s.kq)("",!0),(0,s._)("div",H,[M,W,(0,s.Wm)(o.o,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(de.EquipmentType,((e,t)=>((0,s.wg)(),(0,s.j4)(a.D,{class:"check-box v-col-6",xs:"6",sm:"6",md:"6",lg:"3",xl:"3",xxl:"3",key:t,onClick:i=>he.isEquipmentSelected(t,e[1])},{default:(0,s.w5)((()=>[(0,s.Wm)(n.x,{modelValue:e[1],"onUpdate:modelValue":t=>e[1]=t,label:e[0]},null,8,["modelValue","onUpdate:modelValue","label"])])),_:2},1032,["onClick"])))),128))])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(de.Equipments,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"equipment-input",key:t},[de.EquipmentType[t][1]?((0,s.wg)(),(0,s.iD)("div",U,[(0,s._)("p",B,(0,l.zw)(he.setEquipmentType(t))+"를 선택해 주세요 ",1),(0,s.Wm)(c.rL,{modelValue:de.Selected[t],"onUpdate:modelValue":[e=>de.Selected[t]=e,e=>he.setEquipmentSelected(de.Selected[t],t)],items:e,label:he.setEquipmentType(t)+"를 선택해 주세요",variant:"outlined",multiple:""},null,8,["modelValue","onUpdate:modelValue","items","label"])])):(0,s.kq)("",!0)])))),128))]),j,(0,s._)("p",R," 인원 초과시 인당 "+(0,l.zw)(this.rooms[1].numPrice.toLocaleString())+"원 추가 비용 발생 ",1),(0,s.Wm)(u.h,{label:"인원수를 입력해 주세요.","persistent-hint":"",variant:"outlined",class:"sub-title people-num",modelValue:de.num,"onUpdate:modelValue":t[3]||(t[3]=e=>de.num=e),readonly:""},null,8,["modelValue"]),(0,s._)("div",Z,[(0,s.Uk)(" 총인원 수 "),(0,s._)("div",$,[(0,s._)("span",{class:"mdi mdi-minus-circle-outline",style:{"font-size":"30px",color:"rgb(90, 90, 90)",cursor:"pointer"},onClick:t[4]||(t[4]=(...e)=>he.minusBtn&&he.minusBtn(...e))}),(0,s._)("div",K,(0,l.zw)(de.num),1),(0,s._)("span",{class:"mdi mdi-plus-circle-outline",style:{"font-size":"30px",color:"rgb(90, 90, 90)",cursor:"pointer"},onClick:t[5]||(t[5]=(...e)=>he.plusBtn&&he.plusBtn(...e))})])]),0!=de.timeHour?((0,s.wg)(),(0,s.iD)("div",O,[Y,(0,s._)("div",G,[(0,s._)("span",J,"스튜디오 "+(0,l.zw)(this.timeHour)+"시간 x "+(0,l.zw)(e.rooms[1].price.toLocaleString())+"원 ",1),(0,s._)("span",Q,(0,l.zw)((e.rooms[1].price*this.timeHour).toLocaleString())+"원 ",1)]),(0,s._)("div",X,[(0,s._)("span",ee," 인원수 "+(0,l.zw)(this.num)+"인 x "+(0,l.zw)(e.rooms[1].numPrice.toLocaleString())+"원 ( 최소 "+(0,l.zw)(e.rooms[1].numMin)+"인 ~ 최대 "+(0,l.zw)(e.rooms[1].numMax)+"인) ",1),(0,s._)("span",te,(0,l.zw)(this.numPrice.toLocaleString())+"원 ",1)]),(0,s._)("div",ie,[se,(0,s._)("span",le,(0,l.zw)(this.equipmentPrice.toLocaleString())+"원 ",1)]),me,(0,s._)("div",ne,[oe,(0,s._)("span",ae,(0,l.zw)(this.totalPrice.toLocaleString())+"원",1)])])):(0,s.kq)("",!0),(0,s.Wm)(be,{date:de.date,"time-string":de.timeString,num:de.num,"total-price":de.totalPrice,"time-list":de.timeList,camera:de.Selected.camera,monitor:de.Selected.monitor,micAudio:de.Selected.micAudio,lightSubFilm:de.Selected.lightSubFilm,equipmentNum:de.Selected.equipmentNum,roomTitle:e.rooms[1].title,roomNum:e.rooms[1].studioNum},null,8,["date","time-string","num","total-price","time-list","camera","monitor","micAudio","lightSubFilm","equipmentNum","roomTitle","roomNum"])])])])]),(0,s._)("div",ce,[(0,s._)("div",ue,[(0,s.Wm)(qe,{to:{path:"/ask",query:{category:"스튜디오"}}},{default:(0,s.w5)((()=>[re])),_:1})])]),(0,s.Wm)(Te)])}i(7658);var he=i(5254),pe=i(1433),ge=i(5646),qe=i(4738),Se=i(65),be=i(2536),Te=i(7387),fe=i.n(Te),ve={name:"ReservateDetail1",components:{HeaderNav:he.Z,Footer:ge.Z,HeaderTitle:pe.Z,DialogReserve:qe.Z,Datepicker:be.Z},computed:{...(0,Se.Se)(["rooms","hostAddressName","equipments"])},data(){const e=new Date;return e.setDate(e.getDate()-1),{title:"예약하기",bgImage:[i(4175),i(5172),i(9724)],studioImage:[i(7626)],dialog:!1,disableDate:{to:e,from:null},date:null,timeDialog:!1,timeList:[],timeString:"00:00 - 00:00, 0시간",timeHour:0,selectedStartTime:0,selectedEndTime:0,EquipmentType:{camera:["카메라",!1],monitor:["모니터",!1],micAudio:["마이크&오디오",!1],lightSubFilm:["조명&촬영보조",!1]},Equipments:{camera:[],monitor:[],micAudio:[],lightSubFilm:[]},Selected:{camera:[],monitor:[],micAudio:[],lightSubFilm:[],equipmentNum:[]},camera:[],num:0,equipmentPrice:0,numPrice:0,totalPrice:0,blockTimeList:[],checkAccount:!1,disableEquipmentName:[],disableEquipmentNum:[]}},mounted(){this.setEquipmentValue()},watch:{Selected(e,t){console.log(e,t)}},methods:{setTime(e){0===this.selectedStartTime?(this.selectedStartTime=e,this.selectedEndTime=e+3):this.selectedEndTime=e,this.selectedEndTime>this.selectedStartTime&&this.selectedEndTime<=this.selectedStartTime+3&&(this.selectedEndTime=this.selectedStartTime+3),this.selectedEndTime<=this.selectedStartTime&&(this.selectedStartTime=0,this.selectedEndTime=0),this.selectedStartTime>=this.blockTimeList[0]-3&&this.selectedStartTime<=this.blockTimeList[this.blockTimeList.length-1]&&(alert("최소 이용 시간 및 이용 중인 시간대를 확인해 주세요."),this.selectedStartTime=0,this.selectedEndTime=0),this.selectedEndTime>=this.blockTimeList[0]&&this.selectedEndTime<=this.blockTimeList[this.blockTimeList.length-1]&&(alert("이용 중인 시간대를 확인해 주세요."),this.selectedStartTime=0,this.selectedEndTime=0),this.selectedStartTime<=this.blockTimeList[0]&&this.selectedEndTime>this.blockTimeList[0]&&(alert("이용 중인 시간대를 확인해 주세요."),this.selectedStartTime=0,this.selectedEndTime=0),this.selectedStartTime>21&&(alert("최소 이용 시간을 확인해 주세요."),this.selectedStartTime=0,this.selectedEndTime=0),this.confirmSelectedTime(!1),console.log("timeList: "+this.timeList),this.resetEquipmentPrice(),this.resetEquipmentData(),this.getDisableEquipment()},isTimeSelected(e){if(this.timeHour=this.selectedEndTime-this.selectedStartTime,this.timeString=`${this.selectedStartTime}:00 - ${this.selectedEndTime}:00 , ${this.timeHour}시간`,0!==this.selectedStartTime&&0!==this.selectedEndTime)return e>=this.selectedStartTime&&e<=this.selectedEndTime},BlockTimeSet(e){return this.blockTimeList.includes(e)},confirmSelectedTime(e){const t=this.selectedEndTime-this.selectedStartTime;if(0===this.timeList.length)for(let i=0;i<=t;i++){const e=this.selectedStartTime+i,t=(e<10?"0"+e:e)+":00";this.timeList.push(t)}else{this.timeList=[];for(let e=0;e<=t;e++){const t=this.selectedStartTime+e,i=(t<10?"0"+t:t)+":00";this.timeList.push(i)}}e&&(this.timeDialog=!1),console.log("timeList: "+this.timeList),this.PriceCalc()},cancelSelectedTime(){this.timeList=[],this.timeString="00:00 - 00:00, 0시간",this.timeHour=0,this.selectedStartTime=0,this.selectedEndTime=0,this.timeDialog=!1},resetEquipmentData(){for(var e=["camera","monitor","micAudio","lightSubFilm"],t=0;t<e.length;t++)this.Equipments[e[t]]=[];this.setEquipmentValue()},resetEquipmentPrice(){this.Selected.camera=[],this.Selected.micAudio=[],this.Selected.lightSubFilm=[],this.Selected.monitor=[],this.equipmentPrice=0,this.equipmentPrice<=0&&(this.equipmentPrice=0)},setEquipmentValue(){if(this.equipments){for(var e=0;e<this.equipments.camera.length;e++)this.Equipments.camera.push(this.equipments.camera[e].name);for(var t=0;t<this.equipments.monitor.length;t++)this.Equipments.monitor.push(this.equipments.monitor[t].name);for(var i=0;i<this.equipments.MicAudio.length;i++)this.Equipments.micAudio.push(this.equipments.MicAudio[i].name);for(var s=0;s<this.equipments.LightSubFilm.length;s++)this.Equipments.lightSubFilm.push(this.equipments.LightSubFilm[s].name)}},updateDate(e){Array.isArray(e)&&(e=e[0]),this.date=this.date.toISOString().slice(0,10),console.log(this.date),this.disableEquipmentNum=[],this.resetEquipmentPrice(),this.getDisabledate()},setEquipmentType(e){return"camera"===e?"카메라":"monitor"===e?"모니터":"micAudio"===e?"마이크&오디오":"lightSubFilm"===e?"조명&촬영보조":void 0},setEquipmentSelected(e,t){console.log(this.Selected);const i={camera:"camera",monitor:"monitor",micAudio:"MicAudio",lightSubFilm:"LightSubFilm"},s=i[t];let l;this.equipments[s]?(this.equipments[s].forEach((t=>{e.includes(t.name)&&!this.Selected.equipmentNum.includes(t.equipmentNum)?this.Selected.equipmentNum.push(t.equipmentNum):!e.includes(t.name)&&this.Selected.equipmentNum.includes(t.equipmentNum)&&(this.Selected.equipmentNum=this.Selected.equipmentNum.filter((e=>e!==t.equipmentNum)),l=t.equipmentNum)})),this.Selected.equipmentNum=[...new Set(this.Selected.equipmentNum)],this.equipmentCalc(l)):console.warn(`Equipment type "${t}" not found.`)},isEquipmentSelected(e,t){t=!t;const i={camera:[1,2,3,4,5,6,7,8,9,10,11,13,14,15],monitor:[12],micAudio:[16,17,18,19,20],lightSubFilm:[21,22,23]};if(console.log("type : "+e),!1===t&&(console.log(i[e]),i[e])){"micAudio"===e&&(e="MicAudio"),"lightSubFilm"===e&&(e="LightSubFilm"),console.log("selected:"+this.Selected.equipmentNum),console.log(this.equipments[e]);for(var s=0;s<this.equipments[e].length;s++)for(var l=0;l<this.Selected.equipmentNum.length;l++)this.equipments[e][s].equipmentNum===this.Selected.equipmentNum[l]&&(this.equipmentPrice-=this.equipments[e][s].price*this.timeHour,console.log(this.equipments[e][s].price));"MicAudio"===e&&(e="micAudio"),"LightSubFilm"===e&&(e="lightSubFilm"),this.Selected.equipmentNum=this.Selected.equipmentNum.filter((t=>!i[e].includes(t))),this.disableEquipmentNum=this.disableEquipmentNum.filter((t=>!i[e].includes(t))),this.Selected[e]=[],this.PriceCalc()}},minusBtn(){this.num--,this.num<=0&&(this.num=0),this.PriceCalc()},plusBtn(){this.num++,this.num>=this.rooms[1].numMax&&(this.num=this.rooms[1].numMax),this.PriceCalc()},PriceCalc(){this.numPrice=this.rooms[1].numPrice*(this.num-this.rooms[1].numMin),this.num<=this.rooms[1].numMin&&(this.numPrice=0),this.equipmentPrice<=0&&(this.equipmentPrice=0),this.totalPrice=this.rooms[1].price*this.timeHour+this.equipmentPrice+this.numPrice},equipmentCalc(e){const t={camera:[1,2,3,4,5,6,7,8,9,10,11,13,14,15],monitor:[12],micAudio:[16,17,18,19,20],lightSubFilm:[21,22,23]};var i="";if(this.Selected.equipmentNum.length>0&&!e)for(var s=0;s<=this.Selected.equipmentNum.length-1;s++){let e=this.Selected.equipmentNum[s];console.log("equipment: "+this.Selected.equipmentNum[s]);let l=Object.keys(t).find((i=>t[i].includes(e)));if(l)switch(l){case"micAudio":i="MicAudio";break;case"lightSubFilm":i="LightSubFilm";break;default:i=l}}else{let s=Object.keys(t).find((i=>t[i].includes(e)));if(s)switch(s){case"micAudio":i="MicAudio";break;case"lightSubFilm":i="LightSubFilm";break;default:i=s}}if(console.log("삭제된 항목 : "+e),console.log(i),this.equipments[i])for(var l=0;l<this.equipments[i].length;l++){let t=this.Selected.equipmentNum[this.Selected.equipmentNum.length-1];if(this.equipments[i][l].equipmentNum!==t||e)e?this.equipments[i][l].equipmentNum===e&&(this.equipmentPrice-=this.equipments[i][l].price*this.timeHour,this.PriceCalc(),console.log("취소 가격"+this.equipments[i][l].price)):this.equipments[i][l].equipmentNum===e&&(this.equipmentPrice-=this.equipments[i][l].price*this.timeHour,this.PriceCalc(),console.log("마지막 항목 취소 가격"+this.equipments[i][l].price));else{var m=this.equipments[i][l].price;this.equipmentPrice+=m*this.timeHour,this.PriceCalc(),console.log("장비 "+this.equipments[i][l].price)}}console.log("총 가격"+this.equipmentPrice)},dateInsert(e){this.blockTimeList=[];for(var t=0;t<e.length;t++)1==e[t].state&&this.blockTimeList.push(parseInt(e[t].time))},getDisabledate(){fe().ajax({url:this.hostAddressName+"/studio/reserve/"+this.rooms[1].studioNum+"/"+this.date,method:"GET",type:"get",dataType:"json",success:e=>{this.dateInsert(e),console.log(e)},error:function(e){console.log(""),console.log("[serverUploadImage] : [error] : "+e),console.log("")},complete:function(e,t){console.log(""),console.log("[server] : [complete] : "+t),console.log("")}})},getDisableEquipment(){for(var e="",t=0;t<=this.timeList.length-1;t++)e+=this.timeList[t].substring(0,2);console.log(this.timeList),console.log("timeTable:"+e),fe().ajax({url:this.hostAddressName+"/studio/equipment/"+this.date+"/"+e,method:"GET",type:"get",dataType:"json",success:e=>{console.log("[server] : [success] : "+e),this.getDisableState(e)},error:function(e){console.log(""),console.log("[serverUploadImage] : [error] : "+e),console.log("")},complete:function(e,t){console.log(""),console.log("[server] : [complete] : "+t),console.log("")}})},getDisableState(e){var t=["camera","monitor","MicAudio","LightSubFilm"],i=["camera","monitor","micAudio","lightSubFilm"];this.disableEquipmentName=[],this.disableEquipmentNum=[],this.Selected.equipmentNum=[],this.resetEquipmentPrice(),this.resetEquipmentData();for(var s=0;s<e.length;s++){const t=e[s].equipmentNum,i=e[s].equipmentState;0===i&&this.disableEquipmentNum.push(t)}this.disableEquipmentNum=[...new Set(this.disableEquipmentNum)],console.log("사용 불가능 장비 번호"+this.disableEquipmentNum);for(var l=0;l<t.length;l++){for(var m=0;m<this.equipments[t[l]].length;m++)for(var n=0;n<this.disableEquipmentNum.length;n++)this.equipments[t[l]][m].equipmentNum===this.disableEquipmentNum[n]&&this.disableEquipmentName.push(this.equipments[t[l]][m].name);this.Equipments[i[l]]=this.Equipments[i[l]].filter((e=>!this.disableEquipmentName.includes(e)))}console.log(this.disableEquipmentName)}}},Ee=i(89);const _e=(0,Ee.Z)(ve,[["render",de],["__scopeId","data-v-76b2e5a2"]]);var ke=_e},5172:function(e,t,i){e.exports=i.p+"static/img/notify1300.e60f22ab.svg"},4175:function(e,t,i){e.exports=i.p+"static/img/notify1920.e341bc39.svg"},9724:function(e,t,i){e.exports=i.p+"static/img/notify760.8c640578.svg"},7626:function(e,t,i){e.exports=i.p+"static/img/studio3.1e95e87f.svg"}}]);
//# sourceMappingURL=558.144a5ce9.js.map