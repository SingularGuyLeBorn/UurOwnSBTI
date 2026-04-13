import { useEffect, useState, useRef, type RefObject } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RefreshCw, Share2, Activity, Image as ImageIcon, Mail } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import type { TestResult, SBTITypeCode } from '@/types';
import { TYPE_LIBRARY } from '@/data/types';
import { generateFullRoast, getConfidenceLabel, getConfidenceDescription, getRandomConfidenceDescription } from '@/logic/copywriter';
import ShareCard from '@/components/ShareCard';

function useCountUp(end: number, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return value;
}

function useTilt<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -12;
      const ry = ((x - cx) / cx) * 12;
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      const shine = el.querySelector('.tilt-shine') as HTMLElement | null;
      if (shine) {
        shine.style.backgroundPosition = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
      }
    };
    const handleLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);
  return ref;
}

export default function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result as TestResult | undefined;
  const [showShareCard, setShowShareCard] = useState(false);
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [activeSource, setActiveSource] = useState<SBTITypeCode | null>(null);
  const confidencePct = result ? Math.round(result.confidence * 100) : 0;
  const animatedConfidence = useCountUp(confidencePct, 1500);

  useEffect(() => {
    if (!result) { navigate('/'); return; }
  }, [result, navigate]);

  if (!result) return null;

  const isRandom = result.isRandom;
  const hybrid = result.hybridType;

  // Main displayed identity
  const mainCode = isRandom && hybrid ? hybrid.code : result.primaryType;
  const mainName = isRandom && hybrid ? hybrid.name : TYPE_LIBRARY[result.primaryType].name;
  const mainEnglish = isRandom && hybrid ? hybrid.englishName : TYPE_LIBRARY[result.primaryType].englishName;
  const mainSvg = isRandom && hybrid ? hybrid.svgDescription : TYPE_LIBRARY[result.primaryType].svgDescription;
  const mainKeywords = isRandom && hybrid ? hybrid.keywords : TYPE_LIBRARY[result.primaryType].keywords;
  const mainRoast = isRandom && hybrid ? hybrid.roast : generateFullRoast(result);

  const confidenceLabel = getConfidenceLabel(result.confidence);
  const confidenceDesc = isRandom
    ? getRandomConfidenceDescription(result.confidence)
    : getConfidenceDescription(result.confidence);
  const topDimensions = result.sortedTypes.slice(0, 5);
  const maxScore = topDimensions[0]?.score || 1;

  const handleRestart = () => navigate('/');
  const handleRetrySameSeed = () => {
    navigate('/quiz', { state: { questionCount: result.totalQuestions || 15, sessionSeed: result.sessionSeed } });
  };

  const handleSendEmail = () => {
    if (!email || !email.includes('@')) {
      alert('请输入有效的邮箱地址');
      return;
    }
    const subject = encodeURIComponent(`我的 SBTI 测试结果：${mainCode}-${mainName}`);
    const bodyLines = [
      `你的 SBTI 类型：${mainCode} - ${mainName}`,
      `置信度：${confidencePct}%（${confidenceLabel}）`,
      ``,
      `【分析结果】`,
      mainRoast,
      ``,
      `【维度分析 TOP 5】`,
      ...topDimensions.map(({ type, score }) => `${TYPE_LIBRARY[type].name} (${type})：${score.toFixed(0)}`),
      ``,
      `—— 来自 SBTI-Engine 3.0`,
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setShowEmailDialog(false);
    setEmail('');
  };

  const handleShare = () => {
    const text = `我的SBTI类型是【${mainCode}-${mainName}】，置信度${confidencePct}%！快来测测你是什么贵物~`;
    if (navigator.share) navigator.share({ title: 'SBTI-Engine 3.0', text, url: window.location.href });
    else { navigator.clipboard.writeText(text + ' ' + window.location.href); alert('已复制到剪贴板！'); }
  };

  const toggleSource = (code: SBTITypeCode) => {
    setActiveSource(prev => (prev === code ? null : code));
  };

  const mainCardRef = useTilt<HTMLDivElement>();

  return (
    <div className="min-h-screen px-4 pb-12">
      {showShareCard && result && <ShareCard result={result} onClose={() => setShowShareCard(false)} />}

      <div className="max-w-2xl mx-auto pt-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          {isRandom && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-pressed text-[10px] font-semibold text-rose-500 mb-1">
              <span>🎲</span> 混沌模式 · 三体缝合
            </div>
          )}
          <p className="text-sm text-[var(--neu-text-soft)] tracking-wide">你的 SBTI 类型是</p>
          <div className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-[var(--neu-text)] animate-float">
            {mainCode}
          </div>
          <div className="text-xl sm:text-2xl font-bold text-[var(--neu-text)]">
            {mainName}
          </div>
          {!isRandom && (
            <p className="text-sm text-[var(--neu-text-soft)]">{mainEnglish}</p>
          )}

          <div className="mt-4 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-convex text-sm font-medium text-[var(--neu-text)]">
              <Activity className="w-4 h-4" />
              置信度: {animatedConfidence}% ({confidenceLabel})
            </div>
          </div>
          <div className="text-xs text-[var(--neu-text-soft)] space-y-2 max-w-md mx-auto mt-2">
            {confidenceDesc.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Main SVG Card with Tilt */}
        <div
          ref={mainCardRef}
          className="tilt-card neu-flat p-6 sm:p-10 relative overflow-hidden flex items-center justify-center min-h-[260px]"
        >
          <div className="tilt-shine" />
          <div
            className="w-40 h-40 sm:w-56 sm:h-56"
            style={{ filter: 'drop-shadow(0 10px 20px rgba(163,177,198,0.5))' }}
            dangerouslySetInnerHTML={{ __html: mainSvg }}
          />
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap justify-center gap-2">
          {mainKeywords.map((keyword, index) => (
            <span key={index} className="px-3 py-1.5 text-sm rounded-full neu-pressed text-[var(--neu-text)]">
              {keyword}
            </span>
          ))}
        </div>

        {/* Normal mode: Secondary Personality */}
        {result.secondaryType && !isRandom && (
          <div className="neu-flat p-5 relative overflow-hidden">
            <h3 className="text-sm font-bold text-center text-[var(--neu-text-soft)] mb-4 uppercase tracking-wide">你的副人格</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl neu-convex">
                <p className="text-xs text-[var(--neu-text-soft)] mb-1">主人格</p>
                <div className="text-3xl font-black text-[var(--neu-text)] mb-1">{result.primaryType}</div>
                <div className="text-sm font-medium text-[var(--neu-text)]">{TYPE_LIBRARY[result.primaryType].name}</div>
                <p className="text-xs text-[var(--neu-text-soft)] mt-2">{result.primaryScore.toFixed(0)} 分</p>
              </div>
              <div className="text-center p-4 rounded-xl neu-pressed">
                <p className="text-xs text-[var(--neu-text-soft)] mb-1">副人格</p>
                <div className="text-3xl font-black text-[var(--neu-text)] mb-1">{result.secondaryType}</div>
                <div className="text-sm font-medium text-[var(--neu-text)]">{TYPE_LIBRARY[result.secondaryType].name}</div>
                <p className="text-xs text-[var(--neu-text-soft)] mt-2">{result.secondaryScore.toFixed(0)} 分</p>
              </div>
            </div>
            <p className="text-center text-xs text-[var(--neu-text-soft)] mt-4">
              你处于 {TYPE_LIBRARY[result.primaryType].name} 与 {TYPE_LIBRARY[result.secondaryType].name} 的叠加态，像一台精神分裂的交换机
            </p>
          </div>
        )}

        {/* Random mode: 3-source breakdown */}
        {isRandom && hybrid && (
          <div className="neu-flat p-5 relative overflow-hidden">
            <h3 className="text-sm font-bold text-center text-[var(--neu-text-soft)] mb-4 uppercase tracking-wide">🧬 人格来源 · 三体拆解</h3>
            <div className="grid grid-cols-3 gap-3">
              {hybrid.components.map((comp) => (
                <button
                  key={`${comp.code}-${comp.role}`}
                  onClick={() => toggleSource(comp.code)}
                  className={`text-center p-3 rounded-xl transition-all ${
                    activeSource === comp.code ? 'neu-pressed' : 'neu-convex'
                  }`}
                >
                  <div className="text-[10px] text-[var(--neu-text-soft)] mb-1 truncate">{comp.role}</div>
                  <div className="text-xl font-black text-[var(--neu-text)] mb-0.5">{comp.code}</div>
                  <div className="text-xs font-medium text-[var(--neu-text)] truncate">{comp.name}</div>
                  <div className="w-3 h-3 rounded-full mx-auto mt-2" style={{ backgroundColor: comp.color }} />
                </button>
              ))}
            </div>
            <p className="text-center text-xs text-[var(--neu-text-soft)] mt-4">
              点击卡片展开各来源人格的独立分析
            </p>
          </div>
        )}

        {/* Random mode: active source roast (only one at a time) */}
        {isRandom && hybrid && activeSource && (() => {
          const comp = hybrid.components.find(c => c.code === activeSource);
          if (!comp) return null;
          const roast = hybrid.componentRoasts[comp.code] || '';
          return (
            <div key={`${comp.code}-${comp.role}`} className="neu-flat p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: comp.color }} />
                <h3 className="text-lg font-bold text-[var(--neu-text)]">{comp.role} · {comp.name}</h3>
              </div>
              <p className="text-[var(--neu-text)] leading-relaxed whitespace-pre-wrap font-medium">
                {roast}
              </p>
            </div>
          );
        })()}

        {/* Main Roast */}
        <div className="neu-flat p-5 sm:p-6">
          <h3 className="text-lg font-bold text-[var(--neu-text)] mb-3">
            {isRandom ? '混沌分析' : '分析结果'}
          </h3>
          <p className="text-[var(--neu-text)] leading-relaxed whitespace-pre-wrap font-medium">
            {mainRoast}
          </p>
        </div>

        {/* Dimensions */}
        <div className="neu-flat p-5 sm:p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-[var(--neu-text)]">维度分析</h3>
          </div>
          <div className="flex flex-wrap gap-2 mb-5 text-[10px] sm:text-xs">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full neu-pressed text-[var(--neu-text)]">
              <span className="w-2 h-2 rounded-full neu-convex" /> 主人格
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full neu-pressed text-[var(--neu-text)]">
              <span className="w-2 h-2 rounded-full bg-amber-400/80" /> 副人格
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full neu-pressed text-[var(--neu-text-soft)]">
              <span className="w-2 h-2 rounded-full bg-[var(--neu-text-soft)]/40" /> 其他维度
            </span>
          </div>
          <div className="space-y-5">
            {topDimensions.map(({ type, score }) => {
              const info = TYPE_LIBRARY[type];
              const percentage = (score / maxScore) * 100;
              const isPrimary = type === result.primaryType;
              return (
                <div key={type}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-[var(--neu-text)]">{info.name} ({type})</span>
                    <span className="text-sm font-bold text-[var(--neu-text-soft)]">{score.toFixed(0)}</span>
                  </div>
                  <div className="h-4 rounded-full neu-concave overflow-hidden p-0.5">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${isPrimary ? 'neu-convex' : type === result.secondaryType ? 'bg-amber-400/60' : 'bg-[var(--neu-text-soft)]/40'}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={handleRestart} className="flex-1 min-w-[10rem] flex items-center justify-center gap-2 h-12 rounded-xl neu-convex neu-convex-hover neu-convex-active font-semibold text-[var(--neu-text)]">
            <RefreshCw className="w-5 h-5" />
            重新测试
          </button>
          {result.sessionSeed && (
            <button onClick={handleRetrySameSeed} className="flex-1 min-w-[10rem] flex items-center justify-center gap-2 h-12 rounded-xl neu-convex neu-convex-hover neu-convex-active font-semibold text-[var(--neu-text)]">
              <RefreshCw className="w-5 h-5" />
              复现测试
            </button>
          )}
          <button onClick={handleShare} className="flex-1 min-w-[10rem] flex items-center justify-center gap-2 h-12 rounded-xl neu-flat neu-flat-hover neu-flat-active font-semibold text-[var(--neu-text)]">
            <Share2 className="w-5 h-5" />
            分享结果
          </button>
          <button onClick={() => setShowShareCard(true)} className="flex-1 min-w-[10rem] flex items-center justify-center gap-2 h-12 rounded-xl neu-flat neu-flat-hover neu-flat-active font-semibold text-[var(--neu-text)]">
            <ImageIcon className="w-5 h-5" />
            生成卡片
          </button>
          <button onClick={() => setShowEmailDialog(true)} className="flex-1 min-w-[10rem] flex items-center justify-center gap-2 h-12 rounded-xl neu-flat neu-flat-hover neu-flat-active font-semibold text-[var(--neu-text)]">
            <Mail className="w-5 h-5" />
            发送报告
          </button>
        </div>
      </div>

      {/* Email Dialog */}
      <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>发送测试报告到邮箱</DialogTitle>
            <DialogDescription>
              输入你的邮箱地址，我们将通过邮件客户端为你生成完整的测试报告邮件。
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full h-12 px-4 rounded-xl neu-concave bg-transparent text-[var(--neu-text)] placeholder:text-[var(--neu-text-soft)] outline-none focus:ring-2 focus:ring-[var(--neu-text-soft)]/30"
            />
          </div>
          <DialogFooter className="sm:justify-end gap-2">
            <button
              onClick={() => setShowEmailDialog(false)}
              className="px-4 h-10 rounded-xl neu-convex font-medium text-[var(--neu-text)]"
            >
              取消
            </button>
            <button
              onClick={handleSendEmail}
              className="px-4 h-10 rounded-xl neu-flat font-medium text-[var(--neu-text)]"
            >
              打开邮件客户端
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
