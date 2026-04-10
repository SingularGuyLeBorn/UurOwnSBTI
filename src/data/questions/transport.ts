import type { Question } from '@/types';

export const TRANSPORT_QUESTIONS: Question[] = [
  {
    id: "Q_transport_001",
    type: "single",
    text: "周末你打算去30公里外的郊区散心，你会怎么出发？",
    options: [
      { id: "A", text: "骑上公路车，享受风与自由", weights: { QI: 4, GAOTIE: 2 } },
      { id: "B", text: "叫一辆滴滴，躺着刷手机", weights: { DIDI: 4, JIAO2: 2 } },
      { id: "C", text: "查公交路线，虽然要换乘三次", weights: { JIAO2: 4, QI: 2 } },
      { id: "D", text: "扫一辆共享单车，觉得穿骑行裤太夸张", weights: { DIAN2: 3, QI: 2 } },
      { id: "E", text: "爬坡才是骑行的灵魂，必须骑车", weights: { QI: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_transport_002",
    type: "single",
    text: "朋友约你夜骑城市绿道，你的第一反应是？",
    options: [
      { id: "A", text: "立刻检查胎压和骑行裤有没有干", weights: { QI: 4, SKATE: 2 } },
      { id: "B", text: "婉拒，晚上骑车太危险", weights: { FEIJI: 3, DIDI: 2 } },
      { id: "C", text: "问终点有没有充电桩，想骑电动车去", weights: { DIAN2: 4, QI: 2 } },
      { id: "D", text: "可以，但我要打车过去跟你汇合", weights: { DIDI: 3, GAOTIE: 2 } }
    ]
  },
  {
    id: "Q_transport_003",
    type: "single",
    text: "周一早高峰，你站在公交车后门被挤成沙丁鱼，此时你会？",
    options: [
      { id: "A", text: "默默数站，生怕坐过站", weights: { JIAO2: 4, NPC: 3 } },
      { id: "B", text: "心想不如骑滑板穿行街头", weights: { SKATE: 4, QI: 2 } },
      { id: "C", text: "打开滴滴看拼车还要等多久", weights: { DIDI: 4, FEIJI: 2 } },
      { id: "D", text: "后悔没戴降噪耳机，心烦意乱", weights: { LUN: 3, JIAO2: 2 } }
    ]
  },
  {
    id: "Q_transport_004",
    type: "single",
    text: "你连续三天在公交车上坐过站，你会？",
    options: [
      { id: "A", text: "怀疑人生，觉得自己是公交难民", weights: { JIAO2: 4, EMO: 2 } },
      { id: "B", text: "立刻下单买辆公路车", weights: { QI: 4, JIAO2: 2 } },
      { id: "C", text: "改骑电动车，再也不坐公交", weights: { DIAN2: 4, JIAO2: 2 } },
      { id: "D", text: "以后全程开着导航报站", weights: { NPC: 4, JIAO2: 2 } },
      { id: "E", text: "在公交车上睡着是我的宿命", weights: { JIAO2: 5, SLEEP: 3 }, hidden: true }
    ]
  },
  {
    id: "Q_transport_005",
    type: "single",
    text: "打车时司机走了你不熟悉的小路，你的反应是？",
    options: [
      { id: "A", text: "立刻打开导航质问是不是绕路", weights: { DIDI: 4, HITER: 3 } },
      { id: "B", text: "无所谓，正好欣赏城市夜景", weights: { QI: 4, DIDI: 2 } },
      { id: "C", text: "强忍着晕车的不适，不敢开口", weights: { FEIJI: 4, DIDI: 2 } },
      { id: "D", text: "默默看司机评分和拼车乘客头像", weights: { NPC: 4, DIDI: 2 } }
    ]
  },
  {
    id: "Q_transport_006",
    type: "single",
    text: "拼车后排坐了个话痨乘客，全程跟你聊职场八卦，你会？",
    options: [
      { id: "A", text: "被迫营业，从司机评分聊到公司裁员", weights: { DIDI: 4, NPC: 3 } },
      { id: "B", text: "戴上耳机假装听不懂中文", weights: { GHOST: 4, DIDI: 2 } },
      { id: "C", text: "晕车发作，打开窗户拼命呼吸", weights: { FEIJI: 4, DIDI: 2 } },
      { id: "D", text: "借口要接电话结束对话", weights: { BOSS: 4, DIDI: 2 } }
    ]
  },
  {
    id: "Q_transport_007",
    type: "single",
    text: "高铁票只剩靠窗和靠过道的座位，你会怎么选？",
    options: [
      { id: "A", text: "必须靠窗，这是我的高铁信仰", weights: { GAOTIE: 4, QI: 2 } },
      { id: "B", text: "靠过道，方便随时去泡面", weights: { GAOTIE: 3, DIDI: 2 } },
      { id: "C", text: "无所谓，反正上车就睡觉", weights: { SLEEP: 4, GAOTIE: 2 } },
      { id: "D", text: "选靠过道，因为方便随时去洗手间", weights: { FEIJI: 4, GAOTIE: 2 } },
      { id: "E", text: "已经在想怎么霸座隔壁的F座", weights: { GAOTIE: 5, TROLL: 3 }, hidden: true }
    ]
  },
  {
    id: "Q_transport_008",
    type: "single",
    text: "高铁上后座的孩子不停踢你的椅背，你会？",
    options: [
      { id: "A", text: "转头瞪一眼，准备开启战斗模式", weights: { GAOTIE: 4, HOUJ: 3 } },
      { id: "B", text: "戴上降噪耳机，假装自己是飞机耳", weights: { FEIJI: 4, GAOTIE: 2 } },
      { id: "C", text: "起身去车厢连接处站着看风景", weights: { QI: 4, GAOTIE: 2 } },
      { id: "D", text: "默默忍受，毕竟家长也不管", weights: { NPC: 4, GAOTIE: 2 } }
    ]
  },
  {
    id: "Q_transport_009",
    type: "single",
    text: "飞机起飞时你感到耳膜胀痛、耳鸣不止，你会？",
    options: [
      { id: "A", text: "拼命嚼口香糖，祈祷快点降落", weights: { FEIJI: 4, NPC: 3 } },
      { id: "B", text: "心想以后还是坐高铁吧", weights: { GAOTIE: 4, FEIJI: 2 } },
      { id: "C", text: "打开航空餐包装转移注意力", weights: { DAWEI: 4, FEIJI: 2 } },
      { id: "D", text: "握紧扶手，额头冒冷汗", weights: { EMO: 4, FEIJI: 2 } }
    ]
  },
  {
    id: "Q_transport_010",
    type: "single",
    text: "长途飞行落地后，你最大的困扰是？",
    options: [
      { id: "A", text: "耳鸣还没消，整个人像在水下", weights: { FEIJI: 4, EMO: 3 } },
      { id: "B", text: "航空餐太难吃，胃还在抗议", weights: { DAWEI: 4, FEIJI: 2 } },
      { id: "C", text: "时差颠倒，白天困晚上清醒", weights: { SLEEP: 4, FEIJI: 2 } },
      { id: "D", text: "后悔没买高铁商务座", weights: { GAOTIE: 4, FEIJI: 2 } },
      { id: "E", text: "发誓这辈子再也不坐飞机了", weights: { FEIJI: 5, JIAO2: 3 }, hidden: true }
    ]
  },
  {
    id: "Q_transport_011",
    type: "single",
    text: "如果要选一把椅子陪你长途通勤，你最看重什么？",
    options: [
      { id: "A", text: "人体工学腰托，拯救久坐的腰椎", weights: { LUN: 4, BOSS: 2 } },
      { id: "B", text: "轻量化折叠，方便带上地铁", weights: { JIAO2: 4, LUN: 2 } },
      { id: "C", text: "带轮子的电竞椅，随时随地开播", weights: { ZHIBO: 4, LUN: 2 } },
      { id: "D", text: "能塞进行李架的便携款", weights: { FEIJI: 4, LUN: 2 } }
    ]
  },
  {
    id: "Q_transport_012",
    type: "single",
    text: "连续坐了三小时交通工具后，你的身体反应是？",
    options: [
      { id: "A", text: "腰椎开始报警，想念人体工学椅", weights: { LUN: 4, SKATE: 2 } },
      { id: "B", text: "屁股发麻，想站起来骑滑板", weights: { SKATE: 4, LUN: 2 } },
      { id: "C", text: "没什么感觉，久坐是我的日常", weights: { NPC: 4, LUN: 2 } },
      { id: "D", text: "头晕目眩，仿佛得了飞机耳", weights: { FEIJI: 4, LUN: 2 } }
    ]
  },
  {
    id: "Q_transport_013",
    type: "single",
    text: "公司门口有一段完美的斜坡人行道，你的第一反应是？",
    options: [
      { id: "A", text: "掏出滑板来一个Ollie，感受街头", weights: { SKATE: 4, QI: 2 } },
      { id: "B", text: "担心摔伤，默默绕开走楼梯", weights: { NPC: 4, SKATE: 2 } },
      { id: "C", text: "骑电动车冲下去，体验速度", weights: { DIAN2: 4, SKATE: 2 } },
      { id: "D", text: "坐在轮椅上让同事推你下去", weights: { LUN: 4, SKATE: 2 } },
      { id: "E", text: "摔伤也要滑，这是滑板少年的信仰", weights: { SKATE: 5, YOLO: 3 }, hidden: true }
    ]
  },
  {
    id: "Q_transport_014",
    type: "single",
    text: "关于护膝和滑板，你的态度是？",
    options: [
      { id: "A", text: "护膝是尊严，Ollie是信仰", weights: { SKATE: 4, QI: 2 } },
      { id: "B", text: "街头摔跤是勋章，但护膝还是要戴", weights: { SKATE: 3, LUN: 2 } },
      { id: "C", text: "滑板太危险，我选择共享单车", weights: { QI: 4, SKATE: 2 } },
      { id: "D", text: "不如坐在电竞椅上玩《滑板》游戏", weights: { LUN: 4, SKATE: 2 } }
    ]
  },
  {
    id: "Q_transport_015",
    type: "single",
    text: "出门前你发现电动车只剩20%电量，目的地单程15公里，你会？",
    options: [
      { id: "A", text: "硬着头皮出发，路上找充电桩", weights: { DIAN2: 4, QI: 2 } },
      { id: "B", text: "改坐公交，不想有续航焦虑", weights: { JIAO2: 4, DIAN2: 2 } },
      { id: "C", text: "戴上头盔骑共享单车", weights: { QI: 4, DIAN2: 2 } },
      { id: "D", text: "赌一把，相信红灯少能省点电", weights: { DIAN2: 3, SKATE: 2 } }
    ]
  },
  {
    id: "Q_transport_016",
    type: "single",
    text: "路口红灯还有3秒，旁边没有车，你会？",
    options: [
      { id: "A", text: "等绿灯亮了再走，安全第一", weights: { NORM: 4, DIAN2: 2 } },
      { id: "B", text: "左右观察后闯红灯冲过去", weights: { DIAN2: 4, SKATE: 3 } },
      { id: "C", text: "停在原地刷手机看充电桩位置", weights: { JIAO2: 4, DIAN2: 2 } },
      { id: "D", text: "摘下头盔擦汗，抱怨续航不够", weights: { LUN: 3, DIAN2: 2 } },
      { id: "E", text: "电动车战神从不等红灯", weights: { DIAN2: 5, BAOZ: 3 }, hidden: true }
    ]
  }
];
