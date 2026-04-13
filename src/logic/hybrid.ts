import type { SBTITypeCode } from '@/types';
import { TYPE_LIBRARY } from '@/data/types';
import { generateRoast } from './copywriter';

export interface HybridType {
  code: 'MIX';
  name: string;
  englishName: string;
  keywords: string[];
  svgDescription: string;
  roast: string;
  componentRoasts: Record<SBTITypeCode, string>;
  components: Array<{
    code: SBTITypeCode;
    name: string;
    role: string;
    color: string;
  }>;
}

const SUFFIXES = ['缝合怪', '量子态', '混合体'];

const PALETTE = [
  '#A0AEC0', '#E53E3E', '#ED8936', '#48BB78', '#4299E1',
  '#9F7AEA', '#F687B3', '#ECC94B', '#38B2AC', '#F56565',
  '#D69E2E', '#718096',
];

function pickColor(seed: number, exclude: number[] = []): string {
  const available = PALETTE.map((c, i) => ({ c, i })).filter(({ i }) => !exclude.includes(i));
  return available[seed % available.length].c;
}

function seedFromCodes(codes: string[]): number {
  return codes.reduce((a, c) => a + c.split('').reduce((b, ch) => b + ch.charCodeAt(0), 0), 0);
}

function buildRoast(
  name: string,
  comps: HybridType['components'],
  keywords: string[],
  confidence: number,
  isEcho: boolean
): string {
  const [rand, other] = [comps[0], comps[1]];
  const randName = rand?.name || '随便者';
  const otherName = other?.name || '某个隐藏人格';
  const k1 = keywords[0] || '量子纠缠';
  const k2 = keywords[1] || '薛定谔躺平';
  const k3 = keywords[2] || '外卖红包决定论';

  let text = '';

  if (isEcho) {
    text = `恭喜您，您是极其罕见的【${name}】。\n\n您的身体里住着 ${randName} 和 ${otherName}。更离谱的是，混沌骰子掷完之后，居然和您自己的选择完全一致——这说明您连随机都随不出新意。\n\n${randName} 负责摆烂，${otherName} 负责执行。由于骰子完全认同您的选择，三方议会缩减为两方独裁，运作效率反而提升了。\n\n系统备注：真实人格与混沌人格恰好是同一个人格，您是天选之子，也是天弃之子。`;
  } else {
    const templates = [
      `恭喜您，您是极其罕见的【${name}】。\n\n您的身体里同时住着 ${randName}、${otherName} 和其他几位临时房客。每天早上他们掷骰子决定由谁接管大脑——通常是 ${randName} 赢，因为 TA 根本不在乎结果。\n\n${otherName} 一直想反抗，但骰子人格总会出面和稀泥。最终您呈现出一种「${k1}」与「${k2}」共存的诡异平衡。\n\n这种人格尚未被纳入 DSM-5，建议您多买几份保险。`,

      `【${name}】是一种尚未被科学界命名的新型人格障碍。\n\n临床表现为：在 ${otherName} 的躯壳里，塞进了骰子掷出的灵魂，再由 ${randName} 负责日常运维。\n\n您的情绪系统就像一个三方合资企业：${randName} 占股 51%（因为骰子说 TA 该控股），${otherName} 持有少量优先股，但都没有否决权。\n\n别人的人生是单机游戏，您的是多方联机——而且服务器还在国外，延迟 999ms。`,

      `欢迎来到【${name}】的专属诊疗室。\n\n诊断报告显示，您的精神状态同时被 ${randName}、${otherName} 等多方割据。${randName} 负责摆烂，${otherName} 负责焦虑，骰子人格负责在关键时刻说风凉话。\n\n您的人生信条大概是：用 ${k1} 的态度，践行 ${k2} 的哲学，最终达成 ${k3} 的宿命。\n\n这种人格配置极其不稳定，建议不要照镜子，以免多个灵魂同时觉得自己最帅。`,

      `您就是传说中的【${name}】。\n\n科学家把小白鼠放进迷宫是为了观察学习行为；把您放进社会，是为了观察 ${randName}、${otherName} 和骰子人格如何在同一个大脑里抢方向盘。\n\n目前的实验数据表明：${randName} 踩油门，${otherName} 踩刹车，骰子人格坐在后座吃零食。车子开得很慢，但方向随机——这正是 ${name} 的核心竞争力。\n\n祝您在随机的人生里，偶尔也能手动操作一次。`,
    ];
    const seed = seedFromCodes(comps.map(c => c.code));
    text = templates[seed % templates.length];
  }

  const pct = Math.round(confidence * 100);
  if (pct < 30) {
    text += `\n\n（系统提示：缝合纯度仅有 ${pct}%，说明这几个人格还在互相撕逼，暂时没有人占据绝对优势。）`;
  } else if (pct < 60) {
    text += `\n\n（系统提示：缝合纯度 ${pct}%，多方势力暂时达成了某种微妙的停战协议。）`;
  } else {
    text += `\n\n（系统提示：缝合纯度高达 ${pct}%，多个人格已经完美融合——恭喜您，您连自己是什么贵物都分不清了。）`;
  }

  return text;
}

export function generateHybridType(
  randCode: SBTITypeCode,
  pureCode: SBTITypeCode | undefined,
  mixedCode: SBTITypeCode | undefined,
  confidence: number,
  hasContradiction: boolean,
  scores: Record<SBTITypeCode, number>
): HybridType {
  const pure = pureCode && pureCode !== randCode ? pureCode : undefined;
  const mixed = mixedCode && mixedCode !== randCode ? mixedCode : undefined;

  const components: HybridType['components'] = [];
  const usedIdx: number[] = [];
  let isEcho = false;

  components.push({
    code: randCode,
    name: TYPE_LIBRARY[randCode].name,
    role: '随便者 · 选择逃避',
    color: PALETTE[0],
  });
  usedIdx.push(0);

  if (pure && mixed && pure === mixed) {
    isEcho = true;
    const idx = seedFromCodes([randCode, pure]) % PALETTE.length;
    components.push({
      code: pure,
      name: TYPE_LIBRARY[pure].name,
      role: '真实=混沌 · 天选之子',
      color: pickColor(idx, usedIdx),
    });
  } else {
    if (pure) {
      const idx = seedFromCodes([randCode, pure]) % PALETTE.length;
      components.push({
        code: pure,
        name: TYPE_LIBRARY[pure].name,
        role: '真实人格 · 你的选择',
        color: pickColor(idx, usedIdx),
      });
      usedIdx.push(PALETTE.indexOf(components[components.length - 1].color));
    }

    if (mixed) {
      const idx = seedFromCodes([randCode, pure || '', mixed]) % PALETTE.length;
      components.push({
        code: mixed,
        name: TYPE_LIBRARY[mixed].name,
        role: '混沌人格 · 骰子结局',
        color: pickColor(idx, usedIdx),
      });
    }
  }

  const activeCodes = [...new Set(components.filter(c => c.code !== 'RAND').map(c => c.code))];
  const seed = seedFromCodes(activeCodes);
  const suffix = SUFFIXES[seed % SUFFIXES.length];

  let name = '';
  if (activeCodes.length >= 2) {
    const n1 = TYPE_LIBRARY[activeCodes[0]].name.slice(0, 2);
    const n2 = TYPE_LIBRARY[activeCodes[1]].name.slice(0, 2);
    name = `${n1}${n2}${suffix}`;
  } else if (activeCodes.length === 1) {
    const n1 = TYPE_LIBRARY[activeCodes[0]].name.slice(0, 2);
    name = `${n1}随便${suffix}`;
  } else {
    name = `量子随便${suffix}`;
  }

  // SVG: cleaner fusion symbol
  const c1 = components[0].color;
  const c2 = components[1]?.color || PALETTE[1];
  const c3 = components[2]?.color || PALETTE[2];
  const isTwo = components.length === 2;

  const svg = isTwo
    ? `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${c1}"/>
            <stop offset="100%" stop-color="${c2}"/>
          </linearGradient>
        </defs>
        <circle cx="80" cy="100" r="50" fill="${c1}" opacity="0.6"/>
        <circle cx="120" cy="100" r="50" fill="${c2}" opacity="0.6"/>
        <text x="55" y="105" text-anchor="middle" font-size="14" fill="#2D3748" font-weight="bold">RAND</text>
        <text x="145" y="105" text-anchor="middle" font-size="14" fill="#2D3748" font-weight="bold">${components[1].code}</text>
        <text x="100" y="108" text-anchor="middle" font-size="24" fill="#2D3748" font-weight="black">∞</text>
        <circle cx="100" cy="100" r="72" fill="none" stroke="url(#mixGrad)" stroke-width="2" stroke-dasharray="8,4" opacity="0.8">
          <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
        </circle>
      </svg>`
    : `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${c1}"/>
            <stop offset="50%" stop-color="${c2}"/>
            <stop offset="100%" stop-color="${c3}"/>
          </linearGradient>
        </defs>
        <circle cx="85" cy="85" r="45" fill="${c1}" opacity="0.6"/>
        <circle cx="115" cy="85" r="45" fill="${c2}" opacity="0.6"/>
        <circle cx="100" cy="120" r="45" fill="${c3}" opacity="0.6"/>
        <text x="65" y="90" text-anchor="middle" font-size="12" fill="#2D3748" font-weight="bold">RAND</text>
        <text x="135" y="90" text-anchor="middle" font-size="12" fill="#2D3748" font-weight="bold">${components[1].code}</text>
        <text x="100" y="140" text-anchor="middle" font-size="12" fill="#2D3748" font-weight="bold">${components[2].code}</text>
        <text x="100" y="105" text-anchor="middle" font-size="18" fill="#2D3748" font-weight="black">∞</text>
        <circle cx="100" cy="100" r="70" fill="none" stroke="url(#mixGrad)" stroke-width="2" stroke-dasharray="8,4" opacity="0.8">
          <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
        </circle>
      </svg>`;

  const keywordPool = components.flatMap(c => TYPE_LIBRARY[c.code].keywords.slice(0, 3));
  const chaosTags = ['量子纠缠', '薛定谔人格', '随机坍缩', '选择无能', '外卖红包决定论'];
  const keywords = [...new Set([...keywordPool, ...chaosTags])].slice(0, 6);

  const componentRoasts: Record<SBTITypeCode, string> = {} as Record<SBTITypeCode, string>;
  components.forEach(c => {
    componentRoasts[c.code] = generateRoast(c.code, confidence, hasContradiction, scores[c.code] || 0);
  });

  const roast = buildRoast(name, components, keywords, confidence, isEcho);

  return {
    code: 'MIX',
    name,
    englishName: 'Chimera',
    keywords,
    svgDescription: svg,
    roast,
    componentRoasts,
    components,
  };
}
