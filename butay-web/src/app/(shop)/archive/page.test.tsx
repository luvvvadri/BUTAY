import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { getSkusByStatus } from '@/data/products';
import ArchivePage from './page';

describe('ArchivePage', () => {
  it('lists every archived product, kept reachable rather than deleted', async () => {
    render(await ArchivePage());

    expect(
      screen.getByRole('heading', { name: 'Archive' }),
    ).toBeInTheDocument();
    for (const sku of getSkusByStatus('archived')) {
      expect(
        screen.getByRole('link', { name: new RegExp(sku.name) }),
      ).toHaveAttribute('href', `/product/${sku.slug}`);
    }
  });

  it('does not list active products', async () => {
    render(await ArchivePage());
    expect(
      screen.queryByRole('link', { name: /Still Here/ }),
    ).not.toBeInTheDocument();
  });
});
