import type { AnchorHTMLAttributes, ReactNode } from 'react';
import NextLink from 'next/link';
import { cn } from '@/lib/cn';
import { toneClass, type Tone } from '@/lib/tone';

interface LinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'className'
> {
  href: string;
  tone?: Tone;
  /** Underline on hover only (default) or always visible. */
  underline?: 'hover' | 'always';
  className?: string;
  children: ReactNode;
}

const isExternal = (href: string) => /^https?:\/\//.test(href);

/**
 * Uses next/link for internal routes (client-side navigation) and a
 * plain, safely-`rel`'d anchor for external URLs — callers never have
 * to remember `target`/`rel` themselves.
 */
export function Link({
  href,
  tone = 'default',
  underline = 'hover',
  className,
  children,
  ...props
}: LinkProps) {
  const classes = cn(
    'underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm',
    underline === 'always' ? 'underline' : 'hover:underline',
    toneClass[tone],
    className,
  );

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} {...props}>
      {children}
    </NextLink>
  );
}
