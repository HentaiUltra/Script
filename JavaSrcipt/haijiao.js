let body = $response.body;
let obj = JSON.parse(body);
obj.data.type = 0;

for (let a in obj.data.attachments) {
  if (obj.data.attachments[a].coverUrl) {
    let id = obj.data.attachments[a].id;
    let url = obj.data.attachments[a].remoteUrl;
    let aa = "/" + id + "_i";
    url = url.replace(/\/\d+_i_preview/, aa);
    obj.data.attachments[a].remoteUrl = url;
  }
}

$done({ body: JSON.stringify(obj) });
