'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Drawer } from '@/components/ui/drawer';
import { Icon } from '@/components/ui/icon';
import { Stack } from '@/components/ui/stack';
import { NavLink } from './nav-link';

/**
 * Structural site navigation, tied directly to the routes already
 * fixed in FRONTEND_ARCHITECTURE.md §6 — not brand copy, so it lives
 * here rather than in `/content`. No "Collections" entry: there is no
 * approved collections index route, only `/collections/[collection]`,
 * so linking a bare `/collections` would invent IA not grounded in
 * the approved architecture.
 */
const navItems = [
  { label: 'Catalog', href: '/catalog' },
  { label: 'Archive', href: '/archive' },
  { label: 'Manifesto', href: '/manifesto' },
] as const;

/** Single source of nav items, rendered responsively: horizontal on desktop, a Drawer on mobile. */
export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav aria-label="Main" className="hidden md:block">
        <Stack as="ul" direction="row" gap="lg">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </Stack>
      </nav>

      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMobileOpen(true)}
      >
        <Icon name="menu" label="Open menu" />
      </Button>

      <Drawer
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        title="Menu"
        side="left"
      >
        <nav aria-label="Mobile" id="mobile-navigation">
          <Stack as="ul" gap="md">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </Stack>
        </nav>
      </Drawer>
    </>
  );
}
