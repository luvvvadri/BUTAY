import { cn } from '@/lib/cn';
import { Link } from './link';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  /** Ordered from root to current page. The last item renders as plain text (current page), not a link. */
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Brand/catalog-agnostic — takes plain `{ label, href }` pairs. Callers
 * (e.g. the (shop) layout) translate catalog data into this shape;
 * this component never reads the data layer itself.
 */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={cn(className)}>
      <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-neutral-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-foreground">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} tone="muted">
                  {item.label}
                </Link>
              )}
              {!isLast && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
