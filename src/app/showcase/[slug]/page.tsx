'use client';
import React, { useEffect } from 'react';
import ReportViewer from '@/components/report-viewer/ReportViewer';
import ShowcaseGame from '@/components/showcase/ShowcaseGame';
import ProjectSelector from '@/components/showcase/ProjectSelector';
import NextPageSection from '@/components/global/NextPageSection';
import { useReportStore } from '@/stores/reportStore';

export default function ShowcaseSlugPage({ params }: { params: { slug: string } }) {
  const { setAutoplay, setIsFullscreen } = useReportStore.getState();
  const slug = params.slug;

  useEffect(() => {
    // Special presentation logic for Anguilla project
    if (slug === 'anguilla') {
      // Small timeout to ensure component mount before state updates trigger
      setTimeout(() => {
        setIsFullscreen(true);
        setAutoplay(true);
      }, 100);
    } else {
        // Reset defaults for other views
        setIsFullscreen(false);
        setAutoplay(false);
    }
  }, [slug, setAutoplay, setIsFullscreen]);

  const renderContent = () => {
    switch (slug) {
      case 'game':
        return <ShowcaseGame />;
      case 'anguilla':
        return <ReportViewer reportName="anguilla" />;
      case 'report':
      default:
        return <ReportViewer reportName="showcase" />;
    }
  };

  return (
    <div className="w-full pt-16 flex flex-col min-h-screen">
      <div className="h-[calc(100vh-4rem)] flex flex-col relative">
        <ProjectSelector currentSlug={slug} />
        {renderContent()}
      </div>
      
      {/* Only show the NextPageSection if we are NOT in fullscreen mode (handled by ReportViewer CSS) 
          and not in the game view where it might be distracting */}
      {slug !== 'game' && (
          <NextPageSection
            title="Ready to Become a Citizen Architect?"
            description="The V2V Academy provides the pathway to master the skills of AI-assisted development and become a leader in the new digital frontier."
            buttonText="Explore the Academy"
            href="/academy"
          />
      )}
    </div>
  );
}