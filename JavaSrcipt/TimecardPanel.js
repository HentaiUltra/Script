var V = [
  //公历
  { date: "0101", name: "元旦节" },
  { date: "0214", name: "情人节" },
  { date: "0308", name: "妇女节" },
  { date: "0312", name: "植树节" },
  { date: "0401", name: "愚人节" },
  { date: "0501", name: "劳动节" },
  { date: "0504", name: "青年节" },
  { date: "0601", name: "儿童节" },
  { date: "0701", name: "建党节" },
  { date: "0801", name: "建军节" },
  { date: "0910", name: "教师节" },
  { date: "1001", name: "国庆节" },
  { date: "1111", name: "光棍节" },
  { date: "1224", name: "平安夜" },
  { date: "1225", name: "圣诞节" },
];
var T = [
  //农历
  { date: "0101", name: "春节" },
  { date: "0115", name: "元宵节" },
  { date: "0405", name: "清明节" },
  { date: "0505", name: "端午节" },
  { date: "0707", name: "七夕节" },
  { date: "0815", name: "中秋节" },
  { date: "0909", name: "重阳节" },
  { date: "1001", name: "老婆生日" },
  { date: "1208", name: "腊八节" },
  { date: "1230", name: "除夕" },
];

const lunarYears = [
  0x04bd8,
  // 1901-2000
  0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250,
  0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60,
  0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x16a95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355,
  0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260,
  0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0,
  0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970,
  0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960,
  // 2001-2100
  0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50,
  0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0,
  0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, 0x14b63, 0x09370, 0x049f8,
  0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, 0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50,
  0x05d55, 0x056a0, 0x0a6d0, 0x055d4, 0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0,
  0x052b0, 0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, 0x0e968, 0x0d520,
  0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, 0x0d520,
];

// ['月','正','一','二','三','四','五','六','七','八','九','十','冬','腊'];
const ChinaMonths = [
  "\u6708",
  "\u6b63",
  "\u4e8c",
  "\u4e09",
  "\u56db",
  "\u4e94",
  "\u516d",
  "\u4e03",
  "\u516b",
  "\u4e5d",
  "\u5341",
  "\u51ac",
  "\u814a",
];
// ['日','一','二','三','四','五','六','七','八','九','十']
const ChinaDay = [
  "\u65e5",
  "\u4e00",
  "\u4e8c",
  "\u4e09",
  "\u56db",
  "\u4e94",
  "\u516d",
  "\u4e03",
  "\u516b",
  "\u4e5d",
  "\u5341",
];
// ['初','十','廿','卅','闰']
const ChinaElement = ["\u521d", "\u5341", "\u5eff", "\u5345", "\u95f0"];

// 农历日中文显示，参数日期day
const toChinaDay = function (day) {
  let str = "";
  switch (day) {
    case 10:
      str = "\u521d\u5341";
      break; // "初十"
    case 20:
      str = "\u5eff\u5341";
      break; // "廿十"
    case 30:
      str = "\u5345\u5341";
      break; // "卅十"
    default:
      str = ChinaElement[Math.floor(day / 10)] + ChinaDay[day % 10];
  }
  return str;
};
// 农历月初一中文月显示（如农历二月初一 -> 二月，农历闰四月初一 ->闰四月）
const toChinaMonth = function (month, isLeap) {
  isLeap = isLeap || false;
  return isLeap ? ChinaElement[4] + ChinaMonths[month] + ChinaMonths[0] : ChinaMonths[month] + ChinaMonths[0];
};

const nowInfo = function () {
  let now = new Date();
  return {
    y: now.getFullYear(),
    m: now.getMonth() + 1,
    d: now.getDate(),
  };
};
// 某年农历闰月月份
const leapMonth = function (year) {
  year = year || nowInfo().y;
  return lunarYears[year - 1900] & 0xf;
};
// 某年农历闰月天数
const leapDays = function (year) {
  year = year || nowInfo().y;
  if (leapMonth(year)) {
    return lunarYears[year - 1900] & 0x10000 ? 30 : 29;
  }
  return 0;
};
// 某年份农历各月天数
const lunarMonthDays = function (year) {
  year = year || nowInfo().y;
  let lunarYear = lunarYears[year - 1900];
  let monthDays = [];
  for (let i = 4; i < 16; i++) {
    let monthDay = (lunarYear >> i) & 0x1 ? 30 : 29;
    monthDays.push(monthDay);
  }
  monthDays.reverse();
  // 添加闰月
  let leapM = leapMonth(year);
  if (leapM) monthDays.splice(leapM, 0, leapDays(year));
  return monthDays;
};
// 某年农历天数
const lunarYearDays = function (year) {
  year = year || nowInfo().y;
  let num = 0;
  lunarMonthDays(year).forEach((item) => {
    num += item;
  });
  return num;
};

const solarToLunar = function (y, m, d) {
  if (y < 1901 || y > 2100) return -1;
  let date;
  if (!y) {
    date = new Date();
  } else {
    date = new Date(y, m - 1, d);
  }

  // 参照日期 1901-02-19 正月初一
  let offset = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(1901, 1, 19)) / 86400000;
  let temp = 0,
    i;
  for (i = 1901; i < 2101 && offset > 0; i++) {
    temp = lunarYearDays(i);
    offset -= temp;
  }
  if (offset < 0) {
    offset += temp;
    i--;
  }

  // 农历年、月、日
  let isLeap = false,
    j;
  let monthDays = lunarMonthDays(i);
  let leapM = leapMonth(i);

  if (offset > 0) {
    for (j = 0; j < monthDays.length && offset > 0; j++) {
      temp = monthDays[j];
      offset -= temp;
    }
    if (offset == 0) {
      j++;
    }
    if (offset < 0) {
      offset += temp;
    }
  } else {
    // 补偿公历1901年2月的农历信息
    if (offset == -23) {
      return {
        lunarY: i,
        lunarM: 12,
        lunarD: 8,
        isLeap: false,
      };
    }
  }

  // 矫正闰年月
  if (leapM) {
    if (j == leapM + 1) {
      isLeap = true;
    }
    if (j >= leapM + 1) {
      j--;
    }
  }

  return {
    lunarY: i,
    lunarM: j,
    lunarD: ++offset,
    isLeap: isLeap,
  };
};

function recently(V, T) {
  (V = V || []), (T = T || []), (result = {});
  V.sort(function (a, b) {
    return a.date < b.date ? -1 : 1;
  }); //按date大小升序排列
  T.sort(function (a, b) {
    return a.date < b.date ? -1 : 1;
  }); //按date大小升序排列
  var D = new Date(),
    y = D.getFullYear(),
    m = D.getMonth() + 1,
    d = D.getDate();

  //获取最近的公历节日
  var n = ("0" + m).slice(-2) + ("0" + d).slice(-2),
    k = 0;
  for (var i in V) n * 1 > V[i].date * 1 && k++;
  k = k >= V.length ? 0 : k;
  result.gl = V.slice(k).shift();

  //获取最近的农历节日
  var nl = solarToLunar(y, m, d);
  (n = ("0" + nl.lunarM).slice(-2) + ("0" + nl.lunarD).slice(-2)), (k = 0);
  for (var i in T) n * 1 > T[i].date * 1 && k++;
  k = k >= V.length ? 0 : k;
  result.nl = T.slice(k).shift();
  return result;
}
var o = recently(V, T);
function insertStr(source, start, newStr) {
  return source.slice(0, start) + newStr + source.slice(start);
}
function monthDayDiff(date, type) {
  var now = new Date();
  var year = now.getFullYear().toString(); //得到年份
  var month = now.getMonth() + 1 > 10 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1); //得到月份
  var day = now.getDate() > 10 ? now.getDate() : "0" + now.getDate(); //得到日期
  if (type === "nl") {
    var nl = solarToLunar(year, month, day);
    n = ("0" + nl.lunarM).slice(-2) + ("0" + nl.lunarD).slice(-2);
    var d1 = insertStr(year, 4, "/") + insertStr(n, 2, "/");
    var d2 = insertStr(year, 4, "/") + insertStr(date, 2, "/");
    var s1 = new Date(d1);
    var s2 = new Date(d2);
    var time = s2.getTime() - s1.getTime();
    var days = parseInt(time / (1000 * 60 * 60 * 24));
    return days;
  } else {
    var d1 = year + "/" + month + "/" + day;
    var d2 = insertStr(year, 4, "/") + insertStr(date, 2, "/");
    var s1 = new Date(d1);
    var s2 = new Date(d2);
    var time = s2.getTime() - s1.getTime();
    var days = parseInt(time / (1000 * 60 * 60 * 24));
    return days;
  }
}
//如果是0天，发送emoji;
function today(day, name, type) {
  if (day === 0) {
    dateNotice(name, type);
    return "🎉";
  } else {
    return day + "天";
  }
}
//提醒日当天发送通知
function dateNotice(name, type) {
  let now = new Date();
  if (
    $persistentStore.read(type === "nl" ? "lunarCalendarPushed" : "gregorianCalendarPushed") !== name &&
    now.getHours() >= 6
  ) {
    $persistentStore.write(name, type === "nl" ? "lunarCalendarPushed" : "gregorianCalendarPushed");
    $notification.post("假日祝福", "", "今天是" + type === "nl" ? "农历节日:" : "" + name + "   🎉🎉🎉!");
  }
}
//>图标依次切换电池
function icon_now(num) {
  if (num <= 7 && num > 5) {
    return ["battery.25", "#f2ce2b"];
  } else if (num <= 5 && num > 3) {
    return ["battery.50", "#1f2623"];
  } else if (num <= 3 && num > 0) {
    return ["battery.75", "#579572"];
  } else if (num == 0) {
    return ["battery.100.bolt", "#41b349"];
  } else {
    return ["battery.0", "#ee2746"];
  }
}
function title_random(num) {
  let r = Math.floor(Math.random() * 10 + 1);
  let dic = {
    1: "𝑯𝒂𝒑𝒑𝒚 𝑽𝒂𝒍𝒆𝒏𝒕𝒊𝒏𝒆'𝒔 𝑫𝒂𝒚",
    2: "𝑨𝒏𝒅 𝒚𝒐𝒖 ︎",
    3: "𝙝𝙖𝙫𝙚 𝙖 𝙣𝙞𝙘𝙚 𝙙𝙖𝙮 𖠚ᐝ",
    4: "︎ ʜᴀ͟ᴘ͟ᴘ͟ʏ ᴇᴠᴇʀʏᴅᴀʏ̆̈ ᴛᴏ ᴍᴇ◟̆◞̆",
    5: " ≀𝓼𝔀𝓮𝓮𝓽𝓼≀",
    6: " ᴿᴬᴵᴺᴮᴼᵂ ᴬᴸᴸᴮᵁᴮᴮᴸᴱ ᴮᴬᴮᴱ",
    7: "𐂂 ☾˚‧º· ʜᴀ͟ᴘ͟ᴘ͟ʏᴇᴠᴇʀʏᴅᴀʏ̆̈",
    8: "𝙝𝙖𝙫𝙚 𝙖 𝙣𝙞𝙘𝙚 𝙙𝙖𝙮 𖠚ᐝ",
    9: "(ノへ￣、)",
    10: "(✪ω✪)",
  };
  return num == 0 ? "𝗛𝗮𝗽𝗽𝘆 𝗵𝗼𝗹𝗶𝗱𝗮𝘆𝘀 𝗮𝗻𝗱 𝗮𝗹𝗹 𝘁𝗵𝗲 𝗯𝗲𝘀𝘁 𖠚ᐝ" : dic[r];
}

$done({
  title: title_random(monthDayDiff(o.nl.date , "nl") > 0 ? monthDayDiff(o.gl.date, "gl") : monthDayDiff(o.nl.date , "nl")),
  icon: icon_now(monthDayDiff(o.nl.date , "nl") > 0 ? monthDayDiff(o.gl.date, "gl") : monthDayDiff(o.nl.date , "nl"))[0],
  "icon-color": icon_now(monthDayDiff(o.nl.date , "nl") > 0 ? monthDayDiff(o.gl.date, "gl") : monthDayDiff(o.nl.date , "nl"))[1],
  content:
    o.gl.name +
    ":" +
    today(monthDayDiff(o.gl.date, "gl"), o.gl.name, "gl") +
    "|" +
    o.nl.name +
    ":" +
    today(monthDayDiff(o.nl.date, "nl"), o.nl.name, "nl"),
});
