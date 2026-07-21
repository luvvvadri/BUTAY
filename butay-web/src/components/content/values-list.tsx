import { Grid } from '@/components/ui/grid';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { Typography } from '@/components/ui/typography';

/**
 * The five value names are approved (Visión, Misión y Valores v1.0,
 * Decisión 010) — only the names. The one-line descriptors below are
 * provisional placeholder copy, not final brand voice; real
 * editorial copy is Fase 8 (Contenido editorial de marca).
 */
const values = [
  { name: 'Minimalism', description: 'Less, said with more weight.' },
  { name: 'Mental health', description: 'Room to not be okay.' },
  { name: 'Love', description: 'In every form it takes.' },
  { name: 'Reflection', description: 'A pause before the noise.' },
  { name: 'Authenticity', description: 'Said plainly, meant fully.' },
] as const;

export function ValuesList() {
  return (
    <Section>
      <SectionHeader title="What Butay stands for" />
      <Grid columns={3} gap="lg" className="mt-8">
        {values.map((value) => (
          <div key={value.name}>
            <Typography variant="h4">{value.name}</Typography>
            <Typography tone="muted" className="mt-1">
              {value.description}
            </Typography>
          </div>
        ))}
      </Grid>
    </Section>
  );
}
