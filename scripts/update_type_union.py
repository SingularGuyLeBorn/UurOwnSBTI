import json
from pathlib import Path

with open('new_codes.json', encoding='utf-8') as f:
    codes = json.load(f)

types_file = Path('src/types/index.ts')
content = types_file.read_text(encoding='utf-8')

# Build new union lines, 10 codes per line for readability
lines = ["  // 新增139种人格"]
for i in range(0, len(codes), 10):
    chunk = codes[i:i+10]
    line = "  | " + " | ".join(f"'{c}'" for c in chunk)
    if i + 10 >= len(codes):
        line = line.rstrip() + ";"
    lines.append(line)

insertion = "\n".join(lines)
# Replace the last ';' before KENG
old_end = "  | 'XIAN' | 'WOYU' | 'DADE' | 'FANS' | 'HEIH' | 'BAIH' | 'CHAH' | 'KENG';"
new_end = old_end.replace(';', '') + "\n" + insertion

content = content.replace(old_end, new_end)
# Also update comment
content = content.replace('// 127种人格类型代码', '// 266种人格类型代码')
content = content.replace('// 新增78种人格', '// 新增78种人格（第一批）')

types_file.write_text(content, encoding='utf-8')
print('Updated SBTITypeCode union')
