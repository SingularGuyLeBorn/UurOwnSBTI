/**
 * SBTI-Engine 3.0 类型定义
 */

// 266种人格类型代码
export type SBTITypeCode =
  | 'SEXY' | 'IMFW' | 'HITER' | 'WONANG' | 'SLEEP' | 'GIVEU' | 'POET' | 'DOGE' | 'BOSS' | 'NPC'
  | 'BUG' | '404' | 'VIP' | 'EMO' | 'CPU' | 'KFC' | 'DNA' | 'PDF' | 'GIF' | 'JPG'
  | 'FOMO' | 'YOLO' | 'FUDI' | 'HODL' | 'DYOR' | 'SERF' | 'GHOST' | 'TROLL' | 'WEEB' | 'NORM'
  | 'DEEP' | 'OPEN' | 'GROK' | 'CLAUD' | 'DOUB' | 'GEMI' | 'PUZZ' | 'MIDI' | 'CODE' | 'SORA'
  | 'SHENJ' | 'DAWEI' | 'XPENG' | 'DPENG' | 'WANDOU' | 'SHUANG' | 'SANXIAN' | 'RUSHI' | 'RAND'
  // 新增78种人格（第一批）
  | 'HOUJ' | 'BAOZ' | 'YINY' | 'LENGL' | 'HUIM' | 'CHAO' | 'BENG' | 'FENN' | 'JING' | 'YUAN'
  | 'SHUI' | 'LIKE' | 'GANG' | 'CHIG' | 'YUYA' | 'KAOG' | 'GEZI' | 'XIAO' | 'POFF' | 'KEYB'
  | 'MAIM' | 'XUAN' | 'CHOU' | 'CHUAN' | 'MAIP' | 'YUEG' | 'TUNJI' | 'JIEP' | 'TUOY' | 'XUANZ'
  | 'TAOH' | 'HUIB' | 'BIAO' | 'BEIH' | 'ZIL' | 'KONG' | 'LAI' | 'XIAOQI' | 'DAREN' | 'SHEK'
  | 'DUNJ' | 'YITP' | 'JUEJ' | 'TAIK' | 'ZUND' | 'BABI' | 'WEMO' | 'SHUS' | 'MALO' | 'DANR'
  | 'NONG' | 'GELI' | 'SHIL' | 'DIAN' | 'SHUJU' | 'SAIBO' | 'PING' | 'WAIF' | 'BACH' | 'APIJ'
  | 'JSON' | 'SQLJ' | 'VPNJ' | 'COOK' | 'CACH' | 'DOCK' | 'GITJ' | 'ROOT' | 'BUG2' | 'SHENG'
  | 'XIAN' | 'WOYU' | 'DADE' | 'FANS' | 'HEIH' | 'BAIH' | 'CHAH' | 'KENG'
  // 新增139种人格
  | 'MAO' | 'GOU' | 'SHU2' | 'NIU' | 'HU2' | 'LANG' | 'XIONG' | 'SHE2' | 'TU' | 'LONG'
  | 'ZHUS' | 'YANG' | 'BAISE' | 'HEISE' | 'FENH' | 'LV' | 'LAN' | 'ZI' | 'HUANG' | 'HONG'
  | 'HUI' | 'QING' | 'GAN' | 'SHEN2' | 'WEI' | 'FEI' | 'XIN' | 'NAO' | 'YAN' | 'ER'
  | 'SHOU' | 'JIAO' | 'ZAO' | 'YE' | 'ZHOU' | 'JIA' | 'CHUN' | 'XIA' | 'QIU' | 'DONG'
  | 'SHUX' | 'WEN' | 'LI' | 'YING' | 'LIH' | 'DILI' | 'SHENG2' | 'ZHENGZ' | 'JINGJ' | 'FALV'
  | 'QI' | 'JIAO2' | 'DIDI' | 'GAOTIE' | 'FEIJI' | 'LUN' | 'SKATE' | 'DIAN2' | 'GONG' | 'CHUANG'
  | 'CES' | 'DIANT' | 'LOUTI' | 'DITIE' | 'YUE' | 'WU' | 'YU' | 'XUE' | 'FENG' | 'WU2'
  | 'SHAN' | 'LEI' | 'YUN' | 'XIA2' | 'GUP' | 'JIJIN' | 'JIAO3' | 'FANG' | 'CHE' | 'XINY'
  | 'DAI' | 'LICAI' | 'CHAOS2' | 'GUA' | 'V50' | 'EMOJI' | 'PINY' | 'FUHAO' | 'SHUZI' | 'JIEG'
  | 'FASONG' | 'YIG' | 'SHAN2' | 'MIMA' | 'JU' | 'FAN' | 'YING2' | 'ZHIBO' | 'TUAN' | 'HEI'
  | 'KENG2' | 'MAN' | 'ZONG' | 'DANCE' | 'WEIX' | 'ZHONG' | 'AO' | 'TONG' | 'FAN2' | 'BASHI'
  | 'DUAN' | 'SHI' | 'AI' | 'YUAN2' | 'NFT' | 'VR' | 'QUAN' | 'NAO2' | 'UFO' | 'ROBOT'
  | 'SHUANG2' | 'KONG2' | 'KONG3' | 'JIAOLV' | 'YIY' | 'SHUANG3' | 'QIAN' | 'BIAN' | 'XING' | 'MAI'
  | 'MO' | 'CHU' | 'LEI2' | 'DAODE' | 'JING2' | 'HEI2' | 'TUO' | 'XU' | 'PIN';

// 题目类型
export type QuestionType = 'single' | 'multi';

// 选项
export interface Option {
  id: string;
  text: string;
  weights: Partial<Record<SBTITypeCode, number>>;
  hidden?: boolean;
}

// 题目
export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  hint?: string;
  options?: Option[];
  trap?: boolean;
}

// 人格类型定义
export interface TypeProfile {
  code: SBTITypeCode;
  name: string;
  englishName: string;
  keywords: string[];
  svgDescription: string;
}

// 槽位库
export interface SlotLibrary {
  opening: string[];
  scenario: string[];
  warning: string[];
  career: string[];
}

// 会话状态
export interface Session {
  totalQuestions: number;
  answered: number;
  answers: Map<string, any>;
  timings: Map<string, number>;
  startTime: number;
  isRushed: boolean;
  isRandom: boolean;
  contradictions: Array<[SBTITypeCode, SBTITypeCode]>;
  consistencyStreak: number;
  scores: Record<SBTITypeCode, number>;
  lastAnswerDirection: string | null;
}

// 测试结果
export interface TestResult {
  primaryType: SBTITypeCode;
  secondaryType: SBTITypeCode | null;
  primaryScore: number;
  secondaryScore: number;
  confidence: number;
  allScores: Record<SBTITypeCode, number>;
  sortedTypes: Array<{ type: SBTITypeCode; score: number }>;
  isRushed: boolean;
  isRandom: boolean;
  hasContradiction: boolean;
  hasConsistency: boolean;
  pseudoResult?: SBTITypeCode;
  answered?: number;
  totalQuestions?: number;
}

// 维度分组
export interface DimensionGroups {
  [key: string]: SBTITypeCode[];
}
