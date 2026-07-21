import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { getCollections } from '@/data/collections';
import { FeaturedCollections } from './featured-collections';

describe('FeaturedCollections', () => {
  it('lists every collection from the data layer', () => {
    render(<FeaturedCollections />);
    for (const collection of getCollections()) {
      expect(
        screen.getByRole('link', { name: new RegExp(collection.name) }),
      ).toHaveAttribute('href', `/collections/${collection.slug}`);
    }
  });
});
