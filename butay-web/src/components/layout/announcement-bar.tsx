import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface AnnouncementBarProps {
  /** No default content — whether Butay uses this slot at all is PENDIENTE DE DEFINIR. */
  children?: ReactNode;
  className?: string;
}

/** Structural slot only. Renders nothing unless content is explicitly passed in — inactive by default. */
export function AnnouncementBar({ children, className }: AnnouncementBarProps) {
  if (!children) {
    return null;
  }

  return (
    <div
      role="note"
      className={cn(
        'text-foreground bg-neutral-100 px-4 py-2 text-center font-sans text-sm',
        className,
      )}
    >
      {children}
    </div>
  );
}
