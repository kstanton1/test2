import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  // Fetch posts from multiple collections
  const blogPosts = (await getCollection('blog')) || [];
  const shopPosts = (await getCollection('shop')) || [];

  // Combine posts from all collections
  const allPosts = [...blogPosts, ...shopPosts];

  // Check if there are any posts before creating feed items
  const feedItems = allPosts.length > 0 ? allPosts.map((post) => ({
    title: post.data.title,
    link: `/${post.slug}/`,
    pubDate: post.data.publishDate,
    category: post.data.category, // Include 'category' field
    content: sanitizeHtml(parser.render(post.body)),
    ...post.frontmatter,
  })) : [];

  return rss({
    title: 'DAFT FM | Post Feed',
    description: 'Latest posts from DAFT FM',
    site: context.site,
    items: feedItems,
  });
}