import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = [{ title: "title1", description: "desc1", image: "image1" }];
export default function WorkSection() {
  return (
    <>
      <section className="py-32 bg-kn-black text-kn-white px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tight mb-8 md:mb-0">
              Selected <br /> Work
            </h2>
            <Link href="/work">
              <Button
                variant="secondary"
                className="border-kn-white text-kn-white hover:bg-kn-white hover:text-kn-black"
              >
                View All Projects
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard />
          </div>
        </div>
      </section>
    </>
  );
}
