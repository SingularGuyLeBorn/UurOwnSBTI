import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Sparkles, Brain, Zap, Target, Shuffle, ChevronDown, ChevronUp } from 'lucide-react';

const QUESTION_COUNTS = [
  { value: 5, label: '极速' },
  { value: 10, label: '快速' },
  { value: 15, label: '标准' },
  { value: 20, label: '详细' },
  { value: 30, label: '深度' },
  { value: 50, label: '地狱' },
  { value: 100, label: '自虐' }
];

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedCount, setSelectedCount] = useState(15);
  const [showAbout, setShowAbout] = useState(false);

  const handleStart = () => {
    navigate('/quiz', { state: { questionCount: selectedCount } });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-black mb-2 text-gray-900">
            SBTI-Engine 3.0
          </h1>
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            科学已死，混沌当立
            <Sparkles className="w-4 h-4" />
          </p>
        </div>

        {/* 项目介绍 */}
        <div className="w-full max-w-sm mb-4">
          <button 
            onClick={() => setShowAbout(!showAbout)}
            className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200"
          >
            <span className="font-medium text-gray-800">项目介绍</span>
            {showAbout ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
          </button>
          
          {showAbout && (
            <div className="mt-2 bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-600 space-y-3">
              <p>基于混沌算法的性格测试系统，不追求科学准确，而是拥抱人类精神世界的复杂性。</p>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Brain className="w-4 h-4 text-blue-500" />
                    <span className="font-medium text-gray-800">42种人格</span>
                  </div>
                  <p className="text-xs">30亚文化型+10AI型+2特殊型</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium text-gray-800">7层逻辑</span>
                  </div>
                  <p className="text-xs">跳过/乱选/时间/矛盾检测</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="font-medium text-gray-800">智能题目</span>
                  </div>
                  <p className="text-xs">单选85%+多选10%+填空5%</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Shuffle className="w-4 h-4 text-purple-500" />
                    <span className="font-medium text-gray-800">随机文案</span>
                  </div>
                  <p className="text-xs">每次结果都有独特描述</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-2">
                <p className="font-medium text-gray-800 mb-1">玩法说明：</p>
                <ol className="text-xs space-y-1 list-decimal list-inside">
                  <li>选择题目数量，点击开始测试</li>
                  <li>根据直觉选择答案，单选自动跳转</li>
                  <li>可随时烦了爷不玩了跳过剩余</li>
                  <li>或用一键乱选随机完成</li>
                  <li>查看你的人格类型和详细分析</li>
                </ol>
              </div>
            </div>
          )}
        </div>

        {/* 题目数量选择 */}
        <Card className="w-full max-w-sm mb-4 border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-center text-gray-800">选择题目数量</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2">
              {QUESTION_COUNTS.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setSelectedCount(value)}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg border-2 transition-colors ${
                    selectedCount === value 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 bg-white hover:border-blue-300'
                  }`}
                >
                  <span className="text-base font-bold text-gray-900">{value}</span>
                  <span className="text-[10px] text-gray-500">{label}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 开始按钮 */}
        <Button 
          onClick={handleStart}
          className="w-full max-w-sm h-12 text-base font-medium bg-gray-900 hover:bg-gray-800"
        >
          <Play className="w-4 h-4 mr-2" />
          开始测试
        </Button>

        {/* 底部信息 */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <p>v3.0.0 | 结果仅供娱乐</p>
        </div>
      </div>
    </div>
  );
}
