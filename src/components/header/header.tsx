import React from "react";

const Header: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col items-end justify-center px-4 py-20 md:py-32 max-w-5xl">
      <div className="space-y-4 text-left max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Tasnim Zotder
        </h1>
        <p className="text-xl text-muted-foreground">
          DevOps Engineer (Intern)
        </p>
        {/* <p className="max-w-[600px] text-muted-foreground">
          I&apos;m a passionate DevOps engineer with a strong background in
          automating infrastructure and streamlining deployment processes. I
          love solving complex problems and helping teams deliver high-quality
          software faster.
        </p> */}
      </div>
    </section>
  );
};

export default Header;
