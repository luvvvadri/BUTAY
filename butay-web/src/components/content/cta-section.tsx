import { Link } from '@/components/ui/link';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';

interface CTASectionProps {
  title: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
}

/** Generic closing section — content supplied by the caller, no hardcoded copy. */
export function CTASection({
  title,
  description,
  ctaLabel,
  ctaHref,
}: CTASectionProps) {
  return (
    <Section spacing="xl" className="bg-neutral-50">
      <Stack align="center" gap="md" className="text-center">
        <Typography variant="h2">{title}</Typography>
        {description && (
          <Typography tone="muted" className="max-w-xl">
            {description}
          </Typography>
        )}
        <Link
          href={ctaHref}
          tone="accent"
          underline="always"
          className="text-lg font-medium"
        >
          {ctaLabel} →
        </Link>
      </Stack>
    </Section>
  );
}
