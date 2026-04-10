import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Share2, Activity, Image as ImageIcon } from 'lucide-react';
import type { TestResult } from '@/types';
import { TYPE_LIBRARY } from '@/data/types';
import { generateFullRoast, getConfidenceLabel, getConfidenceDescription } from '@/logic/copywriter';
import ShareCard from '@/components/ShareCard';

export default function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result as TestResult | undefined;
  
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showPseudo, setShowPseudo] = useState(false);
  const [showShareCard, setShowShareCard] = useState(false);
  const fullTextRef = useRef('');
  
  // 生成文案并开始打字机效果
  useEffect(() => {
    if (!result) {
      navigate('/');
      return;
    }
    
    const roast = generateFullRoast(result);
    fullTextRef.current = roast;
    setDisplayedText('');
    setIsTyping(true);
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullTextRef.current.length) {
        setDisplayedText(fullTextRef.current.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 25);
    
    return () => clearInterval(interval);
  }, [result, navigate]);

  // 显示伪结果层
  useEffect(() => {
    if (result?.isRandom && result.pseudoResult) {
      const timer = setTimeout(() => setShowPseudo(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  if (!result) return null;

  const typeInfo = TYPE_LIBRARY[result.primaryType];
  const confidenceLabel = getConfidenceLabel(result.confidence);
  const confidenceDesc = getConfidenceDescription(result.confidence);

  // 获取Top 5维度
  const topDimensions = result.sortedTypes.slice(0, 5);
  const maxScore = topDimensions[0]?.score || 1;

  const handleRestart = () => {
    navigate('/');
  };

  const handleShare = () => {
    const text = `我的SBTI类型是【${result.primaryType}-${typeInfo.name}】，置信度${(result.confidence * 100).toFixed(0)}%！快来测测你是什么贵物~`;
    if (navigator.share) {
      navigator.share({
        title: 'SBTI-Engine 3.0',
        text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text + ' ' + window.location.href);
      alert('已复制到剪贴板！');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafafa] to-[#f5f5f7]">
      {/* 噪点纹理 */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* 分享卡片弹窗 */}
      {showShareCard && result && (
        <ShareCard result={result} onClose={() => setShowShareCard(false)} />
      )}

      <div className="px-4 py-8 pb-24">
        <div className="max-w-2xl mx-auto">
          {/* 结果头部 */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-2">你的SBTI类型是</p>
            <div 
              className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-2"
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {result.primaryType}
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">
              {typeInfo.name}
            </div>
            
            {/* 置信度 */}
            <div className="mt-4 flex justify-center">
              <Badge 
                variant="secondary" 
                className="px-4 py-2 text-sm flex items-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100"
              >
                <Activity className="w-4 h-4" />
                置信度: {(result.confidence * 100).toFixed(0)}% ({confidenceLabel})
              </Badge>
            </div>
            <p className="text-xs text-gray-500 mt-2">{confidenceDesc}</p>
          </div>

          {/* SVG视觉展示 */}
          <Card className="mb-6 border border-black/5 shadow-lg overflow-hidden">
            <CardContent className="p-8 flex items-center justify-center min-h-[240px]">
              <div 
                className="w-48 h-48 sm:w-56 sm:h-56"
                style={{
                  filter: 'drop-shadow(0.5px 0 0 rgba(255,107,107,0.3)) drop-shadow(-0.5px 0 0 rgba(74,144,210,0.3))'
                }}
                dangerouslySetInnerHTML={{ __html: typeInfo.svgDescription }}
              />
            </CardContent>
          </Card>

          {/* 关键词标签 */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {typeInfo.keywords.map((keyword, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-3 py-1 text-sm border-gray-200"
              >
                {keyword}
              </Badge>
            ))}
          </div>

          {/* 一键乱选双人格展示 */}
          {result.isRandom && result.pseudoResult && showPseudo && (
            <Card className="mb-6 border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-center text-purple-700">🎲 一键乱选 · 双生人格</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {/* 混沌人格 */}
                  <div className="text-center p-4 bg-white rounded-xl border border-purple-200">
                    <p className="text-xs text-purple-500 mb-1">混沌人格</p>
                    <div className="text-3xl font-black text-purple-600 mb-1">{result.primaryType}</div>
                    <div className="text-sm font-medium text-gray-700">{TYPE_LIBRARY[result.primaryType].name}</div>
                    <p className="text-xs text-gray-400 mt-2">量子叠加态</p>
                  </div>
                  {/* 随机选后的人格 */}
                  <div className="text-center p-4 bg-white rounded-xl border border-pink-200">
                    <p className="text-xs text-pink-500 mb-1">随机选后的人格</p>
                    <div className="text-3xl font-black text-pink-600 mb-1">{result.pseudoResult}</div>
                    <div className="text-sm font-medium text-gray-700">{TYPE_LIBRARY[result.pseudoResult].name}</div>
                    <p className="text-xs text-gray-400 mt-2">坍缩后的你</p>
                  </div>
                </div>
                <p className="text-center text-xs text-purple-600 mt-4">
                  如果当初认真选，你可能会是「{TYPE_LIBRARY[result.pseudoResult].name}」
                </p>
              </CardContent>
            </Card>
          )}

          {/* 文案区域（打字机效果） */}
          <Card className="mb-6 border border-black/5 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">分析结果</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap font-medium">
                {displayedText}
                {isTyping && (
                  <span className="inline-block w-0.5 h-5 bg-blue-500 ml-0.5 animate-pulse" />
                )}
              </p>
            </CardContent>
          </Card>

          {/* 维度分析 */}
          <Card className="mb-6 border border-black/5 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">维度分析</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topDimensions.map(({ type, score }) => {
                  const info = TYPE_LIBRARY[type];
                  const percentage = (score / maxScore) * 100;
                  
                  return (
                    <div key={type}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">
                          {info.name} ({type})
                        </span>
                        <span className="text-sm text-gray-500">{score.toFixed(0)}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            type === result.primaryType 
                              ? 'bg-gradient-to-r from-gray-800 to-gray-600' 
                              : 'bg-gradient-to-r from-gray-400 to-gray-300'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* 操作按钮 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleRestart}
              className="flex-1 h-12 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              重新测试
            </Button>
            <Button 
              variant="outline"
              onClick={handleShare}
              className="flex-1 h-12 border-gray-300 hover:bg-gray-50"
            >
              <Share2 className="w-5 h-5 mr-2" />
              分享结果
            </Button>
            <Button 
              variant="outline"
              onClick={() => setShowShareCard(true)}
              className="flex-1 h-12 border-purple-300 text-purple-600 hover:bg-purple-50"
            >
              <ImageIcon className="w-5 h-5 mr-2" />
              生成卡片
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
