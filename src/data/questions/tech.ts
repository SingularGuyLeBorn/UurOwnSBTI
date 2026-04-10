import type { Question } from '@/types';

export const TECH_QUESTIONS: Question[] = [
  {
    id: 'Q_tech_001',
    type: 'single',
    text: '深夜赶deadline时，你的电脑突然蓝屏，你会？',
    options: [
      { id: 'A', text: '立刻打开手机里的ChatGPT，让它一边安慰我一边重写方案', weights: { AI: 5 } },
      { id: 'B', text: '深呼吸，用理性思维排查故障，效率至上', weights: { ROBOT: 3 } },
      { id: 'C', text: '戴上VR头盔，去虚拟办公室假装什么都没发生', weights: { YUAN2: 2, VR: 2 } },
      { id: 'D', text: '认为这是量子波动导致的随机事件，接受命运的叠加态', weights: { QUAN: 3 } },
    ],
  },
  {
    id: 'Q_tech_002',
    type: 'single',
    text: '如果你可以获得一种超能力，你会选择？',
    options: [
      { id: 'A', text: '和AI融为一体，成为行走的提示词百科', weights: { AI: 5 } },
      { id: 'B', text: '拥有脑机接口，直接下载《高等数学》到大脑', weights: { NAO2: 3 } },
      { id: 'C', text: '获得外星人的科技传承，破解宇宙终极算法', weights: { UFO: 3 } },
      { id: 'D', text: '其实我已经在训练自己的数字分身了', weights: { AI: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_003',
    type: 'single',
    text: '朋友问你最近在忙什么，你的回答是？',
    options: [
      { id: 'A', text: '在元宇宙里装修我的虚拟海景房，虽然现实里租的是地下室', weights: { YUAN2: 5 } },
      { id: 'B', text: '刚在VRChat里认识了一群世界各地的网友', weights: { YUAN2: 4, VR: 2 } },
      { id: 'C', text: '忙着给我的NFT jpeg们分类归档', weights: { NFT: 3 } },
      { id: 'D', text: '在研究如何用机器人替代我的社交活动', weights: { ROBOT: 2 } },
    ],
  },
  {
    id: 'Q_tech_004',
    type: 'single',
    text: '如果你的现实世界住所被收回，你会？',
    options: [
      { id: 'A', text: '顺理成章地搬进元宇宙，成为全职数字游民', weights: { YUAN2: 5 } },
      { id: 'B', text: '在VR里搭一个更豪华的帐篷', weights: { VR: 3, YUAN2: 3 } },
      { id: 'C', text: '用AI生成一封感人的求情邮件', weights: { AI: 2 } },
      { id: 'D', text: '我的本体就在区块链上，不需要物理地址', weights: { YUAN2: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_005',
    type: 'single',
    text: '你看到一张网红图片售价数百万美元，第一反应是？',
    options: [
      { id: 'A', text: '这不就是我的钱包里那张jpeg吗？我也买过类似的', weights: { NFT: 5 } },
      { id: 'B', text: 'Gas费这么贵，还不如把这钱换成实体黄金', weights: { NFT: 3 } },
      { id: 'C', text: '肯定是AI生成的，批量生产毫无价值', weights: { AI: 3 } },
      { id: 'D', text: '这是元宇宙里的身份象征，持有才能进高端俱乐部', weights: { YUAN2: 2 } },
    ],
  },
  {
    id: 'Q_tech_006',
    type: 'single',
    text: '打开你的数字钱包，最可能看到的情况是？',
    options: [
      { id: 'A', text: '一堆曾经价值连城、如今接近归零的藏品', weights: { NFT: 5 } },
      { id: 'B', text: '里面存的不是币，是青春的回忆和Gas费的账单', weights: { NFT: 4 } },
      { id: 'C', text: '钱包？我早把它当成数字艺术展廊了', weights: { NFT: 3 } },
      { id: 'D', text: '真正的 hodler 从不在乎 K 线', weights: { NFT: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_tech_007',
    type: 'single',
    text: '你第一次体验VR过山车后的感觉是？',
    options: [
      { id: 'A', text: '扶着墙找垃圾桶，终于明白什么叫3D眩晕', weights: { VR: 5 } },
      { id: 'B', text: '虽然有点晕，但为了虚拟演唱会我可以忍', weights: { VR: 4 } },
      { id: 'C', text: '毫无感觉，甚至想优化一下帧率', weights: { ROBOT: 3 } },
      { id: 'D', text: '这一定是量子隧穿造成的空间错位感', weights: { QUAN: 2 } },
    ],
  },
  {
    id: 'Q_tech_008',
    type: 'single',
    text: '在客厅里玩VR游戏时，你通常会？',
    options: [
      { id: 'A', text: '因为找不到边界而一头撞墙，成为邻居的笑料', weights: { VR: 5 } },
      { id: 'B', text: '提前清空场地，但还是会踢到茶几', weights: { VR: 4 } },
      { id: 'C', text: '只玩坐着不动的游戏，拒绝任何移动', weights: { VR: 3 } },
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
      { id: 'C', text: '列出SWOT分析表，用理性计算最优解', weights: { ROBOT: 3 } },
      { id: 'D', text: '问AI模拟一百万次，看概率分布结果', weights: { AI: 2 } },
    ],
  },
  {
    id: 'Q_tech_010',
    type: 'single',
    text: '如果薛定谔的猫开口说话，你认为它会说？',
    options: [
      { id: 'A', text: '我既是活着的又是死去的，直到你打开盒子', weights: { QUAN: 5 } },
      { id: 'B', text: '别观测我，让我保持优雅的叠加态', weights: { QUAN: 4 } },
      { id: 'C', text: '它其实是一只外星猫，来自罗斯威尔', weights: { UFO: 3 } },
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
      { id: 'C', text: '这是AI接管人类思维的前兆', weights: { AI: 3 } },
      { id: 'D', text: '可能是被外星人读取了太多脑波数据', weights: { UFO: 2 } },
    ],
  },
  {
    id: 'Q_tech_012',
    type: 'single',
    text: '如果有一种技术能让你瞬间掌握一门语言，你会？',
    options: [
      { id: 'A', text: '立刻植入脑机接口，把《牛津词典》下载进海马体', weights: { NAO2: 5 } },
      { id: 'B', text: '先咨询一下黑客帝国的墨菲斯，看看有没有副作用', weights: { NAO2: 4 } },
      { id: 'C', text: '拒绝，因为我享受低效学习的痛苦', weights: { ROBOT: 2 } },
      { id: 'D', text: '还是报个实体班比较踏实', weights: { QUAN: 1 } },
    ],
  },
  {
    id: 'Q_tech_013',
    type: 'single',
    text: '深夜看到天上有奇异的光点移动，你会？',
    options: [
      { id: 'A', text: '立刻拍照发到网上，宣称这是第三类接触的证据', weights: { UFO: 5 } },
      { id: 'B', text: '肯定是政府的秘密飞行器，罗斯威尔事件又要重演', weights: { UFO: 4 } },
      { id: 'C', text: '用AI分析一下飞行轨迹，看看是不是无人机', weights: { AI: 2 } },
      { id: 'D', text: '不过是大气折射的量子效应，没什么大惊小怪', weights: { QUAN: 2 } },
    ],
  },
  {
    id: 'Q_tech_014',
    type: 'single',
    text: '如果外星人真的来到地球，你希望它们带来什么？',
    options: [
      { id: 'A', text: '宇宙的终极真相，解开所有阴谋论的谜底', weights: { UFO: 5 } },
      { id: 'B', text: '先进的脑机接口技术，实现人类进化飞跃', weights: { NAO2: 3 } },
      { id: 'C', text: '一张写满 NFT 合约的外星区块链白皮书', weights: { NFT: 2 } },
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
      { id: 'C', text: '让AI生成一封安慰信，然后复制粘贴发送', weights: { AI: 3 } },
      { id: 'D', text: '带他去VR世界里看虚拟演唱会转移注意力', weights: { VR: 2 } },
    ],
  },
  {
    id: 'Q_tech_016',
    type: 'single',
    text: '你如何看待重复性工作？',
    options: [
      { id: 'A', text: '这是人类文明的基石，但我更喜欢用算法优化它', weights: { ROBOT: 5 } },
      { id: 'B', text: '如果图灵测试能通过，让机器人做也无妨', weights: { ROBOT: 4 } },
      { id: 'C', text: '重复劳动容易让人产生自己是机器人的错觉', weights: { ROBOT: 3 } },
      { id: 'D', text: '在元宇宙里重复打金币也是一种乐趣', weights: { YUAN2: 2 } },
    ],
  },
];
