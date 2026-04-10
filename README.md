# SBTI-Engine 3.0

> 科学已死，混沌当立。

基于混沌算法的趣味人格测试系统。不追求传统心理学的科学准确，而是拥抱人类精神世界的复杂性、矛盾性与荒诞性。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

## ✨ 核心特性

- **42 种人格类型** — 30 种经典亚文化型 + 10 种 AI 拟人型 + 2 种特殊状态型
- **7 层计分逻辑** — 跳过检测 / 一键乱选 / 答题时间分析 / 矛盾检测 / 一致性奖励 / 陷阱题 / 置信度计算
- **3 种题型混合** — 单选题 / 多选题 / 填空题
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

| 代码 | 名称 | 关键词 |
|------|------|--------|
| `SEXY` | 性感者 | 危险魅力、荷尔蒙里掺火药、带刺玫瑰防弹衣 |
| `IMFW` | 爱咋咋地 | 摆烂仙人、量子隧穿式躺平、无能之神 |
| `HITER` | 攻击者 | 战斗爽、键盘成精、行走的 DDoS |
| `WONANG` | 窝囊者 | 内耗之王、乳腺结节成精、抱歉体质 |
| `BOSS` | 资本家 | 画饼 PUA、赋能抓手、闭环大师 |
| `NPC` | NPC | 背景板成精、人机感、世界缺了您照样转 |
| `GROK` | 格洛克 | 第一性原理成精、推特治国、火星梦患者 |
| `RUSHI` | 爷不玩了 | 强制跳过触发 |
| `RAND` | 随机者 | 一键乱选触发 |

完整类型定义请见 `src/data/types.ts`。

---

## 🤝 贡献指南

欢迎提交 Issue 和 PR！

- 发现 Bug 或有新想法？请先查看 [Issues](https://github.com/yourusername/sbti-engine/issues) 是否已存在。
- 想贡献代码？请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

## 📜 更新日志

详见 [CHANGELOG.md](CHANGELOG.md)。

---

## ⚠️ 免责声明

**本项目纯属娱乐，测试结果不构成任何心理诊断或专业建议。** 如有心理健康方面的困扰，请咨询专业心理医生。

---

## 📄 License

[MIT](LICENSE) © SBTI Team
