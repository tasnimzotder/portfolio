import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function UseMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, href }) => (
      <a href={href} className="styledLink">
        {children}
      </a>
    ),
    // img: (props) => <Image style={...props as ImageProps} />,
    ...components,
  };
}
