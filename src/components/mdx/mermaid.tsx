"use client";

import React, { useEffect } from "react";
import mermaid from "mermaid";

// Define the props for the Mermaid component
interface MermaidProps {
  chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      fontFamily: "Inter, sans-serif",
      securityLevel: "sandbox",
      darkMode: true,
    });
    mermaid.contentLoaded();
  }, [chart]);

  return (
    <div className="mermaid flex flex-col items-center my-6 dark:bg-slate-100">
      {chart}
    </div>
  );
};

export default Mermaid;
