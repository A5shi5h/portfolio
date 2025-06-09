"use client";

import { ReactNode, useEffect, useState } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  maxScale?: number; // Maximum scale factor for zoom
}

export default function ParallaxWrapper({
  children,
  maxScale = 1.1, // Default max scale of 110%
}: ParallaxWrapperProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1)
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / scrollHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate scale based on scroll progress
  const scale = 1 + scrollProgress * (maxScale - 1);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen"
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
}
