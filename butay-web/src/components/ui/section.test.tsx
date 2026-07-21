import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Section } from './section';

describe('Section', () => {
  it('renders a semantic <section> by default', () => {
    render(<Section>content</Section>);
    expect(screen.getByText('content').closest('section')).toBeInTheDocument();
  });

  it('wraps content in a Container by default', () => {
    render(<Section>content</Section>);
    expect(screen.getByText('content').className).toMatch(/mx-auto/);
  });

  it('skips the Container when contained is false', () => {
    render(<Section contained={false}>content</Section>);
    expect(screen.getByText('content').className).not.toMatch(/mx-auto/);
  });
});
