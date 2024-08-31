import fs from "node:fs";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { UseMDXComponents } from "@/components/mdx/mdx-components";
import { remarkMermaid } from "@theguild/remark-mermaid";
import dynamic from "next/dynamic";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import readingTime from "reading-time";
import { getSingletonHighlighter, Highlighter } from "shiki";
import { bundledLanguages } from "shiki/langs";

const Mermaid = dynamic(() => import("@/components/mdx/mermaid"), {
  ssr: false,
});

const contentSource: string = "src/content";

async function getHighlighterInstance(): Promise<Highlighter> {
  return getSingletonHighlighter({
    themes: ["github-dark", "github-light"],
    langs: Object.keys(bundledLanguages),
  });
}

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
    // TODO: redirect to 404 page
  }

  const source = fs.readFileSync(
    path.join(process.cwd(), contentSource, fileName),
    "utf-8",
  );
  const components = UseMDXComponents({});

  const prettyCodeOptions: Options = {
    getHighlighter: getHighlighterInstance,
    theme: {
      dark: "github-dark",
      light: "github-light",
    },
    bypassInlineCode: true,
    // theme: "github-dark",
    grid: true,
    defaultLang: {
      block: "plaintext",
      inline: "plaintext",
    },
    // transformers: [
    //   transformerCopyButton({
    //     visibility: "hover",
    //     feedbackDuration: 3_000,
    //   }),
    // ],
  };

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          rehypeKatex,
          [rehypePrettyCode, prettyCodeOptions],
        ],
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

  const reading_time = readingTime(source);

  return {
    reading_time,
    content,
    frontmatter: frontmatter as unknown as Frontmatter,
  };
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
          .isDirectory(),
    )
    .map((file) => ({
      slug: file.toString().replace(".mdx", "").split(".")[1],
    }));
};

export { getPostBySlug, getAllPosts };
export type { Frontmatter, Post };
