import type { Metadata } from 'next';
import { CategoryFilters } from '@/components/product/category-filters';
import { ProductGrid } from '@/components/product/product-grid';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';
import { getSkusByStatus } from '@/data/products';

export const metadata: Metadata = {
  title: 'Catalog',
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
