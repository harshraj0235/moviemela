import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about CineReview Premium and our mission.',
};

export default function About() {
  return (
    <main className="container" style={{ maxWidth: '800px', margin: '4rem auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About CineReview Premium</h1>
      <div className="review-content">
        <p>
          Welcome to <strong>CineReview Premium</strong>, your ultimate destination for honest, in-depth, and passionate movie reviews. 
          We believe that cinema is more than just entertainment; it is an art form that reflects our society, challenges our perspectives, and transports us to different worlds.
        </p>
        <p>
          Our team of dedicated film critics and enthusiasts work tirelessly to bring you the latest reviews of theatrical releases, streaming blockbusters, and timeless classics. 
          We aim to provide you with spoiler-free insights, critical analyses, and fair ratings to help you decide what to watch next.
        </p>
        <p>
          CineReview Premium is proudly a subsidiary of <strong>moneycal.in</strong>, extending our commitment to quality content and user trust.
        </p>
      </div>
    </main>
  );
}
