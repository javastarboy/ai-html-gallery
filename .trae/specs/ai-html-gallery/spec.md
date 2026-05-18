# AI HTML Gallery - 规格说明书 v2.0

> 基于专业 UI/UX 设计原则（UI/UX Pro Max + Frontend Design）打造

---

## 1. 产品愿景

**核心理念**：打造一个极简、优雅的个人 AI HTML 文件管理中心，让每个作品都能被轻松发现、浏览和分享。

**设计方向**：融合 **极简主义** 与 **玻璃拟态** 风格，创造一个既专业又具有未来感的数字艺术画廊。

**差异化特点**：
- 🎯 **极简美学**：去除一切不必要的装饰，聚焦内容本身
- 🌊 **玻璃拟态**：半透明磨砂质感，营造层次感和深度
- ⚡ **流畅动效**：精心设计的微交互，提升用户体验
- 📱 **响应式优先**：从移动端到大屏，每个设备都有最佳体验

---

## 2. 设计系统

### 2.1 色彩系统（Color System）

#### 语义化颜色令牌

```css
:root {
  /* 主色调 - 深空蓝 + 智能紫 */
  --color-primary: #6366f1;           /* 主色：靛蓝，代表智慧与创造力 */
  --color-primary-light: #818cf8;     /* 主色浅 */
  --color-primary-dark: #4f46e5;      /* 主色深 */

  /* 辅助色 - 温暖琥珀 */
  --color-secondary: #f59e0b;         /* 辅助色：琥珀，代表活力 */
  --color-secondary-light: #fbbf24;   /* 辅助色浅 */
  --color-secondary-dark: #d97706;    /* 辅助色深 */

  /* 功能色 */
  --color-success: #10b981;           /* 成功：翡翠绿 */
  --color-warning: #f59e0b;           /* 警告：琥珀 */
  --color-error: #ef4444;             /* 错误：珊瑚红 */
  --color-info: #3b82f6;              /* 信息：天空蓝 */

  /* 表面色 */
  --color-surface-0: #ffffff;         /* 表面0：纯白 */
  --color-surface-50: #f8fafc;       /* 表面50：极浅灰 */
  --color-surface-100: #f1f5f9;      /* 表面100：浅灰 */
  --color-surface-200: #e2e8f0;      /* 表面200：中灰 */
  --color-surface-900: #0f172a;      /* 表面900：深蓝黑 */
  --color-surface-950: #020617;      /* 表面950：纯黑 */

  /* 文字色 */
  --color-text-primary: #f8fafc;      /* 主文字：近白 */
  --color-text-secondary: #94a3b8;    /* 次文字：银灰 */
  --color-text-tertiary: #64748b;     /* 弱文字：石板灰 */
  --color-text-inverse: #0f172a;      /* 反色文字：深蓝黑 */

  /* 玻璃效果 */
  --color-glass-bg: rgba(255, 255, 255, 0.05);
  --color-glass-border: rgba(255, 255, 255, 0.1);
  --color-glass-shadow: rgba(0, 0, 0, 0.3);
}
```

#### 深色主题（默认）

采用 **深空主题** 背景，减少视觉疲劳，适合长时间浏览：

```css
body {
  --bg-primary: linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e1b4b 100%);
  --bg-secondary: #0f172a;
  --bg-card: rgba(30, 41, 59, 0.7);
  --bg-glass: rgba(255, 255, 255, 0.03);
}
```

### 2.2 字体系统（Typography）

#### 字体选择

**标题字体**：Outfit（Google Fonts）
- 几何感强，现代且独特
- 权重：600-700

**正文字体**：Source Sans 3（Google Fonts）
- 高可读性，专业感
- 权重：400-500

**代码字体**：JetBrains Mono（Google Fonts）
- 等宽字体，适合代码展示

#### 字体比例

```
Display:   3.5rem  / 56px   / 700 weight / -0.02em tracking
H1:        2.5rem  / 40px   / 700 weight / -0.01em tracking
H2:        2rem    / 32px   / 600 weight / -0.01em tracking
H3:        1.5rem  / 24px   / 600 weight / 0 tracking
H4:        1.25rem / 20px   / 600 weight / 0 tracking
Body:      1rem    / 16px   / 400 weight / 0 tracking
Small:     0.875rem/ 14px   / 400 weight / 0.01em tracking
Tiny:      0.75rem / 12px   / 500 weight / 0.02em tracking
```

#### 行高规范

- **标题**：1.2（紧凑感）
- **正文**：1.6（舒适阅读）
- **长文本**：1.75（极佳可读性）

### 2.3 间距系统（Spacing）

基于 **8px 网格**：

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
}
```

### 2.4 圆角系统（Border Radius）

```css
:root {
  --radius-sm: 0.375rem;  /* 6px：小按钮、标签 */
  --radius-md: 0.5rem;    /* 8px：输入框、小卡片 */
  --radius-lg: 0.75rem;   /* 12px：卡片、面板 */
  --radius-xl: 1rem;      /* 16px：模态框、大卡片 */
  --radius-2xl: 1.5rem;   /* 24px：特殊卡片 */
  --radius-full: 9999px;  /* 圆形按钮 */
}
```

### 2.5 阴影系统（Shadow）

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);

  /* 玻璃阴影 */
  --shadow-glass: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  --shadow-glow-primary: 0 0 20px rgba(99, 102, 241, 0.3);
  --shadow-glow-secondary: 0 0 20px rgba(245, 158, 11, 0.3);
}
```

### 2.6 动效系统（Animation）

#### 时长规范

```css
:root {
  --duration-fast: 150ms;      /* 微交互：hover、点击 */
  --duration-normal: 200ms;     /* 状态切换：展开、折叠 */
  --duration-slow: 300ms;      /* 页面过渡：进入、离开 */
  --duration-slower: 400ms;    /* 复杂动画：加载、旋转 */
}
```

#### 缓动函数

```css
:root {
  --ease-out: cubic-bezier(0.33, 1, 0.68, 1);      /* 进入动画 */
  --ease-in: cubic-bezier(0.32, 0, 0.67, 0);      /* 离开动画 */
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);  /* 双向动画 */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* 弹性动画 */
}
```

#### 核心动效设计

1. **页面加载**：卡片从下方渐入，stagger 50ms
2. **悬停效果**：卡片上浮 4px + 阴影加深
3. **按钮点击**：轻微缩小（scale 0.95）后回弹
4. **模态展开**：从中心放大（scale 0.9→1）+ 渐入
5. **标签切换**：滑动指示器 + 内容淡入淡出

---

## 3. 布局架构

### 3.1 页面结构

```
┌─────────────────────────────────────────────────────┐
│  Header（固定顶部）                                    │
│  ┌─────────────────────────────────────────────────┐│
│  │ Logo    Search Bar              Actions    User ││
│  └─────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────┤
│  Main Content Area                                   │
│  ┌──────────┬──────────────────────────────────────┐ │
│  │ Sidebar  │  Content Grid                        │ │
│  │          │  ┌────┐ ┌────┐ ┌────┐ ┌────┐        │ │
│  │ Filters  │  │Card│ │Card│ │Card│ │Card│        │ │
│  │          │  └────┘ └────┘ └────┘ └────┘        │ │
│  │ Tags     │  ┌────┐ ┌────┐ ┌────┐ ┌────┐        │ │
│  │          │  │Card│ │Card│ │Card│ │Card│        │ │
│  │ Sources  │  └────┘ └────┘ └────┘ └────┘        │ │
│  │          │                                       │ │
│  └──────────┴──────────────────────────────────────┘ │
├─────────────────────────────────────────────────────┤
│  Footer（可选）                                       │
└─────────────────────────────────────────────────────┘
```

### 3.2 响应式断点

```css
/* Mobile First */
@media (min-width: 640px)  { /* SM: 平板竖屏 */ }
@media (min-width: 768px)  { /* MD: 平板横屏 */ }
@media (min-width: 1024px) { /* LG: 桌面 */ }
@media (min-width: 1280px) { /* XL: 大屏 */ }
@media (min-width: 1536px) { /* 2XL: 超大屏 */ }
```

#### 网格布局

- **手机** (< 640px)：1 列，全宽卡片
- **平板** (640px - 1023px)：2 列网格
- **桌面** (1024px - 1279px)：3 列网格
- **大屏** (≥ 1280px)：4 列网格
- **超大屏** (≥ 1536px)：5 列网格

### 3.3 容器宽度

```css
.container {
  max-width: 1280px;      /* 标准容器 */
  max-width: 1024px;       /* 紧凑容器 */
  max-width: 1536px;       /* 宽松容器 */
  max-width: none;         /* 全宽 */
}
```

---

## 4. 核心功能

### 4.1 首页（Gallery）

#### Hero 区域

- **标题**：渐变文字效果（主色→辅助色）
- **副标题**：文件总数 + 分类数量统计
- **搜索框**：
  - 玻璃拟态背景
  - 搜索图标前缀
  - 支持快捷键（Cmd/Ctrl + K）
  - 实时搜索（debounce 300ms）

#### 筛选栏

**来源筛选**：
- OpenClaw 🛠️
- WorkBuddy 🤖
- Codex 💻
- QoderWork 🚀
- Trae Solo ✨
- 其他 📦

**标签云**：
- 可点击的标签按钮
- 选中状态：填充主色
- 未选中：描边样式
- 显示频率/数量

**排序选项**：
- 最新优先（默认）
- 最早优先
- 名称 A-Z
- 名称 Z-A

#### 文件卡片网格

**卡片尺寸**：
- 宽度：自适应网格
- 高度：自动（内容驱动）
- 最小高度：280px
- 最大高度：360px（超出滚动）

**卡片结构**：

```
┌─────────────────────────────────────┐
│  ┌─────────────────────────────┐    │
│  │                             │    │
│  │      缩略图预览区            │    │
│  │      (16:9 比例)            │    │
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
│  标题（最多2行，超出省略）            │
│                                     │
│  描述文本（最多2行，超出省略）         │
│                                     │
│  ┌────┐ ┌────┐ ┌────┐               │
│  │标签│ │标签│ │更多│               │
│  └────┘ └────┘ └────┘               │
│                                     │
│  📅 2024-01-15    👁️ 123 次预览    │
│                                     │
│  ┌─────────┐  ┌─────────┐           │
│  │  预览   │  │  打开   │           │
│  └─────────┘  └─────────┘           │
└─────────────────────────────────────┘
```

**卡片状态**：

1. **默认状态**
   - 背景：`--bg-card`
   - 边框：透明
   - 阴影：`--shadow-md`

2. **悬停状态**
   - 背景：轻微变亮
   - 边框：`--color-glass-border`
   - 阴影：`--shadow-lg`
   - 变换：`translateY(-4px)`
   - 过渡：`200ms ease-out`

3. **焦点状态**
   - 边框：2px solid `--color-primary`
   - 外发光：`--shadow-glow-primary`

4. **加载状态**
   - 骨架屏动画
   - 脉冲效果：opacity 0.5→1

### 4.2 预览页面（Preview）

#### 工具栏

```
┌────────────────────────────────────────────────────────┐
│ ← 返回  │  标题：销售仪表盘  │  🔗分享  ⛶全屏  ⚙️设置 │
└────────────────────────────────────────────────────────┘
```

**工具栏功能**：
- 返回按钮：回到 Gallery
- 标题显示：文件名或 front-matter 标题
- 分享按钮：复制链接到剪贴板
- 全屏按钮：切换全屏模式
- 设置按钮：打开设置面板

#### 预览区

- 全屏 iframe 展示
- 响应式尺寸：桌面/平板/手机三种预览尺寸
- 加载指示器：中心旋转动画
- 错误处理：友好错误提示

#### 元数据面板

**可折叠侧边栏**：

```
┌─────────────────────┐
│ 文件信息            │
├─────────────────────┤
│ 📁 文件名            │
│ sales-dashboard...  │
├─────────────────────┤
│ 🤖 来源              │
│ OpenClaw           │
├─────────────────────┤
│ 🏷️ 标签              │
│ [dashboard] [chart]│
├─────────────────────┤
│ 📅 创建日期          │
│ 2024-01-15         │
├─────────────────────┤
│ 📐 尺寸              │
│ 1280 × 720         │
├─────────────────────┤
│ 💾 文件大小          │
│ 45.2 KB            │
├─────────────────────┤
│ 🔗 GitHub           │
│ [查看源文件]        │
└─────────────────────┘
```

### 4.3 搜索功能

#### 搜索算法

1. **实时搜索**：输入即搜索（debounce 300ms）
2. **匹配字段**：标题、描述、标签、文件名
3. **高亮显示**：匹配关键词高亮
4. **空结果**：友好提示 + 建议

#### 搜索建议

- 热门搜索标签
- 最近搜索历史（localStorage）
- 智能补全

---

## 5. 组件规范

### 5.1 按钮（Button）

#### 类型

1. **Primary Button**
   - 背景：`--color-primary`
   - 文字：`white`
   - 悬停：变亮 10%
   - 点击：缩小至 95%

2. **Secondary Button**
   - 背景：`transparent`
   - 边框：1px solid `--color-glass-border`
   - 文字：`--color-text-primary`
   - 悬停：背景变为 `--color-glass-bg`

3. **Ghost Button**
   - 背景：`transparent`
   - 文字：`--color-text-secondary`
   - 悬停：文字变亮

4. **Icon Button**
   - 44×44px 最小尺寸
   - 圆形或圆角方形
   - 图标居中

#### 尺寸

- **Small**：h-8（32px），text-sm
- **Medium**：h-10（40px），text-base
- **Large**：h-12（48px），text-lg

### 5.2 输入框（Input）

#### 样式

- 高度：44px（移动端友好）
- 背景：`--bg-glass`
- 边框：1px solid `--color-glass-border`
- 圆角：`--radius-md`
- 过渡：`border-color 200ms`

#### 状态

- **默认**：边框透明
- **焦点**：边框变为主色 + 外发光
- **错误**：边框变为 `--color-error`
- **禁用**：opacity 0.5，cursor not-allowed

### 5.3 卡片（Card）

#### 基础卡片

```css
.card {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  border: 1px solid var(--color-glass-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-normal) var(--ease-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(255, 255, 255, 0.15);
}
```

#### 玻璃卡片

```css
.card-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
}
```

### 5.4 标签（Badge）

#### 样式

- 高度：24px
- 圆角：`--radius-full`
- 字体：12px，medium
- 内边距：0 8px

#### 类型

- **来源标签**：不同 AI 工具有不同颜色
- **标签**：统一灰色风格
- **数字标签**：显示数量

### 5.5 模态框（Modal）

#### 样式

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 50;
}

.modal-content {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--color-glass-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
}
```

#### 动画

- 进入：scale 0.95→1 + opacity 0→1，300ms
- 离开：scale 1→0.95 + opacity 1→0，200ms

---

## 6. 技术实现

### 6.1 技术栈

- **框架**：Next.js 14（App Router）
- **语言**：TypeScript 5
- **样式**：TailwindCSS 3.4
- **图标**：Lucide React
- **动画**：Framer Motion（可选）或纯 CSS
- **部署**：Vercel

### 6.2 项目结构

```
src/
├── app/
│   ├── page.tsx                    # 首页（Gallery）
│   ├── preview/
│   │   └── [id]/
│   │       └── page.tsx            # 预览页面
│   ├── layout.tsx                  # 根布局
│   └── globals.css                 # 全局样式
├── components/
│   ├── ui/                        # 基础 UI 组件
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── modal.tsx
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── footer.tsx
│   ├── gallery/
│   │   ├── hero.tsx
│   │   ├── filter-bar.tsx
│   │   ├── file-grid.tsx
│   │   └── file-card.tsx
│   └── preview/
│       ├── toolbar.tsx
│       ├── iframe-viewer.tsx
│       └── metadata-panel.tsx
├── lib/
│   ├── files.ts                   # 文件读取工具
│   ├── utils.ts                   # 工具函数
│   └── cn.ts                     # className 合并
├── hooks/
│   ├── use-files.ts              # 文件数据 hook
│   └── use-search.ts             # 搜索 hook
└── types/
    └── index.ts                  # TypeScript 类型
```

### 6.3 文件读取逻辑

```typescript
// lib/files.ts
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const FILES_DIRECTORY = path.join(process.cwd(), 'public', 'files');

export interface HtmlFile {
  id: string;
  filename: string;
  path: string;
  title: string;
  description?: string;
  source: string;
  tags: string[];
  created: string;
  updated?: string;
  size: number;
  url: string;
}

export async function getAllHtmlFiles(): Promise<HtmlFile[]> {
  const files = await fs.readdir(FILES_DIRECTORY, { recursive: true });
  const htmlFiles = files.filter(f => String(f).endsWith('.html'));

  const parsedFiles = await Promise.all(
    htmlFiles.map(async (file) => {
      const filePath = path.join(FILES_DIRECTORY, String(file));
      const content = await fs.readFile(filePath, 'utf-8');
      const stats = await fs.stat(filePath);

      const { data, content: html } = matter(content);

      return {
        id: Buffer.from(String(file)).toString('base64'),
        filename: path.basename(String(file)),
        path: String(file),
        title: data.title || path.basename(String(file), '.html'),
        description: data.description,
        source: data.source || 'other',
        tags: data.tags || [],
        created: data.created || stats.birthtime.toISOString().split('T')[0],
        updated: stats.mtime.toISOString().split('T')[0],
        size: stats.size,
        url: `/files/${String(file)}`,
      };
    })
  );

  return parsedFiles.sort((a, b) =>
    new Date(b.created).getTime() - new Date(a.created).getTime()
  );
}
```

### 6.4 环境变量

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-gallery.vercel.app
NEXT_PUBLIC_GITHUB_REPO=https://github.com/yourusername/ai-html-gallery
```

---

## 7. 可访问性（Accessibility）

### 7.1 核心要求

- [ ] 所有交互元素可键盘访问
- [ ] 颜色对比度 ≥ 4.5:1（文本）/ 3:1（大文本）
- [ ] 所有图片有 alt 属性
- [ ] ARIA 标签正确使用
- [ ] 焦点状态清晰可见

### 7.2 键盘导航

```
Tab         → 下一个可交互元素
Shift + Tab → 上一个可交互元素
Enter       → 激活/选择
Escape      → 关闭模态框/取消
Arrow       → 在网格中导航
```

### 7.3 屏幕阅读器

- 语义化 HTML 结构
- 适当的 heading 层级（h1→h2→h3）
- aria-live 区域用于动态内容
- skip link 跳转到主要内容

---

## 8. SEO 优化

### 8.1 Meta 标签

```typescript
// app/layout.tsx
export const metadata = {
  title: 'AI HTML Gallery',
  description: '一个极简、优雅的个人 AI HTML 文件管理中心',
  keywords: ['AI', 'HTML', 'Gallery', 'OpenClaw', 'WorkBuddy', 'Codex'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'AI HTML Gallery',
    description: '一个极简、优雅的个人 AI HTML 文件管理中心',
    type: 'website',
    locale: 'zh_CN',
  },
};
```

### 8.2 技术 SEO

- [ ] sitemap.xml 自动生成
- [ ] robots.txt 配置
- [ ] 语义化 HTML
- [ ] 结构化数据（Schema.org）
- [ ] 静态页面利于索引

---

## 9. 性能优化

### 9.1 核心指标

- **LCP**（最大内容绘制）：< 2.5s
- **FID**（首次输入延迟）：< 100ms
- **CLS**（累积布局偏移）：< 0.1

### 9.2 优化策略

1. **图片优化**
   - 使用 WebP 格式
   - 响应式图片（srcset）
   - 懒加载（loading="lazy"）

2. **代码分割**
   - 路由级别分割
   - 组件动态导入
   - 减少初始包体积

3. **缓存策略**
   - 静态资源长期缓存
   - API 响应缓存
   - Service Worker（可选）

4. **字体优化**
   - font-display: swap
   - 预加载关键字体
   - 字体子集化

---

## 10. 部署与运维

### 10.1 Vercel 部署

1. 连接 GitHub 仓库
2. 自动检测 Next.js 框架
3. 构建命令：`npm run build`
4. 输出目录：`.next`
5. 环境变量配置

### 10.2 域名配置（可选）

- 默认域名：`your-project.vercel.app`
- 自定义域名：`gallery.yourdomain.com`
- 自动 HTTPS

### 10.3 监控与分析（可选）

- Vercel Analytics
- Google Analytics
- Sentry 错误监控

---

## 11. 使用流程

### 11.1 初始设置（5分钟）

1. Fork 本仓库
2. Vercel 导入项目
3. 等待首次部署完成
4. 访问你的 Gallery！🎉

### 11.2 添加新文件

**方式一：GitHub 网页（推荐）**
1. 进入 `public/files/[source]/` 目录
2. 点击 "Add file" → "Create new file"
3. 粘贴 HTML 代码
4. 在文件头部添加 front-matter 元数据
5. 提交并推送
6. Vercel 自动部署

**方式二：本地编辑**
1. Clone 仓库
2. 添加 HTML 文件到对应目录
3. 完善 front-matter
4. Commit & Push
5. 完成！

### 11.3 分享给同事

1. 打开 Gallery
2. 找到目标文件
3. 点击分享按钮
4. 复制链接
5. 发送！👌

---

## 12. Front-matter 元数据规范

每个 HTML 文件头部支持 YAML 格式元数据：

```html
<!--
{
  "title": "销售数据仪表盘",
  "description": "展示月度销售数据的交互式仪表盘，包含多种图表类型",
  "source": "openclaw",
  "tags": ["dashboard", "chart", "sales", "analytics"],
  "created": "2024-01-15",
  "updated": "2024-01-20"
}
-->
```

**字段说明**：

| 字段 | 必填 | 类型 | 说明 |
|------|------|------|------|
| title | 是 | string | 文件标题，将显示在卡片上 |
| description | 否 | string | 简短描述 |
| source | 是 | string | 来源 AI 工具 |
| tags | 否 | string[] | 标签数组 |
| created | 是 | string | 创建日期（YYYY-MM-DD） |
| updated | 否 | string | 更新日期（YYYY-MM-DD） |

---

## 13. 版本与维护

**当前版本**：v1.0.0
**更新日期**：2024-01-15
**维护者**：Your Name

**更新日志**：
- v1.0.0（2024-01-15）：初始版本

---

## 附录：设计资源

### 色彩参考

- **主色渐变**：`#6366f1` → `#8b5cf6`
- **辅助色**：`#f59e0b`
- **背景渐变**：`#020617` → `#0f172a` → `#1e1b4b`

### 字体资源

- Outfit：https://fonts.google.com/specimen/Outfit
- Source Sans 3：https://fonts.google.com/specimen/Source+Sans+3
- JetBrains Mono：https://fonts.google.com/specimen/JetBrains+Mono

### 图标库

- Lucide React：https://lucide.dev/
- 图标风格：线性、2px 描边

### 设计灵感

- Dribbble：搜索 "glassmorphism gallery"
- Behance：搜索 "dark theme portfolio"
- Pinterest：搜索 "minimal dashboard ui"
