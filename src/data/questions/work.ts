import type { Question } from '@/types';

export const WORK_QUESTIONS: Question[] = [
  {
    id: "Q_work_001",
    type: "single",
    text: "凌晨2点老板在群里@你说方案再改一版，你会？",
    options: [
      { id: "A", text: "立刻爬起来改", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "已读不回，假装 asleep", weights: { GHOST: 4, IMFW: 3 } },
      { id: "C", text: "截图发朋友圈阴阳", weights: { YINY: 4, CHAO: 3 } },
      { id: "D", text: "回复：好的，然后继续睡", weights: { NPC: 3, XIAN: 3 } },
      { id: "E", text: "直接在群里发辞职信", weights: { HOUJ: 4, BAOZ: 3 } }
    ]
  },
  {
    id: "Q_work_002",
    type: "single",
    text: "周一早上开会，领导说\"我简单说两句\"，结果讲了两个小时，你会？",
    options: [
      { id: "A", text: "认真做笔记，时不时点头", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "打开手机刷招聘软件", weights: { RUSHI: 4, HOUJ: 2 } },
      { id: "C", text: "在笔记本上画领导肖像（带角和尾巴）", weights: { TROLL: 4, MIDI: 3 } },
      { id: "D", text: "灵魂出窍，眼神呆滞但保持微笑", weights: { SLEEP: 4, KONG: 3 } },
      { id: "E", text: "举手打断：领导，我有个会要冲突了", weights: { HITER: 4, BOSS: 3 } }
    ]
  },
  {
    id: "Q_work_003",
    type: "single",
    text: "同事把锅甩给你，当着全组的面说\"这部分是你负责的\"，实际上不是，你会？",
    options: [
      { id: "A", text: "当场翻出聊天记录对线", weights: { HITER: 4, RUSHI: 3 } },
      { id: "B", text: "笑笑不说话，会后写小作文挂他", weights: { YINY: 4, CHAO: 3 } },
      { id: "C", text: "默默接受，反正解释也没用", weights: { NPC: 4, SERF: 3 } },
      { id: "D", text: "直接崩溃大哭让所有人尴尬", weights: { EMO: 4, WEMO: 3 } },
      { id: "E", text: "优雅地说：那我们一起复盘一下时间线", weights: { BOSS: 4, DYOR: 3 } },
      { id: "F", text: "开除老板，让公司上市", weights: { BOSS: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_004",
    type: "single",
    text: "你的KPI定得比上年度高了200%，领导问你有信心吗，你会？",
    options: [
      { id: "A", text: "拍胸脯说保证完成", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "反问：那工资也涨200%吗", weights: { HITER: 4, RUSHI: 3 } },
      { id: "C", text: "当场打开招聘软件刷职位", weights: { GHOST: 4, FOMO: 2 } },
      { id: "D", text: "微笑着说\"我尽量\"然后摆烂", weights: { IMFW: 4, XIAN: 3 } },
      { id: "E", text: "认真拆解目标做可行性分析", weights: { BOSS: 4, CODE: 3 } }
    ]
  },
  {
    id: "Q_work_005",
    type: "single",
    text: "发现同事工资比你高50%但活儿比你少，你会？",
    options: [
      { id: "A", text: "截图保存，找HR讨说法", weights: { BOSS: 4, HITER: 3 } },
      { id: "B", text: "开始明目张胆摸鱼，按薪出工", weights: { IMFW: 4, NPC: 3 } },
      { id: "C", text: "发朋友圈仅对他可见阴阳怪气", weights: { YINY: 4, CHAO: 3 } },
      { id: "D", text: "陷入自我怀疑是不是我不配", weights: { EMO: 4, WONANG: 3 } },
      { id: "E", text: "默默更新简历准备跳槽", weights: { GHOST: 4, RUSHI: 3 } },
      { id: "F", text: "发朋友圈让全公司看到工资条对比", weights: { BIAO: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_006",
    type: "single",
    text: "面试时HR问你接受996吗，你会怎么回答？",
    options: [
      { id: "A", text: "年轻人就该多奋斗，完全接受", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "看加班费给多少", weights: { BOSS: 4, FUDI: 3 } },
      { id: "C", text: "微笑说接受，入职后看情况跑路", weights: { TROLL: 4, YINY: 3 } },
      { id: "D", text: "直接说：不接受，下一家", weights: { HITER: 4, RUSHI: 3 } },
      { id: "E", text: "反问：贵司股东接受996分红吗", weights: { CHAO: 4, HITER: 3 } }
    ]
  },
  {
    id: "Q_work_007",
    type: "single",
    text: "下班前5分钟老板发了个新需求说明天要，你会？",
    options: [
      { id: "A", text: "立刻打开电脑开始肝", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "已读不回，到点拎包走人", weights: { GHOST: 4, IMFW: 3 } },
      { id: "C", text: "回复：好的，但明天下班前给", weights: { BOSS: 4, HITER: 3 } },
      { id: "D", text: "在群里问：这个需求很急吗", weights: { CHAO: 3, YINY: 3 } },
      { id: "E", text: "假装没看到，明天说手机没电了", weights: { NPC: 4, BUG: 3 } },
      { id: "F", text: "执行默认程序，继续打工", weights: { NPC: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_008",
    type: "single",
    text: "你的工位被安排在厕所门口，每天闻消毒水味听冲水声，你会？",
    options: [
      { id: "A", text: "买降噪耳机和香薰强行适应", weights: { NORM: 4, BOSS: 2 } },
      { id: "B", text: "每天带薪拉屎报复性蹲坑", weights: { TROLL: 4, IMFW: 3 } },
      { id: "C", text: "找行政理论要求换位置", weights: { HITER: 4, RUSHI: 3 } },
      { id: "D", text: "把工位布置成厕所主题风", weights: { SHENJ: 4, BUG: 3 } },
      { id: "E", text: "开始怀疑这是逼我离职的阴谋", weights: { CPU: 4, WONANG: 3 } }
    ]
  },
  {
    id: "Q_work_009",
    type: "single",
    text: "年会抽奖你抽到了\"与CEO共进午餐\"，你的真实反应是？",
    options: [
      { id: "A", text: "狂喜，这是表现的好机会", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "表面感恩，内心想死的笑容", weights: { NPC: 4, YINY: 3 } },
      { id: "C", text: "当场把奖品转让出去", weights: { GHOST: 4, IMFW: 3 } },
      { id: "D", text: "在午餐时直接谈加薪", weights: { HITER: 4, BOSS: 3 } },
      { id: "E", text: "食物中毒请假躲过这一劫", weights: { BUG: 4, TROLL: 3 } }
    ]
  },
  {
    id: "Q_work_010",
    type: "single",
    text: "同事在会议室大声吃螺蛳粉，熏得你想吐，你会？",
    options: [
      { id: "A", text: "默默打开窗户透气", weights: { NORM: 4, GHOST: 3 } },
      { id: "B", text: "当众说：这味道有点像厕所炸了", weights: { CHAO: 4, HITER: 3 } },
      { id: "C", text: "第二天带榴莲来以毒攻毒", weights: { TROLL: 4, HOUJ: 3 } },
      { id: "D", text: "发消息给行政投诉", weights: { BOSS: 3, PDF: 3 } },
      { id: "E", text: "戴上口罩继续开会", weights: { NPC: 4, SERF: 3 } },
      { id: "F", text: "先emo三个小时再回复", weights: { WEMO: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_011",
    type: "single",
    text: "领导说\"年轻人不要只看钱，要多学习\"，你会？",
    options: [
      { id: "A", text: "点头称是，内心翻白眼", weights: { NPC: 4, YINY: 3 } },
      { id: "B", text: "反问：那您当年也不看钱吗", weights: { HITER: 4, CHAO: 3 } },
      { id: "C", text: "认真思考他的话有没有道理", weights: { DEEP: 4, NORM: 3 } },
      { id: "D", text: "打开手机银行查看余额确认自己确实需要钱", weights: { FUDI: 4, BOSS: 2 } },
      { id: "E", text: "把这句话截图存进\"老板语录\"文件夹", weights: { CPU: 4, TROLL: 3 } }
    ]
  },
  {
    id: "Q_work_012",
    type: "single",
    text: "你的请假申请被驳回了三次，理由是\"项目太忙\"，你会？",
    options: [
      { id: "A", text: "继续申请第四次", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "直接旷工，爱扣扣吧", weights: { HOUJ: 4, BAOZ: 3 } },
      { id: "C", text: "把工作交接好然后直接走", weights: { RUSHI: 4, HITER: 3 } },
      { id: "D", text: "请病假，去医院开个证明", weights: { TROLL: 4, BOSS: 2 } },
      { id: "E", text: "在工位上哭到领导同意为止", weights: { EMO: 4, WEMO: 3 } },
      { id: "F", text: "原地离职，人间蒸发", weights: { GHOST: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_013",
    type: "single",
    text: "团建安排在周末且必须参加，活动内容还是军训式拓展，你会？",
    options: [
      { id: "A", text: "积极参与，趁机拍领导马屁", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "当天\"发烧\"请假", weights: { BUG: 4, TROLL: 3 } },
      { id: "C", text: "去了但全程摆烂装死", weights: { IMFW: 4, SLEEP: 3 } },
      { id: "D", text: "在群里直接说周末要陪家人", weights: { HITER: 4, NORM: 3 } },
      { id: "E", text: "报名但当天睡过头", weights: { RAND: 4, SLEEP: 3 } },
      { id: "F", text: "请假说自己已经买了去外地的机票", weights: { YOLO: 3, GEZI: 2 } }
    ]
  },
  {
    id: "Q_work_014",
    type: "single",
    text: "发现公司电脑被监控了，包括你的聊天记录和浏览历史，你会？",
    options: [
      { id: "A", text: "立刻卸载所有私人软件", weights: { BOSS: 3, DYOR: 3 } },
      { id: "B", text: "故意搜索\"如何劳动仲裁\"\"哪家公司待遇好\"", weights: { CHAO: 4, HITER: 3 } },
      { id: "C", text: "无所谓，反正我也没秘密", weights: { NPC: 4, IMFW: 3 } },
      { id: "D", text: "感到被侵犯，准备收集证据仲裁", weights: { PDF: 4, BOSS: 3 } },
      { id: "E", text: "开始用公司电脑刷招聘网站", weights: { GHOST: 4, RUSHI: 3 } }
    ]
  },
  {
    id: "Q_work_015",
    type: "single",
    text: "你提交的方案被甲方改了18版后说第一版最好，你会？",
    options: [
      { id: "A", text: "微笑着说\"好的我改回第一版\"", weights: { NPC: 4, SERF: 3 } },
      { id: "B", text: "把18版全部发群里问\"您确定吗\"", weights: { HITER: 4, TROLL: 3 } },
      { id: "C", text: "内心崩溃但表面平静", weights: { EMO: 4, WEMO: 3 } },
      { id: "D", text: "直接说：早干嘛去了", weights: { RUSHI: 4, HOUJ: 3 } },
      { id: "E", text: "早就留好了第一版，一键恢复", weights: { BOSS: 4, CODE: 3 } },
      { id: "F", text: "阴阳怪气到甲方怀疑人生", weights: { CHAO: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_016",
    type: "single",
    text: "同事天天蹭你的车上下班但从不提油钱，你会？",
    options: [
      { id: "A", text: "委婉暗示最近油价涨了", weights: { YINY: 4, BOSS: 2 } },
      { id: "B", text: "直接说：拼车群里的规矩是AA油费", weights: { HITER: 4, BOSS: 3 } },
      { id: "C", text: "找借口说最近不开车了", weights: { TROLL: 4, BUG: 3 } },
      { id: "D", text: "算了，不好意思开口", weights: { WONANG: 4, NPC: 3 } },
      { id: "E", text: "每次放他喜欢的歌折磨他", weights: { SHENJ: 4, CPU: 3 } }
    ]
  },
  {
    id: "Q_work_017",
    type: "single",
    text: "老板在办公室大声打电话骂客户，整个楼层都听得见，你会？",
    options: [
      { id: "A", text: "戴上耳机假装没听见", weights: { GHOST: 4, IMFW: 3 } },
      { id: "B", text: "录音发给闺蜜当八卦素材", weights: { CPU: 4, TROLL: 3 } },
      { id: "C", text: "感到尴尬，想找个地缝钻进去", weights: { EMO: 4, WEMO: 3 } },
      { id: "D", text: "觉得他很有魄力，崇拜", weights: { SERF: 4, BOSS: 2 } },
      { id: "E", text: "在群里发：老板今天火气好大", weights: { YINY: 4, CHAO: 3 } },
      { id: "F", text: "烦了，爷不干了", weights: { RUSHI: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_018",
    type: "single",
    text: "你的年终奖只有一桶食用油，你会？",
    options: [
      { id: "A", text: "感恩公司，至少比没有强", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "拍照发朋友圈配文\"一年的汗水\"", weights: { YINY: 4, CHAO: 3 } },
      { id: "C", text: "当场把油送给保洁阿姨", weights: { HITER: 4, BOSS: 2 } },
      { id: "D", text: "开始更新简历", weights: { GHOST: 4, RUSHI: 3 } },
      { id: "E", text: "在年会上问：请问可以折现吗", weights: { HITER: 4, FUDI: 3 } }
    ]
  },
  {
    id: "Q_work_019",
    type: "single",
    text: "面试被问\"你最大的缺点是什么\"，你会怎么回答？",
    options: [
      { id: "A", text: "我太追求完美了", weights: { NPC: 4, SERF: 3 } },
      { id: "B", text: "我脾气不太好，但这不影响工作", weights: { HITER: 4, HOUJ: 3 } },
      { id: "C", text: "我不擅长撒谎，比如现在这个问题", weights: { CHAO: 4, HITER: 3 } },
      { id: "D", text: "认真思考后给出一个真实的缺点", weights: { NORM: 4, DEEP: 3 } },
      { id: "E", text: "反问：贵司能接受员工有缺点吗", weights: { BOSS: 4, RUSHI: 3 } }
    ]
  },
  {
    id: "Q_work_020",
    type: "single",
    text: "项目上线前夜测试发现重大BUG，全组人都慌了，你会？",
    options: [
      { id: "A", text: "立刻排查定位问题通宵修复", weights: { BOSS: 4, CODE: 3 } },
      { id: "B", text: "说这是测试环境问题，不信再看", weights: { TROLL: 4, BUG: 3 } },
      { id: "C", text: "甩锅给写这个模块的同事", weights: { CPU: 4, YINY: 3 } },
      { id: "D", text: "提议延期上线", weights: { BOSS: 3, PDF: 3 } },
      { id: "E", text: "假装自己也慌了其实早就知道", weights: { NPC: 4, GHOST: 3 } },
      { id: "F", text: "把公司服务器格式化", weights: { HUIM: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_021",
    type: "single",
    text: "领导在朋友圈点赞了你的辞职信截图（你忘了屏蔽他），你会？",
    options: [
      { id: "A", text: "秒删朋友圈然后装死", weights: { GHOST: 4, BUG: 3 } },
      { id: "B", text: "主动找他聊，顺势摊牌", weights: { BOSS: 4, HITER: 3 } },
      { id: "C", text: "把辞职信提前交了", weights: { RUSHI: 4, HOUJ: 3 } },
      { id: "D", text: "解释说发着玩的", weights: { TROLL: 4, YINY: 3 } },
      { id: "E", text: "无所谓，反正本来就要走", weights: { IMFW: 4, XIAN: 3 } }
    ]
  },
  {
    id: "Q_work_022",
    type: "single",
    text: "同事把咖啡洒在了你的键盘上，轻描淡写说了句\"不好意思\"，你会？",
    options: [
      { id: "A", text: "笑着说没关系，心里记仇", weights: { YINY: 4, NPC: 3 } },
      { id: "B", text: "要求她赔一个新键盘", weights: { BOSS: 4, HITER: 3 } },
      { id: "C", text: "把她的咖啡也碰洒", weights: { TROLL: 4, HOUJ: 3 } },
      { id: "D", text: "默默擦干继续工作", weights: { SERF: 4, NPC: 3 } },
      { id: "E", text: "借机申请换台新电脑", weights: { BOSS: 3, DYOR: 3 } },
      { id: "F", text: "在工位上睡着", weights: { SLEEP: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_023",
    type: "single",
    text: "公司要求全员换钉钉头像为证件照，你会？",
    options: [
      { id: "A", text: "乖乖去拍证件照换上", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "P一张证件照但眼睛是闭着的", weights: { SHENJ: 4, TROLL: 3 } },
      { id: "C", text: "拒绝，说侵犯个人形象权", weights: { HITER: 4, BOSS: 3 } },
      { id: "D", text: "用十年前的证件照糊弄", weights: { BUG: 4, IMFW: 3 } },
      { id: "E", text: "把头像P成遗照风格", weights: { EMO: 4, WEMO: 3 } }
    ]
  },
  {
    id: "Q_work_024",
    type: "single",
    text: "你的周报被同事原封不动抄走了，还被领导表扬了，你会？",
    options: [
      { id: "A", text: "在群里@他：这不是我的周报吗", weights: { HITER: 4, RUSHI: 3 } },
      { id: "B", text: "下周在周报里埋雷让他翻车", weights: { CPU: 4, TROLL: 3 } },
      { id: "C", text: "私聊领导说明情况", weights: { BOSS: 4, PDF: 3 } },
      { id: "D", text: "算了，抄我也是认可我", weights: { WONANG: 4, NPC: 3 } },
      { id: "E", text: "把他的错误也一起抄回来", weights: { BUG: 4, SHENJ: 3 } }
    ]
  },
  {
    id: "Q_work_025",
    type: "single",
    text: "老板在群里发了一个50秒的语音，你会？",
    options: [
      { id: "A", text: "立刻转文字看完回复收到", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "等别人回了再跟着回", weights: { NPC: 4, DOUB: 3 } },
      { id: "C", text: "直接回复：老板我在开会不方便听语音", weights: { HITER: 4, TROLL: 3 } },
      { id: "D", text: "根本不听，反正不会是什么好事", weights: { IMFW: 4, GHOST: 3 } },
      { id: "E", text: "耐心听完并做笔记", weights: { NORM: 4, PDF: 3 } },
      { id: "F", text: "选钝角", weights: { DUNJ: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_026",
    type: "single",
    text: "你发现公司的厕所有计时器，超过15分钟就会响警报，你会？",
    options: [
      { id: "A", text: "每次只蹲14分钟", weights: { BOSS: 3, CODE: 3 } },
      { id: "B", text: "把计时器电池抠了", weights: { TROLL: 4, BUG: 3 } },
      { id: "C", text: "去楼下商场厕所", weights: { GHOST: 4, IMFW: 3 } },
      { id: "D", text: "在群里抗议这是侵犯人权", weights: { HITER: 4, RUSHI: 3 } },
      { id: "E", text: "憋着回家再上", weights: { SERF: 4, NPC: 3 } }
    ]
  },
  {
    id: "Q_work_027",
    type: "single",
    text: "同事在电梯里放了个屁然后看你，你会？",
    options: [
      { id: "A", text: "面无表情，假装无事发生", weights: { NPC: 4, GHOST: 3 } },
      { id: "B", text: "直接说：不是我放的", weights: { HITER: 4, RUSHI: 3 } },
      { id: "C", text: "对他露出意味深长的微笑", weights: { CHAO: 4, YINY: 3 } },
      { id: "D", text: "立刻出电梯等下一班", weights: { EMO: 4, WEMO: 3 } },
      { id: "E", text: "在群里描述刚才的遭遇但不点名", weights: { TROLL: 4, CPU: 3 } },
      { id: "F", text: "在会议室当众怒吼", weights: { HOUJ: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_028",
    type: "single",
    text: "你的简历被猎头挂到了招聘网站上，被现同事刷到了，你会？",
    options: [
      { id: "A", text: "解释说随便挂的，不是真要走", weights: { TROLL: 4, YINY: 3 } },
      { id: "B", text: "承认在看机会，无所谓", weights: { BOSS: 4, HITER: 3 } },
      { id: "C", text: "立刻让猎头下架", weights: { GHOST: 4, BUG: 3 } },
      { id: "D", text: "开始考虑是不是真的该走了", weights: { WONANG: 4, RUSHI: 3 } },
      { id: "E", text: "说这是帮朋友挂的", weights: { NPC: 4, SERF: 3 } }
    ]
  },
  {
    id: "Q_work_029",
    type: "single",
    text: "公司规定上班必须穿正装，但你的岗位根本不见客户，你会？",
    options: [
      { id: "A", text: "每天西装革履准时打卡", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "穿拖鞋T恤但带件西装外套应付检查", weights: { TROLL: 4, BUG: 3 } },
      { id: "C", text: "找HR理论这个规定的必要性", weights: { BOSS: 4, HITER: 3 } },
      { id: "D", text: "把正装穿出睡衣感", weights: { IMFW: 4, SLEEP: 3 } },
      { id: "E", text: "网购最便宜的正装应付", weights: { FUDI: 4, DYOR: 3 } }
    ]
  },
  {
    id: "Q_work_030",
    type: "single",
    text: "你被拉进了12个没有意义的群，还都要置顶，你会？",
    options: [
      { id: "A", text: "乖乖置顶，生怕漏消息", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "全部免打扰，谁爱看谁看", weights: { IMFW: 4, GHOST: 3 } },
      { id: "C", text: "在群里问：这个群的目的是什么", weights: { HITER: 4, BOSS: 3 } },
      { id: "D", text: "默默退群，被发现再说", weights: { GHOST: 4, BUG: 3 } },
      { id: "E", text: "把群名改成\"毫无意义群1-12\"", weights: { SHENJ: 4, TROLL: 3 } },
      { id: "F", text: "关我屁事，反正工资照发", weights: { IMFW: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_031",
    type: "single",
    text: "领导说\"这个需求很简单，怎么实现我不管\"，你会？",
    options: [
      { id: "A", text: "默默接下需求熬夜肝出来", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "反问：那您要的是简单还是不管", weights: { CHAO: 4, HITER: 3 } },
      { id: "C", text: "认真评估后说技术上不可行", weights: { BOSS: 4, CODE: 3 } },
      { id: "D", text: "答应下来然后拖到他自己忘了", weights: { TROLL: 4, BUG: 3 } },
      { id: "E", text: "内心崩溃表面说好", weights: { EMO: 4, WEMO: 3 } }
    ]
  },
  {
    id: "Q_work_032",
    type: "single",
    text: "你的加班餐补只有15块钱，楼下最便宜的面都要18块，你会？",
    options: [
      { id: "A", text: "自己贴3块吃碗面", weights: { NORM: 4, SERF: 3 } },
      { id: "B", text: "买15块的泡面凑合", weights: { FUDI: 4, BOSS: 2 } },
      { id: "C", text: "发朋友圈仅财务可见吐槽", weights: { YINY: 4, CHAO: 3 } },
      { id: "D", text: "直接找行政要求涨餐补", weights: { HITER: 4, BOSS: 3 } },
      { id: "E", text: "不吃了，当减肥", weights: { VIP: 4, GHOST: 3 } },
      { id: "F", text: "表面奉承，背地里写小作文挂他", weights: { YINY: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_033",
    type: "single",
    text: "同事问你借2万块钱说周转一下，你会？",
    options: [
      { id: "A", text: "婉拒说最近手头紧", weights: { YINY: 4, BOSS: 2 } },
      { id: "B", text: "直接说：不借，怕你不还", weights: { HITER: 4, RUSHI: 3 } },
      { id: "C", text: "借但让他写借条", weights: { PDF: 4, BOSS: 3 } },
      { id: "D", text: "说要去问老婆/老公意见", weights: { TROLL: 4, BUG: 3 } },
      { id: "E", text: "碍于情面借了然后天天担心", weights: { WONANG: 4, NPC: 3 } }
    ]
  },
  {
    id: "Q_work_034",
    type: "single",
    text: "公司开始实行弹性工作制（只弹下班时间不弹上班），你会？",
    options: [
      { id: "A", text: "乖乖配合，反正大家都这样", weights: { NPC: 4, SERF: 3 } },
      { id: "B", text: "每天早上迟到试探底线", weights: { TROLL: 4, BUG: 3 } },
      { id: "C", text: "在群里阴阳怪气地表扬这个制度", weights: { CHAO: 4, YINY: 3 } },
      { id: "D", text: "向劳动局咨询是否违法", weights: { PDF: 4, DYOR: 3 } },
      { id: "E", text: "开始消极怠工", weights: { IMFW: 4, GHOST: 3 } }
    ]
  },
  {
    id: "Q_work_035",
    type: "single",
    text: "你的PPT被领导批\"没有高度\"，你会？",
    options: [
      { id: "A", text: "加一堆宏大词汇和箭头图", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "反问：您说的高度具体指什么", weights: { HITER: 4, BOSS: 3 } },
      { id: "C", text: "把字号调到最大标题加黑", weights: { SHENJ: 4, TROLL: 3 } },
      { id: "D", text: "找网上的高端模板重做一次", weights: { FOMO: 4, VIP: 3 } },
      { id: "E", text: "内心翻白眼但表面说马上改", weights: { YINY: 4, NPC: 3 } },
      { id: "F", text: "原地离职，人间蒸发", weights: { GHOST: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_036",
    type: "single",
    text: "发现同事在办公室谈恋爱还明目张胆摸鱼，你会？",
    options: [
      { id: "A", text: "默默观察并收集证据", weights: { CPU: 4, TROLL: 3 } },
      { id: "B", text: "直接向领导举报", weights: { BOSS: 3, PDF: 3 } },
      { id: "C", text: "无所谓，又不影响我发工资", weights: { IMFW: 4, GHOST: 3 } },
      { id: "D", text: "感到被狗粮暴击，心里酸", weights: { EMO: 4, WEMO: 3 } },
      { id: "E", text: "也光明正大摸鱼，谁还不会了", weights: { TROLL: 4, BUG: 3 } }
    ]
  },
  {
    id: "Q_work_037",
    type: "single",
    text: "老板让你去接他孩子放学，你会？",
    options: [
      { id: "A", text: "好的老板，马上安排", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "说今晚有重要会议走不开", weights: { TROLL: 4, YINY: 3 } },
      { id: "C", text: "问：这是在我的岗位职责里吗", weights: { HITER: 4, BOSS: 3 } },
      { id: "D", text: "接了但跟老板说打车费报销一下", weights: { FUDI: 4, BOSS: 2 } },
      { id: "E", text: "让同事替你去", weights: { CPU: 4, YINY: 3 } },
      { id: "F", text: "关我屁事，反正工资照发", weights: { IMFW: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_038",
    type: "single",
    text: "你的工龄工资每年只涨50块，连杯奶茶都买不到，你会？",
    options: [
      { id: "A", text: "感恩公司还记得涨薪", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "在朋友圈晒工资条配文\"巨款\"", weights: { YINY: 4, CHAO: 3 } },
      { id: "C", text: "找HR谈涨幅问题", weights: { BOSS: 4, HITER: 3 } },
      { id: "D", text: "开始认真投简历", weights: { GHOST: 4, RUSHI: 3 } },
      { id: "E", text: "无所谓，本来就不指望", weights: { IMFW: 4, XIAN: 3 } }
    ]
  },
  {
    id: "Q_work_039",
    type: "single",
    text: "公司把下午茶从奶茶换成了白开水，说是为了健康，你会？",
    options: [
      { id: "A", text: "感动，公司真为员工着想", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "自己点奶茶并请全组喝", weights: { VIP: 4, BOSS: 3 } },
      { id: "C", text: "在群里发：白开水治不了我的emo", weights: { EMO: 4, WEMO: 3 } },
      { id: "D", text: "质疑行政是不是把预算吞了", weights: { CPU: 4, TROLL: 3 } },
      { id: "E", text: "默默掏出保温杯泡枸杞", weights: { NORM: 4, XIAN: 3 } }
    ]
  },
  {
    id: "Q_work_040",
    type: "single",
    text: "你被要求给前任领导的告别会写发言稿，你会？",
    options: [
      { id: "A", text: "认真写，毕竟是最后一次合作", weights: { NORM: 4, BOSS: 2 } },
      { id: "B", text: "找ChatGPT生成一份官方版", weights: { GROK: 4, SERF: 3 } },
      { id: "C", text: "在稿子里埋几个谐音梗", weights: { SHENJ: 4, TROLL: 3 } },
      { id: "D", text: "敷衍写两百字交差", weights: { IMFW: 4, BUG: 3 } },
      { id: "E", text: "说跟他不熟不了解写不了", weights: { HITER: 4, GHOST: 3 } },
      { id: "F", text: "在会议室当众怒吼", weights: { HOUJ: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_041",
    type: "single",
    text: "同事在共享文档里把你名字写错了三个月，你会？",
    options: [
      { id: "A", text: "每次都默默改过来", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "把她的名字也写错报复", weights: { TROLL: 4, BUG: 3 } },
      { id: "C", text: "在群里@她提醒了十次", weights: { HITER: 4, BOSS: 3 } },
      { id: "D", text: "接受这个新名字，反正也是打工", weights: { IMFW: 4, XIAN: 3 } },
      { id: "E", text: "怀疑她是故意的不尊重我", weights: { CPU: 4, WONANG: 3 } }
    ]
  },
  {
    id: "Q_work_042",
    type: "single",
    text: "你的调休申请被领导说\"最近项目紧\"，但你已经连续加班一个月了，你会？",
    options: [
      { id: "A", text: "继续加班，等项目结束", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "直接说：项目永远紧，我要休息", weights: { HITER: 4, RUSHI: 3 } },
      { id: "C", text: "请病假去医院挂号", weights: { TROLL: 4, BOSS: 2 } },
      { id: "D", text: "在工位上消极怠工", weights: { IMFW: 4, GHOST: 3 } },
      { id: "E", text: "把加班记录整理好找大领导", weights: { PDF: 4, BOSS: 3 } },
      { id: "F", text: "把公司服务器格式化", weights: { HUIM: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_043",
    type: "single",
    text: "面试时HR说\"我们不提倡加班，但大家都自觉\"，你的反应是？",
    options: [
      { id: "A", text: "秒懂，这是996的委婉说法", weights: { CPU: 4, YINY: 3 } },
      { id: "B", text: "追问：那加班费怎么算", weights: { BOSS: 4, HITER: 3 } },
      { id: "C", text: "笑着说我也挺自觉的", weights: { NPC: 4, SERF: 3 } },
      { id: "D", text: "心里拉黑这家公司", weights: { GHOST: 4, RUSHI: 3 } },
      { id: "E", text: "反问：那大家都自觉到几点", weights: { CHAO: 4, HITER: 3 } }
    ]
  },
  {
    id: "Q_work_044",
    type: "single",
    text: "你的电脑蓝屏了，文档没保存，已经写了三个小时，你会？",
    options: [
      { id: "A", text: "冷静重启，看自动恢复有没有", weights: { BOSS: 4, CODE: 3 } },
      { id: "B", text: "一拳砸在桌子上然后发呆", weights: { HOUJ: 4, BAOZ: 3 } },
      { id: "C", text: "去茶水间买杯奶茶压压惊", weights: { DAWEI: 4, YINY: 2 } },
      { id: "D", text: "开始凭记忆重写", weights: { SERF: 4, BOSS: 2 } },
      { id: "E", text: "崩溃发朋友圈哭诉", weights: { EMO: 4, WEMO: 3 } }
    ]
  },
  {
    id: "Q_work_045",
    type: "single",
    text: "老板在你背后站了十分钟看你屏幕，你会？",
    options: [
      { id: "A", text: "立刻切到工作页面假装很忙", weights: { NPC: 4, SERF: 3 } },
      { id: "B", text: "打开招聘网站故意让他看到", weights: { GHOST: 4, TROLL: 3 } },
      { id: "C", text: "回头问：老板您有什么事吗", weights: { BOSS: 4, HITER: 3 } },
      { id: "D", text: "浑身僵硬，打字都在抖", weights: { EMO: 4, WEMO: 3 } },
      { id: "E", text: "继续刷微博假装没发现", weights: { IMFW: 4, BUG: 3 } },
      { id: "F", text: "执行默认程序，继续打工", weights: { NPC: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_046",
    type: "single",
    text: "同事群发结婚请柬但你只和他说过三句话，你会？",
    options: [
      { id: "A", text: "装没看见", weights: { GHOST: 4, IMFW: 3 } },
      { id: "B", text: "随个最低标准份子钱", weights: { FUDI: 4, NORM: 3 } },
      { id: "C", text: "回复恭喜但不出席也不随礼", weights: { HITER: 4, BOSS: 2 } },
      { id: "D", text: "也群发一份请柬还他", weights: { TROLL: 4, SHENJ: 3 } },
      { id: "E", text: "纠结半天最后还是随了", weights: { WONANG: 4, NPC: 3 } }
    ]
  },
  {
    id: "Q_work_047",
    type: "single",
    text: "公司宣布取消双休改为大小周，你会？",
    options: [
      { id: "A", text: "接受，毕竟大环境不好", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "立刻开始投简历", weights: { GHOST: 4, RUSHI: 3 } },
      { id: "C", text: "在群里带头抗议", weights: { HITER: 4, HOUJ: 3 } },
      { id: "D", text: "单休那天全程摸鱼", weights: { IMFW: 4, TROLL: 3 } },
      { id: "E", text: "找律师咨询赔偿标准", weights: { PDF: 4, BOSS: 3 } },
      { id: "F", text: "阴阳怪气到老板怀疑人生", weights: { CHAO: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_048",
    type: "single",
    text: "你的方案被老板在会上当场撕了，你会？",
    options: [
      { id: "A", text: "低头道歉说马上重做", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "捡起碎片问：您具体哪里不满意", weights: { BOSS: 4, HITER: 3 } },
      { id: "C", text: "当场摔门而出", weights: { HOUJ: 4, BAOZ: 3 } },
      { id: "D", text: "面无表情，内心已经离职一百次", weights: { GHOST: 4, IMFW: 3 } },
      { id: "E", text: "会后发朋友圈阴阳怪气", weights: { YINY: 4, CHAO: 3 } }
    ]
  },
  {
    id: "Q_work_049",
    type: "single",
    text: "发现同事用你电脑登微信看黄图，你会？",
    options: [
      { id: "A", text: "立刻改密码并警告他", weights: { BOSS: 4, HITER: 3 } },
      { id: "B", text: "默默退出登录，但再也没让他碰过电脑", weights: { GHOST: 4, YINY: 3 } },
      { id: "C", text: "把这事当八卦讲给全组听", weights: { TROLL: 4, CPU: 3 } },
      { id: "D", text: "在群里@他说：下次记得无痕浏览", weights: { CHAO: 4, SHENJ: 3 } },
      { id: "E", text: "当作没看见，不想惹麻烦", weights: { NPC: 4, IMFW: 3 } }
    ]
  },
  {
    id: "Q_work_050",
    type: "single",
    text: "领导让你周末去帮他搬家，你会？",
    options: [
      { id: "A", text: "好的领导，几点到", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "说周末要回老家看父母", weights: { TROLL: 4, YINY: 3 } },
      { id: "C", text: "问：有加班费或者调休吗", weights: { BOSS: 4, HITER: 3 } },
      { id: "D", text: "直接拒绝，周末是我的私人时间", weights: { HITER: 4, RUSHI: 3 } },
      { id: "E", text: "去了但全程摸鱼", weights: { IMFW: 4, BUG: 3 } },
      { id: "F", text: "开除老板，让公司上市", weights: { BOSS: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_051",
    type: "single",
    text: "你的OKR里有一条\"提升主人翁意识\"，你会怎么理解？",
    options: [
      { id: "A", text: "把它当成公司文化认真践行", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "理解为：多干活少拿钱", weights: { CPU: 4, YINY: 3 } },
      { id: "C", text: "写成\"把公司当成自己家（来摸鱼）\"", weights: { TROLL: 4, IMFW: 3 } },
      { id: "D", text: "直接问领导具体怎么量化", weights: { BOSS: 4, HITER: 3 } },
      { id: "E", text: "无视，OKR本来就是形式主义", weights: { GHOST: 4, XIAN: 3 } }
    ]
  },
  {
    id: "Q_work_052",
    type: "single",
    text: "同事在茶水间说你坏话被你听到了，你会？",
    options: [
      { id: "A", text: "直接走进去对峙", weights: { HITER: 4, HOUJ: 3 } },
      { id: "B", text: "悄悄录下来发给其他人", weights: { CPU: 4, TROLL: 3 } },
      { id: "C", text: "假装没听见，但以后疏远她", weights: { GHOST: 4, YINY: 3 } },
      { id: "D", text: "事后找她单独聊聊", weights: { BOSS: 4, NORM: 3 } },
      { id: "E", text: "加入她们一起吐槽别人", weights: { CPU: 4, CHAO: 3 } },
      { id: "F", text: "选钝角", weights: { DUNJ: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_053",
    type: "single",
    text: "公司把打印机从每层楼一台改成整栋楼一台，你会？",
    options: [
      { id: "A", text: "默默接受，多走几步当运动", weights: { NORM: 4, SERF: 3 } },
      { id: "B", text: "在群里吐槽行政效率低下", weights: { CHAO: 4, HITER: 3 } },
      { id: "C", text: "尽量无纸化办公减少打印", weights: { BOSS: 3, CODE: 3 } },
      { id: "D", text: "打印一次囤一周的用量", weights: { FUDI: 4, BOSS: 2 } },
      { id: "E", text: "无所谓，本来就没什么东西要打印", weights: { IMFW: 4, GHOST: 3 } }
    ]
  },
  {
    id: "Q_work_054",
    type: "single",
    text: "你被要求每天写200字工作日报，你会？",
    options: [
      { id: "A", text: "认真写满200字心得体会", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "用废话文学凑字数", weights: { TROLL: 4, SHENJ: 3 } },
      { id: "C", text: "复制昨天的改个日期", weights: { BUG: 4, IMFW: 3 } },
      { id: "D", text: "质疑这个制度的意义", weights: { BOSS: 4, HITER: 3 } },
      { id: "E", text: "写198字，故意少两个字", weights: { CHAO: 4, HITER: 3 } }
    ]
  },
  {
    id: "Q_work_055",
    type: "single",
    text: "老板喝醉后在群里发了你的丑照，你会？",
    options: [
      { id: "A", text: "私聊他请撤回", weights: { GHOST: 4, WONANG: 3 } },
      { id: "B", text: "在群里发老板的更丑照反击", weights: { HITER: 4, TROLL: 3 } },
      { id: "C", text: "发一堆表情包把消息顶上去", weights: { GIF: 4, SHENJ: 3 } },
      { id: "D", text: "假装没看见，反正大家都喝多了", weights: { IMFW: 4, NPC: 3 } },
      { id: "E", text: "截图留证，明天找他算账", weights: { BOSS: 4, PDF: 3 } },
      { id: "F", text: "发朋友圈让全公司看到", weights: { BIAO: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_056",
    type: "single",
    text: "你的晋升名额被关系户顶了，你会？",
    options: [
      { id: "A", text: "找领导要一个合理的解释", weights: { BOSS: 4, HITER: 3 } },
      { id: "B", text: "默默接受，这就是社会", weights: { XIAN: 4, NPC: 3 } },
      { id: "C", text: "开始摆烂，既然不公就别怪我", weights: { IMFW: 4, GHOST: 3 } },
      { id: "D", text: "在朋友圈发长文控诉职场黑暗", weights: { EMO: 4, YINY: 3 } },
      { id: "E", text: "立刻更新简历跳槽", weights: { GHOST: 4, RUSHI: 3 } }
    ]
  },
  {
    id: "Q_work_057",
    type: "single",
    text: "同事把她的猫带到了工位还让你铲屎，你会？",
    options: [
      { id: "A", text: "欣然接受，猫咪无罪", weights: { NORM: 4, DOGE: 3 } },
      { id: "B", text: "拒绝，这不是我的工作", weights: { HITER: 4, BOSS: 3 } },
      { id: "C", text: "把屎铲到她的键盘上", weights: { TROLL: 4, HOUJ: 3 } },
      { id: "D", text: "向行政举报办公室养宠物", weights: { PDF: 4, BOSS: 3 } },
      { id: "E", text: "默默铲屎，但心里骂了一万句", weights: { YINY: 4, NPC: 3 } },
      { id: "F", text: "先emo三个小时再回复", weights: { WEMO: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_058",
    type: "single",
    text: "面试时被要求做免费测试题写了三个小时，你会？",
    options: [
      { id: "A", text: "认真写完，展现诚意", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "写到一半觉得不值，直接退出", weights: { RUSHI: 4, HITER: 3 } },
      { id: "C", text: "做完后发小红书避雷这家公司", weights: { FOMO: 4, YINY: 3 } },
      { id: "D", text: "把测试题当作品集投给竞品公司", weights: { BOSS: 4, TROLL: 3 } },
      { id: "E", text: "敷衍写完，质量随缘", weights: { IMFW: 4, BUG: 3 } }
    ]
  },
  {
    id: "Q_work_059",
    type: "single",
    text: "公司厕所没纸了你在群里@行政没人理，你会？",
    options: [
      { id: "A", text: "自己带纸以后不再依赖公司", weights: { BOSS: 3, NORM: 3 } },
      { id: "B", text: "每隔五分钟@一次直到有人理", weights: { HITER: 4, BOSS: 3 } },
      { id: "C", text: "用外卖点一包纸巾送到公司", weights: { DAWEI: 4, FUDI: 3 } },
      { id: "D", text: "把空纸筒拍照发大群", weights: { CHAO: 4, SHENJ: 3 } },
      { id: "E", text: "去隔壁公司借纸", weights: { TROLL: 4, BUG: 3 } }
    ]
  },
  {
    id: "Q_work_060",
    type: "single",
    text: "你的离职交接期被延长到三个月，你会？",
    options: [
      { id: "A", text: "接受，站好最后一班岗", weights: { NORM: 4, SERF: 3 } },
      { id: "B", text: "拒绝，劳动法规定最多一个月", weights: { BOSS: 4, PDF: 3 } },
      { id: "C", text: "同意但全程摸鱼", weights: { IMFW: 4, TROLL: 3 } },
      { id: "D", text: "威胁不给离职证明就仲裁", weights: { HITER: 4, BOSS: 3 } },
      { id: "E", text: "每天去公司打卡然后出去玩", weights: { BUG: 4, GHOST: 3 } },
      { id: "F", text: "在工位上睡着", weights: { SLEEP: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_061",
    type: "single",
    text: "领导说\"我当年比你们苦多了\"，你会？",
    options: [
      { id: "A", text: "点头附和，领导说得对", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "反问：那您当年工资多少", weights: { CHAO: 4, HITER: 3 } },
      { id: "C", text: "内心os：时代不同了大哥", weights: { IMFW: 4, CPU: 3 } },
      { id: "D", text: "认真听他讲当年的奋斗史", weights: { NORM: 4, DEEP: 3 } },
      { id: "E", text: "把这段话录下来当asmr", weights: { SHENJ: 4, TROLL: 3 } }
    ]
  },
  {
    id: "Q_work_062",
    type: "single",
    text: "同事把他的外卖垃圾扔你垃圾桶里，你会？",
    options: [
      { id: "A", text: "默默倒掉", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "把垃圾放回他桌上", weights: { HITER: 4, TROLL: 3 } },
      { id: "C", text: "在群里问：谁的螺蛳粉味这么重", weights: { CHAO: 4, YINY: 3 } },
      { id: "D", text: "把自己垃圾也扔他那里", weights: { TROLL: 4, BUG: 3 } },
      { id: "E", text: "从此不再让他靠近你的工位", weights: { GHOST: 4, WONANG: 3 } },
      { id: "F", text: "发朋友圈让全公司看到", weights: { BIAO: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_063",
    type: "single",
    text: "公司要求员工转发朋友圈广告，你会？",
    options: [
      { id: "A", text: "立刻转发并配积极文案", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "仅公司同事可见转发", weights: { TROLL: 4, BUG: 3 } },
      { id: "C", text: "拒绝，朋友圈是我的私人领地", weights: { HITER: 4, BOSS: 3 } },
      { id: "D", text: "假装转发了但设置自己可见", weights: { YINY: 4, GHOST: 3 } },
      { id: "E", text: "转发后秒删说手滑", weights: { BUG: 4, IMFW: 3 } }
    ]
  },
  {
    id: "Q_work_064",
    type: "single",
    text: "你的工资条发现被扣了\"团队建设费\"，但你从没参加过团建，你会？",
    options: [
      { id: "A", text: "找财务问清楚", weights: { BOSS: 4, PDF: 3 } },
      { id: "B", text: "在群里@领导问这是什么费用", weights: { HITER: 4, CHAO: 3 } },
      { id: "C", text: "算了，扣都扣了", weights: { IMFW: 4, NPC: 3 } },
      { id: "D", text: "劳动仲裁走起", weights: { BOSS: 4, PDF: 3 } },
      { id: "E", text: "发小红书吐槽", weights: { FOMO: 4, YINY: 3 } }
    ]
  },
  {
    id: "Q_work_065",
    type: "single",
    text: "老板在年会上表演诗朗诵还让你带头鼓掌，你会？",
    options: [
      { id: "A", text: "热烈鼓掌并拍照发朋友圈", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "象征性拍两下", weights: { IMFW: 4, GHOST: 3 } },
      { id: "C", text: "低头玩手机假装没听见", weights: { BUG: 4, TROLL: 3 } },
      { id: "D", text: "鼓得特别大声吸引全场注意", weights: { SHENJ: 4, TROLL: 3 } },
      { id: "E", text: "在群里发：老板朗诵得真好", weights: { YINY: 4, CHAO: 3 } },
      { id: "F", text: "表面奉承，背地里写小作文挂他", weights: { YINY: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_066",
    type: "single",
    text: "同事离职前把烂摊子全丢给你，交接单上写的是\"待跟进\"，你会？",
    options: [
      { id: "A", text: "默默接手并努力收尾", weights: { SERF: 4, NORM: 3 } },
      { id: "B", text: "找领导说这不是我的职责范围", weights: { BOSS: 4, HITER: 3 } },
      { id: "C", text: "把烂摊子也丢给下一个倒霉蛋", weights: { TROLL: 4, BUG: 3 } },
      { id: "D", text: "摆烂不管，等领导催再说", weights: { IMFW: 4, GHOST: 3 } },
      { id: "E", text: "加回前同事微信让他远程协助", weights: { CPU: 4, YINY: 3 } }
    ]
  },
  {
    id: "Q_work_067",
    type: "single",
    text: "你被要求用个人微信加500个客户，你会？",
    options: [
      { id: "A", text: "立刻执行，为了业绩拼了", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "申请一个工作微信专门加客户", weights: { BOSS: 4, CODE: 3 } },
      { id: "C", text: "拒绝，私人微信是底线", weights: { HITER: 4, RUSHI: 3 } },
      { id: "D", text: "加完客户后发朋友圈分组屏蔽", weights: { YINY: 4, GHOST: 3 } },
      { id: "E", text: "随便加几个凑数，反正没人查", weights: { BUG: 4, IMFW: 3 } },
      { id: "F", text: "开除老板，让公司上市", weights: { BOSS: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_068",
    type: "single",
    text: "公司空调坏了夏天只让开风扇，说是节约成本，你会？",
    options: [
      { id: "A", text: "自带小风扇和冰凉贴", weights: { NORM: 4, BOSS: 2 } },
      { id: "B", text: "每天穿背心裤衩人字拖上班", weights: { IMFW: 4, TROLL: 3 } },
      { id: "C", text: "在群里发中暑科普链接", weights: { CHAO: 4, CPU: 3 } },
      { id: "D", text: "申请居家办公", weights: { GHOST: 4, BUG: 3 } },
      { id: "E", text: "去星巴克蹭空调办公", weights: { VIP: 4, FUDI: 3 } }
    ]
  },
  {
    id: "Q_work_069",
    type: "single",
    text: "你的报销单被财务退了7次，每次理由都不一样，你会？",
    options: [
      { id: "A", text: "耐心按新要求修改第8次", weights: { SERF: 4, NORM: 3 } },
      { id: "B", text: "冲到财务室当面请教", weights: { HITER: 4, BOSS: 3 } },
      { id: "C", text: "不报了，自己认栽", weights: { IMFW: 4, NPC: 3 } },
      { id: "D", text: "把7次驳回记录发领导吐槽", weights: { CHAO: 4, YINY: 3 } },
      { id: "E", text: "怀疑财务是故意的", weights: { CPU: 4, WONANG: 3 } }
    ]
  },
  {
    id: "Q_work_070",
    type: "single",
    text: "领导说\"下班后开个短会，不会太久\"，结果开了三小时，你会？",
    options: [
      { id: "A", text: "全程认真参与并做笔记", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "每隔20分钟看一次手表", weights: { GHOST: 4, IMFW: 3 } },
      { id: "C", text: "直接说：领导我赶末班车先走了", weights: { HITER: 4, RUSHI: 3 } },
      { id: "D", text: "在群里点外卖送到会议室", weights: { DAWEI: 4, TROLL: 3 } },
      { id: "E", text: "灵魂出窍，用微笑面具挂机", weights: { NPC: 4, KONG: 3 } },
      { id: "F", text: "阴阳怪气到老板怀疑人生", weights: { CHAO: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_071",
    type: "single",
    text: "同事在你午休时外放抖音，你会？",
    options: [
      { id: "A", text: "戴上耳塞继续睡", weights: { GHOST: 4, NORM: 3 } },
      { id: "B", text: "直接说：能不能戴耳机", weights: { HITER: 4, BOSS: 3 } },
      { id: "C", text: "放更大声的音乐以暴制暴", weights: { HOUJ: 4, TROLL: 3 } },
      { id: "D", text: "在群里委婉提醒午休时间到了", weights: { YINY: 4, BOSS: 2 } },
      { id: "E", text: "起来刷抖音加入他", weights: { NPC: 4, FOMO: 3 } }
    ]
  },
  {
    id: "Q_work_072",
    type: "single",
    text: "公司把零食柜锁起来说要\"定量供应\"，但钥匙在行政手里，你会？",
    options: [
      { id: "A", text: "按时去排队领零食", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "自己买零食带到公司", weights: { BOSS: 3, NORM: 3 } },
      { id: "C", text: "撬锁（不是真撬，是想）", weights: { BUG: 4, TROLL: 3 } },
      { id: "D", text: "在群里吐槽公司越来越抠", weights: { CHAO: 4, HITER: 3 } },
      { id: "E", text: "无所谓，本来就不吃零食", weights: { IMFW: 4, GHOST: 3 } },
      { id: "F", text: "执行默认程序，继续打工", weights: { NPC: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_073",
    type: "single",
    text: "你的试用期被延长了两个月，理由是\"还需要观察\"，你会？",
    options: [
      { id: "A", text: "加倍努力争取转正", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "要求给出明确的考核标准", weights: { BOSS: 4, PDF: 3 } },
      { id: "C", text: "开始骑驴找马", weights: { GHOST: 4, RUSHI: 3 } },
      { id: "D", text: "怀疑公司在白嫖试用期工资", weights: { CPU: 4, YINY: 3 } },
      { id: "E", text: "摆烂，反正也不会转正", weights: { IMFW: 4, BUG: 3 } }
    ]
  },
  {
    id: "Q_work_074",
    type: "single",
    text: "老板让你在五分钟里讲一下三年的规划，你会？",
    options: [
      { id: "A", text: "前一天晚上熬夜做了50页PPT", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "临场发挥，画大饼谁不会", weights: { TROLL: 4, YINY: 3 } },
      { id: "C", text: "说三年太长，先定季度目标", weights: { BOSS: 4, HITER: 3 } },
      { id: "D", text: "反问：公司三年后还在吗", weights: { CHAO: 4, HITER: 3 } },
      { id: "E", text: "紧张到语无伦次", weights: { EMO: 4, WEMO: 3 } }
    ]
  },
  {
    id: "Q_work_075",
    type: "single",
    text: "同事结婚随份子，你一个月随了5次，工资见底了，你会？",
    options: [
      { id: "A", text: "咬牙继续随，人情世故", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "只随关系好的，其他装不知道", weights: { GHOST: 4, IMFW: 3 } },
      { id: "C", text: "在群里发：这个月份子钱比房租还贵", weights: { CHAO: 4, YINY: 3 } },
      { id: "D", text: "开始群发自己的生日邀请函", weights: { TROLL: 4, SHENJ: 3 } },
      { id: "E", text: "直接说最近手头紧不去了", weights: { HITER: 4, BOSS: 3 } },
      { id: "F", text: "先emo三个小时再回复", weights: { WEMO: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_076",
    type: "single",
    text: "公司把会议室改成了大通铺工位，说是为了促进协作，你会？",
    options: [
      { id: "A", text: "积极适应新环境", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "戴降噪耳机筑起精神结界", weights: { GHOST: 4, WEEB: 3 } },
      { id: "C", text: "在群里吐槽没有隐私", weights: { CHAO: 4, HITER: 3 } },
      { id: "D", text: "申请居家办公", weights: { BOSS: 3, BUG: 3 } },
      { id: "E", text: "开始习惯在噪音中睡觉", weights: { SLEEP: 4, IMFW: 3 } }
    ]
  },
  {
    id: "Q_work_077",
    type: "single",
    text: "你的年会节目被安排跳《感恩的心》，你会？",
    options: [
      { id: "A", text: "认真排练，争取C位", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "故意跳得很难看制造节目效果", weights: { SHENJ: 4, TROLL: 3 } },
      { id: "C", text: "以各种理由推脱", weights: { GHOST: 4, BUG: 3 } },
      { id: "D", text: "直接拒绝参加", weights: { HITER: 4, BOSS: 3 } },
      { id: "E", text: "站在最后一排摸鱼", weights: { IMFW: 4, SLEEP: 3 } },
      { id: "F", text: "原地离职，人间蒸发", weights: { GHOST: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_078",
    type: "single",
    text: "同事用他的MacBook嘲讽你的Windows本，你会？",
    options: [
      { id: "A", text: "笑着说：能干活就行", weights: { NORM: 4, BOSS: 2 } },
      { id: "B", text: "反问：你的Mac能打开这个Excel吗", weights: { CHAO: 4, HITER: 3 } },
      { id: "C", text: "默默记仇，找机会在他电脑上装Windows", weights: { TROLL: 4, BUG: 3 } },
      { id: "D", text: "根本不在意，继续搬砖", weights: { IMFW: 4, GHOST: 3 } },
      { id: "E", text: "回去就跟IT申请换电脑", weights: { BOSS: 4, VIP: 3 } }
    ]
  },
  {
    id: "Q_work_079",
    type: "single",
    text: "领导在群里@全体成员说\"收到请回复\"，你会？",
    options: [
      { id: "A", text: "立刻回复\"收到\"", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "等别人回了再复制粘贴", weights: { DOUB: 4, NPC: 3 } },
      { id: "C", text: "只看不回", weights: { GHOST: 4, IMFW: 3 } },
      { id: "D", text: "回复一个表情包", weights: { GIF: 4, TROLL: 3 } },
      { id: "E", text: "回复\"收到\"但故意打错字", weights: { BUG: 4, SHENJ: 3 } }
    ]
  },
  {
    id: "Q_work_080",
    type: "single",
    text: "你的考勤被HR说迟到一分钟扣半天工资，你会？",
    options: [
      { id: "A", text: "认错认罚，下次提前出门", weights: { SERF: 4, NORM: 3 } },
      { id: "B", text: "据理力争，劳动法不是这样算的", weights: { BOSS: 4, PDF: 3 } },
      { id: "C", text: "既然扣半天那就干脆旷工半天", weights: { TROLL: 4, IMFW: 3 } },
      { id: "D", text: "买一杯奶茶贿赂HR", weights: { DAWEI: 4, YINY: 3 } },
      { id: "E", text: "在群里吐槽公司抠门", weights: { CHAO: 4, HITER: 3 } },
      { id: "F", text: "把公司服务器格式化", weights: { HUIM: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_081",
    type: "single",
    text: "公司要求自带电脑上班还说会补贴（三年了没见到），你会？",
    options: [
      { id: "A", text: "继续带，毕竟工作要用", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "找HR追问补贴什么时候发", weights: { HITER: 4, BOSS: 3 } },
      { id: "C", text: "不带了，用公司配的老爷机", weights: { TROLL: 4, BUG: 3 } },
      { id: "D", text: "在群里发：三年前的补贴还在路上吗", weights: { CHAO: 4, YINY: 3 } },
      { id: "E", text: "默默忍受，不想惹事", weights: { NPC: 4, WONANG: 3 } }
    ]
  },
  {
    id: "Q_work_082",
    type: "single",
    text: "同事把她的孩子带到会议室写作业，还让你帮忙辅导，你会？",
    options: [
      { id: "A", text: "热情帮忙，顺便套近乎", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "说自己也不会", weights: { TROLL: 4, BUG: 3 } },
      { id: "C", text: "委婉拒绝，我还有工作", weights: { BOSS: 4, HITER: 3 } },
      { id: "D", text: "把孩子教错了让她明天被老师骂", weights: { SHENJ: 4, HOUJ: 3 } },
      { id: "E", text: "内心崩溃但面带微笑辅导", weights: { EMO: 4, WEMO: 3 } },
      { id: "F", text: "烦了，爷不干了", weights: { RUSHI: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_083",
    type: "single",
    text: "你的辞职信被领导批复\"再考虑考虑\"，你会？",
    options: [
      { id: "A", text: "答应再考虑，然后继续走流程", weights: { BOSS: 3, NORM: 3 } },
      { id: "B", text: "态度坚决，去意已决", weights: { HITER: 4, RUSHI: 3 } },
      { id: "C", text: "真的开始考虑是不是太冲动", weights: { WONANG: 4, EMO: 3 } },
      { id: "D", text: "以请病假的方式表达决心", weights: { TROLL: 4, BUG: 3 } },
      { id: "E", text: "把辞职信抄送到全公司邮箱", weights: { HOUJ: 4, BAOZ: 3 } }
    ]
  },
  {
    id: "Q_work_084",
    type: "single",
    text: "老板让你P一张他和马云的合影，你会？",
    options: [
      { id: "A", text: "认真P到以假乱真", weights: { SERF: 4, MIDI: 3 } },
      { id: "B", text: "P得很假但他说像就行", weights: { TROLL: 4, BUG: 3 } },
      { id: "C", text: "说不会P图推掉", weights: { GHOST: 4, IMFW: 3 } },
      { id: "D", text: "P成他和你的合影", weights: { SHENJ: 4, HITER: 3 } },
      { id: "E", text: "建议他去找专业设计师", weights: { BOSS: 4, NORM: 3 } }
    ]
  },
  {
    id: "Q_work_085",
    type: "single",
    text: "公司饮水机里的水有异味行政说能喝，你会？",
    options: [
      { id: "A", text: "自己买矿泉水", weights: { BOSS: 3, NORM: 3 } },
      { id: "B", text: "在群里发水质检测报告", weights: { PDF: 4, BOSS: 3 } },
      { id: "C", text: "直接说：你先喝一口给我看", weights: { HITER: 4, CHAO: 3 } },
      { id: "D", text: "偷偷倒掉换一桶新的", weights: { GHOST: 4, TROLL: 3 } },
      { id: "E", text: "忍着喝，反正喝不死", weights: { NPC: 4, SERF: 3 } },
      { id: "F", text: "选钝角", weights: { DUNJ: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_086",
    type: "single",
    text: "你的绩效被打了C理由是\"不够狼性\"，你会？",
    options: [
      { id: "A", text: "请教领导如何培养狼性", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "反问：那狼性给狼的工资吗", weights: { CHAO: 4, HITER: 3 } },
      { id: "C", text: "接受现实，反正C也能拿奖金", weights: { IMFW: 4, NPC: 3 } },
      { id: "D", text: "在下一次会议上嗷嗷叫两声", weights: { SHENJ: 4, TROLL: 3 } },
      { id: "E", text: "开始到处投简历", weights: { GHOST: 4, RUSHI: 3 } }
    ]
  },
  {
    id: "Q_work_087",
    type: "single",
    text: "同事离职后还在群里教你做人，你会？",
    options: [
      { id: "A", text: "默默潜水看他表演", weights: { GHOST: 4, IMFW: 3 } },
      { id: "B", text: "怼他：你都离职了还操什么心", weights: { HITER: 4, RUSHI: 3 } },
      { id: "C", text: "把他踢出群", weights: { BOSS: 4, HOUJ: 3 } },
      { id: "D", text: "认真听取他的建议", weights: { NORM: 4, DEEP: 3 } },
      { id: "E", text: "截图发给现领导说他挖墙脚", weights: { CPU: 4, YINY: 3 } },
      { id: "F", text: "在会议室当众怒吼", weights: { HOUJ: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_088",
    type: "single",
    text: "你的工位被新来的关系户占了，行政让你搬去厕所旁边，你会？",
    options: [
      { id: "A", text: "默默收拾东西搬走", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "找行政理论凭什么", weights: { HITER: 4, BOSS: 3 } },
      { id: "C", text: "把关系户的东西扔出去", weights: { HOUJ: 4, BAOZ: 3 } },
      { id: "D", text: "申请居家办公", weights: { GHOST: 4, BUG: 3 } },
      { id: "E", text: "在新工位摆满榴莲", weights: { TROLL: 4, SHENJ: 3 } }
    ]
  },
  {
    id: "Q_work_089",
    type: "single",
    text: "老板在群里发红包，你抢到了0.01元，你会？",
    options: [
      { id: "A", text: "回复：谢谢老板的大红包", weights: { SERF: 4, YINY: 3 } },
      { id: "B", text: "截图发朋友圈配文\"巨款\"", weights: { CHAO: 4, SHENJ: 3 } },
      { id: "C", text: "假装没抢到", weights: { GHOST: 4, IMFW: 3 } },
      { id: "D", text: "把红包发回去说心意领了", weights: { HITER: 4, BOSS: 3 } },
      { id: "E", text: "在群里发谢谢老板的表情包刷屏", weights: { GIF: 4, TROLL: 3 } }
    ]
  },
  {
    id: "Q_work_090",
    type: "single",
    text: "公司把卫生纸从三层换成了单层，说是环保，你会？",
    options: [
      { id: "A", text: "自己带纸", weights: { NORM: 4, BOSS: 2 } },
      { id: "B", text: "在群里发：环保也不能抠屁股", weights: { CHAO: 4, HITER: 3 } },
      { id: "C", text: "每次抽双份补偿自己", weights: { FUDI: 4, TROLL: 3 } },
      { id: "D", text: "无所谓，反正不用公司的纸", weights: { IMFW: 4, GHOST: 3 } },
      { id: "E", text: "把单层纸叠成三层用", weights: { BOSS: 3, CODE: 3 } },
      { id: "F", text: "关我屁事，反正工资照发", weights: { IMFW: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_091",
    type: "single",
    text: "你的日报被领导在群里当众朗读，还点评了几句，你会？",
    options: [
      { id: "A", text: "感到荣幸，这是领导的重视", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "尴尬到脚趾抠地", weights: { EMO: 4, WEMO: 3 } },
      { id: "C", text: "从此在日报里写废话文学", weights: { TROLL: 4, SHENJ: 3 } },
      { id: "D", text: "要求领导以后私聊点评", weights: { BOSS: 4, HITER: 3 } },
      { id: "E", text: "把日报写得像网络小说吸引他", weights: { POET: 4, WEEB: 3 } }
    ]
  },
  {
    id: "Q_work_092",
    type: "single",
    text: "同事问你借会员账号还改了你密码，你会？",
    options: [
      { id: "A", text: "直接要回密码并警告", weights: { BOSS: 4, HITER: 3 } },
      { id: "B", text: "修改密码但不告诉他", weights: { GHOST: 4, YINY: 3 } },
      { id: "C", text: "在群里@他问密码是多少", weights: { CHAO: 4, TROLL: 3 } },
      { id: "D", text: "算了，账号不要了", weights: { IMFW: 4, GIVEU: 3 } },
      { id: "E", text: "把他看过的记录发朋友圈", weights: { CPU: 4, SHENJ: 3 } },
      { id: "F", text: "表面奉承，背地里写小作文挂他", weights: { YINY: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_093",
    type: "single",
    text: "领导说\"这个岗位有很多人排队想进来\"，你会？",
    options: [
      { id: "A", text: "感恩自己还有这份工作", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "心想：那你让他们进来啊", weights: { IMFW: 4, CHAO: 3 } },
      { id: "C", text: "说：那正好我可以休个假", weights: { HITER: 4, TROLL: 3 } },
      { id: "D", text: "开始怀疑自己的不可替代性", weights: { WONANG: 4, EMO: 3 } },
      { id: "E", text: "认真思考是不是真的有很多人排队", weights: { PUZZ: 4, DEEP: 3 } }
    ]
  },
  {
    id: "Q_work_094",
    type: "single",
    text: "公司把年终奖拆成了12个月发，说是为了稳定现金流，你会？",
    options: [
      { id: "A", text: "接受，反正总额不变", weights: { NPC: 4, NORM: 3 } },
      { id: "B", text: "算一下折现损失了多少利息", weights: { FUDI: 4, BOSS: 3 } },
      { id: "C", text: "怀疑公司在变相降薪", weights: { CPU: 4, YINY: 3 } },
      { id: "D", text: "在群里发：这是P2P的玩法吗", weights: { CHAO: 4, HITER: 3 } },
      { id: "E", text: "开始计划每个月怎么花这\"/12\"", weights: { FUDI: 4, DYOR: 3 } }
    ]
  },
  {
    id: "Q_work_095",
    type: "single",
    text: "你的外卖被偷了查监控发现是同事，你会？",
    options: [
      { id: "A", text: "当面质问并要求赔偿", weights: { BOSS: 4, HITER: 3 } },
      { id: "B", text: "在群里发：谁拿错了外卖请还回来", weights: { YINY: 4, BOSS: 2 } },
      { id: "C", text: "下次点变态辣外卖引蛇出洞", weights: { TROLL: 4, CPU: 3 } },
      { id: "D", text: "默默再点一份，但心里记恨", weights: { GHOST: 4, WONANG: 3 } },
      { id: "E", text: "把监控截图发大群", weights: { CHAO: 4, SHENJ: 3 } },
      { id: "F", text: "原地离职，人间蒸发", weights: { GHOST: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_096",
    type: "single",
    text: "老板让你给他的抖音账号点赞评论，还会检查，你会？",
    options: [
      { id: "A", text: "每天定时点赞评论一条龙", weights: { SERF: 4, NPC: 3 } },
      { id: "B", text: "用小号敷衍一下", weights: { BUG: 4, TROLL: 3 } },
      { id: "C", text: "拒绝，说不用抖音", weights: { GHOST: 4, HITER: 3 } },
      { id: "D", text: "评论写得很敷衍但数量很多", weights: { IMFW: 4, SHENJ: 3 } },
      { id: "E", text: "在他视频下问：老板工资什么时候发", weights: { CHAO: 4, HITER: 3 } }
    ]
  },
  {
    id: "Q_work_097",
    type: "single",
    text: "同事在Excel里写你的坏话忘关共享了，全组都看得见，你会？",
    options: [
      { id: "A", text: "在表格里回复一条更狠的", weights: { HITER: 4, TROLL: 3 } },
      { id: "B", text: "截图保存当证据", weights: { BOSS: 4, PDF: 3 } },
      { id: "C", text: "假装没看见", weights: { GHOST: 4, IMFW: 3 } },
      { id: "D", text: "私聊她：共享还开着呢", weights: { BOSS: 3, YINY: 3 } },
      { id: "E", text: "把表格发到大群让大家评理", weights: { HOUJ: 4, BAOZ: 3 } },
      { id: "F", text: "表面奉承，背地里写小作文挂他", weights: { YINY: 5 }, hidden: true }
    ]
  },
  {
    id: "Q_work_098",
    type: "single",
    text: "你的工牌照片被P成了遗照风格发到了群里，你会？",
    options: [
      { id: "A", text: "哈哈大笑并保存原图", weights: { SHENJ: 4, TROLL: 3 } },
      { id: "B", text: "要求对方道歉并撤回", weights: { BOSS: 4, HITER: 3 } },
      { id: "C", text: "把对方的照片也P成遗照反击", weights: { HITER: 4, HOUJ: 3 } },
      { id: "D", text: "觉得晦气，一整天都不舒服", weights: { EMO: 4, WEMO: 3 } },
      { id: "E", text: "当作黑色幽默发给朋友看", weights: { CHAO: 4, GHOST: 3 } }
    ]
  },
  {
    id: "Q_work_099",
    type: "single",
    text: "公司宣布今年不调薪但会\"优化\"部分人，你会？",
    options: [
      { id: "A", text: "加倍努力争取不被优化", weights: { SERF: 4, BOSS: 2 } },
      { id: "B", text: "开始悄悄找下家", weights: { GHOST: 4, RUSHI: 3 } },
      { id: "C", text: "在群里问：优化的标准是什么", weights: { BOSS: 4, HITER: 3 } },
      { id: "D", text: "希望被优化拿N+1", weights: { FUDI: 4, IMFW: 3 } },
      { id: "E", text: "把劳动法条款发在群里", weights: { PDF: 4, CHAO: 3 } }
    ]
  },
  {
    id: "Q_work_100",
    type: "single",
    text: "如果明天是世界末日但你今天还要上最后一天班，你会怎么度过？",
    options: [
      { id: "A", text: "认真完成所有交接工作", weights: { SERF: 4, NORM: 3 } },
      { id: "B", text: "把电脑里的私人文件删干净", weights: { GHOST: 4, BOSS: 2 } },
      { id: "C", text: "对所有人说真话，包括老板", weights: { HITER: 4, RUSHI: 3 } },
      { id: "D", text: "在会议室播放自己的离职vlog", weights: { TROLL: 4, SHENJ: 3 } },
      { id: "E", text: "睡到自然醒，反正都是最后一天", weights: { SLEEP: 4, IMFW: 3 } },
      { id: "F", text: "开除老板，让公司上市", weights: { BOSS: 5 }, hidden: true }
    ]
  }
];