import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ValuesList } from './values-list';

describe('ValuesList', () => {
  it('renders all five approved brand values (Visión, Misión y Valores v1.0)', () => {
    render(<ValuesList />);
    for (const name of [
      'Minimalism',
      'Mental health',
      'Love',
      'Reflection',
      'Authenticity',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument();
    }
  });
});
