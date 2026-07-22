import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Gallery } from './gallery';

describe('Gallery', () => {
  it('renders three labeled placeholder images by default', () => {
    render(<Gallery productName="Still Here" />);
    expect(screen.getAllByRole('img')).toHaveLength(3);
    expect(
      screen.getByLabelText('Placeholder image 1 of 3 for Still Here'),
    ).toBeInTheDocument();
  });

  it('renders the requested number of placeholders', () => {
    render(<Gallery productName="Still Here" count={5} />);
    expect(screen.getAllByRole('img')).toHaveLength(5);
  });
});
