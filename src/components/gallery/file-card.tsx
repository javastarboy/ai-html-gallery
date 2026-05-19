'use client';

import Link from 'next/link';
import Card from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';
import { HtmlFile } from '@/types';
import { formatDate, getSourceInfo } from '@/lib/utils';
import { Eye, ExternalLink, Calendar, FileText, Sparkles } from 'lucide-react';

interface FileCardProps {
  file: HtmlFile;
  index?: number;
}

export default function FileCard({ file, index = 0 }: FileCardProps) {
  const sourceInfo = getSourceInfo(file.source);

  return (
    <div className="animate-card-enter" style={{ animationDelay: `${index * 60}ms`, opacity: 0 }}>
      <Card className="group overflow-hidden card-shine">
        <div className="aspect-video bg-surface-800/50 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-800 to-surface-900">
            <div className="relative">
              <FileText className="w-10 h-10 text-surface-600/50" />
              <Sparkles className="w-4 h-4 text-primary/40 absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-surface-900/20 to-transparent" />

          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center gap-2">
              <Badge variant="source" source={file.source}>
                {sourceInfo.name}
              </Badge>
            </div>
          </div>

          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-slow flex items-center justify-center opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100">
            <Link href={`/preview/${file.id}`}>
              <Button variant="primary" size="lg" className="neon-glow">
                <Eye className="w-5 h-5 mr-2" />
                预览
              </Button>
            </Link>
          </div>

          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-h4 font-semibold text-text-primary mb-2 line-clamp-1 group-hover:text-primary-light transition-colors duration-normal">
            {file.title}
          </h3>

          {file.description && (
            <p className="text-small text-text-secondary mb-3 line-clamp-2">{file.description}</p>
          )}

          {file.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {file.tags.slice(0, 3).map(tag => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
              {file.tags.length > 3 && <Badge variant="default">+{file.tags.length - 3}</Badge>}
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-glass-border">
            <div className="flex items-center gap-1.5 text-tiny text-text-tertiary">
              <Calendar className="w-3 h-3" />
              {formatDate(file.created)}
            </div>

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
              <Link href={`/preview/${file.id}`}>
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={file.url} target="_blank">
                <Button variant="ghost" size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
