import fs from "node:fs";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { UseMDXComponents } from "@/components/mdx/mdx-components";
import { remarkMermaid } from "@theguild/remark-mermaid";
import dynamic from "next/dynamic";

const Mermaid = dynamic(() => import("@/components/mdx/mermaid"), {
  ssr: false,
});

const contentSource: string = "src/content";

interface Frontmatter {
  id: number;
  title: string;
  abstract: string;
  isPublished: boolean;
  publishedOn: string;
  layout: string;
  tags: string[];
}

interface Post {
  slug: string;
  frontmatter: Frontmatter;
}

const getPostBySlug = async (slug: string) => {
  const fileName = fs
    .readdirSync(path.join(process.cwd(), contentSource))
    .find((file) => file.match(new RegExp(`.*.${slug}.mdx`))) as string;

  if (!fileName) {
    throw new Error(`No file found for slug: ${slug}`);
  }

  const source = fs.readFileSync(
    path.join(process.cwd(), contentSource, fileName),
    "utf-8"
  );
  const components = UseMDXComponents({});

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeKatex],
        remarkPlugins: [remarkGfm, remarkMath, remarkMermaid],
        remarkRehypeOptions: {},
      },
      parseFrontmatter: true,
    },
    components: {
      Mermaid,
      ...components,
    },
  });

  return { content, frontmatter: frontmatter as unknown as Frontmatter };
};

// export function getAllPosts() {
const getAllPosts = () => {
  const files = fs.readdirSync(path.join(process.cwd(), contentSource), {
    recursive: true,
  });

  return files
    .filter(
      (file) =>
        !fs
          .lstatSync(path.join(process.cwd(), contentSource, file.toString()))
          .isDirectory()
    )
    .map((file) => ({
      slug: file.toString().replace(".mdx", "").split(".")[1],
    }));
};

export { getPostBySlug, getAllPosts };
export type { Frontmatter, Post };
