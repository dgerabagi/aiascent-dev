// src/app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import MissionSection from "@/components/home/MissionSection";

export default function Home() {
return (
// C15 Fix: Added pt-16 here to compensate for its removal from the main layout
<div className="flex flex-col pt-16">
<HeroSection />
<FeaturesSection />
<WorkflowSection />
<MissionSection />
</div>
);
}