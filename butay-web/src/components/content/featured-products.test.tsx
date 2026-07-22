import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { getSkusByVisibility } from '@/data/products';
import { FeaturedProducts } from './featured-products';

describe('FeaturedProducts', () => {
  it('lists every active product with featured message visibility', () => {
    render(<FeaturedProducts />);

    const featured = getSkusByVisibility('featured').filter(
      (sku) => sku.status === 'active',
    );
    expect(featured.length).toBeGreaterThan(0);
    for (const sku of featured) {
      expect(
        screen.getByRole('link', { name: new RegExp(sku.name) }),
      ).toBeInTheDocument();
    }
  });

  it('never lists a subtle or hidden product', () => {
    render(<FeaturedProducts />);
    const nonFeatured = getSkusByVisibility('subtle');
    for (const sku of nonFeatured) {
      expect(
        screen.queryByRole('link', { name: new RegExp(sku.name) }),
      ).not.toBeInTheDocument();
    }
  });
});
