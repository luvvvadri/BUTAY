import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Typography } from './typography';

describe('Typography', () => {
  it('renders body copy as a <p> by default', () => {
    render(<Typography>content</Typography>);
    expect(screen.getByText('content').tagName).toBe('P');
  });

  it('renders each heading variant with its matching semantic tag', () => {
    render(<Typography variant="h2">Heading</Typography>);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Heading' }),
    ).toBeInTheDocument();
  });

  it('lets `as` override the tag without changing the visual variant', () => {
    render(
      <Typography variant="h1" as="h2">
        Visually h1, semantically h2
      </Typography>,
    );
    const el = screen.getByRole('heading', { level: 2 });
    expect(el.className).toMatch(/text-4xl/);
  });

  it('applies the requested tone', () => {
    render(<Typography tone="accent">content</Typography>);
    expect(screen.getByText('content').className).toMatch(/text-accent/);
  });
});
