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
import type { TestResult } from '@/types';
import { TYPE_LIBRARY } from '@/data/types';
import { generateFullRoast, getConfidenceLabel, getConfidenceDescription } from '@/logic/copywriter';
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
  const [showPseudo, setShowPseudo] = useState(false);
  const [showShareCard, setShowShareCard] = useState(false);
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [email, setEmail] = useState('');
  const roast = result ? generateFullRoast(result) : '';
  const confidencePct = result ? Math.round(result.confidence * 100) : 0;
  const animatedConfidence = useCountUp(confidencePct, 1500);

  useEffect(() => {
    if (!result) { navigate('/'); return; }
    if (result.isRandom && result.pseudoResult) {
      const timer = setTimeout(() => setShowPseudo(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [result, navigate]);

  if (!result) return null;

  const typeInfo = TYPE_LIBRARY[result.primaryType];
  const confidenceLabel = getConfidenceLabel(result.confidence);
  const confidenceDesc = getConfidenceDescription(result.confidence);
  const topDimensions = result.sortedTypes.slice(0, 5);
  const maxScore = topDimensions[0]?.score || 1;

  const handleRestart = () => navigate('/');

  const handleSendEmail = () => {
    if (!email || !email.includes('@')) {
      alert('请输入有效的邮箱地址');
      return;
    }
    const subject = encodeURIComponent(`我的 SBTI 测试结果：${result.primaryType}-${typeInfo.name}`);
    const bodyLines = [
      `你的 SBTI 类型：${result.primaryType} - ${typeInfo.name}`,
      `置信度：${confidencePct}%（${confidenceLabel}）`,
      ``,
      `【分析结果】`,
      roast,
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
    const text = `我的SBTI类型是【${result.primaryType}-${typeInfo.name}】，置信度${confidencePct}%！快来测测你是什么贵物~`;
    if (navigator.share) navigator.share({ title: 'SBTI-Engine 3.0', text, url: window.location.href });
    else { navigator.clipboard.writeText(text + ' ' + window.location.href); alert('已复制到剪贴板！'); }
  };

  const mainCardRef = useTilt<HTMLDivElement>();

  return (
    <div className="min-h-screen px-4 pb-12">
      {showShareCard && result && <ShareCard result={result} onClose={() => setShowShareCard(false)} />}

      <div className="max-w-2xl mx-auto pt-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-sm text-[var(--neu-text-soft)] tracking-wide">你的 SBTI 类型是</p>
          <div className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-[var(--neu-text)] animate-float">
            {result.primaryType}
          </div>
          <div className="text-xl sm:text-2xl font-bold text-[var(--neu-text)]">
            {typeInfo.name}
          </div>

          <div className="mt-4 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-convex text-sm font-medium text-[var(--neu-text)]">
              <Activity className="w-4 h-4" />
              置信度: {animatedConfidence}% ({confidenceLabel})
            </div>
          </div>
          <p className="text-xs text-[var(--neu-text-soft)]">{confidenceDesc}</p>
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
            dangerouslySetInnerHTML={{ __html: typeInfo.svgDescription }}
          />
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap justify-center gap-2">
          {typeInfo.keywords.map((keyword, index) => (
            <span key={index} className="px-3 py-1.5 text-sm rounded-full neu-pressed text-[var(--neu-text)]">
              {keyword}
            </span>
          ))}
        </div>

        {/* Dual personality */}
        {result.isRandom && result.pseudoResult && showPseudo && (
          <div className="neu-flat p-5 relative overflow-hidden">
            <h3 className="text-lg font-bold text-center text-[var(--neu-text)] mb-4">🎲 一键乱选 · 双生人格</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl neu-pressed">
                <p className="text-xs text-[var(--neu-text-soft)] mb-1">混沌人格</p>
                <div className="text-3xl font-black text-[var(--neu-text)] mb-1">{result.primaryType}</div>
                <div className="text-sm font-medium text-[var(--neu-text)]">{TYPE_LIBRARY[result.primaryType].name}</div>
                <p className="text-xs text-[var(--neu-text-soft)] mt-2">量子叠加态</p>
              </div>
              <div className="text-center p-4 rounded-xl neu-convex">
                <p className="text-xs text-[var(--neu-text-soft)] mb-1">随机选后的人格</p>
                <div className="text-3xl font-black text-[var(--neu-text)] mb-1">{result.pseudoResult}</div>
                <div className="text-sm font-medium text-[var(--neu-text)]">{TYPE_LIBRARY[result.pseudoResult].name}</div>
                <p className="text-xs text-[var(--neu-text-soft)] mt-2">坍缩后的你</p>
              </div>
            </div>
            <p className="text-center text-xs text-[var(--neu-text-soft)] mt-4">
              如果当初认真选，你可能会是「{TYPE_LIBRARY[result.pseudoResult].name}」
            </p>
          </div>
        )}

        {/* Roast */}
        <div className="neu-flat p-5 sm:p-6">
          <h3 className="text-lg font-bold text-[var(--neu-text)] mb-3">分析结果</h3>
          <p className="text-[var(--neu-text)] leading-relaxed whitespace-pre-wrap font-medium">
            {roast}
          </p>
        </div>

        {/* Dimensions */}
        <div className="neu-flat p-5 sm:p-6">
          <h3 className="text-lg font-bold text-[var(--neu-text)] mb-5">维度分析</h3>
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
                      className={`h-full rounded-full transition-all duration-700 ${isPrimary ? 'neu-convex' : 'bg-[var(--neu-text-soft)]/40'}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button onClick={handleRestart} className="flex items-center justify-center gap-2 h-12 rounded-xl neu-convex neu-convex-hover neu-convex-active font-semibold text-[var(--neu-text)]">
            <RefreshCw className="w-5 h-5" />
            重新测试
          </button>
          <button onClick={handleShare} className="flex items-center justify-center gap-2 h-12 rounded-xl neu-flat neu-flat-hover neu-flat-active font-semibold text-[var(--neu-text)]">
            <Share2 className="w-5 h-5" />
            分享结果
          </button>
          <button onClick={() => setShowShareCard(true)} className="flex items-center justify-center gap-2 h-12 rounded-xl neu-flat neu-flat-hover neu-flat-active font-semibold text-[var(--neu-text)]">
            <ImageIcon className="w-5 h-5" />
            生成卡片
          </button>
          <button onClick={() => setShowEmailDialog(true)} className="flex items-center justify-center gap-2 h-12 rounded-xl neu-flat neu-flat-hover neu-flat-active font-semibold text-[var(--neu-text)]">
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
