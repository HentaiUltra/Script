let obj = JSON.parse($response.body);
obj.value.vip = true;
obj.level = JSON.stringify({
    "id": 2,
    "recognizeTranslateAll": 1,
    "recognizeBatch": -100,
    "seq": 2,
    "recognizeTranslate": -100,
    "name": "黄金会员",
    "recognizeNormal": -100
}),
    obj.value.defaultRecognize.defaultBatch = -100;
obj.value.defaultRecognize.defaultTranslate = -100;
obj.value.defaultRecognize.recognizeTranslateAll = 1;
$done({ body: JSON.stringify(obj) });