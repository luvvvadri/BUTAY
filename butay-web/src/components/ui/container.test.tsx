import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Container } from './container';

describe('Container', () => {
  it('renders children inside a centered, max-width wrapper', () => {
    render(<Container>content</Container>);
    const el = screen.getByText('content');
    expect(el.className).toMatch(/mx-auto/);
    expect(el.className).toMatch(/max-w-6xl/);
  });

  it('applies the requested size', () => {
    render(<Container size="sm">content</Container>);
    expect(screen.getByText('content').className).toMatch(/max-w-2xl/);
  });

  it('renders as a different element via `as`', () => {
    render(<Container as="section">content</Container>);
    expect(screen.getByText('content').tagName).toBe('SECTION');
  });

  it('forwards arbitrary HTML attributes like aria-label to the rendered element', () => {
    render(
      <Container as="nav" aria-label="Site">
        content
      </Container>,
    );
    expect(
      screen.getByRole('navigation', { name: 'Site' }),
    ).toBeInTheDocument();
  });
});
