import { describe, expect, it } from 'vitest';
import type { MessageVisibility } from '@/types/catalog';
import { getCategoryBySlug } from './categories';
import { getCollectionBySlug } from './collections';
import { getDropBySlug } from './drops';
import {
  getSkuBySlug,
  getSkus,
  getSkusByCategory,
  getSkusByCollection,
  getSkusByStatus,
  getSkusByVisibility,
} from './products';

describe('products', () => {
  it('ships between 8 and 15 launch references (Product Strategy §4)', () => {
    expect(getSkus().length).toBeGreaterThanOrEqual(8);
    expect(getSkus().length).toBeLessThanOrEqual(15);
  });

  it('references only categories, collections and drops that exist', () => {
    for (const sku of getSkus()) {
      expect(getCategoryBySlug(sku.categorySlug)).toBeDefined();
      expect(getCollectionBySlug(sku.collectionSlug)).toBeDefined();
      if (sku.dropSlug) {
        expect(getDropBySlug(sku.dropSlug)).toBeDefined();
      }
    }
  });

  it('covers all three message visibility levels', () => {
    const levels = new Set(getSkus().map((sku) => sku.messageVisibility));
    const expected: MessageVisibility[] = ['featured', 'subtle', 'hidden'];
    for (const level of expected) {
      expect(levels.has(level)).toBe(true);
    }
  });

  it('includes at least one archived product, reachable and not deleted', () => {
    const archived = getSkusByStatus('archived');
    expect(archived.length).toBeGreaterThan(0);
    expect(getSkus()).toEqual(expect.arrayContaining(archived));
  });

  it('filters by category', () => {
    const hoodies = getSkusByCategory('hoodies');
    expect(hoodies.length).toBeGreaterThan(0);
    expect(hoodies.every((sku) => sku.categorySlug === 'hoodies')).toBe(true);
  });

  it('filters by collection', () => {
    const core = getSkusByCollection('core');
    expect(core.length).toBeGreaterThan(0);
    expect(core.every((sku) => sku.collectionSlug === 'core')).toBe(true);
  });

  it('filters by status', () => {
    const active = getSkusByStatus('active');
    expect(active.every((sku) => sku.status === 'active')).toBe(true);
  });

  it('filters by message visibility', () => {
    const featured = getSkusByVisibility('featured');
    expect(featured.length).toBeGreaterThan(0);
    expect(featured.every((sku) => sku.messageVisibility === 'featured')).toBe(
      true,
    );
  });

  it('finds a sku by slug', () => {
    expect(getSkuBySlug('still-here')?.sku).toBe('TEE-002');
  });

  it('returns undefined for an unknown slug', () => {
    expect(getSkuBySlug('nonexistent')).toBeUndefined();
  });

  it('gives every sku at least one variant', () => {
    expect(getSkus().every((sku) => sku.variants.length > 0)).toBe(true);
  });
});
