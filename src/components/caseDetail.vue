<style scoped>
  .caseDetail{
    background: rgba(0,0,0,0.3);
    width: 100%;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    z-index:100;
  }
  .caseDetailBox{
    width: 1000px;
    margin: 10vh auto;
    background: #fff;
    padding: 20px;
    max-height: 76vh;
    position: relative;
  }
  .closCaseDetail{
    font-size: 42px;
    position: absolute;
    right: 15px;
    top: 0;
    cursor: pointer;
  }
  .detailContent{
    overflow: scroll;
    max-height: 65vh;
    overflow-x: hidden;
  }
  .dialogTitle{
    color: #232323;
    font-size:16px;
    font-weight: 600;
  }
  .caseInfo{
    font-size: 14px;
    color: #232323;
    margin-top:15px;
  }
  .caseInfo i{
    padding-right: 20px;
    display:inline-block;

  }
  .chakanno, .baoxianNo{
    min-width: 25%;
  }
  .caseInfoBox{
    padding: 5px 0;
    text-align: left;
  }
  .AimCar{
    width: 100%;
    margin: 15px 0;
  }
  .aimheader{
    height: 30px;
    color: #fff;
    background: #2EAB3B;
    font-size: 15px;
    line-height: 30px;
    padding-left:15px;
  }
  .aimInfo{
    width: 100%;
  }
  .aimInfo .table{
    width:100%;
  }
  .aimInfo .table td{
    padding: 3px;
  }
  .aimCarImg{
    width: 100%;
    border: 1px solid #bbb;
    border-top: none;
    padding: 10px 0;
  }
  .aimCarImg ul{
    display: -webkit-box;
  }
  .aimCarImg li{
    width: 22%;
    padding:12px 0px;
    margin-left: 10px;
  }
  .aimCarImg img{
    width: 100%;
    height: 200px;
  }
  .aimCarImg span{
    font-size: 14px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(201,202,204,0.8);
    color: #232323;
    display: block;
    margin-top: -4px
  }
  .videoBox{
    text-align:center;
  }
.videoBox video{
  height: 200px;
  width: 30%;
  padding: 20px;

}
  /*video::-webkit-media-controls-enclosure {*/
    /*overflow:hidden;*/
  /*}*/
  /*video::-webkit-media-controls-panel {*/
    /*width: calc(100% + 30px);*/
  /*}*/
  .reporPerson img, .caseInfoBox img{
    padding-left: 7px;
    height: 16px;
    width: 14px;
  }
  .caseInfoBox img{
    padding-right:0;
  }
  .caseInfoBoxAdress{
    position: relative;
    display:inline-block;
    width: 50%;
  }
  .caseInfoBoxTitle{
    width: 70px;
    display: inline-block;
  }
  .caseInfoBoxInfo{
    position: absolute;
    left: 75px;
    top: 0;
  }
  .footerBox{
    text-align: center;
    margin: 40px;
    width: 100%;

  }
  .download,.cancel{
    display: inline-block;
    height:35px;
    width: 185px;
    color:#fff;
    background: #2EAB3B;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
  }
  #videoBox video{
    object-fit:fill
  }
  .beizhuInfo{
    border: 1px solid #bbb;
    min-height:100px;
    width:100%;
    padding:10px 16px;
    font-size: 14px;
    line-height: 20px;
  }
  .beizhuInfoIncident{
   
    min-height:101px;
    width:100%;
   
  }





 .send-documents{
    position:absolute;
    left:100px;
    top:20px;
    overflow: hidden;
  }
  .sent-but{
    float:left;
    cursor:pointer;
    margin-right:30px;
    width:100px;
    height:30px;
    background-color:green;
    border:1px solid green; 
    line-height: 30px;
    text-align: center;
    color:#fff;
    border-radius: 5px;
  }
  .select-wrap{
    float:left;
    margin-top:-2px;
  }
  .underlying-wrap{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    overflow: scroll;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 201;
  }
  .claim-wrap-tong{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    overflow: scroll;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 201;
  }
  .szc-wrap{
     background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    overflow: scroll;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 201;
  }
  .czm-wrap{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    overflow: scroll;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 201;
  }
  .czm-content{
    width: 500px;
    margin: 6vh;
    margin-left:35%;
    background: #fff;
    margin-top: 20vh;
    position: relative;
  }
  .claim-content-underiy{
     width: 600px;
     margin:0 auto;
     margin-left:50%;
     background: #fff;
     margin-top: 20vh;
     height:300px;
     overflow: scroll;
     position: relative;
  }
  .claim-content{
    width: 650px;
    margin: 6vh;
    margin-left:50%;
    background: #fff;
    margin-top: 20vh;
    height:500px;
   /* overflow: scroll;*/
    position: relative;
  }
  .top-wrap{
    overflow: hidden;
    border-bottom:1px solid #b6b6b6;
  }
  .top-wrap h4{
    float:left;
    font-size: 18px;
    line-height: 70px;
    padding-left:20px;
  }
  .xmark{
   float:right;
    font-size: 42px;
  }
  .che-one{
    padding:20px 0px 20px 80px;
  
  }
  .part-wrap{
    overflow: hidden;
  }
  .part{
    width:100px;
    height:40px;
    line-height: 40px;
    text-align:center;
    border:1px solid #b6b6b6;
    float:left;
    margin-right:30px;
    margin-bottom:20px;
  }
  .part span{
    display:none;
  }
  .input-box input{
    width:200px;
    height:30px;
    border:1px solid #b6b6b6;
    background-color:#fff; 
  }
  .plate{
     padding-bottom:20px;
  }
  .checkbox-wrap{
    padding-left:30px;
    padding-bottom:30px;
  }
  .but-czm{
     width:300px;
     margin-left:100px;
     margin-bottom:20px;
  }
  .but-claim{
    width:300px;
    margin-left:180px;
    margin-bottom:20px;
  }
  .checkoutGreen{
    color:#fff;
    background-color:green;
  }
  .checkoutWhite{
     color:#000;
    background-color:#fff;
  }
  .czxm{
    margin-left:10px;
    color:#2fab3b;
  }

  .che-one-wrap{
    height:400px;
    overflow: scroll;
  }
  .beizhuInfoIncidentGra{
    color:#c8c8c8;
  }

    .che-one-wrap{
    height:400px;
    overflow: scroll;
  }
  .underlying-wrap{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    overflow: scroll;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 201;
  }
   .claim-content-underiy{
     width: 600px;
     margin:0 auto;
     margin-left:50%;
     background: #fff;
     margin-top: 20vh;
     height:300px;
     overflow: scroll;
     position: relative;
  }
  .beizhuInfoIncidentGra{
    color:#c8c8c8;
  }
  .xe_top{
    padding-bottom:10px;
  }
  .checkbox-wrap-xe{
    padding-left:80px;
  }
  .el-radio+.el-radio{
    margin-left: 0px !important;
    margin-top:10px;
  }
</style>
<template>
  <div class="caseDetail">
    <div class="caseDetailBox">
      <span @click="closCaseDetail" class="right closCaseDetail">×</span>
      <div class="oneMonitor clear">
        <h4 class="dialogTitle">案件详情</h4>



                <div class="send-documents">
                 <!--  <span class="sent-but" @click="setElectronic">发送单证</span> -->
                  <div class="select-wrap">
                     <el-checkbox-group v-model="checkedTypes" @change="handleCheckedChange">
                        <!--  <el-checkbox v-for="city in cityOptions" :label="city" :key="city">{{city}}</el-checkbox> -->
                         <el-checkbox label="电子查勘单" disabled ></el-checkbox>
                         <el-checkbox label="转赔授权书" :disabled="selectStateOne"></el-checkbox>
                         <el-checkbox label="快赔协议" :disabled="selectStateTwo" class="triggerCheckout"></el-checkbox>
                         <el-checkbox label="小额快赔" :disabled="selectStateThree" class="triggerXeCheckout" v-if="caseDetailData.reportVehicleInfo.insuranceCompanyCode == 110000003007 && false"></el-checkbox>
                     </el-checkbox-group>
                  </div>
                  <!-- 修改5.22 -->
                  <span class="sent-but" @click="underlyingThreeCar">发送单证</span>
                 <!--  <span class="sent-but" @click="setElectronic">发送单证</span> -->
                  <span class="sent-but" @click="setDetails">查看</span>
                  <span class="sent-but" @click="goApplicationBook" v-if="caseDetailData.reportVehicleInfo.insuranceCompanyCode == 110000003007 && false">申请书</span>
                  <!-- <a :href="url" class="sent-but" @click="setDetails" target="_blank">查看</a> -->
                 
              </div>
           <!-- 小额理赔弹框 -->
  <div class="claim-wrap-tong claim-wrap-xe hide">
       <div class="claim-content">
         <div class="top-wrap">
             <h4>请完善理赔信息</h4>
             <span @click="closeXeClaimDiolag" class="xmark">×</span>
         </div>
          <div class="che-one-wrap"> 
             <div class="che-one" v-for="(item,index) in ImgInfo">
                  <p class="plate">{{item.originalVehicleLicenseNo}}</p>
                  <div class="part-wrap part-wrap-one" >
                     <div class="part" @click="part($event,item)" >正前部<span>1</span></div>
                     <div class="part" @click="part($event,item)" >左前部<span>2</span></div>
                     <div class="part" @click="part($event,item)" >右前部<span>3</span></div>
                     <div class="part" @click="part($event,item)" >左中部<span>4</span></div>
                     <div class="part" @click="part($event,item)" >正后部<span>5</span></div>
                     <div class="part" @click="part($event,item)" >左后部<span>6</span></div>
                     <div class="part" @click="part($event,item)" >右后部<span>7</span></div>
                     <div class="part" @click="part($event,item)" >右中部<span>8</span></div>
                  </div>
                  <div class="input-box">
                        <span>赔付金额</span>
                        <input type="text" name="" @blur="one_part($event,index)">
                   </div>
             </div>
            <div class="checkbox-wrap checkbox-wrap-xe">
              <p class="xe_top">您在本次事故中需要提供的有关证明和材料是：</p>
               <el-checkbox-group v-model="checkedMaterial"  @change="handleCheckedMaterialChange">
                     <el-checkbox v-for="material in materialOptions" :label="material" :key="material">{{material}}</el-checkbox>
               </el-checkbox-group>
             </div>
             <div class="checkbox-wrap checkbox-wrap-xe">
               <p class="xe_top">损失确认:</p>
                <el-radio v-model="radio" label="1">三者方已获得赔付，如后期产生理赔纠纷与保险公司无关</el-radio>
                <el-radio v-model="radio" label="0">三者方未获得赔付，甲方授权贵公司将本次理赔款项划入三者方账户</el-radio>
              <!-- <el-checkbox-group v-model="lossConfirmation"  @change="handleCheckedLossChange">
                     <el-checkbox label="三者方已获得赔付，如后期产生理赔纠纷与保险公司无关" :disabled="lossStatus" ></el-checkbox>
                     <el-checkbox label="三者方未获得赔付，甲方授权贵公司将本次理赔款项划入三者方账户" :disabled="!lossStatus"></el-checkbox>
               </el-checkbox-group> -->
             </div>
             <el-button type="primary" class="but-claim" @click="claimXeButton">确定</el-button>
         </div>
             
       </div>
   </div> 
               <!-- 理赔信息弹框 -->
         <div class="claim-wrap-tong claim-wrap hide">
             <div class="claim-content">
               <div class="top-wrap">
                   <h4>请完善理赔信息</h4>
                   <span @click="closeClaimDiolag" class="xmark">×</span>
               </div>
               

             <div class="che-one-wrap">

                 <div class="che-one" v-for="(item,index) in ImgInfo">
                    <p class="plate">{{item.originalVehicleLicenseNo}}</p>
                    <div class="part-wrap part-wrap-one" >
                       <div class="part" @click="part($event,item)" >正前部<span>1</span></div>
                       <div class="part" @click="part($event,item)" >左前部<span>2</span></div>
                       <div class="part" @click="part($event,item)" >右前部<span>3</span></div>
                       <div class="part" @click="part($event,item)" >左中部<span>4</span></div>
                       <div class="part" @click="part($event,item)" >正后部<span>5</span></div>
                       <div class="part" @click="part($event,item)" >左后部<span>6</span></div>
                       <div class="part" @click="part($event,item)" >右后部<span>7</span></div>
                       <div class="part" @click="part($event,item)" >右中部<span>8</span></div>
                    </div>
                    <div class="input-box">
                          <span>赔付金额</span>
                          <input type="text" name="" @blur="one_part($event,index)">
                     </div>
               </div>
               <el-button type="primary" class="but-claim" @click="claimButton">确定</el-button>

             </div>
               
               <!-- 修改5.22 -->
               <!-- <div class="checkbox-wrap">
               <el-checkbox-group v-model="checkedCities"  @change="handleCheckedCitiesChange">
                     <el-checkbox v-for="city in cityOptions" :label="city" :key="city">{{city}}</el-checkbox>
               </el-checkbox-group>
               </div> -->
               <!--  <el-button type="primary" class="but-claim" @click="claimButton">确定</el-button> -->
             </div>
         </div>
           <!-- 标车三者车选择的弹框//修改5.22 -->
         <div class="underlying-wrap hide">
             <div class="claim-content-underiy">
               <div class="top-wrap">
                   <h4>请完善理赔信息</h4>
                   <span class="xmark" @click="closeUnderlying">×</span>
               </div>
               <div class="checkbox-wrap">
               <el-checkbox-group v-model="checkedCities"  @change="handleCheckedCitiesChange">
                     <el-checkbox v-for="city in cityOptions" :label="city" :key="city">{{city}}</el-checkbox>
               </el-checkbox-group>
               </div>
               <!-- 发送电子查勘单 -->
               <el-button type="primary" class="but-claim" @click="setElectronic">确定</el-button>
             </div>
         </div>
             <!-- 标车姓名弹框 -->
         <div class="czm-wrap hide">
             <div class="czm-content">
               <div class="top-wrap">
                   <h4>请完善信息</h4>
                   <span @click="closeCzmDiolag" class="xmark">×</span>
               </div>
               
               <div class="che-one">
                     <el-input placeholder="请输入姓名" clearable @blur="czmInput" maxlength="12"></el-input>
               </div>
         
               <el-button type="primary" class="but-czm" @click="czmButton">确定</el-button>
             </div>
         </div>
             <!-- 三者车姓名弹框 -->
         <div class="szc-wrap hide">
             <div class="czm-content">
               <div class="top-wrap">
                   <h4>请完善信息</h4>
                   <span @click="closeSzcDiolag" class="xmark">×</span>
               </div>
               
               <div class="che-one">
                     <el-input placeholder="请输入手机号" @blur="szcInput"></el-input>
               </div>
         
               <el-button type="primary" class="but-czm" @click="szcButton">确定</el-button>
             </div>
         </div>







        <div class="detailContent">
          <div class="caseInfo" id="caseInfo">
              <div class="caseInfoBox">
                <span>查勘号：</span><i class="chakanno">{{caseDetailData.accidentInfo .surveyNo }}</i>
                <span>保险报案号：</span><i class="baoxianNo">{{caseDetailData.accidentInfo .insuranceReportNo}}</i>
                <span>事故时间：</span><i >{{caseDetailData.accidentInfo .accidentTime }}</i>
              </div>
              <div class="caseInfoBox">
                  <i  v-if="caseDetailData.accidentInfo.surveyStatus == '06'">案件状态：待查勘</i>
                  <i  v-if="caseDetailData.accidentInfo.surveyStatus == '07'">案件状态：查勘中</i>
                  <i v-if="caseDetailData.accidentInfo.surveyStatus == '08'">案件状态：已查勘</i>
                  <i v-if="caseDetailData.accidentInfo.surveyStatus == '11'">案件状态：已取消</i>
                <div class="caseInfoBoxAdress" >
                  <span class="caseInfoBoxTitle" >事故地点：</span>
                  <div class="caseInfoBoxInfo">
                    <i style="display:inline-block;">{{caseDetailData.accidentInfo .accidentAddr}}</i>
                    <img @mouseenter="enter" @mouseleave="leave" src="../images/adress.png"/>
                    <div id="detailMap" class="hide" style="height:250px;width:250px;"></div>
                  </div>
                </div>
              </div>

              <!-- <div class="caseInfoBox" v-if="caseDetailData.accidentInfo.exceptionReason != null"><span>事故经过：</span><i>{{caseDetailData.accidentInfo.exceptionReason}}</i></div> -->
           </div>
         
          <div class="AimCar">
            <div  class="aimheader clear">
                <span style="color:#fff;">事故经过</span>
                <span style="color:#fff;padding-right:10px;cursor: pointer;" v-if="editorIncidentStatue" @click="saveIncident" class="right">保存</span>
                <span style="color:#fff;padding-right:10px;cursor: pointer;" v-if="!editorIncidentStatue"  @click="editorIncident" class="right">编辑</span>
            </div>
            <div class="aimInfo">
              <textarea placeholder="IncidentContent" class="beizhuInfo" v-model="IncidentContent" v-if="editorIncidentStatue">
              </textarea>
              <div class="beizhuInfoIncident beizhuInfo" v-bind:class="{ beizhuInfoIncidentGra: isbeizhuInfoIncidentGra}" v-if="!editorIncidentStatue">{{IncidentContent}}</div>
            </div>
          </div>
          <div class="AimCar">
            <div  class="aimheader clear"><span style="color:#fff;">备注信息</span><span style="color:#fff;padding-right:10px;cursor: pointer;" @click="saveBeizhu" class="right">保存</span></div>
            <div class="aimInfo">
              <textarea placeholder="请输入备注信息" class="beizhuInfo" v-model="beizhuInfo">
              </textarea>
            </div>
          </div>
          <div class="AimCar">
            <div class="aimheader">标的车</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0">
                <tr><td>车牌号:</td><td>{{caseDetailData.reportVehicleInfo.vehicleLicenseNo}}</td><td>车主姓名:</td><td>{{caseDetailData.reportVehicleInfo.reporterName}}<span class="czxm" @click="czxm($event,caseDetailData.reportVehicleInfo.id)">编辑</span></td><td>车主电话: </td><td>{{caseDetailData.reportVehicleInfo.reporterPhoneNo}}</td></tr>
                <tr><td>保险公司:</td><td> {{caseDetailData.reportVehicleInfo.insuranceCompanyName}}</td><td>保险公司城市： </td><td>{{caseDetailData.reportVehicleInfo.insuranceCompanyCity}}</td><td> 处理机构：</td><td>{{caseDetailData.reportVehicleInfo.processOrgName}}</td></tr>
              </table>
              <div class="aimCarImg" v-if="totalCountAim != 0">
                <ul id="scaleImg">
                  <li v-for="item in recordsImg">
                    <img :data-src="item.photoUri" :src="item.smallPhotoUri">
                    <br>
                    <span>{{item.photoTypeComment}}</span>
                  </li>
                </ul>
                <div class="phonesPaging">
                  <el-pagination  @current-change="handleCurrentChangeAim"
                                  :current-page="1"
                                  :page-size = "pageSizeAim"
                                  layout="prev,next"
                                  :total="totalCountAim">
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="thirdCar AimCar" v-if="thirdActive" v-for="(item,index) in thirdCar">-->
          <div class="thirdCar AimCar" v-if="thirdActive" v-for="(item,index) in thirdCar">
            <div class="aimheader">三者车({{item.vehicleLicenseNo}})<span style="color:#fff;padding-right:10px;cursor: pointer;" @click="savethirdCar(item.vehicleLicenseNo)" class="right">保存</span></div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0">
                <tr><td>车牌号:</td><td>{{item.vehicleLicenseNo}}</td><td>车主电话: </td><td v-if="item.contactPhoneNo == null || item.contactPhoneNo == ''"> <input class="thirdphone" type="tel" maxlength="11" style="height:35px;" value="暂无"/><span class="czxm" @click="szcPhone($event,item.id,index)">编辑</span></td><td v-else><input  maxlength="11" class="thirdphone" style="height:35px;" type="tel" :value="item.contactPhoneNo"/><span class="czxm" @click="szcPhone($event,item.id,index)">编辑</span></td></tr>
              </table>
              <div class="aimCarImg thirdImg" v-if="item.thirdCarImg.length!=0">
                <ul class="suibian">
                  <li v-for="itemImg in item.thirdCarImg">
                    <img :data-src="itemImg.photoUri" :src="itemImg.smallPhotoUri"/>
                    <br>
                    <span>{{itemImg.photoTypeComment}}</span>
                  </li>
                </ul>
                <div class="phonesPaging" @click="getCarNo(item.vehicleLicenseNo)" >
                  <el-pagination  @current-change='handleCurrentChangethird'
                                  :current-page="1"
                                  :page-size = "4"
                                  layout="prev,next"
                                  :total="item.total">
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
          <div class="thirdCar AimCar " v-if="caseDetailData.surveyVideoRooms.length != 0">
            <div class="aimheader">查勘现场视频</div>
            <!--<div v-if="showFlash">-->
              <!--<h1>Alternative content</h1>-->
              <!--<p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a></p>-->
            <!--</div>-->
            <div class="aimInfo videoBox">
              <div id="videoList" class="clear" v-if="showOldActive">
                <div class="left" v-for="(item,index) in surveyVideoRooms" :id='"video"+index' style="width:280px;height:200px;margin:6px 10px;"  :swfobjId='"videourl"+index'></div>
              </div>
              <div class="videoList clear" v-else>

                <div class="left vid-wrapper" id="videoBox" v-for="(item,index) in surveyVideoRooms"   >
                  <video  controls="controls" :src="item.videoSource" type="video/mp4"  style="width:280px;height:200px;margin:6px 10px;">
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div class="AimCar reporPerson" v-if="caseDetailData.sceneSurveyorInfo != null">
            <div class="aimheader">查勘员信息</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0" >
                <tr><td>现场查勘员:</td><td @click="mapRouter()">{{caseDetailData.sceneSurveyorInfo.sceneSurveyorName}}<img src="../images/adress.png"/></td><td>现场查勘员电话:</td><td>{{caseDetailData.sceneSurveyorInfo.sceneSurveyorPhoneNo}}</td><td>预计到达时间:</td><td>{{caseDetailData.sceneSurveyorInfo.expectArriveTime}}</td>
                  <td>实际到达时间</td><td>{{caseDetailData.sceneSurveyorInfo.actualArriveTime}}</td></tr>
                <tr v-if="webSurveyorInfoActive"><td> 后台坐席: </td><td>{{caseDetailData.webSurveyorInfo.webSurveyorName}}</td><td>处理开始时间: </td><td>{{caseDetailData.webSurveyorInfo.startProcessTime}}</td><td>处理结束时间:</td><td>{{caseDetailData.webSurveyorInfo.endProcessTime}}</td><td></td><td></td></tr>
              </table>
              <div style="width:100%;height:300px;margin:0 auto" class="mapBox hide">
                <div style="width:100%;height:300px;margin:0 auto"  id="mapContent" > </div>
              </div>

            </div>
          </div>
          <div class="footerBox">
            <span class="download" @click="downLoadCase" v-if="caseDetailData.accidentInfo.surveyStatus == '08'">下载</span>
            <span class="cancel" @click="cancelCase" v-if="caseDetailData.accidentInfo.surveyStatus == '07' || caseDetailData.accidentInfo.surveyStatus == '06'">取消订单</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

import Viewer from 'viewerjs';
import axios from 'axios'
export default {
  data() {
      return{
        radio:'1',
        isbeizhuInfoIncidentGra:true,
        IncidentContent:"",//事故经过内容
        editorIncidentStatue:false,//编辑事故经过状态
        url:"",
        id:"",
        szcInputIndex:"",
        szcInputId:"",
        czmInputId:"",
        szcInputValue:"",
        czmInputValue:"",
        isTargetSign: true,
        isThirdSign: false,
        claimList:[],
        LossList:[],
        MaterialList:["被保险人身份证","银行卡"],
        signatureList:[],
        claimMoneyOne:{},
        ImgInfo: [],
        checkedCities:[""],
        checkedMaterial:["被保险人身份证","银行卡"],//小额快赔勾选默认资料
        lossConfirmation:["三者方已获得赔付，如后期产生理赔纠纷与保险公司无关"],//小额快赔勾选默认损失确认
        materialOptions:["被保险人身份证","银行卡"],//小额快赔勾选资料
        lossStatus:false,
        lossConfirmationOptions:["三者方已获得赔付，如后期产生理赔纠纷与保险公司无关","三者方未获得赔付，甲方授权贵公司将本次理赔款项划入三者方账户"],//小额快赔勾选默认损失确认
        cityOptions:["标的签字","三者签字"],
        checkedTypes:["电子查勘单"],
        selectStateOne:false,
        selectStateTwo:false,
        selectStateThree:false,
        ///////////////////
        beizhuActive: false,
        showOldActive: false,
        currentPageNoAim: 1,//当前页码
        pageSizeAim: 4,//每页记录数
        totalCountAim: 0,//总条数
        recordsImg: [],//标的车图片
        caseDetailData: {},
        recordsThird: [],
        surveyNo: "",
        beizhuInfo: "",
        thirdCar: [],
        accidentVehicleInfos:[],
        siStatusText: '',
        webSurveyorInfoActive: false,
        thirdActive: false,
        longitude: "",
        latitude: "",
        ViewerAimActive: false,
        coordinates: [],
        mark: '',
        surveyId: '',
        thirdvehicleLicenseNo: "",
        surveyVideoRooms: [],
        showFlash: false,
      }
    },
  watch:{

  },
    created(){
       this.caseDetailData =  JSON.parse(localStorage.getItem("caseDetailData"));
       console.log(this.caseDetailData.reportVehicleInfo.insuranceCompanyCode)
       console.log(this.caseDetailData.reportVehicleInfo.insuranceCompanyCode == 110000003007)
       this.longitude = this.caseDetailData.accidentInfo.accidentAddrLongitude;
       this.latitude = this.caseDetailData.accidentInfo.accidentAddrLatitude;
       if(this.caseDetailData.sceneSurveyorInfo != null){
         this.coordinates = this.caseDetailData.sceneSurveyorInfo.coordinates;//经纬度轨迹数组
       }
       this.mark = this.caseDetailData.accidentInfo.appSource;
       this.surveyId = this.caseDetailData.id;
       this.surveyVideoRooms = this.caseDetailData.surveyVideoRooms;
       for(let i in this.surveyVideoRooms){
         var indexof = this.surveyVideoRooms[i].videoSource.indexOf("http:");
         console.log(indexof)
         if(indexof > -1){//新数据
           this.showOldActive = false;
         }else{//老数据
           this.showOldActive = true;
         }
      }

       if(this.caseDetailData.sceneSurveyorInfo != null){
           if(this.caseDetailData.sceneSurveyorInfo.sceneSurveyorPhoneNo === null){
             this.caseDetailData.sceneSurveyorInfo.sceneSurveyorPhoneNo = '暂无'
           }
           if(this.caseDetailData.sceneSurveyorInfo.expectArriveTime === null){
             this.caseDetailData.sceneSurveyorInfo.expectArriveTime = '暂无'
           }
           if(this.caseDetailData.sceneSurveyorInfo.expectArriveTime === null){
             this.caseDetailData.sceneSurveyorInfo.expectArriveTime = '暂无'
           }
          if(this.caseDetailData.sceneSurveyorInfo.actualArriveTime === null){
             this.caseDetailData.sceneSurveyorInfo.actualArriveTime = "暂无"
          }
       }
       if(this.caseDetailData.accidentVehicleInfos === null){
         this.thirdActive = false;
       }else{
         this.thirdActive = true;
       }
       if(this.caseDetailData.webSurveyorInfo === null){
         this.webSurveyorInfoActive = false;
       }else{
         this.webSurveyorInfoActive = true;
         if(this.caseDetailData.webSurveyorInfo.webSurveyorName === null){
           this.caseDetailData.webSurveyorInfo.webSurveyorName = "暂无"
         }
         if(this.caseDetailData.webSurveyorInfo.startProcessTime === null){
           this.caseDetailData.webSurveyorInfo.startProcessTime = '暂无'
         }
         if(this.caseDetailData.webSurveyorInfo.endProcessTime === null){
           this.caseDetailData.webSurveyorInfo.endProcessTime = '暂无'
         }
       }
       this.surveyNo = this.caseDetailData.accidentInfo.surveyNo;
       if("reportVehicleInfo" in this.caseDetailData){
        this.getCasePhones(1,4,this.caseDetailData.reportVehicleInfo.vehicleLicenseNo,this.surveyNo,"")
       }
        this.accidentVehicleInfos = this.caseDetailData.accidentVehicleInfos;
        this.getImgInfo();
       if(this.accidentVehicleInfos !== null){

         for(let i in this.accidentVehicleInfos){
           this.accidentVehicleInfos[i].thirdCarImg = [];
           this.getCasePhones(1,4,this.accidentVehicleInfos[i].vehicleLicenseNo,this.surveyNo,i)
         }
       }
      //获取备注信息
      this.getBeizhu();
    
    },
    mounted() {
      if(this.showOldActive){
        this.$nextTick(() => {
          this.getvedio()
        })
      };
      //获取事故经过
      this.getIncidentInfo();
    },
    props: {
//      caseOrder: string
    },
      methods: {
        open4(resdes) {
            this.$message({
                  showClose: true,
                  message: resdes,
                  type: 'error'
                });
          },
          open2(resdes){
             this.$message({
                  showClose: true,
                  message: resdes,
                  type: 'success'
                });
          },
          //获取事故经过
          getIncidentInfo(){
              var orderNo = this.caseDetailData.accidentInfo.surveyNo;
              var vehicleLicenseNo = this.caseDetailData.reportVehicleInfo.vehicleLicenseNo;//标的车车牌
              axios.get(this.ajaxUrl+"/survey/order/v1/accident/desc/"+orderNo).then(response => {
                 if(response.data.rescode == 200){
                   
                   if(response.data.data){
                      this.IncidentContent = response.data.data;
                      this.isbeizhuInfoIncidentGra = false;
                   }else{
                       //存在三者车
                       // alert(this.thirdActive)
                       if(this.thirdActive){
                         var thirdVehicleLicenseNo = "";
                          for(var i = 0;i < this.accidentVehicleInfos.length;i++){
                                 thirdVehicleLicenseNo += this.accidentVehicleInfos[i].vehicleLicenseNo + ",";
                                 //alert(this.accidentVehicleInfos[i].vehicleLicenseNo)
                          };
                           this.IncidentContent = '经现场查勘核实，标的车（'+vehicleLicenseNo+'）因 变道、转弯、追尾原因与三者车（'+thirdVehicleLicenseNo+'）发生碰撞，经交警处理/双方协商，标的车无责、次责、同责、主责、全责、（责任划分），三者车无责、次责、同责、主责、全责、（责任划分）；双方无争议，标的车受损部位为正前部、左前部、左后部；三者车受损部位正后部、左后部、右后部；现场查验事故真实性无异议，标的车双证及支付单证已现场采集，三者双证也已采集。';
                           // this.IncidentContent = '经现场查勘核实，标的车（'+vehicleLicenseNo+'）因 变道、转弯、追尾原因 与三者车（'+thirdVehicleLicenseNo+'）发生碰撞，经交警处理/双方协商，标的车承担无责、次责、同责、主责、全责、（责任划分），三者车承担无责、次责、同责、主责、全责、（责任划分）；现场查验事故真实性无异议，标的车双证及支付单证已现场采集，三者双证也已采集，事故双方无异议。';
                       }else{
                            this.IncidentContent = '经现场查勘核实，标的车（'+vehicleLicenseNo+'）因 变道、转弯、追尾原因发生碰撞，经交警处理，标的车承担全责，标的车受损部位为正前部、左前部、左后部；现场查验事故真实性无异议，标的车双证及支付单证已现场采集，事故无异议。';
                           // this.IncidentContent = ' 经现场查勘核实，标的车（'+vehicleLicenseNo+'）因 变道、转弯、追尾原因发生碰撞，经交警处理，标的车承担全责；现场查验事故真实性无异议，标的车双证及支付单证已现场采集，事故无异议。';
                       }
                   }
                    
                    console.log(response,"事故经过")
                 }
              }, err => {
                
              })
              .catch((error) => {
              
              })
          },
          //保存事故经过
          saveIncident(e){
            if(this.IncidentContent.length == 0){
              this.open4("请填写事故经过");
              return 
            };
             var data = {
                 orderNo : this.caseDetailData.accidentInfo.surveyNo,
                 accidentDescription : this.IncidentContent
              };
              axios.post(this.ajaxUrl+"/survey/order/v1/accident/desc",data).then(response => {
                  if(response.data.rescode == 200){
                      this.open2("保存成功！");
                      this.isbeizhuInfoIncidentGra = false;
                      this.editorIncidentStatue = false;
                  }else{
                      this.open4("保存失败！");
                  }
                    
             }, err => {

             })
             .catch((error) => {
                  this.open4("保存失败！");
             })
      
             
          },
          //编辑事故经过
          editorIncident(e){
                 this.editorIncidentStatue = true;
          },
        ////////////////////////////////////////////
           szcPhone(e,id,key){
            this.szcInputIndex = key;
            // alert(key)
            this.szcInputId = id;
           $(".szc-wrap").removeClass("hide");
         },
          czxm(e,id){
            this.czmInputId = id;
           $(".czm-wrap").removeClass("hide");
         },
           modifyData(arr){
          for(var i = 0; i < arr .length; i++){
              arr[i] =  arr[i].substr(0,arr[i].length-1)
          }
          return arr
        },
          szcButton(){
            // alert(this.szcInputValue)
            if(this.szcInputValue.length == 0){
                this.$message({
                  showClose: true,
                  message: '请填写手机号',
                  type: 'error'
                });
            }else{
              var data = [{
                  "surveyBaseInfoId":this.szcInputId,
                  "phone": this.szcInputValue
              }]
              console.log(this.ajaxUrl,3333333333333)
              ///boot-pub-survey-manage//survey_base/v1/modify
             axios.post(this.ajaxUrl+"/survey_base/v1/modify",data).then(response => {
               if(response.status == 200){
                //this.goCaseDetail(this.id);
                 $(".szc-wrap").addClass("hide");
                 // alert(this.szcInputIndex)
                 this.thirdCar[this.szcInputIndex].contactPhoneNo = this.szcInputValue
                 // $(".orderSelectDialog").addClass("hide");
                 this.open6();
                 // window.location.reload();
               }
            }, err => {
              
            })
            .catch((error) => {
            
            })
               //alert("jiekou")
            }
         },
           szcInput(e){
           var phone = e.target.value;
           var r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
          if(e.target.value.length == 0){
            this.szcInputValue = "";
            this.$message({
              showClose: true,
              message: '请填写手机号',
              type: 'error'
            });
          }else{
            if(!r.test(phone)){
                 this.szcInputValue = "";
                 this.$message({
                  showClose: true,
                  message: '请输入正确手机号',
                  type: 'error'
                }); 
            }else{
              this.szcInputValue = e.target.value;
            }
            
          }
         },
           closeSzcDiolag(){
              $(".szc-wrap").addClass("hide");
          },
           czmButton(e){
            if(this.czmInputValue.length == 0){
                this.$message({
                  showClose: true,
                  message: '请填写姓名',
                  type: 'error'
                });
            }else{
              var data = [{
                  "surveyBaseInfoId":this.czmInputId,
                  "personName": this.czmInputValue
              }]
              ///boot-pub-survey-manage//survey_base/v1/modify
             axios.post(this.ajaxUrl+"/survey_base/v1/modify",data).then(response => {
               if(response.status == 200){
                 // Bus.$emit('addBar',this.id)
                 // this.goCaseDetail(this.id);
                 this.caseDetailData.reportVehicleInfo.reporterName = this.czmInputValue
                 $(".czm-wrap").addClass("hide");
                 this.open6();
               }
            }, err => {
              
            })
            .catch((error) => {
            
            })
               //alert("jiekou")
            }
         },
          czmInput(e){

          if(e.target.value.length == 0){
            this.czmInputValue = "";
            this.$message({
              showClose: true,
              message: '请填写姓名',
              type: 'error'
            });
          }else{
            this.czmInputValue = e.target.value;
          }
         },
          closeCzmDiolag(){
             $(".czm-wrap").addClass("hide");
          },
             //小额理赔
      claimXeButton(){
        var MaterialLength = this.MaterialList.length;
        console.log(this.MaterialList)
        // var LossLength = this.LossList.length;
        if(MaterialLength == 0){
           this.$message.error("请将信息填写完成！");
           return
        };
         var arr = $(".part");
         var claimInformationOne = "";
         var noList = [];
         var num = 0;
         var str = "";
         var partsSelectedList = [];//部位选中表
         var monber = 0;
         for(var i = 0;i < arr.length;i++){
              num ++ ;
              if($(arr[i]).hasClass("checkoutGreen")){
                 str = $(arr[i]).children("span").html() + "-";
              }else{
                 str = "";
              };
              claimInformationOne += str;
                //5.22新加
                if(num%8 == 0){
                   if(claimInformationOne != ""){
                       partsSelectedList.push(1);
                       noList.push(claimInformationOne);
                       str = "";
                       claimInformationOne = "";
                   }else{
                       noList.push(claimInformationOne);
                       str = "";
                       claimInformationOne = "";
                       partsSelectedList.push(0);
                   }

                };
      
          };
          //理赔部位表
         var list =  this.modifyData(noList);
         console.log(list,"我是原始部位");
          for(var i = 0; i < partsSelectedList.length; i++){
                  if(partsSelectedList[i] == 1 && this.claimMoneyOne[i]){
                    //alert(11111111)
                      //理赔信息
                      var claimList = this.disposalData(list);
                      console.log(list,"我是部位")
                      this.claimList = claimList;
                      console.log(claimList,"5654654654")
                      // this.signatureData();
                      // console.log(claimList,11111111111)
                      $(".claim-wrap-xe").addClass("hide");
                     
                     return
                  }
            };
            this.$message.error("请将信息填写完成！");

      },
            //理赔确定按钮
        claimButton(){
           var that = this;
           var arr = $(".part");
           var claimInformationOne = "";
           var noList = [];
           var partsSelectedList = [];//部位选中表
           var num = 0;
           var str = "";
           var monber = 0;
           for(var i = 0;i < arr.length;i++){
                num ++ ;
                if($(arr[i]).hasClass("checkoutGreen")){
                   str = $(arr[i]).children("span").html() + "-";
                }else{
                   str = "";
                };
                claimInformationOne += str;
                //5.22新加
                if(num%8 == 0){
                   if(claimInformationOne != ""){
                       partsSelectedList.push(1);
                       noList.push(claimInformationOne);
                       str = "";
                       claimInformationOne = "";
                   }else{
                       noList.push(claimInformationOne);
                       str = "";
                       claimInformationOne = "";
                       partsSelectedList.push(0);
                   }

                }
                // if(num%8 == 0 && claimInformationOne != ""){
                //   alert(1)
                //   alert(num);
                //   alert(claimInformationOne)
                //   partsSelectedList.push(1);
                //   noList.push(claimInformationOne);
                //   str = "";
                //   claimInformationOne = "";
                // };


            };
            console.log(partsSelectedList,"部位选中表")
            //理赔部位表
           var list =  this.modifyData(noList);
           console.log(list,"我是原始部位")
            //快赔协议，把钱、部位控制修改为至少填写一个//5.22新加
            // if(list.length != this.ImgInfo.length && monber != this.ImgInfo.length){
            //       for(var i = 0; i < partsSelectedList.length; i++){
            //             if(partsSelectedList[i] == 0){
            //                if(this.claimMoneyOne){
            //                   if(!this.claimMoneyOne[i]){
            //                      this.$message.error("请将信息填写完成！");
            //                      return
            //                   }
            //                }
            //             }
            //       };
            // };
            for(var i = 0; i < partsSelectedList.length; i++){
                  if(partsSelectedList[i] == 1 && this.claimMoneyOne[i]){
                    //alert(11111111)
                      //理赔信息
                      var claimList = this.disposalData(list);
                      console.log(list,"我是部位")
                      this.claimList = claimList;
                      console.log(claimList,"5654654654")
                      // this.signatureData();
                      // console.log(claimList,11111111111)
                      $(".claim-wrap").addClass("hide");
                     
                     return
                  }
            };
            this.$message.error("请将信息填写完成！");
           //快赔协议，把钱、部位控制必填填写
           // if(list.length != this.ImgInfo.length){
           //      this.$message.error("请将信息填写完成！");
           //      return
           // }
           // // console.log(this.claimMoneyOne,"money")
           // for(var i  in this.claimMoneyOne){
           //    monber ++;
           // }
           // if(monber != this.ImgInfo.length){
           //    this.$message.error("请将信息填写完成！");
           //    return
           // }

           
           
           // console.log(this.ImgInfo,222222)
           // console.log(claimList,6666666666)
           
        },
          disposalData(arr){
            // console.log(arr,55555555)
               var claimList = [];
               for(var i = 0; i < this.ImgInfo.length; i++){
                 var obj = {};
                  obj.licenseNo = this.ImgInfo[i].originalVehicleLicenseNo;
                  //cs
                  //obj.surveyBaseInfoId = 1997;
                  obj.surveyBaseInfoId = this.ImgInfo[i].id;
                  obj.damagedPart = arr[i];
                  obj.claimAmount = this.claimMoneyOne[i] ? this.claimMoneyOne[i]:"";
                  claimList.push(obj)
                 
               }
               console.log(claimList,"我是参数数据")
               return claimList;
          },
         getImgInfo(){
              var list = [];
              // console.log(this.caseDetailData.reportVehicleInfo.id,"我是id")
              list.push({originalVehicleLicenseNo:this.caseDetailData.reportVehicleInfo.vehicleLicenseNo,id:this.caseDetailData.reportVehicleInfo.id})
             if(this.thirdActive){
               var obj = this.accidentVehicleInfos

              for(var i in obj){
                //alert(11111)
                 list.push({originalVehicleLicenseNo:obj[i].vehicleLicenseNo,id:obj[i].id})
              }
             };
             // list.push({originalVehicleLicenseNo:2222222222222,id:33333333333333})
             this.ImgInfo = list;
            console.log(list,8888)

          },
         //签字数据
         signatureData(){
              if(this.signatureList.length == 3){
                this.isTargetSign = true;
                this.isThirdSign = true;
                
              }else{
                  if(this.signatureList[1] == "标的签字"){
                     this.isTargetSign = true;
                     this.isThirdSign = false;
                     
                  }
                if(this.signatureList[1] == "三者签字"){
                     this.isThirdSign = true;
                     this.isTargetSign = false;
                     
                }
                if(!this.signatureList[1]){
                    this.isThirdSign = false;
                    this.isTargetSign = false;
                }
              }
             
                  
          // alert(this.isTargetSign);
          // alert(this.isThirdSign);
         },
          handleCheckedCitiesChange(value) {
            this.signatureList = value;
            
           },
           handleCheckedMaterialChange(value){
            // console.log(this.MaterialList)
            this.MaterialList = value;
          },
           //理赔金额
          one_part(e,key){
             this.claimMoneyOne[key] = e.target.value;
          },
           part(e){
            if($(e.target).hasClass("checkoutGreen")){
                $(e.target).removeClass("checkoutGreen");
                $(e.target).addClass("checkoutWhite");
              }else{
                $(e.target).addClass("checkoutGreen");
                $(e.target).removeClass("checkoutWhite");
              }
          },
          closeXeClaimDiolag(){
            $(".claim-wrap-xe").addClass("hide");

            $(".triggerXeCheckout").trigger("click");
          },
          closeClaimDiolag(){
             $(".claim-wrap").addClass("hide");
             $(".triggerCheckout").trigger("click");
          },
           //6.22
      goApplicationBook(){
        this.$router.push('/applicationBook')
      },
           setDetails(){

           var type = this.caseDetailData.surveySingleStatus

           if(type == null){
              this.$message({
                showClose: true,
                message: '单证还未发送',
                type: 'error'
              });
              return 
            }
            var id = this.caseDetailData.surveySingleId
              localStorage.setItem("wIdData",id);
              var url = window.location.href.substring(0,(window.location.href.indexOf("#")+2));
              console.log(url,88888888888888888);
              console.log(url+ "message");
              window.open(url+ "message")
            // alert(type)
            //this.$router.push("message");
              // var id = this.caseDetailData.surveySingleId
              // var url = window.location.href.substring(0,(window.location.href.indexOf("#")+2));
              // console.log(url,88888888888888888);
              // console.log(url+ this.ajaxUrl+"survey_single/v1/view?surveySingleId="+ id);
              // window.open(url+ this.ajaxUrl+"survey_single/v1/view?surveySingleId="+ id)
              // var url = window.location.href.substring(0,(window.location.href.indexOf("#")+2));
             // axios.get(this.ajaxUrl+"/survey_single/v1/view?surveySingleId="+ id)
             //    .then(response => {
             //          console.log(id,"跳转id")
             //          // var url = "https://survey.zhongchebaolian.com" + this.ajaxUrl+"/survey_single/v1/view?surveySingleId="+ id
             //          var url = window.location.href.substring(0,(window.location.href.indexOf("#")+2));
             //          console.log(url,88888888888888888)
             //          console.log(url+ this.ajaxUrl+"/survey_single/v1/view?surveySingleId="+ id)
             //          //window.open(url)
             //          this.openWin(url);
             //    }, err => {
             //      console.log(err);
             //    })
             //    .catch((error) => {
             //      console.log(error)
             //    })
        },
        typeSelection(){
              var str = "1";
              if(this.selectStateTwo){
                 str = "2";
              }
              if(this.selectStateOne){
                str = "3"
              }
              return str
          },
          //修改5.22
          closeUnderlying(){
           $('.underlying-wrap').addClass("hide");
          },
          //发送订单按钮//修改5.22
          underlyingThreeCar(){
            this.underlyingThreeCarStatus();
            $('.underlying-wrap').removeClass("hide");
           
          },
            //小额理赔
          smallClaims(data){
               axios.post(this.ajaxUrl+"/small_claim/v1/send",data)
               .then(response => {
                  if(response.status == 200){
                    $(".underlying-wrap").addClass("hide");

                    //修改5.22
                      this.checkedCities = [""];
                      this.signatureList = [""];
                    //this.open6();
                    this.$alert('发送完成！', '温馨提示', {
                       confirmButtonText: '确定',
                       callback: action => {
                         
                       }
                   });
                  }
               }, err => {
                 console.log(err);
                 $(".loadingBox").addClass('hide')
               })
               .catch((error) => {
                 console.log(error)
                 $(".loadingBox").addClass('hide')
               })
          },
           //小额理赔
          modifierMaterialList(){
             var arr = [];
             var length = this.MaterialList.length;

             if(length  > 0){
                 arr.push(this.MaterialList[0]);
                 if(length  > 1){
                   arr.push(this.MaterialList[1])
                 };
             };
            return arr
        },
          //标车三者车确定按钮
          setElectronic(){
           console.log(this.caseDetailData,"我是case数据");
            //确定标车和三者车勾选状态
           this.signatureData();
           if(!this.isTargetSign && !this.isThirdSign){
             this.$message.error("请进行勾选！")
             return
           }
          
           var type =  this.typeSelection();
           var data = {};
             data.type =  this.typeSelection();
             //cs
             //data.surveyNo = "9e9d5480311b4b3496b16c9664fd84e3"
             data.surveyNo = this.caseDetailData.accidentInfo.surveyNo;
             //修改5.22
             data.isTargetSign = this.isTargetSign;
             data.isThirdSign = this.isThirdSign;
             ///////
            if(this.selectStateOne){
              data.type =  this.typeSelection();
              //cs
              //data.surveyNo = "9e9d5480311b4b3496b16c9664fd84e3"
              data.surveyNo = this.caseDetailData.accidentInfo.surveyNo;
              data.isTargetSign = this.isTargetSign;
              data.isThirdSign = this.isThirdSign;
              data.claimList = this.claimList;
            }

             //小额赔偿新增
          if(!this.selectStateThree && this.selectStateTwo && this.selectStateOne){
              data.type = '';
              data.evidenceType = this.modifierMaterialList();
              data.lossConf = this.radio;
              console.log(data,747474747747474);
              this.smallClaims(data);
              //小额赔偿接口
              return
          };
           console.log(data,747474747747474);
            axios.post(this.ajaxUrl+"/survey_single/v1/send",data)
            .then(response => {
               // console.log(response,11111111111111)
               if(response.status == 200){
                 $(".underlying-wrap").addClass("hide");
                 //修改5.22
                 this.checkedCities = [""];
                 this.signatureList = [""];
                 // this.isTargetSign = false;
                 // this.isThirdSign = false;
                 ///////
                 //this.open6();
                     this.$alert('发送完成！', '温馨提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                          
                        }
                    });
               }
            }, err => {
              console.log(err);
              $(".loadingBox").addClass('hide')
            })
            .catch((error) => {
              console.log(error)
              $(".loadingBox").addClass('hide')
            })
          console.log(data,5555555555)
        },
        //标的车和三者车状态//修改5.22
        underlyingThreeCarStatus(){
          if(!this.selectStateThree && this.selectStateTwo && this.selectStateOne){
              this.cityOptions = ["标的签字"];
              return
          };
          if(this.thirdActive){
             this.cityOptions = ["标的签字","三者签字"];
          }else{
            this.cityOptions = ["标的签字"];
          }
        },
        handleCheckedChange(value) {

           if(value[1] == "小额快赔"){
               $('.claim-wrap-xe').removeClass("hide");
               this.selectStateTwo = true;
               this.selectStateOne = true;
               this.checkedTypes = ["小额快赔"];
               return
          }

            if(value[1] == "转赔授权书"){
                 this.selectStateThree = true;
                 this.selectStateTwo = true;
                 return
            }
            if(value[1] == "快赔协议"){
                 $('.claim-wrap').removeClass("hide");
                 this.selectStateThree = true;
                 this.selectStateOne = true;
                 if(this.thirdActive){
                    this.cityOptions = ["标的签字","三者签字"];
                 }else{
                   this.cityOptions = ["标的签字"];
                 }
                 return
            }
            this.selectStateTwo = false;
            this.selectStateOne = false;
            this.selectStateThree = false;
            this.checkedTypes = ["电子查勘单"];
          },
          /////////////////////
          saveBeizhu(){
            this.beizhuInfo = this.beizhuInfo.replace(/(^\s*)|(\s*$)/g, "");
            if(this.beizhuInfo == ''){
              this.open4("请输入备注")
            }else{
              var data = {
                'surveyNo':this.surveyNo,
                "noteContent":this.beizhuInfo

              }
              axios.post(this.ajaxUrl+"/survey/order/v1/save/note",data)
                .then(response => {
                  if(response.data.rescode == 200){
                    this.open2(response.data.resdes)
                  }else{
                    this.open4(response.data.resdes)
                  }
                }, err => {
                  console.log(err);
                })
                .catch((error) => {
                  console.log(error)
                })
            }
          },
          savethirdCar(vehicleLicenseNumber){
            for(var i=0;i<this.thirdCar.length;i++){
              if(this.thirdCar[i].vehicleLicenseNo == vehicleLicenseNumber){
                var vehicleOwnerPhone = $(".thirdphone").eq(i).val();
              }
            }
            vehicleOwnerPhone = vehicleOwnerPhone.replace(/\s/g,"");
            var reg = new RegExp("^[0-9]*$");
            if(!reg.test(vehicleOwnerPhone)){
              this.open4("请输入正确手机号")
            }else if(vehicleOwnerPhone.length<11 && vehicleOwnerPhone.length>0) {
              this.open4("请输入正确手机号")
            }else{
              if(vehicleOwnerPhone == '') {
                for (var i = 0; i < this.thirdCar.length; i++) {
                  if (this.thirdCar[i].vehicleLicenseNo == vehicleLicenseNumber) {
                    $(".thirdphone").eq(i).val('暂无');
                  }
                }
              }
              var data = {
                'surveyNo':this.surveyNo,
                "vehicleLicenseNumber":vehicleLicenseNumber,
                "vehicleOwnerPhone": vehicleOwnerPhone
              }
              axios.post(this.ajaxUrl+"/survey/vehicle/v1/owner",data)
                .then(response => {
                  if(response.data.rescode == 200){
                    this.open2(response.data.resdes)
                  }else{
                    this.open4(response.data.resdes)
                  }
                }, err => {
                  console.log(err);
                })
                .catch((error) => {
                  console.log(error)
                })
            }
          },
          getBeizhu(){
            $(".beizhuDiolag").removeClass("hide");
            var data = {
              'surveyNo':this.surveyNo,
            }
            axios.post(this.ajaxUrl+"/survey/order/v1/query/note",data)
              .then(response => {
                if(response.data.rescode == 200){
                  if(response.data.data != '' || response.data.data != null){
                    this.beizhuInfo = response.data.data.noteContent;
                    this.beizhuActive = true;
                  }
                }else{
                  this.open4(response.data.resdes)
                }
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })
          },
          getvedio(){
            if(this.surveyVideoRooms.length!=0){
             this.$nextTick(() => {
                for(let i in this.surveyVideoRooms){
                  var swfobj = new SWFObject('https://union.bokecc.com/flash/player.swf', "videourl"+ i, '100%', '200', '8');
                  swfobj.addVariable("userid", "F08A8B432F24065A"); //  partnerID,用户id
                  swfobj.addVariable("videoid", this.surveyVideoRooms[i].videoRoomId);  //  spark_videoid,视频所拥有的 api id
                  swfobj.addVariable("mode", "api");  //  mode, 注意：必须填写，否则无法播放
                  swfobj.addVariable("autostart", "false"); //  开始自动播放，true/false
                  swfobj.addVariable("jscontrol", "true");  //  开启js控制播放器，true/false
                  swfobj.addParam('allowFullscreen', 'true');
                  swfobj.addParam('allowScriptAccess', 'always');
                  swfobj.addParam('wmode', 'transparent');
                  swfobj.write("video" + i);
                }
              })
            }

          },
          open4(resdes) {
            this.$message.error(resdes);
          },
          open2(resdes) {
            this.$message.success(resdes);
          },
          getCarNo(vehicleLicenseNo){
           this.thirdvehicleLicenseNo =  vehicleLicenseNo
          },
          handleCurrentChangethird(currentPage){
            for(let i in this.accidentVehicleInfos){
              if(this.thirdvehicleLicenseNo == this.accidentVehicleInfos[i].vehicleLicenseNo){

                this.getCasePhones(currentPage,4,this.thirdvehicleLicenseNo,this.surveyNo,i)
              }
            }
          },
          handleCurrentChangeAim(currentPage) {//跳转
            //当前页改变调用接口 currentPage   pageSizeAim
            this.currentPageNoAim = currentPage;
            this.getCasePhones(this.currentPageNoAim,4,this.caseDetailData.reportVehicleInfo.vehicleLicenseNo,this.surveyNo,"")
          },
          getCasePhones(currentPageNo,pageSize,vehicleLicenseNo,surveyNo,source){
            var paramData = {
              "pageNo": currentPageNo,
              "pageSize": pageSize,
              "vehicleLicenseNo": vehicleLicenseNo,
              "surveyNo": surveyNo
            }
            axios.post(this.ajaxUrl+"/survey/order/history/v1/photo/list",paramData)
              .then(response => {
                if(response.data.rescode == 200){
                    if(source == ""){
                      this.recordsImg = response.data.data.records;

                      this.totalCountAim = response.data.data.total;
                      this.$nextTick(() => {
                        new Viewer(document.getElementById('scaleImg'), {
                          url: 'data-src',
                          navbar:false,
                          toolbar:true,
                          loop: true
                        })
                      })
                    }else{
                      var thirdLength = this.accidentVehicleInfos.length;
                      for(let i in this.accidentVehicleInfos){
                        if(i == source){
                          this.accidentVehicleInfos[i].thirdCarImg = [];
                          for(let j in response.data.data.records){
                            this.accidentVehicleInfos[i].thirdCarImg.push(response.data.data.records[j])
                          }
                          this.accidentVehicleInfos[i].total = response.data.data.total;
                          this.accidentVehicleInfos[i].pageNum = response.data.data.pageNum;
                        }
                      }
                      this.$nextTick(() => {
                        this.thirdCar = ''
                        this.thirdCar = this.accidentVehicleInfos;
                        for (let i in this.thirdCar) {
                          this.$nextTick(() => {
                            new Viewer(document.getElementsByClassName('suibian')[i], {
                              url: 'data-src',
                              navbar: false,
                              toolbar: true,
                              loop: true
                            })
                          })
                        }
                      })
                    }

                }else{

                }
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })
          },
          closCaseDetail(){
            $(".caseDetail").addClass("hide")
            this.$store.commit('setCaseDetailActive', false)
          },
        


        ////////////////////
        saveBeizhu(){
          this.beizhuInfo = this.beizhuInfo.replace(/(^\s*)|(\s*$)/g, "");
          if(this.beizhuInfo == ''){
            this.open4("请输入备注")
          }else{
            var data = {
              'surveyNo':this.surveyNo,
              "noteContent":this.beizhuInfo

            }
            axios.post(this.ajaxUrl+"/survey/order/v1/save/note",data)
              .then(response => {
                if(response.data.rescode == 200){
                  this.open2(response.data.resdes)
                }else{
                  this.open4(response.data.resdes)
                }
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })
          }
        },
        savethirdCar(vehicleLicenseNumber){
          for(var i=0;i<this.thirdCar.length;i++){
            if(this.thirdCar[i].vehicleLicenseNo == vehicleLicenseNumber){
              var vehicleOwnerPhone = $(".thirdphone").eq(i).val();
            }
          }
          vehicleOwnerPhone = vehicleOwnerPhone.replace(/\s/g,"");
          var reg = new RegExp("^[0-9]*$");
          if(!reg.test(vehicleOwnerPhone)){
            this.open4("请输入正确手机号")
          }else if(vehicleOwnerPhone.length<11 && vehicleOwnerPhone.length>0) {
            this.open4("请输入正确手机号")
          }else{
            if(vehicleOwnerPhone == '') {
              for (var i = 0; i < this.thirdCar.length; i++) {
                if (this.thirdCar[i].vehicleLicenseNo == vehicleLicenseNumber) {
                  $(".thirdphone").eq(i).val('暂无');
                }
              }
            }
            var data = {
              'surveyNo':this.surveyNo,
              "vehicleLicenseNumber":vehicleLicenseNumber,
              "vehicleOwnerPhone": vehicleOwnerPhone
            }
            axios.post(this.ajaxUrl+"/survey/vehicle/v1/owner",data)
              .then(response => {
                if(response.data.rescode == 200){
                  this.open2(response.data.resdes)
                }else{
                  this.open4(response.data.resdes)
                }
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })
          }
        },
        getBeizhu(){
          $(".beizhuDiolag").removeClass("hide");
          var data = {
            'surveyNo':this.surveyNo,
          }
          axios.post(this.ajaxUrl+"/survey/order/v1/query/note",data)
            .then(response => {
              if(response.data.rescode == 200){
                if(response.data.data != '' || response.data.data != null){
                  this.beizhuInfo = response.data.data.noteContent;
                  this.beizhuActive = true;
                }
              }else{
                this.open4(response.data.resdes)
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        },
        getvedio(){
          if(this.surveyVideoRooms.length!=0){
           this.$nextTick(() => {
              for(let i in this.surveyVideoRooms){
                var swfobj = new SWFObject('https://union.bokecc.com/flash/player.swf', "videourl"+ i, '100%', '200', '8');
                swfobj.addVariable("userid", "F08A8B432F24065A");	//	partnerID,用户id
                swfobj.addVariable("videoid", this.surveyVideoRooms[i].videoRoomId);	//	spark_videoid,视频所拥有的 api id
                swfobj.addVariable("mode", "api");	//	mode, 注意：必须填写，否则无法播放
                swfobj.addVariable("autostart", "false");	//	开始自动播放，true/false
                swfobj.addVariable("jscontrol", "true");	//	开启js控制播放器，true/false
                swfobj.addParam('allowFullscreen', 'true');
                swfobj.addParam('allowScriptAccess', 'always');
                swfobj.addParam('wmode', 'transparent');
                swfobj.write("video" + i);
              }
            })
          }

        },
        open4(resdes) {
          this.$message.error(resdes);
        },
        open2(resdes) {
          this.$message.success(resdes);
        },
        getCarNo(vehicleLicenseNo){
         this.thirdvehicleLicenseNo =  vehicleLicenseNo
        },
        handleCurrentChangethird(currentPage){
          for(let i in this.accidentVehicleInfos){
            if(this.thirdvehicleLicenseNo == this.accidentVehicleInfos[i].vehicleLicenseNo){
              this.getCasePhones(currentPage,4,this.thirdvehicleLicenseNo,this.surveyNo,i)
            }
          }
        },
        handleCurrentChangeAim(currentPage) {//跳转
          //当前页改变调用接口 currentPage   pageSizeAim
          this.currentPageNoAim = currentPage;
          this.getCasePhones(this.currentPageNoAim,4,this.caseDetailData.reportVehicleInfo.vehicleLicenseNo,this.surveyNo,"")
        },
        getCasePhones(currentPageNo,pageSize,vehicleLicenseNo,surveyNo,source){
          var paramData = {
            "pageNo": currentPageNo,
            "pageSize": pageSize,
            "vehicleLicenseNo": vehicleLicenseNo,
            "surveyNo": surveyNo
          }
          axios.post(this.ajaxUrl+"/survey/order/history/v1/photo/list",paramData)
            .then(response => {
              if(response.data.rescode == 200){
                  if(source == ""){
                    this.recordsImg = response.data.data.records;

                    this.totalCountAim = response.data.data.total;
                    this.$nextTick(() => {
                      new Viewer(document.getElementById('scaleImg'), {
                        url: 'data-src',
                        navbar:false,
                        toolbar:true,
                        loop: true
                      })
                    })
                  }else{
                    var thirdLength = this.accidentVehicleInfos.length;
                    for(let i in this.accidentVehicleInfos){
                      if(i == source){
                        this.accidentVehicleInfos[i].thirdCarImg = [];
                        for(let j in response.data.data.records){
                          this.accidentVehicleInfos[i].thirdCarImg.push(response.data.data.records[j])
                        }
                        this.accidentVehicleInfos[i].total = response.data.data.total;
                        this.accidentVehicleInfos[i].pageNum = response.data.data.pageNum;
                      }
                    }
                    this.$nextTick(() => {
                      this.thirdCar = ''
                      this.thirdCar = this.accidentVehicleInfos;
                      for (let i in this.thirdCar) {
                        this.$nextTick(() => {
                          new Viewer(document.getElementsByClassName('suibian')[i], {
                            url: 'data-src',
                            navbar: false,
                            toolbar: true,
                            loop: true
                          })
                        })
                      }
                    })
                  }

              }else{

              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        },
        closCaseDetail(){
          $(".caseDetail").addClass("hide")
          this.$store.commit('setCaseDetailActive', false)
        },
        enter(){
          $("#detailMap").removeClass("hide")
          var map = new BMap.Map("detailMap");
          map.centerAndZoom(new BMap.Point(116.331398,39.897445),11);
          map.enableScrollWheelZoom(true);

          // 用经纬度设置地图中心点
            if(this.longitude != "" && this.latitude!= ""){
              map.clearOverlays();
              var new_point = new BMap.Point(this.longitude,this.latitude);
              var marker = new BMap.Marker(new_point);  // 创建标注
              map.addOverlay(marker);              // 将标注添加到地图中
              map.panTo(new_point);
            }
        },
        leave(){
          $("#detailMap").addClass("hide")
        },
        mapRouter(){
          var data = this.coordinates;
          var num = 0;
          for(let i in data){
            if(data[i].longitude === null){
              num++
            }
          }
          if(num == 0){
            $(".mapBox").toggleClass("hide");
            if($('.mapBox').attr('class').indexOf('none') < 0){
              var map = new BMap.Map("mapContent");
              var length = data.length;
              map.enableScrollWheelZoom(true);
              var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
              for(var i =0;i<length;i++){
                driving.search(new BMap.Point(data[0].longitude,data[0].latitude),new BMap.Point(data[length-1].longitude,data[length-1].latitude));
              }
              driving.setSearchCompleteCallback(function() {
                //得到路线上的所有point
                data = driving.getResults().getPlan(0).getRoute(0).getPath();
                //画面移动到起点和终点的中间
                var centerPoint;
                centerPoint = new BMap.Point((data[0].longitude + data[data.length - 1].longitude) / 2, (data[0].latitude + data[data.length - 1].latitude) / 2);
                map.panTo(centerPoint);
                //连接所有点
                map.addOverlay(new BMap.Polyline(data, {strokeColor: "#f00", strokeWeight: 5, strokeOpacity: 1}));
              })
            }
          }else{
            this.open4("暂无查勘员信息")
          }
        },
        downLoadCase(){
          var  surveyId = parseInt(this.surveyId)
          window.open(this.ajaxUrl+"/survey/order/history/v1/details/download/"+surveyId)
        },
        cancelCase(){
          var paramData = {
            "action": "cancel",
            "surveyno": this.surveyNo,
            "mark": this.mark
          }
          axios.post(this.ajaxUrl+"/pub/survey/v1/action",paramData)
            .then(response => {
              if(response.data.rescode == 200){
                this.open2(response.data.resdes);
                this.$store.commit('setCaseDetailActive', false);//关闭详情组件组件
                this.$store.commit('getcaseListActive', true)//调用列表接口
              }else{
                if(response.data.rescode == "300"){
                  this.$router.push({path:"/"})
                }
                this.open4(response.data.resdes);
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }
        },
      components: {
      },
    }
</script>
