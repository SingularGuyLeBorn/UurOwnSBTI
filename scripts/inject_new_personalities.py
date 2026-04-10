from pathlib import Path

# Inject into types.ts
types_path = Path('src/data/types.ts')
types_content = types_path.read_text(encoding='utf-8')
# Find the last "  }\n};" pattern and insert before it
insert_marker = "  }\n};"
if insert_marker not in types_content:
    # try variations
    insert_marker = "}\n};"
idx = types_content.rfind(insert_marker)
if idx == -1:
    raise ValueError('Could not find injection point in types.ts')
new_types = Path('new_types_append.ts.txt').read_text(encoding='utf-8')
# Replace the last occurrence: change the closing } to }, then append new entries
# The last entry currently ends with "  }"
types_content = types_content[:idx] + "  },\n" + new_types + "\n};"
types_path.write_text(types_content, encoding='utf-8')

# Inject into slots.ts
slots_path = Path('src/data/slots.ts')
slots_content = slots_path.read_text(encoding='utf-8')
idx2 = slots_content.rfind(insert_marker)
if idx2 == -1:
    raise ValueError('Could not find injection point in slots.ts')
new_slots = Path('new_slots_append.ts.txt').read_text(encoding='utf-8')
slots_content = slots_content[:idx2] + "  },\n" + new_slots + "\n};"
slots_path.write_text(slots_content, encoding='utf-8')

print('Injected successfully')
