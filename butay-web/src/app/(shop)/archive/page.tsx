import type { Metadata } from 'next';
import { ProductGrid } from '@/components/product/product-grid';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { getSkusByStatus } from '@/data/products';

const description = 'Retired Butay products, kept here rather than deleted.';

export const metadata: Metadata = {
  title: 'Archive',
  description,
  alternates: { canonical: '/archive' },
  openGraph: { title: 'Archive — Butay', description },
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
      <ProductGrid
        skus={skus}
        emptyTitle="Nothing archived yet"
        emptyDescription="Retired products will appear here."
      />
    </Section>
  );
}
