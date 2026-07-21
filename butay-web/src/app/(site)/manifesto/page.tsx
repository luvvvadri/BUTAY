import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';

export const metadata: Metadata = {
  title: 'Manifesto',
};

export default function ManifestoPage() {
  return (
    <Section>
      <Typography variant="h1">Manifesto</Typography>
      <Typography tone="muted" className="mt-2">
        Brand editorial content — structure only, copy pending (Fase 8).
      </Typography>
    </Section>
  );
}
