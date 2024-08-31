import Header from "@/components/header/header";
import ContactForm from "@/components/homepage/contact_form";
import Experiences from "@/components/homepage/experiences";
import BlogPosts from "@/components/homepage/posts";
import Projects from "@/components/homepage/projects";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      {/* TODO: implement Blog Posts */}
      {/* <BlogPosts /> */}
      <Projects />
      <Experiences />
      {/* <ContactForm /> */}
    </>
  );
};

export async function generateMetadata(): Promise<Metadata> {
  const info = {
    title: "Tasnim Zotder",
    description: "Tasnim Zotder's personal website.",
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
        siteName: "Tasnim Zotder",
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

export default Home;
