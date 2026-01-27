import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function ProjectCard({
  title,
  category,
  imageSrc,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative w-full border border-kn-gray-light bg-kn-white p-8", // Default styles
        "hover:bg-kn-gray-dark hover:border-kn-black transition-colors duration-500", // Hover effect
        "flex flex-col justify-between h-[400px]",
        "cursor-pointer",
        className,
      )}
    >
      {/* Content */}
      <div className="z-10 flex flex-col h-full justify-between">
        <div className="space-y-2">
          <h3
            className={cn(
              "text-3xl font-bold font-heading transition-colors duration-500",
              "text-kn-black group-hover:text-kn-white",
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-sm uppercase tracking-widest transition-colors duration-500",
              "text-kn-gray group-hover:text-kn-gray-light",
            )}
          >
            {category}
          </p>
        </div>

        <div className="relative w-full h-64 mt-4 overflow-hidden hidden md:block">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full bg-kn-gray-light/30 flex items-center justify-center">
              <span className="text-kn-gray text-xs">NO IMAGE</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
