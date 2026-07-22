import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SectionHeader } from './section-header';

describe('SectionHeader', () => {
  it('renders the title as a heading', () => {
    render(<SectionHeader title="Featured products" />);
    expect(
      screen.getByRole('heading', { name: 'Featured products' }),
    ).toBeInTheDocument();
  });

  it('renders an optional eyebrow and description', () => {
    render(
      <SectionHeader
        eyebrow="Shop"
        title="Featured products"
        description="A short preview of the catalog."
      />,
    );
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(
      screen.getByText('A short preview of the catalog.'),
    ).toBeInTheDocument();
  });
});
