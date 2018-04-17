<style scoped>
  .signSeats{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    height: 100vh;
    top:0;
    left:0;
    z-index: 200;
  }
  .signSeatsBox{
    width: 54%;
    margin: 15vh auto;
    background: #fff;
    padding: 20px;
    max-height: 65vh;
    position: relative;
  }
  .closCaseDetail{
    font-size: 42px;
    position: absolute;
    right: 15px;
    top: 0;
  }

  .dialogTitle{
    color: #232323;
    font-size:16px;
    font-weight: 600;
  }
  .carInfoBox .orderTime{
    color: #232323;
  }
   .carInfoBox{
    min-width: 23%;
    margin: 10px 15px;
    padding: 10px;
    font-size: 14px;
  }
  .titleInfo{
    font-size: 15px;
    padding: 15px;
  }
  .carInfoBoxOne,.carInfoBoxTwo{
    background: #fff;
    min-height: 160px;
  }

  .carInfoBox p{
    line-height: 25px;
    font-weight: normal;
    font-style: normal;
    margin-top: 10px;
  }
  .scrollBox{
    overflow-y: scroll;
    max-height: 47vh;
  }
  .imgBox{
    text-align: center;
  }
  .kefuName{
    margin-top: 15px;
  }
  .imgBox img{
    height: 60px;
    width: 60px;
    margin-top: 30px;
  }
  .seatInfo{
    padding-left: 10px;
  }
  .flex{
    padding: 5px 0;
  }
</style>
<template>
  <div class="signSeats">
    <div class="signSeatsBox">
      <span @click="closSignSeat" class="right closCaseDetail">×</span>
      <div class="oneMonitor clear">
        <h4 class="dialogTitle">订单指派</h4>
        <p class="titleInfo">请选择要指派的坐席</p>
        <div class="clear scrollBox">
          <div v-for="item in signSeatData">
            <div  class="left carInfoBoxTwo bordercolorGreen carInfoBox" @click="assignThis(item.userId)" v-if="item.currentStatusAuto == 0 && item.currentStatusManual == 0">
              <div class="flex">
                <div class="imgBox">
                  <img src="../images/kefuBlue.png">
                </div>
                <div class="seatInfo">
                  <h3 class="kefuName">{{item.webSurveyorName}}</h3>
                  <p class="carInfoOne" >当前状态：空闲
                  </p>
                  <p class="carInfoOne">待处理案件：{{item.waitForProcessOrderCount}}单</p>
                </div>
              </div>
            </div>
            <div  class="left bordercolorRed carInfoBoxTwo carInfoBox" @click="assignThis(item.userId)" v-if="item.currentStatusAuto == 2 || item.currentStatusManual  == 2">
                <div class="flex">
                  <div class="imgBox">
                    <img src="../images/kefuBlue.png">
                  </div>
                  <div class="seatInfo">
                    <h3 class="kefuName">{{item.webSurveyorName}}</h3>
                    <p class="carInfoOne">当前状态：<span class="orderTime">繁忙</span>
                    </p>
                    <p class="carInfoOne">待处理案件：{{item.waitForProcessOrderCount}}单</p>
                  </div>
                </div>
              </div>
            <div  class="left bordercolorGray carInfoBoxTwo carInfoBox" @click="assignThis(item.userId)" v-if="(item.currentStatusAuto == null || item.currentStatusAuto  == 1)">
              <div class="flex">
                <div class="imgBox">
                  <img src="../images/kefuBlue.png">
                </div>
                <div class="seatInfo">
                  <h3 class="kefuName">{{item.webSurveyorName}}</h3>
                  <p class="carInfoOne" >当前状态：离线
                  </p>
                  <p class="carInfoOne">待处理案件：{{item.waitForProcessOrderCount}}单</p>
                </div>
              </div>
            </div>
          </div>
          </div>

      </div>

    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return{
        signSeatData: [],
      }
    },
    created(){
      this.signSeatData = JSON.parse(localStorage.getItem("signSeatData"));
      console.log(this.signSeatData)
    },
    methods: {
      open4(resdes) {
        this.$message.error(resdes);
      },
      open2(resdes) {
        this.$message.success(resdes);
      },
      assignThis(webSurveyorId){
        var surveyOrderId = this.$store.state.surveyOrderId;
        var paramData = {
          "surveyOrderId" : surveyOrderId,
          "webSurveyorId": webSurveyorId
        }
        axios.post(this.ajaxUrl+"/web-surveyor/v1/assign",paramData)
          .then(response => {
            if(response.data.rescode == 200){
              this.open2(response.data.resdes)
              this.$store.commit('getcaseListActive', true)//调用列表接口
              this.$store.commit('setSignSeatsActive', false);//关闭组件
            }else{
              this.open4(response.data.resdes)
              this.$store.commit('getcaseListActive', true)//调用列表接口
              if(response.data.rescode == 300){
                this.$router.push({path:'/'})
                this.$store.commit('setSignSeatsActive', false);
              }
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      closSignSeat(){
        this.$store.commit('setSignSeatsActive', false);
        //清除本地存
      }
    },
    components: {
    },
  }
</script>
