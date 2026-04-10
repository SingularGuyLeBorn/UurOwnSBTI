import re, sys
path = sys.argv[1]
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()
bad = []
for m in re.finditer(r'text:\s*"', c):
    start = m.end()
    j = start
    while j < len(c):
        if c[j] == '\\' and j+1 < len(c):
            j += 2
            continue
        if c[j] == '"':
            break
        j += 1
    inner = c[start:j]
    if '"' in inner:
        bad.append(inner[:80])
print('Bad quotes:', len(bad))
for b in bad[:10]:
    print('  ', b)
