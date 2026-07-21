import type { Category } from '@/types/catalog';

/** Launch categories only — t-shirts and hoodies (Product Strategy §4). */
const categories: Category[] = [
  { slug: 't-shirts', name: 'T-Shirts' },
  { slug: 'hoodies', name: 'Hoodies' },
];

export function getCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
