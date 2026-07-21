'use client';

import * as Dialog from '@radix-ui/react-dialog';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from './icon';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  /** Rendered visibly under the title. When omitted, an sr-only fallback keeps Radix's a11y contract satisfied. */
  description?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Wraps @radix-ui/react-dialog (CLAUDE_CODE.md §5: accessible
 * primitives resolved at the library level — focus trap, Escape to
 * close, focus return, ARIA roles) instead of hand-rolling dialog
 * accessibility, which is easy to get subtly wrong.
 */
export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2',
            'bg-background rounded-lg border border-neutral-200 p-6 shadow-lg',
            'focus-visible:outline-none',
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
          {children && <div className="mt-4">{children}</div>}
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
