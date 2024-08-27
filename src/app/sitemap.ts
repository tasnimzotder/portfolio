import { getAllPosts } from "@/lib/utils/mdx.util";
import { MetadataRoute } from "next";

const MAX_POSTS = 1000;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL as string;
  const posts = getAllPosts().slice(0, MAX_POSTS);

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  const pages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  return [...postEntries, ...pages];
}
