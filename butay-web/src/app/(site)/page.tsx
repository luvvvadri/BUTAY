import type { Metadata } from 'next';
import { CTASection } from '@/components/content/cta-section';
import { FeaturedCollections } from '@/components/content/featured-collections';
import { FeaturedProducts } from '@/components/content/featured-products';
import { Hero } from '@/components/content/hero';
import { ValuesList } from '@/components/content/values-list';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

/**
 * Editorial home composition (Hero, intro, values, featured
 * collections/products, closing CTA) using the components/content
 * section components. All copy here is provisional placeholder text,
 * not the real manifesto draft (still unapproved, WEB_HANDOFF.md §2)
 * and not final marketing copy (Fase 8).
 */
export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Butay"
        title="Clothing that carries a message."
        description="A small catalog built around what you're feeling, not what's trending. This copy is provisional — final voice and copy are Fase 8."
        ctaLabel="Shop the catalog"
        ctaHref="/catalog"
      />

      <Section>
        <Typography variant="h2">
          Not a store. More like a shelf you keep coming back to.
        </Typography>
        <Typography tone="muted" className="mt-4 max-w-2xl">
          Butay started as a way of saying things out loud without saying them
          directly. Every piece carries a message — sometimes loud, sometimes
          folded into a seam. This paragraph is placeholder copy, not the final
          introduction.
        </Typography>
      </Section>

      <ValuesList />
      <FeaturedCollections />
      <FeaturedProducts />

      <CTASection
        title="Ready to look closer?"
        description="Browse the full catalog, or start with what's archived."
        ctaLabel="Explore the catalog"
        ctaHref="/catalog"
      />
    </>
  );
}
