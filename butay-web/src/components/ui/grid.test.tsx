import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Grid } from './grid';

describe('Grid', () => {
  it('is single-column by default at the base breakpoint', () => {
    render(<Grid>content</Grid>);
    expect(screen.getByText('content').className).toMatch(/grid-cols-1/);
  });

  it('applies the requested column count for larger screens', () => {
    render(<Grid columns={4}>content</Grid>);
    expect(screen.getByText('content').className).toMatch(/lg:grid-cols-4/);
  });
});
