import { render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Header } from './header';

vi.mock('next/navigation', () => ({ usePathname: () => '/' }));

describe('Header', () => {
  it('renders a banner landmark with a link to home and the main navigation', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(within(header).getByRole('link', { name: 'Butay' })).toHaveAttribute(
      'href',
      '/',
    );
    expect(
      within(header).getByRole('navigation', { name: 'Main' }),
    ).toBeInTheDocument();
  });
});
