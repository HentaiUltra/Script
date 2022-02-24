let obj = JSON.parse($response.body);
obj.value.levels.recognizeNormal = 1;
obj.value.levels.recognizeBatch = -100;
obj.value.levels.seq = 3;
obj.value.levels.name = '黄金会员';
obj.value.levels.recognizeTranslateAll = 1;
$done({ body: JSON.stringify(obj) });