import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AnnouncementBar } from './announcement-bar';

describe('AnnouncementBar', () => {
  it('renders nothing by default (inactive slot)', () => {
    const { container } = render(<AnnouncementBar />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders content when explicitly provided', () => {
    render(<AnnouncementBar>Free shipping over $50</AnnouncementBar>);
    expect(screen.getByText('Free shipping over $50')).toBeInTheDocument();
  });
});
