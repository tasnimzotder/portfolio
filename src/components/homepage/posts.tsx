import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

const BlogPosts: React.FC = () => {
  return (
    <section className="bg-muted py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Latest Blog Posts</h2>
            <p className="text-muted-foreground">Check out my latest blog posts.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPostsData.map((post, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={post.link}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const blogPostsData = [
  {
    title: "Automating Infrastructure with Terraform",
    description: "Learn how to use Terraform to automate your infrastructure and achieve consistent, reliable deployments.",
    link: "#"
  },
  {
    title: "Implementing Robust Monitoring with Prometheus",
    description: "Discover how to set up a comprehensive monitoring solution using Prometheus and Grafana to gain visibility into your infrastructure.",
    link: "#"
  },
  {
    title: "Streamlining Deployments with GitOps",
    description: "Learn how to implement a GitOps workflow to automate your application deployments and ensure consistency across environments.",
    link: "#"
  }
];

export default BlogPosts;
