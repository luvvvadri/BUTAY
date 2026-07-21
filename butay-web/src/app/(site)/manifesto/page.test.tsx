import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ManifestoPage from './page';

describe('ManifestoPage', () => {
  it('renders an editorial page with a heading and body copy', () => {
    render(<ManifestoPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Manifesto' }),
    ).toBeInTheDocument();
  });

  it('does not use the real unapproved manifesto draft text', () => {
    render(<ManifestoPage />);
    expect(
      screen.queryByText(/We don't dress to be seen/),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/Wear what you mean/)).not.toBeInTheDocument();
  });
});
