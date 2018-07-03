<style scoped>
 .table_wrap{
  width:900px;
  margin:0 auto;
 }
 .top{
  line-height: 50px;
  text-align: center;
  font-size: 20px;
 }
 .list_one{
  overflow: hidden;
  border:2px solid #b6b6b6;
  border-bottom:none;
  position:relative;
 }
 .right{
  float:right;
 }
 .left{
  float:left;
 }
 .list_one_right{
   max-width:864px;
   padding-right:10px;
   
 }
 .list_one_left{
  width:30px;
  /*height:200px;*/
  text-align: center;
  padding-top:60px;
  padding-bottom:60px;
  border-right:1px solid #b6b6b6;

 }
 .list_two_left{
    padding-bottom:90px;
    padding-top:90px;
 }
 .right_top{
  overflow: hidden;
 }
 .right_top_box{
  width:288px;
  height:70px;
  line-height: 70px;
  border:1px solid #b6b6b6;
  border-top:none;
  border-left:none;
 }
 .right_top_box_te{
  width:290px;
  border-right:none;
 }
 
 .signature_wrap{
   position:absolute;
   bottom:0px;
   right:0px;
 }
 .right_bottom_top{
  padding-top:20px;
 }
 .inline_span{
  display:inline-block;

 }
 .inline_span_te{
  min-width: 100px;
 }
 .list_one_right_top{
  text-indent:20px;
  }
  .list_one_right_content p{
    padding-left:20px;
    padding-bottom:4px;
  }
  .ul_wrap{
    padding-left:20px;
    overflow: hidden;
  }
  .li_one_img{
    width:10px;
    height:10px;
    border:1px solid #b6b6b6;
    vertical-align:middle;
  }
  .li_one{
    float:left;
    margin-right:10px;
  }
  .li_three{
    float:none;
    margin-bottom:10px;
  }
  .three_ul_wrap{
    padding-top:50px;
  }
  .four_li_one2{
      padding-left:10px;
   }
  .four_li_one3{
      padding-left:30px;
      padding-bottom:4px;
   }
   .four_li_one{
     width:868px;
     border-bottom:1px solid #b6b6b6;
     overflow: hidden;
   }
   .four_qt{
    display:inline-block;
    border-bottom:1px solid #b6b6b6;
    min-width: 100px;
   }
   .four_li_one_te p{
    float:left;
   }
   .four_li_one_te .ul_wrap{
     float:left;
   }
   .four_ul_wrap{
    padding-left: 0px;
   }
   .four_li_one_tian_left{
    width:50%;
    border-right: 1px solid #b6b6b6;
    line-height: 50px;
   }
   .four_li_one_tian_left_te{
    width:100%;
   }
   .list_four_left{
    padding-top:100px;
    padding-bottom:100px;
   }
   .top_word{
    padding-left:20px;
   }
   .four_word{
    text-indent: 20px;
    padding-top:10px;
    padding-bottom: 10px;
    border-bottom:none;
   }
   .list_last_right{
    padding-top:10px;
   
   }
   .last_word_top{
     text-indent: 20px;
     padding-bottom:10px;
   }
   .last_word_list{
    text-indent: 40px;
    padding-bottom: 5px;
   }
   .list_last{
   border-bottom:2px solid #b6b6b6;
   }
   .list_last_left{
    padding:7px 0px;
   }
   .footer_top{
     font-size: 28px;
     padding-top:10px;
     padding-bottom:20px;
   }
   .footer_content{
    overflow: hidden;
   }
   .footer_left p{
     height:50px;
     font-size: 20px;
   }
   .footer_right p{
     height:50px;
     font-size: 20px;
   }
   .img_wrap img{
    width:200px;
    height:200px;
    border:1px solid #fff;
    margin-right:140px;
    margin-bottom: 20px;
   }
   .img_last{
     margin-right:0px !important;
   }
   .ss_wrap{
    padding-top:10px;
    padding-left:122px;
   }
   .bj{
       color:blue;
       float:right;
       padding-right:10px;
       cursor:pointer;
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
  
  .czm-content{
    width: 500px;
    margin: 6vh;
    margin-left:35%;
    background: #fff;
    margin-top: 20vh;
    position: relative;
  }
  .claim-content{
    width: 650px;
    margin: 6vh;
    margin-left:50%;
    background: #fff;
    margin-top: 20vh;
    height:500px;
    overflow: scroll;
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
 .but-czm{
     width:300px;
     margin-left:100px;
     margin-bottom:20px;
  }

</style>
<template>
  <div>
    <div class="table_wrap" v-if="ready">
      <div class="top">机动车辆保险小额简易理赔申请书</div>
      <div class="content">
        <p>
          <span>报案号：</span>
          <span>{{infoData.detail.reportNo}}</span>
        </p>
        <div class="table_wrap">
            <div class="list_one">
              <div class="left list_one_left" >
                查勘信息
              </div>
              <div class="left">
                 <div class="right_top">
                    <div class="left right_top_box">
                      <span>被保险人：</span>
                      <span>{{infoData.targetVehicle.casePerson}}</span>
                    </div>
                    <div class="left right_top_box">
                      <span>车牌号码：</span>
                      <span>{{infoData.targetVehicle.licenseNo}}</span>
                    </div>
                    <div class="left right_top_box right_top_box_te">
                      <span>发动机号：</span>
                      <span>{{targetVehicle.engineNo}}</span>
                    </div>
                 </div>
                 <div class="right_bottom">
                     <div class="right_bottom_top">
                        <p>损失及施救情况 ：</p>
                        <ul class="ss_wrap">
                          <li v-for="item in claimInfo">
                            <span>{{item.licenseNo}}</span>
                            <span v-for="value in item.damagedPart">{{value}}</span>
                            <span>￥{{item.claimAmount}}</span>
                          </li>
                         <!--  <li>
                            <span>123;</span>
                            <span>123;</span>
                            <span>123;</span>
                          </li> -->
                        </ul>
                        <div >
                           
                        </div>
                     </div>
                    <!--  <div class="signature_wrap">
        
                           <span class="inline_span">签名：</span>
                           <img src="" style="width:100px;height:30px;border:1px solid red;vertical-align: middle;">
                          
                           <span class="inline_span">日期：</span>
                           <span class="inline_span inline_span_te">978789978</span>
                       
                     </div> -->
                 </div>
              </div>
            </div>
            <!--=======================================================================================-->
             <div class="list_one">
              <div class="left list_one_left list_two_left" >
                索赔告知
              </div>
              <div class="left list_one_right">
                  <p class="list_one_right_top">尊敬的客户，由于您投保的机动车发生了事故，为了保障您的合法权益，请您认真阅读以下内容并按照要求提供与保险赔偿有关的证明和材料：</p>
                  <div class="list_one_right_content">
                     <p>
                      1.根据费率浮动规则的规定，索赔记录可能会提高您以后年度的保险费，请您谨慎考虑是否要发起本次索赔；
                     </p>
                     <p>
                       2.为了您能够及时获得保险赔款，请您准确向我们提供收款人的账户名称、银行卡（折）账号、开户行名称、有效的手机号码等信息；
                     </p>
                     <p>
                        3.如您需要及时了解理赔进度等信息，可登陆我公司网站或关注我公司官方微信进行自主查询，也可咨询为您提供服务的理赔专员；
                     </p>
                     <p>
                       4.我公司将与您共同加强对理赔服务的监督，如您在理赔中遇到问题，请及时拨打我公司专线电话95585进行咨询、建议或投诉！
                     </p>
                     <p>
                       5.您在本次事故中需要提供的有关证明和材料是：
                     </p>
                     
                  </div>
                  <ul class="ul_wrap">
                     <li class="li_one">
                        <img src="" class="li_one_img" v-if="!sfz">
                        <img src="../images/dh.png" class="li_one_img" v-if="sfz">
                        <span class="li_one_word">被保险人身份证</span>
                     </li>
                     <li class="li_one">
                        <img src="" class="li_one_img" v-if="!yhk">
                        <img src="../images/dh.png" class="li_one_img" v-if="yhk">
                        <span class="li_one_word">银行卡</span>
                     </li>
                  </ul>
              </div>
            </div>
               <!--=======================================================================================-->
             <div class="list_one">
              <div class="left list_one_left list_three_left" >
                损失确认
              </div>
              <div class="left list_one_right">

                  <ul class="ul_wrap three_ul_wrap">
                     <li class="li_one li_three">
                        <span class="li_one_word"> 事故甲乙双方均认可本车事故责任及保险公司赔付金额。</span>
                     </li>
                     <li class="li_one li_three">
                        <img src="" class="li_one_img" v-if="smallClaim.lossConf != 1">
                        <img src="../images/dh.png" class="li_one_img" v-if="smallClaim.lossConf == 1">
                        <span class="li_one_word">三者方已获得赔付，如后期产生理赔纠纷与保险公司无关。</span>
                     </li>
                     <li class="li_one li_three">
                        <img src="" class="li_one_img" v-if="smallClaim.lossConf != 0">
                        <img src="../images/dh.png" class="li_one_img" v-if="smallClaim.lossConf == 0">
                        <span class="li_one_word">三者方未获得赔付，甲方授权贵公司将本次理赔款项划入三者方账户。</span>
                     </li>
                  </ul>
              </div>
            </div>
             <!--=======================================================================================-->
              <!--=======================================================================================-->
             <div class="list_one">
              <div class="left list_one_left list_four_left" >
                索赔申请及转账信息
              </div>
              <div class="left list_one_right">
                  <div class="four_li_one">
                     <p class="four_li_one1">
                       出险经过：
                     </p>
                     <p class="four_li_one2" style="padding-top:10px;padding-bottom: 10px;">445456465564564</p>
                     <p class="four_li_one3">本人（单位）的保险车辆发生的上述事故已结案，现特向贵公司提出索赔申请。</p>
                  </div>
                  <div class="four_li_one four_li_one_te">
                    <ul class="ul_wrap four_ul_wrap">
                       
                       <li class="li_one" style="padding-top:10px;padding-bottom: 10px;">
                          <span class="top_word">本次出险如属于保险赔偿责任范围内，则我单位（个人）（证件类型：</span>
                          <img src="../images/dh.png" class="li_one_img">
                          <span class="li_one_word">身份证</span>
                          <img src="" class="li_one_img">
                          <span class="li_one_word">其它</span>
                          <span class="four_qt"></span>
                          <span>）对贵公司支付理赔款事项授权如下：委托贵公司将本次理赔款项划入本授权人指定的以下银行账户（</span>
                          <img src="" class="li_one_img" v-if="smallClaim.lossConf != 0">
                          <img src="../images/dh.png" class="li_one_img" v-if="smallClaim.lossConf == 0">
                          <span class="li_one_word">将三者方的损失赔款划入三者账户</span>
                          <span>），后续引发的理赔纠纷由我单位（个人）自行承担。</span>
                       </li> 
                     </ul>
                  </div>
                  <div v-for="item in accountsList">

                    <div class="four_li_one four_li_one_te" v-if="item.targetFlag == 1">
                       <div class="left four_li_one_tian_left"><span>账户名称：</span><span>{{item.accountName}}</span><span class="bj" @click="editorClick($event,'账户名称',1,item.accountName)">编辑</span></div>
                       <div class="left four_li_one_tian_left"><span>开户行名称：</span><span>{{item.bankName}}</span><span class="bj" @click="editorClick($event,'开户行名称',1,item.bankName)">编辑</span></div>
                    </div>
                    <div class="four_li_one four_li_one_te" v-if="item.targetFlag == 1">
                       <div class="left four_li_one_tian_left four_li_one_tian_left_te"><span>账号：</span><span>{{item.accountNum}}</span><span class="bj" @click="editorClick($event,'账号',1,item.accountNum)">编辑</span></div>
                    </div>
                     <div class="four_li_one four_li_one_te" v-if="item.targetFlag != 1">
                       <div class="left four_li_one_tian_left"><span>三者账户名称：</span><span>{{item.accountName}}</span><span class="bj" @click="editorClick($event,'三者账户名称',2,item.accountName)">编辑</span></div>
                       <div class="left four_li_one_tian_left"><span>开户行名称：</span><span>{{item.bankName}}</span><span class="bj" @click="editorClick($event,'开户行名称',2,item.bankName)">编辑</span></div>
                    </div>
                    <div class="four_li_one four_li_one_te" v-if="item.targetFlag != 1">
                       <div class="left four_li_one_tian_left four_li_one_tian_left_te"><span>账号：</span><span>{{item.accountNum}}</span><span class="bj" @click="editorClick($event,'账号',2,item.accountNum)">编辑</span></div>
                    </div>
                  </div>
                  
                  <div class="four_li_one four_li_one_te four_word">
                    本授权书所载明的支付信息不得涂改、伪造、变造，否则无效。本授权书所载明的结算账户的失窃、冒领或由于被保险人/受益人提供结算账户信息有误或不符合转账支付的账户要求而造成转账不成功等情况，保险人不承担责任，授权人签章后本授权书即刻生效。
                  </div>
              </div>
            </div>
             <!--=======================================================================================-->
             <!--=======================================================================================-->
             <div class="list_one list_last">
              <div class="left list_one_left list_last_left" >
                反保险欺诈提示
              </div>
              <div class="left list_one_right list_last_right">
                 <p class="last_word_top">诚信是保险合同基本原则，涉嫌保险欺诈将承担以下责任：</p>
                 <p class="last_word_list">【刑事责任】进行保险诈骗犯罪活动，可能会受到拘役、有期徒刑,并处罚金或者没收财产的刑事处罚。保险事故的鉴定人、证明人故意提供虚假的证明文件,为他人诈骗提供条件的,以保险诈骗罪的共犯论处。</p>
                 <p class="last_word_list">【行政责任】进行保险诈骗活动，尚不构成犯罪的，可能会受到15日以下拘留、5000元以下罚款的行政处罚；保险事故的鉴定人、证明人故意提供虚假的证明文件,为他人诈骗提供条件的,也会受到相应的行政处罚。</p>
                 <p class="last_word_list">【民事责任】故意或因重大过失未履行如实告知义务，保险公司不承担赔偿或给付保险金的责任。</p>
              </div>
            </div>
             <!--=======================================================================================-->
        </div>
      </div>
      <div class="footer">
         <p class="footer_top">本人声明已知并确认以上信息 </p>
         <div class="footer_content">
            <div class="left footer_left">
               <p><span>被保险人（法人）签章：</span><img :src="detailList[0].signPhotoUrl" style="width:100px;height:30px;vertical-align: middle;"><!-- <span>789789978978</span> --></p>
               <p><span>日期：  </span><span>{{detailList[0].signTime}}</span></p>
            </div>
            <div class="right footer_right">
              <p><span>三者客户签章：</span><span style="display:inline-block;width:100px;height:30px;vertical-align: middle;"></span><!-- <img src="" style="width:100px;height:30px;vertical-align: middle;"> --><!-- <span>789789978978</span> --></p>
              <p><span>日期：  </span><span><!-- detailList[0].signPhotoUrl --></span></p>
            </div>
            <div class="img_wrap">
               <img :src="detailList[0].idCardFrontPhoto">
               <img :src="detailList[0].idCardBackPhoto">
               <img :src="detailList[0].bankCardPhoto" class="img_last">
            </div>
         </div>
      </div>
    </div>
   


   <div class="szc-wrap hide">
        <div class="czm-content">
          <div class="top-wrap">
              <h4>修改{{xgtitle}}</h4>
              <span @click="closeSzcDiolag" class="xmark">×</span>
          </div>
          
          <div class="che-one">
                <el-input :placeholder="'请输入'+xgtitle" @blur="szcInput" :value="xgName"></el-input>
          </div>
    
          <el-button type="primary" class="but-czm" @click="szcButton">确定</el-button>
        </div>
    </div>
  </div>

</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
           ready:false,
           targetVehicle:'',
           caseDetailData:{},
           czmInputValue:"",
           xgNum:"",
           xgtitle:"",
           xgName:"",
           claimInfo:{},
           sfz:false,
           yhk:false,
           smallClaim:{},
           infoData:{},
           detailList:[],//图片
           accountsList:[]  ///帐号列表
      }
    },
    watch: {
     
    },
    created() {
      
    },
    mounted() {
     this.caseDetailData =  JSON.parse(localStorage.getItem("caseDetailData"));
     this.getDetailData();
     this.getAccountsInfo();
     console.log(this.caseDetailData)
    },
    methods: {
       //失焦
       szcInput(e){

        if(e.target.value.length == 0){
          this.czmInputValue = "";
          this.$message({
            showClose: true,
            message: '请填写'+this.xgtitle,
            type: 'error'
          });
        }else{
          this.czmInputValue = e.target.value;
        }
       },
      //XXxxxx
      closeSzcDiolag(){
        $('.szc-wrap').addClass("hide");
      },
      //编辑
        editorClick(e,value,num,name){
           this.xgtitle = value;
           this.xgNum = num;
           this.xgName = name;
           this.czmInputValue = name;
           $('.szc-wrap').removeClass("hide");
        },
        //确定编译
        szcButton(){
          var smallClaimId = this.caseDetailData.smallClaimId;
          var surveyBaseInfoId = this.caseDetailData.reportVehicleInfo.id;
          // surveyBaseInfoId = 9544;
          // smallClaimId = "2";
          if(this.czmInputValue.length == 0){
              this.$message({
                showClose: true,
                message: '请填写'+this.xgtitle,
                type: 'error'
              });
          }else{
            var id = localStorage.getItem("wIdData");
            var source = '';
            var accountName = "";
            var paramData = {};
            if(this.xgNum == 1){
               source = 1;//标的
            }else{
              source = 2;//三者
            };
            if(this.xgtitle == "账户名称"){
              paramData = {
                   smallClaimId: smallClaimId,
                   surveyBaseInfoId:surveyBaseInfoId,
                   accountName:this.czmInputValue,
                   targetFlag:source,
                   source:"1"
               };  
            };
            if(this.xgtitle == "三者账户名称"){
              paramData = {
                   smallClaimId: smallClaimId,
                   surveyBaseInfoId:surveyBaseInfoId,
                   accountName:this.czmInputValue,
                   targetFlag:source,
                   source:"1"
               };  
            };
            if(this.xgtitle == "开户行名称"){
              paramData = {
                   smallClaimId: smallClaimId,
                   surveyBaseInfoId:surveyBaseInfoId,
                   bankName:this.czmInputValue,
                   targetFlag:source,
                   source:"1"
               };
            };
            if(this.xgtitle == "账号"){
              paramData = {
                   smallClaimId: smallClaimId,
                   surveyBaseInfoId:surveyBaseInfoId,
                   accountNum:this.czmInputValue,
                   targetFlag:source,
                   source:"1"
               };
            };
            console.log(paramData,77777777)
               axios.post(this.ajaxUrl+'/small_claim_account/v1/submit',paramData)
                 .then(response => {
                   // console.log(response,77777777777777)
                   if(response.status == 200){
                      $('.szc-wrap').addClass("hide");
                      this.getAccountsInfo();
                      this.$message({
                        showClose: true,
                        message: '修改成功！',
                        type: 'success'
                      });
                   }
                 }, err => {
                   console.log(err);
                 })
                 .catch((error) => {
                   console.log(error)
                 })
          };
        },
        getLossList(str){
         // var str = "1-2-3-4-5-6-7";
         var arr = str.split('-');
         var zarr = ["正前部","左前部","右前部","左中部","正后部","左后部","右后部","右中部"];
         var barr = [];
         for(var i = 0; i < arr.length;i++){
            barr.push(zarr[arr[i]-1])
         };
         return barr
      },
      changeLossList(obj){
        //var obj = [{damagedPart:"1-2-3-4-5-6-7",licenseNo:"1",claimAmount:10},{damagedPart:"1-2-3-4-5-6-7",licenseNo:"1",claimAmount:10}]
        var plateNumber = "";
        var claimMoney = "";
         for(var i = 0; i < obj.length;i++){
           //alert(2222)
             obj[i].damagedPart = this.getLossList(obj[i].damagedPart);
             if(obj[i].licenseNo != this.targetVehicle.licenseNo){
                plateNumber += obj[i].licenseNo;
                claimMoney += "￥" + obj[i].claimAmount;
                // console.log(claimMoney)
             }
             
         };

         // this.plateNumber = plateNumber;//车牌
         // this.claimMoney = claimMoney;//理赔金
         this.claimInfo = obj //理赔信息集合
      },
      //身份证银行卡
      bankCark(){
        var that = this;
        this.smallClaim.evidenceType.forEach(function(item,key){
            if(item == "被保险人身份证"){
                that.sfz = true;
            };
            if(item == "银行卡"){
                that.yhk = true;
            };
        });
      },
      //获取开户帐号信息
     getAccountsInfo(){
        var smallClaimId = this.caseDetailData.smallClaimId;
            // smallClaimId = 2;
       // console.log(this.caseDetailData,8787789978897879)
        var paramData = {
          'smallClaimId': smallClaimId
        };
        axios.post(this.ajaxUrl+'/small_claim_account/v1/query',paramData)
          .then(response => {
             console.log(response,'帐号')
            if(response.status == 200){
               
               if(response.data.list.length > 0){
                    this.accountsList = response.data.list;
               }else{
                    this.accountsList = [
                    {
                      targetFlag:"1",
                      accountName:"",
                      bankName:"",
                      accountNum:""

                    }
                    ]
               }
               console.log(this.accountsList,1111111)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
    },
    //获取table信息
    getDetailData(){
        this.caseDetailData =  JSON.parse(localStorage.getItem("caseDetailData"));
        var smallClaimId = this.caseDetailData.smallClaimId;
            // smallClaimId = 2;
        var paramData = {
          smallClaimId: smallClaimId
        };
        axios.post(this.ajaxUrl+'/small_claim/v1/view',paramData)
          .then(response => {
            console.log(response,88888)
            if(response.status == 200){
              this.ready = true;
              // alert(11111)
              this.lossState = response.data.claimInfoList ? true:false;
              this.detailList = response.data.detailList;
              this.infoData = response.data.surveyDetail;
              this.smallClaim = response.data.smallClaim;
              this.targetVehicle = response.data.surveyDetail.targetVehicle;//标的车信息
              this.bankCark();
              if(this.lossState){
                this.changeLossList(response.data.claimInfoList);
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
     
    },
    computed: {
      
    },
    destroyed () {
     
    },
  }

</script>

