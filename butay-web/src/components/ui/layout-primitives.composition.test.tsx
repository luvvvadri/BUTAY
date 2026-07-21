import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Grid } from './grid';
import { Section } from './section';
import { Stack } from './stack';

/**
 * Composed usage, not just isolated rendering — DEVELOPMENT_ROADMAP.md
 * Fase 3 criterio de finalización: "cada componente base se ha usado en
 * al menos un caso de prueba real (no solo aislado)".
 */
describe('Layout primitives composed together', () => {
  it('renders a section containing a grid of stacked items', () => {
    render(
      <Section spacing="md">
        <Grid columns={3} gap="sm">
          <Stack gap="xs">
            <span>Title 1</span>
            <span>Body 1</span>
          </Stack>
          <Stack gap="xs">
            <span>Title 2</span>
            <span>Body 2</span>
          </Stack>
        </Grid>
      </Section>,
    );

    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Body 2')).toBeInTheDocument();
    expect(screen.getByText('Title 1').closest('section')).toBeInTheDocument();
  });
});
