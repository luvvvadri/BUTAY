import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { getCollections } from '@/data/collections';
import { getSkusByVisibility } from '@/data/products';
import Home from './page';

describe('Home', () => {
  it('renders the hero, values, featured collections/products and a closing CTA', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'What Butay stands for' }),
    ).toBeInTheDocument();

    for (const collection of getCollections()) {
      expect(
        screen.getByRole('link', { name: new RegExp(collection.name) }),
      ).toBeInTheDocument();
    }

    const featured = getSkusByVisibility('featured').filter(
      (sku) => sku.status === 'active',
    );
    for (const sku of featured) {
      expect(
        screen.getByRole('link', { name: new RegExp(sku.name) }),
      ).toBeInTheDocument();
    }

    expect(
      screen.getAllByRole('link', { name: /catalog/i }).length,
    ).toBeGreaterThan(0);
  });
});
