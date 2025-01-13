"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CloudProps {
  className?: string;
  imageUrl: string;
  parallaxSpeed?: number;
}

export function Cloud({
  className = "",
  imageUrl,
  parallaxSpeed = 0.01,
}: CloudProps) {
  const [offset, setOffset] = useState(0);
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cloudRef.current) {
        const scrollY = window.scrollY;
        setOffset(scrollY * parallaxSpeed);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallaxSpeed]);

  return (
    <div
      ref={cloudRef}
      className={`fixed inset-x-0 bottom-0 pointer-events-none ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      <Image
        src={imageUrl}
        alt="Decorative cloud"
        layout="fill"
        objectFit="cover"
        className="opacity-70"
      />
    </div>
  );
}
