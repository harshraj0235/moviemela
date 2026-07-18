import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    template: '%s | Movie Review by Moneycal',
    default: 'Movie Review by Moneycal - The Best Movie Reviews',
  },
  description: 'Read the latest, high-quality movie reviews, analyses, and ratings on Movie Review by Moneycal. The best movie review website on the internet.',
  keywords: ['movie reviews', 'film analysis', 'best movies', 'cinema ratings', 'new movie releases'],
  authors: [{ name: 'Moneycal Team' }],
  openGraph: {
    title: 'Movie Review by Moneycal',
    description: 'The best movie reviews, analyses, and ratings.',
    url: 'https://movie.moneycal.in',
    siteName: 'Movie Review by Moneycal',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Movie Review by Moneycal',
    description: 'The best movie reviews on the internet.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script Placeholder */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="logo">
              Movie Review <span style={{ color: 'var(--primary-color)', marginLeft: '0.25rem' }}>by Moneycal</span>
            </Link>
            <div style={{ display: 'flex', gap: '1.5rem', fontWeight: 500 }}>
              <Link href="/">Home</Link>
              <Link href="/">Movies</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Movie Review by Moneycal. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.7 }}>
              A subsidiary of <a href="https://moneycal.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>moneycal.in</a>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem', fontSize: '0.8rem' }}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
