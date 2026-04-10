import type { SBTITypeCode, Session, TestResult, Question } from '@/types';

// 所有类型代码
const ALL_TYPE_CODES: SBTITypeCode[] = [
  'SEXY', 'IMFW', 'HITER', 'WONANG', 'SLEEP', 'GIVEU', 'POET', 'DOGE', 'BOSS', 'NPC',
  'BUG', '404', 'VIP', 'EMO', 'CPU', 'KFC', 'DNA', 'PDF', 'GIF', 'JPG',
  'FOMO', 'YOLO', 'FUDI', 'HODL', 'DYOR', 'SERF', 'GHOST', 'TROLL', 'WEEB', 'NORM',
  'DEEP', 'OPEN', 'GROK', 'CLAUD', 'DOUB', 'GEMI', 'PUZZ', 'MIDI', 'CODE', 'SORA',
  'SHENJ', 'DAWEI', 'XPENG', 'DPENG', 'WANDOU', 'SHUANG', 'SANXIAN', 'RUSHI', 'RAND'
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
      // 多选题：每个选中选项+1
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
    
    // 陷阱题权重翻倍
    if (question.trap) {
      Object.keys(scores).forEach(type => {
        scores[type as SBTITypeCode] *= 1.2;
      });
    }
  });
  
  return scores;
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
  
  // 检查极慢模式
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
  
  // 提取每道题得分最高的类型
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
  
  // 检测连续3题的维度摇摆
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
  
  // 检测连续5题同类型
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
  secondScore: number
): number {
  // RUSHI（几乎没答题）直接最低置信度
  if (session.isRushed) {
    return 0.1;
  }

  // 基础置信度：答完题保底 0.45
  const completionRate = (session.answered || 0) / (session.totalQuestions || 1);
  let confidence = 0.15 + completionRate * 0.35;

  // 分数差距加成（相对差距更合理）
  const scoreGap = topScore - secondScore;
  const relativeGap = topScore > 0 ? scoreGap / topScore : 0;
  const gapBonus = Math.min(relativeGap * 0.5, 0.35);
  confidence += gapBonus;

  // 矛盾惩罚（按矛盾次数递减）
  const contradictionCount = session.contradictions?.length || 0;
  if (contradictionCount > 0) {
    confidence -= 0.12 * contradictionCount;
  }

  // 一致性奖励
  if (session.consistencyStreak && session.consistencyStreak >= 5) {
    confidence += 0.12;
  }

  // RAND 给上限限制，体现随机性
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
  // 初始化分数
  let scores = initializeScores();
  
  // 基础计分
  if (session.answers) {
    scores = calculateBaseScores(session.answers as Map<string, { optionId: string; values?: string[] }>, questions);
  }
  
  // Layer 3: 时间调整
  if (session.timings) {
    scores = applyTimeAdjustments(scores, session.timings as Map<string, number>);
  }
  
  // Layer 4: 矛盾检测和惩罚
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
  
  // Layer 5: 一致性奖励
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
  
  // 排序取最高
  const sortedTypes = sortTypesByScore(scores);
  const topType = sortedTypes[0];
  const secondType = sortedTypes[1];
  
  // Layer 7: 置信度计算
  const confidence = calculateConfidence(session, topType.score, secondType.score);
  
  return {
    primaryType: topType.type,
    secondaryType: secondType.score / topType.score > 0.8 ? secondType.type : null,
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
  scores.RUSHI = 999; // 强制最高
  
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
    hasConsistency: false
  };
}

/**
 * 强制RAND结果（但保留伪结果）
 */
export function generateRandomResult(
  baseResult: TestResult
): TestResult {
  // 一键乱选不再强行 10%，但上限被 calculateConfidence 限制在 32% 左右
  const randomConfidence = Math.min(baseResult.confidence, 0.25 + Math.random() * 0.07);
  return {
    ...baseResult,
    primaryType: 'RAND',
    pseudoResult: baseResult.primaryType,
    confidence: Math.max(0.12, randomConfidence),
    isRandom: true
  };
}
