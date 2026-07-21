import { describe, expect, it } from 'vitest';
import { getCollectionBySlug, getCollections } from './collections';

describe('collections', () => {
  it('includes at least one permanent and one temporary collection', () => {
    const types = getCollections().map((collection) => collection.type);
    expect(types).toContain('permanent');
    expect(types).toContain('temporary');
  });

  it('finds a collection by slug', () => {
    expect(getCollectionBySlug('core')?.type).toBe('permanent');
  });

  it('returns undefined for an unknown slug', () => {
    expect(getCollectionBySlug('nonexistent')).toBeUndefined();
  });
});
