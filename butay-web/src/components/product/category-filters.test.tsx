import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { getCategories } from '@/data/categories';
import { CategoryFilters } from './category-filters';

const { usePathname } = vi.hoisted(() => ({ usePathname: vi.fn() }));
vi.mock('next/navigation', () => ({ usePathname }));

describe('CategoryFilters', () => {
  it('links to All plus every real category', () => {
    usePathname.mockReturnValue('/catalog');
    render(<CategoryFilters />);

    expect(screen.getByRole('link', { name: 'All' })).toHaveAttribute(
      'href',
      '/catalog',
    );
    for (const category of getCategories()) {
      expect(screen.getByRole('link', { name: category.name })).toHaveAttribute(
        'href',
        `/catalog/${category.slug}`,
      );
    }
  });

  it('marks only "All" as current on the catalog root', () => {
    usePathname.mockReturnValue('/catalog');
    render(<CategoryFilters />);
    expect(screen.getByRole('link', { name: 'All' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('marks only the matching category as current, not "All"', () => {
    usePathname.mockReturnValue('/catalog/hoodies');
    render(<CategoryFilters />);
    expect(screen.getByRole('link', { name: 'Hoodies' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(screen.getByRole('link', { name: 'All' })).not.toHaveAttribute(
      'aria-current',
    );
  });
});
