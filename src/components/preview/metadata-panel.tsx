"use client";

import { HtmlFile } from "@/types";
import { formatDate, formatFileSize, getSourceInfo } from "@/lib/utils";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { FileText, Calendar, HardDrive, Tag, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MetadataPanelProps {
  file: HtmlFile;
}

export default function MetadataPanel({ file }: MetadataPanelProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sourceInfo = getSourceInfo(file.source);

  return (
    <aside
      className={cn(
        "glass-card rounded-lg transition-all duration-slow overflow-hidden",
        isCollapsed ? "w-12" : "w-full sm:w-72"
      )}
    >
      <div className="p-4 border-b border-glass-border flex items-center justify-between">
        {!isCollapsed && (
          <h3 className="font-semibold text-text-primary flex items-center gap-2">
            <FileText className="w-4 h-4" />
            文件信息
          </h3>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-glass-bg rounded transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-text-secondary" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-text-secondary" />
          )}
        </button>
      </div>

      {!isCollapsed && (
        <div className="p-4 space-y-4">
          <div>
            <label className="text-tiny text-text-tertiary flex items-center gap-1 mb-1">
              <FileText className="w-3 h-3" />
              文件名
            </label>
            <p className="text-sm text-text-primary break-all">{file.filename}</p>
          </div>

          <div>
            <label className="text-tiny text-text-tertiary flex items-center gap-1 mb-1">
              <span className="text-sm">{sourceInfo.icon}</span>
              来源
            </label>
            <Badge variant="source" source={file.source}>
              {sourceInfo.name}
            </Badge>
          </div>

          {file.tags.length > 0 && (
            <div>
              <label className="text-tiny text-text-tertiary flex items-center gap-1 mb-2">
                <Tag className="w-3 h-3" />
                标签
              </label>
              <div className="flex flex-wrap gap-2">
                {file.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="text-tiny text-text-tertiary flex items-center gap-1 mb-1">
              <Calendar className="w-3 h-3" />
              创建日期
            </label>
            <p className="text-sm text-text-primary">{formatDate(file.created)}</p>
          </div>

          {file.updated && (
            <div>
              <label className="text-tiny text-text-tertiary flex items-center gap-1 mb-1">
                <Calendar className="w-3 h-3" />
                更新日期
              </label>
              <p className="text-sm text-text-primary">{formatDate(file.updated)}</p>
            </div>
          )}

          <div>
            <label className="text-tiny text-text-tertiary flex items-center gap-1 mb-1">
              <HardDrive className="w-3 h-3" />
              文件大小
            </label>
            <p className="text-sm text-text-primary">{formatFileSize(file.size)}</p>
          </div>

          <div className="pt-4 border-t border-glass-border">
            <a
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="secondary" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                查看源文件
              </Button>
            </a>
          </div>
        </div>
      )}
    </aside>
  );
}
