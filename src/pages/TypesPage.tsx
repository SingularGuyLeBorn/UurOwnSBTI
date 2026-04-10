import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowLeft, Sparkles, X } from 'lucide-react';
import { TYPE_LIBRARY } from '@/data/types';
import { generateRoast } from '@/logic/copywriter';
import type { SBTITypeCode, TypeProfile } from '@/types';

function TypeModal({ code, type, onClose }: { code: SBTITypeCode; type: TypeProfile; onClose: () => void }) {
  const roast = useMemo(() => {
    return generateRoast(code, 0.85, false, 88);
  }, [code]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <div className="absolute inset-0 bg-[#E0E5EC]/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto neu-flat p-6 sm:p-8 rounded-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full neu-flat neu-flat-hover neu-flat-active"
        >
          <X className="w-4 h-4 text-[var(--neu-text)]" />
        </button>

        <div className="flex items-start justify-between mb-4 pr-8">
          <div>
            <div className="inline-block px-2 py-1 rounded-md neu-pressed text-xs font-bold text-[var(--neu-text)] mb-2">
              {code}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--neu-text)]">{type.name}</h2>
            <p className="text-sm text-[var(--neu-text-soft)]">{type.englishName}</p>
          </div>
        </div>

        <div
          className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full neu-concave flex items-center justify-center overflow-hidden"
          dangerouslySetInnerHTML={{
            __html: type.svgDescription.replace(/<svg/, '<svg class="w-28 h-28 sm:w-36 sm:h-36"')
          }}
        />

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {type.keywords.map((kw, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-full text-xs font-medium neu-pressed text-[var(--neu-text)]"
            >
              {kw}
            </span>
          ))}
        </div>

        <div className="neu-pressed p-5 rounded-xl">
          <p className="text-sm sm:text-base text-[var(--neu-text)] leading-relaxed whitespace-pre-line">
            {roast}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TypesPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<SBTITypeCode | null>(null);

  const entries = useMemo(() => {
    const list = Object.entries(TYPE_LIBRARY) as [SBTITypeCode, TypeProfile][];
    if (!query.trim()) return list;
    const q = query.trim().toLowerCase();
    return list.filter(([code, type]) => {
      return (
        code.toLowerCase().includes(q) ||
        type.name.toLowerCase().includes(q) ||
        type.englishName.toLowerCase().includes(q) ||
        type.keywords.some((k: string) => k.toLowerCase().includes(q))
      );
    });
  }, [query]);

  return (
    <div className="min-h-screen px-4 pb-16">
      {selected && (
        <TypeModal
          code={selected}
          type={TYPE_LIBRARY[selected]}
          onClose={() => setSelected(null)}
        />
      )}

      <div className="max-w-6xl mx-auto pt-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl neu-flat neu-flat-hover neu-flat-active text-sm font-medium text-[var(--neu-text)] mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          返回首页
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-pressed text-xs text-[var(--neu-text-soft)] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>全图鉴 · 无隐藏 · 点击卡片看详情</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--neu-text)] mb-3">
            人格大观园
          </h1>
          <p className="text-[var(--neu-text-soft)] text-base sm:text-lg max-w-2xl mx-auto">
            收录全部 <span className="font-bold text-[var(--neu-text)]">127</span> 种混沌人格，从攻击性暴徒到赛博幽灵一网打尽
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-10">
          <div className="neu-flat p-1.5 flex items-center gap-2 rounded-xl">
            <div className="pl-3 text-[var(--neu-text-soft)]">
              <Search className="w-5 h-5" />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索人格名称、代码或关键词..."
              className="flex-1 bg-transparent outline-none text-sm sm:text-base text-[var(--neu-text)] placeholder:text-[var(--neu-text-soft)]/60 py-3 pr-3"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="mr-2 text-xs text-[var(--neu-text-soft)] hover:text-[var(--neu-text)]"
              >
                清除
              </button>
            )}
          </div>
          <p className="text-center text-xs text-[var(--neu-text-soft)] mt-3">
            已展示 {entries.length} / 127 种人格
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {entries.map(([code, type]) => (
            <button
              key={code}
              onClick={() => setSelected(code)}
              className="text-left neu-flat p-5 relative overflow-hidden group neu-flat-hover neu-flat-active transition-transform"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="px-2 py-1 rounded-md neu-pressed text-xs font-bold text-[var(--neu-text)]">
                  {code}
                </div>
                <span className="text-[10px] text-[var(--neu-text-soft)] opacity-0 group-hover:opacity-100 transition-opacity">
                  点击查看
                </span>
              </div>

              <div
                className="w-20 h-20 mx-auto mb-4 rounded-full neu-concave flex items-center justify-center overflow-hidden"
                dangerouslySetInnerHTML={{
                  __html: type.svgDescription.replace(/<svg/, '<svg class="w-16 h-16"')
                }}
              />

              <h3 className="text-lg font-bold text-[var(--neu-text)] text-center mb-0.5">
                {type.name}
              </h3>
              <p className="text-xs text-[var(--neu-text-soft)] text-center mb-3">
                {type.englishName}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {type.keywords.slice(0, 3).map((kw, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-full text-[10px] font-medium neu-pressed text-[var(--neu-text-soft)]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {entries.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--neu-text-soft)]">未找到匹配的人格，换个关键词试试？</p>
          </div>
        )}
      </div>
    </div>
  );
}
