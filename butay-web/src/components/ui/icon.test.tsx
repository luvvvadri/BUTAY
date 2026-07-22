import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Icon } from './icon';

describe('Icon', () => {
  it('is hidden from assistive technology when decorative (no label)', () => {
    const { container } = render(<Icon name="close" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders as a labeled graphic when a label is provided', () => {
    render(<Icon name="close" label="Next" />);
    expect(screen.getByRole('img', { name: 'Next' })).toBeInTheDocument();
  });

  it('applies the requested size', () => {
    const { container } = render(<Icon name="close" size={32} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });
});
