'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-glass-border bg-surface-900/50 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-small text-text-secondary">
              © 2024 AI HTML Gallery. 使用 Next.js + TailwindCSS 构建
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-text-tertiary hover:text-text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-text-tertiary hover:text-text-primary transition-colors"
            >
              部署于 Vercel
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
