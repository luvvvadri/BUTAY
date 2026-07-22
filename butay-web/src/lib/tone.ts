/** Shared text tone scale — used identically by `Typography` and `Link` (found duplicated in both during the Fase 7 audit). */
export type Tone = 'default' | 'muted' | 'accent';

export const toneClass: Record<Tone, string> = {
  default: 'text-foreground',
  muted: 'text-neutral-600 dark:text-neutral-400',
  accent: 'text-accent',
};
