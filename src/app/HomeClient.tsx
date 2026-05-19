'use client';

import { useState, useEffect } from 'react';
import { HtmlFile, Source, SortOption } from '@/types';
import Hero from '@/components/gallery/hero';
import FilterBar from '@/components/gallery/filter-bar';
import FileGrid from '@/components/gallery/file-grid';
import Sidebar from '@/components/layout/sidebar';

interface HomeClientProps {
  files: HtmlFile[];
  allTags: string[];
}

export default function HomeClient({ files, allTags }: HomeClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSources, setSelectedSources] = useState<Source[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector<HTMLInputElement>('input[placeholder="搜索文件..."]')?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredFiles = files
    .filter(file => {
      const matchesSearch =
        !searchQuery ||
        file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (file.description && file.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        file.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesSource =
        selectedSources.length === 0 || selectedSources.includes(file.source as Source);

      const matchesTags =
        selectedTags.length === 0 || selectedTags.some(tag => file.tags.includes(tag));

      return matchesSearch && matchesSource && matchesTags;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'newest':
          return new Date(b.created).getTime() - new Date(a.created).getTime();
        case 'oldest':
          return new Date(a.created).getTime() - new Date(b.created).getTime();
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  const uniqueSources = Array.from(new Set(files.map(f => f.source)));
  const totalFiles = files.length;

  return (
    <div className="min-h-screen relative">
      <div className="aurora-bg" />

      <Hero
        totalFiles={totalFiles}
        totalSources={uniqueSources.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="container mx-auto px-4 pb-8 relative z-10">
        <FilterBar
          selectedSources={selectedSources}
          onSourceChange={setSelectedSources}
          sortOption={sortOption}
          onSortChange={setSortOption}
          showFilters={showFilters}
          onToggleFilters={() => setShowFilters(!showFilters)}
        />

        <div className="flex gap-6">
          {showFilters && (
            <Sidebar
              selectedSources={selectedSources}
              onSourceChange={setSelectedSources}
              tags={allTags}
              selectedTags={selectedTags}
              onTagChange={setSelectedTags}
              totalFiles={filteredFiles.length}
            />
          )}

          <div className="flex-1 min-w-0">
            <FileGrid files={filteredFiles} />
          </div>
        </div>
      </div>
    </div>
  );
}
