import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Breadcrumb } from './breadcrumb';

describe('Breadcrumb', () => {
  it('renders nothing for an empty list', () => {
    const { container } = render(<Breadcrumb items={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders a labeled nav landmark', () => {
    render(
      <Breadcrumb items={[{ label: 'Catalog', href: '/catalog' }, { label: 'Hoodies', href: '/catalog/hoodies' }]} />,
    );
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
  });

  it('renders every item but the last as a link', () => {
    render(
      <Breadcrumb
        items={[
          { label: 'Catalog', href: '/catalog' },
          { label: 'Hoodies', href: '/catalog/hoodies' },
        ]}
      />,
    );
    expect(screen.getByRole('link', { name: 'Catalog' })).toHaveAttribute('href', '/catalog');
    expect(screen.queryByRole('link', { name: 'Hoodies' })).not.toBeInTheDocument();
  });

  it('marks the last item as the current page', () => {
    render(
      <Breadcrumb
        items={[
          { label: 'Catalog', href: '/catalog' },
          { label: 'Hoodies', href: '/catalog/hoodies' },
        ]}
      />,
    );
    expect(screen.getByText('Hoodies')).toHaveAttribute('aria-current', 'page');
  });
});
