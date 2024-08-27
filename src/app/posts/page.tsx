import BlogList from "@/components/blog/blog_list";
import {
  Frontmatter,
  getAllPosts,
  getPostBySlug,
  Post,
} from "@/lib/utils/mdx.util";

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

export default PostsPage;
