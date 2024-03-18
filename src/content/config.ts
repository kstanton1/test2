// src/content/config.ts

// Import necessary modules
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      excerpt: z.string().nullable().optional(),
      publishDate: z.union([
        z.date(),
        z.string().refine(value => !isNaN(Date.parse(value)), {
          message: "publishDate must be a valid date string",
        })
      ]).optional(),
      image: z.string().optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
      website: z.string().optional(),
      author: z.string().optional(),
      authorImage: z.string().optional(),
      authorTwitterUrl: z.string().optional(),
      authorFacebookUrl: z.string().optional(),
      authorWebsite: z.string().optional(),
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
    "shop": postsCollection,
    "post": postsCollection,
};

// Define the GET function as an async function
export async function GET(context) {
    // Retrieve the collection named 'blog'
    const blog = await getCollection('blog');
  
    // Generate the RSS feed
    return rss({
        title: 'DAFT FM',
        description: '',
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            author: post.data.author,
            pubDate: post.data.pubDate,
            description: post.data.description,
            customData: post.data.customData,
            content: post.body, // Assuming you have the content of each post in post.body
            link: `/${post.slug}/` // Make sure the link structure matches your routing
        })),
    });
}