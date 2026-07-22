import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const { notFound } = vi.hoisted(() => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  }),
}));
vi.mock('next/navigation', () => ({ notFound }));

const { default: ProductPage, generateMetadata } = await import('./page');

describe('ProductPage', () => {
  it('renders the product name, breadcrumb, category and collection', async () => {
    render(
      await ProductPage({ params: Promise.resolve({ sku: 'still-here' }) }),
    );

    expect(
      screen.getByRole('heading', { name: 'Still Here' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Breadcrumb' }),
    ).toBeInTheDocument();
    expect(screen.getAllByText('T-Shirts').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Core Collection').length).toBeGreaterThan(0);
  });

  it('renders a placeholder gallery and a variant selector for its size/color options', async () => {
    render(
      await ProductPage({ params: Promise.resolve({ sku: 'still-here' }) }),
    );

    expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: 'S' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'white' })).toBeInTheDocument();
  });

  it('shows status and message visibility as text', async () => {
    render(
      await ProductPage({ params: Promise.resolve({ sku: 'still-here' }) }),
    );

    expect(screen.getByText('Status: active')).toBeInTheDocument();
    expect(
      screen.getByText('Message visibility: featured'),
    ).toBeInTheDocument();
  });

  it('renders a disabled CTA — no cart, no checkout', async () => {
    render(
      await ProductPage({ params: Promise.resolve({ sku: 'still-here' }) }),
    );

    expect(screen.getByRole('button', { name: /Add to bag/ })).toBeDisabled();
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
    expect(screen.getByText('Status: archived')).toBeInTheDocument();
  });

  it('calls notFound for a slug with no matching sku', async () => {
    await expect(
      ProductPage({ params: Promise.resolve({ sku: 'nonexistent' }) }),
    ).rejects.toThrow('NEXT_NOT_FOUND');
    expect(notFound).toHaveBeenCalled();
  });

  it('generates title, description and canonical from real product data', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ sku: 'still-here' }),
    });
    expect(metadata.title).toBe('Still Here');
    expect(metadata.description).toBe('Still Here — T-Shirts at Butay.');
    expect(metadata.alternates?.canonical).toBe('/product/still-here');
  });

  it('falls back to the slug for metadata when no sku matches', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ sku: 'nonexistent' }),
    });
    expect(metadata.title).toBe('nonexistent');
    expect(metadata.description).toBeUndefined();
  });
});
