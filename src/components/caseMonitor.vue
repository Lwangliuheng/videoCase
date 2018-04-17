<style scoped>
  .caseMontor{
    width: 80%;
    margin:20px auto;
  }
  .caseMontorBox{
    display: flex;
    justify-content: center;
    margin-top: 30px;

  }
  .caseMinute{
    cursor: pointer;
    width: 22%;
    min-height: 160px;
    text-align:  center;
    border: 1px solid;
    border-radius: 6px;
    margin-right: 30px;
  }
  .caseMinute h3{
    margin-top: 40px;
    font-size: 24px;
  }
  .caseMinute .minuterdetail{
    color:#555;
    font-size:15px;
    text-align: center;
    margin-top: 15px;
    padding: 5px
  }
  .caseMontorDialog{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .caseMontorDialogBox{
    width: 54%;
    margin: 15vh auto;
    background: #fff;
    padding: 20px;
    max-height: 65vh;
    position: relative;
  }
  .caseMontorDialogBox .dialogTitle{
    color: #232323;
    font-size:16px;
    font-weight: 600;
  }
  .titleInfo{
    font-size:15px;
    padding:15px;
  }
  .scrollBox{
    overflow-y: scroll;
    max-height: 45vh;
  }
  .scrollBox img{
    height: 68px;
    width: 68px;
    margin:0 auto;
  }
  .imgBox{
    text-align: center;
  }
  .carInfoBox, .carInfoBoxOne{
    width: 28%;
    margin: 10px 15px;
    padding:10px;
    font-size: 14px;

  }
  .carInfoBox{
    border: 1px dashed #DCDCDC;
    background: #F8F8F9;
  }
.carInfoBoxOne{
  background: #fff;
  width: 24%;
}
  .carInfoBox p{
    line-height: 25px;
    font-weight: normal;
    font-style: normal;
  }
  .carInfoOne{
    padding-left:15px;
    padding-bottom: 6px;
  }
  .orderDetail{
    text-align: center;
    display:inherit;
    color: #2EAB3B;
    text-decoration: underline;
    margin-top: 15px;
    cursor: pointer;
  }
  .orderDetailFoure{
    cursor: pointer;
    text-decoration: underline;
    color: #2EAB3B;
    margin-top: 14px;
  }
  .carInfoBox .orderTime, .carInfoBoxOne .orderTime{
    color: #FC3524;
  }
  .closCaseMontor{
    font-size: 42px;
    right: 15px;
    top: 0;
    position: absolute;
  }
  .AssignSeat{
    background: #2EAB3B;
    color: #fff;
    font-size: 14px;
    display: inline-block;
    height: 35px;
    line-height: 35px;
    text-align: center;
    width: 70px;
    margin-top: 8px;
  }
</style>
<template>
  <div>
    <div class="caseMontorDialog hide">
      <div class="caseMontorDialogBox">
        <span @click="closCaseMontor" class="right closCaseMontor">×</span>
        <div class="oneMonitor clear" v-if="caseActive.fivecase">
          <h4 class="dialogTitle">案件监控</h4>
          <p class="titleInfo">当日坐席超过2次30s内未接听视频的</p>
          <div class="clear scrollBox">
            <div v-for="item in caseMonitor" class="left carInfoBoxOne bordercolorGreen" v-if="item.currentStatusAuto  ==0 && item.currentStatusManual == 0">
              <div class="imgBox">
                <img src="../images/kefuBlue.png">
                <h3 class="kefuName">{{item.backstageSurveyorName }}</h3>
              </div>
              <p class="carInfoOne" style="margin-top:10px;">当前状态：空闲</p>
              <p class="carInfoOne">待处理案件：{{item.waitProcessSurveyCount }}单</p>
              <p class="carInfoOne">今日已处理案件：{{item.todayProcessCompletSurveyCount }}单</p>
              <p class="carInfoOne">今日登陆时间：{{item.todayLoginTime}}</p>
              <p class="carInfoOne orderTime">今日30s内未接听次数：{{item.todayWithinThirtySecondsNotAnswerCount}}次</p>
            </div>
            <div v-for="item in caseMonitor" class="left carInfoBoxOne bordercolorRed" v-if="item.currentStatusAuto == 2 || item.currentStatusManual == 2">
              <div class="imgBox">
                <img src="../images/kefuBlue.png">
                <h3 class="kefuName">{{item.backstageSurveyorName }}</h3>
              </div>
              <p class="carInfoOne" style="margin-top:10px;">当前状态：繁忙</p>
              <p class="carInfoOne">待处理案件：{{item.waitProcessSurveyCount }}单</p>
              <p class="carInfoOne">今日已处理案件：{{item.todayProcessCompletSurveyCount }}单</p>
              <p class="carInfoOne">今日登陆时间：{{item.todayLoginTime}}</p>
              <p class="carInfoOne orderTime">今日30s内未接听次数：{{item.todayWithinThirtySecondsNotAnswerCount}}次</p>
            </div>
            <div v-for="item in caseMonitor" class="left carInfoBoxOne bordercolorGray" v-if="(item.currentStatusAuto  == 1 || item.currentStatusAuto == null)">
              <div class="imgBox">
                <img src="../images/kefuBlue.png">
                <h3 class="kefuName">{{item.backstageSurveyorName }}</h3>
              </div>
              <p class="carInfoOne" style="margin-top:10px;">当前状态：离线</p>
              <p class="carInfoOne">待处理案件：{{item.waitProcessSurveyCount }}单</p>
              <p class="carInfoOne">今日已处理案件：{{item.todayProcessCompletSurveyCount }}单</p>
              <p class="carInfoOne">今日登陆时间：{{item.todayLoginTime}}</p>
              <p class="carInfoOne orderTime">今日30s内未接听次数：{{item.todayWithinThirtySecondsNotAnswerCount}}次</p>

            </div>
          </div>
        </div>
        <div class="oneMonitor clear" v-else>
          <h4 class="dialogTitle">案件监控</h4>
          <p class="titleInfo" v-if="caseActive.onecase">当日超过2分钟未分派查勘员</p>
          <p class="titleInfo" v-if="caseActive.twocase">当日现场查勘员预计到达时间未到达的</p>
          <p class="titleInfo" v-if="caseActive.threecase">当前现场查勘员到达现场超过5分钟未发起视频请求</p>
          <p class="titleInfo" v-if="caseActive.fourecase">现场查勘员发起视频请求超过3次未连接的</p>
          <p class="titleInfo" v-if="caseActive.sixcase">当前订单处理时间超过20分钟未查勘完成的</p>
          <p class="titleInfo" v-if="caseActive.sevencase">当日异常查勘完成的案件</p>
          <p class="titleInfo" v-if="caseActive.eightcase">待分配后台坐席订单数</p>
          <div class="clear scrollBox">
            <div v-for="item in caseMonitor" class="left carInfoBox">
              <p class="carInfo">报案人车牌号:{{item.reporterCarLicenseNo}}</p>
              <p class="carInfo">报案人姓名:{{item.reporterName}}</p>
              <p class="carInfo">报案人电话:{{item.reporterPhoneNo}}</p>
              <p class="carInfo">保险公司:{{item.insuranceCompanyName }}</p>
              <p class="carInfo">事故地点:{{item.accidentAddress }}</p>
              <p class="carInfo orderTime" v-if="caseActive.eightcase">事故时间:{{item.accidentTime}}</p>
              <p class="carInfo orderTime" v-if="caseActive.onecase">派单时间:{{item.assignTime}}</p>
              <!--<p class="carInfo" v-if="!caseActive.onecase && !caseActive.sixcase">派单时间:{{item.assignTime}}</p>-->
              <p class="carInfo" v-if="caseActive.twocase ||caseActive.threecase||caseActive.fourecase">派单时间:{{item.assignTime}}</p>
              <p class="carInfo orderTime" v-if="caseActive.twocase">接单时间:{{item.assignTime}}</p>
              <p class="carInfo" v-if="caseActive.threecase">接单时间:{{item.assignTime}}</p>
              <p class="carInfo orderTime" v-if="caseActive.twocase || caseActive.threecase||caseActive.fourecase||caseActive.sixcase||caseActive.eightcase">现场查勘员姓名:{{item.sceneSurveyorName}}</p>
              <p class="carInfo orderTime"  v-if="caseActive.twocase || caseActive.threecase||caseActive.fourecase||caseActive.sixcase||caseActive.eightcase">现场查勘员电话：{{item.sceneSurveyorPhoneNo }}</p>
              <p class="carInfo orderTime" v-if="caseActive.sixcase || caseActive.sevencase">后台坐席：{{item.backstageSurveyorName}}</p>
              <p class="carInfo orderTime" v-if="caseActive.sixcase || caseActive.sevencase">开始处理时间：{{item.startProcessTime}}</p>
              <p class="carInfo orderTime" v-if="caseActive.sevencase">查勘完成时间：{{item.completeProcessTime}}</p>
              <p class="carInfo orderTime" v-if="caseActive.sevencase">异常完成原因：{{item.exceptionCompleteReason}}</p>
              <p class="carInfo orderTime" v-if="caseActive.twocase">预计到达时间：{{item.expectArriveTime}} </p>
              <p class="carInfo orderTime" v-if="caseActive.threecase || caseActive.fourecase || caseActive.eightcase">实际到达现场时间：{{item.actualArriveTime}} </p>
              <p class="carInfo orderTime" v-if="caseActive.fourecase || caseActive.eightcase"> 请求链接次数：{{item.videoConnectRequestCount}}次</p>
              <p class="carInfo" v-if="item.surveyStatus == '06'">案件状态：待查勘</p>
              <p class="carInfo" v-if="item.surveyStatus == '07'">案件状态：查勘中</p>
              <p class="carInfo" v-if="item.surveyStatus == '08'">案件状态：已查勘</p>
              <p class="carInfo" v-if="item.surveyStatus == '11'">案件状态：已取消</p>

              <span class="AssignSeat left" v-if="caseActive.fourecase || caseActive.eightcase" @click="goSignSeat(item.id)">指派坐席</span>
              <span class="orderDetailFoure right" @click="goCaseDetail(item.id,item.surveyStatus)" v-if="caseActive.fourecase">查看详情</span>
              <span class="orderDetail" @click="goCaseDetail(item.id,item.surveyStatus)" v-if="(!caseActive.fourecase  && !caseActive.fivecase)">查看详情</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <case-detail v-if="caseDetailActive"></case-detail>
    <sign-Seats v-if="signSeatsActive"></sign-Seats>

  <div class="caseMontor">
    <div class="caseMontorBox">
      <div class="caseMinute" style="background:#ECF5FF;border-color:#ABD5FF;"  @click="goCase(caseNuber.one)">
        <h3 class="minuteNuber" style="color:#46A0FC">{{todayNotAssignedMoreThanTwoMinutesCount}}</h3>
        <p class="minuterdetail">当日超过2分钟未分派查勘员</p>
      </div>
      <div class="caseMinute" style="background:#F0F9EB;border-color:#AADA95;" @click="goCase(caseNuber.two)">
        <h3 class="minuteNuber" style="color:#6AC044">{{todaySceneSurveyorExpectTimeNonArrivalCount}}</h3>
        <p class="minuterdetail">当日现场查勘员预计到达时间未到达的</p>
      </div>
      <div class="caseMinute" style="background:#FDF5E7;border-color:#FDDBA7;" @click="goCase(caseNuber.three)">
        <h3 class="minuteNuber"  style="color:#F79E14;">{{todaySceneSurveyorArrivedMoreThanFiveMinutesNoVideoRequestCount}}</h3>
         <p class="minuterdetail">当日现场查勘员到达现场超过5分钟未发起视频请求</p>
      </div>
      <div class="caseMinute" style="background:#FFEEEE;border-color:#FCBCBD;" @click="goCase(caseNuber.foure)">
        <h3 class="minuteNuber" style="color:#F75759;">{{todaySceneSurveyorVideoRequestMoreThanThreeTimesNotConnectedCount}}</h3>
        <p class="minuterdetail">现场查勘员发起视频请求超过3次未连接的</p>
      </div>
    </div>
    <div class="caseMontorBox">
      <div class="caseMinute" style="background:#F0F9EB;border-color:#AADA95;"  @click="goCase(caseNuber.five)">
        <h3 class="minuteNuber" style="color:#6AC044;">{{todayMoreThanTwoTimesWithinThirtySecondsNotAnswerCount}}</h3>
        <p class="minuterdetail">当日坐席超过2次30s内未接听视频的</p>
      </div>
      <div class="caseMinute" style="background:#FFEEEE;border-color:#FCBCBD;" @click="goCase(caseNuber.six)">
        <h3 class="minuteNuber" style="color:#F75759;"> {{todaySurveyTimeMoreThanTwentyMinutesNotCompletedCount}}</h3>
        <p class="minuterdetail">当前订单处理时间超过20分钟未查勘完成的</p>
      </div>
      <div class="caseMinute" style="background:#ECF5FF;border-color:#ABD5FF;" @click="goCase(caseNuber.seven)">
        <h3 class="minuteNuber" style="color:#46A0FC;">{{todayCompletedOfExceptionCount}}</h3>
        <p class="minuterdetail">当日异常查勘完成的案件</p>
      </div>

      <div class="caseMinute" style="background:#FDF5E7;border-color:#FDDBA7;" @click="goCase(caseNuber.eight)">
        <h3 class="minuteNuber" style="color:#F79E14;">{{todayWaitAllocatBackstageSurveyorCount}}</h3>
        <p class="minuterdetail">待分配后台坐席订单数</p>
      </div>
    </div>

  </div>

  </div>
</template>
<script>
import caseDetail from '../components/caseDetail'
import signSeats from '../components/signSeats'
import axios from 'axios'
  export default {
    data() {
      return{
        time: '',
        caseMonitor: [],
        caseDetailActive:false,
        signSeatsActive: false,
        todayNotAssignedMoreThanTwoMinutesCount: "",
        todaySceneSurveyorExpectTimeNonArrivalCount: "",
        todaySceneSurveyorArrivedMoreThanFiveMinutesNoVideoRequestCount: "",
        todaySceneSurveyorVideoRequestMoreThanThreeTimesNotConnectedCount: "",
        todayMoreThanTwoTimesWithinThirtySecondsNotAnswerCount: "",
        todaySurveyTimeMoreThanTwentyMinutesNotCompletedCount: "",
        todayCompletedOfExceptionCount: "",
        todayWaitAllocatBackstageSurveyorCount: "",
        ajaxUrl: "/boot-pub-survey-manage",
        cars: [],
        caseNuber : {
          "one":"1",
          "two":"2",
          "three":"3",
          "foure":"4",
          "five": "5",
          "six": "6",
          "seven":"7",
          "eight":"8",
          "nigh":"9"
        },
        caseActive: {
          "onecase": false,
          "twocase": false,
          "threecase": false,
          "fourecase": false,
          "fivecase": false,
          "sixcase": false,
          "sevencase": false,
          "eightcase": false,
          "nighcase": false,
        }
      }
    },
    watch: {
      getUserIcons(val) {
        this.caseDetailActive = val;
      },
      getsignSeatsActive(val) {
        this.signSeatsActive = val;
      },
    },
    created(){
      this.getCaseMonitor()
    },
    mounted(){
      this.time = setInterval(() => {
        this.getCaseMonitor()
      }, 5000)
    },
    methods: {
      open4(resdes) {
        this.$message.error(resdes);
      },
      getCaseMonitor(){
        axios.get(this.ajaxUrl+"/monitor/v1/overview")
          .then(response => {
            if(response.data.rescode == 200){
              this.todayNotAssignedMoreThanTwoMinutesCount = response.data.data.todayNotAssignedMoreThanTwoMinutesCount;//1
              this.todaySceneSurveyorExpectTimeNonArrivalCount = response.data.data.todaySceneSurveyorExpectTimeNonArrivalCount//2
              this.todaySceneSurveyorArrivedMoreThanFiveMinutesNoVideoRequestCount = response.data.data.todaySceneSurveyorArrivedMoreThanFiveMinutesNoVideoRequestCount;//3
              this.todaySceneSurveyorVideoRequestMoreThanThreeTimesNotConnectedCount = response.data.data.todaySceneSurveyorVideoRequestMoreThanThreeTimesNotConnectedCount;//4
              this.todayMoreThanTwoTimesWithinThirtySecondsNotAnswerCount = response.data.data.todayMoreThanTwoTimesWithinThirtySecondsNotAnswerCount;//5
              this.todaySurveyTimeMoreThanTwentyMinutesNotCompletedCount = response.data.data.todaySurveyTimeMoreThanTwentyMinutesNotCompletedCount;//6
              this.todayCompletedOfExceptionCount = response.data.data.todayCompletedOfExceptionCount;//7
              this.todayWaitAllocatBackstageSurveyorCount = response.data.data.todayWaitAllocatBackstageSurveyorCount;//8
              if( this.todayNotAssignedMoreThanTwoMinutesCount === null){//1
                this.todayNotAssignedMoreThanTwoMinutesCount = 0
              }
              if(this.todaySceneSurveyorExpectTimeNonArrivalCount === null){//2
                this.todaySceneSurveyorExpectTimeNonArrivalCount = 0;
              }
              if(this.todaySceneSurveyorArrivedMoreThanFiveMinutesNoVideoRequestCount === null){//3
                this.todaySceneSurveyorArrivedMoreThanFiveMinutesNoVideoRequestCount = 0;
              }
              if(this.todaySceneSurveyorVideoRequestMoreThanThreeTimesNotConnectedCount === null){//4
                this.todaySceneSurveyorVideoRequestMoreThanThreeTimesNotConnectedCount = 0;
              }
              if(this.todayMoreThanTwoTimesWithinThirtySecondsNotAnswerCount === null){//5
                this.todayMoreThanTwoTimesWithinThirtySecondsNotAnswerCount = 0;
              }
              if(this.todaySurveyTimeMoreThanTwentyMinutesNotCompletedCount === null){//6
                this.todaySurveyTimeMoreThanTwentyMinutesNotCompletedCount = 0;
              }
              if(this.todayCompletedOfExceptionCount === null){//7
                this.todayCompletedOfExceptionCount = 0;
              }
              if(this.todayWaitAllocatBackstageSurveyorCount === null){//8
                this.todayWaitAllocatBackstageSurveyorCount = 0;
              }
            }else{
              this.open4(response.data.resdes)
              if(response.data.rescode == 300){
                this.$router.push({path:'/'})
              }
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
    },
      goCase(item){//进入案件列表

        var url = '';
        switch(item)
        {
          case "1":
            url = '/monitor/v1/not-assigned';
            axios.get(this.ajaxUrl+url)
              .then(response => {
                if(response.data.rescode == 200){
                  this.caseMonitor = response.data.data;
                  if(this.caseMonitor.length == 0){
                    this.open2("暂无数据")
                  }else{
                    $(".caseMontorDialog").removeClass("hide");
                    this.caseActive.onecase = true;
                  }
                }else{
                  this.open4(response.data.resdes)
                  if(response.data.rescode == 300){
                    this.$router.push({path:'/'})
                  }
                }
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })
            break;
          case "2":
            url = '/monitor/v1/expect-time-nonarrival';
            axios.get(this.ajaxUrl+url)
              .then(response => {
                if(response.data.rescode == 200){
                  this.caseMonitor = response.data.data;
                  if(this.caseMonitor.length == 0){
                    this.open2("暂无数据")
                  }else{
                    $(".caseMontorDialog").removeClass("hide");
                    this.caseActive.twocase = true;
                  }
                }else{
                  this.open4(response.data.resdes)
                  if(response.data.rescode == 300){
                    this.$router.push({path:'/'})
                  }
                }
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })
            break;
          case "3":
            url = '/monitor/v1/no-video-request';
            axios.get(this.ajaxUrl+url)
              .then(response => {
                if(response.data.rescode == 200){
                  this.caseMonitor = response.data.data;
                  if(this.caseMonitor.length == 0){
                    this.open2("暂无数据")
                  }else{
                    $(".caseMontorDialog").removeClass("hide");
                    this.caseActive.threecase = true;
                  }
                }else{
                  this.open4(response.data.resdes)
                  if(response.data.rescode == 300){
                    this.$router.push({path:'/'})
                  }
                }
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })
            break;
          case "4":
            url = '/monitor/v1/video-not-connected';
            axios.get(this.ajaxUrl+url)
              .then(response => {
                if(response.data.rescode == 200){
                  this.caseMonitor = response.data.data;
                  if(this.caseMonitor.length == 0){
                    this.open2("暂无数据")
                  }else{
                    $(".caseMontorDialog").removeClass("hide");
                    this.caseActive.fourecase = true;
                  }
                }else{
                  this.open4(response.data.resdes)
                  if(response.data.rescode == 300){
                    this.$router.push({path:'/'})
                  }
                }
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })
            break;
          case "5":
            url = '/monitor/v1/not-answer';
            axios.get(this.ajaxUrl+url)
              .then(response => {
                if(response.data.rescode == 200){
                  this.caseMonitor = response.data.data;
                  if(this.caseMonitor.length == 0){
                    this.open2("暂无数据")
                  }else{
                    $(".caseMontorDialog").removeClass("hide");
                    this.caseActive.fivecase = true;
                  }
                }else{
                  this.open4(response.data.resdes)
                  if(response.data.rescode == 300){
                    this.$router.push({path:'/'})
                  }
                }
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })
            break;
            case "6":
              url = '/monitor/v1/not-completed';
              axios.get(this.ajaxUrl+url)
                .then(response => {
                  if(response.data.rescode == 200){
                    this.caseMonitor = response.data.data;
                    if(this.caseMonitor.length == 0){
                      this.open2("暂无数据")
                    }else{
                      $(".caseMontorDialog").removeClass("hide");
                      this.caseActive.sixcase = true;
                    }
                  }else{
                    this.open4(response.data.resdes)
                    if(response.data.rescode == 300){
                      this.$router.push({path:'/'})
                    }
                  }
                }, err => {
                  console.log(err);
                })
                .catch((error) => {
                  console.log(error)
                })
              break;
          case "7":
            url = '/monitor/v1/exception-completed';
            axios.get(this.ajaxUrl+url)
              .then(response => {
                if(response.data.rescode == 200){
                  this.caseMonitor = response.data.data;
                  if(this.caseMonitor.length == 0){
                    this.open2("暂无数据")
                  }else{
                    $(".caseMontorDialog").removeClass("hide");
                    this.caseActive.sevencase = true;
                  }
                }else{
                  this.open4(response.data.resdes)
                  if(response.data.rescode == 300){
                    this.$router.push({path:'/'})
                  }
                }
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })
            break;
          case "8":
            url = '/monitor/v1/wait-allocat';
            axios.get(this.ajaxUrl+url)
              .then(response => {
                if(response.data.rescode == 200){
                  this.caseMonitor = response.data.data;
                  if(this.caseMonitor.length == 0){
                    this.open2("暂无数据")
                  }else{
                    $(".caseMontorDialog").removeClass("hide");
                    this.caseActive.eightcase = true;
                  }
                }else{
                  this.open4(response.data.resdes)
                  if(response.data.rescode == 300){
                    this.$router.push({path:'/'})
                  }
                }
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })
            break;
        }
        if(this.caseMonitor.length!=0){
          for(let i in this.caseMonitor){
            if("todayLoginTime" in this.caseMonitor[i]){
              if(this.caseMonitor[i].todayLoginTime !== null){
                this.caseMonitor[i].todayLoginTime = this.caseMonitor[i].todayLoginTime.substring(10,(this.caseMonitor[i].todayLoginTime.length+1))
              }
            }
          }
          console.log(this.caseMonitor)
        }

      },
      open2(resdes) {
        this.$message.success(resdes);
      },
      closCaseMontor(){//关闭第一层遮盖层
        this.caseActive.onecase = false;
        this.caseActive.twocase = false;
        this.caseActive.threecase = false;
        this.caseActive.fourecase = false;
        this.caseActive.fivecase = false;
        this.caseActive.sixcase = false;
        this.caseActive.sevencase = false;
        this.caseActive.eightcase = false;
        this.caseActive.nighcase = false;
        $(".caseMontorDialog").addClass("hide");
        this.getCaseMonitor()
      },
      goCaseDetail(id,surveyStatus){//查看案件详情
         var paramData = {
              "id": parseInt(id),
              "orderStatus": surveyStatus
          }
          axios.post(this.ajaxUrl+"/survey-detail/v1/get",paramData)
          .then(response => {
            if(response.data.rescode == 200){
              var data = JSON.stringify(response.data.data)
              localStorage.setItem("caseDetailData",data);
              this.$store.commit('setCaseDetailActive', true);
              this.caseDetailActive = this.$store.state.caseDetailActive;
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      goSignSeat(id){//获取坐席指派列表
        this.$store.commit('getsurveyOrderId',id);
        axios.get(this.ajaxUrl+'/web-surveyor/v1/list')
          .then(response => {
            if(response.data.rescode == 200){
              if(response.data.data.length != 0){
                localStorage.setItem("signSeatData",JSON.stringify(response.data.data))
                this.$store.commit('setSignSeatsActive', true);
                this.signSeatsActive = this.$store.state.signSeatsActive;
              }else{
                this.open2(暂无数据)
              }
            }else{
              this.open4(response.data.resdes)
              if(response.data.rescode == 300){
                this.$router.push({path:'/'})
              }
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
      caseDetail,
      signSeats,
    },
    computed: {
      getUserIcons(){
        return this.$store.state.caseDetailActive;
      },
      getsignSeatsActive() {
        return this.$store.state.signSeatsActive;
      }
    },
    destroyed () {
      clearInterval(this.time);
    },
  }

</script>

