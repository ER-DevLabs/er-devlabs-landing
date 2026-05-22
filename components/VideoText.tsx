"use client";

import { useRef } from "react";

interface VideoTextProps {
  children: React.ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "span" | "div";
}

/**
 * Renders text with the video playing through the letter shapes using
 * CSS mix-blend-mode: multiply. Works on dark backgrounds — video pixels
 * multiply over white text (showing video) and collapse over dark bg (staying dark).
 */
export default function VideoText({ children, className = "", tag = "span" }: VideoTextProps) {
  const Tag = tag;

  return (
    <span className="relative inline-block" style={{ isolation: "isolate" }}>
      {/* The actual text — must be white for multiply to reveal video inside letters */}
      <Tag className={`relative z-[1] text-white ${className}`}>
        {children}
      </Tag>

      {/* Video overlay: multiply blends video onto white text, stays dark over dark bg */}
      <span
        aria-hidden="true"
        className="absolute inset-0 z-[2] overflow-hidden pointer-events-none rounded-sm"
        style={{ mixBlendMode: "multiply" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/modern-abstract-background.mp4" type="video/mp4" />
        </video>
      </span>
    </span>
  );
}
