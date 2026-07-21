import { describe, expect, it } from 'vitest';
import { getCategories, getCategoryBySlug } from './categories';

describe('categories', () => {
  it('exposes only the launch categories: t-shirts and hoodies', () => {
    const slugs = getCategories().map((category) => category.slug);
    expect(slugs).toEqual(['t-shirts', 'hoodies']);
  });

  it('finds a category by slug', () => {
    expect(getCategoryBySlug('hoodies')?.name).toBe('Hoodies');
  });

  it('returns undefined for an unknown slug', () => {
    expect(getCategoryBySlug('pants')).toBeUndefined();
  });
});
