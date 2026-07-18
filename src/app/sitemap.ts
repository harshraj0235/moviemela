import { MetadataRoute } from 'next';
import { getSortedMoviePostsData } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://Movie Review by Moneycal-premium.example.com';
  const posts = getSortedMoviePostsData();

  const movieUrls = posts.map((post) => ({
    url: `${baseUrl}/movies/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...movieUrls,
  ];
}
