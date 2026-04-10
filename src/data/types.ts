import type { TypeProfile, SBTITypeCode } from '@/types';

/**
 * 127种人格类型完整定义
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
      
      <rect x="70" y="70" width="60" height="60" fill="#9b59b6" rx="10"/>
      <circle cx="85" cy="85" r="6" fill="#fff"/>
      <circle cx="115" cy="85" r="6" fill="#fff"/>
      <circle cx="100" cy="100" r="6" fill="#fff"/>
      <circle cx="85" cy="115" r="6" fill="#fff"/>
      <circle cx="115" cy="115" r="6" fill="#fff"/>
      <text x="100" y="155" text-anchor="middle" font-size="14" fill="#9b59b6">RAND</text>
      <text x="100" y="175" text-anchor="middle" font-size="10" fill="#888">量子叠加态</text>
    </svg>`
  },

  // === 新增78种人格（扩展至127种） ===
  HOUJ: {
    code: 'HOUJ',
    name: '吼叫者',
    englishName: 'Howler',
    keywords: ["声波武器", "无差别轰炸", "音量即正义", "耳朵刺客", "分贝恐怖分子", "情绪海啸"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#e74c3c">🔊</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#e74c3c" font-weight="bold">HOUJ</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Howler</text>
    </svg>`
  },

  BAOZ: {
    code: 'BAOZ',
    name: '暴躁者',
    englishName: 'Rager',
    keywords: ["点燃引线", "一触即发", "人形打火机", "愤怒永动机", "拆迁队队长"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#c0392b">💢</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#c0392b" font-weight="bold">BAOZ</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Rager</text>
    </svg>`
  },

  YINY: {
    code: 'YINY',
    name: '阴阳师',
    englishName: 'PassiveAggressive',
    keywords: ["话里有毒", "笑里藏刀", "软刀子杀人", "高级黑", "绿茶变红茶"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#8e44ad">🎭</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#8e44ad" font-weight="bold">YINY</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">PassiveAggressive</text>
    </svg>`
  },

  LENGL: {
    code: 'LENGL',
    name: '冷暴力者',
    englishName: 'ColdViolence',
    keywords: ["情感冰封", "已读不回升级版", "沉默核打击", "零度关系", "制冷专家"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#5dade2">❄️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#5dade2" font-weight="bold">LENGL</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">ColdViolence</text>
    </svg>`
  },

  HUIM: {
    code: 'HUIM',
    name: '毁灭者',
    englishName: 'Doomer',
    keywords: ["同归于尽", "掀桌子专家", "世界燃烧我添柴", "末日狂欢", "废墟爱好者"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#2c3e50">💀</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#2c3e50" font-weight="bold">HUIM</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Doomer</text>
    </svg>`
  },

  CHAO: {
    code: 'CHAO',
    name: '嘲讽者',
    englishName: 'Mocker',
    keywords: ["嘴强王者", "Debuff制造机", "insults批发商", "精神暴击", "毒舌成精"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#f39c12">🐍</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#f39c12" font-weight="bold">CHAO</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Mocker</text>
    </svg>`
  },

  BENG: {
    code: 'BENG',
    name: '崩溃者',
    englishName: 'Breakdown',
    keywords: ["随时宕机", "情绪蓝屏", "玻璃心粉碎机", "脆弱但大声", "系统报错中"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#3498db">💔</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#3498db" font-weight="bold">BENG</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Breakdown</text>
    </svg>`
  },

  FENN: {
    code: 'FENN',
    name: '愤青',
    englishName: 'AngryYouth',
    keywords: ["正义感过剩", "键盘革命家", "指点江山", "骂完就睡", "热血但无用"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#e67e22">✊</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#e67e22" font-weight="bold">FENN</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">AngryYouth</text>
    </svg>`
  },

  JING: {
    code: 'JING',
    name: '警觉者',
    englishName: 'Paranoid',
    keywords: ["草木皆兵", "被迫害预感", "everyone is watching", "安全模式全开", "疑神疑鬼"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#f1c40f">👁️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#f1c40f" font-weight="bold">JING</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Paranoid</text>
    </svg>`
  },

  YUAN: {
    code: 'YUAN',
    name: '怨灵',
    englishName: 'Resentful',
    keywords: ["陈年旧账永动机", "负能量发电机", "grievance收藏家", "世界欠我的", "怨气冲天"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#9b59b6">👻</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#9b59b6" font-weight="bold">YUAN</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Resentful</text>
    </svg>`
  },

  SHUI: {
    code: 'SHUI',
    name: '水军',
    englishName: 'WaterArmy',
    keywords: ["复制粘贴", "五毛一条", "评论区的NPC", "带节奏专业户", "流量民工"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#1abc9c">🤖</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#1abc9c" font-weight="bold">SHUI</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">WaterArmy</text>
    </svg>`
  },

  LIKE: {
    code: 'LIKE',
    name: '理中客',
    englishName: 'RationalMiddle',
    keywords: ["众人皆醉我独醒", "和稀泥大师", "其实两边都有错", "站着说话不腰疼"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#3498db">⚖️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#3498db" font-weight="bold">LIKE</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">RationalMiddle</text>
    </svg>`
  },

  GANG: {
    code: 'GANG',
    name: '杠精',
    englishName: 'DevilAdvocate',
    keywords: ["为了反对而反对", "人体ETC", "自动抬杠", "你说的不对", "全世界都错"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#e74c3c">⛔</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#e74c3c" font-weight="bold">GANG</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">DevilAdvocate</text>
    </svg>`
  },

  CHIG: {
    code: 'CHIG',
    name: '吃瓜者',
    englishName: 'MelonEater',
    keywords: ["围观专业户", "事不关己高高挂起", "前排兜售瓜子", "人类观察员"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#f39c12">🍉</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#f39c12" font-weight="bold">CHIG</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">MelonEater</text>
    </svg>`
  },

  YUYA: {
    code: 'YUYA',
    name: '预言家',
    englishName: 'Prophet',
    keywords: ["事后诸葛亮", "我早就说过", "马后炮冠军", "预测准确率0%"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#9b59b6">🔮</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#9b59b6" font-weight="bold">YUYA</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Prophet</text>
    </svg>`
  },

  KAOG: {
    code: 'KAOG',
    name: '考古学家',
    englishName: 'Archaeologist',
    keywords: ["挖坟高手", "三年前的帖子", "互联网记忆管理员", "洛阳铲"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#8e44ad">⛏️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#8e44ad" font-weight="bold">KAOG</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Archaeologist</text>
    </svg>`
  },

  GEZI: {
    code: 'GEZI',
    name: '鸽子精',
    englishName: 'Pigeon',
    keywords: ["放鸽子艺术家", "下次一定", "ComingSoon成精2.0", "信用破产"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#5dade2">🕊️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#5dade2" font-weight="bold">GEZI</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Pigeon</text>
    </svg>`
  },

  XIAO: {
    code: 'XIAO',
    name: '小丑',
    englishName: 'Joker',
    keywords: ["自娱自乐", "马戏团头牌", "🤡竟是我自己", "供人取乐", "悲剧内核"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#e91e63">🤡</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#e91e63" font-weight="bold">XIAO</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Joker</text>
    </svg>`
  },

  POFF: {
    code: 'POFF',
    name: '破防者',
    englishName: 'Defensive',
    keywords: ["玻璃心", "一说就急", "敏感肌", "防御性反击", "内心戏过多"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff9800">🛡️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff9800" font-weight="bold">POFF</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Defensive</text>
    </svg>`
  },

  KEYB: {
    code: 'KEYB',
    name: '键盘侠',
    englishName: 'KeyboardWarrior',
    keywords: ["线上王者线下废物", "隔着屏幕勇冠三军", "现实中的透明人"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#607d8b">⌨️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#607d8b" font-weight="bold">KEYB</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">KeyboardWarrior</text>
    </svg>`
  },

  MAIM: {
    code: 'MAIM',
    name: '卖惨王',
    englishName: 'VictimPlayer',
    keywords: ["比惨大赛冠军", "我太难了", "苦难博览会", "博取同情专业户"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#795548">😭</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#795548" font-weight="bold">MAIM</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">VictimPlayer</text>
    </svg>`
  },

  XUAN: {
    code: 'XUAN',
    name: '炫狗',
    englishName: 'ShowOff',
    keywords: ["凡尔赛2.0", "优越感喷射机", "彰显型人格", "存在感拍卖"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ffeb3b">💎</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ffeb3b" font-weight="bold">XUAN</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">ShowOff</text>
    </svg>`
  },

  CHOU: {
    code: 'CHOU',
    name: '仇富者',
    englishName: 'RichHater',
    keywords: ["酸葡萄专业户", "见不得别人好", "redistribute the wealth", "贫富差距焦虑"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff5722">🍋</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff5722" font-weight="bold">CHOU</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">RichHater</text>
    </svg>`
  },

  CHUAN: {
    code: 'CHUAN',
    name: '传谣机',
    englishName: 'RumorMill',
    keywords: ["震惊部主编", "不转不是中国人", "谣言加速器", "判断力为0"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#9e9e9e">📢</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#9e9e9e" font-weight="bold">CHUAN</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">RumorMill</text>
    </svg>`
  },

  MAIP: {
    code: 'MAIP',
    name: '麦麸精',
    englishName: 'BLbaiter',
    keywords: ["强行卖腐", "工业糖精", "CP脑", "嗑糖机器", "按头安利"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#e91e63">💕</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#e91e63" font-weight="bold">MAIP</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">BLbaiter</text>
    </svg>`
  },

  YUEG: {
    code: 'YUEG',
    name: '月光族',
    englishName: 'Moonlight',
    keywords: ["工资一日光", "花呗继承人", "精致穷2.0", "超前消费", "下个月再说"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#00bcd4">💸</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#00bcd4" font-weight="bold">YUEG</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Moonlight</text>
    </svg>`
  },

  TUNJI: {
    code: 'TUNJI',
    name: '囤积狂',
    englishName: 'Hoarder',
    keywords: ["断舍离绝缘体", "垃圾收藏家", "万一以后有用呢", "空间压缩大师"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#8bc34a">📦</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#8bc34a" font-weight="bold">TUNJI</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Hoarder</text>
    </svg>`
  },

  JIEP: {
    code: 'JIEP',
    name: '洁癖精',
    englishName: 'Germaphobe',
    keywords: ["细菌狙击手", "消毒水爱好者", "脏乱差禁区", "强迫症晚期"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#03a9f4">🧼</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#03a9f4" font-weight="bold">JIEP</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Germaphobe</text>
    </svg>`
  },

  TUOY: {
    code: 'TUOY',
    name: '拖延癌',
    englishName: 'Procrastinator',
    keywords: ["deadline是第一生产力", "明天一定", "拖延到地球毁灭"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff9800">⏰</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff9800" font-weight="bold">TUOY</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Procrastinator</text>
    </svg>`
  },

  XUANZ: {
    code: 'XUANZ',
    name: '选择瘫',
    englishName: 'Indecisive',
    keywords: ["随便吧", "你决定", "选择恐惧症", "站在柜台前半小时"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#9c27b0">🎲</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#9c27b0" font-weight="bold">XUANZ</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Indecisive</text>
    </svg>`
  },

  TAOH: {
    code: 'TAOH',
    name: '讨好精',
    englishName: 'PeoplePleaser',
    keywords: ["不敢说不", "委屈求全", "老好人", "边界感为0", "被使唤体质"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff4081">🙇</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff4081" font-weight="bold">TAOH</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">PeoplePleaser</text>
    </svg>`
  },

  HUIB: {
    code: 'HUIB',
    name: '回避怪',
    englishName: 'Avoidant',
    keywords: ["遇到问题就消失", "鸵鸟成精", "责任恐惧症", "逃跑到宇宙尽头"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#3f51b5">🐢</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#3f51b5" font-weight="bold">HUIB</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Avoidant</text>
    </svg>`
  },

  BIAO: {
    code: 'BIAO',
    name: '表演家',
    englishName: 'Histrionic',
    keywords: ["戏精附体", "全世界都是观众", "夸张到失真", "情绪表演艺术家"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#e91e63">🎬</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#e91e63" font-weight="bold">BIAO</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Histrionic</text>
    </svg>`
  },

  BEIH: {
    code: 'BEIH',
    name: '被迫害妄想',
    englishName: 'Persecutory',
    keywords: ["全世界都想害我", "阴谋论爱好者", "过度防御", "信任值为负"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#f44336">🕵️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#f44336" font-weight="bold">BEIH</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Persecutory</text>
    </svg>`
  },

  ZIL: {
    code: 'ZIL',
    name: '自恋狂',
    englishName: 'Narcissist',
    keywords: ["镜子里的神", "自拍一千张", "全世界都爱我", "自我陶醉"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ffeb3b">🪞</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ffeb3b" font-weight="bold">ZIL</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Narcissist</text>
    </svg>`
  },

  KONG: {
    code: 'KONG',
    name: '控制狂',
    englishName: 'ControlFreak',
    keywords: ["计划必须执行", "零容忍失控", "micromanagement", "别人的人生导演"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#673ab7">🎮</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#673ab7" font-weight="bold">KONG</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">ControlFreak</text>
    </svg>`
  },

  LAI: {
    code: 'LAI',
    name: '赖皮蛇',
    englishName: 'Freeloader',
    keywords: ["占便宜没够", "蹭吃蹭喝", "借钱不还", "脸皮厚成城墙"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#8bc34a">🐍</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#8bc34a" font-weight="bold">LAI</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Freeloader</text>
    </svg>`
  },

  XIAOQI: {
    code: 'XIAOQI',
    name: '铁公鸡',
    englishName: 'Miser',
    keywords: ["一分钱掰成两半", "抠门成精", "AA到小数点后两位"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ffc107">🐔</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ffc107" font-weight="bold">XIAOQI</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Miser</text>
    </svg>`
  },

  DAREN: {
    code: 'DAREN',
    name: '假大户',
    englishName: 'FakeRich',
    keywords: ["打肿脸充胖子", "Fake it till you make it", "虚荣至死", "面子工程"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff5722">💳</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff5722" font-weight="bold">DAREN</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">FakeRich</text>
    </svg>`
  },

  SHEK: {
    code: 'SHEK',
    name: '社渴症',
    englishName: 'SocialThirsty',
    keywords: ["疯狂加好友", "没人理我好孤独", "社交饥渴", "群发消息求回复"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#2196f3">📱</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#2196f3" font-weight="bold">SHEK</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">SocialThirsty</text>
    </svg>`
  },

  DUNJ: {
    code: 'DUNJ',
    name: '钝角',
    englishName: 'ObtuseAngle',
    keywords: ["九十三度", "无所谓都行", "没有意义就是意义", "抽象鼻祖"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#607d8b">📐</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#607d8b" font-weight="bold">DUNJ</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">ObtuseAngle</text>
    </svg>`
  },

  YITP: {
    code: 'YITP',
    name: '依托答辩',
    englishName: 'Shitpost',
    keywords: ["满嘴胡言", "后现代排泄物", "互联网沼气池", "毫无营养"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#795548">💩</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#795548" font-weight="bold">YITP</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Shitpost</text>
    </svg>`
  },

  JUEJ: {
    code: 'JUEJ',
    name: '绝绝子',
    englishName: 'Juejuezi',
    keywords: ["yyds", "跺jiojio", "无语子", "互联网语言退化症"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#e91e63">💖</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#e91e63" font-weight="bold">JUEJ</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Juejuezi</text>
    </svg>`
  },

  TAIK: {
    code: 'TAIK',
    name: '泰裤辣',
    englishName: 'TooCool',
    keywords: ["泰裤辣", "雪distance", "这种天赋给我我不要", "流行语复读机"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#9c27b0">🎤</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#9c27b0" font-weight="bold">TAIK</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">TooCool</text>
    </svg>`
  },

  ZUND: {
    code: 'ZUND',
    name: '尊嘟假嘟',
    englishName: 'ReallyDoge',
    keywords: ["宝宝辅食", "绝绝子2.0", "语言幼化", "卖萌至死"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff80ab">🐶</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff80ab" font-weight="bold">ZUND</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">ReallyDoge</text>
    </svg>`
  },

  BABI: {
    code: 'BABI',
    name: '芭比Q',
    englishName: 'BBQ',
    keywords: ["完了完了", "彻底芭比Q", "摆烂口号", "焦虑口头禅"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff5722">🔥</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff5722" font-weight="bold">BABI</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">BBQ</text>
    </svg>`
  },

  WEMO: {
    code: 'WEMO',
    name: '我emo了',
    englishName: 'EmoMe',
    keywords: ["网抑云2.0", "到点准时崩溃", "情绪垃圾桶", "午夜心碎"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#3f51b5">🌧️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#3f51b5" font-weight="bold">WEMO</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">EmoMe</text>
    </svg>`
  },

  SHUS: {
    code: 'SHUS',
    name: '鼠鼠',
    englishName: 'Rat',
    keywords: ["下水道居民", "阴暗爬行", "社畜自嘲", "卑微到尘土"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#607d8b">🐭</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#607d8b" font-weight="bold">SHUS</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Rat</text>
    </svg>`
  },

  MALO: {
    code: 'MALO',
    name: '吗喽',
    englishName: 'Monkey',
    keywords: ["猴命也是命", "打工猴", "厂里的吗喽", "廉价劳动力自嘲"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#8d6e63">🐒</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#8d6e63" font-weight="bold">MALO</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Monkey</text>
    </svg>`
  },

  DANR: {
    code: 'DANR',
    name: '淡人',
    englishName: 'LightPerson',
    keywords: ["情绪稳定到像死了", "淡淡的", "都行随便", "低饱和度人生"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#b0bec5">🌫️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#b0bec5" font-weight="bold">DANR</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">LightPerson</text>
    </svg>`
  },

  NONG: {
    code: 'NONG',
    name: '浓人',
    englishName: 'IntensePerson',
    keywords: ["情绪饱满到溢出", "夸张的", "戏剧性的", "高饱和度人生"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff4081">🌈</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff4081" font-weight="bold">NONG</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">IntensePerson</text>
    </svg>`
  },

  GELI: {
    code: 'GELI',
    name: '哥布林',
    englishName: 'Goblin',
    keywords: ["阴暗角落", "不敢直视异性", "自卑成精", "洞穴居民"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#4caf50">👺</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#4caf50" font-weight="bold">GELI</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Goblin</text>
    </svg>`
  },

  SHIL: {
    code: 'SHIL',
    name: '史莱姆',
    englishName: 'Slime',
    keywords: ["没有骨头", "随波逐流", "任人揉捏", "软体动物"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#8bc34a">🦠</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#8bc34a" font-weight="bold">SHIL</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Slime</text>
    </svg>`
  },

  DIAN: {
    code: 'DIAN',
    name: '电子幽灵',
    englishName: 'DigitalGhost',
    keywords: ["赛博亡灵", "活在互联网", "现实躯体只是容器"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#00bcd4">👻</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#00bcd4" font-weight="bold">DIAN</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">DigitalGhost</text>
    </svg>`
  },

  SHUJU: {
    code: 'SHUJU',
    name: '数据寄生虫',
    englishName: 'DataParasite',
    keywords: ["白嫖流量", "薅羊毛成精", "平台吸血鬼", "永不付费"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#9e9e9e">🦟</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#9e9e9e" font-weight="bold">SHUJU</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">DataParasite</text>
    </svg>`
  },

  SAIBO: {
    code: 'SAIBO',
    name: '赛博该溜子',
    englishName: 'CyberLoafer',
    keywords: ["互联网街溜子", "到处闲逛", "无所事事", "虚拟游荡"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff9800">🛹</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff9800" font-weight="bold">SAIBO</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">CyberLoafer</text>
    </svg>`
  },

  PING: {
    code: 'PING',
    name: '平头哥',
    englishName: 'HoneyBadger',
    keywords: ["生死看淡不服就干", "无所畏惧", "莽夫", "头铁"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff5722">🦨</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff5722" font-weight="bold">PING</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">HoneyBadger</text>
    </svg>`
  },

  WAIF: {
    code: 'WAIF',
    name: '外E内I',
    englishName: 'ExtrovertedIntrovert',
    keywords: ["社交面具戴久了", "回家立刻没电", "台上表演台下自闭"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#673ab7">🎭</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#673ab7" font-weight="bold">WAIF</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">ExtrovertedIntrovert</text>
    </svg>`
  },

  BACH: {
    code: 'BACH',
    name: '八爪鱼',
    englishName: 'Octopus',
    keywords: ["多线程怪物", "什么都想抓", "注意力分散", "busy but useless"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff5722">🐙</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff5722" font-weight="bold">BACH</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Octopus</text>
    </svg>`
  },

  APIJ: {
    code: 'APIJ',
    name: 'API接口',
    englishName: 'API',
    keywords: ["调用即响应", "没有情感只有协议", "被人使唤", "接口文档不清晰"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#607d8b">🔌</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#607d8b" font-weight="bold">APIJ</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">API</text>
    </svg>`
  },

  JSON: {
    code: 'JSON',
    name: 'JSON对象',
    englishName: 'JSON',
    keywords: ["结构清晰但空洞", "键值对人生", "格式化良好", "没有灵魂"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#f39c12">{ }</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#f39c12" font-weight="bold">JSON</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">JSON</text>
    </svg>`
  },

  SQLJ: {
    code: 'SQLJ',
    name: 'SQL注入',
    englishName: 'SQLInjection',
    keywords: ["钻空子高手", "绕过规则", "输入即输出", "破坏性查询"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#e74c3c">💉</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#e74c3c" font-weight="bold">SQLJ</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">SQLInjection</text>
    </svg>`
  },

  VPNJ: {
    code: 'VPNJ',
    name: 'VPN翻墙',
    englishName: 'VPN',
    keywords: ["墙外看世界", "不稳定", "时断时续", "躲在隧道里"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#9c27b0">🔒</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#9c27b0" font-weight="bold">VPNJ</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">VPN</text>
    </svg>`
  },

  COOK: {
    code: 'COOK',
    name: 'Cookie跟踪',
    englishName: 'Cookie',
    keywords: ["被网站记住", "隐私为0", "数字脚印", "尾随者"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff9800">🍪</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff9800" font-weight="bold">COOK</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Cookie</text>
    </svg>`
  },

  CACH: {
    code: 'CACH',
    name: 'Cache失效',
    englishName: 'Cache',
    keywords: ["记性不好", "需要反复提醒", "过期即不存在", "缓存未命中"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#03a9f4">🧠</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#03a9f4" font-weight="bold">CACH</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Cache</text>
    </svg>`
  },

  DOCK: {
    code: 'DOCK',
    name: 'Docker容器',
    englishName: 'Docker',
    keywords: ["与世隔绝", "环境依赖", "封装但孤独", "容器化生存"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#2196f3">📦</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#2196f3" font-weight="bold">DOCK</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Docker</text>
    </svg>`
  },

  GITJ: {
    code: 'GITJ',
    name: 'Git冲突',
    englishName: 'GitConflict',
    keywords: ["和别人合不来", "merge失败", "版本混乱", "人际关系冲突"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#f44336">⚔️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#f44336" font-weight="bold">GITJ</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">GitConflict</text>
    </svg>`
  },

  ROOT: {
    code: 'ROOT',
    name: 'Root权限',
    englishName: 'Root',
    keywords: ["掌控一切", "越狱者", "打破规则", "超级用户"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#4caf50">🔑</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#4caf50" font-weight="bold">ROOT</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Root</text>
    </svg>`
  },

  BUG2: {
    code: 'BUG2',
    name: '二舅治愈',
    englishName: 'SecondUncle',
    keywords: ["精神内耗良药", "乡村哲学家", "躺平 mentors", "rustic wisdom"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#8bc34a">🌾</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#8bc34a" font-weight="bold">BUG2</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">SecondUncle</text>
    </svg>`
  },

  SHENG: {
    code: 'SHENG',
    name: '道德圣人',
    englishName: 'Saint',
    keywords: ["站在制高点", "道德绑架", "完美无瑕", "审判众生"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#00bcd4">😇</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#00bcd4" font-weight="bold">SHENG</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Saint</text>
    </svg>`
  },

  XIAN: {
    code: 'XIAN',
    name: '咸鱼干',
    englishName: 'SaltedFish',
    keywords: ["躺平2.0", "翻身也不想翻", "晒干了沉默", "彻底放弃"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#b0bec5">🐟</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#b0bec5" font-weight="bold">XIAN</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">SaltedFish</text>
    </svg>`
  },

  WOYU: {
    code: 'WOYU',
    name: '无语子',
    englishName: 'Speechless',
    keywords: ["无话可说", "翻白眼", "累了毁灭吧", "沟通障碍"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#9e9e9e">🙄</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#9e9e9e" font-weight="bold">WOYU</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Speechless</text>
    </svg>`
  },

  DADE: {
    code: 'DADE',
    name: '大冤种',
    englishName: 'BigSucker',
    keywords: ["背锅侠", "吃亏是福", "被坑专业户", "倒霉蛋"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#795548">🎒</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#795548" font-weight="bold">DADE</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">BigSucker</text>
    </svg>`
  },

  FANS: {
    code: 'FANS',
    name: '反PUA师',
    englishName: 'AntiPUA',
    keywords: ["过度防御", "谁都想控制我", "敏感多疑", "拒绝一切建议"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff5722">🛡️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff5722" font-weight="bold">FANS</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">AntiPUA</text>
    </svg>`
  },

  HEIH: {
    code: 'HEIH',
    name: '黑化版',
    englishName: 'Darkened',
    keywords: ["已黑化", "小学生式叛逆", "冷酷无情", "非主流复兴"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#2c3e50">🖤</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#2c3e50" font-weight="bold">HEIH</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">Darkened</text>
    </svg>`
  },

  BAIH: {
    code: 'BAIH',
    name: '白莲花',
    englishName: 'WhiteLotus',
    keywords: ["装无辜", "绿茶进阶版", "纯洁人设", "实则心机"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ecf0f1">🪷</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ecf0f1" font-weight="bold">BAIH</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">WhiteLotus</text>
    </svg>`
  },

  CHAH: {
    code: 'CHAH',
    name: '茶艺师',
    englishName: 'TeaMaster',
    keywords: ["茶言茶语", "高端绿茶", "润物细无声", "以柔克刚"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#a1887f">🍵</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#a1887f" font-weight="bold">CHAH</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">TeaMaster</text>
    </svg>`
  },

  KENG: {
    code: 'KENG',
    name: '坑王',
    englishName: 'PitKing',
    keywords: ["挖坑不填", "队友杀手", "承诺即谎言", "专业掉链子"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="100" y="105" text-anchor="middle" font-size="64" fill="#ff5722">🕳️</text>
      <text x="100" y="170" text-anchor="middle" font-size="12" fill="#ff5722" font-weight="bold">KENG</text>
      <text x="100" y="185" text-anchor="middle" font-size="10" fill="#888">PitKing</text>
    </svg>`
  }
};
