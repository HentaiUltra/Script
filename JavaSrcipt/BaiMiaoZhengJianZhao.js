let obj = JSON.parse($response.body);
obj.value.vip = {
    "boughtType": "new",
    "boughtUnit": "year",
    "levelId": 2,
    "boughtTime": 1542095038,
    "boughtDuration": 10,
    "orderId": 97262,
    "operatorId": 0,
    "level": {
        "id": 2,
        "description": "",
        "recognizeTranslateAll": 1,
        "recognizeBatch": -100,
        "seq": 2,
        "recognizeTranslate": -100,
        "name": "黄金会员",
        "recognizeNormal": -100
    },
    "deadlineNotified": 0,
    "deadline": 1857714238,
    "boughtAmount": 25
}
obj.value.defaultRecognize.defaultBatch = -100;
obj.value.defaultRecognize.defaultTranslate = -100;
obj.value.defaultRecognize.recognizeTranslateAll = 1;
$done({ body: JSON.stringify(obj) });