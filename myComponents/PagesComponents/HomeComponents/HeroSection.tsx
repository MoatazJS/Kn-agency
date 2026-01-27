import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative pt-36 min-h-screen w-full flex flex-col justify-center items-center px-6 bg-kn-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10 space-y-12">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-heading tracking-tighter text-kn-black leading-[0.9] uppercase">
          Cinematic Stories. <br />
          Strategic Impact.
        </h1>

        <p className="text-lg md:text-xl text-kn-gray-dark tracking-wide max-w-2xl mx-auto">
          A full‑service creative production house merging film precision with
          digital mastery.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center py-8">
          <Button variant="primary">View Our Work</Button>
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none bg-noise opacity-20"></div>
    </section>
  );
}
