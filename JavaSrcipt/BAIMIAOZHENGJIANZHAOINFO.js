let obj = JSON.parse($response.body);
obj.value.vip = true;
obj.value.defaultRecognize.defaultNormal = -100;
obj.value.defaultRecognize.defaultBatch = -100;
obj.value.defaultRecognize.defaultTranslate = -100;
obj.value.defaultRecognize.recognizeTranslateAll = 1;
$done({ body: JSON.stringify(obj) });
