let V = [
  //公历
  { date: "0101", name: "元旦节" },
  { date: "0104", name: "儿子生日" },
  { date: "0214", name: "情人节" },
  { date: "0308", name: "妇女节" },
  { date: "0312", name: "植树节" },
  { date: "0322", name: "女儿生日" },
  { date: "0401", name: "愚人节" },
  { date: "0405", name: "清明节" },
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
let T = [
  //农历
  { date: "0101", name: "春节" },
  { date: "0115", name: "元宵节" },
  { date: "0505", name: "端午节" },
  { date: "0707", name: "七夕节" },
  { date: "0815", name: "中秋节" },
  { date: "1001", name: "老婆生日" },
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



// 农历月初一中文月显示（如农历二月初一 -> 二月，农历闰四月初一 ->闰四月）
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
const solarToLunar = (y, m, d) => {
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
    if (offset === 0) {
      j++;
    }
    if (offset < 0) {
      offset += temp;
    }
  } else {
    // 补偿公历1901年2月的农历信息
    if (offset === -23) {
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
    if (j === leapM + 1) {
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

let firstMoonDay = solarToLunar(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());

const toChinaYear = function () {
  let str = new Date().getFullYear();
  let chinese=['〇','一','二','三','四','五','六','七','八','九','十'];
  let numStr=str.replace(/[^0-9]+/g, '');
  return chinese[numStr[0]] + chinese[numStr[1]] + chinese[numStr[2]] + chinese[numStr[3]]
}

const toChinaMonth = function() {
  let curY = firstMoonDay.lunarY;
  let curM = firstMoonDay.lunarM;
  // 判断当前是否为闰年闰月
  let leap_m = leapMonth(curY);
  let isLeap = false;
  if(leap_m === curM) {
    isLeap = true;
  }
  return isLeap ? (ChinaElement[4] + ChinaMonths[new Date().getMonth()] + ChinaMonths[0]) : (ChinaMonths[new Date().getMonth()] + ChinaMonths[0]);
}


// 农历日中文显示，参数日期day
const toChinaDay = function () {
  let day = firstMoonDay.lunarD;
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


function recently(V, T) {
  (V = V || []), (T = T || []), (result = {});
  V.sort(function (a, b) {
    return a.date < b.date ? -1 : 1;
  }); //按date大小升序排列
  T.sort(function (a, b) {
    return a.date < b.date ? -1 : 1;
  }); //按date大小升序排列
  let D = new Date(),
    y = D.getFullYear(),
    m = D.getMonth() + 1,
    d = D.getDate();

  //获取最近的公历节日
  let n = ("0" + m).slice(-2) + ("0" + d).slice(-2),
    k = 0;
  for (let i in V) n * 1 > V[i].date * 1 && k++;
  k = k >= V.length ? 0 : k;
  result.gl = V.slice(k).shift();

  //获取最近的农历节日
  let nl = solarToLunar(y, m, d);
  (n = ("0" + nl.lunarM).slice(-2) + ("0" + nl.lunarD).slice(-2)), (k = 0);
  for (let i in T) n * 1 > T[i].date * 1 && k++;
  k = k >= V.length ? 0 : k;
  result.nl = T.slice(k).shift();
  return result;
}
let o = recently(V, T);
function insertStr(source, start, newStr) {
  return source.slice(0, start) + newStr + source.slice(start);
}
const allDays = (year) => {
  let leapYear = false,
    sum_day = 0,
    month_arr = [4, 6, 9, 11];
  if (year % 100 === 0) {
    // 年份是整百
    leapYear = year % 400 === 0;
  } else {
    leapYear = year % 4 === 0;
  }
  // 下面计算每个月的天数
  for (let i = 1; i < 13; i++) {
    if (i === 2) {
      sum_day += leapYear ? 29 : 28;
    } else if (month_arr.includes(i)) {
      sum_day += 30;
    } else {
      sum_day += 31;
    }
  }
  return sum_day;
};
// 获取到下一个节日的剩余时间
function monthDayDiff(date, type) {
  let targetTimezone = -8;
  let dif = new Date().getTimezoneOffset();
  let east8time = new Date().getTime() + dif * 60 * 1000 - targetTimezone * 60 * 60 * 1000;
  let now = new Date(east8time);
  let year = now.getFullYear().toString(); //得到年份
  let month = now.getMonth() + 1 > 10 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1); //得到月份
  let day = now.getDate() > 10 ? now.getDate() : "0" + now.getDate(); //得到日期
  const yearDays = allDays();

  function extracted(s2, s1) {
    let time =
        s2.getTime() - s1.getTime() >= 0
            ? s2.getTime() - s1.getTime()
            : s2.getTime() - s1.getTime() + yearDays * 1000 * 60 * 60 * 24;
    return time / (1000 * 60 * 60 * 24);
  }

  if (type === "nl") {
    let nl = solarToLunar(year, month, day);
    n = ("0" + nl.lunarM).slice(-2) + ("0" + nl.lunarD).slice(-2);
    let d1 = insertStr(year, 4, "/") + insertStr(n, 2, "/");
    let d2 = insertStr(year, 4, "/") + insertStr(date, 2, "/");
    let s1 = new Date(d1);
    let s2 = new Date(d2);
    return extracted(s2, s1);
  } else {
    let d1 = year + "/" + month + "/" + day;
    let d2 = insertStr(year, 4, "/") + insertStr(date, 2, "/");
    let s1 = new Date(d1);
    let s2 = new Date(d2);
    return extracted(s2, s1);
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
  if ($persistentStore.read(type === "nl" ? "lunarCalendarPushed" : "gregorianCalendarPushed") !== name) {
    $persistentStore.write(name, type === "nl" ? "lunarCalendarPushed" : "gregorianCalendarPushed");
    let time='';
    if (type === "nl") {
      time = "农历:" + toChinaYear() + "年" + toChinaMonth()  + toChinaDay() ;
    } else {
      let year = new Date().getFullYear().toString();
      let month = new Date().getMonth() + 1 > 10 ? new Date().getMonth() + 1 : "0" + (new Date().getMonth() + 1); //得到月份
      let day = new Date().getDate() > 10 ? new Date().getDate() : "0" + new Date().getDate(); //得到日期
      time = `${year}年${month}月${day}日`;
    }
    $notification.post("假日祝福", "", "今天是" + time + name + "   🎉🎉🎉!");
  }
}
//>图标依次切换电池电量图标,电池颜色
function icon_now(num) {
  if (num <= 7 && num > 5) {
    return ["battery.25", "#ee2746"];
  } else if (num <= 5 && num > 3) {
    return ["battery.50", "#f2ce2b"];
  } else if (num <= 3 && num > 0) {
    return ["battery.75", "#41b349"];
  } else if (num === 0) {
    return ["battery.100.bolt", "#41b349"];
  } else {
    return ["battery.0", "#ee2746"];
  }
}
//非节日情况下,随机返回一条语录,否则返回节日祝福
function title_random(num) {
  let r = Math.floor(Math.random() * 10 + 1);
  let dic = {
    1: "𝗔𝗹𝗹 𝘁𝗵𝗲 𝗯𝗲𝘀𝘁.",
    2: "𝗕𝗿𝗶𝗴𝗵𝘁 𝗳𝘂𝘁𝘂𝗿𝗲, 𝗷𝘂𝗯𝗶𝗹𝗮𝗻𝘁.",
    3: "𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝘁𝗵𝗶𝗻𝗴 𝗴𝗼𝗲𝘀 𝘆𝗼𝘂𝗿 𝘄𝗮𝘆.",
    4: "𝗜 𝗸𝗻𝗼𝘄 𝘆𝗼𝘂’𝗹𝗹 𝗱𝗼 𝗴𝗿𝗲𝗮𝘁!.",
    5: "𝗜 𝘄𝗶𝘀𝗵 𝘆𝗼𝘂 𝗹𝘂𝗰𝗸.",
    6: "𝗠𝗮𝘆 𝘆𝗼𝘂 𝗯𝗲 𝗵𝗮𝗽𝗽𝘆.",
    7: "𝗣𝗿𝗼𝘀𝗽𝗲𝗿𝗶𝘁𝘆, 𝗽𝗹𝗮𝗶𝗻 𝘀𝗮𝗶𝗹𝗶𝗻𝗴.",
    8: "𝗧𝗵𝗲 𝘄𝗮𝗿𝗺 𝘀𝗺𝗶𝗹𝗲, 𝗶𝗳 𝘁𝗵𝗲 𝗾𝘂𝗮𝗹𝗶𝘁𝘆.",
    9: "𝗪𝗶𝘀𝗵 𝘆𝗼𝘂 𝘁𝗵𝗲 𝗯𝗲𝘀𝘁 𝗼𝗳 𝗹𝘂𝗰𝗸.",
    10: "𝗪𝗶𝘀𝗵𝗶𝗻𝗴 𝘆𝗼𝘂 𝗮 𝗹𝗼𝗻𝗴 𝗹𝗶𝗳𝗲.",
  };
  return num === 0 ? "𝗛𝗮𝗽𝗽𝘆 𝗵𝗼𝗹𝗶𝗱𝗮𝘆𝘀 𝗮𝗻𝗱 𝗮𝗹𝗹 𝘁𝗵𝗲 𝗯𝗲𝘀𝘁." : dic[r];
}

function dayDiff() {
  //返回较近的节日
  return monthDayDiff(o.gl.date, "gl") > monthDayDiff(o.nl.date, "nl")
    ? monthDayDiff(o.nl.date, "nl")
    : monthDayDiff(o.gl.date, "gl");
}

dayDiff();

$done({
  title: title_random(dayDiff()),
  icon: icon_now(dayDiff())[0],
  "icon-color": icon_now(dayDiff())[1],
  content:
    o.gl.name +
    ":" +
    today(monthDayDiff(o.gl.date, "gl"), o.gl.name, "gl") +
    "|" +
    o.nl.name +
    ":" +
    today(monthDayDiff(o.nl.date, "nl"), o.nl.name, "nl"),
});
