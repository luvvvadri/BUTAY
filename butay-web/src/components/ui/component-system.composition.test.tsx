import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Badge } from './badge';
import { Button } from './button';
import { Card } from './card';
import { Grid } from './grid';
import { Icon } from './icon';
import { Link } from './link';
import { Section } from './section';
import { Stack } from './stack';
import { Typography } from './typography';

/**
 * Every Fase 3 base component composed together in one realistic
 * (but content-agnostic) layout — DEVELOPMENT_ROADMAP.md Fase 3
 * criterio de finalización: "no solo aislado".
 */
describe('Component system composed together', () => {
  it('renders a section of cards with a working call-to-action', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(
      <Section spacing="md">
        <Grid columns={2}>
          <Card interactive padding="md">
            <Stack gap="sm">
              <Badge variant="accent">Featured</Badge>
              <Typography variant="h3">Example title</Typography>
              <Typography variant="body" tone="muted">
                Example description text.
              </Typography>
              <Stack direction="row" gap="sm" align="center">
                <Button onClick={onSelect}>Select</Button>
                <Link href="/catalog">
                  Learn more <Icon name="arrow-right" />
                </Link>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      </Section>,
    );

    expect(
      screen.getByRole('heading', { level: 3, name: 'Example title' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Featured')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Select' }));
    expect(onSelect).toHaveBeenCalledOnce();

    expect(screen.getByRole('link', { name: /Learn more/ })).toHaveAttribute(
      'href',
      '/catalog',
    );
  });
});
