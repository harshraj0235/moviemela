import { getSortedMoviePostsData } from '@/lib/posts';
import MovieCard from '@/components/MovieCard';
import AdUnit from '@/components/AdUnit';

export default function Home() {
  const allPostsData = getSortedMoviePostsData();

  return (
    <main className="container">
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Discover the <span className="text-gradient">Best Movies</span>
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Read in-depth reviews, expert analyses, and honest ratings of the latest releases and timeless classics.
        </p>
      </section>
      
      <AdUnit slotId="home-top-banner" />

      <section>
        <h2 style={{ fontSize: '2rem', marginTop: '3rem', borderBottom: '1px solid var(--surface-color)', paddingBottom: '1rem' }}>
          Latest Reviews
        </h2>
        <div className="movie-grid">
          {allPostsData.map(({ slug, title, excerpt, coverImage, rating }) => (
            <MovieCard
              key={slug}
              slug={slug}
              title={title}
              excerpt={excerpt}
              coverImage={coverImage}
              rating={rating}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
