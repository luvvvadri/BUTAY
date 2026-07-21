import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { gapClass, type Spacing } from '@/lib/spacing';

type StackDirection = 'row' | 'column';
type StackAlign = 'start' | 'center' | 'end' | 'stretch';
type StackJustify = 'start' | 'center' | 'end' | 'between';

const directionClass: Record<StackDirection, string> = {
  row: 'flex-row',
  column: 'flex-col',
};

const alignClass: Record<StackAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyClass: Record<StackJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
};

interface StackProps {
  as?: ElementType;
  /** `column` (default) stacks vertically, `row` lays out horizontally. */
  direction?: StackDirection;
  gap?: Spacing;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
  className?: string;
  children: ReactNode;
}

/** Flex layout primitive for stacking children with a consistent gap. */
export function Stack({
  as: Component = 'div',
  direction = 'column',
  gap = 'md',
  align,
  justify,
  wrap = false,
  className,
  children,
}: StackProps) {
  return (
    <Component
      className={cn(
        'flex',
        directionClass[direction],
        gapClass[gap],
        align && alignClass[align],
        justify && justifyClass[justify],
        wrap && 'flex-wrap',
        className,
      )}
    >
      {children}
    </Component>
  );
}
