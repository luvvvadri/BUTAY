import { Container } from '@/components/ui/container';
import { Link } from '@/components/ui/link';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';
import { Navigation } from './navigation';

/**
 * Wordmark is plain text, not a designed logotype — the Design
 * System (v0.1, En borrador) leaves the logo's final form explicitly
 * PENDIENTE DE DEFINIR. This is a structural placeholder, not a
 * visual identity decision.
 */
export function Header() {
  return (
    <header className="border-b border-neutral-200">
      <Container>
        <Stack
          direction="row"
          align="center"
          justify="between"
          gap="md"
          className="py-4"
        >
          <Link href="/" underline="hover">
            <Typography as="span" variant="h4">
              Butay
            </Typography>
          </Link>
          <Navigation />
        </Stack>
      </Container>
    </header>
  );
}
