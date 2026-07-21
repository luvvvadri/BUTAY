import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from './footer';

describe('Footer', () => {
  it('renders a contentinfo landmark with site links and the current year', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(
      within(footer).getByRole('link', { name: 'Catalog' }),
    ).toHaveAttribute('href', '/catalog');
    expect(
      within(footer).getByText(new RegExp(String(new Date().getFullYear()))),
    ).toBeInTheDocument();
  });
});
