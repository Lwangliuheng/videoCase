<template>
  <div class="caseList">
    <div class="caseListHeader">
      <form>
        <span>车牌号:</span>
        <input type="text" v-model="reporterCarLicenseNo" placeholder="请输入车牌号"/>
        <span>手机号:</span>
        <input type="tel" v-model="reporterPhoneNo" placeholder="请输入手机号" maxlength="11"/>
        <span>保险报案号:</span>
        <input type="text" v-model="reportInsuranceNo" placeholder="请输入保险报案号"/>
        <span>保险公司:</span>
        <div>
          <el-select v-model="insuranceCompanyCode" name="Companey" placeholder="请选择保险公司">
            <el-option
              v-for="item in companeyOptions"
              :key="item.insureCompanyName"
              :label="item.insureCompanyName"
              :value="item.insureCompanyCode">
            </el-option>
          </el-select>
        </div>
        <span>机构:</span>
        <el-select v-model="orgCode" name="insititution" placeholder="请选择机构">
          <el-option
            v-for="item in organizations"
            :key="item.orgCode"
            :label="item.orgName"
            :value="item.orgCode">
          </el-option>
        </el-select>
        <span >案件状态:</span>
        <el-select v-model="surveyStatus"  name="case" placeholder="请选择案件状态">
          <el-option
            v-for="item in surveyOption"
            :key="item.code"
            :label="item.name"
            :value="item.code">
          </el-option>
        </el-select>
        <span>事故时间:</span>
        <div class="" style="display:inline-block;">
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <input type="hidden" placeholder="开始时间"  v-model="accidentStartTime" style="margin-right: 5px;" class="smInp" name="startDate" id="startTime" readonly="readonly">
        <input class="smInp" name="endDate" v-model="accidentEndTime" style="margin-left: 5px;" type="hidden" id="endTime" readonly="readonly" placeholder="结束时间">
        <span>处理时间:</span>
        <div class="" style="display:inline-block;">
          <el-date-picker
            v-model="value7"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <input type="hidden" v-model="handleStartTime" placeholder="开始时间" style="margin-right: 5px;" class="smInp" name="dealstartDate" id="dealstartTime" readonly="readonly"/>
        <input class="smInp" name="dealendDate" v-model="handleEndTime" style="margin-left: 5px;" type="hidden" id="dealendTime" readonly="readonly" placeholder="结束时间"/>
        <span class="caseListSure" @click="formSure">确定 </span>
        <span class="caseListReset" @click="resetData">重置</span>
      </form>
    </div>
    <div class="caseListTable" v-if="tableActive">
      <div class="tableTitle">
        <span>共: {{pages}}页,</span>
        <span>{{totalCount}}条, </span>
        <span>当前页: {{currentCount}}条</span>
      </div>
      <table class="table" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #bbb;">
        <thead>
        <tr>
          <th style="border-left:1px solid #bbb;">
            编号
          </th>
          <th>
            报案人车牌号
          </th>
          <th>
            报案人姓名
          </th>
          <th>
            报案人手机号
          </th>
          <th style="width:16%;">
            保险公司
          </th>
          <th style="width:12%;">
           事故时间
          </th>
          <th style="width:18%;">
            事故地点
          </th>
          <th>
            案件状态
          </th>
          <th>
            视频发起次数
          </th>
          <th>
            操作
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in tableData">
          <td>{{index+1}}</td>
          <td>{{item.reporterCarLicenseNo}}</td>
          <td>{{item.reporterName}}</td>
          <td>{{item.reporterPhoneNo}}</td>
          <td>{{item.insuranceCompanyName}}</td>
          <td style="width:160px;">{{item.accidentTime}}</td>
          <td>{{item.accidentAddress}}</td>
          <td>{{item.survey}}</td>
          <td>{{item.videoConnectRequestCount}}</td>
          <td ><span v-if="item.webAllot == '0'" class="listAssign" @click="signSeats(item.id)" >指派</span><i v-if="item.webAllot == '0'">|</i><span  class="listView" @click="goCaseDetail(item.id,item.surveyStatus)">查看</span></td>
        </tr>
        </tbody>
      </table>
      <div>
        <el-pagination  @current-change="handleCurrentChange"
                        :current-page="currentPageNo"
                        :page-size = "pageSize"
                        layout="prev,pager,next"
                        :total="totalCount">
        </el-pagination>
      </div>
    </div>
    <div class="caseListTable" v-else>
      <p style="text-align:center;margin-top: 15px;">暂无数据</p>
    </div>
    <case-detail v-if="caseDetailActive"></case-detail>
    <sign-Seats v-if="signSeatsActive"></sign-Seats>
    <!--&lt;!&ndash;layout="total,prev,pager, next,jumper"&ndash;&gt;layout="total,prev,pager, next,jumper"-->
  </div>
</template>
<script>
  import axios from 'axios'
  import caseDetail from '../components/caseDetail'
  import signSeats from '../components/signSeats'
  export default {
    data() {
      return {

        tableActive: false,
        reporterPhoneNo: "",
        reporterCarLicenseNo: "",
        reportInsuranceNo: "",
        orgCode: '',
        accidentStartTime:"",
        accidentEndTime: "",
        handleStartTime: "",
        handleEndTime: "",
        insuranceCompanyCode: '',
        surveyStatus: '',
        pageSize: 10,
        pages: '',
        surveyOption:[
          {"name":"待查勘","code":"06"},
          {"name":"查勘中","code":"07"},
          {"name":"已查勘","code":"08"},
          {"name":" 已取消","code":"11"}
        ],
        currentPageNo: 1,
        currentCount: "",
        survey: "",
        tableData: [],
        totalCount: 0,
        companeyOptions: {},
        organizations: [],
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: '',
        ajaxUrl: "/boot-pub-survey-manage",
        showCaseDetail: false,
        caseDetailActive: false,
        signSeatsActive: false,
        caseListActive: false,
        time: '',
      }
    },
    watch: {
      getUserIcons(val) {
        this.caseDetailActive = val;
      },
      getsignSeatsActive(val) {
        this.signSeatsActive = val;
      },
      getCaseListActive(val) {
        this.caseListActive = val;

        if(this.caseListActive){
          this.getCaseList()
        }
      },
    },

    created() {
      this.getCompaney();
      this.getCaseList();

    },
    mounted() {
      this.caseDetailActive = this.$store.state.caseDetailActive;
    },
      methods: {

        open4(resdes) {
          this.$message.error(resdes);
        },
        open2(resdes) {
          this.$message.success(resdes);
        },
        signSeats(id){
          this.$store.commit('getsurveyOrderId',id);
          axios.get(this.ajaxUrl+'/web-surveyor/v1/list')
            .then(response => {
              if(response.data.rescode == 200){
                if(response.data.data.length != 0){
                  localStorage.setItem("signSeatData",JSON.stringify(response.data.data))
                  this.$store.commit('setSignSeatsActive', true);
                  this.signSeatsActive = this.$store.state.signSeatsActive;
                }else{
                  this.open2("暂无数据")
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
        getCompaney(){
          axios.get(this.ajaxUrl+"/pub/survey/v1/insure-company")
            .then(response => {
              if(response.data.rescode == 200){
                this.companeyOptions = response.data.data.insureCompanys;
                this.organizations = response.data.data.organizations;
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
        getCaseList() {
          console.log(this.value6)
          console.log(this.value7)
          if(this.value6){
            for(let i in this.value6){
              if(i == 0){
                this.accidentStartTime = new Date(this.value6[0]);
              }else if(i == 1){
                this.accidentEndTime = new Date(this.value6[1])
                this.accidentEndTime = new Date(this.accidentEndTime.getTime()+24*60*60*1000-1);
              }
            }
            this.accidentStartTime = this.accidentStartTime.getFullYear() + '-' + (this.accidentStartTime.getMonth() + 1) + '-' + this.accidentStartTime.getDate()+ " 00:00:00";
            this.accidentEndTime = this.accidentEndTime.getFullYear() + '-' + (this.accidentEndTime.getMonth() + 1) + '-' + this.accidentEndTime.getDate()+" "+ this.accidentEndTime.getHours() + ":" + this.accidentEndTime.getMinutes() + ":" + this.accidentEndTime.getSeconds();
          }else{
            this.accidentStartTime = "";
            this.accidentEndTime = "";
          }
          if(this.value7){
            for(let i in this.value7){
              if(i == 0){
                this.handleStartTime = new Date(this.value7[0]);
              }else if(i == 1){
                this.handleEndTime = new Date(this.value7[1])
                this.handleEndTime =  new Date(this.handleEndTime.getTime()+24*60*60*1000-1)
              }
            }
            this.handleStartTime = this.handleStartTime.getFullYear() + '-' + (this.handleStartTime.getMonth() + 1) + '-' + this.handleStartTime.getDate()+ " " + this.handleStartTime.getHours() + ":" + this.handleStartTime.getMinutes() + ":" + this.handleStartTime.getSeconds();
            this.handleEndTime = this.handleEndTime.getFullYear() + '-' + (this.handleEndTime.getMonth() + 1) + '-' + this.handleEndTime.getDate()+ " " + this.handleEndTime.getHours() + ":" + this.handleEndTime.getMinutes() + ":" + this.handleEndTime.getSeconds();
          }else{
            this.handleStartTime = "";
            this.handleEndTime = "";
          }
          var paramData = {
            "currentPageNo": this.currentPageNo,
            "pageSize": this.pageSize,
            "insuranceCompanyCode": this.insuranceCompanyCode,
            "orgCode": this.orgCode,
            "reporterCarLicenseNo":this.reporterCarLicenseNo,
            "reporterPhoneNo": this.reporterPhoneNo,
            "reportInsuranceNo": this.reportInsuranceNo,
            "surveyStatus":this.surveyStatus,
            "accidentStartTime": this.accidentStartTime,
            "accidentEndTime": this.accidentEndTime,
            "handleStartTime":this.handleStartTime,
            "handleEndTime":this.handleEndTime,
          }
          axios.post(this.ajaxUrl+"/survey/order/history/v1/handled/list",paramData)
            .then(response => {
              if(response.data.rescode == 200){
                this.tableData = response.data.data.records;
                this.$store.commit('getcaseListActive', false)//监听调用列表接口关闭
                if(response.data.data.records.length !=0){
                  this.tableActive = true;
                  this.totalCount = parseInt(response.data.data.total);
                  this.currentCount = response.data.data.size;
                  this.pages = response.data.data.pages;
                  for(let i in this.tableData){
                    if(this.tableData[i].surveyStatus == '06'){
                      this.tableData[i].survey = "待查勘"
                    }else if(this.tableData[i].surveyStatus == '07'){
                      this.tableData[i].survey = "查勘中"
                    }else if(this.tableData[i].surveyStatus == '08'){
                      this.tableData[i].survey = "已查勘"
                    }else if(this.tableData[i].surveyStatus == '11'){
                      this.tableData[i].survey = "已取消"
                    }
                  }
                }else{
                  this.tableActive = false;
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
        handleClick(row) {
          console.log(row);
        },
        formSure() {
          this.getCaseList()
        },
        resetData(){
          this.insuranceCompanyCode = "";
          this.orgCode = "";
          this.reporterCarLicenseNo = "";
          this.reporterPhoneNo = "";
          this.reportInsuranceNo = "";
          this.surveyStatus = "";
          this.accidentStartTime = "";
          this.accidentEndTime = "";
          this.handleStartTime = "";
          this.handleEndTime = "";
          this.value6 = "";
          this.value7 = "";
          this.getCaseList()
        },
        handleCurrentChange(currentPage) {//跳转
          //当前页改变调用接口  pageNo  pageSize
          this.currentPageNo = currentPage;
          this.getCaseList()
        },
        goCaseDetail(id,orderStatus){
            var paramData = {
              "id": parseInt(id),
              "orderStatus": orderStatus
//              "id": 455,
//              "orderStatus": 11
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
      },
      getCaseListActive(){
        return this.$store.state.caseListActive;
      }
    },
    destroyed () {
      clearInterval(this.time);
    },
  }

</script>
<style scoped>
.caseList{
  width: 95%;
  background: #fff;
  font-size: 15px;
  margin: 0 auto;
}

.caseListHeader form{
  width: 100%;
  margin-left: 25px;
  padding-bottom: 10px;
 }
  .caseListHeader input, .caseListHeader select{
    width: 11%;
    background: #fff;
    border: 1px solid #bbb;
    height: 35px;
    margin: 10px 30px 2px 10px;
    padding-left: 5px;
    border-radius: 4px;
    color: #232323;
  }
.caseListHeader select{
  border-radius: 6px;
}
.caseListHeader label{
  margin-left: 10px;
}
  .caseListSure, .caseListReset{
    border: 1px solid #2EAB3B;
    font-size: 15px;
    border-radius: 5px;
    margin-left: 10px;
    padding: 6px 15px;
    display: inline-block;
    margin-bottom: 5px;
    cursor: pointer;
  }
.caseListSure{
  color: #fff;
  background: #2EAB3B;
}
.caseListTable{
  padding-top: 10px;
  border-top: 1px solid #bbb;
}
.caseListTable .tableTitle{
  margin-bottom: 10px;
}
.caseListTable .tableTitle span{
  padding-right: 5px;
}
  .caseListReset{
    color: #2EAB3B;
    background: #fff;
  }
  .table th{
    color: #2EAB3B;
    background: #ECF8F5;
    border: none;
  }
  .listAssign, .listView{
    color: #0D70D8;
    padding:6px;
    cursor: pointer;
  }

</style>
