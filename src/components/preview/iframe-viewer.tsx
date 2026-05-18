'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface IframeViewerProps {
  url: string;
  title: string;
  isFullscreen?: boolean;
}

export default function IframeViewer({ url, title, isFullscreen = false }: IframeViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] bg-surface-900/50 rounded-lg p-8">
        <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center mb-4">
          <span className="text-3xl">⚠️</span>
        </div>
        <h3 className="text-h3 text-text-primary mb-2">加载失败</h3>
        <p className="text-text-secondary text-center max-w-md mb-4">
          无法加载此文件。请检查文件是否存在或格式是否正确。
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-light transition-colors"
        >
          直接打开文件 →
        </a>
      </div>
    );
  }

  return (
    <div
      className={`relative bg-surface-900/50 rounded-lg overflow-hidden ${isFullscreen ? 'h-[calc(100vh-3.5rem)]' : 'h-[600px]'}`}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-900/80 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <p className="text-text-secondary text-sm">加载中...</p>
          </div>
        </div>
      )}

      <iframe
        src={url}
        title={title}
        className="w-full h-full border-0"
        onLoad={handleLoad}
        onError={handleError}
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}
