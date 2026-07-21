import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';
import { Grid } from '@/components/ui/grid';
import { Link } from '@/components/ui/link';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { getSkusByStatus } from '@/data/products';

export const metadata: Metadata = {
  title: 'Archive',
};

/** Retired products, kept consultable — never deleted (Product Strategy §7). */
export default function ArchivePage() {
  const skus = getSkusByStatus('archived');

  return (
    <Section>
      <Typography variant="h1">Archive</Typography>
      <Typography tone="muted" className="mt-2">
        Retired products, kept here rather than deleted.
      </Typography>
      {skus.length === 0 ? (
        <EmptyState
          title="Nothing archived yet"
          description="Retired products will appear here."
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
