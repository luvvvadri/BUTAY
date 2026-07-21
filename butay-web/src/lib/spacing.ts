/**
 * Shared spacing scale for layout primitives (Stack, Grid, Section).
 * Tailwind classes are listed literally (not interpolated) so the JIT
 * scanner can find them — CLAUDE_CODE.md §13 (tokens centralized, no
 * arbitrary values).
 */

export type Spacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const gapClass: Record<Spacing, string> = {
  none: 'gap-0',
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-10',
  xl: 'gap-16',
};

export const paddingBlockClass: Record<Spacing, string> = {
  none: 'py-0',
  xs: 'py-4',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-20',
  xl: 'py-32',
};
