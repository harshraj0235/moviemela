import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Movie Review by Moneycal.',
};

export default function TermsOfService() {
  return (
    <main className="container" style={{ maxWidth: '800px', margin: '4rem auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Terms of Service</h1>
      <div className="review-content">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Movie Review by Moneycal (a subsidiary of moneycal.in), you accept and agree to be bound by the terms and provision of this agreement.
        </p>
        <h2>2. Use of Content</h2>
        <p>
          All movie reviews, articles, and analyses provided on this website are for informational and entertainment purposes only. 
          The opinions expressed are solely those of the respective authors. You may not reproduce, distribute, or transmit any content without prior written permission.
        </p>
        <h2>3. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party web sites or services that are not owned or controlled by Movie Review by Moneycal. 
          We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
        </p>
        <h2>4. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
        </p>
      </div>
    </main>
  );
}
