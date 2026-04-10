/**
 * SBTI-Engine 3.0 类型定义
 */

// 127种人格类型代码
export type SBTITypeCode =
  | 'SEXY' | 'IMFW' | 'HITER' | 'WONANG' | 'SLEEP' | 'GIVEU' | 'POET' | 'DOGE' | 'BOSS' | 'NPC'
  | 'BUG' | '404' | 'VIP' | 'EMO' | 'CPU' | 'KFC' | 'DNA' | 'PDF' | 'GIF' | 'JPG'
  | 'FOMO' | 'YOLO' | 'FUDI' | 'HODL' | 'DYOR' | 'SERF' | 'GHOST' | 'TROLL' | 'WEEB' | 'NORM'
  | 'DEEP' | 'OPEN' | 'GROK' | 'CLAUD' | 'DOUB' | 'GEMI' | 'PUZZ' | 'MIDI' | 'CODE' | 'SORA'
  | 'SHENJ' | 'DAWEI' | 'XPENG' | 'DPENG' | 'WANDOU' | 'SHUANG' | 'SANXIAN' | 'RUSHI' | 'RAND'
  // 新增78种人格
  | 'HOUJ' | 'BAOZ' | 'YINY' | 'LENGL' | 'HUIM' | 'CHAO' | 'BENG' | 'FENN' | 'JING' | 'YUAN'
  | 'SHUI' | 'LIKE' | 'GANG' | 'CHIG' | 'YUYA' | 'KAOG' | 'GEZI' | 'XIAO' | 'POFF' | 'KEYB'
  | 'MAIM' | 'XUAN' | 'CHOU' | 'CHUAN' | 'MAIP' | 'YUEG' | 'TUNJI' | 'JIEP' | 'TUOY' | 'XUANZ'
  | 'TAOH' | 'HUIB' | 'BIAO' | 'BEIH' | 'ZIL' | 'KONG' | 'LAI' | 'XIAOQI' | 'DAREN' | 'SHEK'
  | 'DUNJ' | 'YITP' | 'JUEJ' | 'TAIK' | 'ZUND' | 'BABI' | 'WEMO' | 'SHUS' | 'MALO' | 'DANR'
  | 'NONG' | 'GELI' | 'SHIL' | 'DIAN' | 'SHUJU' | 'SAIBO' | 'PING' | 'WAIF' | 'BACH' | 'APIJ'
  | 'JSON' | 'SQLJ' | 'VPNJ' | 'COOK' | 'CACH' | 'DOCK' | 'GITJ' | 'ROOT' | 'BUG2' | 'SHENG'
  | 'XIAN' | 'WOYU' | 'DADE' | 'FANS' | 'HEIH' | 'BAIH' | 'CHAH' | 'KENG';

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
}

// 维度分组
export interface DimensionGroups {
  [key: string]: SBTITypeCode[];
}
