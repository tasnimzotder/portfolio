import Header from "@/components/header/header";
import ContactForm from "@/components/homepage/contact_form";
import Experiences from "@/components/homepage/experiences";
import BlogPosts from "@/components/homepage/posts";
import Projects from "@/components/homepage/projects";
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

export default Home;
