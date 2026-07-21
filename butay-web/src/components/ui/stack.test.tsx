import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Stack } from './stack';

describe('Stack', () => {
  it('stacks children vertically by default', () => {
    render(<Stack>content</Stack>);
    const el = screen.getByText('content');
    expect(el.className).toMatch(/flex-col/);
    expect(el.className).toMatch(/gap-6/);
  });

  it('lays out horizontally when direction is row', () => {
    render(<Stack direction="row">content</Stack>);
    expect(screen.getByText('content').className).toMatch(/flex-row/);
  });

  it('applies align and justify when provided', () => {
    render(
      <Stack align="center" justify="between">
        content
      </Stack>,
    );
    const el = screen.getByText('content');
    expect(el.className).toMatch(/items-center/);
    expect(el.className).toMatch(/justify-between/);
  });
});
