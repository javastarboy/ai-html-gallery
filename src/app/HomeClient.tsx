'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/gallery/hero';
import FilterBar from '@/components/gallery/filter-bar';
import FileGrid from '@/components/gallery/file-grid';
import Sidebar from '@/components/layout/sidebar';
import { HtmlFile, Source, SortOption } from '@/types';

interface HomeClientProps {
  initialFiles: HtmlFile[];
  initialTags: string[];
}

export default function HomeClient({ initialFiles, initialTags }: HomeClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSources, setSelectedSources] = useState<Source[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [showSidebar, setShowSidebar] = useState(true);

  const filteredFiles = useMemo(() => {
    let result = [...initialFiles];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        file =>
          file.title.toLowerCase().includes(query) ||
          file.description?.toLowerCase().includes(query) ||
          file.tags.some(tag => tag.toLowerCase().includes(query)) ||
          file.filename.toLowerCase().includes(query)
      );
    }

    if (selectedSources.length > 0) {
      result = result.filter(file => selectedSources.includes(file.source as Source));
    }

    if (selectedTags.length > 0) {
      result = result.filter(file => selectedTags.some(tag => file.tags.includes(tag)));
    }

    result.sort((a, b) => {
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

    return result;
  }, [initialFiles, searchQuery, selectedSources, selectedTags, sortOption]);

  const uniqueSources = Array.from(new Set(initialFiles.map(f => f.source)));

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <Hero
          totalFiles={initialFiles.length}
          totalSources={uniqueSources.length}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <div className="flex flex-col lg:flex-row gap-6">
          {showSidebar && (
            <Sidebar
              selectedSources={selectedSources}
              onSourceChange={setSelectedSources}
              tags={initialTags}
              selectedTags={selectedTags}
              onTagChange={setSelectedTags}
              totalFiles={filteredFiles.length}
            />
          )}

          <div className="flex-1">
            <FilterBar
              selectedSources={selectedSources}
              onSourceChange={setSelectedSources}
              sortOption={sortOption}
              onSortChange={setSortOption}
              showFilters={showSidebar}
              onToggleFilters={() => setShowSidebar(!showSidebar)}
            />

            <FileGrid files={filteredFiles} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
