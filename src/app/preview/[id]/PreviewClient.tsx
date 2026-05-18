'use client';

import { useState } from 'react';
import Toolbar from '@/components/preview/toolbar';
import IframeViewer from '@/components/preview/iframe-viewer';
import MetadataPanel from '@/components/preview/metadata-panel';
import { HtmlFile } from '@/types';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

interface PreviewClientProps {
  file: HtmlFile | null;
  loading: boolean;
}

export default function PreviewClient({ file, loading }: PreviewClientProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <p className="text-text-secondary">加载中...</p>
        </div>
      </div>
    );
  }

  if (!file) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-surface-800/50 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🔍</span>
          </div>
          <h1 className="text-h2 text-text-primary mb-2">文件未找到</h1>
          <p className="text-text-secondary mb-6">抱歉，找不到这个文件。它可能被删除或移动了。</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${isFullscreen ? 'fixed inset-0 z-[100]' : ''}`}>
      <Toolbar
        file={file}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      <main
        className={`flex-1 container mx-auto px-4 py-6 ${isFullscreen ? 'h-[calc(100vh-3.5rem)]' : ''}`}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <IframeViewer url={file.url} title={file.title} isFullscreen={isFullscreen} />
          </div>

          {!isFullscreen && <MetadataPanel file={file} />}
        </div>
      </main>
    </div>
  );
}
