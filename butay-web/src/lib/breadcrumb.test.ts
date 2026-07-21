import { describe, expect, it } from 'vitest';
import { getSkuBySlug } from '@/data/products';
import {
  categoryBreadcrumb,
  collectionBreadcrumb,
  productBreadcrumb,
} from './breadcrumb';

describe('categoryBreadcrumb', () => {
  it('builds a Catalog -> Category trail using the real category name', () => {
    expect(categoryBreadcrumb('hoodies')).toEqual([
      { label: 'Catalog', href: '/catalog' },
      { label: 'Hoodies', href: '/catalog/hoodies' },
    ]);
  });

  it('falls back to the slug when the category does not exist', () => {
    expect(categoryBreadcrumb('pants')).toEqual([
      { label: 'Catalog', href: '/catalog' },
      { label: 'pants', href: '/catalog/pants' },
    ]);
  });
});

describe('collectionBreadcrumb', () => {
  it('builds a Catalog -> Collection trail using the real collection name', () => {
    expect(collectionBreadcrumb('core')).toEqual([
      { label: 'Catalog', href: '/catalog' },
      { label: 'Core Collection', href: '/collections/core' },
    ]);
  });

  it('falls back to the slug when the collection does not exist', () => {
    expect(collectionBreadcrumb('nonexistent')).toEqual([
      { label: 'Catalog', href: '/catalog' },
      { label: 'nonexistent', href: '/collections/nonexistent' },
    ]);
  });
});

describe('productBreadcrumb', () => {
  it('extends the category trail with the product name', () => {
    const sku = getSkuBySlug('still-here');
    if (!sku) throw new Error('fixture sku missing');

    expect(productBreadcrumb(sku)).toEqual([
      { label: 'Catalog', href: '/catalog' },
      { label: 'T-Shirts', href: '/catalog/t-shirts' },
      { label: 'Still Here', href: '/product/still-here' },
    ]);
  });
});
