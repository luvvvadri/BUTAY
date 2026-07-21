import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Link } from '@/components/ui/link';
import { Typography } from '@/components/ui/typography';
import type { Sku } from '@/types/catalog';

interface ProductCardProps {
  sku: Sku;
}

/**
 * Reused across catalog, category, collection and archive listings.
 * Image is a labeled placeholder block — no real product photography
 * exists yet (Design System §9 photography direction is still
 * PENDIENTE DE DEFINIR).
 */
export function ProductCard({ sku }: ProductCardProps) {
  const badge =
    sku.status === 'archived' ? (
      <Badge variant="outline">Archived</Badge>
    ) : sku.messageVisibility === 'featured' ? (
      <Badge variant="accent">Featured</Badge>
    ) : null;

  return (
    <Link href={`/product/${sku.slug}`} className="block" underline="hover">
      <Card as="article" padding="none" className="overflow-hidden">
        <div
          role="img"
          aria-label={`Placeholder image for ${sku.name}`}
          className="aspect-square bg-neutral-100"
        />
        <div className="flex items-center justify-between gap-2 p-4">
          <Typography variant="h4">{sku.name}</Typography>
          {badge}
        </div>
      </Card>
    </Link>
  );
}
