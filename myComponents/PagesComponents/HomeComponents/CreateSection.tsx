import React from "react";
const services = [
  {
    id: "01",
    name: "Creative Concept & Scripting",
    desc: "Strategy, Storyboarding, Copywriting",
  },
  {
    id: "02",
    name: "Pre-Production",
    desc: "Casting, Location Scouting, Logistics",
  },
  {
    id: "03",
    name: "Full-Scale Video Production",
    desc: "Cinematography, Directing, Lighting",
  },
  {
    id: "04",
    name: "Post-Production",
    desc: "Editing, Color Grading, Sound Design",
  },
  { id: "05", name: "Photography", desc: "Campaigns, Product, Editorial" },
  {
    id: "06",
    name: "Digital & TV Advertising",
    desc: "Commercials, Social Content, Promos",
  },
];
export default function CreateSection() {
  return (
    <>
      <section id="section" className="py-32 bg-kn-white px-6 md:px-12">
        <div className="container mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold font-heading uppercase tracking-[0.2em] text-kn-gray sticky top-32">
              What We Create
            </h2>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
