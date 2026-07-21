import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Drawer } from './drawer';

describe('Drawer', () => {
  it('renders nothing when closed', () => {
    render(
      <Drawer open={false} onOpenChange={vi.fn()} title="Menu">
        content
      </Drawer>,
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders the dialog with an accessible title when open', () => {
    render(
      <Drawer open onOpenChange={vi.fn()} title="Menu">
        content
      </Drawer>,
    );
    const dialog = screen.getByRole('dialog', { name: 'Menu' });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('calls onOpenChange(false) when the close button is activated', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <Drawer open onOpenChange={onOpenChange} title="Menu">
        content
      </Drawer>,
    );

    await user.click(screen.getByRole('button', { name: 'Close' }));

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('calls onOpenChange(false) on Escape', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <Drawer open onOpenChange={onOpenChange} title="Menu">
        content
      </Drawer>,
    );

    await user.keyboard('{Escape}');

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
