'use client';

import { HtmlFile } from '@/types';
import FileCard from './file-card';
import { FileText, Sparkles } from 'lucide-react';

interface FileGridProps {
  files: HtmlFile[];
}

export default function FileGrid({ files }: FileGridProps) {
  if (files.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in">
        <div className="w-20 h-20 rounded-2xl bg-glass-bg border border-glass-border flex items-center justify-center mb-6 neon-glow">
          <Sparkles className="w-10 h-10 text-primary/60" />
        </div>
        <h3 className="text-h3 text-text-primary mb-2 font-outfit">暂无文件</h3>
        <p className="text-small text-text-secondary max-w-md">
          还没有上传任何文件。点击右上角的「添加文件」按钮开始上传你的 AI 生成作品。
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
      {files.map((file, index) => (
        <FileCard key={file.id} file={file} index={index} />
      ))}
    </div>
  );
}
