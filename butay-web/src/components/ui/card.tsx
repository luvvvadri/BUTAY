import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type CardPadding = 'none' | 'sm' | 'md' | 'lg';

const paddingClass: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  padding?: CardPadding;
  /** Adds hover/focus affordance for cards that are themselves interactive (e.g. wrapped in a Link). */
  interactive?: boolean;
  className?: string;
  children: ReactNode;
}

/** Generic bordered content container. Carries no catalog or brand knowledge. */
export function Card({
  as: Component = 'div',
  padding = 'md',
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        'bg-background rounded-lg border border-neutral-200',
        interactive &&
          'focus-visible:ring-accent transition-colors hover:border-neutral-300 hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        paddingClass[padding],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
