'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section>
      <Stack align="center" gap="md" className="text-center">
        <Typography variant="h2">Something went wrong</Typography>
        <Typography tone="muted">Please try again.</Typography>
        <Button onClick={reset}>Try again</Button>
      </Stack>
    </Section>
  );
}
