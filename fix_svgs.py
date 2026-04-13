import re

# 深色 -> 浅色主题适配色映射
color_map = {
    '#000': '#4A5568',
    '#000000': '#4A5568',
    'black': '#4A5568',
    '#111': '#718096',
    '#1a1a1a': '#718096',
    '#1a0a1a': '#718096',
    '#1a0a2e': '#718096',
    '#1a1a2e': '#718096',
    '#222': '#A0AEC0',
    '#21262d': '#A0AEC0',
    '#2d1f1f': '#A0AEC0',
    '#2c3e50': '#718096',
    '#333': '#A0AEC0',
    '#444': '#CBD5E0',
    '#4a4a6a': '#A0AEC0',
    '#636e72': '#A0AEC0',
    '#555': '#CBD5E0',
    '#666': '#CBD5E0',
    '#777': '#CBD5E0',
}

with open('src/data/types.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 颜色替换
for old, new in color_map.items():
    content = content.replace(f'fill="{old}"', f'fill="{new}"')
    content = content.replace(f'stroke="{old}"', f'stroke="{new}"')
    content = content.replace(f'stop-color="{old}"', f'stop-color="{new}"')

# 2. 增加动画：给每个 svgDescription 里的第一个主图形添加呼吸动画（如果它本身没有动画）
svg_pattern = re.compile(r'svgDescription: `(.*?)`', re.DOTALL)

def add_breath_anim(svg_str):
    # 找到第一个主图形元素（path/rect/ellipse/circle）且它有 fill
    m = re.search(r'<(path|rect|ellipse|circle)([^>]*fill=[^>]*)>', svg_str)
    if not m:
        m = re.search(r'<(text)([^>]*fill=[^>]*)>', svg_str)
    if not m:
        return svg_str
    tag_start = m.group(0)
    tag_name = m.group(1)
    
    # 检查这个元素后面是否已经紧跟 animate 子元素
    idx = svg_str.find(tag_start)
    snippet_after = svg_str[idx + len(tag_start): idx + len(tag_start) + 60]
    if '<animate' in snippet_after:
        return svg_str
    
    anim = '<animate attributeName="opacity" values="1;0.75;1" dur="2.5s" repeatCount="indefinite"/>'
    if tag_start.endswith('/>'):
        new_tag = tag_start[:-2] + '>'
        close_tag = f'</{tag_name}>'
        svg_str = svg_str.replace(tag_start, new_tag + anim + close_tag, 1)
    else:
        svg_str = svg_str.replace(tag_start, tag_start + anim, 1)
    return svg_str

def replacer(match):
    svg = match.group(1)
    new_svg = add_breath_anim(svg)
    return 'svgDescription: `' + new_svg + '`'

content = svg_pattern.sub(replacer, content)

with open('src/data/types.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('SVG colors and animations updated.')
