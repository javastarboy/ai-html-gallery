'use client';

import Link from 'next/link';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import { Search, Github, Plus, Sparkles } from 'lucide-react';

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export default function Header({ searchQuery = '', onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 glass-card border-t-0 border-l-0 border-r-0 rounded-none">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-lg font-outfit neon-glow transition-shadow duration-slow group-hover:shadow-glow-primary">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-outfit font-semibold text-text-primary group-hover:text-primary-light transition-colors">
              AI HTML Gallery
            </h1>
            <p className="text-tiny text-text-tertiary">个人作品集</p>
          </div>
        </Link>

        <div className="flex-1 max-w-md">
          <Input
            variant="search"
            placeholder="搜索文件..."
            value={searchQuery}
            onChange={e => onSearchChange?.(e.target.value)}
            className="hidden sm:block"
          />
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/javastarboy/ai-html-gallery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Github className="w-4 h-4" />
              <span className="hidden lg:inline">GitHub</span>
            </Button>
          </Link>
          <Button
            variant="primary"
            size="sm"
            onClick={() => alert('请在 public/files 目录下添加 HTML 文件')}
            className="neon-glow"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">添加文件</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
