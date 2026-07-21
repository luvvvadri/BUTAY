import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from './card';

describe('Card', () => {
  it('renders its content inside a bordered container', () => {
    render(<Card>content</Card>);
    expect(screen.getByText('content').className).toMatch(/border/);
  });

  it('applies the requested padding', () => {
    render(<Card padding="lg">content</Card>);
    expect(screen.getByText('content').className).toMatch(/p-8/);
  });

  it('adds focus and hover affordance only when interactive', () => {
    render(<Card interactive>content</Card>);
    expect(screen.getByText('content').className).toMatch(
      /focus-visible:ring-2/,
    );
  });

  it('renders as a different element via `as`', () => {
    render(<Card as="article">content</Card>);
    expect(screen.getByText('content').tagName).toBe('ARTICLE');
  });
});
