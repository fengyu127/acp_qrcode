var post_data = querystring.stringify({
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
});;
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
})
