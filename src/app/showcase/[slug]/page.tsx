'use client';
import React, { useEffect } from 'react';
import ReportViewer from '@/components/report-viewer/ReportViewer';
import ShowcaseGame from '@/components/showcase/ShowcaseGame';
import NextPageSection from '@/components/global/NextPageSection';
import { useReportStore } from '@/stores/reportStore';

export default function ShowcaseSlugPage({ params }: { params: { slug: string } }) {
  const { setAutoplay, setIsFullscreen } = useReportStore.getState();
  const slug = params.slug;

  // C8: Reset presentation defaults on mount to ensure "normal" viewing mode
  useEffect(() => {
    setIsFullscreen(false);
    setAutoplay(false);
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
    // C10: Updated padding to pt-14 (mobile) and pt-16 (desktop)
    <div className="w-full pt-14 md:pt-16 flex flex-col min-h-screen">
      {/* C10: Updated height to use dvh for mobile address bar handling and adjust for smaller header */}
      <div className="h-[calc(100dvh-3.5rem)] md:h-[calc(100vh-4rem)] flex flex-col relative">
        {renderContent()}
      </div>
      
      {/* Only show the NextPageSection if we are not in the game view */}
      {slug !== 'game' && (
          <NextPageSection
            title="Ready to Become a Citizen Architect?"
            description="The V2V Academy provides the pathway to master the skills of AI-assisted development and become a leader in the new digital frontier."
            buttonText="Explore the Academy"
            href="/academy"
            className="mt-0" 
          />
      )}
    </div>
  );
}