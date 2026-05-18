# AI HTML Gallery - 任务清单 v2.0

> 基于专业 UI/UX 设计原则（UI/UX Pro Max + Frontend Design）

---

## 阶段一：项目初始化与配置（Day 1）

### 1.1 项目初始化

- [ ] 1.1.1 初始化 Next.js 14 项目（App Router）
  ```bash
  npx create-next-app@latest ai-html-gallery --typescript --tailwind --eslint --app --src-dir
  ```
  - 选择 TypeScript
  - 选择 Tailwind CSS
  - 选择 App Router
  - 选择 src/ 目录结构
  - 自定义 import alias：`@/*`

- [ ] 1.1.2 安装核心依赖
  ```bash
  npm install gray-matter lucide-react clsx
  ```
  - gray-matter：解析 front-matter
  - lucide-react：图标库
  - clsx：className 工具

- [ ] 1.1.3 配置 TypeScript
  - 检查 `tsconfig.json`
  - 配置 path alias
  - 启用严格模式

### 1.2 设计系统配置

- [ ] 1.2.1 配置 TailwindCSS
  - 更新 `tailwind.config.ts`
  - 添加自定义颜色令牌
  - 添加自定义字体
  - 配置深色模式
  - 添加自定义动画

- [ ] 1.2.2 配置全局样式
  - 创建 `globals.css`
  - 定义 CSS 变量
  - 配置基础样式
  - 添加字体导入

- [ ] 1.2.3 配置 ESLint 和 Prettier
  - 添加 ESLint 规则
  - 配置 Prettier
  - 设置代码格式化

### 1.3 项目结构创建

- [ ] 1.3.1 创建目录结构
  ```bash
  mkdir -p src/components/{ui,layout,gallery,preview}
  mkdir -p src/lib
  mkdir -p src/hooks
  mkdir -p src/types
  mkdir -p public/files/{openclaw,workbuddy,codex,qoderwork,trae-solo,other}
  ```

- [ ] 1.3.2 创建类型定义
  - 创建 `src/types/index.ts`
  - 定义 HtmlFile 接口
  - 定义组件 Props 类型

---

## 阶段二：基础 UI 组件开发（Day 2-3）

### 2.1 基础组件

- [ ] 2.1.1 Button 组件
  - Primary/Secondary/Ghost/Icon variants
  - Small/Medium/Large sizes
  - 悬停、点击、禁用状态
  - 动画效果

- [ ] 2.1.2 Input 组件
  - 基础输入框
  - 搜索框变体（带图标）
  - 焦点、错误、禁用状态
  - 玻璃拟态样式

- [ ] 2.1.3 Card 组件
  - 基础卡片
  - 玻璃卡片变体
  - 悬停效果
  - 加载骨架屏

- [ ] 2.1.4 Badge 组件
  - 标签样式
  - 来源标签（不同颜色）
  - 数字标签
  - 可点击标签

- [ ] 2.1.5 Modal 组件
  - 遮罩层
  - 内容容器
  - 关闭按钮
  - 动画效果

### 2.2 布局组件

- [ ] 2.2.1 Header 组件
  - Logo
  - 搜索框
  - 操作按钮
  - 响应式设计

- [ ] 2.2.2 Sidebar 组件
  - 分类筛选
  - 标签云
  - 来源列表
  - 折叠/展开

- [ ] 2.2.3 Footer 组件（可选）
  - 版权信息
  - 链接
  - 简洁设计

---

## 阶段三：核心功能开发（Day 4-6）

### 3.1 文件系统

- [ ] 3.1.1 文件读取工具
  - `lib/files.ts`
  - 读取 public/files 目录
  - 解析 front-matter
  - 获取文件元数据

- [ ] 3.1.2 工具函数
  - `lib/utils.ts`
  - cn()：className 合并
  - 格式化函数
  - 搜索工具

- [ ] 3.1.3 Hooks
  - `hooks/use-files.ts`：文件数据
  - `hooks/use-search.ts`：搜索逻辑

### 3.2 Gallery 首页

- [ ] 3.2.1 Hero 区域
  - 大标题（渐变文字）
  - 副标题（统计信息）
  - 搜索框
  - 快捷键支持

- [ ] 3.2.2 筛选栏
  - 来源筛选按钮
  - 标签云
  - 排序选项
  - 玻璃拟态背景

- [ ] 3.2.3 文件卡片网格
  - 响应式网格（1-5列）
  - 卡片组件集成
  - 分页或无限滚动
  - 加载状态

- [ ] 3.2.4 文件卡片
  - 缩略图预览区
  - 标题和描述
  - 来源标签
  - 操作按钮
  - 悬停效果

### 3.3 预览页面

- [ ] 3.3.1 工具栏
  - 返回按钮
  - 标题显示
  - 分享按钮
  - 全屏按钮
  - 设置按钮

- [ ] 3.3.2 预览区
  - iframe 容器
  - 响应式尺寸
  - 加载指示器
  - 错误处理

- [ ] 3.3.3 元数据面板
  - 可折叠侧边栏
  - 文件信息展示
  - GitHub 链接
  - 标签显示

---

## 阶段四：UI/UX 优化（Day 7-8）

### 4.1 视觉优化

- [ ] 4.1.1 深色主题
  - 背景渐变
  - 玻璃效果
  - 文字颜色
  - 对比度检查

- [ ] 4.1.2 玻璃拟态
  - backdrop-filter
  - 边框效果
  - 阴影层次
  - 透明度调整

- [ ] 4.1.3 渐变效果
  - 标题渐变
  - 按钮渐变
  - 背景渐变
  - 标签渐变

### 4.2 动效实现

- [ ] 4.2.1 页面过渡
  - 路由切换动画
  - 渐入渐出
  - 流畅体验

- [ ] 4.2.2 卡片动画
  - 悬停上浮
  - 点击反馈
  - 加载骨架屏
  - Stagger 效果

- [ ] 4.2.3 按钮交互
  - 点击缩放
  - 状态过渡
  - 弹性动画
  - 图标旋转

- [ ] 4.2.4 模态框动画
  - 遮罩淡入
  - 内容缩放
  - 关闭动画

### 4.3 响应式优化

- [ ] 4.3.1 移动端优化
  - 触摸交互
  - 手势支持
  - 性能优化
  - 适配调整

- [ ] 4.3.2 平板适配
  - 布局调整
  - 尺寸优化
  - 交互优化

- [ ] 4.3.3 桌面增强
  - 快捷键支持
  - 悬停交互
  - 多列布局
  - 键盘导航

---

## 阶段五：SEO 与可访问性（Day 9）

### 5.1 SEO 优化

- [ ] 5.1.1 Meta 标签
  - 页面标题
  - 描述信息
  - Open Graph
  - Twitter Cards

- [ ] 5.1.2 技术 SEO
  - sitemap.xml
  - robots.txt
  - 结构化数据
  - 语义化 HTML

### 5.2 可访问性

- [ ] 5.2.1 键盘支持
  - Tab 导航
  - 焦点状态
  - 快捷键
  - ESC 关闭

- [ ] 5.2.2 ARIA 标签
  - aria-label
  - aria-expanded
  - aria-hidden
  - role 属性

- [ ] 5.2.3 屏幕阅读器
  - skip link
  - 语义化结构
  - 动态内容通知

---

## 阶段六：内容与示例（Day 10）

### 6.1 示例文件

- [ ] 6.1.1 创建示例 HTML 文件
  ```bash
  # 每个来源创建 2-3 个示例文件
  public/files/openclaw/
  public/files/workbuddy/
  public/files/codex/
  public/files/qoderwork/
  public/files/trae-solo/
  public/files/other/
  ```

- [ ] 6.1.2 添加 front-matter
  - 完善每个文件的元数据
  - 确保所有字段正确
  - 真实的内容描述

- [ ] 6.1.3 测试预览
  - 每个文件都能正常预览
  - 元数据显示正确
  - 缩略图生成

---

## 阶段七：部署与配置（Day 11）

### 7.1 Vercel 部署

- [ ] 7.1.1 GitHub 仓库
  - 创建 GitHub 仓库
  - 推送代码
  - 配置保护分支

- [ ] 7.1.2 Vercel 配置
  - 导入项目
  - 配置环境变量
  - 部署设置
  - 自定义域名（可选）

- [ ] 7.1.3 自动部署
  - GitHub Actions（可选）
  - PR 预览部署
  - 生产环境部署

### 7.2 文档编写

- [ ] 7.2.1 README.md
  - 项目介绍
  - 功能特点
  - 快速开始
  - 使用指南
  - 部署说明
  - 贡献指南

- [ ] 7.2.2 CONTRIBUTING.md（可选）
  - 代码规范
  - PR 流程
  - 问题反馈

---

## 阶段八：测试与优化（Day 12）

### 8.1 功能测试

- [ ] 8.1.1 核心功能测试
  - 首页加载
  - 搜索功能
  - 筛选功能
  - 预览功能
  - 分享功能

- [ ] 8.1.2 浏览器兼容性
  - Chrome
  - Firefox
  - Safari
  - Edge

- [ ] 8.1.3 设备兼容性
  - iOS Safari
  - Android Chrome
  - 平板设备
  - 桌面设备

### 8.2 性能测试

- [ ] 8.2.1 Lighthouse 审计
  - 性能评分 > 90
  - 可访问性评分 > 90
  - 最佳实践评分 > 90
  - SEO 评分 > 90

- [ ] 8.2.2 性能优化
  - 图片优化
  - 代码分割
  - 缓存策略
  - 字体优化

### 8.3 用户体验测试

- [ ] 8.3.1 可用性测试
  - 首次使用流程
  - 添加文件流程
  - 分享文件流程
  - 查找文件效率

- [ ] 8.3.2 反馈收集
  - 同事使用测试
  - 收集反馈
  - 问题修复
  - 体验优化

---

## 任务优先级

### P0 - 必须完成（核心功能）

1. ✅ 项目初始化
2. ✅ 设计系统配置
3. ✅ 基础 UI 组件
4. ✅ 文件读取系统
5. ✅ Gallery 首页
6. ✅ 预览页面
7. ✅ 示例文件
8. ✅ Vercel 部署

### P1 - 重要（体验优化）

1. 📦 动效系统
2. 📦 响应式优化
3. 📦 SEO 优化
4. 📦 可访问性

### P2 - 次要（文档完善）

1. 📄 README 完善
2. 📄 使用指南
3. 📄 贡献指南

### P3 - 可选（高级功能）

1. 🎯 高级搜索
2. 🎯 用户收藏
3. 🎯 访问统计
4. 🎯 评论系统

---

## 任务依赖关系

```
Day 1: 项目初始化
    ↓
Day 2-3: UI 组件开发
    ↓
Day 4-6: 核心功能开发
    ↓
Day 7-8: UI/UX 优化
    ↓
Day 9: SEO & 可访问性
    ↓
Day 10: 示例文件
    ↓
Day 11: 部署配置
    ↓
Day 12: 测试优化
```

---

## 验收标准

每个阶段完成后必须满足：

1. **代码质量**
   - ESLint 检查通过
   - TypeScript 类型正确
   - 组件可复用
   - 注释清晰

2. **视觉质量**
   - 符合设计规范
   - 动效流畅
   - 响应式正确
   - 细节精致

3. **功能质量**
   - 所有功能正常
   - 无错误提示
   - 用户体验流畅
   - 性能达标

---

**预计总工期**：12 个工作日
**项目规模**：中等复杂度
**技术栈**：Next.js 14 + TypeScript + TailwindCSS
