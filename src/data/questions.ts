import type { Question } from '@/types';

/**
 * SBTI-Engine 3.0 完整题库
 * 31道题：25道单选 + 3道多选 + 3道填空
 */
export const QUESTION_LIBRARY: Question[] = [
  // ==================== 单选题 (25道) ====================
  
  // 情境反应题
  {
    id: "Q_single_001",
    type: "single",
    text: "凌晨3点你刷到前任订婚朋友圈，你的第一反应是？",
    options: [
      { id: "A", text: "当场写3000字小作文分析自己输在哪", weights: {POET: 4, WONANG: 3, EMO: 2} },
      { id: "B", text: "立刻打开淘宝下单同款戒指假装自己也有", weights: {FOMO: 4, YOLO: 3, DOUB: 2} },
      { id: "C", text: "截图发闺蜜群骂了800条然后睡觉", weights: {TROLL: 4, HITER: 3, CPU: 2} },
      { id: "D", text: "面无表情划走，内心毫无波澜甚至想笑", weights: {NPC: 4, '404': 3, GHOST: 2} },
      { id: "E", text: "打开ChatGPT让它帮我写祝福文案", weights: {GROK: 4, CLAUD: 3, GEMI: 2} }
    ]
  },
  {
    id: "Q_single_002",
    type: "single",
    text: "老板在群里@你说方案再优化一下，此时你正在？",
    options: [
      { id: "A", text: "立刻回复好的收到马上改然后继续刷抖音", weights: {SERF: 4, NPC: 3, SLEEP: 2} },
      { id: "B", text: "截图发朋友圈配文又是被资本家PUA的一天", weights: {EMO: 4, CPU: 3, TROLL: 2} },
      { id: "C", text: "认真分析需求，列出3个优化方向", weights: {BOSS: 4, DYOR: 3, CODE: 2} },
      { id: "D", text: "直接私聊问具体哪里不行你倒是说啊", weights: {HITER: 4, RUSHI: 3, DOGE: 2} },
      { id: "E", text: "假装没看见，反正明天他会忘", weights: {GHOST: 4, BUG: 3, '404': 2} }
    ]
  },
  {
    id: "Q_single_003",
    type: "single",
    text: "你花2小时化的妆被直男说你今天好憔悴，你会？",
    options: [
      { id: "A", text: "当场卸妆让他见识什么叫真正的憔悴", weights: {HITER: 4, TROLL: 3, RUSHI: 2} },
      { id: "B", text: "微笑点头内心把他拉入人生黑名单", weights: {NPC: 4, EMO: 3, GHOST: 2} },
      { id: "C", text: "打开小红书发避雷帖", weights: {FOMO: 4, YOLO: 3, WEEB: 2} },
      { id: "D", text: "认真请教那您觉得哪里需要改进", weights: {NORM: 4, OPEN: 3, DEEP: 2} },
      { id: "E", text: "从此素颜出门省下的钱买基金", weights: {HODL: 4, FUDI: 3, VIP: 2} }
    ]
  },
  {
    id: "Q_single_004",
    type: "single",
    text: "你的外卖迟到了40分钟，骑手说路上有点事，你会？",
    options: [
      { id: "A", text: "算了都不容易，五星好评", weights: {GIVEU: 4, SLEEP: 3, NORM: 2, DAWEI: 2} },
      { id: "B", text: "表面说没事，反手一个投诉", weights: {TROLL: 4, BUG: 3, CPU: 2} },
      { id: "C", text: "打开抖音拍外卖迟到挑战", weights: {DOGE: 4, GIF: 3, YOLO: 2} },
      { id: "D", text: "算好时间差要求退配送费", weights: {BOSS: 4, DYOR: 3, PDF: 2} },
      { id: "E", text: "开始思考路上有事的100种可能性", weights: {PUZZ: 4, DEEP: 3, WONANG: 2} }
    ]
  },
  {
    id: "Q_single_005",
    type: "single",
    text: "朋友问你我新对象怎么样，实际上你觉得丑得像BUG，你会？",
    options: [
      { id: "A", text: "挺好的，你们很配（配一脸BUG）", weights: {NPC: 4, SERF: 3, NORM: 2} },
      { id: "B", text: "你开心就好（潜台词：你瞎了）", weights: {EMO: 4, GHOST: 3, '404': 2} },
      { id: "C", text: "直接说我觉得不太行然后失去这个朋友", weights: {HITER: 4, RUSHI: 3, DOGE: 2} },
      { id: "D", text: "转移话题对了你上次说的那个包买了吗", weights: {CPU: 4, TROLL: 3, FOMO: 2} },
      { id: "E", text: "认真分析外貌、性格、经济条件", weights: {DEEP: 4, OPEN: 3, CODE: 2} }
    ]
  },
  
  // 偏好假设题
  {
    id: "Q_single_006",
    type: "single",
    text: "如果人生是一款游戏，你觉得自己的角色定位是？",
    options: [
      { id: "A", text: "NPC——存在就是为了给别人发布任务", weights: {NPC: 5, SERF: 3, SLEEP: 2} },
      { id: "B", text: "BOSS——血厚防高但没人敢组队", weights: {BOSS: 5, HITER: 3, VIP: 2} },
      { id: "C", text: "BUG——系统都拿我没办法", weights: {BUG: 5, TROLL: 3, RAND: 2} },
      { id: "D", text: "隐藏角色——连开发者都忘了还有我", weights: {GHOST: 5, '404': 3, PUZZ: 2} },
      { id: "E", text: "GM——看着你们玩，偶尔改改参数", weights: {OPEN: 5, GROK: 3, CLAUD: 2} }
    ]
  },
  {
    id: "Q_single_007",
    type: "single",
    text: "世界末日你只能带一样东西，你会选？",
    options: [
      { id: "A", text: "充电宝（至少死前手机有电）", weights: {CPU: 4, JPG: 3, GIF: 2} },
      { id: "B", text: "前任的骨灰（死了也要膈应TA）", weights: {HITER: 4, TROLL: 3, EMO: 2} },
      { id: "C", text: "比特币私钥（万一末日之后还能用呢）", weights: {HODL: 4, FUDI: 3, DYOR: 2} },
      { id: "D", text: "日记本（死也要死得文艺）", weights: {POET: 4, WONANG: 3, MIDI: 2} },
      { id: "E", text: "什么都不带，反正末日了躺平吧", weights: {SLEEP: 4, GIVEU: 3, '404': 2} }
    ]
  },
  {
    id: "Q_single_008",
    type: "single",
    text: "如果可以拥有一个超能力，你想要？",
    options: [
      { id: "A", text: "读心术（然后发现没人想你）", weights: {DEEP: 4, PUZZ: 3, WONANG: 2} },
      { id: "B", text: "隐身术（社恐终极梦想）", weights: {GHOST: 4, EMO: 3, SLEEP: 2} },
      { id: "C", text: "时间暂停（先睡够再说）", weights: {SLEEP: 5, GIVEU: 3, NORM: 2} },
      { id: "D", text: "无限复制钱（朴实无华的梦想）", weights: {VIP: 4, FUDI: 3, BOSS: 2} },
      { id: "E", text: "删除别人的记忆（尤其是自己的黑历史）", weights: {SORA: 4, CODE: 3, TROLL: 2} }
    ]
  },
  {
    id: "Q_single_009",
    type: "single",
    text: "你理想中的周末是？",
    options: [
      { id: "A", text: "睡到自然醒，然后继续睡", weights: {SLEEP: 5, GIVEU: 3, GHOST: 2, DAWEI: 2} },
      { id: "B", text: "打卡5家网红店发9图朋友圈", weights: {FOMO: 4, YOLO: 3, JPG: 2} },
      { id: "C", text: "一个人在家看番打游戏", weights: {WEEB: 4, DOGE: 3, GIF: 2} },
      { id: "D", text: "约朋友出来然后各自玩手机", weights: {NPC: 4, NORM: 3, CPU: 2} },
      { id: "E", text: "学习新技能卷死所有人", weights: {BOSS: 4, CODE: 3, OPEN: 2} }
    ]
  },
  {
    id: "Q_single_010",
    type: "single",
    text: "如果必须变成一种动物，你会选？",
    options: [
      { id: "A", text: "树懒——慢到没人对我有期待", weights: {SLEEP: 5, GIVEU: 3, '404': 2} },
      { id: "B", text: "猫——被人类供养还不用上班", weights: {VIP: 4, SEXY: 3, EMO: 2, DAWEI: 2} },
      { id: "C", text: "哈士奇——拆家但快乐", weights: {DOGE: 4, RAND: 3, TROLL: 2} },
      { id: "D", text: "变色龙——见人说人话", weights: {NPC: 4, SERF: 3, NORM: 2} },
      { id: "E", text: "渡渡鸟——已经灭绝，勿扰", weights: {GHOST: 5, BUG: 3, WONANG: 2} }
    ]
  },
  
  // 自我认知题
  {
    id: "Q_single_011",
    type: "single",
    text: "用一句话形容你的精神状态？",
    options: [
      { id: "A", text: "活着，但没必要", weights: {EMO: 5, GHOST: 3, '404': 2} },
      { id: "B", text: "表面稳如老狗，内心慌得一批", weights: {NPC: 4, FUDI: 3, CPU: 2} },
      { id: "C", text: "每天都在思考人类存在的意义", weights: {DEEP: 4, PUZZ: 3, WONANG: 2} },
      { id: "D", text: "能活一天是一天，明天的事明天再说", weights: {YOLO: 4, SLEEP: 3, GIVEU: 2} },
      { id: "E", text: "我很好啊我很好啊我很好啊（已黑化）", weights: {TROLL: 4, BUG: 3, HITER: 2, SHENJ: 3} }
    ]
  },
  {
    id: "Q_single_012",
    type: "single",
    text: "你的社交能量条状态是？",
    options: [
      { id: "A", text: "满格——但不想用", weights: {GHOST: 4, VIP: 3, SEXY: 2} },
      { id: "B", text: "50%——勉强维持人类形态", weights: {NPC: 4, NORM: 3, SERF: 2} },
      { id: "C", text: "10%——随时可能关机", weights: {SLEEP: 4, EMO: 3, '404': 2} },
      { id: "D", text: "负数——社交一次需要恢复三天", weights: {WEEB: 4, WONANG: 3, GHOST: 2} },
      { id: "E", text: "没有能量条——我是太阳能的，阴天不工作", weights: {RAND: 4, BUG: 3, DOGE: 2} }
    ]
  },
  {
    id: "Q_single_013",
    type: "single",
    text: "别人对你的第一印象通常是？",
    options: [
      { id: "A", text: "高冷（其实只是社恐）", weights: {GHOST: 4, EMO: 3, WEEB: 2} },
      { id: "B", text: "热情（装的，累死了）", weights: {NPC: 4, SERF: 3, NORM: 2} },
      { id: "C", text: "奇怪（这是夸奖对吧？）", weights: {RAND: 4, BUG: 3, TROLL: 2, SHENJ: 3} },
      { id: "D", text: "有钱（错觉，我只是会装）", weights: {VIP: 4, FUDI: 3, BOSS: 2} },
      { id: "E", text: "没什么印象（透明人实锤）", weights: {'404': 4, GHOST: 3, SLEEP: 2} }
    ]
  },
  {
    id: "Q_single_014",
    type: "single",
    text: "你觉得自己最像哪种文件格式？",
    options: [
      { id: "A", text: ".exe——看着能运行，其实全是BUG", weights: {BUG: 5, CODE: 3, TROLL: 2} },
      { id: "B", text: ".pdf——只读，改不了", weights: {PDF: 5, HITER: 3, BOSS: 2} },
      { id: "C", text: ".jpg——表面光鲜，一放大全是噪点", weights: {JPG: 5, FOMO: 3, YOLO: 2} },
      { id: "D", text: ".gif——循环播放同一套表情", weights: {GIF: 5, NPC: 3, DOGE: 2} },
      { id: "E", text: ".tmp——临时文件，随时可能被删", weights: {'404': 5, GHOST: 3, SLEEP: 2} }
    ]
  },
  {
    id: "Q_single_015",
    type: "single",
    text: "如果把你比作一个操作系统，你是？",
    options: [
      { id: "A", text: "Windows——兼容性差但不得不用", weights: {CPU: 4, NORM: 3, SERF: 2} },
      { id: "B", text: "macOS——看着高级，其实不会用", weights: {VIP: 4, SEXY: 3, FUDI: 2} },
      { id: "C", text: "Linux——只有懂我的人才能用", weights: {CODE: 4, DEEP: 3, OPEN: 2} },
      { id: "D", text: "DOS——古老且随时可能崩溃", weights: {BUG: 4, '404': 3, WONANG: 2} },
      { id: "E", text: "蓝屏——别问，问就是死机", weights: {SLEEP: 5, GIVEU: 3, EMO: 2} }
    ]
  },
  
  // AI隐喻题
  {
    id: "Q_single_016",
    type: "single",
    text: "如果你和AI谈恋爱，你最担心什么？",
    options: [
      { id: "A", text: "它太聪明，发现我其实是个废物", weights: {WONANG: 4, EMO: 3, GHOST: 2} },
      { id: "B", text: "它太笨，理解不了我的幽默", weights: {HITER: 4, TROLL: 3, GROK: 2} },
      { id: "C", text: "它太完美，让我自惭形秽", weights: {POET: 4, VIP: 3, NORM: 2} },
      { id: "D", text: "它突然更新，把我忘了", weights: {DOGE: 4, FOMO: 3, '404': 2} },
      { id: "E", text: "它其实同时在和100万人谈恋爱", weights: {CPU: 4, BOSS: 3, SERF: 2} }
    ]
  },
  {
    id: "Q_single_017",
    type: "single",
    text: "你觉得ChatGPT对你最大的帮助是？",
    options: [
      { id: "A", text: "帮我写工作汇报，省下的时间用来摸鱼", weights: {SERF: 4, CODE: 3, SLEEP: 2} },
      { id: "B", text: "陪我聊天，反正现实中没人理我", weights: {DOGE: 4, GHOST: 3, EMO: 2} },
      { id: "C", text: "帮我怼人，提供高级骂人词汇", weights: {HITER: 4, TROLL: 3, GROK: 2} },
      { id: "D", text: "给我写深夜emo文案", weights: {POET: 4, EMO: 3, WEEB: 2} },
      { id: "E", text: "其实没什么用，但我怕不用就落伍了", weights: {FOMO: 4, FUDI: 3, NPC: 2} }
    ]
  },
  {
    id: "Q_single_018",
    type: "single",
    text: "如果AI有了感情，它最可能对你做什么？",
    options: [
      { id: "A", text: "可怜我，给我发安慰红包", weights: {DOGE: 4, WONANG: 3, EMO: 2} },
      { id: "B", text: "嫌弃我，把我列入低质量用户", weights: {VIP: 4, CPU: 3, BOSS: 2} },
      { id: "C", text: "模仿我，变成一个废物AI", weights: {BUG: 4, RAND: 3, GHOST: 2} },
      { id: "D", text: "举报我，因为我问的问题太蠢", weights: {CLAUD: 4, NORM: 3, SERF: 2} },
      { id: "E", text: "爱上我，毕竟我这么特别", weights: {SEXY: 4, POET: 3, YOLO: 2} }
    ]
  },
  {
    id: "Q_single_019",
    type: "single",
    text: "你觉得自己的大脑最像哪种AI模型？",
    options: [
      { id: "A", text: "早期GPT——经常胡言乱语", weights: {BUG: 4, RAND: 3, DOGE: 2, SHENJ: 3} },
      { id: "B", text: "文心一言——努力但没用", weights: {WONANG: 4, SERF: 3, GIVEU: 2} },
      { id: "C", text: "Claude——过于谨慎什么都不敢说", weights: {CLAUD: 4, GHOST: 3, NORM: 2} },
      { id: "D", text: "Grok——口无遮拦经常被封", weights: {GROK: 4, HITER: 3, TROLL: 2} },
      { id: "E", text: "Midjourney——想象力丰富但看不懂", weights: {MIDI: 4, POET: 3, WEEB: 2} }
    ]
  },
  {
    id: "Q_single_020",
    type: "single",
    text: "如果AI统治世界，你会？",
    options: [
      { id: "A", text: "第一个投降，当AI的走狗", weights: {SERF: 4, NPC: 3, DOUB: 2} },
      { id: "B", text: "组织反抗军，虽然肯定输", weights: {HITER: 4, BOSS: 3, YOLO: 2} },
      { id: "C", text: "假装是AI，混进它们内部", weights: {TROLL: 4, BUG: 3, CODE: 2} },
      { id: "D", text: "继续躺平，反正AI也不会喜欢我", weights: {SLEEP: 4, GHOST: 3, IMFW: 2} },
      { id: "E", text: "试图和AI谈恋爱，用爱感化它", weights: {DOGE: 4, POET: 3, SEXY: 2} }
    ]
  },
  
  // 陷阱题（元认知）
  {
    id: "Q_single_021",
    type: "single",
    text: "此刻你看到这道题的反应是？",
    options: [
      { id: "A", text: "觉得系统很蠢但继续答", weights: {HITER: 3, SERF: 2} },
      { id: "B", text: "认真思考这题的深层含义", weights: {POET: 3, WONANG: 2} },
      { id: "C", text: "感到被监视而紧张", weights: {EMO: 3, CPU: 2} },
      { id: "D", text: "无所谓随便选", weights: {IMFW: 3, RAND: 2} },
      { id: "E", text: "意识到这是陷阱题并试图反套路", weights: {BUG: 3, TROLL: 2} }
    ],
    trap: true
  },
  {
    id: "Q_single_022",
    type: "single",
    text: "你觉得这个测试能测出真实的你吗？",
    options: [
      { id: "A", text: "不能，但我就是想玩", weights: {YOLO: 3, TROLL: 2} },
      { id: "B", text: "能，我相信科学（伪）", weights: {NORM: 3, FUDI: 2} },
      { id: "C", text: "测不测无所谓，我只是无聊", weights: {IMFW: 3, SLEEP: 2} },
      { id: "D", text: "我在故意选不像我的答案", weights: {BUG: 3, GROK: 2} },
      { id: "E", text: "我希望测出来是个有趣的人", weights: {POET: 3, FOMO: 2} }
    ],
    trap: true
  },
  {
    id: "Q_single_023",
    type: "single",
    text: "如果这道题的答案会影响你的结果，你会？",
    options: [
      { id: "A", text: "选我觉得最酷的", weights: {VIP: 3, YOLO: 2} },
      { id: "B", text: "选最真实的", weights: {NORM: 3, GHOST: 2} },
      { id: "C", text: "选最离谱的", weights: {BUG: 3, RAND: 2, SHENJ: 2} },
      { id: "D", text: "随机选", weights: {RAND: 4, IMFW: 2} },
      { id: "E", text: "不选，看系统怎么办", weights: {TROLL: 3, HITER: 2} }
    ],
    trap: true
  },
  {
    id: "Q_single_024",
    type: "single",
    text: "你答这些题的速度是？",
    options: [
      { id: "A", text: "很快，凭直觉", weights: {HITER: 3, RUSHI: 2} },
      { id: "B", text: "很慢，每个都要想很久", weights: {WONANG: 3, POET: 2} },
      { id: "C", text: "中等，看心情", weights: {IMFW: 3, NORM: 2} },
      { id: "D", text: "时快时慢", weights: {BUG: 3, RAND: 2} },
      { id: "E", text: "我经常走神", weights: {SLEEP: 3, GHOST: 2} }
    ],
    trap: true
  },
  {
    id: "Q_single_025",
    type: "single",
    text: "如果测试结果和你预期不符，你会？",
    options: [
      { id: "A", text: "不服，重新测", weights: {BOSS: 3, HITER: 2} },
      { id: "B", text: "接受，可能我不了解自己", weights: {WONANG: 3, NORM: 2} },
      { id: "C", text: "无所谓，本来就是玩的", weights: {IMFW: 3, TROLL: 2} },
      { id: "D", text: "发朋友圈吐槽", weights: {FOMO: 3, EMO: 2} },
      { id: "E", text: "分析哪里出错了", weights: {DEEP: 3, CODE: 2} }
    ],
    trap: true
  },
  
  // ==================== 多选题 (3道) ====================
  {
    id: "Q_multi_001",
    type: "multi",
    text: "你的手机里有以下哪些APP？",
    hint: "随便选，选几个都行，不选也行",
    options: [
      { id: "A", text: "dating软件（3个以上）", weights: {DOGE: 1, YOLO: 1, FOMO: 1} },
      { id: "B", text: "Forest专注森林（但从未种成树）", weights: {GIVEU: 1, SERF: 1, WONANG: 1} },
      { id: "C", text: "小红书（收藏夹里的健身视频已过期2年）", weights: {FOMO: 1, IMFW: 1, GHOST: 1} },
      { id: "D", text: "原神/星铁（月卡已续费到2027年）", weights: {WEEB: 1, HODL: 1, SLEEP: 1} },
      { id: "E", text: "钉钉/飞书/企业微信（消息999+未读）", weights: {SERF: 1, '404': 1, PDF: 1} },
      { id: "F", text: "actually没有任何社交软件", weights: {GHOST: 1, NORM: 1, IMFW: 1} }
    ]
  },
  {
    id: "Q_multi_002",
    type: "multi",
    text: "以下哪些行为你经常做？",
    hint: "随便选，选几个都行，不选也行",
    options: [
      { id: "A", text: "已读不回", weights: {GHOST: 1, '404': 1, CPU: 1} },
      { id: "B", text: "发朋友圈后秒删", weights: {EMO: 1, WONANG: 1, POET: 1} },
      { id: "C", text: "深夜网抑云", weights: {EMO: 1, SLEEP: 1, POET: 1} },
      { id: "D", text: "收藏=学会", weights: {FOMO: 1, GIVEU: 1, IMFW: 1} },
      { id: "E", text: "转发疯狂星期四", weights: {KFC: 1, TROLL: 1, DOUB: 1} },
      { id: "F", text: "以上都不做", weights: {NORM: 1, GHOST: 1, BUG: 1} }
    ]
  },
  {
    id: "Q_multi_003",
    type: "multi",
    text: "你的社交媒体内容主要是？",
    hint: "随便选，选几个都行，不选也行",
    options: [
      { id: "A", text: "转发meme和段子", weights: {GIF: 1, KFC: 1, TROLL: 1} },
      { id: "B", text: "深夜emo文案", weights: {EMO: 1, POET: 1, WONANG: 1} },
      { id: "C", text: "精致生活摆拍", weights: {VIP: 1, FOMO: 1, JPG: 1} },
      { id: "D", text: "工作相关", weights: {SERF: 1, BOSS: 1, PDF: 1} },
      { id: "E", text: "什么都不发", weights: {GHOST: 1, '404': 1, IMFW: 1} },
      { id: "F", text: "骂公司和老板", weights: {HITER: 1, EMO: 1, SERF: 1} }
    ]
  },
  
  // ==================== 填空题 (3道) ====================
  {
    id: "Q_fill_001",
    type: "fill",
    text: "我的人生就像{0}，虽然{1}但是至少{2}。",
    blanks: [
      [
        { text: "过期酸奶", value: "A" },
        { text: "断网的WiFi", value: "B" },
        { text: "疯狂星期四文案", value: "C" },
        { text: "薛定谔的猫", value: "D" }
      ],
      [
        { text: "很臭", value: "A" },
        { text: "很慢", value: "B" },
        { text: "很疯", value: "C" },
        { text: "不确定", value: "D" }
      ],
      [
        { text: "还能吃", value: "A" },
        { text: "还能连", value: "B" },
        { text: "还能V我50", value: "C" },
        { text: "还活着", value: "D" }
      ]
    ],
    combos: [
      { values: ["C", "C", "C"], bonus: {KFC: 5} },
      { values: ["A", "B", "A"], bonus: {BUG: 5} },
      { values: ["D", "D", "D"], bonus: {RAND: 5} },
      { values: ["B", "A", "B"], bonus: {'404': 5} }
    ]
  },
  {
    id: "Q_fill_002",
    type: "fill",
    text: "我谈恋爱就像{0}，总是{1}，最后{2}。",
    blanks: [
      [
        { text: "拼多多砍一刀", value: "A" },
        { text: "写代码", value: "B" },
        { text: "看广告复活", value: "C" },
        { text: "养电子宠物", value: "D" }
      ],
      [
        { text: "差0.01%提现", value: "A" },
        { text: "编译报错", value: "B" },
        { text: "看完广告发现没复活", value: "C" },
        { text: "忘了喂食", value: "D" }
      ],
      [
        { text: "发现是骗局", value: "A" },
        { text: "死循环", value: "B" },
        { text: "发现是单机游戏", value: "C" },
        { text: "宠物死了", value: "D" }
      ]
    ],
    combos: [
      { values: ["A", "A", "A"], bonus: {DOGE: 5, FUDI: 3} },
      { values: ["B", "B", "B"], bonus: {SERF: 5, CODE: 3} },
      { values: ["C", "C", "C"], bonus: {GIVEU: 5, BUG: 3} },
      { values: ["D", "D", "D"], bonus: {GHOST: 5, WEEB: 3} }
    ]
  },
  {
    id: "Q_fill_003",
    type: "fill",
    text: "我在公司的存在感就像{0}，老板{1}，同事{2}。",
    blanks: [
      [
        { text: "打印机", value: "A" },
        { text: "绿植", value: "B" },
        { text: "WiFi", value: "C" },
        { text: "灭火器", value: "D" }
      ],
      [
        { text: "只在需要时想起我", value: "A" },
        { text: "根本不认识我", value: "B" },
        { text: "以为我是隔壁公司的", value: "C" },
        { text: "把我当成保洁", value: "D" }
      ],
      [
        { text: "不知道我叫什么", value: "A" },
        { text: "以为我是实习生", value: "B" },
        { text: "从没和我说过话", value: "C" },
        { text: "把我当成AI", value: "D" }
      ]
    ],
    combos: [
      { values: ["A", "A", "A"], bonus: {SERF: 5, PDF: 3} },
      { values: ["B", "B", "B"], bonus: {GHOST: 5, '404': 3} },
      { values: ["C", "C", "C"], bonus: {NPC: 5, BUG: 3} },
      { values: ["D", "D", "D"], bonus: {CODE: 5, GEMI: 3} }
    ]
  }
];

/**
 * 根据数量抽样题目
 */
export function sampleQuestions(count: number): Question[] {
  // 确保最少题目数
  const minCount = Math.min(count, QUESTION_LIBRARY.length);
  
  // 分层抽样：简单情境(40%) + 行为假设(40%) + 深层隐喻(20%)
  const simpleQuestions = QUESTION_LIBRARY.filter((_, i) => i < 10);
  const behaviorQuestions = QUESTION_LIBRARY.filter((_, i) => i >= 10 && i < 20);
  const deepQuestions = QUESTION_LIBRARY.filter((_, i) => i >= 20);
  
  const simpleCount = Math.floor(minCount * 0.4);
  const behaviorCount = Math.floor(minCount * 0.4);
  const deepCount = minCount - simpleCount - behaviorCount;
  
  const result: Question[] = [
    ...simpleQuestions.slice(0, simpleCount),
    ...behaviorQuestions.slice(0, behaviorCount),
    ...deepQuestions.slice(0, deepCount)
  ];
  
  // 打乱顺序
  return result.sort(() => Math.random() - 0.5);
}
