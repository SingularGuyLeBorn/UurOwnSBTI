# SBTI-Engine 3.0

> 科学已死，混沌当立

基于混沌算法的趣味人格测试系统。不追求传统心理学的科学准确，而是拥抱人类精神世界的复杂性、矛盾性与荒诞性。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

## ✨ 核心特性

- **127 种人格类型** — 从经典亚文化到赛博抽象，覆盖互联网精神的全光谱
- **162 道混沌题库** — 113 道经典题 + 49 道攻击性/玩梗新题，辱骂与自嘲齐飞
- **7 层计分逻辑** — 跳过检测 / 一键乱选 / 答题时间分析 / 矛盾检测 / 一致性奖励 / 陷阱题 / 置信度计算
- **3D 沉浸式暗色 UI** — Spline 3D 英雄区、玻璃拟态、GSAP 滚动动画
- **槽位随机文案** — 每次测试结果都生成独特的 Mad Libs 风格吐槽
- **特殊操作** — 烦了爷不玩了（RUSHI）/ 一键乱选（RAND）

---

## 🚀 快速开始

### 环境要求

- Node.js >= 20
- npm >= 10

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/yourusername/sbti-engine.git
cd sbti-engine

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 本地预览生产构建
npm run preview
```

---

## 🏗️ 项目结构

```
sbti-engine/
├── src/
│   ├── components/      # React 组件（含 shadcn/ui 组件）
│   ├── data/            # 题库、人格类型定义、文案槽位
│   ├── hooks/           # 自定义 Hooks
│   ├── lib/             # 工具函数
│   ├── logic/           # 计分逻辑与文案生成器
│   ├── pages/           # 页面组件（Home / Quiz / Result）
│   └── types/           # TypeScript 类型定义
├── dist/                # 生产构建产物
├── index.html           # 应用入口
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🎭 人格类型示例

### 经典亚文化型

| 代码 | 名称 | 关键词 |
|------|------|--------|
| `SEXY` | 性感犯 | 危险魅力、荷尔蒙里掺火药、带刺玫瑰防弹衣 |
| `IMFW` | 爱咋咋地 | 摆烂仙人、量子隧穿式躺平、无能之力 |
| `HITER` | 攻击型 | 战斗爽、键盘成精、行走的 DDoS |
| `WONANG` | 窝囊型 | 内耗之王、乳腺结节成精、抱歉体质 |
| `BOSS` | 资本型 | 画饼 PUA、赋能抓手、闭环大师 |
| `NPC` | NPC | 背景板成精、人机感、世界缺了您照样转 |

### 攻击性 / 抽象扩展型（新增）

| 代码 | 名称 | 关键词 |
|------|------|--------|
| `HOUJ` | 吼叫者 | 分贝即正义、物理超度、行走的喇叭 |
| `BAOZ` | 暴躁者 | 易燃易爆炸、人间煤气罐、零帧起手 |
| `YINY` | 阴阳师 | 表面笑嘻嘻、记仇三年、茶艺大师 |
| `LENGL` | 冷暴力者 | 已读不回、社交速冻、情感黑洞 |
| `HUIM` | 毁灭者 | 玉石俱焚、掀桌专业户、今天不想活了 |
| `CHAO` | 嘲讽者 | 嘴毒心软、专挑痛点、评论区的神 |
| `BENG` | 崩溃者 | 定时崩溃、泪失禁、情绪过山车 |
| `KEYB` | 键盘战神 | 线上战神、句句带妈、评论区 MVP |
| `YITP` | 依托答辩 | 满嘴胡言、抽象话痨、互联网嘴替 |
| `DUNJ` | 钝角 | 九十三度、没有意义就是意义、薛定谔的回答 |

完整 127 种类型定义请见 `src/data/types.ts`。

---

## 🎨 视觉风格

- **主色调**：`#0A0A0A` 纯黑背景 + 霓虹点缀
- **3D 英雄区**：`@splinetool/react-spline` 实时渲染
- **玻璃拟态**：半透明卡片 + 模糊背景 + 微妙边框
- **动画**：GSAP ScrollTrigger 驱动的入场与交错动画
- **字体**：系统无衬线字体，强调数字与代码的科技感

---

## 🤝 贡献指南

欢迎提交 Issue 与 PR！

- 发现 Bug 或有新想法？请先查看 [Issues](https://github.com/yourusername/sbti-engine/issues) 是否已存在。
- 想贡献新的人格类型或题目？直接在 `src/data/` 下添加即可。

---

## ⚠️ 免责声明

**本项目纯属娱乐，测试结果不构成任何心理诊断或专业建议。** 如有心理健康方面的困扰，请咨询专业心理医生。

---

## 📄 License

[MIT](LICENSE) © SBTI Team
