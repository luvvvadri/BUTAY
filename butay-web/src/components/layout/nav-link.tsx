'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { Link } from '@/components/ui/link';
import { cn } from '@/lib/cn';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Composes the base `Link` primitive with route-awareness — current
 * page gets `aria-current="page"` plus a visual active state. Matches
 * the href itself or any nested route under it (e.g. `/catalog` stays
 * active on `/catalog/hoodies`).
 */
export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      tone={isActive ? 'default' : 'muted'}
      className={cn(isActive && 'font-medium', className)}
    >
      {children}
    </Link>
  );
}
