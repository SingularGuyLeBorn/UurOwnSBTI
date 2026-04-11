import type { Question } from '@/types';

export const EXTRA_COVERAGE_QUESTIONS: Question[] = [
  {
    id: 'Q_extra_001',
    type: 'single',
    text: '遇到一个新功能，你的第一反应是？',
    options: [
      { id: 'A', text: '作为一名赛博原住民，JSON对象是我的信仰', weights: {"APIJ": 5} },      { id: 'B', text: '工作需要才会接触', weights: {"APIJ": 2} },      { id: 'C', text: '我不懂这些', weights: {} },      { id: 'D', text: '这听起来像黑客', weights: {} }
    ],
  },
  {
    id: 'Q_extra_002',
    type: 'single',
    text: '烧烤聚会你最在意什么？',
    options: [
      { id: 'A', text: '这就是我的日常，我emo了本了', weights: {"BABI": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"BABI": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {"YINY": 2} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_003',
    type: 'single',
    text: ' multitasking 时你更像？',
    options: [
      { id: 'A', text: '这就是我的日常，API接口本口', weights: {"BACH": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"BACH": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 API接口 很多年了，只是没人发现', weights: {"BACH": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_004',
    type: 'single',
    text: '被误会时你会？',
    options: [
      { id: 'A', text: '这就是我的日常，茶艺师本师', weights: {"BAIH": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"BAIH": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {"YINY": 2} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_005',
    type: 'single',
    text: '如果你的行为被做成表情包，最可能是哪种？',
    options: [
      { id: 'A', text: '这就是我的日常，自恋狂本狂', weights: {"BEIH": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"BEIH": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {"YINY": 2} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_006',
    type: 'single',
    text: '压力爆棚时你的崩溃方式是？',
    options: [
      { id: 'A', text: '这就是我的日常，愤青本青', weights: {"BENG": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"BENG": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 愤青 很多年了，只是没人发现', weights: {"BENG": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_007',
    type: 'single',
    text: '深夜刷到一条离谱帖子，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，道德圣人本人', weights: {"BUG2": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"BUG2": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_008',
    type: 'single',
    text: '你如何看待自己的记忆力？',
    options: [
      { id: 'A', text: '作为一名赛博原住民，Docker容器是我的信仰', weights: {"CACH": 5} },      { id: 'B', text: '工作需要才会接触', weights: {"CACH": 2} },      { id: 'C', text: '我不懂这些', weights: {} },      { id: 'D', text: '这听起来像黑客', weights: {} }
    ],
  },
  {
    id: 'Q_extra_009',
    type: 'single',
    text: '朋友突然失联三天，你的脑内剧场是？',
    options: [
      { id: 'A', text: '这就是我的日常，坑王本王', weights: {"CHAH": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"CHAH": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {"YINY": 2} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 坑王 很多年了，只是没人发现', weights: {"CHAH": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_010',
    type: 'single',
    text: '瓜吃到一半发现反转了，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，预言家本家', weights: {"CHIG": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"CHIG": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_011',
    type: 'single',
    text: '被人说「你变了」，你的第一反应？',
    options: [
      { id: 'A', text: '这就是我的日常，传谣机本机', weights: {"CHOU": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"CHOU": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_012',
    type: 'single',
    text: '如果人生是一款游戏，你最想加载什么 mod？',
    options: [
      { id: 'A', text: '这就是我的日常，麦麸精本精', weights: {"CHUAN": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"CHUAN": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 麦麸精 很多年了，只是没人发现', weights: {"CHUAN": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_013',
    type: 'single',
    text: 'AI 给了你你不想要的答案，你会？',
    options: [
      { id: 'A', text: '我的赛博分身就是豆包', weights: {"CLAUD": 5} },      { id: 'B', text: '偶尔用用', weights: {"CLAUD": 2} },      { id: 'C', text: '我不用 AI', weights: {} },      { id: 'D', text: '我对此有伦理担忧', weights: {} }
    ],
  },
  {
    id: 'Q_extra_014',
    type: 'single',
    text: '如果你的行为被做成表情包，最可能是哪种？',
    options: [
      { id: 'A', text: '这就是我的日常，Cache失效本效', weights: {"COOK": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"COOK": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_015',
    type: 'single',
    text: '深夜刷到一条离谱帖子，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，反PUA师本师', weights: {"DADE": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"DADE": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 反PUA师 很多年了，只是没人发现', weights: {"DADE": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_016',
    type: 'single',
    text: '朋友突然失联三天，你的脑内剧场是？',
    options: [
      { id: 'A', text: '这就是我的日常，浓人本人', weights: {"DANR": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"DANR": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_017',
    type: 'single',
    text: '被人说「你变了」，你的第一反应？',
    options: [
      { id: 'A', text: '这就是我的日常，社渴症本症', weights: {"DAREN": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"DAREN": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_018',
    type: 'single',
    text: '如果人生是一款游戏，你最想加载什么 mod？',
    options: [
      { id: 'A', text: '这就是我的日常，数据寄生虫本虫', weights: {"DIAN": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"DIAN": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 数据寄生虫 很多年了，只是没人发现', weights: {"DIAN": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_019',
    type: 'single',
    text: '如果你的行为被做成表情包，最可能是哪种？',
    options: [
      { id: 'A', text: '废话者就是我的人格底色', weights: {"DNA": 5} },      { id: 'B', text: '有时候，但不总是', weights: {"DNA": 2} },      { id: 'C', text: '那不是我，你认错了', weights: {} },      { id: 'D', text: '我对此无感', weights: {} }
    ],
  },
  {
    id: 'Q_extra_020',
    type: 'single',
    text: '深夜刷到一条离谱帖子，你会？',
    options: [
      { id: 'A', text: '作为一名赛博原住民，Git冲突是我的信仰', weights: {"DOCK": 5} },      { id: 'B', text: '工作需要才会接触', weights: {"DOCK": 2} },      { id: 'C', text: '我不懂这些', weights: {} },      { id: 'D', text: '这听起来像黑客', weights: {} }
    ],
  },
  {
    id: 'Q_extra_021',
    type: 'single',
    text: '朋友突然失联三天，你的脑内剧场是？',
    options: [
      { id: 'A', text: '植物大战僵尸里我最像豌豆射手', weights: {"DPENG": 5} },      { id: 'B', text: '偶尔喷喷', weights: {"DPENG": 2} },      { id: 'C', text: '我是和平主义者', weights: {} },      { id: 'D', text: '这是什么植物？', weights: {} },
      { id: 'E', text: '其实我已经 豌豆射手 很多年了，只是没人发现', weights: {"DPENG": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_022',
    type: 'single',
    text: '被人说「你变了」，你的第一反应？',
    options: [
      { id: 'A', text: '这就是我的日常，黑化版本版', weights: {"FANS": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"FANS": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_023',
    type: 'single',
    text: '看到不公新闻，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，警觉者本者', weights: {"FENN": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"FENN": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_024',
    type: 'single',
    text: '群里所有人都赞同一个观点，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，吃瓜者本者', weights: {"GANG": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"GANG": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 吃瓜者 很多年了，只是没人发现', weights: {"GANG": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_025',
    type: 'single',
    text: '社交场合你最想躲在哪里？',
    options: [
      { id: 'A', text: '这就是我的日常，史莱姆本姆', weights: {"GELI": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"GELI": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_026',
    type: 'single',
    text: '被要求同时做两件事，你会？',
    options: [
      { id: 'A', text: '我的赛博分身就是Perplexity', weights: {"GEMI": 5} },      { id: 'B', text: '偶尔用用', weights: {"GEMI": 2} },      { id: 'C', text: '我不用 AI', weights: {} },      { id: 'D', text: '我对此有伦理担忧', weights: {} }
    ],
  },
  {
    id: 'Q_extra_027',
    type: 'single',
    text: '约好的局临时不想去了，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，小丑本丑', weights: {"GEZI": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"GEZI": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 小丑 很多年了，只是没人发现', weights: {"GEZI": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_028',
    type: 'single',
    text: '如果人生是一款游戏，你最想加载什么 mod？',
    options: [
      { id: 'A', text: '作为一名赛博原住民，Root权限是我的信仰', weights: {"GITJ": 5} },      { id: 'B', text: '工作需要才会接触', weights: {"GITJ": 2} },      { id: 'C', text: '我不懂这些', weights: {} },      { id: 'D', text: '这听起来像黑客', weights: {} }
    ],
  },
  {
    id: 'Q_extra_029',
    type: 'single',
    text: '如果你的行为被做成表情包，最可能是哪种？',
    options: [
      { id: 'A', text: '这就是我的日常，白莲花本花', weights: {"HEIH": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"HEIH": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {"YINY": 2} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_030',
    type: 'single',
    text: '深夜刷到一条离谱帖子，你会？',
    options: [
      { id: 'A', text: '半瓶水就是我的人格底色', weights: {"HODL": 5} },      { id: 'B', text: '有时候，但不总是', weights: {"HODL": 2} },      { id: 'C', text: '那不是我，你认错了', weights: {} },      { id: 'D', text: '我对此无感', weights: {} },
      { id: 'E', text: '其实我已经 半瓶水 很多年了，只是没人发现', weights: {"HODL": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_031',
    type: 'single',
    text: '朋友突然失联三天，你的脑内剧场是？',
    options: [
      { id: 'A', text: '这就是我的日常，表演家本家', weights: {"HUIB": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"HUIB": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_032',
    type: 'single',
    text: '被人说「你变了」，你的第一反应？',
    options: [
      { id: 'A', text: '这就是我的日常，拖延癌本癌', weights: {"JIEP": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"JIEP": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_033',
    type: 'single',
    text: '出门后总觉得门没锁，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，怨灵本灵', weights: {"JING": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"JING": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 怨灵 很多年了，只是没人发现', weights: {"JING": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_034',
    type: 'single',
    text: '如果人生是一款游戏，你最想加载什么 mod？',
    options: [
      { id: 'A', text: '错过焦虑者就是我的人格底色', weights: {"JPG": 5} },      { id: 'B', text: '有时候，但不总是', weights: {"JPG": 2} },      { id: 'C', text: '那不是我，你认错了', weights: {} },      { id: 'D', text: '我对此无感', weights: {} }
    ],
  },
  {
    id: 'Q_extra_035',
    type: 'single',
    text: '整理信息时你的偏好是？',
    options: [
      { id: 'A', text: '作为一名赛博原住民，SQL注入是我的信仰', weights: {"JSON": 5} },      { id: 'B', text: '工作需要才会接触', weights: {"JSON": 2} },      { id: 'C', text: '我不懂这些', weights: {} },      { id: 'D', text: '这听起来像黑客', weights: {} }
    ],
  },
  {
    id: 'Q_extra_036',
    type: 'single',
    text: '如果你的行为被做成表情包，最可能是哪种？',
    options: [
      { id: 'A', text: '这就是我的日常，泰裤辣本辣', weights: {"JUEJ": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"JUEJ": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 泰裤辣 很多年了，只是没人发现', weights: {"JUEJ": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_037',
    type: 'single',
    text: '被人翻出黑历史，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，鸽子精本精', weights: {"KAOG": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"KAOG": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_038',
    type: 'single',
    text: '深夜刷到一条离谱帖子，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，猫奴本奴', weights: {"KENG": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"KENG": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_039',
    type: 'single',
    text: '线上骂战中你的角色是？',
    options: [
      { id: 'A', text: '这就是我的日常，卖惨王本王', weights: {"KEYB": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"KEYB": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 卖惨王 很多年了，只是没人发现', weights: {"KEYB": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_040',
    type: 'single',
    text: '周四晚上你的朋友圈内容是？',
    options: [
      { id: 'A', text: '宿命论就是我的人格底色', weights: {"KFC": 5} },      { id: 'B', text: '有时候，但不总是', weights: {"KFC": 2} },      { id: 'C', text: '那不是我，你认错了', weights: {} },      { id: 'D', text: '我对此无感', weights: {} }
    ],
  },
  {
    id: 'Q_extra_041',
    type: 'single',
    text: '朋友突然失联三天，你的脑内剧场是？',
    options: [
      { id: 'A', text: '这就是我的日常，铁公鸡本鸡', weights: {"LAI": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"LAI": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_042',
    type: 'single',
    text: '吵架后你的处理方式是？',
    options: [
      { id: 'A', text: '这就是我的日常，毁灭者本者', weights: {"LENGL": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"LENGL": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 毁灭者 很多年了，只是没人发现', weights: {"LENGL": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_043',
    type: 'single',
    text: '两方吵得不可开交，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，杠精本精', weights: {"LIKE": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"LIKE": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_044',
    type: 'single',
    text: '被人说「你变了」，你的第一反应？',
    options: [
      { id: 'A', text: '这就是我的日常，炫狗本狗', weights: {"MAIM": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"MAIM": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_045',
    type: 'single',
    text: '如果人生是一款游戏，你最想加载什么 mod？',
    options: [
      { id: 'A', text: '这就是我的日常，月光族本族', weights: {"MAIP": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"MAIP": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 月光族 很多年了，只是没人发现', weights: {"MAIP": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_046',
    type: 'single',
    text: '周一早上的精神状态像？',
    options: [
      { id: 'A', text: '这就是我的日常，淡人本人', weights: {"MALO": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"MALO": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_047',
    type: 'single',
    text: '如果你的行为被做成表情包，最可能是哪种？',
    options: [
      { id: 'A', text: '这就是我的日常，哥布林本林', weights: {"NONG": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"NONG": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_048',
    type: 'single',
    text: '遇到不会的问题，你会？',
    options: [
      { id: 'A', text: '我的赛博分身就是Grok', weights: {"OPEN": 5} },      { id: 'B', text: '偶尔用用', weights: {"OPEN": 2} },      { id: 'C', text: '我不用 AI', weights: {} },      { id: 'D', text: '我对此有伦理担忧', weights: {} },
      { id: 'E', text: '其实我已经 Grok 很多年了，只是没人发现', weights: {"OPEN": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_049',
    type: 'single',
    text: '深夜刷到一条离谱帖子，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，外E内I本I', weights: {"PING": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"PING": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_050',
    type: 'single',
    text: '朋友突然失联三天，你的脑内剧场是？',
    options: [
      { id: 'A', text: '这就是我的日常，键盘侠本侠', weights: {"POFF": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"POFF": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_051',
    type: 'single',
    text: '遇到权限不够的情况，你会？',
    options: [
      { id: 'A', text: '作为一名赛博原住民，二舅治愈是我的信仰', weights: {"ROOT": 5} },      { id: 'B', text: '工作需要才会接触', weights: {"ROOT": 2} },      { id: 'C', text: '我不懂这些', weights: {} },      { id: 'D', text: '这听起来像黑客', weights: {} },
      { id: 'E', text: '其实我已经 二舅治愈 很多年了，只是没人发现', weights: {"ROOT": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_052',
    type: 'single',
    text: '被人说「你变了」，你的第一反应？',
    options: [
      { id: 'A', text: '这就是我的日常，平头哥本哥', weights: {"SAIBO": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"SAIBO": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_053',
    type: 'single',
    text: '如果人生是一款游戏，你最想加载什么 mod？',
    options: [
      { id: 'A', text: '植物大战僵尸里我最像急躁者', weights: {"SANXIAN": 5} },      { id: 'B', text: '偶尔喷喷', weights: {"SANXIAN": 2} },      { id: 'C', text: '我是和平主义者', weights: {} },      { id: 'D', text: '这是什么植物？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_054',
    type: 'single',
    text: '如果你的行为被做成表情包，最可能是哪种？',
    options: [
      { id: 'A', text: '爱咋咋地就是我的人格底色', weights: {"SEXY": 5} },      { id: 'B', text: '有时候，但不总是', weights: {"SEXY": 2} },      { id: 'C', text: '那不是我，你认错了', weights: {} },      { id: 'D', text: '我对此无感', weights: {} },
      { id: 'E', text: '其实我已经 爱咋咋地 很多年了，只是没人发现', weights: {"SEXY": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_055',
    type: 'single',
    text: '深夜刷到一条离谱帖子，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，钝角本角', weights: {"SHEK": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"SHEK": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_056',
    type: 'single',
    text: '朋友突然失联三天，你的脑内剧场是？',
    options: [
      { id: 'A', text: '这就是我的日常，咸鱼干本干', weights: {"SHENG": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"SHENG": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_057',
    type: 'single',
    text: '被人说「你变了」，你的第一反应？',
    options: [
      { id: 'A', text: '这就是我的日常，电子幽灵本灵', weights: {"SHIL": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"SHIL": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 电子幽灵 很多年了，只是没人发现', weights: {"SHIL": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_058',
    type: 'single',
    text: '如果人生是一款游戏，你最想加载什么 mod？',
    options: [
      { id: 'A', text: '植物大战僵尸里我最像三线射手', weights: {"SHUANG": 5} },      { id: 'B', text: '偶尔喷喷', weights: {"SHUANG": 2} },      { id: 'C', text: '我是和平主义者', weights: {} },      { id: 'D', text: '这是什么植物？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_059',
    type: 'single',
    text: '看到评论区一边倒，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，理中客本客', weights: {"SHUI": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"SHUI": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_060',
    type: 'single',
    text: '如果你的行为被做成表情包，最可能是哪种？',
    options: [
      { id: 'A', text: '这就是我的日常，赛博该溜子本子', weights: {"SHUJU": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"SHUJU": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 赛博该溜子 很多年了，只是没人发现', weights: {"SHUJU": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_061',
    type: 'single',
    text: '深夜刷到一条离谱帖子，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，吗喽本喽', weights: {"SHUS": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"SHUS": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_062',
    type: 'single',
    text: '做梦的内容通常像？',
    options: [
      { id: 'A', text: '我的赛博分身就是小喷菇', weights: {"SORA": 5} },      { id: 'B', text: '偶尔用用', weights: {"SORA": 2} },      { id: 'C', text: '我不用 AI', weights: {} },      { id: 'D', text: '我对此有伦理担忧', weights: {} }
    ],
  },
  {
    id: 'Q_extra_063',
    type: 'single',
    text: '朋友突然失联三天，你的脑内剧场是？',
    options: [
      { id: 'A', text: '作为一名赛博原住民，VPN翻墙是我的信仰', weights: {"SQLJ": 5} },      { id: 'B', text: '工作需要才会接触', weights: {"SQLJ": 2} },      { id: 'C', text: '我不懂这些', weights: {} },      { id: 'D', text: '这听起来像黑客', weights: {} },
      { id: 'E', text: '其实我已经 VPN翻墙 很多年了，只是没人发现', weights: {"SQLJ": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_064',
    type: 'single',
    text: '被人说「你变了」，你的第一反应？',
    options: [
      { id: 'A', text: '这就是我的日常，尊嘟假嘟本嘟', weights: {"TAIK": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"TAIK": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_065',
    type: 'single',
    text: '如果人生是一款游戏，你最想加载什么 mod？',
    options: [
      { id: 'A', text: '这就是我的日常，回避怪本怪', weights: {"TAOH": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"TAOH": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_066',
    type: 'single',
    text: '如果你的行为被做成表情包，最可能是哪种？',
    options: [
      { id: 'A', text: '这就是我的日常，洁癖精本精', weights: {"TUNJI": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"TUNJI": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 洁癖精 很多年了，只是没人发现', weights: {"TUNJI": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_067',
    type: 'single',
    text: '深夜刷到一条离谱帖子，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，选择瘫本瘫', weights: {"TUOY": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"TUOY": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_068',
    type: 'single',
    text: '访问不了某个网站，你会？',
    options: [
      { id: 'A', text: '作为一名赛博原住民，Cookie跟踪是我的信仰', weights: {"VPNJ": 5} },      { id: 'B', text: '工作需要才会接触', weights: {"VPNJ": 2} },      { id: 'C', text: '我不懂这些', weights: {} },      { id: 'D', text: '这听起来像黑客', weights: {} }
    ],
  },
  {
    id: 'Q_extra_069',
    type: 'single',
    text: '朋友突然失联三天，你的脑内剧场是？',
    options: [
      { id: 'A', text: '这就是我的日常，八爪鱼本鱼', weights: {"WAIF": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"WAIF": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 八爪鱼 很多年了，只是没人发现', weights: {"WAIF": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_070',
    type: 'single',
    text: '遇到不爽的事，你的反击方式是？',
    options: [
      { id: 'A', text: '植物大战僵尸里我最像双发射手', weights: {"WANDOU": 5} },      { id: 'B', text: '偶尔喷喷', weights: {"WANDOU": 2} },      { id: 'C', text: '我是和平主义者', weights: {} },      { id: 'D', text: '这是什么植物？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_071',
    type: 'single',
    text: '被人说「你变了」，你的第一反应？',
    options: [
      { id: 'A', text: '这就是我的日常，大冤种本种', weights: {"WOYU": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"WOYU": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_072',
    type: 'single',
    text: '如果人生是一款游戏，你最想加载什么 mod？',
    options: [
      { id: 'A', text: '这就是我的日常，破防者本者', weights: {"XIAO": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"XIAO": 2, "RAND": 1} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 破防者 很多年了，只是没人发现', weights: {"XIAO": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_073',
    type: 'single',
    text: '如果你的行为被做成表情包，最可能是哪种？',
    options: [
      { id: 'A', text: '这就是我的日常，假大户本户', weights: {"XIAOQI": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"XIAOQI": 2, "RAND": 1} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_074',
    type: 'single',
    text: '深夜刷到一条离谱帖子，你会？',
    options: [
      { id: 'A', text: '植物大战僵尸里我最像大喷菇', weights: {"XPENG": 5} },      { id: 'B', text: '偶尔喷喷', weights: {"XPENG": 2, "RAND": 1} },      { id: 'C', text: '我是和平主义者', weights: {} },      { id: 'D', text: '这是什么植物？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_075',
    type: 'single',
    text: '朋友突然失联三天，你的脑内剧场是？',
    options: [
      { id: 'A', text: '这就是我的日常，仇富者本者', weights: {"XUAN": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"XUAN": 2, "RAND": 1} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 仇富者 很多年了，只是没人发现', weights: {"XUAN": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_076',
    type: 'single',
    text: '被人说「你变了」，你的第一反应？',
    options: [
      { id: 'A', text: '这就是我的日常，讨好精本精', weights: {"XUANZ": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"XUANZ": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_077',
    type: 'single',
    text: '如果人生是一款游戏，你最想加载什么 mod？',
    options: [
      { id: 'A', text: '这就是我的日常，绝绝子本子', weights: {"YITP": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"YITP": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_078',
    type: 'single',
    text: '被人误解且没机会解释，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，水军本军', weights: {"YUAN": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"YUAN": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 水军 很多年了，只是没人发现', weights: {"YUAN": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_079',
    type: 'single',
    text: '如果你的行为被做成表情包，最可能是哪种？',
    options: [
      { id: 'A', text: '这就是我的日常，囤积狂本狂', weights: {"YUEG": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"YUEG": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_080',
    type: 'single',
    text: '预感某件事要发生，结果成真了，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，考古学家本家', weights: {"YUYA": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"YUYA": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_081',
    type: 'single',
    text: '深夜刷到一条离谱帖子，你会？',
    options: [
      { id: 'A', text: '这就是我的日常，控制狂本狂', weights: {"ZIL": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"ZIL": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} },
      { id: 'E', text: '其实我已经 控制狂 很多年了，只是没人发现', weights: {"ZIL": 5}, hidden: true },
    ],
  },
  {
    id: 'Q_extra_082',
    type: 'single',
    text: '朋友突然失联三天，你的脑内剧场是？',
    options: [
      { id: 'A', text: '这就是我的日常，芭比Q本Q', weights: {"ZUND": 5} },      { id: 'B', text: '偶尔吧，看心情', weights: {"ZUND": 2} },      { id: 'C', text: '完全相反，我不承认', weights: {} },      { id: 'D', text: '这是什么新型网络用语？', weights: {} }
    ],
  },
  {
    id: 'Q_extra_multi_001',
    type: 'multi',
    text: '以下哪些网络身份你自认沾边？（多选）',
    options: [
      { id: 'A', text: '键盘战神（KEYB）', weights: { KEYB: 3 } },
      { id: 'B', text: '吃瓜猹（CHIG）', weights: { CHIG: 3 } },
      { id: 'C', text: '鸽子精（GEZI）', weights: { GEZI: 3 } },
      { id: 'D', text: '小丑（XIAO）', weights: { XIAO: 3 } },
      { id: 'E', text: '考古学家（KAOG）', weights: { KAOG: 3 } },
      { id: 'F', text: '水军（SHUI）', weights: { SHUI: 3 } },
    ],
  },
  {
    id: 'Q_extra_multi_002',
    type: 'multi',
    text: '你觉得自己身上有哪些赛博特征？（多选）',
    options: [
      { id: 'A', text: 'API 接口型社交', weights: { APIJ: 3 } },
      { id: 'B', text: 'JSON 格式思维', weights: { JSON: 3 } },
      { id: 'C', text: 'SQL 式记忆检索', weights: { SQLJ: 3 } },
      { id: 'D', text: 'VPN 式情感翻墙', weights: { VPNJ: 3 } },
      { id: 'E', text: 'Git 式关系版本控制', weights: { GITJ: 3 } },
      { id: 'F', text: 'Root 级控制欲', weights: { ROOT: 3 } },
    ],
  },
];
