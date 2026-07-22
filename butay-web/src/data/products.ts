import type { MessageVisibility, ProductStatus, Sku } from '@/types/catalog';

/**
 * Test/fixture catalog (DEVELOPMENT_ROADMAP.md, Fase 4) — 10 fictional
 * SKUs across both launch categories. Names and messages are
 * placeholders, not approved marketing copy. Sizes are generic
 * placeholder values (S/M/L/XL) — fit/silueta/tallaje is PENDIENTE DE
 * DEFINIR (Product Strategy §4); nothing here asserts that decision.
 */
const skus: Sku[] = [
  {
    sku: 'TEE-001',
    slug: 'quiet-mornings',
    name: 'Quiet Mornings',
    categorySlug: 't-shirts',
    collectionSlug: 'core',
    status: 'active',
    messageVisibility: 'subtle',
    variants: [
      { id: 'TEE-001-S-BLACK', size: 'S', color: 'black' },
      { id: 'TEE-001-M-BLACK', size: 'M', color: 'black' },
      { id: 'TEE-001-L-BLACK', size: 'L', color: 'black' },
    ],
  },
  {
    sku: 'TEE-002',
    slug: 'still-here',
    name: 'Still Here',
    categorySlug: 't-shirts',
    collectionSlug: 'core',
    status: 'active',
    messageVisibility: 'featured',
    variants: [
      { id: 'TEE-002-S-WHITE', size: 'S', color: 'white' },
      { id: 'TEE-002-M-WHITE', size: 'M', color: 'white' },
      { id: 'TEE-002-L-WHITE', size: 'L', color: 'white' },
    ],
  },
  {
    sku: 'TEE-003',
    slug: 'between-words',
    name: 'Between Words',
    categorySlug: 't-shirts',
    collectionSlug: 'core',
    status: 'active',
    messageVisibility: 'hidden',
    variants: [
      { id: 'TEE-003-M-BLACK', size: 'M', color: 'black' },
      { id: 'TEE-003-L-BLACK', size: 'L', color: 'black' },
    ],
  },
  {
    sku: 'HOOD-001',
    slug: 'soft-weight',
    name: 'Soft Weight',
    categorySlug: 'hoodies',
    collectionSlug: 'core',
    status: 'active',
    messageVisibility: 'subtle',
    variants: [
      { id: 'HOOD-001-M-GRAY', size: 'M', color: 'gray' },
      { id: 'HOOD-001-L-GRAY', size: 'L', color: 'gray' },
      { id: 'HOOD-001-XL-GRAY', size: 'XL', color: 'gray' },
    ],
  },
  {
    sku: 'HOOD-002',
    slug: 'held',
    name: 'Held',
    categorySlug: 'hoodies',
    collectionSlug: 'core',
    status: 'active',
    messageVisibility: 'featured',
    variants: [
      { id: 'HOOD-002-M-BLACK', size: 'M', color: 'black' },
      { id: 'HOOD-002-L-BLACK', size: 'L', color: 'black' },
    ],
  },
  {
    sku: 'TEE-004',
    slug: 'slow-down-tee',
    name: 'Slow Down',
    categorySlug: 't-shirts',
    collectionSlug: 'slow-down',
    dropSlug: 'slow-down-vol-1',
    status: 'active',
    messageVisibility: 'subtle',
    variants: [
      { id: 'TEE-004-S-SAND', size: 'S', color: 'sand' },
      { id: 'TEE-004-M-SAND', size: 'M', color: 'sand' },
    ],
  },
  {
    sku: 'TEE-005',
    slug: 'say-it-anyway',
    name: 'Say It Anyway',
    categorySlug: 't-shirts',
    collectionSlug: 'slow-down',
    dropSlug: 'slow-down-vol-1',
    status: 'active',
    messageVisibility: 'featured',
    variants: [
      { id: 'TEE-005-M-SAND', size: 'M', color: 'sand' },
      { id: 'TEE-005-L-SAND', size: 'L', color: 'sand' },
    ],
  },
  {
    sku: 'HOOD-003',
    slug: 'unlearn',
    name: 'Unlearn',
    categorySlug: 'hoodies',
    collectionSlug: 'slow-down',
    dropSlug: 'slow-down-vol-1',
    status: 'active',
    messageVisibility: 'hidden',
    variants: [
      { id: 'HOOD-003-L-SAND', size: 'L', color: 'sand' },
      { id: 'HOOD-003-XL-SAND', size: 'XL', color: 'sand' },
    ],
  },
  {
    sku: 'HOOD-004',
    slug: 'warmth-kept',
    name: 'Warmth Kept',
    categorySlug: 'hoodies',
    collectionSlug: 'slow-down',
    status: 'active',
    messageVisibility: 'subtle',
    variants: [
      { id: 'HOOD-004-M-GRAY', size: 'M', color: 'gray' },
      { id: 'HOOD-004-L-GRAY', size: 'L', color: 'gray' },
    ],
  },
  {
    sku: 'TEE-006',
    slug: 'first-draft',
    name: 'First Draft',
    categorySlug: 't-shirts',
    collectionSlug: 'core',
    status: 'archived',
    messageVisibility: 'subtle',
    variants: [{ id: 'TEE-006-M-WHITE', size: 'M', color: 'white' }],
  },
];

export function getSkus(): Sku[] {
  return skus;
}

export function getSkuBySlug(slug: string): Sku | undefined {
  return skus.find((sku) => sku.slug === slug);
}

export function getSkusByCategory(categorySlug: string): Sku[] {
  return skus.filter((sku) => sku.categorySlug === categorySlug);
}

export function getSkusByCollection(collectionSlug: string): Sku[] {
  return skus.filter((sku) => sku.collectionSlug === collectionSlug);
}

export function getSkusByStatus(status: ProductStatus): Sku[] {
  return skus.filter((sku) => sku.status === status);
}

export function getSkusByVisibility(visibility: MessageVisibility): Sku[] {
  return skus.filter((sku) => sku.messageVisibility === visibility);
}
