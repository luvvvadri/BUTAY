import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * Semantic text presets. Uses the provisional font tokens from
 * tokens.css (Geist, marked explicitly provisional) — no typeface
 * decision is made here; this only fixes size/weight/leading, which
 * stay valid once a real typeface replaces the placeholder in Fase 4.
 */
type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'bodyLarge'
  | 'body'
  | 'bodySmall'
  | 'caption';

type TypographyTone = 'default' | 'muted' | 'accent';

const variantClass: Record<TypographyVariant, string> = {
  display: 'text-5xl font-semibold leading-tight tracking-tight',
  h1: 'text-4xl font-semibold leading-tight tracking-tight',
  h2: 'text-3xl font-semibold leading-snug',
  h3: 'text-2xl font-semibold leading-snug',
  h4: 'text-xl font-semibold leading-snug',
  bodyLarge: 'text-lg font-normal leading-relaxed',
  body: 'text-base font-normal leading-relaxed',
  bodySmall: 'text-sm font-normal leading-relaxed',
  caption: 'text-xs font-normal leading-normal tracking-wide',
};

/** Default semantic tag per variant — overridable via `as` when visual size and heading level must differ. */
const defaultTag: Record<TypographyVariant, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  bodyLarge: 'p',
  body: 'p',
  bodySmall: 'p',
  caption: 'span',
};

const toneClass: Record<TypographyTone, string> = {
  default: 'text-foreground',
  muted: 'text-neutral-600 dark:text-neutral-400',
  accent: 'text-accent',
};

interface TypographyProps {
  variant?: TypographyVariant;
  tone?: TypographyTone;
  /** Overrides the element rendered — use to keep correct heading order (a11y) independent of visual size. */
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Text primitive covering headings, body copy, and captions with a consistent scale. */
export function Typography({
  variant = 'body',
  tone = 'default',
  as,
  className,
  children,
}: TypographyProps) {
  const Component = as ?? defaultTag[variant];
  return (
    <Component
      className={cn(
        'font-sans',
        variantClass[variant],
        toneClass[tone],
        className,
      )}
    >
      {children}
    </Component>
  );
}
