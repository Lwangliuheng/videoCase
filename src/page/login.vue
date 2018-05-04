<style scoped>
  .header{
    background: #fff;
    width:100%;
    padding:2px 15%;
    margin: 0 auto;
    height: 70px;
  }
  .headerText{
    color: #555555;
    font-size: 18px;
    margin-left: 15px;
    display: inline-block;
    margin-top: 25px;
  }
  .headerText span{
    padding-right:10px;
  }
  .header img{
    height: 40px;
    width: 115px;
  }
.loginContent{
  height:100vh;
  background: #fff;
  width: 100%;
  padding: 20px 15%;

}
.loginLeft{
  background: url("../images/login.png") center 20px no-repeat;
  width: 50%;
  height: 400px;
}
  .loginRight{
    margin: 80px 15px 0 15px;
    height: 400px;
  }
  .loginRight .loginInput{
    margin: 15px;
    position: relative;
    box-sizing: border-box;
  }
  .loginRight input{
    border: 1px solid #bbb;
    border-radius: 4px;
    height: 40px;
    line-height: 40px;
    padding-left: 40px;
    padding-right: 24px;
    width: 260px;
  }
  .loginRight .codeInput{
      width: 146px;
  }
  .loginInput>i {
    position: absolute;
    top: 7px;
    left: 16px;
  }
  .loginCode i{
    top: 10px;
  }
  .loginCode .codeImg{
    height: 40px;
    width: 110px;
    position: absolute;
    margin-left: 5px;
  }
  .loginButton{
    width: 280px;
    margin: 10px;
  }
  .loginButton .loginText{
    color: #fff;
    border-radius:4px;
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
.footerText{
  text-align: center;
  color:#bbb;
}

  .rotateBox {
    position: absolute;
    left: 273px;
    top: 12px;
    height: 16px;
    width: 16px;
    display: inline-block;
    transition: All 1s ease-in-out;
    -webkit-transition: All 1s ease-in-out;
    -moz-transition: All 1s ease-in-out;
    -o-transition: All 1s ease-in-out;
  }

  .rotateBoxClick{
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }
</style>
<template>
  <div>
    <div class="header" style="font-size: 85%;">
      <div style="display: flex;border-bottom:1px solid #bbb;padding-bottom:15px;">
        <img style="margin-top:10px;" src="../images/logo.png"/>
        <span class="headerText">  <span>|</span>事故e处理-视频查勘定损坐席平台</span>
      </div>

    </div>
    <div class="loginContent">
      <div style="display: flex;">
        <div class="loginLeft"></div>
        <div class="loginRight">
          <div class="loginInput">
            <i><img src="../images/dl3.png"/></i>
            <input class="userInput" v-model="username" type="text" placeholder="请输入用户名"/>
          </div>
          <div class="loginInput">
            <i><img src="../images/dl2.png"/></i>
            <input class="passwordInput" type="password" maxlength="80" v-model="userpwd" placeholder="请输入密码"/>
          </div>
          <div class="loginInput loginCode">
            <i><img src="../images/dl1.png"/></i>
            <input class="codeInput"  v-model="valicode" type="text" placeholder="请输入验证码"/>
            <img class="codeImg"  :src="imgUrl"/><span @click="refreshCode()" class="el-icon-refresh rotateBox"></span>
          </div>
          <div class="loginButton">
            <div style="display:none;">
              <el-button :plain="true" @click="open2">成功</el-button>
              <el-button :plain="true" @click="open4">错误</el-button>
            </div>
            <span class="backColorGreen loginText" @click="loginIn">登录</span>
          </div>
        </div>
      </div>
      <div class="footerText"> 北京中车宝联科技有限责任公司 ©2015-2018</div>
    </div>
    </div>
</template>

<script>
  // 按下 Enter 键响应事件函数

  import axios from 'axios'
  export default {
    data() {
      return {
        imgUrl: '',
        username: "",
        valicode: "",
        userpwd: "",
        loginActive: false,
        syncSessionNodePath: "",
        userId: ""
      }
    },
    created(){
      this.getCode();
    },

    mounted() {
      document.onkeydown = (ev) => {
        if (ev.keyCode == 13) {
          this.loginIn()
        }
      }

    },
    watch: {
      loginActive: function(){
        if(this.loginActive == true){

          console.log(this.loginActive)

        }
      }
    },
    methods: {
      refreshCode(){
        this.getCode()
        $(".el-icon-refresh").addClass("rotateBoxClick");
        setTimeout(function(){
          $(".el-icon-refresh").removeClass("rotateBoxClick")
        },500)
      },
      open2() {
        this.$message({
          message: '登陆成功',
          type: 'success'
        });
      },
      open4(resdes) {
        this.$message.error(resdes);
      },
      getCode(){
        var number = Math.round(Math.random()*9+1);
        this.imgUrl = this.ajaxUrl+"/pubsurvey/manage/login/v1/imgcode?"+number;
//        axios.get(this.ajaxUrl+"/pubsurvey/manage/login/v1/imgcode")
//          .then(response => {
//            if(response.status == 200){
//              this.imgUrl = this.ajaxUrl+"/pubsurvey/manage/login/v1/imgcode?"+number;
//            }
//          }, err => {
//            console.log(err);
//          })
//          .catch((error) => {
//            console.log(error)
//          })
      },
      loginIn() {
        var paramData = {
          "username": this.username,
          "userpwd": this.userpwd,
          "valicode": this.valicode
        }
        if(this.username == ""){
          this.open4("请输入用户名")
        }else if(this.userpwd == ""){
          this.open4("请输入密码")
        }else if(this.valicode == ""){
          this.open4("请输入验证码")
        }else{
          axios.post(this.ajaxUrl+"/pubsurvey/manage/login/v1/login",paramData)
            .then(response => {
                if(response.data.rescode == 200){
                  localStorage.setItem('A',"2")
                  localStorage.setItem('insurecode',response.data.data.insurecode);
                  localStorage.setItem('orgCode',response.data.data.organizationCode);
                  localStorage.setItem('chinaName',response.data.data.organizationName)
                  localStorage.setItem('userName',response.data.data.username)
                  localStorage.setItem('userId',response.data.data.userId)
                  this.$router.push({path:'/surveyContant'})
                  var data = {
                    'orgCode':response.data.data.organizationCode,
                    "userId":response.data.data.userId
                  }
                }else {
                  this.open4(response.data.resdes);
                  this.getCode()
                  this.valicode = '';
                }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    },

    components: {
    },
  };
</script>

