import type { Collection } from '@/types/catalog';

/**
 * Test/fixture collections (DEVELOPMENT_ROADMAP.md, Fase 4) — not real
 * marketing copy. Names are generic placeholders, not approved brand
 * decisions. One permanent line (always available) and one temporary
 * collection, per Product Strategy §5.
 */
const collections: Collection[] = [
  {
    slug: 'core',
    name: 'Core Collection',
    type: 'permanent',
    description: 'Always-available anchor of the catalog.',
  },
  {
    slug: 'slow-down',
    name: 'Slow Down',
    type: 'temporary',
    description: 'Temporary collection — test data.',
  },
];

export function getCollections(): Collection[] {
  return collections;
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}
