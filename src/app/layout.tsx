import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    template: '%s | CineReview Premium',
    default: 'CineReview Premium - The Best Movie Reviews',
  },
  description: 'Read the latest, high-quality movie reviews, analyses, and ratings on CineReview Premium. The best movie review website on the internet.',
  keywords: ['movie reviews', 'film analysis', 'best movies', 'cinema ratings', 'new movie releases'],
  authors: [{ name: 'CineReview Team' }],
  openGraph: {
    title: 'CineReview Premium',
    description: 'The best movie reviews, analyses, and ratings.',
    url: 'https://cinereview-premium.example.com',
    siteName: 'CineReview Premium',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CineReview Premium',
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
              CineReview<span style={{ color: '#fff' }}>.</span>
            </Link>
            <div style={{ display: 'flex', gap: '1.5rem', fontWeight: 500 }}>
              <Link href="/">Home</Link>
              <Link href="#">Movies</Link>
              <Link href="#">About</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} CineReview Premium. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
