import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Typography } from './typography';

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

/** Generic empty-result placeholder — no hardcoded copy, reused across catalog/category/collection/archive. */
export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center gap-2 py-16 text-center', className)}>
      <Typography variant="h3">{title}</Typography>
      {description && (
        <Typography variant="body" tone="muted">
          {description}
        </Typography>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
