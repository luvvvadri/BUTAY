'use client';

import * as Dialog from '@radix-ui/react-dialog';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from './icon';

type DrawerSide = 'left' | 'right';

const sideClass: Record<DrawerSide, string> = {
  left: 'left-0 border-r data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0',
  right:
    'right-0 border-l data-[state=closed]:translate-x-full data-[state=open]:translate-x-0',
};

interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  /** Rendered visibly under the title. When omitted, an sr-only fallback keeps Radix's a11y contract satisfied. */
  description?: string;
  side?: DrawerSide;
  children?: ReactNode;
  className?: string;
}

/**
 * Same accessible foundation as `Modal` (Radix Dialog — focus trap,
 * Escape to close, focus return, ARIA) anchored to a screen edge
 * instead of centered, for off-canvas navigation.
 */
export function Drawer({
  open,
  onOpenChange,
  title,
  description,
  side = 'left',
  children,
  className,
}: DrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content
          className={cn(
            'bg-background fixed inset-y-0 w-full max-w-xs overflow-y-auto border-neutral-200 p-6 shadow-lg transition-transform duration-200 ease-out',
            'focus-visible:outline-none',
            sideClass[side],
            className,
          )}
        >
          <Dialog.Title className="text-foreground font-sans text-xl font-semibold">
            {title}
          </Dialog.Title>
          {description ? (
            <Dialog.Description className="mt-1 font-sans text-sm text-neutral-600">
              {description}
            </Dialog.Description>
          ) : (
            <Dialog.Description className="sr-only">{title}</Dialog.Description>
          )}
          {children && <div className="mt-6">{children}</div>}
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Close"
              className="hover:text-foreground focus-visible:ring-accent absolute top-4 right-4 rounded-md p-1 text-neutral-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Icon name="close" size={18} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
