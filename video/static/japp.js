$(function () {
    $.ajaxSetup({
        //url: ' https://api.salescomm.net:8015/Handler/agent.ashx',
        url:'https://api.salescomm.net:8015/Handler/agent.ashx',
        //url: 'http://192.168.70.52:1000/Handler/agent.ashx',
        type: 'POST',
        dataType: "jsonp",
        jsonp: "callbackparam",
    });
});


function getctiserver(callbackFunc) {
    $.ajax(
        {
            cache: false,
            async: false,//实际不起效，跨域请求不支持同步
            data: {
                'action': 'getCtiServer',
                'compid': compid,//企业id
                'agentid': agentid,//座席id
                'serverid': cti_serverid,
                'wstype': ws_type
            },
            success: function (re) {
                if (re.code == 1) {
                    cti_server = re.data.domain;
                    cti_port = re.data.port;
                    cti_serverid = re.data.serverid;
                    if ("function" == typeof (callbackFunc)){  
                        callbackFunc();//ajax请求后需要进行的操作放在回调函数callbackFunc()中  
                    }
                }
            },
            error: function (err) {
                alert('获取cti服务器失败：' + err);
            }
        })
};
function getregserver(callbackFunc2) {
    $.ajax(
        {
            cache: false,
            async: false,//实际不起效，跨域请求不支持同步
            data: {
                'action': 'getRegServer',
                'compid': compid,//企业id
                'agentid': agentid,//座席id
                'serverid': sip_serverid,
                'wstype': ws_type
            },
            success: function (re) {
                if (re.code == 1) {
                    sip_server = re.data.domain;
                    sip_port = re.data.port;
                    sip_serverid = re.data.serverid;
                    if ("function" == typeof (callbackFunc2)) {
                        callbackFunc2();//ajax请求后需要进行的操作放在回调函数callbackFunc2()中  
                    }
                }
            },
            error: function (err) {
                alert('获取reg服务器失败：' + err);
            }
        })
};

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var strDate = date.getDate();
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var strHours = date.getHours();
    if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
    }
    var strMinutes = date.getMinutes();
    if (strMinutes >= 0 && strMinutes <= 9) {
        strMinutes = "0" + strMinutes;
    }
    var strSeconds = date.getSeconds();
    if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
    }
    var strMillSeconds = date.getMilliseconds();
    if (strMillSeconds >= 0 && strMillSeconds <= 9) {
        strMillSeconds = "00" + strMillSeconds;
    }
    else if (strMillSeconds >= 10 && strMillSeconds <= 99) {
        strMillSeconds = "0" + strMillSeconds;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + strHours + seperator2 + strMinutes
        + seperator2 + strSeconds + "." + strMillSeconds;
    return currentdate;
}