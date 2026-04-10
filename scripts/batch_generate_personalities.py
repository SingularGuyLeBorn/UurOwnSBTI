import re
import json
from pathlib import Path

THEME_STYLES = {
    'A': (0, '#e67e22', '#d35400'),
    'B': (1, None, None),
    'C': (2, '#e74c3c', '#c0392b'),
    'D': (3, '#f1c40f', '#f39c12'),
    'E': (4, '#3498db', '#2980b9'),
    'F': (5, '#9b59b6', '#8e44ad'),
    'G': (6, '#95a5a6', '#7f8c8d'),
    'H': (7, '#1abc9c', '#16a085'),
    'I': (8, '#27ae60', '#2ecc71'),
    'J': (9, '#34495e', '#2c3e50'),
    'K': (10, '#e91e63', '#c2185b'),
    'L': (11, '#ff9800', '#f57c00'),
    'M': (12, '#00bcd4', '#0097a7'),
    'N': (13, '#673ab7', '#512da8'),
    'O': (14, '#795548', '#5d4037'),
}

def svg_template_0(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <circle cx="100" cy="100" r="80" fill="url(#g)" opacity="0.2"/>
      <circle cx="100" cy="100" r="60" fill="none" stroke="{c1}" stroke-width="4" stroke-dasharray="8,4"/>
      <text x="100" y="110" text-anchor="middle" font-size="28" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_1(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <polygon points="100,30 160,65 160,135 100,170 40,135 40,65" fill="url(#g)" opacity="0.25"/>
      <polygon points="100,45 145,70 145,130 100,155 55,130 55,70" fill="none" stroke="{c1}" stroke-width="3"/>
      <text x="100" y="110" text-anchor="middle" font-size="24" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_2(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <rect x="40" y="60" width="120" height="80" rx="16" fill="url(#g)" opacity="0.25"/>
      <rect x="55" y="75" width="90" height="50" rx="10" fill="none" stroke="{c1}" stroke-width="3"/>
      <line x1="40" y1="90" x2="160" y2="90" stroke="{c1}" stroke-width="2" opacity="0.3"/>
      <text x="100" y="112" text-anchor="middle" font-size="22" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_3(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <line x1="100" y1="20" x2="100" y2="180" stroke="{c1}" stroke-width="2" opacity="0.4"/>
      <line x1="20" y1="100" x2="180" y2="100" stroke="{c1}" stroke-width="2" opacity="0.4"/>
      <circle cx="100" cy="100" r="45" fill="url(#g)" opacity="0.2"/>
      <circle cx="100" cy="100" r="30" fill="none" stroke="{c1}" stroke-width="3"/>
      <text x="100" y="108" text-anchor="middle" font-size="20" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_4(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <path d="M0,120 Q50,80 100,100 T200,80" fill="none" stroke="{c1}" stroke-width="3" opacity="0.3"/>
      <path d="M0,140 Q60,100 100,120 T200,100" fill="none" stroke="{c1}" stroke-width="3" opacity="0.2"/>
      <ellipse cx="100" cy="100" rx="60" ry="40" fill="url(#g)" opacity="0.2"/>
      <text x="100" y="108" text-anchor="middle" font-size="22" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_5(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <polygon points="100,25 120,80 175,85 130,120 145,175 100,140 55,175 70,120 25,85 80,80" fill="url(#g)" opacity="0.25"/>
      <text x="100" y="108" text-anchor="middle" font-size="20" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_6(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <rect x="30" y="30" width="140" height="140" fill="none" stroke="{c1}" stroke-width="1" opacity="0.2"/>
      <line x1="30" y1="60" x2="170" y2="60" stroke="{c1}" opacity="0.15"/>
      <line x1="30" y1="100" x2="170" y2="100" stroke="{c1}" opacity="0.15"/>
      <line x1="30" y1="140" x2="170" y2="140" stroke="{c1}" opacity="0.15"/>
      <rect x="60" y="60" width="80" height="80" fill="url(#g)" opacity="0.2" rx="8"/>
      <text x="100" y="108" text-anchor="middle" font-size="20" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_7(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <polygon points="100,30 170,160 30,160" fill="url(#g)" opacity="0.2"/>
      <circle cx="100" cy="110" r="35" fill="none" stroke="{c1}" stroke-width="3"/>
      <text x="100" y="118" text-anchor="middle" font-size="18" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_8(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <circle cx="100" cy="100" r="70" fill="none" stroke="{c1}" stroke-width="12" opacity="0.2"/>
      <circle cx="100" cy="100" r="45" fill="url(#g)" opacity="0.25"/>
      <circle cx="70" cy="70" r="4" fill="{c1}" opacity="0.5"/>
      <circle cx="130" cy="70" r="4" fill="{c1}" opacity="0.5"/>
      <circle cx="70" cy="130" r="4" fill="{c1}" opacity="0.5"/>
      <circle cx="130" cy="130" r="4" fill="{c1}" opacity="0.5"/>
      <text x="100" y="108" text-anchor="middle" font-size="20" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_9(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <path d="M100 30 L130 70 L130 130 L100 170 L70 130 L70 70 Z" fill="url(#g)" opacity="0.25"/>
      <path d="M100 50 L115 75 L115 125 L100 150 L85 125 L85 75 Z" fill="none" stroke="{c1}" stroke-width="3"/>
      <text x="100" y="108" text-anchor="middle" font-size="18" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_10(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <path d="M100 20 Q140 40 150 80 Q160 120 100 180 Q40 120 50 80 Q60 40 100 20" fill="url(#g)" opacity="0.25"/>
      <path d="M100 40 Q130 55 135 85 Q140 115 100 160 Q60 115 65 85 Q70 55 100 40" fill="none" stroke="{c1}" stroke-width="3"/>
      <text x="100" y="105" text-anchor="middle" font-size="18" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_11(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <path d="M100 30 Q130 50 130 90 Q130 140 100 170 Q70 140 70 90 Q70 50 100 30" fill="url(#g)" opacity="0.25"/>
      <ellipse cx="100" cy="90" rx="30" ry="15" fill="none" stroke="{c1}" stroke-width="2" opacity="0.5"/>
      <ellipse cx="100" cy="110" rx="20" ry="10" fill="none" stroke="{c1}" stroke-width="2" opacity="0.3"/>
      <text x="100" y="100" text-anchor="middle" font-size="18" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_12(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <polygon points="100,40 140,80 140,120 100,160 60,120 60,80" fill="url(#g)" opacity="0.25" transform="rotate(45 100 100)"/>
      <line x1="60" y1="60" x2="140" y2="140" stroke="{c1}" stroke-width="2" opacity="0.3"/>
      <line x1="140" y1="60" x2="60" y2="140" stroke="{c1}" stroke-width="2" opacity="0.3"/>
      <text x="100" y="108" text-anchor="middle" font-size="20" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_13(code, name, c1, c2):
    bar = min(90, max(20, len(code)*8))
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <rect x="50" y="70" width="100" height="60" rx="6" fill="none" stroke="{c1}" stroke-width="3"/>
      <rect x="55" y="75" width="{bar}" height="50" rx="4" fill="url(#g)" opacity="0.3"/>
      <text x="100" y="108" text-anchor="middle" font-size="20" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

def svg_template_14(code, name, c1, c2):
    return f"""`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="{c1}"/><stop offset="100%" stop-color="{c2}"/></linearGradient></defs>
      <ellipse cx="100" cy="90" rx="55" ry="35" fill="url(#g)" opacity="0.25"/>
      <ellipse cx="80" cy="110" rx="25" ry="15" fill="url(#g)" opacity="0.2"/>
      <ellipse cx="120" cy="105" rx="20" ry="12" fill="url(#g)" opacity="0.2"/>
      <text x="100" y="98" text-anchor="middle" font-size="18" fill="{c1}" font-weight="bold">{code}</text>
    </svg>`"""

TEMPLATES = [
    svg_template_0, svg_template_1, svg_template_2, svg_template_3,
    svg_template_4, svg_template_5, svg_template_6, svg_template_7,
    svg_template_8, svg_template_9, svg_template_10, svg_template_11,
    svg_template_12, svg_template_13, svg_template_14,
]

roadmap = Path('PERSONALITY_ROADMAP.md').read_text(encoding='utf-8')
sections = re.split(r'### ([A-Z])\. ', roadmap)[1:]

types_lines = []
slots_lines = []
new_codes = []

for i in range(0, len(sections), 2):
    theme = sections[i]
    content = sections[i+1]
    rows = re.findall(r'\|\s*([A-Z0-9]+)\s*\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|', content)
    tmpl_idx, base_c1, base_c2 = THEME_STYLES[theme]
    for code, name, eng, keywords_raw in rows:
        code = code.strip()
        name = name.strip()
        eng = eng.strip()
        keywords = [k.strip() for k in keywords_raw.strip().split('、')]
        new_codes.append(code)
        if theme == 'B':
            color_map = {
                'BAISE': ('#ecf0f1','#bdc3c7'),
                'HEISE': ('#2c3e50','#000000'),
                'FENH': ('#ff9ff3','#f368e0'),
                'LV': ('#2ecc71','#27ae60'),
                'LAN': ('#54a0ff','#2e86de'),
                'ZI': ('#9b59b6','#8e44ad'),
                'HUANG': ('#f1c40f','#f39c12'),
                'HONG': ('#e74c3c','#c0392b'),
                'HUI': ('#95a5a6','#7f8c8d'),
                'QING': ('#1abc9c','#16a085'),
            }
            c1, c2 = color_map.get(code, (base_c1, base_c2))
        else:
            c1, c2 = base_c1, base_c2
        svg = TEMPLATES[tmpl_idx](code, name, c1, c2)
        types_lines.append(f"""  {code}: {{
    code: '{code}',
    name: '{name}',
    englishName: '{eng}',
    keywords: {json.dumps(keywords, ensure_ascii=False)},
    svgDescription: {svg}
  }},""")
        k1, k2, k3 = keywords[0], keywords[1] if len(keywords)>1 else keywords[0], keywords[2] if len(keywords)>2 else keywords[0]
        slots_lines.append(f"""  {code}: {{
    opening: ['{k1}成精了', '{k2}本体降临', '{k3}大师', '{name}中的战斗机', '{k1}界诺贝尔奖得主'],
    scenario: ['您的{k1}已经达到艺术品的级别', '您的{k2}是教科书级的', '您的{k3}让周围人沉默'],
    warning: ['把{k1}当成生活方式', '把{k2}当成保护色', '您的{k3}已经达到需要申遗的程度'],
    career: ['去当{k1}培训师（但肯定通不过面试）', '去当{k2}研究员（但论文永远交不上）']
  }},""")

Path('new_types_append.ts.txt').write_text('\n'.join(types_lines), encoding='utf-8')
Path('new_slots_append.ts.txt').write_text('\n'.join(slots_lines), encoding='utf-8')
Path('new_codes.json').write_text(json.dumps(new_codes, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Generated {len(new_codes)} personalities')
