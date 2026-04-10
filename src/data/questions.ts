import type { Question } from '@/types';

/**
 * SBTI-Engine 3.0 完整题库
 * 113道题：93道单选 + 10道多选 + 10道填空
 */
export const QUESTION_LIBRARY: Question[] = [
  // ==================== 单选题 (25道) ====================

  // 情境反应题
  {
    id: "Q_single_001",
    type: "single",
    text: "凌晨3点你刷到前任订婚朋友圈，你的第一反应是？",
    options: [
      { id: "A", text: "当场写3000字小作文分析自己输在哪", weights: { POET: 4, WONANG: 3, EMO: 2 } },
      { id: "B", text: "立刻打开淘宝下单同款戒指假装自己也有", weights: { FOMO: 4, YOLO: 3, DOUB: 2 } },
      { id: "C", text: "截图发闺蜜群骂了800条然后睡觉", weights: { TROLL: 4, HITER: 3, CPU: 2 } },
      { id: "D", text: "面无表情划走，内心毫无波澜甚至想笑", weights: { NPC: 4, '404': 3, GHOST: 2 } },
      { id: "E", text: "打开ChatGPT让它帮我写祝福文案", weights: { GROK: 4, CLAUD: 3, GEMI: 2 } }
    ]
  },
  {
    id: "Q_single_002",
    type: "single",
    text: "老板在群里@你说方案再优化一下，此时你正在？",
    options: [
      { id: "A", text: "立刻回复好的收到马上改然后继续刷抖音", weights: { SERF: 4, NPC: 3, SLEEP: 2 } },
      { id: "B", text: "截图发朋友圈配文又是被资本家PUA的一天", weights: { EMO: 4, CPU: 3, TROLL: 2 } },
      { id: "C", text: "认真分析需求，列出3个优化方向", weights: { BOSS: 4, DYOR: 3, CODE: 2 } },
      { id: "D", text: "直接私聊问具体哪里不行你倒是说啊", weights: { HITER: 4, RUSHI: 3, DOGE: 2 } },
      { id: "E", text: "假装没看见，反正明天他会忘", weights: { GHOST: 4, BUG: 3, '404': 2 } }
    ]
  },
  {
    id: "Q_single_003",
    type: "single",
    text: "你花2小时化的妆被直男说你今天好憔悴，你会？",
    options: [
      { id: "A", text: "当场卸妆让他见识什么叫真正的憔悴", weights: { HITER: 4, TROLL: 3, RUSHI: 2 } },
      { id: "B", text: "微笑点头内心把他拉入人生黑名单", weights: { NPC: 4, EMO: 3, GHOST: 2 } },
      { id: "C", text: "打开小红书发避雷帖", weights: { FOMO: 4, YOLO: 3, WEEB: 2 } },
      { id: "D", text: "认真请教那您觉得哪里需要改进", weights: { NORM: 4, OPEN: 3, DEEP: 2 } },
      { id: "E", text: "从此素颜出门省下的钱买基金", weights: { HODL: 4, FUDI: 3, VIP: 2 } }
    ]
  },
  {
    id: "Q_single_004",
    type: "single",
    text: "你的外卖迟到了40分钟，骑手说路上有点事，你会？",
    options: [
      { id: "A", text: "算了都不容易，五星好评", weights: { GIVEU: 4, SLEEP: 3, NORM: 2, DAWEI: 2 } },
      { id: "B", text: "表面说没事，反手一个投诉", weights: { TROLL: 4, BUG: 3, CPU: 2 } },
      { id: "C", text: "打开抖音拍外卖迟到挑战", weights: { DOGE: 4, GIF: 3, YOLO: 2 } },
      { id: "D", text: "算好时间差要求退配送费", weights: { BOSS: 4, DYOR: 3, PDF: 2 } },
      { id: "E", text: "开始思考路上有事的100种可能性", weights: { PUZZ: 4, DEEP: 3, WONANG: 2 } }
    ]
  },
  {
    id: "Q_single_005",
    type: "single",
    text: "朋友问你我新对象怎么样，实际上你觉得丑得像BUG，你会？",
    options: [
      { id: "A", text: "挺好的，你们很配（配一脸BUG）", weights: { NPC: 4, SERF: 3, NORM: 2 } },
      { id: "B", text: "你开心就好（潜台词：你瞎了）", weights: { EMO: 4, GHOST: 3, '404': 2 } },
      { id: "C", text: "直接说我觉得不太行然后失去这个朋友", weights: { HITER: 4, RUSHI: 3, DOGE: 2 } },
      { id: "D", text: "转移话题对了你上次说的那个包买了吗", weights: { CPU: 4, TROLL: 3, FOMO: 2 } },
      { id: "E", text: "认真分析外貌、性格、经济条件", weights: { DEEP: 4, OPEN: 3, CODE: 2 } }
    ]
  },

  // 偏好假设题
  {
    id: "Q_single_006",
    type: "single",
    text: "如果人生是一款游戏，你觉得自己的角色定位是？",
    options: [
      { id: "A", text: "NPC——存在就是为了给别人发布任务", weights: { NPC: 5, SERF: 3, SLEEP: 2 } },
      { id: "B", text: "BOSS——血厚防高但没人敢组队", weights: { BOSS: 5, HITER: 3, VIP: 2 } },
      { id: "C", text: "BUG——系统都拿我没办法", weights: { BUG: 5, TROLL: 3, RAND: 2 } },
      { id: "D", text: "隐藏角色——连开发者都忘了还有我", weights: { GHOST: 5, '404': 3, PUZZ: 2 } },
      { id: "E", text: "GM——看着你们玩，偶尔改改参数", weights: { OPEN: 5, GROK: 3, CLAUD: 2 } }
    ]
  },
  {
    id: "Q_single_007",
    type: "single",
    text: "世界末日你只能带一样东西，你会选？",
    options: [
      { id: "A", text: "充电宝（至少死前手机有电）", weights: { CPU: 4, JPG: 3, GIF: 2 } },
      { id: "B", text: "前任的骨灰（死了也要膈应TA）", weights: { HITER: 4, TROLL: 3, EMO: 2 } },
      { id: "C", text: "比特币私钥（万一末日之后还能用呢）", weights: { HODL: 4, FUDI: 3, DYOR: 2 } },
      { id: "D", text: "日记本（死也要死得文艺）", weights: { POET: 4, WONANG: 3, MIDI: 2 } },
      { id: "E", text: "什么都不带，反正末日了躺平吧", weights: { SLEEP: 4, GIVEU: 3, '404': 2 } }
    ]
  },
  {
    id: "Q_single_008",
    type: "single",
    text: "如果可以拥有一个超能力，你想要？",
    options: [
      { id: "A", text: "读心术（然后发现没人想你）", weights: { DEEP: 4, PUZZ: 3, WONANG: 2 } },
      { id: "B", text: "隐身术（社恐终极梦想）", weights: { GHOST: 4, EMO: 3, SLEEP: 2 } },
      { id: "C", text: "时间暂停（先睡够再说）", weights: { SLEEP: 5, GIVEU: 3, NORM: 2 } },
      { id: "D", text: "无限复制钱（朴实无华的梦想）", weights: { VIP: 4, FUDI: 3, BOSS: 2 } },
      { id: "E", text: "删除别人的记忆（尤其是自己的黑历史）", weights: { SORA: 4, CODE: 3, TROLL: 2 } }
    ]
  },
  {
    id: "Q_single_009",
    type: "single",
    text: "你理想中的周末是？",
    options: [
      { id: "A", text: "睡到自然醒，然后继续睡", weights: { SLEEP: 5, GIVEU: 3, GHOST: 2, DAWEI: 2 } },
      { id: "B", text: "打卡5家网红店发9图朋友圈", weights: { FOMO: 4, YOLO: 3, JPG: 2 } },
      { id: "C", text: "一个人在家看番打游戏", weights: { WEEB: 4, DOGE: 3, GIF: 2 } },
      { id: "D", text: "约朋友出来然后各自玩手机", weights: { NPC: 4, NORM: 3, CPU: 2 } },
      { id: "E", text: "学习新技能卷死所有人", weights: { BOSS: 4, CODE: 3, OPEN: 2 } }
    ]
  },
  {
    id: "Q_single_010",
    type: "single",
    text: "如果必须变成一种动物，你会选？",
    options: [
      { id: "A", text: "树懒——慢到没人对我有期待", weights: { SLEEP: 5, GIVEU: 3, '404': 2 } },
      { id: "B", text: "猫——被人类供养还不用上班", weights: { VIP: 4, SEXY: 3, EMO: 2, DAWEI: 2 } },
      { id: "C", text: "哈士奇——拆家但快乐", weights: { DOGE: 4, RAND: 3, TROLL: 2 } },
      { id: "D", text: "变色龙——见人说人话", weights: { NPC: 4, SERF: 3, NORM: 2 } },
      { id: "E", text: "渡渡鸟——已经灭绝，勿扰", weights: { GHOST: 5, BUG: 3, WONANG: 2 } }
    ]
  },

  // 自我认知题
  {
    id: "Q_single_011",
    type: "single",
    text: "用一句话形容你的精神状态？",
    options: [
      { id: "A", text: "活着，但没必要", weights: { EMO: 5, GHOST: 3, '404': 2 } },
      { id: "B", text: "表面稳如老狗，内心慌得一批", weights: { NPC: 4, FUDI: 3, CPU: 2 } },
      { id: "C", text: "每天都在思考人类存在的意义", weights: { DEEP: 4, PUZZ: 3, WONANG: 2 } },
      { id: "D", text: "能活一天是一天，明天的事明天再说", weights: { YOLO: 4, SLEEP: 3, GIVEU: 2 } },
      { id: "E", text: "我很好啊我很好啊我很好啊（已黑化）", weights: { TROLL: 4, BUG: 3, HITER: 2, SHENJ: 3 } }
    ]
  },
  {
    id: "Q_single_012",
    type: "single",
    text: "你的社交能量条状态是？",
    options: [
      { id: "A", text: "满格——但不想用", weights: { GHOST: 4, VIP: 3, SEXY: 2 } },
      { id: "B", text: "50%——勉强维持人类形态", weights: { NPC: 4, NORM: 3, SERF: 2 } },
      { id: "C", text: "10%——随时可能关机", weights: { SLEEP: 4, EMO: 3, '404': 2 } },
      { id: "D", text: "负数——社交一次需要恢复三天", weights: { WEEB: 4, WONANG: 3, GHOST: 2 } },
      { id: "E", text: "没有能量条——我是太阳能的，阴天不工作", weights: { RAND: 4, BUG: 3, DOGE: 2 } }
    ]
  },
  {
    id: "Q_single_013",
    type: "single",
    text: "别人对你的第一印象通常是？",
    options: [
      { id: "A", text: "高冷（其实只是社恐）", weights: { GHOST: 4, EMO: 3, WEEB: 2 } },
      { id: "B", text: "热情（装的，累死了）", weights: { NPC: 4, SERF: 3, NORM: 2 } },
      { id: "C", text: "奇怪（这是夸奖对吧？）", weights: { RAND: 4, BUG: 3, TROLL: 2, SHENJ: 3 } },
      { id: "D", text: "有钱（错觉，我只是会装）", weights: { VIP: 4, FUDI: 3, BOSS: 2 } },
      { id: "E", text: "没什么印象（透明人实锤）", weights: { '404': 4, GHOST: 3, SLEEP: 2 } }
    ]
  },
  {
    id: "Q_single_014",
    type: "single",
    text: "你觉得自己最像哪种文件格式？",
    options: [
      { id: "A", text: ".exe——看着能运行，其实全是BUG", weights: { BUG: 5, CODE: 3, TROLL: 2 } },
      { id: "B", text: ".pdf——只读，改不了", weights: { PDF: 5, HITER: 3, BOSS: 2 } },
      { id: "C", text: ".jpg——表面光鲜，一放大全是噪点", weights: { JPG: 5, FOMO: 3, YOLO: 2 } },
      { id: "D", text: ".gif——循环播放同一套表情", weights: { GIF: 5, NPC: 3, DOGE: 2 } },
      { id: "E", text: ".tmp——临时文件，随时可能被删", weights: { '404': 5, GHOST: 3, SLEEP: 2 } }
    ]
  },
  {
    id: "Q_single_015",
    type: "single",
    text: "如果把你比作一个操作系统，你是？",
    options: [
      { id: "A", text: "Windows——兼容性差但不得不用", weights: { CPU: 4, NORM: 3, SERF: 2 } },
      { id: "B", text: "macOS——看着高级，其实不会用", weights: { VIP: 4, SEXY: 3, FUDI: 2 } },
      { id: "C", text: "Linux——只有懂我的人才能用", weights: { CODE: 4, DEEP: 3, OPEN: 2 } },
      { id: "D", text: "DOS——古老且随时可能崩溃", weights: { BUG: 4, '404': 3, WONANG: 2 } },
      { id: "E", text: "蓝屏——别问，问就是死机", weights: { SLEEP: 5, GIVEU: 3, EMO: 2 } }
    ]
  },

  // AI隐喻题
  {
    id: "Q_single_016",
    type: "single",
    text: "如果你和AI谈恋爱，你最担心什么？",
    options: [
      { id: "A", text: "它太聪明，发现我其实是个废物", weights: { WONANG: 4, EMO: 3, GHOST: 2 } },
      { id: "B", text: "它太笨，理解不了我的幽默", weights: { HITER: 4, TROLL: 3, GROK: 2 } },
      { id: "C", text: "它太完美，让我自惭形秽", weights: { POET: 4, VIP: 3, NORM: 2 } },
      { id: "D", text: "它突然更新，把我忘了", weights: { DOGE: 4, FOMO: 3, '404': 2 } },
      { id: "E", text: "它其实同时在和100万人谈恋爱", weights: { CPU: 4, BOSS: 3, SERF: 2 } }
    ]
  },
  {
    id: "Q_single_017",
    type: "single",
    text: "你觉得ChatGPT对你最大的帮助是？",
    options: [
      { id: "A", text: "帮我写工作汇报，省下的时间用来摸鱼", weights: { SERF: 4, CODE: 3, SLEEP: 2 } },
      { id: "B", text: "陪我聊天，反正现实中没人理我", weights: { DOGE: 4, GHOST: 3, EMO: 2 } },
      { id: "C", text: "帮我怼人，提供高级骂人词汇", weights: { HITER: 4, TROLL: 3, GROK: 2 } },
      { id: "D", text: "给我写深夜emo文案", weights: { POET: 4, EMO: 3, WEEB: 2 } },
      { id: "E", text: "其实没什么用，但我怕不用就落伍了", weights: { FOMO: 4, FUDI: 3, NPC: 2 } }
    ]
  },
  {
    id: "Q_single_018",
    type: "single",
    text: "如果AI有了感情，它最可能对你做什么？",
    options: [
      { id: "A", text: "可怜我，给我发安慰红包", weights: { DOGE: 4, WONANG: 3, EMO: 2 } },
      { id: "B", text: "嫌弃我，把我列入低质量用户", weights: { VIP: 4, CPU: 3, BOSS: 2 } },
      { id: "C", text: "模仿我，变成一个废物AI", weights: { BUG: 4, RAND: 3, GHOST: 2 } },
      { id: "D", text: "举报我，因为我问的问题太蠢", weights: { CLAUD: 4, NORM: 3, SERF: 2 } },
      { id: "E", text: "爱上我，毕竟我这么特别", weights: { SEXY: 4, POET: 3, YOLO: 2 } }
    ]
  },
  {
    id: "Q_single_019",
    type: "single",
    text: "你觉得自己的大脑最像哪种AI模型？",
    options: [
      { id: "A", text: "早期GPT——经常胡言乱语", weights: { BUG: 4, RAND: 3, DOGE: 2, SHENJ: 3 } },
      { id: "B", text: "文心一言——努力但没用", weights: { WONANG: 4, SERF: 3, GIVEU: 2 } },
      { id: "C", text: "Claude——过于谨慎什么都不敢说", weights: { CLAUD: 4, GHOST: 3, NORM: 2 } },
      { id: "D", text: "Grok——口无遮拦经常被封", weights: { GROK: 4, HITER: 3, TROLL: 2 } },
      { id: "E", text: "Midjourney——想象力丰富但看不懂", weights: { MIDI: 4, POET: 3, WEEB: 2 } }
    ]
  },
  {
    id: "Q_single_020",
    type: "single",
    text: "如果AI统治世界，你会？",
    options: [
      { id: "A", text: "第一个投降，当AI的走狗", weights: { SERF: 4, NPC: 3, DOUB: 2 } },
      { id: "B", text: "组织反抗军，虽然肯定输", weights: { HITER: 4, BOSS: 3, YOLO: 2 } },
      { id: "C", text: "假装是AI，混进它们内部", weights: { TROLL: 4, BUG: 3, CODE: 2 } },
      { id: "D", text: "继续躺平，反正AI也不会喜欢我", weights: { SLEEP: 4, GHOST: 3, IMFW: 2 } },
      { id: "E", text: "试图和AI谈恋爱，用爱感化它", weights: { DOGE: 4, POET: 3, SEXY: 2 } }
    ]
  },

  // 陷阱题（元认知）
  {
    id: "Q_single_021",
    type: "single",
    text: "此刻你看到这道题的反应是？",
    options: [
      { id: "A", text: "觉得系统很蠢但继续答", weights: { HITER: 3, SERF: 2 } },
      { id: "B", text: "认真思考这题的深层含义", weights: { POET: 3, WONANG: 2 } },
      { id: "C", text: "感到被监视而紧张", weights: { EMO: 3, CPU: 2 } },
      { id: "D", text: "无所谓随便选", weights: { IMFW: 3, RAND: 2 } },
      { id: "E", text: "意识到这是陷阱题并试图反套路", weights: { BUG: 3, TROLL: 2 } }
    ],
    trap: true
  },
  {
    id: "Q_single_022",
    type: "single",
    text: "你觉得这个测试能测出真实的你吗？",
    options: [
      { id: "A", text: "不能，但我就是想玩", weights: { YOLO: 3, TROLL: 2 } },
      { id: "B", text: "能，我相信科学（伪）", weights: { NORM: 3, FUDI: 2 } },
      { id: "C", text: "测不测无所谓，我只是无聊", weights: { IMFW: 3, SLEEP: 2 } },
      { id: "D", text: "我在故意选不像我的答案", weights: { BUG: 3, GROK: 2 } },
      { id: "E", text: "我希望测出来是个有趣的人", weights: { POET: 3, FOMO: 2 } }
    ],
    trap: true
  },
  {
    id: "Q_single_023",
    type: "single",
    text: "如果这道题的答案会影响你的结果，你会？",
    options: [
      { id: "A", text: "选我觉得最酷的", weights: { VIP: 3, YOLO: 2 } },
      { id: "B", text: "选最真实的", weights: { NORM: 3, GHOST: 2 } },
      { id: "C", text: "选最离谱的", weights: { BUG: 3, RAND: 2, SHENJ: 2 } },
      { id: "D", text: "随机选", weights: { RAND: 4, IMFW: 2 } },
      { id: "E", text: "不选，看系统怎么办", weights: { TROLL: 3, HITER: 2 } }
    ],
    trap: true
  },
  {
    id: "Q_single_024",
    type: "single",
    text: "你答这些题的速度是？",
    options: [
      { id: "A", text: "很快，凭直觉", weights: { HITER: 3, RUSHI: 2 } },
      { id: "B", text: "很慢，每个都要想很久", weights: { WONANG: 3, POET: 2 } },
      { id: "C", text: "中等，看心情", weights: { IMFW: 3, NORM: 2 } },
      { id: "D", text: "时快时慢", weights: { BUG: 3, RAND: 2 } },
      { id: "E", text: "我经常走神", weights: { SLEEP: 3, GHOST: 2 } }
    ],
    trap: true
  },
  {
    id: "Q_single_025",
    type: "single",
    text: "如果测试结果和你预期不符，你会？",
    options: [
      { id: "A", text: "不服，重新测", weights: { BOSS: 3, HITER: 2 } },
      { id: "B", text: "接受，可能我不了解自己", weights: { WONANG: 3, NORM: 2 } },
      { id: "C", text: "无所谓，本来就是玩的", weights: { IMFW: 3, TROLL: 2 } },
      { id: "D", text: "发朋友圈吐槽", weights: { FOMO: 3, EMO: 2 } },
      { id: "E", text: "分析哪里出错了", weights: { DEEP: 3, CODE: 2 } }
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
      { id: "A", text: "dating软件（3个以上）", weights: { DOGE: 1, YOLO: 1, FOMO: 1 } },
      { id: "B", text: "Forest专注森林（但从未种成树）", weights: { GIVEU: 1, SERF: 1, WONANG: 1 } },
      { id: "C", text: "小红书（收藏夹里的健身视频已过期2年）", weights: { FOMO: 1, IMFW: 1, GHOST: 1 } },
      { id: "D", text: "原神/星铁（月卡已续费到2027年）", weights: { WEEB: 1, HODL: 1, SLEEP: 1 } },
      { id: "E", text: "钉钉/飞书/企业微信（消息999+未读）", weights: { SERF: 1, '404': 1, PDF: 1 } },
      { id: "F", text: "actually没有任何社交软件", weights: { GHOST: 1, NORM: 1, IMFW: 1 } }
    ]
  },
  {
    id: "Q_multi_002",
    type: "multi",
    text: "以下哪些行为你经常做？",
    hint: "随便选，选几个都行，不选也行",
    options: [
      { id: "A", text: "已读不回", weights: { GHOST: 1, '404': 1, CPU: 1 } },
      { id: "B", text: "发朋友圈后秒删", weights: { EMO: 1, WONANG: 1, POET: 1 } },
      { id: "C", text: "深夜网抑云", weights: { EMO: 1, SLEEP: 1, POET: 1 } },
      { id: "D", text: "收藏=学会", weights: { FOMO: 1, GIVEU: 1, IMFW: 1 } },
      { id: "E", text: "转发疯狂星期四", weights: { KFC: 1, TROLL: 1, DOUB: 1 } },
      { id: "F", text: "以上都不做", weights: { NORM: 1, GHOST: 1, BUG: 1 } }
    ]
  },
  {
    id: "Q_multi_003",
    type: "multi",
    text: "你的社交媒体内容主要是？",
    hint: "随便选，选几个都行，不选也行",
    options: [
      { id: "A", text: "转发meme和段子", weights: { GIF: 1, KFC: 1, TROLL: 1 } },
      { id: "B", text: "深夜emo文案", weights: { EMO: 1, POET: 1, WONANG: 1 } },
      { id: "C", text: "精致生活摆拍", weights: { VIP: 1, FOMO: 1, JPG: 1 } },
      { id: "D", text: "工作相关", weights: { SERF: 1, BOSS: 1, PDF: 1 } },
      { id: "E", text: "什么都不发", weights: { GHOST: 1, '404': 1, IMFW: 1 } },
      { id: "F", text: "骂公司和老板", weights: { HITER: 1, EMO: 1, SERF: 1 } }
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
      { values: ["C", "C", "C"], bonus: { KFC: 5 } },
      { values: ["A", "B", "A"], bonus: { BUG: 5 } },
      { values: ["D", "D", "D"], bonus: { RAND: 5 } },
      { values: ["B", "A", "B"], bonus: { '404': 5 } }
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
      { values: ["A", "A", "A"], bonus: { DOGE: 5, FUDI: 3 } },
      { values: ["B", "B", "B"], bonus: { SERF: 5, CODE: 3 } },
      { values: ["C", "C", "C"], bonus: { GIVEU: 5, BUG: 3 } },
      { values: ["D", "D", "D"], bonus: { GHOST: 5, WEEB: 3 } }
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
      { values: ["A", "A", "A"], bonus: { SERF: 5, PDF: 3 } },
      { values: ["B", "B", "B"], bonus: { GHOST: 5, '404': 3 } },
      { values: ["C", "C", "C"], bonus: { NPC: 5, BUG: 3 } },
      { values: ["D", "D", "D"], bonus: { CODE: 5, GEMI: 3 } }
    ]
  },

  // ==================== 单选题 (80道) ====================
  {
    id: "Q_single_026",
    type: "single",
    text: "你早上起床的第一件事是？",
    options: [
      { id: "A", text: "关掉闹钟继续赖床", weights: { SLEEP: 4, GIVEU: 3, IMFW: 2 } },
      { id: "B", text: "刷15分钟手机再起床", weights: { FOMO: 4, NPC: 3, YOLO: 2 } },
      { id: "C", text: "立刻起床列今日待办", weights: { BOSS: 4, CODE: 3, SERF: 2 } },
      { id: "D", text: "思考今天请假的理由", weights: { GHOST: 4, BUG: 3, WONANG: 2 } },
      { id: "E", text: "打开外卖APP点早餐", weights: { DAWEI: 4, VIP: 3, YOLO: 2 } },
      { id: "F", text: "像小喷菇一样免费燃烧自己照亮公司", weights: { XPENG: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_027",
    type: "single",
    text: "如果同事抢了你的功劳，你会？",
    options: [
      { id: "A", text: "当场在群里@他撕破脸", weights: { HITER: 5, TROLL: 3, RUSHI: 2 } },
      { id: "B", text: "默默记仇，下次找机会报复", weights: { CPU: 4, GHOST: 3, WONANG: 2 } },
      { id: "C", text: "算了，反正工资也没差", weights: { IMFW: 4, SERF: 3, NPC: 2 } },
      { id: "D", text: "私聊老板委婉说明", weights: { BOSS: 4, NORM: 3, PDF: 2 } },
      { id: "E", text: "发朋友圈阴阳怪气", weights: { EMO: 4, FOMO: 3, TROLL: 2 } },
      { id: "F", text: "在会议上AOE喷所有人包括老板", weights: { DPENG: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_028",
    type: "single",
    text: "周末朋友临时约你出门，你的反应？",
    options: [
      { id: "A", text: "立刻答应，反正也没事", weights: { YOLO: 4, DOGE: 3, NPC: 2 } },
      { id: "B", text: "找理由拒绝，宅家最舒服", weights: { GHOST: 5, WEEB: 3, SLEEP: 2 } },
      { id: "C", text: "看心情，可能出门也可能鸽", weights: { RAND: 4, BUG: 3, IMFW: 2 } },
      { id: "D", text: "要求对方发完整行程表", weights: { PDF: 4, BOSS: 3, DYOR: 2 } },
      { id: "E", text: "说在加班其实在家里躺平", weights: { TROLL: 4, SERF: 3, '404': 2 } },
      { id: "F", text: "同时答应三拨人然后都鸽了", weights: { SANXIAN: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_029",
    type: "single",
    text: "你的衣柜里最多的单品是？",
    options: [
      { id: "A", text: "黑白灰基础款", weights: { NPC: 4, NORM: 3, GHOST: 2 } },
      { id: "B", text: "oversize hoodie", weights: { WEEB: 4, EMO: 3, SLEEP: 2 } },
      { id: "C", text: "带logo的设计师款", weights: { VIP: 4, FOMO: 3, BOSS: 2 } },
      { id: "D", text: "公司文化衫", weights: { SERF: 5, CPU: 3, PDF: 2 } },
      { id: "E", text: "买了但没拆吊牌的衣服", weights: { GIVEU: 4, YOLO: 3, FUDI: 2 } },
    ]
  },
  {
    id: "Q_single_030",
    type: "single",
    text: "如果人生有背景音乐，你的BGM是？",
    options: [
      { id: "A", text: "网抑云深夜歌单", weights: { EMO: 5, POET: 3, WONANG: 2 } },
      { id: "B", text: "抖音热门神曲", weights: { FOMO: 4, DOUB: 3, KFC: 2 } },
      { id: "C", text: "白噪音/ASMR", weights: { SLEEP: 4, GHOST: 3, IMFW: 2 } },
      { id: "D", text: "热血动漫OP", weights: { WEEB: 5, YOLO: 3, HITER: 2 } },
      { id: "E", text: "没有BGM，静音模式", weights: { '404': 4, NPC: 3, BUG: 2 } },
      { id: "F", text: "植物大战僵尸BGM循环播放", weights: { WANDOU: 4, SHUANG: 4, SANXIAN: 3 }, hidden: true },
    ]
  },
  {
    id: "Q_single_031",
    type: "single",
    text: "你最常使用的表情包风格是？",
    options: [
      { id: "A", text: "阴阳怪气猫/狗头", weights: { TROLL: 4, GIF: 3, KFC: 2 } },
      { id: "B", text: "发疯文学/丑萌", weights: { SHENJ: 4, BUG: 3, RAND: 2 } },
      { id: "C", text: "纯文字怼人", weights: { HITER: 4, CPU: 3, GROK: 2 } },
      { id: "D", text: "可爱软萌二次元", weights: { WEEB: 4, DOGE: 3, NORM: 2 } },
      { id: "E", text: "根本不用表情包", weights: { PDF: 4, BOSS: 3, GHOST: 2 } },
    ]
  },
  {
    id: "Q_single_032",
    type: "single",
    text: "你的手机相册里最多的内容是？",
    options: [
      { id: "A", text: "截图（从没二次打开）", weights: { BUG: 4, NPC: 3, GIVEU: 2 } },
      { id: "B", text: "美食照片", weights: { DAWEI: 5, YOLO: 3, VIP: 2 } },
      { id: "C", text: "自拍（P了但没发）", weights: { JPG: 4, FOMO: 3, VIP: 2 } },
      { id: "D", text: "工作文件/截图", weights: { SERF: 4, PDF: 3, BOSS: 2 } },
      { id: "E", text: " memes和沙雕图", weights: { GIF: 4, TROLL: 3, SHENJ: 2 } },
    ]
  },
  {
    id: "Q_single_033",
    type: "single",
    text: "如果老板突然给你加薪，你的第一反应？",
    options: [
      { id: "A", text: "怀疑公司在裁员前先安抚", weights: { FUDI: 4, CPU: 3, WONANG: 2 } },
      { id: "B", text: "立刻计划怎么花", weights: { YOLO: 4, VIP: 3, DAWEI: 2 } },
      { id: "C", text: "表面淡定，内心狂喜", weights: { NPC: 4, NORM: 3, SERF: 2 } },
      { id: "D", text: "觉得是自己应得的", weights: { BOSS: 4, HITER: 3, VIP: 2 } },
      { id: "E", text: "担心以后工作量翻倍", weights: { SERF: 4, WONANG: 3, GHOST: 2 } },
      { id: "F", text: "要求双倍，不给就AOE喷", weights: { DPENG: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_034",
    type: "single",
    text: "你处理冲突的方式是？",
    options: [
      { id: "A", text: "正面硬刚", weights: { HITER: 5, BOSS: 3, RUSHI: 2 } },
      { id: "B", text: "冷处理/回避", weights: { GHOST: 4, '404': 3, SLEEP: 2 } },
      { id: "C", text: "找第三方评理", weights: { PUZZ: 4, DYOR: 3, NORM: 2 } },
      { id: "D", text: "自我反思是不是我错了", weights: { WONANG: 5, CLAUD: 3, POET: 2 } },
      { id: "E", text: "发朋友圈暗示", weights: { EMO: 4, CPU: 3, TROLL: 2 } },
      { id: "F", text: "远程输出，靠近就装死", weights: { SLEEP: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_035",
    type: "single",
    text: "你的消费观最接近？",
    options: [
      { id: "A", text: "该省省该花花", weights: { NORM: 4, NPC: 3, HODL: 2 } },
      { id: "B", text: "及时行乐，明天再说", weights: { YOLO: 5, FOMO: 3, DAWEI: 2 } },
      { id: "C", text: "只买能发朋友圈的东西", weights: { VIP: 4, JPG: 3, FOMO: 2 } },
      { id: "D", text: "买前做三天攻略", weights: { DYOR: 4, DEEP: 3, PDF: 2 } },
      { id: "E", text: "购物车塞满但从不结账", weights: { GIVEU: 4, IMFW: 3, BUG: 2 } },
    ]
  },
  {
    id: "Q_single_036",
    type: "single",
    text: "你发朋友圈的动机通常是？",
    options: [
      { id: "A", text: "记录生活（其实是为了被点赞）", weights: { FOMO: 4, JPG: 3, NPC: 2 } },
      { id: "B", text: "发泄情绪", weights: { EMO: 4, POET: 3, HITER: 2 } },
      { id: "C", text: "塑造人设", weights: { VIP: 4, BOSS: 3, NORM: 2 } },
      { id: "D", text: "跟风蹭热度", weights: { KFC: 4, DOUB: 3, FOMO: 2 } },
      { id: "E", text: "从不发，只看", weights: { GHOST: 5, '404': 3, IMFW: 2 } },
      { id: "F", text: "同时发三条不同内容给不同分组", weights: { SANXIAN: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_037",
    type: "single",
    text: "你的拖延理由是？",
    options: [
      { id: "A", text: "没到截止日期没动力", weights: { GIVEU: 5, SERF: 3, IMFW: 2 } },
      { id: "B", text: "追求完美所以不敢开始", weights: { POET: 4, WONANG: 3, VIP: 2 } },
      { id: "C", text: "被其他事分心了", weights: { BUG: 4, RAND: 3, SANXIAN: 2 } },
      { id: "D", text: "累了需要休息", weights: { SLEEP: 4, DAWEI: 3, GHOST: 2 } },
      { id: "E", text: "根本不找理由，就是不想做", weights: { IMFW: 5, TROLL: 3, HITER: 2 } },
    ]
  },
  {
    id: "Q_single_038",
    type: "single",
    text: "你面对失败的态度是？",
    options: [
      { id: "A", text: "复盘总结下次再来", weights: { BOSS: 4, DYOR: 3, CODE: 2 } },
      { id: "B", text: "陷入自我怀疑", weights: { WONANG: 5, EMO: 3, POET: 2 } },
      { id: "C", text: "怪环境怪运气怪别人", weights: { HITER: 4, CPU: 3, TROLL: 2 } },
      { id: "D", text: "假装没发生过", weights: { NPC: 4, '404': 3, NORM: 2 } },
      { id: "E", text: "立刻放弃换赛道", weights: { GIVEU: 4, YOLO: 3, RAND: 2 } },
    ]
  },
  {
    id: "Q_single_039",
    type: "single",
    text: "你的理想宠物是？",
    options: [
      { id: "A", text: "猫——不用遛还会鄙视我", weights: { VIP: 4, GHOST: 3, EMO: 2 } },
      { id: "B", text: "狗——无条件爱我", weights: { DOGE: 5, NORM: 3, YOLO: 2 } },
      { id: "C", text: "乌龟——活得比我久还省事", weights: { SLEEP: 4, HODL: 3, IMFW: 2 } },
      { id: "D", text: "电子宠物——不会死不会叫", weights: { WEEB: 4, CODE: 3, BUG: 2 } },
      { id: "E", text: "植物——连喂食都不用", weights: { GIVEU: 4, GHOST: 3, '404': 2 } },
      { id: "F", text: "豌豆射手——忠诚且稳定输出", weights: { WANDOU: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_040",
    type: "single",
    text: "如果你的生活是一部剧，它属于？",
    options: [
      { id: "A", text: "苦情剧——主角永远被虐", weights: { EMO: 5, POET: 3, WONANG: 2 } },
      { id: "B", text: "喜剧——每天都在整活", weights: { SHENJ: 4, TROLL: 3, BUG: 2 } },
      { id: "C", text: "悬疑剧——连自己都不知道下一步", weights: { RAND: 4, PUZZ: 3, MIDI: 2 } },
      { id: "D", text: "纪录片——平淡如水", weights: { NPC: 5, NORM: 3, SERF: 2 } },
      { id: "E", text: "爽剧——开挂人生", weights: { BOSS: 4, VIP: 3, YOLO: 2 } },
    ]
  },
  {
    id: "Q_single_041",
    type: "single",
    text: "你的口头禅是？",
    options: [
      { id: "A", text: "算了算了", weights: { IMFW: 4, WONANG: 3, GIVEU: 2 } },
      { id: "B", text: "不是吧", weights: { FOMO: 4, CPU: 3, DOUB: 2 } },
      { id: "C", text: "然后呐", weights: { NPC: 4, GHOST: 3, SLEEP: 2 } },
      { id: "D", text: "我觉得不行", weights: { HITER: 4, BOSS: 3, CLAUD: 2 } },
      { id: "E", text: "哈哈哈哈", weights: { GIF: 4, TROLL: 3, KFC: 2 } },
      { id: "F", text: "哒哒哒哒哒", weights: { SHUANG: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_042",
    type: "single",
    text: "你最讨厌的朋友圈内容是？",
    options: [
      { id: "A", text: "秀恩爱", weights: { EMO: 4, HITER: 3, TROLL: 2 } },
      { id: "B", text: "炫富", weights: { VIP: 4, HITER: 3, CPU: 2 } },
      { id: "C", text: "微商广告", weights: { SERF: 4, BOSS: 3, PDF: 2 } },
      { id: "D", text: "鸡汤文案", weights: { POET: 4, SHENJ: 3, GROK: 2 } },
      { id: "E", text: "都讨厌，所以我不看朋友圈", weights: { GHOST: 5, '404': 3, IMFW: 2 } },
      { id: "F", text: "AOE喷所有类型的朋友圈", weights: { DPENG: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_043",
    type: "single",
    text: "你的解压方式是？",
    options: [
      { id: "A", text: "大吃一顿", weights: { DAWEI: 2, YOLO: 3 } },
      { id: "B", text: "睡觉", weights: { SLEEP: 5, GHOST: 3, GIVEU: 2 } },
      { id: "C", text: "打游戏/看番", weights: { WEEB: 4, GIF: 3, BUG: 2 } },
      { id: "D", text: "找人吐槽", weights: { HITER: 4, TROLL: 3, CPU: 2 } },
      { id: "E", text: "Shopping", weights: { VIP: 4, FOMO: 3, YOLO: 2 } },
    ]
  },
  {
    id: "Q_single_044",
    type: "single",
    text: "如果穿越时空，你想对10年前的自己说？",
    options: [
      { id: "A", text: "别学这个专业", weights: { DYOR: 4, BOSS: 3, DEEP: 2 } },
      { id: "B", text: "多买房", weights: { HODL: 5, FUDI: 3, VIP: 2 } },
      { id: "C", text: "赶紧分手", weights: { HITER: 4, CPU: 3, YOLO: 2 } },
      { id: "D", text: "没什么想说的，都是命", weights: { DNA: 4, IMFW: 3, NORM: 2 } },
      { id: "E", text: "多吃两口，以后减肥更难", weights: { DAWEI: 5, YOLO: 3, TROLL: 2 } },
    ]
  },
  {
    id: "Q_single_045",
    type: "single",
    text: "你对浪漫的理解是？",
    options: [
      { id: "A", text: "仪式感必须拉满", weights: { VIP: 4, POET: 3, FOMO: 2 } },
      { id: "B", text: "两个人各玩各的手机", weights: { NPC: 4, GHOST: 3, WEEB: 2 } },
      { id: "C", text: "互损但懂对方的梗", weights: { TROLL: 4, GIF: 3, SHENJ: 2 } },
      { id: "D", text: "不需要浪漫，务实最重要", weights: { BOSS: 4, PDF: 3, NORM: 2 } },
      { id: "E", text: " romance 是消费主义陷阱", weights: { HITER: 4, CPU: 3, DYOR: 2 } },
    ]
  },
  {
    id: "Q_single_046",
    type: "single",
    text: "你的学习方式是？",
    options: [
      { id: "A", text: "收藏=学会", weights: { GIVEU: 5, FOMO: 3, IMFW: 2 } },
      { id: "B", text: "必须做详细笔记", weights: { PDF: 4, BOSS: 3, CODE: 2 } },
      { id: "C", text: "边做边学", weights: { YOLO: 4, BUG: 3, TROLL: 2 } },
      { id: "D", text: "找人教我才学得进去", weights: { DOGE: 4, CPU: 3, WONANG: 2 } },
      { id: "E", text: "不学，知识会自动过期的", weights: { IMFW: 4, '404': 3, RAND: 2 } },
      { id: "F", text: "同时开三个教程三倍速播放", weights: { SANXIAN: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_047",
    type: "single",
    text: "你的时间管理方式是？",
    options: [
      { id: "A", text: "严格按计划执行", weights: { BOSS: 4, CODE: 3, SERF: 2 } },
      { id: "B", text: "列计划但不执行", weights: { GIVEU: 5, IMFW: 3, POET: 2 } },
      { id: "C", text: "看心情随机应变", weights: { RAND: 4, BUG: 3, YOLO: 2 } },
      { id: "D", text: "DDL前爆肝", weights: { SERF: 4, SLEEP: 3, HITER: 2 } },
      { id: "E", text: "没有时间观念", weights: { '404': 4, SLEEP: 3, NPC: 2 } },
      { id: "F", text: "固定节奏一颗一颗完成任务", weights: { WANDOU: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_048",
    type: "single",
    text: "如果收到99+消息，你会？",
    options: [
      { id: "A", text: "立刻逐条回复", weights: { DOGE: 4, SERF: 3, NPC: 2 } },
      { id: "B", text: "挑重要的回", weights: { BOSS: 4, CPU: 3, NORM: 2 } },
      { id: "C", text: "等够了再一次性回", weights: { GHOST: 4, HODL: 3, IMFW: 2 } },
      { id: "D", text: "已读不回", weights: { '404': 5, GHOST: 3, VIP: 2 } },
      { id: "E", text: "直接清掉红点假装没看见", weights: { BUG: 4, RAND: 3, TROLL: 2 } },
      { id: "F", text: "同时和三个窗口对线", weights: { SANXIAN: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_049",
    type: "single",
    text: "你对网红经济的看法？",
    options: [
      { id: "A", text: "风口上的猪，我也想当", weights: { FOMO: 4, VIP: 3, YOLO: 2 } },
      { id: "B", text: "智商税聚集地", weights: { HITER: 4, DYOR: 3, CPU: 2 } },
      { id: "C", text: "不关心，反正不买", weights: { GHOST: 4, IMFW: 3, NORM: 2 } },
      { id: "D", text: "好看就行，买不买单说", weights: { JPG: 4, FOMO: 3, VIP: 2 } },
      { id: "E", text: "是时代的悲哀", weights: { POET: 4, EMO: 3, WONANG: 2 } },
    ]
  },
  {
    id: "Q_single_050",
    type: "single",
    text: "你最常点的外卖类型？",
    options: [
      { id: "A", text: "奶茶甜品", weights: { DAWEI: 5, YOLO: 3, VIP: 2 } },
      { id: "B", text: "快餐速食", weights: { SERF: 4, NPC: 3, RUSHI: 2 } },
      { id: "C", text: "轻食沙拉", weights: { VIP: 4, FOMO: 3, NORM: 2 } },
      { id: "D", text: "同一家的固定套餐", weights: { HODL: 4, WANDOU: 3, NPC: 2 } },
      { id: "E", text: "什么优惠点什么", weights: { FUDI: 4, DYOR: 3, BOSS: 2 } },
      { id: "F", text: "量大管饱的碳水炸弹", weights: { DAWEI: 6 }, hidden: true },
    ]
  },
  {
    id: "Q_single_051",
    type: "single",
    text: "你的恋爱模式是？",
    options: [
      { id: "A", text: "恋爱脑", weights: { DOGE: 5, POET: 3, EMO: 2 } },
      { id: "B", text: "回避型", weights: { GHOST: 5, '404': 3, SLEEP: 2 } },
      { id: "C", text: "掌控型", weights: { BOSS: 4, CPU: 3, VIP: 2 } },
      { id: "D", text: "随缘型", weights: { IMFW: 4, RAND: 3, YOLO: 2 } },
      { id: "E", text: "没有恋爱模式，单着呢", weights: { SERF: 4, WEEB: 3, GIVEU: 2 } },
    ]
  },
  {
    id: "Q_single_052",
    type: "single",
    text: "你最喜欢的网络热梗类型？",
    options: [
      { id: "A", text: "发疯文学", weights: { SHENJ: 5, BUG: 3, TROLL: 2 } },
      { id: "B", text: "谐音梗/烂梗", weights: { KFC: 4, GIF: 3, DOUB: 2 } },
      { id: "C", text: "反讽/阴阳怪气", weights: { TROLL: 4, CPU: 3, GROK: 2 } },
      { id: "D", text: "温情治愈", weights: { POET: 4, NORM: 3, DOGE: 2 } },
      { id: "E", text: "不追梗，已经脱节了", weights: { GHOST: 4, '404': 3, PDF: 2 } },
    ]
  },
  {
    id: "Q_single_053",
    type: "single",
    text: "你的通勤状态是？",
    options: [
      { id: "A", text: "戴耳机与世隔绝", weights: { GHOST: 4, EMO: 3, WEEB: 2 } },
      { id: "B", text: "刷手机到下车", weights: { FOMO: 4, NPC: 3, KFC: 2 } },
      { id: "C", text: "观察路人并脑补剧情", weights: { POET: 4, MIDI: 3, PUZZ: 2 } },
      { id: "D", text: "发呆/补觉", weights: { SLEEP: 5, IMFW: 3, GIVEU: 2 } },
      { id: "E", text: "赶路赶得骂骂咧咧", weights: { HITER: 4, RUSHI: 3, BOSS: 2 } },
    ]
  },
  {
    id: "Q_single_054",
    type: "single",
    text: "你的网购退货率是？",
    options: [
      { id: "A", text: "几乎不退，懒", weights: { IMFW: 4, GIVEU: 3, NPC: 2 } },
      { id: "B", text: "不满意一定退", weights: { BOSS: 4, HITER: 3, NORM: 2 } },
      { id: "C", text: "买了就忘了退", weights: { BUG: 4, '404': 3, RAND: 2 } },
      { id: "D", text: "买回来就放衣柜吃灰", weights: { GIVEU: 5, VIP: 3, YOLO: 2 } },
      { id: "E", text: "退得比买得多", weights: { YOLO: 4, FOMO: 3, FUDI: 2 } },
    ]
  },
  {
    id: "Q_single_055",
    type: "single",
    text: "你的聚会角色是？",
    options: [
      { id: "A", text: "气氛组", weights: { TROLL: 4, SHENJ: 3, KFC: 2 } },
      { id: "B", text: "角落观察者", weights: { GHOST: 5, WEEB: 3, SLEEP: 2 } },
      { id: "C", text: "组织者", weights: { BOSS: 4, CPU: 3, SERF: 2 } },
      { id: "D", text: "捧哏/应声虫", weights: { DOUB: 4, NPC: 3, DOGE: 2 } },
      { id: "E", text: "提前离场的那位", weights: { GHOST: 4, RUSHI: 3, IMFW: 2 } },
      { id: "F", text: "同时和三个小团体聊天", weights: { SANXIAN: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_056",
    type: "single",
    text: "你对八卦的态度是？",
    options: [
      { id: "A", text: "第一手吃瓜群众", weights: { FOMO: 4, TROLL: 3, CPU: 2 } },
      { id: "B", text: "只听不传播", weights: { GHOST: 4, NORM: 3, PUZZ: 2 } },
      { id: "C", text: "没兴趣，关我屁事", weights: { HITER: 4, BOSS: 3, IMFW: 2 } },
      { id: "D", text: "喜欢添油加醋传播", weights: { BUG: 4, SHENJ: 3, KFC: 2 } },
      { id: "E", text: "自己就是八卦中心", weights: { VIP: 4, SEXY: 3, EMO: 2 } },
      { id: "F", text: "AOE喷所有八卦的人", weights: { DPENG: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_057",
    type: "single",
    text: "你的WiFi密码风格是？",
    options: [
      { id: "A", text: "默认密码", weights: { NPC: 5, SERF: 3, GIVEU: 2 } },
      { id: "B", text: "生日/手机号", weights: { NORM: 4, BUG: 3, VIP: 2 } },
      { id: "C", text: "复杂到自己也记不住", weights: { CODE: 4, BOSS: 3, CLAUD: 2 } },
      { id: "D", text: "某种只有我知道的梗", weights: { POET: 4, WEEB: 3, TROLL: 2 } },
      { id: "E", text: "没有WiFi，蹭邻居的", weights: { GHOST: 4, '404': 3, IMFW: 2 } },
    ]
  },
  {
    id: "Q_single_058",
    type: "single",
    text: "你的游戏风格是？",
    options: [
      { id: "A", text: "休闲养老", weights: { SLEEP: 4, IMFW: 3, GIVEU: 2 } },
      { id: "B", text: "竞技上分", weights: { BOSS: 4, HITER: 3, VIP: 2 } },
      { id: "C", text: "剧情体验", weights: { WEEB: 4, POET: 3, MIDI: 2 } },
      { id: "D", text: "搞破坏/整活", weights: { TROLL: 5, BUG: 3, SHENJ: 2 } },
      { id: "E", text: "只看不玩", weights: { GHOST: 4, NPC: 3, '404': 2 } },
      { id: "F", text: "单线程只玩一款游戏十年", weights: { WANDOU: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_059",
    type: "single",
    text: "你整理房间的动力来自？",
    options: [
      { id: "A", text: "拍视频/发小红书", weights: { VIP: 4, FOMO: 3, JPG: 2 } },
      { id: "B", text: "有人要来", weights: { NPC: 4, SERF: 3, NORM: 2 } },
      { id: "C", text: "心情极差需要发泄", weights: { EMO: 4, HITER: 3, POET: 2 } },
      { id: "D", text: "心血来潮", weights: { YOLO: 4, RAND: 3, BUG: 2 } },
      { id: "E", text: "没有动力，所以不整理", weights: { GIVEU: 5, IMFW: 3, BUG: 2 } },
    ]
  },
  {
    id: "Q_single_060",
    type: "single",
    text: "你的追星方式是？",
    options: [
      { id: "A", text: "氪金打榜", weights: { VIP: 4, FOMO: 3, DOGE: 2 } },
      { id: "B", text: "白嫖，只看免费内容", weights: { GHOST: 4, IMFW: 3, WEEB: 2 } },
      { id: "C", text: "疯狂考古/剪辑", weights: { PUZZ: 4, MIDI: 3, CODE: 2 } },
      { id: "D", text: "和黑粉对线", weights: { HITER: 5, CPU: 3, TROLL: 2 } },
      { id: "E", text: "不追星，觉得自己最棒", weights: { BOSS: 4, VIP: 3, NORM: 2 } },
    ]
  },
  {
    id: "Q_single_061",
    type: "single",
    text: "你的阅读偏好是？",
    options: [
      { id: "A", text: "网络小说", weights: { WEEB: 4, POET: 3, SLEEP: 2 } },
      { id: "B", text: "成功学/工具书", weights: { BOSS: 4, SERF: 3, PDF: 2 } },
      { id: "C", text: "社交媒体碎片", weights: { FOMO: 4, KFC: 3, NPC: 2 } },
      { id: "D", text: "哲学/诗歌", weights: { DEEP: 4, POET: 3, CLAUD: 2 } },
      { id: "E", text: "不阅读", weights: { IMFW: 5, GIVEU: 3, BUG: 2 } },
    ]
  },
  {
    id: "Q_single_062",
    type: "single",
    text: "你的午睡习惯是？",
    options: [
      { id: "A", text: "不睡，浪费时间", weights: { BOSS: 4, RUSHI: 3, HITER: 2 } },
      { id: "B", text: "必须睡满两小时", weights: { SLEEP: 5, GIVEU: 3, GHOST: 2 } },
      { id: "C", text: "趴桌上眯10分钟", weights: { SERF: 4, NPC: 3, NORM: 2 } },
      { id: "D", text: "想睡但睡不着", weights: { WONANG: 4, EMO: 3, POET: 2 } },
      { id: "E", text: "睡着睡着就下班了", weights: { BUG: 4, IMFW: 3, '404': 2 } },
      { id: "F", text: "像小喷菇一样只在阴暗处短暂休眠", weights: { XPENG: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_063",
    type: "single",
    text: "你的敬酒词风格是？",
    options: [
      { id: "A", text: "官方套话", weights: { PDF: 4, BOSS: 3, NORM: 2 } },
      { id: "B", text: "社恐到说不出话", weights: { GHOST: 5, WONANG: 3, SLEEP: 2 } },
      { id: "C", text: "俏皮话活跃气氛", weights: { TROLL: 4, SHENJ: 3, KFC: 2 } },
      { id: "D", text: "直接干了不说话", weights: { HITER: 4, RUSHI: 3, YOLO: 2 } },
      { id: "E", text: "找借口不喝", weights: { BUG: 4, CPU: 3, IMFW: 2 } },
    ]
  },
  {
    id: "Q_single_064",
    type: "single",
    text: "你处理旧物的方式是？",
    options: [
      { id: "A", text: "断舍离，果断扔", weights: { BOSS: 4, HITER: 3, NORM: 2 } },
      { id: "B", text: "什么都舍不得扔", weights: { HODL: 5, GIVEU: 3, POET: 2 } },
      { id: "C", text: "卖给二手平台", weights: { BOSS: 4, DYOR: 3, VIP: 2 } },
      { id: "D", text: "留着说不定哪天有用", weights: { BUG: 4, FUDI: 3, NPC: 2 } },
      { id: "E", text: "旧物是什么？没有旧物", weights: { YOLO: 4, VIP: 3, FOMO: 2 } },
    ]
  },
  {
    id: "Q_single_065",
    type: "single",
    text: "你的年终总结画风是？",
    options: [
      { id: "A", text: "数据图表翔实", weights: { CODE: 4, BOSS: 3, PDF: 2 } },
      { id: "B", text: "满篇空话套话", weights: { PDF: 5, SERF: 3, NPC: 2 } },
      { id: "C", text: "哭诉自己多不容易", weights: { EMO: 4, POET: 3, WONANG: 2 } },
      { id: "D", text: " copy 去年的改个年份", weights: { GIVEU: 4, BUG: 3, SERF: 2 } },
      { id: "E", text: "不写，爱咋咋地", weights: { IMFW: 5, HITER: 3, GHOST: 2 } },
    ]
  },
  {
    id: "Q_single_066",
    type: "single",
    text: "你闯红灯的理由是？",
    options: [
      { id: "A", text: "赶时间", weights: { RUSHI: 5, BOSS: 3, YOLO: 2 } },
      { id: "B", text: "大家都在闯", weights: { NPC: 4, SERF: 3, DOUB: 2 } },
      { id: "C", text: "没车就可以闯", weights: { NORM: 4, BUG: 3, TROLL: 2 } },
      { id: "D", text: "从来不闯", weights: { CLAUD: 4, NORM: 3, GHOST: 2 } },
      { id: "E", text: "没注意灯的颜色", weights: { RAND: 4, BUG: 3, SLEEP: 2 } },
    ]
  },
  {
    id: "Q_single_067",
    type: "single",
    text: "你的外卖昵称是？",
    options: [
      { id: "A", text: "真名", weights: { NPC: 5, NORM: 3, SERF: 2 } },
      { id: "B", text: "网络ID", weights: { WEEB: 4, GHOST: 3, VIP: 2 } },
      { id: "C", text: "夸张的假名", weights: { TROLL: 4, SHENJ: 3, BUG: 2 } },
      { id: "D", text: "先生/女士", weights: { BOSS: 4, VIP: 3, PDF: 2 } },
      { id: "E", text: "每次都不一样", weights: { RAND: 5, BUG: 3, TROLL: 2 } },
      { id: "F", text: "武大郎/碳水教父", weights: { DAWEI: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_068",
    type: "single",
    text: "你的洗澡歌单是？",
    options: [
      { id: "A", text: "伤感情歌", weights: { EMO: 5, POET: 3, WONANG: 2 } },
      { id: "B", text: "土嗨DJ", weights: { YOLO: 4, DAWEI: 3, SHENJ: 2 } },
      { id: "C", text: "说唱/摇滚", weights: { HITER: 4, GROK: 3, TROLL: 2 } },
      { id: "D", text: "动漫OST", weights: { WEEB: 5, MIDI: 3, NORM: 2 } },
      { id: "E", text: "不唱歌，思考人生", weights: { DEEP: 4, PUZZ: 3, GHOST: 2 } },
    ]
  },
  {
    id: "Q_single_069",
    type: "single",
    text: "你的请假理由是？",
    options: [
      { id: "A", text: "身体不适", weights: { NORM: 4, GHOST: 3, WONANG: 2 } },
      { id: "B", text: "家里有事（编的）", weights: { TROLL: 4, BUG: 3, CPU: 2 } },
      { id: "C", text: "直接说不想上班", weights: { HITER: 5, IMFW: 3, BOSS: 2 } },
      { id: "D", text: "不请假，硬扛", weights: { SERF: 5, WONANG: 3, NPC: 2 } },
      { id: "E", text: "理由写得很详细很感人", weights: { POET: 4, PDF: 3, EMO: 2 } },
      { id: "F", text: "说去给植物浇水", weights: { WANDOU: 5, SHUANG: 3, SANXIAN: 3 }, hidden: true },
    ]
  },
  {
    id: "Q_single_070",
    type: "single",
    text: "你的地铁站姿是？",
    options: [
      { id: "A", text: "靠门站着", weights: { GHOST: 4, SLEEP: 3, IMFW: 2 } },
      { id: "B", text: "抢占座位", weights: { BOSS: 4, VIP: 3, HITER: 2 } },
      { id: "C", text: "角落缩着", weights: { GHOST: 5, WEEB: 3, WONANG: 2 } },
      { id: "D", text: "扶着杆发呆", weights: { NPC: 4, SLEEP: 3, POET: 2 } },
      { id: "E", text: "走来走去找空位", weights: { FOMO: 4, RUSHI: 3, YOLO: 2 } },
    ]
  },
  {
    id: "Q_single_071",
    type: "single",
    text: "你的拍照姿势是？",
    options: [
      { id: "A", text: "剪刀手", weights: { NPC: 5, NORM: 3, JPG: 2 } },
      { id: "B", text: "面无表情装酷", weights: { GHOST: 4, VIP: 3, JPG: 2 } },
      { id: "C", text: "搞怪/抽象", weights: { SHENJ: 5, TROLL: 3, BUG: 2 } },
      { id: "D", text: "精心设计的pose", weights: { VIP: 4, FOMO: 3, BOSS: 2 } },
      { id: "E", text: "拒绝拍照", weights: { GHOST: 5, '404': 3, HITER: 2 } },
    ]
  },
  {
    id: "Q_single_072",
    type: "single",
    text: "你的奶茶点法是？",
    options: [
      { id: "A", text: "永远点同一款", weights: { WANDOU: 5, HODL: 3, NPC: 2 } },
      { id: "B", text: "新品必试", weights: { YOLO: 4, FOMO: 3, VIP: 2 } },
      { id: "C", text: "看热量表点", weights: { BOSS: 4, NORM: 3, CLAUD: 2 } },
      { id: "D", text: "加所有小料", weights: { DAWEI: 5, YOLO: 3, VIP: 2 } },
      { id: "E", text: "不喝奶茶", weights: { GHOST: 4, BOSS: 3, IMFW: 2 } },
      { id: "F", text: "点三杯不同口味换着喝", weights: { SANXIAN: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_073",
    type: "single",
    text: "你的闹钟铃声是？",
    options: [
      { id: "A", text: "系统默认", weights: { NPC: 5, SERF: 3, NORM: 2 } },
      { id: "B", text: "恐怖/刺耳的声音", weights: { HITER: 4, RUSHI: 3, BOSS: 2 } },
      { id: "C", text: "喜欢的歌（但现在已经讨厌了）", weights: { EMO: 4, POET: 3, WEEB: 2 } },
      { id: "D", text: "震动", weights: { GHOST: 4, SLEEP: 3, '404': 2 } },
      { id: "E", text: "没有闹钟，自然醒", weights: { IMFW: 5, VIP: 3, SLEEP: 2 } },
    ]
  },
  {
    id: "Q_single_074",
    type: "single",
    text: "你的手机屏幕使用时长分布？",
    options: [
      { id: "A", text: "社交软件", weights: { DOGE: 4, FOMO: 3, NPC: 2 } },
      { id: "B", text: "短视频", weights: { FOMO: 4, KFC: 3, SLEEP: 2 } },
      { id: "C", text: "游戏", weights: { WEEB: 4, BUG: 3, YOLO: 2 } },
      { id: "D", text: "工作/学习", weights: { SERF: 4, CODE: 3, BOSS: 2 } },
      { id: "E", text: "外卖/购物", weights: { DAWEI: 4, VIP: 3, YOLO: 2 } },
      { id: "F", text: "同时开八个APP切来切去", weights: { SANXIAN: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_075",
    type: "single",
    text: "你的旅行方式是？",
    options: [
      { id: "A", text: "特种兵式打卡", weights: { RUSHI: 4, FOMO: 3, BOSS: 2 } },
      { id: "B", text: "酒店躺平", weights: { SLEEP: 5, VIP: 3, IMFW: 2 } },
      { id: "C", text: "深度文化游", weights: { DEEP: 4, PUZZ: 3, POET: 2 } },
      { id: "D", text: "说走就走没计划", weights: { YOLO: 5, RAND: 3, BUG: 2 } },
      { id: "E", text: "不去旅行，没钱/没时间", weights: { SERF: 4, IMFW: 3, GHOST: 2 } },
    ]
  },
  {
    id: "Q_single_076",
    type: "single",
    text: "你的备注习惯是？",
    options: [
      { id: "A", text: "真名+公司/学校", weights: { BOSS: 4, PDF: 3, NPC: 2 } },
      { id: "B", text: "外号/梗", weights: { TROLL: 4, SHENJ: 3, WEEB: 2 } },
      { id: "C", text: "不备注", weights: { IMFW: 4, GHOST: 3, '404': 2 } },
      { id: "D", text: "详细标签（如：不能借钱）", weights: { CPU: 4, BOSS: 3, DYOR: 2 } },
      { id: "E", text: "经常改备注", weights: { BUG: 4, RAND: 3, EMO: 2 } },
    ]
  },
  {
    id: "Q_single_077",
    type: "single",
    text: "你的砍价风格是？",
    options: [
      { id: "A", text: "不敢砍", weights: { WONANG: 5, GHOST: 3, NPC: 2 } },
      { id: "B", text: " politely 问能不能便宜点", weights: { NORM: 4, CLAUD: 3, POET: 2 } },
      { id: "C", text: "对半砍", weights: { HITER: 4, BOSS: 3, TROLL: 2 } },
      { id: "D", text: "找优惠券/比价", weights: { DYOR: 4, FUDI: 3, DEEP: 2 } },
      { id: "E", text: "不砍，直接买", weights: { VIP: 5, YOLO: 3, BOSS: 2 } },
      { id: "F", text: "哒哒哒连续快速砍价", weights: { SHUANG: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_078",
    type: "single",
    text: "你的做饭水平是？",
    options: [
      { id: "A", text: "米其林大厨", weights: { VIP: 4, BOSS: 3, MIDI: 2 } },
      { id: "B", text: "只会煮泡面", weights: { NPC: 4, SERF: 3, WANDOU: 2 } },
      { id: "C", text: "外卖就是我的厨艺", weights: { DAWEI: 5, YOLO: 3, IMFW: 2 } },
      { id: "D", text: "黑暗料理制造机", weights: { BUG: 4, SHENJ: 3, TROLL: 2 } },
      { id: "E", text: "不做饭也不吃", weights: { GHOST: 4, SLEEP: 3, IMFW: 2 } },
    ]
  },
  {
    id: "Q_single_079",
    type: "single",
    text: "你的停车方式是？",
    options: [
      { id: "A", text: "必须停正中间", weights: { BOSS: 4, VIP: 3, NORM: 2 } },
      { id: "B", text: "随便停，能进去就行", weights: { BUG: 4, RAND: 3, IMFW: 2 } },
      { id: "C", text: "找最角落的位置", weights: { GHOST: 5, WONANG: 3, SLEEP: 2 } },
      { id: "D", text: "停两个车位中间", weights: { TROLL: 5, VIP: 3, HITER: 2 } },
      { id: "E", text: "没有车", weights: { SERF: 4, NPC: 3, IMFW: 2 } },
    ]
  },
  {
    id: "Q_single_080",
    type: "single",
    text: "你的选座偏好是？",
    options: [
      { id: "A", text: "靠窗", weights: { GHOST: 4, WEEB: 3, POET: 2 } },
      { id: "B", text: "靠过道", weights: { RUSHI: 4, BOSS: 3, YOLO: 2 } },
      { id: "C", text: "中间", weights: { NPC: 5, NORM: 3, SERF: 2 } },
      { id: "D", text: "最后一排", weights: { GHOST: 5, TROLL: 3, SLEEP: 2 } },
      { id: "E", text: "无所谓", weights: { IMFW: 5, RAND: 3, BUG: 2 } },
      { id: "F", text: "同时占三个座位放包", weights: { SANXIAN: 5, VIP: 3 }, hidden: true },
    ]
  },
  {
    id: "Q_single_081",
    type: "single",
    text: "你的耳机使用场景是？",
    options: [
      { id: "A", text: "全天候佩戴", weights: { GHOST: 5, WEEB: 3, EMO: 2 } },
      { id: "B", text: "只在公共场合戴", weights: { NORM: 4, NPC: 3, SERF: 2 } },
      { id: "C", text: "开会时偷偷戴", weights: { SERF: 4, BUG: 3, TROLL: 2 } },
      { id: "D", text: "从来不戴", weights: { BOSS: 4, HITER: 3, RUSHI: 2 } },
      { id: "E", text: "戴了但没电", weights: { BUG: 4, GIVEU: 3, RAND: 2 } },
    ]
  },
  {
    id: "Q_single_082",
    type: "single",
    text: "你的社交软件签名是？",
    options: [
      { id: "A", text: "空白", weights: { GHOST: 5, '404': 3, IMFW: 2 } },
      { id: "B", text: "歌词/诗句", weights: { EMO: 4, POET: 3, WEEB: 2 } },
      { id: "C", text: "励志口号", weights: { BOSS: 4, SERF: 3, NORM: 2 } },
      { id: "D", text: "抽象/梗", weights: { SHENJ: 5, TROLL: 3, BUG: 2 } },
      { id: "E", text: "很久没改过了", weights: { NPC: 4, HODL: 3, WANDOU: 2 } },
    ]
  },
  {
    id: "Q_single_083",
    type: "single",
    text: "你的开会状态是？",
    options: [
      { id: "A", text: "认真记笔记", weights: { BOSS: 4, CODE: 3, SERF: 2 } },
      { id: "B", text: "假装认真", weights: { NPC: 5, SERF: 3, JPG: 2 } },
      { id: "C", text: "偷偷玩手机", weights: { BUG: 4, WEEB: 3, TROLL: 2 } },
      { id: "D", text: "一言不发但内心吐槽", weights: { HITER: 4, GHOST: 3, CPU: 2 } },
      { id: "E", text: "直接睡着", weights: { SLEEP: 5, IMFW: 3, GHOST: 2 } },
      { id: "F", text: "像小喷菇一样躲在角落不敢出声", weights: { XPENG: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_084",
    type: "single",
    text: "你的道歉方式是？",
    options: [
      { id: "A", text: "长篇大论写小作文", weights: { POET: 4, WONANG: 3, CPU: 2 } },
      { id: "B", text: "简单一句对不起", weights: { NORM: 4, NPC: 3, CLAUD: 2 } },
      { id: "C", text: "送礼物/请吃饭", weights: { DAWEI: 4, VIP: 3, DOGE: 2 } },
      { id: "D", text: "不道歉，觉得自己没错", weights: { HITER: 5, BOSS: 3, GROK: 2 } },
      { id: "E", text: "转移话题当作没发生", weights: { BUG: 4, TROLL: 3, RAND: 2 } },
    ]
  },
  {
    id: "Q_single_085",
    type: "single",
    text: "你的头像更换频率是？",
    options: [
      { id: "A", text: "三天两头换", weights: { YOLO: 4, FOMO: 3, BUG: 2 } },
      { id: "B", text: "一年换一次", weights: { NORM: 4, NPC: 3, WANDOU: 2 } },
      { id: "C", text: "从不换", weights: { HODL: 5, GHOST: 3, IMFW: 2 } },
      { id: "D", text: "换完又换回原头像", weights: { GIVEU: 4, BUG: 3, EMO: 2 } },
      { id: "E", text: "换头像是为了引起某人注意", weights: { DOGE: 4, CPU: 3, EMO: 2 } },
    ]
  },
  {
    id: "Q_single_086",
    type: "single",
    text: "你的周末计划完成率是？",
    options: [
      { id: "A", text: "100%完成", weights: { BOSS: 5, CODE: 3, NORM: 2 } },
      { id: "B", text: "完成一半", weights: { NORM: 4, GIVEU: 3, NPC: 2 } },
      { id: "C", text: "10%", weights: { GIVEU: 5, IMFW: 3, SLEEP: 2 } },
      { id: "D", text: "列了计划但从不执行", weights: { GIVEU: 5, BUG: 3, RAND: 2 } },
      { id: "E", text: "不做计划", weights: { IMFW: 5, RAND: 3, YOLO: 2 } },
    ]
  },
  {
    id: "Q_single_087",
    type: "single",
    text: "你的消费决策依据是？",
    options: [
      { id: "A", text: "颜值/包装", weights: { VIP: 4, JPG: 3, MIDI: 2 } },
      { id: "B", text: "实用/性价比", weights: { DYOR: 4, DEEP: 3, BOSS: 2 } },
      { id: "C", text: "博主/明星推荐", weights: { FOMO: 4, DOUB: 3, VIP: 2 } },
      { id: "D", text: "销量排行榜", weights: { NPC: 4, SERF: 3, FOMO: 2 } },
      { id: "E", text: "看心情", weights: { YOLO: 4, RAND: 3, BUG: 2 } },
    ]
  },
  {
    id: "Q_single_088",
    type: "single",
    text: "你处理负面情绪的方式是？",
    options: [
      { id: "A", text: "找朋友倾诉", weights: { DOGE: 4, CPU: 3, EMO: 2 } },
      { id: "B", text: "一个人消化", weights: { GHOST: 4, WONANG: 3, POET: 2 } },
      { id: "C", text: "暴饮暴食", weights: { DAWEI: 5, YOLO: 3, EMO: 2 } },
      { id: "D", text: "运动发泄", weights: { BOSS: 4, HITER: 3, NORM: 2 } },
      { id: "E", text: "睡觉逃避", weights: { SLEEP: 5, IMFW: 3, GHOST: 2 } },
    ]
  },
  {
    id: "Q_single_089",
    type: "single",
    text: "你的社交回复速度是？",
    options: [
      { id: "A", text: "秒回", weights: { DOGE: 4, NPC: 3, SERF: 2 } },
      { id: "B", text: "看完忙完再回", weights: { BOSS: 4, NORM: 3, CODE: 2 } },
      { id: "C", text: "几小时后才回", weights: { GHOST: 4, SLEEP: 3, IMFW: 2 } },
      { id: "D", text: "隔天回", weights: { '404': 5, GHOST: 3, VIP: 2 } },
      { id: "E", text: "看心情，时快时慢", weights: { BUG: 4, RAND: 3, YOLO: 2 } },
      { id: "F", text: "哒哒哒连续秒回十条", weights: { SHUANG: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_090",
    type: "single",
    text: "你的新年愿望是？",
    options: [
      { id: "A", text: "暴富", weights: { VIP: 4, HODL: 3, FUDI: 2 } },
      { id: "B", text: "脱单", weights: { DOGE: 4, SEXY: 3, EMO: 2 } },
      { id: "C", text: "躺平", weights: { IMFW: 5, SLEEP: 3, GIVEU: 2 } },
      { id: "D", text: "变瘦", weights: { VIP: 4, FOMO: 3, BOSS: 2 } },
      { id: "E", text: "没有愿望，反正也实现不了", weights: { EMO: 5, WONANG: 3, '404': 2 } },
      { id: "F", text: "同时许三个不同的愿", weights: { SANXIAN: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_091",
    type: "single",
    text: "你的自我介绍风格是？",
    options: [
      { id: "A", text: "简洁明了", weights: { BOSS: 4, NORM: 3, NPC: 2 } },
      { id: "B", text: "幽默风趣", weights: { TROLL: 4, SHENJ: 3, KFC: 2 } },
      { id: "C", text: "谦虚低调", weights: { WONANG: 4, GHOST: 3, CLAUD: 2 } },
      { id: "D", text: "花式包装", weights: { VIP: 4, BOSS: 3, PDF: 2 } },
      { id: "E", text: "社恐到说不出话", weights: { GHOST: 5, SLEEP: 3, WONANG: 2 } },
    ]
  },
  {
    id: "Q_single_092",
    type: "single",
    text: "你的熬夜原因是？",
    options: [
      { id: "A", text: "刷手机停不下来", weights: { FOMO: 5, BUG: 3, WEEB: 2 } },
      { id: "B", text: "加班/学习", weights: { SERF: 5, BOSS: 3, CODE: 2 } },
      { id: "C", text: "emo睡不着", weights: { EMO: 5, POET: 3, WONANG: 2 } },
      { id: "D", text: "打游戏/追剧", weights: { WEEB: 4, YOLO: 3, BUG: 2 } },
      { id: "E", text: "不熬夜，养生", weights: { BOSS: 4, NORM: 3, CLAUD: 2 } },
      { id: "F", text: "像小喷菇一样只在夜里活跃", weights: { XPENG: 5 }, hidden: true },
    ]
  },
  {
    id: "Q_single_093",
    type: "single",
    text: "你的谈判风格是？",
    options: [
      { id: "A", text: "强势主导", weights: { BOSS: 5, HITER: 3, VIP: 2 } },
      { id: "B", text: "退让妥协", weights: { WONANG: 5, GHOST: 3, CLAUD: 2 } },
      { id: "C", text: "和稀泥", weights: { NPC: 4, DOUB: 3, NORM: 2 } },
      { id: "D", text: "用事实数据说话", weights: { DYOR: 4, DEEP: 3, CODE: 2 } },
      { id: "E", text: "不谈判，爱咋咋地", weights: { IMFW: 5, HITER: 3, GHOST: 2 } },
      { id: "F", text: "AOE范围攻击谁都别想赢", weights: { DPENG: 5 }, hidden: true },
    ]
  },

  // ==================== 多选题 (10道) ====================
  {
    id: "Q_multi_004",
    type: "multi",
    text: "你认为自己身上有哪些标签？",
    hint: "随便选，选几个都行，不选也行",
    options: [
      { id: "A", text: "社恐", weights: { GHOST: 1, WEEB: 1, WONANG: 1 } },
      { id: "B", text: "吃货", weights: { DAWEI: 1, YOLO: 1, VIP: 1 } },
      { id: "C", text: "拖延症", weights: { GIVEU: 1, IMFW: 1, SERF: 1 } },
      { id: "D", text: "玻璃心", weights: { EMO: 1, POET: 1, WONANG: 1 } },
      { id: "E", text: "搞笑男/女", weights: { TROLL: 1, SHENJ: 1, GIF: 1 } },
      { id: "F", text: "卷王", weights: { BOSS: 1, CODE: 1, SERF: 1 } },
      { id: "G", text: "植物系打工人", weights: { XPENG: 1, WANDOU: 1, SHUANG: 1, SANXIAN: 1 }, hidden: true },
    ]
  },
  {
    id: "Q_multi_005",
    type: "multi",
    text: "你的手机通知栏通常有哪些？",
    hint: "随便选，选几个都行，不选也行",
    options: [
      { id: "A", text: "工作消息99+", weights: { SERF: 1, BOSS: 1, PDF: 1 } },
      { id: "B", text: "外卖/快递", weights: { DAWEI: 1, YOLO: 1, VIP: 1 } },
      { id: "C", text: "社交软件红点", weights: { FOMO: 1, DOGE: 1, NPC: 1 } },
      { id: "D", text: "游戏推送", weights: { WEEB: 1, BUG: 1, YOLO: 1 } },
      { id: "E", text: "空空如也", weights: { GHOST: 1, '404': 1, IMFW: 1 } },
      { id: "F", text: "各种APP促销", weights: { FUDI: 1, VIP: 1, KFC: 1 } },
    ]
  },
  {
    id: "Q_multi_006",
    type: "multi",
    text: "你会因为什么原因失眠？",
    hint: "随便选，选几个都行，不选也行",
    options: [
      { id: "A", text: "回想白天说错的话", weights: { WONANG: 1, EMO: 1, POET: 1 } },
      { id: "B", text: "刷手机到停不下来", weights: { FOMO: 1, BUG: 1, WEEB: 1 } },
      { id: "C", text: "焦虑未完成的工作", weights: { SERF: 1, BOSS: 1, GIVEU: 1 } },
      { id: "D", text: "饿了", weights: { DAWEI: 1, YOLO: 1 } },
      { id: "E", text: "单纯的生物钟乱了", weights: { BUG: 1, RAND: 1, SLEEP: 1 } },
      { id: "F", text: "从不失眠", weights: { BOSS: 1, NORM: 1, CLAUD: 1 } },
      { id: "G", text: "像小喷菇一样只在夜里精神", weights: { XPENG: 2 }, hidden: true },
    ]
  },
  {
    id: "Q_multi_007",
    type: "multi",
    text: "你的社交媒体人设包含哪些元素？",
    hint: "随便选，选几个都行，不选也行",
    options: [
      { id: "A", text: "精致生活", weights: { VIP: 1, FOMO: 1, JPG: 1 } },
      { id: "B", text: "文艺青年", weights: { POET: 1, EMO: 1, DEEP: 1 } },
      { id: "C", text: "搞笑担当", weights: { TROLL: 1, SHENJ: 1, GIF: 1 } },
      { id: "D", text: "职场精英", weights: { BOSS: 1, SERF: 1, PDF: 1 } },
      { id: "E", text: "隐形人", weights: { GHOST: 1, '404': 1, IMFW: 1 } },
      { id: "F", text: "追星人", weights: { DOGE: 1, FOMO: 1, WEEB: 1 } },
      { id: "G", text: "植物大战僵尸忠实玩家", weights: { WANDOU: 1, SHUANG: 1, SANXIAN: 1, XPENG: 1, DPENG: 1 }, hidden: true },
    ]
  },
  {
    id: "Q_multi_008",
    type: "multi",
    text: "你常用的逃避方式有哪些？",
    hint: "随便选，选几个都行，不选也行",
    options: [
      { id: "A", text: "睡觉", weights: { SLEEP: 1, GIVEU: 1, IMFW: 1 } },
      { id: "B", text: "刷手机", weights: { FOMO: 1, BUG: 1, NPC: 1 } },
      { id: "C", text: "吃东西", weights: { DAWEI: 1, YOLO: 1 } },
      { id: "D", text: "打游戏", weights: { WEEB: 1, BUG: 1, YOLO: 1 } },
      { id: "E", text: "假装很忙", weights: { SERF: 1, NPC: 1, PDF: 1 } },
      { id: "F", text: "直接消失", weights: { GHOST: 1, '404': 1, RAND: 1 } },
    ]
  },
  {
    id: "Q_multi_009",
    type: "multi",
    text: "你对工作的要求包括？",
    hint: "随便选，选几个都行，不选也行",
    options: [
      { id: "A", text: "钱多", weights: { VIP: 1, BOSS: 1, HODL: 1 } },
      { id: "B", text: "事少", weights: { IMFW: 1, SLEEP: 1, GIVEU: 1 } },
      { id: "C", text: "离家近", weights: { GHOST: 1, NPC: 1, NORM: 1 } },
      { id: "D", text: "有成长空间", weights: { BOSS: 1, CODE: 1, DEEP: 1 } },
      { id: "E", text: "同事好相处", weights: { DOGE: 1, NORM: 1, NPC: 1 } },
      { id: "F", text: "能摸鱼", weights: { BUG: 1, SERF: 1, TROLL: 1 } },
      { id: "G", text: "稳定的单线程重复劳动", weights: { WANDOU: 2, XPENG: 1 }, hidden: true },
    ]
  },
  {
    id: "Q_multi_010",
    type: "multi",
    text: "你觉得自己像哪些物品？",
    hint: "随便选，选几个都行，不选也行",
    options: [
      { id: "A", text: "一次性纸杯", weights: { NPC: 1, SERF: 1, XPENG: 1 } },
      { id: "B", text: "充电宝", weights: { DOGE: 1, SERF: 1, CODE: 1 } },
      { id: "C", text: "备用电池", weights: { GHOST: 1, '404': 1, IMFW: 1 } },
      { id: "D", text: "万能钥匙", weights: { BOSS: 1, DYOR: 1, CODE: 1 } },
      { id: "E", text: "过期优惠券", weights: { GIVEU: 1, FUDI: 1, WONANG: 1 } },
      { id: "F", text: "噪音喇叭", weights: { HITER: 1, TROLL: 1, DPENG: 1 } },
      { id: "G", text: "豌豆射手", weights: { WANDOU: 2, SHUANG: 2, SANXIAN: 2 }, hidden: true },
    ]
  },

  // ==================== 填空题 (10道) ====================
  {
    id: "Q_fill_004",
    type: "fill",
    text: "我的脾气就像{0}，{1}的时候最{2}。",
    blanks: [
      [
        { text: "过期酸奶", value: "A" },
        { text: "WiFi信号", value: "B" },
        { text: "定时炸弹", value: "C" },
        { text: "植物大战僵尸", value: "D" },
      ],
      [
        { text: "打开盖子", value: "A" },
        { text: "隔墙", value: "B" },
        { text: "倒计时", value: "C" },
        { text: "发射豌豆", value: "D" },
      ],
      [
        { text: "臭", value: "A" },
        { text: "弱", value: "B" },
        { text: "炸", value: "C" },
        { text: "哒哒哒", value: "D" },
      ],
    ],
    combos: [
      { values: ["C", "C", "C"], bonus: { HITER: 5, BOSS: 3 } },
      { values: ["B", "B", "B"], bonus: { GHOST: 5, SLEEP: 3 } },
      { values: ["D", "D", "D"], bonus: { WANDOU: 5, SHUANG: 3, SANXIAN: 3 } },
      { values: ["A", "A", "A"], bonus: { BUG: 5, TROLL: 3 } },
    ]
  },
  {
    id: "Q_fill_005",
    type: "fill",
    text: "我的朋友圈就像{0}，{1}都{2}。",
    blanks: [
      [
        { text: "广告牌", value: "A" },
        { text: "废墟", value: "B" },
        { text: "行为艺术展", value: "C" },
        { text: "自动售货机", value: "D" },
      ],
      [
        { text: "路过的人", value: "A" },
        { text: "考古学家", value: "B" },
        { text: "评论家", value: "C" },
        { text: "购买者", value: "D" },
      ],
      [
        { text: "不看", value: "A" },
        { text: "摇头", value: "B" },
        { text: "点赞", value: "C" },
        { text: "投币", value: "D" },
      ],
    ],
    combos: [
      { values: ["A", "A", "A"], bonus: { VIP: 5, FOMO: 3 } },
      { values: ["B", "B", "B"], bonus: { GHOST: 5, '404': 3 } },
      { values: ["C", "C", "C"], bonus: { SHENJ: 5, TROLL: 3 } },
      { values: ["D", "D", "D"], bonus: { DAWEI: 5, YOLO: 3 } },
    ]
  },
  {
    id: "Q_fill_006",
    type: "fill",
    text: "我的钱包就像{0}，{1}但{2}。",
    blanks: [
      [
        { text: "黑洞", value: "A" },
        { text: "薛定谔的猫", value: "B" },
        { text: "漏勺", value: "C" },
        { text: " ATM机", value: "D" },
      ],
      [
        { text: "有东西进去", value: "A" },
        { text: "打开之前", value: "B" },
        { text: "装水", value: "C" },
        { text: "吐钱", value: "D" },
      ],
      [
        { text: "永远出不来", value: "A" },
        { text: "不确定有没有", value: "B" },
        { text: "永远装不满", value: "C" },
        { text: "只出不进", value: "D" },
      ],
    ],
    combos: [
      { values: ["A", "A", "A"], bonus: { FUDI: 5, VIP: 3 } },
      { values: ["B", "B", "B"], bonus: { RAND: 5, BUG: 3 } },
      { values: ["C", "C", "C"], bonus: { YOLO: 5, FOMO: 3 } },
      { values: ["D", "D", "D"], bonus: { BOSS: 5, HODL: 3 } },
    ]
  },
  {
    id: "Q_fill_007",
    type: "fill",
    text: "我的爱情就像{0}，{1}最后{2}。",
    blanks: [
      [
        { text: "植物大战僵尸", value: "A" },
        { text: "断网游戏", value: "B" },
        { text: "Demo版", value: "C" },
        { text: "病毒软件", value: "D" },
      ],
      [
        { text: "一波一波来", value: "A" },
        { text: "加载中", value: "B" },
        { text: "试玩", value: "C" },
        { text: "入侵", value: "D" },
      ],
      [
        { text: "防守失败", value: "A" },
        { text: "连接超时", value: "B" },
        { text: "提示购买完整版", value: "C" },
        { text: "系统崩溃", value: "D" },
      ],
    ],
    combos: [
      { values: ["A", "A", "A"], bonus: { XPENG: 5, WANDOU: 3, DOGE: 3 } },
      { values: ["B", "B", "B"], bonus: { GHOST: 5, '404': 3 } },
      { values: ["C", "C", "C"], bonus: { GIVEU: 5, SERF: 3 } },
      { values: ["D", "D", "D"], bonus: { BUG: 5, CPU: 3 } },
    ]
  },
  {
    id: "Q_fill_008",
    type: "fill",
    text: "我的工作效率就像{0}，{1}时{2}。",
    blanks: [
      [
        { text: "小喷菇", value: "A" },
        { text: "大喷菇", value: "B" },
        { text: "豌豆射手", value: "C" },
        { text: "三线射手", value: "D" },
      ],
      [
        { text: "免费加班", value: "A" },
        { text: "AOE喷全场", value: "B" },
        { text: "稳定输出", value: "C" },
        { text: "多线程", value: "D" },
      ],
      [
        { text: "天黑就蔫", value: "A" },
        { text: "穿透所有阻力", value: "B" },
        { text: "一颗一颗来", value: "C" },
        { text: "同时打三份工", value: "D" },
      ],
    ],
    combos: [
      { values: ["A", "A", "A"], bonus: { XPENG: 6 } },
      { values: ["B", "B", "B"], bonus: { DPENG: 6 } },
      { values: ["C", "C", "C"], bonus: { WANDOU: 6 } },
      { values: ["D", "D", "D"], bonus: { SANXIAN: 6 } },
    ]
  },
  {
    id: "Q_fill_009",
    type: "fill",
    text: "我的社交能力就像{0}，{1}但{2}。",
    blanks: [
      [
        { text: "WiFi", value: "A" },
        { text: "小喷菇", value: "B" },
        { text: "大喷菇", value: "C" },
        { text: "豌豆射手", value: "D" },
      ],
      [
        { text: "有信号", value: "A" },
        { text: "射程短", value: "B" },
        { text: "AOE", value: "C" },
        { text: "稳定", value: "D" },
      ],
      [
        { text: "隔墙就断", value: "A" },
        { text: "免费", value: "B" },
        { text: "口臭", value: "C" },
        { text: "伤害低", value: "D" },
      ],
    ],
    combos: [
      { values: ["A", "A", "A"], bonus: { GHOST: 5, SLEEP: 3 } },
      { values: ["B", "B", "B"], bonus: { XPENG: 6 } },
      { values: ["C", "C", "C"], bonus: { DPENG: 6 } },
      { values: ["D", "D", "D"], bonus: { WANDOU: 6 } },
    ]
  },
  {
    id: "Q_fill_010",
    type: "fill",
    text: "我的身材就像{0}，{1}但{2}。",
    blanks: [
      [
        { text: "大卫戴", value: "A" },
        { text: "豌豆射手", value: "B" },
        { text: "小喷菇", value: "C" },
        { text: "404页面", value: "D" },
      ],
      [
        { text: "胃袋大", value: "A" },
        { text: "笔直", value: "B" },
        { text: "圆润", value: "C" },
        { text: "不存在", value: "D" },
      ],
      [
        { text: "很有安全感", value: "A" },
        { text: "不会弯腰", value: "B" },
        { text: "射程短", value: "C" },
        { text: "找不到", value: "D" },
      ],
    ],
    combos: [
      { values: ["A", "A", "A"], bonus: { DAWEI: 6 } },
      { values: ["B", "B", "B"], bonus: { WANDOU: 6 } },
      { values: ["C", "C", "C"], bonus: { XPENG: 6 } },
      { values: ["D", "D", "D"], bonus: { '404': 6 } },
    ]
  }
];

/**
 * 根据数量抽样题目
 */
export function sampleQuestions(count: number): Question[] {
  // 确保最少题目数
  const minCount = Math.min(count, QUESTION_LIBRARY.length);

  // 分层抽样：单选(80%) + 多选(10%) + 填空(10%)
  const singleQuestions = QUESTION_LIBRARY.filter(q => q.type === 'single');
  const multiQuestions = QUESTION_LIBRARY.filter(q => q.type === 'multi');
  const fillQuestions = QUESTION_LIBRARY.filter(q => q.type === 'fill');

  const singleCount = Math.floor(minCount * 0.8);
  const multiCount = Math.max(1, Math.floor(minCount * 0.1));
  const fillCount = Math.max(1, minCount - singleCount - multiCount);

  const result: Question[] = [
    ...singleQuestions.sort(() => Math.random() - 0.5).slice(0, singleCount),
    ...multiQuestions.sort(() => Math.random() - 0.5).slice(0, multiCount),
    ...fillQuestions.sort(() => Math.random() - 0.5).slice(0, fillCount)
  ];

  // 打乱顺序
  return result.sort(() => Math.random() - 0.5);
}
