import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the CineReview Premium team.',
};

export default function Contact() {
  return (
    <main className="container" style={{ maxWidth: '800px', margin: '4rem auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Contact Us</h1>
      <div className="review-content">
        <p>
          We would love to hear from you! Whether you have feedback on a review, suggestions for a movie we should watch, or business inquiries, feel free to reach out.
        </p>
        <p>
          <strong>Email:</strong> contact@moneycal.in<br/>
          <strong>Address:</strong> CineReview Premium (Subsidiary of moneycal.in)
        </p>
        <div style={{ marginTop: '3rem', padding: '2rem', border: '1px solid var(--glass-border)', borderRadius: '12px', background: 'var(--glass-bg)' }}>
          <h2 style={{marginTop: 0}}>Send us a message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--surface-color)', background: '#111', color: '#fff' }} />
            <input type="email" placeholder="Your Email" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--surface-color)', background: '#111', color: '#fff' }} />
            <textarea placeholder="Your Message" rows={5} style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--surface-color)', background: '#111', color: '#fff' }}></textarea>
            <button style={{ padding: '1rem', background: 'var(--primary-color)', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
