import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from './badge';

describe('Badge', () => {
  it('renders its label', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies the requested variant', () => {
    render(<Badge variant="accent">New</Badge>);
    expect(screen.getByText('New').className).toMatch(/bg-accent/);
  });
});
