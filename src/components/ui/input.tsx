'use client';

import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';
import { Search } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'search';
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', icon, children, ...props }, ref) => {
    const baseStyles =
      'w-full h-11 px-4 bg-glass-bg border border-glass-border rounded-md text-text-primary placeholder:text-text-tertiary transition-all duration-normal focus:outline-none focus:border-primary focus:shadow-glow-primary';

    const variants = {
      default: baseStyles,
      search: cn(baseStyles, 'pl-11'),
    };

    if (variant === 'search') {
      return (
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary pointer-events-none" />
          <input ref={ref} className={cn(variants[variant], className)} {...props} />
        </div>
      );
    }

    return <input ref={ref} className={cn(variants[variant], className)} {...props} />;
  }
);

Input.displayName = 'Input';

export default Input;
