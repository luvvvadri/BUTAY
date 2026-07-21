import type { MetadataRoute } from 'next';

/**
 * Structural scaffolding only — real SEO tuning (what to disallow,
 * crawl-delay, etc.) is Fase 10 (SEO y rendimiento). For now: allow
 * everything, point to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://butay.vercel.app/sitemap.xml',
  };
}
