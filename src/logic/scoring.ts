import type { SBTITypeCode, Session, TestResult, Question } from '@/types';

// 所有类型代码
const ALL_TYPE_CODES: SBTITypeCode[] = [
  'SEXY', 'IMFW', 'HITER', 'WONANG', 'SLEEP', 'GIVEU', 'POET', 'DOGE', 'BOSS', 'NPC',
  'BUG', '404', 'VIP', 'EMO', 'CPU', 'KFC', 'DNA', 'PDF', 'GIF', 'JPG',
  'FOMO', 'YOLO', 'FUDI', 'HODL', 'DYOR', 'SERF', 'GHOST', 'TROLL', 'WEEB', 'NORM',
  'DEEP', 'OPEN', 'GROK', 'CLAUD', 'DOUB', 'GEMI', 'PUZZ', 'MIDI', 'CODE', 'SORA',
  'XPENG', 'DPENG', 'WANDOU', 'SHUANG', 'SANXIAN', 'RUSHI', 'SHENJ', 'DAWEI', 'RAND', 'HOUJ',
  'BAOZ', 'YINY', 'LENGL', 'HUIM', 'CHAO', 'BENG', 'FENN', 'JING', 'YUAN', 'SHUI',
  'LIKE', 'GANG', 'CHIG', 'YUYA', 'KAOG', 'GEZI', 'XIAO', 'POFF', 'KEYB', 'MAIM',
  'XUAN', 'CHOU', 'CHUAN', 'MAIP', 'YUEG', 'TUNJI', 'JIEP', 'TUOY', 'XUANZ', 'TAOH',
  'HUIB', 'BIAO', 'BEIH', 'ZIL', 'KONG', 'LAI', 'XIAOQI', 'DAREN', 'SHEK', 'DUNJ',
  'YITP', 'JUEJ', 'TAIK', 'ZUND', 'BABI', 'WEMO', 'SHUS', 'MALO', 'DANR', 'NONG',
  'GELI', 'SHIL', 'DIAN', 'SHUJU', 'SAIBO', 'PING', 'WAIF', 'BACH', 'APIJ', 'JSON',
  'SQLJ', 'VPNJ', 'COOK', 'CACH', 'DOCK', 'GITJ', 'ROOT', 'BUG2', 'SHENG', 'XIAN',
  'WOYU', 'DADE', 'FANS', 'HEIH', 'BAIH', 'CHAH', 'KENG', 'MAO', 'GOU', 'SHU2',
  'NIU', 'HU2', 'LANG', 'XIONG', 'SHE2', 'TU', 'LONG', 'ZHUS', 'YANG', 'BAISE',
  'HEISE', 'FENH', 'LV', 'LAN', 'ZI', 'HUANG', 'HONG', 'HUI', 'QING', 'GAN',
  'SHEN2', 'WEI', 'FEI', 'XIN', 'NAO', 'YAN', 'ER', 'SHOU', 'JIAO', 'ZAO',
  'YE', 'ZHOU', 'JIA', 'CHUN', 'XIA', 'QIU', 'DONG', 'SHUX', 'WEN', 'LI',
  'YING', 'LIH', 'DILI', 'SHENG2', 'ZHENGZ', 'JINGJ', 'FALV', 'QI', 'JIAO2', 'DIDI',
  'GAOTIE', 'FEIJI', 'LUN', 'SKATE', 'DIAN2', 'GONG', 'CHUANG', 'CES', 'DIANT', 'LOUTI',
  'DITIE', 'YUE', 'WU', 'YU', 'XUE', 'FENG', 'WU2', 'SHAN', 'LEI', 'YUN',
  'XIA2', 'GUP', 'JIJIN', 'JIAO3', 'FANG', 'CHE', 'XINY', 'DAI', 'LICAI', 'CHAOS2',
  'GUA', 'V50', 'EMOJI', 'PINY', 'FUHAO', 'SHUZI', 'JIEG', 'FASONG', 'YIG', 'SHAN2',
  'MIMA', 'JU', 'FAN', 'YING2', 'ZHIBO', 'TUAN', 'HEI', 'KENG2', 'MAN', 'ZONG',
  'DANCE', 'WEIX', 'ZHONG', 'AO', 'TONG', 'FAN2', 'BASHI', 'DUAN', 'SHI', 'AI',
  'YUAN2', 'NFT', 'VR', 'QUAN', 'NAO2', 'UFO', 'ROBOT', 'SHUANG2', 'KONG2', 'KONG3',
  'JIAOLV', 'YIY', 'SHUANG3', 'QIAN', 'BIAN', 'XING', 'MAI', 'MO', 'CHU', 'LEI2',
  'DAODE', 'JING2', 'HEI2', 'TUO', 'XU', 'PIN'
];

/**
 * 矛盾维度映射表
 */
const CONTRADICTION_PAIRS: Record<string, SBTITypeCode> = {
  'HITER': 'WONANG',
  'WONANG': 'HITER',
  'SEXY': 'GHOST',
  'GHOST': 'SEXY',
  'BUG': 'SERF',
  'SERF': 'BUG'
};

/**
 * 时间阈值配置（毫秒）
 */
const TIME_THRESHOLDS = {
  FAST_MODE: 3000,      // 快速模式：3秒内
  SLOW_MODE: 30000,     // 纠结模式：30秒以上
  EXTREME_SLOW: 120000  // 极慢模式：2分钟以上
};

/**
 * 时间调整分数映射
 */
const TIME_ADJUSTMENTS = {
  fast: { HITER: 5, KFC: 3 },
  slow: { WONANG: 5, POET: 3 },
  extreme: { SLEEP: 5, '404': 3 }
};

/**
 * 初始化分数表
 */
export function initializeScores(): Record<SBTITypeCode, number> {
  const scores: Partial<Record<SBTITypeCode, number>> = {};
  ALL_TYPE_CODES.forEach(type => {
    scores[type] = 0;
  });
  return scores as Record<SBTITypeCode, number>;
}

/**
 * 基础计分
 */
export function calculateBaseScores(
  answers: Map<string, { optionId: string; values?: string[] }>,
  questions: Question[]
): Record<SBTITypeCode, number> {
  const scores = initializeScores();
  
  answers.forEach((answer, questionId) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;
    
    if (question.type === 'single' && question.options) {
      const option = question.options.find(o => o.id === answer.optionId);
      if (option?.weights) {
        Object.entries(option.weights).forEach(([type, weight]) => {
          scores[type as SBTITypeCode] += weight;
        });
      }
    } else if (question.type === 'multi' && question.options) {
      const selectedIds = answer.optionId.split(',');
      selectedIds.forEach(id => {
        const option = question.options?.find(o => o.id === id);
        if (option?.weights) {
          Object.entries(option.weights).forEach(([type, weight]) => {
            scores[type as SBTITypeCode] += weight;
          });
        }
      });
    }
    
    if (question.trap) {
      Object.keys(scores).forEach(type => {
        scores[type as SBTITypeCode] *= 1.2;
      });
    }
  });
  
  return scores;
}

/**
 * 统计隐藏选项命中次数
 */
function countHiddenSelections(
  answers: Map<string, { optionId: string }>,
  questions: Question[]
): number {
  let count = 0;
  answers.forEach((answer, questionId) => {
    const q = questions.find(q => q.id === questionId);
    if (!q || !q.options) return;
    const selectedIds = answer.optionId.split(',');
    selectedIds.forEach(id => {
      const opt = q.options!.find(o => o.id === id);
      if (opt?.hidden) count++;
    });
  });
  return count;
}

/**
 * 计算分数分布熵值 (Shannon entropy normalized)
 */
function calculateEntropy(scores: Record<SBTITypeCode, number>): number {
  const values = Object.values(scores).filter(v => v > 0);
  if (values.length === 0) return 0;
  const sum = values.reduce((a, b) => a + b, 0);
  let entropy = 0;
  values.forEach(v => {
    const p = v / sum;
    if (p > 0) entropy -= p * Math.log2(p);
  });
  // normalize by max possible entropy (log2 of number of types with score > 0)
  const maxEntropy = Math.log2(values.length);
  return maxEntropy > 0 ? entropy / maxEntropy : 0;
}

/**
 * 应用时间调整
 */
export function applyTimeAdjustments(
  scores: Record<SBTITypeCode, number>,
  timings: Map<string, number>
): Record<SBTITypeCode, number> {
  if (timings.size === 0) return scores;
  
  const times = Array.from(timings.values());
  const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
  
  let adjustment: Record<string, number> | null = null;
  
  if (avgTime < TIME_THRESHOLDS.FAST_MODE) {
    adjustment = TIME_ADJUSTMENTS.fast;
  } else if (avgTime > TIME_THRESHOLDS.SLOW_MODE) {
    adjustment = TIME_ADJUSTMENTS.slow;
  }
  
  const hasExtremeSlow = times.some(t => t > TIME_THRESHOLDS.EXTREME_SLOW);
  if (hasExtremeSlow) {
    adjustment = TIME_ADJUSTMENTS.extreme;
  }
  
  if (adjustment) {
    Object.entries(adjustment).forEach(([type, bonus]) => {
      if (scores[type as SBTITypeCode] !== undefined) {
        scores[type as SBTITypeCode] += bonus;
      }
    });
  }
  
  return scores;
}

/**
 * 检测矛盾
 */
export function detectContradictions(
  answers: Map<string, { optionId: string }>,
  questions: Question[]
): Array<[SBTITypeCode, SBTITypeCode]> {
  const contradictions: Array<[SBTITypeCode, SBTITypeCode]> = [];
  const typeSequence: SBTITypeCode[] = [];
  
  answers.forEach((answer, questionId) => {
    const question = questions.find(q => q.id === questionId);
    if (!question || question.type !== 'single' || !question.options) return;
    
    const option = question.options.find(o => o.id === answer.optionId);
    if (option?.weights) {
      const topType = Object.entries(option.weights)
        .sort((a, b) => b[1] - a[1])[0]?.[0] as SBTITypeCode;
      if (topType) typeSequence.push(topType);
    }
  });
  
  for (let i = 0; i < typeSequence.length - 2; i++) {
    const t1 = typeSequence[i];
    const t2 = typeSequence[i + 1];
    const t3 = typeSequence[i + 2];
    
    const pair1 = CONTRADICTION_PAIRS[t1];
    
    if (pair1 && t2 === pair1 && t3 === t1) {
      contradictions.push([t1, t2]);
    }
  }
  
  return contradictions;
}

/**
 * 应用矛盾惩罚
 */
export function applyContradictionPenalty(
  scores: Record<SBTITypeCode, number>,
  contradictions: Array<[SBTITypeCode, SBTITypeCode]>
): Record<SBTITypeCode, number> {
  contradictions.forEach(([typeA, typeB]) => {
    scores[typeA] *= 0.5;
    scores[typeB] *= 0.5;
  });
  return scores;
}

/**
 * 检测一致性
 */
export function detectConsistency(
  answers: Map<string, { optionId: string }>,
  questions: Question[]
): { hasConsistency: boolean; consistentType: SBTITypeCode | null; streak: number } {
  const typeSequence: SBTITypeCode[] = [];
  
  answers.forEach((answer, questionId) => {
    const question = questions.find(q => q.id === questionId);
    if (!question || question.type !== 'single' || !question.options) return;
    
    const option = question.options.find(o => o.id === answer.optionId);
    if (option?.weights) {
      const topType = Object.entries(option.weights)
        .sort((a, b) => b[1] - a[1])[0]?.[0] as SBTITypeCode;
      if (topType) typeSequence.push(topType);
    }
  });
  
  let maxStreak = 1;
  let currentStreak = 1;
  let consistentType: SBTITypeCode | null = null;
  
  for (let i = 1; i < typeSequence.length; i++) {
    if (typeSequence[i] === typeSequence[i - 1]) {
      currentStreak++;
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
        consistentType = typeSequence[i];
      }
    } else {
      currentStreak = 1;
    }
  }
  
  return {
    hasConsistency: maxStreak >= 5,
    consistentType,
    streak: maxStreak
  };
}

/**
 * 应用一致性奖励
 */
export function applyConsistencyBonus(
  scores: Record<SBTITypeCode, number>,
  consistentType: SBTITypeCode | null
): Record<SBTITypeCode, number> {
  if (consistentType && scores[consistentType]) {
    scores[consistentType] *= 1.5;
  }
  return scores;
}

/**
 * 混沌画像修正层
 * 根据答题行为的隐藏特征，对分数进行全局调整
 */
function applyChaosPortraitAdjustments(
  scores: Record<SBTITypeCode, number>,
  session: Partial<Session>,
  questions: Question[]
): Record<SBTITypeCode, number> {
  const answers = session.answers as Map<string, { optionId: string }> | undefined;
  if (!answers) return scores;

  const timings = session.timings as Map<string, number> | undefined;
  const hiddenCount = countHiddenSelections(answers, questions);
  const entropy = calculateEntropy(scores);
  const sorted = sortTypesByScore(scores);
  const topScore = sorted[0]?.score || 0;
  const secondScore = sorted[1]?.score || 0;
  const gapRatio = topScore > 0 ? (topScore - secondScore) / topScore : 0;

  // 1. 隐藏选项猎手：多次选中隐藏选项，说明擅长发现隐蔽人格
  if (hiddenCount >= 3) {
    scores.YINY = (scores.YINY || 0) + hiddenCount * 2.5;
    scores.BOSS = (scores.BOSS || 0) + hiddenCount * 1.5;
    scores.JING = (scores.JING || 0) + 3;
  }

  // 2. 熵值修正：分数越分散越混沌，越集中越偏执
  if (entropy > 0.75) {
    // 极度混沌：分数像撒胡椒面
    scores.RAND = (scores.RAND || 0) + 8;
    scores.CHAO = (scores.CHAO || 0) + 6;
    scores.DUNJ = (scores.DUNJ || 0) + 4;
  } else if (entropy < 0.25 && topScore > 20) {
    // 极度集中：偏执型人格加成
    const topType = sorted[0].type;
    scores[topType] *= 1.15;
    scores.BOSS = (scores.BOSS || 0) + 3;
  }

  // 3. 速度-矛盾联动：答得飞快还自相矛盾 = 混沌乐子人
  if (timings && timings.size > 0) {
    const times = Array.from(timings.values());
    const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
    const contradictionCount = session.contradictions?.length || 0;
    if (avgTime < 2500 && contradictionCount >= 1) {
      scores.RAND = (scores.RAND || 0) + 10;
      scores.TROLL = (scores.TROLL || 0) + 5;
      scores.KFC = (scores.KFC || 0) + 4;
    }
    if (avgTime < 2000) {
      scores.HITER = (scores.HITER || 0) + 3;
      scores.YOLO = (scores.YOLO || 0) + 3;
    }
  }

  // 4. 模糊边界者：top1 和 top2 差距极小
  if (gapRatio < 0.08 && topScore > 15) {
    scores.LIKE = (scores.LIKE || 0) + 5;   // 理中客
    scores.YUAN = (scores.YUAN || 0) + 3;   // 怨灵
  }

  // 5. 未答题过多（完成率低）但 entropy 高：摸鱼大师
  const completionRate = (session.answered || 0) / (session.totalQuestions || 1);
  if (completionRate < 0.4 && entropy > 0.6) {
    scores.IMFW = (scores.IMFW || 0) + 6;
    scores.SLEEP = (scores.SLEEP || 0) + 4;
  }

  return scores;
}

/**
 * 按分数排序类型
 */
export function sortTypesByScore(
  scores: Record<SBTITypeCode, number>
): Array<{ type: SBTITypeCode; score: number }> {
  return Object.entries(scores)
    .map(([type, score]) => ({ type: type as SBTITypeCode, score }))
    .sort((a, b) => b.score - a.score);
}

/**
 * 计算置信度
 */
export function calculateConfidence(
  session: Partial<Session>,
  topScore: number,
  secondScore: number,
  entropy: number
): number {
  if (session.isRushed) {
    return 0.1;
  }

  const completionRate = (session.answered || 0) / (session.totalQuestions || 1);
  let confidence = 0.12 + completionRate * 0.38;

  const scoreGap = topScore - secondScore;
  const relativeGap = topScore > 0 ? scoreGap / topScore : 0;
  const gapBonus = Math.min(relativeGap * 0.5, 0.35);
  confidence += gapBonus;

  const contradictionCount = session.contradictions?.length || 0;
  if (contradictionCount > 0) {
    confidence -= 0.1 * contradictionCount;
  }

  if (session.consistencyStreak && session.consistencyStreak >= 5) {
    confidence += 0.12;
  }

  // 熵值惩罚：越混沌，置信度越低
  if (entropy > 0.7) confidence -= 0.1;
  if (entropy > 0.85) confidence -= 0.08;

  const maxConfidence = session.isRandom ? 0.32 : 0.96;

  return Math.max(0.1, Math.min(maxConfidence, confidence));
}

/**
 * 主计分函数
 */
export function calculateResult(
  session: Partial<Session>,
  questions: Question[]
): TestResult {
  let scores = initializeScores();
  
  if (session.answers) {
    scores = calculateBaseScores(session.answers as Map<string, { optionId: string; values?: string[] }>, questions);
  }
  
  if (session.timings) {
    scores = applyTimeAdjustments(scores, session.timings as Map<string, number>);
  }
  
  let contradictions: Array<[SBTITypeCode, SBTITypeCode]> = [];
  if (session.answers) {
    contradictions = detectContradictions(
      session.answers as Map<string, { optionId: string }>,
      questions
    );
    if (contradictions.length > 0) {
      scores = applyContradictionPenalty(scores, contradictions);
    }
  }
  
  let consistencyResult = { hasConsistency: false, consistentType: null as SBTITypeCode | null, streak: 0 };
  if (session.answers) {
    consistencyResult = detectConsistency(
      session.answers as Map<string, { optionId: string }>,
      questions
    );
    if (consistencyResult.hasConsistency) {
      scores = applyConsistencyBonus(scores, consistencyResult.consistentType);
    }
  }
  
  // Layer 6: 混沌画像修正（新增）
  scores = applyChaosPortraitAdjustments(scores, session, questions);
  
  const sortedTypes = sortTypesByScore(scores);
  const topType = sortedTypes[0];
  const secondType = sortedTypes[1];
  const entropy = calculateEntropy(scores);
  
  const confidence = calculateConfidence(session, topType.score, secondType.score, entropy);

  // 副人格阈值：分数差距 < 35% 时强制出现副人格（之前是 20% -> 0.8 ratio，现在降到 0.65 ratio = 35% gap）
  const secondaryThreshold = 0.65;
  const showSecondary = secondType.score / topType.score > secondaryThreshold;
  
  return {
    primaryType: topType.type,
    secondaryType: showSecondary ? secondType.type : null,
    primaryScore: topType.score,
    secondaryScore: secondType.score,
    confidence,
    allScores: scores,
    sortedTypes,
    isRushed: session.isRushed || false,
    isRandom: session.isRandom || false,
    hasContradiction: contradictions.length > 0,
    hasConsistency: consistencyResult.hasConsistency
  };
}

/**
 * 强制RUSHI结果
 */
export function generateRushiResult(
  _answered: number,
  _total: number
): TestResult {
  const scores = initializeScores();
  scores.RUSHI = 999;

  return {
    primaryType: 'RUSHI',
    secondaryType: null,
    primaryScore: 999,
    secondaryScore: 0,
    confidence: 0.1,
    allScores: scores,
    sortedTypes: [{ type: 'RUSHI', score: 999 }],
    isRushed: true,
    isRandom: false,
    hasContradiction: false,
    hasConsistency: false,
    answered: _answered,
    totalQuestions: _total
  };
}

/**
 * 强制RAND结果（但保留伪结果）
 */
export function generateRandomResult(
  baseResult: TestResult
): TestResult {
  const randomConfidence = Math.min(baseResult.confidence, 0.25 + Math.random() * 0.07);
  return {
    ...baseResult,
    primaryType: 'RAND',
    pseudoResult: baseResult.primaryType,
    confidence: Math.max(0.12, randomConfidence),
    isRandom: true
  };
}
