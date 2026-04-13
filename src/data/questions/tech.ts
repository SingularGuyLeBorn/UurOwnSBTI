import type { Question } from '@/types';

export const TECH_QUESTIONS: Question[] = [
  {
    id: 'Q_tech_001',
    type: 'single',
    text: '深夜赶deadline时，你的电脑突然蓝屏，你会？',
    options: [
      { id: 'A', text: '立刻打开手机里的ChatGPT，让它一边安慰我一边重写方案', weights: { AI: 5 } },
      { id: 'B', text: '把电脑砸了，这破班不上了', weights: { BAOZ: 4, HITER: 3, HOUJ: 2 } },
      { id: 'C', text: '发朋友圈：电脑死了，我也快了', weights: { EMO: 4, WEMO: 3, WONANG: 2 } },
      { id: 'D', text: '戴上VR头盔，去虚拟办公室假装什么都没发生', weights: { YUAN2: 2, VR: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_002',
    type: 'single',
    text: '如果你可以获得一种超能力，你会选择？',
    options: [
      { id: 'A', text: '和AI融为一体，成为行走的提示词百科', weights: { AI: 5 } },
      { id: 'B', text: '拥有脑机接口，直接下载《高等数学》到大脑', weights: { NAO2: 3 } },
      { id: 'C', text: '我要超能力让所有人的手机自动给我转账', weights: { HEI2: 4, TROLL: 3, XIAN: 2 } },
      { id: 'D', text: '其实我已经在训练自己的数字分身了', weights: { AI: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_003',
    type: 'single',
    text: '朋友问你最近在忙什么，你的回答是？',
    options: [
      { id: 'A', text: '在元宇宙里装修我的虚拟海景房，虽然现实里租的是地下室', weights: { YUAN2: 5 } },
      { id: 'B', text: '忙着给我的NFT jpeg们分类归档', weights: { NFT: 3 } },
      { id: 'C', text: '在元宇宙里当房东收租，现实里还是穷鬼', weights: { YUAN2: 4, XIAN: 3, IMFW: 2 } },
      { id: 'D', text: '忙着给AI当狗，求它帮我写周报', weights: { AI: 4, SERF: 3, NPC: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_004',
    type: 'single',
    text: '如果你的现实世界住所被收回，你会？',
    options: [
      { id: 'A', text: '顺理成章地搬进元宇宙，成为全职数字游民', weights: { YUAN2: 5 } },
      { id: 'B', text: '在VR里搭一个更豪华的帐篷', weights: { VR: 3, YUAN2: 3 } },
      { id: 'C', text: '用AI生成100封求情邮件群发', weights: { AI: 4, TROLL: 3, HITER: 2 } },
      { id: 'D', text: '我的本体就在区块链上，不需要物理地址', weights: { YUAN2: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_005',
    type: 'single',
    text: '你看到一张网红图片售价数百万美元，第一反应是？',
    options: [
      { id: 'A', text: '这不就是我的钱包里那张jpeg吗？我也买过类似的', weights: { NFT: 5 } },
      { id: 'B', text: '肯定是AI生成的，批量生产毫无价值', weights: { AI: 3 } },
      { id: 'C', text: '这种智商税也只有傻X会买', weights: { HITER: 4, CHAO: 3, TROLL: 2 } },
      { id: 'D', text: '截图发到群里：看看今天的冤种', weights: { LEI2: 4, CHAO: 3, TROLL: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_006',
    type: 'single',
    text: '打开你的数字钱包，最可能看到的情况是？',
    options: [
      { id: 'A', text: '一堆曾经价值连城、如今接近归零的藏品', weights: { NFT: 5 } },
      { id: 'B', text: '里面存的不是币，是青春的回忆和Gas费的账单', weights: { NFT: 4 } },
      { id: 'C', text: '我的钱包里只剩Gas费和悔恨', weights: { NFT: 4, EMO: 3, WONANG: 2 } },
      { id: 'D', text: '真正的 hodler 从不在乎 K 线', weights: { NFT: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_007',
    type: 'single',
    text: '你第一次体验VR过山车后的感觉是？',
    options: [
      { id: 'A', text: '扶着墙找垃圾桶，终于明白什么叫3D眩晕', weights: { VR: 5 } },
      { id: 'B', text: '毫无感觉，甚至想优化一下帧率', weights: { ROBOT: 3 } },
      { id: 'C', text: '扶着墙吐，然后给VR游戏打一星差评', weights: { HITER: 4, BAOZ: 3, FENN: 2 } },
      { id: 'D', text: '晕？这说明我的大脑还没被AI同化', weights: { VR: 4, CHAO: 3, TROLL: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_008',
    type: 'single',
    text: '在客厅里玩VR游戏时，你通常会？',
    options: [
      { id: 'A', text: '因为找不到边界而一头撞墙，成为邻居的笑料', weights: { VR: 5 } },
      { id: 'B', text: '提前清空场地，但还是会踢到茶几', weights: { VR: 4 } },
      { id: 'C', text: '撞墙说明现实在阻止我逃避', weights: { POET: 4, EMO: 3, WEMO: 2 } },
      { id: 'D', text: '其实我的实体早就习惯了在虚拟空间里撞来撞去', weights: { VR: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_009',
    type: 'single',
    text: '面对人生重大选择时，你的决策方式是？',
    options: [
      { id: 'A', text: '在做出决定前，我相信所有可能性都同时存在', weights: { QUAN: 5 } },
      { id: 'B', text: '先测一下自己的运势，玄学物理也是科学', weights: { QUAN: 4 } },
      { id: 'C', text: '抛硬币，反正选哪个都会后悔', weights: { XU: 4, CHU: 3, IMFW: 2 } },
      { id: 'D', text: '不做选择，让机会自己过期', weights: { TUOY: 4, IMFW: 3, XIAN: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_010',
    type: 'single',
    text: '如果薛定谔的猫开口说话，你认为它会说？',
    options: [
      { id: 'A', text: '我既是活着的又是死去的，直到你打开盒子', weights: { QUAN: 5 } },
      { id: 'B', text: '别观测我，让我保持优雅的叠加态', weights: { QUAN: 4 } },
      { id: 'C', text: '它会问：你们这些观测者能不能消停点', weights: { QUAN: 4, HITER: 3, CHAO: 2 } },
      { id: 'D', text: '喵——这句话在没被听见前不存在任何意义', weights: { QUAN: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_011',
    type: 'single',
    text: '关于记忆力下降，你的解释是？',
    options: [
      { id: 'A', text: '我已经把记忆外包给云端和便签软件了', weights: { NAO2: 5 } },
      { id: 'B', text: '注意力涣散是因为大脑在等待系统更新', weights: { NAO2: 4 } },
      { id: 'C', text: '记忆力下降？我根本没有值得记住的事', weights: { EMO: 4, WONANG: 3, WEMO: 2 } },
      { id: 'D', text: '我的大脑在自动清理垃圾缓存', weights: { AI: 4, CHAO: 3, TROLL: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_012',
    type: 'single',
    text: '如果有一种技术能让你瞬间掌握一门语言，你会？',
    options: [
      { id: 'A', text: '立刻植入脑机接口，把《牛津词典》下载进海马体', weights: { NAO2: 5 } },
      { id: 'B', text: '先咨询一下黑客帝国的墨菲斯，看看有没有副作用', weights: { NAO2: 4 } },
      { id: 'C', text: '植入后第一时间下载《如何骂人》', weights: { NAO2: 4, HITER: 3, TROLL: 2 } },
      { id: 'D', text: '拒绝，我不想变成行走的百度', weights: { HITER: 4, CHAO: 3, ZIL: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_013',
    type: 'single',
    text: '深夜看到天上有奇异的光点移动，你会？',
    options: [
      { id: 'A', text: '立刻拍照发到网上，宣称这是第三类接触的证据', weights: { UFO: 5 } },
      { id: 'B', text: '肯定是政府的秘密飞行器，罗斯威尔事件又要重演', weights: { UFO: 4 } },
      { id: 'C', text: '立刻直播：外星人来了，快刷火箭', weights: { UFO: 4, XUAN: 3, BIAO: 2 } },
      { id: 'D', text: '拍照发朋友圈：今晚月亮真圆', weights: { TROLL: 4, CHAO: 3, LEI2: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_014',
    type: 'single',
    text: '如果外星人真的来到地球，你希望它们带来什么？',
    options: [
      { id: 'A', text: '宇宙的终极真相，解开所有阴谋论的谜底', weights: { UFO: 5 } },
      { id: 'B', text: '先进的脑机接口技术，实现人类进化飞跃', weights: { NAO2: 3 } },
      { id: 'C', text: '带来劳动法，让外星人替我们打工', weights: { UFO: 4, TROLL: 3, HITER: 2 } },
      { id: 'D', text: '它们其实一直都在，只是选择了隐藏模式', weights: { UFO: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_015',
    type: 'single',
    text: '朋友向你倾诉失恋的痛苦，你的反应是？',
    options: [
      { id: 'A', text: '试图给出分步骤解决方案，忽略对方的情绪需求', weights: { ROBOT: 5 } },
      { id: 'B', text: '分析这段关系的投入产出比，建议及时止损', weights: { ROBOT: 4 } },
      { id: 'C', text: '用AI分析他前任的社交媒体，找黑料', weights: { AI: 4, MO: 3, HEI2: 2 } },
      { id: 'D', text: '失恋？我Robot没有感情这种bug', weights: { ROBOT: 4, CHAO: 3, TROLL: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_016',
    type: 'single',
    text: '你如何看待重复性工作？',
    options: [
      { id: 'A', text: '这是人类文明的基石，但我更喜欢用算法优化它', weights: { ROBOT: 5 } },
      { id: 'B', text: '如果图灵测试能通过，让机器人做也无妨', weights: { ROBOT: 4 } },
      { id: 'C', text: '重复性工作是人类给机器人设的陷阱', weights: { ROBOT: 4, CHAO: 3, HITER: 2 } },
      { id: 'D', text: '我已经在重复工作中失去了灵魂', weights: { EMO: 4, WEMO: 3, WONANG: 2 }, hidden: true }
    ],
  },
];
