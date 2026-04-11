import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, SkipForward, Dice5, HelpCircle, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import type { Question, SBTITypeCode } from '@/types';
import { QUESTION_LIBRARY, sampleQuestions } from '@/data/questions';
import { calculateResult, generateRushiResult, generateRandomResult } from '@/logic/scoring';

interface Answer {
  optionId: string;
}

const STORAGE_KEY = 'SBTI_QUIZ_PROGRESS';

function InlineToast({ message, type, onAction, actionText, onClose }: { message: string; type: 'warning' | 'info'; onAction?: () => void; actionText?: string; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(() => onClose(), 5000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className={`w-full p-4 rounded-xl neu-flat border-l-4 ${
      type === 'warning' ? 'border-l-amber-500' : 'border-l-blue-500'
    } animate-fadeInUp`}>
      <div className="flex items-start gap-3">
        {type === 'warning' ? <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" /> : <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />}
        <div className="flex-1">
          <p className={`text-sm ${type === 'warning' ? 'text-amber-700' : 'text-blue-700'}`}>{message}</p>
          {onAction && actionText && (
            <button onClick={onAction} className={`mt-2 text-xs font-semibold underline ${type === 'warning' ? 'text-amber-600' : 'text-blue-600'}`}>
              {actionText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function getQuestionTypeDesc(type: string): string {
  const singleHints = ['只能选一个，别贪心', '单选，别想太多', '选一个，选完赶紧走', '单选题，别整那些虚的', '选一个，别纠结了'];
  const multiHints = ['这题可以多选，全选也行', '多选，想选几个选几个', '这题不限制，随便选', '多选，别漏了你觉得对的', '可以多选，但别全选啊喂'];
  switch (type) {
    case 'single': return singleHints[Math.floor(Math.random() * singleHints.length)];
    case 'multi': return multiHints[Math.floor(Math.random() * multiHints.length)];
    default: return '';
  }
}

export default function QuizPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [questionCount] = useState<number>(() => {
    if (location.state?.questionCount) return location.state.questionCount;
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (saved) {
      try { const p = JSON.parse(saved); if (p.questionCount) return p.questionCount; } catch {}
    }
    return 15;
  });

  const [sessionSeed] = useState<string>(() => {
    if (location.state?.sessionSeed) return location.state.sessionSeed;
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (saved) {
      try { const p = JSON.parse(saved); if (p.sessionSeed) return p.sessionSeed; } catch {}
    }
    return Math.random().toString(36).slice(2);
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, Answer>>(new Map());
  const [startTime] = useState<number>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (saved) {
      try { const p = JSON.parse(saved); if (p.startTime) return p.startTime; } catch {}
    }
    return Date.now();
  });
  const [timings, setTimings] = useState<Map<string, number>>(new Map());

  const [showStabilityTip, setShowStabilityTip] = useState(false);
  const [showSkipTip, setShowSkipTip] = useState(false);
  const [showRandomTip, setShowRandomTip] = useState(false);
  const [revealedHidden, setRevealedHidden] = useState<Set<string>>(new Set());
  const [fastClickToast, setFastClickToast] = useState(false);
  const [slowToast, setSlowToast] = useState(false);
  const [isSimulatingRandom, setIsSimulatingRandom] = useState(false);

  const lastClickTimeRef = useRef<number>(0);
  const fastClickCountRef = useRef<number>(0);
  const questionStartTimeRef = useRef<number>(Date.now());
  const slowCheckTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const simulationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load questions (restore from cache or sample)
  useEffect(() => {
    const hasExplicitState = location.state?.questionCount || location.state?.sessionSeed;
    if (!hasExplicitState) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.questions && parsed.questions.length > 0) {
            setQuestions(parsed.questions);
            setCurrentIndex(parsed.currentIndex || 0);
            setAnswers(new Map(Object.entries(parsed.answers || {})));
            setTimings(new Map(Object.entries(parsed.timings || {})));
            if (parsed.revealedHidden) setRevealedHidden(new Set(parsed.revealedHidden));
            return;
          }
        } catch {}
      }
    }
    const sampled = sampleQuestions(Math.min(questionCount, QUESTION_LIBRARY.length), sessionSeed);
    setQuestions(sampled);
  }, [questionCount, sessionSeed, location.state]);

  // Persist progress
  useEffect(() => {
    if (questions.length === 0) return;
    const payload = {
      questions,
      currentIndex,
      answers: Object.fromEntries(answers),
      timings: Object.fromEntries(timings),
      sessionSeed,
      startTime,
      questionCount,
      revealedHidden: Array.from(revealedHidden)
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [questions, currentIndex, answers, timings, sessionSeed, startTime, questionCount, revealedHidden]);

  // Slow check timer
  useEffect(() => {
    questionStartTimeRef.current = Date.now();
    setSlowToast(false);
    if (slowCheckTimerRef.current) clearTimeout(slowCheckTimerRef.current);
    slowCheckTimerRef.current = setTimeout(() => {
      const currentAnswer = answers.get(questions[currentIndex]?.id || '');
      if (!currentAnswer && questions[currentIndex]) setSlowToast(true);
    }, 30000);
    return () => { if (slowCheckTimerRef.current) clearTimeout(slowCheckTimerRef.current); };
  }, [currentIndex, questions, answers]);

  // Random simulation engine
  useEffect(() => {
    if (!isSimulatingRandom) return;
    const q = questions[currentIndex];
    if (!q) {
      setIsSimulatingRandom(false);
      return;
    }
    const alreadyAnswered = answers.get(q.id);
    if (alreadyAnswered && alreadyAnswered.optionId) {
      // Already answered, just advance
      simulationTimerRef.current = setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          setIsSimulatingRandom(false);
          finishTest(false, true);
        }
      }, 400);
      return;
    }
    // Randomly answer current question
    const newAnswers = new Map(answers);
    if (q.type === 'single' && q.options && q.options.length > 0) {
      const idx = Math.floor(Math.random() * q.options.length);
      newAnswers.set(q.id, { optionId: q.options[idx].id });
    } else if (q.type === 'multi' && q.options && q.options.length > 0) {
      const num = Math.floor(Math.random() * q.options.length) + 1;
      const shuffled = [...q.options].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, num);
      newAnswers.set(q.id, { optionId: selected.map(s => s.id).join(',') });
    }
    setAnswers(newAnswers);
    simulationTimerRef.current = setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsSimulatingRandom(false);
        finishTest(false, true);
      }
    }, 700);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSimulatingRandom, currentIndex, questions]);

  const currentQuestion = questions[currentIndex];
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;
  const chaosValue = Math.min(100, (currentIndex / questions.length) * 100);

  const stopSimulation = () => {
    if (simulationTimerRef.current) clearTimeout(simulationTimerRef.current);
    setIsSimulatingRandom(false);
  };

  const checkFastClick = () => {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTimeRef.current;
    lastClickTimeRef.current = now;
    if (timeSinceLastClick < 1500) {
      fastClickCountRef.current += 1;
      if (fastClickCountRef.current >= 5) {
        setFastClickToast(true);
        fastClickCountRef.current = 0;
      }
    } else {
      fastClickCountRef.current = 0;
    }
  };

  const autoAdvance = useCallback(() => {
    const timeSpent = Date.now() - startTime;
    const newTimings = new Map(timings);
    if (currentQuestion) newTimings.set(currentQuestion.id, timeSpent);
    setTimings(newTimings);
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else finishTest(false, false);
    }, 250);
  }, [currentIndex, questions.length, currentQuestion, startTime, timings]);

  const handleSingleSelect = (optionId: string) => {
    stopSimulation();
    checkFastClick();
    if (!currentQuestion) return;
    const newAnswers = new Map(answers);
    newAnswers.set(currentQuestion.id, { optionId });
    setAnswers(newAnswers);
    autoAdvance();
  };

  const handleMultiSelect = (optionId: string) => {
    stopSimulation();
    checkFastClick();
    if (!currentQuestion) return;
    const newAnswers = new Map(answers);
    const current = newAnswers.get(currentQuestion.id);
    let selectedIds = current ? current.optionId.split(',').filter(Boolean) : [];
    if (selectedIds.includes(optionId)) selectedIds = selectedIds.filter(id => id !== optionId);
    else selectedIds.push(optionId);
    newAnswers.set(currentQuestion.id, { optionId: selectedIds.join(',') });
    setAnswers(newAnswers);
  };

  const handleMultiConfirm = () => {
    stopSimulation();
    checkFastClick();
    const answer = answers.get(currentQuestion?.id || '');
    if (!answer || !answer.optionId) return;
    autoAdvance();
  };

  const handleNext = () => {
    stopSimulation();
    checkFastClick();
    const timeSpent = Date.now() - startTime;
    const newTimings = new Map(timings);
    if (currentQuestion) newTimings.set(currentQuestion.id, timeSpent);
    setTimings(newTimings);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else finishTest(false, false);
  };

  const handlePrev = () => {
    stopSimulation();
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const handleSkip = () => {
    stopSimulation();
    const remaining = questions.length - currentIndex;
    const answered = answers.size;
    const message = '确定要跳过剩余 ' + remaining + ' 道题目？\n\n将以你已答的 ' + answered + ' 题作为依据进行分析。';
    if (typeof window !== 'undefined' && window.confirm) {
      if (window.confirm(message)) finishTest(true, false);
    }
  };

  const handleDirectResult = () => {
    stopSimulation();
    const answered = answers.size;
    if (answered === 0) {
      alert('至少答一道题才能看结果吧？');
      return;
    }
    if (typeof window !== 'undefined' && window.confirm) {
      const msg = `已答 ${answered} / ${questions.length} 题，直接查看结果？\n未答题目将视为跳过。`;
      if (window.confirm(msg)) finishTest(false, false);
    }
  };

  const handleRandom = () => {
    stopSimulation();
    const remainingCount = questions.length - currentIndex;
    const message = '系统将模拟你的操作，逐题随机选择剩余 ' + remainingCount + ' 道题的答案。\n\n完成后获得【混沌人格】判定。\n\n是否继续？';
    if (typeof window !== 'undefined' && window.confirm) {
      if (!window.confirm(message)) return;
      setIsSimulatingRandom(true);
    }
  };

  const handleRandomCurrent = () => {
    stopSimulation();
    if (!currentQuestion) return;
    const newAnswers = new Map(answers);
    if (currentQuestion.type === 'single' && currentQuestion.options && currentQuestion.options.length > 0) {
      const randomIndex = Math.floor(Math.random() * currentQuestion.options.length);
      newAnswers.set(currentQuestion.id, { optionId: currentQuestion.options[randomIndex].id });
    } else if (currentQuestion.type === 'multi' && currentQuestion.options && currentQuestion.options.length > 0) {
      const num = Math.floor(Math.random() * currentQuestion.options.length) + 1;
      const shuffled = [...currentQuestion.options].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, num);
      newAnswers.set(currentQuestion.id, { optionId: selected.map(s => s.id).join(',') });
    }
    setAnswers(newAnswers);
    setSlowToast(false);
    autoAdvance();
  };

  const finishTest = (isRushed: boolean, isRandom: boolean) => {
    localStorage.removeItem(STORAGE_KEY);
    const session = {
      totalQuestions: questions.length, answered: answers.size, answers, timings, startTime, isRushed, isRandom,
      contradictions: [], consistencyStreak: 0, scores: {} as Record<SBTITypeCode, number>, lastAnswerDirection: null
    };
    let result;
    if (isRushed && answers.size / questions.length < 0.5) result = generateRushiResult(answers.size, questions.length);
    else {
      result = calculateResult(session, questions);
      if (isRandom) result = generateRandomResult(result);
    }
    result.sessionSeed = sessionSeed;
    navigate('/result', { state: { result } });
  };

  const canProceed = () => {
    if (!currentQuestion) return false;
    const answer = answers.get(currentQuestion.id);
    if (!answer) return false;
    if (currentQuestion.type === 'multi') return answer.optionId && answer.optionId.length > 0;
    return !!answer.optionId;
  };

  const currentAnswer = answers.get(currentQuestion?.id || '');

  if (!currentQuestion) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full neu-concave border-2 border-[var(--neu-bg)] border-t-[var(--neu-text-soft)] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12 px-4">
      {/* Top progress */}
      <div className="max-w-2xl mx-auto mt-4 mb-6">
        <div className="neu-flat p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-[var(--neu-text-soft)]">{currentIndex + 1} / {questions.length}</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-[var(--neu-text)]">稳定度: <span className={chaosValue > 80 ? 'text-rose-500 font-bold' : 'font-bold'}>{Math.round(100 - chaosValue)}%</span></span>
              <button onClick={() => setShowStabilityTip(!showStabilityTip)} className="p-1 rounded-full neu-flat hover:shadow-none active:scale-95 transition-transform">
                <HelpCircle className="w-4 h-4 text-[var(--neu-text-soft)]" />
              </button>
            </div>
          </div>
          <div className="h-3 rounded-full neu-concave overflow-hidden p-0.5">
            <div className="h-full rounded-full neu-convex transition-all" style={{ width: `${progress}%` }} />
          </div>
          {showStabilityTip && (
            <p className="text-xs text-[var(--neu-text-soft)] mt-3 neu-pressed p-3 rounded-xl">
              反映答题冷静程度，越低越接近真实自我
            </p>
          )}
        </div>
      </div>

      {/* Simulation banner */}
      {isSimulatingRandom && (
        <div className="max-w-2xl mx-auto mb-4">
          <div className="p-4 rounded-xl neu-pressed border-l-4 border-l-fuchsia-500 flex items-center justify-between">
            <div className="flex items-center gap-2 text-fuchsia-700">
              <Dice5 className="w-5 h-5 animate-spin" />
              <span className="text-sm font-semibold">正在混沌选择中…</span>
            </div>
            <button onClick={stopSimulation} className="px-3 py-1.5 rounded-lg neu-convex text-xs font-semibold text-[var(--neu-text)]">
              停止并查看结果
            </button>
          </div>
        </div>
      )}

      {/* Inline Toasts */}
      <div className="max-w-2xl mx-auto space-y-4 mb-6">
        {fastClickToast && (
          <InlineToast
            type="warning"
            message="检测到您答题速度过快，已失去耐心？可以点击「烦了爷不玩了」直接分析已答题目，或「一键乱选」随机完成剩余题目。"
            onAction={() => { setFastClickToast(false); handleSkip(); }}
            actionText="烦了，爷不玩了"
            onClose={() => setFastClickToast(false)}
          />
        )}
        {slowToast && (
          <InlineToast
            type="info"
            message="您在这题停留较久，是否需要随机选择本题答案？"
            onAction={handleRandomCurrent}
            actionText="随机选择本题"
            onClose={() => setSlowToast(false)}
          />
        )}
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Question card */}
        <div className="neu-flat p-5 sm:p-6">
          <p className="text-xs text-[var(--neu-text-soft)] mb-2 font-semibold tracking-wide uppercase">{getQuestionTypeDesc(currentQuestion.type)}</p>
          <h2 className="text-base sm:text-lg font-bold text-[var(--neu-text)] leading-relaxed">
            {currentQuestion.text}
          </h2>
          {currentQuestion.hint && <p className="text-sm text-[var(--neu-text-soft)] mt-2">{currentQuestion.hint}</p>}
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.type === 'single' && currentQuestion.options?.filter(o => !o.hidden || revealedHidden.has(currentQuestion.id)).map((option) => {
            const active = currentAnswer?.optionId === option.id;
            return (
              <button
                key={option.id}
                disabled={isSimulatingRandom}
                onClick={() => handleSingleSelect(option.id)}
                className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all disabled:opacity-60 ${
                  active
                    ? 'neu-pressed text-[var(--neu-text)]'
                    : option.hidden
                      ? 'neu-flat neu-flat-hover neu-flat-active text-[var(--neu-text)]'
                      : 'neu-flat neu-flat-hover neu-flat-active text-[var(--neu-text)]'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  active ? 'border-[var(--neu-text)] bg-[var(--neu-text)]' : 'border-[var(--neu-text-soft)]'
                }`}>
                  {active && <div className="w-2 h-2 bg-[var(--neu-bg)] rounded-full" />}
                </div>
                <span className={`text-sm ${option.hidden ? 'text-[var(--neu-text)]' : 'text-[var(--neu-text)]'}`}>{option.text}</span>
              </button>
            );
          })}

          {currentQuestion.type === 'multi' && (
            <>
              {currentQuestion.options?.filter(o => !o.hidden || revealedHidden.has(currentQuestion.id)).map((option) => {
                const selectedIds = currentAnswer?.optionId?.split(',') || [];
                const isSelected = selectedIds.includes(option.id);
                return (
                  <button
                    key={option.id}
                    disabled={isSimulatingRandom}
                    onClick={() => handleMultiSelect(option.id)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all disabled:opacity-60 ${
                      isSelected ? 'neu-pressed text-[var(--neu-text)]' : 'neu-flat neu-flat-hover neu-flat-active text-[var(--neu-text)]'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      isSelected ? 'border-[var(--neu-text)] bg-[var(--neu-text)]' : 'border-[var(--neu-text-soft)]'
                    }`}>
                      {isSelected && <svg className="w-3.5 h-3.5 text-[var(--neu-bg)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="text-sm">{option.text}</span>
                  </button>
                );
              })}
              <button
                onClick={handleMultiConfirm}
                disabled={!canProceed() || isSimulatingRandom}
                className="w-full h-12 rounded-xl neu-convex neu-convex-hover neu-convex-active disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-[var(--neu-text)]"
              >
                确认选择
              </button>
            </>
          )}

          {currentQuestion.options && currentQuestion.options.some(o => o.hidden) && !revealedHidden.has(currentQuestion.id) && (
            <button
              onClick={() => { const newSet = new Set(revealedHidden); newSet.add(currentQuestion.id); setRevealedHidden(newSet); }}
              className="w-full py-3 text-sm text-[var(--neu-text)] neu-flat neu-flat-hover neu-flat-active rounded-xl"
            >
              🌱 解锁植物系隐藏选项
            </button>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 flex-wrap py-2">
          {questions.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex ? 'bg-[var(--neu-text)] w-4' : idx < currentIndex ? 'bg-[var(--neu-text-soft)] w-1.5' : 'bg-[var(--neu-text-soft)]/30 w-1.5'
            }`} />
          ))}
        </div>

        {/* Nav */}
        <div className="flex justify-center gap-3 py-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0 || isSimulatingRandom}
            className="flex items-center gap-1 px-5 py-2.5 rounded-xl neu-flat neu-flat-hover neu-flat-active disabled:opacity-40 disabled:cursor-not-allowed text-sm font-medium text-[var(--neu-text)]"
          >
            <ChevronLeft className="w-4 h-4" />上一题
          </button>
          <button
            onClick={handleNext}
            disabled={!canProceed() || isSimulatingRandom}
            className="flex items-center gap-1 px-5 py-2.5 rounded-xl neu-convex neu-convex-hover neu-convex-active disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold text-[var(--neu-text)]"
          >
            {currentIndex === questions.length - 1 ? '查看结果' : '下一题'}<ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleDirectResult}
            disabled={isSimulatingRandom || answers.size === 0}
            className="flex items-center gap-1 px-5 py-2.5 rounded-xl neu-convex neu-convex-hover neu-convex-active disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            <CheckCircle2 className="w-4 h-4" />直接看结果
          </button>
        </div>

        {/* Special actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div className="neu-flat p-4">
            <div className="flex items-center gap-2 flex-wrap">
              <button onClick={handleSkip} disabled={isSimulatingRandom} className="flex items-center gap-1 px-4 py-2 rounded-xl neu-convex text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors disabled:opacity-50">
                <SkipForward className="w-4 h-4" />
                烦了，爷不玩了
              </button>
              <button onClick={() => setShowSkipTip(!showSkipTip)} className="p-2 rounded-full neu-flat hover:shadow-none active:scale-95 transition-transform">
                <HelpCircle className="w-4 h-4 text-[var(--neu-text-soft)]" />
              </button>
            </div>
            {showSkipTip && (
              <p className="text-xs text-[var(--neu-text-soft)] mt-3 neu-pressed p-3 rounded-xl">以当前已答的 {answers.size} 题作为依据进行分析，获得【急躁者-RUSHI】判定</p>
            )}
          </div>

          <div className="neu-flat p-4">
            <div className="flex items-center gap-2 flex-wrap">
              <button onClick={handleRandom} disabled={isSimulatingRandom} className="flex items-center gap-1 px-4 py-2 rounded-xl neu-convex text-sm font-semibold text-fuchsia-600 hover:text-fuchsia-700 transition-colors disabled:opacity-50">
                <Dice5 className="w-4 h-4" />
                一键乱选
              </button>
              <button onClick={() => setShowRandomTip(!showRandomTip)} className="p-2 rounded-full neu-flat hover:shadow-none active:scale-95 transition-transform">
                <HelpCircle className="w-4 h-4 text-[var(--neu-text-soft)]" />
              </button>
            </div>
            {showRandomTip && (
              <p className="text-xs text-[var(--neu-text-soft)] mt-3 neu-pressed p-3 rounded-xl">逐题随机选择剩余 {questions.length - currentIndex} 道题的答案，获得【混沌人格】判定</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
