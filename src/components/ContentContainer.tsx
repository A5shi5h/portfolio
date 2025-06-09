"use client";

import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return (
    <div className="relative">
      <div className="h-screen" /> {/* Spacer for hero section */}
      <div className="relative bg-white/80 backdrop-blur-sm z-20">
        {children}
      </div>
    </div>
  );
}
