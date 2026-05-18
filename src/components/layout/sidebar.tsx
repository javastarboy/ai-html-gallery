'use client';

import { cn } from '@/lib/utils';
import { SOURCES, Source } from '@/types';
import Badge from '@/components/ui/badge';
import { ChevronDown, Filter } from 'lucide-react';
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
        'glass-card rounded-lg p-4 transition-all duration-slow',
        'w-full lg:w-64 lg:shrink-0',
        isExpanded ? 'h-auto' : 'h-16 overflow-hidden'
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          <h2 className="font-semibold text-text-primary">筛选</h2>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden p-1 hover:bg-glass-bg rounded transition-colors"
        >
          <ChevronDown
            className={cn(
              'w-5 h-5 text-text-secondary transition-transform',
              isExpanded ? 'rotate-180' : ''
            )}
          />
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-6">
          <div>
            <h3 className="text-small font-medium text-text-secondary mb-3">
              来源 ({selectedSources.length}/{SOURCES.length})
            </h3>
            <div className="space-y-2">
              {SOURCES.map(source => (
                <button
                  key={source.id}
                  onClick={() => toggleSource(source.id)}
                  className={cn(
                    'w-full flex items-center gap-3 p-2 rounded-md transition-all',
                    selectedSources.includes(source.id)
                      ? 'bg-primary/10 border border-primary/30'
                      : 'hover:bg-glass-bg border border-transparent'
                  )}
                >
                  <span className="text-lg">{source.icon}</span>
                  <span className="flex-1 text-left text-sm">{source.name}</span>
                  {selectedSources.includes(source.id) && (
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {tags.length > 0 && (
            <div>
              <h3 className="text-small font-medium text-text-secondary mb-3">
                标签 ({selectedTags.length}/{tags.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? 'count' : 'default'}
                    className="cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-glass-border">
            <p className="text-tiny text-text-tertiary">共 {totalFiles} 个文件</p>
          </div>
        </div>
      )}
    </aside>
  );
}
