"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "icon";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", disabled, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-normal focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 disabled:opacity-50 disabled:cursor-not-allowed touch-target";

    const variants = {
      primary: "bg-primary text-white hover:bg-primary-light active:scale-[0.95] shadow-md hover:shadow-lg",
      secondary: "bg-transparent border border-glass-border text-text-primary hover:bg-glass-bg active:scale-[0.95]",
      ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-glass-bg",
      icon: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-glass-bg rounded-full aspect-square p-2",
    };

    const sizes = {
      sm: "h-8 px-3 text-sm gap-2",
      md: "h-10 px-4 text-base gap-2",
      lg: "h-12 px-6 text-lg gap-3",
    };

    const iconSizes = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          variant === "icon" ? iconSizes[size] : sizes[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
