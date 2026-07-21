import type { LucideIcon } from 'lucide-react';

/**
 * Icon wrapper — FRONTEND_ARCHITECTURE.md §14.
 *
 * Every icon in the app is consumed through this component instead of
 * importing lucide-react directly, so the icon set can be swapped in one
 * place if Fase 4 (Identidad Visual / Design System) requires a
 * different one.
 *
 * Defaults to `aria-hidden` (decorative) unless `label` is provided, in
 * which case it renders as a labeled graphic for assistive technology —
 * CLAUDE_CODE.md §15 (accessibility).
 */

interface IconProps {
  icon: LucideIcon;
  label?: string;
  size?: number;
  className?: string;
}

export function Icon({
  icon: LucideIconComponent,
  label,
  size = 20,
  className,
}: IconProps) {
  return (
    <LucideIconComponent
      size={size}
      strokeWidth={1.75}
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
