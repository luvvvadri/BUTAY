import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CTASection } from './cta-section';

describe('CTASection', () => {
  it('renders the title and a link to the given href', () => {
    render(
      <CTASection
        title="Ready to explore?"
        ctaLabel="See the catalog"
        ctaHref="/catalog"
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Ready to explore?' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /See the catalog/ }),
    ).toHaveAttribute('href', '/catalog');
  });

  it('renders an optional description', () => {
    render(
      <CTASection
        title="Ready to explore?"
        description="Start with the permanent line."
        ctaLabel="See the catalog"
        ctaHref="/catalog"
      />,
    );
    expect(
      screen.getByText('Start with the permanent line.'),
    ).toBeInTheDocument();
  });
});
