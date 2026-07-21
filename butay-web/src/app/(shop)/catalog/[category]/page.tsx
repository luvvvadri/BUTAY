import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryFilters } from '@/components/product/category-filters';
import { ProductGrid } from '@/components/product/product-grid';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
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
      <Stack gap="md" className="mt-4">
        <Typography variant="h1">{category.name}</Typography>
        <CategoryFilters />
      </Stack>
      <ProductGrid
        skus={skus}
        emptyTitle="No products in this category yet"
        emptyDescription="Check back soon."
      />
    </Section>
  );
}
