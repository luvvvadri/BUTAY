import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Input } from './input';

describe('Input', () => {
  it('associates the label with the field so clicking it focuses the input', async () => {
    const user = userEvent.setup();
    render(<Input label="Email" />);

    await user.click(screen.getByText('Email'));

    expect(screen.getByRole('textbox', { name: 'Email' })).toHaveFocus();
  });

  it('visually hides the label while keeping it accessible when hideLabel is set', () => {
    render(<Input label="Email" hideLabel />);
    const label = screen.getByText('Email');
    expect(label.className).toMatch(/sr-only/);
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
  });

  it('marks the field invalid and links the error message when error is set', () => {
    render(<Input label="Email" error="Enter a valid email." />);
    const field = screen.getByRole('textbox', { name: 'Email' });

    expect(field).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Enter a valid email.')).toHaveAttribute(
      'id',
      field.getAttribute('aria-describedby'),
    );
  });

  it('accepts typed input', async () => {
    const user = userEvent.setup();
    render(<Input label="Email" />);

    await user.type(
      screen.getByRole('textbox', { name: 'Email' }),
      'hi@example.com',
    );

    expect(screen.getByRole('textbox', { name: 'Email' })).toHaveValue(
      'hi@example.com',
    );
  });
});
