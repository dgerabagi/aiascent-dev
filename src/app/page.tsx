// src/app/page.tsx
// C4 - Adjust layout for fixed header
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import MissionSection from "@/components/home/MissionSection";

export default function Home() {
return (
// Added pt-16 to the main container to push content below the h-16 fixed header
<div className="flex flex-col pt-16">
<HeroSection />

  <div className="mt-[-10rem] md:mt-[-15rem]">
    <FeaturesSection />
  </div>

  <WorkflowSection />
  
  <MissionSection />
</div>
);
}