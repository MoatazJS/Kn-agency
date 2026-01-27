import AboutSection from "@/myComponents/PagesComponents/HomeComponents/AboutSection";
import ClientSection from "@/myComponents/PagesComponents/HomeComponents/ClientSection";
import CreateSection from "@/myComponents/PagesComponents/HomeComponents/CreateSection";
import HeroSection from "@/myComponents/PagesComponents/HomeComponents/HeroSection";
import WorkSection from "@/myComponents/PagesComponents/HomeComponents/WorkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CreateSection />
      <WorkSection />
      <AboutSection />
      <ClientSection />
    </>
  );
}
