import type { Question } from '@/types';

export const SPACE_QUESTIONS: Question[] = [
  {
    id: 'Q_space_001',
    type: 'single',
    text: '如果公司允许自由改造工位，你的第一件事是？',
    options: [
      { id: 'A', text: '安装显示器支架和人体工学椅，打造久坐堡垒', weights: { GONG: 4 } },
      { id: 'B', text: '加装挡板和收纳柜，拒绝任何人窥视或占用', weights: { GONG: 4 } },
      { id: 'C', text: '在工位周围拉上警戒线，闲人免进', weights: { HITER: 4, GONG: 3, BAOZ: 2 } },
      { id: 'D', text: '摆上枕头毛毯，让工位也能躺下', weights: { CHUANG: 3 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_002',
    type: 'single',
    text: '同事没打招呼就把东西堆在了你的工位上，你会？',
    options: [
      { id: 'A', text: '当场划出楚河汉界，明确告知这是私人领地', weights: { GONG: 4 } },
      { id: 'B', text: '直接把他的东西扔进垃圾桶', weights: { BAOZ: 4, HITER: 3, FENN: 2 } },
      { id: 'C', text: '贴上纸条：再乱放我就卖了', weights: { HITER: 4, CHAO: 3, TROLL: 2 } },
      { id: 'D', text: '用绿植和支架筑起防御工事，让对方知难而退', weights: { GONG: 4 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_003',
    type: 'single',
    text: '周末早晨闹钟响了三次，你仍处于什么状态？',
    options: [
      { id: 'A', text: '被被窝封印，起不来一点，谁也拉不动', weights: { CHUANG: 4 } },
      { id: 'B', text: '醒了，但决定翻个身继续在床上办公', weights: { CHUANG: 4 } },
      { id: 'C', text: '把闹钟全砸了，谁也别想叫醒我', weights: { BAOZ: 4, HITER: 3, XIAN: 2 } },
      { id: 'D', text: '醒了，但只是为了确认今天不用上班', weights: { XIAN: 4, IMFW: 3, CHU: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_004',
    type: 'single',
    text: '如果预算无限，你会怎么升级卧室？',
    options: [
      { id: 'A', text: '投资万元四件套和羽绒被，打造五星酒店睡眠体验', weights: { CHUANG: 4 } },
      { id: 'B', text: '安装床上桌和懒人支架，实现24小时床上办公娱乐', weights: { CHUANG: 4 } },
      { id: 'C', text: '在床上装个马桶和冰箱，这辈子不离开', weights: { CHUANG: 4, XIAN: 3, IMFW: 2 } },
      { id: 'D', text: '把卧室门焊死，谁也别想进来', weights: { HITER: 4, GONG: 3, BAOZ: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_005',
    type: 'single',
    text: '你在公司厕所隔间里最常做的事是？',
    options: [
      { id: 'A', text: '带薪拉屎，顺便刷完一集综艺', weights: { CES: 4 } },
      { id: 'B', text: '坐着发呆，思考人生意义和职业规划', weights: { CES: 4 } },
      { id: 'C', text: '在隔间里贴满励志标语，打造我的精神家园', weights: { CES: 4, TROLL: 3, CHAO: 2 } },
      { id: 'D', text: '把厕所当家，一天去八次', weights: { IMFW: 4, XIAN: 3, CES: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_006',
    type: 'single',
    text: '当你发现厕所隔间的手机快没电时，你的反应是？',
    options: [
      { id: 'A', text: '立刻结束战斗，没有电量无法安心思考', weights: { CES: 4 } },
      { id: 'B', text: '蹲到腿麻也不愿出去，宁愿在隔间里进行无手机冥想', weights: { CES: 5 } },
      { id: 'C', text: '在隔间门上刻诗，留下我的存在证明', weights: { POET: 4, CES: 3, TROLL: 2 } },
      { id: 'D', text: '大喊：谁有充电宝！江湖救急！', weights: { HITER: 4, BAOZ: 3, TROLL: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_007',
    type: 'single',
    text: '电梯里只有你和一个陌生人，你会？',
    options: [
      { id: 'A', text: '立刻掏出手机假装看消息，避免眼神接触', weights: { DIANT: 4 } },
      { id: 'B', text: '盯着楼层数字，心里默默倒计时', weights: { DIANT: 4 } },
      { id: 'C', text: '主动搭话：你也在这栋楼上班？', weights: { HITER: 4, BOSS: 3, TROLL: 2 } },
      { id: 'D', text: '盯着陌生人看直到他先移开视线', weights: { HITER: 4, BAOZ: 3, CHAO: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_008',
    type: 'single',
    text: '你要去18楼，但电梯里已经站满了人，你会？',
    options: [
      { id: 'A', text: '等下一班，宁愿迟到也不想面对拥挤和尴尬', weights: { DIANT: 4 } },
      { id: 'B', text: '大声说：麻烦往里挤挤，我赶时间', weights: { HITER: 4, BAOZ: 3, FENN: 2 } },
      { id: 'C', text: '用屁股把最后一个人拱出去', weights: { BAOZ: 4, HITER: 3, TROLL: 2 } },
      { id: 'D', text: '算了，转身去楼梯间，反正不想等', weights: { LOUTI: 3 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_009',
    type: 'single',
    text: '上班高峰期电梯前排了长队，你的选择是？',
    options: [
      { id: 'A', text: '果断转身去楼梯间，不想浪费生命在等电梯上', weights: { LOUTI: 4 } },
      { id: 'B', text: '一边等一边深蹲热身，随时准备爬楼', weights: { LOUTI: 3 } },
      { id: 'C', text: '在电梯口贴告示：本电梯已坏，请走楼梯', weights: { TROLL: 4, CHAO: 3, HITER: 2 } },
      { id: 'D', text: '直接推开门挤进去：不好意思我怀孕了', weights: { TROLL: 4, BAOZ: 3, HITER: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_010',
    type: 'single',
    text: '连续爬了10层楼后，你的身体状态是？',
    options: [
      { id: 'A', text: '气喘吁吁，但内心充满成就感', weights: { LOUTI: 4 } },
      { id: 'B', text: '膝盖隐隐作痛，但下次高峰期还爬', weights: { LOUTI: 4 } },
      { id: 'C', text: '爬到5楼坐电梯，假装自己一直爬的', weights: { BIAO: 4, TROLL: 3, JING2: 2 } },
      { id: 'D', text: '在楼道里大喊：还有谁！', weights: { HITER: 4, BAOZ: 3, TROLL: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_011',
    type: 'single',
    text: '地铁车厢里人头攒动，你的防御姿态是？',
    options: [
      { id: 'A', text: '戴上耳机，用音乐隔绝整个世界', weights: { DITIE: 4 } },
      { id: 'B', text: '目光锁定每一个座位，随时准备冲刺', weights: { DITIE: 4 } },
      { id: 'C', text: '故意大声咳嗽，制造个人空间', weights: { HITER: 4, TROLL: 3, CHAO: 2 } },
      { id: 'D', text: '对旁边的人说：你踩到我脚了（其实没有）', weights: { TROLL: 4, HITER: 3, BAOZ: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_012',
    type: 'single',
    text: '末班车即将发车，而你还在换乘通道里狂奔，你会？',
    options: [
      { id: 'A', text: '拼尽全力冲刺，绝对不能错过末班车', weights: { DITIE: 4 } },
      { id: 'B', text: '干脆放弃，在地铁站里流浪一夜', weights: { DITIE: 4 } },
      { id: 'C', text: '扒住车门不让自己被夹出去', weights: { BAOZ: 4, HITER: 3, TROLL: 2 } },
      { id: 'D', text: '戴上降噪耳机把自己焊死在换乘通道里，末班车是什么不知道', weights: { DITIE: 5 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_013',
    type: 'single',
    text: '房东突然发来消息说要涨租，你的第一反应是？',
    options: [
      { id: 'A', text: '开始计算押金能不能cover违约金', weights: { YUE: 4 } },
      { id: 'B', text: '连夜收拾行李准备再次搬家，合租的浴室还没排到队', weights: { YUE: 5 } },
      { id: 'C', text: '回房东：涨租？那我把墙皮带走抵房租', weights: { HITER: 4, CHAO: 3, TROLL: 2 } },
      { id: 'D', text: "连夜在墙上写满'此屋有鬼'再搬走", weights: { TROLL: 4, HEI2: 3, BAOZ: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_014',
    type: 'single',
    text: '合租室友又在客厅大声打电话，你会？',
    options: [
      { id: 'A', text: '躲进自己房间，感叹合租的尴尬和没有隐私', weights: { YUE: 4 } },
      { id: 'B', text: '开门怒吼：这是客厅不是你家卧室！', weights: { BAOZ: 4, HITER: 3, FENN: 2 } },
      { id: 'C', text: '把他的通话录下来第二天公放', weights: { TROLL: 4, HEI2: 3, HITER: 2 } },
      { id: 'D', text: '默默打开租房网站看整租房源', weights: { YUE: 4 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_015',
    type: 'single',
    text: '刷到房价又涨了的新闻，你的内心OS是？',
    options: [
      { id: 'A', text: '房价PTSD发作，感到深深焦虑', weights: { WU: 4 } },
      { id: 'B', text: '这辈子都不可能买房了，搬家搬到麻木，纸箱就是我的家', weights: { WU: 5 } },
      { id: 'C', text: '在新闻下面评论：房子都卖给鬼住吗', weights: { HITER: 4, CHAO: 3, EMO: 2 } },
      { id: 'D', text: '把房价新闻转发到家族群并@父母', weights: { TROLL: 4, HITER: 3, CHAO: 2 }, hidden: true },
    ],
  },
  {
    id: 'Q_space_016',
    type: 'single',
    text: '房东通知你下个月必须搬走，你的第一反应是？',
    options: [
      { id: 'A', text: '焦虑爆发，开始疯狂找房和打包行李', weights: { WU: 4 } },
      { id: 'B', text: '淡定联系搬家公司，反正已经习惯了', weights: { YUE: 3 } },
      { id: 'C', text: '把房东的电话挂到同性恋交友网站', weights: { TROLL: 4, HEI2: 3, HITER: 2 } },
      { id: 'D', text: '在房子里贴满符咒：谁住谁倒霉', weights: { TROLL: 4, HEI2: 3, BAOZ: 2 }, hidden: true }
    ],
  },
];
