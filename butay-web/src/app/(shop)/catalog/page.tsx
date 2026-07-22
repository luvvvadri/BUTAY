import type { Metadata } from 'next';
import { CategoryFilters } from '@/components/product/category-filters';
import { ProductGrid } from '@/components/product/product-grid';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';
import { getSkusByStatus } from '@/data/products';

const description = 'Browse the full Butay catalog.';

export const metadata: Metadata = {
  title: 'Catalog',
  description,
  alternates: { canonical: '/catalog' },
  openGraph: { title: 'Catalog — Butay', description },
};

export default function CatalogPage() {
  const skus = getSkusByStatus('active');

  return (
    <Section>
      <Stack gap="md">
        <Typography variant="h1">Catalog</Typography>
        <CategoryFilters />
      </Stack>
      <ProductGrid skus={skus} />
    </Section>
  );
}
