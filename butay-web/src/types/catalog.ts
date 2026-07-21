/**
 * Central catalog types (Product Strategy §3-§7; FRONTEND_ARCHITECTURE.md §10).
 * Hierarchy: Category -> Collection -> Drop (optional) -> Sku -> Variant.
 * Never redefine these locally — import from here.
 */

/** Product DNA message visibility (WEB_HANDOFF.md §6): protagonista/discreto/oculto. */
export type MessageVisibility = 'featured' | 'subtle' | 'hidden';

/** "Archive, never delete" (Product Strategy §7) — no `deleted` state exists. */
export type ProductStatus = 'active' | 'archived';

/** Permanent line vs. temporary collections (Product Strategy §5). */
export type CollectionType = 'permanent' | 'temporary';

export interface Category {
  slug: string;
  name: string;
}

export interface Collection {
  slug: string;
  name: string;
  type: CollectionType;
  description?: string;
}

/** Optional per collection (Product Strategy §6) — not every collection has one. */
export interface Drop {
  slug: string;
  name: string;
  collectionSlug: Collection['slug'];
}

/**
 * Size/color option under a Sku. `size` and `color` are free-form strings,
 * not literal unions — fit/silueta/tallaje is PENDIENTE DE DEFINIR
 * (Product Strategy §4); the type must not assume a sizing philosophy.
 */
export interface Variant {
  id: string;
  size: string;
  color: string;
}

export interface Sku {
  sku: string;
  slug: string;
  name: string;
  categorySlug: Category['slug'];
  collectionSlug: Collection['slug'];
  dropSlug?: Drop['slug'];
  status: ProductStatus;
  messageVisibility: MessageVisibility;
  variants: Variant[];
}
