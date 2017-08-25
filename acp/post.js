const querystring = require("querystring");
var post_data = {
    version:"5.1.0",
    encoding:"  UTF-8",
    signMethod:"01",
    txnType:"01",
    txnSubType:"07",
    bizType:"000000",
    channelType:"08",
    merId:"777290058110048",
    accessType:"0",
    orderId:"20170825150304",
    txnTime:"20170825150303",
    txnAmt:"323",
    currencyCode:"156",
};

function sorttoString(data) {
    var dict2 = "",
        keys = Object.keys(data).sort();
    for (var i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if(i<n-1){
        dict2=dict2+key+"="+data[key]+"&"
        }
        else
        {
            dict2=dict2+key+"="+data[key]
        }
    }
    return dict2;
}




console.log(sorttoString(post_data));
/*
var post_options = {
    host: 'https://gateway.test.95516.com',
    port: '80',
    path: '/gateway/api/backTransReq.do',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': post_data.length
    }
};

var post_req = http.request(post_options, function (response) {
    response.toString();
})*/
