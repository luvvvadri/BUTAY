/**
 * Joins conditional class names, skipping falsy values. Used by every
 * component instead of ad-hoc string concatenation — CLAUDE_CODE.md
 * §11 (a pattern used three or more times is extracted once).
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}
