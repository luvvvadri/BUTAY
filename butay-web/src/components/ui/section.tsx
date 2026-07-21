import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { paddingBlockClass, type Spacing } from '@/lib/spacing';
import { Container } from './container';

interface SectionProps {
  as?: ElementType;
  /** Vertical padding step. Defaults to `lg`. */
  spacing?: Spacing;
  /** Wraps the content in a `Container` (centered, max-width). Defaults to `true`. */
  contained?: boolean;
  className?: string;
  children: ReactNode;
}

/** Semantic page section with consistent vertical rhythm. */
export function Section({
  as: Component = 'section',
  spacing = 'lg',
  contained = true,
  className,
  children,
}: SectionProps) {
  return (
    <Component className={cn(paddingBlockClass[spacing], className)}>
      {contained ? <Container>{children}</Container> : children}
    </Component>
  );
}
