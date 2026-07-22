import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Gallery } from '@/components/product/gallery';
import { VariantSelector } from '@/components/product/variant-selector';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';
import { getCategoryBySlug } from '@/data/categories';
import { getCollectionBySlug } from '@/data/collections';
import { getSkuBySlug, getSkus } from '@/data/products';
import { productBreadcrumb } from '@/lib/breadcrumb';

interface ProductPageProps {
  params: Promise<{ sku: string }>;
}

export function generateStaticParams() {
  return getSkus().map((sku) => ({ sku: sku.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { sku: skuSlug } = await params;
  const sku = getSkuBySlug(skuSlug);
  if (!sku) {
    return { title: skuSlug };
  }
  const category = getCategoryBySlug(sku.categorySlug);
  const description = category
    ? `${sku.name} — ${category.name} at Butay.`
    : `${sku.name} — Butay.`;
  return {
    title: sku.name,
    description,
    alternates: { canonical: `/product/${sku.slug}` },
    openGraph: { title: `${sku.name} — Butay`, description },
  };
}

/**
 * Archived products stay reachable here, never 404 — "archive, never
 * delete" (Product Strategy §7, WEB_HANDOFF.md §5). Only a slug that
 * matches no SKU at all triggers not-found. No cart, no checkout —
 * that's Fase 12, not started; the CTA below is intentionally
 * disabled.
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { sku: skuSlug } = await params;
  const sku = getSkuBySlug(skuSlug);

  if (!sku) {
    notFound();
  }

  const category = getCategoryBySlug(sku.categorySlug);
  const collection = getCollectionBySlug(sku.collectionSlug);

  return (
    <Section>
      <Breadcrumb items={productBreadcrumb(sku)} />

      {/*
        Deliberately not the shared Grid primitive: its column presets
        only offer an `sm` (640px) split, which felt cramped for a
        gallery+details layout on a wide phone/small tablet (found
        during the Fase 7 responsive audit). This needs an `md` (768px)
        split instead — a one-off layout need, not worth adding a new
        Grid preset for a single usage.
      */}
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <Gallery productName={sku.name} />

        <Stack gap="lg">
          <Stack direction="row" align="center" gap="sm" wrap>
            <Typography variant="h1">{sku.name}</Typography>
            {sku.status === 'archived' && (
              <Badge variant="outline">Archived</Badge>
            )}
            {sku.messageVisibility === 'featured' && (
              <Badge variant="accent">Featured</Badge>
            )}
          </Stack>

          <Stack direction="row" gap="sm" wrap>
            {category && <Badge variant="neutral">{category.name}</Badge>}
            {collection && <Badge variant="neutral">{collection.name}</Badge>}
          </Stack>

          <Stack gap="xs">
            <Typography tone="muted">Status: {sku.status}</Typography>
            <Typography tone="muted">
              Message visibility: {sku.messageVisibility}
            </Typography>
          </Stack>

          <VariantSelector variants={sku.variants} />

          <Button size="lg" disabled className="w-fit">
            Add to bag — coming soon
          </Button>
        </Stack>
      </div>
    </Section>
  );
}
