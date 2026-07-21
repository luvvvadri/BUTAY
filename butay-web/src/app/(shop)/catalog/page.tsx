import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';
import { Grid } from '@/components/ui/grid';
import { Link } from '@/components/ui/link';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { getSkusByStatus } from '@/data/products';

export const metadata: Metadata = {
  title: 'Catalog',
};

export default function CatalogPage() {
  const skus = getSkusByStatus('active');

  return (
    <Section>
      <Typography variant="h1">Catalog</Typography>
      {skus.length === 0 ? (
        <EmptyState
          title="No products yet"
          description="Check back soon."
          className="mt-8"
        />
      ) : (
        <Grid columns={3} className="mt-8">
          {skus.map((sku) => (
            <Link
              key={sku.sku}
              href={`/product/${sku.slug}`}
              className="block"
              underline="hover"
            >
              <Card as="article">
                <Typography variant="h4">{sku.name}</Typography>
              </Card>
            </Link>
          ))}
        </Grid>
      )}
    </Section>
  );
}
