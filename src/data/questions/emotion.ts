import type { Question } from '@/types';

export const EMOTION_QUESTIONS: Question[] = [
  {
    id: "Q_emo_001",
    type: "single",
    text: "如果你的人生突然开启了一个系统面板，能看到周围人的好感度和实力值，你最想做什么？",
    options: [
      { id: "A", text: "立刻找到曾经看不起我的人，当场打脸逆袭", weights: { SHUANG2: 5 } },
      { id: "B", text: "低调收集信息，默默规划人生", weights: { MAI: 3 } },
      { id: "C", text: "觉得这是负担，只想关掉面板过普通日子", weights: { YIY: 2 } },
      { id: "D", text: "开启直播，让全网见证我的开挂人生", weights: { SHUANG2: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_002",
    type: "single",
    text: "看到小说主角被反派羞辱后反杀的情节，你的真实反应是？",
    options: [
      { id: "A", text: "极度舒适，这就是我想看的爽点", weights: { SHUANG2: 5 } },
      { id: "B", text: "有点爽，但剧情太老套了", weights: { SHUANG2: 3 } },
      { id: "C", text: "心疼反派，是不是有什么苦衷", weights: { BIAN: 2 } },
      { id: "D", text: "无所谓，反正都是编的", weights: { MAI: 3 } }
    ]
  },
  {
    id: "Q_emo_003",
    type: "single",
    text: "朋友圈又有人晒婚纱照并配上《我们要结婚啦》，你的第一反应是？",
    options: [
      { id: "A", text: "默默计算份子钱又要出血多少", weights: { KONG2: 5 } },
      { id: "B", text: "婚纱挺好看的，但穿在我身上像枷锁", weights: { KONG2: 4 } },
      { id: "C", text: "真心祝福，百年好合", weights: { QIAN: 2 } },
      { id: "D", text: "快速划过去，没什么感觉", weights: { MAI: 3 } },
      { id: "E", text: "想到离婚率数据，觉得这两人早晚得离", weights: { KONG2: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_004",
    type: "single",
    text: "父母问你什么时候带对象回家，你内心的真实OS是？",
    options: [
      { id: "A", text: "一个人吃饭旅行到处走走停停，不好吗", weights: { KONG2: 5 } },
      { id: "B", text: "开始焦虑自己的婚恋市场价值", weights: { JIAOLV: 4 } },
      { id: "C", text: "敷衍几句，然后转移话题", weights: { QIAN: 3 } },
      { id: "D", text: "其实我也想，但害怕婚姻是爱情的坟墓", weights: { KONG2: 4 } }
    ]
  },
  {
    id: "Q_emo_005",
    type: "single",
    text: "在商场看到一家三口为孩子挑选进口奶粉，你的关注点是？",
    options: [
      { id: "A", text: "一罐奶粉够我买多少个皮肤了", weights: { KONG3: 4 } },
      { id: "B", text: "想到学区房、补习班，头皮发麻", weights: { KONG3: 5 } },
      { id: "C", text: "觉得挺温馨的，想拥有同款", weights: { SHUANG2: 2 } },
      { id: "D", text: "没什么特别的，普通日常而已", weights: { MAI: 3 } }
    ]
  },
  {
    id: "Q_emo_006",
    type: "single",
    text: "亲戚家'熊孩子'来你家做客并打碎了你珍藏的手办，你会？",
    options: [
      { id: "A", text: "脑子里已经开始计算学区房和育儿成本了", weights: { KONG3: 5 } },
      { id: "B", text: "强颜欢笑说'没事，孩子不是故意的'", weights: { QIAN: 4 } },
      { id: "C", text: "当场黑脸，让家长赔偿", weights: { BIAN: 3 } },
      { id: "D", text: "深呼吸，告诉自己丁克是正确的选择", weights: { KONG3: 4 } }
    ]
  },
  {
    id: "Q_emo_007",
    type: "single",
    text: "深夜刷到《你的同龄人正在抛弃你》这类文章，你会？",
    options: [
      { id: "A", text: "立刻放下手机开始复盘自己的人生规划", weights: { JIAOLV: 4 } },
      { id: "B", text: "焦虑到失眠，觉得自己一事无成", weights: { JIAOLV: 5 } },
      { id: "C", text: "这种贩卖焦虑的内容就该举报", weights: { KONG2: 2 } },
      { id: "D", text: "没感觉，标题党而已", weights: { MAI: 3 } },
      { id: "E", text: "马上转发给朋友，不能只有我一个人焦虑", weights: { JIAOLV: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_008",
    type: "single",
    text: "公司群里有人讨论35岁被优化的消息，你？",
    options: [
      { id: "A", text: "立刻打开招聘软件看市场行情", weights: { JIAOLV: 5 } },
      { id: "B", text: "庆幸自己还年轻，但隐隐担忧", weights: { JIAOLV: 4 } },
      { id: "C", text: "觉得内卷没必要，躺平也是一种选择", weights: { MAI: 3 } },
      { id: "D", text: "开始计算存款能不能撑到退休", weights: { KONG3: 2 } }
    ]
  },
  {
    id: "Q_emo_009",
    type: "single",
    text: "连续阴雨天，你发现自己总是开心不起来，最可能的原因是？",
    options: [
      { id: "A", text: "季节性情绪失调，阳光少了血清素就低了", weights: { YIY: 5 } },
      { id: "B", text: "最近压力太大，需要休息", weights: { JIAOLV: 3 } },
      { id: "C", text: "本来就是这种性格，和天气无关", weights: { YIY: 4 } },
      { id: "D", text: "找点刺激的事做，比如去蹦极", weights: { XING: 3 } }
    ]
  },
  {
    id: "Q_emo_010",
    type: "single",
    text: "朋友说你最近看起来很正常，但你自己知道？",
    options: [
      { id: "A", text: "只是在扮演一个情绪稳定的成年人", weights: { YIY: 5 } },
      { id: "B", text: "夜深人静的时候网抑云时间就到了", weights: { YIY: 4 } },
      { id: "C", text: "其实我真的还好，只是有点累", weights: { MAI: 3 } },
      { id: "D", text: "正常是什么标准？我只是在勉强活着", weights: { YIY: 4 } }
    ]
  },
  {
    id: "Q_emo_011",
    type: "single",
    text: "恋人昨天还说爱你，今天突然冷淡说需要空间，你的情绪曲线是？",
    options: [
      { id: "A", text: "从天堂到地狱，情绪像过山车一样失控", weights: { SHUANG3: 5 } },
      { id: "B", text: "怀疑自己做错了什么，开始疯狂反思", weights: { QIAN: 3 } },
      { id: "C", text: "既然这样，那我也立刻收回所有感情", weights: { BIAN: 3 } },
      { id: "D", text: "给他空间，感情需要呼吸", weights: { MAI: 2 } },
      { id: "E", text: "一会儿恨得想拉黑，一会儿又卑微求和", weights: { SHUANG3: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_012",
    type: "single",
    text: "描述你最近一周的情绪状态，最贴切的是？",
    options: [
      { id: "A", text: "忽高忽低，有时候精力爆棚有时候不想下床", weights: { SHUANG3: 5 } },
      { id: "B", text: "整体比较平稳，偶有波动", weights: { MAI: 3 } },
      { id: "C", text: "持续低落，对什么都提不起兴趣", weights: { YIY: 4 } },
      { id: "D", text: "一直很亢奋，睡眠减少也不觉得累", weights: { XING: 4 } }
    ]
  },
  {
    id: "Q_emo_013",
    type: "single",
    text: "同事请你帮忙做一个你根本不想做的PPT，你的第一反应是？",
    options: [
      { id: "A", text: "不敢拒绝，怕影响同事关系", weights: { QIAN: 5 } },
      { id: "B", text: "先答应下来，然后自己熬夜委屈做完", weights: { QIAN: 4 } },
      { id: "C", text: "委婉拒绝，说自己手头也有项目", weights: { JIAOLV: 2 } },
      { id: "D", text: "直接说'不，我没空'", weights: { MAI: 3 } }
    ]
  },
  {
    id: "Q_emo_014",
    type: "single",
    text: "聚餐时你发现自己点的菜大家都不怎么动，你会？",
    options: [
      { id: "A", text: "立刻察言观色，是不是口味不合", weights: { QIAN: 4 } },
      { id: "B", text: "默默自责，下次一定先问大家喜好", weights: { QIAN: 5 } },
      { id: "C", text: "无所谓，我自己爱吃就行", weights: { MAI: 3 } },
      { id: "D", text: "心想这群人真难伺候，但脸上还是赔笑", weights: { QIAN: 3 } }
    ]
  },
  {
    id: "Q_emo_015",
    type: "single",
    text: "好朋友因为临时有事取消了和你的约会，你会怎么想？",
    options: [
      { id: "A", text: "他/她是不是讨厌我了，要抛弃我", weights: { BIAN: 5 } },
      { id: "B", text: "人与人之间就是会渐行渐远吧", weights: { YIY: 3 } },
      { id: "C", text: "理解，谁都有突发状况", weights: { MAI: 2 } },
      { id: "D", text: "立刻拉黑，不在乎我的人我也不在乎", weights: { BIAN: 4 } },
      { id: "E", text: "从'最好的朋友'瞬间变成'根本不重要的人'", weights: { BIAN: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_016",
    type: "single",
    text: "面对一个观点和你截然相反的人，你的态度更接近？",
    options: [
      { id: "A", text: "非黑即白，不是朋友就是敌人", weights: { BIAN: 5 } },
      { id: "B", text: "尝试理解，但内心已经给他判了死刑", weights: { BIAN: 4 } },
      { id: "C", text: "各人有各人的活法，不必强求一致", weights: { MAI: 3 } },
      { id: "D", text: "看心情，有时候能聊有时候直接吵架", weights: { SHUANG3: 3 } }
    ]
  },
  {
    id: "Q_emo_017",
    type: "single",
    text: "周末独处时，你最常见的状态是？",
    options: [
      { id: "A", text: "刷短视频刷到手指抽筋也停不下来", weights: { XING: 5 } },
      { id: "B", text: "需要高浓度咖啡或浓茶才能提起精神", weights: { XING: 4 } },
      { id: "C", text: "玩密室逃脱或过山车寻求心跳加速", weights: { XING: 5 } },
      { id: "D", text: "静静发呆，时间不知不觉流逝", weights: { MAI: 3 } },
      { id: "E", text: "必须不断有新消息、新刺激，否则就感到空虚", weights: { XING: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_018",
    type: "single",
    text: "如果一整天没有收到任何消息提醒，你会有什么感觉？",
    options: [
      { id: "A", text: "浑身不自在，主动点开各个APP找红点", weights: { XING: 5 } },
      { id: "B", text: "有点无聊，但正好可以休息", weights: { MAI: 3 } },
      { id: "C", text: "享受这种宁静，不被打扰真好", weights: { YIY: 2 } },
      { id: "D", text: "立刻发朋友圈寻求存在感", weights: { XING: 4 } }
    ]
  },
  {
    id: "Q_emo_019",
    type: "single",
    text: "听到远方发生重大灾害新闻，你周围的人都在流泪讨论，你的反应是？",
    options: [
      { id: "A", text: "情绪钝化，知道很惨但哭不出来", weights: { MAI: 5 } },
      { id: "B", text: "觉得悲伤，但也就那样，日子还得过", weights: { MAI: 4 } },
      { id: "C", text: "被周围情绪感染，跟着难过一会儿", weights: { QIAN: 3 } },
      { id: "D", text: "立刻转发捐款链接，做点什么总比干哭强", weights: { SHUANG2: 2 } },
      { id: "E", text: "内心毫无波澜，甚至想点外卖", weights: { MAI: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_emo_020",
    type: "single",
    text: "朋友深夜找你倾诉感情创伤，你内心的真实感受是？",
    options: [
      { id: "A", text: "无所谓，谁的青春不受伤", weights: { MAI: 4 } },
      { id: "B", text: "钝感力启动，不知道该怎么安慰，只能嗯嗯啊啊", weights: { MAI: 5 } },
      { id: "C", text: "活着就行，感情的事想太多没用", weights: { MAI: 4 } },
      { id: "D", text: "陪他一起骂前任，提供情绪价值", weights: { QIAN: 3 } }
    ]
  }
];
