import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './hero';

describe('Hero', () => {
  it('renders the title as the page h1', () => {
    render(<Hero title="Wear the message" />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Wear the message' }),
    ).toBeInTheDocument();
  });

  it('renders an optional eyebrow and description', () => {
    render(
      <Hero
        title="Wear the message"
        eyebrow="Butay"
        description="Clothing that says something."
      />,
    );
    expect(screen.getByText('Butay')).toBeInTheDocument();
    expect(
      screen.getByText('Clothing that says something.'),
    ).toBeInTheDocument();
  });

  it('renders the CTA as a real link when both label and href are given', () => {
    render(
      <Hero
        title="Wear the message"
        ctaLabel="Shop the catalog"
        ctaHref="/catalog"
      />,
    );
    expect(
      screen.getByRole('link', { name: /Shop the catalog/ }),
    ).toHaveAttribute('href', '/catalog');
  });

  it('renders no CTA when ctaHref is missing', () => {
    render(<Hero title="Wear the message" ctaLabel="Shop" />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
