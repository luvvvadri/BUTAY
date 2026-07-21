import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type BadgeVariant = 'neutral' | 'accent' | 'outline';

const variantClass: Record<BadgeVariant, string> = {
  neutral: 'bg-neutral-100 text-foreground',
  accent: 'bg-accent text-accent-foreground',
  outline: 'border border-neutral-300 text-foreground',
};

interface BadgeProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  'className'
> {
  variant?: BadgeVariant;
  className?: string;
  children: ReactNode;
}

/**
 * Generic label/tag primitive — a display atom, not a mechanic. Never
 * used for stock-count or urgency messaging ("solo quedan X"): that's
 * explicitly prohibited (WEB_HANDOFF.md §12), not just discouraged.
 */
export function Badge({
  variant = 'neutral',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 font-sans text-xs font-medium',
        variantClass[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
