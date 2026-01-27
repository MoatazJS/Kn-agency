"use client";

import { useState } from "react";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WorkCardProps } from "@/lib/interfaces/interface";
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Playful color accents from KN brand palette
const colorAccents = [
  "border-kn-gray-light shadow-kn-gray-light/20",
  "border-kn-gray shadow-kn-gray/20",
  "border-kn-gray-dark shadow-kn-gray-dark/20",
  "border-kn-white shadow-kn-white/10",
];

// Playful rotation variations
const rotations = [
  "rotate-[-2deg]",
  "rotate-[1deg]",
  "rotate-[-1deg]",
  "rotate-[2deg]",
];

export function WorkCard({ title, category, imageSrc, index }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Assign colors and rotations based on index for variety
  const accentClass = colorAccents[index % colorAccents.length];
  const rotationClass = rotations[index % rotations.length];

  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden",
        "transition-all duration-500 ease-out",
        "cursor-pointer",
        !isHovered && rotationClass,
        isHovered && "rotate-0 scale-105 z-10",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <div
        className={cn(
          "relative border-4 bg-kn-black",
          "transition-all duration-500",
          accentClass,
          "shadow-2xl",
          isHovered && "shadow-3xl",
        )}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-4/3 overflow-hidden bg-kn-gray-dark">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className={cn(
                "object-cover transition-all duration-700",
                "grayscale group-hover:grayscale-0",
                "scale-100 group-hover:scale-110",
              )}
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-kn-gray-dark via-kn-gray to-kn-gray-light flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold font-heading text-kn-white/20 mb-2">
                  {title.charAt(0)}
                </div>
                <span className="text-kn-white/40 text-xs uppercase tracking-widest">
                  {category}
                </span>
              </div>
            </div>
          )}

          {/* linear Overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-linear-to-t from-kn-black via-kn-black/50 to-transparent",
              "transition-opacity duration-500",
              "opacity-60 group-hover:opacity-80",
            )}
          />
        </div>

        {/* Content */}
        <div className="relative p-6 md:p-8">
          {/* Decorative Line */}
          <div
            className={cn(
              "absolute top-0 left-0 h-1 bg-linear-to-r transition-all duration-500",
              index % 4 === 0 && "from-kn-gray-light to-kn-gray",
              index % 4 === 1 && "from-kn-gray to-kn-white",
              index % 4 === 2 && "from-kn-gray-dark to-kn-gray-light",
              index % 4 === 3 && "from-kn-white to-kn-gray-dark",
              "w-0 group-hover:w-full",
            )}
          />

          {/* Category Badge */}
          <div className="mb-3">
            <span
              className={cn(
                "inline-block px-3 py-1 text-xs uppercase tracking-widest",
                "border transition-all duration-300",
                "text-kn-gray-light border-kn-gray-light/30",
                "group-hover:text-kn-white group-hover:border-kn-white",
                "group-hover:bg-kn-white/10",
              )}
            >
              {category}
            </span>
          </div>

          {/* Title */}
          <h3
            className={cn(
              "text-3xl md:text-4xl font-bold font-heading",
              "text-kn-white transition-all duration-300",
              "group-hover:translate-x-2",
            )}
          >
            {title}
          </h3>

          {/* Animated Underline */}
          <div
            className={cn(
              "h-0.5 bg-kn-white mt-4 transition-all duration-500",
              "w-0 group-hover:w-16",
            )}
          />

          {/* Hover Arrow */}
          <div
            className={cn(
              "absolute bottom-6 right-6 md:bottom-8 md:right-8",
              "text-kn-white text-2xl transition-all duration-300",
              "opacity-0 translate-x-2.5 group-hover:opacity-100 group-hover:translate-x-0",
            )}
          >
            →
          </div>
        </div>

        {/* Playful Corner Accent */}
        <div
          className={cn(
            "absolute top-0 right-0 w-16 h-16",
            "transition-all duration-500",
            "opacity-0 group-hover:opacity-100",
          )}
        >
          <div
            className={cn(
              "absolute top-0 right-0 w-full h-full",
              "border-t-4 border-r-4",
              index % 4 === 0 && "border-kn-gray-light",
              index % 4 === 1 && "border-kn-gray",
              index % 4 === 2 && "border-kn-white",
              index % 4 === 3 && "border-kn-gray-dark",
            )}
          />
        </div>
      </div>

      {/* Floating Shadow Effect */}
      <div
        className={cn(
          "absolute inset-0 -z-10 blur-xl transition-opacity duration-500",
          "opacity-0 group-hover:opacity-50",
          index % 4 === 0 && "bg-kn-gray-light",
          index % 4 === 1 && "bg-kn-gray",
          index % 4 === 2 && "bg-kn-white",
          index % 4 === 3 && "bg-kn-gray-dark",
        )}
      />
    </div>
  );
}
