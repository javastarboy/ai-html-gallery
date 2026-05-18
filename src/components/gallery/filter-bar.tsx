"use client";

import { cn } from "@/lib/utils";
import { Source, SortOption } from "@/types";
import { SOURCES } from "@/types";
import Button from "@/components/ui/button";
import { ArrowUpDown, ArrowUp, ArrowDown, SortAsc } from "lucide-react";
import { useState } from "react";

interface FilterBarProps {
  selectedSources: Source[];
  onSourceChange: (sources: Source[]) => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  showFilters?: boolean;
  onToggleFilters?: () => void;
}

export default function FilterBar({
  selectedSources,
  onSourceChange,
  sortOption,
  onSortChange,
  showFilters = true,
  onToggleFilters,
}: FilterBarProps) {
  const [showSortMenu, setShowSortMenu] = useState(false);

  const toggleSource = (source: Source) => {
    if (selectedSources.includes(source)) {
      onSourceChange(selectedSources.filter((s) => s !== source));
    } else {
      onSourceChange([...selectedSources, source]);
    }
  };

  const sortOptions: { value: SortOption; label: string; icon: React.ReactNode }[] = [
    { value: "newest", label: "最新优先", icon: <ArrowDown className="w-4 h-4" /> },
    { value: "oldest", label: "最早优先", icon: <ArrowUp className="w-4 h-4" /> },
    { value: "name-asc", label: "名称 A-Z", icon: <SortAsc className="w-4 h-4" /> },
    { value: "name-desc", label: "名称 Z-A", icon: <SortAsc className="w-4 h-4 rotate-180" /> },
  ];

  const currentSort = sortOptions.find((opt) => opt.value === sortOption);

  return (
    <div className="glass-card p-4 mb-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          {onToggleFilters && (
            <Button
              variant={showFilters ? "secondary" : "ghost"}
              size="sm"
              onClick={onToggleFilters}
            >
              筛选
            </Button>
          )}

          <div className="flex items-center gap-2 flex-wrap">
            {SOURCES.map((source) => (
              <button
                key={source.id}
                onClick={() => toggleSource(source.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-small transition-all border",
                  selectedSources.includes(source.id)
                    ? "text-white border-transparent"
                    : "text-text-secondary border-glass-border hover:border-white/20 bg-glass-bg"
                )}
                style={
                  selectedSources.includes(source.id)
                    ? { backgroundColor: source.color, borderColor: source.color }
                    : {}
                }
              >
                <span>{source.icon}</span>
                <span className="hidden sm:inline">{source.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSortMenu(!showSortMenu)}
          >
            <ArrowUpDown className="w-4 h-4" />
            <span className="hidden sm:inline ml-2">{currentSort?.label}</span>
          </Button>

          {showSortMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowSortMenu(false)}
              />
              <div className="absolute right-0 mt-2 w-48 glass-card rounded-lg shadow-xl z-20 py-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortChange(option.value);
                      setShowSortMenu(false);
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors",
                      sortOption === option.value
                        ? "text-primary bg-primary/10"
                        : "text-text-secondary hover:text-text-primary hover:bg-glass-bg"
                    )}
                  >
                    {option.icon}
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
