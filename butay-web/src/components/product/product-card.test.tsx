import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { Sku } from '@/types/catalog';
import { ProductCard } from './product-card';

const baseSku: Sku = {
  sku: 'TEE-001',
  slug: 'quiet-mornings',
  name: 'Quiet Mornings',
  categorySlug: 't-shirts',
  collectionSlug: 'core',
  status: 'active',
  messageVisibility: 'subtle',
  variants: [{ id: 'v1', size: 'M', color: 'black' }],
};

describe('ProductCard', () => {
  it('links to the product detail page', () => {
    render(<ProductCard sku={baseSku} />);
    expect(
      screen.getByRole('link', { name: /Quiet Mornings/ }),
    ).toHaveAttribute('href', '/product/quiet-mornings');
  });

  it('shows an Archived badge for a retired product', () => {
    render(<ProductCard sku={{ ...baseSku, status: 'archived' }} />);
    expect(screen.getByText('Archived')).toBeInTheDocument();
  });

  it('shows a Featured badge for a featured active product', () => {
    render(<ProductCard sku={{ ...baseSku, messageVisibility: 'featured' }} />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('shows no badge for a subtle active product', () => {
    render(<ProductCard sku={baseSku} />);
    expect(screen.queryByText('Archived')).not.toBeInTheDocument();
    expect(screen.queryByText('Featured')).not.toBeInTheDocument();
  });

  it('renders its name as an h3 (no heading-level skip in grid listings)', () => {
    render(<ProductCard sku={baseSku} />);
    expect(
      screen.getByRole('heading', { level: 3, name: 'Quiet Mornings' }),
    ).toBeInTheDocument();
  });
});
