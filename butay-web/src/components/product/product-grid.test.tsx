import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { Sku } from '@/types/catalog';
import { ProductGrid } from './product-grid';

const sku: Sku = {
  sku: 'TEE-001',
  slug: 'quiet-mornings',
  name: 'Quiet Mornings',
  categorySlug: 't-shirts',
  collectionSlug: 'core',
  status: 'active',
  messageVisibility: 'subtle',
  variants: [{ id: 'v1', size: 'M', color: 'black' }],
};

describe('ProductGrid', () => {
  it('renders a card for every sku', () => {
    render(<ProductGrid skus={[sku]} />);
    expect(
      screen.getByRole('link', { name: /Quiet Mornings/ }),
    ).toBeInTheDocument();
  });

  it('shows the default empty state when there are no products', () => {
    render(<ProductGrid skus={[]} />);
    expect(screen.getByText('No products yet')).toBeInTheDocument();
  });

  it('shows a custom empty state message when provided', () => {
    render(
      <ProductGrid
        skus={[]}
        emptyTitle="Nothing archived yet"
        emptyDescription="Retired products will appear here."
      />,
    );
    expect(screen.getByText('Nothing archived yet')).toBeInTheDocument();
  });
});
