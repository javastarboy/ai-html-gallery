'use client';

import Link from 'next/link';
import Button from '@/components/ui/button';
import { HtmlFile } from '@/types';
import { ArrowLeft, Share2, Maximize2, Minimize2, Settings } from 'lucide-react';
import { useState } from 'react';

interface ToolbarProps {
  file: HtmlFile;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export default function Toolbar({ file, isFullscreen, onToggleFullscreen }: ToolbarProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="glass-card border-t-0 border-l-0 border-r-0 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">返回</span>
            </Button>
          </Link>

          <div className="h-6 w-px bg-glass-border hidden sm:block" />

          <h2 className="text-base font-semibold text-text-primary line-clamp-1">{file.title}</h2>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">{copied ? '已复制!' : '分享'}</span>
          </Button>

          <Button variant="ghost" size="sm" onClick={onToggleFullscreen}>
            {isFullscreen ? (
              <>
                <Minimize2 className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">退出全屏</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">全屏</span>
              </>
            )}
          </Button>

          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            <Settings className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">设置</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
