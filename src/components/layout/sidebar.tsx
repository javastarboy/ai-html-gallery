'use client';

import { cn } from '@/lib/utils';
import { SOURCES, Source } from '@/types';
import Badge from '@/components/ui/badge';
import { ChevronDown, SlidersHorizontal, Check } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  selectedSources: Source[];
  onSourceChange: (sources: Source[]) => void;
  tags: string[];
  selectedTags: string[];
  onTagChange: (tags: string[]) => void;
  totalFiles: number;
}

export default function Sidebar({
  selectedSources,
  onSourceChange,
  tags,
  selectedTags,
  onTagChange,
  totalFiles,
}: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSource = (source: Source) => {
    if (selectedSources.includes(source)) {
      onSourceChange(selectedSources.filter(s => s !== source));
    } else {
      onSourceChange([...selectedSources, source]);
    }
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagChange([...selectedTags, tag]);
    }
  };

  return (
    <aside
      className={cn(
        'glass-card rounded-xl p-4 transition-all duration-slow',
        'w-full lg:w-64 lg:shrink-0',
        isExpanded ? 'h-auto' : 'h-14 overflow-hidden'
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-primary" />
          <h2 className="font-outfit font-semibold text-text-primary">筛选</h2>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden p-1.5 hover:bg-glass-bg rounded-md transition-colors duration-normal"
        >
          <ChevronDown
            className={cn(
              'w-4 h-4 text-text-secondary transition-transform duration-normal',
              isExpanded ? 'rotate-180' : ''
            )}
          />
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <h3 className="text-small font-medium text-text-secondary mb-2.5">
              来源 ({selectedSources.length}/{SOURCES.length})
            </h3>
            <div className="space-y-1.5">
              {SOURCES.map(source => (
                <button
                  key={source.id}
                  onClick={() => toggleSource(source.id)}
                  className={cn(
                    'w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-normal cursor-pointer',
                    selectedSources.includes(source.id)
                      ? 'bg-primary/10 border border-primary/20'
                      : 'hover:bg-glass-bg border border-transparent'
                  )}
                >
                  <span className="text-base">{source.icon}</span>
                  <span className="flex-1 text-left text-small">{source.name}</span>
                  {selectedSources.includes(source.id) && (
                    <Check className="w-3.5 h-3.5 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {tags.length > 0 && (
            <div>
              <h3 className="text-small font-medium text-text-secondary mb-2.5">
                标签 ({selectedTags.length}/{tags.length})
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {tags.map(tag => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? 'count' : 'default'}
                    className="cursor-pointer hover:scale-105 transition-transform duration-fast"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-glass-border">
            <div className="flex items-center justify-between">
              <p className="text-tiny text-text-tertiary">
                共 <span className="text-primary font-semibold">{totalFiles}</span> 个文件
              </p>
              {selectedSources.length + selectedTags.length > 0 && (
                <button
                  onClick={() => {
                    onSourceChange([]);
                    onTagChange([]);
                  }}
                  className="text-tiny text-primary hover:text-primary-light transition-colors cursor-pointer"
                >
                  清除筛选
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
