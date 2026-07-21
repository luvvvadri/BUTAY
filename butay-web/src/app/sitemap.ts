import type { MetadataRoute } from 'next';
import { getCategories } from '@/data/categories';
import { getCollections } from '@/data/collections';
import { getSkusByStatus } from '@/data/products';

const BASE_URL = 'https://butay.vercel.app';

/**
 * Structural scaffolding only — generated entirely from the /data
 * layer, never hardcoded. Real SEO optimization (priority tuning,
 * change frequency, image sitemaps) is Fase 10 scope. Archived
 * products stay reachable (never deleted) but are left out of the
 * sitemap, same convention most catalogs use for retired listings.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/manifesto', '/catalog', '/archive'].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
    }),
  );

  const categoryRoutes = getCategories().map((category) => ({
    url: `${BASE_URL}/catalog/${category.slug}`,
  }));

  const collectionRoutes = getCollections().map((collection) => ({
    url: `${BASE_URL}/collections/${collection.slug}`,
  }));

  const productRoutes = getSkusByStatus('active').map((sku) => ({
    url: `${BASE_URL}/product/${sku.slug}`,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...collectionRoutes,
    ...productRoutes,
  ];
}
