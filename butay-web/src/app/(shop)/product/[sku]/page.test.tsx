import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const { notFound } = vi.hoisted(() => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  }),
}));
vi.mock('next/navigation', () => ({ notFound }));

const { default: ProductPage } = await import('./page');

describe('ProductPage', () => {
  it('renders the product name, breadcrumb, and its variants', async () => {
    render(
      await ProductPage({ params: Promise.resolve({ sku: 'still-here' }) }),
    );

    expect(
      screen.getByRole('heading', { name: 'Still Here' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Breadcrumb' }),
    ).toBeInTheDocument();
    expect(screen.getByText(/S — white/)).toBeInTheDocument();
  });

  it('does not show an Archived badge for an active product', async () => {
    render(
      await ProductPage({ params: Promise.resolve({ sku: 'still-here' }) }),
    );
    expect(screen.queryByText('Archived')).not.toBeInTheDocument();
  });

  it('stays reachable and shows an Archived badge for a retired product', async () => {
    render(
      await ProductPage({ params: Promise.resolve({ sku: 'first-draft' }) }),
    );

    expect(
      screen.getByRole('heading', { name: 'First Draft' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Archived')).toBeInTheDocument();
  });

  it('calls notFound for a slug with no matching sku', async () => {
    await expect(
      ProductPage({ params: Promise.resolve({ sku: 'nonexistent' }) }),
    ).rejects.toThrow('NEXT_NOT_FOUND');
    expect(notFound).toHaveBeenCalled();
  });
});
