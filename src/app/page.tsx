// src/app/page.tsx
// C3 - Home Page Implementation
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import MissionSection from "@/components/home/MissionSection";

export default function Home() {
return (
<div className="flex flex-col">
<HeroSection />


  {/* Added a separator/spacer for visual distinction */}
  <div className="mt-[10rem] md:mt-[18rem]">
    <FeaturesSection />
  </div>

  <WorkflowSection />
  
  {/* Mission Section uses LampContainer which handles its own background/layout */}
  <MissionSection />
</div>


);
}