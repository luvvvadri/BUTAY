import { Container } from '@/components/ui/container';
import { Link } from '@/components/ui/link';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';

/** Same nav destinations as the header — no social/newsletter links: neither is an approved decision yet. */
const footerLinks = [
  { label: 'Catalog', href: '/catalog' },
  { label: 'Archive', href: '/archive' },
  { label: 'Manifesto', href: '/manifesto' },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200">
      <Container>
        <Stack
          direction="row"
          wrap
          align="center"
          justify="between"
          gap="md"
          className="py-8"
        >
          <Stack as="ul" direction="row" gap="md">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} tone="muted">
                  {item.label}
                </Link>
              </li>
            ))}
          </Stack>
          <Typography variant="caption" tone="muted">
            © {year} Butay
          </Typography>
        </Stack>
      </Container>
    </footer>
  );
}
