# Contributing to SBTI-Engine

感谢你对 SBTI-Engine 感兴趣！无论你是想修复 Bug、添加新题型、还是贡献更有毒的吐槽文案，我们都欢迎你的参与。

## 🚦 开始之前

1. **Fork** 本仓库。
2. **Clone** 你的 Fork 到本地。
3. 创建一个新的分支：`git checkout -b feature/your-feature-name`。
4. 安装依赖：`npm install`。
5. 启动开发服务器：`npm run dev`。

## 📋 提交规范

- 使用清晰、描述性的提交信息。
- 一次 PR 聚焦一个功能或修复。
- 确保代码通过 `npm run lint` 检查。
- 如果是修改人格类型或文案，请在 PR 描述中说明改动原因。

## 🎨 代码风格

- 使用 TypeScript 编写新代码。
- UI 组件优先使用 `src/components/ui/` 中已有的 shadcn/ui 组件。
- 样式使用 Tailwind CSS 工具类。
- 保持组件职责单一，逻辑尽量抽离到 `src/logic/` 或 `src/hooks/`。

## 🧪 测试

目前项目处于快速迭代阶段，尚未引入自动化测试。如果你愿意搭建测试框架（如 Vitest + React Testing Library），欢迎单独提交 PR！

## 💬 交流

有任何问题可以先开 [Issue](https://github.com/yourusername/sbti-engine/issues) 讨论，避免做无用功。

---

再次感谢你的贡献！
