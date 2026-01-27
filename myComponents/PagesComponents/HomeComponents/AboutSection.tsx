import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 bg-kn-white px-6 md:px-12 flex flex-col md:flex-row gap-16 justify-between items-start"
    >
      <div className="w-full md:w-1/3">
        <h2 className="text-sm font-bold font-heading uppercase tracking-[0.2em] text-kn-gray">
          Who We Are
        </h2>
      </div>

      <div className="w-full md:w-2/3 space-y-8">
        <h3 className="text-2xl md:text-3xl font-bold font-heading leading-tight text-kn-black">
          K Network is a full‑service creative production house founded by
          filmmakers, directors, and producers who merge cinematic precision
          with digital mastery.
        </h3>
        <p className="text-xl text-kn-gray-dark max-w-2xl">
          We craft high‑end visual experiences for brands across Egypt and the
          Gulf, where every frame serves both art and strategy.
        </p>
      </div>
    </section>
  );
}
