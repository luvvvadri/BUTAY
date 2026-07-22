import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { gapClass, type Spacing } from '@/lib/spacing';

type GridColumns = 1 | 2 | 3 | 4 | 6;

/** Single column on small screens; the requested column count from `sm:` up. */
const columnsClass: Record<GridColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
};

interface GridProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  columns?: GridColumns;
  gap?: Spacing;
  className?: string;
  children: ReactNode;
}

/** Responsive CSS grid primitive — one column on mobile, up to `columns` on larger screens. */
export function Grid({
  as: Component = 'div',
  columns = 3,
  gap = 'md',
  className,
  children,
  ...props
}: GridProps) {
  return (
    <Component
      className={cn('grid', columnsClass[columns], gapClass[gap], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
