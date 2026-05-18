'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass';
  hoverable?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverable = true, children, ...props }, ref) => {
    const baseStyles = 'rounded-lg overflow-hidden';

    const variants = {
      default: 'bg-surface-800/50 backdrop-blur-sm border border-glass-border shadow-md',
      glass: 'glass-card',
    };

    const hoverStyles = hoverable
      ? 'transition-all duration-normal hover:border-white/15 hover:shadow-lg hover:-translate-y-1'
      : '';

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
