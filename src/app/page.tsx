// src/app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import MissionSection from "@/components/home/MissionSection";
import ReportViewer from "@/components/report-viewer/ReportViewer";

export default function Home() {
return (
<div className="flex flex-col pt-16">
    <HeroSection />
    <FeaturesSection />

    {/* Homepage Whitepaper Visualization */}
    <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
                Interactive Whitepaper: Process as Asset
            </h2>
            <div className="h-[80vh] w-full border rounded-lg shadow-lg overflow-hidden">
                <ReportViewer reportName="whitepaper" />
            </div>
        </div>
    </section>

    <MissionSection />
</div>
);
}