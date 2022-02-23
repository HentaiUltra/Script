let obj = JSON.parse($response.body);
obj.value.vip = true;
obj.value.defaultRecognize.defaultNormal = -100;
obj.value.recognize.defaultBatch = -100;
obj.value.recognize.defaultTranslate = -100;
obj.value.recognize.recognizeTranslateAll = 1;
$done({ body: JSON.stringify(obj) });
