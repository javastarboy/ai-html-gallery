'use client';

import Input from '@/components/ui/input';
import { Sparkles, Layers, Zap } from 'lucide-react';

interface HeroProps {
  totalFiles: number;
  totalSources: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Hero({ totalFiles, totalSources, searchQuery, onSearchChange }: HeroProps) {
  return (
    <section className="relative py-20 sm:py-28 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[80px] animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 right-1/2 w-[300px] h-[300px] bg-purple-500/6 rounded-full blur-[60px] animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-glass-bg border border-glass-border neon-glow">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-tiny font-medium text-primary-light">AI-Powered</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-glass-bg border border-glass-border">
              <Layers className="w-4 h-4 text-secondary" />
              <span className="text-tiny font-medium text-secondary-light">Gallery</span>
            </div>
          </div>

          <h1 className="text-display sm:text-[4rem] mb-6 font-outfit tracking-tight">
            <span className="gradient-text">AI HTML</span>
            <br className="hidden sm:block" />
            <span className="text-text-primary"> Gallery</span>
          </h1>

          <p className="text-h3 sm:text-h2 text-text-secondary mb-10 max-w-2xl mx-auto font-source-sans leading-relaxed">
            轻松管理、浏览和分享你的 <span className="text-primary font-semibold">AI 生成</span>{' '}
            作品
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <div className="glass-card px-5 py-2.5 neon-glow">
              <span className="font-outfit font-bold text-xl text-primary mr-2">{totalFiles}</span>
              <span className="text-small text-text-secondary">个文件</span>
            </div>
            <div className="w-px h-8 bg-glass-border hidden sm:block" />
            <div className="glass-card px-5 py-2.5 neon-glow-secondary">
              <span className="font-outfit font-bold text-xl text-secondary mr-2">
                {totalSources}
              </span>
              <span className="text-small text-text-secondary">个来源</span>
            </div>
          </div>

          <div className="max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Input
              variant="search"
              placeholder="搜索标题、描述、标签..."
              value={searchQuery}
              onChange={e => onSearchChange(e.target.value)}
              className="h-12 text-base neon-glow"
            />
            <p className="mt-3 text-tiny text-text-tertiary flex items-center justify-center gap-1">
              <Zap className="w-3 h-3" />
              <span>
                按{' '}
                <kbd className="px-2 py-0.5 bg-surface-800 rounded text-xs font-mono border border-glass-border">
                  Ctrl
                </kbd>{' '}
                +{' '}
                <kbd className="px-2 py-0.5 bg-surface-800 rounded text-xs font-mono border border-glass-border">
                  K
                </kbd>{' '}
                快速搜索
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
