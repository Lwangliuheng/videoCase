<template>
 
    <div class="callPhone_wrap">
      <div class="callPhone_wrap_box">
        <div class="callPhone_wrap_box_wrap">
             
               <div>
                    <video id="my-video" muted="muted" style="display:none"></video>
                    <video id="peer-video" style="display:none"></video>
                </div>
               <!--  <div id="debuginfo" class="debuginfo" ></div> -->
                <div class="debuginfote debuginfo">{{tsContent}}</div>
                <div class="but_wrap_content">
                   <div @click="rebroadcastPhone" class="but_wrap but_left">重拨</div>
               <!--     <div @click="resetPhone" class="but_wrap but_right">重置</div> -->
                   <div @click="hangPhone" class="but_wrap but_right">挂断</div>
                </div>
                
                   
        </div>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import Bus from "../../video/static/bus.js"
   window.passWord = "";//密码
   window.extension = "";//分机
   window.ua = null;
   window.session = null;
   window.ws_type = '';//cti连接方式
   window.cti_serverid = '';//cti服务器id
   window.cti_server = '';//cti服务器ip
   window.cti_port = '';//cti服务器端口 
   window.sip_serverid = '';//reg服务器id
   window.sip_server = '';//reg服务器ip
   window.sip_port = '';//reg服务器端口
   window.compid = '';//座席的企业id
   window.agentid = '';//座席id
   
  export default {
    props: ['phone'],
    data() {
        return{
          tsContent:"拨号中,请勿离开！",
          id:"",
          fjh:"",
          fjpsw:"",

          siginStatus:false,//嵌入状态
          setIntervalTime:""
        }
    },
    watch: {
      
    },
    created() {
    },
    mounted() {

       this.getCallInfo();
       this.$nextTick(function () {
                window.cti = new ClassXnCtiClient();//初始化（必须）
                window.selfView = document.getElementById('my-video');
                window.remoteView = document.getElementById('peer-video');
                this.registeredEvents();
        });
      
    },
    beforeDestroy(){
      this.hangPhone();
    },
    methods: {
      //获取电话信息
      getCallInfo(){
         axios.post("/phone-api-boot/public/phone/v1/getPhone")
           .then(response => {
            console.log(response,879879879987);
             if(response.status == 200){
                if(!response.data){
                  this.$confirm('目前没有空闲电话', '温馨提示', {
                          confirmButtonText: '确定',
                          showCancelButton:false,
                          // customClass:"tsk",
                          type: 'warning',
                          showClose:false,
                          center: true
                  }).then(() => {
                       Bus.$emit('gbCallPhoneTc', () => { //Hub接收事件
                         this.callPhoneStatus = false;
                        });
                        $(".callPhone_wrap").addClass('hide');
                  }).catch(() => {
                      
                  });
                };
                this.id= response.data.id;
                this.fjpsw = response.data.pPassword;
                this.fjh = response.data.phone;//分机
                localStorage.setItem("phoneId",response.data.id);
                window.passWord = response.data.password;//密码
                window.extension = response.data.phone;//分机
                // window.extension = 8300021013;
                //alert(response.data.phone)
                window.ws_type = response.data.type;//cti连接方式
                window.compid = response.data.companyId;//座席的企业id
                window.agentid = response.data.workNo;//座席id
               console.log(response.data,"电话信息！！！！");

                this.sign();
             }else{
               
             }
           }, err => {
             console.log(err);
           })
           .catch((error) => {
             console.log(error)
           })
         
      },
      //签入
      sign(){
          var that = this;
          console.log(cti) ;
            
          that.showmsg("【座席签入】操作步骤：==================================================");
          that.showmsg("第1步：请求接口以获取cti和reg服务器地址和端口。本demo调用getctiserver(callbackFunc)，getregserver(callbackFunc2)进行获取cti和reg服务器地址和端口。注：callbackFunc是回调方法");
          getctiserver(callbackFunc); //获取cti服务器地址和端口
          getregserver(callbackFunc2); //获取reg服务器地址和端口
           that.showmsg("第2步：在回调方法callbackFunc中调用CtiConnect()进行连接cti服务器,在callbackFunc2中调用initUA()进行注册分机");
          function callbackFunc() {//回调函数
                    cti.CtiConnect(cti_server, cti_port);//连接cti服务器
          };
          function callbackFunc2() {//回调函数
                    that.initUA();//注册分机
          };
          that.showmsg("第3步：cti连接成功后，进行CTIConnectedEvent事件通知，在CTIConnectedEvent里调用AgentLogin()进行座席登录cti");
          that.tsContent = "拨号中,请勿离开！";
          cti.CTIConnectedEvent = function () {//cti服务器连接成功事件
                that.showmsg("## CTIConnectedEvent");
                cti.AgentLogin(agentid, passWord, extension, compid); //登录到cti
                // that.exhaled();
        
          };
           that.showmsg("第4步：cti登录成功会进行EVENT_AgentStateChanged事件通知");
           that.showmsg("=================================================================");

          
      },
      //呼叫
      exhaled(){
         this.showmsg("【呼出】============================================================");
         this.showmsg("调用MakeCall()进行呼出。呼出请求发出后会进行EVENT_AgentStateChanged事件通知");
         var codeData = JSON.parse(cti.MakeCall(this.phone, 3, ''));

          console.log(codeData,444444);
         
            if(codeData.code != 1){
               this.tsContent = "拨号失败，请重新拨打！"; 
            }
            if(codeData.code == 1){
              // alert(333333)
              this.tsContent = "等待对方接通，请勿挂断！"; 
            }
         console.log(codeData.code == 1 ,2222222)
         this.showmsg("=================================================================");
      },
      //挂断电话
      hangPhone(){
         //迁出
         this.showmsg("【签出】============================================================");
         this.showmsg("调用AgentLogout()进行登出cti，然后调用CtiDisconnect()断开cti连接。登出及断开连接后会进行EVENT_AgentStateChanged和CTIDisConnectedEvent事件通知");
         cti.AgentLogout();
         cti.CtiDisconnect();//断开cti连接
        this.showmsg("=================================================================");
         var data = {
          id:this.id
         }
         axios.post("/phone-api-boot/public/phone/v1/updatePhone",data)
           .then(response => {
             if(response.status == 200){
                localStorage.setItem("phoneId","");
                Bus.$emit('gbCallPhoneTc', () => { //Hub接收事件
                 this.callPhoneStatus = false;
                });
                $(".callPhone_wrap").addClass('hide');
             }else{
               
             }
           }, err => {
             console.log(err);
           })
           .catch((error) => {
             console.log(error)
           })
      },
      //重播电话
      rebroadcastPhone(){
         this.showmsg("【签出】============================================================");
         this.showmsg("调用AgentLogout()进行登出cti，然后调用CtiDisconnect()断开cti连接。登出及断开连接后会进行EVENT_AgentStateChanged和CTIDisConnectedEvent事件通知");
         cti.AgentLogout();
         cti.CtiDisconnect();//断开cti连接
         this.showmsg("=================================================================");
         this.sign();
      },
      //重置电话
      resetPhone(){
         axios.post("/phone-api-boot/public/phone/v1/updateAll")
           .then(response => {
             if(response.status == 200){
              
        
             }else{
               
             }
           }, err => {
             console.log(err);
           })
           .catch((error) => {
             console.log(error)
           })
      },
      //定时器
      two_char(n) {
          return n >= 10 ? n : "0" + n;
      },
      //定时器
      time_fun() {
        var sec=0;
        var that = this;
       this.setIntervalTime = setInterval(function () {
            sec++;
            var date = new Date(0, 0)
            date.setSeconds(sec);
            var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
             that.tsContent = that.two_char(h) + ":" + that.two_char(m) + ":" + that.two_char(s);
            // document.getElementById("mytime").innerText = two_char(h) + ":" + two_char(m) + ":" + two_char(s);
        }, 1000);
      },
      SessionBindEvent(sess) {

          var that = this;
            sess.on('progress', function () {
            });
            sess.on('accepted', function (e) {
            });
            sess.on('rejected', function (response, cause) {
            });
            sess.on('failed', function (response, cause) {
                if (cause == "WebRTC Error") {
                    that.tsContent = "拨号失败，请重新拨打！";
                    alert('请正确连接耳麦设备');
                }
            });
            sess.on('terminated', function (message, cause) {
            });
            sess.on('cancel', function () { //对方取消
            });
            sess.on('bye', function (e) {
            });
        },
      //注册分机
      initUA() {
        var that = this;
        var configuration = {
                wsServers: ws_type + '://' + sip_server + ':' + sip_port + '/ws',
                uri: this.fjh + '@' + sip_server + ":" + sip_port,
                password: this.fjpsw,
                authorizationUser: this.fjh,
                iceCheckingTimeout: 1000,
                wsServerMaxReconnection: 2,
                wsServerReconnectionTimeout: 3,
                connectionrecoverymaxinterval: 3
            };
            console.info(configuration);
            if (ua != null) {
                ua.stop();
                ua = null;
            }
            ua = new SIP.UA(configuration);
            ua.on('registered', function (e) {
                that.siginStatus = true;
                // that.tsContent = "拨号中,请勿离开！";
                that.showmsg("## 分机注册成功");
                //拨打电话
                that.exhaled();
            });

            ua.on('unregistered', function (e) {
                that.siginStatus = false;
                 
                that.tsContent = "拨号失败，请重新拨打！";
                that.showmsg("## 分机注册失败");
            });

            ua.on('registrationFailed', function (e) {
                that.siginStatus = false;
                that.tsContent = "拨号失败，请重新拨打！"
                that.showmsg("## 分机注册失败");
            });
            ua.on('connected', function (e) {
            });
            ua.on('disconnected', function (e) {
            });
            ua.on('invite', function (incomingSession) { //coming call
                console.info(incomingSession);
                if (session != null) {
                    incomingSession.terminate();
                    return;
                }
                session = incomingSession;

                that.SessionBindEvent(session);

                session.accept({//应答
                    media: {
                        constraints: {
                            audio: true,
                            video: false
                        },
                        render: {
                            remote: remoteView,
                            local: selfView
                        }

                    }
                });

            });
        },
        //添加提示
      showmsg(msg) {
            $("#debuginfo").html($("#debuginfo").html()+"<br>[" + getNowFormatDate() + "]  " + msg);
        },
      registeredEvents(){
        var that = this;
        ///////////////////////////////////////////////////////////
        /// CTI 断开成功
        ///////////////////////////////////////////////////////////
        cti.CTIDisConnectedEvent = function () {
            that.showmsg("## CTIDisConnectedEvent");
        }
        ///////////////////////////////////////////////////////////
        ///注册事件：座席状态 变化
        ///////////////////////////////////////////////////////////
        cti.EVENT_AgentStateChanged = function (_agentid, agentstate, laststate, _compid) {
            that.showmsg("## EVENT_AgentStateChanged: " + "agentid= " + _agentid + ", agentstate = " + agentstate + ", laststate = " + laststate + ", compid = " + _compid);
            if (_agentid == agentid) {//过滤当前座席的状态
                switch (agentstate) {
                    case "0": //退出
                        {
                            $('#btnmakeidle,#btnhold,#btnunhold,#btnhangup,#btnlogout,#btnmakebusy,#btnreset,#btncall,#btntran,#btnmeeting,#btninsert,#btnhangup2,#btnlisten,#btnpickup,#btnrefer').attr('disabled', 'disabled');
                            $('#btnlogin').removeAttr('disabled');
                            $('#statedec').text('签出');

                        }
                        break;
                    case "1": //空闲
                        {
                            $('#btnlogin,#btnmakeidle,#btnhold,#btnunhold,#btnhangup,#btntran,#btnmeeting,#btnrefer').attr('disabled', 'disabled');
                            $('#btnlogout,#btnmakebusy,#btnreset,#btncall,#btninsert,#btnhangup2,#btnlisten,#btnpickup').removeAttr('disabled');
                            $('#statedec').text('置闲');
                             console.log("签入成功");
                        }
                        break;
                    case "2": //示忙
                        {
                            $('#btnmakebusy,#btnlogin, #btnhold, #btnunhold, #btnhangup,#btntran,#btnmeeting,#btnrefer').attr('disabled', 'disabled');
                            $('#btnlogout,#btnreset,#btncall,#btninsert,#btnhangup2,#btnlisten,#btnpickup,#btnmakeidle').removeAttr('disabled');
                            $('#statedec').text('置忙')
                        }
                        break;
                    case "4": //后处理
                        {
                            $('#btnhold,#btnunhold,#btnhangup,#btnlogout,#btnmakebusy,#btnreset,#btncall,#btntran,#btnmeeting,#btninsert,#btnhangup2,#btnlisten,#btnpickup,#btnrefer').attr('disabled', 'disabled');
                            $('#btnlogout,#btnmakeidle,#btnreset').removeAttr('disabled');
                            $('#statedec').text('后处理')
                        }
                        break;
                    case "7": //振铃
                    case "5": {
                        $('#btnhangup').removeAttr('disabled');
                        $('#statedec').text('振铃中')
                    }
                        break;
                    case "8": //通话成功
                        {
                            $('#btnhold,#btnhangup,#btnrefer').removeAttr('disabled');
                            $('#btnunhold').attr('disabled', 'disabled');
                            $('#statedec').text('通话中')
                        }
                        break;
                    case "9": //三方会议
                        {
                            $('#statedec').text('会议中')
                        }
                        break;
                    case "11": //咨询状态
                        {
                            $('#btnrefer').attr('disabled', 'disabled');
                            $('#btntran,#btnmeeting').removeAttr('disabled');
                            $('#statedec').text('咨询')
                        }
                        break;
                    case "12": //咨询挂断
                        {
                            $('#btntran,#btnmeeting').attr('disabled', 'disabled');
                            $('#btnrefer').removeAttr('disabled');
                            $('#statedec').text('通话中')
                        }
                        break;
                    case "13": //保持
                        {
                            $('#btnhold').attr('disabled', 'disabled');
                            $('#btnunhold').removeAttr('disabled');
                            $('#statedec').text('保持')
                        }
                        break;
                    case "15": //初始化
                        {
                        }
                        break;
                }
            }

        }
        ///////////////////////////////////////////////////////////
        ///注册事件：操作结果事件
        ///////////////////////////////////////////////////////////
        cti.EVENT_CMDRES = function (rescode, pbxrescode, res, actionid, taskid, calldata) {
            that.showmsg("@ 操作结果EVENT_CMDRES事件通知。");
            that.showmsg("## EVENT_CMDRES:rescode=" + rescode + ",pbxrescode=" + pbxrescode + ",res=" + res + ",actionid=" + actionid + ",taskid=" + taskid + ",calldata=" + calldata);
        }

        ///////////////////////////////////////////////////////////
        ///注册事件：座席通话或录音通知事件
        ///////////////////////////////////////////////////////////
        cti.EVENT_AgentAnswered = function (compid, agentid, callId, calltype, calleedevice, callerdevice, areacode, taskid, tasktype, filename, calldata) {

            // that.tsContent = "通话中，请勿离开！";
            //开启定时器
            that.time_fun();
            that.showmsg("@ 座席成功通话或有录音进行EVENT_AgentAnswered通知。");
            that.showmsg("## EVENT_AgentAnswered:compid=" + compid + ",agentid=" + agentid + ",callId=" + callId + ",calltype=" + calltype + ",calleedevice=" + calleedevice + ",callerdevice=" + callerdevice + ",areacode=" + areacode + ",taskid=" + taskid + ",tasktype=" + tasktype + ",filename=" + filename + ",calldata=" + calldata);
        }

        ///////////////////////////////////////////////////////////
        ///注册事件：座席振铃通知事件
        ///////////////////////////////////////////////////////////
        cti.EVENT_AgentRinging = function (compid, agentid, callId, calltype, calleedevice, callerdevice, areacode, taskid, tasktype, agentstate, laststate, calldata) {
            // that.tsContent = "拨号中,请勿离开！";
            that.showmsg("@ 座席振铃进行EVENT_AgentRinging通知。可在此事件中处理弹屏相关操作。");
            //可在此进行弹屏处理
            that.showmsg("## EVENT_AgentRinging:compid=" + compid + ",agentid=" + agentid + ",callId=" + callId + ",calltype=" + calltype + ",calleedevice=" + calleedevice + ",callerdevice=" + callerdevice + ",areacode=" + areacode + ",taskid=" + taskid + ",tasktype=" + tasktype + ",agentstate=" + agentstate + ",laststate=" + laststate + ",calldata=" + calldata);
        }

        ///////////////////////////////////////////////////////////
        ///注册事件：对方振铃通知事件
        ///////////////////////////////////////////////////////////
        cti.EVENT_OtherRinging = function (compid, agentid, callId, calltype, calleedevice, callerdevice, areacode, taskid, tasktype, calldata) {
            // that.tsContent = "拨号中,请勿离开！";
            that.showmsg("@ 对方振铃进行EVENT_OtherRinging通知。可在此事件中处理弹屏相关操作。");
            that.showmsg("## EVENT_OtherRinging:compid=" + compid + ",agentid=" + agentid + ",callId=" + callId + ",calltype=" + calltype + ",calleedevice=" + calleedevice + ",callerdevice=" + callerdevice + ",areacode=" + areacode + ",taskid=" + taskid + ",tasktype=" + tasktype + ",calldata=" + calldata);
            //可在此进行弹屏处理
            // window.open("Popup.htm?caller=" + calleedevice, "_blank", "left = 200,top=200,width = 500,height = 350,scrollbars=yes,toolbar=yes,menubar=yes,location=yes,resizable=no,status=yes");
        }
        ///////////////////////////////////////////////////////////
        ///注册事件：挂断通知事件
        ///////////////////////////////////////////////////////////
        cti.EVENT_HangupEvent = function (compid, agentid, callId, calldata) {
            session = null;
            window.clearInterval(that.setIntervalTime);
            that.tsContent = "本次通话结束，请点击挂断按钮，结束本次通话服务!";
            that.showmsg("@ 挂断进行EVENT_HangupEvent通知。");
            that.showmsg("## EVENT_HangupEvent:compid=" + compid + ",agentid=" + agentid + ",callId=" + callId + ",calldata=" + calldata);
        }
      }
       



        
    },
    components: {
     
    },
    computed: {
    
    }
     
      
}
</script>
<style scoped>

  .callPhone_wrap{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .callPhone_wrap_box_wrap{
     width: 100%;
  }
  #allmapone {
     width: 100%;
     height:500px;
     overflow: hidden;
     margin:0;
    
   }
  .callPhone_wrap_box{
    width: 290px;
    margin: 30vh auto;
    background: #fff;
    padding: 20px;
    position: relative;
    min-height: 190px;
  }
 .closCreatDiolag{
    font-size: 42px;
    right: 15px;
    top: 0;
    float:right;
  }
  

  .debuginfo{
    /*line-height: 100px;*/
    padding-top:40px;
    height:90px;
    font-size: 16px;
    overflow: scroll;
  /* border:1px solid red; */
    text-align: center;
  }
  .but_wrap_content{
    overflow: hidden;
  }
  .but_wrap{

    margin-top:10px;
    margin-bottom:10px;
    width:100px;
    height:35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid #2EAB3B;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    border-radius: 10px;
    color: #fff;
    background: #2EAB3B;
  }
  .but_left{
    margin-left:10px;
    float:left;
  }
  .but_right{
    margin-right:10px;
    float:right;
  }
</style>
