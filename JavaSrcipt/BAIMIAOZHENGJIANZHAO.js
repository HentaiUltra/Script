let obj = JSON.parse($response.body);
obj.value.vip = true;
obj.value.recognize.remainBatch = 999999999999;
obj.value.recognize.roles = ["VIP_USER"],
    obj.value.recognize.remainNormal = 999999999999;
obj.value.recognize.remainTranslate = 999999999999;
obj.value.recognize.recognizeTranslateAll = 999999999999;
$done({ body: JSON.stringify(obj) });
