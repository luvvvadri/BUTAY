import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Link } from '@/components/ui/link';
import { Typography } from '@/components/ui/typography';
import type { Collection } from '@/types/catalog';

interface CollectionCardProps {
  collection: Collection;
}

/** Distinguishes the permanent line from temporary collections at a glance (WEB_HANDOFF.md §9). */
export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="block"
      underline="hover"
    >
      <Card as="article">
        <div className="flex items-center justify-between gap-2">
          <Typography variant="h4" as="h3">
            {collection.name}
          </Typography>
          <Badge
            variant={collection.type === 'permanent' ? 'accent' : 'outline'}
          >
            {collection.type === 'permanent' ? 'Always available' : 'Temporary'}
          </Badge>
        </div>
        {collection.description && (
          <Typography tone="muted" className="mt-2">
            {collection.description}
          </Typography>
        )}
      </Card>
    </Link>
  );
}
