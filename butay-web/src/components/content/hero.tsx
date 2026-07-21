import { Link } from '@/components/ui/link';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';

interface HeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Home page opener. Content is always supplied by the caller — never
 * hardcoded brand copy in this component. The CTA is a prominent text
 * link, not a button-styled element: nesting an interactive `<button>`
 * inside an `<a>` is invalid HTML, and a bold link fits the
 * editorial/"librería" direction (Design System §13) better than a
 * heavy commerce-style button anyway.
 */
export function Hero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: HeroProps) {
  return (
    <Section spacing="xl">
      <Stack gap="md" className="max-w-2xl">
        {eyebrow && (
          <Typography variant="caption" tone="accent">
            {eyebrow}
          </Typography>
        )}
        <Typography variant="display" as="h1">
          {title}
        </Typography>
        {description && (
          <Typography variant="bodyLarge" tone="muted">
            {description}
          </Typography>
        )}
        {ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            tone="accent"
            underline="always"
            className="text-lg font-medium"
          >
            {ctaLabel} →
          </Link>
        )}
      </Stack>
    </Section>
  );
}
