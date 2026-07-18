import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDirectory = path.join(__dirname, '../content/movies');
const outputFile = path.join(__dirname, '../src/lib/movies.json');

async function buildData() {
  if (!fs.existsSync(postsDirectory)) {
    console.log('No movies directory found.');
    fs.writeFileSync(outputFile, JSON.stringify([]));
    return;
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue;

    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    posts.push({
      slug,
      contentHtml,
      ...matterResult.data
    });
  }

  // Sort by date descending
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
  console.log(`Successfully built data for ${posts.length} movies.`);
}

buildData().catch(console.error);
