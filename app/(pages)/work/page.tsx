"use client";

import { WorkCard } from "@/myComponents/PagesComponents/WorkComponents/WorkCard";

const projects = [
  { title: "Lumina", category: "Brand & Web", imageSrc: "" },
  { title: "Apex Fin", category: "Product Design", imageSrc: "" },
  { title: "Mono Space", category: "Architecture", imageSrc: "" },
  { title: "Velvet", category: "E-commerce", imageSrc: "" },
  { title: "Catalyst", category: "Motion Graphics", imageSrc: "" },
  { title: "Echo", category: "Sound Design", imageSrc: "" },
  { title: "Prism", category: "Photography", imageSrc: "" },
  { title: "Nexus", category: "Strategy", imageSrc: "" },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-kn-black relative overflow-hidden">
      {/* Light Hero Section for Navbar Visibility */}
      <section className="bg-kn-white pt-32 pb-16 px-6 md:px-12 relative">
        {/* Light Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle Orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-kn-gray-dark/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-kn-gray-light/5 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Decorative Lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-kn-gray-light/10 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-linear-to-b from-transparent via-kn-gray/10 to-transparent" />
        </div>

        <div className="container mx-auto relative z-10">
          {/*Hero Section */}
          <div className="flex flex-col mb-12 md:mb-16">
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading uppercase tracking-tighter mb-6 text-kn-black">
                Our Creative
                <br />
                <span className="relative inline-block">
                  Playground
                  {/* Playful Underline */}
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-linear-to-r from-kn-gray-light via-kn-gray to-kn-gray-dark opacity-30" />
                </span>
              </h1>

              {/* Decorative Element */}
              <div className="absolute -top-8 -right-8 w-16 h-16 border-4 border-kn-gray-dark rotate-12 hidden md:block" />
            </div>

            <p className="text-lg md:text-xl text-kn-gray-dark max-w-2xl mt-6 leading-relaxed">
              Where bold ideas meet stunning execution. Each project is a unique
              story, crafted with passion and precision.
            </p>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12 mt-12 flex-wrap">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold font-heading text-kn-black group-hover:text-kn-gray-dark transition-colors">
                  {projects.length}+
                </div>
                <div className="text-sm text-kn-gray uppercase tracking-widest mt-1">
                  Projects
                </div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold font-heading text-kn-black group-hover:text-kn-gray-dark transition-colors">
                  100%
                </div>
                <div className="text-sm text-kn-gray uppercase tracking-widest mt-1">
                  Passion
                </div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold font-heading text-kn-black group-hover:text-kn-gray-dark transition-colors">
                  ∞
                </div>
                <div className="text-sm text-kn-gray uppercase tracking-widest mt-1">
                  Creativity
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Cards Section */}
      <section className="bg-kn-black pt-16 pb-16 px-6 md:px-12 relative">
        {/* Dark Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-kn-gray-light/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-kn-gray/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-kn-white/5 rounded-full blur-3xl animate-pulse delay-2000" />

          {/* Decorative Lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-kn-gray-light/20 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-linear-to-b from-transparent via-kn-gray/20 to-transparent" />
        </div>

        <div className="container mx-auto relative z-10">
          {/* Staggered Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`
                                ${index % 3 === 1 ? "md:mt-16" : ""}
                                ${index % 3 === 2 ? "md:mt-32" : ""}
                                ${index === 0 || index === 3 || index === 6 ? "lg:col-span-1" : ""}
                            `}
              >
                <WorkCard
                  title={project.title}
                  category={project.category}
                  imageSrc={project.imageSrc}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/*  Footer Message */}
          <div className="mt-32 flex flex-col items-center text-center">
            <div className="relative">
              <p className="text-kn-gray text-base md:text-lg uppercase tracking-widest mb-4">
                Like what you see?
              </p>
              <div className="text-2xl md:text-3xl font-bold font-heading text-kn-white mb-2">
                Let&rsquo;s create something amazing together
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
