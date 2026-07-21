import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Navigation } from './navigation';

vi.mock('next/navigation', () => ({ usePathname: () => '/catalog' }));

describe('Navigation', () => {
  it('renders the main desktop navigation with all nav items', () => {
    render(<Navigation />);
    const nav = screen.getByRole('navigation', { name: 'Main' });
    expect(
      within(nav).getByRole('link', { name: 'Catalog' }),
    ).toBeInTheDocument();
    expect(
      within(nav).getByRole('link', { name: 'Archive' }),
    ).toBeInTheDocument();
    expect(
      within(nav).getByRole('link', { name: 'Manifesto' }),
    ).toBeInTheDocument();
  });

  it('opens the mobile drawer when the menu button is activated', async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    const trigger = screen.getByRole('button', { name: 'Open menu' });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(trigger);

    expect(screen.getByRole('dialog', { name: 'Menu' })).toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes the drawer when a mobile nav link is activated', async () => {
    const user = userEvent.setup();
    render(<Navigation />);
    await user.click(screen.getByRole('button', { name: 'Open menu' }));

    const dialog = screen.getByRole('dialog', { name: 'Menu' });
    await user.click(within(dialog).getByRole('link', { name: 'Catalog' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
