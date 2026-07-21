import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EmptyState } from './empty-state';

describe('EmptyState', () => {
  it('renders the title', () => {
    render(<EmptyState title="No products yet" />);
    expect(screen.getByText('No products yet')).toBeInTheDocument();
  });

  it('renders an optional description', () => {
    render(<EmptyState title="No products yet" description="Check back soon." />);
    expect(screen.getByText('Check back soon.')).toBeInTheDocument();
  });

  it('renders an optional action', () => {
    render(<EmptyState title="No products yet" action={<button type="button">Browse all</button>} />);
    expect(screen.getByRole('button', { name: 'Browse all' })).toBeInTheDocument();
  });
});
