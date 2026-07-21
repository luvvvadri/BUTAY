import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import type { Variant } from '@/types/catalog';
import { VariantSelector } from './variant-selector';

const variants: Variant[] = [
  { id: 'v1', size: 'S', color: 'black' },
  { id: 'v2', size: 'M', color: 'black' },
  { id: 'v3', size: 'M', color: 'white' },
];

describe('VariantSelector', () => {
  it('lists every unique size and color as its own option', () => {
    render(<VariantSelector variants={variants} />);
    expect(screen.getByRole('button', { name: 'S' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'M' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'black' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'white' })).toBeInTheDocument();
  });

  it('selects the first size and color by default', () => {
    render(<VariantSelector variants={variants} />);
    expect(screen.getByRole('button', { name: 'S' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByRole('button', { name: 'black' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('updates selection on click, keeping only one option pressed per group', async () => {
    const user = userEvent.setup();
    render(<VariantSelector variants={variants} />);

    await user.click(screen.getByRole('button', { name: 'M' }));

    expect(screen.getByRole('button', { name: 'M' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByRole('button', { name: 'S' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
  });

  it('is operable by keyboard', async () => {
    const user = userEvent.setup();
    render(<VariantSelector variants={variants} />);

    await user.tab();
    expect(screen.getByRole('button', { name: 'S' })).toHaveFocus();
  });
});
