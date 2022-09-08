const lk = new ToolKit(`京东助手`, `JdHelper`);
let html = lk.getResponseBody();
try {
  lk.log("开始处理");
  all();
} catch (e) {
  lk.logErr(e);
  lk.done({ body: html });
}

async function all() {
  if (html == undefined || !html.includes("</html>")) {
    lk.done({ body: html });
  } else {
    lk.log("开始解析");
    let url = lk.getRequestUrl();
    lk.log(`url:${url}`);
    let sku;
    let appType = "jd";
    let arr = [];
    if (url.includes("lite-in.m.jd.com")) {
      appType = "jsb";
    }
    if (url.includes("graphext/draw")) {
      arr = url.match(/sku=(\d+)/);
    }
    if (url.includes("/product/")) {
      arr = url.match(/\/.*\/(\d+)\.html/);
    }
    if (url.includes("/jxapp_detail/")) {
      arr = url.match(/sku=(\d+)&/);
      appType = "jx";
    }

    sku = arr.length != 0 ? arr[1] : "";

    lk.log(`解析完成:${sku}`);
    const jdHelperIsShowSmzdm = "jdHelperIsShowSmzdm";
    const jdHelperIsShowJf = "jdHelperIsShowJf";
    const jdHelperIsShowMmm = "jdHelperIsShowMmm";
    let rightOrLeft = `left`;
    let isShowSmzdm = !lk.getVal(jdHelperIsShowSmzdm) ? true : JSON.parse(lk.getVal(jdHelperIsShowSmzdm));
    let isShowJf = !lk.getVal(jdHelperIsShowJf) ? true : JSON.parse(lk.getVal(jdHelperIsShowJf));
    let isShowMmm = !lk.getVal(jdHelperIsShowMmm) ? true : JSON.parse(lk.getVal(jdHelperIsShowMmm));

    let leftCss = !lk.getVal("lkJdHelperLeftCss") ? "" : lk.getVal("lkJdHelperLeftCss");
    if (leftCss == "") {
      leftCss = `
        left: -5px;
        border-radius: 0 50px 50px 0;
        padding: 0 5px 0 5px;
        box-shadow: -2px 1px 8px #888888;`;
    }
    let rightCss = !lk.getVal("lkJdHelperRightCss") ? "" : lk.getVal("lkJdHelperRightCss");
    if (rightCss == "") {
      rightCss = `
        right: -5px;
        border-radius: 50px 0 0 50px;
        padding: 0 5px 0 5px;
        box-shadow: -2px 1px 8px #888888;`;
    }
    let smzdmCss = !lk.getVal("lkJdHelperSmzdmCss") ? "" : lk.getVal("lkJdHelperSmzdmCss");
    if (smzdmCss == "") {
      smzdmCss = `
        bottom: 213px;
        box-sizing: content-box;
        width: 30px;
        height: 30px;
        border: 0px solid rgba(255,255,255,0.8);
        background: #fff;
        background: url(https://pic.imgdb.cn/item/618fbff22ab3f51d916b872f.png) #fff no-repeat 11px/27px;`;
    }
    let jfCss = !lk.getVal("lkJdHelperJfCss") ? "" : lk.getVal("lkJdHelperJfCss");
    if (jfCss == "") {
      jfCss = `
        bottom: 250px;
        box-sizing: content-box;
        width: 30px;
        height: 30px;
        border: 0px solid rgba(255,255,255,0.8);
        background: #fff;
        background: url(https://pic.imgdb.cn/item/618fbf532ab3f51d916b50be.png) #fff no-repeat 11px/27px;`;
    }
    let mmmCss = !lk.getVal("lkJdHelperMmmCss") ? "" : lk.getVal("lkJdHelperMmmCss");
    if (mmmCss == "") {
      mmmCss = `
        bottom: 287px;
        box-sizing: content-box;
        width: 30px;
        height: 30px;
        border: 0px solid rgba(255,255,255,0.8);
        background: #fff;
        background: url(https://pic.imgdb.cn/item/618fd7352ab3f51d9173702d.png) #fff no-repeat 11px/27px;`;
    }
    lk.log("读取boxjs配置完成");
    let tools = !sku
      ? ``
      : `<button id="smzdm" class="sidebar ${rightOrLeft} ${isShowSmzdm ? "" : "hide"}"></button>
            <button id="jf" class="sidebar ${rightOrLeft} ${isShowJf ? "" : "hide"}"></button>
            <button id="mmm" class="sidebar ${rightOrLeft} ${isShowMmm ? "" : "hide"}"></button>`;
    lk.log("初始化工具栏完成");
    let jfConvertorResultUrl = `https://item.jd.com/${sku}.html`;
    //lk.log(JSON.stringify(options))
    lk.log("构建转链请求完成");
    lk.log("开始注入html");
    html =
      html.replace(/(<\/html>)/g, "") +
      `
                      <style>
                          html, body {
                              -webkit-user-select: auto !important;
                              user-select: auto !important;
                          }
                          .right {
                          ${rightCss}
                          }
                          .left {
                          ${leftCss}
                          }
                          .sidebar{
                              position: fixed;
                              z-index: 99999;
                          }
                          #sidebar img {
                              box-sizing: content-box;
                              width: 30px;
                              height: 30px;
                              padding: 0 20px 0 5px;
                              border:1px solid rgba(255,255,255,0.8);
                              background: #FFF;
                              border-radius: 50px 0 0 50px;
                          }
                          .hide {
                              display: none !important;
                          }
                          #alook {
                              bottom: 250px;
                          }
                          #yyb {
                              bottom: 217px;
                          }
                          #smzdm {
                          ${smzdmCss}
                          }
                          #jf {
                          ${jfCss}
                          }
                          #mmm {
                          ${mmmCss}
                          }
                      </style>
                      ${tools}
                      <script>
                          const jfConvertorResultUrl = "${jfConvertorResultUrl}"
                          const jfConvertorAppType = "${appType}"
                          const btn = document.querySelector('#smzdm')
                          btn.addEventListener('click',() => {
                              const input = document.createElement('input')
                              input.setAttribute('readonly', 'readonly')
                              input.setAttribute('value', '${jfConvertorResultUrl}')
                              // input.setAttribute('value', document.getElementsByTagName('head')[0].innerHTML)
                              document.body.appendChild(input)
                              input.setSelectionRange(0, input.value.length)
                              if (document.execCommand('copy')) {
                                  document.execCommand('copy')
                                  console.log('复制成功')
                              }
                              document.body.removeChild(input)
                              window.location.href='smzdm://'
                          })
                          const jfbtn = document.querySelector('#jf')
                          jfbtn.addEventListener('click',() => {
                              const input = document.createElement('input')
                              input.setAttribute('readonly', 'readonly')
                              input.setAttribute('value', '${jfConvertorResultUrl}')
                              // input.setAttribute('value', document.getElementsByTagName('head')[0].innerHTML)
                              document.body.appendChild(input)
                              input.setSelectionRange(0, input.value.length)
                              if (document.execCommand('copy')) {
                                  document.execCommand('copy')
                                  console.log('复制成功${jfConvertorResultUrl}')
                              }
                              document.body.removeChild(input)
                              window.location.href='com.jingdong.jxj://'
                              // switch (jfConvertorAppType) {
                              //   case 'jx':
                              //       var a = document.createElement('a');
                              //       a.setAttribute('href', "${jfConvertorResultUrl}");
                              //       a.setAttribute('target', '_self');
                              //       document.body.appendChild(a);
                              //       a.click();
                              //       document.body.removeChild(input)
                              //       window.location.href='openapp.jdpingou://virtual?params={"des":"m","url":"${jfConvertorResultUrl}","category":"jump"}'
                              //       break
                              //   case 'jsb':
                              //       window.location.href='openjdlite://virtual?params={"category":"jump","des":"m","url":"${jfConvertorResultUrl}"}'
                              //       break
                              //   default:
                              //       window.location.href='openApp.jdMobile://virtual?params={"category":"jump","des":"m","sourceValue":"babel-act","sourceType":"babel","url":"${jfConvertorResultUrl}"}'
                              //       break
                              // }
                          })
                          const mmmbtn = document.querySelector('#mmm')
                          mmmbtn.addEventListener('click',() => {
                              const input = document.createElement('input')
                              input.setAttribute('readonly', 'readonly')
                              input.setAttribute('value', '${jfConvertorResultUrl}')
                              // input.setAttribute('value', document.getElementsByTagName('head')[0].innerHTML)
                              document.body.appendChild(input)
                              input.setSelectionRange(0, input.value.length)
                              if (document.execCommand('copy')) {
                                  document.execCommand('copy')
                                  console.log('复制成功${jfConvertorResultUrl}')
                              }
                              document.body.removeChild(input)
                              window.location.href='manmanbuy://'
                          })
                          const script = document.createElement('script')
                          script.src = "https://cdn.bootcss.com/vConsole/3.2.0/vconsole.min.js"
                          // script.doneState = { loaded: true, complete: true};
                          script.onload = function() {
                              init()
                              console.log("初始化成功")
                          }
                          const jqueryScript = document.createElement('script')
                          jqueryScript.type = 'text/javascript'
                          jqueryScript.src = "https://libs.baidu.com/jquery/2.0.0/jquery.min.js"
                          // script.doneState = { loaded: true, complete: true};
                          jqueryScript.onload = function() {
                              console.log("加载jquery完成"+jfConvertorResultUrl)
                          }
                          document.getElementsByTagName('head')[0].appendChild(script);
                          document.getElementsByTagName('head')[0].appendChild(jqueryScript);
                          function init () {
                              window.vConsole = new VConsole()
                              setTimeout(() => {
                                  console.log(window.location.href)
                              })
                          }
                      </script>
                  </html>
                  `;
    lk.log("注入html完成");
    lk.done({ body: html });
  }
}
//ToolKit-start
function ToolKit(t, s, i) {
  return new (class {
    constructor(t, s, i) {
      this.tgEscapeCharMapping = { "&": "＆", "#": "＃" };
      this.userAgent = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0.2 Safari/605.1.15`;
      this.prefix = `lk`;
      this.name = t;
      this.id = s;
      this.data = null;
      this.dataFile = this.getRealPath(`${this.prefix}${this.id}.dat`);
      this.boxJsJsonFile = this.getRealPath(`${this.prefix}${this.id}.boxjs.json`);
      this.options = i;
      this.isExecComm = false;
      this.isEnableLog = this.getVal(`${this.prefix}IsEnableLog${this.id}`);
      this.isEnableLog = this.isEmpty(this.isEnableLog) ? true : JSON.parse(this.isEnableLog);
      this.isNotifyOnlyFail = this.getVal(`${this.prefix}NotifyOnlyFail${this.id}`);
      this.isNotifyOnlyFail = this.isEmpty(this.isNotifyOnlyFail) ? false : JSON.parse(this.isNotifyOnlyFail);
      this.isEnableTgNotify = this.getVal(`${this.prefix}IsEnableTgNotify${this.id}`);
      this.isEnableTgNotify = this.isEmpty(this.isEnableTgNotify) ? false : JSON.parse(this.isEnableTgNotify);
      this.tgNotifyUrl = this.getVal(`${this.prefix}TgNotifyUrl${this.id}`);
      this.isEnableTgNotify = this.isEnableTgNotify ? !this.isEmpty(this.tgNotifyUrl) : this.isEnableTgNotify;
      this.costTotalStringKey = `${this.prefix}CostTotalString${this.id}`;
      this.costTotalString = this.getVal(this.costTotalStringKey);
      this.costTotalString = this.isEmpty(this.costTotalString) ? `0,0` : this.costTotalString.replace('"', "");
      this.costTotalMs = this.costTotalString.split(",")[0];
      this.execCount = this.costTotalString.split(",")[1];
      this.costTotalMs = this.isEmpty(this.costTotalMs) ? 0 : parseInt(this.costTotalMs);
      this.execCount = this.isEmpty(this.execCount) ? 0 : parseInt(this.execCount);
      this.logSeparator = "\n██";
      this.startTime = new Date().getTime();
      this.node = (() => {
        if (this.isNode()) {
          const t = require("request");
          return { request: t };
        } else {
          return null;
        }
      })();
      this.execStatus = true;
      this.notifyInfo = [];
      this.log(`${this.name}, 开始执行!`);
      this.execComm();
    }
    getRealPath(t) {
      if (this.isNode()) {
        let s = process.argv.slice(1, 2)[0].split("/");
        s[s.length - 1] = t;
        return s.join("/");
      }
      return t;
    }
    async execComm() {
      if (this.isNode()) {
        this.comm = process.argv.slice(1);
        let t = false;
        if (this.comm[1] == "p") {
          this.isExecComm = true;
          this.log(`开始执行指令【${this.comm[1]}】=> 发送到手机测试脚本！`);
          if (this.isEmpty(this.options) || this.isEmpty(this.options.httpApi)) {
            this.log(`未设置options，使用默认值`);
            if (this.isEmpty(this.options)) {
              this.options = {};
            }
            this.options.httpApi = `ffff@10.0.0.9:6166`;
          } else {
            if (!/.*?@.*?:[0-9]+/.test(this.options.httpApi)) {
              t = true;
              this.log(`❌httpApi格式错误！格式：ffff@3.3.3.18:6166`);
              this.done();
            }
          }
          if (!t) {
            await this.callApi(this.comm[2]);
          }
        }
      }
    }
    callApi(t) {
      let s = this.comm[0];
      this.log(`获取【${s}】内容传给手机`);
      let i = "";
      this.fs = this.fs ? this.fs : require("fs");
      this.path = this.path ? this.path : require("path");
      const e = this.path.resolve(s);
      const h = this.path.resolve(process.cwd(), s);
      const o = this.fs.existsSync(e);
      const r = !o && this.fs.existsSync(h);
      if (o || r) {
        const t = o ? e : h;
        try {
          i = this.fs.readFileSync(t);
        } catch (t) {
          i = "";
        }
      } else {
        i = "";
      }
      let n = {
        url: `http://${this.options.httpApi.split("@")[1]}/v1/scripting/evaluate`,
        headers: { "X-Key": `${this.options.httpApi.split("@")[0]}` },
        body: { script_text: `${i}`, mock_type: "cron", timeout: !this.isEmpty(t) && t > 5 ? t : 5 },
        json: true,
      };
      this.post(n, (t, i, e) => {
        this.log(`已将脚本【${s}】发给手机！`);
        this.done();
      });
    }
    getCallerFileNameAndLine() {
      let t;
      try {
        throw Error("");
      } catch (s) {
        t = s;
      }
      const s = t.stack;
      const i = s.split("\n");
      let e = 1;
      if (e !== 0) {
        const t = i[e];
        this.path = this.path ? this.path : require("path");
        return `[${t.substring(t.lastIndexOf(this.path.sep) + 1, t.lastIndexOf(":"))}]`;
      } else {
        return "[-]";
      }
    }
    getFunName(t) {
      var s = t.toString();
      s = s.substr("function ".length);
      s = s.substr(0, s.indexOf("("));
      return s;
    }
    boxJsJsonBuilder(t, s) {
      if (this.isNode()) {
        this.log("using node");
        let i = ["keys", "settings"];
        const e = "https://raw.githubusercontent.com/Orz-3";
        let h = {};
        let o = this.isEmpty(s["script_url"]) ? "script_url" : s["script_url"];
        h.id = `${this.prefix}${this.id}`;
        h.name = this.name;
        h.desc_html = `⚠️使用说明</br>详情【<a href='${o}?raw=true'><font class='red--text'>点我查看</font></a>】`;
        h.icons = [
          `${e}/mini/master/${this.id.toLocaleLowerCase()}.png`,
          `${e}/task/master/${this.id.toLocaleLowerCase()}.png`,
        ];
        h.keys = [];
        h.settings = [
          {
            id: `${this.prefix}IsEnableLog${this.id}`,
            name: "开启/关闭日志",
            val: true,
            type: "boolean",
            desc: "默认开启",
          },
          {
            id: `${this.prefix}NotifyOnlyFail${this.id}`,
            name: "只当执行失败才通知",
            val: false,
            type: "boolean",
            desc: "默认关闭",
          },
          {
            id: `${this.prefix}IsEnableTgNotify${this.id}`,
            name: "开启/关闭Telegram通知",
            val: false,
            type: "boolean",
            desc: "默认关闭",
          },
          {
            id: `${this.prefix}TgNotifyUrl${this.id}`,
            name: "Telegram通知地址",
            val: "",
            type: "text",
            desc: "Tg的通知地址，如：https://api.telegram.org/bot-token/sendMessage?chat_id=-100140&parse_mode=Markdown&text=",
          },
        ];
        h.author = "@lowking";
        h.repo = "https://github.com/lowking/Scripts";
        h.script = `${o}?raw=true`;
        if (!this.isEmpty(t)) {
          for (let s in i) {
            let e = i[s];
            if (!this.isEmpty(t[e])) {
              h[e] = h[e].concat(t[e]);
            }
            delete t[e];
          }
        }
        Object.assign(h, t);
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const t = this.path.resolve(this.boxJsJsonFile);
          const s = this.path.resolve(process.cwd(), this.boxJsJsonFile);
          const i = this.fs.existsSync(t);
          const e = !i && this.fs.existsSync(s);
          const o = JSON.stringify(h, null, "\t");
          if (i) {
            this.fs.writeFileSync(t, o);
          } else if (e) {
            this.fs.writeFileSync(s, o);
          } else {
            this.fs.writeFileSync(t, o);
          }
        }
      }
    }
    appendNotifyInfo(t, s) {
      if (s == 1) {
        this.notifyInfo = t;
      } else {
        this.notifyInfo.push(t);
      }
    }
    prependNotifyInfo(t) {
      this.notifyInfo.splice(0, 0, t);
    }
    execFail() {
      this.execStatus = false;
    }
    isRequest() {
      return typeof $request != "undefined";
    }
    isSurge() {
      return typeof $httpClient != "undefined";
    }
    isQuanX() {
      return typeof $task != "undefined";
    }
    isLoon() {
      return typeof $loon != "undefined";
    }
    isJSBox() {
      return typeof $app != "undefined" && typeof $http != "undefined";
    }
    isNode() {
      return typeof require == "function" && !this.isJSBox();
    }
    sleep(t) {
      return new Promise((s) => setTimeout(s, t));
    }
    log(t) {
      if (this.isEnableLog) console.log(`${this.logSeparator}${t}`);
    }
    logErr(t) {
      this.execStatus = true;
      if (this.isEnableLog) {
        console.log(`${this.logSeparator}${this.name}执行异常:`);
        console.log(t);
        console.log(`\n${t.message}`);
      }
    }
    msg(t, s, i, e) {
      if (!this.isRequest() && this.isNotifyOnlyFail && this.execStatus) {
      } else {
        if (this.isEmpty(s)) {
          if (Array.isArray(this.notifyInfo)) {
            s = this.notifyInfo.join("\n");
          } else {
            s = this.notifyInfo;
          }
        }
        if (!this.isEmpty(s)) {
          if (this.isEnableTgNotify) {
            this.log(`${this.name}Tg通知开始`);
            for (let t in this.tgEscapeCharMapping) {
              if (!this.tgEscapeCharMapping.hasOwnProperty(t)) {
                continue;
              }
              s = s.replace(t, this.tgEscapeCharMapping[t]);
            }
            this.get({ url: encodeURI(`${this.tgNotifyUrl}📌${this.name}\n${s}`) }, (t, s, i) => {
              this.log(`Tg通知完毕`);
            });
          } else {
            let h = {};
            const o = !this.isEmpty(i);
            const r = !this.isEmpty(e);
            if (this.isSurge()) {
              if (o) h["url"] = i;
              $notification.post(this.name, t, s, h);
            }
            if (this.isNode()) this.log("⭐️" + this.name + t + s);
            if (this.isJSBox()) $push.schedule({ title: this.name, body: t ? t + "\n" + s : s });
          }
        }
      }
    }
    getVal(t) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(t);
      } else if (this.isQuanX()) {
        return $prefs.valueForKey(t);
      } else if (this.isNode()) {
        this.data = this.loadData();
        return this.data[t];
      } else {
        return (this.data && this.data[t]) || null;
      }
    }
    setVal(t, s) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(s, t);
      } else if (this.isQuanX()) {
        return $prefs.setValueForKey(s, t);
      } else if (this.isNode()) {
        this.data = this.loadData();
        this.data[t] = s;
        this.writeData();
        return true;
      } else {
        return (this.data && this.data[t]) || null;
      }
    }
    loadData() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const s = this.path.resolve(process.cwd(), this.dataFile);
        const i = this.fs.existsSync(t);
        const e = !i && this.fs.existsSync(s);
        if (i || e) {
          const e = i ? t : s;
          try {
            return JSON.parse(this.fs.readFileSync(e));
          } catch (t) {
            return {};
          }
        } else return {};
      } else return {};
    }
    writeData() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const s = this.path.resolve(process.cwd(), this.dataFile);
        const i = this.fs.existsSync(t);
        const e = !i && this.fs.existsSync(s);
        const h = JSON.stringify(this.data);
        if (i) {
          this.fs.writeFileSync(t, h);
        } else if (e) {
          this.fs.writeFileSync(s, h);
        } else {
          this.fs.writeFileSync(t, h);
        }
      }
    }
    adapterStatus(t) {
      if (t) {
        if (t.status) {
          t["statusCode"] = t.status;
        } else if (t.statusCode) {
          t["status"] = t.statusCode;
        }
      }
      return t;
    }
    get(t, s = () => {}) {
      if (this.isQuanX()) {
        if (typeof t == "string") t = { url: t };
        t["method"] = "GET";
        $task.fetch(t).then(
          (t) => {
            s(null, this.adapterStatus(t), t.body);
          },
          (t) => s(t.error, null, null)
        );
      }
      if (this.isSurge())
        $httpClient.get(t, (t, i, e) => {
          s(t, this.adapterStatus(i), e);
        });
      if (this.isNode()) {
        this.node.request(t, (t, i, e) => {
          s(t, this.adapterStatus(i), e);
        });
      }
      if (this.isJSBox()) {
        if (typeof t == "string") t = { url: t };
        t["header"] = t["headers"];
        t["handler"] = function (t) {
          let i = t.error;
          if (i) i = JSON.stringify(t.error);
          let e = t.data;
          if (typeof e == "object") e = JSON.stringify(t.data);
          s(i, this.adapterStatus(t.response), e);
        };
        $http.get(t);
      }
    }
    post(t, s = () => {}) {
      if (this.isQuanX()) {
        if (typeof t == "string") t = { url: t };
        t["method"] = "POST";
        $task.fetch(t).then(
          (t) => {
            s(null, this.adapterStatus(t), t.body);
          },
          (t) => s(t.error, null, null)
        );
      }
      if (this.isSurge()) {
        $httpClient.post(t, (t, i, e) => {
          s(t, this.adapterStatus(i), e);
        });
      }
      if (this.isNode()) {
        this.node.request.post(t, (t, i, e) => {
          s(t, this.adapterStatus(i), e);
        });
      }
      if (this.isJSBox()) {
        if (typeof t == "string") t = { url: t };
        t["header"] = t["headers"];
        t["handler"] = function (t) {
          let i = t.error;
          if (i) i = JSON.stringify(t.error);
          let e = t.data;
          if (typeof e == "object") e = JSON.stringify(t.data);
          s(i, this.adapterStatus(t.response), e);
        };
        $http.post(t);
      }
    }
    costTime() {
      let t = `${this.name}执行完毕！`;
      if (this.isNode() && this.isExecComm) {
        t = `指令【${this.comm[1]}】执行完毕！`;
      }
      const s = new Date().getTime();
      const i = s - this.startTime;
      const e = i / 1e3;
      this.execCount++;
      this.costTotalMs += i;
      this.log(
        `${t}耗时【${e}】秒\n总共执行【${this.execCount}】次，平均耗时【${(
          this.costTotalMs /
          this.execCount /
          1e3
        ).toFixed(4)}】秒`
      );
      this.setVal(this.costTotalStringKey, JSON.stringify(`${this.costTotalMs},${this.execCount}`));
    }
    done(t = {}) {
      this.costTime();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(t);
      }
    }
    getRequestUrl() {
      return $request.url;
    }
    getResponseBody() {
      return $response.body;
    }
    isGetCookie(t) {
      return !!($request.method != "OPTIONS" && this.getRequestUrl().match(t));
    }
    isEmpty(t) {
      return typeof t == "undefined" || t == null || t == "" || t == "null" || t == "undefined" || t.length === 0;
    }
    randomString(t) {
      t = t || 32;
      var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
      var i = s.length;
      var e = "";
      for (let h = 0; h < t; h++) {
        e += s.charAt(Math.floor(Math.random() * i));
      }
      return e;
    }
    autoComplete(t, s, i, e, h, o, r, n, a, l) {
      t += ``;
      if (t.length < h) {
        while (t.length < h) {
          if (o == 0) {
            t += e;
          } else {
            t = e + t;
          }
        }
      }
      if (r) {
        let s = ``;
        for (var f = 0; f < n; f++) {
          s += l;
        }
        t = t.substring(0, a) + s + t.substring(n + a);
      }
      t = s + t + i;
      return this.toDBC(t);
    }
    customReplace(t, s, i, e) {
      try {
        if (this.isEmpty(i)) {
          i = "#{";
        }
        if (this.isEmpty(e)) {
          e = "}";
        }
        for (let h in s) {
          t = t.replace(`${i}${h}${e}`, s[h]);
        }
      } catch (t) {
        this.logErr(t);
      }
      return t;
    }
    toDBC(t) {
      var s = "";
      for (var i = 0; i < t.length; i++) {
        if (t.charCodeAt(i) == 32) {
          s = s + String.fromCharCode(12288);
        } else if (t.charCodeAt(i) < 127) {
          s = s + String.fromCharCode(t.charCodeAt(i) + 65248);
        }
      }
      return s;
    }
    hash(t) {
      let s = 0,
        i,
        e;
      for (i = 0; i < t.length; i++) {
        e = t.charCodeAt(i);
        s = (s << 5) - s + e;
        s |= 0;
      }
      return String(s);
    }
  })(t, s, i);
}
//ToolKit-end
