import type { Question } from '@/types';

/**
 * SBTI-Engine 3.0 完整题库
 * 472道题：442道单选 + 30道多选
 */
export const QUESTION_LIBRARY: Question[] = [
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
  {
    id: "Q_single_550",
    type: "single",
    text: "有人在公共场合大声外放抖音，你会？",
    options: [
      { id: "A", text: "当场开麦让他闭嘴", weights: { HOUJ: 4, BAOZ: 3, YINY: 2, LENGL: 4, HUIM: 1, CHAO: 1, BENG: 1, FENN: 3, JING: 1, YUAN: 4, HITER: 2 } },
      { id: "B", text: "默默戴上降噪耳机", weights: { IMFW: 1, GHOST: 4, NPC: 1 } },
      { id: "C", text: "发朋友圈阴阳", weights: { YINY: 3, CHAO: 2, FOMO: 1 } },
      { id: "D", text: "打开蓝牙音箱放哀乐对轰", weights: { HOUJ: 1, HUIM: 4, YOLO: 2 } },
      { id: "E", text: "直接报警说他扰民", weights: { BOSS: 1, KONG: 2, GANG: 1 } }
    ]
  },
  {
    id: "Q_single_551",
    type: "single",
    text: "你排队被人插队，你会？",
    options: [
      { id: "A", text: "一把把他拽出来", weights: { HOUJ: 1, BAOZ: 4, PING: 4 } },
      { id: "B", text: "算了，懒得计较", weights: { IMFW: 2, XIAN: 2, SLEEP: 4 } },
      { id: "C", text: "用肩膀把他挤出去", weights: { YINY: 1, LENGL: 2, CPU: 4 } },
      { id: "D", text: "大声说：大家看有人插队", weights: { BIAO: 1, ZIL: 3, XUAN: 4 } },
      { id: "E", text: "心里想一万句脏话但不说", weights: { WONANG: 4, BENG: 3, WEMO: 3 } }
    ]
  },
  {
    id: "Q_single_552",
    type: "single",
    text: "看到朋友圈有人秀恩爱，你的反应？",
    options: [
      { id: "A", text: "拉黑，看不惯", weights: { BAOZ: 3, HOUJ: 4, HITER: 2 } },
      { id: "B", text: "评论：迟早分", weights: { CHAO: 1, YINY: 3, TROLL: 1 } },
      { id: "C", text: "默默点赞然后划走", weights: { NPC: 4, DANR: 1, GHOST: 2 } },
      { id: "D", text: "立刻发一条更甜的反击", weights: { XUAN: 2, VIP: 4, ZIL: 1 } },
      { id: "E", text: "截图发给闺蜜一起酸", weights: { CHOU: 4, CHIG: 4, FOMO: 4 } }
    ]
  },
  {
    id: "Q_single_553",
    type: "single",
    text: "你发消息对方已读不回，你会？",
    options: [
      { id: "A", text: "连环轰炸直到他回", weights: { KONG: 3, HOUJ: 3, ZIL: 1 } },
      { id: "B", text: "已读不回是吧，我也这样对他", weights: { LENGL: 1, YUAN: 4, GEZI: 4 } },
      { id: "C", text: "开始反思自己是不是说错话了", weights: { WONANG: 3, BEIH: 2, POET: 2 } },
      { id: "D", text: "无所谓，我的消息也不值钱", weights: { IMFW: 2, DANR: 2, GHOST: 3 } },
      { id: "E", text: "立刻删除对话框眼不见为净", weights: { HUIB: 4, GHOST: 3, HEIH: 2 } }
    ]
  },
  {
    id: "Q_single_554",
    type: "single",
    text: "开会时领导点名批评你，你会？",
    options: [
      { id: "A", text: "当场怼回去", weights: { HOUJ: 4, BAOZ: 3, FANS: 4 } },
      { id: "B", text: "低头道歉，晚上写小作文", weights: { WONANG: 3, POET: 2, SERF: 3 } },
      { id: "C", text: "微笑点头，心里记仇", weights: { YINY: 2, CPU: 2, BOSS: 4 } },
      { id: "D", text: "打开招聘软件", weights: { IMFW: 3, XIAN: 3, BUG: 3 } },
      { id: "E", text: "直接哭出来", weights: { BENG: 1, WEMO: 3, MAIM: 1 } }
    ]
  },
  {
    id: "Q_single_555",
    type: "single",
    text: "你在游戏里被队友骂了，你会？",
    options: [
      { id: "A", text: "开麦十倍奉还", weights: { KEYB: 3, HOUJ: 1, GANG: 4 } },
      { id: "B", text: "挂机，让他输", weights: { HUIM: 1, PING: 1, YOLO: 4 } },
      { id: "C", text: "打字：哥哥别骂了", weights: { CHAH: 2, BAIH: 4, CPU: 2 } },
      { id: "D", text: "屏蔽举报一条龙", weights: { BOSS: 3, KONG: 4, NORM: 3 } },
      { id: "E", text: "默默流泪但继续玩", weights: { WONANG: 2, BENG: 3, WEMO: 1 } }
    ]
  },
  {
    id: "Q_single_556",
    type: "single",
    text: "你点的外卖超时半小时，你会？",
    options: [
      { id: "A", text: "打电话骂骑手", weights: { HOUJ: 4, BAOZ: 2, KONG: 3 } },
      { id: "B", text: "给差评小作文", weights: { PDF: 4, BOSS: 2, YINY: 4 } },
      { id: "C", text: "算了大家都不容易", weights: { NORM: 2, TAOH: 2, SHENG: 3 } },
      { id: "D", text: "发朋友圈骂平台", weights: { CHAO: 4, FOMO: 1, YINY: 2 } },
      { id: "E", text: "直接取消订单", weights: { BOSS: 4, IMFW: 3, PING: 3 } }
    ]
  },
  {
    id: "Q_single_557",
    type: "single",
    text: "你的朋友借了钱不还，你会？",
    options: [
      { id: "A", text: "每天催债像孙子", weights: { XIAOQI: 3, KONG: 4, BOSS: 4 } },
      { id: "B", text: "不要了，就当认清一个人", weights: { IMFW: 3, DANR: 1, XIAN: 3 } },
      { id: "C", text: "发朋友圈暗示", weights: { YINY: 2, CHAO: 4, FOMO: 2 } },
      { id: "D", text: "找共同朋友传话", weights: { CPU: 4, YINY: 4, BOSS: 4 } },
      { id: "E", text: "写 PDF 挂他", weights: { PDF: 1, HITER: 3, GANG: 4 } }
    ]
  },
  {
    id: "Q_single_558",
    type: "single",
    text: "深夜刷到前任的新恋情，你会？",
    options: [
      { id: "A", text: "立刻拉黑", weights: { HEIH: 4, HUIM: 3, BAOZ: 4 } },
      { id: "B", text: "用小号视奸", weights: { KAOG: 3, YUAN: 1, JING: 1 } },
      { id: "C", text: "发给朋友一起骂", weights: { CHOU: 1, CHIG: 1, FOMO: 1 } },
      { id: "D", text: "写小作文缅怀", weights: { POET: 2, WEMO: 2, WONANG: 4 } },
      { id: "E", text: "无所谓，我早忘了", weights: { IMFW: 4, DANR: 2, PING: 3 } }
    ]
  },
  {
    id: "Q_single_559",
    type: "single",
    text: "你的方案被同事抢功，你会？",
    options: [
      { id: "A", text: "群里直接@他对质", weights: { HOUJ: 3, BAOZ: 4, HITER: 1 } },
      { id: "B", text: "默默收集证据给老板", weights: { BOSS: 3, KONG: 4, CPU: 1 } },
      { id: "C", text: "下次故意不配合他", weights: { YUAN: 2, LENGL: 1, YINY: 1 } },
      { id: "D", text: "辞职，这公司配不上我", weights: { HUIM: 1, BUG: 2, IMFW: 3 } },
      { id: "E", text: "算了，反正也不是第一次", weights: { WONANG: 2, XIAN: 3, SERF: 1 } }
    ]
  },
  {
    id: "Q_single_560",
    type: "single",
    text: "如果你是一种奶茶，你是？",
    options: [
      { id: "A", text: "全糖去冰，甜到发腻", weights: { BIAO: 3, ZIL: 4, XUAN: 3 } },
      { id: "B", text: "美式黑咖，苦到流泪", weights: { WEMO: 2, BENG: 4, POET: 4 } },
      { id: "C", text: "珍珠太多吸不上来", weights: { WONANG: 3, SHIL: 4, TAOH: 1 } },
      { id: "D", text: "第二杯半价但没人一起", weights: { GELI: 4, SHUS: 4, MALO: 4 } },
      { id: "E", text: "店员说售罄了", weights: { 404: 3, BUG: 3, SLEEP: 3 } }
    ]
  },
  {
    id: "Q_single_561",
    type: "single",
    text: "你的精神状态最接近？",
    options: [
      { id: "A", text: "早 C 晚 A 的社畜", weights: { SERF: 1, BOSS: 4, KFC: 4 } },
      { id: "B", text: "随时会宕机的 AI", weights: { NPC: 3, BUG: 2, CACH: 4 } },
      { id: "C", text: "发癫但正常的元宇宙居民", weights: { EMO: 4, WEMO: 4, BENG: 4 } },
      { id: "D", text: "卡在人机验证里的机器人", weights: { NPC: 3, SERF: 4, 404: 1 } },
      { id: "E", text: "已经格式化重装的系统", weights: { HUIM: 3, BUG2: 2, XIAN: 4 } }
    ]
  },
  {
    id: "Q_single_562",
    type: "single",
    text: "如果用一首歌形容你的人生，是？",
    options: [
      { id: "A", text: "平凡之路", weights: { NORM: 4, NPC: 4, SERF: 2 } },
      { id: "B", text: "大悲咒", weights: { XIAN: 4, SLEEP: 2, IMFW: 1 } },
      { id: "C", text: "逆战", weights: { HITER: 2, PING: 4, BAOZ: 2 } },
      { id: "D", text: "emo 神曲循环播放", weights: { WEMO: 2, EMO: 1, BENG: 1 } },
      { id: "E", text: "静音", weights: { GHOST: 1, DANR: 2, 404: 3 } }
    ]
  },
  {
    id: "Q_single_563",
    type: "single",
    text: "你的社交媒体账号现状是？",
    options: [
      { id: "A", text: "三天可见但全是转发", weights: { NPC: 3, FOMO: 3, CHUAN: 4 } },
      { id: "B", text: "日更十条但没人点赞", weights: { BIAO: 3, ZIL: 1, MAIM: 2 } },
      { id: "C", text: "年更，但每条都是精品", weights: { VIP: 3, ZIL: 2, BOSS: 3 } },
      { id: "D", text: "只看不发，潜水到账号长蘑菇", weights: { GHOST: 3, DIAN: 2, SAIBO: 4 } },
      { id: "E", text: "已经注销重开了三次", weights: { HUIM: 1, BUG: 2, RAND: 3 } }
    ]
  },
  {
    id: "Q_single_564",
    type: "single",
    text: "如果你必须在荒岛带一样东西，你选？",
    options: [
      { id: "A", text: "手机，没网也要刷", weights: { FOMO: 3, SAIBO: 1, DIAN: 4 } },
      { id: "B", text: "枕头，先睡为敬", weights: { SLEEP: 3, XIAN: 3, IMFW: 1 } },
      { id: "C", text: "老板，让他画饼充饥", weights: { BOSS: 3, CPU: 3, YINY: 4 } },
      { id: "D", text: "镜子，维持形象", weights: { ZIL: 3, BIAO: 3, XUAN: 3 } },
      { id: "E", text: "什么都不带，直接躺平", weights: { YOLO: 3, PING: 1, HUIM: 4 } }
    ]
  },
  {
    id: "Q_single_565",
    type: "single",
    text: "你的周末通常怎么过？",
    options: [
      { id: "A", text: "床上躺两天", weights: { SLEEP: 1, SHUS: 4, MALO: 1 } },
      { id: "B", text: "报复性社交跑三个局", weights: { SHEK: 2, WAIF: 3, BACH: 2 } },
      { id: "C", text: "加班", weights: { SERF: 3, BOSS: 3, CODE: 4 } },
      { id: "D", text: "在家大扫除", weights: { JIEP: 2, KONG: 4, NORM: 2 } },
      { id: "E", text: "根本不存在周末", weights: { BOSS: 1, SERF: 4, WEMO: 3 } }
    ]
  },
  {
    id: "Q_single_566",
    type: "single",
    text: "你的消费观是？",
    options: [
      { id: "A", text: "该省省该花花", weights: { NORM: 3, BOSS: 2, DYOR: 1 } },
      { id: "B", text: "花呗借呗三重奏", weights: { YUEG: 3, YOLO: 1, FUDI: 2 } },
      { id: "C", text: "只买 9.9 包邮", weights: { XIAOQI: 1, DOGE: 1, SHUS: 3 } },
      { id: "D", text: "为情绪价值无脑下单", weights: { EMO: 3, WEMO: 2, BENG: 1 } },
      { id: "E", text: "钱是什么？没见过", weights: { SHUS: 2, MALO: 2, YUEG: 4 } }
    ]
  },
  {
    id: "Q_single_567",
    type: "single",
    text: "你如何处理负面情绪？",
    options: [
      { id: "A", text: "发朋友圈卖惨", weights: { MAIM: 2, WEMO: 3, BIAO: 4 } },
      { id: "B", text: "健身/运动发泄", weights: { HITER: 2, BOSS: 1, PING: 3 } },
      { id: "C", text: "睡觉，睡醒就忘了", weights: { SLEEP: 2, IMFW: 4, XIAN: 1 } },
      { id: "D", text: "找人倾诉直到对方烦", weights: { POET: 2, WONANG: 4, KONG: 1 } },
      { id: "E", text: "上网骂人", weights: { KEYB: 3, HOUJ: 2, BAOZ: 2 } }
    ]
  },
  {
    id: "Q_single_568",
    type: "single",
    text: "看到小孩在地铁上哭闹，你会？",
    options: [
      { id: "A", text: "戴上耳机装聋", weights: { GHOST: 1, IMFW: 1, NPC: 1 } },
      { id: "B", text: "瞪一眼让家长管教", weights: { KONG: 1, HOUJ: 4, BOSS: 1 } },
      { id: "C", text: "心里烦躁但面带微笑", weights: { YINY: 4, TAOH: 4, NPC: 2 } },
      { id: "D", text: "换个车厢", weights: { IMFW: 1, XIAN: 1, DANR: 2 } },
      { id: "E", text: "发小红书吐槽", weights: { CHAO: 3, FOMO: 2, YINY: 2 } }
    ]
  },
  {
    id: "Q_single_569",
    type: "single",
    text: "如果人生是一场游戏，你的设置是？",
    options: [
      { id: "A", text: "简单模式但总是掉线", weights: { BUG: 3, 404: 1, NPC: 1 } },
      { id: "B", text: "地狱模式还不开外挂", weights: { SERF: 4, WONANG: 1, POET: 4 } },
      { id: "C", text: "只玩新手教程", weights: { NPC: 2, IMFW: 2, SLEEP: 2 } },
      { id: "D", text: "乱删存档的玩家", weights: { HUIM: 1, RAND: 2, YOLO: 2 } },
      { id: "E", text: "氪金大佬但技术菜", weights: { VIP: 3, FUDI: 1, XUAN: 2 } }
    ]
  },
  {
    id: "Q_single_570",
    type: "single",
    text: "你写代码/做作业最常遇到的状态是？",
    options: [
      { id: "A", text: "复制粘贴然后跑通", weights: { NPC: 4, SERF: 1, CODE: 3 } },
      { id: "B", text: "报错三小时发现少了个分号", weights: { BUG: 1, WONANG: 2, BENG: 3 } },
      { id: "C", text: "先写注释再发呆", weights: { POET: 3, SLEEP: 4, IMFW: 4 } },
      { id: "D", text: "直接问 AI", weights: { CLAUD: 3, GROK: 2, GEMI: 1 } },
      { id: "E", text: "推倒重写十遍", weights: { BOSS: 4, KONG: 4, CODE: 3 } }
    ]
  },
  {
    id: "Q_single_571",
    type: "single",
    text: "你的 WiFi 名字最可能是？",
    options: [
      { id: "A", text: "帅哥/美女的WiFi", weights: { ZIL: 4, XUAN: 1, VIP: 2 } },
      { id: "B", text: "连上我给你五千", weights: { DOGE: 1, TROLL: 2, YINY: 4 } },
      { id: "C", text: "404 Not Found", weights: { 404: 3, BUG: 2, NPC: 4 } },
      { id: "D", text: "隔壁密码12345678", weights: { HITER: 4, GANG: 3, TROLL: 1 } },
      { id: "E", text: "默认名字从未改过", weights: { NPC: 3, SERF: 4, NORM: 1 } }
    ]
  },
  {
    id: "Q_single_572",
    type: "single",
    text: "你的手机电量低于 20% 时，你会？",
    options: [
      { id: "A", text: "立刻找充电器", weights: { KONG: 4, BOSS: 1, NORM: 1 } },
      { id: "B", text: "没事还能再战一小时", weights: { YOLO: 4, PING: 2, IMFW: 2 } },
      { id: "C", text: "开始焦虑", weights: { BENG: 1, WEMO: 2, WONANG: 4 } },
      { id: "D", text: "直接关机睡觉", weights: { SLEEP: 1, XIAN: 2, GHOST: 4 } },
      { id: "E", text: "借充电宝但不想花钱", weights: { XIAOQI: 4, LAI: 1, DOGE: 4 } }
    ]
  },
  {
    id: "Q_single_573",
    type: "single",
    text: "你如何处理已读不回的工作消息？",
    options: [
      { id: "A", text: "已读不回就是我的态度", weights: { GHOST: 3, HEIH: 4, IMFW: 3 } },
      { id: "B", text: "两小时后再回显得我很忙", weights: { BOSS: 4, VIP: 2, CPU: 4 } },
      { id: "C", text: "秒回但只回个 1", weights: { NPC: 1, SERF: 3, APIJ: 3 } },
      { id: "D", text: "截图保存等秋后算账", weights: { KAOG: 2, YUAN: 1, BOSS: 3 } },
      { id: "E", text: "立刻打电话追问", weights: { KONG: 4, HOUJ: 2, BAOZ: 1 } }
    ]
  },
  {
    id: "Q_single_574",
    type: "single",
    text: "你的浏览器标签页通常有？",
    options: [
      { id: "A", text: "100+ 个但一个都不关", weights: { TUNJI: 1, FOMO: 2, BACH: 1 } },
      { id: "B", text: "整齐分类工作学习娱乐", weights: { JIEP: 2, KONG: 1, BOSS: 3 } },
      { id: "C", text: "只有一个搜索引擎", weights: { NPC: 2, SERF: 2, DYOR: 4 } },
      { id: "D", text: "全是简历和招聘网站", weights: { XIAN: 3, IMFW: 3, SERF: 3 } },
      { id: "E", text: "清一色抽象视频", weights: { SAIBO: 1, DIAN: 2, GIF: 3 } }
    ]
  },
  {
    id: "Q_single_575",
    type: "single",
    text: "如果把你比作一款 APP，你是？",
    options: [
      { id: "A", text: "微信：被迫营业", weights: { NPC: 1, SERF: 3, APIJ: 1 } },
      { id: "B", text: "微博：到处吃瓜", weights: { CHIG: 1, SAIBO: 2, FOMO: 1 } },
      { id: "C", text: "豆瓣：尖锐批评", weights: { CHAO: 4, LIKE: 2, GANG: 3 } },
      { id: "D", text: "闲鱼：躺平卖闲置", weights: { YUEG: 3, XIAN: 4, IMFW: 3 } },
      { id: "E", text: "学习强国：打卡机器", weights: { NPC: 1, BOSS: 2, SERF: 3 } }
    ]
  },
  {
    id: "Q_single_576",
    type: "single",
    text: "你的密码策略是？",
    options: [
      { id: "A", text: "所有平台同一个密码", weights: { NPC: 3, BUG: 2, SERF: 1 } },
      { id: "B", text: "生日+名字+123", weights: { NORM: 4, DYOR: 1, KONG: 3 } },
      { id: "C", text: "随机生成但永远记不住", weights: { BUG: 1, CACH: 2, WONANG: 1 } },
      { id: "D", text: "用密码管理器", weights: { BOSS: 1, CODE: 4, NORM: 2 } },
      { id: "E", text: "直接短信验证码登录", weights: { IMFW: 3, YOLO: 3, DANR: 1 } }
    ]
  },
  {
    id: "Q_single_577",
    type: "single",
    text: "你删除好友的标准是？",
    options: [
      { id: "A", text: "从来不删，除非对方先删我", weights: { TAOH: 1, WONANG: 3, SERF: 4 } },
      { id: "B", text: "超过一年没联系直接清理", weights: { JIEP: 3, BOSS: 3, GHOST: 2 } },
      { id: "C", text: "看心情，今天不爽就删", weights: { YOLO: 3, BAOZ: 3, HUIM: 4 } },
      { id: "D", text: "只删前任和仇人", weights: { HEIH: 3, YUAN: 4, LENGL: 4 } },
      { id: "E", text: "根本不知道好友列表有多少人", weights: { IMFW: 3, NPC: 3, SLEEP: 3 } }
    ]
  },
  {
    id: "Q_single_578",
    type: "single",
    text: "你对待系统更新的态度是？",
    options: [
      { id: "A", text: "立刻更新", weights: { BOSS: 3, NORM: 4, KONG: 1 } },
      { id: "B", text: "永远点稍后", weights: { TUOY: 3, IMFW: 2, XUANZ: 1 } },
      { id: "C", text: "关掉自动更新", weights: { BOSS: 4, HITER: 4, PING: 2 } },
      { id: "D", text: "更新完后悔", weights: { WONANG: 3, BENG: 4, BUG: 2 } },
      { id: "E", text: "根本不知道有更新", weights: { NPC: 3, SLEEP: 3, IMFW: 4 } }
    ]
  },
  {
    id: "Q_single_579",
    type: "single",
    text: "你觉得自己最大的优点是？",
    options: [
      { id: "A", text: "情绪稳定（指稳定发疯）", weights: { WEMO: 2, BENG: 2, EMO: 4 } },
      { id: "B", text: "擅长躺平", weights: { IMFW: 2, XIAN: 2, SLEEP: 1 } },
      { id: "C", text: "嘴硬", weights: { HITER: 1, BAOZ: 1, PING: 2 } },
      { id: "D", text: "会自己哄自己", weights: { POET: 4, WONANG: 2, BENG: 3 } },
      { id: "E", text: "没有优点", weights: { WONANG: 4, SHUS: 1, MALO: 1 } }
    ]
  },
  {
    id: "Q_single_580",
    type: "single",
    text: "你最害怕的事情是？",
    options: [
      { id: "A", text: "社交", weights: { GHOST: 3, GELI: 1, SHUS: 4 } },
      { id: "B", text: "没钱", weights: { XIAOQI: 2, YUEG: 3, BOSS: 4 } },
      { id: "C", text: "被忽视", weights: { ZIL: 4, BIAO: 3, KONG: 2 } },
      { id: "D", text: "周一", weights: { SERF: 3, SLEEP: 1, WEMO: 4 } },
      { id: "E", text: " phone call 突然响起", weights: { GHOST: 3, JING: 3, BEIH: 1 } }
    ]
  },
  {
    id: "Q_single_581",
    type: "single",
    text: "你的眼泪通常在什么时候出现？",
    options: [
      { id: "A", text: "看感动中国", weights: { NORM: 3, SHENG: 3, POET: 4 } },
      { id: "B", text: "受委屈但不敢反驳", weights: { WONANG: 3, BENG: 4, MAIM: 3 } },
      { id: "C", text: "吵架时（气势上先输一半）", weights: { BENG: 4, WEMO: 2, WONANG: 1 } },
      { id: "D", text: "深夜 emo", weights: { WEMO: 2, EMO: 2, POET: 3 } },
      { id: "E", text: "基本不流泪", weights: { PING: 4, HITER: 4, BOSS: 4 } }
    ]
  },
  {
    id: "Q_single_582",
    type: "single",
    text: "你如何处理失败？",
    options: [
      { id: "A", text: " blaming 别人或环境", weights: { YUAN: 3, BEIH: 1, CPU: 3 } },
      { id: "B", text: "复盘三天然后抑郁", weights: { WONANG: 2, POET: 4, BENG: 2 } },
      { id: "C", text: "无所谓，下次还敢", weights: { YOLO: 1, PING: 3, IMFW: 4 } },
      { id: "D", text: "立刻找下一个目标", weights: { BOSS: 2, KONG: 1, HITER: 3 } },
      { id: "E", text: "假装没发生过", weights: { NPC: 4, BIAO: 3, IMFW: 4 } }
    ]
  },
  {
    id: "Q_single_583",
    type: "single",
    text: "你觉得自己像什么动物？",
    options: [
      { id: "A", text: "平头哥：生死看淡不服就干", weights: { PING: 3, HOUJ: 4, BAOZ: 2 } },
      { id: "B", text: "树懒：能不动就不动", weights: { SLEEP: 3, XIAN: 4, TUOY: 3 } },
      { id: "C", text: "八爪鱼：什么都想抓", weights: { BACH: 1, SANXIAN: 1, KONG: 2 } },
      { id: "D", text: "鸵鸟：遇到问题先埋起来", weights: { WONANG: 2, SLEEP: 1, GHOST: 2 } },
      { id: "E", text: "变色龙：见人说人话", weights: { NPC: 3, YINY: 1, CPU: 1 } }
    ]
  },
  {
    id: "Q_single_584",
    type: "single",
    text: "如果必须在以下超能力中选一个，你选？",
    options: [
      { id: "A", text: "读心术", weights: { JING: 3, CPU: 1, KONG: 3 } },
      { id: "B", text: "隐身", weights: { GHOST: 1, GELI: 3, SHUS: 1 } },
      { id: "C", text: "时间暂停", weights: { BOSS: 3, KONG: 3, JIEP: 2 } },
      { id: "D", text: "永远不缺钱", weights: { VIP: 2, BOSS: 1, FUDI: 1 } },
      { id: "E", text: "让别人闭嘴", weights: { HOUJ: 1, BAOZ: 4, HITER: 4 } }
    ]
  },
  {
    id: "Q_single_585",
    type: "single",
    text: "你的闹钟响后，你通常？",
    options: [
      { id: "A", text: "立刻起床", weights: { BOSS: 4, NORM: 1, KONG: 1 } },
      { id: "B", text: "再睡五分钟（循环十次）", weights: { SLEEP: 1, TUOY: 3, IMFW: 3 } },
      { id: "C", text: "关掉闹钟然后迟到", weights: { YOLO: 4, BUG: 4, SERF: 3 } },
      { id: "D", text: "设十个闹钟但听不见", weights: { BUG: 2, NPC: 3, SLEEP: 1 } },
      { id: "E", text: "直接请假", weights: { IMFW: 3, XIAN: 1, YOLO: 1 } }
    ]
  },
  {
    id: "Q_single_586",
    type: "single",
    text: "你发朋友圈的频率是？",
    options: [
      { id: "A", text: "日更", weights: { BIAO: 4, ZIL: 4, FOMO: 2 } },
      { id: "B", text: "一周一条", weights: { NORM: 4, NPC: 2, XUAN: 3 } },
      { id: "C", text: "逢年过节", weights: { GHOST: 4, DANR: 2, IMFW: 2 } },
      { id: "D", text: "发完秒删", weights: { EMO: 1, WEMO: 3, WONANG: 1 } },
      { id: "E", text: "只发工作相关", weights: { SERF: 2, BOSS: 2, PDF: 1 } }
    ]
  },
  {
    id: "Q_single_587",
    type: "single",
    text: "如果明天是世界末日，你今天会？",
    options: [
      { id: "A", text: "大吃一顿", weights: { KFC: 3, DOGE: 3, YOLO: 2 } },
      { id: "B", text: "向暗恋对象表白", weights: { SEXY: 3, BOSS: 4, DANR: 1 } },
      { id: "C", text: "躺平等待", weights: { IMFW: 1, XIAN: 3, SLEEP: 3 } },
      { id: "D", text: "抢劫便利店", weights: { HUIM: 2, YOLO: 1, PING: 1 } },
      { id: "E", text: "发最后一条朋友圈", weights: { BIAO: 1, ZIL: 1, FOMO: 4 } }
    ]
  },
  {
    id: "Q_single_588",
    type: "single",
    text: "你的手机相册里最多的内容是？",
    options: [
      { id: "A", text: "自拍", weights: { ZIL: 2, JPG: 3, BIAO: 1 } },
      { id: "B", text: "截图（永远不看）", weights: { NPC: 4, CACH: 3, KAOG: 1 } },
      { id: "C", text: "表情包", weights: { GIF: 2, TROLL: 3, DOGE: 3 } },
      { id: "D", text: "工作文件", weights: { BOSS: 2, SERF: 2, PDF: 2 } },
      { id: "E", text: "空的，定期清理", weights: { GHOST: 1, JIEP: 1, KONG: 3 } }
    ]
  },
  {
    id: "Q_single_589",
    type: "single",
    text: "你如何形容自己的社交能力？",
    options: [
      { id: "A", text: "社牛，能和狗聊起来", weights: { SHEK: 3, WAIF: 1, BIAO: 3 } },
      { id: "B", text: "社恐，回避一切 eye contact", weights: { GHOST: 1, GELI: 4, SHUS: 4 } },
      { id: "C", text: "薛定谔的社交", weights: { DUNJ: 4, BUG: 2, RAND: 4 } },
      { id: "D", text: "只对熟悉的人疯", weights: { WAIF: 2, YINY: 2, NPC: 4 } },
      { id: "E", text: "社交是什么？能吃吗", weights: { NPC: 1, IMFW: 2, SLEEP: 4 } }
    ]
  },
  {
    id: "Q_single_590",
    type: "single",
    text: "你开会时的真实状态是？",
    options: [
      { id: "A", text: "认真记笔记", weights: { BOSS: 3, NORM: 2, KONG: 3 } },
      { id: "B", text: "表面点头，心里骂娘", weights: { YINY: 3, CPU: 1, SERF: 1 } },
      { id: "C", text: "全程走神刷手机", weights: { SAIBO: 1, DIAN: 3, IMFW: 4 } },
      { id: "D", text: "积极发言但全是废话", weights: { BOSS: 1, BIAO: 1, VIP: 1 } },
      { id: "E", text: "努力不睡着", weights: { SLEEP: 2, WEMO: 1, WONANG: 1 } }
    ]
  },
  {
    id: "Q_single_591",
    type: "single",
    text: "你的理想生活状态是？",
    options: [
      { id: "A", text: "财富自由环游世界", weights: { VIP: 3, BOSS: 2, YOLO: 3 } },
      { id: "B", text: "退休养花", weights: { XIAN: 4, SLEEP: 2, IMFW: 4 } },
      { id: "C", text: "被所有人喜欢", weights: { ZIL: 2, BIAO: 4, SHEK: 3 } },
      { id: "D", text: "永远不用上班", weights: { IMFW: 2, XIAN: 1, SERF: 1 } },
      { id: "E", text: "没有理想，活着就行", weights: { XIAN: 3, WONANG: 1, NPC: 3 } }
    ]
  },
  {
    id: "Q_single_592",
    type: "single",
    text: "你如何结束一段不想要的聊天？",
    options: [
      { id: "A", text: "直接说不想聊了", weights: { HITER: 4, BOSS: 3, PING: 4 } },
      { id: "B", text: "回表情包", weights: { GIF: 3, NPC: 3, DOUB: 4 } },
      { id: "C", text: "过两小时再回", weights: { TUOY: 2, GEZI: 1, GHOST: 2 } },
      { id: "D", text: "已读不回", weights: { GHOST: 1, HEIH: 2, LENGL: 4 } },
      { id: "E", text: "借口去洗澡然后消失", weights: { YINY: 4, NPC: 1, IMFW: 4 } }
    ]
  },
  {
    id: "Q_single_593",
    type: "single",
    text: "你的购物车里躺得最久的是？",
    options: [
      { id: "A", text: "一件衣服，永远在等降价", weights: { XIAOQI: 1, TUOY: 2, HODL: 3 } },
      { id: "B", text: "一堆没用的但看着爽", weights: { TUNJI: 3, YOLO: 3, FOMO: 3 } },
      { id: "C", text: "马上就会下单的刚需", weights: { BOSS: 3, NORM: 2, KONG: 4 } },
      { id: "D", text: "帮别人挑的礼物", weights: { DAREN: 3, SHEK: 1, TAOH: 2 } },
      { id: "E", text: "空的，我理性消费", weights: { GHOST: 2, JIEP: 1, BOSS: 3 } }
    ]
  },
  {
    id: "Q_single_594",
    type: "single",
    text: "你的口头禅是？",
    options: [
      { id: "A", text: "啊这", weights: { DUNJ: 2, NPC: 3, IMFW: 4 } },
      { id: "B", text: "无所谓", weights: { IMFW: 2, DANR: 2, XUANZ: 4 } },
      { id: "C", text: "不是吧", weights: { CHAO: 3, CHIG: 1, FOMO: 4 } },
      { id: "D", text: "笑死", weights: { CHAO: 3, TROLL: 1, GIF: 2 } },
      { id: "E", text: "好的收到", weights: { SERF: 1, BOSS: 1, NPC: 2 } }
    ]
  },
  {
    id: "Q_single_595",
    type: "single",
    text: "你对自己的未来持什么态度？",
    options: [
      { id: "A", text: "充满希望", weights: { BOSS: 4, YOLO: 3, ZIL: 3 } },
      { id: "B", text: "一片灰暗", weights: { WEMO: 4, BENG: 3, HUIM: 3 } },
      { id: "C", text: "过一天算一天", weights: { IMFW: 3, XIAN: 1, DANR: 3 } },
      { id: "D", text: "不想未来", weights: { SLEEP: 4, WONANG: 1, GHOST: 4 } },
      { id: "E", text: "未来会好的（自我洗脑）", weights: { POET: 2, BIAO: 4, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_596",
    type: "single",
    text: "你在公共场合被陌生人冒犯，第一反应是？",
    options: [
      { id: "A", text: "直接翻脸", weights: { HOUJ: 3, BAOZ: 1, HITER: 3 } },
      { id: "B", text: "忍气吞声", weights: { WONANG: 3, MAIM: 1, SERF: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 4, CHAO: 2, CPU: 4 } },
      { id: "D", text: "溜之大吉", weights: { GHOST: 1, IMFW: 3, YOLO: 2 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 3, WEMO: 1, BIAO: 1 } }
    ]
  },
  {
    id: "Q_single_597",
    type: "single",
    text: "你的朋友在背后说你坏话被你发现，你会？",
    options: [
      { id: "A", text: "正面硬刚", weights: { PING: 3, HOUJ: 4, HITER: 4 } },
      { id: "B", text: "背后使绊子", weights: { YUAN: 2, CPU: 2, YINY: 4 } },
      { id: "C", text: "默默忍受", weights: { WONANG: 1, SHIL: 1, TAOH: 4 } },
      { id: "D", text: "断绝关系", weights: { HEIH: 1, LENGL: 3, HUIM: 3 } },
      { id: "E", text: "寻求帮助", weights: { DAREN: 3, BOSS: 3, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_598",
    type: "single",
    text: "你在群里发消息没人理，你会？",
    options: [
      { id: "A", text: "发飙", weights: { BAOZ: 3, HOUJ: 3, FENN: 3 } },
      { id: "B", text: "冷处理", weights: { LENGL: 3, GHOST: 2, HEIH: 2 } },
      { id: "C", text: "讲道理", weights: { BOSS: 3, LIKE: 4, NORM: 3 } },
      { id: "D", text: "卖惨", weights: { MAIM: 2, WEMO: 4, BAIH: 1 } },
      { id: "E", text: "无视", weights: { IMFW: 4, DANR: 1, NPC: 4 } }
    ]
  },
  {
    id: "Q_single_599",
    type: "single",
    text: "服务员上错菜且态度恶劣，你会？",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 3, HOUJ: 3 } },
      { id: "B", text: "记仇", weights: { YUAN: 2, KAOG: 3, JING: 2 } },
      { id: "C", text: "原谅", weights: { NORM: 4, SHENG: 4, TAOH: 1 } },
      { id: "D", text: "远离", weights: { GHOST: 2, XIAN: 4, IMFW: 2 } },
      { id: "E", text: "报复", weights: { HUIM: 3, CPU: 1, YINY: 3 } }
    ]
  },
  {
    id: "Q_single_600",
    type: "single",
    text: "你的邻居半夜噪音扰民，你会？",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 3, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 4, WEMO: 2, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 1, CHAO: 2, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 1, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 2, LIKE: 2, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_601",
    type: "single",
    text: "你被领导当众质疑能力，你会？",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 2, BAOZ: 1, PING: 4 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 2, TAOH: 1 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 4, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 4, CPU: 1, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 1, NORM: 1 } }
    ]
  },
  {
    id: "Q_single_602",
    type: "single",
    text: "你的对象翻看你的手机，你会？",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 2, YOLO: 1, PING: 4 } },
      { id: "B", text: "法律途径", weights: { BOSS: 1, PDF: 1, NORM: 3 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 1, YINY: 4 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 1, WONANG: 2 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 1, SHEK: 2 } }
    ]
  },
  {
    id: "Q_single_603",
    type: "single",
    text: "你在网络对线处于下风，你会？",
    options: [
      { id: "A", text: "撕破脸", weights: { HOUJ: 4, BAOZ: 4, HEIH: 1 } },
      { id: "B", text: "维持表面和平", weights: { YINY: 4, NPC: 4, TAOH: 4 } },
      { id: "C", text: "彻底消失", weights: { GHOST: 2, 404: 2, IMFW: 3 } },
      { id: "D", text: "假装没事", weights: { BIAO: 3, NPC: 2, ZIL: 3 } },
      { id: "E", text: "找台阶下", weights: { POET: 4, WONANG: 3, NORM: 1 } }
    ]
  },
  {
    id: "Q_single_604",
    type: "single",
    text: "你的计划被朋友临时放鸽子，你会？",
    options: [
      { id: "A", text: "战斗", weights: { HITER: 4, PING: 3, BAOZ: 3 } },
      { id: "B", text: "逃跑", weights: { GHOST: 2, IMFW: 4, SLEEP: 4 } },
      { id: "C", text: "装死", weights: { NPC: 4, SLEEP: 3, XIAN: 1 } },
      { id: "D", text: "谈判", weights: { BOSS: 3, LIKE: 1, NORM: 4 } },
      { id: "E", text: "求饶", weights: { WONANG: 4, SHIL: 2, MAIM: 4 } }
    ]
  },
  {
    id: "Q_single_605",
    type: "single",
    text: "你辛苦准备的礼物被对方嫌弃，你会？",
    options: [
      { id: "A", text: "正面冲突", weights: { HOUJ: 1, BAOZ: 1, FENN: 4 } },
      { id: "B", text: "暗地报复", weights: { YUAN: 4, CPU: 4, YINY: 4 } },
      { id: "C", text: "大度原谅", weights: { SHENG: 3, NORM: 3, BOSS: 1 } },
      { id: "D", text: "断绝来往", weights: { HEIH: 1, LENGL: 4, GHOST: 4 } },
      { id: "E", text: "寻求调解", weights: { DAREN: 2, BOSS: 2, LIKE: 1 } }
    ]
  },
  {
    id: "Q_single_606",
    type: "single",
    text: "你的建议被团队一致否定，你会？",
    options: [
      { id: "A", text: "咆哮", weights: { HOUJ: 2, BAOZ: 1, DPENG: 3 } },
      { id: "B", text: "抑郁", weights: { WEMO: 3, BENG: 4, POET: 4 } },
      { id: "C", text: "讽刺", weights: { CHAO: 1, YINY: 1, TROLL: 2 } },
      { id: "D", text: "无视", weights: { IMFW: 3, DANR: 4, NPC: 3 } },
      { id: "E", text: "沟通", weights: { BOSS: 3, NORM: 3, OPEN: 3 } }
    ]
  },
  {
    id: "Q_single_607",
    type: "single",
    text: "你被误会是小偷/骗子，你会？",
    options: [
      { id: "A", text: "干就完了", weights: { YOLO: 4, PING: 2, HITER: 3 } },
      { id: "B", text: "算了算了", weights: { IMFW: 4, XIAN: 4, SLEEP: 2 } },
      { id: "C", text: "以其人之道", weights: { CPU: 1, YINY: 3, YUAN: 4 } },
      { id: "D", text: "找外援", weights: { BOSS: 4, DAREN: 4, SHEK: 2 } },
      { id: "E", text: "独自消化", weights: { WONANG: 1, POET: 3, BENG: 1 } }
    ]
  },
  {
    id: "Q_single_608",
    type: "single",
    text: "你的车位被占用且联系不上车主，你会？",
    options: [
      { id: "A", text: "骂街", weights: { HOUJ: 3, BAOZ: 4, KEYB: 3 } },
      { id: "B", text: "拉黑", weights: { HEIH: 3, GHOST: 2, LENGL: 1 } },
      { id: "C", text: "讲道理", weights: { LIKE: 1, BOSS: 4, NORM: 1 } },
      { id: "D", text: "忍", weights: { WONANG: 3, SERF: 4, TAOH: 3 } },
      { id: "E", text: "闹", weights: { BENG: 4, WEMO: 3, BIAO: 1 } }
    ]
  },
  {
    id: "Q_single_609",
    type: "single",
    text: "你的外卖被偷了，你会？",
    options: [
      { id: "A", text: "拍桌子", weights: { HOUJ: 4, BAOZ: 2, PING: 2 } },
      { id: "B", text: "掉眼泪", weights: { WEMO: 2, MAIM: 2, BENG: 3 } },
      { id: "C", text: "翻白眼", weights: { CHAO: 2, YINY: 1, IMFW: 4 } },
      { id: "D", text: "转身离开", weights: { GHOST: 1, YOLO: 1, PING: 1 } },
      { id: "E", text: "好言相劝", weights: { NORM: 3, SHENG: 1, BOSS: 2 } }
    ]
  },
  {
    id: "Q_single_610",
    type: "single",
    text: "你在电影院遇到踢座椅的人，你会？",
    options: [
      { id: "A", text: "报警", weights: { BOSS: 2, NORM: 2, PDF: 3 } },
      { id: "B", text: "网暴", weights: { CHAO: 4, YINY: 2, HITER: 1 } },
      { id: "C", text: "私了", weights: { CPU: 1, YINY: 3, BOSS: 2 } },
      { id: "D", text: "忍受", weights: { WONANG: 3, SHIL: 4, SERF: 3 } },
      { id: "E", text: "搬家", weights: { GHOST: 2, IMFW: 2, YOLO: 1 } }
    ]
  },
  {
    id: "Q_single_611",
    type: "single",
    text: "你的电脑突然蓝屏且未保存文件，你会？",
    options: [
      { id: "A", text: "干他", weights: { HITER: 1, BAOZ: 1, YOLO: 1 } },
      { id: "B", text: "躲他", weights: { GHOST: 4, GELI: 1, SHUS: 3 } },
      { id: "C", text: "阴他", weights: { YINY: 3, CPU: 3, YUAN: 1 } },
      { id: "D", text: "帮他", weights: { DAREN: 1, SHENG: 3, NORM: 1 } },
      { id: "E", text: "忘了他", weights: { IMFW: 2, XIAN: 4, SLEEP: 1 } }
    ]
  },
  {
    id: "Q_single_612",
    type: "single",
    text: "你的航班延误超过六小时，你会？",
    options: [
      { id: "A", text: "直接翻脸", weights: { HOUJ: 1, BAOZ: 2, HITER: 4 } },
      { id: "B", text: "忍气吞声", weights: { WONANG: 1, MAIM: 1, SERF: 3 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 1, CHAO: 1, CPU: 1 } },
      { id: "D", text: "溜之大吉", weights: { GHOST: 4, IMFW: 2, YOLO: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 2, BIAO: 1 } }
    ]
  },
  {
    id: "Q_single_613",
    type: "single",
    text: "你的快递被暴力分拣损坏，你会？",
    options: [
      { id: "A", text: "正面硬刚", weights: { PING: 2, HOUJ: 3, HITER: 1 } },
      { id: "B", text: "背后使绊子", weights: { YUAN: 3, CPU: 2, YINY: 4 } },
      { id: "C", text: "默默忍受", weights: { WONANG: 1, SHIL: 2, TAOH: 1 } },
      { id: "D", text: "断绝关系", weights: { HEIH: 3, LENGL: 4, HUIM: 2 } },
      { id: "E", text: "寻求帮助", weights: { DAREN: 1, BOSS: 1, SHEK: 3 } }
    ]
  },
  {
    id: "Q_single_614",
    type: "single",
    text: "你的合租室友从不打扫卫生，你会？",
    options: [
      { id: "A", text: "发飙", weights: { BAOZ: 3, HOUJ: 4, FENN: 3 } },
      { id: "B", text: "冷处理", weights: { LENGL: 4, GHOST: 1, HEIH: 3 } },
      { id: "C", text: "讲道理", weights: { BOSS: 4, LIKE: 2, NORM: 2 } },
      { id: "D", text: "卖惨", weights: { MAIM: 3, WEMO: 1, BAIH: 3 } },
      { id: "E", text: "无视", weights: { IMFW: 4, DANR: 4, NPC: 1 } }
    ]
  },
  {
    id: "Q_single_615",
    type: "single",
    text: "你的亲人在饭桌上催婚，你会？",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 3, GANG: 1, HOUJ: 4 } },
      { id: "B", text: "记仇", weights: { YUAN: 1, KAOG: 4, JING: 4 } },
      { id: "C", text: "原谅", weights: { NORM: 3, SHENG: 1, TAOH: 1 } },
      { id: "D", text: "远离", weights: { GHOST: 4, XIAN: 4, IMFW: 3 } },
      { id: "E", text: "报复", weights: { HUIM: 4, CPU: 3, YINY: 2 } }
    ]
  },
  {
    id: "Q_single_616",
    type: "single",
    text: "你的健身教练疯狂推销课程，你会？",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 3, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 2, WEMO: 3, MAIM: 2 } },
      { id: "C", text: "冷笑", weights: { YINY: 3, CHAO: 4, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 3, DANR: 1, SLEEP: 2 } },
      { id: "E", text: "解释", weights: { BOSS: 2, LIKE: 1, DYOR: 2 } }
    ]
  },
  {
    id: "Q_single_617",
    type: "single",
    text: "你的理发师完全没听懂你的要求，你会？",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 4, BAOZ: 1, PING: 4 } },
      { id: "B", text: "妥协", weights: { WONANG: 3, SERF: 1, TAOH: 3 } },
      { id: "C", text: "拖延", weights: { TUOY: 1, XUANZ: 3, IMFW: 1 } },
      { id: "D", text: "转移话题", weights: { YINY: 1, CPU: 4, BIAO: 1 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 3, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_618",
    type: "single",
    text: "你的房东以各种理由扣押金，你会？",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 3, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 4, PDF: 4, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 2, YINY: 4 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 1, WONANG: 4 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 1, BOSS: 2, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_619",
    type: "single",
    text: "你的同事把错推给你，你会？",
    options: [
      { id: "A", text: "撕破脸", weights: { HOUJ: 2, BAOZ: 3, HEIH: 1 } },
      { id: "B", text: "维持表面和平", weights: { YINY: 1, NPC: 3, TAOH: 3 } },
      { id: "C", text: "彻底消失", weights: { GHOST: 2, 404: 1, IMFW: 1 } },
      { id: "D", text: "假装没事", weights: { BIAO: 3, NPC: 3, ZIL: 3 } },
      { id: "E", text: "找台阶下", weights: { POET: 1, WONANG: 4, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_620",
    type: "single",
    text: "你的客户提出无理需求，你会？",
    options: [
      { id: "A", text: "战斗", weights: { HITER: 2, PING: 4, BAOZ: 4 } },
      { id: "B", text: "逃跑", weights: { GHOST: 4, IMFW: 1, SLEEP: 2 } },
      { id: "C", text: "装死", weights: { NPC: 3, SLEEP: 1, XIAN: 2 } },
      { id: "D", text: "谈判", weights: { BOSS: 4, LIKE: 4, NORM: 4 } },
      { id: "E", text: "求饶", weights: { WONANG: 2, SHIL: 4, MAIM: 4 } }
    ]
  },
  {
    id: "Q_single_621",
    type: "single",
    text: "你的网友突然对你开黄腔，你会？",
    options: [
      { id: "A", text: "正面冲突", weights: { HOUJ: 2, BAOZ: 1, FENN: 3 } },
      { id: "B", text: "暗地报复", weights: { YUAN: 3, CPU: 1, YINY: 4 } },
      { id: "C", text: "大度原谅", weights: { SHENG: 2, NORM: 4, BOSS: 3 } },
      { id: "D", text: "断绝来往", weights: { HEIH: 2, LENGL: 2, GHOST: 1 } },
      { id: "E", text: "寻求调解", weights: { DAREN: 1, BOSS: 2, LIKE: 2 } }
    ]
  },
  {
    id: "Q_single_622",
    type: "single",
    text: "你的前任突然加你好友，你会？",
    options: [
      { id: "A", text: "咆哮", weights: { HOUJ: 1, BAOZ: 3, DPENG: 1 } },
      { id: "B", text: "抑郁", weights: { WEMO: 1, BENG: 2, POET: 4 } },
      { id: "C", text: "讽刺", weights: { CHAO: 4, YINY: 2, TROLL: 2 } },
      { id: "D", text: "无视", weights: { IMFW: 1, DANR: 2, NPC: 3 } },
      { id: "E", text: "沟通", weights: { BOSS: 1, NORM: 3, OPEN: 1 } }
    ]
  },
  {
    id: "Q_single_623",
    type: "single",
    text: "你的同学聚会被攀比，你会？",
    options: [
      { id: "A", text: "干就完了", weights: { YOLO: 3, PING: 3, HITER: 2 } },
      { id: "B", text: "算了算了", weights: { IMFW: 4, XIAN: 2, SLEEP: 1 } },
      { id: "C", text: "以其人之道", weights: { CPU: 4, YINY: 4, YUAN: 4 } },
      { id: "D", text: "找外援", weights: { BOSS: 1, DAREN: 3, SHEK: 3 } },
      { id: "E", text: "独自消化", weights: { WONANG: 3, POET: 2, BENG: 3 } }
    ]
  },
  {
    id: "Q_single_624",
    type: "single",
    text: "你的面试被HR压薪资，你会？",
    options: [
      { id: "A", text: "骂街", weights: { HOUJ: 2, BAOZ: 2, KEYB: 3 } },
      { id: "B", text: "拉黑", weights: { HEIH: 2, GHOST: 4, LENGL: 4 } },
      { id: "C", text: "讲道理", weights: { LIKE: 1, BOSS: 2, NORM: 4 } },
      { id: "D", text: "忍", weights: { WONANG: 2, SERF: 3, TAOH: 3 } },
      { id: "E", text: "闹", weights: { BENG: 1, WEMO: 4, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_625",
    type: "single",
    text: "你的试用期最后一天被告知不通过，你会？",
    options: [
      { id: "A", text: "拍桌子", weights: { HOUJ: 4, BAOZ: 3, PING: 3 } },
      { id: "B", text: "掉眼泪", weights: { WEMO: 4, MAIM: 4, BENG: 3 } },
      { id: "C", text: "翻白眼", weights: { CHAO: 4, YINY: 4, IMFW: 2 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 4, PING: 3 } },
      { id: "E", text: "好言相劝", weights: { NORM: 4, SHENG: 1, BOSS: 2 } }
    ]
  },
  {
    id: "Q_single_626",
    type: "single",
    text: "你的猫/狗抓坏了新沙发，你会？",
    options: [
      { id: "A", text: "报警", weights: { BOSS: 3, NORM: 4, PDF: 2 } },
      { id: "B", text: "网暴", weights: { CHAO: 3, YINY: 4, HITER: 4 } },
      { id: "C", text: "私了", weights: { CPU: 4, YINY: 1, BOSS: 4 } },
      { id: "D", text: "忍受", weights: { WONANG: 1, SHIL: 1, SERF: 2 } },
      { id: "E", text: "搬家", weights: { GHOST: 3, IMFW: 1, YOLO: 1 } }
    ]
  },
  {
    id: "Q_single_627",
    type: "single",
    text: "你的公交车坐过站了，你会？",
    options: [
      { id: "A", text: "干他", weights: { HITER: 2, BAOZ: 1, YOLO: 3 } },
      { id: "B", text: "躲他", weights: { GHOST: 1, GELI: 4, SHUS: 4 } },
      { id: "C", text: "阴他", weights: { YINY: 3, CPU: 2, YUAN: 4 } },
      { id: "D", text: "帮他", weights: { DAREN: 2, SHENG: 2, NORM: 4 } },
      { id: "E", text: "忘了他", weights: { IMFW: 2, XIAN: 4, SLEEP: 4 } }
    ]
  },
  {
    id: "Q_single_628",
    type: "single",
    text: "你的雨伞被人顺走了，你会？",
    options: [
      { id: "A", text: "直接翻脸", weights: { HOUJ: 2, BAOZ: 3, HITER: 1 } },
      { id: "B", text: "忍气吞声", weights: { WONANG: 4, MAIM: 3, SERF: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 2, CHAO: 4, CPU: 3 } },
      { id: "D", text: "溜之大吉", weights: { GHOST: 2, IMFW: 1, YOLO: 2 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 2, WEMO: 2, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_629",
    type: "single",
    text: "你的微波炉加热的饭爆炸了，你会？",
    options: [
      { id: "A", text: "正面硬刚", weights: { PING: 3, HOUJ: 3, HITER: 3 } },
      { id: "B", text: "背后使绊子", weights: { YUAN: 3, CPU: 2, YINY: 4 } },
      { id: "C", text: "默默忍受", weights: { WONANG: 1, SHIL: 3, TAOH: 1 } },
      { id: "D", text: "断绝关系", weights: { HEIH: 4, LENGL: 4, HUIM: 4 } },
      { id: "E", text: "寻求帮助", weights: { DAREN: 2, BOSS: 2, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_630",
    type: "single",
    text: "你的新鞋第一天就被踩了，你会？",
    options: [
      { id: "A", text: "发飙", weights: { BAOZ: 3, HOUJ: 1, FENN: 1 } },
      { id: "B", text: "冷处理", weights: { LENGL: 1, GHOST: 2, HEIH: 4 } },
      { id: "C", text: "讲道理", weights: { BOSS: 1, LIKE: 4, NORM: 3 } },
      { id: "D", text: "卖惨", weights: { MAIM: 2, WEMO: 4, BAIH: 4 } },
      { id: "E", text: "无视", weights: { IMFW: 2, DANR: 2, NPC: 4 } }
    ]
  },
  {
    id: "Q_single_631",
    type: "single",
    text: "你的演唱会门票被黄牛鸽了，你会？",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 3, GANG: 4, HOUJ: 2 } },
      { id: "B", text: "记仇", weights: { YUAN: 3, KAOG: 1, JING: 3 } },
      { id: "C", text: "原谅", weights: { NORM: 4, SHENG: 1, TAOH: 3 } },
      { id: "D", text: "远离", weights: { GHOST: 4, XIAN: 4, IMFW: 3 } },
      { id: "E", text: "报复", weights: { HUIM: 1, CPU: 2, YINY: 2 } }
    ]
  },
  {
    id: "Q_single_632",
    type: "single",
    text: "你的健身房跑路了，你会？",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 2, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 4, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 1, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 3, SLEEP: 4 } },
      { id: "E", text: "解释", weights: { BOSS: 2, LIKE: 1, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_633",
    type: "single",
    text: "你的相亲对象迟到一小时，你会？",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 1, BAOZ: 3, PING: 1 } },
      { id: "B", text: "妥协", weights: { WONANG: 1, SERF: 3, TAOH: 2 } },
      { id: "C", text: "拖延", weights: { TUOY: 4, XUANZ: 4, IMFW: 1 } },
      { id: "D", text: "转移话题", weights: { YINY: 4, CPU: 2, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 4, BEIH: 4, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_634",
    type: "single",
    text: "你的游戏账号被封了，你会？",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 2, YOLO: 4, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 4, PDF: 4, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 1, YINY: 4 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 3, WONANG: 3 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 3, BOSS: 4, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_635",
    type: "single",
    text: "你的小说被读者骂烂尾，你会？",
    options: [
      { id: "A", text: "撕破脸", weights: { HOUJ: 1, BAOZ: 2, HEIH: 2 } },
      { id: "B", text: "维持表面和平", weights: { YINY: 1, NPC: 2, TAOH: 3 } },
      { id: "C", text: "彻底消失", weights: { GHOST: 3, 404: 4, IMFW: 3 } },
      { id: "D", text: "假装没事", weights: { BIAO: 2, NPC: 3, ZIL: 2 } },
      { id: "E", text: "找台阶下", weights: { POET: 4, WONANG: 3, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_636",
    type: "single",
    text: "你的摄影作品被人盗用，你会？",
    options: [
      { id: "A", text: "战斗", weights: { HITER: 3, PING: 2, BAOZ: 4 } },
      { id: "B", text: "逃跑", weights: { GHOST: 4, IMFW: 1, SLEEP: 4 } },
      { id: "C", text: "装死", weights: { NPC: 1, SLEEP: 1, XIAN: 1 } },
      { id: "D", text: "谈判", weights: { BOSS: 4, LIKE: 4, NORM: 2 } },
      { id: "E", text: "求饶", weights: { WONANG: 2, SHIL: 3, MAIM: 1 } }
    ]
  },
  {
    id: "Q_single_637",
    type: "single",
    text: "你的论文被导师打回重写，你会？",
    options: [
      { id: "A", text: "正面冲突", weights: { HOUJ: 4, BAOZ: 1, FENN: 2 } },
      { id: "B", text: "暗地报复", weights: { YUAN: 4, CPU: 3, YINY: 4 } },
      { id: "C", text: "大度原谅", weights: { SHENG: 4, NORM: 3, BOSS: 4 } },
      { id: "D", text: "断绝来往", weights: { HEIH: 4, LENGL: 1, GHOST: 3 } },
      { id: "E", text: "寻求调解", weights: { DAREN: 3, BOSS: 3, LIKE: 3 } }
    ]
  },
  {
    id: "Q_single_638",
    type: "single",
    text: "你的演讲忘词了，你会？",
    options: [
      { id: "A", text: "咆哮", weights: { HOUJ: 2, BAOZ: 4, DPENG: 3 } },
      { id: "B", text: "抑郁", weights: { WEMO: 1, BENG: 3, POET: 4 } },
      { id: "C", text: "讽刺", weights: { CHAO: 3, YINY: 3, TROLL: 2 } },
      { id: "D", text: "无视", weights: { IMFW: 2, DANR: 2, NPC: 3 } },
      { id: "E", text: "沟通", weights: { BOSS: 4, NORM: 1, OPEN: 4 } }
    ]
  },
  {
    id: "Q_single_639",
    type: "single",
    text: "你的减肥计划第三天就破功，你会？",
    options: [
      { id: "A", text: "干就完了", weights: { YOLO: 4, PING: 1, HITER: 4 } },
      { id: "B", text: "算了算了", weights: { IMFW: 2, XIAN: 4, SLEEP: 2 } },
      { id: "C", text: "以其人之道", weights: { CPU: 1, YINY: 4, YUAN: 4 } },
      { id: "D", text: "找外援", weights: { BOSS: 4, DAREN: 4, SHEK: 1 } },
      { id: "E", text: "独自消化", weights: { WONANG: 1, POET: 4, BENG: 3 } }
    ]
  },
  {
    id: "Q_single_640",
    type: "single",
    text: "你的存钱目标永远达不到，你会？",
    options: [
      { id: "A", text: "骂街", weights: { HOUJ: 2, BAOZ: 4, KEYB: 2 } },
      { id: "B", text: "拉黑", weights: { HEIH: 2, GHOST: 1, LENGL: 2 } },
      { id: "C", text: "讲道理", weights: { LIKE: 2, BOSS: 2, NORM: 1 } },
      { id: "D", text: "忍", weights: { WONANG: 4, SERF: 3, TAOH: 3 } },
      { id: "E", text: "闹", weights: { BENG: 1, WEMO: 4, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_641",
    type: "single",
    text: "你的旅行计划因为天气泡汤，你会？",
    options: [
      { id: "A", text: "拍桌子", weights: { HOUJ: 3, BAOZ: 4, PING: 2 } },
      { id: "B", text: "掉眼泪", weights: { WEMO: 4, MAIM: 4, BENG: 3 } },
      { id: "C", text: "翻白眼", weights: { CHAO: 3, YINY: 4, IMFW: 4 } },
      { id: "D", text: "转身离开", weights: { GHOST: 3, YOLO: 2, PING: 3 } },
      { id: "E", text: "好言相劝", weights: { NORM: 1, SHENG: 3, BOSS: 3 } }
    ]
  },
  {
    id: "Q_single_642",
    type: "single",
    text: "你的表白被秒拒，你会？",
    options: [
      { id: "A", text: "报警", weights: { BOSS: 3, NORM: 1, PDF: 2 } },
      { id: "B", text: "网暴", weights: { CHAO: 4, YINY: 3, HITER: 2 } },
      { id: "C", text: "私了", weights: { CPU: 1, YINY: 4, BOSS: 4 } },
      { id: "D", text: "忍受", weights: { WONANG: 1, SHIL: 1, SERF: 1 } },
      { id: "E", text: "搬家", weights: { GHOST: 2, IMFW: 2, YOLO: 1 } }
    ]
  },
  {
    id: "Q_single_643",
    type: "single",
    text: "你的秘密被好朋友泄露，你会？",
    options: [
      { id: "A", text: "干他", weights: { HITER: 4, BAOZ: 3, YOLO: 3 } },
      { id: "B", text: "躲他", weights: { GHOST: 2, GELI: 3, SHUS: 2 } },
      { id: "C", text: "阴他", weights: { YINY: 4, CPU: 3, YUAN: 4 } },
      { id: "D", text: "帮他", weights: { DAREN: 2, SHENG: 4, NORM: 2 } },
      { id: "E", text: "忘了他", weights: { IMFW: 2, XIAN: 1, SLEEP: 2 } }
    ]
  },
  {
    id: "Q_single_644",
    type: "single",
    text: "你的年终奖比预期少一半，你会？",
    options: [
      { id: "A", text: "直接翻脸", weights: { HOUJ: 3, BAOZ: 3, HITER: 3 } },
      { id: "B", text: "忍气吞声", weights: { WONANG: 3, MAIM: 3, SERF: 3 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 2, CPU: 2 } },
      { id: "D", text: "溜之大吉", weights: { GHOST: 1, IMFW: 1, YOLO: 2 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 4, WEMO: 4, BIAO: 1 } }
    ]
  },
  {
    id: "Q_single_645",
    type: "single",
    text: "你的体检报告多项异常，你会？",
    options: [
      { id: "A", text: "正面硬刚", weights: { PING: 1, HOUJ: 4, HITER: 4 } },
      { id: "B", text: "背后使绊子", weights: { YUAN: 1, CPU: 2, YINY: 1 } },
      { id: "C", text: "默默忍受", weights: { WONANG: 3, SHIL: 2, TAOH: 4 } },
      { id: "D", text: "断绝关系", weights: { HEIH: 2, LENGL: 4, HUIM: 4 } },
      { id: "E", text: "寻求帮助", weights: { DAREN: 2, BOSS: 3, SHEK: 2 } }
    ]
  },
  {
    id: "Q_single_646",
    type: "single",
    text: "你的房子漏水到楼下，你会？",
    options: [
      { id: "A", text: "发飙", weights: { BAOZ: 4, HOUJ: 4, FENN: 2 } },
      { id: "B", text: "冷处理", weights: { LENGL: 1, GHOST: 1, HEIH: 1 } },
      { id: "C", text: "讲道理", weights: { BOSS: 4, LIKE: 4, NORM: 3 } },
      { id: "D", text: "卖惨", weights: { MAIM: 2, WEMO: 4, BAIH: 1 } },
      { id: "E", text: "无视", weights: { IMFW: 2, DANR: 2, NPC: 2 } }
    ]
  },
  {
    id: "Q_single_647",
    type: "single",
    text: "你的车被刮了但找不到肇事者，你会？",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 3, HOUJ: 4 } },
      { id: "B", text: "记仇", weights: { YUAN: 3, KAOG: 4, JING: 4 } },
      { id: "C", text: "原谅", weights: { NORM: 4, SHENG: 1, TAOH: 4 } },
      { id: "D", text: "远离", weights: { GHOST: 4, XIAN: 4, IMFW: 4 } },
      { id: "E", text: "报复", weights: { HUIM: 4, CPU: 1, YINY: 1 } }
    ]
  },
  {
    id: "Q_single_648",
    type: "single",
    text: "你的信用卡被盗刷了，你会？",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 3, BAOZ: 4, DPENG: 3 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 4, MAIM: 1 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 2, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 2, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 4, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_649",
    type: "single",
    text: "你的投资亏了 50%，你会？",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 2, BAOZ: 2, PING: 1 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 4, TAOH: 1 } },
      { id: "C", text: "拖延", weights: { TUOY: 1, XUANZ: 1, IMFW: 3 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 4, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 4, NORM: 4 } }
    ]
  },
  {
    id: "Q_single_650",
    type: "single",
    text: "你的手机掉马桶里了，你会？",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 2, PING: 1 } },
      { id: "B", text: "法律途径", weights: { BOSS: 1, PDF: 1, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 4, YINY: 4 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 2, WONANG: 3 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 1, BOSS: 1, SHEK: 3 } }
    ]
  },
  {
    id: "Q_single_651",
    type: "single",
    text: "你的身份证丢了且急用，你会？",
    options: [
      { id: "A", text: "撕破脸", weights: { HOUJ: 1, BAOZ: 4, HEIH: 1 } },
      { id: "B", text: "维持表面和平", weights: { YINY: 4, NPC: 3, TAOH: 2 } },
      { id: "C", text: "彻底消失", weights: { GHOST: 4, 404: 3, IMFW: 4 } },
      { id: "D", text: "假装没事", weights: { BIAO: 4, NPC: 1, ZIL: 1 } },
      { id: "E", text: "找台阶下", weights: { POET: 2, WONANG: 3, NORM: 4 } }
    ]
  },
  {
    id: "Q_single_652",
    type: "single",
    text: "你的航班起飞前你才发现去错机场，你会？",
    options: [
      { id: "A", text: "战斗", weights: { HITER: 2, PING: 1, BAOZ: 4 } },
      { id: "B", text: "逃跑", weights: { GHOST: 2, IMFW: 4, SLEEP: 4 } },
      { id: "C", text: "装死", weights: { NPC: 2, SLEEP: 2, XIAN: 4 } },
      { id: "D", text: "谈判", weights: { BOSS: 2, LIKE: 4, NORM: 1 } },
      { id: "E", text: "求饶", weights: { WONANG: 1, SHIL: 3, MAIM: 1 } }
    ]
  },
  {
    id: "Q_single_653",
    type: "single",
    text: "你的合租对象带陌生人过夜，你会？",
    options: [
      { id: "A", text: "正面冲突", weights: { HOUJ: 4, BAOZ: 3, FENN: 3 } },
      { id: "B", text: "暗地报复", weights: { YUAN: 2, CPU: 3, YINY: 1 } },
      { id: "C", text: "大度原谅", weights: { SHENG: 2, NORM: 3, BOSS: 2 } },
      { id: "D", text: "断绝来往", weights: { HEIH: 1, LENGL: 2, GHOST: 2 } },
      { id: "E", text: "寻求调解", weights: { DAREN: 4, BOSS: 1, LIKE: 2 } }
    ]
  },
  {
    id: "Q_single_654",
    type: "single",
    text: "你的老板凌晨三点发消息，你会？",
    options: [
      { id: "A", text: "咆哮", weights: { HOUJ: 3, BAOZ: 4, DPENG: 2 } },
      { id: "B", text: "抑郁", weights: { WEMO: 2, BENG: 1, POET: 3 } },
      { id: "C", text: "讽刺", weights: { CHAO: 4, YINY: 3, TROLL: 3 } },
      { id: "D", text: "无视", weights: { IMFW: 2, DANR: 1, NPC: 2 } },
      { id: "E", text: "沟通", weights: { BOSS: 1, NORM: 3, OPEN: 4 } }
    ]
  },
  {
    id: "Q_single_655",
    type: "single",
    text: "你的家人未经允许扔了你的东西，你会？",
    options: [
      { id: "A", text: "干就完了", weights: { YOLO: 3, PING: 2, HITER: 4 } },
      { id: "B", text: "算了算了", weights: { IMFW: 2, XIAN: 4, SLEEP: 4 } },
      { id: "C", text: "以其人之道", weights: { CPU: 1, YINY: 2, YUAN: 1 } },
      { id: "D", text: "找外援", weights: { BOSS: 1, DAREN: 2, SHEK: 3 } },
      { id: "E", text: "独自消化", weights: { WONANG: 3, POET: 2, BENG: 4 } }
    ]
  },
  {
    id: "Q_single_656",
    type: "single",
    text: "你的朋友圈被领导要求转发广告，你会？",
    options: [
      { id: "A", text: "骂街", weights: { HOUJ: 4, BAOZ: 1, KEYB: 4 } },
      { id: "B", text: "拉黑", weights: { HEIH: 3, GHOST: 1, LENGL: 4 } },
      { id: "C", text: "讲道理", weights: { LIKE: 4, BOSS: 1, NORM: 3 } },
      { id: "D", text: "忍", weights: { WONANG: 4, SERF: 4, TAOH: 2 } },
      { id: "E", text: "闹", weights: { BENG: 1, WEMO: 2, BIAO: 3 } }
    ]
  },
  {
    id: "Q_single_657",
    type: "single",
    text: "你的微信群被拉进卖保险的人，你会？",
    options: [
      { id: "A", text: "拍桌子", weights: { HOUJ: 3, BAOZ: 3, PING: 2 } },
      { id: "B", text: "掉眼泪", weights: { WEMO: 2, MAIM: 1, BENG: 2 } },
      { id: "C", text: "翻白眼", weights: { CHAO: 1, YINY: 2, IMFW: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 3, YOLO: 1, PING: 2 } },
      { id: "E", text: "好言相劝", weights: { NORM: 4, SHENG: 2, BOSS: 1 } }
    ]
  },
  {
    id: "Q_single_658",
    type: "single",
    text: "你的健身房教练身材还没你好，你会？",
    options: [
      { id: "A", text: "报警", weights: { BOSS: 2, NORM: 1, PDF: 1 } },
      { id: "B", text: "网暴", weights: { CHAO: 4, YINY: 1, HITER: 2 } },
      { id: "C", text: "私了", weights: { CPU: 2, YINY: 3, BOSS: 4 } },
      { id: "D", text: "忍受", weights: { WONANG: 4, SHIL: 4, SERF: 2 } },
      { id: "E", text: "搬家", weights: { GHOST: 1, IMFW: 4, YOLO: 1 } }
    ]
  },
  {
    id: "Q_single_659",
    type: "single",
    text: "你的面试面试官全程玩手机，你会？",
    options: [
      { id: "A", text: "干他", weights: { HITER: 1, BAOZ: 2, YOLO: 3 } },
      { id: "B", text: "躲他", weights: { GHOST: 3, GELI: 2, SHUS: 1 } },
      { id: "C", text: "阴他", weights: { YINY: 4, CPU: 4, YUAN: 3 } },
      { id: "D", text: "帮他", weights: { DAREN: 1, SHENG: 1, NORM: 4 } },
      { id: "E", text: "忘了他", weights: { IMFW: 3, XIAN: 3, SLEEP: 4 } }
    ]
  },
  {
    id: "Q_single_660",
    type: "single",
    text: "你的签证被拒了，你会？",
    options: [
      { id: "A", text: "直接翻脸", weights: { HOUJ: 1, BAOZ: 3, HITER: 4 } },
      { id: "B", text: "忍气吞声", weights: { WONANG: 2, MAIM: 3, SERF: 2 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 2, CHAO: 4, CPU: 4 } },
      { id: "D", text: "溜之大吉", weights: { GHOST: 2, IMFW: 4, YOLO: 2 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 2, WEMO: 2, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_661",
    type: "single",
    text: "你的演唱会站了六小时但啥也看不见，你会？",
    options: [
      { id: "A", text: "正面硬刚", weights: { PING: 4, HOUJ: 1, HITER: 3 } },
      { id: "B", text: "背后使绊子", weights: { YUAN: 1, CPU: 2, YINY: 1 } },
      { id: "C", text: "默默忍受", weights: { WONANG: 2, SHIL: 4, TAOH: 3 } },
      { id: "D", text: "断绝关系", weights: { HEIH: 1, LENGL: 2, HUIM: 3 } },
      { id: "E", text: "寻求帮助", weights: { DAREN: 4, BOSS: 3, SHEK: 2 } }
    ]
  },
  {
    id: "Q_single_662",
    type: "single",
    text: "你的剧本杀队友全程挂机，你会？",
    options: [
      { id: "A", text: "发飙", weights: { BAOZ: 4, HOUJ: 1, FENN: 4 } },
      { id: "B", text: "冷处理", weights: { LENGL: 4, GHOST: 2, HEIH: 3 } },
      { id: "C", text: "讲道理", weights: { BOSS: 2, LIKE: 3, NORM: 1 } },
      { id: "D", text: "卖惨", weights: { MAIM: 2, WEMO: 3, BAIH: 3 } },
      { id: "E", text: "无视", weights: { IMFW: 2, DANR: 4, NPC: 3 } }
    ]
  },
  {
    id: "Q_single_663",
    type: "single",
    text: "你的密室逃脱队友吓得把你推倒，你会？",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 2, GANG: 3, HOUJ: 2 } },
      { id: "B", text: "记仇", weights: { YUAN: 1, KAOG: 3, JING: 4 } },
      { id: "C", text: "原谅", weights: { NORM: 1, SHENG: 1, TAOH: 2 } },
      { id: "D", text: "远离", weights: { GHOST: 1, XIAN: 2, IMFW: 4 } },
      { id: "E", text: "报复", weights: { HUIM: 2, CPU: 4, YINY: 3 } }
    ]
  },
  {
    id: "Q_single_664",
    type: "single",
    text: "你的剧本拿到边缘角色，你会？",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 3, BAOZ: 4, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 2, WEMO: 4, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 4, CHAO: 4, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 3, DANR: 3, SLEEP: 4 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 3, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_665",
    type: "single",
    text: "你的旅游团强制购物，你会？",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 1, BAOZ: 1, PING: 2 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 3, TAOH: 1 } },
      { id: "C", text: "拖延", weights: { TUOY: 1, XUANZ: 3, IMFW: 2 } },
      { id: "D", text: "转移话题", weights: { YINY: 1, CPU: 2, BIAO: 2 } },
      { id: "E", text: "道歉", weights: { WONANG: 3, BEIH: 4, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_666",
    type: "single",
    text: "你的酒店床上有头发，你会？",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 1, YOLO: 3, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 4, NORM: 2 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 1, FOMO: 1, YINY: 3 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 2, WONANG: 2 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 3, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_667",
    type: "single",
    text: "你的高铁座位被霸占了，你会？",
    options: [
      { id: "A", text: "撕破脸", weights: { HOUJ: 2, BAOZ: 3, HEIH: 4 } },
      { id: "B", text: "维持表面和平", weights: { YINY: 4, NPC: 3, TAOH: 1 } },
      { id: "C", text: "彻底消失", weights: { GHOST: 4, 404: 4, IMFW: 2 } },
      { id: "D", text: "假装没事", weights: { BIAO: 3, NPC: 3, ZIL: 2 } },
      { id: "E", text: "找台阶下", weights: { POET: 1, WONANG: 2, NORM: 4 } }
    ]
  },
  {
    id: "Q_single_668",
    type: "single",
    text: "你的网红餐厅排队两小时但很难吃，你会？",
    options: [
      { id: "A", text: "战斗", weights: { HITER: 1, PING: 3, BAOZ: 3 } },
      { id: "B", text: "逃跑", weights: { GHOST: 3, IMFW: 2, SLEEP: 3 } },
      { id: "C", text: "装死", weights: { NPC: 3, SLEEP: 2, XIAN: 4 } },
      { id: "D", text: "谈判", weights: { BOSS: 2, LIKE: 1, NORM: 4 } },
      { id: "E", text: "求饶", weights: { WONANG: 2, SHIL: 4, MAIM: 4 } }
    ]
  },
  {
    id: "Q_single_669",
    type: "single",
    text: "你的剧本杀dm全程念稿无感情，你会？",
    options: [
      { id: "A", text: "正面冲突", weights: { HOUJ: 1, BAOZ: 3, FENN: 3 } },
      { id: "B", text: "暗地报复", weights: { YUAN: 2, CPU: 4, YINY: 4 } },
      { id: "C", text: "大度原谅", weights: { SHENG: 4, NORM: 1, BOSS: 3 } },
      { id: "D", text: "断绝来往", weights: { HEIH: 2, LENGL: 2, GHOST: 1 } },
      { id: "E", text: "寻求调解", weights: { DAREN: 4, BOSS: 3, LIKE: 3 } }
    ]
  },
  {
    id: "Q_single_670",
    type: "single",
    text: "你的盲盒开了十个都是雷款，你会？",
    options: [
      { id: "A", text: "咆哮", weights: { HOUJ: 3, BAOZ: 1, DPENG: 3 } },
      { id: "B", text: "抑郁", weights: { WEMO: 2, BENG: 2, POET: 2 } },
      { id: "C", text: "讽刺", weights: { CHAO: 1, YINY: 1, TROLL: 4 } },
      { id: "D", text: "无视", weights: { IMFW: 2, DANR: 4, NPC: 1 } },
      { id: "E", text: "沟通", weights: { BOSS: 3, NORM: 1, OPEN: 4 } }
    ]
  },
  {
    id: "Q_single_671",
    type: "single",
    text: "你的刮刮乐买了 100 一张没中，你会？",
    options: [
      { id: "A", text: "干就完了", weights: { YOLO: 2, PING: 2, HITER: 3 } },
      { id: "B", text: "算了算了", weights: { IMFW: 4, XIAN: 1, SLEEP: 1 } },
      { id: "C", text: "以其人之道", weights: { CPU: 2, YINY: 1, YUAN: 3 } },
      { id: "D", text: "找外援", weights: { BOSS: 1, DAREN: 4, SHEK: 4 } },
      { id: "E", text: "独自消化", weights: { WONANG: 4, POET: 3, BENG: 2 } }
    ]
  },
  {
    id: "Q_single_672",
    type: "single",
    text: "你的游戏队友挂机还骂人，你会？",
    options: [
      { id: "A", text: "骂街", weights: { HOUJ: 1, BAOZ: 3, KEYB: 3 } },
      { id: "B", text: "拉黑", weights: { HEIH: 4, GHOST: 4, LENGL: 1 } },
      { id: "C", text: "讲道理", weights: { LIKE: 1, BOSS: 2, NORM: 2 } },
      { id: "D", text: "忍", weights: { WONANG: 2, SERF: 2, TAOH: 3 } },
      { id: "E", text: "闹", weights: { BENG: 2, WEMO: 2, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_673",
    type: "single",
    text: "你的直播弹幕全是黑粉，你会？",
    options: [
      { id: "A", text: "拍桌子", weights: { HOUJ: 3, BAOZ: 4, PING: 2 } },
      { id: "B", text: "掉眼泪", weights: { WEMO: 1, MAIM: 4, BENG: 2 } },
      { id: "C", text: "翻白眼", weights: { CHAO: 3, YINY: 4, IMFW: 2 } },
      { id: "D", text: "转身离开", weights: { GHOST: 1, YOLO: 2, PING: 4 } },
      { id: "E", text: "好言相劝", weights: { NORM: 3, SHENG: 3, BOSS: 2 } }
    ]
  },
  {
    id: "Q_single_674",
    type: "single",
    text: "你的小说主角被读者要求写死，你会？",
    options: [
      { id: "A", text: "报警", weights: { BOSS: 2, NORM: 2, PDF: 3 } },
      { id: "B", text: "网暴", weights: { CHAO: 2, YINY: 1, HITER: 2 } },
      { id: "C", text: "私了", weights: { CPU: 3, YINY: 4, BOSS: 3 } },
      { id: "D", text: "忍受", weights: { WONANG: 2, SHIL: 4, SERF: 2 } },
      { id: "E", text: "搬家", weights: { GHOST: 4, IMFW: 2, YOLO: 1 } }
    ]
  },
  {
    id: "Q_single_675",
    type: "single",
    text: "你的 cos 照被说还原度低，你会？",
    options: [
      { id: "A", text: "干他", weights: { HITER: 3, BAOZ: 2, YOLO: 2 } },
      { id: "B", text: "躲他", weights: { GHOST: 4, GELI: 1, SHUS: 1 } },
      { id: "C", text: "阴他", weights: { YINY: 1, CPU: 4, YUAN: 4 } },
      { id: "D", text: "帮他", weights: { DAREN: 4, SHENG: 1, NORM: 1 } },
      { id: "E", text: "忘了他", weights: { IMFW: 2, XIAN: 3, SLEEP: 3 } }
    ]
  },
  {
    id: "Q_single_676",
    type: "single",
    text: "你的画被甲方要求改第 18 版，你会？",
    options: [
      { id: "A", text: "直接翻脸", weights: { HOUJ: 1, BAOZ: 1, HITER: 3 } },
      { id: "B", text: "忍气吞声", weights: { WONANG: 4, MAIM: 4, SERF: 3 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 1, CHAO: 1, CPU: 1 } },
      { id: "D", text: "溜之大吉", weights: { GHOST: 1, IMFW: 4, YOLO: 1 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 1, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_677",
    type: "single",
    text: "你的代码被实习生改成屎山，你会？",
    options: [
      { id: "A", text: "正面硬刚", weights: { PING: 1, HOUJ: 2, HITER: 2 } },
      { id: "B", text: "背后使绊子", weights: { YUAN: 4, CPU: 1, YINY: 2 } },
      { id: "C", text: "默默忍受", weights: { WONANG: 3, SHIL: 2, TAOH: 3 } },
      { id: "D", text: "断绝关系", weights: { HEIH: 3, LENGL: 2, HUIM: 4 } },
      { id: "E", text: "寻求帮助", weights: { DAREN: 3, BOSS: 1, SHEK: 2 } }
    ]
  },
  {
    id: "Q_single_678",
    type: "single",
    text: "你的设计方案被客户说不如第一版，你会？",
    options: [
      { id: "A", text: "发飙", weights: { BAOZ: 4, HOUJ: 2, FENN: 1 } },
      { id: "B", text: "冷处理", weights: { LENGL: 2, GHOST: 3, HEIH: 1 } },
      { id: "C", text: "讲道理", weights: { BOSS: 3, LIKE: 3, NORM: 4 } },
      { id: "D", text: "卖惨", weights: { MAIM: 2, WEMO: 2, BAIH: 3 } },
      { id: "E", text: "无视", weights: { IMFW: 2, DANR: 1, NPC: 3 } }
    ]
  },
  {
    id: "Q_single_679",
    type: "single",
    text: "你的项目上线就崩了，你会？",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 4, GANG: 1, HOUJ: 3 } },
      { id: "B", text: "记仇", weights: { YUAN: 4, KAOG: 3, JING: 2 } },
      { id: "C", text: "原谅", weights: { NORM: 1, SHENG: 4, TAOH: 4 } },
      { id: "D", text: "远离", weights: { GHOST: 2, XIAN: 2, IMFW: 3 } },
      { id: "E", text: "报复", weights: { HUIM: 3, CPU: 2, YINY: 2 } }
    ]
  },
  {
    id: "Q_single_680",
    type: "single",
    text: "你的 PPT 演讲时电脑死机，你会？",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 3, BAOZ: 2, DPENG: 3 } },
      { id: "B", text: "哭泣", weights: { BENG: 4, WEMO: 4, MAIM: 1 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 2, LENGL: 3 } },
      { id: "D", text: "沉默", weights: { GHOST: 3, DANR: 1, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 4, DYOR: 4 } }
    ]
  },
  {
    id: "Q_single_681",
    type: "single",
    text: "你的简历被 HR 说没亮点，你会？",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 1, BAOZ: 1, PING: 2 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 1, TAOH: 3 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 4, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 1, CPU: 4, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 3, BEIH: 3, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_682",
    type: "single",
    text: "你的面试被说期望薪资太高，你会？",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 2, PING: 1 } },
      { id: "B", text: "法律途径", weights: { BOSS: 1, PDF: 4, NORM: 3 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 1, FOMO: 4, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 2, WONANG: 4 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 2, BOSS: 4, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_683",
    type: "single",
    text: "你的实习工资还没生活费多，你会？",
    options: [
      { id: "A", text: "撕破脸", weights: { HOUJ: 1, BAOZ: 1, HEIH: 3 } },
      { id: "B", text: "维持表面和平", weights: { YINY: 4, NPC: 2, TAOH: 3 } },
      { id: "C", text: "彻底消失", weights: { GHOST: 1, 404: 3, IMFW: 4 } },
      { id: "D", text: "假装没事", weights: { BIAO: 2, NPC: 4, ZIL: 4 } },
      { id: "E", text: "找台阶下", weights: { POET: 2, WONANG: 4, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_684",
    type: "single",
    text: "你的房租占了工资一半，你会？",
    options: [
      { id: "A", text: "战斗", weights: { HITER: 4, PING: 3, BAOZ: 2 } },
      { id: "B", text: "逃跑", weights: { GHOST: 1, IMFW: 2, SLEEP: 4 } },
      { id: "C", text: "装死", weights: { NPC: 4, SLEEP: 3, XIAN: 3 } },
      { id: "D", text: "谈判", weights: { BOSS: 2, LIKE: 1, NORM: 3 } },
      { id: "E", text: "求饶", weights: { WONANG: 4, SHIL: 3, MAIM: 4 } }
    ]
  },
  {
    id: "Q_single_685",
    type: "single",
    text: "你的通勤时间单程两小时，你会？",
    options: [
      { id: "A", text: "正面冲突", weights: { HOUJ: 4, BAOZ: 2, FENN: 1 } },
      { id: "B", text: "暗地报复", weights: { YUAN: 4, CPU: 1, YINY: 1 } },
      { id: "C", text: "大度原谅", weights: { SHENG: 3, NORM: 2, BOSS: 1 } },
      { id: "D", text: "断绝来往", weights: { HEIH: 1, LENGL: 3, GHOST: 3 } },
      { id: "E", text: "寻求调解", weights: { DAREN: 1, BOSS: 2, LIKE: 1 } }
    ]
  },
  {
    id: "Q_single_686",
    type: "single",
    text: "你的工位在厕所门口，你会？",
    options: [
      { id: "A", text: "咆哮", weights: { HOUJ: 3, BAOZ: 4, DPENG: 4 } },
      { id: "B", text: "抑郁", weights: { WEMO: 4, BENG: 3, POET: 1 } },
      { id: "C", text: "讽刺", weights: { CHAO: 4, YINY: 3, TROLL: 3 } },
      { id: "D", text: "无视", weights: { IMFW: 1, DANR: 1, NPC: 4 } },
      { id: "E", text: "沟通", weights: { BOSS: 4, NORM: 3, OPEN: 3 } }
    ]
  },
  {
    id: "Q_single_687",
    type: "single",
    text: "你的团建安排在周末且必须参加，你会？",
    options: [
      { id: "A", text: "干就完了", weights: { YOLO: 1, PING: 4, HITER: 1 } },
      { id: "B", text: "算了算了", weights: { IMFW: 1, XIAN: 1, SLEEP: 3 } },
      { id: "C", text: "以其人之道", weights: { CPU: 1, YINY: 2, YUAN: 3 } },
      { id: "D", text: "找外援", weights: { BOSS: 1, DAREN: 4, SHEK: 3 } },
      { id: "E", text: "独自消化", weights: { WONANG: 4, POET: 1, BENG: 3 } }
    ]
  },
  {
    id: "Q_single_688",
    type: "single",
    text: "你的年会要你表演节目，你会？",
    options: [
      { id: "A", text: "骂街", weights: { HOUJ: 2, BAOZ: 4, KEYB: 2 } },
      { id: "B", text: "拉黑", weights: { HEIH: 2, GHOST: 3, LENGL: 4 } },
      { id: "C", text: "讲道理", weights: { LIKE: 4, BOSS: 3, NORM: 2 } },
      { id: "D", text: "忍", weights: { WONANG: 2, SERF: 3, TAOH: 3 } },
      { id: "E", text: "闹", weights: { BENG: 3, WEMO: 2, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_689",
    type: "single",
    text: "你的同事每天带饭但从不洗碗，你会？",
    options: [
      { id: "A", text: "拍桌子", weights: { HOUJ: 4, BAOZ: 4, PING: 2 } },
      { id: "B", text: "掉眼泪", weights: { WEMO: 2, MAIM: 2, BENG: 4 } },
      { id: "C", text: "翻白眼", weights: { CHAO: 1, YINY: 3, IMFW: 1 } },
      { id: "D", text: "转身离开", weights: { GHOST: 3, YOLO: 2, PING: 2 } },
      { id: "E", text: "好言相劝", weights: { NORM: 3, SHENG: 3, BOSS: 2 } }
    ]
  },
  {
    id: "Q_single_690",
    type: "single",
    text: "你的公司厕所永远没纸，你会？",
    options: [
      { id: "A", text: "报警", weights: { BOSS: 2, NORM: 1, PDF: 1 } },
      { id: "B", text: "网暴", weights: { CHAO: 2, YINY: 3, HITER: 3 } },
      { id: "C", text: "私了", weights: { CPU: 4, YINY: 3, BOSS: 1 } },
      { id: "D", text: "忍受", weights: { WONANG: 1, SHIL: 1, SERF: 1 } },
      { id: "E", text: "搬家", weights: { GHOST: 3, IMFW: 2, YOLO: 2 } }
    ]
  },
  {
    id: "Q_single_691",
    type: "single",
    text: "你的老板开会两小时没有结论，你会？",
    options: [
      { id: "A", text: "干他", weights: { HITER: 2, BAOZ: 1, YOLO: 4 } },
      { id: "B", text: "躲他", weights: { GHOST: 3, GELI: 4, SHUS: 4 } },
      { id: "C", text: "阴他", weights: { YINY: 3, CPU: 2, YUAN: 2 } },
      { id: "D", text: "帮他", weights: { DAREN: 3, SHENG: 4, NORM: 3 } },
      { id: "E", text: "忘了他", weights: { IMFW: 1, XIAN: 3, SLEEP: 1 } }
    ]
  },
  {
    id: "Q_single_692",
    type: "single",
    text: "你的 KPI 设置得明显完不成，你会？",
    options: [
      { id: "A", text: "直接翻脸", weights: { HOUJ: 4, BAOZ: 4, HITER: 2 } },
      { id: "B", text: "忍气吞声", weights: { WONANG: 2, MAIM: 3, SERF: 3 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 4, CPU: 1 } },
      { id: "D", text: "溜之大吉", weights: { GHOST: 2, IMFW: 3, YOLO: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 4, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_693",
    type: "single",
    text: "你的加班没有加班费且不被认可，你会？",
    options: [
      { id: "A", text: "正面硬刚", weights: { PING: 3, HOUJ: 2, HITER: 2 } },
      { id: "B", text: "背后使绊子", weights: { YUAN: 4, CPU: 4, YINY: 1 } },
      { id: "C", text: "默默忍受", weights: { WONANG: 4, SHIL: 1, TAOH: 2 } },
      { id: "D", text: "断绝关系", weights: { HEIH: 3, LENGL: 4, HUIM: 3 } },
      { id: "E", text: "寻求帮助", weights: { DAREN: 4, BOSS: 2, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_694",
    type: "single",
    text: "你的调休申请永远不被批准，你会？",
    options: [
      { id: "A", text: "发飙", weights: { BAOZ: 4, HOUJ: 1, FENN: 2 } },
      { id: "B", text: "冷处理", weights: { LENGL: 3, GHOST: 3, HEIH: 4 } },
      { id: "C", text: "讲道理", weights: { BOSS: 1, LIKE: 3, NORM: 3 } },
      { id: "D", text: "卖惨", weights: { MAIM: 1, WEMO: 3, BAIH: 2 } },
      { id: "E", text: "无视", weights: { IMFW: 4, DANR: 4, NPC: 2 } }
    ]
  },
  {
    id: "Q_single_695",
    type: "single",
    text: "你的请假被问东问西，你会？",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 4, HOUJ: 1 } },
      { id: "B", text: "记仇", weights: { YUAN: 1, KAOG: 3, JING: 4 } },
      { id: "C", text: "原谅", weights: { NORM: 3, SHENG: 3, TAOH: 3 } },
      { id: "D", text: "远离", weights: { GHOST: 3, XIAN: 1, IMFW: 1 } },
      { id: "E", text: "报复", weights: { HUIM: 1, CPU: 3, YINY: 4 } }
    ]
  },
  {
    id: "Q_single_696",
    type: "single",
    text: "你的离职被领导谈话三次挽留，你会？",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 3, BAOZ: 1, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 1, WEMO: 4, MAIM: 2 } },
      { id: "C", text: "冷笑", weights: { YINY: 4, CHAO: 1, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 2, SLEEP: 2 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 1, DYOR: 2 } }
    ]
  },
  {
    id: "Q_single_697",
    type: "single",
    text: "你的新工作发现是坑，你会？",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 1, BAOZ: 1, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 4, SERF: 4, TAOH: 2 } },
      { id: "C", text: "拖延", weights: { TUOY: 3, XUANZ: 3, IMFW: 1 } },
      { id: "D", text: "转移话题", weights: { YINY: 2, CPU: 1, BIAO: 2 } },
      { id: "E", text: "道歉", weights: { WONANG: 4, BEIH: 4, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_698",
    type: "single",
    text: "你的全职备考三年没上岸，你会？",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 1, PING: 1 } },
      { id: "B", text: "法律途径", weights: { BOSS: 2, PDF: 1, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 4, YINY: 4 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 1, WONANG: 4 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 2, BOSS: 1, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_699",
    type: "single",
    text: "你的留学申请全聚德，你会？",
    options: [
      { id: "A", text: "撕破脸", weights: { HOUJ: 3, BAOZ: 1, HEIH: 2 } },
      { id: "B", text: "维持表面和平", weights: { YINY: 3, NPC: 1, TAOH: 3 } },
      { id: "C", text: "彻底消失", weights: { GHOST: 3, 404: 4, IMFW: 4 } },
      { id: "D", text: "假装没事", weights: { BIAO: 4, NPC: 3, ZIL: 1 } },
      { id: "E", text: "找台阶下", weights: { POET: 2, WONANG: 3, NORM: 4 } }
    ]
  },
  {
    id: "Q_single_700",
    type: "single",
    text: "你的创业三个月倒闭，你会？",
    options: [
      { id: "A", text: "战斗", weights: { HITER: 4, PING: 4, BAOZ: 3 } },
      { id: "B", text: "逃跑", weights: { GHOST: 3, IMFW: 2, SLEEP: 4 } },
      { id: "C", text: "装死", weights: { NPC: 4, SLEEP: 1, XIAN: 2 } },
      { id: "D", text: "谈判", weights: { BOSS: 3, LIKE: 3, NORM: 2 } },
      { id: "E", text: "求饶", weights: { WONANG: 3, SHIL: 3, MAIM: 2 } }
    ]
  },
  {
    id: "Q_single_701",
    type: "single",
    text: "你的相亲对象隐瞒婚史，你会？",
    options: [
      { id: "A", text: "正面冲突", weights: { HOUJ: 3, BAOZ: 4, FENN: 2 } },
      { id: "B", text: "暗地报复", weights: { YUAN: 4, CPU: 2, YINY: 1 } },
      { id: "C", text: "大度原谅", weights: { SHENG: 1, NORM: 1, BOSS: 2 } },
      { id: "D", text: "断绝来往", weights: { HEIH: 2, LENGL: 1, GHOST: 1 } },
      { id: "E", text: "寻求调解", weights: { DAREN: 3, BOSS: 1, LIKE: 3 } }
    ]
  },
  {
    id: "Q_single_702",
    type: "single",
    text: "你的恋爱三年发现被绿，你会？",
    options: [
      { id: "A", text: "咆哮", weights: { HOUJ: 1, BAOZ: 4, DPENG: 1 } },
      { id: "B", text: "抑郁", weights: { WEMO: 1, BENG: 3, POET: 2 } },
      { id: "C", text: "讽刺", weights: { CHAO: 4, YINY: 1, TROLL: 2 } },
      { id: "D", text: "无视", weights: { IMFW: 1, DANR: 3, NPC: 1 } },
      { id: "E", text: "沟通", weights: { BOSS: 1, NORM: 2, OPEN: 3 } }
    ]
  },
  {
    id: "Q_single_703",
    type: "single",
    text: "你的对象和异性没有边界感，你会？",
    options: [
      { id: "A", text: "干就完了", weights: { YOLO: 2, PING: 3, HITER: 2 } },
      { id: "B", text: "算了算了", weights: { IMFW: 3, XIAN: 2, SLEEP: 4 } },
      { id: "C", text: "以其人之道", weights: { CPU: 3, YINY: 3, YUAN: 3 } },
      { id: "D", text: "找外援", weights: { BOSS: 3, DAREN: 1, SHEK: 2 } },
      { id: "E", text: "独自消化", weights: { WONANG: 3, POET: 4, BENG: 3 } }
    ]
  },
  {
    id: "Q_single_704",
    type: "single",
    text: "你的对象要求查你手机，你会？",
    options: [
      { id: "A", text: "骂街", weights: { HOUJ: 2, BAOZ: 3, KEYB: 3 } },
      { id: "B", text: "拉黑", weights: { HEIH: 3, GHOST: 3, LENGL: 2 } },
      { id: "C", text: "讲道理", weights: { LIKE: 2, BOSS: 3, NORM: 2 } },
      { id: "D", text: "忍", weights: { WONANG: 4, SERF: 4, TAOH: 4 } },
      { id: "E", text: "闹", weights: { BENG: 1, WEMO: 1, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_705",
    type: "single",
    text: "你的对象在游戏里和别人组 CP，你会？",
    options: [
      { id: "A", text: "拍桌子", weights: { HOUJ: 3, BAOZ: 2, PING: 1 } },
      { id: "B", text: "掉眼泪", weights: { WEMO: 4, MAIM: 2, BENG: 2 } },
      { id: "C", text: "翻白眼", weights: { CHAO: 2, YINY: 2, IMFW: 4 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 3, PING: 2 } },
      { id: "E", text: "好言相劝", weights: { NORM: 1, SHENG: 3, BOSS: 3 } }
    ]
  },
  {
    id: "Q_single_706",
    type: "single",
    text: "你的对象忘记你们纪念日，你会？",
    options: [
      { id: "A", text: "报警", weights: { BOSS: 2, NORM: 1, PDF: 3 } },
      { id: "B", text: "网暴", weights: { CHAO: 3, YINY: 4, HITER: 4 } },
      { id: "C", text: "私了", weights: { CPU: 4, YINY: 1, BOSS: 1 } },
      { id: "D", text: "忍受", weights: { WONANG: 2, SHIL: 3, SERF: 4 } },
      { id: "E", text: "搬家", weights: { GHOST: 4, IMFW: 4, YOLO: 4 } }
    ]
  },
  {
    id: "Q_single_707",
    type: "single",
    text: "你的对象送你不喜欢的礼物，你会？",
    options: [
      { id: "A", text: "干他", weights: { HITER: 3, BAOZ: 2, YOLO: 1 } },
      { id: "B", text: "躲他", weights: { GHOST: 4, GELI: 4, SHUS: 3 } },
      { id: "C", text: "阴他", weights: { YINY: 3, CPU: 2, YUAN: 1 } },
      { id: "D", text: "帮他", weights: { DAREN: 4, SHENG: 2, NORM: 4 } },
      { id: "E", text: "忘了他", weights: { IMFW: 3, XIAN: 4, SLEEP: 2 } }
    ]
  },
  {
    id: "Q_single_708",
    type: "single",
    text: "你的对象做饭很难吃但坚持要做，你会？",
    options: [
      { id: "A", text: "直接翻脸", weights: { HOUJ: 1, BAOZ: 3, HITER: 1 } },
      { id: "B", text: "忍气吞声", weights: { WONANG: 1, MAIM: 1, SERF: 3 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 2, CHAO: 3, CPU: 3 } },
      { id: "D", text: "溜之大吉", weights: { GHOST: 1, IMFW: 3, YOLO: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 4, WEMO: 1, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_709",
    type: "single",
    text: "你的对象唱歌跑调还非要表演，你会？",
    options: [
      { id: "A", text: "正面硬刚", weights: { PING: 4, HOUJ: 4, HITER: 2 } },
      { id: "B", text: "背后使绊子", weights: { YUAN: 3, CPU: 1, YINY: 2 } },
      { id: "C", text: "默默忍受", weights: { WONANG: 2, SHIL: 4, TAOH: 3 } },
      { id: "D", text: "断绝关系", weights: { HEIH: 1, LENGL: 3, HUIM: 3 } },
      { id: "E", text: "寻求帮助", weights: { DAREN: 3, BOSS: 4, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_710",
    type: "single",
    text: "你的对象天天刷短视频不理你，你会？",
    options: [
      { id: "A", text: "发飙", weights: { BAOZ: 4, HOUJ: 3, FENN: 2 } },
      { id: "B", text: "冷处理", weights: { LENGL: 1, GHOST: 4, HEIH: 4 } },
      { id: "C", text: "讲道理", weights: { BOSS: 2, LIKE: 2, NORM: 1 } },
      { id: "D", text: "卖惨", weights: { MAIM: 4, WEMO: 1, BAIH: 2 } },
      { id: "E", text: "无视", weights: { IMFW: 3, DANR: 1, NPC: 3 } }
    ]
  },
  {
    id: "Q_single_711",
    type: "single",
    text: "你的对象跟你借钱不还，你会？",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 2, GANG: 3, HOUJ: 4 } },
      { id: "B", text: "记仇", weights: { YUAN: 3, KAOG: 3, JING: 1 } },
      { id: "C", text: "原谅", weights: { NORM: 3, SHENG: 1, TAOH: 2 } },
      { id: "D", text: "远离", weights: { GHOST: 3, XIAN: 1, IMFW: 1 } },
      { id: "E", text: "报复", weights: { HUIM: 3, CPU: 4, YINY: 1 } }
    ]
  },
  {
    id: "Q_single_712",
    type: "single",
    text: "你的对象在父母面前贬低你，你会？",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 4, DPENG: 2 } },
      { id: "B", text: "哭泣", weights: { BENG: 2, WEMO: 2, MAIM: 2 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 4, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 2, SLEEP: 2 } },
      { id: "E", text: "解释", weights: { BOSS: 2, LIKE: 2, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_713",
    type: "single",
    text: "你的对象坚决不改你无法忍受的缺点，你会？",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 2, BAOZ: 2, PING: 1 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 3, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 3, XUANZ: 4, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 2, CPU: 2, BIAO: 2 } },
      { id: "E", text: "道歉", weights: { WONANG: 4, BEIH: 4, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_714",
    type: "single",
    text: "你的对象说“我妈觉得我们不合适”，你会？",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 3, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 4, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 1, YINY: 1 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 3, XIAN: 4, WONANG: 3 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 1, BOSS: 2, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_715",
    type: "single",
    text: "你的对象在朋友圈从来不发你，你会？",
    options: [
      { id: "A", text: "撕破脸", weights: { HOUJ: 4, BAOZ: 4, HEIH: 1 } },
      { id: "B", text: "维持表面和平", weights: { YINY: 2, NPC: 3, TAOH: 4 } },
      { id: "C", text: "彻底消失", weights: { GHOST: 4, 404: 3, IMFW: 3 } },
      { id: "D", text: "假装没事", weights: { BIAO: 4, NPC: 3, ZIL: 1 } },
      { id: "E", text: "找台阶下", weights: { POET: 3, WONANG: 1, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_716",
    type: "single",
    text: "你的对象和前任保持联系，你会？",
    options: [
      { id: "A", text: "战斗", weights: { HITER: 3, PING: 1, BAOZ: 1 } },
      { id: "B", text: "逃跑", weights: { GHOST: 3, IMFW: 2, SLEEP: 1 } },
      { id: "C", text: "装死", weights: { NPC: 4, SLEEP: 1, XIAN: 1 } },
      { id: "D", text: "谈判", weights: { BOSS: 1, LIKE: 4, NORM: 4 } },
      { id: "E", text: "求饶", weights: { WONANG: 4, SHIL: 1, MAIM: 3 } }
    ]
  },
  {
    id: "Q_single_717",
    type: "single",
    text: "你的对象对未来完全没有规划，你会？",
    options: [
      { id: "A", text: "正面冲突", weights: { HOUJ: 1, BAOZ: 2, FENN: 1 } },
      { id: "B", text: "暗地报复", weights: { YUAN: 3, CPU: 4, YINY: 3 } },
      { id: "C", text: "大度原谅", weights: { SHENG: 4, NORM: 4, BOSS: 4 } },
      { id: "D", text: "断绝来往", weights: { HEIH: 2, LENGL: 1, GHOST: 2 } },
      { id: "E", text: "寻求调解", weights: { DAREN: 2, BOSS: 3, LIKE: 2 } }
    ]
  },
  {
    id: "Q_single_718",
    type: "single",
    text: "你的对象在吵架时冷暴力，你会？",
    options: [
      { id: "A", text: "咆哮", weights: { HOUJ: 4, BAOZ: 1, DPENG: 2 } },
      { id: "B", text: "抑郁", weights: { WEMO: 3, BENG: 2, POET: 3 } },
      { id: "C", text: "讽刺", weights: { CHAO: 1, YINY: 3, TROLL: 3 } },
      { id: "D", text: "无视", weights: { IMFW: 4, DANR: 2, NPC: 4 } },
      { id: "E", text: "沟通", weights: { BOSS: 4, NORM: 2, OPEN: 3 } }
    ]
  },
  {
    id: "Q_single_719",
    type: "single",
    text: "你的对象说“你要这么想我也没办法”，你会？",
    options: [
      { id: "A", text: "干就完了", weights: { YOLO: 3, PING: 3, HITER: 3 } },
      { id: "B", text: "算了算了", weights: { IMFW: 2, XIAN: 2, SLEEP: 2 } },
      { id: "C", text: "以其人之道", weights: { CPU: 2, YINY: 1, YUAN: 1 } },
      { id: "D", text: "找外援", weights: { BOSS: 3, DAREN: 2, SHEK: 4 } },
      { id: "E", text: "独自消化", weights: { WONANG: 1, POET: 3, BENG: 2 } }
    ]
  },
  {
    id: "Q_single_720",
    type: "single",
    text: "你的对象把你送他的礼物挂闲鱼，你会？",
    options: [
      { id: "A", text: "骂街", weights: { HOUJ: 1, BAOZ: 4, KEYB: 3 } },
      { id: "B", text: "拉黑", weights: { HEIH: 4, GHOST: 4, LENGL: 1 } },
      { id: "C", text: "讲道理", weights: { LIKE: 4, BOSS: 1, NORM: 3 } },
      { id: "D", text: "忍", weights: { WONANG: 3, SERF: 1, TAOH: 1 } },
      { id: "E", text: "闹", weights: { BENG: 2, WEMO: 3, BIAO: 1 } }
    ]
  },
  {
    id: "Q_single_721",
    type: "single",
    text: "你的对象在你生病时只说“多喝热水”，你会？",
    options: [
      { id: "A", text: "拍桌子", weights: { HOUJ: 3, BAOZ: 3, PING: 3 } },
      { id: "B", text: "掉眼泪", weights: { WEMO: 2, MAIM: 2, BENG: 4 } },
      { id: "C", text: "翻白眼", weights: { CHAO: 1, YINY: 2, IMFW: 1 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 4, PING: 1 } },
      { id: "E", text: "好言相劝", weights: { NORM: 3, SHENG: 3, BOSS: 1 } }
    ]
  },
  {
    id: "Q_single_722",
    type: "single",
    text: "你的对象和闺蜜/兄弟关系过于亲密，你会？",
    options: [
      { id: "A", text: "报警", weights: { BOSS: 4, NORM: 2, PDF: 4 } },
      { id: "B", text: "网暴", weights: { CHAO: 1, YINY: 4, HITER: 3 } },
      { id: "C", text: "私了", weights: { CPU: 2, YINY: 3, BOSS: 3 } },
      { id: "D", text: "忍受", weights: { WONANG: 1, SHIL: 4, SERF: 3 } },
      { id: "E", text: "搬家", weights: { GHOST: 3, IMFW: 4, YOLO: 4 } }
    ]
  },
  {
    id: "Q_single_723",
    type: "single",
    text: "你的对象在公共场合让你难堪，你会？",
    options: [
      { id: "A", text: "干他", weights: { HITER: 4, BAOZ: 2, YOLO: 1 } },
      { id: "B", text: "躲他", weights: { GHOST: 4, GELI: 1, SHUS: 3 } },
      { id: "C", text: "阴他", weights: { YINY: 1, CPU: 1, YUAN: 2 } },
      { id: "D", text: "帮他", weights: { DAREN: 3, SHENG: 4, NORM: 1 } },
      { id: "E", text: "忘了他", weights: { IMFW: 1, XIAN: 1, SLEEP: 4 } }
    ]
  },
  {
    id: "Q_single_724",
    type: "single",
    text: "你的对象从来不道歉，你会？",
    options: [
      { id: "A", text: "直接翻脸", weights: { HOUJ: 2, BAOZ: 2, HITER: 3 } },
      { id: "B", text: "忍气吞声", weights: { WONANG: 2, MAIM: 3, SERF: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 4, CHAO: 1, CPU: 2 } },
      { id: "D", text: "溜之大吉", weights: { GHOST: 1, IMFW: 4, YOLO: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 2, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_725",
    type: "single",
    text: "你的对象控制欲极强，你会？",
    options: [
      { id: "A", text: "正面硬刚", weights: { PING: 2, HOUJ: 1, HITER: 3 } },
      { id: "B", text: "背后使绊子", weights: { YUAN: 3, CPU: 4, YINY: 4 } },
      { id: "C", text: "默默忍受", weights: { WONANG: 4, SHIL: 2, TAOH: 2 } },
      { id: "D", text: "断绝关系", weights: { HEIH: 3, LENGL: 2, HUIM: 3 } },
      { id: "E", text: "寻求帮助", weights: { DAREN: 1, BOSS: 2, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_726",
    type: "single",
    text: "你的对象情绪极其不稳定，你会？",
    options: [
      { id: "A", text: "发飙", weights: { BAOZ: 4, HOUJ: 3, FENN: 2 } },
      { id: "B", text: "冷处理", weights: { LENGL: 3, GHOST: 4, HEIH: 2 } },
      { id: "C", text: "讲道理", weights: { BOSS: 3, LIKE: 1, NORM: 4 } },
      { id: "D", text: "卖惨", weights: { MAIM: 4, WEMO: 4, BAIH: 4 } },
      { id: "E", text: "无视", weights: { IMFW: 4, DANR: 4, NPC: 3 } }
    ]
  },
  {
    id: "Q_single_727",
    type: "single",
    text: "你的对象每次吵架都翻旧账，你会？",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 2, GANG: 4, HOUJ: 2 } },
      { id: "B", text: "记仇", weights: { YUAN: 1, KAOG: 2, JING: 3 } },
      { id: "C", text: "原谅", weights: { NORM: 3, SHENG: 2, TAOH: 2 } },
      { id: "D", text: "远离", weights: { GHOST: 4, XIAN: 2, IMFW: 4 } },
      { id: "E", text: "报复", weights: { HUIM: 1, CPU: 1, YINY: 4 } }
    ]
  },
  {
    id: "Q_single_728",
    type: "single",
    text: "你的对象说“分手”当口头禅，你会？",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 4, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 2, WEMO: 2, MAIM: 2 } },
      { id: "C", text: "冷笑", weights: { YINY: 4, CHAO: 1, LENGL: 1 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 3, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 4, DYOR: 2 } }
    ]
  },
  {
    id: "Q_single_729",
    type: "single",
    text: "你的对象在外人面前假装单身，你会？",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 3, BAOZ: 4, PING: 1 } },
      { id: "B", text: "妥协", weights: { WONANG: 1, SERF: 4, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 1, XUANZ: 4, IMFW: 1 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 1, BIAO: 2 } },
      { id: "E", text: "道歉", weights: { WONANG: 2, BEIH: 3, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_730",
    type: "single",
    text: "你的对象隐瞒自己的负债情况，你会？",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 3, YOLO: 3, PING: 2 } },
      { id: "B", text: "法律途径", weights: { BOSS: 1, PDF: 1, NORM: 2 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 1, YINY: 4 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 2, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 3, BOSS: 2, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_731",
    type: "single",
    text: "你的对象对你的兴趣爱好嗤之以鼻，你会？",
    options: [
      { id: "A", text: "撕破脸", weights: { HOUJ: 2, BAOZ: 2, HEIH: 2 } },
      { id: "B", text: "维持表面和平", weights: { YINY: 3, NPC: 2, TAOH: 3 } },
      { id: "C", text: "彻底消失", weights: { GHOST: 3, 404: 1, IMFW: 3 } },
      { id: "D", text: "假装没事", weights: { BIAO: 3, NPC: 3, ZIL: 4 } },
      { id: "E", text: "找台阶下", weights: { POET: 1, WONANG: 4, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_732",
    type: "single",
    text: "你的对象要求你删掉所有异性好友，你会？",
    options: [
      { id: "A", text: "战斗", weights: { HITER: 1, PING: 3, BAOZ: 2 } },
      { id: "B", text: "逃跑", weights: { GHOST: 3, IMFW: 3, SLEEP: 4 } },
      { id: "C", text: "装死", weights: { NPC: 3, SLEEP: 3, XIAN: 2 } },
      { id: "D", text: "谈判", weights: { BOSS: 4, LIKE: 1, NORM: 3 } },
      { id: "E", text: "求饶", weights: { WONANG: 3, SHIL: 1, MAIM: 4 } }
    ]
  },
  {
    id: "Q_single_733",
    type: "single",
    text: "你的对象在关键决策上从不询问你，你会？",
    options: [
      { id: "A", text: "正面冲突", weights: { HOUJ: 1, BAOZ: 2, FENN: 3 } },
      { id: "B", text: "暗地报复", weights: { YUAN: 2, CPU: 1, YINY: 4 } },
      { id: "C", text: "大度原谅", weights: { SHENG: 3, NORM: 4, BOSS: 3 } },
      { id: "D", text: "断绝来往", weights: { HEIH: 4, LENGL: 2, GHOST: 2 } },
      { id: "E", text: "寻求调解", weights: { DAREN: 2, BOSS: 4, LIKE: 2 } }
    ]
  },
  {
    id: "Q_single_734",
    type: "single",
    text: "你的对象把你的隐私当笑话讲给别人，你会？",
    options: [
      { id: "A", text: "咆哮", weights: { HOUJ: 1, BAOZ: 1, DPENG: 3 } },
      { id: "B", text: "抑郁", weights: { WEMO: 3, BENG: 2, POET: 3 } },
      { id: "C", text: "讽刺", weights: { CHAO: 3, YINY: 1, TROLL: 1 } },
      { id: "D", text: "无视", weights: { IMFW: 1, DANR: 3, NPC: 3 } },
      { id: "E", text: "沟通", weights: { BOSS: 4, NORM: 2, OPEN: 1 } }
    ]
  },
  {
    id: "Q_single_735",
    type: "single",
    text: "你的对象在你出差时带人回家，你会？",
    options: [
      { id: "A", text: "干就完了", weights: { YOLO: 2, PING: 3, HITER: 3 } },
      { id: "B", text: "算了算了", weights: { IMFW: 2, XIAN: 1, SLEEP: 3 } },
      { id: "C", text: "以其人之道", weights: { CPU: 3, YINY: 1, YUAN: 3 } },
      { id: "D", text: "找外援", weights: { BOSS: 3, DAREN: 4, SHEK: 4 } },
      { id: "E", text: "独自消化", weights: { WONANG: 2, POET: 2, BENG: 1 } }
    ]
  },
  {
    id: "Q_single_736",
    type: "single",
    text: "你的对象说“我配不上你”来逃避问题，你会？",
    options: [
      { id: "A", text: "骂街", weights: { HOUJ: 3, BAOZ: 1, KEYB: 1 } },
      { id: "B", text: "拉黑", weights: { HEIH: 3, GHOST: 2, LENGL: 1 } },
      { id: "C", text: "讲道理", weights: { LIKE: 4, BOSS: 3, NORM: 2 } },
      { id: "D", text: "忍", weights: { WONANG: 2, SERF: 2, TAOH: 2 } },
      { id: "E", text: "闹", weights: { BENG: 3, WEMO: 4, BIAO: 3 } }
    ]
  },
  {
    id: "Q_single_737",
    type: "single",
    text: "你的对象永远把游戏排在第一位，你会？",
    options: [
      { id: "A", text: "拍桌子", weights: { HOUJ: 1, BAOZ: 4, PING: 4 } },
      { id: "B", text: "掉眼泪", weights: { WEMO: 2, MAIM: 2, BENG: 2 } },
      { id: "C", text: "翻白眼", weights: { CHAO: 3, YINY: 3, IMFW: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 1, YOLO: 4, PING: 2 } },
      { id: "E", text: "好言相劝", weights: { NORM: 3, SHENG: 3, BOSS: 3 } }
    ]
  },
  {
    id: "Q_single_738",
    type: "single",
    text: "你的对象拒绝见你的父母，你会？",
    options: [
      { id: "A", text: "报警", weights: { BOSS: 4, NORM: 2, PDF: 4 } },
      { id: "B", text: "网暴", weights: { CHAO: 3, YINY: 1, HITER: 2 } },
      { id: "C", text: "私了", weights: { CPU: 3, YINY: 1, BOSS: 1 } },
      { id: "D", text: "忍受", weights: { WONANG: 2, SHIL: 1, SERF: 4 } },
      { id: "E", text: "搬家", weights: { GHOST: 4, IMFW: 3, YOLO: 4 } }
    ]
  },
  {
    id: "Q_single_739",
    type: "single",
    text: "你的对象在背后嘲笑你的身材/外貌，你会？",
    options: [
      { id: "A", text: "干他", weights: { HITER: 4, BAOZ: 2, YOLO: 4 } },
      { id: "B", text: "躲他", weights: { GHOST: 1, GELI: 4, SHUS: 2 } },
      { id: "C", text: "阴他", weights: { YINY: 4, CPU: 2, YUAN: 4 } },
      { id: "D", text: "帮他", weights: { DAREN: 2, SHENG: 1, NORM: 1 } },
      { id: "E", text: "忘了他", weights: { IMFW: 3, XIAN: 3, SLEEP: 2 } }
    ]
  },
  {
    id: "Q_single_740",
    type: "single",
    text: "你的对象在吵架时摔东西，你会？",
    options: [
      { id: "A", text: "直接翻脸", weights: { HOUJ: 3, BAOZ: 4, HITER: 1 } },
      { id: "B", text: "忍气吞声", weights: { WONANG: 1, MAIM: 2, SERF: 1 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 1, CHAO: 4, CPU: 1 } },
      { id: "D", text: "溜之大吉", weights: { GHOST: 4, IMFW: 2, YOLO: 1 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 1, BIAO: 1 } }
    ]
  },
  {
    id: "Q_single_741",
    type: "single",
    text: "你的对象要求你改变穿衣风格，你会？",
    options: [
      { id: "A", text: "正面硬刚", weights: { PING: 1, HOUJ: 1, HITER: 4 } },
      { id: "B", text: "背后使绊子", weights: { YUAN: 3, CPU: 4, YINY: 2 } },
      { id: "C", text: "默默忍受", weights: { WONANG: 3, SHIL: 4, TAOH: 3 } },
      { id: "D", text: "断绝关系", weights: { HEIH: 3, LENGL: 1, HUIM: 1 } },
      { id: "E", text: "寻求帮助", weights: { DAREN: 4, BOSS: 4, SHEK: 3 } }
    ]
  },
  {
    id: "Q_single_742",
    type: "single",
    text: "你的对象经常说“我以前对象不会这样”，你会？",
    options: [
      { id: "A", text: "发飙", weights: { BAOZ: 3, HOUJ: 1, FENN: 4 } },
      { id: "B", text: "冷处理", weights: { LENGL: 4, GHOST: 1, HEIH: 4 } },
      { id: "C", text: "讲道理", weights: { BOSS: 3, LIKE: 2, NORM: 1 } },
      { id: "D", text: "卖惨", weights: { MAIM: 3, WEMO: 4, BAIH: 4 } },
      { id: "E", text: "无视", weights: { IMFW: 4, DANR: 2, NPC: 2 } }
    ]
  },
  {
    id: "Q_single_743",
    type: "single",
    text: "你的对象在你身上发泄工作压力，你会？",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 3, GANG: 3, HOUJ: 1 } },
      { id: "B", text: "记仇", weights: { YUAN: 2, KAOG: 3, JING: 4 } },
      { id: "C", text: "原谅", weights: { NORM: 2, SHENG: 4, TAOH: 2 } },
      { id: "D", text: "远离", weights: { GHOST: 4, XIAN: 2, IMFW: 3 } },
      { id: "E", text: "报复", weights: { HUIM: 2, CPU: 4, YINY: 2 } }
    ]
  },
  {
    id: "Q_single_744",
    type: "single",
    text: "你的对象在经济上完全依赖你，你会？",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 4, BAOZ: 1, DPENG: 2 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 1, MAIM: 2 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 2, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 4, SLEEP: 4 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 1, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_745",
    type: "single",
    text: "你的对象对你的职业发展嗤之以鼻，你会？",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 2, BAOZ: 2, PING: 1 } },
      { id: "B", text: "妥协", weights: { WONANG: 4, SERF: 2, TAOH: 3 } },
      { id: "C", text: "拖延", weights: { TUOY: 4, XUANZ: 3, IMFW: 2 } },
      { id: "D", text: "转移话题", weights: { YINY: 1, CPU: 2, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 3, BEIH: 4, NORM: 1 } }
    ]
  },
  {
    id: "Q_single_746",
    type: "single",
    text: "你的对象从来不记得你的口味，你会？",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 3, YOLO: 2, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 1, PDF: 4, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 2, YINY: 1 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 4, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 2, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_747",
    type: "single",
    text: "你的对象在亲密关系中极度双标，你会？",
    options: [
      { id: "A", text: "撕破脸", weights: { HOUJ: 4, BAOZ: 3, HEIH: 3 } },
      { id: "B", text: "维持表面和平", weights: { YINY: 2, NPC: 4, TAOH: 2 } },
      { id: "C", text: "彻底消失", weights: { GHOST: 4, 404: 3, IMFW: 1 } },
      { id: "D", text: "假装没事", weights: { BIAO: 3, NPC: 2, ZIL: 3 } },
      { id: "E", text: "找台阶下", weights: { POET: 2, WONANG: 4, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_748",
    type: "single",
    text: "你的对象把你和别人的对象比较，你会？",
    options: [
      { id: "A", text: "战斗", weights: { HITER: 3, PING: 2, BAOZ: 1 } },
      { id: "B", text: "逃跑", weights: { GHOST: 1, IMFW: 4, SLEEP: 4 } },
      { id: "C", text: "装死", weights: { NPC: 3, SLEEP: 3, XIAN: 1 } },
      { id: "D", text: "谈判", weights: { BOSS: 4, LIKE: 2, NORM: 2 } },
      { id: "E", text: "求饶", weights: { WONANG: 4, SHIL: 1, MAIM: 1 } }
    ]
  },
  {
    id: "Q_single_749",
    type: "single",
    text: "你的对象在吵架后每次都找你闺蜜倾诉，你会？",
    options: [
      { id: "A", text: "正面冲突", weights: { HOUJ: 2, BAOZ: 3, FENN: 1 } },
      { id: "B", text: "暗地报复", weights: { YUAN: 1, CPU: 4, YINY: 2 } },
      { id: "C", text: "大度原谅", weights: { SHENG: 4, NORM: 1, BOSS: 4 } },
      { id: "D", text: "断绝来往", weights: { HEIH: 1, LENGL: 4, GHOST: 3 } },
      { id: "E", text: "寻求调解", weights: { DAREN: 2, BOSS: 1, LIKE: 4 } }
    ]
  },
  {
    id: "Q_single_750",
    type: "single",
    text: "你的对象把你当情绪垃圾桶，你会？",
    options: [
      { id: "A", text: "咆哮", weights: { HOUJ: 3, BAOZ: 4, DPENG: 3 } },
      { id: "B", text: "抑郁", weights: { WEMO: 3, BENG: 4, POET: 2 } },
      { id: "C", text: "讽刺", weights: { CHAO: 1, YINY: 3, TROLL: 1 } },
      { id: "D", text: "无视", weights: { IMFW: 3, DANR: 2, NPC: 1 } },
      { id: "E", text: "沟通", weights: { BOSS: 4, NORM: 3, OPEN: 3 } }
    ]
  },
  {
    id: "Q_single_751",
    type: "single",
    text: "你的对象在你想沟通时逃避，你会？",
    options: [
      { id: "A", text: "干就完了", weights: { YOLO: 1, PING: 1, HITER: 3 } },
      { id: "B", text: "算了算了", weights: { IMFW: 2, XIAN: 4, SLEEP: 2 } },
      { id: "C", text: "以其人之道", weights: { CPU: 4, YINY: 2, YUAN: 3 } },
      { id: "D", text: "找外援", weights: { BOSS: 3, DAREN: 4, SHEK: 2 } },
      { id: "E", text: "独自消化", weights: { WONANG: 4, POET: 3, BENG: 2 } }
    ]
  },
  {
    id: "Q_single_752",
    type: "single",
    text: "你的对象永远只会嘴上说说，你会？",
    options: [
      { id: "A", text: "骂街", weights: { HOUJ: 4, BAOZ: 1, KEYB: 4 } },
      { id: "B", text: "拉黑", weights: { HEIH: 4, GHOST: 3, LENGL: 2 } },
      { id: "C", text: "讲道理", weights: { LIKE: 3, BOSS: 4, NORM: 2 } },
      { id: "D", text: "忍", weights: { WONANG: 1, SERF: 3, TAOH: 2 } },
      { id: "E", text: "闹", weights: { BENG: 2, WEMO: 4, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_753",
    type: "single",
    text: "你的对象对你的付出视而不见，你会？",
    options: [
      { id: "A", text: "拍桌子", weights: { HOUJ: 2, BAOZ: 4, PING: 1 } },
      { id: "B", text: "掉眼泪", weights: { WEMO: 3, MAIM: 2, BENG: 4 } },
      { id: "C", text: "翻白眼", weights: { CHAO: 4, YINY: 1, IMFW: 2 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 4, PING: 2 } },
      { id: "E", text: "好言相劝", weights: { NORM: 1, SHENG: 1, BOSS: 1 } }
    ]
  },
  {
    id: "Q_single_754",
    type: "single",
    text: "你的对象在社交软件上和别人暧昧，你会？",
    options: [
      { id: "A", text: "报警", weights: { BOSS: 2, NORM: 2, PDF: 3 } },
      { id: "B", text: "网暴", weights: { CHAO: 1, YINY: 3, HITER: 4 } },
      { id: "C", text: "私了", weights: { CPU: 4, YINY: 4, BOSS: 4 } },
      { id: "D", text: "忍受", weights: { WONANG: 4, SHIL: 2, SERF: 1 } },
      { id: "E", text: "搬家", weights: { GHOST: 1, IMFW: 2, YOLO: 4 } }
    ]
  },
  {
    id: "Q_single_755",
    type: "single",
    text: "你的对象在答应你的事情上永远失信，你会？",
    options: [
      { id: "A", text: "干他", weights: { HITER: 3, BAOZ: 1, YOLO: 4 } },
      { id: "B", text: "躲他", weights: { GHOST: 2, GELI: 1, SHUS: 2 } },
      { id: "C", text: "阴他", weights: { YINY: 3, CPU: 2, YUAN: 4 } },
      { id: "D", text: "帮他", weights: { DAREN: 3, SHENG: 4, NORM: 2 } },
      { id: "E", text: "忘了他", weights: { IMFW: 3, XIAN: 1, SLEEP: 4 } }
    ]
  },
  {
    id: "Q_single_756",
    type: "single",
    text: "你的对象在你哭泣时无动于衷，你会？",
    options: [
      { id: "A", text: "直接翻脸", weights: { HOUJ: 3, BAOZ: 1, HITER: 3 } },
      { id: "B", text: "忍气吞声", weights: { WONANG: 4, MAIM: 1, SERF: 1 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 2, CPU: 2 } },
      { id: "D", text: "溜之大吉", weights: { GHOST: 3, IMFW: 1, YOLO: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 2, WEMO: 2, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_757",
    type: "single",
    text: "你的对象在你取得成就时阴阳怪气，你会？",
    options: [
      { id: "A", text: "正面硬刚", weights: { PING: 3, HOUJ: 4, HITER: 4 } },
      { id: "B", text: "背后使绊子", weights: { YUAN: 1, CPU: 3, YINY: 2 } },
      { id: "C", text: "默默忍受", weights: { WONANG: 1, SHIL: 2, TAOH: 2 } },
      { id: "D", text: "断绝关系", weights: { HEIH: 3, LENGL: 3, HUIM: 1 } },
      { id: "E", text: "寻求帮助", weights: { DAREN: 3, BOSS: 3, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_758",
    type: "single",
    text: "你的对象对你的家人不尊重，你会？",
    options: [
      { id: "A", text: "发飙", weights: { BAOZ: 2, HOUJ: 1, FENN: 3 } },
      { id: "B", text: "冷处理", weights: { LENGL: 1, GHOST: 4, HEIH: 4 } },
      { id: "C", text: "讲道理", weights: { BOSS: 2, LIKE: 3, NORM: 2 } },
      { id: "D", text: "卖惨", weights: { MAIM: 2, WEMO: 2, BAIH: 3 } },
      { id: "E", text: "无视", weights: { IMFW: 3, DANR: 1, NPC: 4 } }
    ]
  },
  {
    id: "Q_single_759",
    type: "single",
    text: "你的对象在大事上没担当，你会？",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 4, GANG: 4, HOUJ: 4 } },
      { id: "B", text: "记仇", weights: { YUAN: 3, KAOG: 4, JING: 3 } },
      { id: "C", text: "原谅", weights: { NORM: 4, SHENG: 3, TAOH: 4 } },
      { id: "D", text: "远离", weights: { GHOST: 4, XIAN: 1, IMFW: 1 } },
      { id: "E", text: "报复", weights: { HUIM: 1, CPU: 3, YINY: 2 } }
    ]
  },
  {
    id: "Q_single_760",
    type: "single",
    text: "你的对象把你拉黑又加回反复折磨，你会？",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 2, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 3, MAIM: 1 } },
      { id: "C", text: "冷笑", weights: { YINY: 4, CHAO: 2, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 4, SLEEP: 2 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 4, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_761",
    type: "single",
    text: "你的对象说“我只是犯了全天下男人/女人都会犯的错”，你会？",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 4, BAOZ: 2, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 2, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 3, XUANZ: 2, IMFW: 2 } },
      { id: "D", text: "转移话题", weights: { YINY: 2, CPU: 1, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 4, NORM: 1 } }
    ]
  },
  {
    id: "Q_single_762",
    type: "single",
    text: "你的对象在你面前夸前任，你会？",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 3, YOLO: 1, PING: 2 } },
      { id: "B", text: "法律途径", weights: { BOSS: 4, PDF: 4, NORM: 4 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 1, FOMO: 1, YINY: 1 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 1, XIAN: 3, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 2, BOSS: 4, SHEK: 2 } }
    ]
  },
  {
    id: "Q_single_763",
    type: "single",
    text: "你的对象在你失业时冷嘲热讽，你会？",
    options: [
      { id: "A", text: "撕破脸", weights: { HOUJ: 4, BAOZ: 3, HEIH: 3 } },
      { id: "B", text: "维持表面和平", weights: { YINY: 1, NPC: 1, TAOH: 4 } },
      { id: "C", text: "彻底消失", weights: { GHOST: 2, 404: 4, IMFW: 2 } },
      { id: "D", text: "假装没事", weights: { BIAO: 3, NPC: 2, ZIL: 3 } },
      { id: "E", text: "找台阶下", weights: { POET: 2, WONANG: 1, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_764",
    type: "single",
    text: "你的对象对你的抑郁症不以为然，你会？",
    options: [
      { id: "A", text: "战斗", weights: { HITER: 3, PING: 3, BAOZ: 1 } },
      { id: "B", text: "逃跑", weights: { GHOST: 4, IMFW: 3, SLEEP: 1 } },
      { id: "C", text: "装死", weights: { NPC: 1, SLEEP: 2, XIAN: 4 } },
      { id: "D", text: "谈判", weights: { BOSS: 2, LIKE: 2, NORM: 4 } },
      { id: "E", text: "求饶", weights: { WONANG: 1, SHIL: 1, MAIM: 2 } }
    ]
  },
  {
    id: "Q_single_765",
    type: "single",
    text: "你的对象把所有错都推到你身上，你会？",
    options: [
      { id: "A", text: "正面冲突", weights: { HOUJ: 4, BAOZ: 2, FENN: 2 } },
      { id: "B", text: "暗地报复", weights: { YUAN: 2, CPU: 1, YINY: 3 } },
      { id: "C", text: "大度原谅", weights: { SHENG: 1, NORM: 1, BOSS: 3 } },
      { id: "D", text: "断绝来往", weights: { HEIH: 4, LENGL: 1, GHOST: 2 } },
      { id: "E", text: "寻求调解", weights: { DAREN: 1, BOSS: 4, LIKE: 4 } }
    ]
  },
  {
    id: "Q_single_766",
    type: "single",
    text: "你的对象在你表达需求时说你矫情，你会？",
    options: [
      { id: "A", text: "咆哮", weights: { HOUJ: 2, BAOZ: 1, DPENG: 3 } },
      { id: "B", text: "抑郁", weights: { WEMO: 4, BENG: 1, POET: 4 } },
      { id: "C", text: "讽刺", weights: { CHAO: 1, YINY: 4, TROLL: 1 } },
      { id: "D", text: "无视", weights: { IMFW: 3, DANR: 4, NPC: 4 } },
      { id: "E", text: "沟通", weights: { BOSS: 2, NORM: 1, OPEN: 1 } }
    ]
  },
  {
    id: "Q_single_767",
    type: "single",
    text: "你的对象在婚姻中要求 AA 到每一分钱，你会？",
    options: [
      { id: "A", text: "干就完了", weights: { YOLO: 4, PING: 2, HITER: 3 } },
      { id: "B", text: "算了算了", weights: { IMFW: 4, XIAN: 3, SLEEP: 2 } },
      { id: "C", text: "以其人之道", weights: { CPU: 4, YINY: 2, YUAN: 4 } },
      { id: "D", text: "找外援", weights: { BOSS: 1, DAREN: 2, SHEK: 3 } },
      { id: "E", text: "独自消化", weights: { WONANG: 3, POET: 2, BENG: 1 } }
    ]
  },
  {
    id: "Q_single_768",
    type: "single",
    text: "你的对象在婚礼上临时加彩礼，你会？",
    options: [
      { id: "A", text: "骂街", weights: { HOUJ: 3, BAOZ: 4, KEYB: 2 } },
      { id: "B", text: "拉黑", weights: { HEIH: 1, GHOST: 4, LENGL: 2 } },
      { id: "C", text: "讲道理", weights: { LIKE: 4, BOSS: 2, NORM: 4 } },
      { id: "D", text: "忍", weights: { WONANG: 1, SERF: 1, TAOH: 1 } },
      { id: "E", text: "闹", weights: { BENG: 3, WEMO: 3, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_769",
    type: "single",
    text: "你的对象要求你签婚前协议但条款苛刻，你会？",
    options: [
      { id: "A", text: "拍桌子", weights: { HOUJ: 4, BAOZ: 2, PING: 1 } },
      { id: "B", text: "掉眼泪", weights: { WEMO: 3, MAIM: 1, BENG: 1 } },
      { id: "C", text: "翻白眼", weights: { CHAO: 2, YINY: 1, IMFW: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 1, YOLO: 1, PING: 1 } },
      { id: "E", text: "好言相劝", weights: { NORM: 4, SHENG: 2, BOSS: 1 } }
    ]
  },
  {
    id: "Q_single_770",
    type: "single",
    text: "当被陌生人冒犯时，你的第一反应是？（第1次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 2, GANG: 4, HOUJ: 4 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 1, SHIL: 4, TAOH: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 4, CHAO: 2, CPU: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 4, PING: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 3, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_771",
    type: "single",
    text: "当遭遇不公平待遇时，你的第一反应是？（第2次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 4, DPENG: 3 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 2, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 3, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 4, SLEEP: 2 } },
      { id: "E", text: "解释", weights: { BOSS: 2, LIKE: 3, DYOR: 2 } }
    ]
  },
  {
    id: "Q_single_772",
    type: "single",
    text: "当计划突然被打乱时，你的第一反应是？（第3次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 2, BAOZ: 3, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 3, SERF: 2, TAOH: 1 } },
      { id: "C", text: "拖延", weights: { TUOY: 4, XUANZ: 3, IMFW: 1 } },
      { id: "D", text: "转移话题", weights: { YINY: 4, CPU: 3, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 4, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_773",
    type: "single",
    text: "当收到坏消息时，你的第一反应是？（第4次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 3, PING: 4 } },
      { id: "B", text: "法律途径", weights: { BOSS: 1, PDF: 1, NORM: 2 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 3, YINY: 3 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 1, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 1, BOSS: 2, SHEK: 3 } }
    ]
  },
  {
    id: "Q_single_774",
    type: "single",
    text: "当面对无理要求时，你的第一反应是？（第5次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 1, HOUJ: 2 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 2, SHIL: 1, TAOH: 3 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 2, CHAO: 4, CPU: 1 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 4, PING: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 4, BIAO: 1 } }
    ]
  },
  {
    id: "Q_single_775",
    type: "single",
    text: "当被朋友背叛时，你的第一反应是？（第6次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 2, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 2, MAIM: 2 } },
      { id: "C", text: "冷笑", weights: { YINY: 3, CHAO: 3, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 3, DANR: 3, SLEEP: 3 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 4, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_776",
    type: "single",
    text: "当工作压力爆棚时，你的第一反应是？（第7次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 3, BAOZ: 4, PING: 4 } },
      { id: "B", text: "妥协", weights: { WONANG: 3, SERF: 2, TAOH: 1 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 3, IMFW: 2 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 4, BIAO: 2 } },
      { id: "E", text: "道歉", weights: { WONANG: 4, BEIH: 4, NORM: 1 } }
    ]
  },
  {
    id: "Q_single_777",
    type: "single",
    text: "当深夜 emo时，你的第一反应是？（第8次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 3, YOLO: 2, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 2, PDF: 3, NORM: 2 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 1, YINY: 1 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 4, WONANG: 3 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 2, BOSS: 3, SHEK: 3 } }
    ]
  },
  {
    id: "Q_single_778",
    type: "single",
    text: "当社交场合尴尬时，你的第一反应是？（第9次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 2, GANG: 1, HOUJ: 2 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 1, SHIL: 1, TAOH: 1 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 1, CHAO: 1, CPU: 4 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 4, PING: 1 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 2, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_779",
    type: "single",
    text: "当经济拮据时，你的第一反应是？（第10次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 3, BAOZ: 2, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 4, WEMO: 4, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 3, CHAO: 4, LENGL: 3 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 4, SLEEP: 3 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 2, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_780",
    type: "single",
    text: "当感情受挫时，你的第一反应是？（第11次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 1, BAOZ: 3, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 1, TAOH: 2 } },
      { id: "C", text: "拖延", weights: { TUOY: 4, XUANZ: 4, IMFW: 1 } },
      { id: "D", text: "转移话题", weights: { YINY: 2, CPU: 2, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 3, BEIH: 4, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_781",
    type: "single",
    text: "当被人误解时，你的第一反应是？（第12次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 2, YOLO: 3, PING: 1 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 2, NORM: 4 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 1, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 3, XIAN: 3, WONANG: 4 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 4, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_782",
    type: "single",
    text: "当遇到技术故障时，你的第一反应是？（第13次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 2, GANG: 3, HOUJ: 2 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 4, SHIL: 1, TAOH: 2 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 2, CHAO: 4, CPU: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 4, PING: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 4, WEMO: 2, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_783",
    type: "single",
    text: "当身体不适时，你的第一反应是？（第14次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 2, BAOZ: 1, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 1, WEMO: 2, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 4, CHAO: 3, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 2, SLEEP: 4 } },
      { id: "E", text: "解释", weights: { BOSS: 2, LIKE: 2, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_784",
    type: "single",
    text: "当被人比下去时，你的第一反应是？（第15次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 3, BAOZ: 3, PING: 4 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 1, TAOH: 3 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 1, IMFW: 2 } },
      { id: "D", text: "转移话题", weights: { YINY: 2, CPU: 2, BIAO: 2 } },
      { id: "E", text: "道歉", weights: { WONANG: 4, BEIH: 1, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_785",
    type: "single",
    text: "当目标遥不可及时，你的第一反应是？（第16次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 3, YOLO: 4, PING: 1 } },
      { id: "B", text: "法律途径", weights: { BOSS: 2, PDF: 3, NORM: 3 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 1, FOMO: 3, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 4, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 1, BOSS: 3, SHEK: 2 } }
    ]
  },
  {
    id: "Q_single_786",
    type: "single",
    text: "当被人放鸽子时，你的第一反应是？（第17次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 4, GANG: 2, HOUJ: 1 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 4, SHIL: 4, TAOH: 2 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 2, CHAO: 2, CPU: 1 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 3, PING: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 4, WEMO: 4, BIAO: 3 } }
    ]
  },
  {
    id: "Q_single_787",
    type: "single",
    text: "当付出没有回报时，你的第一反应是？（第18次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 3, BAOZ: 1, DPENG: 3 } },
      { id: "B", text: "哭泣", weights: { BENG: 1, WEMO: 3, MAIM: 1 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 2, LENGL: 3 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 2, SLEEP: 4 } },
      { id: "E", text: "解释", weights: { BOSS: 4, LIKE: 1, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_788",
    type: "single",
    text: "当环境嘈杂时，你的第一反应是？（第19次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 4, BAOZ: 2, PING: 4 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 1, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 4, IMFW: 2 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 3, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 4, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_789",
    type: "single",
    text: "当被人忽视时，你的第一反应是？（第20次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 2, YOLO: 3, PING: 2 } },
      { id: "B", text: "法律途径", weights: { BOSS: 4, PDF: 4, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 3, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 2, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 3, BOSS: 1, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_790",
    type: "single",
    text: "当被陌生人冒犯时，你的第一反应是？（第21次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 1, HOUJ: 1 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 4, SHIL: 3, TAOH: 2 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 1, CHAO: 3, CPU: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 1, YOLO: 3, PING: 2 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 3, WEMO: 2, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_791",
    type: "single",
    text: "当遭遇不公平待遇时，你的第一反应是？（第22次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 2, BAOZ: 1, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 2, MAIM: 1 } },
      { id: "C", text: "冷笑", weights: { YINY: 1, CHAO: 4, LENGL: 1 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 3, SLEEP: 3 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 4, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_792",
    type: "single",
    text: "当计划突然被打乱时，你的第一反应是？（第23次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 2, BAOZ: 3, PING: 1 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 1, TAOH: 3 } },
      { id: "C", text: "拖延", weights: { TUOY: 3, XUANZ: 1, IMFW: 2 } },
      { id: "D", text: "转移话题", weights: { YINY: 4, CPU: 4, BIAO: 1 } },
      { id: "E", text: "道歉", weights: { WONANG: 2, BEIH: 4, NORM: 1 } }
    ]
  },
  {
    id: "Q_single_793",
    type: "single",
    text: "当收到坏消息时，你的第一反应是？（第24次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 2, YOLO: 3, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 4, PDF: 4, NORM: 2 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 1, YINY: 4 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 1, XIAN: 3, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 1, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_794",
    type: "single",
    text: "当面对无理要求时，你的第一反应是？（第25次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 2, GANG: 3, HOUJ: 2 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 2, SHIL: 3, TAOH: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 2, CHAO: 1, CPU: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 2, PING: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 3, WEMO: 1, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_795",
    type: "single",
    text: "当被朋友背叛时，你的第一反应是？（第26次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 2, BAOZ: 4, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 4, WEMO: 1, MAIM: 2 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 4, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 3, DANR: 3, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 1, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_796",
    type: "single",
    text: "当工作压力爆棚时，你的第一反应是？（第27次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 3, BAOZ: 3, PING: 2 } },
      { id: "B", text: "妥协", weights: { WONANG: 1, SERF: 1, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 1, XUANZ: 2, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 4, CPU: 4, BIAO: 1 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 4, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_797",
    type: "single",
    text: "当深夜 emo时，你的第一反应是？（第28次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 3, YOLO: 4, PING: 2 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 2, NORM: 3 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 1, FOMO: 2, YINY: 1 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 1, XIAN: 4, WONANG: 4 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 2, BOSS: 2, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_798",
    type: "single",
    text: "当社交场合尴尬时，你的第一反应是？（第29次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 4, GANG: 4, HOUJ: 1 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 4, SHIL: 3, TAOH: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 1, CPU: 1 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 3, PING: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 4, WEMO: 1, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_799",
    type: "single",
    text: "当经济拮据时，你的第一反应是？（第30次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 4, BAOZ: 1, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 1, WEMO: 2, MAIM: 4 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 2, LENGL: 3 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 2, SLEEP: 4 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 1, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_800",
    type: "single",
    text: "当感情受挫时，你的第一反应是？（第31次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 3, BAOZ: 4, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 4, SERF: 3, TAOH: 3 } },
      { id: "C", text: "拖延", weights: { TUOY: 3, XUANZ: 3, IMFW: 3 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 2, BIAO: 1 } },
      { id: "E", text: "道歉", weights: { WONANG: 3, BEIH: 1, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_801",
    type: "single",
    text: "当被人误解时，你的第一反应是？（第32次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 1, YOLO: 3, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 1, PDF: 3, NORM: 3 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 1, FOMO: 1, YINY: 4 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 4, WONANG: 2 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 1, BOSS: 3, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_802",
    type: "single",
    text: "当遇到技术故障时，你的第一反应是？（第33次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 2, GANG: 3, HOUJ: 3 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 1, SHIL: 4, TAOH: 3 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 1, CHAO: 3, CPU: 2 } },
      { id: "D", text: "转身离开", weights: { GHOST: 3, YOLO: 2, PING: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 4, WEMO: 4, BIAO: 3 } }
    ]
  },
  {
    id: "Q_single_803",
    type: "single",
    text: "当身体不适时，你的第一反应是？（第34次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 2, BAOZ: 3, DPENG: 3 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 4, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 1, CHAO: 4, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 3, DANR: 2, SLEEP: 2 } },
      { id: "E", text: "解释", weights: { BOSS: 4, LIKE: 4, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_804",
    type: "single",
    text: "当被人比下去时，你的第一反应是？（第35次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 1, BAOZ: 2, PING: 1 } },
      { id: "B", text: "妥协", weights: { WONANG: 3, SERF: 3, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 4, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 2, CPU: 2, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 1, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_805",
    type: "single",
    text: "当目标遥不可及时，你的第一反应是？（第36次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 1, YOLO: 4, PING: 2 } },
      { id: "B", text: "法律途径", weights: { BOSS: 4, PDF: 4, NORM: 4 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 3, FOMO: 2, YINY: 4 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 2, WONANG: 4 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 2, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_806",
    type: "single",
    text: "当被人放鸽子时，你的第一反应是？（第37次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 3, HOUJ: 1 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 3, SHIL: 4, TAOH: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 4, CPU: 1 } },
      { id: "D", text: "转身离开", weights: { GHOST: 1, YOLO: 4, PING: 1 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 4, WEMO: 2, BIAO: 3 } }
    ]
  },
  {
    id: "Q_single_807",
    type: "single",
    text: "当付出没有回报时，你的第一反应是？（第38次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 2, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 3, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 4, CHAO: 4, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 3, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 4, LIKE: 1, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_808",
    type: "single",
    text: "当环境嘈杂时，你的第一反应是？（第39次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 1, BAOZ: 4, PING: 2 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 1, TAOH: 1 } },
      { id: "C", text: "拖延", weights: { TUOY: 1, XUANZ: 2, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 1, CPU: 1, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 2, NORM: 4 } }
    ]
  },
  {
    id: "Q_single_809",
    type: "single",
    text: "当被人忽视时，你的第一反应是？（第40次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 1, YOLO: 1, PING: 4 } },
      { id: "B", text: "法律途径", weights: { BOSS: 2, PDF: 4, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 1, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 1, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 2, BOSS: 4, SHEK: 3 } }
    ]
  },
  {
    id: "Q_single_810",
    type: "single",
    text: "当被陌生人冒犯时，你的第一反应是？（第41次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 3, GANG: 4, HOUJ: 3 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 2, SHIL: 4, TAOH: 1 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 1, CHAO: 3, CPU: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 4, PING: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 1, BIAO: 1 } }
    ]
  },
  {
    id: "Q_single_811",
    type: "single",
    text: "当遭遇不公平待遇时，你的第一反应是？（第42次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 2, BAOZ: 1, DPENG: 2 } },
      { id: "B", text: "哭泣", weights: { BENG: 4, WEMO: 2, MAIM: 4 } },
      { id: "C", text: "冷笑", weights: { YINY: 4, CHAO: 2, LENGL: 1 } },
      { id: "D", text: "沉默", weights: { GHOST: 3, DANR: 4, SLEEP: 2 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 4, DYOR: 4 } }
    ]
  },
  {
    id: "Q_single_812",
    type: "single",
    text: "当计划突然被打乱时，你的第一反应是？（第43次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 3, BAOZ: 2, PING: 1 } },
      { id: "B", text: "妥协", weights: { WONANG: 4, SERF: 3, TAOH: 3 } },
      { id: "C", text: "拖延", weights: { TUOY: 3, XUANZ: 4, IMFW: 1 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 4, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 2, BEIH: 3, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_813",
    type: "single",
    text: "当收到坏消息时，你的第一反应是？（第44次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 1, YOLO: 1, PING: 4 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 2, NORM: 3 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 4, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 1, XIAN: 4, WONANG: 3 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 2, BOSS: 1, SHEK: 3 } }
    ]
  },
  {
    id: "Q_single_814",
    type: "single",
    text: "当面对无理要求时，你的第一反应是？（第45次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 2, GANG: 4, HOUJ: 3 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 1, SHIL: 2, TAOH: 3 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 2, CHAO: 1, CPU: 4 } },
      { id: "D", text: "转身离开", weights: { GHOST: 3, YOLO: 1, PING: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 4, WEMO: 1, BIAO: 3 } }
    ]
  },
  {
    id: "Q_single_815",
    type: "single",
    text: "当被朋友背叛时，你的第一反应是？（第46次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 2, BAOZ: 3, DPENG: 3 } },
      { id: "B", text: "哭泣", weights: { BENG: 2, WEMO: 1, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 1, CHAO: 3, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 4, SLEEP: 3 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 2, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_816",
    type: "single",
    text: "当工作压力爆棚时，你的第一反应是？（第47次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 1, BAOZ: 2, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 3, SERF: 3, TAOH: 2 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 1, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 1, CPU: 2, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 2, BEIH: 1, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_817",
    type: "single",
    text: "当深夜 emo时，你的第一反应是？（第48次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 1, YOLO: 4, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 4, NORM: 2 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 3, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 2, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 1, BOSS: 3, SHEK: 2 } }
    ]
  },
  {
    id: "Q_single_818",
    type: "single",
    text: "当社交场合尴尬时，你的第一反应是？（第49次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 4, HOUJ: 3 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 4, SHIL: 1, TAOH: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 2, CPU: 4 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 4, PING: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 3, WEMO: 2, BIAO: 1 } }
    ]
  },
  {
    id: "Q_single_819",
    type: "single",
    text: "当经济拮据时，你的第一反应是？（第50次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 4, BAOZ: 4, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 1, WEMO: 3, MAIM: 4 } },
      { id: "C", text: "冷笑", weights: { YINY: 1, CHAO: 4, LENGL: 1 } },
      { id: "D", text: "沉默", weights: { GHOST: 3, DANR: 2, SLEEP: 3 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 2, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_820",
    type: "single",
    text: "当感情受挫时，你的第一反应是？（第51次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 4, BAOZ: 2, PING: 1 } },
      { id: "B", text: "妥协", weights: { WONANG: 4, SERF: 2, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 4, XUANZ: 4, IMFW: 3 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 3, BIAO: 1 } },
      { id: "E", text: "道歉", weights: { WONANG: 4, BEIH: 2, NORM: 1 } }
    ]
  },
  {
    id: "Q_single_821",
    type: "single",
    text: "当被人误解时，你的第一反应是？（第52次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 2, PING: 1 } },
      { id: "B", text: "法律途径", weights: { BOSS: 2, PDF: 1, NORM: 4 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 1, FOMO: 4, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 3, XIAN: 3, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 3, BOSS: 4, SHEK: 3 } }
    ]
  },
  {
    id: "Q_single_822",
    type: "single",
    text: "当遇到技术故障时，你的第一反应是？（第53次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 1, HOUJ: 3 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 4, SHIL: 2, TAOH: 2 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 4, CPU: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 3, PING: 1 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 3, BIAO: 3 } }
    ]
  },
  {
    id: "Q_single_823",
    type: "single",
    text: "当身体不适时，你的第一反应是？（第54次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 1, DPENG: 3 } },
      { id: "B", text: "哭泣", weights: { BENG: 1, WEMO: 4, MAIM: 4 } },
      { id: "C", text: "冷笑", weights: { YINY: 4, CHAO: 3, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 4, SLEEP: 4 } },
      { id: "E", text: "解释", weights: { BOSS: 4, LIKE: 1, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_824",
    type: "single",
    text: "当被人比下去时，你的第一反应是？（第55次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 1, BAOZ: 1, PING: 4 } },
      { id: "B", text: "妥协", weights: { WONANG: 4, SERF: 4, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 4, XUANZ: 3, IMFW: 1 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 2, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 2, BEIH: 2, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_825",
    type: "single",
    text: "当目标遥不可及时，你的第一反应是？（第56次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 3, YOLO: 3, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 2, NORM: 3 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 4, YINY: 3 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 2, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 1, BOSS: 1, SHEK: 3 } }
    ]
  },
  {
    id: "Q_single_826",
    type: "single",
    text: "当被人放鸽子时，你的第一反应是？（第57次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 2, GANG: 4, HOUJ: 4 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 1, SHIL: 2, TAOH: 1 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 2, CHAO: 1, CPU: 2 } },
      { id: "D", text: "转身离开", weights: { GHOST: 1, YOLO: 1, PING: 2 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 4, WEMO: 4, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_827",
    type: "single",
    text: "当付出没有回报时，你的第一反应是？（第58次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 2, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 4, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 3, CHAO: 3, LENGL: 1 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 3, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 1, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_828",
    type: "single",
    text: "当环境嘈杂时，你的第一反应是？（第59次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 2, BAOZ: 2, PING: 1 } },
      { id: "B", text: "妥协", weights: { WONANG: 1, SERF: 3, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 4, XUANZ: 4, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 1, CPU: 1, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 4, NORM: 4 } }
    ]
  },
  {
    id: "Q_single_829",
    type: "single",
    text: "当被人忽视时，你的第一反应是？（第60次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 3, YOLO: 2, PING: 2 } },
      { id: "B", text: "法律途径", weights: { BOSS: 4, PDF: 3, NORM: 3 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 1, FOMO: 4, YINY: 1 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 4, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 4, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_830",
    type: "single",
    text: "当被陌生人冒犯时，你的第一反应是？（第61次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 4, GANG: 1, HOUJ: 4 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 1, SHIL: 3, TAOH: 1 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 1, CHAO: 2, CPU: 4 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 3, PING: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 4, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_831",
    type: "single",
    text: "当遭遇不公平待遇时，你的第一反应是？（第62次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 3, BAOZ: 1, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 1, WEMO: 4, MAIM: 1 } },
      { id: "C", text: "冷笑", weights: { YINY: 3, CHAO: 1, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 3, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 4, DYOR: 4 } }
    ]
  },
  {
    id: "Q_single_832",
    type: "single",
    text: "当计划突然被打乱时，你的第一反应是？（第63次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 4, BAOZ: 1, PING: 2 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 1, TAOH: 1 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 3, IMFW: 3 } },
      { id: "D", text: "转移话题", weights: { YINY: 4, CPU: 2, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 3, BEIH: 2, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_833",
    type: "single",
    text: "当收到坏消息时，你的第一反应是？（第64次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 4, PING: 2 } },
      { id: "B", text: "法律途径", weights: { BOSS: 1, PDF: 1, NORM: 3 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 3, YINY: 1 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 3, WONANG: 2 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 1, BOSS: 3, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_834",
    type: "single",
    text: "当面对无理要求时，你的第一反应是？（第65次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 4, GANG: 1, HOUJ: 4 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 1, SHIL: 3, TAOH: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 4, CHAO: 3, CPU: 2 } },
      { id: "D", text: "转身离开", weights: { GHOST: 3, YOLO: 1, PING: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 2, WEMO: 1, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_835",
    type: "single",
    text: "当被朋友背叛时，你的第一反应是？（第66次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 2, BAOZ: 4, DPENG: 3 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 3, MAIM: 4 } },
      { id: "C", text: "冷笑", weights: { YINY: 1, CHAO: 2, LENGL: 1 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 4, SLEEP: 4 } },
      { id: "E", text: "解释", weights: { BOSS: 2, LIKE: 4, DYOR: 4 } }
    ]
  },
  {
    id: "Q_single_836",
    type: "single",
    text: "当工作压力爆棚时，你的第一反应是？（第67次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 2, BAOZ: 2, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 4, SERF: 1, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 2, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 2, CPU: 4, BIAO: 2 } },
      { id: "E", text: "道歉", weights: { WONANG: 4, BEIH: 1, NORM: 4 } }
    ]
  },
  {
    id: "Q_single_837",
    type: "single",
    text: "当深夜 emo时，你的第一反应是？（第68次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 3, YOLO: 1, PING: 1 } },
      { id: "B", text: "法律途径", weights: { BOSS: 4, PDF: 4, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 1, YINY: 3 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 3, WONANG: 2 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 2, BOSS: 4, SHEK: 2 } }
    ]
  },
  {
    id: "Q_single_838",
    type: "single",
    text: "当社交场合尴尬时，你的第一反应是？（第69次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 4, GANG: 3, HOUJ: 1 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 3, SHIL: 1, TAOH: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 1, CHAO: 2, CPU: 1 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 2, PING: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 1, BIAO: 3 } }
    ]
  },
  {
    id: "Q_single_839",
    type: "single",
    text: "当经济拮据时，你的第一反应是？（第70次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 3, DPENG: 3 } },
      { id: "B", text: "哭泣", weights: { BENG: 4, WEMO: 2, MAIM: 4 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 2, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 3, DANR: 3, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 1, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_840",
    type: "single",
    text: "当感情受挫时，你的第一反应是？（第71次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 4, BAOZ: 1, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 1, SERF: 4, TAOH: 1 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 1, IMFW: 1 } },
      { id: "D", text: "转移话题", weights: { YINY: 1, CPU: 2, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 4, BEIH: 2, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_841",
    type: "single",
    text: "当被人误解时，你的第一反应是？（第72次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 2, YOLO: 1, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 1, PDF: 3, NORM: 2 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 2, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 2, WONANG: 4 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 4, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_842",
    type: "single",
    text: "当遇到技术故障时，你的第一反应是？（第73次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 3, GANG: 2, HOUJ: 4 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 1, SHIL: 3, TAOH: 1 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 4, CHAO: 1, CPU: 2 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 1, PING: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 3, WEMO: 4, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_843",
    type: "single",
    text: "当身体不适时，你的第一反应是？（第74次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 2, BAOZ: 1, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 1, MAIM: 1 } },
      { id: "C", text: "冷笑", weights: { YINY: 4, CHAO: 3, LENGL: 3 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 3, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 2, DYOR: 2 } }
    ]
  },
  {
    id: "Q_single_844",
    type: "single",
    text: "当被人比下去时，你的第一反应是？（第75次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 4, BAOZ: 3, PING: 4 } },
      { id: "B", text: "妥协", weights: { WONANG: 1, SERF: 4, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 3, XUANZ: 3, IMFW: 2 } },
      { id: "D", text: "转移话题", weights: { YINY: 1, CPU: 1, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 4, BEIH: 3, NORM: 1 } }
    ]
  },
  {
    id: "Q_single_845",
    type: "single",
    text: "当目标遥不可及时，你的第一反应是？（第76次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 2, YOLO: 2, PING: 2 } },
      { id: "B", text: "法律途径", weights: { BOSS: 1, PDF: 3, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 4, YINY: 3 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 1, XIAN: 3, WONANG: 3 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 1, SHEK: 2 } }
    ]
  },
  {
    id: "Q_single_846",
    type: "single",
    text: "当被人放鸽子时，你的第一反应是？（第77次）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 4, GANG: 3, HOUJ: 3 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 4, SHIL: 1, TAOH: 2 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 3, CPU: 4 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 3, PING: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 3, WEMO: 4, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_847",
    type: "single",
    text: "当付出没有回报时，你的第一反应是？（第78次）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 3, BAOZ: 1, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 4, WEMO: 4, MAIM: 4 } },
      { id: "C", text: "冷笑", weights: { YINY: 1, CHAO: 2, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 1, SLEEP: 2 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 3, DYOR: 2 } }
    ]
  },
  {
    id: "Q_single_848",
    type: "single",
    text: "当环境嘈杂时，你的第一反应是？（第79次）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 4, BAOZ: 1, PING: 2 } },
      { id: "B", text: "妥协", weights: { WONANG: 1, SERF: 2, TAOH: 3 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 2, IMFW: 1 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 1, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 3, BEIH: 1, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_849",
    type: "single",
    text: "当被人忽视时，你的第一反应是？（第80次）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 1, YOLO: 3, PING: 4 } },
      { id: "B", text: "法律途径", weights: { BOSS: 2, PDF: 1, NORM: 3 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 3, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 4, WONANG: 3 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 2, SHEK: 4 } }
    ]
  },
  {
    id: "Q_multi_011",
    type: "multi",
    text: "以下哪些行为你经常做？",
    options: [
      { id: "A", text: "深夜 emo", weights: { WEMO: 1, EMO: 3, POET: 1 } },
      { id: "B", text: "复制粘贴", weights: { NPC: 1, SERF: 3, CODE: 1 } },
      { id: "C", text: "已读不回", weights: { GHOST: 2, HEIH: 3, IMFW: 2 } },
      { id: "D", text: "朋友圈三天可见", weights: { GHOST: 1, NPC: 3, IMFW: 1 } },
      { id: "E", text: "闹钟响了再睡五分钟", weights: { SLEEP: 2, TUOY: 1, IMFW: 2 } },
      { id: "F", text: "买东西凑满减", weights: { XIAOQI: 3, DOGE: 2, FUDI: 1 } }
    ]
  },
  {
    id: "Q_multi_012",
    type: "multi",
    text: "你觉得自己具有以下哪些特质？",
    options: [
      { id: "A", text: "攻击性", weights: { HITER: 1, BAOZ: 3, HOUJ: 3 } },
      { id: "B", text: "社恐", weights: { GHOST: 2, GELI: 1, SHUS: 1 } },
      { id: "C", text: "摆烂", weights: { IMFW: 2, XIAN: 3, SLEEP: 2 } },
      { id: "D", text: "内耗", weights: { WONANG: 1, POET: 1, BENG: 1 } },
      { id: "E", text: "自恋", weights: { ZIL: 2, VIP: 1, BIAO: 3 } },
      { id: "F", text: "多疑", weights: { JING: 1, BEIH: 1, YUAN: 3 } }
    ]
  },
  {
    id: "Q_multi_013",
    type: "multi",
    text: "在以下场景中，哪些会让你感到不适？",
    options: [
      { id: "A", text: "大声说话", weights: { HOUJ: 3, BAOZ: 1, KONG: 1 } },
      { id: "B", text: "已读不回", weights: { GHOST: 3, HEIH: 1, LENGL: 3 } },
      { id: "C", text: "炫耀", weights: { XUAN: 3, VIP: 1, ZIL: 3 } },
      { id: "D", text: "废话连篇", weights: { BOSS: 2, BIAO: 3, VIP: 1 } },
      { id: "E", text: "插队", weights: { HOUJ: 1, BAOZ: 1, VIP: 1 } },
      { id: "F", text: "半夜噪音", weights: { HOUJ: 1, BAOZ: 3, KONG: 2 } }
    ]
  },
  {
    id: "Q_multi_014",
    type: "multi",
    text: "以下哪些话你可能会说出口？",
    options: [
      { id: "A", text: "随便吧", weights: { IMFW: 3, DANR: 3, XUANZ: 3 } },
      { id: "B", text: "你是对的", weights: { YINY: 1, CPU: 1, TAOH: 1 } },
      { id: "C", text: "我太难了", weights: { MAIM: 3, WEMO: 2, WONANG: 3 } },
      { id: "D", text: "关我屁事", weights: { IMFW: 3, PING: 1, HITER: 1 } },
      { id: "E", text: "尊嘟假嘟", weights: { ZUND: 3, JUEJ: 1, DUNJ: 1 } },
      { id: "F", text: "泰裤辣", weights: { TAIK: 1, YOLO: 3, BABI: 3 } }
    ]
  },
  {
    id: "Q_multi_015",
    type: "multi",
    text: "你的手机里通常会有以下哪些 APP？",
    options: [
      { id: "A", text: "微博", weights: { CHIG: 1, SAIBO: 3, FOMO: 3 } },
      { id: "B", text: "小红书", weights: { ZIL: 2, XUAN: 1, BIAO: 3 } },
      { id: "C", text: "抖音", weights: { SAIBO: 2, DIAN: 1, GIF: 1 } },
      { id: "D", text: "B站", weights: { WEEB: 1, DIAN: 3, SAIBO: 1 } },
      { id: "E", text: "知乎", weights: { LIKE: 1, DYOR: 3, GANG: 1 } },
      { id: "F", text: "豆瓣", weights: { CHAO: 3, LIKE: 1, POET: 1 } }
    ]
  },
  {
    id: "Q_multi_016",
    type: "multi",
    text: "你的周末常态包括？",
    options: [
      { id: "A", text: "床上躺两天", weights: { SLEEP: 3, SHUS: 2, MALO: 2 } },
      { id: "B", text: "报复性社交", weights: { SHEK: 2, WAIF: 3, BACH: 2 } },
      { id: "C", text: "加班", weights: { SERF: 3, BOSS: 3, CODE: 3 } },
      { id: "D", text: "大扫除", weights: { JIEP: 1, KONG: 3, NORM: 3 } },
      { id: "E", text: "刷剧打游戏", weights: { SAIBO: 3, DIAN: 2, SLEEP: 3 } },
      { id: "F", text: "学习充电", weights: { BOSS: 1, KONG: 3, CODE: 2 } }
    ]
  },
  {
    id: "Q_multi_017",
    type: "multi",
    text: "你在网络世界可能具备以下哪些身份？",
    options: [
      { id: "A", text: "键盘战神", weights: { KEYB: 1, GANG: 2, HITER: 1 } },
      { id: "B", text: "吃瓜乐子人", weights: { CHIG: 1, GIF: 3, TROLL: 1 } },
      { id: "C", text: "理中客", weights: { LIKE: 1, SHENG: 2, DYOR: 3 } },
      { id: "D", text: "小透明", weights: { GHOST: 1, NPC: 3, SLEEP: 3 } },
      { id: "E", text: "考古学家", weights: { YUYA: 3, KAOG: 3, DYOR: 1 } },
      { id: "F", text: "引流狗", weights: { SHUI: 2, SERF: 2, NPC: 2 } }
    ]
  },
  {
    id: "Q_multi_018",
    type: "multi",
    text: "以下哪些事情会让你瞬间破防？",
    options: [
      { id: "A", text: "被已读不回", weights: { GHOST: 2, HEIH: 3, WONANG: 2 } },
      { id: "B", text: "被插队", weights: { HOUJ: 1, BAOZ: 3, PING: 1 } },
      { id: "C", text: "被阴阳", weights: { CHAO: 3, YINY: 1, WONANG: 2 } },
      { id: "D", text: "被忽视", weights: { ZIL: 2, BIAO: 2, KONG: 2 } },
      { id: "E", text: "被贬低", weights: { WONANG: 2, BEIH: 1, MAIM: 2 } },
      { id: "F", text: "被道德绑架", weights: { SHENG: 3, CPU: 1, WONANG: 3 } }
    ]
  },
  {
    id: "Q_multi_019",
    type: "multi",
    text: "你的口头禅/常用语包括？",
    options: [
      { id: "A", text: "啊这", weights: { DUNJ: 1, NPC: 3, IMFW: 3 } },
      { id: "B", text: "笑死", weights: { CHAO: 2, TROLL: 1, GIF: 2 } },
      { id: "C", text: "6", weights: { CHAO: 3, NPC: 3, DUNJ: 1 } },
      { id: "D", text: "服了", weights: { WONANG: 2, SERF: 3, IMFW: 3 } },
      { id: "E", text: "逆天", weights: { CHAO: 2, LIKE: 1, GANG: 1 } },
      { id: "F", text: "好家伙", weights: { CHIG: 1, NPC: 3, DUNJ: 3 } }
    ]
  },
  {
    id: "Q_multi_020",
    type: "multi",
    text: "以下哪些行为你觉得很酷？",
    options: [
      { id: "A", text: "直接翻脸", weights: { HOUJ: 1, BAOZ: 1, YOLO: 3 } },
      { id: "B", text: "已读不回", weights: { GHOST: 2, HEIH: 2, IMFW: 1 } },
      { id: "C", text: "说走就走", weights: { YOLO: 2, PING: 2, BOSS: 3 } },
      { id: "D", text: "敢于拒绝", weights: { BOSS: 2, HITER: 3, FANS: 1 } },
      { id: "E", text: "发疯文学", weights: { WEMO: 2, BENG: 2, POET: 1 } },
      { id: "F", text: "躺平摆烂", weights: { IMFW: 2, XIAN: 3, SLEEP: 2 } }
    ]
  },
  {
    id: "Q_multi_021",
    type: "multi",
    text: "你最不能忍受的同事行为包括？",
    options: [
      { id: "A", text: "开会废话", weights: { BOSS: 1, VIP: 3, BIAO: 2 } },
      { id: "B", text: "甩锅", weights: { YUAN: 1, CPU: 1, BOSS: 2 } },
      { id: "C", text: "拍马屁", weights: { SERF: 3, BOSS: 3, CPU: 1 } },
      { id: "D", text: "已读不回工作消息", weights: { GHOST: 3, HEIH: 1, IMFW: 2 } },
      { id: "E", text: "占小便宜", weights: { LAI: 1, XIAOQI: 2, TROLL: 2 } },
      { id: "F", text: "大声打电话", weights: { HOUJ: 3, BAOZ: 1, KONG: 1 } }
    ]
  },
  {
    id: "Q_multi_022",
    type: "multi",
    text: "你理想的假期包含以下哪些元素？",
    options: [
      { id: "A", text: "海边躺平", weights: { XIAN: 3, IMFW: 1, SLEEP: 3 } },
      { id: "B", text: "城市暴走", weights: { BOSS: 2, YOLO: 1, HITER: 1 } },
      { id: "C", text: "宅家打游戏", weights: { DIAN: 1, SAIBO: 3, WEEB: 3 } },
      { id: "D", text: "打卡网红店", weights: { ZIL: 1, XUAN: 2, FOMO: 3 } },
      { id: "E", text: "徒步露营", weights: { BOSS: 1, OPEN: 3, YOLO: 1 } },
      { id: "F", text: "博物馆看展", weights: { DEEP: 2, NORM: 3, POET: 1 } }
    ]
  },
  {
    id: "Q_multi_023",
    type: "multi",
    text: "以下哪些是你的消费观？",
    options: [
      { id: "A", text: "该省省该花花", weights: { NORM: 2, BOSS: 3, DYOR: 3 } },
      { id: "B", text: "为情绪买单", weights: { EMO: 3, WEMO: 1, BENG: 3 } },
      { id: "C", text: "只买 9.9 包邮", weights: { XIAOQI: 2, DOGE: 2, SHUS: 2 } },
      { id: "D", text: "超前消费", weights: { YUEG: 2, YOLO: 1, FUDI: 3 } },
      { id: "E", text: "不买立省 100%", weights: { IMFW: 3, GHOST: 1, XIAOQI: 1 } },
      { id: "F", text: "只买贵的", weights: { VIP: 1, BOSS: 3, XUAN: 1 } }
    ]
  },
  {
    id: "Q_multi_024",
    type: "multi",
    text: "你在恋爱中可能会做的事？",
    options: [
      { id: "A", text: "查手机", weights: { KONG: 2, JING: 2, BEIH: 2 } },
      { id: "B", text: "已读不回试探", weights: { GHOST: 3, HEIH: 1, YUAN: 2 } },
      { id: "C", text: "送礼物讨好", weights: { DAREN: 3, ZIL: 2, BIAO: 2 } },
      { id: "D", text: "冷战", weights: { LENGL: 2, HEIH: 1, GHOST: 3 } },
      { id: "E", text: "写小作文", weights: { POET: 2, WEMO: 2, WONANG: 3 } },
      { id: "F", text: "直接分手", weights: { BOSS: 3, PING: 3, YOLO: 2 } }
    ]
  },
  {
    id: "Q_multi_025",
    type: "multi",
    text: "以下哪些是你对未来的幻想？",
    options: [
      { id: "A", text: "一夜暴富", weights: { VIP: 2, YOLO: 2, DOGE: 2 } },
      { id: "B", text: "退休", weights: { XIAN: 3, SLEEP: 2, IMFW: 2 } },
      { id: "C", text: "环游世界", weights: { OPEN: 2, YOLO: 1, BOSS: 1 } },
      { id: "D", text: "隐居山林", weights: { GHOST: 2, XIAN: 2, POET: 3 } },
      { id: "E", text: "成为网红", weights: { ZIL: 1, XUAN: 2, BIAO: 2 } },
      { id: "F", text: "改变世界", weights: { BOSS: 3, GROK: 2, SHENG: 3 } }
    ]
  },
  {
    id: "Q_multi_026",
    type: "multi",
    text: "你的社交偏好是？",
    options: [
      { id: "A", text: "只和熟人玩", weights: { WAIF: 2, GHOST: 3, NPC: 1 } },
      { id: "B", text: "社牛局局到场", weights: { SHEK: 1, WAIF: 2, BACH: 3 } },
      { id: "C", text: "线上活跃线下隐身", weights: { GHOST: 3, DIAN: 2, WEEB: 1 } },
      { id: "D", text: "不参加任何聚会", weights: { GHOST: 2, GELI: 2, SLEEP: 2 } },
      { id: "E", text: "被迫营业", weights: { NPC: 1, SERF: 2, BIAO: 1 } },
      { id: "F", text: "只参加有利益相关的局", weights: { BOSS: 1, VIP: 2, CPU: 3 } }
    ]
  },
  {
    id: "Q_multi_027",
    type: "multi",
    text: "以下哪些是你的网络人设？",
    options: [
      { id: "A", text: "高冷人设", weights: { GHOST: 3, HEIH: 3, ZIL: 2 } },
      { id: "B", text: "搞笑担当", weights: { CHAO: 1, TROLL: 1, GIF: 1 } },
      { id: "C", text: "知识博主", weights: { LIKE: 1, DYOR: 2, BOSS: 1 } },
      { id: "D", text: "情感导师", weights: { CPU: 3, BOSS: 2, SHENG: 2 } },
      { id: "E", text: "吃瓜路人", weights: { CHIG: 1, NPC: 2, SAIBO: 2 } },
      { id: "F", text: "喷子", weights: { KEYB: 2, GANG: 2, HITER: 1 } }
    ]
  },
  {
    id: "Q_multi_028",
    type: "multi",
    text: "你的解压方式包括？",
    options: [
      { id: "A", text: "睡觉", weights: { SLEEP: 1, XIAN: 3, IMFW: 3 } },
      { id: "B", text: "打游戏", weights: { DIAN: 1, SAIBO: 3, WEEB: 2 } },
      { id: "C", text: "运动", weights: { BOSS: 3, PING: 2, HITER: 2 } },
      { id: "D", text: "喝酒", weights: { YOLO: 2, FOMO: 2, BACH: 2 } },
      { id: "E", text: "追剧", weights: { SAIBO: 3, DIAN: 1, NPC: 2 } },
      { id: "F", text: "买买买", weights: { YOLO: 1, EMO: 1, BENG: 1 } }
    ]
  },
  {
    id: "Q_multi_029",
    type: "multi",
    text: "以下哪些标签适合你？",
    options: [
      { id: "A", text: "拖延症晚期", weights: { TUOY: 3, XUANZ: 1, IMFW: 2 } },
      { id: "B", text: "完美主义", weights: { BOSS: 2, KONG: 1, JIEP: 2 } },
      { id: "C", text: "社恐", weights: { GHOST: 1, GELI: 1, SHUS: 2 } },
      { id: "D", text: "恋爱脑", weights: { EMO: 1, WEMO: 2, SEXY: 3 } },
      { id: "E", text: "事业批", weights: { BOSS: 3, SERF: 2, CODE: 1 } },
      { id: "F", text: "emo 怪", weights: { WEMO: 1, EMO: 2, BENG: 2 } }
    ]
  },
  {
    id: "Q_multi_030",
    type: "multi",
    text: "你最常出现的情绪是？",
    options: [
      { id: "A", text: "焦虑", weights: { BENG: 1, WEMO: 3, WONANG: 3 } },
      { id: "B", text: "愤怒", weights: { BAOZ: 2, HOUJ: 3, HITER: 3 } },
      { id: "C", text: "空虚", weights: { IMFW: 2, 404: 3, NPC: 1 } },
      { id: "D", text: "兴奋", weights: { YOLO: 2, FOMO: 3, DOGE: 3 } },
      { id: "E", text: "平静", weights: { DANR: 3, XIAN: 2, SLEEP: 1 } },
      { id: "F", text: "孤独", weights: { GHOST: 2, GELI: 3, POET: 3 } }
    ]
  },
  {
    id: "Q_single_850",
    type: "single",
    text: "当被陌生人冒犯时，你的第一反应是？（补1）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 3, GANG: 1, HOUJ: 3 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 2, SHIL: 2, TAOH: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 4, CHAO: 4, CPU: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 2, PING: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 3, WEMO: 1, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_851",
    type: "single",
    text: "当遭遇不公平待遇时，你的第一反应是？（补2）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 2, BAOZ: 3, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 2, WEMO: 4, MAIM: 1 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 4, LENGL: 1 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 1, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 3, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_852",
    type: "single",
    text: "当计划突然被打乱时，你的第一反应是？（补3）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 2, BAOZ: 3, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 1, SERF: 1, TAOH: 1 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 2, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 1, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 3, BEIH: 1, NORM: 4 } }
    ]
  },
  {
    id: "Q_single_853",
    type: "single",
    text: "当收到坏消息时，你的第一反应是？（补4）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 1, YOLO: 2, PING: 2 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 2, NORM: 2 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 1, YINY: 1 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 1, XIAN: 3, WONANG: 2 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 3, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_854",
    type: "single",
    text: "当面对无理要求时，你的第一反应是？（补5）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 3, HOUJ: 2 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 3, SHIL: 2, TAOH: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 4, CHAO: 4, CPU: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 3, YOLO: 2, PING: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 2, WEMO: 4, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_855",
    type: "single",
    text: "当被朋友背叛时，你的第一反应是？（补6）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 3, BAOZ: 1, DPENG: 3 } },
      { id: "B", text: "哭泣", weights: { BENG: 2, WEMO: 4, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 3, CHAO: 1, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 2, SLEEP: 3 } },
      { id: "E", text: "解释", weights: { BOSS: 2, LIKE: 3, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_856",
    type: "single",
    text: "当工作压力爆棚时，你的第一反应是？（补7）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 2, BAOZ: 2, PING: 4 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 3, TAOH: 2 } },
      { id: "C", text: "拖延", weights: { TUOY: 3, XUANZ: 4, IMFW: 2 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 3, BIAO: 1 } },
      { id: "E", text: "道歉", weights: { WONANG: 4, BEIH: 3, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_857",
    type: "single",
    text: "当深夜 emo时，你的第一反应是？（补8）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 2, YOLO: 4, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 2, PDF: 3, NORM: 2 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 1, FOMO: 1, YINY: 4 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 4, WONANG: 3 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 1, BOSS: 4, SHEK: 3 } }
    ]
  },
  {
    id: "Q_single_858",
    type: "single",
    text: "当社交场合尴尬时，你的第一反应是？（补9）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 4, GANG: 2, HOUJ: 3 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 2, SHIL: 1, TAOH: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 2, CHAO: 4, CPU: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 3, PING: 1 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 4, WEMO: 1, BIAO: 1 } }
    ]
  },
  {
    id: "Q_single_859",
    type: "single",
    text: "当经济拮据时，你的第一反应是？（补10）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 1, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 4, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 3, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 4, SLEEP: 4 } },
      { id: "E", text: "解释", weights: { BOSS: 2, LIKE: 2, DYOR: 2 } }
    ]
  },
  {
    id: "Q_single_860",
    type: "single",
    text: "当感情受挫时，你的第一反应是？（补11）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 4, BAOZ: 3, PING: 2 } },
      { id: "B", text: "妥协", weights: { WONANG: 3, SERF: 3, TAOH: 2 } },
      { id: "C", text: "拖延", weights: { TUOY: 1, XUANZ: 2, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 1, CPU: 4, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 2, BEIH: 4, NORM: 4 } }
    ]
  },
  {
    id: "Q_single_861",
    type: "single",
    text: "当被人误解时，你的第一反应是？（补12）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 2, YOLO: 1, PING: 4 } },
      { id: "B", text: "法律途径", weights: { BOSS: 2, PDF: 4, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 2, YINY: 4 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 1, XIAN: 3, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 2, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_862",
    type: "single",
    text: "当遇到技术故障时，你的第一反应是？（补13）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 3, GANG: 3, HOUJ: 3 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 3, SHIL: 2, TAOH: 3 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 3, CPU: 4 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 3, PING: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 1, BIAO: 1 } }
    ]
  },
  {
    id: "Q_single_863",
    type: "single",
    text: "当被陌生人冒犯时，你的第一反应是？（补14）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 4, BAOZ: 2, DPENG: 3 } },
      { id: "B", text: "哭泣", weights: { BENG: 4, WEMO: 3, MAIM: 4 } },
      { id: "C", text: "冷笑", weights: { YINY: 3, CHAO: 4, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 2, DANR: 3, SLEEP: 4 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 3, DYOR: 4 } }
    ]
  },
  {
    id: "Q_single_864",
    type: "single",
    text: "当遭遇不公平待遇时，你的第一反应是？（补15）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 3, BAOZ: 1, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 2, SERF: 4, TAOH: 3 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 1, IMFW: 3 } },
      { id: "D", text: "转移话题", weights: { YINY: 4, CPU: 4, BIAO: 1 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 1, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_865",
    type: "single",
    text: "当计划突然被打乱时，你的第一反应是？（补16）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 3, PING: 2 } },
      { id: "B", text: "法律途径", weights: { BOSS: 1, PDF: 1, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 3, FOMO: 1, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 1, XIAN: 4, WONANG: 2 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 1, BOSS: 4, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_866",
    type: "single",
    text: "当收到坏消息时，你的第一反应是？（补17）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 1, HOUJ: 3 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 1, SHIL: 3, TAOH: 2 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 4, CPU: 4 } },
      { id: "D", text: "转身离开", weights: { GHOST: 3, YOLO: 4, PING: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 4, WEMO: 3, BIAO: 3 } }
    ]
  },
  {
    id: "Q_single_867",
    type: "single",
    text: "当面对无理要求时，你的第一反应是？（补18）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 4, BAOZ: 2, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 1, WEMO: 2, MAIM: 4 } },
      { id: "C", text: "冷笑", weights: { YINY: 1, CHAO: 3, LENGL: 3 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 2, SLEEP: 3 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 4, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_868",
    type: "single",
    text: "当被朋友背叛时，你的第一反应是？（补19）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 1, BAOZ: 4, PING: 2 } },
      { id: "B", text: "妥协", weights: { WONANG: 1, SERF: 4, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 4, IMFW: 3 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 4, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 2, BEIH: 3, NORM: 2 } }
    ]
  },
  {
    id: "Q_single_869",
    type: "single",
    text: "当工作压力爆棚时，你的第一反应是？（补20）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 3, PING: 2 } },
      { id: "B", text: "法律途径", weights: { BOSS: 4, PDF: 1, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 2, YINY: 3 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 3, XIAN: 4, WONANG: 3 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 3, BOSS: 3, SHEK: 2 } }
    ]
  },
  {
    id: "Q_single_870",
    type: "single",
    text: "当深夜 emo时，你的第一反应是？（补21）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 2, GANG: 2, HOUJ: 1 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 1, SHIL: 3, TAOH: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 2, CHAO: 2, CPU: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 1, PING: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 3, WEMO: 2, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_871",
    type: "single",
    text: "当社交场合尴尬时，你的第一反应是？（补22）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 3, BAOZ: 3, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 4, WEMO: 1, MAIM: 1 } },
      { id: "C", text: "冷笑", weights: { YINY: 3, CHAO: 1, LENGL: 2 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 2, SLEEP: 2 } },
      { id: "E", text: "解释", weights: { BOSS: 4, LIKE: 3, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_872",
    type: "single",
    text: "当经济拮据时，你的第一反应是？（补23）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 2, BAOZ: 3, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 4, SERF: 1, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 3, XUANZ: 3, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 2, CPU: 4, BIAO: 1 } },
      { id: "E", text: "道歉", weights: { WONANG: 3, BEIH: 3, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_873",
    type: "single",
    text: "当感情受挫时，你的第一反应是？（补24）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 4, PING: 1 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 1, NORM: 2 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 3, FOMO: 1, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 1, XIAN: 4, WONANG: 3 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 2, BOSS: 2, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_874",
    type: "single",
    text: "当被人误解时，你的第一反应是？（补25）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 3, GANG: 2, HOUJ: 4 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 1, SHIL: 2, TAOH: 1 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 3, CPU: 4 } },
      { id: "D", text: "转身离开", weights: { GHOST: 3, YOLO: 2, PING: 3 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 4, WEMO: 3, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_875",
    type: "single",
    text: "当遇到技术故障时，你的第一反应是？（补26）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 1, BAOZ: 4, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 1, WEMO: 3, MAIM: 2 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 4, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 1, SLEEP: 3 } },
      { id: "E", text: "解释", weights: { BOSS: 4, LIKE: 4, DYOR: 4 } }
    ]
  },
  {
    id: "Q_single_876",
    type: "single",
    text: "当被陌生人冒犯时，你的第一反应是？（补27）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 1, BAOZ: 3, PING: 1 } },
      { id: "B", text: "妥协", weights: { WONANG: 4, SERF: 4, TAOH: 3 } },
      { id: "C", text: "拖延", weights: { TUOY: 3, XUANZ: 2, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 2, CPU: 4, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 3, BEIH: 4, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_877",
    type: "single",
    text: "当遭遇不公平待遇时，你的第一反应是？（补28）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 3, PING: 3 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 4, NORM: 2 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 1, FOMO: 3, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 2, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 1, BOSS: 3, SHEK: 3 } }
    ]
  },
  {
    id: "Q_single_878",
    type: "single",
    text: "当计划突然被打乱时，你的第一反应是？（补29）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 2, HOUJ: 3 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 3, SHIL: 3, TAOH: 3 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 2, CPU: 1 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 2, PING: 2 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 2, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_879",
    type: "single",
    text: "当收到坏消息时，你的第一反应是？（补30）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 4, BAOZ: 3, DPENG: 4 } },
      { id: "B", text: "哭泣", weights: { BENG: 4, WEMO: 2, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 4, LENGL: 3 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 1, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 1, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_880",
    type: "single",
    text: "当面对无理要求时，你的第一反应是？（补31）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 3, BAOZ: 1, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 1, SERF: 1, TAOH: 2 } },
      { id: "C", text: "拖延", weights: { TUOY: 2, XUANZ: 4, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 1, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 3, BEIH: 4, NORM: 4 } }
    ]
  },
  {
    id: "Q_single_881",
    type: "single",
    text: "当被朋友背叛时，你的第一反应是？（补32）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 1, YOLO: 4, PING: 1 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 1, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 2, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 2, WONANG: 4 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 3, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_882",
    type: "single",
    text: "当工作压力爆棚时，你的第一反应是？（补33）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 3, HOUJ: 4 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 2, SHIL: 2, TAOH: 3 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 3, CHAO: 1, CPU: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 4, PING: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 2, WEMO: 2, BIAO: 3 } }
    ]
  },
  {
    id: "Q_single_883",
    type: "single",
    text: "当深夜 emo时，你的第一反应是？（补34）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 2, BAOZ: 4, DPENG: 2 } },
      { id: "B", text: "哭泣", weights: { BENG: 2, WEMO: 2, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 4, CHAO: 4, LENGL: 1 } },
      { id: "D", text: "沉默", weights: { GHOST: 1, DANR: 3, SLEEP: 3 } },
      { id: "E", text: "解释", weights: { BOSS: 3, LIKE: 3, DYOR: 1 } }
    ]
  },
  {
    id: "Q_single_884",
    type: "single",
    text: "当社交场合尴尬时，你的第一反应是？（补35）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 2, BAOZ: 4, PING: 2 } },
      { id: "B", text: "妥协", weights: { WONANG: 1, SERF: 1, TAOH: 4 } },
      { id: "C", text: "拖延", weights: { TUOY: 3, XUANZ: 4, IMFW: 3 } },
      { id: "D", text: "转移话题", weights: { YINY: 4, CPU: 1, BIAO: 4 } },
      { id: "E", text: "道歉", weights: { WONANG: 2, BEIH: 1, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_885",
    type: "single",
    text: "当经济拮据时，你的第一反应是？（补36）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 4, YOLO: 4, PING: 1 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 4, NORM: 3 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 3, FOMO: 4, YINY: 2 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 3, XIAN: 2, WONANG: 3 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 3, SHEK: 1 } }
    ]
  },
  {
    id: "Q_single_886",
    type: "single",
    text: "当感情受挫时，你的第一反应是？（补37）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 3, HOUJ: 2 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 3, SHIL: 4, TAOH: 4 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 4, CHAO: 1, CPU: 3 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 3, PING: 1 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 2, WEMO: 1, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_887",
    type: "single",
    text: "当被人误解时，你的第一反应是？（补38）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 4, BAOZ: 4, DPENG: 2 } },
      { id: "B", text: "哭泣", weights: { BENG: 4, WEMO: 1, MAIM: 3 } },
      { id: "C", text: "冷笑", weights: { YINY: 1, CHAO: 4, LENGL: 1 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 4, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 1, LIKE: 2, DYOR: 3 } }
    ]
  },
  {
    id: "Q_single_888",
    type: "single",
    text: "当遇到技术故障时，你的第一反应是？（补39）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 1, BAOZ: 2, PING: 3 } },
      { id: "B", text: "妥协", weights: { WONANG: 1, SERF: 3, TAOH: 2 } },
      { id: "C", text: "拖延", weights: { TUOY: 1, XUANZ: 2, IMFW: 2 } },
      { id: "D", text: "转移话题", weights: { YINY: 1, CPU: 1, BIAO: 2 } },
      { id: "E", text: "道歉", weights: { WONANG: 4, BEIH: 2, NORM: 3 } }
    ]
  },
  {
    id: "Q_single_889",
    type: "single",
    text: "当被陌生人冒犯时，你的第一反应是？（补40）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 2, YOLO: 3, PING: 4 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 3, NORM: 3 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 2, YINY: 1 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 1, WONANG: 4 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 2, BOSS: 2, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_890",
    type: "single",
    text: "当遭遇不公平待遇时，你的第一反应是？（补41）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 4, GANG: 3, HOUJ: 1 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 2, SHIL: 4, TAOH: 1 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 4, CHAO: 4, CPU: 4 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 2, PING: 1 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 3, BIAO: 2 } }
    ]
  },
  {
    id: "Q_single_891",
    type: "single",
    text: "当计划突然被打乱时，你的第一反应是？（补42）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 2, BAOZ: 4, DPENG: 3 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 1, MAIM: 1 } },
      { id: "C", text: "冷笑", weights: { YINY: 3, CHAO: 1, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 3, DANR: 1, SLEEP: 3 } },
      { id: "E", text: "解释", weights: { BOSS: 4, LIKE: 4, DYOR: 2 } }
    ]
  },
  {
    id: "Q_single_892",
    type: "single",
    text: "当收到坏消息时，你的第一反应是？（补43）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 4, BAOZ: 3, PING: 2 } },
      { id: "B", text: "妥协", weights: { WONANG: 3, SERF: 2, TAOH: 2 } },
      { id: "C", text: "拖延", weights: { TUOY: 3, XUANZ: 1, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 2, CPU: 3, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 1, NORM: 1 } }
    ]
  },
  {
    id: "Q_single_893",
    type: "single",
    text: "当面对无理要求时，你的第一反应是？（补44）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 1, YOLO: 1, PING: 1 } },
      { id: "B", text: "法律途径", weights: { BOSS: 3, PDF: 1, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 4, FOMO: 1, YINY: 1 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 4, XIAN: 4, WONANG: 2 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 4, BOSS: 3, SHEK: 4 } }
    ]
  },
  {
    id: "Q_single_894",
    type: "single",
    text: "当被朋友背叛时，你的第一反应是？（补45）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 2, GANG: 1, HOUJ: 2 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 2, SHIL: 2, TAOH: 2 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 1, CHAO: 1, CPU: 1 } },
      { id: "D", text: "转身离开", weights: { GHOST: 4, YOLO: 4, PING: 1 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 3, BIAO: 4 } }
    ]
  },
  {
    id: "Q_single_895",
    type: "single",
    text: "当工作压力爆棚时，你的第一反应是？（补46）",
    options: [
      { id: "A", text: "怒吼", weights: { HOUJ: 4, BAOZ: 1, DPENG: 1 } },
      { id: "B", text: "哭泣", weights: { BENG: 3, WEMO: 4, MAIM: 4 } },
      { id: "C", text: "冷笑", weights: { YINY: 2, CHAO: 2, LENGL: 4 } },
      { id: "D", text: "沉默", weights: { GHOST: 4, DANR: 1, SLEEP: 1 } },
      { id: "E", text: "解释", weights: { BOSS: 4, LIKE: 2, DYOR: 4 } }
    ]
  },
  {
    id: "Q_single_896",
    type: "single",
    text: "当深夜 emo时，你的第一反应是？（补47）",
    options: [
      { id: "A", text: "硬怼", weights: { HITER: 3, BAOZ: 3, PING: 4 } },
      { id: "B", text: "妥协", weights: { WONANG: 3, SERF: 1, TAOH: 3 } },
      { id: "C", text: "拖延", weights: { TUOY: 4, XUANZ: 4, IMFW: 4 } },
      { id: "D", text: "转移话题", weights: { YINY: 3, CPU: 2, BIAO: 3 } },
      { id: "E", text: "道歉", weights: { WONANG: 1, BEIH: 4, NORM: 1 } }
    ]
  },
  {
    id: "Q_single_897",
    type: "single",
    text: "当社交场合尴尬时，你的第一反应是？（补48）",
    options: [
      { id: "A", text: "暴力解决", weights: { HUIM: 3, YOLO: 2, PING: 1 } },
      { id: "B", text: "法律途径", weights: { BOSS: 2, PDF: 1, NORM: 1 } },
      { id: "C", text: "网络曝光", weights: { CHAO: 2, FOMO: 3, YINY: 4 } },
      { id: "D", text: "自认倒霉", weights: { IMFW: 2, XIAN: 3, WONANG: 1 } },
      { id: "E", text: "找人撑腰", weights: { DAREN: 2, BOSS: 3, SHEK: 3 } }
    ]
  },
  {
    id: "Q_single_898",
    type: "single",
    text: "当经济拮据时，你的第一反应是？（补49）",
    options: [
      { id: "A", text: "立刻反击", weights: { HITER: 1, GANG: 1, HOUJ: 4 } },
      { id: "B", text: "默默忍受", weights: { WONANG: 1, SHIL: 3, TAOH: 1 } },
      { id: "C", text: "阴阳怪气", weights: { YINY: 4, CHAO: 2, CPU: 1 } },
      { id: "D", text: "转身离开", weights: { GHOST: 2, YOLO: 3, PING: 4 } },
      { id: "E", text: "当场崩溃", weights: { BENG: 1, WEMO: 3, BIAO: 2 } }
    ]
  }
];

/**
 * 根据数量抽样题目
 */
export function sampleQuestions(count: number): Question[] {
  // 确保最少题目数
  const minCount = Math.min(count, QUESTION_LIBRARY.length);

  // 分层抽样：单选(≈94%) + 多选(≈6%)
  const singleQuestions = QUESTION_LIBRARY.filter(q => q.type === 'single');
  const multiQuestions = QUESTION_LIBRARY.filter(q => q.type === 'multi');

  const multiCount = Math.max(1, Math.floor(minCount * 0.06));
  const singleCount = minCount - multiCount;

  const result: Question[] = [
    ...singleQuestions.sort(() => Math.random() - 0.5).slice(0, singleCount),
    ...multiQuestions.sort(() => Math.random() - 0.5).slice(0, multiCount)
  ];

  // 打乱顺序
  return result.sort(() => Math.random() - 0.5);
}
