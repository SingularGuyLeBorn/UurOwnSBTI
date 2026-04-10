import type { Question } from '@/types';

export const ANIMAL_QUESTIONS: Question[] = [
  {
    id: "Q_animal_001",
    type: "single",
    text: "朋友发了猫的照片到群里，你会？",
    options: [
      { id: "A", text: "立刻放大图片逐帧分析猫咪表情，并发出喵喵叫", weights: { MAO: 4 } },
      { id: "B", text: "回复可爱表情包，但内心毫无波澜", weights: { NPC: 2 } },
      { id: "C", text: "趁机晒出自家主子，展开养猫经验交流", weights: { MAO: 3, BIAO: 2 } },
      { id: "D", text: "询问是什么品种，估算价格", weights: { HU2: 2 } },
      { id: "E", text: "化身猫咪，钻进屏幕里和它对喵", weights: { MAO: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_animal_002",
    type: "single",
    text: "周末早晨你刚醒来，发现床头趴着一只流浪猫，你会？",
    options: [
      { id: "A", text: "瞬间清醒，开始思考猫粮品牌和驱虫方案", weights: { MAO: 4 } },
      { id: "B", text: "小心翼翼地摸一下，然后拍视频发朋友圈", weights: { MAO: 3, BIAO: 2 } },
      { id: "C", text: "把它抱下床，继续睡觉", weights: { XIONG: 2 } },
      { id: "D", text: "打开窗户让它出去，说'我不是你的铲屎官'", weights: { SHE2: 2 } },
      { id: "E", text: "假装没看见，翻身继续睡", weights: { ZHUS: 2 } }
    ]
  },
  {
    id: "Q_animal_003",
    type: "single",
    text: "公司团建去郊外露营地，你第一件想做的事是？",
    options: [
      { id: "A", text: "到处找狗，看到有狗立刻蹲下撸，并和它对话", weights: { GOU: 4 } },
      { id: "B", text: "热情地和每一位同事打招呼，主动承担烧烤任务", weights: { GOU: 3, BOSS: 1 } },
      { id: "C", text: "找个角落搭帐篷，刷手机", weights: { SHU2: 2 } },
      { id: "D", text: "催促HR开始团队破冰游戏", weights: { LANG: 2 } }
    ]
  },
  {
    id: "Q_animal_004",
    type: "single",
    text: "对象已读不回消息超过两小时，你的第一反应是？",
    options: [
      { id: "A", text: "自我反思是不是昨晚说错话了", weights: { GOU: 4 } },
      { id: "B", text: "冷静等待，相信TA只是在忙", weights: { NIU: 3 } },
      { id: "C", text: "直接打电话过去质问", weights: { LANG: 2 } },
      { id: "D", text: "发一个朋友圈仅TA可见，暗示自己的孤独", weights: { WEMO: 2 } },
      { id: "E", text: "疯狂发消息追问'在吗？是不是不爱我了？'", weights: { GOU: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_animal_005",
    type: "single",
    text: "深夜加班结束，你走进空无一人的地铁末班车，会？",
    options: [
      { id: "A", text: "缩在角落，戴上耳机，尽量避免和任何人对视", weights: { SHU2: 4 } },
      { id: "B", text: "观察车厢里还有哪些人，评估危险指数", weights: { SHU2: 3, SHE2: 1 } },
      { id: "C", text: "拍一张空荡荡车厢的照片发社交媒体配文'我的专属座驾'", weights: { MAO: 2, BIAO: 1 } },
      { id: "D", text: "趁机躺平占一排座位，先睡为敬", weights: { ZHUS: 2 } },
      { id: "E", text: "站在车门边，随时准备跳车逃跑", weights: { TU: 2 } }
    ]
  },
  {
    id: "Q_animal_006",
    type: "single",
    text: "公司突然宣布要裁员20%，你的本能反应是？",
    options: [
      { id: "A", text: "立刻打开招聘软件，开始海投简历并更新领英", weights: { SHU2: 4 } },
      { id: "B", text: "默默计算存款还能支撑几个月的房租", weights: { SHU2: 3, EMO: 1 } },
      { id: "C", text: "安慰同事说'没事，此处不留爷自有留爷处'", weights: { GOU: 2 } },
      { id: "D", text: "主动找领导表态愿意降薪留下", weights: { NIU: 3 } },
      { id: "E", text: "开始囤积方便面和纸巾，准备长期抗战", weights: { SHU2: 3, ZHUS: 1 } }
    ]
  },
  {
    id: "Q_animal_007",
    type: "single",
    text: "周五下班前五分钟，领导在群里发了一句'大家周末加个班'，你会？",
    options: [
      { id: "A", text: "虽然心里骂骂咧咧，但还是回复'好的老板'", weights: { NIU: 4 } },
      { id: "B", text: "假装没看见，周末失联", weights: { GHOST: 3 } },
      { id: "C", text: "回复'周末有事，周一赶早处理可以吗？'", weights: { HU2: 2 } },
      { id: "D", text: "直接在群里发劳动法截图", weights: { TROLL: 3 } },
      { id: "E", text: "秒回'收到'，并开始改需求，觉得这是福报", weights: { NIU: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_animal_008",
    type: "single",
    text: "连续加班一个月后终于放假，朋友约你去旅行，你会？",
    options: [
      { id: "A", text: "觉得在家睡觉才是最高享受，婉拒邀约", weights: { NIU: 4 } },
      { id: "B", text: "想去但担心请假会被领导穿小鞋", weights: { NIU: 3, SHU2: 2 } },
      { id: "C", text: "立刻订机票，告诉自己必须犒劳自己", weights: { HU2: 2 } },
      { id: "D", text: "提议改约去郊区农家乐，说那边空气好", weights: { XIONG: 2 } },
      { id: "E", text: "带上笔记本电脑，边旅行边待命", weights: { NIU: 3, SERF: 2 } }
    ]
  },
  {
    id: "Q_animal_009",
    type: "single",
    text: "部门里有个难搞的项目，大家都想推给别人，你会？",
    options: [
      { id: "A", text: "主动请缨但要求加人和加薪，谈好条件再接手", weights: { HU2: 4 } },
      { id: "B", text: "暗中观察局势，等领导点名时再'勉为其难'接下", weights: { HU2: 3, SHE2: 1 } },
      { id: "C", text: "直接装病请假，等风头过去", weights: { ZHUS: 2 } },
      { id: "D", text: "拉着同事一起向领导哭诉人手不够", weights: { YANG: 2 } },
      { id: "E", text: "提议抽签决定，公平公开", weights: { NPC: 2 } }
    ]
  },
  {
    id: "Q_animal_010",
    type: "single",
    text: "相亲对象问你月薪多少，你实际月入八千，会怎么回答？",
    options: [
      { id: "A", text: "如实回答，但强调公司有股权激励", weights: { HU2: 4 } },
      { id: "B", text: "反问对方收入，再决定自己报多少", weights: { SHE2: 3 } },
      { id: "C", text: "转移话题，聊最近的电影和餐厅", weights: { TU: 2 } },
      { id: "D", text: "直接晒工资条，表示不想骗人", weights: { GOU: 2 } },
      { id: "E", text: "说基础工资八千，但年终奖和副业加起来其实有个小几万", weights: { HU2: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_animal_011",
    type: "single",
    text: "新项目启动会上，领导问谁愿意当负责人，你会？",
    options: [
      { id: "A", text: "立刻举手，表示愿意带领团队冲锋陷阵", weights: { LANG: 4 } },
      { id: "B", text: "观察同事反应，如果没人上再站出来", weights: { LANG: 3, SHE2: 1 } },
      { id: "C", text: "低头看笔记本，希望别点到我", weights: { SHU2: 2 } },
      { id: "D", text: "推荐一个能力不如你的同事，减少竞争", weights: { HU2: 2 } },
      { id: "E", text: "提议通过狼人杀选出负责人", weights: { LANG: 3, TROLL: 1 } }
    ]
  },
  {
    id: "Q_animal_012",
    type: "single",
    text: "你的团队连续三个月业绩垫底，作为成员你会？",
    options: [
      { id: "A", text: "发起深夜会议室头脑风暴，喊口号重振士气", weights: { LANG: 4 } },
      { id: "B", text: "私下找领导分析原因，申请调整KPI", weights: { HU2: 2 } },
      { id: "C", text: "觉得是公司资源不够，开始摸鱼等裁员", weights: { ZHUS: 3 } },
      { id: "D", text: "默默加班补数据，尽量不被淘汰", weights: { NIU: 3 } },
      { id: "E", text: "组织团队去爬山，在山顶集体宣誓", weights: { LANG: 3, TROLL: 1 } }
    ]
  },
  {
    id: "Q_animal_013",
    type: "single",
    text: "冬天早晨闹钟响了三次，外面零下五度，你的选择是？",
    options: [
      { id: "A", text: "挣扎十分钟后起床，一边抱怨一边洗漱", weights: { XIONG: 4 } },
      { id: "B", text: "请病假，今天和被窝锁死", weights: { ZHUS: 3 } },
      { id: "C", text: "跳起来冷水洗脸，开启元气满满的一天", weights: { GOU: 2 } },
      { id: "D", text: "设第四个闹钟，再睡五分钟", weights: { SHU2: 2 } },
      { id: "E", text: "把闹钟砸了，裹紧被子宣布进入冬眠模式", weights: { XIONG: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_animal_014",
    type: "single",
    text: "朋友失恋找你倾诉，哭得很伤心，你会？",
    options: [
      { id: "A", text: "二话不说给TA一个熊抱，然后一起骂前任", weights: { XIONG: 4 } },
      { id: "B", text: "笨拙地递纸巾，说'别哭了，我请你吃饭'", weights: { XIONG: 3 } },
      { id: "C", text: "理性分析分手原因，指出TA也有问题", weights: { SHE2: 2 } },
      { id: "D", text: "陪TA哭，结果自己比TA还伤心", weights: { EMO: 3 } },
      { id: "E", text: "带TA去爬山，说大自然能治愈一切", weights: { XIONG: 2, TU: 1 } }
    ]
  },
  {
    id: "Q_animal_015",
    type: "single",
    text: "部门会上同事抢了本该属于你的功劳，你会？",
    options: [
      { id: "A", text: "当场微笑鼓掌，默默记在小本本上伺机反击", weights: { SHE2: 4 } },
      { id: "B", text: "会后找领导澄清，并附上了详细的工作记录", weights: { HU2: 3 } },
      { id: "C", text: "直接在会上指出'这部分其实是我做的'", weights: { LANG: 2 } },
      { id: "D", text: "忍了，但以后绝不再和这个人合作", weights: { MAO: 2 } },
      { id: "E", text: "回家后写小作文发朋友圈阴阳怪气", weights: { YINY: 3 } }
    ]
  },
  {
    id: "Q_animal_016",
    type: "single",
    text: "前任突然加你微信，问你最近过得怎么样，你会？",
    options: [
      { id: "A", text: "客套寒暄几句，打探对方是否过得不如自己", weights: { SHE2: 4 } },
      { id: "B", text: "直接问'有什么事？'不带表情包", weights: { SHE2: 3 } },
      { id: "C", text: "热情回复，幻想复合可能", weights: { GOU: 3 } },
      { id: "D", text: "秒删好友，拒绝二次伤害", weights: { TU: 2 } },
      { id: "E", text: "冷淡回复'还行'，同时截图发给现任报备", weights: { SHE2: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_animal_017",
    type: "single",
    text: "电梯里只有你和大领导，突然领导开口问你最近工作怎么样，你会？",
    options: [
      { id: "A", text: "心跳加速，支支吾吾说'还、还可以'", weights: { TU: 4 } },
      { id: "B", text: "快速背出准备好的三句话总结，语速飞快", weights: { TU: 3, SHU2: 1 } },
      { id: "C", text: "从容应对，顺便提了一个创新想法", weights: { HU2: 2 } },
      { id: "D", text: "笑着说'挺好的'然后低头看手机结束对话", weights: { MAO: 2 } },
      { id: "E", text: "假装信号不好，在电梯里原地跳跃", weights: { TROLL: 3 } }
    ]
  },
  {
    id: "Q_animal_018",
    type: "single",
    text: "周末去游乐园，朋友非要拉你上过山车，你会？",
    options: [
      { id: "A", text: "坚决拒绝，在出口帮大家拿包等他们下来", weights: { TU: 4 } },
      { id: "B", text: "被硬拉上去，全程闭眼尖叫到失声", weights: { TU: 3 } },
      { id: "C", text: "虽然害怕但为了面子硬着头皮上", weights: { LANG: 2 } },
      { id: "D", text: "兴奋地说'终于有人陪我了，我要坐第一排'", weights: { XIONG: 2 } },
      { id: "E", text: "假装肚子疼，躲在厕所里刷手机", weights: { TU: 2, SHU2: 2 } }
    ]
  },
  {
    id: "Q_animal_019",
    type: "single",
    text: "群里有人发了一张你的丑照，你会怎么回应？",
    options: [
      { id: "A", text: "立刻保存，反手P成表情包发到各个群", weights: { LONG: 4 } },
      { id: "B", text: "私聊对方要求撤回，表示侵犯肖像权", weights: { SHE2: 2 } },
      { id: "C", text: "发一个更丑的自拍，用魔法打败魔法", weights: { TROLL: 3 } },
      { id: "D", text: "假装没看见，两小时后撤回话题", weights: { GHOST: 2 } },
      { id: "E", text: "甩出一张龙图表情包，配文'朕知道了，退下吧'", weights: { LONG: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_animal_020",
    type: "single",
    text: "过年回家亲戚问你什么时候买房结婚，你会？",
    options: [
      { id: "A", text: "转发龙图'龙的传人不需要房子，需要的是飞天'", weights: { LONG: 4 } },
      { id: "B", text: "用表情包敷衍，转移话题到春晚小品", weights: { LONG: 3 } },
      { id: "C", text: "认真解释自己的规划和目前的困难", weights: { NIU: 2 } },
      { id: "D", text: "反问对方孩子期末考多少分", weights: { TROLL: 3 } },
      { id: "E", text: "当场表演一段龙的传人手势舞", weights: { LONG: 3, TROLL: 1 } }
    ]
  },
  {
    id: "Q_animal_021",
    type: "single",
    text: "周末宅家，你面前摆着外卖、奶茶和薯片，你会？",
    options: [
      { id: "A", text: "先吃外卖，再喝奶茶，最后躺着刷剧吃薯片", weights: { ZHUS: 4 } },
      { id: "B", text: "告诉自己只吃一口，结果全吃完了", weights: { ZHUS: 3 } },
      { id: "C", text: "纠结热量太高，最后还是点了轻食", weights: { TU: 2 } },
      { id: "D", text: "拍照发小红书配文'猪猪女孩的周末'", weights: { ZHUS: 3, BIAO: 1 } },
      { id: "E", text: "边吃边做俯卧撑，试图抵消热量", weights: { NIU: 2 } }
    ]
  },
  {
    id: "Q_animal_022",
    type: "single",
    text: "周一早上收到五封工作邮件和三群@，你的第一反应是？",
    options: [
      { id: "A", text: "按紧急程度排序，躺在床上先回复最简单的", weights: { ZHUS: 4 } },
      { id: "B", text: "立刻起床处理，焦虑到不吃早餐", weights: { NIU: 3 } },
      { id: "C", text: "截图发朋友圈吐槽'又是想躺平的一天'", weights: { WEMO: 2 } },
      { id: "D", text: "逐个邮件回复，展现专业态度", weights: { BOSS: 2 } },
      { id: "E", text: "设置手机静音，翻个身继续睡，梦里没有KPI", weights: { ZHUS: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_animal_023",
    type: "single",
    text: "同事都在抢购某网红奶茶，尽管你不太感兴趣，你会？",
    options: [
      { id: "A", text: "跟风点一杯，拍照发群说'确实好喝'", weights: { YANG: 4 } },
      { id: "B", text: "先问大家味道怎么样，再决定要不要买", weights: { YANG: 3 } },
      { id: "C", text: "坚定拒绝，表示自己只喝美式", weights: { MAO: 2 } },
      { id: "D", text: "偷偷点别家的，假装自己也参与了", weights: { HU2: 2 } },
      { id: "E", text: "在群里发优惠券链接，号召大家一起薅", weights: { YANG: 3, HU2: 1 } }
    ]
  },
  {
    id: "Q_animal_024",
    type: "single",
    text: "朋友圈里所有人都在晒年度歌单，你的做法是？",
    options: [
      { id: "A", text: "立刻打开音乐软件生成并分享，歌单名跟风取名", weights: { YANG: 4 } },
      { id: "B", text: "私聊朋友问怎么生成，按步骤操作后发圈", weights: { YANG: 3 } },
      { id: "C", text: "觉得无聊，继续刷短视频", weights: { ZHUS: 2 } },
      { id: "D", text: "截图别人的歌单，P成自己的发出去", weights: { HU2: 2 } },
      { id: "E", text: "发一条'大家都在听歌，只有我在听心跳'", weights: { WEMO: 2 } }
    ]
  }
];
