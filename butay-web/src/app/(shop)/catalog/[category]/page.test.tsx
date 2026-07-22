import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const { notFound } = vi.hoisted(() => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  }),
}));
vi.mock('next/navigation', () => ({
  notFound,
  usePathname: () => '/catalog/hoodies',
}));

const { default: CategoryPage } = await import('./page');

describe('CategoryPage', () => {
  it('renders the category name, a breadcrumb, and its active products', async () => {
    render(
      await CategoryPage({ params: Promise.resolve({ category: 'hoodies' }) }),
    );

    expect(
      screen.getByRole('heading', { name: 'Hoodies' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Breadcrumb' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Soft Weight/ })).toHaveAttribute(
      'href',
      '/product/soft-weight',
    );
  });

  it('shows the category filter bar with this category marked current', async () => {
    render(
      await CategoryPage({ params: Promise.resolve({ category: 'hoodies' }) }),
    );
    expect(screen.getByRole('link', { name: 'Hoodies' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(screen.getByRole('link', { name: 'All' })).not.toHaveAttribute(
      'aria-current',
    );
  });

  it('never shows a product from a different category', async () => {
    render(
      await CategoryPage({ params: Promise.resolve({ category: 'hoodies' }) }),
    );
    expect(
      screen.queryByRole('link', { name: /Still Here/ }),
    ).not.toBeInTheDocument();
  });

  it('calls notFound for a slug with no matching category', async () => {
    await expect(
      CategoryPage({ params: Promise.resolve({ category: 'pants' }) }),
    ).rejects.toThrow('NEXT_NOT_FOUND');
    expect(notFound).toHaveBeenCalled();
  });
});
