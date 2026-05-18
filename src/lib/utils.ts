import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function getSourceInfo(source: string) {
  const sources: Record<string, { name: string; icon: string; color: string }> = {
    openclaw: { name: 'OpenClaw', icon: '🛠️', color: '#10b981' },
    workbuddy: { name: 'WorkBuddy', icon: '🤖', color: '#3b82f6' },
    codex: { name: 'Codex', icon: '💻', color: '#8b5cf6' },
    qoderwork: { name: 'QoderWork', icon: '🚀', color: '#f59e0b' },
    'trae-solo': { name: 'Trae Solo', icon: '✨', color: '#ec4899' },
    other: { name: '其他', icon: '📦', color: '#64748b' },
  };
  return sources[source] || sources.other;
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function generateId(path: string): string {
  return Buffer.from(path)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}
