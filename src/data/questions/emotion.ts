import type { Question } from '@/types';

export const EMOTION_QUESTIONS: Question[] = [
  {
    id: "Q_emo_001",
    type: "single",
    text: "如果你的人生突然开启了一个系统面板，能看到周围人的好感度和实力值，你最想做什么？",
    options: [
      { id: "A", text: "立刻找到曾经看不起我的人，当场打脸逆袭", weights: { SHUANG2: 5 } },
      { id: "B", text: "低调收集黑料，等他们跌落神坛再补刀", weights: { HEI2: 4, MO: 3 } },
      { id: "C", text: "普通人？我开这面板就是为了不当普通人", weights: { BOSS: 4, VIP: 3 } },
      { id: "D", text: "开启直播，让全网见证我的开挂人生", weights: { SHUANG2: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_002",
    type: "single",
    text: "看到小说主角被反派羞辱后反杀的情节，你的真实反应是？",
    options: [
      { id: "A", text: "极度舒适，这就是我想看的爽点", weights: { SHUANG2: 5 } },
      { id: "B", text: "反派骂得挺对的，主角确实是个傻X", weights: { HITER: 4, CHAO: 3, TROLL: 2 } },
      { id: "C", text: "心疼反派？我心疼我自己还在当NPC", weights: { NPC: 4, WONANG: 3 } },
      { id: "D", text: "我只想知道反派什么时候转正", weights: { HEI2: 4, CHU: 3, XU: 2 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_003",
    type: "single",
    text: "朋友圈又有人晒婚纱照并配上《我们要结婚啦》，你的第一反应是？",
    options: [
      { id: "A", text: "默默计算份子钱又要出血多少", weights: { KONG2: 5 } },
      { id: "B", text: "婚纱挺好看的，但穿在我身上像枷锁", weights: { KONG2: 4 } },
      { id: "C", text: "祝福他们，反正离婚率会出手", weights: { KONG2: 4, CHAO: 3 } },
      { id: "D", text: "想到他们孩子以后也是NPC，我就放心了", weights: { NPC: 4, CHAO: 3, HEI2: 2 } }
    ]
  },
  {
    id: "Q_emo_004",
    type: "single",
    text: "父母问你什么时候带对象回家，你内心的真实OS是？",
    options: [
      { id: "A", text: "一个人吃饭旅行到处走走停停，不好吗", weights: { KONG2: 5 } },
      { id: "B", text: "带对象回家？我自己都不想回家", weights: { HITER: 4, LENGL: 3, GHOST: 2 } },
      { id: "C", text: "你们先给我首付，我明天就带十个回来", weights: { HITER: 4, BAOZ: 3, CHAO: 2 } },
      { id: "D", text: "其实我也想，但害怕婚姻是爱情的坟墓", weights: { KONG2: 4 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_005",
    type: "single",
    text: "在商场看到一家三口为孩子挑选进口奶粉，你的关注点是？",
    options: [
      { id: "A", text: "一罐奶粉够我买多少个皮肤了", weights: { KONG3: 4 } },
      { id: "B", text: "想到学区房、补习班，头皮发麻", weights: { KONG3: 5 } },
      { id: "C", text: "这家人真可怜，被消费主义洗脑了", weights: { CHAO: 4, HITER: 3, TROLL: 2 } },
      { id: "D", text: "想到他们孩子以后也是NPC，我就放心了", weights: { NPC: 4, CHAO: 3, HEI2: 2 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_006",
    type: "single",
    text: "亲戚家'熊孩子'来你家做客并打碎了你珍藏的手办，你会？",
    options: [
      { id: "A", text: "当场发飙：你家孩子值多少钱，照价赔偿", weights: { BAOZ: 4, HITER: 3, FENN: 2 } },
      { id: "B", text: "微笑：没事，我珍藏的正好是赝品（其实是真的）", weights: { HEI2: 4, JING2: 3, TROLL: 2 } },
      { id: "C", text: "当场黑脸，让家长赔偿", weights: { BIAN: 3 } },
      { id: "D", text: "脑子里已经开始计算学区房和育儿成本了", weights: { KONG3: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_007",
    type: "single",
    text: "深夜刷到《你的同龄人正在抛弃你》这类文章，你会？",
    options: [
      { id: "A", text: "焦虑到失眠，觉得自己一事无成", weights: { JIAOLV: 5 } },
      { id: "B", text: "写出3000字评论骂作者贩卖焦虑", weights: { MO: 4, FENN: 3, GANG: 2 } },
      { id: "C", text: "马上转发给朋友，不能只有我一个人焦虑", weights: { JIAOLV: 5 } },
      { id: "D", text: "冷笑：写这文章的人先把自己焦虑死吧", weights: { HITER: 4, CHAO: 3, BAOZ: 2 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_008",
    type: "single",
    text: "公司群里有人讨论35岁被优化的消息，你？",
    options: [
      { id: "A", text: "立刻打开招聘软件看市场行情", weights: { JIAOLV: 5 } },
      { id: "B", text: "在群里问：被优化了是不是可以拿N+1", weights: { HITER: 4, CHAO: 3, TROLL: 2 } },
      { id: "C", text: "转发《如何申请失业金》到工作群", weights: { HITER: 4, YINY: 3, LEI2: 2 } },
      { id: "D", text: "冷笑：优化我？先优化老板那个废物", weights: { HITER: 4, BAOZ: 3, CHAO: 2 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_009",
    type: "single",
    text: "连续阴雨天，你发现自己总是开心不起来，最可能的原因是？",
    options: [
      { id: "A", text: "季节性情绪失调，阳光少了血清素就低了", weights: { YIY: 5 } },
      { id: "B", text: "开心不起来？我晴天也不开心", weights: { EMO: 4, WEMO: 3, WONANG: 2 } },
      { id: "C", text: "关天气屁事，我只是在勉强活着", weights: { EMO: 4, XU: 3, CHU: 2 } },
      { id: "D", text: "找点刺激的事做，比如去骂领导", weights: { BAOZ: 4, HITER: 3, TROLL: 2 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_010",
    type: "single",
    text: "朋友说你最近看起来很正常，但你自己知道？",
    options: [
      { id: "A", text: "只是在扮演一个情绪稳定的成年人", weights: { YIY: 5 } },
      { id: "B", text: "正常？我装的，其实已经疯了", weights: { BAOZ: 4, HEI2: 3, TROLL: 2 } },
      { id: "C", text: "我对朋友说'我很好'的时候，连我自己都不信", weights: { BIAO: 4, JING2: 3, WONANG: 2 } },
      { id: "D", text: "正常是什么标准？我只是在勉强活着", weights: { YIY: 4 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_011",
    type: "single",
    text: "恋人昨天还说爱你，今天突然冷淡说需要空间，你的情绪曲线是？",
    options: [
      { id: "A", text: "从天堂到地狱，情绪像过山车一样失控", weights: { SHUANG3: 5 } },
      { id: "B", text: "需要空间？那我们就彻底没空间了", weights: { LENGL: 4, HITER: 3, BAOZ: 2 } },
      { id: "C", text: "一会儿恨得想拉黑，一会儿又卑微求和", weights: { SHUANG3: 5 } },
      { id: "D", text: "怀疑自己做错了什么？错的是我有眼无珠", weights: { BIAN: 4, WONANG: 3 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_012",
    type: "single",
    text: "描述你最近一周的情绪状态，最贴切的是？",
    options: [
      { id: "A", text: "忽高忽低，有时候精力爆棚有时候不想下床", weights: { SHUANG3: 5 } },
      { id: "B", text: "情绪稳定地发疯，这就是我的新常态", weights: { BAOZ: 4, HITER: 3, TROLL: 2 } },
      { id: "C", text: "我很好，只是偶尔想毁灭世界", weights: { HEI2: 4, EMO: 3, CHAO: 2 } },
      { id: "D", text: "持续低落，对地球提不起兴趣", weights: { YIY: 4, CHAO: 3 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_013",
    type: "single",
    text: "同事请你帮忙做一个你根本不想做的PPT，你的第一反应是？",
    options: [
      { id: "A", text: "不敢拒绝，怕影响同事关系", weights: { QIAN: 5 } },
      { id: "B", text: "答应下来然后故意做得很烂，让他以后再也不敢找我", weights: { HEI2: 4, TROLL: 3, JING2: 2 } },
      { id: "C", text: "在群里@他：你的PPT凭什么让我做", weights: { HITER: 4, BAOZ: 3, CHAO: 2 } },
      { id: "D", text: "直接说'不，我没空'", weights: { MAI: 3 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_014",
    type: "single",
    text: "聚餐时你发现自己点的菜大家都不怎么动，你会？",
    options: [
      { id: "A", text: "直接摔筷子：爱吃不吃", weights: { BAOZ: 4, HITER: 3, FENN: 2 } },
      { id: "B", text: "默默记账：这群人以后都不配让我请客", weights: { YUAN: 4, XIAOQI: 3, JING: 2 } },
      { id: "C", text: "心想这群人真难伺候，但脸上还是赔笑", weights: { QIAN: 3 } },
      { id: "D", text: "立刻察言观色，是不是口味不合", weights: { QIAN: 4 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_015",
    type: "single",
    text: "好朋友因为临时有事取消了和你的约会，你会怎么想？",
    options: [
      { id: "A", text: "他/她是不是讨厌我了，要抛弃我", weights: { BIAN: 5 } },
      { id: "B", text: "从'最好的朋友'瞬间变成'根本不重要的人'", weights: { BIAN: 5 } },
      { id: "C", text: "立刻拉黑，不在乎我的人我也不在乎", weights: { BIAN: 4 } },
      { id: "D", text: "理解？理解个屁，我在他心里根本不重要", weights: { BAOZ: 4, WONANG: 3, EMO: 2 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_016",
    type: "single",
    text: "面对一个观点和你截然相反的人，你的态度更接近？",
    options: [
      { id: "A", text: "非黑即白，不是朋友就是敌人", weights: { BIAN: 5 } },
      { id: "B", text: "观点相反？那他就是傻X，没有中间地带", weights: { HITER: 4, BAOZ: 3, CHAO: 2 } },
      { id: "C", text: "我不会跟他吵，我会在心里把他杀了八百遍", weights: { LENGL: 4, HEI2: 3, MO: 2 } },
      { id: "D", text: "尝试理解？理解不了的都是蠢货", weights: { BIAN: 4, CHAO: 3 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_017",
    type: "single",
    text: "周末独处时，你最常见的状态是？",
    options: [
      { id: "A", text: "刷短视频刷到手指抽筋也停不下来", weights: { XING: 5 } },
      { id: "B", text: "需要高浓度咖啡或浓茶才能提起精神", weights: { XING: 4 } },
      { id: "C", text: "独处？不，我在跟我的十个网友同时聊天", weights: { DOGE: 4, LEI2: 3, TROLL: 2 } },
      { id: "D", text: "静静发呆，想着怎么报复这个世界", weights: { HEI2: 4, MO: 3 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_018",
    type: "single",
    text: "如果一整天没有收到任何消息提醒，你会有什么感觉？",
    options: [
      { id: "A", text: "浑身不自在，主动点开各个APP找红点", weights: { XING: 5 } },
      { id: "B", text: "发现自己被世界遗忘，开始写800字小作文", weights: { EMO: 4, WEMO: 3, POET: 2 } },
      { id: "C", text: "没有消息说明没人找我麻烦，爽死了", weights: { IMFW: 4, XIAN: 3, CHU: 2 } },
      { id: "D", text: "立刻发朋友圈：我是不是被全世界拉黑了", weights: { EMO: 4, BIAO: 3, WEMO: 2 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_019",
    type: "single",
    text: "听到远方发生重大灾害新闻，你周围的人都在流泪讨论，你的反应是？",
    options: [
      { id: "A", text: "内心毫无波澜，甚至想点外卖", weights: { MAI: 5 } },
      { id: "B", text: "情绪钝化，知道很惨但哭不出来", weights: { MAI: 4 } },
      { id: "C", text: "被周围情绪感染，跟着难过一会儿", weights: { QIAN: 3 } },
      { id: "D", text: "冷笑：先关心关心自己明天吃啥吧", weights: { HITER: 4, CHAO: 3, XU: 2 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_020",
    type: "single",
    text: "朋友深夜找你倾诉感情创伤，你内心的真实感受是？",
    options: [
      { id: "A", text: "心里冷笑：你上次也是这么说的，活该", weights: { LENGL: 4, CHAO: 3, HEI2: 2 } },
      { id: "B", text: "已读不回，他的感情创伤不是我的KPI", weights: { HUIB: 4, IMFW: 3, GHOST: 2 } },
      { id: "C", text: "陪他一起骂前任，提供情绪价值", weights: { QIAN: 3 } },
      { id: "D", text: "无所谓，反正你下次还会重蹈覆辙", weights: { CHU: 4, XU: 3, HITER: 2 }, hidden: true }
    ]
  }
];
