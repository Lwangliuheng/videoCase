<style scoped>
  .caseManage{
    margin: 15px auto;
    width: 1310px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 82vh;
    padding-bottom: 20px;
  }
  .caseContent{
    display: flex;
    padding-bottom:15px;
  }
  .caseLeft,.caseRight{
    width:246px;
    height: 488px;
    background:#fff;
  }
  .caseCenter{
    width: 746px;
    margin: 0 20px;
  }
  .caseManage .video-player{
    width: 100%;
    background: #515151;
    color: #fff;
    height: 488px;
  }
  .caseLeft .tit, .caseRight .tit {
    padding: 15px 0 5px;
  }
  .caseLeft .tit h4, .caseRight .tit h4{
    font-size: 20px;
    display: inline-block;
    border-left: 4px solid #35aa42;
    padding-left: 18px;
    font-weight: 600;
  }
  .editorCarInfo h4{
    font-size: 20px;
    font-weight: 600;
    margin-top:20px;
  }
  .caseLeft .cont, .caseRight .cont{
    padding: 0 20px 20px;
    overflow-y: scroll;
    max-height: 427px;
  }
 .m-noContent-mod {
    text-align: center;
    padding: 100px 0;
  }
   .m-noContent-mod .mnm-icon {
    margin-bottom: 20px;
  }
    .m-noContent-mod p {
      color: #999;
      font-size: 15px;
  }
  .casePhotos .g-content-row {
    margin-bottom: 20px;
  }
  .casePhotos .g-content-row .gcr-mod{
    background: #fff;
  }
  .casePhotos .m-carNo-imgInfo .gcr-tit {
    padding: 10px 0 5px;
    position: relative;
    overflow: hidden;
    display: flex;
  }
  .casePhotos .m-carNo-imgInfo .gcr-tit h4 , .typeContent h4{
    margin-top: 5px;
    font-size: 20px;
    display: inline-block;
    border-left: 4px solid #35aa42;
    padding-left: 18px;
    font-weight: 600;
  }
  .typeContent h4{
    border-left: none;
  }
  .gcr-tit .m-carNo-list {
    height: 40px;
    margin-left: 30px;
  }
  .gcr-tit .u-edit-icon {
    width: 16px;
    height: 14px;
    display: inline-block;
    background: url(../images/icon_edit_0.png) center center no-repeat;
    margin-left: 10px;
  }
  .gcr-tit .u-edit-iconGreay{
    width: 16px;
    height: 14px;
    display: inline-block;
    background: url(../images/icon_edit_1.png) center center no-repeat;
    margin-left: 10px;
  }
 .gcr-tit .m-carNo-add {
    cursor: pointer;
    width: 24px;
    height: 40px;
    display: inline-block;
    background: url(../images/icon_add_0.png) center center no-repeat;
    margin-left: 10px;
    -webkit-transition: all .2s ease-in 0s;
    transition: all .2s ease-in 0s;
  }
  .gcr-tit .m-carNo-list dd {
    font-size: 16px;
    padding: 10px;
    border: 1px solid #dcdcdc;
    margin-right: 10px;
    cursor: pointer;
  }
  .gcr-tit .m-carNo-list dd:hover{
    border: 1px solid #35aa42;
  }
  .casePhotos .g-content-row .gcr-cont {
    padding: 10px 0;
    min-height: 300px;
  }
 #picListZone .suibian{
    /*display: -webkit-box;*/
    margin-left: 15px;
    position:absolute;
    left:0;
  }
  #picListZone .suibian li{
   float: left;
    margin-bottom: 8px;
  }
  #picListZone .suibian img {
    width: 140px;
    height: 125px;
    display: block;
  }
  #picListZone .suibian  .liImgbox{
    background: #dcdcdc;
    position: relative;
    width: 140px;
    left: 0;
    top: 20px;
    height: 125px;
    margin: 0 8px;
  }
  #picListZone{
    width: 1310px;
    margin: 0 auto;
    display: flex;
    height: 200px;
    justify-content: center;
  }
  #picListZone .ulBox{
    position:relative;
    width: 1310px;
    /*overflow: hidden ;*/
  }
  #picListZone .suibian  .title {
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0px;
    height: 30px;
    line-height: 30px;
    width: 100%;
    background: rgba(255,255,255,.5);
    z-index: 99;
  }
  .scalImgBox,.editorCarInfo,.takePhoneImgBox,.takePhonetypeBox,.beizhuDiolag{
    background: rgba(0,0,0,0.8);
    width:100%;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1020;
  }
  .editorCarInfo,.beizhuDiolag{
    background: rgba(0,0,0,0.2);
     }
  .takePhonetypeBox{
    z-index: 1031;
  }
  .scalImgBox .bigImgContent,.takePhoneImgBox .takebigImgContent {
    width: 810px;
    margin: 6vh auto;
    background: #fff;
    padding: 20px;
    height: 85vh;
    position: relative;
  }
  .takePhoneImgBox .takebigImgContent{
    min-height: 460px;
  }
  .takePhonetypeBox .typeContent{
    width: 660px;
    margin: 6vh auto;
    background: #fff;
    padding: 20px;
    height: 820px;
    position: relative;
  }
  .editorCarInfo .editorContent,.beizhuDiolag .editorContent{
    width: 350px;
    margin-top: 16vh;
    margin-left: 72%;
    background: #fff;
    padding: 20px;
    height: 280px;
    position: relative;
  }
  .beizhuDiolag .editorContent{
    height: 325px;
  }
  .closeCaleImgBox,.closeEditorCar,.closeCityDiolag,.closetypeBox{
    font-size: 42px;
    right: 15px;
    top: 0;
    position: absolute;
    cursor: pointer;
  }
  .cityDialogBox .cityNameBox{
    width: 85%;
    text-align: center;
    clear: both;
    margin-left: 30px;
  }
  .cityDialogBox .cityNameBox .citySimpleName{
    width: 10%;
    height: 35px;
    line-height: 35px;
    border: 1px solid #bbb;
    color: #232323;
    border-radius: 5px;
    text-align: center;
    margin-right: 10px;
    float: left;
    margin-top: 20px;
    cursor: pointer;
  }
  .closeEditorCar{
    top: 5px;
  }
  .imgSize{
    width: 715px;
    height: 70vh;
    margin:15px auto;
    vertical-align: middle;
    overflow-y: scroll;
  }
  .imgSize img{
    max-width:100%;
    height: 100%;
  }
  .prebutton{
    position: absolute;
    top: 35vh;
    left:10px;
    color:#2EAB3B;
    font-size:30px;
  }
  .nextbutton{
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 35vh;
    color:#2EAB3B;
    font-size:30px;

  }

  .deletImg,.saveImg,.takedeletImg,.takesaveImg{
    color: #fff;
    width: 70px;
    height: 35px;
    margin-right:20px;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
  }
  .deletImg, .takedeletImg{
    background: #e75b5f;
    cursor: pointer;
  }
  #doing .item-txt-list {
    border-bottom: 1px dashed #dcdcdc;
    padding: 10px 0;
    line-height: 25px;
  }
  #doing .item-txt-list p {
    color: #666;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-btn-mod{
    margin: 15px 0;
  }
  .item-btn-mod #online{
    background: #efeff4;
    color: #999;
    border: 1px solid #dcdcdc;
    padding:8px;
    display: inline-block;
    width: 85px;
    text-align: center;
  }
  .item-btn-box{
    padding:15px 0;
  }
  #onlineLoding{
    background: #efeff4;
    color: #999;
    border: 1px solid #dcdcdc;
    padding: 8px;
    display: inline-block;
    width: 85px;
    text-align: center;
  }
  #onLinking {
    padding: 8px;
    border: 1px solid #35aa42;
    min-width: 65px;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    color: #35aa42;
  }
  #onOff{
    color: #e30920;
    border: 1px solid #e30920;
    padding: 8px;
    display: inline-block;
    text-align: center;
    width: 85px;
  }
  #hangUp{
    padding: 8px;
    border: 1px solid #35aa42;
    min-width: 65px;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    color: #35aa42;
    margin-left: 6px;
  }
  #nohangUp{
    color: rgb(153, 153, 153);
    background: rgb(239, 239, 244);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(220, 220, 220);
    border-image: initial;
    padding:8px;
    display: inline-block;
    text-align: center;
    min-width: 85px;
    margin-left:8px;
  }

  .item-btn-max{
    width:195px;
  }
   .item-btn-max #finishOrder, #beizhu {
    background: #35aa42;
    color: #fff;
    text-align: center;
    font-size: 16px;
    display: inline-block;
    padding: 10px;
     min-width:85px;
  }
  #beizhu{
    margin-left: 6px;
  }
  .item-btn-max #nofinishOrder{
    background: rgb(239, 239, 244);
    color: rgb(153, 153, 153);
    text-align: center;
    font-size: 16px;
    display: inline-block;
    padding: 10px;
    min-width:85px;
  }

  .wait-law-case {
    border: 1px dashed #dcdcdc;
    padding: 10px;
    margin-top: 15px;
    cursor: pointer;
  }
  .wait-law-case ul li {
    font-size: 14px;
    line-height: 24px;
  }

  .inputBox{
    margin: 30px 20px;
  }
  .beizhuDiolag .inputBox{
    margin: 12px 20px;
  }
  .inputBox input{
    border:1px solid #bbb;
    border-radius:6px;
    height:35px;
    padding-left: 6px;
    width:180px;
   }
  .editorContent .inputBox span{
    padding-right: 6px;
  }
  .saveCarInfo{
    color: #fff;
    border-radius:5px;
    height: 35px;
    display: inline-block;
    width:80px;
    line-height:35px;
    cursor: pointer;
  }

.inputBox .creatInputNo {
  height: 35px;
  line-height: 35px;
  border: 1px solid #bbb;
  border-radius: 4px;
  width: 35px;
  background: #fff;
  border-right: none;
  text-align: center;
  margin-right: -6px;
}
  .cityDialog,.orderSelectDialog,.openOrdercompleteDialog{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 200;
  }
  .openOrdercompleteDialog{
    z-index: 201;
  }
  .cityDialog{
    z-index: 1201;
  }
  .orderSelectDialog .selectBox select{
    border: 1px solid #bbb;
    height: 30px;
    width: 120px;
    border-radius: 5px;
    padding-left: 6px;
  }
  .orderSelectDialog .selectBox textarea{
    border: 1px solid #bbb;
    height: 120px;
    width: 320px;
    border-radius: 5px;
    margin-top: 15px;
    padding-top: 6px;
    text-indent: 15px;
  }
  .orderSelectDialog h4{
    font-weight: 600;
  }
 .openOrdercompleteDialog .completeImg{
    text-align: center;
  }
 .openOrdercompleteDialog .completeText{
   color: #2EAB3B;
   padding-top: 10px;
   font-weight: 600;
   font-size:20px;
 }
 .orderSelectDialog .selectBox{
    margin: 20px 25px;
  }

  .cityDialogBox,.orderSelectDialogBox,.openOrdercompleteDialogBox{
    width: 470px;
    margin: 6vh auto;
    background: #fff;
    padding: 20px;
    margin-top: 20vh;
    position: relative;
  }
  .openOrdercompleteDialogBox{
    width: 560px;
  }
  .prev {
    background: url(../images/icon_ctrl_1.png) center center no-repeat;
     height:32px;
     width: 32px;
    margin-top:70px;
  }
   .next {
    background: url(../images/icon_ctrl_0.png) center center no-repeat;
     height:32px;
     width: 32px;
     margin-top:70px;
  }
   .m-selectImgType-tit{
     margin-top: 20px;
   }
   .m-selectImgType-tit ul li {
    border: 1px solid #dcdcdc;
    position: relative;
    text-align: center;
    margin-right: 15px;
    font-size: 16px;
  }
  .m-selectImgType-tit ul li a{
     height: 48px;
     line-height: 48px;
     width: 169px;
     text-align: center;
     display: inline-block
   }
  .m-selectImgType-cont dl dd a{
    height: 40px;
    min-width: 140px;
    display: inline-block;
    padding: 0 6px;
    line-height: 40px;
  }
   .m-selectImgType-tit ul li.showTag,  .m-selectImgType-tit ul li:hover, #selectImgTypeCont .showTag{
    border: 1px solid #35aa42;
  }
  .m-selectImgType-tit ul li .tag{
    position: absolute;
    right: -1px;
    top: 0;
    width: 30px;
    height: 28px;
    background: url(../images/icon_tag_0.png) center center no-repeat;
    background-size: contain;
  }
  .m-selectImgType-cont {
    margin-top: 20px;
  }
  .m-selectImgType-cont dl dd {
    border: 1px solid #dcdcdc;
    position: relative;
    text-align: center;
    margin-right: 15px;
    margin-bottom: 15px;
    font-size: 14px;
    float: left;
  }

  .m-selectImgType-cont dl dd .tag {
    position: absolute;
    right: -1px;
    top: 0;
    width: 30px;
    height: 28px;
    background: url(../images/icon_tag_0.png) center center no-repeat;
    background-size: contain;
  }
  .m-selectImgType-cont dl dd:hover{
    border: 1px solid #35aa42;
  }
  .hoverBox{
    position: absolute;
    background: rgba(0,0,0,0.3);
    height:125px;
    width: 140px;
    z-index: 100;
    margin-left: 8px;
    margin-top:20px;
  }
 .hoverBox .openscalImgBox{
   position: relative;
   top: 50px;
   color: #fff;
   width: 50px;
   margin: 0 auto;
   height: 30px;
   text-align: center;
   line-height: 30px;
   border-radius: 4px;
   cursor: pointer;
 }
 .suibian li .tag {
    position: absolute;
    right: 0;
    top: 0;
    width: 48px;
    height: 46px;
    background: url(../images/icon_tag_0.png) center center no-repeat;
  }
  .bigImgContent .imgSize{
    position:relative;
    overflow: hidden;
  }
  .bigImgContent .imgSize ul{
    display: -webkit-box;
    margin: 0;
    position: absolute;
    left: 0;
  }
  .bigImgContent .imgSize ul li{
    width: 715px;
    height: 66vh;
    text-align: center;
    line-height:680px;
    overflow-y: scroll;
  }
.openOrderEndBox{
  text-align: center;
  margin: 25px auto;

}
  .openOrderEndBox .surebutton{
    color: #fff;
    padding: 10px 30px;
    cursor: pointer;

  }
  .dealCaseButton{
    text-align: center;
    padding: 25px 0 60px;
  }
  .dealCaseButton .dealCase{
    padding: 10px 20px;
    border: 1px solid #2EAB3B;

  }
  .dealCaseButton .dealNewCase{
    color: #232323;
    margin-right: 30px;
  }
  .dealCaseButton .dealOldCase{
    color: #fff;
    margin-left:20px;
  }
  .dealText{
    margin: 25px 0;
  }
  .creatCase{
    position:fixed;
    top: 10px;
    right: 15%;
    color: #fff;
    padding: 9px 16px;
    cursor: pointer;
  }
  .videoBox{
    /*position: relative;*/
  }
  .video-player .player-control {
    width: 100%;
    overflow: hidden;
    height: 40px;
    padding: 10px 0;
    background: #000;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    z-index: 1010;
  }
  .video-player .player-control-box {
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
  }
  .video-player .player-control-box .player-recording, .video-player .player-control-box .player-recording.disabled {
    cursor: pointer;
    margin-left: 20px;
    width: 18px;
    height: 26px;
  }
  .video-player .player-control-box .player-sound {
    cursor: pointer;
    width: 120px;
    margin-left: 40px;
  }
  .video-player .player-control-box .player-sound-box {
    overflow: hidden;
    width: 120px;
    position: relative;
    top: 3px;
    display: flex;
  }
  .video-player .player-control-box .player-sound-box .player-sound-min {
    width: 15px;
    height: 22px;
  }
  .video-player .player-control-box .player-sound-box .player-sound-ctrl {
    width: 73px;
    height: 22px;
    margin: 0 5px;
    position: relative;
  }
  .noUi-target {
    direction: ltr;
    position: relative;
    top: 10px;
    background: #FAFAFA;
    border-radius: 4px;
    border: 1px solid #D3D3D3;
    box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;
  }
  .noUi-base {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }
  .noUi-connect {
    background: #fff;
  }
  .noUi-origin {
    position: absolute;
    height: 0;
    width: 0;
  }
  .noUi-horizontal .noUi-handle {
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 100%;
    left: -5px;
    top: -5px;
  }
  .video-player .player-control-box .player-sound-box .player-sound-max {
    width: 22px;
    height: 22px;
  }
  .noUi-handle {
    position: relative;
    z-index: 1;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    background: #FFF;
    cursor: default;
  }
  .noUi-connect {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .noUi-horizontal {
    height: 2px;
    width:70px;
  }
  .video-player .player-control-box .player-auto-flash {
    cursor: pointer;
    width: 19px;
    height: 25px;
    margin-left: 140px;
  }
  .video-player .player-control-box .player-photo {
    cursor: pointer;
    width: 26px;
    height: 40px;
    margin-left: 40px;
  }
  .saveTakeImg{
    padding: 10px 30px;
    color: #fff;
    margin-top: 30px;
    cursor: pointer;
  }
  .suibian li .circle {
    position: absolute;
    right: -12px;
    top: -12px;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: #fff;
    border-radius: 100%;
    border: 1px solid #35aa42;
    color: #35aa42;
  }
  .backColorGreenButton{
    color: #fff;
    font-size: 15px;
    display: inline-block;
    width: 85px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    margin-right: 8px;
  }
  .viewer-footer{
    display:none;
  }
  .ts-word{
    color:red;
  }
</style>
<template>

  <div class="caseManage">
    <span class="creatCase backColorGreen" v-if="manualStatus == 2" @click="checkState">繁忙</span>
    <span class="creatCase backColorGreen" v-if="manualStatus == 0" @click="checkState">空闲</span>
    <div class="openOrdercompleteDialog hide">
      <div class="openOrdercompleteDialogBox">
        <span @click="closeopenOrderEndxDialog" class="closeCityDiolag">×</span>
        <div class="selectBox">
          <div class="completeImg">
           <img src="../images/complete.png"/>
            <p class="completeText">查勘已完成</p>
            <div v-if="haveCaseActive">
              <p class="dealText">检测到您当前存在'待处理案件',请选择处理新案件还是处理待处理案件</p>
              <div class="dealCaseButton">
                <span class="dealNewCase dealCase">处理新案件</span>
                <span class="dealOldCase dealCase backColorGreen">处理'待处理案件'</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="orderSelectDialog hide">
      <div class="orderSelectDialogBox">
        <h4>请选择订单完成类型</h4>
        <span @click="closeOrderDiolag" class="closeCityDiolag">×</span>
        <div class="selectBox">
          <div class="selectType">
            <select placeholder="请选择订单类型" v-model="isExceptionComplete">
              <option value="1">正常办结</option>
              <option value="0">异常办结</option>
            </select>
          </div>
          <textarea data-m class="textareaBox" v-model="exceptionComment" placeholder="请输入办结描述"></textarea>
          <div class="openOrderEndBox">
            <span class="backColorGreen surebutton" @click="openOrderEndBox">确定</span>
          </div>
        </div>
      </div>
    </div>
    <div class="cityDialog hide">
      <div class="cityDialogBox">
        <span @click="closeCityDiolag" class="closeCityDiolag">×</span>
        <div class="cityNameBox clear">
          <span class="citySimpleName" v-for="item in cityData" @click="selectCity(item)">{{item}}</span>
        </div>
      </div>
    </div>
    <div class="beizhuDiolag hide">
      <div class="editorContent">
        <h4>备注信息</h4>
        <span @click="closeBeizhu" class="right closeEditorCar">×</span>
        <div class="inputBox">
          <textarea style="width:100%;height:200px;border:1px solid #bbb;border-radius:6px;" v-model="beizhuInfo" placeholder="请输入备注信息" ></textarea>
        </div>
        <div style="margin: 20px auto;text-align: center;">
          <span class="backColorGreen saveCarInfo" @click="saveBeizhu">保存</span>
        </div>
      </div>
    </div>
    <div class="editorCarInfo hide">
      <div class="editorContent">
        <h4>车辆信息</h4>
        <span @click="closeEditorCar" class="right closeEditorCar">×</span>
        <div class="inputBox">
          <span>车牌号:</span>
          <input @click="openCityDialog" v-model="getCity" type="text" readonly="readonly" class="creatInputNo"/>
          <input style="width:140px;" v-model="vehicleLicenseNo" placeholder="请输入车牌号" type="text"/>
        </div>
        <!--<div class="inputBox">-->
          <!--<span>手机号:</span><input placeholder="请输入手机号" type="tel" maxlength="11"/>-->
        <!--</div>-->
        <div style="margin: 20px auto;text-align: center;">
          <span class="backColorGreen saveCarInfo" @click="savevehicle">保存</span>
        </div>
      </div>
    </div>
    <div class="takePhoneImgBox hide">
      <div class="takebigImgContent">
        <h4>{{imgType}}</h4>
        <span @click="closetakeCaleImg" class="right closeCaleImgBox">×</span>
        <div class="imgSize">
          <img id="bigsizeImg" :src="originalPhotoUrl"/>
        </div>
        <div style="display: flex;justify-content: center;margin-top:20px;">
          <div class="takedeletImg" @click="deletTakeImg">删除</div>
          <div class="takesaveImg backColorGreen" @click="openType">保存</div>
        </div>
      </div>
    </div>
    <div class="takePhonetypeBox hide">
      <div class="typeContent">
        <h4>请选择照片类型</h4>
        <span @click="closetypebox" class="right closetypeBox">×</span>
        <div class="typeCar">
          <div class="m-selectImgType-tit">
            <ul style="display: flex;">
              <li v-if="aimActive"  class="showTag" @click="selectCar($event,saveonevehicleLicenseNo)">
                <a href="#" title="#">车牌号：{{saveonevehicleLicenseNo}}</a>
                <div v-if="aimActive" class="tag"></div>
              </li>
              <li  class="" v-if="!aimActive" @click="selectCar($event,saveonevehicleLicenseNo)">
                <a href="#" title="#">车牌号：{{saveonevehicleLicenseNo}}</a>
                <div v-if="aimActive" class="tag"></div>
              </li>
              <li  v-if="savetwovehicleLicenseNo != '' && !thirdOneActive" class="" @click="selectCar($event,savetwovehicleLicenseNo)" >
                <a href="#" title="#">车牌号：{{savetwovehicleLicenseNo}}</a>
                <div v-if="thirdOneActive" class="tag"></div>
              </li>
              <li  v-if="savetwovehicleLicenseNo != '' && thirdOneActive" class="showTag" @click="selectCar($event,savetwovehicleLicenseNo)" >
                <a href="#" title="#">车牌号：{{savetwovehicleLicenseNo}}</a>
                <div v-if="thirdOneActive" class="tag"></div>
              </li>
              <li v-if="savethreevehicleLicenseNo != '' && thirdTwoActive " data-id="c0"  class="showTag" @click="selectCar($event,savethreevehicleLicenseNo)">
                <a href="#" title="#">车牌号：{{savethreevehicleLicenseNo}}</a>
                <div v-if="thirdTwoActive" class="tag"></div>
              </li>
              <li v-if="savethreevehicleLicenseNo != '' && !thirdTwoActive " data-id="c0"  class="" @click="selectCar($event,savethreevehicleLicenseNo)">
                <a href="#" title="#">车牌号：{{savethreevehicleLicenseNo}}</a>
                <div v-if="thirdTwoActive" class="tag"></div>
              </li>
            </ul>
          </div>
          <div class="m-selectImgType-cont" id="selectImgTypeCont">
              <dl class="clear">
                <dd data-code="item.code" class="ddClass" @click="selectType($event,item.photoType)" v-for="(item,index) in oneTypeSurveyPhotos">
                  <a href="#" title="#" data-type="item.photoType">{{item.photoTypeComment}}</a>
                  <div class="tag hide"></div>
                </dd>
              </dl>
          </div>
          <div style="text-align: center;margin-top:30px;">
            <span class="saveTakeImg backColorGreen" @click="sureTakeImg">确定</span>
          </div>
        </div>
      </div>
    </div>
    <div class="scalImgBox hide">
      <div class="bigImgContent">
        <h4>{{imgType}}</h4>
        <span @click="closeScaleImg" class="right closeCaleImgBox">×</span>
        <p style="margin: 20px;color: #666;" v-if="surveyPhotos.length>1">images {{scalImgCurrentIndex}} of {{scalImgLength}}</p>
        <div class="prebutton" @click="preScaleImg" v-if="surveyPhotos.length>1">
          <img src="../images/icon_ctrl_1.png"/>
        </div>
        <div class="imgSize">
          <ul class="scaleUlBox">
            <li v-for="item in surveyPhotos" style="">
              <img :src="item.watermarkPhotoUrl" />
            </li>
          </ul>
        </div>
        <div class="nextbutton" @click="nextScaleImg" v-if="surveyPhotos.length>1">
          <img src="../images/icon_ctrl_0.png"/>
        </div>
      </div>
    </div>
    <div class="caseContent">
      <video v-if="haveVideoActive" style="height:1px;width: 1px;" src="../images/source.mp3" autoplay="" type="video/mp3" controls="controls"></video>
      <div class="caseLeft">
        <div class="tit">
          <h4>正在处理案件</h4>
          <input type="hidden" id="cc-userid">
          <input type="hidden" id="cc-password">
          <input type="hidden" id="cc-roomid">
        </div>
        <div id="doing" class="cont" >
          <div class="item-txt-list" v-if="doingActive">
            <p>车牌号：<span id="bdno">{{leftData.reportVehicleLicenseNo}}</span> </p>
            <p>报案人姓名：{{leftData.reporterName}}</p>
            <p>报案人电话：<span id="bdtel">{{leftData.reporterPhone}}<span></span></span></p>
            <p>保险公司：{{leftData.insuranceCompanyName}}</p>
            <p class="address">报案地点：{{leftData.reportLocation}}</p>

            <div class="item-txt-list">
              <p>查勘员姓名：{{leftData.liveSurveyorName}} </p>
              <p>查勘员电话：{{leftData.liveSurveyorPhone }}</p>
              <p>查勘员接单数：{{leftData.liveSurveyorCompleteOrderCount}}</p>
              <p v-if="leftData.liveSurveyorStatus == '11'">查勘员状态：待指派</p>
              <p v-if="leftData.liveSurveyorStatus == '12'">查勘员状态：已指派</p>
              <p v-if="leftData.liveSurveyorStatus == '13'">查勘员状态：已到达</p>
              <p v-if="leftData.liveSurveyorStatus == '14'">查勘员状态：查勘中</p>
              <p v-if="leftData.liveSurveyorStatus == '15'">查勘员状态：已查勘</p>
            </div>
            <div class="item-btn-box">
              <p>订单状态：<span  v-if="leftData.orderStatus == '06'">待连线</span>
                <span  v-if="leftData.orderStatus == '07'">查勘中</span>
                <span  v-if="leftData.orderStatus == '08'">待审核</span>
                <span  v-if="leftData.orderStatus == '11'">已取消</span>
              </p>
              <div class="item-btn-mod">
                <a href="javascript:;" v-if="!OnlineActive && !processOnlineActive && !toOnlineActive"  class="link-btn mr10 disabled" id="online">连线</a>
                <a href="javascript:;" class="link-btn mr10 disabled " v-if="!OnlineActive && !processOnlineActive && toOnlineActive" id="onlineLoding" >连线中</a>
                <a href="javascript:;" class="link-btn mr10" v-if="!OnlineActive && processOnlineActive && !toOnlineActive" @click="join" id="onLinking" >连线 <span id="countTime" data-max="30">{{conttime}}</span>s</a>
                <a href="javascript:;" class="link-btn mr10 warn" @click="disconnect" v-if="OnlineActive && !processOnlineActive && !toOnlineActive" id="onOff" >挂断</a>
                <a href="javascript:;" class="link-btn" v-if="twoButton" id="hangUp" @click="hangUp(roomId)">挂起订单</a>
                <a href="javascript:;" class="link-btn" v-if="!twoButton" id="nohangUp">挂起订单</a>
              </div>
            </div>
            <div class="item-btn-max">
              <a href="javascript:;" class="link-btn-max" v-if="twoButton && surveyActive" id="finishOrder" @click="openOrderSelect">查勘完成</a>
              <a href="javascript:;"  v-else id="nofinishOrder">查勘完成</a>
              <a href="javascript:;"   id="beizhu" @click="openBeizhu">备注</a>
            </div>
          </div>
          <div class="m-noContent-mod" v-else>
            <div class="mnm-icon">
              <img  src="../images/bookIco_0.png">
            </div>
            <p>暂无正在处理中的案件...</p>
          </div>
      </div>
      </div>
      <div class="caseCenter">
        <div class="video-player">
          <div id="video" class="video" style="width: 746px;height: 488px;">
            <!--<video v-if="steamActive" id="local" width=746px height=488px style="border:1px solid;margin-right:20px;" muted="" autoplay="" controls></video>-->
            <div v-if="steamActive" class="videoBox" @mouseenter="enterVedeo" @mouseleave="leaveVideo">
              <video  id="remote" width=746px height=488px style="border:1px solid;margin-right:20px;" autoplay=""></video>
              <div id="bar_46122248740144030" style="width: 748px; height: 100%; position: relative; bottom: 0; right: 0;">
                <div class="player-control">
                  <div class="player-control-box">
                    <div id="playerRecording" class="player-recording" style="display:none">
                      <img src="../images/video_ico_10.png">
                    </div>
                    <div id="closeRecording" class="player-recording">
                    <img src="../images/video_ico_0.png">
                    </div>
                    <div class="player-sound">
                      <div class="player-sound-box">
                        <!--<div class="player-sound-min">-->
                           <!--<img src="../images/video_ico_5.png">-->
                        <!--</div>-->
                        <!--<div class="player-sound-ctrl">-->
                          <!--<div class="noUiSlider noUi-target noUi-ltr noUi-horizontal" id="noUiSlider">-->
                            <!--<div class="noUi-base">-->
                              <!--<div class="noUi-connect" style="left: 0%; right: 0%;">-->
                              <!--</div>-->
                              <!--<div class="noUi-origin" style="left: 100%;">-->
                                <!--<div id="voice" class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="100.0" aria-valuetext="100.00" style="z-index: 4;">-->
                                <!--</div>-->
                              <!--</div>-->
                            <!--</div>-->
                          <!--</div>-->
                        <!--</div>-->
                        <!--<div class="player-sound-max" @click="showFull">-->
                        <!--<img src="../images/video_ico_4.png">-->
                        <!--</div>-->
                      </div>
                    </div>
                    <div class="player-auto-flash" id="closevideo" style="display:none" @click="closeVideo">
                      <img style="width:30px;height:30px;" src="../images/videoClose.png">
                    </div>
                    <div class="player-auto-flash" id="openvideo"  @click="openVideo">
                      <img style="width:30px;height:30px;" src="../images/videoOpen.png">
                    </div>
                    <div class="player-auto-flash" id="closeflashButton" style="display:none">
                    <img src="../images/video_ico_11.png">
                    </div>
                    <div class="player-auto-flash" id="flashButton" @click="openLight">
                      <img src="../images/video_ico_1.png">
                    </div>
                    <div class="player-photo" id="photoButton" @click="takePic">
                      <img src="../images/video_ico_2.png">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="videoBox">
              <img id="video-background" src="../../video/static/video-default.png"/>
            </div>
          </div>
        </div>
      </div>
      <div class="caseRight">
        <div class="tit">
          <h4>待处理案件</h4>
        </div>
        <div id="wait" class="cont">
          <div class="wait-law-case-mod" id="waitLawCase" v-if="waitActive" >
            <div @dblclick ="goleftLine(item.surveyNo,item)" title="双击进行处理" class="wait-law-case" v-for="item in noDealCase">
              <ul>
                <li>车牌号：{{item.reportVehicleLicenseNo}}</li>
                <li>报案人电话：{{item.reporterPhone}}</li>
                <li>查勘员姓名：{{item.liveSurveyorName}}</li>
                <li>查勘员电话：{{item.liveSurveyorPhone}}</li>
                <li v-if = "item.orderStatus == '06'">订单状态：待查勘</li>
                <li v-if = "item.orderStatus == '07'">订单状态：查勘中</li>
                <li v-if = "item.orderStatus == '08'">订单状态：已查勘</li>
                <li v-if = "item.orderStatus == '11'">订单状态：已取消</li>
              </ul>
            </div>
          </div>
          <div class="m-noContent-mod" v-else>
            <div class="mnm-icon">
              <img src="../images/bookIco_0.png">
            </div>
            <p>暂无待处理的案件...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="casePhotos">
      <div class="g-content-row">
        <div class="ts-word" v-if="this.orgCode == '69a49132-13fd-4705-b769-3f9ac3161fc2'">如无行驶证请拍摄车辆年检标；营运车辆请拍摄营运资格证、从业资格证、开箱拍摄装载情况；搜集三者电话和骑手合影；前后碰撞请开箱拍摄内部及灯爪情况；现场如有特殊情况请及时反馈调度组！</div>
        <div class="gcr-mod m-carNo-imgInfo">
          <div class="gcr-tit" style="justify-content: space-between;" id="carInfo">
            <div class="flex">
                <h4>照片信息</h4>
                <div v-if="carPhoneActive" style="display:flex;">
                  <dl class="m-carNo-list" id="selectImgType" @click="selectCarAim('0',$event,saveonevehicleLicenseNo)">
                    <dd id="c0" class="data-car-m" >
                      <span v-if="oneCarActive" style="color: #35aa42;">标的车：{{saveonevehicleLicenseNo}}</span>
                      <span v-else>标的车：{{saveonevehicleLicenseNo}}</span>
                      <i data-type="1"  data-id="839" data-licenseno="saveonevehicleLicenseNo" @click="editorCar(saveonevehicleLicenseNo,saveoneoriginalVehicleLicenseNo,isOrderVehicleone,'0' )" v-if="oneCarActive" class="u-edit-icon"></i>
                      <i data-type="1"  data-id="839" data-licenseno="saveonevehicleLicenseNo" @click="editorCar(saveonevehicleLicenseNo,saveoneoriginalVehicleLicenseNo,isOrderVehicleone,'0')" v-else class="u-edit-iconGreay hide"></i>
                    </dd>
                  </dl>
                  <dl v-if="ImgInfo.length > 1" class="m-carNo-list" id="selectImgTypeTwo" @click="selectCarAim('1',$event,savetwovehicleLicenseNo)">
                    <dd id="c1" class="data-car-m">
                      <span v-if="TwoCarActive" style="color: #35aa42;">三者车：{{savetwovehicleLicenseNo}}</span>
                      <span v-else>三者车：{{savetwovehicleLicenseNo}}</span>
                      <i data-type="1"  data-id="839"  @click="editorCar(savetwovehicleLicenseNo,savetwooriginalVehicleLicenseNo,isOrderVehicletwo,'1')" v-if="TwoCarActive" class="u-edit-icon"></i>
                      <i data-type="1" data-id="839"  @click="editorCar(savetwovehicleLicenseNo,savetwooriginalVehicleLicenseNo,isOrderVehicletwo,'1')" v-else class="u-edit-iconGreay"></i>
                    </dd>
                  </dl>
                  <dl v-if="ImgInfo.length > 2" class="m-carNo-list" id="selectImgTypeThree" @click="selectCarAim('2',$event,savethreevehicleLicenseNo)">
                    <dd id="c2" class="data-car-m">
                      <span v-if="threeCarActive" style="color: #35aa42;">三者车：{{savethreevehicleLicenseNo}}</span>
                      <span v-else>三者车：{{savethreevehicleLicenseNo}}</span>
                      <i data-type="1"  data-id="839" @click="editorCar(savethreevehicleLicenseNo,savethreeoriginalVehicleLicenseNo,isOrderVehiclethree,'2')" v-if="threeCarActive" class="u-edit-icon"></i>
                      <i data-type="1"  data-id="839" @click="editorCar(savethreevehicleLicenseNo,savethreeoriginalVehicleLicenseNo,isOrderVehiclethree,'2')" v-else class="u-edit-iconGreay "></i>
                    </dd>
                  </dl>
                  <div class="m-carNo-add" v-if="carThreeActive" id="addCarNo" @click="openAddCar('3')"></div>
                </div>
            </div>
            <div style="margin-top: 3px;">
              <span class="backColorGreen backColorGreenButton" @click="takephoneType('0')">45度角</span>
              <span class="backColorGreen backColorGreenButton" @click="takephoneType('1')">车架号</span>
              <span class="backColorGreen backColorGreenButton" @click="takephoneType('2')">行驶驾驶证</span>
            </div>
          </div>
          <div class="gcr-cont" style="padding-top: 0">
            <div class="m-carNo-imgList" id="picListZone" v-if="carPhoneActive">
              <!--<div class="prev" @click="preImginfo"></div>-->
              <div class="ulBox">
                <ul v-if="oneCarActive" class="suibian">
                  <li @click="seletedCarType($event,saveonevehicleLicenseNo,item.photoType)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)" v-for="(item,index) in oneTypeSurveyPhotos">
                    <div class="hoverBox hide">
                      <div v-if="item.hasUrl == 'true'" @click.stop="scaleImg(item.surveyPhotos,$event,item.photoType,item.photoTypeComment)" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox">
                      <img :src="item.surveyPhotos[0].watermarkPhotoUrl">
                      <br>
                      <span class="title">
                        <a href="javascript:;">{{item.photoTypeComment}}</a>
                       </span>
                      <div class="tag hide"></div>
                      <div class="circle" v-if="item.photoCount > 1">{{item.photoCount}}</div>
                    </div>
                  </li>
                </ul>
                <ul v-if="TwoCarActive" class="suibian">
                  <li @click="seletedCarType($event,savetwovehicleLicenseNo,item.photoType)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)" v-for="(item,index) in twoTypeSurveyPhotos">
                    <div class="hoverBox hide">
                      <div v-if="item.hasUrl == 'true'" @click.stop="scaleImg(item.surveyPhotos,$event,item.photoType,item.photoTypeComment)" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox">
                      <img :src="item.surveyPhotos[0].watermarkPhotoUrl">
                      <br>
                      <span class="title">
                        <a href="javascript:;">{{item.photoTypeComment}}</a>
                       </span>
                      <div class="tag hide"></div>
                      <div class="circle" v-if="item.photoCount>1">{{item.photoCount}}</div>
                    </div>

                  </li>
                </ul>
                <ul v-if="threeCarActive" class="suibian">
                  <li @click="seletedCarType($event,savethreevehicleLicenseNo,item.photoType)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)" v-for="(item,index) in threeTypeSurveyPhotos">
                    <div class="hoverBox hide">
                      <div v-if="item.hasUrl == 'true'" @click.stop="scaleImg(item.surveyPhotos,$event,item.photoType,item.photoTypeComment)" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox">
                      <img :src="item.surveyPhotos[0].watermarkPhotoUrl">
                      <br>
                      <span class="title">
                        <a href="javascript:;">{{item.photoTypeComment}}</a>
                       </span>
                      <div class="tag hide"></div>
                      <div class="circle" v-if="item.photoCount>1">{{item.photoCount}}</div>
                    </div>
                  </li>
                </ul>
              </div>
              <!--<div class="next" @click="nextImgInfo"></div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import caseList from '@/components/caseList'
  import caseMonitor from '@/components/caseMonitor'
  import Viewer from 'viewerjs';
  import axios from 'axios'
  import  '../assets/js/dog'
  var wilddogVideo = require('wilddog-video-base').wilddogVideo;
  var roomFactory = require('wilddog-video-room');
  wilddogVideo.regService('room', roomFactory);
  var appVideoId = 'wd6476157034byycgg';
  // 初始化 WilddogVideoRoom 之前，要先经过身份认证。这里采用匿名登录的方式。
  var config = {
    authDomain: appVideoId + ".wilddog.com",
    syncURL: "https://wd7055430119ruyynm.wilddogio.com/"
  };
  // 初始化Wilddog auth
  wilddog.initializeApp(config);

  export default {
    ready() {
    },
    data() {
      return{
        liveSurveyorCompleteOrderCount: "",//骑手接单数
        beizhuInfo: "",
        editorcar: "",
        opsType: "1",
        isOrderVehicleone: "",
        isOrderVehicletwo:"",
        isOrderVehiclethree: "",
        saveoneoriginalVehicleLicenseNo: "",
        savetwooriginalVehicleLicenseNo: "",
        savethreeoriginalVehicleLicenseNo: "",
        haveVideoActive: false,
        exceptionCode: "",
        exceptionComment: "",
        isExceptionComplete: "1",
        photoCountActive: false,
        aimActive: false,
        thirdOneActive: false,
        thirdTwoActive: false,
        carThreeActive: true,
        carPhoneActive: false,
        steamActive: false,
        manualStatus: 2,
        noDealCase:[],
        vehicleLicenseNo: "",
        savephotoType: "",
        savephotoUrl: "",
        surveyNo: "",
        saveonevehicleLicenseNo: "",
        savetwovehicleLicenseNo: "",
        savethreevehicleLicenseNo: "",
        oneCarActive: true,
        TwoCarActive: false,
        threeCarActive: false,
        haveCaseActive: false,
        surveyPhotos:[],//同种类型图片
        imglength: 15,//缩略图片个数,
        scalImgLength:"",//同种图片个数
        scalImgCurrentIndex: "1",
        oneTypeSurveyPhotos: [
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "0",
            "photoTypeComment": "45度车辆前景照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_1.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "1",
            "photoTypeComment": "当事人和车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_2.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "2",
            "photoTypeComment": "当事车辆车架号",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_3.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "3",
            "photoTypeComment": "车辆受损细节(1)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/1.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "4",
            "photoTypeComment": "车辆受损细节(2)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/1.png"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "5",
            "photoTypeComment": " 交强险标志",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_4.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "6",
            "photoTypeComment": "银行卡照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_5.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "7",
            "photoTypeComment": "其它照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_6.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "8",
            "photoTypeComment": "事故认定书",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_7.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "9",
            "photoTypeComment": "行驶本照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_8.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "10",
            "photoTypeComment": "驾驶证照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_9.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "11",
            "photoTypeComment": "当事人签名照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/2.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "12",
            "photoTypeComment": "身份证正面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_10.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "13",
            "photoTypeComment": "身份证背面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_11.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "14",
            "photoTypeComment": "查勘员与车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/3.png"
              }
            ]
          }
        ],
        twoTypeSurveyPhotos: [
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "0",
            "photoTypeComment": "45度车辆前景照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_1.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "1",
            "photoTypeComment": "当事人和车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_2.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "2",
            "photoTypeComment": "当事车辆车架号",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_3.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "3",
            "photoTypeComment": "车辆受损细节(1)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/1.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "4",
            "photoTypeComment": "车辆受损细节(2)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/1.png"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "5",
            "photoTypeComment": " 交强险标志",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_4.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "6",
            "photoTypeComment": "银行卡照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_5.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "7",
            "photoTypeComment": "其它照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_6.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "8",
            "photoTypeComment": "事故认定书",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_7.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "9",
            "photoTypeComment": "行驶本照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_8.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "10",
            "photoTypeComment": "驾驶证照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_9.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "11",
            "photoTypeComment": "当事人签名照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/2.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "12",
            "photoTypeComment": "身份证正面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_10.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "13",
            "photoTypeComment": "身份证背面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_11.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "14",
            "photoTypeComment": "查勘员与车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/3.png"
              }
            ]
          }
        ],
        threeTypeSurveyPhotos: [
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "0",
            "photoTypeComment": "45度车辆前景照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_1.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "1",
            "photoTypeComment": "当事人和车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_2.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "2",
            "photoTypeComment": "当事车辆车架号",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_3.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "3",
            "photoTypeComment": "车辆受损细节(1)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/1.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "4",
            "photoTypeComment": "车辆受损细节(2)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/1.png"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "5",
            "photoTypeComment": " 交强险标志",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_4.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "6",
            "photoTypeComment": "银行卡照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_5.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "7",
            "photoTypeComment": "其它照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_6.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "8",
            "photoTypeComment": "事故认定书",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_7.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "9",
            "photoTypeComment": "行驶本照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_8.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "10",
            "photoTypeComment": "驾驶证照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_9.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "11",
            "photoTypeComment": "当事人签名照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/2.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "12",
            "photoTypeComment": "身份证正面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_10.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "13",
            "photoTypeComment": "身份证背面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_11.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "14",
            "photoTypeComment": "查勘员与车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/3.png"
              }
            ]
          }
        ],
        tooneTypeSurveyPhotos: [
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "0",
            "photoTypeComment": "45度车辆前景照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_1.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "1",
            "photoTypeComment": "当事人和车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_2.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "2",
            "photoTypeComment": "当事车辆车架号",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_3.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "3",
            "photoTypeComment": "车辆受损细节(1)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/1.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "4",
            "photoTypeComment": "车辆受损细节(2)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/1.png"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "5",
            "photoTypeComment": " 交强险标志",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_4.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "6",
            "photoTypeComment": "银行卡照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_5.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "7",
            "photoTypeComment": "其它照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_6.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "8",
            "photoTypeComment": "事故认定书",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_7.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "9",
            "photoTypeComment": "行驶本照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_8.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "10",
            "photoTypeComment": "驾驶证照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_9.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "11",
            "photoTypeComment": "当事人签名照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/2.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "12",
            "photoTypeComment": "身份证正面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_10.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "13",
            "photoTypeComment": "身份证背面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/icon_noImg_11.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "14",
            "photoTypeComment": "查勘员与车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../video/static/3.png"
              }
            ]
          }
        ],

        carTypecarType: [],
        takephotoUrl:'',
        cityData: ['京','津','冀','晋','蒙','辽','吉','黑','沪','苏','浙','皖','闽','赣','鲁','豫','鄂','湘','粤','贵','云','藏','陕','甘','青','宁','新','琼','渝','川','桂'],
//        //倒计时
//        twoButton: true,
//        toOnlineActive: false,
//        processOnlineActive: true,
//        OnlineActive: false,
//
        //接通过程中
//        twoButton: false,
//        toOnlineActive: true,
//        processOnlineActive: false,
//        OnlineActive: false,
        //视频通话时
//        twoButton: false,
//        toOnlineActive: false,
//        processOnlineActive: false,
//        OnlineActive: true,
//未连接是
        surveyActive: false,
        twoButton: true,
        toOnlineActive: false,
        processOnlineActive: false,
        OnlineActive: false,

        waitActive: false,
        doingActive: false,
        jianKongActive: true,
        allCaseActive: false,
        ImgInfo: [],
        imgIndex: '',
        imgType: "",
        photoUrl: "",
        getCity: '京',
        left:0,
        scaleImgLeft: 0,
        roomId: "",
        roomInstance: '',
        localEl:"",
        remoteEl:"",
        videosEl: "",
        userId: "",
        orgCode: "",
        conttime: '30',
        leftData:"",
        node: "",
        connectNode: "",
        sessionNode: "",
        syncSessionNodePath: "",
        t: '',
        originalPhotoUrl:"",
        watermarkPhotoUrl:"",
        longitude:"",
        latitude:"",
        savevehicleLicenseNo: "",
        photoType: "",
        errorCode: "",
        errorMsg: "",
        remoteStream: "",
        localStream: "",
        warning:"",
        handleSurvey: "",
        beatTime: "",
        freshActive: false,
        originalVehicleLicenseNo: "",
        isOrderVehicle: ""
      }
    },
    created(){
//      this.getUserMedia({video:true},"","");
      this.userId = localStorage.getItem('userId');
      this.orgCode = localStorage.getItem('orgCode');
      console.log(this.orgCode == '69a49132-13fd-4705-b769-3f9ac3161fc2');
      console.log(this.orgCode);
      this.localEl = document.getElementById('local');
      this.videosEl = document.getElementById('video');
      this.getbeatTime()
      var m1 = localStorage.getItem('m'+this.userId);
      if(!this.freshActive){
        m1++;
      }
      localStorage.setItem('m'+this.userId,m1);
      if(this.userId&& this.orgCode){

      }else{
        this.$router.push({path:"/"})
      }

      this.getNodealCase()

      this.checkStateOne();
      this.getLeftData()
    },

    watch:{


    },
    mounted () {

      var that = this;
      window.onbeforeunload = function(){
        localStorage.setItem('A',"2")
      };
      window.onunload = function(){
        that.roomInstance.disconnect();
      }
      this.deletNode();
      this.beatTime = setInterval(() => {
        this.getbeatTime()
      }, 15000)
    },
    methods: {
      //判断浏览器是否允许摄像头访问
//      getUserMedia(obj, success, error) {
//        if (navigator.getUserMedia) {
//          getUserMedia = function(obj, success, error) {
//            navigator.getUserMedia(obj, function(stream) {
//              success(stream);
//            }, error);
//          }
//        } else if (navigator.webkitGetUserMedia) {
//          getUserMedia = function(obj, success, error) {
//            navigator.webkitGetUserMedia(obj, function(stream) {
//              var _URL = window.URL || window.webkitURL;
//              success(_URL.createObjectURL(stream));
//            }, error);
//          }
//        } else if (navigator.mozGetUserMedia) {
//          getUserMedia = function(obj, success, error) {
//            navigator.mozGetUserMedia(obj, function(stream) {
//              success(window.URL.createObjectURL(stream));
//            }, error);
//          }
//        } else {
//          return false;
//        }
//        return getUserMedia(obj, success, error);
//
//    },
    //3个照片类型
      takephoneType(type){
        var node = this.node;
        var photoType = 'WEB$$takePic'+ type;
        console.log(photoType)
        wilddog.sync().ref(node).child("video_session").push(photoType);
      },
      showFull(){
        var myvideo=document.getElementById("remote");
        myvideo.webkitrequestFullscreen();
      },
      getbeatTime(){
        var data = {
          'userid':this.userId,

        }
        axios.post(this.ajaxUrl+"/heartbeat/v1/beat",data)
          .then(response => {
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      open6() {
        this.$message({
          showClose: true,
          message: '操作成功',
          type: 'success'
        });
      },
      open2(resdes) {
        this.$message.success(resdes);
      },
      open4(resdes) {
        this.$message.error(resdes);
      },
      //保存照片
      sureTakeImg(){
        if(this.savevehicleLicenseNo == ''){
          this.open4("请选择车牌号")
        }else if(this.photoType == ''){
          this.open4("请选择照片类型")
        }else{
          var data = {
            "originalPhotoUrl":this.originalPhotoUrl,
            'photoType':this.photoType,
            "photoUrl":this.watermarkPhotoUrl,
            "surveyNo": this.roomId,
            "vehicleLicenseNo": this.savevehicleLicenseNo,
            "longitude":this.longitude,
            "latitude": this.latitude
          }
          axios.post(this.ajaxUrl+"/survey/order/v1/photo/choice",data)
            .then(response => {
              if(response.data.rescode == 200){
                $(".takePhoneImgBox").addClass("hide")
                $(".takePhonetypeBox").addClass("hide")
                this.open2(response.data.resdes)
                this.photoType = '';
                $("#selectImgTypeCont").find(".tag").addClass("hide");
                $(".ddClass").removeClass("showTag");
                this.getPhontos();
                this.aimActive = false;
                this.thirdOneActive = false;
                this.thirdTwoActive=false;
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
      forceClose(){
        var data = {
          "userId":this.userId
        }
        axios.post(this.ajaxUrl+"/web/surveyor/v1//force/close",data)
          .then(response => {
            if(response.data.rescode == 200){
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      deletNode(){
        var m1 = localStorage.getItem('A')
        if(m1){

        }else{
          m1 = "1";
        }
        localStorage.removeItem('A');
        var data = {
          'orgCode':this.orgCode,
          "userId":this.userId,
          "fresh": m1
        }
        console.log(m1)
        axios.post(this.ajaxUrl+"/sync/session/v1/close",data)
          .then(response => {
            if(response.data.rescode == 211){
              this.$router.push({path:"/"})
            }
            if(response.data.rescode == 200){
              this.getsyncSessionNodePath();
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      enterVedeo(){
        $("#bar_46122248740144030") .removeClass("hide");
      },
      leaveVideo(){
        $("#bar_46122248740144030") .addClass("hide");
      },
      openLight(){
        var node = this.node;
        wilddog.sync().ref(node).child("video_session").push("WEB$$openLight");
      },
      closeVideo(){
        var node = this.node;
        wilddog.sync().ref(node).child("video_session").push("WEB$$closeRemoteWindow");
        $("#closevideo").css("display",'none');
        $("#openvideo").css("display",'block')
      },
      openVideo(){
        var node = this.node;
        wilddog.sync().ref(node).child("video_session").push("WEB$$openRemoteWindow");
        $("#closevideo").css("display",'block');
        $("#openvideo").css("display",'none')
      },
      //点击拍照
      takePic(){
        var node = this.node;
        console.log(this.photoType);
        wilddog.sync().ref(node).child("video_session").push("WEB$$takePic");
      },
      pushErroCode(){
        if(this.errorCode == '41001'){
          this.open4(" token 过期")
        } else if(this.errorCode == '41002'){
          this.open4("token 无效")
        }else if(this.errorCode == '41004'){
          this.open4("视频会议建联失败")
        }else if(this.errorCode == '41005'){
          this.open4("音视频设备获取失败")
        }else if(this.errorCode == '41006'){
//          this.open4("操作超时")
        }
        if(this.roomId == ""){
          this.roomId = "noSurveyNo"
        }
        var data = {
          'errorOrigin':'0',
          'surveyNo':this.roomId,
          "videoRoomId":this.roomId,
          "errorCode": this.errorCode,
          "errorMsg":this.errorMsg
        }
        axios.post(this.ajaxUrl+"/survey/video/v1/error/trace",data)
          .then(response => {
            if(response.data.rescode == 200){

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
      //改变坐席自动状态
      releaseStatius(){
        var data = {
          "surveyNo":this.roomId
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/release",data)
          .then(response => {
            if(response.data.rescode == 200){
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      //
      rollback(){
        var data = {
          "surveyNo":this.roomId
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/timeout/rollback",data)
          .then(response => {
            if(response.data.rescode == 200){
              this.getNodealCase();
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
     //挂断视频
      disconnect(){
        this.node = '';
        this.releaseStatius()
        //取消订阅远程流
        var remoteStream = this.remoteStream;
        this.roomInstance.unsubscribe(remoteStream,function (error) {
          if(error == null){
            console.log('unsubscribe success');
          }else{
            this.errorCode = error.code;
            this.errorMsg = error.message;
            this.pushErroCode()
          }
        })
        //取消发布;
        var localStream = this.localStream
        this.roomInstance.unpublish(localStream,function(error){
          if(error == null){
            console.log('unpublish success');
          }else{
            this.errorCode = error.code;
            this.errorMsg = error.message;
            this.pushErroCode()
          }
        });
        //停止录制视频
//        this.roomInstance.stopRecording(function(url,err){
//          if(err == null){
//            console.log('停止录制，录制的文件地址：'+ url);
//          }else{
//            that.errorCode = err.code;
//            that.errorMsg = err.message;
//            that.pushErroCode()
//          }
//        });
        var that = this;
        window.onunload = function(){
          that.roomInstance.disconnect();
        }
        this.roomInstance.disconnect();
        this.localStream.close();
        this.surveyActive = true;

      },
      //忽略订单
      ignoreCase(){
        var data = {
          'surveyNo':this.roomId,
          "userId":this.userId
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/ignore",data)
          .then(response => {
            if(response.data.rescode == 200){
              $(".takePhoneImgBox").addClass("hide")
              $(".takePhonetypeBox").addClass("hide")
              this.open2(response.data.resdes)
              this.photoType = '';
              $("#selectImgTypeCont").find(".tag").addClass("hide");
              $(".ddClass").removeClass("showTag");
              this.aimActive = false;
              this.thirdOneActive = false;
              this.thirdTwoActive=false;
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
      //视频接连失败请求
      connectFail(){
        var data = {
          "surveyNo": this.roomId,
        }
        axios.post(this.ajaxUrl+"/survey/video/v1/connect/fail",data)
          .then(response => {
            if(response.data.rescode == 200){
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
      join(){
        this.haveVideoActive = false;
        this.handleSurvey = '';
        this.acceptStatus(this.roomId);
        $(".takePhoneImgBox").addClass("hide");
        this.twoButton= false;
        this.toOnlineActive= true;
        this.processOnlineActive= false;
        this.OnlineActive=false;
        this.surveyActive = false;
        this.conttime = 30;
        clearInterval(this.t);
        var localStream = '';
        var that = this;
        var roomInstance = that.roomInstance;
        // 创建本地桌面或窗口媒体流，用于进行屏幕共享。注意：该媒体流只有视频流，无音频流，且视频流分辨率有窗口大小决定。
        wilddogVideo.createLocalStream({
           captureVideo: true,
//          captureVideo: false,
          captureAudio: true,
          dimension: '120p',
          maxFPS: 15
        }).then(function (screenStream) {
          localStream = screenStream;
          that.localStream = localStream;

          //进入到room
          roomInstance.connect();
          //room事件

        }).catch(function (err) {
          that.errorCode = err.code;
          that.errorMsg = err.message;
          if(that.errorCode == '41005'){
            wilddog.sync().ref(that.node).child("video_connection").push("WEB$$refuseConnection");
          }
          that.pushErroCode()
        });


//        roomInstance.connect();
        roomInstance.on('connected',function () {
          if(localStream!=''){
            //向远程端送连接指令
            var node = that.node;
            console.log(node)
            console.log(localStream)
            wilddog.sync().ref(node).child("video_connection").push("WEB$$goToConnection");
            //发布本地流
            console.log(roomInstance)
            roomInstance.publish(localStream,function(error){
              if(error == null){
                console.log('publish success');
              }else{
                that.errorCode = err.code;
                that.errorMsg = err.message;
                that.pushErroCode();
                that.connectFail();
              }
            });
          }
          var setIntervalTime = '',settime = '';
          //Room内有流加入，此时不是真正的流，需要选择订阅才能获取
          roomInstance.on('stream_added',function (roomStream) {
            if(roomStream){
              clearInterval(settime);       //停止计时器
              settime = setInterval(function () {
                setIntervalTime ++ ;
              }, 1000)
            }
            $(".takePhoneImgBox").addClass("hide")
            //订阅远端流
            roomInstance.subscribe(roomStream,function (error) {
              if(error == null){
                that.remoteStream = roomStream;
                console.log('subscribe success');
              }else{
                var localStream = that.localStream;
                roomInstance.unpublish(localStream,function(error){
                  if(error == null){
                    console.log('unpublish success');
                  }else{
                    that.errorCode = error.code;
                    that.errorMsg = error.message;
                    that.pushErroCode()
                  }
                });
                that.errorCode = err.code;
                that.errorMsg = err.message;
                that.pushErroCode();
                that.connectFail();
              }
            });
          });
          var streamId = '';
          //此时接受的了真正的流，可以把获取到的远端流放入远端标签
          roomInstance.on('stream_received',function (roomStream) {
            console.log("远端流："+JSON.stringify(roomStream));
            if(roomStream){
              if(setIntervalTime > 10){
                clearInterval(settime);
                that.open4("连接视频失败")
              }
            }
            if(setIntervalTime < 10 && roomStream){
              clearInterval(settime);
              $(".takePhoneImgBox").addClass('hide');
              that.getNodealCase();
              that.steamActive = true;
              that.$nextTick(() => {
                var remoteEl = document.getElementById('remote');
                roomStream.attach(remoteEl);
                that.twoButton = false;
                that.surveyActive = false;
                that.toOnlineActive = false;
                that.processOnlineActive =  false;
                that.OnlineActive = true;
                streamId = roomStream.streamId;

                //接受照片
                wilddog.sync().ref(that.node+'/video_session').on('child_added', function(snapshot) {
                  //获取抽帧图片的路径
                  var snapshot = snapshot.val();
                  console.log(that.node+'/video_session')
                  console.log(snapshot)
                  if(snapshot.indexOf("APP$$PHOTO$$")> -1 ){
                    var lastIndex = snapshot.lastIndexOf('$')+1;
                    if(lastIndex > -1){
                      snapshot = snapshot.substring(lastIndex)
                      snapshot = snapshot.replace(/&/g,",");
                      snapshot = snapshot.split(",")
                      for(let i in snapshot){
                        if(i == 0){
                          snapshot[i] = snapshot[i].replace(/%/g,"/")
                          that.originalPhotoUrl = snapshot[i];
                          that.$nextTick(() => {
                            new Viewer(document.getElementById('bigsizeImg'), {
                              url: 'data-src',
                              navbar:false,
                              toolbar:false,
                              loop: true
                            })
                          })

                        }else if(i == 1){
                          snapshot[i] = snapshot[i].replace(/%/g,"/")
                          that.watermarkPhotoUrl = snapshot[i];
                        }else if(i == 2){
                          that.longitude = snapshot[i]
                        }else if(i == 3){
                          that.latitude = snapshot[i]
                        }
                      }
                      that.$nextTick(() => {
                        that.openTakePhone();
                      })
                    }
                  }else if(snapshot.indexOf("APP$$PHOTO$$ERROR")>-1){
                    that.open4("请重新拍照")
                  }
                },function(err){
                  that.errorCode = err.code;
                  that.errorMsg = err.message;
                  that.pushErroCode()
                })
                //录制视频
                var s = roomStream.streamId;
                var a = {"left":0,"top":100,"width":900,"height":800,"zOrder":2},  map={};
                map[s] = a;
                var options = {
                  "fps":10,
                  "canvasWidth":1000,
                  "canvasHeight":1000,
                }
                options.streams = map;
                roomInstance.startRecording(options,function(url,error){
                  if(error == null){
                    console.log('开始录制，录制的文件地址：'+ url);
                    var data = {
                      "surveyNo": that.roomId,
                      "videoRecordUrl": url,
                    }
                    axios.post(that.ajaxUrl+"/survey/video/v1/connect/success",data)
                      .then(response => {
                        if(response.data.rescode == 200){
                        }else{
                          this.open4(response.data.resdes)
                        }
                      }, err => {
                        console.log(err);
                      })
                      .catch((error) => {
                        console.log(error)
                      })
                  }else{
                    that.errorCode = error.code;
                    that.errorMsg = error.message;
                    that.pushErroCode();
                    that.connectFail();
                  }
                });
              })

            }
          });

          //Room内有流离开，将流从远端移除
          roomInstance.on('stream_removed',function (roomStream) {
            that.disconnect()
            console.log("远端移除");
            wilddog.sync().ref(that.node+'/video_session').off("child_added");//移除照片监听
            that.node = '';
            that.releaseStatius()
            if(that.steamActive){
              roomStream.detach(document.getElementById('remote'));
            }
            that.$nextTick(() => {
              that.steamActive = false;
              that.twoButton =  true;
              that.toOnlineActive = false;
              that.processOnlineActive = false;
              that.OnlineActive  = false;
              that.surveyActive = true;
            })
            //停止录制视频
            roomInstance.stopRecording(function(url,err){
              if(err == null){
                console.log('停止录制，录制的文件地址：'+ url);
              }else{
                that.errorCode = err.code;
                that.errorMsg = err.message;
                that.pushErroCode()
              }
            });
          });
          //pc断开视频
          roomInstance.on('disconnected',function () {
            //停止录制视频
            roomInstance.stopRecording(function(url,err){
              if(err == null){
                console.log('停止录制，录制的文件地址：'+ url);
              }else{
                that.errorCode = err.code;
                that.errorMsg = err.message;
                that.pushErroCode()
              }
            });
            console.log(node);
            wilddog.sync().ref(that.node+'/video_session').off("child_added");//移除照片监听
            that.node = '';
            that.steamActive = false;
            that.twoButton =  true;
            that.toOnlineActive = false;
            that.processOnlineActive = false;
            that.OnlineActive  = false;
            console.log('disconnected room')
          })
        });
      },
      //监听是否有视频发起
      getsyncSessionNodePath(){
        var data = {
          'orgCode':this.orgCode,
          "userId":this.userId
        }
        axios.post(this.ajaxUrl+"/sync/session/v1/open",data)
          .then(response => {
            console.log(response.data)
            if(response.data.rescode == 200){
              this.syncSessionNodePath = response.data.data.syncSessionNodePath;
              var that = this;
              console.log(this.syncSessionNodePath)
              wilddog.sync().ref(this.syncSessionNodePath).on('child_added', function(data) {
                var dataNode = data.val();
                if(dataNode != 'ping'){
                  var index = dataNode.lastIndexOf('$');
                  var node = dataNode.substring(index+1).replace(/%/g,"/");
                  that.node = node;
                  console.log(that.node)
                  wilddog.sync().ref(node).on('value', function(snapshot) {
                    if(snapshot.val()){
                      that.haveVideoActive = true;
                      console.log(snapshot.val())
                     that.getNodealCase()
                      wilddog.sync().ref(node).off("value");
                      that.connectNode ='video_connection';
                      that.sessionNode = 'video_session';
                      that.leftData = snapshot.val();
                      that.savevehicleLicenseNo = that.leftData.reportVehicleLicenseNo;
                      if(that.leftData.isNew == '0'){
                        that.twoButton = false;
                      }else{
                        that.twoButton = true;
                      }
                      that.doingActive = true;

                      that.toOnlineActive = false;
                      that.processOnlineActive = true;
                      that.OnlineActive = false;
                      that.surveyActive = false;
                      clearInterval(that.t);       //停止计时器
                      that.t = setInterval(function () {
                        if (that.conttime >= 0) {
                          that.conttime = that.conttime-1;
                        }
                        if (that.conttime === 0) {
                          that.haveVideoActive = false;
                          wilddog.sync().ref(node).child("video_connection").push("WEB$$refuseConnection");
                          if(that.leftData.isNew == '0'){//新订单发起视频未连接
                            that.ignoreCase();
                            that.ImgInfo = [];
                            that.carPhoneActive = false;
                            that.saveonevehicleLicenseNo ='';
                            that.savetwovehicleLicenseNo = '';
                            that.savethreevehicleLicenseNo = '';
                            that.leftData = '';
                            that.savevehicleLicenseNo = '';
                            that.doingActive = false;//显示左边无案件图标
                          }else if(that.leftData.isNew == '1'){//旧案件发起视频未连接
                            if(snapshot.val().isWait  == "1"){// 不是待处理订单需要停留在左边
                              that.twoButton = true;
                              that.surveyActive = true;
                              that.toOnlineActive=false;
                              that.processOnlineActive=false;
                              that.OnlineActive=false;
                              that.handleSurvey = '';
                            }else if(snapshot.val().isWait  == "0"){//待处理订单需要停留在右边
                              that.ImgInfo = [];
                              that.carPhoneActive = false;
                              that.saveonevehicleLicenseNo ='';
                              that.savetwovehicleLicenseNo = '';
                              that.savethreevehicleLicenseNo = '';
                              that.leftData = '';
                              that.savevehicleLicenseNo = '';
                              that.doingActive = false;//显示左边无案件图标
                              that.rollback();

                            }
                          }
                          that.conttime = 30;
                          clearInterval(that.t);       //停止计时器
                        }
                      }, 1000)
                      wilddog.auth().signInAnonymously().then(function(user){
//                      //认证成功后，初始化 WilddogVideoRoom
                        wilddogVideo.initialize({'appId':appVideoId,'token':user.getToken()});
                        //获取WilddogVideoRoom实例
                        that.roomId = snapshot.val().surveyNo;
                        that.getPhontos();
                        that.roomInstance = wilddogVideo.room(that.roomId);
                      }).catch(function (error) {
                        // Handle Errors here.
                        console.log(error.code);

                      });
                    }

                  },function(err){
                    that.errorCode = err.code;
                    that.errorMsg = err.message;
                    that.pushErroCode()
                  });
                }
              },function(err){
                that.errorCode = err.code;
                that.errorMsg = err.message;
                that.pushErroCode()
              })

            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      //后台修改状态
      acceptStatus(surveyNo){
        var data = {
          "surveyNo": surveyNo
        }
        axios.post(this.ajaxUrl+"/survey/video/v1/accept/connect",data)
          .then(response => {
            if(response.data.rescode == 200){
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
     //点击挂起
      hangUp(surveyNo){
        var data = {
          "surveyNo": surveyNo
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/suspend",data)
          .then(response => {
            if(response.data.rescode == 200){
                this.ImgInfo = [];
                this.carPhoneActive = false;
                this.saveonevehicleLicenseNo ='';
                this.savetwovehicleLicenseNo = '';
                this.savethreevehicleLicenseNo = '';
                this.leftData = '';
                this.savevehicleLicenseNo = '';
                this.doingActive = false;//显示左边无案件图标
                this.getNodealCase();
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
      //获取挂起订单列表
      getNodealCase(){
        var data = {
          "userId":parseInt(this.userId)
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/wait/order/list",data)
          .then(response => {
            if(response.data.rescode == 200){
              this.noDealCase = response.data.data;
              if(this.noDealCase.length!=0){
                this.waitActive = true;
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
      editorCar(vehicleLicenseNo,originalVehicleLicenseNo,isOrderVehicle,editorcar){
        $(".editorCarInfo").removeClass("hide");
        this.originalVehicleLicenseNo  = originalVehicleLicenseNo;
        this.isOrderVehicle = isOrderVehicle;
        this.opsType = "0";
        console.log(this.originalVehicleLicenseNo);
        this.getCity = vehicleLicenseNo.substring(0,1);
        this.vehicleLicenseNo = vehicleLicenseNo.substring(1);
        console.log(vehicleLicenseNo)
      },
      //保存车辆车牌号
      savevehicle(){
        if(this.vehicleLicenseNo == ''){
          this.open4("请输入车牌号")
        }else{
          if(this.originalVehicleLicenseNo == ''){
            this.originalVehicleLicenseNo = this.getCity+this.vehicleLicenseNo;
          }
          var data = {
            'surveyNo':this.roomId,
            "vehicleLicenseNo":this.getCity+this.vehicleLicenseNo,
            "originalVehicleLicenseNo": this.originalVehicleLicenseNo,
            "isOrderVehicle": this.isOrderVehicle,
            "opsType": this.opsType
          }
          axios.post(this.ajaxUrl+"/survey/vehicle/v1/vehicle",data)
            .then(response => {
              if(response.data.rescode == 200){
                if(this.isOrderVehicle == "1"){
                  this.leftData.reportVehicleLicenseNo = this.getCity+this.vehicleLicenseNo;
                }
                $(".editorCarInfo").addClass("hide")
                this.vehicleLicenseNo = "";
                this.getCity = "京";
                this.open2(response.data.resdes);
                this.getPhontos()
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
        //保存备注信息
      saveBeizhu(){
        this.beizhuInfo = this.beizhuInfo.replace(/(^\s*)|(\s*$)/g, "");
        if(this.beizhuInfo == ''){
          this.open4("请输入备注")
        }else{
          var data = {
            'surveyNo':this.roomId,
            "noteContent":this.beizhuInfo

          }
          axios.post(this.ajaxUrl+"/survey/order/v1/save/note",data)
            .then(response => {
              if(response.data.rescode == 200){
                this.beizhuInfo = '';
                $(".beizhuDiolag").addClass('hide');
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
      closeEditorCar(){
        $(".editorCarInfo").addClass('hide');
        this.getCity = '京';
        this.vehicleLicenseNo = '';
      },
      closeBeizhu(){
        $(".beizhuDiolag").addClass('hide');
      },
      getPhontos(){
        var data = {
          'surveyNo':this.roomId,
        }
        axios.post(this.ajaxUrl+"/survey/vehicle/v1/vehicle/list",data)
          .then(response => {
            if(response.data.rescode == 200){
              this.carPhoneActive = true;
              this.ImgInfo = response.data.data;
              this.oneTypeSurveyPhotos = [
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "0",
                  "photoTypeComment": "45度车辆前景照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_1.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "1",
                  "photoTypeComment": "当事人和车辆合影",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_2.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "2",
                  "photoTypeComment": "当事车辆车架号",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_3.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "3",
                  "photoTypeComment": "车辆受损细节(1)",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/1.png"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "4",
                  "photoTypeComment": "车辆受损细节(2)",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/1.png"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "5",
                  "photoTypeComment": " 交强险标志",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_4.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "6",
                  "photoTypeComment": "银行卡照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_5.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "7",
                  "photoTypeComment": "其它照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_6.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "8",
                  "photoTypeComment": "事故认定书",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_7.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "9",
                  "photoTypeComment": "行驶本照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_8.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "10",
                  "photoTypeComment": "驾驶证照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_9.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "11",
                  "photoTypeComment": "当事人签名照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/2.png"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "12",
                  "photoTypeComment": "身份证正面照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_10.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "13",
                  "photoTypeComment": "身份证背面照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_11.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "14",
                  "photoTypeComment": "查勘员与车辆合影",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/3.png"
                    }
                  ]
                }
              ];
              this.twoTypeSurveyPhotos = [
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "0",
                  "photoTypeComment": "45度车辆前景照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_1.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "1",
                  "photoTypeComment": "当事人和车辆合影",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_2.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "2",
                  "photoTypeComment": "当事车辆车架号",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_3.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "3",
                  "photoTypeComment": "车辆受损细节(1)",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/1.png"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "4",
                  "photoTypeComment": "车辆受损细节(2)",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/1.png"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "5",
                  "photoTypeComment": " 交强险标志",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_4.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "6",
                  "photoTypeComment": "银行卡照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_5.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "7",
                  "photoTypeComment": "其它照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_6.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "8",
                  "photoTypeComment": "事故认定书",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_7.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "9",
                  "photoTypeComment": "行驶本照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_8.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "10",
                  "photoTypeComment": "驾驶证照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_9.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "11",
                  "photoTypeComment": "当事人签名照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/2.png"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "12",
                  "photoTypeComment": "身份证正面照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_10.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "13",
                  "photoTypeComment": "身份证背面照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_11.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "14",
                  "photoTypeComment": "查勘员与车辆合影",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/3.png"
                    }
                  ]
                }
              ];
              this.threeTypeSurveyPhotos = [
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "0",
                  "photoTypeComment": "45度车辆前景照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_1.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "1",
                  "photoTypeComment": "当事人和车辆合影",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_2.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "2",
                  "photoTypeComment": "当事车辆车架号",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_3.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "3",
                  "photoTypeComment": "车辆受损细节(1)",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/1.png"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "4",
                  "photoTypeComment": "车辆受损细节(2)",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/1.png"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "5",
                  "photoTypeComment": " 交强险标志",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_4.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "6",
                  "photoTypeComment": "银行卡照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_5.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "7",
                  "photoTypeComment": "其它照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_6.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "8",
                  "photoTypeComment": "事故认定书",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_7.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "9",
                  "photoTypeComment": "行驶本照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_8.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "10",
                  "photoTypeComment": "驾驶证照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_9.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "11",
                  "photoTypeComment": "当事人签名照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/2.png"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "12",
                  "photoTypeComment": "身份证正面照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_10.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "13",
                  "photoTypeComment": "身份证背面照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/icon_noImg_11.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "14",
                  "photoTypeComment": "查勘员与车辆合影",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../video/static/3.png"
                    }
                  ]
                }
              ];
              console.log(this.ImgInfo.length)
              if(this.ImgInfo.length == 3){
                 this.carThreeActive = false;
              }
              for(let k in this.ImgInfo){
                if(k == 0){
                  for(let i in this.ImgInfo[k].allTypeSurveyPhotos){
                    this.saveonevehicleLicenseNo = this.ImgInfo[k].vehicleLicenseNo;
                    this.saveoneoriginalVehicleLicenseNo = this.ImgInfo[k].originalVehicleLicenseNo;
                    this.isOrderVehicleone = this.ImgInfo[k].isOrderVehicle;
                    for(let j in this.oneTypeSurveyPhotos){
                      if(this.ImgInfo[k].allTypeSurveyPhotos[i].photoType == this.oneTypeSurveyPhotos[j].photoType){
                        this.oneTypeSurveyPhotos[j] = this.ImgInfo[k].allTypeSurveyPhotos[i];
                        this.oneTypeSurveyPhotos[j].hasUrl = 'true';
                      }
                    }
                  }
                }else if(k == 1){
                  for(let i in this.ImgInfo[k].allTypeSurveyPhotos){
                    this.savetwovehicleLicenseNo = this.ImgInfo[k].vehicleLicenseNo;
                    this.savetwooriginalVehicleLicenseNo = this.ImgInfo[k].originalVehicleLicenseNo;
                    this.isOrderVehicletwo = this.ImgInfo[k].isOrderVehicle;
                    for(let j  in this.twoTypeSurveyPhotos){
                      if(this.ImgInfo[k].allTypeSurveyPhotos[i].photoType == this.twoTypeSurveyPhotos[j].photoType){
                        this.twoTypeSurveyPhotos[j] = this.ImgInfo[k].allTypeSurveyPhotos[i];
                        this.twoTypeSurveyPhotos[j].hasUrl = 'true';
                      }
                    }
                  }
                }else if(k == 2){
                  for(let i in this.ImgInfo[k].allTypeSurveyPhotos){
                    this.savethreevehicleLicenseNo = this.ImgInfo[k].vehicleLicenseNo;
                    this.savethreeoriginalVehicleLicenseNo = this.ImgInfo[k].originalVehicleLicenseNo;
                    this.isOrderVehiclethree = this.ImgInfo[k].isOrderVehicle;
                    for(let j  in this.threeTypeSurveyPhotos){
                      if(this.ImgInfo[k].allTypeSurveyPhotos[i].photoType == this.threeTypeSurveyPhotos[j].photoType){
                        this.threeTypeSurveyPhotos[j] = this.ImgInfo[k].allTypeSurveyPhotos[i];
                        this.threeTypeSurveyPhotos[j].hasUrl = 'true';
                      }
                    }
                  }
                }
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
      selectCarAim(order,ele,savevehicleLicenseNo){
        this.left = 0;
        this.savevehicleLicenseNo = savevehicleLicenseNo;
        $(".suibian").css("left",this.left);
        switch (order) {
          case "0":
            this.oneCarActive = true;
            this.TwoCarActive = false;
            this.threeCarActive = false;
            $(".tag").addClass("hide")
            break;
          case "1":
            this.oneCarActive = false;
            this.TwoCarActive = true;
            this.threeCarActive = false;
            $(".tag").addClass("hide")
            break;
          case "2":
            this.oneCarActive = false;
            this.TwoCarActive = false;
            this.threeCarActive = true;
            $(".tag").addClass("hide")
            break;
        }

      },
    //查勘完成
      openOrderEndBox(){
        var data = {
          "surveyNo":this.roomId,
          "isExceptionComplete":this.isExceptionComplete,
          "exceptionCode":this.exceptionCode,
          "exceptionComment": this.exceptionComment
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/complete",data)
          .then(response => {
            if(response.data.rescode == 200){
              this.ImgInfo = [];
              this.carPhoneActive = false;
              this.saveonevehicleLicenseNo ='';
              this.savetwovehicleLicenseNo = '';
              this.savethreevehicleLicenseNo = '';
              this.leftData = '';
              this.savevehicleLicenseNo = '';
              this.steamActive = false;
              this.twoButton =  true;
              this.toOnlineActive = false;
              this.processOnlineActive = false;
              this.OnlineActive  = false;
              this.doingActive = false;
              $(".orderSelectDialog").addClass("hide");
              this.open6()
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
      closeopenOrderEndxDialog(){
        $(".openOrdercompleteDialog").addClass("hide");
      },
      openOrderSelect(){
        $(".orderSelectDialog").removeClass("hide");
      },
      openBeizhu(){
        $(".beizhuDiolag").removeClass("hide");
          var data = {
            'surveyNo':this.roomId,
          }
          axios.post(this.ajaxUrl+"/survey/order/v1/query/note",data)
            .then(response => {
              if(response.data.rescode == 200){
                this.beizhuInfo =response.data.data.noteContent;
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
      closeOrderDiolag(){
        $(".orderSelectDialog").addClass("hide");
      },
      getLeftData(){
          var data = {
            "userId": this.userId
          }
          axios.post(this.ajaxUrl+"/survey/order/v1/processing",data)
            .then(response => {
              if(response.data.rescode == 200){
                if(response.data.data){
                  this.doingActive = true;
                  this.leftData = response.data.data;
                  this.roomId = response.data.data.surveyNo;
                  this.savevehicleLicenseNo = response.data.data.reportVehicleLicenseNo;
                  this.twoButton = true;
                  this.surveyActive = true;
                  this.toOnlineActive = false;
                  this.processOnlineActive = false;
                  this.OnlineActive = false;
                  this.getPhontos()
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
      //双击挂起订单
      goleftLine(surveyNo,itemdata){
        this.roomId = surveyNo;
        if(!this.doingActive){
          var data = {
            "surveyNo":surveyNo
          }
          axios.post(this.ajaxUrl+"/survey/order/v1/wait/handle",data)
            .then(response => {
              if(response.data.rescode == 200){
                this.leftData = itemdata;
                this.savevehicleLicenseNo = this.leftData.reportVehicleLicenseNo;
                this.handleSurvey = response.data.data.surveyNo;
                this.twoButton = true;
                this.surveyActive = true;
                this.toOnlineActive = false;
                this.processOnlineActive = false;
                this.OnlineActive = false;
                this.doingActive = true;
                this.roomId = surveyNo;
                this.getNodealCase();
                this.getPhontos();
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
      //选择车辆
      selectCar(ele,vehicleLicenseNo){
        console.log(vehicleLicenseNo)
        this.savevehicleLicenseNo = vehicleLicenseNo;
        if(vehicleLicenseNo == this.saveonevehicleLicenseNo){
          this.aimActive = true;
          this.thirdOneActive = false;
          this.thirdTwoActive=false;
        }else if(vehicleLicenseNo == this.savetwovehicleLicenseNo){
          this.aimActive = false;
          this.thirdOneActive = true;
          this.thirdTwoActive=false;
        }else if(vehicleLicenseNo == this.savethreevehicleLicenseNo){
          this.aimActive = false;
          this.thirdOneActive = false;
          this.thirdTwoActive = true;
        }

      },
      //选择车辆类型
      selectType(ele,photoType){
        if(($(ele.target).parent().attr("class")).indexOf("ddClass") > -1){
          $(ele.target).parent().siblings().removeClass("showTag")
          $(ele.target).parent().siblings().children(".tag").addClass("hide");
          $(ele.target).siblings().removeClass("hide")
          $(ele.target).parent().addClass("showTag")
          this.photoType = photoType
        }
      },
      //选择缩略图车辆类型
      seletedCarType(ele,vehicleLicenseNo,photoType){
        if($(ele.target).attr("class").indexOf("hoverBox")>-1){
          $(ele.target).parent().siblings().find(".tag").addClass("hide");
          $(ele.target).parent().find(".tag").removeClass("hide");
          this.photoType = photoType;
          this.savevehicleLicenseNo = vehicleLicenseNo;
          var node = this.node;
        }
      },
      enterBox(ele){
        $(ele.target).find(".hoverBox").removeClass("hide")
      },
      leaveBox(ele){
        $(ele.target).find(".hoverBox").addClass("hide")
      },
      checkStateOne(){
        axios.get(this.ajaxUrl+"/web/surveyor/v1/webstatus/"+this.userId)
          .then(response => {
            if(response.status == 200){
              this.manualStatus = response.data.data.manualstatus;

            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })

      },
      checkState(){
        if(this.manualStatus == 2){
          var data = {
            "userId":parseInt(this.userId),
            "manualStatus":'0'
          }
          axios.post(this.ajaxUrl+"/web/surveyor/v1/manual/status",data)
            .then(response => {
              if(response.data.rescode == 200){
                if(response.data.data.code == 0){
                  this.manualStatus = response.data.data.manualStatus;
                }else{
                  this.open4("暂时无法改变状态")
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
        }else{
          var data = {
            "userId":parseInt(this.userId),
            "manualStatus":'2'
          }
          axios.post(this.ajaxUrl+"/web/surveyor/v1/manual/status",data)
            .then(response => {
              if(response.data.rescode == 200){
                if(response.data.data.code == 0){
                  this.manualStatus = response.data.data.manualStatus;
                }else{
                  this.open4("暂时无法改变状态")
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
        }
      },

      openType(){
        if(this.photoType != '' && this.savevehicleLicenseNo != '' && this.watermarkPhotoUrl != '' && this.roomId != '' && this.longitude != '' && this.latitude != ''&&this.originalPhotoUrl !=''){
          this.sureTakeImg()
        }else{
          this.photoType = '';
          if(this.watermarkPhotoUrl != ''){
            $(".takePhonetypeBox").removeClass("hide");
            this.selectCar("",this.savevehicleLicenseNo)
          }else{
            this.open4("图片保存失败,请重新上传")
          }

        }
      },
      deletTakeImg(){
        var data = {
          'originalPhotoUrl':this.originalPhotoUrl,
          "watermarkPhotoUrl":this.watermarkPhotoUrl,
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/photo/remove",data)
          .then(response => {
            if(response.data.rescode == 200){
              $(".takePhoneImgBox").addClass("hide")
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
      },
      closetypebox(){
        $(".takePhonetypeBox").addClass("hide");
        this.photoType = ''
      },
      preImginfo(){
        if(this.left < '-1'){
          this.left = this.left + 184;
          $(".suibian").animate({
              left : this.left
            },500)
        }
      },
      nextImgInfo(){
        var length = -(((this.imglength-7)*184)+1)
        if(this.left > length){
          this.left = this.left - 184;
          $(".suibian").animate({left: this.left},500)
        }
      },
      closeCityDiolag(){
        $(".cityDialog").addClass("hide")
      },
      selectCity(city){
        this.getCity = city;
        $(".cityDialog").addClass("hide")
      },
      openCityDialog(){//打开城市
        $(".cityDialog").removeClass("hide")
      },
      openAddCar(){
        $(".editorCarInfo").removeClass("hide");
        this.originalVehicleLicenseNo = '';
        this.isOrderVehicle = '0';
        this.getCity = '京';
        this.opsType = "1"
      },
      preScaleImg(){
        if(this.scaleImgLeft < '-1'){
          this.scaleImgLeft = this.scaleImgLeft + 715;
          this.scalImgCurrentIndex --;
          $(".scaleUlBox").animate({left: this.scaleImgLeft},500)
        }
      },
      nextScaleImg(){
        var length = -(((this.scalImgLength-2)*715)+1)

        if(this.scaleImgLeft > length){
          this.scalImgCurrentIndex ++;
          this.scaleImgLeft = this.scaleImgLeft - 715;
          $(".scaleUlBox").animate({left: this.scaleImgLeft},500)
        }

      },
      openTakePhone(){
        $(".takePhoneImgBox").removeClass('hide');
      },
      closeScaleImg(){
        $(".scalImgBox").addClass('hide');
        this.scaleImgLeft = 0;
        this.scalImgCurrentIndex = '1';
        $(".scaleUlBox").css("left",this.scaleImgLeft)
        this.surveyPhotos = [];
        this.imgType = "";
      },
      closetakeCaleImg(){
        $(".takePhoneImgBox").addClass('hide');
          this.originalPhotoUrl = '';
          this.watermarkPhotoUrl = '';
          this.longitude = '';
          this.latitude = '';
      },
//查看放大图片
      scaleImg(surveyPhotos,ele,code,photoTypeComment){
        $(".scaleUlBox").css("left",'0')
        this.scaleImgLeft = 0;
        this.scalImgLength = surveyPhotos.length;
        this.surveyPhotos = surveyPhotos;
        console.log(surveyPhotos)
        if(surveyPhotos.length !=0 ){
          console.log(photoTypeComment)
          this.scaleImgLeft = 0;
          $(".scalImgBox").removeClass('hide');
          this.imgType = photoTypeComment;
        }
      },
      tabChange(event){
        var attributes = event.target.attributes;
        for(var i=0;i< attributes.length;i++){
          if(i == 1){
            if(attributes[i].nodeValue.indexOf('caseJiankong') > -1){
              attributes[i].nodeValue = 'caseJiankong active';
              $(".allCase").attr("class","allCase");
              this.jianKongActive = true;
              this.allCaseActive = false;
            }else  if(event.target.attributes[i].nodeValue.indexOf('allCase') > -1){
              $(".caseJiankong").attr("class","caseJiankong");
              attributes[i].nodeValue = 'allCase active';
              this.jianKongActive = false;
              this.allCaseActive = true;
            }
          }
        }
      }
    },
    components: {

    },
    destroyed () {
      clearInterval(this.beatTime);
    },
  }

</script>

