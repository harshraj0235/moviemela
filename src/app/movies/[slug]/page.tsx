import { getMoviePostData, getSortedMoviePostsData } from '@/lib/posts';
import AdUnit from '@/components/AdUnit';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const postData = await getMoviePostData(resolvedParams.slug);
    return {
      title: postData.title,
      description: postData.excerpt,
      openGraph: {
        title: postData.title,
        description: postData.excerpt,
        images: [postData.coverImage],
        type: 'article',
      },
    };
  } catch (e) {
    return {
      title: 'Not Found',
    };
  }
}

export async function generateStaticParams() {
  const posts = getSortedMoviePostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function MovieReview({ params }: Params) {
  const resolvedParams = await params;
  let postData;
  try {
    postData = await getMoviePostData(resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  // Schema.org structured data for SEO ranking (Movie Review)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Movie',
      name: postData.title,
      image: postData.coverImage,
      director: {
        '@type': 'Person',
        name: postData.director,
      },
    },
    author: {
      '@type': 'Organization',
      name: 'CineReview Team',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: postData.rating.toString(),
      bestRating: '10',
    },
    datePublished: postData.date,
  };

  return (
    <main className="container" style={{ maxWidth: '800px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article>
        <header className="review-header">
          <div className="review-meta">
            Movie Review • {new Date(postData.date).toLocaleDateString()}
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{postData.title}</h1>
          <div style={{ fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>
            Rating: {postData.rating} / 10
          </div>
        </header>

        <AdUnit slotId="article-top-banner" />

        <div style={{ marginBottom: '3rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={postData.coverImage} alt={postData.title} style={{ width: '100%', display: 'block' }} />
        </div>

        <div className="review-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />

        <AdUnit slotId="article-bottom-banner" />
      </article>
    </main>
  );
}
