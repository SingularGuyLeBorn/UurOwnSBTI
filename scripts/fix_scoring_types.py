import re
from pathlib import Path

# Extract all codes from types.ts
types_content = Path('src/data/types.ts').read_text(encoding='utf-8')
codes = re.findall(r'code:\s*\'([A-Z0-9]+)\'', types_content)

# Format into lines of 10
lines = []
for i in range(0, len(codes), 10):
    chunk = codes[i:i+10]
    line = "  '" + "', '".join(chunk) + "'"
    if i + 10 < len(codes):
        line += ","
    lines.append(line)

new_block = "const ALL_TYPE_CODES: SBTITypeCode[] = [\n" + "\n".join(lines) + "\n];"

scoring_path = Path('src/logic/scoring.ts')
scoring_content = scoring_path.read_text(encoding='utf-8')

# Replace the old ALL_TYPE_CODES block
pattern = r'const ALL_TYPE_CODES: SBTITypeCode\[\] = \[[^\]]+\];'
scoring_content = re.sub(pattern, new_block, scoring_content, count=1)

scoring_path.write_text(scoring_content, encoding='utf-8')
print(f'Fixed ALL_TYPE_CODES: now {len(codes)} types')
