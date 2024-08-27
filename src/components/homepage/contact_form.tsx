import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 max-w-5xl">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a question or want to collaborate? Fill out the form below, and I&apos;ll get back to you as soon as
            possible.
          </p>
        </div>
        <form className="mx-auto max-w-md space-y-4">
          <Input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Textarea
            placeholder="Message"
            className="w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
