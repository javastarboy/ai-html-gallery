"use client";

import { HtmlFile } from "@/types";
import FileCard from "./file-card";
import { FileText } from "lucide-react";

interface FileGridProps {
  files: HtmlFile[];
}

export default function FileGrid({ files }: FileGridProps) {
  if (files.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-24 h-24 rounded-full bg-surface-800/50 flex items-center justify-center mb-6">
          <FileText className="w-12 h-12 text-surface-600" />
        </div>
        <h3 className="text-h3 text-text-primary mb-2">暂无文件</h3>
        <p className="text-text-secondary max-w-md">
          还没有上传任何文件。点击右上角的"添加文件"按钮开始上传你的 AI 生成作品。
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {files.map((file, index) => (
        <div
          key={file.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <FileCard file={file} />
        </div>
      ))}
    </div>
  );
}
