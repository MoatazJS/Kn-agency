"use client";

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      name: "Creative Concept & Scripting",
      desc: "Strategy, Storyboarding, Copywriting",
      detail:
        "Transform ideas into compelling narratives with strategic storytelling",
    },
    {
      id: "02",
      name: "Pre-Production",
      desc: "Casting, Location Scouting, Logistics, Styling",
      detail: "Meticulous planning and preparation for flawless execution",
    },
    {
      id: "03",
      name: "Full-Scale Video Production",
      desc: "Cinematography, Directing, Lighting, Equipment",
      detail:
        "Cinematic excellence with state-of-the-art production capabilities",
    },
    {
      id: "04",
      name: "Post-Production",
      desc: "Editing, Color Grading, Sound Design, Motion Graphics",
      detail: "Polishing every frame to perfection with expert post-production",
    },
    {
      id: "05",
      name: "Photography",
      desc: "Campaign, Lifestyle, Product",
      detail: "Capturing moments that tell powerful visual stories",
    },
    {
      id: "06",
      name: "Digital & TV Advertising",
      desc: "Commercials, Social Content, Promos",
      detail: "Multi-platform content that drives engagement and results",
    },
  ];

  return (
    <main className="min-h-screen bg-kn-white relative overflow-hidden">
      {/* Light Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 relative">
        {/* Playful Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-kn-gray-light/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-kn-gray/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col mb-16 md:mb-20">
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading uppercase tracking-tighter mb-8 text-kn-black">
                What We
                <br />
                <span className="relative inline-block">
                  Create
                  {/* Playful Underline */}
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-linear-to-r from-kn-gray-light via-kn-gray to-kn-gray-dark opacity-20" />
                </span>
              </h1>

              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-12 h-12 border-4 border-kn-gray-light rotate-12 hidden md:block" />
            </div>

            <div className="max-w-3xl">
              <p className="text-xl md:text-2xl text-kn-gray-dark leading-relaxed mb-6">
                KN Agency is a full-service creative and production powerhouse
                specializing in visual storytelling that captivates and
                converts. From initial concept to final delivery, we craft
                premium content that elevates brands and resonates with
                audiences across all platforms.
              </p>
              <p className="text-lg md:text-xl text-kn-gray-dark leading-relaxed">
                Our integrated approach combines strategic thinking, artistic
                excellence, and technical precision to deliver campaigns that
                don&apos;t just look beautiful—they drive real results. Whether
                it&apos;s a high-impact commercial, an intimate brand story, or
                a full-scale digital campaign, we bring the same level of
                dedication and creativity to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-16 px-6 md:px-12 relative">
        <div className="container mx-auto">
          <div className="flex flex-col border-t border-kn-gray-light">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col md:flex-row items-baseline md:items-center py-12 md:py-16 border-b border-kn-gray-light transition-all duration-500 hover:bg-kn-white/50"
              >
                {/* Service Number */}
                <span className="text-sm font-mono text-kn-gray mr-8 md:w-32 transition-all duration-300 group-hover:text-kn-black group-hover:scale-110">
                  {service.id}
                </span>

                {/* Service Content */}
                <div className="flex-1">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-kn-black uppercase tracking-tight mb-3 transition-all duration-300 group-hover:translate-x-4 group-hover:text-kn-gray-dark">
                    {service.name}
                  </h3>
                  <p className="text-kn-gray-dark text-base md:text-lg mb-2 transition-opacity duration-300 opacity-70 group-hover:opacity-100">
                    {service.desc}
                  </p>
                  <p className="text-kn-gray-dark text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    {service.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="text-kn-gray-dark text-base md:text-lg uppercase tracking-widest mb-4">
              Ready to bring your vision to life?
            </p>
            <div className="text-3xl md:text-4xl font-bold font-heading text-kn-black">
              Let&apos;s create something extraordinary
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
