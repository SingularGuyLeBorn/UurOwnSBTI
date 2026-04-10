import type { Question } from '@/types';

export const ACADEMIA_QUESTIONS: Question[] = [
  {
    id: 'Q_academia_001',
    type: 'single',
    text: '考试前一天，你打开高数课本复习，发现第一章的内容就像天书一样。你会？',
    options: [
      { text: '立刻合上书本，打开计算器App祈祷明天全是选择题', weights: { SHUX: 4 } },
      { text: '硬着头皮看两行，然后打开手机刷短视频', weights: { SHUX: 3 } },
      { text: '连夜找学霸朋友恶补，争取不挂科', weights: { SHUX: 2, WEN: 1 } },
      { text: '淡定地整理公式，相信自己能推导出来', weights: { LI: 4 } }
    ]
  },
  {
    id: 'Q_academia_002',
    type: 'single',
    text: '和朋友去菜市场买菜，老板随口说每斤便宜两块五，买三斤一共多少。你会？',
    options: [
      { text: '愣在原地，默默掏出手机计算器', weights: { SHUX: 4 } },
      { text: '假装听懂，直接扫码付款，反正差不了多少', weights: { SHUX: 3 } },
      { text: '脱口而出正确答案，并吐槽买菜根本不需要微积分', weights: { SHUX: 5 } },
      { text: '开始思考有没有更优惠的组合购买方式', weights: { JINGJ: 4 } }
    ]
  },
  {
    id: 'Q_academia_003',
    type: 'single',
    text: '深夜你写下一条朋友圈，表达自己对这个世界的某种忧虑与诗意。你最可能使用的文风是？',
    options: [
      { text: '引用鲁迅名句，抒发理想主义的迷茫', weights: { WEN: 4 } },
      { text: '写一段排比句，感叹就业形势与人生无常', weights: { WEN: 3, LIH: 2 } },
      { text: '摘抄《萌芽》杂志风格的青春疼痛文学', weights: { WEN: 3 } },
      { text: '用数据分析当前毕业生就业率，理性劝退', weights: { LI: 4 } },
      { text: '发一段文言文，配文背不下去了', weights: { WEN: 5 }, hidden: true }
    ]
  },
  {
    id: 'Q_academia_004',
    type: 'single',
    text: '期末考试周，你发现需要在一周内背完三本厚厚的专业书。你的第一反应是？',
    options: [
      { text: '泡杯咖啡，找一个安静的角落开始沉浸式背书', weights: { WEN: 4 } },
      { text: '先整理出时间线和思维导图，用感性联想记忆', weights: { WEN: 3 } },
      { text: '觉得背诵没有意义，开始幻想穿越回古代当诗人', weights: { LIH: 4 } },
      { text: '计算每本书的知识点密度，制定精确的复习计划', weights: { LI: 4 } }
    ]
  },
  {
    id: 'Q_academia_005',
    type: 'single',
    text: '实验室里，你的实验结果和理论预测完全相反。你会怎么处理？',
    options: [
      { text: '反复检查实验步骤和数据，怀疑是仪器出了问题', weights: { LI: 4 } },
      { text: '认为浪漫的世界不需要被实验束缚，重写报告', weights: { WEN: 2 } },
      { text: '直男式地直接汇报导师：数据错了，结论不成立', weights: { LI: 5 } },
      { text: '试图用统计学方法找出异常值并解释原因', weights: { LI: 3, JINGJ: 1 } }
    ]
  },
  {
    id: 'Q_academia_006',
    type: 'single',
    text: '情人节你准备给喜欢的人送礼物，却被吐槽毫无浪漫细胞。你的思维方式更像是？',
    options: [
      { text: '送一本《费曼物理学讲义》，觉得这是最高级的浪漫', weights: { LI: 4 } },
      { text: '上网查情人节礼物送什么的实验调查报告', weights: { LI: 3 } },
      { text: '写一封情书，引用莎士比亚十四行诗', weights: { WEN: 4 } },
      { text: '直接发红包，金额等于当地通货膨胀率倒数', weights: { JINGJ: 3 } },
      { text: '送一份自己写的实验报告，标题为《关于喜欢你的可行性分析》', weights: { LI: 5 }, hidden: true }
    ]
  },
  {
    id: 'Q_academia_007',
    type: 'single',
    text: '外教课上老师突然点名让你用英语自我介绍，你的第一反应是？',
    options: [
      { text: '大脑一片空白，脱口而出abandon', weights: { YING: 4 } },
      { text: '用翻译腔说我的名字是……我是一名学生', weights: { YING: 4 } },
      { text: '低下头假装在记笔记，希望老师看不见', weights: { YING: 3 } },
      { text: '自信开口，虽然语法错误百出但气势不输', weights: { YING: 2 } }
    ]
  },
  {
    id: 'Q_academia_008',
    type: 'single',
    text: '你翻开积灰的英语四级词汇书，扉页上写着去年立下的flag。此时你心里想的是？',
    options: [
      { text: '看到第一个单词abandon，觉得这是命运暗示', weights: { YING: 4 } },
      { text: '想起四六级考场的痛苦，产生轻微PTSD', weights: { YING: 4 } },
      { text: '拍照发朋友圈配文明年一定', weights: { WEN: 2 } },
      { text: '理性分析距离考试还有几天，制定每日背诵量', weights: { LI: 3 } }
    ]
  },
  {
    id: 'Q_academia_009',
    type: 'single',
    text: '看历史剧时，主角做了一个改变命运的决定。你的弹幕会发什么？',
    options: [
      { text: '如果当时他没这么做，历史是不是就改写了', weights: { LIH: 4 } },
      { text: '历史总是循环的，人类从不吸取教训', weights: { LIH: 3 } },
      { text: '后悔当年选了文科，现在看剧都在分析考点', weights: { LIH: 3, WEN: 1 } },
      { text: '开始幻想自己穿越回去能当军师', weights: { LIH: 4 } },
      { text: '发条弹幕：学历史不如学编程', weights: { LIH: 5 }, hidden: true }
    ]
  },
  {
    id: 'Q_academia_010',
    type: 'single',
    text: '和朋友聊到高考志愿，你说自己最常想的一句话是？',
    options: [
      { text: '如果当时没选这个专业，现在会不会不一样', weights: { LIH: 4 } },
      { text: '后悔学了文，毕业即失业的预言在我身上应验', weights: { LIH: 4 } },
      { text: '每个时代都有自己的机遇，活在当下最重要', weights: { ZHENGZ: 2 } },
      { text: '历史没有如果，但我可以复盘当时的决策模型', weights: { LI: 3 } }
    ]
  },
  {
    id: 'Q_academia_011',
    type: 'single',
    text: '朋友约你在商场的东南门见面，你拿着手机导航转了十五分钟还没找到。你会？',
    options: [
      { text: '完全分不清东南西北，只能问路人哪个方向是左', weights: { DILI: 4 } },
      { text: '死死盯着地图App，发现自己连图标朝向都没搞懂', weights: { DILI: 4 } },
      { text: '打电话给朋友描述周围的店铺招牌', weights: { DILI: 2, YING: 1 } },
      { text: '打开指南针，但发现根本不理解磁场方向', weights: { LI: 2 } }
    ]
  },
  {
    id: 'Q_academia_012',
    type: 'single',
    text: '出国旅行时，你需要给国内的朋友打电话，但搞不清楚时差。你的反应是？',
    options: [
      { text: '每次算时差都要在纸上画地球仪', weights: { DILI: 4 } },
      { text: '直接发消息你那边现在几点，放弃自己计算', weights: { DILI: 3 } },
      { text: '搞混了夏令时和冬令时，半夜把人吵醒', weights: { DILI: 4 } },
      { text: '用经济学思维思考：电话费在国际漫游时如何计价', weights: { JINGJ: 3 } },
      { text: '打开世界地图，但找不到对方城市在哪里', weights: { DILI: 5 }, hidden: true }
    ]
  },
  {
    id: 'Q_academia_013',
    type: 'single',
    text: '你在纪录片里看到特写镜头下的昆虫复眼，你的第一反应是？',
    options: [
      { text: '立刻起鸡皮疙瘩，想起学生物时做过的切片实验', weights: { SHENG2: 4 } },
      { text: '兴奋地讲解昆虫复眼的细胞结构', weights: { SHENG2: 4 } },
      { text: '感叹进化的神奇，顺便质疑一些养生伪科学', weights: { SHENG2: 3, LI: 1 } },
      { text: '截图发朋友圈，配文大自然的鬼斧神工', weights: { WEN: 2 } }
    ]
  },
  {
    id: 'Q_academia_014',
    type: 'single',
    text: '家里长辈转发了一条某种食物能杀死癌细胞的朋友圈。你会？',
    options: [
      { text: '本能地科普细胞凋亡机制和谣言的荒谬性', weights: { SHENG2: 4 } },
      { text: '虽然知道不科学，但为了不吵架选择沉默', weights: { SHENG2: 2 } },
      { text: '立刻转发辟谣链接，并附上一段进化论科普', weights: { SHENG2: 4 } },
      { text: '开始思考这条谣言背后的传播学和社会心理学机制', weights: { ZHENGZ: 2 } }
    ]
  },
  {
    id: 'Q_academia_015',
    type: 'single',
    text: '宿舍夜聊，话题突然转到最近的国际新闻。你的表现是？',
    options: [
      { text: '立刻坐起来，开始指点江山分析大国博弈', weights: { ZHENGZ: 4 } },
      { text: '用茶馆老大爷的口吻聊地缘政治', weights: { ZHENGZ: 4 } },
      { text: '引用某位政治经济学家的观点支持自己的立场', weights: { ZHENGZ: 3, JINGJ: 1 } },
      { text: '表示不感兴趣，只想早点睡觉', weights: { DILI: 1 } },
      { text: '聊到兴起时突然说这个号快没了，不说了', weights: { ZHENGZ: 5 }, hidden: true }
    ]
  },
  {
    id: 'Q_academia_016',
    type: 'single',
    text: '你在社交平台上发表了一条关于社会议题的长评论，结果收到了系统提示。你会？',
    options: [
      { text: '迅速截图保存，担心账号被封', weights: { ZHENGZ: 4 } },
      { text: '换个角度重新组织语言，继续输出观点', weights: { ZHENGZ: 3 } },
      { text: '私信朋友吐槽言论环境，转移阵地再战', weights: { ZHENGZ: 4 } },
      { text: '删掉评论，转而分享一首无关的歌曲', weights: { WEN: 2 } }
    ]
  },
  {
    id: 'Q_academia_017',
    type: 'single',
    text: '奶茶店推出第二杯半价活动，你站在柜台前的心理活动是？',
    options: [
      { text: '立刻计算单杯实际价格和边际成本', weights: { JINGJ: 4 } },
      { text: '思考这是不是商家在利用消费者的价格锚定效应', weights: { JINGJ: 4 } },
      { text: '觉得划算就买了，不多想', weights: { SHENG2: 1 } },
      { text: '打开手机计算器确认两杯均价，并考虑找人拼单', weights: { JINGJ: 3, SHUX: 1 } }
    ]
  },
  {
    id: 'Q_academia_018',
    type: 'single',
    text: '谈到自己的消费习惯，你最认同的描述是？',
    options: [
      { text: '每一笔支出都要记账，对通货膨胀非常敏感', weights: { JINGJ: 4 } },
      { text: '喝奶茶时会计算日均咖啡因子对财富自由的影响', weights: { JINGJ: 4 } },
      { text: '明知道自己是韭菜，但偶尔也要为自己割一刀', weights: { JINGJ: 3 } },
      { text: '认为钱是赚出来的不是省出来的，鄙视精打细算', weights: { LI: 2 } },
      { text: '看到理财产品收益率低于通胀率就焦虑得睡不着', weights: { JINGJ: 5 }, hidden: true }
    ]
  },
  {
    id: 'Q_academia_019',
    type: 'single',
    text: '遇到一件你觉得不太公平的小事，你的第一反应是？',
    options: [
      { text: '立刻在脑海里搜索相关法律条文，化身罗翔信徒', weights: { FALV: 4 } },
      { text: '设想如果自己是张三，能钻到什么空子', weights: { FALV: 4 } },
      { text: '觉得自己是法盲，只能忍气吞声', weights: { FALV: 2 } },
      { text: '用感性方式发长文控诉不公', weights: { WEN: 3 } }
    ]
  },
  {
    id: 'Q_academia_020',
    type: 'single',
    text: '刷到一条关于法律案件的短视频，你的弹幕会发什么？',
    options: [
      { text: '罗翔老师讲过这个！', weights: { FALV: 4 } },
      { text: '如果我是张三，这案子另有判法', weights: { FALV: 4 } },
      { text: '法条第XX条明确规定……然后开始背诵', weights: { FALV: 3 } },
      { text: '不care，直接滑走看下一个', weights: { YING: 1 } },
      { text: '这都不判？法律漏洞太大了，我来钻', weights: { FALV: 5 }, hidden: true }
    ]
  }
];
