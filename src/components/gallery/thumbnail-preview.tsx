'use client';

import { useState, useRef, useEffect } from 'react';
import { FileText, Sparkles } from 'lucide-react';

interface ThumbnailPreviewProps {
  url: string;
  title: string;
}

export default function ThumbnailPreview({ url, title }: ThumbnailPreviewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      setIsLoading(false);
      try {
        const doc = iframe.contentDocument;
        if (doc && doc.body) {
          const style = doc.createElement('style');
          style.textContent = `
            * { pointer-events: none !important; }
            body { overflow: hidden !important; }
          `;
          doc.head.appendChild(style);
        }
      } catch {
        // cross-origin restriction, ignore
      }
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    iframe.addEventListener('load', handleLoad);
    iframe.addEventListener('error', handleError);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      iframe.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-800 to-surface-900">
        <div className="relative">
          <FileText className="w-10 h-10 text-surface-600/50" />
          <Sparkles className="w-4 h-4 text-primary/40 absolute -top-1 -right-1 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-800 to-surface-900 z-10">
          <div className="relative">
            <div className="w-10 h-10 skeleton rounded-lg" />
          </div>
        </div>
      )}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          ref={iframeRef}
          src={url}
          title={title}
          sandbox="allow-same-origin"
          loading="lazy"
          className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none border-0"
          style={{ transform: 'scale(0.25)', transformOrigin: 'top left' }}
        />
      </div>
    </>
  );
}
