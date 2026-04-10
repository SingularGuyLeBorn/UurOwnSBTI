import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, SkipForward, Dice5, HelpCircle, AlertCircle, Clock } from 'lucide-react';
import type { Question, SBTITypeCode } from '@/types';
import { QUESTION_LIBRARY, sampleQuestions } from '@/data/questions';
import { calculateResult, generateRushiResult, generateRandomResult } from '@/logic/scoring';

interface Answer {
  optionId: string;
  values?: string[];
}

// Toast 组件
function Toast({ message, type, onAction, actionText }: { message: string; type: 'warning' | 'info'; onAction?: () => void; actionText?: string }) {
  return (
    <div className={`fixed top-20 left-4 right-4 z-50 max-w-md mx-auto p-4 rounded-lg shadow-lg animate-fadeIn ${
      type === 'warning' ? 'bg-amber-50 border border-amber-200' : 'bg-blue-50 border border-blue-200'
    }`}>
      <div className="flex items-start gap-3">
        {type === 'warning' ? <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" /> : <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />}
        <div className="flex-1">
          <p className={`text-sm ${type === 'warning' ? 'text-amber-800' : 'text-blue-800'}`}>{message}</p>
          {onAction && actionText && (
            <button onClick={onAction} className={`mt-2 text-xs font-medium underline ${type === 'warning' ? 'text-amber-600' : 'text-blue-600'}`}>
              {actionText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// 获取题目类型描述（亚文化风格）
function getQuestionTypeDesc(type: string): string {
  const singleHints = [
    '只能选一个，别贪心',
    '单选，别想太多',
    '选一个，选完赶紧走',
    '单选题，别整那些虚的',
    '选一个，别纠结了'
  ];
  const multiHints = [
    '这题可以多选，全选也行',
    '多选，想选几个选几个',
    '这题不限制，随便选',
    '多选，别漏了你觉得对的',
    '可以多选，但别全选啊喂'
  ];
  const fillHints = [
    '每个空选一个，拼成你的答案',
    '填空题，像做对联一样',
    '每个位置选一个词',
    '填空，选完就知道你是啥人了',
    '像填空题一样，每个空选一个'
  ];
  
  switch (type) {
    case 'single':
      return singleHints[Math.floor(Math.random() * singleHints.length)];
    case 'multi':
      return multiHints[Math.floor(Math.random() * multiHints.length)];
    case 'fill':
      return fillHints[Math.floor(Math.random() * fillHints.length)];
    default:
      return '';
  }
}

export default function QuizPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const questionCount = location.state?.questionCount || 15;
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, Answer>>(new Map());
  const [startTime] = useState<number>(Date.now());
  const [timings, setTimings] = useState<Map<string, number>>(new Map());
  const [fillValues, setFillValues] = useState<string[]>([]);
  const [showStabilityTip, setShowStabilityTip] = useState(false);
  const [showSkipTip, setShowSkipTip] = useState(false);
  const [showRandomTip, setShowRandomTip] = useState(false);
  
  // 智能提示状态
  const [fastClickToast, setFastClickToast] = useState(false);
  const [slowToast, setSlowToast] = useState(false);
  
  // 用于检测点击过快
  const lastClickTimeRef = useRef<number>(0);
  const fastClickCountRef = useRef<number>(0);
  
  // 用于检测停留过久
  const questionStartTimeRef = useRef<number>(Date.now());
  const slowCheckTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 初始化题目
  useEffect(() => {
    const sampled = sampleQuestions(Math.min(questionCount, QUESTION_LIBRARY.length));
    setQuestions(sampled);
  }, [questionCount]);

  // 题目切换时重置计时器
  useEffect(() => {
    questionStartTimeRef.current = Date.now();
    setFillValues([]);
    setSlowToast(false);
    
    if (slowCheckTimerRef.current) {
      clearTimeout(slowCheckTimerRef.current);
    }
    
    // 30秒后检查是否停留过久
    slowCheckTimerRef.current = setTimeout(() => {
      const currentAnswer = answers.get(questions[currentIndex]?.id || '');
      if (!currentAnswer && questions[currentIndex]) {
        setSlowToast(true);
      }
    }, 30000);
    
    return () => {
      if (slowCheckTimerRef.current) {
        clearTimeout(slowCheckTimerRef.current);
      }
    };
  }, [currentIndex, questions, answers]);

  const currentQuestion = questions[currentIndex];
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;
  const chaosValue = Math.min(100, (currentIndex / questions.length) * 100);

  // 检测点击过快（连续5次以上快速选择）
  const checkFastClick = () => {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTimeRef.current;
    lastClickTimeRef.current = now;
    
    // 如果点击间隔小于1.5秒，计数+1
    if (timeSinceLastClick < 1500) {
      fastClickCountRef.current += 1;
      
      // 连续快速点击5次以上，显示提示
      if (fastClickCountRef.current >= 5) {
        setFastClickToast(true);
        fastClickCountRef.current = 0;
      }
    } else {
      // 点击间隔正常，重置计数
      fastClickCountRef.current = 0;
    }
  };

  // 自动跳转
  const autoAdvance = useCallback(() => {
    const timeSpent = Date.now() - startTime;
    const newTimings = new Map(timings);
    if (currentQuestion) {
      newTimings.set(currentQuestion.id, timeSpent);
      setTimings(newTimings);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setFillValues([]);
      } else {
        finishTest(false, false);
      }
    }, 250);
  }, [currentIndex, questions.length, currentQuestion, startTime, timings]);

  // 单选
  const handleSingleSelect = (optionId: string) => {
    checkFastClick();
    if (!currentQuestion) return;
    const newAnswers = new Map(answers);
    newAnswers.set(currentQuestion.id, { optionId });
    setAnswers(newAnswers);
    autoAdvance();
  };

  // 多选
  const handleMultiSelect = (optionId: string) => {
    checkFastClick();
    if (!currentQuestion) return;
    const newAnswers = new Map(answers);
    const current = newAnswers.get(currentQuestion.id);
    let selectedIds = current ? current.optionId.split(',').filter(Boolean) : [];
    
    if (selectedIds.includes(optionId)) {
      selectedIds = selectedIds.filter(id => id !== optionId);
    } else {
      selectedIds.push(optionId);
    }
    
    newAnswers.set(currentQuestion.id, { optionId: selectedIds.join(',') });
    setAnswers(newAnswers);
  };

  // 多选确认
  const handleMultiConfirm = () => {
    checkFastClick();
    const answer = answers.get(currentQuestion?.id || '');
    if (!answer || !answer.optionId) return;
    autoAdvance();
  };

  // 填空
  const handleFillSelect = (blankIndex: number, value: string) => {
    checkFastClick();
    if (!currentQuestion) return;
    const newValues = [...fillValues];
    newValues[blankIndex] = value;
    setFillValues(newValues);
    
    const newAnswers = new Map(answers);
    newAnswers.set(currentQuestion.id, { optionId: 'fill', values: newValues });
    setAnswers(newAnswers);
    
    if (currentQuestion.blanks && newValues.filter(Boolean).length === currentQuestion.blanks.length) {
      autoAdvance();
    }
  };

  // 下一题
  const handleNext = () => {
    checkFastClick();
    const timeSpent = Date.now() - startTime;
    const newTimings = new Map(timings);
    if (currentQuestion) {
      newTimings.set(currentQuestion.id, timeSpent);
      setTimings(newTimings);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setFillValues([]);
    } else {
      finishTest(false, false);
    }
  };

  // 上一题
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setFillValues([]);
    }
  };

  // 跳过剩余 - 直接以当前已选择的作为依据进行分析
  const handleSkip = () => {
    const remaining = questions.length - currentIndex;
    const answered = answers.size;
    const message = '确定要跳过剩余 ' + remaining + ' 道题目？\n\n将以你已答的 ' + answered + ' 题作为依据进行分析。';
    
    if (typeof window !== 'undefined' && window.confirm) {
      const ok = window.confirm(message);
      if (ok) {
        finishTest(true, false);
      }
    }
  };

  // 一键乱选 - 随机完成后面的所有题
  const handleRandom = () => {
    const remainingCount = questions.length - currentIndex;
    const message = '系统将随机选择剩余 ' + remainingCount + ' 道题的答案。\n\n完成后获得【混沌人格】判定。\n\n是否继续？';
    
    if (typeof window !== 'undefined' && window.confirm) {
      const ok = window.confirm(message);
      
      if (!ok) return;
      
      const newAnswers = new Map(answers);
      
      for (let i = currentIndex; i < questions.length; i++) {
        const q = questions[i];
        if (q.type === 'single' && q.options && q.options.length > 0) {
          const randomIndex = Math.floor(Math.random() * q.options.length);
          newAnswers.set(q.id, { optionId: q.options[randomIndex].id });
        } else if (q.type === 'multi' && q.options && q.options.length > 0) {
          const num = Math.floor(Math.random() * q.options.length) + 1;
          const shuffled = [...q.options].sort(() => Math.random() - 0.5);
          const selected = shuffled.slice(0, num);
          newAnswers.set(q.id, { optionId: selected.map(s => s.id).join(',') });
        } else if (q.type === 'fill' && q.blanks) {
          const values = q.blanks.map(blank => {
            const randomIndex = Math.floor(Math.random() * blank.length);
            return blank[randomIndex].value;
          });
          newAnswers.set(q.id, { optionId: 'fill', values });
        }
      }
      
      setAnswers(newAnswers);
      finishTest(false, true);
    }
  };

  // 随机选择当前题目
  const handleRandomCurrent = () => {
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
    } else if (currentQuestion.type === 'fill' && currentQuestion.blanks) {
      const values = currentQuestion.blanks.map(blank => {
        const randomIndex = Math.floor(Math.random() * blank.length);
        return blank[randomIndex].value;
      });
      newAnswers.set(currentQuestion.id, { optionId: 'fill', values });
    }
    
    setAnswers(newAnswers);
    setSlowToast(false);
    autoAdvance();
  };

  // 完成测试
  const finishTest = (isRushed: boolean, isRandom: boolean) => {
    const session = {
      totalQuestions: questions.length,
      answered: answers.size,
      answers,
      timings,
      startTime,
      isRushed,
      isRandom,
      contradictions: [],
      consistencyStreak: 0,
      scores: {} as Record<SBTITypeCode, number>,
      lastAnswerDirection: null
    };

    let result;
    if (isRushed && answers.size / questions.length < 0.5) {
      result = generateRushiResult(answers.size, questions.length);
    } else {
      result = calculateResult(session, questions);
      if (isRandom) {
        result = generateRandomResult(result);
      }
    }

    navigate('/result', { state: { result } });
  };

  // 检查能否继续
  const canProceed = () => {
    if (!currentQuestion) return false;
    const answer = answers.get(currentQuestion.id);
    if (!answer) return false;
    
    if (currentQuestion.type === 'fill') {
      return answer.values && answer.values.length === currentQuestion.blanks?.length;
    }
    if (currentQuestion.type === 'multi') {
      return answer.optionId && answer.optionId.length > 0;
    }
    return !!answer.optionId;
  };

  const currentAnswer = answers.get(currentQuestion?.id || '');

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Toast 提示 */}
      {fastClickToast && (
        <Toast 
          type="warning" 
          message="检测到您答题速度过快，已失去耐心？可以点击「烦了爷不玩了」直接分析已答题目，或「一键乱选」随机完成剩余题目。"
          onAction={() => {
            setFastClickToast(false);
            handleSkip();
          }}
          actionText="烦了，爷不玩了"
        />
      )}
      {slowToast && (
        <Toast 
          type="info" 
          message="您在这题停留较久，是否需要随机选择本题答案？"
          onAction={handleRandomCurrent}
          actionText="随机选择本题"
        />
      )}

      {/* 顶部进度 */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{currentIndex + 1} / {questions.length}</span>
            <div className="flex items-center gap-1">
              <span className="text-sm">稳定度: <span className={chaosValue > 80 ? 'text-purple-600 font-medium' : 'text-gray-700'}>{Math.round(100 - chaosValue)}%</span></span>
              <button onClick={() => setShowStabilityTip(!showStabilityTip)} className="p-1">
                <HelpCircle className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full bg-blue-500 transition-all`} style={{ width: `${progress}%` }} />
          </div>
          {showStabilityTip && (
            <p className="text-xs text-gray-500 mt-2 bg-gray-100 p-2 rounded">
              反映答题冷静程度，越低越接近真实自我
            </p>
          )}
        </div>
      </div>

      {/* 内容区 */}
      <div className="px-4 py-4 max-w-xl mx-auto">
        {/* 题目 */}
        <Card className="mb-4 border border-gray-200">
          <CardContent className="p-4">
            {/* 题目类型提示 */}
            <p className="text-xs text-blue-600 mb-2 font-medium">
              {getQuestionTypeDesc(currentQuestion.type)}
            </p>
            <h2 className="text-base sm:text-lg font-medium text-gray-800">{currentQuestion.text}</h2>
            {currentQuestion.hint && <p className="text-sm text-gray-500 mt-1">{currentQuestion.hint}</p>}
          </CardContent>
        </Card>

        {/* 选项 */}
        <div className="space-y-2 mb-6">
          {/* 单选 */}
          {currentQuestion.type === 'single' && currentQuestion.options?.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSingleSelect(option.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 text-left transition-colors ${
                currentAnswer?.optionId === option.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                currentAnswer?.optionId === option.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
              }`}>
                {currentAnswer?.optionId === option.id && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
              <span className="text-sm text-gray-700">{option.text}</span>
            </button>
          ))}

          {/* 多选 */}
          {currentQuestion.type === 'multi' && (
            <>
              {currentQuestion.options?.map((option) => {
                const selectedIds = currentAnswer?.optionId?.split(',') || [];
                const isSelected = selectedIds.includes(option.id);
                return (
                  <button
                    key={option.id}
                    onClick={() => handleMultiSelect(option.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 text-left transition-colors ${
                      isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                      isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                    }`}>
                      {isSelected && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="text-sm text-gray-700">{option.text}</span>
                  </button>
                );
              })}
              <Button onClick={handleMultiConfirm} disabled={!canProceed()} className="w-full bg-blue-500 hover:bg-blue-600">
                确认选择
              </Button>
            </>
          )}

          {/* 填空 */}
          {currentQuestion.type === 'fill' && currentQuestion.blanks?.map((blank, idx) => (
            <div key={idx} className="flex flex-wrap gap-2">
              {blank.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleFillSelect(idx, opt.value)}
                  className={`px-3 py-2 rounded-lg border-2 text-sm transition-colors ${
                    fillValues[idx] === opt.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* 进度点 */}
        <div className="flex justify-center gap-1 mb-4 flex-wrap">
          {questions.map((_, idx) => (
            <div key={idx} className={`w-1.5 h-1.5 rounded-full ${
              idx === currentIndex ? 'bg-blue-500 w-3' : idx < currentIndex ? 'bg-blue-300' : 'bg-gray-200'
            }`} />
          ))}
        </div>

        {/* 导航按钮 */}
        <div className="flex justify-center gap-3 mb-6">
          <Button variant="outline" onClick={handlePrev} disabled={currentIndex === 0} size="sm">
            <ChevronLeft className="w-4 h-4 mr-1" />上一题
          </Button>
          <Button onClick={handleNext} disabled={!canProceed()} size="sm" className="bg-gray-900 hover:bg-gray-800">
            {currentIndex === questions.length - 1 ? '查看结果' : '下一题'}<ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* 特殊按钮 - 使用原生button确保点击有效 */}
        <div className="space-y-3 border-t border-gray-200 pt-4">
          {/* 跳过 */}
          <div className="bg-red-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleSkip}
                className="flex items-center gap-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md transition-colors"
              >
                <SkipForward className="w-4 h-4" />
                烦了，爷不玩了
              </button>
              <button onClick={() => setShowSkipTip(!showSkipTip)} className="p-1">
                <HelpCircle className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            {showSkipTip && (
              <p className="text-xs text-gray-600 mt-2">
                以当前已答的 {answers.size} 题作为依据进行分析，获得【急躁者-RUSHI】判定
              </p>
            )}
          </div>

          {/* 乱选 */}
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleRandom}
                className="flex items-center gap-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-md transition-colors"
              >
                <Dice5 className="w-4 h-4" />
                一键乱选
              </button>
              <button onClick={() => setShowRandomTip(!showRandomTip)} className="p-1">
                <HelpCircle className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            {showRandomTip && (
              <p className="text-xs text-gray-600 mt-2">
                随机选择剩余 {questions.length - currentIndex} 道题的答案，获得【混沌人格】判定
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
