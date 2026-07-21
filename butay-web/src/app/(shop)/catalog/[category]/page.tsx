import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Card } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';
import { Grid } from '@/components/ui/grid';
import { Link } from '@/components/ui/link';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { getCategories, getCategoryBySlug } from '@/data/categories';
import { getSkusByCategory } from '@/data/products';
import { categoryBreadcrumb } from '@/lib/breadcrumb';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  return { title: category?.name ?? categorySlug };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const skus = getSkusByCategory(categorySlug).filter(
    (sku) => sku.status === 'active',
  );

  return (
    <Section>
      <Breadcrumb items={categoryBreadcrumb(categorySlug)} />
      <Typography variant="h1" className="mt-4">
        {category.name}
      </Typography>
      {skus.length === 0 ? (
        <EmptyState
          title="No products in this category yet"
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
