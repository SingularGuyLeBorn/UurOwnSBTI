import type { SBTITypeCode, TestResult } from '@/types';
import { TYPE_LIBRARY } from '@/data/types';
import { SLOT_LIBRARY } from '@/data/slots';

/**
 * 从数组随机选择元素
 */
function randomPick<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * 连接词槽位
 */
const CONNECTORS = {
  opening: ['绝了', '卧槽', '他妈的', '神了', '服了', '离谱', '离谱他妈给离谱开门', '好家伙', '好家伙我直接好家伙', '绷不住了', '我裂开了', '笑死', '6', '典', '太对味了', '难绷'],
  transition: ['您这人', '说实话', '讲真', '不瞒您说', '坦白讲', '有一说一', '说句公道话', '不是我说您', '不是哥们', '咱就是说', '你懂的', '客观点说', '锐评一下'],
  warning: ['危险预警', '问题在于', '可怕的是', '最绝的是', '离谱的是', '更离谱的是', '最离谱的是', '小心点', '坏消息', '致命的是', '难绷的是', '最抽象的是'],
  advice: ['离谱建议', '个人建议', '说真的', '建议您', '给您个建议', '肺腑之言', '掏心窝子说', '锐评', '实话实说', '嘴一句', '冒犯一下', '开个麦']
};

/**
 * 场景化吐槽模板 - 扩展版
 */
const SCENARIO_TEMPLATES = {
  wechat: [
    '您的置顶是文件传输助手，聊天记录是您发给自己的链接您都没点开过',
    '您的收藏夹是马了等于看了的赛博墓地，关注列表是关注了就是学了的乱葬岗',
    '您的未发送小作文在草稿箱里排队等上市',
    '您的已读不回是行为艺术，已读乱回是高级艺术',
    '您的微信运动步数是0但您声称刚跑完马拉松',
    '您的表情包库存够您用到退休但您还在疯狂收藏',
    '您的微信昵称改了八百遍最后又改回了本名',
    '您的群聊免打扰设置得比您的闹钟还多'
  ],
  work: [
    '您的Excel表格是给老板看的，您的真实工作状态是Alt+Tab切到摸鱼',
    '您的"收到"是自动回复，您的内心是"去你妈的"',
    '您的加班是自愿的（被迫自愿），您的离职信写了三年还没发送',
    '您的KPI是老板的，您的工资是房东的，您的命是咖啡的',
    '您在会议上的点头是随机播放的',
    '您的周报是Ctrl+C Ctrl+V的艺术品，您的真实工作是Ctrl+S保存文档',
    '您的钉钉状态是"忙碌"但您正在刷淘宝',
    '您的年假余额是满的但您不敢休，因为您知道您的工作没人能接手'
  ],
  social: [
    '您的社交是触发式的，只有被@才会应答',
    '您的存在感像WiFi信号，隔墙就断，遇强则弱',
    '您的聚会模式是找个角落启动隐身然后提前离场',
    '您的朋友觉得您要么爱死他们要么想掐死他们，没有中间态',
    '您的友谊是靠您单方面点赞维持的',
    '您的社交软件签名是"已读不回"但您自己就是已读不回本人',
    '您的生日祝福是群发的，但您收到群发生日祝福会生气',
    '您的社交圈是同心圆，越往里人越少，最里面只有您自己'
  ],
  phone: [
    '您的相册是截图的坟场，截图后从未再看',
    '您的电池健康度是80%但您的心理健康度是20%',
    '您的APP使用时长第一是微信，但聊天对象是文件传输助手',
    '您的深夜搜索记录是您的真实人格，白天是您的表演人格',
    '您的手机桌面有五个文件夹但您永远找不到想要的APP',
    '您的通知栏有99+未读消息但您一个都不想点开',
    '您的手机壳换了十八个但您的微信头像三年没换',
    '您的抖音收藏夹是学习资料但您只用来刷猫狗视频'
  ],
  life: [
    '您的计划表是行为艺术，写满了但一个都没执行',
    '您的健身卡办了三年但您只去过两次，一次是办卡一次是转卡',
    '您的书架上有《如何高效学习》但您连这本书都没看完',
    '您的购物车是您的欲望博物馆，收藏了但永远不会买',
    '您的外卖订单历史是您的人生编年史，记录了您从穷到更穷的过程',
    '您的冰箱里有三年前买的酱料，您的梦想是三年前立的flag',
    '您的床是您最忠诚的朋友，每天陪伴您超过12小时',
    '您的闹钟设置了十个但您一个都听不到'
  ],
  emotion: [
    '您的情绪管理是薛定谔的猫，打开盒子之前不知道是死是活',
    '您的emo是定时的，每天晚上11点准时开始',
    '您的快乐是借来的，到期了就要还',
    '您的焦虑是常驻嘉宾，其他情绪都是客串',
    '您的眼泪是批发的，看广告都能哭',
    '您的愤怒是压缩包，积攒久了会爆炸',
    '您的开心是快闪店，出现一下马上消失',
    '您的平静是假象，底下是翻江倒海的焦虑'
  ]
};

/**
 * 职业建议槽位 - 扩展版
 */
const CAREER_SUGGESTIONS = [
  '去当键盘侠培训师（按被拉黑次数计费）',
  '去当窝囊废协会会长（但肯定不敢上任）',
  '去当复读机质检员（但肯定通不过面试）',
  '去当资本家精神分析师（但会被资本家PUA）',
  '去当保安（擅长存在感忽隐忽现）',
  '去当间谍（连您自己都不知道您是谁）',
  '去当外卖员（但估计等不及商家出餐）',
  '去当哲学家（但懒得写论文）',
  '去当睡眠体验师（但可能醒不过来）',
  '去当废话文学教授（但没人听得完）',
  '去当情绪垃圾桶（但您自己就是满的）',
  '去当拖延症研究员（但研究报告永远交不上）',
  '去当社恐交流会会长（但肯定不敢去开会）',
  '去当完美主义破坏者（专门搞砸别人的完美计划）',
  '去当深夜网抑云DJ（播放列表全是您的emo歌单）'
];

/**
 * 深度分析段落
 */
const DEEP_ANALYSIS_TEMPLATES = [
  '测完了，您就是个纯种{type}。关键词{keywords}就是您的赛博身份证。别挣扎了，建议直接把这几个字纹脑门上，方便别人提前避雷。',
  '数据显示您{type}纯度高达{percent}%。换句话说，您比绝大多数网友都更像{type}。这不算天赋，算是一种诅咒，建议认命。',
  '您的{type}属性已经藏不住了。{keywords}这些词不是形容您，是报备您。同类看了会沉默，异类看了会直接拉黑。',
  '从您选的那些答案来看，您{type}得太明显了。{keywords}这几个字就是您的人生标签，撕不掉的，建议直接躺平接受。',
  '说实话，您是我今天测过的最{type}的一个。{keywords}就是您的出厂设置，重装系统都没用，凑合着活吧。'
];

/**
 * 生活场景映射
 */
const LIFE_SCENARIOS = [
  '在工位上，您就是那只{type}。同事看您一眼就想辞职，老板看您一眼就想加薪（给别人）。',
  '在感情里，您是标准的{type}型伴侣。对象和您在一起，每天都在进行意志力极限挑战。',
  '聚会场上，您的{type}人格会在第10分钟自动触发。然后您要么开始发疯，要么原地消失，没有中间态。',
  '深夜两点，您的{type}浓度达到峰值。手机是您的精神麻醉剂，短视频是您的续命丹。',
  '您的微信聊天记录就是{type}行为艺术展，随便截一张图都能投稿互联网贵物博物馆。'
];

/**
 * 未来预测
 */
const FUTURE_PREDICTIONS = [
  '以您这{type}的劲儿，下周您就会因为一件小事破大防。放心，这是基操，坐下。',
  '五年后的您，会变成自己最讨厌的那种{type}老登。区别在于，那时候您已经麻木了，甚至有点享受。',
  '您这{type}属性决定了人生曲线：没有最低，只有更低。但好消息是，您早就习惯了，甚至还能发个朋友圈自嘲。',
  '根据推算，您的下一次大型社死将在30天内发生。届时您会深刻体会到什么叫{type}的宿命。',
  '等到您三十岁，{type}的特质会进化到2.0版本。到时候不是您适应社会，是社会在想办法躲着您。'
];

/**
 * 生成主吐槽文案 - 加长版
 */
export function generateRoast(
  typeCode: SBTITypeCode,
  confidence: number,
  hasContradiction: boolean,
  score?: number
): string {
  const type = TYPE_LIBRARY[typeCode];
  const slots = SLOT_LIBRARY[typeCode];
  
  if (!type || !slots) {
    return '系统出错，您这人连出错都这么特别。';
  }
  
  let roast = '';
  
  // === 第一部分：开场暴击 ===
  const opening = randomPick(slots.opening);
  const connector1 = randomPick(CONNECTORS.opening);
  roast += `${opening}，${connector1}。\n\n`;
  
  // === 第二部分：深度分析 ===
  const deepAnalysis = randomPick(DEEP_ANALYSIS_TEMPLATES)
    .replace(/{type}/g, type.name)
    .replace(/{keywords}/g, type.keywords.slice(0, 3).join('、'))
    .replace(/{score}/g, score?.toString() || '未知')
    .replace(/{percent}/g, Math.floor(Math.random() * 30 + 70).toString());
  roast += `${deepAnalysis}\n\n`;
  
  // === 第三部分：场景化吐槽 ===
  const transition = randomPick(CONNECTORS.transition);
  
  if (hasContradiction) {
    roast += `${transition}虽然测出来是${type.name}，但您刚才的答题像人格分裂。`;
    roast += `前一秒还${randomPick(['攻击性拉满', '热情似火', '混乱不堪'])}，`;
    roast += `下一秒就${randomPick(['窝囊到家', '冷若冰霜', '规规矩矩'])}。`;
    roast += `您这人格跟薛定谔的猫似的，观测前同时是127种贵物，观测后坍缩成"随便"。\n\n`;
  } else if (confidence > 0.8) {
    const scenarios = [
      ...SCENARIO_TEMPLATES.wechat,
      ...SCENARIO_TEMPLATES.work,
      ...SCENARIO_TEMPLATES.social,
      ...SCENARIO_TEMPLATES.phone,
      ...SCENARIO_TEMPLATES.life,
      ...SCENARIO_TEMPLATES.emotion
    ];
    const scenario1 = randomPick(scenarios);
    const scenario2 = randomPick(scenarios);
    roast += `${transition}${scenario1}。更离谱的是，${scenario2}。`;
    roast += `您这${type.name}属性纯度高达${(confidence * 100).toFixed(0)}%，建议截图发朋友圈配文"准得吓人"，然后收获一堆"哈哈哈哈"和"这不就是我吗"。\n\n`;
  } else {
    roast += `${transition}您这${type.name}属性掺了水，纯度只有${(confidence * 100).toFixed(0)}%。`;
    roast += `建议重测或者承认您就是个缝合怪——${type.name}的皮囊里塞着${randomPick(['NPC的灵魂', 'IMFW的躺平', 'RAND的随机', '404的失联'])}。`;
    roast += `但话说回来，纯度低也是好事，至少您还有救。\n\n`;
  }
  
  // === 第四部分：生活场景映射 ===
  const lifeScenario = randomPick(LIFE_SCENARIOS).replace(/{type}/g, typeCode);
  roast += `${lifeScenario}\n\n`;
  
  // === 第五部分：危险预警 ===
  const warningConnector = randomPick(CONNECTORS.warning);
  const warning = randomPick(slots.warning);
  roast += `${warningConnector}：${warning}。`;
  
  // 添加额外的危险预警
  const extraWarnings = [
    '您这性格在亲密关系里就是定时炸弹，建议单身保平安。',
    '您的{type}属性会让您在关键时刻掉链子，建议重要场合装病。',
    '您这种人在职场就是背锅侠体质，建议学会甩锅。',
    '您的社交模式会让朋友越来越少，建议珍惜现在还理您的人。'
  ];
  roast += `${randomPick(extraWarnings).replace(/{type}/g, type.name)}\n\n`;
  
  // === 第六部分：未来预测 ===
  const futurePrediction = randomPick(FUTURE_PREDICTIONS).replace(/{type}/g, type.name);
  roast += `${futurePrediction}\n\n`;
  
  // === 第七部分：离谱建议 ===
  const adviceConnector = randomPick(CONNECTORS.advice);
  const career = randomPick(CAREER_SUGGESTIONS);
  const endings = [
    '但估计您也懒得去',
    '但估计您等不及',
    '但估计您会搞砸',
    '但估计您不敢去',
    '但估计您连简历都懒得写',
    '但估计您面试时会触发{type}模式然后搞砸'
  ];
  const ending = randomPick(endings).replace(/{type}/g, type.name);
  roast += `${adviceConnector}：${career}，${ending}。\n\n`;
  
  // === 第八部分：总结升华 ===
  const summaries = [
    `总之，您就是一个标准的${type.name}。${type.keywords.join('、')}这些词就是为您量身定制的。接受它，拥抱它，然后继续痛苦地活着。毕竟，${type.name}的宿命就是清醒地沉沦。`,
    `综上所述，您的${type.name}人格已经深入骨髓。${type.keywords[0]}是您的底色，${type.keywords[1]}是您的保护色，${type.keywords[2]}是您的墓志铭。祝您在${type.name}的道路上越走越远，直到走不动为止。`,
    `最后想说，${type.name}不是病，但得治。可惜治不了，因为您这性格是出厂设置，重装系统都没用。所以别挣扎了，躺平接受吧。毕竟，做一只清醒的${type.name}，总比做一只糊涂的正常人强。`,
    `最后的最后，记住您是谁：${type.name}。${type.englishName}。一个${type.keywords.join('、')}的矛盾体。您可能永远不会被理解，但至少您理解了自己——虽然理解之后更痛苦了。`
  ];
  roast += randomPick(summaries);
  
  return roast;
}

/**
 * 生成RUSHI专属文案 - 加长版
 */
export function generateRushiRoast(answered: number, total: number): string {
  const metaphors = [
    '量子急躁体',
    'instant gratification的肉体化身',
    'ADHD实体化',
    '火箭解体兔子',
    '快进成精',
    '耐心值归零者',
    '时间刺客',
    '等待不耐受症患者'
  ];
  
  const insults = [
    '建议您去治疗ADHD',
    '或者...算了您也懒得去',
    '检测到您的耐心值已耗尽',
    '建议将人生模式切换为"极速版"',
    '所有剧情长按跳过',
    '您这性格适合去送外卖但估计也等不及出餐'
  ];
  
  let roast = '';
  
  // 开场
  roast += `您连${total}道题都等不及，只答了${answered}道就想跑。\n\n`;
  
  // 深度分析
  roast += `说白了，您就是${randomPick(metaphors)}。您的耐心值比5G信号还脆弱，连泡个面都觉得等太久。别人刷剧，您刷进度条；别人吃饭，您吞胶囊。您的人生被按了二倍速，但内容全是广告。\n\n`;
  
  // 生活场景
  roast += `在生活中，您是那种看电影必开二倍速、听播客必开1.5倍速、连泡面都觉得等太久的人。您的外卖订单平均等待时间不能超过15分钟，否则您就会开始疯狂刷新骑手位置。您的短视频平均观看时长是3秒，3秒内没有爆点就划走。您的人生就像被按了快进键，所有体验都被压缩成碎片。\n\n`;
  
  // 危险预警
  roast += `${randomPick(insults)}。更严重的是，您的急躁正在无差别攻击所有人——朋友发长语音您直接转文字，对象写小作文您只看最后一句，家人多问两句您就觉得是唐僧念经。您不是在生活，是在赶进度。\n\n`;
  
  // 未来预测
  roast += `以您目前的急躁程度，五年后您可能会因为等不及电梯而爬20层楼，因为红灯太久直接闯红灯，因为等不及爱情随便找个人结婚然后闪离。您的墓志铭大概率是："这里躺着一个人，他等不及死了。"\n\n`;
  
  // 建议
  roast += `建议您去送外卖，但估计您也等不及商家出餐。适合去炒股，但肯定拿不住，涨了就想卖跌了就想割肉。适合去...算了您肯定也等不及看完这段建议。您这性格唯一适合的工作是当一只蜂鸟，心跳每分钟1200次，和您一样永远停不下来。\n\n`;
  
  // 总结
  roast += `总之，您就是一个行走的"跳过"按钮。人生不是短视频，不能一直划走。但您肯定也听不进去，毕竟这段话对您来说也太长了。所以，祝您在快进的人生里，偶尔也能按下暂停键，哪怕只是为了喘口气。`;
  
  return roast;
}

/**
 * 生成RAND专属文案 - 加长版
 */
export function generateRandRoast(pseudoType?: SBTITypeCode): string {
  const currencies = ['硬币', '骰子', '伪随机数生成器', '量子比特', '外卖红包抽奖结果', '微信掷骰子表情包', '彩票摇号机', '抽卡游戏的保底机制'];
  const physicsConcepts = ['薛定谔的猫', '量子叠加态', '测不准原理的实体化', '坍缩前的波函数', '既死又活的贵物', '平行宇宙的交集', '混沌理论的案例'];
  const stateDescriptions = [
    '在观测前同时是127种贵物',
    '观测后坍缩成"随便"',
    '既存在又不存在',
    '既是A又是B直到被观测',
    '连上帝都掷骰子决定您是谁',
    '您的真实人格藏在概率云里'
  ];
  
  const currency = randomPick(currencies);
  const physics = randomPick(physicsConcepts);
  const state = randomPick(stateDescriptions);
  
  let roast = '';
  
  // 开场
  roast += `您连自己的人生都懒得选，让${currency}替您决定。您就像${physics}，${state}。\n\n`;
  
  // 深度分析
  roast += `说白了，您就是不想负责。选A怕后悔，选B也怕后悔，干脆让${currency}背锅。您不是有选择困难症，您是选择无能症晚期。您的自我认知薄得像A4纸，${currency}一抛就能击穿。\n\n`;
  
  // 生活场景
  roast += `在生活中，您是那种连中午吃什么都要掷骰子决定的人。您的衣柜里全是随机购买的衣服，穿出去像 cosplay。您的歌单是随机播放的，您的书单是随机买的，您的朋友是随机认识的。您的人生没有主线剧情，只有无数个支线任务，而且每个任务都是随机触发的。\n\n`;
  
  // 伪结果说明
  if (pseudoType) {
    const pseudoName = TYPE_LIBRARY[pseudoType]?.name || '未知';
    roast += `上面那个【${pseudoName}】是${currency}抛出来的结果。如果重新抛，您可能会变成【${randomPick(Object.values(TYPE_LIBRARY)).name}】或者【${randomPick(Object.values(TYPE_LIBRARY)).name}】。所以别当真，这结果和您本人可能半毛钱关系都没有。您就像一盒巧克力，连您自己都不知道下一颗是什么味道。\n\n`;
  }
  
  // 危险预警
  roast += `问题在于，当您习惯了让${currency}替您做决定，您会逐渐丧失自主意志。您会变成真正的NPC，只会按照预设程序行动。更可怕的是，您可能会开始用${currency}决定重要的事——要不要分手、要不要辞职、要不要结婚。那时候，您就不再是"选择困难"，而是"选择无能"了。\n\n`;
  
  // 建议
  roast += `建议您去买彩票，反正中了您也懒得兑奖。或者去当随机数生成器测试员，专门测试算法够不够乱。或者去当占卜师，反正都是瞎蒙，您的瞎蒙至少还有${currency}背书。但说真的，建议您试着自己做一次决定——哪怕只是决定今晚吃什么。\n\n`;
  
  // 总结
  roast += `总之，随机不是自由，逃避不是解脱。您用${currency}逃避选择，但逃避本身也是您自己选的——选不选。这个套娃逻辑可能会让您CPU过载，但没关系，过载了就让${currency}决定要不要重启。祝您在随机的人生里，偶尔也能手动操作一次。`
  
  return roast;
}

/**
 * 生成完整结果文案
 */
export function generateFullRoast(result: TestResult): string {
  // RUSHI特殊处理
  if (result.primaryType === 'RUSHI') {
    return generateRushiResultRoast(result);
  }
  
  // RAND特殊处理
  if (result.primaryType === 'RAND') {
    return generateRandRoast(result.pseudoResult);
  }
  
  // 正常结果
  return generateRoast(
    result.primaryType,
    result.confidence,
    result.hasContradiction,
    result.primaryScore
  );
}

/**
 * 生成RUSHI结果文案
 */
function generateRushiResultRoast(result: TestResult): string {
  const answered = result.answered ?? 5;
  const total = result.totalQuestions ?? 15;
  return generateRushiRoast(answered, total);
}

/**
 * 获取置信度描述
 */
export function getConfidenceLabel(confidence: number): string {
  if (confidence > 0.8) return '精准命中';
  if (confidence > 0.5) return '大概齐吧';
  if (confidence > 0.3) return '仅供参考';
  return '量子态';
}

/**
 * 获取置信度描述文本
 */
export function getConfidenceDescription(confidence: number): string {
  if (confidence > 0.8) {
    return '人格纯度极高，建议截图发朋友圈配文"准得吓人"';
  }
  if (confidence > 0.5) {
    return '您这人挺杂的，建议多测几次取平均，或者别当真';
  }
  if (confidence > 0.3) {
    return '反正您自己也不知道您是谁，建议就当个乐子，别对号入座';
  }
  return '您的类型处于叠加态，观测即坍缩，建议别当真，就当看了场脱口秀';
}

/**
 * 生成分享卡片文案（精简版）
 */
export function generateShareCardText(result: TestResult): string {
  const type = TYPE_LIBRARY[result.primaryType];
  const confidence = (result.confidence * 100).toFixed(0);
  
  if (result.primaryType === 'RUSHI') {
    return `【急躁者-RUSHI】\n连测试都等不及的人\n耐心值：已耗尽`;
  }
  
  if (result.primaryType === 'RAND') {
    const pseudoName = result.pseudoResult ? TYPE_LIBRARY[result.pseudoResult]?.name : '未知';
    return `【混沌人格-RAND】\n骰子决定我是：${pseudoName}\n量子叠加态中...`;
  }
  
  return `【${result.primaryType}-${type.name}】\n${type.keywords.slice(0, 2).join(' · ')}\n置信度：${confidence}%`;
}
