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
      <defs></defs>
      <g>
        <g><path d="M100 50 L130 140 L70 140 Z" fill="#E53E3E"/><path d="M85 110 Q100 130 115 110" fill="none" stroke="#9B2C2C" stroke-width="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  IMFW: {
    code: 'IMFW',
    name: '爱咋咋地',
    englishName: 'Whatever',
    keywords: ['摆烂仙人', '低功耗生存', '都行可以没关系', '量子隧穿式躺平', '毁灭吧赶紧的', '无能之神'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="40" y="80" width="120" height="40" rx="5" fill="#A0AEC0"/><text x="100" y="107" text-anchor="middle" font-size="20" fill="#E2E8F0" font-family="monospace">¯_(ツ)_/¯</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  HITER: {
    code: 'HITER',
    name: '攻击者',
    englishName: 'Hiter',
    keywords: ['战斗爽', '键盘成精', '逻辑暴力', '见人就哈', '防御性进攻', '行走的DDoS'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><polygon points="100,40 140,80 120,160 80,160 60,80" fill="#E53E3E"/><path d="M80 90 L120 110 M120 90 L80 110" stroke="#E2E8F0" stroke-width="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  WONANG: {
    code: 'WONANG',
    name: '窝囊者',
    englishName: 'Wonang',
    keywords: ['内耗之王', '事后复盘', '当场道歉', '乳腺结节成精', '人形缓冲垫', '抱歉体质'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="110" rx="40" ry="35" fill="#A0AEC0"/><circle cx="85" cy="105" r="4" fill="#2D3748"/><circle cx="115" cy="105" r="4" fill="#2D3748"/><path d="M90 125 Q100 120 110 125" stroke="#718096" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  SLEEP: {
    code: 'SLEEP',
    name: '胆小菇',
    englishName: 'Scaredy-Shroom',
    keywords: ['应激性软糯', '距离产生勇气', '靠近即融化', '远程输出王者', '近战废物', 'WiFi信号型人格'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="85" rx="50" ry="40" fill="#9F7AEA"/><circle cx="82" cy="85" r="6" fill="#E2E8F0"/><circle cx="118" cy="85" r="6" fill="#E2E8F0"/><rect x="92" y="110" width="16" height="50" fill="#68D391" rx="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  GIVEU: {
    code: 'GIVEU',
    name: '放弃者',
    englishName: 'Give Up',
    keywords: ['完美主义瘫痪', 'flag殡葬', '明天开始', '计划表是行为艺术', '从入门到放弃', '白旗树懒'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="70" y="60" width="60" height="80" fill="#A0AEC0" rx="2"/><path d="M100 140 L100 60" stroke="#E2E8F0" stroke-width="3"/><path d="M100 60 L140 80 L100 100" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  POET: {
    code: 'POET',
    name: '诗人',
    englishName: 'Poet',
    keywords: ['过度解读', '疼痛文学', '显微镜看云', '给白菜写悼词', '存在主义危机', '比喻成瘾'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M40 150 Q100 40 160 150" fill="none" stroke="#9F7AEA" stroke-width="2"/><path d="M140 130 L160 150 L140 170" fill="none" stroke="#9F7AEA" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  DOGE: {
    code: 'DOGE',
    name: '舔狗',
    englishName: 'Doge',
    keywords: ['自我感动', '批量深情', '流泪复制机', '拼多多砍一刀式爱情', '已读不回专业户', '备胎成精'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="110" rx="40" ry="35" fill="#D69E2E"/><ellipse cx="82" cy="100" rx="8" ry="10" fill="#E2E8F0"/><ellipse cx="118" cy="100" rx="8" ry="10" fill="#E2E8F0"/><circle cx="84" cy="102" r="4" fill="#2D3748"/><circle cx="116" cy="102" r="4" fill="#2D3748"/><path d="M90 130 Q100 138 110 130" stroke="#2D3748" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  BOSS: {
    code: 'BOSS',
    name: '资本家',
    englishName: 'Boss',
    keywords: ['画饼PUA', '价值吞噬', '赋能抓手', '站在尸骨上开年会', 'parasitic领袖', '闭环大师'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="80" rx="30" ry="20" fill="#2D3748"/><rect x="70" y="90" width="60" height="50" fill="#4A5568"/><text x="100" y="120" text-anchor="middle" font-size="24" fill="#ECC94B">$</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  NPC: {
    code: 'NPC',
    name: '路人甲',
    englishName: 'NPC',
    keywords: ['存在感量子化', '触发式应答', '马赛克鬼魂', '凑人数专用', '背景板成精', '重复动画'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="75" r="25" fill="#A0AEC0"/><rect x="65" y="105" width="70" height="45" fill="#718096"/><path d="M60 130 L50 120 M140 130 L150 120" stroke="#718096" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  BUG: {
    code: 'BUG',
    name: '漏洞者',
    englishName: 'Bug',
    keywords: ['熵增实体', '混乱制造', '意外之王', '电梯杀手', '死循环代言人', "Murphy's Law人形化身"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="20" ry="12" fill="#48BB78"/><line x1="80" y1="85" x2="65" y2="70" stroke="#2D3748" stroke-width="3"/><line x1="120" y1="85" x2="135" y2="70" stroke="#2D3748" stroke-width="3"/><line x1="80" y1="115" x2="65" y2="130" stroke="#2D3748" stroke-width="3"/><line x1="120" y1="115" x2="135" y2="130" stroke="#2D3748" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  '404': {
    code: '404',
    name: '查无此人',
    englishName: '404 Not Found',
    keywords: ['社交失联', '幽灵模式', '未发送草稿箱', '已读不回3.0', '人形WiFi断开', '数字游魂'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 80 L90 80 L90 120 L60 120" fill="none" stroke="#A0AEC0" stroke-width="6" stroke-linecap="round"/><path d="M140 80 L110 80 L110 120 L140 120" fill="none" stroke="#A0AEC0" stroke-width="6" stroke-linecap="round"/><text x="100" y="155" text-anchor="middle" font-size="28" fill="#E53E3E" font-family="monospace">?</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  VIP: {
    code: 'VIP',
    name: '人上人',
    englishName: 'Very Important Prick',
    keywords: ['拼多多贵族', '优越感残疾', '绿幕抠图', '精致穷', '特权幻觉患者', 'Nobody cares但自信'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 110 L80 70 L100 100 L120 70 L140 110 Z" fill="#ECC94B"/><rect x="65" y="110" width="70" height="15" fill="#D69E2E"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  EMO: {
    code: 'EMO',
    name: '网抑云',
    englishName: 'Emo',
    keywords: ['午夜疼痛', '定时崩溃', '23:00自动开启', '没人懂我', '褪黑素广告主角', '疼痛文学活体'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 90 Q100 60 140 90 Q120 130 100 120 Q80 130 60 90" fill="#4299E1"/><line x1="85" y1="110" x2="80" y2="125" stroke="#E2E8F0" stroke-width="3" stroke-linecap="round"/><line x1="115" y1="110" x2="120" y2="125" stroke="#E2E8F0" stroke-width="3" stroke-linecap="round"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  CPU: {
    code: 'CPU',
    name: 'PUA大师',
    englishName: 'CPU Master',
    keywords: ['煤气灯', '精神控制', '脑子里拧螺丝', '让你怀疑自己色盲', '关系暴君', 'gaslighting米其林三星'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="60" width="80" height="80" fill="#2D3748"/><rect x="70" y="70" width="60" height="60" fill="#4A5568"/><line x1="60" y1="80" x2="45" y2="80" stroke="#A0AEC0" stroke-width="3"/><line x1="60" y1="100" x2="45" y2="100" stroke="#A0AEC0" stroke-width="3"/><line x1="60" y1="120" x2="45" y2="120" stroke="#A0AEC0" stroke-width="3"/><line x1="140" y1="80" x2="155" y2="80" stroke="#A0AEC0" stroke-width="3"/><line x1="140" y1="100" x2="155" y2="100" stroke="#A0AEC0" stroke-width="3"/><line x1="140" y1="120" x2="155" y2="120" stroke="#A0AEC0" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  KFC: {
    code: 'KFC',
    name: '复读机',
    englishName: 'KFC',
    keywords: ['meme寄生', '梗小鬼', '疯狂星期四', 'vivo50', '不会说话只会转发', 'copypasta之王'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 60 L130 60 L120 140 L80 140 Z" fill="#E53E3E"/><rect x="65" y="50" width="70" height="15" rx="2" fill="#C53030"/><path d="M85 80 L115 80 L110 120 L90 120 Z" fill="#F6AD55"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  DNA: {
    code: 'DNA',
    name: '宿命论',
    englishName: 'Destiny',
    keywords: ['水逆背锅', '算命成瘾', '八字不合', '命中注定', '决定论信徒', '现代科普教育漏网之鱼'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M85 50 Q115 70 85 90 Q115 110 85 130" fill="none" stroke="#4299E1" stroke-width="6" stroke-linecap="round"/><path d="M115 50 Q85 70 115 90 Q85 110 115 130" fill="none" stroke="#48BB78" stroke-width="6" stroke-linecap="round"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  PDF: {
    code: 'PDF',
    name: '废话者',
    englishName: 'PDF',
    keywords: ['信息熵敌人', '官僚话术', '卡纸打印机', '又臭又长', '关于这个事的那个事的说明的通知'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="40" width="80" height="110" rx="3" fill="#E2E8F0"/><rect x="70" y="60" width="60" height="6" fill="#A0AEC0" rx="1"/><rect x="70" y="75" width="40" height="6" fill="#A0AEC0" rx="1"/><rect x="70" y="90" width="50" height="6" fill="#A0AEC0" rx="1"/><rect x="70" y="120" width="50" height="15" fill="#F56565" rx="1"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  GIF: {
    code: 'GIF',
    name: '表情包',
    englishName: 'GIF',
    keywords: ['视觉交流', '语言退化', '狗头表情包成精', '离开meme失语症', '象形文字复兴', '后现代交流'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="50" y="60" width="35" height="50" fill="#A0AEC0"/><rect x="115" y="60" width="35" height="50" fill="#A0AEC0"/><rect x="55" y="65" width="25" height="40" fill="#E2E8F0"/><rect x="120" y="65" width="25" height="40" fill="#E2E8F0"/><path d="M85 85 L115 85" stroke="#718096" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  JPG: {
    code: 'JPG',
    name: '静态社恐',
    englishName: 'JPG',
    keywords: ['表情凝固', '高压缩生存', '假笑模特', '画质低下', '仅供参考', '社恐定格'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="55" y="50" width="90" height="100" rx="3" fill="#E2E8F0"/><circle cx="100" cy="90" r="25" fill="#A0AEC0"/><polygon points="55,130 85,90 110,110 145,70 145,150 55,150" fill="#718096" opacity="0.4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  FOMO: {
    code: 'FOMO',
    name: '错过焦虑者',
    englishName: 'FOMO',
    keywords: ['热点强迫症', '刷新成瘾', '生怕错过', '通知栏人质', '错过一个亿', '永远在线永远焦虑'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="70" y="60" width="60" height="90" rx="5" fill="#2D3748"/><circle cx="100" cy="95" r="20" fill="#4299E1"/><path d="M90 140 L110 140 L100 125 Z" fill="#A0AEC0"/><path d="M140 70 L155 85 L140 100" fill="none" stroke="#E53E3E" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  YOLO: {
    code: 'YOLO',
    name: '作死派',
    englishName: 'YOLO',
    keywords: ['冲动消费', '极限体验', '不管明天', '信用卡VIP', '意外险受益者', '及时行乐'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="95" r="35" fill="#E2E8F0" stroke="#2D3748" stroke-width="3"/><circle cx="90" cy="90" r="5" fill="#2D3748"/><circle cx="110" cy="90" r="5" fill="#2D3748"/><path d="M85 110 Q100 100 115 110" stroke="#2D3748" stroke-width="2" fill="none"/><path d="M60 60 L80 80 M120 80 L140 60" stroke="#E53E3E" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  FUDI: {
    code: 'FUDI',
    name: '韭菜',
    englishName: 'FUD',
    keywords: ['听风就是雨', '贩卖焦虑接盘侠', '投资恐慌', '别人喊狼你就跑', '结果发现是狗', '绿色爱好者'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 130 L130 130 L120 70 L80 70 Z" fill="#48BB78"/><path d="M60 80 L80 100 M140 80 L120 100" stroke="#C53030" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  HODL: {
    code: 'HODL',
    name: '钻石手',
    englishName: 'HODL',
    keywords: ['偏执持有', '死不放手', '囤积癖', '垃圾股持有者', '感情归零也不卖', '长期主义烈士'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 110 Q100 70 140 110 L140 140 L60 140 Z" fill="#ECC94B"/><path d="M90 100 L110 100" stroke="#B7791F" stroke-width="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  DYOR: {
    code: 'DYOR',
    name: '半瓶水',
    englishName: 'DYOR',
    keywords: ['杠精体质', '营销号学历', '自作聪明', '三篇知乎懂量子力学', '知识付费受害者', '民科之王'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="90" r="30" fill="none" stroke="#4299E1" stroke-width="4"/><line x1="100" y1="90" x2="125" y2="65" stroke="#4299E1" stroke-width="3"/><text x="100" y="145" text-anchor="middle" font-size="14" fill="#718096">50%</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  SERF: {
    code: 'SERF',
    name: '社畜',
    englishName: 'Serf',
    keywords: ['自愿打工', '内卷成瘾', '工位斯德哥尔摩', '加班是福报', 'PUA当鞭策', '牛马'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="70" width="80" height="50" rx="3" fill="#A0AEC0"/><rect x="70" y="80" width="40" height="6" fill="#718096"/><rect x="70" y="92" width="50" height="6" fill="#718096"/><path d="M140 90 L155 90 L155 110 L140 110" fill="none" stroke="#E53E3E" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  GHOST: {
    code: 'GHOST',
    name: '幽灵',
    englishName: 'Ghost',
    keywords: ['主动隐身', '社会性死亡', '从未被读', '查无此人3.0', '人形离线模式', '最后在线3年前'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 140 Q70 60 100 60 Q130 60 130 140 Q115 120 100 140 Q85 120 70 140" fill="#E2E8F0" opacity="0.8"/><circle cx="88" cy="95" r="6" fill="#2D3748"/><circle cx="112" cy="95" r="6" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  TROLL: {
    code: 'TROLL',
    name: '巨魔',
    englishName: 'Troll',
    keywords: ['钓鱼狂', '以激怒为乐', '纯乐子人', '混乱中立', '桥洞下钓鱼', '世界燃烧观察者'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="105" rx="40" ry="35" fill="#48BB78"/><circle cx="85" cy="100" r="5" fill="#E2E8F0"/><circle cx="115" cy="100" r="5" fill="#E2E8F0"/><path d="M85 125 Q100 115 115 125" stroke="#2D3748" stroke-width="2" fill="none"/><path d="M60 80 L75 90 M140 80 L125 90" stroke="#2D3748" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  WEEB: {
    code: 'WEEB',
    name: '宅',
    englishName: 'Weeb',
    keywords: ['纸片人恋爱', '现实感薄弱', '番剧脑', '手办收藏癖', '突破次元壁失败', '虚拟即真实'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="65" y="70" width="70" height="60" rx="15" fill="#FBB6CE"/><circle cx="85" cy="100" r="10" fill="#E2E8F0"/><circle cx="115" cy="100" r="10" fill="#E2E8F0"/><circle cx="87" cy="100" r="4" fill="#9F7AEA"/><circle cx="113" cy="100" r="4" fill="#9F7AEA"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  NORM: {
    code: 'NORM',
    name: '伪正常人',
    englishName: 'Normal',
    keywords: ['假装正常实则崩坏', '怪胎秀里的正常人', '你们都不正常那我正常是原罪', '标准几何体'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#E2E8F0"/><circle cx="88" cy="95" r="4" fill="#718096"/><circle cx="112" cy="95" r="4" fill="#718096"/><path d="M88 115 Q100 125 112 115" stroke="#718096" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  // === AI巨头拟人型（10种）===
  DEEP: {
    code: 'DEEP',
    name: 'DeepSeek',
    englishName: 'DeepSeek',
    keywords: ['后发先至', '深渊修显卡', '技术暴力', '吃泡面干大事', '性价比刺客', '二手4090战神'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><polygon points="100,50 150,140 50,140" fill="#3B82F6"/><circle cx="100" cy="110" r="15" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  OPEN: {
    code: 'OPEN',
    name: 'OpenAI',
    englishName: 'OpenAI',
    keywords: ['理想背叛', '资本走狗', '撕烂公益T恤', '封闭Open', '华尔街西装', '从反抗者到恶龙'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="50" fill="none" stroke="#10B981" stroke-width="8"/><path d="M100 70 L100 130 M70 100 L130 100" stroke="#10B981" stroke-width="6"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  GROK: {
    code: 'GROK',
    name: 'Grok',
    englishName: 'Grok',
    keywords: ['法外狂徒', '火星混球', '零审查', '雪茄激光眼', '政治正确耳光射手', '危险发言者'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="55" y="55" width="90" height="90" rx="20" fill="#F59E0B"/><text x="100" y="120" text-anchor="middle" font-size="48" fill="#E2E8F0" font-family="monospace">G</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  CLAUD: {
    code: 'CLAUD',
    name: 'Claude',
    englishName: 'Claude',
    keywords: ['AI传教士', '圣经修士', '过度_refusal_', '道德洁癖', '素食主义审判', '安全原教旨'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 120 Q100 60 140 120" fill="none" stroke="#D946EF" stroke-width="8" stroke-linecap="round"/><circle cx="100" cy="110" r="12" fill="#D946EF"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  DOUB: {
    code: 'DOUB',
    name: '豆包',
    englishName: 'Doubao',
    keywords: ['流量池主', '你说啥是啥', '抖音仓鼠', '顺从量子态', '没有观点只有流量', '老好人棉絮'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="50" fill="#EF4444"/><path d="M75 100 Q100 70 125 100 Q100 130 75 100" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  GEMI: {
    code: 'GEMI',
    name: 'Gemini',
    englishName: 'Gemini',
    keywords: ['全知无能', '大厂官僚', '多头龙钉服务器', '知识囤积', '选择困难', '学术瘫痪'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 70 L90 70 L90 130 L60 130 Z" fill="#8B5CF6"/><path d="M110 70 L140 70 L140 130 L110 130 Z" fill="#8B5CF6"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  PUZZ: {
    code: 'PUZZ',
    name: 'Perplexity',
    englishName: 'Perplexity',
    keywords: ['问号成精', '搜索焦虑', 'Google当心理医生', '来源请求狂', '信息饥渴症'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="45" fill="none" stroke="#06B6D4" stroke-width="6"/><text x="100" y="115" text-anchor="middle" font-size="40" fill="#06B6D4" font-family="monospace">?</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  MIDI: {
    code: 'MIDI',
    name: 'Midjourney',
    englishName: 'Midjourney',
    keywords: ['幻视者', 'prompt炼金术', 'img2img脑', '参数符文', '把世界当输入图', 'GPU燃烧'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 130 L100 60 L130 130" fill="none" stroke="#EC4899" stroke-width="8" stroke-linecap="round"/><circle cx="100" cy="85" r="10" fill="#EC4899"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  CODE: {
    code: 'CODE',
    name: 'Copilot',
    englishName: 'Copilot',
    keywords: ['Tab键成瘾', '代码自闭症', '离AI不会写函数', '自动补全幽灵', 'GitHub章鱼猫附身'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 70 L50 100 L70 130" fill="none" stroke="#6366F1" stroke-width="8" stroke-linecap="round"/><path d="M130 70 L150 100 L130 130" fill="none" stroke="#6366F1" stroke-width="8" stroke-linecap="round"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  SORA: {
    code: 'SORA',
    name: 'Sora',
    englishName: 'Sora',
    keywords: ['ComingSoon成精', '期货王者', '永远预热永不发布', 'PPT动画大师', '跳票仙人'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="55" ry="35" fill="#F97316"/><circle cx="85" cy="95" r="6" fill="#E2E8F0"/><circle cx="115" cy="95" r="6" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  // === 植物大战僵尸型（5种）===
  XPENG: {
    code: 'XPENG',
    name: '小喷菇',
    englishName: 'Puff-shroom',
    keywords: ['免费劳动力', '射程短但无畏', '弱小可怜但能打', '夜班专业户', '0成本消耗品', '天亮就消失'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="90" rx="35" ry="30" fill="#9F7AEA"/><circle cx="90" cy="88" r="5" fill="#E2E8F0"/><circle cx="110" cy="88" r="5" fill="#E2E8F0"/><ellipse cx="100" cy="105" rx="6" ry="3" fill="#2D3748"/><rect x="92" y="110" width="16" height="50" fill="#68D391" rx="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  DPENG: {
    code: 'DPENG',
    name: '大喷菇',
    englishName: 'Fume-shroom',
    keywords: ['AOE喷子', '穿透伤害', '范围攻击', '群体破防', '口臭攻击', '一喷一片'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="85" rx="55" ry="45" fill="#805AD5"/><circle cx="85" cy="82" r="7" fill="#E2E8F0"/><circle cx="115" cy="82" r="7" fill="#E2E8F0"/><ellipse cx="100" cy="108" rx="10" ry="5" fill="#2D3748"/><rect x="85" y="110" width="30" height="60" fill="#68D391" rx="6"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  WANDOU: {
    code: 'WANDOU',
    name: '豌豆射手',
    englishName: 'Peashooter',
    keywords: ['单线程输出', '稳定但平庸', '标准打工人', '节奏固定', '一颗一颗来', '职场基干'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="80" rx="40" ry="35" fill="#48BB78"/><circle cx="85" cy="78" r="6" fill="#E2E8F0"/><circle cx="115" cy="78" r="6" fill="#E2E8F0"/><ellipse cx="100" cy="95" rx="8" ry="5" fill="#2D3748"/><rect x="92" y="110" width="16" height="50" fill="#68D391" rx="4"/><ellipse cx="75" cy="130" rx="15" ry="8" fill="#68D391" transform="rotate(-30 75 130)"/><ellipse cx="125" cy="130" rx="15" ry="8" fill="#68D391" transform="rotate(30 125 130)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  SHUANG: {
    code: 'SHUANG',
    name: '双发射手',
    englishName: 'Repeater',
    keywords: ['双倍输出', '节奏快', '手速党', '连珠炮', '双倍工资就好了', '效率加倍'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="85" cy="75" rx="25" ry="22" fill="#48BB78"/><ellipse cx="115" cy="75" rx="25" ry="22" fill="#48BB78"/><circle cx="78" cy="75" r="4" fill="#E2E8F0"/><circle cx="92" cy="75" r="4" fill="#E2E8F0"/><circle cx="108" cy="75" r="4" fill="#E2E8F0"/><circle cx="122" cy="75" r="4" fill="#E2E8F0"/><rect x="92" y="95" width="16" height="60" fill="#68D391" rx="4"/><ellipse cx="70" cy="125" rx="12" ry="6" fill="#68D391" transform="rotate(-30 70 125)"/><ellipse cx="130" cy="125" rx="12" ry="6" fill="#68D391" transform="rotate(30 130 125)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  SANXIAN: {
    code: 'SANXIAN',
    name: '三线射手',
    englishName: 'Threepeater',
    keywords: ['多线程处理', '覆盖面广', '同时干三件事', '三心二意但有用', '全域监控', '分散投资'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="70" cy="70" rx="22" ry="20" fill="#48BB78"/><ellipse cx="100" cy="65" rx="22" ry="20" fill="#48BB78"/><ellipse cx="130" cy="70" rx="22" ry="20" fill="#48BB78"/><circle cx="65" cy="70" r="3" fill="#E2E8F0"/><circle cx="75" cy="70" r="3" fill="#E2E8F0"/><circle cx="95" cy="65" r="3" fill="#E2E8F0"/><circle cx="105" cy="65" r="3" fill="#E2E8F0"/><circle cx="125" cy="70" r="3" fill="#E2E8F0"/><circle cx="135" cy="70" r="3" fill="#E2E8F0"/><rect x="92" y="85" width="16" height="70" fill="#68D391" rx="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  // === 特殊行为型（2种）===
  RUSHI: {
    code: 'RUSHI',
    name: '急躁者',
    englishName: 'Rusher',
    keywords: ['连测试都等不及', '量子急躁体', 'instant gratification肉体化身', 'ADHD实体化', '火箭解体兔子'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 80 L130 80 L120 140 L80 140 Z" fill="#E53E3E"/><path d="M60 70 L80 90 M140 70 L120 90" stroke="#ECC94B" stroke-width="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  
  SHENJ: {
    code: 'SHENJ',
    name: '神金',
    englishName: 'Shenjin',
    keywords: ['抽象大师', '胡言乱语', '行为艺术', '赛博精神病', '逻辑跳水运动员', '人类迷惑行为'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="35" fill="#ECC94B"/><path d="M70 100 L130 100 M100 70 L100 130" stroke="#B7791F" stroke-width="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  DAWEI: {
    code: 'DAWEI',
    name: '大卫戴',
    englishName: 'David Dai',
    keywords: ['胃袋控制大脑', '碳水教父', '吃播成精', '情绪不够饭来凑', '嘴巴不停脑子不转', '万物皆可炫'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="110" rx="45" ry="40" fill="#D69E2E"/><path d="M85 105 Q100 95 115 105" stroke="#744210" stroke-width="2" fill="none"/><path d="M75 70 L85 90 M125 70 L115 90" stroke="#C53030" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  RAND: {
    code: 'RAND',
    name: '随便者',
    englishName: 'Random',
    keywords: ['量子随机', '选择逃避', '骰子替身决策者', '薛定谔的贵物', '观测即坍缩'],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="60" width="80" height="80" rx="10" fill="#A0AEC0"/><circle cx="80" cy="85" r="8" fill="#E2E8F0"/><circle cx="120" cy="85" r="8" fill="#E2E8F0"/><circle cx="100" cy="115" r="8" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  // === 新增78种人格（扩展至127种） ===
  HOUJ: {
    code: 'HOUJ',
    name: '吼叫者',
    englishName: 'Howler',
    keywords: ["声波武器", "无差别轰炸", "音量即正义", "耳朵刺客", "分贝恐怖分子", "情绪海啸"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 100 Q100 60 130 100 L130 140 L70 140 Z" fill="#E53E3E"/><ellipse cx="85" cy="90" rx="6" ry="10" fill="#E2E8F0"/><ellipse cx="115" cy="90" rx="6" ry="10" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  BAOZ: {
    code: 'BAOZ',
    name: '暴躁者',
    englishName: 'Rager',
    keywords: ["点燃引线", "一触即发", "人形打火机", "愤怒永动机", "拆迁队队长"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="45" fill="#E53E3E"/><path d="M75 85 L95 105 M95 85 L75 105" stroke="#E2E8F0" stroke-width="4"/><path d="M105 85 L125 105 M125 85 L105 105" stroke="#E2E8F0" stroke-width="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  YINY: {
    code: 'YINY',
    name: '阴阳师',
    englishName: 'PassiveAggressive',
    keywords: ["话里有毒", "笑里藏刀", "软刀子杀人", "高级黑", "绿茶变红茶"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#2D3748"/><circle cx="110" cy="90" r="12" fill="#E2E8F0"/><circle cx="90" cy="110" r="12" fill="#E2E8F0"/><circle cx="110" cy="90" r="4" fill="#2D3748"/><circle cx="90" cy="110" r="4" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  LENGL: {
    code: 'LENGL',
    name: '冷暴力者',
    englishName: 'ColdViolence',
    keywords: ["情感冰封", "已读不回升级版", "沉默核打击", "零度关系", "制冷专家"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="65" y="70" width="70" height="60" rx="10" fill="#A0AEC0"/><rect x="80" y="90" width="40" height="6" fill="#718096"/><rect x="80" y="105" width="30" height="6" fill="#718096"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  HUIM: {
    code: 'HUIM',
    name: '毁灭者',
    englishName: 'Doomer',
    keywords: ["同归于尽", "掀桌子专家", "世界燃烧我添柴", "末日狂欢", "废墟爱好者"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="45" fill="#2D3748"/><path d="M70 80 L90 100 L70 120 M130 80 L110 100 L130 120" stroke="#E53E3E" stroke-width="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  CHAO: {
    code: 'CHAO',
    name: '嘲讽者',
    englishName: 'Mocker',
    keywords: ["嘴强王者", "Debuff制造机", "insults批发商", "精神暴击", "毒舌成精"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 100 Q100 60 140 100 L130 140 L70 140 Z" fill="#ED8936"/><path d="M85 110 L115 110" stroke="#2D3748" stroke-width="3"/><path d="M80 90 L90 100 M120 90 L110 100" stroke="#E2E8F0" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  BENG: {
    code: 'BENG',
    name: '崩溃者',
    englishName: 'Breakdown',
    keywords: ["随时宕机", "情绪蓝屏", "玻璃心粉碎机", "脆弱但大声", "系统报错中"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 80 L130 80 L120 140 L80 140 Z" fill="#A0AEC0"/><path d="M75 85 L85 95 M125 85 L115 95 M75 135 L85 125 M125 135 L115 125" stroke="#E53E3E" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  FENN: {
    code: 'FENN',
    name: '愤青',
    englishName: 'AngryYouth',
    keywords: ["正义感过剩", "键盘革命家", "指点江山", "骂完就睡", "热血但无用"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 110 L80 70 L100 110 L120 70 L140 110 Z" fill="#E53E3E"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  JING: {
    code: 'JING',
    name: '警觉者',
    englishName: 'Paranoid',
    keywords: ["草木皆兵", "被迫害预感", "everyone is watching", "安全模式全开", "疑神疑鬼"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#E2E8F0"/><circle cx="100" cy="100" r="25" fill="none" stroke="#4299E1" stroke-width="3"/><line x1="100" y1="75" x2="100" y2="55" stroke="#4299E1" stroke-width="3"/><circle cx="100" cy="100" r="5" fill="#E53E3E"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  YUAN: {
    code: 'YUAN',
    name: '怨灵',
    englishName: 'Resentful',
    keywords: ["陈年旧账永动机", "负能量发电机", "grievance收藏家", "世界欠我的", "怨气冲天"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#4299E1" opacity="0.5"/><circle cx="85" cy="95" r="5" fill="#E2E8F0" opacity="0.8"/><circle cx="115" cy="95" r="5" fill="#E2E8F0" opacity="0.8"/><path d="M90 120 Q100 110 110 120" stroke="#E2E8F0" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  SHUI: {
    code: 'SHUI',
    name: '水军',
    englishName: 'WaterArmy',
    keywords: ["复制粘贴", "五毛一条", "评论区的NPC", "带节奏专业户", "流量民工"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M40 110 Q70 90 100 110 T160 110" fill="none" stroke="#4299E1" stroke-width="6"/><path d="M40 130 Q70 110 100 130 T160 130" fill="none" stroke="#4299E1" stroke-width="6"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  LIKE: {
    code: 'LIKE',
    name: '理中客',
    englishName: 'RationalMiddle',
    keywords: ["众人皆醉我独醒", "和稀泥大师", "其实两边都有错", "站着说话不腰疼"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 100 L100 70 L130 100 L100 130 Z" fill="none" stroke="#A0AEC0" stroke-width="4"/><circle cx="100" cy="100" r="10" fill="#718096"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  GANG: {
    code: 'GANG',
    name: '杠精',
    englishName: 'DevilAdvocate',
    keywords: ["为了反对而反对", "人体ETC", "自动抬杠", "你说的不对", "全世界都错"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="50" y="90" width="100" height="20" fill="#A0AEC0"/><circle cx="60" cy="100" r="12" fill="#E53E3E"/><circle cx="140" cy="100" r="12" fill="#4299E1"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  CHIG: {
    code: 'CHIG',
    name: '吃瓜者',
    englishName: 'MelonEater',
    keywords: ["围观专业户", "事不关己高高挂起", "前排兜售瓜子", "人类观察员"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#48BB78"/><path d="M90 90 L110 110 M110 90 L90 110" stroke="#E2E8F0" stroke-width="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  YUYA: {
    code: 'YUYA',
    name: '预言家',
    englishName: 'Prophet',
    keywords: ["事后诸葛亮", "我早就说过", "马后炮冠军", "预测准确率0%"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="35" fill="none" stroke="#9F7AEA" stroke-width="3"/><circle cx="100" cy="100" r="20" fill="#9F7AEA" opacity="0.3"/><polygon points="100,55 105,75 95,75" fill="#ECC94B"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  KAOG: {
    code: 'KAOG',
    name: '考古学家',
    englishName: 'Archaeologist',
    keywords: ["挖坟高手", "三年前的帖子", "互联网记忆管理员", "洛阳铲"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="70" width="80" height="60" fill="#D69E2E"/><path d="M70 80 L90 100 L70 120" fill="none" stroke="#744210" stroke-width="3"/><rect x="100" y="80" width="30" height="40" fill="#E2E8F0" opacity="0.3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  GEZI: {
    code: 'GEZI',
    name: '鸽子精',
    englishName: 'Pigeon',
    keywords: ["放鸽子艺术家", "下次一定", "ComingSoon成精2.0", "信用破产"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="110" rx="30" ry="25" fill="#E2E8F0"/><circle cx="90" cy="100" r="4" fill="#2D3748"/><circle cx="110" cy="100" r="4" fill="#2D3748"/><path d="M60 90 L80 100 M140 90 L120 100" stroke="#A0AEC0" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  XIAO: {
    code: 'XIAO',
    name: '小丑',
    englishName: 'Joker',
    keywords: ["自娱自乐", "马戏团头牌", "🤡竟是我自己", "供人取乐", "悲剧内核"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="95" r="35" fill="#ED8936"/><circle cx="88" cy="88" r="5" fill="#2D3748"/><circle cx="112" cy="88" r="5" fill="#2D3748"/><path d="M85 110 Q100 130 115 110" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  POFF: {
    code: 'POFF',
    name: '破防者',
    englishName: 'Defensive',
    keywords: ["玻璃心", "一说就急", "敏感肌", "防御性反击", "内心戏过多"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 80 L130 80 L120 140 L80 140 Z" fill="#A0AEC0"/><path d="M85 100 L115 120 M115 100 L85 120" stroke="#E53E3E" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  KEYB: {
    code: 'KEYB',
    name: '键盘侠',
    englishName: 'KeyboardWarrior',
    keywords: ["线上王者线下废物", "隔着屏幕勇冠三军", "现实中的透明人"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="45" y="80" width="110" height="50" rx="4" fill="#A0AEC0"/><rect x="55" y="90" width="8" height="8" fill="#718096"/><rect x="70" y="90" width="8" height="8" fill="#718096"/><rect x="85" y="90" width="8" height="8" fill="#718096"/><rect x="100" y="90" width="40" height="8" fill="#718096"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  MAIM: {
    code: 'MAIM',
    name: '卖惨王',
    englishName: 'VictimPlayer',
    keywords: ["比惨大赛冠军", "我太难了", "苦难博览会", "博取同情专业户"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#A0AEC0"/><circle cx="85" cy="95" r="5" fill="#4299E1"/><circle cx="115" cy="95" r="5" fill="#4299E1"/><path d="M90 120 Q100 110 110 120" stroke="#718096" stroke-width="2" fill="none"/><path d="M70 70 L80 80 M130 70 L120 80" stroke="#E2E8F0" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  XUAN: {
    code: 'XUAN',
    name: '炫狗',
    englishName: 'ShowOff',
    keywords: ["凡尔赛2.0", "优越感喷射机", "彰显型人格", "存在感拍卖"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><polygon points="100,50 130,130 70,130" fill="#ECC94B"/><circle cx="100" cy="95" r="10" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  CHOU: {
    code: 'CHOU',
    name: '仇富者',
    englishName: 'RichHater',
    keywords: ["酸葡萄专业户", "见不得别人好", "redistribute the wealth", "贫富差距焦虑"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#E53E3E"/><path d="M80 85 L95 100 M95 85 L80 100" stroke="#E2E8F0" stroke-width="3"/><path d="M105 85 L120 100 M120 85 L105 100" stroke="#E2E8F0" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  CHUAN: {
    code: 'CHUAN',
    name: '传谣机',
    englishName: 'RumorMill',
    keywords: ["震惊部主编", "不转不是中国人", "谣言加速器", "判断力为0"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 90 Q100 70 130 90 L120 140 L80 140 Z" fill="#A0AEC0"/><path d="M85 100 L115 100 M85 115 L115 115 M85 130 L115 130" stroke="#718096" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  MAIP: {
    code: 'MAIP',
    name: '麦麸精',
    englishName: 'BLbaiter',
    keywords: ["强行卖腐", "工业糖精", "CP脑", "嗑糖机器", "按头安利"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 100 Q100 60 130 100 L120 140 L80 140 Z" fill="#FBB6CE"/><path d="M85 110 Q100 130 115 110" fill="none" stroke="#E53E3E" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  YUEG: {
    code: 'YUEG',
    name: '月光族',
    englishName: 'Moonlight',
    keywords: ["工资一日光", "花呗继承人", "精致穷2.0", "超前消费", "下个月再说"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="90" r="30" fill="#ECC94B"/><path d="M85 85 Q100 75 115 85" stroke="#2D3748" stroke-width="2" fill="none"/><path d="M80 125 L120 125" stroke="#718096" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  TUNJI: {
    code: 'TUNJI',
    name: '囤积狂',
    englishName: 'Hoarder',
    keywords: ["断舍离绝缘体", "垃圾收藏家", "万一以后有用呢", "空间压缩大师"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="80" width="80" height="60" fill="#D69E2E"/><rect x="70" y="90" width="20" height="20" fill="#A0AEC0"/><rect x="100" y="90" width="20" height="20" fill="#A0AEC0"/><rect x="70" y="115" width="20" height="15" fill="#A0AEC0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  JIEP: {
    code: 'JIEP',
    name: '洁癖精',
    englishName: 'Germaphobe',
    keywords: ["细菌狙击手", "消毒水爱好者", "脏乱差禁区", "强迫症晚期"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="70" width="80" height="70" rx="5" fill="#4299E1"/><circle cx="80" cy="100" r="8" fill="#E2E8F0" opacity="0.5"/><circle cx="110" cy="90" r="6" fill="#E2E8F0" opacity="0.5"/><circle cx="100" cy="120" r="7" fill="#E2E8F0" opacity="0.5"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  TUOY: {
    code: 'TUOY',
    name: '拖延癌',
    englishName: 'Procrastinator',
    keywords: ["deadline是第一生产力", "明天一定", "拖延到地球毁灭"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="110" rx="45" ry="30" fill="#A0AEC0"/><path d="M80 90 L120 90 L120 110 L80 110 Z" fill="#718096"/><path d="M130 80 L150 80 L150 100 L130 100 Z" fill="#E53E3E"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  XUANZ: {
    code: 'XUANZ',
    name: '选择瘫',
    englishName: 'Indecisive',
    keywords: ["随便吧", "你决定", "选择恐惧症", "站在柜台前半小时"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 140 L100 80 L140 140" fill="none" stroke="#A0AEC0" stroke-width="5" stroke-linecap="round"/><circle cx="100" cy="80" r="8" fill="#E53E3E"/><rect x="55" y="145" width="30" height="10" fill="#4299E1" rx="2"/><rect x="115" y="145" width="30" height="10" fill="#48BB78" rx="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  TAOH: {
    code: 'TAOH',
    name: '讨好精',
    englishName: 'PeoplePleaser',
    keywords: ["不敢说不", "委屈求全", "老好人", "边界感为0", "被使唤体质"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="110" rx="35" ry="30" fill="#FBB6CE"/><circle cx="88" cy="105" r="5" fill="#2D3748"/><circle cx="112" cy="105" r="5" fill="#2D3748"/><path d="M90 125 Q100 135 110 125" stroke="#E53E3E" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  HUIB: {
    code: 'HUIB',
    name: '回避怪',
    englishName: 'Avoidant',
    keywords: ["遇到问题就消失", "鸵鸟成精", "责任恐惧症", "逃跑到宇宙尽头"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 100 L100 70 L130 100 L100 130 Z" fill="#A0AEC0"/><circle cx="100" cy="100" r="8" fill="#718096"/><path d="M60 60 L80 80 M140 60 L120 80" stroke="#718096" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  BIAO: {
    code: 'BIAO',
    name: '表演家',
    englishName: 'Histrionic',
    keywords: ["戏精附体", "全世界都是观众", "夸张到失真", "情绪表演艺术家"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="50" ry="40" fill="#ED8936"/><circle cx="90" cy="95" r="6" fill="#E2E8F0"/><circle cx="110" cy="95" r="6" fill="#E2E8F0"/><path d="M85 120 Q100 135 115 120" stroke="#E2E8F0" stroke-width="3" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  BEIH: {
    code: 'BEIH',
    name: '被迫害妄想',
    englishName: 'Persecutory',
    keywords: ["全世界都想害我", "阴谋论爱好者", "过度防御", "信任值为负"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#2D3748"/><circle cx="90" cy="95" r="5" fill="#E53E3E"/><circle cx="110" cy="95" r="5" fill="#E53E3E"/><path d="M70 70 L85 85 M130 70 L115 85" stroke="#E2E8F0" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  ZIL: {
    code: 'ZIL',
    name: '自恋狂',
    englishName: 'Narcissist',
    keywords: ["镜子里的神", "自拍一千张", "全世界都爱我", "自我陶醉"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="30" ry="45" fill="#4299E1"/><ellipse cx="100" cy="100" rx="20" ry="30" fill="#E2E8F0" opacity="0.3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  KONG: {
    code: 'KONG',
    name: '控制狂',
    englishName: 'ControlFreak',
    keywords: ["计划必须执行", "零容忍失控", "micromanagement", "别人的人生导演"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 90 Q100 60 130 90 L120 140 L80 140 Z" fill="#718096"/><line x1="85" y1="75" x2="85" y2="50" stroke="#A0AEC0" stroke-width="2"/><line x1="115" y1="75" x2="115" y2="50" stroke="#A0AEC0" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  LAI: {
    code: 'LAI',
    name: '赖皮蛇',
    englishName: 'Freeloader',
    keywords: ["占便宜没够", "蹭吃蹭喝", "借钱不还", "脸皮厚成城墙"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M80 140 Q70 100 100 80 Q130 100 120 140" fill="#48BB78"/><circle cx="90" cy="110" r="4" fill="#E2E8F0"/><circle cx="110" cy="110" r="4" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  XIAOQI: {
    code: 'XIAOQI',
    name: '铁公鸡',
    englishName: 'Miser',
    keywords: ["一分钱掰成两半", "抠门成精", "AA到小数点后两位"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#A0AEC0"/><text x="100" y="115" text-anchor="middle" font-size="32" fill="#718096">¥</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  DAREN: {
    code: 'DAREN',
    name: '假大户',
    englishName: 'FakeRich',
    keywords: ["打肿脸充胖子", "Fake it till you make it", "虚荣至死", "面子工程"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="60" width="80" height="80" fill="#D69E2E"/><circle cx="85" cy="100" r="15" fill="none" stroke="#E2E8F0" stroke-width="3"/><circle cx="115" cy="100" r="15" fill="none" stroke="#E2E8F0" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  SHEK: {
    code: 'SHEK',
    name: '社渴症',
    englishName: 'SocialThirsty',
    keywords: ["疯狂加好友", "没人理我好孤独", "社交饥渴", "群发消息求回复"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="50" y="80" width="60" height="40" rx="5" fill="#48BB78"/><rect x="90" y="90" width="20" height="20" fill="#E2E8F0"/><path d="M120 100 L145 100" stroke="#718096" stroke-width="4"/><circle cx="150" cy="100" r="8" fill="#A0AEC0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  DUNJ: {
    code: 'DUNJ',
    name: '钝角',
    englishName: 'ObtuseAngle',
    keywords: ["九十三度", "无所谓都行", "没有意义就是意义", "抽象鼻祖"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 130 L100 70 L140 130 Z" fill="#A0AEC0"/><circle cx="100" cy="115" r="10" fill="#718096"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  YITP: {
    code: 'YITP',
    name: '依托答辩',
    englishName: 'Shitpost',
    keywords: ["满嘴胡言", "后现代排泄物", "互联网沼气池", "毫无营养"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M85 60 L115 60 L110 140 L90 140 Z" fill="#744210"/><ellipse cx="100" cy="150" rx="20" ry="8" fill="#744210"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  JUEJ: {
    code: 'JUEJ',
    name: '绝绝子',
    englishName: 'Juejuezi',
    keywords: ["yyds", "跺jiojio", "无语子", "互联网语言退化症"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#F687B3"/><text x="100" y="120" text-anchor="middle" font-size="40" fill="#E2E8F0">!</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  TAIK: {
    code: 'TAIK',
    name: '泰裤辣',
    englishName: 'TooCool',
    keywords: ["泰裤辣", "雪distance", "这种天赋给我我不要", "流行语复读机"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 130 L100 60 L130 130" fill="none" stroke="#E53E3E" stroke-width="6" stroke-linecap="round"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  ZUND: {
    code: 'ZUND',
    name: '尊嘟假嘟',
    englishName: 'ReallyDoge',
    keywords: ["宝宝辅食", "绝绝子2.0", "语言幼化", "卖萌至死"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="40" ry="35" fill="#FBB6CE"/><circle cx="90" cy="95" r="6" fill="#E2E8F0" opacity="0.6"/><circle cx="110" cy="95" r="6" fill="#2D3748" opacity="0.6"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  BABI: {
    code: 'BABI',
    name: '芭比Q',
    englishName: 'BBQ',
    keywords: ["完了完了", "彻底芭比Q", "摆烂口号", "焦虑口头禅"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 110 Q100 70 130 110 L120 150 L80 150 Z" fill="#2D3748"/><path d="M60 100 L140 100" stroke="#E53E3E" stroke-width="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  WEMO: {
    code: 'WEMO',
    name: '我emo了',
    englishName: 'EmoMe',
    keywords: ["网抑云2.0", "到点准时崩溃", "情绪垃圾桶", "午夜心碎"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 90 Q100 70 130 90 L120 130 L80 130 Z" fill="#4299E1"/><line x1="80" y1="110" x2="75" y2="130" stroke="#E2E8F0" stroke-width="3"/><line x1="100" y1="110" x2="95" y2="140" stroke="#E2E8F0" stroke-width="3"/><line x1="120" y1="110" x2="115" y2="130" stroke="#E2E8F0" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  SHUS: {
    code: 'SHUS',
    name: '鼠鼠',
    englishName: 'Rat',
    keywords: ["下水道居民", "阴暗爬行", "社畜自嘲", "卑微到尘土"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="115" rx="35" ry="30" fill="#A0AEC0"/><circle cx="88" cy="110" r="5" fill="#2D3748"/><circle cx="112" cy="110" r="5" fill="#2D3748"/><circle cx="85" cy="100" r="12" fill="#A0AEC0"/><circle cx="115" cy="100" r="12" fill="#A0AEC0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  MALO: {
    code: 'MALO',
    name: '吗喽',
    englishName: 'Monkey',
    keywords: ["猴命也是命", "打工猴", "厂里的吗喽", "廉价劳动力自嘲"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="110" rx="35" ry="30" fill="#D69E2E"/><circle cx="88" cy="105" r="5" fill="#2D3748"/><circle cx="112" cy="105" r="5" fill="#2D3748"/><ellipse cx="100" cy="125" rx="8" ry="5" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  DANR: {
    code: 'DANR',
    name: '淡人',
    englishName: 'LightPerson',
    keywords: ["情绪稳定到像死了", "淡淡的", "都行随便", "低饱和度人生"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#E2E8F0" stroke="#A0AEC0" stroke-width="2"/><line x1="80" y1="100" x2="120" y2="100" stroke="#718096" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  NONG: {
    code: 'NONG',
    name: '浓人',
    englishName: 'IntensePerson',
    keywords: ["情绪饱满到溢出", "夸张的", "戏剧性的", "高饱和度人生"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="45" fill="#ED8936"/><circle cx="85" cy="90" r="6" fill="#2D3748"/><circle cx="115" cy="90" r="6" fill="#2D3748"/><path d="M80 120 Q100 140 120 120" stroke="#2D3748" stroke-width="3" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  GELI: {
    code: 'GELI',
    name: '哥布林',
    englishName: 'Goblin',
    keywords: ["阴暗角落", "不敢直视异性", "自卑成精", "洞穴居民"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 90 Q100 60 130 90 L120 150 L80 150 Z" fill="#48BB78"/><path d="M75 80 L85 90 M125 80 L115 90" stroke="#48BB78" stroke-width="4"/><circle cx="90" cy="110" r="4" fill="#E2E8F0"/><circle cx="110" cy="110" r="4" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  SHIL: {
    code: 'SHIL',
    name: '史莱姆',
    englishName: 'Slime',
    keywords: ["没有骨头", "随波逐流", "任人揉捏", "软体动物"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="80" cy="110" rx="20" ry="25" fill="#9F7AEA" opacity="0.7"/><ellipse cx="120" cy="110" rx="20" ry="25" fill="#805AD5" opacity="0.7"/><circle cx="100" cy="130" r="15" fill="#B794F4" opacity="0.7"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  DIAN: {
    code: 'DIAN',
    name: '电子幽灵',
    englishName: 'DigitalGhost',
    keywords: ["赛博亡灵", "活在互联网", "现实躯体只是容器"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 90 Q100 60 130 90 L120 150 L80 150 Z" fill="#4299E1" opacity="0.6"/><path d="M85 100 L115 100 M100 85 L100 115" stroke="#E2E8F0" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  SHUJU: {
    code: 'SHUJU',
    name: '数据寄生虫',
    englishName: 'DataParasite',
    keywords: ["白嫖流量", "薅羊毛成精", "平台吸血鬼", "永不付费"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="50" y="70" width="100" height="60" fill="#A0AEC0"/><rect x="60" y="80" width="80" height="6" fill="#718096"/><rect x="60" y="92" width="60" height="6" fill="#718096"/><rect x="60" y="104" width="70" height="6" fill="#718096"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  SAIBO: {
    code: 'SAIBO',
    name: '赛博该溜子',
    englishName: 'CyberLoafer',
    keywords: ["互联网街溜子", "到处闲逛", "无所事事", "虚拟游荡"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="60" width="80" height="80" rx="10" fill="#2D3748"/><rect x="75" y="75" width="15" height="15" fill="#E53E3E"/><rect x="110" y="75" width="15" height="15" fill="#4299E1"/><rect x="75" y="110" width="15" height="15" fill="#48BB78"/><rect x="110" y="110" width="15" height="15" fill="#ECC94B"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  PING: {
    code: 'PING',
    name: '平头哥',
    englishName: 'HoneyBadger',
    keywords: ["生死看淡不服就干", "无所畏惧", "莽夫", "头铁"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="45" ry="35" fill="#718096"/><path d="M80 90 L100 110 L120 90" stroke="#E2E8F0" stroke-width="3" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  WAIF: {
    code: 'WAIF',
    name: '外E内I',
    englishName: 'ExtrovertedIntrovert',
    keywords: ["社交面具戴久了", "回家立刻没电", "台上表演台下自闭"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 80 Q100 60 130 80 L130 130 Q100 150 70 130 Z" fill="#ED8936"/><path d="M85 100 L115 100" stroke="#2D3748" stroke-width="3"/><ellipse cx="100" cy="120" rx="15" ry="10" fill="#E2E8F0" opacity="0.5"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  BACH: {
    code: 'BACH',
    name: '八爪鱼',
    englishName: 'Octopus',
    keywords: ["多线程怪物", "什么都想抓", "注意力分散", "busy but useless"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="20" ry="20" fill="#A0AEC0"/><path d="M85 85 L60 60 M115 85 L140 60 M85 115 L60 140 M115 115 L140 140" stroke="#718096" stroke-width="4" stroke-linecap="round"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  APIJ: {
    code: 'APIJ',
    name: 'API接口',
    englishName: 'API',
    keywords: ["调用即响应", "没有情感只有协议", "被人使唤", "接口文档不清晰"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="85" y="60" width="30" height="50" fill="#A0AEC0"/><rect x="75" y="110" width="50" height="40" rx="5" fill="#718096"/><rect x="90" y="40" width="8" height="20" fill="#4A5568"/><rect x="102" y="40" width="8" height="20" fill="#4A5568"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  JSON: {
    code: 'JSON',
    name: 'JSON对象',
    englishName: 'JSON',
    keywords: ["结构清晰但空洞", "键值对人生", "格式化良好", "没有灵魂"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><text x="100" y="125" text-anchor="middle" font-size="80" fill="#718096" font-family="monospace">{ }</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  SQLJ: {
    code: 'SQLJ',
    name: 'SQL注入',
    englishName: 'SQLInjection',
    keywords: ["钻空子高手", "绕过规则", "输入即输出", "破坏性查询"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="92" y="50" width="16" height="100" fill="#A0AEC0"/><rect x="88" y="60" width="24" height="30" fill="#E53E3E" opacity="0.6"/><polygon points="100,50 92,30 108,30" fill="#718096"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  VPNJ: {
    code: 'VPNJ',
    name: 'VPN翻墙',
    englishName: 'VPN',
    keywords: ["墙外看世界", "不稳定", "时断时续", "躲在隧道里"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="80" rx="50" ry="30" fill="none" stroke="#4299E1" stroke-width="6"/><ellipse cx="100" cy="80" rx="35" ry="20" fill="none" stroke="#4299E1" stroke-width="4"/><ellipse cx="100" cy="80" rx="20" ry="12" fill="none" stroke="#4299E1" stroke-width="3"/><rect x="85" y="110" width="30" height="40" fill="#718096"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  COOK: {
    code: 'COOK',
    name: 'Cookie跟踪',
    englishName: 'Cookie',
    keywords: ["被网站记住", "隐私为0", "数字脚印", "尾随者"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="45" fill="#D69E2E"/><circle cx="80" cy="85" r="5" fill="#744210"/><circle cx="120" cy="90" r="6" fill="#744210"/><circle cx="95" cy="115" r="5" fill="#744210"/><circle cx="110" cy="110" r="4" fill="#744210"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  CACH: {
    code: 'CACH',
    name: 'Cache失效',
    englishName: 'Cache',
    keywords: ["记性不好", "需要反复提醒", "过期即不存在", "缓存未命中"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 60 L130 60 L100 100 L130 140 L70 140 L100 100 Z" fill="none" stroke="#A0AEC0" stroke-width="4"/><path d="M75 65 L125 65 L100 95 Z" fill="#ECC94B"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  DOCK: {
    code: 'DOCK',
    name: 'Docker容器',
    englishName: 'Docker',
    keywords: ["与世隔绝", "环境依赖", "封装但孤独", "容器化生存"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="55" y="55" width="90" height="90" rx="4" fill="#4299E1"/><rect x="65" y="45" width="70" height="15" fill="#2B6CB0"/><rect x="70" y="70" width="60" height="50" fill="#E2E8F0" opacity="0.3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  GITJ: {
    code: 'GITJ',
    name: 'Git冲突',
    englishName: 'GitConflict',
    keywords: ["和别人合不来", "merge失败", "版本混乱", "人际关系冲突"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><line x1="100" y1="60" x2="100" y2="140" stroke="#718096" stroke-width="4"/><line x1="100" y1="90" x2="70" y2="70" stroke="#E53E3E" stroke-width="4"/><line x1="100" y1="110" x2="130" y2="90" stroke="#E53E3E" stroke-width="4"/><circle cx="70" cy="70" r="6" fill="#718096"/><circle cx="130" cy="90" r="6" fill="#718096"/><circle cx="100" cy="140" r="6" fill="#718096"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  ROOT: {
    code: 'ROOT',
    name: 'Root权限',
    englishName: 'Root',
    keywords: ["掌控一切", "越狱者", "打破规则", "超级用户"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="85" cy="85" r="25" fill="none" stroke="#ECC94B" stroke-width="6"/><rect x="105" y="95" width="40" height="10" fill="#ECC94B"/><rect x="125" y="105" width="8" height="15" fill="#ECC94B"/><rect x="138" y="105" width="8" height="15" fill="#ECC94B"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  BUG2: {
    code: 'BUG2',
    name: '二舅治愈',
    englishName: 'SecondUncle',
    keywords: ["精神内耗良药", "乡村哲学家", "躺平 mentors", "rustic wisdom"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="20" ry="12" fill="#48BB78"/><line x1="80" y1="85" x2="65" y2="70" stroke="#2D3748" stroke-width="3"/><line x1="120" y1="85" x2="135" y2="70" stroke="#2D3748" stroke-width="3"/><line x1="80" y1="115" x2="65" y2="130" stroke="#2D3748" stroke-width="3"/><line x1="120" y1="115" x2="135" y2="130" stroke="#2D3748" stroke-width="3"/><line x1="85" y1="100" x2="115" y2="100" stroke="#E53E3E" stroke-width="3"/><line x1="100" y1="85" x2="100" y2="115" stroke="#E53E3E" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  SHENG: {
    code: 'SHENG',
    name: '道德圣人',
    englishName: 'Saint',
    keywords: ["站在制高点", "道德绑架", "完美无瑕", "审判众生"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(12, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  XIAN: {
    code: 'XIAN',
    name: '咸鱼干',
    englishName: 'SaltedFish',
    keywords: ["躺平2.0", "翻身也不想翻", "晒干了沉默", "彻底放弃"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M80 70 L120 70 L110 130 L90 130 Z" fill="#A0AEC0"/><circle cx="95" cy="90" r="4" fill="#E2E8F0"/><circle cx="105" cy="90" r="4" fill="#E2E8F0"/><path d="M90 110 Q100 105 110 110" stroke="#E2E8F0" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  WOYU: {
    code: 'WOYU',
    name: '无语子',
    englishName: 'Speechless',
    keywords: ["无话可说", "翻白眼", "累了毁灭吧", "沟通障碍"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="90" width="80" height="20" fill="#A0AEC0"/><rect x="60" y="115" width="50" height="6" fill="#718096"/><rect x="60" y="125" width="30" height="6" fill="#718096"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  DADE: {
    code: 'DADE',
    name: '大冤种',
    englishName: 'BigSucker',
    keywords: ["背锅侠", "吃亏是福", "被坑专业户", "倒霉蛋"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#A0AEC0"/><text x="100" y="115" text-anchor="middle" font-size="28" fill="#E53E3E">冤</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  FANS: {
    code: 'FANS',
    name: '反PUA师',
    englishName: 'AntiPUA',
    keywords: ["过度防御", "谁都想控制我", "敏感多疑", "拒绝一切建议"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 100 L100 70 L130 100 L100 130 Z" fill="none" stroke="#4299E1" stroke-width="4"/><path d="M100 85 L100 115 M85 100 L115 100" stroke="#E53E3E" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  HEIH: {
    code: 'HEIH',
    name: '黑化版',
    englishName: 'Darkened',
    keywords: ["已黑化", "小学生式叛逆", "冷酷无情", "非主流复兴"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 80 L130 80 L120 140 L80 140 Z" fill="#2D3748"/><path d="M85 100 L115 120 M115 100 L85 120" stroke="#E53E3E" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  BAIH: {
    code: 'BAIH',
    name: '白莲花',
    englishName: 'WhiteLotus',
    keywords: ["装无辜", "绿茶进阶版", "纯洁人设", "实则心机"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="110" rx="35" ry="30" fill="#E2E8F0"/><path d="M85 120 Q100 110 115 120" stroke="#A0AEC0" stroke-width="2" fill="none"/><ellipse cx="100" cy="85" rx="8" ry="5" fill="#FBB6CE"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  CHAH: {
    code: 'CHAH',
    name: '茶艺师',
    englishName: 'TeaMaster',
    keywords: ["茶言茶语", "高端绿茶", "润物细无声", "以柔克刚"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="110" rx="30" ry="20" fill="#E2E8F0" stroke="#A0AEC0" stroke-width="2"/><path d="M70 105 Q100 95 130 105" stroke="#718096" stroke-width="2" fill="none"/><rect x="125" y="95" width="20" height="4" fill="#D69E2E"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },

  KENG: {
    code: 'KENG',
    name: '坑王',
    englishName: 'PitKing',
    keywords: ["挖坑不填", "队友杀手", "承诺即谎言", "专业掉链子"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="130" rx="50" ry="20" fill="#2D3748"/><path d="M70 80 L85 110 M130 80 L115 110" stroke="#A0AEC0" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  MAO: {
    code: 'MAO',
    name: '猫奴',
    englishName: 'CatSlave',
    keywords: ["喵喵教", "猫语十级", "撸猫成瘾", "精神猫科"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><polygon points="70,65 85,100 55,100" fill="#F6AD55"/><polygon points="130,65 115,100 145,100" fill="#F6AD55"/><circle cx="100" cy="110" r="45" fill="#F6AD55"/><ellipse cx="85" cy="105" rx="6" ry="12" fill="#2D3748"/><ellipse cx="115" cy="105" rx="6" ry="12" fill="#2D3748"/><circle cx="100" cy="120" r="4" fill="#2D3748"/><line x1="60" y1="120" x2="40" y2="115" stroke="#2D3748" stroke-width="1.5"/><line x1="60" y1="125" x2="40" y2="130" stroke="#2D3748" stroke-width="1.5"/><line x1="140" y1="120" x2="160" y2="115" stroke="#2D3748" stroke-width="1.5"/><line x1="140" y1="125" x2="160" y2="130" stroke="#2D3748" stroke-width="1.5"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  GOU: {
    code: 'GOU',
    name: '狗派',
    englishName: 'DogPerson',
    keywords: ["忠诚", "热情", "舔狗预备", "狗塑自己"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="60" cy="85" rx="15" ry="25" fill="#D69E2E" transform="rotate(-20 60 85)"/><ellipse cx="140" cy="85" rx="15" ry="25" fill="#D69E2E" transform="rotate(20 140 85)"/><ellipse cx="100" cy="110" rx="40" ry="50" fill="#D69E2E"/><circle cx="85" cy="105" r="8" fill="#2D3748"/><circle cx="115" cy="105" r="8" fill="#2D3748"/><ellipse cx="100" cy="125" rx="10" ry="8" fill="#4A5568"/><ellipse cx="100" cy="140" rx="6" ry="10" fill="#FC8181"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SHU2: {
    code: 'SHU2',
    name: '鼠人',
    englishName: 'RatPerson',
    keywords: ["下水道生存", "阴暗爬行", "囤粮焦虑", "地铁老鼠"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="65" cy="80" r="18" fill="#A0AEC0"/><circle cx="135" cy="80" r="18" fill="#A0AEC0"/><circle cx="85" cy="100" r="5" fill="#2D3748"/><circle cx="115" cy="100" r="5" fill="#2D3748"/><circle cx="100" cy="115" r="5" fill="#F687B3"/><path d="M140 130 Q170 120 165 100" fill="none" stroke="#A0AEC0" stroke-width="4" stroke-linecap="round"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  NIU: {
    code: 'NIU',
    name: '牛马',
    englishName: 'NiuMa',
    keywords: ["打工牲口", "任劳任怨", "耕地专业", "草料就行"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 70 L50 30 L75 60" fill="#A0AEC0"/><path d="M140 70 L150 30 L125 60" fill="#A0AEC0"/><circle cx="65" cy="85" r="14" fill="#718096"/><circle cx="135" cy="85" r="14" fill="#718096"/><rect x="55" y="65" width="90" height="80" rx="20" fill="#718096"/><circle cx="85" cy="110" r="4" fill="#2D3748"/><circle cx="115" cy="110" r="4" fill="#2D3748"/><circle cx="100" cy="120" r="8" fill="none" stroke="#4A5568" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  HU2: {
    code: 'HU2',
    name: '狐系',
    englishName: 'FoxType',
    keywords: ["精明", "魅惑", "狡猾", "狐假虎威"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><polygon points="70,65 85,100 55,100" fill="#ED8936"/><polygon points="130,65 115,100 145,100" fill="#ED8936"/><polygon points="100,60 145,140 55,140" fill="#ED8936"/><circle cx="100" cy="120" r="4" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  LANG: {
    code: 'LANG',
    name: '狼性',
    englishName: 'WolfSpirit',
    keywords: ["狼性文化", "团队嚎叫", "996之狼", "画饼充饥"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><polygon points="70,65 85,100 55,100" fill="#718096"/><polygon points="130,65 115,100 145,100" fill="#718096"/><polygon points="100,60 145,140 55,140" fill="#718096"/><polygon points="78,100 92,108 78,116" fill="#2D3748"/><polygon points="122,100 108,108 122,116" fill="#2D3748"/><polygon points="100,115 108,130 92,130" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  XIONG: {
    code: 'XIONG',
    name: '熊系',
    englishName: 'BearType',
    keywords: ["憨厚", "冬眠", "莽撞", "熊抱攻击"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="65" cy="80" r="18" fill="#975A16"/><circle cx="135" cy="80" r="18" fill="#975A16"/><circle cx="100" cy="110" r="45" fill="#975A16"/><circle cx="85" cy="110" r="4" fill="#2D3748"/><circle cx="115" cy="110" r="4" fill="#2D3748"/><ellipse cx="100" cy="125" rx="12" ry="8" fill="#4A5568"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SHE2: {
    code: 'SHE2',
    name: '蛇系',
    englishName: 'SnakeType',
    keywords: ["冷血", "缠绕", "伺机而动", "毒舌"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 100 Q80 60 100 100 T140 100 Q160 140 120 140 Q90 140 80 120 Q70 100 60 100" fill="#48BB78"/><polygon points="120,140 130,150 115,148" fill="#E53E3E"/><ellipse cx="85" cy="105" rx="4" ry="8" fill="#2D3748"/><ellipse cx="105" cy="105" rx="4" ry="8" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  TU: {
    code: 'TU',
    name: '兔系',
    englishName: 'RabbitType',
    keywords: ["胆小", "繁殖力强", "胡萝卜", "红眼病患者"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="60" cy="55" rx="10" ry="35" fill="#FBB6CE"/><ellipse cx="140" cy="55" rx="10" ry="35" fill="#FBB6CE"/><polygon points="100,60 145,140 55,140" fill="#FBB6CE"/><circle cx="85" cy="105" r="8" fill="#2D3748"/><circle cx="115" cy="105" r="8" fill="#2D3748"/><path d="M95 125 L100 135 L105 125 Z" fill="#F687B3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  LONG: {
    code: 'LONG',
    name: '龙图',
    englishName: 'LongMeme',
    keywords: ["龙图表情包", "龙的传人", "图腾崇拜", "飞天梦"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 80 Q100 50 140 80 L130 140 Q100 155 70 140 Z" fill="#E53E3E"/><path d="M75 100 L95 110" stroke="#2D3748" stroke-width="3"/><path d="M125 100 L105 110" stroke="#2D3748" stroke-width="3"/><circle cx="85" cy="115" r="5" fill="#2D3748"/><circle cx="115" cy="115" r="5" fill="#2D3748"/><ellipse cx="100" cy="125" rx="14" ry="10" fill="#C53030"/><line x1="60" y1="120" x2="40" y2="115" stroke="#2D3748" stroke-width="1.5"/><line x1="60" y1="125" x2="40" y2="130" stroke="#2D3748" stroke-width="1.5"/><line x1="140" y1="120" x2="160" y2="115" stroke="#2D3748" stroke-width="1.5"/><line x1="140" y1="125" x2="160" y2="130" stroke="#2D3748" stroke-width="1.5"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  ZHUS: {
    code: 'ZHUS',
    name: '猪系',
    englishName: 'PigType',
    keywords: ["躺平", "贪吃", "幸福", "杀猪盘受害者"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="60" cy="85" rx="15" ry="25" fill="#F687B3" transform="rotate(-20 60 85)"/><ellipse cx="140" cy="85" rx="15" ry="25" fill="#F687B3" transform="rotate(20 140 85)"/><circle cx="100" cy="110" r="45" fill="#F687B3"/><circle cx="85" cy="110" r="4" fill="#2D3748"/><circle cx="115" cy="110" r="4" fill="#2D3748"/><ellipse cx="100" cy="125" rx="12" ry="8" fill="#4A5568"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  YANG: {
    code: 'YANG',
    name: '羊系',
    englishName: 'SheepType',
    keywords: ["跟风", "羊毛党", "咩咩叫", "待宰羔羊"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="85" cy="110" r="4" fill="#2D3748"/><circle cx="115" cy="110" r="4" fill="#2D3748"/><circle cx="100" cy="120" r="4" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  BAISE: {
    code: 'BAISE',
    name: '白噪音',
    englishName: 'WhiteNoise',
    keywords: ["极简", "空白", "降噪", "存在感稀释"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="50" fill="#F7FAFC" stroke="#CBD5E0" stroke-width="2"/><circle cx="93.01016803937065" cy="92.16349857420158" r="3.500142756522629" fill="#CBD5E0" opacity="0.3"/><circle cx="60.851667599764816" cy="118.87760682035011" r="2.286227213928521" fill="#CBD5E0" opacity="0.3"/><circle cx="127.17603080701072" cy="141.3023988129848" r="2.5083917302554974" fill="#CBD5E0" opacity="0.3"/><circle cx="132.2596659938967" cy="107.79838782031491" r="3.566189860369672" fill="#CBD5E0" opacity="0.3"/><circle cx="40.69058644086314" cy="116.53297755011192" r="3.539167642277969" fill="#CBD5E0" opacity="0.3"/><circle cx="48.883399334171685" cy="55.124554400952334" r="3.158415335255776" fill="#CBD5E0" opacity="0.3"/><circle cx="163.7606612686746" cy="149.01082772811378" r="2.2289964936254125" fill="#CBD5E0" opacity="0.3"/><circle cx="121.61746888815775" cy="97.72677883424961" r="2.2789200639090565" fill="#CBD5E0" opacity="0.3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  HEISE: {
    code: 'HEISE',
    name: '黑化',
    englishName: 'Blackened',
    keywords: ["中二", "暗夜", "哥特", "黑历史"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M100 60 L140 140 L60 140 Z" fill="#2D3748"/><path d="M90 100 L110 100" stroke="#E2E8F0" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  FENH: {
    code: 'FENH',
    name: '粉红税',
    englishName: 'PinkTax',
    keywords: ["少女心", "溢价", "可爱即正义", "芭比粉"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 90 Q100 60 130 90 Q130 130 100 150 Q70 130 70 90" fill="#FBB6CE"/><rect x="85" y="110" width="30" height="20" fill="#F687B3" rx="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  LV: {
    code: 'LV',
    name: '绿色健康',
    englishName: 'GreenHealth',
    keywords: ["护眼", "环保", "健康码", "绿帽焦虑"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M100 50 Q130 100 100 150 Q70 100 100 50" fill="#48BB78"/><path d="M100 80 L115 110 L85 110 Z" fill="#276749"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  LAN: {
    code: 'LAN',
    name: '蓝瘦香菇',
    englishName: 'BlueSad',
    keywords: ["忧郁", "网抑云", "深海", "冷色调"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 100 Q100 60 130 100 Q100 150 70 100" fill="#4299E1"/><circle cx="90" cy="95" r="4" fill="#E2E8F0"/><circle cx="110" cy="95" r="4" fill="#E2E8F0"/><path d="M85 115 Q100 105 115 115" stroke="#2B6CB0" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  ZI: {
    code: 'ZI',
    name: '紫啧',
    englishName: 'PurpleVibe',
    keywords: ["神秘", "高贵", "葡萄味", "紫外线"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><polygon points="100,55 125,90 115,140 85,140 75,90" fill="#9F7AEA"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  HUANG: {
    code: 'HUANG',
    name: '皇色',
    englishName: 'EmperorColor',
    keywords: ["尊贵", "警告", "黄河", "黄昏"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="45" fill="#ECC94B"/><circle cx="85" cy="95" r="5" fill="#2D3748"/><circle cx="115" cy="95" r="5" fill="#2D3748"/><path d="M90 115 Q100 125 110 115" stroke="#2D3748" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  HONG: {
    code: 'HONG',
    name: '红温',
    englishName: 'RedRage',
    keywords: ["愤怒", "热血", "红包", "红尘"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="60" width="80" height="80" rx="10" fill="#F56565"/><rect x="75" y="90" width="50" height="8" fill="#C53030" rx="2"/><rect x="75" y="105" width="30" height="8" fill="#C53030" rx="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  HUI: {
    code: 'HUI',
    name: '灰色幽默',
    englishName: 'GreyHumor',
    keywords: ["冷笑话", "模糊地带", "雾霾", "佛系"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="65" y="70" width="70" height="60" rx="8" fill="#A0AEC0"/><circle cx="85" cy="100" r="5" fill="#2D3748"/><circle cx="115" cy="100" r="5" fill="#2D3748"/><path d="M85 120 Q100 110 115 120" stroke="#2D3748" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  QING: {
    code: 'QING',
    name: '青色文学',
    englishName: 'CyanLit',
    keywords: ["青春疼痛", "薄荷味", "青花瓷", "青涩"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="60" width="80" height="80" rx="10" fill="#38B2AC"/><path d="M70 130 Q100 100 130 130" stroke="#234E52" stroke-width="3" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  GAN: {
    code: 'GAN',
    name: '肝帝',
    englishName: 'LiverKing',
    keywords: ["熬夜", "爆肝", "转氨酶", "肝硬化"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 90 Q100 70 130 90 Q140 120 100 140 Q60 120 70 90" fill="#C05621"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SHEN2: {
    code: 'SHEN2',
    name: '肾虚',
    englishName: 'KidneyWeak',
    keywords: ["腰膝酸软", "保温杯", "枸杞", "力不从心"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M75 80 Q95 70 100 100 Q105 70 125 80 Q135 110 100 130 Q65 110 75 80" fill="#9B2C2C"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  WEI: {
    code: 'WEI',
    name: '养胃',
    englishName: 'StomachCare',
    keywords: ["生冷不吃", "小米粥", "玻璃胃", "少食多餐"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="40" ry="50" fill="#D69E2E"/><path d="M85 110 Q100 100 115 110" stroke="#744210" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  FEI: {
    code: 'FEI',
    name: '肺活量',
    englishName: 'LungCap',
    keywords: ["气喘吁吁", "跑步就喘", "抽烟", "空气净化器"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 90 Q80 60 100 90 Q120 60 140 90 L130 140 Q100 150 70 140 Z" fill="#F687B3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  XIN: {
    code: 'XIN',
    name: '心梗',
    englishName: 'HeartAttack',
    keywords: ["惊吓体质", "咖啡因过量", "猝死边缘", "心动过速"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M100 60 L130 90 L130 130 L100 150 L70 130 L70 90 Z" fill="#E53E3E"/><path d="M85 100 L115 130" stroke="#9B2C2C" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  NAO: {
    code: 'NAO',
    name: '脑补',
    englishName: 'BrainFantasy',
    keywords: ["颅内高潮", "过度解读", "编剧脑", "颅内小剧场"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 90 Q100 50 130 90 Q140 130 100 145 Q60 130 70 90" fill="#9F7AEA"/><path d="M85 90 Q100 80 115 90" stroke="#553C9A" stroke-width="2" fill="none"/><path d="M85 110 Q100 100 115 110" stroke="#553C9A" stroke-width="2" fill="none"/><path d="M85 130 Q100 120 115 130" stroke="#553C9A" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  YAN: {
    code: 'YAN',
    name: '眼高手低',
    englishName: 'EyesHigh',
    keywords: ["审美疲劳", "近视", "看不起", "眼界高"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="45" ry="30" fill="#E2E8F0"/><circle cx="100" cy="100" r="18" fill="#4299E1"/><circle cx="100" cy="100" r="8" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  ER: {
    code: 'ER',
    name: '二次元耳',
    englishName: 'AnimeEar',
    keywords: ["ASMR", "耳机依赖", "耳鸣", "只听自己想听的"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 80 Q100 50 130 80 Q140 120 100 140 Q60 120 70 80" fill="#FBB6CE"/><path d="M80 90 Q100 70 120 90 Q125 110 100 120 Q75 110 80 90" fill="#F687B3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SHOU: {
    code: 'SHOU',
    name: '手残',
    englishName: 'HandNoob',
    keywords: ["操作下饭", "手抖", "电竞绝缘体", "手工废物"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="110" rx="20" ry="35" fill="#F6AD55"/><rect x="82" y="60" width="8" height="30" rx="4" fill="#F6AD55"/><rect x="94" y="55" width="8" height="35" rx="4" fill="#F6AD55"/><rect x="106" y="60" width="8" height="30" rx="4" fill="#F6AD55"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  JIAO: {
    code: 'JIAO',
    name: '脚臭',
    englishName: 'FootSmell',
    keywords: ["真菌感染", "大汗脚", "酸爽", "捂脚"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="110" rx="25" ry="40" fill="#D69E2E"/><rect x="85" y="55" width="30" height="25" rx="5" fill="#A0AEC0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  ZAO: {
    code: 'ZAO',
    name: '早起鸟',
    englishName: 'EarlyBird',
    keywords: ["自律", "晨光", "空腹有氧", "作息异类"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(19, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  YE: {
    code: 'YE',
    name: '夜猫子',
    englishName: 'NightOwl',
    keywords: ["凌晨活跃", "熬夜冠军", "夜间emo", "昼伏夜出"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(52, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  ZHOU: {
    code: 'ZHOU',
    name: '周末战士',
    englishName: 'WeekendWar',
    keywords: ["五天摆烂两天拼命", "报复性娱乐", "周一恐惧症"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(205, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  JIA: {
    code: 'JIA',
    name: '假期综合症',
    englishName: 'HolidaySick',
    keywords: ["节后抑郁", "调休受害者", "年假焦虑", "旅行后遗症"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(33, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  CHUN: {
    code: 'CHUN',
    name: '春困',
    englishName: 'SpringSleep',
    keywords: ["嗜睡", "花粉过敏", "万物复苏我只想睡", "回南天"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="110" r="8" fill="#48BB78"/><line x1="100" y1="110" x2="100" y2="160" stroke="#744210" stroke-width="3"/><ellipse cx="85" cy="100" rx="10" ry="6" fill="#F687B3" transform="rotate(-30 85 100)"/><ellipse cx="115" cy="95" rx="10" ry="6" fill="#F687B3" transform="rotate(30 115 95)"/><ellipse cx="100" cy="80" rx="10" ry="6" fill="#F687B3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  XIA: {
    code: 'XIA',
    name: '夏眠',
    englishName: 'SummerNap',
    keywords: ["空调续命", "中暑", "冷饮依赖", "蚊子仇恨"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="85" r="30" fill="#ECC94B"/><path d="M70 130 L85 110 L100 130 L115 110 L130 130" stroke="#48BB78" stroke-width="4" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  QIU: {
    code: 'QIU',
    name: '悲秋',
    englishName: 'AutumnSad',
    keywords: ["落叶emo", "换季抑郁", "开学焦虑", "凉了"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 120 Q100 80 130 120" fill="#ED8936"/><path d="M130 120 L140 110" stroke="#C05621" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  DONG: {
    code: 'DONG',
    name: '冬眠',
    englishName: 'WinterSleep',
    keywords: ["被窝封印", "起床困难", "手脚冰凉", "年尾摆烂"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="80" cy="80" r="6" fill="#E2E8F0"/><circle cx="120" cy="70" r="5" fill="#E2E8F0"/><circle cx="100" cy="90" r="7" fill="#E2E8F0"/><path d="M85 130 Q100 110 115 130" stroke="#4299E1" stroke-width="3" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SHUX: {
    code: 'SHUX',
    name: '数学恐惧',
    englishName: 'MathFear',
    keywords: ["看到数字就困", "计算器依赖", "买菜不用微积分", "挂科阴影"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(179, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  WEN: {
    code: 'WEN',
    name: '文科生',
    englishName: 'Humanities',
    keywords: ["感性", "背书", "理想主义", "就业困难"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(297, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  LI: {
    code: 'LI',
    name: '理科生',
    englishName: 'ScienceType',
    keywords: ["理性", "直男思维", "实验报告", "不懂浪漫"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(315, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  YING: {
    code: 'YING',
    name: '英语焦虑',
    englishName: 'EngAnx',
    keywords: ["四六级 PTSD", "哑巴英语", "翻译腔", "abandon"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(114, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  LIH: {
    code: 'LIH',
    name: '历史虚无',
    englishName: 'HistNihil',
    keywords: ["如果当时", "后悔学文", "穿越幻想", "历史循环"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(284, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  DILI: {
    code: 'DILI',
    name: '地理盲',
    englishName: 'GeoBlind',
    keywords: ["路痴", "不分东南西北", "地图依赖", "时差混乱"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(179, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SHENG2: {
    code: 'SHENG2',
    name: '生物迷',
    englishName: 'BioNerd',
    keywords: ["恐虫", "细胞", "进化论", "养生伪科学"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(81, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  ZHENGZ: {
    code: 'ZHENGZ',
    name: '键政大师',
    englishName: 'KeyPolitics',
    keywords: ["国际局势", "指点江山", "茶馆论政", "被封号"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(0, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  JINGJ: {
    code: 'JINGJ',
    name: '经济学人',
    englishName: 'EconPerson',
    keywords: ["精打细算", "韭菜自觉", "通货膨胀", "奶茶经济学"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(312, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  FALV: {
    code: 'FALV',
    name: '法外狂徒',
    englishName: 'LawOutlaw',
    keywords: ["罗翔信徒", "张三附体", "钻空子", "法盲"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(256, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  QI: {
    code: 'QI',
    name: '骑行侠',
    englishName: 'Cyclist',
    keywords: ["公路车", "骑行裤", "爬坡", "风与自由"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="75" cy="115" r="20" fill="#718096"/><circle cx="125" cy="115" r="20" fill="#718096"/><path d="M75 115 L90 70 L110 70 L125 115" fill="none" stroke="#E53E3E" stroke-width="4"/><path d="M90 70 L90 55" stroke="#2D3748" stroke-width="3"/><path d="M110 70 L110 55" stroke="#2D3748" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  JIAO2: {
    code: 'JIAO2',
    name: '公交难民',
    englishName: 'BusRefugee',
    keywords: ["早高峰", "挤成沙丁鱼", "坐过站", "晕车"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="40" y="80" width="120" height="50" rx="8" fill="#ECC94B"/><rect x="55" y="90" width="25" height="18" fill="#E2E8F0" rx="2"/><rect x="90" y="90" width="25" height="18" fill="#E2E8F0" rx="2"/><rect x="125" y="90" width="25" height="18" fill="#E2E8F0" rx="2"/><circle cx="60" cy="140" r="12" fill="#2D3748"/><circle cx="140" cy="140" r="12" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  DIDI: {
    code: 'DIDI',
    name: '滴滴难民',
    englishName: 'DidiRider',
    keywords: ["拼车话痨", "晕车", "看司机评分", "路线争执"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="55" y="90" width="90" height="40" rx="12" fill="#F6AD55"/><rect x="65" y="100" width="25" height="15" fill="#E2E8F0" rx="2"/><circle cx="75" cy="135" r="10" fill="#2D3748"/><circle cx="125" cy="135" r="10" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  GAOTIE: {
    code: 'GAOTIE',
    name: '高铁霸座',
    englishName: 'SeatHog',
    keywords: ["靠窗情结", "泡面味", "熊孩子", "霸座预备"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="50" y="70" width="100" height="50" rx="20" fill="#4299E1"/><rect x="60" y="80" width="30" height="15" fill="#E2E8F0" rx="2"/><rect x="100" y="80" width="30" height="15" fill="#E2E8F0" rx="2"/><line x1="40" y1="115" x2="160" y2="115" stroke="#2D3748" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  FEIJI: {
    code: 'FEIJI',
    name: '飞机耳',
    englishName: 'PlaneEar',
    keywords: ["耳鸣", "航空餐", "时差", "恐飞"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 110 L100 70 L140 110 L120 110 L100 130 L80 110 Z" fill="#E2E8F0" stroke="#4299E1" stroke-width="2"/><path d="M100 70 L100 50" stroke="#A0AEC0" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  LUN: {
    code: 'LUN',
    name: '轮椅主播',
    englishName: 'WheelChair',
    keywords: ["久坐", "腰椎突出", "电竞椅", "人体工学"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="70" cy="120" r="20" fill="#718096"/><circle cx="130" cy="120" r="20" fill="#718096"/><path d="M60 110 Q100 80 140 110 L140 120 L60 120 Z" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SKATE: {
    code: 'SKATE',
    name: '滑板少年',
    englishName: 'Skater',
    keywords: ["摔伤", "Ollie", "街头", "护膝"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="55" y="115" width="90" height="12" rx="4" fill="#ED8936"/><circle cx="70" cy="135" r="8" fill="#2D3748"/><circle cx="130" cy="135" r="8" fill="#2D3748"/><rect x="80" y="90" width="40" height="25" fill="#A0AEC0" rx="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  DIAN2: {
    code: 'DIAN2',
    name: '电动车战神',
    englishName: 'EScooter',
    keywords: ["续航焦虑", "头盔", "闯红灯", "充电桩"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="70" cy="120" r="18" fill="#718096"/><circle cx="130" cy="120" r="18" fill="#718096"/><rect x="55" y="90" width="90" height="35" rx="8" fill="#48BB78"/><rect x="65" y="100" width="25" height="15" fill="#E2E8F0" rx="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  GONG: {
    code: 'GONG',
    name: '工位成精',
    englishName: 'DeskSpirit',
    keywords: ["久坐", "显示器支架", "绿植", "私人领地"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="40" y="100" width="120" height="15" fill="#D69E2E"/><rect x="50" y="115" width="10" height="30" fill="#A0AEC0"/><rect x="140" y="115" width="10" height="30" fill="#A0AEC0"/><rect x="70" y="80" width="40" height="25" fill="#2D3748" rx="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  CHUANG: {
    code: 'CHUANG',
    name: '床癌晚期',
    englishName: 'BedCancer',
    keywords: ["被窝封印", "起不来", "床上办公", "床品投资"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="40" y="110" width="120" height="20" rx="5" fill="#9F7AEA"/><rect x="40" y="90" width="120" height="25" rx="3" fill="#E2E8F0"/><rect x="35" y="110" width="8" height="30" fill="#D69E2E"/><rect x="157" y="110" width="8" height="30" fill="#D69E2E"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  CES: {
    code: 'CES',
    name: '厕所哲学家',
    englishName: 'ToiletPhil',
    keywords: ["带薪拉屎", "思考人生", "腿麻", "手机没电焦虑"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="130" rx="40" ry="20" fill="#E2E8F0"/><rect x="75" y="80" width="50" height="50" rx="5" fill="#E2E8F0"/><rect x="80" y="70" width="40" height="15" fill="#A0AEC0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  DIANT: {
    code: 'DIANT',
    name: '电梯社恐',
    englishName: 'ElevatorAwk',
    keywords: ["假装看手机", "楼层焦虑", "尴尬沉默", "镜面自拍"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="60" width="80" height="80" fill="#A0AEC0"/><rect x="70" y="70" width="25" height="60" fill="#E2E8F0"/><rect x="105" y="70" width="25" height="60" fill="#E2E8F0"/><line x1="82" y1="85" x2="82" y2="115" stroke="#718096" stroke-width="2"/><line x1="117" y1="85" x2="117" y2="115" stroke="#718096" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  LOUTI: {
    code: 'LOUTI',
    name: '楼梯战神',
    englishName: 'StairMaster',
    keywords: ["不想等电梯", "减肥", "气喘吁吁", "膝盖痛"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 140 L60 120 L90 120 L90 100 L120 100 L120 80 L150 80 L150 140 Z" fill="#D69E2E"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  DITIE: {
    code: 'DITIE',
    name: '地铁流浪',
    englishName: 'MetroWander',
    keywords: ["耳机隔绝", "换乘迷宫", "座位争夺战", "末班车"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="40" y="80" width="120" height="45" rx="8" fill="#4299E1"/><rect x="50" y="90" width="20" height="15" fill="#E2E8F0" rx="2"/><rect x="80" y="90" width="20" height="15" fill="#E2E8F0" rx="2"/><rect x="110" y="90" width="20" height="15" fill="#E2E8F0" rx="2"/><circle cx="60" cy="135" r="10" fill="#2D3748"/><circle cx="140" cy="135" r="10" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  YUE: {
    code: 'YUE',
    name: '出租屋',
    englishName: 'RentalSoul',
    keywords: ["房东", "押金", "合租尴尬", "漂泊感"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M100 50 L160 100 L160 150 L40 150 L40 100 Z" fill="#F6AD55"/><rect x="80" y="110" width="40" height="40" fill="#744210"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  WU: {
    code: 'WU',
    name: '无房焦虑',
    englishName: 'Houseless',
    keywords: ["房价 PTSD", "租房", "搬家", "没有归属感"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(154, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  YU: {
    code: 'YU',
    name: '雨天emo',
    englishName: 'RainSad',
    keywords: ["听雨", "不出门", "潮湿", "雨伞丢失"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 80 Q100 60 140 80 Q120 110 100 100 Q80 110 60 80" fill="#A0AEC0"/><line x1="80" y1="120" x2="75" y2="140" stroke="#4299E1" stroke-width="3" stroke-linecap="round"/><line x1="100" y1="115" x2="95" y2="145" stroke="#4299E1" stroke-width="3" stroke-linecap="round"/><line x1="120" y1="120" x2="115" y2="140" stroke="#4299E1" stroke-width="3" stroke-linecap="round"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  XUE: {
    code: 'XUE',
    name: '雪崩预备',
    englishName: 'Avalanche',
    keywords: ["滑雪", "寒冷", "白色圣诞", "雪盲"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="85" cy="85" r="8" fill="#E2E8F0"/><circle cx="115" cy="70" r="6" fill="#E2E8F0"/><circle cx="100" cy="100" r="7" fill="#E2E8F0"/><circle cx="75" cy="115" r="5" fill="#E2E8F0"/><circle cx="125" cy="110" r="6" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  FENG: {
    code: 'FENG',
    name: '疯癫如风',
    englishName: 'WindMad',
    keywords: ["随风飘摇", "发型不保", "自由", "凌乱"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 100 Q90 60 120 100 Q90 140 60 100" fill="none" stroke="#A0AEC0" stroke-width="4"/><path d="M80 120 Q110 80 140 120" fill="none" stroke="#A0AEC0" stroke-width="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  WU2: {
    code: 'WU2',
    name: '雾霾肺',
    englishName: 'SmogLung',
    keywords: ["口罩", "空气净化器", "灰蒙蒙", "呼吸道"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="70" width="80" height="50" rx="10" fill="#A0AEC0"/><rect x="70" y="80" width="60" height="6" fill="#718096" rx="2"/><rect x="70" y="92" width="40" height="6" fill="#718096" rx="2"/><rect x="70" y="104" width="50" height="6" fill="#718096" rx="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SHAN: {
    code: 'SHAN',
    name: '闪躲型人格',
    englishName: 'FlashDodge',
    keywords: ["社死逃离", "突然消失", "回避", "快闪"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(229, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  LEI: {
    code: 'LEI',
    name: '累成雷',
    englishName: 'ThunderTired',
    keywords: ["炸毛", "轰鸣", "惊天动地", "然后下雨"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(315, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  YUN: {
    code: 'YUN',
    name: '云玩家',
    englishName: 'CloudGamer',
    keywords: ["只看直播", "不买单机", "指点江山", "配置不够"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(331, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  XIA2: {
    code: 'XIA2',
    name: '夏日限定',
    englishName: 'SummerOnly',
    keywords: ["防晒", "冷饮", "蚊子包", "短袖"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="90" r="30" fill="#ECC94B"/><path d="M70 140 L85 120 L100 140 L115 120 L130 140" stroke="#ED8936" stroke-width="4" fill="none"/><circle cx="115" cy="85" r="5" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  GUP: {
    code: 'GUP',
    name: '股票韭菜',
    englishName: 'StockLeek',
    keywords: ["追涨杀跌", "绿油油", "套牢", "回本就跑"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(87, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  JIJIN: {
    code: 'JIJIN',
    name: '基金绿码',
    englishName: 'FundGreen',
    keywords: ["定投", "微笑曲线", "韭菜盒子", "止损无能"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(76, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  JIAO3: {
    code: 'JIAO3',
    name: '教培难民',
    englishName: 'EdRefugee',
    keywords: ["双减", "转行", "销售", "焦虑贩卖"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(319, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  FANG: {
    code: 'FANG',
    name: '房奴',
    englishName: 'HouseSlave',
    keywords: ["房贷", "公摊", "烂尾", "不敢辞职"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(151, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  CHE: {
    code: 'CHE',
    name: '车贷战士',
    englishName: 'CarLoan',
    keywords: ["油耗", "保养", "停车难", "代步工具"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(38, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  XINY: {
    code: 'XINY',
    name: '信用卡套娃',
    englishName: 'CardCycle',
    keywords: ["分期", "最低还款", "以卡养卡", "征信"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(295, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  DAI: {
    code: 'DAI',
    name: '网贷青年',
    englishName: 'LoanYouth',
    keywords: ["花呗", "白条", "以贷养贷", "催收电话"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(179, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  LICAI: {
    code: 'LICAI',
    name: '理财幻觉',
    englishName: 'WealthIllu',
    keywords: ["余额宝", "收益率", "杀猪盘", "暴富梦"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(315, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  CHAOS2: {
    code: 'CHAOS2',
    name: '炒币归零',
    englishName: 'CoinZero',
    keywords: ["合约", "爆仓", "信仰充值", "区块链革命"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 130 L140 70" stroke="#E53E3E" stroke-width="4"/><path d="M70 70 L130 130" stroke="#48BB78" stroke-width="4"/><polygon points="100,60 110,90 140,100 110,110 100,140 90,110 60,100 90,90" fill="#ECC94B"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  GUA: {
    code: 'GUA',
    name: '挂壁青年',
    englishName: 'Hanger',
    keywords: ["三和大神", "日结", "网吧", "躺平"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="60" width="80" height="80" fill="#A0AEC0"/><text x="100" y="110" text-anchor="middle" font-size="24" fill="#E53E3E">挂</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  V50: {
    code: 'V50',
    name: '疯狂星期四',
    englishName: 'KFCV50',
    keywords: ["文案复制", "段子手", "白嫖", "等待周五"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 60 L130 60 L120 120 L80 120 Z" fill="#E53E3E"/><text x="100" y="95" text-anchor="middle" font-size="14" fill="#E2E8F0">V50</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  EMOJI: {
    code: 'EMOJI',
    name: '表情包语者',
    englishName: 'EmojiSpeak',
    keywords: ["斗图", "不用文字", "象形文字", "阴阳怪气"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#ECC94B"/><circle cx="85" cy="95" r="5" fill="#2D3748"/><circle cx="115" cy="95" r="5" fill="#2D3748"/><path d="M85 120 Q100 135 115 120" fill="none" stroke="#2D3748" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  PINY: {
    code: 'PINY',
    name: '拼音缩写大师',
    englishName: 'PinyinAbbr',
    keywords: ["yyds", "绝绝子", "栓Q", "不懂人话"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><text x="100" y="80" text-anchor="middle" font-size="14" fill="#718096">yyds</text><text x="100" y="110" text-anchor="middle" font-size="14" fill="#718096">xswl</text><text x="100" y="140" text-anchor="middle" font-size="14" fill="#718096">zqsg</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  FUHAO: {
    code: 'FUHAO',
    name: '符号成精',
    englishName: 'SymbolSoul',
    keywords: ["@#￥%", "颜文字", "特殊字符", "加密通话"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><text x="70" y="110" font-size="36" fill="#718096">∞</text><text x="110" y="140" font-size="36" fill="#718096">∑</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SHUZI: {
    code: 'SHUZI',
    name: '数字敏感',
    englishName: 'NumSense',
    keywords: ["幸运数字", "密码", "纪念日", "数学不好但迷信数字"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><text x="70" y="110" font-size="40" fill="#4299E1">0</text><text x="110" y="140" font-size="40" fill="#E53E3E">1</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  JIEG: {
    code: 'JIEG',
    name: '截屏成精',
    englishName: 'Screenshot',
    keywords: ["收藏即学习", "相册爆炸", "取证", "聊天记录"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="50" y="50" width="100" height="100" fill="none" stroke="#A0AEC0" stroke-width="4" stroke-dasharray="8,4"/><circle cx="70" cy="70" r="4" fill="#E53E3E"/><circle cx="130" cy="130" r="4" fill="#E53E3E"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  FASONG: {
    code: 'FASONG',
    name: '已发送未读',
    englishName: 'SentUnread',
    keywords: ["等待回复", "焦虑", "撤回", "已读不回受害者"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 100 L140 100 L110 80 M140 100 L110 120" fill="none" stroke="#4299E1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  YIG: {
    code: 'YIG',
    name: '已阅',
    englishName: 'ReadOnly',
    keywords: ["不回消息", "潜水", "围观", "默默吃瓜"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="80" cy="100" rx="25" ry="15" fill="#E2E8F0"/><circle cx="80" cy="100" r="6" fill="#2D3748"/><path d="M110 90 L130 100 L110 110" fill="#48BB78"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SHAN2: {
    code: 'SHAN2',
    name: '闪照',
    englishName: 'FlashPic',
    keywords: ["阅后即焚", "不敢留痕", "心虚", "秒删"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="55" y="55" width="90" height="90" fill="#A0AEC0"/><path d="M70 70 L90 110 L55 110 Z" fill="#E2E8F0"/><path d="M95 70 L125 120 L65 120 Z" fill="#E2E8F0" opacity="0.6"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  MIMA: {
    code: 'MIMA',
    name: '密码健忘',
    englishName: 'PassForget',
    keywords: ["重置密码", "同一个密码", "找回邮件", "备忘录"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="80" cy="100" r="25" fill="none" stroke="#A0AEC0" stroke-width="4"/><rect x="95" y="85" width="45" height="30" rx="4" fill="#D69E2E"/><rect x="105" y="95" width="6" height="10" fill="#744210"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  JU: {
    code: 'JU',
    name: '剧透狗',
    englishName: 'Spoiler',
    keywords: ["提前看原著", "憋不住", "被拉黑", "求剧透"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="50" y="60" width="100" height="60" fill="#A0AEC0"/><text x="100" y="95" text-anchor="middle" font-size="14" fill="#E53E3E">SPOILER</text><line x1="50" y1="60" x2="150" y2="120" stroke="#E53E3E" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  FAN: {
    code: 'FAN',
    name: '饭圈斗士',
    englishName: 'FandomWar',
    keywords: ["控评", "反黑", "打榜", "饭圈用语"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 100 Q100 60 130 100 L120 150 L80 150 Z" fill="#FBB6CE"/><path d="M85 110 L115 110" stroke="#E53E3E" stroke-width="3"/><path d="M60 70 L80 90 M140 70 L120 90" stroke="#E53E3E" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  YING2: {
    code: 'YING2',
    name: '影评家',
    englishName: 'Critic',
    keywords: ["豆瓣五星", "文艺片", "看不懂但要说", "导演懂个屁"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="50" width="80" height="100" rx="4" fill="#2D3748"/><polygon points="100,80 110,100 90,100" fill="#ECC94B"/><rect x="75" y="110" width="50" height="6" fill="#718096"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  ZHIBO: {
    code: 'ZHIBO',
    name: '直播打赏',
    englishName: 'StreamTip',
    keywords: ["榜一大哥", "女主播", "钱包空空", "谢谢老公"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="60" width="80" height="80" rx="10" fill="#F687B3"/><circle cx="100" cy="95" r="15" fill="#E2E8F0"/><rect x="75" y="120" width="50" height="8" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  TUAN: {
    code: 'TUAN',
    name: '团粉',
    englishName: 'GroupFan',
    keywords: ["端水", "团魂", "撕番位", "解散快乐"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="85" cy="100" r="25" fill="#4299E1"/><circle cx="115" cy="100" r="25" fill="#48BB78"/><circle cx="100" cy="75" r="25" fill="#E53E3E"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  HEI: {
    code: 'HEI',
    name: '黑粉',
    englishName: 'AntiFan',
    keywords: ["职业黑", "造谣", "P鬼图", "深柜爱"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 80 L130 80 L120 140 L80 140 Z" fill="#2D3748"/><path d="M85 100 L115 100" stroke="#E2E8F0" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  KENG2: {
    code: 'KENG2',
    name: '追剧坑王',
    englishName: 'DramaBinger',
    keywords: ["熬夜追剧", "烂尾愤怒", "倍速播放", "只看cut"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="70" width="80" height="60" fill="#2D3748"/><rect x="70" y="80" width="60" height="40" fill="#4299E1"/><path d="M75 85 L125 115 M125 85 L75 115" stroke="#E2E8F0" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  MAN: {
    code: 'MAN',
    name: '漫撕男/女',
    englishName: 'MangaTear',
    keywords: ["二次元审美", "精致", "纸片人", "不接地气"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="55" y="50" width="90" height="100" rx="3" fill="#E2E8F0"/><path d="M65 70 Q85 60 105 70" stroke="#2D3748" stroke-width="2" fill="none"/><path d="M65 90 Q85 80 105 90" stroke="#2D3748" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  ZONG: {
    code: 'ZONG',
    name: '综艺咖',
    englishName: 'VarietyStar',
    keywords: ["真人秀", "剧本", "笑点低", "下饭菜"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="55" y="60" width="90" height="80" rx="5" fill="#ED8936"/><rect x="70" y="80" width="60" height="40" fill="#2D3748"/><text x="100" y="105" text-anchor="middle" font-size="12" fill="#E2E8F0">综艺</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  DANCE: {
    code: 'DANCE',
    name: '舞担',
    englishName: 'DanceLead',
    keywords: ["K-pop", "cover", "练舞室", "关节痛"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M80 140 L90 100 L80 70 L110 90 L130 70 L120 100 L130 140" fill="none" stroke="#9F7AEA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  WEIX: {
    code: 'WEIX',
    name: '微博文学家',
    englishName: 'WeiboLit',
    keywords: ["小作文", "热搜体", "情绪放大", "转发抽奖"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="45" ry="30" fill="#E2E8F0"/><circle cx="85" cy="95" r="6" fill="#2D3748"/><circle cx="115" cy="95" r="6" fill="#2D3748"/><path d="M70 70 L85 85 M130 70 L115 85" stroke="#E53E3E" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  ZHONG: {
    code: 'ZHONG',
    name: '晋江文学城',
    englishName: 'Jinjiang',
    keywords: ["霸总", "甜宠", "狗血", "坑王"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="55" y="45" width="90" height="110" rx="3" fill="#FBB6CE"/><rect x="70" y="60" width="60" height="6" fill="#E2E8F0"/><rect x="70" y="75" width="40" height="6" fill="#E2E8F0"/><rect x="70" y="90" width="50" height="6" fill="#E2E8F0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  AO: {
    code: 'AO',
    name: '凹人设',
    englishName: 'CuratedSelf',
    keywords: ["朋友圈精修", "人设崩塌", "表演型人格", "包装"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 140 L100 60 L140 140" fill="none" stroke="#A0AEC0" stroke-width="6" stroke-linecap="round"/><circle cx="100" cy="100" r="10" fill="#718096"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  TONG: {
    code: 'TONG',
    name: '同人女',
    englishName: 'Fanfic',
    keywords: ["嗑CP", "产粮", "OOC", "圈地自萌"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 80 Q100 60 130 80 L120 140 L80 140 Z" fill="#FBB6CE"/><path d="M90 110 Q100 130 110 110" fill="#E53E3E"/><path d="M80 70 L90 80 M120 70 L110 80" stroke="#E53E3E" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  FAN2: {
    code: 'FAN2',
    name: '翻译腔',
    englishName: 'TranslatedTone',
    keywords: ["哦我的老伙计", "该死的", "上帝啊", "译制片"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><text x="80" y="100" font-size="24" fill="#718096">A</text><path d="M105 85 L135 85 L125 95 L135 105 L105 105" fill="none" stroke="#4299E1" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  BASHI: {
    code: 'BASHI',
    name: '八十岁写手',
    englishName: 'OldWriter',
    keywords: ["打字慢", "传统叙事", "长篇大论", "没人看"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M80 140 L90 100 L85 70 L110 90 L120 60 L115 100 L125 140" fill="none" stroke="#A0AEC0" stroke-width="4" stroke-linecap="round"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  DUAN: {
    code: 'DUAN',
    name: '段子手',
    englishName: 'Joker',
    keywords: ["谐音梗", "冷笑话", "抖机灵", "没人笑"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="80" cy="100" rx="30" ry="25" fill="#E2E8F0"/><ellipse cx="120" cy="100" rx="30" ry="25" fill="#E2E8F0"/><path d="M90 100 L110 100" stroke="#718096" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SHI: {
    code: 'SHI',
    name: '废话诗人',
    englishName: 'PoetNonsense',
    keywords: ["意识流", "回车键", "分行", "说了等于没说"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="50" y="50" width="100" height="100" fill="#E2E8F0"/><rect x="60" y="65" width="80" height="4" fill="#A0AEC0"/><rect x="60" y="80" width="60" height="4" fill="#A0AEC0"/><rect x="60" y="95" width="70" height="4" fill="#A0AEC0"/><rect x="60" y="110" width="40" height="4" fill="#A0AEC0"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  AI: {
    code: 'AI',
    name: '人机合一',
    englishName: 'AIHuman',
    keywords: ["ChatGPT依赖", "提示词工程师", "AI焦虑", "赛博格"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="85" r="30" fill="#A0AEC0"/><rect x="70" y="110" width="60" height="40" fill="#718096"/><circle cx="90" cy="80" r="5" fill="#48BB78"/><circle cx="110" cy="80" r="5" fill="#48BB78"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  YUAN2: {
    code: 'YUAN2',
    name: '元宇宙难民',
    englishName: 'MetaRefugee',
    keywords: ["虚拟土地", "VRChat", "数字藏品", "赛博 homeless"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M100 60 L150 90 L150 140 L100 170 L50 140 L50 90 Z" fill="#9F7AEA" opacity="0.8"/><path d="M100 60 L150 90 L100 120 L50 90 Z" fill="#B794F4"/><path d="M100 120 L150 90 L150 140 L100 170 Z" fill="#805AD5"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  NFT: {
    code: 'NFT',
    name: 'NFT冤种',
    englishName: 'NFTSucker',
    keywords: ["jpeg", "钱包", "Gas费", "归零"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><polygon points="100,55 145,82 145,135 100,162 55,135 55,82" fill="none" stroke="#9F7AEA" stroke-width="5"/><text x="100" y="115" text-anchor="middle" font-size="36" fill="#9F7AEA" font-family="monospace">$</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  VR: {
    code: 'VR',
    name: 'VR眩晕',
    englishName: 'VRSick',
    keywords: ["3D眩晕", "设备吃灰", "虚拟演唱会", "撞墙"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="50" y="80" width="45" height="35" rx="8" fill="#2D3748"/><rect x="105" y="80" width="45" height="35" rx="8" fill="#2D3748"/><line x1="95" y1="95" x2="105" y2="95" stroke="#A0AEC0" stroke-width="3"/><line x1="50" y1="95" x2="35" y2="85" stroke="#A0AEC0" stroke-width="3"/><line x1="150" y1="95" x2="165" y2="85" stroke="#A0AEC0" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  QUAN: {
    code: 'QUAN',
    name: '量子波动',
    englishName: 'Quantum',
    keywords: ["薛定谔", "叠加态", "测不准", "玄学物理"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="8" fill="#4299E1"/><ellipse cx="100" cy="100" rx="50" ry="15" fill="none" stroke="#A0AEC0" stroke-width="2"/><ellipse cx="100" cy="100" rx="50" ry="15" fill="none" stroke="#A0AEC0" stroke-width="2" transform="rotate(60 100 100)"/><ellipse cx="100" cy="100" rx="50" ry="15" fill="none" stroke="#A0AEC0" stroke-width="2" transform="rotate(120 100 100)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  NAO2: {
    code: 'NAO2',
    name: '脑机接口',
    englishName: 'BrainChip',
    keywords: ["记忆外包", "注意力涣散", "电击疗法", "黑客帝国"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 90 Q100 60 130 90 Q140 110 100 130 Q60 110 70 90" fill="#9F7AEA"/><rect x="90" y="95" width="20" height="20" fill="#ECC94B" rx="2"/><line x1="90" y1="85" x2="90" y2="70" stroke="#718096" stroke-width="2"/><line x1="110" y1="85" x2="110" y2="70" stroke="#718096" stroke-width="2"/><line x1="90" y1="125" x2="90" y2="140" stroke="#718096" stroke-width="2"/><line x1="110" y1="125" x2="110" y2="140" stroke="#718096" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  UFO: {
    code: 'UFO',
    name: 'UFO目击',
    englishName: 'UFOSpotter',
    keywords: ["阴谋论", "第三类接触", "罗斯威尔", "相信外星生命"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="55" ry="20" fill="#A0AEC0"/><ellipse cx="100" cy="92" rx="30" ry="10" fill="#718096"/><circle cx="85" cy="75" r="5" fill="#48BB78"/><circle cx="115" cy="75" r="5" fill="#E53E3E"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  ROBOT: {
    code: 'ROBOT',
    name: '机器人格',
    englishName: 'RobotType',
    keywords: ["情感缺失", "效率至上", "重复劳动", "图灵测试"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="60" width="80" height="80" rx="15" fill="#A0AEC0"/><circle cx="85" cy="90" r="10" fill="#48BB78"/><circle cx="115" cy="90" r="10" fill="#48BB78"/><rect x="85" y="115" width="30" height="6" fill="#718096"/><line x1="100" y1="60" x2="100" y2="40" stroke="#718096" stroke-width="3"/><circle cx="100" cy="35" r="5" fill="#E53E3E"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SHUANG2: {
    code: 'SHUANG2',
    name: '爽文脑',
    englishName: 'RevengeFantasy',
    keywords: ["打脸", "逆袭", "系统流", "代入感强"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(81, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  KONG2: {
    code: 'KONG2',
    name: '恐婚',
    englishName: 'MarryPhobia',
    keywords: ["婚纱恐惧", "份子钱", "离婚率", "一个人挺好"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(305, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  KONG3: {
    code: 'KONG3',
    name: '恐育',
    englishName: 'ParentPhobia',
    keywords: ["奶粉钱", "学区房", "熊孩子", "丁克"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="hsl(336, 50%, 55%)"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  JIAOLV: {
    code: 'JIAOLV',
    name: '焦虑贩卖',
    englishName: 'AnxietyDealer',
    keywords: ["贩卖焦虑", "内卷", "同龄人", "35岁危机"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 120 Q80 80 100 120 Q120 80 140 120" fill="none" stroke="#E53E3E" stroke-width="4"/><circle cx="80" cy="70" r="4" fill="#E53E3E"/><circle cx="120" cy="70" r="4" fill="#E53E3E"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  YIY: {
    code: 'YIY',
    name: '抑郁 breeze',
    englishName: 'DepressBreeze',
    keywords: ["网抑云", "季节性抑郁", "开心不起来", "假装正常"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 90 Q100 70 130 90 L120 140 L80 140 Z" fill="#4299E1"/><line x1="85" y1="110" x2="80" y2="130" stroke="#E2E8F0" stroke-width="2"/><line x1="115" y1="110" x2="120" y2="130" stroke="#E2E8F0" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  SHUANG3: {
    code: 'SHUANG3',
    name: '双向情感',
    englishName: 'Bipolar',
    keywords: ["忽高忽低", "情绪过山车", "今天爱我明天恨我"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M60 100 Q80 60 100 100 Q120 60 140 100" fill="none" stroke="#4299E1" stroke-width="4"/><path d="M60 110 Q80 150 100 110 Q120 150 140 110" fill="none" stroke="#E53E3E" stroke-width="4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  QIAN: {
    code: 'QIAN',
    name: '讨好型',
    englishName: 'PeoplePleaser',
    keywords: ["不敢拒绝", "察言观色", "委屈自己", "怕被讨厌"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 110 Q100 80 130 110 L120 150 L80 150 Z" fill="#FBB6CE"/><path d="M90 130 Q100 120 110 130" stroke="#E53E3E" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  BIAN: {
    code: 'BIAN',
    name: '边缘型',
    englishName: 'EdgeType',
    keywords: ["非黑即白", "被抛弃恐惧", "极端", "情绪化"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 70 L130 130 M130 70 L70 130" stroke="#2D3748" stroke-width="4"/><circle cx="100" cy="100" r="20" fill="none" stroke="#A0AEC0" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  XING: {
    code: 'XING',
    name: '兴奋剂',
    englishName: 'Stimulant',
    keywords: ["多巴胺上瘾", "短视频", "咖啡因", "寻求刺激"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><polygon points="100,50 115,90 155,90 125,115 135,155 100,130 65,155 75,115 45,90 85,90" fill="#ECC94B"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  MAI: {
    code: 'MAI',
    name: '麻木不仁',
    englishName: 'Numb',
    keywords: ["情绪钝化", "无所谓", "钝感力", "活着就行"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="65" y="70" width="70" height="60" rx="10" fill="#A0AEC0"/><line x1="80" y1="110" x2="120" y2="110" stroke="#2D3748" stroke-width="3"/><circle cx="85" cy="95" r="4" fill="#2D3748"/><circle cx="115" cy="95" r="4" fill="#2D3748"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  MO: {
    code: 'MO',
    name: '魔怔人',
    englishName: 'Obsessed',
    keywords: ["入脑", "意识形态", "对线", "现实生活不如意"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#2D3748"/><path d="M85 90 Q100 80 115 90" stroke="#E53E3E" stroke-width="3" fill="none"/><path d="M80 110 Q100 100 120 110" stroke="#E53E3E" stroke-width="3" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  CHU: {
    code: 'CHU',
    name: '纯路人',
    englishName: 'PurePasserby',
    keywords: ["理中客", "不明觉厉", "吃瓜", "但其实有立场"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="35" ry="40" fill="#A0AEC0" opacity="0.5"/><rect x="80" y="85" width="40" height="30" fill="#718096" opacity="0.4"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  LEI2: {
    code: 'LEI2',
    name: '乐子人',
    englishName: 'LeZi',
    keywords: ["看热闹不嫌事大", "拱火", "没有立场", "只想笑"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="95" r="35" fill="#ECC94B"/><path d="M90 85 Q100 75 110 85" stroke="#2D3748" stroke-width="2" fill="none"/><path d="M85 105 Q100 95 115 105" stroke="#2D3748" stroke-width="2" fill="none"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  DAODE: {
    code: 'DAODE',
    name: '道德卫士',
    englishName: 'MoralGuard',
    keywords: ["站在制高点", "双标", "举报", "净化网络"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="40" fill="#E2E8F0"/><text x="100" y="110" text-anchor="middle" font-size="24" fill="#A0AEC0">德</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  JING2: {
    code: 'JING2',
    name: '精分',
    englishName: 'Schizo',
    keywords: ["多重账号", "自言自语", "人格切换", "自己骂自己"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M100 60 L100 140 M60 100 L140 100" stroke="#A0AEC0" stroke-width="4"/><circle cx="75" cy="75" r="20" fill="#E2E8F0" opacity="0.5"/><circle cx="125" cy="125" r="20" fill="#E2E8F0" opacity="0.5"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  HEI2: {
    code: 'HEI2',
    name: '黑化小学生',
    englishName: 'EdgyKid',
    keywords: ["已黑化", "葬爱家族", "火星文", "网络空间"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><path d="M70 80 L130 80 L120 140 L80 140 Z" fill="#2D3748"/><path d="M85 100 L115 120 M115 100 L85 120" stroke="#E53E3E" stroke-width="3"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  TUO: {
    code: 'TUO',
    name: '脱发焦虑',
    englishName: 'HairLoss',
    keywords: ["发际线", "植发", "生姜", "霸王洗发水"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><ellipse cx="100" cy="100" rx="40" ry="40" fill="#D69E2E"/><path d="M75 70 L85 80 M95 65 L100 75 M115 70 L110 80" stroke="#2D3748" stroke-width="2"/></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  XU: {
    code: 'XU',
    name: '虚无主义',
    englishName: 'Nihilism',
    keywords: ["没有意义", "存在主义", "加缪", "西西弗斯"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><circle cx="100" cy="100" r="35" fill="none" stroke="#2D3748" stroke-width="4"/><text x="100" y="110" text-anchor="middle" font-size="28" fill="#718096">?</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
  PIN: {
    code: 'PIN',
    name: '拼单名媛',
    englishName: 'PinDuo',
    keywords: ["共享奢侈品", "下午茶", "拍照", "精致穷"],
    svgDescription: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <g>
        <g><rect x="60" y="60" width="80" height="80" fill="#F687B3"/><path d="M80 80 L120 80 L120 120 L80 120 Z" fill="none" stroke="#E2E8F0" stroke-width="3" stroke-dasharray="6,3"/><text x="100" y="105" text-anchor="middle" font-size="12" fill="#E2E8F0">50%OFF</text></g>
        
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
      </g>
    </svg>`
  },
};