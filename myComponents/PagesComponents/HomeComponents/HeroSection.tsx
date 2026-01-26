import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="min-h-screen bg-kn-white flex justify-center flex-col text-center">
        <div className="text-black flex justify-between flex-col">
          <h1 className="text-7xl font-bold">Lorem, ipsum dolor.</h1>
          <h1 className="text-7xl font-bold">Lorem, ipsum dolor.</h1>
          <p className="text-2xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            nemo aperiam assumenda odit amet!
          </p>
        </div>
        <div className="bg-black">
          <button>See our work</button>
        </div>
      </section>
    </>
  );
}
