
# AI HTML Gallery

一个用于管理和展示 AI 生成的 HTML 文件的现代化画廊应用。

## 特性

- 🎨 **精美 UI** - 采用玻璃拟态设计和深色主题
- 📱 **响应式布局** - 自适应 1-5 列网格布局
- 🏷️ **分类管理** - 按 AI 工具分类组织 HTML 文件
- 🔍 **智能搜索** - 支持文件名和描述搜索
- 👁️ **实时预览** - 内置 iframe 预览器
- 🔗 **分享链接** - 一键分享预览页面
- 📄 **Front-Matter** - 支持 HTML 文件元数据管理

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript (严格模式)
- **样式**: TailwindCSS 3.4 (自定义设计系统)
- **图标**: Lucide React
- **文件解析**: gray-matter
- **部署**: Vercel + GitHub

## 快速开始

### 环境要求

- Node.js 24+
- npm 或 pnpm

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```
html-gallery/
├── public/
│   └── files/              # HTML 文件存储目录
│       ├── openclaw/
│       ├── codex/
│       └── workbuddy/
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── preview/[id]/   # 预览页面
│   │   ├── page.tsx        # 首页
│   │   └── layout.tsx      # 根布局
│   ├── components/
│   │   ├── gallery/        # 画廊组件
│   │   ├── layout/         # 布局组件
│   │   ├── preview/        # 预览组件
│   │   └── ui/             # UI 基础组件
│   ├── lib/                # 工具函数
│   └── types/              # TypeScript 类型定义
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 添加 HTML 文件

在 `public/files/` 目录下按分类创建文件夹，每个 HTML 文件支持 Front-Matter 元数据：

```html
---
title: 销售仪表盘
description: 使用 AI 生成的销售数据可视化仪表盘
category: openclaw
tags: [dashboard, chart, sales]
createdAt: 2024-01-15
author: AI Assistant
---

&lt;!DOCTYPE html&gt;
&lt;html&gt;
...
&lt;/html&gt;
```

## 部署

### Vercel 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/import?repo=https://github.com/javastarboy/ai-html-gallery)

1. 点击上方按钮或访问 https://vercel.com/new/git/import?repo=https://github.com/javastarboy/ai-html-gallery
2. 导入 GitHub 仓库
3. 点击 Deploy 即可

### Git 管理

所有 HTML 文件都在 `public/files/` 目录下，可以通过 Git 进行版本控制。

## 开发命令

```bash
npm run dev       # 开发模式
npm run build     # 构建
npm run start     # 生产模式
npm run lint      # ESLint 检查
npm run format    # Prettier 格式化
```

## 联系我

- **微信**：LHYYH001
- **博客主页**：[80万字AI大模型知识库](https://www.yuque.com/lhyysh)
- **AI工具导航站**：[https://tools.lhagi.com/](https://tools.lhagi.com/)

### 扫码交流

| 微信交流群 | 公众号 |
|-----------|--------|
| ![微信交流群](https://oss.javastarboy.com/agi/%E5%BE%AE%E4%BF%A1%E4%BA%A4%E6%B5%81%E7%BE%A4.png) | ![公众号](https://oss.javastarboy.com/agi/AGI%E8%88%B0%E9%95%BF%E5%BE%AE%E4%BF%A1%E8%AE%A2%E9%98%85%E5%8F%B7.png) |

## 许可证

MIT
