import { Link } from '@/components/ui/link';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';

export default function NotFound() {
  return (
    <Section>
      <Stack align="center" gap="md" className="text-center">
        <Typography variant="h2">Page not found</Typography>
        <Typography tone="muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </Typography>
        <Link href="/">Back to home</Link>
      </Stack>
    </Section>
  );
}
