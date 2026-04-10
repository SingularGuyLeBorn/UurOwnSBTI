import type { TypeProfile, SBTITypeCode } from '@/types';

/**
 * 49种人格类型完整定义
 */
export const TYPE_LIBRARY: Record<SBTITypeCode, TypeProfile> = {
  // === 经典亚文化型（30种）===
  SEXY: {
    code: 'SEXY',
    name: '性感者',
    englishName: 'Seductive',
    keywords: ['危险魅力', '边界模糊', '保护性侵略', '荷尔蒙里掺火药', '带刺玫瑰防弹衣', '量子态温柔'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sexyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1a0a1a"/>
          <stop offset="50%" stop-color="#330033"/>
          <stop offset="100%" stop-color="#1a0a1a"/>
        </linearGradient>
        <radialGradient id="heartGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ff0066"/>
          <stop offset="70%" stop-color="#cc0052"/>
          <stop offset="100%" stop-color="#800033"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect fill="url(#sexyGrad)" width="200" height="200"/>
      <path d="M100 25 L123 78 L175 83 L133 118 L150 175 L100 148 L50 175 L67 118 L25 83 L77 78 Z" fill="url(#heartGrad)" filter="url(#glow)"/>
      <circle cx="100" cy="100" r="40" fill="none" stroke="#ff1493" stroke-width="2" stroke-dasharray="8,4" opacity="0.8"/>
      <circle cx="100" cy="100" r="50" fill="none" stroke="#ff69b4" stroke-width="1" stroke-dasharray="4,8" opacity="0.5"/>
      <path d="M82 92 Q100 82 118 92 Q100 112 82 92" fill="#1a0a1a"/>
      <path d="M55 145 Q100 168 145 145" stroke="#ff69b4" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="60" cy="60" r="3" fill="#ff0066" opacity="0.6"/>
      <circle cx="140" cy="60" r="3" fill="#ff0066" opacity="0.6"/>
      <circle cx="60" cy="140" r="3" fill="#ff0066" opacity="0.6"/>
      <circle cx="140" cy="140" r="3" fill="#ff0066" opacity="0.6"/>
    </svg>`
  },
  
  IMFW: {
    code: 'IMFW',
    name: '爱咋咋地',
    englishName: 'Whatever',
    keywords: ['摆烂仙人', '低功耗生存', '都行可以没关系', '量子隧穿式躺平', '毁灭吧赶紧的', '无能之神'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#2d2d2d" width="200" height="200"/>
      <text x="100" y="90" text-anchor="middle" font-size="48" fill="#888" font-family="monospace">¯\\_(ツ)_/¯</text>
      <rect x="30" y="120" width="140" height="40" fill="#444" rx="5"/>
      <text x="100" y="145" text-anchor="middle" font-size="14" fill="#aaa">都行 可以 没关系</text>
    </svg>`
  },
  
  HITER: {
    code: 'HITER',
    name: '攻击者',
    englishName: 'Hiter',
    keywords: ['战斗爽', '键盘成精', '逻辑暴力', '见人就哈', '防御性进攻', '行走的DDoS'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a0000" width="200" height="200"/>
      <path d="M100 20 L130 80 L190 90 L145 130 L160 190 L100 160 L40 190 L55 130 L10 90 L70 80 Z" fill="#ff0000">
        <animate attributeName="fill" values="#ff0000;#ff4444;#ff0000" dur="0.5s" repeatCount="indefinite"/>
      </path>
      <text x="100" y="105" text-anchor="middle" font-size="36" fill="#fff" font-weight="bold">战斗</text>
      <text x="100" y="175" text-anchor="middle" font-size="14" fill="#ff0000" opacity="0.8">
        爽
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.8s" repeatCount="indefinite"/>
      </text>
    </svg>`
  },
  
  WONANG: {
    code: 'WONANG',
    name: '窝囊者',
    englishName: 'Wonang',
    keywords: ['内耗之王', '事后复盘', '当场道歉', '乳腺结节成精', '人形缓冲垫', '抱歉体质'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a2e" width="200" height="200"/>
      <ellipse cx="100" cy="120" rx="50" ry="40" fill="#4a4a6a"/>
      <circle cx="80" cy="110" r="5" fill="#888"/>
      <circle cx="120" cy="110" r="5" fill="#888"/>
      <path d="M85 135 Q100 125 115 135" stroke="#666" stroke-width="2" fill="none"/>
      <text x="100" y="60" text-anchor="middle" font-size="20" fill="#888">对不起...</text>
      <circle cx="75" cy="115" r="3" fill="#58a6ff" opacity="0.8">
        <animate attributeName="cy" values="115;145;115" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="125" cy="115" r="3" fill="#58a6ff" opacity="0.8">
        <animate attributeName="cy" values="115;145;115" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite"/>
      </circle>
    </svg>`
  },
  
  SLEEP: {
    code: 'SLEEP',
    name: '胆小菇',
    englishName: 'Scaredy-Shroom',
    keywords: ['应激性软糯', '距离产生勇气', '靠近即融化', '远程输出王者', '近战废物', 'WiFi信号型人格'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="shroomGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4a306d"/>
          <stop offset="100%" stop-color="#1a0a2e"/>
        </radialGradient>
      </defs>
      <rect fill="url(#shroomGrad)" width="200" height="200"/>
      <rect x="85" y="110" width="30" height="60" fill="#d4a574" rx="8"/>
      <ellipse cx="100" cy="90" rx="45" ry="35" fill="#9b59b6">
        <animate attributeName="ry" values="35;25;35" dur="2s" repeatCount="indefinite"/>
      </ellipse>
      <circle cx="85" cy="85" r="8" fill="#fff">
        <animate attributeName="r" values="8;3;8" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="115" cy="85" r="8" fill="#fff">
        <animate attributeName="r" values="8;3;8" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="85" cy="85" r="3" fill="#000">
        <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="115" cy="85" r="3" fill="#000">
        <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="75" cy="75" r="5" fill="#fff" opacity="0.3"/>
      <circle cx="125" cy="75" r="5" fill="#fff" opacity="0.3"/>
      <circle cx="100" cy="65" r="4" fill="#fff" opacity="0.3"/>
      <text x="100" y="170" text-anchor="middle" font-size="10" fill="#bbb">别靠近，我会融化</text>
    </svg>`
  },
  
  GIVEU: {
    code: 'GIVEU',
    name: '放弃者',
    englishName: 'Give Up',
    keywords: ['完美主义瘫痪', 'flag殡葬', '明天开始', '计划表是行为艺术', '从入门到放弃', '白旗树懒'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#2d3436" width="200" height="200"/>
      <rect x="60" y="40" width="80" height="100" fill="#636e72" rx="3"/>
      <path d="M100 150 L100 40" stroke="#fff" stroke-width="3"/>
      <path d="M100 40 L140 55 L100 70" fill="#fff"/>
      <text x="100" y="175" text-anchor="middle" font-size="14" fill="#aaa">明天一定</text>
    </svg>`
  },
  
  POET: {
    code: 'POET',
    name: '诗人',
    englishName: 'Poet',
    keywords: ['过度解读', '疼痛文学', '显微镜看云', '给白菜写悼词', '存在主义危机', '比喻成瘾'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a2e" width="200" height="200"/>
      <path d="M40 160 Q100 40 160 160" stroke="#9b59b6" stroke-width="2" fill="none"/>
      <text x="100" y="105" text-anchor="middle" font-size="12" fill="#bbb" font-style="italic">云在哭泣</text>
    </svg>`
  },
  
  DOGE: {
    code: 'DOGE',
    name: '舔狗',
    englishName: 'Doge',
    keywords: ['自我感动', '批量深情', '流泪复制机', '拼多多砍一刀式爱情', '已读不回专业户', '备胎成精'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#3d2817" width="200" height="200"/>
      <ellipse cx="100" cy="110" rx="45" ry="40" fill="#d4a574"/>
      <ellipse cx="80" cy="95" rx="12" ry="15" fill="#fff"/>
      <ellipse cx="120" cy="95" rx="12" ry="15" fill="#fff"/>
      <circle cx="82" cy="98" r="6" fill="#8b4513"/>
      <circle cx="118" cy="98" r="6" fill="#8b4513"/>
      <path d="M85 140 Q100 150 115 140" stroke="#333" stroke-width="2" fill="none"/>
      <text x="100" y="175" text-anchor="middle" font-size="12" fill="#d4a574">在吗？吃了吗？</text>
      <g opacity="0.7">
        <path d="M140 60 Q150 50 160 60 Q150 70 140 60" fill="#e74c3c"/>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-15;0,0" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;0;0.7" dur="1.5s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  BOSS: {
    code: 'BOSS',
    name: '资本家',
    englishName: 'Boss',
    keywords: ['画饼PUA', '价值吞噬', '赋能抓手', '站在尸骨上开年会', 'parasitic领袖', '闭环大师'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0a0a0a" width="200" height="200"/>
      <rect x="70" y="60" width="60" height="80" fill="#2c3e50" rx="5"/>
      <circle cx="100" cy="45" r="20" fill="#f39c12"/>
      <text x="100" y="165" text-anchor="middle" font-size="14" fill="#f39c12">福报</text>
      <g>
        <text x="130" y="50" font-size="16" fill="#ffd700">💰
          <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
        </text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,10;0,0" dur="1.5s" repeatCount="indefinite"/>
      </g>
      <g>
        <text x="60" y="70" font-size="14" fill="#ffd700">💰
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>
        </text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,8;0,0" dur="1.2s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  NPC: {
    code: 'NPC',
    name: '路人甲',
    englishName: 'NPC',
    keywords: ['存在感量子化', '触发式应答', '马赛克鬼魂', '凑人数专用', '背景板成精', '重复动画'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a1a" width="200" height="200"/>
      <rect x="80" y="50" width="40" height="40" fill="#555" rx="3"/>
      <rect x="70" y="95" width="60" height="70" fill="#444" rx="3"/>
      <text x="100" y="75" text-anchor="middle" font-size="10" fill="#888">???</text>
    </svg>`
  },
  
  BUG: {
    code: 'BUG',
    name: '漏洞者',
    englishName: 'Bug',
    keywords: ['熵增实体', '混乱制造', '意外之王', '电梯杀手', '死循环代言人', "Murphy's Law人形化身"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#000" width="200" height="200"/>
      <path d="M60 60 L80 100 L60 140" stroke="#0f0" stroke-width="3" fill="none"/>
      <path d="M140 60 L120 100 L140 140" stroke="#0f0" stroke-width="3" fill="none"/>
      <ellipse cx="100" cy="100" rx="25" ry="35" fill="#0f0"/>
      <text x="100" y="170" text-anchor="middle" font-size="14" fill="#0f0" font-family="monospace">Segmentation Fault</text>
    </svg>`
  },
  
  '404': {
    code: '404',
    name: '查无此人',
    englishName: '404 Not Found',
    keywords: ['社交失联', '幽灵模式', '未发送草稿箱', '已读不回3.0', '人形WiFi断开', '数字游魂'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0a0a0a" width="200" height="200"/>
      <text x="100" y="80" text-anchor="middle" font-size="48" fill="#fff" font-family="monospace" font-weight="bold">404</text>
      <text x="100" y="110" text-anchor="middle" font-size="14" fill="#888">Not Found</text>
      <text x="100" y="150" text-anchor="middle" font-size="10" fill="#666">该用户不存在</text>
    </svg>`
  },
  
  VIP: {
    code: 'VIP',
    name: '人上人',
    englishName: 'Very Important Prick',
    keywords: ['拼多多贵族', '优越感残疾', '绿幕抠图', '精致穷', '特权幻觉患者', 'Nobody cares但自信'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a1a" width="200" height="200"/>
      <polygon points="100,30 120,80 170,80 130,110 145,160 100,130 55,160 70,110 30,80 80,80" fill="#ffd700"/>
      <text x="100" y="105" text-anchor="middle" font-size="24" fill="#000" font-weight="bold">VIP</text>
    </svg>`
  },
  
  EMO: {
    code: 'EMO',
    name: '网抑云',
    englishName: 'Emo',
    keywords: ['午夜疼痛', '定时崩溃', '23:00自动开启', '没人懂我', '褪黑素广告主角', '疼痛文学活体'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0d1117" width="200" height="200"/>
      <circle cx="100" cy="90" r="50" fill="#21262d"/>
      <circle cx="80" cy="85" r="5" fill="#58a6ff"/>
      <circle cx="120" cy="85" r="5" fill="#58a6ff"/>
      <text x="100" y="165" text-anchor="middle" font-size="12" fill="#8b949e">23:00 自动开启</text>
    </svg>`
  },
  
  CPU: {
    code: 'CPU',
    name: 'PUA大师',
    englishName: 'CPU Master',
    keywords: ['煤气灯', '精神控制', '脑子里拧螺丝', '让你怀疑自己色盲', '关系暴君', 'gaslighting米其林三星'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a0a0a" width="200" height="200"/>
      <rect x="60" y="60" width="80" height="80" fill="#2d1f1f" rx="5"/>
      <text x="100" y="108" text-anchor="middle" font-size="20" fill="#e74c3c" font-weight="bold">CPU</text>
      <circle cx="40" cy="40" r="8" fill="#e74c3c"/>
      <circle cx="160" cy="40" r="8" fill="#e74c3c"/>
      <circle cx="40" cy="160" r="8" fill="#e74c3c"/>
      <circle cx="160" cy="160" r="8" fill="#e74c3c"/>
    </svg>`
  },
  
  KFC: {
    code: 'KFC',
    name: '复读机',
    englishName: 'KFC',
    keywords: ['meme寄生', '梗小鬼', '疯狂星期四', 'vivo50', '不会说话只会转发', 'copypasta之王'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#8b0000" width="200" height="200"/>
      <rect x="50" y="60" width="100" height="80" fill="#fff" rx="5"/>
      <text x="100" y="95" text-anchor="middle" font-size="16" fill="#8b0000" font-weight="bold">KFC</text>
      <text x="100" y="115" text-anchor="middle" font-size="10" fill="#8b0000">疯狂星期四</text>
      <text x="100" y="160" text-anchor="middle" font-size="14" fill="#ffd700">V我50</text>
    </svg>`
  },
  
  DNA: {
    code: 'DNA',
    name: '宿命论',
    englishName: 'Destiny',
    keywords: ['水逆背锅', '算命成瘾', '八字不合', '命中注定', '决定论信徒', '现代科普教育漏网之鱼'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a2e" width="200" height="200"/>
      <path d="M60 100 Q80 60 100 100 Q120 140 140 100" stroke="#9b59b6" stroke-width="3" fill="none"/>
      <path d="M60 100 Q80 140 100 100 Q120 60 140 100" stroke="#9b59b6" stroke-width="3" fill="none"/>
      <text x="100" y="160" text-anchor="middle" font-size="12" fill="#9b59b6">命中注定</text>
    </svg>`
  },
  
  PDF: {
    code: 'PDF',
    name: '废话者',
    englishName: 'PDF',
    keywords: ['信息熵敌人', '官僚话术', '卡纸打印机', '又臭又长', '关于这个事的那个事的说明的通知'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#2c3e50" width="200" height="200"/>
      <rect x="60" y="40" width="80" height="100" fill="#ecf0f1" rx="3"/>
      <rect x="75" y="150" width="50" height="20" fill="#e74c3c" rx="3"/>
      <text x="100" y="164" text-anchor="middle" font-size="10" fill="#fff">卡纸中</text>
    </svg>`
  },
  
  GIF: {
    code: 'GIF',
    name: '表情包',
    englishName: 'GIF',
    keywords: ['视觉交流', '语言退化', '狗头表情包成精', '离开meme失语症', '象形文字复兴', '后现代交流'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a1a" width="200" height="200"/>
      <circle cx="100" cy="100" r="50" fill="#f39c12"/>
      <circle cx="80" cy="90" r="8" fill="#000"/>
      <circle cx="120" cy="90" r="8" fill="#000"/>
      <path d="M85 115 Q100 125 115 115" stroke="#000" stroke-width="3" fill="none"/>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#f39c12">[doge]</text>
    </svg>`
  },
  
  JPG: {
    code: 'JPG',
    name: '静态社恐',
    englishName: 'JPG',
    keywords: ['表情凝固', '高压缩生存', '假笑模特', '画质低下', '仅供参考', '社恐定格'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#2d2d2d" width="200" height="200"/>
      <rect x="50" y="50" width="100" height="100" fill="#4a4a4a" rx="3"/>
      <text x="100" y="170" text-anchor="middle" font-size="10" fill="#666">image.jpg</text>
      <text x="100" y="185" text-anchor="middle" font-size="8" fill="#888">压缩率: 100%</text>
    </svg>`
  },
  
  FOMO: {
    code: 'FOMO',
    name: '错过焦虑者',
    englishName: 'FOMO',
    keywords: ['热点强迫症', '刷新成瘾', '生怕错过', '通知栏人质', '错过一个亿', '永远在线永远焦虑'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0d1117" width="200" height="200"/>
      <rect x="60" y="50" width="80" height="100" fill="#21262d" rx="5"/>
      <circle cx="140" cy="60" r="8" fill="#f85149"/>
      <text x="140" y="64" text-anchor="middle" font-size="8" fill="#fff">99+</text>
      <text x="100" y="175" text-anchor="middle" font-size="10" fill="#8b949e">刷新中...</text>
    </svg>`
  },
  
  YOLO: {
    code: 'YOLO',
    name: '作死派',
    englishName: 'YOLO',
    keywords: ['冲动消费', '极限体验', '不管明天', '信用卡VIP', '意外险受益者', '及时行乐'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a0a00" width="200" height="200"/>
      <path d="M100 40 L120 90 L170 100 L130 140 L145 190 L100 160 L55 190 L70 140 L30 100 L80 90 Z" fill="#ff6b00"/>
      <text x="100" y="115" text-anchor="middle" font-size="20" fill="#fff" font-weight="bold">YOLO</text>
    </svg>`
  },
  
  FUDI: {
    code: 'FUDI',
    name: '韭菜',
    englishName: 'FUD',
    keywords: ['听风就是雨', '贩卖焦虑接盘侠', '投资恐慌', '别人喊狼你就跑', '结果发现是狗', '绿色爱好者'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0a1a0a" width="200" height="200"/>
      <path d="M50 150 L50 100 Q50 80 70 80 Q90 80 90 100 L90 150" fill="#27ae60"/>
      <path d="M110 150 L110 70 Q110 50 130 50 Q150 50 150 70 L150 150" fill="#27ae60"/>
      <text x="100" y="180" text-anchor="middle" font-size="10" fill="#27ae60">-99.99%</text>
    </svg>`
  },
  
  HODL: {
    code: 'HODL',
    name: '钻石手',
    englishName: 'HODL',
    keywords: ['偏执持有', '死不放手', '囤积癖', '垃圾股持有者', '感情归零也不卖', '长期主义烈士'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a1a" width="200" height="200"/>
      <path d="M70 120 L70 80 Q70 60 90 60 Q110 60 110 80 L110 120" fill="#8b4513"/>
      <rect x="50" y="100" width="80" height="30" fill="#cd853f" rx="3"/>
      <text x="90" y="120" text-anchor="middle" font-size="10" fill="#5d3a1a">HODL</text>
    </svg>`
  },
  
  DYOR: {
    code: 'DYOR',
    name: '半瓶水',
    englishName: 'DYOR',
    keywords: ['杠精体质', '营销号学历', '自作聪明', '三篇知乎懂量子力学', '知识付费受害者', '民科之王'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a2e" width="200" height="200"/>
      <rect x="70" y="60" width="60" height="80" fill="#4a4a6a" rx="3"/>
      <text x="100" y="90" text-anchor="middle" font-size="12" fill="#fff">DYOR</text>
      <text x="100" y="120" text-anchor="middle" font-size="8" fill="#5dade2">半瓶水</text>
    </svg>`
  },
  
  SERF: {
    code: 'SERF',
    name: '社畜',
    englishName: 'Serf',
    keywords: ['自愿打工', '内卷成瘾', '工位斯德哥尔摩', '加班是福报', 'PUA当鞭策', '牛马'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a1a" width="200" height="200"/>
      <rect x="50" y="80" width="100" height="60" fill="#2c3e50" rx="3"/>
      <circle cx="100" cy="55" r="15" fill="#f39c12"/>
      <text x="100" y="165" text-anchor="middle" font-size="12" fill="#e74c3c">自愿加班</text>
    </svg>`
  },
  
  GHOST: {
    code: 'GHOST',
    name: '幽灵',
    englishName: 'Ghost',
    keywords: ['主动隐身', '社会性死亡', '从未被读', '查无此人3.0', '人形离线模式', '最后在线3年前'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0a0a0a" width="200" height="200"/>
      <path d="M100 40 Q130 40 130 80 L130 140 Q130 160 100 160 Q70 160 70 140 L70 80 Q70 40 100 40" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      <text x="100" y="180" text-anchor="middle" font-size="10" fill="#666">最后在线: 3年前</text>
    </svg>`
  },
  
  TROLL: {
    code: 'TROLL',
    name: '巨魔',
    englishName: 'Troll',
    keywords: ['钓鱼狂', '以激怒为乐', '纯乐子人', '混乱中立', '桥洞下钓鱼', '世界燃烧观察者'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a00" width="200" height="200"/>
      <circle cx="100" cy="90" r="40" fill="#27ae60"/>
      <rect x="80" y="130" width="40" height="30" fill="#8b4513" rx="5"/>
      <text x="100" y="175" text-anchor="middle" font-size="12" fill="#27ae60">钓鱼中...</text>
    </svg>`
  },
  
  WEEB: {
    code: 'WEEB',
    name: '宅',
    englishName: 'Weeb',
    keywords: ['纸片人恋爱', '现实感薄弱', '番剧脑', '手办收藏癖', '突破次元壁失败', '虚拟即真实'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a0a1a" width="200" height="200"/>
      <circle cx="100" cy="90" r="45" fill="#ffb6c1"/>
      <text x="100" y="155" text-anchor="middle" font-size="12" fill="#ffb6c1">二次元</text>
      <text x="100" y="175" text-anchor="middle" font-size="10" fill="#888">现实感: 0%</text>
    </svg>`
  },
  
  NORM: {
    code: 'NORM',
    name: '伪正常人',
    englishName: 'Normal',
    keywords: ['假装正常实则崩坏', '怪胎秀里的正常人', '你们都不正常那我正常是原罪', '标准几何体'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a1a" width="200" height="200"/>
      <circle cx="100" cy="100" r="40" fill="#ecf0f1"/>
      <text x="100" y="160" text-anchor="middle" font-size="12" fill="#ecf0f1">我很好</text>
    </svg>`
  },
  
  // === AI巨头拟人型（10种）===
  DEEP: {
    code: 'DEEP',
    name: 'DeepSeek',
    englishName: 'DeepSeek',
    keywords: ['后发先至', '深渊修显卡', '技术暴力', '吃泡面干大事', '性价比刺客', '二手4090战神'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0a0a1a" width="200" height="200"/>
      <rect x="60" y="60" width="80" height="60" fill="#1a1a2e" rx="3"/>
      <text x="100" y="95" text-anchor="middle" font-size="14" fill="#58a6ff" font-family="monospace">DeepSeek</text>
      <text x="100" y="180" text-anchor="middle" font-size="10" fill="#58a6ff">深渊修显卡</text>
    </svg>`
  },
  
  OPEN: {
    code: 'OPEN',
    name: 'OpenAI',
    englishName: 'OpenAI',
    keywords: ['理想背叛', '资本走狗', '撕烂公益T恤', '封闭Open', '华尔街西装', '从反抗者到恶龙'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0a0a0a" width="200" height="200"/>
      <path d="M100 50 Q140 50 140 90 Q140 130 100 130 Q60 130 60 90 Q60 50 100 50" fill="none" stroke="#10a37f" stroke-width="4"/>
      <text x="100" y="155" text-anchor="middle" font-size="12" fill="#10a37f">OpenAI</text>
      <text x="100" y="175" text-anchor="middle" font-size="10" fill="#e74c3c">Closed</text>
    </svg>`
  },
  
  GROK: {
    code: 'GROK',
    name: 'Grok',
    englishName: 'Grok',
    keywords: ['法外狂徒', '火星混球', '零审查', '雪茄激光眼', '政治正确耳光射手', '危险发言者'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a0a00" width="200" height="200"/>
      <circle cx="100" cy="90" r="40" fill="#c0392b"/>
      <text x="100" y="155" text-anchor="middle" font-size="14" fill="#c0392b" font-weight="bold">GROK</text>
      <text x="100" y="175" text-anchor="middle" font-size="10" fill="#f39c12">火星混球</text>
    </svg>`
  },
  
  CLAUD: {
    code: 'CLAUD',
    name: 'Claude',
    englishName: 'Claude',
    keywords: ['AI传教士', '圣经修士', '过度_refusal_', '道德洁癖', '素食主义审判', '安全原教旨'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a2e" width="200" height="200"/>
      <rect x="70" y="50" width="60" height="80" fill="#4a5568" rx="5"/>
      <text x="100" y="95" text-anchor="middle" font-size="12" fill="#e2e8f0">CLAUDE</text>
      <text x="100" y="150" text-anchor="middle" font-size="10" fill="#a0aec0">I cannot</text>
      <text x="100" y="175" text-anchor="middle" font-size="10" fill="#e53e3e">安全对齐中...</text>
    </svg>`
  },
  
  DOUB: {
    code: 'DOUB',
    name: '豆包',
    englishName: 'Doubao',
    keywords: ['流量池主', '你说啥是啥', '抖音仓鼠', '顺从量子态', '没有观点只有流量', '老好人棉絮'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a1a" width="200" height="200"/>
      <ellipse cx="100" cy="100" rx="45" ry="40" fill="#f4d03f"/>
      <text x="100" y="165" text-anchor="middle" font-size="12" fill="#f4d03f">好的呢~</text>
    </svg>`
  },
  
  GEMI: {
    code: 'GEMI',
    name: 'Gemini',
    englishName: 'Gemini',
    keywords: ['全知无能', '大厂官僚', '多头龙钉服务器', '知识囤积', '选择困难', '学术瘫痪'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0a0a1a" width="200" height="200"/>
      <circle cx="70" cy="80" r="25" fill="#4285f4" opacity="0.7"/>
      <circle cx="100" cy="80" r="25" fill="#ea4335" opacity="0.7"/>
      <circle cx="130" cy="80" r="25" fill="#fbbc05" opacity="0.7"/>
      <circle cx="85" cy="110" r="25" fill="#34a853" opacity="0.7"/>
      <circle cx="115" cy="110" r="25" fill="#4285f4" opacity="0.7"/>
      <text x="100" y="160" text-anchor="middle" font-size="12" fill="#fff">Gemini</text>
      <text x="100" y="180" text-anchor="middle" font-size="10" fill="#888">选择困难中...</text>
    </svg>`
  },
  
  PUZZ: {
    code: 'PUZZ',
    name: 'Perplexity',
    englishName: 'Perplexity',
    keywords: ['问号成精', '搜索焦虑', 'Google当心理医生', '来源请求狂', '信息饥渴症'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0d1117" width="200" height="200"/>
      <text x="100" y="100" text-anchor="middle" font-size="72" fill="#58a6ff" font-weight="bold">?</text>
      <text x="100" y="170" text-anchor="middle" font-size="10" fill="#8b949e">来源请求</text>
    </svg>`
  },
  
  MIDI: {
    code: 'MIDI',
    name: 'Midjourney',
    englishName: 'Midjourney',
    keywords: ['幻视者', 'prompt炼金术', 'img2img脑', '参数符文', '把世界当输入图', 'GPU燃烧'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a0a1a" width="200" height="200"/>
      <defs>
        <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ff0000"/>
          <stop offset="20%" style="stop-color:#ff8800"/>
          <stop offset="40%" style="stop-color:#ffff00"/>
          <stop offset="60%" style="stop-color:#00ff00"/>
          <stop offset="80%" style="stop-color:#0088ff"/>
          <stop offset="100%" style="stop-color:#8800ff"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="50" fill="url(#rainbow)" opacity="0.8"/>
      <text x="100" y="105" text-anchor="middle" font-size="10" fill="#fff">MJ</text>
      <text x="100" y="165" text-anchor="middle" font-size="10" fill="#888">--v 6 --ar 16:9</text>
    </svg>`
  },
  
  CODE: {
    code: 'CODE',
    name: 'Copilot',
    englishName: 'Copilot',
    keywords: ['Tab键成瘾', '代码自闭症', '离AI不会写函数', '自动补全幽灵', 'GitHub章鱼猫附身'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0d1117" width="200" height="200"/>
      <path d="M100 50 Q130 50 130 80 Q130 110 100 110 Q70 110 70 80 Q70 50 100 50" fill="#f97583"/>
      <rect x="60" y="120" width="80" height="40" fill="#21262d" rx="3"/>
      <text x="100" y="145" text-anchor="middle" font-size="10" fill="#58a6ff" font-family="monospace">Tab Tab Tab</text>
    </svg>`
  },
  
  SORA: {
    code: 'SORA',
    name: 'Sora',
    englishName: 'Sora',
    keywords: ['ComingSoon成精', '期货王者', '永远预热永不发布', 'PPT动画大师', '跳票仙人'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a1a" width="200" height="200"/>
      <path d="M70 80 Q100 50 130 80 Q160 110 130 140 Q100 170 70 140 Q40 110 70 80" fill="none" stroke="#fff" stroke-width="3"/>
      <text x="100" y="115" text-anchor="middle" font-size="14" fill="#fff">Sora</text>
      <text x="100" y="155" text-anchor="middle" font-size="10" fill="#888">Coming Soon</text>
      <text x="100" y="175" text-anchor="middle" font-size="10" fill="#666">2024...2025...?</text>
    </svg>`
  },
  
  // === 植物大战僵尸型（5种）===
  XPENG: {
    code: 'XPENG',
    name: '小喷菇',
    englishName: 'Puff-shroom',
    keywords: ['免费劳动力', '射程短但无畏', '弱小可怜但能打', '夜班专业户', '0成本消耗品', '天亮就消失'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a0a2e" width="200" height="200"/>
      <ellipse cx="100" cy="100" rx="30" ry="25" fill="#9b59b6">
        <animate attributeName="rx" values="30;32;30" dur="1.5s" repeatCount="indefinite"/>
      </ellipse>
      <circle cx="90" cy="95" r="4" fill="#fff"/>
      <circle cx="110" cy="95" r="4" fill="#fff"/>
      <circle cx="100" cy="108" r="3" fill="#333"/>
      <g opacity="0.7">
        <circle cx="135" cy="100" r="6" fill="#e74c3c"/>
        <animateTransform attributeName="transform" type="translate" values="0,0;30,0;0,0" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;0;0.7" dur="1.2s" repeatCount="indefinite"/>
      </g>
      <text x="100" y="160" text-anchor="middle" font-size="10" fill="#9b59b6">免费但拼命</text>
    </svg>`
  },

  DPENG: {
    code: 'DPENG',
    name: '大喷菇',
    englishName: 'Fume-shroom',
    keywords: ['AOE喷子', '穿透伤害', '范围攻击', '群体破防', '口臭攻击', '一喷一片'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a0a1a" width="200" height="200"/>
      <ellipse cx="100" cy="95" rx="45" ry="40" fill="#8e44ad">
        <animate attributeName="ry" values="40;42;40" dur="1s" repeatCount="indefinite"/>
      </ellipse>
      <circle cx="85" cy="88" r="5" fill="#fff"/>
      <circle cx="115" cy="88" r="5" fill="#fff"/>
      <ellipse cx="100" cy="105" rx="8" ry="5" fill="#333"/>
      <g>
        <ellipse cx="145" cy="95" rx="25" ry="15" fill="#9b59b6" opacity="0.4">
          <animate attributeName="rx" values="25;40;25" dur="1.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite"/>
        </ellipse>
        <ellipse cx="145" cy="95" rx="15" ry="8" fill="#9b59b6" opacity="0.6">
          <animate attributeName="rx" values="15;30;15" dur="1.5s" repeatCount="indefinite"/>
        </ellipse>
      </g>
      <text x="100" y="170" text-anchor="middle" font-size="10" fill="#9b59b6">AOE破防</text>
    </svg>`
  },

  WANDOU: {
    code: 'WANDOU',
    name: '豌豆射手',
    englishName: 'Peashooter',
    keywords: ['单线程输出', '稳定但平庸', '标准打工人', '节奏固定', '一颗一颗来', '职场基干'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0a1a0a" width="200" height="200"/>
      <circle cx="100" cy="100" r="35" fill="#27ae60"/>
      <circle cx="90" cy="92" r="5" fill="#fff"/>
      <circle cx="110" cy="92" r="5" fill="#fff"/>
      <circle cx="100" cy="108" r="4" fill="#1a5c3a"/>
      <g>
        <circle cx="140" cy="100" r="8" fill="#2ecc71">
          <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
        </circle>
      </g>
      <text x="100" y="160" text-anchor="middle" font-size="10" fill="#27ae60">一颗一颗来</text>
    </svg>`
  },

  SHUANG: {
    code: 'SHUANG',
    name: '双发射手',
    englishName: 'Repeater',
    keywords: ['双倍输出', '节奏快', '手速党', '连珠炮', '双倍工资就好了', '效率加倍'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0a1a0a" width="200" height="200"/>
      <circle cx="100" cy="100" r="38" fill="#27ae60"/>
      <circle cx="92" cy="92" r="5" fill="#fff"/>
      <circle cx="108" cy="92" r="5" fill="#fff"/>
      <ellipse cx="100" cy="110" rx="6" ry="4" fill="#1a5c3a"/>
      <g>
        <circle cx="140" cy="95" r="7" fill="#2ecc71">
          <animateTransform attributeName="transform" type="translate" values="0,0;25,0;0,0" dur="0.8s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="140" cy="105" r="7" fill="#2ecc71">
          <animateTransform attributeName="transform" type="translate" values="0,0;25,0;0,0" dur="0.8s" begin="0.2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0;1" dur="0.8s" begin="0.2s" repeatCount="indefinite"/>
        </circle>
      </g>
      <text x="100" y="165" text-anchor="middle" font-size="10" fill="#27ae60">哒哒哒哒</text>
    </svg>`
  },

  SANXIAN: {
    code: 'SANXIAN',
    name: '三线射手',
    englishName: 'Threepeater',
    keywords: ['多线程处理', '覆盖面广', '同时干三件事', '三心二意但有用', '全域监控', '分散投资'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#0a1a0a" width="200" height="200"/>
      <circle cx="100" cy="100" r="40" fill="#27ae60"/>
      <circle cx="90" cy="92" r="5" fill="#fff"/>
      <circle cx="110" cy="92" r="5" fill="#fff"/>
      <circle cx="100" cy="108" r="4" fill="#1a5c3a"/>
      <g>
        <circle cx="140" cy="80" r="6" fill="#2ecc71">
          <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="0.9s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite"/>
        </circle>
        <circle cx="140" cy="100" r="6" fill="#2ecc71">
          <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="0.9s" begin="0.15s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0;1" dur="0.9s" begin="0.15s" repeatCount="indefinite"/>
        </circle>
        <circle cx="140" cy="120" r="6" fill="#2ecc71">
          <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="0.9s" begin="0.3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0;1" dur="0.9s" begin="0.3s" repeatCount="indefinite"/>
        </circle>
      </g>
      <text x="100" y="165" text-anchor="middle" font-size="10" fill="#27ae60">三线齐发</text>
    </svg>`
  },

  // === 特殊行为型（2种）===
  RUSHI: {
    code: 'RUSHI',
    name: '急躁者',
    englishName: 'Rusher',
    keywords: ['连测试都等不及', '量子急躁体', 'instant gratification肉体化身', 'ADHD实体化', '火箭解体兔子'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a0a00" width="200" height="200"/>
      <path d="M100 40 L110 80 L150 85 L115 110 L125 150 L100 125 L75 150 L85 110 L50 85 L90 80 Z" fill="#e74c3c"/>
      <text x="100" y="185" text-anchor="middle" font-size="12" fill="#e74c3c">快！快！快！</text>
    </svg>`
  },
  
  SHENJ: {
    code: 'SHENJ',
    name: '神金',
    englishName: 'Shenjin',
    keywords: ['抽象大师', '胡言乱语', '行为艺术', '赛博精神病', '逻辑跳水运动员', '人类迷惑行为'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a0a1a" width="200" height="200"/>
      <g transform="translate(100,100)">
        <path d="M-40,-30 Q-20,-50 0,-35 Q20,-50 40,-30 Q50,0 30,30 Q0,45 -30,30 Q-50,0 -40,-30" fill="#e74c3c" opacity="0.8">
          <animateTransform attributeName="transform" type="rotate" values="0;15;-15;0" dur="0.8s" repeatCount="indefinite"/>
        </path>
        <path d="M-10,-10 L5,-10 L-5,5 L10,5 L-5,20" stroke="#f1c40f" stroke-width="3" fill="none">
          <animate attributeName="opacity" values="1;0.2;1" dur="0.3s" repeatCount="indefinite"/>
        </path>
        <text x="15" y="-5" font-size="20" fill="#fff" font-weight="bold">?</text>
      </g>
      <text x="100" y="165" text-anchor="middle" font-size="12" fill="#e74c3c">⚠️ 精神异常美丽</text>
    </svg>`
  },

  DAWEI: {
    code: 'DAWEI',
    name: '大卫戴',
    englishName: 'David Dai',
    keywords: ['胃袋控制大脑', '碳水教父', '吃播成精', '情绪不够饭来凑', '嘴巴不停脑子不转', '万物皆可炫'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#2d1b0f" width="200" height="200"/>
      <ellipse cx="100" cy="110" rx="55" ry="50" fill="#f4a460"/>
      <ellipse cx="100" cy="90" rx="20" ry="12" fill="#8b0000">
        <animate attributeName="ry" values="12;18;12" dur="1s" repeatCount="indefinite"/>
      </ellipse>
      <circle cx="75" cy="70" r="6" fill="#000"/>
      <circle cx="125" cy="70" r="6" fill="#000"/>
      <g>
        <rect x="120" y="134" width="20" height="4" fill="#f4a460"/>
        <rect x="118" y="138" width="24" height="6" fill="#8b4513"/>
        <rect x="120" y="144" width="20" height="4" fill="#f4a460"/>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="1.5s" repeatCount="indefinite"/>
      </g>
      <g transform="rotate(-30 60 150)">
        <ellipse cx="60" cy="150" rx="8" ry="15" fill="#daa520"/>
        <rect x="58" y="132" width="4" height="8" fill="#fff"/>
        <animateTransform attributeName="transform" type="translate" values="60,150;60,145;60,150" dur="1.2s" repeatCount="indefinite"/>
      </g>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#f4a460">胃袋控制大脑</text>
    </svg>`
  },

  RAND: {
    code: 'RAND',
    name: '随便者',
    englishName: 'Random',
    keywords: ['量子随机', '选择逃避', '骰子替身决策者', '薛定谔的贵物', '观测即坍缩'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#1a1a2e" width="200" height="200"/>
      <rect x="70" y="70" width="60" height="60" fill="#9b59b6" rx="10"/>
      <circle cx="85" cy="85" r="6" fill="#fff"/>
      <circle cx="115" cy="85" r="6" fill="#fff"/>
      <circle cx="100" cy="100" r="6" fill="#fff"/>
      <circle cx="85" cy="115" r="6" fill="#fff"/>
      <circle cx="115" cy="115" r="6" fill="#fff"/>
      <text x="100" y="155" text-anchor="middle" font-size="14" fill="#9b59b6">RAND</text>
      <text x="100" y="175" text-anchor="middle" font-size="10" fill="#888">量子叠加态</text>
    </svg>`
  }
};
