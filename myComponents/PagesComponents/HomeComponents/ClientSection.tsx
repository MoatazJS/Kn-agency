import React from "react";

export default function ClientSection() {
  const clients = [
    "Vogue Arabia",
    "GQ Middle East",
    "Emaar",
    "Four Seasons",
    "Dior",
    "Mercedes-Benz",
  ];
  return (
    <>
      <section
        id="clients"
        className="py-24 bg-kn-white px-6 md:px-12 border-t border-kn-gray-light"
      >
        <div className="container mx-auto">
          <h2 className="text-sm font-bold font-heading uppercase tracking-[0.2em] text-kn-gray mb-12 text-center">
            Trusted By Visionaries
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map((client) => (
              <span
                key={client}
                className="text-xl md:text-2xl font-heading font-bold text-kn-black cursor-default hover:text-kn-black/80"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
