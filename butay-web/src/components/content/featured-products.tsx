import { ProductGrid } from '@/components/product/product-grid';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { getSkusByVisibility } from '@/data/products';

/** Reuses the Product DNA message-visibility attribute to pick what's featured — never an arbitrary selection. */
export function FeaturedProducts() {
  const featured = getSkusByVisibility('featured').filter(
    (sku) => sku.status === 'active',
  );

  return (
    <Section>
      <SectionHeader title="Featured products" />
      <ProductGrid
        skus={featured}
        emptyTitle="Nothing featured yet"
        emptyDescription="Check back soon."
      />
    </Section>
  );
}
