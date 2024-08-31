import BlogList from "@/components/blog/blog_list";
import {
  Frontmatter,
  getAllPosts,
  getPostBySlug,
  Post,
} from "@/lib/utils/mdx.util";
import { Metadata, ResolvingMetadata } from "next";

export const runtime = "nodejs";
export const dynamic = "force-static";

const PostsPage = async () => {
  const posts = (await Promise.all(
    getAllPosts().map(async ({ slug }) => {
      const { frontmatter } = await getPostBySlug(slug);
      return { slug, frontmatter };
    })
  )) as Post[];

  // sort by date
  posts.sort((a, b) => {
    return (
      new Date(b.frontmatter.publishedOn).getTime() -
      new Date(a.frontmatter.publishedOn).getTime()
    );
  });

  return (
    <div className="container my-4 max-w-5xl">
      <BlogList posts={posts} />
    </div>
  );
};

export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map(({ slug }) => ({ params: { slug } }));
}

export async function generateMetadata(): Promise<Metadata> {
  const info = {
    title: "Tasnim's Blog",
    description: "A collection of blog posts by Tasnim Zotder.",
  };

  try {
    // const previousImages = (await parent).openGraph?.images || [];

    return {
      title: info.title,
      description: info.description,
      openGraph: {
        title: info.title,
        description: info.description,
        type: "website",
        ttl: 60 * 60 * 24 * 1, // 1 day
      },
      twitter: {
        card: "summary_large_image",
        site: "@tasnimzotder",
        title: info.title,
        description: info.description,
      },
    };
  } catch (error) {
    return {
      title: "Error: Page Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

export default PostsPage;
