import { getAllPosts, getPostBySlug } from "@/lib/utils/mdx.util";
import PostContent from "@/components/post/content";

import "katex/dist/katex.min.css";
// import "highlight.js/styles/github.css";
import PostHeader from "@/components/post/post_header";
import { ResolvingMetadata, Metadata } from "next";

export const runtime = "nodejs";
export const dynamic = "force-static";

interface Params {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: Params) {
  const { reading_time, content, frontmatter } = await getPostBySlug(
    params.slug
  );

  return (
    <div className="container max-w-4xl">
      <PostHeader frontmatter={frontmatter} reading_time={reading_time.text} />
      <PostContent content={content} />
    </div>
  );
}

export function generateStaticParams() {
  return getAllPosts();
}

export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { frontmatter } = await getPostBySlug(params.slug);
    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: frontmatter.title,
      description: frontmatter.abstract,
      applicationName: "Tasnim's Blog",
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.abstract,
        type: "article",
        publishedTime: new Date(frontmatter.publishedOn).toISOString(),
        authors: ["Tasnim Zotder"],
        tags: frontmatter.tags,
        siteName: "Tasnim's Blog",
        // TODO: Add image
      },
      twitter: {
        card: "summary_large_image",
        site: "@tasnimzotder",
        title: frontmatter.title,
        description: frontmatter.abstract,
        creator: "@tasnimzotder",
      },
    };
  } catch (error) {
    return {
      title: "Error: Post Not Found",
      description: "The post you are looking for does not exist.",
    };
  }
}
