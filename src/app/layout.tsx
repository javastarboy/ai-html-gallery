import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI HTML Gallery',
  description: '一个极简、优雅的个人 AI HTML 文件管理中心，让每个作品都能被轻松发现、浏览和分享',
  keywords: ['AI', 'HTML', 'Gallery', 'OpenClaw', 'WorkBuddy', 'Codex', 'QoderWork', 'Trae Solo'],
  authors: [{ name: 'javastarboy' }],
  openGraph: {
    title: 'AI HTML Gallery',
    description: '一个极简、优雅的个人 AI HTML 文件管理中心',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
