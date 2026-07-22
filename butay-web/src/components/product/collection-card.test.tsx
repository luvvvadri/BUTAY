import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CollectionCard } from './collection-card';

describe('CollectionCard', () => {
  it('links to the collection page', () => {
    render(
      <CollectionCard
        collection={{
          slug: 'core',
          name: 'Core Collection',
          type: 'permanent',
        }}
      />,
    );
    expect(
      screen.getByRole('link', { name: /Core Collection/ }),
    ).toHaveAttribute('href', '/collections/core');
  });

  it('marks a permanent collection as always available', () => {
    render(
      <CollectionCard
        collection={{
          slug: 'core',
          name: 'Core Collection',
          type: 'permanent',
        }}
      />,
    );
    expect(screen.getByText('Always available')).toBeInTheDocument();
  });

  it('marks a temporary collection as temporary', () => {
    render(
      <CollectionCard
        collection={{ slug: 'slow-down', name: 'Slow Down', type: 'temporary' }}
      />,
    );
    expect(screen.getByText('Temporary')).toBeInTheDocument();
  });

  it('renders its name as an h3 (no heading-level skip in grid listings)', () => {
    render(
      <CollectionCard
        collection={{
          slug: 'core',
          name: 'Core Collection',
          type: 'permanent',
        }}
      />,
    );
    expect(
      screen.getByRole('heading', { level: 3, name: 'Core Collection' }),
    ).toBeInTheDocument();
  });
});
