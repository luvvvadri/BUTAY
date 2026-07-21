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
  /** Exact-path match only, for sibling filter tabs where a nested route shouldn't keep a parent tab active too. Defaults to false (site nav behavior: nested routes stay active). */
  exact?: boolean;
}

/**
 * Composes the base `Link` primitive with route-awareness — current
 * page gets `aria-current="page"` plus a visual active state. By
 * default matches the href itself or any nested route under it (e.g.
 * `/catalog` stays active on `/catalog/hoodies`); pass `exact` to
 * require an exact match instead.
 */
export function NavLink({
  href,
  children,
  className,
  onClick,
  exact = false,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);

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
