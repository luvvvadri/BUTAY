import type { Drop } from '@/types/catalog';

/** Drops are optional per collection (Product Strategy §6) — test data. */
const drops: Drop[] = [
  {
    slug: 'slow-down-vol-1',
    name: 'Slow Down — Vol. 1',
    collectionSlug: 'slow-down',
  },
];

export function getDrops(): Drop[] {
  return drops;
}

export function getDropBySlug(slug: string): Drop | undefined {
  return drops.find((drop) => drop.slug === slug);
}
