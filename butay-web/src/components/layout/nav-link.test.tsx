import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { NavLink } from './nav-link';

const { usePathname } = vi.hoisted(() => ({ usePathname: vi.fn() }));
vi.mock('next/navigation', () => ({ usePathname }));

describe('NavLink', () => {
  it('marks the link as the current page on an exact match', () => {
    usePathname.mockReturnValue('/catalog');
    render(<NavLink href="/catalog">Catalog</NavLink>);
    expect(screen.getByRole('link', { name: 'Catalog' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('marks the link as current for a nested route', () => {
    usePathname.mockReturnValue('/catalog/hoodies');
    render(<NavLink href="/catalog">Catalog</NavLink>);
    expect(screen.getByRole('link', { name: 'Catalog' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('does not mark the link as current when the pathname does not match', () => {
    usePathname.mockReturnValue('/archive');
    render(<NavLink href="/catalog">Catalog</NavLink>);
    expect(screen.getByRole('link', { name: 'Catalog' })).not.toHaveAttribute(
      'aria-current',
    );
  });

  it('does not treat an unrelated route sharing a prefix as active', () => {
    usePathname.mockReturnValue('/catalog-sale');
    render(<NavLink href="/catalog">Catalog</NavLink>);
    expect(screen.getByRole('link', { name: 'Catalog' })).not.toHaveAttribute(
      'aria-current',
    );
  });
});
