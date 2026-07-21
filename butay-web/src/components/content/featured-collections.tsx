import { CollectionCard } from '@/components/product/collection-card';
import { Grid } from '@/components/ui/grid';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { getCollections } from '@/data/collections';

export function FeaturedCollections() {
  const collections = getCollections();

  return (
    <Section>
      <SectionHeader title="Collections" />
      <Grid columns={2} gap="lg" className="mt-8">
        {collections.map((collection) => (
          <CollectionCard key={collection.slug} collection={collection} />
        ))}
      </Grid>
    </Section>
  );
}
