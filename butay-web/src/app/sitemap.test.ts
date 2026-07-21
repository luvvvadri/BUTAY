import { describe, expect, it } from 'vitest';
import { getCategories } from '@/data/categories';
import { getCollections } from '@/data/collections';
import { getSkusByStatus } from '@/data/products';
import sitemap from './sitemap';

describe('sitemap', () => {
  it('includes the core static routes', () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toContain('https://butay.vercel.app/');
    expect(urls).toContain('https://butay.vercel.app/manifesto');
    expect(urls).toContain('https://butay.vercel.app/catalog');
    expect(urls).toContain('https://butay.vercel.app/archive');
  });

  it('includes every category, collection and active product from the data layer', () => {
    const urls = sitemap().map((entry) => entry.url);

    for (const category of getCategories()) {
      expect(urls).toContain(
        `https://butay.vercel.app/catalog/${category.slug}`,
      );
    }
    for (const collection of getCollections()) {
      expect(urls).toContain(
        `https://butay.vercel.app/collections/${collection.slug}`,
      );
    }
    for (const sku of getSkusByStatus('active')) {
      expect(urls).toContain(`https://butay.vercel.app/product/${sku.slug}`);
    }
  });

  it('excludes archived products', () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const sku of getSkusByStatus('archived')) {
      expect(urls).not.toContain(
        `https://butay.vercel.app/product/${sku.slug}`,
      );
    }
  });
});
