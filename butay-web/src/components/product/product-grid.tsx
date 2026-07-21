import { EmptyState } from '@/components/ui/empty-state';
import { Grid } from '@/components/ui/grid';
import type { Sku } from '@/types/catalog';
import { ProductCard } from './product-card';

interface ProductGridProps {
  skus: Sku[];
  emptyTitle?: string;
  emptyDescription?: string;
}

/** Responsive grid of ProductCard, or an EmptyState when there is nothing to show. */
export function ProductGrid({
  skus,
  emptyTitle = 'No products yet',
  emptyDescription = 'Check back soon.',
}: ProductGridProps) {
  if (skus.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        className="mt-8"
      />
    );
  }

  return (
    <Grid columns={3} className="mt-8">
      {skus.map((sku) => (
        <ProductCard key={sku.sku} sku={sku} />
      ))}
    </Grid>
  );
}
