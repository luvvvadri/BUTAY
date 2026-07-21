import { NavLink } from '@/components/layout/nav-link';
import { Stack } from '@/components/ui/stack';
import { getCategories } from '@/data/categories';

/**
 * Links to the already-approved category routes
 * (FRONTEND_ARCHITECTURE.md §6) — not a client-side filter, just a
 * labeled shortcut to /catalog and /catalog/[category]. Uses
 * `exact` so "All" doesn't stay highlighted while viewing a specific
 * category.
 */
export function CategoryFilters() {
  const categories = getCategories();

  return (
    <Stack
      as="nav"
      direction="row"
      gap="md"
      wrap
      aria-label="Filter by category"
    >
      <NavLink href="/catalog" exact>
        All
      </NavLink>
      {categories.map((category) => (
        <NavLink key={category.slug} href={`/catalog/${category.slug}`} exact>
          {category.name}
        </NavLink>
      ))}
    </Stack>
  );
}
