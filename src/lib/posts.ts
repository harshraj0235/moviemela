import moviesData from './movies.json';

export interface MoviePostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  rating: number;
  director: string;
  contentHtml?: string;
}

export function getSortedMoviePostsData(): MoviePostData[] {
  return moviesData as MoviePostData[];
}

export async function getMoviePostData(slug: string): Promise<MoviePostData> {
  const post = moviesData.find((m: any) => m.slug === slug);
  if (!post) {
    throw new Error(`Movie with slug ${slug} not found`);
  }
  return post as MoviePostData;
}
