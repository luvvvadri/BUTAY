import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ContainerSize = 'sm' | 'md' | 'lg' | 'full';

const maxWidthClass: Record<ContainerSize, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  full: 'max-w-none',
};

interface ContainerProps {
  /** HTML element to render. Defaults to a plain wrapper `div`. */
  as?: ElementType;
  /** Max-width step. Defaults to `lg`. */
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}

/** Horizontally centers content with a max-width and responsive side padding. */
export function Container({
  as: Component = 'div',
  size = 'lg',
  className,
  children,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        maxWidthClass[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}
