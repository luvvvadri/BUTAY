import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Link } from './link';

describe('Link', () => {
  it('renders an internal link without target/rel', () => {
    render(<Link href="/catalog">Catalog</Link>);
    const el = screen.getByRole('link', { name: 'Catalog' });
    expect(el).toHaveAttribute('href', '/catalog');
    expect(el).not.toHaveAttribute('target');
  });

  it('renders an external link with a safe target and rel', () => {
    render(<Link href="https://example.com">External</Link>);
    const el = screen.getByRole('link', { name: 'External' });
    expect(el).toHaveAttribute('target', '_blank');
    expect(el).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies the requested tone', () => {
    render(
      <Link href="/catalog" tone="accent">
        Catalog
      </Link>,
    );
    expect(screen.getByRole('link', { name: 'Catalog' }).className).toMatch(
      /text-accent/,
    );
  });

  it('underlines only on hover by default', () => {
    render(<Link href="/catalog">Catalog</Link>);
    const classes = screen
      .getByRole('link', { name: 'Catalog' })
      .className.split(' ');
    expect(classes).toContain('hover:underline');
    expect(classes).not.toContain('underline');
  });

  it('underlines always when requested', () => {
    render(
      <Link href="/catalog" underline="always">
        Catalog
      </Link>,
    );
    const classes = screen
      .getByRole('link', { name: 'Catalog' })
      .className.split(' ');
    expect(classes).toContain('underline');
  });
});
