import type { BreadcrumbItem } from '@/components/ui/breadcrumb';
import { getCategoryBySlug } from '@/data/categories';
import { getCollectionBySlug } from '@/data/collections';
import type { Sku } from '@/types/catalog';

const CATALOG_ROOT: BreadcrumbItem = { label: 'Catalog', href: '/catalog' };

/** Translates catalog data into the generic shape `Breadcrumb` expects — the component itself never reads `/data`. */
export function categoryBreadcrumb(categorySlug: string): BreadcrumbItem[] {
  const category = getCategoryBySlug(categorySlug);
  return [
    CATALOG_ROOT,
    { label: category?.name ?? categorySlug, href: `/catalog/${categorySlug}` },
  ];
}

export function collectionBreadcrumb(collectionSlug: string): BreadcrumbItem[] {
  const collection = getCollectionBySlug(collectionSlug);
  return [
    CATALOG_ROOT,
    {
      label: collection?.name ?? collectionSlug,
      href: `/collections/${collectionSlug}`,
    },
  ];
}

/** Product breadcrumb follows the category branch (Catalog -> Category -> Product). */
export function productBreadcrumb(sku: Sku): BreadcrumbItem[] {
  return [
    ...categoryBreadcrumb(sku.categorySlug),
    { label: sku.name, href: `/product/${sku.slug}` },
  ];
}
