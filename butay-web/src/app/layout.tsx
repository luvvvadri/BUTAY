import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { AnnouncementBar } from '@/components/layout/announcement-bar';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Link } from '@/components/ui/link';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_URL = 'https://butay.vercel.app';

/**
 * Structural SEO scaffolding only (Fase 7 audit) — description/OG copy
 * is deliberately minimal and factual, not brand voice. Real SEO copy
 * is Fase 10. No og:image: no approved brand imagery exists yet
 * (Design System §9, PENDIENTE DE DEFINIR).
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s — Butay',
    default: 'Butay',
  },
  description: 'Butay — clothing catalog.',
  openGraph: {
    siteName: 'Butay',
    type: 'website',
  },
  twitter: {
    card: 'summary',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Link
          href="#main-content"
          className="focus:bg-accent focus:text-accent-foreground focus:ring-accent sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
        >
          Skip to content
        </Link>
        {/* Inactive by default — no content passed in yet, see components/layout/announcement-bar.tsx */}
        <AnnouncementBar />
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex flex-1 flex-col focus:outline-none"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
