import type { Question } from '@/types';

export const ENTERTAINMENT_QUESTIONS: Question[] = [
  {
    id: 'Q_ent_001',
    type: 'single',
    text: '新剧刚开播，你的朋友还没看，你会？',
    options: [
      { id: 'A', text: '连夜看完，然后给好友发60秒语音矩阵剧透', weights: { JU: 5 } },
      { id: 'B', text: '忍不住暗示结局很惨，让她提前做好心理准备', weights: { JU: 3 } },
      { id: 'C', text: '坚决忍住不聊剧情，等对方追上进度再讨论', weights: { KENG2: 2 } },
      { id: 'D', text: '陪朋友从头一起看，保持同样的进度', weights: { TUAN: 2 } },
    ],
  },
  {
    id: 'Q_ent_002',
    type: 'single',
    text: '你追一部改编自小说的电视剧，原著已经完结，你的做法是？',
    options: [
      { id: 'A', text: '提前看原著，到处给剧粉科普后续剧情走向', weights: { JU: 5 } },
      { id: 'B', text: '自己默默看完原著，绝不剧透给别人', weights: { JU: 2 } },
      { id: 'C', text: '只看剧，拒绝被原著影响观剧体验', weights: { YING2: 2 } },
      { id: 'D', text: '直接把大结局发朋友圈，被剧透的人纷纷来拉黑你', weights: { JU: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_ent_003',
    type: 'single',
    text: '你的偶像发了新微博，评论区出现黑粉言论，你会？',
    options: [
      { id: 'A', text: '立刻组织控评反黑，熟练使用各种饭圈用语战斗', weights: { FAN: 5 } },
      { id: 'B', text: '默默举报拉黑，守护最好的评论区', weights: { FAN: 3 } },
      { id: 'C', text: '觉得骂战很无聊，直接划过不看', weights: { ZONG: 2 } },
      { id: 'D', text: '跟着黑粉一起嘲讽，看热闹不嫌事大', weights: { HEI: 3 } },
    ],
  },
  {
    id: 'Q_ent_004',
    type: 'single',
    text: '偶像的打榜任务开始了，你的日常操作是？',
    options: [
      { id: 'A', text: '每天定闹钟做数据，号被频繁验证也停不下来', weights: { FAN: 5 } },
      { id: 'B', text: '有空就切号投几票，尽力而为', weights: { FAN: 2 } },
      { id: 'C', text: '认为打榜是形式主义，从不参与', weights: { YING2: 2 } },
      { id: 'D', text: '为了偶像能和别家撕三天三夜，战斗到凌晨三点', weights: { FAN: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_ent_005',
    type: 'single',
    text: '看完一部晦涩的文艺片后，你的第一反应是？',
    options: [
      { id: 'A', text: '上豆瓣写长评，给五星或一星，痛骂导演懂个屁电影', weights: { YING2: 5 } },
      { id: 'B', text: '其实没太看懂，但还是要发朋友圈说镜头语言很妙', weights: { YING2: 4 } },
      { id: 'C', text: '在影院里睡着，后悔买了票', weights: { ZONG: 2 } },
      { id: 'D', text: '立刻推荐给朋友，说这是年度必看', weights: { JU: 2 } },
    ],
  },
  {
    id: 'Q_ent_006',
    type: 'single',
    text: '朋友问你最近上映的一部商业大片怎么样，你会怎么回答？',
    options: [
      { id: 'A', text: '从叙事结构批判到配乐选择，尽管有些部分确实没看懂', weights: { YING2: 5 } },
      { id: 'B', text: '爽就完事了，商业片不需要带脑子看', weights: { ZHIBO: 2 } },
      { id: 'C', text: '只关心主演的颜值和造型够不够出圈', weights: { MAN: 3 } },
      { id: 'D', text: '在豆瓣写了三千字影评，标题是《导演懂个屁电影》', weights: { YING2: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_ent_007',
    type: 'single',
    text: '深夜刷到一位女主播的直播间，你的行为是？',
    options: [
      { id: 'A', text: '冲动打赏成为榜一大哥，听到她说谢谢老公就觉得值了', weights: { ZHIBO: 5 } },
      { id: 'B', text: '偶尔送个小礼物，主打一个陪伴', weights: { ZHIBO: 2 } },
      { id: 'C', text: '只看白嫖，一分钱都不会花', weights: { KENG2: 2 } },
      { id: 'D', text: '在弹幕嘲讽打赏的人是韭菜', weights: { HEI: 3 } },
    ],
  },
  {
    id: 'Q_ent_008',
    type: 'single',
    text: '到了月底，你的钱包状态通常是？',
    options: [
      { id: 'A', text: '为了打赏女主播已经吃泡面，但听到感谢又充了一波', weights: { ZHIBO: 5 } },
      { id: 'B', text: '理性消费，直播支出在可控范围内', weights: { YING2: 2 } },
      { id: 'C', text: '从不给任何主播打赏，钱包很安全', weights: { FAN: 1 } },
      { id: 'D', text: '偷偷贷款也要当榜一，觉得这是真爱情', weights: { ZHIBO: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_ent_009',
    type: 'single',
    text: '你喜欢的团体里，成员粉丝正在撕番位，你的态度是？',
    options: [
      { id: 'A', text: '努力端水，每个成员都要夸到，团魂不能散', weights: { TUAN: 5 } },
      { id: 'B', text: '只支持自己担，其他人随便', weights: { FAN: 3 } },
      { id: 'C', text: '觉得撕番位是粉圈常态，看戏就好', weights: { ZONG: 2 } },
      { id: 'D', text: '盼着快点解散，各自独美', weights: { TUAN: 2 } },
    ],
  },
  {
    id: 'Q_ent_010',
    type: 'single',
    text: '你追的限定团即将解散，你的反应是？',
    options: [
      { id: 'A', text: '一边哭一边说解散快乐，每个人都要前程似锦', weights: { TUAN: 5 } },
      { id: 'B', text: '终于解脱了，不用再看粉丝互撕', weights: { HEI: 2 } },
      { id: 'C', text: '只关心自己担未来的solo发展', weights: { FAN: 3 } },
      { id: 'D', text: '在超话发长文端水，每个成员的字数必须一样多', weights: { TUAN: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_ent_011',
    type: 'single',
    text: '对家明星突然上了高位热搜，你的第一反应是？',
    options: [
      { id: 'A', text: '职业黑出动，立刻造谣P鬼图三连', weights: { HEI: 5 } },
      { id: 'B', text: '点进去骂两句再走，心情瞬间舒畅', weights: { HEI: 3 } },
      { id: 'C', text: '无视，专注自家', weights: { FAN: 3 } },
      { id: 'D', text: '虽然嘴里喊着讨厌，但比粉丝还熟悉他的行程，这是深柜爱', weights: { HEI: 4 } },
    ],
  },
  {
    id: 'Q_ent_012',
    type: 'single',
    text: '以下哪种状态最符合你的追星日常？',
    options: [
      { id: 'A', text: '每天用小号巡逻广场，看到负面言论就截图存档准备反击', weights: { HEI: 5 } },
      { id: 'B', text: '单纯觉得某个明星不顺眼，路过骂一句', weights: { HEI: 2 } },
      { id: 'C', text: '不关注任何明星黑料，只接收正面信息', weights: { FAN: 2 } },
      { id: 'D', text: '建了十个小号专门P鬼图和编黑料，以此为乐', weights: { HEI: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_ent_013',
    type: 'single',
    text: '你平时追剧的习惯更接近哪一种？',
    options: [
      { id: 'A', text: '熬夜追完更新，烂尾就愤怒发帖，平时只看cut或倍速', weights: { KENG2: 5 } },
      { id: 'B', text: '按正常速度看，享受完整的剧情节奏', weights: { YING2: 3 } },
      { id: 'C', text: '等剧完结再看，避免被烂尾伤害', weights: { ZONG: 2 } },
      { id: 'D', text: '看几集就觉得拖沓，直接弃剧', weights: { JU: 2 } },
    ],
  },
  {
    id: 'Q_ent_014',
    type: 'single',
    text: '你追了两个月的剧突然烂尾了，你会？',
    options: [
      { id: 'A', text: '愤怒地倍速看完并去豆瓣打一星，发誓以后只看cut', weights: { KENG2: 5 } },
      { id: 'B', text: '默默弃剧，不再关注', weights: { ZONG: 2 } },
      { id: 'C', text: '觉得还行，没那么差', weights: { TUAN: 2 } },
      { id: 'D', text: '为了骂烂尾在微博写了八百字小作文，虽然前几集也没看懂', weights: { KENG2: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_ent_015',
    type: 'single',
    text: '朋友评价你的审美和打扮像是从漫画里走出来的，你的反应是？',
    options: [
      { id: 'A', text: '开心接受，纸片人就是最高审美标准', weights: { MAN: 5 } },
      { id: 'B', text: '确实喜欢模仿动漫角色的穿搭和妆容', weights: { MAN: 3 } },
      { id: 'C', text: '觉得太夸张了，还是正常点好', weights: { DANCE: 2 } },
      { id: 'D', text: '认为朋友不懂二次元审美的高级感', weights: { MAN: 3 } },
    ],
  },
  {
    id: 'Q_ent_016',
    type: 'single',
    text: '有人说你的造型太精致、不接地气，你怎么想？',
    options: [
      { id: 'A', text: '这就是漫撕男/女的自我修养，美就够了', weights: { MAN: 5 } },
      { id: 'B', text: '稍微收敛一点，但基本风格不会变', weights: { MAN: 2 } },
      { id: 'C', text: '不在乎他人看法，但也不再刻意打扮', weights: { KENG2: 2 } },
      { id: 'D', text: '每天花三小时打理发型，因为现实里也要像从漫画里走出来', weights: { MAN: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_ent_017',
    type: 'single',
    text: '你打开综艺节目的主要原因是？',
    options: [
      { id: 'A', text: '专门用来下饭，知道有剧本也笑得很开心，最爱真人秀', weights: { ZONG: 5 } },
      { id: 'B', text: '偶尔看看，打发时间', weights: { ZONG: 2 } },
      { id: 'C', text: '觉得综艺很假，从不主动看', weights: { YING2: 3 } },
      { id: 'D', text: '只看有自己喜欢的明星常驻的综艺', weights: { FAN: 3 } },
    ],
  },
  {
    id: 'Q_ent_018',
    type: 'single',
    text: '朋友推荐了一部烧脑正剧，而你手头还有没看完的综艺，你会？',
    options: [
      { id: 'A', text: '还是先看综艺吧，剧本不剧本无所谓，能让我笑就行', weights: { ZONG: 5 } },
      { id: 'B', text: '两个都看，综艺当下饭菜，正剧当睡前故事', weights: { ZONG: 3 } },
      { id: 'C', text: '优先看完正剧，综艺可以延后', weights: { KENG2: 2 } },
      { id: 'D', text: '能背出所有综艺名场面和梗，笑点低到看回放也能笑出声', weights: { ZONG: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_ent_019',
    type: 'single',
    text: '你在社交媒体上看到一段热门的K-pop舞蹈视频，接下来的动作是？',
    options: [
      { id: 'A', text: '立刻找练舞室cover，跳到关节痛也停不下来', weights: { DANCE: 5 } },
      { id: 'B', text: '跟着视频学几个招牌动作，发 Stories 记录', weights: { DANCE: 3 } },
      { id: 'C', text: '只看不动，在心里默默点赞', weights: { ZONG: 2 } },
      { id: 'D', text: '觉得吵闹，快速划走', weights: { HEI: 2 } },
    ],
  },
  {
    id: 'Q_ent_020',
    type: 'single',
    text: '周末有半天空闲时间，你更倾向于怎么度过？',
    options: [
      { id: 'A', text: '泡在练舞室翻跳K-pop，虽然膝盖积水但下次还敢', weights: { DANCE: 5 } },
      { id: 'B', text: '去健身房或户外运动，保持健康', weights: { MAN: 2 } },
      { id: 'C', text: '躺着刷手机追剧追综', weights: { KENG2: 3 } },
      { id: 'D', text: '为了cover一支舞可以通宵扒动作，发朋友圈必带练舞室定位', weights: { DANCE: 5 }, hidden: true },
    ],
  },
];
