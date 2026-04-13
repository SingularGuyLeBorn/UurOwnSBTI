import type { Question } from '@/types';

export const ABSURD_QUESTIONS: Question[] = [
  {
    id: 'Q_absurd_001',
    type: 'single',
    text: '两个你都不喜欢的博主互撕了，你的第一反应是？',
    options: [
      { id: 'A', text: '立刻打开备忘录准备逐条反驳', weights: { MO: 4 } },
      { id: 'B', text: '两个一起骂，狗咬狗我坐庄', weights: { HITER: 4, CHAO: 3, TROLL: 2 } },
      { id: 'C', text: '录屏等反转，然后两边打脸', weights: { LEI2: 4, CHAO: 3, MO: 2 } },
      { id: 'D', text: '发给朋友一起乐，顺便一起骂', weights: { LEI2: 3, TROLL: 3 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_002',
    type: 'single',
    text: '半夜三点刷到一条让你血压飙升的帖子，你会？',
    options: [
      { id: 'A', text: '立刻打开APP继续战斗', weights: { MO: 4 } },
      { id: 'B', text: '写三千字长文分析对方的逻辑漏洞', weights: { MO: 3 } },
      { id: 'C', text: '把对方全家问候一遍再睡觉', weights: { BAOZ: 4, HITER: 3, FENN: 2 } },
      { id: 'D', text: '用小号加入战局煽风点火', weights: { MO: 4, TROLL: 3, HEI2: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_003',
    type: 'single',
    text: '有人在网上公开质疑你的品味，你会？',
    options: [
      { id: 'A', text: '把他的主页翻到底，找黑点反击', weights: { MO: 4 } },
      { id: 'B', text: '你算什么东西也配质疑我', weights: { HITER: 4, BAOZ: 3, VIP: 2 } },
      { id: 'C', text: '把他的丑照扒出来让大家评评理', weights: { MO: 4, HITER: 3, TROLL: 2 } },
      { id: 'D', text: '用小号去评论区假装路人维护自己', weights: { JING2: 4 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_004',
    type: 'single',
    text: '打游戏时被队友骂了，你的应对方式是？',
    options: [
      { id: 'A', text: '开麦骂到他祖宗十八代', weights: { BAOZ: 4, HITER: 3, FENN: 2 } },
      { id: 'B', text: '退游前留下一句我已黑化，江湖再见', weights: { HEI2: 4 } },
      { id: 'C', text: '把ID改成心碎のXX然后挂机', weights: { HEI2: 4 } },
      { id: 'D', text: '其实我已经哭了，但我不能输', weights: { HEI2: 5 }, hidden: true }
    ],
  },
  {
    id: 'Q_absurd_005',
    type: 'single',
    text: '洗完澡发现地漏又堵了，你的第一反应是？',
    options: [
      { id: 'A', text: '立刻下单生姜洗发水、黑芝麻丸、育发液全套', weights: { TUO: 4 } },
      { id: 'B', text: '对着镜子拍头顶发缝，研究植发价格', weights: { TUO: 4 } },
      { id: 'C', text: '把地漏里的头发拍照发朋友圈：我的青春', weights: { EMO: 4, WEMO: 3, TUO: 2 } },
      { id: 'D', text: '剃光头，从根源上解决脱发焦虑', weights: { HITER: 4, BAOZ: 3, XU: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_006',
    type: 'single',
    text: '理发师说你发际线后移了，你会？',
    options: [
      { id: 'A', text: '当场在植发APP上预约面诊', weights: { TUO: 5 } },
      { id: 'B', text: '当场摘下假发：我早就秃了，满意了吗', weights: { HITER: 4, TROLL: 3, CHAO: 2 } },
      { id: 'C', text: '冷笑：审美？你先审审自己的技术', weights: { HITER: 4, BAOZ: 3, CHAO: 2 } },
      { id: 'D', text: '给理发师差评，说他不懂审美', weights: { MO: 3 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_007',
    type: 'single',
    text: '深夜三点，你突然坐起来，因为想到白天对线时没发挥好，这时你会？',
    options: [
      { id: 'A', text: '立刻打开手机把对方从黑名单放出来继续吵', weights: { MO: 5 } },
      { id: 'B', text: '在备忘录里写十万字复盘', weights: { MO: 3 } },
      { id: 'C', text: '用小号给对方发小作文：你白天那句有问题', weights: { MO: 4, HITER: 3, BAOZ: 2 } },
      { id: 'D', text: '在床上懊悔到扇自己耳光', weights: { EMO: 4, WONANG: 3, WEMO: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_008',
    type: 'single',
    text: '一场网络骂战上了热门，作为不明真相的群众，你的标准姿势是？',
    options: [
      { id: 'A', text: '两边都骂，显得我比较清醒', weights: { CHU: 4 } },
      { id: 'B', text: '先截图，等反转了再出来嘲讽', weights: { LEI2: 4 } },
      { id: 'C', text: '其实根本没看内容，但跟风评论了一句', weights: { CHU: 5 } },
      { id: 'D', text: '两边一起骂，傻X不分阵营', weights: { CHAO: 4, HITER: 3, TROLL: 2 }, hidden: true }
    ],
  },
  {
    id: 'Q_absurd_009',
    type: 'single',
    text: '你发现自己被拉进了一个互撕群，你会？',
    options: [
      { id: 'A', text: '等反转，反正先吃瓜', weights: { CHU: 4 } },
      { id: 'B', text: '潜水窥屏，收集素材发给别人乐', weights: { LEI2: 3 } },
      { id: 'C', text: '在群里发：你们继续，我卖爆米花', weights: { TROLL: 4, LEI2: 3, CHAO: 2 } },
      { id: 'D', text: '匿名举报该群涉嫌网络暴力', weights: { DAODE: 4, TROLL: 3, JING2: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_010',
    type: 'single',
    text: '有人把你的发言截图断章取义地挂了，你会？',
    options: [
      { id: 'A', text: '写长文逐条澄清，并@对方对线', weights: { MO: 4 } },
      { id: 'B', text: '把对方也挂出来，互相伤害', weights: { MO: 4, HITER: 3, BAOZ: 2 } },
      { id: 'C', text: '私信警告：删帖，不然法院见', weights: { HITER: 4, BAOZ: 3, TROLL: 2 } },
      { id: 'D', text: '直接举报，网络不是法外之地', weights: { DAODE: 4 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_011',
    type: 'single',
    text: '看到有人做了你很想做但不敢做的缺德事，你会？',
    options: [
      { id: 'A', text: '心里偷偷记下，下次自己也试试', weights: { CHU: 3 } },
      { id: 'B', text: '鼓掌叫好，然后举报他', weights: { TROLL: 4, DAODE: 3, CHAO: 2 } },
      { id: 'C', text: '内心嫉妒得要死，为什么我不敢', weights: { EMO: 4, WONANG: 3, WEMO: 2 } },
      { id: 'D', text: '自己也骂，但偷偷点赞', weights: { DAODE: 4 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_012',
    type: 'single',
    text: '你在网上发了一段黑历史，被人考古了，第一反应是？',
    options: [
      { id: 'A', text: '删帖并装死', weights: { HEI2: 3 } },
      { id: 'B', text: '自嘲并转发，比他们还狠', weights: { CHU: 4 } },
      { id: 'C', text: '把考古的人也扒个底朝天，互相伤害', weights: { MO: 4, HITER: 3, BAOZ: 2 } },
      { id: 'D', text: '说真的，那时候的我已经死了', weights: { HEI2: 4 }, hidden: true }
    ],
  },
  {
    id: 'Q_absurd_013',
    type: 'single',
    text: '你的社交平台小号被发现了，你会？',
    options: [
      { id: 'A', text: '立刻销号，死不承认', weights: { JING2: 4 } },
      { id: 'B', text: '把大号也改成发疯人设', weights: { CHU: 3 } },
      { id: 'C', text: '把发现小号的人拉黑，死不承认', weights: { HITER: 4, JING2: 3, HEI2: 2 } },
      { id: 'D', text: '反咬一口：你偷窥我小号，变态', weights: { HITER: 4, BAOZ: 3, CPU: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_014',
    type: 'single',
    text: '如果可以用一种精神状态形容你现在的微信小号，它是？',
    options: [
      { id: 'A', text: '岁月静好，大号疯狂', weights: { JING2: 4 } },
      { id: 'B', text: '自言自语，自己陪自己演戏', weights: { JING2: 4 } },
      { id: 'C', text: '小号是我最后的精神病院', weights: { EMO: 4, WEMO: 3, HEI2: 2 } },
      { id: 'D', text: '我一个人就是一个饭局', weights: { JING2: 5 }, hidden: true }
    ],
  },
  {
    id: 'Q_absurd_015',
    type: 'single',
    text: '你发了一段精心编辑的朋友圈，结果零赞，你会？',
    options: [
      { id: 'A', text: '立刻设为私密，假装没发过', weights: { PIN: 4 } },
      { id: 'B', text: '在评论区自问自答刷热度', weights: { BIAO: 4, TROLL: 3, XUAN: 2 } },
      { id: 'C', text: '发朋友圈骂算法：限流限你妈呢', weights: { HITER: 4, BAOZ: 3, FENN: 2 } },
      { id: 'D', text: '用小号给自己点赞', weights: { JING2: 3 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_016',
    type: 'single',
    text: '周末和闺蜜打卡网红店的下午茶，轮流拍照修图，这最符合你的状态是？',
    options: [
      { id: 'A', text: '必须精修两小时，九宫格配长文案', weights: { PIN: 4 } },
      { id: 'B', text: '拍照五分钟，修图两小时', weights: { PIN: 4 } },
      { id: 'C', text: '下午茶是什么？我只喝滤镜', weights: { BIAO: 4, JING2: 3, XUAN: 2 } },
      { id: 'D', text: '把闺蜜P掉，假装我一个人去的', weights: { BIAO: 4, JING2: 3, HEI2: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_017',
    type: 'single',
    text: '你觉得自己最像哪种互联网生物？',
    options: [
      { id: 'A', text: '在评论区四处游荡的幽灵', weights: { XU: 4 } },
      { id: 'B', text: '哪里有热闹就往哪里钻的猹', weights: { LEI2: 4 } },
      { id: 'C', text: '时不时出来发疯的猴子', weights: { CHU: 4 } },
      { id: 'D', text: '我是互联网上的丧尸，到处咬人', weights: { TROLL: 4, MO: 3, HEI2: 2 }, hidden: true }
    ],
  },
  {
    id: 'Q_absurd_018',
    type: 'single',
    text: '如果人生是一场大型在线游戏，你现在处于什么阶段？',
    options: [
      { id: 'A', text: '新手村挂机，不想升级', weights: { XU: 4 } },
      { id: 'B', text: '在公屏跟人对骂，任务早忘了', weights: { MO: 4 } },
      { id: 'C', text: '在公屏打字：这游戏策划是傻X', weights: { HITER: 4, BAOZ: 3, CHAO: 2 } },
      { id: 'D', text: '把账号卖了换顿火锅钱', weights: { XIAN: 4, IMFW: 3, CHU: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_019',
    type: 'single',
    text: '你如何看待“存在主义危机”这件事？',
    options: [
      { id: 'A', text: '每周发作一次，已成常态', weights: { XU: 4 } },
      { id: 'B', text: '存在本身就是最大的荒诞', weights: { CHU: 3 } },
      { id: 'C', text: '存在主义危机？我每天都在发作', weights: { EMO: 4, WEMO: 3, XU: 2 } },
      { id: 'D', text: '关我屁事，我要点外卖', weights: { HITER: 4, CHAO: 3, XIAN: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_absurd_020',
    type: 'single',
    text: '如果明天是世界末日，你今天晚上会做什么？',
    options: [
      { id: 'A', text: '把没骂完的人都骂一遍', weights: { MO: 4 } },
      { id: 'B', text: '发朋友圈配文“终于解脱了”', weights: { HEI2: 3 } },
      { id: 'C', text: '把老板和客户全骂一遍然后躺平', weights: { BAOZ: 4, HITER: 3, FENN: 2 } },
      { id: 'D', text: '其实已经期待很久了', weights: { XU: 5 }, hidden: true }
    ],
  },
];
