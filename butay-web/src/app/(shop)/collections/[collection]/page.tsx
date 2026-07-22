import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductGrid } from '@/components/product/product-grid';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';
import { getCollectionBySlug, getCollections } from '@/data/collections';
import { getDrops } from '@/data/drops';
import { getSkusByCollection } from '@/data/products';
import { collectionBreadcrumb } from '@/lib/breadcrumb';

interface CollectionPageProps {
  params: Promise<{ collection: string }>;
}

export function generateStaticParams() {
  return getCollections().map((collection) => ({
    collection: collection.slug,
  }));
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { collection: collectionSlug } = await params;
  const collection = getCollectionBySlug(collectionSlug);
  const name = collection?.name ?? collectionSlug;
  const description = `${name} — a Butay collection.`;
  return {
    title: name,
    description,
    alternates: { canonical: `/collections/${collectionSlug}` },
    openGraph: { title: `${name} — Butay`, description },
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { collection: collectionSlug } = await params;
  const collection = getCollectionBySlug(collectionSlug);

  if (!collection) {
    notFound();
  }

  const skus = getSkusByCollection(collectionSlug).filter(
    (sku) => sku.status === 'active',
  );
  // Drops are optional per collection (Product Strategy §6) — shown only when one actually exists, never invented.
  const drop = getDrops().find(
    (item) => item.collectionSlug === collectionSlug,
  );

  return (
    <Section>
      <Breadcrumb items={collectionBreadcrumb(collectionSlug)} />
      <Stack gap="md" className="mt-4 max-w-2xl">
        <Stack direction="row" align="center" gap="sm" wrap>
          <Typography variant="display" as="h1">
            {collection.name}
          </Typography>
          <Badge
            variant={collection.type === 'permanent' ? 'accent' : 'outline'}
          >
            {collection.type === 'permanent' ? 'Always available' : 'Temporary'}
          </Badge>
        </Stack>
        {collection.description && (
          <Typography variant="bodyLarge" tone="muted">
            {collection.description}
          </Typography>
        )}
        {drop && <Typography tone="muted">Part of {drop.name}.</Typography>}
      </Stack>
      <ProductGrid
        skus={skus}
        emptyTitle="No products in this collection yet"
        emptyDescription="Check back soon."
      />
    </Section>
  );
}
