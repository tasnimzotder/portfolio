import Link from "next/link";
import Image from "next/image";
import { PostFragment } from "@/generated/graphql";
import { getFormattedDate } from "@/lib/utils/time.util";
import { Post } from "@/lib/utils/mdx.util";

const BlogCard: React.FC<{ post: Post }> = ({ post }: { post: Post }) => {
  const url = "/posts/" + post.slug;

  const formattedDate = getFormattedDate(post.frontmatter.publishedOn);

  return (
    <div className="group relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg">
      <Link href={url} prefetch={false}>
        <div className="p-4 flex flex-col justify-between h-full">
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              {post.frontmatter.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-4">
              {post.frontmatter.abstract}
            </p>
          </div>

          <div className="flex flex-row justify-between my-4">
            <div className="mb-2 flex items-center space-x-2 text-sm text-muted-foreground">
              <span>{formattedDate}</span>
              {/* <span>•</span> */}
              {/* <span>{post.readTimeInMinutes} Minutes</span> */}
            </div>
            <div className="flex flex-wrap gap-2">
              {post.frontmatter.tags &&
                post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
