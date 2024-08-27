"use client";

import { useState } from "react";
import BlogCard from "./card";
import PaginationComp from "./pagination";
import { Frontmatter, Post } from "@/lib/utils/mdx.util";

const BlogList: React.FC<{ posts: Post[] }> = ({
  posts,
}: {
  posts: Post[];
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="py-4 md:py-4 lg:py-5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Blog
          </h1>
          {/* <p className="mt-4 text-muted-foreground md:text-lg">
            Explore our latest insights and stories.
          </p> */}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogList;
