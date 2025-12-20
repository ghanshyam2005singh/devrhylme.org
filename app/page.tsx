import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Mission from "@/components/sections/Mission";
import Stats from "@/components/sections/Stats";
import CommunityCTA from "@/components/sections/CommunityCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <FeaturedProjects />
      <Stats />
      <CommunityCTA />
    </>
  );
}