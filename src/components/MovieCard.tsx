import Link from 'next/link';

interface MovieCardProps {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  rating: number;
}

export default function MovieCard({ title, slug, excerpt, coverImage, rating }: MovieCardProps) {
  return (
    <Link href={`/movies/${slug}`} className="movie-card glass">
      <div className="movie-card-img-wrapper">
        {/* Using a standard img tag for simplicity, Next.js Image component recommended for prod */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={coverImage} alt={title} className="movie-card-img" />
      </div>
      <div className="movie-card-content">
        <h3 className="movie-card-title">{title}</h3>
        <p className="movie-card-excerpt">{excerpt}</p>
        <div style={{ color: 'var(--primary-color)', fontWeight: 600 }}>
          ★ {rating.toFixed(1)} / 10
        </div>
      </div>
    </Link>
  );
}
