import { ArrowRight, Menu, X, type LucideIcon } from 'lucide-react';

/**
 * Icon wrapper — FRONTEND_ARCHITECTURE.md §14.
 *
 * Icons are consumed by name (`<Icon name="arrow-right" />`), never by
 * importing lucide-react directly in a component. The registry below is
 * the only place that knows about the underlying icon library, so
 * swapping it for a different set in Fase 4 (Identidad Visual / Design
 * System) touches this one file, not every call site.
 *
 * Entries are added only as real usages need them, never
 * speculatively — "close" was added for the Modal's dismiss button,
 * "menu" for the mobile navigation toggle.
 *
 * Defaults to `aria-hidden` (decorative) unless `label` is provided, in
 * which case it renders as a labeled graphic for assistive technology —
 * CLAUDE_CODE.md §15 (accessibility).
 */

const icons = {
  'arrow-right': ArrowRight,
  close: X,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  label?: string;
  size?: number;
  className?: string;
}

export function Icon({ name, label, size = 20, className }: IconProps) {
  const IconComponent = icons[name];

  return (
    <IconComponent
      size={size}
      strokeWidth={1.75}
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
