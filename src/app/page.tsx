// src/app/page.tsx
// C6 - Adjust layout for refactored sections
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import MissionSection from "@/components/home/MissionSection";

export default function Home() {
return (
// Added pt-16 to the main container to push content below the h-16 fixed header
<div className="flex flex-col pt-16">
<HeroSection />

  {/* Removed negative margin to accommodate new FeaturesSection layout */}
  <FeaturesSection />

  <WorkflowSection />
  
  <MissionSection />
</div>
);
}