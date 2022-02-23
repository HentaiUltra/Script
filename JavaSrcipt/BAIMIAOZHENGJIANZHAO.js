let obj = JSON.parse($response.body);
obj.value.vip = true;
obj.value.recognize.remainBatch = -100;
obj.value.recognize.remainNormal = -100;
obj.value.recognize.remainTranslate = -100;
obj.value.recognize.recognizeTranslateAll = 1;
$done({ body: JSON.stringify(obj) });
