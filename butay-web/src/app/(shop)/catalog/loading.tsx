import { Card } from '@/components/ui/card';
import { Grid } from '@/components/ui/grid';
import { Section } from '@/components/ui/section';

export default function CatalogLoading() {
  return (
    <Section>
      <div className="h-9 w-40 animate-pulse rounded bg-neutral-200" />
      <Grid
        columns={3}
        className="mt-8"
        role="status"
        aria-label="Loading catalog"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index}>
            <div className="h-24 animate-pulse rounded bg-neutral-200" />
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
