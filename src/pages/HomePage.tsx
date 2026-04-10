import { useEffect, useRef, useState, type RefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Play, Sparkles, Brain, Zap, Target, Shuffle, Info, Flame,
  MessageCircle, Ghost, Cpu, Search, HelpCircle, Code2, Heart,
  Lightbulb, Share2, Fingerprint, ZapOff, Skull, Gamepad2,
  BatteryCharging, WifiOff, Command, Dice5
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const QUESTION_COUNTS = [
  { value: 5, label: '极速' },
  { value: 10, label: '快速' },
  { value: 15, label: '标准' },
  { value: 20, label: '详细' },
  { value: 30, label: '深度' },
  { value: 50, label: '地狱' },
  { value: 100, label: '自虐' }
];

const SHOWCASE_TYPES = [
  { code: 'HOUJ', name: '吼叫者', desc: '分贝即正义，行走的喇叭', icon: Flame, color: 'text-rose-500' },
  { code: 'YINY', name: '阴阳师', desc: '表面笑嘻嘻，记仇三年', icon: MessageCircle, color: 'text-emerald-500' },
  { code: 'IMFW', name: '爱咋咋地', desc: '摆烂仙人，量子隧穿式躺平', icon: Ghost, color: 'text-blue-500' },
  { code: 'DUNJ', name: '钝角', desc: '九十三度，没有意义就是意义', icon: Lightbulb, color: 'text-amber-500' },
  { code: 'NPC', name: 'NPC', desc: '背景板成精，人机感拉满', icon: Cpu, color: 'text-slate-500' },
  { code: 'KEYB', name: '键盘战神', desc: '线上战神，句句带妈', icon: Code2, color: 'text-violet-500' },
  { code: 'BAOZ', name: '暴躁者', desc: '易燃易爆炸，人间煤气罐', icon: ZapOff, color: 'text-red-500' },
  { code: 'HUIM', name: '毁灭者', desc: '玉石俱焚，掀桌专业户', icon: Skull, color: 'text-stone-600' },
  { code: 'GELI', name: '哥布林', desc: '阴暗角落里爬行', icon: Gamepad2, color: 'text-green-600' },
  { code: 'SLEEP', name: '睡莲', desc: '低电量生存模式', icon: BatteryCharging, color: 'text-cyan-500' },
  { code: '404', name: '404', desc: '查无此人，链接已失效', icon: WifiOff, color: 'text-gray-500' },
  { code: 'BOSS', name: '资本型', desc: '画饼 PUA，赋能抓手', icon: Command, color: 'text-indigo-500' },
];

const MARQUEE_TYPES = [
  'HOUJ 吼叫者', 'YINY 阴阳师', 'IMFW 爱咋咋地', 'DUNJ 钝角', 'NPC 背景板', 'KEYB 键盘战神',
  'BAOZ 暴躁者', 'HUIM 毁灭者', 'GELI 哥布林', 'SLEEP 睡莲', '404 查无此人', 'BOSS 资本型',
  'WONANG 窝囊者', 'HITER 攻击者', 'SEXY 性感者', 'RAND 随便者', 'RUSHI 爷不玩了',
  'YITP 依托答辩', 'SHUS 鼠鼠', 'TAIK 泰裤辣', 'BABI 芭比Q', 'WEMO 我emo了',
  'MALO 吗喽', 'XIAN 咸鱼', 'KFC 疯狂星期四', 'DOGE 狗头', 'EMO emo怪',
];

const CHAOS_QUOTES = [
  '你的人生不是轨道，是旷野上的乱葬岗。',
  '没关系，精神稳定一分钟也很厉害了。',
  '表面上在上班，实际上班在上我。',
  '都说鱼和熊掌不可兼得，可穷和单身怎么就同时发生了？',
  '只要能吃苦，就有吃不完的苦。',
  '我的钱包比我的脸皮还要薄。',
  '与其精神内耗自己，不如发疯外耗别人。',
];

const FAQS = [
  {
    q: 'SBTI 是什么？',
    a: 'SBTI（Shit But True Identity）是一款基于混沌算法的趣味人格测试。我们不追求传统心理学的严谨科学，而是拥抱互联网精神世界的复杂、矛盾与荒诞。'
  },
  {
    q: '测试结果准吗？',
    a: '仅供娱乐。但有趣的是，很多人反馈“被骂到了”。毕竟 266 种类型里，总有一种能精准戳中你的赛博画像。'
  },
  {
    q: '为什么题目看起来很有攻击性？',
    a: '这是 SBTI 3.0 的刻意设计。题目融合了中文互联网的攻击性 meme、自嘲文化与亚文化梗，让测试过程本身就像一场人格搏击。'
  },
  {
    q: '可以分享结果给朋友吗？',
    a: '当然可以！结果页支持一键分享，还可以生成精美的分享卡片，方便你在朋友圈、小红书、微博继续“丢人”。'
  },
];

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

function useScrollReveal<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 82%',
      onEnter: () => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
        );
      },
      once: true
    });
    triggersRef.current.push(st);
    return () => {
      triggersRef.current.forEach(t => t.kill());
      triggersRef.current = [];
    };
  }, []);

  return ref;
}

function TypeMarquee() {
  const row1 = [...MARQUEE_TYPES, ...MARQUEE_TYPES];
  const row2 = [...MARQUEE_TYPES.slice().reverse(), ...MARQUEE_TYPES.slice().reverse()];
  return (
    <div className="space-y-4 overflow-hidden py-2">
      <div className="relative">
        <div className="flex gap-4 animate-marquee-left whitespace-nowrap">
          {row1.map((text, i) => (
            <span key={i} className="inline-flex items-center px-4 py-2 rounded-full neu-flat text-sm font-medium text-[var(--neu-text)]">
              {text}
            </span>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-4 animate-marquee-right whitespace-nowrap">
          {row2.map((text, i) => (
            <span key={i} className="inline-flex items-center px-4 py-2 rounded-full neu-convex text-sm font-medium text-[var(--neu-text)]">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function LiveStatCard({ label, value, suffix = '' }: { label: string; value: number; suffix?: string }) {
  const display = useCountUp(value, 1800);
  return (
    <div className="neu-flat p-4 text-center min-w-[100px]">
      <div className="text-2xl sm:text-3xl font-black text-[var(--neu-text)]">{display}{suffix}</div>
      <div className="text-[10px] sm:text-xs text-[var(--neu-text-soft)] mt-1">{label}</div>
    </div>
  );
}

function QuoteRotator() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % CHAOS_QUOTES.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="neu-pressed p-5 rounded-xl text-center min-h-[80px] flex items-center justify-center">
      <p className="text-sm sm:text-base text-[var(--neu-text)] font-medium transition-opacity duration-500" key={index}>
        “{CHAOS_QUOTES[index]}”
      </p>
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedCount, setSelectedCount] = useState(15);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useScrollReveal<HTMLDivElement>();
  const showcaseRef = useScrollReveal<HTMLDivElement>();
  const styleRef = useScrollReveal<HTMLDivElement>();
  const faqRef = useScrollReveal<HTMLDivElement>();
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);
  const countTypes = useCountUp(266, 2000);
  const countQuestions = useCountUp(585, 2500);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      );

      if (featuresRef.current) {
        const cards = featuresRef.current.querySelectorAll('.feature-card');
        const st = ScrollTrigger.create({
          trigger: featuresRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(cards,
              { opacity: 0, y: 60, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
            );
          },
          once: true
        });
        scrollTriggersRef.current.push(st);
      }

      if (ctaRef.current) {
        const st = ScrollTrigger.create({
          trigger: ctaRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(ctaRef.current,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );
          },
          once: true
        });
        scrollTriggersRef.current.push(st);
      }
    });

    return () => {
      scrollTriggersRef.current.forEach(st => st.kill());
      scrollTriggersRef.current = [];
      ctx.revert();
    };
  }, []);

  const handleStart = () => {
    navigate('/quiz', { state: { questionCount: selectedCount } });
  };

  const featureTilts = [useTilt<HTMLDivElement>(), useTilt<HTMLDivElement>(), useTilt<HTMLDivElement>(), useTilt<HTMLDivElement>()];
  const showcaseTilts = SHOWCASE_TYPES.map(() => useTilt<HTMLDivElement>());

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[var(--neu-text-soft)] mb-6 animate-fadeInUp">
            科学已死 · 混沌当立
          </p>
          <h1
            ref={titleRef}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter neu-text-gradient mb-6 opacity-0"
          >
            {'SBTI'.split('').map((ch, i) => (
              <span key={i} className="letter-reveal" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
                {ch}
              </span>
            ))}
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl text-[var(--neu-text-soft)] font-light tracking-wide opacity-0"
          >
            基于混沌算法的
            <span className="font-medium text-[var(--neu-text)]">{countTypes}</span>
            种人格测试系统
          </p>

          {/* Hero stats + CTA mini */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-10">
            <div className="neu-flat px-6 py-4 min-w-[120px]">
              <div className="text-3xl sm:text-4xl font-black text-[var(--neu-text)]">{countTypes}</div>
              <div className="text-xs text-[var(--neu-text-soft)] mt-1">人格类型</div>
            </div>
            <div className="neu-flat px-6 py-4 min-w-[120px]">
              <div className="text-3xl sm:text-4xl font-black text-[var(--neu-text)]">{countQuestions}</div>
              <div className="text-xs text-[var(--neu-text-soft)] mt-1">混沌题库</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--neu-text-soft)] animate-float">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full neu-concave flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-[var(--neu-text-soft)] animate-bounce" />
          </div>
        </div>
      </section>

      {/* CTA — moved to top */}
      <section ref={ctaRef} className="px-4 pb-16 sm:pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="neu-flat p-6 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-white/50 to-transparent rounded-full pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-pressed text-xs text-[var(--neu-text-soft)] mb-5">
              <Sparkles className="w-3 h-3" />
              <span>选择你的探索深度</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[var(--neu-text)] mb-6">
              准备进入<span className="neu-text-gradient">混沌人格</span>宇宙？
            </h2>

            <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 mb-6">
              {QUESTION_COUNTS.map(({ value, label }) => {
                const active = selectedCount === value;
                return (
                  <button
                    key={value}
                    onClick={() => setSelectedCount(value)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 ${
                      active
                        ? 'neu-pressed text-[var(--neu-text)]'
                        : 'neu-flat neu-flat-hover neu-flat-active text-[var(--neu-text-soft)]'
                    }`}
                  >
                    <span className="text-base font-bold">{value}</span>
                    <span className="text-[10px] opacity-70">{label}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleStart}
              className="w-full h-14 text-base font-semibold rounded-xl neu-convex neu-convex-hover neu-convex-active flex items-center justify-center text-[var(--neu-text)]"
            >
              <Play className="w-4 h-4 mr-2 fill-current" />
              开始测试
            </button>
          </div>
        </div>
      </section>

      {/* Personality Showcase */}
      <section ref={showcaseRef} className="px-4 py-20 sm:py-28 opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--neu-text)] mb-4">
              人格大观园
            </h2>
            <p className="text-[var(--neu-text-soft)] text-base sm:text-lg max-w-2xl mx-auto">
              从攻击性暴徒到赛博幽灵，266 种类型里总有一款让你汗流浃背
            </p>
          </div>

          {/* Animated stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <LiveStatCard label="人格类型" value={266} />
            <LiveStatCard label="混沌题库" value={585} />
            <LiveStatCard label="今日确诊" value={342} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SHOWCASE_TYPES.map((t, idx) => (
              <div
                key={idx}
                ref={showcaseTilts[idx] as RefObject<HTMLDivElement>}
                className="tilt-card neu-flat p-5 relative overflow-hidden"
              >
                <div className="tilt-shine" />
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full neu-convex flex items-center justify-center">
                    <t.icon className={`w-5 h-5 ${t.color}`} />
                  </div>
                  <span className="text-2xl font-black text-[var(--neu-text)]/10">{t.code}</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--neu-text)] mb-1">{t.name}</h3>
                <p className="text-sm text-[var(--neu-text-soft)]">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Type marquee */}
          <div className="mt-10">
            <TypeMarquee />
          </div>

          {/* Chaos quote */}
          <div className="mt-8 max-w-2xl mx-auto">
            <QuoteRotator />
          </div>

          <div className="mt-10 text-center space-y-4">
            <button
              onClick={() => navigate('/types')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl neu-convex neu-convex-hover neu-convex-active text-sm font-bold text-[var(--neu-text)]"
            >
              查看全部 127 种人格
            </button>
            <p className="text-sm text-[var(--neu-text-soft)] neu-pressed inline-block px-5 py-3 rounded-full">
              还有 115 种人格等待你的发掘 · 包括「依托答辩」「史莱姆」「API 接口」「Git 冲突」等赛博奇行种
            </p>
          </div>
        </div>
      </section>

      {/* About / Intro */}
      <section ref={aboutRef} className="px-4 py-20 sm:py-28 opacity-0">
        <div className="max-w-5xl mx-auto">
          <div className="neu-flat p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/40 to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full neu-pressed text-xs text-[var(--neu-text-soft)] mb-4">
                  <Info className="w-3.5 h-3.5" />
                  <span>关于项目</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--neu-text)] mb-4">
                  科学已死，<br className="hidden sm:block" />混沌当立
                </h2>
                <p className="text-[var(--neu-text-soft)] leading-relaxed mb-4">
                  SBTI-Engine 诞生于对无聊测试的反抗。我们相信，人类的网络人格从来不是 16 种颜色可以概括的。你可能在凌晨三点化身「键盘战神」，在白天却是兢兢业业的「NPC」，偶尔还想做一只「哥布林」阴暗爬行。
                </p>
                <p className="text-[var(--neu-text-soft)] leading-relaxed">
                  于是我们打造了这款混沌测试：266 种互联网原生人格、585 道带着 meme 气息的题目、7 层混合计分逻辑。没有标准答案，只有更荒诞、更真实的你。
                </p>
              </div>
              <div className="md:w-1/2 w-full space-y-4">
                <div className="neu-pressed p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Search className="w-5 h-5 text-[var(--neu-text)]" />
                    <h3 className="font-bold text-[var(--neu-text)]">探索精神</h3>
                  </div>
                  <p className="text-sm text-[var(--neu-text-soft)]">
                    不贴标签，而是描绘光谱。从经典 MBTI 的废墟中长出更野性的分类法。
                  </p>
                </div>
                <div className="neu-pressed p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-5 h-5 text-rose-500" />
                    <h3 className="font-bold text-[var(--neu-text)]">自嘲与攻击性</h3>
                  </div>
                  <p className="text-sm text-[var(--neu-text-soft)]">
                    题库不回避辱骂、阴阳和崩溃。毕竟互联网上，谁还没当过几次「依托答辩」呢？
                  </p>
                </div>
                <div className="neu-pressed p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Share2 className="w-5 h-5 text-blue-500" />
                    <h3 className="font-bold text-[var(--neu-text)]">开源与共创</h3>
                  </div>
                  <p className="text-sm text-[var(--neu-text-soft)]">
                    项目开源，欢迎提交新的人格类型、题目和槽位文案。混沌宇宙需要更多贵物。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="px-4 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--neu-text)] mb-4">
              不只是测试
            </h2>
            <p className="text-[var(--neu-text-soft)] text-base sm:text-lg max-w-2xl mx-auto">
              一次深入灵魂的混沌探索，266 种人格类型等你解锁
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: '127 种人格', desc: '亚文化型 + AI 型 + 抽象贵物全覆盖' },
              { icon: Zap, title: '7 层逻辑', desc: '跳过 / 乱选 / 时间 / 矛盾 / 一致性 / 陷阱 / 置信度' },
              { icon: Target, title: '585 道智能题', desc: '单选 / 多选混合，含隐藏选项' },
              { icon: Shuffle, title: '随机文案', desc: 'Mad Libs 风格槽位填充，每次独一无二' },
            ].map((feature, idx) => (
              <div
                key={idx}
                ref={featureTilts[idx] as RefObject<HTMLDivElement>}
                className="feature-card tilt-card neu-flat p-6 relative overflow-hidden opacity-0"
              >
                <div className="tilt-shine" />
                <div className="w-12 h-12 rounded-full neu-convex flex items-center justify-center mb-5 text-[var(--neu-text)]">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--neu-text)] mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--neu-text-soft)] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Question Style */}
      <section ref={styleRef} className="px-4 py-20 sm:py-28 opacity-0">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--neu-text)] mb-4">
              题库风格
            </h2>
            <p className="text-[var(--neu-text-soft)] text-base sm:text-lg max-w-2xl mx-auto">
              585 道混沌拷问，从经典 meme 到攻击性辱骂全覆盖
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="neu-flat p-6">
              <div className="w-10 h-10 rounded-full neu-convex flex items-center justify-center mb-4 text-rose-500">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--neu-text)] mb-2">攻击性 meme</h3>
              <p className="text-sm text-[var(--neu-text-soft)] leading-relaxed mb-3">
                「遇到傻逼同事，你的首选应对方式是？」<br />
                「有人当面骂你，你会？」
              </p>
              <p className="text-xs text-[var(--neu-text-soft)]/70">
                不回避冲突场景，选项从「当场吼回去」到「记仇三年」，直面你的阴暗面。
              </p>
            </div>

            <div className="neu-flat p-6">
              <div className="w-10 h-10 rounded-full neu-convex flex items-center justify-center mb-4 text-amber-500">
                <Fingerprint className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--neu-text)] mb-2">自嘲式荒诞</h3>
              <p className="text-sm text-[var(--neu-text-soft)] leading-relaxed mb-3">
                「如果把你比作技术组件，你是？」<br />
                「别人问你为什么单身，你会？」
              </p>
              <p className="text-xs text-[var(--neu-text-soft)]/70">
                Cache 失效、Git 冲突、钝角、依托答辩……用互联网黑话解剖人格。
              </p>
            </div>

            <div className="neu-flat p-6">
              <div className="w-10 h-10 rounded-full neu-convex flex items-center justify-center mb-4 text-emerald-500">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--neu-text)] mb-2">经典混沌题</h3>
              <p className="text-sm text-[var(--neu-text-soft)] leading-relaxed mb-3">
                单选 / 多选 / 填空题混合出击，部分题目藏有「植物系隐藏选项」。
              </p>
              <p className="text-xs text-[var(--neu-text-soft)]/70">
                支持一键乱选（RAND）与烦了爷不玩了（RUSHI）两种混沌操作。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="px-4 py-20 sm:py-28 opacity-0">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--neu-text)] mb-4">
              常见问题
            </h2>
            <p className="text-[var(--neu-text-soft)]">一些你可能想知道的事</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((item, idx) => {
              const open = openFaq === idx;
              return (
                <div key={idx} className="neu-flat rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(open ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-[var(--neu-text)] pr-4">{item.q}</span>
                    <HelpCircle className={`w-5 h-5 text-[var(--neu-text-soft)] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${open ? 'max-w-none' : 'max-h-0'}`}
                    style={{ maxHeight: open ? '300px' : '0px' }}
                  >
                    <div className="px-5 pb-5 text-sm text-[var(--neu-text-soft)] leading-relaxed border-t border-transparent">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final mini CTA */}
      <section className="px-4 py-12">
        <div className="max-w-xl mx-auto text-center">
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl neu-convex neu-convex-hover neu-convex-active text-base font-bold text-[var(--neu-text)]"
          >
            <Dice5 className="w-5 h-5" />
            现在就测
          </button>
          <p className="mt-4 text-xs text-[var(--neu-text-soft)]">
            v3.0.0 · 结果仅供娱乐 · 基于混沌算法生成
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-[var(--neu-text-soft)] text-xs space-y-2">
        <p className="font-medium">SBTI-Engine 3.0 · 科学已死，混沌当立</p>
        <p>Built with React + Vite + Tailwind CSS · Deployed on IPFS via Pinme</p>
      </footer>
    </div>
  );
}
