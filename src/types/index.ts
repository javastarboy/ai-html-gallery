export interface HtmlFile {
  id: string;
  filename: string;
  path: string;
  title: string;
  description?: string;
  source: string;
  tags: string[];
  created: string;
  updated?: string;
  size: number;
  url: string;
}

export interface FileMetadata {
  title: string;
  description?: string;
  source: string;
  tags?: string[];
  created: string;
  updated?: string;
}

export type Source = "openclaw" | "workbuddy" | "codex" | "qoderwork" | "trae-solo" | "other";

export interface SourceInfo {
  id: Source;
  name: string;
  icon: string;
  color: string;
}

export const SOURCES: SourceInfo[] = [
  { id: "openclaw", name: "OpenClaw", icon: "🛠️", color: "#10b981" },
  { id: "workbuddy", name: "WorkBuddy", icon: "🤖", color: "#3b82f6" },
  { id: "codex", name: "Codex", icon: "💻", color: "#8b5cf6" },
  { id: "qoderwork", name: "QoderWork", icon: "🚀", color: "#f59e0b" },
  { id: "trae-solo", name: "Trae Solo", icon: "✨", color: "#ec4899" },
  { id: "other", name: "其他", icon: "📦", color: "#64748b" },
];

export type SortOption = "newest" | "oldest" | "name-asc" | "name-desc";

export interface FilterOptions {
  sources: Source[];
  tags: string[];
  sort: SortOption;
  search: string;
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "icon";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface CardProps {
  file: HtmlFile;
  className?: string;
}
