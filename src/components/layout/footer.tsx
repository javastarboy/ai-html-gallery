'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-glass-border bg-surface-900/50 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-base font-semibold text-text-primary mb-3">关于我</h3>
            <div className="space-y-2 text-small">
              <p className="text-text-secondary">
                <span className="text-text-tertiary">微信：</span>
                <span className="text-text-primary">LHYYH001</span>
              </p>
              <p className="text-text-secondary">
                <Link
                  href="https://www.yuque.com/lhyyh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  博客主页 - 80万字AI大模型知识库 →
                </Link>
              </p>
              <p className="text-text-secondary">
                <Link
                  href="https://tools.lhagi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  AI工具导航站 →
                </Link>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-text-primary mb-3">扫码交流</h3>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <Image
                  src="https://oss.javastarboy.com/agi/%E5%BE%AE%E4%BF%A1%E4%BA%A4%E6%B5%81%E7%BE%A4.png"
                  alt="微信交流群"
                  width={80}
                  height={80}
                  className="rounded-lg border border-glass-border"
                />
                <p className="text-tiny text-text-tertiary mt-1">微信交流群</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="https://oss.javastarboy.com/agi/AGI%E8%88%B0%E9%95%BF%E5%BE%AE%E4%BF%A1%E8%AE%A2%E9%98%85%E5%8F%B7.png"
                  alt="公众号"
                  width={80}
                  height={80}
                  className="rounded-lg border border-glass-border"
                />
                <p className="text-tiny text-text-tertiary mt-1">公众号</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-glass-border pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-small text-text-secondary">
                © 2026 AI HTML Gallery. 使用 Next.js + TailwindCSS 构建
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/javastarboy/ai-html-gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small text-text-tertiary hover:text-text-primary transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://vercel.com/new/git/import?repo=https://github.com/javastarboy/ai-html-gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small text-text-tertiary hover:text-text-primary transition-colors"
              >
                部署于 Vercel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
