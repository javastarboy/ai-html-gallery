'use client';

import Input from '@/components/ui/input';

interface HeroProps {
  totalFiles: number;
  totalSources: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Hero({ totalFiles, totalSources, searchQuery, onSearchChange }: HeroProps) {
  return (
    <section className="relative py-16 sm:py-24 text-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-display sm:text-display mb-4 font-outfit">
          <span className="gradient-text">AI HTML</span> Gallery
        </h1>
        <p className="text-h3 text-text-secondary mb-8 max-w-2xl mx-auto">
          轻松管理、浏览和分享你的 AI 生成作品
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-small text-text-tertiary">
          <div className="glass-card px-4 py-2">
            <span className="font-semibold text-primary mr-2">{totalFiles}</span>
            个文件
          </div>
          <div className="glass-card px-4 py-2">
            <span className="font-semibold text-secondary mr-2">{totalSources}</span>
            个来源
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <Input
            variant="search"
            placeholder="搜索标题、描述、标签..."
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            className="h-12 text-base"
          />
          <p className="mt-2 text-tiny text-text-tertiary">
            按 <kbd className="px-2 py-0.5 bg-surface-800 rounded text-xs">Ctrl</kbd> +{' '}
            <kbd className="px-2 py-0.5 bg-surface-800 rounded text-xs">K</kbd> 快速搜索
          </p>
        </div>
      </div>
    </section>
  );
}
