import { cn } from '@/lib/cn';
import { Typography } from './typography';

interface SectionHeaderProps {
  /** Small label above the title (e.g. a section kicker). Purely presentational — carries no brand copy itself. */
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

/** Brand/catalog-agnostic heading block reused at the top of any page section. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {eyebrow && (
        <Typography variant="caption" tone="accent">
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h2">{title}</Typography>
      {description && (
        <Typography tone="muted" className="max-w-2xl">
          {description}
        </Typography>
      )}
    </div>
  );
}
