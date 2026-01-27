import React from "react";

export default function page() {
  return (
    <>
      <main className="min-h-screen bg-kn-white pt-32 pb-16 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col mb-24">
            <h1 className="text-6xl md:text-9xl font-bold font-heading uppercase tracking-tighter mb-8 text-kn-black">
              About <br /> KN
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-16 lg:gap-32 mb-32">
            <div className="md:w-1/3">
              <h2 className="text-sm font-bold font-heading uppercase tracking-[0.2em] text-kn-gray sticky top-32">
                Who We Are
              </h2>
            </div>
            <div className="md:w-2/3 space-y-12">
              <h3 className="text-3xl md:text-5xl font-bold font-heading leading-tight text-kn-black">
                K Network is a full‑service creative production house founded by
                filmmakers, directors, and producers who merge cinematic
                precision with digital mastery.
              </h3>
              <div className="text-xl md:text-2xl text-kn-gray-dark space-y-8">
                <p>
                  We craft high‑end visual experiences for brands across Egypt
                  and the Gulf, where every frame serves both art and strategy.
                </p>
                <p>
                  Our methodology is simple: we strip away the noise to reveal
                  the core narrative. By combining technical expertise with a
                  distinct artistic vision, we produce work that is not just
                  seen, but felt.
                </p>
                <p>
                  From initial concept to final color grade, we maintain an
                  uncompromising standard of quality, ensuring that every
                  project is a definitive statement of our clients&lsquo; brand
                  identity.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 lg:gap-32 border-t border-kn-gray-light pt-24">
            <div className="md:w-1/3">
              <h2 className="text-sm font-bold font-heading uppercase tracking-[0.2em] text-kn-gray">
                Our Philosophy
              </h2>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold font-heading text-kn-black mb-4">
                  Precision
                </h4>
                <p className="text-kn-gray text-lg">
                  We believe in the power of detail. Every shot, every cut, and
                  every pixel is intentional.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold font-heading text-kn-black mb-4">
                  Impact
                </h4>
                <p className="text-kn-gray text-lg">
                  Design and film are tools for influence. We create work that
                  drives action and emotion.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold font-heading text-kn-black mb-4">
                  Simplicity
                </h4>
                <p className="text-kn-gray text-lg">
                  Complexity is easy; simplicity is hard. We strive for elegance
                  and clarity in all we do.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold font-heading text-kn-black mb-4">
                  Innovation
                </h4>
                <p className="text-kn-gray text-lg">
                  We stay ahead of the curve, embracing new technologies and
                  techniques to tell better stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
