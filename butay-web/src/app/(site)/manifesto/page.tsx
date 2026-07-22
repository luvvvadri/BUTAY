import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';

const description = "Butay's editorial page.";

export const metadata: Metadata = {
  title: 'Manifesto',
  description,
  alternates: { canonical: '/manifesto' },
  openGraph: { title: 'Manifesto — Butay', description },
};

/**
 * Editorial page, fully structured, but written entirely with
 * placeholder paragraphs — deliberately NOT the real manifesto draft
 * from WEB_HANDOFF.md §2, which is explicitly "sujeto a validación
 * final del fundador antes de publicarse" and must not appear on a
 * live route until it's approved. Final copy is Fase 8.
 */
export default function ManifestoPage() {
  return (
    <Section>
      <Stack gap="lg" className="max-w-2xl">
        <Typography variant="display" as="h1">
          Manifesto
        </Typography>
        <Typography tone="muted">
          Placeholder editorial copy — not the final manifesto. Replaced once
          the founder approves final copy (Fase 8).
        </Typography>
        <Typography variant="bodyLarge">
          We started Butay because most of what we wanted to say didn&apos;t fit
          on a page.
        </Typography>
        <Typography>
          Some of it fits better on a sleeve, a chest, the inside of a collar —
          somewhere you notice it slowly, or not at all, depending on the day.
          That&apos;s on purpose. Not everything needs to be said loudly to
          matter.
        </Typography>
        <Typography>
          This isn&apos;t a store trying to sell you an identity. It&apos;s
          closer to a shelf of things someone left out for you to find, each one
          carrying a little of what it felt like to make it.
        </Typography>
        <Typography>
          What stays the same, no matter how the catalog grows: the message
          comes first, and it never gets louder than the person wearing it.
        </Typography>
      </Stack>
    </Section>
  );
}
