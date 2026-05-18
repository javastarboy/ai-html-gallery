'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';
import { getSourceInfo } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'source' | 'count';
  source?: string;
  color?: string;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', source, color, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center h-6 px-3 text-tiny font-medium rounded-full';

    const variants = {
      default: 'bg-surface-700/50 text-text-secondary border border-glass-border',
      source: '',
      count: 'bg-primary/20 text-primary border border-primary/30',
    };

    const sourceStyles = source ? `text-white` : '';

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sourceStyles, className)}
        style={
          source && variant === 'source'
            ? {
                backgroundColor: `${getSourceInfo(source).color}20`,
                color: getSourceInfo(source).color,
                borderColor: `${getSourceInfo(source).color}40`,
              }
            : {}
        }
        {...props}
      >
        {variant === 'source' && source && (
          <span className="mr-1">{getSourceInfo(source).icon}</span>
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
