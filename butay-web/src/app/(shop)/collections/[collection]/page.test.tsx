import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const { notFound } = vi.hoisted(() => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  }),
}));
vi.mock('next/navigation', () => ({ notFound }));

const { default: CollectionPage } = await import('./page');

describe('CollectionPage', () => {
  it('marks the permanent collection as always available', async () => {
    render(
      await CollectionPage({ params: Promise.resolve({ collection: 'core' }) }),
    );

    expect(
      screen.getByRole('heading', { name: 'Core Collection' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Always available')).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Breadcrumb' }),
    ).toBeInTheDocument();
  });

  it('marks a temporary collection as temporary and shows its drop', async () => {
    render(
      await CollectionPage({
        params: Promise.resolve({ collection: 'slow-down' }),
      }),
    );

    expect(screen.getByText('Temporary')).toBeInTheDocument();
    expect(screen.getByText(/Slow Down — Vol\. 1/)).toBeInTheDocument();
  });

  it('calls notFound for a slug with no matching collection', async () => {
    await expect(
      CollectionPage({
        params: Promise.resolve({ collection: 'nonexistent' }),
      }),
    ).rejects.toThrow('NEXT_NOT_FOUND');
    expect(notFound).toHaveBeenCalled();
  });
});
