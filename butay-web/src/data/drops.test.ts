import { describe, expect, it } from 'vitest';
import { getCollectionBySlug } from './collections';
import { getDropBySlug, getDrops } from './drops';

describe('drops', () => {
  it('points to a collection that actually exists', () => {
    for (const drop of getDrops()) {
      expect(getCollectionBySlug(drop.collectionSlug)).toBeDefined();
    }
  });

  it('finds a drop by slug', () => {
    expect(getDropBySlug('slow-down-vol-1')?.collectionSlug).toBe('slow-down');
  });

  it('returns undefined for an unknown slug', () => {
    expect(getDropBySlug('nonexistent')).toBeUndefined();
  });
});
