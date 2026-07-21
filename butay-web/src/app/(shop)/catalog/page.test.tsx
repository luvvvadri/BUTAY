import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { getSkusByStatus } from '@/data/products';
import CatalogPage from './page';

describe('CatalogPage', () => {
  it('lists every active product as a link to its product page', async () => {
    render(await CatalogPage());

    expect(
      screen.getByRole('heading', { name: 'Catalog' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Still Here' })).toHaveAttribute(
      'href',
      '/product/still-here',
    );
  });

  it('does not list archived products', async () => {
    render(await CatalogPage());
    expect(
      screen.queryByRole('link', { name: 'First Draft' }),
    ).not.toBeInTheDocument();
  });

  it('lists exactly the active SKUs the data layer reports', async () => {
    render(await CatalogPage());
    const active = getSkusByStatus('active');
    for (const sku of active) {
      expect(screen.getByRole('link', { name: sku.name })).toBeInTheDocument();
    }
  });
});
