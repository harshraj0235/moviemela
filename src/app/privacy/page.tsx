import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Movie Review by Moneycal.',
};

export default function PrivacyPolicy() {
  return (
    <main className="container" style={{ maxWidth: '800px', margin: '4rem auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Privacy Policy</h1>
      <div className="review-content">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Movie Review by Moneycal, a subsidiary of moneycal.in. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website.
        </p>
        <h2>2. Data Collection and Google AdSense</h2>
        <p>
          We use third-party advertising companies, including Google AdSense, to serve ads when you visit our website. 
          These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
        </p>
        <ul>
          <li>Third party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to your website or other websites.</li>
          <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
          <li>Users may opt-out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" style={{color: 'var(--primary-color)'}}>Ads Settings</a>.</li>
        </ul>
        <h2>3. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us via our Contact page.</p>
      </div>
    </main>
  );
}
