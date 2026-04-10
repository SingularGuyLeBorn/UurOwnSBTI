import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, Type, Palette, AlignLeft, Image as ImageIcon } from 'lucide-react';
import type { TestResult } from '@/types';
import { TYPE_LIBRARY } from '@/data/types';
import { generateShareCardText } from '@/logic/copywriter';

interface ShareCardProps {
  result: TestResult;
  onClose: () => void;
}

const BG_GRADIENTS = [
  { name: '暗夜紫', value: 'linear-gradient(135deg, #1a0a2e 0%, #4a1a6e 50%, #1a0a2e 100%)' },
  { name: '赛博蓝', value: 'linear-gradient(135deg, #0a1628 0%, #1a3a6e 50%, #0a1628 100%)' },
  { name: '霓虹粉', value: 'linear-gradient(135deg, #2a0a1e 0%, #6e1a4e 50%, #2a0a1e 100%)' },
  { name: '火焰橙', value: 'linear-gradient(135deg, #2a1a0a 0%, #6e3a1a 50%, #2a1a0a 100%)' },
  { name: '极光绿', value: 'linear-gradient(135deg, #0a2a1a 0%, #1a6e3a 50%, #0a2a1a 100%)' },
  { name: '深渊黑', value: 'linear-gradient(135deg, #0a0a0a 0%, #2a2a2a 50%, #0a0a0a 100%)' },
  { name: '纯白', value: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 50%, #f5f5f5 100%)' },
  { name: '落日黄', value: 'linear-gradient(135deg, #2a2a0a 0%, #6e6e1a 50%, #2a2a0a 100%)' },
];

const PATTERNS = [
  { name: '无', value: 'none' },
  { name: '网格', value: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255,255,255,0.1) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(255,255,255,0.1) 20px)' },
  { name: '点阵', value: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)' },
  { name: '斜线', value: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)' },
];

export default function ShareCard({ result, onClose }: ShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardText, setCardText] = useState(generateShareCardText(result));
  const [bgGradient, setBgGradient] = useState(BG_GRADIENTS[0].value);
  const [pattern, setPattern] = useState(PATTERNS[0].value);
  const [textColor, setTextColor] = useState('#ffffff');
  const [accentColor, setAccentColor] = useState('#ff0066');
  const [fontSize, setFontSize] = useState(18);
  const [titleSize, setTitleSize] = useState(32);
  const [isGenerating, setIsGenerating] = useState(false);

  const typeInfo = TYPE_LIBRARY[result.primaryType];

  // 生成卡片图片
  const generateImage = async () => {
    if (!cardRef.current) return;
    
    setIsGenerating(true);
    
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 设置画布尺寸
      canvas.width = 600;
      canvas.height = 800;

      // 绘制背景渐变
      const gradient = ctx.createLinearGradient(0, 0, 600, 800);
      if (bgGradient.includes('135deg')) {
        const colors = bgGradient.match(/#[a-fA-F0-9]{6}/g) || ['#1a0a2e', '#4a1a6e'];
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(0.5, colors[1] || colors[0]);
        gradient.addColorStop(1, colors[2] || colors[0]);
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 600, 800);

      // 绘制装饰边框
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 3;
      ctx.strokeRect(20, 20, 560, 760);

      // 绘制内边框
      ctx.strokeStyle = accentColor + '40';
      ctx.lineWidth = 1;
      ctx.strokeRect(30, 30, 540, 740);

      // 绘制标题
      ctx.fillStyle = accentColor;
      ctx.font = `bold ${titleSize}px sans-serif`;
      ctx.textAlign = 'center';
      const titleLines = cardText.split('\n');
      let y = 120;
      titleLines.forEach((line, i) => {
        if (i === 0) {
          ctx.fillStyle = accentColor;
          ctx.font = `bold ${titleSize}px sans-serif`;
        } else {
          ctx.fillStyle = textColor;
          ctx.font = `${fontSize}px sans-serif`;
        }
        ctx.fillText(line, 300, y);
        y += i === 0 ? titleSize + 10 : fontSize + 8;
      });

      // 绘制关键词
      ctx.fillStyle = textColor + '80';
      ctx.font = `${fontSize - 2}px sans-serif`;
      ctx.fillText(typeInfo.keywords.slice(0, 4).join(' · '), 300, y + 20);

      // 绘制底部信息
      ctx.fillStyle = textColor + '60';
      ctx.font = '14px sans-serif';
      ctx.fillText('SBTI-Engine 3.0 · 科学已死，混沌当立', 300, 750);

      // 下载图片
      const link = document.createElement('a');
      link.download = `SBTI-${result.primaryType}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('生成图片失败:', err);
      alert('生成图片失败，请重试');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        {/* 头部 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800">生成分享卡片</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* 左侧：预览 */}
          <div className="flex-1 p-6 flex items-center justify-center bg-gray-100">
            <div
              ref={cardRef}
              className="relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-2xl"
              style={{
                background: bgGradient,
              }}
            >
              {/* 图案层 */}
              {pattern !== 'none' && (
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: pattern,
                    backgroundSize: pattern.includes('radial') ? '20px 20px' : 'auto'
                  }}
                />
              )}
              
              {/* 内容层 */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                {/* 装饰边框 */}
                <div 
                  className="absolute inset-4 border-2 rounded-lg"
                  style={{ borderColor: accentColor }}
                />
                <div 
                  className="absolute inset-5 border opacity-30"
                  style={{ borderColor: accentColor }}
                />

                {/* 文字内容 */}
                <div className="relative z-10">
                  {cardText.split('\n').map((line, i) => (
                    <div
                      key={i}
                      className="mb-2"
                      style={{
                        fontSize: i === 0 ? titleSize : fontSize,
                        color: i === 0 ? accentColor : textColor,
                        fontWeight: i === 0 ? 'bold' : 'normal',
                        lineHeight: 1.4,
                      }}
                    >
                      {line}
                    </div>
                  ))}
                  
                  {/* 关键词 */}
                  <div 
                    className="mt-4 text-sm opacity-60"
                    style={{ color: textColor }}
                  >
                    {typeInfo.keywords.slice(0, 4).join(' · ')}
                  </div>
                </div>

                {/* 底部 */}
                <div 
                  className="absolute bottom-8 text-xs opacity-40"
                  style={{ color: textColor }}
                >
                  SBTI-Engine 3.0 · 科学已死，混沌当立
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：设置面板 */}
          <div className="w-full lg:w-80 p-6 space-y-6 border-l border-gray-200">
            {/* 文字内容 */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <AlignLeft className="w-4 h-4" />
                卡片文字
              </label>
              <textarea
                value={cardText}
                onChange={(e) => setCardText(e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg resize-none h-24 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="输入卡片文字..."
              />
              <button
                onClick={() => setCardText(generateShareCardText(result))}
                className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                恢复默认
              </button>
            </div>

            {/* 背景颜色 */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Palette className="w-4 h-4" />
                背景颜色
              </label>
              <div className="grid grid-cols-4 gap-2">
                {BG_GRADIENTS.map((bg) => (
                  <button
                    key={bg.name}
                    onClick={() => setBgGradient(bg.value)}
                    className={`w-full aspect-square rounded-lg border-2 transition-all ${
                      bgGradient === bg.value ? 'border-blue-500 scale-110' : 'border-transparent hover:border-gray-300'
                    }`}
                    style={{ background: bg.value }}
                    title={bg.name}
                  />
                ))}
              </div>
            </div>

            {/* 图案 */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <ImageIcon className="w-4 h-4" />
                背景图案
              </label>
              <div className="flex flex-wrap gap-2">
                {PATTERNS.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setPattern(p.value)}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                      pattern === p.value 
                        ? 'bg-blue-500 text-white border-blue-500' 
                        : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 颜色设置 */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Type className="w-4 h-4" />
                颜色设置
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <span className="text-xs text-gray-500 block mb-1">强调色</span>
                  <input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-full h-8 rounded cursor-pointer"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-gray-500 block mb-1">文字色</span>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-full h-8 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* 字体大小 */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">字体大小</label>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-12">标题</span>
                  <input
                    type="range"
                    min={20}
                    max={48}
                    value={titleSize}
                    onChange={(e) => setTitleSize(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-xs text-gray-500 w-8">{titleSize}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-12">正文</span>
                  <input
                    type="range"
                    min={12}
                    max={24}
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-xs text-gray-500 w-8">{fontSize}</span>
                </div>
              </div>
            </div>

            {/* 生成按钮 */}
            <Button
              onClick={generateImage}
              disabled={isGenerating}
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  生成中...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  下载分享卡片
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
