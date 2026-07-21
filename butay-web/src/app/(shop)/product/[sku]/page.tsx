import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';
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
  return { title: sku?.name ?? skuSlug };
}

/**
 * Archived products stay reachable here, never 404 — "archive, never
 * delete" (Product Strategy §7, WEB_HANDOFF.md §5). Only a slug that
 * matches no SKU at all triggers not-found.
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { sku: skuSlug } = await params;
  const sku = getSkuBySlug(skuSlug);

  if (!sku) {
    notFound();
  }

  return (
    <Section>
      <Breadcrumb items={productBreadcrumb(sku)} />
      <Stack direction="row" align="center" gap="sm" className="mt-4">
        <Typography variant="h1">{sku.name}</Typography>
        {sku.status === 'archived' && <Badge variant="outline">Archived</Badge>}
      </Stack>
      <Typography tone="muted" className="mt-2">
        Message visibility: {sku.messageVisibility}
      </Typography>
      <Typography variant="h4" className="mt-8">
        Available options
      </Typography>
      <Stack as="ul" gap="sm" className="mt-2">
        {sku.variants.map((variant) => (
          <li key={variant.id}>
            <Typography as="span" tone="muted">
              {variant.size} — {variant.color}
            </Typography>
          </li>
        ))}
      </Stack>
    </Section>
  );
}
